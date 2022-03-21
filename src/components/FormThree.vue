<template>
  <div class="form__part part__three">
    <h2 class="form__title">付款資訊</h2>
    <div class="form__row--payname">
      <label for="pay_name">持卡人姓名</label>
      <input v-model="userInfo.payname" name="pay_name" id="pay_name" type="text" placeholder="WenTing Liu">
    </div>
    <div class="form__row--paycard">
      <label for="pay_card">卡號</label>
      <input v-model="userInfo.paycard" name="pay_card" id="pay_card" type="text" placeholder="1111 2222 3333 4444">
    </div>
    <div class="form__row--payexp">
      <label for="pay_exp">有效期限</label>
      <input v-model="userInfo.payexp" name="pay_exp" id="pay_exp" type="text" placeholder="MM/YY">
    </div>
    <div class="form__row--paycode">
      <label for="pay_code">CVC / CCV</label>
      <input v-model="userInfo.paycode" name="pay_code" id="pay_code" type="text" placeholder="000">
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormThree',
  props: {
    initialUserInfo: {
      type: Object,
      default: () => ({
        payname: '',
        paycard: '',
        payexp: '',
        paycode: ''
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