<template>
  <div class="login_wrap">
    <div class="login_box">
      <div class="img">
        <img
          src="http://120.53.31.103:84/uploads/image/2020-05-27/zmkrHVxaa4fVI5jtcNZ3xGy6KPU0QjXzxPjX7trh.jpeg"
          alt
        />
        <h1>欢迎使用后台管理系统</h1>
      </div>
      <div class="login_ti">
        <el-form :model="form" :rules="rules" ref="form">
          <el-form-item prop="name">
            <!-- class="el-icon-unlock" -->
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item prop="pass">
            <!-- class="el-icon-s-custom" -->
            <el-input type="password" v-model="form.pass"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitForm('form')">立即登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import loging from "@/api/test";
export default {
  data() {
    return {
      form: {
        name: "",
        pass: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入账号", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        pass: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 5, max: 10, message: "长度在 5 到 10 个字符", trigger: "blur" }
        ]
      }
    };
  },
  created() {},
  mounted() {},
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          //1调用登录接口
          loging.login(this.form.name, this.form.pass).then(res => {
            console.log(res);
            let code = res.data.code;
            console.log(code);
            if (code == 200) {
                let ue = res.data.data.uename
                let ss = res.data.data.uepass
                // console.log(ue)
              if (ue == this.form.name && ss == this.form.pass) {
                
                //获取token
                let token = res.data.data.token;
                console.log(token);
                //吧token存储到本地
                localStorage.setItem("jy_token", token);
              }else{
                alert('账号或密码错误')
                return false
              }

              //2获取用户信息
              loging.getUser().then(res => {
                let resp = res.data;
                // console.log(resp)
                if (resp.data.code == 200) {
                  //将获取到的用户信息保存到本地
                  localStorage.setItem(
                    "jy_info",
                    JSON.stringify(resp.data.data)
                  );
                  //跳转到首页
                  this.$router.push("/");
                }
              });
            }
          });
        } else {
          //   console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style scoped lang="scss">
.login_wrap {
  width: 100%;
  height: 100%;
  position: absolute;
}
.login_box {
  width: 450px;
  height: 450px;
  margin: 0 auto;
}
.img {
  width: 420px;
  height: 340px;
  margin: 0 auto;
  img {
    width: 420px;
    height: 246px;
  }
  h1 {
    text-align: center;
    color: blueviolet;
  }
}
.login_ti {
  width: 800px;
  height: 300px;
  margin: 0 auto;
  margin-left: -110px;
  .el-form-item__content {
    .el-input {
      width: 700px;
      margin-top: 30px;
    }
  }
}
.el-button {
  // margin-left: 186px;
  margin-top: 30px;
  width: 700px;
}
.el-form {
  //
  margin: 0 auto;
}
</style>
