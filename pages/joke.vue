<template>
  <div class="text-purple-600">
    <section>
      <h2 class="font-bold text-3xl text-purple-800">Counter</h2>
      <p class="text-xl">{{ count }}</p>
    </section>
    <section>
      <h2 class="font-bold text-3xl text-purple-800">Dad joke</h2>
      <pre v-if="status === 'pending'">Waiting…</pre>
      <pre v-else-if="error">{{ error }}</pre>
      <p class="text-purple-600 text-xl" v-else>{{ data?.joke }}</p>
      <button
        class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        @click="() => refresh()"
      >
        refresh
      </button>
    </section>
  </div>
</template>
<script setup lang="ts">
const count = ref(0);
let interval: number;
onMounted(() => {
  interval = window.setInterval(() => {
    count.value += 1;
  }, 1000);
});
onUnmounted(() => {
  if (interval) {
    window.clearInterval(interval);
  }
});

const { data, error, status, refresh } = await useDadJoke();
</script>
