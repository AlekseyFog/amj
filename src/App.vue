<template>
  <div id="app">
    <Header class="menu"/>
    <Slider />
    <Splash />
    <Advantages />
    <Form />
    <Footer />
  </div>
</template>

<script>

import Header from "./components/Header";
import Slider from "@/components/Slider";
import Splash from "@/components/Splash";
import Advantages from "@/components/Advantages";
import Form from "@/components/Form";
import Footer from "@/components/Footer";

export default {
  name: 'App',
  components: {
    Footer,
    Form,
    Advantages,
    Splash,
    Slider,
    Header
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');

* {
  margin: 0;
  padding: 0;
  outline: none;
  appearance: none;
  user-select: none;
}
*,
*:before,
*:after {
  box-sizing: border-box;
}
* {
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}
html {
  font-family: 'Montserrat', sans-serif!important;
  box-sizing: border-box;
  -webkit-text-size-adjust: 100%;
}
a {
  text-decoration: none;
}
#app {
  font-family: 'Varela Round', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.menu {
  position: sticky;
  top: 0;
  z-index: 1;
}

.fade-enter-active {
  transition: all .5s ease;
}

.fade-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.default-layout {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 180px);
}

.fade-enter, .fade-leave-active {
  transform: translateX(10px);
  opacity: 0;
}

.default-layout_locked {
  position: fixed;
  height: 100vh;
  top: 0;
  z-index: 99;
  overflow: hidden;
}

.mobile__button {
  position: fixed;
  top: 30px;
  right: 30px;
}

</style>
