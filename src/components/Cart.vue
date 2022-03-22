<template>
  <div id="cart" class="cart">
    <h3 class="cart__title">購物籃</h3>
    <!-- cart items -->
    <div id="cart__items" class="cart__items scrollbar">
      <div
        v-for="product in products"
        :key="product.id"
        class="cart__item"
      >
        <img :src="product.img" alt="product image" class="item__img">
        <div class="item__info">
          <div class="item__detail">
            <span class="item__name">{{product.name}}</span>
            <div class="item__quantity">
              <div @click="minus(product)" class="item__quantity--btn item__quantity--minus">－</div>
              <span class="item__quantity--number">{{product.quantity}}</span>
              <div @click="add(product)" class="item__quantity--btn item__quantity--plus">＋</div>
            </div>
          </div>
          <span class="item__price">{{ product.price * product.quantity | formatter }}</span>
        </div>
      </div>
    </div>
    <!-- cart charge -->
    <div class="cart__shipping">
      <h5 class="cart__shipping--subtitle">運費</h5>
      <h5 class="cart__shipping--fee">{{ shippingFee | priceTag }}</h5>
    </div>
    <div class="cart__sum">
      <h5 class="cart__sum--subtitle">小計</h5>
      <h5 class="cart__sum--price">{{ calcTotal | formatter }}</h5>
    </div>
  </div>
</template>

<script>
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0
})

export default {
  name: 'Cart',
  props: {
    shippingFee: {
      type: Number,
      required: true
    },
    initialTotalAmount: {
      type: Number,
      required: true
    },
    initialProducts: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      products: this.initialProducts,
      totalAmount: this.initialTotalAmount
    }
  },
  computed: {
    calcTotal: function () {
      const total = this.products.reduce((prev, current) => {
        return (prev.price * prev.quantity) + (current.price * current.quantity)
      })
      const totalAmount = total + this.shippingFee
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.totalAmount = totalAmount
      return totalAmount
    },
  },
  methods: {
    add(product) {
      this.products[product.id-1].quantity++
    },
    minus(product) {
      if (this.products[product.id-1].quantity < 1) {
        return;
      } else {
        this.products[product.id-1].quantity--
      }
    }
  },
  filters: {
    priceTag(price) {
      if (Number(price) === 0) {
        return '免費'
      } else {
        return '$500'
      }
    },
    formatter(price) {
      return formatter.format(price)
    }
  },
  watch: {
    totalAmount() {
      this.$emit('change-total-amount', this.totalAmount)
    }
  }
}
</script>