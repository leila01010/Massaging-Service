<template>
    <div class="showMassage">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>{{ show.title }}</span>
            </div>
            <div class ="text item">
                {{ show.body }}
            </div>
        </el-card>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data () {
            return {
                show: []
            }
        },
        created () {
            axios.get('http://user.fitamin.ir/messagingservice/public/api/message/' + this.$route.params.id)
                .then(response => {
                    console.log(response);
                    this.show = response.data;
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }
</script>

