<template>
  <Panel title="极速借贷" :class="$style.panel">
    <section :class="$style.content">
      <router-link :to="{ name: 'JDIndex' }">
        <img
          src="//img12.360buyimg.com/jrpmobile/jfs/t12721/42/2497849749/26333/ec584be4/5a421756N2416c88f.png?width=750&height=280"
          alt
        />
      </router-link>
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
    text-align: center;
    padding-bottom: 40px;
    img {
      display: block;
      width: 100%;
      height: 220px;
    }
  }
}
</style>
