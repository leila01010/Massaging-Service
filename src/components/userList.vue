<template>
    <section class="list">
        <el-table :data="tableUsers">
            <el-table-column align="right" width="150px">
                <template slot-scope="scope">
                    <!--<el-button @click="$router.push('user/' + scope.row.id)" type="primary" size="medium" plain>نمایش</el-button>-->
                    <router-link
                            :to="'send/' + scope.row.id"
                            class="el-button el-button--primary el-button--medium is-round is-plain"
                            style="float: right;"
                    >Send <i class="el-icon-caret-left el-icon-left"></i></router-link>
                </template>
            </el-table-column>
            <el-table-column align="right" width="150px">
                <template slot-scope="scope">
                    <router-link
                            :to="'compose/' + scope.row.id"
                            class="el-button el-button--info el-button--medium is-round is-plain"
                            style="float: right;"
                            @click="sendId"
                    >Compose <i class="el-icon-edit el-icon-left"></i></router-link>
                </template>
            </el-table-column>
            <el-table-column align="right" width="150px">
                <template slot-scope="scope">
                    <router-link
                            :to="'inbox/' + scope.row.id"
                            class="el-button el-button--success el-button--medium is-round is-plain"
                            style="float: right;"
                    >Inbox <i class="el-icon-message el-icon-left"></i></router-link>
                </template>
            </el-table-column>
            <el-table-column
                    prop="email"
                    label="Email"
                    align="right">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="Name"
                    align="right"
                    width="250px">
            </el-table-column>
            <el-table-column
                    prop="id"
                    label="Id"
                    align="right"
                    width="150px">
            </el-table-column>
        </el-table>
    </section>
</template>

<script>
    import axios from 'axios'
    import { EventBus } from '../Events.js';
    export default {
        data () {
            return {
                tableUsers: []
            }
        },
        created () {
            axios.get('http://user.fitamin.ir/messagingservice/public/api/users')
                .then(response => {
                    console.log(response);
                    this.tableUsers = response.data;
                    // console.log(this.tableData);
                })
                .catch(err => {
                    console.log(err)
                })
        },
        methods: {
            sendId (){
                EventBus.$emit('to_id', this.tableUsers.id);
                console.log(this.tableUsers.id);
            }
        }
    }
</script>

<style scoped>

</style>