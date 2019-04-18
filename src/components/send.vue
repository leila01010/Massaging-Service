<template>
    <section class="list">
        <el-table class="containerList"
                  :data="sendBox">
            <el-table-column>
                <template slot-scope="scope">
                    <!--<el-button @click="$router.push('user/' + scope.row.id)" type="primary" size="medium" plain>نمایش</el-button>-->
                    <router-link
                            :to="'edit/' + scope.row.id"
                            class="el-button el-button--primary el-button--medium is-round is-plain"
                            style="float: right;"
                    >ویرایش</router-link>
                </template>
            </el-table-column>
            <el-table-column>
                <template slot-scope="scope">
                    <!--<el-button @click="$router.push('user/' + scope.row.id)" type="primary" size="medium" plain>نمایش</el-button>-->
                    <router-link
                            :to="'show/' + scope.row.id"
                            class="el-button el-button--info el-button--medium is-round"
                            style="float: right;"
                    >نمایش</router-link>
                </template>
            </el-table-column>
            <el-table-column
                    prop="body"
                    label="Massage"
                    align="right"
                    width="650px">
            </el-table-column>
            <el-table-column
                    prop="title"
                    label="title"
                    align="right"
            width="400px">
            </el-table-column>
            <el-table-column
                    prop="to_id"
                    label="Receiver"
                    align="right"
                    width="200px">
            </el-table-column>
            <el-table-column
                    prop="from_id"
                    label="Sender"
                    align="right"
                    width="100px">
            </el-table-column>
        </el-table>
    </section>
</template>

<script>
    import axios from 'axios'
    export default {
        data () {
            return {
                sendBox: []
            }
        },
        created () {
            axios.get('http://user.fitamin.ir/messagingservice/public/api/message/sent/3')
                .then(response => {
                    console.log(response);
                    this.sendBox = response.data.data;
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