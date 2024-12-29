# Eclipse + Tomcat 配置

## 下载安装

- 下载地址：<https://www.eclipse.org/downloads/packages/>
- 下载Eclipse IDE for Enterprise Java and Web Developers，本文以<span style="color: #49c7a6;">最新版</span>和<span style="color: #49c7a6;">2020版本</span>为例。
- 压缩包版本即解压到指定目录，如：`D:\eclipse`，本文采取的<span style="color: #49c7a6;">最新版是程序包</span>、<span style="color: #49c7a6;">旧版本2020是压缩包形式。</span>

## 配置Tomcat

- [前往查看](./Tomcat安装配置.md)

## Eclipse新建动态Web项目

- 打开Eclipse，选择`File -> New -> Dynamic Web Project`，输入项目名称Project name，如：`myWeb`。
- Target Runtime 选择 `New Runtime...` 添加Apache Tomcat版本，如： `Apache Tomcat v7.0`（<span style="color: #49c7a6;">Apache Tomcat 的版本是你安装的版本</span>），添加完成点击`Next`。
- 构建页无需更改，继续点击`Next`。
- Web Module页面 <span style="color: #49c7a6;">勾选</span> Generate web.xml deployment descriptor，完成点击`Finish`。
- 折开后，<span style="color: #49c7a6;">新版本</span>在`src\main\webapp`下新建JSP文件，<span style="color: #49c7a6;">旧版本</span>在`WebContent`下新建JSP文件。
- JSP模板文件选择HTML5,没有就选HTML。

### Java Resources 新建 Servlet

新版本

- 在Java Resources 下的 src/main/java 下 右键选择`New -> Servlet`，输入Java package名、Class name名，一直下一步到`Finish`。

旧版本

- 在Java Resources 下的 src 下 右键选择`New -> Servlet`，输入Java package名、Class name名，一直下一步到`Finish`。

::: tip 提示
src/com/example/MyServlet.java 或者 是一个文件路径，它表示在源代码目录（src）下有一个名为 com 的包（package），在这个包下有一个名为 example 的子包，而在 example 包下有一个名为 MyServlet.java 的Java源文件。

这个文件通常包含一个Java类，该类定义了一个Servlet。Servlet是Java EE规范中的一部分，用于处理客户端的请求并生成响应。
:::

## Eclipse运行访问

- 右键选择`Run As -> Run on Server`，选择Tomcat服务器，点击`Finish`。

::: tip 注意事项
当选择Tomcat服务器时，在选择 <span style="color: #F08080;">现有的服务器上</span> 运行失败，可以选择手工定义一个新服务器，选择对应的版本重新运行。[无法运行前往常见问题解决]
:::

## 常见问题

### JSP文件无法在服务器上运行

- [概率性问题]创建文件中没有勾选`Generate web.xml deployment descriptor`，导致Eclipse无法在服务器上运行。

- [Tomcat服务器端口占用或者无法访问识别服务器] 重启Tomcat服务或者新建一个服务器，选择对应的版本重新运行。再或者双击服务器修改端口

### Eclipse服务器上运行端口占用

- 重启Tomcat服务、释放8005、8009、8080端口或双击当前服务器修改Eclipse服务器端口。

### 服务器上运行动态Web原样输出

- [懒人推荐] 在 源文件中的 protected void doGet 方法下添加 `response.setContentType("text/html;charset=UTF-8");` 即可。
- 编码问题，在Eclipse中设置项目编码为UTF-8，或者在Tomcat服务器上设置编码为UTF-8。
