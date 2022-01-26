<template>
  <div class="font">
    <v-container fluid>
      <v-row class="ma-8 mt-16 mb-4">
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
          <div class="aboutme animate__animated animate__fadeInDown">
            Im from Los Angeles and enjoy developing software applications from
            backend to frontend. I am a great addition to your engineering team
            just let me get my coffee first ☕.
          </div>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid>
      <v-row class="mt-1">
        <v-col>
          <div class="intro mainIntro"><p>Projects</p></div>
        </v-col>
      </v-row>
      <!-- Meso -->
      <v-row class="" justify="center">
        <v-col cols="12" md="8" class="">
          <v-row class="hidden-sm-and-down projectBackground" justify="center">
            <v-col cols="8" md="8">
              <carousel-3d
                :autoplay="true"
                :height="500"
                :width="250"
                :autoplayTimeout="2500"
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
              Click To Cycle
              <v-icon>mdi-cursor-pointer</v-icon>
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
                    <v-btn color="#f5e2c8" v-bind="attrs" v-on="on"
                      >More Info</v-btn
                    >
                  </template>
                  <template v-slot:default="dialog">
                    <v-card>
                      <v-toolbar color="grey" class="font"
                        >MesoHealth</v-toolbar
                      >
                      <v-card-text class="font">
                        <div class="pa-6 font">
                          <ul>
                            MesoHealth seeks to improve the current way the
                            health industry handles per diem workers.
                          </ul>
                          Our software allows a more streamlined way of
                          scheduling on call workers. It can also be a tool used
                          to find jobs in the health industry. The design of the
                          system was made using domain driven design. This
                          allows minimal restructuring for new features.
                        </div>
                        <div class="pa-6 font">
                          Technologies used (Hover over icons)
                        </div>
                        <div>
                          <ul class="iconContainer font">
                            <il v-for="icon in project2" :key="icon">
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
            <v-col cols="7" md="7">
              <carousel-3d
                :autoplay="true"
                :height="275"
                :width="140"
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
              Swipe To Cycle
              <v-icon>mdi-gesture-swipe</v-icon>
            </v-col>
            <v-col cols="5" md="5">
              <div class="projectSubTitle">MesoHealth</div>
              <div class="projectSubTitleMobile mb-8">
                MesoHealth is a hiring/booking web service for nurses and clinic
                administrators.
              </div>
              <div justify-center>
                <v-dialog
                  transition="dialog-bottom-transition"
                  max-width="1500"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn color="#f5e2c8" v-bind="attrs" v-on="on"
                      >More Info</v-btn
                    >
                  </template>
                  <template v-slot:default="dialog">
                    <v-card>
                      <v-toolbar color="grey">MesoHealth</v-toolbar>
                      <v-card-text>
                        <div class="pa-6 font">
                          MesoHealth seeks to improve the current way the health
                          industry handles per diem workers. Our software allows
                          a more streamlined way of sceduling on call workers.
                          It can also be a tool used to find jobs in the health
                          industry. The design of the system was made using
                          domain driven design. This allows minimal
                          restructuring for new features.
                        </div>
                        <div class="pa-6">Technologies used (Click icons)</div>
                        <div>
                          <ul
                            class="iconContainer font"
                            style="
                              display: grid;
                              grid-template-columns: repeat(3, 1fr);
                            "
                          >
                            <il v-for="icon in project2" :key="icon">
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
      <!-- LeaseMy -->
      <v-row class="" justify="center">
        <v-col cols="12" md="5" class="">
          <v-row
            justify="center"
            class="hidden-sm-and-down projectBackground2 mt-10 mb-10"
          >
            <v-col cols="7" md="8">
              <v-img src="../assets/leasemyride/leasemyride11.png"></v-img>
            </v-col>
            <v-col cols="5" md="5">
              <div class="projectTitle">LeaseMyRide</div>
              <div class="projectSubTitle mb-16">
                LeaseMyRide is a lease broker and lead aggregator. (Work In
                Progress)
              </div>
              <div justify-center>
                <v-dialog transition="dialog-bottom-transition" max-width="750">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn color="#f5e2c8" v-bind="attrs" v-on="on"
                      >More Info</v-btn
                    >
                  </template>
                  <template v-slot:default="dialog">
                    <v-card>
                      <v-toolbar color="blue lighten-3"
                        >LeaseMyRide (Work In Progress)</v-toolbar
                      >
                      <v-card-text>
                        <div class="pa-6">
                          LeaseMyRide is a lease broker and lead aggregator. The
                          service provides clients easy access to brokers while
                          increasing leads for brokers. The business model is
                          planned to have a subcription service for brokers to
                          allow for lead generation.
                        </div>
                        <div class="pa-6">
                          Technologies used (Hover over icons)
                        </div>
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
          <v-row
            justify="center"
            class="hidden-md-and-up projectBackground2 mt-10"
          >
            <v-col cols="6" md="6">
              <v-img src="../assets/leasemyride/leasemyride11.png"></v-img>
            </v-col>
            <v-col cols="6" md="6">
              <div class="projectSubTitle">LeaseMyRide</div>
              <div class="mb-8" style="font-size: 0.75rem">
                LeaseMyRide is a lease broker and lead aggregator. (Work In
                Progress)
              </div>
              <div justify-center>
                <v-dialog
                  transition="dialog-bottom-transition"
                  max-width="1500"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn color="#f5e2c8" v-bind="attrs" v-on="on"
                      >More Info</v-btn
                    >
                  </template>
                  <template v-slot:default="dialog">
                    <v-card>
                      <v-toolbar color="blue lighten-3">LeaseMyRide</v-toolbar>
                      <v-card-text>
                        <div class="pa-6">
                          LeaseMyRide is a lease broker and lead aggregator. The
                          service provides clients easy access to brokers while
                          increasing leads for brokers. The business model is
                          planned to have a subcription service for brokers to
                          allow for lead generation.
                        </div>
                        <div class="pa-6">Technologies used (Click icons)</div>
                        <div>
                          <ul
                            class="iconContainer font"
                            style="
                              display: grid;
                              grid-template-columns: repeat(3, 1fr);
                            "
                          >
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

      <!-- Photo Frame -->
      <v-row class="" justify="center">
        <v-col cols="12" md="8" class="">
          <v-row class="hidden-sm-and-down projectBackground4" justify="center">
            <v-col cols="7" md="7">
              <div>
                <model-fbx
                  :backgroundAlpha="0"
                  :rotation="rotation"
                  @on-load="onLoad"
                  :position="position"
                  :scale="scale"
                  :antialias="true"
                  :logarithmicDepthBuffer="true"
                  :height="400"
                  :width="600"
                  src="models/Frame21.fbx"
                ></model-fbx>
              </div>
              <div>
                Drag Me
                <v-icon>mdi-hand-right</v-icon>
                Zoom
                <v-icon>mdi-arrow-expand-vertical</v-icon>
              </div>
            </v-col>
            <v-col cols="5" md="5">
              <div class="projectTitle">Digital Collage Frame</div>
              <div class="projectSubTitle mb-16">
                Using multiple raspberry pi devices connected to the network to
                create a digital frame that automatically updates images.
              </div>
              <div justify-center>
                <v-dialog transition="dialog-bottom-transition" max-width="750">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn color="#f5e2c8" v-bind="attrs" v-on="on"
                      >More Info</v-btn
                    >
                  </template>
                  <template v-slot:default="dialog">
                    <v-card>
                      <v-toolbar color="red lighten-2"
                        >Digital Photo Frame</v-toolbar
                      >
                      <v-card-text>
                        <div class="pa-6">
                          This project allowed me to combine hardware and
                          software into a real piece of art. The frame is
                          completely made from scratch (cut, painted and
                          polished). I chose a lightweight linux distro that
                          allowed fast boot up. The devices are connected to the
                          network but run on a separate local network for
                          privacy reasons. I set it up so future features like
                          having Google Drive syncing of images can be easily
                          added.
                        </div>
                        <v-img src="../assets/frames/Frames.jpg"></v-img>
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
          <v-row
            class="hidden-md-and-up projectBackground4 mt-10"
            justify="center"
          >
            <v-col cols="12" md="12">
              <div>
                <v-img src="../assets/frames/Frame1.png"></v-img>
              </div>
            </v-col>
            <v-col cols="12" md="12">
              <div class="projectSubTitle">Digital Collage Frame</div>
              <div class="projectSubTitleMobile mb-8">
                Using multiple raspberry pi devices connected to the network to
                create a digital frame that automatically updates images.
              </div>
              <div justify-center>
                <v-dialog
                  transition="dialog-bottom-transition"
                  max-width="1500"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn color="#f5e2c8" v-bind="attrs" v-on="on"
                      >More Info</v-btn
                    >
                  </template>
                  <template v-slot:default="dialog">
                    <v-card>
                      <v-toolbar color="red lighten-2"
                        >Digital Photo Frame</v-toolbar
                      >
                      <v-card-text>
                        <div class="pa-6">
                          This project allowed me to combine hardware and
                          software into a real piece of art. The frame is
                          completely made from scratch (cut, painted and
                          polished). I chose a lightweight linux distro that
                          allowed fast boot up. The devices are connected to the
                          network but run on a separate local network for
                          privacy reasons. I set it up so future features like
                          having Google Drive syncing of images can be easily
                          added.
                        </div>
                        <v-img src="../assets/frames/Frames.jpg"></v-img>
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

      <!-- Csun Redesign -->
      <v-row class="" justify="center">
        <v-col cols="12" md="6" class="">
          <v-row
            class="hidden-sm-and-down projectBackground3 mt-10 mb-10"
            justify="center"
          >
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
                simple and mobile friendly.
              </div>
              <div justify-center>
                <v-dialog transition="dialog-bottom-transition" max-width="750">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn color="#f5e2c8" v-bind="attrs" v-on="on"
                      >More Info</v-btn
                    >
                  </template>
                  <template v-slot:default="dialog">
                    <v-card>
                      <v-toolbar color="red lighten-2"
                        >CSUN Class Search</v-toolbar
                      >
                      <v-card-text>
                        <div class="pa-6">
                          This project was inspired by the complaints of the
                          current user interface of the class search. Learning
                          about Javascript and Vue helped change an already
                          existing system to a proof of concept.
                        </div>
                        <div class="pa-6">
                          Technologies used (Hover over icons)
                        </div>
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
          <v-row
            class="hidden-md-and-up projectBackground3 mt-10"
            justify="center"
          >
            <v-col cols="6" md="6">
              <carousel-3d
                :autoplay="true"
                :height="500"
                :width="250"
                :autoplayTimeout="2000"
                :display="1"
                :inverseScaling="1"
                :autoplayHoverPause="false"
              >
                <slide :index="0">
                  <v-img src="../assets/csun/iphonexcsun1.png"></v-img>
                </slide>
                <slide :index="1">
                  <v-img src="../assets/csun/iphonexcsun2.png"></v-img>
                </slide>
              </carousel-3d>
            </v-col>
            <v-col cols="6" md="6">
              <div class="projectSubTitle">CSUN Class Search</div>
              <div class="projectSubTitleMobile mb-8">
                Using new technologies to redesign search by making it more
                simple and mobile friendly.
              </div>
              <div justify-center>
                <v-dialog
                  transition="dialog-bottom-transition"
                  max-width="1500"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn color="#f5e2c8" v-bind="attrs" v-on="on"
                      >More Info</v-btn
                    >
                  </template>
                  <template v-slot:default="dialog">
                    <v-card>
                      <v-toolbar color="red lighten-2"
                        >CSUN Class Search</v-toolbar
                      >
                      <v-card-text>
                        <div class="pa-6">
                          This project was inspired by the complaints of the
                          current user interface of the class search. Learning
                          about Javascript and Vue helped change an already
                          existing system to a proof of concept.
                        </div>
                        <div class="pa-6">Technologies used (Click icons)</div>
                        <div>
                          <ul
                            class="iconContainer font"
                            style="
                              display: grid;
                              grid-template-columns: repeat(3, 1fr);
                            "
                          >
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
      <v-row class="mt-16 mb-0" justify="center">
        <v-col>
          <!-- <div class="intro mainIntro"><p>About Me</p></div> -->
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { ModelFbx } from "vue-3d-model";

