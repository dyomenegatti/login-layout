<template>
    <div class="address">
      <router-link to="/new-account" class="btn-back"><i class="fa-solid fa-arrow-left"></i></router-link>
      <Title
        :title="title"
      ></Title>
      <h3>Address</h3>
      <form @submit.prevent="save">
        <InputBase
          type="text"
          placeholder="zip code"
          v-model="zipCode"
          field="searchCep"
        ></InputBase> 
        <InputBase
          type="text"
          placeholder="address"
          v-model="address"
          field="newInput"
        ></InputBase>  
        <InputBase
          type="text"
          placeholder="complement"
          v-model="complement"
          field="newInput"
        ></InputBase>  
        <InputBase
          type="text"
          placeholder="city"
          v-model="city"
          field="newInput"
        ></InputBase>  
  
        <div class="btn">
          <router-link to="/new-account">
            <ButtonBase
              titleButton="cancel"
              type="cancel"
            ></ButtonBase>
          </router-link>
          <router-link to="/password">
            <ButtonBase
              titleButton="continue"
              type="standard"
            ></ButtonBase>
          </router-link>
        </div>
      </form>
    </div>
</template>
  
<script>
import Title from '@/components/Title.vue';
import InputBase from '@/components/Input.vue';
import ButtonBase from '@/components/Button.vue';

export default {
    components: { Title, InputBase, ButtonBase },
    data: () => {
      return {
        title: 'Create Account',
        zipCode: '',
        address: '',
        complement: '',
        city: ''
      }
    },
    methods: {
      save() {
        console.log('passou aqui');
      }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/style.scss';

.address {
    background-color: $primary;
    width: 400px;
    height: 450px;
    border-radius: 8px;
    color: $tertiary;
    padding: 3rem;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
  
    .btn-back {
      color: $tertiary;
      cursor: pointer;
    }
  
    h3 {
      font-weight: 600;
      font-size: 0.9rem;
    }
  
    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .input-field {
        width: 100%;
        border-radius: 8px;
        background-color: $secondary;
        padding: 10px;
        margin: 0px 0px 5px -5px;
      }
  
      .btn {
        display: flex;
        align-self: flex-end;
        :first-child {
          padding-right: 5px;
        }
      }
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
</style>