<template>
  <div class="container mx-auto py-8 mt-12">
    <div class="flex flex-wrap -mx-4">
      <div class="w-full md:w-1/2 px-4">
        <div class="bg-gray-100 rounded-lg shadow-xl p-6 mb-8">
          <div class="flex flex-col md:flex-row">
            <div class="md:order-2 flex-wrap md:ml-4">
              <!-- Contenido de la primera carta -->
              <h4 class="text-lg font-semibold mb-4">Parkea APP</h4>
              <p class="text-gray-700">Descripción del proyecto 1...</p>
              <h1 class="text-lg font-semibold ">Github Links</h1>
              <p class="text-gray-700">Descripción del proyecto 1...</p>
            </div>
            <div class="md:order-1 md:ml-3 mb-4 md:mb-0">
              <div class="relative">
                <img
                  alt="..."
                  src="@/assets/img/Parkea.jpeg"
                  class="h-auto align-middle border-none rounded-tl-md rounded-tr-md rounded-bl-md rounded-br-md"
                  style="max-width: 150px; min-height: 204px; max-height: 204"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/2 px-4">
        <div class="bg-gray-100 rounded-lg shadow-xl p-6 mb-8">
          <div class="flex flex-col md:flex-row">
            <div class="md:order-2 flex-wrap md:ml-4">
              <!-- Contenido de la primera carta -->
              <h4 class="text-lg font-semibold mb-4">Sistema de pelicula simple</h4>
              <p class="text-gray-700">Descripción del proyecto 1...</p>
              <h1 class="text-lg font-semibold ">Github Links</h1>
              <p class="text-gray-700">Descripción del proyecto 1...</p>
              <!-- Otros elementos de la carta -->
            </div>
            <div class="md:order-1 md:ml-3 mb-4 md:mb-0">
              <div class="relative">
                <img
                  alt="..."
                  src="@/assets/img/personal_photo.jpg"
                  class="h-auto align-middle border-none rounded-tl-md rounded-tr-md rounded-bl-md rounded-br-md"
                  style="max-width: 150px; min-height: 204px; max-height: 204"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
	export default {
		name: 'ModalCart',
	}
</script>