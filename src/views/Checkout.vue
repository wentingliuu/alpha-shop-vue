<template>
  <div class="container">
    <h1 class="main__title">結帳</h1>
    
    <section class="main__content">
      <!-- left part-->
      <div class="main__content__left">
        <!-- stepper -->
        <Stepper />

        <!-- form -->
          <form id="form">
            <div class="form__content">
              <router-view
                :initial-user-info="userInfo"
              />
            </div>
        
            <!-- button -->
            <div class="form__btn">
              <button
                class="form__btn--previous">
                <span class="arrow">&longleftarrow;</span>上一步
              </button>
              <button
                class="form__btn--next first-step">
                下一步<span class="arrow">&longrightarrow;</span>
              </button>
            </div>
          </form>
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
  },
  data() {
    return {
      userInfo: {
        gender: 'male',
        name: '',
        phone: '',
        email: '',
        city: '',
        address: '',
        shipping: '0',
        payname: '',
        paycard: '',
        payexp: '',
        paycode: ''
      }
    }
  }
}
</script>