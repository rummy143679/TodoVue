<template>
    <div class="container d-flex justify-content-center align-items-center" style="min-height: 100vh;">
        <div class="row justify-content-center">
          <div class="col-md-12">
            <div class="card">
              <div class="card-body text-center">
                <h5 class="card-title">Register Here</h5>
                <form class="form-group">
                  <input class="form-control my-2" type="text" v-model="register.UserName" placeholder="Name" />
                  <input class="form-control my-2" type="text" v-model="register.UserEmail" placeholder="Email" />
                  <input class="form-control my-2" placeholder="Password" v-model="register.UserPassword" />
                  <input class="form-control my-2" type="text" placeholder="Confirm password" v-model="register.UserConfirmPassword" />
                  <button class="btn btn-success" @click="registerSubmit">Register</button>
                  <p class="text-center">Don't have an account? <strong @click="registerClick"><router-link to="/login">Loggin here </router-link></strong></p>
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
            register:{
                UserName:'',
                UserEmail:'',
                UserPassword:'',
                UserConfirmPassword:'',
            }

        }
    },
    methods: {
        registerSubmit(){
            if( this.register.UserConfirmPassword != '' && this.register.UserPassword != '' && this.register.UserEmail != '' && this.register.UserName != ''){
                if(this.register.UserConfirmPassword === this.register.UserPassword){
                    axios.post('/api/Users',this.register).then(res => {
                        if(res.status == 200){
                            Object.assign(this.$data.register, 
                            {
                                UserName:'',
                                UserEmail:'',
                                UserPassword:'',
                                UserConfirmPassword:'',
                            }
                            )
                            alert("Register Successfull");
                            this.$router.push("/login")
                        }else{
                            alert("Registation not completed")
                        }
                    }
                    )
                }else{
                    alert("password miss match");
                }
            }else{
                alert("Some fields are missing");
            }
        },
        loginClick(){
            this.$router.push("/login")
        }
    }
}
</script>