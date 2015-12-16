define(function() {
	var data = [
		// name url icon actions tags
		{
			name: 'HTML',
			url: 'http://www.w3.org/html/',
			screenshot: '',
			actions: {},
			tags: ['Specification']
		}, {
			name: 'CSS',
			url: 'http://www.w3.org/Style/CSS/',
			screenshot: '',
			actions: {},
			tags: ['Specification']
		}, {
			name: 'JAVASCRIPT WEB APIS',
			url: 'http://www.w3.org/standards/webdesign/script',
			screenshot: '',
			actions: {},
			tags: ['Specification']
		}, {
			name: 'ECMAScript',
			url: 'http://www.ecmascript.org/',
			screenshot: '',
			actions: {
				ES5: 'http://www.ecma-international.org/publications/standards/Ecma-262.htm',
				ES6: 'http://wiki.ecmascript.org/doku.php?id=harmony:specification_drafts',
				'ECMAScript 5 compatibility table': 'http://kangax.github.io/es5-compat-table/'
			},
			tags: ['Specification']
		}, {
			name: 'HTTP',
			url: 'http://www.w3.org/Protocols/rfc2616/rfc2616.html',
			screenshot: '',
			actions: {},
			tags: ['Specification']
		}, {
			name: 'HTML5',
			url: 'http://www.w3.org/html/wg/drafts/html/master/',
			screenshot: '',
			actions: {},
			tags: ['HTML']
		}, {
			name: 'Markdown',
			url: 'http://www.w3.org/html/wg/drafts/html/master/',
			screenshot: '',
			actions: {},
			tags: ['HTML']
		}, {
			name: 'YAML',
			url: 'http://www.w3.org/html/wg/drafts/html/master/',
			screenshot: '',
			actions: {},
			tags: ['HTML']
		}, {
			name: 'LESS',
			url: 'http://lesscss.org/',
			screenshot: '',
			actions: {},
			tags: ['CSS']
		}, {
			name: 'SASS',
			url: 'http://sass-lang.com/',
			screenshot: '',
			actions: {},
			tags: ['CSS']
		}, {
			name: 'Stylus',
			url: 'http://learnboost.github.io/stylus/',
			screenshot: '',
			actions: {},
			tags: ['CSS']
		}, {
			name: 'Bootstrap 3',
			url: 'http://getbootstrap.com/',
			screenshot: '',
			actions: {},
			tags: ['CSS']
		}, {
			name: 'Semantic UI',
			url: 'http://semantic-ui.com/',
			screenshot: '',
			actions: {},
			tags: ['CSS']
		}, {
			name: 'Flat UI',
			url: 'http://designmodo.github.io/Flat-UI/#',
			screenshot: '',
			actions: {},
			tags: ['CSS']
		}, {
			name: 'Responsive Patterns',
			url: 'http://bradfrost.github.io/this-is-responsive/patterns.html',
			screenshot: '',
			actions: {},
			tags: ['CSS']
		}, {
			name: 'Comparison',
			url: 'http://usablica.github.io/front-end-frameworks/compare.html?v=2.0',
			screenshot: '',
			actions: {},
			tags: ['CSS']
		}, {
			name: 'CSS Code Snippets',
			url: 'http://www.cssflow.com/snippets',
			screenshot: '',
			actions: {},
			tags: ['CSS']
		}, {
			name: 'DOM 3',
			url: 'http://www.w3.org/TR/DOM-Level-3-Core/',
			screenshot: '',
			actions: {},
			tags: ['DOM']
		}, {
			name: 'nw.js',
			url: 'https://github.com/rogerwang/node-webkit',
			screenshot: '',
			actions: {},
			tags: ['Application']
		}, {
			name: 'Electron',
			url: 'https://github.com/atom/atom-shell',
			screenshot: '',
			actions: {},
			tags: ['Application']
		}, {
			name: 'AMD',
			desc: 'Asynchronous Module Definition',
			url: 'http://wiki.commonjs.org/wiki/Modules/AsynchronousDefinition',
			screenshot: '',
			actions: {},
			tags: ['Modularity']
		}, {
			name: 'CMD',
			desc: 'Common Module Definition',
			url: 'http://wiki.commonjs.org/wiki/Modules/1.1.1',
			screenshot: '',
			actions: {},
			tags: ['Modularity']
		}, {
			name: 'UMD',
			url: 'http://nuysoft.com/2014/01/24/authoring-umd-modules/',
			screenshot: '',
			actions: {},
			tags: ['Modularity']
		}, {
			name: 'RequireJS',
			desc: 'JavaScript file and module loader',
			url: 'http://requirejs.org/',
			screenshot: '',
			actions: {},
			tags: ['Modularity']
		}, {
			name: 'Sea.js',
			url: 'http://seajs.org/docs/',
			desc: 'A Module Loader for the Web',
			screenshot: '',
			actions: {},
			tags: ['Modularity']
		}, {
			name: 'SeaJS 所为何',
			url: 'http://cyj.me/why-seajs/zh/',
			screenshot: '',
			actions: {},
			tags: ['Modularity']
		},

		{
			name: 'jQuery',
			url: 'http://jquery.com/',
			screenshot: '',
			actions: {},
			tags: ['Tool']
		}, {
			name: 'Underscore.js',
			url: 'http://underscorejs.org/',
			screenshot: '',
			actions: {},
			tags: ['Tool']
		}, {
			name: 'Layzr.js',
			desc: 'A small, fast, modern, and dependency-free library for lazy loading.',
			url: 'https://github.com/callmecavs/layzr.js',
			screenshot: '',
			actions: {},
			tags: ['']
		}, {
			name: 'Regexper',
			url: 'http://www.regexper.com/',
			screenshot: '',
			actions: {},
			tags: ['Tool']
		}, {
			name: 'Log',
			url: 'https://github.com/adamschwartz/log',
			screenshot: '',
			actions: {},
			tags: ['Tool']
		},

		{
			name: 'AngularJS',
			url: 'https://angularjs.org/',
			screenshot: '',
			actions: {
				'案例': 'https://www.madewithangular.com/#/'
			},
			tags: ['SPA']
		}, {
			name: 'AngularJS 2',
			url: 'https://github.com/angular/angular',
			screenshot: '',
			actions: {
				'设计文档': 'https://drive.google.com/drive/folders/0B7Ovm8bUYiUDR29iSkEyMk5pVUk'
			},
			tags: ['SPA']
		}, {
			name: 'Vue.js',
			url: 'http://vuejs.org/',
			screenshot: '',
			actions: {},
			tags: ['Data Binding']
		}, {
			name: 'Ant Design of Vue',
			url: 'http://okoala.github.io/vue-antd/#!/docs/introduce',
			screenshot: '',
			actions: {},
			tags: ['Data Binding', 'Components', 'UI']
		},

		{
			name: 'Backbone',
			url: 'http://backbonejs.org/',
			screenshot: '',
			actions: {},
			tags: ['MV*']
		}, {
			name: 'Ember.js',
			url: 'http://emberjs.com/',
			screenshot: '',
			actions: {},
			tags: ['MV*']
		}, {
			name: 'Knockout',
			url: 'http://knockoutjs.com/',
			screenshot: '',
			actions: {},
			tags: ['MV*']
		}, {
			name: 'User-friendly virtual DOM diffing',
			url: 'https://github.com/bevacqua/diferente',
			screenshot: '',
			actions: {},
			tags: ['MV*']
		},

		{
			name: 'Template Engine Chooser',
			url: 'http://garann.github.io/template-chooser/',
			screenshot: '',
			actions: {},
			tags: ['Templating']
		}, {
			name: 'Mustache',
			url: 'http://mustache.github.io/',
			screenshot: '',
			actions: {},
			tags: ['Templating']
		}, {
			name: 'Handlebars.js',
			url: 'http://handlebarsjs.com/',
			screenshot: '',
			actions: {},
			tags: ['Templating']
		}, {
			name: 'Dust.js',
			url: 'http://akdubya.github.io/dustjs/',
			screenshot: '',
			actions: {},
			tags: ['Templating']
		}, {
			name: 'Micro-Templating',
			url: 'http://ejohn.org/blog/javascript-micro-templating/',
			screenshot: '',
			actions: {},
			tags: ['Templating']
		},

		{
			name: 'RESTful',
			url: 'http://www.crummy.com/writing/RESTful-Web-Services/RESTful_Web_Services.pdf',
			screenshot: '',
			actions: {},
			tags: ['API']
		},

		{
			name: 'JShint',
			url: 'http://jslint.fantasy.codes/',
			screenshot: '',
			actions: {
				'Jshint cheatsheet': 'http://ricostacruz.com/cheatsheets/jshint.html'
			},
			tags: ['Quality']
		}, {
			name: 'Plato',
			url: 'https://github.com/es-analysis/plato',
			screenshot: '',
			actions: {},
			tags: ['Quality']
		}, {
			name: 'Refactor',
			url: 'http://img3.douban.com/lpic/s1669771.jpg',
			screenshot: '',
			actions: {},
			tags: ['Quality']
		}, {
			name: '有限状态机',
			url: 'http://www.ruanyifeng.com/blog/2013/09/finite-state_machine_for_javascript.html',
			screenshot: '',
			actions: {},
			tags: ['Quality']
		}, {
			name: 'Coding Style',
			url: 'https://github.com/airbnb/javascript',
			screenshot: '',
			actions: {
				'airbnb': 'https://github.com/airbnb/javascript'
			},
			tags: ['Quality']
		}, {
			name: 'Learning JavaScript Design Patterns',
			url: 'http://addyosmani.com/resources/essentialjsdesignpatterns/book/',
			screenshot: '',
			actions: {},
			tags: ['Quality']
		},

		{
			name: 'CSS',
			url: 'https://developer.mozilla.org/zh-CN/docs/Web/CSS',
			screenshot: '',
			actions: {},
			tags: ['Beautifier']
		}, {
			name: 'HTML',
			url: 'https://developer.mozilla.org/zh-CN/docs/Web/HTML',
			screenshot: '',
			actions: {},
			tags: ['Beautifier']
		}, {
			name: 'JavaScript',
			url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript',
			screenshot: '',
			actions: {},
			tags: ['Beautifier']
		},

		{
			name: 'codemirror',
			url: 'https://codemirror.net/',
			screenshot: '',
			actions: {},
			tags: ['Editor']
		},

		{
			name: 'JSFiddle',
			url: 'http://jsfiddle.net/',
			screenshot: '',
			actions: {},
			tags: ['Online services']
		}, {
			name: 'JS Bin',
			url: 'http://jsbin.com/',
			screenshot: '',
			actions: {},
			tags: ['Online services']
		}, {
			name: 'Plunker',
			desc: 'Plunker is an online community for creating, collaborating on and sharing your web development ideas.',
			url: 'http://plnkr.co/',
			screenshot: '',
			actions: {},
			tags: ['Online services']
		}, {
			name: 'CodePen',
			url: 'http://codepen.io/',
			screenshot: '',
			actions: {},
			tags: ['Online services']
		}, {
			name: 'colourco',
			url: 'http://colourco.de/',
			screenshot: '',
			actions: {},
			tags: ['Online services']
		}, {
			name: 'responsinator',
			url: 'http://www.responsinator.com/',
			screenshot: '',
			actions: {},
			tags: ['Online services']
		}, {
			name: 'Untitled Diagram',
			url: 'https://www.draw.io/',
			screenshot: '',
			actions: {},
			tags: ['Online services']
		},

		{
			name: 'QUnit',
			desc: 'QUnit is a powerful, easy-to-use JavaScript unit testing framework.',
			url: 'http://qunitjs.com/',
			screenshot: '',
			actions: {},
			tags: ['Testing', 'Test Framework']
		}, {
			name: 'Jasmine',
			desc: 'DOM-less simple JavaScript testing framework',
			url: 'http://pivotal.github.io/jasmine/',
			screenshot: '',
			actions: {},
			tags: ['Testing', 'Test Framework']
		}, {
			name: 'Mocha',
			desc: 'simple, flexible, fun javascript test framework for node.js & the browser. (BDD, TDD, QUnit styles via interfaces)',
			url: 'http://visionmedia.github.io/mocha/',
			screenshot: '',
			actions: {},
			tags: ['Testing', 'Test Framework']
		}, {
			name: 'WebDriver',
			url: 'http://www.seleniumhq.org/projects/webdriver/',
			screenshot: '',
			actions: {},
			tags: ['Testing', 'Test Framework']
		}, {
			name: 'Mock.js',
			url: 'http://mockjs.com/',
			screenshot: '',
			actions: {},
			tags: ['Testing', 'Test Framework']
		}, {
			name: 'phantomjs',
			url: 'http://phantomjs.org/',
			screenshot: '',
			actions: {},
			tags: ['Testing', 'Test Framework']
		}, {
			name: 'slimerjs',
			url: 'http://slimerjs.org/',
			screenshot: '',
			actions: {},
			tags: ['Testing', 'Test Framework']
		}, {
			name: 'node-chimera',
			url: 'https://github.com/deanmao/node-chimera',
			screenshot: '',
			actions: {},
			tags: ['Testing', 'Test Framework']
		},

		{
			name: 'BrowserSwarm',
			url: 'http://www.browserswarm.com/',
			screenshot: '',
			actions: {},
			tags: ['Test Platform']
		},

		{
			name: 'Grunt',
			url: 'http://gruntjs.com/',
			screenshot: '',
			actions: {},
			tags: ['Automation', 'Build']
		}, {
			name: 'gulp.js',
			url: 'http://gulpjs.com/',
			screenshot: '',
			actions: {},
			tags: ['Automation', 'Build']
		}, {
			name: 'Twitter Bower',
			url: 'http://bower.io/',
			screenshot: '',
			actions: {},
			tags: ['Automation', 'Build']
		}, {
			name: 'Yeoman',
			url: 'http://yeoman.io/',
			screenshot: '',
			actions: {},
			tags: ['Automation', 'Build']
		}, {
			name: 'UglifyJS',
			url: 'http://lisperator.net/uglifyjs/',
			screenshot: '',
			actions: {},
			tags: ['Automation', 'Build']
		}, {
			name: 'Semantic Versioning',
			url: 'http://semver.org/',
			screenshot: '',
			actions: {},
			tags: ['Automation', 'Build']
		}, {
			name: 'node-semver',
			desc: 'The semantic versioner for npm',
			url: 'https://github.com/isaacs/node-semver',
			screenshot: '',
			actions: {},
			tags: ['Automation', 'Build']
		},

		{
			name: 'Node.js',
			url: 'https://nodejs.org/en/',
			screenshot: '',
			actions: {},
			tags: ['Server']
		}, {
			name: 'Express',
			url: 'https://github.com/visionmedia/express',
			screenshot: '',
			actions: {},
			tags: ['Server']
		}, {
			name: 'KOA',
			url: 'http://koajs.com/',
			screenshot: '',
			actions: {},
			tags: ['Server']
		},

		{
			name: 'sequelizejs',
			url: 'http://sequelizejs.com/',
			screenshot: '',
			actions: {},
			tags: ['DataBase']
		},

		{
			name: 'Sublime & Plugins',
			url: 'http://www.sublimetext.com/',
			screenshot: '',
			actions: {},
			tags: ['IDE', 'Dev Tool']
		}, {
			name: 'iTerm2',
			url: 'https://www.iterm2.com/',
			screenshot: '',
			actions: {},
			tags: ['IDE', 'Dev Tool']
		}, {
			name: 'Nodepad++',
			url: 'https://notepad-plus-plus.org/',
			screenshot: '',
			actions: {},
			tags: ['IDE', 'Dev Tool']
		}, {
			name: 'console',
			url: 'https://developer.mozilla.org/en-US/docs/Web/API/Console',
			screenshot: '',
			actions: {
				'console api': 'https://developers.google.com/chrome-developer-tools/docs/console-api',
				'base64 > console': '',
				// console.log("%c", "padding: 14px 45px; line-height: 28px; background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAAASCAYAAADbo8kDAAADmUlEQ…JDu4CVq2Dy1yR8/PyJxjqjSa5oZyziX4jhAu2kXXKBdhLoP4eQ5USLTBxcAAAAAElFTkSuQmCC') no-repeat center center;"); // 90x18
				'svg > console': '',
				// console.log("%c", "padding: 14px 45px; line-height: 28px; background:url('https://api.travis-ci.org/nuysoft/Mock.svg') no-repeat center center;"); // 90x18
				'svg > FileReader > base64': 'https://github.com/rujs/Image-to-Base64-Converter',
				'svg > blob > image > canvas': 'http://javascript.ruanyifeng.com/htmlapi/svg.html',
				'GitHub Notifications on your menu bar.': 'https://github.com/ekonstantinidis/gitify',
				'Gitter — Where developers come to talk..html': 'https://gitter.im/'
			},
			tags: ['IDE', 'Dev Tool']
		},

		{
			name: 'window.preformance',
			url: 'https://developer.mozilla.org/zh-CN/docs/Web/API/Window/performance',
			screenshot: '',
			actions: {},
			tags: ['Performence']
		}, {
			name: 'Chrome DevTools',
			url: 'https://developer.chrome.com/devtools',
			screenshot: '',
			actions: {
				'Chrome扩展及应用开发': 'http://www.ituring.com.cn/article/60130'
			},
			tags: ['Performence']
		},

		{
			name: 'Git',
			url: 'https://git-scm.com/',
			screenshot: '',
			actions: {},
			tags: ['Repository']
		}, {
			name: 'Github',
			url: 'https://github.com/',
			screenshot: '',
			actions: {},
			tags: ['Repository']
		}, {
			name: 'Gist',
			url: 'https://gist.github.com/',
			screenshot: '',
			actions: {},
			tags: ['Repository']
		}, {
			name: 'Pages',
			url: 'https://pages.github.com/',
			screenshot: '',
			actions: {},
			tags: ['Repository']
		}, {
			name: 'npm',
			url: 'https://www.npmjs.com/',
			screenshot: '',
			actions: {},
			tags: ['Repository']
		},

		{
			name: 'Google Chart',
			url: 'https://developers.google.com/chart/?hl=zh-cn',
			screenshot: '',
			actions: {},
			tags: ['Chart']
		}, {
			name: 'D3',
			url: 'http://d3js.org/',
			screenshot: '',
			actions: {},
			tags: ['Chart']
		}, {
			name: 'Three.js',
			url: 'http://threejs.org/',
			screenshot: '',
			actions: {},
			tags: ['Chart']
		}, {
			name: 'ExtJS Chart',
			url: 'http://dev.sencha.com/deploy/ChartsDemo/',
			screenshot: '',
			actions: {},
			tags: ['Chart']
		},

		{
			name: 'stackoverflow',
			url: 'http://stackoverflow.com/',
			screenshot: '',
			actions: {},
			tags: ['Community']
		},

		{
			name: 'MDN',
			url: 'https://developer.mozilla.org/zh-CN/',
			screenshot: '',
			actions: {},
			tags: ['DOCS']
		}, {
			name: 'chart doc',
			url: 'https://github.com/novus/nvd3',
			screenshot: '',
			actions: {},
			tags: ['']
		}, {
			name: 'library framework doc',
			url: 'https://github.com/facebook/react',
			screenshot: '',
			actions: {},
			tags: ['']
		}, {
			name: 'chart demo',
			url: 'https://github.com/trifacta/vega',
			screenshot: '',
			actions: {},
			tags: ['']
		}, {
			name: 'MVC ',
			url: 'https://github.com/1602/compound',
			screenshot: '',
			actions: {},
			tags: ['']
		}, {
			name: 'guide',
			url: 'http://linkedin.github.io/hopscotch/',
			screenshot: '',
			actions: {},
			tags: ['']
		}, {
			name: '团队官网',
			url: 'http://h5bp.github.io/',
			screenshot: '',
			actions: {},
			tags: ['']
		},

		{
			name: 'JavaScript Weekly',
			desc: 'A free, once–weekly e-mail round-up of JavaScript news and articles.',
			url: 'http://javascriptweekly.com/',
			screenshot: '',
			actions: {},
			tags: ['Email Group']
		}, {
			name: 'Responsive Design Weekly',
			desc: 'A free, once–weekly round-up of responsive design articles, tools, tips, tutorials and inspirational links.',
			url: 'http://responsivedesignweekly.com/',
			screenshot: '',
			actions: {},
			tags: ['Email Group']
		}, {
			name: 'Sidebar',
			desc: 'The 5 best design links, every day',
			url: 'http://sidebar.io/',
			screenshot: '',
			actions: {},
			tags: ['Email Group']
		}, {
			name: 'CSS Weekly',
			desc: 'weekly e-mail roundup of css articles, tutorials, experiments and tools',
			url: 'http://css-weekly.com/',
			screenshot: '',
			actions: {},
			tags: ['Email Group']
		}, {
			name: 'Web Design Weekly News',
			desc: 'A once a week email with no spam, no rambling. Just pure awesome links to the best news and articles to hit the interweb during the week.',
			url: 'http://web-design-weekly.com/',
			screenshot: '',
			actions: {},
			tags: ['Email Group']
		}, {
			name: 'HTML5 Weekly',
			desc: 'Top browser technology news and links straight to your inbox, weekly',
			url: 'http://html5weekly.com/',
			screenshot: '',
			actions: {},
			tags: ['Email Group']
		}, {
			name: 'Front-end Weekly',
			desc: '',
			url: 'http://www.frontendweekly.net/',
			screenshot: '',
			actions: {},
			tags: ['Email Group']
		}, {
			name: 'Web Tools Weekly',
			desc: 'A weekly newsletter for front-end developers',
			url: 'http://webtoolsweekly.com/',
			screenshot: '',
			actions: {},
			tags: ['Email Group']
		}, {
			name: 'Frontend Weekly',
			desc: '',
			url: 'http://netzartist.de/blog/',
			screenshot: '',
			actions: {},
			tags: ['Email Group']
		}, {
			name: 'Frontend Weekly',
			desc: '',
			url: 'http://www.scoop.it/t/netzartist',
			screenshot: '',
			actions: {},
			tags: ['Email Group']
		},

		{
			name: 'Old App',
			url: 'http://www.oldapps.com/',
			screenshot: '',
			actions: {},
			tags: ['Browser']
		},

		{
			name: 'JavaScript - The Definitive Guide',
			url: 'http://shop.oreilly.com/product/9780596805531.do',
			screenshot: '',
			actions: {},
			tags: ['Book']
		}, {
			name: 'The Good Parts',
			url: 'http://shop.oreilly.com/product/9780596517748.do',
			screenshot: '',
			actions: {},
			tags: ['Book']
		}, {
			name: 'Async JavaScript',
			url: 'https://imagery.pragprog.com/products/317/tbajs.jpg',
			screenshot: 'https://imagery.pragprog.com/products/317/tbajs.jpg',
			actions: {},
			tags: ['Book']
		}, {
			name: 'Pro JavaScript Techniques',
			url: 'http://img3.douban.com/lpic/s3021624.jpg',
			screenshot: 'http://img3.douban.com/lpic/s3021624.jpg',
			actions: {},
			tags: ['Book']
		}, {
			name: 'Refactoring',
			desc: 'Improving the Design & Existing Code',
			url: 'http://img3.douban.com/lpic/s1669771.jpg',
			screenshot: 'http://img3.douban.com/lpic/s1669771.jpg',
			actions: {},
			tags: ['Book']
		}, {
			name: 'Head First Design Patterns',
			url: 'http://img4.douban.com/lpic/s1447219.jpg',
			screenshot: 'http://img4.douban.com/lpic/s1447219.jpg',
			actions: {},
			tags: ['Book']
		}, {
			name: 'Eloquent JavaScript',
			desc: 'A Modern Introduction to Programming',
			url: 'http://img3.douban.com/lpic/s7011950.jpg',
			screenshot: 'http://img3.douban.com/lpic/s7011950.jpg',
			actions: {},
			tags: ['Book']
		}, {
			name: 'Closure: The Definitive Guide',
			url: 'http://www.amazon.cn/Closure-The-Definitive-Guide-Bolin-Michael/dp/1449381871/ref=sr_1_1?ie=UTF8&qid=1383373186&sr=8-1&keywords=Closure%3A+The+Definitive+Guide',
			screenshot: '',
			actions: {},
			tags: ['Book']
		}, {
			name: 'JavaScript权威指南 第6版',
			url: 'http://img3.douban.com/lpic/s8958854.jpg',
			screenshot: 'http://img3.douban.com/lpic/s8958854.jpg',
			actions: {},
			tags: ['Book']
		}, {
			name: 'JavaScript高级程序设计(第3版)',
			url: 'http://img3.douban.com/lpic/s8958650.jpg',
			screenshot: 'http://img3.douban.com/lpic/s8958650.jpg',
			actions: {},
			tags: ['Book']
		}, {
			name: 'JavaScript DOM编程艺术(第2版)',
			url: 'http://img3.douban.com/lpic/s4677623.jpg',
			screenshot: 'http://img3.douban.com/lpic/s4677623.jpg',
			actions: {},
			tags: ['Book']
		}, {
			name: '高性能JavaScript',
			url: 'http://img3.douban.com/lpic/s6245861.jpg',
			screenshot: 'http://img3.douban.com/lpic/s6245861.jpg',
			actions: {},
			tags: ['Book']
		}, {
			name: 'JAVASCRIPT 语言精髓与编程实践',
			url: 'http://img3.douban.com/lpic/s2970031.jpg',
			screenshot: 'http://img3.douban.com/lpic/s2970031.jpg',
			actions: {},
			tags: ['Book']
		}, {
			name: '测试驱动的 JavaScript 开发（JavaScript 敏捷测试指南）',
			url: 'http://img4.douban.com/lpic/s7661956.jpg',
			screenshot: 'http://img4.douban.com/lpic/s7661956.jpg',
			actions: {},
			tags: ['Book']
		}, {
			name: '深入浅出 JavaScript（中文版）',
			url: 'http://img3.douban.com/lpic/s4585551.jpg',
			screenshot: 'http://img3.douban.com/lpic/s4585551.jpg',
			actions: {},
			tags: ['Book']
		}, {
			name: 'JavaScript 修炼之道',
			url: 'http://img3.douban.com/lpic/s7650103.jpg',
			screenshot: 'http://img3.douban.com/lpic/s7650103.jpg',
			actions: {},
			tags: ['Book']
		}, {
			name: 'JavaScript 设计模式',
			url: 'http://img3.douban.com/lpic/s3398900.jpg',
			screenshot: 'http://img3.douban.com/lpic/s3398900.jpg',
			actions: {},
			tags: ['Book']
		}, {
			name: '悟透JavaScript',
			url: 'http://img3.douban.com/lpic/s3328694.jpg',
			screenshot: 'http://img3.douban.com/lpic/s3328694.jpg',
			actions: {},
			tags: ['Book']
		}, {
			name: 'How to become an Advanced Front End Developer',
			url: 'http://davidshariff.com/how-to-become-advanced-front-end-developer-ebook/',
			screenshot: '',
			actions: {},
			tags: ['Book']
		}, {
			name: 'jQuery 技术内幕',
			url: 'http://img3.douban.com/lpic/s27215132.jpg',
			screenshot: '',
			actions: {},
			tags: ['Book']
		}, {
			name: 'Developing JavaScript Web Applications',
			desc: '基于 MVC 的 JavaScript Web 富应用开发',
			url: 'http://img4.douban.com/lpic/s27269298.jpg',
			screenshot: '',
			actions: {},
			tags: ['Book']
		},

		{
			name: 'IE API Reference',
			url: 'http://msdn.microsoft.com/en-us/library/hh772374(v=vs.85).aspx',
			screenshot: '',
			actions: {},
			tags: ['Reference']
		}, {
			name: 'Web technology for developers',
			url: 'https://developer.mozilla.org/en-US/docs/Web',
			screenshot: '',
			actions: {},
			tags: ['Reference']
		}, {
			name: 'WebGL: Up and Running',
			url: 'http://shop.oreilly.com/product/0636920024729.do',
			screenshot: '',
			actions: {},
			tags: ['Reference']
		}, {
			name: 'Interactive 3D Graphics',
			url: 'https://www.udacity.com/course/cs291',
			screenshot: '',
			actions: {},
			tags: ['Reference']
		},

		{
			name: 'Javascript Cheatsheet',
			url: 'http://vulpeculox.net/misc/jsjq/jsCheat/',
			screenshot: '',
			actions: {},
			tags: ['CheatSheet']
		},

		{
			name: 'lanyrd.com',
			desc: 'JavaScript conferences and events',
			url: 'http://lanyrd.com/topics/javascript/',
			screenshot: '',
			actions: {},
			tags: ['BBS']
		}, {
			name: 'Velocity',
			url: 'http://velocity.oreilly.com.cn/2015/index.php',
			screenshot: '',
			actions: {
				'VelocityNY2013': 'http://yunpan.taobao.com/share/link/0112tTrNJ'
			},
			tags: ['BBS']
		}, {
			name: 'D2 前端技术论坛',
			desc: 'Designer & Developer Front End Technology Forum',
			url: 'http://d2forum.alibaba-inc.com/',
			screenshot: '',
			actions: {},
			tags: ['BBS']
		}, {
			name: 'London JS',
			url: 'http://lanyrd.com/series/londonjs/',
			screenshot: '',
			actions: {},
			tags: ['BBS']
		}, {
			name: 'JSConf',
			desc: 'Conferences for the JavaScript community.',
			url: 'http://jsconf.com/',
			screenshot: '',
			actions: {},
			tags: ['BBS']
		}, {
			name: 'Edge NYC',
			url: 'http://lanyrd.com/2013/edge-nyc/',
			screenshot: '',
			actions: {},
			tags: ['BBS']
		}, {
			name: 'Fluent',
			url: 'http://fluentconf.com/fluent2013',
			screenshot: '',
			actions: {},
			tags: ['BBS']
		}, {
			name: '世界互联网大会视频',
			url: 'http://video.sina.com.cn/l/p/1691113.html',
			screenshot: '',
			actions: {},
			tags: ['BBS']
		},

		{
			name: 'O3noBLOG',
			url: 'https://blog.othree.net/',
			screenshot: '',
			actions: {},
			tags: ['Blog']
		}, {
			name: 'Web技术研究所',
			url: 'http://www.web-tinker.com/',
			screenshot: '',
			actions: {},
			tags: ['Blog']
		},

		{
			name: 'Echo JS',
			url: 'http://www.echojs.com/',
			screenshot: '',
			actions: {},
			tags: ['Resources']
		}, {
			name: 'HOW TO KEEP UP TO DATE ON FRONT-END TECHNOLOGIES',
			url: 'http://uptodate.frontendrescue.org/',
			screenshot: '',
			actions: {},
			tags: ['Resources']
		}, {
			name: 'JS The Right Way',
			url: 'http://jstherightway.org/',
			screenshot: '',
			actions: {},
			tags: ['Resources']
		}, {
			name: 'Performance Calendar - The speed geek\'s favorite time of the year',
			url: 'http://calendar.perfplanet.com/',
			screenshot: '',
			actions: {},
			tags: ['Resources']
		},

		{
			name: 'MANIFESTO',
			desc: 'A declaration of fashion, design and pop culture',
			url: 'http://www.manifesto.asia/',
			screenshot: '',
			actions: {},
			tags: ['Other']
		}, {
			name: 'frontend-dev-bookmarks',
			url: 'https://github.com/dypsilon/frontend-dev-bookmarks',
			screenshot: '',
			actions: {},
			tags: ['Other']
		},

		{
			name: 'Can I use...',
			desc: 'Compatibility tables for support of HTML5, CSS3, SVG and more in desktop and mobile browsers.',
			url: 'http://caniuse.com/',
			screenshot: '',
			actions: {},
			tags: ['Compatibility']
		}, {
			name: 'QuirksMode.org',
			desc: 'the prime source for browser compatibility information on the Internet. ',
			url: 'http://www.quirksmode.org/',
			screenshot: '',
			actions: {},
			tags: ['Compatibility']
		},

		{
			name: 'Web Design and Web Development Agency',
			url: 'http://www.ma-no.org/',
			screenshot: '',
			actions: {},
			tags: ['Read List']
		},

		{
			name: 'Learn the Front End',
			desc: 'Resources for HTML, CSS, JavaScript, and other front-end learning.',
			url: 'http://pinterest.com/eanakashima/learn-the-front-end/',
			screenshot: '',
			actions: {},
			tags: ['Learn']
		}, {
			name: 'Codecademy',
			desc: 'Learn to code interactively, for free.',
			url: 'http://www.codecademy.com/',
			screenshot: '',
			actions: {},
			tags: ['Learn']
		}, {
			name: 'Code School',
			desc: 'Learn by Doing',
			url: 'http://www.codeschool.com/',
			screenshot: '',
			actions: {},
			tags: ['Learn']
		}, {
			name: 'JavaScript Garden',
			desc: 'a growing collection of documentation about the most quirky parts of the JavaScript programming language.',
			url: 'http://bonsaiden.github.io/JavaScript-Garden/',
			screenshot: '',
			actions: {},
			tags: ['Learn']
		}, {
			name: 'John Resig\'s Learning app',
			url: 'http://ejohn.org/apps/learn', // http://ejohn.org/
			screenshot: '',
			actions: {},
			tags: ['Learn']
		}, {
			name: 'art-of-node',
			desc: 'a short introduction to node.js',
			url: 'https://github.com/maxogden/art-of-node',
			screenshot: '',
			actions: {},
			tags: ['Learn']
		}, {
			name: '开课吧',
			url: 'http://www.kaikeba.com/',
			screenshot: '',
			actions: {},
			tags: ['Learn']
		},

		{
			name: 'Request Quest',
			url: 'http://jakearchibald.github.io/request-quest/',
			screenshot: '',
			actions: {},
			tags: ['Game']
		}, {
			name: 'Front End Web Development Quiz',
			url: 'http://davidshariff.com/quiz/',
			screenshot: '',
			actions: {},
			tags: ['Game']
		}, {
			name: 'Jank invaders',
			url: 'http://jakearchibald.github.io/jank-invaders/',
			screenshot: '',
			actions: {},
			tags: ['Game']
		}, {
			name: 'CodeCombat',
			desc: 'Learn how to code by playing a game',
			url: 'http://codecombat.com/play/level/shadow-guard',
			screenshot: '',
			actions: {},
			tags: ['Game']
		}, {
			name: 'Web前端开发测试题',
			url: 'http://www.w3cplus.com/css/front-end-web-development-quiz.html',
			screenshot: '',
			actions: {},
			tags: ['Game']
		},

		{
			name: 'jsCode',
			desc: 'JavaScript Coding Styles',
			url: 'http://jscode.org/',
			screenshot: '',
			actions: {},
			tags: ['Coding Guideline']
		}, {
			name: 'GitHub Styleguide',
			url: 'https://github.com/styleguide',
			screenshot: '',
			actions: {},
			tags: ['Coding Guideline']
		}, {
			name: 'Code Guide for HTML and CSS',
			url: 'https://github.com/mdo/code-guide',
			screenshot: '',
			actions: {},
			tags: ['Coding Guideline']
		}, {
			name: 'Popular Coding Convention on Github',
			url: 'http://sideeffect.kr/popularconvention',
			screenshot: '',
			actions: {},
			tags: ['Coding Guideline']
		}, {
			name: 'JavaScript Best Practices Part 1',
			url: 'http://www.thinkful.com/learn/javascript-best-practices-1/',
			screenshot: '',
			actions: {},
			tags: ['Coding Guideline']
		}, {
			name: 'JavaScript Best Practices Part 2',
			url: 'http://www.thinkful.com/learn/javascript-best-practices-2/',
			screenshot: '',
			actions: {},
			tags: ['Coding Guideline']
		}, {
			name: '',
			url: 'http://sideeffect.kr/popularconvention',
			screenshot: '',
			actions: {},
			tags: ['Coding Guideline']
		}, {
			name: 'JavaScript Standard Style',
			desc: 'One Style to Rule Them All',
			url: 'https://github.com/feross/standard', // JavaScript Standard Style — One Style to Rule Them All
			screenshot: '',
			actions: {},
			tags: ['Coding Guideline']
		},

		{
			name: '',
			url: 'https://github.com/blog/1162-github-data-challenge-winners',
			screenshot: '',
			actions: {},
			tags: ['Fun']
		}, {
			name: '',
			url: 'https://github.com/blog/1544-data-challenge-ii-results',
			screenshot: '',
			actions: {},
			tags: ['Fun']
		}, {
			name: '',
			url: 'http://osrc.dfm.io/',
			screenshot: '',
			actions: {},
			tags: ['Fun']
		}, {
			name: '',
			url: 'http://osrc.dfm.io/nuysoft',
			screenshot: '',
			actions: {},
			tags: ['Fun']
		}, {
			name: '',
			url: 'http://stackoverflow.com/questions/84556/whats-your-favorite-programmer-cartoon',
			screenshot: '',
			actions: {},
			tags: ['Fun']
		}, {
			name: '',
			url: 'http://javascript-puzzlers.herokuapp.com/', // JavaScript Puzzlers
			screenshot: '',
			actions: {},
			tags: ['Fun']
		}, {
			name: '',
			url: 'http://shields.io/', // Your Badge Service
			screenshot: '',
			actions: {},
			tags: ['Fun']
		}, {
			name: '',
			url: 'http://js1k.com/2015-hypetrain/',
			screenshot: '',
			actions: {},
			tags: ['Fun']
		}, {
			name: '',
			url: 'http://ejohn.org/apps/learn/',
			screenshot: '',
			actions: {},
			tags: ['Fun']
		}, {
			name: '',
			url: 'http://www.producthunt.com/', // 有趣站点收集
			screenshot: '',
			actions: {},
			tags: ['Fun']
		}, {
			name: '',
			url: 'http://next.36kr.com/posts?ref=about', // 山寨前一个
			screenshot: '',
			actions: {},
			tags: ['Fun']
		}, {
			name: '',
			url: 'http://play.typeracer.com/', // TypeRacer - Test your typing speed and learn to type faster. Free typing game and competition. Way more fun than a typing tutor!
			screenshot: '',
			actions: {},
			tags: ['Fun']
		}, {
			name: 'Challenge your brain with scientifically designed training',
			url: 'http://www.lumosity.com/',
			screenshot: '',
			actions: {},
			tags: ['Fun']
		}, {
			name: '108,000+ Trivia Questions',
			url: 'http://jservice.io/',
			screenshot: '',
			actions: {},
			tags: ['Fun']
		}, {
			name: 'reactiontime',
			url: 'http://www.humanbenchmark.com/tests/reactiontime',
			screenshot: '',
			actions: {},
			tags: ['Fun']
		}, {
			name: '时间 > 颜色',
			url: 'http://whatcolourisit.scn9a.org/',
			screenshot: '',
			actions: {},
			tags: ['Fun']
		}, {
			name: '色彩 DEMO',
			url: 'http://www.materialpalette.com/purple/cyan',
			screenshot: '',
			actions: {},
			tags: ['Fun']
		}, {
			name: '国际化',
			url: 'https://localizejs.com/project',
			screenshot: '',
			actions: {},
			tags: ['Fun']
		},

		{
			name: 'Sketch',
			url: 'http://sketchcn.com/',
			screenshot: '',
			actions: {},
			tags: ['Design']
		},

		{
			name: '',
			url: 'https://speakerdeck.com/ariya',
			screenshot: '',
			actions: {},
			tags: ['Future']
		},

		{
			name: 'Frequently Misunderstood JavaScript Concepts',
			url: 'http://bolinfest.com/javascript/misunderstood.html',
			screenshot: '',
			actions: {},
			tags: ['History']
		},

		{
			name: '',
			url: 'http://www.uiframe.com/jscss.html',
			screenshot: '',
			actions: {},
			tags: ['CDN']
		}, {
			name: '',
			url: 'http://www.staticfile.org/',
			screenshot: '',
			actions: {},
			tags: ['CDN']
		},

		{
			name: 'csss',
			desc: 'CSS-based SlideShow System',
			url: 'http://leaverou.github.io/csss/',
			screenshot: '',
			actions: {},
			tags: ['Slide']
		},

		{
			name: '',
			url: 'http://uxchecklist.github.io/',
			screenshot: '',
			actions: {},
			tags: ['CheckList']
		},

		{
			name: '',
			url: 'https://www.nanamee.com/',
			screenshot: '',
			actions: {},
			tags: ['Material']
		},

		{
			name: 'QQ交流群规',
			url: 'https://github.com/jsfront/src/blob/master/qq.md',
			screenshot: '',
			actions: {},
			tags: ['']
		}


		// {
		// 	name: '',
		// 	url: '',
		// 	screenshot: '',
		// 	actions: {},
		// 	tags: ['']
		// }
	]

	data.forEach(function(item, index) {
		if (item.screenshot) return
		var width = 1000
		var height = 600
		var file = item.url.replace(/\W/g, '_') + '_' + width + 'x' + height + '.png'
		item.screenshot = 'assets/' + file
	})
	return data
})