<template>
    <section class="list">
        <el-table :data="tableUsers" v-loading="loading">
            <el-table-column align="right" width="150px">
                <template slot-scope="scope">
                    <!--<el-button @click="$router.push('user/' + scope.row.id)" type="primary" size="medium" plain>نمایش</el-button>-->
                    <router-link
                            :to="'user/' + scope.row.id"
                            class="el-button el-button--primary el-button--medium is-round is-plain"
                            style="float: right;">
                        <span class="el-icon-caret-left"></span>
                        <span>Show</span>
                    </router-link>
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
    // import { eventBus } from '../main.js';
    export default {
        data () {
            return {
                tableUsers: [],
                loading: false
            }
        },
        created () {
            this.loading = true;
            axios.get('http://user.fitamin.ir/messagingservice/public/api/users')
                .then(response => {
                    console.log(response);
                    this.tableUsers = response.data;
                    this.loading = false;
                    // console.log(this.tableData);
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }
</script>

<style scoped>

</style>