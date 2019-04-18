<template>
    <div class="showMassage">
        <el-card class="box-card">
            <el-input class="cls_input cls_input2" placeholder="Please input" v-model="title"></el-input>
            <el-input
                    class="cls_input"
                    type="textarea"
                    :rows="4"
                    placeholder="Please input"
                    v-model="body">
            </el-input>
            <el-button class="cls_input" type="success" icon="el-icon-check" circle></el-button>
        </el-card>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                title: '',
                body: ''
            }
        },
        created () {
            axios.patch('http://user.fitamin.ir/messagingservice/public/api/message/' + this.$route.params.id , {
                title: this.title.trim(),
                body: this.body.trim()
            })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
        }
    }
</script>

<style scoped>

</style>