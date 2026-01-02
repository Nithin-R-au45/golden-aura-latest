import fs from "fs";
import { execSync } from "child_process";

try {
  if (!fs.existsSync("dist")) {
    fs.mkdirSync("dist");
  }
  // Mock build script for now as it is expected by package.json
  console.log("Building server...");
} catch (e) {
  console.error(e);
  process.exit(1);
}
