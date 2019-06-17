<template>
    <div class="admin-layout-wrap">
        <el-container :style="{height: '100%'}">
            <el-aside width="200px">
                Aside
            </el-aside>
            <nuxt />    
        </el-container>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="sass" scoped>

.admin-layout-wrap
    width: 100%
    height: 100vh

</style>

