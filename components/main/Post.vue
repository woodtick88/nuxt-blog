<template>
  <el-card
    shadow="hover"
    :body-style="{padding: 0}"
    class="post"
  >
    <header slot="header" class="post-header">
      <h3>Post title</h3>

      <small>
        <i class="el-icon-time"></i>
        {{ new Date().toLocaleString() }}
      </small>
    </header>
    <div class="post-body">
      <img
        src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        alt="post image"
        class="post-img"
      >
    </div>
    <footer class="post-footer">
      <el-button round @click="openPost">Открыть</el-button>

      <span>
        <i class="el-icon-message"></i>

        12
      </span>
    </footer>
  </el-card>
</template>

<script>

export default {
  methods: {
    openPost() {
      console.log('Open Post')
    }
  }
}

</script>

<style lang="sass" scoped>

.post
  margin-bottom: 1.5rem

  .el-card__body
    padding-left: 0rem !important

.post-header
  display: flex
  justify-content: space-between
  align-items: center

.post-img
  width: 100%
  height: auto

.post-footer
  display: flex
  justify-content: space-between
  align-items: center
  padding: 1rem


</style>