export default {
  name: "HelloWorld",
  components: { ModelFbx },
  methods: {
    copyToClipboard(text) {
      const dummy = document.createElement("textarea");
      // to avoid breaking orgain page when copying more words
      // cant copy when adding below this code
      // dummy.style.display = 'none'
      document.body.appendChild(dummy);
      // Be careful if you use texarea. setAttribute('value', value), which works with "input" does not work with "textarea". – Eduard
      dummy.value = text;
      dummy.select();
      document.execCommand("copy");
      document.body.removeChild(dummy);
    },
    onLoad() {
      this.rotate();
    },
    rotate() {
      this.rotation.y -= 0.004;
      requestAnimationFrame(this.rotate);
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
      rotation: {
        x: 0,
        y: 0,
        z: 0,
      },
      position: { x: 0, y: 0, z: 0 },

      scale: { x: 1.2, y: 1.2, z: 1.2 },
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
            "Vue.js was chosen since I am familiar with this framework. It allowed me to spend more time building backend services.",
        },
        {
          filename: "docker.png",
          label:
            "Docker was used for containerization of microservices. For example the backend can be spun up with once docker command and it makes it easy to test on the fly.",
        },
        {
          filename: "postgres.png",
          label:
            "Postgres was used since it is a great open source database management tool.",
        },
      ],
      project2: [
        {
          filename: "go.png",
          label:
            "Golang was used for backend services as it has a robust support for creating RESTful services and building out large applications with ease.",
        },
        {
          filename: "vue.png",
          label:
            "Vue.js is a great framework to build out large pages with multiple components. It allowed our team to take our Figma prototypes and create exact copy components.",
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
          filename: "nuclino.png",
          label:
            "Nuclino was used to organize features of services and provide documentation for endpoints.",
        },
      ],
      project3: [
        {
          filename: "vue.png",
          label:
            "Used to give a responsive update. The issue of pages being reloaded after each click is now fixed with Vue.",
        },
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
.asset-shadow {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.projectBackground2 {
  background-color: lightskyblue;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.projectBackground3 {
  background-color: lightcoral;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.projectBackground4 {
  background-color: lightslategray;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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
