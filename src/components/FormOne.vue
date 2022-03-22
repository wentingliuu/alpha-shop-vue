<template>
  <div class="form__part part__one">
    <h2 class="form__title">寄送地址</h2>
    <div class="form__row--gender">
      <label for="gender">稱謂</label>
      <div class="select-wrapper">
        <select v-model="userInfo.gender" name="gender" id="gender" required>
          <option value="先生">先生</option>
          <option value="小姐">小姐</option>
        </select>
      </div>
    </div>
    <div class="form__row--name">
      <label for="name">姓名</label>
      <input v-model="userInfo.name" name="name" id="name" type="text" placeholder="請輸入姓名">
    </div>
    <div class="form__row--phone">
      <label for="phone">電話</label>
      <input v-model="userInfo.phone" name="phone" id="phone" type="number" placeholder="請輸入行動電話">
    </div>
    <div class="form__row--email">
      <label for="email">Email</label>
      <input v-model="userInfo.email" name="email" id="email" type="email" placeholder="請輸入電子郵件">
    </div>
    <div class="form__row--city">
      <label for="city">縣市</label>
      <div class="select-wrapper">
        <select v-model="userInfo.city" name="city" id="city" required>
          <option value="" disabled selected>請選擇縣市</option>
          <option
            v-for="(city, index) in cities"
            :key="index"
            :value="city"
          >
            {{ city }}
          </option>
        </select>
      </div>
    </div>
    <div class="form__row--address">
      <label for="address">地址</label>
      <input v-model="userInfo.address" name="address" id="address" type="text" placeholder="請輸入地址">
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormOne',
  props: {
    initialUserInfo: {
      type: Object,
      default: () => ({
        gender: '',
        name: '',
        phone: '',
        email: '',
        city: '',
        address: ''
      })
    }
  },
  data() {
    return {
      cities: [
        '基隆市',
        '台北市',
        '新北市',
        '桃園市',
        '新竹市',
        '新竹縣',
        '苗栗市',
        '台中市',
        '彰化縣',
        '南投縣',
        '雲林縣',
        '嘉義市',
        '嘉義縣',
        '台南市',
        '高雄市',
        '屏東縣',
        '宜蘭縣',
        '花蓮縣',
        '台東縣',
        '澎湖縣',
        '金門縣',
        '連江縣'
      ],
      userInfo: this.initialUserInfo
    }
  }
}
</script>