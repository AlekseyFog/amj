<template>
  <div class="container-fluid splash">
    <div class="row">
      <div class="col-12 col-md-4 splash__image">
        <img src="~@/assets/slider/About-Suction.jpg" alt="about">
      </div>
      <div class="col-12 col-md-6 splash__text">
        <div class="splash__text_header mb-3">
          We Provide Best Quality
          Services For Many Years
        </div>
        <div class="splash__text_text">
          AMJ Screeding team has expirience of more then 20 years in screeding. We have finished more then thousands
          projects that allows us to say we can deal with any type of complexity. We are using most up-to-date
          technologies and tools to provide best quality services for out clients. We listen to our customers to ensure
          that all requirements are met on time and within budget giving you complete customer satisfaction.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Splash',
};
</script>

<style scoped>
.splash {
  margin-top: 70px;
  display: flex;
  padding: 20px;
}

.splash__text{
  margin: auto;
}

.splash__text_header {
  font-size: 28px;
  font-weight: bold;
}

.splash__text_text {
  font-size: 20px;
}
</style>
