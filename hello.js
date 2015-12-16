// 
// var page = require('webpage').create();
// page.open('http://nuysoft.com/', function() {
//   page.render('baidu.png');
//   phantom.exit();
// });

var fs = require('fs')
var colors = require('colors')
var phantom = require('phantom')
var urls = [
	'http://www.w3.org/html/',
	'http://www.w3.org/Style/CSS/',
	'http://www.w3.org/standards/webdesign/script',
	'http://www.ecmascript.org/',
	'http://www.w3.org/Protocols/rfc2616/rfc2616.html',
	'http://www.w3.org/html/wg/drafts/html/master/',
	'http://www.w3.org/html/wg/drafts/html/master/',
	'http://www.w3.org/html/wg/drafts/html/master/',
	'http://lesscss.org/',
	'http://sass-lang.com/',
	'http://learnboost.github.io/stylus/',
	'http://getbootstrap.com/',
	'http://semantic-ui.com/',
	'http://designmodo.github.io/Flat-UI/#',
	'http://bradfrost.github.io/this-is-responsive/patterns.html',
	'http://usablica.github.io/front-end-frameworks/compare.html?v=2.0',
	'http://www.cssflow.com/snippets',
	'http://www.w3.org/TR/DOM-Level-3-Core/',
	'https://github.com/rogerwang/node-webkit',
	'https://github.com/atom/atom-shell',
	'http://wiki.commonjs.org/wiki/Modules/AsynchronousDefinition',
	'http://wiki.commonjs.org/wiki/Modules/1.1.1',
	'http://nuysoft.com/2014/01/24/authoring-umd-modules/',
	'http://requirejs.org/',
	'http://seajs.org/docs/',
	'http://cyj.me/why-seajs/zh/',
	'http://jquery.com/',
	'http://underscorejs.org/',
	'https://github.com/callmecavs/layzr.js',
	'http://www.regexper.com/',
	'https://github.com/adamschwartz/log',
	'https://angularjs.org/',
	'https://github.com/angular/angular',
	'http://backbonejs.org/',
	'http://emberjs.com/',
	'http://knockoutjs.com/',
	'https://github.com/bevacqua/diferente',
	'http://garann.github.io/template-chooser/',
	'http://mustache.github.io/',
	'http://handlebarsjs.com/',
	'http://akdubya.github.io/dustjs/',
	'http://ejohn.org/blog/javascript-micro-templating/',
	'http://www.crummy.com/writing/RESTful-Web-Services/RESTful_Web_Services.pdf',
	'http://jslint.fantasy.codes/',
	'https://github.com/es-analysis/plato',
	'http://img3.douban.com/lpic/s1669771.jpg',
	'http://www.ruanyifeng.com/blog/2013/09/finite-state_machine_for_javascript.html',
	'https://github.com/airbnb/javascript',
	'http://addyosmani.com/resources/essentialjsdesignpatterns/book/',
	'https://developer.mozilla.org/zh-CN/docs/Web/CSS',
	'https://developer.mozilla.org/zh-CN/docs/Web/HTML',
	'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript',
	'https://codemirror.net/',
	'http://jsfiddle.net/',
	'http://jsbin.com/',
	'http://plnkr.co/',
	'http://codepen.io/',
	'http://colourco.de/',
	'http://www.responsinator.com/',
	'https://www.draw.io/',
	'http://qunitjs.com/',
	'http://pivotal.github.io/jasmine/',
	'http://visionmedia.github.io/mocha/',
	'http://www.seleniumhq.org/projects/webdriver/',
	'http://mockjs.com/',
	'http://phantomjs.org/',
	'http://slimerjs.org/',
	'https://github.com/deanmao/node-chimera',
	'http://www.browserswarm.com/',
	'http://gruntjs.com/',
	'http://gulpjs.com/',
	'http://bower.io/',
	'http://yeoman.io/',
	'http://lisperator.net/uglifyjs/',
	'http://semver.org/',
	'https://github.com/isaacs/node-semver',
	'https://nodejs.org/en/',
	'https://github.com/visionmedia/express',
	'http://koajs.com/',
	'http://sequelizejs.com/',
	'http://www.sublimetext.com/',
	'https://www.iterm2.com/',
	'https://notepad-plus-plus.org/',
	'https://developer.mozilla.org/en-US/docs/Web/API/Console',
	'https://developer.mozilla.org/zh-CN/docs/Web/API/Window/performance',
	'https://developer.chrome.com/devtools',
	'https://git-scm.com/',
	'https://github.com/',
	'https://gist.github.com/',
	'https://pages.github.com/',
	'https://www.npmjs.com/',
	'https://developers.google.com/chart/?hl=zh-cn',
	'http://d3js.org/',
	'http://threejs.org/',
	'http://dev.sencha.com/deploy/ChartsDemo/',
	'http://stackoverflow.com/',
	'https://developer.mozilla.org/zh-CN/',
	'https://github.com/novus/nvd3',
	'https://github.com/facebook/react',
	'https://github.com/trifacta/vega',
	'https://github.com/1602/compound',
	'http://linkedin.github.io/hopscotch/',
	'http://h5bp.github.io/',
	'http://javascriptweekly.com/',
	'http://responsivedesignweekly.com/',
	'http://sidebar.io/',
	'http://css-weekly.com/',
	'http://web-design-weekly.com/',
	'http://html5weekly.com/',
	'http://www.frontendweekly.net/',
	'http://webtoolsweekly.com/',
	'http://netzartist.de/blog/',
	'http://www.scoop.it/t/netzartist',
	'http://www.oldapps.com/',
	'http://shop.oreilly.com/product/9780596805531.do',
	'http://shop.oreilly.com/product/9780596517748.do',
	'https://imagery.pragprog.com/products/317/tbajs.jpg',
	'http://img3.douban.com/lpic/s3021624.jpg',
	'http://img3.douban.com/lpic/s1669771.jpg',
	'http://img4.douban.com/lpic/s1447219.jpg',
	'http://img3.douban.com/lpic/s7011950.jpg',
	'http://www.amazon.cn/Closure-The-Definitive-Guide-Bolin-Michael/dp/1449381871/ref=sr_1_1?ie=UTF8&qid=1383373186&sr=8-1&keywords=Closure%3A+The+Definitive+Guide',
	'http://img3.douban.com/lpic/s8958854.jpg',
	'http://img3.douban.com/lpic/s8958650.jpg',
	'http://img3.douban.com/lpic/s4677623.jpg',
	'http://img3.douban.com/lpic/s6245861.jpg',
	'http://img3.douban.com/lpic/s2970031.jpg',
	'http://img4.douban.com/lpic/s7661956.jpg',
	'http://img3.douban.com/lpic/s4585551.jpg',
	'http://img3.douban.com/lpic/s7650103.jpg',
	'http://img3.douban.com/lpic/s3398900.jpg',
	'http://img3.douban.com/lpic/s3328694.jpg',
	'http://davidshariff.com/how-to-become-advanced-front-end-developer-ebook/',
	'http://img3.douban.com/lpic/s27215132.jpg',
	'http://img4.douban.com/lpic/s27269298.jpg',
	'http://msdn.microsoft.com/en-us/library/hh772374(v=vs.85).aspx',
	'https://developer.mozilla.org/en-US/docs/Web',
	'http://shop.oreilly.com/product/0636920024729.do',
	'https://www.udacity.com/course/cs291',
	'http://vulpeculox.net/misc/jsjq/jsCheat/',
	'http://lanyrd.com/topics/javascript/',
	'http://velocity.oreilly.com.cn/2015/index.php',
	'http://d2forum.alibaba-inc.com/',
	'http://lanyrd.com/series/londonjs/',
	'http://jsconf.com/',
	'http://lanyrd.com/2013/edge-nyc/',
	'http://fluentconf.com/fluent2013',
	'http://video.sina.com.cn/l/p/1691113.html',
	'https://blog.othree.net/',
	'http://www.web-tinker.com/',
	'http://www.echojs.com/',
	'http://uptodate.frontendrescue.org/',
	'http://jstherightway.org/',
	'http://calendar.perfplanet.com/',
	'http://www.manifesto.asia/',
	'https://github.com/dypsilon/frontend-dev-bookmarks',
	'http://caniuse.com/',
	'http://www.quirksmode.org/',
	'http://www.ma-no.org/',
	'http://pinterest.com/eanakashima/learn-the-front-end/',
	'http://www.codecademy.com/',
	'http://www.codeschool.com/',
	'http://bonsaiden.github.io/JavaScript-Garden/',
	'http://ejohn.org/apps/learn', // http://ejohn.org/
	'https://github.com/maxogden/art-of-node',
	'http://www.kaikeba.com/',
	'http://jakearchibald.github.io/request-quest/',
	'http://davidshariff.com/quiz/',
	'http://jakearchibald.github.io/jank-invaders/',
	'http://codecombat.com/play/level/shadow-guard',
	'http://www.w3cplus.com/css/front-end-web-development-quiz.html',
	'http://jscode.org/',
	'https://github.com/styleguide',
	'https://github.com/mdo/code-guide',
	'http://sideeffect.kr/popularconvention',
	'http://www.thinkful.com/learn/javascript-best-practices-1/',
	'http://www.thinkful.com/learn/javascript-best-practices-2/',
	'http://sideeffect.kr/popularconvention',
	'https://github.com/feross/standard', // JavaScript Standard Style — One Style to Rule Them All
	'https://github.com/blog/1162-github-data-challenge-winners',
	'https://github.com/blog/1544-data-challenge-ii-results',
	'http://osrc.dfm.io/',
	'http://osrc.dfm.io/nuysoft',
	'http://stackoverflow.com/questions/84556/whats-your-favorite-programmer-cartoon',
	'http://javascript-puzzlers.herokuapp.com/', // JavaScript Puzzlers
	'http://shields.io/', // Your Badge Service
	'http://js1k.com/2015-hypetrain/',
	'http://ejohn.org/apps/learn/',
	'http://www.producthunt.com/', // 有趣站点收集
	'http://next.36kr.com/posts?ref=about', // 山寨前一个
	'http://play.typeracer.com/', // TypeRacer - Test your typing speed and learn to type faster. Free typing game and competition. Way more fun than a typing tutor!
	'http://www.lumosity.com/',
	'http://jservice.io/',
	'http://www.humanbenchmark.com/tests/reactiontime',
	'http://whatcolourisit.scn9a.org/',
	'http://www.materialpalette.com/purple/cyan',
	'https://localizejs.com/project',
	'http://sketchcn.com/',
	'https://speakerdeck.com/ariya',
	'http://bolinfest.com/javascript/misunderstood.html',
	'http://www.uiframe.com/jscss.html',
	'http://www.staticfile.org/',
	'http://leaverou.github.io/csss/',
	'http://uxchecklist.github.io/',
	'https://www.nanamee.com/',
	'https://github.com/jsfront/src/blob/master/qq.md',
	'',
]

