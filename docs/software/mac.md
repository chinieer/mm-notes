---
sidebarDepth: 2
---

# Mac 平台

## Homebrew

Mac 上安装命令行程序最好的工具

安装

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

切换镜像

```sh
# 切换 brew.git
cd "$(brew --repo)"
git remote set-url origin https://mirrors.aliyun.com/homebrew/brew.git

# 切换 homebrew-core.git
cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"
git remote set-url origin https://mirrors.aliyun.com/homebrew/homebrew-core.git

# 刷新
brew update

# 切换 homebrew-bottles
# 查看当前 shell
echo $SHELL

# Bash 版本
echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.aliyun.com/homebrew/homebrew-bottles' >> ~/.bash_profile
source ~/.bash_profile

# Zsh 版本
echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.aliyun.com/homebrew/homebrew-bottles' >> ~/.zshrc
source ~/.zshrc
```

切换镜像详细可查看[阿里云 Homebrew 镜像](https://developer.aliyun.com/mirror/homebrew?spm=a2c6h.13651102.0.0.e40a1b11ZkPX9D)

[软件官网](https://brew.sh/index_zh-cn)

## Terminal

使用 iTerm2 + oh-my-zsh

### iTerm2

Mac 上最好用的终端

1. 支持子窗口
2. 自动补全
3. 查看粘贴历史
4. 自定义配置项

```sh
# 查看所有的 shell
cat /etc/shells

# 查看当前窗口使用的 shell
echo $SHELL

# 查看系统用户默认的 shell
cat /etc/passwd | grep sh

# 切换系统默认 shell
chsh -s /bin/zsh
```

[软件官网](https://www.iterm2.com)

### oh-my-zsh

用于自定义 zsh 的配置

1. 主题配置
2. 插件安装

安装

```sh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

[Github](https://github.com/ohmyzsh/ohmyzsh)

## Mac 微信的功能拓展

1. 消息防撤回
2. 免认证登录与多开
3. 退群监控
4. 屏蔽更新

安装

```sh
# 安装小助手
curl -o- -L https://raw.githubusercontent.com/lmk123/oh-my-wechat/master/install.sh | bash -s

# 更新小助手
omw

# 微信在自动更新后会删除小助手，可运行以下命令恢复
omw -n
```

[软件地址](https://github.com/MustangYM/WeChatExtension-ForMac)
