<template>
    <div class="create">
        <el-form :model="dynamicValidateForm" :rules="rules" ref="dynamicValidateForm" label-width="120px" class="demo-dynamic">
            <el-form-item label="To" prop="to">
                <el-input type="number" v-model.number="dynamicValidateForm.to" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="From" prop="from">
                <el-input type="number" v-model.number="dynamicValidateForm.from" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="Subject" prop="subject">
                <el-input v-model="dynamicValidateForm.subject"></el-input>
            </el-form-item>
            <el-form-item label="Massage" prop="massage">
                <el-input v-model="dynamicValidateForm.massage"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('dynamicValidateForm')">Submit</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                dynamicValidateForm: {
                    to: '',
                    from: '',
                    subject: '',
                    massage: ''
                },
                rules: {
                    to: [
                        { required: true, message: 'this input is required'},
                        { type: 'number', message: 'value must be a number'}
                    ],
                    from: [
                        { required: true, message: 'this input is required'},
                        { type: 'number', message: 'value must be a number'}
                    ],
                    subject: [
                        { required: true, message: 'Please input subject', trigger: 'blur' },
                        { min: 5, max: 20, message: 'Length should be 5 to 20', trigger: 'blur' }
                    ],
                    massage: [
                        { required: true, message: 'Please input Massage', trigger: 'blur' },
                        { min: 15, max: 50, message: 'Length should be 15 to 50', trigger: 'blur' }
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
                axios.post('http://user.fitamin.ir/messagingservice/public/api/message', {
                    to_id: this.dynamicValidateForm.to,
                    from_id: this.dynamicValidateForm.from,
                    title: this.dynamicValidateForm.subject,
                    body: this.dynamicValidateForm.massage
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