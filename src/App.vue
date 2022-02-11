<template>
<div>
<!-- <HelloWorld msg="This is Example of Using Data Table in Vue js."/> -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <router-link class="navbar-brand" to="/Home">Navbar</router-link>
 
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link class="nav-link" to="/Home">Home</router-link>
      </li>
      <li class="nav-item ">
        <router-link class="nav-link" to="/Registration">Registration</router-link>
      </li>
      <li class="nav-item ">
        <router-link class="nav-link" to="/FeedBack">FeedBack Form</router-link>
      </li>
      <li class="nav-item ">
        <router-link class="nav-link" to="/Parent">Parent and Child</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/VeeValidate">VeeValidate Page</router-link>
      </li>
    </ul>
  </div>
</nav>
  <!-- <DataTable />-->
  <router-view></router-view> 
  <!-- <DataTable2/> -->
</div>
</template>
<script>
export default{
name:'App',

}
</script>
