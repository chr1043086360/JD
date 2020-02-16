<template lang="html">
  <div>
    <Heador></Heador>
    <h1>Home</h1>
  </div>
</template>

<script>
import Heador from "../public/header";
export default {
  components: {
    Heador
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
