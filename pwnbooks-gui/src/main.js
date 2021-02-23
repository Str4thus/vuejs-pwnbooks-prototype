import Vue from 'vue';
import App from './App.vue';
import router from './router';

import VueSidebarMenu from 'vue-sidebar-menu';

import VMdEditor from '@kangc/v-md-editor/lib/codemirror-editor';
import '@kangc/v-md-editor/lib/style/codemirror-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
import enUS from '@kangc/v-md-editor/lib/lang/en-US';
import createCopyCodePlugin from '@kangc/v-md-editor/lib/plugins/copy-code/index';
import '@kangc/v-md-editor/lib/plugins/copy-code/copy-code.css';
import '@kangc/v-md-editor/lib/plugins/tip/tip.css';

import Codemirror from 'codemirror';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/addon/display/placeholder';
import 'codemirror/addon/selection/active-line';
import 'codemirror/addon/scroll/simplescrollbars';
import 'codemirror/addon/scroll/simplescrollbars.css';
import 'codemirror/lib/codemirror.css';


import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-ruby';
import 'prismjs/components/prism-rust';
import 'prismjs/components/prism-shell-session';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-toml';
import 'prismjs/components/prism-yaml';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';
import 'prismjs/components/prism-csharp';
import 'prismjs/components/prism-go';
import 'prismjs/components/prism-http';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-lua';
import 'prismjs/components/prism-php';
import 'prismjs/components/prism-php-extras';
import 'prismjs/components/prism-powershell';

import splitPane from 'vue-splitpane';
import store from "./state/store";

import 'vue-simple-context-menu/dist/vue-simple-context-menu.css';
import VueSimpleContextMenu from 'vue-simple-context-menu';

Vue.config.productionTip = false

// VueMarkdownEditor
VMdEditor.Codemirror = Codemirror;
VMdEditor.use(vuepressTheme);
VMdEditor.lang.use('en-US', enUS);
VMdEditor.use(createCopyCodePlugin());

Vue.component('vue-simple-context-menu', VueSimpleContextMenu);
Vue.component('split-pane', splitPane);

Vue.use(VMdEditor);
Vue.use(VueSidebarMenu);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
