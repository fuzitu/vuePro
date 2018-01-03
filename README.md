#vue progress#
<br>
最近学习vue看完了文档,找项目练手但是公司事情比较杂,写的写的就忘了,因此用git来管理这个项目
------------------------------------------------------------------
##项目前的准备##
- 安装vue npm install vue
- 安装vue-cli npm install --global vue-cli
- vue init webpack my-project
- cd my-project
- npm install
- npm run dev 
通过以上步骤就借助脚手架工具快速的搭起一个vue项目

##利用的技术##
- vue
- vue-router
- axios  npm install axios
- vuex npm install vuex --save
- muse-ui npm install --save muse-ui

用到字体图标 坏掉 @import url("https://fonts.googleapis.com/icon?family=Material+Icons");

----------------------------------------------------------------------------
###开始干活###
####header####
- app bar 结构
- 需要有登录退出功能
点击左边需要出来登录的遮罩--
   未登录-遮罩为登录;
   已登录-为用户头像,签名等
点击右侧菜单需要有设置退出等功能
   已登录-应该有退出功能;
   未登录-没有退出功能
其他的模块也要用 所有单个组件并且引入vuex进行状态管理

store.js 总入口
types.js 不同种类的变量定义
modules 文件夹