export default defineEventHandler(async (event) => {
  const body = await readValidatedBody(event, ContactSchema.parse);
  const discord = useDiscordWebhook(event);
  discord.send(body);
});
