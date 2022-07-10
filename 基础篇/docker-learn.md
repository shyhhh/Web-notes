# 主要内容
## VSCode 连 Docker
- VSCode 安装 Remote-Containers
## 需要先运行一个容器
Dockerfile
## Dockerfile
- FROM: 从哪里开始
- RUN: 运行什么命令
- ADD: 复制什么文件
- ENV: 添加什么环境变量

一般推荐后缀为 alpine 的版本

# 运行（镜像类比光盘）
```shell
# docker build 拿到一个 Dockerfile 把它构建出一个镜像（image）
# build 的时候就可以打标签
docker build . -t hone/on-my-docker:0.1
# 打标签
docker tag hone/on-my-docker:0.1 hone/on-my-docker:latest
# 列出所有的镜像
docker image ls
# 删除镜像
docker image rm hone/on-my-docker:latest
```

# 怎么从镜像得到答案
镜像可以理解为一张光盘，只需要把这个光盘插到机器里面运行一下，就可以得到一个 Linux 系统
```shell
# 这个 run 就是插入光盘得到一个 Linux 系统  -dit daemon 运行了之后就不要自动关闭了
docker run -dit hone/on-my-docker:latest
```
# 怎么进入容器(类比虚拟机)
```shell
docker exec -it 容器id zsh
```
# 怎么退出
ctrl + d
```shell
exit
```
# 上传
```shell
docker push hone/on-my-docker:latest
```
# 怎么让别人用我的镜像
上传到 docker hub
```shell
docker login/docker publish
# 下载
docker pull hone/on-my-docker:latest
```
alt + . 可以快速复制
# 使用 VSCode
## 用户使用 on-my-docker
```shell
FROM hone/on-my-docker:latest
```
需要安装一个 Remote Containers 插件
- 使用 ctrl + shift + p
- Reopen in Container  (目前这个目录是在 windows 里面的,我们需要在 Linux 里面打开这个目录，Linux 是我们的这个镜像)
- From a predefined container configuration definition...(不要点这个)
- 点击 From 'Dockerfile'

# 打开单独的目录
在学的时候不想看到其它的文件
- 文件/打开文件夹/1/node.js-demos
如何映射到 windows 上面?

# 常用的 docker 命令一览表
-`docker ps` 查看正在运行的容器
-`docker ps -a` 查看运行过的容器
-`docker pull ubuntu:20.04` 下载 ubuntu 镜像
-`docker pull myregistry.local:5000/testing/test-image:0.1` 下载指定域名下的镜像
-`docker run --name test -dit alpine` 由镜像得到容器（容器在后台运行），并把容器取名为 test
-`docker run alpine sh` 由镜像得到容器，并运行 sh 命令（容器在当前终端运行）
-`docker run -p 9090:8080 -dit alpine` 端口映射
-`docker run -e ENV1=foo -dit alpine` 设置环境变量
-`docker run --network=xxx -dit alpine` 设置网络
-`docker stop container_id` 或 `docker kill container_id` 停止容器（二者区别见这里）
-`docker start container_id` 开始运行容器
-`docker rm container_id` 删除已停止运行的容器
-`docker rm -f container_id` 强制删除容器，不管有没有在运行
-`docker rm $(docker ps --filter status=exited -q)` 删除所有已停止运行的容器
-`docker rmi image_id` 删除镜像
-`docker system prune` 删除占用硬盘的垃圾对象，包括没用的 container、images、network
-`docker image prune -a` 删除所有没被用到的镜像
