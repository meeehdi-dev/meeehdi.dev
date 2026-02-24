import { EmbedBuilder, WebhookClient } from "discord.js";
import { H3Event } from "h3";

export const useDiscordWebhook = (event: H3Event) => {
  const client = new WebhookClient({
    url: useRuntimeConfig(event).discord.webhookUrl,
  });

  function send(data: Contact) {
    const mailto = encodeURI(
      `mailto:${data.email}?subject=Re: ${data.subject}`,
    );

    return client.send({
      content: `## ${data.subject}\n\n${data.message}`,
      embeds: [
        new EmbedBuilder().setDescription(
          `*From:* **[${data.email}](${mailto})**`,
        ),
      ],
    });
  }

  return {
    send,
  };
};
