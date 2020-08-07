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
      <a-button v-if="!login" @click="handleSignInGithub">登录</a-button>
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
import { openWindow } from '@/common/Authorize'
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
    const baseUrl = 'https://github.com/login/oauth/authorize'
    const client_id = 'client_id=4b78273612d5e89f0f0c'
    const redirect_uri = 'redirect_uri=http://localhost:8000/github/callback'
    const scope = 'scope=user'
    const state = 'state=1'
    const authorize = `${baseUrl}?${client_id}&${redirect_uri}&${scope}&${state}`
    return {
      authorize
    }
  },
  methods: {
    handleSignInGithub() {
      console.log(this.$store);
      this.$store.dispatch('signInGithub').then(_ => {
        openWindow(this.authorize, 'Github', 540, 540)
        window.addEventListener('message', this.handleSignInGithubResult, false)
      })
    },
    handleSignInGithubResult(e) {
      const { result } = e.data
      if (result) {
        this.$store.dispatch('signInGithubResult', result).then(res => {
          console.log(res);
          window.removeEventListener('message', this.handleSignInGithubResult, false)
        })
      }
    },
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
