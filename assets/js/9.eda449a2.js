(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{366:function(t,s,a){"use strict";a.r(s);var e=a(42),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"pre-requisitos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisitos"}},[t._v("#")]),t._v(" Pré-requisitos")]),t._v(" "),a("ul",[a("li",[t._v("Todas as requisições precisam ter "),a("code",[t._v("Content-Type")]),t._v(" com "),a("code",[t._v("application/json")]),t._v(".")]),t._v(" "),a("li",[t._v("A API é acesívem em https://nextcloud.local/index.php/apps/libresign/api/v1.0")]),t._v(" "),a("li",[t._v("Todos os parâmetros são necesários exceto se for especificado que não são.")])]),t._v(" "),a("h1",{attrs:{id:"cabecalhos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cabecalhos"}},[t._v("#")]),t._v(" Cabeçalhos")]),t._v(" "),a("p",[t._v("Leia https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization")]),t._v(" "),a("p",[t._v("Exemplo:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -X POST "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  http://localhost/index.php/apps/libresign/api/0.1/webhook/register "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -H "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Accept: application/json'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -H "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Authorization: Basic YWRtaW46YWRtaW4='")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -H "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type: application/json'")]),t._v("\n  -d "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{\n\t"file": {\n\t\t"url": "https://test.coop/test.pdf"\n\t},\n\t"name": "test",\n\t"users": [\n\t\t{\n\t\t\t"display_name": "Jhon Doe",\n\t\t\t"email": "jhondoe@test.coop"\n\t\t}\n\t]\n}\'')]),t._v("\n")])])]),a("h1",{attrs:{id:"endpoints"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#endpoints"}},[t._v("#")]),t._v(" Endpoints")]),t._v(" "),a("h2",{attrs:{id:"webhook"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webhook"}},[t._v("#")]),t._v(" Webhook")]),t._v(" "),a("h3",{attrs:{id:"webhook-register"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webhook-register"}},[t._v("#")]),t._v(" webhook/register")]),t._v(" "),a("h4",{attrs:{id:"corpo-da-requisicao"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#corpo-da-requisicao"}},[t._v("#")]),t._v(" Corpo da requisição")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Parâmetro")]),t._v(" "),a("th",[t._v("Tipo")]),t._v(" "),a("th",[t._v("Descrição")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("file")]),t._v(" "),a("td",[t._v("File")]),t._v(" "),a("td",[t._v("Arquivo para assinar")])]),t._v(" "),a("tr",[a("td",[t._v("users")]),t._v(" "),a("td",[t._v("array of User")]),t._v(" "),a("td",[t._v("Lista de pessoas que irão assinar")])]),t._v(" "),a("tr",[a("td",[t._v("name")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[a("strong",[t._v("optional")]),t._v(" Nome do arquivo a ser assinado")])]),t._v(" "),a("tr",[a("td",[t._v("description")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[a("strong",[t._v("optional")]),t._v(" Descrição para quem irá assinar")])]),t._v(" "),a("tr",[a("td",[t._v("callback")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("URL de callback chamada quando todas as pessoas assinarem o arquivo")])])])]),t._v(" "),a("p",[t._v("Parâmetros do objeto File")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Parâmetro")]),t._v(" "),a("th",[t._v("Tipo")]),t._v(" "),a("th",[t._v("Descrição")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("url")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[a("strong",[t._v("optional")]),t._v(" URL pública do arquivo")])]),t._v(" "),a("tr",[a("td",[t._v("base64")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[a("strong",[t._v("optional")]),t._v(" Arquivo em base64")])])])]),t._v(" "),a("p",[t._v("Parâmetros do objeto User")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Parâmetro")]),t._v(" "),a("th",[t._v("Tipo")]),t._v(" "),a("th",[t._v("Descrição")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("email")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("Email do usuário")])]),t._v(" "),a("tr",[a("td",[t._v("display_name")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[a("strong",[t._v("optional")]),t._v(" Nome de exibição do usuário")])])])]),t._v(" "),a("h4",{attrs:{id:"respostas"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#respostas"}},[t._v("#")]),t._v(" Respostas")]),t._v(" "),a("h5",{attrs:{id:"_200-sucesso"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_200-sucesso"}},[t._v("#")]),t._v(" 200 Sucesso")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Success"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h5",{attrs:{id:"_4xx-forbidden"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4xx-forbidden"}},[t._v("#")]),t._v(" 4xx Forbidden")]),t._v(" "),a("p",[t._v("Respostas "),a("code",[t._v("4xx")]),t._v(" podem ser retornadas sempre que houverem erros ao procesar a requisição.")]),t._v(" "),a("p",[t._v("Exemplo:")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Insufficient permissions to use API"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);