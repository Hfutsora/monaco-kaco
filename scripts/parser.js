const fs = require('fs/promises');
const ChildProcess = require('child_process');

const grammerSuffixes = [
  '.interp',
  '.tokens',
  'Lexer.ts',
  'Listener.ts',
  'Parser.ts',
  'Visitor.ts'
];

async function build() {
  const parserFiles = await fs.readdir('./src/parser');

  for (const file of parserFiles) {
    if (!file.endsWith('.g4') && (await fs.lstat(`./src/parser/${file}`)).isFile()) {
      await fs.rm(`./src/parser/${file}`);
    }
  }

  ChildProcess.execSync('npm run antlr4ts', {
    encoding: 'utf-8'
  });

  const rootFiles = await fs.readdir('.');

  for (const file of rootFiles) {
    if (grammerSuffixes.some(suf => file.endsWith(suf))) {
      await fs.rename(`./${file}`, `./src/parser/${file}`);
    }
  }
}

build();