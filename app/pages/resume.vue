<script setup lang="ts">
import type { TimelineItem } from "@nuxt/ui";

const workItems = ref<TimelineItem[]>([
  {
    date: "08/2022 > ?",
    title: "Kokoro Soft",
    description:
      "Ingénieur logiciel freelance\nMissions en tant que lead tech et lead dev sur des projets divers et variés.",
    avatar: {
      src: "/kokoro-soft.png",
      class: "[&>img]:object-contain",
    },
  },
  {
    date: "11/2023 > ?",
    title: "VO2 Group",
    description:
      "Lead dev\nApport de mon expertise en tant que développeur senior backend auprès de différents clients tels que LVMH, la Française des Jeux, Sanofi, etc...",
    avatar: {
      src: "/vo2.svg",
      class: "[&>img]:object-contain",
    },
  },
  {
    date: "04/2023 > 04/2024",
    title: "Logic'Gram",
    description:
      "Lead dev\nAccompagnement dans le développement d'une application web en tant que lead ainsi que formation d'un développeur junior",
    avatar: {
      src: "/logicgram.svg",
      class: "[&>img]:object-contain",
    },
  },
  {
    date: "11/2022 > 04/2023",
    title: "Artefact 3000",
    description:
      "Lead dev\nAide à la finalisation d'un projet web pour la FDJ ainsi que démarrage d'un PoC pour The Coca-Cola Company",
    avatar: {
      src: "/artefact3000.svg",
      class: "[&>img]:object-contain",
    },
  },
  {
    date: "01/2016 > 08/2022",
    title: "Logic'Gram",
    description:
      "Responsable de projet\nDéveloppeur web puis évolution vers plus de responsabilités pour développer et maintenir des applications web pour Cisco, Valoref (Filiale de Saint-Gobain), CanalBio, et autres.",
    avatar: {
      src: "/logicgram.svg",
      class: "[&>img]:object-contain",
    },
  },
  {
    date: "06/2014 > 08/2014",
    title: "High-Tech Home",
    description:
      "Développeur\nStage de 3 mois en tant que développeur C# pour la création un logiciel de visionnage d'image spécifique.",
    icon: "lucide:building",
    ui: { wrapper: "pb-0" },
  },
]);

const schoolItems = ref<TimelineItem[]>([
  {
    date: "09/2014 > 07/2016",
    title: "Université d'Avignon",
    description: "Master en ingénierie logicielle",
    icon: "lucide:graduation-cap",
  },
  {
    date: "09/2011 > 07/2014",
    title: "Université d'Avignon",
    description: "Licence en ingénierie logicielle",
    icon: "lucide:university",
  },
  {
    date: "09/2008 > 07/2011",
    title: "Lycée Théodore Aubanel",
    description: "Baccalauréat Scientifique Option Physique-Chimie",
    icon: "lucide:school",
  },
]);
</script>

<template>
  <UPageSection
    title="Mon parcours"
    description="Depuis le lycée jusqu'à aujourd'hui"
    :ui="{ container: 'gap-8 sm:gap-8' }"
  >
    <UTimeline
      :items="workItems"
      :ui="{
        description: 'whitespace-break-spaces',
        indicator:
          'dark:bg-neutral-800/50! light:bg-neutral-800/10! light:drop-shadow-sm light:drop-shadow-black/50 text-primary! text-3xl size-16',
        separator: 'bg-primary',
      }"
    />

    <USeparator />

    <UTimeline
      :items="schoolItems"
      :ui="{
        description: 'whitespace-break-spaces',
        indicator:
          'dark:bg-neutral-800/50! light:bg-neutral-800/10! light:drop-shadow-sm light:drop-shadow-black/50 text-secondary! text-3xl size-16',
        separator: 'bg-secondary',
      }"
    />
  </UPageSection>
</template>
