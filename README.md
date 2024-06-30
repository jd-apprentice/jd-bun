# 🧅 Bun template

[![All Contributors](https://img.shields.io/github/all-contributors/jd-apprentice/jd-bun?color=ee8449&style=flat-square)](#contributors)

Sample bun template with Turso DB, eslint, prettier, docker, husky, sonarjs, testing with coverage, and more.

## 📚 Features

- ✅ [Turso](https://turso.tech)
- ✅ [Kysely](https://www.kysely.dev/)
- ✅ [Eslint](https://eslint.org/)
- ✅ [eslint-sonarjs](https://github.com/SonarSource/eslint-plugin-sonarjs)
- ✅ [Prettier](https://prettier.io/)
- ✅ [Husky](https://typicode.github.io/husky/)
- ✅ [Jsdocs](https://jsdoc.app/)
- ✅ [CodeQL](https://codeql.github.com/)
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

To install BUN, do the following:

```shell
curl -fsSL https://bun.sh/install | bash
```

Now we are going to do a bun create with this template.

Just in case, here are additiona flags for the bun create command:

```shell
--force	Overwrite existing files
--no-install	Skip installing node_modules & tasks
--no-git	Don’t initialize a git repository
--open	Start & open in-browser after finish
```

```shell
mkdir your_app
bun create github.com/jd-apprentice/jd-bun your_app
cd your_app
cp .env.example .env
```

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
make
```

This will build the app with bunjs and execute the binary.

### Run with Docker 🐳

Bun still needs to be installed to build the binary.

1. Prepare the binary

```bash
bun install
bun test (optional)
bun run build
```

2. Build the image manually

Remember to replace `app_name` with the name of your app.

```bash
docker build -f docker/base-x86_64.Dockerfile -t app_bin .
docker build -f docker/app.Dockerfile -t app_name .
docker compose up -d
```

## 🤝 Contribute

- For more information, check the [CONTRIBUTE](./CONTRIBUTE.md) file

## ✨ Contributors 

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://jonathan.com.ar/es"><img src="https://avatars.githubusercontent.com/u/68082746?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jonathan Dyallo</b></sub></a><br /><a href="https://github.com/jd-apprentice/waifuland-api/commits?author=jd-apprentice" title="Code">💻</a> <a href="https://github.com/jd-apprentice/waifuland-api/commits?author=jd-apprentice" title="Tests">⚠️</a> <a href="https://github.com/jd-apprentice/waifuland-api/commits?author=jd-apprentice" title="Documentation">📖</a> <a href="#maintenance-jd-apprentice" title="Maintenance">🚧</a></td>
  </tr>
</table>