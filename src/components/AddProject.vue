<template>
  <Form ref="formItem" :model="formItem" :label-width="80">
    <Row>
      <Col span="8">
        <FormItem label="项目编号">
          <Input v-model="formItem.no" placeholder="项目编号"></Input>
        </FormItem>
      </Col>
      <Col span="16">
        <FormItem label="项目名称">
          <Input v-model="formItem.name" placeholder="项目名称"></Input>
        </FormItem>
      </Col>
    </Row>
    <Row>
      <Col span="8">
        <FormItem label="负责人">
          <Input v-model="formItem.hostname" placeholder="负责人"></Input>
        </FormItem>
        <FormItem label="课题级别">
          <Select v-model="formItem.ktjb">
            <Option v-for="(x,index) in ktjblist" :key="index" :value="x.ktjbdm">{{x.ktjb}}</Option>
          </Select>
        </FormItem>
        <FormItem label="课题方向">
          <Select v-model="formItem.ktfx">
            <Option v-for="(x,index) in ktfxlist" :key="index" :value="x.ktfxdm">{{x.ktfx}}</Option>
          </Select>
        </FormItem>
        <FormItem label="申报单位">
          <Select v-model="formItem.sbdw">
            <Option v-for="(x,index) in sbdwlist" :key="index" :value="x.sbdwdm">{{x.sbdw}}</Option>
          </Select>
        </FormItem>
        <FormItem label="参与人1">
          <Input v-model="formItem.member1" placeholder="参与人1"></Input>
        </FormItem>
        <FormItem label="参与人4">
          <Input v-model="formItem.member4" placeholder="参与人4"></Input>
        </FormItem>
        <FormItem label="批准时间">
          <DatePicker type="date" placeholder="Select date" v-model="formItem.pzsj"></DatePicker>
        </FormItem>
      </Col>
      <Col span="8">
        <FormItem label="负责人工号">
          <Input v-model="formItem.hostid" placeholder="负责人工号"></Input>
        </FormItem>
        <FormItem label="课题属性">
          <Select v-model="formItem.ktsx">
            <Option v-for="(x,index) in ktsxlist" :key="index" :value="x.ktsxdm">{{x.ktsx}}</Option>
          </Select>
        </FormItem>
        <FormItem label="学科分类">
          <Select v-model="formItem.xkfl">
            <Option v-for="(x,index) in xkfllist" :key="index" :value="x.xkflbdm">{{x.xkfl}}</Option>
          </Select>
        </FormItem>
        <FormItem label="经费来源">
          <Select v-model="formItem.jfly">
            <Option v-for="(x,index) in jflylist" :key="index" :value="x.jflydm">{{x.jfly}}</Option>
          </Select>
        </FormItem>
        <FormItem label="参与人2">
          <Input v-model="formItem.member2" placeholder="参与人2"></Input>
        </FormItem>
        <FormItem label="参与人5">
          <Input v-model="formItem.member5" placeholder="参与人5"></Input>
        </FormItem>
        <FormItem label="完成时间">
          <DatePicker type="date" placeholder="Select date" v-model="formItem.wcsj"></DatePicker>
        </FormItem>
      </Col>
      <Col span="8">
        <FormItem label="总经费">
          <Input v-model="formItem.zjf" placeholder="总经费"></Input>
        </FormItem>
        <FormItem label="课题类别">
          <Select v-model="formItem.ktlb">
            <Option v-for="(x,index) in ktlblist" :key="index" :value="x.ktlbdm">{{x.ktlb}}</Option>
          </Select>
        </FormItem>
        <FormItem label="结题方式">
          <Select v-model="formItem.jtfs">
            <Option v-for="(x,index) in jtfslist" :key="index" :value="x.jtfsdm">{{x.jtfs}}</Option>
          </Select>
        </FormItem>
        <FormItem label="拨付途径">
          <Select v-model="formItem.bftj">
            <Option v-for="(x,index) in bftjlist" :key="index" :value="x.bftjdm">{{x.bftj}}</Option>
          </Select>
        </FormItem>
        <FormItem label="参与人3">
          <Input v-model="formItem.member3" placeholder="参与人3"></Input>
        </FormItem>
      </Col>
    </Row>
    <FormItem>
      <Button type="primary" @click="add()">提交项目</Button>
      <Button style="margin-left: 8px" @click="reset()">重置</Button>
    </FormItem>
  </Form>
</template>
<script>
import { mapState } from "vuex";
export default {
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$store.dispatch("loadBFTJList");
      vm.$store.dispatch("loadJFLYList");
      vm.$store.dispatch("loadJTFSList");

      vm.$store.dispatch("loadKTFXList");
      vm.$store.dispatch("loadKTJBList");
      vm.$store.dispatch("loadKTLBList");

      vm.$store.dispatch("loadKTSXList");
      vm.$store.dispatch("loadSBDWList");
      vm.$store.dispatch("loadXKFLList");
    });
  },
  data() {
    return {
      formItem: {
        no: "",
        name: "",
        hostid: "",
        hostname: "",
        bftjdm: "",
        jflydm: "",
        jtfsdm: "",
        ktfxdm: "",
        ktsxdm: "",
        ktlbdm: "",
        sbdwdm: "",
        xkfldm: "",
        ktjbdm: "",
        zjf: "",
        pzsj: "",
        wcsj: "",
        member1: "",
        member2: "",
        member3: "",
        member4: "",
        member5: ""
      }
    };
  },
  computed: mapState({
    userinfo: state => state.userinfo,
    bftjlist: state => state.bftjlist,
    jflylist: state => state.jflylist,
    jtfslist: state => state.jtfslist,
    ktfxlist: state => state.ktfxlist,
    ktjblist: state => state.ktjblist,
    ktlblist: state => state.ktlblist,
    ktsxlist: state => state.ktsxlist,
    sbdwlist: state => state.sbdwlist,
    xkfllist: state => state.xkfllist
  }),
  methods: {
    add() {
      // this.$Message.success(JSON.stringify(this.formItem));
      this.$Message.success("添加成功，等待审核");
    },
    reset() {
      this.formItem = {
        no: "",
        name: "",
        hostid: this.userinfo.id,
        hostname: this.userinfo.name,
        bftjdm: "",
        jflydm: "",
        jtfsdm: "",
        ktfxdm: "",
        ktsxdm: "",
        ktlbdm: "",
        sbdwdm: "",
        xkfldm: "",
        ktjbdm: "",
        zjf: "",
        pzsj: "",
        wcsj: "",
        member1: "",
        member2: "",
        member3: "",
        member4: "",
        member5: ""
      };
    }
  },
  created() {
    this.formItem.hostid = this.userinfo.id;
    this.formItem.hostname = this.userinfo.name;
  }
};
</script>
