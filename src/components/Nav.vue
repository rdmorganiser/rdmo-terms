<template>
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
    <NavLink class="navbar-brand" href="">rdmo-terms</NavLink>

    <button class="navbar-toggler" type="button"
            data-toggle="collapse" data-target="#navbarContent"
            aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarContent">
      <ul class="navbar-nav">
        <li class="nav-item">
          <NavLink class="nav-link" href="questions">Questions</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" href="domain">Domain</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" href="options">Options</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" href="conditions">Conditions</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" href="tasks">Tasks</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" href="views">Views</NavLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  import NavLink from './NavLink'

  export default {
    components: {
      NavLink,
    }
  }
</script>

<style>
  nav.navbar {
    background-color: #101F70;
  }
</style>
