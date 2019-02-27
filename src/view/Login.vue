<style scoped>
.login-content {
  padding-top: 15%;
}

.login-content h1 {
  /* font-weight: lighter; */
  text-align: center;
  margin: 30px;
}
</style>

<template>
  <div class="login-content">
    <h1>欢迎！</h1>
    <Row type="flex" justify="center" align="middle">
      <Col :xs="20" :sm="10" :md="7" :lg="7">
        <Form ref="loginForm" :model="loginForm" :rules="ruleLoginForm">
          <FormItem prop="user">
            <Input type="text" v-model="loginForm.user" placeholder="请输入用户名">
              <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem prop="password">
            <Input type="password" v-model="loginForm.password" placeholder="请输入'密码'">
              <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem prop="role">
            <RadioGroup v-model="loginForm.role" :style="{textAlign:'center'}">您的身份是：
              <Radio label="0">
                <span>普通用户</span>
              </Radio>
              <Radio label="1">
                <span>院系用户</span>
              </Radio>
              <Radio label="2">
                <span>管理员</span>
              </Radio>
            </RadioGroup>
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              @click="handleSubmit('loginForm')"
              :disabled="loginForm.btnEnable"
              long
            >登录</Button>
          </FormItem>
        </Form>
      </Col>
    </Row>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      loginForm: {
        user: "",
        password: "",
        role: "0",
        btnEnable: false
      },
      ruleLoginForm: {
        user: [{ required: true, message: "用户名不能为空", trigger: "blur" }],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          {
            type: "string",
            min: 6,
            message: "密码长度不能低于6位",
            trigger: "blur"
          }
        ],
        role: [
          { required: true, message: "您必须选择您的登录角色", trigger: "blur" }
        ]
      }
    };
  },
  computed: mapState({
    msg: state => state.msg
  }),
  methods: {
    handleSubmit(name) {
      this.loginForm.btnEnable = true;
      this.$refs[name].validate(async valid => {
        if (valid) {
          const res = await this.$store.dispatch("login", {
            name: this.loginForm.user,
            pw: this.loginForm.password,
            power: this.loginForm.role
          });
          if (res) {
            this.$Message.success("登录成功，稍后为您转跳。");
            setTimeout(() => {
              this.$router.push("/");
            }, 1000);
          } else {
            this.$Message.error("登录失败：" + this.msg);
          }
        } else {
          this.$Message.error("请检查您的账户名和密码。");
        }
      });
      this.loginForm.btnEnable = false;
    }
  }
};
</script>
