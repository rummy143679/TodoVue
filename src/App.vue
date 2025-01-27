<template>
  <nav v-if="displayNavbar" class="navbar navbar-expand-lg navbar-light bg-info px-1">
    <router-link to="/home" class="navbar-brand">TODO </router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggle" aria-controls="navbarToggle" aria-label="Toggle navigation" aria-expanded="false">
      <span class="navbar-toggler-icon"></span>
    </button>
     <div class="collapse navbar-collapse w-100 justify-content-between" id="navbarToggle">
      <ul class="navbar-nav">
        <li class="nav-item mx-3">
          <router-link to="/home" class="navbar-link">Home</router-link>
        </li>
        <li class="nav-item mx-3">
          <router-link to="/about" class="navbar-link">about</router-link>
        </li>
        <li class="nav-item dropdown">
          <router-link class="dropdown-toggle mx-3" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categories</router-link>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item">Action</a></li>
            <li><a class="dropdown-item">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item">Something else here</a></li>
          </ul>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0 d-flex flex-row">
        <input class="form-control mr-sm-2 mx-2" type="search" placeholder="Search" />
        <button class="btn btn-outline-success" type="search" >search</button>
      </form>
      <!-- Profile Dropdown -->
    <div class="dropdown">
      <a
        href="#"
        id="profileDropdown"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <!-- Circular Profile Image -->
        <img
          src="../src/assets/logo.png"
          alt="Profile"
          class="rounded-circle bg-success"
          style="width: 40px; height: 40px; object-fit: cover;"
        />
      </a>
      <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="profileDropdown">
        <li><a class="dropdown-item">Profile</a></li>
        <li><a class="dropdown-item">Settings</a></li>
        <li><hr class="dropdown-divider" /></li>
        <li><a class="dropdown-item" @click="logout">Logout</a></li>
      </ul>
    </div>
     </div>
  </nav>
  <router-view/>
</template>

<script>

export default {
  data(){
    return {
      navbar: false,
    }
  },
  computed : {
    displayNavbar(){
      return this.$store.state.login.accessed;
    }
  }
}
</script>


<style>
</style>
