---
title: "glslViewerをWindowsでビルドする"
date: "2020-04-09T22:48:32.3513412+09:00"
description: "昔はWindowsではビルドできなかったようですが、最近Windowsでもビルドできるようになったようです。"
---

GLSL を実行できる glslViewer というのを最近使っています。
どうやら[The Book of Shaders](https://thebookofshaders.com/)の作者さんが作っているようです。

昔は Windows ではビルドできなかったようですが、最近 Windows でもビルドできるようになったようです。

[GitHub](https://github.com/patriciogonzalezvivo/glslViewer)から Windows バイナリがダウンロードできますが、ダウンロードできる v1.6.0 では`#version` が含まれた GLSL をうまく読み込めないようですのでビルドします。

とはいえ[Wiki](https://github.com/patriciogonzalezvivo/glslViewer/wiki/Compiling-GlslViewer#f-compiling-on-windows)に書いてある通りに premake5 と Visual Studio 2019 をインストールしてビルドするだけです。

試してみたところうまくビルド出来なかったので premake5 をちょっと修正して[PullRequest](https://github.com/patriciogonzalezvivo/glslViewer/pull/172)を送ってみたら無事マージされました。 うれしい。

いずれ、glslViewer の私の使い方を紹介できればいいな。
