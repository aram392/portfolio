<template>
  <v-app id="apps" class="appBackground">
    <HelloWorld />
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    HelloWorld,
  },

  data: () => ({
    color: "#000000",
  }),
};
</script>

<style>
#apps {
  background-color: black;
  background-image: url("~@/assets/drawing-1.svg");
  background-position: right;
  background-size: 100%;
  background-position-y: top;
}
</style>
