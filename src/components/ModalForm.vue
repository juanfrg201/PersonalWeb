<template>
  <div class="flex flex-wrap justify-center">
    <div
      class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center"
    >
      <div class="relative">
        <img
          alt="..."
          src="@/assets/img/FotoJF-CV.png"
          class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
          style="max-width: 150px;"
        />
      </div>
    </div>
    <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
      <div class="py-6 px-3 mt-32 sm:mt-0">
        <a href="https://wa.me/3114768402?text=%C2%A1Hola, quisiera saber mas sobre tu perfil%21" target="_blank" rel="noopener noreferrer"
          class="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
          style="transition: all 0.15s ease 0s;">
          Connect
        </a>
        <a href="https://github.com/juanfrg201" class="bg-gray-500 active:bg-blue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:ml-2 mb-1"
          style="transition: all 0.15s ease 0s;">
          Github
        </a>
      </div>
    </div>
    <div class="w-full lg:w-4/12 px-4 lg:order-1">
      <div class="flex justify-center py-4 lg:pt-4 pt-8">
        <div class="mr-4 p-3 text-center">
          <span
            class="text-xl font-bold block uppercase tracking-wide text-gray-700"
            >6</span
          ><span class="text-sm text-gray-500">Personal Proyects</span>
        </div>
        <div class="mr-4 p-3 text-center">
          <span
            class="text-xl font-bold block uppercase tracking-wide text-gray-700"
            >1</span
          ><span class="text-sm text-gray-500">Experiences</span>
        </div>
      </div>
    </div>
  </div>
    
</template>

<script>
	export default {
		name: 'ModalForm',
	}
</script>