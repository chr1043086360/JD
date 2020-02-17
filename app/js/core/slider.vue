<template lang="html">
  <section :class="cname">
    <swiper :options="options" :not-next-tick="options.notNextTick">
      <swiper-slide v-for="item in items" :key="item.href">
        <router-link :to="{ name: item.href }">
          <img :src="item.src" alt="" />
        </router-link>
      </swiper-slide>
      <div
        class="swiper-pagination"
        v-if="options.pagination"
        slot="pagination"
      />
      <!-- 左右指向 -->
      <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
      <!-- <div class="swiper-button-next" slot="button-next"></div> -->
      <!-- 下面的小点点 -->
      <div class="swiper-scrollbar" slot="scrollbar"></div>
    </swiper>
  </section>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  components: {
    swiper,
    swiperSlide
  },
  props: {
    cname: {
      type: String,
      default: ""
    },
    options: {
      type: Object,
      default() {
        return {
          autoplay: true,
          loop: true,
          pagination: {
            el: ".swiper-pagination"
          },
          notNextTick: false,
          height: window.innerHeight,
          setWrapperSize: true,
          autoHeight: true,
          // slidesPerView: 4,
          // spaceBetween: 20
        };
      }
    },
    items: {
      type: Array,
      default() {
        return [
          {
            href: "",
            src: ""
          }
        ];
      }
    }
  }
};
</script>

<style lang="css">
@import "~swiper/dist/css/swiper.css";
</style>
