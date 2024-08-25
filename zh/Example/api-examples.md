---
outline: deep
---

# 运行时 API 示例

此页面演示了 VitePress 提供的一些运行时 API 的使用。

主要的 `useData()` API 可用于访问当前页面的网站、主题和页面数据。它适用于 `.md` 和 `.vue` 文件：

```md
<script setup>
import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData()
</script>

## 结果

### 主题数据
<pre>{{ theme }}</pre>

### 页面数据
<pre>{{ page }}</pre>

### 页面前端
<pre>{{ frontmatter }}</pre>
```

<script setup>
import { useData } from 'vitepress'

const { site, theme, page, frontmatter } = useData()
</script>

## 结果

```md
### 主题数据
<pre>{{ theme }}</pre>

### 页面数据
<pre>{{ page }}</pre>

### 页面前端
<pre>{{ frontmatter }}</pre>
```

## 更多

请查看文档中的[API的完整列表](https://vitepress.dev/reference/runtime-api#usedata)
