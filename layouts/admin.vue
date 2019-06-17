<template>
    <div class="admin-layout-wrap">
        <el-container :style="{height: '100%'}">
            <el-aside width="260px">
                <app-aside></app-aside>
            </el-aside>
            <nuxt />    
        </el-container>
    </div>
</template>

<script>
import AppAside from '@/components/admin/Aside'

export default {
    components: {
        AppAside
    }
}
</script>

<style lang="sass" scoped>

.admin-layout-wrap
    width: 100%
    height: 100vh

</style>

