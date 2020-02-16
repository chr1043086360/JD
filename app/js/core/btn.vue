<template lang="html">
    <!-- btnClass:默认参数, cname可以覆盖默认参数 -->
  <div :class="[btnClass, cname]">
      <slot/>
  </div>
</template>
<script>
export default {
  props: {
    cname: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      btnClass: "btn"
    };
  }
};
</script>
<style lang="scss">
@import "../../css/element";
.btn {
  @include btn;
}
</style>