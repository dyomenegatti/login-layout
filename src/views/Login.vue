<template>
    <div class="form-login">
        <Title :title="title"></Title>

        <form @submit.prevent="save">
            <InputBase
                type="username"
                placeholder="username/email"
                v-model="user.username"
            ></InputBase>

            <InputBase
                type="password"
                placeholder="password"
                v-model="user.password"
            ></InputBase>

            <ButtonBase
                titleButton="sing in"
                type="standard"
            ></ButtonBase>
        </form>

        <div class="underline"></div>

        <p class="create-account">Or <router-link to="/new-account">create a account</router-link></p>
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
            title: 'Login',
            users: [],
            user: {
                username: '',
                password: ''
            }
        }
    },
    methods: {
        save() {
            if(this.user.username === null && this.user.password === null) {
                console.log('passou aqui');
            } else {
                console.log('passou aqui na verdade')
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/style.scss';
.form-login {
  background-color: $primary;
  width: 400px;
  height: 400px;
  border-radius: 8px;
  color: $tertiary;
  padding: 3rem;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);

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
  }

  .underline {
    width: 100%;
    border: 1px solid $secondary;
    margin-top: 20px;
  }

  .create-account {
    text-align: center;
    font-size: 0.8rem;
    margin-top: 20px;
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