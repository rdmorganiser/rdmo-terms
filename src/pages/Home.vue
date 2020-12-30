<template>
  <div>
    <Nav />

    <main class="container">
      <div class="mt-5">
        <h1>rdmo-terms</h1>

        <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        </p>

        <div class="card-deck mt-3 mb-5">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Questions</h5>
              <p>
                For most users, the structured interview will be the most visible part of RDMO. It is configured using catalogs, sections, questionsets, and questions.
              </p>
              <div class="text-right">
                <NavLink href="/questions" class="btn btn-secondary">Go to questions</NavLink>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Domain</h5>
              <p>
                The domain model is the central part of the data model and connects the questions from the questionnaire with the user input.
              </p>
              <div class="text-right">
                <NavLink href="/domain" class="btn btn-secondary">Go to domain</NavLink>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Options</h5>
              <p>
                Optionsets and options can be connected to questions and tasks to provide controlled vocabularies for users to choose from.
              </p>
              <div class="text-right">
                <NavLink href="/options" class="btn btn-secondary">Go to options</NavLink>
              </div>
            </div>
          </div>
        </div>
        <div class="card-deck mb-5">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Conditions</h5>
              <p>
                Conditions can be connected to questionsets. Conditions control if the questionsets are valid in the current context.
              </p>
              <div class="text-right">
                <NavLink href="/conditions" class="btn btn-secondary">Browse conditions</NavLink>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Tasks</h5>
              <p>
                After filling out the interview, the user will be presented with follow up tasks based on his/her answers.
              </p>
              <div class="text-right">
                <NavLink href="/tasks" class="btn btn-secondary">Browse tasks</NavLink>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Views</h5>
              <p>
                Views allow for custom DMP templates in RDMO. Every view has a template, which can be edited using the Django template syntax.
              </p>
              <div class="text-right">
                <NavLink href="/views" class="btn btn-secondary">Browse views</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
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
