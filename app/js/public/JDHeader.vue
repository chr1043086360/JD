<template>
  <div :class="$style.header">
    <span :class="$style.left">
      <!-- 实际中应该是两个链接地址, 分别跳转到注册和登录 -->
      <em>注册</em>&nbsp;|
      <em>登录</em>
    </span>
    <btn :class="$style.btnDownload">App下载</btn>
  </div>
</template>

<script>
import btn from "../core/btn";
export default {
  name: "JDHeader",
  components: {
    btn
  }
};
</script>

<style lang="scss" module>
.header {
  color: #666;
  height: 100px;
  line-height: 100px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  font-size: 32px;
  background: #fff url(http://m.jr.jd.com/spe/qyy/main/images/jr-logo.png)
    center center no-repeat;
  background-size: auto 50%;
  z-index: 100;
  .left {
    font-size: 28px;
    height: 30px;
    line-height: 30px;
    margin: 17px 0 0 18px;
  }
  .btnDownload {
    float: right;
    font-size: 24px;
    border-width: 0;
    height: 56px;
    line-height: 56px;
    min-width: 120px;
    padding: 0;
    border-radius: 4px;
    margin: 24px 24px 0 0;
  }
}
</style>
