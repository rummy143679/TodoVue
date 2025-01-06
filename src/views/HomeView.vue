<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1>This is an home page</h1>
    <p>{{Data}}</p>
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
      name: "Matteda",
      Data: null
    }
  },
  methods: {
    async fetchData(){
      try {
        const response = await fetch(`/api/Users`);
        console.log(response)

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      
        this.Data = await response.json(); // Await the result of res.json()
      } catch (err) {
        this.error = "Failed to fetch data";
        console.error(err); // Log the error for debugging
      }

    }
  }
}
</script>
