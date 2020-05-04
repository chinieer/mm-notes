(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{348:function(t,a,e){"use strict";e.r(a);var s=e(22),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"git"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git"}},[t._v("#")]),t._v(" Git")]),t._v(" "),e("h2",{attrs:{id:"常用-git-命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用-git-命令"}},[t._v("#")]),t._v(" 常用 Git 命令")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),e("p",[t._v("[xxx] 均为可选参数")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("命令")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("作用")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("git clone 仓库地址")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("下载一个 Git 项目")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("git config --list")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("显示当前的 Git 配置")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v('git config [--global] user.name "名称"')]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("设置提交代码时的用户名称")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v('git config [--global] user.email "邮箱"')]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("设置提交代码时的邮箱地址")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("git add .")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("添加所有文件到暂存区")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v('git commit -m "提交信息"')]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("提交暂存区到仓库区")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v('git commit --amend -m "提交信息"')]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("替换（无代码改动就重写）上一次 commit 信息")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("git branch")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("列出所有本地分支")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("git branch -r")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("列出所有远程分支")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("git branch -a")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("列出所有本地分支和远程分支")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("git branch -d 分支名")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("删除分支")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("git branch 分支名")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("新建一个分支，但依然停留在当前分支")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("git checkout --orphan 分支名")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("新建一个空白分支")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("git status")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("显示变更的文件")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("git log")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("显示当前分支的版本历史")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("git merge 分支名")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("合并指定分支到当前分支")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("git remote -v")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("显示所有远程仓库")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("git pull [remote][branch]")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("取回远程仓库的变化，并与本地分支合并")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("git push [remote][branch]")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("上传本地指定分支到远程仓库")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("git push [remote] --force")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("强行推送当前分支到远程仓库，即使有冲突")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("git stash")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("暂时将未提交的变化移除")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("git stash pop")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("取出未提交的变化")])])])]),t._v(" "),e("p",[e("a",{attrs:{href:"command"}},[t._v("查看完整版 Git 命令")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/521xueweihan/git-tips",target:"_blank",rel:"noopener noreferrer"}},[t._v("git 命令大全 github"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"commit-常用-type"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#commit-常用-type"}},[t._v("#")]),t._v(" commit 常用 type")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("type")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("含义")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("feat")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("新功能")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("fix")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("修复 bug")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("improvement")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("对当前功能的改进")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("docs")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("修改文档")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("style")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("代码格式修改")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("refactor")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("重构（即不是新增功能，也不是修复 bug）")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("perf")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("更改代码以提高性能")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("test")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("增加测试")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("build")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("构建过程或辅助工具的变动")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("revert")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("恢复上一次提交")])])])]),t._v(" "),e("h2",{attrs:{id:"将代码提交到-github-的-gh-pages-分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#将代码提交到-github-的-gh-pages-分支"}},[t._v("#")]),t._v(" 将代码提交到 github 的 gh-pages 分支")]),t._v(" "),e("ol",[e("li",[t._v("安装 "),e("code",[t._v("gh-pages")])])]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -D gh-pages\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# OR npm install -D gh-pages")]),t._v("\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[t._v("在 "),e("code",[t._v("package.json")]),t._v(" 中添加如下脚本")])]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"deploy"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"gh-pages -d dist -m deploy"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"deploy:build"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"npm run build && npm run deploy"')]),t._v("\n")])])]),e("ol",{attrs:{start:"3"}},[e("li",[t._v("运行 "),e("code",[t._v("deploy")]),t._v(" 脚本")])]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" deploy\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# OR npm run deploy")]),t._v("\n")])])]),e("h2",{attrs:{id:"删除-git-中的所有提交历史记录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除-git-中的所有提交历史记录"}},[t._v("#")]),t._v(" 删除 Git 中的所有提交历史记录")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),e("p",[t._v("以 "),e("code",[t._v("master")]),t._v(" 分支为例")])]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建 orphan 分支")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout --orphan "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("分支名"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加需要上传文件")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 提交更改")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Initial"')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除需要清空提交记录的分支")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -D master\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将当前分支重命名为需要清空提交记录的分支名")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -m master\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 强制更新存储库")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push -f origin master\n")])])]),e("h2",{attrs:{id:"使用-github-actions-自动部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-github-actions-自动部署"}},[t._v("#")]),t._v(" 使用 GitHub Actions 自动部署")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/features/actions",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub Actions"),e("OutboundLink")],1),t._v(" 是 GitHub 的持续集成服务")]),t._v(" "),e("h3",{attrs:{id:"配置-secrets"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置-secrets"}},[t._v("#")]),t._v(" 配置 Secrets")]),t._v(" "),e("blockquote",[e("p",[t._v("Action 需要有操作仓库的权限")])]),t._v(" "),e("p",[t._v("GitHub 官方的帮助文档："),e("a",{attrs:{href:"https://help.github.com/cn/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line",target:"_blank",rel:"noopener noreferrer"}},[t._v("创建用于命令行的个人访问令牌"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("打开需要配置 Actions 的仓库，进入 "),e("code",[t._v("Settings/Secrets")]),t._v(" 页面，配置 "),e("code",[t._v("ACCESS_TOKEN")]),t._v(" 变量，储存内容为刚刚创建的个人访问令牌")]),t._v(" "),e("h3",{attrs:{id:"编写-workflow-文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编写-workflow-文件"}},[t._v("#")]),t._v(" 编写 "),e("code",[t._v("workflow")]),t._v(" 文件")]),t._v(" "),e("ol",[e("li",[t._v("点击仓库的 "),e("code",[t._v("Actions")]),t._v(" 按钮")]),t._v(" "),e("li",[t._v("点击 "),e("code",[t._v("Set up a workflow yourself")]),t._v(" 按钮")]),t._v(" "),e("li",[t._v("复制如下内容")])]),t._v(" "),e("div",{staticClass:"language-yml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" GitHub Actions Build and Deploy\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 触发条件: push 到 master 分支后")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("push")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branches")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" master\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 任务")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jobs")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("build-and-deploy")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 服务器环境：最新版 ubuntu")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runs-on")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ubuntu"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("latest\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 拉取代码")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Checkout\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/checkout@v2\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("persist-credentials")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打包静态文件")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Build\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" npm install "),e("span",{pre:!0,attrs:{class:"token important"}},[t._v("&&")]),t._v(" npm run build\n\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 部署")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Deploy\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" JamesIves/github"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pages"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("deploy"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("action@releases/v3\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# GitHub 密钥")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ACCESS_TOKEN")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.ACCESS_TOKEN "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# GitHub Pages 读取的分支")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("BRANCH")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" gh"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pages\n          "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 静态文件所在目录")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("FOLDER")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" dist\n")])])]),e("p",[t._v("详细教程可以参考阮一峰老师的"),e("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub Actions 入门教程"),e("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=n.exports}}]);