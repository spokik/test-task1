<template>
  <div id="app">
    <div id="nav">
      <a href="/">Home</a> |
      <a href="/red">red</a> |
      <a href="/yellow">yellow</a> |
      <a href="/green">green</a> |
    </div>
    <router-view/>
  </div>
</template>

<style>
.grey-box {
  background-color: rgba(37, 37, 37, 0.829);
  width: 250px;
  height: 400px;
  margin:0 auto 0;
  padding-bottom: 20px;

}
h1 {
  color:honeydew;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
