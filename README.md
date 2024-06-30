# 🧅 Bun template

Sample bun template with Turso DB, eslint, prettier, docker, husky, sonarjs, testing with coverage, and more.

## 📚 Features

- ✅ [Turso](https://turso.tech)
- ✅ [Kysely](https://www.kysely.dev/)
- ✅ [Eslint](https://eslint.org/)
- ✅ [eslint-sonarjs](https://github.com/SonarSource/eslint-plugin-sonarjs)
- ✅ [Prettier](https://prettier.io/)
- ✅ [Husky](https://typicode.github.io/husky/)
- ✅ [Jsdocs](https://jsdoc.app/)
- ✅ Jsconfig with checkjs and strict
- ✅ Docker ready
- ✅ Bun ready
- ✅ Bun testing with coverage
- ✅ Path aliases
- ✅ Types

## 🧰 Requirements

- Bun (^1.1.13)
- Docker (optional)

## 💾 Instalation

Make sure to complete the `.env` file with the following information:

| Variable | Description |
| --- | --- |
| TURSO_URL | Turso url |
| TURSO_DB_TOKEN | Turso db token |

Change the default names with the following script:

```bash
bun run replace     
$ bash ./scripts/app_name.sh
Enter the new name: sample
Replacement completed. 🚀
```

This will replace all `app_name` with `sample` in the project.

### Run with Bun 🧅

```bash
git clone https://github.com/jd-apprentice/jd-bun && cd jd-bun
make
```

This will build the app with bunjs and execute the binary.

### Run with Docker 🐳

Bun still needs to be installed to build the binary.

1. Clone the repository

```bash
git clone https://github.com/jd-apprentice/jd-bun && cd jd-bun
```

2. Prepare the binary

```bash
bun install
bun test (optional)
bun run build
```

3. Build the image manually

Remember to replace `app_name` with the name of your app.

```bash
docker build -f docker/base-x86_64.Dockerfile -t app_bin .
docker build -f docker/app.Dockerfile -t app_name .
docker compose up -d
```