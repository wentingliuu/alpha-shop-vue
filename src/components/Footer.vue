<template>
  <footer>
    <div class="container">
      <router-link to="/" class="footer__brand"></router-link>
      
      <div class="footer__content">
        <div
          v-for="content in footerContents"
          :key="content.id"
          class="footer__list"
        >
          <h2 class="footer__subtitle">{{ content.title }}</h2>
          <div class="footer__items">
            <router-link
              to="/"
              class="footer__link"
              v-for="(content, index) in content.contents"
              :key="index"  
            >
              {{ content }}
            </router-link>
          </div>
        </div>

        <div class="footer__list">
          <h2 class="footer__subtitle">追蹤 ALPHA Shop</h2>
          <div class="footer__items">
            <router-link to="/" class="footer__link footer__link--phone">+886 02123-45678</router-link>
            <div class="footer__item">
              <router-link to="/" class="footer__icon--fb"></router-link>
              <router-link to="/" class="footer__icon--ig"></router-link>
              <router-link to="/" class="footer__icon--wa"></router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template> 

<script>
export default {
  name: 'Footer',
  data() {
    return {
      footerContents: [
        {
          id: 1,
          title: '客戶服務',
          contents: ['運送說明', '退換貨相關', '付款資訊', 'FAQ']
        },
        {
          id: 2,
          title: '關於我們',
          contents: ['品牌故事', '媒體聯繫', 'Press Kit']
        },
        {
          id: 3,
          title: '資訊',
          contents: ['隱私權政策', 'Cookie', 'GDPR']
        }
      ]
    }
  }
}
</script>