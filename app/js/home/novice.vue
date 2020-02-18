<template>
  <Panel title="新手特权" :class="$style.panel">
    <section :class="$style.content">
      <div :class="$style.item">
        <h4>
          下载APP
          <span :class="$style.cred">送888元礼包</span>
        </h4>
        <p :class="$style.gray">新手专享</p>
        <img
          src="//img12.360buyimg.com/jrpmobile/jfs/t10384/155/1759179594/9776/185bd062/59e5f0ebNec4cf494.png?width=100&height=100"
          alt
        />
      </div>
      <div :class="$style.item">
        <ul>
          <li>
            <img
              src="//img12.360buyimg.com/jrpmobile/jfs/t4639/162/1782623297/60754/98ea03b4/58e60952N7fdb2b85.png?width=200&height=200"
              alt
            />
            <h4 :class="$style.cred">领取128元礼包</h4>
            <p :class="$style.gray">立即开通</p>
          </li>
          <li>
            <img
              src="//img12.360buyimg.com/jrpmobile/jfs/t4804/179/657713323/5908/66dce262/58e6095fNd3dc3f39.png?width=100&height=100"
              alt
            />
            <h4 :class="$style.cred">
              打白条
              <span :class="$style.red">享免息</span>
            </h4>
            <p :class="$style.gray">立即开通享豪礼</p>
          </li>
        </ul>
      </div>
    </section>
  </Panel>
</template>

<script>
import Panel from "../core/panel";
export default {
  components: {
    Panel
  }
};
</script>

<style lang="scss" module>
@import "../../css/element";
.panel {
  @include panel;
  > h4 {
    border-bottom: 1px solid #ddd;
  }
  .content {
    @include list(row);
    .item {
      width: 50%;
      box-sizing: border-box; // 不受padding影响
      &:first-child {
        padding-top: 32px;
        text-align: center;
        img {
          width: 132px;
          height: 135px;
          margin: 10px auto;
        }
      }
      &:nth-child(2) {
        text-align: center;
        ul {
          width: 100%;
          p {
            text-align: left;
            margin-top: 3px;
          }
          li {
            height: 144px;
            width: 100%;
            padding: 32px 28px;
            box-sizing: border-box;
            h4 {
              white-space: nowrap;
              text-overflow: ellipsis;
              text-align: left;
              overflow: hidden;
            }
            img {
              float: right;
              height: 80px;
            }
          }
        }
      }
    }
  }
}
h4 {
  // color: red;
  font-size: 26px;
  line-height: 40px;
}
.gray {
  font-size: 24px;
  color: #999;
  margin-top: 3px;
}
.cred {
  color: red;
}
</style>
