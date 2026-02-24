FROM oven/bun:1 AS base

FROM base AS build
WORKDIR /app

COPY package.json bun.lock* ./

RUN bun install --frozen-lockfile --ignore-scripts

COPY . .

RUN bun --bun run build

FROM base AS production
WORKDIR /app

RUN apt update -y && apt install curl wget -y

COPY --from=build /app/.output /app

EXPOSE 3000/tcp
ENTRYPOINT [ "bun", "--bun", "run", "/app/server/index.mjs" ]
