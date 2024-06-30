# 🧅 Bun template

Sample bun template with Turso DB, eslint, prettier, docker, husky, sonarjs, testing with coverage, and more.

## 🧰 Requirements

- Bun
- Docker
- Turso

## 💾 Instalation

Make sure to complete the `.env` file with the following information:

| Variable | Description |
| --- | --- |
| TURSO_URL | Turso url |
| TURSO_DB_TOKEN | Turso db token |

Simple way to install is to simply run the following command:

```bash
git clone https://github.com/jd-apprentice/jd-bun && cd jd-bun
make
./lib/app_name
```

More manual way:

1. Clone the repository

```bash
git clone https://github.com/jd-apprentice/jd-bun && cd jd-bun
```

2. Prepare the binary

```bash
bun install
bun run build
```

3. Build the image manually

```bash
docker build -f docker/base-x86_64.Dockerfile -t app_bin .
docker build -f docker/app.Dockerfile -t app_name .
docker compose up -d
```