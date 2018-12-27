<template>
  <el-container class="home">
    <el-header>
      <div class="logo"></div>
      <h1>电商后端管理系统</h1>
      <div class="login_out">
        <span>欢迎光临</span>
        <a href="javascript:;" @click="dropOut">退出</a>
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          default-active="1-1"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          unique-opened
          router
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item index="1-1">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>用户列表</span>
              </template>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>权限管理</span>
            </template>
            <el-menu-item index="2-1">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>角色列表</span>
              </template>
            </el-menu-item>
            <el-menu-item index="2-2">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>权限列表</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  methods: {
    // 退出功能
    dropOut() {
      this.$confirm('您确定退出本系统吗?', '温馨提示', {
        comfirmButtomText: '确定',
        cancelButtomText: '取消',
        type: 'warning'
      }).then(() => {
        // 退出要清除token
        localStorage.removeItem('token')
        this.$router.push('/login')
        this.$message.success('退出本系统成功!')
      }).catch(() => {
        this.$message({
          type: 'success',
          message: '取消成功!'
        })
      })
    }
  }
}
</script>

<style lang="less" scoped>
.home {
  height: 100%;
  .el-header {
    height: 60px;
    background: #b3c1cd;
    display: flex;
    .logo {
      width: 180px;
      background-image: url('~@/assets/logo.png');
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center center;
    }
    h1 {
      font-size: 30px;
      flex: 1;
      text-align: center;
      line-height: 60px;
      color: #fff;
    }
    .login_out {
      width: 180px;
      text-align: right;
      line-height: 60px;
      font-weight: 700;
      a {
        color: orange;
        text-decoration: none;
      }
    }
  }
  .el-menu {
    .el-submenu {
      width: 200px;
    }
  }
  .el-aside {
    background-color: #545c64;
  }

  .el-main {
    background-color: #d4dfe4;
  }
}
</style>
