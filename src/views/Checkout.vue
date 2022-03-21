<template>
  <div class="container">
    <h1 class="main__title">結帳</h1>
    
    <section class="main__content">
      <!-- left part-->
      <div class="main__content__left">
        <!-- stepper -->
        <Stepper />
      </div>
    </section>
  </div>
</template>

<script>
import Stepper from '../components/Stepper'

export default {
  name: 'Checkout',
  components: {
    Stepper
  }
}
</script>