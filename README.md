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
vercelでデプロイ済みなので、下記よりご確認ください。<br>
[https://transaction-ticket-app.vercel.app/](https://transaction-ticket-app.vercel.app/)

### 2.1 チケットの一覧ページ
[チケットの一覧ページ](https://transaction-ticket-app.vercel.app/) <br>
チケットの一覧ページを表示します。<br>
ここは無限スクロールを実装したいです。<br>
また初期ロード時に、ページがレンダリングされるまで今流行りのSkeletonを導入し、UXを向上させた。
![スクリーンショット 2023-10-29 22 55 38](https://github.com/kouhei-github/transaction-ticket-app/assets/49782052/b3b2c599-d9f6-4275-98d8-75a7890d0e5c)

---

### 2.2 チケットの詳細ページ
[チケットの詳細ページ](https://transaction-ticket-app.vercel.app/event/myId) <br>
各チケットの詳細ページはSSGで構築します。<br>
SSGとはStatic Site Generateの略で、あらかじめ静的なページを構築しDBとの通信をなくしレンダリングを早くすることです。
![スクリーンショット 2023-10-29 22 56 01](https://github.com/kouhei-github/transaction-ticket-app/assets/49782052/559e87a4-04f4-4f0a-b86a-3cfa3afaccab)


---

### 2.4 チケット購入ページ
[チケット購入ページ](https://transaction-ticket-app.vercel.app/ticket/1)<br>
チケットの購入も種類があります。(先行、抽選）<br>
ですのでSSGで静的サイトをあらかじめ構築しておきます
![スクリーンショット 2023-10-29 23 00 51](https://github.com/kouhei-github/transaction-ticket-app/assets/49782052/01e07658-245c-4e8c-9728-cdf77d735868)


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

---
