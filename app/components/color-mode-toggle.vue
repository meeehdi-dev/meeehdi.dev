<script setup lang="ts">
const colorMode = useColorMode();
const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  },
});

const { tooltip } = defineProps<{ tooltip?: boolean }>();
</script>

<template>
  <ClientOnly>
    <UButton
      :icon="isDark ? 'lucide:moon' : 'lucide:sun'"
      :ui="{ leadingIcon: 'size-4' }"
      aria-label="Toggle color mode"
      color="primary"
      variant="ghost"
      class="cursor-pointer md:ml-4"
      size="lg"
      @click="isDark = !isDark"
    >
      <span v-if="tooltip">{{ isDark ? "++" : "--" }}brightness</span>
    </UButton>
    <template #fallback>
      <div class="h-8 w-8" />
    </template>
  </ClientOnly>
</template>
