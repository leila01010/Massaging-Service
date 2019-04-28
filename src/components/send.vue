<template>
    <section class="list">
        <el-table class="containerList"
                  :data="sendBox">
            <el-table-column>
                <template slot-scope="scope">
                    <!--<el-button @click="$router.push('user/' + scope.row.id)" type="primary" size="medium" plain>نمایش</el-button>-->
                    <!--<router-link-->
                            <!--:to="'/edit/' + scope.row.id"-->
                            <!--class="el-button el-button&#45;&#45;primary el-button&#45;&#45;medium is-round is-plain"-->
                            <!--style="float: right;">-->
                        <!--<div @click="sendData()">ویرایش</div>-->
                    <!--</router-link>-->
                    <el-button @click="$router.push('/edit/' + scope.row.id)" type="primary" size="medium" target="_blank" plain round>dddddd</el-button>
                </template>
            </el-table-column>
            <el-table-column>
                <template slot-scope="scope">
                    <router-link
                            :to="'/show/' + scope.row.id"
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
        <div>{{ infoId }}</div>
    </section>
</template>

<script>
    import axios from 'axios'
    import { eventBus } from '../main.js';
    export default {
        data () {
            return {
                infoId: this.$route.params.id,
                sendBox: []
            }
        },
        created () {
            axios.get('http://user.fitamin.ir/messagingservice/public/api/message/sent/' + this.$route.params.id)
                .then(response => {
                    console.log(response);
                    this.sendBox = response.data.data;
                    // console.log(this.tableData);
                })
                .catch(err => {
                    console.log(err)
                })
        },
        methods: {
            sendData () {
                eventBus.$emit('info',this.infoId);
                console.log(this.infoId);
            }
        }
    }
</script>

<style scoped>

</style>