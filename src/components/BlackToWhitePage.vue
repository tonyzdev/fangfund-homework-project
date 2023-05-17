<template>
    <div class="background new-page">
      <div class="content">
        <div class="row">
          <div class="column">
            <h1><span class="gradient-text">GPT-4</span><br/>The most powerful large language model ever (among others)</h1>
          </div>
          <div class="column">
            <img class="gpt-4-logo" src="https://images.openai.com/blob/b11fba8c-c51f-41c1-95b8-cc55db89af49/gpt-4-motif.svg" alt="GPT-4 Line Motif" loading="lazy" data-nuxt-img="" aria-hidden="false">
          </div>
        </div>
        <div class="row">
          <div class="column">
            <p>GPT-4 is the latest large multimodal model developed by OpenAI, capable of accepting both image and text inputs and providing text outputs.

While it's not as capable as humans in many real-world scenarios, it exhibits human-level performance on various professional and academic benchmarks, such as scoring in the top 10% on a simulated bar exam.

The development process involved a 6-month iterative alignment, leveraging insights from adversarial testing programs and previous models like ChatGPT. As a result, GPT-4 shows the best results yet on factuality, steerability, and adherence to set boundaries.</p>
          </div>
        </div>
        <div class="row">
          <div class="column">
            <p>In the past two years, OpenAI has revamped its deep learning stack and co-designed a supercomputer with Azure, specifically for its workload. GPT-3.5 was trained as a test run of this system, leading to bug fixes and theoretical improvements.

GPT-4's training run was highly stable, marking the first large model whose training performance could be accurately predicted. OpenAI aims to refine this methodology to anticipate and prepare for future capabilities far in advance, considering it crucial for safety.</p>
          </div>
        </div>
        <div class="row">
          <div class="column">
            <p>GPT-4's text input capability is being released via ChatGPT and the API, with a waitlist. The image input capability is being prepared for wider availability in collaboration with a single partner. OpenAI Evals, a framework for automated evaluation of AI model performance, is also being open-sourced.

The distinction between GPT-3.5 and GPT-4 becomes apparent when the complexity of the task increases. GPT-4 is more reliable, creative, and can handle much more nuanced instructions.

The models were compared using a variety of benchmarks, including human-designed exams. No specific training for these exams was done, and while a few problems from the exams were seen during training, the results are considered representative. Further details are available in the technical report.</p>
          </div>
        </div>

      </div>
    </div>
  </template>

<script>
export default {
  name: 'BlackToWhitePage',
};
</script>


<style scoped>
.BlackToWhitePage {
  background: linear-gradient(to bottom, #fdfdfd ,#b7b7b7);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}


.content {
  display: flex;
  flex-direction: column;
  align-items: center;
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
  text-align: left;
}


.gradient-text {
background-image: linear-gradient(to right, #ff00cc, #3333ff);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
font-size: 60px; /* Adjust the desired font size */
font-family:system-ui, sans-serif;
}


.gpt-4-logo{
  width: auto; /* 设置图片的宽度 */
  height: 220px; 
  margin-bottom: 10px;

}
/* 添加其他样式以适应你的需求 */
</style>