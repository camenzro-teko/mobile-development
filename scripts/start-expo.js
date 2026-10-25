const { spawn, spawnSync } = require('child_process');

function expoSync(args) {
  return spawnSync('npx', ['expo', ...args], {
    encoding: 'utf8',
    shell: true,
  });
}

function expoInherit(args) {
  return new Promise((resolve, reject) => {
    const child = spawn('npx', ['expo', ...args], {
      stdio: 'inherit',
      shell: true,
      env: process.env,
    });
    child.on('exit', (code) => (code === 0 ? resolve() : reject(new Error(String(code ?? 1)))));
  });
}

function currentUser() {
  const result = expoSync(['whoami']);
  const output = `${result.stdout || ''}\n${result.stderr || ''}`.trim();
  if (!output || /not logged in/i.test(output)) {
    return null;
  }
  const line = (result.stdout || '')
    .trim()
    .split(/\r?\n/)
    .map((value) => value.trim())
    .filter(Boolean)
    .pop();
  if (!line || /not logged in/i.test(line)) {
    return null;
  }
  return line;
}

async function ensureLogin() {
  if (process.env.EXPO_TOKEN) {
    const user = currentUser();
    if (user) {
      console.log(`Eingeloggt über EXPO_TOKEN als ${user}.`);
      return;
    }
    console.error('EXPO_TOKEN ist gesetzt, aber ungültig.');
    process.exit(1);
  }

  const user = currentUser();
  if (user) {
    console.log(`Eingeloggt als ${user}.`);
    return;
  }

  console.log('Nicht bei Expo eingeloggt. Login startet jetzt.');
  console.log('Danach in Expo Go denselben Account verwenden und den QR-Code scannen.');
  await expoInherit(['login']);

  const afterLogin = currentUser();
  if (!afterLogin) {
    console.error('Login fehlgeschlagen. Nochmal npx expo login ausführen.');
    process.exit(1);
  }
  console.log(`Eingeloggt als ${afterLogin}.`);
}

async function main() {
  await ensureLogin();
  console.log('Start: Expo Go, QR-Code, Tunnel.');
  await expoInherit(['start', '--go', '--tunnel']);
}

main().catch((error) => {
  const code = Number(error.message);
  process.exit(Number.isFinite(code) ? code : 1);
});
