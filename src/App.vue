<template>
  <div id="app">
    <h1>Monaco Kaco</h1>

    <div id="monaco" ref="root"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import * as monaco from 'monaco-editor';

import { registerProvier } from './providers/registerProvider';

@Component
export default class App extends Vue {
  mounted() {
    const root = this.$refs['root'] as HTMLElement;

    if (root) {
      registerProvier('kaco');

      monaco.editor.create(root, {
        language: 'kaco',
        value: `\
OpenForm[\'default\']([\'a\'.\'b\'], 1001.5)(\'b\', [@ 0])(false);

SaveForm(['form-name']);

['ctrl_input'] = [@ 1];
['ctrl_input'] = ['form'.'table'.'column'.'name'];
['ctrl_input'] = 'default';
['ctrl_input'] = 1000.4;
['ctrl_input'] = false;
['parent_form'].['ctrl_input'] = 100;
['parent_form'].['ctrl_input'],['ctrl_textarea'] = ('123' + ['123'.'123']) + [@ 1] + 1000 + false + (1 - (2 * (3 / 2)));

`
      });
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  display: flex;
  flex-direction: column;
  height: 100vh;
}

h1 {
  text-align: center;
}

body {
  margin: 0;
  padding: 0;
}

#monaco {
  flex: 1;
}
</style>
