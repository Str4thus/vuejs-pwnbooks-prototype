<!-- https://www.npmjs.com/package/vue-sidebar-menu -->

<template>
  <div id="app" :class="{ collapsed: collapsed }">
    <div class="app">
      <div class="container">
        <split-pane :max-percent="20" :default-percent="90" split="horizontal">
          <template slot="paneR">
            <Console />
          </template>
          <template slot="paneL">
            <router-view />
          </template>
        </split-pane>
      </div>

      <sidebar-menu
        :menu="menu"
        :collapsed="collapsed"
        :show-one-child="true"
        :disableHover="true"
        :width="'185px'"
        @toggle-collapse="onToggleCollapse"
        @item-click="onItemClick"
      >
        <span slot="toggle-icon">
          <i class="fa fa-arrows-h"></i>
        </span>
      </sidebar-menu>
    </div>
  </div>
</template>

<script>
import "./scss/app.scss";
import Seperator from "./components/SidebarMenu/Seperator";
import Console from "./components/Console";

export default {
  name: "PWNBOOKS",
  data() {
    return {
      menu: [
        {
          header: true,
          title: "PWNBOOKS",
          hiddenOnCollapse: true,
        },
        {
          href: "/",
          title: "Dashboard",
          icon: "fa fa-home",
        },
        {
          component: Seperator,
        },
        {
          header: true,
          title: "Core",
          hiddenOnCollapse: true,
        },
        {
          href: "/books",
          title: "Books",
          icon: "fa fa-pencil",
        },
        {
          href: "/network-map",
          title: "Network Map",
          icon: "fa fa-eye",
        },
        {
          href: "/pwn",
          title: "Pwn 'em!",
          icon: "fa fa-terminal",
        },
        {
          component: Seperator,
        },
        {
          header: true,
          title: "Util",
          hiddenOnCollapse: true,
        },
        {
          href: "/shells",
          title: "Shells",
          icon: "fa fa-hashtag",
        },
        {
          href: "/command-library",
          title: "Command Library",
          icon: "fa fa-database",
        },
        {
          href: "/test",
          title: "Testing",
          icon: "fa fa-lightbulb-o",
        },
      ],
      collapsed: true,
    };
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize);
  },
  methods: {
    onToggleCollapse(collapsed) {
      this.collapsed = collapsed;
    },
    onItemClick(event, item, node) {
      event;
      item;
      node;
    },
    onResize() {
      if (window.innerWidth <= 767) {
        this.collapsed = true;
      }
    },
  },
  components: {
    Console,
  }
};
</script>