<template>
  <el-container>
    <el-header>
      <app-navigation></app-navigation>
    </el-header>
    <el-main>
      <nuxt></nuxt>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>

import appNavigation from '@/components/main/Navigation'

export default {
  components: {
    appNavigation
  }
}

</script>

<style lang="sass" scoped>



</style>
