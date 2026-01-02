import Tg, { useState as N_, useEffect as k_ } from "react";
function B_(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
function F_(r) {
  if (Object.prototype.hasOwnProperty.call(r, "__esModule")) return r;
  var t = r.default;
  if (typeof t == "function") {
    var e = function n() {
      var i = !1;
      try {
        i = this instanceof n;
      } catch {
      }
      return i ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    e.prototype = t.prototype;
  } else e = {};
  return Object.defineProperty(e, "__esModule", { value: !0 }), Object.keys(r).forEach(function(n) {
    var i = Object.getOwnPropertyDescriptor(r, n);
    Object.defineProperty(e, n, i.get ? i : {
      enumerable: !0,
      get: function() {
        return r[n];
      }
    });
  }), e;
}
var qa = { exports: {} }, _i = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tc;
function V_() {
  if (Tc) return _i;
  Tc = 1;
  var r = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function e(n, i, a) {
    var o = null;
    if (a !== void 0 && (o = "" + a), i.key !== void 0 && (o = "" + i.key), "key" in i) {
      a = {};
      for (var s in i)
        s !== "key" && (a[s] = i[s]);
    } else a = i;
    return i = a.ref, {
      $$typeof: r,
      type: n,
      key: o,
      ref: i !== void 0 ? i : null,
      props: a
    };
  }
  return _i.Fragment = t, _i.jsx = e, _i.jsxs = e, _i;
}
var Si = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cc;
function z_() {
  return Cc || (Cc = 1, process.env.NODE_ENV !== "production" && (function() {
    function r(I) {
      if (I == null) return null;
      if (typeof I == "function")
        return I.$$typeof === A ? null : I.displayName || I.name || null;
      if (typeof I == "string") return I;
      switch (I) {
        case p:
          return "Fragment";
        case y:
          return "Profiler";
        case g:
          return "StrictMode";
        case w:
          return "Suspense";
        case b:
          return "SuspenseList";
        case D:
          return "Activity";
      }
      if (typeof I == "object")
        switch (typeof I.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), I.$$typeof) {
          case d:
            return "Portal";
          case _:
            return (I.displayName || "Context") + ".Provider";
          case m:
            return (I._context.displayName || "Context") + ".Consumer";
          case S:
            var k = I.render;
            return I = I.displayName, I || (I = k.displayName || k.name || "", I = I !== "" ? "ForwardRef(" + I + ")" : "ForwardRef"), I;
          case x:
            return k = I.displayName || null, k !== null ? k : r(I.type) || "Memo";
          case T:
            k = I._payload, I = I._init;
            try {
              return r(I(k));
            } catch {
            }
        }
      return null;
    }
    function t(I) {
      return "" + I;
    }
    function e(I) {
      try {
        t(I);
        var k = !1;
      } catch {
        k = !0;
      }
      if (k) {
        k = console;
        var V = k.error, X = typeof Symbol == "function" && Symbol.toStringTag && I[Symbol.toStringTag] || I.constructor.name || "Object";
        return V.call(
          k,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          X
        ), t(I);
      }
    }
    function n(I) {
      if (I === p) return "<>";
      if (typeof I == "object" && I !== null && I.$$typeof === T)
        return "<...>";
      try {
        var k = r(I);
        return k ? "<" + k + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var I = C.A;
      return I === null ? null : I.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function o(I) {
      if (E.call(I, "key")) {
        var k = Object.getOwnPropertyDescriptor(I, "key").get;
        if (k && k.isReactWarning) return !1;
      }
      return I.key !== void 0;
    }
    function s(I, k) {
      function V() {
        O || (O = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          k
        ));
      }
      V.isReactWarning = !0, Object.defineProperty(I, "key", {
        get: V,
        configurable: !0
      });
    }
    function u() {
      var I = r(this.type);
      return R[I] || (R[I] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), I = this.props.ref, I !== void 0 ? I : null;
    }
    function l(I, k, V, X, tt, et, Et, Nt) {
      return V = et.ref, I = {
        $$typeof: c,
        type: I,
        key: k,
        props: et,
        _owner: tt
      }, (V !== void 0 ? V : null) !== null ? Object.defineProperty(I, "ref", {
        enumerable: !1,
        get: u
      }) : Object.defineProperty(I, "ref", { enumerable: !1, value: null }), I._store = {}, Object.defineProperty(I._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(I, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(I, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Et
      }), Object.defineProperty(I, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Nt
      }), Object.freeze && (Object.freeze(I.props), Object.freeze(I)), I;
    }
    function f(I, k, V, X, tt, et, Et, Nt) {
      var lt = k.children;
      if (lt !== void 0)
        if (X)
          if (P(lt)) {
            for (X = 0; X < lt.length; X++)
              h(lt[X]);
            Object.freeze && Object.freeze(lt);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else h(lt);
      if (E.call(k, "key")) {
        lt = r(I);
        var mt = Object.keys(k).filter(function(q) {
          return q !== "key";
        });
        X = 0 < mt.length ? "{key: someKey, " + mt.join(": ..., ") + ": ...}" : "{key: someKey}", B[lt + X] || (mt = 0 < mt.length ? "{" + mt.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          X,
          lt,
          mt,
          lt
        ), B[lt + X] = !0);
      }
      if (lt = null, V !== void 0 && (e(V), lt = "" + V), o(k) && (e(k.key), lt = "" + k.key), "key" in k) {
        V = {};
        for (var pt in k)
          pt !== "key" && (V[pt] = k[pt]);
      } else V = k;
      return lt && s(
        V,
        typeof I == "function" ? I.displayName || I.name || "Unknown" : I
      ), l(
        I,
        lt,
        et,
        tt,
        i(),
        V,
        Et,
        Nt
      );
    }
    function h(I) {
      typeof I == "object" && I !== null && I.$$typeof === c && I._store && (I._store.validated = 1);
    }
    var v = Tg, c = Symbol.for("react.transitional.element"), d = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), m = Symbol.for("react.consumer"), _ = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), D = Symbol.for("react.activity"), A = Symbol.for("react.client.reference"), C = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, E = Object.prototype.hasOwnProperty, P = Array.isArray, L = console.createTask ? console.createTask : function() {
      return null;
    };
    v = {
      react_stack_bottom_frame: function(I) {
        return I();
      }
    };
    var O, R = {}, G = v.react_stack_bottom_frame.bind(
      v,
      a
    )(), N = L(n(a)), B = {};
    Si.Fragment = p, Si.jsx = function(I, k, V, X, tt) {
      var et = 1e4 > C.recentlyCreatedOwnerStacks++;
      return f(
        I,
        k,
        V,
        !1,
        X,
        tt,
        et ? Error("react-stack-top-frame") : G,
        et ? L(n(I)) : N
      );
    }, Si.jsxs = function(I, k, V, X, tt) {
      var et = 1e4 > C.recentlyCreatedOwnerStacks++;
      return f(
        I,
        k,
        V,
        !0,
        X,
        tt,
        et ? Error("react-stack-top-frame") : G,
        et ? L(n(I)) : N
      );
    };
  })()), Si;
}
var Dc;
function G_() {
  return Dc || (Dc = 1, process.env.NODE_ENV === "production" ? qa.exports = V_() : qa.exports = z_()), qa.exports;
}
var or = G_(), $a = {};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var Hl = function(r, t) {
  return Hl = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, n) {
    e.__proto__ = n;
  } || function(e, n) {
    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
  }, Hl(r, t);
};
function z(r, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Hl(r, t);
  function e() {
    this.constructor = r;
  }
  r.prototype = t === null ? Object.create(t) : (e.prototype = t.prototype, new e());
}
var Wl = function() {
  return Wl = Object.assign || function(t) {
    for (var e, n = 1, i = arguments.length; n < i; n++) {
      e = arguments[n];
      for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
    }
    return t;
  }, Wl.apply(this, arguments);
};
function H_(r, t) {
  var e = {};
  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && t.indexOf(n) < 0 && (e[n] = r[n]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(r); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(r, n[i]) && (e[n[i]] = r[n[i]]);
  return e;
}
function W_(r, t, e, n) {
  var i = arguments.length, a = i < 3 ? t : n === null ? n = Object.getOwnPropertyDescriptor(t, e) : n, o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") a = Reflect.decorate(r, t, e, n);
  else for (var s = r.length - 1; s >= 0; s--) (o = r[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, e, a) : o(t, e)) || a);
  return i > 3 && a && Object.defineProperty(t, e, a), a;
}
function U_(r, t) {
  return function(e, n) {
    t(e, n, r);
  };
}
function Y_(r, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function") return Reflect.metadata(r, t);
}
function X_(r, t, e, n) {
  function i(a) {
    return a instanceof e ? a : new e(function(o) {
      o(a);
    });
  }
  return new (e || (e = Promise))(function(a, o) {
    function s(f) {
      try {
        l(n.next(f));
      } catch (h) {
        o(h);
      }
    }
    function u(f) {
      try {
        l(n.throw(f));
      } catch (h) {
        o(h);
      }
    }
    function l(f) {
      f.done ? a(f.value) : i(f.value).then(s, u);
    }
    l((n = n.apply(r, t || [])).next());
  });
}
function q_(r, t) {
  var e = { label: 0, sent: function() {
    if (a[0] & 1) throw a[1];
    return a[1];
  }, trys: [], ops: [] }, n, i, a, o;
  return o = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function s(l) {
    return function(f) {
      return u([l, f]);
    };
  }
  function u(l) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; e; ) try {
      if (n = 1, i && (a = l[0] & 2 ? i.return : l[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, l[1])).done) return a;
      switch (i = 0, a && (l = [l[0] & 2, a.value]), l[0]) {
        case 0:
        case 1:
          a = l;
          break;
        case 4:
          return e.label++, { value: l[1], done: !1 };
        case 5:
          e.label++, i = l[1], l = [0];
          continue;
        case 7:
          l = e.ops.pop(), e.trys.pop();
          continue;
        default:
          if (a = e.trys, !(a = a.length > 0 && a[a.length - 1]) && (l[0] === 6 || l[0] === 2)) {
            e = 0;
            continue;
          }
          if (l[0] === 3 && (!a || l[1] > a[0] && l[1] < a[3])) {
            e.label = l[1];
            break;
          }
          if (l[0] === 6 && e.label < a[1]) {
            e.label = a[1], a = l;
            break;
          }
          if (a && e.label < a[2]) {
            e.label = a[2], e.ops.push(l);
            break;
          }
          a[2] && e.ops.pop(), e.trys.pop();
          continue;
      }
      l = t.call(r, e);
    } catch (f) {
      l = [6, f], i = 0;
    } finally {
      n = a = 0;
    }
    if (l[0] & 5) throw l[1];
    return { value: l[0] ? l[1] : void 0, done: !0 };
  }
}
var Kf = Object.create ? (function(r, t, e, n) {
  n === void 0 && (n = e), Object.defineProperty(r, n, { enumerable: !0, get: function() {
    return t[e];
  } });
}) : (function(r, t, e, n) {
  n === void 0 && (n = e), r[n] = t[e];
});
function $_(r, t) {
  for (var e in r) e !== "default" && !Object.prototype.hasOwnProperty.call(t, e) && Kf(t, r, e);
}
function Ul(r) {
  var t = typeof Symbol == "function" && Symbol.iterator, e = t && r[t], n = 0;
  if (e) return e.call(r);
  if (r && typeof r.length == "number") return {
    next: function() {
      return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
    }
  };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Cg(r, t) {
  var e = typeof Symbol == "function" && r[Symbol.iterator];
  if (!e) return r;
  var n = e.call(r), i, a = [], o;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; ) a.push(i.value);
  } catch (s) {
    o = { error: s };
  } finally {
    try {
      i && !i.done && (e = n.return) && e.call(n);
    } finally {
      if (o) throw o.error;
    }
  }
  return a;
}
function Z_() {
  for (var r = [], t = 0; t < arguments.length; t++)
    r = r.concat(Cg(arguments[t]));
  return r;
}
function j_() {
  for (var r = 0, t = 0, e = arguments.length; t < e; t++) r += arguments[t].length;
  for (var n = Array(r), i = 0, t = 0; t < e; t++)
    for (var a = arguments[t], o = 0, s = a.length; o < s; o++, i++)
      n[i] = a[o];
  return n;
}
function K_(r, t, e) {
  if (e || arguments.length === 2) for (var n = 0, i = t.length, a; n < i; n++)
    (a || !(n in t)) && (a || (a = Array.prototype.slice.call(t, 0, n)), a[n] = t[n]);
  return r.concat(a || t);
}
function da(r) {
  return this instanceof da ? (this.v = r, this) : new da(r);
}
function Q_(r, t, e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = e.apply(r, t || []), i, a = [];
  return i = {}, o("next"), o("throw"), o("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function o(v) {
    n[v] && (i[v] = function(c) {
      return new Promise(function(d, p) {
        a.push([v, c, d, p]) > 1 || s(v, c);
      });
    });
  }
  function s(v, c) {
    try {
      u(n[v](c));
    } catch (d) {
      h(a[0][3], d);
    }
  }
  function u(v) {
    v.value instanceof da ? Promise.resolve(v.value.v).then(l, f) : h(a[0][2], v);
  }
  function l(v) {
    s("next", v);
  }
  function f(v) {
    s("throw", v);
  }
  function h(v, c) {
    v(c), a.shift(), a.length && s(a[0][0], a[0][1]);
  }
}
function J_(r) {
  var t, e;
  return t = {}, n("next"), n("throw", function(i) {
    throw i;
  }), n("return"), t[Symbol.iterator] = function() {
    return this;
  }, t;
  function n(i, a) {
    t[i] = r[i] ? function(o) {
      return (e = !e) ? { value: da(r[i](o)), done: i === "return" } : a ? a(o) : o;
    } : a;
  }
}
function t1(r) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = r[Symbol.asyncIterator], e;
  return t ? t.call(r) : (r = typeof Ul == "function" ? Ul(r) : r[Symbol.iterator](), e = {}, n("next"), n("throw"), n("return"), e[Symbol.asyncIterator] = function() {
    return this;
  }, e);
  function n(a) {
    e[a] = r[a] && function(o) {
      return new Promise(function(s, u) {
        o = r[a](o), i(s, u, o.done, o.value);
      });
    };
  }
  function i(a, o, s, u) {
    Promise.resolve(u).then(function(l) {
      a({ value: l, done: s });
    }, o);
  }
}
function e1(r, t) {
  return Object.defineProperty ? Object.defineProperty(r, "raw", { value: t }) : r.raw = t, r;
}
var r1 = Object.create ? (function(r, t) {
  Object.defineProperty(r, "default", { enumerable: !0, value: t });
}) : function(r, t) {
  r.default = t;
};
function n1(r) {
  if (r && r.__esModule) return r;
  var t = {};
  if (r != null) for (var e in r) e !== "default" && Object.prototype.hasOwnProperty.call(r, e) && Kf(t, r, e);
  return r1(t, r), t;
}
function i1(r) {
  return r && r.__esModule ? r : { default: r };
}
function a1(r, t, e, n) {
  if (e === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? r !== t || !n : !t.has(r)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return e === "m" ? n : e === "a" ? n.call(r) : n ? n.value : t.get(r);
}
function o1(r, t, e, n, i) {
  if (n === "m") throw new TypeError("Private method is not writable");
  if (n === "a" && !i) throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? r !== t || !i : !t.has(r)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return n === "a" ? i.call(r, e) : i ? i.value = e : t.set(r, e), e;
}
const s1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get __assign() {
    return Wl;
  },
  __asyncDelegator: J_,
  __asyncGenerator: Q_,
  __asyncValues: t1,
  __await: da,
  __awaiter: X_,
  __classPrivateFieldGet: a1,
  __classPrivateFieldSet: o1,
  __createBinding: Kf,
  __decorate: W_,
  __exportStar: $_,
  __extends: z,
  __generator: q_,
  __importDefault: i1,
  __importStar: n1,
  __makeTemplateObject: e1,
  __metadata: Y_,
  __param: U_,
  __read: Cg,
  __rest: H_,
  __spread: Z_,
  __spreadArray: K_,
  __spreadArrays: j_,
  __values: Ul
}, Symbol.toStringTag, { value: "Module" })), Dg = /* @__PURE__ */ F_(s1);
var Je = {}, tr = {}, gu = {}, Ac;
function u1() {
  return Ac || (Ac = 1, (function(r) {
    Object.defineProperty(r, "__esModule", {
      value: !0
    }), r.default = void 0;
    var t = 1, e = function() {
      return "".concat(t++);
    };
    r.default = e;
  })(gu)), gu;
}
var bi = {}, wi = {}, yu = {}, Mc;
function Ag() {
  return Mc || (Mc = 1, (function(r) {
    Object.defineProperty(r, "__esModule", {
      value: !0
    }), r.default = void 0;
    var t = function(n) {
      var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 60, a = null;
      return function() {
        for (var o = this, s = arguments.length, u = new Array(s), l = 0; l < s; l++)
          u[l] = arguments[l];
        clearTimeout(a), a = setTimeout(function() {
          n.apply(o, u);
        }, i);
      };
    };
    r.default = t;
  })(yu)), yu;
}
var er = {}, Ec;
function Qf() {
  if (Ec) return er;
  Ec = 1, Object.defineProperty(er, "__esModule", {
    value: !0
  }), er.SizeSensorId = er.SensorTabIndex = er.SensorClassName = void 0;
  var r = "size-sensor-id";
  er.SizeSensorId = r;
  var t = "size-sensor-object";
  er.SensorClassName = t;
  var e = "-1";
  return er.SensorTabIndex = e, er;
}
var Pc;
function l1() {
  if (Pc) return wi;
  Pc = 1, Object.defineProperty(wi, "__esModule", {
    value: !0
  }), wi.createSensor = void 0;
  var r = e(Ag()), t = Qf();
  function e(i) {
    return i && i.__esModule ? i : { default: i };
  }
  var n = function(a, o) {
    var s = void 0, u = [], l = function() {
      getComputedStyle(a).position === "static" && (a.style.position = "relative");
      var p = document.createElement("object");
      return p.onload = function() {
        p.contentDocument.defaultView.addEventListener("resize", f), f();
      }, p.style.display = "block", p.style.position = "absolute", p.style.top = "0", p.style.left = "0", p.style.height = "100%", p.style.width = "100%", p.style.overflow = "hidden", p.style.pointerEvents = "none", p.style.zIndex = "-1", p.style.opacity = "0", p.setAttribute("class", t.SensorClassName), p.setAttribute("tabindex", t.SensorTabIndex), p.type = "text/html", a.appendChild(p), p.data = "about:blank", p;
    }, f = (0, r.default)(function() {
      u.forEach(function(d) {
        d(a);
      });
    }), h = function(p) {
      s || (s = l()), u.indexOf(p) === -1 && u.push(p);
    }, v = function() {
      s && s.parentNode && (s.contentDocument && s.contentDocument.defaultView.removeEventListener("resize", f), s.parentNode.removeChild(s), a.removeAttribute(t.SizeSensorId), s = void 0, u = [], o && o());
    }, c = function(p) {
      var g = u.indexOf(p);
      g !== -1 && u.splice(g, 1), u.length === 0 && s && v();
    };
    return {
      element: a,
      bind: h,
      destroy: v,
      unbind: c
    };
  };
  return wi.createSensor = n, wi;
}
var xi = {}, Ic;
function f1() {
  if (Ic) return xi;
  Ic = 1, Object.defineProperty(xi, "__esModule", {
    value: !0
  }), xi.createSensor = void 0;
  var r = Qf(), t = e(Ag());
  function e(i) {
    return i && i.__esModule ? i : { default: i };
  }
  var n = function(a, o) {
    var s = void 0, u = [], l = (0, t.default)(function() {
      u.forEach(function(d) {
        d(a);
      });
    }), f = function() {
      var p = new ResizeObserver(l);
      return p.observe(a), l(), p;
    }, h = function(p) {
      s || (s = f()), u.indexOf(p) === -1 && u.push(p);
    }, v = function() {
      s.disconnect(), u = [], s = void 0, a.removeAttribute(r.SizeSensorId), o && o();
    }, c = function(p) {
      var g = u.indexOf(p);
      g !== -1 && u.splice(g, 1), u.length === 0 && s && v();
    };
    return {
      element: a,
      bind: h,
      destroy: v,
      unbind: c
    };
  };
  return xi.createSensor = n, xi;
}
var Lc;
function h1() {
  if (Lc) return bi;
  Lc = 1, Object.defineProperty(bi, "__esModule", {
    value: !0
  }), bi.createSensor = void 0;
  var r = l1(), t = f1(), e = typeof ResizeObserver < "u" ? t.createSensor : r.createSensor;
  return bi.createSensor = e, bi;
}
var Oc;
function c1() {
  if (Oc) return tr;
  Oc = 1, Object.defineProperty(tr, "__esModule", {
    value: !0
  }), tr.removeSensor = tr.getSensor = tr.Sensors = void 0;
  var r = n(u1()), t = h1(), e = Qf();
  function n(u) {
    return u && u.__esModule ? u : { default: u };
  }
  var i = {};
  tr.Sensors = i;
  function a(u) {
    u && i[u] && delete i[u];
  }
  var o = function(l) {
    var f = l.getAttribute(e.SizeSensorId);
    if (f && i[f])
      return i[f];
    var h = (0, r.default)();
    l.setAttribute(e.SizeSensorId, h);
    var v = (0, t.createSensor)(l, function() {
      return a(h);
    });
    return i[h] = v, v;
  };
  tr.getSensor = o;
  var s = function(l) {
    var f = l.element.getAttribute(e.SizeSensorId);
    l.destroy(), a(f);
  };
  return tr.removeSensor = s, tr;
}
var Rc;
function v1() {
  if (Rc) return Je;
  Rc = 1, Object.defineProperty(Je, "__esModule", {
    value: !0
  }), Je.ver = Je.clear = Je.bind = void 0;
  var r = c1(), t = function(a, o) {
    var s = (0, r.getSensor)(a);
    return s.bind(o), function() {
      s.unbind(o);
    };
  };
  Je.bind = t;
  var e = function(a) {
    var o = (0, r.getSensor)(a);
    (0, r.removeSensor)(o);
  };
  Je.clear = e;
  var n = "1.0.2";
  return Je.ver = n, Je;
}
var Ti = {}, Nc;
function d1() {
  if (Nc) return Ti;
  Nc = 1, Object.defineProperty(Ti, "__esModule", { value: !0 }), Ti.pick = void 0;
  function r(t, e) {
    var n = {};
    return e.forEach(function(i) {
      n[i] = t[i];
    }), n;
  }
  return Ti.pick = r, Ti;
}
var Ci = {}, kc;
function p1() {
  if (kc) return Ci;
  kc = 1, Object.defineProperty(Ci, "__esModule", { value: !0 }), Ci.isFunction = void 0;
  function r(t) {
    return typeof t == "function";
  }
  return Ci.isFunction = r, Ci;
}
var Di = {}, Bc;
function g1() {
  if (Bc) return Di;
  Bc = 1, Object.defineProperty(Di, "__esModule", { value: !0 }), Di.isString = void 0;
  function r(t) {
    return typeof t == "string";
  }
  return Di.isString = r, Di;
}
var Ai = {}, mu, Fc;
function y1() {
  return Fc || (Fc = 1, mu = function r(t, e) {
    if (t === e) return !0;
    if (t && e && typeof t == "object" && typeof e == "object") {
      if (t.constructor !== e.constructor) return !1;
      var n, i, a;
      if (Array.isArray(t)) {
        if (n = t.length, n != e.length) return !1;
        for (i = n; i-- !== 0; )
          if (!r(t[i], e[i])) return !1;
        return !0;
      }
      if (t.constructor === RegExp) return t.source === e.source && t.flags === e.flags;
      if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === e.valueOf();
      if (t.toString !== Object.prototype.toString) return t.toString() === e.toString();
      if (a = Object.keys(t), n = a.length, n !== Object.keys(e).length) return !1;
      for (i = n; i-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(e, a[i])) return !1;
      for (i = n; i-- !== 0; ) {
        var o = a[i];
        if (!r(t[o], e[o])) return !1;
      }
      return !0;
    }
    return t !== t && e !== e;
  }), mu;
}
var Vc;
function m1() {
  if (Vc) return Ai;
  Vc = 1, Object.defineProperty(Ai, "__esModule", { value: !0 }), Ai.isEqual = void 0;
  var r = Dg, t = (0, r.__importDefault)(y1());
  return Ai.isEqual = t.default, Ai;
}
var zc;
function _1() {
  if (zc) return $a;
  zc = 1, Object.defineProperty($a, "__esModule", { value: !0 });
  var r = Dg, t = (0, r.__importStar)(Tg), e = v1(), n = d1(), i = p1(), a = g1(), o = m1(), s = (
    /** @class */
    (function(u) {
      (0, r.__extends)(l, u);
      function l(f) {
        var h = u.call(this, f) || this;
        return h.echarts = f.echarts, h.ele = null, h.isInitialResize = !0, h;
      }
      return l.prototype.componentDidMount = function() {
        this.renderNewEcharts();
      }, l.prototype.componentDidUpdate = function(f) {
        var h = this.props.shouldSetOption;
        if (!((0, i.isFunction)(h) && !h(f, this.props))) {
          if (!(0, o.isEqual)(f.theme, this.props.theme) || !(0, o.isEqual)(f.opts, this.props.opts) || !(0, o.isEqual)(f.onEvents, this.props.onEvents)) {
            this.dispose(), this.renderNewEcharts();
            return;
          }
          var v = ["option", "notMerge", "lazyUpdate", "showLoading", "loadingOption"];
          (0, o.isEqual)((0, n.pick)(this.props, v), (0, n.pick)(f, v)) || this.updateEChartsOption(), (!(0, o.isEqual)(f.style, this.props.style) || !(0, o.isEqual)(f.className, this.props.className)) && this.resize();
        }
      }, l.prototype.componentWillUnmount = function() {
        this.dispose();
      }, l.prototype.getEchartsInstance = function() {
        return this.echarts.getInstanceByDom(this.ele) || this.echarts.init(this.ele, this.props.theme, this.props.opts);
      }, l.prototype.dispose = function() {
        if (this.ele) {
          try {
            (0, e.clear)(this.ele);
          } catch (f) {
            console.warn(f);
          }
          this.echarts.dispose(this.ele);
        }
      }, l.prototype.renderNewEcharts = function() {
        var f = this, h = this.props, v = h.onEvents, c = h.onChartReady, d = this.updateEChartsOption();
        this.bindEvents(d, v || {}), (0, i.isFunction)(c) && c(d), this.ele && (0, e.bind)(this.ele, function() {
          f.resize();
        });
      }, l.prototype.bindEvents = function(f, h) {
        function v(d, p) {
          (0, a.isString)(d) && (0, i.isFunction)(p) && f.on(d, function(g) {
            p(g, f);
          });
        }
        for (var c in h)
          Object.prototype.hasOwnProperty.call(h, c) && v(c, h[c]);
      }, l.prototype.updateEChartsOption = function() {
        var f = this.props, h = f.option, v = f.notMerge, c = v === void 0 ? !1 : v, d = f.lazyUpdate, p = d === void 0 ? !1 : d, g = f.showLoading, y = f.loadingOption, m = y === void 0 ? null : y, _ = this.getEchartsInstance();
        return _.setOption(h, c, p), g ? _.showLoading(m) : _.hideLoading(), _;
      }, l.prototype.resize = function() {
        var f = this.getEchartsInstance();
        if (!this.isInitialResize)
          try {
            f.resize();
          } catch (h) {
            console.warn(h);
          }
        this.isInitialResize = !1;
      }, l.prototype.render = function() {
        var f = this, h = this.props, v = h.style, c = h.className, d = c === void 0 ? "" : c, p = (0, r.__assign)({ height: 300 }, v);
        return t.default.createElement("div", { ref: function(g) {
          f.ele = g;
        }, style: p, className: "echarts-for-react " + d });
      }, l;
    })(t.PureComponent)
  );
  return $a.default = s, $a;
}
var S1 = _1();
const Jf = /* @__PURE__ */ B_(S1);
var b1 = /* @__PURE__ */ (function() {
  function r() {
    this.firefox = !1, this.ie = !1, this.edge = !1, this.newEdge = !1, this.weChat = !1;
  }
  return r;
})(), w1 = /* @__PURE__ */ (function() {
  function r() {
    this.browser = new b1(), this.node = !1, this.wxa = !1, this.worker = !1, this.svgSupported = !1, this.touchEventsSupported = !1, this.pointerEventsSupported = !1, this.domSupported = !1, this.transformSupported = !1, this.transform3dSupported = !1, this.hasGlobalWindow = typeof window < "u";
  }
  return r;
})(), $ = new w1();
typeof wx == "object" && typeof wx.getSystemInfoSync == "function" ? ($.wxa = !0, $.touchEventsSupported = !0) : typeof document > "u" && typeof self < "u" ? $.worker = !0 : !$.hasGlobalWindow || "Deno" in window ? ($.node = !0, $.svgSupported = !0) : x1(navigator.userAgent, $);
function x1(r, t) {
  var e = t.browser, n = r.match(/Firefox\/([\d.]+)/), i = r.match(/MSIE\s([\d.]+)/) || r.match(/Trident\/.+?rv:(([\d.]+))/), a = r.match(/Edge?\/([\d.]+)/), o = /micromessenger/i.test(r);
  n && (e.firefox = !0, e.version = n[1]), i && (e.ie = !0, e.version = i[1]), a && (e.edge = !0, e.version = a[1], e.newEdge = +a[1].split(".")[0] > 18), o && (e.weChat = !0), t.svgSupported = typeof SVGRect < "u", t.touchEventsSupported = "ontouchstart" in window && !e.ie && !e.edge, t.pointerEventsSupported = "onpointerdown" in window && (e.edge || e.ie && +e.version >= 11), t.domSupported = typeof document < "u";
  var s = document.documentElement.style;
  t.transform3dSupported = (e.ie && "transition" in s || e.edge || "WebKitCSSMatrix" in window && "m11" in new WebKitCSSMatrix() || "MozPerspective" in s) && !("OTransition" in s), t.transformSupported = t.transform3dSupported || e.ie && +e.version >= 9;
}
var th = 12, T1 = "sans-serif", Cn = th + "px " + T1, C1 = 20, D1 = 100, A1 = "007LLmW'55;N0500LLLLLLLLLL00NNNLzWW\\\\WQb\\0FWLg\\bWb\\WQ\\WrWWQ000CL5LLFLL0LL**F*gLLLL5F0LF\\FFF5.5N";
function M1(r) {
  var t = {};
  if (typeof JSON > "u")
    return t;
  for (var e = 0; e < r.length; e++) {
    var n = String.fromCharCode(e + 32), i = (r.charCodeAt(e) - C1) / D1;
    t[n] = i;
  }
  return t;
}
var E1 = M1(A1), hr = {
  createCanvas: function() {
    return typeof document < "u" && document.createElement("canvas");
  },
  measureText: /* @__PURE__ */ (function() {
    var r, t;
    return function(e, n) {
      if (!r) {
        var i = hr.createCanvas();
        r = i && i.getContext("2d");
      }
      if (r)
        return t !== n && (t = r.font = n || Cn), r.measureText(e);
      e = e || "", n = n || Cn;
      var a = /((?:\d+)?\.?\d*)px/.exec(n), o = a && +a[1] || th, s = 0;
      if (n.indexOf("mono") >= 0)
        s = o * e.length;
      else
        for (var u = 0; u < e.length; u++) {
          var l = E1[e[u]];
          s += l == null ? o : l * o;
        }
      return { width: s };
    };
  })(),
  loadImage: function(r, t, e) {
    var n = new Image();
    return n.onload = t, n.onerror = e, n.src = r, n;
  }
};
function Mg(r) {
  for (var t in hr)
    r[t] && (hr[t] = r[t]);
}
var Eg = $e([
  "Function",
  "RegExp",
  "Date",
  "Error",
  "CanvasGradient",
  "CanvasPattern",
  "Image",
  "Canvas"
], function(r, t) {
  return r["[object " + t + "]"] = !0, r;
}, {}), Pg = $e([
  "Int8",
  "Uint8",
  "Uint8Clamped",
  "Int16",
  "Uint16",
  "Int32",
  "Uint32",
  "Float32",
  "Float64"
], function(r, t) {
  return r["[object " + t + "Array]"] = !0, r;
}, {}), ci = Object.prototype.toString, Ls = Array.prototype, P1 = Ls.forEach, I1 = Ls.filter, eh = Ls.slice, L1 = Ls.map, Gc = (function() {
}).constructor, Za = Gc ? Gc.prototype : null, rh = "__proto__", O1 = 2311;
function nh() {
  return O1++;
}
function Nr() {
  for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t];
  typeof console < "u" && console.error.apply(console, r);
}
function nt(r) {
  if (r == null || typeof r != "object")
    return r;
  var t = r, e = ci.call(r);
  if (e === "[object Array]") {
    if (!ri(r)) {
      t = [];
      for (var n = 0, i = r.length; n < i; n++)
        t[n] = nt(r[n]);
    }
  } else if (Pg[e]) {
    if (!ri(r)) {
      var a = r.constructor;
      if (a.from)
        t = a.from(r);
      else {
        t = new a(r.length);
        for (var n = 0, i = r.length; n < i; n++)
          t[n] = r[n];
      }
    }
  } else if (!Eg[e] && !ri(r) && !Dn(r)) {
    t = {};
    for (var o in r)
      r.hasOwnProperty(o) && o !== rh && (t[o] = nt(r[o]));
  }
  return t;
}
function ot(r, t, e) {
  if (!Y(t) || !Y(r))
    return e ? nt(t) : r;
  for (var n in t)
    if (t.hasOwnProperty(n) && n !== rh) {
      var i = r[n], a = t[n];
      Y(a) && Y(i) && !H(a) && !H(i) && !Dn(a) && !Dn(i) && !Yl(a) && !Yl(i) && !ri(a) && !ri(i) ? ot(i, a, e) : (e || !(n in r)) && (r[n] = nt(t[n]));
    }
  return r;
}
function R1(r, t) {
  for (var e = r[0], n = 1, i = r.length; n < i; n++)
    e = ot(e, r[n], t);
  return e;
}
function F(r, t) {
  if (Object.assign)
    Object.assign(r, t);
  else
    for (var e in t)
      t.hasOwnProperty(e) && e !== rh && (r[e] = t[e]);
  return r;
}
function ut(r, t, e) {
  for (var n = yt(t), i = 0, a = n.length; i < a; i++) {
    var o = n[i];
    (e ? t[o] != null : r[o] == null) && (r[o] = t[o]);
  }
  return r;
}
var N1 = hr.createCanvas;
function ht(r, t) {
  if (r) {
    if (r.indexOf)
      return r.indexOf(t);
    for (var e = 0, n = r.length; e < n; e++)
      if (r[e] === t)
        return e;
  }
  return -1;
}
function ih(r, t) {
  var e = r.prototype;
  function n() {
  }
  n.prototype = t.prototype, r.prototype = new n();
  for (var i in e)
    e.hasOwnProperty(i) && (r.prototype[i] = e[i]);
  r.prototype.constructor = r, r.superClass = t;
}
function Ce(r, t, e) {
  if (r = "prototype" in r ? r.prototype : r, t = "prototype" in t ? t.prototype : t, Object.getOwnPropertyNames)
    for (var n = Object.getOwnPropertyNames(t), i = 0; i < n.length; i++) {
      var a = n[i];
      a !== "constructor" && (e ? t[a] != null : r[a] == null) && (r[a] = t[a]);
    }
  else
    ut(r, t, e);
}
function Qt(r) {
  return !r || typeof r == "string" ? !1 : typeof r.length == "number";
}
function M(r, t, e) {
  if (r && t)
    if (r.forEach && r.forEach === P1)
      r.forEach(t, e);
    else if (r.length === +r.length)
      for (var n = 0, i = r.length; n < i; n++)
        t.call(e, r[n], n, r);
    else
      for (var a in r)
        r.hasOwnProperty(a) && t.call(e, r[a], a, r);
}
function U(r, t, e) {
  if (!r)
    return [];
  if (!t)
    return Os(r);
  if (r.map && r.map === L1)
    return r.map(t, e);
  for (var n = [], i = 0, a = r.length; i < a; i++)
    n.push(t.call(e, r[i], i, r));
  return n;
}
function $e(r, t, e, n) {
  if (r && t) {
    for (var i = 0, a = r.length; i < a; i++)
      e = t.call(n, e, r[i], i, r);
    return e;
  }
}
function Dt(r, t, e) {
  if (!r)
    return [];
  if (!t)
    return Os(r);
  if (r.filter && r.filter === I1)
    return r.filter(t, e);
  for (var n = [], i = 0, a = r.length; i < a; i++)
    t.call(e, r[i], i, r) && n.push(r[i]);
  return n;
}
function k1(r, t, e) {
  if (r && t) {
    for (var n = 0, i = r.length; n < i; n++)
      if (t.call(e, r[n], n, r))
        return r[n];
  }
}
function yt(r) {
  if (!r)
    return [];
  if (Object.keys)
    return Object.keys(r);
  var t = [];
  for (var e in r)
    r.hasOwnProperty(e) && t.push(e);
  return t;
}
function B1(r, t) {
  for (var e = [], n = 2; n < arguments.length; n++)
    e[n - 2] = arguments[n];
  return function() {
    return r.apply(t, e.concat(eh.call(arguments)));
  };
}
var vt = Za && Z(Za.bind) ? Za.call.bind(Za.bind) : B1;
function St(r) {
  for (var t = [], e = 1; e < arguments.length; e++)
    t[e - 1] = arguments[e];
  return function() {
    return r.apply(this, t.concat(eh.call(arguments)));
  };
}
function H(r) {
  return Array.isArray ? Array.isArray(r) : ci.call(r) === "[object Array]";
}
function Z(r) {
  return typeof r == "function";
}
function W(r) {
  return typeof r == "string";
}
function pa(r) {
  return ci.call(r) === "[object String]";
}
function dt(r) {
  return typeof r == "number";
}
function Y(r) {
  var t = typeof r;
  return t === "function" || !!r && t === "object";
}
function Yl(r) {
  return !!Eg[ci.call(r)];
}
function Gt(r) {
  return !!Pg[ci.call(r)];
}
function Dn(r) {
  return typeof r == "object" && typeof r.nodeType == "number" && typeof r.ownerDocument == "object";
}
function La(r) {
  return r.colorStops != null;
}
function Ig(r) {
  return r.image != null;
}
function Lg(r) {
  return ci.call(r) === "[object RegExp]";
}
function si(r) {
  return r !== r;
}
function Gr() {
  for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t];
  for (var e = 0, n = r.length; e < n; e++)
    if (r[e] != null)
      return r[e];
}
function K(r, t) {
  return r ?? t;
}
function kr(r, t, e) {
  return r ?? t ?? e;
}
function Os(r) {
  for (var t = [], e = 1; e < arguments.length; e++)
    t[e - 1] = arguments[e];
  return eh.apply(r, t);
}
function ah(r) {
  if (typeof r == "number")
    return [r, r, r, r];
  var t = r.length;
  return t === 2 ? [r[0], r[1], r[0], r[1]] : t === 3 ? [r[0], r[1], r[2], r[1]] : r;
}
function J(r, t) {
  if (!r)
    throw new Error(t);
}
function Le(r) {
  return r == null ? null : typeof r.trim == "function" ? r.trim() : r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
}
var Og = "__ec_primitive__";
function Zo(r) {
  r[Og] = !0;
}
function ri(r) {
  return r[Og];
}
var F1 = (function() {
  function r() {
    this.data = {};
  }
  return r.prototype.delete = function(t) {
    var e = this.has(t);
    return e && delete this.data[t], e;
  }, r.prototype.has = function(t) {
    return this.data.hasOwnProperty(t);
  }, r.prototype.get = function(t) {
    return this.data[t];
  }, r.prototype.set = function(t, e) {
    return this.data[t] = e, this;
  }, r.prototype.keys = function() {
    return yt(this.data);
  }, r.prototype.forEach = function(t) {
    var e = this.data;
    for (var n in e)
      e.hasOwnProperty(n) && t(e[n], n);
  }, r;
})(), Rg = typeof Map == "function";
function V1() {
  return Rg ? /* @__PURE__ */ new Map() : new F1();
}
var Ng = (function() {
  function r(t) {
    var e = H(t);
    this.data = V1();
    var n = this;
    t instanceof r ? t.each(i) : t && M(t, i);
    function i(a, o) {
      e ? n.set(a, o) : n.set(o, a);
    }
  }
  return r.prototype.hasKey = function(t) {
    return this.data.has(t);
  }, r.prototype.get = function(t) {
    return this.data.get(t);
  }, r.prototype.set = function(t, e) {
    return this.data.set(t, e), e;
  }, r.prototype.each = function(t, e) {
    this.data.forEach(function(n, i) {
      t.call(e, n, i);
    });
  }, r.prototype.keys = function() {
    var t = this.data.keys();
    return Rg ? Array.from(t) : t;
  }, r.prototype.removeKey = function(t) {
    this.data.delete(t);
  }, r;
})();
function Q(r) {
  return new Ng(r);
}
function kg(r, t) {
  for (var e = new r.constructor(r.length + t.length), n = 0; n < r.length; n++)
    e[n] = r[n];
  for (var i = r.length, n = 0; n < t.length; n++)
    e[n + i] = t[n];
  return e;
}
function Oa(r, t) {
  var e;
  if (Object.create)
    e = Object.create(r);
  else {
    var n = function() {
    };
    n.prototype = r, e = new n();
  }
  return t && F(e, t), e;
}
function oh(r) {
  var t = r.style;
  t.webkitUserSelect = "none", t.userSelect = "none", t.webkitTapHighlightColor = "rgba(0,0,0,0)", t["-webkit-touch-callout"] = "none";
}
function Hr(r, t) {
  return r.hasOwnProperty(t);
}
function $t() {
}
var Bg = 180 / Math.PI;
const z1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  HashMap: Ng,
  RADIAN_TO_DEGREE: Bg,
  assert: J,
  bind: vt,
  clone: nt,
  concatArray: kg,
  createCanvas: N1,
  createHashMap: Q,
  createObject: Oa,
  curry: St,
  defaults: ut,
  disableUserSelect: oh,
  each: M,
  eqNaN: si,
  extend: F,
  filter: Dt,
  find: k1,
  guid: nh,
  hasOwn: Hr,
  indexOf: ht,
  inherits: ih,
  isArray: H,
  isArrayLike: Qt,
  isBuiltInObject: Yl,
  isDom: Dn,
  isFunction: Z,
  isGradientObject: La,
  isImagePatternObject: Ig,
  isNumber: dt,
  isObject: Y,
  isPrimitive: ri,
  isRegExp: Lg,
  isString: W,
  isStringSafe: pa,
  isTypedArray: Gt,
  keys: yt,
  logError: Nr,
  map: U,
  merge: ot,
  mergeAll: R1,
  mixin: Ce,
  noop: $t,
  normalizeCssArray: ah,
  reduce: $e,
  retrieve: Gr,
  retrieve2: K,
  retrieve3: kr,
  setAsPrimitive: Zo,
  slice: Os,
  trim: Le
}, Symbol.toStringTag, { value: "Module" }));
function On(r, t) {
  return r == null && (r = 0), t == null && (t = 0), [r, t];
}
function G1(r, t) {
  return r[0] = t[0], r[1] = t[1], r;
}
function Fg(r) {
  return [r[0], r[1]];
}
function H1(r, t, e) {
  return r[0] = t, r[1] = e, r;
}
function Xl(r, t, e) {
  return r[0] = t[0] + e[0], r[1] = t[1] + e[1], r;
}
function W1(r, t, e, n) {
  return r[0] = t[0] + e[0] * n, r[1] = t[1] + e[1] * n, r;
}
function Vg(r, t, e) {
  return r[0] = t[0] - e[0], r[1] = t[1] - e[1], r;
}
function sh(r) {
  return Math.sqrt(uh(r));
}
var U1 = sh;
function uh(r) {
  return r[0] * r[0] + r[1] * r[1];
}
var Y1 = uh;
function X1(r, t, e) {
  return r[0] = t[0] * e[0], r[1] = t[1] * e[1], r;
}
function q1(r, t, e) {
  return r[0] = t[0] / e[0], r[1] = t[1] / e[1], r;
}
function $1(r, t) {
  return r[0] * t[0] + r[1] * t[1];
}
function No(r, t, e) {
  return r[0] = t[0] * e, r[1] = t[1] * e, r;
}
function zg(r, t) {
  var e = sh(t);
  return e === 0 ? (r[0] = 0, r[1] = 0) : (r[0] = t[0] / e, r[1] = t[1] / e), r;
}
function jo(r, t) {
  return Math.sqrt((r[0] - t[0]) * (r[0] - t[0]) + (r[1] - t[1]) * (r[1] - t[1]));
}
var Ko = jo;
function Gg(r, t) {
  return (r[0] - t[0]) * (r[0] - t[0]) + (r[1] - t[1]) * (r[1] - t[1]);
}
var _n = Gg;
function Z1(r, t) {
  return r[0] = -t[0], r[1] = -t[1], r;
}
function ko(r, t, e, n) {
  return r[0] = t[0] + n * (e[0] - t[0]), r[1] = t[1] + n * (e[1] - t[1]), r;
}
function Zt(r, t, e) {
  var n = t[0], i = t[1];
  return r[0] = e[0] * n + e[2] * i + e[4], r[1] = e[1] * n + e[3] * i + e[5], r;
}
function Mr(r, t, e) {
  return r[0] = Math.min(t[0], e[0]), r[1] = Math.min(t[1], e[1]), r;
}
function Er(r, t, e) {
  return r[0] = Math.max(t[0], e[0]), r[1] = Math.max(t[1], e[1]), r;
}
const j1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  add: Xl,
  applyTransform: Zt,
  clone: Fg,
  copy: G1,
  create: On,
  dist: Ko,
  distSquare: _n,
  distance: jo,
  distanceSquare: Gg,
  div: q1,
  dot: $1,
  len: sh,
  lenSquare: uh,
  length: U1,
  lengthSquare: Y1,
  lerp: ko,
  max: Er,
  min: Mr,
  mul: X1,
  negate: Z1,
  normalize: zg,
  scale: No,
  scaleAndAdd: W1,
  set: H1,
  sub: Vg
}, Symbol.toStringTag, { value: "Module" }));
var kn = /* @__PURE__ */ (function() {
  function r(t, e) {
    this.target = t, this.topTarget = e && e.topTarget;
  }
  return r;
})(), K1 = (function() {
  function r(t) {
    this.handler = t, t.on("mousedown", this._dragStart, this), t.on("mousemove", this._drag, this), t.on("mouseup", this._dragEnd, this);
  }
  return r.prototype._dragStart = function(t) {
    for (var e = t.target; e && !e.draggable; )
      e = e.parent || e.__hostTarget;
    e && (this._draggingTarget = e, e.dragging = !0, this._x = t.offsetX, this._y = t.offsetY, this.handler.dispatchToElement(new kn(e, t), "dragstart", t.event));
  }, r.prototype._drag = function(t) {
    var e = this._draggingTarget;
    if (e) {
      var n = t.offsetX, i = t.offsetY, a = n - this._x, o = i - this._y;
      this._x = n, this._y = i, e.drift(a, o, t), this.handler.dispatchToElement(new kn(e, t), "drag", t.event);
      var s = this.handler.findHover(n, i, e).target, u = this._dropTarget;
      this._dropTarget = s, e !== s && (u && s !== u && this.handler.dispatchToElement(new kn(u, t), "dragleave", t.event), s && s !== u && this.handler.dispatchToElement(new kn(s, t), "dragenter", t.event));
    }
  }, r.prototype._dragEnd = function(t) {
    var e = this._draggingTarget;
    e && (e.dragging = !1), this.handler.dispatchToElement(new kn(e, t), "dragend", t.event), this._dropTarget && this.handler.dispatchToElement(new kn(this._dropTarget, t), "drop", t.event), this._draggingTarget = null, this._dropTarget = null;
  }, r;
})(), Ze = (function() {
  function r(t) {
    t && (this._$eventProcessor = t);
  }
  return r.prototype.on = function(t, e, n, i) {
    this._$handlers || (this._$handlers = {});
    var a = this._$handlers;
    if (typeof e == "function" && (i = n, n = e, e = null), !n || !t)
      return this;
    var o = this._$eventProcessor;
    e != null && o && o.normalizeQuery && (e = o.normalizeQuery(e)), a[t] || (a[t] = []);
    for (var s = 0; s < a[t].length; s++)
      if (a[t][s].h === n)
        return this;
    var u = {
      h: n,
      query: e,
      ctx: i || this,
      callAtLast: n.zrEventfulCallAtLast
    }, l = a[t].length - 1, f = a[t][l];
    return f && f.callAtLast ? a[t].splice(l, 0, u) : a[t].push(u), this;
  }, r.prototype.isSilent = function(t) {
    var e = this._$handlers;
    return !e || !e[t] || !e[t].length;
  }, r.prototype.off = function(t, e) {
    var n = this._$handlers;
    if (!n)
      return this;
    if (!t)
      return this._$handlers = {}, this;
    if (e) {
      if (n[t]) {
        for (var i = [], a = 0, o = n[t].length; a < o; a++)
          n[t][a].h !== e && i.push(n[t][a]);
        n[t] = i;
      }
      n[t] && n[t].length === 0 && delete n[t];
    } else
      delete n[t];
    return this;
  }, r.prototype.trigger = function(t) {
    for (var e = [], n = 1; n < arguments.length; n++)
      e[n - 1] = arguments[n];
    if (!this._$handlers)
      return this;
    var i = this._$handlers[t], a = this._$eventProcessor;
    if (i)
      for (var o = e.length, s = i.length, u = 0; u < s; u++) {
        var l = i[u];
        if (!(a && a.filter && l.query != null && !a.filter(t, l.query)))
          switch (o) {
            case 0:
              l.h.call(l.ctx);
              break;
            case 1:
              l.h.call(l.ctx, e[0]);
              break;
            case 2:
              l.h.call(l.ctx, e[0], e[1]);
              break;
            default:
              l.h.apply(l.ctx, e);
              break;
          }
      }
    return a && a.afterTrigger && a.afterTrigger(t), this;
  }, r.prototype.triggerWithContext = function(t) {
    for (var e = [], n = 1; n < arguments.length; n++)
      e[n - 1] = arguments[n];
    if (!this._$handlers)
      return this;
    var i = this._$handlers[t], a = this._$eventProcessor;
    if (i)
      for (var o = e.length, s = e[o - 1], u = i.length, l = 0; l < u; l++) {
        var f = i[l];
        if (!(a && a.filter && f.query != null && !a.filter(t, f.query)))
          switch (o) {
            case 0:
              f.h.call(s);
              break;
            case 1:
              f.h.call(s, e[0]);
              break;
            case 2:
              f.h.call(s, e[0], e[1]);
              break;
            default:
              f.h.apply(s, e.slice(1, o - 1));
              break;
          }
      }
    return a && a.afterTrigger && a.afterTrigger(t), this;
  }, r;
})(), Q1 = Math.log(2);
function ql(r, t, e, n, i, a) {
  var o = n + "-" + i, s = r.length;
  if (a.hasOwnProperty(o))
    return a[o];
  if (t === 1) {
    var u = Math.round(Math.log((1 << s) - 1 & ~i) / Q1);
    return r[e][u];
  }
  for (var l = n | 1 << e, f = e + 1; n & 1 << f; )
    f++;
  for (var h = 0, v = 0, c = 0; v < s; v++) {
    var d = 1 << v;
    d & i || (h += (c % 2 ? -1 : 1) * r[e][v] * ql(r, t - 1, f, l, i | d, a), c++);
  }
  return a[o] = h, h;
}
function Hc(r, t) {
  var e = [
    [r[0], r[1], 1, 0, 0, 0, -t[0] * r[0], -t[0] * r[1]],
    [0, 0, 0, r[0], r[1], 1, -t[1] * r[0], -t[1] * r[1]],
    [r[2], r[3], 1, 0, 0, 0, -t[2] * r[2], -t[2] * r[3]],
    [0, 0, 0, r[2], r[3], 1, -t[3] * r[2], -t[3] * r[3]],
    [r[4], r[5], 1, 0, 0, 0, -t[4] * r[4], -t[4] * r[5]],
    [0, 0, 0, r[4], r[5], 1, -t[5] * r[4], -t[5] * r[5]],
    [r[6], r[7], 1, 0, 0, 0, -t[6] * r[6], -t[6] * r[7]],
    [0, 0, 0, r[6], r[7], 1, -t[7] * r[6], -t[7] * r[7]]
  ], n = {}, i = ql(e, 8, 0, 0, 0, n);
  if (i !== 0) {
    for (var a = [], o = 0; o < 8; o++)
      for (var s = 0; s < 8; s++)
        a[s] == null && (a[s] = 0), a[s] += ((o + s) % 2 ? -1 : 1) * ql(e, 7, o === 0 ? 1 : 0, 1 << o, 1 << s, n) / i * t[o];
    return function(u, l, f) {
      var h = l * a[6] + f * a[7] + 1;
      u[0] = (l * a[0] + f * a[1] + a[2]) / h, u[1] = (l * a[3] + f * a[4] + a[5]) / h;
    };
  }
}
var Wc = "___zrEVENTSAVED", _u = [];
function J1(r, t, e, n, i) {
  return $l(_u, t, n, i, !0) && $l(r, e, _u[0], _u[1]);
}
function $l(r, t, e, n, i) {
  if (t.getBoundingClientRect && $.domSupported && !Hg(t)) {
    var a = t[Wc] || (t[Wc] = {}), o = tS(t, a), s = eS(o, a, i);
    if (s)
      return s(r, e, n), !0;
  }
  return !1;
}
function tS(r, t) {
  var e = t.markers;
  if (e)
    return e;
  e = t.markers = [];
  for (var n = ["left", "right"], i = ["top", "bottom"], a = 0; a < 4; a++) {
    var o = document.createElement("div"), s = o.style, u = a % 2, l = (a >> 1) % 2;
    s.cssText = [
      "position: absolute",
      "visibility: hidden",
      "padding: 0",
      "margin: 0",
      "border-width: 0",
      "user-select: none",
      "width:0",
      "height:0",
      n[u] + ":0",
      i[l] + ":0",
      n[1 - u] + ":auto",
      i[1 - l] + ":auto",
      ""
    ].join("!important;"), r.appendChild(o), e.push(o);
  }
  return e;
}
function eS(r, t, e) {
  for (var n = e ? "invTrans" : "trans", i = t[n], a = t.srcCoords, o = [], s = [], u = !0, l = 0; l < 4; l++) {
    var f = r[l].getBoundingClientRect(), h = 2 * l, v = f.left, c = f.top;
    o.push(v, c), u = u && a && v === a[h] && c === a[h + 1], s.push(r[l].offsetLeft, r[l].offsetTop);
  }
  return u && i ? i : (t.srcCoords = o, t[n] = e ? Hc(s, o) : Hc(o, s));
}
function Hg(r) {
  return r.nodeName.toUpperCase() === "CANVAS";
}
var rS = /([&<>"'])/g, nS = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
function qt(r) {
  return r == null ? "" : (r + "").replace(rS, function(t, e) {
    return nS[e];
  });
}
var iS = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Su = [], aS = $.browser.firefox && +$.browser.version.split(".")[0] < 39;
function Zl(r, t, e, n) {
  return e = e || {}, n ? Uc(r, t, e) : aS && t.layerX != null && t.layerX !== t.offsetX ? (e.zrX = t.layerX, e.zrY = t.layerY) : t.offsetX != null ? (e.zrX = t.offsetX, e.zrY = t.offsetY) : Uc(r, t, e), e;
}
function Uc(r, t, e) {
  if ($.domSupported && r.getBoundingClientRect) {
    var n = t.clientX, i = t.clientY;
    if (Hg(r)) {
      var a = r.getBoundingClientRect();
      e.zrX = n - a.left, e.zrY = i - a.top;
      return;
    } else if ($l(Su, r, n, i)) {
      e.zrX = Su[0], e.zrY = Su[1];
      return;
    }
  }
  e.zrX = e.zrY = 0;
}
function lh(r) {
  return r || window.event;
}
function ge(r, t, e) {
  if (t = lh(t), t.zrX != null)
    return t;
  var n = t.type, i = n && n.indexOf("touch") >= 0;
  if (i) {
    var o = n !== "touchend" ? t.targetTouches[0] : t.changedTouches[0];
    o && Zl(r, o, t, e);
  } else {
    Zl(r, t, t, e);
    var a = oS(t);
    t.zrDelta = a ? a / 120 : -(t.detail || 0) / 3;
  }
  var s = t.button;
  return t.which == null && s !== void 0 && iS.test(t.type) && (t.which = s & 1 ? 1 : s & 2 ? 3 : s & 4 ? 2 : 0), t;
}
function oS(r) {
  var t = r.wheelDelta;
  if (t)
    return t;
  var e = r.deltaX, n = r.deltaY;
  if (e == null || n == null)
    return t;
  var i = Math.abs(n !== 0 ? n : e), a = n > 0 ? -1 : n < 0 ? 1 : e > 0 ? -1 : 1;
  return 3 * i * a;
}
function sS(r, t, e, n) {
  r.addEventListener(t, e, n);
}
function uS(r, t, e, n) {
  r.removeEventListener(t, e, n);
}
var Wg = function(r) {
  r.preventDefault(), r.stopPropagation(), r.cancelBubble = !0;
}, lS = (function() {
  function r() {
    this._track = [];
  }
  return r.prototype.recognize = function(t, e, n) {
    return this._doTrack(t, e, n), this._recognize(t);
  }, r.prototype.clear = function() {
    return this._track.length = 0, this;
  }, r.prototype._doTrack = function(t, e, n) {
    var i = t.touches;
    if (i) {
      for (var a = {
        points: [],
        touches: [],
        target: e,
        event: t
      }, o = 0, s = i.length; o < s; o++) {
        var u = i[o], l = Zl(n, u, {});
        a.points.push([l.zrX, l.zrY]), a.touches.push(u);
      }
      this._track.push(a);
    }
  }, r.prototype._recognize = function(t) {
    for (var e in bu)
      if (bu.hasOwnProperty(e)) {
        var n = bu[e](this._track, t);
        if (n)
          return n;
      }
  }, r;
})();
function Yc(r) {
  var t = r[1][0] - r[0][0], e = r[1][1] - r[0][1];
  return Math.sqrt(t * t + e * e);
}
function fS(r) {
  return [
    (r[0][0] + r[1][0]) / 2,
    (r[0][1] + r[1][1]) / 2
  ];
}
var bu = {
  pinch: function(r, t) {
    var e = r.length;
    if (e) {
      var n = (r[e - 1] || {}).points, i = (r[e - 2] || {}).points || n;
      if (i && i.length > 1 && n && n.length > 1) {
        var a = Yc(n) / Yc(i);
        !isFinite(a) && (a = 1), t.pinchScale = a;
        var o = fS(n);
        return t.pinchX = o[0], t.pinchY = o[1], {
          type: "pinch",
          target: r[0].target,
          event: t
        };
      }
    }
  }
};
function Br() {
  return [1, 0, 0, 1, 0, 0];
}
function Ra(r) {
  return r[0] = 1, r[1] = 0, r[2] = 0, r[3] = 1, r[4] = 0, r[5] = 0, r;
}
function fh(r, t) {
  return r[0] = t[0], r[1] = t[1], r[2] = t[2], r[3] = t[3], r[4] = t[4], r[5] = t[5], r;
}
function Fr(r, t, e) {
  var n = t[0] * e[0] + t[2] * e[1], i = t[1] * e[0] + t[3] * e[1], a = t[0] * e[2] + t[2] * e[3], o = t[1] * e[2] + t[3] * e[3], s = t[0] * e[4] + t[2] * e[5] + t[4], u = t[1] * e[4] + t[3] * e[5] + t[5];
  return r[0] = n, r[1] = i, r[2] = a, r[3] = o, r[4] = s, r[5] = u, r;
}
function Qo(r, t, e) {
  return r[0] = t[0], r[1] = t[1], r[2] = t[2], r[3] = t[3], r[4] = t[4] + e[0], r[5] = t[5] + e[1], r;
}
function Rs(r, t, e, n) {
  n === void 0 && (n = [0, 0]);
  var i = t[0], a = t[2], o = t[4], s = t[1], u = t[3], l = t[5], f = Math.sin(e), h = Math.cos(e);
  return r[0] = i * h + s * f, r[1] = -i * f + s * h, r[2] = a * h + u * f, r[3] = -a * f + h * u, r[4] = h * (o - n[0]) + f * (l - n[1]) + n[0], r[5] = h * (l - n[1]) - f * (o - n[0]) + n[1], r;
}
function Ug(r, t, e) {
  var n = e[0], i = e[1];
  return r[0] = t[0] * n, r[1] = t[1] * i, r[2] = t[2] * n, r[3] = t[3] * i, r[4] = t[4] * n, r[5] = t[5] * i, r;
}
function Na(r, t) {
  var e = t[0], n = t[2], i = t[4], a = t[1], o = t[3], s = t[5], u = e * o - a * n;
  return u ? (u = 1 / u, r[0] = o * u, r[1] = -a * u, r[2] = -n * u, r[3] = e * u, r[4] = (n * s - o * i) * u, r[5] = (a * i - e * s) * u, r) : null;
}
function hS(r) {
  var t = Br();
  return fh(t, r), t;
}
const cS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clone: hS,
  copy: fh,
  create: Br,
  identity: Ra,
  invert: Na,
  mul: Fr,
  rotate: Rs,
  scale: Ug,
  translate: Qo
}, Symbol.toStringTag, { value: "Module" }));
var j = (function() {
  function r(t, e) {
    this.x = t || 0, this.y = e || 0;
  }
  return r.prototype.copy = function(t) {
    return this.x = t.x, this.y = t.y, this;
  }, r.prototype.clone = function() {
    return new r(this.x, this.y);
  }, r.prototype.set = function(t, e) {
    return this.x = t, this.y = e, this;
  }, r.prototype.equal = function(t) {
    return t.x === this.x && t.y === this.y;
  }, r.prototype.add = function(t) {
    return this.x += t.x, this.y += t.y, this;
  }, r.prototype.scale = function(t) {
    this.x *= t, this.y *= t;
  }, r.prototype.scaleAndAdd = function(t, e) {
    this.x += t.x * e, this.y += t.y * e;
  }, r.prototype.sub = function(t) {
    return this.x -= t.x, this.y -= t.y, this;
  }, r.prototype.dot = function(t) {
    return this.x * t.x + this.y * t.y;
  }, r.prototype.len = function() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }, r.prototype.lenSquare = function() {
    return this.x * this.x + this.y * this.y;
  }, r.prototype.normalize = function() {
    var t = this.len();
    return this.x /= t, this.y /= t, this;
  }, r.prototype.distance = function(t) {
    var e = this.x - t.x, n = this.y - t.y;
    return Math.sqrt(e * e + n * n);
  }, r.prototype.distanceSquare = function(t) {
    var e = this.x - t.x, n = this.y - t.y;
    return e * e + n * n;
  }, r.prototype.negate = function() {
    return this.x = -this.x, this.y = -this.y, this;
  }, r.prototype.transform = function(t) {
    if (t) {
      var e = this.x, n = this.y;
      return this.x = t[0] * e + t[2] * n + t[4], this.y = t[1] * e + t[3] * n + t[5], this;
    }
  }, r.prototype.toArray = function(t) {
    return t[0] = this.x, t[1] = this.y, t;
  }, r.prototype.fromArray = function(t) {
    this.x = t[0], this.y = t[1];
  }, r.set = function(t, e, n) {
    t.x = e, t.y = n;
  }, r.copy = function(t, e) {
    t.x = e.x, t.y = e.y;
  }, r.len = function(t) {
    return Math.sqrt(t.x * t.x + t.y * t.y);
  }, r.lenSquare = function(t) {
    return t.x * t.x + t.y * t.y;
  }, r.dot = function(t, e) {
    return t.x * e.x + t.y * e.y;
  }, r.add = function(t, e, n) {
    t.x = e.x + n.x, t.y = e.y + n.y;
  }, r.sub = function(t, e, n) {
    t.x = e.x - n.x, t.y = e.y - n.y;
  }, r.scale = function(t, e, n) {
    t.x = e.x * n, t.y = e.y * n;
  }, r.scaleAndAdd = function(t, e, n, i) {
    t.x = e.x + n.x * i, t.y = e.y + n.y * i;
  }, r.lerp = function(t, e, n, i) {
    var a = 1 - i;
    t.x = a * e.x + i * n.x, t.y = a * e.y + i * n.y;
  }, r;
})(), ja = Math.min, Ka = Math.max, Xr = new j(), qr = new j(), $r = new j(), Zr = new j(), Mi = new j(), Ei = new j(), st = (function() {
  function r(t, e, n, i) {
    n < 0 && (t = t + n, n = -n), i < 0 && (e = e + i, i = -i), this.x = t, this.y = e, this.width = n, this.height = i;
  }
  return r.prototype.union = function(t) {
    var e = ja(t.x, this.x), n = ja(t.y, this.y);
    isFinite(this.x) && isFinite(this.width) ? this.width = Ka(t.x + t.width, this.x + this.width) - e : this.width = t.width, isFinite(this.y) && isFinite(this.height) ? this.height = Ka(t.y + t.height, this.y + this.height) - n : this.height = t.height, this.x = e, this.y = n;
  }, r.prototype.applyTransform = function(t) {
    r.applyTransform(this, this, t);
  }, r.prototype.calculateTransform = function(t) {
    var e = this, n = t.width / e.width, i = t.height / e.height, a = Br();
    return Qo(a, a, [-e.x, -e.y]), Ug(a, a, [n, i]), Qo(a, a, [t.x, t.y]), a;
  }, r.prototype.intersect = function(t, e) {
    if (!t)
      return !1;
    t instanceof r || (t = r.create(t));
    var n = this, i = n.x, a = n.x + n.width, o = n.y, s = n.y + n.height, u = t.x, l = t.x + t.width, f = t.y, h = t.y + t.height, v = !(a < u || l < i || s < f || h < o);
    if (e) {
      var c = 1 / 0, d = 0, p = Math.abs(a - u), g = Math.abs(l - i), y = Math.abs(s - f), m = Math.abs(h - o), _ = Math.min(p, g), S = Math.min(y, m);
      a < u || l < i ? _ > d && (d = _, p < g ? j.set(Ei, -p, 0) : j.set(Ei, g, 0)) : _ < c && (c = _, p < g ? j.set(Mi, p, 0) : j.set(Mi, -g, 0)), s < f || h < o ? S > d && (d = S, y < m ? j.set(Ei, 0, -y) : j.set(Ei, 0, m)) : _ < c && (c = _, y < m ? j.set(Mi, 0, y) : j.set(Mi, 0, -m));
    }
    return e && j.copy(e, v ? Mi : Ei), v;
  }, r.prototype.contain = function(t, e) {
    var n = this;
    return t >= n.x && t <= n.x + n.width && e >= n.y && e <= n.y + n.height;
  }, r.prototype.clone = function() {
    return new r(this.x, this.y, this.width, this.height);
  }, r.prototype.copy = function(t) {
    r.copy(this, t);
  }, r.prototype.plain = function() {
    return {
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height
    };
  }, r.prototype.isFinite = function() {
    return isFinite(this.x) && isFinite(this.y) && isFinite(this.width) && isFinite(this.height);
  }, r.prototype.isZero = function() {
    return this.width === 0 || this.height === 0;
  }, r.create = function(t) {
    return new r(t.x, t.y, t.width, t.height);
  }, r.copy = function(t, e) {
    t.x = e.x, t.y = e.y, t.width = e.width, t.height = e.height;
  }, r.applyTransform = function(t, e, n) {
    if (!n) {
      t !== e && r.copy(t, e);
      return;
    }
    if (n[1] < 1e-5 && n[1] > -1e-5 && n[2] < 1e-5 && n[2] > -1e-5) {
      var i = n[0], a = n[3], o = n[4], s = n[5];
      t.x = e.x * i + o, t.y = e.y * a + s, t.width = e.width * i, t.height = e.height * a, t.width < 0 && (t.x += t.width, t.width = -t.width), t.height < 0 && (t.y += t.height, t.height = -t.height);
      return;
    }
    Xr.x = $r.x = e.x, Xr.y = Zr.y = e.y, qr.x = Zr.x = e.x + e.width, qr.y = $r.y = e.y + e.height, Xr.transform(n), Zr.transform(n), qr.transform(n), $r.transform(n), t.x = ja(Xr.x, qr.x, $r.x, Zr.x), t.y = ja(Xr.y, qr.y, $r.y, Zr.y);
    var u = Ka(Xr.x, qr.x, $r.x, Zr.x), l = Ka(Xr.y, qr.y, $r.y, Zr.y);
    t.width = u - t.x, t.height = l - t.y;
  }, r;
})(), Yg = "silent";
function vS(r, t, e) {
  return {
    type: r,
    event: e,
    target: t.target,
    topTarget: t.topTarget,
    cancelBubble: !1,
    offsetX: e.zrX,
    offsetY: e.zrY,
    gestureEvent: e.gestureEvent,
    pinchX: e.pinchX,
    pinchY: e.pinchY,
    pinchScale: e.pinchScale,
    wheelDelta: e.zrDelta,
    zrByTouch: e.zrByTouch,
    which: e.which,
    stop: dS
  };
}
function dS() {
  Wg(this.event);
}
var pS = (function(r) {
  z(t, r);
  function t() {
    var e = r !== null && r.apply(this, arguments) || this;
    return e.handler = null, e;
  }
  return t.prototype.dispose = function() {
  }, t.prototype.setCursor = function() {
  }, t;
})(Ze), Pi = /* @__PURE__ */ (function() {
  function r(t, e) {
    this.x = t, this.y = e;
  }
  return r;
})(), gS = [
  "click",
  "dblclick",
  "mousewheel",
  "mouseout",
  "mouseup",
  "mousedown",
  "mousemove",
  "contextmenu"
], wu = new st(0, 0, 0, 0), Xg = (function(r) {
  z(t, r);
  function t(e, n, i, a, o) {
    var s = r.call(this) || this;
    return s._hovered = new Pi(0, 0), s.storage = e, s.painter = n, s.painterRoot = a, s._pointerSize = o, i = i || new pS(), s.proxy = null, s.setHandlerProxy(i), s._draggingMgr = new K1(s), s;
  }
  return t.prototype.setHandlerProxy = function(e) {
    this.proxy && this.proxy.dispose(), e && (M(gS, function(n) {
      e.on && e.on(n, this[n], this);
    }, this), e.handler = this), this.proxy = e;
  }, t.prototype.mousemove = function(e) {
    var n = e.zrX, i = e.zrY, a = qg(this, n, i), o = this._hovered, s = o.target;
    s && !s.__zr && (o = this.findHover(o.x, o.y), s = o.target);
    var u = this._hovered = a ? new Pi(n, i) : this.findHover(n, i), l = u.target, f = this.proxy;
    f.setCursor && f.setCursor(l ? l.cursor : "default"), s && l !== s && this.dispatchToElement(o, "mouseout", e), this.dispatchToElement(u, "mousemove", e), l && l !== s && this.dispatchToElement(u, "mouseover", e);
  }, t.prototype.mouseout = function(e) {
    var n = e.zrEventControl;
    n !== "only_globalout" && this.dispatchToElement(this._hovered, "mouseout", e), n !== "no_globalout" && this.trigger("globalout", { type: "globalout", event: e });
  }, t.prototype.resize = function() {
    this._hovered = new Pi(0, 0);
  }, t.prototype.dispatch = function(e, n) {
    var i = this[e];
    i && i.call(this, n);
  }, t.prototype.dispose = function() {
    this.proxy.dispose(), this.storage = null, this.proxy = null, this.painter = null;
  }, t.prototype.setCursorStyle = function(e) {
    var n = this.proxy;
    n.setCursor && n.setCursor(e);
  }, t.prototype.dispatchToElement = function(e, n, i) {
    e = e || {};
    var a = e.target;
    if (!(a && a.silent)) {
      for (var o = "on" + n, s = vS(n, e, i); a && (a[o] && (s.cancelBubble = !!a[o].call(a, s)), a.trigger(n, s), a = a.__hostTarget ? a.__hostTarget : a.parent, !s.cancelBubble); )
        ;
      s.cancelBubble || (this.trigger(n, s), this.painter && this.painter.eachOtherLayer && this.painter.eachOtherLayer(function(u) {
        typeof u[o] == "function" && u[o].call(u, s), u.trigger && u.trigger(n, s);
      }));
    }
  }, t.prototype.findHover = function(e, n, i) {
    var a = this.storage.getDisplayList(), o = new Pi(e, n);
    if (Xc(a, o, e, n, i), this._pointerSize && !o.target) {
      for (var s = [], u = this._pointerSize, l = u / 2, f = new st(e - l, n - l, u, u), h = a.length - 1; h >= 0; h--) {
        var v = a[h];
        v !== i && !v.ignore && !v.ignoreCoarsePointer && (!v.parent || !v.parent.ignoreCoarsePointer) && (wu.copy(v.getBoundingRect()), v.transform && wu.applyTransform(v.transform), wu.intersect(f) && s.push(v));
      }
      if (s.length)
        for (var c = 4, d = Math.PI / 12, p = Math.PI * 2, g = 0; g < l; g += c)
          for (var y = 0; y < p; y += d) {
            var m = e + g * Math.cos(y), _ = n + g * Math.sin(y);
            if (Xc(s, o, m, _, i), o.target)
              return o;
          }
    }
    return o;
  }, t.prototype.processGesture = function(e, n) {
    this._gestureMgr || (this._gestureMgr = new lS());
    var i = this._gestureMgr;
    n === "start" && i.clear();
    var a = i.recognize(e, this.findHover(e.zrX, e.zrY, null).target, this.proxy.dom);
    if (n === "end" && i.clear(), a) {
      var o = a.type;
      e.gestureEvent = o;
      var s = new Pi();
      s.target = a.target, this.dispatchToElement(s, o, a.event);
    }
  }, t;
})(Ze);
M(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function(r) {
  Xg.prototype[r] = function(t) {
    var e = t.zrX, n = t.zrY, i = qg(this, e, n), a, o;
    if ((r !== "mouseup" || !i) && (a = this.findHover(e, n), o = a.target), r === "mousedown")
      this._downEl = o, this._downPoint = [t.zrX, t.zrY], this._upEl = o;
    else if (r === "mouseup")
      this._upEl = o;
    else if (r === "click") {
      if (this._downEl !== this._upEl || !this._downPoint || Ko(this._downPoint, [t.zrX, t.zrY]) > 4)
        return;
      this._downPoint = null;
    }
    this.dispatchToElement(a, r, t);
  };
});
function yS(r, t, e) {
  if (r[r.rectHover ? "rectContain" : "contain"](t, e)) {
    for (var n = r, i = void 0, a = !1; n; ) {
      if (n.ignoreClip && (a = !0), !a) {
        var o = n.getClipPath();
        if (o && !o.contain(t, e))
          return !1;
      }
      n.silent && (i = !0);
      var s = n.__hostTarget;
      n = s || n.parent;
    }
    return i ? Yg : !0;
  }
  return !1;
}
function Xc(r, t, e, n, i) {
  for (var a = r.length - 1; a >= 0; a--) {
    var o = r[a], s = void 0;
    if (o !== i && !o.ignore && (s = yS(o, e, n)) && (!t.topTarget && (t.topTarget = o), s !== Yg)) {
      t.target = o;
      break;
    }
  }
}
function qg(r, t, e) {
  var n = r.painter;
  return t < 0 || t > n.getWidth() || e < 0 || e > n.getHeight();
}
var $g = 32, Ii = 7;
function mS(r) {
  for (var t = 0; r >= $g; )
    t |= r & 1, r >>= 1;
  return r + t;
}
function qc(r, t, e, n) {
  var i = t + 1;
  if (i === e)
    return 1;
  if (n(r[i++], r[t]) < 0) {
    for (; i < e && n(r[i], r[i - 1]) < 0; )
      i++;
    _S(r, t, i);
  } else
    for (; i < e && n(r[i], r[i - 1]) >= 0; )
      i++;
  return i - t;
}
function _S(r, t, e) {
  for (e--; t < e; ) {
    var n = r[t];
    r[t++] = r[e], r[e--] = n;
  }
}
function $c(r, t, e, n, i) {
  for (n === t && n++; n < e; n++) {
    for (var a = r[n], o = t, s = n, u; o < s; )
      u = o + s >>> 1, i(a, r[u]) < 0 ? s = u : o = u + 1;
    var l = n - o;
    switch (l) {
      case 3:
        r[o + 3] = r[o + 2];
      case 2:
        r[o + 2] = r[o + 1];
      case 1:
        r[o + 1] = r[o];
        break;
      default:
        for (; l > 0; )
          r[o + l] = r[o + l - 1], l--;
    }
    r[o] = a;
  }
}
function xu(r, t, e, n, i, a) {
  var o = 0, s = 0, u = 1;
  if (a(r, t[e + i]) > 0) {
    for (s = n - i; u < s && a(r, t[e + i + u]) > 0; )
      o = u, u = (u << 1) + 1, u <= 0 && (u = s);
    u > s && (u = s), o += i, u += i;
  } else {
    for (s = i + 1; u < s && a(r, t[e + i - u]) <= 0; )
      o = u, u = (u << 1) + 1, u <= 0 && (u = s);
    u > s && (u = s);
    var l = o;
    o = i - u, u = i - l;
  }
  for (o++; o < u; ) {
    var f = o + (u - o >>> 1);
    a(r, t[e + f]) > 0 ? o = f + 1 : u = f;
  }
  return u;
}
function Tu(r, t, e, n, i, a) {
  var o = 0, s = 0, u = 1;
  if (a(r, t[e + i]) < 0) {
    for (s = i + 1; u < s && a(r, t[e + i - u]) < 0; )
      o = u, u = (u << 1) + 1, u <= 0 && (u = s);
    u > s && (u = s);
    var l = o;
    o = i - u, u = i - l;
  } else {
    for (s = n - i; u < s && a(r, t[e + i + u]) >= 0; )
      o = u, u = (u << 1) + 1, u <= 0 && (u = s);
    u > s && (u = s), o += i, u += i;
  }
  for (o++; o < u; ) {
    var f = o + (u - o >>> 1);
    a(r, t[e + f]) < 0 ? u = f : o = f + 1;
  }
  return u;
}
function SS(r, t) {
  var e = Ii, n, i, a = 0, o = [];
  n = [], i = [];
  function s(c, d) {
    n[a] = c, i[a] = d, a += 1;
  }
  function u() {
    for (; a > 1; ) {
      var c = a - 2;
      if (c >= 1 && i[c - 1] <= i[c] + i[c + 1] || c >= 2 && i[c - 2] <= i[c] + i[c - 1])
        i[c - 1] < i[c + 1] && c--;
      else if (i[c] > i[c + 1])
        break;
      f(c);
    }
  }
  function l() {
    for (; a > 1; ) {
      var c = a - 2;
      c > 0 && i[c - 1] < i[c + 1] && c--, f(c);
    }
  }
  function f(c) {
    var d = n[c], p = i[c], g = n[c + 1], y = i[c + 1];
    i[c] = p + y, c === a - 3 && (n[c + 1] = n[c + 2], i[c + 1] = i[c + 2]), a--;
    var m = Tu(r[g], r, d, p, 0, t);
    d += m, p -= m, p !== 0 && (y = xu(r[d + p - 1], r, g, y, y - 1, t), y !== 0 && (p <= y ? h(d, p, g, y) : v(d, p, g, y)));
  }
  function h(c, d, p, g) {
    var y = 0;
    for (y = 0; y < d; y++)
      o[y] = r[c + y];
    var m = 0, _ = p, S = c;
    if (r[S++] = r[_++], --g === 0) {
      for (y = 0; y < d; y++)
        r[S + y] = o[m + y];
      return;
    }
    if (d === 1) {
      for (y = 0; y < g; y++)
        r[S + y] = r[_ + y];
      r[S + g] = o[m];
      return;
    }
    for (var w = e, b, x, T; ; ) {
      b = 0, x = 0, T = !1;
      do
        if (t(r[_], o[m]) < 0) {
          if (r[S++] = r[_++], x++, b = 0, --g === 0) {
            T = !0;
            break;
          }
        } else if (r[S++] = o[m++], b++, x = 0, --d === 1) {
          T = !0;
          break;
        }
      while ((b | x) < w);
      if (T)
        break;
      do {
        if (b = Tu(r[_], o, m, d, 0, t), b !== 0) {
          for (y = 0; y < b; y++)
            r[S + y] = o[m + y];
          if (S += b, m += b, d -= b, d <= 1) {
            T = !0;
            break;
          }
        }
        if (r[S++] = r[_++], --g === 0) {
          T = !0;
          break;
        }
        if (x = xu(o[m], r, _, g, 0, t), x !== 0) {
          for (y = 0; y < x; y++)
            r[S + y] = r[_ + y];
          if (S += x, _ += x, g -= x, g === 0) {
            T = !0;
            break;
          }
        }
        if (r[S++] = o[m++], --d === 1) {
          T = !0;
          break;
        }
        w--;
      } while (b >= Ii || x >= Ii);
      if (T)
        break;
      w < 0 && (w = 0), w += 2;
    }
    if (e = w, e < 1 && (e = 1), d === 1) {
      for (y = 0; y < g; y++)
        r[S + y] = r[_ + y];
      r[S + g] = o[m];
    } else {
      if (d === 0)
        throw new Error();
      for (y = 0; y < d; y++)
        r[S + y] = o[m + y];
    }
  }
  function v(c, d, p, g) {
    var y = 0;
    for (y = 0; y < g; y++)
      o[y] = r[p + y];
    var m = c + d - 1, _ = g - 1, S = p + g - 1, w = 0, b = 0;
    if (r[S--] = r[m--], --d === 0) {
      for (w = S - (g - 1), y = 0; y < g; y++)
        r[w + y] = o[y];
      return;
    }
    if (g === 1) {
      for (S -= d, m -= d, b = S + 1, w = m + 1, y = d - 1; y >= 0; y--)
        r[b + y] = r[w + y];
      r[S] = o[_];
      return;
    }
    for (var x = e; ; ) {
      var T = 0, D = 0, A = !1;
      do
        if (t(o[_], r[m]) < 0) {
          if (r[S--] = r[m--], T++, D = 0, --d === 0) {
            A = !0;
            break;
          }
        } else if (r[S--] = o[_--], D++, T = 0, --g === 1) {
          A = !0;
          break;
        }
      while ((T | D) < x);
      if (A)
        break;
      do {
        if (T = d - Tu(o[_], r, c, d, d - 1, t), T !== 0) {
          for (S -= T, m -= T, d -= T, b = S + 1, w = m + 1, y = T - 1; y >= 0; y--)
            r[b + y] = r[w + y];
          if (d === 0) {
            A = !0;
            break;
          }
        }
        if (r[S--] = o[_--], --g === 1) {
          A = !0;
          break;
        }
        if (D = g - xu(r[m], o, 0, g, g - 1, t), D !== 0) {
          for (S -= D, _ -= D, g -= D, b = S + 1, w = _ + 1, y = 0; y < D; y++)
            r[b + y] = o[w + y];
          if (g <= 1) {
            A = !0;
            break;
          }
        }
        if (r[S--] = r[m--], --d === 0) {
          A = !0;
          break;
        }
        x--;
      } while (T >= Ii || D >= Ii);
      if (A)
        break;
      x < 0 && (x = 0), x += 2;
    }
    if (e = x, e < 1 && (e = 1), g === 1) {
      for (S -= d, m -= d, b = S + 1, w = m + 1, y = d - 1; y >= 0; y--)
        r[b + y] = r[w + y];
      r[S] = o[_];
    } else {
      if (g === 0)
        throw new Error();
      for (w = S - (g - 1), y = 0; y < g; y++)
        r[w + y] = o[y];
    }
  }
  return {
    mergeRuns: u,
    forceMergeRuns: l,
    pushRun: s
  };
}
function Bo(r, t, e, n) {
  e || (e = 0), n || (n = r.length);
  var i = n - e;
  if (!(i < 2)) {
    var a = 0;
    if (i < $g) {
      a = qc(r, e, n, t), $c(r, e, n, e + a, t);
      return;
    }
    var o = SS(r, t), s = mS(i);
    do {
      if (a = qc(r, e, n, t), a < s) {
        var u = i;
        u > s && (u = s), $c(r, e, e + u, e + a, t), a = u;
      }
      o.pushRun(e, a), o.mergeRuns(), i -= a, e += a;
    } while (i !== 0);
    o.forceMergeRuns();
  }
}
var ue = 1, $i = 2, Qn = 4, Zc = !1;
function Cu() {
  Zc || (Zc = !0, console.warn("z / z2 / zlevel of displayable is invalid, which may cause unexpected errors"));
}
function jc(r, t) {
  return r.zlevel === t.zlevel ? r.z === t.z ? r.z2 - t.z2 : r.z - t.z : r.zlevel - t.zlevel;
}
var bS = (function() {
  function r() {
    this._roots = [], this._displayList = [], this._displayListLen = 0, this.displayableSortFunc = jc;
  }
  return r.prototype.traverse = function(t, e) {
    for (var n = 0; n < this._roots.length; n++)
      this._roots[n].traverse(t, e);
  }, r.prototype.getDisplayList = function(t, e) {
    e = e || !1;
    var n = this._displayList;
    return (t || !n.length) && this.updateDisplayList(e), n;
  }, r.prototype.updateDisplayList = function(t) {
    this._displayListLen = 0;
    for (var e = this._roots, n = this._displayList, i = 0, a = e.length; i < a; i++)
      this._updateAndAddDisplayable(e[i], null, t);
    n.length = this._displayListLen, Bo(n, jc);
  }, r.prototype._updateAndAddDisplayable = function(t, e, n) {
    if (!(t.ignore && !n)) {
      t.beforeUpdate(), t.update(), t.afterUpdate();
      var i = t.getClipPath();
      if (t.ignoreClip)
        e = null;
      else if (i) {
        e ? e = e.slice() : e = [];
        for (var a = i, o = t; a; )
          a.parent = o, a.updateTransform(), e.push(a), o = a, a = a.getClipPath();
      }
      if (t.childrenRef) {
        for (var s = t.childrenRef(), u = 0; u < s.length; u++) {
          var l = s[u];
          t.__dirty && (l.__dirty |= ue), this._updateAndAddDisplayable(l, e, n);
        }
        t.__dirty = 0;
      } else {
        var f = t;
        e && e.length ? f.__clipPaths = e : f.__clipPaths && f.__clipPaths.length > 0 && (f.__clipPaths = []), isNaN(f.z) && (Cu(), f.z = 0), isNaN(f.z2) && (Cu(), f.z2 = 0), isNaN(f.zlevel) && (Cu(), f.zlevel = 0), this._displayList[this._displayListLen++] = f;
      }
      var h = t.getDecalElement && t.getDecalElement();
      h && this._updateAndAddDisplayable(h, e, n);
      var v = t.getTextGuideLine();
      v && this._updateAndAddDisplayable(v, e, n);
      var c = t.getTextContent();
      c && this._updateAndAddDisplayable(c, e, n);
    }
  }, r.prototype.addRoot = function(t) {
    t.__zr && t.__zr.storage === this || this._roots.push(t);
  }, r.prototype.delRoot = function(t) {
    if (t instanceof Array) {
      for (var e = 0, n = t.length; e < n; e++)
        this.delRoot(t[e]);
      return;
    }
    var i = ht(this._roots, t);
    i >= 0 && this._roots.splice(i, 1);
  }, r.prototype.delAllRoots = function() {
    this._roots = [], this._displayList = [], this._displayListLen = 0;
  }, r.prototype.getRoots = function() {
    return this._roots;
  }, r.prototype.dispose = function() {
    this._displayList = null, this._roots = null;
  }, r;
})(), Jo;
Jo = $.hasGlobalWindow && (window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window) || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function(r) {
  return setTimeout(r, 16);
};
var na = {
  linear: function(r) {
    return r;
  },
  quadraticIn: function(r) {
    return r * r;
  },
  quadraticOut: function(r) {
    return r * (2 - r);
  },
  quadraticInOut: function(r) {
    return (r *= 2) < 1 ? 0.5 * r * r : -0.5 * (--r * (r - 2) - 1);
  },
  cubicIn: function(r) {
    return r * r * r;
  },
  cubicOut: function(r) {
    return --r * r * r + 1;
  },
  cubicInOut: function(r) {
    return (r *= 2) < 1 ? 0.5 * r * r * r : 0.5 * ((r -= 2) * r * r + 2);
  },
  quarticIn: function(r) {
    return r * r * r * r;
  },
  quarticOut: function(r) {
    return 1 - --r * r * r * r;
  },
  quarticInOut: function(r) {
    return (r *= 2) < 1 ? 0.5 * r * r * r * r : -0.5 * ((r -= 2) * r * r * r - 2);
  },
  quinticIn: function(r) {
    return r * r * r * r * r;
  },
  quinticOut: function(r) {
    return --r * r * r * r * r + 1;
  },
  quinticInOut: function(r) {
    return (r *= 2) < 1 ? 0.5 * r * r * r * r * r : 0.5 * ((r -= 2) * r * r * r * r + 2);
  },
  sinusoidalIn: function(r) {
    return 1 - Math.cos(r * Math.PI / 2);
  },
  sinusoidalOut: function(r) {
    return Math.sin(r * Math.PI / 2);
  },
  sinusoidalInOut: function(r) {
    return 0.5 * (1 - Math.cos(Math.PI * r));
  },
  exponentialIn: function(r) {
    return r === 0 ? 0 : Math.pow(1024, r - 1);
  },
  exponentialOut: function(r) {
    return r === 1 ? 1 : 1 - Math.pow(2, -10 * r);
  },
  exponentialInOut: function(r) {
    return r === 0 ? 0 : r === 1 ? 1 : (r *= 2) < 1 ? 0.5 * Math.pow(1024, r - 1) : 0.5 * (-Math.pow(2, -10 * (r - 1)) + 2);
  },
  circularIn: function(r) {
    return 1 - Math.sqrt(1 - r * r);
  },
  circularOut: function(r) {
    return Math.sqrt(1 - --r * r);
  },
  circularInOut: function(r) {
    return (r *= 2) < 1 ? -0.5 * (Math.sqrt(1 - r * r) - 1) : 0.5 * (Math.sqrt(1 - (r -= 2) * r) + 1);
  },
  elasticIn: function(r) {
    var t, e = 0.1, n = 0.4;
    return r === 0 ? 0 : r === 1 ? 1 : (!e || e < 1 ? (e = 1, t = n / 4) : t = n * Math.asin(1 / e) / (2 * Math.PI), -(e * Math.pow(2, 10 * (r -= 1)) * Math.sin((r - t) * (2 * Math.PI) / n)));
  },
  elasticOut: function(r) {
    var t, e = 0.1, n = 0.4;
    return r === 0 ? 0 : r === 1 ? 1 : (!e || e < 1 ? (e = 1, t = n / 4) : t = n * Math.asin(1 / e) / (2 * Math.PI), e * Math.pow(2, -10 * r) * Math.sin((r - t) * (2 * Math.PI) / n) + 1);
  },
  elasticInOut: function(r) {
    var t, e = 0.1, n = 0.4;
    return r === 0 ? 0 : r === 1 ? 1 : (!e || e < 1 ? (e = 1, t = n / 4) : t = n * Math.asin(1 / e) / (2 * Math.PI), (r *= 2) < 1 ? -0.5 * (e * Math.pow(2, 10 * (r -= 1)) * Math.sin((r - t) * (2 * Math.PI) / n)) : e * Math.pow(2, -10 * (r -= 1)) * Math.sin((r - t) * (2 * Math.PI) / n) * 0.5 + 1);
  },
  backIn: function(r) {
    var t = 1.70158;
    return r * r * ((t + 1) * r - t);
  },
  backOut: function(r) {
    var t = 1.70158;
    return --r * r * ((t + 1) * r + t) + 1;
  },
  backInOut: function(r) {
    var t = 2.5949095;
    return (r *= 2) < 1 ? 0.5 * (r * r * ((t + 1) * r - t)) : 0.5 * ((r -= 2) * r * ((t + 1) * r + t) + 2);
  },
  bounceIn: function(r) {
    return 1 - na.bounceOut(1 - r);
  },
  bounceOut: function(r) {
    return r < 1 / 2.75 ? 7.5625 * r * r : r < 2 / 2.75 ? 7.5625 * (r -= 1.5 / 2.75) * r + 0.75 : r < 2.5 / 2.75 ? 7.5625 * (r -= 2.25 / 2.75) * r + 0.9375 : 7.5625 * (r -= 2.625 / 2.75) * r + 0.984375;
  },
  bounceInOut: function(r) {
    return r < 0.5 ? na.bounceIn(r * 2) * 0.5 : na.bounceOut(r * 2 - 1) * 0.5 + 0.5;
  }
}, Qa = Math.pow, Vr = Math.sqrt, ts = 1e-8, Zg = 1e-4, Kc = Vr(3), Ja = 1 / 3, We = On(), _e = On(), ni = On();
function Pr(r) {
  return r > -ts && r < ts;
}
function jg(r) {
  return r > ts || r < -ts;
}
function Rt(r, t, e, n, i) {
  var a = 1 - i;
  return a * a * (a * r + 3 * i * t) + i * i * (i * n + 3 * a * e);
}
function Qc(r, t, e, n, i) {
  var a = 1 - i;
  return 3 * (((t - r) * a + 2 * (e - t) * i) * a + (n - e) * i * i);
}
function es(r, t, e, n, i, a) {
  var o = n + 3 * (t - e) - r, s = 3 * (e - t * 2 + r), u = 3 * (t - r), l = r - i, f = s * s - 3 * o * u, h = s * u - 9 * o * l, v = u * u - 3 * s * l, c = 0;
  if (Pr(f) && Pr(h))
    if (Pr(s))
      a[0] = 0;
    else {
      var d = -u / s;
      d >= 0 && d <= 1 && (a[c++] = d);
    }
  else {
    var p = h * h - 4 * f * v;
    if (Pr(p)) {
      var g = h / f, d = -s / o + g, y = -g / 2;
      d >= 0 && d <= 1 && (a[c++] = d), y >= 0 && y <= 1 && (a[c++] = y);
    } else if (p > 0) {
      var m = Vr(p), _ = f * s + 1.5 * o * (-h + m), S = f * s + 1.5 * o * (-h - m);
      _ < 0 ? _ = -Qa(-_, Ja) : _ = Qa(_, Ja), S < 0 ? S = -Qa(-S, Ja) : S = Qa(S, Ja);
      var d = (-s - (_ + S)) / (3 * o);
      d >= 0 && d <= 1 && (a[c++] = d);
    } else {
      var w = (2 * f * s - 3 * o * h) / (2 * Vr(f * f * f)), b = Math.acos(w) / 3, x = Vr(f), T = Math.cos(b), d = (-s - 2 * x * T) / (3 * o), y = (-s + x * (T + Kc * Math.sin(b))) / (3 * o), D = (-s + x * (T - Kc * Math.sin(b))) / (3 * o);
      d >= 0 && d <= 1 && (a[c++] = d), y >= 0 && y <= 1 && (a[c++] = y), D >= 0 && D <= 1 && (a[c++] = D);
    }
  }
  return c;
}
function Kg(r, t, e, n, i) {
  var a = 6 * e - 12 * t + 6 * r, o = 9 * t + 3 * n - 3 * r - 9 * e, s = 3 * t - 3 * r, u = 0;
  if (Pr(o)) {
    if (jg(a)) {
      var l = -s / a;
      l >= 0 && l <= 1 && (i[u++] = l);
    }
  } else {
    var f = a * a - 4 * o * s;
    if (Pr(f))
      i[0] = -a / (2 * o);
    else if (f > 0) {
      var h = Vr(f), l = (-a + h) / (2 * o), v = (-a - h) / (2 * o);
      l >= 0 && l <= 1 && (i[u++] = l), v >= 0 && v <= 1 && (i[u++] = v);
    }
  }
  return u;
}
function rs(r, t, e, n, i, a) {
  var o = (t - r) * i + r, s = (e - t) * i + t, u = (n - e) * i + e, l = (s - o) * i + o, f = (u - s) * i + s, h = (f - l) * i + l;
  a[0] = r, a[1] = o, a[2] = l, a[3] = h, a[4] = h, a[5] = f, a[6] = u, a[7] = n;
}
function wS(r, t, e, n, i, a, o, s, u, l, f) {
  var h, v = 5e-3, c = 1 / 0, d, p, g, y;
  We[0] = u, We[1] = l;
  for (var m = 0; m < 1; m += 0.05)
    _e[0] = Rt(r, e, i, o, m), _e[1] = Rt(t, n, a, s, m), g = _n(We, _e), g < c && (h = m, c = g);
  c = 1 / 0;
  for (var _ = 0; _ < 32 && !(v < Zg); _++)
    d = h - v, p = h + v, _e[0] = Rt(r, e, i, o, d), _e[1] = Rt(t, n, a, s, d), g = _n(_e, We), d >= 0 && g < c ? (h = d, c = g) : (ni[0] = Rt(r, e, i, o, p), ni[1] = Rt(t, n, a, s, p), y = _n(ni, We), p <= 1 && y < c ? (h = p, c = y) : v *= 0.5);
  return Vr(c);
}
function xS(r, t, e, n, i, a, o, s, u) {
  for (var l = r, f = t, h = 0, v = 1 / u, c = 1; c <= u; c++) {
    var d = c * v, p = Rt(r, e, i, o, d), g = Rt(t, n, a, s, d), y = p - l, m = g - f;
    h += Math.sqrt(y * y + m * m), l = p, f = g;
  }
  return h;
}
function ee(r, t, e, n) {
  var i = 1 - n;
  return i * (i * r + 2 * n * t) + n * n * e;
}
function Jc(r, t, e, n) {
  return 2 * ((1 - n) * (t - r) + n * (e - t));
}
function TS(r, t, e, n, i) {
  var a = r - 2 * t + e, o = 2 * (t - r), s = r - n, u = 0;
  if (Pr(a)) {
    if (jg(o)) {
      var l = -s / o;
      l >= 0 && l <= 1 && (i[u++] = l);
    }
  } else {
    var f = o * o - 4 * a * s;
    if (Pr(f)) {
      var l = -o / (2 * a);
      l >= 0 && l <= 1 && (i[u++] = l);
    } else if (f > 0) {
      var h = Vr(f), l = (-o + h) / (2 * a), v = (-o - h) / (2 * a);
      l >= 0 && l <= 1 && (i[u++] = l), v >= 0 && v <= 1 && (i[u++] = v);
    }
  }
  return u;
}
function Qg(r, t, e) {
  var n = r + e - 2 * t;
  return n === 0 ? 0.5 : (r - t) / n;
}
function ns(r, t, e, n, i) {
  var a = (t - r) * n + r, o = (e - t) * n + t, s = (o - a) * n + a;
  i[0] = r, i[1] = a, i[2] = s, i[3] = s, i[4] = o, i[5] = e;
}
function CS(r, t, e, n, i, a, o, s, u) {
  var l, f = 5e-3, h = 1 / 0;
  We[0] = o, We[1] = s;
  for (var v = 0; v < 1; v += 0.05) {
    _e[0] = ee(r, e, i, v), _e[1] = ee(t, n, a, v);
    var c = _n(We, _e);
    c < h && (l = v, h = c);
  }
  h = 1 / 0;
  for (var d = 0; d < 32 && !(f < Zg); d++) {
    var p = l - f, g = l + f;
    _e[0] = ee(r, e, i, p), _e[1] = ee(t, n, a, p);
    var c = _n(_e, We);
    if (p >= 0 && c < h)
      l = p, h = c;
    else {
      ni[0] = ee(r, e, i, g), ni[1] = ee(t, n, a, g);
      var y = _n(ni, We);
      g <= 1 && y < h ? (l = g, h = y) : f *= 0.5;
    }
  }
  return Vr(h);
}
function DS(r, t, e, n, i, a, o) {
  for (var s = r, u = t, l = 0, f = 1 / o, h = 1; h <= o; h++) {
    var v = h * f, c = ee(r, e, i, v), d = ee(t, n, a, v), p = c - s, g = d - u;
    l += Math.sqrt(p * p + g * g), s = c, u = d;
  }
  return l;
}
var AS = /cubic-bezier\(([0-9,\.e ]+)\)/;
function Jg(r) {
  var t = r && AS.exec(r);
  if (t) {
    var e = t[1].split(","), n = +Le(e[0]), i = +Le(e[1]), a = +Le(e[2]), o = +Le(e[3]);
    if (isNaN(n + i + a + o))
      return;
    var s = [];
    return function(u) {
      return u <= 0 ? 0 : u >= 1 ? 1 : es(0, n, a, 1, u, s) && Rt(0, i, o, 1, s[0]);
    };
  }
}
var MS = (function() {
  function r(t) {
    this._inited = !1, this._startTime = 0, this._pausedTime = 0, this._paused = !1, this._life = t.life || 1e3, this._delay = t.delay || 0, this.loop = t.loop || !1, this.onframe = t.onframe || $t, this.ondestroy = t.ondestroy || $t, this.onrestart = t.onrestart || $t, t.easing && this.setEasing(t.easing);
  }
  return r.prototype.step = function(t, e) {
    if (this._inited || (this._startTime = t + this._delay, this._inited = !0), this._paused) {
      this._pausedTime += e;
      return;
    }
    var n = this._life, i = t - this._startTime - this._pausedTime, a = i / n;
    a < 0 && (a = 0), a = Math.min(a, 1);
    var o = this.easingFunc, s = o ? o(a) : a;
    if (this.onframe(s), a === 1)
      if (this.loop) {
        var u = i % n;
        this._startTime = t - u, this._pausedTime = 0, this.onrestart();
      } else
        return !0;
    return !1;
  }, r.prototype.pause = function() {
    this._paused = !0;
  }, r.prototype.resume = function() {
    this._paused = !1;
  }, r.prototype.setEasing = function(t) {
    this.easing = t, this.easingFunc = Z(t) ? t : na[t] || Jg(t);
  }, r;
})(), ty = /* @__PURE__ */ (function() {
  function r(t) {
    this.value = t;
  }
  return r;
})(), ES = (function() {
  function r() {
    this._len = 0;
  }
  return r.prototype.insert = function(t) {
    var e = new ty(t);
    return this.insertEntry(e), e;
  }, r.prototype.insertEntry = function(t) {
    this.head ? (this.tail.next = t, t.prev = this.tail, t.next = null, this.tail = t) : this.head = this.tail = t, this._len++;
  }, r.prototype.remove = function(t) {
    var e = t.prev, n = t.next;
    e ? e.next = n : this.head = n, n ? n.prev = e : this.tail = e, t.next = t.prev = null, this._len--;
  }, r.prototype.len = function() {
    return this._len;
  }, r.prototype.clear = function() {
    this.head = this.tail = null, this._len = 0;
  }, r;
})(), ka = (function() {
  function r(t) {
    this._list = new ES(), this._maxSize = 10, this._map = {}, this._maxSize = t;
  }
  return r.prototype.put = function(t, e) {
    var n = this._list, i = this._map, a = null;
    if (i[t] == null) {
      var o = n.len(), s = this._lastRemovedEntry;
      if (o >= this._maxSize && o > 0) {
        var u = n.head;
        n.remove(u), delete i[u.key], a = u.value, this._lastRemovedEntry = u;
      }
      s ? s.value = e : s = new ty(e), s.key = t, n.insertEntry(s), i[t] = s;
    }
    return a;
  }, r.prototype.get = function(t) {
    var e = this._map[t], n = this._list;
    if (e != null)
      return e !== n.tail && (n.remove(e), n.insertEntry(e)), e.value;
  }, r.prototype.clear = function() {
    this._list.clear(), this._map = {};
  }, r.prototype.len = function() {
    return this._list.len();
  }, r;
})(), tv = {
  transparent: [0, 0, 0, 0],
  aliceblue: [240, 248, 255, 1],
  antiquewhite: [250, 235, 215, 1],
  aqua: [0, 255, 255, 1],
  aquamarine: [127, 255, 212, 1],
  azure: [240, 255, 255, 1],
  beige: [245, 245, 220, 1],
  bisque: [255, 228, 196, 1],
  black: [0, 0, 0, 1],
  blanchedalmond: [255, 235, 205, 1],
  blue: [0, 0, 255, 1],
  blueviolet: [138, 43, 226, 1],
  brown: [165, 42, 42, 1],
  burlywood: [222, 184, 135, 1],
  cadetblue: [95, 158, 160, 1],
  chartreuse: [127, 255, 0, 1],
  chocolate: [210, 105, 30, 1],
  coral: [255, 127, 80, 1],
  cornflowerblue: [100, 149, 237, 1],
  cornsilk: [255, 248, 220, 1],
  crimson: [220, 20, 60, 1],
  cyan: [0, 255, 255, 1],
  darkblue: [0, 0, 139, 1],
  darkcyan: [0, 139, 139, 1],
  darkgoldenrod: [184, 134, 11, 1],
  darkgray: [169, 169, 169, 1],
  darkgreen: [0, 100, 0, 1],
  darkgrey: [169, 169, 169, 1],
  darkkhaki: [189, 183, 107, 1],
  darkmagenta: [139, 0, 139, 1],
  darkolivegreen: [85, 107, 47, 1],
  darkorange: [255, 140, 0, 1],
  darkorchid: [153, 50, 204, 1],
  darkred: [139, 0, 0, 1],
  darksalmon: [233, 150, 122, 1],
  darkseagreen: [143, 188, 143, 1],
  darkslateblue: [72, 61, 139, 1],
  darkslategray: [47, 79, 79, 1],
  darkslategrey: [47, 79, 79, 1],
  darkturquoise: [0, 206, 209, 1],
  darkviolet: [148, 0, 211, 1],
  deeppink: [255, 20, 147, 1],
  deepskyblue: [0, 191, 255, 1],
  dimgray: [105, 105, 105, 1],
  dimgrey: [105, 105, 105, 1],
  dodgerblue: [30, 144, 255, 1],
  firebrick: [178, 34, 34, 1],
  floralwhite: [255, 250, 240, 1],
  forestgreen: [34, 139, 34, 1],
  fuchsia: [255, 0, 255, 1],
  gainsboro: [220, 220, 220, 1],
  ghostwhite: [248, 248, 255, 1],
  gold: [255, 215, 0, 1],
  goldenrod: [218, 165, 32, 1],
  gray: [128, 128, 128, 1],
  green: [0, 128, 0, 1],
  greenyellow: [173, 255, 47, 1],
  grey: [128, 128, 128, 1],
  honeydew: [240, 255, 240, 1],
  hotpink: [255, 105, 180, 1],
  indianred: [205, 92, 92, 1],
  indigo: [75, 0, 130, 1],
  ivory: [255, 255, 240, 1],
  khaki: [240, 230, 140, 1],
  lavender: [230, 230, 250, 1],
  lavenderblush: [255, 240, 245, 1],
  lawngreen: [124, 252, 0, 1],
  lemonchiffon: [255, 250, 205, 1],
  lightblue: [173, 216, 230, 1],
  lightcoral: [240, 128, 128, 1],
  lightcyan: [224, 255, 255, 1],
  lightgoldenrodyellow: [250, 250, 210, 1],
  lightgray: [211, 211, 211, 1],
  lightgreen: [144, 238, 144, 1],
  lightgrey: [211, 211, 211, 1],
  lightpink: [255, 182, 193, 1],
  lightsalmon: [255, 160, 122, 1],
  lightseagreen: [32, 178, 170, 1],
  lightskyblue: [135, 206, 250, 1],
  lightslategray: [119, 136, 153, 1],
  lightslategrey: [119, 136, 153, 1],
  lightsteelblue: [176, 196, 222, 1],
  lightyellow: [255, 255, 224, 1],
  lime: [0, 255, 0, 1],
  limegreen: [50, 205, 50, 1],
  linen: [250, 240, 230, 1],
  magenta: [255, 0, 255, 1],
  maroon: [128, 0, 0, 1],
  mediumaquamarine: [102, 205, 170, 1],
  mediumblue: [0, 0, 205, 1],
  mediumorchid: [186, 85, 211, 1],
  mediumpurple: [147, 112, 219, 1],
  mediumseagreen: [60, 179, 113, 1],
  mediumslateblue: [123, 104, 238, 1],
  mediumspringgreen: [0, 250, 154, 1],
  mediumturquoise: [72, 209, 204, 1],
  mediumvioletred: [199, 21, 133, 1],
  midnightblue: [25, 25, 112, 1],
  mintcream: [245, 255, 250, 1],
  mistyrose: [255, 228, 225, 1],
  moccasin: [255, 228, 181, 1],
  navajowhite: [255, 222, 173, 1],
  navy: [0, 0, 128, 1],
  oldlace: [253, 245, 230, 1],
  olive: [128, 128, 0, 1],
  olivedrab: [107, 142, 35, 1],
  orange: [255, 165, 0, 1],
  orangered: [255, 69, 0, 1],
  orchid: [218, 112, 214, 1],
  palegoldenrod: [238, 232, 170, 1],
  palegreen: [152, 251, 152, 1],
  paleturquoise: [175, 238, 238, 1],
  palevioletred: [219, 112, 147, 1],
  papayawhip: [255, 239, 213, 1],
  peachpuff: [255, 218, 185, 1],
  peru: [205, 133, 63, 1],
  pink: [255, 192, 203, 1],
  plum: [221, 160, 221, 1],
  powderblue: [176, 224, 230, 1],
  purple: [128, 0, 128, 1],
  red: [255, 0, 0, 1],
  rosybrown: [188, 143, 143, 1],
  royalblue: [65, 105, 225, 1],
  saddlebrown: [139, 69, 19, 1],
  salmon: [250, 128, 114, 1],
  sandybrown: [244, 164, 96, 1],
  seagreen: [46, 139, 87, 1],
  seashell: [255, 245, 238, 1],
  sienna: [160, 82, 45, 1],
  silver: [192, 192, 192, 1],
  skyblue: [135, 206, 235, 1],
  slateblue: [106, 90, 205, 1],
  slategray: [112, 128, 144, 1],
  slategrey: [112, 128, 144, 1],
  snow: [255, 250, 250, 1],
  springgreen: [0, 255, 127, 1],
  steelblue: [70, 130, 180, 1],
  tan: [210, 180, 140, 1],
  teal: [0, 128, 128, 1],
  thistle: [216, 191, 216, 1],
  tomato: [255, 99, 71, 1],
  turquoise: [64, 224, 208, 1],
  violet: [238, 130, 238, 1],
  wheat: [245, 222, 179, 1],
  white: [255, 255, 255, 1],
  whitesmoke: [245, 245, 245, 1],
  yellow: [255, 255, 0, 1],
  yellowgreen: [154, 205, 50, 1]
};
function Re(r) {
  return r = Math.round(r), r < 0 ? 0 : r > 255 ? 255 : r;
}
function PS(r) {
  return r = Math.round(r), r < 0 ? 0 : r > 360 ? 360 : r;
}
function ga(r) {
  return r < 0 ? 0 : r > 1 ? 1 : r;
}
function Du(r) {
  var t = r;
  return t.length && t.charAt(t.length - 1) === "%" ? Re(parseFloat(t) / 100 * 255) : Re(parseInt(t, 10));
}
function Sn(r) {
  var t = r;
  return t.length && t.charAt(t.length - 1) === "%" ? ga(parseFloat(t) / 100) : ga(parseFloat(t));
}
function Au(r, t, e) {
  return e < 0 ? e += 1 : e > 1 && (e -= 1), e * 6 < 1 ? r + (t - r) * e * 6 : e * 2 < 1 ? t : e * 3 < 2 ? r + (t - r) * (2 / 3 - e) * 6 : r;
}
function Ir(r, t, e) {
  return r + (t - r) * e;
}
function pe(r, t, e, n, i) {
  return r[0] = t, r[1] = e, r[2] = n, r[3] = i, r;
}
function jl(r, t) {
  return r[0] = t[0], r[1] = t[1], r[2] = t[2], r[3] = t[3], r;
}
var ey = new ka(20), to = null;
function Bn(r, t) {
  to && jl(to, t), to = ey.put(r, to || t.slice());
}
function le(r, t) {
  if (r) {
    t = t || [];
    var e = ey.get(r);
    if (e)
      return jl(t, e);
    r = r + "";
    var n = r.replace(/ /g, "").toLowerCase();
    if (n in tv)
      return jl(t, tv[n]), Bn(r, t), t;
    var i = n.length;
    if (n.charAt(0) === "#") {
      if (i === 4 || i === 5) {
        var a = parseInt(n.slice(1, 4), 16);
        if (!(a >= 0 && a <= 4095)) {
          pe(t, 0, 0, 0, 1);
          return;
        }
        return pe(t, (a & 3840) >> 4 | (a & 3840) >> 8, a & 240 | (a & 240) >> 4, a & 15 | (a & 15) << 4, i === 5 ? parseInt(n.slice(4), 16) / 15 : 1), Bn(r, t), t;
      } else if (i === 7 || i === 9) {
        var a = parseInt(n.slice(1, 7), 16);
        if (!(a >= 0 && a <= 16777215)) {
          pe(t, 0, 0, 0, 1);
          return;
        }
        return pe(t, (a & 16711680) >> 16, (a & 65280) >> 8, a & 255, i === 9 ? parseInt(n.slice(7), 16) / 255 : 1), Bn(r, t), t;
      }
      return;
    }
    var o = n.indexOf("("), s = n.indexOf(")");
    if (o !== -1 && s + 1 === i) {
      var u = n.substr(0, o), l = n.substr(o + 1, s - (o + 1)).split(","), f = 1;
      switch (u) {
        case "rgba":
          if (l.length !== 4)
            return l.length === 3 ? pe(t, +l[0], +l[1], +l[2], 1) : pe(t, 0, 0, 0, 1);
          f = Sn(l.pop());
        case "rgb":
          if (l.length >= 3)
            return pe(t, Du(l[0]), Du(l[1]), Du(l[2]), l.length === 3 ? f : Sn(l[3])), Bn(r, t), t;
          pe(t, 0, 0, 0, 1);
          return;
        case "hsla":
          if (l.length !== 4) {
            pe(t, 0, 0, 0, 1);
            return;
          }
          return l[3] = Sn(l[3]), Kl(l, t), Bn(r, t), t;
        case "hsl":
          if (l.length !== 3) {
            pe(t, 0, 0, 0, 1);
            return;
          }
          return Kl(l, t), Bn(r, t), t;
        default:
          return;
      }
    }
    pe(t, 0, 0, 0, 1);
  }
}
function Kl(r, t) {
  var e = (parseFloat(r[0]) % 360 + 360) % 360 / 360, n = Sn(r[1]), i = Sn(r[2]), a = i <= 0.5 ? i * (n + 1) : i + n - i * n, o = i * 2 - a;
  return t = t || [], pe(t, Re(Au(o, a, e + 1 / 3) * 255), Re(Au(o, a, e) * 255), Re(Au(o, a, e - 1 / 3) * 255), 1), r.length === 4 && (t[3] = r[3]), t;
}
function IS(r) {
  if (r) {
    var t = r[0] / 255, e = r[1] / 255, n = r[2] / 255, i = Math.min(t, e, n), a = Math.max(t, e, n), o = a - i, s = (a + i) / 2, u, l;
    if (o === 0)
      u = 0, l = 0;
    else {
      s < 0.5 ? l = o / (a + i) : l = o / (2 - a - i);
      var f = ((a - t) / 6 + o / 2) / o, h = ((a - e) / 6 + o / 2) / o, v = ((a - n) / 6 + o / 2) / o;
      t === a ? u = v - h : e === a ? u = 1 / 3 + f - v : n === a && (u = 2 / 3 + h - f), u < 0 && (u += 1), u > 1 && (u -= 1);
    }
    var c = [u * 360, l, s];
    return r[3] != null && c.push(r[3]), c;
  }
}
function Ql(r, t) {
  var e = le(r);
  if (e) {
    for (var n = 0; n < 3; n++)
      t < 0 ? e[n] = e[n] * (1 - t) | 0 : e[n] = (255 - e[n]) * t + e[n] | 0, e[n] > 255 ? e[n] = 255 : e[n] < 0 && (e[n] = 0);
    return Ur(e, e.length === 4 ? "rgba" : "rgb");
  }
}
function LS(r) {
  var t = le(r);
  if (t)
    return ((1 << 24) + (t[0] << 16) + (t[1] << 8) + +t[2]).toString(16).slice(1);
}
function ry(r, t, e) {
  if (!(!(t && t.length) || !(r >= 0 && r <= 1))) {
    e = e || [];
    var n = r * (t.length - 1), i = Math.floor(n), a = Math.ceil(n), o = t[i], s = t[a], u = n - i;
    return e[0] = Re(Ir(o[0], s[0], u)), e[1] = Re(Ir(o[1], s[1], u)), e[2] = Re(Ir(o[2], s[2], u)), e[3] = ga(Ir(o[3], s[3], u)), e;
  }
}
var OS = ry;
function hh(r, t, e) {
  if (!(!(t && t.length) || !(r >= 0 && r <= 1))) {
    var n = r * (t.length - 1), i = Math.floor(n), a = Math.ceil(n), o = le(t[i]), s = le(t[a]), u = n - i, l = Ur([
      Re(Ir(o[0], s[0], u)),
      Re(Ir(o[1], s[1], u)),
      Re(Ir(o[2], s[2], u)),
      ga(Ir(o[3], s[3], u))
    ], "rgba");
    return e ? {
      color: l,
      leftIndex: i,
      rightIndex: a,
      value: n
    } : l;
  }
}
var RS = hh;
function NS(r, t, e, n) {
  var i = le(r);
  if (r)
    return i = IS(i), t != null && (i[0] = PS(t)), e != null && (i[1] = Sn(e)), n != null && (i[2] = Sn(n)), Ur(Kl(i), "rgba");
}
function kS(r, t) {
  var e = le(r);
  if (e && t != null)
    return e[3] = ga(t), Ur(e, "rgba");
}
function Ur(r, t) {
  if (!(!r || !r.length)) {
    var e = r[0] + "," + r[1] + "," + r[2];
    return (t === "rgba" || t === "hsva" || t === "hsla") && (e += "," + r[3]), t + "(" + e + ")";
  }
}
function ya(r, t) {
  var e = le(r);
  return e ? (0.299 * e[0] + 0.587 * e[1] + 0.114 * e[2]) * e[3] / 255 + (1 - e[3]) * t : 0;
}
function BS() {
  return Ur([
    Math.round(Math.random() * 255),
    Math.round(Math.random() * 255),
    Math.round(Math.random() * 255)
  ], "rgb");
}
var ev = new ka(100);
function Jl(r) {
  if (W(r)) {
    var t = ev.get(r);
    return t || (t = Ql(r, -0.1), ev.put(r, t)), t;
  } else if (La(r)) {
    var e = F({}, r);
    return e.colorStops = U(r.colorStops, function(n) {
      return {
        offset: n.offset,
        color: Ql(n.color, -0.1)
      };
    }), e;
  }
  return r;
}
const FS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  fastLerp: ry,
  fastMapToColor: OS,
  lerp: hh,
  lift: Ql,
  liftColor: Jl,
  lum: ya,
  mapToColor: RS,
  modifyAlpha: kS,
  modifyHSL: NS,
  parse: le,
  random: BS,
  stringify: Ur,
  toHex: LS
}, Symbol.toStringTag, { value: "Module" }));
function VS(r) {
  return r.type === "linear";
}
function zS(r) {
  return r.type === "radial";
}
(function() {
  return $.hasGlobalWindow && Z(window.btoa) ? function(r) {
    return window.btoa(unescape(encodeURIComponent(r)));
  } : typeof Buffer < "u" ? function(r) {
    return Buffer.from(r).toString("base64");
  } : function(r) {
    return process.env.NODE_ENV !== "production" && Nr("Base64 isn't natively supported in the current environment."), null;
  };
})();
var tf = Array.prototype.slice;
function ir(r, t, e) {
  return (t - r) * e + r;
}
function Mu(r, t, e, n) {
  for (var i = t.length, a = 0; a < i; a++)
    r[a] = ir(t[a], e[a], n);
  return r;
}
function GS(r, t, e, n) {
  for (var i = t.length, a = i && t[0].length, o = 0; o < i; o++) {
    r[o] || (r[o] = []);
    for (var s = 0; s < a; s++)
      r[o][s] = ir(t[o][s], e[o][s], n);
  }
  return r;
}
function eo(r, t, e, n) {
  for (var i = t.length, a = 0; a < i; a++)
    r[a] = t[a] + e[a] * n;
  return r;
}
function rv(r, t, e, n) {
  for (var i = t.length, a = i && t[0].length, o = 0; o < i; o++) {
    r[o] || (r[o] = []);
    for (var s = 0; s < a; s++)
      r[o][s] = t[o][s] + e[o][s] * n;
  }
  return r;
}
function HS(r, t) {
  for (var e = r.length, n = t.length, i = e > n ? t : r, a = Math.min(e, n), o = i[a - 1] || { color: [0, 0, 0, 0], offset: 0 }, s = a; s < Math.max(e, n); s++)
    i.push({
      offset: o.offset,
      color: o.color.slice()
    });
}
function WS(r, t, e) {
  var n = r, i = t;
  if (!(!n.push || !i.push)) {
    var a = n.length, o = i.length;
    if (a !== o) {
      var s = a > o;
      if (s)
        n.length = o;
      else
        for (var u = a; u < o; u++)
          n.push(e === 1 ? i[u] : tf.call(i[u]));
    }
    for (var l = n[0] && n[0].length, u = 0; u < n.length; u++)
      if (e === 1)
        isNaN(n[u]) && (n[u] = i[u]);
      else
        for (var f = 0; f < l; f++)
          isNaN(n[u][f]) && (n[u][f] = i[u][f]);
  }
}
function Fo(r) {
  if (Qt(r)) {
    var t = r.length;
    if (Qt(r[0])) {
      for (var e = [], n = 0; n < t; n++)
        e.push(tf.call(r[n]));
      return e;
    }
    return tf.call(r);
  }
  return r;
}
function Vo(r) {
  return r[0] = Math.floor(r[0]) || 0, r[1] = Math.floor(r[1]) || 0, r[2] = Math.floor(r[2]) || 0, r[3] = r[3] == null ? 1 : r[3], "rgba(" + r.join(",") + ")";
}
function US(r) {
  return Qt(r && r[0]) ? 2 : 1;
}
var ro = 0, zo = 1, ny = 2, Zi = 3, ef = 4, rf = 5, nv = 6;
function iv(r) {
  return r === ef || r === rf;
}
function no(r) {
  return r === zo || r === ny;
}
var Li = [0, 0, 0, 0], YS = (function() {
  function r(t) {
    this.keyframes = [], this.discrete = !1, this._invalid = !1, this._needsSort = !1, this._lastFr = 0, this._lastFrP = 0, this.propName = t;
  }
  return r.prototype.isFinished = function() {
    return this._finished;
  }, r.prototype.setFinished = function() {
    this._finished = !0, this._additiveTrack && this._additiveTrack.setFinished();
  }, r.prototype.needsAnimate = function() {
    return this.keyframes.length >= 1;
  }, r.prototype.getAdditiveTrack = function() {
    return this._additiveTrack;
  }, r.prototype.addKeyframe = function(t, e, n) {
    this._needsSort = !0;
    var i = this.keyframes, a = i.length, o = !1, s = nv, u = e;
    if (Qt(e)) {
      var l = US(e);
      s = l, (l === 1 && !dt(e[0]) || l === 2 && !dt(e[0][0])) && (o = !0);
    } else if (dt(e) && !si(e))
      s = ro;
    else if (W(e))
      if (!isNaN(+e))
        s = ro;
      else {
        var f = le(e);
        f && (u = f, s = Zi);
      }
    else if (La(e)) {
      var h = F({}, u);
      h.colorStops = U(e.colorStops, function(c) {
        return {
          offset: c.offset,
          color: le(c.color)
        };
      }), VS(e) ? s = ef : zS(e) && (s = rf), u = h;
    }
    a === 0 ? this.valType = s : (s !== this.valType || s === nv) && (o = !0), this.discrete = this.discrete || o;
    var v = {
      time: t,
      value: u,
      rawValue: e,
      percent: 0
    };
    return n && (v.easing = n, v.easingFunc = Z(n) ? n : na[n] || Jg(n)), i.push(v), v;
  }, r.prototype.prepare = function(t, e) {
    var n = this.keyframes;
    this._needsSort && n.sort(function(p, g) {
      return p.time - g.time;
    });
    for (var i = this.valType, a = n.length, o = n[a - 1], s = this.discrete, u = no(i), l = iv(i), f = 0; f < a; f++) {
      var h = n[f], v = h.value, c = o.value;
      h.percent = h.time / t, s || (u && f !== a - 1 ? WS(v, c, i) : l && HS(v.colorStops, c.colorStops));
    }
    if (!s && i !== rf && e && this.needsAnimate() && e.needsAnimate() && i === e.valType && !e._finished) {
      this._additiveTrack = e;
      for (var d = n[0].value, f = 0; f < a; f++)
        i === ro ? n[f].additiveValue = n[f].value - d : i === Zi ? n[f].additiveValue = eo([], n[f].value, d, -1) : no(i) && (n[f].additiveValue = i === zo ? eo([], n[f].value, d, -1) : rv([], n[f].value, d, -1));
    }
  }, r.prototype.step = function(t, e) {
    if (!this._finished) {
      this._additiveTrack && this._additiveTrack._finished && (this._additiveTrack = null);
      var n = this._additiveTrack != null, i = n ? "additiveValue" : "value", a = this.valType, o = this.keyframes, s = o.length, u = this.propName, l = a === Zi, f, h = this._lastFr, v = Math.min, c, d;
      if (s === 1)
        c = d = o[0];
      else {
        if (e < 0)
          f = 0;
        else if (e < this._lastFrP) {
          var p = v(h + 1, s - 1);
          for (f = p; f >= 0 && !(o[f].percent <= e); f--)
            ;
          f = v(f, s - 2);
        } else {
          for (f = h; f < s && !(o[f].percent > e); f++)
            ;
          f = v(f - 1, s - 2);
        }
        d = o[f + 1], c = o[f];
      }
      if (c && d) {
        this._lastFr = f, this._lastFrP = e;
        var g = d.percent - c.percent, y = g === 0 ? 1 : v((e - c.percent) / g, 1);
        d.easingFunc && (y = d.easingFunc(y));
        var m = n ? this._additiveValue : l ? Li : t[u];
        if ((no(a) || l) && !m && (m = this._additiveValue = []), this.discrete)
          t[u] = y < 1 ? c.rawValue : d.rawValue;
        else if (no(a))
          a === zo ? Mu(m, c[i], d[i], y) : GS(m, c[i], d[i], y);
        else if (iv(a)) {
          var _ = c[i], S = d[i], w = a === ef;
          t[u] = {
            type: w ? "linear" : "radial",
            x: ir(_.x, S.x, y),
            y: ir(_.y, S.y, y),
            colorStops: U(_.colorStops, function(x, T) {
              var D = S.colorStops[T];
              return {
                offset: ir(x.offset, D.offset, y),
                color: Vo(Mu([], x.color, D.color, y))
              };
            }),
            global: S.global
          }, w ? (t[u].x2 = ir(_.x2, S.x2, y), t[u].y2 = ir(_.y2, S.y2, y)) : t[u].r = ir(_.r, S.r, y);
        } else if (l)
          Mu(m, c[i], d[i], y), n || (t[u] = Vo(m));
        else {
          var b = ir(c[i], d[i], y);
          n ? this._additiveValue = b : t[u] = b;
        }
        n && this._addToTarget(t);
      }
    }
  }, r.prototype._addToTarget = function(t) {
    var e = this.valType, n = this.propName, i = this._additiveValue;
    e === ro ? t[n] = t[n] + i : e === Zi ? (le(t[n], Li), eo(Li, Li, i, 1), t[n] = Vo(Li)) : e === zo ? eo(t[n], t[n], i, 1) : e === ny && rv(t[n], t[n], i, 1);
  }, r;
})(), ch = (function() {
  function r(t, e, n, i) {
    if (this._tracks = {}, this._trackKeys = [], this._maxTime = 0, this._started = 0, this._clip = null, this._target = t, this._loop = e, e && i) {
      Nr("Can' use additive animation on looped animation.");
      return;
    }
    this._additiveAnimators = i, this._allowDiscrete = n;
  }
  return r.prototype.getMaxTime = function() {
    return this._maxTime;
  }, r.prototype.getDelay = function() {
    return this._delay;
  }, r.prototype.getLoop = function() {
    return this._loop;
  }, r.prototype.getTarget = function() {
    return this._target;
  }, r.prototype.changeTarget = function(t) {
    this._target = t;
  }, r.prototype.when = function(t, e, n) {
    return this.whenWithKeys(t, e, yt(e), n);
  }, r.prototype.whenWithKeys = function(t, e, n, i) {
    for (var a = this._tracks, o = 0; o < n.length; o++) {
      var s = n[o], u = a[s];
      if (!u) {
        u = a[s] = new YS(s);
        var l = void 0, f = this._getAdditiveTrack(s);
        if (f) {
          var h = f.keyframes, v = h[h.length - 1];
          l = v && v.value, f.valType === Zi && l && (l = Vo(l));
        } else
          l = this._target[s];
        if (l == null)
          continue;
        t > 0 && u.addKeyframe(0, Fo(l), i), this._trackKeys.push(s);
      }
      u.addKeyframe(t, Fo(e[s]), i);
    }
    return this._maxTime = Math.max(this._maxTime, t), this;
  }, r.prototype.pause = function() {
    this._clip.pause(), this._paused = !0;
  }, r.prototype.resume = function() {
    this._clip.resume(), this._paused = !1;
  }, r.prototype.isPaused = function() {
    return !!this._paused;
  }, r.prototype.duration = function(t) {
    return this._maxTime = t, this._force = !0, this;
  }, r.prototype._doneCallback = function() {
    this._setTracksFinished(), this._clip = null;
    var t = this._doneCbs;
    if (t)
      for (var e = t.length, n = 0; n < e; n++)
        t[n].call(this);
  }, r.prototype._abortedCallback = function() {
    this._setTracksFinished();
    var t = this.animation, e = this._abortedCbs;
    if (t && t.removeClip(this._clip), this._clip = null, e)
      for (var n = 0; n < e.length; n++)
        e[n].call(this);
  }, r.prototype._setTracksFinished = function() {
    for (var t = this._tracks, e = this._trackKeys, n = 0; n < e.length; n++)
      t[e[n]].setFinished();
  }, r.prototype._getAdditiveTrack = function(t) {
    var e, n = this._additiveAnimators;
    if (n)
      for (var i = 0; i < n.length; i++) {
        var a = n[i].getTrack(t);
        a && (e = a);
      }
    return e;
  }, r.prototype.start = function(t) {
    if (!(this._started > 0)) {
      this._started = 1;
      for (var e = this, n = [], i = this._maxTime || 0, a = 0; a < this._trackKeys.length; a++) {
        var o = this._trackKeys[a], s = this._tracks[o], u = this._getAdditiveTrack(o), l = s.keyframes, f = l.length;
        if (s.prepare(i, u), s.needsAnimate())
          if (!this._allowDiscrete && s.discrete) {
            var h = l[f - 1];
            h && (e._target[s.propName] = h.rawValue), s.setFinished();
          } else
            n.push(s);
      }
      if (n.length || this._force) {
        var v = new MS({
          life: i,
          loop: this._loop,
          delay: this._delay || 0,
          onframe: function(c) {
            e._started = 2;
            var d = e._additiveAnimators;
            if (d) {
              for (var p = !1, g = 0; g < d.length; g++)
                if (d[g]._clip) {
                  p = !0;
                  break;
                }
              p || (e._additiveAnimators = null);
            }
            for (var g = 0; g < n.length; g++)
              n[g].step(e._target, c);
            var y = e._onframeCbs;
            if (y)
              for (var g = 0; g < y.length; g++)
                y[g](e._target, c);
          },
          ondestroy: function() {
            e._doneCallback();
          }
        });
        this._clip = v, this.animation && this.animation.addClip(v), t && v.setEasing(t);
      } else
        this._doneCallback();
      return this;
    }
  }, r.prototype.stop = function(t) {
    if (this._clip) {
      var e = this._clip;
      t && e.onframe(1), this._abortedCallback();
    }
  }, r.prototype.delay = function(t) {
    return this._delay = t, this;
  }, r.prototype.during = function(t) {
    return t && (this._onframeCbs || (this._onframeCbs = []), this._onframeCbs.push(t)), this;
  }, r.prototype.done = function(t) {
    return t && (this._doneCbs || (this._doneCbs = []), this._doneCbs.push(t)), this;
  }, r.prototype.aborted = function(t) {
    return t && (this._abortedCbs || (this._abortedCbs = []), this._abortedCbs.push(t)), this;
  }, r.prototype.getClip = function() {
    return this._clip;
  }, r.prototype.getTrack = function(t) {
    return this._tracks[t];
  }, r.prototype.getTracks = function() {
    var t = this;
    return U(this._trackKeys, function(e) {
      return t._tracks[e];
    });
  }, r.prototype.stopTracks = function(t, e) {
    if (!t.length || !this._clip)
      return !0;
    for (var n = this._tracks, i = this._trackKeys, a = 0; a < t.length; a++) {
      var o = n[t[a]];
      o && !o.isFinished() && (e ? o.step(this._target, 1) : this._started === 1 && o.step(this._target, 0), o.setFinished());
    }
    for (var s = !0, a = 0; a < i.length; a++)
      if (!n[i[a]].isFinished()) {
        s = !1;
        break;
      }
    return s && this._abortedCallback(), s;
  }, r.prototype.saveTo = function(t, e, n) {
    if (t) {
      e = e || this._trackKeys;
      for (var i = 0; i < e.length; i++) {
        var a = e[i], o = this._tracks[a];
        if (!(!o || o.isFinished())) {
          var s = o.keyframes, u = s[n ? 0 : s.length - 1];
          u && (t[a] = Fo(u.rawValue));
        }
      }
    }
  }, r.prototype.__changeFinalValue = function(t, e) {
    e = e || yt(t);
    for (var n = 0; n < e.length; n++) {
      var i = e[n], a = this._tracks[i];
      if (a) {
        var o = a.keyframes;
        if (o.length > 1) {
          var s = o.pop();
          a.addKeyframe(s.time, t[i]), a.prepare(this._maxTime, a.getAdditiveTrack());
        }
      }
    }
  }, r;
})();
function ti() {
  return (/* @__PURE__ */ new Date()).getTime();
}
var XS = (function(r) {
  z(t, r);
  function t(e) {
    var n = r.call(this) || this;
    return n._running = !1, n._time = 0, n._pausedTime = 0, n._pauseStart = 0, n._paused = !1, e = e || {}, n.stage = e.stage || {}, n;
  }
  return t.prototype.addClip = function(e) {
    e.animation && this.removeClip(e), this._head ? (this._tail.next = e, e.prev = this._tail, e.next = null, this._tail = e) : this._head = this._tail = e, e.animation = this;
  }, t.prototype.addAnimator = function(e) {
    e.animation = this;
    var n = e.getClip();
    n && this.addClip(n);
  }, t.prototype.removeClip = function(e) {
    if (e.animation) {
      var n = e.prev, i = e.next;
      n ? n.next = i : this._head = i, i ? i.prev = n : this._tail = n, e.next = e.prev = e.animation = null;
    }
  }, t.prototype.removeAnimator = function(e) {
    var n = e.getClip();
    n && this.removeClip(n), e.animation = null;
  }, t.prototype.update = function(e) {
    for (var n = ti() - this._pausedTime, i = n - this._time, a = this._head; a; ) {
      var o = a.next, s = a.step(n, i);
      s && (a.ondestroy(), this.removeClip(a)), a = o;
    }
    this._time = n, e || (this.trigger("frame", i), this.stage.update && this.stage.update());
  }, t.prototype._startLoop = function() {
    var e = this;
    this._running = !0;
    function n() {
      e._running && (Jo(n), !e._paused && e.update());
    }
    Jo(n);
  }, t.prototype.start = function() {
    this._running || (this._time = ti(), this._pausedTime = 0, this._startLoop());
  }, t.prototype.stop = function() {
    this._running = !1;
  }, t.prototype.pause = function() {
    this._paused || (this._pauseStart = ti(), this._paused = !0);
  }, t.prototype.resume = function() {
    this._paused && (this._pausedTime += ti() - this._pauseStart, this._paused = !1);
  }, t.prototype.clear = function() {
    for (var e = this._head; e; ) {
      var n = e.next;
      e.prev = e.next = e.animation = null, e = n;
    }
    this._head = this._tail = null;
  }, t.prototype.isFinished = function() {
    return this._head == null;
  }, t.prototype.animate = function(e, n) {
    n = n || {}, this.start();
    var i = new ch(e, n.loop);
    return this.addAnimator(i), i;
  }, t;
})(Ze), qS = 300, Eu = $.domSupported, Pu = (function() {
  var r = [
    "click",
    "dblclick",
    "mousewheel",
    "wheel",
    "mouseout",
    "mouseup",
    "mousedown",
    "mousemove",
    "contextmenu"
  ], t = [
    "touchstart",
    "touchend",
    "touchmove"
  ], e = {
    pointerdown: 1,
    pointerup: 1,
    pointermove: 1,
    pointerout: 1
  }, n = U(r, function(i) {
    var a = i.replace("mouse", "pointer");
    return e.hasOwnProperty(a) ? a : i;
  });
  return {
    mouse: r,
    touch: t,
    pointer: n
  };
})(), av = {
  mouse: ["mousemove", "mouseup"],
  pointer: ["pointermove", "pointerup"]
}, ov = !1;
function nf(r) {
  var t = r.pointerType;
  return t === "pen" || t === "touch";
}
function $S(r) {
  r.touching = !0, r.touchTimer != null && (clearTimeout(r.touchTimer), r.touchTimer = null), r.touchTimer = setTimeout(function() {
    r.touching = !1, r.touchTimer = null;
  }, 700);
}
function Iu(r) {
  r && (r.zrByTouch = !0);
}
function ZS(r, t) {
  return ge(r.dom, new jS(r, t), !0);
}
function iy(r, t) {
  for (var e = t, n = !1; e && e.nodeType !== 9 && !(n = e.domBelongToZr || e !== t && e === r.painterRoot); )
    e = e.parentNode;
  return n;
}
var jS = /* @__PURE__ */ (function() {
  function r(t, e) {
    this.stopPropagation = $t, this.stopImmediatePropagation = $t, this.preventDefault = $t, this.type = e.type, this.target = this.currentTarget = t.dom, this.pointerType = e.pointerType, this.clientX = e.clientX, this.clientY = e.clientY;
  }
  return r;
})(), Pe = {
  mousedown: function(r) {
    r = ge(this.dom, r), this.__mayPointerCapture = [r.zrX, r.zrY], this.trigger("mousedown", r);
  },
  mousemove: function(r) {
    r = ge(this.dom, r);
    var t = this.__mayPointerCapture;
    t && (r.zrX !== t[0] || r.zrY !== t[1]) && this.__togglePointerCapture(!0), this.trigger("mousemove", r);
  },
  mouseup: function(r) {
    r = ge(this.dom, r), this.__togglePointerCapture(!1), this.trigger("mouseup", r);
  },
  mouseout: function(r) {
    r = ge(this.dom, r);
    var t = r.toElement || r.relatedTarget;
    iy(this, t) || (this.__pointerCapturing && (r.zrEventControl = "no_globalout"), this.trigger("mouseout", r));
  },
  wheel: function(r) {
    ov = !0, r = ge(this.dom, r), this.trigger("mousewheel", r);
  },
  mousewheel: function(r) {
    ov || (r = ge(this.dom, r), this.trigger("mousewheel", r));
  },
  touchstart: function(r) {
    r = ge(this.dom, r), Iu(r), this.__lastTouchMoment = /* @__PURE__ */ new Date(), this.handler.processGesture(r, "start"), Pe.mousemove.call(this, r), Pe.mousedown.call(this, r);
  },
  touchmove: function(r) {
    r = ge(this.dom, r), Iu(r), this.handler.processGesture(r, "change"), Pe.mousemove.call(this, r);
  },
  touchend: function(r) {
    r = ge(this.dom, r), Iu(r), this.handler.processGesture(r, "end"), Pe.mouseup.call(this, r), +/* @__PURE__ */ new Date() - +this.__lastTouchMoment < qS && Pe.click.call(this, r);
  },
  pointerdown: function(r) {
    Pe.mousedown.call(this, r);
  },
  pointermove: function(r) {
    nf(r) || Pe.mousemove.call(this, r);
  },
  pointerup: function(r) {
    Pe.mouseup.call(this, r);
  },
  pointerout: function(r) {
    nf(r) || Pe.mouseout.call(this, r);
  }
};
M(["click", "dblclick", "contextmenu"], function(r) {
  Pe[r] = function(t) {
    t = ge(this.dom, t), this.trigger(r, t);
  };
});
var af = {
  pointermove: function(r) {
    nf(r) || af.mousemove.call(this, r);
  },
  pointerup: function(r) {
    af.mouseup.call(this, r);
  },
  mousemove: function(r) {
    this.trigger("mousemove", r);
  },
  mouseup: function(r) {
    var t = this.__pointerCapturing;
    this.__togglePointerCapture(!1), this.trigger("mouseup", r), t && (r.zrEventControl = "only_globalout", this.trigger("mouseout", r));
  }
};
function KS(r, t) {
  var e = t.domHandlers;
  $.pointerEventsSupported ? M(Pu.pointer, function(n) {
    Go(t, n, function(i) {
      e[n].call(r, i);
    });
  }) : ($.touchEventsSupported && M(Pu.touch, function(n) {
    Go(t, n, function(i) {
      e[n].call(r, i), $S(t);
    });
  }), M(Pu.mouse, function(n) {
    Go(t, n, function(i) {
      i = lh(i), t.touching || e[n].call(r, i);
    });
  }));
}
function QS(r, t) {
  $.pointerEventsSupported ? M(av.pointer, e) : $.touchEventsSupported || M(av.mouse, e);
  function e(n) {
    function i(a) {
      a = lh(a), iy(r, a.target) || (a = ZS(r, a), t.domHandlers[n].call(r, a));
    }
    Go(t, n, i, { capture: !0 });
  }
}
function Go(r, t, e, n) {
  r.mounted[t] = e, r.listenerOpts[t] = n, sS(r.domTarget, t, e, n);
}
function Lu(r) {
  var t = r.mounted;
  for (var e in t)
    t.hasOwnProperty(e) && uS(r.domTarget, e, t[e], r.listenerOpts[e]);
  r.mounted = {};
}
var sv = /* @__PURE__ */ (function() {
  function r(t, e) {
    this.mounted = {}, this.listenerOpts = {}, this.touching = !1, this.domTarget = t, this.domHandlers = e;
  }
  return r;
})(), JS = (function(r) {
  z(t, r);
  function t(e, n) {
    var i = r.call(this) || this;
    return i.__pointerCapturing = !1, i.dom = e, i.painterRoot = n, i._localHandlerScope = new sv(e, Pe), Eu && (i._globalHandlerScope = new sv(document, af)), KS(i, i._localHandlerScope), i;
  }
  return t.prototype.dispose = function() {
    Lu(this._localHandlerScope), Eu && Lu(this._globalHandlerScope);
  }, t.prototype.setCursor = function(e) {
    this.dom.style && (this.dom.style.cursor = e || "default");
  }, t.prototype.__togglePointerCapture = function(e) {
    if (this.__mayPointerCapture = null, Eu && +this.__pointerCapturing ^ +e) {
      this.__pointerCapturing = e;
      var n = this._globalHandlerScope;
      e ? QS(this, n) : Lu(n);
    }
  }, t;
})(Ze), ay = 1;
$.hasGlobalWindow && (ay = Math.max(window.devicePixelRatio || window.screen && window.screen.deviceXDPI / window.screen.logicalXDPI || 1, 1));
var is = ay, of = 0.4, sf = "#333", uf = "#ccc", tb = "#eee", uv = Ra, lv = 5e-5;
function jr(r) {
  return r > lv || r < -lv;
}
var Kr = [], Fn = [], Ou = Br(), Ru = Math.abs, vh = (function() {
  function r() {
  }
  return r.prototype.getLocalTransform = function(t) {
    return r.getLocalTransform(this, t);
  }, r.prototype.setPosition = function(t) {
    this.x = t[0], this.y = t[1];
  }, r.prototype.setScale = function(t) {
    this.scaleX = t[0], this.scaleY = t[1];
  }, r.prototype.setSkew = function(t) {
    this.skewX = t[0], this.skewY = t[1];
  }, r.prototype.setOrigin = function(t) {
    this.originX = t[0], this.originY = t[1];
  }, r.prototype.needLocalTransform = function() {
    return jr(this.rotation) || jr(this.x) || jr(this.y) || jr(this.scaleX - 1) || jr(this.scaleY - 1) || jr(this.skewX) || jr(this.skewY);
  }, r.prototype.updateTransform = function() {
    var t = this.parent && this.parent.transform, e = this.needLocalTransform(), n = this.transform;
    if (!(e || t)) {
      n && (uv(n), this.invTransform = null);
      return;
    }
    n = n || Br(), e ? this.getLocalTransform(n) : uv(n), t && (e ? Fr(n, t, n) : fh(n, t)), this.transform = n, this._resolveGlobalScaleRatio(n);
  }, r.prototype._resolveGlobalScaleRatio = function(t) {
    var e = this.globalScaleRatio;
    if (e != null && e !== 1) {
      this.getGlobalScale(Kr);
      var n = Kr[0] < 0 ? -1 : 1, i = Kr[1] < 0 ? -1 : 1, a = ((Kr[0] - n) * e + n) / Kr[0] || 0, o = ((Kr[1] - i) * e + i) / Kr[1] || 0;
      t[0] *= a, t[1] *= a, t[2] *= o, t[3] *= o;
    }
    this.invTransform = this.invTransform || Br(), Na(this.invTransform, t);
  }, r.prototype.getComputedTransform = function() {
    for (var t = this, e = []; t; )
      e.push(t), t = t.parent;
    for (; t = e.pop(); )
      t.updateTransform();
    return this.transform;
  }, r.prototype.setLocalTransform = function(t) {
    if (t) {
      var e = t[0] * t[0] + t[1] * t[1], n = t[2] * t[2] + t[3] * t[3], i = Math.atan2(t[1], t[0]), a = Math.PI / 2 + i - Math.atan2(t[3], t[2]);
      n = Math.sqrt(n) * Math.cos(a), e = Math.sqrt(e), this.skewX = a, this.skewY = 0, this.rotation = -i, this.x = +t[4], this.y = +t[5], this.scaleX = e, this.scaleY = n, this.originX = 0, this.originY = 0;
    }
  }, r.prototype.decomposeTransform = function() {
    if (this.transform) {
      var t = this.parent, e = this.transform;
      t && t.transform && (t.invTransform = t.invTransform || Br(), Fr(Fn, t.invTransform, e), e = Fn);
      var n = this.originX, i = this.originY;
      (n || i) && (Ou[4] = n, Ou[5] = i, Fr(Fn, e, Ou), Fn[4] -= n, Fn[5] -= i, e = Fn), this.setLocalTransform(e);
    }
  }, r.prototype.getGlobalScale = function(t) {
    var e = this.transform;
    return t = t || [], e ? (t[0] = Math.sqrt(e[0] * e[0] + e[1] * e[1]), t[1] = Math.sqrt(e[2] * e[2] + e[3] * e[3]), e[0] < 0 && (t[0] = -t[0]), e[3] < 0 && (t[1] = -t[1]), t) : (t[0] = 1, t[1] = 1, t);
  }, r.prototype.transformCoordToLocal = function(t, e) {
    var n = [t, e], i = this.invTransform;
    return i && Zt(n, n, i), n;
  }, r.prototype.transformCoordToGlobal = function(t, e) {
    var n = [t, e], i = this.transform;
    return i && Zt(n, n, i), n;
  }, r.prototype.getLineScale = function() {
    var t = this.transform;
    return t && Ru(t[0] - 1) > 1e-10 && Ru(t[3] - 1) > 1e-10 ? Math.sqrt(Ru(t[0] * t[3] - t[2] * t[1])) : 1;
  }, r.prototype.copyTransform = function(t) {
    eb(this, t);
  }, r.getLocalTransform = function(t, e) {
    e = e || [];
    var n = t.originX || 0, i = t.originY || 0, a = t.scaleX, o = t.scaleY, s = t.anchorX, u = t.anchorY, l = t.rotation || 0, f = t.x, h = t.y, v = t.skewX ? Math.tan(t.skewX) : 0, c = t.skewY ? Math.tan(-t.skewY) : 0;
    if (n || i || s || u) {
      var d = n + s, p = i + u;
      e[4] = -d * a - v * p * o, e[5] = -p * o - c * d * a;
    } else
      e[4] = e[5] = 0;
    return e[0] = a, e[3] = o, e[1] = c * a, e[2] = v * o, l && Rs(e, e, l), e[4] += n + f, e[5] += i + h, e;
  }, r.initDefaultProps = (function() {
    var t = r.prototype;
    t.scaleX = t.scaleY = t.globalScaleRatio = 1, t.x = t.y = t.originX = t.originY = t.skewX = t.skewY = t.rotation = t.anchorX = t.anchorY = 0;
  })(), r;
})(), ma = [
  "x",
  "y",
  "originX",
  "originY",
  "anchorX",
  "anchorY",
  "rotation",
  "scaleX",
  "scaleY",
  "skewX",
  "skewY"
];
function eb(r, t) {
  for (var e = 0; e < ma.length; e++) {
    var n = ma[e];
    r[n] = t[n];
  }
}
var fv = {};
function fe(r, t) {
  t = t || Cn;
  var e = fv[t];
  e || (e = fv[t] = new ka(500));
  var n = e.get(r);
  return n == null && (n = hr.measureText(r, t).width, e.put(r, n)), n;
}
function hv(r, t, e, n) {
  var i = fe(r, t), a = ph(t), o = ji(0, i, e), s = Jn(0, a, n), u = new st(o, s, i, a);
  return u;
}
function dh(r, t, e, n) {
  var i = ((r || "") + "").split(`
`), a = i.length;
  if (a === 1)
    return hv(i[0], t, e, n);
  for (var o = new st(0, 0, 0, 0), s = 0; s < i.length; s++) {
    var u = hv(i[s], t, e, n);
    s === 0 ? o.copy(u) : o.union(u);
  }
  return o;
}
function ji(r, t, e) {
  return e === "right" ? r -= t : e === "center" && (r -= t / 2), r;
}
function Jn(r, t, e) {
  return e === "middle" ? r -= t / 2 : e === "bottom" && (r -= t), r;
}
function ph(r) {
  return fe("国", r);
}
function Wr(r, t) {
  return typeof r == "string" ? r.lastIndexOf("%") >= 0 ? parseFloat(r) / 100 * t : parseFloat(r) : r;
}
function as(r, t, e) {
  var n = t.position || "inside", i = t.distance != null ? t.distance : 5, a = e.height, o = e.width, s = a / 2, u = e.x, l = e.y, f = "left", h = "top";
  if (n instanceof Array)
    u += Wr(n[0], e.width), l += Wr(n[1], e.height), f = null, h = null;
  else
    switch (n) {
      case "left":
        u -= i, l += s, f = "right", h = "middle";
        break;
      case "right":
        u += i + o, l += s, h = "middle";
        break;
      case "top":
        u += o / 2, l -= i, f = "center", h = "bottom";
        break;
      case "bottom":
        u += o / 2, l += a + i, f = "center";
        break;
      case "inside":
        u += o / 2, l += s, f = "center", h = "middle";
        break;
      case "insideLeft":
        u += i, l += s, h = "middle";
        break;
      case "insideRight":
        u += o - i, l += s, f = "right", h = "middle";
        break;
      case "insideTop":
        u += o / 2, l += i, f = "center";
        break;
      case "insideBottom":
        u += o / 2, l += a - i, f = "center", h = "bottom";
        break;
      case "insideTopLeft":
        u += i, l += i;
        break;
      case "insideTopRight":
        u += o - i, l += i, f = "right";
        break;
      case "insideBottomLeft":
        u += i, l += a - i, h = "bottom";
        break;
      case "insideBottomRight":
        u += o - i, l += a - i, f = "right", h = "bottom";
        break;
    }
  return r = r || {}, r.x = u, r.y = l, r.align = f, r.verticalAlign = h, r;
}
var Nu = "__zr_normal__", ku = ma.concat(["ignore"]), rb = $e(ma, function(r, t) {
  return r[t] = !0, r;
}, { ignore: !1 }), Vn = {}, nb = new st(0, 0, 0, 0), Ns = (function() {
  function r(t) {
    this.id = nh(), this.animators = [], this.currentStates = [], this.states = {}, this._init(t);
  }
  return r.prototype._init = function(t) {
    this.attr(t);
  }, r.prototype.drift = function(t, e, n) {
    switch (this.draggable) {
      case "horizontal":
        e = 0;
        break;
      case "vertical":
        t = 0;
        break;
    }
    var i = this.transform;
    i || (i = this.transform = [1, 0, 0, 1, 0, 0]), i[4] += t, i[5] += e, this.decomposeTransform(), this.markRedraw();
  }, r.prototype.beforeUpdate = function() {
  }, r.prototype.afterUpdate = function() {
  }, r.prototype.update = function() {
    this.updateTransform(), this.__dirty && this.updateInnerText();
  }, r.prototype.updateInnerText = function(t) {
    var e = this._textContent;
    if (e && (!e.ignore || t)) {
      this.textConfig || (this.textConfig = {});
      var n = this.textConfig, i = n.local, a = e.innerTransformable, o = void 0, s = void 0, u = !1;
      a.parent = i ? this : null;
      var l = !1;
      if (a.copyTransform(e), n.position != null) {
        var f = nb;
        n.layoutRect ? f.copy(n.layoutRect) : f.copy(this.getBoundingRect()), i || f.applyTransform(this.transform), this.calculateTextPosition ? this.calculateTextPosition(Vn, n, f) : as(Vn, n, f), a.x = Vn.x, a.y = Vn.y, o = Vn.align, s = Vn.verticalAlign;
        var h = n.origin;
        if (h && n.rotation != null) {
          var v = void 0, c = void 0;
          h === "center" ? (v = f.width * 0.5, c = f.height * 0.5) : (v = Wr(h[0], f.width), c = Wr(h[1], f.height)), l = !0, a.originX = -a.x + v + (i ? 0 : f.x), a.originY = -a.y + c + (i ? 0 : f.y);
        }
      }
      n.rotation != null && (a.rotation = n.rotation);
      var d = n.offset;
      d && (a.x += d[0], a.y += d[1], l || (a.originX = -d[0], a.originY = -d[1]));
      var p = n.inside == null ? typeof n.position == "string" && n.position.indexOf("inside") >= 0 : n.inside, g = this._innerTextDefaultStyle || (this._innerTextDefaultStyle = {}), y = void 0, m = void 0, _ = void 0;
      p && this.canBeInsideText() ? (y = n.insideFill, m = n.insideStroke, (y == null || y === "auto") && (y = this.getInsideTextFill()), (m == null || m === "auto") && (m = this.getInsideTextStroke(y), _ = !0)) : (y = n.outsideFill, m = n.outsideStroke, (y == null || y === "auto") && (y = this.getOutsideFill()), (m == null || m === "auto") && (m = this.getOutsideStroke(y), _ = !0)), y = y || "#000", (y !== g.fill || m !== g.stroke || _ !== g.autoStroke || o !== g.align || s !== g.verticalAlign) && (u = !0, g.fill = y, g.stroke = m, g.autoStroke = _, g.align = o, g.verticalAlign = s, e.setDefaultTextStyle(g)), e.__dirty |= ue, u && e.dirtyStyle(!0);
    }
  }, r.prototype.canBeInsideText = function() {
    return !0;
  }, r.prototype.getInsideTextFill = function() {
    return "#fff";
  }, r.prototype.getInsideTextStroke = function(t) {
    return "#000";
  }, r.prototype.getOutsideFill = function() {
    return this.__zr && this.__zr.isDarkMode() ? uf : sf;
  }, r.prototype.getOutsideStroke = function(t) {
    var e = this.__zr && this.__zr.getBackgroundColor(), n = typeof e == "string" && le(e);
    n || (n = [255, 255, 255, 1]);
    for (var i = n[3], a = this.__zr.isDarkMode(), o = 0; o < 3; o++)
      n[o] = n[o] * i + (a ? 0 : 255) * (1 - i);
    return n[3] = 1, Ur(n, "rgba");
  }, r.prototype.traverse = function(t, e) {
  }, r.prototype.attrKV = function(t, e) {
    t === "textConfig" ? this.setTextConfig(e) : t === "textContent" ? this.setTextContent(e) : t === "clipPath" ? this.setClipPath(e) : t === "extra" ? (this.extra = this.extra || {}, F(this.extra, e)) : this[t] = e;
  }, r.prototype.hide = function() {
    this.ignore = !0, this.markRedraw();
  }, r.prototype.show = function() {
    this.ignore = !1, this.markRedraw();
  }, r.prototype.attr = function(t, e) {
    if (typeof t == "string")
      this.attrKV(t, e);
    else if (Y(t))
      for (var n = t, i = yt(n), a = 0; a < i.length; a++) {
        var o = i[a];
        this.attrKV(o, t[o]);
      }
    return this.markRedraw(), this;
  }, r.prototype.saveCurrentToNormalState = function(t) {
    this._innerSaveToNormal(t);
    for (var e = this._normalState, n = 0; n < this.animators.length; n++) {
      var i = this.animators[n], a = i.__fromStateTransition;
      if (!(i.getLoop() || a && a !== Nu)) {
        var o = i.targetName, s = o ? e[o] : e;
        i.saveTo(s);
      }
    }
  }, r.prototype._innerSaveToNormal = function(t) {
    var e = this._normalState;
    e || (e = this._normalState = {}), t.textConfig && !e.textConfig && (e.textConfig = this.textConfig), this._savePrimaryToNormal(t, e, ku);
  }, r.prototype._savePrimaryToNormal = function(t, e, n) {
    for (var i = 0; i < n.length; i++) {
      var a = n[i];
      t[a] != null && !(a in e) && (e[a] = this[a]);
    }
  }, r.prototype.hasState = function() {
    return this.currentStates.length > 0;
  }, r.prototype.getState = function(t) {
    return this.states[t];
  }, r.prototype.ensureState = function(t) {
    var e = this.states;
    return e[t] || (e[t] = {}), e[t];
  }, r.prototype.clearStates = function(t) {
    this.useState(Nu, !1, t);
  }, r.prototype.useState = function(t, e, n, i) {
    var a = t === Nu, o = this.hasState();
    if (!(!o && a)) {
      var s = this.currentStates, u = this.stateTransition;
      if (!(ht(s, t) >= 0 && (e || s.length === 1))) {
        var l;
        if (this.stateProxy && !a && (l = this.stateProxy(t)), l || (l = this.states && this.states[t]), !l && !a) {
          Nr("State " + t + " not exists.");
          return;
        }
        a || this.saveCurrentToNormalState(l);
        var f = !!(l && l.hoverLayer || i);
        f && this._toggleHoverLayerFlag(!0), this._applyStateObj(t, l, this._normalState, e, !n && !this.__inHover && u && u.duration > 0, u);
        var h = this._textContent, v = this._textGuide;
        return h && h.useState(t, e, n, f), v && v.useState(t, e, n, f), a ? (this.currentStates = [], this._normalState = {}) : e ? this.currentStates.push(t) : this.currentStates = [t], this._updateAnimationTargets(), this.markRedraw(), !f && this.__inHover && (this._toggleHoverLayerFlag(!1), this.__dirty &= ~ue), l;
      }
    }
  }, r.prototype.useStates = function(t, e, n) {
    if (!t.length)
      this.clearStates();
    else {
      var i = [], a = this.currentStates, o = t.length, s = o === a.length;
      if (s) {
        for (var u = 0; u < o; u++)
          if (t[u] !== a[u]) {
            s = !1;
            break;
          }
      }
      if (s)
        return;
      for (var u = 0; u < o; u++) {
        var l = t[u], f = void 0;
        this.stateProxy && (f = this.stateProxy(l, t)), f || (f = this.states[l]), f && i.push(f);
      }
      var h = i[o - 1], v = !!(h && h.hoverLayer || n);
      v && this._toggleHoverLayerFlag(!0);
      var c = this._mergeStates(i), d = this.stateTransition;
      this.saveCurrentToNormalState(c), this._applyStateObj(t.join(","), c, this._normalState, !1, !e && !this.__inHover && d && d.duration > 0, d);
      var p = this._textContent, g = this._textGuide;
      p && p.useStates(t, e, v), g && g.useStates(t, e, v), this._updateAnimationTargets(), this.currentStates = t.slice(), this.markRedraw(), !v && this.__inHover && (this._toggleHoverLayerFlag(!1), this.__dirty &= ~ue);
    }
  }, r.prototype.isSilent = function() {
    for (var t = this.silent, e = this.parent; !t && e; ) {
      if (e.silent) {
        t = !0;
        break;
      }
      e = e.parent;
    }
    return t;
  }, r.prototype._updateAnimationTargets = function() {
    for (var t = 0; t < this.animators.length; t++) {
      var e = this.animators[t];
      e.targetName && e.changeTarget(this[e.targetName]);
    }
  }, r.prototype.removeState = function(t) {
    var e = ht(this.currentStates, t);
    if (e >= 0) {
      var n = this.currentStates.slice();
      n.splice(e, 1), this.useStates(n);
    }
  }, r.prototype.replaceState = function(t, e, n) {
    var i = this.currentStates.slice(), a = ht(i, t), o = ht(i, e) >= 0;
    a >= 0 ? o ? i.splice(a, 1) : i[a] = e : n && !o && i.push(e), this.useStates(i);
  }, r.prototype.toggleState = function(t, e) {
    e ? this.useState(t, !0) : this.removeState(t);
  }, r.prototype._mergeStates = function(t) {
    for (var e = {}, n, i = 0; i < t.length; i++) {
      var a = t[i];
      F(e, a), a.textConfig && (n = n || {}, F(n, a.textConfig));
    }
    return n && (e.textConfig = n), e;
  }, r.prototype._applyStateObj = function(t, e, n, i, a, o) {
    var s = !(e && i);
    e && e.textConfig ? (this.textConfig = F({}, i ? this.textConfig : n.textConfig), F(this.textConfig, e.textConfig)) : s && n.textConfig && (this.textConfig = n.textConfig);
    for (var u = {}, l = !1, f = 0; f < ku.length; f++) {
      var h = ku[f], v = a && rb[h];
      e && e[h] != null ? v ? (l = !0, u[h] = e[h]) : this[h] = e[h] : s && n[h] != null && (v ? (l = !0, u[h] = n[h]) : this[h] = n[h]);
    }
    if (!a)
      for (var f = 0; f < this.animators.length; f++) {
        var c = this.animators[f], d = c.targetName;
        c.getLoop() || c.__changeFinalValue(d ? (e || n)[d] : e || n);
      }
    l && this._transitionState(t, u, o);
  }, r.prototype._attachComponent = function(t) {
    if (t.__zr && !t.__hostTarget) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("Text element has been added to zrender.");
      return;
    }
    if (t === this) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("Recursive component attachment.");
      return;
    }
    var e = this.__zr;
    e && t.addSelfToZr(e), t.__zr = e, t.__hostTarget = this;
  }, r.prototype._detachComponent = function(t) {
    t.__zr && t.removeSelfFromZr(t.__zr), t.__zr = null, t.__hostTarget = null;
  }, r.prototype.getClipPath = function() {
    return this._clipPath;
  }, r.prototype.setClipPath = function(t) {
    this._clipPath && this._clipPath !== t && this.removeClipPath(), this._attachComponent(t), this._clipPath = t, this.markRedraw();
  }, r.prototype.removeClipPath = function() {
    var t = this._clipPath;
    t && (this._detachComponent(t), this._clipPath = null, this.markRedraw());
  }, r.prototype.getTextContent = function() {
    return this._textContent;
  }, r.prototype.setTextContent = function(t) {
    var e = this._textContent;
    if (e !== t) {
      if (e && e !== t && this.removeTextContent(), process.env.NODE_ENV !== "production" && t.__zr && !t.__hostTarget)
        throw new Error("Text element has been added to zrender.");
      t.innerTransformable = new vh(), this._attachComponent(t), this._textContent = t, this.markRedraw();
    }
  }, r.prototype.setTextConfig = function(t) {
    this.textConfig || (this.textConfig = {}), F(this.textConfig, t), this.markRedraw();
  }, r.prototype.removeTextConfig = function() {
    this.textConfig = null, this.markRedraw();
  }, r.prototype.removeTextContent = function() {
    var t = this._textContent;
    t && (t.innerTransformable = null, this._detachComponent(t), this._textContent = null, this._innerTextDefaultStyle = null, this.markRedraw());
  }, r.prototype.getTextGuideLine = function() {
    return this._textGuide;
  }, r.prototype.setTextGuideLine = function(t) {
    this._textGuide && this._textGuide !== t && this.removeTextGuideLine(), this._attachComponent(t), this._textGuide = t, this.markRedraw();
  }, r.prototype.removeTextGuideLine = function() {
    var t = this._textGuide;
    t && (this._detachComponent(t), this._textGuide = null, this.markRedraw());
  }, r.prototype.markRedraw = function() {
    this.__dirty |= ue;
    var t = this.__zr;
    t && (this.__inHover ? t.refreshHover() : t.refresh()), this.__hostTarget && this.__hostTarget.markRedraw();
  }, r.prototype.dirty = function() {
    this.markRedraw();
  }, r.prototype._toggleHoverLayerFlag = function(t) {
    this.__inHover = t;
    var e = this._textContent, n = this._textGuide;
    e && (e.__inHover = t), n && (n.__inHover = t);
  }, r.prototype.addSelfToZr = function(t) {
    if (this.__zr !== t) {
      this.__zr = t;
      var e = this.animators;
      if (e)
        for (var n = 0; n < e.length; n++)
          t.animation.addAnimator(e[n]);
      this._clipPath && this._clipPath.addSelfToZr(t), this._textContent && this._textContent.addSelfToZr(t), this._textGuide && this._textGuide.addSelfToZr(t);
    }
  }, r.prototype.removeSelfFromZr = function(t) {
    if (this.__zr) {
      this.__zr = null;
      var e = this.animators;
      if (e)
        for (var n = 0; n < e.length; n++)
          t.animation.removeAnimator(e[n]);
      this._clipPath && this._clipPath.removeSelfFromZr(t), this._textContent && this._textContent.removeSelfFromZr(t), this._textGuide && this._textGuide.removeSelfFromZr(t);
    }
  }, r.prototype.animate = function(t, e, n) {
    var i = t ? this[t] : this;
    if (process.env.NODE_ENV !== "production" && !i) {
      Nr('Property "' + t + '" is not existed in element ' + this.id);
      return;
    }
    var a = new ch(i, e, n);
    return t && (a.targetName = t), this.addAnimator(a, t), a;
  }, r.prototype.addAnimator = function(t, e) {
    var n = this.__zr, i = this;
    t.during(function() {
      i.updateDuringAnimation(e);
    }).done(function() {
      var a = i.animators, o = ht(a, t);
      o >= 0 && a.splice(o, 1);
    }), this.animators.push(t), n && n.animation.addAnimator(t), n && n.wakeUp();
  }, r.prototype.updateDuringAnimation = function(t) {
    this.markRedraw();
  }, r.prototype.stopAnimation = function(t, e) {
    for (var n = this.animators, i = n.length, a = [], o = 0; o < i; o++) {
      var s = n[o];
      !t || t === s.scope ? s.stop(e) : a.push(s);
    }
    return this.animators = a, this;
  }, r.prototype.animateTo = function(t, e, n) {
    Bu(this, t, e, n);
  }, r.prototype.animateFrom = function(t, e, n) {
    Bu(this, t, e, n, !0);
  }, r.prototype._transitionState = function(t, e, n, i) {
    for (var a = Bu(this, e, n, i), o = 0; o < a.length; o++)
      a[o].__fromStateTransition = t;
  }, r.prototype.getBoundingRect = function() {
    return null;
  }, r.prototype.getPaintRect = function() {
    return null;
  }, r.initDefaultProps = (function() {
    var t = r.prototype;
    t.type = "element", t.name = "", t.ignore = t.silent = t.isGroup = t.draggable = t.dragging = t.ignoreClip = t.__inHover = !1, t.__dirty = ue;
    var e = {};
    function n(a, o, s) {
      e[a + o + s] || (console.warn("DEPRECATED: '" + a + "' has been deprecated. use '" + o + "', '" + s + "' instead"), e[a + o + s] = !0);
    }
    function i(a, o, s, u) {
      Object.defineProperty(t, a, {
        get: function() {
          if (process.env.NODE_ENV !== "production" && n(a, s, u), !this[o]) {
            var f = this[o] = [];
            l(this, f);
          }
          return this[o];
        },
        set: function(f) {
          process.env.NODE_ENV !== "production" && n(a, s, u), this[s] = f[0], this[u] = f[1], this[o] = f, l(this, f);
        }
      });
      function l(f, h) {
        Object.defineProperty(h, 0, {
          get: function() {
            return f[s];
          },
          set: function(v) {
            f[s] = v;
          }
        }), Object.defineProperty(h, 1, {
          get: function() {
            return f[u];
          },
          set: function(v) {
            f[u] = v;
          }
        });
      }
    }
    Object.defineProperty && (i("position", "_legacyPos", "x", "y"), i("scale", "_legacyScale", "scaleX", "scaleY"), i("origin", "_legacyOrigin", "originX", "originY"));
  })(), r;
})();
Ce(Ns, Ze);
Ce(Ns, vh);
function Bu(r, t, e, n, i) {
  e = e || {};
  var a = [];
  oy(r, "", r, t, e, n, a, i);
  var o = a.length, s = !1, u = e.done, l = e.aborted, f = function() {
    s = !0, o--, o <= 0 && (s ? u && u() : l && l());
  }, h = function() {
    o--, o <= 0 && (s ? u && u() : l && l());
  };
  o || u && u(), a.length > 0 && e.during && a[0].during(function(d, p) {
    e.during(p);
  });
  for (var v = 0; v < a.length; v++) {
    var c = a[v];
    f && c.done(f), h && c.aborted(h), e.force && c.duration(e.duration), c.start(e.easing);
  }
  return a;
}
function Fu(r, t, e) {
  for (var n = 0; n < e; n++)
    r[n] = t[n];
}
function ib(r) {
  return Qt(r[0]);
}
function ab(r, t, e) {
  if (Qt(t[e]))
    if (Qt(r[e]) || (r[e] = []), Gt(t[e])) {
      var n = t[e].length;
      r[e].length !== n && (r[e] = new t[e].constructor(n), Fu(r[e], t[e], n));
    } else {
      var i = t[e], a = r[e], o = i.length;
      if (ib(i))
        for (var s = i[0].length, u = 0; u < o; u++)
          a[u] ? Fu(a[u], i[u], s) : a[u] = Array.prototype.slice.call(i[u]);
      else
        Fu(a, i, o);
      a.length = i.length;
    }
  else
    r[e] = t[e];
}
function ob(r, t) {
  return r === t || Qt(r) && Qt(t) && sb(r, t);
}
function sb(r, t) {
  var e = r.length;
  if (e !== t.length)
    return !1;
  for (var n = 0; n < e; n++)
    if (r[n] !== t[n])
      return !1;
  return !0;
}
function oy(r, t, e, n, i, a, o, s) {
  for (var u = yt(n), l = i.duration, f = i.delay, h = i.additive, v = i.setToFinal, c = !Y(a), d = r.animators, p = [], g = 0; g < u.length; g++) {
    var y = u[g], m = n[y];
    if (m != null && e[y] != null && (c || a[y]))
      if (Y(m) && !Qt(m) && !La(m)) {
        if (t) {
          s || (e[y] = m, r.updateDuringAnimation(t));
          continue;
        }
        oy(r, y, e[y], m, i, a && a[y], o, s);
      } else
        p.push(y);
    else s || (e[y] = m, r.updateDuringAnimation(t), p.push(y));
  }
  var _ = p.length;
  if (!h && _)
    for (var S = 0; S < d.length; S++) {
      var w = d[S];
      if (w.targetName === t) {
        var b = w.stopTracks(p);
        if (b) {
          var x = ht(d, w);
          d.splice(x, 1);
        }
      }
    }
  if (i.force || (p = Dt(p, function(C) {
    return !ob(n[C], e[C]);
  }), _ = p.length), _ > 0 || i.force && !o.length) {
    var T = void 0, D = void 0, A = void 0;
    if (s) {
      D = {}, v && (T = {});
      for (var S = 0; S < _; S++) {
        var y = p[S];
        D[y] = e[y], v ? T[y] = n[y] : e[y] = n[y];
      }
    } else if (v) {
      A = {};
      for (var S = 0; S < _; S++) {
        var y = p[S];
        A[y] = Fo(e[y]), ab(e, n, y);
      }
    }
    var w = new ch(e, !1, !1, h ? Dt(d, function(E) {
      return E.targetName === t;
    }) : null);
    w.targetName = t, i.scope && (w.scope = i.scope), v && T && w.whenWithKeys(0, T, p), A && w.whenWithKeys(0, A, p), w.whenWithKeys(l ?? 500, s ? D : n, p).delay(f || 0), r.addAnimator(w, t), o.push(w);
  }
}
var It = (function(r) {
  z(t, r);
  function t(e) {
    var n = r.call(this) || this;
    return n.isGroup = !0, n._children = [], n.attr(e), n;
  }
  return t.prototype.childrenRef = function() {
    return this._children;
  }, t.prototype.children = function() {
    return this._children.slice();
  }, t.prototype.childAt = function(e) {
    return this._children[e];
  }, t.prototype.childOfName = function(e) {
    for (var n = this._children, i = 0; i < n.length; i++)
      if (n[i].name === e)
        return n[i];
  }, t.prototype.childCount = function() {
    return this._children.length;
  }, t.prototype.add = function(e) {
    if (e && (e !== this && e.parent !== this && (this._children.push(e), this._doAdd(e)), process.env.NODE_ENV !== "production" && e.__hostTarget))
      throw "This elemenet has been used as an attachment";
    return this;
  }, t.prototype.addBefore = function(e, n) {
    if (e && e !== this && e.parent !== this && n && n.parent === this) {
      var i = this._children, a = i.indexOf(n);
      a >= 0 && (i.splice(a, 0, e), this._doAdd(e));
    }
    return this;
  }, t.prototype.replace = function(e, n) {
    var i = ht(this._children, e);
    return i >= 0 && this.replaceAt(n, i), this;
  }, t.prototype.replaceAt = function(e, n) {
    var i = this._children, a = i[n];
    if (e && e !== this && e.parent !== this && e !== a) {
      i[n] = e, a.parent = null;
      var o = this.__zr;
      o && a.removeSelfFromZr(o), this._doAdd(e);
    }
    return this;
  }, t.prototype._doAdd = function(e) {
    e.parent && e.parent.remove(e), e.parent = this;
    var n = this.__zr;
    n && n !== e.__zr && e.addSelfToZr(n), n && n.refresh();
  }, t.prototype.remove = function(e) {
    var n = this.__zr, i = this._children, a = ht(i, e);
    return a < 0 ? this : (i.splice(a, 1), e.parent = null, n && e.removeSelfFromZr(n), n && n.refresh(), this);
  }, t.prototype.removeAll = function() {
    for (var e = this._children, n = this.__zr, i = 0; i < e.length; i++) {
      var a = e[i];
      n && a.removeSelfFromZr(n), a.parent = null;
    }
    return e.length = 0, this;
  }, t.prototype.eachChild = function(e, n) {
    for (var i = this._children, a = 0; a < i.length; a++) {
      var o = i[a];
      e.call(n, o, a);
    }
    return this;
  }, t.prototype.traverse = function(e, n) {
    for (var i = 0; i < this._children.length; i++) {
      var a = this._children[i], o = e.call(n, a);
      a.isGroup && !o && a.traverse(e, n);
    }
    return this;
  }, t.prototype.addSelfToZr = function(e) {
    r.prototype.addSelfToZr.call(this, e);
    for (var n = 0; n < this._children.length; n++) {
      var i = this._children[n];
      i.addSelfToZr(e);
    }
  }, t.prototype.removeSelfFromZr = function(e) {
    r.prototype.removeSelfFromZr.call(this, e);
    for (var n = 0; n < this._children.length; n++) {
      var i = this._children[n];
      i.removeSelfFromZr(e);
    }
  }, t.prototype.getBoundingRect = function(e) {
    for (var n = new st(0, 0, 0, 0), i = e || this._children, a = [], o = null, s = 0; s < i.length; s++) {
      var u = i[s];
      if (!(u.ignore || u.invisible)) {
        var l = u.getBoundingRect(), f = u.getLocalTransform(a);
        f ? (st.applyTransform(n, l, f), o = o || n.clone(), o.union(n)) : (o = o || l.clone(), o.union(l));
      }
    }
    return o || n;
  }, t;
})(Ns);
It.prototype.type = "group";
/*!
* ZRender, a high performance 2d drawing library.
*
* Copyright (c) 2013, Baidu Inc.
* All rights reserved.
*
* LICENSE
* https://github.com/ecomfe/zrender/blob/master/LICENSE.txt
*/
var Ki = {}, pn = {};
function ub(r) {
  delete pn[r];
}
function lb(r) {
  if (!r)
    return !1;
  if (typeof r == "string")
    return ya(r, 1) < of;
  if (r.colorStops) {
    for (var t = r.colorStops, e = 0, n = t.length, i = 0; i < n; i++)
      e += ya(t[i].color, 1);
    return e /= n, e < of;
  }
  return !1;
}
var fb = (function() {
  function r(t, e, n) {
    var i = this;
    this._sleepAfterStill = 10, this._stillFrameAccum = 0, this._needsRefresh = !0, this._needsRefreshHover = !0, this._darkMode = !1, n = n || {}, this.dom = e, this.id = t;
    var a = new bS(), o = n.renderer || "canvas";
    if (Ki[o] || (o = yt(Ki)[0]), process.env.NODE_ENV !== "production" && !Ki[o])
      throw new Error("Renderer '" + o + "' is not imported. Please import it first.");
    n.useDirtyRect = n.useDirtyRect == null ? !1 : n.useDirtyRect;
    var s = new Ki[o](e, a, n, t), u = n.ssr || s.ssrOnly;
    this.storage = a, this.painter = s;
    var l = !$.node && !$.worker && !u ? new JS(s.getViewportRoot(), s.root) : null, f = n.useCoarsePointer, h = f == null || f === "auto" ? $.touchEventsSupported : !!f, v = 44, c;
    h && (c = K(n.pointerSize, v)), this.handler = new Xg(a, s, l, s.root, c), this.animation = new XS({
      stage: {
        update: u ? null : function() {
          return i._flush(!0);
        }
      }
    }), u || this.animation.start();
  }
  return r.prototype.add = function(t) {
    this._disposed || !t || (this.storage.addRoot(t), t.addSelfToZr(this), this.refresh());
  }, r.prototype.remove = function(t) {
    this._disposed || !t || (this.storage.delRoot(t), t.removeSelfFromZr(this), this.refresh());
  }, r.prototype.configLayer = function(t, e) {
    this._disposed || (this.painter.configLayer && this.painter.configLayer(t, e), this.refresh());
  }, r.prototype.setBackgroundColor = function(t) {
    this._disposed || (this.painter.setBackgroundColor && this.painter.setBackgroundColor(t), this.refresh(), this._backgroundColor = t, this._darkMode = lb(t));
  }, r.prototype.getBackgroundColor = function() {
    return this._backgroundColor;
  }, r.prototype.setDarkMode = function(t) {
    this._darkMode = t;
  }, r.prototype.isDarkMode = function() {
    return this._darkMode;
  }, r.prototype.refreshImmediately = function(t) {
    this._disposed || (t || this.animation.update(!0), this._needsRefresh = !1, this.painter.refresh(), this._needsRefresh = !1);
  }, r.prototype.refresh = function() {
    this._disposed || (this._needsRefresh = !0, this.animation.start());
  }, r.prototype.flush = function() {
    this._disposed || this._flush(!1);
  }, r.prototype._flush = function(t) {
    var e, n = ti();
    this._needsRefresh && (e = !0, this.refreshImmediately(t)), this._needsRefreshHover && (e = !0, this.refreshHoverImmediately());
    var i = ti();
    e ? (this._stillFrameAccum = 0, this.trigger("rendered", {
      elapsedTime: i - n
    })) : this._sleepAfterStill > 0 && (this._stillFrameAccum++, this._stillFrameAccum > this._sleepAfterStill && this.animation.stop());
  }, r.prototype.setSleepAfterStill = function(t) {
    this._sleepAfterStill = t;
  }, r.prototype.wakeUp = function() {
    this._disposed || (this.animation.start(), this._stillFrameAccum = 0);
  }, r.prototype.refreshHover = function() {
    this._needsRefreshHover = !0;
  }, r.prototype.refreshHoverImmediately = function() {
    this._disposed || (this._needsRefreshHover = !1, this.painter.refreshHover && this.painter.getType() === "canvas" && this.painter.refreshHover());
  }, r.prototype.resize = function(t) {
    this._disposed || (t = t || {}, this.painter.resize(t.width, t.height), this.handler.resize());
  }, r.prototype.clearAnimation = function() {
    this._disposed || this.animation.clear();
  }, r.prototype.getWidth = function() {
    if (!this._disposed)
      return this.painter.getWidth();
  }, r.prototype.getHeight = function() {
    if (!this._disposed)
      return this.painter.getHeight();
  }, r.prototype.setCursorStyle = function(t) {
    this._disposed || this.handler.setCursorStyle(t);
  }, r.prototype.findHover = function(t, e) {
    if (!this._disposed)
      return this.handler.findHover(t, e);
  }, r.prototype.on = function(t, e, n) {
    return this._disposed || this.handler.on(t, e, n), this;
  }, r.prototype.off = function(t, e) {
    this._disposed || this.handler.off(t, e);
  }, r.prototype.trigger = function(t, e) {
    this._disposed || this.handler.trigger(t, e);
  }, r.prototype.clear = function() {
    if (!this._disposed) {
      for (var t = this.storage.getRoots(), e = 0; e < t.length; e++)
        t[e] instanceof It && t[e].removeSelfFromZr(this);
      this.storage.delAllRoots(), this.painter.clear();
    }
  }, r.prototype.dispose = function() {
    this._disposed || (this.animation.stop(), this.clear(), this.storage.dispose(), this.painter.dispose(), this.handler.dispose(), this.animation = this.storage = this.painter = this.handler = null, this._disposed = !0, ub(this.id));
  }, r;
})();
function lf(r, t) {
  var e = new fb(nh(), r, t);
  return pn[e.id] = e, e;
}
function hb(r) {
  r.dispose();
}
function cb() {
  for (var r in pn)
    pn.hasOwnProperty(r) && pn[r].dispose();
  pn = {};
}
function vb(r) {
  return pn[r];
}
function sy(r, t) {
  Ki[r] = t;
}
var ff;
function db(r) {
  if (typeof ff == "function")
    return ff(r);
}
function uy(r) {
  ff = r;
}
var pb = "5.6.1";
const gb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  dispose: hb,
  disposeAll: cb,
  getElementSSRData: db,
  getInstance: vb,
  init: lf,
  registerPainter: sy,
  registerSSRDataGetter: uy,
  version: pb
}, Symbol.toStringTag, { value: "Module" }));
var cv = 1e-4, ly = 20;
function yb(r) {
  return r.replace(/^\s+|\s+$/g, "");
}
function os(r, t, e, n) {
  var i = t[0], a = t[1], o = e[0], s = e[1], u = a - i, l = s - o;
  if (u === 0)
    return l === 0 ? o : (o + s) / 2;
  if (n)
    if (u > 0) {
      if (r <= i)
        return o;
      if (r >= a)
        return s;
    } else {
      if (r >= i)
        return o;
      if (r <= a)
        return s;
    }
  else {
    if (r === i)
      return o;
    if (r === a)
      return s;
  }
  return (r - i) / u * l + o;
}
function _t(r, t) {
  switch (r) {
    case "center":
    case "middle":
      r = "50%";
      break;
    case "left":
    case "top":
      r = "0%";
      break;
    case "right":
    case "bottom":
      r = "100%";
      break;
  }
  return W(r) ? yb(r).match(/%$/) ? parseFloat(r) / 100 * t : parseFloat(r) : r == null ? NaN : +r;
}
function xt(r, t, e) {
  return t == null && (t = 10), t = Math.min(Math.max(0, t), ly), r = (+r).toFixed(t), e ? r : +r;
}
function mb(r) {
  return r.sort(function(t, e) {
    return t - e;
  }), r;
}
function Ye(r) {
  if (r = +r, isNaN(r))
    return 0;
  if (r > 1e-14) {
    for (var t = 1, e = 0; e < 15; e++, t *= 10)
      if (Math.round(r * t) / t === r)
        return e;
  }
  return ss(r);
}
function ss(r) {
  var t = r.toString().toLowerCase(), e = t.indexOf("e"), n = e > 0 ? +t.slice(e + 1) : 0, i = e > 0 ? e : t.length, a = t.indexOf("."), o = a < 0 ? 0 : i - 1 - a;
  return Math.max(0, o - n);
}
function fy(r, t) {
  var e = Math.log, n = Math.LN10, i = Math.floor(e(r[1] - r[0]) / n), a = Math.round(e(Math.abs(t[1] - t[0])) / n), o = Math.min(Math.max(-i + a, 0), 20);
  return isFinite(o) ? o : 20;
}
function _b(r, t, e) {
  if (!r[t])
    return 0;
  var n = hy(r, e);
  return n[t] || 0;
}
function hy(r, t) {
  var e = $e(r, function(c, d) {
    return c + (isNaN(d) ? 0 : d);
  }, 0);
  if (e === 0)
    return [];
  for (var n = Math.pow(10, t), i = U(r, function(c) {
    return (isNaN(c) ? 0 : c) / e * n * 100;
  }), a = n * 100, o = U(i, function(c) {
    return Math.floor(c);
  }), s = $e(o, function(c, d) {
    return c + d;
  }, 0), u = U(i, function(c, d) {
    return c - o[d];
  }); s < a; ) {
    for (var l = Number.NEGATIVE_INFINITY, f = null, h = 0, v = u.length; h < v; ++h)
      u[h] > l && (l = u[h], f = h);
    ++o[f], u[f] = 0, ++s;
  }
  return U(o, function(c) {
    return c / n;
  });
}
function Sb(r, t) {
  var e = Math.max(Ye(r), Ye(t)), n = r + t;
  return e > ly ? n : xt(n, e);
}
var bb = 9007199254740991;
function gh(r) {
  var t = Math.PI * 2;
  return (r % t + t) % t;
}
function _a(r) {
  return r > -cv && r < cv;
}
var wb = /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d{1,2})(?::(\d{1,2})(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/;
function xe(r) {
  if (r instanceof Date)
    return r;
  if (W(r)) {
    var t = wb.exec(r);
    if (!t)
      return /* @__PURE__ */ new Date(NaN);
    if (t[8]) {
      var e = +t[4] || 0;
      return t[8].toUpperCase() !== "Z" && (e -= +t[8].slice(0, 3)), new Date(Date.UTC(+t[1], +(t[2] || 1) - 1, +t[3] || 1, e, +(t[5] || 0), +t[6] || 0, t[7] ? +t[7].substring(0, 3) : 0));
    } else
      return new Date(+t[1], +(t[2] || 1) - 1, +t[3] || 1, +t[4] || 0, +(t[5] || 0), +t[6] || 0, t[7] ? +t[7].substring(0, 3) : 0);
  } else if (r == null)
    return /* @__PURE__ */ new Date(NaN);
  return new Date(Math.round(r));
}
function cy(r) {
  return Math.pow(10, Ba(r));
}
function Ba(r) {
  if (r === 0)
    return 0;
  var t = Math.floor(Math.log(r) / Math.LN10);
  return r / Math.pow(10, t) >= 10 && t++, t;
}
function yh(r, t) {
  var e = Ba(r), n = Math.pow(10, e), i = r / n, a;
  return t ? i < 1.5 ? a = 1 : i < 2.5 ? a = 2 : i < 4 ? a = 3 : i < 7 ? a = 5 : a = 10 : i < 1 ? a = 1 : i < 2 ? a = 2 : i < 3 ? a = 3 : i < 5 ? a = 5 : a = 10, r = a * n, e >= -20 ? +r.toFixed(e < 0 ? -e : 0) : r;
}
function xb(r, t) {
  var e = (r.length - 1) * t + 1, n = Math.floor(e), i = +r[n - 1], a = e - n;
  return a ? i + a * (r[n] - i) : i;
}
function Tb(r) {
  r.sort(function(u, l) {
    return s(u, l, 0) ? -1 : 1;
  });
  for (var t = -1 / 0, e = 1, n = 0; n < r.length; ) {
    for (var i = r[n].interval, a = r[n].close, o = 0; o < 2; o++)
      i[o] <= t && (i[o] = t, a[o] = o ? 1 : 1 - e), t = i[o], e = a[o];
    i[0] === i[1] && a[0] * a[1] !== 1 ? r.splice(n, 1) : n++;
  }
  return r;
  function s(u, l, f) {
    return u.interval[f] < l.interval[f] || u.interval[f] === l.interval[f] && (u.close[f] - l.close[f] === (f ? -1 : 1) || !f && s(u, l, 1));
  }
}
function Sa(r) {
  var t = parseFloat(r);
  return t == r && (t !== 0 || !W(r) || r.indexOf("x") <= 0) ? t : NaN;
}
function mh(r) {
  return !isNaN(Sa(r));
}
function vy() {
  return Math.round(Math.random() * 9);
}
function dy(r, t) {
  return t === 0 ? r : dy(t, r % t);
}
function vv(r, t) {
  return r == null ? t : t == null ? r : r * t / dy(r, t);
}
var Cb = "[ECharts] ", dv = {}, Db = typeof console < "u" && console.warn && console.log;
function ks(r, t, e) {
  if (Db) {
    if (e) {
      if (dv[t])
        return;
      dv[t] = !0;
    }
    console[r](Cb + t);
  }
}
function Ab(r, t) {
  ks("log", r, t);
}
function zt(r, t) {
  ks("warn", r, t);
}
function Ht(r, t) {
  ks("error", r, t);
}
function Ne(r) {
  process.env.NODE_ENV !== "production" && ks("warn", "DEPRECATED: " + r, !0);
}
function At(r, t, e) {
  process.env.NODE_ENV !== "production" && Ne((e ? "[" + e + "]" : "") + (r + " is deprecated, use " + t + " instead."));
}
function us() {
  for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t];
  var e = "";
  if (process.env.NODE_ENV !== "production") {
    var n = function(i) {
      return i === void 0 ? "undefined" : i === 1 / 0 ? "Infinity" : i === -1 / 0 ? "-Infinity" : si(i) ? "NaN" : i instanceof Date ? "Date(" + i.toISOString() + ")" : Z(i) ? "function () { ... }" : Lg(i) ? i + "" : null;
    };
    e = U(r, function(i) {
      if (W(i))
        return i;
      var a = n(i);
      if (a != null)
        return a;
      if (typeof JSON < "u" && JSON.stringify)
        try {
          return JSON.stringify(i, function(o, s) {
            var u = n(s);
            return u ?? s;
          });
        } catch {
          return "?";
        }
      else
        return "?";
    }).join(" ");
  }
  return e;
}
function re(r) {
  throw new Error(r);
}
function pv(r, t, e) {
  return (t - r) * e + r;
}
var py = "series\0", Mb = "\0_ec_\0";
function jt(r) {
  return r instanceof Array ? r : r == null ? [] : [r];
}
function hf(r, t, e) {
  if (r) {
    r[t] = r[t] || {}, r.emphasis = r.emphasis || {}, r.emphasis[t] = r.emphasis[t] || {};
    for (var n = 0, i = e.length; n < i; n++) {
      var a = e[n];
      !r.emphasis[t].hasOwnProperty(a) && r[t].hasOwnProperty(a) && (r.emphasis[t][a] = r[t][a]);
    }
  }
}
var gv = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "rich", "tag", "color", "textBorderColor", "textBorderWidth", "width", "height", "lineHeight", "align", "verticalAlign", "baseline", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY", "backgroundColor", "borderColor", "borderWidth", "borderRadius", "padding"];
function Fa(r) {
  return Y(r) && !H(r) && !(r instanceof Date) ? r.value : r;
}
function Eb(r) {
  return Y(r) && !(r instanceof Array);
}
function Pb(r, t, e) {
  var n = e === "normalMerge", i = e === "replaceMerge", a = e === "replaceAll";
  r = r || [], t = (t || []).slice();
  var o = Q();
  M(t, function(u, l) {
    if (!Y(u)) {
      t[l] = null;
      return;
    }
    process.env.NODE_ENV !== "production" && (u.id != null && !mv(u.id) && yv(u.id), u.name != null && !mv(u.name) && yv(u.name));
  });
  var s = Ib(r, o, e);
  return (n || i) && Lb(s, r, o, t), n && Ob(s, t), n || i ? Rb(s, t, i) : a && Nb(s, t), kb(s), s;
}
function Ib(r, t, e) {
  var n = [];
  if (e === "replaceAll")
    return n;
  for (var i = 0; i < r.length; i++) {
    var a = r[i];
    a && a.id != null && t.set(a.id, i), n.push({
      existing: e === "replaceMerge" || ui(a) ? null : a,
      newOption: null,
      keyInfo: null,
      brandNew: null
    });
  }
  return n;
}
function Lb(r, t, e, n) {
  M(n, function(i, a) {
    if (!(!i || i.id == null)) {
      var o = ia(i.id), s = e.get(o);
      if (s != null) {
        var u = r[s];
        J(!u.newOption, 'Duplicated option on id "' + o + '".'), u.newOption = i, u.existing = t[s], n[a] = null;
      }
    }
  });
}
function Ob(r, t) {
  M(t, function(e, n) {
    if (!(!e || e.name == null))
      for (var i = 0; i < r.length; i++) {
        var a = r[i].existing;
        if (!r[i].newOption && a && (a.id == null || e.id == null) && !ui(e) && !ui(a) && gy("name", a, e)) {
          r[i].newOption = e, t[n] = null;
          return;
        }
      }
  });
}
function Rb(r, t, e) {
  M(t, function(n) {
    if (n) {
      for (
        var i, a = 0;
        // Be `!resultItem` only when `nextIdx >= result.length`.
        (i = r[a]) && (i.newOption || ui(i.existing) || // In mode "replaceMerge", here no not-mapped-non-internal-existing.
        i.existing && n.id != null && !gy("id", n, i.existing));
      )
        a++;
      i ? (i.newOption = n, i.brandNew = e) : r.push({
        newOption: n,
        brandNew: e,
        existing: null,
        keyInfo: null
      }), a++;
    }
  });
}
function Nb(r, t) {
  M(t, function(e) {
    r.push({
      newOption: e,
      brandNew: !0,
      existing: null,
      keyInfo: null
    });
  });
}
function kb(r) {
  var t = Q();
  M(r, function(e) {
    var n = e.existing;
    n && t.set(n.id, e);
  }), M(r, function(e) {
    var n = e.newOption;
    J(!n || n.id == null || !t.get(n.id) || t.get(n.id) === e, "id duplicates: " + (n && n.id)), n && n.id != null && t.set(n.id, e), !e.keyInfo && (e.keyInfo = {});
  }), M(r, function(e, n) {
    var i = e.existing, a = e.newOption, o = e.keyInfo;
    if (Y(a)) {
      if (o.name = a.name != null ? ia(a.name) : i ? i.name : py + n, i)
        o.id = ia(i.id);
      else if (a.id != null)
        o.id = ia(a.id);
      else {
        var s = 0;
        do
          o.id = "\0" + o.name + "\0" + s++;
        while (t.get(o.id));
      }
      t.set(o.id, e);
    }
  });
}
function gy(r, t, e) {
  var n = qe(t[r], null), i = qe(e[r], null);
  return n != null && i != null && n === i;
}
function ia(r) {
  if (process.env.NODE_ENV !== "production" && r == null)
    throw new Error();
  return qe(r, "");
}
function qe(r, t) {
  return r == null ? t : W(r) ? r : dt(r) || pa(r) ? r + "" : t;
}
function yv(r) {
  process.env.NODE_ENV !== "production" && zt("`" + r + "` is invalid id or name. Must be a string or number.");
}
function mv(r) {
  return pa(r) || mh(r);
}
function _h(r) {
  var t = r.name;
  return !!(t && t.indexOf(py));
}
function ui(r) {
  return r && r.id != null && ia(r.id).indexOf(Mb) === 0;
}
function Bb(r, t, e) {
  M(r, function(n) {
    var i = n.newOption;
    Y(i) && (n.keyInfo.mainType = t, n.keyInfo.subType = Fb(t, i, n.existing, e));
  });
}
function Fb(r, t, e, n) {
  var i = t.type ? t.type : e ? e.subType : n.determineSubType(r, t);
  return i;
}
function An(r, t) {
  if (t.dataIndexInside != null)
    return t.dataIndexInside;
  if (t.dataIndex != null)
    return H(t.dataIndex) ? U(t.dataIndex, function(e) {
      return r.indexOfRawIndex(e);
    }) : r.indexOfRawIndex(t.dataIndex);
  if (t.name != null)
    return H(t.name) ? U(t.name, function(e) {
      return r.indexOfName(e);
    }) : r.indexOfName(t.name);
}
function Ct() {
  var r = "__ec_inner_" + Vb++;
  return function(t) {
    return t[r] || (t[r] = {});
  };
}
var Vb = vy();
function Vu(r, t, e) {
  var n = Sh(t, e), i = n.mainTypeSpecified, a = n.queryOptionMap, o = n.others, s = o, u = e ? e.defaultMainType : null;
  return !i && u && a.set(u, {}), a.each(function(l, f) {
    var h = Va(r, f, l, {
      useDefault: u === f,
      enableAll: e && e.enableAll != null ? e.enableAll : !0,
      enableNone: e && e.enableNone != null ? e.enableNone : !0
    });
    s[f + "Models"] = h.models, s[f + "Model"] = h.models[0];
  }), s;
}
function Sh(r, t) {
  var e;
  if (W(r)) {
    var n = {};
    n[r + "Index"] = 0, e = n;
  } else
    e = r;
  var i = Q(), a = {}, o = !1;
  return M(e, function(s, u) {
    if (u === "dataIndex" || u === "dataIndexInside") {
      a[u] = s;
      return;
    }
    var l = u.match(/^(\w+)(Index|Id|Name)$/) || [], f = l[1], h = (l[2] || "").toLowerCase();
    if (!(!f || !h || t && t.includeMainTypes && ht(t.includeMainTypes, f) < 0)) {
      o = o || !!f;
      var v = i.get(f) || i.set(f, {});
      v[h] = s;
    }
  }), {
    mainTypeSpecified: o,
    queryOptionMap: i,
    others: a
  };
}
var Oe = {
  useDefault: !0,
  enableAll: !1,
  enableNone: !1
};
function Va(r, t, e, n) {
  n = n || Oe;
  var i = e.index, a = e.id, o = e.name, s = {
    models: null,
    specified: i != null || a != null || o != null
  };
  if (!s.specified) {
    var u = void 0;
    return s.models = n.useDefault && (u = r.getComponent(t)) ? [u] : [], s;
  }
  return i === "none" || i === !1 ? (J(n.enableNone, '`"none"` or `false` is not a valid value on index option.'), s.models = [], s) : (i === "all" && (J(n.enableAll, '`"all"` is not a valid value on index option.'), i = a = o = null), s.models = r.queryComponents({
    mainType: t,
    index: i,
    id: a,
    name: o
  }), s);
}
function yy(r, t, e) {
  r.setAttribute ? r.setAttribute(t, e) : r[t] = e;
}
function zb(r, t) {
  return r.getAttribute ? r.getAttribute(t) : r[t];
}
function Gb(r) {
  return r === "auto" ? $.domSupported ? "html" : "richText" : r || "html";
}
function Hb(r, t, e, n, i) {
  var a = t == null || t === "auto";
  if (n == null)
    return n;
  if (dt(n)) {
    var o = pv(e || 0, n, i);
    return xt(o, a ? Math.max(Ye(e || 0), Ye(n)) : t);
  } else {
    if (W(n))
      return i < 1 ? e : n;
    for (var s = [], u = e, l = n, f = Math.max(u ? u.length : 0, l.length), h = 0; h < f; ++h) {
      var v = r.getDimensionInfo(h);
      if (v && v.type === "ordinal")
        s[h] = (i < 1 && u ? u : l)[h];
      else {
        var c = u && u[h] ? u[h] : 0, d = l[h], o = pv(c, d, i);
        s[h] = xt(o, a ? Math.max(Ye(c), Ye(d)) : t);
      }
    }
    return s;
  }
}
var Wb = ".", Qr = "___EC__COMPONENT__CONTAINER___", my = "___EC__EXTENDED_CLASS___";
function Xe(r) {
  var t = {
    main: "",
    sub: ""
  };
  if (r) {
    var e = r.split(Wb);
    t.main = e[0] || "", t.sub = e[1] || "";
  }
  return t;
}
function Ub(r) {
  J(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(r), 'componentType "' + r + '" illegal');
}
function Yb(r) {
  return !!(r && r[my]);
}
function bh(r, t) {
  r.$constructor = r, r.extend = function(e) {
    process.env.NODE_ENV !== "production" && M(t, function(a) {
      e[a] || console.warn("Method `" + a + "` should be implemented" + (e.type ? " in " + e.type : "") + ".");
    });
    var n = this, i;
    return Xb(n) ? i = /** @class */
    (function(a) {
      z(o, a);
      function o() {
        return a.apply(this, arguments) || this;
      }
      return o;
    })(n) : (i = function() {
      (e.$constructor || n).apply(this, arguments);
    }, ih(i, this)), F(i.prototype, e), i[my] = !0, i.extend = this.extend, i.superCall = Zb, i.superApply = jb, i.superClass = n, i;
  };
}
function Xb(r) {
  return Z(r) && /^class\s/.test(Function.prototype.toString.call(r));
}
function _y(r, t) {
  r.extend = t.extend;
}
var qb = Math.round(Math.random() * 10);
function $b(r) {
  var t = ["__\0is_clz", qb++].join("_");
  r.prototype[t] = !0, process.env.NODE_ENV !== "production" && J(!r.isInstance, 'The method "is" can not be defined.'), r.isInstance = function(e) {
    return !!(e && e[t]);
  };
}
function Zb(r, t) {
  for (var e = [], n = 2; n < arguments.length; n++)
    e[n - 2] = arguments[n];
  return this.superClass.prototype[t].apply(r, e);
}
function jb(r, t, e) {
  return this.superClass.prototype[t].apply(r, e);
}
function Bs(r) {
  var t = {};
  r.registerClass = function(n) {
    var i = n.type || n.prototype.type;
    if (i) {
      Ub(i), n.prototype.type = i;
      var a = Xe(i);
      if (!a.sub)
        process.env.NODE_ENV !== "production" && t[a.main] && console.warn(a.main + " exists."), t[a.main] = n;
      else if (a.sub !== Qr) {
        var o = e(a);
        o[a.sub] = n;
      }
    }
    return n;
  }, r.getClass = function(n, i, a) {
    var o = t[n];
    if (o && o[Qr] && (o = i ? o[i] : null), a && !o)
      throw new Error(i ? "Component " + n + "." + (i || "") + " is used but not imported." : n + ".type should be specified.");
    return o;
  }, r.getClassesByMainType = function(n) {
    var i = Xe(n), a = [], o = t[i.main];
    return o && o[Qr] ? M(o, function(s, u) {
      u !== Qr && a.push(s);
    }) : a.push(o), a;
  }, r.hasClass = function(n) {
    var i = Xe(n);
    return !!t[i.main];
  }, r.getAllClassMainTypes = function() {
    var n = [];
    return M(t, function(i, a) {
      n.push(a);
    }), n;
  }, r.hasSubTypes = function(n) {
    var i = Xe(n), a = t[i.main];
    return a && a[Qr];
  };
  function e(n) {
    var i = t[n.main];
    return (!i || !i[Qr]) && (i = t[n.main] = {}, i[Qr] = !0), i;
  }
}
function ba(r, t) {
  for (var e = 0; e < r.length; e++)
    r[e][1] || (r[e][1] = r[e][0]);
  return t = t || !1, function(n, i, a) {
    for (var o = {}, s = 0; s < r.length; s++) {
      var u = r[s][1];
      if (!(i && ht(i, u) >= 0 || a && ht(a, u) < 0)) {
        var l = n.getShallow(u, t);
        l != null && (o[r[s][0]] = l);
      }
    }
    return o;
  };
}
var Kb = [
  ["fill", "color"],
  ["shadowBlur"],
  ["shadowOffsetX"],
  ["shadowOffsetY"],
  ["opacity"],
  ["shadowColor"]
  // Option decal is in `DecalObject` but style.decal is in `PatternObject`.
  // So do not transfer decal directly.
], Qb = ba(Kb), Jb = (
  /** @class */
  (function() {
    function r() {
    }
    return r.prototype.getAreaStyle = function(t, e) {
      return Qb(this, t, e);
    }, r;
  })()
), cf = new ka(50);
function tw(r) {
  if (typeof r == "string") {
    var t = cf.get(r);
    return t && t.image;
  } else
    return r;
}
function Sy(r, t, e, n, i) {
  if (r)
    if (typeof r == "string") {
      if (t && t.__zrImageSrc === r || !e)
        return t;
      var a = cf.get(r), o = { hostEl: e, cb: n, cbPayload: i };
      return a ? (t = a.image, !Fs(t) && a.pending.push(o)) : (t = hr.loadImage(r, _v, _v), t.__zrImageSrc = r, cf.put(r, t.__cachedImgObj = {
        image: t,
        pending: [o]
      })), t;
    } else
      return r;
  else return t;
}
function _v() {
  var r = this.__cachedImgObj;
  this.onload = this.onerror = this.__cachedImgObj = null;
  for (var t = 0; t < r.pending.length; t++) {
    var e = r.pending[t], n = e.cb;
    n && n(this, e.cbPayload), e.hostEl.dirty();
  }
  r.pending.length = 0;
}
function Fs(r) {
  return r && r.width && r.height;
}
var zu = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g;
function ew(r, t, e, n, i) {
  var a = {};
  return by(a, r, t, e, n, i), a.text;
}
function by(r, t, e, n, i, a) {
  if (!e) {
    r.text = "", r.isTruncated = !1;
    return;
  }
  var o = (t + "").split(`
`);
  a = wy(e, n, i, a);
  for (var s = !1, u = {}, l = 0, f = o.length; l < f; l++)
    xy(u, o[l], a), o[l] = u.textLine, s = s || u.isTruncated;
  r.text = o.join(`
`), r.isTruncated = s;
}
function wy(r, t, e, n) {
  n = n || {};
  var i = F({}, n);
  i.font = t, e = K(e, "..."), i.maxIterations = K(n.maxIterations, 2);
  var a = i.minChar = K(n.minChar, 0);
  i.cnCharWidth = fe("国", t);
  var o = i.ascCharWidth = fe("a", t);
  i.placeholder = K(n.placeholder, "");
  for (var s = r = Math.max(0, r - 1), u = 0; u < a && s >= o; u++)
    s -= o;
  var l = fe(e, t);
  return l > s && (e = "", l = 0), s = r - l, i.ellipsis = e, i.ellipsisWidth = l, i.contentWidth = s, i.containerWidth = r, i;
}
function xy(r, t, e) {
  var n = e.containerWidth, i = e.font, a = e.contentWidth;
  if (!n) {
    r.textLine = "", r.isTruncated = !1;
    return;
  }
  var o = fe(t, i);
  if (o <= n) {
    r.textLine = t, r.isTruncated = !1;
    return;
  }
  for (var s = 0; ; s++) {
    if (o <= a || s >= e.maxIterations) {
      t += e.ellipsis;
      break;
    }
    var u = s === 0 ? rw(t, a, e.ascCharWidth, e.cnCharWidth) : o > 0 ? Math.floor(t.length * a / o) : 0;
    t = t.substr(0, u), o = fe(t, i);
  }
  t === "" && (t = e.placeholder), r.textLine = t, r.isTruncated = !0;
}
function rw(r, t, e, n) {
  for (var i = 0, a = 0, o = r.length; a < o && i < t; a++) {
    var s = r.charCodeAt(a);
    i += 0 <= s && s <= 127 ? e : n;
  }
  return a;
}
function nw(r, t) {
  r != null && (r += "");
  var e = t.overflow, n = t.padding, i = t.font, a = e === "truncate", o = ph(i), s = K(t.lineHeight, o), u = !!t.backgroundColor, l = t.lineOverflow === "truncate", f = !1, h = t.width, v;
  h != null && (e === "break" || e === "breakAll") ? v = r ? Ty(r, t.font, h, e === "breakAll", 0).lines : [] : v = r ? r.split(`
`) : [];
  var c = v.length * s, d = K(t.height, c);
  if (c > d && l) {
    var p = Math.floor(d / s);
    f = f || v.length > p, v = v.slice(0, p);
  }
  if (r && a && h != null)
    for (var g = wy(h, i, t.ellipsis, {
      minChar: t.truncateMinChar,
      placeholder: t.placeholder
    }), y = {}, m = 0; m < v.length; m++)
      xy(y, v[m], g), v[m] = y.textLine, f = f || y.isTruncated;
  for (var _ = d, S = 0, m = 0; m < v.length; m++)
    S = Math.max(fe(v[m], i), S);
  h == null && (h = S);
  var w = S;
  return n && (_ += n[0] + n[2], w += n[1] + n[3], h += n[1] + n[3]), u && (w = h), {
    lines: v,
    height: d,
    outerWidth: w,
    outerHeight: _,
    lineHeight: s,
    calculatedLineHeight: o,
    contentWidth: S,
    contentHeight: c,
    width: h,
    isTruncated: f
  };
}
var iw = /* @__PURE__ */ (function() {
  function r() {
  }
  return r;
})(), Sv = /* @__PURE__ */ (function() {
  function r(t) {
    this.tokens = [], t && (this.tokens = t);
  }
  return r;
})(), aw = /* @__PURE__ */ (function() {
  function r() {
    this.width = 0, this.height = 0, this.contentWidth = 0, this.contentHeight = 0, this.outerWidth = 0, this.outerHeight = 0, this.lines = [], this.isTruncated = !1;
  }
  return r;
})();
function ow(r, t) {
  var e = new aw();
  if (r != null && (r += ""), !r)
    return e;
  for (var n = t.width, i = t.height, a = t.overflow, o = (a === "break" || a === "breakAll") && n != null ? { width: n, accumWidth: 0, breakAll: a === "breakAll" } : null, s = zu.lastIndex = 0, u; (u = zu.exec(r)) != null; ) {
    var l = u.index;
    l > s && Gu(e, r.substring(s, l), t, o), Gu(e, u[2], t, o, u[1]), s = zu.lastIndex;
  }
  s < r.length && Gu(e, r.substring(s, r.length), t, o);
  var f = [], h = 0, v = 0, c = t.padding, d = a === "truncate", p = t.lineOverflow === "truncate", g = {};
  function y(I, k, V) {
    I.width = k, I.lineHeight = V, h += V, v = Math.max(v, k);
  }
  t: for (var m = 0; m < e.lines.length; m++) {
    for (var _ = e.lines[m], S = 0, w = 0, b = 0; b < _.tokens.length; b++) {
      var x = _.tokens[b], T = x.styleName && t.rich[x.styleName] || {}, D = x.textPadding = T.padding, A = D ? D[1] + D[3] : 0, C = x.font = T.font || t.font;
      x.contentHeight = ph(C);
      var E = K(T.height, x.contentHeight);
      if (x.innerHeight = E, D && (E += D[0] + D[2]), x.height = E, x.lineHeight = kr(T.lineHeight, t.lineHeight, E), x.align = T && T.align || t.align, x.verticalAlign = T && T.verticalAlign || "middle", p && i != null && h + x.lineHeight > i) {
        var P = e.lines.length;
        b > 0 ? (_.tokens = _.tokens.slice(0, b), y(_, w, S), e.lines = e.lines.slice(0, m + 1)) : e.lines = e.lines.slice(0, m), e.isTruncated = e.isTruncated || e.lines.length < P;
        break t;
      }
      var L = T.width, O = L == null || L === "auto";
      if (typeof L == "string" && L.charAt(L.length - 1) === "%")
        x.percentWidth = L, f.push(x), x.contentWidth = fe(x.text, C);
      else {
        if (O) {
          var R = T.backgroundColor, G = R && R.image;
          G && (G = tw(G), Fs(G) && (x.width = Math.max(x.width, G.width * E / G.height)));
        }
        var N = d && n != null ? n - w : null;
        N != null && N < x.width ? !O || N < A ? (x.text = "", x.width = x.contentWidth = 0) : (by(g, x.text, N - A, C, t.ellipsis, { minChar: t.truncateMinChar }), x.text = g.text, e.isTruncated = e.isTruncated || g.isTruncated, x.width = x.contentWidth = fe(x.text, C)) : x.contentWidth = fe(x.text, C);
      }
      x.width += A, w += x.width, T && (S = Math.max(S, x.lineHeight));
    }
    y(_, w, S);
  }
  e.outerWidth = e.width = K(n, v), e.outerHeight = e.height = K(i, h), e.contentHeight = h, e.contentWidth = v, c && (e.outerWidth += c[1] + c[3], e.outerHeight += c[0] + c[2]);
  for (var m = 0; m < f.length; m++) {
    var x = f[m], B = x.percentWidth;
    x.width = parseInt(B, 10) / 100 * e.width;
  }
  return e;
}
function Gu(r, t, e, n, i) {
  var a = t === "", o = i && e.rich[i] || {}, s = r.lines, u = o.font || e.font, l = !1, f, h;
  if (n) {
    var v = o.padding, c = v ? v[1] + v[3] : 0;
    if (o.width != null && o.width !== "auto") {
      var d = Wr(o.width, n.width) + c;
      s.length > 0 && d + n.accumWidth > n.width && (f = t.split(`
`), l = !0), n.accumWidth = d;
    } else {
      var p = Ty(t, u, n.width, n.breakAll, n.accumWidth);
      n.accumWidth = p.accumWidth + c, h = p.linesWidths, f = p.lines;
    }
  } else
    f = t.split(`
`);
  for (var g = 0; g < f.length; g++) {
    var y = f[g], m = new iw();
    if (m.styleName = i, m.text = y, m.isLineHolder = !y && !a, typeof o.width == "number" ? m.width = o.width : m.width = h ? h[g] : fe(y, u), !g && !l) {
      var _ = (s[s.length - 1] || (s[0] = new Sv())).tokens, S = _.length;
      S === 1 && _[0].isLineHolder ? _[0] = m : (y || !S || a) && _.push(m);
    } else
      s.push(new Sv([m]));
  }
}
function sw(r) {
  var t = r.charCodeAt(0);
  return t >= 32 && t <= 591 || t >= 880 && t <= 4351 || t >= 4608 && t <= 5119 || t >= 7680 && t <= 8303;
}
var uw = $e(",&?/;] ".split(""), function(r, t) {
  return r[t] = !0, r;
}, {});
function lw(r) {
  return sw(r) ? !!uw[r] : !0;
}
function Ty(r, t, e, n, i) {
  for (var a = [], o = [], s = "", u = "", l = 0, f = 0, h = 0; h < r.length; h++) {
    var v = r.charAt(h);
    if (v === `
`) {
      u && (s += u, f += l), a.push(s), o.push(f), s = "", u = "", l = 0, f = 0;
      continue;
    }
    var c = fe(v, t), d = n ? !1 : !lw(v);
    if (a.length ? f + c > e : i + f + c > e) {
      f ? (s || u) && (d ? (s || (s = u, u = "", l = 0, f = l), a.push(s), o.push(f - l), u += v, l += c, s = "", f = l) : (u && (s += u, u = "", l = 0), a.push(s), o.push(f), s = v, f = c)) : d ? (a.push(u), o.push(l), u = v, l = c) : (a.push(v), o.push(c));
      continue;
    }
    f += c, d ? (u += v, l += c) : (u && (s += u, u = "", l = 0), s += v);
  }
  return !a.length && !s && (s = r, u = "", l = 0), u && (s += u), s && (a.push(s), o.push(f)), a.length === 1 && (f += i), {
    accumWidth: f,
    lines: a,
    linesWidths: o
  };
}
var vf = "__zr_style_" + Math.round(Math.random() * 10), bn = {
  shadowBlur: 0,
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  shadowColor: "#000",
  opacity: 1,
  blend: "source-over"
}, Vs = {
  style: {
    shadowBlur: !0,
    shadowOffsetX: !0,
    shadowOffsetY: !0,
    shadowColor: !0,
    opacity: !0
  }
};
bn[vf] = !0;
var bv = ["z", "z2", "invisible"], fw = ["invisible"], za = (function(r) {
  z(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype._init = function(e) {
    for (var n = yt(e), i = 0; i < n.length; i++) {
      var a = n[i];
      a === "style" ? this.useStyle(e[a]) : r.prototype.attrKV.call(this, a, e[a]);
    }
    this.style || this.useStyle({});
  }, t.prototype.beforeBrush = function() {
  }, t.prototype.afterBrush = function() {
  }, t.prototype.innerBeforeBrush = function() {
  }, t.prototype.innerAfterBrush = function() {
  }, t.prototype.shouldBePainted = function(e, n, i, a) {
    var o = this.transform;
    if (this.ignore || this.invisible || this.style.opacity === 0 || this.culling && hw(this, e, n) || o && !o[0] && !o[3])
      return !1;
    if (i && this.__clipPaths) {
      for (var s = 0; s < this.__clipPaths.length; ++s)
        if (this.__clipPaths[s].isZeroArea())
          return !1;
    }
    if (a && this.parent)
      for (var u = this.parent; u; ) {
        if (u.ignore)
          return !1;
        u = u.parent;
      }
    return !0;
  }, t.prototype.contain = function(e, n) {
    return this.rectContain(e, n);
  }, t.prototype.traverse = function(e, n) {
    e.call(n, this);
  }, t.prototype.rectContain = function(e, n) {
    var i = this.transformCoordToLocal(e, n), a = this.getBoundingRect();
    return a.contain(i[0], i[1]);
  }, t.prototype.getPaintRect = function() {
    var e = this._paintRect;
    if (!this._paintRect || this.__dirty) {
      var n = this.transform, i = this.getBoundingRect(), a = this.style, o = a.shadowBlur || 0, s = a.shadowOffsetX || 0, u = a.shadowOffsetY || 0;
      e = this._paintRect || (this._paintRect = new st(0, 0, 0, 0)), n ? st.applyTransform(e, i, n) : e.copy(i), (o || s || u) && (e.width += o * 2 + Math.abs(s), e.height += o * 2 + Math.abs(u), e.x = Math.min(e.x, e.x + s - o), e.y = Math.min(e.y, e.y + u - o));
      var l = this.dirtyRectTolerance;
      e.isZero() || (e.x = Math.floor(e.x - l), e.y = Math.floor(e.y - l), e.width = Math.ceil(e.width + 1 + l * 2), e.height = Math.ceil(e.height + 1 + l * 2));
    }
    return e;
  }, t.prototype.setPrevPaintRect = function(e) {
    e ? (this._prevPaintRect = this._prevPaintRect || new st(0, 0, 0, 0), this._prevPaintRect.copy(e)) : this._prevPaintRect = null;
  }, t.prototype.getPrevPaintRect = function() {
    return this._prevPaintRect;
  }, t.prototype.animateStyle = function(e) {
    return this.animate("style", e);
  }, t.prototype.updateDuringAnimation = function(e) {
    e === "style" ? this.dirtyStyle() : this.markRedraw();
  }, t.prototype.attrKV = function(e, n) {
    e !== "style" ? r.prototype.attrKV.call(this, e, n) : this.style ? this.setStyle(n) : this.useStyle(n);
  }, t.prototype.setStyle = function(e, n) {
    return typeof e == "string" ? this.style[e] = n : F(this.style, e), this.dirtyStyle(), this;
  }, t.prototype.dirtyStyle = function(e) {
    e || this.markRedraw(), this.__dirty |= $i, this._rect && (this._rect = null);
  }, t.prototype.dirty = function() {
    this.dirtyStyle();
  }, t.prototype.styleChanged = function() {
    return !!(this.__dirty & $i);
  }, t.prototype.styleUpdated = function() {
    this.__dirty &= ~$i;
  }, t.prototype.createStyle = function(e) {
    return Oa(bn, e);
  }, t.prototype.useStyle = function(e) {
    e[vf] || (e = this.createStyle(e)), this.__inHover ? this.__hoverStyle = e : this.style = e, this.dirtyStyle();
  }, t.prototype.isStyleObject = function(e) {
    return e[vf];
  }, t.prototype._innerSaveToNormal = function(e) {
    r.prototype._innerSaveToNormal.call(this, e);
    var n = this._normalState;
    e.style && !n.style && (n.style = this._mergeStyle(this.createStyle(), this.style)), this._savePrimaryToNormal(e, n, bv);
  }, t.prototype._applyStateObj = function(e, n, i, a, o, s) {
    r.prototype._applyStateObj.call(this, e, n, i, a, o, s);
    var u = !(n && a), l;
    if (n && n.style ? o ? a ? l = n.style : (l = this._mergeStyle(this.createStyle(), i.style), this._mergeStyle(l, n.style)) : (l = this._mergeStyle(this.createStyle(), a ? this.style : i.style), this._mergeStyle(l, n.style)) : u && (l = i.style), l)
      if (o) {
        var f = this.style;
        if (this.style = this.createStyle(u ? {} : f), u)
          for (var h = yt(f), v = 0; v < h.length; v++) {
            var c = h[v];
            c in l && (l[c] = l[c], this.style[c] = f[c]);
          }
        for (var d = yt(l), v = 0; v < d.length; v++) {
          var c = d[v];
          this.style[c] = this.style[c];
        }
        this._transitionState(e, {
          style: l
        }, s, this.getAnimationStyleProps());
      } else
        this.useStyle(l);
    for (var p = this.__inHover ? fw : bv, v = 0; v < p.length; v++) {
      var c = p[v];
      n && n[c] != null ? this[c] = n[c] : u && i[c] != null && (this[c] = i[c]);
    }
  }, t.prototype._mergeStates = function(e) {
    for (var n = r.prototype._mergeStates.call(this, e), i, a = 0; a < e.length; a++) {
      var o = e[a];
      o.style && (i = i || {}, this._mergeStyle(i, o.style));
    }
    return i && (n.style = i), n;
  }, t.prototype._mergeStyle = function(e, n) {
    return F(e, n), e;
  }, t.prototype.getAnimationStyleProps = function() {
    return Vs;
  }, t.initDefaultProps = (function() {
    var e = t.prototype;
    e.type = "displayable", e.invisible = !1, e.z = 0, e.z2 = 0, e.zlevel = 0, e.culling = !1, e.cursor = "pointer", e.rectHover = !1, e.incremental = !1, e._rect = null, e.dirtyRectTolerance = 0, e.__dirty = ue | $i;
  })(), t;
})(Ns), Hu = new st(0, 0, 0, 0), Wu = new st(0, 0, 0, 0);
function hw(r, t, e) {
  return Hu.copy(r.getBoundingRect()), r.transform && Hu.applyTransform(r.transform), Wu.width = t, Wu.height = e, !Hu.intersect(Wu);
}
var Se = Math.min, be = Math.max, Uu = Math.sin, Yu = Math.cos, Jr = Math.PI * 2, io = On(), ao = On(), oo = On();
function wv(r, t, e, n, i, a) {
  i[0] = Se(r, e), i[1] = Se(t, n), a[0] = be(r, e), a[1] = be(t, n);
}
var xv = [], Tv = [];
function cw(r, t, e, n, i, a, o, s, u, l) {
  var f = Kg, h = Rt, v = f(r, e, i, o, xv);
  u[0] = 1 / 0, u[1] = 1 / 0, l[0] = -1 / 0, l[1] = -1 / 0;
  for (var c = 0; c < v; c++) {
    var d = h(r, e, i, o, xv[c]);
    u[0] = Se(d, u[0]), l[0] = be(d, l[0]);
  }
  v = f(t, n, a, s, Tv);
  for (var c = 0; c < v; c++) {
    var p = h(t, n, a, s, Tv[c]);
    u[1] = Se(p, u[1]), l[1] = be(p, l[1]);
  }
  u[0] = Se(r, u[0]), l[0] = be(r, l[0]), u[0] = Se(o, u[0]), l[0] = be(o, l[0]), u[1] = Se(t, u[1]), l[1] = be(t, l[1]), u[1] = Se(s, u[1]), l[1] = be(s, l[1]);
}
function vw(r, t, e, n, i, a, o, s) {
  var u = Qg, l = ee, f = be(Se(u(r, e, i), 1), 0), h = be(Se(u(t, n, a), 1), 0), v = l(r, e, i, f), c = l(t, n, a, h);
  o[0] = Se(r, i, v), o[1] = Se(t, a, c), s[0] = be(r, i, v), s[1] = be(t, a, c);
}
function dw(r, t, e, n, i, a, o, s, u) {
  var l = Mr, f = Er, h = Math.abs(i - a);
  if (h % Jr < 1e-4 && h > 1e-4) {
    s[0] = r - e, s[1] = t - n, u[0] = r + e, u[1] = t + n;
    return;
  }
  if (io[0] = Yu(i) * e + r, io[1] = Uu(i) * n + t, ao[0] = Yu(a) * e + r, ao[1] = Uu(a) * n + t, l(s, io, ao), f(u, io, ao), i = i % Jr, i < 0 && (i = i + Jr), a = a % Jr, a < 0 && (a = a + Jr), i > a && !o ? a += Jr : i < a && o && (i += Jr), o) {
    var v = a;
    a = i, i = v;
  }
  for (var c = 0; c < a; c += Math.PI / 2)
    c > i && (oo[0] = Yu(c) * e + r, oo[1] = Uu(c) * n + t, l(s, oo, s), f(u, oo, u));
}
var ft = {
  M: 1,
  L: 2,
  C: 3,
  Q: 4,
  A: 5,
  Z: 6,
  R: 7
}, tn = [], en = [], Ve = [], mr = [], ze = [], Ge = [], Xu = Math.min, qu = Math.max, rn = Math.cos, nn = Math.sin, rr = Math.abs, df = Math.PI, Dr = df * 2, $u = typeof Float32Array < "u", Oi = [];
function Zu(r) {
  var t = Math.round(r / df * 1e8) / 1e8;
  return t % 2 * df;
}
function Cy(r, t) {
  var e = Zu(r[0]);
  e < 0 && (e += Dr);
  var n = e - r[0], i = r[1];
  i += n, !t && i - e >= Dr ? i = e + Dr : t && e - i >= Dr ? i = e - Dr : !t && e > i ? i = e + (Dr - Zu(e - i)) : t && e < i && (i = e - (Dr - Zu(i - e))), r[0] = e, r[1] = i;
}
var Mn = (function() {
  function r(t) {
    this.dpr = 1, this._xi = 0, this._yi = 0, this._x0 = 0, this._y0 = 0, this._len = 0, t && (this._saveData = !1), this._saveData && (this.data = []);
  }
  return r.prototype.increaseVersion = function() {
    this._version++;
  }, r.prototype.getVersion = function() {
    return this._version;
  }, r.prototype.setScale = function(t, e, n) {
    n = n || 0, n > 0 && (this._ux = rr(n / is / t) || 0, this._uy = rr(n / is / e) || 0);
  }, r.prototype.setDPR = function(t) {
    this.dpr = t;
  }, r.prototype.setContext = function(t) {
    this._ctx = t;
  }, r.prototype.getContext = function() {
    return this._ctx;
  }, r.prototype.beginPath = function() {
    return this._ctx && this._ctx.beginPath(), this.reset(), this;
  }, r.prototype.reset = function() {
    this._saveData && (this._len = 0), this._pathSegLen && (this._pathSegLen = null, this._pathLen = 0), this._version++;
  }, r.prototype.moveTo = function(t, e) {
    return this._drawPendingPt(), this.addData(ft.M, t, e), this._ctx && this._ctx.moveTo(t, e), this._x0 = t, this._y0 = e, this._xi = t, this._yi = e, this;
  }, r.prototype.lineTo = function(t, e) {
    var n = rr(t - this._xi), i = rr(e - this._yi), a = n > this._ux || i > this._uy;
    if (this.addData(ft.L, t, e), this._ctx && a && this._ctx.lineTo(t, e), a)
      this._xi = t, this._yi = e, this._pendingPtDist = 0;
    else {
      var o = n * n + i * i;
      o > this._pendingPtDist && (this._pendingPtX = t, this._pendingPtY = e, this._pendingPtDist = o);
    }
    return this;
  }, r.prototype.bezierCurveTo = function(t, e, n, i, a, o) {
    return this._drawPendingPt(), this.addData(ft.C, t, e, n, i, a, o), this._ctx && this._ctx.bezierCurveTo(t, e, n, i, a, o), this._xi = a, this._yi = o, this;
  }, r.prototype.quadraticCurveTo = function(t, e, n, i) {
    return this._drawPendingPt(), this.addData(ft.Q, t, e, n, i), this._ctx && this._ctx.quadraticCurveTo(t, e, n, i), this._xi = n, this._yi = i, this;
  }, r.prototype.arc = function(t, e, n, i, a, o) {
    this._drawPendingPt(), Oi[0] = i, Oi[1] = a, Cy(Oi, o), i = Oi[0], a = Oi[1];
    var s = a - i;
    return this.addData(ft.A, t, e, n, n, i, s, 0, o ? 0 : 1), this._ctx && this._ctx.arc(t, e, n, i, a, o), this._xi = rn(a) * n + t, this._yi = nn(a) * n + e, this;
  }, r.prototype.arcTo = function(t, e, n, i, a) {
    return this._drawPendingPt(), this._ctx && this._ctx.arcTo(t, e, n, i, a), this;
  }, r.prototype.rect = function(t, e, n, i) {
    return this._drawPendingPt(), this._ctx && this._ctx.rect(t, e, n, i), this.addData(ft.R, t, e, n, i), this;
  }, r.prototype.closePath = function() {
    this._drawPendingPt(), this.addData(ft.Z);
    var t = this._ctx, e = this._x0, n = this._y0;
    return t && t.closePath(), this._xi = e, this._yi = n, this;
  }, r.prototype.fill = function(t) {
    t && t.fill(), this.toStatic();
  }, r.prototype.stroke = function(t) {
    t && t.stroke(), this.toStatic();
  }, r.prototype.len = function() {
    return this._len;
  }, r.prototype.setData = function(t) {
    var e = t.length;
    !(this.data && this.data.length === e) && $u && (this.data = new Float32Array(e));
    for (var n = 0; n < e; n++)
      this.data[n] = t[n];
    this._len = e;
  }, r.prototype.appendPath = function(t) {
    t instanceof Array || (t = [t]);
    for (var e = t.length, n = 0, i = this._len, a = 0; a < e; a++)
      n += t[a].len();
    $u && this.data instanceof Float32Array && (this.data = new Float32Array(i + n));
    for (var a = 0; a < e; a++)
      for (var o = t[a].data, s = 0; s < o.length; s++)
        this.data[i++] = o[s];
    this._len = i;
  }, r.prototype.addData = function(t, e, n, i, a, o, s, u, l) {
    if (this._saveData) {
      var f = this.data;
      this._len + arguments.length > f.length && (this._expandData(), f = this.data);
      for (var h = 0; h < arguments.length; h++)
        f[this._len++] = arguments[h];
    }
  }, r.prototype._drawPendingPt = function() {
    this._pendingPtDist > 0 && (this._ctx && this._ctx.lineTo(this._pendingPtX, this._pendingPtY), this._pendingPtDist = 0);
  }, r.prototype._expandData = function() {
    if (!(this.data instanceof Array)) {
      for (var t = [], e = 0; e < this._len; e++)
        t[e] = this.data[e];
      this.data = t;
    }
  }, r.prototype.toStatic = function() {
    if (this._saveData) {
      this._drawPendingPt();
      var t = this.data;
      t instanceof Array && (t.length = this._len, $u && this._len > 11 && (this.data = new Float32Array(t)));
    }
  }, r.prototype.getBoundingRect = function() {
    Ve[0] = Ve[1] = ze[0] = ze[1] = Number.MAX_VALUE, mr[0] = mr[1] = Ge[0] = Ge[1] = -Number.MAX_VALUE;
    var t = this.data, e = 0, n = 0, i = 0, a = 0, o;
    for (o = 0; o < this._len; ) {
      var s = t[o++], u = o === 1;
      switch (u && (e = t[o], n = t[o + 1], i = e, a = n), s) {
        case ft.M:
          e = i = t[o++], n = a = t[o++], ze[0] = i, ze[1] = a, Ge[0] = i, Ge[1] = a;
          break;
        case ft.L:
          wv(e, n, t[o], t[o + 1], ze, Ge), e = t[o++], n = t[o++];
          break;
        case ft.C:
          cw(e, n, t[o++], t[o++], t[o++], t[o++], t[o], t[o + 1], ze, Ge), e = t[o++], n = t[o++];
          break;
        case ft.Q:
          vw(e, n, t[o++], t[o++], t[o], t[o + 1], ze, Ge), e = t[o++], n = t[o++];
          break;
        case ft.A:
          var l = t[o++], f = t[o++], h = t[o++], v = t[o++], c = t[o++], d = t[o++] + c;
          o += 1;
          var p = !t[o++];
          u && (i = rn(c) * h + l, a = nn(c) * v + f), dw(l, f, h, v, c, d, p, ze, Ge), e = rn(d) * h + l, n = nn(d) * v + f;
          break;
        case ft.R:
          i = e = t[o++], a = n = t[o++];
          var g = t[o++], y = t[o++];
          wv(i, a, i + g, a + y, ze, Ge);
          break;
        case ft.Z:
          e = i, n = a;
          break;
      }
      Mr(Ve, Ve, ze), Er(mr, mr, Ge);
    }
    return o === 0 && (Ve[0] = Ve[1] = mr[0] = mr[1] = 0), new st(Ve[0], Ve[1], mr[0] - Ve[0], mr[1] - Ve[1]);
  }, r.prototype._calculateLength = function() {
    var t = this.data, e = this._len, n = this._ux, i = this._uy, a = 0, o = 0, s = 0, u = 0;
    this._pathSegLen || (this._pathSegLen = []);
    for (var l = this._pathSegLen, f = 0, h = 0, v = 0; v < e; ) {
      var c = t[v++], d = v === 1;
      d && (a = t[v], o = t[v + 1], s = a, u = o);
      var p = -1;
      switch (c) {
        case ft.M:
          a = s = t[v++], o = u = t[v++];
          break;
        case ft.L: {
          var g = t[v++], y = t[v++], m = g - a, _ = y - o;
          (rr(m) > n || rr(_) > i || v === e - 1) && (p = Math.sqrt(m * m + _ * _), a = g, o = y);
          break;
        }
        case ft.C: {
          var S = t[v++], w = t[v++], g = t[v++], y = t[v++], b = t[v++], x = t[v++];
          p = xS(a, o, S, w, g, y, b, x, 10), a = b, o = x;
          break;
        }
        case ft.Q: {
          var S = t[v++], w = t[v++], g = t[v++], y = t[v++];
          p = DS(a, o, S, w, g, y, 10), a = g, o = y;
          break;
        }
        case ft.A:
          var T = t[v++], D = t[v++], A = t[v++], C = t[v++], E = t[v++], P = t[v++], L = P + E;
          v += 1, d && (s = rn(E) * A + T, u = nn(E) * C + D), p = qu(A, C) * Xu(Dr, Math.abs(P)), a = rn(L) * A + T, o = nn(L) * C + D;
          break;
        case ft.R: {
          s = a = t[v++], u = o = t[v++];
          var O = t[v++], R = t[v++];
          p = O * 2 + R * 2;
          break;
        }
        case ft.Z: {
          var m = s - a, _ = u - o;
          p = Math.sqrt(m * m + _ * _), a = s, o = u;
          break;
        }
      }
      p >= 0 && (l[h++] = p, f += p);
    }
    return this._pathLen = f, f;
  }, r.prototype.rebuildPath = function(t, e) {
    var n = this.data, i = this._ux, a = this._uy, o = this._len, s, u, l, f, h, v, c = e < 1, d, p, g = 0, y = 0, m, _ = 0, S, w;
    if (!(c && (this._pathSegLen || this._calculateLength(), d = this._pathSegLen, p = this._pathLen, m = e * p, !m)))
      t: for (var b = 0; b < o; ) {
        var x = n[b++], T = b === 1;
        switch (T && (l = n[b], f = n[b + 1], s = l, u = f), x !== ft.L && _ > 0 && (t.lineTo(S, w), _ = 0), x) {
          case ft.M:
            s = l = n[b++], u = f = n[b++], t.moveTo(l, f);
            break;
          case ft.L: {
            h = n[b++], v = n[b++];
            var D = rr(h - l), A = rr(v - f);
            if (D > i || A > a) {
              if (c) {
                var C = d[y++];
                if (g + C > m) {
                  var E = (m - g) / C;
                  t.lineTo(l * (1 - E) + h * E, f * (1 - E) + v * E);
                  break t;
                }
                g += C;
              }
              t.lineTo(h, v), l = h, f = v, _ = 0;
            } else {
              var P = D * D + A * A;
              P > _ && (S = h, w = v, _ = P);
            }
            break;
          }
          case ft.C: {
            var L = n[b++], O = n[b++], R = n[b++], G = n[b++], N = n[b++], B = n[b++];
            if (c) {
              var C = d[y++];
              if (g + C > m) {
                var E = (m - g) / C;
                rs(l, L, R, N, E, tn), rs(f, O, G, B, E, en), t.bezierCurveTo(tn[1], en[1], tn[2], en[2], tn[3], en[3]);
                break t;
              }
              g += C;
            }
            t.bezierCurveTo(L, O, R, G, N, B), l = N, f = B;
            break;
          }
          case ft.Q: {
            var L = n[b++], O = n[b++], R = n[b++], G = n[b++];
            if (c) {
              var C = d[y++];
              if (g + C > m) {
                var E = (m - g) / C;
                ns(l, L, R, E, tn), ns(f, O, G, E, en), t.quadraticCurveTo(tn[1], en[1], tn[2], en[2]);
                break t;
              }
              g += C;
            }
            t.quadraticCurveTo(L, O, R, G), l = R, f = G;
            break;
          }
          case ft.A:
            var I = n[b++], k = n[b++], V = n[b++], X = n[b++], tt = n[b++], et = n[b++], Et = n[b++], Nt = !n[b++], lt = V > X ? V : X, mt = rr(V - X) > 1e-3, pt = tt + et, q = !1;
            if (c) {
              var C = d[y++];
              g + C > m && (pt = tt + et * (m - g) / C, q = !0), g += C;
            }
            if (mt && t.ellipse ? t.ellipse(I, k, V, X, Et, tt, pt, Nt) : t.arc(I, k, lt, tt, pt, Nt), q)
              break t;
            T && (s = rn(tt) * V + I, u = nn(tt) * X + k), l = rn(pt) * V + I, f = nn(pt) * X + k;
            break;
          case ft.R:
            s = l = n[b], u = f = n[b + 1], h = n[b++], v = n[b++];
            var rt = n[b++], Fe = n[b++];
            if (c) {
              var C = d[y++];
              if (g + C > m) {
                var Pt = m - g;
                t.moveTo(h, v), t.lineTo(h + Xu(Pt, rt), v), Pt -= rt, Pt > 0 && t.lineTo(h + rt, v + Xu(Pt, Fe)), Pt -= Fe, Pt > 0 && t.lineTo(h + qu(rt - Pt, 0), v + Fe), Pt -= rt, Pt > 0 && t.lineTo(h, v + qu(Fe - Pt, 0));
                break t;
              }
              g += C;
            }
            t.rect(h, v, rt, Fe);
            break;
          case ft.Z:
            if (c) {
              var C = d[y++];
              if (g + C > m) {
                var E = (m - g) / C;
                t.lineTo(l * (1 - E) + s * E, f * (1 - E) + u * E);
                break t;
              }
              g += C;
            }
            t.closePath(), l = s, f = u;
        }
      }
  }, r.prototype.clone = function() {
    var t = new r(), e = this.data;
    return t.data = e.slice ? e.slice() : Array.prototype.slice.call(e), t._len = this._len, t;
  }, r.CMD = ft, r.initDefaultProps = (function() {
    var t = r.prototype;
    t._saveData = !0, t._ux = 0, t._uy = 0, t._pendingPtDist = 0, t._version = 0;
  })(), r;
})();
function zn(r, t, e, n, i, a, o) {
  if (i === 0)
    return !1;
  var s = i, u = 0, l = r;
  if (o > t + s && o > n + s || o < t - s && o < n - s || a > r + s && a > e + s || a < r - s && a < e - s)
    return !1;
  if (r !== e)
    u = (t - n) / (r - e), l = (r * n - e * t) / (r - e);
  else
    return Math.abs(a - r) <= s / 2;
  var f = u * a - o + l, h = f * f / (u * u + 1);
  return h <= s / 2 * s / 2;
}
function pw(r, t, e, n, i, a, o, s, u, l, f) {
  if (u === 0)
    return !1;
  var h = u;
  if (f > t + h && f > n + h && f > a + h && f > s + h || f < t - h && f < n - h && f < a - h && f < s - h || l > r + h && l > e + h && l > i + h && l > o + h || l < r - h && l < e - h && l < i - h && l < o - h)
    return !1;
  var v = wS(r, t, e, n, i, a, o, s, l, f);
  return v <= h / 2;
}
function gw(r, t, e, n, i, a, o, s, u) {
  if (o === 0)
    return !1;
  var l = o;
  if (u > t + l && u > n + l && u > a + l || u < t - l && u < n - l && u < a - l || s > r + l && s > e + l && s > i + l || s < r - l && s < e - l && s < i - l)
    return !1;
  var f = CS(r, t, e, n, i, a, s, u);
  return f <= l / 2;
}
var Cv = Math.PI * 2;
function so(r) {
  return r %= Cv, r < 0 && (r += Cv), r;
}
var Ri = Math.PI * 2;
function yw(r, t, e, n, i, a, o, s, u) {
  if (o === 0)
    return !1;
  var l = o;
  s -= r, u -= t;
  var f = Math.sqrt(s * s + u * u);
  if (f - l > e || f + l < e)
    return !1;
  if (Math.abs(n - i) % Ri < 1e-4)
    return !0;
  if (a) {
    var h = n;
    n = so(i), i = so(h);
  } else
    n = so(n), i = so(i);
  n > i && (i += Ri);
  var v = Math.atan2(u, s);
  return v < 0 && (v += Ri), v >= n && v <= i || v + Ri >= n && v + Ri <= i;
}
function ar(r, t, e, n, i, a) {
  if (a > t && a > n || a < t && a < n || n === t)
    return 0;
  var o = (a - t) / (n - t), s = n < t ? 1 : -1;
  (o === 1 || o === 0) && (s = n < t ? 0.5 : -0.5);
  var u = o * (e - r) + r;
  return u === i ? 1 / 0 : u > i ? s : 0;
}
var _r = Mn.CMD, an = Math.PI * 2, mw = 1e-4;
function _w(r, t) {
  return Math.abs(r - t) < mw;
}
var Ut = [-1, -1, -1], me = [-1, -1];
function Sw() {
  var r = me[0];
  me[0] = me[1], me[1] = r;
}
function bw(r, t, e, n, i, a, o, s, u, l) {
  if (l > t && l > n && l > a && l > s || l < t && l < n && l < a && l < s)
    return 0;
  var f = es(t, n, a, s, l, Ut);
  if (f === 0)
    return 0;
  for (var h = 0, v = -1, c = void 0, d = void 0, p = 0; p < f; p++) {
    var g = Ut[p], y = g === 0 || g === 1 ? 0.5 : 1, m = Rt(r, e, i, o, g);
    m < u || (v < 0 && (v = Kg(t, n, a, s, me), me[1] < me[0] && v > 1 && Sw(), c = Rt(t, n, a, s, me[0]), v > 1 && (d = Rt(t, n, a, s, me[1]))), v === 2 ? g < me[0] ? h += c < t ? y : -y : g < me[1] ? h += d < c ? y : -y : h += s < d ? y : -y : g < me[0] ? h += c < t ? y : -y : h += s < c ? y : -y);
  }
  return h;
}
function ww(r, t, e, n, i, a, o, s) {
  if (s > t && s > n && s > a || s < t && s < n && s < a)
    return 0;
  var u = TS(t, n, a, s, Ut);
  if (u === 0)
    return 0;
  var l = Qg(t, n, a);
  if (l >= 0 && l <= 1) {
    for (var f = 0, h = ee(t, n, a, l), v = 0; v < u; v++) {
      var c = Ut[v] === 0 || Ut[v] === 1 ? 0.5 : 1, d = ee(r, e, i, Ut[v]);
      d < o || (Ut[v] < l ? f += h < t ? c : -c : f += a < h ? c : -c);
    }
    return f;
  } else {
    var c = Ut[0] === 0 || Ut[0] === 1 ? 0.5 : 1, d = ee(r, e, i, Ut[0]);
    return d < o ? 0 : a < t ? c : -c;
  }
}
function xw(r, t, e, n, i, a, o, s) {
  if (s -= t, s > e || s < -e)
    return 0;
  var u = Math.sqrt(e * e - s * s);
  Ut[0] = -u, Ut[1] = u;
  var l = Math.abs(n - i);
  if (l < 1e-4)
    return 0;
  if (l >= an - 1e-4) {
    n = 0, i = an;
    var f = a ? 1 : -1;
    return o >= Ut[0] + r && o <= Ut[1] + r ? f : 0;
  }
  if (n > i) {
    var h = n;
    n = i, i = h;
  }
  n < 0 && (n += an, i += an);
  for (var v = 0, c = 0; c < 2; c++) {
    var d = Ut[c];
    if (d + r > o) {
      var p = Math.atan2(s, d), f = a ? 1 : -1;
      p < 0 && (p = an + p), (p >= n && p <= i || p + an >= n && p + an <= i) && (p > Math.PI / 2 && p < Math.PI * 1.5 && (f = -f), v += f);
    }
  }
  return v;
}
function Dy(r, t, e, n, i) {
  for (var a = r.data, o = r.len(), s = 0, u = 0, l = 0, f = 0, h = 0, v, c, d = 0; d < o; ) {
    var p = a[d++], g = d === 1;
    switch (p === _r.M && d > 1 && (e || (s += ar(u, l, f, h, n, i))), g && (u = a[d], l = a[d + 1], f = u, h = l), p) {
      case _r.M:
        f = a[d++], h = a[d++], u = f, l = h;
        break;
      case _r.L:
        if (e) {
          if (zn(u, l, a[d], a[d + 1], t, n, i))
            return !0;
        } else
          s += ar(u, l, a[d], a[d + 1], n, i) || 0;
        u = a[d++], l = a[d++];
        break;
      case _r.C:
        if (e) {
          if (pw(u, l, a[d++], a[d++], a[d++], a[d++], a[d], a[d + 1], t, n, i))
            return !0;
        } else
          s += bw(u, l, a[d++], a[d++], a[d++], a[d++], a[d], a[d + 1], n, i) || 0;
        u = a[d++], l = a[d++];
        break;
      case _r.Q:
        if (e) {
          if (gw(u, l, a[d++], a[d++], a[d], a[d + 1], t, n, i))
            return !0;
        } else
          s += ww(u, l, a[d++], a[d++], a[d], a[d + 1], n, i) || 0;
        u = a[d++], l = a[d++];
        break;
      case _r.A:
        var y = a[d++], m = a[d++], _ = a[d++], S = a[d++], w = a[d++], b = a[d++];
        d += 1;
        var x = !!(1 - a[d++]);
        v = Math.cos(w) * _ + y, c = Math.sin(w) * S + m, g ? (f = v, h = c) : s += ar(u, l, v, c, n, i);
        var T = (n - y) * S / _ + y;
        if (e) {
          if (yw(y, m, S, w, w + b, x, t, T, i))
            return !0;
        } else
          s += xw(y, m, S, w, w + b, x, T, i);
        u = Math.cos(w + b) * _ + y, l = Math.sin(w + b) * S + m;
        break;
      case _r.R:
        f = u = a[d++], h = l = a[d++];
        var D = a[d++], A = a[d++];
        if (v = f + D, c = h + A, e) {
          if (zn(f, h, v, h, t, n, i) || zn(v, h, v, c, t, n, i) || zn(v, c, f, c, t, n, i) || zn(f, c, f, h, t, n, i))
            return !0;
        } else
          s += ar(v, h, v, c, n, i), s += ar(f, c, f, h, n, i);
        break;
      case _r.Z:
        if (e) {
          if (zn(u, l, f, h, t, n, i))
            return !0;
        } else
          s += ar(u, l, f, h, n, i);
        u = f, l = h;
        break;
    }
  }
  return !e && !_w(l, h) && (s += ar(u, l, f, h, n, i) || 0), s !== 0;
}
function Tw(r, t, e) {
  return Dy(r, 0, !1, t, e);
}
function Cw(r, t, e, n) {
  return Dy(r, t, !0, e, n);
}
var Ay = ut({
  fill: "#000",
  stroke: null,
  strokePercent: 1,
  fillOpacity: 1,
  strokeOpacity: 1,
  lineDashOffset: 0,
  lineWidth: 1,
  lineCap: "butt",
  miterLimit: 10,
  strokeNoScale: !1,
  strokeFirst: !1
}, bn), Dw = {
  style: ut({
    fill: !0,
    stroke: !0,
    strokePercent: !0,
    fillOpacity: !0,
    strokeOpacity: !0,
    lineDashOffset: !0,
    lineWidth: !0,
    miterLimit: !0
  }, Vs.style)
}, ju = ma.concat([
  "invisible",
  "culling",
  "z",
  "z2",
  "zlevel",
  "parent"
]), ct = (function(r) {
  z(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.update = function() {
    var e = this;
    r.prototype.update.call(this);
    var n = this.style;
    if (n.decal) {
      var i = this._decalEl = this._decalEl || new t();
      i.buildPath === t.prototype.buildPath && (i.buildPath = function(u) {
        e.buildPath(u, e.shape);
      }), i.silent = !0;
      var a = i.style;
      for (var o in n)
        a[o] !== n[o] && (a[o] = n[o]);
      a.fill = n.fill ? n.decal : null, a.decal = null, a.shadowColor = null, n.strokeFirst && (a.stroke = null);
      for (var s = 0; s < ju.length; ++s)
        i[ju[s]] = this[ju[s]];
      i.__dirty |= ue;
    } else this._decalEl && (this._decalEl = null);
  }, t.prototype.getDecalElement = function() {
    return this._decalEl;
  }, t.prototype._init = function(e) {
    var n = yt(e);
    this.shape = this.getDefaultShape();
    var i = this.getDefaultStyle();
    i && this.useStyle(i);
    for (var a = 0; a < n.length; a++) {
      var o = n[a], s = e[o];
      o === "style" ? this.style ? F(this.style, s) : this.useStyle(s) : o === "shape" ? F(this.shape, s) : r.prototype.attrKV.call(this, o, s);
    }
    this.style || this.useStyle({});
  }, t.prototype.getDefaultStyle = function() {
    return null;
  }, t.prototype.getDefaultShape = function() {
    return {};
  }, t.prototype.canBeInsideText = function() {
    return this.hasFill();
  }, t.prototype.getInsideTextFill = function() {
    var e = this.style.fill;
    if (e !== "none") {
      if (W(e)) {
        var n = ya(e, 0);
        return n > 0.5 ? sf : n > 0.2 ? tb : uf;
      } else if (e)
        return uf;
    }
    return sf;
  }, t.prototype.getInsideTextStroke = function(e) {
    var n = this.style.fill;
    if (W(n)) {
      var i = this.__zr, a = !!(i && i.isDarkMode()), o = ya(e, 0) < of;
      if (a === o)
        return n;
    }
  }, t.prototype.buildPath = function(e, n, i) {
  }, t.prototype.pathUpdated = function() {
    this.__dirty &= ~Qn;
  }, t.prototype.getUpdatedPathProxy = function(e) {
    return !this.path && this.createPathProxy(), this.path.beginPath(), this.buildPath(this.path, this.shape, e), this.path;
  }, t.prototype.createPathProxy = function() {
    this.path = new Mn(!1);
  }, t.prototype.hasStroke = function() {
    var e = this.style, n = e.stroke;
    return !(n == null || n === "none" || !(e.lineWidth > 0));
  }, t.prototype.hasFill = function() {
    var e = this.style, n = e.fill;
    return n != null && n !== "none";
  }, t.prototype.getBoundingRect = function() {
    var e = this._rect, n = this.style, i = !e;
    if (i) {
      var a = !1;
      this.path || (a = !0, this.createPathProxy());
      var o = this.path;
      (a || this.__dirty & Qn) && (o.beginPath(), this.buildPath(o, this.shape, !1), this.pathUpdated()), e = o.getBoundingRect();
    }
    if (this._rect = e, this.hasStroke() && this.path && this.path.len() > 0) {
      var s = this._rectStroke || (this._rectStroke = e.clone());
      if (this.__dirty || i) {
        s.copy(e);
        var u = n.strokeNoScale ? this.getLineScale() : 1, l = n.lineWidth;
        if (!this.hasFill()) {
          var f = this.strokeContainThreshold;
          l = Math.max(l, f ?? 4);
        }
        u > 1e-10 && (s.width += l / u, s.height += l / u, s.x -= l / u / 2, s.y -= l / u / 2);
      }
      return s;
    }
    return e;
  }, t.prototype.contain = function(e, n) {
    var i = this.transformCoordToLocal(e, n), a = this.getBoundingRect(), o = this.style;
    if (e = i[0], n = i[1], a.contain(e, n)) {
      var s = this.path;
      if (this.hasStroke()) {
        var u = o.lineWidth, l = o.strokeNoScale ? this.getLineScale() : 1;
        if (l > 1e-10 && (this.hasFill() || (u = Math.max(u, this.strokeContainThreshold)), Cw(s, u / l, e, n)))
          return !0;
      }
      if (this.hasFill())
        return Tw(s, e, n);
    }
    return !1;
  }, t.prototype.dirtyShape = function() {
    this.__dirty |= Qn, this._rect && (this._rect = null), this._decalEl && this._decalEl.dirtyShape(), this.markRedraw();
  }, t.prototype.dirty = function() {
    this.dirtyStyle(), this.dirtyShape();
  }, t.prototype.animateShape = function(e) {
    return this.animate("shape", e);
  }, t.prototype.updateDuringAnimation = function(e) {
    e === "style" ? this.dirtyStyle() : e === "shape" ? this.dirtyShape() : this.markRedraw();
  }, t.prototype.attrKV = function(e, n) {
    e === "shape" ? this.setShape(n) : r.prototype.attrKV.call(this, e, n);
  }, t.prototype.setShape = function(e, n) {
    var i = this.shape;
    return i || (i = this.shape = {}), typeof e == "string" ? i[e] = n : F(i, e), this.dirtyShape(), this;
  }, t.prototype.shapeChanged = function() {
    return !!(this.__dirty & Qn);
  }, t.prototype.createStyle = function(e) {
    return Oa(Ay, e);
  }, t.prototype._innerSaveToNormal = function(e) {
    r.prototype._innerSaveToNormal.call(this, e);
    var n = this._normalState;
    e.shape && !n.shape && (n.shape = F({}, this.shape));
  }, t.prototype._applyStateObj = function(e, n, i, a, o, s) {
    r.prototype._applyStateObj.call(this, e, n, i, a, o, s);
    var u = !(n && a), l;
    if (n && n.shape ? o ? a ? l = n.shape : (l = F({}, i.shape), F(l, n.shape)) : (l = F({}, a ? this.shape : i.shape), F(l, n.shape)) : u && (l = i.shape), l)
      if (o) {
        this.shape = F({}, this.shape);
        for (var f = {}, h = yt(l), v = 0; v < h.length; v++) {
          var c = h[v];
          typeof l[c] == "object" ? this.shape[c] = l[c] : f[c] = l[c];
        }
        this._transitionState(e, {
          shape: f
        }, s);
      } else
        this.shape = l, this.dirtyShape();
  }, t.prototype._mergeStates = function(e) {
    for (var n = r.prototype._mergeStates.call(this, e), i, a = 0; a < e.length; a++) {
      var o = e[a];
      o.shape && (i = i || {}, this._mergeStyle(i, o.shape));
    }
    return i && (n.shape = i), n;
  }, t.prototype.getAnimationStyleProps = function() {
    return Dw;
  }, t.prototype.isZeroArea = function() {
    return !1;
  }, t.extend = function(e) {
    var n = (function(a) {
      z(o, a);
      function o(s) {
        var u = a.call(this, s) || this;
        return e.init && e.init.call(u, s), u;
      }
      return o.prototype.getDefaultStyle = function() {
        return nt(e.style);
      }, o.prototype.getDefaultShape = function() {
        return nt(e.shape);
      }, o;
    })(t);
    for (var i in e)
      typeof e[i] == "function" && (n.prototype[i] = e[i]);
    return n;
  }, t.initDefaultProps = (function() {
    var e = t.prototype;
    e.type = "path", e.strokeContainThreshold = 5, e.segmentIgnoreThreshold = 0, e.subPixelOptimize = !1, e.autoBatch = !1, e.__dirty = ue | $i | Qn;
  })(), t;
})(za), Aw = ut({
  strokeFirst: !0,
  font: Cn,
  x: 0,
  y: 0,
  textAlign: "left",
  textBaseline: "top",
  miterLimit: 2
}, Ay), ls = (function(r) {
  z(t, r);
  function t() {
    return r !== null && r.apply(this, arguments) || this;
  }
  return t.prototype.hasStroke = function() {
    var e = this.style, n = e.stroke;
    return n != null && n !== "none" && e.lineWidth > 0;
  }, t.prototype.hasFill = function() {
    var e = this.style, n = e.fill;
    return n != null && n !== "none";
  }, t.prototype.createStyle = function(e) {
    return Oa(Aw, e);
  }, t.prototype.setBoundingRect = function(e) {
    this._rect = e;
  }, t.prototype.getBoundingRect = function() {
    var e = this.style;
    if (!this._rect) {
      var n = e.text;
      n != null ? n += "" : n = "";
      var i = dh(n, e.font, e.textAlign, e.textBaseline);
      if (i.x += e.x || 0, i.y += e.y || 0, this.hasStroke()) {
        var a = e.lineWidth;
        i.x -= a / 2, i.y -= a / 2, i.width += a, i.height += a;
      }
      this._rect = i;
    }
    return this._rect;
  }, t.initDefaultProps = (function() {
    var e = t.prototype;
    e.dirtyRectTolerance = 10;
  })(), t;
})(za);
ls.prototype.type = "tspan";
var Mw = ut({
  x: 0,
  y: 0
}, bn), Ew = {
  style: ut({
    x: !0,
    y: !0,
    width: !0,
    height: !0,
    sx: !0,
    sy: !0,
    sWidth: !0,
    sHeight: !0
  }, Vs.style)
};
function Pw(r) {
  return !!(r && typeof r != "string" && r.width && r.height);
}
var dr = (function(r) {
  z(t, r);
  function t() {
    return r !== null && r.apply(this, arguments) || this;
  }
  return t.prototype.createStyle = function(e) {
    return Oa(Mw, e);
  }, t.prototype._getSize = function(e) {
    var n = this.style, i = n[e];
    if (i != null)
      return i;
    var a = Pw(n.image) ? n.image : this.__image;
    if (!a)
      return 0;
    var o = e === "width" ? "height" : "width", s = n[o];
    return s == null ? a[e] : a[e] / a[o] * s;
  }, t.prototype.getWidth = function() {
    return this._getSize("width");
  }, t.prototype.getHeight = function() {
    return this._getSize("height");
  }, t.prototype.getAnimationStyleProps = function() {
    return Ew;
  }, t.prototype.getBoundingRect = function() {
    var e = this.style;
    return this._rect || (this._rect = new st(e.x || 0, e.y || 0, this.getWidth(), this.getHeight())), this._rect;
  }, t;
})(za);
dr.prototype.type = "image";
function Iw(r, t) {
  var e = t.x, n = t.y, i = t.width, a = t.height, o = t.r, s, u, l, f;
  i < 0 && (e = e + i, i = -i), a < 0 && (n = n + a, a = -a), typeof o == "number" ? s = u = l = f = o : o instanceof Array ? o.length === 1 ? s = u = l = f = o[0] : o.length === 2 ? (s = l = o[0], u = f = o[1]) : o.length === 3 ? (s = o[0], u = f = o[1], l = o[2]) : (s = o[0], u = o[1], l = o[2], f = o[3]) : s = u = l = f = 0;
  var h;
  s + u > i && (h = s + u, s *= i / h, u *= i / h), l + f > i && (h = l + f, l *= i / h, f *= i / h), u + l > a && (h = u + l, u *= a / h, l *= a / h), s + f > a && (h = s + f, s *= a / h, f *= a / h), r.moveTo(e + s, n), r.lineTo(e + i - u, n), u !== 0 && r.arc(e + i - u, n + u, u, -Math.PI / 2, 0), r.lineTo(e + i, n + a - l), l !== 0 && r.arc(e + i - l, n + a - l, l, 0, Math.PI / 2), r.lineTo(e + f, n + a), f !== 0 && r.arc(e + f, n + a - f, f, Math.PI / 2, Math.PI), r.lineTo(e, n + s), s !== 0 && r.arc(e + s, n + s, s, Math.PI, Math.PI * 1.5);
}
var ei = Math.round;
function My(r, t, e) {
  if (t) {
    var n = t.x1, i = t.x2, a = t.y1, o = t.y2;
    r.x1 = n, r.x2 = i, r.y1 = a, r.y2 = o;
    var s = e && e.lineWidth;
    return s && (ei(n * 2) === ei(i * 2) && (r.x1 = r.x2 = gn(n, s, !0)), ei(a * 2) === ei(o * 2) && (r.y1 = r.y2 = gn(a, s, !0))), r;
  }
}
function Ey(r, t, e) {
  if (t) {
    var n = t.x, i = t.y, a = t.width, o = t.height;
    r.x = n, r.y = i, r.width = a, r.height = o;
    var s = e && e.lineWidth;
    return s && (r.x = gn(n, s, !0), r.y = gn(i, s, !0), r.width = Math.max(gn(n + a, s, !1) - r.x, a === 0 ? 0 : 1), r.height = Math.max(gn(i + o, s, !1) - r.y, o === 0 ? 0 : 1)), r;
  }
}
function gn(r, t, e) {
  if (!t)
    return r;
  var n = ei(r * 2);
  return (n + ei(t)) % 2 === 0 ? n / 2 : (n + (e ? 1 : -1)) / 2;
}
var Lw = /* @__PURE__ */ (function() {
  function r() {
    this.x = 0, this.y = 0, this.width = 0, this.height = 0;
  }
  return r;
})(), Ow = {}, Tt = (function(r) {
  z(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultShape = function() {
    return new Lw();
  }, t.prototype.buildPath = function(e, n) {
    var i, a, o, s;
    if (this.subPixelOptimize) {
      var u = Ey(Ow, n, this.style);
      i = u.x, a = u.y, o = u.width, s = u.height, u.r = n.r, n = u;
    } else
      i = n.x, a = n.y, o = n.width, s = n.height;
    n.r ? Iw(e, n) : e.rect(i, a, o, s);
  }, t.prototype.isZeroArea = function() {
    return !this.shape.width || !this.shape.height;
  }, t;
})(ct);
Tt.prototype.type = "rect";
var Dv = {
  fill: "#000"
}, Av = 2, Rw = {
  style: ut({
    fill: !0,
    stroke: !0,
    fillOpacity: !0,
    strokeOpacity: !0,
    lineWidth: !0,
    fontSize: !0,
    lineHeight: !0,
    width: !0,
    height: !0,
    textShadowColor: !0,
    textShadowBlur: !0,
    textShadowOffsetX: !0,
    textShadowOffsetY: !0,
    backgroundColor: !0,
    padding: !0,
    borderColor: !0,
    borderWidth: !0,
    borderRadius: !0
  }, Vs.style)
}, Mt = (function(r) {
  z(t, r);
  function t(e) {
    var n = r.call(this) || this;
    return n.type = "text", n._children = [], n._defaultStyle = Dv, n.attr(e), n;
  }
  return t.prototype.childrenRef = function() {
    return this._children;
  }, t.prototype.update = function() {
    r.prototype.update.call(this), this.styleChanged() && this._updateSubTexts();
    for (var e = 0; e < this._children.length; e++) {
      var n = this._children[e];
      n.zlevel = this.zlevel, n.z = this.z, n.z2 = this.z2, n.culling = this.culling, n.cursor = this.cursor, n.invisible = this.invisible;
    }
  }, t.prototype.updateTransform = function() {
    var e = this.innerTransformable;
    e ? (e.updateTransform(), e.transform && (this.transform = e.transform)) : r.prototype.updateTransform.call(this);
  }, t.prototype.getLocalTransform = function(e) {
    var n = this.innerTransformable;
    return n ? n.getLocalTransform(e) : r.prototype.getLocalTransform.call(this, e);
  }, t.prototype.getComputedTransform = function() {
    return this.__hostTarget && (this.__hostTarget.getComputedTransform(), this.__hostTarget.updateInnerText(!0)), r.prototype.getComputedTransform.call(this);
  }, t.prototype._updateSubTexts = function() {
    this._childCursor = 0, Vw(this.style), this.style.rich ? this._updateRichTexts() : this._updatePlainTexts(), this._children.length = this._childCursor, this.styleUpdated();
  }, t.prototype.addSelfToZr = function(e) {
    r.prototype.addSelfToZr.call(this, e);
    for (var n = 0; n < this._children.length; n++)
      this._children[n].__zr = e;
  }, t.prototype.removeSelfFromZr = function(e) {
    r.prototype.removeSelfFromZr.call(this, e);
    for (var n = 0; n < this._children.length; n++)
      this._children[n].__zr = null;
  }, t.prototype.getBoundingRect = function() {
    if (this.styleChanged() && this._updateSubTexts(), !this._rect) {
      for (var e = new st(0, 0, 0, 0), n = this._children, i = [], a = null, o = 0; o < n.length; o++) {
        var s = n[o], u = s.getBoundingRect(), l = s.getLocalTransform(i);
        l ? (e.copy(u), e.applyTransform(l), a = a || e.clone(), a.union(e)) : (a = a || u.clone(), a.union(u));
      }
      this._rect = a || e;
    }
    return this._rect;
  }, t.prototype.setDefaultTextStyle = function(e) {
    this._defaultStyle = e || Dv;
  }, t.prototype.setTextContent = function(e) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("Can't attach text on another text");
  }, t.prototype._mergeStyle = function(e, n) {
    if (!n)
      return e;
    var i = n.rich, a = e.rich || i && {};
    return F(e, n), i && a ? (this._mergeRich(a, i), e.rich = a) : a && (e.rich = a), e;
  }, t.prototype._mergeRich = function(e, n) {
    for (var i = yt(n), a = 0; a < i.length; a++) {
      var o = i[a];
      e[o] = e[o] || {}, F(e[o], n[o]);
    }
  }, t.prototype.getAnimationStyleProps = function() {
    return Rw;
  }, t.prototype._getOrCreateChild = function(e) {
    var n = this._children[this._childCursor];
    return (!n || !(n instanceof e)) && (n = new e()), this._children[this._childCursor++] = n, n.__zr = this.__zr, n.parent = this, n;
  }, t.prototype._updatePlainTexts = function() {
    var e = this.style, n = e.font || Cn, i = e.padding, a = Rv(e), o = nw(a, e), s = Ku(e), u = !!e.backgroundColor, l = o.outerHeight, f = o.outerWidth, h = o.contentWidth, v = o.lines, c = o.lineHeight, d = this._defaultStyle;
    this.isTruncated = !!o.isTruncated;
    var p = e.x || 0, g = e.y || 0, y = e.align || d.align || "left", m = e.verticalAlign || d.verticalAlign || "top", _ = p, S = Jn(g, o.contentHeight, m);
    if (s || i) {
      var w = ji(p, f, y), b = Jn(g, l, m);
      s && this._renderBackground(e, e, w, b, f, l);
    }
    S += c / 2, i && (_ = Ov(p, y, i), m === "top" ? S += i[0] : m === "bottom" && (S -= i[2]));
    for (var x = 0, T = !1, D = Lv("fill" in e ? e.fill : (T = !0, d.fill)), A = Iv("stroke" in e ? e.stroke : !u && (!d.autoStroke || T) ? (x = Av, d.stroke) : null), C = e.textShadowBlur > 0, E = e.width != null && (e.overflow === "truncate" || e.overflow === "break" || e.overflow === "breakAll"), P = o.calculatedLineHeight, L = 0; L < v.length; L++) {
      var O = this._getOrCreateChild(ls), R = O.createStyle();
      O.useStyle(R), R.text = v[L], R.x = _, R.y = S, R.textAlign = y, R.textBaseline = "middle", R.opacity = e.opacity, R.strokeFirst = !0, C && (R.shadowBlur = e.textShadowBlur || 0, R.shadowColor = e.textShadowColor || "transparent", R.shadowOffsetX = e.textShadowOffsetX || 0, R.shadowOffsetY = e.textShadowOffsetY || 0), R.stroke = A, R.fill = D, A && (R.lineWidth = e.lineWidth || x, R.lineDash = e.lineDash, R.lineDashOffset = e.lineDashOffset || 0), R.font = n, Ev(R, e), S += c, E && O.setBoundingRect(new st(ji(R.x, h, R.textAlign), Jn(R.y, P, R.textBaseline), h, P));
    }
  }, t.prototype._updateRichTexts = function() {
    var e = this.style, n = Rv(e), i = ow(n, e), a = i.width, o = i.outerWidth, s = i.outerHeight, u = e.padding, l = e.x || 0, f = e.y || 0, h = this._defaultStyle, v = e.align || h.align, c = e.verticalAlign || h.verticalAlign;
    this.isTruncated = !!i.isTruncated;
    var d = ji(l, o, v), p = Jn(f, s, c), g = d, y = p;
    u && (g += u[3], y += u[0]);
    var m = g + a;
    Ku(e) && this._renderBackground(e, e, d, p, o, s);
    for (var _ = !!e.backgroundColor, S = 0; S < i.lines.length; S++) {
      for (var w = i.lines[S], b = w.tokens, x = b.length, T = w.lineHeight, D = w.width, A = 0, C = g, E = m, P = x - 1, L = void 0; A < x && (L = b[A], !L.align || L.align === "left"); )
        this._placeToken(L, e, T, y, C, "left", _), D -= L.width, C += L.width, A++;
      for (; P >= 0 && (L = b[P], L.align === "right"); )
        this._placeToken(L, e, T, y, E, "right", _), D -= L.width, E -= L.width, P--;
      for (C += (a - (C - g) - (m - E) - D) / 2; A <= P; )
        L = b[A], this._placeToken(L, e, T, y, C + L.width / 2, "center", _), C += L.width, A++;
      y += T;
    }
  }, t.prototype._placeToken = function(e, n, i, a, o, s, u) {
    var l = n.rich[e.styleName] || {};
    l.text = e.text;
    var f = e.verticalAlign, h = a + i / 2;
    f === "top" ? h = a + e.height / 2 : f === "bottom" && (h = a + i - e.height / 2);
    var v = !e.isLineHolder && Ku(l);
    v && this._renderBackground(l, n, s === "right" ? o - e.width : s === "center" ? o - e.width / 2 : o, h - e.height / 2, e.width, e.height);
    var c = !!l.backgroundColor, d = e.textPadding;
    d && (o = Ov(o, s, d), h -= e.height / 2 - d[0] - e.innerHeight / 2);
    var p = this._getOrCreateChild(ls), g = p.createStyle();
    p.useStyle(g);
    var y = this._defaultStyle, m = !1, _ = 0, S = Lv("fill" in l ? l.fill : "fill" in n ? n.fill : (m = !0, y.fill)), w = Iv("stroke" in l ? l.stroke : "stroke" in n ? n.stroke : !c && !u && (!y.autoStroke || m) ? (_ = Av, y.stroke) : null), b = l.textShadowBlur > 0 || n.textShadowBlur > 0;
    g.text = e.text, g.x = o, g.y = h, b && (g.shadowBlur = l.textShadowBlur || n.textShadowBlur || 0, g.shadowColor = l.textShadowColor || n.textShadowColor || "transparent", g.shadowOffsetX = l.textShadowOffsetX || n.textShadowOffsetX || 0, g.shadowOffsetY = l.textShadowOffsetY || n.textShadowOffsetY || 0), g.textAlign = s, g.textBaseline = "middle", g.font = e.font || Cn, g.opacity = kr(l.opacity, n.opacity, 1), Ev(g, l), w && (g.lineWidth = kr(l.lineWidth, n.lineWidth, _), g.lineDash = K(l.lineDash, n.lineDash), g.lineDashOffset = n.lineDashOffset || 0, g.stroke = w), S && (g.fill = S);
    var x = e.contentWidth, T = e.contentHeight;
    p.setBoundingRect(new st(ji(g.x, x, g.textAlign), Jn(g.y, T, g.textBaseline), x, T));
  }, t.prototype._renderBackground = function(e, n, i, a, o, s) {
    var u = e.backgroundColor, l = e.borderWidth, f = e.borderColor, h = u && u.image, v = u && !h, c = e.borderRadius, d = this, p, g;
    if (v || e.lineHeight || l && f) {
      p = this._getOrCreateChild(Tt), p.useStyle(p.createStyle()), p.style.fill = null;
      var y = p.shape;
      y.x = i, y.y = a, y.width = o, y.height = s, y.r = c, p.dirtyShape();
    }
    if (v) {
      var m = p.style;
      m.fill = u || null, m.fillOpacity = K(e.fillOpacity, 1);
    } else if (h) {
      g = this._getOrCreateChild(dr), g.onload = function() {
        d.dirtyStyle();
      };
      var _ = g.style;
      _.image = u.image, _.x = i, _.y = a, _.width = o, _.height = s;
    }
    if (l && f) {
      var m = p.style;
      m.lineWidth = l, m.stroke = f, m.strokeOpacity = K(e.strokeOpacity, 1), m.lineDash = e.borderDash, m.lineDashOffset = e.borderDashOffset || 0, p.strokeContainThreshold = 0, p.hasFill() && p.hasStroke() && (m.strokeFirst = !0, m.lineWidth *= 2);
    }
    var S = (p || g).style;
    S.shadowBlur = e.shadowBlur || 0, S.shadowColor = e.shadowColor || "transparent", S.shadowOffsetX = e.shadowOffsetX || 0, S.shadowOffsetY = e.shadowOffsetY || 0, S.opacity = kr(e.opacity, n.opacity, 1);
  }, t.makeFont = function(e) {
    var n = "";
    return Fw(e) && (n = [
      e.fontStyle,
      e.fontWeight,
      Bw(e.fontSize),
      e.fontFamily || "sans-serif"
    ].join(" ")), n && Le(n) || e.textFont || e.font;
  }, t;
})(za), Nw = { left: !0, right: 1, center: 1 }, kw = { top: 1, bottom: 1, middle: 1 }, Mv = ["fontStyle", "fontWeight", "fontSize", "fontFamily"];
function Bw(r) {
  return typeof r == "string" && (r.indexOf("px") !== -1 || r.indexOf("rem") !== -1 || r.indexOf("em") !== -1) ? r : isNaN(+r) ? th + "px" : r + "px";
}
function Ev(r, t) {
  for (var e = 0; e < Mv.length; e++) {
    var n = Mv[e], i = t[n];
    i != null && (r[n] = i);
  }
}
function Fw(r) {
  return r.fontSize != null || r.fontFamily || r.fontWeight;
}
function Vw(r) {
  return Pv(r), M(r.rich, Pv), r;
}
function Pv(r) {
  if (r) {
    r.font = Mt.makeFont(r);
    var t = r.align;
    t === "middle" && (t = "center"), r.align = t == null || Nw[t] ? t : "left";
    var e = r.verticalAlign;
    e === "center" && (e = "middle"), r.verticalAlign = e == null || kw[e] ? e : "top";
    var n = r.padding;
    n && (r.padding = ah(r.padding));
  }
}
function Iv(r, t) {
  return r == null || t <= 0 || r === "transparent" || r === "none" ? null : r.image || r.colorStops ? "#000" : r;
}
function Lv(r) {
  return r == null || r === "none" ? null : r.image || r.colorStops ? "#000" : r;
}
function Ov(r, t, e) {
  return t === "right" ? r - e[1] : t === "center" ? r + e[3] / 2 - e[1] / 2 : r + e[3];
}
function Rv(r) {
  var t = r.text;
  return t != null && (t += ""), t;
}
function Ku(r) {
  return !!(r.backgroundColor || r.lineHeight || r.borderWidth && r.borderColor);
}
var at = Ct(), zw = function(r, t, e, n) {
  if (n) {
    var i = at(n);
    i.dataIndex = e, i.dataType = t, i.seriesIndex = r, i.ssrType = "chart", n.type === "group" && n.traverse(function(a) {
      var o = at(a);
      o.seriesIndex = r, o.dataIndex = e, o.dataType = t, o.ssrType = "chart";
    });
  }
}, Nv = 1, kv = {}, Py = Ct(), wh = Ct(), xh = 0, zs = 1, Gs = 2, Te = ["emphasis", "blur", "select"], fs = ["normal", "emphasis", "blur", "select"], Gw = 10, Hw = 9, wn = "highlight", Ho = "downplay", aa = "select", Wo = "unselect", oa = "toggleSelect";
function Gn(r) {
  return r != null && r !== "none";
}
function Hs(r, t, e) {
  r.onHoverStateChange && (r.hoverState || 0) !== e && r.onHoverStateChange(t), r.hoverState = e;
}
function Iy(r) {
  Hs(r, "emphasis", Gs);
}
function Ly(r) {
  r.hoverState === Gs && Hs(r, "normal", xh);
}
function Th(r) {
  Hs(r, "blur", zs);
}
function Oy(r) {
  r.hoverState === zs && Hs(r, "normal", xh);
}
function Ww(r) {
  r.selected = !0;
}
function Uw(r) {
  r.selected = !1;
}
function Bv(r, t, e) {
  t(r, e);
}
function pr(r, t, e) {
  Bv(r, t, e), r.isGroup && r.traverse(function(n) {
    Bv(n, t, e);
  });
}
function Fv(r, t) {
  switch (t) {
    case "emphasis":
      r.hoverState = Gs;
      break;
    case "normal":
      r.hoverState = xh;
      break;
    case "blur":
      r.hoverState = zs;
      break;
    case "select":
      r.selected = !0;
  }
}
function Yw(r, t, e, n) {
  for (var i = r.style, a = {}, o = 0; o < t.length; o++) {
    var s = t[o], u = i[s];
    a[s] = u ?? (n && n[s]);
  }
  for (var o = 0; o < r.animators.length; o++) {
    var l = r.animators[o];
    l.__fromStateTransition && l.__fromStateTransition.indexOf(e) < 0 && l.targetName === "style" && l.saveTo(a, t);
  }
  return a;
}
function Xw(r, t, e, n) {
  var i = e && ht(e, "select") >= 0, a = !1;
  if (r instanceof ct) {
    var o = Py(r), s = i && o.selectFill || o.normalFill, u = i && o.selectStroke || o.normalStroke;
    if (Gn(s) || Gn(u)) {
      n = n || {};
      var l = n.style || {};
      l.fill === "inherit" ? (a = !0, n = F({}, n), l = F({}, l), l.fill = s) : !Gn(l.fill) && Gn(s) ? (a = !0, n = F({}, n), l = F({}, l), l.fill = Jl(s)) : !Gn(l.stroke) && Gn(u) && (a || (n = F({}, n), l = F({}, l)), l.stroke = Jl(u)), n.style = l;
    }
  }
  if (n && n.z2 == null) {
    a || (n = F({}, n));
    var f = r.z2EmphasisLift;
    n.z2 = r.z2 + (f ?? Gw);
  }
  return n;
}
function qw(r, t, e) {
  if (e && e.z2 == null) {
    e = F({}, e);
    var n = r.z2SelectLift;
    e.z2 = r.z2 + (n ?? Hw);
  }
  return e;
}
function $w(r, t, e) {
  var n = ht(r.currentStates, t) >= 0, i = r.style.opacity, a = n ? null : Yw(r, ["opacity"], t, {
    opacity: 1
  });
  e = e || {};
  var o = e.style || {};
  return o.opacity == null && (e = F({}, e), o = F({
    // Already being applied 'emphasis'. DON'T mul opacity multiple times.
    opacity: n ? i : a.opacity * 0.1
  }, o), e.style = o), e;
}
function Qu(r, t) {
  var e = this.states[r];
  if (this.style) {
    if (r === "emphasis")
      return Xw(this, r, t, e);
    if (r === "blur")
      return $w(this, r, e);
    if (r === "select")
      return qw(this, r, e);
  }
  return e;
}
function Zw(r) {
  r.stateProxy = Qu;
  var t = r.getTextContent(), e = r.getTextGuideLine();
  t && (t.stateProxy = Qu), e && (e.stateProxy = Qu);
}
function Vv(r, t) {
  !By(r, t) && !r.__highByOuter && pr(r, Iy);
}
function zv(r, t) {
  !By(r, t) && !r.__highByOuter && pr(r, Ly);
}
function hs(r, t) {
  r.__highByOuter |= 1 << (t || 0), pr(r, Iy);
}
function cs(r, t) {
  !(r.__highByOuter &= ~(1 << (t || 0))) && pr(r, Ly);
}
function jw(r) {
  pr(r, Th);
}
function Ry(r) {
  pr(r, Oy);
}
function Ny(r) {
  pr(r, Ww);
}
function ky(r) {
  pr(r, Uw);
}
function By(r, t) {
  return r.__highDownSilentOnTouch && t.zrByTouch;
}
function Fy(r) {
  var t = r.getModel(), e = [], n = [];
  t.eachComponent(function(i, a) {
    var o = wh(a), s = i === "series", u = s ? r.getViewOfSeriesModel(a) : r.getViewOfComponentModel(a);
    !s && n.push(u), o.isBlured && (u.group.traverse(function(l) {
      Oy(l);
    }), s && e.push(a)), o.isBlured = !1;
  }), M(n, function(i) {
    i && i.toggleBlurSeries && i.toggleBlurSeries(e, !1, t);
  });
}
function pf(r, t, e, n) {
  var i = n.getModel();
  e = e || "coordinateSystem";
  function a(l, f) {
    for (var h = 0; h < f.length; h++) {
      var v = l.getItemGraphicEl(f[h]);
      v && Ry(v);
    }
  }
  if (r != null && !(!t || t === "none")) {
    var o = i.getSeriesByIndex(r), s = o.coordinateSystem;
    s && s.master && (s = s.master);
    var u = [];
    i.eachSeries(function(l) {
      var f = o === l, h = l.coordinateSystem;
      h && h.master && (h = h.master);
      var v = h && s ? h === s : f;
      if (!// Not blur other series if blurScope series
      (e === "series" && !f || e === "coordinateSystem" && !v || t === "series" && f)) {
        var c = n.getViewOfSeriesModel(l);
        if (c.group.traverse(function(g) {
          g.__highByOuter && f && t === "self" || Th(g);
        }), Qt(t))
          a(l.getData(), t);
        else if (Y(t))
          for (var d = yt(t), p = 0; p < d.length; p++)
            a(l.getData(d[p]), t[d[p]]);
        u.push(l), wh(l).isBlured = !0;
      }
    }), i.eachComponent(function(l, f) {
      if (l !== "series") {
        var h = n.getViewOfComponentModel(f);
        h && h.toggleBlurSeries && h.toggleBlurSeries(u, !0, i);
      }
    });
  }
}
function gf(r, t, e) {
  if (!(r == null || t == null)) {
    var n = e.getModel().getComponent(r, t);
    if (n) {
      wh(n).isBlured = !0;
      var i = e.getViewOfComponentModel(n);
      !i || !i.focusBlurEnabled || i.group.traverse(function(a) {
        Th(a);
      });
    }
  }
}
function Kw(r, t, e) {
  var n = r.seriesIndex, i = r.getData(t.dataType);
  if (!i) {
    process.env.NODE_ENV !== "production" && Ht("Unknown dataType " + t.dataType);
    return;
  }
  var a = An(i, t);
  a = (H(a) ? a[0] : a) || 0;
  var o = i.getItemGraphicEl(a);
  if (!o)
    for (var s = i.count(), u = 0; !o && u < s; )
      o = i.getItemGraphicEl(u++);
  if (o) {
    var l = at(o);
    pf(n, l.focus, l.blurScope, e);
  } else {
    var f = r.get(["emphasis", "focus"]), h = r.get(["emphasis", "blurScope"]);
    f != null && pf(n, f, h, e);
  }
}
function Ch(r, t, e, n) {
  var i = {
    focusSelf: !1,
    dispatchers: null
  };
  if (r == null || r === "series" || t == null || e == null)
    return i;
  var a = n.getModel().getComponent(r, t);
  if (!a)
    return i;
  var o = n.getViewOfComponentModel(a);
  if (!o || !o.findHighDownDispatchers)
    return i;
  for (var s = o.findHighDownDispatchers(e), u, l = 0; l < s.length; l++)
    if (process.env.NODE_ENV !== "production" && !li(s[l]) && Ht("param should be highDownDispatcher"), at(s[l]).focus === "self") {
      u = !0;
      break;
    }
  return {
    focusSelf: u,
    dispatchers: s
  };
}
function Qw(r, t, e) {
  process.env.NODE_ENV !== "production" && !li(r) && Ht("param should be highDownDispatcher");
  var n = at(r), i = Ch(n.componentMainType, n.componentIndex, n.componentHighDownName, e), a = i.dispatchers, o = i.focusSelf;
  a ? (o && gf(n.componentMainType, n.componentIndex, e), M(a, function(s) {
    return Vv(s, t);
  })) : (pf(n.seriesIndex, n.focus, n.blurScope, e), n.focus === "self" && gf(n.componentMainType, n.componentIndex, e), Vv(r, t));
}
function Jw(r, t, e) {
  process.env.NODE_ENV !== "production" && !li(r) && Ht("param should be highDownDispatcher"), Fy(e);
  var n = at(r), i = Ch(n.componentMainType, n.componentIndex, n.componentHighDownName, e).dispatchers;
  i ? M(i, function(a) {
    return zv(a, t);
  }) : zv(r, t);
}
function tx(r, t, e) {
  if (yf(t)) {
    var n = t.dataType, i = r.getData(n), a = An(i, t);
    H(a) || (a = [a]), r[t.type === oa ? "toggleSelect" : t.type === aa ? "select" : "unselect"](a, n);
  }
}
function Gv(r) {
  var t = r.getAllData();
  M(t, function(e) {
    var n = e.data, i = e.type;
    n.eachItemGraphicEl(function(a, o) {
      r.isSelected(o, i) ? Ny(a) : ky(a);
    });
  });
}
function ex(r) {
  var t = [];
  return r.eachSeries(function(e) {
    var n = e.getAllData();
    M(n, function(i) {
      i.data;
      var a = i.type, o = e.getSelectedDataIndices();
      if (o.length > 0) {
        var s = {
          dataIndex: o,
          seriesIndex: e.seriesIndex
        };
        a != null && (s.dataType = a), t.push(s);
      }
    });
  }), t;
}
function vs(r, t, e) {
  Vy(r, !0), pr(r, Zw), nx(r, t, e);
}
function rx(r) {
  Vy(r, !1);
}
function wa(r, t, e, n) {
  n ? rx(r) : vs(r, t, e);
}
function nx(r, t, e) {
  var n = at(r);
  t != null ? (n.focus = t, n.blurScope = e) : n.focus && (n.focus = null);
}
var Hv = ["emphasis", "blur", "select"], ix = {
  itemStyle: "getItemStyle",
  lineStyle: "getLineStyle",
  areaStyle: "getAreaStyle"
};
function ds(r, t, e, n) {
  e = e || "itemStyle";
  for (var i = 0; i < Hv.length; i++) {
    var a = Hv[i], o = t.getModel([a, e]), s = r.ensureState(a);
    s.style = o[ix[e]]();
  }
}
function Vy(r, t) {
  var e = t === !1, n = r;
  r.highDownSilentOnTouch && (n.__highDownSilentOnTouch = r.highDownSilentOnTouch), (!e || n.__highDownDispatcher) && (n.__highByOuter = n.__highByOuter || 0, n.__highDownDispatcher = !e);
}
function li(r) {
  return !!(r && r.__highDownDispatcher);
}
function ax(r) {
  var t = kv[r];
  return t == null && Nv <= 32 && (t = kv[r] = Nv++), t;
}
function yf(r) {
  var t = r.type;
  return t === aa || t === Wo || t === oa;
}
function Wv(r) {
  var t = r.type;
  return t === wn || t === Ho;
}
function ox(r) {
  var t = Py(r);
  t.normalFill = r.style.fill, t.normalStroke = r.style.stroke;
  var e = r.states.select || {};
  t.selectFill = e.style && e.style.fill || null, t.selectStroke = e.style && e.style.stroke || null;
}
var Hn = Mn.CMD, sx = [[], [], []], Uv = Math.sqrt, ux = Math.atan2;
function lx(r, t) {
  if (t) {
    var e = r.data, n = r.len(), i, a, o, s, u, l, f = Hn.M, h = Hn.C, v = Hn.L, c = Hn.R, d = Hn.A, p = Hn.Q;
    for (o = 0, s = 0; o < n; ) {
      switch (i = e[o++], s = o, a = 0, i) {
        case f:
          a = 1;
          break;
        case v:
          a = 1;
          break;
        case h:
          a = 3;
          break;
        case p:
          a = 2;
          break;
        case d:
          var g = t[4], y = t[5], m = Uv(t[0] * t[0] + t[1] * t[1]), _ = Uv(t[2] * t[2] + t[3] * t[3]), S = ux(-t[1] / _, t[0] / m);
          e[o] *= m, e[o++] += g, e[o] *= _, e[o++] += y, e[o++] *= m, e[o++] *= _, e[o++] += S, e[o++] += S, o += 2, s = o;
          break;
        case c:
          l[0] = e[o++], l[1] = e[o++], Zt(l, l, t), e[s++] = l[0], e[s++] = l[1], l[0] += e[o++], l[1] += e[o++], Zt(l, l, t), e[s++] = l[0], e[s++] = l[1];
      }
      for (u = 0; u < a; u++) {
        var w = sx[u];
        w[0] = e[o++], w[1] = e[o++], Zt(w, w, t), e[s++] = w[0], e[s++] = w[1];
      }
    }
    r.increaseVersion();
  }
}
var Ju = Math.sqrt, uo = Math.sin, lo = Math.cos, Ni = Math.PI;
function Yv(r) {
  return Math.sqrt(r[0] * r[0] + r[1] * r[1]);
}
function mf(r, t) {
  return (r[0] * t[0] + r[1] * t[1]) / (Yv(r) * Yv(t));
}
function Xv(r, t) {
  return (r[0] * t[1] < r[1] * t[0] ? -1 : 1) * Math.acos(mf(r, t));
}
function qv(r, t, e, n, i, a, o, s, u, l, f) {
  var h = u * (Ni / 180), v = lo(h) * (r - e) / 2 + uo(h) * (t - n) / 2, c = -1 * uo(h) * (r - e) / 2 + lo(h) * (t - n) / 2, d = v * v / (o * o) + c * c / (s * s);
  d > 1 && (o *= Ju(d), s *= Ju(d));
  var p = (i === a ? -1 : 1) * Ju((o * o * (s * s) - o * o * (c * c) - s * s * (v * v)) / (o * o * (c * c) + s * s * (v * v))) || 0, g = p * o * c / s, y = p * -s * v / o, m = (r + e) / 2 + lo(h) * g - uo(h) * y, _ = (t + n) / 2 + uo(h) * g + lo(h) * y, S = Xv([1, 0], [(v - g) / o, (c - y) / s]), w = [(v - g) / o, (c - y) / s], b = [(-1 * v - g) / o, (-1 * c - y) / s], x = Xv(w, b);
  if (mf(w, b) <= -1 && (x = Ni), mf(w, b) >= 1 && (x = 0), x < 0) {
    var T = Math.round(x / Ni * 1e6) / 1e6;
    x = Ni * 2 + T % 2 * Ni;
  }
  f.addData(l, m, _, o, s, S, x, h, a);
}
var fx = /([mlvhzcqtsa])([^mlvhzcqtsa]*)/ig, hx = /-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g;
function cx(r) {
  var t = new Mn();
  if (!r)
    return t;
  var e = 0, n = 0, i = e, a = n, o, s = Mn.CMD, u = r.match(fx);
  if (!u)
    return t;
  for (var l = 0; l < u.length; l++) {
    for (var f = u[l], h = f.charAt(0), v = void 0, c = f.match(hx) || [], d = c.length, p = 0; p < d; p++)
      c[p] = parseFloat(c[p]);
    for (var g = 0; g < d; ) {
      var y = void 0, m = void 0, _ = void 0, S = void 0, w = void 0, b = void 0, x = void 0, T = e, D = n, A = void 0, C = void 0;
      switch (h) {
        case "l":
          e += c[g++], n += c[g++], v = s.L, t.addData(v, e, n);
          break;
        case "L":
          e = c[g++], n = c[g++], v = s.L, t.addData(v, e, n);
          break;
        case "m":
          e += c[g++], n += c[g++], v = s.M, t.addData(v, e, n), i = e, a = n, h = "l";
          break;
        case "M":
          e = c[g++], n = c[g++], v = s.M, t.addData(v, e, n), i = e, a = n, h = "L";
          break;
        case "h":
          e += c[g++], v = s.L, t.addData(v, e, n);
          break;
        case "H":
          e = c[g++], v = s.L, t.addData(v, e, n);
          break;
        case "v":
          n += c[g++], v = s.L, t.addData(v, e, n);
          break;
        case "V":
          n = c[g++], v = s.L, t.addData(v, e, n);
          break;
        case "C":
          v = s.C, t.addData(v, c[g++], c[g++], c[g++], c[g++], c[g++], c[g++]), e = c[g - 2], n = c[g - 1];
          break;
        case "c":
          v = s.C, t.addData(v, c[g++] + e, c[g++] + n, c[g++] + e, c[g++] + n, c[g++] + e, c[g++] + n), e += c[g - 2], n += c[g - 1];
          break;
        case "S":
          y = e, m = n, A = t.len(), C = t.data, o === s.C && (y += e - C[A - 4], m += n - C[A - 3]), v = s.C, T = c[g++], D = c[g++], e = c[g++], n = c[g++], t.addData(v, y, m, T, D, e, n);
          break;
        case "s":
          y = e, m = n, A = t.len(), C = t.data, o === s.C && (y += e - C[A - 4], m += n - C[A - 3]), v = s.C, T = e + c[g++], D = n + c[g++], e += c[g++], n += c[g++], t.addData(v, y, m, T, D, e, n);
          break;
        case "Q":
          T = c[g++], D = c[g++], e = c[g++], n = c[g++], v = s.Q, t.addData(v, T, D, e, n);
          break;
        case "q":
          T = c[g++] + e, D = c[g++] + n, e += c[g++], n += c[g++], v = s.Q, t.addData(v, T, D, e, n);
          break;
        case "T":
          y = e, m = n, A = t.len(), C = t.data, o === s.Q && (y += e - C[A - 4], m += n - C[A - 3]), e = c[g++], n = c[g++], v = s.Q, t.addData(v, y, m, e, n);
          break;
        case "t":
          y = e, m = n, A = t.len(), C = t.data, o === s.Q && (y += e - C[A - 4], m += n - C[A - 3]), e += c[g++], n += c[g++], v = s.Q, t.addData(v, y, m, e, n);
          break;
        case "A":
          _ = c[g++], S = c[g++], w = c[g++], b = c[g++], x = c[g++], T = e, D = n, e = c[g++], n = c[g++], v = s.A, qv(T, D, e, n, b, x, _, S, w, v, t);
          break;
        case "a":
          _ = c[g++], S = c[g++], w = c[g++], b = c[g++], x = c[g++], T = e, D = n, e += c[g++], n += c[g++], v = s.A, qv(T, D, e, n, b, x, _, S, w, v, t);
          break;
      }
    }
    (h === "z" || h === "Z") && (v = s.Z, t.addData(v), e = i, n = a), o = v;
  }
  return t.toStatic(), t;
}
var zy = (function(r) {
  z(t, r);
  function t() {
    return r !== null && r.apply(this, arguments) || this;
  }
  return t.prototype.applyTransform = function(e) {
  }, t;
})(ct);
function Gy(r) {
  return r.setData != null;
}
function Hy(r, t) {
  var e = cx(r), n = F({}, t);
  return n.buildPath = function(i) {
    if (Gy(i)) {
      i.setData(e.data);
      var a = i.getContext();
      a && i.rebuildPath(a, 1);
    } else {
      var a = i;
      e.rebuildPath(a, 1);
    }
  }, n.applyTransform = function(i) {
    lx(e, i), this.dirtyShape();
  }, n;
}
function vx(r, t) {
  return new zy(Hy(r, t));
}
function dx(r, t) {
  var e = Hy(r, t), n = (function(i) {
    z(a, i);
    function a(o) {
      var s = i.call(this, o) || this;
      return s.applyTransform = e.applyTransform, s.buildPath = e.buildPath, s;
    }
    return a;
  })(zy);
  return n;
}
function px(r, t) {
  for (var e = [], n = r.length, i = 0; i < n; i++) {
    var a = r[i];
    e.push(a.getUpdatedPathProxy(!0));
  }
  var o = new ct(t);
  return o.createPathProxy(), o.buildPath = function(s) {
    if (Gy(s)) {
      s.appendPath(e);
      var u = s.getContext();
      u && s.rebuildPath(u, 1);
    }
  }, o;
}
var gx = /* @__PURE__ */ (function() {
  function r() {
    this.cx = 0, this.cy = 0, this.r = 0;
  }
  return r;
})(), Ga = (function(r) {
  z(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultShape = function() {
    return new gx();
  }, t.prototype.buildPath = function(e, n) {
    e.moveTo(n.cx + n.r, n.cy), e.arc(n.cx, n.cy, n.r, 0, Math.PI * 2);
  }, t;
})(ct);
Ga.prototype.type = "circle";
var yx = /* @__PURE__ */ (function() {
  function r() {
    this.cx = 0, this.cy = 0, this.rx = 0, this.ry = 0;
  }
  return r;
})(), Ws = (function(r) {
  z(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultShape = function() {
    return new yx();
  }, t.prototype.buildPath = function(e, n) {
    var i = 0.5522848, a = n.cx, o = n.cy, s = n.rx, u = n.ry, l = s * i, f = u * i;
    e.moveTo(a - s, o), e.bezierCurveTo(a - s, o - f, a - l, o - u, a, o - u), e.bezierCurveTo(a + l, o - u, a + s, o - f, a + s, o), e.bezierCurveTo(a + s, o + f, a + l, o + u, a, o + u), e.bezierCurveTo(a - l, o + u, a - s, o + f, a - s, o), e.closePath();
  }, t;
})(ct);
Ws.prototype.type = "ellipse";
var Wy = Math.PI, tl = Wy * 2, on = Math.sin, Wn = Math.cos, mx = Math.acos, kt = Math.atan2, $v = Math.abs, sa = Math.sqrt, Qi = Math.max, He = Math.min, Ee = 1e-4;
function _x(r, t, e, n, i, a, o, s) {
  var u = e - r, l = n - t, f = o - i, h = s - a, v = h * u - f * l;
  if (!(v * v < Ee))
    return v = (f * (t - a) - h * (r - i)) / v, [r + v * u, t + v * l];
}
function fo(r, t, e, n, i, a, o) {
  var s = r - e, u = t - n, l = (o ? a : -a) / sa(s * s + u * u), f = l * u, h = -l * s, v = r + f, c = t + h, d = e + f, p = n + h, g = (v + d) / 2, y = (c + p) / 2, m = d - v, _ = p - c, S = m * m + _ * _, w = i - a, b = v * p - d * c, x = (_ < 0 ? -1 : 1) * sa(Qi(0, w * w * S - b * b)), T = (b * _ - m * x) / S, D = (-b * m - _ * x) / S, A = (b * _ + m * x) / S, C = (-b * m + _ * x) / S, E = T - g, P = D - y, L = A - g, O = C - y;
  return E * E + P * P > L * L + O * O && (T = A, D = C), {
    cx: T,
    cy: D,
    x0: -f,
    y0: -h,
    x1: T * (i / w - 1),
    y1: D * (i / w - 1)
  };
}
function Sx(r) {
  var t;
  if (H(r)) {
    var e = r.length;
    if (!e)
      return r;
    e === 1 ? t = [r[0], r[0], 0, 0] : e === 2 ? t = [r[0], r[0], r[1], r[1]] : e === 3 ? t = r.concat(r[2]) : t = r;
  } else
    t = [r, r, r, r];
  return t;
}
function bx(r, t) {
  var e, n = Qi(t.r, 0), i = Qi(t.r0 || 0, 0), a = n > 0, o = i > 0;
  if (!(!a && !o)) {
    if (a || (n = i, i = 0), i > n) {
      var s = n;
      n = i, i = s;
    }
    var u = t.startAngle, l = t.endAngle;
    if (!(isNaN(u) || isNaN(l))) {
      var f = t.cx, h = t.cy, v = !!t.clockwise, c = $v(l - u), d = c > tl && c % tl;
      if (d > Ee && (c = d), !(n > Ee))
        r.moveTo(f, h);
      else if (c > tl - Ee)
        r.moveTo(f + n * Wn(u), h + n * on(u)), r.arc(f, h, n, u, l, !v), i > Ee && (r.moveTo(f + i * Wn(l), h + i * on(l)), r.arc(f, h, i, l, u, v));
      else {
        var p = void 0, g = void 0, y = void 0, m = void 0, _ = void 0, S = void 0, w = void 0, b = void 0, x = void 0, T = void 0, D = void 0, A = void 0, C = void 0, E = void 0, P = void 0, L = void 0, O = n * Wn(u), R = n * on(u), G = i * Wn(l), N = i * on(l), B = c > Ee;
        if (B) {
          var I = t.cornerRadius;
          I && (e = Sx(I), p = e[0], g = e[1], y = e[2], m = e[3]);
          var k = $v(n - i) / 2;
          if (_ = He(k, y), S = He(k, m), w = He(k, p), b = He(k, g), D = x = Qi(_, S), A = T = Qi(w, b), (x > Ee || T > Ee) && (C = n * Wn(l), E = n * on(l), P = i * Wn(u), L = i * on(u), c < Wy)) {
            var V = _x(O, R, P, L, C, E, G, N);
            if (V) {
              var X = O - V[0], tt = R - V[1], et = C - V[0], Et = E - V[1], Nt = 1 / on(mx((X * et + tt * Et) / (sa(X * X + tt * tt) * sa(et * et + Et * Et))) / 2), lt = sa(V[0] * V[0] + V[1] * V[1]);
              D = He(x, (n - lt) / (Nt + 1)), A = He(T, (i - lt) / (Nt - 1));
            }
          }
        }
        if (!B)
          r.moveTo(f + O, h + R);
        else if (D > Ee) {
          var mt = He(y, D), pt = He(m, D), q = fo(P, L, O, R, n, mt, v), rt = fo(C, E, G, N, n, pt, v);
          r.moveTo(f + q.cx + q.x0, h + q.cy + q.y0), D < x && mt === pt ? r.arc(f + q.cx, h + q.cy, D, kt(q.y0, q.x0), kt(rt.y0, rt.x0), !v) : (mt > 0 && r.arc(f + q.cx, h + q.cy, mt, kt(q.y0, q.x0), kt(q.y1, q.x1), !v), r.arc(f, h, n, kt(q.cy + q.y1, q.cx + q.x1), kt(rt.cy + rt.y1, rt.cx + rt.x1), !v), pt > 0 && r.arc(f + rt.cx, h + rt.cy, pt, kt(rt.y1, rt.x1), kt(rt.y0, rt.x0), !v));
        } else
          r.moveTo(f + O, h + R), r.arc(f, h, n, u, l, !v);
        if (!(i > Ee) || !B)
          r.lineTo(f + G, h + N);
        else if (A > Ee) {
          var mt = He(p, A), pt = He(g, A), q = fo(G, N, C, E, i, -pt, v), rt = fo(O, R, P, L, i, -mt, v);
          r.lineTo(f + q.cx + q.x0, h + q.cy + q.y0), A < T && mt === pt ? r.arc(f + q.cx, h + q.cy, A, kt(q.y0, q.x0), kt(rt.y0, rt.x0), !v) : (pt > 0 && r.arc(f + q.cx, h + q.cy, pt, kt(q.y0, q.x0), kt(q.y1, q.x1), !v), r.arc(f, h, i, kt(q.cy + q.y1, q.cx + q.x1), kt(rt.cy + rt.y1, rt.cx + rt.x1), v), mt > 0 && r.arc(f + rt.cx, h + rt.cy, mt, kt(rt.y1, rt.x1), kt(rt.y0, rt.x0), !v));
        } else
          r.lineTo(f + G, h + N), r.arc(f, h, i, l, u, v);
      }
      r.closePath();
    }
  }
}
var xx = /* @__PURE__ */ (function() {
  function r() {
    this.cx = 0, this.cy = 0, this.r0 = 0, this.r = 0, this.startAngle = 0, this.endAngle = Math.PI * 2, this.clockwise = !0, this.cornerRadius = 0;
  }
  return r;
})(), gr = (function(r) {
  z(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultShape = function() {
    return new xx();
  }, t.prototype.buildPath = function(e, n) {
    bx(e, n);
  }, t.prototype.isZeroArea = function() {
    return this.shape.startAngle === this.shape.endAngle || this.shape.r === this.shape.r0;
  }, t;
})(ct);
gr.prototype.type = "sector";
var Tx = /* @__PURE__ */ (function() {
  function r() {
    this.cx = 0, this.cy = 0, this.r = 0, this.r0 = 0;
  }
  return r;
})(), Us = (function(r) {
  z(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultShape = function() {
    return new Tx();
  }, t.prototype.buildPath = function(e, n) {
    var i = n.cx, a = n.cy, o = Math.PI * 2;
    e.moveTo(i + n.r, a), e.arc(i, a, n.r, 0, o, !1), e.moveTo(i + n.r0, a), e.arc(i, a, n.r0, 0, o, !0);
  }, t;
})(ct);
Us.prototype.type = "ring";
function Cx(r, t, e, n) {
  var i = [], a = [], o = [], s = [], u, l, f, h;
  if (n) {
    f = [1 / 0, 1 / 0], h = [-1 / 0, -1 / 0];
    for (var v = 0, c = r.length; v < c; v++)
      Mr(f, f, r[v]), Er(h, h, r[v]);
    Mr(f, f, n[0]), Er(h, h, n[1]);
  }
  for (var v = 0, c = r.length; v < c; v++) {
    var d = r[v];
    if (e)
      u = r[v ? v - 1 : c - 1], l = r[(v + 1) % c];
    else if (v === 0 || v === c - 1) {
      i.push(Fg(r[v]));
      continue;
    } else
      u = r[v - 1], l = r[v + 1];
    Vg(a, l, u), No(a, a, t);
    var p = jo(d, u), g = jo(d, l), y = p + g;
    y !== 0 && (p /= y, g /= y), No(o, a, -p), No(s, a, g);
    var m = Xl([], d, o), _ = Xl([], d, s);
    n && (Er(m, m, f), Mr(m, m, h), Er(_, _, f), Mr(_, _, h)), i.push(m), i.push(_);
  }
  return e && i.push(i.shift()), i;
}
function Uy(r, t, e) {
  var n = t.smooth, i = t.points;
  if (i && i.length >= 2) {
    if (n) {
      var a = Cx(i, n, e, t.smoothConstraint);
      r.moveTo(i[0][0], i[0][1]);
      for (var o = i.length, s = 0; s < (e ? o : o - 1); s++) {
        var u = a[s * 2], l = a[s * 2 + 1], f = i[(s + 1) % o];
        r.bezierCurveTo(u[0], u[1], l[0], l[1], f[0], f[1]);
      }
    } else {
      r.moveTo(i[0][0], i[0][1]);
      for (var s = 1, h = i.length; s < h; s++)
        r.lineTo(i[s][0], i[s][1]);
    }
    e && r.closePath();
  }
}
var Dx = /* @__PURE__ */ (function() {
  function r() {
    this.points = null, this.smooth = 0, this.smoothConstraint = null;
  }
  return r;
})(), Ys = (function(r) {
  z(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultShape = function() {
    return new Dx();
  }, t.prototype.buildPath = function(e, n) {
    Uy(e, n, !0);
  }, t;
})(ct);
Ys.prototype.type = "polygon";
var Ax = /* @__PURE__ */ (function() {
  function r() {
    this.points = null, this.percent = 1, this.smooth = 0, this.smoothConstraint = null;
  }
  return r;
})(), vi = (function(r) {
  z(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultStyle = function() {
    return {
      stroke: "#000",
      fill: null
    };
  }, t.prototype.getDefaultShape = function() {
    return new Ax();
  }, t.prototype.buildPath = function(e, n) {
    Uy(e, n, !1);
  }, t;
})(ct);
vi.prototype.type = "polyline";
var Mx = {}, Ex = /* @__PURE__ */ (function() {
  function r() {
    this.x1 = 0, this.y1 = 0, this.x2 = 0, this.y2 = 0, this.percent = 1;
  }
  return r;
})(), cr = (function(r) {
  z(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultStyle = function() {
    return {
      stroke: "#000",
      fill: null
    };
  }, t.prototype.getDefaultShape = function() {
    return new Ex();
  }, t.prototype.buildPath = function(e, n) {
    var i, a, o, s;
    if (this.subPixelOptimize) {
      var u = My(Mx, n, this.style);
      i = u.x1, a = u.y1, o = u.x2, s = u.y2;
    } else
      i = n.x1, a = n.y1, o = n.x2, s = n.y2;
    var l = n.percent;
    l !== 0 && (e.moveTo(i, a), l < 1 && (o = i * (1 - l) + o * l, s = a * (1 - l) + s * l), e.lineTo(o, s));
  }, t.prototype.pointAt = function(e) {
    var n = this.shape;
    return [
      n.x1 * (1 - e) + n.x2 * e,
      n.y1 * (1 - e) + n.y2 * e
    ];
  }, t;
})(ct);
cr.prototype.type = "line";
var Jt = [], Px = /* @__PURE__ */ (function() {
  function r() {
    this.x1 = 0, this.y1 = 0, this.x2 = 0, this.y2 = 0, this.cpx1 = 0, this.cpy1 = 0, this.percent = 1;
  }
  return r;
})();
function Zv(r, t, e) {
  var n = r.cpx2, i = r.cpy2;
  return n != null || i != null ? [
    (e ? Qc : Rt)(r.x1, r.cpx1, r.cpx2, r.x2, t),
    (e ? Qc : Rt)(r.y1, r.cpy1, r.cpy2, r.y2, t)
  ] : [
    (e ? Jc : ee)(r.x1, r.cpx1, r.x2, t),
    (e ? Jc : ee)(r.y1, r.cpy1, r.y2, t)
  ];
}
var Xs = (function(r) {
  z(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultStyle = function() {
    return {
      stroke: "#000",
      fill: null
    };
  }, t.prototype.getDefaultShape = function() {
    return new Px();
  }, t.prototype.buildPath = function(e, n) {
    var i = n.x1, a = n.y1, o = n.x2, s = n.y2, u = n.cpx1, l = n.cpy1, f = n.cpx2, h = n.cpy2, v = n.percent;
    v !== 0 && (e.moveTo(i, a), f == null || h == null ? (v < 1 && (ns(i, u, o, v, Jt), u = Jt[1], o = Jt[2], ns(a, l, s, v, Jt), l = Jt[1], s = Jt[2]), e.quadraticCurveTo(u, l, o, s)) : (v < 1 && (rs(i, u, f, o, v, Jt), u = Jt[1], f = Jt[2], o = Jt[3], rs(a, l, h, s, v, Jt), l = Jt[1], h = Jt[2], s = Jt[3]), e.bezierCurveTo(u, l, f, h, o, s)));
  }, t.prototype.pointAt = function(e) {
    return Zv(this.shape, e, !1);
  }, t.prototype.tangentAt = function(e) {
    var n = Zv(this.shape, e, !0);
    return zg(n, n);
  }, t;
})(ct);
Xs.prototype.type = "bezier-curve";
var Ix = /* @__PURE__ */ (function() {
  function r() {
    this.cx = 0, this.cy = 0, this.r = 0, this.startAngle = 0, this.endAngle = Math.PI * 2, this.clockwise = !0;
  }
  return r;
})(), Ha = (function(r) {
  z(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultStyle = function() {
    return {
      stroke: "#000",
      fill: null
    };
  }, t.prototype.getDefaultShape = function() {
    return new Ix();
  }, t.prototype.buildPath = function(e, n) {
    var i = n.cx, a = n.cy, o = Math.max(n.r, 0), s = n.startAngle, u = n.endAngle, l = n.clockwise, f = Math.cos(s), h = Math.sin(s);
    e.moveTo(f * o + i, h * o + a), e.arc(i, a, o, s, u, !l);
  }, t;
})(ct);
Ha.prototype.type = "arc";
var Yy = (function(r) {
  z(t, r);
  function t() {
    var e = r !== null && r.apply(this, arguments) || this;
    return e.type = "compound", e;
  }
  return t.prototype._updatePathDirty = function() {
    for (var e = this.shape.paths, n = this.shapeChanged(), i = 0; i < e.length; i++)
      n = n || e[i].shapeChanged();
    n && this.dirtyShape();
  }, t.prototype.beforeBrush = function() {
    this._updatePathDirty();
    for (var e = this.shape.paths || [], n = this.getGlobalScale(), i = 0; i < e.length; i++)
      e[i].path || e[i].createPathProxy(), e[i].path.setScale(n[0], n[1], e[i].segmentIgnoreThreshold);
  }, t.prototype.buildPath = function(e, n) {
    for (var i = n.paths || [], a = 0; a < i.length; a++)
      i[a].buildPath(e, i[a].shape, !0);
  }, t.prototype.afterBrush = function() {
    for (var e = this.shape.paths || [], n = 0; n < e.length; n++)
      e[n].pathUpdated();
  }, t.prototype.getBoundingRect = function() {
    return this._updatePathDirty.call(this), ct.prototype.getBoundingRect.call(this);
  }, t;
})(ct), Xy = (function() {
  function r(t) {
    this.colorStops = t || [];
  }
  return r.prototype.addColorStop = function(t, e) {
    this.colorStops.push({
      offset: t,
      color: e
    });
  }, r;
})(), Dh = (function(r) {
  z(t, r);
  function t(e, n, i, a, o, s) {
    var u = r.call(this, o) || this;
    return u.x = e ?? 0, u.y = n ?? 0, u.x2 = i ?? 1, u.y2 = a ?? 0, u.type = "linear", u.global = s || !1, u;
  }
  return t;
})(Xy), qy = (function(r) {
  z(t, r);
  function t(e, n, i, a, o) {
    var s = r.call(this, a) || this;
    return s.x = e ?? 0.5, s.y = n ?? 0.5, s.r = i ?? 0.5, s.type = "radial", s.global = o || !1, s;
  }
  return t;
})(Xy), sn = [0, 0], un = [0, 0], ho = new j(), co = new j(), ps = (function() {
  function r(t, e) {
    this._corners = [], this._axes = [], this._origin = [0, 0];
    for (var n = 0; n < 4; n++)
      this._corners[n] = new j();
    for (var n = 0; n < 2; n++)
      this._axes[n] = new j();
    t && this.fromBoundingRect(t, e);
  }
  return r.prototype.fromBoundingRect = function(t, e) {
    var n = this._corners, i = this._axes, a = t.x, o = t.y, s = a + t.width, u = o + t.height;
    if (n[0].set(a, o), n[1].set(s, o), n[2].set(s, u), n[3].set(a, u), e)
      for (var l = 0; l < 4; l++)
        n[l].transform(e);
    j.sub(i[0], n[1], n[0]), j.sub(i[1], n[3], n[0]), i[0].normalize(), i[1].normalize();
    for (var l = 0; l < 2; l++)
      this._origin[l] = i[l].dot(n[0]);
  }, r.prototype.intersect = function(t, e) {
    var n = !0, i = !e;
    return ho.set(1 / 0, 1 / 0), co.set(0, 0), !this._intersectCheckOneSide(this, t, ho, co, i, 1) && (n = !1, i) || !this._intersectCheckOneSide(t, this, ho, co, i, -1) && (n = !1, i) || i || j.copy(e, n ? ho : co), n;
  }, r.prototype._intersectCheckOneSide = function(t, e, n, i, a, o) {
    for (var s = !0, u = 0; u < 2; u++) {
      var l = this._axes[u];
      if (this._getProjMinMaxOnAxis(u, t._corners, sn), this._getProjMinMaxOnAxis(u, e._corners, un), sn[1] < un[0] || sn[0] > un[1]) {
        if (s = !1, a)
          return s;
        var f = Math.abs(un[0] - sn[1]), h = Math.abs(sn[0] - un[1]);
        Math.min(f, h) > i.len() && (f < h ? j.scale(i, l, -f * o) : j.scale(i, l, h * o));
      } else if (n) {
        var f = Math.abs(un[0] - sn[1]), h = Math.abs(sn[0] - un[1]);
        Math.min(f, h) < n.len() && (f < h ? j.scale(n, l, f * o) : j.scale(n, l, -h * o));
      }
    }
    return s;
  }, r.prototype._getProjMinMaxOnAxis = function(t, e, n) {
    for (var i = this._axes[t], a = this._origin, o = e[0].dot(i) + a[t], s = o, u = o, l = 1; l < e.length; l++) {
      var f = e[l].dot(i) + a[t];
      s = Math.min(f, s), u = Math.max(f, u);
    }
    n[0] = s, n[1] = u;
  }, r;
})(), Lx = [], $y = (function(r) {
  z(t, r);
  function t() {
    var e = r !== null && r.apply(this, arguments) || this;
    return e.notClear = !0, e.incremental = !0, e._displayables = [], e._temporaryDisplayables = [], e._cursor = 0, e;
  }
  return t.prototype.traverse = function(e, n) {
    e.call(n, this);
  }, t.prototype.useStyle = function() {
    this.style = {};
  }, t.prototype.getCursor = function() {
    return this._cursor;
  }, t.prototype.innerAfterBrush = function() {
    this._cursor = this._displayables.length;
  }, t.prototype.clearDisplaybles = function() {
    this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, this.markRedraw(), this.notClear = !1;
  }, t.prototype.clearTemporalDisplayables = function() {
    this._temporaryDisplayables = [];
  }, t.prototype.addDisplayable = function(e, n) {
    n ? this._temporaryDisplayables.push(e) : this._displayables.push(e), this.markRedraw();
  }, t.prototype.addDisplayables = function(e, n) {
    n = n || !1;
    for (var i = 0; i < e.length; i++)
      this.addDisplayable(e[i], n);
  }, t.prototype.getDisplayables = function() {
    return this._displayables;
  }, t.prototype.getTemporalDisplayables = function() {
    return this._temporaryDisplayables;
  }, t.prototype.eachPendingDisplayable = function(e) {
    for (var n = this._cursor; n < this._displayables.length; n++)
      e && e(this._displayables[n]);
    for (var n = 0; n < this._temporaryDisplayables.length; n++)
      e && e(this._temporaryDisplayables[n]);
  }, t.prototype.update = function() {
    this.updateTransform();
    for (var e = this._cursor; e < this._displayables.length; e++) {
      var n = this._displayables[e];
      n.parent = this, n.update(), n.parent = null;
    }
    for (var e = 0; e < this._temporaryDisplayables.length; e++) {
      var n = this._temporaryDisplayables[e];
      n.parent = this, n.update(), n.parent = null;
    }
  }, t.prototype.getBoundingRect = function() {
    if (!this._rect) {
      for (var e = new st(1 / 0, 1 / 0, -1 / 0, -1 / 0), n = 0; n < this._displayables.length; n++) {
        var i = this._displayables[n], a = i.getBoundingRect().clone();
        i.needLocalTransform() && a.applyTransform(i.getLocalTransform(Lx)), e.union(a);
      }
      this._rect = e;
    }
    return this._rect;
  }, t.prototype.contain = function(e, n) {
    var i = this.transformCoordToLocal(e, n), a = this.getBoundingRect();
    if (a.contain(i[0], i[1]))
      for (var o = 0; o < this._displayables.length; o++) {
        var s = this._displayables[o];
        if (s.contain(e, n))
          return !0;
      }
    return !1;
  }, t;
})(za), Ox = Ct();
function Rx(r, t, e, n, i) {
  var a;
  if (t && t.ecModel) {
    var o = t.ecModel.getUpdatePayload();
    a = o && o.animation;
  }
  var s = t && t.isAnimationEnabled(), u = r === "update";
  if (s) {
    var l = void 0, f = void 0, h = void 0;
    n ? (l = K(n.duration, 200), f = K(n.easing, "cubicOut"), h = 0) : (l = t.getShallow(u ? "animationDurationUpdate" : "animationDuration"), f = t.getShallow(u ? "animationEasingUpdate" : "animationEasing"), h = t.getShallow(u ? "animationDelayUpdate" : "animationDelay")), a && (a.duration != null && (l = a.duration), a.easing != null && (f = a.easing), a.delay != null && (h = a.delay)), Z(h) && (h = h(e, i)), Z(l) && (l = l(e));
    var v = {
      duration: l || 0,
      delay: h,
      easing: f
    };
    return v;
  } else
    return null;
}
function Ah(r, t, e, n, i, a, o) {
  var s = !1, u;
  Z(i) ? (o = a, a = i, i = null) : Y(i) && (a = i.cb, o = i.during, s = i.isFrom, u = i.removeOpt, i = i.dataIndex);
  var l = r === "leave";
  l || t.stopAnimation("leave");
  var f = Rx(r, n, i, l ? u || {} : null, n && n.getAnimationDelayParams ? n.getAnimationDelayParams(t, i) : null);
  if (f && f.duration > 0) {
    var h = f.duration, v = f.delay, c = f.easing, d = {
      duration: h,
      delay: v || 0,
      easing: c,
      done: a,
      force: !!a || !!o,
      // Set to final state in update/init animation.
      // So the post processing based on the path shape can be done correctly.
      setToFinal: !l,
      scope: r,
      during: o
    };
    s ? t.animateFrom(e, d) : t.animateTo(e, d);
  } else
    t.stopAnimation(), !s && t.attr(e), o && o(1), a && a();
}
function Wt(r, t, e, n, i, a) {
  Ah("update", r, t, e, n, i, a);
}
function he(r, t, e, n, i, a) {
  Ah("enter", r, t, e, n, i, a);
}
function ua(r) {
  if (!r.__zr)
    return !0;
  for (var t = 0; t < r.animators.length; t++) {
    var e = r.animators[t];
    if (e.scope === "leave")
      return !0;
  }
  return !1;
}
function gs(r, t, e, n, i, a) {
  ua(r) || Ah("leave", r, t, e, n, i, a);
}
function jv(r, t, e, n) {
  r.removeTextContent(), r.removeTextGuideLine(), gs(r, {
    style: {
      opacity: 0
    }
  }, t, e, n);
}
function ys(r, t, e) {
  function n() {
    r.parent && r.parent.remove(r);
  }
  r.isGroup ? r.traverse(function(i) {
    i.isGroup || jv(i, t, e, n);
  }) : jv(r, t, e, n);
}
function Mh(r) {
  Ox(r).oldStyle = r.style;
}
var ms = Math.max, _s = Math.min, _f = {};
function Zy(r) {
  return ct.extend(r);
}
var Nx = dx;
function jy(r, t) {
  return Nx(r, t);
}
function De(r, t) {
  _f[r] = t;
}
function Ky(r) {
  if (_f.hasOwnProperty(r))
    return _f[r];
}
function qs(r, t, e, n) {
  var i = vx(r, t);
  return e && (n === "center" && (e = Qy(e, i.getBoundingRect())), Ph(i, e)), i;
}
function Eh(r, t, e) {
  var n = new dr({
    style: {
      image: r,
      x: t.x,
      y: t.y,
      width: t.width,
      height: t.height
    },
    onload: function(i) {
      if (e === "center") {
        var a = {
          width: i.width,
          height: i.height
        };
        n.setStyle(Qy(t, a));
      }
    }
  });
  return n;
}
function Qy(r, t) {
  var e = t.width / t.height, n = r.height * e, i;
  n <= r.width ? i = r.height : (n = r.width, i = n / e);
  var a = r.x + r.width / 2, o = r.y + r.height / 2;
  return {
    x: a - n / 2,
    y: o - i / 2,
    width: n,
    height: i
  };
}
var Jy = px;
function Ph(r, t) {
  if (r.applyTransform) {
    var e = r.getBoundingRect(), n = e.calculateTransform(t);
    r.applyTransform(n);
  }
}
function xa(r, t) {
  return My(r, r, {
    lineWidth: t
  }), r;
}
function kx(r) {
  return Ey(r.shape, r.shape, r.style), r;
}
var Bx = gn;
function tm(r, t) {
  for (var e = Ra([]); r && r !== t; )
    Fr(e, r.getLocalTransform(), e), r = r.parent;
  return e;
}
function Ih(r, t, e) {
  return t && !Qt(t) && (t = vh.getLocalTransform(t)), e && (t = Na([], t)), Zt([], r, t);
}
function Fx(r, t, e) {
  var n = t[4] === 0 || t[5] === 0 || t[0] === 0 ? 1 : Math.abs(2 * t[4] / t[0]), i = t[4] === 0 || t[5] === 0 || t[2] === 0 ? 1 : Math.abs(2 * t[4] / t[2]), a = [r === "left" ? -n : r === "right" ? n : 0, r === "top" ? -i : r === "bottom" ? i : 0];
  return a = Ih(a, t, e), Math.abs(a[0]) > Math.abs(a[1]) ? a[0] > 0 ? "right" : "left" : a[1] > 0 ? "bottom" : "top";
}
function Kv(r) {
  return !r.isGroup;
}
function Vx(r) {
  return r.shape != null;
}
function em(r, t, e) {
  if (!r || !t)
    return;
  function n(o) {
    var s = {};
    return o.traverse(function(u) {
      Kv(u) && u.anid && (s[u.anid] = u);
    }), s;
  }
  function i(o) {
    var s = {
      x: o.x,
      y: o.y,
      rotation: o.rotation
    };
    return Vx(o) && (s.shape = F({}, o.shape)), s;
  }
  var a = n(r);
  t.traverse(function(o) {
    if (Kv(o) && o.anid) {
      var s = a[o.anid];
      if (s) {
        var u = i(o);
        o.attr(i(s)), Wt(o, u, e, at(o).dataIndex);
      }
    }
  });
}
function rm(r, t) {
  return U(r, function(e) {
    var n = e[0];
    n = ms(n, t.x), n = _s(n, t.x + t.width);
    var i = e[1];
    return i = ms(i, t.y), i = _s(i, t.y + t.height), [n, i];
  });
}
function nm(r, t) {
  var e = ms(r.x, t.x), n = _s(r.x + r.width, t.x + t.width), i = ms(r.y, t.y), a = _s(r.y + r.height, t.y + t.height);
  if (n >= e && a >= i)
    return {
      x: e,
      y: i,
      width: n - e,
      height: a - i
    };
}
function $s(r, t, e) {
  var n = F({
    rectHover: !0
  }, t), i = n.style = {
    strokeNoScale: !0
  };
  if (e = e || {
    x: -1,
    y: -1,
    width: 2,
    height: 2
  }, r)
    return r.indexOf("image://") === 0 ? (i.image = r.slice(8), ut(i, e), new dr(n)) : qs(r.replace("path://", ""), n, e, "center");
}
function zx(r, t, e, n, i) {
  for (var a = 0, o = i[i.length - 1]; a < i.length; a++) {
    var s = i[a];
    if (im(r, t, e, n, s[0], s[1], o[0], o[1]))
      return !0;
    o = s;
  }
}
function im(r, t, e, n, i, a, o, s) {
  var u = e - r, l = n - t, f = o - i, h = s - a, v = el(f, h, u, l);
  if (Gx(v))
    return !1;
  var c = r - i, d = t - a, p = el(c, d, u, l) / v;
  if (p < 0 || p > 1)
    return !1;
  var g = el(c, d, f, h) / v;
  return !(g < 0 || g > 1);
}
function el(r, t, e, n) {
  return r * n - e * t;
}
function Gx(r) {
  return r <= 1e-6 && r >= -1e-6;
}
function Zs(r) {
  var t = r.itemTooltipOption, e = r.componentModel, n = r.itemName, i = W(t) ? {
    formatter: t
  } : t, a = e.mainType, o = e.componentIndex, s = {
    componentType: a,
    name: n,
    $vars: ["name"]
  };
  s[a + "Index"] = o;
  var u = r.formatterParamsExtra;
  u && M(yt(u), function(f) {
    Hr(s, f) || (s[f] = u[f], s.$vars.push(f));
  });
  var l = at(r.el);
  l.componentMainType = a, l.componentIndex = o, l.tooltipConfig = {
    name: n,
    option: ut({
      content: n,
      encodeHTMLContent: !0,
      formatterParams: s
    }, i)
  };
}
function Qv(r, t) {
  var e;
  r.isGroup && (e = t(r)), e || r.traverse(t);
}
function js(r, t) {
  if (r)
    if (H(r))
      for (var e = 0; e < r.length; e++)
        Qv(r[e], t);
    else
      Qv(r, t);
}
De("circle", Ga);
De("ellipse", Ws);
De("sector", gr);
De("ring", Us);
De("polygon", Ys);
De("polyline", vi);
De("rect", Tt);
De("line", cr);
De("bezierCurve", Xs);
De("arc", Ha);
const Hx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Arc: Ha,
  BezierCurve: Xs,
  BoundingRect: st,
  Circle: Ga,
  CompoundPath: Yy,
  Ellipse: Ws,
  Group: It,
  Image: dr,
  IncrementalDisplayable: $y,
  Line: cr,
  LinearGradient: Dh,
  OrientedBoundingRect: ps,
  Path: ct,
  Point: j,
  Polygon: Ys,
  Polyline: vi,
  RadialGradient: qy,
  Rect: Tt,
  Ring: Us,
  Sector: gr,
  Text: Mt,
  applyTransform: Ih,
  clipPointsByRect: rm,
  clipRectByRect: nm,
  createIcon: $s,
  extendPath: jy,
  extendShape: Zy,
  getShapeClass: Ky,
  getTransform: tm,
  groupTransition: em,
  initProps: he,
  isElementRemoved: ua,
  lineLineIntersect: im,
  linePolygonIntersect: zx,
  makeImage: Eh,
  makePath: qs,
  mergePath: Jy,
  registerShape: De,
  removeElement: gs,
  removeElementWithFadeOut: ys,
  resizePath: Ph,
  setTooltipConfig: Zs,
  subPixelOptimize: Bx,
  subPixelOptimizeLine: xa,
  subPixelOptimizeRect: kx,
  transformDirection: Fx,
  traverseElements: js,
  updateProps: Wt
}, Symbol.toStringTag, { value: "Module" }));
var Ks = {};
function Wx(r, t) {
  for (var e = 0; e < Te.length; e++) {
    var n = Te[e], i = t[n], a = r.ensureState(n);
    a.style = a.style || {}, a.style.text = i;
  }
  var o = r.currentStates.slice();
  r.clearStates(!0), r.setStyle({
    text: t.normal
  }), r.useStates(o, !0);
}
function Jv(r, t, e) {
  var n = r.labelFetcher, i = r.labelDataIndex, a = r.labelDimIndex, o = t.normal, s;
  n && (s = n.getFormattedLabel(i, "normal", null, a, o && o.get("formatter"), e != null ? {
    interpolatedValue: e
  } : null)), s == null && (s = Z(r.defaultText) ? r.defaultText(i, r, e) : r.defaultText);
  for (var u = {
    normal: s
  }, l = 0; l < Te.length; l++) {
    var f = Te[l], h = t[f];
    u[f] = K(n ? n.getFormattedLabel(i, f, null, a, h && h.get("formatter")) : null, s);
  }
  return u;
}
function Wa(r, t, e, n) {
  e = e || Ks;
  for (var i = r instanceof Mt, a = !1, o = 0; o < fs.length; o++) {
    var s = t[fs[o]];
    if (s && s.getShallow("show")) {
      a = !0;
      break;
    }
  }
  var u = i ? r : r.getTextContent();
  if (a) {
    i || (u || (u = new Mt(), r.setTextContent(u)), r.stateProxy && (u.stateProxy = r.stateProxy));
    var l = Jv(e, t), f = t.normal, h = !!f.getShallow("show"), v = vr(f, n && n.normal, e, !1, !i);
    v.text = l.normal, i || r.setTextConfig(td(f, e, !1));
    for (var o = 0; o < Te.length; o++) {
      var c = Te[o], s = t[c];
      if (s) {
        var d = u.ensureState(c), p = !!K(s.getShallow("show"), h);
        if (p !== h && (d.ignore = !p), d.style = vr(s, n && n[c], e, !0, !i), d.style.text = l[c], !i) {
          var g = r.ensureState(c);
          g.textConfig = td(s, e, !0);
        }
      }
    }
    u.silent = !!f.getShallow("silent"), u.style.x != null && (v.x = u.style.x), u.style.y != null && (v.y = u.style.y), u.ignore = !h, u.useStyle(v), u.dirty(), e.enableTextSetter && (Qs(u).setLabelText = function(y) {
      var m = Jv(e, t, y);
      Wx(u, m);
    });
  } else u && (u.ignore = !0);
  r.dirty();
}
function Ua(r, t) {
  t = t || "label";
  for (var e = {
    normal: r.getModel(t)
  }, n = 0; n < Te.length; n++) {
    var i = Te[n];
    e[i] = r.getModel([i, t]);
  }
  return e;
}
function vr(r, t, e, n, i) {
  var a = {};
  return Ux(a, r, e, n, i), t && F(a, t), a;
}
function td(r, t, e) {
  t = t || {};
  var n = {}, i, a = r.getShallow("rotate"), o = K(r.getShallow("distance"), e ? null : 5), s = r.getShallow("offset");
  return i = r.getShallow("position") || (e ? null : "inside"), i === "outside" && (i = t.defaultOutsidePosition || "top"), i != null && (n.position = i), s != null && (n.offset = s), a != null && (a *= Math.PI / 180, n.rotation = a), o != null && (n.distance = o), n.outsideFill = r.get("color") === "inherit" ? t.inheritColor || null : "auto", n;
}
function Ux(r, t, e, n, i) {
  e = e || Ks;
  var a = t.ecModel, o = a && a.option.textStyle, s = Yx(t), u;
  if (s) {
    u = {};
    for (var l in s)
      if (s.hasOwnProperty(l)) {
        var f = t.getModel(["rich", l]);
        id(u[l] = {}, f, o, e, n, i, !1, !0);
      }
  }
  u && (r.rich = u);
  var h = t.get("overflow");
  h && (r.overflow = h);
  var v = t.get("minMargin");
  v != null && (r.margin = v), id(r, t, o, e, n, i, !0, !1);
}
function Yx(r) {
  for (var t; r && r !== r.ecModel; ) {
    var e = (r.option || Ks).rich;
    if (e) {
      t = t || {};
      for (var n = yt(e), i = 0; i < n.length; i++) {
        var a = n[i];
        t[a] = 1;
      }
    }
    r = r.parentModel;
  }
  return t;
}
var ed = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY"], rd = ["align", "lineHeight", "width", "height", "tag", "verticalAlign", "ellipsis"], nd = ["padding", "borderWidth", "borderRadius", "borderDashOffset", "backgroundColor", "borderColor", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"];
function id(r, t, e, n, i, a, o, s) {
  e = !i && e || Ks;
  var u = n && n.inheritColor, l = t.getShallow("color"), f = t.getShallow("textBorderColor"), h = K(t.getShallow("opacity"), e.opacity);
  (l === "inherit" || l === "auto") && (process.env.NODE_ENV !== "production" && l === "auto" && At("color: 'auto'", "color: 'inherit'"), u ? l = u : l = null), (f === "inherit" || f === "auto") && (process.env.NODE_ENV !== "production" && f === "auto" && At("color: 'auto'", "color: 'inherit'"), u ? f = u : f = null), a || (l = l || e.color, f = f || e.textBorderColor), l != null && (r.fill = l), f != null && (r.stroke = f);
  var v = K(t.getShallow("textBorderWidth"), e.textBorderWidth);
  v != null && (r.lineWidth = v);
  var c = K(t.getShallow("textBorderType"), e.textBorderType);
  c != null && (r.lineDash = c);
  var d = K(t.getShallow("textBorderDashOffset"), e.textBorderDashOffset);
  d != null && (r.lineDashOffset = d), !i && h == null && !s && (h = n && n.defaultOpacity), h != null && (r.opacity = h), !i && !a && r.fill == null && n.inheritColor && (r.fill = n.inheritColor);
  for (var p = 0; p < ed.length; p++) {
    var g = ed[p], y = K(t.getShallow(g), e[g]);
    y != null && (r[g] = y);
  }
  for (var p = 0; p < rd.length; p++) {
    var g = rd[p], y = t.getShallow(g);
    y != null && (r[g] = y);
  }
  if (r.verticalAlign == null) {
    var m = t.getShallow("baseline");
    m != null && (r.verticalAlign = m);
  }
  if (!o || !n.disableBox) {
    for (var p = 0; p < nd.length; p++) {
      var g = nd[p], y = t.getShallow(g);
      y != null && (r[g] = y);
    }
    var _ = t.getShallow("borderType");
    _ != null && (r.borderDash = _), (r.backgroundColor === "auto" || r.backgroundColor === "inherit") && u && (process.env.NODE_ENV !== "production" && r.backgroundColor === "auto" && At("backgroundColor: 'auto'", "backgroundColor: 'inherit'"), r.backgroundColor = u), (r.borderColor === "auto" || r.borderColor === "inherit") && u && (process.env.NODE_ENV !== "production" && r.borderColor === "auto" && At("borderColor: 'auto'", "borderColor: 'inherit'"), r.borderColor = u);
  }
}
function Xx(r, t) {
  var e = t && t.getModel("textStyle");
  return Le([
    // FIXME in node-canvas fontWeight is before fontStyle
    r.fontStyle || e && e.getShallow("fontStyle") || "",
    r.fontWeight || e && e.getShallow("fontWeight") || "",
    (r.fontSize || e && e.getShallow("fontSize") || 12) + "px",
    r.fontFamily || e && e.getShallow("fontFamily") || "sans-serif"
  ].join(" "));
}
var Qs = Ct();
function qx(r, t, e, n) {
  if (r) {
    var i = Qs(r);
    i.prevValue = i.value, i.value = e;
    var a = t.normal;
    i.valueAnimation = a.get("valueAnimation"), i.valueAnimation && (i.precision = a.get("precision"), i.defaultInterpolatedText = n, i.statesModels = t);
  }
}
var $x = ["textStyle", "color"], rl = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "padding", "lineHeight", "rich", "width", "height", "overflow"], nl = new Mt(), Zx = (
  /** @class */
  (function() {
    function r() {
    }
    return r.prototype.getTextColor = function(t) {
      var e = this.ecModel;
      return this.getShallow("color") || (!t && e ? e.get($x) : null);
    }, r.prototype.getFont = function() {
      return Xx({
        fontStyle: this.getShallow("fontStyle"),
        fontWeight: this.getShallow("fontWeight"),
        fontSize: this.getShallow("fontSize"),
        fontFamily: this.getShallow("fontFamily")
      }, this.ecModel);
    }, r.prototype.getTextRect = function(t) {
      for (var e = {
        text: t,
        verticalAlign: this.getShallow("verticalAlign") || this.getShallow("baseline")
      }, n = 0; n < rl.length; n++)
        e[rl[n]] = this.getShallow(rl[n]);
      return nl.useStyle(e), nl.update(), nl.getBoundingRect();
    }, r;
  })()
), am = [
  ["lineWidth", "width"],
  ["stroke", "color"],
  ["opacity"],
  ["shadowBlur"],
  ["shadowOffsetX"],
  ["shadowOffsetY"],
  ["shadowColor"],
  ["lineDash", "type"],
  ["lineDashOffset", "dashOffset"],
  ["lineCap", "cap"],
  ["lineJoin", "join"],
  ["miterLimit"]
  // Option decal is in `DecalObject` but style.decal is in `PatternObject`.
  // So do not transfer decal directly.
], jx = ba(am), Kx = (
  /** @class */
  (function() {
    function r() {
    }
    return r.prototype.getLineStyle = function(t) {
      return jx(this, t);
    }, r;
  })()
), om = [
  ["fill", "color"],
  ["stroke", "borderColor"],
  ["lineWidth", "borderWidth"],
  ["opacity"],
  ["shadowBlur"],
  ["shadowOffsetX"],
  ["shadowOffsetY"],
  ["shadowColor"],
  ["lineDash", "borderType"],
  ["lineDashOffset", "borderDashOffset"],
  ["lineCap", "borderCap"],
  ["lineJoin", "borderJoin"],
  ["miterLimit", "borderMiterLimit"]
  // Option decal is in `DecalObject` but style.decal is in `PatternObject`.
  // So do not transfer decal directly.
], Qx = ba(om), Jx = (
  /** @class */
  (function() {
    function r() {
    }
    return r.prototype.getItemStyle = function(t, e) {
      return Qx(this, t, e);
    }, r;
  })()
), gt = (
  /** @class */
  (function() {
    function r(t, e, n) {
      this.parentModel = e, this.ecModel = n, this.option = t;
    }
    return r.prototype.init = function(t, e, n) {
    }, r.prototype.mergeOption = function(t, e) {
      ot(this.option, t, !0);
    }, r.prototype.get = function(t, e) {
      return t == null ? this.option : this._doGet(this.parsePath(t), !e && this.parentModel);
    }, r.prototype.getShallow = function(t, e) {
      var n = this.option, i = n == null ? n : n[t];
      if (i == null && !e) {
        var a = this.parentModel;
        a && (i = a.getShallow(t));
      }
      return i;
    }, r.prototype.getModel = function(t, e) {
      var n = t != null, i = n ? this.parsePath(t) : null, a = n ? this._doGet(i) : this.option;
      return e = e || this.parentModel && this.parentModel.getModel(this.resolveParentPath(i)), new r(a, e, this.ecModel);
    }, r.prototype.isEmpty = function() {
      return this.option == null;
    }, r.prototype.restoreData = function() {
    }, r.prototype.clone = function() {
      var t = this.constructor;
      return new t(nt(this.option));
    }, r.prototype.parsePath = function(t) {
      return typeof t == "string" ? t.split(".") : t;
    }, r.prototype.resolveParentPath = function(t) {
      return t;
    }, r.prototype.isAnimationEnabled = function() {
      if (!$.node && this.option) {
        if (this.option.animation != null)
          return !!this.option.animation;
        if (this.parentModel)
          return this.parentModel.isAnimationEnabled();
      }
    }, r.prototype._doGet = function(t, e) {
      var n = this.option;
      if (!t)
        return n;
      for (var i = 0; i < t.length && !(t[i] && (n = n && typeof n == "object" ? n[t[i]] : null, n == null)); i++)
        ;
      return n == null && e && (n = e._doGet(this.resolveParentPath(t), e.parentModel)), n;
    }, r;
  })()
);
bh(gt);
$b(gt);
Ce(gt, Kx);
Ce(gt, Jx);
Ce(gt, Jb);
Ce(gt, Zx);
var tT = Math.round(Math.random() * 10);
function Js(r) {
  return [r || "", tT++].join("_");
}
function eT(r) {
  var t = {};
  r.registerSubTypeDefaulter = function(e, n) {
    var i = Xe(e);
    t[i.main] = n;
  }, r.determineSubType = function(e, n) {
    var i = n.type;
    if (!i) {
      var a = Xe(e).main;
      r.hasSubTypes(e) && t[a] && (i = t[a](n));
    }
    return i;
  };
}
function rT(r, t) {
  r.topologicalTravel = function(a, o, s, u) {
    if (!a.length)
      return;
    var l = e(o), f = l.graph, h = l.noEntryList, v = {};
    for (M(a, function(m) {
      v[m] = !0;
    }); h.length; ) {
      var c = h.pop(), d = f[c], p = !!v[c];
      p && (s.call(u, c, d.originalDeps.slice()), delete v[c]), M(d.successor, p ? y : g);
    }
    M(v, function() {
      var m = "";
      throw process.env.NODE_ENV !== "production" && (m = us("Circular dependency may exists: ", v, a, o)), new Error(m);
    });
    function g(m) {
      f[m].entryCount--, f[m].entryCount === 0 && h.push(m);
    }
    function y(m) {
      v[m] = !0, g(m);
    }
  };
  function e(a) {
    var o = {}, s = [];
    return M(a, function(u) {
      var l = n(o, u), f = l.originalDeps = t(u), h = i(f, a);
      l.entryCount = h.length, l.entryCount === 0 && s.push(u), M(h, function(v) {
        ht(l.predecessor, v) < 0 && l.predecessor.push(v);
        var c = n(o, v);
        ht(c.successor, v) < 0 && c.successor.push(u);
      });
    }), {
      graph: o,
      noEntryList: s
    };
  }
  function n(a, o) {
    return a[o] || (a[o] = {
      predecessor: [],
      successor: []
    }), a[o];
  }
  function i(a, o) {
    var s = [];
    return M(a, function(u) {
      ht(o, u) >= 0 && s.push(u);
    }), s;
  }
}
function sm(r, t) {
  return ot(ot({}, r, !0), t, !0);
}
const nT = {
  time: {
    month: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthAbbr: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    dayOfWeekAbbr: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  },
  legend: {
    selector: {
      all: "All",
      inverse: "Inv"
    }
  },
  toolbox: {
    brush: {
      title: {
        rect: "Box Select",
        polygon: "Lasso Select",
        lineX: "Horizontally Select",
        lineY: "Vertically Select",
        keep: "Keep Selections",
        clear: "Clear Selections"
      }
    },
    dataView: {
      title: "Data View",
      lang: ["Data View", "Close", "Refresh"]
    },
    dataZoom: {
      title: {
        zoom: "Zoom",
        back: "Zoom Reset"
      }
    },
    magicType: {
      title: {
        line: "Switch to Line Chart",
        bar: "Switch to Bar Chart",
        stack: "Stack",
        tiled: "Tile"
      }
    },
    restore: {
      title: "Restore"
    },
    saveAsImage: {
      title: "Save as Image",
      lang: ["Right Click to Save Image"]
    }
  },
  series: {
    typeNames: {
      pie: "Pie chart",
      bar: "Bar chart",
      line: "Line chart",
      scatter: "Scatter plot",
      effectScatter: "Ripple scatter plot",
      radar: "Radar chart",
      tree: "Tree",
      treemap: "Treemap",
      boxplot: "Boxplot",
      candlestick: "Candlestick",
      k: "K line chart",
      heatmap: "Heat map",
      map: "Map",
      parallel: "Parallel coordinate map",
      lines: "Line graph",
      graph: "Relationship graph",
      sankey: "Sankey diagram",
      funnel: "Funnel chart",
      gauge: "Gauge",
      pictorialBar: "Pictorial bar",
      themeRiver: "Theme River Map",
      sunburst: "Sunburst",
      custom: "Custom chart",
      chart: "Chart"
    }
  },
  aria: {
    general: {
      withTitle: 'This is a chart about "{title}"',
      withoutTitle: "This is a chart"
    },
    series: {
      single: {
        prefix: "",
        withName: " with type {seriesType} named {seriesName}.",
        withoutName: " with type {seriesType}."
      },
      multiple: {
        prefix: ". It consists of {seriesCount} series count.",
        withName: " The {seriesId} series is a {seriesType} representing {seriesName}.",
        withoutName: " The {seriesId} series is a {seriesType}.",
        separator: {
          middle: "",
          end: ""
        }
      }
    },
    data: {
      allData: "The data is as follows: ",
      partialData: "The first {displayCnt} items are: ",
      withName: "the data for {name} is {value}",
      withoutName: "{value}",
      separator: {
        middle: ", ",
        end: ". "
      }
    }
  }
}, iT = {
  time: {
    month: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    monthAbbr: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    dayOfWeek: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
    dayOfWeekAbbr: ["日", "一", "二", "三", "四", "五", "六"]
  },
  legend: {
    selector: {
      all: "全选",
      inverse: "反选"
    }
  },
  toolbox: {
    brush: {
      title: {
        rect: "矩形选择",
        polygon: "圈选",
        lineX: "横向选择",
        lineY: "纵向选择",
        keep: "保持选择",
        clear: "清除选择"
      }
    },
    dataView: {
      title: "数据视图",
      lang: ["数据视图", "关闭", "刷新"]
    },
    dataZoom: {
      title: {
        zoom: "区域缩放",
        back: "区域缩放还原"
      }
    },
    magicType: {
      title: {
        line: "切换为折线图",
        bar: "切换为柱状图",
        stack: "切换为堆叠",
        tiled: "切换为平铺"
      }
    },
    restore: {
      title: "还原"
    },
    saveAsImage: {
      title: "保存为图片",
      lang: ["右键另存为图片"]
    }
  },
  series: {
    typeNames: {
      pie: "饼图",
      bar: "柱状图",
      line: "折线图",
      scatter: "散点图",
      effectScatter: "涟漪散点图",
      radar: "雷达图",
      tree: "树图",
      treemap: "矩形树图",
      boxplot: "箱型图",
      candlestick: "K线图",
      k: "K线图",
      heatmap: "热力图",
      map: "地图",
      parallel: "平行坐标图",
      lines: "线图",
      graph: "关系图",
      sankey: "桑基图",
      funnel: "漏斗图",
      gauge: "仪表盘图",
      pictorialBar: "象形柱图",
      themeRiver: "主题河流图",
      sunburst: "旭日图",
      custom: "自定义图表",
      chart: "图表"
    }
  },
  aria: {
    general: {
      withTitle: "这是一个关于“{title}”的图表。",
      withoutTitle: "这是一个图表，"
    },
    series: {
      single: {
        prefix: "",
        withName: "图表类型是{seriesType}，表示{seriesName}。",
        withoutName: "图表类型是{seriesType}。"
      },
      multiple: {
        prefix: "它由{seriesCount}个图表系列组成。",
        withName: "第{seriesId}个系列是一个表示{seriesName}的{seriesType}，",
        withoutName: "第{seriesId}个系列是一个{seriesType}，",
        separator: {
          middle: "；",
          end: "。"
        }
      }
    },
    data: {
      allData: "其数据是——",
      partialData: "其中，前{displayCnt}项是——",
      withName: "{name}的数据是{value}",
      withoutName: "{value}",
      separator: {
        middle: "，",
        end: ""
      }
    }
  }
};
var Ss = "ZH", Lh = "EN", ii = Lh, Uo = {}, Oh = {}, um = $.domSupported ? (function() {
  var r = (
    /* eslint-disable-next-line */
    (document.documentElement.lang || navigator.language || navigator.browserLanguage || ii).toUpperCase()
  );
  return r.indexOf(Ss) > -1 ? Ss : ii;
})() : ii;
function Rh(r, t) {
  r = r.toUpperCase(), Oh[r] = new gt(t), Uo[r] = t;
}
function aT(r) {
  if (W(r)) {
    var t = Uo[r.toUpperCase()] || {};
    return r === Ss || r === Lh ? nt(t) : ot(nt(t), nt(Uo[ii]), !1);
  } else
    return ot(nt(r), nt(Uo[ii]), !1);
}
function oT(r) {
  return Oh[r];
}
function sT() {
  return Oh[ii];
}
Rh(Lh, nT);
Rh(Ss, iT);
var Nh = 1e3, kh = Nh * 60, la = kh * 60, we = la * 24, ad = we * 365, Ji = {
  year: "{yyyy}",
  month: "{MMM}",
  day: "{d}",
  hour: "{HH}:{mm}",
  minute: "{HH}:{mm}",
  second: "{HH}:{mm}:{ss}",
  millisecond: "{HH}:{mm}:{ss} {SSS}",
  none: "{yyyy}-{MM}-{dd} {HH}:{mm}:{ss} {SSS}"
}, vo = "{yyyy}-{MM}-{dd}", od = {
  year: "{yyyy}",
  month: "{yyyy}-{MM}",
  day: vo,
  hour: vo + " " + Ji.hour,
  minute: vo + " " + Ji.minute,
  second: vo + " " + Ji.second,
  millisecond: Ji.none
}, il = ["year", "month", "day", "hour", "minute", "second", "millisecond"], lm = ["year", "half-year", "quarter", "month", "week", "half-week", "day", "half-day", "quarter-day", "hour", "minute", "second", "millisecond"];
function Yt(r, t) {
  return r += "", "0000".substr(0, t - r.length) + r;
}
function ai(r) {
  switch (r) {
    case "half-year":
    case "quarter":
      return "month";
    case "week":
    case "half-week":
      return "day";
    case "half-day":
    case "quarter-day":
      return "hour";
    default:
      return r;
  }
}
function uT(r) {
  return r === ai(r);
}
function lT(r) {
  switch (r) {
    case "year":
    case "month":
      return "day";
    case "millisecond":
      return "millisecond";
    default:
      return "second";
  }
}
function Ya(r, t, e, n) {
  var i = xe(r), a = i[Bh(e)](), o = i[oi(e)]() + 1, s = Math.floor((o - 1) / 3) + 1, u = i[tu(e)](), l = i["get" + (e ? "UTC" : "") + "Day"](), f = i[Ta(e)](), h = (f - 1) % 12 + 1, v = i[eu(e)](), c = i[ru(e)](), d = i[nu(e)](), p = f >= 12 ? "pm" : "am", g = p.toUpperCase(), y = n instanceof gt ? n : oT(n || um) || sT(), m = y.getModel("time"), _ = m.get("month"), S = m.get("monthAbbr"), w = m.get("dayOfWeek"), b = m.get("dayOfWeekAbbr");
  return (t || "").replace(/{a}/g, p + "").replace(/{A}/g, g + "").replace(/{yyyy}/g, a + "").replace(/{yy}/g, Yt(a % 100 + "", 2)).replace(/{Q}/g, s + "").replace(/{MMMM}/g, _[o - 1]).replace(/{MMM}/g, S[o - 1]).replace(/{MM}/g, Yt(o, 2)).replace(/{M}/g, o + "").replace(/{dd}/g, Yt(u, 2)).replace(/{d}/g, u + "").replace(/{eeee}/g, w[l]).replace(/{ee}/g, b[l]).replace(/{e}/g, l + "").replace(/{HH}/g, Yt(f, 2)).replace(/{H}/g, f + "").replace(/{hh}/g, Yt(h + "", 2)).replace(/{h}/g, h + "").replace(/{mm}/g, Yt(v, 2)).replace(/{m}/g, v + "").replace(/{ss}/g, Yt(c, 2)).replace(/{s}/g, c + "").replace(/{SSS}/g, Yt(d, 3)).replace(/{S}/g, d + "");
}
function fT(r, t, e, n, i) {
  var a = null;
  if (W(e))
    a = e;
  else if (Z(e))
    a = e(r.value, t, {
      level: r.level
    });
  else {
    var o = F({}, Ji);
    if (r.level > 0)
      for (var s = 0; s < il.length; ++s)
        o[il[s]] = "{primary|" + o[il[s]] + "}";
    var u = e ? e.inherit === !1 ? e : ut(e, o) : o, l = fm(r.value, i);
    if (u[l])
      a = u[l];
    else if (u.inherit) {
      for (var f = lm.indexOf(l), s = f - 1; s >= 0; --s)
        if (u[l]) {
          a = u[l];
          break;
        }
      a = a || o.none;
    }
    if (H(a)) {
      var h = r.level == null ? 0 : r.level >= 0 ? r.level : a.length + r.level;
      h = Math.min(h, a.length - 1), a = a[h];
    }
  }
  return Ya(new Date(r.value), a, i, n);
}
function fm(r, t) {
  var e = xe(r), n = e[oi(t)]() + 1, i = e[tu(t)](), a = e[Ta(t)](), o = e[eu(t)](), s = e[ru(t)](), u = e[nu(t)](), l = u === 0, f = l && s === 0, h = f && o === 0, v = h && a === 0, c = v && i === 1, d = c && n === 1;
  return d ? "year" : c ? "month" : v ? "day" : h ? "hour" : f ? "minute" : l ? "second" : "millisecond";
}
function sd(r, t, e) {
  var n = dt(r) ? xe(r) : r;
  switch (t = t || fm(r, e), t) {
    case "year":
      return n[Bh(e)]();
    case "half-year":
      return n[oi(e)]() >= 6 ? 1 : 0;
    case "quarter":
      return Math.floor((n[oi(e)]() + 1) / 4);
    case "month":
      return n[oi(e)]();
    case "day":
      return n[tu(e)]();
    case "half-day":
      return n[Ta(e)]() / 24;
    case "hour":
      return n[Ta(e)]();
    case "minute":
      return n[eu(e)]();
    case "second":
      return n[ru(e)]();
    case "millisecond":
      return n[nu(e)]();
  }
}
function Bh(r) {
  return r ? "getUTCFullYear" : "getFullYear";
}
function oi(r) {
  return r ? "getUTCMonth" : "getMonth";
}
function tu(r) {
  return r ? "getUTCDate" : "getDate";
}
function Ta(r) {
  return r ? "getUTCHours" : "getHours";
}
function eu(r) {
  return r ? "getUTCMinutes" : "getMinutes";
}
function ru(r) {
  return r ? "getUTCSeconds" : "getSeconds";
}
function nu(r) {
  return r ? "getUTCMilliseconds" : "getMilliseconds";
}
function hT(r) {
  return r ? "setUTCFullYear" : "setFullYear";
}
function hm(r) {
  return r ? "setUTCMonth" : "setMonth";
}
function cm(r) {
  return r ? "setUTCDate" : "setDate";
}
function vm(r) {
  return r ? "setUTCHours" : "setHours";
}
function dm(r) {
  return r ? "setUTCMinutes" : "setMinutes";
}
function pm(r) {
  return r ? "setUTCSeconds" : "setSeconds";
}
function gm(r) {
  return r ? "setUTCMilliseconds" : "setMilliseconds";
}
function cT(r, t, e, n, i, a, o, s) {
  var u = new Mt({
    style: {
      text: r,
      font: t,
      align: e,
      verticalAlign: n,
      padding: i,
      rich: a,
      overflow: o ? "truncate" : null,
      lineHeight: s
    }
  });
  return u.getBoundingRect();
}
function Fh(r) {
  if (!mh(r))
    return W(r) ? r : "-";
  var t = (r + "").split(".");
  return t[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (t.length > 1 ? "." + t[1] : "");
}
function Vh(r, t) {
  return r = (r || "").toLowerCase().replace(/-(.)/g, function(e, n) {
    return n.toUpperCase();
  }), t && r && (r = r.charAt(0).toUpperCase() + r.slice(1)), r;
}
var Xa = ah;
function Sf(r, t, e) {
  var n = "{yyyy}-{MM}-{dd} {HH}:{mm}:{ss}";
  function i(f) {
    return f && Le(f) ? f : "-";
  }
  function a(f) {
    return !!(f != null && !isNaN(f) && isFinite(f));
  }
  var o = t === "time", s = r instanceof Date;
  if (o || s) {
    var u = o ? xe(r) : r;
    if (isNaN(+u)) {
      if (s)
        return "-";
    } else return Ya(u, n, e);
  }
  if (t === "ordinal")
    return pa(r) ? i(r) : dt(r) && a(r) ? r + "" : "-";
  var l = Sa(r);
  return a(l) ? Fh(l) : pa(r) ? i(r) : typeof r == "boolean" ? r + "" : "-";
}
var ud = ["a", "b", "c", "d", "e", "f", "g"], al = function(r, t) {
  return "{" + r + (t ?? "") + "}";
};
function zh(r, t, e) {
  H(t) || (t = [t]);
  var n = t.length;
  if (!n)
    return "";
  for (var i = t[0].$vars || [], a = 0; a < i.length; a++) {
    var o = ud[a];
    r = r.replace(al(o), al(o, 0));
  }
  for (var s = 0; s < n; s++)
    for (var u = 0; u < i.length; u++) {
      var l = t[s][i[u]];
      r = r.replace(al(ud[u], s), e ? qt(l) : l);
    }
  return r;
}
function ym(r, t) {
  var e = W(r) ? {
    color: r,
    extraCssText: t
  } : r || {}, n = e.color, i = e.type;
  t = e.extraCssText;
  var a = e.renderMode || "html";
  if (!n)
    return "";
  if (a === "html")
    return i === "subItem" ? '<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:' + qt(n) + ";" + (t || "") + '"></span>' : '<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:' + qt(n) + ";" + (t || "") + '"></span>';
  var o = e.markerId || "markerX";
  return {
    renderMode: a,
    content: "{" + o + "|}  ",
    style: i === "subItem" ? {
      width: 4,
      height: 4,
      borderRadius: 2,
      backgroundColor: n
    } : {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: n
    }
  };
}
function vT(r, t, e) {
  process.env.NODE_ENV !== "production" && At("echarts.format.formatTime", "echarts.time.format"), (r === "week" || r === "month" || r === "quarter" || r === "half-year" || r === "year") && (r = `MM-dd
yyyy`);
  var n = xe(t), i = e ? "getUTC" : "get", a = n[i + "FullYear"](), o = n[i + "Month"]() + 1, s = n[i + "Date"](), u = n[i + "Hours"](), l = n[i + "Minutes"](), f = n[i + "Seconds"](), h = n[i + "Milliseconds"]();
  return r = r.replace("MM", Yt(o, 2)).replace("M", o).replace("yyyy", a).replace("yy", Yt(a % 100 + "", 2)).replace("dd", Yt(s, 2)).replace("d", s).replace("hh", Yt(u, 2)).replace("h", u).replace("mm", Yt(l, 2)).replace("m", l).replace("ss", Yt(f, 2)).replace("s", f).replace("SSS", Yt(h, 3)), r;
}
function dT(r) {
  return r && r.charAt(0).toUpperCase() + r.substr(1);
}
function En(r, t) {
  return t = t || "transparent", W(r) ? r : Y(r) && r.colorStops && (r.colorStops[0] || {}).color || t;
}
function ld(r, t) {
  if (t === "_blank" || t === "blank") {
    var e = window.open();
    e.opener = null, e.location.href = r;
  } else
    window.open(r, t);
}
var Yo = M, pT = ["left", "right", "top", "bottom", "width", "height"], po = [["width", "left", "right"], ["height", "top", "bottom"]];
function Gh(r, t, e, n, i) {
  var a = 0, o = 0;
  n == null && (n = 1 / 0), i == null && (i = 1 / 0);
  var s = 0;
  t.eachChild(function(u, l) {
    var f = u.getBoundingRect(), h = t.childAt(l + 1), v = h && h.getBoundingRect(), c, d;
    if (r === "horizontal") {
      var p = f.width + (v ? -v.x + f.x : 0);
      c = a + p, c > n || u.newline ? (a = 0, c = p, o += s + e, s = f.height) : s = Math.max(s, f.height);
    } else {
      var g = f.height + (v ? -v.y + f.y : 0);
      d = o + g, d > i || u.newline ? (a += s + e, o = 0, d = g, s = f.width) : s = Math.max(s, f.width);
    }
    u.newline || (u.x = a, u.y = o, u.markRedraw(), r === "horizontal" ? a = c + e : o = d + e);
  });
}
var fa = Gh;
St(Gh, "vertical");
St(Gh, "horizontal");
function Pn(r, t, e) {
  e = Xa(e || 0);
  var n = t.width, i = t.height, a = _t(r.left, n), o = _t(r.top, i), s = _t(r.right, n), u = _t(r.bottom, i), l = _t(r.width, n), f = _t(r.height, i), h = e[2] + e[0], v = e[1] + e[3], c = r.aspect;
  switch (isNaN(l) && (l = n - s - v - a), isNaN(f) && (f = i - u - h - o), c != null && (isNaN(l) && isNaN(f) && (c > n / i ? l = n * 0.8 : f = i * 0.8), isNaN(l) && (l = c * f), isNaN(f) && (f = l / c)), isNaN(a) && (a = n - s - l - v), isNaN(o) && (o = i - u - f - h), r.left || r.right) {
    case "center":
      a = n / 2 - l / 2 - e[3];
      break;
    case "right":
      a = n - l - v;
      break;
  }
  switch (r.top || r.bottom) {
    case "middle":
    case "center":
      o = i / 2 - f / 2 - e[0];
      break;
    case "bottom":
      o = i - f - h;
      break;
  }
  a = a || 0, o = o || 0, isNaN(l) && (l = n - v - a - (s || 0)), isNaN(f) && (f = i - h - o - (u || 0));
  var d = new st(a + e[3], o + e[0], l, f);
  return d.margin = e, d;
}
function Ca(r) {
  var t = r.layoutMode || r.constructor.layoutMode;
  return Y(t) ? t : t ? {
    type: t
  } : null;
}
function fi(r, t, e) {
  var n = e && e.ignoreSize;
  !H(n) && (n = [n, n]);
  var i = o(po[0], 0), a = o(po[1], 1);
  l(po[0], r, i), l(po[1], r, a);
  function o(f, h) {
    var v = {}, c = 0, d = {}, p = 0, g = 2;
    if (Yo(f, function(_) {
      d[_] = r[_];
    }), Yo(f, function(_) {
      s(t, _) && (v[_] = d[_] = t[_]), u(v, _) && c++, u(d, _) && p++;
    }), n[h])
      return u(t, f[1]) ? d[f[2]] = null : u(t, f[2]) && (d[f[1]] = null), d;
    if (p === g || !c)
      return d;
    if (c >= g)
      return v;
    for (var y = 0; y < f.length; y++) {
      var m = f[y];
      if (!s(v, m) && s(r, m)) {
        v[m] = r[m];
        break;
      }
    }
    return v;
  }
  function s(f, h) {
    return f.hasOwnProperty(h);
  }
  function u(f, h) {
    return f[h] != null && f[h] !== "auto";
  }
  function l(f, h, v) {
    Yo(f, function(c) {
      h[c] = v[c];
    });
  }
}
function iu(r) {
  return gT({}, r);
}
function gT(r, t) {
  return t && r && Yo(pT, function(e) {
    t.hasOwnProperty(e) && (r[e] = t[e]);
  }), r;
}
var yT = Ct(), it = (
  /** @class */
  (function(r) {
    z(t, r);
    function t(e, n, i) {
      var a = r.call(this, e, n, i) || this;
      return a.uid = Js("ec_cpt_model"), a;
    }
    return t.prototype.init = function(e, n, i) {
      this.mergeDefaultAndTheme(e, i);
    }, t.prototype.mergeDefaultAndTheme = function(e, n) {
      var i = Ca(this), a = i ? iu(e) : {}, o = n.getTheme();
      ot(e, o.get(this.mainType)), ot(e, this.getDefaultOption()), i && fi(e, a, i);
    }, t.prototype.mergeOption = function(e, n) {
      ot(this.option, e, !0);
      var i = Ca(this);
      i && fi(this.option, e, i);
    }, t.prototype.optionUpdated = function(e, n) {
    }, t.prototype.getDefaultOption = function() {
      var e = this.constructor;
      if (!Yb(e))
        return e.defaultOption;
      var n = yT(this);
      if (!n.defaultOption) {
        for (var i = [], a = e; a; ) {
          var o = a.prototype.defaultOption;
          o && i.push(o), a = a.superClass;
        }
        for (var s = {}, u = i.length - 1; u >= 0; u--)
          s = ot(s, i[u], !0);
        n.defaultOption = s;
      }
      return n.defaultOption;
    }, t.prototype.getReferringComponents = function(e, n) {
      var i = e + "Index", a = e + "Id";
      return Va(this.ecModel, e, {
        index: this.get(i, !0),
        id: this.get(a, !0)
      }, n);
    }, t.prototype.getBoxLayoutParams = function() {
      var e = this;
      return {
        left: e.get("left"),
        top: e.get("top"),
        right: e.get("right"),
        bottom: e.get("bottom"),
        width: e.get("width"),
        height: e.get("height")
      };
    }, t.prototype.getZLevelKey = function() {
      return "";
    }, t.prototype.setZLevel = function(e) {
      this.option.zlevel = e;
    }, t.protoInitialize = (function() {
      var e = t.prototype;
      e.type = "component", e.id = "", e.name = "", e.mainType = "", e.subType = "", e.componentIndex = 0;
    })(), t;
  })(gt)
);
_y(it, gt);
Bs(it);
eT(it);
rT(it, mT);
function mT(r) {
  var t = [];
  return M(it.getClassesByMainType(r), function(e) {
    t = t.concat(e.dependencies || e.prototype.dependencies || []);
  }), t = U(t, function(e) {
    return Xe(e).main;
  }), r !== "dataset" && ht(t, "dataset") <= 0 && t.unshift("dataset"), t;
}
var mm = "";
typeof navigator < "u" && (mm = navigator.platform || "");
var Un = "rgba(0, 0, 0, 0.2)";
const _T = {
  darkMode: "auto",
  // backgroundColor: 'rgba(0,0,0,0)',
  colorBy: "series",
  color: ["#5470c6", "#91cc75", "#fac858", "#ee6666", "#73c0de", "#3ba272", "#fc8452", "#9a60b4", "#ea7ccc"],
  gradientColor: ["#f6efa6", "#d88273", "#bf444c"],
  aria: {
    decal: {
      decals: [{
        color: Un,
        dashArrayX: [1, 0],
        dashArrayY: [2, 5],
        symbolSize: 1,
        rotation: Math.PI / 6
      }, {
        color: Un,
        symbol: "circle",
        dashArrayX: [[8, 8], [0, 8, 8, 0]],
        dashArrayY: [6, 0],
        symbolSize: 0.8
      }, {
        color: Un,
        dashArrayX: [1, 0],
        dashArrayY: [4, 3],
        rotation: -Math.PI / 4
      }, {
        color: Un,
        dashArrayX: [[6, 6], [0, 6, 6, 0]],
        dashArrayY: [6, 0]
      }, {
        color: Un,
        dashArrayX: [[1, 0], [1, 6]],
        dashArrayY: [1, 0, 6, 0],
        rotation: Math.PI / 4
      }, {
        color: Un,
        symbol: "triangle",
        dashArrayX: [[9, 9], [0, 9, 9, 0]],
        dashArrayY: [7, 2],
        symbolSize: 0.75
      }]
    }
  },
  // If xAxis and yAxis declared, grid is created by default.
  // grid: {},
  textStyle: {
    // color: '#000',
    // decoration: 'none',
    // PENDING
    fontFamily: mm.match(/^Win/) ? "Microsoft YaHei" : "sans-serif",
    // fontFamily: 'Arial, Verdana, sans-serif',
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "normal"
  },
  // http://blogs.adobe.com/webplatform/2014/02/24/using-blend-modes-in-html-canvas/
  // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation
  // Default is source-over
  blendMode: null,
  stateAnimation: {
    duration: 300,
    easing: "cubicOut"
  },
  animation: "auto",
  animationDuration: 1e3,
  animationDurationUpdate: 500,
  animationEasing: "cubicInOut",
  animationEasingUpdate: "cubicInOut",
  animationThreshold: 2e3,
  // Configuration for progressive/incremental rendering
  progressiveThreshold: 3e3,
  progressive: 400,
  // Threshold of if use single hover layer to optimize.
  // It is recommended that `hoverLayerThreshold` is equivalent to or less than
  // `progressiveThreshold`, otherwise hover will cause restart of progressive,
  // which is unexpected.
  // see example <echarts/test/heatmap-large.html>.
  hoverLayerThreshold: 3e3,
  // See: module:echarts/scale/Time
  useUTC: !1
};
var bf = Q(["tooltip", "label", "itemName", "itemId", "itemGroupId", "itemChildGroupId", "seriesName"]), Ae = "original", ie = "arrayRows", Be = "objectRows", je = "keyedColumns", lr = "typedArray", _m = "unknown", fr = "column", di = "row", Lt = {
  Must: 1,
  Might: 2,
  Not: 3
  // Other cases
}, Sm = Ct();
function ST(r) {
  Sm(r).datasetMap = Q();
}
function bT(r, t, e) {
  var n = {}, i = Hh(t);
  if (!i || !r)
    return n;
  var a = [], o = [], s = t.ecModel, u = Sm(s).datasetMap, l = i.uid + "_" + e.seriesLayoutBy, f, h;
  r = r.slice(), M(r, function(p, g) {
    var y = Y(p) ? p : r[g] = {
      name: p
    };
    y.type === "ordinal" && f == null && (f = g, h = d(y)), n[y.name] = [];
  });
  var v = u.get(l) || u.set(l, {
    categoryWayDim: h,
    valueWayDim: 0
  });
  M(r, function(p, g) {
    var y = p.name, m = d(p);
    if (f == null) {
      var _ = v.valueWayDim;
      c(n[y], _, m), c(o, _, m), v.valueWayDim += m;
    } else if (f === g)
      c(n[y], 0, m), c(a, 0, m);
    else {
      var _ = v.categoryWayDim;
      c(n[y], _, m), c(o, _, m), v.categoryWayDim += m;
    }
  });
  function c(p, g, y) {
    for (var m = 0; m < y; m++)
      p.push(g + m);
  }
  function d(p) {
    var g = p.dimsDef;
    return g ? g.length : 1;
  }
  return a.length && (n.itemName = a), o.length && (n.seriesName = o), n;
}
function wT(r, t, e) {
  var n = {}, i = Hh(r);
  if (!i)
    return n;
  var a = t.sourceFormat, o = t.dimensionsDefine, s;
  (a === Be || a === je) && M(o, function(f, h) {
    (Y(f) ? f.name : f) === "name" && (s = h);
  });
  var u = (function() {
    for (var f = {}, h = {}, v = [], c = 0, d = Math.min(5, e); c < d; c++) {
      var p = wm(t.data, a, t.seriesLayoutBy, o, t.startIndex, c);
      v.push(p);
      var g = p === Lt.Not;
      if (g && f.v == null && c !== s && (f.v = c), (f.n == null || f.n === f.v || !g && v[f.n] === Lt.Not) && (f.n = c), y(f) && v[f.n] !== Lt.Not)
        return f;
      g || (p === Lt.Might && h.v == null && c !== s && (h.v = c), (h.n == null || h.n === h.v) && (h.n = c));
    }
    function y(m) {
      return m.v != null && m.n != null;
    }
    return y(f) ? f : y(h) ? h : null;
  })();
  if (u) {
    n.value = [u.v];
    var l = s ?? u.n;
    n.itemName = [l], n.seriesName = [l];
  }
  return n;
}
function Hh(r) {
  var t = r.get("data", !0);
  if (!t)
    return Va(r.ecModel, "dataset", {
      index: r.get("datasetIndex", !0),
      id: r.get("datasetId", !0)
    }, Oe).models[0];
}
function xT(r) {
  return !r.get("transform", !0) && !r.get("fromTransformResult", !0) ? [] : Va(r.ecModel, "dataset", {
    index: r.get("fromDatasetIndex", !0),
    id: r.get("fromDatasetId", !0)
  }, Oe).models;
}
function bm(r, t) {
  return wm(r.data, r.sourceFormat, r.seriesLayoutBy, r.dimensionsDefine, r.startIndex, t);
}
function wm(r, t, e, n, i, a) {
  var o, s = 5;
  if (Gt(r))
    return Lt.Not;
  var u, l;
  if (n) {
    var f = n[a];
    Y(f) ? (u = f.name, l = f.type) : W(f) && (u = f);
  }
  if (l != null)
    return l === "ordinal" ? Lt.Must : Lt.Not;
  if (t === ie) {
    var h = r;
    if (e === di) {
      for (var v = h[a], c = 0; c < (v || []).length && c < s; c++)
        if ((o = S(v[i + c])) != null)
          return o;
    } else
      for (var c = 0; c < h.length && c < s; c++) {
        var d = h[i + c];
        if (d && (o = S(d[a])) != null)
          return o;
      }
  } else if (t === Be) {
    var p = r;
    if (!u)
      return Lt.Not;
    for (var c = 0; c < p.length && c < s; c++) {
      var g = p[c];
      if (g && (o = S(g[u])) != null)
        return o;
    }
  } else if (t === je) {
    var y = r;
    if (!u)
      return Lt.Not;
    var v = y[u];
    if (!v || Gt(v))
      return Lt.Not;
    for (var c = 0; c < v.length && c < s; c++)
      if ((o = S(v[c])) != null)
        return o;
  } else if (t === Ae)
    for (var m = r, c = 0; c < m.length && c < s; c++) {
      var g = m[c], _ = Fa(g);
      if (!H(_))
        return Lt.Not;
      if ((o = S(_[a])) != null)
        return o;
    }
  function S(w) {
    var b = W(w);
    if (w != null && Number.isFinite(Number(w)) && w !== "")
      return b ? Lt.Might : Lt.Not;
    if (b && w !== "-")
      return Lt.Must;
  }
  return Lt.Not;
}
var TT = Q();
function CT(r, t, e) {
  var n = TT.get(t);
  if (!n)
    return e;
  var i = n(r);
  if (!i)
    return e;
  if (process.env.NODE_ENV !== "production")
    for (var a = 0; a < i.length; a++)
      J(ui(i[a]));
  return e.concat(i);
}
var fd = Ct();
Ct();
var Wh = (
  /** @class */
  (function() {
    function r() {
    }
    return r.prototype.getColorFromPalette = function(t, e, n) {
      var i = jt(this.get("color", !0)), a = this.get("colorLayer", !0);
      return AT(this, fd, i, a, t, e, n);
    }, r.prototype.clearColorPalette = function() {
      MT(this, fd);
    }, r;
  })()
);
function DT(r, t) {
  for (var e = r.length, n = 0; n < e; n++)
    if (r[n].length > t)
      return r[n];
  return r[e - 1];
}
function AT(r, t, e, n, i, a, o) {
  a = a || r;
  var s = t(a), u = s.paletteIdx || 0, l = s.paletteNameMap = s.paletteNameMap || {};
  if (l.hasOwnProperty(i))
    return l[i];
  var f = o == null || !n ? e : DT(n, o);
  if (f = f || e, !(!f || !f.length)) {
    var h = f[u];
    return i && (l[i] = h), s.paletteIdx = (u + 1) % f.length, h;
  }
}
function MT(r, t) {
  t(r).paletteIdx = 0, t(r).paletteNameMap = {};
}
var go, ki, hd, ol = "\0_ec_inner", cd = 1, ET = {
  grid: "GridComponent",
  polar: "PolarComponent",
  geo: "GeoComponent",
  singleAxis: "SingleAxisComponent",
  parallel: "ParallelComponent",
  calendar: "CalendarComponent",
  graphic: "GraphicComponent",
  toolbox: "ToolboxComponent",
  tooltip: "TooltipComponent",
  axisPointer: "AxisPointerComponent",
  brush: "BrushComponent",
  title: "TitleComponent",
  timeline: "TimelineComponent",
  markPoint: "MarkPointComponent",
  markLine: "MarkLineComponent",
  markArea: "MarkAreaComponent",
  legend: "LegendComponent",
  dataZoom: "DataZoomComponent",
  visualMap: "VisualMapComponent",
  // aria: 'AriaComponent',
  // dataset: 'DatasetComponent',
  // Dependencies
  xAxis: "GridComponent",
  yAxis: "GridComponent",
  angleAxis: "PolarComponent",
  radiusAxis: "PolarComponent"
}, PT = {
  line: "LineChart",
  bar: "BarChart",
  pie: "PieChart",
  scatter: "ScatterChart",
  radar: "RadarChart",
  map: "MapChart",
  tree: "TreeChart",
  treemap: "TreemapChart",
  graph: "GraphChart",
  gauge: "GaugeChart",
  funnel: "FunnelChart",
  parallel: "ParallelChart",
  sankey: "SankeyChart",
  boxplot: "BoxplotChart",
  candlestick: "CandlestickChart",
  effectScatter: "EffectScatterChart",
  lines: "LinesChart",
  heatmap: "HeatmapChart",
  pictorialBar: "PictorialBarChart",
  themeRiver: "ThemeRiverChart",
  sunburst: "SunburstChart",
  custom: "CustomChart"
}, bs = {};
function IT(r) {
  M(r, function(t, e) {
    if (!it.hasClass(e)) {
      var n = ET[e];
      n && !bs[n] && (Ht("Component " + e + ` is used but not imported.
import { ` + n + ` } from 'echarts/components';
echarts.use([` + n + "]);"), bs[n] = !0);
    }
  });
}
var Uh = (
  /** @class */
  (function(r) {
    z(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t.prototype.init = function(e, n, i, a, o, s) {
      a = a || {}, this.option = null, this._theme = new gt(a), this._locale = new gt(o), this._optionManager = s;
    }, t.prototype.setOption = function(e, n, i) {
      process.env.NODE_ENV !== "production" && (J(e != null, "option is null/undefined"), J(e[ol] !== cd, "please use chart.getOption()"));
      var a = pd(n);
      this._optionManager.setOption(e, i, a), this._resetOption(null, a);
    }, t.prototype.resetOption = function(e, n) {
      return this._resetOption(e, pd(n));
    }, t.prototype._resetOption = function(e, n) {
      var i = !1, a = this._optionManager;
      if (!e || e === "recreate") {
        var o = a.mountOption(e === "recreate");
        process.env.NODE_ENV !== "production" && IT(o), !this.option || e === "recreate" ? hd(this, o) : (this.restoreData(), this._mergeOption(o, n)), i = !0;
      }
      if ((e === "timeline" || e === "media") && this.restoreData(), !e || e === "recreate" || e === "timeline") {
        var s = a.getTimelineOption(this);
        s && (i = !0, this._mergeOption(s, n));
      }
      if (!e || e === "recreate" || e === "media") {
        var u = a.getMediaOption(this);
        u.length && M(u, function(l) {
          i = !0, this._mergeOption(l, n);
        }, this);
      }
      return i;
    }, t.prototype.mergeOption = function(e) {
      this._mergeOption(e, null);
    }, t.prototype._mergeOption = function(e, n) {
      var i = this.option, a = this._componentsMap, o = this._componentsCount, s = [], u = Q(), l = n && n.replaceMergeMainTypeMap;
      ST(this), M(e, function(h, v) {
        h != null && (it.hasClass(v) ? v && (s.push(v), u.set(v, !0)) : i[v] = i[v] == null ? nt(h) : ot(i[v], h, !0));
      }), l && l.each(function(h, v) {
        it.hasClass(v) && !u.get(v) && (s.push(v), u.set(v, !0));
      }), it.topologicalTravel(s, it.getAllClassMainTypes(), f, this);
      function f(h) {
        var v = CT(this, h, jt(e[h])), c = a.get(h), d = (
          // `!oldCmptList` means init. See the comment in `mappingToExists`
          c ? l && l.get(h) ? "replaceMerge" : "normalMerge" : "replaceAll"
        ), p = Pb(c, v, d);
        Bb(p, h, it), i[h] = null, a.set(h, null), o.set(h, 0);
        var g = [], y = [], m = 0, _, S;
        M(p, function(w, b) {
          var x = w.existing, T = w.newOption;
          if (!T)
            x && (x.mergeOption({}, this), x.optionUpdated({}, !1));
          else {
            var D = h === "series", A = it.getClass(
              h,
              w.keyInfo.subType,
              !D
              // Give a more detailed warn later if series don't exists
            );
            if (!A) {
              if (process.env.NODE_ENV !== "production") {
                var C = w.keyInfo.subType, E = PT[C];
                bs[C] || (bs[C] = !0, Ht(E ? "Series " + C + ` is used but not imported.
import { ` + E + ` } from 'echarts/charts';
echarts.use([` + E + "]);" : "Unknown series " + C));
              }
              return;
            }
            if (h === "tooltip") {
              if (_) {
                process.env.NODE_ENV !== "production" && (S || (zt("Currently only one tooltip component is allowed."), S = !0));
                return;
              }
              _ = !0;
            }
            if (x && x.constructor === A)
              x.name = w.keyInfo.name, x.mergeOption(T, this), x.optionUpdated(T, !1);
            else {
              var P = F({
                componentIndex: b
              }, w.keyInfo);
              x = new A(T, this, this, P), F(x, P), w.brandNew && (x.__requireNewView = !0), x.init(T, this, this), x.optionUpdated(null, !0);
            }
          }
          x ? (g.push(x.option), y.push(x), m++) : (g.push(void 0), y.push(void 0));
        }, this), i[h] = g, a.set(h, y), o.set(h, m), h === "series" && go(this);
      }
      this._seriesIndices || go(this);
    }, t.prototype.getOption = function() {
      var e = nt(this.option);
      return M(e, function(n, i) {
        if (it.hasClass(i)) {
          for (var a = jt(n), o = a.length, s = !1, u = o - 1; u >= 0; u--)
            a[u] && !ui(a[u]) ? s = !0 : (a[u] = null, !s && o--);
          a.length = o, e[i] = a;
        }
      }), delete e[ol], e;
    }, t.prototype.getTheme = function() {
      return this._theme;
    }, t.prototype.getLocaleModel = function() {
      return this._locale;
    }, t.prototype.setUpdatePayload = function(e) {
      this._payload = e;
    }, t.prototype.getUpdatePayload = function() {
      return this._payload;
    }, t.prototype.getComponent = function(e, n) {
      var i = this._componentsMap.get(e);
      if (i) {
        var a = i[n || 0];
        if (a)
          return a;
        if (n == null) {
          for (var o = 0; o < i.length; o++)
            if (i[o])
              return i[o];
        }
      }
    }, t.prototype.queryComponents = function(e) {
      var n = e.mainType;
      if (!n)
        return [];
      var i = e.index, a = e.id, o = e.name, s = this._componentsMap.get(n);
      if (!s || !s.length)
        return [];
      var u;
      return i != null ? (u = [], M(jt(i), function(l) {
        s[l] && u.push(s[l]);
      })) : a != null ? u = vd("id", a, s) : o != null ? u = vd("name", o, s) : u = Dt(s, function(l) {
        return !!l;
      }), dd(u, e);
    }, t.prototype.findComponents = function(e) {
      var n = e.query, i = e.mainType, a = s(n), o = a ? this.queryComponents(a) : Dt(this._componentsMap.get(i), function(l) {
        return !!l;
      });
      return u(dd(o, e));
      function s(l) {
        var f = i + "Index", h = i + "Id", v = i + "Name";
        return l && (l[f] != null || l[h] != null || l[v] != null) ? {
          mainType: i,
          // subType will be filtered finally.
          index: l[f],
          id: l[h],
          name: l[v]
        } : null;
      }
      function u(l) {
        return e.filter ? Dt(l, e.filter) : l;
      }
    }, t.prototype.eachComponent = function(e, n, i) {
      var a = this._componentsMap;
      if (Z(e)) {
        var o = n, s = e;
        a.each(function(h, v) {
          for (var c = 0; h && c < h.length; c++) {
            var d = h[c];
            d && s.call(o, v, d, d.componentIndex);
          }
        });
      } else
        for (var u = W(e) ? a.get(e) : Y(e) ? this.findComponents(e) : null, l = 0; u && l < u.length; l++) {
          var f = u[l];
          f && n.call(i, f, f.componentIndex);
        }
    }, t.prototype.getSeriesByName = function(e) {
      var n = qe(e, null);
      return Dt(this._componentsMap.get("series"), function(i) {
        return !!i && n != null && i.name === n;
      });
    }, t.prototype.getSeriesByIndex = function(e) {
      return this._componentsMap.get("series")[e];
    }, t.prototype.getSeriesByType = function(e) {
      return Dt(this._componentsMap.get("series"), function(n) {
        return !!n && n.subType === e;
      });
    }, t.prototype.getSeries = function() {
      return Dt(this._componentsMap.get("series"), function(e) {
        return !!e;
      });
    }, t.prototype.getSeriesCount = function() {
      return this._componentsCount.get("series");
    }, t.prototype.eachSeries = function(e, n) {
      ki(this), M(this._seriesIndices, function(i) {
        var a = this._componentsMap.get("series")[i];
        e.call(n, a, i);
      }, this);
    }, t.prototype.eachRawSeries = function(e, n) {
      M(this._componentsMap.get("series"), function(i) {
        i && e.call(n, i, i.componentIndex);
      });
    }, t.prototype.eachSeriesByType = function(e, n, i) {
      ki(this), M(this._seriesIndices, function(a) {
        var o = this._componentsMap.get("series")[a];
        o.subType === e && n.call(i, o, a);
      }, this);
    }, t.prototype.eachRawSeriesByType = function(e, n, i) {
      return M(this.getSeriesByType(e), n, i);
    }, t.prototype.isSeriesFiltered = function(e) {
      return ki(this), this._seriesIndicesMap.get(e.componentIndex) == null;
    }, t.prototype.getCurrentSeriesIndices = function() {
      return (this._seriesIndices || []).slice();
    }, t.prototype.filterSeries = function(e, n) {
      ki(this);
      var i = [];
      M(this._seriesIndices, function(a) {
        var o = this._componentsMap.get("series")[a];
        e.call(n, o, a) && i.push(a);
      }, this), this._seriesIndices = i, this._seriesIndicesMap = Q(i);
    }, t.prototype.restoreData = function(e) {
      go(this);
      var n = this._componentsMap, i = [];
      n.each(function(a, o) {
        it.hasClass(o) && i.push(o);
      }), it.topologicalTravel(i, it.getAllClassMainTypes(), function(a) {
        M(n.get(a), function(o) {
          o && (a !== "series" || !LT(o, e)) && o.restoreData();
        });
      });
    }, t.internalField = (function() {
      go = function(e) {
        var n = e._seriesIndices = [];
        M(e._componentsMap.get("series"), function(i) {
          i && n.push(i.componentIndex);
        }), e._seriesIndicesMap = Q(n);
      }, ki = function(e) {
        if (process.env.NODE_ENV !== "production" && !e._seriesIndices)
          throw new Error("Option should contains series.");
      }, hd = function(e, n) {
        e.option = {}, e.option[ol] = cd, e._componentsMap = Q({
          series: []
        }), e._componentsCount = Q();
        var i = n.aria;
        Y(i) && i.enabled == null && (i.enabled = !0), OT(n, e._theme.option), ot(n, _T, !1), e._mergeOption(n, null);
      };
    })(), t;
  })(gt)
);
function LT(r, t) {
  if (t) {
    var e = t.seriesIndex, n = t.seriesId, i = t.seriesName;
    return e != null && r.componentIndex !== e || n != null && r.id !== n || i != null && r.name !== i;
  }
}
function OT(r, t) {
  var e = r.color && !r.colorLayer;
  M(t, function(n, i) {
    i === "colorLayer" && e || it.hasClass(i) || (typeof n == "object" ? r[i] = r[i] ? ot(r[i], n, !1) : nt(n) : r[i] == null && (r[i] = n));
  });
}
function vd(r, t, e) {
  if (H(t)) {
    var n = Q();
    return M(t, function(a) {
      if (a != null) {
        var o = qe(a, null);
        o != null && n.set(a, !0);
      }
    }), Dt(e, function(a) {
      return a && n.get(a[r]);
    });
  } else {
    var i = qe(t, null);
    return Dt(e, function(a) {
      return a && i != null && a[r] === i;
    });
  }
}
function dd(r, t) {
  return t.hasOwnProperty("subType") ? Dt(r, function(e) {
    return e && e.subType === t.subType;
  }) : r;
}
function pd(r) {
  var t = Q();
  return r && M(jt(r.replaceMerge), function(e) {
    process.env.NODE_ENV !== "production" && J(it.hasClass(e), '"' + e + '" is not valid component main type in "replaceMerge"'), t.set(e, !0);
  }), {
    replaceMergeMainTypeMap: t
  };
}
Ce(Uh, Wh);
var RT = [
  "getDom",
  "getZr",
  "getWidth",
  "getHeight",
  "getDevicePixelRatio",
  "dispatchAction",
  "isSSR",
  "isDisposed",
  "on",
  "off",
  "getDataURL",
  "getConnectedDataURL",
  // 'getModel',
  "getOption",
  // 'getViewOfComponentModel',
  // 'getViewOfSeriesModel',
  "getId",
  "updateLabelLayout"
], xm = (
  /** @class */
  /* @__PURE__ */ (function() {
    function r(t) {
      M(RT, function(e) {
        this[e] = vt(t[e], t);
      }, this);
    }
    return r;
  })()
), sl = {}, au = (
  /** @class */
  (function() {
    function r() {
      this._coordinateSystems = [];
    }
    return r.prototype.create = function(t, e) {
      var n = [];
      M(sl, function(i, a) {
        var o = i.create(t, e);
        n = n.concat(o || []);
      }), this._coordinateSystems = n;
    }, r.prototype.update = function(t, e) {
      M(this._coordinateSystems, function(n) {
        n.update && n.update(t, e);
      });
    }, r.prototype.getCoordinateSystems = function() {
      return this._coordinateSystems.slice();
    }, r.register = function(t, e) {
      sl[t] = e;
    }, r.get = function(t) {
      return sl[t];
    }, r;
  })()
), NT = /^(min|max)?(.+)$/, kT = (
  /** @class */
  (function() {
    function r(t) {
      this._timelineOptions = [], this._mediaList = [], this._currentMediaIndices = [], this._api = t;
    }
    return r.prototype.setOption = function(t, e, n) {
      t && (M(jt(t.series), function(o) {
        o && o.data && Gt(o.data) && Zo(o.data);
      }), M(jt(t.dataset), function(o) {
        o && o.source && Gt(o.source) && Zo(o.source);
      })), t = nt(t);
      var i = this._optionBackup, a = BT(t, e, !i);
      this._newBaseOption = a.baseOption, i ? (a.timelineOptions.length && (i.timelineOptions = a.timelineOptions), a.mediaList.length && (i.mediaList = a.mediaList), a.mediaDefault && (i.mediaDefault = a.mediaDefault)) : this._optionBackup = a;
    }, r.prototype.mountOption = function(t) {
      var e = this._optionBackup;
      return this._timelineOptions = e.timelineOptions, this._mediaList = e.mediaList, this._mediaDefault = e.mediaDefault, this._currentMediaIndices = [], nt(t ? e.baseOption : this._newBaseOption);
    }, r.prototype.getTimelineOption = function(t) {
      var e, n = this._timelineOptions;
      if (n.length) {
        var i = t.getComponent("timeline");
        i && (e = nt(
          // FIXME:TS as TimelineModel or quivlant interface
          n[i.getCurrentIndex()]
        ));
      }
      return e;
    }, r.prototype.getMediaOption = function(t) {
      var e = this._api.getWidth(), n = this._api.getHeight(), i = this._mediaList, a = this._mediaDefault, o = [], s = [];
      if (!i.length && !a)
        return s;
      for (var u = 0, l = i.length; u < l; u++)
        FT(i[u].query, e, n) && o.push(u);
      return !o.length && a && (o = [-1]), o.length && !zT(o, this._currentMediaIndices) && (s = U(o, function(f) {
        return nt(f === -1 ? a.option : i[f].option);
      })), this._currentMediaIndices = o, s;
    }, r;
  })()
);
function BT(r, t, e) {
  var n = [], i, a, o = r.baseOption, s = r.timeline, u = r.options, l = r.media, f = !!r.media, h = !!(u || s || o && o.timeline);
  o ? (a = o, a.timeline || (a.timeline = s)) : ((h || f) && (r.options = r.media = null), a = r), f && (H(l) ? M(l, function(c) {
    process.env.NODE_ENV !== "production" && c && !c.option && Y(c.query) && Y(c.query.option) && Ht("Illegal media option. Must be like { media: [ { query: {}, option: {} } ] }"), c && c.option && (c.query ? n.push(c) : i || (i = c));
  }) : process.env.NODE_ENV !== "production" && Ht("Illegal media option. Must be an array. Like { media: [ {...}, {...} ] }")), v(a), M(u, function(c) {
    return v(c);
  }), M(n, function(c) {
    return v(c.option);
  });
  function v(c) {
    M(t, function(d) {
      d(c, e);
    });
  }
  return {
    baseOption: a,
    timelineOptions: u || [],
    mediaDefault: i,
    mediaList: n
  };
}
function FT(r, t, e) {
  var n = {
    width: t,
    height: e,
    aspectratio: t / e
    // lower case for convenience.
  }, i = !0;
  return M(r, function(a, o) {
    var s = o.match(NT);
    if (!(!s || !s[1] || !s[2])) {
      var u = s[1], l = s[2].toLowerCase();
      VT(n[l], a, u) || (i = !1);
    }
  }), i;
}
function VT(r, t, e) {
  return e === "min" ? r >= t : e === "max" ? r <= t : r === t;
}
function zT(r, t) {
  return r.join(",") === t.join(",");
}
var ce = M, Da = Y, gd = ["areaStyle", "lineStyle", "nodeStyle", "linkStyle", "chordStyle", "label", "labelLine"];
function ul(r) {
  var t = r && r.itemStyle;
  if (t)
    for (var e = 0, n = gd.length; e < n; e++) {
      var i = gd[e], a = t.normal, o = t.emphasis;
      a && a[i] && (process.env.NODE_ENV !== "production" && At("itemStyle.normal." + i, i), r[i] = r[i] || {}, r[i].normal ? ot(r[i].normal, a[i]) : r[i].normal = a[i], a[i] = null), o && o[i] && (process.env.NODE_ENV !== "production" && At("itemStyle.emphasis." + i, "emphasis." + i), r[i] = r[i] || {}, r[i].emphasis ? ot(r[i].emphasis, o[i]) : r[i].emphasis = o[i], o[i] = null);
    }
}
function Vt(r, t, e) {
  if (r && r[t] && (r[t].normal || r[t].emphasis)) {
    var n = r[t].normal, i = r[t].emphasis;
    n && (process.env.NODE_ENV !== "production" && Ne("'normal' hierarchy in " + t + " has been removed since 4.0. All style properties are configured in " + t + " directly now."), e ? (r[t].normal = r[t].emphasis = null, ut(r[t], n)) : r[t] = n), i && (process.env.NODE_ENV !== "production" && Ne(t + ".emphasis has been changed to emphasis." + t + " since 4.0"), r.emphasis = r.emphasis || {}, r.emphasis[t] = i, i.focus && (r.emphasis.focus = i.focus), i.blurScope && (r.emphasis.blurScope = i.blurScope));
  }
}
function ta(r) {
  Vt(r, "itemStyle"), Vt(r, "lineStyle"), Vt(r, "areaStyle"), Vt(r, "label"), Vt(r, "labelLine"), Vt(r, "upperLabel"), Vt(r, "edgeLabel");
}
function wt(r, t) {
  var e = Da(r) && r[t], n = Da(e) && e.textStyle;
  if (n) {
    process.env.NODE_ENV !== "production" && Ne("textStyle hierarchy in " + t + " has been removed since 4.0. All textStyle properties are configured in " + t + " directly now.");
    for (var i = 0, a = gv.length; i < a; i++) {
      var o = gv[i];
      n.hasOwnProperty(o) && (e[o] = n[o]);
    }
  }
}
function ye(r) {
  r && (ta(r), wt(r, "label"), r.emphasis && wt(r.emphasis, "label"));
}
function GT(r) {
  if (Da(r)) {
    ul(r), ta(r), wt(r, "label"), wt(r, "upperLabel"), wt(r, "edgeLabel"), r.emphasis && (wt(r.emphasis, "label"), wt(r.emphasis, "upperLabel"), wt(r.emphasis, "edgeLabel"));
    var t = r.markPoint;
    t && (ul(t), ye(t));
    var e = r.markLine;
    e && (ul(e), ye(e));
    var n = r.markArea;
    n && ye(n);
    var i = r.data;
    if (r.type === "graph") {
      i = i || r.nodes;
      var a = r.links || r.edges;
      if (a && !Gt(a))
        for (var o = 0; o < a.length; o++)
          ye(a[o]);
      M(r.categories, function(l) {
        ta(l);
      });
    }
    if (i && !Gt(i))
      for (var o = 0; o < i.length; o++)
        ye(i[o]);
    if (t = r.markPoint, t && t.data)
      for (var s = t.data, o = 0; o < s.length; o++)
        ye(s[o]);
    if (e = r.markLine, e && e.data)
      for (var u = e.data, o = 0; o < u.length; o++)
        H(u[o]) ? (ye(u[o][0]), ye(u[o][1])) : ye(u[o]);
    r.type === "gauge" ? (wt(r, "axisLabel"), wt(r, "title"), wt(r, "detail")) : r.type === "treemap" ? (Vt(r.breadcrumb, "itemStyle"), M(r.levels, function(l) {
      ta(l);
    })) : r.type === "tree" && ta(r.leaves);
  }
}
function nr(r) {
  return H(r) ? r : r ? [r] : [];
}
function yd(r) {
  return (H(r) ? r[0] : r) || {};
}
function HT(r, t) {
  ce(nr(r.series), function(n) {
    Da(n) && GT(n);
  });
  var e = ["xAxis", "yAxis", "radiusAxis", "angleAxis", "singleAxis", "parallelAxis", "radar"];
  t && e.push("valueAxis", "categoryAxis", "logAxis", "timeAxis"), ce(e, function(n) {
    ce(nr(r[n]), function(i) {
      i && (wt(i, "axisLabel"), wt(i.axisPointer, "label"));
    });
  }), ce(nr(r.parallel), function(n) {
    var i = n && n.parallelAxisDefault;
    wt(i, "axisLabel"), wt(i && i.axisPointer, "label");
  }), ce(nr(r.calendar), function(n) {
    Vt(n, "itemStyle"), wt(n, "dayLabel"), wt(n, "monthLabel"), wt(n, "yearLabel");
  }), ce(nr(r.radar), function(n) {
    wt(n, "name"), n.name && n.axisName == null && (n.axisName = n.name, delete n.name, process.env.NODE_ENV !== "production" && Ne("name property in radar component has been changed to axisName")), n.nameGap != null && n.axisNameGap == null && (n.axisNameGap = n.nameGap, delete n.nameGap, process.env.NODE_ENV !== "production" && Ne("nameGap property in radar component has been changed to axisNameGap")), process.env.NODE_ENV !== "production" && ce(n.indicator, function(i) {
      i.text && At("text", "name", "radar.indicator");
    });
  }), ce(nr(r.geo), function(n) {
    Da(n) && (ye(n), ce(nr(n.regions), function(i) {
      ye(i);
    }));
  }), ce(nr(r.timeline), function(n) {
    ye(n), Vt(n, "label"), Vt(n, "itemStyle"), Vt(n, "controlStyle", !0);
    var i = n.data;
    H(i) && M(i, function(a) {
      Y(a) && (Vt(a, "label"), Vt(a, "itemStyle"));
    });
  }), ce(nr(r.toolbox), function(n) {
    Vt(n, "iconStyle"), ce(n.feature, function(i) {
      Vt(i, "iconStyle");
    });
  }), wt(yd(r.axisPointer), "label"), wt(yd(r.tooltip).axisPointer, "label");
}
function WT(r, t) {
  for (var e = t.split(","), n = r, i = 0; i < e.length && (n = n && n[e[i]], n != null); i++)
    ;
  return n;
}
function UT(r, t, e, n) {
  for (var i = t.split(","), a = r, o, s = 0; s < i.length - 1; s++)
    o = i[s], a[o] == null && (a[o] = {}), a = a[o];
  a[i[s]] == null && (a[i[s]] = e);
}
function md(r) {
  r && M(YT, function(t) {
    t[0] in r && !(t[1] in r) && (r[t[1]] = r[t[0]]);
  });
}
var YT = [["x", "left"], ["y", "top"], ["x2", "right"], ["y2", "bottom"]], XT = ["grid", "geo", "parallel", "legend", "toolbox", "title", "visualMap", "dataZoom", "timeline"], ll = [["borderRadius", "barBorderRadius"], ["borderColor", "barBorderColor"], ["borderWidth", "barBorderWidth"]];
function Bi(r) {
  var t = r && r.itemStyle;
  if (t)
    for (var e = 0; e < ll.length; e++) {
      var n = ll[e][1], i = ll[e][0];
      t[n] != null && (t[i] = t[n], process.env.NODE_ENV !== "production" && At(n, i));
    }
}
function _d(r) {
  r && r.alignTo === "edge" && r.margin != null && r.edgeDistance == null && (process.env.NODE_ENV !== "production" && At("label.margin", "label.edgeDistance", "pie"), r.edgeDistance = r.margin);
}
function Sd(r) {
  r && r.downplay && !r.blur && (r.blur = r.downplay, process.env.NODE_ENV !== "production" && At("downplay", "blur", "sunburst"));
}
function qT(r) {
  r && r.focusNodeAdjacency != null && (r.emphasis = r.emphasis || {}, r.emphasis.focus == null && (process.env.NODE_ENV !== "production" && At("focusNodeAdjacency", "emphasis: { focus: 'adjacency'}", "graph/sankey"), r.emphasis.focus = "adjacency"));
}
function Tm(r, t) {
  if (r)
    for (var e = 0; e < r.length; e++)
      t(r[e]), r[e] && Tm(r[e].children, t);
}
function Cm(r, t) {
  HT(r, t), r.series = jt(r.series), M(r.series, function(e) {
    if (Y(e)) {
      var n = e.type;
      if (n === "line")
        e.clipOverflow != null && (e.clip = e.clipOverflow, process.env.NODE_ENV !== "production" && At("clipOverflow", "clip", "line"));
      else if (n === "pie" || n === "gauge") {
        e.clockWise != null && (e.clockwise = e.clockWise, process.env.NODE_ENV !== "production" && At("clockWise", "clockwise")), _d(e.label);
        var i = e.data;
        if (i && !Gt(i))
          for (var a = 0; a < i.length; a++)
            _d(i[a]);
        e.hoverOffset != null && (e.emphasis = e.emphasis || {}, (e.emphasis.scaleSize = null) && (process.env.NODE_ENV !== "production" && At("hoverOffset", "emphasis.scaleSize"), e.emphasis.scaleSize = e.hoverOffset));
      } else if (n === "gauge") {
        var o = WT(e, "pointer.color");
        o != null && UT(e, "itemStyle.color", o);
      } else if (n === "bar") {
        Bi(e), Bi(e.backgroundStyle), Bi(e.emphasis);
        var i = e.data;
        if (i && !Gt(i))
          for (var a = 0; a < i.length; a++)
            typeof i[a] == "object" && (Bi(i[a]), Bi(i[a] && i[a].emphasis));
      } else if (n === "sunburst") {
        var s = e.highlightPolicy;
        s && (e.emphasis = e.emphasis || {}, e.emphasis.focus || (e.emphasis.focus = s, process.env.NODE_ENV !== "production" && At("highlightPolicy", "emphasis.focus", "sunburst"))), Sd(e), Tm(e.data, Sd);
      } else n === "graph" || n === "sankey" ? qT(e) : n === "map" && (e.mapType && !e.map && (process.env.NODE_ENV !== "production" && At("mapType", "map", "map"), e.map = e.mapType), e.mapLocation && (process.env.NODE_ENV !== "production" && Ne("`mapLocation` is not used anymore."), ut(e, e.mapLocation)));
      e.hoverAnimation != null && (e.emphasis = e.emphasis || {}, e.emphasis && e.emphasis.scale == null && (process.env.NODE_ENV !== "production" && At("hoverAnimation", "emphasis.scale"), e.emphasis.scale = e.hoverAnimation)), md(e);
    }
  }), r.dataRange && (r.visualMap = r.dataRange), M(XT, function(e) {
    var n = r[e];
    n && (H(n) || (n = [n]), M(n, function(i) {
      md(i);
    }));
  });
}
function $T(r) {
  var t = Q();
  r.eachSeries(function(e) {
    var n = e.get("stack");
    if (n) {
      var i = t.get(n) || t.set(n, []), a = e.getData(), o = {
        // Used for calculate axis extent automatically.
        // TODO: Type getCalculationInfo return more specific type?
        stackResultDimension: a.getCalculationInfo("stackResultDimension"),
        stackedOverDimension: a.getCalculationInfo("stackedOverDimension"),
        stackedDimension: a.getCalculationInfo("stackedDimension"),
        stackedByDimension: a.getCalculationInfo("stackedByDimension"),
        isStackedByIndex: a.getCalculationInfo("isStackedByIndex"),
        data: a,
        seriesModel: e
      };
      if (!o.stackedDimension || !(o.isStackedByIndex || o.stackedByDimension))
        return;
      i.length && a.setCalculationInfo("stackedOnSeries", i[i.length - 1].seriesModel), i.push(o);
    }
  }), t.each(ZT);
}
function ZT(r) {
  M(r, function(t, e) {
    var n = [], i = [NaN, NaN], a = [t.stackResultDimension, t.stackedOverDimension], o = t.data, s = t.isStackedByIndex, u = t.seriesModel.get("stackStrategy") || "samesign";
    o.modify(a, function(l, f, h) {
      var v = o.get(t.stackedDimension, h);
      if (isNaN(v))
        return i;
      var c, d;
      s ? d = o.getRawIndex(h) : c = o.get(t.stackedByDimension, h);
      for (var p = NaN, g = e - 1; g >= 0; g--) {
        var y = r[g];
        if (s || (d = y.data.rawIndexOf(y.stackedByDimension, c)), d >= 0) {
          var m = y.data.getByRawIndex(y.stackResultDimension, d);
          if (u === "all" || u === "positive" && m > 0 || u === "negative" && m < 0 || u === "samesign" && v >= 0 && m > 0 || u === "samesign" && v <= 0 && m < 0) {
            v = Sb(v, m), p = m;
            break;
          }
        }
      }
      return n[0] = v, n[1] = p, n;
    });
  });
}
var ou = (
  /** @class */
  /* @__PURE__ */ (function() {
    function r(t) {
      this.data = t.data || (t.sourceFormat === je ? {} : []), this.sourceFormat = t.sourceFormat || _m, this.seriesLayoutBy = t.seriesLayoutBy || fr, this.startIndex = t.startIndex || 0, this.dimensionsDetectedCount = t.dimensionsDetectedCount, this.metaRawOption = t.metaRawOption;
      var e = this.dimensionsDefine = t.dimensionsDefine;
      if (e)
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          i.type == null && bm(this, n) === Lt.Must && (i.type = "ordinal");
        }
    }
    return r;
  })()
);
function Yh(r) {
  return r instanceof ou;
}
function wf(r, t, e) {
  e = e || Am(r);
  var n = t.seriesLayoutBy, i = KT(r, e, n, t.sourceHeader, t.dimensions), a = new ou({
    data: r,
    sourceFormat: e,
    seriesLayoutBy: n,
    dimensionsDefine: i.dimensionsDefine,
    startIndex: i.startIndex,
    dimensionsDetectedCount: i.dimensionsDetectedCount,
    metaRawOption: nt(t)
  });
  return a;
}
function Dm(r) {
  return new ou({
    data: r,
    sourceFormat: Gt(r) ? lr : Ae
  });
}
function jT(r) {
  return new ou({
    data: r.data,
    sourceFormat: r.sourceFormat,
    seriesLayoutBy: r.seriesLayoutBy,
    dimensionsDefine: nt(r.dimensionsDefine),
    startIndex: r.startIndex,
    dimensionsDetectedCount: r.dimensionsDetectedCount
  });
}
function Am(r) {
  var t = _m;
  if (Gt(r))
    t = lr;
  else if (H(r)) {
    r.length === 0 && (t = ie);
    for (var e = 0, n = r.length; e < n; e++) {
      var i = r[e];
      if (i != null) {
        if (H(i) || Gt(i)) {
          t = ie;
          break;
        } else if (Y(i)) {
          t = Be;
          break;
        }
      }
    }
  } else if (Y(r)) {
    for (var a in r)
      if (Hr(r, a) && Qt(r[a])) {
        t = je;
        break;
      }
  }
  return t;
}
function KT(r, t, e, n, i) {
  var a, o;
  if (!r)
    return {
      dimensionsDefine: bd(i),
      startIndex: o,
      dimensionsDetectedCount: a
    };
  if (t === ie) {
    var s = r;
    n === "auto" || n == null ? wd(function(l) {
      l != null && l !== "-" && (W(l) ? o == null && (o = 1) : o = 0);
    }, e, s, 10) : o = dt(n) ? n : n ? 1 : 0, !i && o === 1 && (i = [], wd(function(l, f) {
      i[f] = l != null ? l + "" : "";
    }, e, s, 1 / 0)), a = i ? i.length : e === di ? s.length : s[0] ? s[0].length : null;
  } else if (t === Be)
    i || (i = QT(r));
  else if (t === je)
    i || (i = [], M(r, function(l, f) {
      i.push(f);
    }));
  else if (t === Ae) {
    var u = Fa(r[0]);
    a = H(u) && u.length || 1;
  } else t === lr && process.env.NODE_ENV !== "production" && J(!!i, "dimensions must be given if data is TypedArray.");
  return {
    startIndex: o,
    dimensionsDefine: bd(i),
    dimensionsDetectedCount: a
  };
}
function QT(r) {
  for (var t = 0, e; t < r.length && !(e = r[t++]); )
    ;
  if (e)
    return yt(e);
}
function bd(r) {
  if (r) {
    var t = Q();
    return U(r, function(e, n) {
      e = Y(e) ? e : {
        name: e
      };
      var i = {
        name: e.name,
        displayName: e.displayName,
        type: e.type
      };
      if (i.name == null)
        return i;
      i.name += "", i.displayName == null && (i.displayName = i.name);
      var a = t.get(i.name);
      return a ? i.name += "-" + a.count++ : t.set(i.name, {
        count: 1
      }), i;
    });
  }
}
function wd(r, t, e, n) {
  if (t === di)
    for (var i = 0; i < e.length && i < n; i++)
      r(e[i] ? e[i][0] : null, i);
  else
    for (var a = e[0] || [], i = 0; i < a.length && i < n; i++)
      r(a[i], i);
}
function Mm(r) {
  var t = r.sourceFormat;
  return t === Be || t === je;
}
var ln, fn, hn, xd, Td, Em = (
  /** @class */
  (function() {
    function r(t, e) {
      var n = Yh(t) ? t : Dm(t);
      this._source = n;
      var i = this._data = n.data;
      if (n.sourceFormat === lr) {
        if (process.env.NODE_ENV !== "production" && e == null)
          throw new Error("Typed array data must specify dimension size");
        this._offset = 0, this._dimSize = e, this._data = i;
      }
      Td(this, i, n);
    }
    return r.prototype.getSource = function() {
      return this._source;
    }, r.prototype.count = function() {
      return 0;
    }, r.prototype.getItem = function(t, e) {
    }, r.prototype.appendData = function(t) {
    }, r.prototype.clean = function() {
    }, r.protoInitialize = (function() {
      var t = r.prototype;
      t.pure = !1, t.persistent = !0;
    })(), r.internalField = (function() {
      var t;
      Td = function(o, s, u) {
        var l = u.sourceFormat, f = u.seriesLayoutBy, h = u.startIndex, v = u.dimensionsDefine, c = xd[Xh(l, f)];
        if (process.env.NODE_ENV !== "production" && J(c, "Invalide sourceFormat: " + l), F(o, c), l === lr)
          o.getItem = e, o.count = i, o.fillStorage = n;
        else {
          var d = Pm(l, f);
          o.getItem = vt(d, null, s, h, v);
          var p = Im(l, f);
          o.count = vt(p, null, s, h, v);
        }
      };
      var e = function(o, s) {
        o = o - this._offset, s = s || [];
        for (var u = this._data, l = this._dimSize, f = l * o, h = 0; h < l; h++)
          s[h] = u[f + h];
        return s;
      }, n = function(o, s, u, l) {
        for (var f = this._data, h = this._dimSize, v = 0; v < h; v++) {
          for (var c = l[v], d = c[0] == null ? 1 / 0 : c[0], p = c[1] == null ? -1 / 0 : c[1], g = s - o, y = u[v], m = 0; m < g; m++) {
            var _ = f[m * h + v];
            y[o + m] = _, _ < d && (d = _), _ > p && (p = _);
          }
          c[0] = d, c[1] = p;
        }
      }, i = function() {
        return this._data ? this._data.length / this._dimSize : 0;
      };
      xd = (t = {}, t[ie + "_" + fr] = {
        pure: !0,
        appendData: a
      }, t[ie + "_" + di] = {
        pure: !0,
        appendData: function() {
          throw new Error('Do not support appendData when set seriesLayoutBy: "row".');
        }
      }, t[Be] = {
        pure: !0,
        appendData: a
      }, t[je] = {
        pure: !0,
        appendData: function(o) {
          var s = this._data;
          M(o, function(u, l) {
            for (var f = s[l] || (s[l] = []), h = 0; h < (u || []).length; h++)
              f.push(u[h]);
          });
        }
      }, t[Ae] = {
        appendData: a
      }, t[lr] = {
        persistent: !1,
        pure: !0,
        appendData: function(o) {
          process.env.NODE_ENV !== "production" && J(Gt(o), "Added data must be TypedArray if data in initialization is TypedArray"), this._data = o;
        },
        // Clean self if data is already used.
        clean: function() {
          this._offset += this.count(), this._data = null;
        }
      }, t);
      function a(o) {
        for (var s = 0; s < o.length; s++)
          this._data.push(o[s]);
      }
    })(), r;
  })()
), Cd = function(r, t, e, n) {
  return r[n];
}, JT = (ln = {}, ln[ie + "_" + fr] = function(r, t, e, n) {
  return r[n + t];
}, ln[ie + "_" + di] = function(r, t, e, n, i) {
  n += t;
  for (var a = i || [], o = r, s = 0; s < o.length; s++) {
    var u = o[s];
    a[s] = u ? u[n] : null;
  }
  return a;
}, ln[Be] = Cd, ln[je] = function(r, t, e, n, i) {
  for (var a = i || [], o = 0; o < e.length; o++) {
    var s = e[o].name;
    if (process.env.NODE_ENV !== "production" && s == null)
      throw new Error();
    var u = r[s];
    a[o] = u ? u[n] : null;
  }
  return a;
}, ln[Ae] = Cd, ln);
function Pm(r, t) {
  var e = JT[Xh(r, t)];
  return process.env.NODE_ENV !== "production" && J(e, 'Do not support get item on "' + r + '", "' + t + '".'), e;
}
var Dd = function(r, t, e) {
  return r.length;
}, tC = (fn = {}, fn[ie + "_" + fr] = function(r, t, e) {
  return Math.max(0, r.length - t);
}, fn[ie + "_" + di] = function(r, t, e) {
  var n = r[0];
  return n ? Math.max(0, n.length - t) : 0;
}, fn[Be] = Dd, fn[je] = function(r, t, e) {
  var n = e[0].name;
  if (process.env.NODE_ENV !== "production" && n == null)
    throw new Error();
  var i = r[n];
  return i ? i.length : 0;
}, fn[Ae] = Dd, fn);
function Im(r, t) {
  var e = tC[Xh(r, t)];
  return process.env.NODE_ENV !== "production" && J(e, 'Do not support count on "' + r + '", "' + t + '".'), e;
}
var fl = function(r, t, e) {
  return r[t];
}, eC = (hn = {}, hn[ie] = fl, hn[Be] = function(r, t, e) {
  return r[e];
}, hn[je] = fl, hn[Ae] = function(r, t, e) {
  var n = Fa(r);
  return n instanceof Array ? n[t] : n;
}, hn[lr] = fl, hn);
function Lm(r) {
  var t = eC[r];
  return process.env.NODE_ENV !== "production" && J(t, 'Do not support get value on "' + r + '".'), t;
}
function Xh(r, t) {
  return r === ie ? r + "_" + t : r;
}
function hi(r, t, e) {
  if (r) {
    var n = r.getRawDataItem(t);
    if (n != null) {
      var i = r.getStore(), a = i.getSource().sourceFormat;
      if (e != null) {
        var o = r.getDimensionIndex(e), s = i.getDimensionProperty(o);
        return Lm(a)(n, o, s);
      } else {
        var u = n;
        return a === Ae && (u = Fa(n)), u;
      }
    }
  }
}
var rC = /\{@(.+?)\}/g, nC = (
  /** @class */
  (function() {
    function r() {
    }
    return r.prototype.getDataParams = function(t, e) {
      var n = this.getData(e), i = this.getRawValue(t, e), a = n.getRawIndex(t), o = n.getName(t), s = n.getRawDataItem(t), u = n.getItemVisual(t, "style"), l = u && u[n.getItemVisual(t, "drawType") || "fill"], f = u && u.stroke, h = this.mainType, v = h === "series", c = n.userOutput && n.userOutput.get();
      return {
        componentType: h,
        componentSubType: this.subType,
        componentIndex: this.componentIndex,
        seriesType: v ? this.subType : null,
        seriesIndex: this.seriesIndex,
        seriesId: v ? this.id : null,
        seriesName: v ? this.name : null,
        name: o,
        dataIndex: a,
        data: s,
        dataType: e,
        value: i,
        color: l,
        borderColor: f,
        dimensionNames: c ? c.fullDimensions : null,
        encode: c ? c.encode : null,
        // Param name list for mapping `a`, `b`, `c`, `d`, `e`
        $vars: ["seriesName", "name", "value"]
      };
    }, r.prototype.getFormattedLabel = function(t, e, n, i, a, o) {
      e = e || "normal";
      var s = this.getData(n), u = this.getDataParams(t, n);
      if (o && (u.value = o.interpolatedValue), i != null && H(u.value) && (u.value = u.value[i]), !a) {
        var l = s.getItemModel(t);
        a = l.get(e === "normal" ? ["label", "formatter"] : [e, "label", "formatter"]);
      }
      if (Z(a))
        return u.status = e, u.dimensionIndex = i, a(u);
      if (W(a)) {
        var f = zh(a, u);
        return f.replace(rC, function(h, v) {
          var c = v.length, d = v;
          d.charAt(0) === "[" && d.charAt(c - 1) === "]" && (d = +d.slice(1, c - 1), process.env.NODE_ENV !== "production" && isNaN(d) && Ht("Invalide label formatter: @" + v + ", only support @[0], @[1], @[2], ..."));
          var p = hi(s, t, d);
          if (o && H(o.interpolatedValue)) {
            var g = s.getDimensionIndex(d);
            g >= 0 && (p = o.interpolatedValue[g]);
          }
          return p != null ? p + "" : "";
        });
      }
    }, r.prototype.getRawValue = function(t, e) {
      return hi(this.getData(e), t);
    }, r.prototype.formatTooltip = function(t, e, n) {
    }, r;
  })()
);
function Ad(r) {
  var t, e;
  return Y(r) ? r.type ? e = r : process.env.NODE_ENV !== "production" && console.warn("The return type of `formatTooltip` is not supported: " + us(r)) : t = r, {
    text: t,
    // markers: markers || markersExisting,
    frag: e
  };
}
function ha(r) {
  return new iC(r);
}
var iC = (
  /** @class */
  (function() {
    function r(t) {
      t = t || {}, this._reset = t.reset, this._plan = t.plan, this._count = t.count, this._onDirty = t.onDirty, this._dirty = !0;
    }
    return r.prototype.perform = function(t) {
      var e = this._upstream, n = t && t.skip;
      if (this._dirty && e) {
        var i = this.context;
        i.data = i.outputData = e.context.outputData;
      }
      this.__pipeline && (this.__pipeline.currentTask = this);
      var a;
      this._plan && !n && (a = this._plan(this.context));
      var o = f(this._modBy), s = this._modDataCount || 0, u = f(t && t.modBy), l = t && t.modDataCount || 0;
      (o !== u || s !== l) && (a = "reset");
      function f(m) {
        return !(m >= 1) && (m = 1), m;
      }
      var h;
      (this._dirty || a === "reset") && (this._dirty = !1, h = this._doReset(n)), this._modBy = u, this._modDataCount = l;
      var v = t && t.step;
      if (e ? (process.env.NODE_ENV !== "production" && J(e._outputDueEnd != null), this._dueEnd = e._outputDueEnd) : (process.env.NODE_ENV !== "production" && J(!this._progress || this._count), this._dueEnd = this._count ? this._count(this.context) : 1 / 0), this._progress) {
        var c = this._dueIndex, d = Math.min(v != null ? this._dueIndex + v : 1 / 0, this._dueEnd);
        if (!n && (h || c < d)) {
          var p = this._progress;
          if (H(p))
            for (var g = 0; g < p.length; g++)
              this._doProgress(p[g], c, d, u, l);
          else
            this._doProgress(p, c, d, u, l);
        }
        this._dueIndex = d;
        var y = this._settedOutputEnd != null ? this._settedOutputEnd : d;
        process.env.NODE_ENV !== "production" && J(y >= this._outputDueEnd), this._outputDueEnd = y;
      } else
        this._dueIndex = this._outputDueEnd = this._settedOutputEnd != null ? this._settedOutputEnd : this._dueEnd;
      return this.unfinished();
    }, r.prototype.dirty = function() {
      this._dirty = !0, this._onDirty && this._onDirty(this.context);
    }, r.prototype._doProgress = function(t, e, n, i, a) {
      Md.reset(e, n, i, a), this._callingProgress = t, this._callingProgress({
        start: e,
        end: n,
        count: n - e,
        next: Md.next
      }, this.context);
    }, r.prototype._doReset = function(t) {
      this._dueIndex = this._outputDueEnd = this._dueEnd = 0, this._settedOutputEnd = null;
      var e, n;
      !t && this._reset && (e = this._reset(this.context), e && e.progress && (n = e.forceFirstProgress, e = e.progress), H(e) && !e.length && (e = null)), this._progress = e, this._modBy = this._modDataCount = null;
      var i = this._downstream;
      return i && i.dirty(), n;
    }, r.prototype.unfinished = function() {
      return this._progress && this._dueIndex < this._dueEnd;
    }, r.prototype.pipe = function(t) {
      process.env.NODE_ENV !== "production" && J(t && !t._disposed && t !== this), (this._downstream !== t || this._dirty) && (this._downstream = t, t._upstream = this, t.dirty());
    }, r.prototype.dispose = function() {
      this._disposed || (this._upstream && (this._upstream._downstream = null), this._downstream && (this._downstream._upstream = null), this._dirty = !1, this._disposed = !0);
    }, r.prototype.getUpstream = function() {
      return this._upstream;
    }, r.prototype.getDownstream = function() {
      return this._downstream;
    }, r.prototype.setOutputEnd = function(t) {
      this._outputDueEnd = this._settedOutputEnd = t;
    }, r;
  })()
), Md = /* @__PURE__ */ (function() {
  var r, t, e, n, i, a = {
    reset: function(u, l, f, h) {
      t = u, r = l, e = f, n = h, i = Math.ceil(n / e), a.next = e > 1 && n > 0 ? s : o;
    }
  };
  return a;
  function o() {
    return t < r ? t++ : null;
  }
  function s() {
    var u = t % i * e + Math.ceil(t / i), l = t >= r ? null : u < n ? u : t;
    return t++, l;
  }
})();
function Xo(r, t) {
  var e = t && t.type;
  return e === "ordinal" ? r : (e === "time" && !dt(r) && r != null && r !== "-" && (r = +xe(r)), r == null || r === "" ? NaN : Number(r));
}
Q({
  number: function(r) {
    return parseFloat(r);
  },
  time: function(r) {
    return +xe(r);
  },
  trim: function(r) {
    return W(r) ? Le(r) : r;
  }
});
var aC = (
  /** @class */
  (function() {
    function r(t, e) {
      var n = t === "desc";
      this._resultLT = n ? 1 : -1, e == null && (e = n ? "min" : "max"), this._incomparable = e === "min" ? -1 / 0 : 1 / 0;
    }
    return r.prototype.evaluate = function(t, e) {
      var n = dt(t) ? t : Sa(t), i = dt(e) ? e : Sa(e), a = isNaN(n), o = isNaN(i);
      if (a && (n = this._incomparable), o && (i = this._incomparable), a && o) {
        var s = W(t), u = W(e);
        s && (n = u ? t : 0), u && (i = s ? e : 0);
      }
      return n < i ? this._resultLT : n > i ? -this._resultLT : 0;
    }, r;
  })()
), oC = (
  /** @class */
  (function() {
    function r() {
    }
    return r.prototype.getRawData = function() {
      throw new Error("not supported");
    }, r.prototype.getRawDataItem = function(t) {
      throw new Error("not supported");
    }, r.prototype.cloneRawData = function() {
    }, r.prototype.getDimensionInfo = function(t) {
    }, r.prototype.cloneAllDimensionInfo = function() {
    }, r.prototype.count = function() {
    }, r.prototype.retrieveValue = function(t, e) {
    }, r.prototype.retrieveValueFromItem = function(t, e) {
    }, r.prototype.convertValue = function(t, e) {
      return Xo(t, e);
    }, r;
  })()
);
function sC(r, t) {
  var e = new oC(), n = r.data, i = e.sourceFormat = r.sourceFormat, a = r.startIndex, o = "";
  r.seriesLayoutBy !== fr && (process.env.NODE_ENV !== "production" && (o = '`seriesLayoutBy` of upstream dataset can only be "column" in data transform.'), re(o));
  var s = [], u = {}, l = r.dimensionsDefine;
  if (l)
    M(l, function(p, g) {
      var y = p.name, m = {
        index: g,
        name: y,
        displayName: p.displayName
      };
      if (s.push(m), y != null) {
        var _ = "";
        Hr(u, y) && (process.env.NODE_ENV !== "production" && (_ = 'dimension name "' + y + '" duplicated.'), re(_)), u[y] = m;
      }
    });
  else
    for (var f = 0; f < r.dimensionsDetectedCount; f++)
      s.push({
        index: f
      });
  var h = Pm(i, fr);
  t.__isBuiltIn && (e.getRawDataItem = function(p) {
    return h(n, a, s, p);
  }, e.getRawData = vt(uC, null, r)), e.cloneRawData = vt(lC, null, r);
  var v = Im(i, fr);
  e.count = vt(v, null, n, a, s);
  var c = Lm(i);
  e.retrieveValue = function(p, g) {
    var y = h(n, a, s, p);
    return d(y, g);
  };
  var d = e.retrieveValueFromItem = function(p, g) {
    if (p != null) {
      var y = s[g];
      if (y)
        return c(p, g, y.name);
    }
  };
  return e.getDimensionInfo = vt(fC, null, s, u), e.cloneAllDimensionInfo = vt(hC, null, s), e;
}
function uC(r) {
  var t = r.sourceFormat;
  if (!qh(t)) {
    var e = "";
    process.env.NODE_ENV !== "production" && (e = "`getRawData` is not supported in source format " + t), re(e);
  }
  return r.data;
}
function lC(r) {
  var t = r.sourceFormat, e = r.data;
  if (!qh(t)) {
    var n = "";
    process.env.NODE_ENV !== "production" && (n = "`cloneRawData` is not supported in source format " + t), re(n);
  }
  if (t === ie) {
    for (var i = [], a = 0, o = e.length; a < o; a++)
      i.push(e[a].slice());
    return i;
  } else if (t === Be) {
    for (var i = [], a = 0, o = e.length; a < o; a++)
      i.push(F({}, e[a]));
    return i;
  }
}
function fC(r, t, e) {
  if (e != null) {
    if (dt(e) || !isNaN(e) && !Hr(t, e))
      return r[e];
    if (Hr(t, e))
      return t[e];
  }
}
function hC(r) {
  return nt(r);
}
var Om = Q();
function cC(r) {
  r = nt(r);
  var t = r.type, e = "";
  t || (process.env.NODE_ENV !== "production" && (e = "Must have a `type` when `registerTransform`."), re(e));
  var n = t.split(":");
  n.length !== 2 && (process.env.NODE_ENV !== "production" && (e = 'Name must include namespace like "ns:regression".'), re(e));
  var i = !1;
  n[0] === "echarts" && (t = n[1], i = !0), r.__isBuiltIn = i, Om.set(t, r);
}
function vC(r, t, e) {
  var n = jt(r), i = n.length, a = "";
  i || (process.env.NODE_ENV !== "production" && (a = "If `transform` declared, it should at least contain one transform."), re(a));
  for (var o = 0, s = i; o < s; o++) {
    var u = n[o];
    t = dC(u, t, e, i === 1 ? null : o), o !== s - 1 && (t.length = Math.max(t.length, 1));
  }
  return t;
}
function dC(r, t, e, n) {
  var i = "";
  t.length || (process.env.NODE_ENV !== "production" && (i = "Must have at least one upstream dataset."), re(i)), Y(r) || (process.env.NODE_ENV !== "production" && (i = "transform declaration must be an object rather than " + typeof r + "."), re(i));
  var a = r.type, o = Om.get(a);
  o || (process.env.NODE_ENV !== "production" && (i = 'Can not find transform on type "' + a + '".'), re(i));
  var s = U(t, function(f) {
    return sC(f, o);
  }), u = jt(o.transform({
    upstream: s[0],
    upstreamList: s,
    config: nt(r.config)
  }));
  if (process.env.NODE_ENV !== "production" && r.print) {
    var l = U(u, function(f) {
      var h = n != null ? " === pipe index: " + n : "";
      return ["=== dataset index: " + e.datasetIndex + h + " ===", "- transform result data:", us(f.data), "- transform result dimensions:", us(f.dimensions)].join(`
`);
    }).join(`
`);
    Ab(l);
  }
  return U(u, function(f, h) {
    var v = "";
    Y(f) || (process.env.NODE_ENV !== "production" && (v = "A transform should not return some empty results."), re(v)), f.data || (process.env.NODE_ENV !== "production" && (v = "Transform result data should be not be null or undefined"), re(v));
    var c = Am(f.data);
    qh(c) || (process.env.NODE_ENV !== "production" && (v = "Transform result data should be array rows or object rows."), re(v));
    var d, p = t[0];
    if (p && h === 0 && !f.dimensions) {
      var g = p.startIndex;
      g && (f.data = p.data.slice(0, g).concat(f.data)), d = {
        seriesLayoutBy: fr,
        sourceHeader: g,
        dimensions: p.metaRawOption.dimensions
      };
    } else
      d = {
        seriesLayoutBy: fr,
        sourceHeader: 0,
        dimensions: f.dimensions
      };
    return wf(f.data, d, null);
  });
}
function qh(r) {
  return r === ie || r === Be;
}
var su = "undefined", pC = typeof Uint32Array === su ? Array : Uint32Array, gC = typeof Uint16Array === su ? Array : Uint16Array, Rm = typeof Int32Array === su ? Array : Int32Array, Ed = typeof Float64Array === su ? Array : Float64Array, Nm = {
  float: Ed,
  int: Rm,
  // Ordinal data type can be string or int
  ordinal: Array,
  number: Array,
  time: Ed
}, hl;
function Yn(r) {
  return r > 65535 ? pC : gC;
}
function Xn() {
  return [1 / 0, -1 / 0];
}
function yC(r) {
  var t = r.constructor;
  return t === Array ? r.slice() : new t(r);
}
function Pd(r, t, e, n, i) {
  var a = Nm[e || "float"];
  if (i) {
    var o = r[t], s = o && o.length;
    if (s !== n) {
      for (var u = new a(n), l = 0; l < s; l++)
        u[l] = o[l];
      r[t] = u;
    }
  } else
    r[t] = new a(n);
}
var xf = (
  /** @class */
  (function() {
    function r() {
      this._chunks = [], this._rawExtent = [], this._extent = [], this._count = 0, this._rawCount = 0, this._calcDimNameToIdx = Q();
    }
    return r.prototype.initData = function(t, e, n) {
      process.env.NODE_ENV !== "production" && J(Z(t.getItem) && Z(t.count), "Invalid data provider."), this._provider = t, this._chunks = [], this._indices = null, this.getRawIndex = this._getRawIdxIdentity;
      var i = t.getSource(), a = this.defaultDimValueGetter = hl[i.sourceFormat];
      this._dimValueGetter = n || a, this._rawExtent = [];
      var o = Mm(i);
      this._dimensions = U(e, function(s) {
        return process.env.NODE_ENV !== "production" && o && J(s.property != null), {
          // Only pick these two props. Not leak other properties like orderMeta.
          type: s.type,
          property: s.property
        };
      }), this._initDataFromProvider(0, t.count());
    }, r.prototype.getProvider = function() {
      return this._provider;
    }, r.prototype.getSource = function() {
      return this._provider.getSource();
    }, r.prototype.ensureCalculationDimension = function(t, e) {
      var n = this._calcDimNameToIdx, i = this._dimensions, a = n.get(t);
      if (a != null) {
        if (i[a].type === e)
          return a;
      } else
        a = i.length;
      return i[a] = {
        type: e
      }, n.set(t, a), this._chunks[a] = new Nm[e || "float"](this._rawCount), this._rawExtent[a] = Xn(), a;
    }, r.prototype.collectOrdinalMeta = function(t, e) {
      var n = this._chunks[t], i = this._dimensions[t], a = this._rawExtent, o = i.ordinalOffset || 0, s = n.length;
      o === 0 && (a[t] = Xn());
      for (var u = a[t], l = o; l < s; l++) {
        var f = n[l] = e.parseAndCollect(n[l]);
        isNaN(f) || (u[0] = Math.min(f, u[0]), u[1] = Math.max(f, u[1]));
      }
      i.ordinalMeta = e, i.ordinalOffset = s, i.type = "ordinal";
    }, r.prototype.getOrdinalMeta = function(t) {
      var e = this._dimensions[t], n = e.ordinalMeta;
      return n;
    }, r.prototype.getDimensionProperty = function(t) {
      var e = this._dimensions[t];
      return e && e.property;
    }, r.prototype.appendData = function(t) {
      process.env.NODE_ENV !== "production" && J(!this._indices, "appendData can only be called on raw data.");
      var e = this._provider, n = this.count();
      e.appendData(t);
      var i = e.count();
      return e.persistent || (i += n), n < i && this._initDataFromProvider(n, i, !0), [n, i];
    }, r.prototype.appendValues = function(t, e) {
      for (var n = this._chunks, i = this._dimensions, a = i.length, o = this._rawExtent, s = this.count(), u = s + Math.max(t.length, e || 0), l = 0; l < a; l++) {
        var f = i[l];
        Pd(n, l, f.type, u, !0);
      }
      for (var h = [], v = s; v < u; v++)
        for (var c = v - s, d = 0; d < a; d++) {
          var f = i[d], p = hl.arrayRows.call(this, t[c] || h, f.property, c, d);
          n[d][v] = p;
          var g = o[d];
          p < g[0] && (g[0] = p), p > g[1] && (g[1] = p);
        }
      return this._rawCount = this._count = u, {
        start: s,
        end: u
      };
    }, r.prototype._initDataFromProvider = function(t, e, n) {
      for (var i = this._provider, a = this._chunks, o = this._dimensions, s = o.length, u = this._rawExtent, l = U(o, function(m) {
        return m.property;
      }), f = 0; f < s; f++) {
        var h = o[f];
        u[f] || (u[f] = Xn()), Pd(a, f, h.type, e, n);
      }
      if (i.fillStorage)
        i.fillStorage(t, e, a, u);
      else
        for (var v = [], c = t; c < e; c++) {
          v = i.getItem(c, v);
          for (var d = 0; d < s; d++) {
            var p = a[d], g = this._dimValueGetter(v, l[d], c, d);
            p[c] = g;
            var y = u[d];
            g < y[0] && (y[0] = g), g > y[1] && (y[1] = g);
          }
        }
      !i.persistent && i.clean && i.clean(), this._rawCount = this._count = e, this._extent = [];
    }, r.prototype.count = function() {
      return this._count;
    }, r.prototype.get = function(t, e) {
      if (!(e >= 0 && e < this._count))
        return NaN;
      var n = this._chunks[t];
      return n ? n[this.getRawIndex(e)] : NaN;
    }, r.prototype.getValues = function(t, e) {
      var n = [], i = [];
      if (e == null) {
        e = t, t = [];
        for (var a = 0; a < this._dimensions.length; a++)
          i.push(a);
      } else
        i = t;
      for (var a = 0, o = i.length; a < o; a++)
        n.push(this.get(i[a], e));
      return n;
    }, r.prototype.getByRawIndex = function(t, e) {
      if (!(e >= 0 && e < this._rawCount))
        return NaN;
      var n = this._chunks[t];
      return n ? n[e] : NaN;
    }, r.prototype.getSum = function(t) {
      var e = this._chunks[t], n = 0;
      if (e)
        for (var i = 0, a = this.count(); i < a; i++) {
          var o = this.get(t, i);
          isNaN(o) || (n += o);
        }
      return n;
    }, r.prototype.getMedian = function(t) {
      var e = [];
      this.each([t], function(a) {
        isNaN(a) || e.push(a);
      });
      var n = e.sort(function(a, o) {
        return a - o;
      }), i = this.count();
      return i === 0 ? 0 : i % 2 === 1 ? n[(i - 1) / 2] : (n[i / 2] + n[i / 2 - 1]) / 2;
    }, r.prototype.indexOfRawIndex = function(t) {
      if (t >= this._rawCount || t < 0)
        return -1;
      if (!this._indices)
        return t;
      var e = this._indices, n = e[t];
      if (n != null && n < this._count && n === t)
        return t;
      for (var i = 0, a = this._count - 1; i <= a; ) {
        var o = (i + a) / 2 | 0;
        if (e[o] < t)
          i = o + 1;
        else if (e[o] > t)
          a = o - 1;
        else
          return o;
      }
      return -1;
    }, r.prototype.indicesOfNearest = function(t, e, n) {
      var i = this._chunks, a = i[t], o = [];
      if (!a)
        return o;
      n == null && (n = 1 / 0);
      for (var s = 1 / 0, u = -1, l = 0, f = 0, h = this.count(); f < h; f++) {
        var v = this.getRawIndex(f), c = e - a[v], d = Math.abs(c);
        d <= n && ((d < s || d === s && c >= 0 && u < 0) && (s = d, u = c, l = 0), c === u && (o[l++] = f));
      }
      return o.length = l, o;
    }, r.prototype.getIndices = function() {
      var t, e = this._indices;
      if (e) {
        var n = e.constructor, i = this._count;
        if (n === Array) {
          t = new n(i);
          for (var a = 0; a < i; a++)
            t[a] = e[a];
        } else
          t = new n(e.buffer, 0, i);
      } else {
        var n = Yn(this._rawCount);
        t = new n(this.count());
        for (var a = 0; a < t.length; a++)
          t[a] = a;
      }
      return t;
    }, r.prototype.filter = function(t, e) {
      if (!this._count)
        return this;
      for (var n = this.clone(), i = n.count(), a = Yn(n._rawCount), o = new a(i), s = [], u = t.length, l = 0, f = t[0], h = n._chunks, v = 0; v < i; v++) {
        var c = void 0, d = n.getRawIndex(v);
        if (u === 0)
          c = e(v);
        else if (u === 1) {
          var p = h[f][d];
          c = e(p, v);
        } else {
          for (var g = 0; g < u; g++)
            s[g] = h[t[g]][d];
          s[g] = v, c = e.apply(null, s);
        }
        c && (o[l++] = d);
      }
      return l < i && (n._indices = o), n._count = l, n._extent = [], n._updateGetRawIdx(), n;
    }, r.prototype.selectRange = function(t) {
      var e = this.clone(), n = e._count;
      if (!n)
        return this;
      var i = yt(t), a = i.length;
      if (!a)
        return this;
      var o = e.count(), s = Yn(e._rawCount), u = new s(o), l = 0, f = i[0], h = t[f][0], v = t[f][1], c = e._chunks, d = !1;
      if (!e._indices) {
        var p = 0;
        if (a === 1) {
          for (var g = c[i[0]], y = 0; y < n; y++) {
            var m = g[y];
            (m >= h && m <= v || isNaN(m)) && (u[l++] = p), p++;
          }
          d = !0;
        } else if (a === 2) {
          for (var g = c[i[0]], _ = c[i[1]], S = t[i[1]][0], w = t[i[1]][1], y = 0; y < n; y++) {
            var m = g[y], b = _[y];
            (m >= h && m <= v || isNaN(m)) && (b >= S && b <= w || isNaN(b)) && (u[l++] = p), p++;
          }
          d = !0;
        }
      }
      if (!d)
        if (a === 1)
          for (var y = 0; y < o; y++) {
            var x = e.getRawIndex(y), m = c[i[0]][x];
            (m >= h && m <= v || isNaN(m)) && (u[l++] = x);
          }
        else
          for (var y = 0; y < o; y++) {
            for (var T = !0, x = e.getRawIndex(y), D = 0; D < a; D++) {
              var A = i[D], m = c[A][x];
              (m < t[A][0] || m > t[A][1]) && (T = !1);
            }
            T && (u[l++] = e.getRawIndex(y));
          }
      return l < o && (e._indices = u), e._count = l, e._extent = [], e._updateGetRawIdx(), e;
    }, r.prototype.map = function(t, e) {
      var n = this.clone(t);
      return this._updateDims(n, t, e), n;
    }, r.prototype.modify = function(t, e) {
      this._updateDims(this, t, e);
    }, r.prototype._updateDims = function(t, e, n) {
      for (var i = t._chunks, a = [], o = e.length, s = t.count(), u = [], l = t._rawExtent, f = 0; f < e.length; f++)
        l[e[f]] = Xn();
      for (var h = 0; h < s; h++) {
        for (var v = t.getRawIndex(h), c = 0; c < o; c++)
          u[c] = i[e[c]][v];
        u[o] = h;
        var d = n && n.apply(null, u);
        if (d != null) {
          typeof d != "object" && (a[0] = d, d = a);
          for (var f = 0; f < d.length; f++) {
            var p = e[f], g = d[f], y = l[p], m = i[p];
            m && (m[v] = g), g < y[0] && (y[0] = g), g > y[1] && (y[1] = g);
          }
        }
      }
    }, r.prototype.lttbDownSample = function(t, e) {
      var n = this.clone([t], !0), i = n._chunks, a = i[t], o = this.count(), s = 0, u = Math.floor(1 / e), l = this.getRawIndex(0), f, h, v, c = new (Yn(this._rawCount))(Math.min((Math.ceil(o / u) + 2) * 2, o));
      c[s++] = l;
      for (var d = 1; d < o - 1; d += u) {
        for (var p = Math.min(d + u, o - 1), g = Math.min(d + u * 2, o), y = (g + p) / 2, m = 0, _ = p; _ < g; _++) {
          var S = this.getRawIndex(_), w = a[S];
          isNaN(w) || (m += w);
        }
        m /= g - p;
        var b = d, x = Math.min(d + u, o), T = d - 1, D = a[l];
        f = -1, v = b;
        for (var A = -1, C = 0, _ = b; _ < x; _++) {
          var S = this.getRawIndex(_), w = a[S];
          if (isNaN(w)) {
            C++, A < 0 && (A = S);
            continue;
          }
          h = Math.abs((T - y) * (w - D) - (T - _) * (m - D)), h > f && (f = h, v = S);
        }
        C > 0 && C < x - b && (c[s++] = Math.min(A, v), v = Math.max(A, v)), c[s++] = v, l = v;
      }
      return c[s++] = this.getRawIndex(o - 1), n._count = s, n._indices = c, n.getRawIndex = this._getRawIdx, n;
    }, r.prototype.minmaxDownSample = function(t, e) {
      for (var n = this.clone([t], !0), i = n._chunks, a = Math.floor(1 / e), o = i[t], s = this.count(), u = new (Yn(this._rawCount))(Math.ceil(s / a) * 2), l = 0, f = 0; f < s; f += a) {
        var h = f, v = o[this.getRawIndex(h)], c = f, d = o[this.getRawIndex(c)], p = a;
        f + a > s && (p = s - f);
        for (var g = 0; g < p; g++) {
          var y = this.getRawIndex(f + g), m = o[y];
          m < v && (v = m, h = f + g), m > d && (d = m, c = f + g);
        }
        var _ = this.getRawIndex(h), S = this.getRawIndex(c);
        h < c ? (u[l++] = _, u[l++] = S) : (u[l++] = S, u[l++] = _);
      }
      return n._count = l, n._indices = u, n._updateGetRawIdx(), n;
    }, r.prototype.downSample = function(t, e, n, i) {
      for (var a = this.clone([t], !0), o = a._chunks, s = [], u = Math.floor(1 / e), l = o[t], f = this.count(), h = a._rawExtent[t] = Xn(), v = new (Yn(this._rawCount))(Math.ceil(f / u)), c = 0, d = 0; d < f; d += u) {
        u > f - d && (u = f - d, s.length = u);
        for (var p = 0; p < u; p++) {
          var g = this.getRawIndex(d + p);
          s[p] = l[g];
        }
        var y = n(s), m = this.getRawIndex(Math.min(d + i(s, y) || 0, f - 1));
        l[m] = y, y < h[0] && (h[0] = y), y > h[1] && (h[1] = y), v[c++] = m;
      }
      return a._count = c, a._indices = v, a._updateGetRawIdx(), a;
    }, r.prototype.each = function(t, e) {
      if (this._count)
        for (var n = t.length, i = this._chunks, a = 0, o = this.count(); a < o; a++) {
          var s = this.getRawIndex(a);
          switch (n) {
            case 0:
              e(a);
              break;
            case 1:
              e(i[t[0]][s], a);
              break;
            case 2:
              e(i[t[0]][s], i[t[1]][s], a);
              break;
            default:
              for (var u = 0, l = []; u < n; u++)
                l[u] = i[t[u]][s];
              l[u] = a, e.apply(null, l);
          }
        }
    }, r.prototype.getDataExtent = function(t) {
      var e = this._chunks[t], n = Xn();
      if (!e)
        return n;
      var i = this.count(), a = !this._indices, o;
      if (a)
        return this._rawExtent[t].slice();
      if (o = this._extent[t], o)
        return o.slice();
      o = n;
      for (var s = o[0], u = o[1], l = 0; l < i; l++) {
        var f = this.getRawIndex(l), h = e[f];
        h < s && (s = h), h > u && (u = h);
      }
      return o = [s, u], this._extent[t] = o, o;
    }, r.prototype.getRawDataItem = function(t) {
      var e = this.getRawIndex(t);
      if (this._provider.persistent)
        return this._provider.getItem(e);
      for (var n = [], i = this._chunks, a = 0; a < i.length; a++)
        n.push(i[a][e]);
      return n;
    }, r.prototype.clone = function(t, e) {
      var n = new r(), i = this._chunks, a = t && $e(t, function(s, u) {
        return s[u] = !0, s;
      }, {});
      if (a)
        for (var o = 0; o < i.length; o++)
          n._chunks[o] = a[o] ? yC(i[o]) : i[o];
      else
        n._chunks = i;
      return this._copyCommonProps(n), e || (n._indices = this._cloneIndices()), n._updateGetRawIdx(), n;
    }, r.prototype._copyCommonProps = function(t) {
      t._count = this._count, t._rawCount = this._rawCount, t._provider = this._provider, t._dimensions = this._dimensions, t._extent = nt(this._extent), t._rawExtent = nt(this._rawExtent);
    }, r.prototype._cloneIndices = function() {
      if (this._indices) {
        var t = this._indices.constructor, e = void 0;
        if (t === Array) {
          var n = this._indices.length;
          e = new t(n);
          for (var i = 0; i < n; i++)
            e[i] = this._indices[i];
        } else
          e = new t(this._indices);
        return e;
      }
      return null;
    }, r.prototype._getRawIdxIdentity = function(t) {
      return t;
    }, r.prototype._getRawIdx = function(t) {
      return t < this._count && t >= 0 ? this._indices[t] : -1;
    }, r.prototype._updateGetRawIdx = function() {
      this.getRawIndex = this._indices ? this._getRawIdx : this._getRawIdxIdentity;
    }, r.internalField = (function() {
      function t(e, n, i, a) {
        return Xo(e[a], this._dimensions[a]);
      }
      hl = {
        arrayRows: t,
        objectRows: function(e, n, i, a) {
          return Xo(e[n], this._dimensions[a]);
        },
        keyedColumns: t,
        original: function(e, n, i, a) {
          var o = e && (e.value == null ? e : e.value);
          return Xo(o instanceof Array ? o[a] : o, this._dimensions[a]);
        },
        typedArray: function(e, n, i, a) {
          return e[a];
        }
      };
    })(), r;
  })()
), mC = (
  /** @class */
  (function() {
    function r(t) {
      this._sourceList = [], this._storeList = [], this._upstreamSignList = [], this._versionSignBase = 0, this._dirty = !0, this._sourceHost = t;
    }
    return r.prototype.dirty = function() {
      this._setLocalSource([], []), this._storeList = [], this._dirty = !0;
    }, r.prototype._setLocalSource = function(t, e) {
      this._sourceList = t, this._upstreamSignList = e, this._versionSignBase++, this._versionSignBase > 9e10 && (this._versionSignBase = 0);
    }, r.prototype._getVersionSign = function() {
      return this._sourceHost.uid + "_" + this._versionSignBase;
    }, r.prototype.prepareSource = function() {
      this._isDirty() && (this._createSource(), this._dirty = !1);
    }, r.prototype._createSource = function() {
      this._setLocalSource([], []);
      var t = this._sourceHost, e = this._getUpstreamSourceManagers(), n = !!e.length, i, a;
      if (Fi(t)) {
        var o = t, s = void 0, u = void 0, l = void 0;
        if (n) {
          var f = e[0];
          f.prepareSource(), l = f.getSource(), s = l.data, u = l.sourceFormat, a = [f._getVersionSign()];
        } else
          s = o.get("data", !0), u = Gt(s) ? lr : Ae, a = [];
        var h = this._getSourceMetaRawOption() || {}, v = l && l.metaRawOption || {}, c = K(h.seriesLayoutBy, v.seriesLayoutBy) || null, d = K(h.sourceHeader, v.sourceHeader), p = K(h.dimensions, v.dimensions), g = c !== v.seriesLayoutBy || !!d != !!v.sourceHeader || p;
        i = g ? [wf(s, {
          seriesLayoutBy: c,
          sourceHeader: d,
          dimensions: p
        }, u)] : [];
      } else {
        var y = t;
        if (n) {
          var m = this._applyTransform(e);
          i = m.sourceList, a = m.upstreamSignList;
        } else {
          var _ = y.get("source", !0);
          i = [wf(_, this._getSourceMetaRawOption(), null)], a = [];
        }
      }
      process.env.NODE_ENV !== "production" && J(i && a), this._setLocalSource(i, a);
    }, r.prototype._applyTransform = function(t) {
      var e = this._sourceHost, n = e.get("transform", !0), i = e.get("fromTransformResult", !0);
      if (process.env.NODE_ENV !== "production" && J(i != null || n != null), i != null) {
        var a = "";
        t.length !== 1 && (process.env.NODE_ENV !== "production" && (a = "When using `fromTransformResult`, there should be only one upstream dataset"), Id(a));
      }
      var o, s = [], u = [];
      return M(t, function(l) {
        l.prepareSource();
        var f = l.getSource(i || 0), h = "";
        i != null && !f && (process.env.NODE_ENV !== "production" && (h = "Can not retrieve result by `fromTransformResult`: " + i), Id(h)), s.push(f), u.push(l._getVersionSign());
      }), n ? o = vC(n, s, {
        datasetIndex: e.componentIndex
      }) : i != null && (o = [jT(s[0])]), {
        sourceList: o,
        upstreamSignList: u
      };
    }, r.prototype._isDirty = function() {
      if (this._dirty)
        return !0;
      for (var t = this._getUpstreamSourceManagers(), e = 0; e < t.length; e++) {
        var n = t[e];
        if (
          // Consider the case that there is ancestor diry, call it recursively.
          // The performance is probably not an issue because usually the chain is not long.
          n._isDirty() || this._upstreamSignList[e] !== n._getVersionSign()
        )
          return !0;
      }
    }, r.prototype.getSource = function(t) {
      t = t || 0;
      var e = this._sourceList[t];
      if (!e) {
        var n = this._getUpstreamSourceManagers();
        return n[0] && n[0].getSource(t);
      }
      return e;
    }, r.prototype.getSharedDataStore = function(t) {
      process.env.NODE_ENV !== "production" && J(Fi(this._sourceHost), "Can only call getDataStore on series source manager.");
      var e = t.makeStoreSchema();
      return this._innerGetDataStore(e.dimensions, t.source, e.hash);
    }, r.prototype._innerGetDataStore = function(t, e, n) {
      var i = 0, a = this._storeList, o = a[i];
      o || (o = a[i] = {});
      var s = o[n];
      if (!s) {
        var u = this._getUpstreamSourceManagers()[0];
        Fi(this._sourceHost) && u ? s = u._innerGetDataStore(t, e, n) : (s = new xf(), s.initData(new Em(e, t.length), t)), o[n] = s;
      }
      return s;
    }, r.prototype._getUpstreamSourceManagers = function() {
      var t = this._sourceHost;
      if (Fi(t)) {
        var e = Hh(t);
        return e ? [e.getSourceManager()] : [];
      } else
        return U(xT(t), function(n) {
          return n.getSourceManager();
        });
    }, r.prototype._getSourceMetaRawOption = function() {
      var t = this._sourceHost, e, n, i;
      if (Fi(t))
        e = t.get("seriesLayoutBy", !0), n = t.get("sourceHeader", !0), i = t.get("dimensions", !0);
      else if (!this._getUpstreamSourceManagers().length) {
        var a = t;
        e = a.get("seriesLayoutBy", !0), n = a.get("sourceHeader", !0), i = a.get("dimensions", !0);
      }
      return {
        seriesLayoutBy: e,
        sourceHeader: n,
        dimensions: i
      };
    }, r;
  })()
);
function Fi(r) {
  return r.mainType === "series";
}
function Id(r) {
  throw new Error(r);
}
var _C = "line-height:1";
function km(r) {
  var t = r.lineHeight;
  return t == null ? _C : "line-height:" + qt(t + "") + "px";
}
function Bm(r, t) {
  var e = r.color || "#6e7079", n = r.fontSize || 12, i = r.fontWeight || "400", a = r.color || "#464646", o = r.fontSize || 14, s = r.fontWeight || "900";
  return t === "html" ? {
    // eslint-disable-next-line max-len
    nameStyle: "font-size:" + qt(n + "") + "px;color:" + qt(e) + ";font-weight:" + qt(i + ""),
    // eslint-disable-next-line max-len
    valueStyle: "font-size:" + qt(o + "") + "px;color:" + qt(a) + ";font-weight:" + qt(s + "")
  } : {
    nameStyle: {
      fontSize: n,
      fill: e,
      fontWeight: i
    },
    valueStyle: {
      fontSize: o,
      fill: a,
      fontWeight: s
    }
  };
}
var SC = [0, 10, 20, 30], bC = ["", `
`, `

`, `


`];
function Aa(r, t) {
  return t.type = r, t;
}
function Tf(r) {
  return r.type === "section";
}
function Fm(r) {
  return Tf(r) ? wC : xC;
}
function Vm(r) {
  if (Tf(r)) {
    var t = 0, e = r.blocks.length, n = e > 1 || e > 0 && !r.noHeader;
    return M(r.blocks, function(i) {
      var a = Vm(i);
      a >= t && (t = a + +(n && // 0 always can not be readable gap level.
      (!a || Tf(i) && !i.noHeader)));
    }), t;
  }
  return 0;
}
function wC(r, t, e, n) {
  var i = t.noHeader, a = TC(Vm(t)), o = [], s = t.blocks || [];
  J(!s || H(s)), s = s || [];
  var u = r.orderMode;
  if (t.sortBlocks && u) {
    s = s.slice();
    var l = {
      valueAsc: "asc",
      valueDesc: "desc"
    };
    if (Hr(l, u)) {
      var f = new aC(l[u], null);
      s.sort(function(p, g) {
        return f.evaluate(p.sortParam, g.sortParam);
      });
    } else u === "seriesDesc" && s.reverse();
  }
  M(s, function(p, g) {
    var y = t.valueFormatter, m = Fm(p)(
      // Inherit valueFormatter
      y ? F(F({}, r), {
        valueFormatter: y
      }) : r,
      p,
      g > 0 ? a.html : 0,
      n
    );
    m != null && o.push(m);
  });
  var h = r.renderMode === "richText" ? o.join(a.richText) : Cf(n, o.join(""), i ? e : a.html);
  if (i)
    return h;
  var v = Sf(t.header, "ordinal", r.useUTC), c = Bm(n, r.renderMode).nameStyle, d = km(n);
  return r.renderMode === "richText" ? zm(r, v, c) + a.richText + h : Cf(n, '<div style="' + c + ";" + d + ';">' + qt(v) + "</div>" + h, e);
}
function xC(r, t, e, n) {
  var i = r.renderMode, a = t.noName, o = t.noValue, s = !t.markerType, u = t.name, l = r.useUTC, f = t.valueFormatter || r.valueFormatter || function(S) {
    return S = H(S) ? S : [S], U(S, function(w, b) {
      return Sf(w, H(c) ? c[b] : c, l);
    });
  };
  if (!(a && o)) {
    var h = s ? "" : r.markupStyleCreator.makeTooltipMarker(t.markerType, t.markerColor || "#333", i), v = a ? "" : Sf(u, "ordinal", l), c = t.valueType, d = o ? [] : f(t.value, t.dataIndex), p = !s || !a, g = !s && a, y = Bm(n, i), m = y.nameStyle, _ = y.valueStyle;
    return i === "richText" ? (s ? "" : h) + (a ? "" : zm(r, v, m)) + (o ? "" : AC(r, d, p, g, _)) : Cf(n, (s ? "" : h) + (a ? "" : CC(v, !s, m)) + (o ? "" : DC(d, p, g, _)), e);
  }
}
function Ld(r, t, e, n, i, a) {
  if (r) {
    var o = Fm(r), s = {
      useUTC: i,
      renderMode: e,
      orderMode: n,
      markupStyleCreator: t,
      valueFormatter: r.valueFormatter
    };
    return o(s, r, 0, a);
  }
}
function TC(r) {
  return {
    html: SC[r],
    richText: bC[r]
  };
}
function Cf(r, t, e) {
  var n = '<div style="clear:both"></div>', i = "margin: " + e + "px 0 0", a = km(r);
  return '<div style="' + i + ";" + a + ';">' + t + n + "</div>";
}
function CC(r, t, e) {
  var n = t ? "margin-left:2px" : "";
  return '<span style="' + e + ";" + n + '">' + qt(r) + "</span>";
}
function DC(r, t, e, n) {
  var i = e ? "10px" : "20px", a = t ? "float:right;margin-left:" + i : "";
  return r = H(r) ? r : [r], '<span style="' + a + ";" + n + '">' + U(r, function(o) {
    return qt(o);
  }).join("&nbsp;&nbsp;") + "</span>";
}
function zm(r, t, e) {
  return r.markupStyleCreator.wrapRichTextStyle(t, e);
}
function AC(r, t, e, n, i) {
  var a = [i], o = n ? 10 : 20;
  return e && a.push({
    padding: [0, 0, 0, o],
    align: "right"
  }), r.markupStyleCreator.wrapRichTextStyle(H(t) ? t.join("  ") : t, a);
}
function MC(r, t) {
  var e = r.getData().getItemVisual(t, "style"), n = e[r.visualDrawType];
  return En(n);
}
function Gm(r, t) {
  var e = r.get("padding");
  return e ?? (t === "richText" ? [8, 10] : 10);
}
var cl = (
  /** @class */
  (function() {
    function r() {
      this.richTextStyles = {}, this._nextStyleNameId = vy();
    }
    return r.prototype._generateStyleName = function() {
      return "__EC_aUTo_" + this._nextStyleNameId++;
    }, r.prototype.makeTooltipMarker = function(t, e, n) {
      var i = n === "richText" ? this._generateStyleName() : null, a = ym({
        color: e,
        type: t,
        renderMode: n,
        markerId: i
      });
      return W(a) ? a : (process.env.NODE_ENV !== "production" && J(i), this.richTextStyles[i] = a.style, a.content);
    }, r.prototype.wrapRichTextStyle = function(t, e) {
      var n = {};
      H(e) ? M(e, function(a) {
        return F(n, a);
      }) : F(n, e);
      var i = this._generateStyleName();
      return this.richTextStyles[i] = n, "{" + i + "|" + t + "}";
    }, r;
  })()
);
function EC(r) {
  var t = r.series, e = r.dataIndex, n = r.multipleSeries, i = t.getData(), a = i.mapDimensionsAll("defaultedTooltip"), o = a.length, s = t.getRawValue(e), u = H(s), l = MC(t, e), f, h, v, c;
  if (o > 1 || u && !o) {
    var d = PC(s, t, e, a, l);
    f = d.inlineValues, h = d.inlineValueTypes, v = d.blocks, c = d.inlineValues[0];
  } else if (o) {
    var p = i.getDimensionInfo(a[0]);
    c = f = hi(i, e, a[0]), h = p.type;
  } else
    c = f = u ? s[0] : s;
  var g = _h(t), y = g && t.name || "", m = i.getName(e), _ = n ? y : m;
  return Aa("section", {
    header: y,
    // When series name is not specified, do not show a header line with only '-'.
    // This case always happens in tooltip.trigger: 'item'.
    noHeader: n || !g,
    sortParam: c,
    blocks: [Aa("nameValue", {
      markerType: "item",
      markerColor: l,
      // Do not mix display seriesName and itemName in one tooltip,
      // which might confuses users.
      name: _,
      // name dimension might be auto assigned, where the name might
      // be not readable. So we check trim here.
      noName: !Le(_),
      value: f,
      valueType: h,
      dataIndex: e
    })].concat(v || [])
  });
}
function PC(r, t, e, n, i) {
  var a = t.getData(), o = $e(r, function(h, v, c) {
    var d = a.getDimensionInfo(c);
    return h = h || d && d.tooltip !== !1 && d.displayName != null;
  }, !1), s = [], u = [], l = [];
  n.length ? M(n, function(h) {
    f(hi(a, e, h), h);
  }) : M(r, f);
  function f(h, v) {
    var c = a.getDimensionInfo(v);
    !c || c.otherDims.tooltip === !1 || (o ? l.push(Aa("nameValue", {
      markerType: "subItem",
      markerColor: i,
      name: c.displayName,
      value: h,
      valueType: c.type
    })) : (s.push(h), u.push(c.type)));
  }
  return {
    inlineValues: s,
    inlineValueTypes: u,
    blocks: l
  };
}
var Sr = Ct();
function yo(r, t) {
  return r.getName(t) || r.getId(t);
}
var IC = "__universalTransitionEnabled", ae = (
  /** @class */
  (function(r) {
    z(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e._selectedDataIndicesMap = {}, e;
    }
    return t.prototype.init = function(e, n, i) {
      this.seriesIndex = this.componentIndex, this.dataTask = ha({
        count: OC,
        reset: RC
      }), this.dataTask.context = {
        model: this
      }, this.mergeDefaultAndTheme(e, i);
      var a = Sr(this).sourceManager = new mC(this);
      a.prepareSource();
      var o = this.getInitialData(e, i);
      Rd(o, this), this.dataTask.context.data = o, process.env.NODE_ENV !== "production" && J(o, "getInitialData returned invalid data."), Sr(this).dataBeforeProcessed = o, Od(this), this._initSelectedMapFromData(o);
    }, t.prototype.mergeDefaultAndTheme = function(e, n) {
      var i = Ca(this), a = i ? iu(e) : {}, o = this.subType;
      it.hasClass(o) && (o += "Series"), ot(e, n.getTheme().get(this.subType)), ot(e, this.getDefaultOption()), hf(e, "label", ["show"]), this.fillDataTextStyle(e.data), i && fi(e, a, i);
    }, t.prototype.mergeOption = function(e, n) {
      e = ot(this.option, e, !0), this.fillDataTextStyle(e.data);
      var i = Ca(this);
      i && fi(this.option, e, i);
      var a = Sr(this).sourceManager;
      a.dirty(), a.prepareSource();
      var o = this.getInitialData(e, n);
      Rd(o, this), this.dataTask.dirty(), this.dataTask.context.data = o, Sr(this).dataBeforeProcessed = o, Od(this), this._initSelectedMapFromData(o);
    }, t.prototype.fillDataTextStyle = function(e) {
      if (e && !Gt(e))
        for (var n = ["show"], i = 0; i < e.length; i++)
          e[i] && e[i].label && hf(e[i], "label", n);
    }, t.prototype.getInitialData = function(e, n) {
    }, t.prototype.appendData = function(e) {
      var n = this.getRawData();
      n.appendData(e.data);
    }, t.prototype.getData = function(e) {
      var n = Df(this);
      if (n) {
        var i = n.context.data;
        return e == null || !i.getLinkedData ? i : i.getLinkedData(e);
      } else
        return Sr(this).data;
    }, t.prototype.getAllData = function() {
      var e = this.getData();
      return e && e.getLinkedDataAll ? e.getLinkedDataAll() : [{
        data: e
      }];
    }, t.prototype.setData = function(e) {
      var n = Df(this);
      if (n) {
        var i = n.context;
        i.outputData = e, n !== this.dataTask && (i.data = e);
      }
      Sr(this).data = e;
    }, t.prototype.getEncode = function() {
      var e = this.get("encode", !0);
      if (e)
        return Q(e);
    }, t.prototype.getSourceManager = function() {
      return Sr(this).sourceManager;
    }, t.prototype.getSource = function() {
      return this.getSourceManager().getSource();
    }, t.prototype.getRawData = function() {
      return Sr(this).dataBeforeProcessed;
    }, t.prototype.getColorBy = function() {
      var e = this.get("colorBy");
      return e || "series";
    }, t.prototype.isColorBySeries = function() {
      return this.getColorBy() === "series";
    }, t.prototype.getBaseAxis = function() {
      var e = this.coordinateSystem;
      return e && e.getBaseAxis && e.getBaseAxis();
    }, t.prototype.formatTooltip = function(e, n, i) {
      return EC({
        series: this,
        dataIndex: e,
        multipleSeries: n
      });
    }, t.prototype.isAnimationEnabled = function() {
      var e = this.ecModel;
      if ($.node && !(e && e.ssr))
        return !1;
      var n = this.getShallow("animation");
      return n && this.getData().count() > this.getShallow("animationThreshold") && (n = !1), !!n;
    }, t.prototype.restoreData = function() {
      this.dataTask.dirty();
    }, t.prototype.getColorFromPalette = function(e, n, i) {
      var a = this.ecModel, o = Wh.prototype.getColorFromPalette.call(this, e, n, i);
      return o || (o = a.getColorFromPalette(e, n, i)), o;
    }, t.prototype.coordDimToDataDim = function(e) {
      return this.getRawData().mapDimensionsAll(e);
    }, t.prototype.getProgressive = function() {
      return this.get("progressive");
    }, t.prototype.getProgressiveThreshold = function() {
      return this.get("progressiveThreshold");
    }, t.prototype.select = function(e, n) {
      this._innerSelect(this.getData(n), e);
    }, t.prototype.unselect = function(e, n) {
      var i = this.option.selectedMap;
      if (i) {
        var a = this.option.selectedMode, o = this.getData(n);
        if (a === "series" || i === "all") {
          this.option.selectedMap = {}, this._selectedDataIndicesMap = {};
          return;
        }
        for (var s = 0; s < e.length; s++) {
          var u = e[s], l = yo(o, u);
          i[l] = !1, this._selectedDataIndicesMap[l] = -1;
        }
      }
    }, t.prototype.toggleSelect = function(e, n) {
      for (var i = [], a = 0; a < e.length; a++)
        i[0] = e[a], this.isSelected(e[a], n) ? this.unselect(i, n) : this.select(i, n);
    }, t.prototype.getSelectedDataIndices = function() {
      if (this.option.selectedMap === "all")
        return [].slice.call(this.getData().getIndices());
      for (var e = this._selectedDataIndicesMap, n = yt(e), i = [], a = 0; a < n.length; a++) {
        var o = e[n[a]];
        o >= 0 && i.push(o);
      }
      return i;
    }, t.prototype.isSelected = function(e, n) {
      var i = this.option.selectedMap;
      if (!i)
        return !1;
      var a = this.getData(n);
      return (i === "all" || i[yo(a, e)]) && !a.getItemModel(e).get(["select", "disabled"]);
    }, t.prototype.isUniversalTransitionEnabled = function() {
      if (this[IC])
        return !0;
      var e = this.option.universalTransition;
      return e ? e === !0 ? !0 : e && e.enabled : !1;
    }, t.prototype._innerSelect = function(e, n) {
      var i, a, o = this.option, s = o.selectedMode, u = n.length;
      if (!(!s || !u)) {
        if (s === "series")
          o.selectedMap = "all";
        else if (s === "multiple") {
          Y(o.selectedMap) || (o.selectedMap = {});
          for (var l = o.selectedMap, f = 0; f < u; f++) {
            var h = n[f], v = yo(e, h);
            l[v] = !0, this._selectedDataIndicesMap[v] = e.getRawIndex(h);
          }
        } else if (s === "single" || s === !0) {
          var c = n[u - 1], v = yo(e, c);
          o.selectedMap = (i = {}, i[v] = !0, i), this._selectedDataIndicesMap = (a = {}, a[v] = e.getRawIndex(c), a);
        }
      }
    }, t.prototype._initSelectedMapFromData = function(e) {
      if (!this.option.selectedMap) {
        var n = [];
        e.hasItemOption && e.each(function(i) {
          var a = e.getRawDataItem(i);
          a && a.selected && n.push(i);
        }), n.length > 0 && this._innerSelect(e, n);
      }
    }, t.registerClass = function(e) {
      return it.registerClass(e);
    }, t.protoInitialize = (function() {
      var e = t.prototype;
      e.type = "series.__base__", e.seriesIndex = 0, e.ignoreStyleOnData = !1, e.hasSymbolVisual = !1, e.defaultSymbol = "circle", e.visualStyleAccessPath = "itemStyle", e.visualDrawType = "fill";
    })(), t;
  })(it)
);
Ce(ae, nC);
Ce(ae, Wh);
_y(ae, it);
function Od(r) {
  var t = r.name;
  _h(r) || (r.name = LC(r) || t);
}
function LC(r) {
  var t = r.getRawData(), e = t.mapDimensionsAll("seriesName"), n = [];
  return M(e, function(i) {
    var a = t.getDimensionInfo(i);
    a.displayName && n.push(a.displayName);
  }), n.join(" ");
}
function OC(r) {
  return r.model.getRawData().count();
}
function RC(r) {
  var t = r.model;
  return t.setData(t.getRawData().cloneShallow()), NC;
}
function NC(r, t) {
  t.outputData && r.end > t.outputData.count() && t.model.getRawData().cloneShallow(t.outputData);
}
function Rd(r, t) {
  M(kg(r.CHANGABLE_METHODS, r.DOWNSAMPLE_METHODS), function(e) {
    r.wrapMethod(e, St(kC, t));
  });
}
function kC(r, t) {
  var e = Df(r);
  return e && e.setOutputEnd((t || this).count()), t;
}
function Df(r) {
  var t = (r.ecModel || {}).scheduler, e = t && t.getPipeline(r.uid);
  if (e) {
    var n = e.currentTask;
    if (n) {
      var i = n.agentStubMap;
      i && (n = i.get(r.uid));
    }
    return n;
  }
}
var oe = (
  /** @class */
  (function() {
    function r() {
      this.group = new It(), this.uid = Js("viewComponent");
    }
    return r.prototype.init = function(t, e) {
    }, r.prototype.render = function(t, e, n, i) {
    }, r.prototype.dispose = function(t, e) {
    }, r.prototype.updateView = function(t, e, n, i) {
    }, r.prototype.updateLayout = function(t, e, n, i) {
    }, r.prototype.updateVisual = function(t, e, n, i) {
    }, r.prototype.toggleBlurSeries = function(t, e, n) {
    }, r.prototype.eachRendered = function(t) {
      var e = this.group;
      e && e.traverse(t);
    }, r;
  })()
);
bh(oe);
Bs(oe);
function $h() {
  var r = Ct();
  return function(t) {
    var e = r(t), n = t.pipelineContext, i = !!e.large, a = !!e.progressiveRender, o = e.large = !!(n && n.large), s = e.progressiveRender = !!(n && n.progressiveRender);
    return (i !== o || a !== s) && "reset";
  };
}
var Hm = Ct(), BC = $h(), Kt = (
  /** @class */
  (function() {
    function r() {
      this.group = new It(), this.uid = Js("viewChart"), this.renderTask = ha({
        plan: FC,
        reset: VC
      }), this.renderTask.context = {
        view: this
      };
    }
    return r.prototype.init = function(t, e) {
    }, r.prototype.render = function(t, e, n, i) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("render method must been implemented");
    }, r.prototype.highlight = function(t, e, n, i) {
      var a = t.getData(i && i.dataType);
      if (!a) {
        process.env.NODE_ENV !== "production" && Ht("Unknown dataType " + i.dataType);
        return;
      }
      kd(a, i, "emphasis");
    }, r.prototype.downplay = function(t, e, n, i) {
      var a = t.getData(i && i.dataType);
      if (!a) {
        process.env.NODE_ENV !== "production" && Ht("Unknown dataType " + i.dataType);
        return;
      }
      kd(a, i, "normal");
    }, r.prototype.remove = function(t, e) {
      this.group.removeAll();
    }, r.prototype.dispose = function(t, e) {
    }, r.prototype.updateView = function(t, e, n, i) {
      this.render(t, e, n, i);
    }, r.prototype.updateLayout = function(t, e, n, i) {
      this.render(t, e, n, i);
    }, r.prototype.updateVisual = function(t, e, n, i) {
      this.render(t, e, n, i);
    }, r.prototype.eachRendered = function(t) {
      js(this.group, t);
    }, r.markUpdateMethod = function(t, e) {
      Hm(t).updateMethod = e;
    }, r.protoInitialize = (function() {
      var t = r.prototype;
      t.type = "chart";
    })(), r;
  })()
);
function Nd(r, t, e) {
  r && li(r) && (t === "emphasis" ? hs : cs)(r, e);
}
function kd(r, t, e) {
  var n = An(r, t), i = t && t.highlightKey != null ? ax(t.highlightKey) : null;
  n != null ? M(jt(n), function(a) {
    Nd(r.getItemGraphicEl(a), e, i);
  }) : r.eachItemGraphicEl(function(a) {
    Nd(a, e, i);
  });
}
bh(Kt, ["dispose"]);
Bs(Kt);
function FC(r) {
  return BC(r.model);
}
function VC(r) {
  var t = r.model, e = r.ecModel, n = r.api, i = r.payload, a = t.pipelineContext.progressiveRender, o = r.view, s = i && Hm(i).updateMethod, u = a ? "incrementalPrepareRender" : s && o[s] ? s : "render";
  return u !== "render" && o[u](t, e, n, i), zC[u];
}
var zC = {
  incrementalPrepareRender: {
    progress: function(r, t) {
      t.view.incrementalRender(r, t.model, t.ecModel, t.api, t.payload);
    }
  },
  render: {
    // Put view.render in `progress` to support appendData. But in this case
    // view.render should not be called in reset, otherwise it will be called
    // twise. Use `forceFirstProgress` to make sure that view.render is called
    // in any cases.
    forceFirstProgress: !0,
    progress: function(r, t) {
      t.view.render(t.model, t.ecModel, t.api, t.payload);
    }
  }
}, ws = "\0__throttleOriginMethod", Bd = "\0__throttleRate", Fd = "\0__throttleType";
function uu(r, t, e) {
  var n, i = 0, a = 0, o = null, s, u, l, f;
  t = t || 0;
  function h() {
    a = (/* @__PURE__ */ new Date()).getTime(), o = null, r.apply(u, l || []);
  }
  var v = function() {
    for (var c = [], d = 0; d < arguments.length; d++)
      c[d] = arguments[d];
    n = (/* @__PURE__ */ new Date()).getTime(), u = this, l = c;
    var p = f || t, g = f || e;
    f = null, s = n - (g ? i : a) - p, clearTimeout(o), g ? o = setTimeout(h, p) : s >= 0 ? h() : o = setTimeout(h, -s), i = n;
  };
  return v.clear = function() {
    o && (clearTimeout(o), o = null);
  }, v.debounceNextCall = function(c) {
    f = c;
  }, v;
}
function Wm(r, t, e, n) {
  var i = r[t];
  if (i) {
    var a = i[ws] || i, o = i[Fd], s = i[Bd];
    if (s !== e || o !== n) {
      if (e == null || !n)
        return r[t] = a;
      i = r[t] = uu(a, e, n === "debounce"), i[ws] = a, i[Fd] = n, i[Bd] = e;
    }
    return i;
  }
}
function Af(r, t) {
  var e = r[t];
  e && e[ws] && (e.clear && e.clear(), r[t] = e[ws]);
}
var Vd = Ct(), zd = {
  itemStyle: ba(om, !0),
  lineStyle: ba(am, !0)
}, GC = {
  lineStyle: "stroke",
  itemStyle: "fill"
};
function Um(r, t) {
  var e = r.visualStyleMapper || zd[t];
  return e || (console.warn("Unknown style type '" + t + "'."), zd.itemStyle);
}
function Ym(r, t) {
  var e = r.visualDrawType || GC[t];
  return e || (console.warn("Unknown style type '" + t + "'."), "fill");
}
var HC = {
  createOnAllSeries: !0,
  performRawSeries: !0,
  reset: function(r, t) {
    var e = r.getData(), n = r.visualStyleAccessPath || "itemStyle", i = r.getModel(n), a = Um(r, n), o = a(i), s = i.getShallow("decal");
    s && (e.setVisual("decal", s), s.dirty = !0);
    var u = Ym(r, n), l = o[u], f = Z(l) ? l : null, h = o.fill === "auto" || o.stroke === "auto";
    if (!o[u] || f || h) {
      var v = r.getColorFromPalette(
        // TODO series count changed.
        r.name,
        null,
        t.getSeriesCount()
      );
      o[u] || (o[u] = v, e.setVisual("colorFromPalette", !0)), o.fill = o.fill === "auto" || Z(o.fill) ? v : o.fill, o.stroke = o.stroke === "auto" || Z(o.stroke) ? v : o.stroke;
    }
    if (e.setVisual("style", o), e.setVisual("drawType", u), !t.isSeriesFiltered(r) && f)
      return e.setVisual("colorFromPalette", !1), {
        dataEach: function(c, d) {
          var p = r.getDataParams(d), g = F({}, o);
          g[u] = f(p), c.setItemVisual(d, "style", g);
        }
      };
  }
}, Vi = new gt(), WC = {
  createOnAllSeries: !0,
  performRawSeries: !0,
  reset: function(r, t) {
    if (!(r.ignoreStyleOnData || t.isSeriesFiltered(r))) {
      var e = r.getData(), n = r.visualStyleAccessPath || "itemStyle", i = Um(r, n), a = e.getVisual("drawType");
      return {
        dataEach: e.hasItemOption ? function(o, s) {
          var u = o.getRawDataItem(s);
          if (u && u[n]) {
            Vi.option = u[n];
            var l = i(Vi), f = o.ensureUniqueItemVisual(s, "style");
            F(f, l), Vi.option.decal && (o.setItemVisual(s, "decal", Vi.option.decal), Vi.option.decal.dirty = !0), a in l && o.setItemVisual(s, "colorFromPalette", !1);
          }
        } : null
      };
    }
  }
}, UC = {
  performRawSeries: !0,
  overallReset: function(r) {
    var t = Q();
    r.eachSeries(function(e) {
      var n = e.getColorBy();
      if (!e.isColorBySeries()) {
        var i = e.type + "-" + n, a = t.get(i);
        a || (a = {}, t.set(i, a)), Vd(e).scope = a;
      }
    }), r.eachSeries(function(e) {
      if (!(e.isColorBySeries() || r.isSeriesFiltered(e))) {
        var n = e.getRawData(), i = {}, a = e.getData(), o = Vd(e).scope, s = e.visualStyleAccessPath || "itemStyle", u = Ym(e, s);
        a.each(function(l) {
          var f = a.getRawIndex(l);
          i[f] = l;
        }), n.each(function(l) {
          var f = i[l], h = a.getItemVisual(f, "colorFromPalette");
          if (h) {
            var v = a.ensureUniqueItemVisual(f, "style"), c = n.getName(l) || l + "", d = n.count();
            v[u] = e.getColorFromPalette(c, o, d);
          }
        });
      }
    });
  }
}, mo = Math.PI;
function YC(r, t) {
  t = t || {}, ut(t, {
    text: "loading",
    textColor: "#000",
    fontSize: 12,
    fontWeight: "normal",
    fontStyle: "normal",
    fontFamily: "sans-serif",
    maskColor: "rgba(255, 255, 255, 0.8)",
    showSpinner: !0,
    color: "#5470c6",
    spinnerRadius: 10,
    lineWidth: 5,
    zlevel: 0
  });
  var e = new It(), n = new Tt({
    style: {
      fill: t.maskColor
    },
    zlevel: t.zlevel,
    z: 1e4
  });
  e.add(n);
  var i = new Mt({
    style: {
      text: t.text,
      fill: t.textColor,
      fontSize: t.fontSize,
      fontWeight: t.fontWeight,
      fontStyle: t.fontStyle,
      fontFamily: t.fontFamily
    },
    zlevel: t.zlevel,
    z: 10001
  }), a = new Tt({
    style: {
      fill: "none"
    },
    textContent: i,
    textConfig: {
      position: "right",
      distance: 10
    },
    zlevel: t.zlevel,
    z: 10001
  });
  e.add(a);
  var o;
  return t.showSpinner && (o = new Ha({
    shape: {
      startAngle: -mo / 2,
      endAngle: -mo / 2 + 0.1,
      r: t.spinnerRadius
    },
    style: {
      stroke: t.color,
      lineCap: "round",
      lineWidth: t.lineWidth
    },
    zlevel: t.zlevel,
    z: 10001
  }), o.animateShape(!0).when(1e3, {
    endAngle: mo * 3 / 2
  }).start("circularInOut"), o.animateShape(!0).when(1e3, {
    startAngle: mo * 3 / 2
  }).delay(300).start("circularInOut"), e.add(o)), e.resize = function() {
    var s = i.getBoundingRect().width, u = t.showSpinner ? t.spinnerRadius : 0, l = (r.getWidth() - u * 2 - (t.showSpinner && s ? 10 : 0) - s) / 2 - (t.showSpinner && s ? 0 : 5 + s / 2) + (t.showSpinner ? 0 : s / 2) + (s ? 0 : u), f = r.getHeight() / 2;
    t.showSpinner && o.setShape({
      cx: l,
      cy: f
    }), a.setShape({
      x: l - u,
      y: f - u,
      width: u * 2,
      height: u * 2
    }), n.setShape({
      x: 0,
      y: 0,
      width: r.getWidth(),
      height: r.getHeight()
    });
  }, e.resize(), e;
}
var Xm = (
  /** @class */
  (function() {
    function r(t, e, n, i) {
      this._stageTaskMap = Q(), this.ecInstance = t, this.api = e, n = this._dataProcessorHandlers = n.slice(), i = this._visualHandlers = i.slice(), this._allHandlers = n.concat(i);
    }
    return r.prototype.restoreData = function(t, e) {
      t.restoreData(e), this._stageTaskMap.each(function(n) {
        var i = n.overallTask;
        i && i.dirty();
      });
    }, r.prototype.getPerformArgs = function(t, e) {
      if (t.__pipeline) {
        var n = this._pipelineMap.get(t.__pipeline.id), i = n.context, a = !e && n.progressiveEnabled && (!i || i.progressiveRender) && t.__idxInPipeline > n.blockIndex, o = a ? n.step : null, s = i && i.modDataCount, u = s != null ? Math.ceil(s / o) : null;
        return {
          step: o,
          modBy: u,
          modDataCount: s
        };
      }
    }, r.prototype.getPipeline = function(t) {
      return this._pipelineMap.get(t);
    }, r.prototype.updateStreamModes = function(t, e) {
      var n = this._pipelineMap.get(t.uid), i = t.getData(), a = i.count(), o = n.progressiveEnabled && e.incrementalPrepareRender && a >= n.threshold, s = t.get("large") && a >= t.get("largeThreshold"), u = t.get("progressiveChunkMode") === "mod" ? a : null;
      t.pipelineContext = n.context = {
        progressiveRender: o,
        modDataCount: u,
        large: s
      };
    }, r.prototype.restorePipelines = function(t) {
      var e = this, n = e._pipelineMap = Q();
      t.eachSeries(function(i) {
        var a = i.getProgressive(), o = i.uid;
        n.set(o, {
          id: o,
          head: null,
          tail: null,
          threshold: i.getProgressiveThreshold(),
          progressiveEnabled: a && !(i.preventIncremental && i.preventIncremental()),
          blockIndex: -1,
          step: Math.round(a || 700),
          count: 0
        }), e._pipe(i, i.dataTask);
      });
    }, r.prototype.prepareStageTasks = function() {
      var t = this._stageTaskMap, e = this.api.getModel(), n = this.api;
      M(this._allHandlers, function(i) {
        var a = t.get(i.uid) || t.set(i.uid, {}), o = "";
        process.env.NODE_ENV !== "production" && (o = '"reset" and "overallReset" must not be both specified.'), J(!(i.reset && i.overallReset), o), i.reset && this._createSeriesStageTask(i, a, e, n), i.overallReset && this._createOverallStageTask(i, a, e, n);
      }, this);
    }, r.prototype.prepareView = function(t, e, n, i) {
      var a = t.renderTask, o = a.context;
      o.model = e, o.ecModel = n, o.api = i, a.__block = !t.incrementalPrepareRender, this._pipe(e, a);
    }, r.prototype.performDataProcessorTasks = function(t, e) {
      this._performStageTasks(this._dataProcessorHandlers, t, e, {
        block: !0
      });
    }, r.prototype.performVisualTasks = function(t, e, n) {
      this._performStageTasks(this._visualHandlers, t, e, n);
    }, r.prototype._performStageTasks = function(t, e, n, i) {
      i = i || {};
      var a = !1, o = this;
      M(t, function(u, l) {
        if (!(i.visualType && i.visualType !== u.visualType)) {
          var f = o._stageTaskMap.get(u.uid), h = f.seriesTaskMap, v = f.overallTask;
          if (v) {
            var c, d = v.agentStubMap;
            d.each(function(g) {
              s(i, g) && (g.dirty(), c = !0);
            }), c && v.dirty(), o.updatePayload(v, n);
            var p = o.getPerformArgs(v, i.block);
            d.each(function(g) {
              g.perform(p);
            }), v.perform(p) && (a = !0);
          } else h && h.each(function(g, y) {
            s(i, g) && g.dirty();
            var m = o.getPerformArgs(g, i.block);
            m.skip = !u.performRawSeries && e.isSeriesFiltered(g.context.model), o.updatePayload(g, n), g.perform(m) && (a = !0);
          });
        }
      });
      function s(u, l) {
        return u.setDirty && (!u.dirtyMap || u.dirtyMap.get(l.__pipeline.id));
      }
      this.unfinished = a || this.unfinished;
    }, r.prototype.performSeriesTasks = function(t) {
      var e;
      t.eachSeries(function(n) {
        e = n.dataTask.perform() || e;
      }), this.unfinished = e || this.unfinished;
    }, r.prototype.plan = function() {
      this._pipelineMap.each(function(t) {
        var e = t.tail;
        do {
          if (e.__block) {
            t.blockIndex = e.__idxInPipeline;
            break;
          }
          e = e.getUpstream();
        } while (e);
      });
    }, r.prototype.updatePayload = function(t, e) {
      e !== "remain" && (t.context.payload = e);
    }, r.prototype._createSeriesStageTask = function(t, e, n, i) {
      var a = this, o = e.seriesTaskMap, s = e.seriesTaskMap = Q(), u = t.seriesType, l = t.getTargetSeries;
      t.createOnAllSeries ? n.eachRawSeries(f) : u ? n.eachRawSeriesByType(u, f) : l && l(n, i).each(f);
      function f(h) {
        var v = h.uid, c = s.set(v, o && o.get(v) || ha({
          plan: jC,
          reset: KC,
          count: JC
        }));
        c.context = {
          model: h,
          ecModel: n,
          api: i,
          // PENDING: `useClearVisual` not used?
          useClearVisual: t.isVisual && !t.isLayout,
          plan: t.plan,
          reset: t.reset,
          scheduler: a
        }, a._pipe(h, c);
      }
    }, r.prototype._createOverallStageTask = function(t, e, n, i) {
      var a = this, o = e.overallTask = e.overallTask || ha({
        reset: XC
      });
      o.context = {
        ecModel: n,
        api: i,
        overallReset: t.overallReset,
        scheduler: a
      };
      var s = o.agentStubMap, u = o.agentStubMap = Q(), l = t.seriesType, f = t.getTargetSeries, h = !0, v = !1, c = "";
      process.env.NODE_ENV !== "production" && (c = '"createOnAllSeries" is not supported for "overallReset", because it will block all streams.'), J(!t.createOnAllSeries, c), l ? n.eachRawSeriesByType(l, d) : f ? f(n, i).each(d) : (h = !1, M(n.getSeries(), d));
      function d(p) {
        var g = p.uid, y = u.set(g, s && s.get(g) || // When the result of `getTargetSeries` changed, the overallTask
        // should be set as dirty and re-performed.
        (v = !0, ha({
          reset: qC,
          onDirty: ZC
        })));
        y.context = {
          model: p,
          overallProgress: h
          // FIXME:TS never used, so comment it
          // modifyOutputEnd: modifyOutputEnd
        }, y.agent = o, y.__block = h, a._pipe(p, y);
      }
      v && o.dirty();
    }, r.prototype._pipe = function(t, e) {
      var n = t.uid, i = this._pipelineMap.get(n);
      !i.head && (i.head = e), i.tail && i.tail.pipe(e), i.tail = e, e.__idxInPipeline = i.count++, e.__pipeline = i;
    }, r.wrapStageHandler = function(t, e) {
      return Z(t) && (t = {
        overallReset: t,
        seriesType: tD(t)
      }), t.uid = Js("stageHandler"), e && (t.visualType = e), t;
    }, r;
  })()
);
function XC(r) {
  r.overallReset(r.ecModel, r.api, r.payload);
}
function qC(r) {
  return r.overallProgress && $C;
}
function $C() {
  this.agent.dirty(), this.getDownstream().dirty();
}
function ZC() {
  this.agent && this.agent.dirty();
}
function jC(r) {
  return r.plan ? r.plan(r.model, r.ecModel, r.api, r.payload) : null;
}
function KC(r) {
  r.useClearVisual && r.data.clearAllVisual();
  var t = r.resetDefines = jt(r.reset(r.model, r.ecModel, r.api, r.payload));
  return t.length > 1 ? U(t, function(e, n) {
    return qm(n);
  }) : QC;
}
var QC = qm(0);
function qm(r) {
  return function(t, e) {
    var n = e.data, i = e.resetDefines[r];
    if (i && i.dataEach)
      for (var a = t.start; a < t.end; a++)
        i.dataEach(n, a);
    else i && i.progress && i.progress(t, n);
  };
}
function JC(r) {
  return r.data.count();
}
function tD(r) {
  xs = null;
  try {
    r(Ma, $m);
  } catch {
  }
  return xs;
}
var Ma = {}, $m = {}, xs;
Zm(Ma, Uh);
Zm($m, xm);
Ma.eachSeriesByType = Ma.eachRawSeriesByType = function(r) {
  xs = r;
};
Ma.eachComponent = function(r) {
  r.mainType === "series" && r.subType && (xs = r.subType);
};
function Zm(r, t) {
  for (var e in t.prototype)
    r[e] = $t;
}
var Gd = ["#37A2DA", "#32C5E9", "#67E0E3", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#E062AE", "#E690D1", "#e7bcf3", "#9d96f5", "#8378EA", "#96BFFF"];
const eD = {
  color: Gd,
  colorLayer: [["#37A2DA", "#ffd85c", "#fd7b5f"], ["#37A2DA", "#67E0E3", "#FFDB5C", "#ff9f7f", "#E062AE", "#9d96f5"], ["#37A2DA", "#32C5E9", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#e7bcf3", "#8378EA", "#96BFFF"], Gd]
};
var Ft = "#B9B8CE", Hd = "#100C2A", _o = function() {
  return {
    axisLine: {
      lineStyle: {
        color: Ft
      }
    },
    splitLine: {
      lineStyle: {
        color: "#484753"
      }
    },
    splitArea: {
      areaStyle: {
        color: ["rgba(255,255,255,0.02)", "rgba(255,255,255,0.05)"]
      }
    },
    minorSplitLine: {
      lineStyle: {
        color: "#20203B"
      }
    }
  };
}, Wd = ["#4992ff", "#7cffb2", "#fddd60", "#ff6e76", "#58d9f9", "#05c091", "#ff8a45", "#8d48e3", "#dd79ff"], jm = {
  darkMode: !0,
  color: Wd,
  backgroundColor: Hd,
  axisPointer: {
    lineStyle: {
      color: "#817f91"
    },
    crossStyle: {
      color: "#817f91"
    },
    label: {
      // TODO Contrast of label backgorundColor
      color: "#fff"
    }
  },
  legend: {
    textStyle: {
      color: Ft
    },
    pageTextStyle: {
      color: Ft
    }
  },
  textStyle: {
    color: Ft
  },
  title: {
    textStyle: {
      color: "#EEF1FA"
    },
    subtextStyle: {
      color: "#B9B8CE"
    }
  },
  toolbox: {
    iconStyle: {
      borderColor: Ft
    }
  },
  dataZoom: {
    borderColor: "#71708A",
    textStyle: {
      color: Ft
    },
    brushStyle: {
      color: "rgba(135,163,206,0.3)"
    },
    handleStyle: {
      color: "#353450",
      borderColor: "#C5CBE3"
    },
    moveHandleStyle: {
      color: "#B0B6C3",
      opacity: 0.3
    },
    fillerColor: "rgba(135,163,206,0.2)",
    emphasis: {
      handleStyle: {
        borderColor: "#91B7F2",
        color: "#4D587D"
      },
      moveHandleStyle: {
        color: "#636D9A",
        opacity: 0.7
      }
    },
    dataBackground: {
      lineStyle: {
        color: "#71708A",
        width: 1
      },
      areaStyle: {
        color: "#71708A"
      }
    },
    selectedDataBackground: {
      lineStyle: {
        color: "#87A3CE"
      },
      areaStyle: {
        color: "#87A3CE"
      }
    }
  },
  visualMap: {
    textStyle: {
      color: Ft
    }
  },
  timeline: {
    lineStyle: {
      color: Ft
    },
    label: {
      color: Ft
    },
    controlStyle: {
      color: Ft,
      borderColor: Ft
    }
  },
  calendar: {
    itemStyle: {
      color: Hd
    },
    dayLabel: {
      color: Ft
    },
    monthLabel: {
      color: Ft
    },
    yearLabel: {
      color: Ft
    }
  },
  timeAxis: _o(),
  logAxis: _o(),
  valueAxis: _o(),
  categoryAxis: _o(),
  line: {
    symbol: "circle"
  },
  graph: {
    color: Wd
  },
  gauge: {
    title: {
      color: Ft
    },
    axisLine: {
      lineStyle: {
        color: [[1, "rgba(207,212,219,0.2)"]]
      }
    },
    axisLabel: {
      color: Ft
    },
    detail: {
      color: "#EEF1FA"
    }
  },
  candlestick: {
    itemStyle: {
      color: "#f64e56",
      color0: "#54ea92",
      borderColor: "#f64e56",
      borderColor0: "#54ea92"
      // borderColor: '#ca2824',
      // borderColor0: '#09a443'
    }
  }
};
jm.categoryAxis.splitLine.show = !1;
var rD = (
  /** @class */
  (function() {
    function r() {
    }
    return r.prototype.normalizeQuery = function(t) {
      var e = {}, n = {}, i = {};
      if (W(t)) {
        var a = Xe(t);
        e.mainType = a.main || null, e.subType = a.sub || null;
      } else {
        var o = ["Index", "Name", "Id"], s = {
          name: 1,
          dataIndex: 1,
          dataType: 1
        };
        M(t, function(u, l) {
          for (var f = !1, h = 0; h < o.length; h++) {
            var v = o[h], c = l.lastIndexOf(v);
            if (c > 0 && c === l.length - v.length) {
              var d = l.slice(0, c);
              d !== "data" && (e.mainType = d, e[v.toLowerCase()] = u, f = !0);
            }
          }
          s.hasOwnProperty(l) && (n[l] = u, f = !0), f || (i[l] = u);
        });
      }
      return {
        cptQuery: e,
        dataQuery: n,
        otherQuery: i
      };
    }, r.prototype.filter = function(t, e) {
      var n = this.eventInfo;
      if (!n)
        return !0;
      var i = n.targetEl, a = n.packedEvent, o = n.model, s = n.view;
      if (!o || !s)
        return !0;
      var u = e.cptQuery, l = e.dataQuery;
      return f(u, o, "mainType") && f(u, o, "subType") && f(u, o, "index", "componentIndex") && f(u, o, "name") && f(u, o, "id") && f(l, a, "name") && f(l, a, "dataIndex") && f(l, a, "dataType") && (!s.filterForExposedEvent || s.filterForExposedEvent(t, e.otherQuery, i, a));
      function f(h, v, c, d) {
        return h[c] == null || v[d || c] === h[c];
      }
    }, r.prototype.afterTrigger = function() {
      this.eventInfo = null;
    }, r;
  })()
), Mf = ["symbol", "symbolSize", "symbolRotate", "symbolOffset"], Ud = Mf.concat(["symbolKeepAspect"]), nD = {
  createOnAllSeries: !0,
  // For legend.
  performRawSeries: !0,
  reset: function(r, t) {
    var e = r.getData();
    if (r.legendIcon && e.setVisual("legendIcon", r.legendIcon), !r.hasSymbolVisual)
      return;
    for (var n = {}, i = {}, a = !1, o = 0; o < Mf.length; o++) {
      var s = Mf[o], u = r.get(s);
      Z(u) ? (a = !0, i[s] = u) : n[s] = u;
    }
    if (n.symbol = n.symbol || r.defaultSymbol, e.setVisual(F({
      legendIcon: r.legendIcon || n.symbol,
      symbolKeepAspect: r.get("symbolKeepAspect")
    }, n)), t.isSeriesFiltered(r))
      return;
    var l = yt(i);
    function f(h, v) {
      for (var c = r.getRawValue(v), d = r.getDataParams(v), p = 0; p < l.length; p++) {
        var g = l[p];
        h.setItemVisual(v, g, i[g](c, d));
      }
    }
    return {
      dataEach: a ? f : null
    };
  }
}, iD = {
  createOnAllSeries: !0,
  // For legend.
  performRawSeries: !0,
  reset: function(r, t) {
    if (!r.hasSymbolVisual || t.isSeriesFiltered(r))
      return;
    var e = r.getData();
    function n(i, a) {
      for (var o = i.getItemModel(a), s = 0; s < Ud.length; s++) {
        var u = Ud[s], l = o.getShallow(u, !0);
        l != null && i.setItemVisual(a, u, l);
      }
    }
    return {
      dataEach: e.hasItemOption ? n : null
    };
  }
};
function aD(r, t, e) {
  switch (e) {
    case "color":
      var n = r.getItemVisual(t, "style");
      return n[r.getVisual("drawType")];
    case "opacity":
      return r.getItemVisual(t, "style").opacity;
    case "symbol":
    case "symbolSize":
    case "liftZ":
      return r.getItemVisual(t, e);
    default:
      process.env.NODE_ENV !== "production" && console.warn("Unknown visual type " + e);
  }
}
function oD(r, t) {
  switch (t) {
    case "color":
      var e = r.getVisual("style");
      return e[r.getVisual("drawType")];
    case "opacity":
      return r.getVisual("style").opacity;
    case "symbol":
    case "symbolSize":
    case "liftZ":
      return r.getVisual(t);
    default:
      process.env.NODE_ENV !== "production" && console.warn("Unknown visual type " + t);
  }
}
function sD(r, t) {
  function e(n, i) {
    var a = [];
    return n.eachComponent({
      mainType: "series",
      subType: r,
      query: i
    }, function(o) {
      a.push(o.seriesIndex);
    }), a;
  }
  M([[r + "ToggleSelect", "toggleSelect"], [r + "Select", "select"], [r + "UnSelect", "unselect"]], function(n) {
    t(n[0], function(i, a, o) {
      i = F({}, i), process.env.NODE_ENV !== "production" && At(i.type, n[1]), o.dispatchAction(F(i, {
        type: n[1],
        seriesIndex: e(a, i)
      }));
    });
  });
}
function qn(r, t, e, n, i) {
  var a = r + t;
  e.isSilent(a) || (process.env.NODE_ENV !== "production" && Ne("event " + a + " is deprecated."), n.eachComponent({
    mainType: "series",
    subType: "pie"
  }, function(o) {
    for (var s = o.seriesIndex, u = o.option.selectedMap, l = i.selected, f = 0; f < l.length; f++)
      if (l[f].seriesIndex === s) {
        var h = o.getData(), v = An(h, i.fromActionPayload);
        e.trigger(a, {
          type: a,
          seriesId: o.id,
          name: H(v) ? h.getName(v[0]) : h.getName(v),
          selected: W(u) ? u : F({}, u)
        });
      }
  }));
}
function uD(r, t, e) {
  r.on("selectchanged", function(n) {
    var i = e.getModel();
    n.isFromClick ? (qn("map", "selectchanged", t, i, n), qn("pie", "selectchanged", t, i, n)) : n.fromAction === "select" ? (qn("map", "selected", t, i, n), qn("pie", "selected", t, i, n)) : n.fromAction === "unselect" && (qn("map", "unselected", t, i, n), qn("pie", "unselected", t, i, n));
  });
}
function ea(r, t, e) {
  for (var n; r && !(t(r) && (n = r, e)); )
    r = r.__hostTarget || r.parent;
  return n;
}
var lD = Math.round(Math.random() * 9), fD = typeof Object.defineProperty == "function", hD = (function() {
  function r() {
    this._id = "__ec_inner_" + lD++;
  }
  return r.prototype.get = function(t) {
    return this._guard(t)[this._id];
  }, r.prototype.set = function(t, e) {
    var n = this._guard(t);
    return fD ? Object.defineProperty(n, this._id, {
      value: e,
      enumerable: !1,
      configurable: !0
    }) : n[this._id] = e, this;
  }, r.prototype.delete = function(t) {
    return this.has(t) ? (delete this._guard(t)[this._id], !0) : !1;
  }, r.prototype.has = function(t) {
    return !!this._guard(t)[this._id];
  }, r.prototype._guard = function(t) {
    if (t !== Object(t))
      throw TypeError("Value of WeakMap is not a non-null object.");
    return t;
  }, r;
})(), cD = ct.extend({
  type: "triangle",
  shape: {
    cx: 0,
    cy: 0,
    width: 0,
    height: 0
  },
  buildPath: function(r, t) {
    var e = t.cx, n = t.cy, i = t.width / 2, a = t.height / 2;
    r.moveTo(e, n - a), r.lineTo(e + i, n + a), r.lineTo(e - i, n + a), r.closePath();
  }
}), vD = ct.extend({
  type: "diamond",
  shape: {
    cx: 0,
    cy: 0,
    width: 0,
    height: 0
  },
  buildPath: function(r, t) {
    var e = t.cx, n = t.cy, i = t.width / 2, a = t.height / 2;
    r.moveTo(e, n - a), r.lineTo(e + i, n), r.lineTo(e, n + a), r.lineTo(e - i, n), r.closePath();
  }
}), dD = ct.extend({
  type: "pin",
  shape: {
    // x, y on the cusp
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  buildPath: function(r, t) {
    var e = t.x, n = t.y, i = t.width / 5 * 3, a = Math.max(i, t.height), o = i / 2, s = o * o / (a - o), u = n - a + o + s, l = Math.asin(s / o), f = Math.cos(l) * o, h = Math.sin(l), v = Math.cos(l), c = o * 0.6, d = o * 0.7;
    r.moveTo(e - f, u + s), r.arc(e, u, o, Math.PI - l, Math.PI * 2 + l), r.bezierCurveTo(e + f - h * c, u + s + v * c, e, n - d, e, n), r.bezierCurveTo(e, n - d, e - f + h * c, u + s + v * c, e - f, u + s), r.closePath();
  }
}), pD = ct.extend({
  type: "arrow",
  shape: {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  buildPath: function(r, t) {
    var e = t.height, n = t.width, i = t.x, a = t.y, o = n / 3 * 2;
    r.moveTo(i, a), r.lineTo(i + o, a + e), r.lineTo(i, a + e / 4 * 3), r.lineTo(i - o, a + e), r.lineTo(i, a), r.closePath();
  }
}), gD = {
  line: cr,
  rect: Tt,
  roundRect: Tt,
  square: Tt,
  circle: Ga,
  diamond: vD,
  pin: dD,
  arrow: pD,
  triangle: cD
}, yD = {
  line: function(r, t, e, n, i) {
    i.x1 = r, i.y1 = t + n / 2, i.x2 = r + e, i.y2 = t + n / 2;
  },
  rect: function(r, t, e, n, i) {
    i.x = r, i.y = t, i.width = e, i.height = n;
  },
  roundRect: function(r, t, e, n, i) {
    i.x = r, i.y = t, i.width = e, i.height = n, i.r = Math.min(e, n) / 4;
  },
  square: function(r, t, e, n, i) {
    var a = Math.min(e, n);
    i.x = r, i.y = t, i.width = a, i.height = a;
  },
  circle: function(r, t, e, n, i) {
    i.cx = r + e / 2, i.cy = t + n / 2, i.r = Math.min(e, n) / 2;
  },
  diamond: function(r, t, e, n, i) {
    i.cx = r + e / 2, i.cy = t + n / 2, i.width = e, i.height = n;
  },
  pin: function(r, t, e, n, i) {
    i.x = r + e / 2, i.y = t + n / 2, i.width = e, i.height = n;
  },
  arrow: function(r, t, e, n, i) {
    i.x = r + e / 2, i.y = t + n / 2, i.width = e, i.height = n;
  },
  triangle: function(r, t, e, n, i) {
    i.cx = r + e / 2, i.cy = t + n / 2, i.width = e, i.height = n;
  }
}, Ef = {};
M(gD, function(r, t) {
  Ef[t] = new r();
});
var mD = ct.extend({
  type: "symbol",
  shape: {
    symbolType: "",
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  calculateTextPosition: function(r, t, e) {
    var n = as(r, t, e), i = this.shape;
    return i && i.symbolType === "pin" && t.position === "inside" && (n.y = e.y + e.height * 0.4), n;
  },
  buildPath: function(r, t, e) {
    var n = t.symbolType;
    if (n !== "none") {
      var i = Ef[n];
      i || (n = "rect", i = Ef[n]), yD[n](t.x, t.y, t.width, t.height, i.shape), i.buildPath(r, i.shape, e);
    }
  }
});
function _D(r, t) {
  if (this.type !== "image") {
    var e = this.style;
    this.__isEmptyBrush ? (e.stroke = r, e.fill = t || "#fff", e.lineWidth = 2) : this.shape.symbolType === "line" ? e.stroke = r : e.fill = r, this.markRedraw();
  }
}
function In(r, t, e, n, i, a, o) {
  var s = r.indexOf("empty") === 0;
  s && (r = r.substr(5, 1).toLowerCase() + r.substr(6));
  var u;
  return r.indexOf("image://") === 0 ? u = Eh(r.slice(8), new st(t, e, n, i), o ? "center" : "cover") : r.indexOf("path://") === 0 ? u = qs(r.slice(7), {}, new st(t, e, n, i), o ? "center" : "cover") : u = new mD({
    shape: {
      symbolType: r,
      x: t,
      y: e,
      width: n,
      height: i
    }
  }), u.__isEmptyBrush = s, u.setColor = _D, a && u.setColor(a), u;
}
function SD(r) {
  return H(r) || (r = [+r, +r]), [r[0] || 0, r[1] || 0];
}
function Km(r, t) {
  if (r != null)
    return H(r) || (r = [r, r]), [_t(r[0], t[0]) || 0, _t(K(r[1], r[0]), t[1]) || 0];
}
function yn(r) {
  return isFinite(r);
}
function bD(r, t, e) {
  var n = t.x == null ? 0 : t.x, i = t.x2 == null ? 1 : t.x2, a = t.y == null ? 0 : t.y, o = t.y2 == null ? 0 : t.y2;
  t.global || (n = n * e.width + e.x, i = i * e.width + e.x, a = a * e.height + e.y, o = o * e.height + e.y), n = yn(n) ? n : 0, i = yn(i) ? i : 1, a = yn(a) ? a : 0, o = yn(o) ? o : 0;
  var s = r.createLinearGradient(n, a, i, o);
  return s;
}
function wD(r, t, e) {
  var n = e.width, i = e.height, a = Math.min(n, i), o = t.x == null ? 0.5 : t.x, s = t.y == null ? 0.5 : t.y, u = t.r == null ? 0.5 : t.r;
  t.global || (o = o * n + e.x, s = s * i + e.y, u = u * a), o = yn(o) ? o : 0.5, s = yn(s) ? s : 0.5, u = u >= 0 && yn(u) ? u : 0.5;
  var l = r.createRadialGradient(o, s, 0, o, s, u);
  return l;
}
function Pf(r, t, e) {
  for (var n = t.type === "radial" ? wD(r, t, e) : bD(r, t, e), i = t.colorStops, a = 0; a < i.length; a++)
    n.addColorStop(i[a].offset, i[a].color);
  return n;
}
function xD(r, t) {
  if (r === t || !r && !t)
    return !1;
  if (!r || !t || r.length !== t.length)
    return !0;
  for (var e = 0; e < r.length; e++)
    if (r[e] !== t[e])
      return !0;
  return !1;
}
function So(r) {
  return parseInt(r, 10);
}
function bo(r, t, e) {
  var n = ["width", "height"][t], i = ["clientWidth", "clientHeight"][t], a = ["paddingLeft", "paddingTop"][t], o = ["paddingRight", "paddingBottom"][t];
  if (e[n] != null && e[n] !== "auto")
    return parseFloat(e[n]);
  var s = document.defaultView.getComputedStyle(r);
  return (r[i] || So(s[n]) || So(r.style[n])) - (So(s[a]) || 0) - (So(s[o]) || 0) | 0;
}
function TD(r, t) {
  return !r || r === "solid" || !(t > 0) ? null : r === "dashed" ? [4 * t, 2 * t] : r === "dotted" ? [t] : dt(r) ? [r] : H(r) ? r : null;
}
function Qm(r) {
  var t = r.style, e = t.lineDash && t.lineWidth > 0 && TD(t.lineDash, t.lineWidth), n = t.lineDashOffset;
  if (e) {
    var i = t.strokeNoScale && r.getLineScale ? r.getLineScale() : 1;
    i && i !== 1 && (e = U(e, function(a) {
      return a / i;
    }), n /= i);
  }
  return [e, n];
}
var CD = new Mn(!0);
function Ts(r) {
  var t = r.stroke;
  return !(t == null || t === "none" || !(r.lineWidth > 0));
}
function Yd(r) {
  return typeof r == "string" && r !== "none";
}
function Cs(r) {
  var t = r.fill;
  return t != null && t !== "none";
}
function Xd(r, t) {
  if (t.fillOpacity != null && t.fillOpacity !== 1) {
    var e = r.globalAlpha;
    r.globalAlpha = t.fillOpacity * t.opacity, r.fill(), r.globalAlpha = e;
  } else
    r.fill();
}
function qd(r, t) {
  if (t.strokeOpacity != null && t.strokeOpacity !== 1) {
    var e = r.globalAlpha;
    r.globalAlpha = t.strokeOpacity * t.opacity, r.stroke(), r.globalAlpha = e;
  } else
    r.stroke();
}
function If(r, t, e) {
  var n = Sy(t.image, t.__image, e);
  if (Fs(n)) {
    var i = r.createPattern(n, t.repeat || "repeat");
    if (typeof DOMMatrix == "function" && i && i.setTransform) {
      var a = new DOMMatrix();
      a.translateSelf(t.x || 0, t.y || 0), a.rotateSelf(0, 0, (t.rotation || 0) * Bg), a.scaleSelf(t.scaleX || 1, t.scaleY || 1), i.setTransform(a);
    }
    return i;
  }
}
function DD(r, t, e, n) {
  var i, a = Ts(e), o = Cs(e), s = e.strokePercent, u = s < 1, l = !t.path;
  (!t.silent || u) && l && t.createPathProxy();
  var f = t.path || CD, h = t.__dirty;
  if (!n) {
    var v = e.fill, c = e.stroke, d = o && !!v.colorStops, p = a && !!c.colorStops, g = o && !!v.image, y = a && !!c.image, m = void 0, _ = void 0, S = void 0, w = void 0, b = void 0;
    (d || p) && (b = t.getBoundingRect()), d && (m = h ? Pf(r, v, b) : t.__canvasFillGradient, t.__canvasFillGradient = m), p && (_ = h ? Pf(r, c, b) : t.__canvasStrokeGradient, t.__canvasStrokeGradient = _), g && (S = h || !t.__canvasFillPattern ? If(r, v, t) : t.__canvasFillPattern, t.__canvasFillPattern = S), y && (w = h || !t.__canvasStrokePattern ? If(r, c, t) : t.__canvasStrokePattern, t.__canvasStrokePattern = S), d ? r.fillStyle = m : g && (S ? r.fillStyle = S : o = !1), p ? r.strokeStyle = _ : y && (w ? r.strokeStyle = w : a = !1);
  }
  var x = t.getGlobalScale();
  f.setScale(x[0], x[1], t.segmentIgnoreThreshold);
  var T, D;
  r.setLineDash && e.lineDash && (i = Qm(t), T = i[0], D = i[1]);
  var A = !0;
  (l || h & Qn) && (f.setDPR(r.dpr), u ? f.setContext(null) : (f.setContext(r), A = !1), f.reset(), t.buildPath(f, t.shape, n), f.toStatic(), t.pathUpdated()), A && f.rebuildPath(r, u ? s : 1), T && (r.setLineDash(T), r.lineDashOffset = D), n || (e.strokeFirst ? (a && qd(r, e), o && Xd(r, e)) : (o && Xd(r, e), a && qd(r, e))), T && r.setLineDash([]);
}
function AD(r, t, e) {
  var n = t.__image = Sy(e.image, t.__image, t, t.onload);
  if (!(!n || !Fs(n))) {
    var i = e.x || 0, a = e.y || 0, o = t.getWidth(), s = t.getHeight(), u = n.width / n.height;
    if (o == null && s != null ? o = s * u : s == null && o != null ? s = o / u : o == null && s == null && (o = n.width, s = n.height), e.sWidth && e.sHeight) {
      var l = e.sx || 0, f = e.sy || 0;
      r.drawImage(n, l, f, e.sWidth, e.sHeight, i, a, o, s);
    } else if (e.sx && e.sy) {
      var l = e.sx, f = e.sy, h = o - l, v = s - f;
      r.drawImage(n, l, f, h, v, i, a, o, s);
    } else
      r.drawImage(n, i, a, o, s);
  }
}
function MD(r, t, e) {
  var n, i = e.text;
  if (i != null && (i += ""), i) {
    r.font = e.font || Cn, r.textAlign = e.textAlign, r.textBaseline = e.textBaseline;
    var a = void 0, o = void 0;
    r.setLineDash && e.lineDash && (n = Qm(t), a = n[0], o = n[1]), a && (r.setLineDash(a), r.lineDashOffset = o), e.strokeFirst ? (Ts(e) && r.strokeText(i, e.x, e.y), Cs(e) && r.fillText(i, e.x, e.y)) : (Cs(e) && r.fillText(i, e.x, e.y), Ts(e) && r.strokeText(i, e.x, e.y)), a && r.setLineDash([]);
  }
}
var $d = ["shadowBlur", "shadowOffsetX", "shadowOffsetY"], Zd = [
  ["lineCap", "butt"],
  ["lineJoin", "miter"],
  ["miterLimit", 10]
];
function Jm(r, t, e, n, i) {
  var a = !1;
  if (!n && (e = e || {}, t === e))
    return !1;
  if (n || t.opacity !== e.opacity) {
    ne(r, i), a = !0;
    var o = Math.max(Math.min(t.opacity, 1), 0);
    r.globalAlpha = isNaN(o) ? bn.opacity : o;
  }
  (n || t.blend !== e.blend) && (a || (ne(r, i), a = !0), r.globalCompositeOperation = t.blend || bn.blend);
  for (var s = 0; s < $d.length; s++) {
    var u = $d[s];
    (n || t[u] !== e[u]) && (a || (ne(r, i), a = !0), r[u] = r.dpr * (t[u] || 0));
  }
  return (n || t.shadowColor !== e.shadowColor) && (a || (ne(r, i), a = !0), r.shadowColor = t.shadowColor || bn.shadowColor), a;
}
function jd(r, t, e, n, i) {
  var a = Ea(t, i.inHover), o = n ? null : e && Ea(e, i.inHover) || {};
  if (a === o)
    return !1;
  var s = Jm(r, a, o, n, i);
  if ((n || a.fill !== o.fill) && (s || (ne(r, i), s = !0), Yd(a.fill) && (r.fillStyle = a.fill)), (n || a.stroke !== o.stroke) && (s || (ne(r, i), s = !0), Yd(a.stroke) && (r.strokeStyle = a.stroke)), (n || a.opacity !== o.opacity) && (s || (ne(r, i), s = !0), r.globalAlpha = a.opacity == null ? 1 : a.opacity), t.hasStroke()) {
    var u = a.lineWidth, l = u / (a.strokeNoScale && t.getLineScale ? t.getLineScale() : 1);
    r.lineWidth !== l && (s || (ne(r, i), s = !0), r.lineWidth = l);
  }
  for (var f = 0; f < Zd.length; f++) {
    var h = Zd[f], v = h[0];
    (n || a[v] !== o[v]) && (s || (ne(r, i), s = !0), r[v] = a[v] || h[1]);
  }
  return s;
}
function ED(r, t, e, n, i) {
  return Jm(r, Ea(t, i.inHover), e && Ea(e, i.inHover), n, i);
}
function t0(r, t) {
  var e = t.transform, n = r.dpr || 1;
  e ? r.setTransform(n * e[0], n * e[1], n * e[2], n * e[3], n * e[4], n * e[5]) : r.setTransform(n, 0, 0, n, 0, 0);
}
function PD(r, t, e) {
  for (var n = !1, i = 0; i < r.length; i++) {
    var a = r[i];
    n = n || a.isZeroArea(), t0(t, a), t.beginPath(), a.buildPath(t, a.shape), t.clip();
  }
  e.allClipped = n;
}
function ID(r, t) {
  return r && t ? r[0] !== t[0] || r[1] !== t[1] || r[2] !== t[2] || r[3] !== t[3] || r[4] !== t[4] || r[5] !== t[5] : !(!r && !t);
}
var Kd = 1, Qd = 2, Jd = 3, tp = 4;
function LD(r) {
  var t = Cs(r), e = Ts(r);
  return !(r.lineDash || !(+t ^ +e) || t && typeof r.fill != "string" || e && typeof r.stroke != "string" || r.strokePercent < 1 || r.strokeOpacity < 1 || r.fillOpacity < 1);
}
function ne(r, t) {
  t.batchFill && r.fill(), t.batchStroke && r.stroke(), t.batchFill = "", t.batchStroke = "";
}
function Ea(r, t) {
  return t && r.__hoverStyle || r.style;
}
function Zh(r, t) {
  mn(r, t, { inHover: !1, viewWidth: 0, viewHeight: 0 }, !0);
}
function mn(r, t, e, n) {
  var i = t.transform;
  if (!t.shouldBePainted(e.viewWidth, e.viewHeight, !1, !1)) {
    t.__dirty &= ~ue, t.__isRendered = !1;
    return;
  }
  var a = t.__clipPaths, o = e.prevElClipPaths, s = !1, u = !1;
  if ((!o || xD(a, o)) && (o && o.length && (ne(r, e), r.restore(), u = s = !0, e.prevElClipPaths = null, e.allClipped = !1, e.prevEl = null), a && a.length && (ne(r, e), r.save(), PD(a, r, e), s = !0), e.prevElClipPaths = a), e.allClipped) {
    t.__isRendered = !1;
    return;
  }
  t.beforeBrush && t.beforeBrush(), t.innerBeforeBrush();
  var l = e.prevEl;
  l || (u = s = !0);
  var f = t instanceof ct && t.autoBatch && LD(t.style);
  s || ID(i, l.transform) ? (ne(r, e), t0(r, t)) : f || ne(r, e);
  var h = Ea(t, e.inHover);
  t instanceof ct ? (e.lastDrawType !== Kd && (u = !0, e.lastDrawType = Kd), jd(r, t, l, u, e), (!f || !e.batchFill && !e.batchStroke) && r.beginPath(), DD(r, t, h, f), f && (e.batchFill = h.fill || "", e.batchStroke = h.stroke || "")) : t instanceof ls ? (e.lastDrawType !== Jd && (u = !0, e.lastDrawType = Jd), jd(r, t, l, u, e), MD(r, t, h)) : t instanceof dr ? (e.lastDrawType !== Qd && (u = !0, e.lastDrawType = Qd), ED(r, t, l, u, e), AD(r, t, h)) : t.getTemporalDisplayables && (e.lastDrawType !== tp && (u = !0, e.lastDrawType = tp), OD(r, t, e)), f && n && ne(r, e), t.innerAfterBrush(), t.afterBrush && t.afterBrush(), e.prevEl = t, t.__dirty = 0, t.__isRendered = !0;
}
function OD(r, t, e) {
  var n = t.getDisplayables(), i = t.getTemporalDisplayables();
  r.save();
  var a = {
    prevElClipPaths: null,
    prevEl: null,
    allClipped: !1,
    viewWidth: e.viewWidth,
    viewHeight: e.viewHeight,
    inHover: e.inHover
  }, o, s;
  for (o = t.getCursor(), s = n.length; o < s; o++) {
    var u = n[o];
    u.beforeBrush && u.beforeBrush(), u.innerBeforeBrush(), mn(r, u, a, o === s - 1), u.innerAfterBrush(), u.afterBrush && u.afterBrush(), a.prevEl = u;
  }
  for (var l = 0, f = i.length; l < f; l++) {
    var u = i[l];
    u.beforeBrush && u.beforeBrush(), u.innerBeforeBrush(), mn(r, u, a, l === f - 1), u.innerAfterBrush(), u.afterBrush && u.afterBrush(), a.prevEl = u;
  }
  t.clearTemporalDisplayables(), t.notClear = !0, r.restore();
}
var vl = new hD(), ep = new ka(100), rp = ["symbol", "symbolSize", "symbolKeepAspect", "color", "backgroundColor", "dashArrayX", "dashArrayY", "maxTileWidth", "maxTileHeight"];
function Lf(r, t) {
  if (r === "none")
    return null;
  var e = t.getDevicePixelRatio(), n = t.getZr(), i = n.painter.type === "svg";
  r.dirty && vl.delete(r);
  var a = vl.get(r);
  if (a)
    return a;
  var o = ut(r, {
    symbol: "rect",
    symbolSize: 1,
    symbolKeepAspect: !0,
    color: "rgba(0, 0, 0, 0.2)",
    backgroundColor: null,
    dashArrayX: 5,
    dashArrayY: 5,
    rotation: 0,
    maxTileWidth: 512,
    maxTileHeight: 512
  });
  o.backgroundColor === "none" && (o.backgroundColor = null);
  var s = {
    repeat: "repeat"
  };
  return u(s), s.rotation = o.rotation, s.scaleX = s.scaleY = i ? 1 : 1 / e, vl.set(r, s), r.dirty = !1, s;
  function u(l) {
    for (var f = [e], h = !0, v = 0; v < rp.length; ++v) {
      var c = o[rp[v]];
      if (c != null && !H(c) && !W(c) && !dt(c) && typeof c != "boolean") {
        h = !1;
        break;
      }
      f.push(c);
    }
    var d;
    if (h) {
      d = f.join(",") + (i ? "-svg" : "");
      var p = ep.get(d);
      p && (i ? l.svgElement = p : l.image = p);
    }
    var g = r0(o.dashArrayX), y = RD(o.dashArrayY), m = e0(o.symbol), _ = ND(g), S = n0(y), w = !i && hr.createCanvas(), b = i && {
      tag: "g",
      attrs: {},
      key: "dcl",
      children: []
    }, x = D(), T;
    w && (w.width = x.width * e, w.height = x.height * e, T = w.getContext("2d")), A(), h && ep.put(d, w || b), l.image = w, l.svgElement = b, l.svgWidth = x.width, l.svgHeight = x.height;
    function D() {
      for (var C = 1, E = 0, P = _.length; E < P; ++E)
        C = vv(C, _[E]);
      for (var L = 1, E = 0, P = m.length; E < P; ++E)
        L = vv(L, m[E].length);
      C *= L;
      var O = S * _.length * m.length;
      if (process.env.NODE_ENV !== "production") {
        var R = function(G) {
          console.warn("Calculated decal size is greater than " + G + " due to decal option settings so " + G + " is used for the decal size. Please consider changing the decal option to make a smaller decal or set " + G + " to be larger to avoid incontinuity.");
        };
        C > o.maxTileWidth && R("maxTileWidth"), O > o.maxTileHeight && R("maxTileHeight");
      }
      return {
        width: Math.max(1, Math.min(C, o.maxTileWidth)),
        height: Math.max(1, Math.min(O, o.maxTileHeight))
      };
    }
    function A() {
      T && (T.clearRect(0, 0, w.width, w.height), o.backgroundColor && (T.fillStyle = o.backgroundColor, T.fillRect(0, 0, w.width, w.height)));
      for (var C = 0, E = 0; E < y.length; ++E)
        C += y[E];
      if (C <= 0)
        return;
      for (var P = -S, L = 0, O = 0, R = 0; P < x.height; ) {
        if (L % 2 === 0) {
          for (var G = O / 2 % m.length, N = 0, B = 0, I = 0; N < x.width * 2; ) {
            for (var k = 0, E = 0; E < g[R].length; ++E)
              k += g[R][E];
            if (k <= 0)
              break;
            if (B % 2 === 0) {
              var V = (1 - o.symbolSize) * 0.5, X = N + g[R][B] * V, tt = P + y[L] * V, et = g[R][B] * o.symbolSize, Et = y[L] * o.symbolSize, Nt = I / 2 % m[G].length;
              lt(X, tt, et, Et, m[G][Nt]);
            }
            N += g[R][B], ++I, ++B, B === g[R].length && (B = 0);
          }
          ++R, R === g.length && (R = 0);
        }
        P += y[L], ++O, ++L, L === y.length && (L = 0);
      }
      function lt(mt, pt, q, rt, Fe) {
        var Pt = i ? 1 : e, yr = In(Fe, mt * Pt, pt * Pt, q * Pt, rt * Pt, o.color, o.symbolKeepAspect);
        if (i) {
          var Qe = n.painter.renderOneToVNode(yr);
          Qe && b.children.push(Qe);
        } else
          Zh(T, yr);
      }
    }
  }
}
function e0(r) {
  if (!r || r.length === 0)
    return [["rect"]];
  if (W(r))
    return [[r]];
  for (var t = !0, e = 0; e < r.length; ++e)
    if (!W(r[e])) {
      t = !1;
      break;
    }
  if (t)
    return e0([r]);
  for (var n = [], e = 0; e < r.length; ++e)
    W(r[e]) ? n.push([r[e]]) : n.push(r[e]);
  return n;
}
function r0(r) {
  if (!r || r.length === 0)
    return [[0, 0]];
  if (dt(r)) {
    var t = Math.ceil(r);
    return [[t, t]];
  }
  for (var e = !0, n = 0; n < r.length; ++n)
    if (!dt(r[n])) {
      e = !1;
      break;
    }
  if (e)
    return r0([r]);
  for (var i = [], n = 0; n < r.length; ++n)
    if (dt(r[n])) {
      var t = Math.ceil(r[n]);
      i.push([t, t]);
    } else {
      var t = U(r[n], function(s) {
        return Math.ceil(s);
      });
      t.length % 2 === 1 ? i.push(t.concat(t)) : i.push(t);
    }
  return i;
}
function RD(r) {
  if (!r || typeof r == "object" && r.length === 0)
    return [0, 0];
  if (dt(r)) {
    var t = Math.ceil(r);
    return [t, t];
  }
  var e = U(r, function(n) {
    return Math.ceil(n);
  });
  return r.length % 2 ? e.concat(e) : e;
}
function ND(r) {
  return U(r, function(t) {
    return n0(t);
  });
}
function n0(r) {
  for (var t = 0, e = 0; e < r.length; ++e)
    t += r[e];
  return r.length % 2 === 1 ? t * 2 : t;
}
function kD(r, t) {
  r.eachRawSeries(function(e) {
    if (!r.isSeriesFiltered(e)) {
      var n = e.getData();
      n.hasItemVisual() && n.each(function(o) {
        var s = n.getItemVisual(o, "decal");
        if (s) {
          var u = n.ensureUniqueItemVisual(o, "style");
          u.decal = Lf(s, t);
        }
      });
      var i = n.getVisual("decal");
      if (i) {
        var a = n.getVisual("style");
        a.decal = Lf(i, t);
      }
    }
  });
}
var Ie = new Ze(), Ds = {};
function BD(r, t) {
  process.env.NODE_ENV !== "production" && Ds[r] && Ht("Already has an implementation of " + r + "."), Ds[r] = t;
}
function i0(r) {
  return process.env.NODE_ENV !== "production" && (Ds[r] || Ht("Implementation of " + r + " doesn't exists.")), Ds[r];
}
var FD = "5.6.0", VD = {
  zrender: "5.6.1"
}, zD = 1, GD = 800, HD = 900, WD = 1e3, UD = 2e3, YD = 5e3, a0 = 1e3, XD = 1100, jh = 2e3, o0 = 3e3, qD = 4e3, lu = 4500, $D = 4600, ZD = 5e3, jD = 6e3, s0 = 7e3, u0 = {
  PROCESSOR: {
    FILTER: WD,
    SERIES_FILTER: GD,
    STATISTIC: YD
  },
  VISUAL: {
    LAYOUT: a0,
    PROGRESSIVE_LAYOUT: XD,
    GLOBAL: jh,
    CHART: o0,
    POST_CHART_LAYOUT: $D,
    COMPONENT: qD,
    BRUSH: ZD,
    CHART_ITEM: lu,
    ARIA: jD,
    DECAL: s0
  }
}, Bt = "__flagInMainProcess", te = "__pendingUpdate", dl = "__needsUpdateStatus", np = /^[a-zA-Z0-9_]+$/, pl = "__connectUpdateStatus", ip = 0, KD = 1, QD = 2;
function l0(r) {
  return function() {
    for (var t = [], e = 0; e < arguments.length; e++)
      t[e] = arguments[e];
    if (this.isDisposed()) {
      se(this.id);
      return;
    }
    return h0(this, r, t);
  };
}
function f0(r) {
  return function() {
    for (var t = [], e = 0; e < arguments.length; e++)
      t[e] = arguments[e];
    return h0(this, r, t);
  };
}
function h0(r, t, e) {
  return e[0] = e[0] && e[0].toLowerCase(), Ze.prototype[t].apply(r, e);
}
var c0 = (
  /** @class */
  (function(r) {
    z(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t;
  })(Ze)
), v0 = c0.prototype;
v0.on = f0("on");
v0.off = f0("off");
var $n, gl, wo, br, yl, ml, _l, zi, Gi, ap, op, Sl, sp, xo, up, d0, ve, lp, As = (
  /** @class */
  (function(r) {
    z(t, r);
    function t(e, n, i) {
      var a = r.call(this, new rD()) || this;
      a._chartsViews = [], a._chartsMap = {}, a._componentsViews = [], a._componentsMap = {}, a._pendingActions = [], i = i || {}, W(n) && (n = p0[n]), a._dom = e;
      var o = "canvas", s = "auto", u = !1;
      if (process.env.NODE_ENV !== "production") {
        var l = (
          /* eslint-disable-next-line */
          $.hasGlobalWindow ? window : global
        );
        l && (o = K(l.__ECHARTS__DEFAULT__RENDERER__, o), s = K(l.__ECHARTS__DEFAULT__COARSE_POINTER, s), u = K(l.__ECHARTS__DEFAULT__USE_DIRTY_RECT__, u));
      }
      i.ssr && uy(function(c) {
        var d = at(c), p = d.dataIndex;
        if (p != null) {
          var g = Q();
          return g.set("series_index", d.seriesIndex), g.set("data_index", p), d.ssrType && g.set("ssr_type", d.ssrType), g;
        }
      });
      var f = a._zr = lf(e, {
        renderer: i.renderer || o,
        devicePixelRatio: i.devicePixelRatio,
        width: i.width,
        height: i.height,
        ssr: i.ssr,
        useDirtyRect: K(i.useDirtyRect, u),
        useCoarsePointer: K(i.useCoarsePointer, s),
        pointerSize: i.pointerSize
      });
      a._ssr = i.ssr, a._throttledZrFlush = uu(vt(f.flush, f), 17), n = nt(n), n && Cm(n, !0), a._theme = n, a._locale = aT(i.locale || um), a._coordSysMgr = new au();
      var h = a._api = up(a);
      function v(c, d) {
        return c.__prio - d.__prio;
      }
      return Bo(Es, v), Bo(Of, v), a._scheduler = new Xm(a, h, Of, Es), a._messageCenter = new c0(), a._initEvents(), a.resize = vt(a.resize, a), f.animation.on("frame", a._onframe, a), ap(f, a), op(f, a), Zo(a), a;
    }
    return t.prototype._onframe = function() {
      if (!this._disposed) {
        lp(this);
        var e = this._scheduler;
        if (this[te]) {
          var n = this[te].silent;
          this[Bt] = !0;
          try {
            $n(this), br.update.call(this, null, this[te].updateParams);
          } catch (u) {
            throw this[Bt] = !1, this[te] = null, u;
          }
          this._zr.flush(), this[Bt] = !1, this[te] = null, zi.call(this, n), Gi.call(this, n);
        } else if (e.unfinished) {
          var i = zD, a = this._model, o = this._api;
          e.unfinished = !1;
          do {
            var s = +/* @__PURE__ */ new Date();
            e.performSeriesTasks(a), e.performDataProcessorTasks(a), ml(this, a), e.performVisualTasks(a), xo(this, this._model, o, "remain", {}), i -= +/* @__PURE__ */ new Date() - s;
          } while (i > 0 && e.unfinished);
          e.unfinished || this._zr.flush();
        }
      }
    }, t.prototype.getDom = function() {
      return this._dom;
    }, t.prototype.getId = function() {
      return this.id;
    }, t.prototype.getZr = function() {
      return this._zr;
    }, t.prototype.isSSR = function() {
      return this._ssr;
    }, t.prototype.setOption = function(e, n, i) {
      if (this[Bt]) {
        process.env.NODE_ENV !== "production" && Ht("`setOption` should not be called during main process.");
        return;
      }
      if (this._disposed) {
        se(this.id);
        return;
      }
      var a, o, s;
      if (Y(n) && (i = n.lazyUpdate, a = n.silent, o = n.replaceMerge, s = n.transition, n = n.notMerge), this[Bt] = !0, !this._model || n) {
        var u = new kT(this._api), l = this._theme, f = this._model = new Uh();
        f.scheduler = this._scheduler, f.ssr = this._ssr, f.init(null, null, null, l, this._locale, u);
      }
      this._model.setOption(e, {
        replaceMerge: o
      }, Rf);
      var h = {
        seriesTransition: s,
        optionChanged: !0
      };
      if (i)
        this[te] = {
          silent: a,
          updateParams: h
        }, this[Bt] = !1, this.getZr().wakeUp();
      else {
        try {
          $n(this), br.update.call(this, null, h);
        } catch (v) {
          throw this[te] = null, this[Bt] = !1, v;
        }
        this._ssr || this._zr.flush(), this[te] = null, this[Bt] = !1, zi.call(this, a), Gi.call(this, a);
      }
    }, t.prototype.setTheme = function() {
      Ne("ECharts#setTheme() is DEPRECATED in ECharts 3.0");
    }, t.prototype.getModel = function() {
      return this._model;
    }, t.prototype.getOption = function() {
      return this._model && this._model.getOption();
    }, t.prototype.getWidth = function() {
      return this._zr.getWidth();
    }, t.prototype.getHeight = function() {
      return this._zr.getHeight();
    }, t.prototype.getDevicePixelRatio = function() {
      return this._zr.painter.dpr || $.hasGlobalWindow && window.devicePixelRatio || 1;
    }, t.prototype.getRenderedCanvas = function(e) {
      return process.env.NODE_ENV !== "production" && At("getRenderedCanvas", "renderToCanvas"), this.renderToCanvas(e);
    }, t.prototype.renderToCanvas = function(e) {
      e = e || {};
      var n = this._zr.painter;
      if (process.env.NODE_ENV !== "production" && n.type !== "canvas")
        throw new Error("renderToCanvas can only be used in the canvas renderer.");
      return n.getRenderedCanvas({
        backgroundColor: e.backgroundColor || this._model.get("backgroundColor"),
        pixelRatio: e.pixelRatio || this.getDevicePixelRatio()
      });
    }, t.prototype.renderToSVGString = function(e) {
      e = e || {};
      var n = this._zr.painter;
      if (process.env.NODE_ENV !== "production" && n.type !== "svg")
        throw new Error("renderToSVGString can only be used in the svg renderer.");
      return n.renderToString({
        useViewBox: e.useViewBox
      });
    }, t.prototype.getSvgDataURL = function() {
      if ($.svgSupported) {
        var e = this._zr, n = e.storage.getDisplayList();
        return M(n, function(i) {
          i.stopAnimation(null, !0);
        }), e.painter.toDataURL();
      }
    }, t.prototype.getDataURL = function(e) {
      if (this._disposed) {
        se(this.id);
        return;
      }
      e = e || {};
      var n = e.excludeComponents, i = this._model, a = [], o = this;
      M(n, function(u) {
        i.eachComponent({
          mainType: u
        }, function(l) {
          var f = o._componentsMap[l.__viewId];
          f.group.ignore || (a.push(f), f.group.ignore = !0);
        });
      });
      var s = this._zr.painter.getType() === "svg" ? this.getSvgDataURL() : this.renderToCanvas(e).toDataURL("image/" + (e && e.type || "png"));
      return M(a, function(u) {
        u.group.ignore = !1;
      }), s;
    }, t.prototype.getConnectedDataURL = function(e) {
      if (this._disposed) {
        se(this.id);
        return;
      }
      var n = e.type === "svg", i = this.group, a = Math.min, o = Math.max, s = 1 / 0;
      if (Ps[i]) {
        var u = s, l = s, f = -s, h = -s, v = [], c = e && e.pixelRatio || this.getDevicePixelRatio();
        M(xn, function(_, S) {
          if (_.group === i) {
            var w = n ? _.getZr().painter.getSvgDom().innerHTML : _.renderToCanvas(nt(e)), b = _.getDom().getBoundingClientRect();
            u = a(b.left, u), l = a(b.top, l), f = o(b.right, f), h = o(b.bottom, h), v.push({
              dom: w,
              left: b.left,
              top: b.top
            });
          }
        }), u *= c, l *= c, f *= c, h *= c;
        var d = f - u, p = h - l, g = hr.createCanvas(), y = lf(g, {
          renderer: n ? "svg" : "canvas"
        });
        if (y.resize({
          width: d,
          height: p
        }), n) {
          var m = "";
          return M(v, function(_) {
            var S = _.left - u, w = _.top - l;
            m += '<g transform="translate(' + S + "," + w + ')">' + _.dom + "</g>";
          }), y.painter.getSvgRoot().innerHTML = m, e.connectedBackgroundColor && y.painter.setBackgroundColor(e.connectedBackgroundColor), y.refreshImmediately(), y.painter.toDataURL();
        } else
          return e.connectedBackgroundColor && y.add(new Tt({
            shape: {
              x: 0,
              y: 0,
              width: d,
              height: p
            },
            style: {
              fill: e.connectedBackgroundColor
            }
          })), M(v, function(_) {
            var S = new dr({
              style: {
                x: _.left * c - u,
                y: _.top * c - l,
                image: _.dom
              }
            });
            y.add(S);
          }), y.refreshImmediately(), g.toDataURL("image/" + (e && e.type || "png"));
      } else
        return this.getDataURL(e);
    }, t.prototype.convertToPixel = function(e, n) {
      return yl(this, "convertToPixel", e, n);
    }, t.prototype.convertFromPixel = function(e, n) {
      return yl(this, "convertFromPixel", e, n);
    }, t.prototype.containPixel = function(e, n) {
      if (this._disposed) {
        se(this.id);
        return;
      }
      var i = this._model, a, o = Vu(i, e);
      return M(o, function(s, u) {
        u.indexOf("Models") >= 0 && M(s, function(l) {
          var f = l.coordinateSystem;
          if (f && f.containPoint)
            a = a || !!f.containPoint(n);
          else if (u === "seriesModels") {
            var h = this._chartsMap[l.__viewId];
            h && h.containPoint ? a = a || h.containPoint(n, l) : process.env.NODE_ENV !== "production" && zt(u + ": " + (h ? "The found component do not support containPoint." : "No view mapping to the found component."));
          } else
            process.env.NODE_ENV !== "production" && zt(u + ": containPoint is not supported");
        }, this);
      }, this), !!a;
    }, t.prototype.getVisual = function(e, n) {
      var i = this._model, a = Vu(i, e, {
        defaultMainType: "series"
      }), o = a.seriesModel;
      process.env.NODE_ENV !== "production" && (o || zt("There is no specified series model"));
      var s = o.getData(), u = a.hasOwnProperty("dataIndexInside") ? a.dataIndexInside : a.hasOwnProperty("dataIndex") ? s.indexOfRawIndex(a.dataIndex) : null;
      return u != null ? aD(s, u, n) : oD(s, n);
    }, t.prototype.getViewOfComponentModel = function(e) {
      return this._componentsMap[e.__viewId];
    }, t.prototype.getViewOfSeriesModel = function(e) {
      return this._chartsMap[e.__viewId];
    }, t.prototype._initEvents = function() {
      var e = this;
      M(JD, function(n) {
        var i = function(a) {
          var o = e.getModel(), s = a.target, u, l = n === "globalout";
          if (l ? u = {} : s && ea(s, function(d) {
            var p = at(d);
            if (p && p.dataIndex != null) {
              var g = p.dataModel || o.getSeriesByIndex(p.seriesIndex);
              return u = g && g.getDataParams(p.dataIndex, p.dataType, s) || {}, !0;
            } else if (p.eventData)
              return u = F({}, p.eventData), !0;
          }, !0), u) {
            var f = u.componentType, h = u.componentIndex;
            (f === "markLine" || f === "markPoint" || f === "markArea") && (f = "series", h = u.seriesIndex);
            var v = f && h != null && o.getComponent(f, h), c = v && e[v.mainType === "series" ? "_chartsMap" : "_componentsMap"][v.__viewId];
            process.env.NODE_ENV !== "production" && !l && !(v && c) && zt("model or view can not be found by params"), u.event = a, u.type = n, e._$eventProcessor.eventInfo = {
              targetEl: s,
              packedEvent: u,
              model: v,
              view: c
            }, e.trigger(n, u);
          }
        };
        i.zrEventfulCallAtLast = !0, e._zr.on(n, i, e);
      }), M(ca, function(n, i) {
        e._messageCenter.on(i, function(a) {
          this.trigger(i, a);
        }, e);
      }), M(["selectchanged"], function(n) {
        e._messageCenter.on(n, function(i) {
          this.trigger(n, i);
        }, e);
      }), uD(this._messageCenter, this, this._api);
    }, t.prototype.isDisposed = function() {
      return this._disposed;
    }, t.prototype.clear = function() {
      if (this._disposed) {
        se(this.id);
        return;
      }
      this.setOption({
        series: []
      }, !0);
    }, t.prototype.dispose = function() {
      if (this._disposed) {
        se(this.id);
        return;
      }
      this._disposed = !0;
      var e = this.getDom();
      e && yy(this.getDom(), Qh, "");
      var n = this, i = n._api, a = n._model;
      M(n._componentsViews, function(o) {
        o.dispose(a, i);
      }), M(n._chartsViews, function(o) {
        o.dispose(a, i);
      }), n._zr.dispose(), n._dom = n._model = n._chartsMap = n._componentsMap = n._chartsViews = n._componentsViews = n._scheduler = n._api = n._zr = n._throttledZrFlush = n._theme = n._coordSysMgr = n._messageCenter = null, delete xn[n.id];
    }, t.prototype.resize = function(e) {
      if (this[Bt]) {
        process.env.NODE_ENV !== "production" && Ht("`resize` should not be called during main process.");
        return;
      }
      if (this._disposed) {
        se(this.id);
        return;
      }
      this._zr.resize(e);
      var n = this._model;
      if (this._loadingFX && this._loadingFX.resize(), !!n) {
        var i = n.resetOption("media"), a = e && e.silent;
        this[te] && (a == null && (a = this[te].silent), i = !0, this[te] = null), this[Bt] = !0;
        try {
          i && $n(this), br.update.call(this, {
            type: "resize",
            animation: F({
              // Disable animation
              duration: 0
            }, e && e.animation)
          });
        } catch (o) {
          throw this[Bt] = !1, o;
        }
        this[Bt] = !1, zi.call(this, a), Gi.call(this, a);
      }
    }, t.prototype.showLoading = function(e, n) {
      if (this._disposed) {
        se(this.id);
        return;
      }
      if (Y(e) && (n = e, e = ""), e = e || "default", this.hideLoading(), !Nf[e]) {
        process.env.NODE_ENV !== "production" && zt("Loading effects " + e + " not exists.");
        return;
      }
      var i = Nf[e](this._api, n), a = this._zr;
      this._loadingFX = i, a.add(i);
    }, t.prototype.hideLoading = function() {
      if (this._disposed) {
        se(this.id);
        return;
      }
      this._loadingFX && this._zr.remove(this._loadingFX), this._loadingFX = null;
    }, t.prototype.makeActionFromEvent = function(e) {
      var n = F({}, e);
      return n.type = ca[e.type], n;
    }, t.prototype.dispatchAction = function(e, n) {
      if (this._disposed) {
        se(this.id);
        return;
      }
      if (Y(n) || (n = {
        silent: !!n
      }), !!Ms[e.type] && this._model) {
        if (this[Bt]) {
          this._pendingActions.push(e);
          return;
        }
        var i = n.silent;
        _l.call(this, e, i);
        var a = n.flush;
        a ? this._zr.flush() : a !== !1 && $.browser.weChat && this._throttledZrFlush(), zi.call(this, i), Gi.call(this, i);
      }
    }, t.prototype.updateLabelLayout = function() {
      Ie.trigger("series:layoutlabels", this._model, this._api, {
        // Not adding series labels.
        // TODO
        updatedSeries: []
      });
    }, t.prototype.appendData = function(e) {
      if (this._disposed) {
        se(this.id);
        return;
      }
      var n = e.seriesIndex, i = this.getModel(), a = i.getSeriesByIndex(n);
      process.env.NODE_ENV !== "production" && J(e.data && a), a.appendData(e), this._scheduler.unfinished = !0, this.getZr().wakeUp();
    }, t.internalField = (function() {
      $n = function(h) {
        var v = h._scheduler;
        v.restorePipelines(h._model), v.prepareStageTasks(), gl(h, !0), gl(h, !1), v.plan();
      }, gl = function(h, v) {
        for (var c = h._model, d = h._scheduler, p = v ? h._componentsViews : h._chartsViews, g = v ? h._componentsMap : h._chartsMap, y = h._zr, m = h._api, _ = 0; _ < p.length; _++)
          p[_].__alive = !1;
        v ? c.eachComponent(function(b, x) {
          b !== "series" && S(x);
        }) : c.eachSeries(S);
        function S(b) {
          var x = b.__requireNewView;
          b.__requireNewView = !1;
          var T = "_ec_" + b.id + "_" + b.type, D = !x && g[T];
          if (!D) {
            var A = Xe(b.type), C = v ? oe.getClass(A.main, A.sub) : (
              // FIXME:TS
              // (ChartView as ChartViewConstructor).getClass('series', classType.sub)
              // For backward compat, still support a chart type declared as only subType
              // like "liquidfill", but recommend "series.liquidfill"
              // But need a base class to make a type series.
              Kt.getClass(A.sub)
            );
            process.env.NODE_ENV !== "production" && J(C, A.sub + " does not exist."), D = new C(), D.init(c, m), g[T] = D, p.push(D), y.add(D.group);
          }
          b.__viewId = D.__id = T, D.__alive = !0, D.__model = b, D.group.__ecComponentInfo = {
            mainType: b.mainType,
            index: b.componentIndex
          }, !v && d.prepareView(D, b, c, m);
        }
        for (var _ = 0; _ < p.length; ) {
          var w = p[_];
          w.__alive ? _++ : (!v && w.renderTask.dispose(), y.remove(w.group), w.dispose(c, m), p.splice(_, 1), g[w.__id] === w && delete g[w.__id], w.__id = w.group.__ecComponentInfo = null);
        }
      }, wo = function(h, v, c, d, p) {
        var g = h._model;
        if (g.setUpdatePayload(c), !d) {
          M([].concat(h._componentsViews).concat(h._chartsViews), w);
          return;
        }
        var y = {};
        y[d + "Id"] = c[d + "Id"], y[d + "Index"] = c[d + "Index"], y[d + "Name"] = c[d + "Name"];
        var m = {
          mainType: d,
          query: y
        };
        p && (m.subType = p);
        var _ = c.excludeSeriesId, S;
        _ != null && (S = Q(), M(jt(_), function(b) {
          var x = qe(b, null);
          x != null && S.set(x, !0);
        })), g && g.eachComponent(m, function(b) {
          var x = S && S.get(b.id) != null;
          if (!x)
            if (Wv(c))
              if (b instanceof ae)
                c.type === wn && !c.notBlur && !b.get(["emphasis", "disabled"]) && Kw(b, c, h._api);
              else {
                var T = Ch(b.mainType, b.componentIndex, c.name, h._api), D = T.focusSelf, A = T.dispatchers;
                c.type === wn && D && !c.notBlur && gf(b.mainType, b.componentIndex, h._api), A && M(A, function(C) {
                  c.type === wn ? hs(C) : cs(C);
                });
              }
            else yf(c) && b instanceof ae && (tx(b, c, h._api), Gv(b), ve(h));
        }, h), g && g.eachComponent(m, function(b) {
          var x = S && S.get(b.id) != null;
          x || w(h[d === "series" ? "_chartsMap" : "_componentsMap"][b.__viewId]);
        }, h);
        function w(b) {
          b && b.__alive && b[v] && b[v](b.__model, g, h._api, c);
        }
      }, br = {
        prepareAndUpdate: function(h) {
          $n(this), br.update.call(this, h, {
            // Needs to mark option changed if newOption is given.
            // It's from MagicType.
            // TODO If use a separate flag optionChanged in payload?
            optionChanged: h.newOption != null
          });
        },
        update: function(h, v) {
          var c = this._model, d = this._api, p = this._zr, g = this._coordSysMgr, y = this._scheduler;
          if (c) {
            c.setUpdatePayload(h), y.restoreData(c, h), y.performSeriesTasks(c), g.create(c, d), y.performDataProcessorTasks(c, h), ml(this, c), g.update(c, d), e(c), y.performVisualTasks(c, h), Sl(this, c, d, h, v);
            var m = c.get("backgroundColor") || "transparent", _ = c.get("darkMode");
            p.setBackgroundColor(m), _ != null && _ !== "auto" && p.setDarkMode(_), Ie.trigger("afterupdate", c, d);
          }
        },
        updateTransform: function(h) {
          var v = this, c = this._model, d = this._api;
          if (c) {
            c.setUpdatePayload(h);
            var p = [];
            c.eachComponent(function(y, m) {
              if (y !== "series") {
                var _ = v.getViewOfComponentModel(m);
                if (_ && _.__alive)
                  if (_.updateTransform) {
                    var S = _.updateTransform(m, c, d, h);
                    S && S.update && p.push(_);
                  } else
                    p.push(_);
              }
            });
            var g = Q();
            c.eachSeries(function(y) {
              var m = v._chartsMap[y.__viewId];
              if (m.updateTransform) {
                var _ = m.updateTransform(y, c, d, h);
                _ && _.update && g.set(y.uid, 1);
              } else
                g.set(y.uid, 1);
            }), e(c), this._scheduler.performVisualTasks(c, h, {
              setDirty: !0,
              dirtyMap: g
            }), xo(this, c, d, h, {}, g), Ie.trigger("afterupdate", c, d);
          }
        },
        updateView: function(h) {
          var v = this._model;
          v && (v.setUpdatePayload(h), Kt.markUpdateMethod(h, "updateView"), e(v), this._scheduler.performVisualTasks(v, h, {
            setDirty: !0
          }), Sl(this, v, this._api, h, {}), Ie.trigger("afterupdate", v, this._api));
        },
        updateVisual: function(h) {
          var v = this, c = this._model;
          c && (c.setUpdatePayload(h), c.eachSeries(function(d) {
            d.getData().clearAllVisual();
          }), Kt.markUpdateMethod(h, "updateVisual"), e(c), this._scheduler.performVisualTasks(c, h, {
            visualType: "visual",
            setDirty: !0
          }), c.eachComponent(function(d, p) {
            if (d !== "series") {
              var g = v.getViewOfComponentModel(p);
              g && g.__alive && g.updateVisual(p, c, v._api, h);
            }
          }), c.eachSeries(function(d) {
            var p = v._chartsMap[d.__viewId];
            p.updateVisual(d, c, v._api, h);
          }), Ie.trigger("afterupdate", c, this._api));
        },
        updateLayout: function(h) {
          br.update.call(this, h);
        }
      }, yl = function(h, v, c, d) {
        if (h._disposed) {
          se(h.id);
          return;
        }
        for (var p = h._model, g = h._coordSysMgr.getCoordinateSystems(), y, m = Vu(p, c), _ = 0; _ < g.length; _++) {
          var S = g[_];
          if (S[v] && (y = S[v](p, m, d)) != null)
            return y;
        }
        process.env.NODE_ENV !== "production" && zt("No coordinate system that supports " + v + " found by the given finder.");
      }, ml = function(h, v) {
        var c = h._chartsMap, d = h._scheduler;
        v.eachSeries(function(p) {
          d.updateStreamModes(p, c[p.__viewId]);
        });
      }, _l = function(h, v) {
        var c = this, d = this.getModel(), p = h.type, g = h.escapeConnect, y = Ms[p], m = y.actionInfo, _ = (m.update || "update").split(":"), S = _.pop(), w = _[0] != null && Xe(_[0]);
        this[Bt] = !0;
        var b = [h], x = !1;
        h.batch && (x = !0, b = U(h.batch, function(L) {
          return L = ut(F({}, L), h), L.batch = null, L;
        }));
        var T = [], D, A = yf(h), C = Wv(h);
        if (C && Fy(this._api), M(b, function(L) {
          if (D = y.action(L, c._model, c._api), D = D || F({}, L), D.type = m.event || D.type, T.push(D), C) {
            var O = Sh(h), R = O.queryOptionMap, G = O.mainTypeSpecified, N = G ? R.keys()[0] : "series";
            wo(c, S, L, N), ve(c);
          } else A ? (wo(c, S, L, "series"), ve(c)) : w && wo(c, S, L, w.main, w.sub);
        }), S !== "none" && !C && !A && !w)
          try {
            this[te] ? ($n(this), br.update.call(this, h), this[te] = null) : br[S].call(this, h);
          } catch (L) {
            throw this[Bt] = !1, L;
          }
        if (x ? D = {
          type: m.event || p,
          escapeConnect: g,
          batch: T
        } : D = T[0], this[Bt] = !1, !v) {
          var E = this._messageCenter;
          if (E.trigger(D.type, D), A) {
            var P = {
              type: "selectchanged",
              escapeConnect: g,
              selected: ex(d),
              isFromClick: h.isFromClick || !1,
              fromAction: h.type,
              fromActionPayload: h
            };
            E.trigger(P.type, P);
          }
        }
      }, zi = function(h) {
        for (var v = this._pendingActions; v.length; ) {
          var c = v.shift();
          _l.call(this, c, h);
        }
      }, Gi = function(h) {
        !h && this.trigger("updated");
      }, ap = function(h, v) {
        h.on("rendered", function(c) {
          v.trigger("rendered", c), // Although zr is dirty if initial animation is not finished
          // and this checking is called on frame, we also check
          // animation finished for robustness.
          h.animation.isFinished() && !v[te] && !v._scheduler.unfinished && !v._pendingActions.length && v.trigger("finished");
        });
      }, op = function(h, v) {
        h.on("mouseover", function(c) {
          var d = c.target, p = ea(d, li);
          p && (Qw(p, c, v._api), ve(v));
        }).on("mouseout", function(c) {
          var d = c.target, p = ea(d, li);
          p && (Jw(p, c, v._api), ve(v));
        }).on("click", function(c) {
          var d = c.target, p = ea(d, function(m) {
            return at(m).dataIndex != null;
          }, !0);
          if (p) {
            var g = p.selected ? "unselect" : "select", y = at(p);
            v._api.dispatchAction({
              type: g,
              dataType: y.dataType,
              dataIndexInside: y.dataIndex,
              seriesIndex: y.seriesIndex,
              isFromClick: !0
            });
          }
        });
      };
      function e(h) {
        h.clearColorPalette(), h.eachSeries(function(v) {
          v.clearColorPalette();
        });
      }
      function n(h) {
        var v = [], c = [], d = !1;
        if (h.eachComponent(function(m, _) {
          var S = _.get("zlevel") || 0, w = _.get("z") || 0, b = _.getZLevelKey();
          d = d || !!b, (m === "series" ? c : v).push({
            zlevel: S,
            z: w,
            idx: _.componentIndex,
            type: m,
            key: b
          });
        }), d) {
          var p = v.concat(c), g, y;
          Bo(p, function(m, _) {
            return m.zlevel === _.zlevel ? m.z - _.z : m.zlevel - _.zlevel;
          }), M(p, function(m) {
            var _ = h.getComponent(m.type, m.idx), S = m.zlevel, w = m.key;
            g != null && (S = Math.max(g, S)), w ? (S === g && w !== y && S++, y = w) : y && (S === g && S++, y = ""), g = S, _.setZLevel(S);
          });
        }
      }
      Sl = function(h, v, c, d, p) {
        n(v), sp(h, v, c, d, p), M(h._chartsViews, function(g) {
          g.__alive = !1;
        }), xo(h, v, c, d, p), M(h._chartsViews, function(g) {
          g.__alive || g.remove(v, c);
        });
      }, sp = function(h, v, c, d, p, g) {
        M(g || h._componentsViews, function(y) {
          var m = y.__model;
          l(m, y), y.render(m, v, c, d), s(m, y), f(m, y);
        });
      }, xo = function(h, v, c, d, p, g) {
        var y = h._scheduler;
        p = F(p || {}, {
          updatedSeries: v.getSeries()
        }), Ie.trigger("series:beforeupdate", v, c, p);
        var m = !1;
        v.eachSeries(function(_) {
          var S = h._chartsMap[_.__viewId];
          S.__alive = !0;
          var w = S.renderTask;
          y.updatePayload(w, d), l(_, S), g && g.get(_.uid) && w.dirty(), w.perform(y.getPerformArgs(w)) && (m = !0), S.group.silent = !!_.get("silent"), o(_, S), Gv(_);
        }), y.unfinished = m || y.unfinished, Ie.trigger("series:layoutlabels", v, c, p), Ie.trigger("series:transition", v, c, p), v.eachSeries(function(_) {
          var S = h._chartsMap[_.__viewId];
          s(_, S), f(_, S);
        }), a(h, v), Ie.trigger("series:afterupdate", v, c, p);
      }, ve = function(h) {
        h[dl] = !0, h.getZr().wakeUp();
      }, lp = function(h) {
        h[dl] && (h.getZr().storage.traverse(function(v) {
          ua(v) || i(v);
        }), h[dl] = !1);
      };
      function i(h) {
        for (var v = [], c = h.currentStates, d = 0; d < c.length; d++) {
          var p = c[d];
          p === "emphasis" || p === "blur" || p === "select" || v.push(p);
        }
        h.selected && h.states.select && v.push("select"), h.hoverState === Gs && h.states.emphasis ? v.push("emphasis") : h.hoverState === zs && h.states.blur && v.push("blur"), h.useStates(v);
      }
      function a(h, v) {
        var c = h._zr, d = c.storage, p = 0;
        d.traverse(function(g) {
          g.isGroup || p++;
        }), p > v.get("hoverLayerThreshold") && !$.node && !$.worker && v.eachSeries(function(g) {
          if (!g.preventUsingHoverLayer) {
            var y = h._chartsMap[g.__viewId];
            y.__alive && y.eachRendered(function(m) {
              m.states.emphasis && (m.states.emphasis.hoverLayer = !0);
            });
          }
        });
      }
      function o(h, v) {
        var c = h.get("blendMode") || null;
        v.eachRendered(function(d) {
          d.isGroup || (d.style.blend = c);
        });
      }
      function s(h, v) {
        if (!h.preventAutoZ) {
          var c = h.get("z") || 0, d = h.get("zlevel") || 0;
          v.eachRendered(function(p) {
            return u(p, c, d, -1 / 0), !0;
          });
        }
      }
      function u(h, v, c, d) {
        var p = h.getTextContent(), g = h.getTextGuideLine(), y = h.isGroup;
        if (y)
          for (var m = h.childrenRef(), _ = 0; _ < m.length; _++)
            d = Math.max(u(m[_], v, c, d), d);
        else
          h.z = v, h.zlevel = c, d = Math.max(h.z2, d);
        if (p && (p.z = v, p.zlevel = c, isFinite(d) && (p.z2 = d + 2)), g) {
          var S = h.textGuideLineConfig;
          g.z = v, g.zlevel = c, isFinite(d) && (g.z2 = d + (S && S.showAbove ? 1 : -1));
        }
        return d;
      }
      function l(h, v) {
        v.eachRendered(function(c) {
          if (!ua(c)) {
            var d = c.getTextContent(), p = c.getTextGuideLine();
            c.stateTransition && (c.stateTransition = null), d && d.stateTransition && (d.stateTransition = null), p && p.stateTransition && (p.stateTransition = null), c.hasState() ? (c.prevStates = c.currentStates, c.clearStates()) : c.prevStates && (c.prevStates = null);
          }
        });
      }
      function f(h, v) {
        var c = h.getModel("stateAnimation"), d = h.isAnimationEnabled(), p = c.get("duration"), g = p > 0 ? {
          duration: p,
          delay: c.get("delay"),
          easing: c.get("easing")
          // additive: stateAnimationModel.get('additive')
        } : null;
        v.eachRendered(function(y) {
          if (y.states && y.states.emphasis) {
            if (ua(y))
              return;
            if (y instanceof ct && ox(y), y.__dirty) {
              var m = y.prevStates;
              m && y.useStates(m);
            }
            if (d) {
              y.stateTransition = g;
              var _ = y.getTextContent(), S = y.getTextGuideLine();
              _ && (_.stateTransition = g), S && (S.stateTransition = g);
            }
            y.__dirty && i(y);
          }
        });
      }
      up = function(h) {
        return new /** @class */
        ((function(v) {
          z(c, v);
          function c() {
            return v !== null && v.apply(this, arguments) || this;
          }
          return c.prototype.getCoordinateSystems = function() {
            return h._coordSysMgr.getCoordinateSystems();
          }, c.prototype.getComponentByElement = function(d) {
            for (; d; ) {
              var p = d.__ecComponentInfo;
              if (p != null)
                return h._model.getComponent(p.mainType, p.index);
              d = d.parent;
            }
          }, c.prototype.enterEmphasis = function(d, p) {
            hs(d, p), ve(h);
          }, c.prototype.leaveEmphasis = function(d, p) {
            cs(d, p), ve(h);
          }, c.prototype.enterBlur = function(d) {
            jw(d), ve(h);
          }, c.prototype.leaveBlur = function(d) {
            Ry(d), ve(h);
          }, c.prototype.enterSelect = function(d) {
            Ny(d), ve(h);
          }, c.prototype.leaveSelect = function(d) {
            ky(d), ve(h);
          }, c.prototype.getModel = function() {
            return h.getModel();
          }, c.prototype.getViewOfComponentModel = function(d) {
            return h.getViewOfComponentModel(d);
          }, c.prototype.getViewOfSeriesModel = function(d) {
            return h.getViewOfSeriesModel(d);
          }, c;
        })(xm))(h);
      }, d0 = function(h) {
        function v(c, d) {
          for (var p = 0; p < c.length; p++) {
            var g = c[p];
            g[pl] = d;
          }
        }
        M(ca, function(c, d) {
          h._messageCenter.on(d, function(p) {
            if (Ps[h.group] && h[pl] !== ip) {
              if (p && p.escapeConnect)
                return;
              var g = h.makeActionFromEvent(p), y = [];
              M(xn, function(m) {
                m !== h && m.group === h.group && y.push(m);
              }), v(y, ip), M(y, function(m) {
                m[pl] !== KD && m.dispatchAction(g);
              }), v(y, QD);
            }
          });
        });
      };
    })(), t;
  })(Ze)
), Kh = As.prototype;
Kh.on = l0("on");
Kh.off = l0("off");
Kh.one = function(r, t, e) {
  var n = this;
  Ne("ECharts#one is deprecated.");
  function i() {
    for (var a = [], o = 0; o < arguments.length; o++)
      a[o] = arguments[o];
    t && t.apply && t.apply(this, a), n.off(r, i);
  }
  this.on.call(this, r, i, e);
};
var JD = ["click", "dblclick", "mouseover", "mouseout", "mousemove", "mousedown", "mouseup", "globalout", "contextmenu"];
function se(r) {
  process.env.NODE_ENV !== "production" && zt("Instance " + r + " has been disposed");
}
var Ms = {}, ca = {}, Of = [], Rf = [], Es = [], p0 = {}, Nf = {}, xn = {}, Ps = {}, tA = +/* @__PURE__ */ new Date() - 0, eA = +/* @__PURE__ */ new Date() - 0, Qh = "_echarts_instance_";
function rA(r, t, e) {
  var n = !(e && e.ssr);
  if (n) {
    if (process.env.NODE_ENV !== "production" && !r)
      throw new Error("Initialize failed: invalid dom.");
    var i = Jh(r);
    if (i)
      return process.env.NODE_ENV !== "production" && zt("There is a chart instance already initialized on the dom."), i;
    process.env.NODE_ENV !== "production" && Dn(r) && r.nodeName.toUpperCase() !== "CANVAS" && (!r.clientWidth && (!e || e.width == null) || !r.clientHeight && (!e || e.height == null)) && zt("Can't get DOM width or height. Please check dom.clientWidth and dom.clientHeight. They should not be 0.For example, you may need to call this in the callback of window.onload.");
  }
  var a = new As(r, t, e);
  return a.id = "ec_" + tA++, xn[a.id] = a, n && yy(r, Qh, a.id), d0(a), Ie.trigger("afterinit", a), a;
}
function nA(r) {
  if (H(r)) {
    var t = r;
    r = null, M(t, function(e) {
      e.group != null && (r = e.group);
    }), r = r || "g_" + eA++, M(t, function(e) {
      e.group = r;
    });
  }
  return Ps[r] = !0, r;
}
function g0(r) {
  Ps[r] = !1;
}
var iA = g0;
function aA(r) {
  W(r) ? r = xn[r] : r instanceof As || (r = Jh(r)), r instanceof As && !r.isDisposed() && r.dispose();
}
function Jh(r) {
  return xn[zb(r, Qh)];
}
function oA(r) {
  return xn[r];
}
function tc(r, t) {
  p0[r] = t;
}
function ec(r) {
  ht(Rf, r) < 0 && Rf.push(r);
}
function rc(r, t) {
  nc(Of, r, t, UD);
}
function y0(r) {
  fu("afterinit", r);
}
function m0(r) {
  fu("afterupdate", r);
}
function fu(r, t) {
  Ie.on(r, t);
}
function Rn(r, t, e) {
  Z(t) && (e = t, t = "");
  var n = Y(r) ? r.type : [r, r = {
    event: t
  }][0];
  r.event = (r.event || n).toLowerCase(), t = r.event, !ca[t] && (J(np.test(n) && np.test(t)), Ms[n] || (Ms[n] = {
    action: e,
    actionInfo: r
  }), ca[t] = n);
}
function _0(r, t) {
  au.register(r, t);
}
function sA(r) {
  var t = au.get(r);
  if (t)
    return t.getDimensionsInfo ? t.getDimensionsInfo() : t.dimensions.slice();
}
function S0(r, t) {
  nc(Es, r, t, a0, "layout");
}
function Yr(r, t) {
  nc(Es, r, t, o0, "visual");
}
var fp = [];
function nc(r, t, e, n, i) {
  if ((Z(t) || Y(t)) && (e = t, t = n), process.env.NODE_ENV !== "production") {
    if (isNaN(t) || t == null)
      throw new Error("Illegal priority");
    M(r, function(o) {
      J(o.__raw !== e);
    });
  }
  if (!(ht(fp, e) >= 0)) {
    fp.push(e);
    var a = Xm.wrapStageHandler(e, i);
    a.__prio = t, a.__raw = e, r.push(a);
  }
}
function ic(r, t) {
  Nf[r] = t;
}
function uA(r) {
  process.env.NODE_ENV !== "production" && Ne("setCanvasCreator is deprecated. Use setPlatformAPI({ createCanvas }) instead."), Mg({
    createCanvas: r
  });
}
function b0(r, t, e) {
  var n = i0("registerMap");
  n && n(r, t, e);
}
function lA(r) {
  var t = i0("getMap");
  return t && t(r);
}
var w0 = cC;
Yr(jh, HC);
Yr(lu, WC);
Yr(lu, UC);
Yr(jh, nD);
Yr(lu, iD);
Yr(s0, kD);
ec(Cm);
rc(HD, $T);
ic("default", YC);
Rn({
  type: wn,
  event: wn,
  update: wn
}, $t);
Rn({
  type: Ho,
  event: Ho,
  update: Ho
}, $t);
Rn({
  type: aa,
  event: aa,
  update: aa
}, $t);
Rn({
  type: Wo,
  event: Wo,
  update: Wo
}, $t);
Rn({
  type: oa,
  event: oa,
  update: oa
}, $t);
tc("light", eD);
tc("dark", jm);
var fA = {};
function Hi(r) {
  return r == null ? 0 : r.length || 1;
}
function hp(r) {
  return r;
}
var hA = (
  /** @class */
  (function() {
    function r(t, e, n, i, a, o) {
      this._old = t, this._new = e, this._oldKeyGetter = n || hp, this._newKeyGetter = i || hp, this.context = a, this._diffModeMultiple = o === "multiple";
    }
    return r.prototype.add = function(t) {
      return this._add = t, this;
    }, r.prototype.update = function(t) {
      return this._update = t, this;
    }, r.prototype.updateManyToOne = function(t) {
      return this._updateManyToOne = t, this;
    }, r.prototype.updateOneToMany = function(t) {
      return this._updateOneToMany = t, this;
    }, r.prototype.updateManyToMany = function(t) {
      return this._updateManyToMany = t, this;
    }, r.prototype.remove = function(t) {
      return this._remove = t, this;
    }, r.prototype.execute = function() {
      this[this._diffModeMultiple ? "_executeMultiple" : "_executeOneToOne"]();
    }, r.prototype._executeOneToOne = function() {
      var t = this._old, e = this._new, n = {}, i = new Array(t.length), a = new Array(e.length);
      this._initIndexMap(t, null, i, "_oldKeyGetter"), this._initIndexMap(e, n, a, "_newKeyGetter");
      for (var o = 0; o < t.length; o++) {
        var s = i[o], u = n[s], l = Hi(u);
        if (l > 1) {
          var f = u.shift();
          u.length === 1 && (n[s] = u[0]), this._update && this._update(f, o);
        } else l === 1 ? (n[s] = null, this._update && this._update(u, o)) : this._remove && this._remove(o);
      }
      this._performRestAdd(a, n);
    }, r.prototype._executeMultiple = function() {
      var t = this._old, e = this._new, n = {}, i = {}, a = [], o = [];
      this._initIndexMap(t, n, a, "_oldKeyGetter"), this._initIndexMap(e, i, o, "_newKeyGetter");
      for (var s = 0; s < a.length; s++) {
        var u = a[s], l = n[u], f = i[u], h = Hi(l), v = Hi(f);
        if (h > 1 && v === 1)
          this._updateManyToOne && this._updateManyToOne(f, l), i[u] = null;
        else if (h === 1 && v > 1)
          this._updateOneToMany && this._updateOneToMany(f, l), i[u] = null;
        else if (h === 1 && v === 1)
          this._update && this._update(f, l), i[u] = null;
        else if (h > 1 && v > 1)
          this._updateManyToMany && this._updateManyToMany(f, l), i[u] = null;
        else if (h > 1)
          for (var c = 0; c < h; c++)
            this._remove && this._remove(l[c]);
        else
          this._remove && this._remove(l);
      }
      this._performRestAdd(o, i);
    }, r.prototype._performRestAdd = function(t, e) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n], a = e[i], o = Hi(a);
        if (o > 1)
          for (var s = 0; s < o; s++)
            this._add && this._add(a[s]);
        else o === 1 && this._add && this._add(a);
        e[i] = null;
      }
    }, r.prototype._initIndexMap = function(t, e, n, i) {
      for (var a = this._diffModeMultiple, o = 0; o < t.length; o++) {
        var s = "_ec_" + this[i](t[o], o);
        if (a || (n[o] = s), !!e) {
          var u = e[s], l = Hi(u);
          l === 0 ? (e[s] = o, a && n.push(s)) : l === 1 ? e[s] = [u, o] : u.push(o);
        }
      }
    }, r;
  })()
), cA = (
  /** @class */
  (function() {
    function r(t, e) {
      this._encode = t, this._schema = e;
    }
    return r.prototype.get = function() {
      return {
        // Do not generate full dimension name until fist used.
        fullDimensions: this._getFullDimensionNames(),
        encode: this._encode
      };
    }, r.prototype._getFullDimensionNames = function() {
      return this._cachedDimNames || (this._cachedDimNames = this._schema ? this._schema.makeOutputDimensionNames() : []), this._cachedDimNames;
    }, r;
  })()
);
function vA(r, t) {
  var e = {}, n = e.encode = {}, i = Q(), a = [], o = [], s = {};
  M(r.dimensions, function(v) {
    var c = r.getDimensionInfo(v), d = c.coordDim;
    if (d) {
      process.env.NODE_ENV !== "production" && J(bf.get(d) == null);
      var p = c.coordDimIndex;
      bl(n, d)[p] = v, c.isExtraCoord || (i.set(d, 1), pA(c.type) && (a[0] = v), bl(s, d)[p] = r.getDimensionIndex(c.name)), c.defaultTooltip && o.push(v);
    }
    bf.each(function(g, y) {
      var m = bl(n, y), _ = c.otherDims[y];
      _ != null && _ !== !1 && (m[_] = c.name);
    });
  });
  var u = [], l = {};
  i.each(function(v, c) {
    var d = n[c];
    l[c] = d[0], u = u.concat(d);
  }), e.dataDimsOnCoord = u, e.dataDimIndicesOnCoord = U(u, function(v) {
    return r.getDimensionInfo(v).storeDimIndex;
  }), e.encodeFirstDimNotExtra = l;
  var f = n.label;
  f && f.length && (a = f.slice());
  var h = n.tooltip;
  return h && h.length ? o = h.slice() : o.length || (o = a.slice()), n.defaultedLabel = a, n.defaultedTooltip = o, e.userOutput = new cA(s, t), e;
}
function bl(r, t) {
  return r.hasOwnProperty(t) || (r[t] = []), r[t];
}
function dA(r) {
  return r === "category" ? "ordinal" : r === "time" ? "time" : "float";
}
function pA(r) {
  return !(r === "ordinal" || r === "time");
}
var qo = (
  /** @class */
  /* @__PURE__ */ (function() {
    function r(t) {
      this.otherDims = {}, t != null && F(this, t);
    }
    return r;
  })()
), gA = Ct(), yA = {
  float: "f",
  int: "i",
  ordinal: "o",
  number: "n",
  time: "t"
}, x0 = (
  /** @class */
  (function() {
    function r(t) {
      this.dimensions = t.dimensions, this._dimOmitted = t.dimensionOmitted, this.source = t.source, this._fullDimCount = t.fullDimensionCount, this._updateDimOmitted(t.dimensionOmitted);
    }
    return r.prototype.isDimensionOmitted = function() {
      return this._dimOmitted;
    }, r.prototype._updateDimOmitted = function(t) {
      this._dimOmitted = t, t && (this._dimNameMap || (this._dimNameMap = D0(this.source)));
    }, r.prototype.getSourceDimensionIndex = function(t) {
      return K(this._dimNameMap.get(t), -1);
    }, r.prototype.getSourceDimension = function(t) {
      var e = this.source.dimensionsDefine;
      if (e)
        return e[t];
    }, r.prototype.makeStoreSchema = function() {
      for (var t = this._fullDimCount, e = Mm(this.source), n = !A0(t), i = "", a = [], o = 0, s = 0; o < t; o++) {
        var u = void 0, l = void 0, f = void 0, h = this.dimensions[s];
        if (h && h.storeDimIndex === o)
          u = e ? h.name : null, l = h.type, f = h.ordinalMeta, s++;
        else {
          var v = this.getSourceDimension(o);
          v && (u = e ? v.name : null, l = v.type);
        }
        a.push({
          property: u,
          type: l,
          ordinalMeta: f
        }), e && u != null && (!h || !h.isCalculationCoord) && (i += n ? u.replace(/\`/g, "`1").replace(/\$/g, "`2") : u), i += "$", i += yA[l] || "f", f && (i += f.uid), i += "$";
      }
      var c = this.source, d = [c.seriesLayoutBy, c.startIndex, i].join("$$");
      return {
        dimensions: a,
        hash: d
      };
    }, r.prototype.makeOutputDimensionNames = function() {
      for (var t = [], e = 0, n = 0; e < this._fullDimCount; e++) {
        var i = void 0, a = this.dimensions[n];
        if (a && a.storeDimIndex === e)
          a.isCalculationCoord || (i = a.name), n++;
        else {
          var o = this.getSourceDimension(e);
          o && (i = o.name);
        }
        t.push(i);
      }
      return t;
    }, r.prototype.appendCalculationDimension = function(t) {
      this.dimensions.push(t), t.isCalculationCoord = !0, this._fullDimCount++, this._updateDimOmitted(!0);
    }, r;
  })()
);
function T0(r) {
  return r instanceof x0;
}
function C0(r) {
  for (var t = Q(), e = 0; e < (r || []).length; e++) {
    var n = r[e], i = Y(n) ? n.name : n;
    i != null && t.get(i) == null && t.set(i, e);
  }
  return t;
}
function D0(r) {
  var t = gA(r);
  return t.dimNameMap || (t.dimNameMap = C0(r.dimensionsDefine));
}
function A0(r) {
  return r > 30;
}
var Wi = Y, wr = U, mA = typeof Int32Array > "u" ? Array : Int32Array, _A = "e\0\0", cp = -1, SA = ["hasItemOption", "_nameList", "_idList", "_invertedIndicesMap", "_dimSummary", "userOutput", "_rawData", "_dimValueGetter", "_nameDimIdx", "_idDimIdx", "_nameRepeatCount"], bA = ["_approximateExtent"], vp, To, Ui, Zn, wl, Yi, xl, ac = (
  /** @class */
  (function() {
    function r(t, e) {
      this.type = "list", this._dimOmitted = !1, this._nameList = [], this._idList = [], this._visual = {}, this._layout = {}, this._itemVisuals = [], this._itemLayouts = [], this._graphicEls = [], this._approximateExtent = {}, this._calculationInfo = {}, this.hasItemOption = !1, this.TRANSFERABLE_METHODS = ["cloneShallow", "downSample", "minmaxDownSample", "lttbDownSample", "map"], this.CHANGABLE_METHODS = ["filterSelf", "selectRange"], this.DOWNSAMPLE_METHODS = ["downSample", "minmaxDownSample", "lttbDownSample"];
      var n, i = !1;
      T0(t) ? (n = t.dimensions, this._dimOmitted = t.isDimensionOmitted(), this._schema = t) : (i = !0, n = t), n = n || ["x", "y"];
      for (var a = {}, o = [], s = {}, u = !1, l = {}, f = 0; f < n.length; f++) {
        var h = n[f], v = W(h) ? new qo({
          name: h
        }) : h instanceof qo ? h : new qo(h), c = v.name;
        v.type = v.type || "float", v.coordDim || (v.coordDim = c, v.coordDimIndex = 0);
        var d = v.otherDims = v.otherDims || {};
        o.push(c), a[c] = v, l[c] != null && (u = !0), v.createInvertedIndices && (s[c] = []), d.itemName === 0 && (this._nameDimIdx = f), d.itemId === 0 && (this._idDimIdx = f), process.env.NODE_ENV !== "production" && J(i || v.storeDimIndex >= 0), i && (v.storeDimIndex = f);
      }
      if (this.dimensions = o, this._dimInfos = a, this._initGetDimensionInfo(u), this.hostModel = e, this._invertedIndicesMap = s, this._dimOmitted) {
        var p = this._dimIdxToName = Q();
        M(o, function(g) {
          p.set(a[g].storeDimIndex, g);
        });
      }
    }
    return r.prototype.getDimension = function(t) {
      var e = this._recognizeDimIndex(t);
      if (e == null)
        return t;
      if (e = t, !this._dimOmitted)
        return this.dimensions[e];
      var n = this._dimIdxToName.get(e);
      if (n != null)
        return n;
      var i = this._schema.getSourceDimension(e);
      if (i)
        return i.name;
    }, r.prototype.getDimensionIndex = function(t) {
      var e = this._recognizeDimIndex(t);
      if (e != null)
        return e;
      if (t == null)
        return -1;
      var n = this._getDimInfo(t);
      return n ? n.storeDimIndex : this._dimOmitted ? this._schema.getSourceDimensionIndex(t) : -1;
    }, r.prototype._recognizeDimIndex = function(t) {
      if (dt(t) || t != null && !isNaN(t) && !this._getDimInfo(t) && (!this._dimOmitted || this._schema.getSourceDimensionIndex(t) < 0))
        return +t;
    }, r.prototype._getStoreDimIndex = function(t) {
      var e = this.getDimensionIndex(t);
      if (process.env.NODE_ENV !== "production" && e == null)
        throw new Error("Unknown dimension " + t);
      return e;
    }, r.prototype.getDimensionInfo = function(t) {
      return this._getDimInfo(this.getDimension(t));
    }, r.prototype._initGetDimensionInfo = function(t) {
      var e = this._dimInfos;
      this._getDimInfo = t ? function(n) {
        return e.hasOwnProperty(n) ? e[n] : void 0;
      } : function(n) {
        return e[n];
      };
    }, r.prototype.getDimensionsOnCoord = function() {
      return this._dimSummary.dataDimsOnCoord.slice();
    }, r.prototype.mapDimension = function(t, e) {
      var n = this._dimSummary;
      if (e == null)
        return n.encodeFirstDimNotExtra[t];
      var i = n.encode[t];
      return i ? i[e] : null;
    }, r.prototype.mapDimensionsAll = function(t) {
      var e = this._dimSummary, n = e.encode[t];
      return (n || []).slice();
    }, r.prototype.getStore = function() {
      return this._store;
    }, r.prototype.initData = function(t, e, n) {
      var i = this, a;
      if (t instanceof xf && (a = t), !a) {
        var o = this.dimensions, s = Yh(t) || Qt(t) ? new Em(t, o.length) : t;
        a = new xf();
        var u = wr(o, function(l) {
          return {
            type: i._dimInfos[l].type,
            property: l
          };
        });
        a.initData(s, u, n);
      }
      this._store = a, this._nameList = (e || []).slice(), this._idList = [], this._nameRepeatCount = {}, this._doInit(0, a.count()), this._dimSummary = vA(this, this._schema), this.userOutput = this._dimSummary.userOutput;
    }, r.prototype.appendData = function(t) {
      var e = this._store.appendData(t);
      this._doInit(e[0], e[1]);
    }, r.prototype.appendValues = function(t, e) {
      var n = this._store.appendValues(t, e && e.length), i = n.start, a = n.end, o = this._shouldMakeIdFromName();
      if (this._updateOrdinalMeta(), e)
        for (var s = i; s < a; s++) {
          var u = s - i;
          this._nameList[s] = e[u], o && xl(this, s);
        }
    }, r.prototype._updateOrdinalMeta = function() {
      for (var t = this._store, e = this.dimensions, n = 0; n < e.length; n++) {
        var i = this._dimInfos[e[n]];
        i.ordinalMeta && t.collectOrdinalMeta(i.storeDimIndex, i.ordinalMeta);
      }
    }, r.prototype._shouldMakeIdFromName = function() {
      var t = this._store.getProvider();
      return this._idDimIdx == null && t.getSource().sourceFormat !== lr && !t.fillStorage;
    }, r.prototype._doInit = function(t, e) {
      if (!(t >= e)) {
        var n = this._store, i = n.getProvider();
        this._updateOrdinalMeta();
        var a = this._nameList, o = this._idList, s = i.getSource().sourceFormat, u = s === Ae;
        if (u && !i.pure)
          for (var l = [], f = t; f < e; f++) {
            var h = i.getItem(f, l);
            if (!this.hasItemOption && Eb(h) && (this.hasItemOption = !0), h) {
              var v = h.name;
              a[f] == null && v != null && (a[f] = qe(v, null));
              var c = h.id;
              o[f] == null && c != null && (o[f] = qe(c, null));
            }
          }
        if (this._shouldMakeIdFromName())
          for (var f = t; f < e; f++)
            xl(this, f);
        vp(this);
      }
    }, r.prototype.getApproximateExtent = function(t) {
      return this._approximateExtent[t] || this._store.getDataExtent(this._getStoreDimIndex(t));
    }, r.prototype.setApproximateExtent = function(t, e) {
      e = this.getDimension(e), this._approximateExtent[e] = t.slice();
    }, r.prototype.getCalculationInfo = function(t) {
      return this._calculationInfo[t];
    }, r.prototype.setCalculationInfo = function(t, e) {
      Wi(t) ? F(this._calculationInfo, t) : this._calculationInfo[t] = e;
    }, r.prototype.getName = function(t) {
      var e = this.getRawIndex(t), n = this._nameList[e];
      return n == null && this._nameDimIdx != null && (n = Ui(this, this._nameDimIdx, e)), n == null && (n = ""), n;
    }, r.prototype._getCategory = function(t, e) {
      var n = this._store.get(t, e), i = this._store.getOrdinalMeta(t);
      return i ? i.categories[n] : n;
    }, r.prototype.getId = function(t) {
      return To(this, this.getRawIndex(t));
    }, r.prototype.count = function() {
      return this._store.count();
    }, r.prototype.get = function(t, e) {
      var n = this._store, i = this._dimInfos[t];
      if (i)
        return n.get(i.storeDimIndex, e);
    }, r.prototype.getByRawIndex = function(t, e) {
      var n = this._store, i = this._dimInfos[t];
      if (i)
        return n.getByRawIndex(i.storeDimIndex, e);
    }, r.prototype.getIndices = function() {
      return this._store.getIndices();
    }, r.prototype.getDataExtent = function(t) {
      return this._store.getDataExtent(this._getStoreDimIndex(t));
    }, r.prototype.getSum = function(t) {
      return this._store.getSum(this._getStoreDimIndex(t));
    }, r.prototype.getMedian = function(t) {
      return this._store.getMedian(this._getStoreDimIndex(t));
    }, r.prototype.getValues = function(t, e) {
      var n = this, i = this._store;
      return H(t) ? i.getValues(wr(t, function(a) {
        return n._getStoreDimIndex(a);
      }), e) : i.getValues(t);
    }, r.prototype.hasValue = function(t) {
      for (var e = this._dimSummary.dataDimIndicesOnCoord, n = 0, i = e.length; n < i; n++)
        if (isNaN(this._store.get(e[n], t)))
          return !1;
      return !0;
    }, r.prototype.indexOfName = function(t) {
      for (var e = 0, n = this._store.count(); e < n; e++)
        if (this.getName(e) === t)
          return e;
      return -1;
    }, r.prototype.getRawIndex = function(t) {
      return this._store.getRawIndex(t);
    }, r.prototype.indexOfRawIndex = function(t) {
      return this._store.indexOfRawIndex(t);
    }, r.prototype.rawIndexOf = function(t, e) {
      var n = t && this._invertedIndicesMap[t];
      if (process.env.NODE_ENV !== "production" && !n)
        throw new Error("Do not supported yet");
      var i = n && n[e];
      return i == null || isNaN(i) ? cp : i;
    }, r.prototype.indicesOfNearest = function(t, e, n) {
      return this._store.indicesOfNearest(this._getStoreDimIndex(t), e, n);
    }, r.prototype.each = function(t, e, n) {
      Z(t) && (n = e, e = t, t = []);
      var i = n || this, a = wr(Zn(t), this._getStoreDimIndex, this);
      this._store.each(a, i ? vt(e, i) : e);
    }, r.prototype.filterSelf = function(t, e, n) {
      Z(t) && (n = e, e = t, t = []);
      var i = n || this, a = wr(Zn(t), this._getStoreDimIndex, this);
      return this._store = this._store.filter(a, i ? vt(e, i) : e), this;
    }, r.prototype.selectRange = function(t) {
      var e = this, n = {}, i = yt(t);
      return M(i, function(a) {
        var o = e._getStoreDimIndex(a);
        n[o] = t[a];
      }), this._store = this._store.selectRange(n), this;
    }, r.prototype.mapArray = function(t, e, n) {
      Z(t) && (n = e, e = t, t = []), n = n || this;
      var i = [];
      return this.each(t, function() {
        i.push(e && e.apply(this, arguments));
      }, n), i;
    }, r.prototype.map = function(t, e, n, i) {
      var a = n || i || this, o = wr(Zn(t), this._getStoreDimIndex, this), s = Yi(this);
      return s._store = this._store.map(o, a ? vt(e, a) : e), s;
    }, r.prototype.modify = function(t, e, n, i) {
      var a = this, o = n || i || this;
      process.env.NODE_ENV !== "production" && M(Zn(t), function(u) {
        var l = a.getDimensionInfo(u);
        l.isCalculationCoord || console.error("Danger: only stack dimension can be modified");
      });
      var s = wr(Zn(t), this._getStoreDimIndex, this);
      this._store.modify(s, o ? vt(e, o) : e);
    }, r.prototype.downSample = function(t, e, n, i) {
      var a = Yi(this);
      return a._store = this._store.downSample(this._getStoreDimIndex(t), e, n, i), a;
    }, r.prototype.minmaxDownSample = function(t, e) {
      var n = Yi(this);
      return n._store = this._store.minmaxDownSample(this._getStoreDimIndex(t), e), n;
    }, r.prototype.lttbDownSample = function(t, e) {
      var n = Yi(this);
      return n._store = this._store.lttbDownSample(this._getStoreDimIndex(t), e), n;
    }, r.prototype.getRawDataItem = function(t) {
      return this._store.getRawDataItem(t);
    }, r.prototype.getItemModel = function(t) {
      var e = this.hostModel, n = this.getRawDataItem(t);
      return new gt(n, e, e && e.ecModel);
    }, r.prototype.diff = function(t) {
      var e = this;
      return new hA(t ? t.getStore().getIndices() : [], this.getStore().getIndices(), function(n) {
        return To(t, n);
      }, function(n) {
        return To(e, n);
      });
    }, r.prototype.getVisual = function(t) {
      var e = this._visual;
      return e && e[t];
    }, r.prototype.setVisual = function(t, e) {
      this._visual = this._visual || {}, Wi(t) ? F(this._visual, t) : this._visual[t] = e;
    }, r.prototype.getItemVisual = function(t, e) {
      var n = this._itemVisuals[t], i = n && n[e];
      return i ?? this.getVisual(e);
    }, r.prototype.hasItemVisual = function() {
      return this._itemVisuals.length > 0;
    }, r.prototype.ensureUniqueItemVisual = function(t, e) {
      var n = this._itemVisuals, i = n[t];
      i || (i = n[t] = {});
      var a = i[e];
      return a == null && (a = this.getVisual(e), H(a) ? a = a.slice() : Wi(a) && (a = F({}, a)), i[e] = a), a;
    }, r.prototype.setItemVisual = function(t, e, n) {
      var i = this._itemVisuals[t] || {};
      this._itemVisuals[t] = i, Wi(e) ? F(i, e) : i[e] = n;
    }, r.prototype.clearAllVisual = function() {
      this._visual = {}, this._itemVisuals = [];
    }, r.prototype.setLayout = function(t, e) {
      Wi(t) ? F(this._layout, t) : this._layout[t] = e;
    }, r.prototype.getLayout = function(t) {
      return this._layout[t];
    }, r.prototype.getItemLayout = function(t) {
      return this._itemLayouts[t];
    }, r.prototype.setItemLayout = function(t, e, n) {
      this._itemLayouts[t] = n ? F(this._itemLayouts[t] || {}, e) : e;
    }, r.prototype.clearItemLayouts = function() {
      this._itemLayouts.length = 0;
    }, r.prototype.setItemGraphicEl = function(t, e) {
      var n = this.hostModel && this.hostModel.seriesIndex;
      zw(n, this.dataType, t, e), this._graphicEls[t] = e;
    }, r.prototype.getItemGraphicEl = function(t) {
      return this._graphicEls[t];
    }, r.prototype.eachItemGraphicEl = function(t, e) {
      M(this._graphicEls, function(n, i) {
        n && t && t.call(e, n, i);
      });
    }, r.prototype.cloneShallow = function(t) {
      return t || (t = new r(this._schema ? this._schema : wr(this.dimensions, this._getDimInfo, this), this.hostModel)), wl(t, this), t._store = this._store, t;
    }, r.prototype.wrapMethod = function(t, e) {
      var n = this[t];
      Z(n) && (this.__wrappedMethods = this.__wrappedMethods || [], this.__wrappedMethods.push(t), this[t] = function() {
        var i = n.apply(this, arguments);
        return e.apply(this, [i].concat(Os(arguments)));
      });
    }, r.internalField = (function() {
      vp = function(t) {
        var e = t._invertedIndicesMap;
        M(e, function(n, i) {
          var a = t._dimInfos[i], o = a.ordinalMeta, s = t._store;
          if (o) {
            n = e[i] = new mA(o.categories.length);
            for (var u = 0; u < n.length; u++)
              n[u] = cp;
            for (var u = 0; u < s.count(); u++)
              n[s.get(a.storeDimIndex, u)] = u;
          }
        });
      }, Ui = function(t, e, n) {
        return qe(t._getCategory(e, n), null);
      }, To = function(t, e) {
        var n = t._idList[e];
        return n == null && t._idDimIdx != null && (n = Ui(t, t._idDimIdx, e)), n == null && (n = _A + e), n;
      }, Zn = function(t) {
        return H(t) || (t = t != null ? [t] : []), t;
      }, Yi = function(t) {
        var e = new r(t._schema ? t._schema : wr(t.dimensions, t._getDimInfo, t), t.hostModel);
        return wl(e, t), e;
      }, wl = function(t, e) {
        M(SA.concat(e.__wrappedMethods || []), function(n) {
          e.hasOwnProperty(n) && (t[n] = e[n]);
        }), t.__wrappedMethods = e.__wrappedMethods, M(bA, function(n) {
          t[n] = nt(e[n]);
        }), t._calculationInfo = F({}, e._calculationInfo);
      }, xl = function(t, e) {
        var n = t._nameList, i = t._idList, a = t._nameDimIdx, o = t._idDimIdx, s = n[e], u = i[e];
        if (s == null && a != null && (n[e] = s = Ui(t, a, e)), u == null && o != null && (i[e] = u = Ui(t, o, e)), u == null && s != null) {
          var l = t._nameRepeatCount, f = l[s] = (l[s] || 0) + 1;
          u = s, f > 1 && (u += "__ec__" + f), i[e] = u;
        }
      };
    })(), r;
  })()
);
function wA(r, t) {
  return oc(r, t).dimensions;
}
function oc(r, t) {
  Yh(r) || (r = Dm(r)), t = t || {};
  var e = t.coordDimensions || [], n = t.dimensionsDefine || r.dimensionsDefine || [], i = Q(), a = [], o = TA(r, e, n, t.dimensionsCount), s = t.canOmitUnusedDimensions && A0(o), u = n === r.dimensionsDefine, l = u ? D0(r) : C0(n), f = t.encodeDefine;
  !f && t.encodeDefaulter && (f = t.encodeDefaulter(r, o));
  for (var h = Q(f), v = new Rm(o), c = 0; c < v.length; c++)
    v[c] = -1;
  function d(D) {
    var A = v[D];
    if (A < 0) {
      var C = n[D], E = Y(C) ? C : {
        name: C
      }, P = new qo(), L = E.name;
      L != null && l.get(L) != null && (P.name = P.displayName = L), E.type != null && (P.type = E.type), E.displayName != null && (P.displayName = E.displayName);
      var O = a.length;
      return v[D] = O, P.storeDimIndex = D, a.push(P), P;
    }
    return a[A];
  }
  if (!s)
    for (var c = 0; c < o; c++)
      d(c);
  h.each(function(D, A) {
    var C = jt(D).slice();
    if (C.length === 1 && !W(C[0]) && C[0] < 0) {
      h.set(A, !1);
      return;
    }
    var E = h.set(A, []);
    M(C, function(P, L) {
      var O = W(P) ? l.get(P) : P;
      O != null && O < o && (E[L] = O, g(d(O), A, L));
    });
  });
  var p = 0;
  M(e, function(D) {
    var A, C, E, P;
    if (W(D))
      A = D, P = {};
    else {
      P = D, A = P.name;
      var L = P.ordinalMeta;
      P.ordinalMeta = null, P = F({}, P), P.ordinalMeta = L, C = P.dimsDef, E = P.otherDims, P.name = P.coordDim = P.coordDimIndex = P.dimsDef = P.otherDims = null;
    }
    var O = h.get(A);
    if (O !== !1) {
      if (O = jt(O), !O.length)
        for (var R = 0; R < (C && C.length || 1); R++) {
          for (; p < o && d(p).coordDim != null; )
            p++;
          p < o && O.push(p++);
        }
      M(O, function(G, N) {
        var B = d(G);
        if (u && P.type != null && (B.type = P.type), g(ut(B, P), A, N), B.name == null && C) {
          var I = C[N];
          !Y(I) && (I = {
            name: I
          }), B.name = B.displayName = I.name, B.defaultTooltip = I.defaultTooltip;
        }
        E && ut(B.otherDims, E);
      });
    }
  });
  function g(D, A, C) {
    bf.get(A) != null ? D.otherDims[A] = C : (D.coordDim = A, D.coordDimIndex = C, i.set(A, !0));
  }
  var y = t.generateCoord, m = t.generateCoordCount, _ = m != null;
  m = y ? m || 1 : 0;
  var S = y || "value";
  function w(D) {
    D.name == null && (D.name = D.coordDim);
  }
  if (s)
    M(a, function(D) {
      w(D);
    }), a.sort(function(D, A) {
      return D.storeDimIndex - A.storeDimIndex;
    });
  else
    for (var b = 0; b < o; b++) {
      var x = d(b), T = x.coordDim;
      T == null && (x.coordDim = CA(S, i, _), x.coordDimIndex = 0, (!y || m <= 0) && (x.isExtraCoord = !0), m--), w(x), x.type == null && (bm(r, b) === Lt.Must || x.isExtraCoord && (x.otherDims.itemName != null || x.otherDims.seriesName != null)) && (x.type = "ordinal");
    }
  return xA(a), new x0({
    source: r,
    dimensions: a,
    fullDimensionCount: o,
    dimensionOmitted: s
  });
}
function xA(r) {
  for (var t = Q(), e = 0; e < r.length; e++) {
    var n = r[e], i = n.name, a = t.get(i) || 0;
    a > 0 && (n.name = i + (a - 1)), a++, t.set(i, a);
  }
}
function TA(r, t, e, n) {
  var i = Math.max(r.dimensionsDetectedCount || 1, t.length, e.length, n || 0);
  return M(t, function(a) {
    var o;
    Y(a) && (o = a.dimsDef) && (i = Math.max(i, o.length));
  }), i;
}
function CA(r, t, e) {
  if (e || t.hasKey(r)) {
    for (var n = 0; t.hasKey(r + n); )
      n++;
    r += n;
  }
  return t.set(r, !0), r;
}
var DA = (
  /** @class */
  /* @__PURE__ */ (function() {
    function r(t) {
      this.coordSysDims = [], this.axisMap = Q(), this.categoryAxisMap = Q(), this.coordSysName = t;
    }
    return r;
  })()
);
function AA(r) {
  var t = r.get("coordinateSystem"), e = new DA(t), n = MA[t];
  if (n)
    return n(r, e, e.axisMap, e.categoryAxisMap), e;
}
var MA = {
  cartesian2d: function(r, t, e, n) {
    var i = r.getReferringComponents("xAxis", Oe).models[0], a = r.getReferringComponents("yAxis", Oe).models[0];
    if (process.env.NODE_ENV !== "production") {
      if (!i)
        throw new Error('xAxis "' + Gr(r.get("xAxisIndex"), r.get("xAxisId"), 0) + '" not found');
      if (!a)
        throw new Error('yAxis "' + Gr(r.get("xAxisIndex"), r.get("yAxisId"), 0) + '" not found');
    }
    t.coordSysDims = ["x", "y"], e.set("x", i), e.set("y", a), jn(i) && (n.set("x", i), t.firstCategoryDimIndex = 0), jn(a) && (n.set("y", a), t.firstCategoryDimIndex == null && (t.firstCategoryDimIndex = 1));
  },
  singleAxis: function(r, t, e, n) {
    var i = r.getReferringComponents("singleAxis", Oe).models[0];
    if (process.env.NODE_ENV !== "production" && !i)
      throw new Error("singleAxis should be specified.");
    t.coordSysDims = ["single"], e.set("single", i), jn(i) && (n.set("single", i), t.firstCategoryDimIndex = 0);
  },
  polar: function(r, t, e, n) {
    var i = r.getReferringComponents("polar", Oe).models[0], a = i.findAxisModel("radiusAxis"), o = i.findAxisModel("angleAxis");
    if (process.env.NODE_ENV !== "production") {
      if (!o)
        throw new Error("angleAxis option not found");
      if (!a)
        throw new Error("radiusAxis option not found");
    }
    t.coordSysDims = ["radius", "angle"], e.set("radius", a), e.set("angle", o), jn(a) && (n.set("radius", a), t.firstCategoryDimIndex = 0), jn(o) && (n.set("angle", o), t.firstCategoryDimIndex == null && (t.firstCategoryDimIndex = 1));
  },
  geo: function(r, t, e, n) {
    t.coordSysDims = ["lng", "lat"];
  },
  parallel: function(r, t, e, n) {
    var i = r.ecModel, a = i.getComponent("parallel", r.get("parallelIndex")), o = t.coordSysDims = a.dimensions.slice();
    M(a.parallelAxisIndex, function(s, u) {
      var l = i.getComponent("parallelAxis", s), f = o[u];
      e.set(f, l), jn(l) && (n.set(f, l), t.firstCategoryDimIndex == null && (t.firstCategoryDimIndex = u));
    });
  }
};
function jn(r) {
  return r.get("type") === "category";
}
function M0(r, t, e) {
  e = e || {};
  var n = e.byIndex, i = e.stackedCoordDimension, a, o, s;
  EA(t) ? a = t : (o = t.schema, a = o.dimensions, s = t.store);
  var u = !!(r && r.get("stack")), l, f, h, v;
  if (M(a, function(m, _) {
    W(m) && (a[_] = m = {
      name: m
    }), u && !m.isExtraCoord && (!n && !l && m.ordinalMeta && (l = m), !f && m.type !== "ordinal" && m.type !== "time" && (!i || i === m.coordDim) && (f = m));
  }), f && !n && !l && (n = !0), f) {
    h = "__\0ecstackresult_" + r.id, v = "__\0ecstackedover_" + r.id, l && (l.createInvertedIndices = !0);
    var c = f.coordDim, d = f.type, p = 0;
    M(a, function(m) {
      m.coordDim === c && p++;
    });
    var g = {
      name: h,
      coordDim: c,
      coordDimIndex: p,
      type: d,
      isExtraCoord: !0,
      isCalculationCoord: !0,
      storeDimIndex: a.length
    }, y = {
      name: v,
      // This dimension contains stack base (generally, 0), so do not set it as
      // `stackedDimCoordDim` to avoid extent calculation, consider log scale.
      coordDim: v,
      coordDimIndex: p + 1,
      type: d,
      isExtraCoord: !0,
      isCalculationCoord: !0,
      storeDimIndex: a.length + 1
    };
    o ? (s && (g.storeDimIndex = s.ensureCalculationDimension(v, d), y.storeDimIndex = s.ensureCalculationDimension(h, d)), o.appendCalculationDimension(g), o.appendCalculationDimension(y)) : (a.push(g), a.push(y));
  }
  return {
    stackedDimension: f && f.name,
    stackedByDimension: l && l.name,
    isStackedByIndex: n,
    stackedOverDimension: v,
    stackResultDimension: h
  };
}
function EA(r) {
  return !T0(r.schema);
}
function Ln(r, t) {
  return !!t && t === r.getCalculationInfo("stackedDimension");
}
function E0(r, t) {
  return Ln(r, t) ? r.getCalculationInfo("stackResultDimension") : t;
}
function PA(r, t) {
  var e = r.get("coordinateSystem"), n = au.get(e), i;
  return t && t.coordSysDims && (i = U(t.coordSysDims, function(a) {
    var o = {
      name: a
    }, s = t.axisMap.get(a);
    if (s) {
      var u = s.get("type");
      o.type = dA(u);
    }
    return o;
  })), i || (i = n && (n.getDimensionsInfo ? n.getDimensionsInfo() : n.dimensions.slice()) || ["x", "y"]), i;
}
function IA(r, t, e) {
  var n, i;
  return e && M(r, function(a, o) {
    var s = a.coordDim, u = e.categoryAxisMap.get(s);
    u && (n == null && (n = o), a.ordinalMeta = u.getOrdinalMeta(), t && (a.createInvertedIndices = !0)), a.otherDims.itemName != null && (i = !0);
  }), !i && n != null && (r[n].otherDims.itemName = 0), n;
}
function hu(r, t, e) {
  e = e || {};
  var n = t.getSourceManager(), i, a = !1;
  i = n.getSource(), a = i.sourceFormat === Ae;
  var o = AA(t), s = PA(t, o), u = e.useEncodeDefaulter, l = Z(u) ? u : u ? St(bT, s, t) : null, f = {
    coordDimensions: s,
    generateCoord: e.generateCoord,
    encodeDefine: t.getEncode(),
    encodeDefaulter: l,
    canOmitUnusedDimensions: !a
  }, h = oc(i, f), v = IA(h.dimensions, e.createInvertedIndices, o), c = a ? null : n.getSharedDataStore(h), d = M0(t, {
    schema: h,
    store: c
  }), p = new ac(h, t);
  p.setCalculationInfo(d);
  var g = v != null && LA(i) ? function(y, m, _, S) {
    return S === v ? _ : this.defaultDimValueGetter(y, m, _, S);
  } : null;
  return p.hasItemOption = !1, p.initData(
    // Try to reuse the data store in sourceManager if using dataset.
    a ? i : c,
    null,
    g
  ), p;
}
function LA(r) {
  if (r.sourceFormat === Ae) {
    var t = OA(r.data || []);
    return !H(Fa(t));
  }
}
function OA(r) {
  for (var t = 0; t < r.length && r[t] == null; )
    t++;
  return r[t];
}
var Ke = (
  /** @class */
  (function() {
    function r(t) {
      this._setting = t || {}, this._extent = [1 / 0, -1 / 0];
    }
    return r.prototype.getSetting = function(t) {
      return this._setting[t];
    }, r.prototype.unionExtent = function(t) {
      var e = this._extent;
      t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1]);
    }, r.prototype.unionExtentFromData = function(t, e) {
      this.unionExtent(t.getApproximateExtent(e));
    }, r.prototype.getExtent = function() {
      return this._extent.slice();
    }, r.prototype.setExtent = function(t, e) {
      var n = this._extent;
      isNaN(t) || (n[0] = t), isNaN(e) || (n[1] = e);
    }, r.prototype.isInExtentRange = function(t) {
      return this._extent[0] <= t && this._extent[1] >= t;
    }, r.prototype.isBlank = function() {
      return this._isBlank;
    }, r.prototype.setBlank = function(t) {
      this._isBlank = t;
    }, r;
  })()
);
Bs(Ke);
var RA = 0, kf = (
  /** @class */
  (function() {
    function r(t) {
      this.categories = t.categories || [], this._needCollect = t.needCollect, this._deduplication = t.deduplication, this.uid = ++RA;
    }
    return r.createByAxisModel = function(t) {
      var e = t.option, n = e.data, i = n && U(n, NA);
      return new r({
        categories: i,
        needCollect: !i,
        // deduplication is default in axis.
        deduplication: e.dedplication !== !1
      });
    }, r.prototype.getOrdinal = function(t) {
      return this._getOrCreateMap().get(t);
    }, r.prototype.parseAndCollect = function(t) {
      var e, n = this._needCollect;
      if (!W(t) && !n)
        return t;
      if (n && !this._deduplication)
        return e = this.categories.length, this.categories[e] = t, e;
      var i = this._getOrCreateMap();
      return e = i.get(t), e == null && (n ? (e = this.categories.length, this.categories[e] = t, i.set(t, e)) : e = NaN), e;
    }, r.prototype._getOrCreateMap = function() {
      return this._map || (this._map = Q(this.categories));
    }, r;
  })()
);
function NA(r) {
  return Y(r) && r.value != null ? r.value : r + "";
}
function kA(r) {
  var t = Math.pow(10, Ba(Math.abs(r))), e = Math.abs(r / t);
  return e === 0 || e === 1 || e === 2 || e === 3 || e === 5;
}
function Bf(r) {
  return r.type === "interval" || r.type === "log";
}
function BA(r, t, e, n) {
  var i = {}, a = r[1] - r[0], o = i.interval = yh(a / t, !0);
  e != null && o < e && (o = i.interval = e), n != null && o > n && (o = i.interval = n);
  var s = i.intervalPrecision = P0(o), u = i.niceTickExtent = [xt(Math.ceil(r[0] / o) * o, s), xt(Math.floor(r[1] / o) * o, s)];
  return FA(u, r), i;
}
function Tl(r) {
  var t = Math.pow(10, Ba(r)), e = r / t;
  return e ? e === 2 ? e = 3 : e === 3 ? e = 5 : e *= 2 : e = 1, xt(e * t);
}
function P0(r) {
  return Ye(r) + 2;
}
function dp(r, t, e) {
  r[t] = Math.max(Math.min(r[t], e[1]), e[0]);
}
function FA(r, t) {
  !isFinite(r[0]) && (r[0] = t[0]), !isFinite(r[1]) && (r[1] = t[1]), dp(r, 0, t), dp(r, 1, t), r[0] > r[1] && (r[0] = r[1]);
}
function cu(r, t) {
  return r >= t[0] && r <= t[1];
}
function vu(r, t) {
  return t[1] === t[0] ? 0.5 : (r - t[0]) / (t[1] - t[0]);
}
function du(r, t) {
  return r * (t[1] - t[0]) + t[0];
}
var sc = (
  /** @class */
  (function(r) {
    z(t, r);
    function t(e) {
      var n = r.call(this, e) || this;
      n.type = "ordinal";
      var i = n.getSetting("ordinalMeta");
      return i || (i = new kf({})), H(i) && (i = new kf({
        categories: U(i, function(a) {
          return Y(a) ? a.value : a;
        })
      })), n._ordinalMeta = i, n._extent = n.getSetting("extent") || [0, i.categories.length - 1], n;
    }
    return t.prototype.parse = function(e) {
      return e == null ? NaN : W(e) ? this._ordinalMeta.getOrdinal(e) : Math.round(e);
    }, t.prototype.contain = function(e) {
      return e = this.parse(e), cu(e, this._extent) && this._ordinalMeta.categories[e] != null;
    }, t.prototype.normalize = function(e) {
      return e = this._getTickNumber(this.parse(e)), vu(e, this._extent);
    }, t.prototype.scale = function(e) {
      return e = Math.round(du(e, this._extent)), this.getRawOrdinalNumber(e);
    }, t.prototype.getTicks = function() {
      for (var e = [], n = this._extent, i = n[0]; i <= n[1]; )
        e.push({
          value: i
        }), i++;
      return e;
    }, t.prototype.getMinorTicks = function(e) {
    }, t.prototype.setSortInfo = function(e) {
      if (e == null) {
        this._ordinalNumbersByTick = this._ticksByOrdinalNumber = null;
        return;
      }
      for (var n = e.ordinalNumbers, i = this._ordinalNumbersByTick = [], a = this._ticksByOrdinalNumber = [], o = 0, s = this._ordinalMeta.categories.length, u = Math.min(s, n.length); o < u; ++o) {
        var l = n[o];
        i[o] = l, a[l] = o;
      }
      for (var f = 0; o < s; ++o) {
        for (; a[f] != null; )
          f++;
        i.push(f), a[f] = o;
      }
    }, t.prototype._getTickNumber = function(e) {
      var n = this._ticksByOrdinalNumber;
      return n && e >= 0 && e < n.length ? n[e] : e;
    }, t.prototype.getRawOrdinalNumber = function(e) {
      var n = this._ordinalNumbersByTick;
      return n && e >= 0 && e < n.length ? n[e] : e;
    }, t.prototype.getLabel = function(e) {
      if (!this.isBlank()) {
        var n = this.getRawOrdinalNumber(e.value), i = this._ordinalMeta.categories[n];
        return i == null ? "" : i + "";
      }
    }, t.prototype.count = function() {
      return this._extent[1] - this._extent[0] + 1;
    }, t.prototype.unionExtentFromData = function(e, n) {
      this.unionExtent(e.getApproximateExtent(n));
    }, t.prototype.isInExtentRange = function(e) {
      return e = this._getTickNumber(e), this._extent[0] <= e && this._extent[1] >= e;
    }, t.prototype.getOrdinalMeta = function() {
      return this._ordinalMeta;
    }, t.prototype.calcNiceTicks = function() {
    }, t.prototype.calcNiceExtent = function() {
    }, t.type = "ordinal", t;
  })(Ke)
);
Ke.registerClass(sc);
var cn = xt, pi = (
  /** @class */
  (function(r) {
    z(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = "interval", e._interval = 0, e._intervalPrecision = 2, e;
    }
    return t.prototype.parse = function(e) {
      return e;
    }, t.prototype.contain = function(e) {
      return cu(e, this._extent);
    }, t.prototype.normalize = function(e) {
      return vu(e, this._extent);
    }, t.prototype.scale = function(e) {
      return du(e, this._extent);
    }, t.prototype.setExtent = function(e, n) {
      var i = this._extent;
      isNaN(e) || (i[0] = parseFloat(e)), isNaN(n) || (i[1] = parseFloat(n));
    }, t.prototype.unionExtent = function(e) {
      var n = this._extent;
      e[0] < n[0] && (n[0] = e[0]), e[1] > n[1] && (n[1] = e[1]), this.setExtent(n[0], n[1]);
    }, t.prototype.getInterval = function() {
      return this._interval;
    }, t.prototype.setInterval = function(e) {
      this._interval = e, this._niceExtent = this._extent.slice(), this._intervalPrecision = P0(e);
    }, t.prototype.getTicks = function(e) {
      var n = this._interval, i = this._extent, a = this._niceExtent, o = this._intervalPrecision, s = [];
      if (!n)
        return s;
      var u = 1e4;
      i[0] < a[0] && (e ? s.push({
        value: cn(a[0] - n, o)
      }) : s.push({
        value: i[0]
      }));
      for (var l = a[0]; l <= a[1] && (s.push({
        value: l
      }), l = cn(l + n, o), l !== s[s.length - 1].value); )
        if (s.length > u)
          return [];
      var f = s.length ? s[s.length - 1].value : a[1];
      return i[1] > f && (e ? s.push({
        value: cn(f + n, o)
      }) : s.push({
        value: i[1]
      })), s;
    }, t.prototype.getMinorTicks = function(e) {
      for (var n = this.getTicks(!0), i = [], a = this.getExtent(), o = 1; o < n.length; o++) {
        for (var s = n[o], u = n[o - 1], l = 0, f = [], h = s.value - u.value, v = h / e; l < e - 1; ) {
          var c = cn(u.value + (l + 1) * v);
          c > a[0] && c < a[1] && f.push(c), l++;
        }
        i.push(f);
      }
      return i;
    }, t.prototype.getLabel = function(e, n) {
      if (e == null)
        return "";
      var i = n && n.precision;
      i == null ? i = Ye(e.value) || 0 : i === "auto" && (i = this._intervalPrecision);
      var a = cn(e.value, i, !0);
      return Fh(a);
    }, t.prototype.calcNiceTicks = function(e, n, i) {
      e = e || 5;
      var a = this._extent, o = a[1] - a[0];
      if (isFinite(o)) {
        o < 0 && (o = -o, a.reverse());
        var s = BA(a, e, n, i);
        this._intervalPrecision = s.intervalPrecision, this._interval = s.interval, this._niceExtent = s.niceTickExtent;
      }
    }, t.prototype.calcNiceExtent = function(e) {
      var n = this._extent;
      if (n[0] === n[1])
        if (n[0] !== 0) {
          var i = Math.abs(n[0]);
          e.fixMax || (n[1] += i / 2), n[0] -= i / 2;
        } else
          n[1] = 1;
      var a = n[1] - n[0];
      isFinite(a) || (n[0] = 0, n[1] = 1), this.calcNiceTicks(e.splitNumber, e.minInterval, e.maxInterval);
      var o = this._interval;
      e.fixMin || (n[0] = cn(Math.floor(n[0] / o) * o)), e.fixMax || (n[1] = cn(Math.ceil(n[1] / o) * o));
    }, t.prototype.setNiceExtent = function(e, n) {
      this._niceExtent = [e, n];
    }, t.type = "interval", t;
  })(Ke)
);
Ke.registerClass(pi);
var I0 = typeof Float32Array < "u", VA = I0 ? Float32Array : Array;
function sr(r) {
  return H(r) ? I0 ? new Float32Array(r) : r : new VA(r);
}
var zA = "__ec_stack_";
function L0(r) {
  return r.get("stack") || zA + r.seriesIndex;
}
function uc(r) {
  return r.dim + r.index;
}
function O0(r, t) {
  var e = [];
  return t.eachSeriesByType(r, function(n) {
    N0(n) && e.push(n);
  }), e;
}
function GA(r) {
  var t = {};
  M(r, function(u) {
    var l = u.coordinateSystem, f = l.getBaseAxis();
    if (!(f.type !== "time" && f.type !== "value"))
      for (var h = u.getData(), v = f.dim + "_" + f.index, c = h.getDimensionIndex(h.mapDimension(f.dim)), d = h.getStore(), p = 0, g = d.count(); p < g; ++p) {
        var y = d.get(c, p);
        t[v] ? t[v].push(y) : t[v] = [y];
      }
  });
  var e = {};
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var i = t[n];
      if (i) {
        i.sort(function(u, l) {
          return u - l;
        });
        for (var a = null, o = 1; o < i.length; ++o) {
          var s = i[o] - i[o - 1];
          s > 0 && (a = a === null ? s : Math.min(a, s));
        }
        e[n] = a;
      }
    }
  return e;
}
function R0(r) {
  var t = GA(r), e = [];
  return M(r, function(n) {
    var i = n.coordinateSystem, a = i.getBaseAxis(), o = a.getExtent(), s;
    if (a.type === "category")
      s = a.getBandWidth();
    else if (a.type === "value" || a.type === "time") {
      var u = a.dim + "_" + a.index, l = t[u], f = Math.abs(o[1] - o[0]), h = a.scale.getExtent(), v = Math.abs(h[1] - h[0]);
      s = l ? f / v * l : f;
    } else {
      var c = n.getData();
      s = Math.abs(o[1] - o[0]) / c.count();
    }
    var d = _t(n.get("barWidth"), s), p = _t(n.get("barMaxWidth"), s), g = _t(
      // barMinWidth by default is 0.5 / 1 in cartesian. Because in value axis,
      // the auto-calculated bar width might be less than 0.5 / 1.
      n.get("barMinWidth") || (k0(n) ? 0.5 : 1),
      s
    ), y = n.get("barGap"), m = n.get("barCategoryGap");
    e.push({
      bandWidth: s,
      barWidth: d,
      barMaxWidth: p,
      barMinWidth: g,
      barGap: y,
      barCategoryGap: m,
      axisKey: uc(a),
      stackId: L0(n)
    });
  }), HA(e);
}
function HA(r) {
  var t = {};
  M(r, function(n, i) {
    var a = n.axisKey, o = n.bandWidth, s = t[a] || {
      bandWidth: o,
      remainedWidth: o,
      autoWidthCount: 0,
      categoryGap: null,
      gap: "20%",
      stacks: {}
    }, u = s.stacks;
    t[a] = s;
    var l = n.stackId;
    u[l] || s.autoWidthCount++, u[l] = u[l] || {
      width: 0,
      maxWidth: 0
    };
    var f = n.barWidth;
    f && !u[l].width && (u[l].width = f, f = Math.min(s.remainedWidth, f), s.remainedWidth -= f);
    var h = n.barMaxWidth;
    h && (u[l].maxWidth = h);
    var v = n.barMinWidth;
    v && (u[l].minWidth = v);
    var c = n.barGap;
    c != null && (s.gap = c);
    var d = n.barCategoryGap;
    d != null && (s.categoryGap = d);
  });
  var e = {};
  return M(t, function(n, i) {
    e[i] = {};
    var a = n.stacks, o = n.bandWidth, s = n.categoryGap;
    if (s == null) {
      var u = yt(a).length;
      s = Math.max(35 - u * 4, 15) + "%";
    }
    var l = _t(s, o), f = _t(n.gap, 1), h = n.remainedWidth, v = n.autoWidthCount, c = (h - l) / (v + (v - 1) * f);
    c = Math.max(c, 0), M(a, function(y) {
      var m = y.maxWidth, _ = y.minWidth;
      if (y.width) {
        var S = y.width;
        m && (S = Math.min(S, m)), _ && (S = Math.max(S, _)), y.width = S, h -= S + f * S, v--;
      } else {
        var S = c;
        m && m < S && (S = Math.min(m, h)), _ && _ > S && (S = _), S !== c && (y.width = S, h -= S + f * S, v--);
      }
    }), c = (h - l) / (v + (v - 1) * f), c = Math.max(c, 0);
    var d = 0, p;
    M(a, function(y, m) {
      y.width || (y.width = c), p = y, d += y.width * (1 + f);
    }), p && (d -= p.width * f);
    var g = -d / 2;
    M(a, function(y, m) {
      e[i][m] = e[i][m] || {
        bandWidth: o,
        offset: g,
        width: y.width
      }, g += y.width * (1 + f);
    });
  }), e;
}
function WA(r, t, e) {
  if (r && t) {
    var n = r[uc(t)];
    return n;
  }
}
function UA(r, t) {
  var e = O0(r, t), n = R0(e);
  M(e, function(i) {
    var a = i.getData(), o = i.coordinateSystem, s = o.getBaseAxis(), u = L0(i), l = n[uc(s)][u], f = l.offset, h = l.width;
    a.setLayout({
      bandWidth: l.bandWidth,
      offset: f,
      size: h
    });
  });
}
function YA(r) {
  return {
    seriesType: r,
    plan: $h(),
    reset: function(t) {
      if (N0(t)) {
        var e = t.getData(), n = t.coordinateSystem, i = n.getBaseAxis(), a = n.getOtherAxis(i), o = e.getDimensionIndex(e.mapDimension(a.dim)), s = e.getDimensionIndex(e.mapDimension(i.dim)), u = t.get("showBackground", !0), l = e.mapDimension(a.dim), f = e.getCalculationInfo("stackResultDimension"), h = Ln(e, l) && !!e.getCalculationInfo("stackedOnSeries"), v = a.isHorizontal(), c = XA(i, a), d = k0(t), p = t.get("barMinHeight") || 0, g = f && e.getDimensionIndex(f), y = e.getLayout("size"), m = e.getLayout("offset");
        return {
          progress: function(_, S) {
            for (var w = _.count, b = d && sr(w * 3), x = d && u && sr(w * 3), T = d && sr(w), D = n.master.getRect(), A = v ? D.width : D.height, C, E = S.getStore(), P = 0; (C = _.next()) != null; ) {
              var L = E.get(h ? g : o, C), O = E.get(s, C), R = c, G = void 0;
              h && (G = +L - E.get(o, C));
              var N = void 0, B = void 0, I = void 0, k = void 0;
              if (v) {
                var V = n.dataToPoint([L, O]);
                if (h) {
                  var X = n.dataToPoint([G, O]);
                  R = X[0];
                }
                N = R, B = V[1] + m, I = V[0] - R, k = y, Math.abs(I) < p && (I = (I < 0 ? -1 : 1) * p);
              } else {
                var V = n.dataToPoint([O, L]);
                if (h) {
                  var X = n.dataToPoint([O, G]);
                  R = X[1];
                }
                N = V[0] + m, B = R, I = y, k = V[1] - R, Math.abs(k) < p && (k = (k <= 0 ? -1 : 1) * p);
              }
              d ? (b[P] = N, b[P + 1] = B, b[P + 2] = v ? I : k, x && (x[P] = v ? D.x : N, x[P + 1] = v ? B : D.y, x[P + 2] = A), T[C] = C) : S.setItemLayout(C, {
                x: N,
                y: B,
                width: I,
                height: k
              }), P += 3;
            }
            d && S.setLayout({
              largePoints: b,
              largeDataIndices: T,
              largeBackgroundPoints: x,
              valueAxisHorizontal: v
            });
          }
        };
      }
    }
  };
}
function N0(r) {
  return r.coordinateSystem && r.coordinateSystem.type === "cartesian2d";
}
function k0(r) {
  return r.pipelineContext && r.pipelineContext.large;
}
function XA(r, t) {
  var e = t.model.get("startValue");
  return e || (e = 0), t.toGlobalCoord(t.dataToCoord(t.type === "log" ? e > 0 ? e : 1 : e));
}
var qA = function(r, t, e, n) {
  for (; e < n; ) {
    var i = e + n >>> 1;
    r[i][1] < t ? e = i + 1 : n = i;
  }
  return e;
}, B0 = (
  /** @class */
  (function(r) {
    z(t, r);
    function t(e) {
      var n = r.call(this, e) || this;
      return n.type = "time", n;
    }
    return t.prototype.getLabel = function(e) {
      var n = this.getSetting("useUTC");
      return Ya(e.value, od[lT(ai(this._minLevelUnit))] || od.second, n, this.getSetting("locale"));
    }, t.prototype.getFormattedLabel = function(e, n, i) {
      var a = this.getSetting("useUTC"), o = this.getSetting("locale");
      return fT(e, n, i, o, a);
    }, t.prototype.getTicks = function() {
      var e = this._interval, n = this._extent, i = [];
      if (!e)
        return i;
      i.push({
        value: n[0],
        level: 0
      });
      var a = this.getSetting("useUTC"), o = tM(this._minLevelUnit, this._approxInterval, a, n);
      return i = i.concat(o), i.push({
        value: n[1],
        level: 0
      }), i;
    }, t.prototype.calcNiceExtent = function(e) {
      var n = this._extent;
      if (n[0] === n[1] && (n[0] -= we, n[1] += we), n[1] === -1 / 0 && n[0] === 1 / 0) {
        var i = /* @__PURE__ */ new Date();
        n[1] = +new Date(i.getFullYear(), i.getMonth(), i.getDate()), n[0] = n[1] - we;
      }
      this.calcNiceTicks(e.splitNumber, e.minInterval, e.maxInterval);
    }, t.prototype.calcNiceTicks = function(e, n, i) {
      e = e || 10;
      var a = this._extent, o = a[1] - a[0];
      this._approxInterval = o / e, n != null && this._approxInterval < n && (this._approxInterval = n), i != null && this._approxInterval > i && (this._approxInterval = i);
      var s = Co.length, u = Math.min(qA(Co, this._approxInterval, 0, s), s - 1);
      this._interval = Co[u][1], this._minLevelUnit = Co[Math.max(u - 1, 0)][0];
    }, t.prototype.parse = function(e) {
      return dt(e) ? e : +xe(e);
    }, t.prototype.contain = function(e) {
      return cu(this.parse(e), this._extent);
    }, t.prototype.normalize = function(e) {
      return vu(this.parse(e), this._extent);
    }, t.prototype.scale = function(e) {
      return du(e, this._extent);
    }, t.type = "time", t;
  })(pi)
), Co = [
  // Format                           interval
  ["second", Nh],
  ["minute", kh],
  ["hour", la],
  ["quarter-day", la * 6],
  ["half-day", la * 12],
  ["day", we * 1.2],
  ["half-week", we * 3.5],
  ["week", we * 7],
  ["month", we * 31],
  ["quarter", we * 95],
  ["half-year", ad / 2],
  ["year", ad]
  // 1Y
];
function $A(r, t, e, n) {
  var i = xe(t), a = xe(e), o = function(d) {
    return sd(i, d, n) === sd(a, d, n);
  }, s = function() {
    return o("year");
  }, u = function() {
    return s() && o("month");
  }, l = function() {
    return u() && o("day");
  }, f = function() {
    return l() && o("hour");
  }, h = function() {
    return f() && o("minute");
  }, v = function() {
    return h() && o("second");
  }, c = function() {
    return v() && o("millisecond");
  };
  switch (r) {
    case "year":
      return s();
    case "month":
      return u();
    case "day":
      return l();
    case "hour":
      return f();
    case "minute":
      return h();
    case "second":
      return v();
    case "millisecond":
      return c();
  }
}
function ZA(r, t) {
  return r /= we, r > 16 ? 16 : r > 7.5 ? 7 : r > 3.5 ? 4 : r > 1.5 ? 2 : 1;
}
function jA(r) {
  var t = 30 * we;
  return r /= t, r > 6 ? 6 : r > 3 ? 3 : r > 2 ? 2 : 1;
}
function KA(r) {
  return r /= la, r > 12 ? 12 : r > 6 ? 6 : r > 3.5 ? 4 : r > 2 ? 2 : 1;
}
function pp(r, t) {
  return r /= t ? kh : Nh, r > 30 ? 30 : r > 20 ? 20 : r > 15 ? 15 : r > 10 ? 10 : r > 5 ? 5 : r > 2 ? 2 : 1;
}
function QA(r) {
  return yh(r, !0);
}
function JA(r, t, e) {
  var n = new Date(r);
  switch (ai(t)) {
    case "year":
    case "month":
      n[hm(e)](0);
    case "day":
      n[cm(e)](1);
    case "hour":
      n[vm(e)](0);
    case "minute":
      n[dm(e)](0);
    case "second":
      n[pm(e)](0), n[gm(e)](0);
  }
  return n.getTime();
}
function tM(r, t, e, n) {
  var i = 1e4, a = lm, o = 0;
  function s(A, C, E, P, L, O, R) {
    for (var G = new Date(C), N = C, B = G[P](); N < E && N <= n[1]; )
      R.push({
        value: N
      }), B += A, G[L](B), N = G.getTime();
    R.push({
      value: N,
      notAdd: !0
    });
  }
  function u(A, C, E) {
    var P = [], L = !C.length;
    if (!$A(ai(A), n[0], n[1], e)) {
      L && (C = [{
        // TODO Optimize. Not include so may ticks.
        value: JA(new Date(n[0]), A, e)
      }, {
        value: n[1]
      }]);
      for (var O = 0; O < C.length - 1; O++) {
        var R = C[O].value, G = C[O + 1].value;
        if (R !== G) {
          var N = void 0, B = void 0, I = void 0, k = !1;
          switch (A) {
            case "year":
              N = Math.max(1, Math.round(t / we / 365)), B = Bh(e), I = hT(e);
              break;
            case "half-year":
            case "quarter":
            case "month":
              N = jA(t), B = oi(e), I = hm(e);
              break;
            case "week":
            // PENDING If week is added. Ignore day.
            case "half-week":
            case "day":
              N = ZA(t), B = tu(e), I = cm(e), k = !0;
              break;
            case "half-day":
            case "quarter-day":
            case "hour":
              N = KA(t), B = Ta(e), I = vm(e);
              break;
            case "minute":
              N = pp(t, !0), B = eu(e), I = dm(e);
              break;
            case "second":
              N = pp(t, !1), B = ru(e), I = pm(e);
              break;
            case "millisecond":
              N = QA(t), B = nu(e), I = gm(e);
              break;
          }
          s(N, R, G, B, I, k, P), A === "year" && E.length > 1 && O === 0 && E.unshift({
            value: E[0].value - N
          });
        }
      }
      for (var O = 0; O < P.length; O++)
        E.push(P[O]);
      return P;
    }
  }
  for (var l = [], f = [], h = 0, v = 0, c = 0; c < a.length && o++ < i; ++c) {
    var d = ai(a[c]);
    if (uT(a[c])) {
      u(a[c], l[l.length - 1] || [], f);
      var p = a[c + 1] ? ai(a[c + 1]) : null;
      if (d !== p) {
        if (f.length) {
          v = h, f.sort(function(A, C) {
            return A.value - C.value;
          });
          for (var g = [], y = 0; y < f.length; ++y) {
            var m = f[y].value;
            (y === 0 || f[y - 1].value !== m) && (g.push(f[y]), m >= n[0] && m <= n[1] && h++);
          }
          var _ = (n[1] - n[0]) / t;
          if (h > _ * 1.5 && v > _ / 1.5 || (l.push(g), h > _ || r === a[c]))
            break;
        }
        f = [];
      }
    }
  }
  process.env.NODE_ENV !== "production" && o >= i && zt("Exceed safe limit.");
  for (var S = Dt(U(l, function(A) {
    return Dt(A, function(C) {
      return C.value >= n[0] && C.value <= n[1] && !C.notAdd;
    });
  }), function(A) {
    return A.length > 0;
  }), w = [], b = S.length - 1, c = 0; c < S.length; ++c)
    for (var x = S[c], T = 0; T < x.length; ++T)
      w.push({
        value: x[T].value,
        level: b - c
      });
  w.sort(function(A, C) {
    return A.value - C.value;
  });
  for (var D = [], c = 0; c < w.length; ++c)
    (c === 0 || w[c].value !== w[c - 1].value) && D.push(w[c]);
  return D;
}
Ke.registerClass(B0);
var gp = Ke.prototype, va = pi.prototype, eM = xt, rM = Math.floor, nM = Math.ceil, Do = Math.pow, Me = Math.log, lc = (
  /** @class */
  (function(r) {
    z(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = "log", e.base = 10, e._originalScale = new pi(), e._interval = 0, e;
    }
    return t.prototype.getTicks = function(e) {
      var n = this._originalScale, i = this._extent, a = n.getExtent(), o = va.getTicks.call(this, e);
      return U(o, function(s) {
        var u = s.value, l = xt(Do(this.base, u));
        return l = u === i[0] && this._fixMin ? Ao(l, a[0]) : l, l = u === i[1] && this._fixMax ? Ao(l, a[1]) : l, {
          value: l
        };
      }, this);
    }, t.prototype.setExtent = function(e, n) {
      var i = Me(this.base);
      e = Me(Math.max(0, e)) / i, n = Me(Math.max(0, n)) / i, va.setExtent.call(this, e, n);
    }, t.prototype.getExtent = function() {
      var e = this.base, n = gp.getExtent.call(this);
      n[0] = Do(e, n[0]), n[1] = Do(e, n[1]);
      var i = this._originalScale, a = i.getExtent();
      return this._fixMin && (n[0] = Ao(n[0], a[0])), this._fixMax && (n[1] = Ao(n[1], a[1])), n;
    }, t.prototype.unionExtent = function(e) {
      this._originalScale.unionExtent(e);
      var n = this.base;
      e[0] = Me(e[0]) / Me(n), e[1] = Me(e[1]) / Me(n), gp.unionExtent.call(this, e);
    }, t.prototype.unionExtentFromData = function(e, n) {
      this.unionExtent(e.getApproximateExtent(n));
    }, t.prototype.calcNiceTicks = function(e) {
      e = e || 10;
      var n = this._extent, i = n[1] - n[0];
      if (!(i === 1 / 0 || i <= 0)) {
        var a = cy(i), o = e / i * a;
        for (o <= 0.5 && (a *= 10); !isNaN(a) && Math.abs(a) < 1 && Math.abs(a) > 0; )
          a *= 10;
        var s = [xt(nM(n[0] / a) * a), xt(rM(n[1] / a) * a)];
        this._interval = a, this._niceExtent = s;
      }
    }, t.prototype.calcNiceExtent = function(e) {
      va.calcNiceExtent.call(this, e), this._fixMin = e.fixMin, this._fixMax = e.fixMax;
    }, t.prototype.parse = function(e) {
      return e;
    }, t.prototype.contain = function(e) {
      return e = Me(e) / Me(this.base), cu(e, this._extent);
    }, t.prototype.normalize = function(e) {
      return e = Me(e) / Me(this.base), vu(e, this._extent);
    }, t.prototype.scale = function(e) {
      return e = du(e, this._extent), Do(this.base, e);
    }, t.type = "log", t;
  })(Ke)
), F0 = lc.prototype;
F0.getMinorTicks = va.getMinorTicks;
F0.getLabel = va.getLabel;
function Ao(r, t) {
  return eM(r, Ye(t));
}
Ke.registerClass(lc);
var iM = (
  /** @class */
  (function() {
    function r(t, e, n) {
      this._prepareParams(t, e, n);
    }
    return r.prototype._prepareParams = function(t, e, n) {
      n[1] < n[0] && (n = [NaN, NaN]), this._dataMin = n[0], this._dataMax = n[1];
      var i = this._isOrdinal = t.type === "ordinal";
      this._needCrossZero = t.type === "interval" && e.getNeedCrossZero && e.getNeedCrossZero();
      var a = e.get("min", !0);
      a == null && (a = e.get("startValue", !0));
      var o = this._modelMinRaw = a;
      Z(o) ? this._modelMinNum = Mo(t, o({
        min: n[0],
        max: n[1]
      })) : o !== "dataMin" && (this._modelMinNum = Mo(t, o));
      var s = this._modelMaxRaw = e.get("max", !0);
      if (Z(s) ? this._modelMaxNum = Mo(t, s({
        min: n[0],
        max: n[1]
      })) : s !== "dataMax" && (this._modelMaxNum = Mo(t, s)), i)
        this._axisDataLen = e.getCategories().length;
      else {
        var u = e.get("boundaryGap"), l = H(u) ? u : [u || 0, u || 0];
        typeof l[0] == "boolean" || typeof l[1] == "boolean" ? (process.env.NODE_ENV !== "production" && console.warn('Boolean type for boundaryGap is only allowed for ordinal axis. Please use string in percentage instead, e.g., "20%". Currently, boundaryGap is set to be 0.'), this._boundaryGapInner = [0, 0]) : this._boundaryGapInner = [Wr(l[0], 1), Wr(l[1], 1)];
      }
    }, r.prototype.calculate = function() {
      var t = this._isOrdinal, e = this._dataMin, n = this._dataMax, i = this._axisDataLen, a = this._boundaryGapInner, o = t ? null : n - e || Math.abs(e), s = this._modelMinRaw === "dataMin" ? e : this._modelMinNum, u = this._modelMaxRaw === "dataMax" ? n : this._modelMaxNum, l = s != null, f = u != null;
      s == null && (s = t ? i ? 0 : NaN : e - a[0] * o), u == null && (u = t ? i ? i - 1 : NaN : n + a[1] * o), (s == null || !isFinite(s)) && (s = NaN), (u == null || !isFinite(u)) && (u = NaN);
      var h = si(s) || si(u) || t && !i;
      this._needCrossZero && (s > 0 && u > 0 && !l && (s = 0), s < 0 && u < 0 && !f && (u = 0));
      var v = this._determinedMin, c = this._determinedMax;
      return v != null && (s = v, l = !0), c != null && (u = c, f = !0), {
        min: s,
        max: u,
        minFixed: l,
        maxFixed: f,
        isBlank: h
      };
    }, r.prototype.modifyDataMinMax = function(t, e) {
      process.env.NODE_ENV !== "production" && J(!this.frozen), this[oM[t]] = e;
    }, r.prototype.setDeterminedMinMax = function(t, e) {
      var n = aM[t];
      process.env.NODE_ENV !== "production" && J(!this.frozen && this[n] == null), this[n] = e;
    }, r.prototype.freeze = function() {
      this.frozen = !0;
    }, r;
  })()
), aM = {
  min: "_determinedMin",
  max: "_determinedMax"
}, oM = {
  min: "_dataMin",
  max: "_dataMax"
};
function sM(r, t, e) {
  var n = r.rawExtentInfo;
  return n || (n = new iM(r, t, e), r.rawExtentInfo = n, n);
}
function Mo(r, t) {
  return t == null ? null : si(t) ? NaN : r.parse(t);
}
function V0(r, t) {
  var e = r.type, n = sM(r, t, r.getExtent()).calculate();
  r.setBlank(n.isBlank);
  var i = n.min, a = n.max, o = t.ecModel;
  if (o && e === "time") {
    var s = O0("bar", o), u = !1;
    if (M(s, function(h) {
      u = u || h.getBaseAxis() === t.axis;
    }), u) {
      var l = R0(s), f = uM(i, a, t, l);
      i = f.min, a = f.max;
    }
  }
  return {
    extent: [i, a],
    // "fix" means "fixed", the value should not be
    // changed in the subsequent steps.
    fixMin: n.minFixed,
    fixMax: n.maxFixed
  };
}
function uM(r, t, e, n) {
  var i = e.axis.getExtent(), a = Math.abs(i[1] - i[0]), o = WA(n, e.axis);
  if (o === void 0)
    return {
      min: r,
      max: t
    };
  var s = 1 / 0;
  M(o, function(c) {
    s = Math.min(c.offset, s);
  });
  var u = -1 / 0;
  M(o, function(c) {
    u = Math.max(c.offset + c.width, u);
  }), s = Math.abs(s), u = Math.abs(u);
  var l = s + u, f = t - r, h = 1 - (s + u) / a, v = f / h - f;
  return t += v * (u / l), r -= v * (s / l), {
    min: r,
    max: t
  };
}
function Ff(r, t) {
  var e = t, n = V0(r, e), i = n.extent, a = e.get("splitNumber");
  r instanceof lc && (r.base = e.get("logBase"));
  var o = r.type, s = e.get("interval"), u = o === "interval" || o === "time";
  r.setExtent(i[0], i[1]), r.calcNiceExtent({
    splitNumber: a,
    fixMin: n.fixMin,
    fixMax: n.fixMax,
    minInterval: u ? e.get("minInterval") : null,
    maxInterval: u ? e.get("maxInterval") : null
  }), s != null && r.setInterval && r.setInterval(s);
}
function z0(r, t) {
  if (t = t || r.get("type"), t)
    switch (t) {
      // Buildin scale
      case "category":
        return new sc({
          ordinalMeta: r.getOrdinalMeta ? r.getOrdinalMeta() : r.getCategories(),
          extent: [1 / 0, -1 / 0]
        });
      case "time":
        return new B0({
          locale: r.ecModel.getLocaleModel(),
          useUTC: r.ecModel.get("useUTC")
        });
      default:
        return new (Ke.getClass(t) || pi)();
    }
}
function lM(r) {
  var t = r.scale.getExtent(), e = t[0], n = t[1];
  return !(e > 0 && n > 0 || e < 0 && n < 0);
}
function gi(r) {
  var t = r.getLabelModel().get("formatter"), e = r.type === "category" ? r.scale.getExtent()[0] : null;
  return r.scale.type === "time" ? /* @__PURE__ */ (function(n) {
    return function(i, a) {
      return r.scale.getFormattedLabel(i, a, n);
    };
  })(t) : W(t) ? /* @__PURE__ */ (function(n) {
    return function(i) {
      var a = r.scale.getLabel(i), o = n.replace("{value}", a ?? "");
      return o;
    };
  })(t) : Z(t) ? /* @__PURE__ */ (function(n) {
    return function(i, a) {
      return e != null && (a = i.value - e), n(fc(r, i), a, i.level != null ? {
        level: i.level
      } : null);
    };
  })(t) : function(n) {
    return r.scale.getLabel(n);
  };
}
function fc(r, t) {
  return r.type === "category" ? r.scale.getLabel(t) : t.value;
}
function fM(r) {
  var t = r.model, e = r.scale;
  if (!(!t.get(["axisLabel", "show"]) || e.isBlank())) {
    var n, i, a = e.getExtent();
    e instanceof sc ? i = e.count() : (n = e.getTicks(), i = n.length);
    var o = r.getLabelModel(), s = gi(r), u, l = 1;
    i > 40 && (l = Math.ceil(i / 40));
    for (var f = 0; f < i; f += l) {
      var h = n ? n[f] : {
        value: a[0] + f
      }, v = s(h, f), c = o.getTextRect(v), d = hM(c, o.get("rotate") || 0);
      u ? u.union(d) : u = d;
    }
    return u;
  }
}
function hM(r, t) {
  var e = t * Math.PI / 180, n = r.width, i = r.height, a = n * Math.abs(Math.cos(e)) + Math.abs(i * Math.sin(e)), o = n * Math.abs(Math.sin(e)) + Math.abs(i * Math.cos(e)), s = new st(r.x, r.y, a, o);
  return s;
}
function hc(r) {
  var t = r.get("interval");
  return t ?? "auto";
}
function G0(r) {
  return r.type === "category" && hc(r.getLabelModel()) === 0;
}
function cM(r, t) {
  var e = {};
  return M(r.mapDimensionsAll(t), function(n) {
    e[E0(r, n)] = !0;
  }), yt(e);
}
var H0 = (
  /** @class */
  (function() {
    function r() {
    }
    return r.prototype.getNeedCrossZero = function() {
      var t = this.option;
      return !t.scale;
    }, r.prototype.getCoordSysModel = function() {
    }, r;
  })()
);
function vM(r) {
  return hu(null, r);
}
var dM = {
  isDimensionStacked: Ln,
  enableDataStack: M0,
  getStackedDimension: E0
};
function pM(r, t) {
  var e = t;
  t instanceof gt || (e = new gt(t));
  var n = z0(e);
  return n.setExtent(r[0], r[1]), Ff(n, e), n;
}
function gM(r) {
  Ce(r, H0);
}
function yM(r, t) {
  return t = t || {}, vr(r, null, null, t.state !== "normal");
}
const mM = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createDimensions: wA,
  createList: vM,
  createScale: pM,
  createSymbol: In,
  createTextStyle: yM,
  dataStack: dM,
  enableHoverEmphasis: vs,
  getECData: at,
  getLayoutRect: Pn,
  mixinAxisModelCommonMethods: gM
}, Symbol.toStringTag, { value: "Module" }));
var yp = [], _M = {
  registerPreprocessor: ec,
  registerProcessor: rc,
  registerPostInit: y0,
  registerPostUpdate: m0,
  registerUpdateLifecycle: fu,
  registerAction: Rn,
  registerCoordinateSystem: _0,
  registerLayout: S0,
  registerVisual: Yr,
  registerTransform: w0,
  registerLoading: ic,
  registerMap: b0,
  registerImpl: BD,
  PRIORITY: u0,
  ComponentModel: it,
  ComponentView: oe,
  SeriesModel: ae,
  ChartView: Kt,
  // TODO Use ComponentModel and SeriesModel instead of Constructor
  registerComponentModel: function(r) {
    it.registerClass(r);
  },
  registerComponentView: function(r) {
    oe.registerClass(r);
  },
  registerSeriesModel: function(r) {
    ae.registerClass(r);
  },
  registerChartView: function(r) {
    Kt.registerClass(r);
  },
  registerSubTypeDefaulter: function(r, t) {
    it.registerSubTypeDefaulter(r, t);
  },
  registerPainter: function(r, t) {
    sy(r, t);
  }
};
function ke(r) {
  if (H(r)) {
    M(r, function(t) {
      ke(t);
    });
    return;
  }
  ht(yp, r) >= 0 || (yp.push(r), Z(r) && (r = {
    install: r
  }), r.install(_M));
}
var SM = 1e-8;
function mp(r, t) {
  return Math.abs(r - t) < SM;
}
function _p(r, t, e) {
  var n = 0, i = r[0];
  if (!i)
    return !1;
  for (var a = 1; a < r.length; a++) {
    var o = r[a];
    n += ar(i[0], i[1], o[0], o[1], t, e), i = o;
  }
  var s = r[0];
  return (!mp(i[0], s[0]) || !mp(i[1], s[1])) && (n += ar(i[0], i[1], s[0], s[1], t, e)), n !== 0;
}
var bM = [];
function Cl(r, t) {
  for (var e = 0; e < r.length; e++)
    Zt(r[e], r[e], t);
}
function Sp(r, t, e, n) {
  for (var i = 0; i < r.length; i++) {
    var a = r[i];
    n && (a = n.project(a)), a && isFinite(a[0]) && isFinite(a[1]) && (Mr(t, t, a), Er(e, e, a));
  }
}
function wM(r) {
  for (var t = 0, e = 0, n = 0, i = r.length, a = r[i - 1][0], o = r[i - 1][1], s = 0; s < i; s++) {
    var u = r[s][0], l = r[s][1], f = a * l - u * o;
    t += f, e += (a + u) * f, n += (o + l) * f, a = u, o = l;
  }
  return t ? [e / t / 3, n / t / 3, t] : [r[0][0] || 0, r[0][1] || 0];
}
var W0 = (
  /** @class */
  (function() {
    function r(t) {
      this.name = t;
    }
    return r.prototype.setCenter = function(t) {
      this._center = t;
    }, r.prototype.getCenter = function() {
      var t = this._center;
      return t || (t = this._center = this.calcCenter()), t;
    }, r;
  })()
), bp = (
  /** @class */
  /* @__PURE__ */ (function() {
    function r(t, e) {
      this.type = "polygon", this.exterior = t, this.interiors = e;
    }
    return r;
  })()
), wp = (
  /** @class */
  /* @__PURE__ */ (function() {
    function r(t) {
      this.type = "linestring", this.points = t;
    }
    return r;
  })()
), xM = (
  /** @class */
  (function(r) {
    z(t, r);
    function t(e, n, i) {
      var a = r.call(this, e) || this;
      return a.type = "geoJSON", a.geometries = n, a._center = i && [i[0], i[1]], a;
    }
    return t.prototype.calcCenter = function() {
      for (var e = this.geometries, n, i = 0, a = 0; a < e.length; a++) {
        var o = e[a], s = o.exterior, u = s && s.length;
        u > i && (n = o, i = u);
      }
      if (n)
        return wM(n.exterior);
      var l = this.getBoundingRect();
      return [l.x + l.width / 2, l.y + l.height / 2];
    }, t.prototype.getBoundingRect = function(e) {
      var n = this._rect;
      if (n && !e)
        return n;
      var i = [1 / 0, 1 / 0], a = [-1 / 0, -1 / 0], o = this.geometries;
      return M(o, function(s) {
        s.type === "polygon" ? Sp(s.exterior, i, a, e) : M(s.points, function(u) {
          Sp(u, i, a, e);
        });
      }), isFinite(i[0]) && isFinite(i[1]) && isFinite(a[0]) && isFinite(a[1]) || (i[0] = i[1] = a[0] = a[1] = 0), n = new st(i[0], i[1], a[0] - i[0], a[1] - i[1]), e || (this._rect = n), n;
    }, t.prototype.contain = function(e) {
      var n = this.getBoundingRect(), i = this.geometries;
      if (!n.contain(e[0], e[1]))
        return !1;
      t: for (var a = 0, o = i.length; a < o; a++) {
        var s = i[a];
        if (s.type === "polygon") {
          var u = s.exterior, l = s.interiors;
          if (_p(u, e[0], e[1])) {
            for (var f = 0; f < (l ? l.length : 0); f++)
              if (_p(l[f], e[0], e[1]))
                continue t;
            return !0;
          }
        }
      }
      return !1;
    }, t.prototype.transformTo = function(e, n, i, a) {
      var o = this.getBoundingRect(), s = o.width / o.height;
      i ? a || (a = i / s) : i = s * a;
      for (var u = new st(e, n, i, a), l = o.calculateTransform(u), f = this.geometries, h = 0; h < f.length; h++) {
        var v = f[h];
        v.type === "polygon" ? (Cl(v.exterior, l), M(v.interiors, function(c) {
          Cl(c, l);
        })) : M(v.points, function(c) {
          Cl(c, l);
        });
      }
      o = this._rect, o.copy(u), this._center = [o.x + o.width / 2, o.y + o.height / 2];
    }, t.prototype.cloneShallow = function(e) {
      e == null && (e = this.name);
      var n = new t(e, this.geometries, this._center);
      return n._rect = this._rect, n.transformTo = null, n;
    }, t;
  })(W0)
);
(function(r) {
  z(t, r);
  function t(e, n) {
    var i = r.call(this, e) || this;
    return i.type = "geoSVG", i._elOnlyForCalculate = n, i;
  }
  return t.prototype.calcCenter = function() {
    for (var e = this._elOnlyForCalculate, n = e.getBoundingRect(), i = [n.x + n.width / 2, n.y + n.height / 2], a = Ra(bM), o = e; o && !o.isGeoSVGGraphicRoot; )
      Fr(a, o.getLocalTransform(), a), o = o.parent;
    return Na(a, a), Zt(i, i, a), i;
  }, t;
})(W0);
function TM(r) {
  if (!r.UTF8Encoding)
    return r;
  var t = r, e = t.UTF8Scale;
  e == null && (e = 1024);
  var n = t.features;
  return M(n, function(i) {
    var a = i.geometry, o = a.encodeOffsets, s = a.coordinates;
    if (o)
      switch (a.type) {
        case "LineString":
          a.coordinates = U0(s, o, e);
          break;
        case "Polygon":
          Dl(s, o, e);
          break;
        case "MultiLineString":
          Dl(s, o, e);
          break;
        case "MultiPolygon":
          M(s, function(u, l) {
            return Dl(u, o[l], e);
          });
      }
  }), t.UTF8Encoding = !1, t;
}
function Dl(r, t, e) {
  for (var n = 0; n < r.length; n++)
    r[n] = U0(r[n], t[n], e);
}
function U0(r, t, e) {
  for (var n = [], i = t[0], a = t[1], o = 0; o < r.length; o += 2) {
    var s = r.charCodeAt(o) - 64, u = r.charCodeAt(o + 1) - 64;
    s = s >> 1 ^ -(s & 1), u = u >> 1 ^ -(u & 1), s += i, u += a, i = s, a = u, n.push([s / e, u / e]);
  }
  return n;
}
function xp(r, t) {
  return r = TM(r), U(Dt(r.features, function(e) {
    return e.geometry && e.properties && e.geometry.coordinates.length > 0;
  }), function(e) {
    var n = e.properties, i = e.geometry, a = [];
    switch (i.type) {
      case "Polygon":
        var o = i.coordinates;
        a.push(new bp(o[0], o.slice(1)));
        break;
      case "MultiPolygon":
        M(i.coordinates, function(u) {
          u[0] && a.push(new bp(u[0], u.slice(1)));
        });
        break;
      case "LineString":
        a.push(new wp([i.coordinates]));
        break;
      case "MultiLineString":
        a.push(new wp(i.coordinates));
    }
    var s = new xM(n[t || "name"], a, n.cp);
    return s.properties = n, s;
  });
}
const CM = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  MAX_SAFE_INTEGER: bb,
  asc: mb,
  getPercentWithPrecision: _b,
  getPixelPrecision: fy,
  getPrecision: Ye,
  getPrecisionSafe: ss,
  isNumeric: mh,
  isRadianAroundZero: _a,
  linearMap: os,
  nice: yh,
  numericToNumber: Sa,
  parseDate: xe,
  quantile: xb,
  quantity: cy,
  quantityExponent: Ba,
  reformIntervals: Tb,
  remRadian: gh,
  round: xt
}, Symbol.toStringTag, { value: "Module" })), DM = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  format: Ya,
  parse: xe
}, Symbol.toStringTag, { value: "Module" })), AM = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Arc: Ha,
  BezierCurve: Xs,
  BoundingRect: st,
  Circle: Ga,
  CompoundPath: Yy,
  Ellipse: Ws,
  Group: It,
  Image: dr,
  IncrementalDisplayable: $y,
  Line: cr,
  LinearGradient: Dh,
  Polygon: Ys,
  Polyline: vi,
  RadialGradient: qy,
  Rect: Tt,
  Ring: Us,
  Sector: gr,
  Text: Mt,
  clipPointsByRect: rm,
  clipRectByRect: nm,
  createIcon: $s,
  extendPath: jy,
  extendShape: Zy,
  getShapeClass: Ky,
  getTransform: tm,
  initProps: he,
  makeImage: Eh,
  makePath: qs,
  mergePath: Jy,
  registerShape: De,
  resizePath: Ph,
  updateProps: Wt
}, Symbol.toStringTag, { value: "Module" })), MM = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  addCommas: Fh,
  capitalFirst: dT,
  encodeHTML: qt,
  formatTime: vT,
  formatTpl: zh,
  getTextRect: cT,
  getTooltipMarker: ym,
  normalizeCssArray: Xa,
  toCamelCase: Vh,
  truncateText: ew
}, Symbol.toStringTag, { value: "Module" })), EM = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  bind: vt,
  clone: nt,
  curry: St,
  defaults: ut,
  each: M,
  extend: F,
  filter: Dt,
  indexOf: ht,
  inherits: ih,
  isArray: H,
  isFunction: Z,
  isObject: Y,
  isString: W,
  map: U,
  merge: ot,
  reduce: $e
}, Symbol.toStringTag, { value: "Module" }));
var Pa = Ct();
function Y0(r, t) {
  var e = U(t, function(n) {
    return r.scale.parse(n);
  });
  return r.type === "time" && e.length > 0 && (e.sort(), e.unshift(e[0]), e.push(e[e.length - 1])), e;
}
function PM(r) {
  var t = r.getLabelModel().get("customValues");
  if (t) {
    var e = gi(r), n = r.scale.getExtent(), i = Y0(r, t), a = Dt(i, function(o) {
      return o >= n[0] && o <= n[1];
    });
    return {
      labels: U(a, function(o) {
        var s = {
          value: o
        };
        return {
          formattedLabel: e(s),
          rawLabel: r.scale.getLabel(s),
          tickValue: o
        };
      })
    };
  }
  return r.type === "category" ? LM(r) : RM(r);
}
function IM(r, t) {
  var e = r.getTickModel().get("customValues");
  if (e) {
    var n = r.scale.getExtent(), i = Y0(r, e);
    return {
      ticks: Dt(i, function(a) {
        return a >= n[0] && a <= n[1];
      })
    };
  }
  return r.type === "category" ? OM(r, t) : {
    ticks: U(r.scale.getTicks(), function(a) {
      return a.value;
    })
  };
}
function LM(r) {
  var t = r.getLabelModel(), e = X0(r, t);
  return !t.get("show") || r.scale.isBlank() ? {
    labels: [],
    labelCategoryInterval: e.labelCategoryInterval
  } : e;
}
function X0(r, t) {
  var e = q0(r, "labels"), n = hc(t), i = $0(e, n);
  if (i)
    return i;
  var a, o;
  return Z(n) ? a = K0(r, n) : (o = n === "auto" ? NM(r) : n, a = j0(r, o)), Z0(e, n, {
    labels: a,
    labelCategoryInterval: o
  });
}
function OM(r, t) {
  var e = q0(r, "ticks"), n = hc(t), i = $0(e, n);
  if (i)
    return i;
  var a, o;
  if ((!t.get("show") || r.scale.isBlank()) && (a = []), Z(n))
    a = K0(r, n, !0);
  else if (n === "auto") {
    var s = X0(r, r.getLabelModel());
    o = s.labelCategoryInterval, a = U(s.labels, function(u) {
      return u.tickValue;
    });
  } else
    o = n, a = j0(r, o, !0);
  return Z0(e, n, {
    ticks: a,
    tickCategoryInterval: o
  });
}
function RM(r) {
  var t = r.scale.getTicks(), e = gi(r);
  return {
    labels: U(t, function(n, i) {
      return {
        level: n.level,
        formattedLabel: e(n, i),
        rawLabel: r.scale.getLabel(n),
        tickValue: n.value
      };
    })
  };
}
function q0(r, t) {
  return Pa(r)[t] || (Pa(r)[t] = []);
}
function $0(r, t) {
  for (var e = 0; e < r.length; e++)
    if (r[e].key === t)
      return r[e].value;
}
function Z0(r, t, e) {
  return r.push({
    key: t,
    value: e
  }), e;
}
function NM(r) {
  var t = Pa(r).autoInterval;
  return t ?? (Pa(r).autoInterval = r.calculateCategoryInterval());
}
function kM(r) {
  var t = BM(r), e = gi(r), n = (t.axisRotate - t.labelRotate) / 180 * Math.PI, i = r.scale, a = i.getExtent(), o = i.count();
  if (a[1] - a[0] < 1)
    return 0;
  var s = 1;
  o > 40 && (s = Math.max(1, Math.floor(o / 40)));
  for (var u = a[0], l = r.dataToCoord(u + 1) - r.dataToCoord(u), f = Math.abs(l * Math.cos(n)), h = Math.abs(l * Math.sin(n)), v = 0, c = 0; u <= a[1]; u += s) {
    var d = 0, p = 0, g = dh(e({
      value: u
    }), t.font, "center", "top");
    d = g.width * 1.3, p = g.height * 1.3, v = Math.max(v, d, 7), c = Math.max(c, p, 7);
  }
  var y = v / f, m = c / h;
  isNaN(y) && (y = 1 / 0), isNaN(m) && (m = 1 / 0);
  var _ = Math.max(0, Math.floor(Math.min(y, m))), S = Pa(r.model), w = r.getExtent(), b = S.lastAutoInterval, x = S.lastTickCount;
  return b != null && x != null && Math.abs(b - _) <= 1 && Math.abs(x - o) <= 1 && b > _ && S.axisExtent0 === w[0] && S.axisExtent1 === w[1] ? _ = b : (S.lastTickCount = o, S.lastAutoInterval = _, S.axisExtent0 = w[0], S.axisExtent1 = w[1]), _;
}
function BM(r) {
  var t = r.getLabelModel();
  return {
    axisRotate: r.getRotate ? r.getRotate() : r.isHorizontal && !r.isHorizontal() ? 90 : 0,
    labelRotate: t.get("rotate") || 0,
    font: t.getFont()
  };
}
function j0(r, t, e) {
  var n = gi(r), i = r.scale, a = i.getExtent(), o = r.getLabelModel(), s = [], u = Math.max((t || 0) + 1, 1), l = a[0], f = i.count();
  l !== 0 && u > 1 && f / u > 2 && (l = Math.round(Math.ceil(l / u) * u));
  var h = G0(r), v = o.get("showMinLabel") || h, c = o.get("showMaxLabel") || h;
  v && l !== a[0] && p(a[0]);
  for (var d = l; d <= a[1]; d += u)
    p(d);
  c && d - u !== a[1] && p(a[1]);
  function p(g) {
    var y = {
      value: g
    };
    s.push(e ? g : {
      formattedLabel: n(y),
      rawLabel: i.getLabel(y),
      tickValue: g
    });
  }
  return s;
}
function K0(r, t, e) {
  var n = r.scale, i = gi(r), a = [];
  return M(n.getTicks(), function(o) {
    var s = n.getLabel(o), u = o.value;
    t(o.value, s) && a.push(e ? u : {
      formattedLabel: i(o),
      rawLabel: s,
      tickValue: u
    });
  }), a;
}
var Tp = [0, 1], Q0 = (
  /** @class */
  (function() {
    function r(t, e, n) {
      this.onBand = !1, this.inverse = !1, this.dim = t, this.scale = e, this._extent = n || [0, 0];
    }
    return r.prototype.contain = function(t) {
      var e = this._extent, n = Math.min(e[0], e[1]), i = Math.max(e[0], e[1]);
      return t >= n && t <= i;
    }, r.prototype.containData = function(t) {
      return this.scale.contain(t);
    }, r.prototype.getExtent = function() {
      return this._extent.slice();
    }, r.prototype.getPixelPrecision = function(t) {
      return fy(t || this.scale.getExtent(), this._extent);
    }, r.prototype.setExtent = function(t, e) {
      var n = this._extent;
      n[0] = t, n[1] = e;
    }, r.prototype.dataToCoord = function(t, e) {
      var n = this._extent, i = this.scale;
      return t = i.normalize(t), this.onBand && i.type === "ordinal" && (n = n.slice(), Cp(n, i.count())), os(t, Tp, n, e);
    }, r.prototype.coordToData = function(t, e) {
      var n = this._extent, i = this.scale;
      this.onBand && i.type === "ordinal" && (n = n.slice(), Cp(n, i.count()));
      var a = os(t, n, Tp, e);
      return this.scale.scale(a);
    }, r.prototype.pointToData = function(t, e) {
    }, r.prototype.getTicksCoords = function(t) {
      t = t || {};
      var e = t.tickModel || this.getTickModel(), n = IM(this, e), i = n.ticks, a = U(i, function(s) {
        return {
          coord: this.dataToCoord(this.scale.type === "ordinal" ? this.scale.getRawOrdinalNumber(s) : s),
          tickValue: s
        };
      }, this), o = e.get("alignWithLabel");
      return FM(this, a, o, t.clamp), a;
    }, r.prototype.getMinorTicksCoords = function() {
      if (this.scale.type === "ordinal")
        return [];
      var t = this.model.getModel("minorTick"), e = t.get("splitNumber");
      e > 0 && e < 100 || (e = 5);
      var n = this.scale.getMinorTicks(e), i = U(n, function(a) {
        return U(a, function(o) {
          return {
            coord: this.dataToCoord(o),
            tickValue: o
          };
        }, this);
      }, this);
      return i;
    }, r.prototype.getViewLabels = function() {
      return PM(this).labels;
    }, r.prototype.getLabelModel = function() {
      return this.model.getModel("axisLabel");
    }, r.prototype.getTickModel = function() {
      return this.model.getModel("axisTick");
    }, r.prototype.getBandWidth = function() {
      var t = this._extent, e = this.scale.getExtent(), n = e[1] - e[0] + (this.onBand ? 1 : 0);
      n === 0 && (n = 1);
      var i = Math.abs(t[1] - t[0]);
      return Math.abs(i) / n;
    }, r.prototype.calculateCategoryInterval = function() {
      return kM(this);
    }, r;
  })()
);
function Cp(r, t) {
  var e = r[1] - r[0], n = t, i = e / n / 2;
  r[0] += i, r[1] -= i;
}
function FM(r, t, e, n) {
  var i = t.length;
  if (!r.onBand || e || !i)
    return;
  var a = r.getExtent(), o, s;
  if (i === 1)
    t[0].coord = a[0], o = t[1] = {
      coord: a[1],
      tickValue: t[0].tickValue
    };
  else {
    var u = t[i - 1].tickValue - t[0].tickValue, l = (t[i - 1].coord - t[0].coord) / u;
    M(t, function(c) {
      c.coord -= l / 2;
    });
    var f = r.scale.getExtent();
    s = 1 + f[1] - t[i - 1].tickValue, o = {
      coord: t[i - 1].coord + l * s,
      tickValue: f[1] + 1
    }, t.push(o);
  }
  var h = a[0] > a[1];
  v(t[0].coord, a[0]) && (n ? t[0].coord = a[0] : t.shift()), n && v(a[0], t[0].coord) && t.unshift({
    coord: a[0]
  }), v(a[1], o.coord) && (n ? o.coord = a[1] : t.pop()), n && v(o.coord, a[1]) && t.push({
    coord: a[1]
  });
  function v(c, d) {
    return c = xt(c), d = xt(d), h ? c > d : c < d;
  }
}
function VM(r) {
  var t = it.extend(r);
  return it.registerClass(t), t;
}
function zM(r) {
  var t = oe.extend(r);
  return oe.registerClass(t), t;
}
function GM(r) {
  var t = ae.extend(r);
  return ae.registerClass(t), t;
}
function HM(r) {
  var t = Kt.extend(r);
  return Kt.registerClass(t), t;
}
function J0(r, t, e, n, i, a, o, s) {
  var u = i - r, l = a - t, f = e - r, h = n - t, v = Math.sqrt(f * f + h * h);
  f /= v, h /= v;
  var c = u * f + l * h, d = c / v;
  d *= v;
  var p = o[0] = r + d * f, g = o[1] = t + d * h;
  return Math.sqrt((p - i) * (p - i) + (g - a) * (g - a));
}
var Lr = new j(), bt = new j(), Ot = new j(), Or = new j(), Ue = new j(), Is = [], Xt = new j();
function WM(r, t) {
  if (t <= 180 && t > 0) {
    t = t / 180 * Math.PI, Lr.fromArray(r[0]), bt.fromArray(r[1]), Ot.fromArray(r[2]), j.sub(Or, Lr, bt), j.sub(Ue, Ot, bt);
    var e = Or.len(), n = Ue.len();
    if (!(e < 1e-3 || n < 1e-3)) {
      Or.scale(1 / e), Ue.scale(1 / n);
      var i = Or.dot(Ue), a = Math.cos(t);
      if (a < i) {
        var o = J0(bt.x, bt.y, Ot.x, Ot.y, Lr.x, Lr.y, Is);
        Xt.fromArray(Is), Xt.scaleAndAdd(Ue, o / Math.tan(Math.PI - t));
        var s = Ot.x !== bt.x ? (Xt.x - bt.x) / (Ot.x - bt.x) : (Xt.y - bt.y) / (Ot.y - bt.y);
        if (isNaN(s))
          return;
        s < 0 ? j.copy(Xt, bt) : s > 1 && j.copy(Xt, Ot), Xt.toArray(r[1]);
      }
    }
  }
}
function UM(r, t, e) {
  if (e <= 180 && e > 0) {
    e = e / 180 * Math.PI, Lr.fromArray(r[0]), bt.fromArray(r[1]), Ot.fromArray(r[2]), j.sub(Or, bt, Lr), j.sub(Ue, Ot, bt);
    var n = Or.len(), i = Ue.len();
    if (!(n < 1e-3 || i < 1e-3)) {
      Or.scale(1 / n), Ue.scale(1 / i);
      var a = Or.dot(t), o = Math.cos(e);
      if (a < o) {
        var s = J0(bt.x, bt.y, Ot.x, Ot.y, Lr.x, Lr.y, Is);
        Xt.fromArray(Is);
        var u = Math.PI / 2, l = Math.acos(Ue.dot(t)), f = u + l - e;
        if (f >= u)
          j.copy(Xt, Ot);
        else {
          Xt.scaleAndAdd(Ue, s / Math.tan(Math.PI / 2 - f));
          var h = Ot.x !== bt.x ? (Xt.x - bt.x) / (Ot.x - bt.x) : (Xt.y - bt.y) / (Ot.y - bt.y);
          if (isNaN(h))
            return;
          h < 0 ? j.copy(Xt, bt) : h > 1 && j.copy(Xt, Ot);
        }
        Xt.toArray(r[1]);
      }
    }
  }
}
function Al(r, t, e, n) {
  var i = e === "normal", a = i ? r : r.ensureState(e);
  a.ignore = t;
  var o = n.get("smooth");
  o && o === !0 && (o = 0.3), a.shape = a.shape || {}, o > 0 && (a.shape.smooth = o);
  var s = n.getModel("lineStyle").getLineStyle();
  i ? r.useStyle(s) : a.style = s;
}
function YM(r, t) {
  var e = t.smooth, n = t.points;
  if (n)
    if (r.moveTo(n[0][0], n[0][1]), e > 0 && n.length >= 3) {
      var i = Ko(n[0], n[1]), a = Ko(n[1], n[2]);
      if (!i || !a) {
        r.lineTo(n[1][0], n[1][1]), r.lineTo(n[2][0], n[2][1]);
        return;
      }
      var o = Math.min(i, a) * e, s = ko([], n[1], n[0], o / i), u = ko([], n[1], n[2], o / a), l = ko([], s, u, 0.5);
      r.bezierCurveTo(s[0], s[1], s[0], s[1], l[0], l[1]), r.bezierCurveTo(u[0], u[1], u[0], u[1], n[2][0], n[2][1]);
    } else
      for (var f = 1; f < n.length; f++)
        r.lineTo(n[f][0], n[f][1]);
}
function XM(r, t, e) {
  var n = r.getTextGuideLine(), i = r.getTextContent();
  if (!i) {
    n && r.removeTextGuideLine();
    return;
  }
  for (var a = t.normal, o = a.get("show"), s = i.ignore, u = 0; u < fs.length; u++) {
    var l = fs[u], f = t[l], h = l === "normal";
    if (f) {
      var v = f.get("show"), c = h ? s : K(i.states[l] && i.states[l].ignore, s);
      if (c || !K(v, o)) {
        var d = h ? n : n && n.states[l];
        d && (d.ignore = !0), n && Al(n, !0, l, f);
        continue;
      }
      n || (n = new vi(), r.setTextGuideLine(n), !h && (s || !o) && Al(n, !0, "normal", t.normal), r.stateProxy && (n.stateProxy = r.stateProxy)), Al(n, !1, l, f);
    }
  }
  if (n) {
    ut(n.style, e), n.style.fill = null;
    var p = a.get("showAbove"), g = r.textGuideLineConfig = r.textGuideLineConfig || {};
    g.showAbove = p || !1, n.buildPath = YM;
  }
}
function qM(r, t) {
  t = t || "labelLine";
  for (var e = {
    normal: r.getModel(t)
  }, n = 0; n < Te.length; n++) {
    var i = Te[n];
    e[i] = r.getModel([i, t]);
  }
  return e;
}
function $M(r) {
  for (var t = [], e = 0; e < r.length; e++) {
    var n = r[e];
    if (!n.defaultAttr.ignore) {
      var i = n.label, a = i.getComputedTransform(), o = i.getBoundingRect(), s = !a || a[1] < 1e-5 && a[2] < 1e-5, u = i.style.margin || 0, l = o.clone();
      l.applyTransform(a), l.x -= u / 2, l.y -= u / 2, l.width += u, l.height += u;
      var f = s ? new ps(o, a) : null;
      t.push({
        label: i,
        labelLine: n.labelLine,
        rect: l,
        localRect: o,
        obb: f,
        priority: n.priority,
        defaultAttr: n.defaultAttr,
        layoutOption: n.computedLayoutOption,
        axisAligned: s,
        transform: a
      });
    }
  }
  return t;
}
function ZM(r, t, e, n, i, a) {
  var o = r.length;
  if (o < 2)
    return;
  r.sort(function(b, x) {
    return b.rect[t] - x.rect[t];
  });
  for (var s = 0, u, l = !1, f = 0; f < o; f++) {
    var h = r[f], v = h.rect;
    u = v[t] - s, u < 0 && (v[t] -= u, h.label[t] -= u, l = !0), s = v[t] + v[e];
  }
  var c = r[0], d = r[o - 1], p, g;
  y(), p < 0 && S(-p, 0.8), g < 0 && S(g, 0.8), y(), m(p, g, 1), m(g, p, -1), y(), p < 0 && w(-p), g < 0 && w(g);
  function y() {
    p = c.rect[t] - n, g = i - d.rect[t] - d.rect[e];
  }
  function m(b, x, T) {
    if (b < 0) {
      var D = Math.min(x, -b);
      if (D > 0) {
        _(D * T, 0, o);
        var A = D + b;
        A < 0 && S(-A * T, 1);
      } else
        S(-b * T, 1);
    }
  }
  function _(b, x, T) {
    b !== 0 && (l = !0);
    for (var D = x; D < T; D++) {
      var A = r[D], C = A.rect;
      C[t] += b, A.label[t] += b;
    }
  }
  function S(b, x) {
    for (var T = [], D = 0, A = 1; A < o; A++) {
      var C = r[A - 1].rect, E = Math.max(r[A].rect[t] - C[t] - C[e], 0);
      T.push(E), D += E;
    }
    if (D) {
      var P = Math.min(Math.abs(b) / D, x);
      if (b > 0)
        for (var A = 0; A < o - 1; A++) {
          var L = T[A] * P;
          _(L, 0, A + 1);
        }
      else
        for (var A = o - 1; A > 0; A--) {
          var L = T[A - 1] * P;
          _(-L, A, o);
        }
    }
  }
  function w(b) {
    var x = b < 0 ? -1 : 1;
    b = Math.abs(b);
    for (var T = Math.ceil(b / (o - 1)), D = 0; D < o - 1; D++)
      if (x > 0 ? _(T, 0, D + 1) : _(-T, o - D - 1, o), b -= T, b <= 0)
        return;
  }
  return l;
}
function jM(r, t, e, n) {
  return ZM(r, "y", "height", t, e);
}
function KM(r) {
  var t = [];
  r.sort(function(p, g) {
    return g.priority - p.priority;
  });
  var e = new st(0, 0, 0, 0);
  function n(p) {
    if (!p.ignore) {
      var g = p.ensureState("emphasis");
      g.ignore == null && (g.ignore = !1);
    }
    p.ignore = !0;
  }
  for (var i = 0; i < r.length; i++) {
    var a = r[i], o = a.axisAligned, s = a.localRect, u = a.transform, l = a.label, f = a.labelLine;
    e.copy(a.rect), e.width -= 0.1, e.height -= 0.1, e.x += 0.05, e.y += 0.05;
    for (var h = a.obb, v = !1, c = 0; c < t.length; c++) {
      var d = t[c];
      if (e.intersect(d.rect)) {
        if (o && d.axisAligned) {
          v = !0;
          break;
        }
        if (d.obb || (d.obb = new ps(d.localRect, d.transform)), h || (h = new ps(s, u)), h.intersect(d.obb)) {
          v = !0;
          break;
        }
      }
    }
    v ? (n(l), f && n(f)) : (l.attr("ignore", a.defaultAttr.ignore), f && f.attr("ignore", a.defaultAttr.labelGuideIgnore), t.push(a));
  }
}
const cc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Axis: Q0,
  ChartView: Kt,
  ComponentModel: it,
  ComponentView: oe,
  List: ac,
  Model: gt,
  PRIORITY: u0,
  SeriesModel: ae,
  color: FS,
  connect: nA,
  dataTool: fA,
  dependencies: VD,
  disConnect: iA,
  disconnect: g0,
  dispose: aA,
  env: $,
  extendChartView: HM,
  extendComponentModel: VM,
  extendComponentView: zM,
  extendSeriesModel: GM,
  format: MM,
  getCoordinateSystemDimensions: sA,
  getInstanceByDom: Jh,
  getInstanceById: oA,
  getMap: lA,
  graphic: AM,
  helper: mM,
  init: rA,
  innerDrawElementOnCanvas: Zh,
  matrix: cS,
  number: CM,
  parseGeoJSON: xp,
  parseGeoJson: xp,
  registerAction: Rn,
  registerCoordinateSystem: _0,
  registerLayout: S0,
  registerLoading: ic,
  registerLocale: Rh,
  registerMap: b0,
  registerPostInit: y0,
  registerPostUpdate: m0,
  registerPreprocessor: ec,
  registerProcessor: rc,
  registerTheme: tc,
  registerTransform: w0,
  registerUpdateLifecycle: fu,
  registerVisual: Yr,
  setCanvasCreator: uA,
  setPlatformAPI: Mg,
  throttle: uu,
  time: DM,
  use: ke,
  util: EM,
  vector: j1,
  version: FD,
  zrUtil: z1,
  zrender: gb
}, Symbol.toStringTag, { value: "Module" }));
var QM = (
  /** @class */
  (function(r) {
    z(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e.hasSymbolVisual = !0, e;
    }
    return t.prototype.getInitialData = function(e) {
      if (process.env.NODE_ENV !== "production") {
        var n = e.coordinateSystem;
        if (n !== "polar" && n !== "cartesian2d")
          throw new Error("Line not support coordinateSystem besides cartesian and polar");
      }
      return hu(null, this, {
        useEncodeDefaulter: !0
      });
    }, t.prototype.getLegendIcon = function(e) {
      var n = new It(), i = In("line", 0, e.itemHeight / 2, e.itemWidth, 0, e.lineStyle.stroke, !1);
      n.add(i), i.setStyle(e.lineStyle);
      var a = this.getData().getVisual("symbol"), o = this.getData().getVisual("symbolRotate"), s = a === "none" ? "circle" : a, u = e.itemHeight * 0.8, l = In(s, (e.itemWidth - u) / 2, (e.itemHeight - u) / 2, u, u, e.itemStyle.fill);
      n.add(l), l.setStyle(e.itemStyle);
      var f = e.iconRotate === "inherit" ? o : e.iconRotate || 0;
      return l.rotation = f * Math.PI / 180, l.setOrigin([e.itemWidth / 2, e.itemHeight / 2]), s.indexOf("empty") > -1 && (l.style.stroke = l.style.fill, l.style.fill = "#fff", l.style.lineWidth = 2), n;
    }, t.type = "series.line", t.dependencies = ["grid", "polar"], t.defaultOption = {
      // zlevel: 0,
      z: 3,
      coordinateSystem: "cartesian2d",
      legendHoverLink: !0,
      clip: !0,
      label: {
        position: "top"
      },
      // itemStyle: {
      // },
      endLabel: {
        show: !1,
        valueAnimation: !0,
        distance: 8
      },
      lineStyle: {
        width: 2,
        type: "solid"
      },
      emphasis: {
        scale: !0
      },
      // areaStyle: {
      // origin of areaStyle. Valid values:
      // `'auto'/null/undefined`: from axisLine to data
      // `'start'`: from min to data
      // `'end'`: from data to max
      // origin: 'auto'
      // },
      // false, 'start', 'end', 'middle'
      step: !1,
      // Disabled if step is true
      smooth: !1,
      smoothMonotone: null,
      symbol: "emptyCircle",
      symbolSize: 4,
      symbolRotate: null,
      showSymbol: !0,
      // `false`: follow the label interval strategy.
      // `true`: show all symbols.
      // `'auto'`: If possible, show all symbols, otherwise
      //           follow the label interval strategy.
      showAllSymbol: "auto",
      // Whether to connect break point.
      connectNulls: !1,
      // Sampling for large data. Can be: 'average', 'max', 'min', 'sum', 'lttb'.
      sampling: "none",
      animationEasing: "linear",
      // Disable progressive
      progressive: 0,
      hoverLayerThreshold: 1 / 0,
      universalTransition: {
        divideShape: "clone"
      },
      triggerLineEvent: !1
    }, t;
  })(ae)
);
function vc(r, t) {
  var e = r.mapDimensionsAll("defaultedLabel"), n = e.length;
  if (n === 1) {
    var i = hi(r, t, e[0]);
    return i != null ? i + "" : null;
  } else if (n) {
    for (var a = [], o = 0; o < e.length; o++)
      a.push(hi(r, t, e[o]));
    return a.join(" ");
  }
}
function t_(r, t) {
  var e = r.mapDimensionsAll("defaultedLabel");
  if (!H(t))
    return t + "";
  for (var n = [], i = 0; i < e.length; i++) {
    var a = r.getDimensionIndex(e[i]);
    a >= 0 && n.push(t[a]);
  }
  return n.join(" ");
}
var dc = (
  /** @class */
  (function(r) {
    z(t, r);
    function t(e, n, i, a) {
      var o = r.call(this) || this;
      return o.updateData(e, n, i, a), o;
    }
    return t.prototype._createSymbol = function(e, n, i, a, o) {
      this.removeAll();
      var s = In(e, -1, -1, 2, 2, null, o);
      s.attr({
        z2: 100,
        culling: !0,
        scaleX: a[0] / 2,
        scaleY: a[1] / 2
      }), s.drift = JM, this._symbolType = e, this.add(s);
    }, t.prototype.stopSymbolAnimation = function(e) {
      this.childAt(0).stopAnimation(null, e);
    }, t.prototype.getSymbolType = function() {
      return this._symbolType;
    }, t.prototype.getSymbolPath = function() {
      return this.childAt(0);
    }, t.prototype.highlight = function() {
      hs(this.childAt(0));
    }, t.prototype.downplay = function() {
      cs(this.childAt(0));
    }, t.prototype.setZ = function(e, n) {
      var i = this.childAt(0);
      i.zlevel = e, i.z = n;
    }, t.prototype.setDraggable = function(e, n) {
      var i = this.childAt(0);
      i.draggable = e, i.cursor = !n && e ? "move" : i.cursor;
    }, t.prototype.updateData = function(e, n, i, a) {
      this.silent = !1;
      var o = e.getItemVisual(n, "symbol") || "circle", s = e.hostModel, u = t.getSymbolSize(e, n), l = o !== this._symbolType, f = a && a.disableAnimation;
      if (l) {
        var h = e.getItemVisual(n, "symbolKeepAspect");
        this._createSymbol(o, e, n, u, h);
      } else {
        var v = this.childAt(0);
        v.silent = !1;
        var c = {
          scaleX: u[0] / 2,
          scaleY: u[1] / 2
        };
        f ? v.attr(c) : Wt(v, c, s, n), Mh(v);
      }
      if (this._updateCommon(e, n, u, i, a), l) {
        var v = this.childAt(0);
        if (!f) {
          var c = {
            scaleX: this._sizeX,
            scaleY: this._sizeY,
            style: {
              // Always fadeIn. Because it has fadeOut animation when symbol is removed..
              opacity: v.style.opacity
            }
          };
          v.scaleX = v.scaleY = 0, v.style.opacity = 0, he(v, c, s, n);
        }
      }
      f && this.childAt(0).stopAnimation("leave");
    }, t.prototype._updateCommon = function(e, n, i, a, o) {
      var s = this.childAt(0), u = e.hostModel, l, f, h, v, c, d, p, g, y;
      if (a && (l = a.emphasisItemStyle, f = a.blurItemStyle, h = a.selectItemStyle, v = a.focus, c = a.blurScope, p = a.labelStatesModels, g = a.hoverScale, y = a.cursorStyle, d = a.emphasisDisabled), !a || e.hasItemOption) {
        var m = a && a.itemModel ? a.itemModel : e.getItemModel(n), _ = m.getModel("emphasis");
        l = _.getModel("itemStyle").getItemStyle(), h = m.getModel(["select", "itemStyle"]).getItemStyle(), f = m.getModel(["blur", "itemStyle"]).getItemStyle(), v = _.get("focus"), c = _.get("blurScope"), d = _.get("disabled"), p = Ua(m), g = _.getShallow("scale"), y = m.getShallow("cursor");
      }
      var S = e.getItemVisual(n, "symbolRotate");
      s.attr("rotation", (S || 0) * Math.PI / 180 || 0);
      var w = Km(e.getItemVisual(n, "symbolOffset"), i);
      w && (s.x = w[0], s.y = w[1]), y && s.attr("cursor", y);
      var b = e.getItemVisual(n, "style"), x = b.fill;
      if (s instanceof dr) {
        var T = s.style;
        s.useStyle(F({
          // TODO other properties like x, y ?
          image: T.image,
          x: T.x,
          y: T.y,
          width: T.width,
          height: T.height
        }, b));
      } else
        s.__isEmptyBrush ? s.useStyle(F({}, b)) : s.useStyle(b), s.style.decal = null, s.setColor(x, o && o.symbolInnerColor), s.style.strokeNoScale = !0;
      var D = e.getItemVisual(n, "liftZ"), A = this._z2;
      D != null ? A == null && (this._z2 = s.z2, s.z2 += D) : A != null && (s.z2 = A, this._z2 = null);
      var C = o && o.useNameLabel;
      Wa(s, p, {
        labelFetcher: u,
        labelDataIndex: n,
        defaultText: E,
        inheritColor: x,
        defaultOpacity: b.opacity
      });
      function E(O) {
        return C ? e.getName(O) : vc(e, O);
      }
      this._sizeX = i[0] / 2, this._sizeY = i[1] / 2;
      var P = s.ensureState("emphasis");
      P.style = l, s.ensureState("select").style = h, s.ensureState("blur").style = f;
      var L = g == null || g === !0 ? Math.max(1.1, 3 / this._sizeY) : isFinite(g) && g > 0 ? +g : 1;
      P.scaleX = this._sizeX * L, P.scaleY = this._sizeY * L, this.setSymbolScale(1), wa(this, v, c, d);
    }, t.prototype.setSymbolScale = function(e) {
      this.scaleX = this.scaleY = e;
    }, t.prototype.fadeOut = function(e, n, i) {
      var a = this.childAt(0), o = at(this).dataIndex, s = i && i.animation;
      if (this.silent = a.silent = !0, i && i.fadeLabel) {
        var u = a.getTextContent();
        u && gs(u, {
          style: {
            opacity: 0
          }
        }, n, {
          dataIndex: o,
          removeOpt: s,
          cb: function() {
            a.removeTextContent();
          }
        });
      } else
        a.removeTextContent();
      gs(a, {
        style: {
          opacity: 0
        },
        scaleX: 0,
        scaleY: 0
      }, n, {
        dataIndex: o,
        cb: e,
        removeOpt: s
      });
    }, t.getSymbolSize = function(e, n) {
      return SD(e.getItemVisual(n, "symbolSize"));
    }, t;
  })(It)
);
function JM(r, t) {
  this.parent.drift(r, t);
}
function Ml(r, t, e, n) {
  return t && !isNaN(t[0]) && !isNaN(t[1]) && !(n.isIgnore && n.isIgnore(e)) && !(n.clipShape && !n.clipShape.contain(t[0], t[1])) && r.getItemVisual(e, "symbol") !== "none";
}
function Dp(r) {
  return r != null && !Y(r) && (r = {
    isIgnore: r
  }), r || {};
}
function Ap(r) {
  var t = r.hostModel, e = t.getModel("emphasis");
  return {
    emphasisItemStyle: e.getModel("itemStyle").getItemStyle(),
    blurItemStyle: t.getModel(["blur", "itemStyle"]).getItemStyle(),
    selectItemStyle: t.getModel(["select", "itemStyle"]).getItemStyle(),
    focus: e.get("focus"),
    blurScope: e.get("blurScope"),
    emphasisDisabled: e.get("disabled"),
    hoverScale: e.get("scale"),
    labelStatesModels: Ua(t),
    cursorStyle: t.get("cursor")
  };
}
var tE = (
  /** @class */
  (function() {
    function r(t) {
      this.group = new It(), this._SymbolCtor = t || dc;
    }
    return r.prototype.updateData = function(t, e) {
      this._progressiveEls = null, e = Dp(e);
      var n = this.group, i = t.hostModel, a = this._data, o = this._SymbolCtor, s = e.disableAnimation, u = Ap(t), l = {
        disableAnimation: s
      }, f = e.getSymbolPoint || function(h) {
        return t.getItemLayout(h);
      };
      a || n.removeAll(), t.diff(a).add(function(h) {
        var v = f(h);
        if (Ml(t, v, h, e)) {
          var c = new o(t, h, u, l);
          c.setPosition(v), t.setItemGraphicEl(h, c), n.add(c);
        }
      }).update(function(h, v) {
        var c = a.getItemGraphicEl(v), d = f(h);
        if (!Ml(t, d, h, e)) {
          n.remove(c);
          return;
        }
        var p = t.getItemVisual(h, "symbol") || "circle", g = c && c.getSymbolType && c.getSymbolType();
        if (!c || g && g !== p)
          n.remove(c), c = new o(t, h, u, l), c.setPosition(d);
        else {
          c.updateData(t, h, u, l);
          var y = {
            x: d[0],
            y: d[1]
          };
          s ? c.attr(y) : Wt(c, y, i);
        }
        n.add(c), t.setItemGraphicEl(h, c);
      }).remove(function(h) {
        var v = a.getItemGraphicEl(h);
        v && v.fadeOut(function() {
          n.remove(v);
        }, i);
      }).execute(), this._getSymbolPoint = f, this._data = t;
    }, r.prototype.updateLayout = function() {
      var t = this, e = this._data;
      e && e.eachItemGraphicEl(function(n, i) {
        var a = t._getSymbolPoint(i);
        n.setPosition(a), n.markRedraw();
      });
    }, r.prototype.incrementalPrepareUpdate = function(t) {
      this._seriesScope = Ap(t), this._data = null, this.group.removeAll();
    }, r.prototype.incrementalUpdate = function(t, e, n) {
      this._progressiveEls = [], n = Dp(n);
      function i(u) {
        u.isGroup || (u.incremental = !0, u.ensureState("emphasis").hoverLayer = !0);
      }
      for (var a = t.start; a < t.end; a++) {
        var o = e.getItemLayout(a);
        if (Ml(e, o, a, n)) {
          var s = new this._SymbolCtor(e, a, this._seriesScope);
          s.traverse(i), s.setPosition(o), this.group.add(s), e.setItemGraphicEl(a, s), this._progressiveEls.push(s);
        }
      }
    }, r.prototype.eachRendered = function(t) {
      js(this._progressiveEls || this.group, t);
    }, r.prototype.remove = function(t) {
      var e = this.group, n = this._data;
      n && t ? n.eachItemGraphicEl(function(i) {
        i.fadeOut(function() {
          e.remove(i);
        }, n.hostModel);
      }) : e.removeAll();
    }, r;
  })()
);
function e_(r, t, e) {
  var n = r.getBaseAxis(), i = r.getOtherAxis(n), a = eE(i, e), o = n.dim, s = i.dim, u = t.mapDimension(s), l = t.mapDimension(o), f = s === "x" || s === "radius" ? 1 : 0, h = U(r.dimensions, function(d) {
    return t.mapDimension(d);
  }), v = !1, c = t.getCalculationInfo("stackResultDimension");
  return Ln(
    t,
    h[0]
    /* , dims[1] */
  ) && (v = !0, h[0] = c), Ln(
    t,
    h[1]
    /* , dims[0] */
  ) && (v = !0, h[1] = c), {
    dataDimsForPoint: h,
    valueStart: a,
    valueAxisDim: s,
    baseAxisDim: o,
    stacked: !!v,
    valueDim: u,
    baseDim: l,
    baseDataOffset: f,
    stackedOverDimension: t.getCalculationInfo("stackedOverDimension")
  };
}
function eE(r, t) {
  var e = 0, n = r.scale.getExtent();
  return t === "start" ? e = n[0] : t === "end" ? e = n[1] : dt(t) && !isNaN(t) ? e = t : n[0] > 0 ? e = n[0] : n[1] < 0 && (e = n[1]), e;
}
function r_(r, t, e, n) {
  var i = NaN;
  r.stacked && (i = e.get(e.getCalculationInfo("stackedOverDimension"), n)), isNaN(i) && (i = r.valueStart);
  var a = r.baseDataOffset, o = [];
  return o[a] = e.get(r.baseDim, n), o[1 - a] = i, t.dataToPoint(o);
}
function rE(r, t) {
  var e = [];
  return t.diff(r).add(function(n) {
    e.push({
      cmd: "+",
      idx: n
    });
  }).update(function(n, i) {
    e.push({
      cmd: "=",
      idx: i,
      idx1: n
    });
  }).remove(function(n) {
    e.push({
      cmd: "-",
      idx: n
    });
  }).execute(), e;
}
function nE(r, t, e, n, i, a, o, s) {
  for (var u = rE(r, t), l = [], f = [], h = [], v = [], c = [], d = [], p = [], g = e_(i, t, o), y = r.getLayout("points") || [], m = t.getLayout("points") || [], _ = 0; _ < u.length; _++) {
    var S = u[_], w = !0, b = void 0, x = void 0;
    switch (S.cmd) {
      case "=":
        b = S.idx * 2, x = S.idx1 * 2;
        var T = y[b], D = y[b + 1], A = m[x], C = m[x + 1];
        (isNaN(T) || isNaN(D)) && (T = A, D = C), l.push(T, D), f.push(A, C), h.push(e[b], e[b + 1]), v.push(n[x], n[x + 1]), p.push(t.getRawIndex(S.idx1));
        break;
      case "+":
        var E = S.idx, P = g.dataDimsForPoint, L = i.dataToPoint([t.get(P[0], E), t.get(P[1], E)]);
        x = E * 2, l.push(L[0], L[1]), f.push(m[x], m[x + 1]);
        var O = r_(g, i, t, E);
        h.push(O[0], O[1]), v.push(n[x], n[x + 1]), p.push(t.getRawIndex(E));
        break;
      case "-":
        w = !1;
    }
    w && (c.push(S), d.push(d.length));
  }
  d.sort(function(et, Et) {
    return p[et] - p[Et];
  });
  for (var R = l.length, G = sr(R), N = sr(R), B = sr(R), I = sr(R), k = [], _ = 0; _ < d.length; _++) {
    var V = d[_], X = _ * 2, tt = V * 2;
    G[X] = l[tt], G[X + 1] = l[tt + 1], N[X] = f[tt], N[X + 1] = f[tt + 1], B[X] = h[tt], B[X + 1] = h[tt + 1], I[X] = v[tt], I[X + 1] = v[tt + 1], k[_] = c[V];
  }
  return {
    current: G,
    next: N,
    stackedOnCurrent: B,
    stackedOnNext: I,
    status: k
  };
}
var xr = Math.min, Tr = Math.max;
function Tn(r, t) {
  return isNaN(r) || isNaN(t);
}
function Vf(r, t, e, n, i, a, o, s, u) {
  for (var l, f, h, v, c, d, p = e, g = 0; g < n; g++) {
    var y = t[p * 2], m = t[p * 2 + 1];
    if (p >= i || p < 0)
      break;
    if (Tn(y, m)) {
      if (u) {
        p += a;
        continue;
      }
      break;
    }
    if (p === e)
      r[a > 0 ? "moveTo" : "lineTo"](y, m), h = y, v = m;
    else {
      var _ = y - l, S = m - f;
      if (_ * _ + S * S < 0.5) {
        p += a;
        continue;
      }
      if (o > 0) {
        for (var w = p + a, b = t[w * 2], x = t[w * 2 + 1]; b === y && x === m && g < n; )
          g++, w += a, p += a, b = t[w * 2], x = t[w * 2 + 1], y = t[p * 2], m = t[p * 2 + 1], _ = y - l, S = m - f;
        var T = g + 1;
        if (u)
          for (; Tn(b, x) && T < n; )
            T++, w += a, b = t[w * 2], x = t[w * 2 + 1];
        var D = 0.5, A = 0, C = 0, E = void 0, P = void 0;
        if (T >= n || Tn(b, x))
          c = y, d = m;
        else {
          A = b - l, C = x - f;
          var L = y - l, O = b - y, R = m - f, G = x - m, N = void 0, B = void 0;
          if (s === "x") {
            N = Math.abs(L), B = Math.abs(O);
            var I = A > 0 ? 1 : -1;
            c = y - I * N * o, d = m, E = y + I * B * o, P = m;
          } else if (s === "y") {
            N = Math.abs(R), B = Math.abs(G);
            var k = C > 0 ? 1 : -1;
            c = y, d = m - k * N * o, E = y, P = m + k * B * o;
          } else
            N = Math.sqrt(L * L + R * R), B = Math.sqrt(O * O + G * G), D = B / (B + N), c = y - A * o * (1 - D), d = m - C * o * (1 - D), E = y + A * o * D, P = m + C * o * D, E = xr(E, Tr(b, y)), P = xr(P, Tr(x, m)), E = Tr(E, xr(b, y)), P = Tr(P, xr(x, m)), A = E - y, C = P - m, c = y - A * N / B, d = m - C * N / B, c = xr(c, Tr(l, y)), d = xr(d, Tr(f, m)), c = Tr(c, xr(l, y)), d = Tr(d, xr(f, m)), A = y - c, C = m - d, E = y + A * B / N, P = m + C * B / N;
        }
        r.bezierCurveTo(h, v, c, d, y, m), h = E, v = P;
      } else
        r.lineTo(y, m);
    }
    l = y, f = m, p += a;
  }
  return g;
}
var n_ = (
  /** @class */
  /* @__PURE__ */ (function() {
    function r() {
      this.smooth = 0, this.smoothConstraint = !0;
    }
    return r;
  })()
), iE = (
  /** @class */
  (function(r) {
    z(t, r);
    function t(e) {
      var n = r.call(this, e) || this;
      return n.type = "ec-polyline", n;
    }
    return t.prototype.getDefaultStyle = function() {
      return {
        stroke: "#000",
        fill: null
      };
    }, t.prototype.getDefaultShape = function() {
      return new n_();
    }, t.prototype.buildPath = function(e, n) {
      var i = n.points, a = 0, o = i.length / 2;
      if (n.connectNulls) {
        for (; o > 0 && Tn(i[o * 2 - 2], i[o * 2 - 1]); o--)
          ;
        for (; a < o && Tn(i[a * 2], i[a * 2 + 1]); a++)
          ;
      }
      for (; a < o; )
        a += Vf(e, i, a, o, o, 1, n.smooth, n.smoothMonotone, n.connectNulls) + 1;
    }, t.prototype.getPointOn = function(e, n) {
      this.path || (this.createPathProxy(), this.buildPath(this.path, this.shape));
      for (var i = this.path, a = i.data, o = Mn.CMD, s, u, l = n === "x", f = [], h = 0; h < a.length; ) {
        var v = a[h++], c = void 0, d = void 0, p = void 0, g = void 0, y = void 0, m = void 0, _ = void 0;
        switch (v) {
          case o.M:
            s = a[h++], u = a[h++];
            break;
          case o.L:
            if (c = a[h++], d = a[h++], _ = l ? (e - s) / (c - s) : (e - u) / (d - u), _ <= 1 && _ >= 0) {
              var S = l ? (d - u) * _ + u : (c - s) * _ + s;
              return l ? [e, S] : [S, e];
            }
            s = c, u = d;
            break;
          case o.C:
            c = a[h++], d = a[h++], p = a[h++], g = a[h++], y = a[h++], m = a[h++];
            var w = l ? es(s, c, p, y, e, f) : es(u, d, g, m, e, f);
            if (w > 0)
              for (var b = 0; b < w; b++) {
                var x = f[b];
                if (x <= 1 && x >= 0) {
                  var S = l ? Rt(u, d, g, m, x) : Rt(s, c, p, y, x);
                  return l ? [e, S] : [S, e];
                }
              }
            s = y, u = m;
            break;
        }
      }
    }, t;
  })(ct)
), aE = (
  /** @class */
  (function(r) {
    z(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t;
  })(n_)
), oE = (
  /** @class */
  (function(r) {
    z(t, r);
    function t(e) {
      var n = r.call(this, e) || this;
      return n.type = "ec-polygon", n;
    }
    return t.prototype.getDefaultShape = function() {
      return new aE();
    }, t.prototype.buildPath = function(e, n) {
      var i = n.points, a = n.stackedOnPoints, o = 0, s = i.length / 2, u = n.smoothMonotone;
      if (n.connectNulls) {
        for (; s > 0 && Tn(i[s * 2 - 2], i[s * 2 - 1]); s--)
          ;
        for (; o < s && Tn(i[o * 2], i[o * 2 + 1]); o++)
          ;
      }
      for (; o < s; ) {
        var l = Vf(e, i, o, s, s, 1, n.smooth, u, n.connectNulls);
        Vf(e, a, o + l - 1, l, s, -1, n.stackedOnSmooth, u, n.connectNulls), o += l + 1, e.closePath();
      }
    }, t;
  })(ct)
);
function i_(r, t, e, n, i) {
  var a = r.getArea(), o = a.x, s = a.y, u = a.width, l = a.height, f = e.get(["lineStyle", "width"]) || 0;
  o -= f / 2, s -= f / 2, u += f, l += f, u = Math.ceil(u), o !== Math.floor(o) && (o = Math.floor(o), u++);
  var h = new Tt({
    shape: {
      x: o,
      y: s,
      width: u,
      height: l
    }
  });
  if (t) {
    var v = r.getBaseAxis(), c = v.isHorizontal(), d = v.inverse;
    c ? (d && (h.shape.x += u), h.shape.width = 0) : (d || (h.shape.y += l), h.shape.height = 0);
    var p = Z(i) ? function(g) {
      i(g, h);
    } : null;
    he(h, {
      shape: {
        width: u,
        height: l,
        x: o,
        y: s
      }
    }, e, null, n, p);
  }
  return h;
}
function a_(r, t, e) {
  var n = r.getArea(), i = xt(n.r0, 1), a = xt(n.r, 1), o = new gr({
    shape: {
      cx: xt(r.cx, 1),
      cy: xt(r.cy, 1),
      r0: i,
      r: a,
      startAngle: n.startAngle,
      endAngle: n.endAngle,
      clockwise: n.clockwise
    }
  });
  if (t) {
    var s = r.getBaseAxis().dim === "angle";
    s ? o.shape.endAngle = n.startAngle : o.shape.r = i, he(o, {
      shape: {
        endAngle: n.endAngle,
        r: a
      }
    }, e);
  }
  return o;
}
function sE(r, t, e, n, i) {
  if (r) {
    if (r.type === "polar")
      return a_(r, t, e);
    if (r.type === "cartesian2d")
      return i_(r, t, e, n, i);
  } else return null;
  return null;
}
function pc(r, t) {
  return r.type === t;
}
function Mp(r, t) {
  if (r.length === t.length) {
    for (var e = 0; e < r.length; e++)
      if (r[e] !== t[e])
        return;
    return !0;
  }
}
function Ep(r) {
  for (var t = 1 / 0, e = 1 / 0, n = -1 / 0, i = -1 / 0, a = 0; a < r.length; ) {
    var o = r[a++], s = r[a++];
    isNaN(o) || (t = Math.min(o, t), n = Math.max(o, n)), isNaN(s) || (e = Math.min(s, e), i = Math.max(s, i));
  }
  return [[t, e], [n, i]];
}
function Pp(r, t) {
  var e = Ep(r), n = e[0], i = e[1], a = Ep(t), o = a[0], s = a[1];
  return Math.max(Math.abs(n[0] - o[0]), Math.abs(n[1] - o[1]), Math.abs(i[0] - s[0]), Math.abs(i[1] - s[1]));
}
function Ip(r) {
  return dt(r) ? r : r ? 0.5 : 0;
}
function uE(r, t, e) {
  if (!e.valueDim)
    return [];
  for (var n = t.count(), i = sr(n * 2), a = 0; a < n; a++) {
    var o = r_(e, r, t, a);
    i[a * 2] = o[0], i[a * 2 + 1] = o[1];
  }
  return i;
}
function Cr(r, t, e, n, i) {
  var a = e.getBaseAxis(), o = a.dim === "x" || a.dim === "radius" ? 0 : 1, s = [], u = 0, l = [], f = [], h = [], v = [];
  if (i) {
    for (u = 0; u < r.length; u += 2) {
      var c = t || r;
      !isNaN(c[u]) && !isNaN(c[u + 1]) && v.push(r[u], r[u + 1]);
    }
    r = v;
  }
  for (u = 0; u < r.length - 2; u += 2)
    switch (h[0] = r[u + 2], h[1] = r[u + 3], f[0] = r[u], f[1] = r[u + 1], s.push(f[0], f[1]), n) {
      case "end":
        l[o] = h[o], l[1 - o] = f[1 - o], s.push(l[0], l[1]);
        break;
      case "middle":
        var d = (f[o] + h[o]) / 2, p = [];
        l[o] = p[o] = d, l[1 - o] = f[1 - o], p[1 - o] = h[1 - o], s.push(l[0], l[1]), s.push(p[0], p[1]);
        break;
      default:
        l[o] = f[o], l[1 - o] = h[1 - o], s.push(l[0], l[1]);
    }
  return s.push(r[u++], r[u++]), s;
}
function lE(r, t) {
  var e = [], n = r.length, i, a;
  function o(f, h, v) {
    var c = f.coord, d = (v - c) / (h.coord - c), p = hh(d, [f.color, h.color]);
    return {
      coord: v,
      color: p
    };
  }
  for (var s = 0; s < n; s++) {
    var u = r[s], l = u.coord;
    if (l < 0)
      i = u;
    else if (l > t) {
      a ? e.push(o(a, u, t)) : i && e.push(o(i, u, 0), o(i, u, t));
      break;
    } else
      i && (e.push(o(i, u, 0)), i = null), e.push(u), a = u;
  }
  return e;
}
function fE(r, t, e) {
  var n = r.getVisual("visualMeta");
  if (!(!n || !n.length || !r.count())) {
    if (t.type !== "cartesian2d") {
      process.env.NODE_ENV !== "production" && console.warn("Visual map on line style is only supported on cartesian2d.");
      return;
    }
    for (var i, a, o = n.length - 1; o >= 0; o--) {
      var s = r.getDimensionInfo(n[o].dimension);
      if (i = s && s.coordDim, i === "x" || i === "y") {
        a = n[o];
        break;
      }
    }
    if (!a) {
      process.env.NODE_ENV !== "production" && console.warn("Visual map on line style only support x or y dimension.");
      return;
    }
    var u = t.getAxis(i), l = U(a.stops, function(_) {
      return {
        coord: u.toGlobalCoord(u.dataToCoord(_.value)),
        color: _.color
      };
    }), f = l.length, h = a.outerColors.slice();
    f && l[0].coord > l[f - 1].coord && (l.reverse(), h.reverse());
    var v = lE(l, i === "x" ? e.getWidth() : e.getHeight()), c = v.length;
    if (!c && f)
      return l[0].coord < 0 ? h[1] ? h[1] : l[f - 1].color : h[0] ? h[0] : l[0].color;
    var d = 10, p = v[0].coord - d, g = v[c - 1].coord + d, y = g - p;
    if (y < 1e-3)
      return "transparent";
    M(v, function(_) {
      _.offset = (_.coord - p) / y;
    }), v.push({
      // NOTE: inRangeStopLen may still be 0 if stoplen is zero.
      offset: c ? v[c - 1].offset : 0.5,
      color: h[1] || "transparent"
    }), v.unshift({
      offset: c ? v[0].offset : 0.5,
      color: h[0] || "transparent"
    });
    var m = new Dh(0, 0, 0, 0, v, !0);
    return m[i] = p, m[i + "2"] = g, m;
  }
}
function hE(r, t, e) {
  var n = r.get("showAllSymbol"), i = n === "auto";
  if (!(n && !i)) {
    var a = e.getAxesByScale("ordinal")[0];
    if (a && !(i && cE(a, t))) {
      var o = t.mapDimension(a.dim), s = {};
      return M(a.getViewLabels(), function(u) {
        var l = a.scale.getRawOrdinalNumber(u.tickValue);
        s[l] = 1;
      }), function(u) {
        return !s.hasOwnProperty(t.get(o, u));
      };
    }
  }
}
function cE(r, t) {
  var e = r.getExtent(), n = Math.abs(e[1] - e[0]) / r.scale.count();
  isNaN(n) && (n = 0);
  for (var i = t.count(), a = Math.max(1, Math.round(i / 5)), o = 0; o < i; o += a)
    if (dc.getSymbolSize(
      t,
      o
      // Only for cartesian, where `isHorizontal` exists.
    )[r.isHorizontal() ? 1 : 0] * 1.5 > n)
      return !1;
  return !0;
}
function vE(r, t) {
  return isNaN(r) || isNaN(t);
}
function dE(r) {
  for (var t = r.length / 2; t > 0 && vE(r[t * 2 - 2], r[t * 2 - 1]); t--)
    ;
  return t - 1;
}
function Lp(r, t) {
  return [r[t * 2], r[t * 2 + 1]];
}
function pE(r, t, e) {
  for (var n = r.length / 2, i = e === "x" ? 0 : 1, a, o, s = 0, u = -1, l = 0; l < n; l++)
    if (o = r[l * 2 + i], !(isNaN(o) || isNaN(r[l * 2 + 1 - i]))) {
      if (l === 0) {
        a = o;
        continue;
      }
      if (a <= t && o >= t || a >= t && o <= t) {
        u = l;
        break;
      }
      s = l, a = o;
    }
  return {
    range: [s, u],
    t: (t - a) / (o - a)
  };
}
function o_(r) {
  if (r.get(["endLabel", "show"]))
    return !0;
  for (var t = 0; t < Te.length; t++)
    if (r.get([Te[t], "endLabel", "show"]))
      return !0;
  return !1;
}
function El(r, t, e, n) {
  if (pc(t, "cartesian2d")) {
    var i = n.getModel("endLabel"), a = i.get("valueAnimation"), o = n.getData(), s = {
      lastFrameIndex: 0
    }, u = o_(n) ? function(c, d) {
      r._endLabelOnDuring(c, d, o, s, a, i, t);
    } : null, l = t.getBaseAxis().isHorizontal(), f = i_(t, e, n, function() {
      var c = r._endLabel;
      c && e && s.originalX != null && c.attr({
        x: s.originalX,
        y: s.originalY
      });
    }, u);
    if (!n.get("clip", !0)) {
      var h = f.shape, v = Math.max(h.width, h.height);
      l ? (h.y -= v, h.height += v * 2) : (h.x -= v, h.width += v * 2);
    }
    return u && u(1, f), f;
  } else
    return process.env.NODE_ENV !== "production" && n.get(["endLabel", "show"]) && console.warn("endLabel is not supported for lines in polar systems."), a_(t, e, n);
}
function gE(r, t) {
  var e = t.getBaseAxis(), n = e.isHorizontal(), i = e.inverse, a = n ? i ? "right" : "left" : "center", o = n ? "middle" : i ? "top" : "bottom";
  return {
    normal: {
      align: r.get("align") || a,
      verticalAlign: r.get("verticalAlign") || o
    }
  };
}
var yE = (
  /** @class */
  (function(r) {
    z(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t.prototype.init = function() {
      var e = new It(), n = new tE();
      this.group.add(n.group), this._symbolDraw = n, this._lineGroup = e, this._changePolyState = vt(this._changePolyState, this);
    }, t.prototype.render = function(e, n, i) {
      var a = e.coordinateSystem, o = this.group, s = e.getData(), u = e.getModel("lineStyle"), l = e.getModel("areaStyle"), f = s.getLayout("points") || [], h = a.type === "polar", v = this._coordSys, c = this._symbolDraw, d = this._polyline, p = this._polygon, g = this._lineGroup, y = !n.ssr && e.get("animation"), m = !l.isEmpty(), _ = l.get("origin"), S = e_(a, s, _), w = m && uE(a, s, S), b = e.get("showSymbol"), x = e.get("connectNulls"), T = b && !h && hE(e, s, a), D = this._data;
      D && D.eachItemGraphicEl(function(et, Et) {
        et.__temp && (o.remove(et), D.setItemGraphicEl(Et, null));
      }), b || c.remove(), o.add(g);
      var A = h ? !1 : e.get("step"), C;
      a && a.getArea && e.get("clip", !0) && (C = a.getArea(), C.width != null ? (C.x -= 0.1, C.y -= 0.1, C.width += 0.2, C.height += 0.2) : C.r0 && (C.r0 -= 0.5, C.r += 0.5)), this._clipShapeForSymbol = C;
      var E = fE(s, a, i) || s.getVisual("style")[s.getVisual("drawType")];
      if (!(d && v.type === a.type && A === this._step))
        b && c.updateData(s, {
          isIgnore: T,
          clipShape: C,
          disableAnimation: !0,
          getSymbolPoint: function(et) {
            return [f[et * 2], f[et * 2 + 1]];
          }
        }), y && this._initSymbolLabelAnimation(s, a, C), A && (w && (w = Cr(w, f, a, A, x)), f = Cr(f, null, a, A, x)), d = this._newPolyline(f), m ? p = this._newPolygon(f, w) : p && (g.remove(p), p = this._polygon = null), h || this._initOrUpdateEndLabel(e, a, En(E)), g.setClipPath(El(this, a, !0, e));
      else {
        m && !p ? p = this._newPolygon(f, w) : p && !m && (g.remove(p), p = this._polygon = null), h || this._initOrUpdateEndLabel(e, a, En(E));
        var P = g.getClipPath();
        if (P) {
          var L = El(this, a, !1, e);
          he(P, {
            shape: L.shape
          }, e);
        } else
          g.setClipPath(El(this, a, !0, e));
        b && c.updateData(s, {
          isIgnore: T,
          clipShape: C,
          disableAnimation: !0,
          getSymbolPoint: function(et) {
            return [f[et * 2], f[et * 2 + 1]];
          }
        }), (!Mp(this._stackedOnPoints, w) || !Mp(this._points, f)) && (y ? this._doUpdateAnimation(s, w, a, i, A, _, x) : (A && (w && (w = Cr(w, f, a, A, x)), f = Cr(f, null, a, A, x)), d.setShape({
          points: f
        }), p && p.setShape({
          points: f,
          stackedOnPoints: w
        })));
      }
      var O = e.getModel("emphasis"), R = O.get("focus"), G = O.get("blurScope"), N = O.get("disabled");
      if (d.useStyle(ut(
        // Use color in lineStyle first
        u.getLineStyle(),
        {
          fill: "none",
          stroke: E,
          lineJoin: "bevel"
        }
      )), ds(d, e, "lineStyle"), d.style.lineWidth > 0 && e.get(["emphasis", "lineStyle", "width"]) === "bolder") {
        var B = d.getState("emphasis").style;
        B.lineWidth = +d.style.lineWidth + 1;
      }
      at(d).seriesIndex = e.seriesIndex, wa(d, R, G, N);
      var I = Ip(e.get("smooth")), k = e.get("smoothMonotone");
      if (d.setShape({
        smooth: I,
        smoothMonotone: k,
        connectNulls: x
      }), p) {
        var V = s.getCalculationInfo("stackedOnSeries"), X = 0;
        p.useStyle(ut(l.getAreaStyle(), {
          fill: E,
          opacity: 0.7,
          lineJoin: "bevel",
          decal: s.getVisual("style").decal
        })), V && (X = Ip(V.get("smooth"))), p.setShape({
          smooth: I,
          stackedOnSmooth: X,
          smoothMonotone: k,
          connectNulls: x
        }), ds(p, e, "areaStyle"), at(p).seriesIndex = e.seriesIndex, wa(p, R, G, N);
      }
      var tt = this._changePolyState;
      s.eachItemGraphicEl(function(et) {
        et && (et.onHoverStateChange = tt);
      }), this._polyline.onHoverStateChange = tt, this._data = s, this._coordSys = a, this._stackedOnPoints = w, this._points = f, this._step = A, this._valueOrigin = _, e.get("triggerLineEvent") && (this.packEventData(e, d), p && this.packEventData(e, p));
    }, t.prototype.packEventData = function(e, n) {
      at(n).eventData = {
        componentType: "series",
        componentSubType: "line",
        componentIndex: e.componentIndex,
        seriesIndex: e.seriesIndex,
        seriesName: e.name,
        seriesType: "line"
      };
    }, t.prototype.highlight = function(e, n, i, a) {
      var o = e.getData(), s = An(o, a);
      if (this._changePolyState("emphasis"), !(s instanceof Array) && s != null && s >= 0) {
        var u = o.getLayout("points"), l = o.getItemGraphicEl(s);
        if (!l) {
          var f = u[s * 2], h = u[s * 2 + 1];
          if (isNaN(f) || isNaN(h) || this._clipShapeForSymbol && !this._clipShapeForSymbol.contain(f, h))
            return;
          var v = e.get("zlevel") || 0, c = e.get("z") || 0;
          l = new dc(o, s), l.x = f, l.y = h, l.setZ(v, c);
          var d = l.getSymbolPath().getTextContent();
          d && (d.zlevel = v, d.z = c, d.z2 = this._polyline.z2 + 1), l.__temp = !0, o.setItemGraphicEl(s, l), l.stopSymbolAnimation(!0), this.group.add(l);
        }
        l.highlight();
      } else
        Kt.prototype.highlight.call(this, e, n, i, a);
    }, t.prototype.downplay = function(e, n, i, a) {
      var o = e.getData(), s = An(o, a);
      if (this._changePolyState("normal"), s != null && s >= 0) {
        var u = o.getItemGraphicEl(s);
        u && (u.__temp ? (o.setItemGraphicEl(s, null), this.group.remove(u)) : u.downplay());
      } else
        Kt.prototype.downplay.call(this, e, n, i, a);
    }, t.prototype._changePolyState = function(e) {
      var n = this._polygon;
      Fv(this._polyline, e), n && Fv(n, e);
    }, t.prototype._newPolyline = function(e) {
      var n = this._polyline;
      return n && this._lineGroup.remove(n), n = new iE({
        shape: {
          points: e
        },
        segmentIgnoreThreshold: 2,
        z2: 10
      }), this._lineGroup.add(n), this._polyline = n, n;
    }, t.prototype._newPolygon = function(e, n) {
      var i = this._polygon;
      return i && this._lineGroup.remove(i), i = new oE({
        shape: {
          points: e,
          stackedOnPoints: n
        },
        segmentIgnoreThreshold: 2
      }), this._lineGroup.add(i), this._polygon = i, i;
    }, t.prototype._initSymbolLabelAnimation = function(e, n, i) {
      var a, o, s = n.getBaseAxis(), u = s.inverse;
      n.type === "cartesian2d" ? (a = s.isHorizontal(), o = !1) : n.type === "polar" && (a = s.dim === "angle", o = !0);
      var l = e.hostModel, f = l.get("animationDuration");
      Z(f) && (f = f(null));
      var h = l.get("animationDelay") || 0, v = Z(h) ? h(null) : h;
      e.eachItemGraphicEl(function(c, d) {
        var p = c;
        if (p) {
          var g = [c.x, c.y], y = void 0, m = void 0, _ = void 0;
          if (i)
            if (o) {
              var S = i, w = n.pointToCoord(g);
              a ? (y = S.startAngle, m = S.endAngle, _ = -w[1] / 180 * Math.PI) : (y = S.r0, m = S.r, _ = w[0]);
            } else {
              var b = i;
              a ? (y = b.x, m = b.x + b.width, _ = c.x) : (y = b.y + b.height, m = b.y, _ = c.y);
            }
          var x = m === y ? 0 : (_ - y) / (m - y);
          u && (x = 1 - x);
          var T = Z(h) ? h(d) : f * x + v, D = p.getSymbolPath(), A = D.getTextContent();
          p.attr({
            scaleX: 0,
            scaleY: 0
          }), p.animateTo({
            scaleX: 1,
            scaleY: 1
          }, {
            duration: 200,
            setToFinal: !0,
            delay: T
          }), A && A.animateFrom({
            style: {
              opacity: 0
            }
          }, {
            duration: 300,
            delay: T
          }), D.disableLabelAnimation = !0;
        }
      });
    }, t.prototype._initOrUpdateEndLabel = function(e, n, i) {
      var a = e.getModel("endLabel");
      if (o_(e)) {
        var o = e.getData(), s = this._polyline, u = o.getLayout("points");
        if (!u) {
          s.removeTextContent(), this._endLabel = null;
          return;
        }
        var l = this._endLabel;
        l || (l = this._endLabel = new Mt({
          z2: 200
          // should be higher than item symbol
        }), l.ignoreClip = !0, s.setTextContent(this._endLabel), s.disableLabelAnimation = !0);
        var f = dE(u);
        f >= 0 && (Wa(s, Ua(e, "endLabel"), {
          inheritColor: i,
          labelFetcher: e,
          labelDataIndex: f,
          defaultText: function(h, v, c) {
            return c != null ? t_(o, c) : vc(o, h);
          },
          enableTextSetter: !0
        }, gE(a, n)), s.textConfig.position = null);
      } else this._endLabel && (this._polyline.removeTextContent(), this._endLabel = null);
    }, t.prototype._endLabelOnDuring = function(e, n, i, a, o, s, u) {
      var l = this._endLabel, f = this._polyline;
      if (l) {
        e < 1 && a.originalX == null && (a.originalX = l.x, a.originalY = l.y);
        var h = i.getLayout("points"), v = i.hostModel, c = v.get("connectNulls"), d = s.get("precision"), p = s.get("distance") || 0, g = u.getBaseAxis(), y = g.isHorizontal(), m = g.inverse, _ = n.shape, S = m ? y ? _.x : _.y + _.height : y ? _.x + _.width : _.y, w = (y ? p : 0) * (m ? -1 : 1), b = (y ? 0 : -p) * (m ? -1 : 1), x = y ? "x" : "y", T = pE(h, S, x), D = T.range, A = D[1] - D[0], C = void 0;
        if (A >= 1) {
          if (A > 1 && !c) {
            var E = Lp(h, D[0]);
            l.attr({
              x: E[0] + w,
              y: E[1] + b
            }), o && (C = v.getRawValue(D[0]));
          } else {
            var E = f.getPointOn(S, x);
            E && l.attr({
              x: E[0] + w,
              y: E[1] + b
            });
            var P = v.getRawValue(D[0]), L = v.getRawValue(D[1]);
            o && (C = Hb(i, d, P, L, T.t));
          }
          a.lastFrameIndex = D[0];
        } else {
          var O = e === 1 || a.lastFrameIndex > 0 ? D[0] : 0, E = Lp(h, O);
          o && (C = v.getRawValue(O)), l.attr({
            x: E[0] + w,
            y: E[1] + b
          });
        }
        if (o) {
          var R = Qs(l);
          typeof R.setLabelText == "function" && R.setLabelText(C);
        }
      }
    }, t.prototype._doUpdateAnimation = function(e, n, i, a, o, s, u) {
      var l = this._polyline, f = this._polygon, h = e.hostModel, v = nE(this._data, e, this._stackedOnPoints, n, this._coordSys, i, this._valueOrigin), c = v.current, d = v.stackedOnCurrent, p = v.next, g = v.stackedOnNext;
      if (o && (d = Cr(v.stackedOnCurrent, v.current, i, o, u), c = Cr(v.current, null, i, o, u), g = Cr(v.stackedOnNext, v.next, i, o, u), p = Cr(v.next, null, i, o, u)), Pp(c, p) > 3e3 || f && Pp(d, g) > 3e3) {
        l.stopAnimation(), l.setShape({
          points: p
        }), f && (f.stopAnimation(), f.setShape({
          points: p,
          stackedOnPoints: g
        }));
        return;
      }
      l.shape.__points = v.current, l.shape.points = c;
      var y = {
        shape: {
          points: p
        }
      };
      v.current !== c && (y.shape.__points = v.next), l.stopAnimation(), Wt(l, y, h), f && (f.setShape({
        // Reuse the points with polyline.
        points: c,
        stackedOnPoints: d
      }), f.stopAnimation(), Wt(f, {
        shape: {
          stackedOnPoints: g
        }
      }, h), l.shape.points !== f.shape.points && (f.shape.points = l.shape.points));
      for (var m = [], _ = v.status, S = 0; S < _.length; S++) {
        var w = _[S].cmd;
        if (w === "=") {
          var b = e.getItemGraphicEl(_[S].idx1);
          b && m.push({
            el: b,
            ptIdx: S
            // Index of points
          });
        }
      }
      l.animators && l.animators.length && l.animators[0].during(function() {
        f && f.dirtyShape();
        for (var x = l.shape.__points, T = 0; T < m.length; T++) {
          var D = m[T].el, A = m[T].ptIdx * 2;
          D.x = x[A], D.y = x[A + 1], D.markRedraw();
        }
      });
    }, t.prototype.remove = function(e) {
      var n = this.group, i = this._data;
      this._lineGroup.removeAll(), this._symbolDraw.remove(!0), i && i.eachItemGraphicEl(function(a, o) {
        a.__temp && (n.remove(a), i.setItemGraphicEl(o, null));
      }), this._polyline = this._polygon = this._coordSys = this._points = this._stackedOnPoints = this._endLabel = this._data = null;
    }, t.type = "line", t;
  })(Kt)
);
function mE(r, t) {
  return {
    seriesType: r,
    plan: $h(),
    reset: function(e) {
      var n = e.getData(), i = e.coordinateSystem;
      if (e.pipelineContext, !!i) {
        var a = U(i.dimensions, function(h) {
          return n.mapDimension(h);
        }).slice(0, 2), o = a.length, s = n.getCalculationInfo("stackResultDimension");
        Ln(n, a[0]) && (a[0] = s), Ln(n, a[1]) && (a[1] = s);
        var u = n.getStore(), l = n.getDimensionIndex(a[0]), f = n.getDimensionIndex(a[1]);
        return o && {
          progress: function(h, v) {
            for (var c = h.end - h.start, d = sr(c * o), p = [], g = [], y = h.start, m = 0; y < h.end; y++) {
              var _ = void 0;
              if (o === 1) {
                var S = u.get(l, y);
                _ = i.dataToPoint(S, null, g);
              } else
                p[0] = u.get(l, y), p[1] = u.get(f, y), _ = i.dataToPoint(p, null, g);
              d[m++] = _[0], d[m++] = _[1];
            }
            v.setLayout("points", d);
          }
        };
      }
    }
  };
}
var _E = {
  average: function(r) {
    for (var t = 0, e = 0, n = 0; n < r.length; n++)
      isNaN(r[n]) || (t += r[n], e++);
    return e === 0 ? NaN : t / e;
  },
  sum: function(r) {
    for (var t = 0, e = 0; e < r.length; e++)
      t += r[e] || 0;
    return t;
  },
  max: function(r) {
    for (var t = -1 / 0, e = 0; e < r.length; e++)
      r[e] > t && (t = r[e]);
    return isFinite(t) ? t : NaN;
  },
  min: function(r) {
    for (var t = 1 / 0, e = 0; e < r.length; e++)
      r[e] < t && (t = r[e]);
    return isFinite(t) ? t : NaN;
  },
  // TODO
  // Median
  nearest: function(r) {
    return r[0];
  }
}, SE = function(r) {
  return Math.round(r.length / 2);
};
function s_(r) {
  return {
    seriesType: r,
    // FIXME:TS never used, so comment it
    // modifyOutputEnd: true,
    reset: function(t, e, n) {
      var i = t.getData(), a = t.get("sampling"), o = t.coordinateSystem, s = i.count();
      if (s > 10 && o.type === "cartesian2d" && a) {
        var u = o.getBaseAxis(), l = o.getOtherAxis(u), f = u.getExtent(), h = n.getDevicePixelRatio(), v = Math.abs(f[1] - f[0]) * (h || 1), c = Math.round(s / v);
        if (isFinite(c) && c > 1) {
          a === "lttb" ? t.setData(i.lttbDownSample(i.mapDimension(l.dim), 1 / c)) : a === "minmax" && t.setData(i.minmaxDownSample(i.mapDimension(l.dim), 1 / c));
          var d = void 0;
          W(a) ? d = _E[a] : Z(a) && (d = a), d && t.setData(i.downSample(i.mapDimension(l.dim), 1 / c, d, SE));
        }
      }
    }
  };
}
function bE(r) {
  r.registerChartView(yE), r.registerSeriesModel(QM), r.registerLayout(mE("line")), r.registerVisual({
    seriesType: "line",
    reset: function(t) {
      var e = t.getData(), n = t.getModel("lineStyle").getLineStyle();
      n && !n.stroke && (n.stroke = e.getVisual("style").fill), e.setVisual("legendLineStyle", n);
    }
  }), r.registerProcessor(r.PRIORITY.PROCESSOR.STATISTIC, s_("line"));
}
var zf = (
  /** @class */
  (function(r) {
    z(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.prototype.getInitialData = function(e, n) {
      return hu(null, this, {
        useEncodeDefaulter: !0
      });
    }, t.prototype.getMarkerPosition = function(e, n, i) {
      var a = this.coordinateSystem;
      if (a && a.clampData) {
        var o = a.clampData(e), s = a.dataToPoint(o);
        if (i)
          M(a.getAxes(), function(v, c) {
            if (v.type === "category" && n != null) {
              var d = v.getTicksCoords(), p = v.getTickModel().get("alignWithLabel"), g = o[c], y = n[c] === "x1" || n[c] === "y1";
              if (y && !p && (g += 1), d.length < 2)
                return;
              if (d.length === 2) {
                s[c] = v.toGlobalCoord(v.getExtent()[y ? 1 : 0]);
                return;
              }
              for (var m = void 0, _ = void 0, S = 1, w = 0; w < d.length; w++) {
                var b = d[w].coord, x = w === d.length - 1 ? d[w - 1].tickValue + S : d[w].tickValue;
                if (x === g) {
                  _ = b;
                  break;
                } else if (x < g)
                  m = b;
                else if (m != null && x > g) {
                  _ = (b + m) / 2;
                  break;
                }
                w === 1 && (S = x - d[0].tickValue);
              }
              _ == null && (m ? m && (_ = d[d.length - 1].coord) : _ = d[0].coord), s[c] = v.toGlobalCoord(_);
            }
          });
        else {
          var u = this.getData(), l = u.getLayout("offset"), f = u.getLayout("size"), h = a.getBaseAxis().isHorizontal() ? 0 : 1;
          s[h] += l + f / 2;
        }
        return s;
      }
      return [NaN, NaN];
    }, t.type = "series.__base_bar__", t.defaultOption = {
      // zlevel: 0,
      z: 2,
      coordinateSystem: "cartesian2d",
      legendHoverLink: !0,
      // stack: null
      // Cartesian coordinate system
      // xAxisIndex: 0,
      // yAxisIndex: 0,
      barMinHeight: 0,
      barMinAngle: 0,
      // cursor: null,
      large: !1,
      largeThreshold: 400,
      progressive: 3e3,
      progressiveChunkMode: "mod"
    }, t;
  })(ae)
);
ae.registerClass(zf);
var wE = (
  /** @class */
  (function(r) {
    z(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.prototype.getInitialData = function() {
      return hu(null, this, {
        useEncodeDefaulter: !0,
        createInvertedIndices: !!this.get("realtimeSort", !0) || null
      });
    }, t.prototype.getProgressive = function() {
      return this.get("large") ? this.get("progressive") : !1;
    }, t.prototype.getProgressiveThreshold = function() {
      var e = this.get("progressiveThreshold"), n = this.get("largeThreshold");
      return n > e && (e = n), e;
    }, t.prototype.brushSelector = function(e, n, i) {
      return i.rect(n.getItemLayout(e));
    }, t.type = "series.bar", t.dependencies = ["grid", "polar"], t.defaultOption = sm(zf.defaultOption, {
      // If clipped
      // Only available on cartesian2d
      clip: !0,
      roundCap: !1,
      showBackground: !1,
      backgroundStyle: {
        color: "rgba(180, 180, 180, 0.2)",
        borderColor: null,
        borderWidth: 0,
        borderType: "solid",
        borderRadius: 0,
        shadowBlur: 0,
        shadowColor: null,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        opacity: 1
      },
      select: {
        itemStyle: {
          borderColor: "#212121"
        }
      },
      realtimeSort: !1
    }), t;
  })(zf)
), xE = (
  /** @class */
  /* @__PURE__ */ (function() {
    function r() {
      this.cx = 0, this.cy = 0, this.r0 = 0, this.r = 0, this.startAngle = 0, this.endAngle = Math.PI * 2, this.clockwise = !0;
    }
    return r;
  })()
), Op = (
  /** @class */
  (function(r) {
    z(t, r);
    function t(e) {
      var n = r.call(this, e) || this;
      return n.type = "sausage", n;
    }
    return t.prototype.getDefaultShape = function() {
      return new xE();
    }, t.prototype.buildPath = function(e, n) {
      var i = n.cx, a = n.cy, o = Math.max(n.r0 || 0, 0), s = Math.max(n.r, 0), u = (s - o) * 0.5, l = o + u, f = n.startAngle, h = n.endAngle, v = n.clockwise, c = Math.PI * 2, d = v ? h - f < c : f - h < c;
      d || (f = h - (v ? c : -c));
      var p = Math.cos(f), g = Math.sin(f), y = Math.cos(h), m = Math.sin(h);
      d ? (e.moveTo(p * o + i, g * o + a), e.arc(p * l + i, g * l + a, u, -Math.PI + f, f, !v)) : e.moveTo(p * s + i, g * s + a), e.arc(i, a, s, f, h, !v), e.arc(y * l + i, m * l + a, u, h - Math.PI * 2, h - Math.PI, !v), o !== 0 && e.arc(i, a, o, h, f, v);
    }, t;
  })(ct)
);
function TE(r, t) {
  t = t || {};
  var e = t.isRoundCap;
  return function(n, i, a) {
    var o = i.position;
    if (!o || o instanceof Array)
      return as(n, i, a);
    var s = r(o), u = i.distance != null ? i.distance : 5, l = this.shape, f = l.cx, h = l.cy, v = l.r, c = l.r0, d = (v + c) / 2, p = l.startAngle, g = l.endAngle, y = (p + g) / 2, m = e ? Math.abs(v - c) / 2 : 0, _ = Math.cos, S = Math.sin, w = f + v * _(p), b = h + v * S(p), x = "left", T = "top";
    switch (s) {
      case "startArc":
        w = f + (c - u) * _(y), b = h + (c - u) * S(y), x = "center", T = "top";
        break;
      case "insideStartArc":
        w = f + (c + u) * _(y), b = h + (c + u) * S(y), x = "center", T = "bottom";
        break;
      case "startAngle":
        w = f + d * _(p) + Eo(p, u + m, !1), b = h + d * S(p) + Po(p, u + m, !1), x = "right", T = "middle";
        break;
      case "insideStartAngle":
        w = f + d * _(p) + Eo(p, -u + m, !1), b = h + d * S(p) + Po(p, -u + m, !1), x = "left", T = "middle";
        break;
      case "middle":
        w = f + d * _(y), b = h + d * S(y), x = "center", T = "middle";
        break;
      case "endArc":
        w = f + (v + u) * _(y), b = h + (v + u) * S(y), x = "center", T = "bottom";
        break;
      case "insideEndArc":
        w = f + (v - u) * _(y), b = h + (v - u) * S(y), x = "center", T = "top";
        break;
      case "endAngle":
        w = f + d * _(g) + Eo(g, u + m, !0), b = h + d * S(g) + Po(g, u + m, !0), x = "left", T = "middle";
        break;
      case "insideEndAngle":
        w = f + d * _(g) + Eo(g, -u + m, !0), b = h + d * S(g) + Po(g, -u + m, !0), x = "right", T = "middle";
        break;
      default:
        return as(n, i, a);
    }
    return n = n || {}, n.x = w, n.y = b, n.align = x, n.verticalAlign = T, n;
  };
}
function CE(r, t, e, n) {
  if (dt(n)) {
    r.setTextConfig({
      rotation: n
    });
    return;
  } else if (H(t)) {
    r.setTextConfig({
      rotation: 0
    });
    return;
  }
  var i = r.shape, a = i.clockwise ? i.startAngle : i.endAngle, o = i.clockwise ? i.endAngle : i.startAngle, s = (a + o) / 2, u, l = e(t);
  switch (l) {
    case "startArc":
    case "insideStartArc":
    case "middle":
    case "insideEndArc":
    case "endArc":
      u = s;
      break;
    case "startAngle":
    case "insideStartAngle":
      u = a;
      break;
    case "endAngle":
    case "insideEndAngle":
      u = o;
      break;
    default:
      r.setTextConfig({
        rotation: 0
      });
      return;
  }
  var f = Math.PI * 1.5 - u;
  l === "middle" && f > Math.PI / 2 && f < Math.PI * 1.5 && (f -= Math.PI), r.setTextConfig({
    rotation: f
  });
}
function Eo(r, t, e) {
  return t * Math.sin(r) * (e ? -1 : 1);
}
function Po(r, t, e) {
  return t * Math.cos(r) * (e ? 1 : -1);
}
function ra(r, t, e) {
  var n = r.get("borderRadius");
  if (n == null)
    return e ? {
      cornerRadius: 0
    } : null;
  H(n) || (n = [n, n, n, n]);
  var i = Math.abs(t.r || 0 - t.r0 || 0);
  return {
    cornerRadius: U(n, function(a) {
      return Wr(a, i);
    })
  };
}
var Pl = Math.max, Il = Math.min;
function DE(r, t) {
  var e = r.getArea && r.getArea();
  if (pc(r, "cartesian2d")) {
    var n = r.getBaseAxis();
    if (n.type !== "category" || !n.onBand) {
      var i = t.getLayout("bandWidth");
      n.isHorizontal() ? (e.x -= i, e.width += i * 2) : (e.y -= i, e.height += i * 2);
    }
  }
  return e;
}
var AE = (
  /** @class */
  (function(r) {
    z(t, r);
    function t() {
      var e = r.call(this) || this;
      return e.type = t.type, e._isFirstFrame = !0, e;
    }
    return t.prototype.render = function(e, n, i, a) {
      this._model = e, this._removeOnRenderedListener(i), this._updateDrawMode(e);
      var o = e.get("coordinateSystem");
      o === "cartesian2d" || o === "polar" ? (this._progressiveEls = null, this._isLargeDraw ? this._renderLarge(e, n, i) : this._renderNormal(e, n, i, a)) : process.env.NODE_ENV !== "production" && zt("Only cartesian2d and polar supported for bar.");
    }, t.prototype.incrementalPrepareRender = function(e) {
      this._clear(), this._updateDrawMode(e), this._updateLargeClip(e);
    }, t.prototype.incrementalRender = function(e, n) {
      this._progressiveEls = [], this._incrementalRenderLarge(e, n);
    }, t.prototype.eachRendered = function(e) {
      js(this._progressiveEls || this.group, e);
    }, t.prototype._updateDrawMode = function(e) {
      var n = e.pipelineContext.large;
      (this._isLargeDraw == null || n !== this._isLargeDraw) && (this._isLargeDraw = n, this._clear());
    }, t.prototype._renderNormal = function(e, n, i, a) {
      var o = this.group, s = e.getData(), u = this._data, l = e.coordinateSystem, f = l.getBaseAxis(), h;
      l.type === "cartesian2d" ? h = f.isHorizontal() : l.type === "polar" && (h = f.dim === "angle");
      var v = e.isAnimationEnabled() ? e : null, c = ME(e, l);
      c && this._enableRealtimeSort(c, s, i);
      var d = e.get("clip", !0) || c, p = DE(l, s);
      o.removeClipPath();
      var g = e.get("roundCap", !0), y = e.get("showBackground", !0), m = e.getModel("backgroundStyle"), _ = m.get("borderRadius") || 0, S = [], w = this._backgroundEls, b = a && a.isInitSort, x = a && a.type === "changeAxisOrder";
      function T(C) {
        var E = Io[l.type](s, C), P = NE(l, h, E);
        return P.useStyle(m.getItemStyle()), l.type === "cartesian2d" ? P.setShape("r", _) : P.setShape("cornerRadius", _), S[C] = P, P;
      }
      s.diff(u).add(function(C) {
        var E = s.getItemModel(C), P = Io[l.type](s, C, E);
        if (y && T(C), !(!s.hasValue(C) || !Fp[l.type](P))) {
          var L = !1;
          d && (L = Rp[l.type](p, P));
          var O = Np[l.type](e, s, C, P, h, v, f.model, !1, g);
          c && (O.forceLabelAnimation = !0), Vp(O, s, C, E, P, e, h, l.type === "polar"), b ? O.attr({
            shape: P
          }) : c ? kp(c, v, O, P, C, h, !1, !1) : he(O, {
            shape: P
          }, e, C), s.setItemGraphicEl(C, O), o.add(O), O.ignore = L;
        }
      }).update(function(C, E) {
        var P = s.getItemModel(C), L = Io[l.type](s, C, P);
        if (y) {
          var O = void 0;
          w.length === 0 ? O = T(E) : (O = w[E], O.useStyle(m.getItemStyle()), l.type === "cartesian2d" ? O.setShape("r", _) : O.setShape("cornerRadius", _), S[C] = O);
          var R = Io[l.type](s, C), G = l_(h, R, l);
          Wt(O, {
            shape: G
          }, v, C);
        }
        var N = u.getItemGraphicEl(E);
        if (!s.hasValue(C) || !Fp[l.type](L)) {
          o.remove(N);
          return;
        }
        var B = !1;
        if (d && (B = Rp[l.type](p, L), B && o.remove(N)), N ? Mh(N) : N = Np[l.type](e, s, C, L, h, v, f.model, !!N, g), c && (N.forceLabelAnimation = !0), x) {
          var I = N.getTextContent();
          if (I) {
            var k = Qs(I);
            k.prevValue != null && (k.prevValue = k.value);
          }
        } else
          Vp(N, s, C, P, L, e, h, l.type === "polar");
        b ? N.attr({
          shape: L
        }) : c ? kp(c, v, N, L, C, h, !0, x) : Wt(N, {
          shape: L
        }, e, C, null), s.setItemGraphicEl(C, N), N.ignore = B, o.add(N);
      }).remove(function(C) {
        var E = u.getItemGraphicEl(C);
        E && ys(E, e, C);
      }).execute();
      var D = this._backgroundGroup || (this._backgroundGroup = new It());
      D.removeAll();
      for (var A = 0; A < S.length; ++A)
        D.add(S[A]);
      o.add(D), this._backgroundEls = S, this._data = s;
    }, t.prototype._renderLarge = function(e, n, i) {
      this._clear(), Gp(e, this.group), this._updateLargeClip(e);
    }, t.prototype._incrementalRenderLarge = function(e, n) {
      this._removeBackground(), Gp(n, this.group, this._progressiveEls, !0);
    }, t.prototype._updateLargeClip = function(e) {
      var n = e.get("clip", !0) && sE(e.coordinateSystem, !1, e), i = this.group;
      n ? i.setClipPath(n) : i.removeClipPath();
    }, t.prototype._enableRealtimeSort = function(e, n, i) {
      var a = this;
      if (n.count()) {
        var o = e.baseAxis;
        if (this._isFirstFrame)
          this._dispatchInitSort(n, e, i), this._isFirstFrame = !1;
        else {
          var s = function(u) {
            var l = n.getItemGraphicEl(u), f = l && l.shape;
            return f && // The result should be consistent with the initial sort by data value.
            // Do not support the case that both positive and negative exist.
            Math.abs(o.isHorizontal() ? f.height : f.width) || 0;
          };
          this._onRendered = function() {
            a._updateSortWithinSameData(n, s, o, i);
          }, i.getZr().on("rendered", this._onRendered);
        }
      }
    }, t.prototype._dataSort = function(e, n, i) {
      var a = [];
      return e.each(e.mapDimension(n.dim), function(o, s) {
        var u = i(s);
        u = u ?? NaN, a.push({
          dataIndex: s,
          mappedValue: u,
          ordinalNumber: o
        });
      }), a.sort(function(o, s) {
        return s.mappedValue - o.mappedValue;
      }), {
        ordinalNumbers: U(a, function(o) {
          return o.ordinalNumber;
        })
      };
    }, t.prototype._isOrderChangedWithinSameData = function(e, n, i) {
      for (var a = i.scale, o = e.mapDimension(i.dim), s = Number.MAX_VALUE, u = 0, l = a.getOrdinalMeta().categories.length; u < l; ++u) {
        var f = e.rawIndexOf(o, a.getRawOrdinalNumber(u)), h = f < 0 ? Number.MIN_VALUE : n(e.indexOfRawIndex(f));
        if (h > s)
          return !0;
        s = h;
      }
      return !1;
    }, t.prototype._isOrderDifferentInView = function(e, n) {
      for (var i = n.scale, a = i.getExtent(), o = Math.max(0, a[0]), s = Math.min(a[1], i.getOrdinalMeta().categories.length - 1); o <= s; ++o)
        if (e.ordinalNumbers[o] !== i.getRawOrdinalNumber(o))
          return !0;
    }, t.prototype._updateSortWithinSameData = function(e, n, i, a) {
      if (this._isOrderChangedWithinSameData(e, n, i)) {
        var o = this._dataSort(e, i, n);
        this._isOrderDifferentInView(o, i) && (this._removeOnRenderedListener(a), a.dispatchAction({
          type: "changeAxisOrder",
          componentType: i.dim + "Axis",
          axisId: i.index,
          sortInfo: o
        }));
      }
    }, t.prototype._dispatchInitSort = function(e, n, i) {
      var a = n.baseAxis, o = this._dataSort(e, a, function(s) {
        return e.get(e.mapDimension(n.otherAxis.dim), s);
      });
      i.dispatchAction({
        type: "changeAxisOrder",
        componentType: a.dim + "Axis",
        isInitSort: !0,
        axisId: a.index,
        sortInfo: o
      });
    }, t.prototype.remove = function(e, n) {
      this._clear(this._model), this._removeOnRenderedListener(n);
    }, t.prototype.dispose = function(e, n) {
      this._removeOnRenderedListener(n);
    }, t.prototype._removeOnRenderedListener = function(e) {
      this._onRendered && (e.getZr().off("rendered", this._onRendered), this._onRendered = null);
    }, t.prototype._clear = function(e) {
      var n = this.group, i = this._data;
      e && e.isAnimationEnabled() && i && !this._isLargeDraw ? (this._removeBackground(), this._backgroundEls = [], i.eachItemGraphicEl(function(a) {
        ys(a, e, at(a).dataIndex);
      })) : n.removeAll(), this._data = null, this._isFirstFrame = !0;
    }, t.prototype._removeBackground = function() {
      this.group.remove(this._backgroundGroup), this._backgroundGroup = null;
    }, t.type = "bar", t;
  })(Kt)
), Rp = {
  cartesian2d: function(r, t) {
    var e = t.width < 0 ? -1 : 1, n = t.height < 0 ? -1 : 1;
    e < 0 && (t.x += t.width, t.width = -t.width), n < 0 && (t.y += t.height, t.height = -t.height);
    var i = r.x + r.width, a = r.y + r.height, o = Pl(t.x, r.x), s = Il(t.x + t.width, i), u = Pl(t.y, r.y), l = Il(t.y + t.height, a), f = s < o, h = l < u;
    return t.x = f && o > i ? s : o, t.y = h && u > a ? l : u, t.width = f ? 0 : s - o, t.height = h ? 0 : l - u, e < 0 && (t.x += t.width, t.width = -t.width), n < 0 && (t.y += t.height, t.height = -t.height), f || h;
  },
  polar: function(r, t) {
    var e = t.r0 <= t.r ? 1 : -1;
    if (e < 0) {
      var n = t.r;
      t.r = t.r0, t.r0 = n;
    }
    var i = Il(t.r, r.r), a = Pl(t.r0, r.r0);
    t.r = i, t.r0 = a;
    var o = i - a < 0;
    if (e < 0) {
      var n = t.r;
      t.r = t.r0, t.r0 = n;
    }
    return o;
  }
}, Np = {
  cartesian2d: function(r, t, e, n, i, a, o, s, u) {
    var l = new Tt({
      shape: F({}, n),
      z2: 1
    });
    if (l.__dataIndex = e, l.name = "item", a) {
      var f = l.shape, h = i ? "height" : "width";
      f[h] = 0;
    }
    return l;
  },
  polar: function(r, t, e, n, i, a, o, s, u) {
    var l = !i && u ? Op : gr, f = new l({
      shape: n,
      z2: 1
    });
    f.name = "item";
    var h = u_(i);
    if (f.calculateTextPosition = TE(h, {
      isRoundCap: l === Op
    }), a) {
      var v = f.shape, c = i ? "r" : "endAngle", d = {};
      v[c] = i ? n.r0 : n.startAngle, d[c] = n[c], (s ? Wt : he)(f, {
        shape: d
        // __value: typeof dataValue === 'string' ? parseInt(dataValue, 10) : dataValue
      }, a);
    }
    return f;
  }
};
function ME(r, t) {
  var e = r.get("realtimeSort", !0), n = t.getBaseAxis();
  if (process.env.NODE_ENV !== "production" && e && (n.type !== "category" && zt("`realtimeSort` will not work because this bar series is not based on a category axis."), t.type !== "cartesian2d" && zt("`realtimeSort` will not work because this bar series is not on cartesian2d.")), e && n.type === "category" && t.type === "cartesian2d")
    return {
      baseAxis: n,
      otherAxis: t.getOtherAxis(n)
    };
}
function kp(r, t, e, n, i, a, o, s) {
  var u, l;
  a ? (l = {
    x: n.x,
    width: n.width
  }, u = {
    y: n.y,
    height: n.height
  }) : (l = {
    y: n.y,
    height: n.height
  }, u = {
    x: n.x,
    width: n.width
  }), s || (o ? Wt : he)(e, {
    shape: u
  }, t, i, null);
  var f = t ? r.baseAxis.model : null;
  (o ? Wt : he)(e, {
    shape: l
  }, f, i);
}
function Bp(r, t) {
  for (var e = 0; e < t.length; e++)
    if (!isFinite(r[t[e]]))
      return !0;
  return !1;
}
var EE = ["x", "y", "width", "height"], PE = ["cx", "cy", "r", "startAngle", "endAngle"], Fp = {
  cartesian2d: function(r) {
    return !Bp(r, EE);
  },
  polar: function(r) {
    return !Bp(r, PE);
  }
}, Io = {
  // itemModel is only used to get borderWidth, which is not needed
  // when calculating bar background layout.
  cartesian2d: function(r, t, e) {
    var n = r.getItemLayout(t), i = e ? LE(e, n) : 0, a = n.width > 0 ? 1 : -1, o = n.height > 0 ? 1 : -1;
    return {
      x: n.x + a * i / 2,
      y: n.y + o * i / 2,
      width: n.width - a * i,
      height: n.height - o * i
    };
  },
  polar: function(r, t, e) {
    var n = r.getItemLayout(t);
    return {
      cx: n.cx,
      cy: n.cy,
      r0: n.r0,
      r: n.r,
      startAngle: n.startAngle,
      endAngle: n.endAngle,
      clockwise: n.clockwise
    };
  }
};
function IE(r) {
  return r.startAngle != null && r.endAngle != null && r.startAngle === r.endAngle;
}
function u_(r) {
  return /* @__PURE__ */ (function(t) {
    var e = t ? "Arc" : "Angle";
    return function(n) {
      switch (n) {
        case "start":
        case "insideStart":
        case "end":
        case "insideEnd":
          return n + e;
        default:
          return n;
      }
    };
  })(r);
}
function Vp(r, t, e, n, i, a, o, s) {
  var u = t.getItemVisual(e, "style");
  if (s) {
    if (!a.get("roundCap")) {
      var f = r.shape, h = ra(n.getModel("itemStyle"), f, !0);
      F(f, h), r.setShape(f);
    }
  } else {
    var l = n.get(["itemStyle", "borderRadius"]) || 0;
    r.setShape("r", l);
  }
  r.useStyle(u);
  var v = n.getShallow("cursor");
  v && r.attr("cursor", v);
  var c = s ? o ? i.r >= i.r0 ? "endArc" : "startArc" : i.endAngle >= i.startAngle ? "endAngle" : "startAngle" : o ? i.height >= 0 ? "bottom" : "top" : i.width >= 0 ? "right" : "left", d = Ua(n);
  Wa(r, d, {
    labelFetcher: a,
    labelDataIndex: e,
    defaultText: vc(a.getData(), e),
    inheritColor: u.fill,
    defaultOpacity: u.opacity,
    defaultOutsidePosition: c
  });
  var p = r.getTextContent();
  if (s && p) {
    var g = n.get(["label", "position"]);
    r.textConfig.inside = g === "middle" ? !0 : null, CE(r, g === "outside" ? c : g, u_(o), n.get(["label", "rotate"]));
  }
  qx(p, d, a.getRawValue(e), function(m) {
    return t_(t, m);
  });
  var y = n.getModel(["emphasis"]);
  wa(r, y.get("focus"), y.get("blurScope"), y.get("disabled")), ds(r, n), IE(i) && (r.style.fill = "none", r.style.stroke = "none", M(r.states, function(m) {
    m.style && (m.style.fill = m.style.stroke = "none");
  }));
}
function LE(r, t) {
  var e = r.get(["itemStyle", "borderColor"]);
  if (!e || e === "none")
    return 0;
  var n = r.get(["itemStyle", "borderWidth"]) || 0, i = isNaN(t.width) ? Number.MAX_VALUE : Math.abs(t.width), a = isNaN(t.height) ? Number.MAX_VALUE : Math.abs(t.height);
  return Math.min(n, i, a);
}
var OE = (
  /** @class */
  /* @__PURE__ */ (function() {
    function r() {
    }
    return r;
  })()
), zp = (
  /** @class */
  (function(r) {
    z(t, r);
    function t(e) {
      var n = r.call(this, e) || this;
      return n.type = "largeBar", n;
    }
    return t.prototype.getDefaultShape = function() {
      return new OE();
    }, t.prototype.buildPath = function(e, n) {
      for (var i = n.points, a = this.baseDimIdx, o = 1 - this.baseDimIdx, s = [], u = [], l = this.barWidth, f = 0; f < i.length; f += 3)
        u[a] = l, u[o] = i[f + 2], s[a] = i[f + a], s[o] = i[f + o], e.rect(s[0], s[1], u[0], u[1]);
    }, t;
  })(ct)
);
function Gp(r, t, e, n) {
  var i = r.getData(), a = i.getLayout("valueAxisHorizontal") ? 1 : 0, o = i.getLayout("largeDataIndices"), s = i.getLayout("size"), u = r.getModel("backgroundStyle"), l = i.getLayout("largeBackgroundPoints");
  if (l) {
    var f = new zp({
      shape: {
        points: l
      },
      incremental: !!n,
      silent: !0,
      z2: 0
    });
    f.baseDimIdx = a, f.largeDataIndices = o, f.barWidth = s, f.useStyle(u.getItemStyle()), t.add(f), e && e.push(f);
  }
  var h = new zp({
    shape: {
      points: i.getLayout("largePoints")
    },
    incremental: !!n,
    ignoreCoarsePointer: !0,
    z2: 1
  });
  h.baseDimIdx = a, h.largeDataIndices = o, h.barWidth = s, t.add(h), h.useStyle(i.getVisual("style")), h.style.stroke = null, at(h).seriesIndex = r.seriesIndex, r.get("silent") || (h.on("mousedown", Hp), h.on("mousemove", Hp)), e && e.push(h);
}
var Hp = uu(function(r) {
  var t = this, e = RE(t, r.offsetX, r.offsetY);
  at(t).dataIndex = e >= 0 ? e : null;
}, 30, !1);
function RE(r, t, e) {
  for (var n = r.baseDimIdx, i = 1 - n, a = r.shape.points, o = r.largeDataIndices, s = [], u = [], l = r.barWidth, f = 0, h = a.length / 3; f < h; f++) {
    var v = f * 3;
    if (u[n] = l, u[i] = a[v + 2], s[n] = a[v + n], s[i] = a[v + i], u[i] < 0 && (s[i] += u[i], u[i] = -u[i]), t >= s[0] && t <= s[0] + u[0] && e >= s[1] && e <= s[1] + u[1])
      return o[f];
  }
  return -1;
}
function l_(r, t, e) {
  if (pc(e, "cartesian2d")) {
    var n = t, i = e.getArea();
    return {
      x: r ? n.x : i.x,
      y: r ? i.y : n.y,
      width: r ? n.width : i.width,
      height: r ? i.height : n.height
    };
  } else {
    var i = e.getArea(), a = t;
    return {
      cx: i.cx,
      cy: i.cy,
      r0: r ? i.r0 : a.r0,
      r: r ? i.r : a.r,
      startAngle: r ? a.startAngle : 0,
      endAngle: r ? a.endAngle : Math.PI * 2
    };
  }
}
function NE(r, t, e) {
  var n = r.type === "polar" ? gr : Tt;
  return new n({
    shape: l_(t, e, r),
    silent: !0,
    z2: 0
  });
}
function kE(r) {
  r.registerChartView(AE), r.registerSeriesModel(wE), r.registerLayout(r.PRIORITY.VISUAL.LAYOUT, St(UA, "bar")), r.registerLayout(r.PRIORITY.VISUAL.PROGRESSIVE_LAYOUT, YA("bar")), r.registerProcessor(r.PRIORITY.PROCESSOR.STATISTIC, s_("bar")), r.registerAction({
    type: "changeAxisOrder",
    event: "changeAxisOrder",
    update: "update"
  }, function(t, e) {
    var n = t.componentType || "series";
    e.eachComponent({
      mainType: n,
      query: t
    }, function(i) {
      t.sortInfo && i.axis.setCategorySortInfo(t.sortInfo);
    });
  });
}
var Wp = Math.PI * 2, Lo = Math.PI / 180;
function f_(r, t) {
  return Pn(r.getBoxLayoutParams(), {
    width: t.getWidth(),
    height: t.getHeight()
  });
}
function h_(r, t) {
  var e = f_(r, t), n = r.get("center"), i = r.get("radius");
  H(i) || (i = [0, i]);
  var a = _t(e.width, t.getWidth()), o = _t(e.height, t.getHeight()), s = Math.min(a, o), u = _t(i[0], s / 2), l = _t(i[1], s / 2), f, h, v = r.coordinateSystem;
  if (v) {
    var c = v.dataToPoint(n);
    f = c[0] || 0, h = c[1] || 0;
  } else
    H(n) || (n = [n, n]), f = _t(n[0], a) + e.x, h = _t(n[1], o) + e.y;
  return {
    cx: f,
    cy: h,
    r0: u,
    r: l
  };
}
function BE(r, t, e) {
  t.eachSeriesByType(r, function(n) {
    var i = n.getData(), a = i.mapDimension("value"), o = f_(n, e), s = h_(n, e), u = s.cx, l = s.cy, f = s.r, h = s.r0, v = -n.get("startAngle") * Lo, c = n.get("endAngle"), d = n.get("padAngle") * Lo;
    c = c === "auto" ? v - Wp : -c * Lo;
    var p = n.get("minAngle") * Lo, g = p + d, y = 0;
    i.each(a, function(G) {
      !isNaN(G) && y++;
    });
    var m = i.getSum(a), _ = Math.PI / (m || y) * 2, S = n.get("clockwise"), w = n.get("roseType"), b = n.get("stillShowZeroSum"), x = i.getDataExtent(a);
    x[0] = 0;
    var T = S ? 1 : -1, D = [v, c], A = T * d / 2;
    Cy(D, !S), v = D[0], c = D[1];
    var C = c_(n);
    C.startAngle = v, C.endAngle = c, C.clockwise = S;
    var E = Math.abs(c - v), P = E, L = 0, O = v;
    if (i.setLayout({
      viewRect: o,
      r: f
    }), i.each(a, function(G, N) {
      var B;
      if (isNaN(G)) {
        i.setItemLayout(N, {
          angle: NaN,
          startAngle: NaN,
          endAngle: NaN,
          clockwise: S,
          cx: u,
          cy: l,
          r0: h,
          r: w ? NaN : f
        });
        return;
      }
      w !== "area" ? B = m === 0 && b ? _ : G * _ : B = E / y, B < g ? (B = g, P -= g) : L += G;
      var I = O + T * B, k = 0, V = 0;
      d > B ? (k = O + T * B / 2, V = k) : (k = O + A, V = I - A), i.setItemLayout(N, {
        angle: B,
        startAngle: k,
        endAngle: V,
        clockwise: S,
        cx: u,
        cy: l,
        r0: h,
        r: w ? os(G, x, [h, f]) : f
      }), O = I;
    }), P < Wp && y)
      if (P <= 1e-3) {
        var R = E / y;
        i.each(a, function(G, N) {
          if (!isNaN(G)) {
            var B = i.getItemLayout(N);
            B.angle = R;
            var I = 0, k = 0;
            R < d ? (I = v + T * (N + 1 / 2) * R, k = I) : (I = v + T * N * R + A, k = v + T * (N + 1) * R - A), B.startAngle = I, B.endAngle = k;
          }
        });
      } else
        _ = P / L, O = v, i.each(a, function(G, N) {
          if (!isNaN(G)) {
            var B = i.getItemLayout(N), I = B.angle === g ? g : G * _, k = 0, V = 0;
            I < d ? (k = O + T * I / 2, V = k) : (k = O + A, V = O + T * I - A), B.startAngle = k, B.endAngle = V, O += T * I;
          }
        });
  });
}
var c_ = Ct();
function FE(r) {
  return {
    seriesType: r,
    reset: function(t, e) {
      var n = e.findComponents({
        mainType: "legend"
      });
      if (!(!n || !n.length)) {
        var i = t.getData();
        i.filterSelf(function(a) {
          for (var o = i.getName(a), s = 0; s < n.length; s++)
            if (!n[s].isSelected(o))
              return !1;
          return !0;
        });
      }
    }
  };
}
var VE = Math.PI / 180;
function Up(r, t, e, n, i, a, o, s, u, l) {
  if (r.length < 2)
    return;
  function f(p) {
    for (var g = p.rB, y = g * g, m = 0; m < p.list.length; m++) {
      var _ = p.list[m], S = Math.abs(_.label.y - e), w = n + _.len, b = w * w, x = Math.sqrt(Math.abs((1 - S * S / y) * b)), T = t + (x + _.len2) * i, D = T - _.label.x, A = _.targetTextWidth - D * i;
      v_(_, A, !0), _.label.x = T;
    }
  }
  function h(p) {
    for (var g = {
      list: [],
      maxY: 0
    }, y = {
      list: [],
      maxY: 0
    }, m = 0; m < p.length; m++)
      if (p[m].labelAlignTo === "none") {
        var _ = p[m], S = _.label.y > e ? y : g, w = Math.abs(_.label.y - e);
        if (w >= S.maxY) {
          var b = _.label.x - t - _.len2 * i, x = n + _.len, T = Math.abs(b) < x ? Math.sqrt(w * w / (1 - b * b / x / x)) : x;
          S.rB = T, S.maxY = w;
        }
        S.list.push(_);
      }
    f(g), f(y);
  }
  for (var v = r.length, c = 0; c < v; c++)
    if (r[c].position === "outer" && r[c].labelAlignTo === "labelLine") {
      var d = r[c].label.x - l;
      r[c].linePoints[1][0] += d, r[c].label.x = l;
    }
  jM(r, u, u + o) && h(r);
}
function zE(r, t, e, n, i, a, o, s) {
  for (var u = [], l = [], f = Number.MAX_VALUE, h = -Number.MAX_VALUE, v = 0; v < r.length; v++) {
    var c = r[v].label;
    Ll(r[v]) || (c.x < t ? (f = Math.min(f, c.x), u.push(r[v])) : (h = Math.max(h, c.x), l.push(r[v])));
  }
  for (var v = 0; v < r.length; v++) {
    var d = r[v];
    if (!Ll(d) && d.linePoints) {
      if (d.labelStyleWidth != null)
        continue;
      var c = d.label, p = d.linePoints, g = void 0;
      d.labelAlignTo === "edge" ? c.x < t ? g = p[2][0] - d.labelDistance - o - d.edgeDistance : g = o + i - d.edgeDistance - p[2][0] - d.labelDistance : d.labelAlignTo === "labelLine" ? c.x < t ? g = f - o - d.bleedMargin : g = o + i - h - d.bleedMargin : c.x < t ? g = c.x - o - d.bleedMargin : g = o + i - c.x - d.bleedMargin, d.targetTextWidth = g, v_(d, g);
    }
  }
  Up(l, t, e, n, 1, i, a, o, s, h), Up(u, t, e, n, -1, i, a, o, s, f);
  for (var v = 0; v < r.length; v++) {
    var d = r[v];
    if (!Ll(d) && d.linePoints) {
      var c = d.label, p = d.linePoints, y = d.labelAlignTo === "edge", m = c.style.padding, _ = m ? m[1] + m[3] : 0, S = c.style.backgroundColor ? 0 : _, w = d.rect.width + S, b = p[1][0] - p[2][0];
      y ? c.x < t ? p[2][0] = o + d.edgeDistance + w + d.labelDistance : p[2][0] = o + i - d.edgeDistance - w - d.labelDistance : (c.x < t ? p[2][0] = c.x + d.labelDistance : p[2][0] = c.x - d.labelDistance, p[1][0] = p[2][0] + b), p[1][1] = p[2][1] = c.y;
    }
  }
}
function v_(r, t, e) {
  if (e === void 0 && (e = !1), r.labelStyleWidth == null) {
    var n = r.label, i = n.style, a = r.rect, o = i.backgroundColor, s = i.padding, u = s ? s[1] + s[3] : 0, l = i.overflow, f = a.width + (o ? 0 : u);
    if (t < f || e) {
      var h = a.height;
      if (l && l.match("break")) {
        n.setStyle("backgroundColor", null), n.setStyle("width", t - u);
        var v = n.getBoundingRect();
        n.setStyle("width", Math.ceil(v.width)), n.setStyle("backgroundColor", o);
      } else {
        var c = t - u, d = t < f ? c : (
          // Current available width is enough, but the text may have
          // already been wrapped with a smaller available width.
          e ? c > r.unconstrainedWidth ? null : c : null
        );
        n.setStyle("width", d);
      }
      var p = n.getBoundingRect();
      a.width = p.width;
      var g = (n.style.margin || 0) + 2.1;
      a.height = p.height + g, a.y -= (a.height - h) / 2;
    }
  }
}
function Ll(r) {
  return r.position === "center";
}
function GE(r) {
  var t = r.getData(), e = [], n, i, a = !1, o = (r.get("minShowLabelAngle") || 0) * VE, s = t.getLayout("viewRect"), u = t.getLayout("r"), l = s.width, f = s.x, h = s.y, v = s.height;
  function c(b) {
    b.ignore = !0;
  }
  function d(b) {
    if (!b.ignore)
      return !0;
    for (var x in b.states)
      if (b.states[x].ignore === !1)
        return !0;
    return !1;
  }
  t.each(function(b) {
    var x = t.getItemGraphicEl(b), T = x.shape, D = x.getTextContent(), A = x.getTextGuideLine(), C = t.getItemModel(b), E = C.getModel("label"), P = E.get("position") || C.get(["emphasis", "label", "position"]), L = E.get("distanceToLabelLine"), O = E.get("alignTo"), R = _t(E.get("edgeDistance"), l), G = E.get("bleedMargin"), N = C.getModel("labelLine"), B = N.get("length");
    B = _t(B, l);
    var I = N.get("length2");
    if (I = _t(I, l), Math.abs(T.endAngle - T.startAngle) < o) {
      M(D.states, c), D.ignore = !0, A && (M(A.states, c), A.ignore = !0);
      return;
    }
    if (d(D)) {
      var k = (T.startAngle + T.endAngle) / 2, V = Math.cos(k), X = Math.sin(k), tt, et, Et, Nt;
      n = T.cx, i = T.cy;
      var lt = P === "inside" || P === "inner";
      if (P === "center")
        tt = T.cx, et = T.cy, Nt = "center";
      else {
        var mt = (lt ? (T.r + T.r0) / 2 * V : T.r * V) + n, pt = (lt ? (T.r + T.r0) / 2 * X : T.r * X) + i;
        if (tt = mt + V * 3, et = pt + X * 3, !lt) {
          var q = mt + V * (B + u - T.r), rt = pt + X * (B + u - T.r), Fe = q + (V < 0 ? -1 : 1) * I, Pt = rt;
          O === "edge" ? tt = V < 0 ? f + R : f + l - R : tt = Fe + (V < 0 ? -L : L), et = Pt, Et = [[mt, pt], [q, rt], [Fe, Pt]];
        }
        Nt = lt ? "center" : O === "edge" ? V > 0 ? "right" : "left" : V > 0 ? "left" : "right";
      }
      var yr = Math.PI, Qe = 0, yi = E.get("rotate");
      if (dt(yi))
        Qe = yi * (yr / 180);
      else if (P === "center")
        Qe = 0;
      else if (yi === "radial" || yi === !0) {
        var O_ = V < 0 ? -k + yr : -k;
        Qe = O_;
      } else if (yi === "tangential" && P !== "outside" && P !== "outer") {
        var Nn = Math.atan2(V, X);
        Nn < 0 && (Nn = yr * 2 + Nn);
        var R_ = X > 0;
        R_ && (Nn = yr + Nn), Qe = Nn - yr;
      }
      if (a = !!Qe, D.x = tt, D.y = et, D.rotation = Qe, D.setStyle({
        verticalAlign: "middle"
      }), lt) {
        D.setStyle({
          align: Nt
        });
        var pu = D.states.select;
        pu && (pu.x += D.x, pu.y += D.y);
      } else {
        var mi = D.getBoundingRect().clone();
        mi.applyTransform(D.getComputedTransform());
        var xc = (D.style.margin || 0) + 2.1;
        mi.y -= xc / 2, mi.height += xc, e.push({
          label: D,
          labelLine: A,
          position: P,
          len: B,
          len2: I,
          minTurnAngle: N.get("minTurnAngle"),
          maxSurfaceAngle: N.get("maxSurfaceAngle"),
          surfaceNormal: new j(V, X),
          linePoints: Et,
          textAlign: Nt,
          labelDistance: L,
          labelAlignTo: O,
          edgeDistance: R,
          bleedMargin: G,
          rect: mi,
          unconstrainedWidth: mi.width,
          labelStyleWidth: D.style.width
        });
      }
      x.setTextConfig({
        inside: lt
      });
    }
  }), !a && r.get("avoidLabelOverlap") && zE(e, n, i, u, l, v, f, h);
  for (var p = 0; p < e.length; p++) {
    var g = e[p], y = g.label, m = g.labelLine, _ = isNaN(y.x) || isNaN(y.y);
    if (y) {
      y.setStyle({
        align: g.textAlign
      }), _ && (M(y.states, c), y.ignore = !0);
      var S = y.states.select;
      S && (S.x += y.x, S.y += y.y);
    }
    if (m) {
      var w = g.linePoints;
      _ || !w ? (M(m.states, c), m.ignore = !0) : (WM(w, g.minTurnAngle), UM(w, g.surfaceNormal, g.maxSurfaceAngle), m.setShape({
        points: w
      }), y.__hostTarget.textGuideLineConfig = {
        anchor: new j(w[0][0], w[0][1])
      });
    }
  }
}
var HE = (
  /** @class */
  (function(r) {
    z(t, r);
    function t(e, n, i) {
      var a = r.call(this) || this;
      a.z2 = 2;
      var o = new Mt();
      return a.setTextContent(o), a.updateData(e, n, i, !0), a;
    }
    return t.prototype.updateData = function(e, n, i, a) {
      var o = this, s = e.hostModel, u = e.getItemModel(n), l = u.getModel("emphasis"), f = e.getItemLayout(n), h = F(ra(u.getModel("itemStyle"), f, !0), f);
      if (isNaN(h.startAngle)) {
        o.setShape(h);
        return;
      }
      if (a) {
        o.setShape(h);
        var v = s.getShallow("animationType");
        s.ecModel.ssr ? (he(o, {
          scaleX: 0,
          scaleY: 0
        }, s, {
          dataIndex: n,
          isFrom: !0
        }), o.originX = h.cx, o.originY = h.cy) : v === "scale" ? (o.shape.r = f.r0, he(o, {
          shape: {
            r: f.r
          }
        }, s, n)) : i != null ? (o.setShape({
          startAngle: i,
          endAngle: i
        }), he(o, {
          shape: {
            startAngle: f.startAngle,
            endAngle: f.endAngle
          }
        }, s, n)) : (o.shape.endAngle = f.startAngle, Wt(o, {
          shape: {
            endAngle: f.endAngle
          }
        }, s, n));
      } else
        Mh(o), Wt(o, {
          shape: h
        }, s, n);
      o.useStyle(e.getItemVisual(n, "style")), ds(o, u);
      var c = (f.startAngle + f.endAngle) / 2, d = s.get("selectedOffset"), p = Math.cos(c) * d, g = Math.sin(c) * d, y = u.getShallow("cursor");
      y && o.attr("cursor", y), this._updateLabel(s, e, n), o.ensureState("emphasis").shape = F({
        r: f.r + (l.get("scale") && l.get("scaleSize") || 0)
      }, ra(l.getModel("itemStyle"), f)), F(o.ensureState("select"), {
        x: p,
        y: g,
        shape: ra(u.getModel(["select", "itemStyle"]), f)
      }), F(o.ensureState("blur"), {
        shape: ra(u.getModel(["blur", "itemStyle"]), f)
      });
      var m = o.getTextGuideLine(), _ = o.getTextContent();
      m && F(m.ensureState("select"), {
        x: p,
        y: g
      }), F(_.ensureState("select"), {
        x: p,
        y: g
      }), wa(this, l.get("focus"), l.get("blurScope"), l.get("disabled"));
    }, t.prototype._updateLabel = function(e, n, i) {
      var a = this, o = n.getItemModel(i), s = o.getModel("labelLine"), u = n.getItemVisual(i, "style"), l = u && u.fill, f = u && u.opacity;
      Wa(a, Ua(o), {
        labelFetcher: n.hostModel,
        labelDataIndex: i,
        inheritColor: l,
        defaultOpacity: f,
        defaultText: e.getFormattedLabel(i, "normal") || n.getName(i)
      });
      var h = a.getTextContent();
      a.setTextConfig({
        // reset position, rotation
        position: null,
        rotation: null
      }), h.attr({
        z2: 10
      });
      var v = e.get(["label", "position"]);
      if (v !== "outside" && v !== "outer")
        a.removeTextGuideLine();
      else {
        var c = this.getTextGuideLine();
        c || (c = new vi(), this.setTextGuideLine(c)), XM(this, qM(o), {
          stroke: l,
          opacity: kr(s.get(["lineStyle", "opacity"]), f, 1)
        });
      }
    }, t;
  })(gr)
), WE = (
  /** @class */
  (function(r) {
    z(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.ignoreLabelLineUpdate = !0, e;
    }
    return t.prototype.render = function(e, n, i, a) {
      var o = e.getData(), s = this._data, u = this.group, l;
      if (!s && o.count() > 0) {
        for (var f = o.getItemLayout(0), h = 1; isNaN(f && f.startAngle) && h < o.count(); ++h)
          f = o.getItemLayout(h);
        f && (l = f.startAngle);
      }
      if (this._emptyCircleSector && u.remove(this._emptyCircleSector), o.count() === 0 && e.get("showEmptyCircle")) {
        var v = c_(e), c = new gr({
          shape: F(h_(e, i), v)
        });
        c.useStyle(e.getModel("emptyCircleStyle").getItemStyle()), this._emptyCircleSector = c, u.add(c);
      }
      o.diff(s).add(function(d) {
        var p = new HE(o, d, l);
        o.setItemGraphicEl(d, p), u.add(p);
      }).update(function(d, p) {
        var g = s.getItemGraphicEl(p);
        g.updateData(o, d, l), g.off("click"), u.add(g), o.setItemGraphicEl(d, g);
      }).remove(function(d) {
        var p = s.getItemGraphicEl(d);
        ys(p, e, d);
      }).execute(), GE(e), e.get("animationTypeUpdate") !== "expansion" && (this._data = o);
    }, t.prototype.dispose = function() {
    }, t.prototype.containPoint = function(e, n) {
      var i = n.getData(), a = i.getItemLayout(0);
      if (a) {
        var o = e[0] - a.cx, s = e[1] - a.cy, u = Math.sqrt(o * o + s * s);
        return u <= a.r && u >= a.r0;
      }
    }, t.type = "pie", t;
  })(Kt)
);
function UE(r, t, e) {
  t = H(t) && {
    coordDimensions: t
  } || F({
    encodeDefine: r.getEncode()
  }, t);
  var n = r.getSource(), i = oc(n, t).dimensions, a = new ac(i, r);
  return a.initData(n, e), a;
}
var YE = (
  /** @class */
  (function() {
    function r(t, e) {
      this._getDataWithEncodedVisual = t, this._getRawData = e;
    }
    return r.prototype.getAllNames = function() {
      var t = this._getRawData();
      return t.mapArray(t.getName);
    }, r.prototype.containName = function(t) {
      var e = this._getRawData();
      return e.indexOfName(t) >= 0;
    }, r.prototype.indexOfName = function(t) {
      var e = this._getDataWithEncodedVisual();
      return e.indexOfName(t);
    }, r.prototype.getItemVisual = function(t, e) {
      var n = this._getDataWithEncodedVisual();
      return n.getItemVisual(t, e);
    }, r;
  })()
), XE = Ct(), qE = (
  /** @class */
  (function(r) {
    z(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t.prototype.init = function(e) {
      r.prototype.init.apply(this, arguments), this.legendVisualProvider = new YE(vt(this.getData, this), vt(this.getRawData, this)), this._defaultLabelLine(e);
    }, t.prototype.mergeOption = function() {
      r.prototype.mergeOption.apply(this, arguments);
    }, t.prototype.getInitialData = function() {
      return UE(this, {
        coordDimensions: ["value"],
        encodeDefaulter: St(wT, this)
      });
    }, t.prototype.getDataParams = function(e) {
      var n = this.getData(), i = XE(n), a = i.seats;
      if (!a) {
        var o = [];
        n.each(n.mapDimension("value"), function(u) {
          o.push(u);
        }), a = i.seats = hy(o, n.hostModel.get("percentPrecision"));
      }
      var s = r.prototype.getDataParams.call(this, e);
      return s.percent = a[e] || 0, s.$vars.push("percent"), s;
    }, t.prototype._defaultLabelLine = function(e) {
      hf(e, "labelLine", ["show"]);
      var n = e.labelLine, i = e.emphasis.labelLine;
      n.show = n.show && e.label.show, i.show = i.show && e.emphasis.label.show;
    }, t.type = "series.pie", t.defaultOption = {
      // zlevel: 0,
      z: 2,
      legendHoverLink: !0,
      colorBy: "data",
      // 默认全局居中
      center: ["50%", "50%"],
      radius: [0, "75%"],
      // 默认顺时针
      clockwise: !0,
      startAngle: 90,
      endAngle: "auto",
      padAngle: 0,
      // 最小角度改为0
      minAngle: 0,
      // If the angle of a sector less than `minShowLabelAngle`,
      // the label will not be displayed.
      minShowLabelAngle: 0,
      // 选中时扇区偏移量
      selectedOffset: 10,
      // 选择模式，默认关闭，可选single，multiple
      // selectedMode: false,
      // 南丁格尔玫瑰图模式，'radius'（半径） | 'area'（面积）
      // roseType: null,
      percentPrecision: 2,
      // If still show when all data zero.
      stillShowZeroSum: !0,
      // cursor: null,
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      width: null,
      height: null,
      label: {
        // color: 'inherit',
        // If rotate around circle
        rotate: 0,
        show: !0,
        overflow: "truncate",
        // 'outer', 'inside', 'center'
        position: "outer",
        // 'none', 'labelLine', 'edge'. Works only when position is 'outer'
        alignTo: "none",
        // Closest distance between label and chart edge.
        // Works only position is 'outer' and alignTo is 'edge'.
        edgeDistance: "25%",
        // Works only position is 'outer' and alignTo is not 'edge'.
        bleedMargin: 10,
        // Distance between text and label line.
        distanceToLabelLine: 5
        // formatter: 标签文本格式器，同 tooltip.formatter，不支持异步回调
        // 默认使用全局文本样式，详见 textStyle
        // distance: 当position为inner时有效，为label位置到圆心的距离与圆半径(环状图为内外半径和)的比例系数
      },
      // Enabled when label.normal.position is 'outer'
      labelLine: {
        show: !0,
        // 引导线两段中的第一段长度
        length: 15,
        // 引导线两段中的第二段长度
        length2: 15,
        smooth: !1,
        minTurnAngle: 90,
        maxSurfaceAngle: 90,
        lineStyle: {
          // color: 各异,
          width: 1,
          type: "solid"
        }
      },
      itemStyle: {
        borderWidth: 1,
        borderJoin: "round"
      },
      showEmptyCircle: !0,
      emptyCircleStyle: {
        color: "lightgray",
        opacity: 1
      },
      labelLayout: {
        // Hide the overlapped label.
        hideOverlap: !0
      },
      emphasis: {
        scale: !0,
        scaleSize: 5
      },
      // If use strategy to avoid label overlapping
      avoidLabelOverlap: !0,
      // Animation type. Valid values: expansion, scale
      animationType: "expansion",
      animationDuration: 1e3,
      // Animation type when update. Valid values: transition, expansion
      animationTypeUpdate: "transition",
      animationEasingUpdate: "cubicInOut",
      animationDurationUpdate: 500,
      animationEasing: "cubicInOut"
    }, t;
  })(ae)
);
function $E(r) {
  return {
    seriesType: r,
    reset: function(t, e) {
      var n = t.getData();
      n.filterSelf(function(i) {
        var a = n.mapDimension("value"), o = n.get(a, i);
        return !(dt(o) && !isNaN(o) && o < 0);
      });
    }
  };
}
function ZE(r) {
  r.registerChartView(WE), r.registerSeriesModel(qE), sD("pie", r.registerAction), r.registerLayout(St(BE, "pie")), r.registerProcessor(FE("pie")), r.registerProcessor($E("pie"));
}
var jE = (
  /** @class */
  (function(r) {
    z(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t.type = "grid", t.dependencies = ["xAxis", "yAxis"], t.layoutMode = "box", t.defaultOption = {
      show: !1,
      // zlevel: 0,
      z: 0,
      left: "10%",
      top: 60,
      right: "10%",
      bottom: 70,
      // If grid size contain label
      containLabel: !1,
      // width: {totalWidth} - left - right,
      // height: {totalHeight} - top - bottom,
      backgroundColor: "rgba(0,0,0,0)",
      borderWidth: 1,
      borderColor: "#ccc"
    }, t;
  })(it)
), Gf = (
  /** @class */
  (function(r) {
    z(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t.prototype.getCoordSysModel = function() {
      return this.getReferringComponents("grid", Oe).models[0];
    }, t.type = "cartesian2dAxis", t;
  })(it)
);
Ce(Gf, H0);
var d_ = {
  show: !0,
  // zlevel: 0,
  z: 0,
  // Inverse the axis.
  inverse: !1,
  // Axis name displayed.
  name: "",
  // 'start' | 'middle' | 'end'
  nameLocation: "end",
  // By degree. By default auto rotate by nameLocation.
  nameRotate: null,
  nameTruncate: {
    maxWidth: null,
    ellipsis: "...",
    placeholder: "."
  },
  // Use global text style by default.
  nameTextStyle: {},
  // The gap between axisName and axisLine.
  nameGap: 15,
  // Default `false` to support tooltip.
  silent: !1,
  // Default `false` to avoid legacy user event listener fail.
  triggerEvent: !1,
  tooltip: {
    show: !1
  },
  axisPointer: {},
  axisLine: {
    show: !0,
    onZero: !0,
    onZeroAxisIndex: null,
    lineStyle: {
      color: "#6E7079",
      width: 1,
      type: "solid"
    },
    // The arrow at both ends the the axis.
    symbol: ["none", "none"],
    symbolSize: [10, 15]
  },
  axisTick: {
    show: !0,
    // Whether axisTick is inside the grid or outside the grid.
    inside: !1,
    // The length of axisTick.
    length: 5,
    lineStyle: {
      width: 1
    }
  },
  axisLabel: {
    show: !0,
    // Whether axisLabel is inside the grid or outside the grid.
    inside: !1,
    rotate: 0,
    // true | false | null/undefined (auto)
    showMinLabel: null,
    // true | false | null/undefined (auto)
    showMaxLabel: null,
    margin: 8,
    // formatter: null,
    fontSize: 12
  },
  splitLine: {
    show: !0,
    showMinLine: !0,
    showMaxLine: !0,
    lineStyle: {
      color: ["#E0E6F1"],
      width: 1,
      type: "solid"
    }
  },
  splitArea: {
    show: !1,
    areaStyle: {
      color: ["rgba(250,250,250,0.2)", "rgba(210,219,238,0.2)"]
    }
  }
}, KE = ot({
  // The gap at both ends of the axis. For categoryAxis, boolean.
  boundaryGap: !0,
  // Set false to faster category collection.
  deduplication: null,
  // splitArea: {
  // show: false
  // },
  splitLine: {
    show: !1
  },
  axisTick: {
    // If tick is align with label when boundaryGap is true
    alignWithLabel: !1,
    interval: "auto"
  },
  axisLabel: {
    interval: "auto"
  }
}, d_), gc = ot({
  boundaryGap: [0, 0],
  axisLine: {
    // Not shown when other axis is categoryAxis in cartesian
    show: "auto"
  },
  axisTick: {
    // Not shown when other axis is categoryAxis in cartesian
    show: "auto"
  },
  // TODO
  // min/max: [30, datamin, 60] or [20, datamin] or [datamin, 60]
  splitNumber: 5,
  minorTick: {
    // Minor tick, not available for cateogry axis.
    show: !1,
    // Split number of minor ticks. The value should be in range of (0, 100)
    splitNumber: 5,
    // Length of minor tick
    length: 3,
    // Line style
    lineStyle: {
      // Default to be same with axisTick
    }
  },
  minorSplitLine: {
    show: !1,
    lineStyle: {
      color: "#F4F7FD",
      width: 1
    }
  }
}, d_), QE = ot({
  splitNumber: 6,
  axisLabel: {
    // To eliminate labels that are not nice
    showMinLabel: !1,
    showMaxLabel: !1,
    rich: {
      primary: {
        fontWeight: "bold"
      }
    }
  },
  splitLine: {
    show: !1
  }
}, gc), JE = ut({
  logBase: 10
}, gc);
const tP = {
  category: KE,
  value: gc,
  time: QE,
  log: JE
};
var eP = {
  value: 1,
  category: 1,
  time: 1,
  log: 1
};
function Yp(r, t, e, n) {
  M(eP, function(i, a) {
    var o = ot(ot({}, tP[a], !0), n, !0), s = (
      /** @class */
      (function(u) {
        z(l, u);
        function l() {
          var f = u !== null && u.apply(this, arguments) || this;
          return f.type = t + "Axis." + a, f;
        }
        return l.prototype.mergeDefaultAndTheme = function(f, h) {
          var v = Ca(this), c = v ? iu(f) : {}, d = h.getTheme();
          ot(f, d.get(a + "Axis")), ot(f, this.getDefaultOption()), f.type = Xp(f), v && fi(f, c, v);
        }, l.prototype.optionUpdated = function() {
          var f = this.option;
          f.type === "category" && (this.__ordinalMeta = kf.createByAxisModel(this));
        }, l.prototype.getCategories = function(f) {
          var h = this.option;
          if (h.type === "category")
            return f ? h.data : this.__ordinalMeta.categories;
        }, l.prototype.getOrdinalMeta = function() {
          return this.__ordinalMeta;
        }, l.type = t + "Axis." + a, l.defaultOption = o, l;
      })(e)
    );
    r.registerComponentModel(s);
  }), r.registerSubTypeDefaulter(t + "Axis", Xp);
}
function Xp(r) {
  return r.type || (r.data ? "category" : "value");
}
var rP = (
  /** @class */
  (function() {
    function r(t) {
      this.type = "cartesian", this._dimList = [], this._axes = {}, this.name = t || "";
    }
    return r.prototype.getAxis = function(t) {
      return this._axes[t];
    }, r.prototype.getAxes = function() {
      return U(this._dimList, function(t) {
        return this._axes[t];
      }, this);
    }, r.prototype.getAxesByScale = function(t) {
      return t = t.toLowerCase(), Dt(this.getAxes(), function(e) {
        return e.scale.type === t;
      });
    }, r.prototype.addAxis = function(t) {
      var e = t.dim;
      this._axes[e] = t, this._dimList.push(e);
    }, r;
  })()
), Hf = ["x", "y"];
function qp(r) {
  return r.type === "interval" || r.type === "time";
}
var nP = (
  /** @class */
  (function(r) {
    z(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = "cartesian2d", e.dimensions = Hf, e;
    }
    return t.prototype.calcAffineTransform = function() {
      this._transform = this._invTransform = null;
      var e = this.getAxis("x").scale, n = this.getAxis("y").scale;
      if (!(!qp(e) || !qp(n))) {
        var i = e.getExtent(), a = n.getExtent(), o = this.dataToPoint([i[0], a[0]]), s = this.dataToPoint([i[1], a[1]]), u = i[1] - i[0], l = a[1] - a[0];
        if (!(!u || !l)) {
          var f = (s[0] - o[0]) / u, h = (s[1] - o[1]) / l, v = o[0] - i[0] * f, c = o[1] - a[0] * h, d = this._transform = [f, 0, 0, h, v, c];
          this._invTransform = Na([], d);
        }
      }
    }, t.prototype.getBaseAxis = function() {
      return this.getAxesByScale("ordinal")[0] || this.getAxesByScale("time")[0] || this.getAxis("x");
    }, t.prototype.containPoint = function(e) {
      var n = this.getAxis("x"), i = this.getAxis("y");
      return n.contain(n.toLocalCoord(e[0])) && i.contain(i.toLocalCoord(e[1]));
    }, t.prototype.containData = function(e) {
      return this.getAxis("x").containData(e[0]) && this.getAxis("y").containData(e[1]);
    }, t.prototype.containZone = function(e, n) {
      var i = this.dataToPoint(e), a = this.dataToPoint(n), o = this.getArea(), s = new st(i[0], i[1], a[0] - i[0], a[1] - i[1]);
      return o.intersect(s);
    }, t.prototype.dataToPoint = function(e, n, i) {
      i = i || [];
      var a = e[0], o = e[1];
      if (this._transform && a != null && isFinite(a) && o != null && isFinite(o))
        return Zt(i, e, this._transform);
      var s = this.getAxis("x"), u = this.getAxis("y");
      return i[0] = s.toGlobalCoord(s.dataToCoord(a, n)), i[1] = u.toGlobalCoord(u.dataToCoord(o, n)), i;
    }, t.prototype.clampData = function(e, n) {
      var i = this.getAxis("x").scale, a = this.getAxis("y").scale, o = i.getExtent(), s = a.getExtent(), u = i.parse(e[0]), l = a.parse(e[1]);
      return n = n || [], n[0] = Math.min(Math.max(Math.min(o[0], o[1]), u), Math.max(o[0], o[1])), n[1] = Math.min(Math.max(Math.min(s[0], s[1]), l), Math.max(s[0], s[1])), n;
    }, t.prototype.pointToData = function(e, n) {
      var i = [];
      if (this._invTransform)
        return Zt(i, e, this._invTransform);
      var a = this.getAxis("x"), o = this.getAxis("y");
      return i[0] = a.coordToData(a.toLocalCoord(e[0]), n), i[1] = o.coordToData(o.toLocalCoord(e[1]), n), i;
    }, t.prototype.getOtherAxis = function(e) {
      return this.getAxis(e.dim === "x" ? "y" : "x");
    }, t.prototype.getArea = function(e) {
      e = e || 0;
      var n = this.getAxis("x").getGlobalExtent(), i = this.getAxis("y").getGlobalExtent(), a = Math.min(n[0], n[1]) - e, o = Math.min(i[0], i[1]) - e, s = Math.max(n[0], n[1]) - a + e, u = Math.max(i[0], i[1]) - o + e;
      return new st(a, o, s, u);
    }, t;
  })(rP)
), iP = (
  /** @class */
  (function(r) {
    z(t, r);
    function t(e, n, i, a, o) {
      var s = r.call(this, e, n, i) || this;
      return s.index = 0, s.type = a || "value", s.position = o || "bottom", s;
    }
    return t.prototype.isHorizontal = function() {
      var e = this.position;
      return e === "top" || e === "bottom";
    }, t.prototype.getGlobalExtent = function(e) {
      var n = this.getExtent();
      return n[0] = this.toGlobalCoord(n[0]), n[1] = this.toGlobalCoord(n[1]), e && n[0] > n[1] && n.reverse(), n;
    }, t.prototype.pointToData = function(e, n) {
      return this.coordToData(this.toLocalCoord(e[this.dim === "x" ? 0 : 1]), n);
    }, t.prototype.setCategorySortInfo = function(e) {
      if (this.type !== "category")
        return !1;
      this.model.option.categorySortInfo = e, this.scale.setSortInfo(e);
    }, t;
  })(Q0)
);
function Wf(r, t, e) {
  e = e || {};
  var n = r.coordinateSystem, i = t.axis, a = {}, o = i.getAxesOnZeroOf()[0], s = i.position, u = o ? "onZero" : s, l = i.dim, f = n.getRect(), h = [f.x, f.x + f.width, f.y, f.y + f.height], v = {
    left: 0,
    right: 1,
    top: 0,
    bottom: 1,
    onZero: 2
  }, c = t.get("offset") || 0, d = l === "x" ? [h[2] - c, h[3] + c] : [h[0] - c, h[1] + c];
  if (o) {
    var p = o.toGlobalCoord(o.dataToCoord(0));
    d[v.onZero] = Math.max(Math.min(p, d[1]), d[0]);
  }
  a.position = [l === "y" ? d[v[u]] : h[0], l === "x" ? d[v[u]] : h[3]], a.rotation = Math.PI / 2 * (l === "x" ? 0 : 1);
  var g = {
    top: -1,
    bottom: 1,
    left: -1,
    right: 1
  };
  a.labelDirection = a.tickDirection = a.nameDirection = g[s], a.labelOffset = o ? d[v[s]] - d[v.onZero] : 0, t.get(["axisTick", "inside"]) && (a.tickDirection = -a.tickDirection), Gr(e.labelInside, t.get(["axisLabel", "inside"])) && (a.labelDirection = -a.labelDirection);
  var y = t.get(["axisLabel", "rotate"]);
  return a.labelRotate = u === "top" ? -y : y, a.z2 = 1, a;
}
function $p(r) {
  return r.get("coordinateSystem") === "cartesian2d";
}
function Zp(r) {
  var t = {
    xAxisModel: null,
    yAxisModel: null
  };
  return M(t, function(e, n) {
    var i = n.replace(/Model$/, ""), a = r.getReferringComponents(i, Oe).models[0];
    if (process.env.NODE_ENV !== "production" && !a)
      throw new Error(i + ' "' + kr(r.get(i + "Index"), r.get(i + "Id"), 0) + '" not found');
    t[n] = a;
  }), t;
}
var Ol = Math.log;
function aP(r, t, e) {
  var n = pi.prototype, i = n.getTicks.call(e), a = n.getTicks.call(e, !0), o = i.length - 1, s = n.getInterval.call(e), u = V0(r, t), l = u.extent, f = u.fixMin, h = u.fixMax;
  if (r.type === "log") {
    var v = Ol(r.base);
    l = [Ol(l[0]) / v, Ol(l[1]) / v];
  }
  r.setExtent(l[0], l[1]), r.calcNiceExtent({
    splitNumber: o,
    fixMin: f,
    fixMax: h
  });
  var c = n.getExtent.call(r);
  f && (l[0] = c[0]), h && (l[1] = c[1]);
  var d = n.getInterval.call(r), p = l[0], g = l[1];
  if (f && h)
    d = (g - p) / o;
  else if (f)
    for (g = l[0] + d * o; g < l[1] && isFinite(g) && isFinite(l[1]); )
      d = Tl(d), g = l[0] + d * o;
  else if (h)
    for (p = l[1] - d * o; p > l[0] && isFinite(p) && isFinite(l[0]); )
      d = Tl(d), p = l[1] - d * o;
  else {
    var y = r.getTicks().length - 1;
    y > o && (d = Tl(d));
    var m = d * o;
    g = Math.ceil(l[1] / d) * d, p = xt(g - m), p < 0 && l[0] >= 0 ? (p = 0, g = xt(m)) : g > 0 && l[1] <= 0 && (g = 0, p = -xt(m));
  }
  var _ = (i[0].value - a[0].value) / s, S = (i[o].value - a[o].value) / s;
  if (n.setExtent.call(r, p + d * _, g + d * S), n.setInterval.call(r, d), (_ || S) && n.setNiceExtent.call(r, p + d, g - d), process.env.NODE_ENV !== "production") {
    var w = n.getTicks.call(r);
    w[1] && (!kA(d) || ss(w[1].value) > ss(d)) && zt(
      // eslint-disable-next-line
      "The ticks may be not readable when set min: " + t.get("min") + ", max: " + t.get("max") + " and alignTicks: true"
    );
  }
}
var oP = (
  /** @class */
  (function() {
    function r(t, e, n) {
      this.type = "grid", this._coordsMap = {}, this._coordsList = [], this._axesMap = {}, this._axesList = [], this.axisPointerEnabled = !0, this.dimensions = Hf, this._initCartesian(t, e, n), this.model = t;
    }
    return r.prototype.getRect = function() {
      return this._rect;
    }, r.prototype.update = function(t, e) {
      var n = this._axesMap;
      this._updateScale(t, this.model);
      function i(o) {
        var s, u = yt(o), l = u.length;
        if (l) {
          for (var f = [], h = l - 1; h >= 0; h--) {
            var v = +u[h], c = o[v], d = c.model, p = c.scale;
            // Only value and log axis without interval support alignTicks.
            Bf(p) && d.get("alignTicks") && d.get("interval") == null ? f.push(c) : (Ff(p, d), Bf(p) && (s = c));
          }
          f.length && (s || (s = f.pop(), Ff(s.scale, s.model)), M(f, function(g) {
            aP(g.scale, g.model, s.scale);
          }));
        }
      }
      i(n.x), i(n.y);
      var a = {};
      M(n.x, function(o) {
        jp(n, "y", o, a);
      }), M(n.y, function(o) {
        jp(n, "x", o, a);
      }), this.resize(this.model, e);
    }, r.prototype.resize = function(t, e, n) {
      var i = t.getBoxLayoutParams(), a = !n && t.get("containLabel"), o = Pn(i, {
        width: e.getWidth(),
        height: e.getHeight()
      });
      this._rect = o;
      var s = this._axesList;
      u(), a && (M(s, function(l) {
        if (!l.model.get(["axisLabel", "inside"])) {
          var f = fM(l);
          if (f) {
            var h = l.isHorizontal() ? "height" : "width", v = l.model.get(["axisLabel", "margin"]);
            o[h] -= f[h] + v, l.position === "top" ? o.y += f.height + v : l.position === "left" && (o.x += f.width + v);
          }
        }
      }), u()), M(this._coordsList, function(l) {
        l.calcAffineTransform();
      });
      function u() {
        M(s, function(l) {
          var f = l.isHorizontal(), h = f ? [0, o.width] : [0, o.height], v = l.inverse ? 1 : 0;
          l.setExtent(h[v], h[1 - v]), sP(l, f ? o.x : o.y);
        });
      }
    }, r.prototype.getAxis = function(t, e) {
      var n = this._axesMap[t];
      if (n != null)
        return n[e || 0];
    }, r.prototype.getAxes = function() {
      return this._axesList.slice();
    }, r.prototype.getCartesian = function(t, e) {
      if (t != null && e != null) {
        var n = "x" + t + "y" + e;
        return this._coordsMap[n];
      }
      Y(t) && (e = t.yAxisIndex, t = t.xAxisIndex);
      for (var i = 0, a = this._coordsList; i < a.length; i++)
        if (a[i].getAxis("x").index === t || a[i].getAxis("y").index === e)
          return a[i];
    }, r.prototype.getCartesians = function() {
      return this._coordsList.slice();
    }, r.prototype.convertToPixel = function(t, e, n) {
      var i = this._findConvertTarget(e);
      return i.cartesian ? i.cartesian.dataToPoint(n) : i.axis ? i.axis.toGlobalCoord(i.axis.dataToCoord(n)) : null;
    }, r.prototype.convertFromPixel = function(t, e, n) {
      var i = this._findConvertTarget(e);
      return i.cartesian ? i.cartesian.pointToData(n) : i.axis ? i.axis.coordToData(i.axis.toLocalCoord(n)) : null;
    }, r.prototype._findConvertTarget = function(t) {
      var e = t.seriesModel, n = t.xAxisModel || e && e.getReferringComponents("xAxis", Oe).models[0], i = t.yAxisModel || e && e.getReferringComponents("yAxis", Oe).models[0], a = t.gridModel, o = this._coordsList, s, u;
      if (e)
        s = e.coordinateSystem, ht(o, s) < 0 && (s = null);
      else if (n && i)
        s = this.getCartesian(n.componentIndex, i.componentIndex);
      else if (n)
        u = this.getAxis("x", n.componentIndex);
      else if (i)
        u = this.getAxis("y", i.componentIndex);
      else if (a) {
        var l = a.coordinateSystem;
        l === this && (s = this._coordsList[0]);
      }
      return {
        cartesian: s,
        axis: u
      };
    }, r.prototype.containPoint = function(t) {
      var e = this._coordsList[0];
      if (e)
        return e.containPoint(t);
    }, r.prototype._initCartesian = function(t, e, n) {
      var i = this, a = this, o = {
        left: !1,
        right: !1,
        top: !1,
        bottom: !1
      }, s = {
        x: {},
        y: {}
      }, u = {
        x: 0,
        y: 0
      };
      if (e.eachComponent("xAxis", l("x"), this), e.eachComponent("yAxis", l("y"), this), !u.x || !u.y) {
        this._axesMap = {}, this._axesList = [];
        return;
      }
      this._axesMap = s, M(s.x, function(f, h) {
        M(s.y, function(v, c) {
          var d = "x" + h + "y" + c, p = new nP(d);
          p.master = i, p.model = t, i._coordsMap[d] = p, i._coordsList.push(p), p.addAxis(f), p.addAxis(v);
        });
      });
      function l(f) {
        return function(h, v) {
          if (Rl(h, t)) {
            var c = h.get("position");
            f === "x" ? c !== "top" && c !== "bottom" && (c = o.bottom ? "top" : "bottom") : c !== "left" && c !== "right" && (c = o.left ? "right" : "left"), o[c] = !0;
            var d = new iP(f, z0(h), [0, 0], h.get("type"), c), p = d.type === "category";
            d.onBand = p && h.get("boundaryGap"), d.inverse = h.get("inverse"), h.axis = d, d.model = h, d.grid = a, d.index = v, a._axesList.push(d), s[f][v] = d, u[f]++;
          }
        };
      }
    }, r.prototype._updateScale = function(t, e) {
      M(this._axesList, function(i) {
        if (i.scale.setExtent(1 / 0, -1 / 0), i.type === "category") {
          var a = i.model.get("categorySortInfo");
          i.scale.setSortInfo(a);
        }
      }), t.eachSeries(function(i) {
        if ($p(i)) {
          var a = Zp(i), o = a.xAxisModel, s = a.yAxisModel;
          if (!Rl(o, e) || !Rl(s, e))
            return;
          var u = this.getCartesian(o.componentIndex, s.componentIndex), l = i.getData(), f = u.getAxis("x"), h = u.getAxis("y");
          n(l, f), n(l, h);
        }
      }, this);
      function n(i, a) {
        M(cM(i, a.dim), function(o) {
          a.scale.unionExtentFromData(i, o);
        });
      }
    }, r.prototype.getTooltipAxes = function(t) {
      var e = [], n = [];
      return M(this.getCartesians(), function(i) {
        var a = t != null && t !== "auto" ? i.getAxis(t) : i.getBaseAxis(), o = i.getOtherAxis(a);
        ht(e, a) < 0 && e.push(a), ht(n, o) < 0 && n.push(o);
      }), {
        baseAxes: e,
        otherAxes: n
      };
    }, r.create = function(t, e) {
      var n = [];
      return t.eachComponent("grid", function(i, a) {
        var o = new r(i, t, e);
        o.name = "grid_" + a, o.resize(i, e, !0), i.coordinateSystem = o, n.push(o);
      }), t.eachSeries(function(i) {
        if ($p(i)) {
          var a = Zp(i), o = a.xAxisModel, s = a.yAxisModel, u = o.getCoordSysModel();
          if (process.env.NODE_ENV !== "production") {
            if (!u)
              throw new Error('Grid "' + kr(o.get("gridIndex"), o.get("gridId"), 0) + '" not found');
            if (o.getCoordSysModel() !== s.getCoordSysModel())
              throw new Error("xAxis and yAxis must use the same grid");
          }
          var l = u.coordinateSystem;
          i.coordinateSystem = l.getCartesian(o.componentIndex, s.componentIndex);
        }
      }), n;
    }, r.dimensions = Hf, r;
  })()
);
function Rl(r, t) {
  return r.getCoordSysModel() === t;
}
function jp(r, t, e, n) {
  e.getAxesOnZeroOf = function() {
    return a ? [a] : [];
  };
  var i = r[t], a, o = e.model, s = o.get(["axisLine", "onZero"]), u = o.get(["axisLine", "onZeroAxisIndex"]);
  if (!s)
    return;
  if (u != null)
    Kp(i[u]) && (a = i[u]);
  else
    for (var l in i)
      if (i.hasOwnProperty(l) && Kp(i[l]) && !n[f(i[l])]) {
        a = i[l];
        break;
      }
  a && (n[f(a)] = !0);
  function f(h) {
    return h.dim + "_" + h.index;
  }
}
function Kp(r) {
  return r && r.type !== "category" && r.type !== "time" && lM(r);
}
function sP(r, t) {
  var e = r.getExtent(), n = e[0] + e[1];
  r.toGlobalCoord = r.dim === "x" ? function(i) {
    return i + t;
  } : function(i) {
    return n - i + t;
  }, r.toLocalCoord = r.dim === "x" ? function(i) {
    return i - t;
  } : function(i) {
    return n - i + t;
  };
}
var Rr = Math.PI, zr = (
  /** @class */
  (function() {
    function r(t, e) {
      this.group = new It(), this.opt = e, this.axisModel = t, ut(e, {
        labelOffset: 0,
        nameDirection: 1,
        tickDirection: 1,
        labelDirection: 1,
        silent: !0,
        handleAutoShown: function() {
          return !0;
        }
      });
      var n = new It({
        x: e.position[0],
        y: e.position[1],
        rotation: e.rotation
      });
      n.updateTransform(), this._transformGroup = n;
    }
    return r.prototype.hasBuilder = function(t) {
      return !!Qp[t];
    }, r.prototype.add = function(t) {
      Qp[t](this.opt, this.axisModel, this.group, this._transformGroup);
    }, r.prototype.getGroup = function() {
      return this.group;
    }, r.innerTextLayout = function(t, e, n) {
      var i = gh(e - t), a, o;
      return _a(i) ? (o = n > 0 ? "top" : "bottom", a = "center") : _a(i - Rr) ? (o = n > 0 ? "bottom" : "top", a = "center") : (o = "middle", i > 0 && i < Rr ? a = n > 0 ? "right" : "left" : a = n > 0 ? "left" : "right"), {
        rotation: i,
        textAlign: a,
        textVerticalAlign: o
      };
    }, r.makeAxisEventDataBase = function(t) {
      var e = {
        componentType: t.mainType,
        componentIndex: t.componentIndex
      };
      return e[t.mainType + "Index"] = t.componentIndex, e;
    }, r.isLabelSilent = function(t) {
      var e = t.get("tooltip");
      return t.get("silent") || !(t.get("triggerEvent") || e && e.show);
    }, r;
  })()
), Qp = {
  axisLine: function(r, t, e, n) {
    var i = t.get(["axisLine", "show"]);
    if (i === "auto" && r.handleAutoShown && (i = r.handleAutoShown("axisLine")), !!i) {
      var a = t.axis.getExtent(), o = n.transform, s = [a[0], 0], u = [a[1], 0], l = s[0] > u[0];
      o && (Zt(s, s, o), Zt(u, u, o));
      var f = F({
        lineCap: "round"
      }, t.getModel(["axisLine", "lineStyle"]).getLineStyle()), h = new cr({
        shape: {
          x1: s[0],
          y1: s[1],
          x2: u[0],
          y2: u[1]
        },
        style: f,
        strokeContainThreshold: r.strokeContainThreshold || 5,
        silent: !0,
        z2: 1
      });
      xa(h.shape, h.style.lineWidth), h.anid = "line", e.add(h);
      var v = t.get(["axisLine", "symbol"]);
      if (v != null) {
        var c = t.get(["axisLine", "symbolSize"]);
        W(v) && (v = [v, v]), (W(c) || dt(c)) && (c = [c, c]);
        var d = Km(t.get(["axisLine", "symbolOffset"]) || 0, c), p = c[0], g = c[1];
        M([{
          rotate: r.rotation + Math.PI / 2,
          offset: d[0],
          r: 0
        }, {
          rotate: r.rotation - Math.PI / 2,
          offset: d[1],
          r: Math.sqrt((s[0] - u[0]) * (s[0] - u[0]) + (s[1] - u[1]) * (s[1] - u[1]))
        }], function(y, m) {
          if (v[m] !== "none" && v[m] != null) {
            var _ = In(v[m], -p / 2, -g / 2, p, g, f.stroke, !0), S = y.r + y.offset, w = l ? u : s;
            _.attr({
              rotation: y.rotate,
              x: w[0] + S * Math.cos(r.rotation),
              y: w[1] - S * Math.sin(r.rotation),
              silent: !0,
              z2: 11
            }), e.add(_);
          }
        });
      }
    }
  },
  axisTickLabel: function(r, t, e, n) {
    var i = fP(e, n, t, r), a = cP(e, n, t, r);
    if (lP(t, a, i), hP(e, n, t, r.tickDirection), t.get(["axisLabel", "hideOverlap"])) {
      var o = $M(U(a, function(s) {
        return {
          label: s,
          priority: s.z2,
          defaultAttr: {
            ignore: s.ignore
          }
        };
      }));
      KM(o);
    }
  },
  axisName: function(r, t, e, n) {
    var i = Gr(r.axisName, t.get("name"));
    if (i) {
      var a = t.get("nameLocation"), o = r.nameDirection, s = t.getModel("nameTextStyle"), u = t.get("nameGap") || 0, l = t.axis.getExtent(), f = l[0] > l[1] ? -1 : 1, h = [
        a === "start" ? l[0] - f * u : a === "end" ? l[1] + f * u : (l[0] + l[1]) / 2,
        // Reuse labelOffset.
        tg(a) ? r.labelOffset + o * u : 0
      ], v, c = t.get("nameRotate");
      c != null && (c = c * Rr / 180);
      var d;
      tg(a) ? v = zr.innerTextLayout(
        r.rotation,
        c ?? r.rotation,
        // Adapt to axis.
        o
      ) : (v = uP(r.rotation, a, c || 0, l), d = r.axisNameAvailableWidth, d != null && (d = Math.abs(d / Math.sin(v.rotation)), !isFinite(d) && (d = null)));
      var p = s.getFont(), g = t.get("nameTruncate", !0) || {}, y = g.ellipsis, m = Gr(r.nameTruncateMaxWidth, g.maxWidth, d), _ = new Mt({
        x: h[0],
        y: h[1],
        rotation: v.rotation,
        silent: zr.isLabelSilent(t),
        style: vr(s, {
          text: i,
          font: p,
          overflow: "truncate",
          width: m,
          ellipsis: y,
          fill: s.getTextColor() || t.get(["axisLine", "lineStyle", "color"]),
          align: s.get("align") || v.textAlign,
          verticalAlign: s.get("verticalAlign") || v.textVerticalAlign
        }),
        z2: 1
      });
      if (Zs({
        el: _,
        componentModel: t,
        itemName: i
      }), _.__fullText = i, _.anid = "name", t.get("triggerEvent")) {
        var S = zr.makeAxisEventDataBase(t);
        S.targetType = "axisName", S.name = i, at(_).eventData = S;
      }
      n.add(_), _.updateTransform(), e.add(_), _.decomposeTransform();
    }
  }
};
function uP(r, t, e, n) {
  var i = gh(e - r), a, o, s = n[0] > n[1], u = t === "start" && !s || t !== "start" && s;
  return _a(i - Rr / 2) ? (o = u ? "bottom" : "top", a = "center") : _a(i - Rr * 1.5) ? (o = u ? "top" : "bottom", a = "center") : (o = "middle", i < Rr * 1.5 && i > Rr / 2 ? a = u ? "left" : "right" : a = u ? "right" : "left"), {
    rotation: i,
    textAlign: a,
    textVerticalAlign: o
  };
}
function lP(r, t, e) {
  if (!G0(r.axis)) {
    var n = r.get(["axisLabel", "showMinLabel"]), i = r.get(["axisLabel", "showMaxLabel"]);
    t = t || [], e = e || [];
    var a = t[0], o = t[1], s = t[t.length - 1], u = t[t.length - 2], l = e[0], f = e[1], h = e[e.length - 1], v = e[e.length - 2];
    n === !1 ? (de(a), de(l)) : Jp(a, o) && (n ? (de(o), de(f)) : (de(a), de(l))), i === !1 ? (de(s), de(h)) : Jp(u, s) && (i ? (de(u), de(v)) : (de(s), de(h)));
  }
}
function de(r) {
  r && (r.ignore = !0);
}
function Jp(r, t) {
  var e = r && r.getBoundingRect().clone(), n = t && t.getBoundingRect().clone();
  if (!(!e || !n)) {
    var i = Ra([]);
    return Rs(i, i, -r.rotation), e.applyTransform(Fr([], i, r.getLocalTransform())), n.applyTransform(Fr([], i, t.getLocalTransform())), e.intersect(n);
  }
}
function tg(r) {
  return r === "middle" || r === "center";
}
function p_(r, t, e, n, i) {
  for (var a = [], o = [], s = [], u = 0; u < r.length; u++) {
    var l = r[u].coord;
    o[0] = l, o[1] = 0, s[0] = l, s[1] = e, t && (Zt(o, o, t), Zt(s, s, t));
    var f = new cr({
      shape: {
        x1: o[0],
        y1: o[1],
        x2: s[0],
        y2: s[1]
      },
      style: n,
      z2: 2,
      autoBatch: !0,
      silent: !0
    });
    xa(f.shape, f.style.lineWidth), f.anid = i + "_" + r[u].tickValue, a.push(f);
  }
  return a;
}
function fP(r, t, e, n) {
  var i = e.axis, a = e.getModel("axisTick"), o = a.get("show");
  if (o === "auto" && n.handleAutoShown && (o = n.handleAutoShown("axisTick")), !(!o || i.scale.isBlank())) {
    for (var s = a.getModel("lineStyle"), u = n.tickDirection * a.get("length"), l = i.getTicksCoords(), f = p_(l, t.transform, u, ut(s.getLineStyle(), {
      stroke: e.get(["axisLine", "lineStyle", "color"])
    }), "ticks"), h = 0; h < f.length; h++)
      r.add(f[h]);
    return f;
  }
}
function hP(r, t, e, n) {
  var i = e.axis, a = e.getModel("minorTick");
  if (!(!a.get("show") || i.scale.isBlank())) {
    var o = i.getMinorTicksCoords();
    if (o.length)
      for (var s = a.getModel("lineStyle"), u = n * a.get("length"), l = ut(s.getLineStyle(), ut(e.getModel("axisTick").getLineStyle(), {
        stroke: e.get(["axisLine", "lineStyle", "color"])
      })), f = 0; f < o.length; f++)
        for (var h = p_(o[f], t.transform, u, l, "minorticks_" + f), v = 0; v < h.length; v++)
          r.add(h[v]);
  }
}
function cP(r, t, e, n) {
  var i = e.axis, a = Gr(n.axisLabelShow, e.get(["axisLabel", "show"]));
  if (!(!a || i.scale.isBlank())) {
    var o = e.getModel("axisLabel"), s = o.get("margin"), u = i.getViewLabels(), l = (Gr(n.labelRotate, o.get("rotate")) || 0) * Rr / 180, f = zr.innerTextLayout(n.rotation, l, n.labelDirection), h = e.getCategories && e.getCategories(!0), v = [], c = zr.isLabelSilent(e), d = e.get("triggerEvent");
    return M(u, function(p, g) {
      var y = i.scale.type === "ordinal" ? i.scale.getRawOrdinalNumber(p.tickValue) : p.tickValue, m = p.formattedLabel, _ = p.rawLabel, S = o;
      if (h && h[y]) {
        var w = h[y];
        Y(w) && w.textStyle && (S = new gt(w.textStyle, o, e.ecModel));
      }
      var b = S.getTextColor() || e.get(["axisLine", "lineStyle", "color"]), x = i.dataToCoord(y), T = S.getShallow("align", !0) || f.textAlign, D = K(S.getShallow("alignMinLabel", !0), T), A = K(S.getShallow("alignMaxLabel", !0), T), C = S.getShallow("verticalAlign", !0) || S.getShallow("baseline", !0) || f.textVerticalAlign, E = K(S.getShallow("verticalAlignMinLabel", !0), C), P = K(S.getShallow("verticalAlignMaxLabel", !0), C), L = new Mt({
        x,
        y: n.labelOffset + n.labelDirection * s,
        rotation: f.rotation,
        silent: c,
        z2: 10 + (p.level || 0),
        style: vr(S, {
          text: m,
          align: g === 0 ? D : g === u.length - 1 ? A : T,
          verticalAlign: g === 0 ? E : g === u.length - 1 ? P : C,
          fill: Z(b) ? b(
            // (1) In category axis with data zoom, tick is not the original
            // index of axis.data. So tick should not be exposed to user
            // in category axis.
            // (2) Compatible with previous version, which always use formatted label as
            // input. But in interval scale the formatted label is like '223,445', which
            // maked user replace ','. So we modify it to return original val but remain
            // it as 'string' to avoid error in replacing.
            i.type === "category" ? _ : i.type === "value" ? y + "" : y,
            g
          ) : b
        })
      });
      if (L.anid = "label_" + y, Zs({
        el: L,
        componentModel: e,
        itemName: m,
        formatterParamsExtra: {
          isTruncated: function() {
            return L.isTruncated;
          },
          value: _,
          tickIndex: g
        }
      }), d) {
        var O = zr.makeAxisEventDataBase(e);
        O.targetType = "axisLabel", O.value = _, O.tickIndex = g, i.type === "category" && (O.dataIndex = y), at(L).eventData = O;
      }
      t.add(L), L.updateTransform(), v.push(L), r.add(L), L.decomposeTransform();
    }), v;
  }
}
function vP(r, t) {
  var e = {
    /**
     * key: makeKey(axis.model)
     * value: {
     *      axis,
     *      coordSys,
     *      axisPointerModel,
     *      triggerTooltip,
     *      triggerEmphasis,
     *      involveSeries,
     *      snap,
     *      seriesModels,
     *      seriesDataCount
     * }
     */
    axesInfo: {},
    seriesInvolved: !1,
    /**
     * key: makeKey(coordSys.model)
     * value: Object: key makeKey(axis.model), value: axisInfo
     */
    coordSysAxesInfo: {},
    coordSysMap: {}
  };
  return dP(e, r, t), e.seriesInvolved && gP(e, r), e;
}
function dP(r, t, e) {
  var n = t.getComponent("tooltip"), i = t.getComponent("axisPointer"), a = i.get("link", !0) || [], o = [];
  M(e.getCoordinateSystems(), function(s) {
    if (!s.axisPointerEnabled)
      return;
    var u = Ia(s.model), l = r.coordSysAxesInfo[u] = {};
    r.coordSysMap[u] = s;
    var f = s.model, h = f.getModel("tooltip", n);
    if (M(s.getAxes(), St(p, !1, null)), s.getTooltipAxes && n && h.get("show")) {
      var v = h.get("trigger") === "axis", c = h.get(["axisPointer", "type"]) === "cross", d = s.getTooltipAxes(h.get(["axisPointer", "axis"]));
      (v || c) && M(d.baseAxes, St(p, c ? "cross" : !0, v)), c && M(d.otherAxes, St(p, "cross", !1));
    }
    function p(g, y, m) {
      var _ = m.model.getModel("axisPointer", i), S = _.get("show");
      if (!(!S || S === "auto" && !g && !Uf(_))) {
        y == null && (y = _.get("triggerTooltip")), _ = g ? pP(m, h, i, t, g, y) : _;
        var w = _.get("snap"), b = _.get("triggerEmphasis"), x = Ia(m.model), T = y || w || m.type === "category", D = r.axesInfo[x] = {
          key: x,
          axis: m,
          coordSys: s,
          axisPointerModel: _,
          triggerTooltip: y,
          triggerEmphasis: b,
          involveSeries: T,
          snap: w,
          useHandle: Uf(_),
          seriesModels: [],
          linkGroup: null
        };
        l[x] = D, r.seriesInvolved = r.seriesInvolved || T;
        var A = yP(a, m);
        if (A != null) {
          var C = o[A] || (o[A] = {
            axesInfo: {}
          });
          C.axesInfo[x] = D, C.mapper = a[A].mapper, D.linkGroup = C;
        }
      }
    }
  });
}
function pP(r, t, e, n, i, a) {
  var o = t.getModel("axisPointer"), s = ["type", "snap", "lineStyle", "shadowStyle", "label", "animation", "animationDurationUpdate", "animationEasingUpdate", "z"], u = {};
  M(s, function(v) {
    u[v] = nt(o.get(v));
  }), u.snap = r.type !== "category" && !!a, o.get("type") === "cross" && (u.type = "line");
  var l = u.label || (u.label = {});
  if (l.show == null && (l.show = !1), i === "cross") {
    var f = o.get(["label", "show"]);
    if (l.show = f ?? !0, !a) {
      var h = u.lineStyle = o.get("crossStyle");
      h && ut(l, h.textStyle);
    }
  }
  return r.model.getModel("axisPointer", new gt(u, e, n));
}
function gP(r, t) {
  t.eachSeries(function(e) {
    var n = e.coordinateSystem, i = e.get(["tooltip", "trigger"], !0), a = e.get(["tooltip", "show"], !0);
    !n || i === "none" || i === !1 || i === "item" || a === !1 || e.get(["axisPointer", "show"], !0) === !1 || M(r.coordSysAxesInfo[Ia(n.model)], function(o) {
      var s = o.axis;
      n.getAxis(s.dim) === s && (o.seriesModels.push(e), o.seriesDataCount == null && (o.seriesDataCount = 0), o.seriesDataCount += e.getData().count());
    });
  });
}
function yP(r, t) {
  for (var e = t.model, n = t.dim, i = 0; i < r.length; i++) {
    var a = r[i] || {};
    if (Nl(a[n + "AxisId"], e.id) || Nl(a[n + "AxisIndex"], e.componentIndex) || Nl(a[n + "AxisName"], e.name))
      return i;
  }
}
function Nl(r, t) {
  return r === "all" || H(r) && ht(r, t) >= 0 || r === t;
}
function mP(r) {
  var t = yc(r);
  if (t) {
    var e = t.axisPointerModel, n = t.axis.scale, i = e.option, a = e.get("status"), o = e.get("value");
    o != null && (o = n.parse(o));
    var s = Uf(e);
    a == null && (i.status = s ? "show" : "hide");
    var u = n.getExtent().slice();
    u[0] > u[1] && u.reverse(), // Pick a value on axis when initializing.
    (o == null || o > u[1]) && (o = u[1]), o < u[0] && (o = u[0]), i.value = o, s && (i.status = t.axis.scale.isBlank() ? "hide" : "show");
  }
}
function yc(r) {
  var t = (r.ecModel.getComponent("axisPointer") || {}).coordSysAxesInfo;
  return t && t.axesInfo[Ia(r)];
}
function _P(r) {
  var t = yc(r);
  return t && t.axisPointerModel;
}
function Uf(r) {
  return !!r.get(["handle", "show"]);
}
function Ia(r) {
  return r.type + "||" + r.id;
}
var kl = {}, g_ = (
  /** @class */
  (function(r) {
    z(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.prototype.render = function(e, n, i, a) {
      this.axisPointerClass && mP(e), r.prototype.render.apply(this, arguments), this._doUpdateAxisPointerClass(e, i, !0);
    }, t.prototype.updateAxisPointer = function(e, n, i, a) {
      this._doUpdateAxisPointerClass(e, i, !1);
    }, t.prototype.remove = function(e, n) {
      var i = this._axisPointer;
      i && i.remove(n);
    }, t.prototype.dispose = function(e, n) {
      this._disposeAxisPointer(n), r.prototype.dispose.apply(this, arguments);
    }, t.prototype._doUpdateAxisPointerClass = function(e, n, i) {
      var a = t.getAxisPointerClass(this.axisPointerClass);
      if (a) {
        var o = _P(e);
        o ? (this._axisPointer || (this._axisPointer = new a())).render(e, o, n, i) : this._disposeAxisPointer(n);
      }
    }, t.prototype._disposeAxisPointer = function(e) {
      this._axisPointer && this._axisPointer.dispose(e), this._axisPointer = null;
    }, t.registerAxisPointerClass = function(e, n) {
      if (process.env.NODE_ENV !== "production" && kl[e])
        throw new Error("axisPointer " + e + " exists");
      kl[e] = n;
    }, t.getAxisPointerClass = function(e) {
      return e && kl[e];
    }, t.type = "axis", t;
  })(oe)
), Yf = Ct();
function SP(r, t, e, n) {
  var i = e.axis;
  if (!i.scale.isBlank()) {
    var a = e.getModel("splitArea"), o = a.getModel("areaStyle"), s = o.get("color"), u = n.coordinateSystem.getRect(), l = i.getTicksCoords({
      tickModel: a,
      clamp: !0
    });
    if (l.length) {
      var f = s.length, h = Yf(r).splitAreaColors, v = Q(), c = 0;
      if (h)
        for (var d = 0; d < l.length; d++) {
          var p = h.get(l[d].tickValue);
          if (p != null) {
            c = (p + (f - 1) * d) % f;
            break;
          }
        }
      var g = i.toGlobalCoord(l[0].coord), y = o.getAreaStyle();
      s = H(s) ? s : [s];
      for (var d = 1; d < l.length; d++) {
        var m = i.toGlobalCoord(l[d].coord), _ = void 0, S = void 0, w = void 0, b = void 0;
        i.isHorizontal() ? (_ = g, S = u.y, w = m - _, b = u.height, g = _ + w) : (_ = u.x, S = g, w = u.width, b = m - S, g = S + b);
        var x = l[d - 1].tickValue;
        x != null && v.set(x, c), t.add(new Tt({
          anid: x != null ? "area_" + x : null,
          shape: {
            x: _,
            y: S,
            width: w,
            height: b
          },
          style: ut({
            fill: s[c]
          }, y),
          autoBatch: !0,
          silent: !0
        })), c = (c + 1) % f;
      }
      Yf(r).splitAreaColors = v;
    }
  }
}
function bP(r) {
  Yf(r).splitAreaColors = null;
}
var wP = ["axisLine", "axisTickLabel", "axisName"], xP = ["splitArea", "splitLine", "minorSplitLine"], y_ = (
  /** @class */
  (function(r) {
    z(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e.axisPointerClass = "CartesianAxisPointer", e;
    }
    return t.prototype.render = function(e, n, i, a) {
      this.group.removeAll();
      var o = this._axisGroup;
      if (this._axisGroup = new It(), this.group.add(this._axisGroup), !!e.get("show")) {
        var s = e.getCoordSysModel(), u = Wf(s, e), l = new zr(e, F({
          handleAutoShown: function(h) {
            for (var v = s.coordinateSystem.getCartesians(), c = 0; c < v.length; c++)
              if (Bf(v[c].getOtherAxis(e.axis).scale))
                return !0;
            return !1;
          }
        }, u));
        M(wP, l.add, l), this._axisGroup.add(l.getGroup()), M(xP, function(h) {
          e.get([h, "show"]) && TP[h](this, this._axisGroup, e, s);
        }, this);
        var f = a && a.type === "changeAxisOrder" && a.isInitSort;
        f || em(o, this._axisGroup, e), r.prototype.render.call(this, e, n, i, a);
      }
    }, t.prototype.remove = function() {
      bP(this);
    }, t.type = "cartesianAxis", t;
  })(g_)
), TP = {
  splitLine: function(r, t, e, n) {
    var i = e.axis;
    if (!i.scale.isBlank()) {
      var a = e.getModel("splitLine"), o = a.getModel("lineStyle"), s = o.get("color"), u = a.get("showMinLine") !== !1, l = a.get("showMaxLine") !== !1;
      s = H(s) ? s : [s];
      for (var f = n.coordinateSystem.getRect(), h = i.isHorizontal(), v = 0, c = i.getTicksCoords({
        tickModel: a
      }), d = [], p = [], g = o.getLineStyle(), y = 0; y < c.length; y++) {
        var m = i.toGlobalCoord(c[y].coord);
        if (!(y === 0 && !u || y === c.length - 1 && !l)) {
          var _ = c[y].tickValue;
          h ? (d[0] = m, d[1] = f.y, p[0] = m, p[1] = f.y + f.height) : (d[0] = f.x, d[1] = m, p[0] = f.x + f.width, p[1] = m);
          var S = v++ % s.length, w = new cr({
            anid: _ != null ? "line_" + _ : null,
            autoBatch: !0,
            shape: {
              x1: d[0],
              y1: d[1],
              x2: p[0],
              y2: p[1]
            },
            style: ut({
              stroke: s[S]
            }, g),
            silent: !0
          });
          xa(w.shape, g.lineWidth), t.add(w);
        }
      }
    }
  },
  minorSplitLine: function(r, t, e, n) {
    var i = e.axis, a = e.getModel("minorSplitLine"), o = a.getModel("lineStyle"), s = n.coordinateSystem.getRect(), u = i.isHorizontal(), l = i.getMinorTicksCoords();
    if (l.length)
      for (var f = [], h = [], v = o.getLineStyle(), c = 0; c < l.length; c++)
        for (var d = 0; d < l[c].length; d++) {
          var p = i.toGlobalCoord(l[c][d].coord);
          u ? (f[0] = p, f[1] = s.y, h[0] = p, h[1] = s.y + s.height) : (f[0] = s.x, f[1] = p, h[0] = s.x + s.width, h[1] = p);
          var g = new cr({
            anid: "minor_line_" + l[c][d].tickValue,
            autoBatch: !0,
            shape: {
              x1: f[0],
              y1: f[1],
              x2: h[0],
              y2: h[1]
            },
            style: v,
            silent: !0
          });
          xa(g.shape, v.lineWidth), t.add(g);
        }
  },
  splitArea: function(r, t, e, n) {
    SP(r, t, e, n);
  }
}, m_ = (
  /** @class */
  (function(r) {
    z(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.type = "xAxis", t;
  })(y_)
), CP = (
  /** @class */
  (function(r) {
    z(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = m_.type, e;
    }
    return t.type = "yAxis", t;
  })(y_)
), DP = (
  /** @class */
  (function(r) {
    z(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = "grid", e;
    }
    return t.prototype.render = function(e, n) {
      this.group.removeAll(), e.get("show") && this.group.add(new Tt({
        shape: e.coordinateSystem.getRect(),
        style: ut({
          fill: e.get("backgroundColor")
        }, e.getItemStyle()),
        silent: !0,
        z2: -1
      }));
    }, t.type = "grid", t;
  })(oe)
), eg = {
  // gridIndex: 0,
  // gridId: '',
  offset: 0
};
function AP(r) {
  r.registerComponentView(DP), r.registerComponentModel(jE), r.registerCoordinateSystem("cartesian2d", oP), Yp(r, "x", Gf, eg), Yp(r, "y", Gf, eg), r.registerComponentView(m_), r.registerComponentView(CP), r.registerPreprocessor(function(t) {
    t.xAxis && t.yAxis && !t.grid && (t.grid = {});
  });
}
var dn = Ct(), rg = nt, Bl = vt, MP = (
  /** @class */
  (function() {
    function r() {
      this._dragging = !1, this.animationThreshold = 15;
    }
    return r.prototype.render = function(t, e, n, i) {
      var a = e.get("value"), o = e.get("status");
      if (this._axisModel = t, this._axisPointerModel = e, this._api = n, !(!i && this._lastValue === a && this._lastStatus === o)) {
        this._lastValue = a, this._lastStatus = o;
        var s = this._group, u = this._handle;
        if (!o || o === "hide") {
          s && s.hide(), u && u.hide();
          return;
        }
        s && s.show(), u && u.show();
        var l = {};
        this.makeElOption(l, a, t, e, n);
        var f = l.graphicKey;
        f !== this._lastGraphicKey && this.clear(n), this._lastGraphicKey = f;
        var h = this._moveAnimation = this.determineAnimation(t, e);
        if (!s)
          s = this._group = new It(), this.createPointerEl(s, l, t, e), this.createLabelEl(s, l, t, e), n.getZr().add(s);
        else {
          var v = St(ng, e, h);
          this.updatePointerEl(s, l, v), this.updateLabelEl(s, l, v, e);
        }
        ag(s, e, !0), this._renderHandle(a);
      }
    }, r.prototype.remove = function(t) {
      this.clear(t);
    }, r.prototype.dispose = function(t) {
      this.clear(t);
    }, r.prototype.determineAnimation = function(t, e) {
      var n = e.get("animation"), i = t.axis, a = i.type === "category", o = e.get("snap");
      if (!o && !a)
        return !1;
      if (n === "auto" || n == null) {
        var s = this.animationThreshold;
        if (a && i.getBandWidth() > s)
          return !0;
        if (o) {
          var u = yc(t).seriesDataCount, l = i.getExtent();
          return Math.abs(l[0] - l[1]) / u > s;
        }
        return !1;
      }
      return n === !0;
    }, r.prototype.makeElOption = function(t, e, n, i, a) {
    }, r.prototype.createPointerEl = function(t, e, n, i) {
      var a = e.pointer;
      if (a) {
        var o = dn(t).pointerEl = new Hx[a.type](rg(e.pointer));
        t.add(o);
      }
    }, r.prototype.createLabelEl = function(t, e, n, i) {
      if (e.label) {
        var a = dn(t).labelEl = new Mt(rg(e.label));
        t.add(a), ig(a, i);
      }
    }, r.prototype.updatePointerEl = function(t, e, n) {
      var i = dn(t).pointerEl;
      i && e.pointer && (i.setStyle(e.pointer.style), n(i, {
        shape: e.pointer.shape
      }));
    }, r.prototype.updateLabelEl = function(t, e, n, i) {
      var a = dn(t).labelEl;
      a && (a.setStyle(e.label.style), n(a, {
        // Consider text length change in vertical axis, animation should
        // be used on shape, otherwise the effect will be weird.
        // TODOTODO
        // shape: elOption.label.shape,
        x: e.label.x,
        y: e.label.y
      }), ig(a, i));
    }, r.prototype._renderHandle = function(t) {
      if (!(this._dragging || !this.updateHandleTransform)) {
        var e = this._axisPointerModel, n = this._api.getZr(), i = this._handle, a = e.getModel("handle"), o = e.get("status");
        if (!a.get("show") || !o || o === "hide") {
          i && n.remove(i), this._handle = null;
          return;
        }
        var s;
        this._handle || (s = !0, i = this._handle = $s(a.get("icon"), {
          cursor: "move",
          draggable: !0,
          onmousemove: function(l) {
            Wg(l.event);
          },
          onmousedown: Bl(this._onHandleDragMove, this, 0, 0),
          drift: Bl(this._onHandleDragMove, this),
          ondragend: Bl(this._onHandleDragEnd, this)
        }), n.add(i)), ag(i, e, !1), i.setStyle(a.getItemStyle(null, ["color", "borderColor", "borderWidth", "opacity", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"]));
        var u = a.get("size");
        H(u) || (u = [u, u]), i.scaleX = u[0] / 2, i.scaleY = u[1] / 2, Wm(this, "_doDispatchAxisPointer", a.get("throttle") || 0, "fixRate"), this._moveHandleToValue(t, s);
      }
    }, r.prototype._moveHandleToValue = function(t, e) {
      ng(this._axisPointerModel, !e && this._moveAnimation, this._handle, Fl(this.getHandleTransform(t, this._axisModel, this._axisPointerModel)));
    }, r.prototype._onHandleDragMove = function(t, e) {
      var n = this._handle;
      if (n) {
        this._dragging = !0;
        var i = this.updateHandleTransform(Fl(n), [t, e], this._axisModel, this._axisPointerModel);
        this._payloadInfo = i, n.stopAnimation(), n.attr(Fl(i)), dn(n).lastProp = null, this._doDispatchAxisPointer();
      }
    }, r.prototype._doDispatchAxisPointer = function() {
      var t = this._handle;
      if (t) {
        var e = this._payloadInfo, n = this._axisModel;
        this._api.dispatchAction({
          type: "updateAxisPointer",
          x: e.cursorPoint[0],
          y: e.cursorPoint[1],
          tooltipOption: e.tooltipOption,
          axesInfo: [{
            axisDim: n.axis.dim,
            axisIndex: n.componentIndex
          }]
        });
      }
    }, r.prototype._onHandleDragEnd = function() {
      this._dragging = !1;
      var t = this._handle;
      if (t) {
        var e = this._axisPointerModel.get("value");
        this._moveHandleToValue(e), this._api.dispatchAction({
          type: "hideTip"
        });
      }
    }, r.prototype.clear = function(t) {
      this._lastValue = null, this._lastStatus = null;
      var e = t.getZr(), n = this._group, i = this._handle;
      e && n && (this._lastGraphicKey = null, n && e.remove(n), i && e.remove(i), this._group = null, this._handle = null, this._payloadInfo = null), Af(this, "_doDispatchAxisPointer");
    }, r.prototype.doClear = function() {
    }, r.prototype.buildLabel = function(t, e, n) {
      return n = n || 0, {
        x: t[n],
        y: t[1 - n],
        width: e[n],
        height: e[1 - n]
      };
    }, r;
  })()
);
function ng(r, t, e, n) {
  __(dn(e).lastProp, n) || (dn(e).lastProp = n, t ? Wt(e, n, r) : (e.stopAnimation(), e.attr(n)));
}
function __(r, t) {
  if (Y(r) && Y(t)) {
    var e = !0;
    return M(t, function(n, i) {
      e = e && __(r[i], n);
    }), !!e;
  } else
    return r === t;
}
function ig(r, t) {
  r[t.get(["label", "show"]) ? "show" : "hide"]();
}
function Fl(r) {
  return {
    x: r.x || 0,
    y: r.y || 0,
    rotation: r.rotation || 0
  };
}
function ag(r, t, e) {
  var n = t.get("z"), i = t.get("zlevel");
  r && r.traverse(function(a) {
    a.type !== "group" && (n != null && (a.z = n), i != null && (a.zlevel = i), a.silent = e);
  });
}
function EP(r) {
  var t = r.get("type"), e = r.getModel(t + "Style"), n;
  return t === "line" ? (n = e.getLineStyle(), n.fill = null) : t === "shadow" && (n = e.getAreaStyle(), n.stroke = null), n;
}
function PP(r, t, e, n, i) {
  var a = e.get("value"), o = S_(a, t.axis, t.ecModel, e.get("seriesDataIndices"), {
    precision: e.get(["label", "precision"]),
    formatter: e.get(["label", "formatter"])
  }), s = e.getModel("label"), u = Xa(s.get("padding") || 0), l = s.getFont(), f = dh(o, l), h = i.position, v = f.width + u[1] + u[3], c = f.height + u[0] + u[2], d = i.align;
  d === "right" && (h[0] -= v), d === "center" && (h[0] -= v / 2);
  var p = i.verticalAlign;
  p === "bottom" && (h[1] -= c), p === "middle" && (h[1] -= c / 2), IP(h, v, c, n);
  var g = s.get("backgroundColor");
  (!g || g === "auto") && (g = t.get(["axisLine", "lineStyle", "color"])), r.label = {
    // shape: {x: 0, y: 0, width: width, height: height, r: labelModel.get('borderRadius')},
    x: h[0],
    y: h[1],
    style: vr(s, {
      text: o,
      font: l,
      fill: s.getTextColor(),
      padding: u,
      backgroundColor: g
    }),
    // Label should be over axisPointer.
    z2: 10
  };
}
function IP(r, t, e, n) {
  var i = n.getWidth(), a = n.getHeight();
  r[0] = Math.min(r[0] + t, i) - t, r[1] = Math.min(r[1] + e, a) - e, r[0] = Math.max(r[0], 0), r[1] = Math.max(r[1], 0);
}
function S_(r, t, e, n, i) {
  r = t.scale.parse(r);
  var a = t.scale.getLabel({
    value: r
  }, {
    // If `precision` is set, width can be fixed (like '12.00500'), which
    // helps to debounce when when moving label.
    precision: i.precision
  }), o = i.formatter;
  if (o) {
    var s = {
      value: fc(t, {
        value: r
      }),
      axisDimension: t.dim,
      axisIndex: t.index,
      seriesData: []
    };
    M(n, function(u) {
      var l = e.getSeriesByIndex(u.seriesIndex), f = u.dataIndexInside, h = l && l.getDataParams(f);
      h && s.seriesData.push(h);
    }), W(o) ? a = o.replace("{value}", a) : Z(o) && (a = o(s));
  }
  return a;
}
function b_(r, t, e) {
  var n = Br();
  return Rs(n, n, e.rotation), Qo(n, n, e.position), Ih([r.dataToCoord(t), (e.labelOffset || 0) + (e.labelDirection || 1) * (e.labelMargin || 0)], n);
}
function LP(r, t, e, n, i, a) {
  var o = zr.innerTextLayout(e.rotation, 0, e.labelDirection);
  e.labelMargin = i.get(["label", "margin"]), PP(t, n, i, a, {
    position: b_(n.axis, r, e),
    align: o.textAlign,
    verticalAlign: o.textVerticalAlign
  });
}
function OP(r, t, e) {
  return e = e || 0, {
    x1: r[e],
    y1: r[1 - e],
    x2: t[e],
    y2: t[1 - e]
  };
}
function RP(r, t, e) {
  return e = e || 0, {
    x: r[e],
    y: r[1 - e],
    width: t[e],
    height: t[1 - e]
  };
}
var NP = (
  /** @class */
  (function(r) {
    z(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t.prototype.makeElOption = function(e, n, i, a, o) {
      var s = i.axis, u = s.grid, l = a.get("type"), f = og(u, s).getOtherAxis(s).getGlobalExtent(), h = s.toGlobalCoord(s.dataToCoord(n, !0));
      if (l && l !== "none") {
        var v = EP(a), c = kP[l](s, h, f);
        c.style = v, e.graphicKey = c.type, e.pointer = c;
      }
      var d = Wf(u.model, i);
      LP(
        // @ts-ignore
        n,
        e,
        d,
        i,
        a,
        o
      );
    }, t.prototype.getHandleTransform = function(e, n, i) {
      var a = Wf(n.axis.grid.model, n, {
        labelInside: !1
      });
      a.labelMargin = i.get(["handle", "margin"]);
      var o = b_(n.axis, e, a);
      return {
        x: o[0],
        y: o[1],
        rotation: a.rotation + (a.labelDirection < 0 ? Math.PI : 0)
      };
    }, t.prototype.updateHandleTransform = function(e, n, i, a) {
      var o = i.axis, s = o.grid, u = o.getGlobalExtent(!0), l = og(s, o).getOtherAxis(o).getGlobalExtent(), f = o.dim === "x" ? 0 : 1, h = [e.x, e.y];
      h[f] += n[f], h[f] = Math.min(u[1], h[f]), h[f] = Math.max(u[0], h[f]);
      var v = (l[1] + l[0]) / 2, c = [v, v];
      c[f] = h[f];
      var d = [{
        verticalAlign: "middle"
      }, {
        align: "center"
      }];
      return {
        x: h[0],
        y: h[1],
        rotation: e.rotation,
        cursorPoint: c,
        tooltipOption: d[f]
      };
    }, t;
  })(MP)
);
function og(r, t) {
  var e = {};
  return e[t.dim + "AxisIndex"] = t.index, r.getCartesian(e);
}
var kP = {
  line: function(r, t, e) {
    var n = OP([t, e[0]], [t, e[1]], sg(r));
    return {
      type: "Line",
      subPixelOptimize: !0,
      shape: n
    };
  },
  shadow: function(r, t, e) {
    var n = Math.max(1, r.getBandWidth()), i = e[1] - e[0];
    return {
      type: "Rect",
      shape: RP([t - n / 2, e[0]], [n, i], sg(r))
    };
  }
};
function sg(r) {
  return r.dim === "x" ? 0 : 1;
}
var BP = (
  /** @class */
  (function(r) {
    z(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.type = "axisPointer", t.defaultOption = {
      // 'auto' means that show when triggered by tooltip or handle.
      show: "auto",
      // zlevel: 0,
      z: 50,
      type: "line",
      // axispointer triggered by tootip determine snap automatically,
      // see `modelHelper`.
      snap: !1,
      triggerTooltip: !0,
      triggerEmphasis: !0,
      value: null,
      status: null,
      link: [],
      // Do not set 'auto' here, otherwise global animation: false
      // will not effect at this axispointer.
      animation: null,
      animationDurationUpdate: 200,
      lineStyle: {
        color: "#B9BEC9",
        width: 1,
        type: "dashed"
      },
      shadowStyle: {
        color: "rgba(210,219,238,0.2)"
      },
      label: {
        show: !0,
        formatter: null,
        precision: "auto",
        margin: 3,
        color: "#fff",
        padding: [5, 7, 5, 7],
        backgroundColor: "auto",
        borderColor: null,
        borderWidth: 0,
        borderRadius: 3
      },
      handle: {
        show: !1,
        // eslint-disable-next-line
        icon: "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z",
        size: 45,
        // handle margin is from symbol center to axis, which is stable when circular move.
        margin: 50,
        // color: '#1b8bbd'
        // color: '#2f4554'
        color: "#333",
        shadowBlur: 3,
        shadowColor: "#aaa",
        shadowOffsetX: 0,
        shadowOffsetY: 2,
        // For mobile performance
        throttle: 40
      }
    }, t;
  })(it)
), ur = Ct(), FP = M;
function w_(r, t, e) {
  if (!$.node) {
    var n = t.getZr();
    ur(n).records || (ur(n).records = {}), VP(n, t);
    var i = ur(n).records[r] || (ur(n).records[r] = {});
    i.handler = e;
  }
}
function VP(r, t) {
  if (ur(r).initialized)
    return;
  ur(r).initialized = !0, e("click", St(ug, "click")), e("mousemove", St(ug, "mousemove")), e("globalout", GP);
  function e(n, i) {
    r.on(n, function(a) {
      var o = HP(t);
      FP(ur(r).records, function(s) {
        s && i(s, a, o.dispatchAction);
      }), zP(o.pendings, t);
    });
  }
}
function zP(r, t) {
  var e = r.showTip.length, n = r.hideTip.length, i;
  e ? i = r.showTip[e - 1] : n && (i = r.hideTip[n - 1]), i && (i.dispatchAction = null, t.dispatchAction(i));
}
function GP(r, t, e) {
  r.handler("leave", null, e);
}
function ug(r, t, e, n) {
  t.handler(r, e, n);
}
function HP(r) {
  var t = {
    showTip: [],
    hideTip: []
  }, e = function(n) {
    var i = t[n.type];
    i ? i.push(n) : (n.dispatchAction = e, r.dispatchAction(n));
  };
  return {
    dispatchAction: e,
    pendings: t
  };
}
function Xf(r, t) {
  if (!$.node) {
    var e = t.getZr(), n = (ur(e).records || {})[r];
    n && (ur(e).records[r] = null);
  }
}
var WP = (
  /** @class */
  (function(r) {
    z(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.prototype.render = function(e, n, i) {
      var a = n.getComponent("tooltip"), o = e.get("triggerOn") || a && a.get("triggerOn") || "mousemove|click";
      w_("axisPointer", i, function(s, u, l) {
        o !== "none" && (s === "leave" || o.indexOf(s) >= 0) && l({
          type: "updateAxisPointer",
          currTrigger: s,
          x: u && u.offsetX,
          y: u && u.offsetY
        });
      });
    }, t.prototype.remove = function(e, n) {
      Xf("axisPointer", n);
    }, t.prototype.dispose = function(e, n) {
      Xf("axisPointer", n);
    }, t.type = "axisPointer", t;
  })(oe)
);
function x_(r, t) {
  var e = [], n = r.seriesIndex, i;
  if (n == null || !(i = t.getSeriesByIndex(n)))
    return {
      point: []
    };
  var a = i.getData(), o = An(a, r);
  if (o == null || o < 0 || H(o))
    return {
      point: []
    };
  var s = a.getItemGraphicEl(o), u = i.coordinateSystem;
  if (i.getTooltipPosition)
    e = i.getTooltipPosition(o) || [];
  else if (u && u.dataToPoint)
    if (r.isStacked) {
      var l = u.getBaseAxis(), f = u.getOtherAxis(l), h = f.dim, v = l.dim, c = h === "x" || h === "radius" ? 1 : 0, d = a.mapDimension(v), p = [];
      p[c] = a.get(d, o), p[1 - c] = a.get(a.getCalculationInfo("stackResultDimension"), o), e = u.dataToPoint(p) || [];
    } else
      e = u.dataToPoint(a.getValues(U(u.dimensions, function(y) {
        return a.mapDimension(y);
      }), o)) || [];
  else if (s) {
    var g = s.getBoundingRect().clone();
    g.applyTransform(s.transform), e = [g.x + g.width / 2, g.y + g.height / 2];
  }
  return {
    point: e,
    el: s
  };
}
var lg = Ct();
function UP(r, t, e) {
  var n = r.currTrigger, i = [r.x, r.y], a = r, o = r.dispatchAction || vt(e.dispatchAction, e), s = t.getComponent("axisPointer").coordSysAxesInfo;
  if (s) {
    $o(i) && (i = x_({
      seriesIndex: a.seriesIndex,
      // Do not use dataIndexInside from other ec instance.
      // FIXME: auto detect it?
      dataIndex: a.dataIndex
    }, t).point);
    var u = $o(i), l = a.axesInfo, f = s.axesInfo, h = n === "leave" || $o(i), v = {}, c = {}, d = {
      list: [],
      map: {}
    }, p = {
      showPointer: St(XP, c),
      showTooltip: St(qP, d)
    };
    M(s.coordSysMap, function(y, m) {
      var _ = u || y.containPoint(i);
      M(s.coordSysAxesInfo[m], function(S, w) {
        var b = S.axis, x = KP(l, S);
        if (!h && _ && (!l || x)) {
          var T = x && x.value;
          T == null && !u && (T = b.pointToData(i)), T != null && fg(S, T, p, !1, v);
        }
      });
    });
    var g = {};
    return M(f, function(y, m) {
      var _ = y.linkGroup;
      _ && !c[m] && M(_.axesInfo, function(S, w) {
        var b = c[w];
        if (S !== y && b) {
          var x = b.value;
          _.mapper && (x = y.axis.scale.parse(_.mapper(x, hg(S), hg(y)))), g[y.key] = x;
        }
      });
    }), M(g, function(y, m) {
      fg(f[m], y, p, !0, v);
    }), $P(c, f, v), ZP(d, i, r, o), jP(f, o, e), v;
  }
}
function fg(r, t, e, n, i) {
  var a = r.axis;
  if (!(a.scale.isBlank() || !a.containData(t))) {
    if (!r.involveSeries) {
      e.showPointer(r, t);
      return;
    }
    var o = YP(t, r), s = o.payloadBatch, u = o.snapToValue;
    s[0] && i.seriesIndex == null && F(i, s[0]), !n && r.snap && a.containData(u) && u != null && (t = u), e.showPointer(r, t, s), e.showTooltip(r, o, u);
  }
}
function YP(r, t) {
  var e = t.axis, n = e.dim, i = r, a = [], o = Number.MAX_VALUE, s = -1;
  return M(t.seriesModels, function(u, l) {
    var f = u.getData().mapDimensionsAll(n), h, v;
    if (u.getAxisTooltipData) {
      var c = u.getAxisTooltipData(f, r, e);
      v = c.dataIndices, h = c.nestestValue;
    } else {
      if (v = u.getData().indicesOfNearest(
        f[0],
        r,
        // Add a threshold to avoid find the wrong dataIndex
        // when data length is not same.
        // false,
        e.type === "category" ? 0.5 : null
      ), !v.length)
        return;
      h = u.getData().get(f[0], v[0]);
    }
    if (!(h == null || !isFinite(h))) {
      var d = r - h, p = Math.abs(d);
      p <= o && ((p < o || d >= 0 && s < 0) && (o = p, s = d, i = h, a.length = 0), M(v, function(g) {
        a.push({
          seriesIndex: u.seriesIndex,
          dataIndexInside: g,
          dataIndex: u.getData().getRawIndex(g)
        });
      }));
    }
  }), {
    payloadBatch: a,
    snapToValue: i
  };
}
function XP(r, t, e, n) {
  r[t.key] = {
    value: e,
    payloadBatch: n
  };
}
function qP(r, t, e, n) {
  var i = e.payloadBatch, a = t.axis, o = a.model, s = t.axisPointerModel;
  if (!(!t.triggerTooltip || !i.length)) {
    var u = t.coordSys.model, l = Ia(u), f = r.map[l];
    f || (f = r.map[l] = {
      coordSysId: u.id,
      coordSysIndex: u.componentIndex,
      coordSysType: u.type,
      coordSysMainType: u.mainType,
      dataByAxis: []
    }, r.list.push(f)), f.dataByAxis.push({
      axisDim: a.dim,
      axisIndex: o.componentIndex,
      axisType: o.type,
      axisId: o.id,
      value: n,
      // Caustion: viewHelper.getValueLabel is actually on "view stage", which
      // depends that all models have been updated. So it should not be performed
      // here. Considering axisPointerModel used here is volatile, which is hard
      // to be retrieve in TooltipView, we prepare parameters here.
      valueLabelOpt: {
        precision: s.get(["label", "precision"]),
        formatter: s.get(["label", "formatter"])
      },
      seriesDataIndices: i.slice()
    });
  }
}
function $P(r, t, e) {
  var n = e.axesInfo = [];
  M(t, function(i, a) {
    var o = i.axisPointerModel.option, s = r[a];
    s ? (!i.useHandle && (o.status = "show"), o.value = s.value, o.seriesDataIndices = (s.payloadBatch || []).slice()) : !i.useHandle && (o.status = "hide"), o.status === "show" && n.push({
      axisDim: i.axis.dim,
      axisIndex: i.axis.model.componentIndex,
      value: o.value
    });
  });
}
function ZP(r, t, e, n) {
  if ($o(t) || !r.list.length) {
    n({
      type: "hideTip"
    });
    return;
  }
  var i = ((r.list[0].dataByAxis[0] || {}).seriesDataIndices || [])[0] || {};
  n({
    type: "showTip",
    escapeConnect: !0,
    x: t[0],
    y: t[1],
    tooltipOption: e.tooltipOption,
    position: e.position,
    dataIndexInside: i.dataIndexInside,
    dataIndex: i.dataIndex,
    seriesIndex: i.seriesIndex,
    dataByCoordSys: r.list
  });
}
function jP(r, t, e) {
  var n = e.getZr(), i = "axisPointerLastHighlights", a = lg(n)[i] || {}, o = lg(n)[i] = {};
  M(r, function(l, f) {
    var h = l.axisPointerModel.option;
    h.status === "show" && l.triggerEmphasis && M(h.seriesDataIndices, function(v) {
      var c = v.seriesIndex + " | " + v.dataIndex;
      o[c] = v;
    });
  });
  var s = [], u = [];
  M(a, function(l, f) {
    !o[f] && u.push(l);
  }), M(o, function(l, f) {
    !a[f] && s.push(l);
  }), u.length && e.dispatchAction({
    type: "downplay",
    escapeConnect: !0,
    // Not blur others when highlight in axisPointer.
    notBlur: !0,
    batch: u
  }), s.length && e.dispatchAction({
    type: "highlight",
    escapeConnect: !0,
    // Not blur others when highlight in axisPointer.
    notBlur: !0,
    batch: s
  });
}
function KP(r, t) {
  for (var e = 0; e < (r || []).length; e++) {
    var n = r[e];
    if (t.axis.dim === n.axisDim && t.axis.model.componentIndex === n.axisIndex)
      return n;
  }
}
function hg(r) {
  var t = r.axis.model, e = {}, n = e.axisDim = r.axis.dim;
  return e.axisIndex = e[n + "AxisIndex"] = t.componentIndex, e.axisName = e[n + "AxisName"] = t.name, e.axisId = e[n + "AxisId"] = t.id, e;
}
function $o(r) {
  return !r || r[0] == null || isNaN(r[0]) || r[1] == null || isNaN(r[1]);
}
function T_(r) {
  g_.registerAxisPointerClass("CartesianAxisPointer", NP), r.registerComponentModel(BP), r.registerComponentView(WP), r.registerPreprocessor(function(t) {
    if (t) {
      (!t.axisPointer || t.axisPointer.length === 0) && (t.axisPointer = {});
      var e = t.axisPointer.link;
      e && !H(e) && (t.axisPointer.link = [e]);
    }
  }), r.registerProcessor(r.PRIORITY.PROCESSOR.STATISTIC, function(t, e) {
    t.getComponent("axisPointer").coordSysAxesInfo = vP(t, e);
  }), r.registerAction({
    type: "updateAxisPointer",
    event: "updateAxisPointer",
    update: ":updateAxisPointer"
  }, UP);
}
function C_(r) {
  ke(AP), ke(T_);
}
function QP(r, t) {
  var e = Xa(t.get("padding")), n = t.getItemStyle(["color", "opacity"]);
  return n.fill = t.get("backgroundColor"), r = new Tt({
    shape: {
      x: r.x - e[3],
      y: r.y - e[0],
      width: r.width + e[1] + e[3],
      height: r.height + e[0] + e[2],
      r: t.get("borderRadius")
    },
    style: n,
    silent: !0,
    z2: -1
  }), r;
}
var JP = (
  /** @class */
  (function(r) {
    z(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.type = "tooltip", t.dependencies = ["axisPointer"], t.defaultOption = {
      // zlevel: 0,
      z: 60,
      show: !0,
      // tooltip main content
      showContent: !0,
      // 'trigger' only works on coordinate system.
      // 'item' | 'axis' | 'none'
      trigger: "item",
      // 'click' | 'mousemove' | 'none'
      triggerOn: "mousemove|click",
      alwaysShowContent: !1,
      displayMode: "single",
      renderMode: "auto",
      // whether restraint content inside viewRect.
      // If renderMode: 'richText', default true.
      // If renderMode: 'html', defaut false (for backward compat).
      confine: null,
      showDelay: 0,
      hideDelay: 100,
      // Animation transition time, unit is second
      transitionDuration: 0.4,
      enterable: !1,
      backgroundColor: "#fff",
      // box shadow
      shadowBlur: 10,
      shadowColor: "rgba(0, 0, 0, .2)",
      shadowOffsetX: 1,
      shadowOffsetY: 2,
      // tooltip border radius, unit is px, default is 4
      borderRadius: 4,
      // tooltip border width, unit is px, default is 0 (no border)
      borderWidth: 1,
      // Tooltip inside padding, default is 5 for all direction
      // Array is allowed to set up, right, bottom, left, same with css
      // The default value: See `tooltip/tooltipMarkup.ts#getPaddingFromTooltipModel`.
      padding: null,
      // Extra css text
      extraCssText: "",
      // axis indicator, trigger by axis
      axisPointer: {
        // default is line
        // legal values: 'line' | 'shadow' | 'cross'
        type: "line",
        // Valid when type is line, appoint tooltip line locate on which line. Optional
        // legal values: 'x' | 'y' | 'angle' | 'radius' | 'auto'
        // default is 'auto', chose the axis which type is category.
        // for multiply y axis, cartesian coord chose x axis, polar chose angle axis
        axis: "auto",
        animation: "auto",
        animationDurationUpdate: 200,
        animationEasingUpdate: "exponentialOut",
        crossStyle: {
          color: "#999",
          width: 1,
          type: "dashed",
          // TODO formatter
          textStyle: {}
        }
        // lineStyle and shadowStyle should not be specified here,
        // otherwise it will always override those styles on option.axisPointer.
      },
      textStyle: {
        color: "#666",
        fontSize: 14
      }
    }, t;
  })(it)
);
function D_(r) {
  var t = r.get("confine");
  return t != null ? !!t : r.get("renderMode") === "richText";
}
function A_(r) {
  if ($.domSupported) {
    for (var t = document.documentElement.style, e = 0, n = r.length; e < n; e++)
      if (r[e] in t)
        return r[e];
  }
}
var M_ = A_(["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]), tI = A_(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]);
function E_(r, t) {
  if (!r)
    return t;
  t = Vh(t, !0);
  var e = r.indexOf(t);
  return r = e === -1 ? t : "-" + r.slice(0, e) + "-" + t, r.toLowerCase();
}
function eI(r, t) {
  var e = r.currentStyle || document.defaultView && document.defaultView.getComputedStyle(r);
  return e ? e[t] : null;
}
var rI = E_(tI, "transition"), mc = E_(M_, "transform"), nI = "position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;" + ($.transform3dSupported ? "will-change:transform;" : "");
function iI(r) {
  return r = r === "left" ? "right" : r === "right" ? "left" : r === "top" ? "bottom" : "top", r;
}
function aI(r, t, e) {
  if (!W(e) || e === "inside")
    return "";
  var n = r.get("backgroundColor"), i = r.get("borderWidth");
  t = En(t);
  var a = iI(e), o = Math.max(Math.round(i) * 1.5, 6), s = "", u = mc + ":", l;
  ht(["left", "right"], a) > -1 ? (s += "top:50%", u += "translateY(-50%) rotate(" + (l = a === "left" ? -225 : -45) + "deg)") : (s += "left:50%", u += "translateX(-50%) rotate(" + (l = a === "top" ? 225 : 45) + "deg)");
  var f = l * Math.PI / 180, h = o + i, v = h * Math.abs(Math.cos(f)) + h * Math.abs(Math.sin(f)), c = Math.round(((v - Math.SQRT2 * i) / 2 + Math.SQRT2 * i - (v - h) / 2) * 100) / 100;
  s += ";" + a + ":-" + c + "px";
  var d = t + " solid " + i + "px;", p = ["position:absolute;width:" + o + "px;height:" + o + "px;z-index:-1;", s + ";" + u + ";", "border-bottom:" + d, "border-right:" + d, "background-color:" + n + ";"];
  return '<div style="' + p.join("") + '"></div>';
}
function oI(r, t) {
  var e = "cubic-bezier(0.23,1,0.32,1)", n = " " + r / 2 + "s " + e, i = "opacity" + n + ",visibility" + n;
  return t || (n = " " + r + "s " + e, i += $.transformSupported ? "," + mc + n : ",left" + n + ",top" + n), rI + ":" + i;
}
function cg(r, t, e) {
  var n = r.toFixed(0) + "px", i = t.toFixed(0) + "px";
  if (!$.transformSupported)
    return e ? "top:" + i + ";left:" + n + ";" : [["top", i], ["left", n]];
  var a = $.transform3dSupported, o = "translate" + (a ? "3d" : "") + "(" + n + "," + i + (a ? ",0" : "") + ")";
  return e ? "top:0;left:0;" + mc + ":" + o + ";" : [["top", 0], ["left", 0], [M_, o]];
}
function sI(r) {
  var t = [], e = r.get("fontSize"), n = r.getTextColor();
  n && t.push("color:" + n), t.push("font:" + r.getFont());
  var i = K(r.get("lineHeight"), Math.round(e * 3 / 2));
  e && t.push("line-height:" + i + "px");
  var a = r.get("textShadowColor"), o = r.get("textShadowBlur") || 0, s = r.get("textShadowOffsetX") || 0, u = r.get("textShadowOffsetY") || 0;
  return a && o && t.push("text-shadow:" + s + "px " + u + "px " + o + "px " + a), M(["decoration", "align"], function(l) {
    var f = r.get(l);
    f && t.push("text-" + l + ":" + f);
  }), t.join(";");
}
function uI(r, t, e) {
  var n = [], i = r.get("transitionDuration"), a = r.get("backgroundColor"), o = r.get("shadowBlur"), s = r.get("shadowColor"), u = r.get("shadowOffsetX"), l = r.get("shadowOffsetY"), f = r.getModel("textStyle"), h = Gm(r, "html"), v = u + "px " + l + "px " + o + "px " + s;
  return n.push("box-shadow:" + v), t && i && n.push(oI(i, e)), a && n.push("background-color:" + a), M(["width", "color", "radius"], function(c) {
    var d = "border-" + c, p = Vh(d), g = r.get(p);
    g != null && n.push(d + ":" + g + (c === "color" ? "" : "px"));
  }), n.push(sI(f)), h != null && n.push("padding:" + Xa(h).join("px ") + "px"), n.join(";") + ";";
}
function vg(r, t, e, n, i) {
  var a = t && t.painter;
  if (e) {
    var o = a && a.getViewportRoot();
    o && J1(r, o, e, n, i);
  } else {
    r[0] = n, r[1] = i;
    var s = a && a.getViewportRootOffset();
    s && (r[0] += s.offsetLeft, r[1] += s.offsetTop);
  }
  r[2] = r[0] / t.getWidth(), r[3] = r[1] / t.getHeight();
}
var lI = (
  /** @class */
  (function() {
    function r(t, e) {
      if (this._show = !1, this._styleCoord = [0, 0, 0, 0], this._enterable = !0, this._alwaysShowContent = !1, this._firstShow = !0, this._longHide = !0, $.wxa)
        return null;
      var n = document.createElement("div");
      n.domBelongToZr = !0, this.el = n;
      var i = this._zr = t.getZr(), a = e.appendTo, o = a && (W(a) ? document.querySelector(a) : Dn(a) ? a : Z(a) && a(t.getDom()));
      vg(this._styleCoord, i, o, t.getWidth() / 2, t.getHeight() / 2), (o || t.getDom()).appendChild(n), this._api = t, this._container = o;
      var s = this;
      n.onmouseenter = function() {
        s._enterable && (clearTimeout(s._hideTimeout), s._show = !0), s._inContent = !0;
      }, n.onmousemove = function(u) {
        if (u = u || window.event, !s._enterable) {
          var l = i.handler, f = i.painter.getViewportRoot();
          ge(f, u, !0), l.dispatch("mousemove", u);
        }
      }, n.onmouseleave = function() {
        s._inContent = !1, s._enterable && s._show && s.hideLater(s._hideDelay);
      };
    }
    return r.prototype.update = function(t) {
      if (!this._container) {
        var e = this._api.getDom(), n = eI(e, "position"), i = e.style;
        i.position !== "absolute" && n !== "absolute" && (i.position = "relative");
      }
      var a = t.get("alwaysShowContent");
      a && this._moveIfResized(), this._alwaysShowContent = a, this.el.className = t.get("className") || "";
    }, r.prototype.show = function(t, e) {
      clearTimeout(this._hideTimeout), clearTimeout(this._longHideTimeout);
      var n = this.el, i = n.style, a = this._styleCoord;
      n.innerHTML ? i.cssText = nI + uI(t, !this._firstShow, this._longHide) + cg(a[0], a[1], !0) + ("border-color:" + En(e) + ";") + (t.get("extraCssText") || "") + (";pointer-events:" + (this._enterable ? "auto" : "none")) : i.display = "none", this._show = !0, this._firstShow = !1, this._longHide = !1;
    }, r.prototype.setContent = function(t, e, n, i, a) {
      var o = this.el;
      if (t == null) {
        o.innerHTML = "";
        return;
      }
      var s = "";
      if (W(a) && n.get("trigger") === "item" && !D_(n) && (s = aI(n, i, a)), W(t))
        o.innerHTML = t + s;
      else if (t) {
        o.innerHTML = "", H(t) || (t = [t]);
        for (var u = 0; u < t.length; u++)
          Dn(t[u]) && t[u].parentNode !== o && o.appendChild(t[u]);
        if (s && o.childNodes.length) {
          var l = document.createElement("div");
          l.innerHTML = s, o.appendChild(l);
        }
      }
    }, r.prototype.setEnterable = function(t) {
      this._enterable = t;
    }, r.prototype.getSize = function() {
      var t = this.el;
      return t ? [t.offsetWidth, t.offsetHeight] : [0, 0];
    }, r.prototype.moveTo = function(t, e) {
      if (this.el) {
        var n = this._styleCoord;
        if (vg(n, this._zr, this._container, t, e), n[0] != null && n[1] != null) {
          var i = this.el.style, a = cg(n[0], n[1]);
          M(a, function(o) {
            i[o[0]] = o[1];
          });
        }
      }
    }, r.prototype._moveIfResized = function() {
      var t = this._styleCoord[2], e = this._styleCoord[3];
      this.moveTo(t * this._zr.getWidth(), e * this._zr.getHeight());
    }, r.prototype.hide = function() {
      var t = this, e = this.el.style;
      e.visibility = "hidden", e.opacity = "0", $.transform3dSupported && (e.willChange = ""), this._show = !1, this._longHideTimeout = setTimeout(function() {
        return t._longHide = !0;
      }, 500);
    }, r.prototype.hideLater = function(t) {
      this._show && !(this._inContent && this._enterable) && !this._alwaysShowContent && (t ? (this._hideDelay = t, this._show = !1, this._hideTimeout = setTimeout(vt(this.hide, this), t)) : this.hide());
    }, r.prototype.isShow = function() {
      return this._show;
    }, r.prototype.dispose = function() {
      clearTimeout(this._hideTimeout), clearTimeout(this._longHideTimeout);
      var t = this.el.parentNode;
      t && t.removeChild(this.el), this.el = this._container = null;
    }, r;
  })()
), fI = (
  /** @class */
  (function() {
    function r(t) {
      this._show = !1, this._styleCoord = [0, 0, 0, 0], this._alwaysShowContent = !1, this._enterable = !0, this._zr = t.getZr(), pg(this._styleCoord, this._zr, t.getWidth() / 2, t.getHeight() / 2);
    }
    return r.prototype.update = function(t) {
      var e = t.get("alwaysShowContent");
      e && this._moveIfResized(), this._alwaysShowContent = e;
    }, r.prototype.show = function() {
      this._hideTimeout && clearTimeout(this._hideTimeout), this.el.show(), this._show = !0;
    }, r.prototype.setContent = function(t, e, n, i, a) {
      var o = this;
      Y(t) && re(process.env.NODE_ENV !== "production" ? "Passing DOM nodes as content is not supported in richText tooltip!" : ""), this.el && this._zr.remove(this.el);
      var s = n.getModel("textStyle");
      this.el = new Mt({
        style: {
          rich: e.richTextStyles,
          text: t,
          lineHeight: 22,
          borderWidth: 1,
          borderColor: i,
          textShadowColor: s.get("textShadowColor"),
          fill: n.get(["textStyle", "color"]),
          padding: Gm(n, "richText"),
          verticalAlign: "top",
          align: "left"
        },
        z: n.get("z")
      }), M(["backgroundColor", "borderRadius", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"], function(l) {
        o.el.style[l] = n.get(l);
      }), M(["textShadowBlur", "textShadowOffsetX", "textShadowOffsetY"], function(l) {
        o.el.style[l] = s.get(l) || 0;
      }), this._zr.add(this.el);
      var u = this;
      this.el.on("mouseover", function() {
        u._enterable && (clearTimeout(u._hideTimeout), u._show = !0), u._inContent = !0;
      }), this.el.on("mouseout", function() {
        u._enterable && u._show && u.hideLater(u._hideDelay), u._inContent = !1;
      });
    }, r.prototype.setEnterable = function(t) {
      this._enterable = t;
    }, r.prototype.getSize = function() {
      var t = this.el, e = this.el.getBoundingRect(), n = dg(t.style);
      return [e.width + n.left + n.right, e.height + n.top + n.bottom];
    }, r.prototype.moveTo = function(t, e) {
      var n = this.el;
      if (n) {
        var i = this._styleCoord;
        pg(i, this._zr, t, e), t = i[0], e = i[1];
        var a = n.style, o = Ar(a.borderWidth || 0), s = dg(a);
        n.x = t + o + s.left, n.y = e + o + s.top, n.markRedraw();
      }
    }, r.prototype._moveIfResized = function() {
      var t = this._styleCoord[2], e = this._styleCoord[3];
      this.moveTo(t * this._zr.getWidth(), e * this._zr.getHeight());
    }, r.prototype.hide = function() {
      this.el && this.el.hide(), this._show = !1;
    }, r.prototype.hideLater = function(t) {
      this._show && !(this._inContent && this._enterable) && !this._alwaysShowContent && (t ? (this._hideDelay = t, this._show = !1, this._hideTimeout = setTimeout(vt(this.hide, this), t)) : this.hide());
    }, r.prototype.isShow = function() {
      return this._show;
    }, r.prototype.dispose = function() {
      this._zr.remove(this.el);
    }, r;
  })()
);
function Ar(r) {
  return Math.max(0, r);
}
function dg(r) {
  var t = Ar(r.shadowBlur || 0), e = Ar(r.shadowOffsetX || 0), n = Ar(r.shadowOffsetY || 0);
  return {
    left: Ar(t - e),
    right: Ar(t + e),
    top: Ar(t - n),
    bottom: Ar(t + n)
  };
}
function pg(r, t, e, n) {
  r[0] = e, r[1] = n, r[2] = r[0] / t.getWidth(), r[3] = r[1] / t.getHeight();
}
var hI = new Tt({
  shape: {
    x: -1,
    y: -1,
    width: 2,
    height: 2
  }
}), cI = (
  /** @class */
  (function(r) {
    z(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.prototype.init = function(e, n) {
      if (!($.node || !n.getDom())) {
        var i = e.getComponent("tooltip"), a = this._renderMode = Gb(i.get("renderMode"));
        this._tooltipContent = a === "richText" ? new fI(n) : new lI(n, {
          appendTo: i.get("appendToBody", !0) ? "body" : i.get("appendTo", !0)
        });
      }
    }, t.prototype.render = function(e, n, i) {
      if (!($.node || !i.getDom())) {
        this.group.removeAll(), this._tooltipModel = e, this._ecModel = n, this._api = i;
        var a = this._tooltipContent;
        a.update(e), a.setEnterable(e.get("enterable")), this._initGlobalListener(), this._keepShow(), this._renderMode !== "richText" && e.get("transitionDuration") ? Wm(this, "_updatePosition", 50, "fixRate") : Af(this, "_updatePosition");
      }
    }, t.prototype._initGlobalListener = function() {
      var e = this._tooltipModel, n = e.get("triggerOn");
      w_("itemTooltip", this._api, vt(function(i, a, o) {
        n !== "none" && (n.indexOf(i) >= 0 ? this._tryShow(a, o) : i === "leave" && this._hide(o));
      }, this));
    }, t.prototype._keepShow = function() {
      var e = this._tooltipModel, n = this._ecModel, i = this._api, a = e.get("triggerOn");
      if (this._lastX != null && this._lastY != null && a !== "none" && a !== "click") {
        var o = this;
        clearTimeout(this._refreshUpdateTimeout), this._refreshUpdateTimeout = setTimeout(function() {
          !i.isDisposed() && o.manuallyShowTip(e, n, i, {
            x: o._lastX,
            y: o._lastY,
            dataByCoordSys: o._lastDataByCoordSys
          });
        });
      }
    }, t.prototype.manuallyShowTip = function(e, n, i, a) {
      if (!(a.from === this.uid || $.node || !i.getDom())) {
        var o = gg(a, i);
        this._ticket = "";
        var s = a.dataByCoordSys, u = gI(a, n, i);
        if (u) {
          var l = u.el.getBoundingRect().clone();
          l.applyTransform(u.el.transform), this._tryShow({
            offsetX: l.x + l.width / 2,
            offsetY: l.y + l.height / 2,
            target: u.el,
            position: a.position,
            // When manully trigger, the mouse is not on the el, so we'd better to
            // position tooltip on the bottom of the el and display arrow is possible.
            positionDefault: "bottom"
          }, o);
        } else if (a.tooltip && a.x != null && a.y != null) {
          var f = hI;
          f.x = a.x, f.y = a.y, f.update(), at(f).tooltipConfig = {
            name: null,
            option: a.tooltip
          }, this._tryShow({
            offsetX: a.x,
            offsetY: a.y,
            target: f
          }, o);
        } else if (s)
          this._tryShow({
            offsetX: a.x,
            offsetY: a.y,
            position: a.position,
            dataByCoordSys: s,
            tooltipOption: a.tooltipOption
          }, o);
        else if (a.seriesIndex != null) {
          if (this._manuallyAxisShowTip(e, n, i, a))
            return;
          var h = x_(a, n), v = h.point[0], c = h.point[1];
          v != null && c != null && this._tryShow({
            offsetX: v,
            offsetY: c,
            target: h.el,
            position: a.position,
            // When manully trigger, the mouse is not on the el, so we'd better to
            // position tooltip on the bottom of the el and display arrow is possible.
            positionDefault: "bottom"
          }, o);
        } else a.x != null && a.y != null && (i.dispatchAction({
          type: "updateAxisPointer",
          x: a.x,
          y: a.y
        }), this._tryShow({
          offsetX: a.x,
          offsetY: a.y,
          position: a.position,
          target: i.getZr().findHover(a.x, a.y).target
        }, o));
      }
    }, t.prototype.manuallyHideTip = function(e, n, i, a) {
      var o = this._tooltipContent;
      this._tooltipModel && o.hideLater(this._tooltipModel.get("hideDelay")), this._lastX = this._lastY = this._lastDataByCoordSys = null, a.from !== this.uid && this._hide(gg(a, i));
    }, t.prototype._manuallyAxisShowTip = function(e, n, i, a) {
      var o = a.seriesIndex, s = a.dataIndex, u = n.getComponent("axisPointer").coordSysAxesInfo;
      if (!(o == null || s == null || u == null)) {
        var l = n.getSeriesByIndex(o);
        if (l) {
          var f = l.getData(), h = Xi([f.getItemModel(s), l, (l.coordinateSystem || {}).model], this._tooltipModel);
          if (h.get("trigger") === "axis")
            return i.dispatchAction({
              type: "updateAxisPointer",
              seriesIndex: o,
              dataIndex: s,
              position: a.position
            }), !0;
        }
      }
    }, t.prototype._tryShow = function(e, n) {
      var i = e.target, a = this._tooltipModel;
      if (a) {
        this._lastX = e.offsetX, this._lastY = e.offsetY;
        var o = e.dataByCoordSys;
        if (o && o.length)
          this._showAxisTooltip(o, e);
        else if (i) {
          var s = at(i);
          if (s.ssrType === "legend")
            return;
          this._lastDataByCoordSys = null;
          var u, l;
          ea(i, function(f) {
            if (at(f).dataIndex != null)
              return u = f, !0;
            if (at(f).tooltipConfig != null)
              return l = f, !0;
          }, !0), u ? this._showSeriesItemTooltip(e, u, n) : l ? this._showComponentItemTooltip(e, l, n) : this._hide(n);
        } else
          this._lastDataByCoordSys = null, this._hide(n);
      }
    }, t.prototype._showOrMove = function(e, n) {
      var i = e.get("showDelay");
      n = vt(n, this), clearTimeout(this._showTimout), i > 0 ? this._showTimout = setTimeout(n, i) : n();
    }, t.prototype._showAxisTooltip = function(e, n) {
      var i = this._ecModel, a = this._tooltipModel, o = [n.offsetX, n.offsetY], s = Xi([n.tooltipOption], a), u = this._renderMode, l = [], f = Aa("section", {
        blocks: [],
        noHeader: !0
      }), h = [], v = new cl();
      M(e, function(m) {
        M(m.dataByAxis, function(_) {
          var S = i.getComponent(_.axisDim + "Axis", _.axisIndex), w = _.value;
          if (!(!S || w == null)) {
            var b = S_(w, S.axis, i, _.seriesDataIndices, _.valueLabelOpt), x = Aa("section", {
              header: b,
              noHeader: !Le(b),
              sortBlocks: !0,
              blocks: []
            });
            f.blocks.push(x), M(_.seriesDataIndices, function(T) {
              var D = i.getSeriesByIndex(T.seriesIndex), A = T.dataIndexInside, C = D.getDataParams(A);
              if (!(C.dataIndex < 0)) {
                C.axisDim = _.axisDim, C.axisIndex = _.axisIndex, C.axisType = _.axisType, C.axisId = _.axisId, C.axisValue = fc(S.axis, {
                  value: w
                }), C.axisValueLabel = b, C.marker = v.makeTooltipMarker("item", En(C.color), u);
                var E = Ad(D.formatTooltip(A, !0, null)), P = E.frag;
                if (P) {
                  var L = Xi([D], a).get("valueFormatter");
                  x.blocks.push(L ? F({
                    valueFormatter: L
                  }, P) : P);
                }
                E.text && h.push(E.text), l.push(C);
              }
            });
          }
        });
      }), f.blocks.reverse(), h.reverse();
      var c = n.position, d = s.get("order"), p = Ld(f, v, u, d, i.get("useUTC"), s.get("textStyle"));
      p && h.unshift(p);
      var g = u === "richText" ? `

` : "<br/>", y = h.join(g);
      this._showOrMove(s, function() {
        this._updateContentNotChangedOnAxis(e, l) ? this._updatePosition(s, c, o[0], o[1], this._tooltipContent, l) : this._showTooltipContent(s, y, l, Math.random() + "", o[0], o[1], c, null, v);
      });
    }, t.prototype._showSeriesItemTooltip = function(e, n, i) {
      var a = this._ecModel, o = at(n), s = o.seriesIndex, u = a.getSeriesByIndex(s), l = o.dataModel || u, f = o.dataIndex, h = o.dataType, v = l.getData(h), c = this._renderMode, d = e.positionDefault, p = Xi([v.getItemModel(f), l, u && (u.coordinateSystem || {}).model], this._tooltipModel, d ? {
        position: d
      } : null), g = p.get("trigger");
      if (!(g != null && g !== "item")) {
        var y = l.getDataParams(f, h), m = new cl();
        y.marker = m.makeTooltipMarker("item", En(y.color), c);
        var _ = Ad(l.formatTooltip(f, !1, h)), S = p.get("order"), w = p.get("valueFormatter"), b = _.frag, x = b ? Ld(w ? F({
          valueFormatter: w
        }, b) : b, m, c, S, a.get("useUTC"), p.get("textStyle")) : _.text, T = "item_" + l.name + "_" + f;
        this._showOrMove(p, function() {
          this._showTooltipContent(p, x, y, T, e.offsetX, e.offsetY, e.position, e.target, m);
        }), i({
          type: "showTip",
          dataIndexInside: f,
          dataIndex: v.getRawIndex(f),
          seriesIndex: s,
          from: this.uid
        });
      }
    }, t.prototype._showComponentItemTooltip = function(e, n, i) {
      var a = this._renderMode === "html", o = at(n), s = o.tooltipConfig, u = s.option || {}, l = u.encodeHTMLContent;
      if (W(u)) {
        var f = u;
        u = {
          content: f,
          // Fixed formatter
          formatter: f
        }, l = !0;
      }
      l && a && u.content && (u = nt(u), u.content = qt(u.content));
      var h = [u], v = this._ecModel.getComponent(o.componentMainType, o.componentIndex);
      v && h.push(v), h.push({
        formatter: u.content
      });
      var c = e.positionDefault, d = Xi(h, this._tooltipModel, c ? {
        position: c
      } : null), p = d.get("content"), g = Math.random() + "", y = new cl();
      this._showOrMove(d, function() {
        var m = nt(d.get("formatterParams") || {});
        this._showTooltipContent(d, p, m, g, e.offsetX, e.offsetY, e.position, n, y);
      }), i({
        type: "showTip",
        from: this.uid
      });
    }, t.prototype._showTooltipContent = function(e, n, i, a, o, s, u, l, f) {
      if (this._ticket = "", !(!e.get("showContent") || !e.get("show"))) {
        var h = this._tooltipContent;
        h.setEnterable(e.get("enterable"));
        var v = e.get("formatter");
        u = u || e.get("position");
        var c = n, d = this._getNearestPoint([o, s], i, e.get("trigger"), e.get("borderColor")), p = d.color;
        if (v)
          if (W(v)) {
            var g = e.ecModel.get("useUTC"), y = H(i) ? i[0] : i, m = y && y.axisType && y.axisType.indexOf("time") >= 0;
            c = v, m && (c = Ya(y.axisValue, c, g)), c = zh(c, i, !0);
          } else if (Z(v)) {
            var _ = vt(function(S, w) {
              S === this._ticket && (h.setContent(w, f, e, p, u), this._updatePosition(e, u, o, s, h, i, l));
            }, this);
            this._ticket = a, c = v(i, a, _);
          } else
            c = v;
        h.setContent(c, f, e, p, u), h.show(e, p), this._updatePosition(e, u, o, s, h, i, l);
      }
    }, t.prototype._getNearestPoint = function(e, n, i, a) {
      if (i === "axis" || H(n))
        return {
          color: a || (this._renderMode === "html" ? "#fff" : "none")
        };
      if (!H(n))
        return {
          color: a || n.color || n.borderColor
        };
    }, t.prototype._updatePosition = function(e, n, i, a, o, s, u) {
      var l = this._api.getWidth(), f = this._api.getHeight();
      n = n || e.get("position");
      var h = o.getSize(), v = e.get("align"), c = e.get("verticalAlign"), d = u && u.getBoundingRect().clone();
      if (u && d.applyTransform(u.transform), Z(n) && (n = n([i, a], s, o.el, d, {
        viewSize: [l, f],
        contentSize: h.slice()
      })), H(n))
        i = _t(n[0], l), a = _t(n[1], f);
      else if (Y(n)) {
        var p = n;
        p.width = h[0], p.height = h[1];
        var g = Pn(p, {
          width: l,
          height: f
        });
        i = g.x, a = g.y, v = null, c = null;
      } else if (W(n) && u) {
        var y = pI(n, d, h, e.get("borderWidth"));
        i = y[0], a = y[1];
      } else {
        var y = vI(i, a, o, l, f, v ? null : 20, c ? null : 20);
        i = y[0], a = y[1];
      }
      if (v && (i -= yg(v) ? h[0] / 2 : v === "right" ? h[0] : 0), c && (a -= yg(c) ? h[1] / 2 : c === "bottom" ? h[1] : 0), D_(e)) {
        var y = dI(i, a, o, l, f);
        i = y[0], a = y[1];
      }
      o.moveTo(i, a);
    }, t.prototype._updateContentNotChangedOnAxis = function(e, n) {
      var i = this._lastDataByCoordSys, a = this._cbParamsList, o = !!i && i.length === e.length;
      return o && M(i, function(s, u) {
        var l = s.dataByAxis || [], f = e[u] || {}, h = f.dataByAxis || [];
        o = o && l.length === h.length, o && M(l, function(v, c) {
          var d = h[c] || {}, p = v.seriesDataIndices || [], g = d.seriesDataIndices || [];
          o = o && v.value === d.value && v.axisType === d.axisType && v.axisId === d.axisId && p.length === g.length, o && M(p, function(y, m) {
            var _ = g[m];
            o = o && y.seriesIndex === _.seriesIndex && y.dataIndex === _.dataIndex;
          }), a && M(v.seriesDataIndices, function(y) {
            var m = y.seriesIndex, _ = n[m], S = a[m];
            _ && S && S.data !== _.data && (o = !1);
          });
        });
      }), this._lastDataByCoordSys = e, this._cbParamsList = n, !!o;
    }, t.prototype._hide = function(e) {
      this._lastDataByCoordSys = null, e({
        type: "hideTip",
        from: this.uid
      });
    }, t.prototype.dispose = function(e, n) {
      $.node || !n.getDom() || (Af(this, "_updatePosition"), this._tooltipContent.dispose(), Xf("itemTooltip", n));
    }, t.type = "tooltip", t;
  })(oe)
);
function Xi(r, t, e) {
  var n = t.ecModel, i;
  e ? (i = new gt(e, n, n), i = new gt(t.option, i, n)) : i = t;
  for (var a = r.length - 1; a >= 0; a--) {
    var o = r[a];
    o && (o instanceof gt && (o = o.get("tooltip", !0)), W(o) && (o = {
      formatter: o
    }), o && (i = new gt(o, i, n)));
  }
  return i;
}
function gg(r, t) {
  return r.dispatchAction || vt(t.dispatchAction, t);
}
function vI(r, t, e, n, i, a, o) {
  var s = e.getSize(), u = s[0], l = s[1];
  return a != null && (r + u + a + 2 > n ? r -= u + a : r += a), o != null && (t + l + o > i ? t -= l + o : t += o), [r, t];
}
function dI(r, t, e, n, i) {
  var a = e.getSize(), o = a[0], s = a[1];
  return r = Math.min(r + o, n) - o, t = Math.min(t + s, i) - s, r = Math.max(r, 0), t = Math.max(t, 0), [r, t];
}
function pI(r, t, e, n) {
  var i = e[0], a = e[1], o = Math.ceil(Math.SQRT2 * n) + 8, s = 0, u = 0, l = t.width, f = t.height;
  switch (r) {
    case "inside":
      s = t.x + l / 2 - i / 2, u = t.y + f / 2 - a / 2;
      break;
    case "top":
      s = t.x + l / 2 - i / 2, u = t.y - a - o;
      break;
    case "bottom":
      s = t.x + l / 2 - i / 2, u = t.y + f + o;
      break;
    case "left":
      s = t.x - i - o, u = t.y + f / 2 - a / 2;
      break;
    case "right":
      s = t.x + l + o, u = t.y + f / 2 - a / 2;
  }
  return [s, u];
}
function yg(r) {
  return r === "center" || r === "middle";
}
function gI(r, t, e) {
  var n = Sh(r).queryOptionMap, i = n.keys()[0];
  if (!(!i || i === "series")) {
    var a = Va(t, i, n.get(i), {
      useDefault: !1,
      enableAll: !1,
      enableNone: !1
    }), o = a.models[0];
    if (o) {
      var s = e.getViewOfComponentModel(o), u;
      if (s.group.traverse(function(l) {
        var f = at(l).tooltipConfig;
        if (f && f.name === r.name)
          return u = l, !0;
      }), u)
        return {
          componentMainType: i,
          componentIndex: o.componentIndex,
          el: u
        };
    }
  }
}
function _c(r) {
  ke(T_), r.registerComponentModel(JP), r.registerComponentView(cI), r.registerAction({
    type: "showTip",
    event: "showTip",
    update: "tooltip:manuallyShowTip"
  }, $t), r.registerAction({
    type: "hideTip",
    event: "hideTip",
    update: "tooltip:manuallyHideTip"
  }, $t);
}
var yI = (
  /** @class */
  (function(r) {
    z(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e.layoutMode = {
        type: "box",
        ignoreSize: !0
      }, e;
    }
    return t.type = "title", t.defaultOption = {
      // zlevel: 0,
      z: 6,
      show: !0,
      text: "",
      target: "blank",
      subtext: "",
      subtarget: "blank",
      left: 0,
      top: 0,
      backgroundColor: "rgba(0,0,0,0)",
      borderColor: "#ccc",
      borderWidth: 0,
      padding: 5,
      itemGap: 10,
      textStyle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#464646"
      },
      subtextStyle: {
        fontSize: 12,
        color: "#6E7079"
      }
    }, t;
  })(it)
), mI = (
  /** @class */
  (function(r) {
    z(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.prototype.render = function(e, n, i) {
      if (this.group.removeAll(), !!e.get("show")) {
        var a = this.group, o = e.getModel("textStyle"), s = e.getModel("subtextStyle"), u = e.get("textAlign"), l = K(e.get("textBaseline"), e.get("textVerticalAlign")), f = new Mt({
          style: vr(o, {
            text: e.get("text"),
            fill: o.getTextColor()
          }, {
            disableBox: !0
          }),
          z2: 10
        }), h = f.getBoundingRect(), v = e.get("subtext"), c = new Mt({
          style: vr(s, {
            text: v,
            fill: s.getTextColor(),
            y: h.height + e.get("itemGap"),
            verticalAlign: "top"
          }, {
            disableBox: !0
          }),
          z2: 10
        }), d = e.get("link"), p = e.get("sublink"), g = e.get("triggerEvent", !0);
        f.silent = !d && !g, c.silent = !p && !g, d && f.on("click", function() {
          ld(d, "_" + e.get("target"));
        }), p && c.on("click", function() {
          ld(p, "_" + e.get("subtarget"));
        }), at(f).eventData = at(c).eventData = g ? {
          componentType: "title",
          componentIndex: e.componentIndex
        } : null, a.add(f), v && a.add(c);
        var y = a.getBoundingRect(), m = e.getBoxLayoutParams();
        m.width = y.width, m.height = y.height;
        var _ = Pn(m, {
          width: i.getWidth(),
          height: i.getHeight()
        }, e.get("padding"));
        u || (u = e.get("left") || e.get("right"), u === "middle" && (u = "center"), u === "right" ? _.x += _.width : u === "center" && (_.x += _.width / 2)), l || (l = e.get("top") || e.get("bottom"), l === "center" && (l = "middle"), l === "bottom" ? _.y += _.height : l === "middle" && (_.y += _.height / 2), l = l || "top"), a.x = _.x, a.y = _.y, a.markRedraw();
        var S = {
          align: u,
          verticalAlign: l
        };
        f.setStyle(S), c.setStyle(S), y = a.getBoundingRect();
        var w = _.margin, b = e.getItemStyle(["color", "opacity"]);
        b.fill = e.get("backgroundColor");
        var x = new Tt({
          shape: {
            x: y.x - w[3],
            y: y.y - w[0],
            width: y.width + w[1] + w[3],
            height: y.height + w[0] + w[2],
            r: e.get("borderRadius")
          },
          style: b,
          subPixelOptimize: !0,
          silent: !0
        });
        a.add(x);
      }
    }, t.type = "title", t;
  })(oe)
);
function Sc(r) {
  r.registerComponentModel(yI), r.registerComponentView(mI);
}
var _I = function(r, t) {
  if (t === "all")
    return {
      type: "all",
      title: r.getLocaleModel().get(["legend", "selector", "all"])
    };
  if (t === "inverse")
    return {
      type: "inverse",
      title: r.getLocaleModel().get(["legend", "selector", "inverse"])
    };
}, qf = (
  /** @class */
  (function(r) {
    z(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e.layoutMode = {
        type: "box",
        // legend.width/height are maxWidth/maxHeight actually,
        // whereas real width/height is calculated by its content.
        // (Setting {left: 10, right: 10} does not make sense).
        // So consider the case:
        // `setOption({legend: {left: 10});`
        // then `setOption({legend: {right: 10});`
        // The previous `left` should be cleared by setting `ignoreSize`.
        ignoreSize: !0
      }, e;
    }
    return t.prototype.init = function(e, n, i) {
      this.mergeDefaultAndTheme(e, i), e.selected = e.selected || {}, this._updateSelector(e);
    }, t.prototype.mergeOption = function(e, n) {
      r.prototype.mergeOption.call(this, e, n), this._updateSelector(e);
    }, t.prototype._updateSelector = function(e) {
      var n = e.selector, i = this.ecModel;
      n === !0 && (n = e.selector = ["all", "inverse"]), H(n) && M(n, function(a, o) {
        W(a) && (a = {
          type: a
        }), n[o] = ot(a, _I(i, a.type));
      });
    }, t.prototype.optionUpdated = function() {
      this._updateData(this.ecModel);
      var e = this._data;
      if (e[0] && this.get("selectedMode") === "single") {
        for (var n = !1, i = 0; i < e.length; i++) {
          var a = e[i].get("name");
          if (this.isSelected(a)) {
            this.select(a), n = !0;
            break;
          }
        }
        !n && this.select(e[0].get("name"));
      }
    }, t.prototype._updateData = function(e) {
      var n = [], i = [];
      e.eachRawSeries(function(u) {
        var l = u.name;
        i.push(l);
        var f;
        if (u.legendVisualProvider) {
          var h = u.legendVisualProvider, v = h.getAllNames();
          e.isSeriesFiltered(u) || (i = i.concat(v)), v.length ? n = n.concat(v) : f = !0;
        } else
          f = !0;
        f && _h(u) && n.push(u.name);
      }), this._availableNames = i;
      var a = this.get("data") || n, o = Q(), s = U(a, function(u) {
        return (W(u) || dt(u)) && (u = {
          name: u
        }), o.get(u.name) ? null : (o.set(u.name, !0), new gt(u, this, this.ecModel));
      }, this);
      this._data = Dt(s, function(u) {
        return !!u;
      });
    }, t.prototype.getData = function() {
      return this._data;
    }, t.prototype.select = function(e) {
      var n = this.option.selected, i = this.get("selectedMode");
      if (i === "single") {
        var a = this._data;
        M(a, function(o) {
          n[o.get("name")] = !1;
        });
      }
      n[e] = !0;
    }, t.prototype.unSelect = function(e) {
      this.get("selectedMode") !== "single" && (this.option.selected[e] = !1);
    }, t.prototype.toggleSelected = function(e) {
      var n = this.option.selected;
      n.hasOwnProperty(e) || (n[e] = !0), this[n[e] ? "unSelect" : "select"](e);
    }, t.prototype.allSelect = function() {
      var e = this._data, n = this.option.selected;
      M(e, function(i) {
        n[i.get("name", !0)] = !0;
      });
    }, t.prototype.inverseSelect = function() {
      var e = this._data, n = this.option.selected;
      M(e, function(i) {
        var a = i.get("name", !0);
        n.hasOwnProperty(a) || (n[a] = !0), n[a] = !n[a];
      });
    }, t.prototype.isSelected = function(e) {
      var n = this.option.selected;
      return !(n.hasOwnProperty(e) && !n[e]) && ht(this._availableNames, e) >= 0;
    }, t.prototype.getOrient = function() {
      return this.get("orient") === "vertical" ? {
        index: 1,
        name: "vertical"
      } : {
        index: 0,
        name: "horizontal"
      };
    }, t.type = "legend.plain", t.dependencies = ["series"], t.defaultOption = {
      // zlevel: 0,
      z: 4,
      show: !0,
      orient: "horizontal",
      left: "center",
      // right: 'center',
      top: 0,
      // bottom: null,
      align: "auto",
      backgroundColor: "rgba(0,0,0,0)",
      borderColor: "#ccc",
      borderRadius: 0,
      borderWidth: 0,
      padding: 5,
      itemGap: 10,
      itemWidth: 25,
      itemHeight: 14,
      symbolRotate: "inherit",
      symbolKeepAspect: !0,
      inactiveColor: "#ccc",
      inactiveBorderColor: "#ccc",
      inactiveBorderWidth: "auto",
      itemStyle: {
        color: "inherit",
        opacity: "inherit",
        borderColor: "inherit",
        borderWidth: "auto",
        borderCap: "inherit",
        borderJoin: "inherit",
        borderDashOffset: "inherit",
        borderMiterLimit: "inherit"
      },
      lineStyle: {
        width: "auto",
        color: "inherit",
        inactiveColor: "#ccc",
        inactiveWidth: 2,
        opacity: "inherit",
        type: "inherit",
        cap: "inherit",
        join: "inherit",
        dashOffset: "inherit",
        miterLimit: "inherit"
      },
      textStyle: {
        color: "#333"
      },
      selectedMode: !0,
      selector: !1,
      selectorLabel: {
        show: !0,
        borderRadius: 10,
        padding: [3, 5, 3, 5],
        fontSize: 12,
        fontFamily: "sans-serif",
        color: "#666",
        borderWidth: 1,
        borderColor: "#666"
      },
      emphasis: {
        selectorLabel: {
          show: !0,
          color: "#eee",
          backgroundColor: "#666"
        }
      },
      selectorPosition: "auto",
      selectorItemGap: 7,
      selectorButtonGap: 10,
      tooltip: {
        show: !1
      }
    }, t;
  })(it)
), Kn = St, $f = M, Oo = It, P_ = (
  /** @class */
  (function(r) {
    z(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e.newlineDisabled = !1, e;
    }
    return t.prototype.init = function() {
      this.group.add(this._contentGroup = new Oo()), this.group.add(this._selectorGroup = new Oo()), this._isFirstRender = !0;
    }, t.prototype.getContentGroup = function() {
      return this._contentGroup;
    }, t.prototype.getSelectorGroup = function() {
      return this._selectorGroup;
    }, t.prototype.render = function(e, n, i) {
      var a = this._isFirstRender;
      if (this._isFirstRender = !1, this.resetInner(), !!e.get("show", !0)) {
        var o = e.get("align"), s = e.get("orient");
        (!o || o === "auto") && (o = e.get("left") === "right" && s === "vertical" ? "right" : "left");
        var u = e.get("selector", !0), l = e.get("selectorPosition", !0);
        u && (!l || l === "auto") && (l = s === "horizontal" ? "end" : "start"), this.renderInner(o, e, n, i, u, s, l);
        var f = e.getBoxLayoutParams(), h = {
          width: i.getWidth(),
          height: i.getHeight()
        }, v = e.get("padding"), c = Pn(f, h, v), d = this.layoutInner(e, o, c, a, u, l), p = Pn(ut({
          width: d.width,
          height: d.height
        }, f), h, v);
        this.group.x = p.x - d.x, this.group.y = p.y - d.y, this.group.markRedraw(), this.group.add(this._backgroundEl = QP(d, e));
      }
    }, t.prototype.resetInner = function() {
      this.getContentGroup().removeAll(), this._backgroundEl && this.group.remove(this._backgroundEl), this.getSelectorGroup().removeAll();
    }, t.prototype.renderInner = function(e, n, i, a, o, s, u) {
      var l = this.getContentGroup(), f = Q(), h = n.get("selectedMode"), v = [];
      i.eachRawSeries(function(c) {
        !c.get("legendHoverLink") && v.push(c.id);
      }), $f(n.getData(), function(c, d) {
        var p = c.get("name");
        if (!this.newlineDisabled && (p === "" || p === `
`)) {
          var g = new Oo();
          g.newline = !0, l.add(g);
          return;
        }
        var y = i.getSeriesByName(p)[0];
        if (!f.get(p)) {
          if (y) {
            var m = y.getData(), _ = m.getVisual("legendLineStyle") || {}, S = m.getVisual("legendIcon"), w = m.getVisual("style"), b = this._createItem(y, p, d, c, n, e, _, w, S, h, a);
            b.on("click", Kn(mg, p, null, a, v)).on("mouseover", Kn(Zf, y.name, null, a, v)).on("mouseout", Kn(jf, y.name, null, a, v)), i.ssr && b.eachChild(function(x) {
              var T = at(x);
              T.seriesIndex = y.seriesIndex, T.dataIndex = d, T.ssrType = "legend";
            }), f.set(p, !0);
          } else
            i.eachRawSeries(function(x) {
              if (!f.get(p) && x.legendVisualProvider) {
                var T = x.legendVisualProvider;
                if (!T.containName(p))
                  return;
                var D = T.indexOfName(p), A = T.getItemVisual(D, "style"), C = T.getItemVisual(D, "legendIcon"), E = le(A.fill);
                E && E[3] === 0 && (E[3] = 0.2, A = F(F({}, A), {
                  fill: Ur(E, "rgba")
                }));
                var P = this._createItem(x, p, d, c, n, e, {}, A, C, h, a);
                P.on("click", Kn(mg, null, p, a, v)).on("mouseover", Kn(Zf, null, p, a, v)).on("mouseout", Kn(jf, null, p, a, v)), i.ssr && P.eachChild(function(L) {
                  var O = at(L);
                  O.seriesIndex = x.seriesIndex, O.dataIndex = d, O.ssrType = "legend";
                }), f.set(p, !0);
              }
            }, this);
          process.env.NODE_ENV !== "production" && (f.get(p) || console.warn(p + " series not exists. Legend data should be same with series name or data name."));
        }
      }, this), o && this._createSelector(o, n, a, s, u);
    }, t.prototype._createSelector = function(e, n, i, a, o) {
      var s = this.getSelectorGroup();
      $f(e, function(l) {
        var f = l.type, h = new Mt({
          style: {
            x: 0,
            y: 0,
            align: "center",
            verticalAlign: "middle"
          },
          onclick: function() {
            i.dispatchAction({
              type: f === "all" ? "legendAllSelect" : "legendInverseSelect",
              legendId: n.id
            });
          }
        });
        s.add(h);
        var v = n.getModel("selectorLabel"), c = n.getModel(["emphasis", "selectorLabel"]);
        Wa(h, {
          normal: v,
          emphasis: c
        }, {
          defaultText: l.title
        }), vs(h);
      });
    }, t.prototype._createItem = function(e, n, i, a, o, s, u, l, f, h, v) {
      var c = e.visualDrawType, d = o.get("itemWidth"), p = o.get("itemHeight"), g = o.isSelected(n), y = a.get("symbolRotate"), m = a.get("symbolKeepAspect"), _ = a.get("icon");
      f = _ || f || "roundRect";
      var S = SI(f, a, u, l, c, g, v), w = new Oo(), b = a.getModel("textStyle");
      if (Z(e.getLegendIcon) && (!_ || _ === "inherit"))
        w.add(e.getLegendIcon({
          itemWidth: d,
          itemHeight: p,
          icon: f,
          iconRotate: y,
          itemStyle: S.itemStyle,
          lineStyle: S.lineStyle,
          symbolKeepAspect: m
        }));
      else {
        var x = _ === "inherit" && e.getData().getVisual("symbol") ? y === "inherit" ? e.getData().getVisual("symbolRotate") : y : 0;
        w.add(bI({
          itemWidth: d,
          itemHeight: p,
          icon: f,
          iconRotate: x,
          itemStyle: S.itemStyle,
          symbolKeepAspect: m
        }));
      }
      var T = s === "left" ? d + 5 : -5, D = s, A = o.get("formatter"), C = n;
      W(A) && A ? C = A.replace("{name}", n ?? "") : Z(A) && (C = A(n));
      var E = g ? b.getTextColor() : a.get("inactiveColor");
      w.add(new Mt({
        style: vr(b, {
          text: C,
          x: T,
          y: p / 2,
          fill: E,
          align: D,
          verticalAlign: "middle"
        }, {
          inheritColor: E
        })
      }));
      var P = new Tt({
        shape: w.getBoundingRect(),
        style: {
          // Cannot use 'invisible' because SVG SSR will miss the node
          fill: "transparent"
        }
      }), L = a.getModel("tooltip");
      return L.get("show") && Zs({
        el: P,
        componentModel: o,
        itemName: n,
        itemTooltipOption: L.option
      }), w.add(P), w.eachChild(function(O) {
        O.silent = !0;
      }), P.silent = !h, this.getContentGroup().add(w), vs(w), w.__legendDataIndex = i, w;
    }, t.prototype.layoutInner = function(e, n, i, a, o, s) {
      var u = this.getContentGroup(), l = this.getSelectorGroup();
      fa(e.get("orient"), u, e.get("itemGap"), i.width, i.height);
      var f = u.getBoundingRect(), h = [-f.x, -f.y];
      if (l.markRedraw(), u.markRedraw(), o) {
        fa(
          // Buttons in selectorGroup always layout horizontally
          "horizontal",
          l,
          e.get("selectorItemGap", !0)
        );
        var v = l.getBoundingRect(), c = [-v.x, -v.y], d = e.get("selectorButtonGap", !0), p = e.getOrient().index, g = p === 0 ? "width" : "height", y = p === 0 ? "height" : "width", m = p === 0 ? "y" : "x";
        s === "end" ? c[p] += f[g] + d : h[p] += v[g] + d, c[1 - p] += f[y] / 2 - v[y] / 2, l.x = c[0], l.y = c[1], u.x = h[0], u.y = h[1];
        var _ = {
          x: 0,
          y: 0
        };
        return _[g] = f[g] + d + v[g], _[y] = Math.max(f[y], v[y]), _[m] = Math.min(0, v[m] + c[1 - p]), _;
      } else
        return u.x = h[0], u.y = h[1], this.group.getBoundingRect();
    }, t.prototype.remove = function() {
      this.getContentGroup().removeAll(), this._isFirstRender = !0;
    }, t.type = "legend.plain", t;
  })(oe)
);
function SI(r, t, e, n, i, a, o) {
  function s(g, y) {
    g.lineWidth === "auto" && (g.lineWidth = y.lineWidth > 0 ? 2 : 0), $f(g, function(m, _) {
      g[_] === "inherit" && (g[_] = y[_]);
    });
  }
  var u = t.getModel("itemStyle"), l = u.getItemStyle(), f = r.lastIndexOf("empty", 0) === 0 ? "fill" : "stroke", h = u.getShallow("decal");
  l.decal = !h || h === "inherit" ? n.decal : Lf(h, o), l.fill === "inherit" && (l.fill = n[i]), l.stroke === "inherit" && (l.stroke = n[f]), l.opacity === "inherit" && (l.opacity = (i === "fill" ? n : e).opacity), s(l, n);
  var v = t.getModel("lineStyle"), c = v.getLineStyle();
  if (s(c, e), l.fill === "auto" && (l.fill = n.fill), l.stroke === "auto" && (l.stroke = n.fill), c.stroke === "auto" && (c.stroke = n.fill), !a) {
    var d = t.get("inactiveBorderWidth"), p = l[f];
    l.lineWidth = d === "auto" ? n.lineWidth > 0 && p ? 2 : 0 : l.lineWidth, l.fill = t.get("inactiveColor"), l.stroke = t.get("inactiveBorderColor"), c.stroke = v.get("inactiveColor"), c.lineWidth = v.get("inactiveWidth");
  }
  return {
    itemStyle: l,
    lineStyle: c
  };
}
function bI(r) {
  var t = r.icon || "roundRect", e = In(t, 0, 0, r.itemWidth, r.itemHeight, r.itemStyle.fill, r.symbolKeepAspect);
  return e.setStyle(r.itemStyle), e.rotation = (r.iconRotate || 0) * Math.PI / 180, e.setOrigin([r.itemWidth / 2, r.itemHeight / 2]), t.indexOf("empty") > -1 && (e.style.stroke = e.style.fill, e.style.fill = "#fff", e.style.lineWidth = 2), e;
}
function mg(r, t, e, n) {
  jf(r, t, e, n), e.dispatchAction({
    type: "legendToggleSelect",
    name: r ?? t
  }), Zf(r, t, e, n);
}
function I_(r) {
  for (var t = r.getZr().storage.getDisplayList(), e, n = 0, i = t.length; n < i && !(e = t[n].states.emphasis); )
    n++;
  return e && e.hoverLayer;
}
function Zf(r, t, e, n) {
  I_(e) || e.dispatchAction({
    type: "highlight",
    seriesName: r,
    name: t,
    excludeSeriesId: n
  });
}
function jf(r, t, e, n) {
  I_(e) || e.dispatchAction({
    type: "downplay",
    seriesName: r,
    name: t,
    excludeSeriesId: n
  });
}
function wI(r) {
  var t = r.findComponents({
    mainType: "legend"
  });
  t && t.length && r.filterSeries(function(e) {
    for (var n = 0; n < t.length; n++)
      if (!t[n].isSelected(e.name))
        return !1;
    return !0;
  });
}
function qi(r, t, e) {
  var n = r === "allSelect" || r === "inverseSelect", i = {}, a = [];
  e.eachComponent({
    mainType: "legend",
    query: t
  }, function(s) {
    n ? s[r]() : s[r](t.name), _g(s, i), a.push(s.componentIndex);
  });
  var o = {};
  return e.eachComponent("legend", function(s) {
    M(i, function(u, l) {
      s[u ? "select" : "unSelect"](l);
    }), _g(s, o);
  }), n ? {
    selected: o,
    // return legendIndex array to tell the developers which legends are allSelect / inverseSelect
    legendIndex: a
  } : {
    name: t.name,
    selected: o
  };
}
function _g(r, t) {
  var e = t || {};
  return M(r.getData(), function(n) {
    var i = n.get("name");
    if (!(i === `
` || i === "")) {
      var a = r.isSelected(i);
      Hr(e, i) ? e[i] = e[i] && a : e[i] = a;
    }
  }), e;
}
function xI(r) {
  r.registerAction("legendToggleSelect", "legendselectchanged", St(qi, "toggleSelected")), r.registerAction("legendAllSelect", "legendselectall", St(qi, "allSelect")), r.registerAction("legendInverseSelect", "legendinverseselect", St(qi, "inverseSelect")), r.registerAction("legendSelect", "legendselected", St(qi, "select")), r.registerAction("legendUnSelect", "legendunselected", St(qi, "unSelect"));
}
function L_(r) {
  r.registerComponentModel(qf), r.registerComponentView(P_), r.registerProcessor(r.PRIORITY.PROCESSOR.SERIES_FILTER, wI), r.registerSubTypeDefaulter("legend", function() {
    return "plain";
  }), xI(r);
}
var TI = (
  /** @class */
  (function(r) {
    z(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.prototype.setScrollDataIndex = function(e) {
      this.option.scrollDataIndex = e;
    }, t.prototype.init = function(e, n, i) {
      var a = iu(e);
      r.prototype.init.call(this, e, n, i), Sg(this, e, a);
    }, t.prototype.mergeOption = function(e, n) {
      r.prototype.mergeOption.call(this, e, n), Sg(this, this.option, e);
    }, t.type = "legend.scroll", t.defaultOption = sm(qf.defaultOption, {
      scrollDataIndex: 0,
      pageButtonItemGap: 5,
      pageButtonGap: null,
      pageButtonPosition: "end",
      pageFormatter: "{current}/{total}",
      pageIcons: {
        horizontal: ["M0,0L12,-10L12,10z", "M0,0L-12,-10L-12,10z"],
        vertical: ["M0,0L20,0L10,-20z", "M0,0L20,0L10,20z"]
      },
      pageIconColor: "#2f4554",
      pageIconInactiveColor: "#aaa",
      pageIconSize: 15,
      pageTextStyle: {
        color: "#333"
      },
      animationDurationUpdate: 800
    }), t;
  })(qf)
);
function Sg(r, t, e) {
  var n = r.getOrient(), i = [1, 1];
  i[n.index] = 0, fi(t, e, {
    type: "box",
    ignoreSize: !!i
  });
}
var bg = It, Vl = ["width", "height"], zl = ["x", "y"], CI = (
  /** @class */
  (function(r) {
    z(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e.newlineDisabled = !0, e._currentIndex = 0, e;
    }
    return t.prototype.init = function() {
      r.prototype.init.call(this), this.group.add(this._containerGroup = new bg()), this._containerGroup.add(this.getContentGroup()), this.group.add(this._controllerGroup = new bg());
    }, t.prototype.resetInner = function() {
      r.prototype.resetInner.call(this), this._controllerGroup.removeAll(), this._containerGroup.removeClipPath(), this._containerGroup.__rectSize = null;
    }, t.prototype.renderInner = function(e, n, i, a, o, s, u) {
      var l = this;
      r.prototype.renderInner.call(this, e, n, i, a, o, s, u);
      var f = this._controllerGroup, h = n.get("pageIconSize", !0), v = H(h) ? h : [h, h];
      d("pagePrev", 0);
      var c = n.getModel("pageTextStyle");
      f.add(new Mt({
        name: "pageText",
        style: {
          // Placeholder to calculate a proper layout.
          text: "xx/xx",
          fill: c.getTextColor(),
          font: c.getFont(),
          verticalAlign: "middle",
          align: "center"
        },
        silent: !0
      })), d("pageNext", 1);
      function d(p, g) {
        var y = p + "DataIndex", m = $s(n.get("pageIcons", !0)[n.getOrient().name][g], {
          // Buttons will be created in each render, so we do not need
          // to worry about avoiding using legendModel kept in scope.
          onclick: vt(l._pageGo, l, y, n, a)
        }, {
          x: -v[0] / 2,
          y: -v[1] / 2,
          width: v[0],
          height: v[1]
        });
        m.name = p, f.add(m);
      }
    }, t.prototype.layoutInner = function(e, n, i, a, o, s) {
      var u = this.getSelectorGroup(), l = e.getOrient().index, f = Vl[l], h = zl[l], v = Vl[1 - l], c = zl[1 - l];
      o && fa(
        // Buttons in selectorGroup always layout horizontally
        "horizontal",
        u,
        e.get("selectorItemGap", !0)
      );
      var d = e.get("selectorButtonGap", !0), p = u.getBoundingRect(), g = [-p.x, -p.y], y = nt(i);
      o && (y[f] = i[f] - p[f] - d);
      var m = this._layoutContentAndController(e, a, y, l, f, v, c, h);
      if (o) {
        if (s === "end")
          g[l] += m[f] + d;
        else {
          var _ = p[f] + d;
          g[l] -= _, m[h] -= _;
        }
        m[f] += p[f] + d, g[1 - l] += m[c] + m[v] / 2 - p[v] / 2, m[v] = Math.max(m[v], p[v]), m[c] = Math.min(m[c], p[c] + g[1 - l]), u.x = g[0], u.y = g[1], u.markRedraw();
      }
      return m;
    }, t.prototype._layoutContentAndController = function(e, n, i, a, o, s, u, l) {
      var f = this.getContentGroup(), h = this._containerGroup, v = this._controllerGroup;
      fa(e.get("orient"), f, e.get("itemGap"), a ? i.width : null, a ? null : i.height), fa(
        // Buttons in controller are layout always horizontally.
        "horizontal",
        v,
        e.get("pageButtonItemGap", !0)
      );
      var c = f.getBoundingRect(), d = v.getBoundingRect(), p = this._showController = c[o] > i[o], g = [-c.x, -c.y];
      n || (g[a] = f[l]);
      var y = [0, 0], m = [-d.x, -d.y], _ = K(e.get("pageButtonGap", !0), e.get("itemGap", !0));
      if (p) {
        var S = e.get("pageButtonPosition", !0);
        S === "end" ? m[a] += i[o] - d[o] : y[a] += d[o] + _;
      }
      m[1 - a] += c[s] / 2 - d[s] / 2, f.setPosition(g), h.setPosition(y), v.setPosition(m);
      var w = {
        x: 0,
        y: 0
      };
      if (w[o] = p ? i[o] : c[o], w[s] = Math.max(c[s], d[s]), w[u] = Math.min(0, d[u] + m[1 - a]), h.__rectSize = i[o], p) {
        var b = {
          x: 0,
          y: 0
        };
        b[o] = Math.max(i[o] - d[o] - _, 0), b[s] = w[s], h.setClipPath(new Tt({
          shape: b
        })), h.__rectSize = b[o];
      } else
        v.eachChild(function(T) {
          T.attr({
            invisible: !0,
            silent: !0
          });
        });
      var x = this._getPageInfo(e);
      return x.pageIndex != null && Wt(
        f,
        {
          x: x.contentPosition[0],
          y: x.contentPosition[1]
        },
        // When switch from "show controller" to "not show controller", view should be
        // updated immediately without animation, otherwise causes weird effect.
        p ? e : null
      ), this._updatePageInfoView(e, x), w;
    }, t.prototype._pageGo = function(e, n, i) {
      var a = this._getPageInfo(n)[e];
      a != null && i.dispatchAction({
        type: "legendScroll",
        scrollDataIndex: a,
        legendId: n.id
      });
    }, t.prototype._updatePageInfoView = function(e, n) {
      var i = this._controllerGroup;
      M(["pagePrev", "pageNext"], function(f) {
        var h = f + "DataIndex", v = n[h] != null, c = i.childOfName(f);
        c && (c.setStyle("fill", v ? e.get("pageIconColor", !0) : e.get("pageIconInactiveColor", !0)), c.cursor = v ? "pointer" : "default");
      });
      var a = i.childOfName("pageText"), o = e.get("pageFormatter"), s = n.pageIndex, u = s != null ? s + 1 : 0, l = n.pageCount;
      a && o && a.setStyle("text", W(o) ? o.replace("{current}", u == null ? "" : u + "").replace("{total}", l == null ? "" : l + "") : o({
        current: u,
        total: l
      }));
    }, t.prototype._getPageInfo = function(e) {
      var n = e.get("scrollDataIndex", !0), i = this.getContentGroup(), a = this._containerGroup.__rectSize, o = e.getOrient().index, s = Vl[o], u = zl[o], l = this._findTargetItemIndex(n), f = i.children(), h = f[l], v = f.length, c = v ? 1 : 0, d = {
        contentPosition: [i.x, i.y],
        pageCount: c,
        pageIndex: c - 1,
        pagePrevDataIndex: null,
        pageNextDataIndex: null
      };
      if (!h)
        return d;
      var p = S(h);
      d.contentPosition[o] = -p.s;
      for (var g = l + 1, y = p, m = p, _ = null; g <= v; ++g)
        _ = S(f[g]), // Half of the last item is out of the window.
        (!_ && m.e > y.s + a || _ && !w(_, y.s)) && (m.i > y.i ? y = m : y = _, y && (d.pageNextDataIndex == null && (d.pageNextDataIndex = y.i), ++d.pageCount)), m = _;
      for (var g = l - 1, y = p, m = p, _ = null; g >= -1; --g)
        _ = S(f[g]), // If the the end item does not intersect with the window started
        // from the current item, a page can be settled.
        (!_ || !w(m, _.s)) && y.i < m.i && (m = y, d.pagePrevDataIndex == null && (d.pagePrevDataIndex = y.i), ++d.pageCount, ++d.pageIndex), y = _;
      return d;
      function S(b) {
        if (b) {
          var x = b.getBoundingRect(), T = x[u] + b[u];
          return {
            s: T,
            e: T + x[s],
            i: b.__legendDataIndex
          };
        }
      }
      function w(b, x) {
        return b.e >= x && b.s <= x + a;
      }
    }, t.prototype._findTargetItemIndex = function(e) {
      if (!this._showController)
        return 0;
      var n, i = this.getContentGroup(), a;
      return i.eachChild(function(o, s) {
        var u = o.__legendDataIndex;
        a == null && u != null && (a = s), u === e && (n = s);
      }), n ?? a;
    }, t.type = "legend.scroll", t;
  })(P_)
);
function DI(r) {
  r.registerAction("legendScroll", "legendscroll", function(t, e) {
    var n = t.scrollDataIndex;
    n != null && e.eachComponent({
      mainType: "legend",
      subType: "scroll",
      query: t
    }, function(i) {
      i.setScrollDataIndex(n);
    });
  });
}
function AI(r) {
  ke(L_), r.registerComponentModel(TI), r.registerComponentView(CI), DI(r);
}
function bc(r) {
  ke(L_), ke(AI);
}
function wg(r, t, e) {
  var n = hr.createCanvas(), i = t.getWidth(), a = t.getHeight(), o = n.style;
  return o && (o.position = "absolute", o.left = "0", o.top = "0", o.width = i + "px", o.height = a + "px", n.setAttribute("data-zr-dom-id", r)), n.width = i * e, n.height = a * e, n;
}
var Gl = (function(r) {
  z(t, r);
  function t(e, n, i) {
    var a = r.call(this) || this;
    a.motionBlur = !1, a.lastFrameAlpha = 0.7, a.dpr = 1, a.virtual = !1, a.config = {}, a.incremental = !1, a.zlevel = 0, a.maxRepaintRectCount = 5, a.__dirty = !0, a.__firstTimePaint = !0, a.__used = !1, a.__drawIndex = 0, a.__startIndex = 0, a.__endIndex = 0, a.__prevStartIndex = null, a.__prevEndIndex = null;
    var o;
    i = i || is, typeof e == "string" ? o = wg(e, n, i) : Y(e) && (o = e, e = o.id), a.id = e, a.dom = o;
    var s = o.style;
    return s && (oh(o), o.onselectstart = function() {
      return !1;
    }, s.padding = "0", s.margin = "0", s.borderWidth = "0"), a.painter = n, a.dpr = i, a;
  }
  return t.prototype.getElementCount = function() {
    return this.__endIndex - this.__startIndex;
  }, t.prototype.afterBrush = function() {
    this.__prevStartIndex = this.__startIndex, this.__prevEndIndex = this.__endIndex;
  }, t.prototype.initContext = function() {
    this.ctx = this.dom.getContext("2d"), this.ctx.dpr = this.dpr;
  }, t.prototype.setUnpainted = function() {
    this.__firstTimePaint = !0;
  }, t.prototype.createBackBuffer = function() {
    var e = this.dpr;
    this.domBack = wg("back-" + this.id, this.painter, e), this.ctxBack = this.domBack.getContext("2d"), e !== 1 && this.ctxBack.scale(e, e);
  }, t.prototype.createRepaintRects = function(e, n, i, a) {
    if (this.__firstTimePaint)
      return this.__firstTimePaint = !1, null;
    var o = [], s = this.maxRepaintRectCount, u = !1, l = new st(0, 0, 0, 0);
    function f(m) {
      if (!(!m.isFinite() || m.isZero()))
        if (o.length === 0) {
          var _ = new st(0, 0, 0, 0);
          _.copy(m), o.push(_);
        } else {
          for (var S = !1, w = 1 / 0, b = 0, x = 0; x < o.length; ++x) {
            var T = o[x];
            if (T.intersect(m)) {
              var D = new st(0, 0, 0, 0);
              D.copy(T), D.union(m), o[x] = D, S = !0;
              break;
            } else if (u) {
              l.copy(m), l.union(T);
              var A = m.width * m.height, C = T.width * T.height, E = l.width * l.height, P = E - A - C;
              P < w && (w = P, b = x);
            }
          }
          if (u && (o[b].union(m), S = !0), !S) {
            var _ = new st(0, 0, 0, 0);
            _.copy(m), o.push(_);
          }
          u || (u = o.length >= s);
        }
    }
    for (var h = this.__startIndex; h < this.__endIndex; ++h) {
      var v = e[h];
      if (v) {
        var c = v.shouldBePainted(i, a, !0, !0), d = v.__isRendered && (v.__dirty & ue || !c) ? v.getPrevPaintRect() : null;
        d && f(d);
        var p = c && (v.__dirty & ue || !v.__isRendered) ? v.getPaintRect() : null;
        p && f(p);
      }
    }
    for (var h = this.__prevStartIndex; h < this.__prevEndIndex; ++h) {
      var v = n[h], c = v && v.shouldBePainted(i, a, !0, !0);
      if (v && (!c || !v.__zr) && v.__isRendered) {
        var d = v.getPrevPaintRect();
        d && f(d);
      }
    }
    var g;
    do {
      g = !1;
      for (var h = 0; h < o.length; ) {
        if (o[h].isZero()) {
          o.splice(h, 1);
          continue;
        }
        for (var y = h + 1; y < o.length; )
          o[h].intersect(o[y]) ? (g = !0, o[h].union(o[y]), o.splice(y, 1)) : y++;
        h++;
      }
    } while (g);
    return this._paintRects = o, o;
  }, t.prototype.debugGetPaintRects = function() {
    return (this._paintRects || []).slice();
  }, t.prototype.resize = function(e, n) {
    var i = this.dpr, a = this.dom, o = a.style, s = this.domBack;
    o && (o.width = e + "px", o.height = n + "px"), a.width = e * i, a.height = n * i, s && (s.width = e * i, s.height = n * i, i !== 1 && this.ctxBack.scale(i, i));
  }, t.prototype.clear = function(e, n, i) {
    var a = this.dom, o = this.ctx, s = a.width, u = a.height;
    n = n || this.clearColor;
    var l = this.motionBlur && !e, f = this.lastFrameAlpha, h = this.dpr, v = this;
    l && (this.domBack || this.createBackBuffer(), this.ctxBack.globalCompositeOperation = "copy", this.ctxBack.drawImage(a, 0, 0, s / h, u / h));
    var c = this.domBack;
    function d(p, g, y, m) {
      if (o.clearRect(p, g, y, m), n && n !== "transparent") {
        var _ = void 0;
        if (La(n)) {
          var S = n.global || n.__width === y && n.__height === m;
          _ = S && n.__canvasGradient || Pf(o, n, {
            x: 0,
            y: 0,
            width: y,
            height: m
          }), n.__canvasGradient = _, n.__width = y, n.__height = m;
        } else Ig(n) && (n.scaleX = n.scaleX || h, n.scaleY = n.scaleY || h, _ = If(o, n, {
          dirty: function() {
            v.setUnpainted(), v.painter.refresh();
          }
        }));
        o.save(), o.fillStyle = _ || n, o.fillRect(p, g, y, m), o.restore();
      }
      l && (o.save(), o.globalAlpha = f, o.drawImage(c, p, g, y, m), o.restore());
    }
    !i || l ? d(0, 0, s, u) : i.length && M(i, function(p) {
      d(p.x * h, p.y * h, p.width * h, p.height * h);
    });
  }, t;
})(Ze), xg = 1e5, vn = 314159, Ro = 0.01, MI = 1e-3;
function EI(r) {
  return r ? r.__builtin__ ? !0 : !(typeof r.resize != "function" || typeof r.refresh != "function") : !1;
}
function PI(r, t) {
  var e = document.createElement("div");
  return e.style.cssText = [
    "position:relative",
    "width:" + r + "px",
    "height:" + t + "px",
    "padding:0",
    "margin:0",
    "border-width:0"
  ].join(";") + ";", e;
}
var II = (function() {
  function r(t, e, n, i) {
    this.type = "canvas", this._zlevelList = [], this._prevDisplayList = [], this._layers = {}, this._layerConfig = {}, this._needsManuallyCompositing = !1, this.type = "canvas";
    var a = !t.nodeName || t.nodeName.toUpperCase() === "CANVAS";
    this._opts = n = F({}, n || {}), this.dpr = n.devicePixelRatio || is, this._singleCanvas = a, this.root = t;
    var o = t.style;
    o && (oh(t), t.innerHTML = ""), this.storage = e;
    var s = this._zlevelList;
    this._prevDisplayList = [];
    var u = this._layers;
    if (a) {
      var f = t, h = f.width, v = f.height;
      n.width != null && (h = n.width), n.height != null && (v = n.height), this.dpr = n.devicePixelRatio || 1, f.width = h * this.dpr, f.height = v * this.dpr, this._width = h, this._height = v;
      var c = new Gl(f, this, this.dpr);
      c.__builtin__ = !0, c.initContext(), u[vn] = c, c.zlevel = vn, s.push(vn), this._domRoot = t;
    } else {
      this._width = bo(t, 0, n), this._height = bo(t, 1, n);
      var l = this._domRoot = PI(this._width, this._height);
      t.appendChild(l);
    }
  }
  return r.prototype.getType = function() {
    return "canvas";
  }, r.prototype.isSingleCanvas = function() {
    return this._singleCanvas;
  }, r.prototype.getViewportRoot = function() {
    return this._domRoot;
  }, r.prototype.getViewportRootOffset = function() {
    var t = this.getViewportRoot();
    if (t)
      return {
        offsetLeft: t.offsetLeft || 0,
        offsetTop: t.offsetTop || 0
      };
  }, r.prototype.refresh = function(t) {
    var e = this.storage.getDisplayList(!0), n = this._prevDisplayList, i = this._zlevelList;
    this._redrawId = Math.random(), this._paintList(e, n, t, this._redrawId);
    for (var a = 0; a < i.length; a++) {
      var o = i[a], s = this._layers[o];
      if (!s.__builtin__ && s.refresh) {
        var u = a === 0 ? this._backgroundColor : null;
        s.refresh(u);
      }
    }
    return this._opts.useDirtyRect && (this._prevDisplayList = e.slice()), this;
  }, r.prototype.refreshHover = function() {
    this._paintHoverList(this.storage.getDisplayList(!1));
  }, r.prototype._paintHoverList = function(t) {
    var e = t.length, n = this._hoverlayer;
    if (n && n.clear(), !!e) {
      for (var i = {
        inHover: !0,
        viewWidth: this._width,
        viewHeight: this._height
      }, a, o = 0; o < e; o++) {
        var s = t[o];
        s.__inHover && (n || (n = this._hoverlayer = this.getLayer(xg)), a || (a = n.ctx, a.save()), mn(a, s, i, o === e - 1));
      }
      a && a.restore();
    }
  }, r.prototype.getHoverLayer = function() {
    return this.getLayer(xg);
  }, r.prototype.paintOne = function(t, e) {
    Zh(t, e);
  }, r.prototype._paintList = function(t, e, n, i) {
    if (this._redrawId === i) {
      n = n || !1, this._updateLayerStatus(t);
      var a = this._doPaintList(t, e, n), o = a.finished, s = a.needsRefreshHover;
      if (this._needsManuallyCompositing && this._compositeManually(), s && this._paintHoverList(t), o)
        this.eachLayer(function(l) {
          l.afterBrush && l.afterBrush();
        });
      else {
        var u = this;
        Jo(function() {
          u._paintList(t, e, n, i);
        });
      }
    }
  }, r.prototype._compositeManually = function() {
    var t = this.getLayer(vn).ctx, e = this._domRoot.width, n = this._domRoot.height;
    t.clearRect(0, 0, e, n), this.eachBuiltinLayer(function(i) {
      i.virtual && t.drawImage(i.dom, 0, 0, e, n);
    });
  }, r.prototype._doPaintList = function(t, e, n) {
    for (var i = this, a = [], o = this._opts.useDirtyRect, s = 0; s < this._zlevelList.length; s++) {
      var u = this._zlevelList[s], l = this._layers[u];
      l.__builtin__ && l !== this._hoverlayer && (l.__dirty || n) && a.push(l);
    }
    for (var f = !0, h = !1, v = function(p) {
      var g = a[p], y = g.ctx, m = o && g.createRepaintRects(t, e, c._width, c._height), _ = n ? g.__startIndex : g.__drawIndex, S = !n && g.incremental && Date.now, w = S && Date.now(), b = g.zlevel === c._zlevelList[0] ? c._backgroundColor : null;
      if (g.__startIndex === g.__endIndex)
        g.clear(!1, b, m);
      else if (_ === g.__startIndex) {
        var x = t[_];
        (!x.incremental || !x.notClear || n) && g.clear(!1, b, m);
      }
      _ === -1 && (console.error("For some unknown reason. drawIndex is -1"), _ = g.__startIndex);
      var T, D = function(P) {
        var L = {
          inHover: !1,
          allClipped: !1,
          prevEl: null,
          viewWidth: i._width,
          viewHeight: i._height
        };
        for (T = _; T < g.__endIndex; T++) {
          var O = t[T];
          if (O.__inHover && (h = !0), i._doPaintEl(O, g, o, P, L, T === g.__endIndex - 1), S) {
            var R = Date.now() - w;
            if (R > 15)
              break;
          }
        }
        L.prevElClipPaths && y.restore();
      };
      if (m)
        if (m.length === 0)
          T = g.__endIndex;
        else
          for (var A = c.dpr, C = 0; C < m.length; ++C) {
            var E = m[C];
            y.save(), y.beginPath(), y.rect(E.x * A, E.y * A, E.width * A, E.height * A), y.clip(), D(E), y.restore();
          }
      else
        y.save(), D(), y.restore();
      g.__drawIndex = T, g.__drawIndex < g.__endIndex && (f = !1);
    }, c = this, d = 0; d < a.length; d++)
      v(d);
    return $.wxa && M(this._layers, function(p) {
      p && p.ctx && p.ctx.draw && p.ctx.draw();
    }), {
      finished: f,
      needsRefreshHover: h
    };
  }, r.prototype._doPaintEl = function(t, e, n, i, a, o) {
    var s = e.ctx;
    if (n) {
      var u = t.getPaintRect();
      (!i || u && u.intersect(i)) && (mn(s, t, a, o), t.setPrevPaintRect(u));
    } else
      mn(s, t, a, o);
  }, r.prototype.getLayer = function(t, e) {
    this._singleCanvas && !this._needsManuallyCompositing && (t = vn);
    var n = this._layers[t];
    return n || (n = new Gl("zr_" + t, this, this.dpr), n.zlevel = t, n.__builtin__ = !0, this._layerConfig[t] ? ot(n, this._layerConfig[t], !0) : this._layerConfig[t - Ro] && ot(n, this._layerConfig[t - Ro], !0), e && (n.virtual = e), this.insertLayer(t, n), n.initContext()), n;
  }, r.prototype.insertLayer = function(t, e) {
    var n = this._layers, i = this._zlevelList, a = i.length, o = this._domRoot, s = null, u = -1;
    if (n[t]) {
      process.env.NODE_ENV !== "production" && Nr("ZLevel " + t + " has been used already");
      return;
    }
    if (!EI(e)) {
      process.env.NODE_ENV !== "production" && Nr("Layer of zlevel " + t + " is not valid");
      return;
    }
    if (a > 0 && t > i[0]) {
      for (u = 0; u < a - 1 && !(i[u] < t && i[u + 1] > t); u++)
        ;
      s = n[i[u]];
    }
    if (i.splice(u + 1, 0, t), n[t] = e, !e.virtual)
      if (s) {
        var l = s.dom;
        l.nextSibling ? o.insertBefore(e.dom, l.nextSibling) : o.appendChild(e.dom);
      } else
        o.firstChild ? o.insertBefore(e.dom, o.firstChild) : o.appendChild(e.dom);
    e.painter || (e.painter = this);
  }, r.prototype.eachLayer = function(t, e) {
    for (var n = this._zlevelList, i = 0; i < n.length; i++) {
      var a = n[i];
      t.call(e, this._layers[a], a);
    }
  }, r.prototype.eachBuiltinLayer = function(t, e) {
    for (var n = this._zlevelList, i = 0; i < n.length; i++) {
      var a = n[i], o = this._layers[a];
      o.__builtin__ && t.call(e, o, a);
    }
  }, r.prototype.eachOtherLayer = function(t, e) {
    for (var n = this._zlevelList, i = 0; i < n.length; i++) {
      var a = n[i], o = this._layers[a];
      o.__builtin__ || t.call(e, o, a);
    }
  }, r.prototype.getLayers = function() {
    return this._layers;
  }, r.prototype._updateLayerStatus = function(t) {
    this.eachBuiltinLayer(function(h, v) {
      h.__dirty = h.__used = !1;
    });
    function e(h) {
      a && (a.__endIndex !== h && (a.__dirty = !0), a.__endIndex = h);
    }
    if (this._singleCanvas)
      for (var n = 1; n < t.length; n++) {
        var i = t[n];
        if (i.zlevel !== t[n - 1].zlevel || i.incremental) {
          this._needsManuallyCompositing = !0;
          break;
        }
      }
    var a = null, o = 0, s, u;
    for (u = 0; u < t.length; u++) {
      var i = t[u], l = i.zlevel, f = void 0;
      s !== l && (s = l, o = 0), i.incremental ? (f = this.getLayer(l + MI, this._needsManuallyCompositing), f.incremental = !0, o = 1) : f = this.getLayer(l + (o > 0 ? Ro : 0), this._needsManuallyCompositing), f.__builtin__ || Nr("ZLevel " + l + " has been used by unkown layer " + f.id), f !== a && (f.__used = !0, f.__startIndex !== u && (f.__dirty = !0), f.__startIndex = u, f.incremental ? f.__drawIndex = -1 : f.__drawIndex = u, e(u), a = f), i.__dirty & ue && !i.__inHover && (f.__dirty = !0, f.incremental && f.__drawIndex < 0 && (f.__drawIndex = u));
    }
    e(u), this.eachBuiltinLayer(function(h, v) {
      !h.__used && h.getElementCount() > 0 && (h.__dirty = !0, h.__startIndex = h.__endIndex = h.__drawIndex = 0), h.__dirty && h.__drawIndex < 0 && (h.__drawIndex = h.__startIndex);
    });
  }, r.prototype.clear = function() {
    return this.eachBuiltinLayer(this._clearLayer), this;
  }, r.prototype._clearLayer = function(t) {
    t.clear();
  }, r.prototype.setBackgroundColor = function(t) {
    this._backgroundColor = t, M(this._layers, function(e) {
      e.setUnpainted();
    });
  }, r.prototype.configLayer = function(t, e) {
    if (e) {
      var n = this._layerConfig;
      n[t] ? ot(n[t], e, !0) : n[t] = e;
      for (var i = 0; i < this._zlevelList.length; i++) {
        var a = this._zlevelList[i];
        if (a === t || a === t + Ro) {
          var o = this._layers[a];
          ot(o, n[t], !0);
        }
      }
    }
  }, r.prototype.delLayer = function(t) {
    var e = this._layers, n = this._zlevelList, i = e[t];
    i && (i.dom.parentNode.removeChild(i.dom), delete e[t], n.splice(ht(n, t), 1));
  }, r.prototype.resize = function(t, e) {
    if (this._domRoot.style) {
      var n = this._domRoot;
      n.style.display = "none";
      var i = this._opts, a = this.root;
      if (t != null && (i.width = t), e != null && (i.height = e), t = bo(a, 0, i), e = bo(a, 1, i), n.style.display = "", this._width !== t || e !== this._height) {
        n.style.width = t + "px", n.style.height = e + "px";
        for (var o in this._layers)
          this._layers.hasOwnProperty(o) && this._layers[o].resize(t, e);
        this.refresh(!0);
      }
      this._width = t, this._height = e;
    } else {
      if (t == null || e == null)
        return;
      this._width = t, this._height = e, this.getLayer(vn).resize(t, e);
    }
    return this;
  }, r.prototype.clearLayer = function(t) {
    var e = this._layers[t];
    e && e.clear();
  }, r.prototype.dispose = function() {
    this.root.innerHTML = "", this.root = this.storage = this._domRoot = this._layers = null;
  }, r.prototype.getRenderedCanvas = function(t) {
    if (t = t || {}, this._singleCanvas && !this._compositeManually)
      return this._layers[vn].dom;
    var e = new Gl("image", this, t.pixelRatio || this.dpr);
    e.initContext(), e.clear(!1, t.backgroundColor || this._backgroundColor);
    var n = e.ctx;
    if (t.pixelRatio <= this.dpr) {
      this.refresh();
      var i = e.dom.width, a = e.dom.height;
      this.eachLayer(function(h) {
        h.__builtin__ ? n.drawImage(h.dom, 0, 0, i, a) : h.renderToCanvas && (n.save(), h.renderToCanvas(n), n.restore());
      });
    } else
      for (var o = {
        inHover: !1,
        viewWidth: this._width,
        viewHeight: this._height
      }, s = this.storage.getDisplayList(!0), u = 0, l = s.length; u < l; u++) {
        var f = s[u];
        mn(n, f, o, u === l - 1);
      }
    return e.dom;
  }, r.prototype.getWidth = function() {
    return this._width;
  }, r.prototype.getHeight = function() {
    return this._height;
  }, r;
})();
function wc(r) {
  r.registerPainter("canvas", II);
}
ke([kE, Sc, _c, C_, bc, wc]);
const LI = (r, t) => {
  const e = t.options?.series || [], n = r[0]?.data || [];
  let i = 0;
  const a = n.map((o, s) => s === 0 ? 0 : (i += n[s - 1] ?? 0, i));
  return [
    {
      ...e[0],
      type: "bar",
      data: a,
      itemStyle: { color: "transparent", ...e[0]?.itemStyle }
    },
    {
      ...e[1],
      ...r[0],
      type: "bar",
      label: { show: !0, position: "inside", ...e[1]?.label }
    }
  ];
};
function OI({ config: r = {}, data: t = {} }) {
  const e = t.categories || [], n = t.series || [], i = r.options?.series || [], { subType: a } = r;
  let o = n.map((u, l) => ({
    ...i[l] || {},
    ...u,
    name: u.name,
    type: "bar",
    data: Array.isArray(u.data) ? u.data : []
  }));
  a === "stacked" && (o = o.map((u) => ({ ...u, stack: "total" }))), a === "sorting" && (o = o.map((u) => ({ ...u, realtimeSort: !0 }))), a === "waterfall" && (o = LI(n, r));
  const s = {
    tooltip: { trigger: "axis", ...r.options?.tooltip },
    // default -> user override
    legend: { ...r.options?.legend },
    grid: { containLabel: !0, ...r.options?.grid },
    xAxis: {
      type: "category",
      ...r.options?.xAxis,
      data: e
      // dynamic last
    },
    yAxis: {
      type: "value",
      ...r.options?.yAxis
    },
    ...r.options,
    // global override (optional)
    series: o
  };
  return /* @__PURE__ */ or.jsx(
    Jf,
    {
      echarts: cc,
      option: s,
      style: { width: "100%", height: "100%" }
    }
  );
}
ke([
  bE,
  Sc,
  _c,
  C_,
  bc,
  wc
]);
function RI({ config: r, data: t }) {
  const e = t?.categories || [], n = t?.series || [], i = r.options?.series || [], { subType: a } = r;
  let o = n.map((u, l) => ({
    ...i[l] || {},
    // style/config provided from JSON first
    ...u,
    // inject dynamic data from API
    name: u.name,
    type: "line",
    data: Array.isArray(u.data) ? u.data : [],
    areaStyle: a === "area" || a === "stacked" ? {} : void 0
  }));
  a === "smooth" && (o = o.map((u) => ({ ...u, smooth: !0 }))), a === "area" && (o = o.map((u) => ({ ...u, areaStyle: {} }))), a === "stacked" && (o = o.map((u) => ({ ...u, stack: "total", areaStyle: {} })));
  const s = {
    tooltip: { trigger: "axis", ...r.options?.tooltip },
    // user overrides trigger
    xAxis: {
      type: "category",
      // default
      ...r.options?.xAxis,
      // user config replaces default
      data: e
      // dynamic data always last
    },
    yAxis: {
      type: "value",
      ...r.options?.yAxis
      // user config replaces default
    },
    ...r.options,
    // global options last if needed (optional)
    series: o
  };
  return /* @__PURE__ */ or.jsx(
    Jf,
    {
      echarts: cc,
      option: s,
      style: { width: "100%", height: "100%" }
    }
  );
}
ke([ZE, Sc, _c, bc, wc]);
function NI({ config: r, data: t }) {
  const { subType: e } = r, n = t.series || [];
  let i = {
    type: "pie",
    radius: "60%",
    ...r.options?.series?.[0],
    // user overrides default series config
    data: n.map((o) => ({ name: o.name, value: o.value }))
    // dynamic injected last
  };
  e === "donut" && (i.radius = r.options?.series?.[0]?.radius ?? ["40%", "70%"]), e === "rose" && (i = { ...i, roseType: "area" });
  const a = {
    tooltip: { trigger: "item", ...r.options?.tooltip },
    // default → user overrides
    legend: { top: "bottom", ...r.options?.legend },
    // default → user overrides
    ...r.options,
    // user overrides everything globally
    series: [i]
    // final always replaced
  };
  return /* @__PURE__ */ or.jsx(
    Jf,
    {
      echarts: cc,
      option: a,
      style: { width: "100%", height: "100%" }
    }
  );
}
function kI(r, t) {
  if (!Array.isArray(r) || r.length === 0)
    return { categories: [], series: [] };
  const e = r[0], n = Object.keys(e), i = t.labelKey || n.find((l) => typeof e[l] != "number") || n[0], a = t.valueKey || n.find((l) => typeof e[l] == "number") || n[1], o = t.seriesKey;
  if (["pie", "donut", "rose"].includes(t.type))
    return {
      categories: [],
      series: r.map((l) => ({
        name: l[i],
        value: Number(l[a]) || 0
        // TS Safe
      }))
    };
  if (!o)
    return {
      categories: r.map((l) => l[i]),
      series: [{
        name: t.seriesName || "Series",
        data: r.map((l) => Number(l[a]) || 0)
      }]
    };
  const s = [...new Set(r.map((l) => l[i]))], u = {};
  return r.forEach((l) => {
    const f = l[o];
    u[f] || (u[f] = new Array(s.length).fill(0)), u[f][s.indexOf(l[i])] = Number(l[a]) || 0;
  }), {
    categories: s,
    series: Object.keys(u).map((l) => ({ name: l, data: u[l] }))
  };
}
function BI(r) {
  return Array.isArray(r) ? r : Array.isArray(r?.data) ? r.data : r && typeof r == "object" ? Object.values(r) : [];
}
const FI = ({ graph_config: r, methods: t = {}, sqlOpsUrls: e }) => {
  if (!r?.config?.type) return null;
  const { config: n, source: i } = r, [a, o] = N_({ categories: [], series: [] });
  switch (k_(() => {
    (async () => {
      let u = {};
      if (i?.type === "method") {
        const h = t[i.method];
        u = h ? await Promise.resolve(h()) : {};
      } else if (i?.type === "api" && i.url)
        u = await fetch(i.url, {
          method: i.method || "GET",
          headers: i.headers || {}
        }).then((h) => h.json());
      else if (i?.type === "sql" && e)
        try {
          const h = await fetch(e.baseURL + e.registerQuery, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${e?.accessToken}`
            },
            body: JSON.stringify({
              query: i
            })
          }).then((v) => v.json());
          if (!h.queryid) {
            console.log("queryid not generated");
            return;
          }
          u = await fetch(e.baseURL + e.runQuery, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${e?.accessToken}`
            },
            body: JSON.stringify({
              queryid: h.queryid,
              filter: {}
            })
          }).then((v) => v.json());
        } catch (h) {
          console.error("API fetch failed:", h);
        }
      const l = BI(u), f = kI(l, n);
      o(f);
    })();
  }, [i?.method, i?.url, i?.type, n.type]), r?.config.type) {
    case "bar":
      return /* @__PURE__ */ or.jsx(OI, { config: n, data: a });
    case "line":
      return /* @__PURE__ */ or.jsx(RI, { config: n, data: a });
    case "pie":
      return /* @__PURE__ */ or.jsx(NI, { config: n, data: a });
    default:
      return /* @__PURE__ */ or.jsxs("div", { className: "text-red-500", children: [
        "Unknown chart type: ",
        n.type
      ] });
  }
};
function zI({ config: r, methods: t, sqlOpsConfig: e }) {
  const n = r.config?.height ?? 250;
  return /* @__PURE__ */ or.jsx("div", { style: { height: n, width: "100%" }, children: /* @__PURE__ */ or.jsx(FI, { graph_config: r, methods: t || {}, sqlOpsUrls: e }) });
}
export {
  zI as LogiksGraph,
  zI as default
};
