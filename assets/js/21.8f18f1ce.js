(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{499:function(a,t,s){"use strict";s.r(t);var e=s(4),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"题目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[a._v("#")]),a._v(" 题目")]),a._v(" "),s("p",[a._v("编写一个 SQL 查询，获取 Employee 表中第二高的薪水（Salary） 。")]),a._v(" "),s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[a._v("+----+--------+\n| Id | Salary |\n+----+--------+\n| 1  | 100    |\n| 2  | 200    |\n| 3  | 300    |\n+----+--------+\n")])])]),s("p",[a._v("例如上述 Employee 表，SQL查询应该返回 200 作为第二高的薪水。如果不存在第二高的薪水，那么查询应返回 null。")]),a._v(" "),s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[a._v("+---------------------+\n| SecondHighestSalary |\n+---------------------+\n| 200                 |\n+---------------------+\n")])])]),s("h2",{attrs:{id:"分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分析"}},[a._v("#")]),a._v(" 分析")]),a._v(" "),s("h2",{attrs:{id:"题解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#题解"}},[a._v("#")]),a._v(" 题解")]),a._v(" "),s("div",{staticClass:"language-SQL extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SELECT")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("MAX")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("Salary"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("AS")]),a._v(" SecondHighestSalary "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("FROM")]),a._v(" Employee "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("WHERE")]),a._v(" Salary "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SELECT")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("MAX")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("Salary"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("FROM")]),a._v(" Employee"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);