const fs = require('fs');
const path = require('path');

function loadDotEnvIfExists() {
  const envPath = path.join(__dirname, '.env');
  if (!fs.existsSync(envPath)) return;

  const text = fs.readFileSync(envPath, 'utf8');
  for (const line of text.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const idx = trimmed.indexOf('=');
    if (idx <= 0) continue;
    const key = trimmed.slice(0, idx).trim();
    const value = trimmed.slice(idx + 1).trim();
    if (!process.env[key]) {
      process.env[key] = value;
    }
  }
}

function getRequiredEnv(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`[ENV] ${name} is required. Set it in map/.env or system environment.`);
  }
  return value;
}

function getSupabaseAdminConfig() {
  loadDotEnvIfExists();
  return {
    supabaseUrl: getRequiredEnv('SUPABASE_URL'),
    serviceRoleKey: getRequiredEnv('SUPABASE_SERVICE_ROLE_KEY'),
  };
}

module.exports = {
  getSupabaseAdminConfig,
};
