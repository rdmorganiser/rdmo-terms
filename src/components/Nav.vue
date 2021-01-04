<template>
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
    <NavLink class="navbar-brand" href="#" data-route="/">rdmo-terms</NavLink>

    <button class="navbar-toggler" type="button"
            data-toggle="collapse" data-target="#navbarContent"
            aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarContent">
      <ul class="navbar-nav">
        <li class="nav-item">
          <NavLink class="nav-link" href="#" data-route="/questions">Questions</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" href="#" data-route="/domain">Domain</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" href="#" data-route="/options">Options</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" href="#" data-route="/conditions">Conditions</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" href="#" data-route="/tasks">Tasks</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" href="#" data-route="/views">Views</NavLink>
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
