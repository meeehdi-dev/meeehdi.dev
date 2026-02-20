import { EmbedBuilder, WebhookClient } from "discord.js";
import { H3Event } from "h3";

export const useDiscordWebhook = (event: H3Event) => {
  const client = new WebhookClient({
    url: useRuntimeConfig(event).discord.webhookUrl,
  });

  return {
    send: (data: Contact) => {
      return client.send({
        content: `## ${data.subject}\n\n${data.message}`,
        embeds: [
          new EmbedBuilder().setDescription(
            `*From:* **[${data.email}](mailto:${data.email}?subject=Re:%20${data.subject})**`,
          ),
        ],
      });
    },
  };
};
