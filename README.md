# nyamadan.github.io

Astroで構築した、ブログを含まない1ページ構成のポートフォリオサイトです。

## Development

```sh
pnpm install
pnpm dev
```

開発サーバーはバックグラウンドで起動します。

```sh
pnpm dev:status
pnpm dev:logs
pnpm dev:stop
```

## Checks

```sh
pnpm fmt:check
pnpm lint
pnpm build
```

ビルド成果物は `dist/` に生成されます。

## Deployment

`main` ブランチへのpush、またはGitHub Actionsの手動実行でGitHub Pagesへ公開します。リポジトリの **Settings > Pages > Build and deployment > Source** は **GitHub Actions** を選択してください。
