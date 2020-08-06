<template>
  <div class="nav-bar">
    <div class="nav-bar-title-search">
      <span class="nav-bar-title" @click="handleTitle">码匠笔记</span>
      <a-input-search
        placeholder="搜索问题"
        style="width: 200px"
        @search="onSearch"
        class="nav-bar-search"
      />
    </div>
    <div class="nav-bar-account">
      <a-button v-if="!login">登录</a-button>
      <a-dropdown v-else>
        <a-menu slot="overlay" @click="handleMenuClick">
          <a-menu-item key="1"> <a-icon type="setting" />编辑 </a-menu-item>
          <a-menu-item key="2"> <a-icon type="logout" />注销 </a-menu-item>
        </a-menu>
        <a-button>
          <a-icon type="user" />
          {{ username }}
        </a-button>
      </a-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    login: {
      type: Boolean,
      default: false
    },
    username: {
      type: String,
      default: "我"
    },
  },
  data() {
    return {}
  },
  methods: {
    handleTitle() {
      if (this.$route.path === "/home") return
      this.$router.push("/")
    },
    onSearch(val) {
      this.$emit("search", val)
    }
  }
}
</script>

<style lang="less" scoped>
.nav-bar {
  display: flex;
  align-items: center;
  font-size: 24px;
  justify-content: space-between;
}

.nav-bar-title-search {
  display: flex;
  align-items: center;
}

.nav-bar-title {
  user-select: none;
  cursor: pointer;
}

.nav-bar-search {
  margin-left: 15px;
}

.nav-bar-account {
  display: flex;
  align-items: center;
}
</style>
