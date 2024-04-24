<template>
  <nav class="bg-stone-300 flex justify-around py-2 font-semibold text-sm">
    <div class="text-center" @click="$emit('filter', 'all')">All products</div>
    <div class="text-center" @click="$emit('filter', 'availables')">
      Availables
    </div>
    <div class="text-center" @click="$emit('filter', 'watches')">
      Watch List
    </div>
  </nav>
</template>
