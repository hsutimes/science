<template>
  <div>
    <Row>
      <Col span="12">
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
          <FormItem label="Name" prop="name">
            <Input v-model="formValidate.name" placeholder="Enter your name"></Input>
          </FormItem>
          <FormItem>
            <Button type="primary" @click="handleSubmit('formValidate')">修改</Button>
            <Button @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
          </FormItem>
        </Form>
      </Col>
      <Col span="12">
        <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
          <FormItem label="旧密码" prop="oldpasswd">
            <Input type="password" v-model="formCustom.oldpasswd"></Input>
          </FormItem>
          <FormItem label="密码" prop="passwd">
            <Input type="password" v-model="formCustom.passwd"></Input>
          </FormItem>
          <FormItem label="确认密码" prop="passwdCheck">
            <Input type="password" v-model="formCustom.passwdCheck"></Input>
          </FormItem>
          <FormItem>
            <Button type="primary" @click="handleSubmit('formCustom')">修改</Button>
            <Button @click="handleReset('formCustom')" style="margin-left: 8px">重置</Button>
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
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please enter your password"));
      } else {
        if (this.formCustom.passwdCheck !== "") {
          // 对第二个密码框单独验证
          this.$refs.formCustom.validateField("passwdCheck");
        }
        callback();
      }
    };
    const validatePassCheck = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please enter your password again"));
      } else if (value !== this.formCustom.passwd) {
        callback(new Error("The two input passwords do not match!"));
      } else {
        callback();
      }
    };
    const validateOldPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please enter your password"));
      }else{
          callback();
      }
    };

    return {
      formCustom: {
        oldpasswd: "",
        passwd: "",
        passwdCheck: ""
      },
      ruleCustom: {
        passwd: [{ validator: validatePass, trigger: "blur" }],
        passwdCheck: [{ validator: validatePassCheck, trigger: "blur" }],
        oldpasswd: [{ validator: validateOldPass, trigger: "blur" }]
      },
      formValidate: {
        name: ""
      },
      ruleValidate: {
        name: [
          {
            message: "The name cannot be empty",
            trigger: "blur"
          }
        ]
      }
    };
  },
  computed: mapState({
    userinfo: state => state.userinfo
  }),
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("Success!");
        } else {
          this.$Message.error("Fail!");
        }
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    }
  },
  created() {
    this.formValidate.name = this.userinfo.name;
  }
};
</script>
