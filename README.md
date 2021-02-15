# Next.js Template

## セットアップ
```
$ npm install
```

## ローカルで動かす
```
$ npm run dev
```

## デプロイ
※ CloudRunを使うために請求先アカウントの設定が必要になります

- firebaseのプロジェクトが必要なので用意して、プロジェクトIDを `firebase.json` のdefaultのvalueに埋め込んでください
- gcloud sdkが必要なのでセットアップしてください
  - https://cloud.google.com/sdk/install?hl=ja
- `$ GCLOUD_PROJECT=your_project_id npm run gcloud:build` を叩いてください
  - your_project_idはご自身のプロジェクトに置き換えてください
  - 請求先アカウントの設定が必要になると思います
- 下記から`renderer`という名前でサービスを作ってください
  - https://console.cloud.google.com/run?hl=ja
  - region: asia-northeast1, 認証: 未認証の呼び出しを許可
  - コンテナイメージ: 先程の工程で上げた renderer を選択
- `$ firebase deploy:dev` で動くはず

## 設計思想
- Next.jsを使っている理由
  - SSRしたいから
  - TypeScriptの相性がNuxt x Vueよりいいから
- 環境変数
  - サーバーサイドで使いたい場合は、scripts/updateEnvVarsToCloudRun.tsでアップする
  - env/.env.[env]を指定するようになっていて、底に書かれている内容がすべてCloudRunの環境変数として設定される
  - Google的にはSecret Managerを使ってくれとのことなので気になるかたはそうしてください

## 設定
- BASIC認証
  - `.env.[name]` に `USE_BASIC_AUTH=true` を入れると有効になる
  - 認証情報は `/server-middleware/basicAuth.ts` に直書きしているので適当に.envに逃がすなりしても良い
