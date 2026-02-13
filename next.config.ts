import type { NextConfig } from "next";
import { execSync } from "child_process";

// starts a command line process to get the git hash
const commitHash = execSync('git log --pretty=format:"%h" -n1')
  .toString()
  .trim();

const nextConfig: NextConfig = {
  env: {
    COMMIT_HASH: commitHash,
    APP_ENVIRONMENT: "DEVELOPMENT",
  },
  images: {
    // minimumCacheTTL: 14400, // 4 hours
    minimumCacheTTL: 0, // 4 hours
    qualities: [75, 100],
  },
};

export default nextConfig;
