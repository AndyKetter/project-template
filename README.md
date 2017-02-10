# react+redux+router+hot项目模板
### by 墨含

```
.
├─ dist/             # build 生成的生产环境下的项目
├─ src/              # 源码目录（开发都在这里进行）
│   ├─ assets/         # 放置需要经由 Webpack 处理的静态文件
│   ├─ components/     # 自定义组件,一般为展示组件，而非容器组件
│   ├─ containers/     # 容器组件，连接redux
│   ├─ redux/          # Redux 一箩筐
│   │   ├─ actions/      # （ACTION）
│   │   ├─ constants/     # (CONTANTS)
│   │   ├─ reducers/     # （REDUCER）
│   │   ├─ store/        # （STORE）
│   ├── routes/        # 路由（ROUTE）
│   ├── services/      # 服务（SERVICE，用于统一管理 XHR 请求）
│   │   ├─ xhr/        # 自己封装的fetch和configs
│   ├── utils/         # 工具库（UTIL）
│   ├── app.jsx        # 启动文件
│   ├── index.html     # 静态基页
├── static/          # 放置无需经由 Webpack 处理的静态文件
├── .babelrc         # Babel 转码配置
├── .gitignore       # （配置）需被 Git 忽略的文件（夹）
├── package.json     # （这个就不用多解释了吧）
├── webpack.config.js         # （开发环境webpack配置）
├── webpack.production.js     # （生产环境webpack配置）
```