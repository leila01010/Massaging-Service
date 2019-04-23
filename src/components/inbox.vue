<template>
  <section class="list">
      <el-table :data="tableData">
          <el-table-column>
              <template slot-scope="scope">
                  <!--<el-button @click="$router.push('user/' + scope.row.id)" type="primary" size="medium" plain>نمایش</el-button>-->
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
                width="900px">
        </el-table-column>
        <el-table-column
                prop="title"
                label="title"
                align="right"
        width="400px">
        </el-table-column>
          <el-table-column
                  prop="from_id"
                  label="Sender"
                  align="right">
          </el-table-column>
      </el-table>
  </section>
</template>

<script>
    import axios from 'axios'
  export default {
      data () {
          return {
              tableData: []
          }
      },
      created () {
          axios.get('http://user.fitamin.ir/messagingservice/public/api/message/inbox/' + this.$route.params.id)
              .then(response => {
                  console.log(response);
                  this.tableData = response.data.data;
                  // console.log(this.tableData);
              })
              .catch(err => {
                  console.log(err)
              })
      }
  }
</script>
