<template>
  <div>
    <a-layout class="layout-home-basic">
      <a-layout-header>
        <nav-bar></nav-bar>
      </a-layout-header>
    </a-layout>
  </div>
</template>

<script>
import NavBar from '@/components/common/NavBar.vue'

export default {
  name: 'Home',
  data() {
    return {}
  },
  methods: {},
  components: {
    NavBar
  }
}
</script>

<style lang="less" scoped>
.layout-home-basic .ant-layout-header {
  background-color: rgb(245, 245, 245);
}
</style>
