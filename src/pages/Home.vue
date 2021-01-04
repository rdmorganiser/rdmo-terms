<template>
  <div>
    <Nav />

    <main class="container">
      <h1 class="mt-5 mb-3">rdmo-terms</h1>

      <p>
          RDMO is a tool to support the systematic planning, organisation and implementation of the data management throughout the course of a research project. On this page, we offer a search and filter interface for the central content repository for RDMO located at <a href="https://github.com/rdmorganiser/rdmo-catalog">https://github.com/rdmorganiser/rdmo-catalog</a>.
      </p>

      <div class="card-deck mt-4 mb-4">
        <div class="card">
          <div class="card-header">Questions</div>
          <div class="card-body">
            <p class="text-muted small mb-2">
              Contains:
            </p>
            <ul class="list-unstyled mb-0">
              <li>Catalogs</li>
              <li>Sections</li>
              <li>Question sets</li>
              <li>Questions</li>
            </ul>
          </div>
          <div class="card-footer">
            <NavLink href="./questions">Go to questions</NavLink>
          </div>
        </div>

        <div class="card">
          <div class="card-header">Domain</div>
          <div class="card-body">
            <p class="text-muted small mb-2">
              Contains:
            </p>
            <ul class="list-unstyled mb-0">
              <li>Attributes</li>
            </ul>
          </div>
          <div class="card-footer">
            <NavLink href="./domain">Go to domain</NavLink>
          </div>
        </div>

        <div class="card">
          <div class="card-header">Options</div>
          <div class="card-body">
            <p class="text-muted small mb-2">
              Contains:
            </p>
            <ul class="list-unstyled mb-0">
              <li>Option sets</li>
              <li>Options</li>
            </ul>
          </div>
          <div class="card-footer">
            <NavLink href="./domain">Go to domain</NavLink>
          </div>
        </div>

        <div class="card">
          <div class="card-header">Conditions</div>
          <div class="card-body">
            <p class="text-muted small mb-2">
              Contains:
            </p>
            <ul class="list-unstyled mb-0">
              <li>Conditions</li>
            </ul>
          </div>
          <div class="card-footer">
            <NavLink href="./questions">Go to conditions</NavLink>
          </div>
        </div>

        <div class="card">
          <div class="card-header">Tasks</div>
          <div class="card-body">
            <p class="text-muted small mb-2">
              Contains:
            </p>
            <ul class="list-unstyled mb-0">
              <li>Tasks</li>
            </ul>
          </div>
          <div class="card-footer">
            <NavLink href="./tasks">Go to tasks</NavLink>
          </div>
        </div>

        <div class="card">
          <div class="card-header">Views</div>
          <div class="card-body">
            <p class="text-muted small mb-2">
              Contains:
            </p>
            <ul class="list-unstyled mb-0">
              <li>Views</li>
            </ul>
          </div>
          <div class="card-footer">
            <NavLink href="./views">Go to views</NavLink>
          </div>
        </div>
      </div>

      <p>
        If you have suggestions regarding this page and/or encounter any problems don't hesitate to contact us via slack or mail or file an issue at: <a href="https://github.com/rdmorganiser/rdmo-terms/issues">https://github.com/rdmorganiser/rdmo-terms/issues</a>.
      </p>
    </main>
  </div>
</template>

<script>
  import Nav from '../components/Nav'
  import NavLink from '../components/NavLink'

  export default {
    components: {
      Nav,
      NavLink,
    }
  }
</script>

<style scoped>
.container {
  padding-top: 60px;
  padding-bottom: 60px;
}
</style>
