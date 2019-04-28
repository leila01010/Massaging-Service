<template>
    <section class="list">
        <div class="title--box clearfix">
            <h2 class="primary--title">لیست حرکات</h2>
            <!-- <el-button-group>
              <el-button icon="el-icon-plus" type="success" @click.prevent="$router.push('exerciseList/32')"> افزون حرکت</el-button>
            </el-button-group> -->
        </div>
        <el-form ref="form" label-position="top">
            <el-row :gutter="20" class="ExerciseList--form">
                <el-col :span="8">
                    <el-form-item label="نام کاربر">
                        <el-input v-model="searchedItem" @keyup.enter.native="onSubmit"></el-input>
                    </el-form-item>
                </el-col>

                <el-col :span="8">
                    <el-form-item label="">
                        <el-button
                                :disabled="!termExist"
                                icon="el-icon-search" size="medium" type="primary" @click="onSubmit()"
                                style="margin-top: 50px">جستجو
                        </el-button>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
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
                searchedItem: '',
                searched: false,
                loading: false
            }
        },
        methods: {
            onSubmit() {
                if(!this.searchedItem)
                    return;
                this.searchExercise()
            },
            searchExercise() {
                this.loading = true;
                this.$http.get('http://user.fitamin.ir/messagingservice/public/api/users' + "/search/" + this.searchedItem)
                    .then(response => {
                        console.log(response);
                        this.tableUsers = response.data;
                        this.loading = false;
                        this.searched = true;
                    });
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
        },
        computed : {
            termExist(){
                return this.searchedItem.length > 1 ;
            }
        }
    }
</script>

<style scoped>

</style>