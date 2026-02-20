<template>
  <div>
    <UPageSection orientation="horizontal" :ui="{ container: 'lg:pt-32' }">
      <template #title>
        <div class="flex flex-col md:flex-row md:gap-2">
          <span>
            Salut
            <Icon name="fa6-solid:hand-peace" class="text-primary size-10" /></span
          ><span>Moi, c'est Mehdi. </span>
        </div>
      </template>
      <img src="/me.jpeg" class="mx-auto hidden w-1/2 rounded-xl md:flex" />
      <template #description>
        <div class="flex flex-col gap-2">
          <img src="/me.jpeg" class="mx-auto w-1/2 rounded-xl md:hidden" />
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
              <ULink to="https://github.com/meeehdi-dev" target="_blank">
                <Icon name="fa6-brands:github" class="size-10" />
              </ULink>
              <ULink to="https://www.linkedin.com/in/mehdi-mhiri/" target="_blank">
                <Icon name="fa6-brands:linkedin" class="size-10" />
              </ULink>
            </p>
          </div>
        </div>
      </template>
    </UPageSection>

    <UPageSection title="Mon expertise">
      <template #features>
        <HoverCard
          title="NextJS"
          description="Adepte de React et NextJS depuis près de 5 ans."
          image="/nextjs.svg"
        />
        <HoverCard
          title="Nuxt"
          description="En rodage sur ce framework depuis plus d'un an."
          image="/nuxt.svg"
        />
        <HoverCard
          title="NodeJS"
          description="10 ans passés ensemble ! Pour toujours et à jamais."
          image="/nodejs.svg"
        />
      </template>
    </UPageSection>

    <UPageSection title="Mes projets marquants">
      <template #features>
        <HoverCard
          title="LVMH"
          description="Evolution, optimisation et maintien de différents sites de la marque."
          :tools="['NestJS', 'NextJS', 'Prismic']"
          link="https://www.lvmh.com/"
          image="/lvmh.svg"
          light
        />
        <HoverCard
          title="Nirio (FDJ)"
          description="Création du site web Nirio, et configuration de la base Strapi pour la partie CMS."
          :tools="['NextJS', 'Strapi']"
          link="https://www.nirio.fr/"
          image="/fdj.svg"
        />
        <HoverCard
          title="Coca-Cola"
          description="Développement d'un PoC (Webapp NextJS mobile-first) destiné aux employés de la marque."
          :tools="['NextJS']"
          link="https://www.nirio.fr/"
          image="/tccc.svg"
          dark
        />
      </template>
    </UPageSection>
  </div>
</template>
