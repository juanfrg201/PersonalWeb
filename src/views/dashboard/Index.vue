<template>
  <div class="home">
    <NavBar />
		<main>
      <section class="relative block" style="height: 500px;">
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          style='background-image: url("https://images.unsplash.com/photo-1528484701073-2b22dc76649e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80");'
        >
          <span
            id="blackOverlay"
            class="w-full h-full absolute opacity-50 bg-black"
          ></span>
        </div>
        <div
          class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
          style="height: 70px;"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </section>
      <section class="relative py-16 bg-gray-300">
        <div class="container mx-auto px-4">
          <div
            class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64"
          >
            <div class="px-6">
              <ModalForm />
              <div class="text-center mt-12">
                <h3
                  class="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2"
                >
                  Juan Felipe Ruiz
                </h3>
                <div
                  class="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase"
                >
                  <i
                    class="fas fa-map-marker-alt mr-2 text-lg text-gray-500"
                  ></i>
                  Bogota Colombia
                </div>
                <div class="mb-2 text-gray-700 mt-10">
                  <i class="fas fa-briefcase mr-2 text-lg text-gray-500"></i
                  >Software Developer
                </div>
                <div class="mb-2 text-gray-700">
                  <i class="fas fa-university mr-2 text-lg text-gray-500"></i
                  >Universidad el Bosque
                </div>
              </div>
              <div class="mt-10 py-10 border-t border-gray-300 text-center">
                <div class="flex flex-wrap justify-center">
                  <div class="w-full lg:w-9/12 px-4">
                    <p class="mb-4 text-lg leading-relaxed text-gray-800">
											Bilingual Systems Engineering student. Experience in software development in frameworks, 
                      (ruby on rails, vue.js and python flask) and Frontend management (Html, CSS and JavaScript, management 
                      of libraries such as tailwind and bulma). Knowledge in database management in postgresql and Mysql. Application 
                      of agile methodologies such as SCRUM and Kanban. Development with MVC structure and handling of API and 
                      monolithic architectures. Experience using Sidekiq, Heroku, Rollbar and test manager using RSpec under ruby on rails.
                       Results and learning oriented, ability to work in a team, good interpersonal and 
                      communication skills. Easy to analyze and solve problems, ability to adapt to new work environments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
	</div>
</template>

<script>
// @ is an alias to /src

import NavBar from '@/components/NavBar.vue'
import ModalForm from '@/components/ModalForm.vue'

export default {
  name: 'DashboardIndex',
  components: {
    NavBar,
    ModalForm
  }
}
</script>

<style scoped>
  .margin-content {
    display: flex;
    margin-top: 6rem;
    align-items: center;
    margin-left: 4rem;
  }
</style>
  