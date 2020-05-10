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

- gcloud sdkが必要なのでセットアップしてください
  - https://cloud.google.com/sdk/install?hl=ja
- `$ GCLOUD_PROJECT=your_project_id npm run gcloud:build` を叩いてください
  - your_project_idはご自身のプロジェクトに置き換えてください
  - 請求先アカウントの設定が必要になると思います
- 下記から`renderer`という名前でサービスを作ってください
  - https://console.cloud.google.com/run?hl=ja
  - region: asia-northeast1, 認証: 未認証の呼び出しを許可
- 有効にしたあと、コンテナをアップロードしておく必要があるので下記を実行します
  - `$ GCLOUD_PROJECT=your_project_id npm run gcloud:build`
  - your_project_idはご自身のプロジェクトに置き換えてください
- `$ firebase deploy:dev`
