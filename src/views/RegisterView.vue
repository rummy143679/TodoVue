<template>
    <div class="register">
        <h5>Register Here</h5>
        <input type="text" placeholder="Name" v-model="register.UserName" />
        <br><br/>
        <input type="text" placeholder="Email" v-model="register.UserEmail" />
        <br><br/>
        <input type="text" placeholder="Password" v-model="register.UserPassword" />
        <br><br/>
        <input type="text" placeholder="Confirm password" v-model="register.UserConfirmPassword" />
        <br><br/>
        <!-- <input type="radio" v-model="register.gender" /> -->
        <button class="btn btn-success" @click="registerSubmit">Register</button>
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
            // console.log(this.$data.register);
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
                            this.$router.push("/")
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
        }
    }
}
</script>