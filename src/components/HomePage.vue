<template>
  <div class="background">

    <div id="app">
      <vue-particles
        color="#dedede"
        :particleOpacity="0.8"
        :particlesNumber="100"
        shapeType="circle"
        :particleSize="6"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.7"
        :linesDistance="150"
        :moveSpeed="5"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
     
    </div>
        
    <!-- <div class="particles" ref="particles"></div> -->
  
    <nav class="navbar">
      <ul class="nav-links">
        <li><a href="#insight">Insight</a></li>
        <li><a href="#product">Product</a></li>
        <li><a herf="#careers">Career</a></li>
        <li>
          <a href="#company" class="dropdown">Company</a>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </li>
      </ul>
    </nav>

    <hr class="nav-line"/>
    <div class="title">
      <h1>Futher is here</h1>
      <h2>From machine learning to Artificial General Intelligence</h2>
    </div>
    <div id="trends-widget-container" ref="widgetContainer"></div>
    
  </div>
</template>







<script>
export default {
  name: 'HomePage',
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const blurThreshold = 10; // 设置触发模糊效果的滚动阈值

      const navbar = document.querySelector('.navbar');
      if (scrollTop > blurThreshold) {
        navbar.classList.add('blur');
      } else {
        navbar.classList.remove('blur');
      }
    },
  },
};
</script>

<style scoped>

#particles-js
 { 
position: absolute;
 top: 0; 
left: 0; 
width: 100%; 
height: 100%; 
} 
.home-container {
  position: relative;
}

.background {
  position: relative;
  background-color: transparent;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.navbar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 5vh;
  background: transparent;
  color: black;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 1.1rem;
  font-weight: 300;
  width: 100%;
  position: fixed;
  top: 0;
}

.nav-links {
  display: flex;
  justify-content: space-evenly;
  width: 70%;
  list-style: none;
}

.nav-links a {
  color: black;
  text-decoration: none;
  letter-spacing: 2px;
  position: relative;
}

.nav-links a:hover::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px; /* Increased line height for better visibility */
  background-color: black;
  bottom: -3px; /* Adjust the positioning for proper alignment */
  left: 0;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #eee2e2;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(239, 235, 235, 0.847);
  padding: 12px 16px;
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.nav-line {
  border: none;
  height: 2px;
  background-color: black;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 2;
}

.title-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: black;
  z-index: 1;
}

.title {
  margin: 0; /* Remove default margin for better alignment */
}

.title h1 {
  font-size: 80px;
  font-weight: bold;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.title h2 {
  font-size: 28px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

@media (max-width: 768px) {
  .nav-links {
    flex-direction: column;
    width: 100%;
  }
}

.background {
  position: relative;
  height: 100vh;
  width: 100vw;
  background-color: white;
  overflow: hidden;
}

.particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.title {
  position: relative;
  color: white;
  text-align: center;
  z-index: 1;
}

.navbar.blur {
  backdrop-filter: blur(5px);
  background-color: rgb(216, 216, 216); /* 背景颜色和透明度根据需要进行调整 */
}

.title h1 {
  background-image: linear-gradient(to right, #ff00cc, #3333ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.title h2 {
  background-image: linear-gradient(to right, #ff00cc, #3333ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}



</style>
