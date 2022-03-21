<template>
  <div id="stepper" class="stepper">
    <div class="step active">
      <div class="step__circle"></div>
      <h4 class="step__label">寄送地址</h4>
    </div>
    <span class="step__line"></span>
    <div class="step">
      <div class="step__circle"></div>
      <h4 class="step__label">運送方式</h4>
    </div>
    <span class="step__line"></span>
    <div class="step">
      <div class="step__circle"></div>
      <h4 class="step__label">付款資訊</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Stepper'
}
</script>