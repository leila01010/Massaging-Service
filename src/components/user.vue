<template>
    <section class="profile">
        <el-row class="outsideRow">
            <el-col :lg="12">
                <el-card shadow="hover">
                    <el-row class="insideRow">
                        <el-col :span="6">
                            <span class="title">شناسه کاربر : </span>
                            <span class="userId">{{ UserPage.id }}</span>
                        </el-col>
                        <el-col :span="6">
                            <div class="title"> : نام و نام خانوادگی</div>
                            <div class="userName">{{ UserPage.name }}</div>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="6">
                            <div class="title">شماره تلفن</div>
                            <div class="userPhone">{{ UserPage.phone_number }}</div>
                        </el-col>
                        <el-col :span="6">
                            <div class="title">ایمیل</div>
                            <div class="userEmail">{{ UserPage.email }}</div>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="4" style="text-align: left;margin-top: 50px">
                            <router-link :to="'/inbox/' + UserPage.id" append
                                         class="el-button el-button--info el-button--medium is-round is-plain">
                                <span class="el-icon-message"></span> &nbsp;
                                <span>Inbox</span>
                            </router-link>
                        </el-col>
                        <el-col :span="5" style="text-align: left;margin-top: 50px">
                            <router-link :to="'/compose/' + UserPage.id" append
                                         class="el-button el-button--primary el-button--medium is-round is-plain">
                                <span class="el-icon-plus"></span> &nbsp;
                                <span>Compose</span>
                            </router-link>
                        </el-col>
                        <el-col :span="4" style="text-align: left;margin-top: 50px">
                            <router-link :to="'/send/' + UserPage.id" append
                                         class="el-button el-button--warning el-button--medium is-round is-plain">
                                <span class="el-icon-caret-left"></span> &nbsp;
                                <span>Send</span>
                            </router-link>
                        </el-col>
                    </el-row>

                </el-card>
            </el-col>
        </el-row>
    </section>
</template>

<script>
    import axios from 'axios'
    // import { eventBus } from '../main.js';
    export default {
        data () {
            return {
                UserPage: []
            }
        },
        created () {
            axios.get('http://user.fitamin.ir/messagingservice/public/api/users/' + this.$route.params.id)
                .then(response => {
                    console.log(response);
                    this.UserPage = response.data;
                })
                .catch(err => {
                    console.log(err)
                });
        }
        // methods: {
        //     sendData () {
        //         eventBus.$emit('info',this.UserPage.id);
        //     }
        // }
    }
</script>

<style scoped>
    .profile {
        margin-right: 225px;
    }
    .outsideRow {
        margin: 20px 10px;
    }
    .insideRow {
        margin: 50px 0;
    }
    [class*=el-col-] {
        float: right;
        text-align: right;
    }
</style>