# Git 上传GIthub仓库使用

## 0. 创建一个空仓库

## 1. 准备工作

    ```
    git config --global user.name "user-attachments"
    git config --global user.email "user-attachments@qq.com"
    ```
    ```
    git init
    ```
    ```
    git add .
    git commit -m "first commit"
    ```
    ```
    git remote add origin https://github.com/user-attachments/git-code.git
    ```

## 2. 添加远程仓库

    ```
    git remote add origin https://github.com/user-attachments/git-code.git
    git push -u origin master
    ```

## 3. 提交代码

    ```
    git add .
    git commit -m "first commit"
    git push -u origin master
    ```

## 4. 修改代码

    ```
    git add .
    git commit -m "modify code"
    git push -u origin master
    ```

## 5. 删除远程仓库

    ```
    git remote rm origin
    git remote add origin https://github.com/user-attachments/git-code.git
    git push -u origin master
    ```

## 6. 删除本地仓库

    ```
    git remote rm origin
    git remote add origin https://github.com/user-attachments/git-code.git
    git push -u origin master
    ```

## .gitignore 忽略文件

    ```
    .idea/
    .vscode/
    .gitignore
    .DS_Store
    node_modules/
    dist/
    ```

## 此页为本人项目使用教程(我自己看的)

    ```
    git remote add origin 仓库地址
    git remote add origin https://github.com/user-attachments/git-code.git
    ```

### 部分命令

    **查看远程仓库**
    ```
    git remote -v
    ```
    **添加远程仓库**
    ```
    git remote add origin https://github.com/user-attachments/git-code.git
    ```
    **推送到远程仓库**
    ```
    git push -u origin master
    ```
    **推送到远程仓库并创建分支**
    ```
    git push -u origin master --force-with-lease
    ```
    
    -----

    **检查远程仓库的状态**
    使用 git fetch 来获取远程仓库的最新状态，但不会自动合并到你的当前分支。
    ```
    git fetch origin
    ```
    **强制推送**
    如果你确定你的更改不会覆盖远程仓库上其他人的工作，并且你想要强制推送你的更改，可以使用 --force 或 --force-with-lease 选项。注意：强制推送可能会覆盖远程仓库上的更改，这可能会影响其他协作者的工作。
    ```
    git push -u origin master --force
    ```
    **或者更安全的方式**
    ```
    git push -u origin master --force-with-lease
    ```

