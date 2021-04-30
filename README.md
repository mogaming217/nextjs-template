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
- `$ GCLOUD_PROJECT=your_project_id npm run gcloud:deploy` を叩いてください
  - your_project_idはご自身のプロジェクトに置き換えてください
  - 請求先アカウントの設定が必要になると思います
  - 未認証の設定にしてください
- `$ npm run deploy:dev` で動くはず

## 環境変数
- サーバーサイドで使いたい場合は、scripts/updateEnvVarsToCloudRun.tsでアップする
- env/.env.[env]を指定するようになっていて、底に書かれている内容がすべてCloudRunの環境変数として設定される
- Google的にはSecret Managerを使ってくれとのことなので気になるかたはそうしてください
