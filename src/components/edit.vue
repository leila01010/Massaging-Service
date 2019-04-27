<template>
    <div class="showMassage">
        <el-card class="box-card">
            <el-input class="cls_input cls_input2" type="number" placeholder="Please input number TO" v-model="to"></el-input>
            <!--<el-input class="cls_input cls_input2" type="number" placeholder="Please input number FROM" v-model="from"></el-input>-->
            <el-input class="cls_input cls_input2" placeholder="Please input" v-model="title"></el-input>
            <el-input
                    class="cls_input"
                    type="textarea"
                    :rows="4"
                    placeholder="Please input"
                    v-model="body">
            </el-input>
            <el-button class="cls_input" type="success" @click="edit()" icon="el-icon-check" circle></el-button>
            <div>{{ from }}</div>
        </el-card>
    </div>
</template>

<script>
    import axios from 'axios'
    import { eventBus } from '../main.js';
    export default {
        data() {
            return {
                to: '',
                from: '',
                title: '',
                body: ''
            }
        },
        mounted() {
            eventBus.$on('info',(data) => {
                this.from = data;
            })
        },
        methods: {
          edit(){
              axios.patch('http://user.fitamin.ir/messagingservice/public/api/message/' + this.$route.params.id , {
                  to_id: this.to,
                  from_id: this.from,
                  title: this.title,
                  body: this.body
              })
                  .then(response => {
                      console.log(response);
                  })
                  .catch(error => {
                      console.log(error);
                  })
          }
        }
    }
</script>

<style scoped>

</style>