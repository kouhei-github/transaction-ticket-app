# 1. Next.jsを使用したチケット売買アプリ

Next.jsを使用して、チケットが売買できrサイトを作成します。<br>
他の売買サイトに比べて表示速度とUI/UXを向上させることがゴールです。

### 技術スタック
Nodejs v18.3.0<br>
Next.js(13)<br>
Tailwind CSS <br>
Vercel<br>
---

## 2. アプリの概要
vercelでデプロイ済みなので、下記よりご確認ください。

### 2.1 チケットの一覧ページ
[チケットの一覧ページ](http://localhost:3000/) <br>
チケットの一覧ページを表示します。<br>
ここは無限スクロールを実装したいです。
---

### 2.2 チケットの詳細ページ
[チケットの詳細ページ](http://localhost:3000/event/myId) <br>
各チケットの詳細ページはSSGで構築します。<br>
SSGとはStatic Site Generateの略で、あらかじめ静的なページを構築しDBとの通信をなくしレンダリングを早くすることです。

---

### 2.4 チケット購入ページ
[チケット購入ページ](http://localhost:3000/ticket/1)<br>
チケットの購入も種類があります。(先行、抽選）<br>
ですのでSSGで静的サイトをあらかじめ構築しておきます

---

## 3. 起動方法
アプリをクローン
```shell
git clone
```

node_modulesのインストール
```shell
yarn install
```

アプリの起動
```shell
yarn dev
```

