(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{363:function(t,s,n){"use strict";n.r(s);var a=n(7),e=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"python-mysql"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#python-mysql"}},[t._v("#")]),t._v(" Python&Mysql")]),t._v(" "),s("h2",{attrs:{id:"简单使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简单使用"}},[t._v("#")]),t._v(" 简单使用")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" mysql"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("connector\n\nconfig "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'host'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'localhost'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# default localhost")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'user'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'root'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'password'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'lv123'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 'port': 3306,  # 默认即为3306")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'database'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'test'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#无默认数据库")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'charset'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'utf8'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 默认即为utf8")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'buffered'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Unread result found")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"auth_plugin"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mysql_native_password'")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# mysql8错误")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      conn "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mysql"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("connector"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("connect"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("except")]),t._v(" mysql"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("connector"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Error "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'connect fail %s'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ncursor "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" conn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cursor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# show tables")]),t._v("\ncursor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("execute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'SHOW TABLES'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 操作浮标拿到数据")]),t._v("\nres "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cursor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fetchall"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 执行插入语句")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# insert into vendors (vend_name, vend_address) values('test123', 'testad')")]),t._v("\ncursor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("execute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'insert into vendors (vend_name, vend_address) values'")]),t._v("\n               "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("' (%s, %s)'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'test123'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'testad'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cursor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rowcount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 提交事务")]),t._v("\nconn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("commit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 关闭浮标")]),t._v("\ncursor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("close"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 开启查询")]),t._v("\ncursor "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" conn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cursor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ncursor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("execute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'select * from vendors where vend_name = %s'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'test123'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nres "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cursor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fetchall"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("ol",[s("li",[t._v("理解浮标的概念")]),t._v(" "),s("li",[t._v("中间遇到了"),s("code",[t._v("Unread result found")]),t._v("和"),s("code",[t._v("mysql.connector.errors.InternalError: Unread result found")]),t._v(","),s("br"),t._v("\n参考"),s("a",{attrs:{href:"https://blog.csdn.net/weixin_42124607/article/details/112041788",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://blog.csdn.net/weixin_42124607/article/details/112041788"),s("OutboundLink")],1),t._v(" 和 "),s("a",{attrs:{href:"https://www.jianshu.com/p/f0192a0afe99",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.jianshu.com/p/f0192a0afe99"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("dict unpack "),s("code",[t._v("**dict")])]),t._v(" "),s("li",[t._v("元组一个元素记得加 "),s("code",[t._v(",")]),t._v("， "),s("code",[t._v("['test123',]")])])]),t._v(" "),s("h2",{attrs:{id:"sqlalchemy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sqlalchemy"}},[t._v("#")]),t._v(" SQLAlchemy")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sqlalchemy "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Column"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  create_engine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" INTEGER"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("String\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sqlalchemy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("orm "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" sessionmaker"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" declarative_base\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# from sqlalchemy.ext.declarative import declarative_base API 太旧，更新了")]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建对象的基类")]),t._v("\nBase "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" declarative_base"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 定义User对象")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vendor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Base"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 表名")]),t._v("\n    __tablename__ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vendors'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n    __table_args__ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'extend_existing'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 表结构")]),t._v("\n    vend_id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Column"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("INTEGER"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("primary_key"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" autoincrement"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    vend_name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Column"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    vend_address "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Column"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# \"auth_plugin\":'mysql_native_password'")]),t._v("\nengine "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" create_engine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mysql+mysqlconnector://root:lv123@localhost:3306/test?auth_plugin=mysql_native_password'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nDBSession "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sessionmaker"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bind"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("engine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建session 对象")]),t._v("\nsession "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" DBSession"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建新对象用来插入表")]),t._v("\nnew_vendor "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Vendor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vend_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vtest'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vend_address"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'addtest'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nsession"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("add"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("new_vendor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nsession"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("commit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nsession"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("close"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查询刚才新插入的new_vendor")]),t._v("\nsession "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" DBSession"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nres "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" session"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("query"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Vendor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("filter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Vendor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vend_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vtest'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("one"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'type:'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'res:'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vend_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vend_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vend_address"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nsession"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("close"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);