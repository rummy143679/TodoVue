<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1>This is an home page</h1>
    <p>{{ name }}</p>
    <p>{{Data}}</p>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  // components: {
  //   HelloWorld
  // },
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
      console.log("ygiugy")
      try {
        const response = await fetch(`/api/Todo`); // Replace with your API endpoint
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
