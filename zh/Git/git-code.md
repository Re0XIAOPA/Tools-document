# Git快速上手使用

## Git安装

- Git下载：[点击下载](https://git-scm.com/)

- 安装无脑下一步即可,不建议路径有中文字符

## Git基本使用

> GUI为用户界面模式
>
> Bash为命令行模式

### Git账户配置

::: tip **提示**

若想同时配置Gitee和Github或者GitLab等其它仓库，可暂时忽略此步

:::

## 配置Git用户名和邮箱{#git-config}

**全局配置**

> 配置账户名

```sh
git config --global user.name "你的名字"
```

> 配置账户邮箱

```sh
git config --global user.email "你的邮箱"
```

**查看全局设置**

```sh
git config --global -l
```

**删除全局设置**

```sh
git config --global --unset user.name
```

```sh
git config --global --unset user.email
```

### Git常用命令{#git-cmd}

|  命令   | 备注  |
|  ----  | ----  |
| git init  | 初始化本地仓库 |
| git add  |  添加改动的文件到暂存区 |
| git status  | 查看仓库的状态，包括未提交、已提交、未暂存、已暂存、未跟踪文件 |
| git commit -m "提交信息"  | 提交更改 |
| git push  | 将改动上传到github，若没有指定分支，则需要使用git push origin master |
| git pull  | 取远程仓库的最新代码，需指定分支，则使用git pull origin master |
| git log  | 查看提交历史情况 |
| git branch 分支名 | 创建分支 |
| git checkout 分支名 | 切换分支 |
| git merge 分支名  | 合并分支 |
| git remote add origin 仓库地址  | 将本地仓库与远程仓库关联 |
| git remote -v  | 查看关联的远程仓库 |
| git remote rm origin origin | 删除远程仓库关联 |
| git clone 仓库地址  | 克隆远程仓库到本地 |
| git -v  | 查看Git版本信息 |
<!-- | git reset -hard x  | 回退到某个本地版本,x为git log中出现的hash值的前七位 |
| git clean -xf  | 清除所有的未提交文件 | -->

|  git push 说明  |  备注  |
|  ----  | ----  |
| git push -u origin master --force  | 强制推送到远程仓库 |
| git push -u origin master --force-with-lease  | 较为安全的强制推送到远程仓库 |

::: tip **强制推送**
如果你确定强制覆盖远程仓库之后不会出现问题，可以使用 `--force` 或 `--force-with-lease` 选项。
:::

::: danger **注意**
强制推送会覆盖远程仓库上的更改，这可能会影响仓库的其他协作者的工作，如果没有其他协作者，可自行判断进行强制推送。
:::

## Git(乌龟)可视化工具安装

::: tip **提示**
TortoiseGit 是一个开源且基于 Windows Shell 的 Git 版本控制系统的界面。提供给了用户友好的图形界面，使得用户无需记忆和输入复杂的 [Git命令](#git-cmd)。
:::

- TortoiseGit下载：[点击下载](https://tortoisegit.org/download/)

>[先安装再汉化]
>
> - 一个是TortoiseGit的程序安装包
>
> - 一个是TortoiseGit的汉化程序包
>
>
>安装汉化之后TortoiseGit常规设置里修改语言文件

![TortoiseGit](/assets/git/TortoiseGit.gif)

## Git配置ssh连接

::: tip **提示**
可同时分别配置Github和Gitee的ssh连接，或者更多
:::

::: tip **配置必看**
> **如果已经配置过Git，需要先清除Git的全局设置，如果没有配置就跳过这一步**
>
> **查看 是否存在用户名和邮箱**
>
```sh
git config --global --list
```
>
> **删除 用户名和邮箱**
>
```sh
git config --global --unset user.name
```
>
```sh
git config --global --unset user.email
```
>
:::

### 生成Github的ssh密钥

> **进入本地磁盘`C:\User\你的用户名` 创建`.ssh`文件夹**
>
> **进入`.ssh`文件夹并右键运行Git Bash**
>
> **先在`.ssh`文件夹内生成 key，邮件地址为 Github使用的邮件地址**
>
```sh
ssh-keygen -t rsa -C "你的Github使用或注册的邮箱"
```
>
> **设置 Github 的 ssh key 文件名为 id_rsa_github**
>
:::tip **提示**
Enter file in which to save the key: id_rsa_github  
[译文]输入要保存密钥的文件：id_rsa_github
:::

```sh
L5516535379@LAPTOP-K422MN8R MINGW64 ~/.ssh
ssh-keygen -t rsa -c “2415306912@qq.com'
Generating public/private rsa key pair.
Enter file in which to save the key(/c/users/15516535379/.ssh/id_rsa): id_rsa_github
Enter passphrase (empty for no passphrase):
Entersame passphrase again:
Your identification has been saved in id_rsa_github
Your public key has been saved in id_rsa_github.pub
The key fingerprint is:
SHA256:I/FjIDewbuAFW3vKuzBtfEweLvhj7im8G0/4Bvc9jA 2415306912@q9.com
The key's randomart image is:
+----TRSA 30721----+
|     0+00*.+      |
|  .   ==.O =  .   |
|     0.E+0 +      |
|      B.X..       |
|      ..+..       |
|      00*0+       |
+-----[SHA256]-----+
```
>
> **完成后会在~/.ssh / 目录下生成以下文件**
>
> - id_rsa.github
>
> - id_rsa.github.pub
>

### 生成Gitee的ssh密钥

> **进入本地磁盘`C:\User\你的用户名` 创建`.ssh`文件夹**
>
> **进入`.ssh`文件夹并右键运行Git Bash**
>
> **先在`.ssh`文件夹内生成 key，邮件地址为 Gitee使用的邮件地址**
>
```sh
ssh-keygen -t ed25519 -C "你的Gitee使用或注册的邮箱"
```

:::tip **提示**
Gitee的密钥类型被只认为ed25519，所以生成密钥时需要指定该密钥类型，命令如下：  

```sh
ssh-keygen -t ed25519 -C "你的Gitee使用或注册的邮箱"  
```

:::
>
> **设置 Gitee 的 ssh key 文件名为 id_rsa_gitee**
>
:::tip **提示**
Enter file in which to save the key: id_rsa_gitee  
[译文]输入要保存密钥的文件：id_rsa_gitee
:::

```sh
L5516535379@LAPTOP-K422MN8R MINGW64 ~/.ssh
ssh-keygen -t rsa -c “2415306912@qq.com'
Generating public/private rsa key pair.
Enter file in which to save the key(/c/users/15516535379/.ssh/id_rsa): id_rsa_gitee
Enter passphrase (empty for no passphrase):
Entersame passphrase again:
Your identification has been saved in id_rsa_gitee
Your public key has been saved in id_rsa_gitee.pub
The key fingerprint is:
SHA256:LK2A7RhgW6cj9ELbYjmNJ9hKsOPBxegKq19uV+6JUAI 2415306912@q9.com
The key's randomart image is:
+----TRSA 30721----+
|     0+00*.+      |
|  .   ==.O =  .   |
|     0.E+0 +      |
|      B.X..       |
|      ..+..       |
|      00*0+       |
+-----[SHA256]-----+
```
>
> **完成后会在~/.ssh / 目录下生成以下文件**
>
> - id_rsa.gitee
>
> - id_rsa.gitee.pub
>

## 在Github和Gitee添加ssh密钥

![Github](/assets/git/id_rsa_github.png)

![Gitee](/assets/git/id_rsa_gitee.png)

### 配置

::: tip **必看**
**生成配置好密钥之后，还需在本地分别配置Github和Gitee的ssh连接**
:::
>
> **进入`C:\User\你的用户名\.ssh`文件夹**
>
> **创建一个`config`文件**
>
>::: tip **创建提示**
>**创建 `config` 文件可以用touch指令创建，也可以在新建文件时直接命名 `config.`**
>:::
>
> ```dosc
> #github
> Host github.com
> HostName ssh.github.com
> PreferredAuthentications publickey
> Port 443
> IdentityFile ~/.ssh/id_rsa_github
>
> #gitee
> Host gitee.com
> HostName ssh.gitee.com
> PreferredAuthentications publickey
> Port 22
> IdentityFile ~/.ssh/id_rsa_gitee
> ```
>
>::: tip **提示**
>**IdentityFile ~/.ssh/``id_rsa_github``**  
>**``id_rsa_gitee``是生成Github密钥起的文件名，注意大小写**
>
>**IdentityFile ~/.ssh/``id_rsa_gitee``**  
>**``id_rsa_gitee``是生成Gitee密钥起的文件名，注意大小写**
>:::
>
## 测试连接

### Github

```sh
ssh -T git@github.com
```
>
>**如果出现账户名提示，则说明连接成功**
>
### Gitee

```sh
ssh -T git@gitee.com
```
>
>**如果出现账户名提示，则说明连接成功**
>
>**别忘了配置Git用户名和邮箱上传需要**
>
## 配置Git

> [点击跳转](#git-config)

文档还在完善中...
