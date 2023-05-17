<template>
    <div class="gradient-page">
      <div class="content">
        <div class="left-section">

          <h1>Making Sense of Massive Texts: Claude AI's <span class="gradient-text">75,000</span> Words Reading Capability</h1>
          <p class="left-aligned-text">
            Anthropic's latest AI offering, Claude, is making waves with its remarkable ability to understand and analyze large amounts of text. With a context window of 100K tokens or approximately 75,000 words, Claude can process hundreds of pages in just minutes. It can digest and summarize dense documents, analyze strategic risks from annual reports, assess legislation, identify themes across legal documents, and even intelligently build on a dropped codebase. With an estimated 175 billion parameters, Claude is a major player in the AI landscape, comparable to the likes of GPT-3 and GPT-3.5. Its unique capabilities promise to revolutionize how businesses and individuals interact with large volumes of text.
          </p>
        </div>
        <div class="right-section">
        <img class="claude-img" src="../assets/Claude_BLOG.webp" alt="Description of the image">
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'GradientPage',
  };
  </script>
  
  <style scoped>
  .gradient-page {
    background: white;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    padding: 20px;
  }
  
  .left-section {
    flex: 1;
    text-align: center;
  }
  .left-section h1{
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 36px;
}

  .left-section h2 {
    font-size: 24px;
    color: white;
  }
  .right-section {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .gradient-text {
  background-image: linear-gradient(to right, #ff00cc, #3333ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 60px; /* Adjust the desired font size */
  font-family:system-ui, sans-serif;
  }

  .left-aligned-text {
  text-align: left;
  font-family: tiempos text,serif;
  font-size: 18px;
  }

  .claude-img{
    width: 560px; /* 设置图片的宽度 */
    height: auto; 
  }
  /* 添加其他样式以适应你的需求 */
  </style>
  