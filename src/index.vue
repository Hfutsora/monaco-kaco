<template>
  <div ref="root"></div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import * as monaco from 'monaco-editor';

import { registerProvier } from './providers/registerProvider';

@Component
export default class MonacoKaco extends Vue {
  mounted() {
    const root = this.$refs['root'] as HTMLElement;

    if (root) {
      registerProvier('kaco');

      monaco.editor.create(root, {
        language: 'kaco',
        theme: 'vs-dark',
        bracketPairColorization: {
          enabled: true
        },
        autoClosingBrackets: 'always'
      });
    }
  }
}
</script>