var ph

function doit(url, width, height, next) {
	console.log(url.green)

	var file = url.replace(/\W/g, '_') + '_' + width + 'x' + height + '.png'
	file = 'assets/' + file
	console.log('    ' + file.gray)

	fs.stat(file, function(error, stat) {
		if (!error) next()

		ph.createPage(function(page) {
			page.onConsoleMessage(function() {
				console.log(arguments)
			})
			page.setViewportSize(width, height, function() {
				var timer = setTimeout(function() {
					clearTimeout(timer)
					try {
						page.close() // ph.exit()
					} catch (e) {}
					console.log('    timeout: close page'.red)
					next()
				}, 30 * 1000)
				page.open(url, function(status) {
					function done() {
						clearTimeout(timer)
						page.close() // ph.exit()
						next()
					}
					console.log('    opened? ', status)
					if (status != 'success') {
						return done()
					}
					page.render(file, function() {
						done()
					})
				})
			})
		})

		// phantom.create({
		// 	onExit: function() {
		// 		console.log(arguments)
		// 	}
		// }, function(ph) {})
	})
}

var queue = []
urls.reverse().forEach(function(url, index) {
	if (!url) return

	queue.unshift(function() {
		doit(url, 1000, 600, function() {
			var index = Math.floor(queue.length * Math.random())
			var task = queue[index] // queue.pop()
			console.log(index, '/', queue.length)
			if (task) task()
		})

		// doit(url, 400, 600)
	})
})

phantom.create({
	onExit: function() {
		console.log(arguments)
	}
}, function(_ph) {
	ph = _ph

	queue.pop()()
})