export default defineEventHandler(async (event) => {
  const { token, ...body } = await readValidatedBody(
    event,
    ContactFormSchema.parse,
  );
  const response = await verifyTurnstileToken(token);
  console.log({ response });
  if (!response.success) {
    throw createError({ status: 400, statusText: "Invalid turnstile token" });
  }
  const discord = useDiscordWebhook(event);
  discord.send(body);
});
