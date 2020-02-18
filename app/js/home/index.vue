<template lang="html">
  <div>
    <Heador></Heador>
    <homeSlider></homeSlider>
    <novice></novice>
    <borrow></borrow>
    <money></money>
    <product></product>
  </div>
</template>

<script>
import Heador from "../public/header";
import homeSlider from "./homeSlider";
import novice from "./novice";
import borrow from "./borrow";
import money from "./money";
import product from "./product";
export default {
  components: {
    Heador,
    homeSlider,
    novice,
    borrow,
    money,
    product
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
