(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{295:function(t,n,e){var content=e(298);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(14).default)("790a7675",content,!0,{sourceMap:!1})},296:function(t,n,e){var content=e(303);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(14).default)("97e7ab7c",content,!0,{sourceMap:!1})},297:function(t,n,e){"use strict";var o=e(295);e.n(o).a},298:function(t,n,e){(n=e(13)(!1)).push([t.i,".header[data-v-174a4490]{display:flex;align-items:flex-end;flex-wrap:wrap}.pageTitle[data-v-174a4490]{font-size:30px;font-size:1.875rem;color:#4d4d4d;display:flex;align-items:center;line-height:1.35;font-weight:normal;margin:0 .5em 0 0}@media screen and (max-width: 600px){.pageTitle[data-v-174a4490]{font-size:20px;font-size:1.25rem}}",""]),t.exports=n},299:function(t,n,e){var content=e(309);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(14).default)("e882ae98",content,!0,{sourceMap:!1})},300:function(t,n,e){"use strict";var o=e(0).a.extend({props:{icon:{type:String}}}),r=(e(297),e(5)),l=e(40),c=e.n(l),_=e(287),component=Object(r.a)(o,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"header"},[n("h2",{staticClass:"pageTitle"},[this.icon?n("v-icon",{staticClass:"mr-2",attrs:{size:"40"}},[this._v("\n      "+this._s(this.icon)+"\n    ")]):this._e(),this._v(" "),this._t("default")],2)])}),[],!1,null,"174a4490",null);n.a=component.exports;c()(component,{VIcon:_.a})},302:function(t,n,e){"use strict";var o=e(296);e.n(o).a},303:function(t,n,e){(n=e(13)(!1)).push([t.i,".ExternalLink{text-decoration:none}.ExternalLink .ExternalLinkIcon{vertical-align:text-bottom}",""]),t.exports=n},304:function(t,n,e){"use strict";e(107);var o=e(0).a.extend({props:{url:{type:String,default:""},iconSize:{type:Number,default:15}}}),r=(e(302),e(5)),l=e(40),c=e.n(l),_=e(287),component=Object(r.a)(o,(function(){var t=this.$createElement,n=this._self._c||t;return n("a",{staticClass:"ExternalLink",attrs:{href:this.url,target:"_blank",rel:"noopener noreferrer"}},[this._t("default"),this._v(" "),n("v-icon",{staticClass:"ExternalLinkIcon",attrs:{size:this.iconSize,"aria-label":this.$t("別タブで開く"),role:"img","aria-hidden":!1}},[this._v("\n    mdi-open-in-new\n  ")])],2)}),[],!1,null,null,null);n.a=component.exports;c()(component,{VIcon:_.a})},308:function(t,n,e){"use strict";var o=e(299);e.n(o).a},309:function(t,n,e){(n=e(13)(!1)).push([t.i,".StaticCard{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9 !important;border-radius:4px;padding:20px;margin-bottom:20px;overflow-wrap:break-word}.StaticCard>*:not(:first-child){margin-top:1.2em}.StaticCard h3{font-size:24px;font-size:1.5rem;color:#4d4d4d;font-weight:bold}.StaticCard h4{font-size:19px;font-size:1.1875rem;color:#4d4d4d;font-weight:bold}.StaticCard h5{font-size:16px;font-size:1rem;color:#4d4d4d;font-weight:bold}.StaticCard p{margin-bottom:0}.StaticCard sup{vertical-align:top}.StaticCard ul,.StaticCard ol{padding-left:24px}.StaticCard dt:not(:first-child){margin-top:.6em}.StaticCard dd{margin-top:.6em;margin-left:2em}@media screen and (max-width: 768px){.StaticCard dd{margin-left:4.1666666667vw}}.StaticCard dd>*:not(:first-child){margin-top:.6em}.StaticCard img{max-width:100%}.StaticCard figcaption{margin-top:.6em;color:#4d4d4d}.StaticCard strong,.StaticCard em{border-bottom:2px solid #7f0000}.StaticCard em{font-style:normal}.StaticCard a{font-size:14px;font-size:0.875rem;color:#006ca8 !important;text-decoration:none;font-size:inherit}.StaticCard a:hover{text-decoration:underline}.StaticCard a .ExternalLinkIcon{display:inline-block;color:#006ca8;text-decoration:none;vertical-align:inherit}.StaticCard-Note{display:flex}.StaticCard-Note>span{display:block}.StaticCard-Note>span:first-child{margin-right:.5em}",""]),t.exports=n},311:function(t,n,e){"use strict";var o=e(0).a.extend(),r=(e(308),e(5)),component=Object(r.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"StaticCard"},[this._t("default")],2)}),[],!1,null,null,null);n.a=component.exports},489:function(t,n,e){"use strict";e.r(n);var o=e(0),r=e(300),l=e(311),c=e(304),_=o.a.extend({components:{PageHeader:r.a,StaticCard:l.a,ExternalLink:c.a},head:function(){return{title:this.$t("当サイトについて")}}}),d=e(5),component=Object(d.a)(_,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"About"},[e("page-header",{staticClass:"mb-3"},[t._v("\n    "+t._s(t.$t("当サイトについて"))+"\n  ")]),t._v(" "),e("static-card",[t._v("\n    "+t._s(t.$t("当サイトは新型コロナウイルス感染症 (COVID-19) に関する最新情報を提供するために、熊本県有志が開設したものです。熊本県から発表された情報を用いていますが、本サイトの運営に関しては熊本県は一切関係しておりません。"))),e("br"),t._v(" "),e("br"),t._v(" "),e("a",{attrs:{href:"https://stopcovid19.metro.tokyo.lg.jp/",target:"_blank",rel:"noopener"}},[t._v("\n      "+t._s(t.$t("東京都公式新型コロナウイルス対策サイトの仕組みを利用しています。"))+"\n    ")]),t._v(" "),e("br"),t._v(" "),e("br"),t._v("\n    "+t._s(t.$t("熊本県による公式情報と客観的な数値をわかりやすく伝えることで、熊本県にお住まいの方や、熊本県内に拠点を持つ企業の方、熊本県を訪れる方が、現状を把握して適切な対策を取れるようにすることを目的としています。"))),e("br"),t._v(" "),e("br"),t._v("\n    "+t._s(t.$t("製作者:"))+"\n    "),e("a",{attrs:{href:"https://www.facebook.com/makoragi",target:"_blank",rel:"noopener"}},[t._v("\n      "+t._s(t.$t("Makoto Sakuragi"))+"\n    ")]),t._v("\n    "+t._s(t.$t(" / "))+"\n    "),e("a",{attrs:{href:"https://www.facebook.com/groups/CodeForKumamoto/",target:"_blank",rel:"noopener"}},[t._v("\n      "+t._s(t.$t("Code for Kumamoto"))+"\n    ")])]),t._v(" "),e("static-card",[e("h3",[t._v(t._s(t.$t("公開期限と更新について")))]),t._v("\n    "+t._s(t.$t("感染拡大状況により予告なく当サイトを停止することもあります。随時、運営（Code for Kumamoto）メンバーで継続か停止を議論して進めます。"))),e("br"),t._v("\n    "+t._s(t.$t("またベストエフォートで対応しているため、更新が遅れる場合がありますので、ご了承ください。"))+"\n  ")]),t._v(" "),e("static-card",[e("h3",[t._v(t._s(t.$t("ブラウザ環境について")))]),t._v(" "),e("p",[t._v("\n      "+t._s(t.$t("当サイトは以下の環境でご覧いただくことを推奨いたします。"))+"\n    ")]),t._v(" "),e("ul",[e("li",[t._v(t._s(t.$t("Microsoft Edge 最新版")))]),t._v(" "),e("li",[t._v(t._s(t.$t("Mozilla Firefox 最新版")))]),t._v(" "),e("li",[t._v("\n        "+t._s(t.$t("Google Chrome 最新版（Windows 10以上, Android 8.0以上）"))+"\n      ")]),t._v(" "),e("li",[t._v(t._s(t.$t("Safari 最新版（macOS, iOS）")))]),t._v(" "),e("li",[t._v(t._s(t.$t("Opera Software ASA Opera 最新版")))])]),t._v(" "),e("p",{staticClass:"StaticCard-Note"},[e("span",[t._v(t._s(t.$t("※")))]),t._v(" "),e("span",[t._v("\n        "+t._s(t.$t("※ 推奨環境以外で利用された場合や、推奨環境下でもご利用のブラウザの設定等によっては、正しく表示されない場合がありますのでご了承ください。"))+"\n      ")])])]),t._v(" "),e("static-card",[e("h3",[t._v(t._s(t.$t("当サイトへのリンクについて")))]),t._v(" "),e("p",[t._v(t._s(t.$t("当サイトへのリンクは自由です。")))])]),t._v(" "),e("static-card",[e("h3",[t._v(t._s(t.$t("JavaScriptについて")))]),t._v(" "),e("p",[t._v("\n      "+t._s(t.$t("当サイトではJavaScriptを使用しております。"))),e("br"),t._v("\n      "+t._s(t.$t("JavaScriptを無効にして使用された場合、各ページが正常に動作しない、または、表示されない場合がございます。"))),e("br"),t._v("\n      "+t._s(t.$t("当サイトをご利用の際には、JavaScriptを有効にして頂きますようお願いいたします。"))+"\n    ")])]),t._v(" "),e("static-card",[e("h3",[t._v(t._s(t.$t("クッキー (Cookie) について")))]),t._v(" "),e("p",[t._v("\n      "+t._s(t.$t("当サイトの一部ではクッキーを使用しています。"))),e("br"),t._v("\n      "+t._s(t.$t("クッキーとは、Webコンテンツからの要求で利用者の手元の端末に一時的に保存されるデータのことで、当サイトでは利用状況の把握のためにクッキーを使用する場合があります。"))),e("br")]),t._v(" "),e("p",[t._v("\n      "+t._s(t.$t("ブラウザに関する情報の収集を希望しない場合は、インターネット閲覧ソフト（ブラウザ）をご自身で設定することにより、クッキーの機能が働かないようにすることも可能です。"))+"\n    ")]),t._v(" "),e("p",[t._v("\n      "+t._s(t.$t("ただし、クッキーを受け入れない設定をされている場合は、当サイトの機能が正常に動作しない場合がございます。"))+"\n    ")])]),t._v(" "),e("static-card",[e("h3",[t._v(t._s(t.$t("Google Analyticsの利用について")))]),t._v(" "),e("p",[t._v("\n      "+t._s(t.$t("当サイトでは、サービス向上やサイトの改善のためにGoogle LLCの提供するアクセス分析のツールであるGoogle Analyticsを利用した計測を行っております。"))+"\n    ")]),t._v(" "),e("p",[t._v("\n      "+t._s(t.$t("Google Analyticsでは、当サイトが発行するクッキー (Cookie) 等を利用して、Webサイトの利用データ（アクセス状況、トラフィック、閲覧環境、IPアドレスなど）を収集しております。クッキーの利用に関してはGoogleのプライバシーポリシーと規約に基づいております。"))+"\n    ")]),t._v(" "),e("p",[t._v("\n      "+t._s(t.$t("取得したデータはWebサイト利用状況を分析しサービスの改善につなげるため、またはサイト運営者へのレポートを作成するため、その他のサービスの提供に関わる目的に限り、これを使用します。（サイト運営者へのレポートでは、クッキーはブラウザ単位で本サイトのユーザー数をカウントするため、IPアドレスはGoogle Analyticsの分析機能を通じてアクセス元の地域分布（国、州・都道府県、都市）を把握するために利用されています。）"))+"\n    ")]),t._v(" "),e("p",[t._v("\n      "+t._s(t.$t("Google Analyticsの利用規約及びプライバシーポリシーに関する説明については、Google Analyticsのサイトをご覧ください。"))+"\n    ")]),t._v(" "),e("ul",[e("li",[e("external-link",{attrs:{url:t.$t("https://marketingplatform.google.com/about/analytics/terms/jp/"),"icon-size":16}},[t._v("\n          "+t._s(t.$t("Google Analytics利用規約"))+"\n        ")])],1),t._v(" "),e("li",[e("external-link",{attrs:{url:t.$t("https://policies.google.com/privacy?hl=ja"),"icon-size":16}},[t._v("\n          "+t._s(t.$t("Googleのプライバシーポリシー"))+"\n        ")])],1),t._v(" "),e("li",[e("external-link",{attrs:{url:t.$t("https://support.google.com/analytics/answer/6004245?hl=ja"),"icon-size":16}},[t._v("\n          "+t._s(t.$t("Google Analyticsに関する詳細情報"))+"\n        ")])],1)]),t._v(" "),e("i18n",{attrs:{tag:"p",path:"Google Analyticsによる情報送信を回避する場合は、Google がサポートする{addon}をご利用ください。"},scopedSlots:t._u([{key:"addon",fn:function(){return[e("external-link",{attrs:{url:t.$t("https://tools.google.com/dlpage/gaoptout?hl=ja"),"icon-size":16}},[t._v("\n          "+t._s(t.$t("測定を無効にするブラウザ アドオン"))+"\n        ")])]},proxy:!0}])})],1),t._v(" "),e("static-card",[e("h3",[t._v(t._s(t.$t("免責事項")))]),t._v(" "),e("p",[t._v("\n      "+t._s(t.$t("当サイトに掲載されている情報の正確性については万全を期していますが、熊本県およびサイト制作者は利用者が当サイトの情報を用いて行う一切の行為について責任を負うものではありません。"))+"\n    ")]),t._v(" "),e("p",[t._v("\n      "+t._s(t.$t("また、利用者が当サイトを利用したことにより発生した利用者の損害及び利用者が第三者に与えた損害に対して、責任を負うものではありません。"))+"\n    ")]),t._v(" "),e("p",[t._v("\n      "+t._s(t.$t("当サイトに掲載されている情報は、予告なしに変更又は削除することがあります。"))+"\n    ")])]),t._v(" "),e("static-card",[e("h3",[t._v(t._s(t.$t("ソースコードについて")))]),t._v(" "),e("p",[t._v("\n      "+t._s(t.$t("当サイトのソースコードはMITライセンスで公開されており、誰でも自由に利用することができます。"))+"\n      "),e("i18n",{attrs:{path:"詳しくは、{githubRepo}をご確認ください。"},scopedSlots:t._u([{key:"githubRepo",fn:function(){return[e("external-link",{attrs:{url:"https://github.com/codeforkumamoto/covid19","icon-size":16}},[t._v("\n            "+t._s(t.$t("GitHub リポジトリ"))+"\n          ")])]},proxy:!0}])})],1)])],1)}),[],!1,null,null,null);n.default=component.exports}}]);