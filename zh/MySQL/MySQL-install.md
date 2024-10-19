# MySQL的安装和环境配置

## 1. 下载

> 程序版本：[点击下载](https://dev.mysql.com/downloads/installer/)
>
> 压缩包版：[点击下载](https://dev.mysql.com/downloads/mysql/)

## 2. 安装

> 程序版本：直接安装，有可视化界面提示，跟着提示进行操作即可
>
> 压缩包版：自行放置且解压，如 D:\MySQL\mysql-8.0.28-winx64

## 3. 环境配置

### 程序版本

该版本选择 msi 程序安装，默认会将环境添加到 PATH 中，exe 程序需要手动添加 bin 目录到 PATH 中

### 压缩包版

搜索 **`编辑系统环境变量`** 打开

> 将 `D:\MySQL\mysql-8.0.28-winx64\bin` 添加到 PATH 中

## 添加配置文件

1. 创建一个配置文件，如：**`my.ini`**
2. 将如下内容复制到配置文件中，路劲需修改为实际路径

```ini
[mysqld]

# Remove leading # and set to the amount of RAM for the most important data
# cache in MySQL. Start at 70% of total RAM for dedicated server, else 10%.
# innodb_buffer_pool_size = 128M

# Remove leading # to turn on a very important data integrity option: logging
# changes to the binary log between backups.
# log_bin

# These are commonly set, remove the # and set as required.
# 设置MYSQL的安装目录
basedir=D:\MySQL\mysql-8.0.28-winx64
# 设置MYSQL的数据目录
datadir=D:\MySQL\mysql-8.0.28-winx64\data
# 设置端口
port=3306
# server_id = .....

# Remove leading # to set options mainly useful for reporting servers.
# The server defaults are faster for transactions and fast SELECTs.
# Adjust sizes as needed, experiment to find the optimal values.
# join_buffer_size = 128M
# sort_buffer_size = 2M
# read_rnd_buffer_size = 2M 
#设置SQL模式
sql_mode=NO_ENGINE_SUBSTITUTION,STRICT_TRANS_TABLES
```

----

Pending...
