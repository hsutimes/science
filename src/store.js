import Vue from 'vue';
import Vuex from 'vuex';
import http from './libs/http';
import conf from './libs/conf';
import util from "./libs/util";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login: false,
    userinfo: '',
    basicinfolist: [],
    userlist: [],
    bftjlist: [],
    jflylist: [],
    jtfslist: [],
    ktfxlist: [],
    ktjblist: [],
    ktlblist: [],
    ktsxlist: [],
    sbdwlist: [],
    xkfllist: [],
    msg: ''
  },
  mutations: {
    SET_MSG(state, msg) {
      state.msg = msg;
    },
    SET_LOGIN(state, login) {
      state.login = login;
    },
    SET_USERINFO(state, userinfo) {
      state.userinfo = userinfo;
    },
    SET_BASICINFOLIST(state, basicinfolist) {
      state.basicinfolist = basicinfolist;
    },
    SET_USERLIST(state, userlist) {
      state.userlist = userlist;
    },
    SET_BFTJLIST(state, bftjlist) {
      state.bftjlist = bftjlist;
    },
    SET_JFLYLIST(state, jflylist) {
      state.jflylist = jflylist;
    },
    SET_JTFSLIST(state, jtfslist) {
      state.jtfslist = jtfslist;
    },
    SET_KTFXLIST(state, ktfxlist) {
      state.ktfxlist = ktfxlist;
    },
    SET_KTJBLIST(state, ktjblist) {
      state.ktjblist = ktjblist;
    },
    SET_KTLBLIST(state, ktlblist) {
      state.ktlblist = ktlblist;
    },
    SET_KTSXLIST(state, ktsxlist) {
      state.ktsxlist = ktsxlist;
    },
    SET_SBDWLIST(state, sbdwlist) {
      state.sbdwlist = sbdwlist;
    },
    SET_XKFLLIST(state, xkfllist) {
      state.xkfllist = xkfllist;
    }
  },
  actions: {
    async login(context, {
      name,
      pw,
      power
    }) {
      try {
        let res = await http.post({
          url: conf.host + '/api/login',
          body: {
            name: name,
            pw: pw,
            power: power
          }
        })
        if (res.status) {
          util.setCookie("auth", JSON.stringify(res.auth), 1);
          context.commit('SET_USERINFO', res.auth);
          context.commit('SET_LOGIN', true);
          return true;
        } else {
          context.commit('SET_MSG', res.msg);
        }
      } catch (error) {
        context.commit('SET_MSG', error.msg);
      }
      return false;
    },
    async loadBasicinfoList(context) {
      try {
        let res = await http.get({
          url: conf.host + '/api/basicinfolist',
          query: {}
        })
        if (res.status) {
          context.commit('SET_BASICINFOLIST', res.data);
          return true;
        } else {
          context.commit('SET_MSG', res.msg);
        }
      } catch (error) {
        context.commit('SET_MSG', error.msg);
      }
      return false;
    },
    async loadUserList(context) {
      try {
        let res = await http.get({
          url: conf.host + '/api/userlist',
          query: {}
        })
        if (res.status) {
          context.commit('SET_USERLIST', res.data);
          return true;
        } else {
          context.commit('SET_MSG', res.msg);
        }
      } catch (error) {
        context.commit('SET_MSG', error.msg);
      }
      return false;
    },
    async loadBFTJList(context) {
      try {
        let res = await http.get({
          url: conf.host + '/api/bftjlist',
          query: {}
        })
        if (res.status) {
          context.commit('SET_BFTJLIST', res.data);
          return true;
        } else {
          context.commit('SET_MSG', res.msg);
        }
      } catch (error) {
        context.commit('SET_MSG', error.msg);
      }
      return false;
    },
    async loadJFLYList(context) {
      try {
        let res = await http.get({
          url: conf.host + '/api/jflylist',
          query: {}
        })
        if (res.status) {
          context.commit('SET_JFLYLIST', res.data);
          return true;
        } else {
          context.commit('SET_MSG', res.msg);
        }
      } catch (error) {
        context.commit('SET_MSG', error.msg);
      }
      return false;
    },
    async loadJTFSList(context) {
      try {
        let res = await http.get({
          url: conf.host + '/api/jtfslist',
          query: {}
        })
        if (res.status) {
          context.commit('SET_JTFSLIST', res.data);
          return true;
        } else {
          context.commit('SET_MSG', res.msg);
        }
      } catch (error) {
        context.commit('SET_MSG', error.msg);
      }
      return false;
    },
    async loadKTFXList(context) {
      try {
        let res = await http.get({
          url: conf.host + '/api/ktfxlist',
          query: {}
        })
        if (res.status) {
          context.commit('SET_KTFXLIST', res.data);
          return true;
        } else {
          context.commit('SET_MSG', res.msg);
        }
      } catch (error) {
        context.commit('SET_MSG', error.msg);
      }
      return false;
    },
    async loadKTJBList(context) {
      try {
        let res = await http.get({
          url: conf.host + '/api/ktjblist',
          query: {}
        })
        if (res.status) {
          context.commit('SET_KTJBLIST', res.data);
          return true;
        } else {
          context.commit('SET_MSG', res.msg);
        }
      } catch (error) {
        context.commit('SET_MSG', error.msg);
      }
      return false;
    },
    async loadKTLBList(context) {
      try {
        let res = await http.get({
          url: conf.host + '/api/ktlblist',
          query: {}
        })
        if (res.status) {
          context.commit('SET_KTLBLIST', res.data);
          return true;
        } else {
          context.commit('SET_MSG', res.msg);
        }
      } catch (error) {
        context.commit('SET_MSG', error.msg);
      }
      return false;
    },
    async loadKTSXList(context) {
      try {
        let res = await http.get({
          url: conf.host + '/api/ktsxlist',
          query: {}
        })
        if (res.status) {
          context.commit('SET_KTSXLIST', res.data);
          return true;
        } else {
          context.commit('SET_MSG', res.msg);
        }
      } catch (error) {
        context.commit('SET_MSG', error.msg);
      }
      return false;
    },
    async loadSBDWList(context) {
      try {
        let res = await http.get({
          url: conf.host + '/api/sbdwlist',
          query: {}
        })
        if (res.status) {
          context.commit('SET_SBDWLIST', res.data);
          return true;
        } else {
          context.commit('SET_MSG', res.msg);
        }
      } catch (error) {
        context.commit('SET_MSG', error.msg);
      }
      return false;
    },
    async loadXKFLList(context) {
      try {
        let res = await http.get({
          url: conf.host + '/api/xkfllist',
          query: {}
        })
        if (res.status) {
          context.commit('SET_XKFLLIST', res.data);
          return true;
        } else {
          context.commit('SET_MSG', res.msg);
        }
      } catch (error) {
        context.commit('SET_MSG', error.msg);
      }
      return false;
    },
    async setUserList(context) {
      try {
        context.commit('SET_USERLIST', []);
        return true;
      } catch (error) {
        context.commit('SET_MSG', error.msg);
      }
      return false;
    }
  }
})