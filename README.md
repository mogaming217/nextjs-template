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
- Expressを使っている理由
  - Next.jsのデフォルトのサーバーサイドの仕組みだと、ルーティングを上書きして使いたいときにできないから
  - 例えば `/ogimage` みたいなパスでOGImageを返したいときに、Next.jsではページを返さないといけないので実現できない（と思う）
    - 無理にやろうとすると `/api/ogimage` でやればいいんだけど、個人的にはこれはapiではないんだよなあみたいなモヤモヤが生まれる
- 環境変数
  - NODE_ENV = ビルドモード だと思っているので、別途接続先を表す `APP_ENV` をデプロイ時に指定している
  - APP_ENVに基づいてビルド時にサーバーサードの環境変数を埋め込む(`next.config.js`内で)
  - .gcloudignoreでCloudRunに渡すファイルを指定していて、`env/**` すべてを渡しているのが気持ち悪いが仕方ない…
    - 嫌ならdotenvやめるしかない

## 設定
- BASIC認証
  - `.env.[name]` に `USE_BASIC_AUTH=true` を入れると有効になる
  - 認証情報は `/server-middleware/basicAuth.ts` に直書きしているので適当に.envに逃がすなりしても良い
