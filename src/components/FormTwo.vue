<template>
  <div class="form__part part__two">
    <h2 class="form__title">運送方式</h2>
    <div class="form__row--shipping">
      <input v-model="userInfo.shipping" type="radio" data-fee="0" name="shipping__type" value="0" id="standard">
      <label for="standard">
        <div class="shipping__des">
          <span class="shipping__subtitle">標準運送</span>
          <span class="shipping__time">約 3-7 個工作天</span>
        </div>
        <div class="shipping__fee">免費</div>
      </label>
    </div>
    <div class="form__row--shipping">
      <input v-model="userInfo.shipping" type="radio" data-fee="500" name="shipping__type" value="500" id="express">
      <label for="express">
        <div class="shipping__des">
          <span class="shipping__subtitle">DHL 貨運</span>
          <span class="shipping__time">48 小時內送達</span>
        </div>
        <div class="shipping__fee">$500</div>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormTwo',
  props: {
    initialUserInfo: {
      type: Object,
      default: () => ({
        shipping: ''
      })
    }
  },
  data() {
    return {
      userInfo: this.initialUserInfo
    }
  }
}
</script>