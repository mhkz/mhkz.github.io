(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{569:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("题目地址: "),a("a",{attrs:{href:"https://leetcode-cn.com/problems/add-two-numbers/",target:"_blank",rel:"noopener noreferrer"}},[t._v("2.两数相加"),a("OutboundLink")],1),t._v(" "),a("br")]),t._v(" "),a("p",[t._v("给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。")]),t._v(" "),a("p",[t._v("如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。")]),t._v(" "),a("p",[t._v("您可以假设除了数字 0 之外，这两个数都不会以 0 开头。")]),t._v(" "),a("p",[t._v("示例：")]),t._v(" "),a("div",{staticClass:"language-md extra-class"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[t._v("输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)\n输出：7 -> 0 -> 8\n原因：342 + 465 = 807\n")])])]),a("h2",{attrs:{id:"题目分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目分析"}},[t._v("#")]),t._v(" 题目分析")]),t._v(" "),a("p",[t._v("这道题涉及到链表的知识，是我做的第一道链表的题目，链表的知识准备有空专门补一篇博客说明，这里可以先看一下下面这篇博客"),a("br"),t._v(" "),a("a",{attrs:{href:"https://www.jianshu.com/p/f254ec665e57",target:"_blank",rel:"noopener noreferrer"}},[t._v("JS中的算法与数据结构——链表(Linked-list)"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("回到题目，先不考虑链表这个东西，就考虑加法法则，来看示例中的代码，算术题没问题，谁都看得懂，但是如何用代码来实现这个过程是难点。我也是看高票的解答，一点点理解。说明一下我的理解。")]),t._v(" "),a("ul",[a("li",[t._v("1、这题会默认给你个ListNode构造函数，让你初始化链表用。具体写在注释中。")]),t._v(" "),a("li",[t._v("2、定义一个哑结点(有点类似之前说过的指针，这个哑结点是一直在移动的)")]),t._v(" "),a("li",[t._v("3、取l1，l2两当前节点的值相加求和")]),t._v(" "),a("li",[t._v("4、"),a("code",[t._v("4+6=10")]),t._v("遇见这种和大于等于10的，当前节点val=sum % 10 = 0，将进的一位存放到add变量中，下次求和时加上")]),t._v(" "),a("li",[t._v("5、返回除头节点外的完整链表，既head.next。")])]),t._v(" "),a("p",[t._v("如果上面步骤不太懂就直接看解答，我加一些注释进去。")]),t._v(" "),a("h2",{attrs:{id:"解题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解题"}},[t._v("#")]),t._v(" 解题")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * Definition for singly-linked list.\n * function ListNode(val) {\n *     val代表当前节点的内容\n *     this.val = val;\n *     next储存下一个节点所在的位置\n *     this.next = null;\n * }\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @param {ListNode} l1\n * @param {ListNode} l2\n * @return {ListNode}\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("addTwoNumbers")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("l1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" l2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 以示例代码为例，此时head = { val: 'head', next: null }")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" head "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"head"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 哑结点cur = { val: 'head', next: null }")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" cur "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 存放进位")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" add "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 两节点相加的和")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注意这里要用||，l1=123,l2=1234,l2的4也要算进去")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("l1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" l2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 节点求和，如果上次求和有进一，就在加上进位的值")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 第一次循环：2 + 5 + 0 = 7")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 第二次循环：4 + 6 + 0 = 10")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 第三次循环：3 + 4 + 1 = 8；")]),t._v("\n    sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("l1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" l1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("l2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" l2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" add"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 新建一个节点，cur.next指向这个节点，val=sum % 10，对应上面第四条说明")]),t._v("\n    cur"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 更新哑结点")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**第一次循环：cur = ListNode { val: 7, next: null }\n     * head = ListNode { val: 'head', next: ListNode { val: 7, next: null } }\n     */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 第一次循环：cur = ListNode { val: 7, next: null }")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// head = ListNode { val: 'head', next: ListNode { val: 7, next: null } }")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ===========================================")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 第二次循环：cur = ListNode { val: 0, next: null }")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// head = ListNode {")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   val: 'head',")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   next: ListNode { val: 7, next: ListNode { val: 0, next: null } }")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// }")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ===========================================")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 第三次循环：cur = ListNode { val: 7, next: null }")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ListNode {")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   val: 7,")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   next: ListNode { val: 0, next: ListNode { val: 8, next: null } }")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// }")]),t._v("\n    cur "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cur"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果求和大于等于10，进位加一")]),t._v("\n    add "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// l1, l2链表移动")]),t._v("\n    l1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("l1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" l1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    l2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("l2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" l2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里是为了处理，如果l1,l2两个最后一个节点相加大于10的问题")]),t._v("\n  add "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cur"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("add"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// head = ListNode {")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   val: 7,")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   next: ListNode { val: 0, next: ListNode { val: 8, next: null } }")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// }")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" l1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  val"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  next"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    val"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    next"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      val"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      next"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" l2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  val"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  next"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    val"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    next"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      val"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      next"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addTwoNumbers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("l1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" l2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 执行用时：136 ms, 在所有 JavaScript 提交中击败了57.48%的用户")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 内存消耗：41.6 MB, 在所有 JavaScript 提交中击败了13.23%的用户")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 时间复杂度：On，遍历列表需要On的时间复杂度")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 空间复杂度：On，新链表存放需要On的空间")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);