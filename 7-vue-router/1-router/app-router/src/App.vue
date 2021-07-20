<template>
  <div id="app">
    <h1>Logo</h1>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/Cursos">Cursos</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

a {
  padding: 10px;
}

.router-link-exact-active {
  color: #84e;
  font-weight: bold;
}
</style>
