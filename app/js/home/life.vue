<template>
  <Panel title="生活服务" :class="$style.panel">
    <section :class="$style.list">
      <div :class="$style.item" v-for="item in items" :key="item.title">
        <router-link :to="{ name: item.href }">
          <img :src="item.img" :alt="item.title" />
          <h4>{{ item.title }}</h4>
        </router-link>
      </div>
    </section>
  </Panel>
</template>

<script>
import Panel from "../core/panel";
export default {
  components: {
    Panel
  },
  data() {
    return {
      items: [
        {
          href: "home",
          img:
            "//img12.360buyimg.com/jrpmobile/jfs/t4375/104/1184122472/3976/89741da4/58be8a6eNf10193d0.png?width=135&height=135",
          title: "惠加油"
        },
        {
          href: "home",
          img:
            "//img12.360buyimg.com/jrpmobile/jfs/t4747/185/1901740991/5892/1383fb93/58f57851N17ee6993.jpg?width=132&height=132",
          title: "小白信用"
        },
        {
          href: "home",
          img:
            "//img12.360buyimg.com/jrpmobile/jfs/t3241/234/8044685271/3713/7b29f77f/58be89c8Nb9d41295.png?width=135&height=135",
          title: "信用卡还款"
        },
        {
          href: "home",
          img:
            "//img12.360buyimg.com/jrpmobile/jfs/t3172/259/7993557249/4351/fd082707/58be8a81Nd7716a06.png?width=135&height=135",
          title: "卡转让"
        },
        {
          href: "home",
          img:
            "//img12.360buyimg.com/jrpmobile/jfs/t3085/320/8107659086/4344/cdbba2dd/58be8acfNdadcaf00.png?width=135&height=135",
          title: "定期还款"
        }
      ]
    };
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
  .list {
    @include list(row);
    background: #fff;
    padding-top: 20px;
    padding-bottom: 20px;
    justify-content: space-around;
    box-sizing: border-box;
    a {
      text-decoration: none;
    }
    .item {
      text-align: center;
      img {
        display: inline-block;
        width: 80px;
        height: 80px;
      }
      h4 {
        font-size: 24px;
        margin-top: 12px;
        color: #666;
        font-weight: 600;
      }
    }
  }
}
</style>
