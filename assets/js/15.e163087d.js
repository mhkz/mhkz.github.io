(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{492:function(t,s,a){t.exports=a.p+"assets/img/list1.b93e7ade.jpg"},493:function(t,s,a){t.exports=a.p+"assets/img/list2.452e9437.jpg"},553:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("前端一般工作中很少会用到"),n("code",[t._v("链表")]),t._v("，一般"),n("code",[t._v("数组")]),t._v("、"),n("code",[t._v("对象")]),t._v("这种就能满足大部分场景了，我在工作中也没用过"),n("code",[t._v("链表")]),t._v("这种结构。不过在"),n("a",{attrs:{href:"../../leetcode"}},[t._v("leetcode")]),t._v("刷题中，老能见到这种数据结构，所以准备好好研究一下。")]),t._v(" "),n("h2",{attrs:{id:"什么是数组"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#什么是数组"}},[t._v("#")]),t._v(" 什么是数组")]),t._v(" "),n("p",[t._v("如果你简历说你熟悉"),n("code",[t._v("链表")]),t._v("，面试官一般都会简单问一下，"),n("code",[t._v("数组")]),t._v("和"),n("code",[t._v("链表")]),t._v("的区别。")]),t._v(" "),n("p",[t._v("在其它编程语言中，"),n("code",[t._v("数组")]),t._v("是一种在内存中用一组"),n("strong",[t._v("连续的内存")]),t._v("空间来存储一组具有相同类型的数据。注意"),n("strong",[t._v("连续")]),t._v("这俩字。")]),t._v(" "),n("p",[t._v("因为"),n("code",[t._v("数组")]),t._v("这种结构在内存中是连续的，所有CPU执行程序时，去内存中读取数据会一次读取一块(块的大小我也不确定)，读取后会保存到CPU的缓存中，下次需要访问内存数据的时候就会先从CPU缓存中找，这和我们平时说的缓存原理一样。")]),t._v(" "),n("p",[t._v("我们都知道内存的读取速度要比硬盘快的多，同样CPU缓存要比内存快的多，因为"),n("code",[t._v("数组")]),t._v("在内存中连续的原因，可以让CPU很好的缓存，所以结论来了。")]),t._v(" "),n("p",[n("strong",[t._v("数组可以通过下标实现O1复杂度的随机访问，说人话就是，数组访问一个元素非常快")])]),t._v(" "),n("p",[t._v("但是，但是，js中"),n("code",[t._v("数组")]),t._v("是用对象来实现的，所以下面方法无法准确判断js数据类型：")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" arr "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" arr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// object")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),n("p",[t._v("因为js中"),n("code",[t._v("数组")]),t._v("被实现成了对象，所随机访问的效率会比其它语言(c或者java)效率低。")]),t._v(" "),n("h2",{attrs:{id:"什么是链表"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#什么是链表"}},[t._v("#")]),t._v(" 什么是链表")]),t._v(" "),n("p",[t._v("上面说了"),n("code",[t._v("数组")]),t._v("，感觉数组用也简单，查找也快，挺方便的。但是数组"),n("code",[t._v("插入")]),t._v("或者"),n("code",[t._v("删除")]),t._v("某个数据的时候，效率就低了，原因是它被设计成必须是"),n("strong",[t._v("连续")]),t._v("的内存空间来存储，如果你要删除一个节点，为了不让这个位置空出来，这个位置后面的都需要往前移动一位，添加同理。")]),t._v(" "),n("p",[n("code",[t._v("数组")]),t._v("这种连续的特征可以说是成也萧何败萧何，有得必有舍。我们要做的就是好好利用它的优势，想办法规避它的劣势。js的做法就是取中间，让你访问不会很快，插入，删除也不会很慢，所以js中的数组用对象来实现。")]),t._v(" "),n("p",[t._v("除了js外，其它如c和java语言，就出现了另外一种数据结构，"),n("code",[t._v("链表")]),t._v("它和数组正好相反，它是插入、删除快，新增慢。而且从名字也能看得出来，像一条链一样，中间用一条线连接起来。")]),t._v(" "),n("p",[t._v("举个例子：比如我想找xx市市长办个事，但是我认识市长，市长不认识我，这咋整。此时我发现我七大姑八大姨中有人在政府工作，可能会有点关系，我就问这个亲戚，你有没有认识的人，能和市长搭上关系的，亲戚一想，唉，我xx同学是市长亲戚，于是亲戚去帮你问他同学，他同学在问问市长，安排有时间见一下。")]),t._v(" "),n("p",[t._v("上面这个例子是不可以看成一条线：我 -> 亲戚 -> 亲戚同学 -> 市长。我通过这条线就联系上了市长。"),n("br"),t._v("\n链表就是上面这种关系，链表在内存中不连续，每个节点通过存储下一个节点地址来形成一条完整的链，图如下：\n"),n("img",{attrs:{src:a(492),alt:"单链表"}}),t._v("\n这种结构相当于在将内存中多个零散的点用一条线来连接起来，好处是插入删除只需要"),n("code",[t._v("O1")]),t._v("的复杂度，看下图：\n"),n("img",{attrs:{src:a(493),alt:"单链表插入"}}),t._v("\n缺点也很明显，因为是一条链的关系，访问变慢了，只能从头一个个找，查找复杂度达到了On。")]),t._v(" "),n("h2",{attrs:{id:"链表实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#链表实现"}},[t._v("#")]),t._v(" 链表实现")]),t._v(" "),n("p",[t._v("BB那么多，来点实操。先来看看在js中如何用对象来描述一个链表。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 链表中，val存贮当前节点值，next存贮下一节点地址，在js中1->2->3->4这条链就可以用如下结构表示")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" LinkedList "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  val"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  next"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    val"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    next"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      val"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      next"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        val"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"4"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        next"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 就像俄罗斯套娃，一层一层的嵌套就行")]),t._v("\n")])])]),n("p",[t._v("至于链表的一些操作，可以看我leetcode模块的一些题目，列举如下："),n("br")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"../../leetcode/docs/21.%E5%90%88%E5%B9%B6%E4%B8%A4%E4%B8%AA%E6%9C%89%E5%BA%8F%E9%93%BE%E8%A1%A8"}},[t._v("21.合并两个有序链表")])]),t._v(" "),n("li",[n("a",{attrs:{href:"../../leetcode/docs/83.%E5%88%A0%E9%99%A4%E6%8E%92%E5%BA%8F%E9%93%BE%E8%A1%A8%E4%B8%AD%E7%9A%84%E9%87%8D%E5%A4%8D%E5%85%83%E7%B4%A0"}},[t._v("83.删除排序链表中的重复元素")])]),t._v(" "),n("li",[n("a",{attrs:{href:"../../leetcode/docs/2.%E4%B8%A4%E6%95%B0%E7%9B%B8%E5%8A%A0"}},[t._v("2.两数相加")])]),t._v(" "),n("li",[n("a",{attrs:{href:"../../leetcode/docs/82.%E5%88%A0%E9%99%A4%E6%8E%92%E5%BA%8F%E9%93%BE%E8%A1%A8%E4%B8%AD%E7%9A%84%E9%87%8D%E5%A4%8D%E5%85%83%E7%B4%A0II"}},[t._v("82.删除排序链表中的重复元素II")])])]),t._v(" "),n("h2",{attrs:{id:"总结说明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结说明"}},[t._v("#")]),t._v(" 总结说明")]),t._v(" "),n("p",[t._v("总结：链表在前端用的地方很少，我网上搜了一圈大致用途是，遇见那种较长的"),n("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E7%BA%BF%E6%80%A7%E8%A1%A8",target:"_blank",rel:"noopener noreferrer"}},[t._v("线性表"),n("OutboundLink")],1),t._v("，并且有频繁的插入，删除操作时，可以用链表来提高性能。但是绝大部分情况下还是用数组方便，并且chrome的V8有对数组进行优化，性能很高。")]),t._v(" "),n("p",[t._v("前端链表这种结构，我目前想到的就是刷题的时候用用，并且了解了解它的原理，将来学习其它语言的时候更好上手。")]),t._v(" "),n("p",[t._v("说明：上面链表的两张图来自极客时间课程\n"),n("a",{attrs:{href:"https://time.geekbang.org/column/intro/100017301",target:"_blank",rel:"noopener noreferrer"}},[t._v("算法与数据结构之美"),n("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);