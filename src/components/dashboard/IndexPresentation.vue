<template>
  <div class="flex flex-col items-center justify-center p-8">
    <section class="mb-8">
      <!-- Título -->
      <h2 class="text-3xl font-bold">Bienvenido a l portafolio web de </h2>
      <h2 class="text-3xl font-bold">Juan Felipe Ruiz</h2>
    </section>
    <section class="mb-8">
      <!-- Descripción -->
      <p class="text-lg">Descripción de la sección.</p>
    </section>
    <section>
      <!-- Área con dos botones -->
      <div class="flex space-x-4">
        <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Botón 1</button>
        <button class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Botón 2</button>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'IndexPresentation',
  };
</script>