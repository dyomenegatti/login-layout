<template>
    <div class="input-field">
        <input 
            :type="text"
            :value="value"
            :placeholder="placeholder"
        >
    </div>
</template>

<script>
export default {
    name: 'InputBase',
    props: {
        type: {
            type: String, 
            default: ''
        },
        value: {
            type: [String, Number],
            default: ''
        },
        placeholder: {
            type: String,
            default: ''
        }
    },
    data: () => {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/style.scss';

input {
  border: none;
  outline: none;
  background-color: $secondary;
  font-size: 0.9rem;
  padding-left: 10px;
  width: 100%;
}

.error__icon, 
.error__message {
  color: rgba(244, 67, 54, 1);
  font-size: 12px;
}
</style>