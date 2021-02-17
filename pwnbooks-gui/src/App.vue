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
        @toggle-collapse="onToggleCollapse"
        @item-click="onItemClick"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          header: true,
          title: "Getting Started",
          hiddenOnCollapse: true,
        },
        {
          href: "/",
          title: "Home",
          icon: "fa fa-download",
        },
        {
          href: "/about",
          title: "About",
          icon: "fa fa-download",
        },
        {
          href: "/markdown",
          title: "Markdown",
          icon: "fa fa-download",
        },
      ],
      collapsed: false,
    };
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize);
  },
  methods: {
    onToggleCollapse(collapsed) {
      console.log(collapsed);
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

<style>
body, html {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}

body {
  font-family: "Source Sans Pro", sans-serif;
  font-size: 18px;
  background-color: #f2f4f7;
  color: #262626;
}

#app {
  padding-left: 350px;
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
}
</style>
