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
   - 删除远程分支  `git branch -d origit push origin --delete remoteBranchName` 简写=>`it push <remote> :<branch>`
     - `git push <remote> --delete <branch>`
     - `git push origin :fix/authentication`
   - 删除本地分支  `git branch -d localBranchName` 

    - [删除分支](https://chinese.freecodecamp.org/news/how-to-delete-a-git-branch-both-locally-and-remotely/)

6. 同步分支列表 `git fetch -p`