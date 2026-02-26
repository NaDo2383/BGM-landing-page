const fs = require("fs")
const path = require("path")
const { execSync } = require("child_process")

const root = path.resolve(__dirname, "..")
const deploy = path.join(root, "deploy")
const standalone = path.join(root, ".next", "standalone")
const staticSrc = path.join(root, ".next", "static")
const staticDest = path.join(deploy, ".next", "static")
const publicSrc = path.join(root, "public")
const publicDest = path.join(deploy, "public")
const envSrc = path.join(root, ".env")
const envDest = path.join(deploy, ".env")
const zipOutput = path.join(root, "deploy.zip")

console.log("📦 Preparing deployment package...")

try {
  // 1. Clean existing deploy directory
  if (fs.existsSync(deploy)) {
    console.log("   Cleaning existing deploy directory...")
    fs.rmSync(deploy, { recursive: true, force: true })
  }

  // 2. Copy Standalone (Base)
  if (!fs.existsSync(standalone)) {
    console.error(
      '❌ Error: .next/standalone not found. Please run "npm run build" first.',
    )
    process.exit(1)
  }
  console.log("   Copying standalone build...")
  fs.cpSync(standalone, deploy, { recursive: true })

  // 3. Copy Static Assets
  if (fs.existsSync(staticSrc)) {
    console.log("   Copying static assets...")
    if (!fs.existsSync(path.dirname(staticDest))) {
      fs.mkdirSync(path.dirname(staticDest), { recursive: true })
    }
    fs.cpSync(staticSrc, staticDest, { recursive: true })
  } else {
    console.warn("⚠️  Warning: .next/static not found.")
  }

  // 4. Copy Public Folder
  if (fs.existsSync(publicSrc)) {
    console.log("   Copying public assets...")
    fs.cpSync(publicSrc, publicDest, { recursive: true })
  }

  // 5. Copy .env
  if (fs.existsSync(envSrc)) {
    console.log("   Copying .env file...")
    fs.copyFileSync(envSrc, envDest)
  } else {
    console.warn("⚠️  Warning: .env file not found in root.")
  }

  // 6. Create Zip File
  console.log("   Creating deploy.zip...")
  if (fs.existsSync(zipOutput)) {
    fs.unlinkSync(zipOutput)
  }

  if (process.platform === "win32") {
    // Windows: Use PowerShell Compress-Archive
    execSync(
      `powershell -Command "cd '${deploy}'; Compress-Archive -Path * -DestinationPath '${zipOutput}' -Force"`,
      { stdio: "inherit" },
    )
  } else {
    // Linux/Mac: Use zip command
    execSync(`zip -r "${zipOutput}" .`, { cwd: deploy, stdio: "inherit" })
  }

  // 7. Cleanup
  console.log("   Cleaning up temporary deploy folder...")
  // fs.rmSync(deploy, { recursive: true, force: true })

  console.log('\n✅ "deploy.zip" is ready! You can now copy it to your server.')
} catch (error) {
  console.error("❌ Failed to prepare deploy:", error)
  process.exit(1)
}
