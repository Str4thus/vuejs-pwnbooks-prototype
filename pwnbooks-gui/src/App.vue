<!-- https://www.npmjs.com/package/vue-sidebar-menu -->

<template>
  <div id="app" :class="{ collapsed: collapsed }">
    <div class="app">
      <div class="container">
        <router-view />
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
          href: "/notebooks",
          title: "Notebooks",
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
};
</script>


<!--

.v-sidebar-menu {
  background-color: #1a2332;
}

.v-sidebar-menu .vsm--toggle-btn {
  background-color: #141d2b;
}

.vsm--header {
  color: #ffffff;
}

.vsm--link.vsm--link_active,
.vsm--link.vsm--link_exact-active {
  color: #9fef00;
}

.vsm--link_level-1.vsm--link_hover,
.vsm--link_level-1:hover {
  background-color: green !important;
}

.v-sidebar-menu.vsm_collapsed .vsm--icon:hover {
  color: red;
  background-color: blue;
}

.v-sidebar-menu .vsm--link_level-1.vsm--link_active,
.v-sidebar-menu .vsm--link_level-1.vsm--link_exact-active {
  -webkit-box-shadow: 3px 0 0 0 #9fef00 inset;
  box-shadow: inset 3px 0 0 0 #9fef00;
}

.v-sidebar-menu .vsm--link_level-1 .vsm--icon {
  background-color: #1a2332;
}

.router-link-exact-active
  .router-link-active
  .vsm--link
  .vsm--link_level-1
  .vsm--link_hover
  .vsm--link_active
  .vsm--link_exact-active {
  background-color: red;
}

.vsm--mobile-item {
  display: none; /* Hide weird slide animation when clicking a menu item */
}

body,
html {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}

body {
  font-family: "Source Sans Pro", sans-serif;
  font-size: 18px;
  background-color: #fafafe;
  color: #4f5a6e;
}

#app {
  padding-left: 185px; /* correlates to the width of the sidebar-menu */
  transition: 0.3s ease;
  height: 100%;
}

#app.collapsed {
  padding-left: 50px;
}

.app {
  height: 100%;
}
.container {
  width: 100%;
  height: 100%;
}

pre {
  font-family: Consolas, monospace;
  color: #000;
  background: #fff;
  border-radius: 2px;
  padding: 15px;
  line-height: 1.5;
  overflow: auto;
}-->