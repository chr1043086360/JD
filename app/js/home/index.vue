<template lang="html">
  <div>
    <Heador></Heador>
    <homeSlider></homeSlider>
    <!-- <h1>Home</h1> -->

  </div>
</template>

<script>
import Heador from "../public/header";
import homeSlider from "./homeSlider";
export default {
  components: {
    Heador,
    homeSlider
  }
};
</script>

<style lang="scss" module>
@import "../../css/reset.scss";
.home {
  color: red;
  font-size: 80px;
}
</style>
