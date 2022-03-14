<template>
  <div id="alpha-shop-vue">
    <Header />
    <hr>
    <main>
      <router-view />
    </main>
    <hr>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>