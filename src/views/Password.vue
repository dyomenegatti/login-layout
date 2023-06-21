<template>
    <div class="password">
      <router-link to="/address" class="btn-back"><i class="fa-solid fa-arrow-left"></i></router-link>
      <Title
        :title="title"
      ></Title>
      <h3>Password</h3>
      <span>Please create a secure password.</span>
      <ul>
        <li><i class="fa-solid fa-circle-check"></i>8 characters minimum</li>
        <li><i class="fa-solid fa-circle-check"></i>1 special character</li>
        <li><i class="fa-solid fa-circle-check"></i>1 capital letter</li>
        <li><i class="fa-solid fa-circle-check"></i>1 number</li>
      </ul>
      <form @submit.prevent="save">
        <InputBase
          type="password"
          placeholder="password"
          v-model="password"
          field="newInput"
        ></InputBase>  
        <InputBase
          type="password"
          placeholder="confirm password"
          v-model="confirm"
          field="newInput"
        ></InputBase>
        
        <router-link to="/success">
          <ButtonBase
            titleButton="finish"
            type="standard"
            class="btn"
          ></ButtonBase>
        </router-link>
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
        password: '',
        confirm: ''
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
  
.password {
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
  
    span {
      font-size: 0.8rem;
    }
  
    ul li {
      list-style-type: none;
      font-size: 0.8rem;
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