<template>
  <div id="app">
    <header>
      <h1>Monaco Kaco</h1>

      <a
        href="https://github.com/Hfutsora/monaco-kaco"
        rel="noopener"
        target="_blank"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="40"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"
          ></path>
        </svg>
      </a>
    </header>

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

if ([$ USERID] == ['user'] && (['count'] > 500 || ['name'] == 'admin')) {
    ['ctrl'] = [$ USERID];
    ['CTRL'] = [# select key from table where id=[$ USERID] #];
    MessageBox('警告', '该调查表已使用!');
    ClickButton(['保存']);
    GetComboDic(['下拉框控件名称'], [# select field1,field2 from table where... #]);
    Refresh();
    Close();
    QueryData['收件单查询'],['结果列表'](['受理编号'],['权利人'])(100)(0);
    CarryData['国有档案录入数据关联'](['受理号']);
    SQLExecute([# update d_rec set state = 0 where slid =[$ INSTANCE] #]);
    GetCoder(['受理号'],'%11[1001]');
    SetCoder(['受理号'],'%2D[1001]');
    ResetCtrlValue(['控件1'], ['控件2'], ['控件3'], ['控件4']);
    SaveLastValue(['控件1'], ['控件2'], ['控件3']);
    LoadLastValue(['控件1'], ['控件2'], ['控件3']);
    SetVisiable(['Button'], 0);
    SetEnable(['权利人名称'], 1);
    SetFocus(['申请人']);
    SetColor(['申请人'], '#ffffff');
    ChangeTab(['tp-1'], 1);
    SwitchDisplay(['控件1'],['控件2'],['控件3'],['控件4']);
    StringSub['A'](['B'], 1, 3);
    StringLen['H'](['地号']);
    StringStr['L'](['A'], ['B']);
    StringRep(['L'],['A'],['B']);
    StringCat(['L'],['A'],'content');
    EncodeBase64['编码'](['产权']);
    DecodeBase64['编码'](['产权']);
    GetGridRows(['控件'], ['数据列表名称'.'列名'(selected == *)]);

    while(['数据列表名称'.'列名'(selected == *)]) {
      AddGridRow(['记事列表'.'证书记事内容','证书记事日期'], '', [$ CURTIME]);
      SelGridRow(['分割登记明细表'.'受理号'('办理状态' == '通过')]);
    }
}
`;
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

header {
  overflow: hidden;
}

header > a {
  position: absolute;
  top: 20px;
  right: 40px;
  color: rgb(36, 36, 36);
}

h1 {
  text-align: center;
  width: 100%;
  height: 100%;
}

body {
  margin: 0;
  padding: 0;
}

#monaco {
  flex: 1;
}
</style>
