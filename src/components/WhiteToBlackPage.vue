 <!-- <template>
    <div class="background">
      <div class="content">
        <div class="row">
          <div class="column">
            <h1>
              "Revolutionizing Image Creation:<br/>
              How <span class="gradient-text">Midjourney</span>'s AI<br/>
              Is Shaping the Future of Art"
            </h1>
          </div>
        </div>
        <div class="row">
          <div class="column">
            <p>
              San Francisco-based Midjourney, Inc. is reshaping the intersection of artificial intelligence and visual art. Their generative AI program, Midjourney, uses natural language prompts to generate rich, detailed images, offering a new tool for artists and designers. Despite being in open beta since July 2022, the tool has undergone several iterations, with each version introducing more refined capabilities and higher image quality. However, this rapid innovation has not been without controversy. Questions around copyright infringement and the use of artist's images without explicit consent have cast a shadow over the tool's successes. As the conversation continues, Midjourney stands at the forefront of an exciting new chapter in digital art creation.
            </p>
          </div>
          <div class="column">
            <div class="image-container">
              <img class="img1" src="https://cdn.discordapp.com/attachments/1107990517909819495/1107998833318838314/WX20230516-1951332x.png" alt="Image 1" loading="lazy">
              <img class="img2" src="https://cdn.discordapp.com/attachments/1107990517909819495/1108002434300780707/pure_ASCII_art_90e4aed4-d8e8-465b-9da7-c5da4080f2f6.png" alt="Image 2" loading="lazy">
            </div>
          </div>
        </div>
        <div class="row">
          <div class="column">
            <h3>With Prompt: left-img-link ASCII art --aspect 7:4 --v 4 --v 4 --s 250</h3>
            <img class="img3" src="https://cdn.discordapp.com/attachments/990816855088328734/1108260940153098250/Azim_in_cartoon_style_a4ebccee-7d1b-42a1-8db2-850c54f8f825.png" loading="lazy">
          </div>
          <div class="column">
            <h3>With Prompt: https://s.mj.run/EAHzpi8fdOQ in cartoon style</h3>
          </div>
        </div>
        <div class="row">
          <div class="column">
            <div class="container">
              <div class="input-container">
                <input type="text" v-model="email" placeholder="Enter your e-mail to stay up-to-date with the latest AGI inquiries">
                <button @click="submit">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
 -->

 <template>
    <div class="background">
      <div class="content">
        <div class="row">
          <div class="column">
            <h1>"Revolutionizing Image Creation:<br/>How <span class="gradient-text">Midjourney</span>'s AI<br/>Is Shaping the Future of Art"</h1>
          </div>
        </div>
        <div class="row">
          <div class="column">
            <p>San Francisco-based Midjourney, Inc. is reshaping the intersection of artificial intelligence and visual art. Their generative AI program, Midjourney, uses natural language prompts to generate rich, detailed images, offering a new tool for artists and designers. Despite being in open beta since July 2022, the tool has undergone several iterations, with each version introducing more refined capabilities and higher image quality. However, this rapid innovation has not been without controversy. Questions around copyright infringement and the use of artist's images without explicit consent have cast a shadow over the tool's successes. As the conversation continues, Midjourney stands at the forefront of an exciting new chapter in digital art creation.</p>
          </div>
          <div class="column">
            <div class="image-container">
              <img class="img1" src="https://cdn.discordapp.com/attachments/1107990517909819495/1107998833318838314/WX20230516-1951332x.png" alt="Image 1" loading="lazy">
              <img class="img2" src="https://cdn.discordapp.com/attachments/1107990517909819495/1108002434300780707/pure_ASCII_art_90e4aed4-d8e8-465b-9da7-c5da4080f2f6.png" alt="Image 2" loading="lazy">
            </div>
          </div>
        </div>
        <h3>With Prompt: left-img-link ASCII art --aspect 7:4 --v 4 --v 4 --s 250</h3>
        <img class="img3" src="https://cdn.discordapp.com/attachments/990816855088328734/1108260940153098250/Azim_in_cartoon_style_a4ebccee-7d1b-42a1-8db2-850c54f8f825.png" loading="lazy">
        <h3>With Prompt: https://s.mj.run/EAHzpi8fdOQ in cartoon style</h3>
        <hr class="divider">

        <div class="custom-form">
          <label for="first-name">First name <span class="star">*</span></label>
          <div class="input-container">
            <input type="text" id="first-name" v-model="firstName" placeholder="Please enter your first name" required>
          </div>
          <label for="last-name">Last name <span class="star">*</span></label>
          <div class="input-container">
            <input type="text" id="last-name" v-model="lastName" placeholder="Please enter your last name" required>
          </div>
          <label for="email">Email <span class="star">*</span></label>
          <div class="input-container">
            <input type="email" id="email" v-model="email" placeholder="Please enter your e-mail" required>
          </div>
          <label for="WeChatID">WeChat ID <span class="star">*</span></label>
          <div class="input-container">
            <input type="text" id="wechatID" v-model="WeChatID" placeholder="Please enter your WeChat ID" required>
          </div>
          <label>What would you like to know about AGI?</label>
          <div class="checkbox-group">
            <label>
              <input type="checkbox" v-model="interestsList" value="cv"> Computer Vision
            </label>
            <label>
              <input type="checkbox" v-model="interestsList" value="llm"> Large Language Model
            </label>
            <label>
              <input type="checkbox" v-model="interestsList" value="ommm"> Other multi-modal models
            </label>
          </div>
          <button @mouseover="changeButtonColor(true)" @mouseleave="changeButtonColor(false)" @click="changeButtonColor(true)" :style="buttonStyles">Subscribe</button>
        </div>
      </div>
    </div>
  </template>
  



