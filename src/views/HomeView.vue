<template>
  <nav>
    <router-link to="/home" class="m-3">Home </router-link>
    <router-link to="/about" class="m-3">About</router-link>
  </nav>
  <router-view/>
  <div class="home">
    <h1>All Users</h1>
     <table class="table table-bordered table-responsive">
      <thead>
        <tr>
          <th>S.No</th>
          <th>Name</th>
          <th>Email</th>
          <th>Password</th>
          <th>Confirm Password</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for=" user in Data" :key="user">
          <td>{{ user.userId }}</td>
          <td>{{ user.userName }}</td>
          <td>{{ user.userEmail}}</td>
          <td>{{ user.userPassword}}</td>
          <td>{{user.userConfirmPassword}}</td>
        </tr>
      </tbody>
     </table>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  created() {
    this.fetchData();
  },
  data(){
    return {
      Data: null
    }
  },
  methods: {
    async fetchData(){
      try {
        const response = await fetch(`/api/Users`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      
        var jsonRes = await response.json(); // Await the result of res.json()
        this.Data = jsonRes.users
      } catch (err) {
        this.error = "Failed to fetch data";
        console.error(err); // Log the error for debugging
      }

    }
  }
}
</script>
