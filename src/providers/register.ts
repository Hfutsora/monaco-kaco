import type * as monacoEditor from 'monaco-editor';
import { registerProvier } from './registerProvider';

function registerKaco(monaco: typeof monacoEditor) {
  const id = 'kaco';
  if (!registerKaco.registered) {
    registerKaco.registered = true;
    monaco.languages.register({ id });
    registerProvier(id);
  }
}

registerKaco.registered = false;

export { registerKaco };
