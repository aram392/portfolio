<template>
  <v-app>
    <v-main class="apps">
      <HelloWorld />
    </v-main>
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
.apps {
  background-color: black;
  background-image: url("assets/drawing-4.svg?css");
  background-position: right;
  background-size: 75%;
  background-position-y: top;
}
</style>
