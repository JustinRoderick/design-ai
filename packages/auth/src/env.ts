import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  server: {
    POLAR_PRODUCT_ID: z.string(),
    POLAR_SUCCESS_URL: z.url(),
    POLAR_ACCESS_TOKEN: z.string(),
  },
  runtimeEnv: {
    POLAR_PRODUCT_ID: process.env.POLAR_PRODUCT_ID,
    POLAR_SUCCESS_URL: process.env.POLAR_SUCCESS_URL,
    POLAR_ACCESS_TOKEN: process.env.POLAR_ACCESS_TOKEN,
  },
});
