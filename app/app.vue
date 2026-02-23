<script setup lang="ts">
useHead({
  htmlAttrs: { lang: "fr" },
});
useSeoMeta({
  titleTemplate: (title) => (title ? `${title} - meeehdi.dev` : "meeehdi.dev"),
});
</script>

<template>
  <UApp>
    <Header />

    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>
  </UApp>
</template>
