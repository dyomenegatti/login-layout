<template>
    <h2>{{ title }}</h2>
</template>

<script>
export default {
    name: 'Title',
    props: {
        title: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/style.scss';

h2 {
  font-weight: 600;
  margin-bottom: 2rem;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    height: 4px;
    width: 25px;
    bottom: 3px;
    left: 0;
    border-radius: 8px;
    background: $color-linear;
  }
}
</style>