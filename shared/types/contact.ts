import { z } from "zod";

export const ContactSchema = z.object({
  email: z.email("Veuillez saisir une adresse email valide"),
  subject: z.string("Veuillez saisir un objet").min(1),
  message: z.string("Veuillez saisir un message").min(1),
});

export const ContactFormSchema = ContactSchema.extend({ token: z.string().min(1) });

export type Contact = z.output<typeof ContactSchema>;

export type ContactForm = z.output<typeof ContactFormSchema>;
