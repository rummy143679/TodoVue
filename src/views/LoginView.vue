<template>
    <div class="login">
      <div>
        <h6>Enter Login Detaild</h6>
        <input type="text" v-model="loginInfo.UserEmail" value="email" placeholder="Email" />
        <br><br/>
        <input type="text" v-model="loginInfo.UserPassword" value="password" placeholder="Password" />
        <br><br/>
        <button class="btn btn-success" @click="onLogin" >Login</button>
        <p>Dont have account ?<strong><a>Register here!</a></strong></p>
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
            // console.log(this.showAlert)
            // this.showAlert = true;
            // alert(this.email+" "+ this.password)
            if(this.loginInfo.UserEmail != '' && this.loginInfo.UserPassword != ''){
              axios.post(`/api/login`,this.loginInfo).then(res => {
                if(res.status == 200 &&  res.data.dataSaved){
                  alert("Login Success");
                  this.$router.push("/home")
                }else{
                  alert("Login faild");
                }
              });
            }else{
              alert("Fill the field");
            }
        }
    }
}
</script>