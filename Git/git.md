[![jlGUlF.png](https://s1.ax1x.com/2022/07/01/jlGUlF.png)](https://imgtu.com/i/jlGUlF)

## 开天辟地

### 新建一个 .gitignore 文件，里面放一些不需要上传的文件

```shell
.cache/
.parcel-cache/
.vscode/
node_modules/
.DS_Store/
.idea/
```

### git提交步骤

  `git init`  初始化(在工作区创建一个 .git文件)

  `git add <file>` 添加你要添加的文件，把文件放到暂存区（stage中）

  `git commit -v` 把文件提交到分支中（如图所示 master 分支）

  `git push` 推送到远程分支

### 提交的时候一些疑问

**培养习惯**
 要养成原子提交的习惯，所谓原子提交就是当每一次做完一个功能的时候就要去 `git add <file>` `git commit -v` 一次，以便后续维护。

**第一次提交**

```
git remote add origin git@github.com:shyhhh/xxx.git
git branch -M main
git push -u origin main
```

- 第一次提交的时候复制 github 给的三行代码
- 里面的 `-u` 意思是把主分支和远程地址绑定是 `--set-upstream` 的缩写。
- `origin`的意思是给地址起的名字叫 origin 也是唯一远程仓库名
- `git branch -M main` 意思是把分子重命名为 main ，因为历史原因有的老版本的 git 上的分支名是 master

## 一些常用操作

1. `git pull` 拉
2. `git branch -D xxx`  删除本地无用分支xxx
3. 删除本地除了 main 的所有分支

```
  git checkout main
  git branch | grep -v 'master' | xargs git branch -D
```
4. 查看分支
   - 查看本地分支 `git branch`
   - 查看远程分支 `git branch -r`
   - 查看所有分支 `git branch -a`
5.删除分支
   - 删除远程分支  `git branch -d origit push origin --delete remoteBranchName` 简写=>`git push <remote> :<branch>`
     - `git push <remote> --delete <branch>`
     - `git push origin :fix/authentication`
   - 删除本地分支  `git branch -d localBranchName`

    - [删除分支](https://chinese.freecodecamp.org/news/how-to-delete-a-git-branch-both-locally-and-remotely/)

6. 同步分支列表 `git fetch -p`

## git 常用命令

- git init 在某个文件夹初始化一个仓库（一份代码只执行一次）
- git config --global user.name "name"  配置全局用户名（存在~/.gitconfig文件内）
- git config --global user.email "email" 配置全局用户的电邮git status 查看当前状态（暂存区与工作目录）
- git add <file> 将文件添加到暂存区（index）
- git add .     将当前文件夹的所有文件都添加到暂存区
- git restore <file>  将文件从暂存区出来覆盖工作区对应文件
- git commit -m "message"  将暂存区的内容保存为一个版本（会输出简要汇总信息）
- git log 查看当前仓库的提交记录，如果多的话可以通过上下键翻页
- git diff 查看工作目录与暂存区的具体差异
- git diff --cached 查看暂存区与最后一提交的具体差异
- git remote add  仓库名字 地址
- git remote -v   查看远程仓库及地址
- git push 仓库名字 分支名字 // 将分支代码推送（上传）到对应仓库
- git push -u 仓库名字 分支名字 // 将分支代码推送（上传）到对应仓库，同时将分支与远程仓库绑定，后续只需要git push即可推送
- git remote remove 仓库名字 // 删除远程仓库
- git branch -M main 重命名分支
- LR  换行    CR 回车
- -m  查看这个版本相对于上一个版本有哪些变化
- -u   全称是设置上游，把主分支和远程分支绑定 -u 是这个 --set-upstream 的简写
- diff 1.txt 2.txt 查看两个文件差别
- git init --bare 把文件作为萝仓库
- 文件末尾加回车，文件合并的时候会减少bug
- HEAD 指向当前分支
- git help <command> 查看帮助 eg: git help branch 查看 branch 的帮助文档
- origin 给地址起的名字叫 orign （唯一远程仓库名）

## 剩余关于git的笔记请看我的语雀

[链接](https://www.yuque.com/g/promise-5hnnh/vyvig1/collaborator/join?token=NNsJcgtEisg40Xhy#)
