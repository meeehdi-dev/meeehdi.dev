FROM oven/bun:1 AS base

FROM base AS build
WORKDIR /app

COPY package.json bun.lock* ./

RUN bun install --frozen-lockfile --ignore-scripts

COPY . .

RUN bun --bun run build

FROM oven/bun:1-alpine AS production
WORKDIR /app

ENV NODE_ENV=production

COPY --from=build --chown=bun:bun /app/.output /app

USER bun
EXPOSE 3000/tcp
ENTRYPOINT [ "bun", "run", "/app/server/index.mjs" ]
