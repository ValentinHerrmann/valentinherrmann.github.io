const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const workspaceRoot = process.cwd();
const bundlerBinary = resolveBundlerBinary();
if (!bundlerBinary) {
  console.warn(
    "Bundler binary not found inside the repository; falling back to the `bundle` command from your PATH."
  );
}
const bundlerCommand = bundlerBinary || "bundle";
const bundleArgs = [
  "exec",
  "jekyll",
  "serve",
  "--host",
  "127.0.0.1",
  "--port",
  "4000",
  "--livereload",
  "--livereload-port",
  "35729",
];

const child = spawn(bundlerCommand, bundleArgs, {
  stdio: "inherit",
  env: {
    ...process.env,
    BUNDLE_GEMFILE: `${workspaceRoot}/Gemfile`,
  },
});

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }
  process.exit(code ?? 0);
});

child.on("error", (error) => {
  console.error("Failed to launch Jekyll via bundler:", error.message);
  process.exit(error.errno === "ENOENT" ? 1 : 1);
});

for (const signal of ["SIGINT", "SIGTERM", "SIGQUIT"]) {
  process.on(signal, () => {
    child.kill(signal);
    process.exit();
  });
}

function resolveBundlerBinary() {
  const candidates = [];
  const configuredPath = readConfiguredBundlePath();

  if (configuredPath) {
    candidates.push(path.join(workspaceRoot, configuredPath));
  }

  candidates.push(path.join(workspaceRoot, "vendor", "bundle"));

  for (const candidatePath of candidates) {
    const resolved = findBundlerInPath(candidatePath);
    if (resolved) {
      return resolved;
    }
  }

  return null;
}

function readConfiguredBundlePath() {
  const configPath = path.join(workspaceRoot, ".bundle", "config");

  if (!fs.existsSync(configPath)) {
    return null;
  }

  const configContents = fs.readFileSync(configPath, "utf8");
  const line = configContents
    .split(/\r?\n/)
    .map((part) => part.trim())
    .find((part) => part.startsWith("BUNDLE_PATH:"));

  if (!line) {
    return null;
  }

  const value = line.replace(/^BUNDLE_PATH:\s*/, "").trim();
  return value.replace(/^["']|["']$/g, "") || null;
}

function findBundlerInPath(bundleDir) {
  const rubyRoot = path.join(bundleDir, "ruby");

  if (!fs.existsSync(rubyRoot)) {
    const fallback = path.join(bundleDir, "bin", "bundle");
    return fs.existsSync(fallback) ? fallback : null;
  }

  const candidates = fs
    .readdirSync(rubyRoot, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)
    .filter(Boolean);

  if (!candidates.length) {
    return null;
  }

  candidates.sort(compareVersion);
  for (let i = candidates.length - 1; i >= 0; i -= 1) {
    const candidatePath = path.join(rubyRoot, candidates[i], "bin", "bundle");
    if (fs.existsSync(candidatePath)) {
      return candidatePath;
    }
  }

  return null;
}

function compareVersion(a, b) {
  const [aParts, bParts] = [a, b].map((value) =>
    value
      .split(/[^0-9]+/)
      .map((segment) => parseInt(segment, 10))
      .filter((num) => !Number.isNaN(num))
  );

  const length = Math.max(aParts.length, bParts.length);
  for (let i = 0; i < length; i += 1) {
    const diff = (aParts[i] || 0) - (bParts[i] || 0);
    if (diff !== 0) {
      return diff;
    }
  }
  return 0;
}
