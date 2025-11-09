import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  server: {
    FAL_KEY: z.string(),
  },
  runtimeEnv: {
    FAL_KEY: process.env.FAL_KEY,
  },
});
