import type { NextConfig } from "next";
import { execSync } from "child_process";

// starts a command line process to get the git hash
const commitHash = execSync('git log --pretty=format:"%h" -n1')
  .toString()
  .trim();

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true, //  Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  env: {
    COMMIT_HASH: commitHash,
  },
  images: {
    unoptimized: true, //I hate nexts docs, this needs to be set for static output to work.
  },
};

export default nextConfig;
