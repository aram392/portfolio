<template>
  <div class="font">
    <v-container fluid>
      <v-row class="ma-8 mt-16">
        <v-col cols="12" md="5">
          <div
            class="mainIntro animate__animated animate__fadeInDown animate__delay-0.5s"
          >
            Aram Balayan
          </div>
          <div
            class="secondaryIntro animate__animated animate__fadeInDown animate__delay-0.5s mb-4"
          >
            Software Engineer
          </div>
          <div class="aboutme">
            Im from Los Angeles and enjoy developing software applications from
            backend to frontend. I am a great addition to your engineering team
            just let me get my coffee first ☕.
          </div>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid>
      <v-row class="mt-16">
        <v-col>
          <div class="intro mainIntro"><p>Projects</p></div>
        </v-col>
      </v-row>

      <v-row class="">
        <v-col cols="12" md="6" class="">
          <v-row class="hidden-sm-and-down projectBackground" justify="center">
            <v-col cols="8" md="8">
              <carousel-3d
                :autoplay="true"
                :height="500"
                :width="250"
                :autoplayTimeout="4000"
                :autoplayHoverPause="true"
                :perspective="30"
                :inverseScaling="400"
              >
                <slide :index="0">
                  <v-img src="../assets/meso/iphonex15.png"></v-img>
                </slide>
                <slide :index="4">
                  <v-img src="../assets/meso/iphonex11.png"></v-img>
                </slide>
                <slide :index="1">
                  <v-img src="../assets/meso/iphonex12.png"></v-img>
                </slide>
                <slide :index="2">
                  <v-img src="../assets/meso/iphonex13.png"></v-img>
                </slide>
                <slide :index="3">
                  <v-img src="../assets/meso/iphonex14.png"></v-img>
                </slide>
              </carousel-3d>
            </v-col>
            <v-col cols="4" md="4">
              <div class="projectTitle">MesoHealth</div>
              <div class="projectSubTitle mb-16">
                MesoHealth is a hiring/booking web service for nurses and clinic
                administrators.
              </div>
              <div justify-center>
                <v-dialog transition="dialog-bottom-transition" max-width="750">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn color="#fff" v-bind="attrs" v-on="on"
                      >More Info</v-btn
                    >
                  </template>
                  <template v-slot:default="dialog">
                    <v-card>
                      <v-toolbar color="#fff" class="font"
                        >MesoHealth</v-toolbar
                      >
                      <v-card-text class="font">
                        <div class="pa-6 font">
                          Decoupled services with Docker using domain driven
                          design. This allows minimal restructuring for new
                          features. Developed Golang backend for nurse
                          credential verification. Consumes requests and
                          retrieves data fromgovernment agency to parse data
                          into Database models.
                        </div>
                        <div class="pa-6 font">Technologies used</div>
                        <div>
                          <ul class="iconContainer font">
                            <il v-for="icon in project1" :key="icon">
                              <v-tooltip
                                bottom
                                color="#fff"
                                offset-overflow="true"
                                max-width="400px"
                                size="50px"
                                nudge-bottom="30"
                              >
                                <template v-slot:activator="{ on, attrs }">
                                  <span
                                    class="hvr-pulse"
                                    v-bind="attrs"
                                    v-on="on"
                                  >
                                    <img
                                      class="tech-icon"
                                      v-bind:src="
                                        require('@/assets/project1/' +
                                          icon.filename)
                                      "
                                  /></span>
                                </template>
                                <span>{{ icon.label }}</span>
                              </v-tooltip>
                            </il>
                          </ul>
                        </div>
                      </v-card-text>
                      <v-card-actions class="justify-end">
                        <v-btn text @click="dialog.value = false">Close</v-btn>
                      </v-card-actions>
                    </v-card>
                  </template>
                </v-dialog>
              </div>
            </v-col>
          </v-row>
          <v-row class="hidden-md-and-up projectBackground">
            <v-col cols="6" md="6">
              <carousel-3d
                :autoplay="true"
                :height="250"
                :width="110"
                :autoplayTimeout="4000"
                :autoplayHoverPause="true"
              >
                <slide :index="0">
                  <v-img src="../assets/meso/iphonex15.png"></v-img>
                </slide>
                <slide :index="4">
                  <v-img src="../assets/meso/iphonex11.png"></v-img>
                </slide>
                <slide :index="1">
                  <v-img src="../assets/meso/iphonex12.png"></v-img>
                </slide>
                <slide :index="2">
                  <v-img src="../assets/meso/iphonex13.png"></v-img>
                </slide>
                <slide :index="3">
                  <v-img src="../assets/meso/iphonex14.png"></v-img>
                </slide>
              </carousel-3d>
            </v-col>
            <v-col cols="6" md="6">
              <div class="projectSubTitle">MesoHealth</div>
              <div class="projectSubTitleMobile mb-16">MesoHealth is a</div>
              <div justify-center>
                <v-dialog
                  transition="dialog-bottom-transition"
                  max-width="1500"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn color="#fff" v-bind="attrs" v-on="on"
                      >More Info</v-btn
                    >
                  </template>
                  <template v-slot:default="dialog">
                    <v-card>
                      <v-toolbar color="#fff">MesoHealth</v-toolbar>
                      <v-card-text>
                        <div class="pa-6">Hello world!</div>
                        <div class="pa-6">Technologies used</div>
                        <div>
                          <ul class="iconContainer font">
                            <il v-for="icon in project1" :key="icon">
                              <v-tooltip
                                bottom
                                color="#fff"
                                offset-overflow="true"
                                max-width="400px"
                                size="50px"
                                nudge-bottom="30"
                              >
                                <template v-slot:activator="{ on, attrs }">
                                  <span
                                    class="hvr-pulse"
                                    v-bind="attrs"
                                    v-on="on"
                                  >
                                    <img
                                      class="tech-icon"
                                      v-bind:src="
                                        require('@/assets/project1/' +
                                          icon.filename)
                                      "
                                  /></span>
                                </template>
                                <span>{{ icon.label }}</span>
                              </v-tooltip>
                            </il>
                          </ul>
                        </div>
                      </v-card-text>
                      <v-card-actions class="justify-end">
                        <v-btn text @click="dialog.value = false">Close</v-btn>
                      </v-card-actions>
                    </v-card>
                  </template>
                </v-dialog>
              </div>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" md="6" class="projectBackground">
          <v-row class="hidden-sm-and-down" justify="center">
            <v-col cols="5" md="5">
              <carousel-3d
                :autoplay="true"
                :height="500"
                :width="250"
                :autoplayTimeout="5000"
                :display="1"
                :inverseScaling="1"
                :autoplayHoverPause="true"
              >
                <slide :index="0">
                  <v-img src="../assets/csun/iphonexcsun1.png"></v-img>
                </slide>
                <slide :index="1">
                  <v-img src="../assets/csun/iphonexcsun2.png"></v-img>
                </slide>
              </carousel-3d>
            </v-col>
            <v-col cols="7" md="7">
              <div class="projectTitle">CSUN Class Search</div>
              <div class="projectSubTitle mb-16">
                Using new technologies to redesign search by making it more
                simple.
              </div>
              <div justify-center>
                <v-dialog
                  transition="dialog-bottom-transition"
                  max-width="1500"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn color="#fff" v-bind="attrs" v-on="on"
                      >More Info</v-btn
                    >
                  </template>
                  <template v-slot:default="dialog">
                    <v-card>
                      <v-toolbar color="#fff">MesoHealth</v-toolbar>
                      <v-card-text>
                        <div class="pa-6"></div>
                        <div class="pa-6">Technologies used</div>
                        <div>
                          <ul class="iconContainer font">
                            <il v-for="icon in project3" :key="icon">
                              <v-tooltip
                                bottom
                                color="#fff"
                                offset-overflow="true"
                                max-width="400px"
                                size="50px"
                                nudge-bottom="30"
                              >
                                <template v-slot:activator="{ on, attrs }">
                                  <span
                                    class="hvr-pulse"
                                    v-bind="attrs"
                                    v-on="on"
                                  >
                                    <img
                                      class="tech-icon"
                                      v-bind:src="
                                        require('@/assets/project1/' +
                                          icon.filename)
                                      "
                                  /></span>
                                </template>
                                <span>{{ icon.label }}</span>
                              </v-tooltip>
                            </il>
                          </ul>
                        </div>
                      </v-card-text>
                      <v-card-actions class="justify-end">
                        <v-btn text @click="dialog.value = false">Close</v-btn>
                      </v-card-actions>
                    </v-card>
                  </template>
                </v-dialog>
              </div>
            </v-col>
          </v-row>
          <v-row class="hidden-md-and-up" justify="center">
            <v-col cols="5" md="5">
              <carousel-3d
                :autoplay="true"
                :height="500"
                :width="250"
                :autoplayTimeout="5000"
                :display="1"
                :inverseScaling="1"
                :autoplayHoverPause="true"
              >
                <slide :index="0">
                  <v-img src="../assets/csun/iphonexcsun1.png"></v-img>
                </slide>
                <slide :index="1">
                  <v-img src="../assets/csun/iphonexcsun2.png"></v-img>
                </slide>
              </carousel-3d>
            </v-col>
            <v-col cols="7" md="7">
              <div class="projectSubTitle">CSUN Class Search</div>
              <div class="projectSubTitleMobile mb-16">MesoHealth is a</div>
              <div justify-center>
                <v-dialog
                  transition="dialog-bottom-transition"
                  max-width="1500"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn color="#fff" v-bind="attrs" v-on="on"
                      >More Info</v-btn
                    >
                  </template>
                  <template v-slot:default="dialog">
                    <v-card>
                      <v-toolbar color="#fff">MesoHealth</v-toolbar>
                      <v-card-text>
                        <div class="pa-6">Hello world!</div>
                        <div class="pa-6">Technologies used</div>
                        <div>
                          <ul class="iconContainer font">
                            <il v-for="icon in project1" :key="icon">
                              <v-tooltip
                                bottom
                                color="#fff"
                                offset-overflow="true"
                                max-width="400px"
                                size="50px"
                                nudge-bottom="30"
                              >
                                <template v-slot:activator="{ on, attrs }">
                                  <span
                                    class="hvr-pulse"
                                    v-bind="attrs"
                                    v-on="on"
                                  >
                                    <img
                                      class="tech-icon"
                                      v-bind:src="
                                        require('@/assets/project1/' +
                                          icon.filename)
                                      "
                                  /></span>
                                </template>
                                <span>{{ icon.label }}</span>
                              </v-tooltip>
                            </il>
                          </ul>
                        </div>
                      </v-card-text>
                      <v-card-actions class="justify-end">
                        <v-btn text @click="dialog.value = false">Close</v-btn>
                      </v-card-actions>
                    </v-card>
                  </template>
                </v-dialog>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-row class="" justify="center">
        <v-col cols="12" md="6" class="">
          <v-row
            justify="center"
            class="hidden-sm-and-down projectBackground mt-10"
          >
            <v-col cols="8" md="12">
              <carousel-3d
                :autoplay="true"
                :height="500"
                :width="250"
                :autoplayTimeout="4000"
                :autoplayHoverPause="true"
                :perspective="30"
                :inverseScaling="400"
              >
                <slide :index="0">
                  <v-img src="../assets/meso/iphonex15.png"></v-img>
                </slide>
                <slide :index="4">
                  <v-img src="../assets/meso/iphonex11.png"></v-img>
                </slide>
                <slide :index="1">
                  <v-img src="../assets/meso/iphonex12.png"></v-img>
                </slide>
                <slide :index="2">
                  <v-img src="../assets/meso/iphonex13.png"></v-img>
                </slide>
                <slide :index="3">
                  <v-img src="../assets/meso/iphonex14.png"></v-img>
                </slide>
              </carousel-3d>
            </v-col>
            <v-col cols="4" md="4">
              <div class="projectTitle">LeaseMyRide</div>
              <div class="projectSubTitle mb-16">LeaseMyRide is a</div>
              <div justify-center>
                <v-dialog
                  transition="dialog-bottom-transition"
                  max-width="1500"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn color="#fff" v-bind="attrs" v-on="on"
                      >More Info</v-btn
                    >
                  </template>
                  <template v-slot:default="dialog">
                    <v-card>
                      <v-toolbar color="#fff">LeaseMyRide</v-toolbar>
                      <v-card-text>
                        <div class="pa-6">LeaseMyRide is a</div>
                        <div class="pa-6">Technologies used</div>
                        <div>
                          <ul class="iconContainer font">
                            <il v-for="icon in project1" :key="icon">
                              <v-tooltip
                                bottom
                                color="#fff"
                                offset-overflow="true"
                                max-width="400px"
                                size="50px"
                                nudge-bottom="30"
                              >
                                <template v-slot:activator="{ on, attrs }">
                                  <span
                                    class="hvr-pulse"
                                    v-bind="attrs"
                                    v-on="on"
                                  >
                                    <img
                                      class="tech-icon"
                                      v-bind:src="
                                        require('@/assets/project1/' +
                                          icon.filename)
                                      "
                                  /></span>
                                </template>
                                <span>{{ icon.label }}</span>
                              </v-tooltip>
                            </il>
                          </ul>
                        </div>
                      </v-card-text>
                      <v-card-actions class="justify-end">
                        <v-btn text @click="dialog.value = false">Close</v-btn>
                      </v-card-actions>
                    </v-card>
                  </template>
                </v-dialog>
              </div>
            </v-col>
          </v-row>
          <v-row justify="center" class="hidden-md-and-up projectBackground">
            <v-col cols="6" md="6"> </v-col>
            <v-col cols="4" md="4">
              <div class="projectSubTitle">LeaseMyRide</div>
              <div class="mb-16" style="font-size: .75rem;">
                LeaseMyRide is a test
              </div>
              <div justify-center>
                <v-dialog
                  transition="dialog-bottom-transition"
                  max-width="1500"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn color="#fff" v-bind="attrs" v-on="on"
                      >More Info</v-btn
                    >
                  </template>
                  <template v-slot:default="dialog">
                    <v-card>
                      <v-toolbar color="#fff">LeaseMyRide</v-toolbar>
                      <v-card-text>
                        <div class="pa-6">LeaseMyRide is a</div>
                        <div class="pa-6">Technologies used</div>
                        <div>
                          <ul class="iconContainer font">
                            <il v-for="icon in project1" :key="icon">
                              <v-tooltip
                                bottom
                                color="#fff"
                                offset-overflow="true"
                                max-width="400px"
                                size="50px"
                                nudge-bottom="30"
                              >
                                <template v-slot:activator="{ on, attrs }">
                                  <span
                                    class="hvr-pulse"
                                    v-bind="attrs"
                                    v-on="on"
                                  >
                                    <img
                                      class="tech-icon"
                                      v-bind:src="
                                        require('@/assets/project1/' +
                                          icon.filename)
                                      "
                                  /></span>
                                </template>
                                <span>{{ icon.label }}</span>
                              </v-tooltip>
                            </il>
                          </ul>
                        </div>
                      </v-card-text>
                      <v-card-actions class="justify-end">
                        <v-btn text @click="dialog.value = false">Close</v-btn>
                      </v-card-actions>
                    </v-card>
                  </template>
                </v-dialog>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row class="mt-16">
        <v-col>
          <div class="intro mainIntro"><p>About Me</p></div>
        </v-col>
      </v-row>
      <v-row class="mt-16">
        <v-col>
          <div class="intro mainIntro"><p>Download my resume</p></div>
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
      project3: [
        { filename: "vue.png", label: "test" },
        {
          filename: "python.svg",
          label: "Used to gather class names from API and convert to JSON.",
        },
      ],
    };
  },
  created() {
    setTimeout(() => (this.showIntro = false), 5000);
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
  color: black;
}

.contact {
  text-align: right;
  text-decoration: none;
  font-size: 150%;
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
.aboutme {
  font-size: 110%;
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
}
.projectTitle {
  font-size: 3rem;
}
.projectSubTitleMobile {
  font-size: 0.75rem;
}
.projectSubTitle {
  font-size: 1rem;
}
.projectBackground {
  background-color: lightgray;
}

@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap");
.font {
  font-family: "Nunito", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  color: black;
}

.carousel-3d-slide {
  background-color: transparent;
  border-color: transparent;
}
</style>
