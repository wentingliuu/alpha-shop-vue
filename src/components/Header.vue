<template>
  <header>
    <div class="container">
      <router-link
      to="/"
      class="nav__brand"
      >
      </router-link>
      <!-- nav toggle -->
      <input type="checkbox" class="nav__toggle" id="nav__toggle" />
      <label class="nav__toggle__label" for="nav__toggle">
        <span class="nav__toggle__btn"></span>
      </label>
      <!-- nav bar -->
      <nav class="nav">
        <!-- nav list -->
        <ul class="nav__list">
          <li 
            v-for="tab in tabs"
            :key="tab.id"
            class="nav__item"
          >
            <router-link
              to="/"
              class="nav__link"
            >
              {{ tab.name }}
            </router-link>
          </li>
        </ul>
        <!-- nav icons -->
        <div class="nav__icons">
          <a class="nav__icon--search"></a>
          <a class="nav__icon--cart"></a>
          <a @click="toggleDarkMode" class="nav__icon--mode"></a>
        </div>
      </nav>
    </div>
  </header>
</template> 

<script>
export default {
  name: 'Header',
  data() {
    return {
      tabs: [
        {
          id: 1,
          name: '男款'
        },
        {
          id: 2,
          name: '女款'
        },
        {
          id: 3,
          name: '最新消息'
        },
        {
          id: 4,
          name: '客製商品'
        },
        {
          id: 5,
          name: '聯絡我們'
        }
      ],
      darkMode: false
    }
  },
  methods: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode
    }
  },
  watch: {
    darkMode: function () {
      if (this.darkMode) {
        document.documentElement.setAttribute('data-theme', 'dark')
      } else {
        document.documentElement.setAttribute('data-theme', 'light')
      }
    }
  }
}
</script>