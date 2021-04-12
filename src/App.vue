<template>
  <v-app>
    <v-main class="apps">
      <v-app-bar 
      absolute
      class="font">Aram Balayan
        <v-spacer></v-spacer>
         <a
                class="contact font"
                id="myEmail"
                href="mailto:arambalayan1@gmail.com"
                value="arambalayan1@gmail.com"
                >arambalayan1@gmail.com
              </a>
              <v-btn class="ma-6">Github</v-btn>
              <v-btn class="ma-6">LinkedIn</v-btn>
              <v-btn 
              class="ml-6"
                @click="copyToClipboard('arambalayan1@gmail.com')"
                elevation="2"
              >
                <span class="font">Get In Contact</span>
              </v-btn>
      </v-app-bar>
      <v-container>
      <HelloWorld />
      </v-container>
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
  background-color: #fff;
  background-position: right;
  background-size: 75%;
  background-position-y: top;
}
.font {
  font-family: "Nunito", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  color: black;
}
</style>
