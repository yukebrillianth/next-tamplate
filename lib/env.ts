import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod/v4';

export const env = createEnv({
  /**
   * Server-only environment variables
   * These are not exposed to the client
   */
  server: {
    NODE_ENV: z
      .enum(['development', 'test', 'production'])
      .default('development'),
    // Add your server-side env vars here
    // DATABASE_URL: z.string().url(),
    // API_SECRET: z.string().min(1),
  },

  /**
   * Client-side environment variables
   * Must be prefixed with NEXT_PUBLIC_
   */
  client: {
    // Add your client-side env vars here
    // NEXT_PUBLIC_API_URL: z.string().url(),
    // NEXT_PUBLIC_APP_URL: z.string().url(),
  },

  /**
   * Runtime environment variables
   * Destructure from process.env
   */
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    // Add runtime values here matching server/client keys
    // DATABASE_URL: process.env.DATABASE_URL,
    // NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },

  /**
   * Skip validation for Docker builds
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,

  /**
   * Makes it so that empty strings are treated as undefined
   */
  emptyStringAsUndefined: true,
});
