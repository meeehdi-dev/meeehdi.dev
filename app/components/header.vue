<script setup lang="ts">
const navigationItems = ref([
  { label: "/home", to: "/", icon: "lucide:home" },
  { label: "/projects", to: "/projects", icon: "lucide:folders" },
  { label: "/resume", to: "/resume", icon: "lucide:file-text" },
  { label: "/contact", to: "/contact", icon: "lucide:message-circle" },
]);
</script>

<template>
  <UHeader mode="drawer">
    <template #title>
      <div class="flex gap-2 items-center">
        <img src="/kokoro-soft.png" class="h-16 p-1 drop-shadow-sm light:drop-shadow-primary" />
        <span class="text-4xl lg:text-7xl">meeehdi.dev</span>
      </div>
    </template>
    <template #right>
      <UNavigationMenu
        :items="navigationItems"
        :ui="{ linkLeadingIcon: 'size-4', root: 'hidden lg:flex' }"
      />
      <ColorModeToggle class="hidden lg:flex" />
    </template>
    <template #body>
      <UNavigationMenu
        :items="navigationItems"
        :ui="{ linkLeadingIcon: 'size-4' }"
        orientation="vertical"
      />
      <ColorModeToggle tooltip />
    </template>
  </UHeader>
</template>
