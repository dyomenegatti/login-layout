<template>
    <div>
        <button
            v-if="type == 'standard'"
            ref="newButton"
            @click="onClick"
            :class="['new-button', classCustom]"
        >
            <p>{{ titleButton }}</p>
        </button>

        <button
            v-if="type == 'cancel'"
            ref="newButton"
            @click="onClick"
            :class="['new-button__cancel', classCustom]"
        >
            <p>{{ titleButton }}</p>
        </button>
    </div>
</template>

<script>
export default {
    name: 'ButtonBase',
    props: {
        type: {
            type: String,
            default: ''
        },
        titleButton: {
            type: String,
            default: ''
        },
        classCustom: {
            type: String,
            default: ''
        }
    },
    methods: {
        onClick() {
            this.$emit('click');
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/style.scss';

.new-button {
  background: $color-linear;
  color: $primary;
  border: none;
  border-radius: 6px;
  padding: 10px;
  font-size: 1rem;
  font-weight: 600;
  margin-top: 20px;
  position: relative;
  cursor: pointer;
}

.new-button__cancel {
    background-color: $secondary;
    color: $primary;
    border: none;
    border-radius: 6px;
    padding: 10px;
    font-size: 1rem;
    font-weight: 600;
    margin-top: 20px;
    position: relative;
    cursor: pointer;
}
</style>