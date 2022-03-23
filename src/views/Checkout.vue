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
              :initial-shipping-fee="shippingFee"
              @change-shipping-fee="changeShippingFee"
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
              v-else-if="currentStep === 3"
              @click.prevent.stop="submitForm"
              class="form__btn--next"
            >
              確認下單
            </button>
          </div>
        </form>
      </div>

      <!-- right part-->
      <div class="main__content__right">
        <Cart 
          :initial-products="products"
          :shipping-fee="shippingFee"
          :initial-total-amount="totalAmount"
          @change-total-amount="changeTotalAmount"
        />
      </div>
    </section>
  </div>
</template>

<script>
import Stepper from '../components/Stepper'
import Cart from '../components/Cart'
import { mapState } from 'vuex'

export default {
  name: 'Checkout',
  components: {
    Stepper,
    Cart
  },
  data() {
    return {
      userInfo: {
        gender: '先生',
        name: '',
        phone: '',
        email: '',
        city: '',
        address: '', 
        payname: '',
        paycard: '',
        payexp: '',
        paycode: ''
      },
      products: [
        {
          id: 1,
          name: '破壞補丁修身牛仔褲',
          img: require('../assets/images/product-1@3x.png'),
          price: 3999,
          quantity: 1
        },
        {
          id: 2,
          name: '刷色直筒牛仔褲',
          img: require('../assets/images/product-2@3x.png'),
          price: 1299,
          quantity: 1
        }
      ],
      shippingFee: 0,
      totalAmount: 5298
    }
  },
  computed: {
    ...mapState(['currentStep'])
  },
  created() {
    this.shippingFee = Number(JSON.parse(localStorage.getItem('shippingFee'))) || 0
    this.totalAmount = Number(JSON.parse(localStorage.getItem('totalAmount'))) || 5298
    this.userInfo = JSON.parse(localStorage.getItem('userInfo')) ? JSON.parse(localStorage.getItem('userInfo')) :  {
        gender: '先生',
        name: '',
        phone: '',
        email: '',
        city: '',
        address: '', 
        payname: '',
        paycard: '',
        payexp: '',
        paycode: ''
      }
    this.products = JSON.parse(localStorage.getItem('products')) || []
  },
  methods: {
    nextStep() {
      this.$router.push({ name: this.currentStep +1 })
    },
    prevStep() {
      this.$router.push({ name: this.currentStep -1 })
    },
    submitForm() {
      console.log(this.userInfo)

      this.$swal.fire({
        title: '訂單已送出！',
        text: `${this.userInfo.name} ${this.userInfo.gender} 感謝您的消費，
        本次結帳金額為 ${this.totalAmount} 元！`,
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
          payname: '',
          paycard: '',
          payexp: '',
          paycode: ''
        }
        this.shippingFee = 0
        this.products.map(product => {
          product.quantity = 1
        })
      })
    },
    changeShippingFee(payload) {
      this.shippingFee = Number(payload)
    },
    changeTotalAmount(payload) {
      this.totalAmount = Number(payload)
    }
  },
  watch: {
    shippingFee: {
      handler: function () {
        localStorage.setItem('shippingFee', JSON.stringify(this.shippingFee))
      }
    },
    totalAmount: {
      handler: function () {
        localStorage.setItem('totalAmount', JSON.stringify(this.totalAmount))
      }
    },
    userInfo: {
      handler: function () {
        localStorage.setItem('userInfo', JSON.stringify(this.userInfo))
      },
      deep: true
    },
    products: {
      handler: function () {
        localStorage.setItem('products', JSON.stringify(this.products))
      },
      deep: true
    }
  }
}
</script>