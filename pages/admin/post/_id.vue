<template>
    <div class="page-wrap"> 
        <el-breadcrumb separator="/" class="mb1">
            <el-breadcrumb-item to="/admin/list">Посты</el-breadcrumb-item>
            <el-breadcrumb-item>{{ post.title }}</el-breadcrumb-item>
        </el-breadcrumb>

        <el-form 
            :model="controls" 
            :rules="rules" 
            ref="form"
            @submit.native.prevent="onSubmit"
        >
            <!-- <h2 class="title">Войти в панель администратора</h2> -->
            <el-form-item label="Текст в формате .md или .html" prop="text">
                <el-input 
                    type="textarea"
                    v-model.trim="controls.text"
                    resize="none"
                    :rows="10"
                ></el-input>
            </el-form-item>

            <div class="mb1">
                <small>
                    <i class="el-icon-time"></i> 
                    <span>
                        {{ new Date(post.date).toLocaleString() }}
                    </span>  
                </small>
                <small class="ml">
                    <i class="el-icon-view"></i> 
                    <span>
                        {{ post.views }}
                    </span>
                </small>
            </div>

            <el-form-item>
                <el-button
                    type="primary"
                    round
                    native-type="submit"
                    :loading="loading"
                >
                    Обновить
                </el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    layout: 'admin',
    middleware: ['admin-auth'],
    head() {
        return {
            title: `Post | ${this.post.title}`
        }
    },
    validate({params}) {
        return Boolean(params.id)
    },
    async asyncData({store, route}) {        
        const post = await store.dispatch('post/fetchAdminById', route.params.id)
        return {post}
    },
    data() {
        return {
            loading: false,
            controls: {
                text: ''
            },
            rules: {
                text: [
                    { required: true, message: 'Текст не должен быть пустым', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        onSubmit() {
            this.$refs.form.validate(async valid => {
                if (valid) {
                    this.loading = true

                    const formData = {
                        text: this.controls.text,
                        id: this.post._id
                    }

                    try {                     
                        await this.$store.dispatch('post/update', formData)                     
                        this.$message.success('Пост обновлен')
                        this.loading = false
                    } catch (e) {
                        this.loading = false
                    }
                    
                }
            })
        }
    }
}
</script>


<style lang="sass" scoped>

.page-wrap
    max-width: 600px

.ml
    margin-left: 2rem        

</style>
