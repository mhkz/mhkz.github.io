(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{494:function(a,s,t){"use strict";t.r(s);var e=t(4),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"题目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[a._v("#")]),a._v(" 题目")]),a._v(" "),t("p",[a._v("编写一个 SQL 查询，获取 Employee 表中第二高的薪水（Salary） 。")]),a._v(" "),t("div",{staticClass:"language-md extra-class"},[t("pre",{pre:!0,attrs:{class:"language-md"}},[t("code",[a._v("+----+--------+\n| Id | Salary |\n+----+--------+\n| 1  | 100    |\n| 2  | 200    |\n| 3  | 300    |\n+----+--------+\n")])])]),t("p",[a._v("例如上述 Employee 表，SQL查询应该返回 200 作为第二高的薪水。如果不存在第二高的薪水，那么查询应返回 null。")]),a._v(" "),t("div",{staticClass:"language-md extra-class"},[t("pre",{pre:!0,attrs:{class:"language-md"}},[t("code",[a._v("+---------------------+\n| SecondHighestSalary |\n+---------------------+\n| 200                 |\n+---------------------+\n")])])]),t("h2",{attrs:{id:"分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分析"}},[a._v("#")]),a._v(" 分析")]),a._v(" "),t("h2",{attrs:{id:"题解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#题解"}},[a._v("#")]),a._v(" 题解")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SELECT")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("MAX")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("Salary"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("AS")]),a._v(" SecondHighestSalary "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("FROM")]),a._v(" Employee "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("WHERE")]),a._v(" Salary "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SELECT")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("MAX")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("Salary"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("FROM")]),a._v(" Employee"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);