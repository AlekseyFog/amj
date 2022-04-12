<template>
  <div class="advantages">
    <div class="advantages__header row">
      our services
    </div>
    <div class="advantages__services row mt-5">
      <div class="advantages__services_item col-12 col-md-4">
        <div class="advantages__services_item_icon">
          <img src="public/icons/wind.png" alt="wind">
        </div>
        <div class="advantages__services_item_header">
          Dry Screeding
        </div>
        <div class="advantages__services_item_text">
          Cost-effective: One of the main reasons for its popularity is because of its lower price point both in terms
          of material and labour.
          Applicable on non-flat surfaces: This can be useful in for screeds in wetrooms.
        </div>
      </div>
      <div class="advantages__services_item col-12 col-md-4">
        <div class="advantages__services_item_icon">
          <img src="public/icons/thermo.png" alt="thermo">
        </div>
        <div class="advantages__services_item_header">
          Insulation
        </div>
        <div class="advantages__services_item_text">
          Insulation acts as a barrier to heat flow. It can make your home more comfortable by reducing the amount of
          heat escaping in winter and reducing the amount of heat entering in summer. By insulating you can
          significantly reduce your heating and cooling bills and help to reduce greenhouse gas emissions.
        </div>
      </div>
      <div class="advantages__services_item col-12 col-md-4">
        <div class="advantages__services_item_icon">
          <img src="public/icons/drop.png" alt="drop">
        </div>
        <div class="advantages__services_item_header">
          Liquid Screeding
        </div>
        <div class="advantages__services_item_text">
          Quicker application: It is comparatively quicker to apply and handle because it can be poured in one go and
          not applied piece by piece like you would with a dry screed.

          Energy efficient: Liquid screeds are more conductive than traditional screeds. The effort required to spread
          and distribute the floor evenly is less thereby reducing the amount of energy needed.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Advantages',
};
</script>

<style scoped>
.advantages {
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
}

.advantages__header {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  font-weight: bold;
  text-transform: uppercase;
}
.advantages__services_item_header{
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 15px;
}

.advantages__services_item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: #f9f9f9;
  background: #212529;
  border-radius: 10px;
  font-family: 'Raleway', sans-serif;
  max-width: 300px;
  margin: 20px auto;
  padding: 20px;
}
.advantages__services_item_icon img{
  width: 50px;
  margin-bottom: 10px;
}
</style>
