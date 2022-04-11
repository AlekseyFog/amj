<template>
  <div id="app">
    <div class="navb">
      <div class="navbar__logo">
        <img
           src="@/assets/logo.png"
           alt="logo"
        >
      </div>
      <div class="navbar__menu d-none d-lg-flex">
        <a href="#home" class="navbar__menu_item">
          home
        </a>
        <a href="#about" class="navbar__menu_item">
          about
        </a>
        <a href="#wedo" class="navbar__menu_item">
          what we do
        </a>
        <a href="#quote" class="navbar__menu_item">
          get a quote
        </a>
      </div>
      <div
         @click="SetMenuIsVisible"
         class="navbar__menu_mobile d-lg-none"
      >
        <img
           alt="menu"
           src="@/assets/menu.png"
        >
      </div>
    </div>
    <div
       class="menu d-lg-none"
       v-if="menuIsVisible"
    >
      <div class="menu__wrapper">
        <div
           class="menu__item"
           @click="SetMenuIsVisible"
        >
          <a href="#home">
            Home
          </a>
        </div>
        <div
           class="menu__item"
           @click="SetMenuIsVisible"
        >
          <a href="#about"
          >
            About
          </a>
        </div>
        <div
           class="menu__item"
           @click="SetMenuIsVisible"
        >
          <a href="#wedo"
          >
            What we do
          </a>
        </div>
        <div
           class="menu__item"
           @click="SetMenuIsVisible"
        >
          <a href="#quote"
          >
            Get a quote
          </a>
        </div>
      </div>
    </div>
    <Slider id="home"/>
    <Splash id="about"/>
    <Advantages id="wedo"/>
    <Form id="quote"/>
    <Footer/>
  </div>
</template>

<script>

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
  },
  data() {
    return {
      menuIsVisible: false,
    };
  },
  methods: {
    SetMenuIsVisible() {
      this.menuIsVisible = !this.menuIsVisible;
    },
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
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: #000000;
}

a:hover {
  border: none;
}

a:visited {
  color: #000000;
}

html {
  font-family: 'Montserrat', sans-serif !important;
  box-sizing: border-box;
  -webkit-text-size-adjust: 100%;
  scroll-behavior: smooth;
}

a {
  text-decoration: none !important;
}

#app {
  font-family: 'Varela Round', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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

.navb {
  z-index: 1;
  background: #F8F9FA;
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  padding: 15px 70px 20px;
}

.navbar__logo {
  font-size: 50px;
  color: #F6C13E;
  font-weight: bold;
}

.navbar__logo img {
  width: 100%;
}

.navbar__menu {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.navbar__menu_item {
  margin: 0 15px;
  padding: 7px;
  font-size: 20px;
  transition: 0.5s ease-in-out;
  text-transform: uppercase;
}

.navbar__menu_item:hover {
  color: #F6C13E;
  border-bottom: 1px solid #F6C13E;
  cursor: pointer;
  transition: 0.1s ease-in-out;
}

.navbar__menu_mobile img {
  width: 40px;
}

.menu {
  position: fixed;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  min-height: 100vh;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 999;
}

.menu__wrapper {
  display: flex;
  flex-direction: column;
  width: 250px;
  min-height: 100vh;
  height: 100vh;
  background: #f9f9f9;
  padding: 10px;
  margin-left: auto;
  overflow: hidden;
}

.menu__item {
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
}
@media (max-width: 992px) {
  .navb {
    padding: 10px;
  }
}

</style>
