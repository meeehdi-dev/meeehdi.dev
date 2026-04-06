<template>
  <UPageSection title="Contact" :ui="{ body: 'md:mt-8' }">
    <template #description>
      <USeparator class="mb-4 md:mb-8" />
      <div class="flex items-center justify-center gap-4">
        <ULink href="https://www.linkedin.com/in/mehdi-mhiri/" target="_blank">
          <img src="/linkedin.svg" class="h-6 cursor-pointer object-contain hover:brightness-80" />
        </ULink>
        <ULink href="https://www.malt.fr/profile/mehdimhiri" target="_blank">
          <img
            src="/malt.png"
            class="h-6 cursor-pointer object-contain brightness-1000 saturate-0 hover:brightness-200"
          />
        </ULink>
        <ULink
          href="https://app.comet.co/freelancer/profile/Mvbm94EbYA?params=eyJhbm9ueW1pemUiOmZhbHNlLCJkZXNpZ25Nb2RlIjpmYWxzZSwicmVhZE9ubHkiOnRydWV9"
          target="_blank"
        >
          <img src="/comet.svg" class="h-6 cursor-pointer object-contain hover:brightness-80" />
        </ULink>
      </div>
    </template>
    <template #body>
      <USeparator icon="lucide:mail" size="sm" class="mb-4 md:mb-8" type="dashed" />
      <ContactForm />
    </template>
  </UPageSection>
</template>
