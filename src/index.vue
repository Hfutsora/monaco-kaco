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
  @Prop({ default: '', type: String }) value!: monaco.editor.IStandaloneEditorConstructionOptions['value'];

  mounted() {
    const root = this.$refs['root'] as HTMLElement;

    if (root) {
      registerProvier('kaco');

      monaco.editor.create(root, {
        language: 'kaco',
        theme: this.theme,
        value: this.value,
        bracketPairColorization: {
          enabled: true
        },
        autoClosingBrackets: 'always'
      });
    }
  }
}
</script>
