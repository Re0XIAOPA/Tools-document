
# 官方文档 Markdown 扩展示例

本页演示了 VitePress提供的一些内置减价扩展。

## 语法突出显示

VitePress 提供语法突出显示为 [Shiki](https://github.com/shikijs/shiki), 具有线条突出等附加功能

**Input**

````md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**Output**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## 自定义集装箱

**Input**

```md
::: info
这是一个信息框。
:::

::: tip
这是一个提示。
:::

::: warning
这是一个警告。
:::

::: danger
这是一个危险的警告。
:::

::: details
这是一个详细的信息块。
:::
```

**Output**

::: info
这是一个信息框。
:::

::: tip
这是一个提示。
:::

::: warning
这是一个警告。
:::

::: danger
这是一个危险的警告。
:::

::: details
这是一个详细的信息块。
:::

## 更多

请查看文档中的[全部扩展列表](https://vitepress.dev/guide/markdown)。
