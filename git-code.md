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


    


