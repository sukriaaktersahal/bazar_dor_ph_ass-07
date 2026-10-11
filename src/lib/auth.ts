// auth.ts file details
import { betterAuth } from "better-auth";

export const auth = betterAuth({
  database: { type: "memory" },
  emailAndPassword: {
    enabled: true,
    minPasswordLength: 6,
  },
    socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID || "dummy-google-id",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "dummy-google-secret",
    },
    github: {
      clientId: process.env.GITHUB_CLIENT_ID || "dummy-github-id",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || "dummy-github-secret",
    },
  },
    session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24, // 1 day
  },
});
