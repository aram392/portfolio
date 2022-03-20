<template>
  <v-app>
    <v-main class="apps">
      <v-app-bar dark absolute class="font" color="#28262C "
        >Aram Balayan
        <video autoplay loop muted class="coffeeVideo">
              <source src="./assets/video.mp4">
        </video>
        <v-spacer></v-spacer>
        <a
          class="contact font ma-6 hidden-sm-and-down"
          style="text-decoration: none; color:inherit;"
          id="myEmail"
          href="mailto:arambalayan1@gmail.com"
          value="arambalayan1@gmail.com"
          >arambalayan1@gmail.com
        </a>
        <v-btn class="ma-6 hidden-sm-and-down" color="black"
          ><a
            style="text-decoration: none;   color:inherit;"
            href="https://www.github.com/aram392"
            >Github</a
          ></v-btn
        >
        <v-btn class="ma-6 hidden-sm-and-down" color="black"
          ><a
            style="text-decoration: none;   color:inherit;"
            href="https://www.linkedin.com/in/aram-balayan-95731b1aa/"
            >LinkedIn</a
          ></v-btn
        >
        <v-dialog transition="dialog-bottom-transition" max-width="500">
          <template v-slot:activator="{ on, attrs }">
            <v-btn class="ma-6  " color="black" v-bind="attrs" v-on="on"
              >Get In Contact</v-btn
            >
          </template>
          <template v-slot:default="dialog">
            <v-card>
              <v-card-text>
                <div class="pa-6">
                  Email is the best way to contact for me.
                  <div class="pt-6">
                    Email:
                    <a href="mailto:arambalayan1@gmail.com"
                      >arambalayan1@gmail.com</a
                    >
                  </div>
                  <div class="pt-2">
                    Phone Number: <a href="tel:+18186675532">818-667-5532</a>
                  </div>
                </div>
              </v-card-text>
              <v-card-actions class="justify-end">
                <v-btn text @click="dialog.value = false">Close</v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </v-app-bar>
      <v-container>
        <HelloWorld />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },
  methods: {
    copyToClipboard(text) {
      const dummy = document.createElement('textarea');
      document.body.appendChild(dummy);
      dummy.value = text;
      dummy.select();
      document.execCommand('copy');
      document.body.removeChild(dummy);
    },
  },

  data: () => ({
    color: '#000000',
  }),
};
</script>

<style>
.apps {
  background-color: #f5e2c8;
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
.font-white {
  font-family: "Nunito", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  color: white;
}
.coffeeVideo{
  width: 3rem;
  border-radius: 50%;
  padding-left: 10px;

}
</style>
