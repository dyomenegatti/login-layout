<template>
    <div class="success">
      <Title
        :title="title"
      ></Title>
      <div class="circle"></div>
    </div>
  </template>
  
<script>
import Title from '@/components/Title.vue';

export default {
    components: { Title },
    data: () => {
      return {
        title: 'OK'
      }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/style.scss';

.success {
    background-color: $primary;
    width: 400px;
    height: 400px;
    border-radius: 8px;
    color: $tertiary;
    padding: 3rem;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
    position: relative;
  
    .circle {
      position: absolute;
      height: 100%;
      width: 100%;
      background: $color-linear;
      top: 1rem;
      left: 0;
      clip-path: circle(30%);
    }
}

@media screen and (max-width: 400px) {
    .form-login {
        width: 300px;
        height: 400px;
    }
}

@media screen and (max-width: 280px) {
    .form-login {
        width: 250px;
        height: 400px;
    }
}
</style>e