<template lang="html">
  <div>
    <!-- <Heador></Heador> -->
    <homeSlider></homeSlider>
    <novice></novice>
    <borrow></borrow>
    <money></money>
    <product></product>
    <life></life>
    <Footer></Footer>
    <!-- <Navbar class="navbar"></Navbar> -->
  </div>
</template>

<script>
// import Heador from "../public/header";
import Footer from "../public/JDFooter";
// import Navbar from "../public/navbar";
import homeSlider from "./homeSlider";
import novice from "./novice";
import borrow from "./borrow";
import money from "./money";
import product from "./product";
import life from "./life";
export default {
  name: "JDIndex",
  components: {
    // Heador,
    homeSlider,
    novice,
    borrow,
    money,
    product,
    life,
    Footer
    // Navbar
  }
};
</script>

<style lang="scss" module>
@import "../../css/reset.scss";
.home {
  color: red;
  font-size: 80px;
}
// .navbar {
//   position: fixed;
//   bottom: 0;
// }
</style>
