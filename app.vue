<template>
  <div class="flex flex-col min-h-screen">
    <header class="bg-green-200 p-4 text-center">
      <h1 class="text-6xl font-bold font-serif">Header bar from Layout</h1>
      <div class="flex justify-center gap-4">
        <NuxtLink v-for="page in pages" :key="page.name" :to="page.path"
          >{{ page.name }} demo</NuxtLink
        >
      </div>
    </header>
    <main class="flex-1 p-4 bg-purple-400 text-gray-100">
      <NuxtPage />
    </main>
    <footer class="p-4 text-center bg-slate-900 text-gray-100">
      Footer bar from Layout
    </footer>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();
const pages = router.getRoutes();
</script>
