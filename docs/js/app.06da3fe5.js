(function (e) {
  function t(t) {
    for (var s, r, o = t[0], c = t[1], l = t[2], d = 0, _ = []; d < o.length; d++) r = o[d], Object.prototype.hasOwnProperty.call(i, r) && i[r] && _.push(i[r][0]), i[r] = 0;
    for (s in c) Object.prototype.hasOwnProperty.call(c, s) && (e[s] = c[s]);
    u && u(t);
    while (_.length) _.shift()();
    return n.push.apply(n, l || []), a()
  }

  function a() {
    for (var e, t = 0; t < n.length; t++) {
      for (var a = n[t], s = !0, o = 1; o < a.length; o++) {
        var c = a[o];
        0 !== i[c] && (s = !1)
      }
      s && (n.splice(t--, 1), e = r(r.s = a[0]))
    }
    return e
  }

  var s = {}, i = {app: 0}, n = [];

  function r(t) {
    if (s[t]) return s[t].exports;
    var a = s[t] = {i: t, l: !1, exports: {}};
    return e[t].call(a.exports, a, a.exports, r), a.l = !0, a.exports
  }

  r.m = e, r.c = s, r.d = function (e, t, a) {
    r.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: a})
  }, r.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
  }, r.t = function (e, t) {
    if (1 & t && (e = r(e)), 8 & t) return e;
    if (4 & t && "object" === typeof e && e && e.__esModule) return e;
    var a = Object.create(null);
    if (r.r(a), Object.defineProperty(a, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var s in e) r.d(a, s, function (t) {
      return e[t]
    }.bind(null, s));
    return a
  }, r.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"]
    } : function () {
      return e
    };
    return r.d(t, "a", t), t
  }, r.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, r.p = "/";
  var o = window["webpackJsonp"] = window["webpackJsonp"] || [], c = o.push.bind(o);
  o.push = t, o = o.slice();
  for (var l = 0; l < o.length; l++) t(o[l]);
  var u = c;
  n.push([0, "chunk-vendors"]), a()
})({
  0: function (e, t, a) {
    e.exports = a("56d7")
  }, "034f": function (e, t, a) {
    "use strict";
    a("85ec")
  }, "0352": function (e, t, a) {
    "use strict";
    a("6d52")
  }, "0ccb": function (e, t, a) {
  }, "31e0": function (e, t, a) {
  }, "56d7": function (e, t, a) {
    "use strict";
    a.r(t);
    a("e260"), a("e6cf"), a("cca6"), a("a79d");
    var s = a("2b0e"), i = function () {
        var e = this, t = e.$createElement, a = e._self._c || t;
        return a("div", {attrs: {id: "app"}}, [a("div", {staticClass: "navb"}, [e._m(0), e._m(1), a("div", {
          staticClass: "navbar__menu_mobile d-lg-none",
          on: {click: e.SetMenuIsVisible}
        }, [a("img", {
          attrs: {
            alt: "menu",
            src: "/amj/menu.png"
          }
        })])]), e.menuIsVisible ? a("div", {staticClass: "menu d-lg-none"}, [a("div", {staticClass: "menu__wrapper"}, [a("div", {
          staticClass: "menu__item",
          on: {click: e.SetMenuIsVisible}
        }, [a("a", {attrs: {href: "#home"}}, [e._v(" Home ")])]), a("div", {
          staticClass: "menu__item",
          on: {click: e.SetMenuIsVisible}
        }, [a("a", {attrs: {href: "#about"}}, [e._v(" About ")])]), a("div", {
          staticClass: "menu__item",
          on: {click: e.SetMenuIsVisible}
        }, [a("a", {attrs: {href: "#wedo"}}, [e._v(" What we do ")])]), a("div", {
          staticClass: "menu__item",
          on: {click: e.SetMenuIsVisible}
        }, [a("a", {attrs: {href: "#quote"}}, [e._v(" Get a quote ")])])])]) : e._e(), a("Slider", {attrs: {id: "home"}}), a("Splash", {attrs: {id: "about"}}), a("Advantages", {attrs: {id: "wedo"}}), a("Form", {attrs: {id: "quote"}}), a("Footer")], 1)
      }, n = [function () {
        var e = this, t = e.$createElement, a = e._self._c || t;
        return a("div", {staticClass: "navbar__logo"}, [a("img", {attrs: {src: "/amj/logo.png", alt: "logo"}})])
      }, function () {
        var e = this, t = e.$createElement, a = e._self._c || t;
        return a("div", {staticClass: "navbar__menu d-none d-lg-flex"}, [a("a", {
          staticClass: "navbar__menu_item",
          attrs: {href: "#home"}
        }, [e._v(" home ")]), a("a", {
          staticClass: "navbar__menu_item",
          attrs: {href: "#about"}
        }, [e._v(" about ")]), a("a", {
          staticClass: "navbar__menu_item",
          attrs: {href: "#wedo"}
        }, [e._v(" what we do ")]), a("a", {
          staticClass: "navbar__menu_item",
          attrs: {href: "#quote"}
        }, [e._v(" get a quote ")])])
      }], r = function () {
        var e = this, t = e.$createElement;
        e._self._c;
        return e._m(0)
      }, o = [function () {
        var e = this, t = e.$createElement, a = e._self._c || t;
        return a("div", {staticClass: "a"}, [a("div", {staticClass: "slider"}, [a("h2", {staticClass: "slider__text"}, [e._v("best screeding services to your home")])])])
      }], c = {name: "Slider", components: {}}, l = c, u = (a("c534"), a("2877")),
      d = Object(u["a"])(l, r, o, !1, null, "658fbbde", null), _ = d.exports, m = function () {
        var e = this, t = e.$createElement;
        e._self._c;
        return e._m(0)
      }, f = [function () {
        var e = this, t = e.$createElement, s = e._self._c || t;
        return s("div", {staticClass: "container-fluid splash"}, [s("div", {staticClass: "row"}, [s("div", {staticClass: "col-12 col-lg-6 splash__image"}, [s("img", {
          attrs: {
            src: a("ab0f"),
            alt: "about"
          }
        })]), s("div", {staticClass: "col-12 col-lg-6 splash__text"}, [s("div", {staticClass: "splash__text_header mb-3"}, [e._v(" We Provide Best Quality Services For Many Years ")]), s("div", {staticClass: "splash__text_text"}, [e._v(" AMJ Screeding team has expirience of more then 20 years in screeding. We have finished more then thousands projects that allows us to say we can deal with any type of complexity. We are using most up-to-date technologies and tools to provide best quality services for out clients. We listen to our customers to ensure that all requirements are met on time and within budget giving you complete customer satisfaction. ")])])])])
      }], v = {name: "Splash"}, p = v, h = (a("dd90"), Object(u["a"])(p, m, f, !1, null, "7df01d58", null)),
      b = h.exports, g = function () {
        var e = this, t = e.$createElement;
        e._self._c;
        return e._m(0)
      }, y = [function () {
        var e = this, t = e.$createElement, a = e._self._c || t;
        return a("div", {staticClass: "advantages"}, [a("div", {staticClass: "advantages__header row"}, [e._v(" our services ")]), a("div", {staticClass: "advantages__services row mt-5"}, [a("div", {staticClass: "advantages__services_item col-12 col-md-4"}, [a("div", {staticClass: "advantages__services_item_icon"}, [a("img", {
          attrs: {
            src: "/amj/icons/wind.png",
            alt: "wind"
          }
        })]), a("div", {staticClass: "advantages__services_item_header"}, [e._v(" Dry Screeding ")]), a("div", {staticClass: "advantages__services_item_text"}, [e._v(" Cost-effective: One of the main reasons for its popularity is because of its lower price point both in terms of material and labour. Applicable on non-flat surfaces: This can be useful in for screeds in wetrooms. ")])]), a("div", {staticClass: "advantages__services_item col-12 col-md-4"}, [a("div", {staticClass: "advantages__services_item_icon"}, [a("img", {
          attrs: {
            src: "/amj/icons/thermo.png",
            alt: "thermo"
          }
        })]), a("div", {staticClass: "advantages__services_item_header"}, [e._v(" Insulation ")]), a("div", {staticClass: "advantages__services_item_text"}, [e._v(" Insulation acts as a barrier to heat flow. It can make your home more comfortable by reducing the amount of heat escaping in winter and reducing the amount of heat entering in summer. By insulating you can significantly reduce your heating and cooling bills and help to reduce greenhouse gas emissions. ")])]), a("div", {staticClass: "advantages__services_item col-12 col-md-4"}, [a("div", {staticClass: "advantages__services_item_icon"}, [a("img", {
          attrs: {
            src: "/amj/icons/drop.png",
            alt: "drop"
          }
        })]), a("div", {staticClass: "advantages__services_item_header"}, [e._v(" Liquid Screeding ")]), a("div", {staticClass: "advantages__services_item_text"}, [e._v(" Quicker application: It is comparatively quicker to apply and handle because it can be poured in one go and not applied piece by piece like you would with a dry screed. Energy efficient: Liquid screeds are more conductive than traditional screeds. The effort required to spread and distribute the floor evenly is less thereby reducing the amount of energy needed. ")])])])])
      }], C = {name: "Advantages"}, w = C, x = (a("e632"), Object(u["a"])(w, g, y, !1, null, "7ffcfad7", null)),
      S = x.exports, j = function () {
        var e = this, t = e.$createElement, a = e._self._c || t;
        return a("div", {staticClass: "callmodal"}, [a("h3", {staticClass: "callmodal__header"}, [e._v(" Get a quote ")]), a("form", {
          staticClass: "callmodal__form",
          on: {
            submit: function (t) {
              return t.preventDefault(), e.sendEmail.apply(null, arguments)
            }
          }
        }, [a("label", {attrs: {for: "form__name"}}, [e._v("Your name")]), a("input", {
          staticClass: "callmodal__form_item",
          attrs: {id: "form__name", type: "text", placeholder: "Your name", name: "user_name"}
        }), a("label", {attrs: {for: "form__phone"}}, [e._v("Contact number")]), a("input", {
          staticClass: "callmodal__form_item",
          attrs: {id: "form__phone", type: "tel", placeholder: "phone number", name: "user_phone"}
        }), a("label", {attrs: {for: "form__email"}}, [e._v("Your email")]), a("input", {
          staticClass: "callmodal__form_item",
          attrs: {id: "form__email", type: "email", placeholder: "email", name: "user_email"}
        }), a("div", {on: {click: e.successed__close}}, [a("input", {
          staticClass: "callmodal__form_button",
          attrs: {type: "submit", value: "SUBMIT"}
        })])])])
      }, O = [], I = a("f8c5"), M = {
        name: "Form", methods: {
          successed__close: function () {
            var e = this;
            setTimeout((function () {
              e.$emit("show-success")
            }), 2e3)
          }, sendEmail: function (e) {
            I["a"].sendForm("service_27teysq", "template_7prynpv", e.target, "user_2oJCXZMyXTHf2NjVRB0pS")
          }
        }
      }, E = M, k = (a("0352"), Object(u["a"])(E, j, O, !1, null, "41af8370", null)), q = k.exports, $ = function () {
        var e = this, t = e.$createElement, a = e._self._c || t;
        return a("div", {staticClass: "footer__copyright"}, [e._v(" All Rights Reserved AMJ Screeding LTD ")])
      }, V = [], A = {name: "Footer"}, T = A, F = (a("d6ac"), Object(u["a"])(T, $, V, !1, null, "b9121498", null)),
      P = F.exports, J = {
        name: "App", components: {Footer: P, Form: q, Advantages: S, Splash: b, Slider: _}, data: function () {
          return {menuIsVisible: !1}
        }, methods: {
          SetMenuIsVisible: function () {
            this.menuIsVisible = !this.menuIsVisible
          }
        }
      }, W = J, B = (a("034f"), Object(u["a"])(W, i, n, !1, null, null, null)), Y = B.exports, D = a("5f5b"),
      L = a("b1e0");
    a("f9e3"), a("2dd8");
    s["default"].use(D["a"]), s["default"].use(L["a"]), s["default"].config.productionTip = !1, new s["default"]({
      render: function (e) {
        return e(Y)
      }
    }).$mount("#app")
  }, "6d52": function (e, t, a) {
  }, "85ec": function (e, t, a) {
  }, ab0f: function (e, t, a) {
    e.exports = a.p + "img/About-Suction.c6e79227.jpg"
  }, aba0: function (e, t, a) {
  }, c534: function (e, t, a) {
    "use strict";
    a("aba0")
  }, d6ac: function (e, t, a) {
    "use strict";
    a("0ccb")
  }, dd90: function (e, t, a) {
    "use strict";
    a("ded3")
  }, ded3: function (e, t, a) {
  }, e632: function (e, t, a) {
    "use strict";
    a("31e0")
  }
});
//# sourceMappingURL=app.06da3fe5.js.map
