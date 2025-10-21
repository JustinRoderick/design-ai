import { createAuthClient } from "better-auth/react";
import { polarClient } from "@polar-sh/better-auth";
import type {} from "better-auth";

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  plugins: [polarClient()],
});

export const signIn = async () => {
  const data = await authClient.signIn.social({
    provider: "google",
  });
};
