<template>
  <div id="stepper" class="stepper">
    <div 
      class="step"
      :class="{active: currentStep === 1, checked: currentStep > 1}"
    >
      <div class="step__circle"></div>
      <h4 class="step__label">寄送地址</h4>
    </div>
    <span class="step__line"></span>
    <div 
      class="step"
      :class="{active: currentStep === 2, checked: currentStep > 2}"
    >
      <div class="step__circle"></div>
      <h4 class="step__label">運送方式</h4>
    </div>
    <span class="step__line"></span>
    <div 
      class="step"
      :class="{active: currentStep === 3}"
    >
      <div class="step__circle"></div>
      <h4 class="step__label">付款資訊</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Stepper',
  props: {
    currentStep: {
      type: Number,
      required: true
    }
  }
}
</script>