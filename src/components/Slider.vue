<template>
  <div class="a">
<!--    <VueSlickCarousel-->
<!--       class="col-12"-->
<!--       :arrows="true"-->
<!--       :dots="true"-->
<!--       :autoplay="true"-->
<!--       :autoplay-speed="2500"-->
<!--    >-->
<!--      <div>-->
<!--        <div class="portfolio__slider liquid">-->
<!--          <span class="slider__header">Liquid Screeding</span>-->
<!--          <br/>-->
<!--          <span>A highly efficient successor to conventional sand and cement screed</span>-->
<!--          <div class="slider__button">-->
<!--            LEARN MORE-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div>-->
<!--        <div class="portfolio__slider dry">-->
<!--          <span class="slider__header">Dry Screeding</span>-->
<!--          <br/>-->
<!--          <span>Perfect solution for private clients. Fast, efficient and affordable</span>-->
<!--          <div class="slider__button">-->
<!--            LEARN MORE-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div>-->
<!--        <div class="portfolio__slider insulation">-->
<!--          <span class="slider__header">Insulation</span>-->
<!--          <br/>-->
<!--          <span>Insulating your ground floor is a great way to keep your property warm, as well as lower your energy bills and emissions</span>-->
<!--          <div class="slider__button">-->
<!--            LEARN MORE-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </VueSlickCarousel>-->
    <div class="slider">
      <h2 class="slider__text">best screeding services to your home</h2>
    </div>
  </div>
</template>

<script>
// import VueSlickCarousel from 'vue-slick-carousel';
// import 'vue-slick-carousel/dist/vue-slick-carousel.css';
// import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

export default {
  name: 'Slider',

  components: {
    // VueSlickCarousel,
  },
};

</script>

<style scoped>

.portfolio__slider {
  min-height: calc(100vh - 200px);
  font-size: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #f9f9f9;
  font-family: 'Raleway', sans-serif;
  font-weight: bold;
  margin-bottom: 30px;
}

.portfolio__slider span {
  padding: 0 100px;
}

span{
  font-size: 30px;
  text-align: center;
  font-family: 'Varela Round', sans-serif;
}

.slider{
  width: 100%;
  min-height: calc(100vh - 200px);
  background: url("~@/assets/slider/Masthead.png") no-repeat center;
  padding: 120px 0 0;
}
.slider__text{
  font-family: 'Raleway', sans-serif;
  color: #F6C13E;
  font-size: 45px;
  padding: 50px;
  background: rgba(0,0,0,0.6);
  max-width: 70%;
  border-radius: 0 100px;
  text-align: center;
  text-transform: uppercase;
}
.liquid{
  background: url("~@/assets/slider/Liquid.png") no-repeat center;
}
.dry{
  background: url("~@/assets/slider/Dry.png") no-repeat center;
}

.insulation{
  background: url("~@/assets/slider/insulation.png") no-repeat center;
}
.slider__header{
  font-size: 70px;
  color: #F6C13E;
}
.slider__button{
  font-family: 'Varela Round', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #F6C13E;
  font-size: 20px;
  padding: 20px;
  border-radius: 5px;
  margin-top: 70px;
  transition: 0.1s all ease-in-out;
  cursor: pointer;
}
.slider__button:hover{
  font-size: 22px;
  transition: 0.3s all ease-in-out;
  cursor: pointer;
}
</style>
