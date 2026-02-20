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
      color="primary"
      variant="ghost"
      class="cursor-pointer"
      @click="isDark = !isDark"
    >
      <span v-if="tooltip">{{ isDark ? "++" : "--" }}brightness</span>
    </UButton>
    <template #fallback>
      <div class="w-8 h-8" />
    </template>
  </ClientOnly>
</template>
