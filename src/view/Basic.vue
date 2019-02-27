<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark">
          <div class="layout-logo">科研项目管理系统</div>
          <div class="layout-user">
            <Dropdown>
              <Avatar style="background-color: #87d068" size="large" icon="ios-person"/>
              <DropdownMenu slot="list">
                <DropdownItem>{{userinfo.name}}</DropdownItem>
                <DropdownItem divided>
                  <router-link :to="'user'">个人主页</router-link>
                </DropdownItem>
                <DropdownItem>消息通知</DropdownItem>
                <DropdownItem divided>
                  <router-link :to="'login'">退出登录</router-link>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </Menu>
      </Header>
      <Layout>
        <Sider hide-trigger :style="{background: '#fff'}">
          <Menu
            v-if="userinfo.power==0"
            active-name="0"
            theme="light"
            width="auto"
            :open-names="['0']"
          >
            <MenuItem name="0" :to="'/'">
              <Icon type="ios-albums"/>
              <span>Dashboard</span>
            </MenuItem>
            <MenuItem name="1" :to="'/user'">
              <Icon type="ios-contact"/>
              <span>个人信息</span>
            </MenuItem>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-keypad"></Icon>项目管理
              </template>
              <MenuItem name="1-1" :to="'/content'">项目查看</MenuItem>
              <MenuItem name="1-2" :to="'/addproject'">项目添加</MenuItem>
            </Submenu>
          </Menu>
          <Menu
            v-else-if="userinfo.power==1"
            active-name="0"
            theme="light"
            width="auto"
            :open-names="['0']"
          >
            <MenuItem name="0" :to="'/'">
              <Icon type="ios-albums"/>
              <span>Dashboard</span>
            </MenuItem>
            <MenuItem name="1" :to="'/user'">
              <Icon type="ios-contact"/>
              <span>个人信息</span>
            </MenuItem>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-keypad"></Icon>项目管理
              </template>
              <MenuItem name="2-1" :to="'/content'">项目查看</MenuItem>
              <MenuItem name="3-2" :to="'/addproject'">项目添加</MenuItem>
              <MenuItem name="2-2" :to="'/check'">项目审核</MenuItem>
            </Submenu>
          </Menu>
          <Menu
            v-else-if="userinfo.power==2"
            active-name="0"
            theme="light"
            width="auto"
            :open-names="['0']"
          >
            <MenuItem name="0" :to="'/'">
              <Icon type="ios-albums"/>
              <span>Dashboard</span>
            </MenuItem>
            <MenuItem name="1" :to="'/user'">
              <Icon type="ios-contact"/>
              <span>个人信息</span>
            </MenuItem>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>项目管理
              </template>
              <MenuItem name="2-1" :to="'/content'">项目查看</MenuItem>
              <MenuItem name="2-2" :to="'/addproject'">项目添加</MenuItem>
              <MenuItem name="2-3" :to="'/check'">项目审核</MenuItem>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="ios-contacts"></Icon>用户管理
              </template>
              <MenuItem name="3-1" :to="'/alluser'">所有用户</MenuItem>
            </Submenu>
            <Submenu name="4">
              <template slot="title">
                <Icon type="ios-analytics"></Icon>日志管理
              </template>
              <MenuItem name="4-1" :to="'/log'">所有日志</MenuItem>
            </Submenu>
          </Menu>
        </Sider>
        <Layout :style="{padding: '24px 24px 24px'}">
          <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
            <router-view></router-view>
          </Content>
          <Footer class="layout-footer-center">2018-2019 &copy; Time</Footer>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      name: ""
    };
  },
  computed: mapState({
    userinfo: state => state.userinfo,
    login: state => state.login
  }),
  methods: {
    loginOut() {
      this.$router.push("/login");
    }
  },
  created() {
    if (this.login == false) {
      this.$router.push("/login");
    }
  }
};
</script>
<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-logo {
  height: 30px;
  border-radius: 3px;
  font-family: "Courier New", Courier, monospace;
  font-size: 30px;
  color: aliceblue;
  padding-top: 5px;
  float: left;
  position: relative;
}
.layout-user {
  color: aliceblue;
  float: right;
  top: 15px;
  right: 20px;
}
.layout-footer-center {
  text-align: center;
}
</style>