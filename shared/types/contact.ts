import { z } from "zod";

export const ContactSchema = z.object({
  email: z.email("Veuillez saisir une adresse email valide"),
  subject: z.string("Veuillez saisir un objet"),
  message: z.string("Veuillez saisir un message"),
});

export type Contact = z.output<typeof ContactSchema>;
