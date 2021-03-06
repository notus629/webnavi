/**
 * Created by Gene on 2017/5/9.
 */
$(function(){
    new Vue({
        el: '#article_tags',
        data: {
            dtlist: [
                {
                    dt: '词典/搜索',
                    dd: [
                        {name: 'Google Translate', url: 'https://translate.google.com/'},
                        {name: '有道', url: 'http://dict.youdao.com/'},
                        {name: '必应词典', url: 'http://cn.bing.com/dict/'},
                        {name: '爱词霸', url: 'http://www.iciba.com/', title: '原金山词霸'},
                        {name: 'urban dictionary', url: 'http://www.urbandictionary.com/', title: '如 no zuo no die 也被收录'},
                        {name: 'Merriam-Webster', url: 'https://www.merriam-webster.com/dictionary/thesaurus'},
                        {name: '', url: '|', title: ''},
                        {name: '汉典', url: 'http://www.zdic.net/'},
                        {name: '百度词典 ', url: 'http://dict.baidu.com/'},
                        {name: '', url: '|', title: ''},
                        {name: 'Google', url: 'https://www.google.com/', title: '谷歌'},
                        {name: 'Bing', url: 'http://cn.bing.com/', title: '必应'},
                        {name: '百度', url: 'https://www.baidu.com/', title: ''},
                        {name: '', url: '', title: ''},
                    ]
                },
                {
                    dt: '英语新闻',
                    dd: [
                        {name: 'news.au.com', url: 'http://www.news.com.au/'},
                        {name: 'cnn', url: "http://edition.cnn.com/"},
                        {name: 'New York Times', url: 'https://www.nytimes.com/'},
                        {name: 'voa news', url: 'http://www.voanews.com/'},
                        {name: '', url: '|', title: ''},
                        {name: 'China Daily', url: 'http://www.chinadaily.com.cn/', title: '中国日报英文版'},
                        {name: '51voa', url: 'http://www.51voa.com/'},
                        {name: '', url: '', title: ''},
                    ]
                },
                {
                    dt: '编程手册',
                    dd: [
                        {name: '[综合手册]菜鸟教程', url: 'http://www.runoob.com/'},
                        {name: 'php手册', url: 'http://php.net/manual/zh/'},
                        {name: 'php manual', url: 'http://php.net/manual/en/index.php'},
                        {name: 'Linux命令大全', url: 'http://man.linuxde.net/'},
                        {name: 'w3school - cn', url: 'http://www.w3school.com.cn/'},
                        {name: 'MySQL 8.0 Manual', url: 'https://dev.mysql.com/doc/refman/8.0/en/'},
                        {name: 'Nginx doc', url: 'https://nginx.org/en/docs/'},
                        {name: 'Apache 2.4 doc', url: 'https://httpd.apache.org/docs/2.4/'},
                        {name: '', url: '', title: ''},
                    ]
                },
                {
                    dt: '应用框架手册',
                    dd: [
                        {name: 'jQuery API', url: 'http://api.jquery.com/'},
                        {name: 'jQuery API - cn', url: 'http://www.jquery123.com/'},
                        {name: 'Bootstrap v3', url: 'http://getbootstrap.com/'},
                        {name: 'Bootstrap v3 - cn', url: 'http://v3.bootcss.com/css/'},
                        {name: 'vue.js api', url: 'https://vuejs.org/v2/api/'},
                        {name: 'vue.js api - cn', url: 'http://cn.vuejs.org/v2/api/'},
                        {name: 'Laravel 5.4 doc', url: 'https://laravel.com/docs/5.4'},
                        {name: 'Sass Doc', url: 'http://sass-lang.com/documentation/file.SASS_REFERENCE.html'},
                        {name: 'jQuery mobile Demo', url: 'http://demos.jquerymobile.com/1.4.5/intro/'},
                        {name: 'MUI', url: 'http://dev.dcloud.net.cn/mui/ui/', title: '2017年最火的原生app前端框架'},
                        {name: 'HTML5+ Native.js', url: 'http://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/91', title: 'HBuilder, HTML5+, Native.js, 5+SDK, MUI 等介绍'},
                        {name: '', url: '', title: ''},
                    ]
                },
                {
                    dt: '开放平台手册',
                    dd: [
                        {name: '微信', url: 'https://mp.weixin.qq.com/wiki/home/'},
                        {name: 'w3cschool-微信', url: 'http://www.w3cschool.cn/weixinapp/9wou1q8j.html'},
                        {name: '蚂蚁金服', url: 'https://doc.open.alipay.com/doc2/alipayDocIndex.htm?channel=ent'},
                        {name: '', url: '', title: ''},
                    ]
                },
                {
                    dt: '程序员',
                    dd: [
                        {name: 'GitHub', url: 'https://github.com/'},
                        {name: 'GitLab', url: 'https://about.gitlab.com/', title: 'aka OpenSource github'},
                        {name: '码云', url: 'https://git.oschina.net/'},
                        {name: 'stackoverflow', url: 'http://stackoverflow.com/'},
                        {name: 'csdn', url: 'http://www.csdn.net/'},
                        {name: 'v2ex', url: 'https://www.v2ex.com/'},
                        {name: 'cnblogs', url: 'http://www.cnblogs.com/'},
                        {name: 'segmentfault', url: 'https://segmentfault.com/'},
                        {name: '免费 IT BOOK', url: 'https://github.com/justjavac/free-programming-books-zh_CN'},
                        {name: '', url: '', title: ''},
                    ]
                },
                {
                    dt: '工具/常用站点',
                    dd: [
                        {name: '在线代码着色', url: 'http://tool.oschina.net/highlight'},
                        {name: 'godaddy', url: 'https://sg.godaddy.com/'},
                        {name: '', url: '', title: ''},
                    ]
                },
                {
                    dt: '搞科研',
                    dd: [
                        {name: 'CCF推荐会议期刊', url: 'http://www.ccf.org.cn/c/2016-12-27/569124.shtml'},
                        {name: 'Google Scholar', url: 'https://scholar.google.com/'},
                        {name: 'Microsoft Academic', url: 'http://academic.research.microsoft.com/'},
                        {name: 'Microsoft Academic - cn', url: 'http://cn.bing.com/academic'},
                        {name: '国基项目查询', url: 'http://www.letpub.com.cn/index.php?page=grant'},
                        {name: '国基系统', url: 'https://isisn.nsfc.gov.cn/egrantweb/index;jsessionid=9QPKMdPrCiNKJAcwGRI5oidVHMam8bN7y8UwQGQxYVSADnpJPFTP!2094292131'},
                        {name: '小木虫', url: 'http://muchong.com/bbs/'},
                        {name: 'Computer Science Conferences & Workshops', url: 'http://dblp.uni-trier.de/db/conf/'},
                        {name: 'SemreX CFP', url: 'http://grid.hust.edu.cn/call/', title: 'HUST'},
                        {name: '中国学术会议在线', url: 'http://www.meeting.edu.cn/meeting/'},
                        {name: '', url: '', title: ''},
                    ]
                },
                {
                   dt: 'Mooc 教育',
                    dd: [
                        {name: 'coursera', url: 'https://www.coursera.org/'},
                        {name: '慕课网', url: 'http://www.imooc.com/'},
                        {name: '网易公开课', url: 'https://open.163.com/'},
                        {name: '', url: '', title: ''},
                    ]
                },
                {
                    dt: 'Blog',
                    dd:[
                        {name: 'Bugber', url: 'http://leo1875.cnblogs.com/'},
                        {name: 'tigerb', url: 'http://tigerb.cn/'},
                        {name: '刘广明', url: 'http://blog.caijing.com.cn/liuguangming/'},
                        {name: '张鑫旭', url: 'http://www.zhangxinxu.com/', title: '前端'},
                        {name: '', url: '', title: ''},
                    ]
                },
                {
                    dt: 'HQU',
                    dd:[
                        {name: '主页', url:'http://www.hqu.edu.cn/', title: '华侨大学'},
                        {name: '计院', url:'http://cst.hqu.edu.cn/', title: '华侨大学计算机科学与技术学院'},
                        {name: '成绩考试查询', url:'http://10.30.11.12/WEB/Login.aspx#', title: '登成绩，排课，查监考'},
                        {name: '课表查询', url:'http://10.30.11.12/CourseQuery/Default.aspx', title: '教务处课表查询'},
                        {name: '', url:'', title: ''},
                    ]
                },
                {
                    dt: '外包',
                    dd:[
                        {name: 'csto', url: 'http://www.csto.com/', title: 'CSDN 外包'},
                        {name: '猪八戒', url: 'http://www.zbj.com/', title: ''},
                        {name: '智城', url: 'http://www.taskcity.com/', title: ''},
                        {name: 'sxsoft', url: 'http://www.sxsoft.com/', title: ''},
                        {name: '', url: '', title: ''},
                    ]
                },

            ],
        },

    });
});