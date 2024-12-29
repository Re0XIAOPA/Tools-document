# Apache Tomcat安装配置

## 1. 下载Tomcat

- Apache Tomcat官方下载：[前往下载](https://tomcat.apache.org/)
  - 选择最新版本下载
  - Windows系统选择：`apache-tomcat-[版本号].zip`

- 历史版本下载：[前往下载](https://archive.apache.org/dist/tomcat/)
  - 选择对应版本文件夹，如`tomcat-9`
  - 进入`v9.0.xx/bin`目录下载对应系统的安装包

## 2. 安装Tomcat

### Windows安装步骤
1. 将下载的zip文件解压到指定目录（建议路径不要包含中文和空格）
2. 进入`[Tomcat目录]/bin`文件夹
3. 双击`startup.bat`启动服务器
4. 打开浏览器访问`http://localhost:8080`验证安装

::: tip 提示
- 如果需要关闭Tomcat，可以双击`shutdown.bat` 
- 不然可以手动关闭Tomcat进程
- 否则会一直占用端口8080
:::

::: danger 警告
- **如果启动失败，请检查Tomcat版本与JDK版本是否匹配**
:::

## JDK安装与配置

### 下载JDK
- Oracle JDK官方下载：[前往下载](https://www.oracle.com/java/technologies/downloads/)
- 国内下载(免登录)：[前往下载](https://www.java.com/zh-CN/download/)
- Open JDK下载：[前往下载](https://jdk.java.net/)

### Tomcat与JDK版本对应关系

| Tomcat版本 | 最低JDK版本 | 最高JDK版本 | 推荐JDK版本 |
|:----------:|:----------:|:----------:|:------------:|
| **Tomcat 10.1.x** | JDK 11 | JDK 21 | 🌟 **JDK 17** 🌟 |
| **Tomcat 10.0.x** | JDK 8 | JDK 20 | 🌟 **JDK 11** 🌟 |
| **Tomcat 9.0.x** | JDK 8 | JDK 11 | 🌟 **JDK 8/11** 🌟 |
| **Tomcat 8.5.x** | JDK 7 | JDK 11 | 🌟 **JDK 8** 🌟 |
| **Tomcat 7.0.x** | JDK 6 | JDK 8 | 🌟 **JDK 7** 🌟 |

::: tip 版本选择建议
- 🔥 如果是新项目，推荐使用 **Tomcat 10.1.x + JDK 17** 的组合
- ⭐ 如果是维护项目，建议使用 **Tomcat 9.0.x + JDK 8** 的组合
:::

::: warning 注意事项
- Tomcat 10.1.x 开始必须使用 JDK 11 或更高版本
- 使用高于推荐版本的JDK可能会出现兼容性问题
:::

![Tomcat与JDK版本对应关系](/zh/JavaWeb/assets/Tomcat安装配置/Tomcat安装配置01.png)

## 4. 配置环境变量

### Windows环境变量配置
1. 配置JAVA_HOME
   - 右键"此电脑" -> 属性 -> 高级系统设置 -> 环境变量
   - 新建系统变量JAVA_HOME：`C:\Program Files\Java\jdk-版本号`

2. 配置Path
   - 在系统变量Path中添加：
     - `%JAVA_HOME%\bin`
     - `%CATALINA_HOME%\bin`

