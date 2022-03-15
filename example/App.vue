<template>
  <div id="app">
    <h1>Monaco Kaco</h1>

    <MonacoKaco id="monaco" theme="vs-dark" :value="value"></MonacoKaco>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import * as monaco from 'monaco-editor';

import MonacoKaco from '@/index.vue';

@Component({
  components: {
    MonacoKaco
  }
})
export default class App extends Vue {
  value = `\
OpenForm[\'default\']([\'a\'.\'b\'], 1001.5)(\'b\', [@ 0])(false);

SaveForm(['form-name']);

['ctrl_input'] = [@ 1];
['ctrl_input'] = ['table'.'column','name','age'(SELECTED == *)];
['ctrl_input'] = 'default';
['ctrl_input'] = 1000.4;
['ctrl_input'] = false;
['parent_form'].['ctrl_input'] = 100;
['parent_form'].['ctrl_input'],['ctrl_textarea'] = ('123' + ['123'.'123']) + [@ 1] + 1000 + false + (1 - (2 * (3 / 2)));

if (1 > 2) {
    ['ctrl'] = ['value'];

    ['CTRL'] = [# 'select key from table where id=[$ USERID]'];
}
`
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
