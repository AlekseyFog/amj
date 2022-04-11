<template>
  <nav class="navbar">
    <div class="navbar__logo">
      <img
         src="@/assets/logo.png"
         alt="logo"
      >
    </div>
    <div class="navbar__menu">
      <div class="navbar__menu_item">
        home
      </div>
      <div class="navbar__menu_item">
        about
      </div>
      <div class="navbar__menu_item">
        what we do
      </div>
      <div class="navbar__menu_item">
        get a quote
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
.navbar {
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
</style>
