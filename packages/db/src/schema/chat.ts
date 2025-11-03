import {
  pgTable,
  text,
  timestamp,
  boolean,
  serial,
  jsonb,
} from "drizzle-orm/pg-core";
import { user } from "./auth";

export const chat = pgTable("chat", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  title: text("title"),
  spaceType: text("space_type"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
  isArchived: boolean("is_archived").notNull().default(false),
});

export const message = pgTable("message", {
  id: text("id").primaryKey(),
  chatId: text("chat_id")
    .notNull()
    .references(() => chat.id, { onDelete: "cascade" }),
  role: text("role").notNull(),
  content: text("content").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  metadata: jsonb("metadata"),
});

export const image = pgTable("image", {
  id: text("id").primaryKey(),
  messageId: text("message_id")
    .notNull()
    .references(() => message.id, { onDelete: "cascade" }),
  s3Key: text("s3_key").notNull(),
  s3Bucket: text("s3_bucket").notNull(),
  presignedUrl: text("presigned_url"),
  urlExpiresAt: timestamp("url_expires_at"),
  imageType: text("image_type").notNull(),
  width: serial("width"),
  height: serial("height"),
  fileSize: serial("file_size"),
  mimeType: text("mime_type"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  generationMetadata: jsonb("generation_metadata"),
});

export const designPreferences = pgTable("design_preferences", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" })
    .unique(),
  preferredStyles: jsonb("preferred_styles"),
  colorPreferences: jsonb("color_preferences"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
