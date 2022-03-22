<template>
  <div class="container">
    <h1 class="main__title">結帳</h1>
    
    <section class="main__content">
      <!-- left part-->
      <div class="main__content__left">
        <!-- stepper -->
        <Stepper :current-step="currentStep" />

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
              v-show="currentStep > 1"
              @click.prevent.stop="prevStep"
              class="form__btn--previous"
            >
              <span class="arrow">&longleftarrow;</span>上一步
            </button>
            <button
              v-if="currentStep < 3"
              @click.prevent.stop="nextStep"
              :class="{first: currentStep === 1}"
              class="form__btn--next"
            >
              下一步<span class="arrow">&longrightarrow;</span>
            </button>
            <button
              @click.prevent.stop="submitForm"
              v-else-if="currentStep === 3"
              class="form__btn--next"
            >
              確認下單
            </button>
          </div>
        </form>
      </div>

      <!-- right part-->
      <div class="main__content__right">
        <Cart />
      </div>
    </section>
  </div>
</template>

<script>
import Stepper from '../components/Stepper'
import Cart from '../components/Cart'

export default {
  name: 'Checkout',
  components: {
    Stepper,
    Cart
  },
  data() {
    return {
      currentStep: Number(this.$route.name),
      userInfo: {
        gender: '先生',
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
  },
  methods: {
    nextStep() {
      if (this.currentStep === 1) {
        this.$router.push({ name: '2' })
      }
      if (this.currentStep === 2) {
        this.$router.push({ name: '3' })
      }
      this.currentStep++
    },
    prevStep() {
      if (this.currentStep === 3) {
        this.$router.push({ name: '2' })
      }
      if (this.currentStep === 2) {
        this.$router.push({ name: '1' })
      }
      this.currentStep--
    },
    submitForm() {
      console.log(this.userInfo)

      this.$swal.fire({
        title: '訂單已送出！',
        text: `${this.userInfo.name} ${this.userInfo.gender} 感謝您的消費，
        本次結帳金額為 OOO 元！`,
        icon: 'success',
        confirmButtonColor: '#F67599',
        confirmButtonText: '回首頁'
      }).then(() => {
        // 送出訂單後，清空資料
        this.$router.push({ name: '1' })
        this.currentStep = 1
        this.userInfo =  {
          gender: '先生',
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
      })
    }
  }
}
</script>