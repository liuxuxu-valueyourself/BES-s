<template>
  <a-form
    id="components-form-demo-normal-login"
    :form="form"
    class="login-form"
    @submit="handleSubmit"
  >
    <h3>登录:</h3>
    <a-form-item>
      <a-input
        v-decorator="[
          'userName',
          {
            rules: [{ required: true, message: '请输入用户名 亲!' }]
          }
        ]"
        placeholder="请输入用户名"
      >
        <a-icon slot="prefix" type="user" style="color: rgba(0, 0, 0, 0.25)" />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-input
        v-decorator="[
          'password',
          {
            rules: [{ required: true, message: '请输入密码 亲!' }]
          }
        ]"
        type="password"
        placeholder="请输入密码"
      >
        <a-icon slot="prefix" type="lock" style="color: rgba(0, 0, 0, 0.25)" />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-button type="primary" html-type="submit" class="login-form-button">
        登录
      </a-button>
      Or

      <router-link :to="{ name: 'register' }">注册</router-link>
    </a-form-item>
  </a-form>
</template>

<script>
export default {
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "normal_login" });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          let { userName, password } = values;
          if (localStorage.getItem(userName) === password) {
            this.$message.success("登录成功!");
            this.$store.commit("editUserName", { newUserName: userName });
            this.$router.push({
              name: "show"
            });
          } else {
            this.$message.warning("登录失败!");
          }
        }
      });
    }
  }
};
</script>
<style scoped>
.login-form {
  width: 450px;
  margin: 100px auto;
}
h3 {
  font-size: 26px;
  margin: 10px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>
