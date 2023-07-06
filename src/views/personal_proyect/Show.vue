<template>
  <div class="home">
    <NavBar />
		<main>
      <section class="relative block" style="height: 500px;">
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          style='background-image: url("https://c8.alamy.com/compes/e843r1/patron-de-vectores-geometricos-perfecta-para-textura-abstracta-wallpapers-y-antecedentes-e843r1.jpg");'
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
              <ModalCart />         
              <div class="mt-10 py-10 border-t border-gray-300 text-center">
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
import ModalCart from '@/components/personal_proyect/ModalCart.vue'

export default {
  name: 'DashboardIndex',
  components: {
    NavBar,
    ModalForm,
    ModalCart
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
  
  