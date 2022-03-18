<template>
  <div ref="root"></div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import * as monaco from 'monaco-editor';

import { registerProvier } from './providers/registerProvider';

@Component
export default class MonacoKaco extends Vue {
  @Prop({ default: 'vs-dark' }) theme!: monaco.editor.IStandaloneEditorConstructionOptions['theme'];
  @Prop({ type: String }) value: monaco.editor.IStandaloneEditorConstructionOptions['value'];

  private editor: monaco.editor.IStandaloneCodeEditor | undefined = undefined;

  mounted() {
    const root = this.$refs['root'] as HTMLElement;

    if (root) {
      registerProvier('kaco');

      this.editor = monaco.editor.create(root, {
        language: 'kaco',
        theme: this.theme,
        value: this.value,
        bracketPairColorization: {
          enabled: true
        },
        autoClosingBrackets: 'always',
        automaticLayout: true
      });
    }
  }

  /**
   * set editor model value
   */
  setValue(value: string) {
    this.editor?.setValue(value);
  }

  /**
   * get editor model value
   */
  getValue() {
    return this.editor?.getValue() ?? '';
  }
}
</script>
