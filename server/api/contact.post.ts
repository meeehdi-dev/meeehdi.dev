export default defineEventHandler(async (event) => {
  const { token, ...body } = await readValidatedBody(
    event,
    ContactFormSchema.parse,
  );
  const response = await verifyTurnstileToken(token);
  if (!response.success) {
    throw createError({ status: 422, statusText: "Invalid turnstile token" });
  }
  const discord = useDiscordWebhook(event);
  discord.send(body);
});
