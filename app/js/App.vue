<template>
  <div id="app">
    <JDHeader></JDHeader>
    <router-view />
    <JDNavbar></JDNavbar>
  </div>
</template>

<script>
import JDHeader from "./public/JDHeader";
import JDNavbar from "./public/JDNavbar";
export default {
  name: "app",
  components: {
    JDHeader,
    JDNavbar
  }
};
</script>
