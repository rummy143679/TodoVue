<template>
  <router-view/>
    <div class="login">
      <div>
        <h6>Enter Login Detaild</h6>
        <input type="text" v-model="loginInfo.UserEmail" value="email" placeholder="Email" />
        <br><br/>
        <input type="text" v-model="loginInfo.UserPassword" value="password" placeholder="Password" />
        <br><br/>
        <button class="btn btn-success" @click="onLogin" >Login</button>
        <p>Dont have account ?<strong @click="registerClick"><a>Register here!</a></strong></p>
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