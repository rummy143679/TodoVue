<template>
  <div class="container d-flex justify-content-center align-items-center" style="min-height: 100vh;">
    <div class="row justify-content-center">
      <div class="col-md-12">
        <div class="card">
          <div class="card-body text-center">
            <h5 class="card-title">Enter Login Details</h5>
            <form class="form-group">
              <input class="form-control my-2" type="text" v-model="loginInfo.UserEmail" placeholder="Email" />
              <input class="form-control my-2" type="text" v-model="loginInfo.UserPassword" placeholder="Password" />
              <button class="btn btn-success" @click="onLogin">Login</button>
              <p class="text-center">Don't have an account? <strong @click="registerClick"><router-link to="/register">Register here </router-link></strong></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
    data(){
        return{
            showAlert: false,
            loginInfo: {
              UserEmail:'',
              UserPassword: '',
            }
        }
    },
    methods:{
        onLogin(){
            if(this.loginInfo.UserEmail != '' && this.loginInfo.UserPassword != ''){
              axios.post(`/api/login`,this.loginInfo).then(res => {
                if(res.status == 200 &&  res.data.dataSaved){
                  this.$store.dispatch("logedIn",{ access : true })
                  alert(`your login success ${res.data.data.userName} click ok`);
                  this.$router.push("/home")
                }else{
                  alert("Login faild.If you dont have account Register your account");
                }
              });
            }else{
              alert("Fill the field");
            }
        },
        registerClick(){
          this.$router.push(`/register`)
        }
    }
}
</script>
<style scoped>
  .submit-button{
    width:5rem;
    margin-left: 80px;
  }
</style>