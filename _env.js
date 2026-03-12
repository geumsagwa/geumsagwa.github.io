const fs = require('fs');
const path = require('path');

function loadDotEnvIfExists() {
  const envPath = path.join(__dirname, '.env');
  if (!fs.existsSync(envPath)) return;

  const lines = fs.readFileSync(envPath, 'utf8').split(/\r?\n/);
  for (const raw of lines) {
    const line = raw.trim();
    if (!line || line.startsWith('#')) continue;
    const eq = line.indexOf('=');
    if (eq <= 0) continue;
    const key = line.slice(0, eq).trim();
    const value = line.slice(eq + 1).trim();
    if (!process.env[key]) {
      process.env[key] = value;
    }
  }
}

function getRequiredEnv(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`[ENV] ${name} is required. Set it in homepage/.env or system environment.`);
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
