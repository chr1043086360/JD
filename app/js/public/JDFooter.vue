<template>
  <Panel title="公司信息" :class="$style.panel">
    <ul :class="$style.content">
      <li :class="$style.li1">
        <img
          src="//img12.360buyimg.com/jrpmobile/jfs/t2842/350/3035567089/14791/5f6ff93d/577cf395N31e76288.png?width=1125&height=252"
          alt
        />
      </li>
      <li :class="$style.li2">
        <div>
          <img
            src="//img12.360buyimg.com/jrpmobile/jfs/t2971/333/1297567079/898/f2d2e00d/577dc28dNe5138337.png?width=108&height=108"
            alt
          />
          <p>客户端</p>
        </div>
        <div>
          <img
            src="//img12.360buyimg.com/jrpmobile/jfs/t2824/256/2966087355/831/188bfa25/577cf3dcN18aadbf2.png?width=108&height=108"
            alt
          />
          <p>触屏版</p>
        </div>
        <div>
          <img
            src="//img12.360buyimg.com/jrpmobile/jfs/t2920/282/1283157010/1040/23f1430b/577cf3e5N53f740b8.png?width=108&height=108"
            alt
          />
          <p>电脑版</p>
        </div>
      </li>
      <li :class="$style.li3">Copyright © 2004-2020 京东JD.com 版权所有</li>
      <li :class="$style.li3">投资有风险，购买需谨慎</li>
      <li :class="$style.li3">京东金融平台服务协议</li>
      <li :class="$style.li3">京东金融隐私政策</li>
    </ul>
  </Panel>
</template>

<script>
import Panel from "../core/panel";
export default {
  name: "JDFooter",
  components: {
    Panel
  }
};
</script>

<style lang="scss" module>
@import "../../css/element";
.panel {
  @include panel;
  // 关闭显示公司信息
  & > h4 {
    display: none;
  }
  .content {
    .li1 {
      width: 100%;
      > img {
        width: 100%;
        height: 143px;
      }
    }
    .li2 {
      @include list(row);
      width: 100%;
      text-align: center;
      margin-bottom: 40px;
      div {
        width: 33.3333%;
        margin-top: 20px;
        p {
          font-size: 26px;
          text-align: center;
          display: block;
          color: #999;
          margin-top: 12px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        img {
          width: 80px;
          height: 80px;
        }
      }
    }
    .li3 {
      font-size: 26px;
      text-align: center;
      display: block;
      color: #999;
      // margin-top: 25px;
      padding: 30px 0;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      border: 3px solid #f3f3f3;
    }
  }
}
</style>
