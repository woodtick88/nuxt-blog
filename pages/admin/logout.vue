<template>
    <div class="title">Очищаем данные</div>
</template>

<script>
export default {
    layout: 'admin',
    middleware: ['admin-auth'],
    beforeCreate() {
        this.$store.dispatch('auth/logout')
        this.$router.push('/admin/login?message=logout')
    }
}
</script>

<style lang="sass" scoped>

.title
    font-size: 1.6rem
    padding-left: 2rem
    margin-top: 2rem

</style>