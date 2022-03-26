<template>
  <div class="home">
  <NavbarVue />
    <HomePage />
  </div>
</template>

<script>
// @ is an alias to /src
import HomePage from '@/components/Home.vue'
import NavbarVue from '../components/Navbar.vue'
export default {
  name: 'MainPage',
  components: {
    HomePage,
    NavbarVue,
  }
}
</script>
