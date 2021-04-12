<template>
  <div class="font">
    <!-- <img class="blob" src="../assets/drawing-2.svg"> -->
    <!-- <div class="blobMiniContainer">
      <img class="blobMini" src="../assets/blob3.svg" />
      <img class="blobMini2" src="../assets/blob1.svg" />
      <img class="blobMini3" src="../assets/blob2.svg" />
      <img class="blobMini4" src="../assets/blob5.svg" />
    </div> -->
    

    <!-- <v-container fluid>
      <v-row class="mt-10" justify="space-around">
        <v-col class="introContainer" cols="4" sm="12">
              <v-row
                
                   class="intro animate__animated animate__fadeOutUp animate__delay-4s"
            v-show="showIntro"
            :height="height"
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
        
            <p
              class="mainIntro animate__animated animate__fadeIn animate__delay-0.75s"
                 v-show="showIntro"
            :height="height"
            >
              My name is Aram
            </p>
            <p
              class="secondaryIntro animate__animated animate__fadeIn animate__delay-2s"
                 v-show="showIntro"
            :height="height"
            >
              and I like to code.
            </p>
         
         
            <p
              class="mainIntro animate__animated animate__fadeInDown animate__delay-0.5s"
              v-show="!showIntro"
            >
              Aram Balayan
            </p>
            <p
              class="secondaryIntro animate__animated animate__fadeInDown animate__delay-0.5s"
              v-show="!showIntro"
            >
              Software Engineer
            </p>
           
              <p  class="aboutme textwrap" v-show="!showIntro">Im from Los Angeles and enjoy developing software applications from backend to frontend. I am a great addition to your engineering team just let me get my coffee first ☕.</p>
        
        </v-col>
        <v-col cols="6">
          <div class="contact intro">
          
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-spacer></v-spacer>
    <v-container> -->

      
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
              <div  class="aboutme" >Im from Los Angeles and enjoy developing software applications from backend to frontend. I am a great addition to your engineering team just let me get my coffee first ☕.</div>
        </v-col>
      </v-row>
    </v-container>
    
    <v-container fluid>
      
<!-- 
      <v-row class="mt-6">
        <v-col cols="12" md="12">
          <div class="intro mainIntro"><p>Projects</p></div>

          <div class="project font">
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
          </div>
        </v-col>
      </v-row> -->

      <v-row class="mt-16">
        <v-col>
          <div class="intro mainIntro"><p>Projects</p></div>
        </v-col>
      </v-row>

      <v-row>

      <v-col cols="12" md="6">
        <v-row justify="center" class="hidden-sm-and-down">
          <v-col cols="6" md="6">
              <carousel-3d :autoplay="true" :height="500" :width="250" :autoplayTimeout="4000" :autoplayHoverPause="true" >
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
            This is a
          </v-col>
        </v-row>

      <v-row class="hidden-md-and-up">
        <v-col cols="6" md="6" >
      <carousel-3d :autoplay="true" :height="175" :width="125" :autoplayTimeout="4000" :autoplayHoverPause="true" >
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
    <v-col cols="12" md="6">
      hello
    </v-col>
      </v-row>


      </v-col>
      

      
      <v-col cols="12" md="6">
        <v-row justify="center" >
          <v-col cols="8" md="8">
                  <carousel-3d :autoplay="true" :height="500" :width="250" :autoplayTimeout="5000" :display="1" :inverseScaling="1" :autoplayHoverPause="true"
 >
        <slide :index="0">
          <v-img src="../assets/csun/iphonexcsun1.png"></v-img>
        </slide>
        <slide :index="1">
          <v-img src="../assets/csun/iphonexcsun2.png"></v-img>
        </slide>
 
      </carousel-3d>
          </v-col>
          <v-col cols="12" md="4">
            This is a
          </v-col>
        </v-row>
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
  color: beige;
  text-shadow: 1px 1px 5px black;
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
.aboutme{
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
