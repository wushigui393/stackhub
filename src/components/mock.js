import { Avatar  } from 'antd'
 
//构建工具
const buildTools={
  title: '构建工具',
  key: 'buildTools',
  href: '#buildTools',
  value:  [
    {
      title: 'Vite',
      size:'small',
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src="https://vitejs.dev/logo.svg"
      />
        // <img width={50}  height={50} src="https://vitejs.dev/logo.svg"  />
        
      ),
      description: 'Vite 是一个超快的前端构建工具，赋能下一代 Web 应用的发展',
      value: 'https://cn.vitejs.dev/',
    },
    {
      title: 'Webpack',
      size:'small',
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src="https://cdn.docschina.org/home/logo/webpack-offical.svg"
      />
        // <img width={50}  height={50} src="https://cdn.docschina.org/home/logo/webpack-offical.svg"  />
      ),
      description: '一个用于现代 JavaScript 应用程序的 静态模块打包工具',
      value: 'https://webpack.docschina.org/',
    },
    {
      title: 'Rollup',
      size:'small',
      avatar: (
      //   <Avatar
      //   size={32}
      //   shape="square"
      //   src="https://cdn.docschina.org/home/logo/rollup.svg"
      // />
        <img width={32}  height={5} src="https://cdn.docschina.org/home/logo/rollup.svg"  />

      ),
      description: '一个用于 JavaScript 的模块打包工具，它将小的代码片段编译成更大、更复杂的代码，例如库或应用程序',
      value: 'https://rollup.docschina.org/',
    },
    {
      title: 'Gulp',
      size:'small',
      avatar: (
        <Avatar
          size={32}
          shape="square"
          src="https://cdn.docschina.org/home/logo/gulp.svg"
        />
      ),
      description: '自动化并增强工作流程的工具包。利用 Gulp 和 JavaScript 的灵活性来自动执行缓慢、重复的工作流，并将其组合成高效的构建管道',
      value:'https://www.gulpjs.com.cn/'
    },
    {
      title: 'Parcel',
      size:'small',
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src="https://cdn.docschina.org/home/logo/parcel.png"
      />
        // <img width={50}  height={50} src="https://cdn.docschina.org/home/logo/parcel.png" ></img>
      ),
      description: 'Parcel 是 Web 应用打包工具，适用于经验不同的开发者。它利用多核处理提供了极快的速度，并且不需要任何配置。',
      value:'https://parceljs.docschina.org/'
    },
    {
      title: 'Grunt',
      size:'small',
      avatar: (
        <Avatar
          size={32}
          shape="square"
          src="https://cdn.docschina.org/home/logo/grunt.svg"
        />
      ),
      description: 'JavaScript 世界的构建工具',
      value:'https://grunt.docschina.org/'
    },
    {
      title: 'turborepo',
      size:'small',
      avatar: (
        <Avatar
          size={32}
          shape="square"
          src="https://turbo.build/images/docs/pack/turbopack-hero-logo-dark.svg"
        />
      ),
      description: 'webpack创始人下一代构建工具',
      value:'https://turbo.build/'
    },
    {
      title: 'Babel',
      size:'small',
      avatar: (
        // <Avatar
        //   size={32}
        //   shape="square"
        //   src="https://cdn.docschina.org/home/logo/babel.png"
        // />
        <img width={50}  height={32} src="https://cdn.docschina.org/home/logo/babel.png" ></img>
      ),
      description: '让你可以项目中直接使用下一代JavaScript',
      value:'https://babel.docschina.org/'
    },
    {
      title: 'Lerna',
      size:'small',
      avatar: (
        <Avatar
          size={32}
          shape="square"
          src="https://cdn.docschina.org/home/logo/lerna.svg"
        />
      ),
      description: '用于管理有多个包的JavaScript项目的工具',
      value:'https://lerna.js.org/'
    },
  ]
}
//CSS
const cssTools={
  title: 'CSS',
  key: 'cssTools',
  href: '#cssTools',
  value:  [
    {
      title: 'Sass',
      size:'small',
      avatar: (
      //   <Avatar
      //   size={32}
      //   shape="square"
      //   src="https://cdn.docschina.org/home/logo/sass.svg"
      // />
        <img width={50}  height={50} src="https://cdn.docschina.org/home/logo/sass.svg"  />
        
      ),
      description: 'Sass 是 CSS 的一个扩展,它使 CSS 的使用起来更加优雅和强大。',
      value: 'https://sass-guidelin.es/zh/',
    },
    {
      title: 'Less',
      size:'small',
      avatar: (
      //   <Avatar
      //   size={16}
      //   shape="square"
      //   src="https://cdn.docschina.org/home/logo/less.svg"
      // />
        <img width={50}  height={30} src="https://cdn.docschina.org/home/logo/less.svg"  />
      ),
      description: 'Less 是一个动态样式表语言，它扩展了 CSS，添加了变量、嵌套规则、混合宏（mixins）等功能，使得 CSS 更加模块化、可维护。使用 Less，你可以更容易地创建和管理 CSS 样式，尤其是在大型项目中',
      value: 'https://lesscss.org/',
    },
    {
      title: 'PostCSS',
      size:'small',
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src="https://cdn.docschina.org/home/logo/postcss.svg"
      />
        // <img width={40}  height={45} src="https://cdn.docschina.org/home/logo/rollup.svg"  />

      ),
      description: '是一个用 JavaScript 转换 CSS 的工具',
      value: 'https://postcss.docschina.org/',
    },
    {
      title: 'Stylus',
      size:'small',
      avatar: (
        // <Avatar
        //   size={32}
        //   shape="square"
        //   src="https://cdn.docschina.org/home/logo/stylus.svg"
        // />
        <img width={40}  height={45} src="https://cdn.docschina.org/home/logo/stylus.svg"  />
      ),
      description: ' CSS 预处理器，功能强大且灵活。它扩展了 CSS 的功能，提供了更强的语法和功能，使得编写样式表更加高效和动态。Stylus 可以帮助开发者编写简洁且易于维护的 CSS 代码。',
      value:'https://www.zhangxinxu.com/jq/stylus/'
    },
  ]
}
//前端框架
const frontEndFrame={
  title: '前端框架',
  key: 'frontEndFrame',
  href: '#frontEndFrame',
  value:  [
    {
      title: 'React',
      size:'small',
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src="https://cdn.docschina.org/home/logo/react.svg"
      />
        // <img width={50}  height={50} src="https://cdn.docschina.org/home/logo/sass.svg"  />
        
      ),
      description: '用于构建 Web 和原生交互界面的库',
      value: 'https://react.docschina.org/',
    },
    {
      title: 'Vue2',
      size:'small',
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src="https://cdn.docschina.org/home/logo/vue.svg"
      />
        // <img width={50}  height={50} src="https://cdn.docschina.org/home/logo/sass.svg"  />
        
      ),
      description: '渐进式 JavaScript 框架(终止支持且不再维护)',
      value: 'https://v2.cn.vuejs.org/v2/guide/',
    },
    {
      title: 'Vue3',
      size:'small',
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src="https://cdn.docschina.org/home/logo/vue.svg"

      />
        // <img width={50}  height={50} src="https://cdn.docschina.org/home/logo/sass.svg"  />
        
      ),
      description: '一款用于构建用户界面的 JavaScript 框架',
      value: 'https://cn.vuejs.org/guide/introduction.html',
    },
    {
      title: 'Angular',
      size:'small',
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src="https://cdn.docschina.org/home/logo/angular.svg"
      />
        // <img width={50}  height={50} src="https://cdn.docschina.org/home/logo/sass.svg"  />
        
      ),
      description: '程序开发平台,用于创建高效且复杂的单页应用',
      value: 'https://angular.dev/',
    },
    {
      title: 'Solid',
      size:'small',
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src="https://cdn.docschina.org/home/logo/solid.svg"
      />
        // <img width={50}  height={50} src="https://cdn.docschina.org/home/logo/sass.svg"  />
        
      ),
      description: '简单高效、性能卓越的JavaScript库',
      value: 'https://www.solidjs.com/',
    },
    {
      title: 'Svelte',
      size:'small',
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src="https://cdn.docschina.org/home/logo/svelte.svg?t=1"
      />
        // <img width={50}  height={50} src="https://cdn.docschina.org/home/logo/sass.svg"  />
        
      ),
      description: '声明性组件转换为高效更新DOM的轻量级框架',
      value: 'hhttps://svelte.dev/',
    },
  ]  
}
//小程序
const miniProgram={
  title: '小程序',
  key: 'miniProgram',
  href: '#miniProgram',
  value:  [
    {
      title: 'Kbone',
      size:'small',
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src="https://open.weixin.qq.com/zh_CN/htmledition/res/assets/res-design-download/icon64_wx_logo.png"
      />
        // <img width={50}  height={50} src="https://cdn.docschina.org/home/logo/sass.svg"  />
        
      ),
      description: '一个致力于微信小程序和 Web 端同构的解决方案',
      value: 'https://developers.weixin.qq.com/miniprogram/dev/platform-capabilities/extended/kbone/',
    },
    {
      title: 'uni-app',
      size:'small',
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src="https://cdn.docschina.org/home/logo/uniapp.jpeg"
      />
        // <img width={50}  height={50} src="https://cdn.docschina.org/home/logo/sass.svg"  />
        
      ),
      description: '一个使用 Vue.js 开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、Web（响应式）、以及各种小程序（微信/支付宝/百度/头条/飞书/QQ/快手/钉钉/淘宝）、快应用等多个平台',
      value: 'https://uniapp.dcloud.net.cn/',
    },
    {
      title: 'mpvue',
      size:'small',
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src="https://cdn.docschina.org/home/logo/mpvue.png"
      />
        // <img width={50}  height={50} src="https://cdn.docschina.org/home/logo/sass.svg"  />
        
      ),
      description: '一个使用 Vue.js 开发小程序的前端框架',
      value: 'http://mpvue.com/',
    },
    {
      title: 'mpx',
      size:'small',
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src="https://cdn.docschina.org/home/logo/mpx-logo.png"
      />
        // <img width={50}  height={50} src="https://cdn.docschina.org/home/logo/sass.svg"  />
        
      ),
      description: '良好的开发体验，极致的应用性能，完整的原生兼容，一份源码跨端输出所有小程序平台及Web。',
      value: 'https://mpxjs.cn/',
    },
    {
      title: 'Taro',
      size:'small',
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src="https://cdn.docschina.org/home/logo/taro.png"
      />
        // <img width={50}  height={50} src="https://cdn.docschina.org/home/logo/sass.svg"  />
        
      ),
      description: '一套遵循 React 语法规范的 多端开发 解决方案',
      value: 'https://nervjs.github.io/taro-docs/en/docs/2.x/',
    },
    {
      title: 'wxa',
      size:'small',
      avatar: (
      //   <Avatar
      //   size={32}
      //   shape="square"
      //   src="/wxajs.svg"
      // />
        <img width={50}  height={50} src="/wxajs.svg"  />
        
      ),
      description: '轻量级的渐进式小程序开发框架，专注于小程序原生开发，提供更好的工程化、代码复用能力，提高开发效率并改善开发体验。',
      value: 'https://webankfintech.github.io/wxa/',
    },
    {
      title: 'wepy',
      size:'small',
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src="https://opensource.tencent.com/img/wepy.png"
      />
        // <img width={50}  height={50} src="https://cdn.docschina.org/home/logo/sass.svg"  />
        
      ),
      description: '一款让小程序支持组件化开发的框架，通过预编译的手段让开发者可以选择自己喜欢的开发风格去开发小程序',
      value: 'https://wepyjs.github.io/wepy-docs/',
    },
    {
      title: 'chameleon(变色龙)',
      size:'small',
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src="https://cdn.docschina.org/home/logo/chameleon.png"
      />
        // <img width={50}  height={50} src="https://cdn.docschina.org/home/logo/sass.svg"  />
        
      ),
      description: '一个跨多端开发的统一解决方案，它可以像变色龙一样适应不同的环境。一次开发，多端运行，一端所见即多端所见',
      value: 'https://cml.js.org/',
    },
    {
      title: 'OMI',
      size:'small',
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src="https://omi.cdn-go.cn/admin/latest/home/omi.svg"
      />
        // <img width={50}  height={50} src="https://cdn.docschina.org/home/logo/sass.svg"  />
        
      ),
      description: 'Omi 可以开发桌面 Web、移动 H5，同时支持开发小程序。',
      value: 'https://omi.cdn-go.cn/home/latest/',
    },
  
  ]  
}
//nodejs&Deno
const nodejsDeno={
  title: 'Nodejs & Deno', 
  key: 'nodejsDeno',
  href: '#nodejsDeno',
  value:  [
    {
      title: 'Node.js',
      size:'small', 
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src="https://cdn.docschina.org/home/logo/node.svg"
      />
        // <img width={50}  height={50} src=""  />
        
      ),
      description: 'Node.js 是一个开源的、跨平台的 JavaScript 运行时环境。欢迎使用 Node.js 中文网',
      value: 'https://nodejs.cn/',
    },
    {
      title: 'Koa',
      size:'small', 
      avatar: (
      //   <Avatar
      //   size={32}
      //   shape="square"
      //   src="https://cdn.docschina.org/home/logo/koa.svg"
      // />
        <img width={50}  height={50} src="https://cdn.docschina.org/home/logo/koa.svg"  />
        
      ),
      description: '用于Node.js的下一代Web框架',
      value: 'https://koa.nodejs.cn/',
    },  
    {
      title: 'egg',
      size:'small', 
      avatar: (
      //   <Avatar
      //   size={32}
      //   shape="square"
      //   src="https://cdn.docschina.org/home/logo/egg.png"
      // />
        <img width={75}  height={80} src="https://cdn.docschina.org/home/logo/egg.png"  />
        
      ),
      description: '为企业级框架和 Node.js & Koa 应用程序而生',
      value: 'https://eggjs.github.io/',
    },  
    {
      title: 'Deno',
      size:'small', 
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src="https://cdn.docschina.org/home/logo/deno.svg"
      />
        // <img width={50}  height={50} src=""  />
        
      ),
      description: 'Deno，TypeScript 和 JavaScript 的开源运行时。内置开发工具，强大的平台 API，以及对 TypeScript 和 JSX 的原生支持',
      value: 'https://docs.deno.org.cn/runtime/',
    },  
    {
      title: 'Express',
      size:'small', 
      avatar: (
      //   <Avatar
      //   size={32}
      //   shape="square"
      //   src="https://cdn.docschina.org/home/logo/express.png"
      // />
        <img width={50}  height={50} src="https://cdn.docschina.org/home/logo/express.png" />
        
      ),
      description: '高度包容、快速而极简的 Node.js Web 框架',
      value: 'https://expressjs.com/zh-cn/',
    },  
    {
      title: 'npm',
      size:'small', 
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src="https://cdn.docschina.org/home/logo/npm.png"
      />
        // <img width={50}  height={50} src=""  />
        
      ),
      description: 'npm 是世界上最大的软件注册表。来自各大洲的开源开发者使用 npm 来共享和借用包，许多组织也使用 npm 来管理私有开发。',
      value: 'https://npm.nodejs.cn/#google_vignette',
    },  
    {
      title: 'Electron',
      size:'small', 
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src="https://electronjs.p2hp.com/assets/img/logo.svg"
      />
        // <img width={50}  height={50} src=""  />
        
      ),
      description: '使用 JavaScript、HTML 和 CSS 构建桌面应用程序的框架',
      value: 'https://electronjs.p2hp.com/',
    },  
    {
      title: 'yarn',
      size:'small', 
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src="https://cdn.docschina.org/home/logo/yarn.png"
      />
        // <img width={50}  height={50} src=""  />
        
      ),
      description: 'Yarn 是一个兼作项目管理器的包管理器。无论你从事简单项目还是行业大仓，无论你是开源开发者还是企业用户，Yarn 都能为你提供支持',
      value: 'https://yarn.nodejs.cn/',
    },  
    {
      title: 'npmmirror',
      size:'small', 
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src="https://npmmirror.com/cnpm.png"
      />
        // <img width={50}  height={50} src=""  />
        
      ),
      description: '淘宝提供的 npmjs.org 镜像',
      value: 'https://npmmirror.com/',
    },  
    {
      title: 'nest',
      size:'small', 
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src="https://cdn.docschina.org/home/logo/nest.png"
      />
        // <img width={50}  height={50} src=""  />
        
      ),
      description: '渐进式 JavaScript，构建并完全支持 TypeScript（但仍然允许开发者使用纯 JavaScript 进行编码）并结合了 OOP（面向对象编程）、FP（函数式编程）和 FRP（函数式反应式编程）的元素。',
      value: 'https://nest.nodejs.cn/',
    },  
    {
      title: 'ThinkJS',
      size:'small', 
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src="https://cdn.docschina.org/home/logo/think.png"
      />
        // <img width={50}  height={50} src=""  />
        
      ),
      description: '一款面向未来开发的 Node.js 框架，整合了大量的项目最佳实践，让企业级开发变得更简单、高效。从 3.0 开始，框架底层基于 Koa 2.x 实现，兼容 Koa 的所有功能。',
      value: 'https://thinkjs.org/doc/index.html',
    },
    {
      title: 'bun',
      size:'small', 
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src="https://bun.sh/logo.svg"
      />
        // <img width={50}  height={50} src=""  />
        
      ),
      description: 'JavaScript新一代一站式运行时',
      value: 'https://bun.sh/',
    },    
  ]
}
//react
const reactSet={
  title: 'React',
  key: 'reactSet',
  href: '#reactSet',
  value:  [
    {
      title: 'Redux',
      size:'small', 
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src="https://cdn.docschina.org/home/logo/redux.svg"
      />
        // <img width={50}  height={50} src=""  />  
      ),
      description: 'Redux 是 JavaScript 状态容器，提供可预测化的状态管理',
      value: 'https://react-redux.nodejs.cn/',
    },
    {
      title: 'Next.js',
      size:'small', 
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src="https://cdn.docschina.org/home/logo/nextjs.png"
      />
        // <img width={50}  height={50} src=""  />
        
      ),
      description: '全栈 React 框架。利用 React 组件的强大功能创建高质量的 Web 应用',
      value: 'https://next.nodejs.cn/docs/',
    },
    {
      title: 'React Router',
      size:'small', 
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src="https://cdn.docschina.org/home/logo/react-router.svg"
      />
        // <img width={50}  height={50} src=""  />
        
      ),
      description: '一个基于 React 之上的强大路由库，它可以让你向应用中快速地添加视图和数据流，同时保持页面与 URL 间的同步。',
      value: 'https://react-guide.github.io/react-router-cn/docs/Introduction.html',
    }, 
    {
      title: 'Create React App',
      size:'small', 
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src="https://cdn.docschina.org/home/logo/create-react-app.svg"
      />
        // <img width={50}  height={50} src=""  />
        
      ),
      description: '官方支持的创建单页 React 应用的方法。它提供了一个没有配置的现代构建设置。',
      value: 'https://cra.nodejs.cn/',
    }, 
    {
      title: 'Preact',
      size:'small', 
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src="https://cdn.docschina.org/home/logo/preact.png"
      />
        // <img width={50}  height={50} src=""  />
        
      ),
      description: 'React 的 3kb 轻量化方案，拥有同样的 ES6 API 和组件。',
      value: 'https://preact.nodejs.cn/',
    }, 
    {
      title: 'Flow',
      size:'small', 
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src="/flow.svg"
      />
        // <img width={50}  height={50} src=""  />
        
      ),
      description: '可定制的 React 组件，用于构建基于节点的编辑器和交互式图表',
      value: 'https://reactflow.nodejs.cn/',
    }, 
    {
      title: 'Navigation',
      size:'small', 
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src="https://react-navigation.nodejs.cn/img/spiro.svg"
      />
        // <img width={50}  height={50} src=""  />
        
      ),
      description: 'React Native 和 Web 应用的路由和导航。',
      value: 'https://react-navigation.nodejs.cn/',
    }, 
    {
      title: 'Gatsby ',
      size:'small', 
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src="https://cdn.docschina.org/home/logo/Gatsby.svg"
      />
        // <img width={50}  height={50} src=""  />
        
      ),
      description: '一个基于 React 的免费、开源框架，用于帮助 开发者构建运行速度极快的 网站 和 应用程序',
      value: 'https://www.gatsbyjs.cn/',
    }, 
    {
      title: 'ICE.js(飞冰)',
      size:'small', 
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src="https://cdn.docschina.org/home/logo/icework.png"
      />
        // <img width={50}  height={50} src=""  />
        
      ),
      description: '基于 React 的应用研发框架，开箱即用，同时支持移动端和桌面端',
      value: 'https://v3.ice.work/',
    }, 
    {
      title: 'Umi.js',
      size:'small', 
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src="https://cdn.docschina.org/home/logo/umi.png"
      />
        // <img width={50}  height={50} src=""  />
        
      ),
      description: '插件化的企业级前端应用框架',
      value: 'https://umijs.org/',
    }, 
    {
      title: 'Hook Form',
      size:'small', 
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src="https://avatars.githubusercontent.com/u/53986236?s=200&v=4"
      />
        // <img width={50}  height={50} src=""  />
        
      ),
      description: '高性能、灵活、可扩展的表单，且具有易于使用的校验。用于表单验证的 React Hooks',
      value: 'https://react-hook-form.nodejs.cn/',
    }   
  ] 
}
//reactUI框架
const reactUI={
  title: 'React 组件库', 
  key: 'reactUI',
  href: '#reactUI',
  value:  [
    {
      title: 'Ant Design',
      size:'small', 
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src="https://cdn.docschina.org/home/logo/antd.svg"
      />
        // <img width={50}  height={50} src=""  />
        
      ),
      description: '基于 Ant Design 设计体系的 React UI 组件库，主要用于研发企业级中后台产品。',
      value: 'https://ant.design/index-cn',
    },
    {
      title: 'Material UI',
      size:'small', 
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src="https://cdn.docschina.org/home/logo/material.svg"
      />
        // <img width={50}  height={50} src=""  />
        
      ),
      description: '个开源的 React 组件库，实现了 Google 的 Material Design。它功能全面，开箱即用',
      value: 'https://mui.com/material-ui/',
    }, 
    {
      title: 'Chakra UI',
      size:'small', 
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src="https://cdn.docschina.org/home/logo/chakra.svg"
      />
        // <img width={50}  height={50} src=""  />
        
      ),
      description: '是一个用于构建产品的组件系统。易于使用的 React 组件，用于构建高质量的 Web 应用和设计系统。可与 Next.js RSC 配合使用',
      value: 'https://chakra-ui.com/',
    },
    {
      title: 'Mantine',
      size:'small', 
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src="https://cdn.docschina.org/home/logo/mantine.svg"
      />
        // <img width={50}  height={50} src=""  />
        
      ),
      description: '一款功能齐全的 React 组件和 Hook 库，同时支持Preact',
      value: 'https://mantine.dev/',
    }  ,
    {
      title: 'Windy',
      size:'small', 
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src="https://cdn.docschina.org/home/logo/windy.svg"
      />
        // <img width={50}  height={50} src=""  />
        
      ),
      description: '基于 Tailwind 的 React 组件库',
      value: 'https://windy-docs.vercel.app/',
    }  ,
    {
      title: 'Evergreen',
      size:'small', 
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src="https://cdn.docschina.org/home/logo/evergreen.svg"
      />
        // <img width={50}  height={50} src=""  />
        
      ),
      description: '一个 React UI 框架，用于在 Web 上构建雄心勃勃的产品。由 Segment 提供。',
      value: 'https://evergreen.segment.com/',
    }  ,
    {
      title: 'Zent',
      size:'small', 
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src="https://cdn.docschina.org/home/logo/zent.png"
      />
        // <img width={50}  height={50} src=""  />
        
      ),
      description: '是有赞 PC 端 WebUI 规范的 React 实现，提供了一整套基础的 UI 组件以及一些常用的业务组件。目前我们有 50+ 组件，这些组件都已经在有赞的各类 PC 业务中使用，我们会在此基础上，持续开发一些新组件。我们的目标是让 React 项目开发更快、更简单。',
      value: 'https://youzan.github.io/zent/zh/guides/install',
    } , 
    {
      title: 'React-Bootstrap',
      size:'small', 
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src="https://cdn.docschina.org/home/logo/react-bootstrap.svg"
      />
        // <img width={50}  height={50} src=""  />
        
      ),
      description: '基于 Bootstrap 实现的 React 组件库',
      value: 'https://react-bootstrap.github.io/',
    }  ,
    {
      title: 'Fusion Design',
      size:'small', 
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src="https://cdn.docschina.org/home/logo/fusion.svg"
      />
        // <img width={50}  height={50} src=""  />
        
      ),
      description: 'Alibaba Fusion Design 企业级的中后台设计系统解决方案',
      value: 'https://fusion.design/pc/?themeid=2',
    }  ,
    {
      title: 'React Component',
      size:'small', 
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src="https://cdn.docschina.org/home/logo/react.svg"
      />
        // <img width={50}  height={50} src=""  />
        
      ),
      description: 'Ant Design 中各个组件的对应实现',
      value: 'https://react-component.github.io/badgeboard/',
    } 

  ] 
}
//Vue
const vueSet={
  title: 'Vue',
  key: 'vueSet',
  href: '#vueSet',
  value:  [
    {
      title: 'vue-cli',
      size:'small', 
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src="https://cdn.docschina.org/home/logo/vue.svg"
      />
        // <img width={50}  height={50} src=""  />
        
      ),
      description: 'Vue.js 官方指定的脚手架工具',
      value: 'https://cli.vuejs.org/',
    },
    {
      title: 'Vue Router v4',
      size:'small', 
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src="https://cdn.docschina.org/home/logo/vue.svg"
      />
        // <img width={50}  height={50} src=""  />
        
      ),
      description: 'vue3 ,富有表现力、可配置且便捷的 Vue.js 路由',
      value: 'https://router.vuejs.org/',
    },  
    {
      title: 'Vue Router v3',
      size:'small', 
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src="https://cdn.docschina.org/home/logo/vue.svg"
      />
        // <img width={50}  height={50} src=""  />
        
      ),
      description: 'vue2 官方路由,富有表现力、可配置且便捷的 Vue.js 路由',
      value: 'https://router.vuejs.org/v3/',
    },  
    {
      title: 'Vuex',
      size:'small', 
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src="https://cdn.docschina.org/home/logo/vue.svg"
      />
        // <img width={50}  height={50} src=""  />
        
      ),
      description: 'Vuex 是Vue.js 应用程序的状态管理模式及库。它集中存储应用程序中所有组件的状态，并通过规则确保状态只能以可预测的方式进行更改。',
      value: 'https://vuex.vuejs.org/',
    },  
    {
      title: 'Pinia',
      size:'small', 
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src="https://pinia.vuejs.org/logo.svg"
      />
        // <img width={50}  height={50} src=""  />
        
      ),
      description: 'Pinia最初是在 2019 年 11 月左右开始的一项实验，旨在使用Composition API重新设计 Vue 商店的外观。从那时起，最初的原则一直保持不变，并且 Vue 2 支持已于 2025 年停止，但 Pinia并不要求您使用 Composition API。',
      value: 'https://pinia.vuejs.org/',
    }, 
    {
      title: 'Vetur',
      size:'small', 
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src="https://cdn.docschina.org/home/logo/vue.svg"
      />
        // <img width={50}  height={50} src=""  />
        
      ),
      description: '为 Vue 2 量身打造的 VSCode 插件',
      value: 'https://vuejs.github.io/vetur/',
    },  
    {
      title: 'vue-devtools',
      size:'small', 
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src="https://cdn.docschina.org/home/logo/vue-devtools.svg"
      />
        // <img width={50}  height={50} src=""  />
        
      ),
      description: '用于调试 Vue.js 应用程序的 devtool 扩展',
      value: 'https://devtools.vuejs.org/',
    },  
    {
      title: 'Nuxt.js',
      size:'small', 
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src="https://cdn.docschina.org/home/logo/nuxt.svg"
      />
        // <img width={50}  height={50} src=""  />
        
      ),
      description: '基于 Vue.js 的一站式解决方案',
      value: 'https://nuxt.com/',
    },  
    {
      title: 'VueUse',
      size:'small', 
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src="https://vueuse.nodejs.cn/favicon.svg"
      />
        // <img width={50}  height={50} src=""  />
        
      ),
      description: 'Vue 组合式工具集 ,础 Vue 组合式工具的集合',
      value: 'https://vueuse.nodejs.cn/#google_vignette',
    },    
    {
      title: 'EslintVue',
      size:'small', 
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src="https://cdn.docschina.org/home/logo/vue.svg"
      />
        // <img width={50}  height={50} src=""  />
        
      ),
      description: 'Vue.js 的官方 ESLint 插件',
      value: 'https://eslint-vue.nodejs.cn/',
    },  
  ] 
}
//Vue组件库
const vueUI={
  title: 'Vue 组件库',
  key: 'vueUI',
  href: '#vueUI',
  value:  [
    {
      title: 'Element',
      size:'small', 
      avatar: (
      //   <Avatar
      //   size={32}
      //   shape="square"
      //   src="data:image/svg+xmlbase64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjE0NnB4IiBoZWlnaHQ9IjM4cHgiIHZpZXdCb3g9IjAgMCAxNDYgMzgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQwICgzMzc2MikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+U2hhcGUgQ29weTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJ2Mi4yLjAiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLpppbpobUt6buY6K6k5pWI5p6cLWNvcHktMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTcwLjAwMDAwMCwgLTE5LjAwMDAwMCkiIGZpbGw9IiM0MDlFRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMjEyLjEzNTQ0MSw0NS4xNTc4MDc3IEMyMTIuMTM1NDQxLDQ1LjE1NzgwNzcgMjEyLjQyMDIzNyw0NS4xNTA1MTA1IDIxMi45NjA5MzcsNDUuMTU3ODA3NyBDMjEzLjUwMTYzNyw0NS4xNjUxMDQ5IDIxMy42NDg4NTEsNDUuNTcwODU1NiAyMTMuNjQ4ODUxLDQ1LjU3MDg1NTYgQzIxMy42NDg4NTEsNDUuNTcwODU1NiAyMTQuNzMzODI4LDQ3LjU2NjU2NTcgMjE1LjAyNDY3Nyw0OC4wNDkxNDM0IEMyMTUuMjgzNjA4LDQ4LjQ3ODcxMzMgMjE0Ljk3MzIyMSw0OC40NzA4NjU0IDIxNC45MDE4MTYsNDguNDYzODQzNiBDMjE0LjkwMjUwNCw0OC40NjI4Nzk4IDIxNC44ODcwOTUsNDguNDYyMTkxNCAyMTQuODg3MDk1LDQ4LjQ2MjE5MTQgQzIxNC44ODcwOTUsNDguNDYyMTkxNCAyMTQuODkzMDExLDQ4LjQ2MzAxNzUgMjE0LjkwMTgxNiw0OC40NjM4NDM2IEMyMTQuODk4NjUyLDQ4LjQ2ODI0OTUgMjE0LjU5NDczMSw0OC40NzgzMDAzIDIxMS40NDc1MjgsNDguNDYyMTkxNCBDMjA3LjA1ODY0MSw0Ny44NjY1NzYyIDIwNi45MDczLDQzLjkxODY2MzggMjA2LjkwNzMsNDMuOTE4NjYzOCBMMjA2LjkwNzMsMzYuODk2ODQ4MyBMMjA0LjQzMDgxMiwzNi44OTY4NDgzIEwyMDQuNDMwODEyLDM0LjI4MDg3NzkgQzIwNC40MzA4MTIsMzMuOTI0Mjc5OCAyMDQuODQzNTYsMzMuODY3ODI5OSAyMDQuODQzNTYsMzMuODY3ODI5OSBMMjA2LjkwNzMsMzMuODY3ODI5OSBMMjA2LjkwNzMsMzEuMjUxODU5NCBDMjA2LjkwNzMsMzAuODI1MTgwOSAyMDcuMzIwMDQ4LDMwLjcwMTEyODggMjA3LjMyMDA0OCwzMC43MDExMjg4IEMyMDcuMzIwMDQ4LDMwLjcwMTEyODggMjA4Ljc3MjY0NiwzMC4yODU4Nzc5IDIwOS42MTc4MTYsMzAuMDQ0MTA3MiBDMjA5Ljk2NDY2MiwyOS45NDQ5NzU2IDIxMC4wNzE3MDEsMzAuMTUwMzk4MiAyMTAuMDcxNzAxLDMwLjE1MDM5ODIgQzIxMC4wNzE3MDEsMzAuMTUwMzk4MiAyMTAuMjA5Mjg0LDMwLjA3NzQyNjQgMjEwLjIwOTI4NCwzMC4zOTI3MTk2IEwyMTAuMjA5Mjg0LDM0LjAwNTUxMjUgTDIxMy43ODY0MzMsMzQuMDA1NTEyNSBDMjE0LjEzNDY1NSwzNC4wMDU1MTI1IDIxNC4xOTkxODEsMzQuNDE4NTYwNSAyMTQuMTk5MTgxLDM0LjQxODU2MDUgTDIxNC4xOTkxODEsMzcuMDM0NTMxIEwyMTAuMjA5Mjg0LDM3LjAzNDUzMSBMMjEwLjIwOTI4NCw0My4wOTI1Njc4IEMyMTAuMjA5Mjg0LDQ0Ljg1MzM5MTMgMjEyLjEzNTQ0MSw0NS4xNTc4MDc3IDIxMi4xMzU0NDEsNDUuMTU3ODA3NyBMMjEyLjEzNTQ0MSw0NS4xNTc4MDc3IFogTTIwMS41NDE1NzYsNDguMTg2ODI2MSBMMTk5LjM0MDI1Myw0OC4xODY4MjYxIEMxOTguOTA4MzgxLDQ4LjE4NjgyNjEgMTk4LjkyNzUwNSw0Ny42MzYwOTU1IDE5OC45Mjc1MDUsNDcuNjM2MDk1NSBMMTk4LjkyNzUwNSwzNy40NDc1Nzg5IEMxOTguOTI3NTA1LDM2LjgyODY5NTQgMTk4LjEwMjAwOSwzNi42MjE0ODMgMTk4LjEwMjAwOSwzNi42MjE0ODMgTDE5My41NjE3ODEsMzYuNjIxNDgzIEMxOTIuODg0NDYyLDM2LjYyMTQ4MyAxOTIuODczODY4LDM3LjQ0NzU3ODkgMTkyLjg3Mzg2OCwzNy40NDc1Nzg5IEwxOTIuODczODY4LDQ3Ljc3Mzc3ODEgQzE5Mi44NzM4NjgsNDguMTc4NzAyOCAxOTIuNDYxMTIsNDguMTg2ODI2MSAxOTIuNDYxMTIsNDguMTg2ODI2MSBMMTkwLjI1OTc5Nyw0OC4xODY4MjYxIEMxODkuNzc1NzgyLDQ4LjE4NjgyNjEgMTg5Ljg0NzA0OSw0Ny42MzYwOTU1IDE4OS44NDcwNDksNDcuNjM2MDk1NSBMMTg5Ljg0NzA0OSwzNC44MzE2MDg1IEMxODkuODQ3MDQ5LDMzLjgwMzExOSAxOTEuMDg1MjkzLDMzLjU5MjQ2NDYgMTkxLjA4NTI5MywzMy41OTI0NjQ2IEwyMDAuNzE2MDgsMzMuNTkyNDY0NiBDMjAxLjY3Nzc4MywzMy41OTI0NjQ2IDIwMS45NTQzMjQsMzQuODMxNjA4NSAyMDEuOTU0MzI0LDM0LjgzMTYwODUgTDIwMS45NTQzMjQsNDcuNDk4NDEyOCBDMjAxLjk1NDMyNCw0OC4yMTg2MzA4IDIwMS41NDE1NzYsNDguMTg2ODI2MSAyMDEuNTQxNTc2LDQ4LjE4NjgyNjEgTDIwMS41NDE1NzYsNDguMTg2ODI2MSBaIE0xODUuODU3MTUyLDQyLjQwNDE1NDYgTDE3Ny4zMjcwMjcsNDIuNDA0MTU0NiBMMTc3LjMyNzAyNyw0NC40NjkzOTQ0IEMxNzcuMzI3MDI3LDQ1LjIxMzU2OTEgMTc4LjI5MDEwNiw0NS40MzMxNzMgMTc4LjI5MDEwNiw0NS40MzMxNzMgTDE4NS4xNjkyMzksNDUuNDMzMTczIEMxODUuNjU4NzU4LDQ1LjQzMzE3MyAxODUuOTk0NzM1LDQ1Ljg0NjIyMSAxODUuOTk0NzM1LDQ1Ljg0NjIyMSBDMTg1Ljk5NDczNSw0NS44NDYyMjEgMTg2LjU5NTAwOCw0Ny4wOTUxNDAzIDE4Ni44MjAyMzEsNDcuNjM2MDk1NSBDMTg3LjA0NTQ1NCw0OC4xNzcwNTA2IDE4Ni40MDc0ODMsNDguMTg2ODI2MSAxODYuNDA3NDgzLDQ4LjE4NjgyNjEgTDE3Ni4wODg3ODMsNDguMTg2ODI2MSBDMTc0Ljg0NjEzNiw0OC4xODY4MjYxIDE3NC41NzUzNzQsNDYuNjcyMzE2OSAxNzQuNTc1Mzc0LDQ2LjY3MjMxNjkgTDE3NC41NzUzNzQsMzQuOTY5MjkxMSBDMTc0LjU3NTM3NCwzNC4yOTYyOTgzIDE3NS41Mzg0NTIsMzQuMDA1NTEyNSAxNzUuNTM4NDUyLDM0LjAwNTUxMjUgTDE4NS44NTcxNTIsMzQuMDA1NTEyNSBDMTg2Ljg5NDExMywzNC4wMDU1MTI1IDE4Ny4wOTUzOTYsMzUuMjQ0NjU2NCAxODcuMDk1Mzk2LDM1LjI0NDY1NjQgTDE4Ny4wOTUzOTYsNDEuMTY1MDEwNyBDMTg3LjA5NTM5Niw0Mi4xNjM4OTgzIDE4NS44NTcxNTIsNDIuNDA0MTU0NiAxODUuODU3MTUyLDQyLjQwNDE1NDYgTDE4NS44NTcxNTIsNDIuNDA0MTU0NiBaIE0xODQuMzQzNzQzLDM3LjQ0NzU3ODkgQzE4NC4zNDM3NDMsMzcuNDQ3NTc4OSAxODQuMjU3MDY2LDM2Ljc1OTE2NTcgMTgzLjY1NTgzLDM2Ljc1OTE2NTcgTDE3OC4wMTQ5NCwzNi43NTkxNjU3IEMxNzguMDE0OTQsMzYuNzU5MTY1NyAxNzcuMzI3MDI3LDM2Ljk0Mzc5ODEgMTc3LjMyNzAyNywzNy40NDc1Nzg5IEwxNzcuMzI3MDI3LDM4Ljk2MjA4ODIgQzE3Ny4zMjcwMjcsMzguOTYyMDg4MiAxNzcuMzQ2ODM5LDM5LjY1MDUwMTQgMTc4LjAxNDk0LDM5LjY1MDUwMTQgTDE4My42NTU4MywzOS42NTA1MDE0IEMxODMuNjU1ODMsMzkuNjUwNTAxNCAxODQuMzQzNzQzLDM5LjQ4MDQ2MzQgMTg0LjM0Mzc0MywzOC44MjQ0MDU1IEwxODQuMzQzNzQzLDM3LjQ0NzU3ODkgTDE4NC4zNDM3NDMsMzcuNDQ3NTc4OSBaIE0xNzEuNDEwOTcyLDQ4LjE4NjgyNjEgTDE2OS4yMDk2NSw0OC4xODY4MjYxIEMxNjguOTE5MjEzLDQ4LjE4NjgyNjEgMTY4Ljc5NjkwMiw0Ny43NzM3NzgxIDE2OC43OTY5MDIsNDcuNzczNzc4MSBMMTY4Ljc5NjkwMiwzNy40NDc1Nzg5IEMxNjguNzk2OTAyLDM2LjgwNzIxNjkgMTY3Ljk3MTQwNiwzNi42MjE0ODMgMTY3Ljk3MTQwNiwzNi42MjE0ODMgTDE2NS45MDc2NjYsMzYuNjIxNDgzIEMxNjUuMzMxODgyLDM2LjYyMTQ4MyAxNjUuMjE5NzUyLDM3LjQ0NzU3ODkgMTY1LjIxOTc1MiwzNy40NDc1Nzg5IEwxNjUuMjE5NzUyLDQ3Ljc3Mzc3ODEgQzE2NS4yMTk3NTIsNDguMTE2MzMyNiAxNjQuODA3MDA0LDQ4LjE4NjgyNjEgMTY0LjgwNzAwNCw0OC4xODY4MjYxIEwxNjIuNjA1NjgyLDQ4LjE4NjgyNjEgQzE2Mi4yOTk1Niw0OC4xODY4MjYxIDE2Mi4xOTI5MzQsNDcuNzczNzc4MSAxNjIuMTkyOTM0LDQ3Ljc3Mzc3ODEgTDE2Mi4xOTI5MzQsMzcuNDQ3NTc4OSBDMTYyLjE5MjkzNCwzNi43OTI4OTc5IDE2MS4zNjc0MzgsMzYuNjIxNDgzIDE2MS4zNjc0MzgsMzYuNjIxNDgzIEwxNTkuMzAzNjk4LDM2LjYyMTQ4MyBDMTU4LjY3Mzk4MiwzNi42MjE0ODMgMTU4LjYxNTc4NCwzNy40NDc1Nzg5IDE1OC42MTU3ODQsMzcuNDQ3NTc4OSBMMTU4LjYxNTc4NCw0Ny43NzM3NzgxIEMxNTguNjE1Nzg0LDQ4LjIxNTczOTUgMTU4LjIwMzAzNiw0OC4xODY4MjYxIDE1OC4yMDMwMzYsNDguMTg2ODI2MSBMMTU2LjAwMTcxNCw0OC4xODY4MjYxIEMxNTUuNTg5Mzc4LDQ4LjE4NjgyNjEgMTU1LjU4ODk2Niw0Ny43NzM3NzgxIDE1NS41ODg5NjYsNDcuNzczNzc4MSBMMTU1LjU4ODk2NiwzNC42OTM5MjU4IEMxNTUuNTg4OTY2LDMzLjkzNjI1ODIgMTU2LjY4OTYyNywzMy41OTI0NjQ2IDE1Ni42ODk2MjcsMzMuNTkyNDY0NiBMMTcwLjQ0Nzg5NCwzMy41OTI0NjQ2IEMxNzEuNTUyMjcsMzMuNTkyNDY0NiAxNzEuODIzNzIsMzQuOTY5MjkxMSAxNzEuODIzNzIsMzQuOTY5MjkxMSBMMTcxLjgyMzcyLDQ3Ljc3Mzc3ODEgQzE3MS44MjM3Miw0OC4yNDkzMzQgMTcxLjQxMDk3Miw0OC4xODY4MjYxIDE3MS40MTA5NzIsNDguMTg2ODI2MSBMMTcxLjQxMDk3Miw0OC4xODY4MjYxIFogTTE1MS40NjE0ODYsNDIuNDA0MTU0NiBMMTQyLjkzMTM2LDQyLjQwNDE1NDYgTDE0Mi45MzEzNiw0NC40NjkzOTQ0IEMxNDIuOTMxMzYsNDUuMjEzNTY5MSAxNDMuODk0NDM5LDQ1LjQzMzE3MyAxNDMuODk0NDM5LDQ1LjQzMzE3MyBMMTUwLjc3MzU3Miw0NS40MzMxNzMgQzE1MS4yNjMwOTIsNDUuNDMzMTczIDE1MS41OTkwNjgsNDUuODQ2MjIxIDE1MS41OTkwNjgsNDUuODQ2MjIxIEMxNTEuNTk5MDY4LDQ1Ljg0NjIyMSAxNTIuMTk5MjA0LDQ3LjA5NTE0MDMgMTUyLjQyNDU2NCw0Ny42MzYwOTU1IEMxNTIuNjQ5Nzg3LDQ4LjE3NzA1MDYgMTUyLjAxMTgxNiw0OC4xODY4MjYxIDE1Mi4wMTE4MTYsNDguMTg2ODI2MSBMMTQxLjY5MzExNyw0OC4xODY4MjYxIEMxNDAuNDUwNDcsNDguMTg2ODI2MSAxNDAuMTc5NzA3LDQ2LjY3MjMxNjkgMTQwLjE3OTcwNyw0Ni42NzIzMTY5IEwxNDAuMTc5NzA3LDM0Ljk2OTI5MTEgQzE0MC4xNzk3MDcsMzQuMjk2Mjk4MyAxNDEuMTQyNzg2LDM0LjAwNTUxMjUgMTQxLjE0Mjc4NiwzNC4wMDU1MTI1IEwxNTEuNDYxNDg2LDM0LjAwNTUxMjUgQzE1Mi40OTg0NDYsMzQuMDA1NTEyNSAxNTIuNjk5NzMsMzUuMjQ0NjU2NCAxNTIuNjk5NzMsMzUuMjQ0NjU2NCBMMTUyLjY5OTczLDQxLjE2NTAxMDcgQzE1Mi42OTk3Myw0Mi4xNjM4OTgzIDE1MS40NjE0ODYsNDIuNDA0MTU0NiAxNTEuNDYxNDg2LDQyLjQwNDE1NDYgTDE1MS40NjE0ODYsNDIuNDA0MTU0NiBaIE0xNDkuOTQ4MDc2LDM3LjQ0NzU3ODkgQzE0OS45NDgwNzYsMzcuNDQ3NTc4OSAxNDkuODYxMzk5LDM2Ljc1OTE2NTcgMTQ5LjI2MDE2MywzNi43NTkxNjU3IEwxNDMuNjE5Mjc0LDM2Ljc1OTE2NTcgQzE0My42MTkyNzQsMzYuNzU5MTY1NyAxNDIuOTMxMzYsMzYuOTQzNzk4MSAxNDIuOTMxMzYsMzcuNDQ3NTc4OSBMMTQyLjkzMTM2LDM4Ljk2MjA4ODIgQzE0Mi45MzEzNiwzOC45NjIwODgyIDE0Mi45NTExNzIsMzkuNjUwNTAxNCAxNDMuNjE5Mjc0LDM5LjY1MDUwMTQgTDE0OS4yNjAxNjMsMzkuNjUwNTAxNCBDMTQ5LjI2MDE2MywzOS42NTA1MDE0IDE0OS45NDgwNzYsMzkuNDgwNDYzNCAxNDkuOTQ4MDc2LDM4LjgyNDQwNTUgTDE0OS45NDgwNzYsMzcuNDQ3NTc4OSBMMTQ5Ljk0ODA3NiwzNy40NDc1Nzg5IFogTTEzOC4xMTU5NjcsNDguMTg2ODI2MSBMMTMyLjg4NzgyNiw0OC4xODY4MjYxIEMxMzIuODg3ODI2LDQ4LjE4NjgyNjEgMTI5LjA2MTkyNyw0OC4wMDYxODY1IDEyOC43NjAzNDYsNDQuMTk0MDI5MSBDMTI4Ljc0ODIzOSw0MC4yNzkwMjI4IDEyOC43NjAzNDYsMjguMDg1MTU4MyAxMjguNzYwMzQ2LDI4LjA4NTE1ODMgTDEzMS4yMzY4MzQsMjguMDg1MTU4MyBDMTMxLjIzNjgzNCwyOC4wODUxNTgzIDEzMi4wNjIzMywyOC4wNzAxNTA5IDEzMi4wNjIzMywyOC45MTEyNTQzIEwxMzIuMDYyMzMsNDMuMzY3OTMzMSBDMTMyLjA2MjMzLDQzLjM2NzkzMzEgMTMyLjM1MDAxNSw0NC41NjM4NDQ3IDEzMy45ODg0ODcsNDUuMDIwMTI1IEMxMzUuODM5OCw0NS4wMTA3NjI2IDEzNi4xODk4MSw0NS4wMjAxMjUgMTM2LjE4OTgxLDQ1LjAyMDEyNSBDMTM2LjE4OTgxLDQ1LjAyMDEyNSAxMzYuOTA3MzAzLDQ0Ljc5MDE5NSAxMzcuNDI4MDU0LDQ1LjcwODUzODMgQzEzNy45NDg4MDQsNDYuNjI2ODgxNiAxMzguNTI4NzE1LDQ3LjYzNjA5NTUgMTM4LjUyODcxNSw0Ny42MzYwOTU1IEMxMzguNTI4NzE1LDQ3LjYzNjA5NTUgMTM4LjYxMTU0LDQ4LjE4NjgyNjEgMTM4LjExNTk2Nyw0OC4xODY4MjYxIEwxMzguMTE1OTY3LDQ4LjE4NjgyNjEgWiBNMTExLjU2MjUxMyw0Ny4zNjA3MzAyIEwxMTEuNTYyNTEzLDI5LjE4NjYxOTYgQzExMS41NjI1MTMsMjguMzgwNzYzIDExMi4yNTA0MjYsMjguMjIyODQxIDExMi4yNTA0MjYsMjguMjIyODQxIEwxMjUuMTgzMTk3LDI4LjIyMjg0MSBDMTI1LjkwNjQ2OSwyOC4yMjI4NDEgMTI1LjU5NTk0NSwyOS4wNDg5MzY5IDEyNS41OTU5NDUsMjkuMDQ4OTM2OSBDMTI1LjU5NTk0NSwyOS4wNDg5MzY5IDEyNS4xOTI4MjcsMzAuMTY2MDk0IDEyNC45MDgwMzEsMzAuNzAxMTI4OCBDMTI0LjYyMzIzNSwzMS4yMzYxNjM2IDEyNC4wODI1MzUsMzEuMjUxODU5NCAxMjQuMDgyNTM1LDMxLjI1MTg1OTQgTDExNS42ODk5OTMsMzEuMjUxODU5NCBDMTE0LjkwODUyMywzMS4yNTE4NTk0IDExNC44NjQ0OTcsMzEuOTQwMjcyNyAxMTQuODY0NDk3LDMxLjk0MDI3MjcgTDExNC44NjQ0OTcsMzYuNDgzODAwMyBMMTI0LjM1NzcwMSwzNi40ODM4MDAzIEMxMjQuOTE0NjM1LDM2LjQ4MzgwMDMgMTI0LjYzMjg2NiwzNy4xNzIyMTM2IDEyNC42MzI4NjYsMzcuMTcyMjEzNiBDMTI0LjYzMjg2NiwzNy4xNzIyMTM2IDEyMy45MjE4MzksMzguNjg4OTI1OCAxMjMuNjY5Nzg3LDM5LjA5OTc3MDggQzEyMy40MTc3MzYsMzkuNTEwNjE1OSAxMjIuODQ0MjkxLDM5LjUxMjgxODggMTIyLjg0NDI5MSwzOS41MTI4MTg4IEwxMTQuODY0NDk3LDM5LjUxMjgxODggTDExNC44NjQ0OTcsNDQuMzMxNzExNyBDMTE0Ljg2NDQ5Nyw0NC45ODg0NTggMTE1LjU1MjQxLDQ1LjE1NzgwNzcgMTE1LjU1MjQxLDQ1LjE1NzgwNzcgTDEyNC4zNTc3MDEsNDUuMTU3ODA3NyBDMTI0Ljk5NjIyMiw0NS4xNTc4MDc3IDEyNS4xODMxOTcsNDUuNTcwODU1NiAxMjUuMTgzMTk3LDQ1LjU3MDg1NTYgQzEyNS4xODMxOTcsNDUuNTcwODU1NiAxMjYuMDU1MTk2LDQ2LjkzMjM5OTQgMTI2LjQyMTQ0MSw0Ny40OTg0MTI4IEMxMjYuNzg3ODIzLDQ4LjA2NDQyNjIgMTI2LjI4Mzg1OCw0OC4xODY4MjYxIDEyNi4yODM4NTgsNDguMTg2ODI2MSBMMTEyLjM4ODAwOSw0OC4xODY4MjYxIEMxMTEuODE0MTUxLDQ4LjE4NjgyNjEgMTExLjU2MjUxMyw0Ny4zNjA3MzAyIDExMS41NjI1MTMsNDcuMzYwNzMwMiBaIE0xMDMuNDE2NTAyLDQ2LjIxNzU1MTEgQzEwMy40MDcwMDgsNDcuNzk0NTY4MiAxMDIuNTg3ODQxLDQ4LjE0NjM0NzQgMTAyLjU4Nzg0MSw0OC4xNDYzNDc0IEMxMDIuNTg3ODQxLDQ4LjE0NjM0NzQgODguNDUyMDQ3OCw1Ni4zMTQ1MDg3IDg3LjUzMjk5NTYsNTYuODI2Mjc1MSBDODYuNjIyMzM2LDU3LjIxNzE1NjEgODYuMDEzNjcwMyw1Ni44MjYyNzUxIDg2LjAxMzY3MDMsNTYuODI2Mjc1MSBDODYuMDEzNjcwMyw1Ni44MjYyNzUxIDcxLjIyMjU3MDYsNDguMjQ3OTU3MiA3MC42ODI2OTYyLDQ3Ljg3MDg0NDQgQzcwLjE0MjY4NDMsNDcuNDkzNzMxNiA3MC4xMzAxNjQzLDQ2LjkwNjM3NzQgNzAuMTMwMTY0Myw0Ni45MDYzNzc0IEM3MC4xMzAxNjQzLDQ2LjkwNjM3NzQgNzAuMTQ1MDIzMiwyOS45MTk5MTc0IDcwLjEzMDE2NDMsMjkuMTMzMzM2NCBDNzAuMTE1MzA1MywyOC4zNDY2MTc3IDcxLjA5Njk1NzYsMjcuNzU1NTQ2MSA3MS4wOTY5NTc2LDI3Ljc1NTU0NjEgTDg1Ljg3NTUzNzMsMTkuMjEzNDM4NyBDODYuNzg1MzcxNCwxOC43MzMyMDE2IDg3LjY3MTEyODYsMTkuMjEzNDM4NyA4Ny42NzExMjg2LDE5LjIxMzQzODcgQzg3LjY3MTEyODYsMTkuMjEzNDM4NyAxMDAuNzI2NjIzLDI2LjgwMjA5MzcgMTAyLjE3MzQ0MiwyNy42MTc3MjU3IEMxMDMuNTkxNTA3LDI4LjI5MTk1NzcgMTAzLjQxNjUwMiwyOS42ODQzNDI0IDEwMy40MTY1MDIsMjkuNjg0MzQyNCBDMTAzLjQxNjUwMiwyOS42ODQzNDI0IDEwMy40MjUzMDcsNDQuNzUxOTE5MiAxMDMuNDE2NTAyLDQ2LjIxNzU1MTEgTDEwMy40MTY1MDIsNDYuMjE3NTUxMSBaIE05Ny41MTYwMTA1LDI5LjE2OTEzMzkgQzk0LjQ5MDAxNzMsMjcuNDI3NDQ4MyA4Ny4zNjE1ODQyLDIzLjI5NzEwNjMgODcuMzYxNTg0MiwyMy4yOTcxMDYzIEM4Ny4zNjE1ODQyLDIzLjI5NzEwNjMgODYuNjY2MTAzOSwyMi45MjEyMzI2IDg1Ljk1MTc3NDcsMjMuMjk3MTA2MyBMNzQuMzQ4NzQwNiwyOS45ODIxNSBDNzQuMzQ4NzQwNiwyOS45ODIxNSA3My41NzgwMDI1LDMwLjQ0NDkwMTQgNzMuNTg5Njk3LDMxLjA2MDQ4MDUgQzczLjYwMTM5MTUsMzEuNjc2MDU5NyA3My41ODk2OTcsNDQuOTY5ODcwOCA3My41ODk2OTcsNDQuOTY5ODcwOCBDNzMuNTg5Njk3LDQ0Ljk2OTg3MDggNzMuNTk5NDY1NCw0NS40Mjk1OTMyIDc0LjAyMzQ5NTEsNDUuNzI0NjQ3MiBDNzQuNDQ3Mzg3Myw0Ni4wMTk3MDExIDg2LjA2MDE4OTgsNTIuNzMzMjQ1MSA4Ni4wNjAxODk4LDUyLjczMzI0NTEgQzg2LjA2MDE4OTgsNTIuNzMzMjQ1MSA4Ni41MzgxNTIsNTMuMDM5MTc1OSA4Ny4yNTMwMzE1LDUyLjczMzI0NTEgQzg3Ljk3NDY1MjYsNTIuMzMyNzI2MiA5OS4wNzMwMzM1LDQ1Ljk0MDI1ODIgOTkuMDczMDMzNSw0NS45NDAyNTgyIEM5OS4wNzMwMzM1LDQ1Ljk0MDI1ODIgOTkuNzE2MjMyNSw0NS42NjQ4OTI5IDk5LjcyMzY2MTksNDQuNDMwNzA1NiBDOTkuNzI1NzI1Nyw0NC4wNzQ3OTU5IDk5LjcyNjU1MTIsNDIuNjkzMjg4MSA5OS43MjY2ODg3LDQwLjk1NzUyMjkgTDg2LjY2MDA1MDIsNDguODc1MjM5NCBMODYuNjYwMDUwMiw0NS44NDYyMjEgQzg2LjY2MDA1MDIsNDQuNjAyMTIwNSA4Ny42MjMxMjg5LDQzLjc4MDk4MTEgODcuNjIzMTI4OSw0My43ODA5ODExIEw5OS4xODA3NjA3LDM2LjgxNjU3OTMgQzk5LjYxNjg5NzgsMzYuMzYxMTI1MSA5OS43MDY4NzY4LDM1LjYzMTU0NDcgOTkuNzI1NDUwNSwzNS4zNTU2Mjg3IEM5OS43MjUwMzc4LDM0LjA5MDQ2MjcgOTkuNzI0NDg3NCwzMi45ODUyODQxIDk5LjcyNDA3NDcsMzIuMjg1MTY3OCBMODYuNjYwMDUwMiw0MC4yMDEyMzIxIEw4Ni42NjAwNTAyLDM3LjAzNDUzMSBDODYuNjYwMDUwMiwzNS43OTA0MzA1IDg3LjQ4NTU0NjIsMzUuMjQ0NjU2NCA4Ny40ODU1NDYyLDM1LjI0NDY1NjQgTDk3LjUxNjAxMDUsMjkuMTY5MTMzOSBaIiBpZD0iU2hhcGUtQ29weSI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"
      // />
      <img width={50}  height={50} src="/element-plus-logo.svg"  />
        
      ),
      description: 'Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库',
      value: 'https://element.eleme.cn',
    }, 
    {
      title: 'Element Plus',
      size:'small', 
      avatar: (
      //   <Avatar
      //   size={32}
      //   shape="square"
      //   src=""
      // />
        <img width={50}  height={50} src="/element-plus-logo.svg"  />
        
      ),
      description: '基于 Vue 3，面向设计师和开发者的组件库',
      value: 'https://element-plus.org/zh-CN/',
    },
    {
      title: 'Vuetify',
      size:'small', 
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-light-atom.svg"
      />
        // <img width={50}  height={50} src=""  />
        
      ),
      description: 'Vuetify 是一个不需要设计技能的开源 UI 库，具有精美手工制作的 Vue 组件。',
      value: 'https://vuetify.nodejs.cn/',
    },    
    {
      title: 'Ant Design Vue',
      size:'small', 
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src="https://aliyuncdn.antdv.com/v2/assets/logo.1ef800a8.svg"
      />
        // <img width={50}  height={50} src=""  />
        
      ),
      description: 'ant-design-vue 为 Web 应用提供了丰富的基础 UI 组件，我们还将持续探索企业级应用的最佳 UI 实践。',
      value: 'https://2x.antdv.com/components/overview-cn/',
    },  
    {
      title: 'iview',
      size:'small', 
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src="https://iview.github.io/dist/76ecb6e76d2c438065f90cd7f8fa7371.png"
      />
        // <img width={50}  height={50} src=""  />
        
      ),
      description: 'iview是开源是Vue常用 UI组件库之一。它提供了一系列易于使用和定制的组件。iview的设计简洁明了，符合现代UI的潮流。它提供了众多常见的UI组件，如按钮、输入框、布局等，还有一些实用的工具和辅助函数。iview还支持按需加载和国际化，使得开发更加高效。',
      value: 'https://iview.github.io/docs/guide/install',
    },
    {
      title: 'Naive UI',
      size:'small', 
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src="https://www.naiveui.com/assets/naivelogo-BdDVTUmz.svg"
      />
        // <img width={50}  height={50} src=""  />
        
      ),
      description: '一个 Vue 3 组件库,比较完整，主题可调，使用TypeScript',
      value: 'https://www.naiveui.com/zh-CN/os-theme',
    },  
    {
      title: 'Bootstrap Vue',
      size:'small', 
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src="/bootstrap.png"
      />
        // <img width={50}  height={50} src=""  />
        
      ),
      description: '开始使用基于世界上最流行的框架 Bootstrap v4 的 BootstrapVue，使用 Vue.js 构建响应式、移动优先的网站。',
      value: 'https://bootstrap-vue.org/',
    },   
    {
      title: 'Vue Material',
      size:'small', 
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src="https://vuematerial.materializecss.cn/assets/logo-vue-material-blue.png"
      />
        // <img width={50}  height={50} src=""  />
        
      ),
      description: 'Vue Material是一个基于Material Design的Vue UI组件库，它提供了一套美观、可定制的组件和样式。Vue Material的组件与Material Design的规范一致，包括按钮、卡片、表格等。它还提供了一些实用的指令和工具，如动画效果、表单验证等。Vue Material支持按需加载和自定义主题，使得开发人员能够灵活地应用于不同的项目中。',
      value: 'https://vuematerial.materializecss.cn/#/',
    },  
    {
      title: 'Muse UI',
      size:'small', 
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src="http://muse-ui.c12345.com/img/icon_logo.a76a122f.png"
      />
        // <img width={50}  height={50} src=""  />
        
      ),
      description: 'Muse UI是一个简洁、易用的是Vue常用 UI组件库之一。它提供了一系列符合Material Design风格的组件',
      value: 'http://muse-ui.c12345.com/#/zh-CN',
    },  
    {
      title: 'Quasar',
      size:'small', 
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src="http://v0-16.quasarchs.com/images/quasar-logo.png"
      />
        // <img width={50}  height={50} src=""  />
        
      ),
      description: 'Quasar是一个全能的是Vue常用 UI组件库之一。它提供了丰富多样的组件和工具，涵盖了从基础组件到高级组件的各个方面',
      value: 'http://v0-16.quasarchs.com/',
    }, 
    {
      title: 'Buefy',
      size:'small', 
      avatar: (
      //   <Avatar
      //   size={32}
      //   shape="square"
      //   src="https://buefy.org/static/img/buefy.1d65c18.png"
      // />
        <img width={50}  height={50} src="https://buefy.org/static/img/buefy.1d65c18.png"  />
        
      ),
      description: 'Buefy是一个基于Vue.js的轻量级UI组件库，它基于Bulma框架和设计。Buefy提供了响应式的UI组件，适合用于构建美观且高效的Web应用',
      value: 'https://buefy.org/',
    },  
    {
      title: 'PrimeVue',
      size:'small', 
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src="/primeVue.png"
      />
        // <img width={50}  height={50} src="https://buefy.org/static/img/buefy.1d65c18.png"  />
        
      ),
      description: 'PrimeVue 提供全面的可定制、功能丰富的 UI 组件套件，助您增强 Web 应用程序。PrimeVue 助您轻松实现开发愿景。',
      value: 'https://primevue.org/setup/',
    },  
    {
      title: 'Volt',
      size:'small', 
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src="volt.png"
      />
        // <img width={50}  height={50} src="https://buefy.org/static/img/buefy.1d65c18.png"  />
        
      ),
      description: 'Volt 是一个使用 Unstyled PrimeVue Core 和 Tailwind CSS 制作的 UI 组件库。',
      value: 'https://volt.primevue.org/overview',
    },
    {
      title: 'Vant',
      size:'small', 
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src="https://fastly.jsdelivr.net/npm/@vant/assets/logo.png"
      />
        // <img width={50}  height={50} src="https://buefy.org/static/img/buefy.1d65c18.png"  />
        
      ),
      description: '轻量、可定制的移动端 Vue 组件库',
      value: 'https://vant-ui.github.io/vant/#/zh-CN',
    },
    {
      title: 'VantGreen',
      size:'small', 
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src="http://mui.ucmed.cn/images/logo/logo1.png"
      />
        // <img width={50}  height={50} src="https://buefy.org/static/img/buefy.1d65c18.png"  />
        
      ),
      description: '基于vant开源代码，经过二次开发，修改原有组件以及新增部分组件，打造而成的卓健科技Vue组件库',
      value: 'http://mui.ucmed.cn/#/zh-CN/intro',
    },
  ]  
}
//小程序组件库
const miniProgramUI={
    title: '小程序 组件库',
    key: 'miniProgramUI',
    href: '#miniProgramUI',
    value:  [
      {
        title: 'uView',
        size:'small', 
        avatar: (
          <Avatar
          size={32}
          shape="square"
          src="https://uviewui.com/common/logo.png"
        />
          // <img width={50}  height={50} src=""  />
          
        ),
        description: '多平台快速开发的UI框架,是全面兼容nvue的uni-app生态框架，全面的组件和便捷的工具会让您信手拈来，如鱼得水',
        value: 'https://uviewui.com/',
      },  
      {
        title: 'TMUI',
        size:'small', 
        avatar: (
          <Avatar
          size={32}
          shape="square"
          src="https://xui.tmui.design/assets/logo-a483vlZl.png"
        />
          // <img width={50}  height={50} src=""  />
          
        ),
        description: '一款好的UI/UX，不止是功能，它还应该要有设计感，层次感。注重细微及用户的反馈体验。同时要保留它的高度可扩展性及性能。',
        value: 'https://xui.tmui.design/',
      }, 
      {
        title: 'nutui',
        size:'small', 
        avatar: (
        //   <Avatar
        //   size={32}
        //   shape="square"
        //   src="/nutUi.png"
        // />
          <img width={50}  height={50} src="/nutUi.png"  />
          
        ),
        description: '京东风格的轻量级 Vue 组件库，支持移动端 H5 和 小程序开发，70+ 高质量组件，覆盖移动端主流场景',
        value: 'https://nutui.jd.com/next/#/',
      }, 
      {
        title: 'Wux Weapp',
        size:'small', 
        avatar: (
          <Avatar
          size={32}
          shape="square"
          src="https://github.com/wux-weapp/wux-weapp/raw/master/screenshots/logo.png"
        />
          // <img width={50}  height={50} src=""  />
          
        ),
        description: '一套组件化、可复用、易扩展的微信小程序 UI 组件库。',
        value: 'https://www.wuxui.com/#/introduce',
      }, 
      {
        title: 'Lin UI',
        size:'small', 
        avatar: (
          <Avatar
          size={32}
          shape="square"
          src="https://doc.mini.talelin.com/images/left-logo.png"
        />
          // <img width={50}  height={50} src=""  />
          
        ),
        description: '基于 微信小程序原生语法 实现的组件库。遵循简洁，易用的设计规范。',
        value: 'https://doc.mini.talelin.com/',
      }, 
      {
        title: 'ThorUI',
        size:'small', 
        avatar: (
          <Avatar
          size={32}
          shape="square"
          src="https://thorui.cn/doc/logo_black.png"
        />
          // <img width={50}  height={50} src=""  />
          
        ),
        description: '轻量、简洁、全面的移动端组件库。能大幅提升开发效率，包含uniapp与微信小程序原生版本组件库',
        value: 'https://www.thorui.cn/',
      }, 
      {
        title: 'FirstUI',
        size:'small', 
        avatar: (
          <Avatar
          size={32}
          shape="square"
          src="https://m.firstui.cn/assets/img_logo-ChdIi6kt.png"
        />
          // <img width={50}  height={50} src=""  />
          
        ),
        description: '一套基于uni-app开发的组件化、可复用、易扩展、低耦合的跨平台移动端UI 组件库。',
        value: 'https://doc.firstui.cn/docs/introduce.html',
      }, 
      {
        title: 'TDesign',
        size:'small', 
        avatar: (
        //   <Avatar
        //   size={32}
        //   shape="square"
        //   src="/TDesign.png"
        // />
          <img width={50}  height={50} src="/TDesign.png"  />
          
        ),
        description: '具有统一的 价值观，一致的设计语言和视觉风格，帮助用户形成连续、统一的体验认知。在此基础上，TDesign 提供了开箱即用的 UI 组件库、设计指南 和相关 设计资产，以优雅高效的方式将设计和研发从重复劳动中解放出来，同时方便大家在 TDesign 的基础上扩展，更好的的贴近业务需求。',
        value: 'https://tdesign.tencent.com/miniprogram/getting-started',
      }, 
      {
        title: 'WeUI',
        size:'small', 
        avatar: (
          <Avatar
          size={32}
          shape="square"
          src="https://open.weixin.qq.com/zh_CN/htmledition/res/assets/res-design-download/icon64_wx_logo.png"
        />
          // <img width={50}  height={50} src=""  />
          
        ),
        description: '套同微信原生视觉体验一致的基础样式库，由微信官方设计团队为微信内网页和微信小程序量身设计，令用户的使用感知更加统一。',
        value: 'https://weui.io/',
      }, 
    ] 
}
//可视化工具
const visualTools={
  title: '可视化工具',
  key: 'visualTools',
  href: '#visualTools',
  value:  [
    {
      title: 'ECharts',
      size:'small', 
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src="https://cdn.docschina.org/home/logo/echarts.png"
      />
        // <img width={50}  height={50} src=""  />
        
      ),
      description: '一个基于 JavaScript 的开源可视化图表库',
      value: 'https://echarts.apache.org/zh/index.html',
    },  
    {
      title: 'AntV',
      size:'small', 
      avatar: (
      //   <Avatar
      //   size={32}
      //   shape="square"
      //   src="https://cdn.docschina.org/home/logo/antv.svg"
      // />
        <img width={50}  height={50} src="https://cdn.docschina.org/home/logo/antv.svg"  />
        
      ),
      description: '数据可视化 AntV 的设计价值观是基于 Ant Design 设计体系衍生的，具有数据可视化特性的指导原则。它在遵循 Ant Design 设计价值观的同时，对数据可视化领域的进一步解读',
      value: 'https://antv.antgroup.com/',
    },  
    {
      title: 'v-charts',
      size:'small', 
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src="https://cdn.docschina.org/home/logo/vue.svg"
      />
        // <img width={50}  height={50} src=""  />
        
      ),
      description: '在使用echarts图表时，经常需要做繁琐的数据类型转化、修改复杂的配置项，v-charts的出现就是为了解决这个痛点。基于Vue2.0和echarts封装的v-charts图表组件，只需要统一提供一种对前流程图都接口的数据格式设置简单的配置项，才轻松生成常见的图表',
      value: 'https://v-charts.js.org/#/',
    },  
    {
      title: 'Chart.js',
      size:'small', 
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src="https://www.chartjs.org/docs/master/favicon.ico"
      />
        // <img width={50}  height={50} src=""  />
        
      ),
      description: 'Chart.js是一个简单、灵活的JavaScript图表库，支持响应图表式、动画效果，支持折线图、柱状图、雷达图、饼图等。',
      value: 'https://www.chartjs.org/docs/master/',
    },  
    {
      title: 'D3.js',
      size:'small', 
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src="https://d3js.org/logo.svg"
      />
        // <img width={50}  height={50} src=""  />
        
      ),
      description: '一个强大的 JavaScript 数据可视化库，可以基于数据创建复杂的图形和动画。它允许用户直接操作 DOM 元素，创建高度定制化的图表。',
      value: 'https://d3js.org/',
    },  
    {
      title: 'Leaflet',
      size:'small', 
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src="https://leafletjs.com/docs/images/logo.png"
      />
        // <img width={50}  height={50} src=""  />
        
      ),
      description: '适用于移动设备的交互式地图的开源 JavaScript 库',
      value: 'https://leafletjs.com/',
    }
  ]
}
//测试工具
const testTools={
  title: '测试工具',
  key: 'testTools',
  href: '#testTools',
  value:  [
    {
      title: 'Mock.js',
      size:'small', 
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src="https://cdn.docschina.org/home/logo/mockjs.svg"
      />
        // <img width={50}  height={50} src=""  />
        
      ),
      description: '生成随机数据，拦截 Ajax 请求',
      value: 'http://mockjs.com/',
    }, 
    {
      title: 'Vue Test Utils',
      size:'small', 
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src="https://test-utils.vuejs.org/logo.svg"
      />
        // <img width={50}  height={50} src=""  />
        
      ),
      description: 'Vue.js 3 的官方测试套件工具',
      value: 'https://vue-test.nodejs.cn/',
    },      
  ]
}
//语言文档和规范
const languageTools={
  title: '语言文档和规范',
  key: 'languageTools',
  href: '#languageTools',
  value:  [
    {
      title: 'CSS',
      size:'small', 
      avatar: (
      //   <Avatar
      //   size={32}
      //   shape="square"
      //   src="https://cdn.docschina.org/home/logo/w3c.svg"
      // />
        <img width={50}  height={50} src="https://cdn.docschina.org/home/logo/w3c.svg"  />
        
      ),
      description: 'CSS3 引入了许多新的特性和模块，如动画',
      value: 'https://www.w3.org/Style/CSS/specs.en.html',
    },  
    {
      title: 'ECMAScript',
      size:'small', 
      avatar: (
      //   <Avatar
      //   size={32}
      //   shape="square"
      //   src="https://cdn.docschina.org/home/logo/ecma.svg"
      // />
        <img width={50}  height={50} src="https://cdn.docschina.org/home/logo/ecma.svg"  />
      ),
      description: '细描述了 JavaScript 语言的语法、结构、对象、函数等基本元素。',
      value: 'https://tc39.es/ecma262/',
    },  
    {
      title: 'TypeScript',
      size:'small', 
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src="https://cdn.docschina.org/home/logo/typescript.png"
      />
        // <img width={50}  height={50} src=""  />
        
      ),
      description: 'TypeScript 是带有类型语法的 JavaScript',
      value: 'https://www.typescriptlang.org/',
    },  
    {
      title: 'JSON Schema',
      size:'small', 
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src="https://cdn.docschina.org/home/logo/json-schema.svg"
      />
        // <img width={50}  height={50} src=""  />
        
      ),
      description: 'JSON Schema 是一种用于描述和验证 JSON 数据结构的工具，它为 JSON 数据提供了一种明确的结构和约束规',
      value: 'https://json-schema.org/',
    },  
  ]
}
const dataSource =[
  buildTools,
  cssTools,
  frontEndFrame,
  miniProgram,
  nodejsDeno,
  reactSet,
  reactUI,
  vueSet,
  vueUI,
  miniProgramUI,
  visualTools,
  testTools,
  languageTools
] 
//模板
const template={
  title: '',
  value:  [
    {
      title: '',
      size:'small', 
      avatar: (
        <Avatar
        size={32}
        shape="square"
        src=""
      />
        // <img width={50}  height={50} src=""  />
        
      ),
      description: '',
      value: '',
    },  
  ] 
}

  export default dataSource