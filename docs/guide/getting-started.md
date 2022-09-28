---
title: getting-started
date: 2022-09-22 15:40:37
permalink: /pages/b4548b/
categories:
  - guide
tags:
  - 
---
# 快速部署NetAxe

## Prerequisites

- [Node.js 10+](https://nodejs.org/en/)
- [Yarn Classic](https://classic.yarnpkg.com/en/) (Optional)\*
- [centos 7.x ](https://www.centos.org/download/)
- [docker 版本 >= 18.9](https://docs.docker.com/)
- [docker-compose 版本 >= 1.18.0](https://github.com/docker/compose/releases)

## 快速开始



### 1. docker配置更新

```shell script
sudo tee /etc/docker/daemon.json <<-'EOF'
{
"registry-mirrors": ["https://tawedu6l.mirror.aliyuncs.com"]
}
EOF
sudo systemctl daemon-reload
sudo systemctl restart docker
```


### 2. 网络设备配置备份目录 git 初始化


```shell script
git clone https://gitee.com/IFLY-DevNet/net-axe.git

cd net-axe

新建配置备份专用的工作目录,并对其进行git初始化

这个是配置备份的专用目录,git地址也应该是你自己单独建的一个仓库地址,跟本项目的git无关

mkdir -p netaxe/media/device_config/current-configuration

cd netaxe/media/device_config

在该目录下git关联配置备份git仓库,用来管理网络设备配置文件

git init

git remote add origin 仓库地址

git fetch

git checkout master

git branch --set-upstream-to=origin/master master

```

### 3. 启动数据库服务

```shell script
cd docker/databases

docker-compose up -d

```

### 4. 配置 conf 文件

```shell script
cd /net-axe 项目目录

cp netaxe/netboost/conf_bak.py netaxe/netboost/conf.py

修改项目配置文件,将宿主机的网卡IP配置替换到配置文件中(例如192.168.11.11,根据实际网卡IP配置)

sed -i "s/{SERVERIP}/192.168.11.11/g" netaxe/netboost/conf.py
```

### 5. 启动初始化服务

```shell script
cd docker/server

docker-compose -f init.yml up -d

```

### 6. 数据初始化

```shell script
进入后端服务容器命令行

docker exec -it netaxe-server /bin/bash

python3 manage.py migrate

python3 manage.py makemigrations asset

python3 manage.py migrate asset

python3 manage.py makemigrations rest_framework_tracking

python3 manage.py migrate rest_framework_tracking

python3 manage.py init_asset

python3 manage.py init_route

python3 manage.py createsuperuser # 新建管理员账户，要输入管理员账户和密码

exit
```

### 7. 关闭初始化服务

```bash
   关闭该路径下所有容器服务
   
   docker-compose -f init.yml down -v
   
```

### 8. 重新启动后端服务(docker/server 路径下)

```bash
docker-compose build

docker-compose up -d

```

### 9.登录页面

```bash
web 界面端口号 8888

django 后台端口 9999 浏览器访问为 http://服务器 IP:9999/admin

```