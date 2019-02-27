<template>
  <div>
    <Row>
      <Col span="8" class="content" v-for="(x,index) in basicinfolist" :key="index">
        <Card>
          <p slot="title">{{x.projectname}}</p>
          <p>负责人：
            <Tag color="primary">{{x.hostname}}</Tag>
          </p>
          <p>其他参与人：
            <Tag color="default">{{x.member1}}</Tag>
            <Tag color="green">{{x.member2}}</Tag>
            <Tag color="success">{{x.member3}}</Tag>
            <Tag color="warning">{{x.member4}}</Tag>
            <Tag color="magenta">{{x.member5}}</Tag>
          </p>
          <p>
            批准时间：<Tag color="cyan">{{getDate(x.pzsj)}}</Tag>
            完成时间：<Tag color="blue">{{getDate(x.wcsj)}}</Tag>
          </p>
        </Card>
      </Col>
    </Row>
  </div>
</template>
<script>
import { mapState } from "vuex";
import util from "../libs/util";

export default {
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$store.dispatch("loadBasicinfoList");
    });
  },
  data() {
    return {
      name: ""
    };
  },
  computed: mapState({
    basicinfolist: state => state.basicinfolist
  }),
  methods: {
    getDate(date) {
      return util.dateFormat(date);
    }
  },
  created() {}
};
</script>
<style scoped>
.content {
  padding: 10px;
}
</style>
