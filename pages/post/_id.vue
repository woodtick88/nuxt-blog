<template>
  <article class="post">
    <header class="post-header">
      <div class="post-title">
        <h1>Post title</h1>
        <nuxt-link to="/">
          <i class="el-icon-back"></i>
        </nuxt-link>
      </div>
      <div class="post-info">
        <small>
          <i class="el-icon-time"></i>
          {{ new Date().toLocaleString() }}
        </small>
        <small>
          <i class="el-icon-view"></i>
          42
        </small>
      </div>
      <div class="post-image">
        <img
          src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
          alt="post image"
        >
      </div>
    </header>
    <main class="post-content">
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem veritatis accusantium voluptatibus accusamus quos doloremque ut in distinctio, quam delectus?</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem veritatis accusantium voluptatibus accusamus quos doloremque ut in distinctio, quam delectus?</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem veritatis accusantium voluptatibus accusamus quos doloremque ut in distinctio, quam delectus?</p>
    </main>
    <footer>
      <div class="comments" v-if="true">
        <app-comment
          v-for="comment in 5"
          :key="comment"
          :comment="comment"
        ></app-comment>     
      </div>
      <div class="text-center" v-else>Комментариев нет</div>
    </footer>
  </article>
</template>

<script>
import AppComment from '@/components/main/Comment'

export default {
  components: {
    AppComment
  },
  validate({params}) {
    return Boolean(params.id)
  }
}
</script>

<style lang="sass" scoped>
.post
  max-width: 600px
  margin: 0 auto

.post-title
  display: flex
  justify-content: space-between
  align-items: center
  margin-bottom: 1rem

.post-info
  display: flex
  justify-content: space-between
  align-items: center
  margin-bottom: .5rem

.post-image img
  width: 100%
  height: auto

.post-header
  margin-bottom: 1.5rem

.post-content
  margin-bottom: 2rem


</style>
