<template>
  <div class="login">
    <el-form ref="form" :model="form" status-icon :rules="rules" label-width="80px">
      <img src="@/assets/avatar.jpg" alt>
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" placeholder="请输入用密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
        <el-button @click="reset">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入正确的用户名', trigger: 'change' },
          { min: 2, max: 6, message: '长度在 2 到 6 个字符', trigger: 'change' }
        ],
        password: [
          { required: true, message: '请输入正确的密码', trigger: 'change' },
          { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    reset() {
      this.$refs.form.resetFields()
    },
    onSubmit() {
      this.$refs.form.validate(valid => {
        if (!valid) {
          return false
        }
        axios({
          method: 'post',
          url: 'http://localhost:8888/api/private/v1/login',
          data: this.form
        }).then(res => {
          console.log(res.data)
          if (res.data.meta.status === 200) {
            this.$message.success({
              message: '登录成功',
              type: 'success',
              duration: 1000
            })
            localStorage.setItem('token', res.data.data.token)
            this.$router.push('/home')
          } else {
            this.$message.error(res.data.meta.msg)
          }
        })
      })
    }
  }
}
</script>

<style lang="less">
.login {
  width: 100%;
  height: 100%;
  background: #2d434c;
  overflow: hidden;
  .el-form {
    width: 400px;
    margin: 200px auto;
    background: #fff;
    padding: 70px 30px 25px 45px;
    position: relative;
    border-radius: 20px;
    img {
      width: 100px;
      height: 100px;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: -70px;
      border: 10px solid #fff;
      border-radius: 50%;
    }
    .el-button + .el-button {
      margin-left: 60px;
    }
  }
}
</style>
