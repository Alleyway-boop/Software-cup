<template>
    <div class="box">
        <h1 class="title">创建会议</h1>

        <div class="inputContent">
            <p>
                请输入会议名
            </p>
            <el-input class="inputRow"
                      placeholder=""
                      v-model="input"
                      clearable>
            </el-input>

        </div>

        <div class="block">
            <span class="demonstration"></span>
            <el-date-picker
                    v-model="timeValue"
                    type="datetime"
                    placeholder="会议创建时间"
                    align="right"
                    :picker-options="pickerOptions">
            </el-date-picker>
        </div>

        <el-button class="submit"
                   type="primary"
                   @click.native="createMeeting"
                   plain>
            创建
        </el-button>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "CreateMeeting",
        data() {
            return {
                pickerOptions: {
                    shortcuts: [{
                        text: '今天',
                        onClick(picker) {
                            picker.$emit('pick', new Date());
                        }
                    }, {
                        text: '昨天',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24);
                            picker.$emit('pick', date);
                        }
                    }, {
                        text: '一周前',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', date);
                        }
                    }]
                },
                timeValue: '',
                input: ''
            };
        },
        methods: {
            createMeeting() {
                axios.post('http://101.43.215.65:8083/Meeting_Management/start', {
                    meetingId: null,
                    meetingName: "测试",
                    meetingOriginator: "远方",
                    meetingStartTime: this.$data.timeValue

                }).then((res) => {
                    console.log(res)
                    if (res.data.state === "success") {
                        alert('会议创建成功,会议号是:' + res.data.meeting)
                    }
                })
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

    .block {
        margin-top: 5px;
    }

    .submit {
        margin-top: 20px;
        margin-bottom: 100px;
        width: 150px;
        height: 40px;
    }

    .el-alert {
        width: 30%;
    }
</style>