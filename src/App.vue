<template>
  <div id="app">
    <div class="gradient-page-wrapper">
      <Home/>
      <GradientPage />
      <BlackToWhitePage/>
      <WhiteToBlackPage/>
    </div>
  </div>
</template>


<style>

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

#app {
  overflow: hidden;
}

.gradient-page-wrapper {
  position: absolute;
  top: 0vh;
  left: 0;
  width: 100%;
}
</style>

<script>
import Home from './components/HomePage.vue'
import GradientPage from './components/GradientPage.vue'; 
import BlackToWhitePage from './components/BlackToWhitePage.vue'
import WhiteToBlackPage from './components/WhiteToBlackPage.vue';

export default {
  name: 'App',
  components: {
    Home,
    GradientPage,
    BlackToWhitePage,
    WhiteToBlackPage
}
}

</script>

<!-- <style>

</style> -->