<script>
export default {
  name: 'WhiteToBlackPage',
//   data() {
//     return {
//       firstName: '',
//       lastName: '',
//       email: '',
//       interests: '',
//       interestsList: []
//     };
//   },
data() {
    return {
      isButtonHovered: false,
      isButtonClicked: false,
    };
  },

  methods: {
    changeButtonColor(isHovered) {
      this.isButtonHovered = isHovered;
      
      // 如果按钮被点击，则保持颜色不变
      if (this.isButtonClicked) {
        this.isButtonClicked = isHovered;
      }
    },
  },

  computed: {
    buttonStyles() {
      const backgroundColor = this.isButtonHovered || this.isButtonClicked ? 'white' : '#646464';
      const color = this.isButtonHovered || this.isButtonClicked ? '#646464' : 'white';

      return {
        backgroundColor,
        color,
      };
    },
  },
};
</script>



  <style scoped>
  .background {
    top: 0; 
    left: 0; 
    background-image: linear-gradient(to bottom, white, #3e3d3d);
    /* 其他样式 */
    height: 250vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .content {
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    height: 100%;
    padding: 20px;
  }
  
  .row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 5px;
}

.column {
  width: 100%;
  max-width: 900px;
  padding: 10px;
  text-align: left;
  font-family: tiempos text,serif;
  font-size: 18px;
  

}

  
  .content h1{
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 36px;
  text-align: center;
  white-space: nowrap;
}

  
img {
    width: 100%;
    max-width: 600px;
    height: auto;
    margin-bottom: 10px;
}
  
p {
margin-bottom: 10px;
}
.gradient-text {
    background-image: linear-gradient(to right, #ff00cc, #3333ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 60px; /* Adjust the desired font size */
    font-family:system-ui, sans-serif;
}
.img1{
    width: auto;
    height: 300px;
    margin-right: 20px;
}
.img2{

    width: auto;
    height: 300px;

}
.img3 {
    display: block;
    margin: 0 auto; 
    width:600px;
    height: 600px;
    justify-items: center;
}

.image-container {
  display: flex;
  justify-content: center; /* 居中对齐 */
  margin-bottom: 10px;
}
.content h3{
    font-size: 16px;
    text-align: center;
    color: rgb(74, 74, 74);
    margin-top: 10px;
}

.container {
  display: flex;
  justify-content: center;
}

.input-container {
  display: flex;
  align-items: center;
  width: 400px;
  height: 40px;
  padding: 2px;
  border-radius: 5px;
  background-color: #a4a4a4;
  font-family:system-ui, sans-serif;

}

.input-container input {
  flex: 1;
  padding: 5px;
  border-radius: 5px;
  border: none;
  outline: none;
  background-color: transparent;
  font-family: system-ui, sans-serif;

}

.input-container button {
  margin-left: 15px;
  padding: 8px 15px;
  height: 40px;
  border: 1px;
  border-radius: 5px;
  background-color: #7a7a7b;
  color: white;
  cursor: pointer;
  font-family: system-ui, sans-serif;

}
.form-container {
  width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
}

/* ------------------------------ */
.custom-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 0px solid #ccc;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 10px;
  font-weight: bold;
  font-family: system-ui, sans-serif;

}

.input-container {
  margin-bottom: 20px;
}

input[type="text"],
input[type="email"] {
  width: 100%;
  padding: 10px;
  border: 0px solid #ccc;
  border-radius: 5px;
  font-family: system-ui, sans-serif;

}

.checkbox-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  font-family: system-ui, sans-serif;

}

button {
  padding: 10px 20px;
  background-color: #656464;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: system-ui, sans-serif;
  font-weight: bold;

}
.star{
    color: rgba(225, 69, 69, 0.975);
}

.checkbox-label {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-family: system-ui, sans-serif;

}

.checkbox-label input[type="checkbox"] {
  display: none;
  font-family: system-ui, sans-serif;

  
}

.checkbox-custom {
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 100%;
  border: 1px solid #ccc;
  margin-right: 5px;
  position: relative;
  cursor: pointer;
  font-family: system-ui, sans-serif;

}

.checkbox-custom::after {
  content: "";
  display: block;
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background-color: #a4a4a4;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  font-family: system-ui, sans-serif;

}

.checkbox-label input[type="checkbox"]:checked + .checkbox-custom::after {
  opacity: 1;
}

.divider {
  border: none;
  border-top: 1px solid #cccccc;
  margin: 10px 0;
}


  </style>
  