
const genSidebar = require('./utils/genSidebar.js');

/* 生成侧边栏配置 */
var sidebar = {
    '/pages/article/': genSidebar.genDefaultSidebar('pages/article', '说明文档', '知识库', true, 2),
    /* fallback 侧边栏必须最后定义，否则会导致侧边栏无法使用 */
    '/': ['']
}

module.exports = {
    title: 'NetAxe', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
    description: 'NetAxe文档', // meta 中的描述文字，用于SEO
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', 
            { rel: 'icon', href: '/favicon.ico' }
            //浏览器的标签栏的网页图标，第一个'/'会遍历public文件夹的文件
        ],  
    ],
    // 使用的主题
    theme: 'vuepress-theme-vdoing',
    themeConfig: {
        logo: '',  //网页顶端导航栏左上角的图标
        hostname:"https://netaxe.github.io/",
        author: {
            name: 'netaxe', // 必需
            link: 'https://gitee.com/iflytek/NetAxe.git', // 可选的
          },
          // 社交图标 (显示于博主信息栏和页脚栏。内置图标：https://doc.xugaoyi.com/pages/a20ce8/#social)
    social: {
        // iconfontCssFile: '//at.alicdn.com/t/xxx.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自己添加。阿里图片库：https://www.iconfont.cn/
        icons: [
          {
            iconClass: 'icon-youjian',
            title: '发邮件',
            link: 'netaxe@163.com',
          },
          {
            iconClass: 'icon-github',
            title: 'GitHub',
            link: 'https://github.com/iflytek/NetAxe.git',
          },
          {
            iconClass: 'icon-erji',
            title: '听音乐',
            link: 'https://music.163.com/#/playlist?id=755597173',
          },
        ],
      },
        footer: {
            createYear: 2022, // 博客创建年份
            copyrightInfo:
              'NetAxe| <a href="https://gitee.com/iflytek/NetAxe/blob/master/LICENSE" target="_blank">Apache License2.0</a>', // 博客版权信息、备案信息等，支持a标签或换行标签</br>
          },
        locales: {
            "/": {
              // 设置正在使用的语言
              lang: "zh-CN",
            },
            "/en/": {
              // 设置正在使用的语言
              lang: "en-US",
            },
          },
       
        
        //顶部导航栏
        nav: [           
            //格式一：直接跳转，'/'为不添加路由，跳转至首页
            { text: '首页', link: '/' },    
            
            //格式二：添加下拉菜单，link指向的文件路径
            // {
            //     text: '分类',  //默认显示        
            //     ariaLabel: '分类',   //用于识别的label
            //     items: [
            //         { text: '文章', link: '/pages/article/article.md' },  
            //         //点击标签会跳转至link的markdown文件生成的页面
            //         // { text: '琐碎', link: '/pages/folder2/test4.md' },
            //     ]
            // },
            // { text: '文档', link: '/pages/article/article.md' },
            // { text: '快速开始', link: '/pages/article/初始化.md' },
            { text: '问题反馈', link: '/questions/问题反馈.md' },
            
            //格式三：跳转至外部网页，需http/https前缀
            { text: 'Gitee', link: 'https://gitee.com/IFLY-DevNet/net-axe.git' },
        ],
        
        //侧边导航栏：会根据当前的文件路径是否匹配侧边栏数据，自动显示/隐藏
        sidebar: sidebar,
    }

}