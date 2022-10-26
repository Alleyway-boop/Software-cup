<template>
    <div class="box">
        <h1 class="title">加入会议</h1>

        <div class="inputContent">
            <p>
                请输入会议号
            </p>
            <el-input class="inputRow"
                      placeholder=""
                      v-model="input"
                      clearable>
            </el-input>

        </div>

        <el-button class="submit"
                   type="primary"
                   @click.native="queryMeeting"
                   plain>
            加入
        </el-button>

    </div>
</template>

<script>
    import axios from "axios";

    export default {
      // eslint-disable-next-line vue/multi-word-component-names
        name: "Home",
        data() {
            return {
                input: '',
            }
        },
        methods:{
            queryMeeting(){
                axios.post('http://101.43.215.65:8083/Meeting_Management/SelectMeeting',{
                    Meeting_ID: this.input
                }).then((res)=>{
                    // console.log('请求成功')
                    console.log(res.data)
                    if (res.data === '') {
                        console.log('会议不存在')
                        alert('加入失败，会议号不存在或已结束')
                    }else {
                        alert('加入成功')
                        console.log('会议存在')
                        this.$router.push({
                            name: 'getUser',
                            query:{
                                userID: this.$route.query.userID,
                                Meeting_ID: this.input
                            }
                        })
                    }
                });
            }
        }
    }
</script>

<style scoped>
    .box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #fafbfc;
        margin-top: 100px;
    }

    .title {
        height: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 26px;
        color: #000000;

    }

    .inputContent {
        display: flex;
        flex-direction: column;
        align-items: center;

    }

    .inputContent p {
        padding: 10px;
        font-size: 16px;
        color: #000000;
    }

    .inputContent .inputRow {
        width: 150%;
    }

    .submit {
        margin-top: 20px;
        margin-bottom: 100px;
        width: 150px;
        height: 40px;
    }

</style>