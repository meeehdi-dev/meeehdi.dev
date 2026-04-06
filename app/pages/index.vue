<script setup lang="ts">
useSeoMeta({
  title: "/home",
});
</script>

<template>
  <div>
    <UPageSection orientation="horizontal" :ui="{ container: 'lg:pt-32' }">
      <template #title>
        <div class="flex flex-col items-baseline md:flex-row md:gap-2">
          <span class="whitespace-nowrap">
            Salut
            <Icon name="fa6-solid:hand-peace" class="text-primary size-10"
          /></span>
          <h1 class="whitespace-nowrap">Moi, c'est Mehdi.</h1>
        </div>
      </template>
      <img src="/me.jpeg" class="mx-auto hidden w-1/2 rounded-xl md:flex" alt="Photo de Mehdi" />
      <template #description>
        <div class="flex flex-col gap-2">
          <img src="/me.jpeg" class="mx-auto w-1/2 rounded-xl md:hidden" alt="Photo de Mehdi" />
          <div>
            <p>
              Je développe des applications web depuis plus de 10 ans maintenant, et en tant que
              freelance depuis un peu plus de 3 ans.
            </p>
            <p>
              N'hésite pas à visiter
              <ULink to="/projects">mes projets</ULink> ou <ULink to="/resume">mon cv</ULink> pour
              en savoir plus.
            </p>
            <p class="mt-4 flex justify-center gap-8">
              <ULink to="https://github.com/meeehdi-dev" target="_blank" aria-label="Github">
                <Icon name="fa6-brands:github" class="size-10" />
              </ULink>
              <ULink
                to="https://www.linkedin.com/in/mehdi-mhiri/"
                target="_blank"
                aria-label="Linkedin"
              >
                <Icon name="fa6-brands:linkedin" class="size-10" />
              </ULink>
            </p>
          </div>
        </div>
      </template>
    </UPageSection>

    <UPageSection
      title="Mon expertise"
      :ui="{ features: 'grid-cols-2 md:grid-cols-4 lg:grid-cols-6' }"
    >
      <template #features>
        <HoverCard
          title="NextJS"
          description="Adepte de React et NextJS depuis près de 5 ans."
          image="/nextjs.svg"
          link="https://nextjs.org/"
          class="col-span-2"
          :tools="['Typescript', 'React', 'Node']"
        />
        <HoverCard
          title="Nuxt"
          description="En rodage sur ce framework depuis plus d'un an."
          image="/nuxt.svg"
          link="https://nuxt.com/"
          class="col-span-2"
          :tools="['Typescript', 'Vue', 'Nitro']"
        />
        <HoverCard
          title="NodeJS"
          description="10 ans passés ensemble ! Pour toujours et à jamais."
          image="/nodejs.svg"
          link="https://nodejs.org/"
          class="col-span-2 md:col-start-2 lg:col-start-auto"
          :tools="['Typescript', 'Express']"
        />
      </template>
    </UPageSection>

    <UPageSection
      title="Mes projets marquants"
      :ui="{ features: 'grid-cols-2 md:grid-cols-4 lg:grid-cols-6' }"
    >
      <template #features>
        <HoverCard
          title="LVMH"
          description="Evolution, optimisation et maintien de différents sites de la marque."
          image="/lvmh.svg"
          link="https://www.lvmh.com/"
          class="col-span-2"
          :tools="['NextJS', 'NestJS', 'Prismic']"
          light
        />
        <HoverCard
          title="Nirio (FDJ)"
          description="Création du site web Nirio, et configuration de la base Strapi pour la partie CMS."
          image="/fdj.svg"
          link="https://www.nirio.fr/"
          class="col-span-2"
          :tools="['NextJS', 'Strapi']"
        />
        <HoverCard
          title="Coca-Cola"
          description="Développement d'un PoC (Webapp NextJS mobile-first) destiné aux employés de la marque."
          image="/tccc.svg"
          class="col-span-2 md:col-start-2 lg:col-start-auto"
          link="https://www.coca-colacompany.com/"
          :tools="['NextJS']"
          dark
        />
      </template>
    </UPageSection>
  </div>
</template>

<style scoped>
a {
  @apply underline;
}
</style>
