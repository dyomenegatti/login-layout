<template>
    <div class="new-account">
      <Title
        :title="title"
      ></Title>
      <h3>Personal data</h3>
      <form @submit.prevent="save">
        <InputBase 
          type="text"
          placeholder="name"
          v-model="name"
          field="newInput"
        ></InputBase>
        <InputBase 
          type="email"
          placeholder="email"
          v-model="email"
          field="newInput"
        ></InputBase>
        <InputBase 
          type="username"
          placeholder="username"
          v-model="username"
          field="newInput"
        ></InputBase>
        <InputBase 
          type="tel"
          placeholder="phone"
          v-model="phone"
          field="newInput"
        ></InputBase>
  
        <div class="btn">
          <router-link to="/">
            <ButtonBase
              titleButton="cancel"
              type="cancel"
            ></ButtonBase>
          </router-link>
          <router-link to="/address">
            <ButtonBase
              titleButton="continue"
              type="standard"
            ></ButtonBase>
          </router-link>
        </div>
      </form>
  
      <p class="sign-in">already have an account? <router-link to="/">sign in</router-link></p>
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
        name: '',
        email: '',
        username: '',
        phone: ''
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
  
.new-account {
    background-color: $primary;
    width: 400px;
    height: 450px;
    border-radius: 8px;
    color: $tertiary;
    padding: 3rem;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
  
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
  
    .sign-in {
      text-align: right;
      font-size: 0.7rem;
      > a {
        text-decoration: none;
        font-weight: bold;
        color: $tertiary;
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