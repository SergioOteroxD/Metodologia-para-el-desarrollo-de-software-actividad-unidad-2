<template>
  <nav class="topnav">
    <a href="/">Home</a>
    <a class="active" href="#caja">Caja</a>
    <a href="#ordenes">Ordenes</a>
    <a href="#inventario">Inventario</a>
  </nav>
</template>

<style>
/* Add a black background color to the top navigation */
.topnav {
  background-color: #333;
  overflow: hidden;
  position: sticky;
  top: 0%;
  width: 100%;
}

/* Style the links inside the navigation bar */
.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

/* Change the color of links on hover */
.topnav a:hover {
  background-color: #ddd;
  color: black;
}

/* Add a color to the active/current link */
.topnav a.active {
  background-color: #fa8807;
  color: black;
}
</style>
