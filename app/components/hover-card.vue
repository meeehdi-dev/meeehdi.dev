<script setup lang="ts">
defineProps<{
  title: string;
  description?: string;
  tools?: string[];
  link?: string;
  image: string;
  light?: boolean;
  dark?: boolean;
}>();
</script>

<template>
  <li class="group relative flex items-center justify-center overflow-hidden rounded-xl">
    <div
      class="dark:bg-neutral-800/98 light:bg-neutral-800/90 absolute inset-0 z-10 flex flex-col justify-between p-4 text-white opacity-100 transition-opacity duration-300 group-hover:opacity-100 md:opacity-0"
    >
      <div>
        <p class="text-4xl">
          {{ title }}
        </p>
        <p class="text-2xl" v-if="description">
          {{ description }}
        </p>
        <p class="text-primary-300 text-sm" v-if="tools">
          {{ tools.join(", ").concat(".") }}
        </p>
      </div>
      <ULink :to="link" target="_blank" v-if="link" class="text-primary-300">
        {{ link }}
      </ULink>
    </div>
    <img
      :src="image"
      :class="{
        'aspect-square h-full w-full scale-110 rotate-3 object-contain grayscale-50 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:grayscale-50 md:scale-100 md:rotate-0 md:grayscale-0': true,
        'light:drop-shadow-sm light:drop-shadow-black/50 p-1': light,
        'dark:invert': dark,
      }"
      :alt="`Logo ${title}`"
    />
  </li>
</template>
