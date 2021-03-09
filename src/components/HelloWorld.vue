<template>
  <div class="font">
    <v-container fluid>
      <v-row>
        <v-col class="introContainer backgroundImage">
          <div
            class="intro animate__animated animate__fadeOutUp animate__delay-5s"
            v-show="showIntro"
            :height="height"
          >
            <div>
              <v-row
                class="animate__animated animate__fadeOutUp animate__delay-5s "
              >
                <v-col>
                  <p class="hello">Hello</p>
                </v-col>
                <v-col>
                  <p
                    class="emoji animate__animated animate__wobble animate__delay-0.5s"
                  >
                    👋
                  </p>
                </v-col>
              </v-row>
            </div>
            <p
              class="mainIntro animate__animated animate__fadeIn animate__delay-0.75s"
            >
              My name is Aram Balayan
            </p>
            <p
              class="secondaryIntro animate__animated animate__fadeIn animate__delay-2s"
            >
              and I like to code.
            </p>
          </div>
          <div class="intro" v-show="!showIntro">
            <p
              class="mainIntro animate__animated animate__fadeInDown animate__delay-0.5s"
            >
              Aram Balayan
            </p>
            <p
              class="secondaryIntro animate__animated animate__fadeInDown animate__delay-0.5s"
            >
              Software Engineer
            </p>
          </div>
        </v-col>
        <v-col>
          <div class="contact intro">
            <p>
              <a
                class="contact font"
                id="myEmail"
                href="mailto:arambalayan1@gmail.com"
                value="arambalayan1@gmail.com"
                >arambalayan1@gmail.com
              </a>
              <v-btn
                @click="copyToClipboard('arambalayan1@gmail.com')"
                color="black"
                elevation="2"
              >
                <span class="font">Copy to clipboard</span>
              </v-btn>
            </p>
            <p>
              GitHub:
              <a class="contact font" href="https://www.github.com/aram392"
                >aram392</a
              >
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid>
      <v-row>
        <v-col>
          <v-row class="intro mainIntro"><p>Projects</p></v-row>

          <v-row class="project font" justify="center">
            <v-col justify-center>
              <v-card outlined color="#3949ab" shaped>
                <v-row class="font">
                  <v-col>
                    <p class="projectDescription" v-show="!hoverNotify">
                      Technologies used
                    </p>
                    <p
                      class="projectDescription animate__animated animate__shakeY animate__slower"
                      v-show="hoverNotify"
                    >
                      👇 Hover Over Me 👇
                    </p>
                    <ul class="iconContainer">
                      <il v-for="icon in project1" :key="icon">
                        <v-tooltip
                          bottom
                          color="pink"
                          offset-overflow="true"
                          max-width="400px"
                          size="50px"
                          nudge-bottom="30"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <span class="hvr-pulse" v-bind="attrs" v-on="on">
                              <img
                                class="tech-icon"
                                v-bind:src="
                                  require('@/assets/project1/' + icon.filename)
                                "
                            /></span>
                          </template>
                          <span>{{ icon.label }}</span>
                        </v-tooltip>
                      </il>
                    </ul>
                  </v-col>
                  <v-col>
                    <p class="projectDescription">PlaceHolder Title</p>
                    <p>Project description here</p>
                    <p>blah blah blah</p>
                  </v-col>
                  <v-col>
                    <p class="projectDescription">Showcase</p>
                    <p>Project description here</p>
                    <p>blah blah blah</p></v-col
                  >
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <div class="intro mainIntro"><p>Cool Things</p></div>

          <v-card>hello</v-card>
          <v-card>hello</v-card>
          <v-card>hello</v-card>
          <v-card>hello</v-card>
          <v-card>hello</v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  components: {},
  methods: {
    copyToClipboard(text) {
      var dummy = document.createElement("textarea");
      // to avoid breaking orgain page when copying more words
      // cant copy when adding below this code
      // dummy.style.display = 'none'
      document.body.appendChild(dummy);
      //Be careful if you use texarea. setAttribute('value', value), which works with "input" does not work with "textarea". – Eduard
      dummy.value = text;
      dummy.select();
      document.execCommand("copy");
      document.body.removeChild(dummy);
    },
  },
  computed: {
    height() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 220;
        case "sm":
          return 400;
        case "md":
          return 500;
        case "lg":
          return 600;
        case "xl":
          return 800;
      }
    },
  },
  data() {
    return {
      showIntro: true,
      hoverNotify: false,
      project1: [
        {
          filename: "go.png",
          label:
            "Golang was used for creating RESTful services. This includes all features relating to login, account creation, password recovery and site content.",
        },
        {
          filename: "vue.png",
          label:
            "Vue.js was chosen since I am firmiliar with this framework. It allowed me to spend more time building backend services.",
        },
        {
          filename: "docker.png",
          label:
            "Docker was used for containerization of microservices. It allows services to run decoupled and services can be created independently.",
        },
        {
          filename: "postgres.png",
          label:
            "Postgres was used since it is a great open source database management tool.",
        },
        {
          filename: "python.svg",
          label: "Python",
        },
      ],
      project2: [
        {
          filename: "go.png",
          label:
            "Golang was used for backend services as it has a robust support for creating RESTful services and building out large applications with ease.",
        },
        { filename: "vue.png", label: "Vue.js" },
        {
          filename: "docker.png",
          label:
            "Docker was used for containerization of microservices. It allows services to run decoupled and services can be created independently.",
        },
        {
          filename: "postgres.png",
          label:
            "Postgres was used since it is a great open source database management tool.",
        },
        {
          filename: "nuclino.png",
          label:
            "Nuclino was used to organize features of services and provide documentation for endpoints.",
        },
      ],
    };
  },
  created() {
    setTimeout(() => (this.showIntro = false), 6000);
    setTimeout(() => (this.hoverNotify = true), 6000);
    setTimeout(() => (this.hoverNotify = false), 12000);
  },
};
</script>

<style scoped>
.tech-icon {
  max-height: 5rem;
  max-width: 5rem;
}
.blob {
  position: absolute;
  height: 100vh;
  min-height: 400px;
  top: 0;
  right: 0;
}

.intro {
  margin: 2rem;
  text-align: center;
}
.projectDescription {
  margin: 2rem;
  font-size: 150%;
  text-align: center;
}

.v-tooltip__content {
  font-size: 150% !important;
  opacity: 1 !important;
  font-family: "Nunito", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  color: beige;
  text-shadow: 1px 1px 5px black;
}

.contact {
  text-align: right;
  text-decoration: none;
  font-size: 150%;
}

.introContainer {
  height: 16rem;
}
.content {
  margin: 1rem;
}

.iconContainer {
  display: flex;
  justify-content: center;
}

.mainIntro {
  font-size: 250%;
}
.secondaryIntro {
  font-size: 250%;
}
.hello {
  font-size: 250%;
  text-align: right;
}
.emoji {
  font-size: 300%;
  width: 2rem;
}

.project {
  height: 20rem;
  margin-top: 2rem;
}

.container {
}

@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap");
.font {
  font-family: "Nunito", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  color: beige;
  text-shadow: 1px 1px 5px black;
}
</style>
