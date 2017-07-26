---
title: "github.ioにgatsbyを展開する"
date: "2020-04-08T21:36:44.2882781+09:00"
description: "gh-pagesというnpmパッケージを使えば簡単にできるらしい。"
---

どうやって展開すればいいんだと思ってたけど、[gh-pages](https://github.com/tschaub/gh-pages)という npm パッケージを使えば簡単にできるらしい。

[ここ](https://www.gatsbyjs.org/docs/how-gatsby-works-with-github-pages/)にかいてるように次のように npm script を書けばいい。

```json
{
  "scripts": {
    "deploy": "gatsby build && gh-pages -d public -b master"
  }
}
```

簡単じゃん
