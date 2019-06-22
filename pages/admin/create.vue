<template>
    <el-form 
        :model="controls" 
        :rules="rules" 
        ref="form"
        @submit.native.prevent="onSubmit"
    >

        <h1 class="mb1">Создать новый пост</h1>
        <el-form-item label="Введите название поста" prop="title">
            <el-input
                v-model.trim="controls.title"               
            ></el-input>
        </el-form-item> 
        
        <el-form-item label="Текст в формате .md или .html" prop="text">
            <el-input 
                type="textarea"
                v-model="controls.text"
                resize="none"
                :rows="10"
            ></el-input>
        </el-form-item>  

        <el-button type="success" plain @click="previewDialog = true" class="mb1">
            Предпросмотр
        </el-button> 

        <el-dialog title="Предпросмотр" :visible.sync="previewDialog">
            <div :key="controls.text">
                <vue-markdown>{{controls.text}}</vue-markdown>
            </div>            
        </el-dialog>   

        <el-upload
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-change="handlerImageChange"
            :auto-upload="false"
            ref="upload"
            class="mb2"
        >
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">
                Перетащите иконку <em>или нажмите</em>
            </div>
            <div class="el-upload__tip" slot="tip">
                Файлы и расширением jpg/png
            </div>

        </el-upload>        

        <el-form-item>
            <el-button
                type="primary"
                round
                native-type="submit"
                :loading="loading"
            >
                Созать пост
            </el-button>
        </el-form-item>
    </el-form>
</template>

<script>
export default {
    layout: 'admin',
    middleware: ['admin-auth'],
    data() {
        return {
            image: null,
            previewDialog: false,
            loading: false,
            controls: {
                title: '',
                text: ''
            },
            rules: {
                text: [
                    { required: true, message: 'Текст не должен быть пустым', trigger: 'blur' }
                ],
                title: [
                    { required: true, message: 'Название поста не может быть пустым', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        handlerImageChange(file, filelist) {
            this.image = file.raw
        },
        onSubmit() {
            this.$refs.form.validate(async valid => {
                if (valid && this.image) {
                    this.loading = true

                    const formData = {
                        title: this.controls.title,
                        text: this.controls.text,
                        image: this.image
                    }
                    
                    try {
                        await this.$store.dispatch('post/create', formData)

                        this.controls.title = ''
                        this.controls.text = ''
                        this.image = null
                        this.$refs.upload.clearFiles()
                        this.$message.success('Пост создан')
                        this.loading = false

                    } catch (e) {
                        this.loading = false
                    }

                } else {
                    this.$message.warning('Форма не валидна')
                }
            })
        }

    }
}

</script>

<style lang="sass" scoped>

form
    max-width: 600px

</style>


