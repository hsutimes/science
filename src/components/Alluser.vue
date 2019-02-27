<template>
  <div>
    <Table border ref="selection" :columns="columns" :data="userlist"></Table>
    <Button @click="handleSelectAll(true)">全选</Button>
    <Button @click="handleSelectAll(false)">取消</Button>
    <Button @click="del()">删除</Button>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$store.dispatch("loadUserList");
    });
  },
  data() {
    return {
      columns: [
        {
          type: "selection",
          width: 60,
          align: "center"
        },
        {
          title: "Id",
          key: "id"
        },
        {
          title: "Name",
          key: "name"
        },
        {
          title: "Power",
          key: "power"
        }
      ]
    };
  },
  computed: mapState({
    userlist: state => state.userlist
  }),
  methods: {
    handleSelectAll(status) {
      this.$refs.selection.selectAll(status);
    },
    del() {
      this.$store.dispatch("setUserList");
    }
  }
};
</script>
<style scoped>
.ivu-table .demo-table-info-row td {
  background-color: #2db7f5;
  color: #fff;
}
.ivu-table .demo-table-error-row td {
  background-color: #ff6600;
  color: #fff;
}
.ivu-table td.demo-table-info-column {
  background-color: #2db7f5;
  color: #fff;
}
.ivu-table .demo-table-info-cell-name {
  background-color: #2db7f5;
  color: #fff;
}
.ivu-table .demo-table-info-cell-age {
  background-color: #ff6600;
  color: #fff;
}
.ivu-table .demo-table-info-cell-address {
  background-color: #187;
  color: #fff;
}
</style>
