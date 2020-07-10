(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{534:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("复杂度分析主要从两个点出发，"),a("code",[t._v("时间复杂度")]),t._v("和"),a("code",[t._v("空间复杂度")]),t._v("，其中"),a("code",[t._v("时间复杂度分析")]),t._v("是最常用的，毕竟一个程序处理某个操作运时间长短是我们最关心的。")]),t._v(" "),a("h2",{attrs:{id:"为什么需要复杂度分析-这部分为网上摘抄的，懒得写了"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要复杂度分析-这部分为网上摘抄的，懒得写了"}},[t._v("#")]),t._v(" 为什么需要复杂度分析(这部分为网上摘抄的，懒得写了)")]),t._v(" "),a("p",[t._v("你可能会有些疑惑，我把代码跑一遍，通过统计、监控，就能得到算法执行的时间和占用的内存大小。为什么还要做时间、空间复杂度分析呢？这种分析方法能比我实实在在跑一遍得到的数据更准确吗？")]),t._v(" "),a("p",[t._v("首先，我可以肯定地说，你这种评估算法执行效率的方法是正确的。很多数据结构和算法书籍还给这种方法起了一个名字，叫事后统计法。但是，这种统计方法有非常大的局限性。")]),t._v(" "),a("h3",{attrs:{id:"_1-测试结果非常依赖测试环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-测试结果非常依赖测试环境"}},[t._v("#")]),t._v(" 1.测试结果非常依赖测试环境")]),t._v(" "),a("p",[t._v("测试环境中硬件的不同会对测试结果有很大的影响。比如，我们拿同样一段代码，分别用 Intel Core i9 处理器和 Intel Core i3 处理器来运行，不用说，i9 处理器要比 i3 处理器执行的速度快很多。还有，比如原本在这台机器上 a 代码执行的速度比 b 代码要快，等我们换到另一台机器上时，可能会有截然相反的结果。")]),t._v(" "),a("h3",{attrs:{id:"_2-测试结果受数据规模的影响很大"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-测试结果受数据规模的影响很大"}},[t._v("#")]),t._v(" 2. 测试结果受数据规模的影响很大")]),t._v(" "),a("p",[t._v("后面我们会讲排序算法，我们先拿它举个例子。对同一个排序算法，待排序数据的有序度不一样，排序的执行时间就会有很大的差别。极端情况下，如果数据已经是有序的，那排序算法不需要做任何操作，执行时间就会非常短。除此之外，如果测试数据规模太小，测试结果可能无法真实地反应算法的性能。比如，对于小规模的数据排序，插入排序可能反倒会比快速排序要快！")]),t._v(" "),a("p",[t._v("所以，"),a("strong",[t._v("我们需要一个不用具体的测试数据来测试，就可以粗略地估计算法的执行效率的方法")]),t._v("。这就是我们今天要讲的时间、空间复杂度分析方法。")]),t._v(" "),a("h2",{attrs:{id:"时间复杂度（大o）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#时间复杂度（大o）"}},[t._v("#")]),t._v(" 时间复杂度（大O）")]),t._v(" "),a("p",[t._v("先看下面一段代码：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("n")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1 * unit_time")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// n * unit_time")]),t._v("\n    sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" i                      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// n * unit_time")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" sum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1* unit_time")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("假设执行一行代码的时间为unit_time，那上面的代码就需要(1 + n + n + 1) * unit_time = (2 + 2n) * unit_time。")]),t._v(" "),a("p",[t._v("下面在看一个复杂一点的：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bubbleSort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("arr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// n * unit_time")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// n * n * unit_time")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("                           "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// n * n * unit_time")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" tem "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                                 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// n * n * unit_time")]),t._v("\n        arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                              "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// n * n * unit_time")]),t._v("\n        arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                                 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// n * n * unit_time")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" arr                                              "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1 * unit_time")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("分析上面代码总执行时间就需要（5n² + n + 1）* unit_time的时间，所以T(n) = (5n² + n + 1）* unit_time。"),a("br"),t._v("\n可以看出，n和T成正比，n的大小对整体的时间影响是非常大的，n越大，总耗时就越多。总结成一个公式就是：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("T(n) = O(f(n));\nf(n) = (5n² + n + 1）* unit_time\n")])])]),a("p",[t._v("当n非常大的时候，公式中的5，n，1对结果的影响就较小了，可以忽略掉。")]),t._v(" "),a("p",[t._v("总结：")]),t._v(" "),a("div",{staticClass:"language-md extra-class"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[t._v("1.当数据量小的时候，一些常量啊之类的都要考虑进去\n2.当数据量大的时候，只需要关注对整体时间影响最大的那一部分，大部分情况发生在循环的地方\n")])])]),a("p",[t._v("上面的排序算法，当n大的时候，时间复杂度就只需要考虑循环的那部分。时间复杂度就可以简化为")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("T(n) = O(n²)\n")])])]),a("h3",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("大部分情况下。影响复杂度的就是for， while循环等。嵌套越多的循环复杂度越高，而且所消耗的时间也是呈指数级增长。所以说正常的代码中，for循环嵌套最好不要超过两层，如果达到4层或者4层以上，这个算法消耗的时间就会非常糟糕，如果你的算法复杂度超过了O(n²)，你就要考虑考虑优化了。")])])}),[],!1,null,null,null);s.default=e.exports}}]);