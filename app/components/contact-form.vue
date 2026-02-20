<script setup lang="ts">
import type { FormSubmitEvent } from "@nuxt/ui";

const DEFAULT_STATE: Contact = {
  email: "",
  subject: "",
  message: "",
};

const state = reactive<Partial<Contact>>({ ...DEFAULT_STATE });

const toast = useToast();
const submitting = ref(false);
async function onSubmit(event: FormSubmitEvent<Contact>) {
  submitting.value = true;
  try {
    await $fetch("/api/contact", {
      method: "POST",
      body: event.data,
    });
    toast.add({
      title: "Merci !",
      description: "Votre message a bien été envoyé !",
      color: "success",
    });
    // FIXME: reset form
    // Object.assign(state, DEFAULT_STATE);
  } catch (error) {
    toast.add({
      title: "Erreur",
      description: "Une erreur est survenue lors de l'envoi du message",
      color: "error",
    });
  } finally {
    submitting.value = false;
  }
}
</script>

<template>
  <UForm :schema="ContactSchema" :state="state" class="flex flex-col gap-4" @submit="onSubmit">
    <UFormField label="Email" name="email" required>
      <UInput v-model="state.email" type="email" />
    </UFormField>

    <UFormField label="Objet" name="subject" required>
      <UInput v-model="state.subject" />
    </UFormField>

    <UFormField label="Message" name="message" required>
      <UTextarea v-model="state.message" />
    </UFormField>

    <UButton icon="lucide:send" type="submit" class="self-center" :loading="submitting"
      >Submit</UButton
    >
  </UForm>
</template>
