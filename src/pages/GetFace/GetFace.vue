<template>
    <div>
        <el-upload
                list-type="picture"
                action=''
                accept=".jpg, .png"
                :limit="1"
                :auto-upload="false"
                :file-list="fileList"
                :on-change="getFile"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleUploadRemove"
        >
            <el-button size="small" type="primary" @click="uploadimg">选择图片上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传一张jpg/png文件</div>
        </el-upload>

        <el-button @click="submitFace">上传</el-button>

        <div>
            <el-button @click="toMetting">加入会议</el-button>
            <el-button @click="createMeeting">创建会议</el-button>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    import login from "@/pages/login/Login";
    export default {
        name: "GetFace",
        data(){
            return{
                userID:'',
                file:'',
                fileList:[],
                images:''
            }
        },
        methods:{
            toMetting(){
              let userID=this.$route.query.userID;

                this.$router.push({
                    name:'home',
                    query:{
                        userID: userID
                    }
                })
            },
            createMeeting(){
                this.$router.push({
                    name:'createMeeting',
                    query:{
                        userID: this.userID
                    }
                })
            },

            submitFace(){
                this.userID = this.$route.query.userID
                console.log(this.$route.query.userID)
                console.log(this.images)
                axios.post('http://101.43.215.65:8082/Face_Registration',{
                    userId: this.$route.query.userID,
                    images: this.images
                }).then(res => {
                    console.log(res)
                })
            },

            uploadimg(){},

            getFile(file, fileList) {
                this.getBase64(file.raw).then(res => {
                    const params = res
                    this.proofImage = params
                    this.images = res.replace(/^data:image\/\w+;base64,/, "")
                    // console.log(res)
                })
            },


            getBase64(file) {
                return new Promise(function (resolve, reject) {
                    const reader = new FileReader()
                    let imgResult = ''
                    reader.readAsDataURL(file)
                    reader.onload = function () {
                        imgResult = reader.result
                    }
                    reader.onerror = function (error) {
                        reject(error)
                    }
                    reader.onloadend = function () {
                        resolve(imgResult)
                    }
                })
            },


            handleUploadRemove(file, fileList) {
                this.proofImage = ''
                this.ruleForm.message_img = ''
            },
            handlePictureCardPreview(file) {
                console.log(this.proofImage)
            },


        }
    }
</script>

<style scoped>

</style>