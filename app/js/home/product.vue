<template>
  <Panel title="新品推荐" :class="$style.panel">
    <section :class="$style.content">
      <router-link :to="{ name: 'JDIndex' }" :class="$style.arrow"
        >更多尖货 ></router-link
      >
      <Slider :options="options" :items="items" cname="product-slider"></Slider>
    </section>
  </Panel>
</template>

<script>
import Panel from "../core/panel";
import Slider from "../core/slider";
export default {
  components: {
    Panel,
    Slider
  },
  data() {
    return {
      items: [
        {
          href: "home",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t13963/267/2355123229/48850/254f797a/5a3c59aeN9cb550f6.jpg?width=335&height=421"
        },
        {
          href: "home",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t13021/306/1996997425/21953/bda69db3/5a2f6a17N9da099b1.jpg?width=335&height=421"
        },
        {
          href: "home",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t14125/310/1997192193/46667/3c910f8b/5a2f6a36Nad95b650.jpg?width=335&height=421"
        },
        {
          href: "home",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t15784/188/381232069/39444/8878571d/5a2f6a4aNbd5a574c.jpg?width=335&height=421"
        }
      ],
      options: {
        slidesPerView: 2.5,
        spaceBetween: 30,
        freeMode: true
      }
    };
  }
};
</script>

<style lang="scss">
.product-slider {
  .swiper-container {
    box-sizing: border-box;
    // padding: 0;
    .swiper-slide {
      a {
        display: inline-block;
        width: 100%;
        img {
          width: 100%;
          display: block;
          height: 314px;
          border: 1px solid #fafafa;
        }
      }
    }
  }
}
</style>

<style lang="scss" module>
@import "../../css/element";
.panel {
  @include panel;
  > h4 {
    border-bottom: 1px solid #ddd;
  }
  .content {
    padding-bottom: 40px;
    position: relative;
    a {
      text-decoration: none;
    }
    & > .arrow {
      position: absolute;
      font-size: 24px;
      color: #999;
      right: 20px;
      top: -70px;
    }
  }
}
</style>
