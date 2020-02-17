# <center><font color="red">2020前端工程化项目</font></center>
#### 1.前端组件化技术思维实战
- 组件不合理导致项目难以把控, 如何合理的设计组件
- 开发的敏捷度更高, 效率更高
- 要学会独立构建一个项目
- 技术选型分析
- 工程构建安装
- 项目设计及原理分析
- 项目开发
- 业务开发流程: 需求------技术选型-----业务开发-----测试验证------发布上线(小流量, 全量)
- 构建工具, MVVM框架选择, 模块化设计, 自适应方案设计(不同的客户端), 代码维护及复用性设计的思考
- gulp是做任务管理的, webpack做编译的
- gulp和grunt区别: gulp是流式的, grunt是io的, 大项目grunt不太合适, 比较慢
- 通过构建工具实现自适应, 多端的兼容
- 需求变更, 产品迭代, Bug定位, 新功能开发.
- css的模块化设计: reset.scss  项目初始化必备  layout.scss布局模块   element.scss组件模块
- 很多相同的布局都可以进行抽象, 比如横向列表, 纵向列表, 面板模型, 标题加内容, 通过一个参数进行配置

#### 2.yarn包管理工具的使用
- yarn init
- yarn add
- yarn remove
- yarn upgrade

#### SPA设计: 单页面设计

- 前后端分离, 减轻服务器压力, 增强用户体验, SSR优化SEO
- vue-router工作原理: history  api  入口和页面通过浏览器的前进后退控制
- hash方法


#### 京东金融项目首页需求分析
- 头部
- 轮播图
- 新手特权
- 极速贷款
- 理财精选
- 新品推荐
- 生活服务
- 在线客服
- 公司介绍
- 导航条
- 通用组件: Header  Footer   Navbar
``` bash
npm audit fix --force
npm audit
```
- npm的配置, webpack的配置, package.json配置

#### 项目开发

- 组件化css 
> reset.css: 去除所有默认css样式
> layout.css: css布局(默认纵向, 块状元素)
> element.css: 抽象成三大组件  按钮组件, 列表组件, 按钮组件, 其他的元素可以继承

- js组件化开发

> btn.vue: 默认的参数, 配置项
> panel.vue: 面板
> slider.vue: 滑动组件(列表组件)用vue-awesome-swiper,  npm进行安装

- 通用组件
> header, footer, navbar(导航条)

- viewport.js
> hotcss: 移动端布局解决方案
https://github.com/imochen/hotcss
需要在webpack.config.js中配置打包选项加载viewport.js文件