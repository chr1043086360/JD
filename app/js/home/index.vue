<template lang="html">
  <div>
    <Heador></Heador>
    <homeSlider></homeSlider>
    <novice></novice>
  </div>
</template>

<script>
import Heador from "../public/header";
import homeSlider from "./homeSlider";
import novice from './novice';
export default {
  components: {
    Heador,
    homeSlider,
    novice
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
