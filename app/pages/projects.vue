<script setup lang="ts">
useSeoMeta({
  title: "/projects",
});
</script>
<template>
  <UPageSection
    title="Mes clients"
    description="Survolez les cartes pour avoir + d'infos sur les projets"
    :ui="{ description: 'pointer-coarse:hidden' }"
  >
    <template #features>
      <HoverCard
        title="LVMH"
        description="Evolution, optimisation et maintien de différents sites de la marque."
        :tools="['NextJS', 'NestJS', 'Prismic']"
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
        title="Holo-Way"
        description="Conception et développement d'Holo-Diag, un outil de d'évalution et de suivi des actifs immatériels d'une entreprise."
        :tools="['React', 'NodeJS', 'Express']"
        link="https://holo-way.com/"
        image="/holoway.svg"
        light
      />
      <HoverCard
        title="Coca-Cola"
        description="Développement d'un PoC (Webapp NextJS mobile-first) destiné aux employés de la marque."
        :tools="['NextJS']"
        link="https://www.coca-colacompany.com/"
        image="/tccc.svg"
        dark
      />
      <HoverCard
        title="Artefact 3000"
        description="Aide à la finalisation du site web de l'agence Artefact 3000."
        :tools="['NextJS']"
        link="https://studio.artefact3000.com/"
        image="/artefact3000.svg"
        light
      />
      <HoverCard
        title="Valoref"
        description="Conception et développement d'un ERP de gestion des déchets pour la filiale de Saint-Gobain."
        :tools="['React', 'NodeJS', 'Express']"
        link="https://www.valoref.com/"
        image="/valoref.svg"
      />
      <HoverCard
        title="Canalbio"
        description="Création d'un CRM adapté à l'usage par tablette pour les commerciaux en déplacement."
        :tools="['React', 'NodeJS', 'Express']"
        link="https://www.canal.bio/"
        image="/canalbio.svg"
        light
      />
      <HoverCard
        title="Interson-Protac"
        description="Développement d'un outil d'aide aux professionels de l'audition lors de la fabrication de prothèses auditives."
        :tools="['Angular', 'NodeJS']"
        link="https://www.earow-audio.fr/"
        image="/earow.png"
      />
      <HoverCard
        title="Cisco"
        description="Conception d'un outil d'aide à la vente de matériel pour les clients de la marque."
        :tools="['AngularJS', 'NodeJS']"
        link="https://www.cisco.com/"
        image="/cisco.svg"
      />
    </template>
  </UPageSection>
</template>
