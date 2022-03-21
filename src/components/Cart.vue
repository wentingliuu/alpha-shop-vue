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
              <div class="item__quantity--btn item__quantity--minus">－</div>
              <span class="item__quantity--number">{{product.quantity}}</span>
              <div class="item__quantity--btn item__quantity--plus">＋</div>
            </div>
          </div>
          <span class="item__price">{{product.tag}}</span>
        </div>
      </div>
    </div>
    <!-- cart charge -->
    <div class="cart__shipping">
      <h5 class="cart__shipping--subtitle">運費</h5>
      <h5 class="cart__shipping--fee">免費</h5>
    </div>
    <div class="cart__sum">
      <h5 class="cart__sum--subtitle">小計</h5>
      <h5 class="cart__sum--price">$5,298</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  data() {
    return {
      products: [
        {
          id: 1,
          name: '破壞補丁修身牛仔褲',
          img: require('../assets/images/product-1@3x.png'),
          tag: '$3,999',
          price: 3999,
          quantity: 1
        },
        {
          id: 2,
          name: '刷色直筒牛仔褲',
          img: require('../assets/images/product-2@3x.png'),
          tag: '$1,299',
          price: 1299,
          quantity: 1
        }
      ]
    }
  }
}
</script>