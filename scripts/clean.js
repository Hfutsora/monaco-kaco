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

async function clean() {
  const parserFiles = await fs.readdir('./src/parser');

  for (const file of parserFiles) {
    if (!file.endsWith('.g4') && (await fs.lstat(`./src/parser/${file}`)).isFile()) {
      await fs.rm(`./src/parser/${file}`);
    }
  }
}

clean();