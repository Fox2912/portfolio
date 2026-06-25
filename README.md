# Web制作ポートフォリオ

「LP作成」「HTML/CSS修正」「小規模Web制作」案件向けに整理したポートフォリオです。

## 構成

```txt
C:/portfolio
├── index.html
├── assets/
│   ├── css/style.css
│   └── js/main.js
├── works/
│   ├── band-site/
│   ├── sdgs-check/
│   └── zaikou-tool/
├── demos/
│   ├── band-site/
│   ├── sdgs-check/
│   └── zaikou-tool/
└── README.md
```

## 公開方針

- `index.html`、`assets/`、`works/`、`demos/` は公開用です。
- バンドWebサイトは、実在リンク、実メールアドレス、実在メンバー情報、未公開楽曲情報を削除した匿名デモです。
- SDGs診断Webコンテンツは、バックアップと制作メモを除外した静的デモです。
- 在校届補助ツールは、学校名、学生名簿、学籍番号、SQLite実データ、PDFテンプレート、内部ネットワーク情報を公開しません。公開用には、ダミーデータだけで画面の流れを見せる静的デモを用意しています。

## 編集方法

- 共通デザインは `assets/css/style.css` にまとめています。
- トップページは `index.html` を編集します。
- 作品紹介文は `works/*/index.html` を編集します。
- 公開デモは `demos/` 配下に置きます。
- 連絡先は `cgemu4293@gmail.com` を掲載しています。
- 制作において要件整理やコード修正の補助として生成AIを活用した旨をトップページに記載しています。

## ローカルでの開き方

`C:/portfolio/index.html` をブラウザで開くと確認できます。静的ファイルのみで動くため、GitHub Pagesでも公開できます。

- 実名、学校名、学籍番号、実メールアドレスが残っていないか確認する。
- `personal_info`、SQLite、CSV、ログ、PDFテンプレート、運用メモを公開しない。
- 外部リンクが意図したものだけになっているか確認する。
- スマホ幅でカードやボタンの文字がはみ出していないか確認する。
