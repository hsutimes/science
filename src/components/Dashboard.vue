<template>
  <div>
    <Row>
      <Col span="8" class="con">
        <i-circle
          :size="250"
          :trail-width="4"
          :stroke-width="5"
          :percent="60"
          stroke-linecap="square"
          stroke-color="#43a3fb"
        >
          <div class="demo-Circle-custom">
            <h1>60</h1>
            <p>用户人数</p>
            <span>
              占比
              <i>75%</i>
            </span>
          </div>
        </i-circle>
      </Col>
      <Col span="8" class="con">
        <i-circle
          :size="250"
          :trail-width="4"
          :stroke-width="5"
          :percent="31"
          stroke-linecap="square"
          stroke-color="#881254"
        >
          <div class="demo-Circle-custom">
            <h1>31</h1>
            <p>项目数量</p>
            <span>
              占比
              <i>85%</i>
            </span>
          </div>
        </i-circle>
      </Col>
      <Col span="8" class="con">
        <i-circle
          :size="250"
          :trail-width="4"
          :stroke-width="5"
          :percent="96"
          stroke-linecap="square"
          stroke-color="#7383fb"
        >
          <div class="demo-Circle-custom">
            <h1>96</h1>
            <p>日志</p>
            <span>
              占比
              <i>55%</i>
            </span>
          </div>
        </i-circle>
      </Col>
    </Row>
  </div>
</template>
<script>
export default {};
</script>
<style scoped lang="less">
.con {
  padding: 10px;
}
.demo-Circle-custom {
  & h1 {
    color: #3f414d;
    font-size: 28px;
    font-weight: normal;
  }
  & p {
    color: #000000;
    font-size: 14px;
    margin: 10px 0 15px;
  }
  & span {
    display: block;
    padding-top: 15px;
    color: #657180;
    font-size: 14px;
    &:before {
      content: "";
      display: block;
      width: 50px;
      height: 1px;
      margin: 0 auto;
      background: #e0e3e6;
      position: relative;
      top: -15px;
    }
  }
  & span i {
    font-style: normal;
    color: #3f414d;
  }
}
</style>
