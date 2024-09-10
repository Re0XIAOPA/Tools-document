# Eclipse + Apache Tomcat Web服务配置等问题

- 观看本文档之前，建议暗黑模式下观赏，本文仅为教程。

## Apache Tomcat安装配置

### 安装&配置

#### Apache Tomcat

- 下载地址：<http://tomcat.apache.org/download-90.cgi>
- 本文以apache-tomcat-7.0.52为例。
- 解压到指定目录，如：`D:\apache-tomcat-7.0.52`。

#### Java 8 下载

- Oracle下载地址：[官网](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
- 国内下载(免登录)：[官网](https://www.java.com/zh-CN/download/)

直接运行安装包无脑C盘安装，本体不大安装路径建议不要有中文。

### 配置Java环境变量

- 打开系统环境变量编辑器，如：`设置 -> 系统 -> 系统信息 -> 高级系统设置 -> 环境变量 -> 系统变量`。
- 找到`Path`变量，双击编辑，在变量值末尾添加`%JAVA_HOME%\bin`，确定。
- 在系统变量新建一个`JAVA_HOME`变量名(没有就新建，存在就编辑)，将变量值修改为你安装的Java版本路径，如默认路径：`C:\Program Files\Java\jdk1.8.0_201`
- 保存并退出即可。

#### 检测Java安装是否成功

- 打开命令提示符，输入`java -version`，如果出现版本信息，则说明Java安装成功。

### 启动Apache Tomcat

- 在解压地址的bin目录下找到`startup.bat`文件，双击运行。如：`D:\apache-tomcat-7.0.52\bin\startup.bat`。
- 启动 startup.bat
- 停止 shutdown.bat
- 启动成功后，在命令提示符中会显示Tomcat的启动信息，如(启动信息无需复制)：

```Tomcat
Using CATALINA_BASE:   "D:\apache-tomcat-7.0.52"
Using CATALINA_HOME:   "D:\apache-tomcat-7.0.52"
Using CATALINA_TMPDIR: "D:\apache-tomcat-7.0.52\temp"
Using JRE_HOME:        "C:\Program Files\Java\jdk1.8.0_201"
Using CLASSPATH:       ".\lib\catalina-ant.jar;.\lib\catalina-ha.jar;.\lib\catalina-tribes.jar;.\lib\catalina.jar;.\lib\el-api.jar;.\lib\jasper-el.jar;.\lib\jasper.jar;.\lib\jsp-api.jar;.\lib\servlet-api.jar"
Tomcat started.
```

### 访问Tomcat

- 打开浏览器，在地址栏（<span style="color: #49c7a6;">地址栏不是搜索栏，是地址栏浏览器最顶部那个长长的栏</span>）输入`http://localhost:8080/` 或者 `http://127.0.0.1:8080/`，如果看到Tomcat的欢迎页面，则说明Tomcat配置成功。

## Eclipse下载安装 + Tomcat

### 下载安装

- 下载地址：<https://www.eclipse.org/downloads/packages/>
- 下载Eclipse IDE for Enterprise Java and Web Developers，本文以<span style="color: #49c7a6;">最新版</span>和<span style="color: #49c7a6;">2020版本</span>为例。
- 压缩包版本即解压到指定目录，如：`D:\eclipse`，本文采取的<span style="color: #49c7a6;">最新版是程序包</span>、<span style="color: #49c7a6;">旧版本2020是压缩包形式。</span>

### Eclipse新建动态Web项目

- 打开Eclipse，选择`File -> New -> Dynamic Web Project`，输入项目名称Project name，如：`myWeb`。
- Target Runtime 选择 `New Runtime...` 添加Apache Tomcat版本，如： `Apache Tomcat v7.0`（<span style="color: #49c7a6;">Apache Tomcat 的版本是你安装的版本</span>），添加完成点击`Next`。
- 构建页无需更改，继续点击`Next`。
- Web Module页面 <span style="color: #49c7a6;">勾选</span> Generate web.xml deployment descriptor，完成点击`Finish`。
- 折开后，<span style="color: #49c7a6;">新版本</span>在`src\main\webapp`下新建JSP文件，<span style="color: #49c7a6;">旧版本</span>在`WebContent`下新建JSP文件。
- JSP模板文件选择HTML5,没有就选HTML。

#### Java Resources 新建 Servlet

新版本

- 在Java Resources 下的 src/main/java 下 右键选择`New -> Servlet`，输入Java package名、Class name名，一直下一步到`Finish`。

旧版本

- 在Java Resources 下的 src 下 右键选择`New -> Servlet`，输入Java package名、Class name名，一直下一步到`Finish`。

::: tip 提示
src/com/example/MyServlet.java 或者 是一个文件路径，它表示在源代码目录（src）下有一个名为 com 的包（package），在这个包下有一个名为 example 的子包，而在 example 包下有一个名为 MyServlet.java 的Java源文件。

这个文件通常包含一个Java类，该类定义了一个Servlet。Servlet是Java EE规范中的一部分，用于处理客户端的请求并生成响应。
:::

### Eclipse运行访问

- 右键选择`Run As -> Run on Server`，选择Tomcat服务器，点击`Finish`。

::: tip 注意事项
当选择Tomcat服务器时，在选择 <span style="color: #F08080;">现有的服务器上</span> 运行失败，可以选择手工定义一个新服务器，选择对应的版本重新运行。[无法运行前往常见问题解决]
:::

## 常见问题

### JSP文件无法在服务器上运行

- [概率性问题]创建文件中没有勾选`Generate web.xml deployment descriptor`，导致Eclipse无法在服务器上运行。

- [Tomcat服务器端口占用或者无法访问识别服务器] 重启Tomcat服务或者新建一个服务器，选择对应的版本重新运行。

### Eclipse服务器上运行端口占用

- 重启Tomcat服务，或者修改Eclipse服务器端口，怕麻烦就重启服务吧。

### 服务器上运行动态Web原样输出

- [懒人推荐] 在 源文件中的 protected void doGet 方法下添加 `response.setContentType("text/html;charset=UTF-8");` 即可。
- 编码问题，在Eclipse中设置项目编码为UTF-8，或者在Tomcat服务器上设置编码为UTF-8。

## END

- 课上的内容

- 没对文档观赏性画面优化，有时间再优化。

- 有没有视频？视频教程？需要？
