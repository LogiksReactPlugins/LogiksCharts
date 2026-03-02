import gy, { useState as z1, useEffect as F1 } from "react";
function H1(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
function G1(r) {
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
var mo = { exports: {} }, zi = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jc;
function W1() {
  if (Jc) return zi;
  Jc = 1;
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
  return zi.Fragment = t, zi.jsx = e, zi.jsxs = e, zi;
}
var Fi = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tv;
function U1() {
  return tv || (tv = 1, process.env.NODE_ENV !== "production" && (function() {
    function r(L) {
      if (L == null) return null;
      if (typeof L == "function")
        return L.$$typeof === M ? null : L.displayName || L.name || null;
      if (typeof L == "string") return L;
      switch (L) {
        case d:
          return "Fragment";
        case y:
          return "Profiler";
        case g:
          return "StrictMode";
        case w:
          return "Suspense";
        case b:
          return "SuspenseList";
        case A:
          return "Activity";
      }
      if (typeof L == "object")
        switch (typeof L.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), L.$$typeof) {
          case p:
            return "Portal";
          case _:
            return (L.displayName || "Context") + ".Provider";
          case m:
            return (L._context.displayName || "Context") + ".Consumer";
          case S:
            var k = L.render;
            return L = L.displayName, L || (L = k.displayName || k.name || "", L = L !== "" ? "ForwardRef(" + L + ")" : "ForwardRef"), L;
          case x:
            return k = L.displayName || null, k !== null ? k : r(L.type) || "Memo";
          case T:
            k = L._payload, L = L._init;
            try {
              return r(L(k));
            } catch {
            }
        }
      return null;
    }
    function t(L) {
      return "" + L;
    }
    function e(L) {
      try {
        t(L);
        var k = !1;
      } catch {
        k = !0;
      }
      if (k) {
        k = console;
        var G = k.error, X = typeof Symbol == "function" && Symbol.toStringTag && L[Symbol.toStringTag] || L.constructor.name || "Object";
        return G.call(
          k,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          X
        ), t(L);
      }
    }
    function n(L) {
      if (L === d) return "<>";
      if (typeof L == "object" && L !== null && L.$$typeof === T)
        return "<...>";
      try {
        var k = r(L);
        return k ? "<" + k + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var L = C.A;
      return L === null ? null : L.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function o(L) {
      if (E.call(L, "key")) {
        var k = Object.getOwnPropertyDescriptor(L, "key").get;
        if (k && k.isReactWarning) return !1;
      }
      return L.key !== void 0;
    }
    function s(L, k) {
      function G() {
        O || (O = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          k
        ));
      }
      G.isReactWarning = !0, Object.defineProperty(L, "key", {
        get: G,
        configurable: !0
      });
    }
    function l() {
      var L = r(this.type);
      return R[L] || (R[L] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), L = this.props.ref, L !== void 0 ? L : null;
    }
    function u(L, k, G, X, rt, nt, It, Ht) {
      return G = nt.ref, L = {
        $$typeof: c,
        type: L,
        key: k,
        props: nt,
        _owner: rt
      }, (G !== void 0 ? G : null) !== null ? Object.defineProperty(L, "ref", {
        enumerable: !1,
        get: l
      }) : Object.defineProperty(L, "ref", { enumerable: !1, value: null }), L._store = {}, Object.defineProperty(L._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(L, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(L, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: It
      }), Object.defineProperty(L, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Ht
      }), Object.freeze && (Object.freeze(L.props), Object.freeze(L)), L;
    }
    function f(L, k, G, X, rt, nt, It, Ht) {
      var ft = k.children;
      if (ft !== void 0)
        if (X)
          if (I(ft)) {
            for (X = 0; X < ft.length; X++)
              h(ft[X]);
            Object.freeze && Object.freeze(ft);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else h(ft);
      if (E.call(k, "key")) {
        ft = r(L);
        var bt = Object.keys(k).filter(function(q) {
          return q !== "key";
        });
        X = 0 < bt.length ? "{key: someKey, " + bt.join(": ..., ") + ": ...}" : "{key: someKey}", V[ft + X] || (bt = 0 < bt.length ? "{" + bt.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          X,
          ft,
          bt,
          ft
        ), V[ft + X] = !0);
      }
      if (ft = null, G !== void 0 && (e(G), ft = "" + G), o(k) && (e(k.key), ft = "" + k.key), "key" in k) {
        G = {};
        for (var yt in k)
          yt !== "key" && (G[yt] = k[yt]);
      } else G = k;
      return ft && s(
        G,
        typeof L == "function" ? L.displayName || L.name || "Unknown" : L
      ), u(
        L,
        ft,
        nt,
        rt,
        i(),
        G,
        It,
        Ht
      );
    }
    function h(L) {
      typeof L == "object" && L !== null && L.$$typeof === c && L._store && (L._store.validated = 1);
    }
    var v = gy, c = Symbol.for("react.transitional.element"), p = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), m = Symbol.for("react.consumer"), _ = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), A = Symbol.for("react.activity"), M = Symbol.for("react.client.reference"), C = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, E = Object.prototype.hasOwnProperty, I = Array.isArray, P = console.createTask ? console.createTask : function() {
      return null;
    };
    v = {
      react_stack_bottom_frame: function(L) {
        return L();
      }
    };
    var O, R = {}, F = v.react_stack_bottom_frame.bind(
      v,
      a
    )(), N = P(n(a)), V = {};
    Fi.Fragment = d, Fi.jsx = function(L, k, G, X, rt) {
      var nt = 1e4 > C.recentlyCreatedOwnerStacks++;
      return f(
        L,
        k,
        G,
        !1,
        X,
        rt,
        nt ? Error("react-stack-top-frame") : F,
        nt ? P(n(L)) : N
      );
    }, Fi.jsxs = function(L, k, G, X, rt) {
      var nt = 1e4 > C.recentlyCreatedOwnerStacks++;
      return f(
        L,
        k,
        G,
        !0,
        X,
        rt,
        nt ? Error("react-stack-top-frame") : F,
        nt ? P(n(L)) : N
      );
    };
  })()), Fi;
}
var ev;
function Y1() {
  return ev || (ev = 1, process.env.NODE_ENV === "production" ? mo.exports = W1() : mo.exports = U1()), mo.exports;
}
var Jt = Y1(), _o = {};
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
var xf = function(r, t) {
  return xf = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, n) {
    e.__proto__ = n;
  } || function(e, n) {
    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
  }, xf(r, t);
};
function z(r, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  xf(r, t);
  function e() {
    this.constructor = r;
  }
  r.prototype = t === null ? Object.create(t) : (e.prototype = t.prototype, new e());
}
var Tf = function() {
  return Tf = Object.assign || function(t) {
    for (var e, n = 1, i = arguments.length; n < i; n++) {
      e = arguments[n];
      for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
    }
    return t;
  }, Tf.apply(this, arguments);
};
function X1(r, t) {
  var e = {};
  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && t.indexOf(n) < 0 && (e[n] = r[n]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(r); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(r, n[i]) && (e[n[i]] = r[n[i]]);
  return e;
}
function $1(r, t, e, n) {
  var i = arguments.length, a = i < 3 ? t : n === null ? n = Object.getOwnPropertyDescriptor(t, e) : n, o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") a = Reflect.decorate(r, t, e, n);
  else for (var s = r.length - 1; s >= 0; s--) (o = r[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, e, a) : o(t, e)) || a);
  return i > 3 && a && Object.defineProperty(t, e, a), a;
}
function q1(r, t) {
  return function(e, n) {
    t(e, n, r);
  };
}
function Z1(r, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function") return Reflect.metadata(r, t);
}
function j1(r, t, e, n) {
  function i(a) {
    return a instanceof e ? a : new e(function(o) {
      o(a);
    });
  }
  return new (e || (e = Promise))(function(a, o) {
    function s(f) {
      try {
        u(n.next(f));
      } catch (h) {
        o(h);
      }
    }
    function l(f) {
      try {
        u(n.throw(f));
      } catch (h) {
        o(h);
      }
    }
    function u(f) {
      f.done ? a(f.value) : i(f.value).then(s, l);
    }
    u((n = n.apply(r, t || [])).next());
  });
}
function K1(r, t) {
  var e = { label: 0, sent: function() {
    if (a[0] & 1) throw a[1];
    return a[1];
  }, trys: [], ops: [] }, n, i, a, o;
  return o = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function s(u) {
    return function(f) {
      return l([u, f]);
    };
  }
  function l(u) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; e; ) try {
      if (n = 1, i && (a = u[0] & 2 ? i.return : u[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, u[1])).done) return a;
      switch (i = 0, a && (u = [u[0] & 2, a.value]), u[0]) {
        case 0:
        case 1:
          a = u;
          break;
        case 4:
          return e.label++, { value: u[1], done: !1 };
        case 5:
          e.label++, i = u[1], u = [0];
          continue;
        case 7:
          u = e.ops.pop(), e.trys.pop();
          continue;
        default:
          if (a = e.trys, !(a = a.length > 0 && a[a.length - 1]) && (u[0] === 6 || u[0] === 2)) {
            e = 0;
            continue;
          }
          if (u[0] === 3 && (!a || u[1] > a[0] && u[1] < a[3])) {
            e.label = u[1];
            break;
          }
          if (u[0] === 6 && e.label < a[1]) {
            e.label = a[1], a = u;
            break;
          }
          if (a && e.label < a[2]) {
            e.label = a[2], e.ops.push(u);
            break;
          }
          a[2] && e.ops.pop(), e.trys.pop();
          continue;
      }
      u = t.call(r, e);
    } catch (f) {
      u = [6, f], i = 0;
    } finally {
      n = a = 0;
    }
    if (u[0] & 5) throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}
var Oh = Object.create ? (function(r, t, e, n) {
  n === void 0 && (n = e), Object.defineProperty(r, n, { enumerable: !0, get: function() {
    return t[e];
  } });
}) : (function(r, t, e, n) {
  n === void 0 && (n = e), r[n] = t[e];
});
function Q1(r, t) {
  for (var e in r) e !== "default" && !Object.prototype.hasOwnProperty.call(t, e) && Oh(t, r, e);
}
function Cf(r) {
  var t = typeof Symbol == "function" && Symbol.iterator, e = t && r[t], n = 0;
  if (e) return e.call(r);
  if (r && typeof r.length == "number") return {
    next: function() {
      return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
    }
  };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function yy(r, t) {
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
function J1() {
  for (var r = [], t = 0; t < arguments.length; t++)
    r = r.concat(yy(arguments[t]));
  return r;
}
function tS() {
  for (var r = 0, t = 0, e = arguments.length; t < e; t++) r += arguments[t].length;
  for (var n = Array(r), i = 0, t = 0; t < e; t++)
    for (var a = arguments[t], o = 0, s = a.length; o < s; o++, i++)
      n[i] = a[o];
  return n;
}
function eS(r, t, e) {
  if (e || arguments.length === 2) for (var n = 0, i = t.length, a; n < i; n++)
    (a || !(n in t)) && (a || (a = Array.prototype.slice.call(t, 0, n)), a[n] = t[n]);
  return r.concat(a || t);
}
function ka(r) {
  return this instanceof ka ? (this.v = r, this) : new ka(r);
}
function rS(r, t, e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = e.apply(r, t || []), i, a = [];
  return i = {}, o("next"), o("throw"), o("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function o(v) {
    n[v] && (i[v] = function(c) {
      return new Promise(function(p, d) {
        a.push([v, c, p, d]) > 1 || s(v, c);
      });
    });
  }
  function s(v, c) {
    try {
      l(n[v](c));
    } catch (p) {
      h(a[0][3], p);
    }
  }
  function l(v) {
    v.value instanceof ka ? Promise.resolve(v.value.v).then(u, f) : h(a[0][2], v);
  }
  function u(v) {
    s("next", v);
  }
  function f(v) {
    s("throw", v);
  }
  function h(v, c) {
    v(c), a.shift(), a.length && s(a[0][0], a[0][1]);
  }
}
function nS(r) {
  var t, e;
  return t = {}, n("next"), n("throw", function(i) {
    throw i;
  }), n("return"), t[Symbol.iterator] = function() {
    return this;
  }, t;
  function n(i, a) {
    t[i] = r[i] ? function(o) {
      return (e = !e) ? { value: ka(r[i](o)), done: i === "return" } : a ? a(o) : o;
    } : a;
  }
}
function iS(r) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = r[Symbol.asyncIterator], e;
  return t ? t.call(r) : (r = typeof Cf == "function" ? Cf(r) : r[Symbol.iterator](), e = {}, n("next"), n("throw"), n("return"), e[Symbol.asyncIterator] = function() {
    return this;
  }, e);
  function n(a) {
    e[a] = r[a] && function(o) {
      return new Promise(function(s, l) {
        o = r[a](o), i(s, l, o.done, o.value);
      });
    };
  }
  function i(a, o, s, l) {
    Promise.resolve(l).then(function(u) {
      a({ value: u, done: s });
    }, o);
  }
}
function aS(r, t) {
  return Object.defineProperty ? Object.defineProperty(r, "raw", { value: t }) : r.raw = t, r;
}
var oS = Object.create ? (function(r, t) {
  Object.defineProperty(r, "default", { enumerable: !0, value: t });
}) : function(r, t) {
  r.default = t;
};
function sS(r) {
  if (r && r.__esModule) return r;
  var t = {};
  if (r != null) for (var e in r) e !== "default" && Object.prototype.hasOwnProperty.call(r, e) && Oh(t, r, e);
  return oS(t, r), t;
}
function lS(r) {
  return r && r.__esModule ? r : { default: r };
}
function uS(r, t, e, n) {
  if (e === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? r !== t || !n : !t.has(r)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return e === "m" ? n : e === "a" ? n.call(r) : n ? n.value : t.get(r);
}
function fS(r, t, e, n, i) {
  if (n === "m") throw new TypeError("Private method is not writable");
  if (n === "a" && !i) throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? r !== t || !i : !t.has(r)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return n === "a" ? i.call(r, e) : i ? i.value = e : t.set(r, e), e;
}
const hS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get __assign() {
    return Tf;
  },
  __asyncDelegator: nS,
  __asyncGenerator: rS,
  __asyncValues: iS,
  __await: ka,
  __awaiter: j1,
  __classPrivateFieldGet: uS,
  __classPrivateFieldSet: fS,
  __createBinding: Oh,
  __decorate: $1,
  __exportStar: Q1,
  __extends: z,
  __generator: K1,
  __importDefault: lS,
  __importStar: sS,
  __makeTemplateObject: aS,
  __metadata: Z1,
  __param: q1,
  __read: yy,
  __rest: X1,
  __spread: J1,
  __spreadArray: eS,
  __spreadArrays: tS,
  __values: Cf
}, Symbol.toStringTag, { value: "Module" })), my = /* @__PURE__ */ G1(hS);
var fr = {}, hr = {}, $l = {}, rv;
function cS() {
  return rv || (rv = 1, (function(r) {
    Object.defineProperty(r, "__esModule", {
      value: !0
    }), r.default = void 0;
    var t = 1, e = function() {
      return "".concat(t++);
    };
    r.default = e;
  })($l)), $l;
}
var Hi = {}, Gi = {}, ql = {}, nv;
function _y() {
  return nv || (nv = 1, (function(r) {
    Object.defineProperty(r, "__esModule", {
      value: !0
    }), r.default = void 0;
    var t = function(n) {
      var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 60, a = null;
      return function() {
        for (var o = this, s = arguments.length, l = new Array(s), u = 0; u < s; u++)
          l[u] = arguments[u];
        clearTimeout(a), a = setTimeout(function() {
          n.apply(o, l);
        }, i);
      };
    };
    r.default = t;
  })(ql)), ql;
}
var cr = {}, iv;
function Rh() {
  if (iv) return cr;
  iv = 1, Object.defineProperty(cr, "__esModule", {
    value: !0
  }), cr.SizeSensorId = cr.SensorTabIndex = cr.SensorClassName = void 0;
  var r = "size-sensor-id";
  cr.SizeSensorId = r;
  var t = "size-sensor-object";
  cr.SensorClassName = t;
  var e = "-1";
  return cr.SensorTabIndex = e, cr;
}
var av;
function vS() {
  if (av) return Gi;
  av = 1, Object.defineProperty(Gi, "__esModule", {
    value: !0
  }), Gi.createSensor = void 0;
  var r = e(_y()), t = Rh();
  function e(i) {
    return i && i.__esModule ? i : { default: i };
  }
  var n = function(a, o) {
    var s = void 0, l = [], u = function() {
      getComputedStyle(a).position === "static" && (a.style.position = "relative");
      var d = document.createElement("object");
      return d.onload = function() {
        d.contentDocument.defaultView.addEventListener("resize", f), f();
      }, d.style.display = "block", d.style.position = "absolute", d.style.top = "0", d.style.left = "0", d.style.height = "100%", d.style.width = "100%", d.style.overflow = "hidden", d.style.pointerEvents = "none", d.style.zIndex = "-1", d.style.opacity = "0", d.setAttribute("class", t.SensorClassName), d.setAttribute("tabindex", t.SensorTabIndex), d.type = "text/html", a.appendChild(d), d.data = "about:blank", d;
    }, f = (0, r.default)(function() {
      l.forEach(function(p) {
        p(a);
      });
    }), h = function(d) {
      s || (s = u()), l.indexOf(d) === -1 && l.push(d);
    }, v = function() {
      s && s.parentNode && (s.contentDocument && s.contentDocument.defaultView.removeEventListener("resize", f), s.parentNode.removeChild(s), a.removeAttribute(t.SizeSensorId), s = void 0, l = [], o && o());
    }, c = function(d) {
      var g = l.indexOf(d);
      g !== -1 && l.splice(g, 1), l.length === 0 && s && v();
    };
    return {
      element: a,
      bind: h,
      destroy: v,
      unbind: c
    };
  };
  return Gi.createSensor = n, Gi;
}
var Wi = {}, ov;
function pS() {
  if (ov) return Wi;
  ov = 1, Object.defineProperty(Wi, "__esModule", {
    value: !0
  }), Wi.createSensor = void 0;
  var r = Rh(), t = e(_y());
  function e(i) {
    return i && i.__esModule ? i : { default: i };
  }
  var n = function(a, o) {
    var s = void 0, l = [], u = (0, t.default)(function() {
      l.forEach(function(p) {
        p(a);
      });
    }), f = function() {
      var d = new ResizeObserver(u);
      return d.observe(a), u(), d;
    }, h = function(d) {
      s || (s = f()), l.indexOf(d) === -1 && l.push(d);
    }, v = function() {
      s.disconnect(), l = [], s = void 0, a.removeAttribute(r.SizeSensorId), o && o();
    }, c = function(d) {
      var g = l.indexOf(d);
      g !== -1 && l.splice(g, 1), l.length === 0 && s && v();
    };
    return {
      element: a,
      bind: h,
      destroy: v,
      unbind: c
    };
  };
  return Wi.createSensor = n, Wi;
}
var sv;
function dS() {
  if (sv) return Hi;
  sv = 1, Object.defineProperty(Hi, "__esModule", {
    value: !0
  }), Hi.createSensor = void 0;
  var r = vS(), t = pS(), e = typeof ResizeObserver < "u" ? t.createSensor : r.createSensor;
  return Hi.createSensor = e, Hi;
}
var lv;
function gS() {
  if (lv) return hr;
  lv = 1, Object.defineProperty(hr, "__esModule", {
    value: !0
  }), hr.removeSensor = hr.getSensor = hr.Sensors = void 0;
  var r = n(cS()), t = dS(), e = Rh();
  function n(l) {
    return l && l.__esModule ? l : { default: l };
  }
  var i = {};
  hr.Sensors = i;
  function a(l) {
    l && i[l] && delete i[l];
  }
  var o = function(u) {
    var f = u.getAttribute(e.SizeSensorId);
    if (f && i[f])
      return i[f];
    var h = (0, r.default)();
    u.setAttribute(e.SizeSensorId, h);
    var v = (0, t.createSensor)(u, function() {
      return a(h);
    });
    return i[h] = v, v;
  };
  hr.getSensor = o;
  var s = function(u) {
    var f = u.element.getAttribute(e.SizeSensorId);
    u.destroy(), a(f);
  };
  return hr.removeSensor = s, hr;
}
var uv;
function yS() {
  if (uv) return fr;
  uv = 1, Object.defineProperty(fr, "__esModule", {
    value: !0
  }), fr.ver = fr.clear = fr.bind = void 0;
  var r = gS(), t = function(a, o) {
    var s = (0, r.getSensor)(a);
    return s.bind(o), function() {
      s.unbind(o);
    };
  };
  fr.bind = t;
  var e = function(a) {
    var o = (0, r.getSensor)(a);
    (0, r.removeSensor)(o);
  };
  fr.clear = e;
  var n = "1.0.2";
  return fr.ver = n, fr;
}
var Ui = {}, fv;
function mS() {
  if (fv) return Ui;
  fv = 1, Object.defineProperty(Ui, "__esModule", { value: !0 }), Ui.pick = void 0;
  function r(t, e) {
    var n = {};
    return e.forEach(function(i) {
      n[i] = t[i];
    }), n;
  }
  return Ui.pick = r, Ui;
}
var Yi = {}, hv;
function _S() {
  if (hv) return Yi;
  hv = 1, Object.defineProperty(Yi, "__esModule", { value: !0 }), Yi.isFunction = void 0;
  function r(t) {
    return typeof t == "function";
  }
  return Yi.isFunction = r, Yi;
}
var Xi = {}, cv;
function SS() {
  if (cv) return Xi;
  cv = 1, Object.defineProperty(Xi, "__esModule", { value: !0 }), Xi.isString = void 0;
  function r(t) {
    return typeof t == "string";
  }
  return Xi.isString = r, Xi;
}
var $i = {}, Zl, vv;
function bS() {
  return vv || (vv = 1, Zl = function r(t, e) {
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
  }), Zl;
}
var pv;
function wS() {
  if (pv) return $i;
  pv = 1, Object.defineProperty($i, "__esModule", { value: !0 }), $i.isEqual = void 0;
  var r = my, t = (0, r.__importDefault)(bS());
  return $i.isEqual = t.default, $i;
}
var dv;
function xS() {
  if (dv) return _o;
  dv = 1, Object.defineProperty(_o, "__esModule", { value: !0 });
  var r = my, t = (0, r.__importStar)(gy), e = yS(), n = mS(), i = _S(), a = SS(), o = wS(), s = (
    /** @class */
    (function(l) {
      (0, r.__extends)(u, l);
      function u(f) {
        var h = l.call(this, f) || this;
        return h.echarts = f.echarts, h.ele = null, h.isInitialResize = !0, h;
      }
      return u.prototype.componentDidMount = function() {
        this.renderNewEcharts();
      }, u.prototype.componentDidUpdate = function(f) {
        var h = this.props.shouldSetOption;
        if (!((0, i.isFunction)(h) && !h(f, this.props))) {
          if (!(0, o.isEqual)(f.theme, this.props.theme) || !(0, o.isEqual)(f.opts, this.props.opts) || !(0, o.isEqual)(f.onEvents, this.props.onEvents)) {
            this.dispose(), this.renderNewEcharts();
            return;
          }
          var v = ["option", "notMerge", "lazyUpdate", "showLoading", "loadingOption"];
          (0, o.isEqual)((0, n.pick)(this.props, v), (0, n.pick)(f, v)) || this.updateEChartsOption(), (!(0, o.isEqual)(f.style, this.props.style) || !(0, o.isEqual)(f.className, this.props.className)) && this.resize();
        }
      }, u.prototype.componentWillUnmount = function() {
        this.dispose();
      }, u.prototype.getEchartsInstance = function() {
        return this.echarts.getInstanceByDom(this.ele) || this.echarts.init(this.ele, this.props.theme, this.props.opts);
      }, u.prototype.dispose = function() {
        if (this.ele) {
          try {
            (0, e.clear)(this.ele);
          } catch (f) {
            console.warn(f);
          }
          this.echarts.dispose(this.ele);
        }
      }, u.prototype.renderNewEcharts = function() {
        var f = this, h = this.props, v = h.onEvents, c = h.onChartReady, p = this.updateEChartsOption();
        this.bindEvents(p, v || {}), (0, i.isFunction)(c) && c(p), this.ele && (0, e.bind)(this.ele, function() {
          f.resize();
        });
      }, u.prototype.bindEvents = function(f, h) {
        function v(p, d) {
          (0, a.isString)(p) && (0, i.isFunction)(d) && f.on(p, function(g) {
            d(g, f);
          });
        }
        for (var c in h)
          Object.prototype.hasOwnProperty.call(h, c) && v(c, h[c]);
      }, u.prototype.updateEChartsOption = function() {
        var f = this.props, h = f.option, v = f.notMerge, c = v === void 0 ? !1 : v, p = f.lazyUpdate, d = p === void 0 ? !1 : p, g = f.showLoading, y = f.loadingOption, m = y === void 0 ? null : y, _ = this.getEchartsInstance();
        return _.setOption(h, c, d), g ? _.showLoading(m) : _.hideLoading(), _;
      }, u.prototype.resize = function() {
        var f = this.getEchartsInstance();
        if (!this.isInitialResize)
          try {
            f.resize();
          } catch (h) {
            console.warn(h);
          }
        this.isInitialResize = !1;
      }, u.prototype.render = function() {
        var f = this, h = this.props, v = h.style, c = h.className, p = c === void 0 ? "" : c, d = (0, r.__assign)({ height: 300 }, v);
        return t.default.createElement("div", { ref: function(g) {
          f.ele = g;
        }, style: d, className: "echarts-for-react " + p });
      }, u;
    })(t.PureComponent)
  );
  return _o.default = s, _o;
}
var TS = xS();
const Di = /* @__PURE__ */ H1(TS);
var CS = /* @__PURE__ */ (function() {
  function r() {
    this.firefox = !1, this.ie = !1, this.edge = !1, this.newEdge = !1, this.weChat = !1;
  }
  return r;
})(), DS = /* @__PURE__ */ (function() {
  function r() {
    this.browser = new CS(), this.node = !1, this.wxa = !1, this.worker = !1, this.svgSupported = !1, this.touchEventsSupported = !1, this.pointerEventsSupported = !1, this.domSupported = !1, this.transformSupported = !1, this.transform3dSupported = !1, this.hasGlobalWindow = typeof window < "u";
  }
  return r;
})(), Z = new DS();
typeof wx == "object" && typeof wx.getSystemInfoSync == "function" ? (Z.wxa = !0, Z.touchEventsSupported = !0) : typeof document > "u" && typeof self < "u" ? Z.worker = !0 : !Z.hasGlobalWindow || "Deno" in window ? (Z.node = !0, Z.svgSupported = !0) : MS(navigator.userAgent, Z);
function MS(r, t) {
  var e = t.browser, n = r.match(/Firefox\/([\d.]+)/), i = r.match(/MSIE\s([\d.]+)/) || r.match(/Trident\/.+?rv:(([\d.]+))/), a = r.match(/Edge?\/([\d.]+)/), o = /micromessenger/i.test(r);
  n && (e.firefox = !0, e.version = n[1]), i && (e.ie = !0, e.version = i[1]), a && (e.edge = !0, e.version = a[1], e.newEdge = +a[1].split(".")[0] > 18), o && (e.weChat = !0), t.svgSupported = typeof SVGRect < "u", t.touchEventsSupported = "ontouchstart" in window && !e.ie && !e.edge, t.pointerEventsSupported = "onpointerdown" in window && (e.edge || e.ie && +e.version >= 11), t.domSupported = typeof document < "u";
  var s = document.documentElement.style;
  t.transform3dSupported = (e.ie && "transition" in s || e.edge || "WebKitCSSMatrix" in window && "m11" in new WebKitCSSMatrix() || "MozPerspective" in s) && !("OTransition" in s), t.transformSupported = t.transform3dSupported || e.ie && +e.version >= 9;
}
var Nh = 12, AS = "sans-serif", On = Nh + "px " + AS, ES = 20, IS = 100, LS = "007LLmW'55;N0500LLLLLLLLLL00NNNLzWW\\\\WQb\\0FWLg\\bWb\\WQ\\WrWWQ000CL5LLFLL0LL**F*gLLLL5F0LF\\FFF5.5N";
function PS(r) {
  var t = {};
  if (typeof JSON > "u")
    return t;
  for (var e = 0; e < r.length; e++) {
    var n = String.fromCharCode(e + 32), i = (r.charCodeAt(e) - ES) / IS;
    t[n] = i;
  }
  return t;
}
var OS = PS(LS), Ge = {
  createCanvas: function() {
    return typeof document < "u" && document.createElement("canvas");
  },
  measureText: /* @__PURE__ */ (function() {
    var r, t;
    return function(e, n) {
      if (!r) {
        var i = Ge.createCanvas();
        r = i && i.getContext("2d");
      }
      if (r)
        return t !== n && (t = r.font = n || On), r.measureText(e);
      e = e || "", n = n || On;
      var a = /((?:\d+)?\.?\d*)px/.exec(n), o = a && +a[1] || Nh, s = 0;
      if (n.indexOf("mono") >= 0)
        s = o * e.length;
      else
        for (var l = 0; l < e.length; l++) {
          var u = OS[e[l]];
          s += u == null ? o : u * o;
        }
      return { width: s };
    };
  })(),
  loadImage: function(r, t, e) {
    var n = new Image();
    return n.onload = t, n.onerror = e, n.src = r, n;
  }
};
function Sy(r) {
  for (var t in Ge)
    r[t] && (Ge[t] = r[t]);
}
var by = nr([
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
}, {}), wy = nr([
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
}, {}), Mi = Object.prototype.toString, ol = Array.prototype, RS = ol.forEach, NS = ol.filter, kh = ol.slice, kS = ol.map, gv = (function() {
}).constructor, So = gv ? gv.prototype : null, Vh = "__proto__", VS = 2311;
function Bh() {
  return VS++;
}
function Ur() {
  for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t];
  typeof console < "u" && console.error.apply(console, r);
}
function j(r) {
  if (r == null || typeof r != "object")
    return r;
  var t = r, e = Mi.call(r);
  if (e === "[object Array]") {
    if (!pi(r)) {
      t = [];
      for (var n = 0, i = r.length; n < i; n++)
        t[n] = j(r[n]);
    }
  } else if (wy[e]) {
    if (!pi(r)) {
      var a = r.constructor;
      if (a.from)
        t = a.from(r);
      else {
        t = new a(r.length);
        for (var n = 0, i = r.length; n < i; n++)
          t[n] = r[n];
      }
    }
  } else if (!by[e] && !pi(r) && !Rn(r)) {
    t = {};
    for (var o in r)
      r.hasOwnProperty(o) && o !== Vh && (t[o] = j(r[o]));
  }
  return t;
}
function st(r, t, e) {
  if (!W(t) || !W(r))
    return e ? j(t) : r;
  for (var n in t)
    if (t.hasOwnProperty(n) && n !== Vh) {
      var i = r[n], a = t[n];
      W(a) && W(i) && !H(a) && !H(i) && !Rn(a) && !Rn(i) && !Df(a) && !Df(i) && !pi(a) && !pi(i) ? st(i, a, e) : (e || !(n in r)) && (r[n] = j(t[n]));
    }
  return r;
}
function BS(r, t) {
  for (var e = r[0], n = 1, i = r.length; n < i; n++)
    e = st(e, r[n], t);
  return e;
}
function B(r, t) {
  if (Object.assign)
    Object.assign(r, t);
  else
    for (var e in t)
      t.hasOwnProperty(e) && e !== Vh && (r[e] = t[e]);
  return r;
}
function ut(r, t, e) {
  for (var n = gt(t), i = 0, a = n.length; i < a; i++) {
    var o = n[i];
    (e ? t[o] != null : r[o] == null) && (r[o] = t[o]);
  }
  return r;
}
var zS = Ge.createCanvas;
function vt(r, t) {
  if (r) {
    if (r.indexOf)
      return r.indexOf(t);
    for (var e = 0, n = r.length; e < n; e++)
      if (r[e] === t)
        return e;
  }
  return -1;
}
function zh(r, t) {
  var e = r.prototype;
  function n() {
  }
  n.prototype = t.prototype, r.prototype = new n();
  for (var i in e)
    e.hasOwnProperty(i) && (r.prototype[i] = e[i]);
  r.prototype.constructor = r, r.superClass = t;
}
function Ie(r, t, e) {
  if (r = "prototype" in r ? r.prototype : r, t = "prototype" in t ? t.prototype : t, Object.getOwnPropertyNames)
    for (var n = Object.getOwnPropertyNames(t), i = 0; i < n.length; i++) {
      var a = n[i];
      a !== "constructor" && (e ? t[a] != null : r[a] == null) && (r[a] = t[a]);
    }
  else
    ut(r, t, e);
}
function re(r) {
  return !r || typeof r == "string" ? !1 : typeof r.length == "number";
}
function D(r, t, e) {
  if (r && t)
    if (r.forEach && r.forEach === RS)
      r.forEach(t, e);
    else if (r.length === +r.length)
      for (var n = 0, i = r.length; n < i; n++)
        t.call(e, r[n], n, r);
    else
      for (var a in r)
        r.hasOwnProperty(a) && t.call(e, r[a], a, r);
}
function Y(r, t, e) {
  if (!r)
    return [];
  if (!t)
    return sl(r);
  if (r.map && r.map === kS)
    return r.map(t, e);
  for (var n = [], i = 0, a = r.length; i < a; i++)
    n.push(t.call(e, r[i], i, r));
  return n;
}
function nr(r, t, e, n) {
  if (r && t) {
    for (var i = 0, a = r.length; i < a; i++)
      e = t.call(n, e, r[i], i, r);
    return e;
  }
}
function At(r, t, e) {
  if (!r)
    return [];
  if (!t)
    return sl(r);
  if (r.filter && r.filter === NS)
    return r.filter(t, e);
  for (var n = [], i = 0, a = r.length; i < a; i++)
    t.call(e, r[i], i, r) && n.push(r[i]);
  return n;
}
function FS(r, t, e) {
  if (r && t) {
    for (var n = 0, i = r.length; n < i; n++)
      if (t.call(e, r[n], n, r))
        return r[n];
  }
}
function gt(r) {
  if (!r)
    return [];
  if (Object.keys)
    return Object.keys(r);
  var t = [];
  for (var e in r)
    r.hasOwnProperty(e) && t.push(e);
  return t;
}
function HS(r, t) {
  for (var e = [], n = 2; n < arguments.length; n++)
    e[n - 2] = arguments[n];
  return function() {
    return r.apply(t, e.concat(kh.call(arguments)));
  };
}
var J = So && $(So.bind) ? So.call.bind(So.bind) : HS;
function wt(r) {
  for (var t = [], e = 1; e < arguments.length; e++)
    t[e - 1] = arguments[e];
  return function() {
    return r.apply(this, t.concat(kh.call(arguments)));
  };
}
function H(r) {
  return Array.isArray ? Array.isArray(r) : Mi.call(r) === "[object Array]";
}
function $(r) {
  return typeof r == "function";
}
function U(r) {
  return typeof r == "string";
}
function Va(r) {
  return Mi.call(r) === "[object String]";
}
function dt(r) {
  return typeof r == "number";
}
function W(r) {
  var t = typeof r;
  return t === "function" || !!r && t === "object";
}
function Df(r) {
  return !!by[Mi.call(r)];
}
function qt(r) {
  return !!wy[Mi.call(r)];
}
function Rn(r) {
  return typeof r == "object" && typeof r.nodeType == "number" && typeof r.ownerDocument == "object";
}
function no(r) {
  return r.colorStops != null;
}
function xy(r) {
  return r.image != null;
}
function Ty(r) {
  return Mi.call(r) === "[object RegExp]";
}
function bi(r) {
  return r !== r;
}
function wr() {
  for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t];
  for (var e = 0, n = r.length; e < n; e++)
    if (r[e] != null)
      return r[e];
}
function Q(r, t) {
  return r ?? t;
}
function Yr(r, t, e) {
  return r ?? t ?? e;
}
function sl(r) {
  for (var t = [], e = 1; e < arguments.length; e++)
    t[e - 1] = arguments[e];
  return kh.apply(r, t);
}
function Fh(r) {
  if (typeof r == "number")
    return [r, r, r, r];
  var t = r.length;
  return t === 2 ? [r[0], r[1], r[0], r[1]] : t === 3 ? [r[0], r[1], r[2], r[1]] : r;
}
function tt(r, t) {
  if (!r)
    throw new Error(t);
}
function Ve(r) {
  return r == null ? null : typeof r.trim == "function" ? r.trim() : r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
}
var Cy = "__ec_primitive__";
function xs(r) {
  r[Cy] = !0;
}
function pi(r) {
  return r[Cy];
}
var GS = (function() {
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
    return gt(this.data);
  }, r.prototype.forEach = function(t) {
    var e = this.data;
    for (var n in e)
      e.hasOwnProperty(n) && t(e[n], n);
  }, r;
})(), Dy = typeof Map == "function";
function WS() {
  return Dy ? /* @__PURE__ */ new Map() : new GS();
}
var My = (function() {
  function r(t) {
    var e = H(t);
    this.data = WS();
    var n = this;
    t instanceof r ? t.each(i) : t && D(t, i);
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
    return Dy ? Array.from(t) : t;
  }, r.prototype.removeKey = function(t) {
    this.data.delete(t);
  }, r;
})();
function et(r) {
  return new My(r);
}
function Ay(r, t) {
  for (var e = new r.constructor(r.length + t.length), n = 0; n < r.length; n++)
    e[n] = r[n];
  for (var i = r.length, n = 0; n < t.length; n++)
    e[n + i] = t[n];
  return e;
}
function io(r, t) {
  var e;
  if (Object.create)
    e = Object.create(r);
  else {
    var n = function() {
    };
    n.prototype = r, e = new n();
  }
  return t && B(e, t), e;
}
function Hh(r) {
  var t = r.style;
  t.webkitUserSelect = "none", t.userSelect = "none", t.webkitTapHighlightColor = "rgba(0,0,0,0)", t["-webkit-touch-callout"] = "none";
}
function jr(r, t) {
  return r.hasOwnProperty(t);
}
function Xt() {
}
var Ey = 180 / Math.PI;
const US = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  HashMap: My,
  RADIAN_TO_DEGREE: Ey,
  assert: tt,
  bind: J,
  clone: j,
  concatArray: Ay,
  createCanvas: zS,
  createHashMap: et,
  createObject: io,
  curry: wt,
  defaults: ut,
  disableUserSelect: Hh,
  each: D,
  eqNaN: bi,
  extend: B,
  filter: At,
  find: FS,
  guid: Bh,
  hasOwn: jr,
  indexOf: vt,
  inherits: zh,
  isArray: H,
  isArrayLike: re,
  isBuiltInObject: Df,
  isDom: Rn,
  isFunction: $,
  isGradientObject: no,
  isImagePatternObject: xy,
  isNumber: dt,
  isObject: W,
  isPrimitive: pi,
  isRegExp: Ty,
  isString: U,
  isStringSafe: Va,
  isTypedArray: qt,
  keys: gt,
  logError: Ur,
  map: Y,
  merge: st,
  mergeAll: BS,
  mixin: Ie,
  noop: Xt,
  normalizeCssArray: Fh,
  reduce: nr,
  retrieve: wr,
  retrieve2: Q,
  retrieve3: Yr,
  setAsPrimitive: xs,
  slice: sl,
  trim: Ve
}, Symbol.toStringTag, { value: "Module" }));
function Fn(r, t) {
  return r == null && (r = 0), t == null && (t = 0), [r, t];
}
function YS(r, t) {
  return r[0] = t[0], r[1] = t[1], r;
}
function Iy(r) {
  return [r[0], r[1]];
}
function XS(r, t, e) {
  return r[0] = t, r[1] = e, r;
}
function Mf(r, t, e) {
  return r[0] = t[0] + e[0], r[1] = t[1] + e[1], r;
}
function $S(r, t, e, n) {
  return r[0] = t[0] + e[0] * n, r[1] = t[1] + e[1] * n, r;
}
function Ly(r, t, e) {
  return r[0] = t[0] - e[0], r[1] = t[1] - e[1], r;
}
function Gh(r) {
  return Math.sqrt(Wh(r));
}
var qS = Gh;
function Wh(r) {
  return r[0] * r[0] + r[1] * r[1];
}
var ZS = Wh;
function jS(r, t, e) {
  return r[0] = t[0] * e[0], r[1] = t[1] * e[1], r;
}
function KS(r, t, e) {
  return r[0] = t[0] / e[0], r[1] = t[1] / e[1], r;
}
function QS(r, t) {
  return r[0] * t[0] + r[1] * t[1];
}
function ss(r, t, e) {
  return r[0] = t[0] * e, r[1] = t[1] * e, r;
}
function Py(r, t) {
  var e = Gh(t);
  return e === 0 ? (r[0] = 0, r[1] = 0) : (r[0] = t[0] / e, r[1] = t[1] / e), r;
}
function Ts(r, t) {
  return Math.sqrt((r[0] - t[0]) * (r[0] - t[0]) + (r[1] - t[1]) * (r[1] - t[1]));
}
var Cs = Ts;
function Oy(r, t) {
  return (r[0] - t[0]) * (r[0] - t[0]) + (r[1] - t[1]) * (r[1] - t[1]);
}
var Mn = Oy;
function JS(r, t) {
  return r[0] = -t[0], r[1] = -t[1], r;
}
function ls(r, t, e, n) {
  return r[0] = t[0] + n * (e[0] - t[0]), r[1] = t[1] + n * (e[1] - t[1]), r;
}
function ee(r, t, e) {
  var n = t[0], i = t[1];
  return r[0] = e[0] * n + e[2] * i + e[4], r[1] = e[1] * n + e[3] * i + e[5], r;
}
function Vr(r, t, e) {
  return r[0] = Math.min(t[0], e[0]), r[1] = Math.min(t[1], e[1]), r;
}
function Br(r, t, e) {
  return r[0] = Math.max(t[0], e[0]), r[1] = Math.max(t[1], e[1]), r;
}
const tb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  add: Mf,
  applyTransform: ee,
  clone: Iy,
  copy: YS,
  create: Fn,
  dist: Cs,
  distSquare: Mn,
  distance: Ts,
  distanceSquare: Oy,
  div: KS,
  dot: QS,
  len: Gh,
  lenSquare: Wh,
  length: qS,
  lengthSquare: ZS,
  lerp: ls,
  max: Br,
  min: Vr,
  mul: jS,
  negate: JS,
  normalize: Py,
  scale: ss,
  scaleAndAdd: $S,
  set: XS,
  sub: Ly
}, Symbol.toStringTag, { value: "Module" }));
var Yn = /* @__PURE__ */ (function() {
  function r(t, e) {
    this.target = t, this.topTarget = e && e.topTarget;
  }
  return r;
})(), eb = (function() {
  function r(t) {
    this.handler = t, t.on("mousedown", this._dragStart, this), t.on("mousemove", this._drag, this), t.on("mouseup", this._dragEnd, this);
  }
  return r.prototype._dragStart = function(t) {
    for (var e = t.target; e && !e.draggable; )
      e = e.parent || e.__hostTarget;
    e && (this._draggingTarget = e, e.dragging = !0, this._x = t.offsetX, this._y = t.offsetY, this.handler.dispatchToElement(new Yn(e, t), "dragstart", t.event));
  }, r.prototype._drag = function(t) {
    var e = this._draggingTarget;
    if (e) {
      var n = t.offsetX, i = t.offsetY, a = n - this._x, o = i - this._y;
      this._x = n, this._y = i, e.drift(a, o, t), this.handler.dispatchToElement(new Yn(e, t), "drag", t.event);
      var s = this.handler.findHover(n, i, e).target, l = this._dropTarget;
      this._dropTarget = s, e !== s && (l && s !== l && this.handler.dispatchToElement(new Yn(l, t), "dragleave", t.event), s && s !== l && this.handler.dispatchToElement(new Yn(s, t), "dragenter", t.event));
    }
  }, r.prototype._dragEnd = function(t) {
    var e = this._draggingTarget;
    e && (e.dragging = !1), this.handler.dispatchToElement(new Yn(e, t), "dragend", t.event), this._dropTarget && this.handler.dispatchToElement(new Yn(this._dropTarget, t), "drop", t.event), this._draggingTarget = null, this._dropTarget = null;
  }, r;
})(), or = (function() {
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
    var l = {
      h: n,
      query: e,
      ctx: i || this,
      callAtLast: n.zrEventfulCallAtLast
    }, u = a[t].length - 1, f = a[t][u];
    return f && f.callAtLast ? a[t].splice(u, 0, l) : a[t].push(l), this;
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
      for (var o = e.length, s = i.length, l = 0; l < s; l++) {
        var u = i[l];
        if (!(a && a.filter && u.query != null && !a.filter(t, u.query)))
          switch (o) {
            case 0:
              u.h.call(u.ctx);
              break;
            case 1:
              u.h.call(u.ctx, e[0]);
              break;
            case 2:
              u.h.call(u.ctx, e[0], e[1]);
              break;
            default:
              u.h.apply(u.ctx, e);
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
      for (var o = e.length, s = e[o - 1], l = i.length, u = 0; u < l; u++) {
        var f = i[u];
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
})(), rb = Math.log(2);
function Af(r, t, e, n, i, a) {
  var o = n + "-" + i, s = r.length;
  if (a.hasOwnProperty(o))
    return a[o];
  if (t === 1) {
    var l = Math.round(Math.log((1 << s) - 1 & ~i) / rb);
    return r[e][l];
  }
  for (var u = n | 1 << e, f = e + 1; n & 1 << f; )
    f++;
  for (var h = 0, v = 0, c = 0; v < s; v++) {
    var p = 1 << v;
    p & i || (h += (c % 2 ? -1 : 1) * r[e][v] * Af(r, t - 1, f, u, i | p, a), c++);
  }
  return a[o] = h, h;
}
function yv(r, t) {
  var e = [
    [r[0], r[1], 1, 0, 0, 0, -t[0] * r[0], -t[0] * r[1]],
    [0, 0, 0, r[0], r[1], 1, -t[1] * r[0], -t[1] * r[1]],
    [r[2], r[3], 1, 0, 0, 0, -t[2] * r[2], -t[2] * r[3]],
    [0, 0, 0, r[2], r[3], 1, -t[3] * r[2], -t[3] * r[3]],
    [r[4], r[5], 1, 0, 0, 0, -t[4] * r[4], -t[4] * r[5]],
    [0, 0, 0, r[4], r[5], 1, -t[5] * r[4], -t[5] * r[5]],
    [r[6], r[7], 1, 0, 0, 0, -t[6] * r[6], -t[6] * r[7]],
    [0, 0, 0, r[6], r[7], 1, -t[7] * r[6], -t[7] * r[7]]
  ], n = {}, i = Af(e, 8, 0, 0, 0, n);
  if (i !== 0) {
    for (var a = [], o = 0; o < 8; o++)
      for (var s = 0; s < 8; s++)
        a[s] == null && (a[s] = 0), a[s] += ((o + s) % 2 ? -1 : 1) * Af(e, 7, o === 0 ? 1 : 0, 1 << o, 1 << s, n) / i * t[o];
    return function(l, u, f) {
      var h = u * a[6] + f * a[7] + 1;
      l[0] = (u * a[0] + f * a[1] + a[2]) / h, l[1] = (u * a[3] + f * a[4] + a[5]) / h;
    };
  }
}
var mv = "___zrEVENTSAVED", jl = [];
function nb(r, t, e, n, i) {
  return Ef(jl, t, n, i, !0) && Ef(r, e, jl[0], jl[1]);
}
function Ef(r, t, e, n, i) {
  if (t.getBoundingClientRect && Z.domSupported && !Ry(t)) {
    var a = t[mv] || (t[mv] = {}), o = ib(t, a), s = ab(o, a, i);
    if (s)
      return s(r, e, n), !0;
  }
  return !1;
}
function ib(r, t) {
  var e = t.markers;
  if (e)
    return e;
  e = t.markers = [];
  for (var n = ["left", "right"], i = ["top", "bottom"], a = 0; a < 4; a++) {
    var o = document.createElement("div"), s = o.style, l = a % 2, u = (a >> 1) % 2;
    s.cssText = [
      "position: absolute",
      "visibility: hidden",
      "padding: 0",
      "margin: 0",
      "border-width: 0",
      "user-select: none",
      "width:0",
      "height:0",
      n[l] + ":0",
      i[u] + ":0",
      n[1 - l] + ":auto",
      i[1 - u] + ":auto",
      ""
    ].join("!important;"), r.appendChild(o), e.push(o);
  }
  return e;
}
function ab(r, t, e) {
  for (var n = e ? "invTrans" : "trans", i = t[n], a = t.srcCoords, o = [], s = [], l = !0, u = 0; u < 4; u++) {
    var f = r[u].getBoundingClientRect(), h = 2 * u, v = f.left, c = f.top;
    o.push(v, c), l = l && a && v === a[h] && c === a[h + 1], s.push(r[u].offsetLeft, r[u].offsetTop);
  }
  return l && i ? i : (t.srcCoords = o, t[n] = e ? yv(s, o) : yv(o, s));
}
function Ry(r) {
  return r.nodeName.toUpperCase() === "CANVAS";
}
var ob = /([&<>"'])/g, sb = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
function te(r) {
  return r == null ? "" : (r + "").replace(ob, function(t, e) {
    return sb[e];
  });
}
var lb = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Kl = [], ub = Z.browser.firefox && +Z.browser.version.split(".")[0] < 39;
function If(r, t, e, n) {
  return e = e || {}, n ? _v(r, t, e) : ub && t.layerX != null && t.layerX !== t.offsetX ? (e.zrX = t.layerX, e.zrY = t.layerY) : t.offsetX != null ? (e.zrX = t.offsetX, e.zrY = t.offsetY) : _v(r, t, e), e;
}
function _v(r, t, e) {
  if (Z.domSupported && r.getBoundingClientRect) {
    var n = t.clientX, i = t.clientY;
    if (Ry(r)) {
      var a = r.getBoundingClientRect();
      e.zrX = n - a.left, e.zrY = i - a.top;
      return;
    } else if (Ef(Kl, r, n, i)) {
      e.zrX = Kl[0], e.zrY = Kl[1];
      return;
    }
  }
  e.zrX = e.zrY = 0;
}
function Uh(r) {
  return r || window.event;
}
function be(r, t, e) {
  if (t = Uh(t), t.zrX != null)
    return t;
  var n = t.type, i = n && n.indexOf("touch") >= 0;
  if (i) {
    var o = n !== "touchend" ? t.targetTouches[0] : t.changedTouches[0];
    o && If(r, o, t, e);
  } else {
    If(r, t, t, e);
    var a = fb(t);
    t.zrDelta = a ? a / 120 : -(t.detail || 0) / 3;
  }
  var s = t.button;
  return t.which == null && s !== void 0 && lb.test(t.type) && (t.which = s & 1 ? 1 : s & 2 ? 3 : s & 4 ? 2 : 0), t;
}
function fb(r) {
  var t = r.wheelDelta;
  if (t)
    return t;
  var e = r.deltaX, n = r.deltaY;
  if (e == null || n == null)
    return t;
  var i = Math.abs(n !== 0 ? n : e), a = n > 0 ? -1 : n < 0 ? 1 : e > 0 ? -1 : 1;
  return 3 * i * a;
}
function hb(r, t, e, n) {
  r.addEventListener(t, e, n);
}
function cb(r, t, e, n) {
  r.removeEventListener(t, e, n);
}
var Ba = function(r) {
  r.preventDefault(), r.stopPropagation(), r.cancelBubble = !0;
}, vb = (function() {
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
        var l = i[o], u = If(n, l, {});
        a.points.push([u.zrX, u.zrY]), a.touches.push(l);
      }
      this._track.push(a);
    }
  }, r.prototype._recognize = function(t) {
    for (var e in Ql)
      if (Ql.hasOwnProperty(e)) {
        var n = Ql[e](this._track, t);
        if (n)
          return n;
      }
  }, r;
})();
function Sv(r) {
  var t = r[1][0] - r[0][0], e = r[1][1] - r[0][1];
  return Math.sqrt(t * t + e * e);
}
function pb(r) {
  return [
    (r[0][0] + r[1][0]) / 2,
    (r[0][1] + r[1][1]) / 2
  ];
}
var Ql = {
  pinch: function(r, t) {
    var e = r.length;
    if (e) {
      var n = (r[e - 1] || {}).points, i = (r[e - 2] || {}).points || n;
      if (i && i.length > 1 && n && n.length > 1) {
        var a = Sv(n) / Sv(i);
        !isFinite(a) && (a = 1), t.pinchScale = a;
        var o = pb(n);
        return t.pinchX = o[0], t.pinchY = o[1], {
          type: "pinch",
          target: r[0].target,
          event: t
        };
      }
    }
  }
};
function Xr() {
  return [1, 0, 0, 1, 0, 0];
}
function ao(r) {
  return r[0] = 1, r[1] = 0, r[2] = 0, r[3] = 1, r[4] = 0, r[5] = 0, r;
}
function Yh(r, t) {
  return r[0] = t[0], r[1] = t[1], r[2] = t[2], r[3] = t[3], r[4] = t[4], r[5] = t[5], r;
}
function $r(r, t, e) {
  var n = t[0] * e[0] + t[2] * e[1], i = t[1] * e[0] + t[3] * e[1], a = t[0] * e[2] + t[2] * e[3], o = t[1] * e[2] + t[3] * e[3], s = t[0] * e[4] + t[2] * e[5] + t[4], l = t[1] * e[4] + t[3] * e[5] + t[5];
  return r[0] = n, r[1] = i, r[2] = a, r[3] = o, r[4] = s, r[5] = l, r;
}
function Ds(r, t, e) {
  return r[0] = t[0], r[1] = t[1], r[2] = t[2], r[3] = t[3], r[4] = t[4] + e[0], r[5] = t[5] + e[1], r;
}
function ll(r, t, e, n) {
  n === void 0 && (n = [0, 0]);
  var i = t[0], a = t[2], o = t[4], s = t[1], l = t[3], u = t[5], f = Math.sin(e), h = Math.cos(e);
  return r[0] = i * h + s * f, r[1] = -i * f + s * h, r[2] = a * h + l * f, r[3] = -a * f + h * l, r[4] = h * (o - n[0]) + f * (u - n[1]) + n[0], r[5] = h * (u - n[1]) - f * (o - n[0]) + n[1], r;
}
function Ny(r, t, e) {
  var n = e[0], i = e[1];
  return r[0] = t[0] * n, r[1] = t[1] * i, r[2] = t[2] * n, r[3] = t[3] * i, r[4] = t[4] * n, r[5] = t[5] * i, r;
}
function oo(r, t) {
  var e = t[0], n = t[2], i = t[4], a = t[1], o = t[3], s = t[5], l = e * o - a * n;
  return l ? (l = 1 / l, r[0] = o * l, r[1] = -a * l, r[2] = -n * l, r[3] = e * l, r[4] = (n * s - o * i) * l, r[5] = (a * i - e * s) * l, r) : null;
}
function db(r) {
  var t = Xr();
  return Yh(t, r), t;
}
const gb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clone: db,
  copy: Yh,
  create: Xr,
  identity: ao,
  invert: oo,
  mul: $r,
  rotate: ll,
  scale: Ny,
  translate: Ds
}, Symbol.toStringTag, { value: "Module" }));
var K = (function() {
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
})(), bo = Math.min, wo = Math.max, Jr = new K(), tn = new K(), en = new K(), rn = new K(), qi = new K(), Zi = new K(), lt = (function() {
  function r(t, e, n, i) {
    n < 0 && (t = t + n, n = -n), i < 0 && (e = e + i, i = -i), this.x = t, this.y = e, this.width = n, this.height = i;
  }
  return r.prototype.union = function(t) {
    var e = bo(t.x, this.x), n = bo(t.y, this.y);
    isFinite(this.x) && isFinite(this.width) ? this.width = wo(t.x + t.width, this.x + this.width) - e : this.width = t.width, isFinite(this.y) && isFinite(this.height) ? this.height = wo(t.y + t.height, this.y + this.height) - n : this.height = t.height, this.x = e, this.y = n;
  }, r.prototype.applyTransform = function(t) {
    r.applyTransform(this, this, t);
  }, r.prototype.calculateTransform = function(t) {
    var e = this, n = t.width / e.width, i = t.height / e.height, a = Xr();
    return Ds(a, a, [-e.x, -e.y]), Ny(a, a, [n, i]), Ds(a, a, [t.x, t.y]), a;
  }, r.prototype.intersect = function(t, e) {
    if (!t)
      return !1;
    t instanceof r || (t = r.create(t));
    var n = this, i = n.x, a = n.x + n.width, o = n.y, s = n.y + n.height, l = t.x, u = t.x + t.width, f = t.y, h = t.y + t.height, v = !(a < l || u < i || s < f || h < o);
    if (e) {
      var c = 1 / 0, p = 0, d = Math.abs(a - l), g = Math.abs(u - i), y = Math.abs(s - f), m = Math.abs(h - o), _ = Math.min(d, g), S = Math.min(y, m);
      a < l || u < i ? _ > p && (p = _, d < g ? K.set(Zi, -d, 0) : K.set(Zi, g, 0)) : _ < c && (c = _, d < g ? K.set(qi, d, 0) : K.set(qi, -g, 0)), s < f || h < o ? S > p && (p = S, y < m ? K.set(Zi, 0, -y) : K.set(Zi, 0, m)) : _ < c && (c = _, y < m ? K.set(qi, 0, y) : K.set(qi, 0, -m));
    }
    return e && K.copy(e, v ? qi : Zi), v;
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
    Jr.x = en.x = e.x, Jr.y = rn.y = e.y, tn.x = rn.x = e.x + e.width, tn.y = en.y = e.y + e.height, Jr.transform(n), rn.transform(n), tn.transform(n), en.transform(n), t.x = bo(Jr.x, tn.x, en.x, rn.x), t.y = bo(Jr.y, tn.y, en.y, rn.y);
    var l = wo(Jr.x, tn.x, en.x, rn.x), u = wo(Jr.y, tn.y, en.y, rn.y);
    t.width = l - t.x, t.height = u - t.y;
  }, r;
})(), ky = "silent";
function yb(r, t, e) {
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
    stop: mb
  };
}
function mb() {
  Ba(this.event);
}
var _b = (function(r) {
  z(t, r);
  function t() {
    var e = r !== null && r.apply(this, arguments) || this;
    return e.handler = null, e;
  }
  return t.prototype.dispose = function() {
  }, t.prototype.setCursor = function() {
  }, t;
})(or), ji = /* @__PURE__ */ (function() {
  function r(t, e) {
    this.x = t, this.y = e;
  }
  return r;
})(), Sb = [
  "click",
  "dblclick",
  "mousewheel",
  "mouseout",
  "mouseup",
  "mousedown",
  "mousemove",
  "contextmenu"
], Jl = new lt(0, 0, 0, 0), Vy = (function(r) {
  z(t, r);
  function t(e, n, i, a, o) {
    var s = r.call(this) || this;
    return s._hovered = new ji(0, 0), s.storage = e, s.painter = n, s.painterRoot = a, s._pointerSize = o, i = i || new _b(), s.proxy = null, s.setHandlerProxy(i), s._draggingMgr = new eb(s), s;
  }
  return t.prototype.setHandlerProxy = function(e) {
    this.proxy && this.proxy.dispose(), e && (D(Sb, function(n) {
      e.on && e.on(n, this[n], this);
    }, this), e.handler = this), this.proxy = e;
  }, t.prototype.mousemove = function(e) {
    var n = e.zrX, i = e.zrY, a = By(this, n, i), o = this._hovered, s = o.target;
    s && !s.__zr && (o = this.findHover(o.x, o.y), s = o.target);
    var l = this._hovered = a ? new ji(n, i) : this.findHover(n, i), u = l.target, f = this.proxy;
    f.setCursor && f.setCursor(u ? u.cursor : "default"), s && u !== s && this.dispatchToElement(o, "mouseout", e), this.dispatchToElement(l, "mousemove", e), u && u !== s && this.dispatchToElement(l, "mouseover", e);
  }, t.prototype.mouseout = function(e) {
    var n = e.zrEventControl;
    n !== "only_globalout" && this.dispatchToElement(this._hovered, "mouseout", e), n !== "no_globalout" && this.trigger("globalout", { type: "globalout", event: e });
  }, t.prototype.resize = function() {
    this._hovered = new ji(0, 0);
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
      for (var o = "on" + n, s = yb(n, e, i); a && (a[o] && (s.cancelBubble = !!a[o].call(a, s)), a.trigger(n, s), a = a.__hostTarget ? a.__hostTarget : a.parent, !s.cancelBubble); )
        ;
      s.cancelBubble || (this.trigger(n, s), this.painter && this.painter.eachOtherLayer && this.painter.eachOtherLayer(function(l) {
        typeof l[o] == "function" && l[o].call(l, s), l.trigger && l.trigger(n, s);
      }));
    }
  }, t.prototype.findHover = function(e, n, i) {
    var a = this.storage.getDisplayList(), o = new ji(e, n);
    if (bv(a, o, e, n, i), this._pointerSize && !o.target) {
      for (var s = [], l = this._pointerSize, u = l / 2, f = new lt(e - u, n - u, l, l), h = a.length - 1; h >= 0; h--) {
        var v = a[h];
        v !== i && !v.ignore && !v.ignoreCoarsePointer && (!v.parent || !v.parent.ignoreCoarsePointer) && (Jl.copy(v.getBoundingRect()), v.transform && Jl.applyTransform(v.transform), Jl.intersect(f) && s.push(v));
      }
      if (s.length)
        for (var c = 4, p = Math.PI / 12, d = Math.PI * 2, g = 0; g < u; g += c)
          for (var y = 0; y < d; y += p) {
            var m = e + g * Math.cos(y), _ = n + g * Math.sin(y);
            if (bv(s, o, m, _, i), o.target)
              return o;
          }
    }
    return o;
  }, t.prototype.processGesture = function(e, n) {
    this._gestureMgr || (this._gestureMgr = new vb());
    var i = this._gestureMgr;
    n === "start" && i.clear();
    var a = i.recognize(e, this.findHover(e.zrX, e.zrY, null).target, this.proxy.dom);
    if (n === "end" && i.clear(), a) {
      var o = a.type;
      e.gestureEvent = o;
      var s = new ji();
      s.target = a.target, this.dispatchToElement(s, o, a.event);
    }
  }, t;
})(or);
D(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function(r) {
  Vy.prototype[r] = function(t) {
    var e = t.zrX, n = t.zrY, i = By(this, e, n), a, o;
    if ((r !== "mouseup" || !i) && (a = this.findHover(e, n), o = a.target), r === "mousedown")
      this._downEl = o, this._downPoint = [t.zrX, t.zrY], this._upEl = o;
    else if (r === "mouseup")
      this._upEl = o;
    else if (r === "click") {
      if (this._downEl !== this._upEl || !this._downPoint || Cs(this._downPoint, [t.zrX, t.zrY]) > 4)
        return;
      this._downPoint = null;
    }
    this.dispatchToElement(a, r, t);
  };
});
function bb(r, t, e) {
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
    return i ? ky : !0;
  }
  return !1;
}
function bv(r, t, e, n, i) {
  for (var a = r.length - 1; a >= 0; a--) {
    var o = r[a], s = void 0;
    if (o !== i && !o.ignore && (s = bb(o, e, n)) && (!t.topTarget && (t.topTarget = o), s !== ky)) {
      t.target = o;
      break;
    }
  }
}
function By(r, t, e) {
  var n = r.painter;
  return t < 0 || t > n.getWidth() || e < 0 || e > n.getHeight();
}
var zy = 32, Ki = 7;
function wb(r) {
  for (var t = 0; r >= zy; )
    t |= r & 1, r >>= 1;
  return r + t;
}
function wv(r, t, e, n) {
  var i = t + 1;
  if (i === e)
    return 1;
  if (n(r[i++], r[t]) < 0) {
    for (; i < e && n(r[i], r[i - 1]) < 0; )
      i++;
    xb(r, t, i);
  } else
    for (; i < e && n(r[i], r[i - 1]) >= 0; )
      i++;
  return i - t;
}
function xb(r, t, e) {
  for (e--; t < e; ) {
    var n = r[t];
    r[t++] = r[e], r[e--] = n;
  }
}
function xv(r, t, e, n, i) {
  for (n === t && n++; n < e; n++) {
    for (var a = r[n], o = t, s = n, l; o < s; )
      l = o + s >>> 1, i(a, r[l]) < 0 ? s = l : o = l + 1;
    var u = n - o;
    switch (u) {
      case 3:
        r[o + 3] = r[o + 2];
      case 2:
        r[o + 2] = r[o + 1];
      case 1:
        r[o + 1] = r[o];
        break;
      default:
        for (; u > 0; )
          r[o + u] = r[o + u - 1], u--;
    }
    r[o] = a;
  }
}
function tu(r, t, e, n, i, a) {
  var o = 0, s = 0, l = 1;
  if (a(r, t[e + i]) > 0) {
    for (s = n - i; l < s && a(r, t[e + i + l]) > 0; )
      o = l, l = (l << 1) + 1, l <= 0 && (l = s);
    l > s && (l = s), o += i, l += i;
  } else {
    for (s = i + 1; l < s && a(r, t[e + i - l]) <= 0; )
      o = l, l = (l << 1) + 1, l <= 0 && (l = s);
    l > s && (l = s);
    var u = o;
    o = i - l, l = i - u;
  }
  for (o++; o < l; ) {
    var f = o + (l - o >>> 1);
    a(r, t[e + f]) > 0 ? o = f + 1 : l = f;
  }
  return l;
}
function eu(r, t, e, n, i, a) {
  var o = 0, s = 0, l = 1;
  if (a(r, t[e + i]) < 0) {
    for (s = i + 1; l < s && a(r, t[e + i - l]) < 0; )
      o = l, l = (l << 1) + 1, l <= 0 && (l = s);
    l > s && (l = s);
    var u = o;
    o = i - l, l = i - u;
  } else {
    for (s = n - i; l < s && a(r, t[e + i + l]) >= 0; )
      o = l, l = (l << 1) + 1, l <= 0 && (l = s);
    l > s && (l = s), o += i, l += i;
  }
  for (o++; o < l; ) {
    var f = o + (l - o >>> 1);
    a(r, t[e + f]) < 0 ? l = f : o = f + 1;
  }
  return l;
}
function Tb(r, t) {
  var e = Ki, n, i, a = 0, o = [];
  n = [], i = [];
  function s(c, p) {
    n[a] = c, i[a] = p, a += 1;
  }
  function l() {
    for (; a > 1; ) {
      var c = a - 2;
      if (c >= 1 && i[c - 1] <= i[c] + i[c + 1] || c >= 2 && i[c - 2] <= i[c] + i[c - 1])
        i[c - 1] < i[c + 1] && c--;
      else if (i[c] > i[c + 1])
        break;
      f(c);
    }
  }
  function u() {
    for (; a > 1; ) {
      var c = a - 2;
      c > 0 && i[c - 1] < i[c + 1] && c--, f(c);
    }
  }
  function f(c) {
    var p = n[c], d = i[c], g = n[c + 1], y = i[c + 1];
    i[c] = d + y, c === a - 3 && (n[c + 1] = n[c + 2], i[c + 1] = i[c + 2]), a--;
    var m = eu(r[g], r, p, d, 0, t);
    p += m, d -= m, d !== 0 && (y = tu(r[p + d - 1], r, g, y, y - 1, t), y !== 0 && (d <= y ? h(p, d, g, y) : v(p, d, g, y)));
  }
  function h(c, p, d, g) {
    var y = 0;
    for (y = 0; y < p; y++)
      o[y] = r[c + y];
    var m = 0, _ = d, S = c;
    if (r[S++] = r[_++], --g === 0) {
      for (y = 0; y < p; y++)
        r[S + y] = o[m + y];
      return;
    }
    if (p === 1) {
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
        } else if (r[S++] = o[m++], b++, x = 0, --p === 1) {
          T = !0;
          break;
        }
      while ((b | x) < w);
      if (T)
        break;
      do {
        if (b = eu(r[_], o, m, p, 0, t), b !== 0) {
          for (y = 0; y < b; y++)
            r[S + y] = o[m + y];
          if (S += b, m += b, p -= b, p <= 1) {
            T = !0;
            break;
          }
        }
        if (r[S++] = r[_++], --g === 0) {
          T = !0;
          break;
        }
        if (x = tu(o[m], r, _, g, 0, t), x !== 0) {
          for (y = 0; y < x; y++)
            r[S + y] = r[_ + y];
          if (S += x, _ += x, g -= x, g === 0) {
            T = !0;
            break;
          }
        }
        if (r[S++] = o[m++], --p === 1) {
          T = !0;
          break;
        }
        w--;
      } while (b >= Ki || x >= Ki);
      if (T)
        break;
      w < 0 && (w = 0), w += 2;
    }
    if (e = w, e < 1 && (e = 1), p === 1) {
      for (y = 0; y < g; y++)
        r[S + y] = r[_ + y];
      r[S + g] = o[m];
    } else {
      if (p === 0)
        throw new Error();
      for (y = 0; y < p; y++)
        r[S + y] = o[m + y];
    }
  }
  function v(c, p, d, g) {
    var y = 0;
    for (y = 0; y < g; y++)
      o[y] = r[d + y];
    var m = c + p - 1, _ = g - 1, S = d + g - 1, w = 0, b = 0;
    if (r[S--] = r[m--], --p === 0) {
      for (w = S - (g - 1), y = 0; y < g; y++)
        r[w + y] = o[y];
      return;
    }
    if (g === 1) {
      for (S -= p, m -= p, b = S + 1, w = m + 1, y = p - 1; y >= 0; y--)
        r[b + y] = r[w + y];
      r[S] = o[_];
      return;
    }
    for (var x = e; ; ) {
      var T = 0, A = 0, M = !1;
      do
        if (t(o[_], r[m]) < 0) {
          if (r[S--] = r[m--], T++, A = 0, --p === 0) {
            M = !0;
            break;
          }
        } else if (r[S--] = o[_--], A++, T = 0, --g === 1) {
          M = !0;
          break;
        }
      while ((T | A) < x);
      if (M)
        break;
      do {
        if (T = p - eu(o[_], r, c, p, p - 1, t), T !== 0) {
          for (S -= T, m -= T, p -= T, b = S + 1, w = m + 1, y = T - 1; y >= 0; y--)
            r[b + y] = r[w + y];
          if (p === 0) {
            M = !0;
            break;
          }
        }
        if (r[S--] = o[_--], --g === 1) {
          M = !0;
          break;
        }
        if (A = g - tu(r[m], o, 0, g, g - 1, t), A !== 0) {
          for (S -= A, _ -= A, g -= A, b = S + 1, w = _ + 1, y = 0; y < A; y++)
            r[b + y] = o[w + y];
          if (g <= 1) {
            M = !0;
            break;
          }
        }
        if (r[S--] = r[m--], --p === 0) {
          M = !0;
          break;
        }
        x--;
      } while (T >= Ki || A >= Ki);
      if (M)
        break;
      x < 0 && (x = 0), x += 2;
    }
    if (e = x, e < 1 && (e = 1), g === 1) {
      for (S -= p, m -= p, b = S + 1, w = m + 1, y = p - 1; y >= 0; y--)
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
    mergeRuns: l,
    forceMergeRuns: u,
    pushRun: s
  };
}
function us(r, t, e, n) {
  e || (e = 0), n || (n = r.length);
  var i = n - e;
  if (!(i < 2)) {
    var a = 0;
    if (i < zy) {
      a = wv(r, e, n, t), xv(r, e, n, e + a, t);
      return;
    }
    var o = Tb(r, t), s = wb(i);
    do {
      if (a = wv(r, e, n, t), a < s) {
        var l = i;
        l > s && (l = s), xv(r, e, e + l, e + a, t), a = l;
      }
      o.pushRun(e, a), o.mergeRuns(), i -= a, e += a;
    } while (i !== 0);
    o.forceMergeRuns();
  }
}
var ve = 1, da = 2, ui = 4, Tv = !1;
function ru() {
  Tv || (Tv = !0, console.warn("z / z2 / zlevel of displayable is invalid, which may cause unexpected errors"));
}
function Cv(r, t) {
  return r.zlevel === t.zlevel ? r.z === t.z ? r.z2 - t.z2 : r.z - t.z : r.zlevel - t.zlevel;
}
var Cb = (function() {
  function r() {
    this._roots = [], this._displayList = [], this._displayListLen = 0, this.displayableSortFunc = Cv;
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
    n.length = this._displayListLen, us(n, Cv);
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
        for (var s = t.childrenRef(), l = 0; l < s.length; l++) {
          var u = s[l];
          t.__dirty && (u.__dirty |= ve), this._updateAndAddDisplayable(u, e, n);
        }
        t.__dirty = 0;
      } else {
        var f = t;
        e && e.length ? f.__clipPaths = e : f.__clipPaths && f.__clipPaths.length > 0 && (f.__clipPaths = []), isNaN(f.z) && (ru(), f.z = 0), isNaN(f.z2) && (ru(), f.z2 = 0), isNaN(f.zlevel) && (ru(), f.zlevel = 0), this._displayList[this._displayListLen++] = f;
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
    var i = vt(this._roots, t);
    i >= 0 && this._roots.splice(i, 1);
  }, r.prototype.delAllRoots = function() {
    this._roots = [], this._displayList = [], this._displayListLen = 0;
  }, r.prototype.getRoots = function() {
    return this._roots;
  }, r.prototype.dispose = function() {
    this._displayList = null, this._roots = null;
  }, r;
})(), Ms;
Ms = Z.hasGlobalWindow && (window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window) || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function(r) {
  return setTimeout(r, 16);
};
var Ta = {
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
    return 1 - Ta.bounceOut(1 - r);
  },
  bounceOut: function(r) {
    return r < 1 / 2.75 ? 7.5625 * r * r : r < 2 / 2.75 ? 7.5625 * (r -= 1.5 / 2.75) * r + 0.75 : r < 2.5 / 2.75 ? 7.5625 * (r -= 2.25 / 2.75) * r + 0.9375 : 7.5625 * (r -= 2.625 / 2.75) * r + 0.984375;
  },
  bounceInOut: function(r) {
    return r < 0.5 ? Ta.bounceIn(r * 2) * 0.5 : Ta.bounceOut(r * 2 - 1) * 0.5 + 0.5;
  }
}, xo = Math.pow, qr = Math.sqrt, As = 1e-8, Fy = 1e-4, Dv = qr(3), To = 1 / 3, Je = Fn(), Te = Fn(), di = Fn();
function zr(r) {
  return r > -As && r < As;
}
function Hy(r) {
  return r > As || r < -As;
}
function kt(r, t, e, n, i) {
  var a = 1 - i;
  return a * a * (a * r + 3 * i * t) + i * i * (i * n + 3 * a * e);
}
function Mv(r, t, e, n, i) {
  var a = 1 - i;
  return 3 * (((t - r) * a + 2 * (e - t) * i) * a + (n - e) * i * i);
}
function Es(r, t, e, n, i, a) {
  var o = n + 3 * (t - e) - r, s = 3 * (e - t * 2 + r), l = 3 * (t - r), u = r - i, f = s * s - 3 * o * l, h = s * l - 9 * o * u, v = l * l - 3 * s * u, c = 0;
  if (zr(f) && zr(h))
    if (zr(s))
      a[0] = 0;
    else {
      var p = -l / s;
      p >= 0 && p <= 1 && (a[c++] = p);
    }
  else {
    var d = h * h - 4 * f * v;
    if (zr(d)) {
      var g = h / f, p = -s / o + g, y = -g / 2;
      p >= 0 && p <= 1 && (a[c++] = p), y >= 0 && y <= 1 && (a[c++] = y);
    } else if (d > 0) {
      var m = qr(d), _ = f * s + 1.5 * o * (-h + m), S = f * s + 1.5 * o * (-h - m);
      _ < 0 ? _ = -xo(-_, To) : _ = xo(_, To), S < 0 ? S = -xo(-S, To) : S = xo(S, To);
      var p = (-s - (_ + S)) / (3 * o);
      p >= 0 && p <= 1 && (a[c++] = p);
    } else {
      var w = (2 * f * s - 3 * o * h) / (2 * qr(f * f * f)), b = Math.acos(w) / 3, x = qr(f), T = Math.cos(b), p = (-s - 2 * x * T) / (3 * o), y = (-s + x * (T + Dv * Math.sin(b))) / (3 * o), A = (-s + x * (T - Dv * Math.sin(b))) / (3 * o);
      p >= 0 && p <= 1 && (a[c++] = p), y >= 0 && y <= 1 && (a[c++] = y), A >= 0 && A <= 1 && (a[c++] = A);
    }
  }
  return c;
}
function Gy(r, t, e, n, i) {
  var a = 6 * e - 12 * t + 6 * r, o = 9 * t + 3 * n - 3 * r - 9 * e, s = 3 * t - 3 * r, l = 0;
  if (zr(o)) {
    if (Hy(a)) {
      var u = -s / a;
      u >= 0 && u <= 1 && (i[l++] = u);
    }
  } else {
    var f = a * a - 4 * o * s;
    if (zr(f))
      i[0] = -a / (2 * o);
    else if (f > 0) {
      var h = qr(f), u = (-a + h) / (2 * o), v = (-a - h) / (2 * o);
      u >= 0 && u <= 1 && (i[l++] = u), v >= 0 && v <= 1 && (i[l++] = v);
    }
  }
  return l;
}
function Is(r, t, e, n, i, a) {
  var o = (t - r) * i + r, s = (e - t) * i + t, l = (n - e) * i + e, u = (s - o) * i + o, f = (l - s) * i + s, h = (f - u) * i + u;
  a[0] = r, a[1] = o, a[2] = u, a[3] = h, a[4] = h, a[5] = f, a[6] = l, a[7] = n;
}
function Db(r, t, e, n, i, a, o, s, l, u, f) {
  var h, v = 5e-3, c = 1 / 0, p, d, g, y;
  Je[0] = l, Je[1] = u;
  for (var m = 0; m < 1; m += 0.05)
    Te[0] = kt(r, e, i, o, m), Te[1] = kt(t, n, a, s, m), g = Mn(Je, Te), g < c && (h = m, c = g);
  c = 1 / 0;
  for (var _ = 0; _ < 32 && !(v < Fy); _++)
    p = h - v, d = h + v, Te[0] = kt(r, e, i, o, p), Te[1] = kt(t, n, a, s, p), g = Mn(Te, Je), p >= 0 && g < c ? (h = p, c = g) : (di[0] = kt(r, e, i, o, d), di[1] = kt(t, n, a, s, d), y = Mn(di, Je), d <= 1 && y < c ? (h = d, c = y) : v *= 0.5);
  return qr(c);
}
function Mb(r, t, e, n, i, a, o, s, l) {
  for (var u = r, f = t, h = 0, v = 1 / l, c = 1; c <= l; c++) {
    var p = c * v, d = kt(r, e, i, o, p), g = kt(t, n, a, s, p), y = d - u, m = g - f;
    h += Math.sqrt(y * y + m * m), u = d, f = g;
  }
  return h;
}
function oe(r, t, e, n) {
  var i = 1 - n;
  return i * (i * r + 2 * n * t) + n * n * e;
}
function Av(r, t, e, n) {
  return 2 * ((1 - n) * (t - r) + n * (e - t));
}
function Ab(r, t, e, n, i) {
  var a = r - 2 * t + e, o = 2 * (t - r), s = r - n, l = 0;
  if (zr(a)) {
    if (Hy(o)) {
      var u = -s / o;
      u >= 0 && u <= 1 && (i[l++] = u);
    }
  } else {
    var f = o * o - 4 * a * s;
    if (zr(f)) {
      var u = -o / (2 * a);
      u >= 0 && u <= 1 && (i[l++] = u);
    } else if (f > 0) {
      var h = qr(f), u = (-o + h) / (2 * a), v = (-o - h) / (2 * a);
      u >= 0 && u <= 1 && (i[l++] = u), v >= 0 && v <= 1 && (i[l++] = v);
    }
  }
  return l;
}
function Wy(r, t, e) {
  var n = r + e - 2 * t;
  return n === 0 ? 0.5 : (r - t) / n;
}
function Ls(r, t, e, n, i) {
  var a = (t - r) * n + r, o = (e - t) * n + t, s = (o - a) * n + a;
  i[0] = r, i[1] = a, i[2] = s, i[3] = s, i[4] = o, i[5] = e;
}
function Eb(r, t, e, n, i, a, o, s, l) {
  var u, f = 5e-3, h = 1 / 0;
  Je[0] = o, Je[1] = s;
  for (var v = 0; v < 1; v += 0.05) {
    Te[0] = oe(r, e, i, v), Te[1] = oe(t, n, a, v);
    var c = Mn(Je, Te);
    c < h && (u = v, h = c);
  }
  h = 1 / 0;
  for (var p = 0; p < 32 && !(f < Fy); p++) {
    var d = u - f, g = u + f;
    Te[0] = oe(r, e, i, d), Te[1] = oe(t, n, a, d);
    var c = Mn(Te, Je);
    if (d >= 0 && c < h)
      u = d, h = c;
    else {
      di[0] = oe(r, e, i, g), di[1] = oe(t, n, a, g);
      var y = Mn(di, Je);
      g <= 1 && y < h ? (u = g, h = y) : f *= 0.5;
    }
  }
  return qr(h);
}
function Ib(r, t, e, n, i, a, o) {
  for (var s = r, l = t, u = 0, f = 1 / o, h = 1; h <= o; h++) {
    var v = h * f, c = oe(r, e, i, v), p = oe(t, n, a, v), d = c - s, g = p - l;
    u += Math.sqrt(d * d + g * g), s = c, l = p;
  }
  return u;
}
var Lb = /cubic-bezier\(([0-9,\.e ]+)\)/;
function Uy(r) {
  var t = r && Lb.exec(r);
  if (t) {
    var e = t[1].split(","), n = +Ve(e[0]), i = +Ve(e[1]), a = +Ve(e[2]), o = +Ve(e[3]);
    if (isNaN(n + i + a + o))
      return;
    var s = [];
    return function(l) {
      return l <= 0 ? 0 : l >= 1 ? 1 : Es(0, n, a, 1, l, s) && kt(0, i, o, 1, s[0]);
    };
  }
}
var Pb = (function() {
  function r(t) {
    this._inited = !1, this._startTime = 0, this._pausedTime = 0, this._paused = !1, this._life = t.life || 1e3, this._delay = t.delay || 0, this.loop = t.loop || !1, this.onframe = t.onframe || Xt, this.ondestroy = t.ondestroy || Xt, this.onrestart = t.onrestart || Xt, t.easing && this.setEasing(t.easing);
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
        var l = i % n;
        this._startTime = t - l, this._pausedTime = 0, this.onrestart();
      } else
        return !0;
    return !1;
  }, r.prototype.pause = function() {
    this._paused = !0;
  }, r.prototype.resume = function() {
    this._paused = !1;
  }, r.prototype.setEasing = function(t) {
    this.easing = t, this.easingFunc = $(t) ? t : Ta[t] || Uy(t);
  }, r;
})(), Yy = /* @__PURE__ */ (function() {
  function r(t) {
    this.value = t;
  }
  return r;
})(), Ob = (function() {
  function r() {
    this._len = 0;
  }
  return r.prototype.insert = function(t) {
    var e = new Yy(t);
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
})(), so = (function() {
  function r(t) {
    this._list = new Ob(), this._maxSize = 10, this._map = {}, this._maxSize = t;
  }
  return r.prototype.put = function(t, e) {
    var n = this._list, i = this._map, a = null;
    if (i[t] == null) {
      var o = n.len(), s = this._lastRemovedEntry;
      if (o >= this._maxSize && o > 0) {
        var l = n.head;
        n.remove(l), delete i[l.key], a = l.value, this._lastRemovedEntry = l;
      }
      s ? s.value = e : s = new Yy(e), s.key = t, n.insertEntry(s), i[t] = s;
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
})(), Ev = {
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
function ze(r) {
  return r = Math.round(r), r < 0 ? 0 : r > 255 ? 255 : r;
}
function Rb(r) {
  return r = Math.round(r), r < 0 ? 0 : r > 360 ? 360 : r;
}
function za(r) {
  return r < 0 ? 0 : r > 1 ? 1 : r;
}
function nu(r) {
  var t = r;
  return t.length && t.charAt(t.length - 1) === "%" ? ze(parseFloat(t) / 100 * 255) : ze(parseInt(t, 10));
}
function An(r) {
  var t = r;
  return t.length && t.charAt(t.length - 1) === "%" ? za(parseFloat(t) / 100) : za(parseFloat(t));
}
function iu(r, t, e) {
  return e < 0 ? e += 1 : e > 1 && (e -= 1), e * 6 < 1 ? r + (t - r) * e * 6 : e * 2 < 1 ? t : e * 3 < 2 ? r + (t - r) * (2 / 3 - e) * 6 : r;
}
function Fr(r, t, e) {
  return r + (t - r) * e;
}
function Se(r, t, e, n, i) {
  return r[0] = t, r[1] = e, r[2] = n, r[3] = i, r;
}
function Lf(r, t) {
  return r[0] = t[0], r[1] = t[1], r[2] = t[2], r[3] = t[3], r;
}
var Xy = new so(20), Co = null;
function Xn(r, t) {
  Co && Lf(Co, t), Co = Xy.put(r, Co || t.slice());
}
function ue(r, t) {
  if (r) {
    t = t || [];
    var e = Xy.get(r);
    if (e)
      return Lf(t, e);
    r = r + "";
    var n = r.replace(/ /g, "").toLowerCase();
    if (n in Ev)
      return Lf(t, Ev[n]), Xn(r, t), t;
    var i = n.length;
    if (n.charAt(0) === "#") {
      if (i === 4 || i === 5) {
        var a = parseInt(n.slice(1, 4), 16);
        if (!(a >= 0 && a <= 4095)) {
          Se(t, 0, 0, 0, 1);
          return;
        }
        return Se(t, (a & 3840) >> 4 | (a & 3840) >> 8, a & 240 | (a & 240) >> 4, a & 15 | (a & 15) << 4, i === 5 ? parseInt(n.slice(4), 16) / 15 : 1), Xn(r, t), t;
      } else if (i === 7 || i === 9) {
        var a = parseInt(n.slice(1, 7), 16);
        if (!(a >= 0 && a <= 16777215)) {
          Se(t, 0, 0, 0, 1);
          return;
        }
        return Se(t, (a & 16711680) >> 16, (a & 65280) >> 8, a & 255, i === 9 ? parseInt(n.slice(7), 16) / 255 : 1), Xn(r, t), t;
      }
      return;
    }
    var o = n.indexOf("("), s = n.indexOf(")");
    if (o !== -1 && s + 1 === i) {
      var l = n.substr(0, o), u = n.substr(o + 1, s - (o + 1)).split(","), f = 1;
      switch (l) {
        case "rgba":
          if (u.length !== 4)
            return u.length === 3 ? Se(t, +u[0], +u[1], +u[2], 1) : Se(t, 0, 0, 0, 1);
          f = An(u.pop());
        case "rgb":
          if (u.length >= 3)
            return Se(t, nu(u[0]), nu(u[1]), nu(u[2]), u.length === 3 ? f : An(u[3])), Xn(r, t), t;
          Se(t, 0, 0, 0, 1);
          return;
        case "hsla":
          if (u.length !== 4) {
            Se(t, 0, 0, 0, 1);
            return;
          }
          return u[3] = An(u[3]), Pf(u, t), Xn(r, t), t;
        case "hsl":
          if (u.length !== 3) {
            Se(t, 0, 0, 0, 1);
            return;
          }
          return Pf(u, t), Xn(r, t), t;
        default:
          return;
      }
    }
    Se(t, 0, 0, 0, 1);
  }
}
function Pf(r, t) {
  var e = (parseFloat(r[0]) % 360 + 360) % 360 / 360, n = An(r[1]), i = An(r[2]), a = i <= 0.5 ? i * (n + 1) : i + n - i * n, o = i * 2 - a;
  return t = t || [], Se(t, ze(iu(o, a, e + 1 / 3) * 255), ze(iu(o, a, e) * 255), ze(iu(o, a, e - 1 / 3) * 255), 1), r.length === 4 && (t[3] = r[3]), t;
}
function Nb(r) {
  if (r) {
    var t = r[0] / 255, e = r[1] / 255, n = r[2] / 255, i = Math.min(t, e, n), a = Math.max(t, e, n), o = a - i, s = (a + i) / 2, l, u;
    if (o === 0)
      l = 0, u = 0;
    else {
      s < 0.5 ? u = o / (a + i) : u = o / (2 - a - i);
      var f = ((a - t) / 6 + o / 2) / o, h = ((a - e) / 6 + o / 2) / o, v = ((a - n) / 6 + o / 2) / o;
      t === a ? l = v - h : e === a ? l = 1 / 3 + f - v : n === a && (l = 2 / 3 + h - f), l < 0 && (l += 1), l > 1 && (l -= 1);
    }
    var c = [l * 360, u, s];
    return r[3] != null && c.push(r[3]), c;
  }
}
function Of(r, t) {
  var e = ue(r);
  if (e) {
    for (var n = 0; n < 3; n++)
      t < 0 ? e[n] = e[n] * (1 - t) | 0 : e[n] = (255 - e[n]) * t + e[n] | 0, e[n] > 255 ? e[n] = 255 : e[n] < 0 && (e[n] = 0);
    return Fe(e, e.length === 4 ? "rgba" : "rgb");
  }
}
function kb(r) {
  var t = ue(r);
  if (t)
    return ((1 << 24) + (t[0] << 16) + (t[1] << 8) + +t[2]).toString(16).slice(1);
}
function Ca(r, t, e) {
  if (!(!(t && t.length) || !(r >= 0 && r <= 1))) {
    e = e || [];
    var n = r * (t.length - 1), i = Math.floor(n), a = Math.ceil(n), o = t[i], s = t[a], l = n - i;
    return e[0] = ze(Fr(o[0], s[0], l)), e[1] = ze(Fr(o[1], s[1], l)), e[2] = ze(Fr(o[2], s[2], l)), e[3] = za(Fr(o[3], s[3], l)), e;
  }
}
var Vb = Ca;
function Xh(r, t, e) {
  if (!(!(t && t.length) || !(r >= 0 && r <= 1))) {
    var n = r * (t.length - 1), i = Math.floor(n), a = Math.ceil(n), o = ue(t[i]), s = ue(t[a]), l = n - i, u = Fe([
      ze(Fr(o[0], s[0], l)),
      ze(Fr(o[1], s[1], l)),
      ze(Fr(o[2], s[2], l)),
      za(Fr(o[3], s[3], l))
    ], "rgba");
    return e ? {
      color: u,
      leftIndex: i,
      rightIndex: a,
      value: n
    } : u;
  }
}
var Bb = Xh;
function fs(r, t, e, n) {
  var i = ue(r);
  if (r)
    return i = Nb(i), t != null && (i[0] = Rb(t)), e != null && (i[1] = An(e)), n != null && (i[2] = An(n)), Fe(Pf(i), "rgba");
}
function $y(r, t) {
  var e = ue(r);
  if (e && t != null)
    return e[3] = za(t), Fe(e, "rgba");
}
function Fe(r, t) {
  if (!(!r || !r.length)) {
    var e = r[0] + "," + r[1] + "," + r[2];
    return (t === "rgba" || t === "hsva" || t === "hsla") && (e += "," + r[3]), t + "(" + e + ")";
  }
}
function Fa(r, t) {
  var e = ue(r);
  return e ? (0.299 * e[0] + 0.587 * e[1] + 0.114 * e[2]) * e[3] / 255 + (1 - e[3]) * t : 0;
}
function zb() {
  return Fe([
    Math.round(Math.random() * 255),
    Math.round(Math.random() * 255),
    Math.round(Math.random() * 255)
  ], "rgb");
}
var Iv = new so(100);
function Rf(r) {
  if (U(r)) {
    var t = Iv.get(r);
    return t || (t = Of(r, -0.1), Iv.put(r, t)), t;
  } else if (no(r)) {
    var e = B({}, r);
    return e.colorStops = Y(r.colorStops, function(n) {
      return {
        offset: n.offset,
        color: Of(n.color, -0.1)
      };
    }), e;
  }
  return r;
}
const Fb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  fastLerp: Ca,
  fastMapToColor: Vb,
  lerp: Xh,
  lift: Of,
  liftColor: Rf,
  lum: Fa,
  mapToColor: Bb,
  modifyAlpha: $y,
  modifyHSL: fs,
  parse: ue,
  random: zb,
  stringify: Fe,
  toHex: kb
}, Symbol.toStringTag, { value: "Module" }));
function Hb(r) {
  return r.type === "linear";
}
function Gb(r) {
  return r.type === "radial";
}
(function() {
  return Z.hasGlobalWindow && $(window.btoa) ? function(r) {
    return window.btoa(unescape(encodeURIComponent(r)));
  } : typeof Buffer < "u" ? function(r) {
    return Buffer.from(r).toString("base64");
  } : function(r) {
    return process.env.NODE_ENV !== "production" && Ur("Base64 isn't natively supported in the current environment."), null;
  };
})();
var Nf = Array.prototype.slice;
function gr(r, t, e) {
  return (t - r) * e + r;
}
function au(r, t, e, n) {
  for (var i = t.length, a = 0; a < i; a++)
    r[a] = gr(t[a], e[a], n);
  return r;
}
function Wb(r, t, e, n) {
  for (var i = t.length, a = i && t[0].length, o = 0; o < i; o++) {
    r[o] || (r[o] = []);
    for (var s = 0; s < a; s++)
      r[o][s] = gr(t[o][s], e[o][s], n);
  }
  return r;
}
function Do(r, t, e, n) {
  for (var i = t.length, a = 0; a < i; a++)
    r[a] = t[a] + e[a] * n;
  return r;
}
function Lv(r, t, e, n) {
  for (var i = t.length, a = i && t[0].length, o = 0; o < i; o++) {
    r[o] || (r[o] = []);
    for (var s = 0; s < a; s++)
      r[o][s] = t[o][s] + e[o][s] * n;
  }
  return r;
}
function Ub(r, t) {
  for (var e = r.length, n = t.length, i = e > n ? t : r, a = Math.min(e, n), o = i[a - 1] || { color: [0, 0, 0, 0], offset: 0 }, s = a; s < Math.max(e, n); s++)
    i.push({
      offset: o.offset,
      color: o.color.slice()
    });
}
function Yb(r, t, e) {
  var n = r, i = t;
  if (!(!n.push || !i.push)) {
    var a = n.length, o = i.length;
    if (a !== o) {
      var s = a > o;
      if (s)
        n.length = o;
      else
        for (var l = a; l < o; l++)
          n.push(e === 1 ? i[l] : Nf.call(i[l]));
    }
    for (var u = n[0] && n[0].length, l = 0; l < n.length; l++)
      if (e === 1)
        isNaN(n[l]) && (n[l] = i[l]);
      else
        for (var f = 0; f < u; f++)
          isNaN(n[l][f]) && (n[l][f] = i[l][f]);
  }
}
function hs(r) {
  if (re(r)) {
    var t = r.length;
    if (re(r[0])) {
      for (var e = [], n = 0; n < t; n++)
        e.push(Nf.call(r[n]));
      return e;
    }
    return Nf.call(r);
  }
  return r;
}
function cs(r) {
  return r[0] = Math.floor(r[0]) || 0, r[1] = Math.floor(r[1]) || 0, r[2] = Math.floor(r[2]) || 0, r[3] = r[3] == null ? 1 : r[3], "rgba(" + r.join(",") + ")";
}
function Xb(r) {
  return re(r && r[0]) ? 2 : 1;
}
var Mo = 0, vs = 1, qy = 2, ga = 3, kf = 4, Vf = 5, Pv = 6;
function Ov(r) {
  return r === kf || r === Vf;
}
function Ao(r) {
  return r === vs || r === qy;
}
var Qi = [0, 0, 0, 0], $b = (function() {
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
    var i = this.keyframes, a = i.length, o = !1, s = Pv, l = e;
    if (re(e)) {
      var u = Xb(e);
      s = u, (u === 1 && !dt(e[0]) || u === 2 && !dt(e[0][0])) && (o = !0);
    } else if (dt(e) && !bi(e))
      s = Mo;
    else if (U(e))
      if (!isNaN(+e))
        s = Mo;
      else {
        var f = ue(e);
        f && (l = f, s = ga);
      }
    else if (no(e)) {
      var h = B({}, l);
      h.colorStops = Y(e.colorStops, function(c) {
        return {
          offset: c.offset,
          color: ue(c.color)
        };
      }), Hb(e) ? s = kf : Gb(e) && (s = Vf), l = h;
    }
    a === 0 ? this.valType = s : (s !== this.valType || s === Pv) && (o = !0), this.discrete = this.discrete || o;
    var v = {
      time: t,
      value: l,
      rawValue: e,
      percent: 0
    };
    return n && (v.easing = n, v.easingFunc = $(n) ? n : Ta[n] || Uy(n)), i.push(v), v;
  }, r.prototype.prepare = function(t, e) {
    var n = this.keyframes;
    this._needsSort && n.sort(function(d, g) {
      return d.time - g.time;
    });
    for (var i = this.valType, a = n.length, o = n[a - 1], s = this.discrete, l = Ao(i), u = Ov(i), f = 0; f < a; f++) {
      var h = n[f], v = h.value, c = o.value;
      h.percent = h.time / t, s || (l && f !== a - 1 ? Yb(v, c, i) : u && Ub(v.colorStops, c.colorStops));
    }
    if (!s && i !== Vf && e && this.needsAnimate() && e.needsAnimate() && i === e.valType && !e._finished) {
      this._additiveTrack = e;
      for (var p = n[0].value, f = 0; f < a; f++)
        i === Mo ? n[f].additiveValue = n[f].value - p : i === ga ? n[f].additiveValue = Do([], n[f].value, p, -1) : Ao(i) && (n[f].additiveValue = i === vs ? Do([], n[f].value, p, -1) : Lv([], n[f].value, p, -1));
    }
  }, r.prototype.step = function(t, e) {
    if (!this._finished) {
      this._additiveTrack && this._additiveTrack._finished && (this._additiveTrack = null);
      var n = this._additiveTrack != null, i = n ? "additiveValue" : "value", a = this.valType, o = this.keyframes, s = o.length, l = this.propName, u = a === ga, f, h = this._lastFr, v = Math.min, c, p;
      if (s === 1)
        c = p = o[0];
      else {
        if (e < 0)
          f = 0;
        else if (e < this._lastFrP) {
          var d = v(h + 1, s - 1);
          for (f = d; f >= 0 && !(o[f].percent <= e); f--)
            ;
          f = v(f, s - 2);
        } else {
          for (f = h; f < s && !(o[f].percent > e); f++)
            ;
          f = v(f - 1, s - 2);
        }
        p = o[f + 1], c = o[f];
      }
      if (c && p) {
        this._lastFr = f, this._lastFrP = e;
        var g = p.percent - c.percent, y = g === 0 ? 1 : v((e - c.percent) / g, 1);
        p.easingFunc && (y = p.easingFunc(y));
        var m = n ? this._additiveValue : u ? Qi : t[l];
        if ((Ao(a) || u) && !m && (m = this._additiveValue = []), this.discrete)
          t[l] = y < 1 ? c.rawValue : p.rawValue;
        else if (Ao(a))
          a === vs ? au(m, c[i], p[i], y) : Wb(m, c[i], p[i], y);
        else if (Ov(a)) {
          var _ = c[i], S = p[i], w = a === kf;
          t[l] = {
            type: w ? "linear" : "radial",
            x: gr(_.x, S.x, y),
            y: gr(_.y, S.y, y),
            colorStops: Y(_.colorStops, function(x, T) {
              var A = S.colorStops[T];
              return {
                offset: gr(x.offset, A.offset, y),
                color: cs(au([], x.color, A.color, y))
              };
            }),
            global: S.global
          }, w ? (t[l].x2 = gr(_.x2, S.x2, y), t[l].y2 = gr(_.y2, S.y2, y)) : t[l].r = gr(_.r, S.r, y);
        } else if (u)
          au(m, c[i], p[i], y), n || (t[l] = cs(m));
        else {
          var b = gr(c[i], p[i], y);
          n ? this._additiveValue = b : t[l] = b;
        }
        n && this._addToTarget(t);
      }
    }
  }, r.prototype._addToTarget = function(t) {
    var e = this.valType, n = this.propName, i = this._additiveValue;
    e === Mo ? t[n] = t[n] + i : e === ga ? (ue(t[n], Qi), Do(Qi, Qi, i, 1), t[n] = cs(Qi)) : e === vs ? Do(t[n], t[n], i, 1) : e === qy && Lv(t[n], t[n], i, 1);
  }, r;
})(), $h = (function() {
  function r(t, e, n, i) {
    if (this._tracks = {}, this._trackKeys = [], this._maxTime = 0, this._started = 0, this._clip = null, this._target = t, this._loop = e, e && i) {
      Ur("Can' use additive animation on looped animation.");
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
    return this.whenWithKeys(t, e, gt(e), n);
  }, r.prototype.whenWithKeys = function(t, e, n, i) {
    for (var a = this._tracks, o = 0; o < n.length; o++) {
      var s = n[o], l = a[s];
      if (!l) {
        l = a[s] = new $b(s);
        var u = void 0, f = this._getAdditiveTrack(s);
        if (f) {
          var h = f.keyframes, v = h[h.length - 1];
          u = v && v.value, f.valType === ga && u && (u = cs(u));
        } else
          u = this._target[s];
        if (u == null)
          continue;
        t > 0 && l.addKeyframe(0, hs(u), i), this._trackKeys.push(s);
      }
      l.addKeyframe(t, hs(e[s]), i);
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
        var o = this._trackKeys[a], s = this._tracks[o], l = this._getAdditiveTrack(o), u = s.keyframes, f = u.length;
        if (s.prepare(i, l), s.needsAnimate())
          if (!this._allowDiscrete && s.discrete) {
            var h = u[f - 1];
            h && (e._target[s.propName] = h.rawValue), s.setFinished();
          } else
            n.push(s);
      }
      if (n.length || this._force) {
        var v = new Pb({
          life: i,
          loop: this._loop,
          delay: this._delay || 0,
          onframe: function(c) {
            e._started = 2;
            var p = e._additiveAnimators;
            if (p) {
              for (var d = !1, g = 0; g < p.length; g++)
                if (p[g]._clip) {
                  d = !0;
                  break;
                }
              d || (e._additiveAnimators = null);
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
    return Y(this._trackKeys, function(e) {
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
          var s = o.keyframes, l = s[n ? 0 : s.length - 1];
          l && (t[a] = hs(l.rawValue));
        }
      }
    }
  }, r.prototype.__changeFinalValue = function(t, e) {
    e = e || gt(t);
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
function hi() {
  return (/* @__PURE__ */ new Date()).getTime();
}
var qb = (function(r) {
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
    for (var n = hi() - this._pausedTime, i = n - this._time, a = this._head; a; ) {
      var o = a.next, s = a.step(n, i);
      s && (a.ondestroy(), this.removeClip(a)), a = o;
    }
    this._time = n, e || (this.trigger("frame", i), this.stage.update && this.stage.update());
  }, t.prototype._startLoop = function() {
    var e = this;
    this._running = !0;
    function n() {
      e._running && (Ms(n), !e._paused && e.update());
    }
    Ms(n);
  }, t.prototype.start = function() {
    this._running || (this._time = hi(), this._pausedTime = 0, this._startLoop());
  }, t.prototype.stop = function() {
    this._running = !1;
  }, t.prototype.pause = function() {
    this._paused || (this._pauseStart = hi(), this._paused = !0);
  }, t.prototype.resume = function() {
    this._paused && (this._pausedTime += hi() - this._pauseStart, this._paused = !1);
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
    var i = new $h(e, n.loop);
    return this.addAnimator(i), i;
  }, t;
})(or), Zb = 300, ou = Z.domSupported, su = (function() {
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
  }, n = Y(r, function(i) {
    var a = i.replace("mouse", "pointer");
    return e.hasOwnProperty(a) ? a : i;
  });
  return {
    mouse: r,
    touch: t,
    pointer: n
  };
})(), Rv = {
  mouse: ["mousemove", "mouseup"],
  pointer: ["pointermove", "pointerup"]
}, Nv = !1;
function Bf(r) {
  var t = r.pointerType;
  return t === "pen" || t === "touch";
}
function jb(r) {
  r.touching = !0, r.touchTimer != null && (clearTimeout(r.touchTimer), r.touchTimer = null), r.touchTimer = setTimeout(function() {
    r.touching = !1, r.touchTimer = null;
  }, 700);
}
function lu(r) {
  r && (r.zrByTouch = !0);
}
function Kb(r, t) {
  return be(r.dom, new Qb(r, t), !0);
}
function Zy(r, t) {
  for (var e = t, n = !1; e && e.nodeType !== 9 && !(n = e.domBelongToZr || e !== t && e === r.painterRoot); )
    e = e.parentNode;
  return n;
}
var Qb = /* @__PURE__ */ (function() {
  function r(t, e) {
    this.stopPropagation = Xt, this.stopImmediatePropagation = Xt, this.preventDefault = Xt, this.type = e.type, this.target = this.currentTarget = t.dom, this.pointerType = e.pointerType, this.clientX = e.clientX, this.clientY = e.clientY;
  }
  return r;
})(), Ne = {
  mousedown: function(r) {
    r = be(this.dom, r), this.__mayPointerCapture = [r.zrX, r.zrY], this.trigger("mousedown", r);
  },
  mousemove: function(r) {
    r = be(this.dom, r);
    var t = this.__mayPointerCapture;
    t && (r.zrX !== t[0] || r.zrY !== t[1]) && this.__togglePointerCapture(!0), this.trigger("mousemove", r);
  },
  mouseup: function(r) {
    r = be(this.dom, r), this.__togglePointerCapture(!1), this.trigger("mouseup", r);
  },
  mouseout: function(r) {
    r = be(this.dom, r);
    var t = r.toElement || r.relatedTarget;
    Zy(this, t) || (this.__pointerCapturing && (r.zrEventControl = "no_globalout"), this.trigger("mouseout", r));
  },
  wheel: function(r) {
    Nv = !0, r = be(this.dom, r), this.trigger("mousewheel", r);
  },
  mousewheel: function(r) {
    Nv || (r = be(this.dom, r), this.trigger("mousewheel", r));
  },
  touchstart: function(r) {
    r = be(this.dom, r), lu(r), this.__lastTouchMoment = /* @__PURE__ */ new Date(), this.handler.processGesture(r, "start"), Ne.mousemove.call(this, r), Ne.mousedown.call(this, r);
  },
  touchmove: function(r) {
    r = be(this.dom, r), lu(r), this.handler.processGesture(r, "change"), Ne.mousemove.call(this, r);
  },
  touchend: function(r) {
    r = be(this.dom, r), lu(r), this.handler.processGesture(r, "end"), Ne.mouseup.call(this, r), +/* @__PURE__ */ new Date() - +this.__lastTouchMoment < Zb && Ne.click.call(this, r);
  },
  pointerdown: function(r) {
    Ne.mousedown.call(this, r);
  },
  pointermove: function(r) {
    Bf(r) || Ne.mousemove.call(this, r);
  },
  pointerup: function(r) {
    Ne.mouseup.call(this, r);
  },
  pointerout: function(r) {
    Bf(r) || Ne.mouseout.call(this, r);
  }
};
D(["click", "dblclick", "contextmenu"], function(r) {
  Ne[r] = function(t) {
    t = be(this.dom, t), this.trigger(r, t);
  };
});
var zf = {
  pointermove: function(r) {
    Bf(r) || zf.mousemove.call(this, r);
  },
  pointerup: function(r) {
    zf.mouseup.call(this, r);
  },
  mousemove: function(r) {
    this.trigger("mousemove", r);
  },
  mouseup: function(r) {
    var t = this.__pointerCapturing;
    this.__togglePointerCapture(!1), this.trigger("mouseup", r), t && (r.zrEventControl = "only_globalout", this.trigger("mouseout", r));
  }
};
function Jb(r, t) {
  var e = t.domHandlers;
  Z.pointerEventsSupported ? D(su.pointer, function(n) {
    ps(t, n, function(i) {
      e[n].call(r, i);
    });
  }) : (Z.touchEventsSupported && D(su.touch, function(n) {
    ps(t, n, function(i) {
      e[n].call(r, i), jb(t);
    });
  }), D(su.mouse, function(n) {
    ps(t, n, function(i) {
      i = Uh(i), t.touching || e[n].call(r, i);
    });
  }));
}
function tw(r, t) {
  Z.pointerEventsSupported ? D(Rv.pointer, e) : Z.touchEventsSupported || D(Rv.mouse, e);
  function e(n) {
    function i(a) {
      a = Uh(a), Zy(r, a.target) || (a = Kb(r, a), t.domHandlers[n].call(r, a));
    }
    ps(t, n, i, { capture: !0 });
  }
}
function ps(r, t, e, n) {
  r.mounted[t] = e, r.listenerOpts[t] = n, hb(r.domTarget, t, e, n);
}
function uu(r) {
  var t = r.mounted;
  for (var e in t)
    t.hasOwnProperty(e) && cb(r.domTarget, e, t[e], r.listenerOpts[e]);
  r.mounted = {};
}
var kv = /* @__PURE__ */ (function() {
  function r(t, e) {
    this.mounted = {}, this.listenerOpts = {}, this.touching = !1, this.domTarget = t, this.domHandlers = e;
  }
  return r;
})(), ew = (function(r) {
  z(t, r);
  function t(e, n) {
    var i = r.call(this) || this;
    return i.__pointerCapturing = !1, i.dom = e, i.painterRoot = n, i._localHandlerScope = new kv(e, Ne), ou && (i._globalHandlerScope = new kv(document, zf)), Jb(i, i._localHandlerScope), i;
  }
  return t.prototype.dispose = function() {
    uu(this._localHandlerScope), ou && uu(this._globalHandlerScope);
  }, t.prototype.setCursor = function(e) {
    this.dom.style && (this.dom.style.cursor = e || "default");
  }, t.prototype.__togglePointerCapture = function(e) {
    if (this.__mayPointerCapture = null, ou && +this.__pointerCapturing ^ +e) {
      this.__pointerCapturing = e;
      var n = this._globalHandlerScope;
      e ? tw(this, n) : uu(n);
    }
  }, t;
})(or), jy = 1;
Z.hasGlobalWindow && (jy = Math.max(window.devicePixelRatio || window.screen && window.screen.deviceXDPI / window.screen.logicalXDPI || 1, 1));
var Ps = jy, Ff = 0.4, Hf = "#333", Gf = "#ccc", rw = "#eee", Vv = ao, Bv = 5e-5;
function nn(r) {
  return r > Bv || r < -Bv;
}
var an = [], $n = [], fu = Xr(), hu = Math.abs, qh = (function() {
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
    return nn(this.rotation) || nn(this.x) || nn(this.y) || nn(this.scaleX - 1) || nn(this.scaleY - 1) || nn(this.skewX) || nn(this.skewY);
  }, r.prototype.updateTransform = function() {
    var t = this.parent && this.parent.transform, e = this.needLocalTransform(), n = this.transform;
    if (!(e || t)) {
      n && (Vv(n), this.invTransform = null);
      return;
    }
    n = n || Xr(), e ? this.getLocalTransform(n) : Vv(n), t && (e ? $r(n, t, n) : Yh(n, t)), this.transform = n, this._resolveGlobalScaleRatio(n);
  }, r.prototype._resolveGlobalScaleRatio = function(t) {
    var e = this.globalScaleRatio;
    if (e != null && e !== 1) {
      this.getGlobalScale(an);
      var n = an[0] < 0 ? -1 : 1, i = an[1] < 0 ? -1 : 1, a = ((an[0] - n) * e + n) / an[0] || 0, o = ((an[1] - i) * e + i) / an[1] || 0;
      t[0] *= a, t[1] *= a, t[2] *= o, t[3] *= o;
    }
    this.invTransform = this.invTransform || Xr(), oo(this.invTransform, t);
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
      t && t.transform && (t.invTransform = t.invTransform || Xr(), $r($n, t.invTransform, e), e = $n);
      var n = this.originX, i = this.originY;
      (n || i) && (fu[4] = n, fu[5] = i, $r($n, e, fu), $n[4] -= n, $n[5] -= i, e = $n), this.setLocalTransform(e);
    }
  }, r.prototype.getGlobalScale = function(t) {
    var e = this.transform;
    return t = t || [], e ? (t[0] = Math.sqrt(e[0] * e[0] + e[1] * e[1]), t[1] = Math.sqrt(e[2] * e[2] + e[3] * e[3]), e[0] < 0 && (t[0] = -t[0]), e[3] < 0 && (t[1] = -t[1]), t) : (t[0] = 1, t[1] = 1, t);
  }, r.prototype.transformCoordToLocal = function(t, e) {
    var n = [t, e], i = this.invTransform;
    return i && ee(n, n, i), n;
  }, r.prototype.transformCoordToGlobal = function(t, e) {
    var n = [t, e], i = this.transform;
    return i && ee(n, n, i), n;
  }, r.prototype.getLineScale = function() {
    var t = this.transform;
    return t && hu(t[0] - 1) > 1e-10 && hu(t[3] - 1) > 1e-10 ? Math.sqrt(hu(t[0] * t[3] - t[2] * t[1])) : 1;
  }, r.prototype.copyTransform = function(t) {
    nw(this, t);
  }, r.getLocalTransform = function(t, e) {
    e = e || [];
    var n = t.originX || 0, i = t.originY || 0, a = t.scaleX, o = t.scaleY, s = t.anchorX, l = t.anchorY, u = t.rotation || 0, f = t.x, h = t.y, v = t.skewX ? Math.tan(t.skewX) : 0, c = t.skewY ? Math.tan(-t.skewY) : 0;
    if (n || i || s || l) {
      var p = n + s, d = i + l;
      e[4] = -p * a - v * d * o, e[5] = -d * o - c * p * a;
    } else
      e[4] = e[5] = 0;
    return e[0] = a, e[3] = o, e[1] = c * a, e[2] = v * o, u && ll(e, e, u), e[4] += n + f, e[5] += i + h, e;
  }, r.initDefaultProps = (function() {
    var t = r.prototype;
    t.scaleX = t.scaleY = t.globalScaleRatio = 1, t.x = t.y = t.originX = t.originY = t.skewX = t.skewY = t.rotation = t.anchorX = t.anchorY = 0;
  })(), r;
})(), Ha = [
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
function nw(r, t) {
  for (var e = 0; e < Ha.length; e++) {
    var n = Ha[e];
    r[n] = t[n];
  }
}
var zv = {};
function pe(r, t) {
  t = t || On;
  var e = zv[t];
  e || (e = zv[t] = new so(500));
  var n = e.get(r);
  return n == null && (n = Ge.measureText(r, t).width, e.put(r, n)), n;
}
function Fv(r, t, e, n) {
  var i = pe(r, t), a = jh(t), o = ya(0, i, e), s = fi(0, a, n), l = new lt(o, s, i, a);
  return l;
}
function Zh(r, t, e, n) {
  var i = ((r || "") + "").split(`
`), a = i.length;
  if (a === 1)
    return Fv(i[0], t, e, n);
  for (var o = new lt(0, 0, 0, 0), s = 0; s < i.length; s++) {
    var l = Fv(i[s], t, e, n);
    s === 0 ? o.copy(l) : o.union(l);
  }
  return o;
}
function ya(r, t, e) {
  return e === "right" ? r -= t : e === "center" && (r -= t / 2), r;
}
function fi(r, t, e) {
  return e === "middle" ? r -= t / 2 : e === "bottom" && (r -= t), r;
}
function jh(r) {
  return pe("国", r);
}
function ir(r, t) {
  return typeof r == "string" ? r.lastIndexOf("%") >= 0 ? parseFloat(r) / 100 * t : parseFloat(r) : r;
}
function Os(r, t, e) {
  var n = t.position || "inside", i = t.distance != null ? t.distance : 5, a = e.height, o = e.width, s = a / 2, l = e.x, u = e.y, f = "left", h = "top";
  if (n instanceof Array)
    l += ir(n[0], e.width), u += ir(n[1], e.height), f = null, h = null;
  else
    switch (n) {
      case "left":
        l -= i, u += s, f = "right", h = "middle";
        break;
      case "right":
        l += i + o, u += s, h = "middle";
        break;
      case "top":
        l += o / 2, u -= i, f = "center", h = "bottom";
        break;
      case "bottom":
        l += o / 2, u += a + i, f = "center";
        break;
      case "inside":
        l += o / 2, u += s, f = "center", h = "middle";
        break;
      case "insideLeft":
        l += i, u += s, h = "middle";
        break;
      case "insideRight":
        l += o - i, u += s, f = "right", h = "middle";
        break;
      case "insideTop":
        l += o / 2, u += i, f = "center";
        break;
      case "insideBottom":
        l += o / 2, u += a - i, f = "center", h = "bottom";
        break;
      case "insideTopLeft":
        l += i, u += i;
        break;
      case "insideTopRight":
        l += o - i, u += i, f = "right";
        break;
      case "insideBottomLeft":
        l += i, u += a - i, h = "bottom";
        break;
      case "insideBottomRight":
        l += o - i, u += a - i, f = "right", h = "bottom";
        break;
    }
  return r = r || {}, r.x = l, r.y = u, r.align = f, r.verticalAlign = h, r;
}
var cu = "__zr_normal__", vu = Ha.concat(["ignore"]), iw = nr(Ha, function(r, t) {
  return r[t] = !0, r;
}, { ignore: !1 }), qn = {}, aw = new lt(0, 0, 0, 0), ul = (function() {
  function r(t) {
    this.id = Bh(), this.animators = [], this.currentStates = [], this.states = {}, this._init(t);
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
      var n = this.textConfig, i = n.local, a = e.innerTransformable, o = void 0, s = void 0, l = !1;
      a.parent = i ? this : null;
      var u = !1;
      if (a.copyTransform(e), n.position != null) {
        var f = aw;
        n.layoutRect ? f.copy(n.layoutRect) : f.copy(this.getBoundingRect()), i || f.applyTransform(this.transform), this.calculateTextPosition ? this.calculateTextPosition(qn, n, f) : Os(qn, n, f), a.x = qn.x, a.y = qn.y, o = qn.align, s = qn.verticalAlign;
        var h = n.origin;
        if (h && n.rotation != null) {
          var v = void 0, c = void 0;
          h === "center" ? (v = f.width * 0.5, c = f.height * 0.5) : (v = ir(h[0], f.width), c = ir(h[1], f.height)), u = !0, a.originX = -a.x + v + (i ? 0 : f.x), a.originY = -a.y + c + (i ? 0 : f.y);
        }
      }
      n.rotation != null && (a.rotation = n.rotation);
      var p = n.offset;
      p && (a.x += p[0], a.y += p[1], u || (a.originX = -p[0], a.originY = -p[1]));
      var d = n.inside == null ? typeof n.position == "string" && n.position.indexOf("inside") >= 0 : n.inside, g = this._innerTextDefaultStyle || (this._innerTextDefaultStyle = {}), y = void 0, m = void 0, _ = void 0;
      d && this.canBeInsideText() ? (y = n.insideFill, m = n.insideStroke, (y == null || y === "auto") && (y = this.getInsideTextFill()), (m == null || m === "auto") && (m = this.getInsideTextStroke(y), _ = !0)) : (y = n.outsideFill, m = n.outsideStroke, (y == null || y === "auto") && (y = this.getOutsideFill()), (m == null || m === "auto") && (m = this.getOutsideStroke(y), _ = !0)), y = y || "#000", (y !== g.fill || m !== g.stroke || _ !== g.autoStroke || o !== g.align || s !== g.verticalAlign) && (l = !0, g.fill = y, g.stroke = m, g.autoStroke = _, g.align = o, g.verticalAlign = s, e.setDefaultTextStyle(g)), e.__dirty |= ve, l && e.dirtyStyle(!0);
    }
  }, r.prototype.canBeInsideText = function() {
    return !0;
  }, r.prototype.getInsideTextFill = function() {
    return "#fff";
  }, r.prototype.getInsideTextStroke = function(t) {
    return "#000";
  }, r.prototype.getOutsideFill = function() {
    return this.__zr && this.__zr.isDarkMode() ? Gf : Hf;
  }, r.prototype.getOutsideStroke = function(t) {
    var e = this.__zr && this.__zr.getBackgroundColor(), n = typeof e == "string" && ue(e);
    n || (n = [255, 255, 255, 1]);
    for (var i = n[3], a = this.__zr.isDarkMode(), o = 0; o < 3; o++)
      n[o] = n[o] * i + (a ? 0 : 255) * (1 - i);
    return n[3] = 1, Fe(n, "rgba");
  }, r.prototype.traverse = function(t, e) {
  }, r.prototype.attrKV = function(t, e) {
    t === "textConfig" ? this.setTextConfig(e) : t === "textContent" ? this.setTextContent(e) : t === "clipPath" ? this.setClipPath(e) : t === "extra" ? (this.extra = this.extra || {}, B(this.extra, e)) : this[t] = e;
  }, r.prototype.hide = function() {
    this.ignore = !0, this.markRedraw();
  }, r.prototype.show = function() {
    this.ignore = !1, this.markRedraw();
  }, r.prototype.attr = function(t, e) {
    if (typeof t == "string")
      this.attrKV(t, e);
    else if (W(t))
      for (var n = t, i = gt(n), a = 0; a < i.length; a++) {
        var o = i[a];
        this.attrKV(o, t[o]);
      }
    return this.markRedraw(), this;
  }, r.prototype.saveCurrentToNormalState = function(t) {
    this._innerSaveToNormal(t);
    for (var e = this._normalState, n = 0; n < this.animators.length; n++) {
      var i = this.animators[n], a = i.__fromStateTransition;
      if (!(i.getLoop() || a && a !== cu)) {
        var o = i.targetName, s = o ? e[o] : e;
        i.saveTo(s);
      }
    }
  }, r.prototype._innerSaveToNormal = function(t) {
    var e = this._normalState;
    e || (e = this._normalState = {}), t.textConfig && !e.textConfig && (e.textConfig = this.textConfig), this._savePrimaryToNormal(t, e, vu);
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
    this.useState(cu, !1, t);
  }, r.prototype.useState = function(t, e, n, i) {
    var a = t === cu, o = this.hasState();
    if (!(!o && a)) {
      var s = this.currentStates, l = this.stateTransition;
      if (!(vt(s, t) >= 0 && (e || s.length === 1))) {
        var u;
        if (this.stateProxy && !a && (u = this.stateProxy(t)), u || (u = this.states && this.states[t]), !u && !a) {
          Ur("State " + t + " not exists.");
          return;
        }
        a || this.saveCurrentToNormalState(u);
        var f = !!(u && u.hoverLayer || i);
        f && this._toggleHoverLayerFlag(!0), this._applyStateObj(t, u, this._normalState, e, !n && !this.__inHover && l && l.duration > 0, l);
        var h = this._textContent, v = this._textGuide;
        return h && h.useState(t, e, n, f), v && v.useState(t, e, n, f), a ? (this.currentStates = [], this._normalState = {}) : e ? this.currentStates.push(t) : this.currentStates = [t], this._updateAnimationTargets(), this.markRedraw(), !f && this.__inHover && (this._toggleHoverLayerFlag(!1), this.__dirty &= ~ve), u;
      }
    }
  }, r.prototype.useStates = function(t, e, n) {
    if (!t.length)
      this.clearStates();
    else {
      var i = [], a = this.currentStates, o = t.length, s = o === a.length;
      if (s) {
        for (var l = 0; l < o; l++)
          if (t[l] !== a[l]) {
            s = !1;
            break;
          }
      }
      if (s)
        return;
      for (var l = 0; l < o; l++) {
        var u = t[l], f = void 0;
        this.stateProxy && (f = this.stateProxy(u, t)), f || (f = this.states[u]), f && i.push(f);
      }
      var h = i[o - 1], v = !!(h && h.hoverLayer || n);
      v && this._toggleHoverLayerFlag(!0);
      var c = this._mergeStates(i), p = this.stateTransition;
      this.saveCurrentToNormalState(c), this._applyStateObj(t.join(","), c, this._normalState, !1, !e && !this.__inHover && p && p.duration > 0, p);
      var d = this._textContent, g = this._textGuide;
      d && d.useStates(t, e, v), g && g.useStates(t, e, v), this._updateAnimationTargets(), this.currentStates = t.slice(), this.markRedraw(), !v && this.__inHover && (this._toggleHoverLayerFlag(!1), this.__dirty &= ~ve);
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
    var e = vt(this.currentStates, t);
    if (e >= 0) {
      var n = this.currentStates.slice();
      n.splice(e, 1), this.useStates(n);
    }
  }, r.prototype.replaceState = function(t, e, n) {
    var i = this.currentStates.slice(), a = vt(i, t), o = vt(i, e) >= 0;
    a >= 0 ? o ? i.splice(a, 1) : i[a] = e : n && !o && i.push(e), this.useStates(i);
  }, r.prototype.toggleState = function(t, e) {
    e ? this.useState(t, !0) : this.removeState(t);
  }, r.prototype._mergeStates = function(t) {
    for (var e = {}, n, i = 0; i < t.length; i++) {
      var a = t[i];
      B(e, a), a.textConfig && (n = n || {}, B(n, a.textConfig));
    }
    return n && (e.textConfig = n), e;
  }, r.prototype._applyStateObj = function(t, e, n, i, a, o) {
    var s = !(e && i);
    e && e.textConfig ? (this.textConfig = B({}, i ? this.textConfig : n.textConfig), B(this.textConfig, e.textConfig)) : s && n.textConfig && (this.textConfig = n.textConfig);
    for (var l = {}, u = !1, f = 0; f < vu.length; f++) {
      var h = vu[f], v = a && iw[h];
      e && e[h] != null ? v ? (u = !0, l[h] = e[h]) : this[h] = e[h] : s && n[h] != null && (v ? (u = !0, l[h] = n[h]) : this[h] = n[h]);
    }
    if (!a)
      for (var f = 0; f < this.animators.length; f++) {
        var c = this.animators[f], p = c.targetName;
        c.getLoop() || c.__changeFinalValue(p ? (e || n)[p] : e || n);
      }
    u && this._transitionState(t, l, o);
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
      t.innerTransformable = new qh(), this._attachComponent(t), this._textContent = t, this.markRedraw();
    }
  }, r.prototype.setTextConfig = function(t) {
    this.textConfig || (this.textConfig = {}), B(this.textConfig, t), this.markRedraw();
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
    this.__dirty |= ve;
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
      Ur('Property "' + t + '" is not existed in element ' + this.id);
      return;
    }
    var a = new $h(i, e, n);
    return t && (a.targetName = t), this.addAnimator(a, t), a;
  }, r.prototype.addAnimator = function(t, e) {
    var n = this.__zr, i = this;
    t.during(function() {
      i.updateDuringAnimation(e);
    }).done(function() {
      var a = i.animators, o = vt(a, t);
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
    pu(this, t, e, n);
  }, r.prototype.animateFrom = function(t, e, n) {
    pu(this, t, e, n, !0);
  }, r.prototype._transitionState = function(t, e, n, i) {
    for (var a = pu(this, e, n, i), o = 0; o < a.length; o++)
      a[o].__fromStateTransition = t;
  }, r.prototype.getBoundingRect = function() {
    return null;
  }, r.prototype.getPaintRect = function() {
    return null;
  }, r.initDefaultProps = (function() {
    var t = r.prototype;
    t.type = "element", t.name = "", t.ignore = t.silent = t.isGroup = t.draggable = t.dragging = t.ignoreClip = t.__inHover = !1, t.__dirty = ve;
    var e = {};
    function n(a, o, s) {
      e[a + o + s] || (console.warn("DEPRECATED: '" + a + "' has been deprecated. use '" + o + "', '" + s + "' instead"), e[a + o + s] = !0);
    }
    function i(a, o, s, l) {
      Object.defineProperty(t, a, {
        get: function() {
          if (process.env.NODE_ENV !== "production" && n(a, s, l), !this[o]) {
            var f = this[o] = [];
            u(this, f);
          }
          return this[o];
        },
        set: function(f) {
          process.env.NODE_ENV !== "production" && n(a, s, l), this[s] = f[0], this[l] = f[1], this[o] = f, u(this, f);
        }
      });
      function u(f, h) {
        Object.defineProperty(h, 0, {
          get: function() {
            return f[s];
          },
          set: function(v) {
            f[s] = v;
          }
        }), Object.defineProperty(h, 1, {
          get: function() {
            return f[l];
          },
          set: function(v) {
            f[l] = v;
          }
        });
      }
    }
    Object.defineProperty && (i("position", "_legacyPos", "x", "y"), i("scale", "_legacyScale", "scaleX", "scaleY"), i("origin", "_legacyOrigin", "originX", "originY"));
  })(), r;
})();
Ie(ul, or);
Ie(ul, qh);
function pu(r, t, e, n, i) {
  e = e || {};
  var a = [];
  Ky(r, "", r, t, e, n, a, i);
  var o = a.length, s = !1, l = e.done, u = e.aborted, f = function() {
    s = !0, o--, o <= 0 && (s ? l && l() : u && u());
  }, h = function() {
    o--, o <= 0 && (s ? l && l() : u && u());
  };
  o || l && l(), a.length > 0 && e.during && a[0].during(function(p, d) {
    e.during(d);
  });
  for (var v = 0; v < a.length; v++) {
    var c = a[v];
    f && c.done(f), h && c.aborted(h), e.force && c.duration(e.duration), c.start(e.easing);
  }
  return a;
}
function du(r, t, e) {
  for (var n = 0; n < e; n++)
    r[n] = t[n];
}
function ow(r) {
  return re(r[0]);
}
function sw(r, t, e) {
  if (re(t[e]))
    if (re(r[e]) || (r[e] = []), qt(t[e])) {
      var n = t[e].length;
      r[e].length !== n && (r[e] = new t[e].constructor(n), du(r[e], t[e], n));
    } else {
      var i = t[e], a = r[e], o = i.length;
      if (ow(i))
        for (var s = i[0].length, l = 0; l < o; l++)
          a[l] ? du(a[l], i[l], s) : a[l] = Array.prototype.slice.call(i[l]);
      else
        du(a, i, o);
      a.length = i.length;
    }
  else
    r[e] = t[e];
}
function lw(r, t) {
  return r === t || re(r) && re(t) && uw(r, t);
}
function uw(r, t) {
  var e = r.length;
  if (e !== t.length)
    return !1;
  for (var n = 0; n < e; n++)
    if (r[n] !== t[n])
      return !1;
  return !0;
}
function Ky(r, t, e, n, i, a, o, s) {
  for (var l = gt(n), u = i.duration, f = i.delay, h = i.additive, v = i.setToFinal, c = !W(a), p = r.animators, d = [], g = 0; g < l.length; g++) {
    var y = l[g], m = n[y];
    if (m != null && e[y] != null && (c || a[y]))
      if (W(m) && !re(m) && !no(m)) {
        if (t) {
          s || (e[y] = m, r.updateDuringAnimation(t));
          continue;
        }
        Ky(r, y, e[y], m, i, a && a[y], o, s);
      } else
        d.push(y);
    else s || (e[y] = m, r.updateDuringAnimation(t), d.push(y));
  }
  var _ = d.length;
  if (!h && _)
    for (var S = 0; S < p.length; S++) {
      var w = p[S];
      if (w.targetName === t) {
        var b = w.stopTracks(d);
        if (b) {
          var x = vt(p, w);
          p.splice(x, 1);
        }
      }
    }
  if (i.force || (d = At(d, function(C) {
    return !lw(n[C], e[C]);
  }), _ = d.length), _ > 0 || i.force && !o.length) {
    var T = void 0, A = void 0, M = void 0;
    if (s) {
      A = {}, v && (T = {});
      for (var S = 0; S < _; S++) {
        var y = d[S];
        A[y] = e[y], v ? T[y] = n[y] : e[y] = n[y];
      }
    } else if (v) {
      M = {};
      for (var S = 0; S < _; S++) {
        var y = d[S];
        M[y] = hs(e[y]), sw(e, n, y);
      }
    }
    var w = new $h(e, !1, !1, h ? At(p, function(E) {
      return E.targetName === t;
    }) : null);
    w.targetName = t, i.scope && (w.scope = i.scope), v && T && w.whenWithKeys(0, T, d), M && w.whenWithKeys(0, M, d), w.whenWithKeys(u ?? 500, s ? A : n, d).delay(f || 0), r.addAnimator(w, t), o.push(w);
  }
}
var xt = (function(r) {
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
    var i = vt(this._children, e);
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
    var n = this.__zr, i = this._children, a = vt(i, e);
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
    for (var n = new lt(0, 0, 0, 0), i = e || this._children, a = [], o = null, s = 0; s < i.length; s++) {
      var l = i[s];
      if (!(l.ignore || l.invisible)) {
        var u = l.getBoundingRect(), f = l.getLocalTransform(a);
        f ? (lt.applyTransform(n, u, f), o = o || n.clone(), o.union(n)) : (o = o || u.clone(), o.union(u));
      }
    }
    return o || n;
  }, t;
})(ul);
xt.prototype.type = "group";
/*!
* ZRender, a high performance 2d drawing library.
*
* Copyright (c) 2013, Baidu Inc.
* All rights reserved.
*
* LICENSE
* https://github.com/ecomfe/zrender/blob/master/LICENSE.txt
*/
var ma = {}, xn = {};
function fw(r) {
  delete xn[r];
}
function hw(r) {
  if (!r)
    return !1;
  if (typeof r == "string")
    return Fa(r, 1) < Ff;
  if (r.colorStops) {
    for (var t = r.colorStops, e = 0, n = t.length, i = 0; i < n; i++)
      e += Fa(t[i].color, 1);
    return e /= n, e < Ff;
  }
  return !1;
}
var cw = (function() {
  function r(t, e, n) {
    var i = this;
    this._sleepAfterStill = 10, this._stillFrameAccum = 0, this._needsRefresh = !0, this._needsRefreshHover = !0, this._darkMode = !1, n = n || {}, this.dom = e, this.id = t;
    var a = new Cb(), o = n.renderer || "canvas";
    if (ma[o] || (o = gt(ma)[0]), process.env.NODE_ENV !== "production" && !ma[o])
      throw new Error("Renderer '" + o + "' is not imported. Please import it first.");
    n.useDirtyRect = n.useDirtyRect == null ? !1 : n.useDirtyRect;
    var s = new ma[o](e, a, n, t), l = n.ssr || s.ssrOnly;
    this.storage = a, this.painter = s;
    var u = !Z.node && !Z.worker && !l ? new ew(s.getViewportRoot(), s.root) : null, f = n.useCoarsePointer, h = f == null || f === "auto" ? Z.touchEventsSupported : !!f, v = 44, c;
    h && (c = Q(n.pointerSize, v)), this.handler = new Vy(a, s, u, s.root, c), this.animation = new qb({
      stage: {
        update: l ? null : function() {
          return i._flush(!0);
        }
      }
    }), l || this.animation.start();
  }
  return r.prototype.add = function(t) {
    this._disposed || !t || (this.storage.addRoot(t), t.addSelfToZr(this), this.refresh());
  }, r.prototype.remove = function(t) {
    this._disposed || !t || (this.storage.delRoot(t), t.removeSelfFromZr(this), this.refresh());
  }, r.prototype.configLayer = function(t, e) {
    this._disposed || (this.painter.configLayer && this.painter.configLayer(t, e), this.refresh());
  }, r.prototype.setBackgroundColor = function(t) {
    this._disposed || (this.painter.setBackgroundColor && this.painter.setBackgroundColor(t), this.refresh(), this._backgroundColor = t, this._darkMode = hw(t));
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
    var e, n = hi();
    this._needsRefresh && (e = !0, this.refreshImmediately(t)), this._needsRefreshHover && (e = !0, this.refreshHoverImmediately());
    var i = hi();
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
        t[e] instanceof xt && t[e].removeSelfFromZr(this);
      this.storage.delAllRoots(), this.painter.clear();
    }
  }, r.prototype.dispose = function() {
    this._disposed || (this.animation.stop(), this.clear(), this.storage.dispose(), this.painter.dispose(), this.handler.dispose(), this.animation = this.storage = this.painter = this.handler = null, this._disposed = !0, fw(this.id));
  }, r;
})();
function Wf(r, t) {
  var e = new cw(Bh(), r, t);
  return xn[e.id] = e, e;
}
function vw(r) {
  r.dispose();
}
function pw() {
  for (var r in xn)
    xn.hasOwnProperty(r) && xn[r].dispose();
  xn = {};
}
function dw(r) {
  return xn[r];
}
function Qy(r, t) {
  ma[r] = t;
}
var Uf;
function gw(r) {
  if (typeof Uf == "function")
    return Uf(r);
}
function Jy(r) {
  Uf = r;
}
var yw = "5.6.1";
const mw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  dispose: vw,
  disposeAll: pw,
  getElementSSRData: gw,
  getInstance: dw,
  init: Wf,
  registerPainter: Qy,
  registerSSRDataGetter: Jy,
  version: yw
}, Symbol.toStringTag, { value: "Module" }));
var Hv = 1e-4, tm = 20;
function _w(r) {
  return r.replace(/^\s+|\s+$/g, "");
}
function ge(r, t, e, n) {
  var i = t[0], a = t[1], o = e[0], s = e[1], l = a - i, u = s - o;
  if (l === 0)
    return u === 0 ? o : (o + s) / 2;
  if (n)
    if (l > 0) {
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
  return (r - i) / l * u + o;
}
function ct(r, t) {
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
  return U(r) ? _w(r).match(/%$/) ? parseFloat(r) / 100 * t : parseFloat(r) : r == null ? NaN : +r;
}
function Dt(r, t, e) {
  return t == null && (t = 10), t = Math.min(Math.max(0, t), tm), r = (+r).toFixed(t), e ? r : +r;
}
function Kh(r) {
  return r.sort(function(t, e) {
    return t - e;
  }), r;
}
function er(r) {
  if (r = +r, isNaN(r))
    return 0;
  if (r > 1e-14) {
    for (var t = 1, e = 0; e < 15; e++, t *= 10)
      if (Math.round(r * t) / t === r)
        return e;
  }
  return Rs(r);
}
function Rs(r) {
  var t = r.toString().toLowerCase(), e = t.indexOf("e"), n = e > 0 ? +t.slice(e + 1) : 0, i = e > 0 ? e : t.length, a = t.indexOf("."), o = a < 0 ? 0 : i - 1 - a;
  return Math.max(0, o - n);
}
function em(r, t) {
  var e = Math.log, n = Math.LN10, i = Math.floor(e(r[1] - r[0]) / n), a = Math.round(e(Math.abs(t[1] - t[0])) / n), o = Math.min(Math.max(-i + a, 0), 20);
  return isFinite(o) ? o : 20;
}
function Sw(r, t, e) {
  if (!r[t])
    return 0;
  var n = rm(r, e);
  return n[t] || 0;
}
function rm(r, t) {
  var e = nr(r, function(c, p) {
    return c + (isNaN(p) ? 0 : p);
  }, 0);
  if (e === 0)
    return [];
  for (var n = Math.pow(10, t), i = Y(r, function(c) {
    return (isNaN(c) ? 0 : c) / e * n * 100;
  }), a = n * 100, o = Y(i, function(c) {
    return Math.floor(c);
  }), s = nr(o, function(c, p) {
    return c + p;
  }, 0), l = Y(i, function(c, p) {
    return c - o[p];
  }); s < a; ) {
    for (var u = Number.NEGATIVE_INFINITY, f = null, h = 0, v = l.length; h < v; ++h)
      l[h] > u && (u = l[h], f = h);
    ++o[f], l[f] = 0, ++s;
  }
  return Y(o, function(c) {
    return c / n;
  });
}
function bw(r, t) {
  var e = Math.max(er(r), er(t)), n = r + t;
  return e > tm ? n : Dt(n, e);
}
var ww = 9007199254740991;
function Qh(r) {
  var t = Math.PI * 2;
  return (r % t + t) % t;
}
function Ga(r) {
  return r > -Hv && r < Hv;
}
var xw = /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d{1,2})(?::(\d{1,2})(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/;
function Ae(r) {
  if (r instanceof Date)
    return r;
  if (U(r)) {
    var t = xw.exec(r);
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
function nm(r) {
  return Math.pow(10, lo(r));
}
function lo(r) {
  if (r === 0)
    return 0;
  var t = Math.floor(Math.log(r) / Math.LN10);
  return r / Math.pow(10, t) >= 10 && t++, t;
}
function Jh(r, t) {
  var e = lo(r), n = Math.pow(10, e), i = r / n, a;
  return t ? i < 1.5 ? a = 1 : i < 2.5 ? a = 2 : i < 4 ? a = 3 : i < 7 ? a = 5 : a = 10 : i < 1 ? a = 1 : i < 2 ? a = 2 : i < 3 ? a = 3 : i < 5 ? a = 5 : a = 10, r = a * n, e >= -20 ? +r.toFixed(e < 0 ? -e : 0) : r;
}
function Tw(r, t) {
  var e = (r.length - 1) * t + 1, n = Math.floor(e), i = +r[n - 1], a = e - n;
  return a ? i + a * (r[n] - i) : i;
}
function Yf(r) {
  r.sort(function(l, u) {
    return s(l, u, 0) ? -1 : 1;
  });
  for (var t = -1 / 0, e = 1, n = 0; n < r.length; ) {
    for (var i = r[n].interval, a = r[n].close, o = 0; o < 2; o++)
      i[o] <= t && (i[o] = t, a[o] = o ? 1 : 1 - e), t = i[o], e = a[o];
    i[0] === i[1] && a[0] * a[1] !== 1 ? r.splice(n, 1) : n++;
  }
  return r;
  function s(l, u, f) {
    return l.interval[f] < u.interval[f] || l.interval[f] === u.interval[f] && (l.close[f] - u.close[f] === (f ? -1 : 1) || !f && s(l, u, 1));
  }
}
function Wa(r) {
  var t = parseFloat(r);
  return t == r && (t !== 0 || !U(r) || r.indexOf("x") <= 0) ? t : NaN;
}
function tc(r) {
  return !isNaN(Wa(r));
}
function im() {
  return Math.round(Math.random() * 9);
}
function am(r, t) {
  return t === 0 ? r : am(t, r % t);
}
function Gv(r, t) {
  return r == null ? t : t == null ? r : r * t / am(r, t);
}
var Cw = "[ECharts] ", Wv = {}, Dw = typeof console < "u" && console.warn && console.log;
function fl(r, t, e) {
  if (Dw) {
    if (e) {
      if (Wv[t])
        return;
      Wv[t] = !0;
    }
    console[r](Cw + t);
  }
}
function Mw(r, t) {
  fl("log", r, t);
}
function Vt(r, t) {
  fl("warn", r, t);
}
function Zt(r, t) {
  fl("error", r, t);
}
function We(r) {
  process.env.NODE_ENV !== "production" && fl("warn", "DEPRECATED: " + r, !0);
}
function Et(r, t, e) {
  process.env.NODE_ENV !== "production" && We((e ? "[" + e + "]" : "") + (r + " is deprecated, use " + t + " instead."));
}
function Ns() {
  for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t];
  var e = "";
  if (process.env.NODE_ENV !== "production") {
    var n = function(i) {
      return i === void 0 ? "undefined" : i === 1 / 0 ? "Infinity" : i === -1 / 0 ? "-Infinity" : bi(i) ? "NaN" : i instanceof Date ? "Date(" + i.toISOString() + ")" : $(i) ? "function () { ... }" : Ty(i) ? i + "" : null;
    };
    e = Y(r, function(i) {
      if (U(i))
        return i;
      var a = n(i);
      if (a != null)
        return a;
      if (typeof JSON < "u" && JSON.stringify)
        try {
          return JSON.stringify(i, function(o, s) {
            var l = n(s);
            return l ?? s;
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
function se(r) {
  throw new Error(r);
}
function Uv(r, t, e) {
  return (t - r) * e + r;
}
var om = "series\0", Aw = "\0_ec_\0";
function Bt(r) {
  return r instanceof Array ? r : r == null ? [] : [r];
}
function ks(r, t, e) {
  if (r) {
    r[t] = r[t] || {}, r.emphasis = r.emphasis || {}, r.emphasis[t] = r.emphasis[t] || {};
    for (var n = 0, i = e.length; n < i; n++) {
      var a = e[n];
      !r.emphasis[t].hasOwnProperty(a) && r[t].hasOwnProperty(a) && (r.emphasis[t][a] = r[t][a]);
    }
  }
}
var Yv = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "rich", "tag", "color", "textBorderColor", "textBorderWidth", "width", "height", "lineHeight", "align", "verticalAlign", "baseline", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY", "backgroundColor", "borderColor", "borderWidth", "borderRadius", "padding"];
function uo(r) {
  return W(r) && !H(r) && !(r instanceof Date) ? r.value : r;
}
function Ew(r) {
  return W(r) && !(r instanceof Array);
}
function Iw(r, t, e) {
  var n = e === "normalMerge", i = e === "replaceMerge", a = e === "replaceAll";
  r = r || [], t = (t || []).slice();
  var o = et();
  D(t, function(l, u) {
    if (!W(l)) {
      t[u] = null;
      return;
    }
    process.env.NODE_ENV !== "production" && (l.id != null && !$v(l.id) && Xv(l.id), l.name != null && !$v(l.name) && Xv(l.name));
  });
  var s = Lw(r, o, e);
  return (n || i) && Pw(s, r, o, t), n && Ow(s, t), n || i ? Rw(s, t, i) : a && Nw(s, t), kw(s), s;
}
function Lw(r, t, e) {
  var n = [];
  if (e === "replaceAll")
    return n;
  for (var i = 0; i < r.length; i++) {
    var a = r[i];
    a && a.id != null && t.set(a.id, i), n.push({
      existing: e === "replaceMerge" || wi(a) ? null : a,
      newOption: null,
      keyInfo: null,
      brandNew: null
    });
  }
  return n;
}
function Pw(r, t, e, n) {
  D(n, function(i, a) {
    if (!(!i || i.id == null)) {
      var o = Da(i.id), s = e.get(o);
      if (s != null) {
        var l = r[s];
        tt(!l.newOption, 'Duplicated option on id "' + o + '".'), l.newOption = i, l.existing = t[s], n[a] = null;
      }
    }
  });
}
function Ow(r, t) {
  D(t, function(e, n) {
    if (!(!e || e.name == null))
      for (var i = 0; i < r.length; i++) {
        var a = r[i].existing;
        if (!r[i].newOption && a && (a.id == null || e.id == null) && !wi(e) && !wi(a) && sm("name", a, e)) {
          r[i].newOption = e, t[n] = null;
          return;
        }
      }
  });
}
function Rw(r, t, e) {
  D(t, function(n) {
    if (n) {
      for (
        var i, a = 0;
        // Be `!resultItem` only when `nextIdx >= result.length`.
        (i = r[a]) && (i.newOption || wi(i.existing) || // In mode "replaceMerge", here no not-mapped-non-internal-existing.
        i.existing && n.id != null && !sm("id", n, i.existing));
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
function Nw(r, t) {
  D(t, function(e) {
    r.push({
      newOption: e,
      brandNew: !0,
      existing: null,
      keyInfo: null
    });
  });
}
function kw(r) {
  var t = et();
  D(r, function(e) {
    var n = e.existing;
    n && t.set(n.id, e);
  }), D(r, function(e) {
    var n = e.newOption;
    tt(!n || n.id == null || !t.get(n.id) || t.get(n.id) === e, "id duplicates: " + (n && n.id)), n && n.id != null && t.set(n.id, e), !e.keyInfo && (e.keyInfo = {});
  }), D(r, function(e, n) {
    var i = e.existing, a = e.newOption, o = e.keyInfo;
    if (W(a)) {
      if (o.name = a.name != null ? Da(a.name) : i ? i.name : om + n, i)
        o.id = Da(i.id);
      else if (a.id != null)
        o.id = Da(a.id);
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
function sm(r, t, e) {
  var n = He(t[r], null), i = He(e[r], null);
  return n != null && i != null && n === i;
}
function Da(r) {
  if (process.env.NODE_ENV !== "production" && r == null)
    throw new Error();
  return He(r, "");
}
function He(r, t) {
  return r == null ? t : U(r) ? r : dt(r) || Va(r) ? r + "" : t;
}
function Xv(r) {
  process.env.NODE_ENV !== "production" && Vt("`" + r + "` is invalid id or name. Must be a string or number.");
}
function $v(r) {
  return Va(r) || tc(r);
}
function ec(r) {
  var t = r.name;
  return !!(t && t.indexOf(om));
}
function wi(r) {
  return r && r.id != null && Da(r.id).indexOf(Aw) === 0;
}
function Vw(r, t, e) {
  D(r, function(n) {
    var i = n.newOption;
    W(i) && (n.keyInfo.mainType = t, n.keyInfo.subType = Bw(t, i, n.existing, e));
  });
}
function Bw(r, t, e, n) {
  var i = t.type ? t.type : e ? e.subType : n.determineSubType(r, t);
  return i;
}
function zw(r, t) {
  var e = {}, n = {};
  return i(r || [], e), i(t || [], n, e), [a(e), a(n)];
  function i(o, s, l) {
    for (var u = 0, f = o.length; u < f; u++) {
      var h = He(o[u].seriesId, null);
      if (h == null)
        return;
      for (var v = Bt(o[u].dataIndex), c = l && l[h], p = 0, d = v.length; p < d; p++) {
        var g = v[p];
        c && c[g] ? c[g] = null : (s[h] || (s[h] = {}))[g] = 1;
      }
    }
  }
  function a(o, s) {
    var l = [];
    for (var u in o)
      if (o.hasOwnProperty(u) && o[u] != null)
        if (s)
          l.push(+u);
        else {
          var f = a(o[u], !0);
          f.length && l.push({
            seriesId: u,
            dataIndex: f
          });
        }
    return l;
  }
}
function Nn(r, t) {
  if (t.dataIndexInside != null)
    return t.dataIndexInside;
  if (t.dataIndex != null)
    return H(t.dataIndex) ? Y(t.dataIndex, function(e) {
      return r.indexOfRawIndex(e);
    }) : r.indexOfRawIndex(t.dataIndex);
  if (t.name != null)
    return H(t.name) ? Y(t.name, function(e) {
      return r.indexOfName(e);
    }) : r.indexOfName(t.name);
}
function Mt() {
  var r = "__ec_inner_" + Fw++;
  return function(t) {
    return t[r] || (t[r] = {});
  };
}
var Fw = im();
function gu(r, t, e) {
  var n = rc(t, e), i = n.mainTypeSpecified, a = n.queryOptionMap, o = n.others, s = o, l = e ? e.defaultMainType : null;
  return !i && l && a.set(l, {}), a.each(function(u, f) {
    var h = fo(r, f, u, {
      useDefault: l === f,
      enableAll: e && e.enableAll != null ? e.enableAll : !0,
      enableNone: e && e.enableNone != null ? e.enableNone : !0
    });
    s[f + "Models"] = h.models, s[f + "Model"] = h.models[0];
  }), s;
}
function rc(r, t) {
  var e;
  if (U(r)) {
    var n = {};
    n[r + "Index"] = 0, e = n;
  } else
    e = r;
  var i = et(), a = {}, o = !1;
  return D(e, function(s, l) {
    if (l === "dataIndex" || l === "dataIndexInside") {
      a[l] = s;
      return;
    }
    var u = l.match(/^(\w+)(Index|Id|Name)$/) || [], f = u[1], h = (u[2] || "").toLowerCase();
    if (!(!f || !h || t && t.includeMainTypes && vt(t.includeMainTypes, f) < 0)) {
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
var Be = {
  useDefault: !0,
  enableAll: !1,
  enableNone: !1
};
function fo(r, t, e, n) {
  n = n || Be;
  var i = e.index, a = e.id, o = e.name, s = {
    models: null,
    specified: i != null || a != null || o != null
  };
  if (!s.specified) {
    var l = void 0;
    return s.models = n.useDefault && (l = r.getComponent(t)) ? [l] : [], s;
  }
  return i === "none" || i === !1 ? (tt(n.enableNone, '`"none"` or `false` is not a valid value on index option.'), s.models = [], s) : (i === "all" && (tt(n.enableAll, '`"all"` is not a valid value on index option.'), i = a = o = null), s.models = r.queryComponents({
    mainType: t,
    index: i,
    id: a,
    name: o
  }), s);
}
function lm(r, t, e) {
  r.setAttribute ? r.setAttribute(t, e) : r[t] = e;
}
function Hw(r, t) {
  return r.getAttribute ? r.getAttribute(t) : r[t];
}
function Gw(r) {
  return r === "auto" ? Z.domSupported ? "html" : "richText" : r || "html";
}
function Ww(r, t, e, n, i) {
  var a = t == null || t === "auto";
  if (n == null)
    return n;
  if (dt(n)) {
    var o = Uv(e || 0, n, i);
    return Dt(o, a ? Math.max(er(e || 0), er(n)) : t);
  } else {
    if (U(n))
      return i < 1 ? e : n;
    for (var s = [], l = e, u = n, f = Math.max(l ? l.length : 0, u.length), h = 0; h < f; ++h) {
      var v = r.getDimensionInfo(h);
      if (v && v.type === "ordinal")
        s[h] = (i < 1 && l ? l : u)[h];
      else {
        var c = l && l[h] ? l[h] : 0, p = u[h], o = Uv(c, p, i);
        s[h] = Dt(o, a ? Math.max(er(c), er(p)) : t);
      }
    }
    return s;
  }
}
var Uw = ".", on = "___EC__COMPONENT__CONTAINER___", um = "___EC__EXTENDED_CLASS___";
function rr(r) {
  var t = {
    main: "",
    sub: ""
  };
  if (r) {
    var e = r.split(Uw);
    t.main = e[0] || "", t.sub = e[1] || "";
  }
  return t;
}
function Yw(r) {
  tt(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(r), 'componentType "' + r + '" illegal');
}
function Xw(r) {
  return !!(r && r[um]);
}
function nc(r, t) {
  r.$constructor = r, r.extend = function(e) {
    process.env.NODE_ENV !== "production" && D(t, function(a) {
      e[a] || console.warn("Method `" + a + "` should be implemented" + (e.type ? " in " + e.type : "") + ".");
    });
    var n = this, i;
    return $w(n) ? i = /** @class */
    (function(a) {
      z(o, a);
      function o() {
        return a.apply(this, arguments) || this;
      }
      return o;
    })(n) : (i = function() {
      (e.$constructor || n).apply(this, arguments);
    }, zh(i, this)), B(i.prototype, e), i[um] = !0, i.extend = this.extend, i.superCall = jw, i.superApply = Kw, i.superClass = n, i;
  };
}
function $w(r) {
  return $(r) && /^class\s/.test(Function.prototype.toString.call(r));
}
function fm(r, t) {
  r.extend = t.extend;
}
var qw = Math.round(Math.random() * 10);
function Zw(r) {
  var t = ["__\0is_clz", qw++].join("_");
  r.prototype[t] = !0, process.env.NODE_ENV !== "production" && tt(!r.isInstance, 'The method "is" can not be defined.'), r.isInstance = function(e) {
    return !!(e && e[t]);
  };
}
function jw(r, t) {
  for (var e = [], n = 2; n < arguments.length; n++)
    e[n - 2] = arguments[n];
  return this.superClass.prototype[t].apply(r, e);
}
function Kw(r, t, e) {
  return this.superClass.prototype[t].apply(r, e);
}
function hl(r) {
  var t = {};
  r.registerClass = function(n) {
    var i = n.type || n.prototype.type;
    if (i) {
      Yw(i), n.prototype.type = i;
      var a = rr(i);
      if (!a.sub)
        process.env.NODE_ENV !== "production" && t[a.main] && console.warn(a.main + " exists."), t[a.main] = n;
      else if (a.sub !== on) {
        var o = e(a);
        o[a.sub] = n;
      }
    }
    return n;
  }, r.getClass = function(n, i, a) {
    var o = t[n];
    if (o && o[on] && (o = i ? o[i] : null), a && !o)
      throw new Error(i ? "Component " + n + "." + (i || "") + " is used but not imported." : n + ".type should be specified.");
    return o;
  }, r.getClassesByMainType = function(n) {
    var i = rr(n), a = [], o = t[i.main];
    return o && o[on] ? D(o, function(s, l) {
      l !== on && a.push(s);
    }) : a.push(o), a;
  }, r.hasClass = function(n) {
    var i = rr(n);
    return !!t[i.main];
  }, r.getAllClassMainTypes = function() {
    var n = [];
    return D(t, function(i, a) {
      n.push(a);
    }), n;
  }, r.hasSubTypes = function(n) {
    var i = rr(n), a = t[i.main];
    return a && a[on];
  };
  function e(n) {
    var i = t[n.main];
    return (!i || !i[on]) && (i = t[n.main] = {}, i[on] = !0), i;
  }
}
function Ua(r, t) {
  for (var e = 0; e < r.length; e++)
    r[e][1] || (r[e][1] = r[e][0]);
  return t = t || !1, function(n, i, a) {
    for (var o = {}, s = 0; s < r.length; s++) {
      var l = r[s][1];
      if (!(i && vt(i, l) >= 0 || a && vt(a, l) < 0)) {
        var u = n.getShallow(l, t);
        u != null && (o[r[s][0]] = u);
      }
    }
    return o;
  };
}
var Qw = [
  ["fill", "color"],
  ["shadowBlur"],
  ["shadowOffsetX"],
  ["shadowOffsetY"],
  ["opacity"],
  ["shadowColor"]
  // Option decal is in `DecalObject` but style.decal is in `PatternObject`.
  // So do not transfer decal directly.
], Jw = Ua(Qw), tx = (
  /** @class */
  (function() {
    function r() {
    }
    return r.prototype.getAreaStyle = function(t, e) {
      return Jw(this, t, e);
    }, r;
  })()
), Xf = new so(50);
function ex(r) {
  if (typeof r == "string") {
    var t = Xf.get(r);
    return t && t.image;
  } else
    return r;
}
function hm(r, t, e, n, i) {
  if (r)
    if (typeof r == "string") {
      if (t && t.__zrImageSrc === r || !e)
        return t;
      var a = Xf.get(r), o = { hostEl: e, cb: n, cbPayload: i };
      return a ? (t = a.image, !cl(t) && a.pending.push(o)) : (t = Ge.loadImage(r, qv, qv), t.__zrImageSrc = r, Xf.put(r, t.__cachedImgObj = {
        image: t,
        pending: [o]
      })), t;
    } else
      return r;
  else return t;
}
function qv() {
  var r = this.__cachedImgObj;
  this.onload = this.onerror = this.__cachedImgObj = null;
  for (var t = 0; t < r.pending.length; t++) {
    var e = r.pending[t], n = e.cb;
    n && n(this, e.cbPayload), e.hostEl.dirty();
  }
  r.pending.length = 0;
}
function cl(r) {
  return r && r.width && r.height;
}
var yu = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g;
function rx(r, t, e, n, i) {
  var a = {};
  return cm(a, r, t, e, n, i), a.text;
}
function cm(r, t, e, n, i, a) {
  if (!e) {
    r.text = "", r.isTruncated = !1;
    return;
  }
  var o = (t + "").split(`
`);
  a = vm(e, n, i, a);
  for (var s = !1, l = {}, u = 0, f = o.length; u < f; u++)
    pm(l, o[u], a), o[u] = l.textLine, s = s || l.isTruncated;
  r.text = o.join(`
`), r.isTruncated = s;
}
function vm(r, t, e, n) {
  n = n || {};
  var i = B({}, n);
  i.font = t, e = Q(e, "..."), i.maxIterations = Q(n.maxIterations, 2);
  var a = i.minChar = Q(n.minChar, 0);
  i.cnCharWidth = pe("国", t);
  var o = i.ascCharWidth = pe("a", t);
  i.placeholder = Q(n.placeholder, "");
  for (var s = r = Math.max(0, r - 1), l = 0; l < a && s >= o; l++)
    s -= o;
  var u = pe(e, t);
  return u > s && (e = "", u = 0), s = r - u, i.ellipsis = e, i.ellipsisWidth = u, i.contentWidth = s, i.containerWidth = r, i;
}
function pm(r, t, e) {
  var n = e.containerWidth, i = e.font, a = e.contentWidth;
  if (!n) {
    r.textLine = "", r.isTruncated = !1;
    return;
  }
  var o = pe(t, i);
  if (o <= n) {
    r.textLine = t, r.isTruncated = !1;
    return;
  }
  for (var s = 0; ; s++) {
    if (o <= a || s >= e.maxIterations) {
      t += e.ellipsis;
      break;
    }
    var l = s === 0 ? nx(t, a, e.ascCharWidth, e.cnCharWidth) : o > 0 ? Math.floor(t.length * a / o) : 0;
    t = t.substr(0, l), o = pe(t, i);
  }
  t === "" && (t = e.placeholder), r.textLine = t, r.isTruncated = !0;
}
function nx(r, t, e, n) {
  for (var i = 0, a = 0, o = r.length; a < o && i < t; a++) {
    var s = r.charCodeAt(a);
    i += 0 <= s && s <= 127 ? e : n;
  }
  return a;
}
function ix(r, t) {
  r != null && (r += "");
  var e = t.overflow, n = t.padding, i = t.font, a = e === "truncate", o = jh(i), s = Q(t.lineHeight, o), l = !!t.backgroundColor, u = t.lineOverflow === "truncate", f = !1, h = t.width, v;
  h != null && (e === "break" || e === "breakAll") ? v = r ? dm(r, t.font, h, e === "breakAll", 0).lines : [] : v = r ? r.split(`
`) : [];
  var c = v.length * s, p = Q(t.height, c);
  if (c > p && u) {
    var d = Math.floor(p / s);
    f = f || v.length > d, v = v.slice(0, d);
  }
  if (r && a && h != null)
    for (var g = vm(h, i, t.ellipsis, {
      minChar: t.truncateMinChar,
      placeholder: t.placeholder
    }), y = {}, m = 0; m < v.length; m++)
      pm(y, v[m], g), v[m] = y.textLine, f = f || y.isTruncated;
  for (var _ = p, S = 0, m = 0; m < v.length; m++)
    S = Math.max(pe(v[m], i), S);
  h == null && (h = S);
  var w = S;
  return n && (_ += n[0] + n[2], w += n[1] + n[3], h += n[1] + n[3]), l && (w = h), {
    lines: v,
    height: p,
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
var ax = /* @__PURE__ */ (function() {
  function r() {
  }
  return r;
})(), Zv = /* @__PURE__ */ (function() {
  function r(t) {
    this.tokens = [], t && (this.tokens = t);
  }
  return r;
})(), ox = /* @__PURE__ */ (function() {
  function r() {
    this.width = 0, this.height = 0, this.contentWidth = 0, this.contentHeight = 0, this.outerWidth = 0, this.outerHeight = 0, this.lines = [], this.isTruncated = !1;
  }
  return r;
})();
function sx(r, t) {
  var e = new ox();
  if (r != null && (r += ""), !r)
    return e;
  for (var n = t.width, i = t.height, a = t.overflow, o = (a === "break" || a === "breakAll") && n != null ? { width: n, accumWidth: 0, breakAll: a === "breakAll" } : null, s = yu.lastIndex = 0, l; (l = yu.exec(r)) != null; ) {
    var u = l.index;
    u > s && mu(e, r.substring(s, u), t, o), mu(e, l[2], t, o, l[1]), s = yu.lastIndex;
  }
  s < r.length && mu(e, r.substring(s, r.length), t, o);
  var f = [], h = 0, v = 0, c = t.padding, p = a === "truncate", d = t.lineOverflow === "truncate", g = {};
  function y(L, k, G) {
    L.width = k, L.lineHeight = G, h += G, v = Math.max(v, k);
  }
  t: for (var m = 0; m < e.lines.length; m++) {
    for (var _ = e.lines[m], S = 0, w = 0, b = 0; b < _.tokens.length; b++) {
      var x = _.tokens[b], T = x.styleName && t.rich[x.styleName] || {}, A = x.textPadding = T.padding, M = A ? A[1] + A[3] : 0, C = x.font = T.font || t.font;
      x.contentHeight = jh(C);
      var E = Q(T.height, x.contentHeight);
      if (x.innerHeight = E, A && (E += A[0] + A[2]), x.height = E, x.lineHeight = Yr(T.lineHeight, t.lineHeight, E), x.align = T && T.align || t.align, x.verticalAlign = T && T.verticalAlign || "middle", d && i != null && h + x.lineHeight > i) {
        var I = e.lines.length;
        b > 0 ? (_.tokens = _.tokens.slice(0, b), y(_, w, S), e.lines = e.lines.slice(0, m + 1)) : e.lines = e.lines.slice(0, m), e.isTruncated = e.isTruncated || e.lines.length < I;
        break t;
      }
      var P = T.width, O = P == null || P === "auto";
      if (typeof P == "string" && P.charAt(P.length - 1) === "%")
        x.percentWidth = P, f.push(x), x.contentWidth = pe(x.text, C);
      else {
        if (O) {
          var R = T.backgroundColor, F = R && R.image;
          F && (F = ex(F), cl(F) && (x.width = Math.max(x.width, F.width * E / F.height)));
        }
        var N = p && n != null ? n - w : null;
        N != null && N < x.width ? !O || N < M ? (x.text = "", x.width = x.contentWidth = 0) : (cm(g, x.text, N - M, C, t.ellipsis, { minChar: t.truncateMinChar }), x.text = g.text, e.isTruncated = e.isTruncated || g.isTruncated, x.width = x.contentWidth = pe(x.text, C)) : x.contentWidth = pe(x.text, C);
      }
      x.width += M, w += x.width, T && (S = Math.max(S, x.lineHeight));
    }
    y(_, w, S);
  }
  e.outerWidth = e.width = Q(n, v), e.outerHeight = e.height = Q(i, h), e.contentHeight = h, e.contentWidth = v, c && (e.outerWidth += c[1] + c[3], e.outerHeight += c[0] + c[2]);
  for (var m = 0; m < f.length; m++) {
    var x = f[m], V = x.percentWidth;
    x.width = parseInt(V, 10) / 100 * e.width;
  }
  return e;
}
function mu(r, t, e, n, i) {
  var a = t === "", o = i && e.rich[i] || {}, s = r.lines, l = o.font || e.font, u = !1, f, h;
  if (n) {
    var v = o.padding, c = v ? v[1] + v[3] : 0;
    if (o.width != null && o.width !== "auto") {
      var p = ir(o.width, n.width) + c;
      s.length > 0 && p + n.accumWidth > n.width && (f = t.split(`
`), u = !0), n.accumWidth = p;
    } else {
      var d = dm(t, l, n.width, n.breakAll, n.accumWidth);
      n.accumWidth = d.accumWidth + c, h = d.linesWidths, f = d.lines;
    }
  } else
    f = t.split(`
`);
  for (var g = 0; g < f.length; g++) {
    var y = f[g], m = new ax();
    if (m.styleName = i, m.text = y, m.isLineHolder = !y && !a, typeof o.width == "number" ? m.width = o.width : m.width = h ? h[g] : pe(y, l), !g && !u) {
      var _ = (s[s.length - 1] || (s[0] = new Zv())).tokens, S = _.length;
      S === 1 && _[0].isLineHolder ? _[0] = m : (y || !S || a) && _.push(m);
    } else
      s.push(new Zv([m]));
  }
}
function lx(r) {
  var t = r.charCodeAt(0);
  return t >= 32 && t <= 591 || t >= 880 && t <= 4351 || t >= 4608 && t <= 5119 || t >= 7680 && t <= 8303;
}
var ux = nr(",&?/;] ".split(""), function(r, t) {
  return r[t] = !0, r;
}, {});
function fx(r) {
  return lx(r) ? !!ux[r] : !0;
}
function dm(r, t, e, n, i) {
  for (var a = [], o = [], s = "", l = "", u = 0, f = 0, h = 0; h < r.length; h++) {
    var v = r.charAt(h);
    if (v === `
`) {
      l && (s += l, f += u), a.push(s), o.push(f), s = "", l = "", u = 0, f = 0;
      continue;
    }
    var c = pe(v, t), p = n ? !1 : !fx(v);
    if (a.length ? f + c > e : i + f + c > e) {
      f ? (s || l) && (p ? (s || (s = l, l = "", u = 0, f = u), a.push(s), o.push(f - u), l += v, u += c, s = "", f = u) : (l && (s += l, l = "", u = 0), a.push(s), o.push(f), s = v, f = c)) : p ? (a.push(l), o.push(u), l = v, u = c) : (a.push(v), o.push(c));
      continue;
    }
    f += c, p ? (l += v, u += c) : (l && (s += l, l = "", u = 0), s += v);
  }
  return !a.length && !s && (s = r, l = "", u = 0), l && (s += l), s && (a.push(s), o.push(f)), a.length === 1 && (f += i), {
    accumWidth: f,
    lines: a,
    linesWidths: o
  };
}
var $f = "__zr_style_" + Math.round(Math.random() * 10), En = {
  shadowBlur: 0,
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  shadowColor: "#000",
  opacity: 1,
  blend: "source-over"
}, vl = {
  style: {
    shadowBlur: !0,
    shadowOffsetX: !0,
    shadowOffsetY: !0,
    shadowColor: !0,
    opacity: !0
  }
};
En[$f] = !0;
var jv = ["z", "z2", "invisible"], hx = ["invisible"], ho = (function(r) {
  z(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype._init = function(e) {
    for (var n = gt(e), i = 0; i < n.length; i++) {
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
    if (this.ignore || this.invisible || this.style.opacity === 0 || this.culling && cx(this, e, n) || o && !o[0] && !o[3])
      return !1;
    if (i && this.__clipPaths) {
      for (var s = 0; s < this.__clipPaths.length; ++s)
        if (this.__clipPaths[s].isZeroArea())
          return !1;
    }
    if (a && this.parent)
      for (var l = this.parent; l; ) {
        if (l.ignore)
          return !1;
        l = l.parent;
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
      var n = this.transform, i = this.getBoundingRect(), a = this.style, o = a.shadowBlur || 0, s = a.shadowOffsetX || 0, l = a.shadowOffsetY || 0;
      e = this._paintRect || (this._paintRect = new lt(0, 0, 0, 0)), n ? lt.applyTransform(e, i, n) : e.copy(i), (o || s || l) && (e.width += o * 2 + Math.abs(s), e.height += o * 2 + Math.abs(l), e.x = Math.min(e.x, e.x + s - o), e.y = Math.min(e.y, e.y + l - o));
      var u = this.dirtyRectTolerance;
      e.isZero() || (e.x = Math.floor(e.x - u), e.y = Math.floor(e.y - u), e.width = Math.ceil(e.width + 1 + u * 2), e.height = Math.ceil(e.height + 1 + u * 2));
    }
    return e;
  }, t.prototype.setPrevPaintRect = function(e) {
    e ? (this._prevPaintRect = this._prevPaintRect || new lt(0, 0, 0, 0), this._prevPaintRect.copy(e)) : this._prevPaintRect = null;
  }, t.prototype.getPrevPaintRect = function() {
    return this._prevPaintRect;
  }, t.prototype.animateStyle = function(e) {
    return this.animate("style", e);
  }, t.prototype.updateDuringAnimation = function(e) {
    e === "style" ? this.dirtyStyle() : this.markRedraw();
  }, t.prototype.attrKV = function(e, n) {
    e !== "style" ? r.prototype.attrKV.call(this, e, n) : this.style ? this.setStyle(n) : this.useStyle(n);
  }, t.prototype.setStyle = function(e, n) {
    return typeof e == "string" ? this.style[e] = n : B(this.style, e), this.dirtyStyle(), this;
  }, t.prototype.dirtyStyle = function(e) {
    e || this.markRedraw(), this.__dirty |= da, this._rect && (this._rect = null);
  }, t.prototype.dirty = function() {
    this.dirtyStyle();
  }, t.prototype.styleChanged = function() {
    return !!(this.__dirty & da);
  }, t.prototype.styleUpdated = function() {
    this.__dirty &= ~da;
  }, t.prototype.createStyle = function(e) {
    return io(En, e);
  }, t.prototype.useStyle = function(e) {
    e[$f] || (e = this.createStyle(e)), this.__inHover ? this.__hoverStyle = e : this.style = e, this.dirtyStyle();
  }, t.prototype.isStyleObject = function(e) {
    return e[$f];
  }, t.prototype._innerSaveToNormal = function(e) {
    r.prototype._innerSaveToNormal.call(this, e);
    var n = this._normalState;
    e.style && !n.style && (n.style = this._mergeStyle(this.createStyle(), this.style)), this._savePrimaryToNormal(e, n, jv);
  }, t.prototype._applyStateObj = function(e, n, i, a, o, s) {
    r.prototype._applyStateObj.call(this, e, n, i, a, o, s);
    var l = !(n && a), u;
    if (n && n.style ? o ? a ? u = n.style : (u = this._mergeStyle(this.createStyle(), i.style), this._mergeStyle(u, n.style)) : (u = this._mergeStyle(this.createStyle(), a ? this.style : i.style), this._mergeStyle(u, n.style)) : l && (u = i.style), u)
      if (o) {
        var f = this.style;
        if (this.style = this.createStyle(l ? {} : f), l)
          for (var h = gt(f), v = 0; v < h.length; v++) {
            var c = h[v];
            c in u && (u[c] = u[c], this.style[c] = f[c]);
          }
        for (var p = gt(u), v = 0; v < p.length; v++) {
          var c = p[v];
          this.style[c] = this.style[c];
        }
        this._transitionState(e, {
          style: u
        }, s, this.getAnimationStyleProps());
      } else
        this.useStyle(u);
    for (var d = this.__inHover ? hx : jv, v = 0; v < d.length; v++) {
      var c = d[v];
      n && n[c] != null ? this[c] = n[c] : l && i[c] != null && (this[c] = i[c]);
    }
  }, t.prototype._mergeStates = function(e) {
    for (var n = r.prototype._mergeStates.call(this, e), i, a = 0; a < e.length; a++) {
      var o = e[a];
      o.style && (i = i || {}, this._mergeStyle(i, o.style));
    }
    return i && (n.style = i), n;
  }, t.prototype._mergeStyle = function(e, n) {
    return B(e, n), e;
  }, t.prototype.getAnimationStyleProps = function() {
    return vl;
  }, t.initDefaultProps = (function() {
    var e = t.prototype;
    e.type = "displayable", e.invisible = !1, e.z = 0, e.z2 = 0, e.zlevel = 0, e.culling = !1, e.cursor = "pointer", e.rectHover = !1, e.incremental = !1, e._rect = null, e.dirtyRectTolerance = 0, e.__dirty = ve | da;
  })(), t;
})(ul), _u = new lt(0, 0, 0, 0), Su = new lt(0, 0, 0, 0);
function cx(r, t, e) {
  return _u.copy(r.getBoundingRect()), r.transform && _u.applyTransform(r.transform), Su.width = t, Su.height = e, !_u.intersect(Su);
}
var Ce = Math.min, De = Math.max, bu = Math.sin, wu = Math.cos, sn = Math.PI * 2, Eo = Fn(), Io = Fn(), Lo = Fn();
function Kv(r, t, e, n, i, a) {
  i[0] = Ce(r, e), i[1] = Ce(t, n), a[0] = De(r, e), a[1] = De(t, n);
}
var Qv = [], Jv = [];
function vx(r, t, e, n, i, a, o, s, l, u) {
  var f = Gy, h = kt, v = f(r, e, i, o, Qv);
  l[0] = 1 / 0, l[1] = 1 / 0, u[0] = -1 / 0, u[1] = -1 / 0;
  for (var c = 0; c < v; c++) {
    var p = h(r, e, i, o, Qv[c]);
    l[0] = Ce(p, l[0]), u[0] = De(p, u[0]);
  }
  v = f(t, n, a, s, Jv);
  for (var c = 0; c < v; c++) {
    var d = h(t, n, a, s, Jv[c]);
    l[1] = Ce(d, l[1]), u[1] = De(d, u[1]);
  }
  l[0] = Ce(r, l[0]), u[0] = De(r, u[0]), l[0] = Ce(o, l[0]), u[0] = De(o, u[0]), l[1] = Ce(t, l[1]), u[1] = De(t, u[1]), l[1] = Ce(s, l[1]), u[1] = De(s, u[1]);
}
function px(r, t, e, n, i, a, o, s) {
  var l = Wy, u = oe, f = De(Ce(l(r, e, i), 1), 0), h = De(Ce(l(t, n, a), 1), 0), v = u(r, e, i, f), c = u(t, n, a, h);
  o[0] = Ce(r, i, v), o[1] = Ce(t, a, c), s[0] = De(r, i, v), s[1] = De(t, a, c);
}
function dx(r, t, e, n, i, a, o, s, l) {
  var u = Vr, f = Br, h = Math.abs(i - a);
  if (h % sn < 1e-4 && h > 1e-4) {
    s[0] = r - e, s[1] = t - n, l[0] = r + e, l[1] = t + n;
    return;
  }
  if (Eo[0] = wu(i) * e + r, Eo[1] = bu(i) * n + t, Io[0] = wu(a) * e + r, Io[1] = bu(a) * n + t, u(s, Eo, Io), f(l, Eo, Io), i = i % sn, i < 0 && (i = i + sn), a = a % sn, a < 0 && (a = a + sn), i > a && !o ? a += sn : i < a && o && (i += sn), o) {
    var v = a;
    a = i, i = v;
  }
  for (var c = 0; c < a; c += Math.PI / 2)
    c > i && (Lo[0] = wu(c) * e + r, Lo[1] = bu(c) * n + t, u(s, Lo, s), f(l, Lo, l));
}
var ht = {
  M: 1,
  L: 2,
  C: 3,
  Q: 4,
  A: 5,
  Z: 6,
  R: 7
}, ln = [], un = [], qe = [], Mr = [], Ze = [], je = [], xu = Math.min, Tu = Math.max, fn = Math.cos, hn = Math.sin, vr = Math.abs, qf = Math.PI, Nr = qf * 2, Cu = typeof Float32Array < "u", Ji = [];
function Du(r) {
  var t = Math.round(r / qf * 1e8) / 1e8;
  return t % 2 * qf;
}
function gm(r, t) {
  var e = Du(r[0]);
  e < 0 && (e += Nr);
  var n = e - r[0], i = r[1];
  i += n, !t && i - e >= Nr ? i = e + Nr : t && e - i >= Nr ? i = e - Nr : !t && e > i ? i = e + (Nr - Du(e - i)) : t && e < i && (i = e - (Nr - Du(i - e))), r[0] = e, r[1] = i;
}
var kn = (function() {
  function r(t) {
    this.dpr = 1, this._xi = 0, this._yi = 0, this._x0 = 0, this._y0 = 0, this._len = 0, t && (this._saveData = !1), this._saveData && (this.data = []);
  }
  return r.prototype.increaseVersion = function() {
    this._version++;
  }, r.prototype.getVersion = function() {
    return this._version;
  }, r.prototype.setScale = function(t, e, n) {
    n = n || 0, n > 0 && (this._ux = vr(n / Ps / t) || 0, this._uy = vr(n / Ps / e) || 0);
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
    return this._drawPendingPt(), this.addData(ht.M, t, e), this._ctx && this._ctx.moveTo(t, e), this._x0 = t, this._y0 = e, this._xi = t, this._yi = e, this;
  }, r.prototype.lineTo = function(t, e) {
    var n = vr(t - this._xi), i = vr(e - this._yi), a = n > this._ux || i > this._uy;
    if (this.addData(ht.L, t, e), this._ctx && a && this._ctx.lineTo(t, e), a)
      this._xi = t, this._yi = e, this._pendingPtDist = 0;
    else {
      var o = n * n + i * i;
      o > this._pendingPtDist && (this._pendingPtX = t, this._pendingPtY = e, this._pendingPtDist = o);
    }
    return this;
  }, r.prototype.bezierCurveTo = function(t, e, n, i, a, o) {
    return this._drawPendingPt(), this.addData(ht.C, t, e, n, i, a, o), this._ctx && this._ctx.bezierCurveTo(t, e, n, i, a, o), this._xi = a, this._yi = o, this;
  }, r.prototype.quadraticCurveTo = function(t, e, n, i) {
    return this._drawPendingPt(), this.addData(ht.Q, t, e, n, i), this._ctx && this._ctx.quadraticCurveTo(t, e, n, i), this._xi = n, this._yi = i, this;
  }, r.prototype.arc = function(t, e, n, i, a, o) {
    this._drawPendingPt(), Ji[0] = i, Ji[1] = a, gm(Ji, o), i = Ji[0], a = Ji[1];
    var s = a - i;
    return this.addData(ht.A, t, e, n, n, i, s, 0, o ? 0 : 1), this._ctx && this._ctx.arc(t, e, n, i, a, o), this._xi = fn(a) * n + t, this._yi = hn(a) * n + e, this;
  }, r.prototype.arcTo = function(t, e, n, i, a) {
    return this._drawPendingPt(), this._ctx && this._ctx.arcTo(t, e, n, i, a), this;
  }, r.prototype.rect = function(t, e, n, i) {
    return this._drawPendingPt(), this._ctx && this._ctx.rect(t, e, n, i), this.addData(ht.R, t, e, n, i), this;
  }, r.prototype.closePath = function() {
    this._drawPendingPt(), this.addData(ht.Z);
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
    !(this.data && this.data.length === e) && Cu && (this.data = new Float32Array(e));
    for (var n = 0; n < e; n++)
      this.data[n] = t[n];
    this._len = e;
  }, r.prototype.appendPath = function(t) {
    t instanceof Array || (t = [t]);
    for (var e = t.length, n = 0, i = this._len, a = 0; a < e; a++)
      n += t[a].len();
    Cu && this.data instanceof Float32Array && (this.data = new Float32Array(i + n));
    for (var a = 0; a < e; a++)
      for (var o = t[a].data, s = 0; s < o.length; s++)
        this.data[i++] = o[s];
    this._len = i;
  }, r.prototype.addData = function(t, e, n, i, a, o, s, l, u) {
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
      t instanceof Array && (t.length = this._len, Cu && this._len > 11 && (this.data = new Float32Array(t)));
    }
  }, r.prototype.getBoundingRect = function() {
    qe[0] = qe[1] = Ze[0] = Ze[1] = Number.MAX_VALUE, Mr[0] = Mr[1] = je[0] = je[1] = -Number.MAX_VALUE;
    var t = this.data, e = 0, n = 0, i = 0, a = 0, o;
    for (o = 0; o < this._len; ) {
      var s = t[o++], l = o === 1;
      switch (l && (e = t[o], n = t[o + 1], i = e, a = n), s) {
        case ht.M:
          e = i = t[o++], n = a = t[o++], Ze[0] = i, Ze[1] = a, je[0] = i, je[1] = a;
          break;
        case ht.L:
          Kv(e, n, t[o], t[o + 1], Ze, je), e = t[o++], n = t[o++];
          break;
        case ht.C:
          vx(e, n, t[o++], t[o++], t[o++], t[o++], t[o], t[o + 1], Ze, je), e = t[o++], n = t[o++];
          break;
        case ht.Q:
          px(e, n, t[o++], t[o++], t[o], t[o + 1], Ze, je), e = t[o++], n = t[o++];
          break;
        case ht.A:
          var u = t[o++], f = t[o++], h = t[o++], v = t[o++], c = t[o++], p = t[o++] + c;
          o += 1;
          var d = !t[o++];
          l && (i = fn(c) * h + u, a = hn(c) * v + f), dx(u, f, h, v, c, p, d, Ze, je), e = fn(p) * h + u, n = hn(p) * v + f;
          break;
        case ht.R:
          i = e = t[o++], a = n = t[o++];
          var g = t[o++], y = t[o++];
          Kv(i, a, i + g, a + y, Ze, je);
          break;
        case ht.Z:
          e = i, n = a;
          break;
      }
      Vr(qe, qe, Ze), Br(Mr, Mr, je);
    }
    return o === 0 && (qe[0] = qe[1] = Mr[0] = Mr[1] = 0), new lt(qe[0], qe[1], Mr[0] - qe[0], Mr[1] - qe[1]);
  }, r.prototype._calculateLength = function() {
    var t = this.data, e = this._len, n = this._ux, i = this._uy, a = 0, o = 0, s = 0, l = 0;
    this._pathSegLen || (this._pathSegLen = []);
    for (var u = this._pathSegLen, f = 0, h = 0, v = 0; v < e; ) {
      var c = t[v++], p = v === 1;
      p && (a = t[v], o = t[v + 1], s = a, l = o);
      var d = -1;
      switch (c) {
        case ht.M:
          a = s = t[v++], o = l = t[v++];
          break;
        case ht.L: {
          var g = t[v++], y = t[v++], m = g - a, _ = y - o;
          (vr(m) > n || vr(_) > i || v === e - 1) && (d = Math.sqrt(m * m + _ * _), a = g, o = y);
          break;
        }
        case ht.C: {
          var S = t[v++], w = t[v++], g = t[v++], y = t[v++], b = t[v++], x = t[v++];
          d = Mb(a, o, S, w, g, y, b, x, 10), a = b, o = x;
          break;
        }
        case ht.Q: {
          var S = t[v++], w = t[v++], g = t[v++], y = t[v++];
          d = Ib(a, o, S, w, g, y, 10), a = g, o = y;
          break;
        }
        case ht.A:
          var T = t[v++], A = t[v++], M = t[v++], C = t[v++], E = t[v++], I = t[v++], P = I + E;
          v += 1, p && (s = fn(E) * M + T, l = hn(E) * C + A), d = Tu(M, C) * xu(Nr, Math.abs(I)), a = fn(P) * M + T, o = hn(P) * C + A;
          break;
        case ht.R: {
          s = a = t[v++], l = o = t[v++];
          var O = t[v++], R = t[v++];
          d = O * 2 + R * 2;
          break;
        }
        case ht.Z: {
          var m = s - a, _ = l - o;
          d = Math.sqrt(m * m + _ * _), a = s, o = l;
          break;
        }
      }
      d >= 0 && (u[h++] = d, f += d);
    }
    return this._pathLen = f, f;
  }, r.prototype.rebuildPath = function(t, e) {
    var n = this.data, i = this._ux, a = this._uy, o = this._len, s, l, u, f, h, v, c = e < 1, p, d, g = 0, y = 0, m, _ = 0, S, w;
    if (!(c && (this._pathSegLen || this._calculateLength(), p = this._pathSegLen, d = this._pathLen, m = e * d, !m)))
      t: for (var b = 0; b < o; ) {
        var x = n[b++], T = b === 1;
        switch (T && (u = n[b], f = n[b + 1], s = u, l = f), x !== ht.L && _ > 0 && (t.lineTo(S, w), _ = 0), x) {
          case ht.M:
            s = u = n[b++], l = f = n[b++], t.moveTo(u, f);
            break;
          case ht.L: {
            h = n[b++], v = n[b++];
            var A = vr(h - u), M = vr(v - f);
            if (A > i || M > a) {
              if (c) {
                var C = p[y++];
                if (g + C > m) {
                  var E = (m - g) / C;
                  t.lineTo(u * (1 - E) + h * E, f * (1 - E) + v * E);
                  break t;
                }
                g += C;
              }
              t.lineTo(h, v), u = h, f = v, _ = 0;
            } else {
              var I = A * A + M * M;
              I > _ && (S = h, w = v, _ = I);
            }
            break;
          }
          case ht.C: {
            var P = n[b++], O = n[b++], R = n[b++], F = n[b++], N = n[b++], V = n[b++];
            if (c) {
              var C = p[y++];
              if (g + C > m) {
                var E = (m - g) / C;
                Is(u, P, R, N, E, ln), Is(f, O, F, V, E, un), t.bezierCurveTo(ln[1], un[1], ln[2], un[2], ln[3], un[3]);
                break t;
              }
              g += C;
            }
            t.bezierCurveTo(P, O, R, F, N, V), u = N, f = V;
            break;
          }
          case ht.Q: {
            var P = n[b++], O = n[b++], R = n[b++], F = n[b++];
            if (c) {
              var C = p[y++];
              if (g + C > m) {
                var E = (m - g) / C;
                Ls(u, P, R, E, ln), Ls(f, O, F, E, un), t.quadraticCurveTo(ln[1], un[1], ln[2], un[2]);
                break t;
              }
              g += C;
            }
            t.quadraticCurveTo(P, O, R, F), u = R, f = F;
            break;
          }
          case ht.A:
            var L = n[b++], k = n[b++], G = n[b++], X = n[b++], rt = n[b++], nt = n[b++], It = n[b++], Ht = !n[b++], ft = G > X ? G : X, bt = vr(G - X) > 1e-3, yt = rt + nt, q = !1;
            if (c) {
              var C = p[y++];
              g + C > m && (yt = rt + nt * (m - g) / C, q = !0), g += C;
            }
            if (bt && t.ellipse ? t.ellipse(L, k, G, X, It, rt, yt, Ht) : t.arc(L, k, ft, rt, yt, Ht), q)
              break t;
            T && (s = fn(rt) * G + L, l = hn(rt) * X + k), u = fn(yt) * G + L, f = hn(yt) * X + k;
            break;
          case ht.R:
            s = u = n[b], l = f = n[b + 1], h = n[b++], v = n[b++];
            var it = n[b++], $e = n[b++];
            if (c) {
              var C = p[y++];
              if (g + C > m) {
                var Lt = m - g;
                t.moveTo(h, v), t.lineTo(h + xu(Lt, it), v), Lt -= it, Lt > 0 && t.lineTo(h + it, v + xu(Lt, $e)), Lt -= $e, Lt > 0 && t.lineTo(h + Tu(it - Lt, 0), v + $e), Lt -= it, Lt > 0 && t.lineTo(h, v + Tu($e - Lt, 0));
                break t;
              }
              g += C;
            }
            t.rect(h, v, it, $e);
            break;
          case ht.Z:
            if (c) {
              var C = p[y++];
              if (g + C > m) {
                var E = (m - g) / C;
                t.lineTo(u * (1 - E) + s * E, f * (1 - E) + l * E);
                break t;
              }
              g += C;
            }
            t.closePath(), u = s, f = l;
        }
      }
  }, r.prototype.clone = function() {
    var t = new r(), e = this.data;
    return t.data = e.slice ? e.slice() : Array.prototype.slice.call(e), t._len = this._len, t;
  }, r.CMD = ht, r.initDefaultProps = (function() {
    var t = r.prototype;
    t._saveData = !0, t._ux = 0, t._uy = 0, t._pendingPtDist = 0, t._version = 0;
  })(), r;
})();
function Zn(r, t, e, n, i, a, o) {
  if (i === 0)
    return !1;
  var s = i, l = 0, u = r;
  if (o > t + s && o > n + s || o < t - s && o < n - s || a > r + s && a > e + s || a < r - s && a < e - s)
    return !1;
  if (r !== e)
    l = (t - n) / (r - e), u = (r * n - e * t) / (r - e);
  else
    return Math.abs(a - r) <= s / 2;
  var f = l * a - o + u, h = f * f / (l * l + 1);
  return h <= s / 2 * s / 2;
}
function gx(r, t, e, n, i, a, o, s, l, u, f) {
  if (l === 0)
    return !1;
  var h = l;
  if (f > t + h && f > n + h && f > a + h && f > s + h || f < t - h && f < n - h && f < a - h && f < s - h || u > r + h && u > e + h && u > i + h && u > o + h || u < r - h && u < e - h && u < i - h && u < o - h)
    return !1;
  var v = Db(r, t, e, n, i, a, o, s, u, f);
  return v <= h / 2;
}
function yx(r, t, e, n, i, a, o, s, l) {
  if (o === 0)
    return !1;
  var u = o;
  if (l > t + u && l > n + u && l > a + u || l < t - u && l < n - u && l < a - u || s > r + u && s > e + u && s > i + u || s < r - u && s < e - u && s < i - u)
    return !1;
  var f = Eb(r, t, e, n, i, a, s, l);
  return f <= u / 2;
}
var tp = Math.PI * 2;
function Po(r) {
  return r %= tp, r < 0 && (r += tp), r;
}
var ta = Math.PI * 2;
function mx(r, t, e, n, i, a, o, s, l) {
  if (o === 0)
    return !1;
  var u = o;
  s -= r, l -= t;
  var f = Math.sqrt(s * s + l * l);
  if (f - u > e || f + u < e)
    return !1;
  if (Math.abs(n - i) % ta < 1e-4)
    return !0;
  if (a) {
    var h = n;
    n = Po(i), i = Po(h);
  } else
    n = Po(n), i = Po(i);
  n > i && (i += ta);
  var v = Math.atan2(l, s);
  return v < 0 && (v += ta), v >= n && v <= i || v + ta >= n && v + ta <= i;
}
function yr(r, t, e, n, i, a) {
  if (a > t && a > n || a < t && a < n || n === t)
    return 0;
  var o = (a - t) / (n - t), s = n < t ? 1 : -1;
  (o === 1 || o === 0) && (s = n < t ? 0.5 : -0.5);
  var l = o * (e - r) + r;
  return l === i ? 1 / 0 : l > i ? s : 0;
}
var Ar = kn.CMD, cn = Math.PI * 2, _x = 1e-4;
function Sx(r, t) {
  return Math.abs(r - t) < _x;
}
var jt = [-1, -1, -1], xe = [-1, -1];
function bx() {
  var r = xe[0];
  xe[0] = xe[1], xe[1] = r;
}
function xx(r, t, e, n, i, a, o, s, l, u) {
  if (u > t && u > n && u > a && u > s || u < t && u < n && u < a && u < s)
    return 0;
  var f = Es(t, n, a, s, u, jt);
  if (f === 0)
    return 0;
  for (var h = 0, v = -1, c = void 0, p = void 0, d = 0; d < f; d++) {
    var g = jt[d], y = g === 0 || g === 1 ? 0.5 : 1, m = kt(r, e, i, o, g);
    m < l || (v < 0 && (v = Gy(t, n, a, s, xe), xe[1] < xe[0] && v > 1 && bx(), c = kt(t, n, a, s, xe[0]), v > 1 && (p = kt(t, n, a, s, xe[1]))), v === 2 ? g < xe[0] ? h += c < t ? y : -y : g < xe[1] ? h += p < c ? y : -y : h += s < p ? y : -y : g < xe[0] ? h += c < t ? y : -y : h += s < c ? y : -y);
  }
  return h;
}
function Tx(r, t, e, n, i, a, o, s) {
  if (s > t && s > n && s > a || s < t && s < n && s < a)
    return 0;
  var l = Ab(t, n, a, s, jt);
  if (l === 0)
    return 0;
  var u = Wy(t, n, a);
  if (u >= 0 && u <= 1) {
    for (var f = 0, h = oe(t, n, a, u), v = 0; v < l; v++) {
      var c = jt[v] === 0 || jt[v] === 1 ? 0.5 : 1, p = oe(r, e, i, jt[v]);
      p < o || (jt[v] < u ? f += h < t ? c : -c : f += a < h ? c : -c);
    }
    return f;
  } else {
    var c = jt[0] === 0 || jt[0] === 1 ? 0.5 : 1, p = oe(r, e, i, jt[0]);
    return p < o ? 0 : a < t ? c : -c;
  }
}
function Cx(r, t, e, n, i, a, o, s) {
  if (s -= t, s > e || s < -e)
    return 0;
  var l = Math.sqrt(e * e - s * s);
  jt[0] = -l, jt[1] = l;
  var u = Math.abs(n - i);
  if (u < 1e-4)
    return 0;
  if (u >= cn - 1e-4) {
    n = 0, i = cn;
    var f = a ? 1 : -1;
    return o >= jt[0] + r && o <= jt[1] + r ? f : 0;
  }
  if (n > i) {
    var h = n;
    n = i, i = h;
  }
  n < 0 && (n += cn, i += cn);
  for (var v = 0, c = 0; c < 2; c++) {
    var p = jt[c];
    if (p + r > o) {
      var d = Math.atan2(s, p), f = a ? 1 : -1;
      d < 0 && (d = cn + d), (d >= n && d <= i || d + cn >= n && d + cn <= i) && (d > Math.PI / 2 && d < Math.PI * 1.5 && (f = -f), v += f);
    }
  }
  return v;
}
function ym(r, t, e, n, i) {
  for (var a = r.data, o = r.len(), s = 0, l = 0, u = 0, f = 0, h = 0, v, c, p = 0; p < o; ) {
    var d = a[p++], g = p === 1;
    switch (d === Ar.M && p > 1 && (e || (s += yr(l, u, f, h, n, i))), g && (l = a[p], u = a[p + 1], f = l, h = u), d) {
      case Ar.M:
        f = a[p++], h = a[p++], l = f, u = h;
        break;
      case Ar.L:
        if (e) {
          if (Zn(l, u, a[p], a[p + 1], t, n, i))
            return !0;
        } else
          s += yr(l, u, a[p], a[p + 1], n, i) || 0;
        l = a[p++], u = a[p++];
        break;
      case Ar.C:
        if (e) {
          if (gx(l, u, a[p++], a[p++], a[p++], a[p++], a[p], a[p + 1], t, n, i))
            return !0;
        } else
          s += xx(l, u, a[p++], a[p++], a[p++], a[p++], a[p], a[p + 1], n, i) || 0;
        l = a[p++], u = a[p++];
        break;
      case Ar.Q:
        if (e) {
          if (yx(l, u, a[p++], a[p++], a[p], a[p + 1], t, n, i))
            return !0;
        } else
          s += Tx(l, u, a[p++], a[p++], a[p], a[p + 1], n, i) || 0;
        l = a[p++], u = a[p++];
        break;
      case Ar.A:
        var y = a[p++], m = a[p++], _ = a[p++], S = a[p++], w = a[p++], b = a[p++];
        p += 1;
        var x = !!(1 - a[p++]);
        v = Math.cos(w) * _ + y, c = Math.sin(w) * S + m, g ? (f = v, h = c) : s += yr(l, u, v, c, n, i);
        var T = (n - y) * S / _ + y;
        if (e) {
          if (mx(y, m, S, w, w + b, x, t, T, i))
            return !0;
        } else
          s += Cx(y, m, S, w, w + b, x, T, i);
        l = Math.cos(w + b) * _ + y, u = Math.sin(w + b) * S + m;
        break;
      case Ar.R:
        f = l = a[p++], h = u = a[p++];
        var A = a[p++], M = a[p++];
        if (v = f + A, c = h + M, e) {
          if (Zn(f, h, v, h, t, n, i) || Zn(v, h, v, c, t, n, i) || Zn(v, c, f, c, t, n, i) || Zn(f, c, f, h, t, n, i))
            return !0;
        } else
          s += yr(v, h, v, c, n, i), s += yr(f, c, f, h, n, i);
        break;
      case Ar.Z:
        if (e) {
          if (Zn(l, u, f, h, t, n, i))
            return !0;
        } else
          s += yr(l, u, f, h, n, i);
        l = f, u = h;
        break;
    }
  }
  return !e && !Sx(u, h) && (s += yr(l, u, f, h, n, i) || 0), s !== 0;
}
function Dx(r, t, e) {
  return ym(r, 0, !1, t, e);
}
function Mx(r, t, e, n) {
  return ym(r, t, !0, e, n);
}
var mm = ut({
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
}, En), Ax = {
  style: ut({
    fill: !0,
    stroke: !0,
    strokePercent: !0,
    fillOpacity: !0,
    strokeOpacity: !0,
    lineDashOffset: !0,
    lineWidth: !0,
    miterLimit: !0
  }, vl.style)
}, Mu = Ha.concat([
  "invisible",
  "culling",
  "z",
  "z2",
  "zlevel",
  "parent"
]), pt = (function(r) {
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
      i.buildPath === t.prototype.buildPath && (i.buildPath = function(l) {
        e.buildPath(l, e.shape);
      }), i.silent = !0;
      var a = i.style;
      for (var o in n)
        a[o] !== n[o] && (a[o] = n[o]);
      a.fill = n.fill ? n.decal : null, a.decal = null, a.shadowColor = null, n.strokeFirst && (a.stroke = null);
      for (var s = 0; s < Mu.length; ++s)
        i[Mu[s]] = this[Mu[s]];
      i.__dirty |= ve;
    } else this._decalEl && (this._decalEl = null);
  }, t.prototype.getDecalElement = function() {
    return this._decalEl;
  }, t.prototype._init = function(e) {
    var n = gt(e);
    this.shape = this.getDefaultShape();
    var i = this.getDefaultStyle();
    i && this.useStyle(i);
    for (var a = 0; a < n.length; a++) {
      var o = n[a], s = e[o];
      o === "style" ? this.style ? B(this.style, s) : this.useStyle(s) : o === "shape" ? B(this.shape, s) : r.prototype.attrKV.call(this, o, s);
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
      if (U(e)) {
        var n = Fa(e, 0);
        return n > 0.5 ? Hf : n > 0.2 ? rw : Gf;
      } else if (e)
        return Gf;
    }
    return Hf;
  }, t.prototype.getInsideTextStroke = function(e) {
    var n = this.style.fill;
    if (U(n)) {
      var i = this.__zr, a = !!(i && i.isDarkMode()), o = Fa(e, 0) < Ff;
      if (a === o)
        return n;
    }
  }, t.prototype.buildPath = function(e, n, i) {
  }, t.prototype.pathUpdated = function() {
    this.__dirty &= ~ui;
  }, t.prototype.getUpdatedPathProxy = function(e) {
    return !this.path && this.createPathProxy(), this.path.beginPath(), this.buildPath(this.path, this.shape, e), this.path;
  }, t.prototype.createPathProxy = function() {
    this.path = new kn(!1);
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
      (a || this.__dirty & ui) && (o.beginPath(), this.buildPath(o, this.shape, !1), this.pathUpdated()), e = o.getBoundingRect();
    }
    if (this._rect = e, this.hasStroke() && this.path && this.path.len() > 0) {
      var s = this._rectStroke || (this._rectStroke = e.clone());
      if (this.__dirty || i) {
        s.copy(e);
        var l = n.strokeNoScale ? this.getLineScale() : 1, u = n.lineWidth;
        if (!this.hasFill()) {
          var f = this.strokeContainThreshold;
          u = Math.max(u, f ?? 4);
        }
        l > 1e-10 && (s.width += u / l, s.height += u / l, s.x -= u / l / 2, s.y -= u / l / 2);
      }
      return s;
    }
    return e;
  }, t.prototype.contain = function(e, n) {
    var i = this.transformCoordToLocal(e, n), a = this.getBoundingRect(), o = this.style;
    if (e = i[0], n = i[1], a.contain(e, n)) {
      var s = this.path;
      if (this.hasStroke()) {
        var l = o.lineWidth, u = o.strokeNoScale ? this.getLineScale() : 1;
        if (u > 1e-10 && (this.hasFill() || (l = Math.max(l, this.strokeContainThreshold)), Mx(s, l / u, e, n)))
          return !0;
      }
      if (this.hasFill())
        return Dx(s, e, n);
    }
    return !1;
  }, t.prototype.dirtyShape = function() {
    this.__dirty |= ui, this._rect && (this._rect = null), this._decalEl && this._decalEl.dirtyShape(), this.markRedraw();
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
    return i || (i = this.shape = {}), typeof e == "string" ? i[e] = n : B(i, e), this.dirtyShape(), this;
  }, t.prototype.shapeChanged = function() {
    return !!(this.__dirty & ui);
  }, t.prototype.createStyle = function(e) {
    return io(mm, e);
  }, t.prototype._innerSaveToNormal = function(e) {
    r.prototype._innerSaveToNormal.call(this, e);
    var n = this._normalState;
    e.shape && !n.shape && (n.shape = B({}, this.shape));
  }, t.prototype._applyStateObj = function(e, n, i, a, o, s) {
    r.prototype._applyStateObj.call(this, e, n, i, a, o, s);
    var l = !(n && a), u;
    if (n && n.shape ? o ? a ? u = n.shape : (u = B({}, i.shape), B(u, n.shape)) : (u = B({}, a ? this.shape : i.shape), B(u, n.shape)) : l && (u = i.shape), u)
      if (o) {
        this.shape = B({}, this.shape);
        for (var f = {}, h = gt(u), v = 0; v < h.length; v++) {
          var c = h[v];
          typeof u[c] == "object" ? this.shape[c] = u[c] : f[c] = u[c];
        }
        this._transitionState(e, {
          shape: f
        }, s);
      } else
        this.shape = u, this.dirtyShape();
  }, t.prototype._mergeStates = function(e) {
    for (var n = r.prototype._mergeStates.call(this, e), i, a = 0; a < e.length; a++) {
      var o = e[a];
      o.shape && (i = i || {}, this._mergeStyle(i, o.shape));
    }
    return i && (n.shape = i), n;
  }, t.prototype.getAnimationStyleProps = function() {
    return Ax;
  }, t.prototype.isZeroArea = function() {
    return !1;
  }, t.extend = function(e) {
    var n = (function(a) {
      z(o, a);
      function o(s) {
        var l = a.call(this, s) || this;
        return e.init && e.init.call(l, s), l;
      }
      return o.prototype.getDefaultStyle = function() {
        return j(e.style);
      }, o.prototype.getDefaultShape = function() {
        return j(e.shape);
      }, o;
    })(t);
    for (var i in e)
      typeof e[i] == "function" && (n.prototype[i] = e[i]);
    return n;
  }, t.initDefaultProps = (function() {
    var e = t.prototype;
    e.type = "path", e.strokeContainThreshold = 5, e.segmentIgnoreThreshold = 0, e.subPixelOptimize = !1, e.autoBatch = !1, e.__dirty = ve | da | ui;
  })(), t;
})(ho), Ex = ut({
  strokeFirst: !0,
  font: On,
  x: 0,
  y: 0,
  textAlign: "left",
  textBaseline: "top",
  miterLimit: 2
}, mm), Vs = (function(r) {
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
    return io(Ex, e);
  }, t.prototype.setBoundingRect = function(e) {
    this._rect = e;
  }, t.prototype.getBoundingRect = function() {
    var e = this.style;
    if (!this._rect) {
      var n = e.text;
      n != null ? n += "" : n = "";
      var i = Zh(n, e.font, e.textAlign, e.textBaseline);
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
})(ho);
Vs.prototype.type = "tspan";
var Ix = ut({
  x: 0,
  y: 0
}, En), Lx = {
  style: ut({
    x: !0,
    y: !0,
    width: !0,
    height: !0,
    sx: !0,
    sy: !0,
    sWidth: !0,
    sHeight: !0
  }, vl.style)
};
function Px(r) {
  return !!(r && typeof r != "string" && r.width && r.height);
}
var Ye = (function(r) {
  z(t, r);
  function t() {
    return r !== null && r.apply(this, arguments) || this;
  }
  return t.prototype.createStyle = function(e) {
    return io(Ix, e);
  }, t.prototype._getSize = function(e) {
    var n = this.style, i = n[e];
    if (i != null)
      return i;
    var a = Px(n.image) ? n.image : this.__image;
    if (!a)
      return 0;
    var o = e === "width" ? "height" : "width", s = n[o];
    return s == null ? a[e] : a[e] / a[o] * s;
  }, t.prototype.getWidth = function() {
    return this._getSize("width");
  }, t.prototype.getHeight = function() {
    return this._getSize("height");
  }, t.prototype.getAnimationStyleProps = function() {
    return Lx;
  }, t.prototype.getBoundingRect = function() {
    var e = this.style;
    return this._rect || (this._rect = new lt(e.x || 0, e.y || 0, this.getWidth(), this.getHeight())), this._rect;
  }, t;
})(ho);
Ye.prototype.type = "image";
function Ox(r, t) {
  var e = t.x, n = t.y, i = t.width, a = t.height, o = t.r, s, l, u, f;
  i < 0 && (e = e + i, i = -i), a < 0 && (n = n + a, a = -a), typeof o == "number" ? s = l = u = f = o : o instanceof Array ? o.length === 1 ? s = l = u = f = o[0] : o.length === 2 ? (s = u = o[0], l = f = o[1]) : o.length === 3 ? (s = o[0], l = f = o[1], u = o[2]) : (s = o[0], l = o[1], u = o[2], f = o[3]) : s = l = u = f = 0;
  var h;
  s + l > i && (h = s + l, s *= i / h, l *= i / h), u + f > i && (h = u + f, u *= i / h, f *= i / h), l + u > a && (h = l + u, l *= a / h, u *= a / h), s + f > a && (h = s + f, s *= a / h, f *= a / h), r.moveTo(e + s, n), r.lineTo(e + i - l, n), l !== 0 && r.arc(e + i - l, n + l, l, -Math.PI / 2, 0), r.lineTo(e + i, n + a - u), u !== 0 && r.arc(e + i - u, n + a - u, u, 0, Math.PI / 2), r.lineTo(e + f, n + a), f !== 0 && r.arc(e + f, n + a - f, f, Math.PI / 2, Math.PI), r.lineTo(e, n + s), s !== 0 && r.arc(e + s, n + s, s, Math.PI, Math.PI * 1.5);
}
var ci = Math.round;
function _m(r, t, e) {
  if (t) {
    var n = t.x1, i = t.x2, a = t.y1, o = t.y2;
    r.x1 = n, r.x2 = i, r.y1 = a, r.y2 = o;
    var s = e && e.lineWidth;
    return s && (ci(n * 2) === ci(i * 2) && (r.x1 = r.x2 = Tn(n, s, !0)), ci(a * 2) === ci(o * 2) && (r.y1 = r.y2 = Tn(a, s, !0))), r;
  }
}
function Sm(r, t, e) {
  if (t) {
    var n = t.x, i = t.y, a = t.width, o = t.height;
    r.x = n, r.y = i, r.width = a, r.height = o;
    var s = e && e.lineWidth;
    return s && (r.x = Tn(n, s, !0), r.y = Tn(i, s, !0), r.width = Math.max(Tn(n + a, s, !1) - r.x, a === 0 ? 0 : 1), r.height = Math.max(Tn(i + o, s, !1) - r.y, o === 0 ? 0 : 1)), r;
  }
}
function Tn(r, t, e) {
  if (!t)
    return r;
  var n = ci(r * 2);
  return (n + ci(t)) % 2 === 0 ? n / 2 : (n + (e ? 1 : -1)) / 2;
}
var Rx = /* @__PURE__ */ (function() {
  function r() {
    this.x = 0, this.y = 0, this.width = 0, this.height = 0;
  }
  return r;
})(), Nx = {}, _t = (function(r) {
  z(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultShape = function() {
    return new Rx();
  }, t.prototype.buildPath = function(e, n) {
    var i, a, o, s;
    if (this.subPixelOptimize) {
      var l = Sm(Nx, n, this.style);
      i = l.x, a = l.y, o = l.width, s = l.height, l.r = n.r, n = l;
    } else
      i = n.x, a = n.y, o = n.width, s = n.height;
    n.r ? Ox(e, n) : e.rect(i, a, o, s);
  }, t.prototype.isZeroArea = function() {
    return !this.shape.width || !this.shape.height;
  }, t;
})(pt);
_t.prototype.type = "rect";
var ep = {
  fill: "#000"
}, rp = 2, kx = {
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
  }, vl.style)
}, St = (function(r) {
  z(t, r);
  function t(e) {
    var n = r.call(this) || this;
    return n.type = "text", n._children = [], n._defaultStyle = ep, n.attr(e), n;
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
    this._childCursor = 0, Hx(this.style), this.style.rich ? this._updateRichTexts() : this._updatePlainTexts(), this._children.length = this._childCursor, this.styleUpdated();
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
      for (var e = new lt(0, 0, 0, 0), n = this._children, i = [], a = null, o = 0; o < n.length; o++) {
        var s = n[o], l = s.getBoundingRect(), u = s.getLocalTransform(i);
        u ? (e.copy(l), e.applyTransform(u), a = a || e.clone(), a.union(e)) : (a = a || l.clone(), a.union(l));
      }
      this._rect = a || e;
    }
    return this._rect;
  }, t.prototype.setDefaultTextStyle = function(e) {
    this._defaultStyle = e || ep;
  }, t.prototype.setTextContent = function(e) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("Can't attach text on another text");
  }, t.prototype._mergeStyle = function(e, n) {
    if (!n)
      return e;
    var i = n.rich, a = e.rich || i && {};
    return B(e, n), i && a ? (this._mergeRich(a, i), e.rich = a) : a && (e.rich = a), e;
  }, t.prototype._mergeRich = function(e, n) {
    for (var i = gt(n), a = 0; a < i.length; a++) {
      var o = i[a];
      e[o] = e[o] || {}, B(e[o], n[o]);
    }
  }, t.prototype.getAnimationStyleProps = function() {
    return kx;
  }, t.prototype._getOrCreateChild = function(e) {
    var n = this._children[this._childCursor];
    return (!n || !(n instanceof e)) && (n = new e()), this._children[this._childCursor++] = n, n.__zr = this.__zr, n.parent = this, n;
  }, t.prototype._updatePlainTexts = function() {
    var e = this.style, n = e.font || On, i = e.padding, a = up(e), o = ix(a, e), s = Au(e), l = !!e.backgroundColor, u = o.outerHeight, f = o.outerWidth, h = o.contentWidth, v = o.lines, c = o.lineHeight, p = this._defaultStyle;
    this.isTruncated = !!o.isTruncated;
    var d = e.x || 0, g = e.y || 0, y = e.align || p.align || "left", m = e.verticalAlign || p.verticalAlign || "top", _ = d, S = fi(g, o.contentHeight, m);
    if (s || i) {
      var w = ya(d, f, y), b = fi(g, u, m);
      s && this._renderBackground(e, e, w, b, f, u);
    }
    S += c / 2, i && (_ = lp(d, y, i), m === "top" ? S += i[0] : m === "bottom" && (S -= i[2]));
    for (var x = 0, T = !1, A = sp("fill" in e ? e.fill : (T = !0, p.fill)), M = op("stroke" in e ? e.stroke : !l && (!p.autoStroke || T) ? (x = rp, p.stroke) : null), C = e.textShadowBlur > 0, E = e.width != null && (e.overflow === "truncate" || e.overflow === "break" || e.overflow === "breakAll"), I = o.calculatedLineHeight, P = 0; P < v.length; P++) {
      var O = this._getOrCreateChild(Vs), R = O.createStyle();
      O.useStyle(R), R.text = v[P], R.x = _, R.y = S, R.textAlign = y, R.textBaseline = "middle", R.opacity = e.opacity, R.strokeFirst = !0, C && (R.shadowBlur = e.textShadowBlur || 0, R.shadowColor = e.textShadowColor || "transparent", R.shadowOffsetX = e.textShadowOffsetX || 0, R.shadowOffsetY = e.textShadowOffsetY || 0), R.stroke = M, R.fill = A, M && (R.lineWidth = e.lineWidth || x, R.lineDash = e.lineDash, R.lineDashOffset = e.lineDashOffset || 0), R.font = n, ip(R, e), S += c, E && O.setBoundingRect(new lt(ya(R.x, h, R.textAlign), fi(R.y, I, R.textBaseline), h, I));
    }
  }, t.prototype._updateRichTexts = function() {
    var e = this.style, n = up(e), i = sx(n, e), a = i.width, o = i.outerWidth, s = i.outerHeight, l = e.padding, u = e.x || 0, f = e.y || 0, h = this._defaultStyle, v = e.align || h.align, c = e.verticalAlign || h.verticalAlign;
    this.isTruncated = !!i.isTruncated;
    var p = ya(u, o, v), d = fi(f, s, c), g = p, y = d;
    l && (g += l[3], y += l[0]);
    var m = g + a;
    Au(e) && this._renderBackground(e, e, p, d, o, s);
    for (var _ = !!e.backgroundColor, S = 0; S < i.lines.length; S++) {
      for (var w = i.lines[S], b = w.tokens, x = b.length, T = w.lineHeight, A = w.width, M = 0, C = g, E = m, I = x - 1, P = void 0; M < x && (P = b[M], !P.align || P.align === "left"); )
        this._placeToken(P, e, T, y, C, "left", _), A -= P.width, C += P.width, M++;
      for (; I >= 0 && (P = b[I], P.align === "right"); )
        this._placeToken(P, e, T, y, E, "right", _), A -= P.width, E -= P.width, I--;
      for (C += (a - (C - g) - (m - E) - A) / 2; M <= I; )
        P = b[M], this._placeToken(P, e, T, y, C + P.width / 2, "center", _), C += P.width, M++;
      y += T;
    }
  }, t.prototype._placeToken = function(e, n, i, a, o, s, l) {
    var u = n.rich[e.styleName] || {};
    u.text = e.text;
    var f = e.verticalAlign, h = a + i / 2;
    f === "top" ? h = a + e.height / 2 : f === "bottom" && (h = a + i - e.height / 2);
    var v = !e.isLineHolder && Au(u);
    v && this._renderBackground(u, n, s === "right" ? o - e.width : s === "center" ? o - e.width / 2 : o, h - e.height / 2, e.width, e.height);
    var c = !!u.backgroundColor, p = e.textPadding;
    p && (o = lp(o, s, p), h -= e.height / 2 - p[0] - e.innerHeight / 2);
    var d = this._getOrCreateChild(Vs), g = d.createStyle();
    d.useStyle(g);
    var y = this._defaultStyle, m = !1, _ = 0, S = sp("fill" in u ? u.fill : "fill" in n ? n.fill : (m = !0, y.fill)), w = op("stroke" in u ? u.stroke : "stroke" in n ? n.stroke : !c && !l && (!y.autoStroke || m) ? (_ = rp, y.stroke) : null), b = u.textShadowBlur > 0 || n.textShadowBlur > 0;
    g.text = e.text, g.x = o, g.y = h, b && (g.shadowBlur = u.textShadowBlur || n.textShadowBlur || 0, g.shadowColor = u.textShadowColor || n.textShadowColor || "transparent", g.shadowOffsetX = u.textShadowOffsetX || n.textShadowOffsetX || 0, g.shadowOffsetY = u.textShadowOffsetY || n.textShadowOffsetY || 0), g.textAlign = s, g.textBaseline = "middle", g.font = e.font || On, g.opacity = Yr(u.opacity, n.opacity, 1), ip(g, u), w && (g.lineWidth = Yr(u.lineWidth, n.lineWidth, _), g.lineDash = Q(u.lineDash, n.lineDash), g.lineDashOffset = n.lineDashOffset || 0, g.stroke = w), S && (g.fill = S);
    var x = e.contentWidth, T = e.contentHeight;
    d.setBoundingRect(new lt(ya(g.x, x, g.textAlign), fi(g.y, T, g.textBaseline), x, T));
  }, t.prototype._renderBackground = function(e, n, i, a, o, s) {
    var l = e.backgroundColor, u = e.borderWidth, f = e.borderColor, h = l && l.image, v = l && !h, c = e.borderRadius, p = this, d, g;
    if (v || e.lineHeight || u && f) {
      d = this._getOrCreateChild(_t), d.useStyle(d.createStyle()), d.style.fill = null;
      var y = d.shape;
      y.x = i, y.y = a, y.width = o, y.height = s, y.r = c, d.dirtyShape();
    }
    if (v) {
      var m = d.style;
      m.fill = l || null, m.fillOpacity = Q(e.fillOpacity, 1);
    } else if (h) {
      g = this._getOrCreateChild(Ye), g.onload = function() {
        p.dirtyStyle();
      };
      var _ = g.style;
      _.image = l.image, _.x = i, _.y = a, _.width = o, _.height = s;
    }
    if (u && f) {
      var m = d.style;
      m.lineWidth = u, m.stroke = f, m.strokeOpacity = Q(e.strokeOpacity, 1), m.lineDash = e.borderDash, m.lineDashOffset = e.borderDashOffset || 0, d.strokeContainThreshold = 0, d.hasFill() && d.hasStroke() && (m.strokeFirst = !0, m.lineWidth *= 2);
    }
    var S = (d || g).style;
    S.shadowBlur = e.shadowBlur || 0, S.shadowColor = e.shadowColor || "transparent", S.shadowOffsetX = e.shadowOffsetX || 0, S.shadowOffsetY = e.shadowOffsetY || 0, S.opacity = Yr(e.opacity, n.opacity, 1);
  }, t.makeFont = function(e) {
    var n = "";
    return Fx(e) && (n = [
      e.fontStyle,
      e.fontWeight,
      zx(e.fontSize),
      e.fontFamily || "sans-serif"
    ].join(" ")), n && Ve(n) || e.textFont || e.font;
  }, t;
})(ho), Vx = { left: !0, right: 1, center: 1 }, Bx = { top: 1, bottom: 1, middle: 1 }, np = ["fontStyle", "fontWeight", "fontSize", "fontFamily"];
function zx(r) {
  return typeof r == "string" && (r.indexOf("px") !== -1 || r.indexOf("rem") !== -1 || r.indexOf("em") !== -1) ? r : isNaN(+r) ? Nh + "px" : r + "px";
}
function ip(r, t) {
  for (var e = 0; e < np.length; e++) {
    var n = np[e], i = t[n];
    i != null && (r[n] = i);
  }
}
function Fx(r) {
  return r.fontSize != null || r.fontFamily || r.fontWeight;
}
function Hx(r) {
  return ap(r), D(r.rich, ap), r;
}
function ap(r) {
  if (r) {
    r.font = St.makeFont(r);
    var t = r.align;
    t === "middle" && (t = "center"), r.align = t == null || Vx[t] ? t : "left";
    var e = r.verticalAlign;
    e === "center" && (e = "middle"), r.verticalAlign = e == null || Bx[e] ? e : "top";
    var n = r.padding;
    n && (r.padding = Fh(r.padding));
  }
}
function op(r, t) {
  return r == null || t <= 0 || r === "transparent" || r === "none" ? null : r.image || r.colorStops ? "#000" : r;
}
function sp(r) {
  return r == null || r === "none" ? null : r.image || r.colorStops ? "#000" : r;
}
function lp(r, t, e) {
  return t === "right" ? r - e[1] : t === "center" ? r + e[3] / 2 - e[1] / 2 : r + e[3];
}
function up(r) {
  var t = r.text;
  return t != null && (t += ""), t;
}
function Au(r) {
  return !!(r.backgroundColor || r.lineHeight || r.borderWidth && r.borderColor);
}
var at = Mt(), Gx = function(r, t, e, n) {
  if (n) {
    var i = at(n);
    i.dataIndex = e, i.dataType = t, i.seriesIndex = r, i.ssrType = "chart", n.type === "group" && n.traverse(function(a) {
      var o = at(a);
      o.seriesIndex = r, o.dataIndex = e, o.dataType = t, o.ssrType = "chart";
    });
  }
}, fp = 1, hp = {}, bm = Mt(), ic = Mt(), ac = 0, pl = 1, dl = 2, Ee = ["emphasis", "blur", "select"], Bs = ["normal", "emphasis", "blur", "select"], Wx = 10, Ux = 9, In = "highlight", ds = "downplay", Ma = "select", gs = "unselect", Aa = "toggleSelect";
function jn(r) {
  return r != null && r !== "none";
}
function gl(r, t, e) {
  r.onHoverStateChange && (r.hoverState || 0) !== e && r.onHoverStateChange(t), r.hoverState = e;
}
function wm(r) {
  gl(r, "emphasis", dl);
}
function xm(r) {
  r.hoverState === dl && gl(r, "normal", ac);
}
function oc(r) {
  gl(r, "blur", pl);
}
function Tm(r) {
  r.hoverState === pl && gl(r, "normal", ac);
}
function Yx(r) {
  r.selected = !0;
}
function Xx(r) {
  r.selected = !1;
}
function cp(r, t, e) {
  t(r, e);
}
function Tr(r, t, e) {
  cp(r, t, e), r.isGroup && r.traverse(function(n) {
    cp(n, t, e);
  });
}
function vp(r, t) {
  switch (t) {
    case "emphasis":
      r.hoverState = dl;
      break;
    case "normal":
      r.hoverState = ac;
      break;
    case "blur":
      r.hoverState = pl;
      break;
    case "select":
      r.selected = !0;
  }
}
function $x(r, t, e, n) {
  for (var i = r.style, a = {}, o = 0; o < t.length; o++) {
    var s = t[o], l = i[s];
    a[s] = l ?? (n && n[s]);
  }
  for (var o = 0; o < r.animators.length; o++) {
    var u = r.animators[o];
    u.__fromStateTransition && u.__fromStateTransition.indexOf(e) < 0 && u.targetName === "style" && u.saveTo(a, t);
  }
  return a;
}
function qx(r, t, e, n) {
  var i = e && vt(e, "select") >= 0, a = !1;
  if (r instanceof pt) {
    var o = bm(r), s = i && o.selectFill || o.normalFill, l = i && o.selectStroke || o.normalStroke;
    if (jn(s) || jn(l)) {
      n = n || {};
      var u = n.style || {};
      u.fill === "inherit" ? (a = !0, n = B({}, n), u = B({}, u), u.fill = s) : !jn(u.fill) && jn(s) ? (a = !0, n = B({}, n), u = B({}, u), u.fill = Rf(s)) : !jn(u.stroke) && jn(l) && (a || (n = B({}, n), u = B({}, u)), u.stroke = Rf(l)), n.style = u;
    }
  }
  if (n && n.z2 == null) {
    a || (n = B({}, n));
    var f = r.z2EmphasisLift;
    n.z2 = r.z2 + (f ?? Wx);
  }
  return n;
}
function Zx(r, t, e) {
  if (e && e.z2 == null) {
    e = B({}, e);
    var n = r.z2SelectLift;
    e.z2 = r.z2 + (n ?? Ux);
  }
  return e;
}
function jx(r, t, e) {
  var n = vt(r.currentStates, t) >= 0, i = r.style.opacity, a = n ? null : $x(r, ["opacity"], t, {
    opacity: 1
  });
  e = e || {};
  var o = e.style || {};
  return o.opacity == null && (e = B({}, e), o = B({
    // Already being applied 'emphasis'. DON'T mul opacity multiple times.
    opacity: n ? i : a.opacity * 0.1
  }, o), e.style = o), e;
}
function Eu(r, t) {
  var e = this.states[r];
  if (this.style) {
    if (r === "emphasis")
      return qx(this, r, t, e);
    if (r === "blur")
      return jx(this, r, e);
    if (r === "select")
      return Zx(this, r, e);
  }
  return e;
}
function Kx(r) {
  r.stateProxy = Eu;
  var t = r.getTextContent(), e = r.getTextGuideLine();
  t && (t.stateProxy = Eu), e && (e.stateProxy = Eu);
}
function pp(r, t) {
  !Am(r, t) && !r.__highByOuter && Tr(r, wm);
}
function dp(r, t) {
  !Am(r, t) && !r.__highByOuter && Tr(r, xm);
}
function zs(r, t) {
  r.__highByOuter |= 1 << (t || 0), Tr(r, wm);
}
function Fs(r, t) {
  !(r.__highByOuter &= ~(1 << (t || 0))) && Tr(r, xm);
}
function Qx(r) {
  Tr(r, oc);
}
function Cm(r) {
  Tr(r, Tm);
}
function Dm(r) {
  Tr(r, Yx);
}
function Mm(r) {
  Tr(r, Xx);
}
function Am(r, t) {
  return r.__highDownSilentOnTouch && t.zrByTouch;
}
function Em(r) {
  var t = r.getModel(), e = [], n = [];
  t.eachComponent(function(i, a) {
    var o = ic(a), s = i === "series", l = s ? r.getViewOfSeriesModel(a) : r.getViewOfComponentModel(a);
    !s && n.push(l), o.isBlured && (l.group.traverse(function(u) {
      Tm(u);
    }), s && e.push(a)), o.isBlured = !1;
  }), D(n, function(i) {
    i && i.toggleBlurSeries && i.toggleBlurSeries(e, !1, t);
  });
}
function Zf(r, t, e, n) {
  var i = n.getModel();
  e = e || "coordinateSystem";
  function a(u, f) {
    for (var h = 0; h < f.length; h++) {
      var v = u.getItemGraphicEl(f[h]);
      v && Cm(v);
    }
  }
  if (r != null && !(!t || t === "none")) {
    var o = i.getSeriesByIndex(r), s = o.coordinateSystem;
    s && s.master && (s = s.master);
    var l = [];
    i.eachSeries(function(u) {
      var f = o === u, h = u.coordinateSystem;
      h && h.master && (h = h.master);
      var v = h && s ? h === s : f;
      if (!// Not blur other series if blurScope series
      (e === "series" && !f || e === "coordinateSystem" && !v || t === "series" && f)) {
        var c = n.getViewOfSeriesModel(u);
        if (c.group.traverse(function(g) {
          g.__highByOuter && f && t === "self" || oc(g);
        }), re(t))
          a(u.getData(), t);
        else if (W(t))
          for (var p = gt(t), d = 0; d < p.length; d++)
            a(u.getData(p[d]), t[p[d]]);
        l.push(u), ic(u).isBlured = !0;
      }
    }), i.eachComponent(function(u, f) {
      if (u !== "series") {
        var h = n.getViewOfComponentModel(f);
        h && h.toggleBlurSeries && h.toggleBlurSeries(l, !0, i);
      }
    });
  }
}
function jf(r, t, e) {
  if (!(r == null || t == null)) {
    var n = e.getModel().getComponent(r, t);
    if (n) {
      ic(n).isBlured = !0;
      var i = e.getViewOfComponentModel(n);
      !i || !i.focusBlurEnabled || i.group.traverse(function(a) {
        oc(a);
      });
    }
  }
}
function Jx(r, t, e) {
  var n = r.seriesIndex, i = r.getData(t.dataType);
  if (!i) {
    process.env.NODE_ENV !== "production" && Zt("Unknown dataType " + t.dataType);
    return;
  }
  var a = Nn(i, t);
  a = (H(a) ? a[0] : a) || 0;
  var o = i.getItemGraphicEl(a);
  if (!o)
    for (var s = i.count(), l = 0; !o && l < s; )
      o = i.getItemGraphicEl(l++);
  if (o) {
    var u = at(o);
    Zf(n, u.focus, u.blurScope, e);
  } else {
    var f = r.get(["emphasis", "focus"]), h = r.get(["emphasis", "blurScope"]);
    f != null && Zf(n, f, h, e);
  }
}
function sc(r, t, e, n) {
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
  for (var s = o.findHighDownDispatchers(e), l, u = 0; u < s.length; u++)
    if (process.env.NODE_ENV !== "production" && !xi(s[u]) && Zt("param should be highDownDispatcher"), at(s[u]).focus === "self") {
      l = !0;
      break;
    }
  return {
    focusSelf: l,
    dispatchers: s
  };
}
function tT(r, t, e) {
  process.env.NODE_ENV !== "production" && !xi(r) && Zt("param should be highDownDispatcher");
  var n = at(r), i = sc(n.componentMainType, n.componentIndex, n.componentHighDownName, e), a = i.dispatchers, o = i.focusSelf;
  a ? (o && jf(n.componentMainType, n.componentIndex, e), D(a, function(s) {
    return pp(s, t);
  })) : (Zf(n.seriesIndex, n.focus, n.blurScope, e), n.focus === "self" && jf(n.componentMainType, n.componentIndex, e), pp(r, t));
}
function eT(r, t, e) {
  process.env.NODE_ENV !== "production" && !xi(r) && Zt("param should be highDownDispatcher"), Em(e);
  var n = at(r), i = sc(n.componentMainType, n.componentIndex, n.componentHighDownName, e).dispatchers;
  i ? D(i, function(a) {
    return dp(a, t);
  }) : dp(r, t);
}
function rT(r, t, e) {
  if (Kf(t)) {
    var n = t.dataType, i = r.getData(n), a = Nn(i, t);
    H(a) || (a = [a]), r[t.type === Aa ? "toggleSelect" : t.type === Ma ? "select" : "unselect"](a, n);
  }
}
function gp(r) {
  var t = r.getAllData();
  D(t, function(e) {
    var n = e.data, i = e.type;
    n.eachItemGraphicEl(function(a, o) {
      r.isSelected(o, i) ? Dm(a) : Mm(a);
    });
  });
}
function nT(r) {
  var t = [];
  return r.eachSeries(function(e) {
    var n = e.getAllData();
    D(n, function(i) {
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
function Hs(r, t, e) {
  lc(r, !0), Tr(r, Kx), aT(r, t, e);
}
function iT(r) {
  lc(r, !1);
}
function Vn(r, t, e, n) {
  n ? iT(r) : Hs(r, t, e);
}
function aT(r, t, e) {
  var n = at(r);
  t != null ? (n.focus = t, n.blurScope = e) : n.focus && (n.focus = null);
}
var yp = ["emphasis", "blur", "select"], oT = {
  itemStyle: "getItemStyle",
  lineStyle: "getLineStyle",
  areaStyle: "getAreaStyle"
};
function Ya(r, t, e, n) {
  e = e || "itemStyle";
  for (var i = 0; i < yp.length; i++) {
    var a = yp[i], o = t.getModel([a, e]), s = r.ensureState(a);
    s.style = o[oT[e]]();
  }
}
function lc(r, t) {
  var e = t === !1, n = r;
  r.highDownSilentOnTouch && (n.__highDownSilentOnTouch = r.highDownSilentOnTouch), (!e || n.__highDownDispatcher) && (n.__highByOuter = n.__highByOuter || 0, n.__highDownDispatcher = !e);
}
function xi(r) {
  return !!(r && r.__highDownDispatcher);
}
function sT(r) {
  var t = hp[r];
  return t == null && fp <= 32 && (t = hp[r] = fp++), t;
}
function Kf(r) {
  var t = r.type;
  return t === Ma || t === gs || t === Aa;
}
function mp(r) {
  var t = r.type;
  return t === In || t === ds;
}
function lT(r) {
  var t = bm(r);
  t.normalFill = r.style.fill, t.normalStroke = r.style.stroke;
  var e = r.states.select || {};
  t.selectFill = e.style && e.style.fill || null, t.selectStroke = e.style && e.style.stroke || null;
}
var Kn = kn.CMD, uT = [[], [], []], _p = Math.sqrt, fT = Math.atan2;
function hT(r, t) {
  if (t) {
    var e = r.data, n = r.len(), i, a, o, s, l, u, f = Kn.M, h = Kn.C, v = Kn.L, c = Kn.R, p = Kn.A, d = Kn.Q;
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
        case d:
          a = 2;
          break;
        case p:
          var g = t[4], y = t[5], m = _p(t[0] * t[0] + t[1] * t[1]), _ = _p(t[2] * t[2] + t[3] * t[3]), S = fT(-t[1] / _, t[0] / m);
          e[o] *= m, e[o++] += g, e[o] *= _, e[o++] += y, e[o++] *= m, e[o++] *= _, e[o++] += S, e[o++] += S, o += 2, s = o;
          break;
        case c:
          u[0] = e[o++], u[1] = e[o++], ee(u, u, t), e[s++] = u[0], e[s++] = u[1], u[0] += e[o++], u[1] += e[o++], ee(u, u, t), e[s++] = u[0], e[s++] = u[1];
      }
      for (l = 0; l < a; l++) {
        var w = uT[l];
        w[0] = e[o++], w[1] = e[o++], ee(w, w, t), e[s++] = w[0], e[s++] = w[1];
      }
    }
    r.increaseVersion();
  }
}
var Iu = Math.sqrt, Oo = Math.sin, Ro = Math.cos, ea = Math.PI;
function Sp(r) {
  return Math.sqrt(r[0] * r[0] + r[1] * r[1]);
}
function Qf(r, t) {
  return (r[0] * t[0] + r[1] * t[1]) / (Sp(r) * Sp(t));
}
function bp(r, t) {
  return (r[0] * t[1] < r[1] * t[0] ? -1 : 1) * Math.acos(Qf(r, t));
}
function wp(r, t, e, n, i, a, o, s, l, u, f) {
  var h = l * (ea / 180), v = Ro(h) * (r - e) / 2 + Oo(h) * (t - n) / 2, c = -1 * Oo(h) * (r - e) / 2 + Ro(h) * (t - n) / 2, p = v * v / (o * o) + c * c / (s * s);
  p > 1 && (o *= Iu(p), s *= Iu(p));
  var d = (i === a ? -1 : 1) * Iu((o * o * (s * s) - o * o * (c * c) - s * s * (v * v)) / (o * o * (c * c) + s * s * (v * v))) || 0, g = d * o * c / s, y = d * -s * v / o, m = (r + e) / 2 + Ro(h) * g - Oo(h) * y, _ = (t + n) / 2 + Oo(h) * g + Ro(h) * y, S = bp([1, 0], [(v - g) / o, (c - y) / s]), w = [(v - g) / o, (c - y) / s], b = [(-1 * v - g) / o, (-1 * c - y) / s], x = bp(w, b);
  if (Qf(w, b) <= -1 && (x = ea), Qf(w, b) >= 1 && (x = 0), x < 0) {
    var T = Math.round(x / ea * 1e6) / 1e6;
    x = ea * 2 + T % 2 * ea;
  }
  f.addData(u, m, _, o, s, S, x, h, a);
}
var cT = /([mlvhzcqtsa])([^mlvhzcqtsa]*)/ig, vT = /-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g;
function pT(r) {
  var t = new kn();
  if (!r)
    return t;
  var e = 0, n = 0, i = e, a = n, o, s = kn.CMD, l = r.match(cT);
  if (!l)
    return t;
  for (var u = 0; u < l.length; u++) {
    for (var f = l[u], h = f.charAt(0), v = void 0, c = f.match(vT) || [], p = c.length, d = 0; d < p; d++)
      c[d] = parseFloat(c[d]);
    for (var g = 0; g < p; ) {
      var y = void 0, m = void 0, _ = void 0, S = void 0, w = void 0, b = void 0, x = void 0, T = e, A = n, M = void 0, C = void 0;
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
          y = e, m = n, M = t.len(), C = t.data, o === s.C && (y += e - C[M - 4], m += n - C[M - 3]), v = s.C, T = c[g++], A = c[g++], e = c[g++], n = c[g++], t.addData(v, y, m, T, A, e, n);
          break;
        case "s":
          y = e, m = n, M = t.len(), C = t.data, o === s.C && (y += e - C[M - 4], m += n - C[M - 3]), v = s.C, T = e + c[g++], A = n + c[g++], e += c[g++], n += c[g++], t.addData(v, y, m, T, A, e, n);
          break;
        case "Q":
          T = c[g++], A = c[g++], e = c[g++], n = c[g++], v = s.Q, t.addData(v, T, A, e, n);
          break;
        case "q":
          T = c[g++] + e, A = c[g++] + n, e += c[g++], n += c[g++], v = s.Q, t.addData(v, T, A, e, n);
          break;
        case "T":
          y = e, m = n, M = t.len(), C = t.data, o === s.Q && (y += e - C[M - 4], m += n - C[M - 3]), e = c[g++], n = c[g++], v = s.Q, t.addData(v, y, m, e, n);
          break;
        case "t":
          y = e, m = n, M = t.len(), C = t.data, o === s.Q && (y += e - C[M - 4], m += n - C[M - 3]), e += c[g++], n += c[g++], v = s.Q, t.addData(v, y, m, e, n);
          break;
        case "A":
          _ = c[g++], S = c[g++], w = c[g++], b = c[g++], x = c[g++], T = e, A = n, e = c[g++], n = c[g++], v = s.A, wp(T, A, e, n, b, x, _, S, w, v, t);
          break;
        case "a":
          _ = c[g++], S = c[g++], w = c[g++], b = c[g++], x = c[g++], T = e, A = n, e += c[g++], n += c[g++], v = s.A, wp(T, A, e, n, b, x, _, S, w, v, t);
          break;
      }
    }
    (h === "z" || h === "Z") && (v = s.Z, t.addData(v), e = i, n = a), o = v;
  }
  return t.toStatic(), t;
}
var Im = (function(r) {
  z(t, r);
  function t() {
    return r !== null && r.apply(this, arguments) || this;
  }
  return t.prototype.applyTransform = function(e) {
  }, t;
})(pt);
function Lm(r) {
  return r.setData != null;
}
function Pm(r, t) {
  var e = pT(r), n = B({}, t);
  return n.buildPath = function(i) {
    if (Lm(i)) {
      i.setData(e.data);
      var a = i.getContext();
      a && i.rebuildPath(a, 1);
    } else {
      var a = i;
      e.rebuildPath(a, 1);
    }
  }, n.applyTransform = function(i) {
    hT(e, i), this.dirtyShape();
  }, n;
}
function dT(r, t) {
  return new Im(Pm(r, t));
}
function gT(r, t) {
  var e = Pm(r, t), n = (function(i) {
    z(a, i);
    function a(o) {
      var s = i.call(this, o) || this;
      return s.applyTransform = e.applyTransform, s.buildPath = e.buildPath, s;
    }
    return a;
  })(Im);
  return n;
}
function yT(r, t) {
  for (var e = [], n = r.length, i = 0; i < n; i++) {
    var a = r[i];
    e.push(a.getUpdatedPathProxy(!0));
  }
  var o = new pt(t);
  return o.createPathProxy(), o.buildPath = function(s) {
    if (Lm(s)) {
      s.appendPath(e);
      var l = s.getContext();
      l && s.rebuildPath(l, 1);
    }
  }, o;
}
var mT = /* @__PURE__ */ (function() {
  function r() {
    this.cx = 0, this.cy = 0, this.r = 0;
  }
  return r;
})(), co = (function(r) {
  z(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultShape = function() {
    return new mT();
  }, t.prototype.buildPath = function(e, n) {
    e.moveTo(n.cx + n.r, n.cy), e.arc(n.cx, n.cy, n.r, 0, Math.PI * 2);
  }, t;
})(pt);
co.prototype.type = "circle";
var _T = /* @__PURE__ */ (function() {
  function r() {
    this.cx = 0, this.cy = 0, this.rx = 0, this.ry = 0;
  }
  return r;
})(), yl = (function(r) {
  z(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultShape = function() {
    return new _T();
  }, t.prototype.buildPath = function(e, n) {
    var i = 0.5522848, a = n.cx, o = n.cy, s = n.rx, l = n.ry, u = s * i, f = l * i;
    e.moveTo(a - s, o), e.bezierCurveTo(a - s, o - f, a - u, o - l, a, o - l), e.bezierCurveTo(a + u, o - l, a + s, o - f, a + s, o), e.bezierCurveTo(a + s, o + f, a + u, o + l, a, o + l), e.bezierCurveTo(a - u, o + l, a - s, o + f, a - s, o), e.closePath();
  }, t;
})(pt);
yl.prototype.type = "ellipse";
var Om = Math.PI, Lu = Om * 2, vn = Math.sin, Qn = Math.cos, ST = Math.acos, Gt = Math.atan2, xp = Math.abs, Ea = Math.sqrt, _a = Math.max, Ke = Math.min, Re = 1e-4;
function bT(r, t, e, n, i, a, o, s) {
  var l = e - r, u = n - t, f = o - i, h = s - a, v = h * l - f * u;
  if (!(v * v < Re))
    return v = (f * (t - a) - h * (r - i)) / v, [r + v * l, t + v * u];
}
function No(r, t, e, n, i, a, o) {
  var s = r - e, l = t - n, u = (o ? a : -a) / Ea(s * s + l * l), f = u * l, h = -u * s, v = r + f, c = t + h, p = e + f, d = n + h, g = (v + p) / 2, y = (c + d) / 2, m = p - v, _ = d - c, S = m * m + _ * _, w = i - a, b = v * d - p * c, x = (_ < 0 ? -1 : 1) * Ea(_a(0, w * w * S - b * b)), T = (b * _ - m * x) / S, A = (-b * m - _ * x) / S, M = (b * _ + m * x) / S, C = (-b * m + _ * x) / S, E = T - g, I = A - y, P = M - g, O = C - y;
  return E * E + I * I > P * P + O * O && (T = M, A = C), {
    cx: T,
    cy: A,
    x0: -f,
    y0: -h,
    x1: T * (i / w - 1),
    y1: A * (i / w - 1)
  };
}
function wT(r) {
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
function xT(r, t) {
  var e, n = _a(t.r, 0), i = _a(t.r0 || 0, 0), a = n > 0, o = i > 0;
  if (!(!a && !o)) {
    if (a || (n = i, i = 0), i > n) {
      var s = n;
      n = i, i = s;
    }
    var l = t.startAngle, u = t.endAngle;
    if (!(isNaN(l) || isNaN(u))) {
      var f = t.cx, h = t.cy, v = !!t.clockwise, c = xp(u - l), p = c > Lu && c % Lu;
      if (p > Re && (c = p), !(n > Re))
        r.moveTo(f, h);
      else if (c > Lu - Re)
        r.moveTo(f + n * Qn(l), h + n * vn(l)), r.arc(f, h, n, l, u, !v), i > Re && (r.moveTo(f + i * Qn(u), h + i * vn(u)), r.arc(f, h, i, u, l, v));
      else {
        var d = void 0, g = void 0, y = void 0, m = void 0, _ = void 0, S = void 0, w = void 0, b = void 0, x = void 0, T = void 0, A = void 0, M = void 0, C = void 0, E = void 0, I = void 0, P = void 0, O = n * Qn(l), R = n * vn(l), F = i * Qn(u), N = i * vn(u), V = c > Re;
        if (V) {
          var L = t.cornerRadius;
          L && (e = wT(L), d = e[0], g = e[1], y = e[2], m = e[3]);
          var k = xp(n - i) / 2;
          if (_ = Ke(k, y), S = Ke(k, m), w = Ke(k, d), b = Ke(k, g), A = x = _a(_, S), M = T = _a(w, b), (x > Re || T > Re) && (C = n * Qn(u), E = n * vn(u), I = i * Qn(l), P = i * vn(l), c < Om)) {
            var G = bT(O, R, I, P, C, E, F, N);
            if (G) {
              var X = O - G[0], rt = R - G[1], nt = C - G[0], It = E - G[1], Ht = 1 / vn(ST((X * nt + rt * It) / (Ea(X * X + rt * rt) * Ea(nt * nt + It * It))) / 2), ft = Ea(G[0] * G[0] + G[1] * G[1]);
              A = Ke(x, (n - ft) / (Ht + 1)), M = Ke(T, (i - ft) / (Ht - 1));
            }
          }
        }
        if (!V)
          r.moveTo(f + O, h + R);
        else if (A > Re) {
          var bt = Ke(y, A), yt = Ke(m, A), q = No(I, P, O, R, n, bt, v), it = No(C, E, F, N, n, yt, v);
          r.moveTo(f + q.cx + q.x0, h + q.cy + q.y0), A < x && bt === yt ? r.arc(f + q.cx, h + q.cy, A, Gt(q.y0, q.x0), Gt(it.y0, it.x0), !v) : (bt > 0 && r.arc(f + q.cx, h + q.cy, bt, Gt(q.y0, q.x0), Gt(q.y1, q.x1), !v), r.arc(f, h, n, Gt(q.cy + q.y1, q.cx + q.x1), Gt(it.cy + it.y1, it.cx + it.x1), !v), yt > 0 && r.arc(f + it.cx, h + it.cy, yt, Gt(it.y1, it.x1), Gt(it.y0, it.x0), !v));
        } else
          r.moveTo(f + O, h + R), r.arc(f, h, n, l, u, !v);
        if (!(i > Re) || !V)
          r.lineTo(f + F, h + N);
        else if (M > Re) {
          var bt = Ke(d, M), yt = Ke(g, M), q = No(F, N, C, E, i, -yt, v), it = No(O, R, I, P, i, -bt, v);
          r.lineTo(f + q.cx + q.x0, h + q.cy + q.y0), M < T && bt === yt ? r.arc(f + q.cx, h + q.cy, M, Gt(q.y0, q.x0), Gt(it.y0, it.x0), !v) : (yt > 0 && r.arc(f + q.cx, h + q.cy, yt, Gt(q.y0, q.x0), Gt(q.y1, q.x1), !v), r.arc(f, h, i, Gt(q.cy + q.y1, q.cx + q.x1), Gt(it.cy + it.y1, it.cx + it.x1), v), bt > 0 && r.arc(f + it.cx, h + it.cy, bt, Gt(it.y1, it.x1), Gt(it.y0, it.x0), !v));
        } else
          r.lineTo(f + F, h + N), r.arc(f, h, i, u, l, v);
      }
      r.closePath();
    }
  }
}
var TT = /* @__PURE__ */ (function() {
  function r() {
    this.cx = 0, this.cy = 0, this.r0 = 0, this.r = 0, this.startAngle = 0, this.endAngle = Math.PI * 2, this.clockwise = !0, this.cornerRadius = 0;
  }
  return r;
})(), Cr = (function(r) {
  z(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultShape = function() {
    return new TT();
  }, t.prototype.buildPath = function(e, n) {
    xT(e, n);
  }, t.prototype.isZeroArea = function() {
    return this.shape.startAngle === this.shape.endAngle || this.shape.r === this.shape.r0;
  }, t;
})(pt);
Cr.prototype.type = "sector";
var CT = /* @__PURE__ */ (function() {
  function r() {
    this.cx = 0, this.cy = 0, this.r = 0, this.r0 = 0;
  }
  return r;
})(), ml = (function(r) {
  z(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultShape = function() {
    return new CT();
  }, t.prototype.buildPath = function(e, n) {
    var i = n.cx, a = n.cy, o = Math.PI * 2;
    e.moveTo(i + n.r, a), e.arc(i, a, n.r, 0, o, !1), e.moveTo(i + n.r0, a), e.arc(i, a, n.r0, 0, o, !0);
  }, t;
})(pt);
ml.prototype.type = "ring";
function DT(r, t, e, n) {
  var i = [], a = [], o = [], s = [], l, u, f, h;
  if (n) {
    f = [1 / 0, 1 / 0], h = [-1 / 0, -1 / 0];
    for (var v = 0, c = r.length; v < c; v++)
      Vr(f, f, r[v]), Br(h, h, r[v]);
    Vr(f, f, n[0]), Br(h, h, n[1]);
  }
  for (var v = 0, c = r.length; v < c; v++) {
    var p = r[v];
    if (e)
      l = r[v ? v - 1 : c - 1], u = r[(v + 1) % c];
    else if (v === 0 || v === c - 1) {
      i.push(Iy(r[v]));
      continue;
    } else
      l = r[v - 1], u = r[v + 1];
    Ly(a, u, l), ss(a, a, t);
    var d = Ts(p, l), g = Ts(p, u), y = d + g;
    y !== 0 && (d /= y, g /= y), ss(o, a, -d), ss(s, a, g);
    var m = Mf([], p, o), _ = Mf([], p, s);
    n && (Br(m, m, f), Vr(m, m, h), Br(_, _, f), Vr(_, _, h)), i.push(m), i.push(_);
  }
  return e && i.push(i.shift()), i;
}
function Rm(r, t, e) {
  var n = t.smooth, i = t.points;
  if (i && i.length >= 2) {
    if (n) {
      var a = DT(i, n, e, t.smoothConstraint);
      r.moveTo(i[0][0], i[0][1]);
      for (var o = i.length, s = 0; s < (e ? o : o - 1); s++) {
        var l = a[s * 2], u = a[s * 2 + 1], f = i[(s + 1) % o];
        r.bezierCurveTo(l[0], l[1], u[0], u[1], f[0], f[1]);
      }
    } else {
      r.moveTo(i[0][0], i[0][1]);
      for (var s = 1, h = i.length; s < h; s++)
        r.lineTo(i[s][0], i[s][1]);
    }
    e && r.closePath();
  }
}
var MT = /* @__PURE__ */ (function() {
  function r() {
    this.points = null, this.smooth = 0, this.smoothConstraint = null;
  }
  return r;
})(), Ai = (function(r) {
  z(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultShape = function() {
    return new MT();
  }, t.prototype.buildPath = function(e, n) {
    Rm(e, n, !0);
  }, t;
})(pt);
Ai.prototype.type = "polygon";
var AT = /* @__PURE__ */ (function() {
  function r() {
    this.points = null, this.percent = 1, this.smooth = 0, this.smoothConstraint = null;
  }
  return r;
})(), Hn = (function(r) {
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
    return new AT();
  }, t.prototype.buildPath = function(e, n) {
    Rm(e, n, !1);
  }, t;
})(pt);
Hn.prototype.type = "polyline";
var ET = {}, IT = /* @__PURE__ */ (function() {
  function r() {
    this.x1 = 0, this.y1 = 0, this.x2 = 0, this.y2 = 0, this.percent = 1;
  }
  return r;
})(), xr = (function(r) {
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
    return new IT();
  }, t.prototype.buildPath = function(e, n) {
    var i, a, o, s;
    if (this.subPixelOptimize) {
      var l = _m(ET, n, this.style);
      i = l.x1, a = l.y1, o = l.x2, s = l.y2;
    } else
      i = n.x1, a = n.y1, o = n.x2, s = n.y2;
    var u = n.percent;
    u !== 0 && (e.moveTo(i, a), u < 1 && (o = i * (1 - u) + o * u, s = a * (1 - u) + s * u), e.lineTo(o, s));
  }, t.prototype.pointAt = function(e) {
    var n = this.shape;
    return [
      n.x1 * (1 - e) + n.x2 * e,
      n.y1 * (1 - e) + n.y2 * e
    ];
  }, t;
})(pt);
xr.prototype.type = "line";
var ie = [], LT = /* @__PURE__ */ (function() {
  function r() {
    this.x1 = 0, this.y1 = 0, this.x2 = 0, this.y2 = 0, this.cpx1 = 0, this.cpy1 = 0, this.percent = 1;
  }
  return r;
})();
function Tp(r, t, e) {
  var n = r.cpx2, i = r.cpy2;
  return n != null || i != null ? [
    (e ? Mv : kt)(r.x1, r.cpx1, r.cpx2, r.x2, t),
    (e ? Mv : kt)(r.y1, r.cpy1, r.cpy2, r.y2, t)
  ] : [
    (e ? Av : oe)(r.x1, r.cpx1, r.x2, t),
    (e ? Av : oe)(r.y1, r.cpy1, r.y2, t)
  ];
}
var _l = (function(r) {
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
    return new LT();
  }, t.prototype.buildPath = function(e, n) {
    var i = n.x1, a = n.y1, o = n.x2, s = n.y2, l = n.cpx1, u = n.cpy1, f = n.cpx2, h = n.cpy2, v = n.percent;
    v !== 0 && (e.moveTo(i, a), f == null || h == null ? (v < 1 && (Ls(i, l, o, v, ie), l = ie[1], o = ie[2], Ls(a, u, s, v, ie), u = ie[1], s = ie[2]), e.quadraticCurveTo(l, u, o, s)) : (v < 1 && (Is(i, l, f, o, v, ie), l = ie[1], f = ie[2], o = ie[3], Is(a, u, h, s, v, ie), u = ie[1], h = ie[2], s = ie[3]), e.bezierCurveTo(l, u, f, h, o, s)));
  }, t.prototype.pointAt = function(e) {
    return Tp(this.shape, e, !1);
  }, t.prototype.tangentAt = function(e) {
    var n = Tp(this.shape, e, !0);
    return Py(n, n);
  }, t;
})(pt);
_l.prototype.type = "bezier-curve";
var PT = /* @__PURE__ */ (function() {
  function r() {
    this.cx = 0, this.cy = 0, this.r = 0, this.startAngle = 0, this.endAngle = Math.PI * 2, this.clockwise = !0;
  }
  return r;
})(), vo = (function(r) {
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
    return new PT();
  }, t.prototype.buildPath = function(e, n) {
    var i = n.cx, a = n.cy, o = Math.max(n.r, 0), s = n.startAngle, l = n.endAngle, u = n.clockwise, f = Math.cos(s), h = Math.sin(s);
    e.moveTo(f * o + i, h * o + a), e.arc(i, a, o, s, l, !u);
  }, t;
})(pt);
vo.prototype.type = "arc";
var Nm = (function(r) {
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
    return this._updatePathDirty.call(this), pt.prototype.getBoundingRect.call(this);
  }, t;
})(pt), km = (function() {
  function r(t) {
    this.colorStops = t || [];
  }
  return r.prototype.addColorStop = function(t, e) {
    this.colorStops.push({
      offset: t,
      color: e
    });
  }, r;
})(), Sl = (function(r) {
  z(t, r);
  function t(e, n, i, a, o, s) {
    var l = r.call(this, o) || this;
    return l.x = e ?? 0, l.y = n ?? 0, l.x2 = i ?? 1, l.y2 = a ?? 0, l.type = "linear", l.global = s || !1, l;
  }
  return t;
})(km), Vm = (function(r) {
  z(t, r);
  function t(e, n, i, a, o) {
    var s = r.call(this, a) || this;
    return s.x = e ?? 0.5, s.y = n ?? 0.5, s.r = i ?? 0.5, s.type = "radial", s.global = o || !1, s;
  }
  return t;
})(km), pn = [0, 0], dn = [0, 0], ko = new K(), Vo = new K(), Gs = (function() {
  function r(t, e) {
    this._corners = [], this._axes = [], this._origin = [0, 0];
    for (var n = 0; n < 4; n++)
      this._corners[n] = new K();
    for (var n = 0; n < 2; n++)
      this._axes[n] = new K();
    t && this.fromBoundingRect(t, e);
  }
  return r.prototype.fromBoundingRect = function(t, e) {
    var n = this._corners, i = this._axes, a = t.x, o = t.y, s = a + t.width, l = o + t.height;
    if (n[0].set(a, o), n[1].set(s, o), n[2].set(s, l), n[3].set(a, l), e)
      for (var u = 0; u < 4; u++)
        n[u].transform(e);
    K.sub(i[0], n[1], n[0]), K.sub(i[1], n[3], n[0]), i[0].normalize(), i[1].normalize();
    for (var u = 0; u < 2; u++)
      this._origin[u] = i[u].dot(n[0]);
  }, r.prototype.intersect = function(t, e) {
    var n = !0, i = !e;
    return ko.set(1 / 0, 1 / 0), Vo.set(0, 0), !this._intersectCheckOneSide(this, t, ko, Vo, i, 1) && (n = !1, i) || !this._intersectCheckOneSide(t, this, ko, Vo, i, -1) && (n = !1, i) || i || K.copy(e, n ? ko : Vo), n;
  }, r.prototype._intersectCheckOneSide = function(t, e, n, i, a, o) {
    for (var s = !0, l = 0; l < 2; l++) {
      var u = this._axes[l];
      if (this._getProjMinMaxOnAxis(l, t._corners, pn), this._getProjMinMaxOnAxis(l, e._corners, dn), pn[1] < dn[0] || pn[0] > dn[1]) {
        if (s = !1, a)
          return s;
        var f = Math.abs(dn[0] - pn[1]), h = Math.abs(pn[0] - dn[1]);
        Math.min(f, h) > i.len() && (f < h ? K.scale(i, u, -f * o) : K.scale(i, u, h * o));
      } else if (n) {
        var f = Math.abs(dn[0] - pn[1]), h = Math.abs(pn[0] - dn[1]);
        Math.min(f, h) < n.len() && (f < h ? K.scale(n, u, f * o) : K.scale(n, u, -h * o));
      }
    }
    return s;
  }, r.prototype._getProjMinMaxOnAxis = function(t, e, n) {
    for (var i = this._axes[t], a = this._origin, o = e[0].dot(i) + a[t], s = o, l = o, u = 1; u < e.length; u++) {
      var f = e[u].dot(i) + a[t];
      s = Math.min(f, s), l = Math.max(f, l);
    }
    n[0] = s, n[1] = l;
  }, r;
})(), OT = [], Bm = (function(r) {
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
      for (var e = new lt(1 / 0, 1 / 0, -1 / 0, -1 / 0), n = 0; n < this._displayables.length; n++) {
        var i = this._displayables[n], a = i.getBoundingRect().clone();
        i.needLocalTransform() && a.applyTransform(i.getLocalTransform(OT)), e.union(a);
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
})(ho), RT = Mt();
function NT(r, t, e, n, i) {
  var a;
  if (t && t.ecModel) {
    var o = t.ecModel.getUpdatePayload();
    a = o && o.animation;
  }
  var s = t && t.isAnimationEnabled(), l = r === "update";
  if (s) {
    var u = void 0, f = void 0, h = void 0;
    n ? (u = Q(n.duration, 200), f = Q(n.easing, "cubicOut"), h = 0) : (u = t.getShallow(l ? "animationDurationUpdate" : "animationDuration"), f = t.getShallow(l ? "animationEasingUpdate" : "animationEasing"), h = t.getShallow(l ? "animationDelayUpdate" : "animationDelay")), a && (a.duration != null && (u = a.duration), a.easing != null && (f = a.easing), a.delay != null && (h = a.delay)), $(h) && (h = h(e, i)), $(u) && (u = u(e));
    var v = {
      duration: u || 0,
      delay: h,
      easing: f
    };
    return v;
  } else
    return null;
}
function uc(r, t, e, n, i, a, o) {
  var s = !1, l;
  $(i) ? (o = a, a = i, i = null) : W(i) && (a = i.cb, o = i.during, s = i.isFrom, l = i.removeOpt, i = i.dataIndex);
  var u = r === "leave";
  u || t.stopAnimation("leave");
  var f = NT(r, n, i, u ? l || {} : null, n && n.getAnimationDelayParams ? n.getAnimationDelayParams(t, i) : null);
  if (f && f.duration > 0) {
    var h = f.duration, v = f.delay, c = f.easing, p = {
      duration: h,
      delay: v || 0,
      easing: c,
      done: a,
      force: !!a || !!o,
      // Set to final state in update/init animation.
      // So the post processing based on the path shape can be done correctly.
      setToFinal: !u,
      scope: r,
      during: o
    };
    s ? t.animateFrom(e, p) : t.animateTo(e, p);
  } else
    t.stopAnimation(), !s && t.attr(e), o && o(1), a && a();
}
function Ot(r, t, e, n, i, a) {
  uc("update", r, t, e, n, i, a);
}
function fe(r, t, e, n, i, a) {
  uc("enter", r, t, e, n, i, a);
}
function Ia(r) {
  if (!r.__zr)
    return !0;
  for (var t = 0; t < r.animators.length; t++) {
    var e = r.animators[t];
    if (e.scope === "leave")
      return !0;
  }
  return !1;
}
function Ws(r, t, e, n, i, a) {
  Ia(r) || uc("leave", r, t, e, n, i, a);
}
function Cp(r, t, e, n) {
  r.removeTextContent(), r.removeTextGuideLine(), Ws(r, {
    style: {
      opacity: 0
    }
  }, t, e, n);
}
function Xa(r, t, e) {
  function n() {
    r.parent && r.parent.remove(r);
  }
  r.isGroup ? r.traverse(function(i) {
    i.isGroup || Cp(i, t, e, n);
  }) : Cp(r, t, e, n);
}
function bl(r) {
  RT(r).oldStyle = r.style;
}
var Us = Math.max, Ys = Math.min, Jf = {};
function zm(r) {
  return pt.extend(r);
}
var kT = gT;
function Fm(r, t) {
  return kT(r, t);
}
function Le(r, t) {
  Jf[r] = t;
}
function Hm(r) {
  if (Jf.hasOwnProperty(r))
    return Jf[r];
}
function wl(r, t, e, n) {
  var i = dT(r, t);
  return e && (n === "center" && (e = Gm(e, i.getBoundingRect())), hc(i, e)), i;
}
function fc(r, t, e) {
  var n = new Ye({
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
        n.setStyle(Gm(t, a));
      }
    }
  });
  return n;
}
function Gm(r, t) {
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
var Wm = yT;
function hc(r, t) {
  if (r.applyTransform) {
    var e = r.getBoundingRect(), n = e.calculateTransform(t);
    r.applyTransform(n);
  }
}
function $a(r, t) {
  return _m(r, r, {
    lineWidth: t
  }), r;
}
function VT(r) {
  return Sm(r.shape, r.shape, r.style), r;
}
var BT = Tn;
function La(r, t) {
  for (var e = ao([]); r && r !== t; )
    $r(e, r.getLocalTransform(), e), r = r.parent;
  return e;
}
function gi(r, t, e) {
  return t && !re(t) && (t = qh.getLocalTransform(t)), e && (t = oo([], t)), ee([], r, t);
}
function Um(r, t, e) {
  var n = t[4] === 0 || t[5] === 0 || t[0] === 0 ? 1 : Math.abs(2 * t[4] / t[0]), i = t[4] === 0 || t[5] === 0 || t[2] === 0 ? 1 : Math.abs(2 * t[4] / t[2]), a = [r === "left" ? -n : r === "right" ? n : 0, r === "top" ? -i : r === "bottom" ? i : 0];
  return a = gi(a, t, e), Math.abs(a[0]) > Math.abs(a[1]) ? a[0] > 0 ? "right" : "left" : a[1] > 0 ? "bottom" : "top";
}
function Dp(r) {
  return !r.isGroup;
}
function zT(r) {
  return r.shape != null;
}
function Ym(r, t, e) {
  if (!r || !t)
    return;
  function n(o) {
    var s = {};
    return o.traverse(function(l) {
      Dp(l) && l.anid && (s[l.anid] = l);
    }), s;
  }
  function i(o) {
    var s = {
      x: o.x,
      y: o.y,
      rotation: o.rotation
    };
    return zT(o) && (s.shape = B({}, o.shape)), s;
  }
  var a = n(r);
  t.traverse(function(o) {
    if (Dp(o) && o.anid) {
      var s = a[o.anid];
      if (s) {
        var l = i(o);
        o.attr(i(s)), Ot(o, l, e, at(o).dataIndex);
      }
    }
  });
}
function Xm(r, t) {
  return Y(r, function(e) {
    var n = e[0];
    n = Us(n, t.x), n = Ys(n, t.x + t.width);
    var i = e[1];
    return i = Us(i, t.y), i = Ys(i, t.y + t.height), [n, i];
  });
}
function $m(r, t) {
  var e = Us(r.x, t.x), n = Ys(r.x + r.width, t.x + t.width), i = Us(r.y, t.y), a = Ys(r.y + r.height, t.y + t.height);
  if (n >= e && a >= i)
    return {
      x: e,
      y: i,
      width: n - e,
      height: a - i
    };
}
function xl(r, t, e) {
  var n = B({
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
    return r.indexOf("image://") === 0 ? (i.image = r.slice(8), ut(i, e), new Ye(n)) : wl(r.replace("path://", ""), n, e, "center");
}
function FT(r, t, e, n, i) {
  for (var a = 0, o = i[i.length - 1]; a < i.length; a++) {
    var s = i[a];
    if (qm(r, t, e, n, s[0], s[1], o[0], o[1]))
      return !0;
    o = s;
  }
}
function qm(r, t, e, n, i, a, o, s) {
  var l = e - r, u = n - t, f = o - i, h = s - a, v = Pu(f, h, l, u);
  if (HT(v))
    return !1;
  var c = r - i, p = t - a, d = Pu(c, p, l, u) / v;
  if (d < 0 || d > 1)
    return !1;
  var g = Pu(c, p, f, h) / v;
  return !(g < 0 || g > 1);
}
function Pu(r, t, e, n) {
  return r * n - e * t;
}
function HT(r) {
  return r <= 1e-6 && r >= -1e-6;
}
function Tl(r) {
  var t = r.itemTooltipOption, e = r.componentModel, n = r.itemName, i = U(t) ? {
    formatter: t
  } : t, a = e.mainType, o = e.componentIndex, s = {
    componentType: a,
    name: n,
    $vars: ["name"]
  };
  s[a + "Index"] = o;
  var l = r.formatterParamsExtra;
  l && D(gt(l), function(f) {
    jr(s, f) || (s[f] = l[f], s.$vars.push(f));
  });
  var u = at(r.el);
  u.componentMainType = a, u.componentIndex = o, u.tooltipConfig = {
    name: n,
    option: ut({
      content: n,
      encodeHTMLContent: !0,
      formatterParams: s
    }, i)
  };
}
function Mp(r, t) {
  var e;
  r.isGroup && (e = t(r)), e || r.traverse(t);
}
function po(r, t) {
  if (r)
    if (H(r))
      for (var e = 0; e < r.length; e++)
        Mp(r[e], t);
    else
      Mp(r, t);
}
Le("circle", co);
Le("ellipse", yl);
Le("sector", Cr);
Le("ring", ml);
Le("polygon", Ai);
Le("polyline", Hn);
Le("rect", _t);
Le("line", xr);
Le("bezierCurve", _l);
Le("arc", vo);
const GT = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Arc: vo,
  BezierCurve: _l,
  BoundingRect: lt,
  Circle: co,
  CompoundPath: Nm,
  Ellipse: yl,
  Group: xt,
  Image: Ye,
  IncrementalDisplayable: Bm,
  Line: xr,
  LinearGradient: Sl,
  OrientedBoundingRect: Gs,
  Path: pt,
  Point: K,
  Polygon: Ai,
  Polyline: Hn,
  RadialGradient: Vm,
  Rect: _t,
  Ring: ml,
  Sector: Cr,
  Text: St,
  applyTransform: gi,
  clipPointsByRect: Xm,
  clipRectByRect: $m,
  createIcon: xl,
  extendPath: Fm,
  extendShape: zm,
  getShapeClass: Hm,
  getTransform: La,
  groupTransition: Ym,
  initProps: fe,
  isElementRemoved: Ia,
  lineLineIntersect: qm,
  linePolygonIntersect: FT,
  makeImage: fc,
  makePath: wl,
  mergePath: Wm,
  registerShape: Le,
  removeElement: Ws,
  removeElementWithFadeOut: Xa,
  resizePath: hc,
  setTooltipConfig: Tl,
  subPixelOptimize: BT,
  subPixelOptimizeLine: $a,
  subPixelOptimizeRect: VT,
  transformDirection: Um,
  traverseElements: po,
  updateProps: Ot
}, Symbol.toStringTag, { value: "Module" }));
var Cl = {};
function WT(r, t) {
  for (var e = 0; e < Ee.length; e++) {
    var n = Ee[e], i = t[n], a = r.ensureState(n);
    a.style = a.style || {}, a.style.text = i;
  }
  var o = r.currentStates.slice();
  r.clearStates(!0), r.setStyle({
    text: t.normal
  }), r.useStates(o, !0);
}
function Ap(r, t, e) {
  var n = r.labelFetcher, i = r.labelDataIndex, a = r.labelDimIndex, o = t.normal, s;
  n && (s = n.getFormattedLabel(i, "normal", null, a, o && o.get("formatter"), e != null ? {
    interpolatedValue: e
  } : null)), s == null && (s = $(r.defaultText) ? r.defaultText(i, r, e) : r.defaultText);
  for (var l = {
    normal: s
  }, u = 0; u < Ee.length; u++) {
    var f = Ee[u], h = t[f];
    l[f] = Q(n ? n.getFormattedLabel(i, f, null, a, h && h.get("formatter")) : null, s);
  }
  return l;
}
function Gn(r, t, e, n) {
  e = e || Cl;
  for (var i = r instanceof St, a = !1, o = 0; o < Bs.length; o++) {
    var s = t[Bs[o]];
    if (s && s.getShallow("show")) {
      a = !0;
      break;
    }
  }
  var l = i ? r : r.getTextContent();
  if (a) {
    i || (l || (l = new St(), r.setTextContent(l)), r.stateProxy && (l.stateProxy = r.stateProxy));
    var u = Ap(e, t), f = t.normal, h = !!f.getShallow("show"), v = de(f, n && n.normal, e, !1, !i);
    v.text = u.normal, i || r.setTextConfig(Ep(f, e, !1));
    for (var o = 0; o < Ee.length; o++) {
      var c = Ee[o], s = t[c];
      if (s) {
        var p = l.ensureState(c), d = !!Q(s.getShallow("show"), h);
        if (d !== h && (p.ignore = !d), p.style = de(s, n && n[c], e, !0, !i), p.style.text = u[c], !i) {
          var g = r.ensureState(c);
          g.textConfig = Ep(s, e, !0);
        }
      }
    }
    l.silent = !!f.getShallow("silent"), l.style.x != null && (v.x = l.style.x), l.style.y != null && (v.y = l.style.y), l.ignore = !h, l.useStyle(v), l.dirty(), e.enableTextSetter && (Dl(l).setLabelText = function(y) {
      var m = Ap(e, t, y);
      WT(l, m);
    });
  } else l && (l.ignore = !0);
  r.dirty();
}
function Kr(r, t) {
  t = t || "label";
  for (var e = {
    normal: r.getModel(t)
  }, n = 0; n < Ee.length; n++) {
    var i = Ee[n];
    e[i] = r.getModel([i, t]);
  }
  return e;
}
function de(r, t, e, n, i) {
  var a = {};
  return UT(a, r, e, n, i), t && B(a, t), a;
}
function Ep(r, t, e) {
  t = t || {};
  var n = {}, i, a = r.getShallow("rotate"), o = Q(r.getShallow("distance"), e ? null : 5), s = r.getShallow("offset");
  return i = r.getShallow("position") || (e ? null : "inside"), i === "outside" && (i = t.defaultOutsidePosition || "top"), i != null && (n.position = i), s != null && (n.offset = s), a != null && (a *= Math.PI / 180, n.rotation = a), o != null && (n.distance = o), n.outsideFill = r.get("color") === "inherit" ? t.inheritColor || null : "auto", n;
}
function UT(r, t, e, n, i) {
  e = e || Cl;
  var a = t.ecModel, o = a && a.option.textStyle, s = YT(t), l;
  if (s) {
    l = {};
    for (var u in s)
      if (s.hasOwnProperty(u)) {
        var f = t.getModel(["rich", u]);
        Op(l[u] = {}, f, o, e, n, i, !1, !0);
      }
  }
  l && (r.rich = l);
  var h = t.get("overflow");
  h && (r.overflow = h);
  var v = t.get("minMargin");
  v != null && (r.margin = v), Op(r, t, o, e, n, i, !0, !1);
}
function YT(r) {
  for (var t; r && r !== r.ecModel; ) {
    var e = (r.option || Cl).rich;
    if (e) {
      t = t || {};
      for (var n = gt(e), i = 0; i < n.length; i++) {
        var a = n[i];
        t[a] = 1;
      }
    }
    r = r.parentModel;
  }
  return t;
}
var Ip = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY"], Lp = ["align", "lineHeight", "width", "height", "tag", "verticalAlign", "ellipsis"], Pp = ["padding", "borderWidth", "borderRadius", "borderDashOffset", "backgroundColor", "borderColor", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"];
function Op(r, t, e, n, i, a, o, s) {
  e = !i && e || Cl;
  var l = n && n.inheritColor, u = t.getShallow("color"), f = t.getShallow("textBorderColor"), h = Q(t.getShallow("opacity"), e.opacity);
  (u === "inherit" || u === "auto") && (process.env.NODE_ENV !== "production" && u === "auto" && Et("color: 'auto'", "color: 'inherit'"), l ? u = l : u = null), (f === "inherit" || f === "auto") && (process.env.NODE_ENV !== "production" && f === "auto" && Et("color: 'auto'", "color: 'inherit'"), l ? f = l : f = null), a || (u = u || e.color, f = f || e.textBorderColor), u != null && (r.fill = u), f != null && (r.stroke = f);
  var v = Q(t.getShallow("textBorderWidth"), e.textBorderWidth);
  v != null && (r.lineWidth = v);
  var c = Q(t.getShallow("textBorderType"), e.textBorderType);
  c != null && (r.lineDash = c);
  var p = Q(t.getShallow("textBorderDashOffset"), e.textBorderDashOffset);
  p != null && (r.lineDashOffset = p), !i && h == null && !s && (h = n && n.defaultOpacity), h != null && (r.opacity = h), !i && !a && r.fill == null && n.inheritColor && (r.fill = n.inheritColor);
  for (var d = 0; d < Ip.length; d++) {
    var g = Ip[d], y = Q(t.getShallow(g), e[g]);
    y != null && (r[g] = y);
  }
  for (var d = 0; d < Lp.length; d++) {
    var g = Lp[d], y = t.getShallow(g);
    y != null && (r[g] = y);
  }
  if (r.verticalAlign == null) {
    var m = t.getShallow("baseline");
    m != null && (r.verticalAlign = m);
  }
  if (!o || !n.disableBox) {
    for (var d = 0; d < Pp.length; d++) {
      var g = Pp[d], y = t.getShallow(g);
      y != null && (r[g] = y);
    }
    var _ = t.getShallow("borderType");
    _ != null && (r.borderDash = _), (r.backgroundColor === "auto" || r.backgroundColor === "inherit") && l && (process.env.NODE_ENV !== "production" && r.backgroundColor === "auto" && Et("backgroundColor: 'auto'", "backgroundColor: 'inherit'"), r.backgroundColor = l), (r.borderColor === "auto" || r.borderColor === "inherit") && l && (process.env.NODE_ENV !== "production" && r.borderColor === "auto" && Et("borderColor: 'auto'", "borderColor: 'inherit'"), r.borderColor = l);
  }
}
function XT(r, t) {
  var e = t && t.getModel("textStyle");
  return Ve([
    // FIXME in node-canvas fontWeight is before fontStyle
    r.fontStyle || e && e.getShallow("fontStyle") || "",
    r.fontWeight || e && e.getShallow("fontWeight") || "",
    (r.fontSize || e && e.getShallow("fontSize") || 12) + "px",
    r.fontFamily || e && e.getShallow("fontFamily") || "sans-serif"
  ].join(" "));
}
var Dl = Mt();
function $T(r, t, e, n) {
  if (r) {
    var i = Dl(r);
    i.prevValue = i.value, i.value = e;
    var a = t.normal;
    i.valueAnimation = a.get("valueAnimation"), i.valueAnimation && (i.precision = a.get("precision"), i.defaultInterpolatedText = n, i.statesModels = t);
  }
}
var qT = ["textStyle", "color"], Ou = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "padding", "lineHeight", "rich", "width", "height", "overflow"], Ru = new St(), ZT = (
  /** @class */
  (function() {
    function r() {
    }
    return r.prototype.getTextColor = function(t) {
      var e = this.ecModel;
      return this.getShallow("color") || (!t && e ? e.get(qT) : null);
    }, r.prototype.getFont = function() {
      return XT({
        fontStyle: this.getShallow("fontStyle"),
        fontWeight: this.getShallow("fontWeight"),
        fontSize: this.getShallow("fontSize"),
        fontFamily: this.getShallow("fontFamily")
      }, this.ecModel);
    }, r.prototype.getTextRect = function(t) {
      for (var e = {
        text: t,
        verticalAlign: this.getShallow("verticalAlign") || this.getShallow("baseline")
      }, n = 0; n < Ou.length; n++)
        e[Ou[n]] = this.getShallow(Ou[n]);
      return Ru.useStyle(e), Ru.update(), Ru.getBoundingRect();
    }, r;
  })()
), Zm = [
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
], jT = Ua(Zm), KT = (
  /** @class */
  (function() {
    function r() {
    }
    return r.prototype.getLineStyle = function(t) {
      return jT(this, t);
    }, r;
  })()
), jm = [
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
], QT = Ua(jm), JT = (
  /** @class */
  (function() {
    function r() {
    }
    return r.prototype.getItemStyle = function(t, e) {
      return QT(this, t, e);
    }, r;
  })()
), mt = (
  /** @class */
  (function() {
    function r(t, e, n) {
      this.parentModel = e, this.ecModel = n, this.option = t;
    }
    return r.prototype.init = function(t, e, n) {
    }, r.prototype.mergeOption = function(t, e) {
      st(this.option, t, !0);
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
      return new t(j(this.option));
    }, r.prototype.parsePath = function(t) {
      return typeof t == "string" ? t.split(".") : t;
    }, r.prototype.resolveParentPath = function(t) {
      return t;
    }, r.prototype.isAnimationEnabled = function() {
      if (!Z.node && this.option) {
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
nc(mt);
Zw(mt);
Ie(mt, KT);
Ie(mt, JT);
Ie(mt, tx);
Ie(mt, ZT);
var tC = Math.round(Math.random() * 10);
function Ml(r) {
  return [r || "", tC++].join("_");
}
function eC(r) {
  var t = {};
  r.registerSubTypeDefaulter = function(e, n) {
    var i = rr(e);
    t[i.main] = n;
  }, r.determineSubType = function(e, n) {
    var i = n.type;
    if (!i) {
      var a = rr(e).main;
      r.hasSubTypes(e) && t[a] && (i = t[a](n));
    }
    return i;
  };
}
function rC(r, t) {
  r.topologicalTravel = function(a, o, s, l) {
    if (!a.length)
      return;
    var u = e(o), f = u.graph, h = u.noEntryList, v = {};
    for (D(a, function(m) {
      v[m] = !0;
    }); h.length; ) {
      var c = h.pop(), p = f[c], d = !!v[c];
      d && (s.call(l, c, p.originalDeps.slice()), delete v[c]), D(p.successor, d ? y : g);
    }
    D(v, function() {
      var m = "";
      throw process.env.NODE_ENV !== "production" && (m = Ns("Circular dependency may exists: ", v, a, o)), new Error(m);
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
    return D(a, function(l) {
      var u = n(o, l), f = u.originalDeps = t(l), h = i(f, a);
      u.entryCount = h.length, u.entryCount === 0 && s.push(l), D(h, function(v) {
        vt(u.predecessor, v) < 0 && u.predecessor.push(v);
        var c = n(o, v);
        vt(c.successor, v) < 0 && c.successor.push(l);
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
    return D(a, function(l) {
      vt(o, l) >= 0 && s.push(l);
    }), s;
  }
}
function Al(r, t) {
  return st(st({}, r, !0), t, !0);
}
const nC = {
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
}, iC = {
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
var Xs = "ZH", cc = "EN", yi = cc, ys = {}, vc = {}, Km = Z.domSupported ? (function() {
  var r = (
    /* eslint-disable-next-line */
    (document.documentElement.lang || navigator.language || navigator.browserLanguage || yi).toUpperCase()
  );
  return r.indexOf(Xs) > -1 ? Xs : yi;
})() : yi;
function pc(r, t) {
  r = r.toUpperCase(), vc[r] = new mt(t), ys[r] = t;
}
function aC(r) {
  if (U(r)) {
    var t = ys[r.toUpperCase()] || {};
    return r === Xs || r === cc ? j(t) : st(j(t), j(ys[yi]), !1);
  } else
    return st(j(r), j(ys[yi]), !1);
}
function oC(r) {
  return vc[r];
}
function sC() {
  return vc[yi];
}
pc(cc, nC);
pc(Xs, iC);
var dc = 1e3, gc = dc * 60, Pa = gc * 60, Me = Pa * 24, Rp = Me * 365, Sa = {
  year: "{yyyy}",
  month: "{MMM}",
  day: "{d}",
  hour: "{HH}:{mm}",
  minute: "{HH}:{mm}",
  second: "{HH}:{mm}:{ss}",
  millisecond: "{HH}:{mm}:{ss} {SSS}",
  none: "{yyyy}-{MM}-{dd} {HH}:{mm}:{ss} {SSS}"
}, Bo = "{yyyy}-{MM}-{dd}", Np = {
  year: "{yyyy}",
  month: "{yyyy}-{MM}",
  day: Bo,
  hour: Bo + " " + Sa.hour,
  minute: Bo + " " + Sa.minute,
  second: Bo + " " + Sa.second,
  millisecond: Sa.none
}, Nu = ["year", "month", "day", "hour", "minute", "second", "millisecond"], Qm = ["year", "half-year", "quarter", "month", "week", "half-week", "day", "half-day", "quarter-day", "hour", "minute", "second", "millisecond"];
function Kt(r, t) {
  return r += "", "0000".substr(0, t - r.length) + r;
}
function mi(r) {
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
function lC(r) {
  return r === mi(r);
}
function uC(r) {
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
function go(r, t, e, n) {
  var i = Ae(r), a = i[yc(e)](), o = i[_i(e)]() + 1, s = Math.floor((o - 1) / 3) + 1, l = i[El(e)](), u = i["get" + (e ? "UTC" : "") + "Day"](), f = i[qa(e)](), h = (f - 1) % 12 + 1, v = i[Il(e)](), c = i[Ll(e)](), p = i[Pl(e)](), d = f >= 12 ? "pm" : "am", g = d.toUpperCase(), y = n instanceof mt ? n : oC(n || Km) || sC(), m = y.getModel("time"), _ = m.get("month"), S = m.get("monthAbbr"), w = m.get("dayOfWeek"), b = m.get("dayOfWeekAbbr");
  return (t || "").replace(/{a}/g, d + "").replace(/{A}/g, g + "").replace(/{yyyy}/g, a + "").replace(/{yy}/g, Kt(a % 100 + "", 2)).replace(/{Q}/g, s + "").replace(/{MMMM}/g, _[o - 1]).replace(/{MMM}/g, S[o - 1]).replace(/{MM}/g, Kt(o, 2)).replace(/{M}/g, o + "").replace(/{dd}/g, Kt(l, 2)).replace(/{d}/g, l + "").replace(/{eeee}/g, w[u]).replace(/{ee}/g, b[u]).replace(/{e}/g, u + "").replace(/{HH}/g, Kt(f, 2)).replace(/{H}/g, f + "").replace(/{hh}/g, Kt(h + "", 2)).replace(/{h}/g, h + "").replace(/{mm}/g, Kt(v, 2)).replace(/{m}/g, v + "").replace(/{ss}/g, Kt(c, 2)).replace(/{s}/g, c + "").replace(/{SSS}/g, Kt(p, 3)).replace(/{S}/g, p + "");
}
function fC(r, t, e, n, i) {
  var a = null;
  if (U(e))
    a = e;
  else if ($(e))
    a = e(r.value, t, {
      level: r.level
    });
  else {
    var o = B({}, Sa);
    if (r.level > 0)
      for (var s = 0; s < Nu.length; ++s)
        o[Nu[s]] = "{primary|" + o[Nu[s]] + "}";
    var l = e ? e.inherit === !1 ? e : ut(e, o) : o, u = Jm(r.value, i);
    if (l[u])
      a = l[u];
    else if (l.inherit) {
      for (var f = Qm.indexOf(u), s = f - 1; s >= 0; --s)
        if (l[u]) {
          a = l[u];
          break;
        }
      a = a || o.none;
    }
    if (H(a)) {
      var h = r.level == null ? 0 : r.level >= 0 ? r.level : a.length + r.level;
      h = Math.min(h, a.length - 1), a = a[h];
    }
  }
  return go(new Date(r.value), a, i, n);
}
function Jm(r, t) {
  var e = Ae(r), n = e[_i(t)]() + 1, i = e[El(t)](), a = e[qa(t)](), o = e[Il(t)](), s = e[Ll(t)](), l = e[Pl(t)](), u = l === 0, f = u && s === 0, h = f && o === 0, v = h && a === 0, c = v && i === 1, p = c && n === 1;
  return p ? "year" : c ? "month" : v ? "day" : h ? "hour" : f ? "minute" : u ? "second" : "millisecond";
}
function kp(r, t, e) {
  var n = dt(r) ? Ae(r) : r;
  switch (t = t || Jm(r, e), t) {
    case "year":
      return n[yc(e)]();
    case "half-year":
      return n[_i(e)]() >= 6 ? 1 : 0;
    case "quarter":
      return Math.floor((n[_i(e)]() + 1) / 4);
    case "month":
      return n[_i(e)]();
    case "day":
      return n[El(e)]();
    case "half-day":
      return n[qa(e)]() / 24;
    case "hour":
      return n[qa(e)]();
    case "minute":
      return n[Il(e)]();
    case "second":
      return n[Ll(e)]();
    case "millisecond":
      return n[Pl(e)]();
  }
}
function yc(r) {
  return r ? "getUTCFullYear" : "getFullYear";
}
function _i(r) {
  return r ? "getUTCMonth" : "getMonth";
}
function El(r) {
  return r ? "getUTCDate" : "getDate";
}
function qa(r) {
  return r ? "getUTCHours" : "getHours";
}
function Il(r) {
  return r ? "getUTCMinutes" : "getMinutes";
}
function Ll(r) {
  return r ? "getUTCSeconds" : "getSeconds";
}
function Pl(r) {
  return r ? "getUTCMilliseconds" : "getMilliseconds";
}
function hC(r) {
  return r ? "setUTCFullYear" : "setFullYear";
}
function t0(r) {
  return r ? "setUTCMonth" : "setMonth";
}
function e0(r) {
  return r ? "setUTCDate" : "setDate";
}
function r0(r) {
  return r ? "setUTCHours" : "setHours";
}
function n0(r) {
  return r ? "setUTCMinutes" : "setMinutes";
}
function i0(r) {
  return r ? "setUTCSeconds" : "setSeconds";
}
function a0(r) {
  return r ? "setUTCMilliseconds" : "setMilliseconds";
}
function cC(r, t, e, n, i, a, o, s) {
  var l = new St({
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
  return l.getBoundingRect();
}
function mc(r) {
  if (!tc(r))
    return U(r) ? r : "-";
  var t = (r + "").split(".");
  return t[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (t.length > 1 ? "." + t[1] : "");
}
function _c(r, t) {
  return r = (r || "").toLowerCase().replace(/-(.)/g, function(e, n) {
    return n.toUpperCase();
  }), t && r && (r = r.charAt(0).toUpperCase() + r.slice(1)), r;
}
var Ei = Fh;
function th(r, t, e) {
  var n = "{yyyy}-{MM}-{dd} {HH}:{mm}:{ss}";
  function i(f) {
    return f && Ve(f) ? f : "-";
  }
  function a(f) {
    return !!(f != null && !isNaN(f) && isFinite(f));
  }
  var o = t === "time", s = r instanceof Date;
  if (o || s) {
    var l = o ? Ae(r) : r;
    if (isNaN(+l)) {
      if (s)
        return "-";
    } else return go(l, n, e);
  }
  if (t === "ordinal")
    return Va(r) ? i(r) : dt(r) && a(r) ? r + "" : "-";
  var u = Wa(r);
  return a(u) ? mc(u) : Va(r) ? i(r) : typeof r == "boolean" ? r + "" : "-";
}
var Vp = ["a", "b", "c", "d", "e", "f", "g"], ku = function(r, t) {
  return "{" + r + (t ?? "") + "}";
};
function Sc(r, t, e) {
  H(t) || (t = [t]);
  var n = t.length;
  if (!n)
    return "";
  for (var i = t[0].$vars || [], a = 0; a < i.length; a++) {
    var o = Vp[a];
    r = r.replace(ku(o), ku(o, 0));
  }
  for (var s = 0; s < n; s++)
    for (var l = 0; l < i.length; l++) {
      var u = t[s][i[l]];
      r = r.replace(ku(Vp[l], s), e ? te(u) : u);
    }
  return r;
}
function o0(r, t) {
  var e = U(r) ? {
    color: r,
    extraCssText: t
  } : r || {}, n = e.color, i = e.type;
  t = e.extraCssText;
  var a = e.renderMode || "html";
  if (!n)
    return "";
  if (a === "html")
    return i === "subItem" ? '<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:' + te(n) + ";" + (t || "") + '"></span>' : '<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:' + te(n) + ";" + (t || "") + '"></span>';
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
function vC(r, t, e) {
  process.env.NODE_ENV !== "production" && Et("echarts.format.formatTime", "echarts.time.format"), (r === "week" || r === "month" || r === "quarter" || r === "half-year" || r === "year") && (r = `MM-dd
yyyy`);
  var n = Ae(t), i = e ? "getUTC" : "get", a = n[i + "FullYear"](), o = n[i + "Month"]() + 1, s = n[i + "Date"](), l = n[i + "Hours"](), u = n[i + "Minutes"](), f = n[i + "Seconds"](), h = n[i + "Milliseconds"]();
  return r = r.replace("MM", Kt(o, 2)).replace("M", o).replace("yyyy", a).replace("yy", Kt(a % 100 + "", 2)).replace("dd", Kt(s, 2)).replace("d", s).replace("hh", Kt(l, 2)).replace("h", l).replace("mm", Kt(u, 2)).replace("m", u).replace("ss", Kt(f, 2)).replace("s", f).replace("SSS", Kt(h, 3)), r;
}
function pC(r) {
  return r && r.charAt(0).toUpperCase() + r.substr(1);
}
function Bn(r, t) {
  return t = t || "transparent", U(r) ? r : W(r) && r.colorStops && (r.colorStops[0] || {}).color || t;
}
function Bp(r, t) {
  if (t === "_blank" || t === "blank") {
    var e = window.open();
    e.opener = null, e.location.href = r;
  } else
    window.open(r, t);
}
var ms = D, dC = ["left", "right", "top", "bottom", "width", "height"], zo = [["width", "left", "right"], ["height", "top", "bottom"]];
function bc(r, t, e, n, i) {
  var a = 0, o = 0;
  n == null && (n = 1 / 0), i == null && (i = 1 / 0);
  var s = 0;
  t.eachChild(function(l, u) {
    var f = l.getBoundingRect(), h = t.childAt(u + 1), v = h && h.getBoundingRect(), c, p;
    if (r === "horizontal") {
      var d = f.width + (v ? -v.x + f.x : 0);
      c = a + d, c > n || l.newline ? (a = 0, c = d, o += s + e, s = f.height) : s = Math.max(s, f.height);
    } else {
      var g = f.height + (v ? -v.y + f.y : 0);
      p = o + g, p > i || l.newline ? (a += s + e, o = 0, p = g, s = f.width) : s = Math.max(s, f.width);
    }
    l.newline || (l.x = a, l.y = o, l.markRedraw(), r === "horizontal" ? a = c + e : o = p + e);
  });
}
var Si = bc;
wt(bc, "vertical");
wt(bc, "horizontal");
function ar(r, t, e) {
  e = Ei(e || 0);
  var n = t.width, i = t.height, a = ct(r.left, n), o = ct(r.top, i), s = ct(r.right, n), l = ct(r.bottom, i), u = ct(r.width, n), f = ct(r.height, i), h = e[2] + e[0], v = e[1] + e[3], c = r.aspect;
  switch (isNaN(u) && (u = n - s - v - a), isNaN(f) && (f = i - l - h - o), c != null && (isNaN(u) && isNaN(f) && (c > n / i ? u = n * 0.8 : f = i * 0.8), isNaN(u) && (u = c * f), isNaN(f) && (f = u / c)), isNaN(a) && (a = n - s - u - v), isNaN(o) && (o = i - l - f - h), r.left || r.right) {
    case "center":
      a = n / 2 - u / 2 - e[3];
      break;
    case "right":
      a = n - u - v;
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
  a = a || 0, o = o || 0, isNaN(u) && (u = n - v - a - (s || 0)), isNaN(f) && (f = i - h - o - (l || 0));
  var p = new lt(a + e[3], o + e[0], u, f);
  return p.margin = e, p;
}
function gC(r, t, e, n, i, a) {
  a = a || r, a.x = r.x, a.y = r.y;
  var o;
  if (o = r.getBoundingRect(), r.needLocalTransform()) {
    var s = r.getLocalTransform();
    o = o.clone(), o.applyTransform(s);
  }
  var l = ar(ut({
    width: o.width,
    height: o.height
  }, t), e, n), u = l.x - o.x, f = l.y - o.y;
  return a.x += u, a.y += f, a === r && r.markRedraw(), !0;
}
function Za(r) {
  var t = r.layoutMode || r.constructor.layoutMode;
  return W(t) ? t : t ? {
    type: t
  } : null;
}
function Ti(r, t, e) {
  var n = e && e.ignoreSize;
  !H(n) && (n = [n, n]);
  var i = o(zo[0], 0), a = o(zo[1], 1);
  u(zo[0], r, i), u(zo[1], r, a);
  function o(f, h) {
    var v = {}, c = 0, p = {}, d = 0, g = 2;
    if (ms(f, function(_) {
      p[_] = r[_];
    }), ms(f, function(_) {
      s(t, _) && (v[_] = p[_] = t[_]), l(v, _) && c++, l(p, _) && d++;
    }), n[h])
      return l(t, f[1]) ? p[f[2]] = null : l(t, f[2]) && (p[f[1]] = null), p;
    if (d === g || !c)
      return p;
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
  function l(f, h) {
    return f[h] != null && f[h] !== "auto";
  }
  function u(f, h, v) {
    ms(f, function(c) {
      h[c] = v[c];
    });
  }
}
function Ol(r) {
  return yC({}, r);
}
function yC(r, t) {
  return t && r && ms(dC, function(e) {
    t.hasOwnProperty(e) && (r[e] = t[e]);
  }), r;
}
var mC = Mt(), ot = (
  /** @class */
  (function(r) {
    z(t, r);
    function t(e, n, i) {
      var a = r.call(this, e, n, i) || this;
      return a.uid = Ml("ec_cpt_model"), a;
    }
    return t.prototype.init = function(e, n, i) {
      this.mergeDefaultAndTheme(e, i);
    }, t.prototype.mergeDefaultAndTheme = function(e, n) {
      var i = Za(this), a = i ? Ol(e) : {}, o = n.getTheme();
      st(e, o.get(this.mainType)), st(e, this.getDefaultOption()), i && Ti(e, a, i);
    }, t.prototype.mergeOption = function(e, n) {
      st(this.option, e, !0);
      var i = Za(this);
      i && Ti(this.option, e, i);
    }, t.prototype.optionUpdated = function(e, n) {
    }, t.prototype.getDefaultOption = function() {
      var e = this.constructor;
      if (!Xw(e))
        return e.defaultOption;
      var n = mC(this);
      if (!n.defaultOption) {
        for (var i = [], a = e; a; ) {
          var o = a.prototype.defaultOption;
          o && i.push(o), a = a.superClass;
        }
        for (var s = {}, l = i.length - 1; l >= 0; l--)
          s = st(s, i[l], !0);
        n.defaultOption = s;
      }
      return n.defaultOption;
    }, t.prototype.getReferringComponents = function(e, n) {
      var i = e + "Index", a = e + "Id";
      return fo(this.ecModel, e, {
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
  })(mt)
);
fm(ot, mt);
hl(ot);
eC(ot);
rC(ot, _C);
function _C(r) {
  var t = [];
  return D(ot.getClassesByMainType(r), function(e) {
    t = t.concat(e.dependencies || e.prototype.dependencies || []);
  }), t = Y(t, function(e) {
    return rr(e).main;
  }), r !== "dataset" && vt(t, "dataset") <= 0 && t.unshift("dataset"), t;
}
var s0 = "";
typeof navigator < "u" && (s0 = navigator.platform || "");
var Jn = "rgba(0, 0, 0, 0.2)";
const SC = {
  darkMode: "auto",
  // backgroundColor: 'rgba(0,0,0,0)',
  colorBy: "series",
  color: ["#5470c6", "#91cc75", "#fac858", "#ee6666", "#73c0de", "#3ba272", "#fc8452", "#9a60b4", "#ea7ccc"],
  gradientColor: ["#f6efa6", "#d88273", "#bf444c"],
  aria: {
    decal: {
      decals: [{
        color: Jn,
        dashArrayX: [1, 0],
        dashArrayY: [2, 5],
        symbolSize: 1,
        rotation: Math.PI / 6
      }, {
        color: Jn,
        symbol: "circle",
        dashArrayX: [[8, 8], [0, 8, 8, 0]],
        dashArrayY: [6, 0],
        symbolSize: 0.8
      }, {
        color: Jn,
        dashArrayX: [1, 0],
        dashArrayY: [4, 3],
        rotation: -Math.PI / 4
      }, {
        color: Jn,
        dashArrayX: [[6, 6], [0, 6, 6, 0]],
        dashArrayY: [6, 0]
      }, {
        color: Jn,
        dashArrayX: [[1, 0], [1, 6]],
        dashArrayY: [1, 0, 6, 0],
        rotation: Math.PI / 4
      }, {
        color: Jn,
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
    fontFamily: s0.match(/^Win/) ? "Microsoft YaHei" : "sans-serif",
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
var eh = et(["tooltip", "label", "itemName", "itemId", "itemGroupId", "itemChildGroupId", "seriesName"]), Pe = "original", he = "arrayRows", Xe = "objectRows", sr = "keyedColumns", Sr = "typedArray", l0 = "unknown", br = "column", Ii = "row", Rt = {
  Must: 1,
  Might: 2,
  Not: 3
  // Other cases
}, u0 = Mt();
function bC(r) {
  u0(r).datasetMap = et();
}
function wC(r, t, e) {
  var n = {}, i = wc(t);
  if (!i || !r)
    return n;
  var a = [], o = [], s = t.ecModel, l = u0(s).datasetMap, u = i.uid + "_" + e.seriesLayoutBy, f, h;
  r = r.slice(), D(r, function(d, g) {
    var y = W(d) ? d : r[g] = {
      name: d
    };
    y.type === "ordinal" && f == null && (f = g, h = p(y)), n[y.name] = [];
  });
  var v = l.get(u) || l.set(u, {
    categoryWayDim: h,
    valueWayDim: 0
  });
  D(r, function(d, g) {
    var y = d.name, m = p(d);
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
  function c(d, g, y) {
    for (var m = 0; m < y; m++)
      d.push(g + m);
  }
  function p(d) {
    var g = d.dimsDef;
    return g ? g.length : 1;
  }
  return a.length && (n.itemName = a), o.length && (n.seriesName = o), n;
}
function f0(r, t, e) {
  var n = {}, i = wc(r);
  if (!i)
    return n;
  var a = t.sourceFormat, o = t.dimensionsDefine, s;
  (a === Xe || a === sr) && D(o, function(f, h) {
    (W(f) ? f.name : f) === "name" && (s = h);
  });
  var l = (function() {
    for (var f = {}, h = {}, v = [], c = 0, p = Math.min(5, e); c < p; c++) {
      var d = c0(t.data, a, t.seriesLayoutBy, o, t.startIndex, c);
      v.push(d);
      var g = d === Rt.Not;
      if (g && f.v == null && c !== s && (f.v = c), (f.n == null || f.n === f.v || !g && v[f.n] === Rt.Not) && (f.n = c), y(f) && v[f.n] !== Rt.Not)
        return f;
      g || (d === Rt.Might && h.v == null && c !== s && (h.v = c), (h.n == null || h.n === h.v) && (h.n = c));
    }
    function y(m) {
      return m.v != null && m.n != null;
    }
    return y(f) ? f : y(h) ? h : null;
  })();
  if (l) {
    n.value = [l.v];
    var u = s ?? l.n;
    n.itemName = [u], n.seriesName = [u];
  }
  return n;
}
function wc(r) {
  var t = r.get("data", !0);
  if (!t)
    return fo(r.ecModel, "dataset", {
      index: r.get("datasetIndex", !0),
      id: r.get("datasetId", !0)
    }, Be).models[0];
}
function xC(r) {
  return !r.get("transform", !0) && !r.get("fromTransformResult", !0) ? [] : fo(r.ecModel, "dataset", {
    index: r.get("fromDatasetIndex", !0),
    id: r.get("fromDatasetId", !0)
  }, Be).models;
}
function h0(r, t) {
  return c0(r.data, r.sourceFormat, r.seriesLayoutBy, r.dimensionsDefine, r.startIndex, t);
}
function c0(r, t, e, n, i, a) {
  var o, s = 5;
  if (qt(r))
    return Rt.Not;
  var l, u;
  if (n) {
    var f = n[a];
    W(f) ? (l = f.name, u = f.type) : U(f) && (l = f);
  }
  if (u != null)
    return u === "ordinal" ? Rt.Must : Rt.Not;
  if (t === he) {
    var h = r;
    if (e === Ii) {
      for (var v = h[a], c = 0; c < (v || []).length && c < s; c++)
        if ((o = S(v[i + c])) != null)
          return o;
    } else
      for (var c = 0; c < h.length && c < s; c++) {
        var p = h[i + c];
        if (p && (o = S(p[a])) != null)
          return o;
      }
  } else if (t === Xe) {
    var d = r;
    if (!l)
      return Rt.Not;
    for (var c = 0; c < d.length && c < s; c++) {
      var g = d[c];
      if (g && (o = S(g[l])) != null)
        return o;
    }
  } else if (t === sr) {
    var y = r;
    if (!l)
      return Rt.Not;
    var v = y[l];
    if (!v || qt(v))
      return Rt.Not;
    for (var c = 0; c < v.length && c < s; c++)
      if ((o = S(v[c])) != null)
        return o;
  } else if (t === Pe)
    for (var m = r, c = 0; c < m.length && c < s; c++) {
      var g = m[c], _ = uo(g);
      if (!H(_))
        return Rt.Not;
      if ((o = S(_[a])) != null)
        return o;
    }
  function S(w) {
    var b = U(w);
    if (w != null && Number.isFinite(Number(w)) && w !== "")
      return b ? Rt.Might : Rt.Not;
    if (b && w !== "-")
      return Rt.Must;
  }
  return Rt.Not;
}
var TC = et();
function CC(r, t, e) {
  var n = TC.get(t);
  if (!n)
    return e;
  var i = n(r);
  if (!i)
    return e;
  if (process.env.NODE_ENV !== "production")
    for (var a = 0; a < i.length; a++)
      tt(wi(i[a]));
  return e.concat(i);
}
var zp = Mt();
Mt();
var xc = (
  /** @class */
  (function() {
    function r() {
    }
    return r.prototype.getColorFromPalette = function(t, e, n) {
      var i = Bt(this.get("color", !0)), a = this.get("colorLayer", !0);
      return MC(this, zp, i, a, t, e, n);
    }, r.prototype.clearColorPalette = function() {
      AC(this, zp);
    }, r;
  })()
);
function DC(r, t) {
  for (var e = r.length, n = 0; n < e; n++)
    if (r[n].length > t)
      return r[n];
  return r[e - 1];
}
function MC(r, t, e, n, i, a, o) {
  a = a || r;
  var s = t(a), l = s.paletteIdx || 0, u = s.paletteNameMap = s.paletteNameMap || {};
  if (u.hasOwnProperty(i))
    return u[i];
  var f = o == null || !n ? e : DC(n, o);
  if (f = f || e, !(!f || !f.length)) {
    var h = f[l];
    return i && (u[i] = h), s.paletteIdx = (l + 1) % f.length, h;
  }
}
function AC(r, t) {
  t(r).paletteIdx = 0, t(r).paletteNameMap = {};
}
var Fo, ra, Fp, Vu = "\0_ec_inner", Hp = 1, EC = {
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
}, IC = {
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
}, $s = {};
function LC(r) {
  D(r, function(t, e) {
    if (!ot.hasClass(e)) {
      var n = EC[e];
      n && !$s[n] && (Zt("Component " + e + ` is used but not imported.
import { ` + n + ` } from 'echarts/components';
echarts.use([` + n + "]);"), $s[n] = !0);
    }
  });
}
var Tc = (
  /** @class */
  (function(r) {
    z(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t.prototype.init = function(e, n, i, a, o, s) {
      a = a || {}, this.option = null, this._theme = new mt(a), this._locale = new mt(o), this._optionManager = s;
    }, t.prototype.setOption = function(e, n, i) {
      process.env.NODE_ENV !== "production" && (tt(e != null, "option is null/undefined"), tt(e[Vu] !== Hp, "please use chart.getOption()"));
      var a = Up(n);
      this._optionManager.setOption(e, i, a), this._resetOption(null, a);
    }, t.prototype.resetOption = function(e, n) {
      return this._resetOption(e, Up(n));
    }, t.prototype._resetOption = function(e, n) {
      var i = !1, a = this._optionManager;
      if (!e || e === "recreate") {
        var o = a.mountOption(e === "recreate");
        process.env.NODE_ENV !== "production" && LC(o), !this.option || e === "recreate" ? Fp(this, o) : (this.restoreData(), this._mergeOption(o, n)), i = !0;
      }
      if ((e === "timeline" || e === "media") && this.restoreData(), !e || e === "recreate" || e === "timeline") {
        var s = a.getTimelineOption(this);
        s && (i = !0, this._mergeOption(s, n));
      }
      if (!e || e === "recreate" || e === "media") {
        var l = a.getMediaOption(this);
        l.length && D(l, function(u) {
          i = !0, this._mergeOption(u, n);
        }, this);
      }
      return i;
    }, t.prototype.mergeOption = function(e) {
      this._mergeOption(e, null);
    }, t.prototype._mergeOption = function(e, n) {
      var i = this.option, a = this._componentsMap, o = this._componentsCount, s = [], l = et(), u = n && n.replaceMergeMainTypeMap;
      bC(this), D(e, function(h, v) {
        h != null && (ot.hasClass(v) ? v && (s.push(v), l.set(v, !0)) : i[v] = i[v] == null ? j(h) : st(i[v], h, !0));
      }), u && u.each(function(h, v) {
        ot.hasClass(v) && !l.get(v) && (s.push(v), l.set(v, !0));
      }), ot.topologicalTravel(s, ot.getAllClassMainTypes(), f, this);
      function f(h) {
        var v = CC(this, h, Bt(e[h])), c = a.get(h), p = (
          // `!oldCmptList` means init. See the comment in `mappingToExists`
          c ? u && u.get(h) ? "replaceMerge" : "normalMerge" : "replaceAll"
        ), d = Iw(c, v, p);
        Vw(d, h, ot), i[h] = null, a.set(h, null), o.set(h, 0);
        var g = [], y = [], m = 0, _, S;
        D(d, function(w, b) {
          var x = w.existing, T = w.newOption;
          if (!T)
            x && (x.mergeOption({}, this), x.optionUpdated({}, !1));
          else {
            var A = h === "series", M = ot.getClass(
              h,
              w.keyInfo.subType,
              !A
              // Give a more detailed warn later if series don't exists
            );
            if (!M) {
              if (process.env.NODE_ENV !== "production") {
                var C = w.keyInfo.subType, E = IC[C];
                $s[C] || ($s[C] = !0, Zt(E ? "Series " + C + ` is used but not imported.
import { ` + E + ` } from 'echarts/charts';
echarts.use([` + E + "]);" : "Unknown series " + C));
              }
              return;
            }
            if (h === "tooltip") {
              if (_) {
                process.env.NODE_ENV !== "production" && (S || (Vt("Currently only one tooltip component is allowed."), S = !0));
                return;
              }
              _ = !0;
            }
            if (x && x.constructor === M)
              x.name = w.keyInfo.name, x.mergeOption(T, this), x.optionUpdated(T, !1);
            else {
              var I = B({
                componentIndex: b
              }, w.keyInfo);
              x = new M(T, this, this, I), B(x, I), w.brandNew && (x.__requireNewView = !0), x.init(T, this, this), x.optionUpdated(null, !0);
            }
          }
          x ? (g.push(x.option), y.push(x), m++) : (g.push(void 0), y.push(void 0));
        }, this), i[h] = g, a.set(h, y), o.set(h, m), h === "series" && Fo(this);
      }
      this._seriesIndices || Fo(this);
    }, t.prototype.getOption = function() {
      var e = j(this.option);
      return D(e, function(n, i) {
        if (ot.hasClass(i)) {
          for (var a = Bt(n), o = a.length, s = !1, l = o - 1; l >= 0; l--)
            a[l] && !wi(a[l]) ? s = !0 : (a[l] = null, !s && o--);
          a.length = o, e[i] = a;
        }
      }), delete e[Vu], e;
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
      var l;
      return i != null ? (l = [], D(Bt(i), function(u) {
        s[u] && l.push(s[u]);
      })) : a != null ? l = Gp("id", a, s) : o != null ? l = Gp("name", o, s) : l = At(s, function(u) {
        return !!u;
      }), Wp(l, e);
    }, t.prototype.findComponents = function(e) {
      var n = e.query, i = e.mainType, a = s(n), o = a ? this.queryComponents(a) : At(this._componentsMap.get(i), function(u) {
        return !!u;
      });
      return l(Wp(o, e));
      function s(u) {
        var f = i + "Index", h = i + "Id", v = i + "Name";
        return u && (u[f] != null || u[h] != null || u[v] != null) ? {
          mainType: i,
          // subType will be filtered finally.
          index: u[f],
          id: u[h],
          name: u[v]
        } : null;
      }
      function l(u) {
        return e.filter ? At(u, e.filter) : u;
      }
    }, t.prototype.eachComponent = function(e, n, i) {
      var a = this._componentsMap;
      if ($(e)) {
        var o = n, s = e;
        a.each(function(h, v) {
          for (var c = 0; h && c < h.length; c++) {
            var p = h[c];
            p && s.call(o, v, p, p.componentIndex);
          }
        });
      } else
        for (var l = U(e) ? a.get(e) : W(e) ? this.findComponents(e) : null, u = 0; l && u < l.length; u++) {
          var f = l[u];
          f && n.call(i, f, f.componentIndex);
        }
    }, t.prototype.getSeriesByName = function(e) {
      var n = He(e, null);
      return At(this._componentsMap.get("series"), function(i) {
        return !!i && n != null && i.name === n;
      });
    }, t.prototype.getSeriesByIndex = function(e) {
      return this._componentsMap.get("series")[e];
    }, t.prototype.getSeriesByType = function(e) {
      return At(this._componentsMap.get("series"), function(n) {
        return !!n && n.subType === e;
      });
    }, t.prototype.getSeries = function() {
      return At(this._componentsMap.get("series"), function(e) {
        return !!e;
      });
    }, t.prototype.getSeriesCount = function() {
      return this._componentsCount.get("series");
    }, t.prototype.eachSeries = function(e, n) {
      ra(this), D(this._seriesIndices, function(i) {
        var a = this._componentsMap.get("series")[i];
        e.call(n, a, i);
      }, this);
    }, t.prototype.eachRawSeries = function(e, n) {
      D(this._componentsMap.get("series"), function(i) {
        i && e.call(n, i, i.componentIndex);
      });
    }, t.prototype.eachSeriesByType = function(e, n, i) {
      ra(this), D(this._seriesIndices, function(a) {
        var o = this._componentsMap.get("series")[a];
        o.subType === e && n.call(i, o, a);
      }, this);
    }, t.prototype.eachRawSeriesByType = function(e, n, i) {
      return D(this.getSeriesByType(e), n, i);
    }, t.prototype.isSeriesFiltered = function(e) {
      return ra(this), this._seriesIndicesMap.get(e.componentIndex) == null;
    }, t.prototype.getCurrentSeriesIndices = function() {
      return (this._seriesIndices || []).slice();
    }, t.prototype.filterSeries = function(e, n) {
      ra(this);
      var i = [];
      D(this._seriesIndices, function(a) {
        var o = this._componentsMap.get("series")[a];
        e.call(n, o, a) && i.push(a);
      }, this), this._seriesIndices = i, this._seriesIndicesMap = et(i);
    }, t.prototype.restoreData = function(e) {
      Fo(this);
      var n = this._componentsMap, i = [];
      n.each(function(a, o) {
        ot.hasClass(o) && i.push(o);
      }), ot.topologicalTravel(i, ot.getAllClassMainTypes(), function(a) {
        D(n.get(a), function(o) {
          o && (a !== "series" || !PC(o, e)) && o.restoreData();
        });
      });
    }, t.internalField = (function() {
      Fo = function(e) {
        var n = e._seriesIndices = [];
        D(e._componentsMap.get("series"), function(i) {
          i && n.push(i.componentIndex);
        }), e._seriesIndicesMap = et(n);
      }, ra = function(e) {
        if (process.env.NODE_ENV !== "production" && !e._seriesIndices)
          throw new Error("Option should contains series.");
      }, Fp = function(e, n) {
        e.option = {}, e.option[Vu] = Hp, e._componentsMap = et({
          series: []
        }), e._componentsCount = et();
        var i = n.aria;
        W(i) && i.enabled == null && (i.enabled = !0), OC(n, e._theme.option), st(n, SC, !1), e._mergeOption(n, null);
      };
    })(), t;
  })(mt)
);
function PC(r, t) {
  if (t) {
    var e = t.seriesIndex, n = t.seriesId, i = t.seriesName;
    return e != null && r.componentIndex !== e || n != null && r.id !== n || i != null && r.name !== i;
  }
}
function OC(r, t) {
  var e = r.color && !r.colorLayer;
  D(t, function(n, i) {
    i === "colorLayer" && e || ot.hasClass(i) || (typeof n == "object" ? r[i] = r[i] ? st(r[i], n, !1) : j(n) : r[i] == null && (r[i] = n));
  });
}
function Gp(r, t, e) {
  if (H(t)) {
    var n = et();
    return D(t, function(a) {
      if (a != null) {
        var o = He(a, null);
        o != null && n.set(a, !0);
      }
    }), At(e, function(a) {
      return a && n.get(a[r]);
    });
  } else {
    var i = He(t, null);
    return At(e, function(a) {
      return a && i != null && a[r] === i;
    });
  }
}
function Wp(r, t) {
  return t.hasOwnProperty("subType") ? At(r, function(e) {
    return e && e.subType === t.subType;
  }) : r;
}
function Up(r) {
  var t = et();
  return r && D(Bt(r.replaceMerge), function(e) {
    process.env.NODE_ENV !== "production" && tt(ot.hasClass(e), '"' + e + '" is not valid component main type in "replaceMerge"'), t.set(e, !0);
  }), {
    replaceMergeMainTypeMap: t
  };
}
Ie(Tc, xc);
var RC = [
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
], v0 = (
  /** @class */
  /* @__PURE__ */ (function() {
    function r(t) {
      D(RC, function(e) {
        this[e] = J(t[e], t);
      }, this);
    }
    return r;
  })()
), Bu = {}, yo = (
  /** @class */
  (function() {
    function r() {
      this._coordinateSystems = [];
    }
    return r.prototype.create = function(t, e) {
      var n = [];
      D(Bu, function(i, a) {
        var o = i.create(t, e);
        n = n.concat(o || []);
      }), this._coordinateSystems = n;
    }, r.prototype.update = function(t, e) {
      D(this._coordinateSystems, function(n) {
        n.update && n.update(t, e);
      });
    }, r.prototype.getCoordinateSystems = function() {
      return this._coordinateSystems.slice();
    }, r.register = function(t, e) {
      Bu[t] = e;
    }, r.get = function(t) {
      return Bu[t];
    }, r;
  })()
), NC = /^(min|max)?(.+)$/, kC = (
  /** @class */
  (function() {
    function r(t) {
      this._timelineOptions = [], this._mediaList = [], this._currentMediaIndices = [], this._api = t;
    }
    return r.prototype.setOption = function(t, e, n) {
      t && (D(Bt(t.series), function(o) {
        o && o.data && qt(o.data) && xs(o.data);
      }), D(Bt(t.dataset), function(o) {
        o && o.source && qt(o.source) && xs(o.source);
      })), t = j(t);
      var i = this._optionBackup, a = VC(t, e, !i);
      this._newBaseOption = a.baseOption, i ? (a.timelineOptions.length && (i.timelineOptions = a.timelineOptions), a.mediaList.length && (i.mediaList = a.mediaList), a.mediaDefault && (i.mediaDefault = a.mediaDefault)) : this._optionBackup = a;
    }, r.prototype.mountOption = function(t) {
      var e = this._optionBackup;
      return this._timelineOptions = e.timelineOptions, this._mediaList = e.mediaList, this._mediaDefault = e.mediaDefault, this._currentMediaIndices = [], j(t ? e.baseOption : this._newBaseOption);
    }, r.prototype.getTimelineOption = function(t) {
      var e, n = this._timelineOptions;
      if (n.length) {
        var i = t.getComponent("timeline");
        i && (e = j(
          // FIXME:TS as TimelineModel or quivlant interface
          n[i.getCurrentIndex()]
        ));
      }
      return e;
    }, r.prototype.getMediaOption = function(t) {
      var e = this._api.getWidth(), n = this._api.getHeight(), i = this._mediaList, a = this._mediaDefault, o = [], s = [];
      if (!i.length && !a)
        return s;
      for (var l = 0, u = i.length; l < u; l++)
        BC(i[l].query, e, n) && o.push(l);
      return !o.length && a && (o = [-1]), o.length && !FC(o, this._currentMediaIndices) && (s = Y(o, function(f) {
        return j(f === -1 ? a.option : i[f].option);
      })), this._currentMediaIndices = o, s;
    }, r;
  })()
);
function VC(r, t, e) {
  var n = [], i, a, o = r.baseOption, s = r.timeline, l = r.options, u = r.media, f = !!r.media, h = !!(l || s || o && o.timeline);
  o ? (a = o, a.timeline || (a.timeline = s)) : ((h || f) && (r.options = r.media = null), a = r), f && (H(u) ? D(u, function(c) {
    process.env.NODE_ENV !== "production" && c && !c.option && W(c.query) && W(c.query.option) && Zt("Illegal media option. Must be like { media: [ { query: {}, option: {} } ] }"), c && c.option && (c.query ? n.push(c) : i || (i = c));
  }) : process.env.NODE_ENV !== "production" && Zt("Illegal media option. Must be an array. Like { media: [ {...}, {...} ] }")), v(a), D(l, function(c) {
    return v(c);
  }), D(n, function(c) {
    return v(c.option);
  });
  function v(c) {
    D(t, function(p) {
      p(c, e);
    });
  }
  return {
    baseOption: a,
    timelineOptions: l || [],
    mediaDefault: i,
    mediaList: n
  };
}
function BC(r, t, e) {
  var n = {
    width: t,
    height: e,
    aspectratio: t / e
    // lower case for convenience.
  }, i = !0;
  return D(r, function(a, o) {
    var s = o.match(NC);
    if (!(!s || !s[1] || !s[2])) {
      var l = s[1], u = s[2].toLowerCase();
      zC(n[u], a, l) || (i = !1);
    }
  }), i;
}
function zC(r, t, e) {
  return e === "min" ? r >= t : e === "max" ? r <= t : r === t;
}
function FC(r, t) {
  return r.join(",") === t.join(",");
}
var ye = D, ja = W, Yp = ["areaStyle", "lineStyle", "nodeStyle", "linkStyle", "chordStyle", "label", "labelLine"];
function zu(r) {
  var t = r && r.itemStyle;
  if (t)
    for (var e = 0, n = Yp.length; e < n; e++) {
      var i = Yp[e], a = t.normal, o = t.emphasis;
      a && a[i] && (process.env.NODE_ENV !== "production" && Et("itemStyle.normal." + i, i), r[i] = r[i] || {}, r[i].normal ? st(r[i].normal, a[i]) : r[i].normal = a[i], a[i] = null), o && o[i] && (process.env.NODE_ENV !== "production" && Et("itemStyle.emphasis." + i, "emphasis." + i), r[i] = r[i] || {}, r[i].emphasis ? st(r[i].emphasis, o[i]) : r[i].emphasis = o[i], o[i] = null);
    }
}
function Yt(r, t, e) {
  if (r && r[t] && (r[t].normal || r[t].emphasis)) {
    var n = r[t].normal, i = r[t].emphasis;
    n && (process.env.NODE_ENV !== "production" && We("'normal' hierarchy in " + t + " has been removed since 4.0. All style properties are configured in " + t + " directly now."), e ? (r[t].normal = r[t].emphasis = null, ut(r[t], n)) : r[t] = n), i && (process.env.NODE_ENV !== "production" && We(t + ".emphasis has been changed to emphasis." + t + " since 4.0"), r.emphasis = r.emphasis || {}, r.emphasis[t] = i, i.focus && (r.emphasis.focus = i.focus), i.blurScope && (r.emphasis.blurScope = i.blurScope));
  }
}
function ba(r) {
  Yt(r, "itemStyle"), Yt(r, "lineStyle"), Yt(r, "areaStyle"), Yt(r, "label"), Yt(r, "labelLine"), Yt(r, "upperLabel"), Yt(r, "edgeLabel");
}
function Ct(r, t) {
  var e = ja(r) && r[t], n = ja(e) && e.textStyle;
  if (n) {
    process.env.NODE_ENV !== "production" && We("textStyle hierarchy in " + t + " has been removed since 4.0. All textStyle properties are configured in " + t + " directly now.");
    for (var i = 0, a = Yv.length; i < a; i++) {
      var o = Yv[i];
      n.hasOwnProperty(o) && (e[o] = n[o]);
    }
  }
}
function we(r) {
  r && (ba(r), Ct(r, "label"), r.emphasis && Ct(r.emphasis, "label"));
}
function HC(r) {
  if (ja(r)) {
    zu(r), ba(r), Ct(r, "label"), Ct(r, "upperLabel"), Ct(r, "edgeLabel"), r.emphasis && (Ct(r.emphasis, "label"), Ct(r.emphasis, "upperLabel"), Ct(r.emphasis, "edgeLabel"));
    var t = r.markPoint;
    t && (zu(t), we(t));
    var e = r.markLine;
    e && (zu(e), we(e));
    var n = r.markArea;
    n && we(n);
    var i = r.data;
    if (r.type === "graph") {
      i = i || r.nodes;
      var a = r.links || r.edges;
      if (a && !qt(a))
        for (var o = 0; o < a.length; o++)
          we(a[o]);
      D(r.categories, function(u) {
        ba(u);
      });
    }
    if (i && !qt(i))
      for (var o = 0; o < i.length; o++)
        we(i[o]);
    if (t = r.markPoint, t && t.data)
      for (var s = t.data, o = 0; o < s.length; o++)
        we(s[o]);
    if (e = r.markLine, e && e.data)
      for (var l = e.data, o = 0; o < l.length; o++)
        H(l[o]) ? (we(l[o][0]), we(l[o][1])) : we(l[o]);
    r.type === "gauge" ? (Ct(r, "axisLabel"), Ct(r, "title"), Ct(r, "detail")) : r.type === "treemap" ? (Yt(r.breadcrumb, "itemStyle"), D(r.levels, function(u) {
      ba(u);
    })) : r.type === "tree" && ba(r.leaves);
  }
}
function pr(r) {
  return H(r) ? r : r ? [r] : [];
}
function Xp(r) {
  return (H(r) ? r[0] : r) || {};
}
function GC(r, t) {
  ye(pr(r.series), function(n) {
    ja(n) && HC(n);
  });
  var e = ["xAxis", "yAxis", "radiusAxis", "angleAxis", "singleAxis", "parallelAxis", "radar"];
  t && e.push("valueAxis", "categoryAxis", "logAxis", "timeAxis"), ye(e, function(n) {
    ye(pr(r[n]), function(i) {
      i && (Ct(i, "axisLabel"), Ct(i.axisPointer, "label"));
    });
  }), ye(pr(r.parallel), function(n) {
    var i = n && n.parallelAxisDefault;
    Ct(i, "axisLabel"), Ct(i && i.axisPointer, "label");
  }), ye(pr(r.calendar), function(n) {
    Yt(n, "itemStyle"), Ct(n, "dayLabel"), Ct(n, "monthLabel"), Ct(n, "yearLabel");
  }), ye(pr(r.radar), function(n) {
    Ct(n, "name"), n.name && n.axisName == null && (n.axisName = n.name, delete n.name, process.env.NODE_ENV !== "production" && We("name property in radar component has been changed to axisName")), n.nameGap != null && n.axisNameGap == null && (n.axisNameGap = n.nameGap, delete n.nameGap, process.env.NODE_ENV !== "production" && We("nameGap property in radar component has been changed to axisNameGap")), process.env.NODE_ENV !== "production" && ye(n.indicator, function(i) {
      i.text && Et("text", "name", "radar.indicator");
    });
  }), ye(pr(r.geo), function(n) {
    ja(n) && (we(n), ye(pr(n.regions), function(i) {
      we(i);
    }));
  }), ye(pr(r.timeline), function(n) {
    we(n), Yt(n, "label"), Yt(n, "itemStyle"), Yt(n, "controlStyle", !0);
    var i = n.data;
    H(i) && D(i, function(a) {
      W(a) && (Yt(a, "label"), Yt(a, "itemStyle"));
    });
  }), ye(pr(r.toolbox), function(n) {
    Yt(n, "iconStyle"), ye(n.feature, function(i) {
      Yt(i, "iconStyle");
    });
  }), Ct(Xp(r.axisPointer), "label"), Ct(Xp(r.tooltip).axisPointer, "label");
}
function WC(r, t) {
  for (var e = t.split(","), n = r, i = 0; i < e.length && (n = n && n[e[i]], n != null); i++)
    ;
  return n;
}
function UC(r, t, e, n) {
  for (var i = t.split(","), a = r, o, s = 0; s < i.length - 1; s++)
    o = i[s], a[o] == null && (a[o] = {}), a = a[o];
  a[i[s]] == null && (a[i[s]] = e);
}
function $p(r) {
  r && D(YC, function(t) {
    t[0] in r && !(t[1] in r) && (r[t[1]] = r[t[0]]);
  });
}
var YC = [["x", "left"], ["y", "top"], ["x2", "right"], ["y2", "bottom"]], XC = ["grid", "geo", "parallel", "legend", "toolbox", "title", "visualMap", "dataZoom", "timeline"], Fu = [["borderRadius", "barBorderRadius"], ["borderColor", "barBorderColor"], ["borderWidth", "barBorderWidth"]];
function na(r) {
  var t = r && r.itemStyle;
  if (t)
    for (var e = 0; e < Fu.length; e++) {
      var n = Fu[e][1], i = Fu[e][0];
      t[n] != null && (t[i] = t[n], process.env.NODE_ENV !== "production" && Et(n, i));
    }
}
function qp(r) {
  r && r.alignTo === "edge" && r.margin != null && r.edgeDistance == null && (process.env.NODE_ENV !== "production" && Et("label.margin", "label.edgeDistance", "pie"), r.edgeDistance = r.margin);
}
function Zp(r) {
  r && r.downplay && !r.blur && (r.blur = r.downplay, process.env.NODE_ENV !== "production" && Et("downplay", "blur", "sunburst"));
}
function $C(r) {
  r && r.focusNodeAdjacency != null && (r.emphasis = r.emphasis || {}, r.emphasis.focus == null && (process.env.NODE_ENV !== "production" && Et("focusNodeAdjacency", "emphasis: { focus: 'adjacency'}", "graph/sankey"), r.emphasis.focus = "adjacency"));
}
function p0(r, t) {
  if (r)
    for (var e = 0; e < r.length; e++)
      t(r[e]), r[e] && p0(r[e].children, t);
}
function d0(r, t) {
  GC(r, t), r.series = Bt(r.series), D(r.series, function(e) {
    if (W(e)) {
      var n = e.type;
      if (n === "line")
        e.clipOverflow != null && (e.clip = e.clipOverflow, process.env.NODE_ENV !== "production" && Et("clipOverflow", "clip", "line"));
      else if (n === "pie" || n === "gauge") {
        e.clockWise != null && (e.clockwise = e.clockWise, process.env.NODE_ENV !== "production" && Et("clockWise", "clockwise")), qp(e.label);
        var i = e.data;
        if (i && !qt(i))
          for (var a = 0; a < i.length; a++)
            qp(i[a]);
        e.hoverOffset != null && (e.emphasis = e.emphasis || {}, (e.emphasis.scaleSize = null) && (process.env.NODE_ENV !== "production" && Et("hoverOffset", "emphasis.scaleSize"), e.emphasis.scaleSize = e.hoverOffset));
      } else if (n === "gauge") {
        var o = WC(e, "pointer.color");
        o != null && UC(e, "itemStyle.color", o);
      } else if (n === "bar") {
        na(e), na(e.backgroundStyle), na(e.emphasis);
        var i = e.data;
        if (i && !qt(i))
          for (var a = 0; a < i.length; a++)
            typeof i[a] == "object" && (na(i[a]), na(i[a] && i[a].emphasis));
      } else if (n === "sunburst") {
        var s = e.highlightPolicy;
        s && (e.emphasis = e.emphasis || {}, e.emphasis.focus || (e.emphasis.focus = s, process.env.NODE_ENV !== "production" && Et("highlightPolicy", "emphasis.focus", "sunburst"))), Zp(e), p0(e.data, Zp);
      } else n === "graph" || n === "sankey" ? $C(e) : n === "map" && (e.mapType && !e.map && (process.env.NODE_ENV !== "production" && Et("mapType", "map", "map"), e.map = e.mapType), e.mapLocation && (process.env.NODE_ENV !== "production" && We("`mapLocation` is not used anymore."), ut(e, e.mapLocation)));
      e.hoverAnimation != null && (e.emphasis = e.emphasis || {}, e.emphasis && e.emphasis.scale == null && (process.env.NODE_ENV !== "production" && Et("hoverAnimation", "emphasis.scale"), e.emphasis.scale = e.hoverAnimation)), $p(e);
    }
  }), r.dataRange && (r.visualMap = r.dataRange), D(XC, function(e) {
    var n = r[e];
    n && (H(n) || (n = [n]), D(n, function(i) {
      $p(i);
    }));
  });
}
function qC(r) {
  var t = et();
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
  }), t.each(ZC);
}
function ZC(r) {
  D(r, function(t, e) {
    var n = [], i = [NaN, NaN], a = [t.stackResultDimension, t.stackedOverDimension], o = t.data, s = t.isStackedByIndex, l = t.seriesModel.get("stackStrategy") || "samesign";
    o.modify(a, function(u, f, h) {
      var v = o.get(t.stackedDimension, h);
      if (isNaN(v))
        return i;
      var c, p;
      s ? p = o.getRawIndex(h) : c = o.get(t.stackedByDimension, h);
      for (var d = NaN, g = e - 1; g >= 0; g--) {
        var y = r[g];
        if (s || (p = y.data.rawIndexOf(y.stackedByDimension, c)), p >= 0) {
          var m = y.data.getByRawIndex(y.stackResultDimension, p);
          if (l === "all" || l === "positive" && m > 0 || l === "negative" && m < 0 || l === "samesign" && v >= 0 && m > 0 || l === "samesign" && v <= 0 && m < 0) {
            v = bw(v, m), d = m;
            break;
          }
        }
      }
      return n[0] = v, n[1] = d, n;
    });
  });
}
var Rl = (
  /** @class */
  /* @__PURE__ */ (function() {
    function r(t) {
      this.data = t.data || (t.sourceFormat === sr ? {} : []), this.sourceFormat = t.sourceFormat || l0, this.seriesLayoutBy = t.seriesLayoutBy || br, this.startIndex = t.startIndex || 0, this.dimensionsDetectedCount = t.dimensionsDetectedCount, this.metaRawOption = t.metaRawOption;
      var e = this.dimensionsDefine = t.dimensionsDefine;
      if (e)
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          i.type == null && h0(this, n) === Rt.Must && (i.type = "ordinal");
        }
    }
    return r;
  })()
);
function Cc(r) {
  return r instanceof Rl;
}
function rh(r, t, e) {
  e = e || y0(r);
  var n = t.seriesLayoutBy, i = KC(r, e, n, t.sourceHeader, t.dimensions), a = new Rl({
    data: r,
    sourceFormat: e,
    seriesLayoutBy: n,
    dimensionsDefine: i.dimensionsDefine,
    startIndex: i.startIndex,
    dimensionsDetectedCount: i.dimensionsDetectedCount,
    metaRawOption: j(t)
  });
  return a;
}
function g0(r) {
  return new Rl({
    data: r,
    sourceFormat: qt(r) ? Sr : Pe
  });
}
function jC(r) {
  return new Rl({
    data: r.data,
    sourceFormat: r.sourceFormat,
    seriesLayoutBy: r.seriesLayoutBy,
    dimensionsDefine: j(r.dimensionsDefine),
    startIndex: r.startIndex,
    dimensionsDetectedCount: r.dimensionsDetectedCount
  });
}
function y0(r) {
  var t = l0;
  if (qt(r))
    t = Sr;
  else if (H(r)) {
    r.length === 0 && (t = he);
    for (var e = 0, n = r.length; e < n; e++) {
      var i = r[e];
      if (i != null) {
        if (H(i) || qt(i)) {
          t = he;
          break;
        } else if (W(i)) {
          t = Xe;
          break;
        }
      }
    }
  } else if (W(r)) {
    for (var a in r)
      if (jr(r, a) && re(r[a])) {
        t = sr;
        break;
      }
  }
  return t;
}
function KC(r, t, e, n, i) {
  var a, o;
  if (!r)
    return {
      dimensionsDefine: jp(i),
      startIndex: o,
      dimensionsDetectedCount: a
    };
  if (t === he) {
    var s = r;
    n === "auto" || n == null ? Kp(function(u) {
      u != null && u !== "-" && (U(u) ? o == null && (o = 1) : o = 0);
    }, e, s, 10) : o = dt(n) ? n : n ? 1 : 0, !i && o === 1 && (i = [], Kp(function(u, f) {
      i[f] = u != null ? u + "" : "";
    }, e, s, 1 / 0)), a = i ? i.length : e === Ii ? s.length : s[0] ? s[0].length : null;
  } else if (t === Xe)
    i || (i = QC(r));
  else if (t === sr)
    i || (i = [], D(r, function(u, f) {
      i.push(f);
    }));
  else if (t === Pe) {
    var l = uo(r[0]);
    a = H(l) && l.length || 1;
  } else t === Sr && process.env.NODE_ENV !== "production" && tt(!!i, "dimensions must be given if data is TypedArray.");
  return {
    startIndex: o,
    dimensionsDefine: jp(i),
    dimensionsDetectedCount: a
  };
}
function QC(r) {
  for (var t = 0, e; t < r.length && !(e = r[t++]); )
    ;
  if (e)
    return gt(e);
}
function jp(r) {
  if (r) {
    var t = et();
    return Y(r, function(e, n) {
      e = W(e) ? e : {
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
function Kp(r, t, e, n) {
  if (t === Ii)
    for (var i = 0; i < e.length && i < n; i++)
      r(e[i] ? e[i][0] : null, i);
  else
    for (var a = e[0] || [], i = 0; i < a.length && i < n; i++)
      r(a[i], i);
}
function m0(r) {
  var t = r.sourceFormat;
  return t === Xe || t === sr;
}
var gn, yn, mn, Qp, Jp, _0 = (
  /** @class */
  (function() {
    function r(t, e) {
      var n = Cc(t) ? t : g0(t);
      this._source = n;
      var i = this._data = n.data;
      if (n.sourceFormat === Sr) {
        if (process.env.NODE_ENV !== "production" && e == null)
          throw new Error("Typed array data must specify dimension size");
        this._offset = 0, this._dimSize = e, this._data = i;
      }
      Jp(this, i, n);
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
      Jp = function(o, s, l) {
        var u = l.sourceFormat, f = l.seriesLayoutBy, h = l.startIndex, v = l.dimensionsDefine, c = Qp[Dc(u, f)];
        if (process.env.NODE_ENV !== "production" && tt(c, "Invalide sourceFormat: " + u), B(o, c), u === Sr)
          o.getItem = e, o.count = i, o.fillStorage = n;
        else {
          var p = S0(u, f);
          o.getItem = J(p, null, s, h, v);
          var d = b0(u, f);
          o.count = J(d, null, s, h, v);
        }
      };
      var e = function(o, s) {
        o = o - this._offset, s = s || [];
        for (var l = this._data, u = this._dimSize, f = u * o, h = 0; h < u; h++)
          s[h] = l[f + h];
        return s;
      }, n = function(o, s, l, u) {
        for (var f = this._data, h = this._dimSize, v = 0; v < h; v++) {
          for (var c = u[v], p = c[0] == null ? 1 / 0 : c[0], d = c[1] == null ? -1 / 0 : c[1], g = s - o, y = l[v], m = 0; m < g; m++) {
            var _ = f[m * h + v];
            y[o + m] = _, _ < p && (p = _), _ > d && (d = _);
          }
          c[0] = p, c[1] = d;
        }
      }, i = function() {
        return this._data ? this._data.length / this._dimSize : 0;
      };
      Qp = (t = {}, t[he + "_" + br] = {
        pure: !0,
        appendData: a
      }, t[he + "_" + Ii] = {
        pure: !0,
        appendData: function() {
          throw new Error('Do not support appendData when set seriesLayoutBy: "row".');
        }
      }, t[Xe] = {
        pure: !0,
        appendData: a
      }, t[sr] = {
        pure: !0,
        appendData: function(o) {
          var s = this._data;
          D(o, function(l, u) {
            for (var f = s[u] || (s[u] = []), h = 0; h < (l || []).length; h++)
              f.push(l[h]);
          });
        }
      }, t[Pe] = {
        appendData: a
      }, t[Sr] = {
        persistent: !1,
        pure: !0,
        appendData: function(o) {
          process.env.NODE_ENV !== "production" && tt(qt(o), "Added data must be TypedArray if data in initialization is TypedArray"), this._data = o;
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
), td = function(r, t, e, n) {
  return r[n];
}, JC = (gn = {}, gn[he + "_" + br] = function(r, t, e, n) {
  return r[n + t];
}, gn[he + "_" + Ii] = function(r, t, e, n, i) {
  n += t;
  for (var a = i || [], o = r, s = 0; s < o.length; s++) {
    var l = o[s];
    a[s] = l ? l[n] : null;
  }
  return a;
}, gn[Xe] = td, gn[sr] = function(r, t, e, n, i) {
  for (var a = i || [], o = 0; o < e.length; o++) {
    var s = e[o].name;
    if (process.env.NODE_ENV !== "production" && s == null)
      throw new Error();
    var l = r[s];
    a[o] = l ? l[n] : null;
  }
  return a;
}, gn[Pe] = td, gn);
function S0(r, t) {
  var e = JC[Dc(r, t)];
  return process.env.NODE_ENV !== "production" && tt(e, 'Do not support get item on "' + r + '", "' + t + '".'), e;
}
var ed = function(r, t, e) {
  return r.length;
}, tD = (yn = {}, yn[he + "_" + br] = function(r, t, e) {
  return Math.max(0, r.length - t);
}, yn[he + "_" + Ii] = function(r, t, e) {
  var n = r[0];
  return n ? Math.max(0, n.length - t) : 0;
}, yn[Xe] = ed, yn[sr] = function(r, t, e) {
  var n = e[0].name;
  if (process.env.NODE_ENV !== "production" && n == null)
    throw new Error();
  var i = r[n];
  return i ? i.length : 0;
}, yn[Pe] = ed, yn);
function b0(r, t) {
  var e = tD[Dc(r, t)];
  return process.env.NODE_ENV !== "production" && tt(e, 'Do not support count on "' + r + '", "' + t + '".'), e;
}
var Hu = function(r, t, e) {
  return r[t];
}, eD = (mn = {}, mn[he] = Hu, mn[Xe] = function(r, t, e) {
  return r[e];
}, mn[sr] = Hu, mn[Pe] = function(r, t, e) {
  var n = uo(r);
  return n instanceof Array ? n[t] : n;
}, mn[Sr] = Hu, mn);
function w0(r) {
  var t = eD[r];
  return process.env.NODE_ENV !== "production" && tt(t, 'Do not support get value on "' + r + '".'), t;
}
function Dc(r, t) {
  return r === he ? r + "_" + t : r;
}
function Ci(r, t, e) {
  if (r) {
    var n = r.getRawDataItem(t);
    if (n != null) {
      var i = r.getStore(), a = i.getSource().sourceFormat;
      if (e != null) {
        var o = r.getDimensionIndex(e), s = i.getDimensionProperty(o);
        return w0(a)(n, o, s);
      } else {
        var l = n;
        return a === Pe && (l = uo(n)), l;
      }
    }
  }
}
var rD = /\{@(.+?)\}/g, nD = (
  /** @class */
  (function() {
    function r() {
    }
    return r.prototype.getDataParams = function(t, e) {
      var n = this.getData(e), i = this.getRawValue(t, e), a = n.getRawIndex(t), o = n.getName(t), s = n.getRawDataItem(t), l = n.getItemVisual(t, "style"), u = l && l[n.getItemVisual(t, "drawType") || "fill"], f = l && l.stroke, h = this.mainType, v = h === "series", c = n.userOutput && n.userOutput.get();
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
        color: u,
        borderColor: f,
        dimensionNames: c ? c.fullDimensions : null,
        encode: c ? c.encode : null,
        // Param name list for mapping `a`, `b`, `c`, `d`, `e`
        $vars: ["seriesName", "name", "value"]
      };
    }, r.prototype.getFormattedLabel = function(t, e, n, i, a, o) {
      e = e || "normal";
      var s = this.getData(n), l = this.getDataParams(t, n);
      if (o && (l.value = o.interpolatedValue), i != null && H(l.value) && (l.value = l.value[i]), !a) {
        var u = s.getItemModel(t);
        a = u.get(e === "normal" ? ["label", "formatter"] : [e, "label", "formatter"]);
      }
      if ($(a))
        return l.status = e, l.dimensionIndex = i, a(l);
      if (U(a)) {
        var f = Sc(a, l);
        return f.replace(rD, function(h, v) {
          var c = v.length, p = v;
          p.charAt(0) === "[" && p.charAt(c - 1) === "]" && (p = +p.slice(1, c - 1), process.env.NODE_ENV !== "production" && isNaN(p) && Zt("Invalide label formatter: @" + v + ", only support @[0], @[1], @[2], ..."));
          var d = Ci(s, t, p);
          if (o && H(o.interpolatedValue)) {
            var g = s.getDimensionIndex(p);
            g >= 0 && (d = o.interpolatedValue[g]);
          }
          return d != null ? d + "" : "";
        });
      }
    }, r.prototype.getRawValue = function(t, e) {
      return Ci(this.getData(e), t);
    }, r.prototype.formatTooltip = function(t, e, n) {
    }, r;
  })()
);
function rd(r) {
  var t, e;
  return W(r) ? r.type ? e = r : process.env.NODE_ENV !== "production" && console.warn("The return type of `formatTooltip` is not supported: " + Ns(r)) : t = r, {
    text: t,
    // markers: markers || markersExisting,
    frag: e
  };
}
function Oa(r) {
  return new iD(r);
}
var iD = (
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
      var o = f(this._modBy), s = this._modDataCount || 0, l = f(t && t.modBy), u = t && t.modDataCount || 0;
      (o !== l || s !== u) && (a = "reset");
      function f(m) {
        return !(m >= 1) && (m = 1), m;
      }
      var h;
      (this._dirty || a === "reset") && (this._dirty = !1, h = this._doReset(n)), this._modBy = l, this._modDataCount = u;
      var v = t && t.step;
      if (e ? (process.env.NODE_ENV !== "production" && tt(e._outputDueEnd != null), this._dueEnd = e._outputDueEnd) : (process.env.NODE_ENV !== "production" && tt(!this._progress || this._count), this._dueEnd = this._count ? this._count(this.context) : 1 / 0), this._progress) {
        var c = this._dueIndex, p = Math.min(v != null ? this._dueIndex + v : 1 / 0, this._dueEnd);
        if (!n && (h || c < p)) {
          var d = this._progress;
          if (H(d))
            for (var g = 0; g < d.length; g++)
              this._doProgress(d[g], c, p, l, u);
          else
            this._doProgress(d, c, p, l, u);
        }
        this._dueIndex = p;
        var y = this._settedOutputEnd != null ? this._settedOutputEnd : p;
        process.env.NODE_ENV !== "production" && tt(y >= this._outputDueEnd), this._outputDueEnd = y;
      } else
        this._dueIndex = this._outputDueEnd = this._settedOutputEnd != null ? this._settedOutputEnd : this._dueEnd;
      return this.unfinished();
    }, r.prototype.dirty = function() {
      this._dirty = !0, this._onDirty && this._onDirty(this.context);
    }, r.prototype._doProgress = function(t, e, n, i, a) {
      nd.reset(e, n, i, a), this._callingProgress = t, this._callingProgress({
        start: e,
        end: n,
        count: n - e,
        next: nd.next
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
      process.env.NODE_ENV !== "production" && tt(t && !t._disposed && t !== this), (this._downstream !== t || this._dirty) && (this._downstream = t, t._upstream = this, t.dirty());
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
), nd = /* @__PURE__ */ (function() {
  var r, t, e, n, i, a = {
    reset: function(l, u, f, h) {
      t = l, r = u, e = f, n = h, i = Math.ceil(n / e), a.next = e > 1 && n > 0 ? s : o;
    }
  };
  return a;
  function o() {
    return t < r ? t++ : null;
  }
  function s() {
    var l = t % i * e + Math.ceil(t / i), u = t >= r ? null : l < n ? l : t;
    return t++, u;
  }
})();
function _s(r, t) {
  var e = t && t.type;
  return e === "ordinal" ? r : (e === "time" && !dt(r) && r != null && r !== "-" && (r = +Ae(r)), r == null || r === "" ? NaN : Number(r));
}
et({
  number: function(r) {
    return parseFloat(r);
  },
  time: function(r) {
    return +Ae(r);
  },
  trim: function(r) {
    return U(r) ? Ve(r) : r;
  }
});
var aD = (
  /** @class */
  (function() {
    function r(t, e) {
      var n = t === "desc";
      this._resultLT = n ? 1 : -1, e == null && (e = n ? "min" : "max"), this._incomparable = e === "min" ? -1 / 0 : 1 / 0;
    }
    return r.prototype.evaluate = function(t, e) {
      var n = dt(t) ? t : Wa(t), i = dt(e) ? e : Wa(e), a = isNaN(n), o = isNaN(i);
      if (a && (n = this._incomparable), o && (i = this._incomparable), a && o) {
        var s = U(t), l = U(e);
        s && (n = l ? t : 0), l && (i = s ? e : 0);
      }
      return n < i ? this._resultLT : n > i ? -this._resultLT : 0;
    }, r;
  })()
), oD = (
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
      return _s(t, e);
    }, r;
  })()
);
function sD(r, t) {
  var e = new oD(), n = r.data, i = e.sourceFormat = r.sourceFormat, a = r.startIndex, o = "";
  r.seriesLayoutBy !== br && (process.env.NODE_ENV !== "production" && (o = '`seriesLayoutBy` of upstream dataset can only be "column" in data transform.'), se(o));
  var s = [], l = {}, u = r.dimensionsDefine;
  if (u)
    D(u, function(d, g) {
      var y = d.name, m = {
        index: g,
        name: y,
        displayName: d.displayName
      };
      if (s.push(m), y != null) {
        var _ = "";
        jr(l, y) && (process.env.NODE_ENV !== "production" && (_ = 'dimension name "' + y + '" duplicated.'), se(_)), l[y] = m;
      }
    });
  else
    for (var f = 0; f < r.dimensionsDetectedCount; f++)
      s.push({
        index: f
      });
  var h = S0(i, br);
  t.__isBuiltIn && (e.getRawDataItem = function(d) {
    return h(n, a, s, d);
  }, e.getRawData = J(lD, null, r)), e.cloneRawData = J(uD, null, r);
  var v = b0(i, br);
  e.count = J(v, null, n, a, s);
  var c = w0(i);
  e.retrieveValue = function(d, g) {
    var y = h(n, a, s, d);
    return p(y, g);
  };
  var p = e.retrieveValueFromItem = function(d, g) {
    if (d != null) {
      var y = s[g];
      if (y)
        return c(d, g, y.name);
    }
  };
  return e.getDimensionInfo = J(fD, null, s, l), e.cloneAllDimensionInfo = J(hD, null, s), e;
}
function lD(r) {
  var t = r.sourceFormat;
  if (!Mc(t)) {
    var e = "";
    process.env.NODE_ENV !== "production" && (e = "`getRawData` is not supported in source format " + t), se(e);
  }
  return r.data;
}
function uD(r) {
  var t = r.sourceFormat, e = r.data;
  if (!Mc(t)) {
    var n = "";
    process.env.NODE_ENV !== "production" && (n = "`cloneRawData` is not supported in source format " + t), se(n);
  }
  if (t === he) {
    for (var i = [], a = 0, o = e.length; a < o; a++)
      i.push(e[a].slice());
    return i;
  } else if (t === Xe) {
    for (var i = [], a = 0, o = e.length; a < o; a++)
      i.push(B({}, e[a]));
    return i;
  }
}
function fD(r, t, e) {
  if (e != null) {
    if (dt(e) || !isNaN(e) && !jr(t, e))
      return r[e];
    if (jr(t, e))
      return t[e];
  }
}
function hD(r) {
  return j(r);
}
var x0 = et();
function cD(r) {
  r = j(r);
  var t = r.type, e = "";
  t || (process.env.NODE_ENV !== "production" && (e = "Must have a `type` when `registerTransform`."), se(e));
  var n = t.split(":");
  n.length !== 2 && (process.env.NODE_ENV !== "production" && (e = 'Name must include namespace like "ns:regression".'), se(e));
  var i = !1;
  n[0] === "echarts" && (t = n[1], i = !0), r.__isBuiltIn = i, x0.set(t, r);
}
function vD(r, t, e) {
  var n = Bt(r), i = n.length, a = "";
  i || (process.env.NODE_ENV !== "production" && (a = "If `transform` declared, it should at least contain one transform."), se(a));
  for (var o = 0, s = i; o < s; o++) {
    var l = n[o];
    t = pD(l, t, e, i === 1 ? null : o), o !== s - 1 && (t.length = Math.max(t.length, 1));
  }
  return t;
}
function pD(r, t, e, n) {
  var i = "";
  t.length || (process.env.NODE_ENV !== "production" && (i = "Must have at least one upstream dataset."), se(i)), W(r) || (process.env.NODE_ENV !== "production" && (i = "transform declaration must be an object rather than " + typeof r + "."), se(i));
  var a = r.type, o = x0.get(a);
  o || (process.env.NODE_ENV !== "production" && (i = 'Can not find transform on type "' + a + '".'), se(i));
  var s = Y(t, function(f) {
    return sD(f, o);
  }), l = Bt(o.transform({
    upstream: s[0],
    upstreamList: s,
    config: j(r.config)
  }));
  if (process.env.NODE_ENV !== "production" && r.print) {
    var u = Y(l, function(f) {
      var h = n != null ? " === pipe index: " + n : "";
      return ["=== dataset index: " + e.datasetIndex + h + " ===", "- transform result data:", Ns(f.data), "- transform result dimensions:", Ns(f.dimensions)].join(`
`);
    }).join(`
`);
    Mw(u);
  }
  return Y(l, function(f, h) {
    var v = "";
    W(f) || (process.env.NODE_ENV !== "production" && (v = "A transform should not return some empty results."), se(v)), f.data || (process.env.NODE_ENV !== "production" && (v = "Transform result data should be not be null or undefined"), se(v));
    var c = y0(f.data);
    Mc(c) || (process.env.NODE_ENV !== "production" && (v = "Transform result data should be array rows or object rows."), se(v));
    var p, d = t[0];
    if (d && h === 0 && !f.dimensions) {
      var g = d.startIndex;
      g && (f.data = d.data.slice(0, g).concat(f.data)), p = {
        seriesLayoutBy: br,
        sourceHeader: g,
        dimensions: d.metaRawOption.dimensions
      };
    } else
      p = {
        seriesLayoutBy: br,
        sourceHeader: 0,
        dimensions: f.dimensions
      };
    return rh(f.data, p, null);
  });
}
function Mc(r) {
  return r === he || r === Xe;
}
var Nl = "undefined", dD = typeof Uint32Array === Nl ? Array : Uint32Array, gD = typeof Uint16Array === Nl ? Array : Uint16Array, T0 = typeof Int32Array === Nl ? Array : Int32Array, id = typeof Float64Array === Nl ? Array : Float64Array, C0 = {
  float: id,
  int: T0,
  // Ordinal data type can be string or int
  ordinal: Array,
  number: Array,
  time: id
}, Gu;
function ti(r) {
  return r > 65535 ? dD : gD;
}
function ei() {
  return [1 / 0, -1 / 0];
}
function yD(r) {
  var t = r.constructor;
  return t === Array ? r.slice() : new t(r);
}
function ad(r, t, e, n, i) {
  var a = C0[e || "float"];
  if (i) {
    var o = r[t], s = o && o.length;
    if (s !== n) {
      for (var l = new a(n), u = 0; u < s; u++)
        l[u] = o[u];
      r[t] = l;
    }
  } else
    r[t] = new a(n);
}
var nh = (
  /** @class */
  (function() {
    function r() {
      this._chunks = [], this._rawExtent = [], this._extent = [], this._count = 0, this._rawCount = 0, this._calcDimNameToIdx = et();
    }
    return r.prototype.initData = function(t, e, n) {
      process.env.NODE_ENV !== "production" && tt($(t.getItem) && $(t.count), "Invalid data provider."), this._provider = t, this._chunks = [], this._indices = null, this.getRawIndex = this._getRawIdxIdentity;
      var i = t.getSource(), a = this.defaultDimValueGetter = Gu[i.sourceFormat];
      this._dimValueGetter = n || a, this._rawExtent = [];
      var o = m0(i);
      this._dimensions = Y(e, function(s) {
        return process.env.NODE_ENV !== "production" && o && tt(s.property != null), {
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
      }, n.set(t, a), this._chunks[a] = new C0[e || "float"](this._rawCount), this._rawExtent[a] = ei(), a;
    }, r.prototype.collectOrdinalMeta = function(t, e) {
      var n = this._chunks[t], i = this._dimensions[t], a = this._rawExtent, o = i.ordinalOffset || 0, s = n.length;
      o === 0 && (a[t] = ei());
      for (var l = a[t], u = o; u < s; u++) {
        var f = n[u] = e.parseAndCollect(n[u]);
        isNaN(f) || (l[0] = Math.min(f, l[0]), l[1] = Math.max(f, l[1]));
      }
      i.ordinalMeta = e, i.ordinalOffset = s, i.type = "ordinal";
    }, r.prototype.getOrdinalMeta = function(t) {
      var e = this._dimensions[t], n = e.ordinalMeta;
      return n;
    }, r.prototype.getDimensionProperty = function(t) {
      var e = this._dimensions[t];
      return e && e.property;
    }, r.prototype.appendData = function(t) {
      process.env.NODE_ENV !== "production" && tt(!this._indices, "appendData can only be called on raw data.");
      var e = this._provider, n = this.count();
      e.appendData(t);
      var i = e.count();
      return e.persistent || (i += n), n < i && this._initDataFromProvider(n, i, !0), [n, i];
    }, r.prototype.appendValues = function(t, e) {
      for (var n = this._chunks, i = this._dimensions, a = i.length, o = this._rawExtent, s = this.count(), l = s + Math.max(t.length, e || 0), u = 0; u < a; u++) {
        var f = i[u];
        ad(n, u, f.type, l, !0);
      }
      for (var h = [], v = s; v < l; v++)
        for (var c = v - s, p = 0; p < a; p++) {
          var f = i[p], d = Gu.arrayRows.call(this, t[c] || h, f.property, c, p);
          n[p][v] = d;
          var g = o[p];
          d < g[0] && (g[0] = d), d > g[1] && (g[1] = d);
        }
      return this._rawCount = this._count = l, {
        start: s,
        end: l
      };
    }, r.prototype._initDataFromProvider = function(t, e, n) {
      for (var i = this._provider, a = this._chunks, o = this._dimensions, s = o.length, l = this._rawExtent, u = Y(o, function(m) {
        return m.property;
      }), f = 0; f < s; f++) {
        var h = o[f];
        l[f] || (l[f] = ei()), ad(a, f, h.type, e, n);
      }
      if (i.fillStorage)
        i.fillStorage(t, e, a, l);
      else
        for (var v = [], c = t; c < e; c++) {
          v = i.getItem(c, v);
          for (var p = 0; p < s; p++) {
            var d = a[p], g = this._dimValueGetter(v, u[p], c, p);
            d[c] = g;
            var y = l[p];
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
      for (var s = 1 / 0, l = -1, u = 0, f = 0, h = this.count(); f < h; f++) {
        var v = this.getRawIndex(f), c = e - a[v], p = Math.abs(c);
        p <= n && ((p < s || p === s && c >= 0 && l < 0) && (s = p, l = c, u = 0), c === l && (o[u++] = f));
      }
      return o.length = u, o;
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
        var n = ti(this._rawCount);
        t = new n(this.count());
        for (var a = 0; a < t.length; a++)
          t[a] = a;
      }
      return t;
    }, r.prototype.filter = function(t, e) {
      if (!this._count)
        return this;
      for (var n = this.clone(), i = n.count(), a = ti(n._rawCount), o = new a(i), s = [], l = t.length, u = 0, f = t[0], h = n._chunks, v = 0; v < i; v++) {
        var c = void 0, p = n.getRawIndex(v);
        if (l === 0)
          c = e(v);
        else if (l === 1) {
          var d = h[f][p];
          c = e(d, v);
        } else {
          for (var g = 0; g < l; g++)
            s[g] = h[t[g]][p];
          s[g] = v, c = e.apply(null, s);
        }
        c && (o[u++] = p);
      }
      return u < i && (n._indices = o), n._count = u, n._extent = [], n._updateGetRawIdx(), n;
    }, r.prototype.selectRange = function(t) {
      var e = this.clone(), n = e._count;
      if (!n)
        return this;
      var i = gt(t), a = i.length;
      if (!a)
        return this;
      var o = e.count(), s = ti(e._rawCount), l = new s(o), u = 0, f = i[0], h = t[f][0], v = t[f][1], c = e._chunks, p = !1;
      if (!e._indices) {
        var d = 0;
        if (a === 1) {
          for (var g = c[i[0]], y = 0; y < n; y++) {
            var m = g[y];
            (m >= h && m <= v || isNaN(m)) && (l[u++] = d), d++;
          }
          p = !0;
        } else if (a === 2) {
          for (var g = c[i[0]], _ = c[i[1]], S = t[i[1]][0], w = t[i[1]][1], y = 0; y < n; y++) {
            var m = g[y], b = _[y];
            (m >= h && m <= v || isNaN(m)) && (b >= S && b <= w || isNaN(b)) && (l[u++] = d), d++;
          }
          p = !0;
        }
      }
      if (!p)
        if (a === 1)
          for (var y = 0; y < o; y++) {
            var x = e.getRawIndex(y), m = c[i[0]][x];
            (m >= h && m <= v || isNaN(m)) && (l[u++] = x);
          }
        else
          for (var y = 0; y < o; y++) {
            for (var T = !0, x = e.getRawIndex(y), A = 0; A < a; A++) {
              var M = i[A], m = c[M][x];
              (m < t[M][0] || m > t[M][1]) && (T = !1);
            }
            T && (l[u++] = e.getRawIndex(y));
          }
      return u < o && (e._indices = l), e._count = u, e._extent = [], e._updateGetRawIdx(), e;
    }, r.prototype.map = function(t, e) {
      var n = this.clone(t);
      return this._updateDims(n, t, e), n;
    }, r.prototype.modify = function(t, e) {
      this._updateDims(this, t, e);
    }, r.prototype._updateDims = function(t, e, n) {
      for (var i = t._chunks, a = [], o = e.length, s = t.count(), l = [], u = t._rawExtent, f = 0; f < e.length; f++)
        u[e[f]] = ei();
      for (var h = 0; h < s; h++) {
        for (var v = t.getRawIndex(h), c = 0; c < o; c++)
          l[c] = i[e[c]][v];
        l[o] = h;
        var p = n && n.apply(null, l);
        if (p != null) {
          typeof p != "object" && (a[0] = p, p = a);
          for (var f = 0; f < p.length; f++) {
            var d = e[f], g = p[f], y = u[d], m = i[d];
            m && (m[v] = g), g < y[0] && (y[0] = g), g > y[1] && (y[1] = g);
          }
        }
      }
    }, r.prototype.lttbDownSample = function(t, e) {
      var n = this.clone([t], !0), i = n._chunks, a = i[t], o = this.count(), s = 0, l = Math.floor(1 / e), u = this.getRawIndex(0), f, h, v, c = new (ti(this._rawCount))(Math.min((Math.ceil(o / l) + 2) * 2, o));
      c[s++] = u;
      for (var p = 1; p < o - 1; p += l) {
        for (var d = Math.min(p + l, o - 1), g = Math.min(p + l * 2, o), y = (g + d) / 2, m = 0, _ = d; _ < g; _++) {
          var S = this.getRawIndex(_), w = a[S];
          isNaN(w) || (m += w);
        }
        m /= g - d;
        var b = p, x = Math.min(p + l, o), T = p - 1, A = a[u];
        f = -1, v = b;
        for (var M = -1, C = 0, _ = b; _ < x; _++) {
          var S = this.getRawIndex(_), w = a[S];
          if (isNaN(w)) {
            C++, M < 0 && (M = S);
            continue;
          }
          h = Math.abs((T - y) * (w - A) - (T - _) * (m - A)), h > f && (f = h, v = S);
        }
        C > 0 && C < x - b && (c[s++] = Math.min(M, v), v = Math.max(M, v)), c[s++] = v, u = v;
      }
      return c[s++] = this.getRawIndex(o - 1), n._count = s, n._indices = c, n.getRawIndex = this._getRawIdx, n;
    }, r.prototype.minmaxDownSample = function(t, e) {
      for (var n = this.clone([t], !0), i = n._chunks, a = Math.floor(1 / e), o = i[t], s = this.count(), l = new (ti(this._rawCount))(Math.ceil(s / a) * 2), u = 0, f = 0; f < s; f += a) {
        var h = f, v = o[this.getRawIndex(h)], c = f, p = o[this.getRawIndex(c)], d = a;
        f + a > s && (d = s - f);
        for (var g = 0; g < d; g++) {
          var y = this.getRawIndex(f + g), m = o[y];
          m < v && (v = m, h = f + g), m > p && (p = m, c = f + g);
        }
        var _ = this.getRawIndex(h), S = this.getRawIndex(c);
        h < c ? (l[u++] = _, l[u++] = S) : (l[u++] = S, l[u++] = _);
      }
      return n._count = u, n._indices = l, n._updateGetRawIdx(), n;
    }, r.prototype.downSample = function(t, e, n, i) {
      for (var a = this.clone([t], !0), o = a._chunks, s = [], l = Math.floor(1 / e), u = o[t], f = this.count(), h = a._rawExtent[t] = ei(), v = new (ti(this._rawCount))(Math.ceil(f / l)), c = 0, p = 0; p < f; p += l) {
        l > f - p && (l = f - p, s.length = l);
        for (var d = 0; d < l; d++) {
          var g = this.getRawIndex(p + d);
          s[d] = u[g];
        }
        var y = n(s), m = this.getRawIndex(Math.min(p + i(s, y) || 0, f - 1));
        u[m] = y, y < h[0] && (h[0] = y), y > h[1] && (h[1] = y), v[c++] = m;
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
              for (var l = 0, u = []; l < n; l++)
                u[l] = i[t[l]][s];
              u[l] = a, e.apply(null, u);
          }
        }
    }, r.prototype.getDataExtent = function(t) {
      var e = this._chunks[t], n = ei();
      if (!e)
        return n;
      var i = this.count(), a = !this._indices, o;
      if (a)
        return this._rawExtent[t].slice();
      if (o = this._extent[t], o)
        return o.slice();
      o = n;
      for (var s = o[0], l = o[1], u = 0; u < i; u++) {
        var f = this.getRawIndex(u), h = e[f];
        h < s && (s = h), h > l && (l = h);
      }
      return o = [s, l], this._extent[t] = o, o;
    }, r.prototype.getRawDataItem = function(t) {
      var e = this.getRawIndex(t);
      if (this._provider.persistent)
        return this._provider.getItem(e);
      for (var n = [], i = this._chunks, a = 0; a < i.length; a++)
        n.push(i[a][e]);
      return n;
    }, r.prototype.clone = function(t, e) {
      var n = new r(), i = this._chunks, a = t && nr(t, function(s, l) {
        return s[l] = !0, s;
      }, {});
      if (a)
        for (var o = 0; o < i.length; o++)
          n._chunks[o] = a[o] ? yD(i[o]) : i[o];
      else
        n._chunks = i;
      return this._copyCommonProps(n), e || (n._indices = this._cloneIndices()), n._updateGetRawIdx(), n;
    }, r.prototype._copyCommonProps = function(t) {
      t._count = this._count, t._rawCount = this._rawCount, t._provider = this._provider, t._dimensions = this._dimensions, t._extent = j(this._extent), t._rawExtent = j(this._rawExtent);
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
        return _s(e[a], this._dimensions[a]);
      }
      Gu = {
        arrayRows: t,
        objectRows: function(e, n, i, a) {
          return _s(e[n], this._dimensions[a]);
        },
        keyedColumns: t,
        original: function(e, n, i, a) {
          var o = e && (e.value == null ? e : e.value);
          return _s(o instanceof Array ? o[a] : o, this._dimensions[a]);
        },
        typedArray: function(e, n, i, a) {
          return e[a];
        }
      };
    })(), r;
  })()
), mD = (
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
      if (ia(t)) {
        var o = t, s = void 0, l = void 0, u = void 0;
        if (n) {
          var f = e[0];
          f.prepareSource(), u = f.getSource(), s = u.data, l = u.sourceFormat, a = [f._getVersionSign()];
        } else
          s = o.get("data", !0), l = qt(s) ? Sr : Pe, a = [];
        var h = this._getSourceMetaRawOption() || {}, v = u && u.metaRawOption || {}, c = Q(h.seriesLayoutBy, v.seriesLayoutBy) || null, p = Q(h.sourceHeader, v.sourceHeader), d = Q(h.dimensions, v.dimensions), g = c !== v.seriesLayoutBy || !!p != !!v.sourceHeader || d;
        i = g ? [rh(s, {
          seriesLayoutBy: c,
          sourceHeader: p,
          dimensions: d
        }, l)] : [];
      } else {
        var y = t;
        if (n) {
          var m = this._applyTransform(e);
          i = m.sourceList, a = m.upstreamSignList;
        } else {
          var _ = y.get("source", !0);
          i = [rh(_, this._getSourceMetaRawOption(), null)], a = [];
        }
      }
      process.env.NODE_ENV !== "production" && tt(i && a), this._setLocalSource(i, a);
    }, r.prototype._applyTransform = function(t) {
      var e = this._sourceHost, n = e.get("transform", !0), i = e.get("fromTransformResult", !0);
      if (process.env.NODE_ENV !== "production" && tt(i != null || n != null), i != null) {
        var a = "";
        t.length !== 1 && (process.env.NODE_ENV !== "production" && (a = "When using `fromTransformResult`, there should be only one upstream dataset"), od(a));
      }
      var o, s = [], l = [];
      return D(t, function(u) {
        u.prepareSource();
        var f = u.getSource(i || 0), h = "";
        i != null && !f && (process.env.NODE_ENV !== "production" && (h = "Can not retrieve result by `fromTransformResult`: " + i), od(h)), s.push(f), l.push(u._getVersionSign());
      }), n ? o = vD(n, s, {
        datasetIndex: e.componentIndex
      }) : i != null && (o = [jC(s[0])]), {
        sourceList: o,
        upstreamSignList: l
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
      process.env.NODE_ENV !== "production" && tt(ia(this._sourceHost), "Can only call getDataStore on series source manager.");
      var e = t.makeStoreSchema();
      return this._innerGetDataStore(e.dimensions, t.source, e.hash);
    }, r.prototype._innerGetDataStore = function(t, e, n) {
      var i = 0, a = this._storeList, o = a[i];
      o || (o = a[i] = {});
      var s = o[n];
      if (!s) {
        var l = this._getUpstreamSourceManagers()[0];
        ia(this._sourceHost) && l ? s = l._innerGetDataStore(t, e, n) : (s = new nh(), s.initData(new _0(e, t.length), t)), o[n] = s;
      }
      return s;
    }, r.prototype._getUpstreamSourceManagers = function() {
      var t = this._sourceHost;
      if (ia(t)) {
        var e = wc(t);
        return e ? [e.getSourceManager()] : [];
      } else
        return Y(xC(t), function(n) {
          return n.getSourceManager();
        });
    }, r.prototype._getSourceMetaRawOption = function() {
      var t = this._sourceHost, e, n, i;
      if (ia(t))
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
function ia(r) {
  return r.mainType === "series";
}
function od(r) {
  throw new Error(r);
}
var _D = "line-height:1";
function D0(r) {
  var t = r.lineHeight;
  return t == null ? _D : "line-height:" + te(t + "") + "px";
}
function M0(r, t) {
  var e = r.color || "#6e7079", n = r.fontSize || 12, i = r.fontWeight || "400", a = r.color || "#464646", o = r.fontSize || 14, s = r.fontWeight || "900";
  return t === "html" ? {
    // eslint-disable-next-line max-len
    nameStyle: "font-size:" + te(n + "") + "px;color:" + te(e) + ";font-weight:" + te(i + ""),
    // eslint-disable-next-line max-len
    valueStyle: "font-size:" + te(o + "") + "px;color:" + te(a) + ";font-weight:" + te(s + "")
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
var SD = [0, 10, 20, 30], bD = ["", `
`, `

`, `


`];
function Ka(r, t) {
  return t.type = r, t;
}
function ih(r) {
  return r.type === "section";
}
function A0(r) {
  return ih(r) ? wD : xD;
}
function E0(r) {
  if (ih(r)) {
    var t = 0, e = r.blocks.length, n = e > 1 || e > 0 && !r.noHeader;
    return D(r.blocks, function(i) {
      var a = E0(i);
      a >= t && (t = a + +(n && // 0 always can not be readable gap level.
      (!a || ih(i) && !i.noHeader)));
    }), t;
  }
  return 0;
}
function wD(r, t, e, n) {
  var i = t.noHeader, a = TD(E0(t)), o = [], s = t.blocks || [];
  tt(!s || H(s)), s = s || [];
  var l = r.orderMode;
  if (t.sortBlocks && l) {
    s = s.slice();
    var u = {
      valueAsc: "asc",
      valueDesc: "desc"
    };
    if (jr(u, l)) {
      var f = new aD(u[l], null);
      s.sort(function(d, g) {
        return f.evaluate(d.sortParam, g.sortParam);
      });
    } else l === "seriesDesc" && s.reverse();
  }
  D(s, function(d, g) {
    var y = t.valueFormatter, m = A0(d)(
      // Inherit valueFormatter
      y ? B(B({}, r), {
        valueFormatter: y
      }) : r,
      d,
      g > 0 ? a.html : 0,
      n
    );
    m != null && o.push(m);
  });
  var h = r.renderMode === "richText" ? o.join(a.richText) : ah(n, o.join(""), i ? e : a.html);
  if (i)
    return h;
  var v = th(t.header, "ordinal", r.useUTC), c = M0(n, r.renderMode).nameStyle, p = D0(n);
  return r.renderMode === "richText" ? I0(r, v, c) + a.richText + h : ah(n, '<div style="' + c + ";" + p + ';">' + te(v) + "</div>" + h, e);
}
function xD(r, t, e, n) {
  var i = r.renderMode, a = t.noName, o = t.noValue, s = !t.markerType, l = t.name, u = r.useUTC, f = t.valueFormatter || r.valueFormatter || function(S) {
    return S = H(S) ? S : [S], Y(S, function(w, b) {
      return th(w, H(c) ? c[b] : c, u);
    });
  };
  if (!(a && o)) {
    var h = s ? "" : r.markupStyleCreator.makeTooltipMarker(t.markerType, t.markerColor || "#333", i), v = a ? "" : th(l, "ordinal", u), c = t.valueType, p = o ? [] : f(t.value, t.dataIndex), d = !s || !a, g = !s && a, y = M0(n, i), m = y.nameStyle, _ = y.valueStyle;
    return i === "richText" ? (s ? "" : h) + (a ? "" : I0(r, v, m)) + (o ? "" : MD(r, p, d, g, _)) : ah(n, (s ? "" : h) + (a ? "" : CD(v, !s, m)) + (o ? "" : DD(p, d, g, _)), e);
  }
}
function sd(r, t, e, n, i, a) {
  if (r) {
    var o = A0(r), s = {
      useUTC: i,
      renderMode: e,
      orderMode: n,
      markupStyleCreator: t,
      valueFormatter: r.valueFormatter
    };
    return o(s, r, 0, a);
  }
}
function TD(r) {
  return {
    html: SD[r],
    richText: bD[r]
  };
}
function ah(r, t, e) {
  var n = '<div style="clear:both"></div>', i = "margin: " + e + "px 0 0", a = D0(r);
  return '<div style="' + i + ";" + a + ';">' + t + n + "</div>";
}
function CD(r, t, e) {
  var n = t ? "margin-left:2px" : "";
  return '<span style="' + e + ";" + n + '">' + te(r) + "</span>";
}
function DD(r, t, e, n) {
  var i = e ? "10px" : "20px", a = t ? "float:right;margin-left:" + i : "";
  return r = H(r) ? r : [r], '<span style="' + a + ";" + n + '">' + Y(r, function(o) {
    return te(o);
  }).join("&nbsp;&nbsp;") + "</span>";
}
function I0(r, t, e) {
  return r.markupStyleCreator.wrapRichTextStyle(t, e);
}
function MD(r, t, e, n, i) {
  var a = [i], o = n ? 10 : 20;
  return e && a.push({
    padding: [0, 0, 0, o],
    align: "right"
  }), r.markupStyleCreator.wrapRichTextStyle(H(t) ? t.join("  ") : t, a);
}
function AD(r, t) {
  var e = r.getData().getItemVisual(t, "style"), n = e[r.visualDrawType];
  return Bn(n);
}
function L0(r, t) {
  var e = r.get("padding");
  return e ?? (t === "richText" ? [8, 10] : 10);
}
var Wu = (
  /** @class */
  (function() {
    function r() {
      this.richTextStyles = {}, this._nextStyleNameId = im();
    }
    return r.prototype._generateStyleName = function() {
      return "__EC_aUTo_" + this._nextStyleNameId++;
    }, r.prototype.makeTooltipMarker = function(t, e, n) {
      var i = n === "richText" ? this._generateStyleName() : null, a = o0({
        color: e,
        type: t,
        renderMode: n,
        markerId: i
      });
      return U(a) ? a : (process.env.NODE_ENV !== "production" && tt(i), this.richTextStyles[i] = a.style, a.content);
    }, r.prototype.wrapRichTextStyle = function(t, e) {
      var n = {};
      H(e) ? D(e, function(a) {
        return B(n, a);
      }) : B(n, e);
      var i = this._generateStyleName();
      return this.richTextStyles[i] = n, "{" + i + "|" + t + "}";
    }, r;
  })()
);
function ED(r) {
  var t = r.series, e = r.dataIndex, n = r.multipleSeries, i = t.getData(), a = i.mapDimensionsAll("defaultedTooltip"), o = a.length, s = t.getRawValue(e), l = H(s), u = AD(t, e), f, h, v, c;
  if (o > 1 || l && !o) {
    var p = ID(s, t, e, a, u);
    f = p.inlineValues, h = p.inlineValueTypes, v = p.blocks, c = p.inlineValues[0];
  } else if (o) {
    var d = i.getDimensionInfo(a[0]);
    c = f = Ci(i, e, a[0]), h = d.type;
  } else
    c = f = l ? s[0] : s;
  var g = ec(t), y = g && t.name || "", m = i.getName(e), _ = n ? y : m;
  return Ka("section", {
    header: y,
    // When series name is not specified, do not show a header line with only '-'.
    // This case always happens in tooltip.trigger: 'item'.
    noHeader: n || !g,
    sortParam: c,
    blocks: [Ka("nameValue", {
      markerType: "item",
      markerColor: u,
      // Do not mix display seriesName and itemName in one tooltip,
      // which might confuses users.
      name: _,
      // name dimension might be auto assigned, where the name might
      // be not readable. So we check trim here.
      noName: !Ve(_),
      value: f,
      valueType: h,
      dataIndex: e
    })].concat(v || [])
  });
}
function ID(r, t, e, n, i) {
  var a = t.getData(), o = nr(r, function(h, v, c) {
    var p = a.getDimensionInfo(c);
    return h = h || p && p.tooltip !== !1 && p.displayName != null;
  }, !1), s = [], l = [], u = [];
  n.length ? D(n, function(h) {
    f(Ci(a, e, h), h);
  }) : D(r, f);
  function f(h, v) {
    var c = a.getDimensionInfo(v);
    !c || c.otherDims.tooltip === !1 || (o ? u.push(Ka("nameValue", {
      markerType: "subItem",
      markerColor: i,
      name: c.displayName,
      value: h,
      valueType: c.type
    })) : (s.push(h), l.push(c.type)));
  }
  return {
    inlineValues: s,
    inlineValueTypes: l,
    blocks: u
  };
}
var Er = Mt();
function Ho(r, t) {
  return r.getName(t) || r.getId(t);
}
var LD = "__universalTransitionEnabled", zt = (
  /** @class */
  (function(r) {
    z(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e._selectedDataIndicesMap = {}, e;
    }
    return t.prototype.init = function(e, n, i) {
      this.seriesIndex = this.componentIndex, this.dataTask = Oa({
        count: OD,
        reset: RD
      }), this.dataTask.context = {
        model: this
      }, this.mergeDefaultAndTheme(e, i);
      var a = Er(this).sourceManager = new mD(this);
      a.prepareSource();
      var o = this.getInitialData(e, i);
      ud(o, this), this.dataTask.context.data = o, process.env.NODE_ENV !== "production" && tt(o, "getInitialData returned invalid data."), Er(this).dataBeforeProcessed = o, ld(this), this._initSelectedMapFromData(o);
    }, t.prototype.mergeDefaultAndTheme = function(e, n) {
      var i = Za(this), a = i ? Ol(e) : {}, o = this.subType;
      ot.hasClass(o) && (o += "Series"), st(e, n.getTheme().get(this.subType)), st(e, this.getDefaultOption()), ks(e, "label", ["show"]), this.fillDataTextStyle(e.data), i && Ti(e, a, i);
    }, t.prototype.mergeOption = function(e, n) {
      e = st(this.option, e, !0), this.fillDataTextStyle(e.data);
      var i = Za(this);
      i && Ti(this.option, e, i);
      var a = Er(this).sourceManager;
      a.dirty(), a.prepareSource();
      var o = this.getInitialData(e, n);
      ud(o, this), this.dataTask.dirty(), this.dataTask.context.data = o, Er(this).dataBeforeProcessed = o, ld(this), this._initSelectedMapFromData(o);
    }, t.prototype.fillDataTextStyle = function(e) {
      if (e && !qt(e))
        for (var n = ["show"], i = 0; i < e.length; i++)
          e[i] && e[i].label && ks(e[i], "label", n);
    }, t.prototype.getInitialData = function(e, n) {
    }, t.prototype.appendData = function(e) {
      var n = this.getRawData();
      n.appendData(e.data);
    }, t.prototype.getData = function(e) {
      var n = oh(this);
      if (n) {
        var i = n.context.data;
        return e == null || !i.getLinkedData ? i : i.getLinkedData(e);
      } else
        return Er(this).data;
    }, t.prototype.getAllData = function() {
      var e = this.getData();
      return e && e.getLinkedDataAll ? e.getLinkedDataAll() : [{
        data: e
      }];
    }, t.prototype.setData = function(e) {
      var n = oh(this);
      if (n) {
        var i = n.context;
        i.outputData = e, n !== this.dataTask && (i.data = e);
      }
      Er(this).data = e;
    }, t.prototype.getEncode = function() {
      var e = this.get("encode", !0);
      if (e)
        return et(e);
    }, t.prototype.getSourceManager = function() {
      return Er(this).sourceManager;
    }, t.prototype.getSource = function() {
      return this.getSourceManager().getSource();
    }, t.prototype.getRawData = function() {
      return Er(this).dataBeforeProcessed;
    }, t.prototype.getColorBy = function() {
      var e = this.get("colorBy");
      return e || "series";
    }, t.prototype.isColorBySeries = function() {
      return this.getColorBy() === "series";
    }, t.prototype.getBaseAxis = function() {
      var e = this.coordinateSystem;
      return e && e.getBaseAxis && e.getBaseAxis();
    }, t.prototype.formatTooltip = function(e, n, i) {
      return ED({
        series: this,
        dataIndex: e,
        multipleSeries: n
      });
    }, t.prototype.isAnimationEnabled = function() {
      var e = this.ecModel;
      if (Z.node && !(e && e.ssr))
        return !1;
      var n = this.getShallow("animation");
      return n && this.getData().count() > this.getShallow("animationThreshold") && (n = !1), !!n;
    }, t.prototype.restoreData = function() {
      this.dataTask.dirty();
    }, t.prototype.getColorFromPalette = function(e, n, i) {
      var a = this.ecModel, o = xc.prototype.getColorFromPalette.call(this, e, n, i);
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
          var l = e[s], u = Ho(o, l);
          i[u] = !1, this._selectedDataIndicesMap[u] = -1;
        }
      }
    }, t.prototype.toggleSelect = function(e, n) {
      for (var i = [], a = 0; a < e.length; a++)
        i[0] = e[a], this.isSelected(e[a], n) ? this.unselect(i, n) : this.select(i, n);
    }, t.prototype.getSelectedDataIndices = function() {
      if (this.option.selectedMap === "all")
        return [].slice.call(this.getData().getIndices());
      for (var e = this._selectedDataIndicesMap, n = gt(e), i = [], a = 0; a < n.length; a++) {
        var o = e[n[a]];
        o >= 0 && i.push(o);
      }
      return i;
    }, t.prototype.isSelected = function(e, n) {
      var i = this.option.selectedMap;
      if (!i)
        return !1;
      var a = this.getData(n);
      return (i === "all" || i[Ho(a, e)]) && !a.getItemModel(e).get(["select", "disabled"]);
    }, t.prototype.isUniversalTransitionEnabled = function() {
      if (this[LD])
        return !0;
      var e = this.option.universalTransition;
      return e ? e === !0 ? !0 : e && e.enabled : !1;
    }, t.prototype._innerSelect = function(e, n) {
      var i, a, o = this.option, s = o.selectedMode, l = n.length;
      if (!(!s || !l)) {
        if (s === "series")
          o.selectedMap = "all";
        else if (s === "multiple") {
          W(o.selectedMap) || (o.selectedMap = {});
          for (var u = o.selectedMap, f = 0; f < l; f++) {
            var h = n[f], v = Ho(e, h);
            u[v] = !0, this._selectedDataIndicesMap[v] = e.getRawIndex(h);
          }
        } else if (s === "single" || s === !0) {
          var c = n[l - 1], v = Ho(e, c);
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
      return ot.registerClass(e);
    }, t.protoInitialize = (function() {
      var e = t.prototype;
      e.type = "series.__base__", e.seriesIndex = 0, e.ignoreStyleOnData = !1, e.hasSymbolVisual = !1, e.defaultSymbol = "circle", e.visualStyleAccessPath = "itemStyle", e.visualDrawType = "fill";
    })(), t;
  })(ot)
);
Ie(zt, nD);
Ie(zt, xc);
fm(zt, ot);
function ld(r) {
  var t = r.name;
  ec(r) || (r.name = PD(r) || t);
}
function PD(r) {
  var t = r.getRawData(), e = t.mapDimensionsAll("seriesName"), n = [];
  return D(e, function(i) {
    var a = t.getDimensionInfo(i);
    a.displayName && n.push(a.displayName);
  }), n.join(" ");
}
function OD(r) {
  return r.model.getRawData().count();
}
function RD(r) {
  var t = r.model;
  return t.setData(t.getRawData().cloneShallow()), ND;
}
function ND(r, t) {
  t.outputData && r.end > t.outputData.count() && t.model.getRawData().cloneShallow(t.outputData);
}
function ud(r, t) {
  D(Ay(r.CHANGABLE_METHODS, r.DOWNSAMPLE_METHODS), function(e) {
    r.wrapMethod(e, wt(kD, t));
  });
}
function kD(r, t) {
  var e = oh(r);
  return e && e.setOutputEnd((t || this).count()), t;
}
function oh(r) {
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
var ne = (
  /** @class */
  (function() {
    function r() {
      this.group = new xt(), this.uid = Ml("viewComponent");
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
nc(ne);
hl(ne);
function Ac() {
  var r = Mt();
  return function(t) {
    var e = r(t), n = t.pipelineContext, i = !!e.large, a = !!e.progressiveRender, o = e.large = !!(n && n.large), s = e.progressiveRender = !!(n && n.progressiveRender);
    return (i !== o || a !== s) && "reset";
  };
}
var P0 = Mt(), VD = Ac(), Pt = (
  /** @class */
  (function() {
    function r() {
      this.group = new xt(), this.uid = Ml("viewChart"), this.renderTask = Oa({
        plan: BD,
        reset: zD
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
        process.env.NODE_ENV !== "production" && Zt("Unknown dataType " + i.dataType);
        return;
      }
      hd(a, i, "emphasis");
    }, r.prototype.downplay = function(t, e, n, i) {
      var a = t.getData(i && i.dataType);
      if (!a) {
        process.env.NODE_ENV !== "production" && Zt("Unknown dataType " + i.dataType);
        return;
      }
      hd(a, i, "normal");
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
      po(this.group, t);
    }, r.markUpdateMethod = function(t, e) {
      P0(t).updateMethod = e;
    }, r.protoInitialize = (function() {
      var t = r.prototype;
      t.type = "chart";
    })(), r;
  })()
);
function fd(r, t, e) {
  r && xi(r) && (t === "emphasis" ? zs : Fs)(r, e);
}
function hd(r, t, e) {
  var n = Nn(r, t), i = t && t.highlightKey != null ? sT(t.highlightKey) : null;
  n != null ? D(Bt(n), function(a) {
    fd(r.getItemGraphicEl(a), e, i);
  }) : r.eachItemGraphicEl(function(a) {
    fd(a, e, i);
  });
}
nc(Pt, ["dispose"]);
hl(Pt);
function BD(r) {
  return VD(r.model);
}
function zD(r) {
  var t = r.model, e = r.ecModel, n = r.api, i = r.payload, a = t.pipelineContext.progressiveRender, o = r.view, s = i && P0(i).updateMethod, l = a ? "incrementalPrepareRender" : s && o[s] ? s : "render";
  return l !== "render" && o[l](t, e, n, i), FD[l];
}
var FD = {
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
}, qs = "\0__throttleOriginMethod", cd = "\0__throttleRate", vd = "\0__throttleType";
function kl(r, t, e) {
  var n, i = 0, a = 0, o = null, s, l, u, f;
  t = t || 0;
  function h() {
    a = (/* @__PURE__ */ new Date()).getTime(), o = null, r.apply(l, u || []);
  }
  var v = function() {
    for (var c = [], p = 0; p < arguments.length; p++)
      c[p] = arguments[p];
    n = (/* @__PURE__ */ new Date()).getTime(), l = this, u = c;
    var d = f || t, g = f || e;
    f = null, s = n - (g ? i : a) - d, clearTimeout(o), g ? o = setTimeout(h, d) : s >= 0 ? h() : o = setTimeout(h, -s), i = n;
  };
  return v.clear = function() {
    o && (clearTimeout(o), o = null);
  }, v.debounceNextCall = function(c) {
    f = c;
  }, v;
}
function O0(r, t, e, n) {
  var i = r[t];
  if (i) {
    var a = i[qs] || i, o = i[vd], s = i[cd];
    if (s !== e || o !== n) {
      if (e == null || !n)
        return r[t] = a;
      i = r[t] = kl(a, e, n === "debounce"), i[qs] = a, i[vd] = n, i[cd] = e;
    }
    return i;
  }
}
function sh(r, t) {
  var e = r[t];
  e && e[qs] && (e.clear && e.clear(), r[t] = e[qs]);
}
var pd = Mt(), dd = {
  itemStyle: Ua(jm, !0),
  lineStyle: Ua(Zm, !0)
}, HD = {
  lineStyle: "stroke",
  itemStyle: "fill"
};
function R0(r, t) {
  var e = r.visualStyleMapper || dd[t];
  return e || (console.warn("Unknown style type '" + t + "'."), dd.itemStyle);
}
function N0(r, t) {
  var e = r.visualDrawType || HD[t];
  return e || (console.warn("Unknown style type '" + t + "'."), "fill");
}
var GD = {
  createOnAllSeries: !0,
  performRawSeries: !0,
  reset: function(r, t) {
    var e = r.getData(), n = r.visualStyleAccessPath || "itemStyle", i = r.getModel(n), a = R0(r, n), o = a(i), s = i.getShallow("decal");
    s && (e.setVisual("decal", s), s.dirty = !0);
    var l = N0(r, n), u = o[l], f = $(u) ? u : null, h = o.fill === "auto" || o.stroke === "auto";
    if (!o[l] || f || h) {
      var v = r.getColorFromPalette(
        // TODO series count changed.
        r.name,
        null,
        t.getSeriesCount()
      );
      o[l] || (o[l] = v, e.setVisual("colorFromPalette", !0)), o.fill = o.fill === "auto" || $(o.fill) ? v : o.fill, o.stroke = o.stroke === "auto" || $(o.stroke) ? v : o.stroke;
    }
    if (e.setVisual("style", o), e.setVisual("drawType", l), !t.isSeriesFiltered(r) && f)
      return e.setVisual("colorFromPalette", !1), {
        dataEach: function(c, p) {
          var d = r.getDataParams(p), g = B({}, o);
          g[l] = f(d), c.setItemVisual(p, "style", g);
        }
      };
  }
}, aa = new mt(), WD = {
  createOnAllSeries: !0,
  performRawSeries: !0,
  reset: function(r, t) {
    if (!(r.ignoreStyleOnData || t.isSeriesFiltered(r))) {
      var e = r.getData(), n = r.visualStyleAccessPath || "itemStyle", i = R0(r, n), a = e.getVisual("drawType");
      return {
        dataEach: e.hasItemOption ? function(o, s) {
          var l = o.getRawDataItem(s);
          if (l && l[n]) {
            aa.option = l[n];
            var u = i(aa), f = o.ensureUniqueItemVisual(s, "style");
            B(f, u), aa.option.decal && (o.setItemVisual(s, "decal", aa.option.decal), aa.option.decal.dirty = !0), a in u && o.setItemVisual(s, "colorFromPalette", !1);
          }
        } : null
      };
    }
  }
}, UD = {
  performRawSeries: !0,
  overallReset: function(r) {
    var t = et();
    r.eachSeries(function(e) {
      var n = e.getColorBy();
      if (!e.isColorBySeries()) {
        var i = e.type + "-" + n, a = t.get(i);
        a || (a = {}, t.set(i, a)), pd(e).scope = a;
      }
    }), r.eachSeries(function(e) {
      if (!(e.isColorBySeries() || r.isSeriesFiltered(e))) {
        var n = e.getRawData(), i = {}, a = e.getData(), o = pd(e).scope, s = e.visualStyleAccessPath || "itemStyle", l = N0(e, s);
        a.each(function(u) {
          var f = a.getRawIndex(u);
          i[f] = u;
        }), n.each(function(u) {
          var f = i[u], h = a.getItemVisual(f, "colorFromPalette");
          if (h) {
            var v = a.ensureUniqueItemVisual(f, "style"), c = n.getName(u) || u + "", p = n.count();
            v[l] = e.getColorFromPalette(c, o, p);
          }
        });
      }
    });
  }
}, Go = Math.PI;
function YD(r, t) {
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
  var e = new xt(), n = new _t({
    style: {
      fill: t.maskColor
    },
    zlevel: t.zlevel,
    z: 1e4
  });
  e.add(n);
  var i = new St({
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
  }), a = new _t({
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
  return t.showSpinner && (o = new vo({
    shape: {
      startAngle: -Go / 2,
      endAngle: -Go / 2 + 0.1,
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
    endAngle: Go * 3 / 2
  }).start("circularInOut"), o.animateShape(!0).when(1e3, {
    startAngle: Go * 3 / 2
  }).delay(300).start("circularInOut"), e.add(o)), e.resize = function() {
    var s = i.getBoundingRect().width, l = t.showSpinner ? t.spinnerRadius : 0, u = (r.getWidth() - l * 2 - (t.showSpinner && s ? 10 : 0) - s) / 2 - (t.showSpinner && s ? 0 : 5 + s / 2) + (t.showSpinner ? 0 : s / 2) + (s ? 0 : l), f = r.getHeight() / 2;
    t.showSpinner && o.setShape({
      cx: u,
      cy: f
    }), a.setShape({
      x: u - l,
      y: f - l,
      width: l * 2,
      height: l * 2
    }), n.setShape({
      x: 0,
      y: 0,
      width: r.getWidth(),
      height: r.getHeight()
    });
  }, e.resize(), e;
}
var k0 = (
  /** @class */
  (function() {
    function r(t, e, n, i) {
      this._stageTaskMap = et(), this.ecInstance = t, this.api = e, n = this._dataProcessorHandlers = n.slice(), i = this._visualHandlers = i.slice(), this._allHandlers = n.concat(i);
    }
    return r.prototype.restoreData = function(t, e) {
      t.restoreData(e), this._stageTaskMap.each(function(n) {
        var i = n.overallTask;
        i && i.dirty();
      });
    }, r.prototype.getPerformArgs = function(t, e) {
      if (t.__pipeline) {
        var n = this._pipelineMap.get(t.__pipeline.id), i = n.context, a = !e && n.progressiveEnabled && (!i || i.progressiveRender) && t.__idxInPipeline > n.blockIndex, o = a ? n.step : null, s = i && i.modDataCount, l = s != null ? Math.ceil(s / o) : null;
        return {
          step: o,
          modBy: l,
          modDataCount: s
        };
      }
    }, r.prototype.getPipeline = function(t) {
      return this._pipelineMap.get(t);
    }, r.prototype.updateStreamModes = function(t, e) {
      var n = this._pipelineMap.get(t.uid), i = t.getData(), a = i.count(), o = n.progressiveEnabled && e.incrementalPrepareRender && a >= n.threshold, s = t.get("large") && a >= t.get("largeThreshold"), l = t.get("progressiveChunkMode") === "mod" ? a : null;
      t.pipelineContext = n.context = {
        progressiveRender: o,
        modDataCount: l,
        large: s
      };
    }, r.prototype.restorePipelines = function(t) {
      var e = this, n = e._pipelineMap = et();
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
      D(this._allHandlers, function(i) {
        var a = t.get(i.uid) || t.set(i.uid, {}), o = "";
        process.env.NODE_ENV !== "production" && (o = '"reset" and "overallReset" must not be both specified.'), tt(!(i.reset && i.overallReset), o), i.reset && this._createSeriesStageTask(i, a, e, n), i.overallReset && this._createOverallStageTask(i, a, e, n);
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
      D(t, function(l, u) {
        if (!(i.visualType && i.visualType !== l.visualType)) {
          var f = o._stageTaskMap.get(l.uid), h = f.seriesTaskMap, v = f.overallTask;
          if (v) {
            var c, p = v.agentStubMap;
            p.each(function(g) {
              s(i, g) && (g.dirty(), c = !0);
            }), c && v.dirty(), o.updatePayload(v, n);
            var d = o.getPerformArgs(v, i.block);
            p.each(function(g) {
              g.perform(d);
            }), v.perform(d) && (a = !0);
          } else h && h.each(function(g, y) {
            s(i, g) && g.dirty();
            var m = o.getPerformArgs(g, i.block);
            m.skip = !l.performRawSeries && e.isSeriesFiltered(g.context.model), o.updatePayload(g, n), g.perform(m) && (a = !0);
          });
        }
      });
      function s(l, u) {
        return l.setDirty && (!l.dirtyMap || l.dirtyMap.get(u.__pipeline.id));
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
      var a = this, o = e.seriesTaskMap, s = e.seriesTaskMap = et(), l = t.seriesType, u = t.getTargetSeries;
      t.createOnAllSeries ? n.eachRawSeries(f) : l ? n.eachRawSeriesByType(l, f) : u && u(n, i).each(f);
      function f(h) {
        var v = h.uid, c = s.set(v, o && o.get(v) || Oa({
          plan: jD,
          reset: KD,
          count: JD
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
      var a = this, o = e.overallTask = e.overallTask || Oa({
        reset: XD
      });
      o.context = {
        ecModel: n,
        api: i,
        overallReset: t.overallReset,
        scheduler: a
      };
      var s = o.agentStubMap, l = o.agentStubMap = et(), u = t.seriesType, f = t.getTargetSeries, h = !0, v = !1, c = "";
      process.env.NODE_ENV !== "production" && (c = '"createOnAllSeries" is not supported for "overallReset", because it will block all streams.'), tt(!t.createOnAllSeries, c), u ? n.eachRawSeriesByType(u, p) : f ? f(n, i).each(p) : (h = !1, D(n.getSeries(), p));
      function p(d) {
        var g = d.uid, y = l.set(g, s && s.get(g) || // When the result of `getTargetSeries` changed, the overallTask
        // should be set as dirty and re-performed.
        (v = !0, Oa({
          reset: $D,
          onDirty: ZD
        })));
        y.context = {
          model: d,
          overallProgress: h
          // FIXME:TS never used, so comment it
          // modifyOutputEnd: modifyOutputEnd
        }, y.agent = o, y.__block = h, a._pipe(d, y);
      }
      v && o.dirty();
    }, r.prototype._pipe = function(t, e) {
      var n = t.uid, i = this._pipelineMap.get(n);
      !i.head && (i.head = e), i.tail && i.tail.pipe(e), i.tail = e, e.__idxInPipeline = i.count++, e.__pipeline = i;
    }, r.wrapStageHandler = function(t, e) {
      return $(t) && (t = {
        overallReset: t,
        seriesType: tM(t)
      }), t.uid = Ml("stageHandler"), e && (t.visualType = e), t;
    }, r;
  })()
);
function XD(r) {
  r.overallReset(r.ecModel, r.api, r.payload);
}
function $D(r) {
  return r.overallProgress && qD;
}
function qD() {
  this.agent.dirty(), this.getDownstream().dirty();
}
function ZD() {
  this.agent && this.agent.dirty();
}
function jD(r) {
  return r.plan ? r.plan(r.model, r.ecModel, r.api, r.payload) : null;
}
function KD(r) {
  r.useClearVisual && r.data.clearAllVisual();
  var t = r.resetDefines = Bt(r.reset(r.model, r.ecModel, r.api, r.payload));
  return t.length > 1 ? Y(t, function(e, n) {
    return V0(n);
  }) : QD;
}
var QD = V0(0);
function V0(r) {
  return function(t, e) {
    var n = e.data, i = e.resetDefines[r];
    if (i && i.dataEach)
      for (var a = t.start; a < t.end; a++)
        i.dataEach(n, a);
    else i && i.progress && i.progress(t, n);
  };
}
function JD(r) {
  return r.data.count();
}
function tM(r) {
  Zs = null;
  try {
    r(Qa, B0);
  } catch {
  }
  return Zs;
}
var Qa = {}, B0 = {}, Zs;
z0(Qa, Tc);
z0(B0, v0);
Qa.eachSeriesByType = Qa.eachRawSeriesByType = function(r) {
  Zs = r;
};
Qa.eachComponent = function(r) {
  r.mainType === "series" && r.subType && (Zs = r.subType);
};
function z0(r, t) {
  for (var e in t.prototype)
    r[e] = Xt;
}
var gd = ["#37A2DA", "#32C5E9", "#67E0E3", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#E062AE", "#E690D1", "#e7bcf3", "#9d96f5", "#8378EA", "#96BFFF"];
const eM = {
  color: gd,
  colorLayer: [["#37A2DA", "#ffd85c", "#fd7b5f"], ["#37A2DA", "#67E0E3", "#FFDB5C", "#ff9f7f", "#E062AE", "#9d96f5"], ["#37A2DA", "#32C5E9", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#e7bcf3", "#8378EA", "#96BFFF"], gd]
};
var Ut = "#B9B8CE", yd = "#100C2A", Wo = function() {
  return {
    axisLine: {
      lineStyle: {
        color: Ut
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
}, md = ["#4992ff", "#7cffb2", "#fddd60", "#ff6e76", "#58d9f9", "#05c091", "#ff8a45", "#8d48e3", "#dd79ff"], F0 = {
  darkMode: !0,
  color: md,
  backgroundColor: yd,
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
      color: Ut
    },
    pageTextStyle: {
      color: Ut
    }
  },
  textStyle: {
    color: Ut
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
      borderColor: Ut
    }
  },
  dataZoom: {
    borderColor: "#71708A",
    textStyle: {
      color: Ut
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
      color: Ut
    }
  },
  timeline: {
    lineStyle: {
      color: Ut
    },
    label: {
      color: Ut
    },
    controlStyle: {
      color: Ut,
      borderColor: Ut
    }
  },
  calendar: {
    itemStyle: {
      color: yd
    },
    dayLabel: {
      color: Ut
    },
    monthLabel: {
      color: Ut
    },
    yearLabel: {
      color: Ut
    }
  },
  timeAxis: Wo(),
  logAxis: Wo(),
  valueAxis: Wo(),
  categoryAxis: Wo(),
  line: {
    symbol: "circle"
  },
  graph: {
    color: md
  },
  gauge: {
    title: {
      color: Ut
    },
    axisLine: {
      lineStyle: {
        color: [[1, "rgba(207,212,219,0.2)"]]
      }
    },
    axisLabel: {
      color: Ut
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
F0.categoryAxis.splitLine.show = !1;
var rM = (
  /** @class */
  (function() {
    function r() {
    }
    return r.prototype.normalizeQuery = function(t) {
      var e = {}, n = {}, i = {};
      if (U(t)) {
        var a = rr(t);
        e.mainType = a.main || null, e.subType = a.sub || null;
      } else {
        var o = ["Index", "Name", "Id"], s = {
          name: 1,
          dataIndex: 1,
          dataType: 1
        };
        D(t, function(l, u) {
          for (var f = !1, h = 0; h < o.length; h++) {
            var v = o[h], c = u.lastIndexOf(v);
            if (c > 0 && c === u.length - v.length) {
              var p = u.slice(0, c);
              p !== "data" && (e.mainType = p, e[v.toLowerCase()] = l, f = !0);
            }
          }
          s.hasOwnProperty(u) && (n[u] = l, f = !0), f || (i[u] = l);
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
      var l = e.cptQuery, u = e.dataQuery;
      return f(l, o, "mainType") && f(l, o, "subType") && f(l, o, "index", "componentIndex") && f(l, o, "name") && f(l, o, "id") && f(u, a, "name") && f(u, a, "dataIndex") && f(u, a, "dataType") && (!s.filterForExposedEvent || s.filterForExposedEvent(t, e.otherQuery, i, a));
      function f(h, v, c, p) {
        return h[c] == null || v[p || c] === h[c];
      }
    }, r.prototype.afterTrigger = function() {
      this.eventInfo = null;
    }, r;
  })()
), lh = ["symbol", "symbolSize", "symbolRotate", "symbolOffset"], _d = lh.concat(["symbolKeepAspect"]), nM = {
  createOnAllSeries: !0,
  // For legend.
  performRawSeries: !0,
  reset: function(r, t) {
    var e = r.getData();
    if (r.legendIcon && e.setVisual("legendIcon", r.legendIcon), !r.hasSymbolVisual)
      return;
    for (var n = {}, i = {}, a = !1, o = 0; o < lh.length; o++) {
      var s = lh[o], l = r.get(s);
      $(l) ? (a = !0, i[s] = l) : n[s] = l;
    }
    if (n.symbol = n.symbol || r.defaultSymbol, e.setVisual(B({
      legendIcon: r.legendIcon || n.symbol,
      symbolKeepAspect: r.get("symbolKeepAspect")
    }, n)), t.isSeriesFiltered(r))
      return;
    var u = gt(i);
    function f(h, v) {
      for (var c = r.getRawValue(v), p = r.getDataParams(v), d = 0; d < u.length; d++) {
        var g = u[d];
        h.setItemVisual(v, g, i[g](c, p));
      }
    }
    return {
      dataEach: a ? f : null
    };
  }
}, iM = {
  createOnAllSeries: !0,
  // For legend.
  performRawSeries: !0,
  reset: function(r, t) {
    if (!r.hasSymbolVisual || t.isSeriesFiltered(r))
      return;
    var e = r.getData();
    function n(i, a) {
      for (var o = i.getItemModel(a), s = 0; s < _d.length; s++) {
        var l = _d[s], u = o.getShallow(l, !0);
        u != null && i.setItemVisual(a, l, u);
      }
    }
    return {
      dataEach: e.hasItemOption ? n : null
    };
  }
};
function H0(r, t, e) {
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
function G0(r, t) {
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
function aM(r, t, e, n) {
  switch (e) {
    case "color":
      var i = r.ensureUniqueItemVisual(t, "style");
      i[r.getVisual("drawType")] = n, r.setItemVisual(t, "colorFromPalette", !1);
      break;
    case "opacity":
      r.ensureUniqueItemVisual(t, "style").opacity = n;
      break;
    case "symbol":
    case "symbolSize":
    case "liftZ":
      r.setItemVisual(t, e, n);
      break;
    default:
      process.env.NODE_ENV !== "production" && console.warn("Unknown visual type " + e);
  }
}
function oM(r, t) {
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
  D([[r + "ToggleSelect", "toggleSelect"], [r + "Select", "select"], [r + "UnSelect", "unselect"]], function(n) {
    t(n[0], function(i, a, o) {
      i = B({}, i), process.env.NODE_ENV !== "production" && Et(i.type, n[1]), o.dispatchAction(B(i, {
        type: n[1],
        seriesIndex: e(a, i)
      }));
    });
  });
}
function ri(r, t, e, n, i) {
  var a = r + t;
  e.isSilent(a) || (process.env.NODE_ENV !== "production" && We("event " + a + " is deprecated."), n.eachComponent({
    mainType: "series",
    subType: "pie"
  }, function(o) {
    for (var s = o.seriesIndex, l = o.option.selectedMap, u = i.selected, f = 0; f < u.length; f++)
      if (u[f].seriesIndex === s) {
        var h = o.getData(), v = Nn(h, i.fromActionPayload);
        e.trigger(a, {
          type: a,
          seriesId: o.id,
          name: H(v) ? h.getName(v[0]) : h.getName(v),
          selected: U(l) ? l : B({}, l)
        });
      }
  }));
}
function sM(r, t, e) {
  r.on("selectchanged", function(n) {
    var i = e.getModel();
    n.isFromClick ? (ri("map", "selectchanged", t, i, n), ri("pie", "selectchanged", t, i, n)) : n.fromAction === "select" ? (ri("map", "selected", t, i, n), ri("pie", "selected", t, i, n)) : n.fromAction === "unselect" && (ri("map", "unselected", t, i, n), ri("pie", "unselected", t, i, n));
  });
}
function vi(r, t, e) {
  for (var n; r && !(t(r) && (n = r, e)); )
    r = r.__hostTarget || r.parent;
  return n;
}
var lM = Math.round(Math.random() * 9), uM = typeof Object.defineProperty == "function", fM = (function() {
  function r() {
    this._id = "__ec_inner_" + lM++;
  }
  return r.prototype.get = function(t) {
    return this._guard(t)[this._id];
  }, r.prototype.set = function(t, e) {
    var n = this._guard(t);
    return uM ? Object.defineProperty(n, this._id, {
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
})(), hM = pt.extend({
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
}), cM = pt.extend({
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
}), vM = pt.extend({
  type: "pin",
  shape: {
    // x, y on the cusp
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  buildPath: function(r, t) {
    var e = t.x, n = t.y, i = t.width / 5 * 3, a = Math.max(i, t.height), o = i / 2, s = o * o / (a - o), l = n - a + o + s, u = Math.asin(s / o), f = Math.cos(u) * o, h = Math.sin(u), v = Math.cos(u), c = o * 0.6, p = o * 0.7;
    r.moveTo(e - f, l + s), r.arc(e, l, o, Math.PI - u, Math.PI * 2 + u), r.bezierCurveTo(e + f - h * c, l + s + v * c, e, n - p, e, n), r.bezierCurveTo(e, n - p, e - f + h * c, l + s + v * c, e - f, l + s), r.closePath();
  }
}), pM = pt.extend({
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
}), dM = {
  line: xr,
  rect: _t,
  roundRect: _t,
  square: _t,
  circle: co,
  diamond: cM,
  pin: vM,
  arrow: pM,
  triangle: hM
}, gM = {
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
}, uh = {};
D(dM, function(r, t) {
  uh[t] = new r();
});
var yM = pt.extend({
  type: "symbol",
  shape: {
    symbolType: "",
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  calculateTextPosition: function(r, t, e) {
    var n = Os(r, t, e), i = this.shape;
    return i && i.symbolType === "pin" && t.position === "inside" && (n.y = e.y + e.height * 0.4), n;
  },
  buildPath: function(r, t, e) {
    var n = t.symbolType;
    if (n !== "none") {
      var i = uh[n];
      i || (n = "rect", i = uh[n]), gM[n](t.x, t.y, t.width, t.height, i.shape), i.buildPath(r, i.shape, e);
    }
  }
});
function mM(r, t) {
  if (this.type !== "image") {
    var e = this.style;
    this.__isEmptyBrush ? (e.stroke = r, e.fill = t || "#fff", e.lineWidth = 2) : this.shape.symbolType === "line" ? e.stroke = r : e.fill = r, this.markRedraw();
  }
}
function Ue(r, t, e, n, i, a, o) {
  var s = r.indexOf("empty") === 0;
  s && (r = r.substr(5, 1).toLowerCase() + r.substr(6));
  var l;
  return r.indexOf("image://") === 0 ? l = fc(r.slice(8), new lt(t, e, n, i), o ? "center" : "cover") : r.indexOf("path://") === 0 ? l = wl(r.slice(7), {}, new lt(t, e, n, i), o ? "center" : "cover") : l = new yM({
    shape: {
      symbolType: r,
      x: t,
      y: e,
      width: n,
      height: i
    }
  }), l.__isEmptyBrush = s, l.setColor = mM, a && l.setColor(a), l;
}
function _M(r) {
  return H(r) || (r = [+r, +r]), [r[0] || 0, r[1] || 0];
}
function W0(r, t) {
  if (r != null)
    return H(r) || (r = [r, r]), [ct(r[0], t[0]) || 0, ct(Q(r[1], r[0]), t[1]) || 0];
}
function Cn(r) {
  return isFinite(r);
}
function SM(r, t, e) {
  var n = t.x == null ? 0 : t.x, i = t.x2 == null ? 1 : t.x2, a = t.y == null ? 0 : t.y, o = t.y2 == null ? 0 : t.y2;
  t.global || (n = n * e.width + e.x, i = i * e.width + e.x, a = a * e.height + e.y, o = o * e.height + e.y), n = Cn(n) ? n : 0, i = Cn(i) ? i : 1, a = Cn(a) ? a : 0, o = Cn(o) ? o : 0;
  var s = r.createLinearGradient(n, a, i, o);
  return s;
}
function bM(r, t, e) {
  var n = e.width, i = e.height, a = Math.min(n, i), o = t.x == null ? 0.5 : t.x, s = t.y == null ? 0.5 : t.y, l = t.r == null ? 0.5 : t.r;
  t.global || (o = o * n + e.x, s = s * i + e.y, l = l * a), o = Cn(o) ? o : 0.5, s = Cn(s) ? s : 0.5, l = l >= 0 && Cn(l) ? l : 0.5;
  var u = r.createRadialGradient(o, s, 0, o, s, l);
  return u;
}
function fh(r, t, e) {
  for (var n = t.type === "radial" ? bM(r, t, e) : SM(r, t, e), i = t.colorStops, a = 0; a < i.length; a++)
    n.addColorStop(i[a].offset, i[a].color);
  return n;
}
function wM(r, t) {
  if (r === t || !r && !t)
    return !1;
  if (!r || !t || r.length !== t.length)
    return !0;
  for (var e = 0; e < r.length; e++)
    if (r[e] !== t[e])
      return !0;
  return !1;
}
function Uo(r) {
  return parseInt(r, 10);
}
function Yo(r, t, e) {
  var n = ["width", "height"][t], i = ["clientWidth", "clientHeight"][t], a = ["paddingLeft", "paddingTop"][t], o = ["paddingRight", "paddingBottom"][t];
  if (e[n] != null && e[n] !== "auto")
    return parseFloat(e[n]);
  var s = document.defaultView.getComputedStyle(r);
  return (r[i] || Uo(s[n]) || Uo(r.style[n])) - (Uo(s[a]) || 0) - (Uo(s[o]) || 0) | 0;
}
function xM(r, t) {
  return !r || r === "solid" || !(t > 0) ? null : r === "dashed" ? [4 * t, 2 * t] : r === "dotted" ? [t] : dt(r) ? [r] : H(r) ? r : null;
}
function U0(r) {
  var t = r.style, e = t.lineDash && t.lineWidth > 0 && xM(t.lineDash, t.lineWidth), n = t.lineDashOffset;
  if (e) {
    var i = t.strokeNoScale && r.getLineScale ? r.getLineScale() : 1;
    i && i !== 1 && (e = Y(e, function(a) {
      return a / i;
    }), n /= i);
  }
  return [e, n];
}
var TM = new kn(!0);
function js(r) {
  var t = r.stroke;
  return !(t == null || t === "none" || !(r.lineWidth > 0));
}
function Sd(r) {
  return typeof r == "string" && r !== "none";
}
function Ks(r) {
  var t = r.fill;
  return t != null && t !== "none";
}
function bd(r, t) {
  if (t.fillOpacity != null && t.fillOpacity !== 1) {
    var e = r.globalAlpha;
    r.globalAlpha = t.fillOpacity * t.opacity, r.fill(), r.globalAlpha = e;
  } else
    r.fill();
}
function wd(r, t) {
  if (t.strokeOpacity != null && t.strokeOpacity !== 1) {
    var e = r.globalAlpha;
    r.globalAlpha = t.strokeOpacity * t.opacity, r.stroke(), r.globalAlpha = e;
  } else
    r.stroke();
}
function hh(r, t, e) {
  var n = hm(t.image, t.__image, e);
  if (cl(n)) {
    var i = r.createPattern(n, t.repeat || "repeat");
    if (typeof DOMMatrix == "function" && i && i.setTransform) {
      var a = new DOMMatrix();
      a.translateSelf(t.x || 0, t.y || 0), a.rotateSelf(0, 0, (t.rotation || 0) * Ey), a.scaleSelf(t.scaleX || 1, t.scaleY || 1), i.setTransform(a);
    }
    return i;
  }
}
function CM(r, t, e, n) {
  var i, a = js(e), o = Ks(e), s = e.strokePercent, l = s < 1, u = !t.path;
  (!t.silent || l) && u && t.createPathProxy();
  var f = t.path || TM, h = t.__dirty;
  if (!n) {
    var v = e.fill, c = e.stroke, p = o && !!v.colorStops, d = a && !!c.colorStops, g = o && !!v.image, y = a && !!c.image, m = void 0, _ = void 0, S = void 0, w = void 0, b = void 0;
    (p || d) && (b = t.getBoundingRect()), p && (m = h ? fh(r, v, b) : t.__canvasFillGradient, t.__canvasFillGradient = m), d && (_ = h ? fh(r, c, b) : t.__canvasStrokeGradient, t.__canvasStrokeGradient = _), g && (S = h || !t.__canvasFillPattern ? hh(r, v, t) : t.__canvasFillPattern, t.__canvasFillPattern = S), y && (w = h || !t.__canvasStrokePattern ? hh(r, c, t) : t.__canvasStrokePattern, t.__canvasStrokePattern = S), p ? r.fillStyle = m : g && (S ? r.fillStyle = S : o = !1), d ? r.strokeStyle = _ : y && (w ? r.strokeStyle = w : a = !1);
  }
  var x = t.getGlobalScale();
  f.setScale(x[0], x[1], t.segmentIgnoreThreshold);
  var T, A;
  r.setLineDash && e.lineDash && (i = U0(t), T = i[0], A = i[1]);
  var M = !0;
  (u || h & ui) && (f.setDPR(r.dpr), l ? f.setContext(null) : (f.setContext(r), M = !1), f.reset(), t.buildPath(f, t.shape, n), f.toStatic(), t.pathUpdated()), M && f.rebuildPath(r, l ? s : 1), T && (r.setLineDash(T), r.lineDashOffset = A), n || (e.strokeFirst ? (a && wd(r, e), o && bd(r, e)) : (o && bd(r, e), a && wd(r, e))), T && r.setLineDash([]);
}
function DM(r, t, e) {
  var n = t.__image = hm(e.image, t.__image, t, t.onload);
  if (!(!n || !cl(n))) {
    var i = e.x || 0, a = e.y || 0, o = t.getWidth(), s = t.getHeight(), l = n.width / n.height;
    if (o == null && s != null ? o = s * l : s == null && o != null ? s = o / l : o == null && s == null && (o = n.width, s = n.height), e.sWidth && e.sHeight) {
      var u = e.sx || 0, f = e.sy || 0;
      r.drawImage(n, u, f, e.sWidth, e.sHeight, i, a, o, s);
    } else if (e.sx && e.sy) {
      var u = e.sx, f = e.sy, h = o - u, v = s - f;
      r.drawImage(n, u, f, h, v, i, a, o, s);
    } else
      r.drawImage(n, i, a, o, s);
  }
}
function MM(r, t, e) {
  var n, i = e.text;
  if (i != null && (i += ""), i) {
    r.font = e.font || On, r.textAlign = e.textAlign, r.textBaseline = e.textBaseline;
    var a = void 0, o = void 0;
    r.setLineDash && e.lineDash && (n = U0(t), a = n[0], o = n[1]), a && (r.setLineDash(a), r.lineDashOffset = o), e.strokeFirst ? (js(e) && r.strokeText(i, e.x, e.y), Ks(e) && r.fillText(i, e.x, e.y)) : (Ks(e) && r.fillText(i, e.x, e.y), js(e) && r.strokeText(i, e.x, e.y)), a && r.setLineDash([]);
  }
}
var xd = ["shadowBlur", "shadowOffsetX", "shadowOffsetY"], Td = [
  ["lineCap", "butt"],
  ["lineJoin", "miter"],
  ["miterLimit", 10]
];
function Y0(r, t, e, n, i) {
  var a = !1;
  if (!n && (e = e || {}, t === e))
    return !1;
  if (n || t.opacity !== e.opacity) {
    le(r, i), a = !0;
    var o = Math.max(Math.min(t.opacity, 1), 0);
    r.globalAlpha = isNaN(o) ? En.opacity : o;
  }
  (n || t.blend !== e.blend) && (a || (le(r, i), a = !0), r.globalCompositeOperation = t.blend || En.blend);
  for (var s = 0; s < xd.length; s++) {
    var l = xd[s];
    (n || t[l] !== e[l]) && (a || (le(r, i), a = !0), r[l] = r.dpr * (t[l] || 0));
  }
  return (n || t.shadowColor !== e.shadowColor) && (a || (le(r, i), a = !0), r.shadowColor = t.shadowColor || En.shadowColor), a;
}
function Cd(r, t, e, n, i) {
  var a = Ja(t, i.inHover), o = n ? null : e && Ja(e, i.inHover) || {};
  if (a === o)
    return !1;
  var s = Y0(r, a, o, n, i);
  if ((n || a.fill !== o.fill) && (s || (le(r, i), s = !0), Sd(a.fill) && (r.fillStyle = a.fill)), (n || a.stroke !== o.stroke) && (s || (le(r, i), s = !0), Sd(a.stroke) && (r.strokeStyle = a.stroke)), (n || a.opacity !== o.opacity) && (s || (le(r, i), s = !0), r.globalAlpha = a.opacity == null ? 1 : a.opacity), t.hasStroke()) {
    var l = a.lineWidth, u = l / (a.strokeNoScale && t.getLineScale ? t.getLineScale() : 1);
    r.lineWidth !== u && (s || (le(r, i), s = !0), r.lineWidth = u);
  }
  for (var f = 0; f < Td.length; f++) {
    var h = Td[f], v = h[0];
    (n || a[v] !== o[v]) && (s || (le(r, i), s = !0), r[v] = a[v] || h[1]);
  }
  return s;
}
function AM(r, t, e, n, i) {
  return Y0(r, Ja(t, i.inHover), e && Ja(e, i.inHover), n, i);
}
function X0(r, t) {
  var e = t.transform, n = r.dpr || 1;
  e ? r.setTransform(n * e[0], n * e[1], n * e[2], n * e[3], n * e[4], n * e[5]) : r.setTransform(n, 0, 0, n, 0, 0);
}
function EM(r, t, e) {
  for (var n = !1, i = 0; i < r.length; i++) {
    var a = r[i];
    n = n || a.isZeroArea(), X0(t, a), t.beginPath(), a.buildPath(t, a.shape), t.clip();
  }
  e.allClipped = n;
}
function IM(r, t) {
  return r && t ? r[0] !== t[0] || r[1] !== t[1] || r[2] !== t[2] || r[3] !== t[3] || r[4] !== t[4] || r[5] !== t[5] : !(!r && !t);
}
var Dd = 1, Md = 2, Ad = 3, Ed = 4;
function LM(r) {
  var t = Ks(r), e = js(r);
  return !(r.lineDash || !(+t ^ +e) || t && typeof r.fill != "string" || e && typeof r.stroke != "string" || r.strokePercent < 1 || r.strokeOpacity < 1 || r.fillOpacity < 1);
}
function le(r, t) {
  t.batchFill && r.fill(), t.batchStroke && r.stroke(), t.batchFill = "", t.batchStroke = "";
}
function Ja(r, t) {
  return t && r.__hoverStyle || r.style;
}
function Ec(r, t) {
  Dn(r, t, { inHover: !1, viewWidth: 0, viewHeight: 0 }, !0);
}
function Dn(r, t, e, n) {
  var i = t.transform;
  if (!t.shouldBePainted(e.viewWidth, e.viewHeight, !1, !1)) {
    t.__dirty &= ~ve, t.__isRendered = !1;
    return;
  }
  var a = t.__clipPaths, o = e.prevElClipPaths, s = !1, l = !1;
  if ((!o || wM(a, o)) && (o && o.length && (le(r, e), r.restore(), l = s = !0, e.prevElClipPaths = null, e.allClipped = !1, e.prevEl = null), a && a.length && (le(r, e), r.save(), EM(a, r, e), s = !0), e.prevElClipPaths = a), e.allClipped) {
    t.__isRendered = !1;
    return;
  }
  t.beforeBrush && t.beforeBrush(), t.innerBeforeBrush();
  var u = e.prevEl;
  u || (l = s = !0);
  var f = t instanceof pt && t.autoBatch && LM(t.style);
  s || IM(i, u.transform) ? (le(r, e), X0(r, t)) : f || le(r, e);
  var h = Ja(t, e.inHover);
  t instanceof pt ? (e.lastDrawType !== Dd && (l = !0, e.lastDrawType = Dd), Cd(r, t, u, l, e), (!f || !e.batchFill && !e.batchStroke) && r.beginPath(), CM(r, t, h, f), f && (e.batchFill = h.fill || "", e.batchStroke = h.stroke || "")) : t instanceof Vs ? (e.lastDrawType !== Ad && (l = !0, e.lastDrawType = Ad), Cd(r, t, u, l, e), MM(r, t, h)) : t instanceof Ye ? (e.lastDrawType !== Md && (l = !0, e.lastDrawType = Md), AM(r, t, u, l, e), DM(r, t, h)) : t.getTemporalDisplayables && (e.lastDrawType !== Ed && (l = !0, e.lastDrawType = Ed), PM(r, t, e)), f && n && le(r, e), t.innerAfterBrush(), t.afterBrush && t.afterBrush(), e.prevEl = t, t.__dirty = 0, t.__isRendered = !0;
}
function PM(r, t, e) {
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
    var l = n[o];
    l.beforeBrush && l.beforeBrush(), l.innerBeforeBrush(), Dn(r, l, a, o === s - 1), l.innerAfterBrush(), l.afterBrush && l.afterBrush(), a.prevEl = l;
  }
  for (var u = 0, f = i.length; u < f; u++) {
    var l = i[u];
    l.beforeBrush && l.beforeBrush(), l.innerBeforeBrush(), Dn(r, l, a, u === f - 1), l.innerAfterBrush(), l.afterBrush && l.afterBrush(), a.prevEl = l;
  }
  t.clearTemporalDisplayables(), t.notClear = !0, r.restore();
}
var Uu = new fM(), Id = new so(100), Ld = ["symbol", "symbolSize", "symbolKeepAspect", "color", "backgroundColor", "dashArrayX", "dashArrayY", "maxTileWidth", "maxTileHeight"];
function ch(r, t) {
  if (r === "none")
    return null;
  var e = t.getDevicePixelRatio(), n = t.getZr(), i = n.painter.type === "svg";
  r.dirty && Uu.delete(r);
  var a = Uu.get(r);
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
  return l(s), s.rotation = o.rotation, s.scaleX = s.scaleY = i ? 1 : 1 / e, Uu.set(r, s), r.dirty = !1, s;
  function l(u) {
    for (var f = [e], h = !0, v = 0; v < Ld.length; ++v) {
      var c = o[Ld[v]];
      if (c != null && !H(c) && !U(c) && !dt(c) && typeof c != "boolean") {
        h = !1;
        break;
      }
      f.push(c);
    }
    var p;
    if (h) {
      p = f.join(",") + (i ? "-svg" : "");
      var d = Id.get(p);
      d && (i ? u.svgElement = d : u.image = d);
    }
    var g = q0(o.dashArrayX), y = OM(o.dashArrayY), m = $0(o.symbol), _ = RM(g), S = Z0(y), w = !i && Ge.createCanvas(), b = i && {
      tag: "g",
      attrs: {},
      key: "dcl",
      children: []
    }, x = A(), T;
    w && (w.width = x.width * e, w.height = x.height * e, T = w.getContext("2d")), M(), h && Id.put(p, w || b), u.image = w, u.svgElement = b, u.svgWidth = x.width, u.svgHeight = x.height;
    function A() {
      for (var C = 1, E = 0, I = _.length; E < I; ++E)
        C = Gv(C, _[E]);
      for (var P = 1, E = 0, I = m.length; E < I; ++E)
        P = Gv(P, m[E].length);
      C *= P;
      var O = S * _.length * m.length;
      if (process.env.NODE_ENV !== "production") {
        var R = function(F) {
          console.warn("Calculated decal size is greater than " + F + " due to decal option settings so " + F + " is used for the decal size. Please consider changing the decal option to make a smaller decal or set " + F + " to be larger to avoid incontinuity.");
        };
        C > o.maxTileWidth && R("maxTileWidth"), O > o.maxTileHeight && R("maxTileHeight");
      }
      return {
        width: Math.max(1, Math.min(C, o.maxTileWidth)),
        height: Math.max(1, Math.min(O, o.maxTileHeight))
      };
    }
    function M() {
      T && (T.clearRect(0, 0, w.width, w.height), o.backgroundColor && (T.fillStyle = o.backgroundColor, T.fillRect(0, 0, w.width, w.height)));
      for (var C = 0, E = 0; E < y.length; ++E)
        C += y[E];
      if (C <= 0)
        return;
      for (var I = -S, P = 0, O = 0, R = 0; I < x.height; ) {
        if (P % 2 === 0) {
          for (var F = O / 2 % m.length, N = 0, V = 0, L = 0; N < x.width * 2; ) {
            for (var k = 0, E = 0; E < g[R].length; ++E)
              k += g[R][E];
            if (k <= 0)
              break;
            if (V % 2 === 0) {
              var G = (1 - o.symbolSize) * 0.5, X = N + g[R][V] * G, rt = I + y[P] * G, nt = g[R][V] * o.symbolSize, It = y[P] * o.symbolSize, Ht = L / 2 % m[F].length;
              ft(X, rt, nt, It, m[F][Ht]);
            }
            N += g[R][V], ++L, ++V, V === g[R].length && (V = 0);
          }
          ++R, R === g.length && (R = 0);
        }
        I += y[P], ++O, ++P, P === y.length && (P = 0);
      }
      function ft(bt, yt, q, it, $e) {
        var Lt = i ? 1 : e, Dr = Ue($e, bt * Lt, yt * Lt, q * Lt, it * Lt, o.color, o.symbolKeepAspect);
        if (i) {
          var ur = n.painter.renderOneToVNode(Dr);
          ur && b.children.push(ur);
        } else
          Ec(T, Dr);
      }
    }
  }
}
function $0(r) {
  if (!r || r.length === 0)
    return [["rect"]];
  if (U(r))
    return [[r]];
  for (var t = !0, e = 0; e < r.length; ++e)
    if (!U(r[e])) {
      t = !1;
      break;
    }
  if (t)
    return $0([r]);
  for (var n = [], e = 0; e < r.length; ++e)
    U(r[e]) ? n.push([r[e]]) : n.push(r[e]);
  return n;
}
function q0(r) {
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
    return q0([r]);
  for (var i = [], n = 0; n < r.length; ++n)
    if (dt(r[n])) {
      var t = Math.ceil(r[n]);
      i.push([t, t]);
    } else {
      var t = Y(r[n], function(s) {
        return Math.ceil(s);
      });
      t.length % 2 === 1 ? i.push(t.concat(t)) : i.push(t);
    }
  return i;
}
function OM(r) {
  if (!r || typeof r == "object" && r.length === 0)
    return [0, 0];
  if (dt(r)) {
    var t = Math.ceil(r);
    return [t, t];
  }
  var e = Y(r, function(n) {
    return Math.ceil(n);
  });
  return r.length % 2 ? e.concat(e) : e;
}
function RM(r) {
  return Y(r, function(t) {
    return Z0(t);
  });
}
function Z0(r) {
  for (var t = 0, e = 0; e < r.length; ++e)
    t += r[e];
  return r.length % 2 === 1 ? t * 2 : t;
}
function NM(r, t) {
  r.eachRawSeries(function(e) {
    if (!r.isSeriesFiltered(e)) {
      var n = e.getData();
      n.hasItemVisual() && n.each(function(o) {
        var s = n.getItemVisual(o, "decal");
        if (s) {
          var l = n.ensureUniqueItemVisual(o, "style");
          l.decal = ch(s, t);
        }
      });
      var i = n.getVisual("decal");
      if (i) {
        var a = n.getVisual("style");
        a.decal = ch(i, t);
      }
    }
  });
}
var ke = new or(), Qs = {};
function kM(r, t) {
  process.env.NODE_ENV !== "production" && Qs[r] && Zt("Already has an implementation of " + r + "."), Qs[r] = t;
}
function j0(r) {
  return process.env.NODE_ENV !== "production" && (Qs[r] || Zt("Implementation of " + r + " doesn't exists.")), Qs[r];
}
var VM = "5.6.0", BM = {
  zrender: "5.6.1"
}, zM = 1, FM = 800, HM = 900, GM = 1e3, WM = 2e3, UM = 5e3, K0 = 1e3, YM = 1100, Ic = 2e3, Q0 = 3e3, XM = 4e3, Vl = 4500, $M = 4600, qM = 5e3, ZM = 6e3, J0 = 7e3, t_ = {
  PROCESSOR: {
    FILTER: GM,
    SERIES_FILTER: FM,
    STATISTIC: UM
  },
  VISUAL: {
    LAYOUT: K0,
    PROGRESSIVE_LAYOUT: YM,
    GLOBAL: Ic,
    CHART: Q0,
    POST_CHART_LAYOUT: $M,
    COMPONENT: XM,
    BRUSH: qM,
    CHART_ITEM: Vl,
    ARIA: ZM,
    DECAL: J0
  }
}, Wt = "__flagInMainProcess", ae = "__pendingUpdate", Yu = "__needsUpdateStatus", Pd = /^[a-zA-Z0-9_]+$/, Xu = "__connectUpdateStatus", Od = 0, jM = 1, KM = 2;
function e_(r) {
  return function() {
    for (var t = [], e = 0; e < arguments.length; e++)
      t[e] = arguments[e];
    if (this.isDisposed()) {
      ce(this.id);
      return;
    }
    return n_(this, r, t);
  };
}
function r_(r) {
  return function() {
    for (var t = [], e = 0; e < arguments.length; e++)
      t[e] = arguments[e];
    return n_(this, r, t);
  };
}
function n_(r, t, e) {
  return e[0] = e[0] && e[0].toLowerCase(), or.prototype[t].apply(r, e);
}
var i_ = (
  /** @class */
  (function(r) {
    z(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t;
  })(or)
), a_ = i_.prototype;
a_.on = r_("on");
a_.off = r_("off");
var ni, $u, Xo, Ir, qu, Zu, ju, oa, sa, Rd, Nd, Ku, kd, $o, Vd, o_, me, Bd, Js = (
  /** @class */
  (function(r) {
    z(t, r);
    function t(e, n, i) {
      var a = r.call(this, new rM()) || this;
      a._chartsViews = [], a._chartsMap = {}, a._componentsViews = [], a._componentsMap = {}, a._pendingActions = [], i = i || {}, U(n) && (n = s_[n]), a._dom = e;
      var o = "canvas", s = "auto", l = !1;
      if (process.env.NODE_ENV !== "production") {
        var u = (
          /* eslint-disable-next-line */
          Z.hasGlobalWindow ? window : global
        );
        u && (o = Q(u.__ECHARTS__DEFAULT__RENDERER__, o), s = Q(u.__ECHARTS__DEFAULT__COARSE_POINTER, s), l = Q(u.__ECHARTS__DEFAULT__USE_DIRTY_RECT__, l));
      }
      i.ssr && Jy(function(c) {
        var p = at(c), d = p.dataIndex;
        if (d != null) {
          var g = et();
          return g.set("series_index", p.seriesIndex), g.set("data_index", d), p.ssrType && g.set("ssr_type", p.ssrType), g;
        }
      });
      var f = a._zr = Wf(e, {
        renderer: i.renderer || o,
        devicePixelRatio: i.devicePixelRatio,
        width: i.width,
        height: i.height,
        ssr: i.ssr,
        useDirtyRect: Q(i.useDirtyRect, l),
        useCoarsePointer: Q(i.useCoarsePointer, s),
        pointerSize: i.pointerSize
      });
      a._ssr = i.ssr, a._throttledZrFlush = kl(J(f.flush, f), 17), n = j(n), n && d0(n, !0), a._theme = n, a._locale = aC(i.locale || Km), a._coordSysMgr = new yo();
      var h = a._api = Vd(a);
      function v(c, p) {
        return c.__prio - p.__prio;
      }
      return us(el, v), us(vh, v), a._scheduler = new k0(a, h, vh, el), a._messageCenter = new i_(), a._initEvents(), a.resize = J(a.resize, a), f.animation.on("frame", a._onframe, a), Rd(f, a), Nd(f, a), xs(a), a;
    }
    return t.prototype._onframe = function() {
      if (!this._disposed) {
        Bd(this);
        var e = this._scheduler;
        if (this[ae]) {
          var n = this[ae].silent;
          this[Wt] = !0;
          try {
            ni(this), Ir.update.call(this, null, this[ae].updateParams);
          } catch (l) {
            throw this[Wt] = !1, this[ae] = null, l;
          }
          this._zr.flush(), this[Wt] = !1, this[ae] = null, oa.call(this, n), sa.call(this, n);
        } else if (e.unfinished) {
          var i = zM, a = this._model, o = this._api;
          e.unfinished = !1;
          do {
            var s = +/* @__PURE__ */ new Date();
            e.performSeriesTasks(a), e.performDataProcessorTasks(a), Zu(this, a), e.performVisualTasks(a), $o(this, this._model, o, "remain", {}), i -= +/* @__PURE__ */ new Date() - s;
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
      if (this[Wt]) {
        process.env.NODE_ENV !== "production" && Zt("`setOption` should not be called during main process.");
        return;
      }
      if (this._disposed) {
        ce(this.id);
        return;
      }
      var a, o, s;
      if (W(n) && (i = n.lazyUpdate, a = n.silent, o = n.replaceMerge, s = n.transition, n = n.notMerge), this[Wt] = !0, !this._model || n) {
        var l = new kC(this._api), u = this._theme, f = this._model = new Tc();
        f.scheduler = this._scheduler, f.ssr = this._ssr, f.init(null, null, null, u, this._locale, l);
      }
      this._model.setOption(e, {
        replaceMerge: o
      }, ph);
      var h = {
        seriesTransition: s,
        optionChanged: !0
      };
      if (i)
        this[ae] = {
          silent: a,
          updateParams: h
        }, this[Wt] = !1, this.getZr().wakeUp();
      else {
        try {
          ni(this), Ir.update.call(this, null, h);
        } catch (v) {
          throw this[ae] = null, this[Wt] = !1, v;
        }
        this._ssr || this._zr.flush(), this[ae] = null, this[Wt] = !1, oa.call(this, a), sa.call(this, a);
      }
    }, t.prototype.setTheme = function() {
      We("ECharts#setTheme() is DEPRECATED in ECharts 3.0");
    }, t.prototype.getModel = function() {
      return this._model;
    }, t.prototype.getOption = function() {
      return this._model && this._model.getOption();
    }, t.prototype.getWidth = function() {
      return this._zr.getWidth();
    }, t.prototype.getHeight = function() {
      return this._zr.getHeight();
    }, t.prototype.getDevicePixelRatio = function() {
      return this._zr.painter.dpr || Z.hasGlobalWindow && window.devicePixelRatio || 1;
    }, t.prototype.getRenderedCanvas = function(e) {
      return process.env.NODE_ENV !== "production" && Et("getRenderedCanvas", "renderToCanvas"), this.renderToCanvas(e);
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
      if (Z.svgSupported) {
        var e = this._zr, n = e.storage.getDisplayList();
        return D(n, function(i) {
          i.stopAnimation(null, !0);
        }), e.painter.toDataURL();
      }
    }, t.prototype.getDataURL = function(e) {
      if (this._disposed) {
        ce(this.id);
        return;
      }
      e = e || {};
      var n = e.excludeComponents, i = this._model, a = [], o = this;
      D(n, function(l) {
        i.eachComponent({
          mainType: l
        }, function(u) {
          var f = o._componentsMap[u.__viewId];
          f.group.ignore || (a.push(f), f.group.ignore = !0);
        });
      });
      var s = this._zr.painter.getType() === "svg" ? this.getSvgDataURL() : this.renderToCanvas(e).toDataURL("image/" + (e && e.type || "png"));
      return D(a, function(l) {
        l.group.ignore = !1;
      }), s;
    }, t.prototype.getConnectedDataURL = function(e) {
      if (this._disposed) {
        ce(this.id);
        return;
      }
      var n = e.type === "svg", i = this.group, a = Math.min, o = Math.max, s = 1 / 0;
      if (rl[i]) {
        var l = s, u = s, f = -s, h = -s, v = [], c = e && e.pixelRatio || this.getDevicePixelRatio();
        D(Ln, function(_, S) {
          if (_.group === i) {
            var w = n ? _.getZr().painter.getSvgDom().innerHTML : _.renderToCanvas(j(e)), b = _.getDom().getBoundingClientRect();
            l = a(b.left, l), u = a(b.top, u), f = o(b.right, f), h = o(b.bottom, h), v.push({
              dom: w,
              left: b.left,
              top: b.top
            });
          }
        }), l *= c, u *= c, f *= c, h *= c;
        var p = f - l, d = h - u, g = Ge.createCanvas(), y = Wf(g, {
          renderer: n ? "svg" : "canvas"
        });
        if (y.resize({
          width: p,
          height: d
        }), n) {
          var m = "";
          return D(v, function(_) {
            var S = _.left - l, w = _.top - u;
            m += '<g transform="translate(' + S + "," + w + ')">' + _.dom + "</g>";
          }), y.painter.getSvgRoot().innerHTML = m, e.connectedBackgroundColor && y.painter.setBackgroundColor(e.connectedBackgroundColor), y.refreshImmediately(), y.painter.toDataURL();
        } else
          return e.connectedBackgroundColor && y.add(new _t({
            shape: {
              x: 0,
              y: 0,
              width: p,
              height: d
            },
            style: {
              fill: e.connectedBackgroundColor
            }
          })), D(v, function(_) {
            var S = new Ye({
              style: {
                x: _.left * c - l,
                y: _.top * c - u,
                image: _.dom
              }
            });
            y.add(S);
          }), y.refreshImmediately(), g.toDataURL("image/" + (e && e.type || "png"));
      } else
        return this.getDataURL(e);
    }, t.prototype.convertToPixel = function(e, n) {
      return qu(this, "convertToPixel", e, n);
    }, t.prototype.convertFromPixel = function(e, n) {
      return qu(this, "convertFromPixel", e, n);
    }, t.prototype.containPixel = function(e, n) {
      if (this._disposed) {
        ce(this.id);
        return;
      }
      var i = this._model, a, o = gu(i, e);
      return D(o, function(s, l) {
        l.indexOf("Models") >= 0 && D(s, function(u) {
          var f = u.coordinateSystem;
          if (f && f.containPoint)
            a = a || !!f.containPoint(n);
          else if (l === "seriesModels") {
            var h = this._chartsMap[u.__viewId];
            h && h.containPoint ? a = a || h.containPoint(n, u) : process.env.NODE_ENV !== "production" && Vt(l + ": " + (h ? "The found component do not support containPoint." : "No view mapping to the found component."));
          } else
            process.env.NODE_ENV !== "production" && Vt(l + ": containPoint is not supported");
        }, this);
      }, this), !!a;
    }, t.prototype.getVisual = function(e, n) {
      var i = this._model, a = gu(i, e, {
        defaultMainType: "series"
      }), o = a.seriesModel;
      process.env.NODE_ENV !== "production" && (o || Vt("There is no specified series model"));
      var s = o.getData(), l = a.hasOwnProperty("dataIndexInside") ? a.dataIndexInside : a.hasOwnProperty("dataIndex") ? s.indexOfRawIndex(a.dataIndex) : null;
      return l != null ? H0(s, l, n) : G0(s, n);
    }, t.prototype.getViewOfComponentModel = function(e) {
      return this._componentsMap[e.__viewId];
    }, t.prototype.getViewOfSeriesModel = function(e) {
      return this._chartsMap[e.__viewId];
    }, t.prototype._initEvents = function() {
      var e = this;
      D(QM, function(n) {
        var i = function(a) {
          var o = e.getModel(), s = a.target, l, u = n === "globalout";
          if (u ? l = {} : s && vi(s, function(p) {
            var d = at(p);
            if (d && d.dataIndex != null) {
              var g = d.dataModel || o.getSeriesByIndex(d.seriesIndex);
              return l = g && g.getDataParams(d.dataIndex, d.dataType, s) || {}, !0;
            } else if (d.eventData)
              return l = B({}, d.eventData), !0;
          }, !0), l) {
            var f = l.componentType, h = l.componentIndex;
            (f === "markLine" || f === "markPoint" || f === "markArea") && (f = "series", h = l.seriesIndex);
            var v = f && h != null && o.getComponent(f, h), c = v && e[v.mainType === "series" ? "_chartsMap" : "_componentsMap"][v.__viewId];
            process.env.NODE_ENV !== "production" && !u && !(v && c) && Vt("model or view can not be found by params"), l.event = a, l.type = n, e._$eventProcessor.eventInfo = {
              targetEl: s,
              packedEvent: l,
              model: v,
              view: c
            }, e.trigger(n, l);
          }
        };
        i.zrEventfulCallAtLast = !0, e._zr.on(n, i, e);
      }), D(Ra, function(n, i) {
        e._messageCenter.on(i, function(a) {
          this.trigger(i, a);
        }, e);
      }), D(["selectchanged"], function(n) {
        e._messageCenter.on(n, function(i) {
          this.trigger(n, i);
        }, e);
      }), sM(this._messageCenter, this, this._api);
    }, t.prototype.isDisposed = function() {
      return this._disposed;
    }, t.prototype.clear = function() {
      if (this._disposed) {
        ce(this.id);
        return;
      }
      this.setOption({
        series: []
      }, !0);
    }, t.prototype.dispose = function() {
      if (this._disposed) {
        ce(this.id);
        return;
      }
      this._disposed = !0;
      var e = this.getDom();
      e && lm(this.getDom(), Pc, "");
      var n = this, i = n._api, a = n._model;
      D(n._componentsViews, function(o) {
        o.dispose(a, i);
      }), D(n._chartsViews, function(o) {
        o.dispose(a, i);
      }), n._zr.dispose(), n._dom = n._model = n._chartsMap = n._componentsMap = n._chartsViews = n._componentsViews = n._scheduler = n._api = n._zr = n._throttledZrFlush = n._theme = n._coordSysMgr = n._messageCenter = null, delete Ln[n.id];
    }, t.prototype.resize = function(e) {
      if (this[Wt]) {
        process.env.NODE_ENV !== "production" && Zt("`resize` should not be called during main process.");
        return;
      }
      if (this._disposed) {
        ce(this.id);
        return;
      }
      this._zr.resize(e);
      var n = this._model;
      if (this._loadingFX && this._loadingFX.resize(), !!n) {
        var i = n.resetOption("media"), a = e && e.silent;
        this[ae] && (a == null && (a = this[ae].silent), i = !0, this[ae] = null), this[Wt] = !0;
        try {
          i && ni(this), Ir.update.call(this, {
            type: "resize",
            animation: B({
              // Disable animation
              duration: 0
            }, e && e.animation)
          });
        } catch (o) {
          throw this[Wt] = !1, o;
        }
        this[Wt] = !1, oa.call(this, a), sa.call(this, a);
      }
    }, t.prototype.showLoading = function(e, n) {
      if (this._disposed) {
        ce(this.id);
        return;
      }
      if (W(e) && (n = e, e = ""), e = e || "default", this.hideLoading(), !dh[e]) {
        process.env.NODE_ENV !== "production" && Vt("Loading effects " + e + " not exists.");
        return;
      }
      var i = dh[e](this._api, n), a = this._zr;
      this._loadingFX = i, a.add(i);
    }, t.prototype.hideLoading = function() {
      if (this._disposed) {
        ce(this.id);
        return;
      }
      this._loadingFX && this._zr.remove(this._loadingFX), this._loadingFX = null;
    }, t.prototype.makeActionFromEvent = function(e) {
      var n = B({}, e);
      return n.type = Ra[e.type], n;
    }, t.prototype.dispatchAction = function(e, n) {
      if (this._disposed) {
        ce(this.id);
        return;
      }
      if (W(n) || (n = {
        silent: !!n
      }), !!tl[e.type] && this._model) {
        if (this[Wt]) {
          this._pendingActions.push(e);
          return;
        }
        var i = n.silent;
        ju.call(this, e, i);
        var a = n.flush;
        a ? this._zr.flush() : a !== !1 && Z.browser.weChat && this._throttledZrFlush(), oa.call(this, i), sa.call(this, i);
      }
    }, t.prototype.updateLabelLayout = function() {
      ke.trigger("series:layoutlabels", this._model, this._api, {
        // Not adding series labels.
        // TODO
        updatedSeries: []
      });
    }, t.prototype.appendData = function(e) {
      if (this._disposed) {
        ce(this.id);
        return;
      }
      var n = e.seriesIndex, i = this.getModel(), a = i.getSeriesByIndex(n);
      process.env.NODE_ENV !== "production" && tt(e.data && a), a.appendData(e), this._scheduler.unfinished = !0, this.getZr().wakeUp();
    }, t.internalField = (function() {
      ni = function(h) {
        var v = h._scheduler;
        v.restorePipelines(h._model), v.prepareStageTasks(), $u(h, !0), $u(h, !1), v.plan();
      }, $u = function(h, v) {
        for (var c = h._model, p = h._scheduler, d = v ? h._componentsViews : h._chartsViews, g = v ? h._componentsMap : h._chartsMap, y = h._zr, m = h._api, _ = 0; _ < d.length; _++)
          d[_].__alive = !1;
        v ? c.eachComponent(function(b, x) {
          b !== "series" && S(x);
        }) : c.eachSeries(S);
        function S(b) {
          var x = b.__requireNewView;
          b.__requireNewView = !1;
          var T = "_ec_" + b.id + "_" + b.type, A = !x && g[T];
          if (!A) {
            var M = rr(b.type), C = v ? ne.getClass(M.main, M.sub) : (
              // FIXME:TS
              // (ChartView as ChartViewConstructor).getClass('series', classType.sub)
              // For backward compat, still support a chart type declared as only subType
              // like "liquidfill", but recommend "series.liquidfill"
              // But need a base class to make a type series.
              Pt.getClass(M.sub)
            );
            process.env.NODE_ENV !== "production" && tt(C, M.sub + " does not exist."), A = new C(), A.init(c, m), g[T] = A, d.push(A), y.add(A.group);
          }
          b.__viewId = A.__id = T, A.__alive = !0, A.__model = b, A.group.__ecComponentInfo = {
            mainType: b.mainType,
            index: b.componentIndex
          }, !v && p.prepareView(A, b, c, m);
        }
        for (var _ = 0; _ < d.length; ) {
          var w = d[_];
          w.__alive ? _++ : (!v && w.renderTask.dispose(), y.remove(w.group), w.dispose(c, m), d.splice(_, 1), g[w.__id] === w && delete g[w.__id], w.__id = w.group.__ecComponentInfo = null);
        }
      }, Xo = function(h, v, c, p, d) {
        var g = h._model;
        if (g.setUpdatePayload(c), !p) {
          D([].concat(h._componentsViews).concat(h._chartsViews), w);
          return;
        }
        var y = {};
        y[p + "Id"] = c[p + "Id"], y[p + "Index"] = c[p + "Index"], y[p + "Name"] = c[p + "Name"];
        var m = {
          mainType: p,
          query: y
        };
        d && (m.subType = d);
        var _ = c.excludeSeriesId, S;
        _ != null && (S = et(), D(Bt(_), function(b) {
          var x = He(b, null);
          x != null && S.set(x, !0);
        })), g && g.eachComponent(m, function(b) {
          var x = S && S.get(b.id) != null;
          if (!x)
            if (mp(c))
              if (b instanceof zt)
                c.type === In && !c.notBlur && !b.get(["emphasis", "disabled"]) && Jx(b, c, h._api);
              else {
                var T = sc(b.mainType, b.componentIndex, c.name, h._api), A = T.focusSelf, M = T.dispatchers;
                c.type === In && A && !c.notBlur && jf(b.mainType, b.componentIndex, h._api), M && D(M, function(C) {
                  c.type === In ? zs(C) : Fs(C);
                });
              }
            else Kf(c) && b instanceof zt && (rT(b, c, h._api), gp(b), me(h));
        }, h), g && g.eachComponent(m, function(b) {
          var x = S && S.get(b.id) != null;
          x || w(h[p === "series" ? "_chartsMap" : "_componentsMap"][b.__viewId]);
        }, h);
        function w(b) {
          b && b.__alive && b[v] && b[v](b.__model, g, h._api, c);
        }
      }, Ir = {
        prepareAndUpdate: function(h) {
          ni(this), Ir.update.call(this, h, {
            // Needs to mark option changed if newOption is given.
            // It's from MagicType.
            // TODO If use a separate flag optionChanged in payload?
            optionChanged: h.newOption != null
          });
        },
        update: function(h, v) {
          var c = this._model, p = this._api, d = this._zr, g = this._coordSysMgr, y = this._scheduler;
          if (c) {
            c.setUpdatePayload(h), y.restoreData(c, h), y.performSeriesTasks(c), g.create(c, p), y.performDataProcessorTasks(c, h), Zu(this, c), g.update(c, p), e(c), y.performVisualTasks(c, h), Ku(this, c, p, h, v);
            var m = c.get("backgroundColor") || "transparent", _ = c.get("darkMode");
            d.setBackgroundColor(m), _ != null && _ !== "auto" && d.setDarkMode(_), ke.trigger("afterupdate", c, p);
          }
        },
        updateTransform: function(h) {
          var v = this, c = this._model, p = this._api;
          if (c) {
            c.setUpdatePayload(h);
            var d = [];
            c.eachComponent(function(y, m) {
              if (y !== "series") {
                var _ = v.getViewOfComponentModel(m);
                if (_ && _.__alive)
                  if (_.updateTransform) {
                    var S = _.updateTransform(m, c, p, h);
                    S && S.update && d.push(_);
                  } else
                    d.push(_);
              }
            });
            var g = et();
            c.eachSeries(function(y) {
              var m = v._chartsMap[y.__viewId];
              if (m.updateTransform) {
                var _ = m.updateTransform(y, c, p, h);
                _ && _.update && g.set(y.uid, 1);
              } else
                g.set(y.uid, 1);
            }), e(c), this._scheduler.performVisualTasks(c, h, {
              setDirty: !0,
              dirtyMap: g
            }), $o(this, c, p, h, {}, g), ke.trigger("afterupdate", c, p);
          }
        },
        updateView: function(h) {
          var v = this._model;
          v && (v.setUpdatePayload(h), Pt.markUpdateMethod(h, "updateView"), e(v), this._scheduler.performVisualTasks(v, h, {
            setDirty: !0
          }), Ku(this, v, this._api, h, {}), ke.trigger("afterupdate", v, this._api));
        },
        updateVisual: function(h) {
          var v = this, c = this._model;
          c && (c.setUpdatePayload(h), c.eachSeries(function(p) {
            p.getData().clearAllVisual();
          }), Pt.markUpdateMethod(h, "updateVisual"), e(c), this._scheduler.performVisualTasks(c, h, {
            visualType: "visual",
            setDirty: !0
          }), c.eachComponent(function(p, d) {
            if (p !== "series") {
              var g = v.getViewOfComponentModel(d);
              g && g.__alive && g.updateVisual(d, c, v._api, h);
            }
          }), c.eachSeries(function(p) {
            var d = v._chartsMap[p.__viewId];
            d.updateVisual(p, c, v._api, h);
          }), ke.trigger("afterupdate", c, this._api));
        },
        updateLayout: function(h) {
          Ir.update.call(this, h);
        }
      }, qu = function(h, v, c, p) {
        if (h._disposed) {
          ce(h.id);
          return;
        }
        for (var d = h._model, g = h._coordSysMgr.getCoordinateSystems(), y, m = gu(d, c), _ = 0; _ < g.length; _++) {
          var S = g[_];
          if (S[v] && (y = S[v](d, m, p)) != null)
            return y;
        }
        process.env.NODE_ENV !== "production" && Vt("No coordinate system that supports " + v + " found by the given finder.");
      }, Zu = function(h, v) {
        var c = h._chartsMap, p = h._scheduler;
        v.eachSeries(function(d) {
          p.updateStreamModes(d, c[d.__viewId]);
        });
      }, ju = function(h, v) {
        var c = this, p = this.getModel(), d = h.type, g = h.escapeConnect, y = tl[d], m = y.actionInfo, _ = (m.update || "update").split(":"), S = _.pop(), w = _[0] != null && rr(_[0]);
        this[Wt] = !0;
        var b = [h], x = !1;
        h.batch && (x = !0, b = Y(h.batch, function(P) {
          return P = ut(B({}, P), h), P.batch = null, P;
        }));
        var T = [], A, M = Kf(h), C = mp(h);
        if (C && Em(this._api), D(b, function(P) {
          if (A = y.action(P, c._model, c._api), A = A || B({}, P), A.type = m.event || A.type, T.push(A), C) {
            var O = rc(h), R = O.queryOptionMap, F = O.mainTypeSpecified, N = F ? R.keys()[0] : "series";
            Xo(c, S, P, N), me(c);
          } else M ? (Xo(c, S, P, "series"), me(c)) : w && Xo(c, S, P, w.main, w.sub);
        }), S !== "none" && !C && !M && !w)
          try {
            this[ae] ? (ni(this), Ir.update.call(this, h), this[ae] = null) : Ir[S].call(this, h);
          } catch (P) {
            throw this[Wt] = !1, P;
          }
        if (x ? A = {
          type: m.event || d,
          escapeConnect: g,
          batch: T
        } : A = T[0], this[Wt] = !1, !v) {
          var E = this._messageCenter;
          if (E.trigger(A.type, A), M) {
            var I = {
              type: "selectchanged",
              escapeConnect: g,
              selected: nT(p),
              isFromClick: h.isFromClick || !1,
              fromAction: h.type,
              fromActionPayload: h
            };
            E.trigger(I.type, I);
          }
        }
      }, oa = function(h) {
        for (var v = this._pendingActions; v.length; ) {
          var c = v.shift();
          ju.call(this, c, h);
        }
      }, sa = function(h) {
        !h && this.trigger("updated");
      }, Rd = function(h, v) {
        h.on("rendered", function(c) {
          v.trigger("rendered", c), // Although zr is dirty if initial animation is not finished
          // and this checking is called on frame, we also check
          // animation finished for robustness.
          h.animation.isFinished() && !v[ae] && !v._scheduler.unfinished && !v._pendingActions.length && v.trigger("finished");
        });
      }, Nd = function(h, v) {
        h.on("mouseover", function(c) {
          var p = c.target, d = vi(p, xi);
          d && (tT(d, c, v._api), me(v));
        }).on("mouseout", function(c) {
          var p = c.target, d = vi(p, xi);
          d && (eT(d, c, v._api), me(v));
        }).on("click", function(c) {
          var p = c.target, d = vi(p, function(m) {
            return at(m).dataIndex != null;
          }, !0);
          if (d) {
            var g = d.selected ? "unselect" : "select", y = at(d);
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
        var v = [], c = [], p = !1;
        if (h.eachComponent(function(m, _) {
          var S = _.get("zlevel") || 0, w = _.get("z") || 0, b = _.getZLevelKey();
          p = p || !!b, (m === "series" ? c : v).push({
            zlevel: S,
            z: w,
            idx: _.componentIndex,
            type: m,
            key: b
          });
        }), p) {
          var d = v.concat(c), g, y;
          us(d, function(m, _) {
            return m.zlevel === _.zlevel ? m.z - _.z : m.zlevel - _.zlevel;
          }), D(d, function(m) {
            var _ = h.getComponent(m.type, m.idx), S = m.zlevel, w = m.key;
            g != null && (S = Math.max(g, S)), w ? (S === g && w !== y && S++, y = w) : y && (S === g && S++, y = ""), g = S, _.setZLevel(S);
          });
        }
      }
      Ku = function(h, v, c, p, d) {
        n(v), kd(h, v, c, p, d), D(h._chartsViews, function(g) {
          g.__alive = !1;
        }), $o(h, v, c, p, d), D(h._chartsViews, function(g) {
          g.__alive || g.remove(v, c);
        });
      }, kd = function(h, v, c, p, d, g) {
        D(g || h._componentsViews, function(y) {
          var m = y.__model;
          u(m, y), y.render(m, v, c, p), s(m, y), f(m, y);
        });
      }, $o = function(h, v, c, p, d, g) {
        var y = h._scheduler;
        d = B(d || {}, {
          updatedSeries: v.getSeries()
        }), ke.trigger("series:beforeupdate", v, c, d);
        var m = !1;
        v.eachSeries(function(_) {
          var S = h._chartsMap[_.__viewId];
          S.__alive = !0;
          var w = S.renderTask;
          y.updatePayload(w, p), u(_, S), g && g.get(_.uid) && w.dirty(), w.perform(y.getPerformArgs(w)) && (m = !0), S.group.silent = !!_.get("silent"), o(_, S), gp(_);
        }), y.unfinished = m || y.unfinished, ke.trigger("series:layoutlabels", v, c, d), ke.trigger("series:transition", v, c, d), v.eachSeries(function(_) {
          var S = h._chartsMap[_.__viewId];
          s(_, S), f(_, S);
        }), a(h, v), ke.trigger("series:afterupdate", v, c, d);
      }, me = function(h) {
        h[Yu] = !0, h.getZr().wakeUp();
      }, Bd = function(h) {
        h[Yu] && (h.getZr().storage.traverse(function(v) {
          Ia(v) || i(v);
        }), h[Yu] = !1);
      };
      function i(h) {
        for (var v = [], c = h.currentStates, p = 0; p < c.length; p++) {
          var d = c[p];
          d === "emphasis" || d === "blur" || d === "select" || v.push(d);
        }
        h.selected && h.states.select && v.push("select"), h.hoverState === dl && h.states.emphasis ? v.push("emphasis") : h.hoverState === pl && h.states.blur && v.push("blur"), h.useStates(v);
      }
      function a(h, v) {
        var c = h._zr, p = c.storage, d = 0;
        p.traverse(function(g) {
          g.isGroup || d++;
        }), d > v.get("hoverLayerThreshold") && !Z.node && !Z.worker && v.eachSeries(function(g) {
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
        v.eachRendered(function(p) {
          p.isGroup || (p.style.blend = c);
        });
      }
      function s(h, v) {
        if (!h.preventAutoZ) {
          var c = h.get("z") || 0, p = h.get("zlevel") || 0;
          v.eachRendered(function(d) {
            return l(d, c, p, -1 / 0), !0;
          });
        }
      }
      function l(h, v, c, p) {
        var d = h.getTextContent(), g = h.getTextGuideLine(), y = h.isGroup;
        if (y)
          for (var m = h.childrenRef(), _ = 0; _ < m.length; _++)
            p = Math.max(l(m[_], v, c, p), p);
        else
          h.z = v, h.zlevel = c, p = Math.max(h.z2, p);
        if (d && (d.z = v, d.zlevel = c, isFinite(p) && (d.z2 = p + 2)), g) {
          var S = h.textGuideLineConfig;
          g.z = v, g.zlevel = c, isFinite(p) && (g.z2 = p + (S && S.showAbove ? 1 : -1));
        }
        return p;
      }
      function u(h, v) {
        v.eachRendered(function(c) {
          if (!Ia(c)) {
            var p = c.getTextContent(), d = c.getTextGuideLine();
            c.stateTransition && (c.stateTransition = null), p && p.stateTransition && (p.stateTransition = null), d && d.stateTransition && (d.stateTransition = null), c.hasState() ? (c.prevStates = c.currentStates, c.clearStates()) : c.prevStates && (c.prevStates = null);
          }
        });
      }
      function f(h, v) {
        var c = h.getModel("stateAnimation"), p = h.isAnimationEnabled(), d = c.get("duration"), g = d > 0 ? {
          duration: d,
          delay: c.get("delay"),
          easing: c.get("easing")
          // additive: stateAnimationModel.get('additive')
        } : null;
        v.eachRendered(function(y) {
          if (y.states && y.states.emphasis) {
            if (Ia(y))
              return;
            if (y instanceof pt && lT(y), y.__dirty) {
              var m = y.prevStates;
              m && y.useStates(m);
            }
            if (p) {
              y.stateTransition = g;
              var _ = y.getTextContent(), S = y.getTextGuideLine();
              _ && (_.stateTransition = g), S && (S.stateTransition = g);
            }
            y.__dirty && i(y);
          }
        });
      }
      Vd = function(h) {
        return new /** @class */
        ((function(v) {
          z(c, v);
          function c() {
            return v !== null && v.apply(this, arguments) || this;
          }
          return c.prototype.getCoordinateSystems = function() {
            return h._coordSysMgr.getCoordinateSystems();
          }, c.prototype.getComponentByElement = function(p) {
            for (; p; ) {
              var d = p.__ecComponentInfo;
              if (d != null)
                return h._model.getComponent(d.mainType, d.index);
              p = p.parent;
            }
          }, c.prototype.enterEmphasis = function(p, d) {
            zs(p, d), me(h);
          }, c.prototype.leaveEmphasis = function(p, d) {
            Fs(p, d), me(h);
          }, c.prototype.enterBlur = function(p) {
            Qx(p), me(h);
          }, c.prototype.leaveBlur = function(p) {
            Cm(p), me(h);
          }, c.prototype.enterSelect = function(p) {
            Dm(p), me(h);
          }, c.prototype.leaveSelect = function(p) {
            Mm(p), me(h);
          }, c.prototype.getModel = function() {
            return h.getModel();
          }, c.prototype.getViewOfComponentModel = function(p) {
            return h.getViewOfComponentModel(p);
          }, c.prototype.getViewOfSeriesModel = function(p) {
            return h.getViewOfSeriesModel(p);
          }, c;
        })(v0))(h);
      }, o_ = function(h) {
        function v(c, p) {
          for (var d = 0; d < c.length; d++) {
            var g = c[d];
            g[Xu] = p;
          }
        }
        D(Ra, function(c, p) {
          h._messageCenter.on(p, function(d) {
            if (rl[h.group] && h[Xu] !== Od) {
              if (d && d.escapeConnect)
                return;
              var g = h.makeActionFromEvent(d), y = [];
              D(Ln, function(m) {
                m !== h && m.group === h.group && y.push(m);
              }), v(y, Od), D(y, function(m) {
                m[Xu] !== jM && m.dispatchAction(g);
              }), v(y, KM);
            }
          });
        });
      };
    })(), t;
  })(or)
), Lc = Js.prototype;
Lc.on = e_("on");
Lc.off = e_("off");
Lc.one = function(r, t, e) {
  var n = this;
  We("ECharts#one is deprecated.");
  function i() {
    for (var a = [], o = 0; o < arguments.length; o++)
      a[o] = arguments[o];
    t && t.apply && t.apply(this, a), n.off(r, i);
  }
  this.on.call(this, r, i, e);
};
var QM = ["click", "dblclick", "mouseover", "mouseout", "mousemove", "mousedown", "mouseup", "globalout", "contextmenu"];
function ce(r) {
  process.env.NODE_ENV !== "production" && Vt("Instance " + r + " has been disposed");
}
var tl = {}, Ra = {}, vh = [], ph = [], el = [], s_ = {}, dh = {}, Ln = {}, rl = {}, JM = +/* @__PURE__ */ new Date() - 0, tA = +/* @__PURE__ */ new Date() - 0, Pc = "_echarts_instance_";
function eA(r, t, e) {
  var n = !(e && e.ssr);
  if (n) {
    if (process.env.NODE_ENV !== "production" && !r)
      throw new Error("Initialize failed: invalid dom.");
    var i = Oc(r);
    if (i)
      return process.env.NODE_ENV !== "production" && Vt("There is a chart instance already initialized on the dom."), i;
    process.env.NODE_ENV !== "production" && Rn(r) && r.nodeName.toUpperCase() !== "CANVAS" && (!r.clientWidth && (!e || e.width == null) || !r.clientHeight && (!e || e.height == null)) && Vt("Can't get DOM width or height. Please check dom.clientWidth and dom.clientHeight. They should not be 0.For example, you may need to call this in the callback of window.onload.");
  }
  var a = new Js(r, t, e);
  return a.id = "ec_" + JM++, Ln[a.id] = a, n && lm(r, Pc, a.id), o_(a), ke.trigger("afterinit", a), a;
}
function rA(r) {
  if (H(r)) {
    var t = r;
    r = null, D(t, function(e) {
      e.group != null && (r = e.group);
    }), r = r || "g_" + tA++, D(t, function(e) {
      e.group = r;
    });
  }
  return rl[r] = !0, r;
}
function l_(r) {
  rl[r] = !1;
}
var nA = l_;
function iA(r) {
  U(r) ? r = Ln[r] : r instanceof Js || (r = Oc(r)), r instanceof Js && !r.isDisposed() && r.dispose();
}
function Oc(r) {
  return Ln[Hw(r, Pc)];
}
function aA(r) {
  return Ln[r];
}
function Rc(r, t) {
  s_[r] = t;
}
function Nc(r) {
  vt(ph, r) < 0 && ph.push(r);
}
function kc(r, t) {
  Vc(vh, r, t, WM);
}
function u_(r) {
  Bl("afterinit", r);
}
function f_(r) {
  Bl("afterupdate", r);
}
function Bl(r, t) {
  ke.on(r, t);
}
function Wn(r, t, e) {
  $(t) && (e = t, t = "");
  var n = W(r) ? r.type : [r, r = {
    event: t
  }][0];
  r.event = (r.event || n).toLowerCase(), t = r.event, !Ra[t] && (tt(Pd.test(n) && Pd.test(t)), tl[n] || (tl[n] = {
    action: e,
    actionInfo: r
  }), Ra[t] = n);
}
function h_(r, t) {
  yo.register(r, t);
}
function oA(r) {
  var t = yo.get(r);
  if (t)
    return t.getDimensionsInfo ? t.getDimensionsInfo() : t.dimensions.slice();
}
function c_(r, t) {
  Vc(el, r, t, K0, "layout");
}
function Qr(r, t) {
  Vc(el, r, t, Q0, "visual");
}
var zd = [];
function Vc(r, t, e, n, i) {
  if (($(t) || W(t)) && (e = t, t = n), process.env.NODE_ENV !== "production") {
    if (isNaN(t) || t == null)
      throw new Error("Illegal priority");
    D(r, function(o) {
      tt(o.__raw !== e);
    });
  }
  if (!(vt(zd, e) >= 0)) {
    zd.push(e);
    var a = k0.wrapStageHandler(e, i);
    a.__prio = t, a.__raw = e, r.push(a);
  }
}
function Bc(r, t) {
  dh[r] = t;
}
function sA(r) {
  process.env.NODE_ENV !== "production" && We("setCanvasCreator is deprecated. Use setPlatformAPI({ createCanvas }) instead."), Sy({
    createCanvas: r
  });
}
function v_(r, t, e) {
  var n = j0("registerMap");
  n && n(r, t, e);
}
function lA(r) {
  var t = j0("getMap");
  return t && t(r);
}
var p_ = cD;
Qr(Ic, GD);
Qr(Vl, WD);
Qr(Vl, UD);
Qr(Ic, nM);
Qr(Vl, iM);
Qr(J0, NM);
Nc(d0);
kc(HM, qC);
Bc("default", YD);
Wn({
  type: In,
  event: In,
  update: In
}, Xt);
Wn({
  type: ds,
  event: ds,
  update: ds
}, Xt);
Wn({
  type: Ma,
  event: Ma,
  update: Ma
}, Xt);
Wn({
  type: gs,
  event: gs,
  update: gs
}, Xt);
Wn({
  type: Aa,
  event: Aa,
  update: Aa
}, Xt);
Rc("light", eM);
Rc("dark", F0);
var uA = {};
function la(r) {
  return r == null ? 0 : r.length || 1;
}
function Fd(r) {
  return r;
}
var fA = (
  /** @class */
  (function() {
    function r(t, e, n, i, a, o) {
      this._old = t, this._new = e, this._oldKeyGetter = n || Fd, this._newKeyGetter = i || Fd, this.context = a, this._diffModeMultiple = o === "multiple";
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
        var s = i[o], l = n[s], u = la(l);
        if (u > 1) {
          var f = l.shift();
          l.length === 1 && (n[s] = l[0]), this._update && this._update(f, o);
        } else u === 1 ? (n[s] = null, this._update && this._update(l, o)) : this._remove && this._remove(o);
      }
      this._performRestAdd(a, n);
    }, r.prototype._executeMultiple = function() {
      var t = this._old, e = this._new, n = {}, i = {}, a = [], o = [];
      this._initIndexMap(t, n, a, "_oldKeyGetter"), this._initIndexMap(e, i, o, "_newKeyGetter");
      for (var s = 0; s < a.length; s++) {
        var l = a[s], u = n[l], f = i[l], h = la(u), v = la(f);
        if (h > 1 && v === 1)
          this._updateManyToOne && this._updateManyToOne(f, u), i[l] = null;
        else if (h === 1 && v > 1)
          this._updateOneToMany && this._updateOneToMany(f, u), i[l] = null;
        else if (h === 1 && v === 1)
          this._update && this._update(f, u), i[l] = null;
        else if (h > 1 && v > 1)
          this._updateManyToMany && this._updateManyToMany(f, u), i[l] = null;
        else if (h > 1)
          for (var c = 0; c < h; c++)
            this._remove && this._remove(u[c]);
        else
          this._remove && this._remove(u);
      }
      this._performRestAdd(o, i);
    }, r.prototype._performRestAdd = function(t, e) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n], a = e[i], o = la(a);
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
          var l = e[s], u = la(l);
          u === 0 ? (e[s] = o, a && n.push(s)) : u === 1 ? e[s] = [l, o] : l.push(o);
        }
      }
    }, r;
  })()
), hA = (
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
function cA(r, t) {
  var e = {}, n = e.encode = {}, i = et(), a = [], o = [], s = {};
  D(r.dimensions, function(v) {
    var c = r.getDimensionInfo(v), p = c.coordDim;
    if (p) {
      process.env.NODE_ENV !== "production" && tt(eh.get(p) == null);
      var d = c.coordDimIndex;
      Qu(n, p)[d] = v, c.isExtraCoord || (i.set(p, 1), pA(c.type) && (a[0] = v), Qu(s, p)[d] = r.getDimensionIndex(c.name)), c.defaultTooltip && o.push(v);
    }
    eh.each(function(g, y) {
      var m = Qu(n, y), _ = c.otherDims[y];
      _ != null && _ !== !1 && (m[_] = c.name);
    });
  });
  var l = [], u = {};
  i.each(function(v, c) {
    var p = n[c];
    u[c] = p[0], l = l.concat(p);
  }), e.dataDimsOnCoord = l, e.dataDimIndicesOnCoord = Y(l, function(v) {
    return r.getDimensionInfo(v).storeDimIndex;
  }), e.encodeFirstDimNotExtra = u;
  var f = n.label;
  f && f.length && (a = f.slice());
  var h = n.tooltip;
  return h && h.length ? o = h.slice() : o.length || (o = a.slice()), n.defaultedLabel = a, n.defaultedTooltip = o, e.userOutput = new hA(s, t), e;
}
function Qu(r, t) {
  return r.hasOwnProperty(t) || (r[t] = []), r[t];
}
function vA(r) {
  return r === "category" ? "ordinal" : r === "time" ? "time" : "float";
}
function pA(r) {
  return !(r === "ordinal" || r === "time");
}
var Ss = (
  /** @class */
  /* @__PURE__ */ (function() {
    function r(t) {
      this.otherDims = {}, t != null && B(this, t);
    }
    return r;
  })()
), dA = Mt(), gA = {
  float: "f",
  int: "i",
  ordinal: "o",
  number: "n",
  time: "t"
}, d_ = (
  /** @class */
  (function() {
    function r(t) {
      this.dimensions = t.dimensions, this._dimOmitted = t.dimensionOmitted, this.source = t.source, this._fullDimCount = t.fullDimensionCount, this._updateDimOmitted(t.dimensionOmitted);
    }
    return r.prototype.isDimensionOmitted = function() {
      return this._dimOmitted;
    }, r.prototype._updateDimOmitted = function(t) {
      this._dimOmitted = t, t && (this._dimNameMap || (this._dimNameMap = m_(this.source)));
    }, r.prototype.getSourceDimensionIndex = function(t) {
      return Q(this._dimNameMap.get(t), -1);
    }, r.prototype.getSourceDimension = function(t) {
      var e = this.source.dimensionsDefine;
      if (e)
        return e[t];
    }, r.prototype.makeStoreSchema = function() {
      for (var t = this._fullDimCount, e = m0(this.source), n = !__(t), i = "", a = [], o = 0, s = 0; o < t; o++) {
        var l = void 0, u = void 0, f = void 0, h = this.dimensions[s];
        if (h && h.storeDimIndex === o)
          l = e ? h.name : null, u = h.type, f = h.ordinalMeta, s++;
        else {
          var v = this.getSourceDimension(o);
          v && (l = e ? v.name : null, u = v.type);
        }
        a.push({
          property: l,
          type: u,
          ordinalMeta: f
        }), e && l != null && (!h || !h.isCalculationCoord) && (i += n ? l.replace(/\`/g, "`1").replace(/\$/g, "`2") : l), i += "$", i += gA[u] || "f", f && (i += f.uid), i += "$";
      }
      var c = this.source, p = [c.seriesLayoutBy, c.startIndex, i].join("$$");
      return {
        dimensions: a,
        hash: p
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
function g_(r) {
  return r instanceof d_;
}
function y_(r) {
  for (var t = et(), e = 0; e < (r || []).length; e++) {
    var n = r[e], i = W(n) ? n.name : n;
    i != null && t.get(i) == null && t.set(i, e);
  }
  return t;
}
function m_(r) {
  var t = dA(r);
  return t.dimNameMap || (t.dimNameMap = y_(r.dimensionsDefine));
}
function __(r) {
  return r > 30;
}
var ua = W, Lr = Y, yA = typeof Int32Array > "u" ? Array : Int32Array, mA = "e\0\0", Hd = -1, _A = ["hasItemOption", "_nameList", "_idList", "_invertedIndicesMap", "_dimSummary", "userOutput", "_rawData", "_dimValueGetter", "_nameDimIdx", "_idDimIdx", "_nameRepeatCount"], SA = ["_approximateExtent"], Gd, qo, fa, ii, Ju, ha, tf, zc = (
  /** @class */
  (function() {
    function r(t, e) {
      this.type = "list", this._dimOmitted = !1, this._nameList = [], this._idList = [], this._visual = {}, this._layout = {}, this._itemVisuals = [], this._itemLayouts = [], this._graphicEls = [], this._approximateExtent = {}, this._calculationInfo = {}, this.hasItemOption = !1, this.TRANSFERABLE_METHODS = ["cloneShallow", "downSample", "minmaxDownSample", "lttbDownSample", "map"], this.CHANGABLE_METHODS = ["filterSelf", "selectRange"], this.DOWNSAMPLE_METHODS = ["downSample", "minmaxDownSample", "lttbDownSample"];
      var n, i = !1;
      g_(t) ? (n = t.dimensions, this._dimOmitted = t.isDimensionOmitted(), this._schema = t) : (i = !0, n = t), n = n || ["x", "y"];
      for (var a = {}, o = [], s = {}, l = !1, u = {}, f = 0; f < n.length; f++) {
        var h = n[f], v = U(h) ? new Ss({
          name: h
        }) : h instanceof Ss ? h : new Ss(h), c = v.name;
        v.type = v.type || "float", v.coordDim || (v.coordDim = c, v.coordDimIndex = 0);
        var p = v.otherDims = v.otherDims || {};
        o.push(c), a[c] = v, u[c] != null && (l = !0), v.createInvertedIndices && (s[c] = []), p.itemName === 0 && (this._nameDimIdx = f), p.itemId === 0 && (this._idDimIdx = f), process.env.NODE_ENV !== "production" && tt(i || v.storeDimIndex >= 0), i && (v.storeDimIndex = f);
      }
      if (this.dimensions = o, this._dimInfos = a, this._initGetDimensionInfo(l), this.hostModel = e, this._invertedIndicesMap = s, this._dimOmitted) {
        var d = this._dimIdxToName = et();
        D(o, function(g) {
          d.set(a[g].storeDimIndex, g);
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
      if (t instanceof nh && (a = t), !a) {
        var o = this.dimensions, s = Cc(t) || re(t) ? new _0(t, o.length) : t;
        a = new nh();
        var l = Lr(o, function(u) {
          return {
            type: i._dimInfos[u].type,
            property: u
          };
        });
        a.initData(s, l, n);
      }
      this._store = a, this._nameList = (e || []).slice(), this._idList = [], this._nameRepeatCount = {}, this._doInit(0, a.count()), this._dimSummary = cA(this, this._schema), this.userOutput = this._dimSummary.userOutput;
    }, r.prototype.appendData = function(t) {
      var e = this._store.appendData(t);
      this._doInit(e[0], e[1]);
    }, r.prototype.appendValues = function(t, e) {
      var n = this._store.appendValues(t, e && e.length), i = n.start, a = n.end, o = this._shouldMakeIdFromName();
      if (this._updateOrdinalMeta(), e)
        for (var s = i; s < a; s++) {
          var l = s - i;
          this._nameList[s] = e[l], o && tf(this, s);
        }
    }, r.prototype._updateOrdinalMeta = function() {
      for (var t = this._store, e = this.dimensions, n = 0; n < e.length; n++) {
        var i = this._dimInfos[e[n]];
        i.ordinalMeta && t.collectOrdinalMeta(i.storeDimIndex, i.ordinalMeta);
      }
    }, r.prototype._shouldMakeIdFromName = function() {
      var t = this._store.getProvider();
      return this._idDimIdx == null && t.getSource().sourceFormat !== Sr && !t.fillStorage;
    }, r.prototype._doInit = function(t, e) {
      if (!(t >= e)) {
        var n = this._store, i = n.getProvider();
        this._updateOrdinalMeta();
        var a = this._nameList, o = this._idList, s = i.getSource().sourceFormat, l = s === Pe;
        if (l && !i.pure)
          for (var u = [], f = t; f < e; f++) {
            var h = i.getItem(f, u);
            if (!this.hasItemOption && Ew(h) && (this.hasItemOption = !0), h) {
              var v = h.name;
              a[f] == null && v != null && (a[f] = He(v, null));
              var c = h.id;
              o[f] == null && c != null && (o[f] = He(c, null));
            }
          }
        if (this._shouldMakeIdFromName())
          for (var f = t; f < e; f++)
            tf(this, f);
        Gd(this);
      }
    }, r.prototype.getApproximateExtent = function(t) {
      return this._approximateExtent[t] || this._store.getDataExtent(this._getStoreDimIndex(t));
    }, r.prototype.setApproximateExtent = function(t, e) {
      e = this.getDimension(e), this._approximateExtent[e] = t.slice();
    }, r.prototype.getCalculationInfo = function(t) {
      return this._calculationInfo[t];
    }, r.prototype.setCalculationInfo = function(t, e) {
      ua(t) ? B(this._calculationInfo, t) : this._calculationInfo[t] = e;
    }, r.prototype.getName = function(t) {
      var e = this.getRawIndex(t), n = this._nameList[e];
      return n == null && this._nameDimIdx != null && (n = fa(this, this._nameDimIdx, e)), n == null && (n = ""), n;
    }, r.prototype._getCategory = function(t, e) {
      var n = this._store.get(t, e), i = this._store.getOrdinalMeta(t);
      return i ? i.categories[n] : n;
    }, r.prototype.getId = function(t) {
      return qo(this, this.getRawIndex(t));
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
      return H(t) ? i.getValues(Lr(t, function(a) {
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
      return i == null || isNaN(i) ? Hd : i;
    }, r.prototype.indicesOfNearest = function(t, e, n) {
      return this._store.indicesOfNearest(this._getStoreDimIndex(t), e, n);
    }, r.prototype.each = function(t, e, n) {
      $(t) && (n = e, e = t, t = []);
      var i = n || this, a = Lr(ii(t), this._getStoreDimIndex, this);
      this._store.each(a, i ? J(e, i) : e);
    }, r.prototype.filterSelf = function(t, e, n) {
      $(t) && (n = e, e = t, t = []);
      var i = n || this, a = Lr(ii(t), this._getStoreDimIndex, this);
      return this._store = this._store.filter(a, i ? J(e, i) : e), this;
    }, r.prototype.selectRange = function(t) {
      var e = this, n = {}, i = gt(t);
      return D(i, function(a) {
        var o = e._getStoreDimIndex(a);
        n[o] = t[a];
      }), this._store = this._store.selectRange(n), this;
    }, r.prototype.mapArray = function(t, e, n) {
      $(t) && (n = e, e = t, t = []), n = n || this;
      var i = [];
      return this.each(t, function() {
        i.push(e && e.apply(this, arguments));
      }, n), i;
    }, r.prototype.map = function(t, e, n, i) {
      var a = n || i || this, o = Lr(ii(t), this._getStoreDimIndex, this), s = ha(this);
      return s._store = this._store.map(o, a ? J(e, a) : e), s;
    }, r.prototype.modify = function(t, e, n, i) {
      var a = this, o = n || i || this;
      process.env.NODE_ENV !== "production" && D(ii(t), function(l) {
        var u = a.getDimensionInfo(l);
        u.isCalculationCoord || console.error("Danger: only stack dimension can be modified");
      });
      var s = Lr(ii(t), this._getStoreDimIndex, this);
      this._store.modify(s, o ? J(e, o) : e);
    }, r.prototype.downSample = function(t, e, n, i) {
      var a = ha(this);
      return a._store = this._store.downSample(this._getStoreDimIndex(t), e, n, i), a;
    }, r.prototype.minmaxDownSample = function(t, e) {
      var n = ha(this);
      return n._store = this._store.minmaxDownSample(this._getStoreDimIndex(t), e), n;
    }, r.prototype.lttbDownSample = function(t, e) {
      var n = ha(this);
      return n._store = this._store.lttbDownSample(this._getStoreDimIndex(t), e), n;
    }, r.prototype.getRawDataItem = function(t) {
      return this._store.getRawDataItem(t);
    }, r.prototype.getItemModel = function(t) {
      var e = this.hostModel, n = this.getRawDataItem(t);
      return new mt(n, e, e && e.ecModel);
    }, r.prototype.diff = function(t) {
      var e = this;
      return new fA(t ? t.getStore().getIndices() : [], this.getStore().getIndices(), function(n) {
        return qo(t, n);
      }, function(n) {
        return qo(e, n);
      });
    }, r.prototype.getVisual = function(t) {
      var e = this._visual;
      return e && e[t];
    }, r.prototype.setVisual = function(t, e) {
      this._visual = this._visual || {}, ua(t) ? B(this._visual, t) : this._visual[t] = e;
    }, r.prototype.getItemVisual = function(t, e) {
      var n = this._itemVisuals[t], i = n && n[e];
      return i ?? this.getVisual(e);
    }, r.prototype.hasItemVisual = function() {
      return this._itemVisuals.length > 0;
    }, r.prototype.ensureUniqueItemVisual = function(t, e) {
      var n = this._itemVisuals, i = n[t];
      i || (i = n[t] = {});
      var a = i[e];
      return a == null && (a = this.getVisual(e), H(a) ? a = a.slice() : ua(a) && (a = B({}, a)), i[e] = a), a;
    }, r.prototype.setItemVisual = function(t, e, n) {
      var i = this._itemVisuals[t] || {};
      this._itemVisuals[t] = i, ua(e) ? B(i, e) : i[e] = n;
    }, r.prototype.clearAllVisual = function() {
      this._visual = {}, this._itemVisuals = [];
    }, r.prototype.setLayout = function(t, e) {
      ua(t) ? B(this._layout, t) : this._layout[t] = e;
    }, r.prototype.getLayout = function(t) {
      return this._layout[t];
    }, r.prototype.getItemLayout = function(t) {
      return this._itemLayouts[t];
    }, r.prototype.setItemLayout = function(t, e, n) {
      this._itemLayouts[t] = n ? B(this._itemLayouts[t] || {}, e) : e;
    }, r.prototype.clearItemLayouts = function() {
      this._itemLayouts.length = 0;
    }, r.prototype.setItemGraphicEl = function(t, e) {
      var n = this.hostModel && this.hostModel.seriesIndex;
      Gx(n, this.dataType, t, e), this._graphicEls[t] = e;
    }, r.prototype.getItemGraphicEl = function(t) {
      return this._graphicEls[t];
    }, r.prototype.eachItemGraphicEl = function(t, e) {
      D(this._graphicEls, function(n, i) {
        n && t && t.call(e, n, i);
      });
    }, r.prototype.cloneShallow = function(t) {
      return t || (t = new r(this._schema ? this._schema : Lr(this.dimensions, this._getDimInfo, this), this.hostModel)), Ju(t, this), t._store = this._store, t;
    }, r.prototype.wrapMethod = function(t, e) {
      var n = this[t];
      $(n) && (this.__wrappedMethods = this.__wrappedMethods || [], this.__wrappedMethods.push(t), this[t] = function() {
        var i = n.apply(this, arguments);
        return e.apply(this, [i].concat(sl(arguments)));
      });
    }, r.internalField = (function() {
      Gd = function(t) {
        var e = t._invertedIndicesMap;
        D(e, function(n, i) {
          var a = t._dimInfos[i], o = a.ordinalMeta, s = t._store;
          if (o) {
            n = e[i] = new yA(o.categories.length);
            for (var l = 0; l < n.length; l++)
              n[l] = Hd;
            for (var l = 0; l < s.count(); l++)
              n[s.get(a.storeDimIndex, l)] = l;
          }
        });
      }, fa = function(t, e, n) {
        return He(t._getCategory(e, n), null);
      }, qo = function(t, e) {
        var n = t._idList[e];
        return n == null && t._idDimIdx != null && (n = fa(t, t._idDimIdx, e)), n == null && (n = mA + e), n;
      }, ii = function(t) {
        return H(t) || (t = t != null ? [t] : []), t;
      }, ha = function(t) {
        var e = new r(t._schema ? t._schema : Lr(t.dimensions, t._getDimInfo, t), t.hostModel);
        return Ju(e, t), e;
      }, Ju = function(t, e) {
        D(_A.concat(e.__wrappedMethods || []), function(n) {
          e.hasOwnProperty(n) && (t[n] = e[n]);
        }), t.__wrappedMethods = e.__wrappedMethods, D(SA, function(n) {
          t[n] = j(e[n]);
        }), t._calculationInfo = B({}, e._calculationInfo);
      }, tf = function(t, e) {
        var n = t._nameList, i = t._idList, a = t._nameDimIdx, o = t._idDimIdx, s = n[e], l = i[e];
        if (s == null && a != null && (n[e] = s = fa(t, a, e)), l == null && o != null && (i[e] = l = fa(t, o, e)), l == null && s != null) {
          var u = t._nameRepeatCount, f = u[s] = (u[s] || 0) + 1;
          l = s, f > 1 && (l += "__ec__" + f), i[e] = l;
        }
      };
    })(), r;
  })()
);
function bA(r, t) {
  return Fc(r, t).dimensions;
}
function Fc(r, t) {
  Cc(r) || (r = g0(r)), t = t || {};
  var e = t.coordDimensions || [], n = t.dimensionsDefine || r.dimensionsDefine || [], i = et(), a = [], o = xA(r, e, n, t.dimensionsCount), s = t.canOmitUnusedDimensions && __(o), l = n === r.dimensionsDefine, u = l ? m_(r) : y_(n), f = t.encodeDefine;
  !f && t.encodeDefaulter && (f = t.encodeDefaulter(r, o));
  for (var h = et(f), v = new T0(o), c = 0; c < v.length; c++)
    v[c] = -1;
  function p(A) {
    var M = v[A];
    if (M < 0) {
      var C = n[A], E = W(C) ? C : {
        name: C
      }, I = new Ss(), P = E.name;
      P != null && u.get(P) != null && (I.name = I.displayName = P), E.type != null && (I.type = E.type), E.displayName != null && (I.displayName = E.displayName);
      var O = a.length;
      return v[A] = O, I.storeDimIndex = A, a.push(I), I;
    }
    return a[M];
  }
  if (!s)
    for (var c = 0; c < o; c++)
      p(c);
  h.each(function(A, M) {
    var C = Bt(A).slice();
    if (C.length === 1 && !U(C[0]) && C[0] < 0) {
      h.set(M, !1);
      return;
    }
    var E = h.set(M, []);
    D(C, function(I, P) {
      var O = U(I) ? u.get(I) : I;
      O != null && O < o && (E[P] = O, g(p(O), M, P));
    });
  });
  var d = 0;
  D(e, function(A) {
    var M, C, E, I;
    if (U(A))
      M = A, I = {};
    else {
      I = A, M = I.name;
      var P = I.ordinalMeta;
      I.ordinalMeta = null, I = B({}, I), I.ordinalMeta = P, C = I.dimsDef, E = I.otherDims, I.name = I.coordDim = I.coordDimIndex = I.dimsDef = I.otherDims = null;
    }
    var O = h.get(M);
    if (O !== !1) {
      if (O = Bt(O), !O.length)
        for (var R = 0; R < (C && C.length || 1); R++) {
          for (; d < o && p(d).coordDim != null; )
            d++;
          d < o && O.push(d++);
        }
      D(O, function(F, N) {
        var V = p(F);
        if (l && I.type != null && (V.type = I.type), g(ut(V, I), M, N), V.name == null && C) {
          var L = C[N];
          !W(L) && (L = {
            name: L
          }), V.name = V.displayName = L.name, V.defaultTooltip = L.defaultTooltip;
        }
        E && ut(V.otherDims, E);
      });
    }
  });
  function g(A, M, C) {
    eh.get(M) != null ? A.otherDims[M] = C : (A.coordDim = M, A.coordDimIndex = C, i.set(M, !0));
  }
  var y = t.generateCoord, m = t.generateCoordCount, _ = m != null;
  m = y ? m || 1 : 0;
  var S = y || "value";
  function w(A) {
    A.name == null && (A.name = A.coordDim);
  }
  if (s)
    D(a, function(A) {
      w(A);
    }), a.sort(function(A, M) {
      return A.storeDimIndex - M.storeDimIndex;
    });
  else
    for (var b = 0; b < o; b++) {
      var x = p(b), T = x.coordDim;
      T == null && (x.coordDim = TA(S, i, _), x.coordDimIndex = 0, (!y || m <= 0) && (x.isExtraCoord = !0), m--), w(x), x.type == null && (h0(r, b) === Rt.Must || x.isExtraCoord && (x.otherDims.itemName != null || x.otherDims.seriesName != null)) && (x.type = "ordinal");
    }
  return wA(a), new d_({
    source: r,
    dimensions: a,
    fullDimensionCount: o,
    dimensionOmitted: s
  });
}
function wA(r) {
  for (var t = et(), e = 0; e < r.length; e++) {
    var n = r[e], i = n.name, a = t.get(i) || 0;
    a > 0 && (n.name = i + (a - 1)), a++, t.set(i, a);
  }
}
function xA(r, t, e, n) {
  var i = Math.max(r.dimensionsDetectedCount || 1, t.length, e.length, n || 0);
  return D(t, function(a) {
    var o;
    W(a) && (o = a.dimsDef) && (i = Math.max(i, o.length));
  }), i;
}
function TA(r, t, e) {
  if (e || t.hasKey(r)) {
    for (var n = 0; t.hasKey(r + n); )
      n++;
    r += n;
  }
  return t.set(r, !0), r;
}
var CA = (
  /** @class */
  /* @__PURE__ */ (function() {
    function r(t) {
      this.coordSysDims = [], this.axisMap = et(), this.categoryAxisMap = et(), this.coordSysName = t;
    }
    return r;
  })()
);
function DA(r) {
  var t = r.get("coordinateSystem"), e = new CA(t), n = MA[t];
  if (n)
    return n(r, e, e.axisMap, e.categoryAxisMap), e;
}
var MA = {
  cartesian2d: function(r, t, e, n) {
    var i = r.getReferringComponents("xAxis", Be).models[0], a = r.getReferringComponents("yAxis", Be).models[0];
    if (process.env.NODE_ENV !== "production") {
      if (!i)
        throw new Error('xAxis "' + wr(r.get("xAxisIndex"), r.get("xAxisId"), 0) + '" not found');
      if (!a)
        throw new Error('yAxis "' + wr(r.get("xAxisIndex"), r.get("yAxisId"), 0) + '" not found');
    }
    t.coordSysDims = ["x", "y"], e.set("x", i), e.set("y", a), ai(i) && (n.set("x", i), t.firstCategoryDimIndex = 0), ai(a) && (n.set("y", a), t.firstCategoryDimIndex == null && (t.firstCategoryDimIndex = 1));
  },
  singleAxis: function(r, t, e, n) {
    var i = r.getReferringComponents("singleAxis", Be).models[0];
    if (process.env.NODE_ENV !== "production" && !i)
      throw new Error("singleAxis should be specified.");
    t.coordSysDims = ["single"], e.set("single", i), ai(i) && (n.set("single", i), t.firstCategoryDimIndex = 0);
  },
  polar: function(r, t, e, n) {
    var i = r.getReferringComponents("polar", Be).models[0], a = i.findAxisModel("radiusAxis"), o = i.findAxisModel("angleAxis");
    if (process.env.NODE_ENV !== "production") {
      if (!o)
        throw new Error("angleAxis option not found");
      if (!a)
        throw new Error("radiusAxis option not found");
    }
    t.coordSysDims = ["radius", "angle"], e.set("radius", a), e.set("angle", o), ai(a) && (n.set("radius", a), t.firstCategoryDimIndex = 0), ai(o) && (n.set("angle", o), t.firstCategoryDimIndex == null && (t.firstCategoryDimIndex = 1));
  },
  geo: function(r, t, e, n) {
    t.coordSysDims = ["lng", "lat"];
  },
  parallel: function(r, t, e, n) {
    var i = r.ecModel, a = i.getComponent("parallel", r.get("parallelIndex")), o = t.coordSysDims = a.dimensions.slice();
    D(a.parallelAxisIndex, function(s, l) {
      var u = i.getComponent("parallelAxis", s), f = o[l];
      e.set(f, u), ai(u) && (n.set(f, u), t.firstCategoryDimIndex == null && (t.firstCategoryDimIndex = l));
    });
  }
};
function ai(r) {
  return r.get("type") === "category";
}
function S_(r, t, e) {
  e = e || {};
  var n = e.byIndex, i = e.stackedCoordDimension, a, o, s;
  AA(t) ? a = t : (o = t.schema, a = o.dimensions, s = t.store);
  var l = !!(r && r.get("stack")), u, f, h, v;
  if (D(a, function(m, _) {
    U(m) && (a[_] = m = {
      name: m
    }), l && !m.isExtraCoord && (!n && !u && m.ordinalMeta && (u = m), !f && m.type !== "ordinal" && m.type !== "time" && (!i || i === m.coordDim) && (f = m));
  }), f && !n && !u && (n = !0), f) {
    h = "__\0ecstackresult_" + r.id, v = "__\0ecstackedover_" + r.id, u && (u.createInvertedIndices = !0);
    var c = f.coordDim, p = f.type, d = 0;
    D(a, function(m) {
      m.coordDim === c && d++;
    });
    var g = {
      name: h,
      coordDim: c,
      coordDimIndex: d,
      type: p,
      isExtraCoord: !0,
      isCalculationCoord: !0,
      storeDimIndex: a.length
    }, y = {
      name: v,
      // This dimension contains stack base (generally, 0), so do not set it as
      // `stackedDimCoordDim` to avoid extent calculation, consider log scale.
      coordDim: v,
      coordDimIndex: d + 1,
      type: p,
      isExtraCoord: !0,
      isCalculationCoord: !0,
      storeDimIndex: a.length + 1
    };
    o ? (s && (g.storeDimIndex = s.ensureCalculationDimension(v, p), y.storeDimIndex = s.ensureCalculationDimension(h, p)), o.appendCalculationDimension(g), o.appendCalculationDimension(y)) : (a.push(g), a.push(y));
  }
  return {
    stackedDimension: f && f.name,
    stackedByDimension: u && u.name,
    isStackedByIndex: n,
    stackedOverDimension: v,
    stackResultDimension: h
  };
}
function AA(r) {
  return !g_(r.schema);
}
function zn(r, t) {
  return !!t && t === r.getCalculationInfo("stackedDimension");
}
function b_(r, t) {
  return zn(r, t) ? r.getCalculationInfo("stackResultDimension") : t;
}
function EA(r, t) {
  var e = r.get("coordinateSystem"), n = yo.get(e), i;
  return t && t.coordSysDims && (i = Y(t.coordSysDims, function(a) {
    var o = {
      name: a
    }, s = t.axisMap.get(a);
    if (s) {
      var l = s.get("type");
      o.type = vA(l);
    }
    return o;
  })), i || (i = n && (n.getDimensionsInfo ? n.getDimensionsInfo() : n.dimensions.slice()) || ["x", "y"]), i;
}
function IA(r, t, e) {
  var n, i;
  return e && D(r, function(a, o) {
    var s = a.coordDim, l = e.categoryAxisMap.get(s);
    l && (n == null && (n = o), a.ordinalMeta = l.getOrdinalMeta(), t && (a.createInvertedIndices = !0)), a.otherDims.itemName != null && (i = !0);
  }), !i && n != null && (r[n].otherDims.itemName = 0), n;
}
function Li(r, t, e) {
  e = e || {};
  var n = t.getSourceManager(), i, a = !1;
  i = n.getSource(), a = i.sourceFormat === Pe;
  var o = DA(t), s = EA(t, o), l = e.useEncodeDefaulter, u = $(l) ? l : l ? wt(wC, s, t) : null, f = {
    coordDimensions: s,
    generateCoord: e.generateCoord,
    encodeDefine: t.getEncode(),
    encodeDefaulter: u,
    canOmitUnusedDimensions: !a
  }, h = Fc(i, f), v = IA(h.dimensions, e.createInvertedIndices, o), c = a ? null : n.getSharedDataStore(h), p = S_(t, {
    schema: h,
    store: c
  }), d = new zc(h, t);
  d.setCalculationInfo(p);
  var g = v != null && LA(i) ? function(y, m, _, S) {
    return S === v ? _ : this.defaultDimValueGetter(y, m, _, S);
  } : null;
  return d.hasItemOption = !1, d.initData(
    // Try to reuse the data store in sourceManager if using dataset.
    a ? i : c,
    null,
    g
  ), d;
}
function LA(r) {
  if (r.sourceFormat === Pe) {
    var t = PA(r.data || []);
    return !H(uo(t));
  }
}
function PA(r) {
  for (var t = 0; t < r.length && r[t] == null; )
    t++;
  return r[t];
}
var lr = (
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
hl(lr);
var OA = 0, gh = (
  /** @class */
  (function() {
    function r(t) {
      this.categories = t.categories || [], this._needCollect = t.needCollect, this._deduplication = t.deduplication, this.uid = ++OA;
    }
    return r.createByAxisModel = function(t) {
      var e = t.option, n = e.data, i = n && Y(n, RA);
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
      if (!U(t) && !n)
        return t;
      if (n && !this._deduplication)
        return e = this.categories.length, this.categories[e] = t, e;
      var i = this._getOrCreateMap();
      return e = i.get(t), e == null && (n ? (e = this.categories.length, this.categories[e] = t, i.set(t, e)) : e = NaN), e;
    }, r.prototype._getOrCreateMap = function() {
      return this._map || (this._map = et(this.categories));
    }, r;
  })()
);
function RA(r) {
  return W(r) && r.value != null ? r.value : r + "";
}
function NA(r) {
  var t = Math.pow(10, lo(Math.abs(r))), e = Math.abs(r / t);
  return e === 0 || e === 1 || e === 2 || e === 3 || e === 5;
}
function yh(r) {
  return r.type === "interval" || r.type === "log";
}
function kA(r, t, e, n) {
  var i = {}, a = r[1] - r[0], o = i.interval = Jh(a / t, !0);
  e != null && o < e && (o = i.interval = e), n != null && o > n && (o = i.interval = n);
  var s = i.intervalPrecision = w_(o), l = i.niceTickExtent = [Dt(Math.ceil(r[0] / o) * o, s), Dt(Math.floor(r[1] / o) * o, s)];
  return VA(l, r), i;
}
function ef(r) {
  var t = Math.pow(10, lo(r)), e = r / t;
  return e ? e === 2 ? e = 3 : e === 3 ? e = 5 : e *= 2 : e = 1, Dt(e * t);
}
function w_(r) {
  return er(r) + 2;
}
function Wd(r, t, e) {
  r[t] = Math.max(Math.min(r[t], e[1]), e[0]);
}
function VA(r, t) {
  !isFinite(r[0]) && (r[0] = t[0]), !isFinite(r[1]) && (r[1] = t[1]), Wd(r, 0, t), Wd(r, 1, t), r[0] > r[1] && (r[0] = r[1]);
}
function zl(r, t) {
  return r >= t[0] && r <= t[1];
}
function Fl(r, t) {
  return t[1] === t[0] ? 0.5 : (r - t[0]) / (t[1] - t[0]);
}
function Hl(r, t) {
  return r * (t[1] - t[0]) + t[0];
}
var Hc = (
  /** @class */
  (function(r) {
    z(t, r);
    function t(e) {
      var n = r.call(this, e) || this;
      n.type = "ordinal";
      var i = n.getSetting("ordinalMeta");
      return i || (i = new gh({})), H(i) && (i = new gh({
        categories: Y(i, function(a) {
          return W(a) ? a.value : a;
        })
      })), n._ordinalMeta = i, n._extent = n.getSetting("extent") || [0, i.categories.length - 1], n;
    }
    return t.prototype.parse = function(e) {
      return e == null ? NaN : U(e) ? this._ordinalMeta.getOrdinal(e) : Math.round(e);
    }, t.prototype.contain = function(e) {
      return e = this.parse(e), zl(e, this._extent) && this._ordinalMeta.categories[e] != null;
    }, t.prototype.normalize = function(e) {
      return e = this._getTickNumber(this.parse(e)), Fl(e, this._extent);
    }, t.prototype.scale = function(e) {
      return e = Math.round(Hl(e, this._extent)), this.getRawOrdinalNumber(e);
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
      for (var n = e.ordinalNumbers, i = this._ordinalNumbersByTick = [], a = this._ticksByOrdinalNumber = [], o = 0, s = this._ordinalMeta.categories.length, l = Math.min(s, n.length); o < l; ++o) {
        var u = n[o];
        i[o] = u, a[u] = o;
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
  })(lr)
);
lr.registerClass(Hc);
var _n = Dt, Pi = (
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
      return zl(e, this._extent);
    }, t.prototype.normalize = function(e) {
      return Fl(e, this._extent);
    }, t.prototype.scale = function(e) {
      return Hl(e, this._extent);
    }, t.prototype.setExtent = function(e, n) {
      var i = this._extent;
      isNaN(e) || (i[0] = parseFloat(e)), isNaN(n) || (i[1] = parseFloat(n));
    }, t.prototype.unionExtent = function(e) {
      var n = this._extent;
      e[0] < n[0] && (n[0] = e[0]), e[1] > n[1] && (n[1] = e[1]), this.setExtent(n[0], n[1]);
    }, t.prototype.getInterval = function() {
      return this._interval;
    }, t.prototype.setInterval = function(e) {
      this._interval = e, this._niceExtent = this._extent.slice(), this._intervalPrecision = w_(e);
    }, t.prototype.getTicks = function(e) {
      var n = this._interval, i = this._extent, a = this._niceExtent, o = this._intervalPrecision, s = [];
      if (!n)
        return s;
      var l = 1e4;
      i[0] < a[0] && (e ? s.push({
        value: _n(a[0] - n, o)
      }) : s.push({
        value: i[0]
      }));
      for (var u = a[0]; u <= a[1] && (s.push({
        value: u
      }), u = _n(u + n, o), u !== s[s.length - 1].value); )
        if (s.length > l)
          return [];
      var f = s.length ? s[s.length - 1].value : a[1];
      return i[1] > f && (e ? s.push({
        value: _n(f + n, o)
      }) : s.push({
        value: i[1]
      })), s;
    }, t.prototype.getMinorTicks = function(e) {
      for (var n = this.getTicks(!0), i = [], a = this.getExtent(), o = 1; o < n.length; o++) {
        for (var s = n[o], l = n[o - 1], u = 0, f = [], h = s.value - l.value, v = h / e; u < e - 1; ) {
          var c = _n(l.value + (u + 1) * v);
          c > a[0] && c < a[1] && f.push(c), u++;
        }
        i.push(f);
      }
      return i;
    }, t.prototype.getLabel = function(e, n) {
      if (e == null)
        return "";
      var i = n && n.precision;
      i == null ? i = er(e.value) || 0 : i === "auto" && (i = this._intervalPrecision);
      var a = _n(e.value, i, !0);
      return mc(a);
    }, t.prototype.calcNiceTicks = function(e, n, i) {
      e = e || 5;
      var a = this._extent, o = a[1] - a[0];
      if (isFinite(o)) {
        o < 0 && (o = -o, a.reverse());
        var s = kA(a, e, n, i);
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
      e.fixMin || (n[0] = _n(Math.floor(n[0] / o) * o)), e.fixMax || (n[1] = _n(Math.ceil(n[1] / o) * o));
    }, t.prototype.setNiceExtent = function(e, n) {
      this._niceExtent = [e, n];
    }, t.type = "interval", t;
  })(lr)
);
lr.registerClass(Pi);
var x_ = typeof Float32Array < "u", BA = x_ ? Float32Array : Array;
function mr(r) {
  return H(r) ? x_ ? new Float32Array(r) : r : new BA(r);
}
var zA = "__ec_stack_";
function T_(r) {
  return r.get("stack") || zA + r.seriesIndex;
}
function Gc(r) {
  return r.dim + r.index;
}
function C_(r, t) {
  var e = [];
  return t.eachSeriesByType(r, function(n) {
    M_(n) && e.push(n);
  }), e;
}
function FA(r) {
  var t = {};
  D(r, function(l) {
    var u = l.coordinateSystem, f = u.getBaseAxis();
    if (!(f.type !== "time" && f.type !== "value"))
      for (var h = l.getData(), v = f.dim + "_" + f.index, c = h.getDimensionIndex(h.mapDimension(f.dim)), p = h.getStore(), d = 0, g = p.count(); d < g; ++d) {
        var y = p.get(c, d);
        t[v] ? t[v].push(y) : t[v] = [y];
      }
  });
  var e = {};
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var i = t[n];
      if (i) {
        i.sort(function(l, u) {
          return l - u;
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
function D_(r) {
  var t = FA(r), e = [];
  return D(r, function(n) {
    var i = n.coordinateSystem, a = i.getBaseAxis(), o = a.getExtent(), s;
    if (a.type === "category")
      s = a.getBandWidth();
    else if (a.type === "value" || a.type === "time") {
      var l = a.dim + "_" + a.index, u = t[l], f = Math.abs(o[1] - o[0]), h = a.scale.getExtent(), v = Math.abs(h[1] - h[0]);
      s = u ? f / v * u : f;
    } else {
      var c = n.getData();
      s = Math.abs(o[1] - o[0]) / c.count();
    }
    var p = ct(n.get("barWidth"), s), d = ct(n.get("barMaxWidth"), s), g = ct(
      // barMinWidth by default is 0.5 / 1 in cartesian. Because in value axis,
      // the auto-calculated bar width might be less than 0.5 / 1.
      n.get("barMinWidth") || (A_(n) ? 0.5 : 1),
      s
    ), y = n.get("barGap"), m = n.get("barCategoryGap");
    e.push({
      bandWidth: s,
      barWidth: p,
      barMaxWidth: d,
      barMinWidth: g,
      barGap: y,
      barCategoryGap: m,
      axisKey: Gc(a),
      stackId: T_(n)
    });
  }), HA(e);
}
function HA(r) {
  var t = {};
  D(r, function(n, i) {
    var a = n.axisKey, o = n.bandWidth, s = t[a] || {
      bandWidth: o,
      remainedWidth: o,
      autoWidthCount: 0,
      categoryGap: null,
      gap: "20%",
      stacks: {}
    }, l = s.stacks;
    t[a] = s;
    var u = n.stackId;
    l[u] || s.autoWidthCount++, l[u] = l[u] || {
      width: 0,
      maxWidth: 0
    };
    var f = n.barWidth;
    f && !l[u].width && (l[u].width = f, f = Math.min(s.remainedWidth, f), s.remainedWidth -= f);
    var h = n.barMaxWidth;
    h && (l[u].maxWidth = h);
    var v = n.barMinWidth;
    v && (l[u].minWidth = v);
    var c = n.barGap;
    c != null && (s.gap = c);
    var p = n.barCategoryGap;
    p != null && (s.categoryGap = p);
  });
  var e = {};
  return D(t, function(n, i) {
    e[i] = {};
    var a = n.stacks, o = n.bandWidth, s = n.categoryGap;
    if (s == null) {
      var l = gt(a).length;
      s = Math.max(35 - l * 4, 15) + "%";
    }
    var u = ct(s, o), f = ct(n.gap, 1), h = n.remainedWidth, v = n.autoWidthCount, c = (h - u) / (v + (v - 1) * f);
    c = Math.max(c, 0), D(a, function(y) {
      var m = y.maxWidth, _ = y.minWidth;
      if (y.width) {
        var S = y.width;
        m && (S = Math.min(S, m)), _ && (S = Math.max(S, _)), y.width = S, h -= S + f * S, v--;
      } else {
        var S = c;
        m && m < S && (S = Math.min(m, h)), _ && _ > S && (S = _), S !== c && (y.width = S, h -= S + f * S, v--);
      }
    }), c = (h - u) / (v + (v - 1) * f), c = Math.max(c, 0);
    var p = 0, d;
    D(a, function(y, m) {
      y.width || (y.width = c), d = y, p += y.width * (1 + f);
    }), d && (p -= d.width * f);
    var g = -p / 2;
    D(a, function(y, m) {
      e[i][m] = e[i][m] || {
        bandWidth: o,
        offset: g,
        width: y.width
      }, g += y.width * (1 + f);
    });
  }), e;
}
function GA(r, t, e) {
  if (r && t) {
    var n = r[Gc(t)];
    return n;
  }
}
function WA(r, t) {
  var e = C_(r, t), n = D_(e);
  D(e, function(i) {
    var a = i.getData(), o = i.coordinateSystem, s = o.getBaseAxis(), l = T_(i), u = n[Gc(s)][l], f = u.offset, h = u.width;
    a.setLayout({
      bandWidth: u.bandWidth,
      offset: f,
      size: h
    });
  });
}
function UA(r) {
  return {
    seriesType: r,
    plan: Ac(),
    reset: function(t) {
      if (M_(t)) {
        var e = t.getData(), n = t.coordinateSystem, i = n.getBaseAxis(), a = n.getOtherAxis(i), o = e.getDimensionIndex(e.mapDimension(a.dim)), s = e.getDimensionIndex(e.mapDimension(i.dim)), l = t.get("showBackground", !0), u = e.mapDimension(a.dim), f = e.getCalculationInfo("stackResultDimension"), h = zn(e, u) && !!e.getCalculationInfo("stackedOnSeries"), v = a.isHorizontal(), c = YA(i, a), p = A_(t), d = t.get("barMinHeight") || 0, g = f && e.getDimensionIndex(f), y = e.getLayout("size"), m = e.getLayout("offset");
        return {
          progress: function(_, S) {
            for (var w = _.count, b = p && mr(w * 3), x = p && l && mr(w * 3), T = p && mr(w), A = n.master.getRect(), M = v ? A.width : A.height, C, E = S.getStore(), I = 0; (C = _.next()) != null; ) {
              var P = E.get(h ? g : o, C), O = E.get(s, C), R = c, F = void 0;
              h && (F = +P - E.get(o, C));
              var N = void 0, V = void 0, L = void 0, k = void 0;
              if (v) {
                var G = n.dataToPoint([P, O]);
                if (h) {
                  var X = n.dataToPoint([F, O]);
                  R = X[0];
                }
                N = R, V = G[1] + m, L = G[0] - R, k = y, Math.abs(L) < d && (L = (L < 0 ? -1 : 1) * d);
              } else {
                var G = n.dataToPoint([O, P]);
                if (h) {
                  var X = n.dataToPoint([O, F]);
                  R = X[1];
                }
                N = G[0] + m, V = R, L = y, k = G[1] - R, Math.abs(k) < d && (k = (k <= 0 ? -1 : 1) * d);
              }
              p ? (b[I] = N, b[I + 1] = V, b[I + 2] = v ? L : k, x && (x[I] = v ? A.x : N, x[I + 1] = v ? V : A.y, x[I + 2] = M), T[C] = C) : S.setItemLayout(C, {
                x: N,
                y: V,
                width: L,
                height: k
              }), I += 3;
            }
            p && S.setLayout({
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
function M_(r) {
  return r.coordinateSystem && r.coordinateSystem.type === "cartesian2d";
}
function A_(r) {
  return r.pipelineContext && r.pipelineContext.large;
}
function YA(r, t) {
  var e = t.model.get("startValue");
  return e || (e = 0), t.toGlobalCoord(t.dataToCoord(t.type === "log" ? e > 0 ? e : 1 : e));
}
var XA = function(r, t, e, n) {
  for (; e < n; ) {
    var i = e + n >>> 1;
    r[i][1] < t ? e = i + 1 : n = i;
  }
  return e;
}, E_ = (
  /** @class */
  (function(r) {
    z(t, r);
    function t(e) {
      var n = r.call(this, e) || this;
      return n.type = "time", n;
    }
    return t.prototype.getLabel = function(e) {
      var n = this.getSetting("useUTC");
      return go(e.value, Np[uC(mi(this._minLevelUnit))] || Np.second, n, this.getSetting("locale"));
    }, t.prototype.getFormattedLabel = function(e, n, i) {
      var a = this.getSetting("useUTC"), o = this.getSetting("locale");
      return fC(e, n, i, o, a);
    }, t.prototype.getTicks = function() {
      var e = this._interval, n = this._extent, i = [];
      if (!e)
        return i;
      i.push({
        value: n[0],
        level: 0
      });
      var a = this.getSetting("useUTC"), o = JA(this._minLevelUnit, this._approxInterval, a, n);
      return i = i.concat(o), i.push({
        value: n[1],
        level: 0
      }), i;
    }, t.prototype.calcNiceExtent = function(e) {
      var n = this._extent;
      if (n[0] === n[1] && (n[0] -= Me, n[1] += Me), n[1] === -1 / 0 && n[0] === 1 / 0) {
        var i = /* @__PURE__ */ new Date();
        n[1] = +new Date(i.getFullYear(), i.getMonth(), i.getDate()), n[0] = n[1] - Me;
      }
      this.calcNiceTicks(e.splitNumber, e.minInterval, e.maxInterval);
    }, t.prototype.calcNiceTicks = function(e, n, i) {
      e = e || 10;
      var a = this._extent, o = a[1] - a[0];
      this._approxInterval = o / e, n != null && this._approxInterval < n && (this._approxInterval = n), i != null && this._approxInterval > i && (this._approxInterval = i);
      var s = Zo.length, l = Math.min(XA(Zo, this._approxInterval, 0, s), s - 1);
      this._interval = Zo[l][1], this._minLevelUnit = Zo[Math.max(l - 1, 0)][0];
    }, t.prototype.parse = function(e) {
      return dt(e) ? e : +Ae(e);
    }, t.prototype.contain = function(e) {
      return zl(this.parse(e), this._extent);
    }, t.prototype.normalize = function(e) {
      return Fl(this.parse(e), this._extent);
    }, t.prototype.scale = function(e) {
      return Hl(e, this._extent);
    }, t.type = "time", t;
  })(Pi)
), Zo = [
  // Format                           interval
  ["second", dc],
  ["minute", gc],
  ["hour", Pa],
  ["quarter-day", Pa * 6],
  ["half-day", Pa * 12],
  ["day", Me * 1.2],
  ["half-week", Me * 3.5],
  ["week", Me * 7],
  ["month", Me * 31],
  ["quarter", Me * 95],
  ["half-year", Rp / 2],
  ["year", Rp]
  // 1Y
];
function $A(r, t, e, n) {
  var i = Ae(t), a = Ae(e), o = function(p) {
    return kp(i, p, n) === kp(a, p, n);
  }, s = function() {
    return o("year");
  }, l = function() {
    return s() && o("month");
  }, u = function() {
    return l() && o("day");
  }, f = function() {
    return u() && o("hour");
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
      return l();
    case "day":
      return u();
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
function qA(r, t) {
  return r /= Me, r > 16 ? 16 : r > 7.5 ? 7 : r > 3.5 ? 4 : r > 1.5 ? 2 : 1;
}
function ZA(r) {
  var t = 30 * Me;
  return r /= t, r > 6 ? 6 : r > 3 ? 3 : r > 2 ? 2 : 1;
}
function jA(r) {
  return r /= Pa, r > 12 ? 12 : r > 6 ? 6 : r > 3.5 ? 4 : r > 2 ? 2 : 1;
}
function Ud(r, t) {
  return r /= t ? gc : dc, r > 30 ? 30 : r > 20 ? 20 : r > 15 ? 15 : r > 10 ? 10 : r > 5 ? 5 : r > 2 ? 2 : 1;
}
function KA(r) {
  return Jh(r, !0);
}
function QA(r, t, e) {
  var n = new Date(r);
  switch (mi(t)) {
    case "year":
    case "month":
      n[t0(e)](0);
    case "day":
      n[e0(e)](1);
    case "hour":
      n[r0(e)](0);
    case "minute":
      n[n0(e)](0);
    case "second":
      n[i0(e)](0), n[a0(e)](0);
  }
  return n.getTime();
}
function JA(r, t, e, n) {
  var i = 1e4, a = Qm, o = 0;
  function s(M, C, E, I, P, O, R) {
    for (var F = new Date(C), N = C, V = F[I](); N < E && N <= n[1]; )
      R.push({
        value: N
      }), V += M, F[P](V), N = F.getTime();
    R.push({
      value: N,
      notAdd: !0
    });
  }
  function l(M, C, E) {
    var I = [], P = !C.length;
    if (!$A(mi(M), n[0], n[1], e)) {
      P && (C = [{
        // TODO Optimize. Not include so may ticks.
        value: QA(new Date(n[0]), M, e)
      }, {
        value: n[1]
      }]);
      for (var O = 0; O < C.length - 1; O++) {
        var R = C[O].value, F = C[O + 1].value;
        if (R !== F) {
          var N = void 0, V = void 0, L = void 0, k = !1;
          switch (M) {
            case "year":
              N = Math.max(1, Math.round(t / Me / 365)), V = yc(e), L = hC(e);
              break;
            case "half-year":
            case "quarter":
            case "month":
              N = ZA(t), V = _i(e), L = t0(e);
              break;
            case "week":
            // PENDING If week is added. Ignore day.
            case "half-week":
            case "day":
              N = qA(t), V = El(e), L = e0(e), k = !0;
              break;
            case "half-day":
            case "quarter-day":
            case "hour":
              N = jA(t), V = qa(e), L = r0(e);
              break;
            case "minute":
              N = Ud(t, !0), V = Il(e), L = n0(e);
              break;
            case "second":
              N = Ud(t, !1), V = Ll(e), L = i0(e);
              break;
            case "millisecond":
              N = KA(t), V = Pl(e), L = a0(e);
              break;
          }
          s(N, R, F, V, L, k, I), M === "year" && E.length > 1 && O === 0 && E.unshift({
            value: E[0].value - N
          });
        }
      }
      for (var O = 0; O < I.length; O++)
        E.push(I[O]);
      return I;
    }
  }
  for (var u = [], f = [], h = 0, v = 0, c = 0; c < a.length && o++ < i; ++c) {
    var p = mi(a[c]);
    if (lC(a[c])) {
      l(a[c], u[u.length - 1] || [], f);
      var d = a[c + 1] ? mi(a[c + 1]) : null;
      if (p !== d) {
        if (f.length) {
          v = h, f.sort(function(M, C) {
            return M.value - C.value;
          });
          for (var g = [], y = 0; y < f.length; ++y) {
            var m = f[y].value;
            (y === 0 || f[y - 1].value !== m) && (g.push(f[y]), m >= n[0] && m <= n[1] && h++);
          }
          var _ = (n[1] - n[0]) / t;
          if (h > _ * 1.5 && v > _ / 1.5 || (u.push(g), h > _ || r === a[c]))
            break;
        }
        f = [];
      }
    }
  }
  process.env.NODE_ENV !== "production" && o >= i && Vt("Exceed safe limit.");
  for (var S = At(Y(u, function(M) {
    return At(M, function(C) {
      return C.value >= n[0] && C.value <= n[1] && !C.notAdd;
    });
  }), function(M) {
    return M.length > 0;
  }), w = [], b = S.length - 1, c = 0; c < S.length; ++c)
    for (var x = S[c], T = 0; T < x.length; ++T)
      w.push({
        value: x[T].value,
        level: b - c
      });
  w.sort(function(M, C) {
    return M.value - C.value;
  });
  for (var A = [], c = 0; c < w.length; ++c)
    (c === 0 || w[c].value !== w[c - 1].value) && A.push(w[c]);
  return A;
}
lr.registerClass(E_);
var Yd = lr.prototype, Na = Pi.prototype, tE = Dt, eE = Math.floor, rE = Math.ceil, jo = Math.pow, Oe = Math.log, Wc = (
  /** @class */
  (function(r) {
    z(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = "log", e.base = 10, e._originalScale = new Pi(), e._interval = 0, e;
    }
    return t.prototype.getTicks = function(e) {
      var n = this._originalScale, i = this._extent, a = n.getExtent(), o = Na.getTicks.call(this, e);
      return Y(o, function(s) {
        var l = s.value, u = Dt(jo(this.base, l));
        return u = l === i[0] && this._fixMin ? Ko(u, a[0]) : u, u = l === i[1] && this._fixMax ? Ko(u, a[1]) : u, {
          value: u
        };
      }, this);
    }, t.prototype.setExtent = function(e, n) {
      var i = Oe(this.base);
      e = Oe(Math.max(0, e)) / i, n = Oe(Math.max(0, n)) / i, Na.setExtent.call(this, e, n);
    }, t.prototype.getExtent = function() {
      var e = this.base, n = Yd.getExtent.call(this);
      n[0] = jo(e, n[0]), n[1] = jo(e, n[1]);
      var i = this._originalScale, a = i.getExtent();
      return this._fixMin && (n[0] = Ko(n[0], a[0])), this._fixMax && (n[1] = Ko(n[1], a[1])), n;
    }, t.prototype.unionExtent = function(e) {
      this._originalScale.unionExtent(e);
      var n = this.base;
      e[0] = Oe(e[0]) / Oe(n), e[1] = Oe(e[1]) / Oe(n), Yd.unionExtent.call(this, e);
    }, t.prototype.unionExtentFromData = function(e, n) {
      this.unionExtent(e.getApproximateExtent(n));
    }, t.prototype.calcNiceTicks = function(e) {
      e = e || 10;
      var n = this._extent, i = n[1] - n[0];
      if (!(i === 1 / 0 || i <= 0)) {
        var a = nm(i), o = e / i * a;
        for (o <= 0.5 && (a *= 10); !isNaN(a) && Math.abs(a) < 1 && Math.abs(a) > 0; )
          a *= 10;
        var s = [Dt(rE(n[0] / a) * a), Dt(eE(n[1] / a) * a)];
        this._interval = a, this._niceExtent = s;
      }
    }, t.prototype.calcNiceExtent = function(e) {
      Na.calcNiceExtent.call(this, e), this._fixMin = e.fixMin, this._fixMax = e.fixMax;
    }, t.prototype.parse = function(e) {
      return e;
    }, t.prototype.contain = function(e) {
      return e = Oe(e) / Oe(this.base), zl(e, this._extent);
    }, t.prototype.normalize = function(e) {
      return e = Oe(e) / Oe(this.base), Fl(e, this._extent);
    }, t.prototype.scale = function(e) {
      return e = Hl(e, this._extent), jo(this.base, e);
    }, t.type = "log", t;
  })(lr)
), I_ = Wc.prototype;
I_.getMinorTicks = Na.getMinorTicks;
I_.getLabel = Na.getLabel;
function Ko(r, t) {
  return tE(r, er(t));
}
lr.registerClass(Wc);
var nE = (
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
      $(o) ? this._modelMinNum = Qo(t, o({
        min: n[0],
        max: n[1]
      })) : o !== "dataMin" && (this._modelMinNum = Qo(t, o));
      var s = this._modelMaxRaw = e.get("max", !0);
      if ($(s) ? this._modelMaxNum = Qo(t, s({
        min: n[0],
        max: n[1]
      })) : s !== "dataMax" && (this._modelMaxNum = Qo(t, s)), i)
        this._axisDataLen = e.getCategories().length;
      else {
        var l = e.get("boundaryGap"), u = H(l) ? l : [l || 0, l || 0];
        typeof u[0] == "boolean" || typeof u[1] == "boolean" ? (process.env.NODE_ENV !== "production" && console.warn('Boolean type for boundaryGap is only allowed for ordinal axis. Please use string in percentage instead, e.g., "20%". Currently, boundaryGap is set to be 0.'), this._boundaryGapInner = [0, 0]) : this._boundaryGapInner = [ir(u[0], 1), ir(u[1], 1)];
      }
    }, r.prototype.calculate = function() {
      var t = this._isOrdinal, e = this._dataMin, n = this._dataMax, i = this._axisDataLen, a = this._boundaryGapInner, o = t ? null : n - e || Math.abs(e), s = this._modelMinRaw === "dataMin" ? e : this._modelMinNum, l = this._modelMaxRaw === "dataMax" ? n : this._modelMaxNum, u = s != null, f = l != null;
      s == null && (s = t ? i ? 0 : NaN : e - a[0] * o), l == null && (l = t ? i ? i - 1 : NaN : n + a[1] * o), (s == null || !isFinite(s)) && (s = NaN), (l == null || !isFinite(l)) && (l = NaN);
      var h = bi(s) || bi(l) || t && !i;
      this._needCrossZero && (s > 0 && l > 0 && !u && (s = 0), s < 0 && l < 0 && !f && (l = 0));
      var v = this._determinedMin, c = this._determinedMax;
      return v != null && (s = v, u = !0), c != null && (l = c, f = !0), {
        min: s,
        max: l,
        minFixed: u,
        maxFixed: f,
        isBlank: h
      };
    }, r.prototype.modifyDataMinMax = function(t, e) {
      process.env.NODE_ENV !== "production" && tt(!this.frozen), this[aE[t]] = e;
    }, r.prototype.setDeterminedMinMax = function(t, e) {
      var n = iE[t];
      process.env.NODE_ENV !== "production" && tt(!this.frozen && this[n] == null), this[n] = e;
    }, r.prototype.freeze = function() {
      this.frozen = !0;
    }, r;
  })()
), iE = {
  min: "_determinedMin",
  max: "_determinedMax"
}, aE = {
  min: "_dataMin",
  max: "_dataMax"
};
function oE(r, t, e) {
  var n = r.rawExtentInfo;
  return n || (n = new nE(r, t, e), r.rawExtentInfo = n, n);
}
function Qo(r, t) {
  return t == null ? null : bi(t) ? NaN : r.parse(t);
}
function L_(r, t) {
  var e = r.type, n = oE(r, t, r.getExtent()).calculate();
  r.setBlank(n.isBlank);
  var i = n.min, a = n.max, o = t.ecModel;
  if (o && e === "time") {
    var s = C_("bar", o), l = !1;
    if (D(s, function(h) {
      l = l || h.getBaseAxis() === t.axis;
    }), l) {
      var u = D_(s), f = sE(i, a, t, u);
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
function sE(r, t, e, n) {
  var i = e.axis.getExtent(), a = Math.abs(i[1] - i[0]), o = GA(n, e.axis);
  if (o === void 0)
    return {
      min: r,
      max: t
    };
  var s = 1 / 0;
  D(o, function(c) {
    s = Math.min(c.offset, s);
  });
  var l = -1 / 0;
  D(o, function(c) {
    l = Math.max(c.offset + c.width, l);
  }), s = Math.abs(s), l = Math.abs(l);
  var u = s + l, f = t - r, h = 1 - (s + l) / a, v = f / h - f;
  return t += v * (l / u), r -= v * (s / u), {
    min: r,
    max: t
  };
}
function mh(r, t) {
  var e = t, n = L_(r, e), i = n.extent, a = e.get("splitNumber");
  r instanceof Wc && (r.base = e.get("logBase"));
  var o = r.type, s = e.get("interval"), l = o === "interval" || o === "time";
  r.setExtent(i[0], i[1]), r.calcNiceExtent({
    splitNumber: a,
    fixMin: n.fixMin,
    fixMax: n.fixMax,
    minInterval: l ? e.get("minInterval") : null,
    maxInterval: l ? e.get("maxInterval") : null
  }), s != null && r.setInterval && r.setInterval(s);
}
function P_(r, t) {
  if (t = t || r.get("type"), t)
    switch (t) {
      // Buildin scale
      case "category":
        return new Hc({
          ordinalMeta: r.getOrdinalMeta ? r.getOrdinalMeta() : r.getCategories(),
          extent: [1 / 0, -1 / 0]
        });
      case "time":
        return new E_({
          locale: r.ecModel.getLocaleModel(),
          useUTC: r.ecModel.get("useUTC")
        });
      default:
        return new (lr.getClass(t) || Pi)();
    }
}
function lE(r) {
  var t = r.scale.getExtent(), e = t[0], n = t[1];
  return !(e > 0 && n > 0 || e < 0 && n < 0);
}
function Oi(r) {
  var t = r.getLabelModel().get("formatter"), e = r.type === "category" ? r.scale.getExtent()[0] : null;
  return r.scale.type === "time" ? /* @__PURE__ */ (function(n) {
    return function(i, a) {
      return r.scale.getFormattedLabel(i, a, n);
    };
  })(t) : U(t) ? /* @__PURE__ */ (function(n) {
    return function(i) {
      var a = r.scale.getLabel(i), o = n.replace("{value}", a ?? "");
      return o;
    };
  })(t) : $(t) ? /* @__PURE__ */ (function(n) {
    return function(i, a) {
      return e != null && (a = i.value - e), n(Uc(r, i), a, i.level != null ? {
        level: i.level
      } : null);
    };
  })(t) : function(n) {
    return r.scale.getLabel(n);
  };
}
function Uc(r, t) {
  return r.type === "category" ? r.scale.getLabel(t) : t.value;
}
function uE(r) {
  var t = r.model, e = r.scale;
  if (!(!t.get(["axisLabel", "show"]) || e.isBlank())) {
    var n, i, a = e.getExtent();
    e instanceof Hc ? i = e.count() : (n = e.getTicks(), i = n.length);
    var o = r.getLabelModel(), s = Oi(r), l, u = 1;
    i > 40 && (u = Math.ceil(i / 40));
    for (var f = 0; f < i; f += u) {
      var h = n ? n[f] : {
        value: a[0] + f
      }, v = s(h, f), c = o.getTextRect(v), p = fE(c, o.get("rotate") || 0);
      l ? l.union(p) : l = p;
    }
    return l;
  }
}
function fE(r, t) {
  var e = t * Math.PI / 180, n = r.width, i = r.height, a = n * Math.abs(Math.cos(e)) + Math.abs(i * Math.sin(e)), o = n * Math.abs(Math.sin(e)) + Math.abs(i * Math.cos(e)), s = new lt(r.x, r.y, a, o);
  return s;
}
function Yc(r) {
  var t = r.get("interval");
  return t ?? "auto";
}
function O_(r) {
  return r.type === "category" && Yc(r.getLabelModel()) === 0;
}
function hE(r, t) {
  var e = {};
  return D(r.mapDimensionsAll(t), function(n) {
    e[b_(r, n)] = !0;
  }), gt(e);
}
var R_ = (
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
function cE(r) {
  return Li(null, r);
}
var vE = {
  isDimensionStacked: zn,
  enableDataStack: S_,
  getStackedDimension: b_
};
function pE(r, t) {
  var e = t;
  t instanceof mt || (e = new mt(t));
  var n = P_(e);
  return n.setExtent(r[0], r[1]), mh(n, e), n;
}
function dE(r) {
  Ie(r, R_);
}
function gE(r, t) {
  return t = t || {}, de(r, null, null, t.state !== "normal");
}
const yE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createDimensions: bA,
  createList: cE,
  createScale: pE,
  createSymbol: Ue,
  createTextStyle: gE,
  dataStack: vE,
  enableHoverEmphasis: Hs,
  getECData: at,
  getLayoutRect: ar,
  mixinAxisModelCommonMethods: dE
}, Symbol.toStringTag, { value: "Module" }));
var Xd = [], mE = {
  registerPreprocessor: Nc,
  registerProcessor: kc,
  registerPostInit: u_,
  registerPostUpdate: f_,
  registerUpdateLifecycle: Bl,
  registerAction: Wn,
  registerCoordinateSystem: h_,
  registerLayout: c_,
  registerVisual: Qr,
  registerTransform: p_,
  registerLoading: Bc,
  registerMap: v_,
  registerImpl: kM,
  PRIORITY: t_,
  ComponentModel: ot,
  ComponentView: ne,
  SeriesModel: zt,
  ChartView: Pt,
  // TODO Use ComponentModel and SeriesModel instead of Constructor
  registerComponentModel: function(r) {
    ot.registerClass(r);
  },
  registerComponentView: function(r) {
    ne.registerClass(r);
  },
  registerSeriesModel: function(r) {
    zt.registerClass(r);
  },
  registerChartView: function(r) {
    Pt.registerClass(r);
  },
  registerSubTypeDefaulter: function(r, t) {
    ot.registerSubTypeDefaulter(r, t);
  },
  registerPainter: function(r, t) {
    Qy(r, t);
  }
};
function Ft(r) {
  if (H(r)) {
    D(r, function(t) {
      Ft(t);
    });
    return;
  }
  vt(Xd, r) >= 0 || (Xd.push(r), $(r) && (r = {
    install: r
  }), r.install(mE));
}
var _E = 1e-8;
function $d(r, t) {
  return Math.abs(r - t) < _E;
}
function qd(r, t, e) {
  var n = 0, i = r[0];
  if (!i)
    return !1;
  for (var a = 1; a < r.length; a++) {
    var o = r[a];
    n += yr(i[0], i[1], o[0], o[1], t, e), i = o;
  }
  var s = r[0];
  return (!$d(i[0], s[0]) || !$d(i[1], s[1])) && (n += yr(i[0], i[1], s[0], s[1], t, e)), n !== 0;
}
var SE = [];
function rf(r, t) {
  for (var e = 0; e < r.length; e++)
    ee(r[e], r[e], t);
}
function Zd(r, t, e, n) {
  for (var i = 0; i < r.length; i++) {
    var a = r[i];
    n && (a = n.project(a)), a && isFinite(a[0]) && isFinite(a[1]) && (Vr(t, t, a), Br(e, e, a));
  }
}
function bE(r) {
  for (var t = 0, e = 0, n = 0, i = r.length, a = r[i - 1][0], o = r[i - 1][1], s = 0; s < i; s++) {
    var l = r[s][0], u = r[s][1], f = a * u - l * o;
    t += f, e += (a + l) * f, n += (o + u) * f, a = l, o = u;
  }
  return t ? [e / t / 3, n / t / 3, t] : [r[0][0] || 0, r[0][1] || 0];
}
var N_ = (
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
), jd = (
  /** @class */
  /* @__PURE__ */ (function() {
    function r(t, e) {
      this.type = "polygon", this.exterior = t, this.interiors = e;
    }
    return r;
  })()
), Kd = (
  /** @class */
  /* @__PURE__ */ (function() {
    function r(t) {
      this.type = "linestring", this.points = t;
    }
    return r;
  })()
), wE = (
  /** @class */
  (function(r) {
    z(t, r);
    function t(e, n, i) {
      var a = r.call(this, e) || this;
      return a.type = "geoJSON", a.geometries = n, a._center = i && [i[0], i[1]], a;
    }
    return t.prototype.calcCenter = function() {
      for (var e = this.geometries, n, i = 0, a = 0; a < e.length; a++) {
        var o = e[a], s = o.exterior, l = s && s.length;
        l > i && (n = o, i = l);
      }
      if (n)
        return bE(n.exterior);
      var u = this.getBoundingRect();
      return [u.x + u.width / 2, u.y + u.height / 2];
    }, t.prototype.getBoundingRect = function(e) {
      var n = this._rect;
      if (n && !e)
        return n;
      var i = [1 / 0, 1 / 0], a = [-1 / 0, -1 / 0], o = this.geometries;
      return D(o, function(s) {
        s.type === "polygon" ? Zd(s.exterior, i, a, e) : D(s.points, function(l) {
          Zd(l, i, a, e);
        });
      }), isFinite(i[0]) && isFinite(i[1]) && isFinite(a[0]) && isFinite(a[1]) || (i[0] = i[1] = a[0] = a[1] = 0), n = new lt(i[0], i[1], a[0] - i[0], a[1] - i[1]), e || (this._rect = n), n;
    }, t.prototype.contain = function(e) {
      var n = this.getBoundingRect(), i = this.geometries;
      if (!n.contain(e[0], e[1]))
        return !1;
      t: for (var a = 0, o = i.length; a < o; a++) {
        var s = i[a];
        if (s.type === "polygon") {
          var l = s.exterior, u = s.interiors;
          if (qd(l, e[0], e[1])) {
            for (var f = 0; f < (u ? u.length : 0); f++)
              if (qd(u[f], e[0], e[1]))
                continue t;
            return !0;
          }
        }
      }
      return !1;
    }, t.prototype.transformTo = function(e, n, i, a) {
      var o = this.getBoundingRect(), s = o.width / o.height;
      i ? a || (a = i / s) : i = s * a;
      for (var l = new lt(e, n, i, a), u = o.calculateTransform(l), f = this.geometries, h = 0; h < f.length; h++) {
        var v = f[h];
        v.type === "polygon" ? (rf(v.exterior, u), D(v.interiors, function(c) {
          rf(c, u);
        })) : D(v.points, function(c) {
          rf(c, u);
        });
      }
      o = this._rect, o.copy(l), this._center = [o.x + o.width / 2, o.y + o.height / 2];
    }, t.prototype.cloneShallow = function(e) {
      e == null && (e = this.name);
      var n = new t(e, this.geometries, this._center);
      return n._rect = this._rect, n.transformTo = null, n;
    }, t;
  })(N_)
);
(function(r) {
  z(t, r);
  function t(e, n) {
    var i = r.call(this, e) || this;
    return i.type = "geoSVG", i._elOnlyForCalculate = n, i;
  }
  return t.prototype.calcCenter = function() {
    for (var e = this._elOnlyForCalculate, n = e.getBoundingRect(), i = [n.x + n.width / 2, n.y + n.height / 2], a = ao(SE), o = e; o && !o.isGeoSVGGraphicRoot; )
      $r(a, o.getLocalTransform(), a), o = o.parent;
    return oo(a, a), ee(i, i, a), i;
  }, t;
})(N_);
function xE(r) {
  if (!r.UTF8Encoding)
    return r;
  var t = r, e = t.UTF8Scale;
  e == null && (e = 1024);
  var n = t.features;
  return D(n, function(i) {
    var a = i.geometry, o = a.encodeOffsets, s = a.coordinates;
    if (o)
      switch (a.type) {
        case "LineString":
          a.coordinates = k_(s, o, e);
          break;
        case "Polygon":
          nf(s, o, e);
          break;
        case "MultiLineString":
          nf(s, o, e);
          break;
        case "MultiPolygon":
          D(s, function(l, u) {
            return nf(l, o[u], e);
          });
      }
  }), t.UTF8Encoding = !1, t;
}
function nf(r, t, e) {
  for (var n = 0; n < r.length; n++)
    r[n] = k_(r[n], t[n], e);
}
function k_(r, t, e) {
  for (var n = [], i = t[0], a = t[1], o = 0; o < r.length; o += 2) {
    var s = r.charCodeAt(o) - 64, l = r.charCodeAt(o + 1) - 64;
    s = s >> 1 ^ -(s & 1), l = l >> 1 ^ -(l & 1), s += i, l += a, i = s, a = l, n.push([s / e, l / e]);
  }
  return n;
}
function Qd(r, t) {
  return r = xE(r), Y(At(r.features, function(e) {
    return e.geometry && e.properties && e.geometry.coordinates.length > 0;
  }), function(e) {
    var n = e.properties, i = e.geometry, a = [];
    switch (i.type) {
      case "Polygon":
        var o = i.coordinates;
        a.push(new jd(o[0], o.slice(1)));
        break;
      case "MultiPolygon":
        D(i.coordinates, function(l) {
          l[0] && a.push(new jd(l[0], l.slice(1)));
        });
        break;
      case "LineString":
        a.push(new Kd([i.coordinates]));
        break;
      case "MultiLineString":
        a.push(new Kd(i.coordinates));
    }
    var s = new wE(n[t || "name"], a, n.cp);
    return s.properties = n, s;
  });
}
const TE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  MAX_SAFE_INTEGER: ww,
  asc: Kh,
  getPercentWithPrecision: Sw,
  getPixelPrecision: em,
  getPrecision: er,
  getPrecisionSafe: Rs,
  isNumeric: tc,
  isRadianAroundZero: Ga,
  linearMap: ge,
  nice: Jh,
  numericToNumber: Wa,
  parseDate: Ae,
  quantile: Tw,
  quantity: nm,
  quantityExponent: lo,
  reformIntervals: Yf,
  remRadian: Qh,
  round: Dt
}, Symbol.toStringTag, { value: "Module" })), CE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  format: go,
  parse: Ae
}, Symbol.toStringTag, { value: "Module" })), DE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Arc: vo,
  BezierCurve: _l,
  BoundingRect: lt,
  Circle: co,
  CompoundPath: Nm,
  Ellipse: yl,
  Group: xt,
  Image: Ye,
  IncrementalDisplayable: Bm,
  Line: xr,
  LinearGradient: Sl,
  Polygon: Ai,
  Polyline: Hn,
  RadialGradient: Vm,
  Rect: _t,
  Ring: ml,
  Sector: Cr,
  Text: St,
  clipPointsByRect: Xm,
  clipRectByRect: $m,
  createIcon: xl,
  extendPath: Fm,
  extendShape: zm,
  getShapeClass: Hm,
  getTransform: La,
  initProps: fe,
  makeImage: fc,
  makePath: wl,
  mergePath: Wm,
  registerShape: Le,
  resizePath: hc,
  updateProps: Ot
}, Symbol.toStringTag, { value: "Module" })), ME = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  addCommas: mc,
  capitalFirst: pC,
  encodeHTML: te,
  formatTime: vC,
  formatTpl: Sc,
  getTextRect: cC,
  getTooltipMarker: o0,
  normalizeCssArray: Ei,
  toCamelCase: _c,
  truncateText: rx
}, Symbol.toStringTag, { value: "Module" })), AE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  bind: J,
  clone: j,
  curry: wt,
  defaults: ut,
  each: D,
  extend: B,
  filter: At,
  indexOf: vt,
  inherits: zh,
  isArray: H,
  isFunction: $,
  isObject: W,
  isString: U,
  map: Y,
  merge: st,
  reduce: nr
}, Symbol.toStringTag, { value: "Module" }));
var to = Mt();
function V_(r, t) {
  var e = Y(t, function(n) {
    return r.scale.parse(n);
  });
  return r.type === "time" && e.length > 0 && (e.sort(), e.unshift(e[0]), e.push(e[e.length - 1])), e;
}
function EE(r) {
  var t = r.getLabelModel().get("customValues");
  if (t) {
    var e = Oi(r), n = r.scale.getExtent(), i = V_(r, t), a = At(i, function(o) {
      return o >= n[0] && o <= n[1];
    });
    return {
      labels: Y(a, function(o) {
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
  return r.type === "category" ? LE(r) : OE(r);
}
function IE(r, t) {
  var e = r.getTickModel().get("customValues");
  if (e) {
    var n = r.scale.getExtent(), i = V_(r, e);
    return {
      ticks: At(i, function(a) {
        return a >= n[0] && a <= n[1];
      })
    };
  }
  return r.type === "category" ? PE(r, t) : {
    ticks: Y(r.scale.getTicks(), function(a) {
      return a.value;
    })
  };
}
function LE(r) {
  var t = r.getLabelModel(), e = B_(r, t);
  return !t.get("show") || r.scale.isBlank() ? {
    labels: [],
    labelCategoryInterval: e.labelCategoryInterval
  } : e;
}
function B_(r, t) {
  var e = z_(r, "labels"), n = Yc(t), i = F_(e, n);
  if (i)
    return i;
  var a, o;
  return $(n) ? a = W_(r, n) : (o = n === "auto" ? RE(r) : n, a = G_(r, o)), H_(e, n, {
    labels: a,
    labelCategoryInterval: o
  });
}
function PE(r, t) {
  var e = z_(r, "ticks"), n = Yc(t), i = F_(e, n);
  if (i)
    return i;
  var a, o;
  if ((!t.get("show") || r.scale.isBlank()) && (a = []), $(n))
    a = W_(r, n, !0);
  else if (n === "auto") {
    var s = B_(r, r.getLabelModel());
    o = s.labelCategoryInterval, a = Y(s.labels, function(l) {
      return l.tickValue;
    });
  } else
    o = n, a = G_(r, o, !0);
  return H_(e, n, {
    ticks: a,
    tickCategoryInterval: o
  });
}
function OE(r) {
  var t = r.scale.getTicks(), e = Oi(r);
  return {
    labels: Y(t, function(n, i) {
      return {
        level: n.level,
        formattedLabel: e(n, i),
        rawLabel: r.scale.getLabel(n),
        tickValue: n.value
      };
    })
  };
}
function z_(r, t) {
  return to(r)[t] || (to(r)[t] = []);
}
function F_(r, t) {
  for (var e = 0; e < r.length; e++)
    if (r[e].key === t)
      return r[e].value;
}
function H_(r, t, e) {
  return r.push({
    key: t,
    value: e
  }), e;
}
function RE(r) {
  var t = to(r).autoInterval;
  return t ?? (to(r).autoInterval = r.calculateCategoryInterval());
}
function NE(r) {
  var t = kE(r), e = Oi(r), n = (t.axisRotate - t.labelRotate) / 180 * Math.PI, i = r.scale, a = i.getExtent(), o = i.count();
  if (a[1] - a[0] < 1)
    return 0;
  var s = 1;
  o > 40 && (s = Math.max(1, Math.floor(o / 40)));
  for (var l = a[0], u = r.dataToCoord(l + 1) - r.dataToCoord(l), f = Math.abs(u * Math.cos(n)), h = Math.abs(u * Math.sin(n)), v = 0, c = 0; l <= a[1]; l += s) {
    var p = 0, d = 0, g = Zh(e({
      value: l
    }), t.font, "center", "top");
    p = g.width * 1.3, d = g.height * 1.3, v = Math.max(v, p, 7), c = Math.max(c, d, 7);
  }
  var y = v / f, m = c / h;
  isNaN(y) && (y = 1 / 0), isNaN(m) && (m = 1 / 0);
  var _ = Math.max(0, Math.floor(Math.min(y, m))), S = to(r.model), w = r.getExtent(), b = S.lastAutoInterval, x = S.lastTickCount;
  return b != null && x != null && Math.abs(b - _) <= 1 && Math.abs(x - o) <= 1 && b > _ && S.axisExtent0 === w[0] && S.axisExtent1 === w[1] ? _ = b : (S.lastTickCount = o, S.lastAutoInterval = _, S.axisExtent0 = w[0], S.axisExtent1 = w[1]), _;
}
function kE(r) {
  var t = r.getLabelModel();
  return {
    axisRotate: r.getRotate ? r.getRotate() : r.isHorizontal && !r.isHorizontal() ? 90 : 0,
    labelRotate: t.get("rotate") || 0,
    font: t.getFont()
  };
}
function G_(r, t, e) {
  var n = Oi(r), i = r.scale, a = i.getExtent(), o = r.getLabelModel(), s = [], l = Math.max((t || 0) + 1, 1), u = a[0], f = i.count();
  u !== 0 && l > 1 && f / l > 2 && (u = Math.round(Math.ceil(u / l) * l));
  var h = O_(r), v = o.get("showMinLabel") || h, c = o.get("showMaxLabel") || h;
  v && u !== a[0] && d(a[0]);
  for (var p = u; p <= a[1]; p += l)
    d(p);
  c && p - l !== a[1] && d(a[1]);
  function d(g) {
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
function W_(r, t, e) {
  var n = r.scale, i = Oi(r), a = [];
  return D(n.getTicks(), function(o) {
    var s = n.getLabel(o), l = o.value;
    t(o.value, s) && a.push(e ? l : {
      formattedLabel: i(o),
      rawLabel: s,
      tickValue: l
    });
  }), a;
}
var Jd = [0, 1], U_ = (
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
      return em(t || this.scale.getExtent(), this._extent);
    }, r.prototype.setExtent = function(t, e) {
      var n = this._extent;
      n[0] = t, n[1] = e;
    }, r.prototype.dataToCoord = function(t, e) {
      var n = this._extent, i = this.scale;
      return t = i.normalize(t), this.onBand && i.type === "ordinal" && (n = n.slice(), tg(n, i.count())), ge(t, Jd, n, e);
    }, r.prototype.coordToData = function(t, e) {
      var n = this._extent, i = this.scale;
      this.onBand && i.type === "ordinal" && (n = n.slice(), tg(n, i.count()));
      var a = ge(t, n, Jd, e);
      return this.scale.scale(a);
    }, r.prototype.pointToData = function(t, e) {
    }, r.prototype.getTicksCoords = function(t) {
      t = t || {};
      var e = t.tickModel || this.getTickModel(), n = IE(this, e), i = n.ticks, a = Y(i, function(s) {
        return {
          coord: this.dataToCoord(this.scale.type === "ordinal" ? this.scale.getRawOrdinalNumber(s) : s),
          tickValue: s
        };
      }, this), o = e.get("alignWithLabel");
      return VE(this, a, o, t.clamp), a;
    }, r.prototype.getMinorTicksCoords = function() {
      if (this.scale.type === "ordinal")
        return [];
      var t = this.model.getModel("minorTick"), e = t.get("splitNumber");
      e > 0 && e < 100 || (e = 5);
      var n = this.scale.getMinorTicks(e), i = Y(n, function(a) {
        return Y(a, function(o) {
          return {
            coord: this.dataToCoord(o),
            tickValue: o
          };
        }, this);
      }, this);
      return i;
    }, r.prototype.getViewLabels = function() {
      return EE(this).labels;
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
      return NE(this);
    }, r;
  })()
);
function tg(r, t) {
  var e = r[1] - r[0], n = t, i = e / n / 2;
  r[0] += i, r[1] -= i;
}
function VE(r, t, e, n) {
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
    var l = t[i - 1].tickValue - t[0].tickValue, u = (t[i - 1].coord - t[0].coord) / l;
    D(t, function(c) {
      c.coord -= u / 2;
    });
    var f = r.scale.getExtent();
    s = 1 + f[1] - t[i - 1].tickValue, o = {
      coord: t[i - 1].coord + u * s,
      tickValue: f[1] + 1
    }, t.push(o);
  }
  var h = a[0] > a[1];
  v(t[0].coord, a[0]) && (n ? t[0].coord = a[0] : t.shift()), n && v(a[0], t[0].coord) && t.unshift({
    coord: a[0]
  }), v(a[1], o.coord) && (n ? o.coord = a[1] : t.pop()), n && v(o.coord, a[1]) && t.push({
    coord: a[1]
  });
  function v(c, p) {
    return c = Dt(c), p = Dt(p), h ? c > p : c < p;
  }
}
function BE(r) {
  var t = ot.extend(r);
  return ot.registerClass(t), t;
}
function zE(r) {
  var t = ne.extend(r);
  return ne.registerClass(t), t;
}
function FE(r) {
  var t = zt.extend(r);
  return zt.registerClass(t), t;
}
function HE(r) {
  var t = Pt.extend(r);
  return Pt.registerClass(t), t;
}
function Y_(r, t, e, n, i, a, o, s) {
  var l = i - r, u = a - t, f = e - r, h = n - t, v = Math.sqrt(f * f + h * h);
  f /= v, h /= v;
  var c = l * f + u * h, p = c / v;
  p *= v;
  var d = o[0] = r + p * f, g = o[1] = t + p * h;
  return Math.sqrt((d - i) * (d - i) + (g - a) * (g - a));
}
var Hr = new K(), Tt = new K(), Nt = new K(), Gr = new K(), tr = new K(), nl = [], Qt = new K();
function GE(r, t) {
  if (t <= 180 && t > 0) {
    t = t / 180 * Math.PI, Hr.fromArray(r[0]), Tt.fromArray(r[1]), Nt.fromArray(r[2]), K.sub(Gr, Hr, Tt), K.sub(tr, Nt, Tt);
    var e = Gr.len(), n = tr.len();
    if (!(e < 1e-3 || n < 1e-3)) {
      Gr.scale(1 / e), tr.scale(1 / n);
      var i = Gr.dot(tr), a = Math.cos(t);
      if (a < i) {
        var o = Y_(Tt.x, Tt.y, Nt.x, Nt.y, Hr.x, Hr.y, nl);
        Qt.fromArray(nl), Qt.scaleAndAdd(tr, o / Math.tan(Math.PI - t));
        var s = Nt.x !== Tt.x ? (Qt.x - Tt.x) / (Nt.x - Tt.x) : (Qt.y - Tt.y) / (Nt.y - Tt.y);
        if (isNaN(s))
          return;
        s < 0 ? K.copy(Qt, Tt) : s > 1 && K.copy(Qt, Nt), Qt.toArray(r[1]);
      }
    }
  }
}
function WE(r, t, e) {
  if (e <= 180 && e > 0) {
    e = e / 180 * Math.PI, Hr.fromArray(r[0]), Tt.fromArray(r[1]), Nt.fromArray(r[2]), K.sub(Gr, Tt, Hr), K.sub(tr, Nt, Tt);
    var n = Gr.len(), i = tr.len();
    if (!(n < 1e-3 || i < 1e-3)) {
      Gr.scale(1 / n), tr.scale(1 / i);
      var a = Gr.dot(t), o = Math.cos(e);
      if (a < o) {
        var s = Y_(Tt.x, Tt.y, Nt.x, Nt.y, Hr.x, Hr.y, nl);
        Qt.fromArray(nl);
        var l = Math.PI / 2, u = Math.acos(tr.dot(t)), f = l + u - e;
        if (f >= l)
          K.copy(Qt, Nt);
        else {
          Qt.scaleAndAdd(tr, s / Math.tan(Math.PI / 2 - f));
          var h = Nt.x !== Tt.x ? (Qt.x - Tt.x) / (Nt.x - Tt.x) : (Qt.y - Tt.y) / (Nt.y - Tt.y);
          if (isNaN(h))
            return;
          h < 0 ? K.copy(Qt, Tt) : h > 1 && K.copy(Qt, Nt);
        }
        Qt.toArray(r[1]);
      }
    }
  }
}
function af(r, t, e, n) {
  var i = e === "normal", a = i ? r : r.ensureState(e);
  a.ignore = t;
  var o = n.get("smooth");
  o && o === !0 && (o = 0.3), a.shape = a.shape || {}, o > 0 && (a.shape.smooth = o);
  var s = n.getModel("lineStyle").getLineStyle();
  i ? r.useStyle(s) : a.style = s;
}
function UE(r, t) {
  var e = t.smooth, n = t.points;
  if (n)
    if (r.moveTo(n[0][0], n[0][1]), e > 0 && n.length >= 3) {
      var i = Cs(n[0], n[1]), a = Cs(n[1], n[2]);
      if (!i || !a) {
        r.lineTo(n[1][0], n[1][1]), r.lineTo(n[2][0], n[2][1]);
        return;
      }
      var o = Math.min(i, a) * e, s = ls([], n[1], n[0], o / i), l = ls([], n[1], n[2], o / a), u = ls([], s, l, 0.5);
      r.bezierCurveTo(s[0], s[1], s[0], s[1], u[0], u[1]), r.bezierCurveTo(l[0], l[1], l[0], l[1], n[2][0], n[2][1]);
    } else
      for (var f = 1; f < n.length; f++)
        r.lineTo(n[f][0], n[f][1]);
}
function X_(r, t, e) {
  var n = r.getTextGuideLine(), i = r.getTextContent();
  if (!i) {
    n && r.removeTextGuideLine();
    return;
  }
  for (var a = t.normal, o = a.get("show"), s = i.ignore, l = 0; l < Bs.length; l++) {
    var u = Bs[l], f = t[u], h = u === "normal";
    if (f) {
      var v = f.get("show"), c = h ? s : Q(i.states[u] && i.states[u].ignore, s);
      if (c || !Q(v, o)) {
        var p = h ? n : n && n.states[u];
        p && (p.ignore = !0), n && af(n, !0, u, f);
        continue;
      }
      n || (n = new Hn(), r.setTextGuideLine(n), !h && (s || !o) && af(n, !0, "normal", t.normal), r.stateProxy && (n.stateProxy = r.stateProxy)), af(n, !1, u, f);
    }
  }
  if (n) {
    ut(n.style, e), n.style.fill = null;
    var d = a.get("showAbove"), g = r.textGuideLineConfig = r.textGuideLineConfig || {};
    g.showAbove = d || !1, n.buildPath = UE;
  }
}
function $_(r, t) {
  t = t || "labelLine";
  for (var e = {
    normal: r.getModel(t)
  }, n = 0; n < Ee.length; n++) {
    var i = Ee[n];
    e[i] = r.getModel([i, t]);
  }
  return e;
}
function YE(r) {
  for (var t = [], e = 0; e < r.length; e++) {
    var n = r[e];
    if (!n.defaultAttr.ignore) {
      var i = n.label, a = i.getComputedTransform(), o = i.getBoundingRect(), s = !a || a[1] < 1e-5 && a[2] < 1e-5, l = i.style.margin || 0, u = o.clone();
      u.applyTransform(a), u.x -= l / 2, u.y -= l / 2, u.width += l, u.height += l;
      var f = s ? new Gs(o, a) : null;
      t.push({
        label: i,
        labelLine: n.labelLine,
        rect: u,
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
function XE(r, t, e, n, i, a) {
  var o = r.length;
  if (o < 2)
    return;
  r.sort(function(b, x) {
    return b.rect[t] - x.rect[t];
  });
  for (var s = 0, l, u = !1, f = 0; f < o; f++) {
    var h = r[f], v = h.rect;
    l = v[t] - s, l < 0 && (v[t] -= l, h.label[t] -= l, u = !0), s = v[t] + v[e];
  }
  var c = r[0], p = r[o - 1], d, g;
  y(), d < 0 && S(-d, 0.8), g < 0 && S(g, 0.8), y(), m(d, g, 1), m(g, d, -1), y(), d < 0 && w(-d), g < 0 && w(g);
  function y() {
    d = c.rect[t] - n, g = i - p.rect[t] - p.rect[e];
  }
  function m(b, x, T) {
    if (b < 0) {
      var A = Math.min(x, -b);
      if (A > 0) {
        _(A * T, 0, o);
        var M = A + b;
        M < 0 && S(-M * T, 1);
      } else
        S(-b * T, 1);
    }
  }
  function _(b, x, T) {
    b !== 0 && (u = !0);
    for (var A = x; A < T; A++) {
      var M = r[A], C = M.rect;
      C[t] += b, M.label[t] += b;
    }
  }
  function S(b, x) {
    for (var T = [], A = 0, M = 1; M < o; M++) {
      var C = r[M - 1].rect, E = Math.max(r[M].rect[t] - C[t] - C[e], 0);
      T.push(E), A += E;
    }
    if (A) {
      var I = Math.min(Math.abs(b) / A, x);
      if (b > 0)
        for (var M = 0; M < o - 1; M++) {
          var P = T[M] * I;
          _(P, 0, M + 1);
        }
      else
        for (var M = o - 1; M > 0; M--) {
          var P = T[M - 1] * I;
          _(-P, M, o);
        }
    }
  }
  function w(b) {
    var x = b < 0 ? -1 : 1;
    b = Math.abs(b);
    for (var T = Math.ceil(b / (o - 1)), A = 0; A < o - 1; A++)
      if (x > 0 ? _(T, 0, A + 1) : _(-T, o - A - 1, o), b -= T, b <= 0)
        return;
  }
  return u;
}
function $E(r, t, e, n) {
  return XE(r, "y", "height", t, e);
}
function qE(r) {
  var t = [];
  r.sort(function(d, g) {
    return g.priority - d.priority;
  });
  var e = new lt(0, 0, 0, 0);
  function n(d) {
    if (!d.ignore) {
      var g = d.ensureState("emphasis");
      g.ignore == null && (g.ignore = !1);
    }
    d.ignore = !0;
  }
  for (var i = 0; i < r.length; i++) {
    var a = r[i], o = a.axisAligned, s = a.localRect, l = a.transform, u = a.label, f = a.labelLine;
    e.copy(a.rect), e.width -= 0.1, e.height -= 0.1, e.x += 0.05, e.y += 0.05;
    for (var h = a.obb, v = !1, c = 0; c < t.length; c++) {
      var p = t[c];
      if (e.intersect(p.rect)) {
        if (o && p.axisAligned) {
          v = !0;
          break;
        }
        if (p.obb || (p.obb = new Gs(p.localRect, p.transform)), h || (h = new Gs(s, l)), h.intersect(p.obb)) {
          v = !0;
          break;
        }
      }
    }
    v ? (n(u), f && n(f)) : (u.attr("ignore", a.defaultAttr.ignore), f && f.attr("ignore", a.defaultAttr.labelGuideIgnore), t.push(a));
  }
}
const Ri = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Axis: U_,
  ChartView: Pt,
  ComponentModel: ot,
  ComponentView: ne,
  List: zc,
  Model: mt,
  PRIORITY: t_,
  SeriesModel: zt,
  color: Fb,
  connect: rA,
  dataTool: uA,
  dependencies: BM,
  disConnect: nA,
  disconnect: l_,
  dispose: iA,
  env: Z,
  extendChartView: HE,
  extendComponentModel: BE,
  extendComponentView: zE,
  extendSeriesModel: FE,
  format: ME,
  getCoordinateSystemDimensions: oA,
  getInstanceByDom: Oc,
  getInstanceById: aA,
  getMap: lA,
  graphic: DE,
  helper: yE,
  init: eA,
  innerDrawElementOnCanvas: Ec,
  matrix: gb,
  number: TE,
  parseGeoJSON: Qd,
  parseGeoJson: Qd,
  registerAction: Wn,
  registerCoordinateSystem: h_,
  registerLayout: c_,
  registerLoading: Bc,
  registerLocale: pc,
  registerMap: v_,
  registerPostInit: u_,
  registerPostUpdate: f_,
  registerPreprocessor: Nc,
  registerProcessor: kc,
  registerTheme: Rc,
  registerTransform: p_,
  registerUpdateLifecycle: Bl,
  registerVisual: Qr,
  setCanvasCreator: sA,
  setPlatformAPI: Sy,
  throttle: kl,
  time: CE,
  use: Ft,
  util: AE,
  vector: tb,
  version: VM,
  zrUtil: US,
  zrender: mw
}, Symbol.toStringTag, { value: "Module" }));
var ZE = (
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
      return Li(null, this, {
        useEncodeDefaulter: !0
      });
    }, t.prototype.getLegendIcon = function(e) {
      var n = new xt(), i = Ue("line", 0, e.itemHeight / 2, e.itemWidth, 0, e.lineStyle.stroke, !1);
      n.add(i), i.setStyle(e.lineStyle);
      var a = this.getData().getVisual("symbol"), o = this.getData().getVisual("symbolRotate"), s = a === "none" ? "circle" : a, l = e.itemHeight * 0.8, u = Ue(s, (e.itemWidth - l) / 2, (e.itemHeight - l) / 2, l, l, e.itemStyle.fill);
      n.add(u), u.setStyle(e.itemStyle);
      var f = e.iconRotate === "inherit" ? o : e.iconRotate || 0;
      return u.rotation = f * Math.PI / 180, u.setOrigin([e.itemWidth / 2, e.itemHeight / 2]), s.indexOf("empty") > -1 && (u.style.stroke = u.style.fill, u.style.fill = "#fff", u.style.lineWidth = 2), n;
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
  })(zt)
);
function Xc(r, t) {
  var e = r.mapDimensionsAll("defaultedLabel"), n = e.length;
  if (n === 1) {
    var i = Ci(r, t, e[0]);
    return i != null ? i + "" : null;
  } else if (n) {
    for (var a = [], o = 0; o < e.length; o++)
      a.push(Ci(r, t, e[o]));
    return a.join(" ");
  }
}
function q_(r, t) {
  var e = r.mapDimensionsAll("defaultedLabel");
  if (!H(t))
    return t + "";
  for (var n = [], i = 0; i < e.length; i++) {
    var a = r.getDimensionIndex(e[i]);
    a >= 0 && n.push(t[a]);
  }
  return n.join(" ");
}
var $c = (
  /** @class */
  (function(r) {
    z(t, r);
    function t(e, n, i, a) {
      var o = r.call(this) || this;
      return o.updateData(e, n, i, a), o;
    }
    return t.prototype._createSymbol = function(e, n, i, a, o) {
      this.removeAll();
      var s = Ue(e, -1, -1, 2, 2, null, o);
      s.attr({
        z2: 100,
        culling: !0,
        scaleX: a[0] / 2,
        scaleY: a[1] / 2
      }), s.drift = jE, this._symbolType = e, this.add(s);
    }, t.prototype.stopSymbolAnimation = function(e) {
      this.childAt(0).stopAnimation(null, e);
    }, t.prototype.getSymbolType = function() {
      return this._symbolType;
    }, t.prototype.getSymbolPath = function() {
      return this.childAt(0);
    }, t.prototype.highlight = function() {
      zs(this.childAt(0));
    }, t.prototype.downplay = function() {
      Fs(this.childAt(0));
    }, t.prototype.setZ = function(e, n) {
      var i = this.childAt(0);
      i.zlevel = e, i.z = n;
    }, t.prototype.setDraggable = function(e, n) {
      var i = this.childAt(0);
      i.draggable = e, i.cursor = !n && e ? "move" : i.cursor;
    }, t.prototype.updateData = function(e, n, i, a) {
      this.silent = !1;
      var o = e.getItemVisual(n, "symbol") || "circle", s = e.hostModel, l = t.getSymbolSize(e, n), u = o !== this._symbolType, f = a && a.disableAnimation;
      if (u) {
        var h = e.getItemVisual(n, "symbolKeepAspect");
        this._createSymbol(o, e, n, l, h);
      } else {
        var v = this.childAt(0);
        v.silent = !1;
        var c = {
          scaleX: l[0] / 2,
          scaleY: l[1] / 2
        };
        f ? v.attr(c) : Ot(v, c, s, n), bl(v);
      }
      if (this._updateCommon(e, n, l, i, a), u) {
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
          v.scaleX = v.scaleY = 0, v.style.opacity = 0, fe(v, c, s, n);
        }
      }
      f && this.childAt(0).stopAnimation("leave");
    }, t.prototype._updateCommon = function(e, n, i, a, o) {
      var s = this.childAt(0), l = e.hostModel, u, f, h, v, c, p, d, g, y;
      if (a && (u = a.emphasisItemStyle, f = a.blurItemStyle, h = a.selectItemStyle, v = a.focus, c = a.blurScope, d = a.labelStatesModels, g = a.hoverScale, y = a.cursorStyle, p = a.emphasisDisabled), !a || e.hasItemOption) {
        var m = a && a.itemModel ? a.itemModel : e.getItemModel(n), _ = m.getModel("emphasis");
        u = _.getModel("itemStyle").getItemStyle(), h = m.getModel(["select", "itemStyle"]).getItemStyle(), f = m.getModel(["blur", "itemStyle"]).getItemStyle(), v = _.get("focus"), c = _.get("blurScope"), p = _.get("disabled"), d = Kr(m), g = _.getShallow("scale"), y = m.getShallow("cursor");
      }
      var S = e.getItemVisual(n, "symbolRotate");
      s.attr("rotation", (S || 0) * Math.PI / 180 || 0);
      var w = W0(e.getItemVisual(n, "symbolOffset"), i);
      w && (s.x = w[0], s.y = w[1]), y && s.attr("cursor", y);
      var b = e.getItemVisual(n, "style"), x = b.fill;
      if (s instanceof Ye) {
        var T = s.style;
        s.useStyle(B({
          // TODO other properties like x, y ?
          image: T.image,
          x: T.x,
          y: T.y,
          width: T.width,
          height: T.height
        }, b));
      } else
        s.__isEmptyBrush ? s.useStyle(B({}, b)) : s.useStyle(b), s.style.decal = null, s.setColor(x, o && o.symbolInnerColor), s.style.strokeNoScale = !0;
      var A = e.getItemVisual(n, "liftZ"), M = this._z2;
      A != null ? M == null && (this._z2 = s.z2, s.z2 += A) : M != null && (s.z2 = M, this._z2 = null);
      var C = o && o.useNameLabel;
      Gn(s, d, {
        labelFetcher: l,
        labelDataIndex: n,
        defaultText: E,
        inheritColor: x,
        defaultOpacity: b.opacity
      });
      function E(O) {
        return C ? e.getName(O) : Xc(e, O);
      }
      this._sizeX = i[0] / 2, this._sizeY = i[1] / 2;
      var I = s.ensureState("emphasis");
      I.style = u, s.ensureState("select").style = h, s.ensureState("blur").style = f;
      var P = g == null || g === !0 ? Math.max(1.1, 3 / this._sizeY) : isFinite(g) && g > 0 ? +g : 1;
      I.scaleX = this._sizeX * P, I.scaleY = this._sizeY * P, this.setSymbolScale(1), Vn(this, v, c, p);
    }, t.prototype.setSymbolScale = function(e) {
      this.scaleX = this.scaleY = e;
    }, t.prototype.fadeOut = function(e, n, i) {
      var a = this.childAt(0), o = at(this).dataIndex, s = i && i.animation;
      if (this.silent = a.silent = !0, i && i.fadeLabel) {
        var l = a.getTextContent();
        l && Ws(l, {
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
      Ws(a, {
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
      return _M(e.getItemVisual(n, "symbolSize"));
    }, t;
  })(xt)
);
function jE(r, t) {
  this.parent.drift(r, t);
}
function of(r, t, e, n) {
  return t && !isNaN(t[0]) && !isNaN(t[1]) && !(n.isIgnore && n.isIgnore(e)) && !(n.clipShape && !n.clipShape.contain(t[0], t[1])) && r.getItemVisual(e, "symbol") !== "none";
}
function eg(r) {
  return r != null && !W(r) && (r = {
    isIgnore: r
  }), r || {};
}
function rg(r) {
  var t = r.hostModel, e = t.getModel("emphasis");
  return {
    emphasisItemStyle: e.getModel("itemStyle").getItemStyle(),
    blurItemStyle: t.getModel(["blur", "itemStyle"]).getItemStyle(),
    selectItemStyle: t.getModel(["select", "itemStyle"]).getItemStyle(),
    focus: e.get("focus"),
    blurScope: e.get("blurScope"),
    emphasisDisabled: e.get("disabled"),
    hoverScale: e.get("scale"),
    labelStatesModels: Kr(t),
    cursorStyle: t.get("cursor")
  };
}
var Z_ = (
  /** @class */
  (function() {
    function r(t) {
      this.group = new xt(), this._SymbolCtor = t || $c;
    }
    return r.prototype.updateData = function(t, e) {
      this._progressiveEls = null, e = eg(e);
      var n = this.group, i = t.hostModel, a = this._data, o = this._SymbolCtor, s = e.disableAnimation, l = rg(t), u = {
        disableAnimation: s
      }, f = e.getSymbolPoint || function(h) {
        return t.getItemLayout(h);
      };
      a || n.removeAll(), t.diff(a).add(function(h) {
        var v = f(h);
        if (of(t, v, h, e)) {
          var c = new o(t, h, l, u);
          c.setPosition(v), t.setItemGraphicEl(h, c), n.add(c);
        }
      }).update(function(h, v) {
        var c = a.getItemGraphicEl(v), p = f(h);
        if (!of(t, p, h, e)) {
          n.remove(c);
          return;
        }
        var d = t.getItemVisual(h, "symbol") || "circle", g = c && c.getSymbolType && c.getSymbolType();
        if (!c || g && g !== d)
          n.remove(c), c = new o(t, h, l, u), c.setPosition(p);
        else {
          c.updateData(t, h, l, u);
          var y = {
            x: p[0],
            y: p[1]
          };
          s ? c.attr(y) : Ot(c, y, i);
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
      this._seriesScope = rg(t), this._data = null, this.group.removeAll();
    }, r.prototype.incrementalUpdate = function(t, e, n) {
      this._progressiveEls = [], n = eg(n);
      function i(l) {
        l.isGroup || (l.incremental = !0, l.ensureState("emphasis").hoverLayer = !0);
      }
      for (var a = t.start; a < t.end; a++) {
        var o = e.getItemLayout(a);
        if (of(e, o, a, n)) {
          var s = new this._SymbolCtor(e, a, this._seriesScope);
          s.traverse(i), s.setPosition(o), this.group.add(s), e.setItemGraphicEl(a, s), this._progressiveEls.push(s);
        }
      }
    }, r.prototype.eachRendered = function(t) {
      po(this._progressiveEls || this.group, t);
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
function j_(r, t, e) {
  var n = r.getBaseAxis(), i = r.getOtherAxis(n), a = KE(i, e), o = n.dim, s = i.dim, l = t.mapDimension(s), u = t.mapDimension(o), f = s === "x" || s === "radius" ? 1 : 0, h = Y(r.dimensions, function(p) {
    return t.mapDimension(p);
  }), v = !1, c = t.getCalculationInfo("stackResultDimension");
  return zn(
    t,
    h[0]
    /* , dims[1] */
  ) && (v = !0, h[0] = c), zn(
    t,
    h[1]
    /* , dims[0] */
  ) && (v = !0, h[1] = c), {
    dataDimsForPoint: h,
    valueStart: a,
    valueAxisDim: s,
    baseAxisDim: o,
    stacked: !!v,
    valueDim: l,
    baseDim: u,
    baseDataOffset: f,
    stackedOverDimension: t.getCalculationInfo("stackedOverDimension")
  };
}
function KE(r, t) {
  var e = 0, n = r.scale.getExtent();
  return t === "start" ? e = n[0] : t === "end" ? e = n[1] : dt(t) && !isNaN(t) ? e = t : n[0] > 0 ? e = n[0] : n[1] < 0 && (e = n[1]), e;
}
function K_(r, t, e, n) {
  var i = NaN;
  r.stacked && (i = e.get(e.getCalculationInfo("stackedOverDimension"), n)), isNaN(i) && (i = r.valueStart);
  var a = r.baseDataOffset, o = [];
  return o[a] = e.get(r.baseDim, n), o[1 - a] = i, t.dataToPoint(o);
}
function QE(r, t) {
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
function JE(r, t, e, n, i, a, o, s) {
  for (var l = QE(r, t), u = [], f = [], h = [], v = [], c = [], p = [], d = [], g = j_(i, t, o), y = r.getLayout("points") || [], m = t.getLayout("points") || [], _ = 0; _ < l.length; _++) {
    var S = l[_], w = !0, b = void 0, x = void 0;
    switch (S.cmd) {
      case "=":
        b = S.idx * 2, x = S.idx1 * 2;
        var T = y[b], A = y[b + 1], M = m[x], C = m[x + 1];
        (isNaN(T) || isNaN(A)) && (T = M, A = C), u.push(T, A), f.push(M, C), h.push(e[b], e[b + 1]), v.push(n[x], n[x + 1]), d.push(t.getRawIndex(S.idx1));
        break;
      case "+":
        var E = S.idx, I = g.dataDimsForPoint, P = i.dataToPoint([t.get(I[0], E), t.get(I[1], E)]);
        x = E * 2, u.push(P[0], P[1]), f.push(m[x], m[x + 1]);
        var O = K_(g, i, t, E);
        h.push(O[0], O[1]), v.push(n[x], n[x + 1]), d.push(t.getRawIndex(E));
        break;
      case "-":
        w = !1;
    }
    w && (c.push(S), p.push(p.length));
  }
  p.sort(function(nt, It) {
    return d[nt] - d[It];
  });
  for (var R = u.length, F = mr(R), N = mr(R), V = mr(R), L = mr(R), k = [], _ = 0; _ < p.length; _++) {
    var G = p[_], X = _ * 2, rt = G * 2;
    F[X] = u[rt], F[X + 1] = u[rt + 1], N[X] = f[rt], N[X + 1] = f[rt + 1], V[X] = h[rt], V[X + 1] = h[rt + 1], L[X] = v[rt], L[X + 1] = v[rt + 1], k[_] = c[G];
  }
  return {
    current: F,
    next: N,
    stackedOnCurrent: V,
    stackedOnNext: L,
    status: k
  };
}
var Pr = Math.min, Or = Math.max;
function Pn(r, t) {
  return isNaN(r) || isNaN(t);
}
function _h(r, t, e, n, i, a, o, s, l) {
  for (var u, f, h, v, c, p, d = e, g = 0; g < n; g++) {
    var y = t[d * 2], m = t[d * 2 + 1];
    if (d >= i || d < 0)
      break;
    if (Pn(y, m)) {
      if (l) {
        d += a;
        continue;
      }
      break;
    }
    if (d === e)
      r[a > 0 ? "moveTo" : "lineTo"](y, m), h = y, v = m;
    else {
      var _ = y - u, S = m - f;
      if (_ * _ + S * S < 0.5) {
        d += a;
        continue;
      }
      if (o > 0) {
        for (var w = d + a, b = t[w * 2], x = t[w * 2 + 1]; b === y && x === m && g < n; )
          g++, w += a, d += a, b = t[w * 2], x = t[w * 2 + 1], y = t[d * 2], m = t[d * 2 + 1], _ = y - u, S = m - f;
        var T = g + 1;
        if (l)
          for (; Pn(b, x) && T < n; )
            T++, w += a, b = t[w * 2], x = t[w * 2 + 1];
        var A = 0.5, M = 0, C = 0, E = void 0, I = void 0;
        if (T >= n || Pn(b, x))
          c = y, p = m;
        else {
          M = b - u, C = x - f;
          var P = y - u, O = b - y, R = m - f, F = x - m, N = void 0, V = void 0;
          if (s === "x") {
            N = Math.abs(P), V = Math.abs(O);
            var L = M > 0 ? 1 : -1;
            c = y - L * N * o, p = m, E = y + L * V * o, I = m;
          } else if (s === "y") {
            N = Math.abs(R), V = Math.abs(F);
            var k = C > 0 ? 1 : -1;
            c = y, p = m - k * N * o, E = y, I = m + k * V * o;
          } else
            N = Math.sqrt(P * P + R * R), V = Math.sqrt(O * O + F * F), A = V / (V + N), c = y - M * o * (1 - A), p = m - C * o * (1 - A), E = y + M * o * A, I = m + C * o * A, E = Pr(E, Or(b, y)), I = Pr(I, Or(x, m)), E = Or(E, Pr(b, y)), I = Or(I, Pr(x, m)), M = E - y, C = I - m, c = y - M * N / V, p = m - C * N / V, c = Pr(c, Or(u, y)), p = Pr(p, Or(f, m)), c = Or(c, Pr(u, y)), p = Or(p, Pr(f, m)), M = y - c, C = m - p, E = y + M * V / N, I = m + C * V / N;
        }
        r.bezierCurveTo(h, v, c, p, y, m), h = E, v = I;
      } else
        r.lineTo(y, m);
    }
    u = y, f = m, d += a;
  }
  return g;
}
var Q_ = (
  /** @class */
  /* @__PURE__ */ (function() {
    function r() {
      this.smooth = 0, this.smoothConstraint = !0;
    }
    return r;
  })()
), tI = (
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
      return new Q_();
    }, t.prototype.buildPath = function(e, n) {
      var i = n.points, a = 0, o = i.length / 2;
      if (n.connectNulls) {
        for (; o > 0 && Pn(i[o * 2 - 2], i[o * 2 - 1]); o--)
          ;
        for (; a < o && Pn(i[a * 2], i[a * 2 + 1]); a++)
          ;
      }
      for (; a < o; )
        a += _h(e, i, a, o, o, 1, n.smooth, n.smoothMonotone, n.connectNulls) + 1;
    }, t.prototype.getPointOn = function(e, n) {
      this.path || (this.createPathProxy(), this.buildPath(this.path, this.shape));
      for (var i = this.path, a = i.data, o = kn.CMD, s, l, u = n === "x", f = [], h = 0; h < a.length; ) {
        var v = a[h++], c = void 0, p = void 0, d = void 0, g = void 0, y = void 0, m = void 0, _ = void 0;
        switch (v) {
          case o.M:
            s = a[h++], l = a[h++];
            break;
          case o.L:
            if (c = a[h++], p = a[h++], _ = u ? (e - s) / (c - s) : (e - l) / (p - l), _ <= 1 && _ >= 0) {
              var S = u ? (p - l) * _ + l : (c - s) * _ + s;
              return u ? [e, S] : [S, e];
            }
            s = c, l = p;
            break;
          case o.C:
            c = a[h++], p = a[h++], d = a[h++], g = a[h++], y = a[h++], m = a[h++];
            var w = u ? Es(s, c, d, y, e, f) : Es(l, p, g, m, e, f);
            if (w > 0)
              for (var b = 0; b < w; b++) {
                var x = f[b];
                if (x <= 1 && x >= 0) {
                  var S = u ? kt(l, p, g, m, x) : kt(s, c, d, y, x);
                  return u ? [e, S] : [S, e];
                }
              }
            s = y, l = m;
            break;
        }
      }
    }, t;
  })(pt)
), eI = (
  /** @class */
  (function(r) {
    z(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t;
  })(Q_)
), rI = (
  /** @class */
  (function(r) {
    z(t, r);
    function t(e) {
      var n = r.call(this, e) || this;
      return n.type = "ec-polygon", n;
    }
    return t.prototype.getDefaultShape = function() {
      return new eI();
    }, t.prototype.buildPath = function(e, n) {
      var i = n.points, a = n.stackedOnPoints, o = 0, s = i.length / 2, l = n.smoothMonotone;
      if (n.connectNulls) {
        for (; s > 0 && Pn(i[s * 2 - 2], i[s * 2 - 1]); s--)
          ;
        for (; o < s && Pn(i[o * 2], i[o * 2 + 1]); o++)
          ;
      }
      for (; o < s; ) {
        var u = _h(e, i, o, s, s, 1, n.smooth, l, n.connectNulls);
        _h(e, a, o + u - 1, u, s, -1, n.stackedOnSmooth, l, n.connectNulls), o += u + 1, e.closePath();
      }
    }, t;
  })(pt)
);
function J_(r, t, e, n, i) {
  var a = r.getArea(), o = a.x, s = a.y, l = a.width, u = a.height, f = e.get(["lineStyle", "width"]) || 0;
  o -= f / 2, s -= f / 2, l += f, u += f, l = Math.ceil(l), o !== Math.floor(o) && (o = Math.floor(o), l++);
  var h = new _t({
    shape: {
      x: o,
      y: s,
      width: l,
      height: u
    }
  });
  if (t) {
    var v = r.getBaseAxis(), c = v.isHorizontal(), p = v.inverse;
    c ? (p && (h.shape.x += l), h.shape.width = 0) : (p || (h.shape.y += u), h.shape.height = 0);
    var d = $(i) ? function(g) {
      i(g, h);
    } : null;
    fe(h, {
      shape: {
        width: l,
        height: u,
        x: o,
        y: s
      }
    }, e, null, n, d);
  }
  return h;
}
function t1(r, t, e) {
  var n = r.getArea(), i = Dt(n.r0, 1), a = Dt(n.r, 1), o = new Cr({
    shape: {
      cx: Dt(r.cx, 1),
      cy: Dt(r.cy, 1),
      r0: i,
      r: a,
      startAngle: n.startAngle,
      endAngle: n.endAngle,
      clockwise: n.clockwise
    }
  });
  if (t) {
    var s = r.getBaseAxis().dim === "angle";
    s ? o.shape.endAngle = n.startAngle : o.shape.r = i, fe(o, {
      shape: {
        endAngle: n.endAngle,
        r: a
      }
    }, e);
  }
  return o;
}
function nI(r, t, e, n, i) {
  if (r) {
    if (r.type === "polar")
      return t1(r, t, e);
    if (r.type === "cartesian2d")
      return J_(r, t, e, n, i);
  } else return null;
  return null;
}
function Gl(r, t) {
  return r.type === t;
}
function ng(r, t) {
  if (r.length === t.length) {
    for (var e = 0; e < r.length; e++)
      if (r[e] !== t[e])
        return;
    return !0;
  }
}
function ig(r) {
  for (var t = 1 / 0, e = 1 / 0, n = -1 / 0, i = -1 / 0, a = 0; a < r.length; ) {
    var o = r[a++], s = r[a++];
    isNaN(o) || (t = Math.min(o, t), n = Math.max(o, n)), isNaN(s) || (e = Math.min(s, e), i = Math.max(s, i));
  }
  return [[t, e], [n, i]];
}
function ag(r, t) {
  var e = ig(r), n = e[0], i = e[1], a = ig(t), o = a[0], s = a[1];
  return Math.max(Math.abs(n[0] - o[0]), Math.abs(n[1] - o[1]), Math.abs(i[0] - s[0]), Math.abs(i[1] - s[1]));
}
function og(r) {
  return dt(r) ? r : r ? 0.5 : 0;
}
function iI(r, t, e) {
  if (!e.valueDim)
    return [];
  for (var n = t.count(), i = mr(n * 2), a = 0; a < n; a++) {
    var o = K_(e, r, t, a);
    i[a * 2] = o[0], i[a * 2 + 1] = o[1];
  }
  return i;
}
function Rr(r, t, e, n, i) {
  var a = e.getBaseAxis(), o = a.dim === "x" || a.dim === "radius" ? 0 : 1, s = [], l = 0, u = [], f = [], h = [], v = [];
  if (i) {
    for (l = 0; l < r.length; l += 2) {
      var c = t || r;
      !isNaN(c[l]) && !isNaN(c[l + 1]) && v.push(r[l], r[l + 1]);
    }
    r = v;
  }
  for (l = 0; l < r.length - 2; l += 2)
    switch (h[0] = r[l + 2], h[1] = r[l + 3], f[0] = r[l], f[1] = r[l + 1], s.push(f[0], f[1]), n) {
      case "end":
        u[o] = h[o], u[1 - o] = f[1 - o], s.push(u[0], u[1]);
        break;
      case "middle":
        var p = (f[o] + h[o]) / 2, d = [];
        u[o] = d[o] = p, u[1 - o] = f[1 - o], d[1 - o] = h[1 - o], s.push(u[0], u[1]), s.push(d[0], d[1]);
        break;
      default:
        u[o] = f[o], u[1 - o] = h[1 - o], s.push(u[0], u[1]);
    }
  return s.push(r[l++], r[l++]), s;
}
function aI(r, t) {
  var e = [], n = r.length, i, a;
  function o(f, h, v) {
    var c = f.coord, p = (v - c) / (h.coord - c), d = Xh(p, [f.color, h.color]);
    return {
      coord: v,
      color: d
    };
  }
  for (var s = 0; s < n; s++) {
    var l = r[s], u = l.coord;
    if (u < 0)
      i = l;
    else if (u > t) {
      a ? e.push(o(a, l, t)) : i && e.push(o(i, l, 0), o(i, l, t));
      break;
    } else
      i && (e.push(o(i, l, 0)), i = null), e.push(l), a = l;
  }
  return e;
}
function oI(r, t, e) {
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
    var l = t.getAxis(i), u = Y(a.stops, function(_) {
      return {
        coord: l.toGlobalCoord(l.dataToCoord(_.value)),
        color: _.color
      };
    }), f = u.length, h = a.outerColors.slice();
    f && u[0].coord > u[f - 1].coord && (u.reverse(), h.reverse());
    var v = aI(u, i === "x" ? e.getWidth() : e.getHeight()), c = v.length;
    if (!c && f)
      return u[0].coord < 0 ? h[1] ? h[1] : u[f - 1].color : h[0] ? h[0] : u[0].color;
    var p = 10, d = v[0].coord - p, g = v[c - 1].coord + p, y = g - d;
    if (y < 1e-3)
      return "transparent";
    D(v, function(_) {
      _.offset = (_.coord - d) / y;
    }), v.push({
      // NOTE: inRangeStopLen may still be 0 if stoplen is zero.
      offset: c ? v[c - 1].offset : 0.5,
      color: h[1] || "transparent"
    }), v.unshift({
      offset: c ? v[0].offset : 0.5,
      color: h[0] || "transparent"
    });
    var m = new Sl(0, 0, 0, 0, v, !0);
    return m[i] = d, m[i + "2"] = g, m;
  }
}
function sI(r, t, e) {
  var n = r.get("showAllSymbol"), i = n === "auto";
  if (!(n && !i)) {
    var a = e.getAxesByScale("ordinal")[0];
    if (a && !(i && lI(a, t))) {
      var o = t.mapDimension(a.dim), s = {};
      return D(a.getViewLabels(), function(l) {
        var u = a.scale.getRawOrdinalNumber(l.tickValue);
        s[u] = 1;
      }), function(l) {
        return !s.hasOwnProperty(t.get(o, l));
      };
    }
  }
}
function lI(r, t) {
  var e = r.getExtent(), n = Math.abs(e[1] - e[0]) / r.scale.count();
  isNaN(n) && (n = 0);
  for (var i = t.count(), a = Math.max(1, Math.round(i / 5)), o = 0; o < i; o += a)
    if ($c.getSymbolSize(
      t,
      o
      // Only for cartesian, where `isHorizontal` exists.
    )[r.isHorizontal() ? 1 : 0] * 1.5 > n)
      return !1;
  return !0;
}
function uI(r, t) {
  return isNaN(r) || isNaN(t);
}
function fI(r) {
  for (var t = r.length / 2; t > 0 && uI(r[t * 2 - 2], r[t * 2 - 1]); t--)
    ;
  return t - 1;
}
function sg(r, t) {
  return [r[t * 2], r[t * 2 + 1]];
}
function hI(r, t, e) {
  for (var n = r.length / 2, i = e === "x" ? 0 : 1, a, o, s = 0, l = -1, u = 0; u < n; u++)
    if (o = r[u * 2 + i], !(isNaN(o) || isNaN(r[u * 2 + 1 - i]))) {
      if (u === 0) {
        a = o;
        continue;
      }
      if (a <= t && o >= t || a >= t && o <= t) {
        l = u;
        break;
      }
      s = u, a = o;
    }
  return {
    range: [s, l],
    t: (t - a) / (o - a)
  };
}
function e1(r) {
  if (r.get(["endLabel", "show"]))
    return !0;
  for (var t = 0; t < Ee.length; t++)
    if (r.get([Ee[t], "endLabel", "show"]))
      return !0;
  return !1;
}
function sf(r, t, e, n) {
  if (Gl(t, "cartesian2d")) {
    var i = n.getModel("endLabel"), a = i.get("valueAnimation"), o = n.getData(), s = {
      lastFrameIndex: 0
    }, l = e1(n) ? function(c, p) {
      r._endLabelOnDuring(c, p, o, s, a, i, t);
    } : null, u = t.getBaseAxis().isHorizontal(), f = J_(t, e, n, function() {
      var c = r._endLabel;
      c && e && s.originalX != null && c.attr({
        x: s.originalX,
        y: s.originalY
      });
    }, l);
    if (!n.get("clip", !0)) {
      var h = f.shape, v = Math.max(h.width, h.height);
      u ? (h.y -= v, h.height += v * 2) : (h.x -= v, h.width += v * 2);
    }
    return l && l(1, f), f;
  } else
    return process.env.NODE_ENV !== "production" && n.get(["endLabel", "show"]) && console.warn("endLabel is not supported for lines in polar systems."), t1(t, e, n);
}
function cI(r, t) {
  var e = t.getBaseAxis(), n = e.isHorizontal(), i = e.inverse, a = n ? i ? "right" : "left" : "center", o = n ? "middle" : i ? "top" : "bottom";
  return {
    normal: {
      align: r.get("align") || a,
      verticalAlign: r.get("verticalAlign") || o
    }
  };
}
var vI = (
  /** @class */
  (function(r) {
    z(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t.prototype.init = function() {
      var e = new xt(), n = new Z_();
      this.group.add(n.group), this._symbolDraw = n, this._lineGroup = e, this._changePolyState = J(this._changePolyState, this);
    }, t.prototype.render = function(e, n, i) {
      var a = e.coordinateSystem, o = this.group, s = e.getData(), l = e.getModel("lineStyle"), u = e.getModel("areaStyle"), f = s.getLayout("points") || [], h = a.type === "polar", v = this._coordSys, c = this._symbolDraw, p = this._polyline, d = this._polygon, g = this._lineGroup, y = !n.ssr && e.get("animation"), m = !u.isEmpty(), _ = u.get("origin"), S = j_(a, s, _), w = m && iI(a, s, S), b = e.get("showSymbol"), x = e.get("connectNulls"), T = b && !h && sI(e, s, a), A = this._data;
      A && A.eachItemGraphicEl(function(nt, It) {
        nt.__temp && (o.remove(nt), A.setItemGraphicEl(It, null));
      }), b || c.remove(), o.add(g);
      var M = h ? !1 : e.get("step"), C;
      a && a.getArea && e.get("clip", !0) && (C = a.getArea(), C.width != null ? (C.x -= 0.1, C.y -= 0.1, C.width += 0.2, C.height += 0.2) : C.r0 && (C.r0 -= 0.5, C.r += 0.5)), this._clipShapeForSymbol = C;
      var E = oI(s, a, i) || s.getVisual("style")[s.getVisual("drawType")];
      if (!(p && v.type === a.type && M === this._step))
        b && c.updateData(s, {
          isIgnore: T,
          clipShape: C,
          disableAnimation: !0,
          getSymbolPoint: function(nt) {
            return [f[nt * 2], f[nt * 2 + 1]];
          }
        }), y && this._initSymbolLabelAnimation(s, a, C), M && (w && (w = Rr(w, f, a, M, x)), f = Rr(f, null, a, M, x)), p = this._newPolyline(f), m ? d = this._newPolygon(f, w) : d && (g.remove(d), d = this._polygon = null), h || this._initOrUpdateEndLabel(e, a, Bn(E)), g.setClipPath(sf(this, a, !0, e));
      else {
        m && !d ? d = this._newPolygon(f, w) : d && !m && (g.remove(d), d = this._polygon = null), h || this._initOrUpdateEndLabel(e, a, Bn(E));
        var I = g.getClipPath();
        if (I) {
          var P = sf(this, a, !1, e);
          fe(I, {
            shape: P.shape
          }, e);
        } else
          g.setClipPath(sf(this, a, !0, e));
        b && c.updateData(s, {
          isIgnore: T,
          clipShape: C,
          disableAnimation: !0,
          getSymbolPoint: function(nt) {
            return [f[nt * 2], f[nt * 2 + 1]];
          }
        }), (!ng(this._stackedOnPoints, w) || !ng(this._points, f)) && (y ? this._doUpdateAnimation(s, w, a, i, M, _, x) : (M && (w && (w = Rr(w, f, a, M, x)), f = Rr(f, null, a, M, x)), p.setShape({
          points: f
        }), d && d.setShape({
          points: f,
          stackedOnPoints: w
        })));
      }
      var O = e.getModel("emphasis"), R = O.get("focus"), F = O.get("blurScope"), N = O.get("disabled");
      if (p.useStyle(ut(
        // Use color in lineStyle first
        l.getLineStyle(),
        {
          fill: "none",
          stroke: E,
          lineJoin: "bevel"
        }
      )), Ya(p, e, "lineStyle"), p.style.lineWidth > 0 && e.get(["emphasis", "lineStyle", "width"]) === "bolder") {
        var V = p.getState("emphasis").style;
        V.lineWidth = +p.style.lineWidth + 1;
      }
      at(p).seriesIndex = e.seriesIndex, Vn(p, R, F, N);
      var L = og(e.get("smooth")), k = e.get("smoothMonotone");
      if (p.setShape({
        smooth: L,
        smoothMonotone: k,
        connectNulls: x
      }), d) {
        var G = s.getCalculationInfo("stackedOnSeries"), X = 0;
        d.useStyle(ut(u.getAreaStyle(), {
          fill: E,
          opacity: 0.7,
          lineJoin: "bevel",
          decal: s.getVisual("style").decal
        })), G && (X = og(G.get("smooth"))), d.setShape({
          smooth: L,
          stackedOnSmooth: X,
          smoothMonotone: k,
          connectNulls: x
        }), Ya(d, e, "areaStyle"), at(d).seriesIndex = e.seriesIndex, Vn(d, R, F, N);
      }
      var rt = this._changePolyState;
      s.eachItemGraphicEl(function(nt) {
        nt && (nt.onHoverStateChange = rt);
      }), this._polyline.onHoverStateChange = rt, this._data = s, this._coordSys = a, this._stackedOnPoints = w, this._points = f, this._step = M, this._valueOrigin = _, e.get("triggerLineEvent") && (this.packEventData(e, p), d && this.packEventData(e, d));
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
      var o = e.getData(), s = Nn(o, a);
      if (this._changePolyState("emphasis"), !(s instanceof Array) && s != null && s >= 0) {
        var l = o.getLayout("points"), u = o.getItemGraphicEl(s);
        if (!u) {
          var f = l[s * 2], h = l[s * 2 + 1];
          if (isNaN(f) || isNaN(h) || this._clipShapeForSymbol && !this._clipShapeForSymbol.contain(f, h))
            return;
          var v = e.get("zlevel") || 0, c = e.get("z") || 0;
          u = new $c(o, s), u.x = f, u.y = h, u.setZ(v, c);
          var p = u.getSymbolPath().getTextContent();
          p && (p.zlevel = v, p.z = c, p.z2 = this._polyline.z2 + 1), u.__temp = !0, o.setItemGraphicEl(s, u), u.stopSymbolAnimation(!0), this.group.add(u);
        }
        u.highlight();
      } else
        Pt.prototype.highlight.call(this, e, n, i, a);
    }, t.prototype.downplay = function(e, n, i, a) {
      var o = e.getData(), s = Nn(o, a);
      if (this._changePolyState("normal"), s != null && s >= 0) {
        var l = o.getItemGraphicEl(s);
        l && (l.__temp ? (o.setItemGraphicEl(s, null), this.group.remove(l)) : l.downplay());
      } else
        Pt.prototype.downplay.call(this, e, n, i, a);
    }, t.prototype._changePolyState = function(e) {
      var n = this._polygon;
      vp(this._polyline, e), n && vp(n, e);
    }, t.prototype._newPolyline = function(e) {
      var n = this._polyline;
      return n && this._lineGroup.remove(n), n = new tI({
        shape: {
          points: e
        },
        segmentIgnoreThreshold: 2,
        z2: 10
      }), this._lineGroup.add(n), this._polyline = n, n;
    }, t.prototype._newPolygon = function(e, n) {
      var i = this._polygon;
      return i && this._lineGroup.remove(i), i = new rI({
        shape: {
          points: e,
          stackedOnPoints: n
        },
        segmentIgnoreThreshold: 2
      }), this._lineGroup.add(i), this._polygon = i, i;
    }, t.prototype._initSymbolLabelAnimation = function(e, n, i) {
      var a, o, s = n.getBaseAxis(), l = s.inverse;
      n.type === "cartesian2d" ? (a = s.isHorizontal(), o = !1) : n.type === "polar" && (a = s.dim === "angle", o = !0);
      var u = e.hostModel, f = u.get("animationDuration");
      $(f) && (f = f(null));
      var h = u.get("animationDelay") || 0, v = $(h) ? h(null) : h;
      e.eachItemGraphicEl(function(c, p) {
        var d = c;
        if (d) {
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
          l && (x = 1 - x);
          var T = $(h) ? h(p) : f * x + v, A = d.getSymbolPath(), M = A.getTextContent();
          d.attr({
            scaleX: 0,
            scaleY: 0
          }), d.animateTo({
            scaleX: 1,
            scaleY: 1
          }, {
            duration: 200,
            setToFinal: !0,
            delay: T
          }), M && M.animateFrom({
            style: {
              opacity: 0
            }
          }, {
            duration: 300,
            delay: T
          }), A.disableLabelAnimation = !0;
        }
      });
    }, t.prototype._initOrUpdateEndLabel = function(e, n, i) {
      var a = e.getModel("endLabel");
      if (e1(e)) {
        var o = e.getData(), s = this._polyline, l = o.getLayout("points");
        if (!l) {
          s.removeTextContent(), this._endLabel = null;
          return;
        }
        var u = this._endLabel;
        u || (u = this._endLabel = new St({
          z2: 200
          // should be higher than item symbol
        }), u.ignoreClip = !0, s.setTextContent(this._endLabel), s.disableLabelAnimation = !0);
        var f = fI(l);
        f >= 0 && (Gn(s, Kr(e, "endLabel"), {
          inheritColor: i,
          labelFetcher: e,
          labelDataIndex: f,
          defaultText: function(h, v, c) {
            return c != null ? q_(o, c) : Xc(o, h);
          },
          enableTextSetter: !0
        }, cI(a, n)), s.textConfig.position = null);
      } else this._endLabel && (this._polyline.removeTextContent(), this._endLabel = null);
    }, t.prototype._endLabelOnDuring = function(e, n, i, a, o, s, l) {
      var u = this._endLabel, f = this._polyline;
      if (u) {
        e < 1 && a.originalX == null && (a.originalX = u.x, a.originalY = u.y);
        var h = i.getLayout("points"), v = i.hostModel, c = v.get("connectNulls"), p = s.get("precision"), d = s.get("distance") || 0, g = l.getBaseAxis(), y = g.isHorizontal(), m = g.inverse, _ = n.shape, S = m ? y ? _.x : _.y + _.height : y ? _.x + _.width : _.y, w = (y ? d : 0) * (m ? -1 : 1), b = (y ? 0 : -d) * (m ? -1 : 1), x = y ? "x" : "y", T = hI(h, S, x), A = T.range, M = A[1] - A[0], C = void 0;
        if (M >= 1) {
          if (M > 1 && !c) {
            var E = sg(h, A[0]);
            u.attr({
              x: E[0] + w,
              y: E[1] + b
            }), o && (C = v.getRawValue(A[0]));
          } else {
            var E = f.getPointOn(S, x);
            E && u.attr({
              x: E[0] + w,
              y: E[1] + b
            });
            var I = v.getRawValue(A[0]), P = v.getRawValue(A[1]);
            o && (C = Ww(i, p, I, P, T.t));
          }
          a.lastFrameIndex = A[0];
        } else {
          var O = e === 1 || a.lastFrameIndex > 0 ? A[0] : 0, E = sg(h, O);
          o && (C = v.getRawValue(O)), u.attr({
            x: E[0] + w,
            y: E[1] + b
          });
        }
        if (o) {
          var R = Dl(u);
          typeof R.setLabelText == "function" && R.setLabelText(C);
        }
      }
    }, t.prototype._doUpdateAnimation = function(e, n, i, a, o, s, l) {
      var u = this._polyline, f = this._polygon, h = e.hostModel, v = JE(this._data, e, this._stackedOnPoints, n, this._coordSys, i, this._valueOrigin), c = v.current, p = v.stackedOnCurrent, d = v.next, g = v.stackedOnNext;
      if (o && (p = Rr(v.stackedOnCurrent, v.current, i, o, l), c = Rr(v.current, null, i, o, l), g = Rr(v.stackedOnNext, v.next, i, o, l), d = Rr(v.next, null, i, o, l)), ag(c, d) > 3e3 || f && ag(p, g) > 3e3) {
        u.stopAnimation(), u.setShape({
          points: d
        }), f && (f.stopAnimation(), f.setShape({
          points: d,
          stackedOnPoints: g
        }));
        return;
      }
      u.shape.__points = v.current, u.shape.points = c;
      var y = {
        shape: {
          points: d
        }
      };
      v.current !== c && (y.shape.__points = v.next), u.stopAnimation(), Ot(u, y, h), f && (f.setShape({
        // Reuse the points with polyline.
        points: c,
        stackedOnPoints: p
      }), f.stopAnimation(), Ot(f, {
        shape: {
          stackedOnPoints: g
        }
      }, h), u.shape.points !== f.shape.points && (f.shape.points = u.shape.points));
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
      u.animators && u.animators.length && u.animators[0].during(function() {
        f && f.dirtyShape();
        for (var x = u.shape.__points, T = 0; T < m.length; T++) {
          var A = m[T].el, M = m[T].ptIdx * 2;
          A.x = x[M], A.y = x[M + 1], A.markRedraw();
        }
      });
    }, t.prototype.remove = function(e) {
      var n = this.group, i = this._data;
      this._lineGroup.removeAll(), this._symbolDraw.remove(!0), i && i.eachItemGraphicEl(function(a, o) {
        a.__temp && (n.remove(a), i.setItemGraphicEl(o, null));
      }), this._polyline = this._polygon = this._coordSys = this._points = this._stackedOnPoints = this._endLabel = this._data = null;
    }, t.type = "line", t;
  })(Pt)
);
function qc(r, t) {
  return {
    seriesType: r,
    plan: Ac(),
    reset: function(e) {
      var n = e.getData(), i = e.coordinateSystem, a = e.pipelineContext, o = t || a.large;
      if (i) {
        var s = Y(i.dimensions, function(c) {
          return n.mapDimension(c);
        }).slice(0, 2), l = s.length, u = n.getCalculationInfo("stackResultDimension");
        zn(n, s[0]) && (s[0] = u), zn(n, s[1]) && (s[1] = u);
        var f = n.getStore(), h = n.getDimensionIndex(s[0]), v = n.getDimensionIndex(s[1]);
        return l && {
          progress: function(c, p) {
            for (var d = c.end - c.start, g = o && mr(d * l), y = [], m = [], _ = c.start, S = 0; _ < c.end; _++) {
              var w = void 0;
              if (l === 1) {
                var b = f.get(h, _);
                w = i.dataToPoint(b, null, m);
              } else
                y[0] = f.get(h, _), y[1] = f.get(v, _), w = i.dataToPoint(y, null, m);
              o ? (g[S++] = w[0], g[S++] = w[1]) : p.setItemLayout(_, w.slice());
            }
            o && p.setLayout("points", g);
          }
        };
      }
    }
  };
}
var pI = {
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
}, dI = function(r) {
  return Math.round(r.length / 2);
};
function r1(r) {
  return {
    seriesType: r,
    // FIXME:TS never used, so comment it
    // modifyOutputEnd: true,
    reset: function(t, e, n) {
      var i = t.getData(), a = t.get("sampling"), o = t.coordinateSystem, s = i.count();
      if (s > 10 && o.type === "cartesian2d" && a) {
        var l = o.getBaseAxis(), u = o.getOtherAxis(l), f = l.getExtent(), h = n.getDevicePixelRatio(), v = Math.abs(f[1] - f[0]) * (h || 1), c = Math.round(s / v);
        if (isFinite(c) && c > 1) {
          a === "lttb" ? t.setData(i.lttbDownSample(i.mapDimension(u.dim), 1 / c)) : a === "minmax" && t.setData(i.minmaxDownSample(i.mapDimension(u.dim), 1 / c));
          var p = void 0;
          U(a) ? p = pI[a] : $(a) && (p = a), p && t.setData(i.downSample(i.mapDimension(u.dim), 1 / c, p, dI));
        }
      }
    }
  };
}
function gI(r) {
  r.registerChartView(vI), r.registerSeriesModel(ZE), r.registerLayout(qc("line", !0)), r.registerVisual({
    seriesType: "line",
    reset: function(t) {
      var e = t.getData(), n = t.getModel("lineStyle").getLineStyle();
      n && !n.stroke && (n.stroke = e.getVisual("style").fill), e.setVisual("legendLineStyle", n);
    }
  }), r.registerProcessor(r.PRIORITY.PROCESSOR.STATISTIC, r1("line"));
}
var Sh = (
  /** @class */
  (function(r) {
    z(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.prototype.getInitialData = function(e, n) {
      return Li(null, this, {
        useEncodeDefaulter: !0
      });
    }, t.prototype.getMarkerPosition = function(e, n, i) {
      var a = this.coordinateSystem;
      if (a && a.clampData) {
        var o = a.clampData(e), s = a.dataToPoint(o);
        if (i)
          D(a.getAxes(), function(v, c) {
            if (v.type === "category" && n != null) {
              var p = v.getTicksCoords(), d = v.getTickModel().get("alignWithLabel"), g = o[c], y = n[c] === "x1" || n[c] === "y1";
              if (y && !d && (g += 1), p.length < 2)
                return;
              if (p.length === 2) {
                s[c] = v.toGlobalCoord(v.getExtent()[y ? 1 : 0]);
                return;
              }
              for (var m = void 0, _ = void 0, S = 1, w = 0; w < p.length; w++) {
                var b = p[w].coord, x = w === p.length - 1 ? p[w - 1].tickValue + S : p[w].tickValue;
                if (x === g) {
                  _ = b;
                  break;
                } else if (x < g)
                  m = b;
                else if (m != null && x > g) {
                  _ = (b + m) / 2;
                  break;
                }
                w === 1 && (S = x - p[0].tickValue);
              }
              _ == null && (m ? m && (_ = p[p.length - 1].coord) : _ = p[0].coord), s[c] = v.toGlobalCoord(_);
            }
          });
        else {
          var l = this.getData(), u = l.getLayout("offset"), f = l.getLayout("size"), h = a.getBaseAxis().isHorizontal() ? 0 : 1;
          s[h] += u + f / 2;
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
  })(zt)
);
zt.registerClass(Sh);
var yI = (
  /** @class */
  (function(r) {
    z(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.prototype.getInitialData = function() {
      return Li(null, this, {
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
    }, t.type = "series.bar", t.dependencies = ["grid", "polar"], t.defaultOption = Al(Sh.defaultOption, {
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
  })(Sh)
), mI = (
  /** @class */
  /* @__PURE__ */ (function() {
    function r() {
      this.cx = 0, this.cy = 0, this.r0 = 0, this.r = 0, this.startAngle = 0, this.endAngle = Math.PI * 2, this.clockwise = !0;
    }
    return r;
  })()
), lg = (
  /** @class */
  (function(r) {
    z(t, r);
    function t(e) {
      var n = r.call(this, e) || this;
      return n.type = "sausage", n;
    }
    return t.prototype.getDefaultShape = function() {
      return new mI();
    }, t.prototype.buildPath = function(e, n) {
      var i = n.cx, a = n.cy, o = Math.max(n.r0 || 0, 0), s = Math.max(n.r, 0), l = (s - o) * 0.5, u = o + l, f = n.startAngle, h = n.endAngle, v = n.clockwise, c = Math.PI * 2, p = v ? h - f < c : f - h < c;
      p || (f = h - (v ? c : -c));
      var d = Math.cos(f), g = Math.sin(f), y = Math.cos(h), m = Math.sin(h);
      p ? (e.moveTo(d * o + i, g * o + a), e.arc(d * u + i, g * u + a, l, -Math.PI + f, f, !v)) : e.moveTo(d * s + i, g * s + a), e.arc(i, a, s, f, h, !v), e.arc(y * u + i, m * u + a, l, h - Math.PI * 2, h - Math.PI, !v), o !== 0 && e.arc(i, a, o, h, f, v);
    }, t;
  })(pt)
);
function _I(r, t) {
  t = t || {};
  var e = t.isRoundCap;
  return function(n, i, a) {
    var o = i.position;
    if (!o || o instanceof Array)
      return Os(n, i, a);
    var s = r(o), l = i.distance != null ? i.distance : 5, u = this.shape, f = u.cx, h = u.cy, v = u.r, c = u.r0, p = (v + c) / 2, d = u.startAngle, g = u.endAngle, y = (d + g) / 2, m = e ? Math.abs(v - c) / 2 : 0, _ = Math.cos, S = Math.sin, w = f + v * _(d), b = h + v * S(d), x = "left", T = "top";
    switch (s) {
      case "startArc":
        w = f + (c - l) * _(y), b = h + (c - l) * S(y), x = "center", T = "top";
        break;
      case "insideStartArc":
        w = f + (c + l) * _(y), b = h + (c + l) * S(y), x = "center", T = "bottom";
        break;
      case "startAngle":
        w = f + p * _(d) + Jo(d, l + m, !1), b = h + p * S(d) + ts(d, l + m, !1), x = "right", T = "middle";
        break;
      case "insideStartAngle":
        w = f + p * _(d) + Jo(d, -l + m, !1), b = h + p * S(d) + ts(d, -l + m, !1), x = "left", T = "middle";
        break;
      case "middle":
        w = f + p * _(y), b = h + p * S(y), x = "center", T = "middle";
        break;
      case "endArc":
        w = f + (v + l) * _(y), b = h + (v + l) * S(y), x = "center", T = "bottom";
        break;
      case "insideEndArc":
        w = f + (v - l) * _(y), b = h + (v - l) * S(y), x = "center", T = "top";
        break;
      case "endAngle":
        w = f + p * _(g) + Jo(g, l + m, !0), b = h + p * S(g) + ts(g, l + m, !0), x = "left", T = "middle";
        break;
      case "insideEndAngle":
        w = f + p * _(g) + Jo(g, -l + m, !0), b = h + p * S(g) + ts(g, -l + m, !0), x = "right", T = "middle";
        break;
      default:
        return Os(n, i, a);
    }
    return n = n || {}, n.x = w, n.y = b, n.align = x, n.verticalAlign = T, n;
  };
}
function SI(r, t, e, n) {
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
  var i = r.shape, a = i.clockwise ? i.startAngle : i.endAngle, o = i.clockwise ? i.endAngle : i.startAngle, s = (a + o) / 2, l, u = e(t);
  switch (u) {
    case "startArc":
    case "insideStartArc":
    case "middle":
    case "insideEndArc":
    case "endArc":
      l = s;
      break;
    case "startAngle":
    case "insideStartAngle":
      l = a;
      break;
    case "endAngle":
    case "insideEndAngle":
      l = o;
      break;
    default:
      r.setTextConfig({
        rotation: 0
      });
      return;
  }
  var f = Math.PI * 1.5 - l;
  u === "middle" && f > Math.PI / 2 && f < Math.PI * 1.5 && (f -= Math.PI), r.setTextConfig({
    rotation: f
  });
}
function Jo(r, t, e) {
  return t * Math.sin(r) * (e ? -1 : 1);
}
function ts(r, t, e) {
  return t * Math.cos(r) * (e ? 1 : -1);
}
function wa(r, t, e) {
  var n = r.get("borderRadius");
  if (n == null)
    return e ? {
      cornerRadius: 0
    } : null;
  H(n) || (n = [n, n, n, n]);
  var i = Math.abs(t.r || 0 - t.r0 || 0);
  return {
    cornerRadius: Y(n, function(a) {
      return ir(a, i);
    })
  };
}
var lf = Math.max, uf = Math.min;
function bI(r, t) {
  var e = r.getArea && r.getArea();
  if (Gl(r, "cartesian2d")) {
    var n = r.getBaseAxis();
    if (n.type !== "category" || !n.onBand) {
      var i = t.getLayout("bandWidth");
      n.isHorizontal() ? (e.x -= i, e.width += i * 2) : (e.y -= i, e.height += i * 2);
    }
  }
  return e;
}
var wI = (
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
      o === "cartesian2d" || o === "polar" ? (this._progressiveEls = null, this._isLargeDraw ? this._renderLarge(e, n, i) : this._renderNormal(e, n, i, a)) : process.env.NODE_ENV !== "production" && Vt("Only cartesian2d and polar supported for bar.");
    }, t.prototype.incrementalPrepareRender = function(e) {
      this._clear(), this._updateDrawMode(e), this._updateLargeClip(e);
    }, t.prototype.incrementalRender = function(e, n) {
      this._progressiveEls = [], this._incrementalRenderLarge(e, n);
    }, t.prototype.eachRendered = function(e) {
      po(this._progressiveEls || this.group, e);
    }, t.prototype._updateDrawMode = function(e) {
      var n = e.pipelineContext.large;
      (this._isLargeDraw == null || n !== this._isLargeDraw) && (this._isLargeDraw = n, this._clear());
    }, t.prototype._renderNormal = function(e, n, i, a) {
      var o = this.group, s = e.getData(), l = this._data, u = e.coordinateSystem, f = u.getBaseAxis(), h;
      u.type === "cartesian2d" ? h = f.isHorizontal() : u.type === "polar" && (h = f.dim === "angle");
      var v = e.isAnimationEnabled() ? e : null, c = xI(e, u);
      c && this._enableRealtimeSort(c, s, i);
      var p = e.get("clip", !0) || c, d = bI(u, s);
      o.removeClipPath();
      var g = e.get("roundCap", !0), y = e.get("showBackground", !0), m = e.getModel("backgroundStyle"), _ = m.get("borderRadius") || 0, S = [], w = this._backgroundEls, b = a && a.isInitSort, x = a && a.type === "changeAxisOrder";
      function T(C) {
        var E = es[u.type](s, C), I = II(u, h, E);
        return I.useStyle(m.getItemStyle()), u.type === "cartesian2d" ? I.setShape("r", _) : I.setShape("cornerRadius", _), S[C] = I, I;
      }
      s.diff(l).add(function(C) {
        var E = s.getItemModel(C), I = es[u.type](s, C, E);
        if (y && T(C), !(!s.hasValue(C) || !vg[u.type](I))) {
          var P = !1;
          p && (P = ug[u.type](d, I));
          var O = fg[u.type](e, s, C, I, h, v, f.model, !1, g);
          c && (O.forceLabelAnimation = !0), pg(O, s, C, E, I, e, h, u.type === "polar"), b ? O.attr({
            shape: I
          }) : c ? hg(c, v, O, I, C, h, !1, !1) : fe(O, {
            shape: I
          }, e, C), s.setItemGraphicEl(C, O), o.add(O), O.ignore = P;
        }
      }).update(function(C, E) {
        var I = s.getItemModel(C), P = es[u.type](s, C, I);
        if (y) {
          var O = void 0;
          w.length === 0 ? O = T(E) : (O = w[E], O.useStyle(m.getItemStyle()), u.type === "cartesian2d" ? O.setShape("r", _) : O.setShape("cornerRadius", _), S[C] = O);
          var R = es[u.type](s, C), F = i1(h, R, u);
          Ot(O, {
            shape: F
          }, v, C);
        }
        var N = l.getItemGraphicEl(E);
        if (!s.hasValue(C) || !vg[u.type](P)) {
          o.remove(N);
          return;
        }
        var V = !1;
        if (p && (V = ug[u.type](d, P), V && o.remove(N)), N ? bl(N) : N = fg[u.type](e, s, C, P, h, v, f.model, !!N, g), c && (N.forceLabelAnimation = !0), x) {
          var L = N.getTextContent();
          if (L) {
            var k = Dl(L);
            k.prevValue != null && (k.prevValue = k.value);
          }
        } else
          pg(N, s, C, I, P, e, h, u.type === "polar");
        b ? N.attr({
          shape: P
        }) : c ? hg(c, v, N, P, C, h, !0, x) : Ot(N, {
          shape: P
        }, e, C, null), s.setItemGraphicEl(C, N), N.ignore = V, o.add(N);
      }).remove(function(C) {
        var E = l.getItemGraphicEl(C);
        E && Xa(E, e, C);
      }).execute();
      var A = this._backgroundGroup || (this._backgroundGroup = new xt());
      A.removeAll();
      for (var M = 0; M < S.length; ++M)
        A.add(S[M]);
      o.add(A), this._backgroundEls = S, this._data = s;
    }, t.prototype._renderLarge = function(e, n, i) {
      this._clear(), gg(e, this.group), this._updateLargeClip(e);
    }, t.prototype._incrementalRenderLarge = function(e, n) {
      this._removeBackground(), gg(n, this.group, this._progressiveEls, !0);
    }, t.prototype._updateLargeClip = function(e) {
      var n = e.get("clip", !0) && nI(e.coordinateSystem, !1, e), i = this.group;
      n ? i.setClipPath(n) : i.removeClipPath();
    }, t.prototype._enableRealtimeSort = function(e, n, i) {
      var a = this;
      if (n.count()) {
        var o = e.baseAxis;
        if (this._isFirstFrame)
          this._dispatchInitSort(n, e, i), this._isFirstFrame = !1;
        else {
          var s = function(l) {
            var u = n.getItemGraphicEl(l), f = u && u.shape;
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
        var l = i(s);
        l = l ?? NaN, a.push({
          dataIndex: s,
          mappedValue: l,
          ordinalNumber: o
        });
      }), a.sort(function(o, s) {
        return s.mappedValue - o.mappedValue;
      }), {
        ordinalNumbers: Y(a, function(o) {
          return o.ordinalNumber;
        })
      };
    }, t.prototype._isOrderChangedWithinSameData = function(e, n, i) {
      for (var a = i.scale, o = e.mapDimension(i.dim), s = Number.MAX_VALUE, l = 0, u = a.getOrdinalMeta().categories.length; l < u; ++l) {
        var f = e.rawIndexOf(o, a.getRawOrdinalNumber(l)), h = f < 0 ? Number.MIN_VALUE : n(e.indexOfRawIndex(f));
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
        Xa(a, e, at(a).dataIndex);
      })) : n.removeAll(), this._data = null, this._isFirstFrame = !0;
    }, t.prototype._removeBackground = function() {
      this.group.remove(this._backgroundGroup), this._backgroundGroup = null;
    }, t.type = "bar", t;
  })(Pt)
), ug = {
  cartesian2d: function(r, t) {
    var e = t.width < 0 ? -1 : 1, n = t.height < 0 ? -1 : 1;
    e < 0 && (t.x += t.width, t.width = -t.width), n < 0 && (t.y += t.height, t.height = -t.height);
    var i = r.x + r.width, a = r.y + r.height, o = lf(t.x, r.x), s = uf(t.x + t.width, i), l = lf(t.y, r.y), u = uf(t.y + t.height, a), f = s < o, h = u < l;
    return t.x = f && o > i ? s : o, t.y = h && l > a ? u : l, t.width = f ? 0 : s - o, t.height = h ? 0 : u - l, e < 0 && (t.x += t.width, t.width = -t.width), n < 0 && (t.y += t.height, t.height = -t.height), f || h;
  },
  polar: function(r, t) {
    var e = t.r0 <= t.r ? 1 : -1;
    if (e < 0) {
      var n = t.r;
      t.r = t.r0, t.r0 = n;
    }
    var i = uf(t.r, r.r), a = lf(t.r0, r.r0);
    t.r = i, t.r0 = a;
    var o = i - a < 0;
    if (e < 0) {
      var n = t.r;
      t.r = t.r0, t.r0 = n;
    }
    return o;
  }
}, fg = {
  cartesian2d: function(r, t, e, n, i, a, o, s, l) {
    var u = new _t({
      shape: B({}, n),
      z2: 1
    });
    if (u.__dataIndex = e, u.name = "item", a) {
      var f = u.shape, h = i ? "height" : "width";
      f[h] = 0;
    }
    return u;
  },
  polar: function(r, t, e, n, i, a, o, s, l) {
    var u = !i && l ? lg : Cr, f = new u({
      shape: n,
      z2: 1
    });
    f.name = "item";
    var h = n1(i);
    if (f.calculateTextPosition = _I(h, {
      isRoundCap: u === lg
    }), a) {
      var v = f.shape, c = i ? "r" : "endAngle", p = {};
      v[c] = i ? n.r0 : n.startAngle, p[c] = n[c], (s ? Ot : fe)(f, {
        shape: p
        // __value: typeof dataValue === 'string' ? parseInt(dataValue, 10) : dataValue
      }, a);
    }
    return f;
  }
};
function xI(r, t) {
  var e = r.get("realtimeSort", !0), n = t.getBaseAxis();
  if (process.env.NODE_ENV !== "production" && e && (n.type !== "category" && Vt("`realtimeSort` will not work because this bar series is not based on a category axis."), t.type !== "cartesian2d" && Vt("`realtimeSort` will not work because this bar series is not on cartesian2d.")), e && n.type === "category" && t.type === "cartesian2d")
    return {
      baseAxis: n,
      otherAxis: t.getOtherAxis(n)
    };
}
function hg(r, t, e, n, i, a, o, s) {
  var l, u;
  a ? (u = {
    x: n.x,
    width: n.width
  }, l = {
    y: n.y,
    height: n.height
  }) : (u = {
    y: n.y,
    height: n.height
  }, l = {
    x: n.x,
    width: n.width
  }), s || (o ? Ot : fe)(e, {
    shape: l
  }, t, i, null);
  var f = t ? r.baseAxis.model : null;
  (o ? Ot : fe)(e, {
    shape: u
  }, f, i);
}
function cg(r, t) {
  for (var e = 0; e < t.length; e++)
    if (!isFinite(r[t[e]]))
      return !0;
  return !1;
}
var TI = ["x", "y", "width", "height"], CI = ["cx", "cy", "r", "startAngle", "endAngle"], vg = {
  cartesian2d: function(r) {
    return !cg(r, TI);
  },
  polar: function(r) {
    return !cg(r, CI);
  }
}, es = {
  // itemModel is only used to get borderWidth, which is not needed
  // when calculating bar background layout.
  cartesian2d: function(r, t, e) {
    var n = r.getItemLayout(t), i = e ? MI(e, n) : 0, a = n.width > 0 ? 1 : -1, o = n.height > 0 ? 1 : -1;
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
function DI(r) {
  return r.startAngle != null && r.endAngle != null && r.startAngle === r.endAngle;
}
function n1(r) {
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
function pg(r, t, e, n, i, a, o, s) {
  var l = t.getItemVisual(e, "style");
  if (s) {
    if (!a.get("roundCap")) {
      var f = r.shape, h = wa(n.getModel("itemStyle"), f, !0);
      B(f, h), r.setShape(f);
    }
  } else {
    var u = n.get(["itemStyle", "borderRadius"]) || 0;
    r.setShape("r", u);
  }
  r.useStyle(l);
  var v = n.getShallow("cursor");
  v && r.attr("cursor", v);
  var c = s ? o ? i.r >= i.r0 ? "endArc" : "startArc" : i.endAngle >= i.startAngle ? "endAngle" : "startAngle" : o ? i.height >= 0 ? "bottom" : "top" : i.width >= 0 ? "right" : "left", p = Kr(n);
  Gn(r, p, {
    labelFetcher: a,
    labelDataIndex: e,
    defaultText: Xc(a.getData(), e),
    inheritColor: l.fill,
    defaultOpacity: l.opacity,
    defaultOutsidePosition: c
  });
  var d = r.getTextContent();
  if (s && d) {
    var g = n.get(["label", "position"]);
    r.textConfig.inside = g === "middle" ? !0 : null, SI(r, g === "outside" ? c : g, n1(o), n.get(["label", "rotate"]));
  }
  $T(d, p, a.getRawValue(e), function(m) {
    return q_(t, m);
  });
  var y = n.getModel(["emphasis"]);
  Vn(r, y.get("focus"), y.get("blurScope"), y.get("disabled")), Ya(r, n), DI(i) && (r.style.fill = "none", r.style.stroke = "none", D(r.states, function(m) {
    m.style && (m.style.fill = m.style.stroke = "none");
  }));
}
function MI(r, t) {
  var e = r.get(["itemStyle", "borderColor"]);
  if (!e || e === "none")
    return 0;
  var n = r.get(["itemStyle", "borderWidth"]) || 0, i = isNaN(t.width) ? Number.MAX_VALUE : Math.abs(t.width), a = isNaN(t.height) ? Number.MAX_VALUE : Math.abs(t.height);
  return Math.min(n, i, a);
}
var AI = (
  /** @class */
  /* @__PURE__ */ (function() {
    function r() {
    }
    return r;
  })()
), dg = (
  /** @class */
  (function(r) {
    z(t, r);
    function t(e) {
      var n = r.call(this, e) || this;
      return n.type = "largeBar", n;
    }
    return t.prototype.getDefaultShape = function() {
      return new AI();
    }, t.prototype.buildPath = function(e, n) {
      for (var i = n.points, a = this.baseDimIdx, o = 1 - this.baseDimIdx, s = [], l = [], u = this.barWidth, f = 0; f < i.length; f += 3)
        l[a] = u, l[o] = i[f + 2], s[a] = i[f + a], s[o] = i[f + o], e.rect(s[0], s[1], l[0], l[1]);
    }, t;
  })(pt)
);
function gg(r, t, e, n) {
  var i = r.getData(), a = i.getLayout("valueAxisHorizontal") ? 1 : 0, o = i.getLayout("largeDataIndices"), s = i.getLayout("size"), l = r.getModel("backgroundStyle"), u = i.getLayout("largeBackgroundPoints");
  if (u) {
    var f = new dg({
      shape: {
        points: u
      },
      incremental: !!n,
      silent: !0,
      z2: 0
    });
    f.baseDimIdx = a, f.largeDataIndices = o, f.barWidth = s, f.useStyle(l.getItemStyle()), t.add(f), e && e.push(f);
  }
  var h = new dg({
    shape: {
      points: i.getLayout("largePoints")
    },
    incremental: !!n,
    ignoreCoarsePointer: !0,
    z2: 1
  });
  h.baseDimIdx = a, h.largeDataIndices = o, h.barWidth = s, t.add(h), h.useStyle(i.getVisual("style")), h.style.stroke = null, at(h).seriesIndex = r.seriesIndex, r.get("silent") || (h.on("mousedown", yg), h.on("mousemove", yg)), e && e.push(h);
}
var yg = kl(function(r) {
  var t = this, e = EI(t, r.offsetX, r.offsetY);
  at(t).dataIndex = e >= 0 ? e : null;
}, 30, !1);
function EI(r, t, e) {
  for (var n = r.baseDimIdx, i = 1 - n, a = r.shape.points, o = r.largeDataIndices, s = [], l = [], u = r.barWidth, f = 0, h = a.length / 3; f < h; f++) {
    var v = f * 3;
    if (l[n] = u, l[i] = a[v + 2], s[n] = a[v + n], s[i] = a[v + i], l[i] < 0 && (s[i] += l[i], l[i] = -l[i]), t >= s[0] && t <= s[0] + l[0] && e >= s[1] && e <= s[1] + l[1])
      return o[f];
  }
  return -1;
}
function i1(r, t, e) {
  if (Gl(e, "cartesian2d")) {
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
function II(r, t, e) {
  var n = r.type === "polar" ? Cr : _t;
  return new n({
    shape: i1(t, e, r),
    silent: !0,
    z2: 0
  });
}
function LI(r) {
  r.registerChartView(wI), r.registerSeriesModel(yI), r.registerLayout(r.PRIORITY.VISUAL.LAYOUT, wt(WA, "bar")), r.registerLayout(r.PRIORITY.VISUAL.PROGRESSIVE_LAYOUT, UA("bar")), r.registerProcessor(r.PRIORITY.PROCESSOR.STATISTIC, r1("bar")), r.registerAction({
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
var mg = Math.PI * 2, rs = Math.PI / 180;
function a1(r, t) {
  return ar(r.getBoxLayoutParams(), {
    width: t.getWidth(),
    height: t.getHeight()
  });
}
function o1(r, t) {
  var e = a1(r, t), n = r.get("center"), i = r.get("radius");
  H(i) || (i = [0, i]);
  var a = ct(e.width, t.getWidth()), o = ct(e.height, t.getHeight()), s = Math.min(a, o), l = ct(i[0], s / 2), u = ct(i[1], s / 2), f, h, v = r.coordinateSystem;
  if (v) {
    var c = v.dataToPoint(n);
    f = c[0] || 0, h = c[1] || 0;
  } else
    H(n) || (n = [n, n]), f = ct(n[0], a) + e.x, h = ct(n[1], o) + e.y;
  return {
    cx: f,
    cy: h,
    r0: l,
    r: u
  };
}
function PI(r, t, e) {
  t.eachSeriesByType(r, function(n) {
    var i = n.getData(), a = i.mapDimension("value"), o = a1(n, e), s = o1(n, e), l = s.cx, u = s.cy, f = s.r, h = s.r0, v = -n.get("startAngle") * rs, c = n.get("endAngle"), p = n.get("padAngle") * rs;
    c = c === "auto" ? v - mg : -c * rs;
    var d = n.get("minAngle") * rs, g = d + p, y = 0;
    i.each(a, function(F) {
      !isNaN(F) && y++;
    });
    var m = i.getSum(a), _ = Math.PI / (m || y) * 2, S = n.get("clockwise"), w = n.get("roseType"), b = n.get("stillShowZeroSum"), x = i.getDataExtent(a);
    x[0] = 0;
    var T = S ? 1 : -1, A = [v, c], M = T * p / 2;
    gm(A, !S), v = A[0], c = A[1];
    var C = s1(n);
    C.startAngle = v, C.endAngle = c, C.clockwise = S;
    var E = Math.abs(c - v), I = E, P = 0, O = v;
    if (i.setLayout({
      viewRect: o,
      r: f
    }), i.each(a, function(F, N) {
      var V;
      if (isNaN(F)) {
        i.setItemLayout(N, {
          angle: NaN,
          startAngle: NaN,
          endAngle: NaN,
          clockwise: S,
          cx: l,
          cy: u,
          r0: h,
          r: w ? NaN : f
        });
        return;
      }
      w !== "area" ? V = m === 0 && b ? _ : F * _ : V = E / y, V < g ? (V = g, I -= g) : P += F;
      var L = O + T * V, k = 0, G = 0;
      p > V ? (k = O + T * V / 2, G = k) : (k = O + M, G = L - M), i.setItemLayout(N, {
        angle: V,
        startAngle: k,
        endAngle: G,
        clockwise: S,
        cx: l,
        cy: u,
        r0: h,
        r: w ? ge(F, x, [h, f]) : f
      }), O = L;
    }), I < mg && y)
      if (I <= 1e-3) {
        var R = E / y;
        i.each(a, function(F, N) {
          if (!isNaN(F)) {
            var V = i.getItemLayout(N);
            V.angle = R;
            var L = 0, k = 0;
            R < p ? (L = v + T * (N + 1 / 2) * R, k = L) : (L = v + T * N * R + M, k = v + T * (N + 1) * R - M), V.startAngle = L, V.endAngle = k;
          }
        });
      } else
        _ = I / P, O = v, i.each(a, function(F, N) {
          if (!isNaN(F)) {
            var V = i.getItemLayout(N), L = V.angle === g ? g : F * _, k = 0, G = 0;
            L < p ? (k = O + T * L / 2, G = k) : (k = O + M, G = O + T * L - M), V.startAngle = k, V.endAngle = G, O += T * L;
          }
        });
  });
}
var s1 = Mt();
function l1(r) {
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
var OI = Math.PI / 180;
function _g(r, t, e, n, i, a, o, s, l, u) {
  if (r.length < 2)
    return;
  function f(d) {
    for (var g = d.rB, y = g * g, m = 0; m < d.list.length; m++) {
      var _ = d.list[m], S = Math.abs(_.label.y - e), w = n + _.len, b = w * w, x = Math.sqrt(Math.abs((1 - S * S / y) * b)), T = t + (x + _.len2) * i, A = T - _.label.x, M = _.targetTextWidth - A * i;
      u1(_, M, !0), _.label.x = T;
    }
  }
  function h(d) {
    for (var g = {
      list: [],
      maxY: 0
    }, y = {
      list: [],
      maxY: 0
    }, m = 0; m < d.length; m++)
      if (d[m].labelAlignTo === "none") {
        var _ = d[m], S = _.label.y > e ? y : g, w = Math.abs(_.label.y - e);
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
      var p = r[c].label.x - u;
      r[c].linePoints[1][0] += p, r[c].label.x = u;
    }
  $E(r, l, l + o) && h(r);
}
function RI(r, t, e, n, i, a, o, s) {
  for (var l = [], u = [], f = Number.MAX_VALUE, h = -Number.MAX_VALUE, v = 0; v < r.length; v++) {
    var c = r[v].label;
    ff(r[v]) || (c.x < t ? (f = Math.min(f, c.x), l.push(r[v])) : (h = Math.max(h, c.x), u.push(r[v])));
  }
  for (var v = 0; v < r.length; v++) {
    var p = r[v];
    if (!ff(p) && p.linePoints) {
      if (p.labelStyleWidth != null)
        continue;
      var c = p.label, d = p.linePoints, g = void 0;
      p.labelAlignTo === "edge" ? c.x < t ? g = d[2][0] - p.labelDistance - o - p.edgeDistance : g = o + i - p.edgeDistance - d[2][0] - p.labelDistance : p.labelAlignTo === "labelLine" ? c.x < t ? g = f - o - p.bleedMargin : g = o + i - h - p.bleedMargin : c.x < t ? g = c.x - o - p.bleedMargin : g = o + i - c.x - p.bleedMargin, p.targetTextWidth = g, u1(p, g);
    }
  }
  _g(u, t, e, n, 1, i, a, o, s, h), _g(l, t, e, n, -1, i, a, o, s, f);
  for (var v = 0; v < r.length; v++) {
    var p = r[v];
    if (!ff(p) && p.linePoints) {
      var c = p.label, d = p.linePoints, y = p.labelAlignTo === "edge", m = c.style.padding, _ = m ? m[1] + m[3] : 0, S = c.style.backgroundColor ? 0 : _, w = p.rect.width + S, b = d[1][0] - d[2][0];
      y ? c.x < t ? d[2][0] = o + p.edgeDistance + w + p.labelDistance : d[2][0] = o + i - p.edgeDistance - w - p.labelDistance : (c.x < t ? d[2][0] = c.x + p.labelDistance : d[2][0] = c.x - p.labelDistance, d[1][0] = d[2][0] + b), d[1][1] = d[2][1] = c.y;
    }
  }
}
function u1(r, t, e) {
  if (e === void 0 && (e = !1), r.labelStyleWidth == null) {
    var n = r.label, i = n.style, a = r.rect, o = i.backgroundColor, s = i.padding, l = s ? s[1] + s[3] : 0, u = i.overflow, f = a.width + (o ? 0 : l);
    if (t < f || e) {
      var h = a.height;
      if (u && u.match("break")) {
        n.setStyle("backgroundColor", null), n.setStyle("width", t - l);
        var v = n.getBoundingRect();
        n.setStyle("width", Math.ceil(v.width)), n.setStyle("backgroundColor", o);
      } else {
        var c = t - l, p = t < f ? c : (
          // Current available width is enough, but the text may have
          // already been wrapped with a smaller available width.
          e ? c > r.unconstrainedWidth ? null : c : null
        );
        n.setStyle("width", p);
      }
      var d = n.getBoundingRect();
      a.width = d.width;
      var g = (n.style.margin || 0) + 2.1;
      a.height = d.height + g, a.y -= (a.height - h) / 2;
    }
  }
}
function ff(r) {
  return r.position === "center";
}
function NI(r) {
  var t = r.getData(), e = [], n, i, a = !1, o = (r.get("minShowLabelAngle") || 0) * OI, s = t.getLayout("viewRect"), l = t.getLayout("r"), u = s.width, f = s.x, h = s.y, v = s.height;
  function c(b) {
    b.ignore = !0;
  }
  function p(b) {
    if (!b.ignore)
      return !0;
    for (var x in b.states)
      if (b.states[x].ignore === !1)
        return !0;
    return !1;
  }
  t.each(function(b) {
    var x = t.getItemGraphicEl(b), T = x.shape, A = x.getTextContent(), M = x.getTextGuideLine(), C = t.getItemModel(b), E = C.getModel("label"), I = E.get("position") || C.get(["emphasis", "label", "position"]), P = E.get("distanceToLabelLine"), O = E.get("alignTo"), R = ct(E.get("edgeDistance"), u), F = E.get("bleedMargin"), N = C.getModel("labelLine"), V = N.get("length");
    V = ct(V, u);
    var L = N.get("length2");
    if (L = ct(L, u), Math.abs(T.endAngle - T.startAngle) < o) {
      D(A.states, c), A.ignore = !0, M && (D(M.states, c), M.ignore = !0);
      return;
    }
    if (p(A)) {
      var k = (T.startAngle + T.endAngle) / 2, G = Math.cos(k), X = Math.sin(k), rt, nt, It, Ht;
      n = T.cx, i = T.cy;
      var ft = I === "inside" || I === "inner";
      if (I === "center")
        rt = T.cx, nt = T.cy, Ht = "center";
      else {
        var bt = (ft ? (T.r + T.r0) / 2 * G : T.r * G) + n, yt = (ft ? (T.r + T.r0) / 2 * X : T.r * X) + i;
        if (rt = bt + G * 3, nt = yt + X * 3, !ft) {
          var q = bt + G * (V + l - T.r), it = yt + X * (V + l - T.r), $e = q + (G < 0 ? -1 : 1) * L, Lt = it;
          O === "edge" ? rt = G < 0 ? f + R : f + u - R : rt = $e + (G < 0 ? -P : P), nt = Lt, It = [[bt, yt], [q, it], [$e, Lt]];
        }
        Ht = ft ? "center" : O === "edge" ? G > 0 ? "right" : "left" : G > 0 ? "left" : "right";
      }
      var Dr = Math.PI, ur = 0, Vi = E.get("rotate");
      if (dt(Vi))
        ur = Vi * (Dr / 180);
      else if (I === "center")
        ur = 0;
      else if (Vi === "radial" || Vi === !0) {
        var V1 = G < 0 ? -k + Dr : -k;
        ur = V1;
      } else if (Vi === "tangential" && I !== "outside" && I !== "outer") {
        var Un = Math.atan2(G, X);
        Un < 0 && (Un = Dr * 2 + Un);
        var B1 = X > 0;
        B1 && (Un = Dr + Un), ur = Un - Dr;
      }
      if (a = !!ur, A.x = rt, A.y = nt, A.rotation = ur, A.setStyle({
        verticalAlign: "middle"
      }), ft) {
        A.setStyle({
          align: Ht
        });
        var Xl = A.states.select;
        Xl && (Xl.x += A.x, Xl.y += A.y);
      } else {
        var Bi = A.getBoundingRect().clone();
        Bi.applyTransform(A.getComputedTransform());
        var Qc = (A.style.margin || 0) + 2.1;
        Bi.y -= Qc / 2, Bi.height += Qc, e.push({
          label: A,
          labelLine: M,
          position: I,
          len: V,
          len2: L,
          minTurnAngle: N.get("minTurnAngle"),
          maxSurfaceAngle: N.get("maxSurfaceAngle"),
          surfaceNormal: new K(G, X),
          linePoints: It,
          textAlign: Ht,
          labelDistance: P,
          labelAlignTo: O,
          edgeDistance: R,
          bleedMargin: F,
          rect: Bi,
          unconstrainedWidth: Bi.width,
          labelStyleWidth: A.style.width
        });
      }
      x.setTextConfig({
        inside: ft
      });
    }
  }), !a && r.get("avoidLabelOverlap") && RI(e, n, i, l, u, v, f, h);
  for (var d = 0; d < e.length; d++) {
    var g = e[d], y = g.label, m = g.labelLine, _ = isNaN(y.x) || isNaN(y.y);
    if (y) {
      y.setStyle({
        align: g.textAlign
      }), _ && (D(y.states, c), y.ignore = !0);
      var S = y.states.select;
      S && (S.x += y.x, S.y += y.y);
    }
    if (m) {
      var w = g.linePoints;
      _ || !w ? (D(m.states, c), m.ignore = !0) : (GE(w, g.minTurnAngle), WE(w, g.surfaceNormal, g.maxSurfaceAngle), m.setShape({
        points: w
      }), y.__hostTarget.textGuideLineConfig = {
        anchor: new K(w[0][0], w[0][1])
      });
    }
  }
}
var kI = (
  /** @class */
  (function(r) {
    z(t, r);
    function t(e, n, i) {
      var a = r.call(this) || this;
      a.z2 = 2;
      var o = new St();
      return a.setTextContent(o), a.updateData(e, n, i, !0), a;
    }
    return t.prototype.updateData = function(e, n, i, a) {
      var o = this, s = e.hostModel, l = e.getItemModel(n), u = l.getModel("emphasis"), f = e.getItemLayout(n), h = B(wa(l.getModel("itemStyle"), f, !0), f);
      if (isNaN(h.startAngle)) {
        o.setShape(h);
        return;
      }
      if (a) {
        o.setShape(h);
        var v = s.getShallow("animationType");
        s.ecModel.ssr ? (fe(o, {
          scaleX: 0,
          scaleY: 0
        }, s, {
          dataIndex: n,
          isFrom: !0
        }), o.originX = h.cx, o.originY = h.cy) : v === "scale" ? (o.shape.r = f.r0, fe(o, {
          shape: {
            r: f.r
          }
        }, s, n)) : i != null ? (o.setShape({
          startAngle: i,
          endAngle: i
        }), fe(o, {
          shape: {
            startAngle: f.startAngle,
            endAngle: f.endAngle
          }
        }, s, n)) : (o.shape.endAngle = f.startAngle, Ot(o, {
          shape: {
            endAngle: f.endAngle
          }
        }, s, n));
      } else
        bl(o), Ot(o, {
          shape: h
        }, s, n);
      o.useStyle(e.getItemVisual(n, "style")), Ya(o, l);
      var c = (f.startAngle + f.endAngle) / 2, p = s.get("selectedOffset"), d = Math.cos(c) * p, g = Math.sin(c) * p, y = l.getShallow("cursor");
      y && o.attr("cursor", y), this._updateLabel(s, e, n), o.ensureState("emphasis").shape = B({
        r: f.r + (u.get("scale") && u.get("scaleSize") || 0)
      }, wa(u.getModel("itemStyle"), f)), B(o.ensureState("select"), {
        x: d,
        y: g,
        shape: wa(l.getModel(["select", "itemStyle"]), f)
      }), B(o.ensureState("blur"), {
        shape: wa(l.getModel(["blur", "itemStyle"]), f)
      });
      var m = o.getTextGuideLine(), _ = o.getTextContent();
      m && B(m.ensureState("select"), {
        x: d,
        y: g
      }), B(_.ensureState("select"), {
        x: d,
        y: g
      }), Vn(this, u.get("focus"), u.get("blurScope"), u.get("disabled"));
    }, t.prototype._updateLabel = function(e, n, i) {
      var a = this, o = n.getItemModel(i), s = o.getModel("labelLine"), l = n.getItemVisual(i, "style"), u = l && l.fill, f = l && l.opacity;
      Gn(a, Kr(o), {
        labelFetcher: n.hostModel,
        labelDataIndex: i,
        inheritColor: u,
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
        c || (c = new Hn(), this.setTextGuideLine(c)), X_(this, $_(o), {
          stroke: u,
          opacity: Yr(s.get(["lineStyle", "opacity"]), f, 1)
        });
      }
    }, t;
  })(Cr)
), VI = (
  /** @class */
  (function(r) {
    z(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.ignoreLabelLineUpdate = !0, e;
    }
    return t.prototype.render = function(e, n, i, a) {
      var o = e.getData(), s = this._data, l = this.group, u;
      if (!s && o.count() > 0) {
        for (var f = o.getItemLayout(0), h = 1; isNaN(f && f.startAngle) && h < o.count(); ++h)
          f = o.getItemLayout(h);
        f && (u = f.startAngle);
      }
      if (this._emptyCircleSector && l.remove(this._emptyCircleSector), o.count() === 0 && e.get("showEmptyCircle")) {
        var v = s1(e), c = new Cr({
          shape: B(o1(e, i), v)
        });
        c.useStyle(e.getModel("emptyCircleStyle").getItemStyle()), this._emptyCircleSector = c, l.add(c);
      }
      o.diff(s).add(function(p) {
        var d = new kI(o, p, u);
        o.setItemGraphicEl(p, d), l.add(d);
      }).update(function(p, d) {
        var g = s.getItemGraphicEl(d);
        g.updateData(o, p, u), g.off("click"), l.add(g), o.setItemGraphicEl(p, g);
      }).remove(function(p) {
        var d = s.getItemGraphicEl(p);
        Xa(d, e, p);
      }).execute(), NI(e), e.get("animationTypeUpdate") !== "expansion" && (this._data = o);
    }, t.prototype.dispose = function() {
    }, t.prototype.containPoint = function(e, n) {
      var i = n.getData(), a = i.getItemLayout(0);
      if (a) {
        var o = e[0] - a.cx, s = e[1] - a.cy, l = Math.sqrt(o * o + s * s);
        return l <= a.r && l >= a.r0;
      }
    }, t.type = "pie", t;
  })(Pt)
);
function f1(r, t, e) {
  t = H(t) && {
    coordDimensions: t
  } || B({
    encodeDefine: r.getEncode()
  }, t);
  var n = r.getSource(), i = Fc(n, t).dimensions, a = new zc(i, r);
  return a.initData(n, e), a;
}
var h1 = (
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
), BI = Mt(), zI = (
  /** @class */
  (function(r) {
    z(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t.prototype.init = function(e) {
      r.prototype.init.apply(this, arguments), this.legendVisualProvider = new h1(J(this.getData, this), J(this.getRawData, this)), this._defaultLabelLine(e);
    }, t.prototype.mergeOption = function() {
      r.prototype.mergeOption.apply(this, arguments);
    }, t.prototype.getInitialData = function() {
      return f1(this, {
        coordDimensions: ["value"],
        encodeDefaulter: wt(f0, this)
      });
    }, t.prototype.getDataParams = function(e) {
      var n = this.getData(), i = BI(n), a = i.seats;
      if (!a) {
        var o = [];
        n.each(n.mapDimension("value"), function(l) {
          o.push(l);
        }), a = i.seats = rm(o, n.hostModel.get("percentPrecision"));
      }
      var s = r.prototype.getDataParams.call(this, e);
      return s.percent = a[e] || 0, s.$vars.push("percent"), s;
    }, t.prototype._defaultLabelLine = function(e) {
      ks(e, "labelLine", ["show"]);
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
  })(zt)
);
function FI(r) {
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
function HI(r) {
  r.registerChartView(VI), r.registerSeriesModel(zI), oM("pie", r.registerAction), r.registerLayout(wt(PI, "pie")), r.registerProcessor(l1("pie")), r.registerProcessor(FI("pie"));
}
var GI = (
  /** @class */
  (function(r) {
    z(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e.hasSymbolVisual = !0, e;
    }
    return t.prototype.getInitialData = function(e, n) {
      return Li(null, this, {
        useEncodeDefaulter: !0
      });
    }, t.prototype.getProgressive = function() {
      var e = this.option.progressive;
      return e ?? (this.option.large ? 5e3 : this.get("progressive"));
    }, t.prototype.getProgressiveThreshold = function() {
      var e = this.option.progressiveThreshold;
      return e ?? (this.option.large ? 1e4 : this.get("progressiveThreshold"));
    }, t.prototype.brushSelector = function(e, n, i) {
      return i.point(n.getItemLayout(e));
    }, t.prototype.getZLevelKey = function() {
      return this.getData().count() > this.getProgressiveThreshold() ? this.id : "";
    }, t.type = "series.scatter", t.dependencies = ["grid", "polar", "geo", "singleAxis", "calendar"], t.defaultOption = {
      coordinateSystem: "cartesian2d",
      // zlevel: 0,
      z: 2,
      legendHoverLink: !0,
      symbolSize: 10,
      // symbolRotate: null,  // 图形旋转控制
      large: !1,
      // Available when large is true
      largeThreshold: 2e3,
      // cursor: null,
      itemStyle: {
        opacity: 0.8
        // color: 各异
      },
      emphasis: {
        scale: !0
      },
      // If clip the overflow graphics
      // Works on cartesian / polar series
      clip: !0,
      select: {
        itemStyle: {
          borderColor: "#212121"
        }
      },
      universalTransition: {
        divideShape: "clone"
      }
      // progressive: null
    }, t;
  })(zt)
), c1 = 4, WI = (
  /** @class */
  /* @__PURE__ */ (function() {
    function r() {
    }
    return r;
  })()
), UI = (
  /** @class */
  (function(r) {
    z(t, r);
    function t(e) {
      var n = r.call(this, e) || this;
      return n._off = 0, n.hoverDataIdx = -1, n;
    }
    return t.prototype.getDefaultShape = function() {
      return new WI();
    }, t.prototype.reset = function() {
      this.notClear = !1, this._off = 0;
    }, t.prototype.buildPath = function(e, n) {
      var i = n.points, a = n.size, o = this.symbolProxy, s = o.shape, l = e.getContext ? e.getContext() : e, u = l && a[0] < c1, f = this.softClipShape, h;
      if (u) {
        this._ctx = l;
        return;
      }
      for (this._ctx = null, h = this._off; h < i.length; ) {
        var v = i[h++], c = i[h++];
        isNaN(v) || isNaN(c) || f && !f.contain(v, c) || (s.x = v - a[0] / 2, s.y = c - a[1] / 2, s.width = a[0], s.height = a[1], o.buildPath(e, s, !0));
      }
      this.incremental && (this._off = h, this.notClear = !0);
    }, t.prototype.afterBrush = function() {
      var e = this.shape, n = e.points, i = e.size, a = this._ctx, o = this.softClipShape, s;
      if (a) {
        for (s = this._off; s < n.length; ) {
          var l = n[s++], u = n[s++];
          isNaN(l) || isNaN(u) || o && !o.contain(l, u) || a.fillRect(l - i[0] / 2, u - i[1] / 2, i[0], i[1]);
        }
        this.incremental && (this._off = s, this.notClear = !0);
      }
    }, t.prototype.findDataIndex = function(e, n) {
      for (var i = this.shape, a = i.points, o = i.size, s = Math.max(o[0], 4), l = Math.max(o[1], 4), u = a.length / 2 - 1; u >= 0; u--) {
        var f = u * 2, h = a[f] - s / 2, v = a[f + 1] - l / 2;
        if (e >= h && n >= v && e <= h + s && n <= v + l)
          return u;
      }
      return -1;
    }, t.prototype.contain = function(e, n) {
      var i = this.transformCoordToLocal(e, n), a = this.getBoundingRect();
      if (e = i[0], n = i[1], a.contain(e, n)) {
        var o = this.hoverDataIdx = this.findDataIndex(e, n);
        return o >= 0;
      }
      return this.hoverDataIdx = -1, !1;
    }, t.prototype.getBoundingRect = function() {
      var e = this._rect;
      if (!e) {
        for (var n = this.shape, i = n.points, a = n.size, o = a[0], s = a[1], l = 1 / 0, u = 1 / 0, f = -1 / 0, h = -1 / 0, v = 0; v < i.length; ) {
          var c = i[v++], p = i[v++];
          l = Math.min(c, l), f = Math.max(c, f), u = Math.min(p, u), h = Math.max(p, h);
        }
        e = this._rect = new lt(l - o / 2, u - s / 2, f - l + o, h - u + s);
      }
      return e;
    }, t;
  })(pt)
), YI = (
  /** @class */
  (function() {
    function r() {
      this.group = new xt();
    }
    return r.prototype.updateData = function(t, e) {
      this._clear();
      var n = this._create();
      n.setShape({
        points: t.getLayout("points")
      }), this._setCommon(n, t, e);
    }, r.prototype.updateLayout = function(t) {
      var e = t.getLayout("points");
      this.group.eachChild(function(n) {
        if (n.startIndex != null) {
          var i = (n.endIndex - n.startIndex) * 2, a = n.startIndex * 4 * 2;
          e = new Float32Array(e.buffer, a, i);
        }
        n.setShape("points", e), n.reset();
      });
    }, r.prototype.incrementalPrepareUpdate = function(t) {
      this._clear();
    }, r.prototype.incrementalUpdate = function(t, e, n) {
      var i = this._newAdded[0], a = e.getLayout("points"), o = i && i.shape.points;
      if (o && o.length < 2e4) {
        var s = o.length, l = new Float32Array(s + a.length);
        l.set(o), l.set(a, s), i.endIndex = t.end, i.setShape({
          points: l
        });
      } else {
        this._newAdded = [];
        var u = this._create();
        u.startIndex = t.start, u.endIndex = t.end, u.incremental = !0, u.setShape({
          points: a
        }), this._setCommon(u, e, n);
      }
    }, r.prototype.eachRendered = function(t) {
      this._newAdded[0] && t(this._newAdded[0]);
    }, r.prototype._create = function() {
      var t = new UI({
        cursor: "default"
      });
      return t.ignoreCoarsePointer = !0, this.group.add(t), this._newAdded.push(t), t;
    }, r.prototype._setCommon = function(t, e, n) {
      var i = e.hostModel;
      n = n || {};
      var a = e.getVisual("symbolSize");
      t.setShape("size", a instanceof Array ? a : [a, a]), t.softClipShape = n.clipShape || null, t.symbolProxy = Ue(e.getVisual("symbol"), 0, 0, 0, 0), t.setColor = t.symbolProxy.setColor;
      var o = t.shape.size[0] < c1;
      t.useStyle(
        // Draw shadow when doing fillRect is extremely slow.
        i.getModel("itemStyle").getItemStyle(o ? ["color", "shadowBlur", "shadowColor"] : ["color"])
      );
      var s = e.getVisual("style"), l = s && s.fill;
      l && t.setColor(l);
      var u = at(t);
      u.seriesIndex = i.seriesIndex, t.on("mousemove", function(f) {
        u.dataIndex = null;
        var h = t.hoverDataIdx;
        h >= 0 && (u.dataIndex = h + (t.startIndex || 0));
      });
    }, r.prototype.remove = function() {
      this._clear();
    }, r.prototype._clear = function() {
      this._newAdded = [], this.group.removeAll();
    }, r;
  })()
), XI = (
  /** @class */
  (function(r) {
    z(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.prototype.render = function(e, n, i) {
      var a = e.getData(), o = this._updateSymbolDraw(a, e);
      o.updateData(a, {
        // TODO
        // If this parameter should be a shape or a bounding volume
        // shape will be more general.
        // But bounding volume like bounding rect will be much faster in the contain calculation
        clipShape: this._getClipShape(e)
      }), this._finished = !0;
    }, t.prototype.incrementalPrepareRender = function(e, n, i) {
      var a = e.getData(), o = this._updateSymbolDraw(a, e);
      o.incrementalPrepareUpdate(a), this._finished = !1;
    }, t.prototype.incrementalRender = function(e, n, i) {
      this._symbolDraw.incrementalUpdate(e, n.getData(), {
        clipShape: this._getClipShape(n)
      }), this._finished = e.end === n.getData().count();
    }, t.prototype.updateTransform = function(e, n, i) {
      var a = e.getData();
      if (this.group.dirty(), !this._finished || a.count() > 1e4)
        return {
          update: !0
        };
      var o = qc("").reset(e, n, i);
      o.progress && o.progress({
        start: 0,
        end: a.count(),
        count: a.count()
      }, a), this._symbolDraw.updateLayout(a);
    }, t.prototype.eachRendered = function(e) {
      this._symbolDraw && this._symbolDraw.eachRendered(e);
    }, t.prototype._getClipShape = function(e) {
      if (e.get("clip", !0)) {
        var n = e.coordinateSystem;
        return n && n.getArea && n.getArea(0.1);
      }
    }, t.prototype._updateSymbolDraw = function(e, n) {
      var i = this._symbolDraw, a = n.pipelineContext, o = a.large;
      return (!i || o !== this._isLargeDraw) && (i && i.remove(), i = this._symbolDraw = o ? new YI() : new Z_(), this._isLargeDraw = o, this.group.removeAll()), this.group.add(i.group), i;
    }, t.prototype.remove = function(e, n) {
      this._symbolDraw && this._symbolDraw.remove(!0), this._symbolDraw = null;
    }, t.prototype.dispose = function() {
    }, t.type = "scatter", t;
  })(Pt)
), $I = (
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
  })(ot)
), bh = (
  /** @class */
  (function(r) {
    z(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t.prototype.getCoordSysModel = function() {
      return this.getReferringComponents("grid", Be).models[0];
    }, t.type = "cartesian2dAxis", t;
  })(ot)
);
Ie(bh, R_);
var v1 = {
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
}, qI = st({
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
}, v1), Zc = st({
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
}, v1), ZI = st({
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
}, Zc), jI = ut({
  logBase: 10
}, Zc);
const KI = {
  category: qI,
  value: Zc,
  time: ZI,
  log: jI
};
var QI = {
  value: 1,
  category: 1,
  time: 1,
  log: 1
};
function Sg(r, t, e, n) {
  D(QI, function(i, a) {
    var o = st(st({}, KI[a], !0), n, !0), s = (
      /** @class */
      (function(l) {
        z(u, l);
        function u() {
          var f = l !== null && l.apply(this, arguments) || this;
          return f.type = t + "Axis." + a, f;
        }
        return u.prototype.mergeDefaultAndTheme = function(f, h) {
          var v = Za(this), c = v ? Ol(f) : {}, p = h.getTheme();
          st(f, p.get(a + "Axis")), st(f, this.getDefaultOption()), f.type = bg(f), v && Ti(f, c, v);
        }, u.prototype.optionUpdated = function() {
          var f = this.option;
          f.type === "category" && (this.__ordinalMeta = gh.createByAxisModel(this));
        }, u.prototype.getCategories = function(f) {
          var h = this.option;
          if (h.type === "category")
            return f ? h.data : this.__ordinalMeta.categories;
        }, u.prototype.getOrdinalMeta = function() {
          return this.__ordinalMeta;
        }, u.type = t + "Axis." + a, u.defaultOption = o, u;
      })(e)
    );
    r.registerComponentModel(s);
  }), r.registerSubTypeDefaulter(t + "Axis", bg);
}
function bg(r) {
  return r.type || (r.data ? "category" : "value");
}
var JI = (
  /** @class */
  (function() {
    function r(t) {
      this.type = "cartesian", this._dimList = [], this._axes = {}, this.name = t || "";
    }
    return r.prototype.getAxis = function(t) {
      return this._axes[t];
    }, r.prototype.getAxes = function() {
      return Y(this._dimList, function(t) {
        return this._axes[t];
      }, this);
    }, r.prototype.getAxesByScale = function(t) {
      return t = t.toLowerCase(), At(this.getAxes(), function(e) {
        return e.scale.type === t;
      });
    }, r.prototype.addAxis = function(t) {
      var e = t.dim;
      this._axes[e] = t, this._dimList.push(e);
    }, r;
  })()
), wh = ["x", "y"];
function wg(r) {
  return r.type === "interval" || r.type === "time";
}
var tL = (
  /** @class */
  (function(r) {
    z(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = "cartesian2d", e.dimensions = wh, e;
    }
    return t.prototype.calcAffineTransform = function() {
      this._transform = this._invTransform = null;
      var e = this.getAxis("x").scale, n = this.getAxis("y").scale;
      if (!(!wg(e) || !wg(n))) {
        var i = e.getExtent(), a = n.getExtent(), o = this.dataToPoint([i[0], a[0]]), s = this.dataToPoint([i[1], a[1]]), l = i[1] - i[0], u = a[1] - a[0];
        if (!(!l || !u)) {
          var f = (s[0] - o[0]) / l, h = (s[1] - o[1]) / u, v = o[0] - i[0] * f, c = o[1] - a[0] * h, p = this._transform = [f, 0, 0, h, v, c];
          this._invTransform = oo([], p);
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
      var i = this.dataToPoint(e), a = this.dataToPoint(n), o = this.getArea(), s = new lt(i[0], i[1], a[0] - i[0], a[1] - i[1]);
      return o.intersect(s);
    }, t.prototype.dataToPoint = function(e, n, i) {
      i = i || [];
      var a = e[0], o = e[1];
      if (this._transform && a != null && isFinite(a) && o != null && isFinite(o))
        return ee(i, e, this._transform);
      var s = this.getAxis("x"), l = this.getAxis("y");
      return i[0] = s.toGlobalCoord(s.dataToCoord(a, n)), i[1] = l.toGlobalCoord(l.dataToCoord(o, n)), i;
    }, t.prototype.clampData = function(e, n) {
      var i = this.getAxis("x").scale, a = this.getAxis("y").scale, o = i.getExtent(), s = a.getExtent(), l = i.parse(e[0]), u = a.parse(e[1]);
      return n = n || [], n[0] = Math.min(Math.max(Math.min(o[0], o[1]), l), Math.max(o[0], o[1])), n[1] = Math.min(Math.max(Math.min(s[0], s[1]), u), Math.max(s[0], s[1])), n;
    }, t.prototype.pointToData = function(e, n) {
      var i = [];
      if (this._invTransform)
        return ee(i, e, this._invTransform);
      var a = this.getAxis("x"), o = this.getAxis("y");
      return i[0] = a.coordToData(a.toLocalCoord(e[0]), n), i[1] = o.coordToData(o.toLocalCoord(e[1]), n), i;
    }, t.prototype.getOtherAxis = function(e) {
      return this.getAxis(e.dim === "x" ? "y" : "x");
    }, t.prototype.getArea = function(e) {
      e = e || 0;
      var n = this.getAxis("x").getGlobalExtent(), i = this.getAxis("y").getGlobalExtent(), a = Math.min(n[0], n[1]) - e, o = Math.min(i[0], i[1]) - e, s = Math.max(n[0], n[1]) - a + e, l = Math.max(i[0], i[1]) - o + e;
      return new lt(a, o, s, l);
    }, t;
  })(JI)
), eL = (
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
  })(U_)
);
function xh(r, t, e) {
  e = e || {};
  var n = r.coordinateSystem, i = t.axis, a = {}, o = i.getAxesOnZeroOf()[0], s = i.position, l = o ? "onZero" : s, u = i.dim, f = n.getRect(), h = [f.x, f.x + f.width, f.y, f.y + f.height], v = {
    left: 0,
    right: 1,
    top: 0,
    bottom: 1,
    onZero: 2
  }, c = t.get("offset") || 0, p = u === "x" ? [h[2] - c, h[3] + c] : [h[0] - c, h[1] + c];
  if (o) {
    var d = o.toGlobalCoord(o.dataToCoord(0));
    p[v.onZero] = Math.max(Math.min(d, p[1]), p[0]);
  }
  a.position = [u === "y" ? p[v[l]] : h[0], u === "x" ? p[v[l]] : h[3]], a.rotation = Math.PI / 2 * (u === "x" ? 0 : 1);
  var g = {
    top: -1,
    bottom: 1,
    left: -1,
    right: 1
  };
  a.labelDirection = a.tickDirection = a.nameDirection = g[s], a.labelOffset = o ? p[v[s]] - p[v.onZero] : 0, t.get(["axisTick", "inside"]) && (a.tickDirection = -a.tickDirection), wr(e.labelInside, t.get(["axisLabel", "inside"])) && (a.labelDirection = -a.labelDirection);
  var y = t.get(["axisLabel", "rotate"]);
  return a.labelRotate = l === "top" ? -y : y, a.z2 = 1, a;
}
function xg(r) {
  return r.get("coordinateSystem") === "cartesian2d";
}
function Tg(r) {
  var t = {
    xAxisModel: null,
    yAxisModel: null
  };
  return D(t, function(e, n) {
    var i = n.replace(/Model$/, ""), a = r.getReferringComponents(i, Be).models[0];
    if (process.env.NODE_ENV !== "production" && !a)
      throw new Error(i + ' "' + Yr(r.get(i + "Index"), r.get(i + "Id"), 0) + '" not found');
    t[n] = a;
  }), t;
}
var hf = Math.log;
function rL(r, t, e) {
  var n = Pi.prototype, i = n.getTicks.call(e), a = n.getTicks.call(e, !0), o = i.length - 1, s = n.getInterval.call(e), l = L_(r, t), u = l.extent, f = l.fixMin, h = l.fixMax;
  if (r.type === "log") {
    var v = hf(r.base);
    u = [hf(u[0]) / v, hf(u[1]) / v];
  }
  r.setExtent(u[0], u[1]), r.calcNiceExtent({
    splitNumber: o,
    fixMin: f,
    fixMax: h
  });
  var c = n.getExtent.call(r);
  f && (u[0] = c[0]), h && (u[1] = c[1]);
  var p = n.getInterval.call(r), d = u[0], g = u[1];
  if (f && h)
    p = (g - d) / o;
  else if (f)
    for (g = u[0] + p * o; g < u[1] && isFinite(g) && isFinite(u[1]); )
      p = ef(p), g = u[0] + p * o;
  else if (h)
    for (d = u[1] - p * o; d > u[0] && isFinite(d) && isFinite(u[0]); )
      p = ef(p), d = u[1] - p * o;
  else {
    var y = r.getTicks().length - 1;
    y > o && (p = ef(p));
    var m = p * o;
    g = Math.ceil(u[1] / p) * p, d = Dt(g - m), d < 0 && u[0] >= 0 ? (d = 0, g = Dt(m)) : g > 0 && u[1] <= 0 && (g = 0, d = -Dt(m));
  }
  var _ = (i[0].value - a[0].value) / s, S = (i[o].value - a[o].value) / s;
  if (n.setExtent.call(r, d + p * _, g + p * S), n.setInterval.call(r, p), (_ || S) && n.setNiceExtent.call(r, d + p, g - p), process.env.NODE_ENV !== "production") {
    var w = n.getTicks.call(r);
    w[1] && (!NA(p) || Rs(w[1].value) > Rs(p)) && Vt(
      // eslint-disable-next-line
      "The ticks may be not readable when set min: " + t.get("min") + ", max: " + t.get("max") + " and alignTicks: true"
    );
  }
}
var nL = (
  /** @class */
  (function() {
    function r(t, e, n) {
      this.type = "grid", this._coordsMap = {}, this._coordsList = [], this._axesMap = {}, this._axesList = [], this.axisPointerEnabled = !0, this.dimensions = wh, this._initCartesian(t, e, n), this.model = t;
    }
    return r.prototype.getRect = function() {
      return this._rect;
    }, r.prototype.update = function(t, e) {
      var n = this._axesMap;
      this._updateScale(t, this.model);
      function i(o) {
        var s, l = gt(o), u = l.length;
        if (u) {
          for (var f = [], h = u - 1; h >= 0; h--) {
            var v = +l[h], c = o[v], p = c.model, d = c.scale;
            // Only value and log axis without interval support alignTicks.
            yh(d) && p.get("alignTicks") && p.get("interval") == null ? f.push(c) : (mh(d, p), yh(d) && (s = c));
          }
          f.length && (s || (s = f.pop(), mh(s.scale, s.model)), D(f, function(g) {
            rL(g.scale, g.model, s.scale);
          }));
        }
      }
      i(n.x), i(n.y);
      var a = {};
      D(n.x, function(o) {
        Cg(n, "y", o, a);
      }), D(n.y, function(o) {
        Cg(n, "x", o, a);
      }), this.resize(this.model, e);
    }, r.prototype.resize = function(t, e, n) {
      var i = t.getBoxLayoutParams(), a = !n && t.get("containLabel"), o = ar(i, {
        width: e.getWidth(),
        height: e.getHeight()
      });
      this._rect = o;
      var s = this._axesList;
      l(), a && (D(s, function(u) {
        if (!u.model.get(["axisLabel", "inside"])) {
          var f = uE(u);
          if (f) {
            var h = u.isHorizontal() ? "height" : "width", v = u.model.get(["axisLabel", "margin"]);
            o[h] -= f[h] + v, u.position === "top" ? o.y += f.height + v : u.position === "left" && (o.x += f.width + v);
          }
        }
      }), l()), D(this._coordsList, function(u) {
        u.calcAffineTransform();
      });
      function l() {
        D(s, function(u) {
          var f = u.isHorizontal(), h = f ? [0, o.width] : [0, o.height], v = u.inverse ? 1 : 0;
          u.setExtent(h[v], h[1 - v]), iL(u, f ? o.x : o.y);
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
      W(t) && (e = t.yAxisIndex, t = t.xAxisIndex);
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
      var e = t.seriesModel, n = t.xAxisModel || e && e.getReferringComponents("xAxis", Be).models[0], i = t.yAxisModel || e && e.getReferringComponents("yAxis", Be).models[0], a = t.gridModel, o = this._coordsList, s, l;
      if (e)
        s = e.coordinateSystem, vt(o, s) < 0 && (s = null);
      else if (n && i)
        s = this.getCartesian(n.componentIndex, i.componentIndex);
      else if (n)
        l = this.getAxis("x", n.componentIndex);
      else if (i)
        l = this.getAxis("y", i.componentIndex);
      else if (a) {
        var u = a.coordinateSystem;
        u === this && (s = this._coordsList[0]);
      }
      return {
        cartesian: s,
        axis: l
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
      }, l = {
        x: 0,
        y: 0
      };
      if (e.eachComponent("xAxis", u("x"), this), e.eachComponent("yAxis", u("y"), this), !l.x || !l.y) {
        this._axesMap = {}, this._axesList = [];
        return;
      }
      this._axesMap = s, D(s.x, function(f, h) {
        D(s.y, function(v, c) {
          var p = "x" + h + "y" + c, d = new tL(p);
          d.master = i, d.model = t, i._coordsMap[p] = d, i._coordsList.push(d), d.addAxis(f), d.addAxis(v);
        });
      });
      function u(f) {
        return function(h, v) {
          if (cf(h, t)) {
            var c = h.get("position");
            f === "x" ? c !== "top" && c !== "bottom" && (c = o.bottom ? "top" : "bottom") : c !== "left" && c !== "right" && (c = o.left ? "right" : "left"), o[c] = !0;
            var p = new eL(f, P_(h), [0, 0], h.get("type"), c), d = p.type === "category";
            p.onBand = d && h.get("boundaryGap"), p.inverse = h.get("inverse"), h.axis = p, p.model = h, p.grid = a, p.index = v, a._axesList.push(p), s[f][v] = p, l[f]++;
          }
        };
      }
    }, r.prototype._updateScale = function(t, e) {
      D(this._axesList, function(i) {
        if (i.scale.setExtent(1 / 0, -1 / 0), i.type === "category") {
          var a = i.model.get("categorySortInfo");
          i.scale.setSortInfo(a);
        }
      }), t.eachSeries(function(i) {
        if (xg(i)) {
          var a = Tg(i), o = a.xAxisModel, s = a.yAxisModel;
          if (!cf(o, e) || !cf(s, e))
            return;
          var l = this.getCartesian(o.componentIndex, s.componentIndex), u = i.getData(), f = l.getAxis("x"), h = l.getAxis("y");
          n(u, f), n(u, h);
        }
      }, this);
      function n(i, a) {
        D(hE(i, a.dim), function(o) {
          a.scale.unionExtentFromData(i, o);
        });
      }
    }, r.prototype.getTooltipAxes = function(t) {
      var e = [], n = [];
      return D(this.getCartesians(), function(i) {
        var a = t != null && t !== "auto" ? i.getAxis(t) : i.getBaseAxis(), o = i.getOtherAxis(a);
        vt(e, a) < 0 && e.push(a), vt(n, o) < 0 && n.push(o);
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
        if (xg(i)) {
          var a = Tg(i), o = a.xAxisModel, s = a.yAxisModel, l = o.getCoordSysModel();
          if (process.env.NODE_ENV !== "production") {
            if (!l)
              throw new Error('Grid "' + Yr(o.get("gridIndex"), o.get("gridId"), 0) + '" not found');
            if (o.getCoordSysModel() !== s.getCoordSysModel())
              throw new Error("xAxis and yAxis must use the same grid");
          }
          var u = l.coordinateSystem;
          i.coordinateSystem = u.getCartesian(o.componentIndex, s.componentIndex);
        }
      }), n;
    }, r.dimensions = wh, r;
  })()
);
function cf(r, t) {
  return r.getCoordSysModel() === t;
}
function Cg(r, t, e, n) {
  e.getAxesOnZeroOf = function() {
    return a ? [a] : [];
  };
  var i = r[t], a, o = e.model, s = o.get(["axisLine", "onZero"]), l = o.get(["axisLine", "onZeroAxisIndex"]);
  if (!s)
    return;
  if (l != null)
    Dg(i[l]) && (a = i[l]);
  else
    for (var u in i)
      if (i.hasOwnProperty(u) && Dg(i[u]) && !n[f(i[u])]) {
        a = i[u];
        break;
      }
  a && (n[f(a)] = !0);
  function f(h) {
    return h.dim + "_" + h.index;
  }
}
function Dg(r) {
  return r && r.type !== "category" && r.type !== "time" && lE(r);
}
function iL(r, t) {
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
var Wr = Math.PI, Zr = (
  /** @class */
  (function() {
    function r(t, e) {
      this.group = new xt(), this.opt = e, this.axisModel = t, ut(e, {
        labelOffset: 0,
        nameDirection: 1,
        tickDirection: 1,
        labelDirection: 1,
        silent: !0,
        handleAutoShown: function() {
          return !0;
        }
      });
      var n = new xt({
        x: e.position[0],
        y: e.position[1],
        rotation: e.rotation
      });
      n.updateTransform(), this._transformGroup = n;
    }
    return r.prototype.hasBuilder = function(t) {
      return !!Mg[t];
    }, r.prototype.add = function(t) {
      Mg[t](this.opt, this.axisModel, this.group, this._transformGroup);
    }, r.prototype.getGroup = function() {
      return this.group;
    }, r.innerTextLayout = function(t, e, n) {
      var i = Qh(e - t), a, o;
      return Ga(i) ? (o = n > 0 ? "top" : "bottom", a = "center") : Ga(i - Wr) ? (o = n > 0 ? "bottom" : "top", a = "center") : (o = "middle", i > 0 && i < Wr ? a = n > 0 ? "right" : "left" : a = n > 0 ? "left" : "right"), {
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
), Mg = {
  axisLine: function(r, t, e, n) {
    var i = t.get(["axisLine", "show"]);
    if (i === "auto" && r.handleAutoShown && (i = r.handleAutoShown("axisLine")), !!i) {
      var a = t.axis.getExtent(), o = n.transform, s = [a[0], 0], l = [a[1], 0], u = s[0] > l[0];
      o && (ee(s, s, o), ee(l, l, o));
      var f = B({
        lineCap: "round"
      }, t.getModel(["axisLine", "lineStyle"]).getLineStyle()), h = new xr({
        shape: {
          x1: s[0],
          y1: s[1],
          x2: l[0],
          y2: l[1]
        },
        style: f,
        strokeContainThreshold: r.strokeContainThreshold || 5,
        silent: !0,
        z2: 1
      });
      $a(h.shape, h.style.lineWidth), h.anid = "line", e.add(h);
      var v = t.get(["axisLine", "symbol"]);
      if (v != null) {
        var c = t.get(["axisLine", "symbolSize"]);
        U(v) && (v = [v, v]), (U(c) || dt(c)) && (c = [c, c]);
        var p = W0(t.get(["axisLine", "symbolOffset"]) || 0, c), d = c[0], g = c[1];
        D([{
          rotate: r.rotation + Math.PI / 2,
          offset: p[0],
          r: 0
        }, {
          rotate: r.rotation - Math.PI / 2,
          offset: p[1],
          r: Math.sqrt((s[0] - l[0]) * (s[0] - l[0]) + (s[1] - l[1]) * (s[1] - l[1]))
        }], function(y, m) {
          if (v[m] !== "none" && v[m] != null) {
            var _ = Ue(v[m], -d / 2, -g / 2, d, g, f.stroke, !0), S = y.r + y.offset, w = u ? l : s;
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
    var i = sL(e, n, t, r), a = uL(e, n, t, r);
    if (oL(t, a, i), lL(e, n, t, r.tickDirection), t.get(["axisLabel", "hideOverlap"])) {
      var o = YE(Y(a, function(s) {
        return {
          label: s,
          priority: s.z2,
          defaultAttr: {
            ignore: s.ignore
          }
        };
      }));
      qE(o);
    }
  },
  axisName: function(r, t, e, n) {
    var i = wr(r.axisName, t.get("name"));
    if (i) {
      var a = t.get("nameLocation"), o = r.nameDirection, s = t.getModel("nameTextStyle"), l = t.get("nameGap") || 0, u = t.axis.getExtent(), f = u[0] > u[1] ? -1 : 1, h = [
        a === "start" ? u[0] - f * l : a === "end" ? u[1] + f * l : (u[0] + u[1]) / 2,
        // Reuse labelOffset.
        Eg(a) ? r.labelOffset + o * l : 0
      ], v, c = t.get("nameRotate");
      c != null && (c = c * Wr / 180);
      var p;
      Eg(a) ? v = Zr.innerTextLayout(
        r.rotation,
        c ?? r.rotation,
        // Adapt to axis.
        o
      ) : (v = aL(r.rotation, a, c || 0, u), p = r.axisNameAvailableWidth, p != null && (p = Math.abs(p / Math.sin(v.rotation)), !isFinite(p) && (p = null)));
      var d = s.getFont(), g = t.get("nameTruncate", !0) || {}, y = g.ellipsis, m = wr(r.nameTruncateMaxWidth, g.maxWidth, p), _ = new St({
        x: h[0],
        y: h[1],
        rotation: v.rotation,
        silent: Zr.isLabelSilent(t),
        style: de(s, {
          text: i,
          font: d,
          overflow: "truncate",
          width: m,
          ellipsis: y,
          fill: s.getTextColor() || t.get(["axisLine", "lineStyle", "color"]),
          align: s.get("align") || v.textAlign,
          verticalAlign: s.get("verticalAlign") || v.textVerticalAlign
        }),
        z2: 1
      });
      if (Tl({
        el: _,
        componentModel: t,
        itemName: i
      }), _.__fullText = i, _.anid = "name", t.get("triggerEvent")) {
        var S = Zr.makeAxisEventDataBase(t);
        S.targetType = "axisName", S.name = i, at(_).eventData = S;
      }
      n.add(_), _.updateTransform(), e.add(_), _.decomposeTransform();
    }
  }
};
function aL(r, t, e, n) {
  var i = Qh(e - r), a, o, s = n[0] > n[1], l = t === "start" && !s || t !== "start" && s;
  return Ga(i - Wr / 2) ? (o = l ? "bottom" : "top", a = "center") : Ga(i - Wr * 1.5) ? (o = l ? "top" : "bottom", a = "center") : (o = "middle", i < Wr * 1.5 && i > Wr / 2 ? a = l ? "left" : "right" : a = l ? "right" : "left"), {
    rotation: i,
    textAlign: a,
    textVerticalAlign: o
  };
}
function oL(r, t, e) {
  if (!O_(r.axis)) {
    var n = r.get(["axisLabel", "showMinLabel"]), i = r.get(["axisLabel", "showMaxLabel"]);
    t = t || [], e = e || [];
    var a = t[0], o = t[1], s = t[t.length - 1], l = t[t.length - 2], u = e[0], f = e[1], h = e[e.length - 1], v = e[e.length - 2];
    n === !1 ? (_e(a), _e(u)) : Ag(a, o) && (n ? (_e(o), _e(f)) : (_e(a), _e(u))), i === !1 ? (_e(s), _e(h)) : Ag(l, s) && (i ? (_e(l), _e(v)) : (_e(s), _e(h)));
  }
}
function _e(r) {
  r && (r.ignore = !0);
}
function Ag(r, t) {
  var e = r && r.getBoundingRect().clone(), n = t && t.getBoundingRect().clone();
  if (!(!e || !n)) {
    var i = ao([]);
    return ll(i, i, -r.rotation), e.applyTransform($r([], i, r.getLocalTransform())), n.applyTransform($r([], i, t.getLocalTransform())), e.intersect(n);
  }
}
function Eg(r) {
  return r === "middle" || r === "center";
}
function p1(r, t, e, n, i) {
  for (var a = [], o = [], s = [], l = 0; l < r.length; l++) {
    var u = r[l].coord;
    o[0] = u, o[1] = 0, s[0] = u, s[1] = e, t && (ee(o, o, t), ee(s, s, t));
    var f = new xr({
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
    $a(f.shape, f.style.lineWidth), f.anid = i + "_" + r[l].tickValue, a.push(f);
  }
  return a;
}
function sL(r, t, e, n) {
  var i = e.axis, a = e.getModel("axisTick"), o = a.get("show");
  if (o === "auto" && n.handleAutoShown && (o = n.handleAutoShown("axisTick")), !(!o || i.scale.isBlank())) {
    for (var s = a.getModel("lineStyle"), l = n.tickDirection * a.get("length"), u = i.getTicksCoords(), f = p1(u, t.transform, l, ut(s.getLineStyle(), {
      stroke: e.get(["axisLine", "lineStyle", "color"])
    }), "ticks"), h = 0; h < f.length; h++)
      r.add(f[h]);
    return f;
  }
}
function lL(r, t, e, n) {
  var i = e.axis, a = e.getModel("minorTick");
  if (!(!a.get("show") || i.scale.isBlank())) {
    var o = i.getMinorTicksCoords();
    if (o.length)
      for (var s = a.getModel("lineStyle"), l = n * a.get("length"), u = ut(s.getLineStyle(), ut(e.getModel("axisTick").getLineStyle(), {
        stroke: e.get(["axisLine", "lineStyle", "color"])
      })), f = 0; f < o.length; f++)
        for (var h = p1(o[f], t.transform, l, u, "minorticks_" + f), v = 0; v < h.length; v++)
          r.add(h[v]);
  }
}
function uL(r, t, e, n) {
  var i = e.axis, a = wr(n.axisLabelShow, e.get(["axisLabel", "show"]));
  if (!(!a || i.scale.isBlank())) {
    var o = e.getModel("axisLabel"), s = o.get("margin"), l = i.getViewLabels(), u = (wr(n.labelRotate, o.get("rotate")) || 0) * Wr / 180, f = Zr.innerTextLayout(n.rotation, u, n.labelDirection), h = e.getCategories && e.getCategories(!0), v = [], c = Zr.isLabelSilent(e), p = e.get("triggerEvent");
    return D(l, function(d, g) {
      var y = i.scale.type === "ordinal" ? i.scale.getRawOrdinalNumber(d.tickValue) : d.tickValue, m = d.formattedLabel, _ = d.rawLabel, S = o;
      if (h && h[y]) {
        var w = h[y];
        W(w) && w.textStyle && (S = new mt(w.textStyle, o, e.ecModel));
      }
      var b = S.getTextColor() || e.get(["axisLine", "lineStyle", "color"]), x = i.dataToCoord(y), T = S.getShallow("align", !0) || f.textAlign, A = Q(S.getShallow("alignMinLabel", !0), T), M = Q(S.getShallow("alignMaxLabel", !0), T), C = S.getShallow("verticalAlign", !0) || S.getShallow("baseline", !0) || f.textVerticalAlign, E = Q(S.getShallow("verticalAlignMinLabel", !0), C), I = Q(S.getShallow("verticalAlignMaxLabel", !0), C), P = new St({
        x,
        y: n.labelOffset + n.labelDirection * s,
        rotation: f.rotation,
        silent: c,
        z2: 10 + (d.level || 0),
        style: de(S, {
          text: m,
          align: g === 0 ? A : g === l.length - 1 ? M : T,
          verticalAlign: g === 0 ? E : g === l.length - 1 ? I : C,
          fill: $(b) ? b(
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
      if (P.anid = "label_" + y, Tl({
        el: P,
        componentModel: e,
        itemName: m,
        formatterParamsExtra: {
          isTruncated: function() {
            return P.isTruncated;
          },
          value: _,
          tickIndex: g
        }
      }), p) {
        var O = Zr.makeAxisEventDataBase(e);
        O.targetType = "axisLabel", O.value = _, O.tickIndex = g, i.type === "category" && (O.dataIndex = y), at(P).eventData = O;
      }
      t.add(P), P.updateTransform(), v.push(P), r.add(P), P.decomposeTransform();
    }), v;
  }
}
function fL(r, t) {
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
  return hL(e, r, t), e.seriesInvolved && vL(e, r), e;
}
function hL(r, t, e) {
  var n = t.getComponent("tooltip"), i = t.getComponent("axisPointer"), a = i.get("link", !0) || [], o = [];
  D(e.getCoordinateSystems(), function(s) {
    if (!s.axisPointerEnabled)
      return;
    var l = eo(s.model), u = r.coordSysAxesInfo[l] = {};
    r.coordSysMap[l] = s;
    var f = s.model, h = f.getModel("tooltip", n);
    if (D(s.getAxes(), wt(d, !1, null)), s.getTooltipAxes && n && h.get("show")) {
      var v = h.get("trigger") === "axis", c = h.get(["axisPointer", "type"]) === "cross", p = s.getTooltipAxes(h.get(["axisPointer", "axis"]));
      (v || c) && D(p.baseAxes, wt(d, c ? "cross" : !0, v)), c && D(p.otherAxes, wt(d, "cross", !1));
    }
    function d(g, y, m) {
      var _ = m.model.getModel("axisPointer", i), S = _.get("show");
      if (!(!S || S === "auto" && !g && !Th(_))) {
        y == null && (y = _.get("triggerTooltip")), _ = g ? cL(m, h, i, t, g, y) : _;
        var w = _.get("snap"), b = _.get("triggerEmphasis"), x = eo(m.model), T = y || w || m.type === "category", A = r.axesInfo[x] = {
          key: x,
          axis: m,
          coordSys: s,
          axisPointerModel: _,
          triggerTooltip: y,
          triggerEmphasis: b,
          involveSeries: T,
          snap: w,
          useHandle: Th(_),
          seriesModels: [],
          linkGroup: null
        };
        u[x] = A, r.seriesInvolved = r.seriesInvolved || T;
        var M = pL(a, m);
        if (M != null) {
          var C = o[M] || (o[M] = {
            axesInfo: {}
          });
          C.axesInfo[x] = A, C.mapper = a[M].mapper, A.linkGroup = C;
        }
      }
    }
  });
}
function cL(r, t, e, n, i, a) {
  var o = t.getModel("axisPointer"), s = ["type", "snap", "lineStyle", "shadowStyle", "label", "animation", "animationDurationUpdate", "animationEasingUpdate", "z"], l = {};
  D(s, function(v) {
    l[v] = j(o.get(v));
  }), l.snap = r.type !== "category" && !!a, o.get("type") === "cross" && (l.type = "line");
  var u = l.label || (l.label = {});
  if (u.show == null && (u.show = !1), i === "cross") {
    var f = o.get(["label", "show"]);
    if (u.show = f ?? !0, !a) {
      var h = l.lineStyle = o.get("crossStyle");
      h && ut(u, h.textStyle);
    }
  }
  return r.model.getModel("axisPointer", new mt(l, e, n));
}
function vL(r, t) {
  t.eachSeries(function(e) {
    var n = e.coordinateSystem, i = e.get(["tooltip", "trigger"], !0), a = e.get(["tooltip", "show"], !0);
    !n || i === "none" || i === !1 || i === "item" || a === !1 || e.get(["axisPointer", "show"], !0) === !1 || D(r.coordSysAxesInfo[eo(n.model)], function(o) {
      var s = o.axis;
      n.getAxis(s.dim) === s && (o.seriesModels.push(e), o.seriesDataCount == null && (o.seriesDataCount = 0), o.seriesDataCount += e.getData().count());
    });
  });
}
function pL(r, t) {
  for (var e = t.model, n = t.dim, i = 0; i < r.length; i++) {
    var a = r[i] || {};
    if (vf(a[n + "AxisId"], e.id) || vf(a[n + "AxisIndex"], e.componentIndex) || vf(a[n + "AxisName"], e.name))
      return i;
  }
}
function vf(r, t) {
  return r === "all" || H(r) && vt(r, t) >= 0 || r === t;
}
function dL(r) {
  var t = jc(r);
  if (t) {
    var e = t.axisPointerModel, n = t.axis.scale, i = e.option, a = e.get("status"), o = e.get("value");
    o != null && (o = n.parse(o));
    var s = Th(e);
    a == null && (i.status = s ? "show" : "hide");
    var l = n.getExtent().slice();
    l[0] > l[1] && l.reverse(), // Pick a value on axis when initializing.
    (o == null || o > l[1]) && (o = l[1]), o < l[0] && (o = l[0]), i.value = o, s && (i.status = t.axis.scale.isBlank() ? "hide" : "show");
  }
}
function jc(r) {
  var t = (r.ecModel.getComponent("axisPointer") || {}).coordSysAxesInfo;
  return t && t.axesInfo[eo(r)];
}
function gL(r) {
  var t = jc(r);
  return t && t.axisPointerModel;
}
function Th(r) {
  return !!r.get(["handle", "show"]);
}
function eo(r) {
  return r.type + "||" + r.id;
}
var pf = {}, d1 = (
  /** @class */
  (function(r) {
    z(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.prototype.render = function(e, n, i, a) {
      this.axisPointerClass && dL(e), r.prototype.render.apply(this, arguments), this._doUpdateAxisPointerClass(e, i, !0);
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
        var o = gL(e);
        o ? (this._axisPointer || (this._axisPointer = new a())).render(e, o, n, i) : this._disposeAxisPointer(n);
      }
    }, t.prototype._disposeAxisPointer = function(e) {
      this._axisPointer && this._axisPointer.dispose(e), this._axisPointer = null;
    }, t.registerAxisPointerClass = function(e, n) {
      if (process.env.NODE_ENV !== "production" && pf[e])
        throw new Error("axisPointer " + e + " exists");
      pf[e] = n;
    }, t.getAxisPointerClass = function(e) {
      return e && pf[e];
    }, t.type = "axis", t;
  })(ne)
), Ch = Mt();
function yL(r, t, e, n) {
  var i = e.axis;
  if (!i.scale.isBlank()) {
    var a = e.getModel("splitArea"), o = a.getModel("areaStyle"), s = o.get("color"), l = n.coordinateSystem.getRect(), u = i.getTicksCoords({
      tickModel: a,
      clamp: !0
    });
    if (u.length) {
      var f = s.length, h = Ch(r).splitAreaColors, v = et(), c = 0;
      if (h)
        for (var p = 0; p < u.length; p++) {
          var d = h.get(u[p].tickValue);
          if (d != null) {
            c = (d + (f - 1) * p) % f;
            break;
          }
        }
      var g = i.toGlobalCoord(u[0].coord), y = o.getAreaStyle();
      s = H(s) ? s : [s];
      for (var p = 1; p < u.length; p++) {
        var m = i.toGlobalCoord(u[p].coord), _ = void 0, S = void 0, w = void 0, b = void 0;
        i.isHorizontal() ? (_ = g, S = l.y, w = m - _, b = l.height, g = _ + w) : (_ = l.x, S = g, w = l.width, b = m - S, g = S + b);
        var x = u[p - 1].tickValue;
        x != null && v.set(x, c), t.add(new _t({
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
      Ch(r).splitAreaColors = v;
    }
  }
}
function mL(r) {
  Ch(r).splitAreaColors = null;
}
var _L = ["axisLine", "axisTickLabel", "axisName"], SL = ["splitArea", "splitLine", "minorSplitLine"], g1 = (
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
      if (this._axisGroup = new xt(), this.group.add(this._axisGroup), !!e.get("show")) {
        var s = e.getCoordSysModel(), l = xh(s, e), u = new Zr(e, B({
          handleAutoShown: function(h) {
            for (var v = s.coordinateSystem.getCartesians(), c = 0; c < v.length; c++)
              if (yh(v[c].getOtherAxis(e.axis).scale))
                return !0;
            return !1;
          }
        }, l));
        D(_L, u.add, u), this._axisGroup.add(u.getGroup()), D(SL, function(h) {
          e.get([h, "show"]) && bL[h](this, this._axisGroup, e, s);
        }, this);
        var f = a && a.type === "changeAxisOrder" && a.isInitSort;
        f || Ym(o, this._axisGroup, e), r.prototype.render.call(this, e, n, i, a);
      }
    }, t.prototype.remove = function() {
      mL(this);
    }, t.type = "cartesianAxis", t;
  })(d1)
), bL = {
  splitLine: function(r, t, e, n) {
    var i = e.axis;
    if (!i.scale.isBlank()) {
      var a = e.getModel("splitLine"), o = a.getModel("lineStyle"), s = o.get("color"), l = a.get("showMinLine") !== !1, u = a.get("showMaxLine") !== !1;
      s = H(s) ? s : [s];
      for (var f = n.coordinateSystem.getRect(), h = i.isHorizontal(), v = 0, c = i.getTicksCoords({
        tickModel: a
      }), p = [], d = [], g = o.getLineStyle(), y = 0; y < c.length; y++) {
        var m = i.toGlobalCoord(c[y].coord);
        if (!(y === 0 && !l || y === c.length - 1 && !u)) {
          var _ = c[y].tickValue;
          h ? (p[0] = m, p[1] = f.y, d[0] = m, d[1] = f.y + f.height) : (p[0] = f.x, p[1] = m, d[0] = f.x + f.width, d[1] = m);
          var S = v++ % s.length, w = new xr({
            anid: _ != null ? "line_" + _ : null,
            autoBatch: !0,
            shape: {
              x1: p[0],
              y1: p[1],
              x2: d[0],
              y2: d[1]
            },
            style: ut({
              stroke: s[S]
            }, g),
            silent: !0
          });
          $a(w.shape, g.lineWidth), t.add(w);
        }
      }
    }
  },
  minorSplitLine: function(r, t, e, n) {
    var i = e.axis, a = e.getModel("minorSplitLine"), o = a.getModel("lineStyle"), s = n.coordinateSystem.getRect(), l = i.isHorizontal(), u = i.getMinorTicksCoords();
    if (u.length)
      for (var f = [], h = [], v = o.getLineStyle(), c = 0; c < u.length; c++)
        for (var p = 0; p < u[c].length; p++) {
          var d = i.toGlobalCoord(u[c][p].coord);
          l ? (f[0] = d, f[1] = s.y, h[0] = d, h[1] = s.y + s.height) : (f[0] = s.x, f[1] = d, h[0] = s.x + s.width, h[1] = d);
          var g = new xr({
            anid: "minor_line_" + u[c][p].tickValue,
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
          $a(g.shape, v.lineWidth), t.add(g);
        }
  },
  splitArea: function(r, t, e, n) {
    yL(r, t, e, n);
  }
}, y1 = (
  /** @class */
  (function(r) {
    z(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.type = "xAxis", t;
  })(g1)
), wL = (
  /** @class */
  (function(r) {
    z(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = y1.type, e;
    }
    return t.type = "yAxis", t;
  })(g1)
), xL = (
  /** @class */
  (function(r) {
    z(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = "grid", e;
    }
    return t.prototype.render = function(e, n) {
      this.group.removeAll(), e.get("show") && this.group.add(new _t({
        shape: e.coordinateSystem.getRect(),
        style: ut({
          fill: e.get("backgroundColor")
        }, e.getItemStyle()),
        silent: !0,
        z2: -1
      }));
    }, t.type = "grid", t;
  })(ne)
), Ig = {
  // gridIndex: 0,
  // gridId: '',
  offset: 0
};
function m1(r) {
  r.registerComponentView(xL), r.registerComponentModel($I), r.registerCoordinateSystem("cartesian2d", nL), Sg(r, "x", bh, Ig), Sg(r, "y", bh, Ig), r.registerComponentView(y1), r.registerComponentView(wL), r.registerPreprocessor(function(t) {
    t.xAxis && t.yAxis && !t.grid && (t.grid = {});
  });
}
function TL(r) {
  Ft(m1), r.registerSeriesModel(GI), r.registerChartView(XI), r.registerLayout(qc("scatter"));
}
var ro = D, CL = W, il = -1, $t = (
  /** @class */
  (function() {
    function r(t) {
      var e = t.mappingMethod, n = t.type, i = this.option = j(t);
      this.type = n, this.mappingMethod = e, this._normalizeData = AL[e];
      var a = r.visualHandlers[n];
      this.applyVisual = a.applyVisual, this.getColorMapper = a.getColorMapper, this._normalizedToVisual = a._normalizedToVisual[e], e === "piecewise" ? (df(i), DL(i)) : e === "category" ? i.categories ? ML(i) : df(i, !0) : (tt(e !== "linear" || i.dataExtent), df(i));
    }
    return r.prototype.mapValueToVisual = function(t) {
      var e = this._normalizeData(t);
      return this._normalizedToVisual(e, t);
    }, r.prototype.getNormalizer = function() {
      return J(this._normalizeData, this);
    }, r.listVisualTypes = function() {
      return gt(r.visualHandlers);
    }, r.isValidType = function(t) {
      return r.visualHandlers.hasOwnProperty(t);
    }, r.eachVisual = function(t, e, n) {
      W(t) ? D(t, e, n) : e.call(n, t);
    }, r.mapVisual = function(t, e, n) {
      var i, a = H(t) ? [] : W(t) ? {} : (i = !0, null);
      return r.eachVisual(t, function(o, s) {
        var l = e.call(n, o, s);
        i ? a = l : a[s] = l;
      }), a;
    }, r.retrieveVisuals = function(t) {
      var e = {}, n;
      return t && ro(r.visualHandlers, function(i, a) {
        t.hasOwnProperty(a) && (e[a] = t[a], n = !0);
      }), n ? e : null;
    }, r.prepareVisualTypes = function(t) {
      if (H(t))
        t = t.slice();
      else if (CL(t)) {
        var e = [];
        ro(t, function(n, i) {
          e.push(i);
        }), t = e;
      } else
        return [];
      return t.sort(function(n, i) {
        return i === "color" && n !== "color" && n.indexOf("color") === 0 ? 1 : -1;
      }), t;
    }, r.dependsOn = function(t, e) {
      return e === "color" ? !!(t && t.indexOf(e) === 0) : t === e;
    }, r.findPieceIndex = function(t, e, n) {
      for (var i, a = 1 / 0, o = 0, s = e.length; o < s; o++) {
        var l = e[o].value;
        if (l != null) {
          if (l === t || U(l) && l === t + "")
            return o;
          n && v(l, o);
        }
      }
      for (var o = 0, s = e.length; o < s; o++) {
        var u = e[o], f = u.interval, h = u.close;
        if (f) {
          if (f[0] === -1 / 0) {
            if (is(h[1], t, f[1]))
              return o;
          } else if (f[1] === 1 / 0) {
            if (is(h[0], f[0], t))
              return o;
          } else if (is(h[0], f[0], t) && is(h[1], t, f[1]))
            return o;
          n && v(f[0], o), n && v(f[1], o);
        }
      }
      if (n)
        return t === 1 / 0 ? e.length - 1 : t === -1 / 0 ? 0 : i;
      function v(c, p) {
        var d = Math.abs(c - t);
        d < a && (a = d, i = p);
      }
    }, r.visualHandlers = {
      color: {
        applyVisual: ca("color"),
        getColorMapper: function() {
          var t = this.option;
          return J(t.mappingMethod === "category" ? function(e, n) {
            return !n && (e = this._normalizeData(e)), xa.call(this, e);
          } : function(e, n, i) {
            var a = !!i;
            return !n && (e = this._normalizeData(e)), i = Ca(e, t.parsedVisual, i), a ? i : Fe(i, "rgba");
          }, this);
        },
        _normalizedToVisual: {
          linear: function(t) {
            return Fe(Ca(t, this.option.parsedVisual), "rgba");
          },
          category: xa,
          piecewise: function(t, e) {
            var n = Mh.call(this, e);
            return n == null && (n = Fe(Ca(t, this.option.parsedVisual), "rgba")), n;
          },
          fixed: bn
        }
      },
      colorHue: ns(function(t, e) {
        return fs(t, e);
      }),
      colorSaturation: ns(function(t, e) {
        return fs(t, null, e);
      }),
      colorLightness: ns(function(t, e) {
        return fs(t, null, null, e);
      }),
      colorAlpha: ns(function(t, e) {
        return $y(t, e);
      }),
      decal: {
        applyVisual: ca("decal"),
        _normalizedToVisual: {
          linear: null,
          category: xa,
          piecewise: null,
          fixed: null
        }
      },
      opacity: {
        applyVisual: ca("opacity"),
        _normalizedToVisual: Dh([0, 1])
      },
      liftZ: {
        applyVisual: ca("liftZ"),
        _normalizedToVisual: {
          linear: bn,
          category: bn,
          piecewise: bn,
          fixed: bn
        }
      },
      symbol: {
        applyVisual: function(t, e, n) {
          var i = this.mapValueToVisual(t);
          n("symbol", i);
        },
        _normalizedToVisual: {
          linear: Lg,
          category: xa,
          piecewise: function(t, e) {
            var n = Mh.call(this, e);
            return n == null && (n = Lg.call(this, t)), n;
          },
          fixed: bn
        }
      },
      symbolSize: {
        applyVisual: ca("symbolSize"),
        _normalizedToVisual: Dh([0, 1])
      }
    }, r;
  })()
);
function DL(r) {
  var t = r.pieceList;
  r.hasSpecialVisual = !1, D(t, function(e, n) {
    e.originIndex = n, e.visual != null && (r.hasSpecialVisual = !0);
  });
}
function ML(r) {
  var t = r.categories, e = r.categoryMap = {}, n = r.visual;
  if (ro(t, function(o, s) {
    e[o] = s;
  }), !H(n)) {
    var i = [];
    W(n) ? ro(n, function(o, s) {
      var l = e[s];
      i[l ?? il] = o;
    }) : i[il] = n, n = _1(r, i);
  }
  for (var a = t.length - 1; a >= 0; a--)
    n[a] == null && (delete e[t[a]], t.pop());
}
function df(r, t) {
  var e = r.visual, n = [];
  W(e) ? ro(e, function(a) {
    n.push(a);
  }) : e != null && n.push(e);
  var i = {
    color: 1,
    symbol: 1
  };
  !t && n.length === 1 && !i.hasOwnProperty(r.type) && (n[1] = n[0]), _1(r, n);
}
function ns(r) {
  return {
    applyVisual: function(t, e, n) {
      var i = this.mapValueToVisual(t);
      n("color", r(e("color"), i));
    },
    _normalizedToVisual: Dh([0, 1])
  };
}
function Lg(r) {
  var t = this.option.visual;
  return t[Math.round(ge(r, [0, 1], [0, t.length - 1], !0))] || {};
}
function ca(r) {
  return function(t, e, n) {
    n(r, this.mapValueToVisual(t));
  };
}
function xa(r) {
  var t = this.option.visual;
  return t[this.option.loop && r !== il ? r % t.length : r];
}
function bn() {
  return this.option.visual[0];
}
function Dh(r) {
  return {
    linear: function(t) {
      return ge(t, r, this.option.visual, !0);
    },
    category: xa,
    piecewise: function(t, e) {
      var n = Mh.call(this, e);
      return n == null && (n = ge(t, r, this.option.visual, !0)), n;
    },
    fixed: bn
  };
}
function Mh(r) {
  var t = this.option, e = t.pieceList;
  if (t.hasSpecialVisual) {
    var n = $t.findPieceIndex(r, e), i = e[n];
    if (i && i.visual)
      return i.visual[this.type];
  }
}
function _1(r, t) {
  return r.visual = t, r.type === "color" && (r.parsedVisual = Y(t, function(e) {
    var n = ue(e);
    return !n && process.env.NODE_ENV !== "production" && Vt("'" + e + "' is an illegal color, fallback to '#000000'", !0), n || [0, 0, 0, 1];
  })), t;
}
var AL = {
  linear: function(r) {
    return ge(r, this.option.dataExtent, [0, 1], !0);
  },
  piecewise: function(r) {
    var t = this.option.pieceList, e = $t.findPieceIndex(r, t, !0);
    if (e != null)
      return ge(e, [0, t.length - 1], [0, 1], !0);
  },
  category: function(r) {
    var t = this.option.categories ? this.option.categoryMap[r] : r;
    return t ?? il;
  },
  fixed: Xt
};
function is(r, t, e) {
  return r ? t <= e : t < e;
}
var EL = ["itemStyle", "opacity"], IL = (
  /** @class */
  (function(r) {
    z(t, r);
    function t(e, n) {
      var i = r.call(this) || this, a = i, o = new Hn(), s = new St();
      return a.setTextContent(s), i.setTextGuideLine(o), i.updateData(e, n, !0), i;
    }
    return t.prototype.updateData = function(e, n, i) {
      var a = this, o = e.hostModel, s = e.getItemModel(n), l = e.getItemLayout(n), u = s.getModel("emphasis"), f = s.get(EL);
      f = f ?? 1, i || bl(a), a.useStyle(e.getItemVisual(n, "style")), a.style.lineJoin = "round", i ? (a.setShape({
        points: l.points
      }), a.style.opacity = 0, fe(a, {
        style: {
          opacity: f
        }
      }, o, n)) : Ot(a, {
        style: {
          opacity: f
        },
        shape: {
          points: l.points
        }
      }, o, n), Ya(a, s), this._updateLabel(e, n), Vn(this, u.get("focus"), u.get("blurScope"), u.get("disabled"));
    }, t.prototype._updateLabel = function(e, n) {
      var i = this, a = this.getTextGuideLine(), o = i.getTextContent(), s = e.hostModel, l = e.getItemModel(n), u = e.getItemLayout(n), f = u.label, h = e.getItemVisual(n, "style"), v = h.fill;
      Gn(
        // position will not be used in setLabelStyle
        o,
        Kr(l),
        {
          labelFetcher: e.hostModel,
          labelDataIndex: n,
          defaultOpacity: h.opacity,
          defaultText: e.getName(n)
        },
        {
          normal: {
            align: f.textAlign,
            verticalAlign: f.verticalAlign
          }
        }
      ), i.setTextConfig({
        local: !0,
        inside: !!f.inside,
        insideStroke: v,
        // insideFill: 'auto',
        outsideFill: v
      });
      var c = f.linePoints;
      a.setShape({
        points: c
      }), i.textGuideLineConfig = {
        anchor: c ? new K(c[0][0], c[0][1]) : null
      }, Ot(o, {
        style: {
          x: f.x,
          y: f.y
        }
      }, s, n), o.attr({
        rotation: f.rotation,
        originX: f.x,
        originY: f.y,
        z2: 10
      }), X_(i, $_(l), {
        // Default use item visual color
        stroke: v
      });
    }, t;
  })(Ai)
), LL = (
  /** @class */
  (function(r) {
    z(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e.ignoreLabelLineUpdate = !0, e;
    }
    return t.prototype.render = function(e, n, i) {
      var a = e.getData(), o = this._data, s = this.group;
      a.diff(o).add(function(l) {
        var u = new IL(a, l);
        a.setItemGraphicEl(l, u), s.add(u);
      }).update(function(l, u) {
        var f = o.getItemGraphicEl(u);
        f.updateData(a, l), s.add(f), a.setItemGraphicEl(l, f);
      }).remove(function(l) {
        var u = o.getItemGraphicEl(l);
        Xa(u, e, l);
      }).execute(), this._data = a;
    }, t.prototype.remove = function() {
      this.group.removeAll(), this._data = null;
    }, t.prototype.dispose = function() {
    }, t.type = "funnel", t;
  })(Pt)
), PL = (
  /** @class */
  (function(r) {
    z(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.prototype.init = function(e) {
      r.prototype.init.apply(this, arguments), this.legendVisualProvider = new h1(J(this.getData, this), J(this.getRawData, this)), this._defaultLabelLine(e);
    }, t.prototype.getInitialData = function(e, n) {
      return f1(this, {
        coordDimensions: ["value"],
        encodeDefaulter: wt(f0, this)
      });
    }, t.prototype._defaultLabelLine = function(e) {
      ks(e, "labelLine", ["show"]);
      var n = e.labelLine, i = e.emphasis.labelLine;
      n.show = n.show && e.label.show, i.show = i.show && e.emphasis.label.show;
    }, t.prototype.getDataParams = function(e) {
      var n = this.getData(), i = r.prototype.getDataParams.call(this, e), a = n.mapDimension("value"), o = n.getSum(a);
      return i.percent = o ? +(n.get(a, e) / o * 100).toFixed(2) : 0, i.$vars.push("percent"), i;
    }, t.type = "series.funnel", t.defaultOption = {
      // zlevel: 0,                  // 一级层叠
      z: 2,
      legendHoverLink: !0,
      colorBy: "data",
      left: 80,
      top: 60,
      right: 80,
      bottom: 60,
      // width: {totalWidth} - left - right,
      // height: {totalHeight} - top - bottom,
      // 默认取数据最小最大值
      // min: 0,
      // max: 100,
      minSize: "0%",
      maxSize: "100%",
      sort: "descending",
      orient: "vertical",
      gap: 0,
      funnelAlign: "center",
      label: {
        show: !0,
        position: "outer"
        // formatter: 标签文本格式器，同Tooltip.formatter，不支持异步回调
      },
      labelLine: {
        show: !0,
        length: 20,
        lineStyle: {
          // color: 各异,
          width: 1
        }
      },
      itemStyle: {
        // color: 各异,
        borderColor: "#fff",
        borderWidth: 1
      },
      emphasis: {
        label: {
          show: !0
        }
      },
      select: {
        itemStyle: {
          borderColor: "#212121"
        }
      }
    }, t;
  })(zt)
);
function OL(r, t) {
  return ar(r.getBoxLayoutParams(), {
    width: t.getWidth(),
    height: t.getHeight()
  });
}
function RL(r, t) {
  for (var e = r.mapDimension("value"), n = r.mapArray(e, function(l) {
    return l;
  }), i = [], a = t === "ascending", o = 0, s = r.count(); o < s; o++)
    i[o] = o;
  return $(t) ? i.sort(t) : t !== "none" && i.sort(function(l, u) {
    return a ? n[l] - n[u] : n[u] - n[l];
  }), i;
}
function NL(r) {
  var t = r.hostModel, e = t.get("orient");
  r.each(function(n) {
    var i = r.getItemModel(n), a = i.getModel("label"), o = a.get("position"), s = i.getModel("labelLine"), l = r.getItemLayout(n), u = l.points, f = o === "inner" || o === "inside" || o === "center" || o === "insideLeft" || o === "insideRight", h, v, c, p;
    if (f)
      o === "insideLeft" ? (v = (u[0][0] + u[3][0]) / 2 + 5, c = (u[0][1] + u[3][1]) / 2, h = "left") : o === "insideRight" ? (v = (u[1][0] + u[2][0]) / 2 - 5, c = (u[1][1] + u[2][1]) / 2, h = "right") : (v = (u[0][0] + u[1][0] + u[2][0] + u[3][0]) / 4, c = (u[0][1] + u[1][1] + u[2][1] + u[3][1]) / 4, h = "center"), p = [[v, c], [v, c]];
    else {
      var d = void 0, g = void 0, y = void 0, m = void 0, _ = s.get("length");
      process.env.NODE_ENV !== "production" && (e === "vertical" && ["top", "bottom"].indexOf(o) > -1 && (o = "left", console.warn("Position error: Funnel chart on vertical orient dose not support top and bottom.")), e === "horizontal" && ["left", "right"].indexOf(o) > -1 && (o = "bottom", console.warn("Position error: Funnel chart on horizontal orient dose not support left and right."))), o === "left" ? (d = (u[3][0] + u[0][0]) / 2, g = (u[3][1] + u[0][1]) / 2, y = d - _, v = y - 5, h = "right") : o === "right" ? (d = (u[1][0] + u[2][0]) / 2, g = (u[1][1] + u[2][1]) / 2, y = d + _, v = y + 5, h = "left") : o === "top" ? (d = (u[3][0] + u[0][0]) / 2, g = (u[3][1] + u[0][1]) / 2, m = g - _, c = m - 5, h = "center") : o === "bottom" ? (d = (u[1][0] + u[2][0]) / 2, g = (u[1][1] + u[2][1]) / 2, m = g + _, c = m + 5, h = "center") : o === "rightTop" ? (d = e === "horizontal" ? u[3][0] : u[1][0], g = e === "horizontal" ? u[3][1] : u[1][1], e === "horizontal" ? (m = g - _, c = m - 5, h = "center") : (y = d + _, v = y + 5, h = "top")) : o === "rightBottom" ? (d = u[2][0], g = u[2][1], e === "horizontal" ? (m = g + _, c = m + 5, h = "center") : (y = d + _, v = y + 5, h = "bottom")) : o === "leftTop" ? (d = u[0][0], g = e === "horizontal" ? u[0][1] : u[1][1], e === "horizontal" ? (m = g - _, c = m - 5, h = "center") : (y = d - _, v = y - 5, h = "right")) : o === "leftBottom" ? (d = e === "horizontal" ? u[1][0] : u[3][0], g = e === "horizontal" ? u[1][1] : u[2][1], e === "horizontal" ? (m = g + _, c = m + 5, h = "center") : (y = d - _, v = y - 5, h = "right")) : (d = (u[1][0] + u[2][0]) / 2, g = (u[1][1] + u[2][1]) / 2, e === "horizontal" ? (m = g + _, c = m + 5, h = "center") : (y = d + _, v = y + 5, h = "left")), e === "horizontal" ? (y = d, v = y) : (m = g, c = m), p = [[d, g], [y, m]];
    }
    l.label = {
      linePoints: p,
      x: v,
      y: c,
      verticalAlign: "middle",
      textAlign: h,
      inside: f
    };
  });
}
function kL(r, t) {
  r.eachSeriesByType("funnel", function(e) {
    var n = e.getData(), i = n.mapDimension("value"), a = e.get("sort"), o = OL(e, t), s = e.get("orient"), l = o.width, u = o.height, f = RL(n, a), h = o.x, v = o.y, c = s === "horizontal" ? [ct(e.get("minSize"), u), ct(e.get("maxSize"), u)] : [ct(e.get("minSize"), l), ct(e.get("maxSize"), l)], p = n.getDataExtent(i), d = e.get("min"), g = e.get("max");
    d == null && (d = Math.min(p[0], 0)), g == null && (g = p[1]);
    var y = e.get("funnelAlign"), m = e.get("gap"), _ = s === "horizontal" ? l : u, S = (_ - m * (n.count() - 1)) / n.count(), w = function(P, O) {
      if (s === "horizontal") {
        var R = n.get(i, P) || 0, F = ge(R, [d, g], c, !0), N = void 0;
        switch (y) {
          case "top":
            N = v;
            break;
          case "center":
            N = v + (u - F) / 2;
            break;
          case "bottom":
            N = v + (u - F);
            break;
        }
        return [[O, N], [O, N + F]];
      }
      var V = n.get(i, P) || 0, L = ge(V, [d, g], c, !0), k;
      switch (y) {
        case "left":
          k = h;
          break;
        case "center":
          k = h + (l - L) / 2;
          break;
        case "right":
          k = h + l - L;
          break;
      }
      return [[k, O], [k + L, O]];
    };
    a === "ascending" && (S = -S, m = -m, s === "horizontal" ? h += l : v += u, f = f.reverse());
    for (var b = 0; b < f.length; b++) {
      var x = f[b], T = f[b + 1], A = n.getItemModel(x);
      if (s === "horizontal") {
        var M = A.get(["itemStyle", "width"]);
        M == null ? M = S : (M = ct(M, l), a === "ascending" && (M = -M));
        var C = w(x, h), E = w(T, h + M);
        h += M + m, n.setItemLayout(x, {
          points: C.concat(E.slice().reverse())
        });
      } else {
        var I = A.get(["itemStyle", "height"]);
        I == null ? I = S : (I = ct(I, u), a === "ascending" && (I = -I));
        var C = w(x, v), E = w(T, v + I);
        v += I + m, n.setItemLayout(x, {
          points: C.concat(E.slice().reverse())
        });
      }
    }
    NL(n);
  });
}
function VL(r) {
  r.registerChartView(LL), r.registerSeriesModel(PL), r.registerLayout(kL), r.registerProcessor(l1("funnel"));
}
function BL(r, t, e, n, i, a) {
  r = r || 0;
  var o = e[1] - e[0];
  if (i != null && (i = oi(i, [0, o])), a != null && (a = Math.max(a, i ?? 0)), n === "all") {
    var s = Math.abs(t[1] - t[0]);
    s = oi(s, [0, o]), i = a = oi(s, [i, a]), n = 0;
  }
  t[0] = oi(t[0], e), t[1] = oi(t[1], e);
  var l = gf(t, n);
  t[n] += r;
  var u = i || 0, f = e.slice();
  l.sign < 0 ? f[0] += u : f[1] -= u, t[n] = oi(t[n], f);
  var h;
  return h = gf(t, n), i != null && (h.sign !== l.sign || h.span < i) && (t[1 - n] = t[n] + l.sign * i), h = gf(t, n), a != null && h.span > a && (t[1 - n] = t[n] + h.sign * a), t;
}
function gf(r, t) {
  var e = r[t] - r[1 - t];
  return {
    span: Math.abs(e),
    sign: e > 0 ? -1 : e < 0 ? 1 : t ? -1 : 1
  };
}
function oi(r, t) {
  return Math.min(t[1] != null ? t[1] : 1 / 0, Math.max(t[0] != null ? t[0] : -1 / 0, r));
}
var zL = 256, FL = (
  /** @class */
  (function() {
    function r() {
      this.blurSize = 30, this.pointSize = 20, this.maxOpacity = 1, this.minOpacity = 0, this._gradientPixels = {
        inRange: null,
        outOfRange: null
      };
      var t = Ge.createCanvas();
      this.canvas = t;
    }
    return r.prototype.update = function(t, e, n, i, a, o) {
      var s = this._getBrush(), l = this._getGradient(a, "inRange"), u = this._getGradient(a, "outOfRange"), f = this.pointSize + this.blurSize, h = this.canvas, v = h.getContext("2d"), c = t.length;
      h.width = e, h.height = n;
      for (var p = 0; p < c; ++p) {
        var d = t[p], g = d[0], y = d[1], m = d[2], _ = i(m);
        v.globalAlpha = _, v.drawImage(s, g - f, y - f);
      }
      if (!h.width || !h.height)
        return h;
      for (var S = v.getImageData(0, 0, h.width, h.height), w = S.data, b = 0, x = w.length, T = this.minOpacity, A = this.maxOpacity, M = A - T; b < x; ) {
        var _ = w[b + 3] / 256, C = Math.floor(_ * (zL - 1)) * 4;
        if (_ > 0) {
          var E = o(_) ? l : u;
          _ > 0 && (_ = _ * M + T), w[b++] = E[C], w[b++] = E[C + 1], w[b++] = E[C + 2], w[b++] = E[C + 3] * _ * 256;
        } else
          b += 4;
      }
      return v.putImageData(S, 0, 0), h;
    }, r.prototype._getBrush = function() {
      var t = this._brushCanvas || (this._brushCanvas = Ge.createCanvas()), e = this.pointSize + this.blurSize, n = e * 2;
      t.width = n, t.height = n;
      var i = t.getContext("2d");
      return i.clearRect(0, 0, n, n), i.shadowOffsetX = n, i.shadowBlur = this.blurSize, i.shadowColor = "#000", i.beginPath(), i.arc(-e, e, this.pointSize, 0, Math.PI * 2, !0), i.closePath(), i.fill(), t;
    }, r.prototype._getGradient = function(t, e) {
      for (var n = this._gradientPixels, i = n[e] || (n[e] = new Uint8ClampedArray(256 * 4)), a = [0, 0, 0, 0], o = 0, s = 0; s < 256; s++)
        t[e](s / 255, !0, a), i[o++] = a[0], i[o++] = a[1], i[o++] = a[2], i[o++] = a[3];
      return i;
    }, r;
  })()
);
function HL(r, t, e) {
  var n = r[1] - r[0];
  t = Y(t, function(o) {
    return {
      interval: [(o.interval[0] - r[0]) / n, (o.interval[1] - r[0]) / n]
    };
  });
  var i = t.length, a = 0;
  return function(o) {
    var s;
    for (s = a; s < i; s++) {
      var l = t[s].interval;
      if (l[0] <= o && o <= l[1]) {
        a = s;
        break;
      }
    }
    if (s === i)
      for (s = a - 1; s >= 0; s--) {
        var l = t[s].interval;
        if (l[0] <= o && o <= l[1]) {
          a = s;
          break;
        }
      }
    return s >= 0 && s < i && e[s];
  };
}
function GL(r, t) {
  var e = r[1] - r[0];
  return t = [(t[0] - r[0]) / e, (t[1] - r[0]) / e], function(n) {
    return n >= t[0] && n <= t[1];
  };
}
function Pg(r) {
  var t = r.dimensions;
  return t[0] === "lng" && t[1] === "lat";
}
var WL = (
  /** @class */
  (function(r) {
    z(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.prototype.render = function(e, n, i) {
      var a;
      if (n.eachComponent("visualMap", function(s) {
        s.eachTargetSeries(function(l) {
          l === e && (a = s);
        });
      }), process.env.NODE_ENV !== "production" && !a)
        throw new Error("Heatmap must use with visualMap");
      this._progressiveEls = null, this.group.removeAll();
      var o = e.coordinateSystem;
      o.type === "cartesian2d" || o.type === "calendar" ? this._renderOnCartesianAndCalendar(e, i, 0, e.getData().count()) : Pg(o) && this._renderOnGeo(o, e, a, i);
    }, t.prototype.incrementalPrepareRender = function(e, n, i) {
      this.group.removeAll();
    }, t.prototype.incrementalRender = function(e, n, i, a) {
      var o = n.coordinateSystem;
      o && (Pg(o) ? this.render(n, i, a) : (this._progressiveEls = [], this._renderOnCartesianAndCalendar(n, a, e.start, e.end, !0)));
    }, t.prototype.eachRendered = function(e) {
      po(this._progressiveEls || this.group, e);
    }, t.prototype._renderOnCartesianAndCalendar = function(e, n, i, a, o) {
      var s = e.coordinateSystem, l = Gl(s, "cartesian2d"), u, f, h, v;
      if (l) {
        var c = s.getAxis("x"), p = s.getAxis("y");
        if (process.env.NODE_ENV !== "production") {
          if (!(c.type === "category" && p.type === "category"))
            throw new Error("Heatmap on cartesian must have two category axes");
          if (!(c.onBand && p.onBand))
            throw new Error("Heatmap on cartesian must have two axes with boundaryGap true");
        }
        u = c.getBandWidth() + 0.5, f = p.getBandWidth() + 0.5, h = c.scale.getExtent(), v = p.scale.getExtent();
      }
      for (var d = this.group, g = e.getData(), y = e.getModel(["emphasis", "itemStyle"]).getItemStyle(), m = e.getModel(["blur", "itemStyle"]).getItemStyle(), _ = e.getModel(["select", "itemStyle"]).getItemStyle(), S = e.get(["itemStyle", "borderRadius"]), w = Kr(e), b = e.getModel("emphasis"), x = b.get("focus"), T = b.get("blurScope"), A = b.get("disabled"), M = l ? [g.mapDimension("x"), g.mapDimension("y"), g.mapDimension("value")] : [g.mapDimension("time"), g.mapDimension("value")], C = i; C < a; C++) {
        var E = void 0, I = g.getItemVisual(C, "style");
        if (l) {
          var P = g.get(M[0], C), O = g.get(M[1], C);
          if (isNaN(g.get(M[2], C)) || isNaN(P) || isNaN(O) || P < h[0] || P > h[1] || O < v[0] || O > v[1])
            continue;
          var R = s.dataToPoint([P, O]);
          E = new _t({
            shape: {
              x: R[0] - u / 2,
              y: R[1] - f / 2,
              width: u,
              height: f
            },
            style: I
          });
        } else {
          if (isNaN(g.get(M[1], C)))
            continue;
          E = new _t({
            z2: 1,
            shape: s.dataToRect([g.get(M[0], C)]).contentShape,
            style: I
          });
        }
        if (g.hasItemOption) {
          var F = g.getItemModel(C), N = F.getModel("emphasis");
          y = N.getModel("itemStyle").getItemStyle(), m = F.getModel(["blur", "itemStyle"]).getItemStyle(), _ = F.getModel(["select", "itemStyle"]).getItemStyle(), S = F.get(["itemStyle", "borderRadius"]), x = N.get("focus"), T = N.get("blurScope"), A = N.get("disabled"), w = Kr(F);
        }
        E.shape.r = S;
        var V = e.getRawValue(C), L = "-";
        V && V[2] != null && (L = V[2] + ""), Gn(E, w, {
          labelFetcher: e,
          labelDataIndex: C,
          defaultOpacity: I.opacity,
          defaultText: L
        }), E.ensureState("emphasis").style = y, E.ensureState("blur").style = m, E.ensureState("select").style = _, Vn(E, x, T, A), E.incremental = o, o && (E.states.emphasis.hoverLayer = !0), d.add(E), g.setItemGraphicEl(C, E), this._progressiveEls && this._progressiveEls.push(E);
      }
    }, t.prototype._renderOnGeo = function(e, n, i, a) {
      var o = i.targetVisuals.inRange, s = i.targetVisuals.outOfRange, l = n.getData(), u = this._hmLayer || this._hmLayer || new FL();
      u.blurSize = n.get("blurSize"), u.pointSize = n.get("pointSize"), u.minOpacity = n.get("minOpacity"), u.maxOpacity = n.get("maxOpacity");
      var f = e.getViewRect().clone(), h = e.getRoamTransform();
      f.applyTransform(h);
      var v = Math.max(f.x, 0), c = Math.max(f.y, 0), p = Math.min(f.width + f.x, a.getWidth()), d = Math.min(f.height + f.y, a.getHeight()), g = p - v, y = d - c, m = [l.mapDimension("lng"), l.mapDimension("lat"), l.mapDimension("value")], _ = l.mapArray(m, function(x, T, A) {
        var M = e.dataToPoint([x, T]);
        return M[0] -= v, M[1] -= c, M.push(A), M;
      }), S = i.getExtent(), w = i.type === "visualMap.continuous" ? GL(S, i.option.range) : HL(S, i.getPieceList(), i.option.selected);
      u.update(_, g, y, o.color.getNormalizer(), {
        inRange: o.color.getColorMapper(),
        outOfRange: s.color.getColorMapper()
      }, w);
      var b = new Ye({
        style: {
          width: g,
          height: y,
          x: v,
          y: c,
          image: u.canvas
        },
        silent: !0
      });
      this.group.add(b);
    }, t.type = "heatmap", t;
  })(Pt)
), UL = (
  /** @class */
  (function(r) {
    z(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.prototype.getInitialData = function(e, n) {
      return Li(null, this, {
        generateCoord: "value"
      });
    }, t.prototype.preventIncremental = function() {
      var e = yo.get(this.get("coordinateSystem"));
      if (e && e.dimensions)
        return e.dimensions[0] === "lng" && e.dimensions[1] === "lat";
    }, t.type = "series.heatmap", t.dependencies = ["grid", "geo", "calendar"], t.defaultOption = {
      coordinateSystem: "cartesian2d",
      // zlevel: 0,
      z: 2,
      // Cartesian coordinate system
      // xAxisIndex: 0,
      // yAxisIndex: 0,
      // Geo coordinate system
      geoIndex: 0,
      blurSize: 30,
      pointSize: 20,
      maxOpacity: 1,
      minOpacity: 0,
      select: {
        itemStyle: {
          borderColor: "#212121"
        }
      }
    }, t;
  })(zt)
);
function YL(r) {
  r.registerChartView(WL), r.registerSeriesModel(UL);
}
var wn = Mt(), Og = j, yf = J, XL = (
  /** @class */
  (function() {
    function r() {
      this._dragging = !1, this.animationThreshold = 15;
    }
    return r.prototype.render = function(t, e, n, i) {
      var a = e.get("value"), o = e.get("status");
      if (this._axisModel = t, this._axisPointerModel = e, this._api = n, !(!i && this._lastValue === a && this._lastStatus === o)) {
        this._lastValue = a, this._lastStatus = o;
        var s = this._group, l = this._handle;
        if (!o || o === "hide") {
          s && s.hide(), l && l.hide();
          return;
        }
        s && s.show(), l && l.show();
        var u = {};
        this.makeElOption(u, a, t, e, n);
        var f = u.graphicKey;
        f !== this._lastGraphicKey && this.clear(n), this._lastGraphicKey = f;
        var h = this._moveAnimation = this.determineAnimation(t, e);
        if (!s)
          s = this._group = new xt(), this.createPointerEl(s, u, t, e), this.createLabelEl(s, u, t, e), n.getZr().add(s);
        else {
          var v = wt(Rg, e, h);
          this.updatePointerEl(s, u, v), this.updateLabelEl(s, u, v, e);
        }
        kg(s, e, !0), this._renderHandle(a);
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
          var l = jc(t).seriesDataCount, u = i.getExtent();
          return Math.abs(u[0] - u[1]) / l > s;
        }
        return !1;
      }
      return n === !0;
    }, r.prototype.makeElOption = function(t, e, n, i, a) {
    }, r.prototype.createPointerEl = function(t, e, n, i) {
      var a = e.pointer;
      if (a) {
        var o = wn(t).pointerEl = new GT[a.type](Og(e.pointer));
        t.add(o);
      }
    }, r.prototype.createLabelEl = function(t, e, n, i) {
      if (e.label) {
        var a = wn(t).labelEl = new St(Og(e.label));
        t.add(a), Ng(a, i);
      }
    }, r.prototype.updatePointerEl = function(t, e, n) {
      var i = wn(t).pointerEl;
      i && e.pointer && (i.setStyle(e.pointer.style), n(i, {
        shape: e.pointer.shape
      }));
    }, r.prototype.updateLabelEl = function(t, e, n, i) {
      var a = wn(t).labelEl;
      a && (a.setStyle(e.label.style), n(a, {
        // Consider text length change in vertical axis, animation should
        // be used on shape, otherwise the effect will be weird.
        // TODOTODO
        // shape: elOption.label.shape,
        x: e.label.x,
        y: e.label.y
      }), Ng(a, i));
    }, r.prototype._renderHandle = function(t) {
      if (!(this._dragging || !this.updateHandleTransform)) {
        var e = this._axisPointerModel, n = this._api.getZr(), i = this._handle, a = e.getModel("handle"), o = e.get("status");
        if (!a.get("show") || !o || o === "hide") {
          i && n.remove(i), this._handle = null;
          return;
        }
        var s;
        this._handle || (s = !0, i = this._handle = xl(a.get("icon"), {
          cursor: "move",
          draggable: !0,
          onmousemove: function(u) {
            Ba(u.event);
          },
          onmousedown: yf(this._onHandleDragMove, this, 0, 0),
          drift: yf(this._onHandleDragMove, this),
          ondragend: yf(this._onHandleDragEnd, this)
        }), n.add(i)), kg(i, e, !1), i.setStyle(a.getItemStyle(null, ["color", "borderColor", "borderWidth", "opacity", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"]));
        var l = a.get("size");
        H(l) || (l = [l, l]), i.scaleX = l[0] / 2, i.scaleY = l[1] / 2, O0(this, "_doDispatchAxisPointer", a.get("throttle") || 0, "fixRate"), this._moveHandleToValue(t, s);
      }
    }, r.prototype._moveHandleToValue = function(t, e) {
      Rg(this._axisPointerModel, !e && this._moveAnimation, this._handle, mf(this.getHandleTransform(t, this._axisModel, this._axisPointerModel)));
    }, r.prototype._onHandleDragMove = function(t, e) {
      var n = this._handle;
      if (n) {
        this._dragging = !0;
        var i = this.updateHandleTransform(mf(n), [t, e], this._axisModel, this._axisPointerModel);
        this._payloadInfo = i, n.stopAnimation(), n.attr(mf(i)), wn(n).lastProp = null, this._doDispatchAxisPointer();
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
      e && n && (this._lastGraphicKey = null, n && e.remove(n), i && e.remove(i), this._group = null, this._handle = null, this._payloadInfo = null), sh(this, "_doDispatchAxisPointer");
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
function Rg(r, t, e, n) {
  S1(wn(e).lastProp, n) || (wn(e).lastProp = n, t ? Ot(e, n, r) : (e.stopAnimation(), e.attr(n)));
}
function S1(r, t) {
  if (W(r) && W(t)) {
    var e = !0;
    return D(t, function(n, i) {
      e = e && S1(r[i], n);
    }), !!e;
  } else
    return r === t;
}
function Ng(r, t) {
  r[t.get(["label", "show"]) ? "show" : "hide"]();
}
function mf(r) {
  return {
    x: r.x || 0,
    y: r.y || 0,
    rotation: r.rotation || 0
  };
}
function kg(r, t, e) {
  var n = t.get("z"), i = t.get("zlevel");
  r && r.traverse(function(a) {
    a.type !== "group" && (n != null && (a.z = n), i != null && (a.zlevel = i), a.silent = e);
  });
}
function $L(r) {
  var t = r.get("type"), e = r.getModel(t + "Style"), n;
  return t === "line" ? (n = e.getLineStyle(), n.fill = null) : t === "shadow" && (n = e.getAreaStyle(), n.stroke = null), n;
}
function qL(r, t, e, n, i) {
  var a = e.get("value"), o = b1(a, t.axis, t.ecModel, e.get("seriesDataIndices"), {
    precision: e.get(["label", "precision"]),
    formatter: e.get(["label", "formatter"])
  }), s = e.getModel("label"), l = Ei(s.get("padding") || 0), u = s.getFont(), f = Zh(o, u), h = i.position, v = f.width + l[1] + l[3], c = f.height + l[0] + l[2], p = i.align;
  p === "right" && (h[0] -= v), p === "center" && (h[0] -= v / 2);
  var d = i.verticalAlign;
  d === "bottom" && (h[1] -= c), d === "middle" && (h[1] -= c / 2), ZL(h, v, c, n);
  var g = s.get("backgroundColor");
  (!g || g === "auto") && (g = t.get(["axisLine", "lineStyle", "color"])), r.label = {
    // shape: {x: 0, y: 0, width: width, height: height, r: labelModel.get('borderRadius')},
    x: h[0],
    y: h[1],
    style: de(s, {
      text: o,
      font: u,
      fill: s.getTextColor(),
      padding: l,
      backgroundColor: g
    }),
    // Label should be over axisPointer.
    z2: 10
  };
}
function ZL(r, t, e, n) {
  var i = n.getWidth(), a = n.getHeight();
  r[0] = Math.min(r[0] + t, i) - t, r[1] = Math.min(r[1] + e, a) - e, r[0] = Math.max(r[0], 0), r[1] = Math.max(r[1], 0);
}
function b1(r, t, e, n, i) {
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
      value: Uc(t, {
        value: r
      }),
      axisDimension: t.dim,
      axisIndex: t.index,
      seriesData: []
    };
    D(n, function(l) {
      var u = e.getSeriesByIndex(l.seriesIndex), f = l.dataIndexInside, h = u && u.getDataParams(f);
      h && s.seriesData.push(h);
    }), U(o) ? a = o.replace("{value}", a) : $(o) && (a = o(s));
  }
  return a;
}
function w1(r, t, e) {
  var n = Xr();
  return ll(n, n, e.rotation), Ds(n, n, e.position), gi([r.dataToCoord(t), (e.labelOffset || 0) + (e.labelDirection || 1) * (e.labelMargin || 0)], n);
}
function jL(r, t, e, n, i, a) {
  var o = Zr.innerTextLayout(e.rotation, 0, e.labelDirection);
  e.labelMargin = i.get(["label", "margin"]), qL(t, n, i, a, {
    position: w1(n.axis, r, e),
    align: o.textAlign,
    verticalAlign: o.textVerticalAlign
  });
}
function KL(r, t, e) {
  return e = e || 0, {
    x1: r[e],
    y1: r[1 - e],
    x2: t[e],
    y2: t[1 - e]
  };
}
function QL(r, t, e) {
  return e = e || 0, {
    x: r[e],
    y: r[1 - e],
    width: t[e],
    height: t[1 - e]
  };
}
var JL = (
  /** @class */
  (function(r) {
    z(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t.prototype.makeElOption = function(e, n, i, a, o) {
      var s = i.axis, l = s.grid, u = a.get("type"), f = Vg(l, s).getOtherAxis(s).getGlobalExtent(), h = s.toGlobalCoord(s.dataToCoord(n, !0));
      if (u && u !== "none") {
        var v = $L(a), c = tP[u](s, h, f);
        c.style = v, e.graphicKey = c.type, e.pointer = c;
      }
      var p = xh(l.model, i);
      jL(
        // @ts-ignore
        n,
        e,
        p,
        i,
        a,
        o
      );
    }, t.prototype.getHandleTransform = function(e, n, i) {
      var a = xh(n.axis.grid.model, n, {
        labelInside: !1
      });
      a.labelMargin = i.get(["handle", "margin"]);
      var o = w1(n.axis, e, a);
      return {
        x: o[0],
        y: o[1],
        rotation: a.rotation + (a.labelDirection < 0 ? Math.PI : 0)
      };
    }, t.prototype.updateHandleTransform = function(e, n, i, a) {
      var o = i.axis, s = o.grid, l = o.getGlobalExtent(!0), u = Vg(s, o).getOtherAxis(o).getGlobalExtent(), f = o.dim === "x" ? 0 : 1, h = [e.x, e.y];
      h[f] += n[f], h[f] = Math.min(l[1], h[f]), h[f] = Math.max(l[0], h[f]);
      var v = (u[1] + u[0]) / 2, c = [v, v];
      c[f] = h[f];
      var p = [{
        verticalAlign: "middle"
      }, {
        align: "center"
      }];
      return {
        x: h[0],
        y: h[1],
        rotation: e.rotation,
        cursorPoint: c,
        tooltipOption: p[f]
      };
    }, t;
  })(XL)
);
function Vg(r, t) {
  var e = {};
  return e[t.dim + "AxisIndex"] = t.index, r.getCartesian(e);
}
var tP = {
  line: function(r, t, e) {
    var n = KL([t, e[0]], [t, e[1]], Bg(r));
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
      shape: QL([t - n / 2, e[0]], [n, i], Bg(r))
    };
  }
};
function Bg(r) {
  return r.dim === "x" ? 0 : 1;
}
var eP = (
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
  })(ot)
), _r = Mt(), rP = D;
function x1(r, t, e) {
  if (!Z.node) {
    var n = t.getZr();
    _r(n).records || (_r(n).records = {}), nP(n, t);
    var i = _r(n).records[r] || (_r(n).records[r] = {});
    i.handler = e;
  }
}
function nP(r, t) {
  if (_r(r).initialized)
    return;
  _r(r).initialized = !0, e("click", wt(zg, "click")), e("mousemove", wt(zg, "mousemove")), e("globalout", aP);
  function e(n, i) {
    r.on(n, function(a) {
      var o = oP(t);
      rP(_r(r).records, function(s) {
        s && i(s, a, o.dispatchAction);
      }), iP(o.pendings, t);
    });
  }
}
function iP(r, t) {
  var e = r.showTip.length, n = r.hideTip.length, i;
  e ? i = r.showTip[e - 1] : n && (i = r.hideTip[n - 1]), i && (i.dispatchAction = null, t.dispatchAction(i));
}
function aP(r, t, e) {
  r.handler("leave", null, e);
}
function zg(r, t, e, n) {
  t.handler(r, e, n);
}
function oP(r) {
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
function Ah(r, t) {
  if (!Z.node) {
    var e = t.getZr(), n = (_r(e).records || {})[r];
    n && (_r(e).records[r] = null);
  }
}
var sP = (
  /** @class */
  (function(r) {
    z(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.prototype.render = function(e, n, i) {
      var a = n.getComponent("tooltip"), o = e.get("triggerOn") || a && a.get("triggerOn") || "mousemove|click";
      x1("axisPointer", i, function(s, l, u) {
        o !== "none" && (s === "leave" || o.indexOf(s) >= 0) && u({
          type: "updateAxisPointer",
          currTrigger: s,
          x: l && l.offsetX,
          y: l && l.offsetY
        });
      });
    }, t.prototype.remove = function(e, n) {
      Ah("axisPointer", n);
    }, t.prototype.dispose = function(e, n) {
      Ah("axisPointer", n);
    }, t.type = "axisPointer", t;
  })(ne)
);
function T1(r, t) {
  var e = [], n = r.seriesIndex, i;
  if (n == null || !(i = t.getSeriesByIndex(n)))
    return {
      point: []
    };
  var a = i.getData(), o = Nn(a, r);
  if (o == null || o < 0 || H(o))
    return {
      point: []
    };
  var s = a.getItemGraphicEl(o), l = i.coordinateSystem;
  if (i.getTooltipPosition)
    e = i.getTooltipPosition(o) || [];
  else if (l && l.dataToPoint)
    if (r.isStacked) {
      var u = l.getBaseAxis(), f = l.getOtherAxis(u), h = f.dim, v = u.dim, c = h === "x" || h === "radius" ? 1 : 0, p = a.mapDimension(v), d = [];
      d[c] = a.get(p, o), d[1 - c] = a.get(a.getCalculationInfo("stackResultDimension"), o), e = l.dataToPoint(d) || [];
    } else
      e = l.dataToPoint(a.getValues(Y(l.dimensions, function(y) {
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
var Fg = Mt();
function lP(r, t, e) {
  var n = r.currTrigger, i = [r.x, r.y], a = r, o = r.dispatchAction || J(e.dispatchAction, e), s = t.getComponent("axisPointer").coordSysAxesInfo;
  if (s) {
    bs(i) && (i = T1({
      seriesIndex: a.seriesIndex,
      // Do not use dataIndexInside from other ec instance.
      // FIXME: auto detect it?
      dataIndex: a.dataIndex
    }, t).point);
    var l = bs(i), u = a.axesInfo, f = s.axesInfo, h = n === "leave" || bs(i), v = {}, c = {}, p = {
      list: [],
      map: {}
    }, d = {
      showPointer: wt(fP, c),
      showTooltip: wt(hP, p)
    };
    D(s.coordSysMap, function(y, m) {
      var _ = l || y.containPoint(i);
      D(s.coordSysAxesInfo[m], function(S, w) {
        var b = S.axis, x = dP(u, S);
        if (!h && _ && (!u || x)) {
          var T = x && x.value;
          T == null && !l && (T = b.pointToData(i)), T != null && Hg(S, T, d, !1, v);
        }
      });
    });
    var g = {};
    return D(f, function(y, m) {
      var _ = y.linkGroup;
      _ && !c[m] && D(_.axesInfo, function(S, w) {
        var b = c[w];
        if (S !== y && b) {
          var x = b.value;
          _.mapper && (x = y.axis.scale.parse(_.mapper(x, Gg(S), Gg(y)))), g[y.key] = x;
        }
      });
    }), D(g, function(y, m) {
      Hg(f[m], y, d, !0, v);
    }), cP(c, f, v), vP(p, i, r, o), pP(f, o, e), v;
  }
}
function Hg(r, t, e, n, i) {
  var a = r.axis;
  if (!(a.scale.isBlank() || !a.containData(t))) {
    if (!r.involveSeries) {
      e.showPointer(r, t);
      return;
    }
    var o = uP(t, r), s = o.payloadBatch, l = o.snapToValue;
    s[0] && i.seriesIndex == null && B(i, s[0]), !n && r.snap && a.containData(l) && l != null && (t = l), e.showPointer(r, t, s), e.showTooltip(r, o, l);
  }
}
function uP(r, t) {
  var e = t.axis, n = e.dim, i = r, a = [], o = Number.MAX_VALUE, s = -1;
  return D(t.seriesModels, function(l, u) {
    var f = l.getData().mapDimensionsAll(n), h, v;
    if (l.getAxisTooltipData) {
      var c = l.getAxisTooltipData(f, r, e);
      v = c.dataIndices, h = c.nestestValue;
    } else {
      if (v = l.getData().indicesOfNearest(
        f[0],
        r,
        // Add a threshold to avoid find the wrong dataIndex
        // when data length is not same.
        // false,
        e.type === "category" ? 0.5 : null
      ), !v.length)
        return;
      h = l.getData().get(f[0], v[0]);
    }
    if (!(h == null || !isFinite(h))) {
      var p = r - h, d = Math.abs(p);
      d <= o && ((d < o || p >= 0 && s < 0) && (o = d, s = p, i = h, a.length = 0), D(v, function(g) {
        a.push({
          seriesIndex: l.seriesIndex,
          dataIndexInside: g,
          dataIndex: l.getData().getRawIndex(g)
        });
      }));
    }
  }), {
    payloadBatch: a,
    snapToValue: i
  };
}
function fP(r, t, e, n) {
  r[t.key] = {
    value: e,
    payloadBatch: n
  };
}
function hP(r, t, e, n) {
  var i = e.payloadBatch, a = t.axis, o = a.model, s = t.axisPointerModel;
  if (!(!t.triggerTooltip || !i.length)) {
    var l = t.coordSys.model, u = eo(l), f = r.map[u];
    f || (f = r.map[u] = {
      coordSysId: l.id,
      coordSysIndex: l.componentIndex,
      coordSysType: l.type,
      coordSysMainType: l.mainType,
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
function cP(r, t, e) {
  var n = e.axesInfo = [];
  D(t, function(i, a) {
    var o = i.axisPointerModel.option, s = r[a];
    s ? (!i.useHandle && (o.status = "show"), o.value = s.value, o.seriesDataIndices = (s.payloadBatch || []).slice()) : !i.useHandle && (o.status = "hide"), o.status === "show" && n.push({
      axisDim: i.axis.dim,
      axisIndex: i.axis.model.componentIndex,
      value: o.value
    });
  });
}
function vP(r, t, e, n) {
  if (bs(t) || !r.list.length) {
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
function pP(r, t, e) {
  var n = e.getZr(), i = "axisPointerLastHighlights", a = Fg(n)[i] || {}, o = Fg(n)[i] = {};
  D(r, function(u, f) {
    var h = u.axisPointerModel.option;
    h.status === "show" && u.triggerEmphasis && D(h.seriesDataIndices, function(v) {
      var c = v.seriesIndex + " | " + v.dataIndex;
      o[c] = v;
    });
  });
  var s = [], l = [];
  D(a, function(u, f) {
    !o[f] && l.push(u);
  }), D(o, function(u, f) {
    !a[f] && s.push(u);
  }), l.length && e.dispatchAction({
    type: "downplay",
    escapeConnect: !0,
    // Not blur others when highlight in axisPointer.
    notBlur: !0,
    batch: l
  }), s.length && e.dispatchAction({
    type: "highlight",
    escapeConnect: !0,
    // Not blur others when highlight in axisPointer.
    notBlur: !0,
    batch: s
  });
}
function dP(r, t) {
  for (var e = 0; e < (r || []).length; e++) {
    var n = r[e];
    if (t.axis.dim === n.axisDim && t.axis.model.componentIndex === n.axisIndex)
      return n;
  }
}
function Gg(r) {
  var t = r.axis.model, e = {}, n = e.axisDim = r.axis.dim;
  return e.axisIndex = e[n + "AxisIndex"] = t.componentIndex, e.axisName = e[n + "AxisName"] = t.name, e.axisId = e[n + "AxisId"] = t.id, e;
}
function bs(r) {
  return !r || r[0] == null || isNaN(r[0]) || r[1] == null || isNaN(r[1]);
}
function C1(r) {
  d1.registerAxisPointerClass("CartesianAxisPointer", JL), r.registerComponentModel(eP), r.registerComponentView(sP), r.registerPreprocessor(function(t) {
    if (t) {
      (!t.axisPointer || t.axisPointer.length === 0) && (t.axisPointer = {});
      var e = t.axisPointer.link;
      e && !H(e) && (t.axisPointer.link = [e]);
    }
  }), r.registerProcessor(r.PRIORITY.PROCESSOR.STATISTIC, function(t, e) {
    t.getComponent("axisPointer").coordSysAxesInfo = fL(t, e);
  }), r.registerAction({
    type: "updateAxisPointer",
    event: "updateAxisPointer",
    update: ":updateAxisPointer"
  }, lP);
}
function Wl(r) {
  Ft(m1), Ft(C1);
}
function gP(r, t) {
  var e = Ei(t.get("padding")), n = t.getItemStyle(["color", "opacity"]);
  return n.fill = t.get("backgroundColor"), r = new _t({
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
var yP = (
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
  })(ot)
);
function D1(r) {
  var t = r.get("confine");
  return t != null ? !!t : r.get("renderMode") === "richText";
}
function M1(r) {
  if (Z.domSupported) {
    for (var t = document.documentElement.style, e = 0, n = r.length; e < n; e++)
      if (r[e] in t)
        return r[e];
  }
}
var A1 = M1(["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]), mP = M1(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]);
function E1(r, t) {
  if (!r)
    return t;
  t = _c(t, !0);
  var e = r.indexOf(t);
  return r = e === -1 ? t : "-" + r.slice(0, e) + "-" + t, r.toLowerCase();
}
function _P(r, t) {
  var e = r.currentStyle || document.defaultView && document.defaultView.getComputedStyle(r);
  return e ? e[t] : null;
}
var SP = E1(mP, "transition"), Kc = E1(A1, "transform"), bP = "position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;" + (Z.transform3dSupported ? "will-change:transform;" : "");
function wP(r) {
  return r = r === "left" ? "right" : r === "right" ? "left" : r === "top" ? "bottom" : "top", r;
}
function xP(r, t, e) {
  if (!U(e) || e === "inside")
    return "";
  var n = r.get("backgroundColor"), i = r.get("borderWidth");
  t = Bn(t);
  var a = wP(e), o = Math.max(Math.round(i) * 1.5, 6), s = "", l = Kc + ":", u;
  vt(["left", "right"], a) > -1 ? (s += "top:50%", l += "translateY(-50%) rotate(" + (u = a === "left" ? -225 : -45) + "deg)") : (s += "left:50%", l += "translateX(-50%) rotate(" + (u = a === "top" ? 225 : 45) + "deg)");
  var f = u * Math.PI / 180, h = o + i, v = h * Math.abs(Math.cos(f)) + h * Math.abs(Math.sin(f)), c = Math.round(((v - Math.SQRT2 * i) / 2 + Math.SQRT2 * i - (v - h) / 2) * 100) / 100;
  s += ";" + a + ":-" + c + "px";
  var p = t + " solid " + i + "px;", d = ["position:absolute;width:" + o + "px;height:" + o + "px;z-index:-1;", s + ";" + l + ";", "border-bottom:" + p, "border-right:" + p, "background-color:" + n + ";"];
  return '<div style="' + d.join("") + '"></div>';
}
function TP(r, t) {
  var e = "cubic-bezier(0.23,1,0.32,1)", n = " " + r / 2 + "s " + e, i = "opacity" + n + ",visibility" + n;
  return t || (n = " " + r + "s " + e, i += Z.transformSupported ? "," + Kc + n : ",left" + n + ",top" + n), SP + ":" + i;
}
function Wg(r, t, e) {
  var n = r.toFixed(0) + "px", i = t.toFixed(0) + "px";
  if (!Z.transformSupported)
    return e ? "top:" + i + ";left:" + n + ";" : [["top", i], ["left", n]];
  var a = Z.transform3dSupported, o = "translate" + (a ? "3d" : "") + "(" + n + "," + i + (a ? ",0" : "") + ")";
  return e ? "top:0;left:0;" + Kc + ":" + o + ";" : [["top", 0], ["left", 0], [A1, o]];
}
function CP(r) {
  var t = [], e = r.get("fontSize"), n = r.getTextColor();
  n && t.push("color:" + n), t.push("font:" + r.getFont());
  var i = Q(r.get("lineHeight"), Math.round(e * 3 / 2));
  e && t.push("line-height:" + i + "px");
  var a = r.get("textShadowColor"), o = r.get("textShadowBlur") || 0, s = r.get("textShadowOffsetX") || 0, l = r.get("textShadowOffsetY") || 0;
  return a && o && t.push("text-shadow:" + s + "px " + l + "px " + o + "px " + a), D(["decoration", "align"], function(u) {
    var f = r.get(u);
    f && t.push("text-" + u + ":" + f);
  }), t.join(";");
}
function DP(r, t, e) {
  var n = [], i = r.get("transitionDuration"), a = r.get("backgroundColor"), o = r.get("shadowBlur"), s = r.get("shadowColor"), l = r.get("shadowOffsetX"), u = r.get("shadowOffsetY"), f = r.getModel("textStyle"), h = L0(r, "html"), v = l + "px " + u + "px " + o + "px " + s;
  return n.push("box-shadow:" + v), t && i && n.push(TP(i, e)), a && n.push("background-color:" + a), D(["width", "color", "radius"], function(c) {
    var p = "border-" + c, d = _c(p), g = r.get(d);
    g != null && n.push(p + ":" + g + (c === "color" ? "" : "px"));
  }), n.push(CP(f)), h != null && n.push("padding:" + Ei(h).join("px ") + "px"), n.join(";") + ";";
}
function Ug(r, t, e, n, i) {
  var a = t && t.painter;
  if (e) {
    var o = a && a.getViewportRoot();
    o && nb(r, o, e, n, i);
  } else {
    r[0] = n, r[1] = i;
    var s = a && a.getViewportRootOffset();
    s && (r[0] += s.offsetLeft, r[1] += s.offsetTop);
  }
  r[2] = r[0] / t.getWidth(), r[3] = r[1] / t.getHeight();
}
var MP = (
  /** @class */
  (function() {
    function r(t, e) {
      if (this._show = !1, this._styleCoord = [0, 0, 0, 0], this._enterable = !0, this._alwaysShowContent = !1, this._firstShow = !0, this._longHide = !0, Z.wxa)
        return null;
      var n = document.createElement("div");
      n.domBelongToZr = !0, this.el = n;
      var i = this._zr = t.getZr(), a = e.appendTo, o = a && (U(a) ? document.querySelector(a) : Rn(a) ? a : $(a) && a(t.getDom()));
      Ug(this._styleCoord, i, o, t.getWidth() / 2, t.getHeight() / 2), (o || t.getDom()).appendChild(n), this._api = t, this._container = o;
      var s = this;
      n.onmouseenter = function() {
        s._enterable && (clearTimeout(s._hideTimeout), s._show = !0), s._inContent = !0;
      }, n.onmousemove = function(l) {
        if (l = l || window.event, !s._enterable) {
          var u = i.handler, f = i.painter.getViewportRoot();
          be(f, l, !0), u.dispatch("mousemove", l);
        }
      }, n.onmouseleave = function() {
        s._inContent = !1, s._enterable && s._show && s.hideLater(s._hideDelay);
      };
    }
    return r.prototype.update = function(t) {
      if (!this._container) {
        var e = this._api.getDom(), n = _P(e, "position"), i = e.style;
        i.position !== "absolute" && n !== "absolute" && (i.position = "relative");
      }
      var a = t.get("alwaysShowContent");
      a && this._moveIfResized(), this._alwaysShowContent = a, this.el.className = t.get("className") || "";
    }, r.prototype.show = function(t, e) {
      clearTimeout(this._hideTimeout), clearTimeout(this._longHideTimeout);
      var n = this.el, i = n.style, a = this._styleCoord;
      n.innerHTML ? i.cssText = bP + DP(t, !this._firstShow, this._longHide) + Wg(a[0], a[1], !0) + ("border-color:" + Bn(e) + ";") + (t.get("extraCssText") || "") + (";pointer-events:" + (this._enterable ? "auto" : "none")) : i.display = "none", this._show = !0, this._firstShow = !1, this._longHide = !1;
    }, r.prototype.setContent = function(t, e, n, i, a) {
      var o = this.el;
      if (t == null) {
        o.innerHTML = "";
        return;
      }
      var s = "";
      if (U(a) && n.get("trigger") === "item" && !D1(n) && (s = xP(n, i, a)), U(t))
        o.innerHTML = t + s;
      else if (t) {
        o.innerHTML = "", H(t) || (t = [t]);
        for (var l = 0; l < t.length; l++)
          Rn(t[l]) && t[l].parentNode !== o && o.appendChild(t[l]);
        if (s && o.childNodes.length) {
          var u = document.createElement("div");
          u.innerHTML = s, o.appendChild(u);
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
        if (Ug(n, this._zr, this._container, t, e), n[0] != null && n[1] != null) {
          var i = this.el.style, a = Wg(n[0], n[1]);
          D(a, function(o) {
            i[o[0]] = o[1];
          });
        }
      }
    }, r.prototype._moveIfResized = function() {
      var t = this._styleCoord[2], e = this._styleCoord[3];
      this.moveTo(t * this._zr.getWidth(), e * this._zr.getHeight());
    }, r.prototype.hide = function() {
      var t = this, e = this.el.style;
      e.visibility = "hidden", e.opacity = "0", Z.transform3dSupported && (e.willChange = ""), this._show = !1, this._longHideTimeout = setTimeout(function() {
        return t._longHide = !0;
      }, 500);
    }, r.prototype.hideLater = function(t) {
      this._show && !(this._inContent && this._enterable) && !this._alwaysShowContent && (t ? (this._hideDelay = t, this._show = !1, this._hideTimeout = setTimeout(J(this.hide, this), t)) : this.hide());
    }, r.prototype.isShow = function() {
      return this._show;
    }, r.prototype.dispose = function() {
      clearTimeout(this._hideTimeout), clearTimeout(this._longHideTimeout);
      var t = this.el.parentNode;
      t && t.removeChild(this.el), this.el = this._container = null;
    }, r;
  })()
), AP = (
  /** @class */
  (function() {
    function r(t) {
      this._show = !1, this._styleCoord = [0, 0, 0, 0], this._alwaysShowContent = !1, this._enterable = !0, this._zr = t.getZr(), Xg(this._styleCoord, this._zr, t.getWidth() / 2, t.getHeight() / 2);
    }
    return r.prototype.update = function(t) {
      var e = t.get("alwaysShowContent");
      e && this._moveIfResized(), this._alwaysShowContent = e;
    }, r.prototype.show = function() {
      this._hideTimeout && clearTimeout(this._hideTimeout), this.el.show(), this._show = !0;
    }, r.prototype.setContent = function(t, e, n, i, a) {
      var o = this;
      W(t) && se(process.env.NODE_ENV !== "production" ? "Passing DOM nodes as content is not supported in richText tooltip!" : ""), this.el && this._zr.remove(this.el);
      var s = n.getModel("textStyle");
      this.el = new St({
        style: {
          rich: e.richTextStyles,
          text: t,
          lineHeight: 22,
          borderWidth: 1,
          borderColor: i,
          textShadowColor: s.get("textShadowColor"),
          fill: n.get(["textStyle", "color"]),
          padding: L0(n, "richText"),
          verticalAlign: "top",
          align: "left"
        },
        z: n.get("z")
      }), D(["backgroundColor", "borderRadius", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"], function(u) {
        o.el.style[u] = n.get(u);
      }), D(["textShadowBlur", "textShadowOffsetX", "textShadowOffsetY"], function(u) {
        o.el.style[u] = s.get(u) || 0;
      }), this._zr.add(this.el);
      var l = this;
      this.el.on("mouseover", function() {
        l._enterable && (clearTimeout(l._hideTimeout), l._show = !0), l._inContent = !0;
      }), this.el.on("mouseout", function() {
        l._enterable && l._show && l.hideLater(l._hideDelay), l._inContent = !1;
      });
    }, r.prototype.setEnterable = function(t) {
      this._enterable = t;
    }, r.prototype.getSize = function() {
      var t = this.el, e = this.el.getBoundingRect(), n = Yg(t.style);
      return [e.width + n.left + n.right, e.height + n.top + n.bottom];
    }, r.prototype.moveTo = function(t, e) {
      var n = this.el;
      if (n) {
        var i = this._styleCoord;
        Xg(i, this._zr, t, e), t = i[0], e = i[1];
        var a = n.style, o = kr(a.borderWidth || 0), s = Yg(a);
        n.x = t + o + s.left, n.y = e + o + s.top, n.markRedraw();
      }
    }, r.prototype._moveIfResized = function() {
      var t = this._styleCoord[2], e = this._styleCoord[3];
      this.moveTo(t * this._zr.getWidth(), e * this._zr.getHeight());
    }, r.prototype.hide = function() {
      this.el && this.el.hide(), this._show = !1;
    }, r.prototype.hideLater = function(t) {
      this._show && !(this._inContent && this._enterable) && !this._alwaysShowContent && (t ? (this._hideDelay = t, this._show = !1, this._hideTimeout = setTimeout(J(this.hide, this), t)) : this.hide());
    }, r.prototype.isShow = function() {
      return this._show;
    }, r.prototype.dispose = function() {
      this._zr.remove(this.el);
    }, r;
  })()
);
function kr(r) {
  return Math.max(0, r);
}
function Yg(r) {
  var t = kr(r.shadowBlur || 0), e = kr(r.shadowOffsetX || 0), n = kr(r.shadowOffsetY || 0);
  return {
    left: kr(t - e),
    right: kr(t + e),
    top: kr(t - n),
    bottom: kr(t + n)
  };
}
function Xg(r, t, e, n) {
  r[0] = e, r[1] = n, r[2] = r[0] / t.getWidth(), r[3] = r[1] / t.getHeight();
}
var EP = new _t({
  shape: {
    x: -1,
    y: -1,
    width: 2,
    height: 2
  }
}), IP = (
  /** @class */
  (function(r) {
    z(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.prototype.init = function(e, n) {
      if (!(Z.node || !n.getDom())) {
        var i = e.getComponent("tooltip"), a = this._renderMode = Gw(i.get("renderMode"));
        this._tooltipContent = a === "richText" ? new AP(n) : new MP(n, {
          appendTo: i.get("appendToBody", !0) ? "body" : i.get("appendTo", !0)
        });
      }
    }, t.prototype.render = function(e, n, i) {
      if (!(Z.node || !i.getDom())) {
        this.group.removeAll(), this._tooltipModel = e, this._ecModel = n, this._api = i;
        var a = this._tooltipContent;
        a.update(e), a.setEnterable(e.get("enterable")), this._initGlobalListener(), this._keepShow(), this._renderMode !== "richText" && e.get("transitionDuration") ? O0(this, "_updatePosition", 50, "fixRate") : sh(this, "_updatePosition");
      }
    }, t.prototype._initGlobalListener = function() {
      var e = this._tooltipModel, n = e.get("triggerOn");
      x1("itemTooltip", this._api, J(function(i, a, o) {
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
      if (!(a.from === this.uid || Z.node || !i.getDom())) {
        var o = $g(a, i);
        this._ticket = "";
        var s = a.dataByCoordSys, l = RP(a, n, i);
        if (l) {
          var u = l.el.getBoundingRect().clone();
          u.applyTransform(l.el.transform), this._tryShow({
            offsetX: u.x + u.width / 2,
            offsetY: u.y + u.height / 2,
            target: l.el,
            position: a.position,
            // When manully trigger, the mouse is not on the el, so we'd better to
            // position tooltip on the bottom of the el and display arrow is possible.
            positionDefault: "bottom"
          }, o);
        } else if (a.tooltip && a.x != null && a.y != null) {
          var f = EP;
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
          var h = T1(a, n), v = h.point[0], c = h.point[1];
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
      this._tooltipModel && o.hideLater(this._tooltipModel.get("hideDelay")), this._lastX = this._lastY = this._lastDataByCoordSys = null, a.from !== this.uid && this._hide($g(a, i));
    }, t.prototype._manuallyAxisShowTip = function(e, n, i, a) {
      var o = a.seriesIndex, s = a.dataIndex, l = n.getComponent("axisPointer").coordSysAxesInfo;
      if (!(o == null || s == null || l == null)) {
        var u = n.getSeriesByIndex(o);
        if (u) {
          var f = u.getData(), h = va([f.getItemModel(s), u, (u.coordinateSystem || {}).model], this._tooltipModel);
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
          var l, u;
          vi(i, function(f) {
            if (at(f).dataIndex != null)
              return l = f, !0;
            if (at(f).tooltipConfig != null)
              return u = f, !0;
          }, !0), l ? this._showSeriesItemTooltip(e, l, n) : u ? this._showComponentItemTooltip(e, u, n) : this._hide(n);
        } else
          this._lastDataByCoordSys = null, this._hide(n);
      }
    }, t.prototype._showOrMove = function(e, n) {
      var i = e.get("showDelay");
      n = J(n, this), clearTimeout(this._showTimout), i > 0 ? this._showTimout = setTimeout(n, i) : n();
    }, t.prototype._showAxisTooltip = function(e, n) {
      var i = this._ecModel, a = this._tooltipModel, o = [n.offsetX, n.offsetY], s = va([n.tooltipOption], a), l = this._renderMode, u = [], f = Ka("section", {
        blocks: [],
        noHeader: !0
      }), h = [], v = new Wu();
      D(e, function(m) {
        D(m.dataByAxis, function(_) {
          var S = i.getComponent(_.axisDim + "Axis", _.axisIndex), w = _.value;
          if (!(!S || w == null)) {
            var b = b1(w, S.axis, i, _.seriesDataIndices, _.valueLabelOpt), x = Ka("section", {
              header: b,
              noHeader: !Ve(b),
              sortBlocks: !0,
              blocks: []
            });
            f.blocks.push(x), D(_.seriesDataIndices, function(T) {
              var A = i.getSeriesByIndex(T.seriesIndex), M = T.dataIndexInside, C = A.getDataParams(M);
              if (!(C.dataIndex < 0)) {
                C.axisDim = _.axisDim, C.axisIndex = _.axisIndex, C.axisType = _.axisType, C.axisId = _.axisId, C.axisValue = Uc(S.axis, {
                  value: w
                }), C.axisValueLabel = b, C.marker = v.makeTooltipMarker("item", Bn(C.color), l);
                var E = rd(A.formatTooltip(M, !0, null)), I = E.frag;
                if (I) {
                  var P = va([A], a).get("valueFormatter");
                  x.blocks.push(P ? B({
                    valueFormatter: P
                  }, I) : I);
                }
                E.text && h.push(E.text), u.push(C);
              }
            });
          }
        });
      }), f.blocks.reverse(), h.reverse();
      var c = n.position, p = s.get("order"), d = sd(f, v, l, p, i.get("useUTC"), s.get("textStyle"));
      d && h.unshift(d);
      var g = l === "richText" ? `

` : "<br/>", y = h.join(g);
      this._showOrMove(s, function() {
        this._updateContentNotChangedOnAxis(e, u) ? this._updatePosition(s, c, o[0], o[1], this._tooltipContent, u) : this._showTooltipContent(s, y, u, Math.random() + "", o[0], o[1], c, null, v);
      });
    }, t.prototype._showSeriesItemTooltip = function(e, n, i) {
      var a = this._ecModel, o = at(n), s = o.seriesIndex, l = a.getSeriesByIndex(s), u = o.dataModel || l, f = o.dataIndex, h = o.dataType, v = u.getData(h), c = this._renderMode, p = e.positionDefault, d = va([v.getItemModel(f), u, l && (l.coordinateSystem || {}).model], this._tooltipModel, p ? {
        position: p
      } : null), g = d.get("trigger");
      if (!(g != null && g !== "item")) {
        var y = u.getDataParams(f, h), m = new Wu();
        y.marker = m.makeTooltipMarker("item", Bn(y.color), c);
        var _ = rd(u.formatTooltip(f, !1, h)), S = d.get("order"), w = d.get("valueFormatter"), b = _.frag, x = b ? sd(w ? B({
          valueFormatter: w
        }, b) : b, m, c, S, a.get("useUTC"), d.get("textStyle")) : _.text, T = "item_" + u.name + "_" + f;
        this._showOrMove(d, function() {
          this._showTooltipContent(d, x, y, T, e.offsetX, e.offsetY, e.position, e.target, m);
        }), i({
          type: "showTip",
          dataIndexInside: f,
          dataIndex: v.getRawIndex(f),
          seriesIndex: s,
          from: this.uid
        });
      }
    }, t.prototype._showComponentItemTooltip = function(e, n, i) {
      var a = this._renderMode === "html", o = at(n), s = o.tooltipConfig, l = s.option || {}, u = l.encodeHTMLContent;
      if (U(l)) {
        var f = l;
        l = {
          content: f,
          // Fixed formatter
          formatter: f
        }, u = !0;
      }
      u && a && l.content && (l = j(l), l.content = te(l.content));
      var h = [l], v = this._ecModel.getComponent(o.componentMainType, o.componentIndex);
      v && h.push(v), h.push({
        formatter: l.content
      });
      var c = e.positionDefault, p = va(h, this._tooltipModel, c ? {
        position: c
      } : null), d = p.get("content"), g = Math.random() + "", y = new Wu();
      this._showOrMove(p, function() {
        var m = j(p.get("formatterParams") || {});
        this._showTooltipContent(p, d, m, g, e.offsetX, e.offsetY, e.position, n, y);
      }), i({
        type: "showTip",
        from: this.uid
      });
    }, t.prototype._showTooltipContent = function(e, n, i, a, o, s, l, u, f) {
      if (this._ticket = "", !(!e.get("showContent") || !e.get("show"))) {
        var h = this._tooltipContent;
        h.setEnterable(e.get("enterable"));
        var v = e.get("formatter");
        l = l || e.get("position");
        var c = n, p = this._getNearestPoint([o, s], i, e.get("trigger"), e.get("borderColor")), d = p.color;
        if (v)
          if (U(v)) {
            var g = e.ecModel.get("useUTC"), y = H(i) ? i[0] : i, m = y && y.axisType && y.axisType.indexOf("time") >= 0;
            c = v, m && (c = go(y.axisValue, c, g)), c = Sc(c, i, !0);
          } else if ($(v)) {
            var _ = J(function(S, w) {
              S === this._ticket && (h.setContent(w, f, e, d, l), this._updatePosition(e, l, o, s, h, i, u));
            }, this);
            this._ticket = a, c = v(i, a, _);
          } else
            c = v;
        h.setContent(c, f, e, d, l), h.show(e, d), this._updatePosition(e, l, o, s, h, i, u);
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
    }, t.prototype._updatePosition = function(e, n, i, a, o, s, l) {
      var u = this._api.getWidth(), f = this._api.getHeight();
      n = n || e.get("position");
      var h = o.getSize(), v = e.get("align"), c = e.get("verticalAlign"), p = l && l.getBoundingRect().clone();
      if (l && p.applyTransform(l.transform), $(n) && (n = n([i, a], s, o.el, p, {
        viewSize: [u, f],
        contentSize: h.slice()
      })), H(n))
        i = ct(n[0], u), a = ct(n[1], f);
      else if (W(n)) {
        var d = n;
        d.width = h[0], d.height = h[1];
        var g = ar(d, {
          width: u,
          height: f
        });
        i = g.x, a = g.y, v = null, c = null;
      } else if (U(n) && l) {
        var y = OP(n, p, h, e.get("borderWidth"));
        i = y[0], a = y[1];
      } else {
        var y = LP(i, a, o, u, f, v ? null : 20, c ? null : 20);
        i = y[0], a = y[1];
      }
      if (v && (i -= qg(v) ? h[0] / 2 : v === "right" ? h[0] : 0), c && (a -= qg(c) ? h[1] / 2 : c === "bottom" ? h[1] : 0), D1(e)) {
        var y = PP(i, a, o, u, f);
        i = y[0], a = y[1];
      }
      o.moveTo(i, a);
    }, t.prototype._updateContentNotChangedOnAxis = function(e, n) {
      var i = this._lastDataByCoordSys, a = this._cbParamsList, o = !!i && i.length === e.length;
      return o && D(i, function(s, l) {
        var u = s.dataByAxis || [], f = e[l] || {}, h = f.dataByAxis || [];
        o = o && u.length === h.length, o && D(u, function(v, c) {
          var p = h[c] || {}, d = v.seriesDataIndices || [], g = p.seriesDataIndices || [];
          o = o && v.value === p.value && v.axisType === p.axisType && v.axisId === p.axisId && d.length === g.length, o && D(d, function(y, m) {
            var _ = g[m];
            o = o && y.seriesIndex === _.seriesIndex && y.dataIndex === _.dataIndex;
          }), a && D(v.seriesDataIndices, function(y) {
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
      Z.node || !n.getDom() || (sh(this, "_updatePosition"), this._tooltipContent.dispose(), Ah("itemTooltip", n));
    }, t.type = "tooltip", t;
  })(ne)
);
function va(r, t, e) {
  var n = t.ecModel, i;
  e ? (i = new mt(e, n, n), i = new mt(t.option, i, n)) : i = t;
  for (var a = r.length - 1; a >= 0; a--) {
    var o = r[a];
    o && (o instanceof mt && (o = o.get("tooltip", !0)), U(o) && (o = {
      formatter: o
    }), o && (i = new mt(o, i, n)));
  }
  return i;
}
function $g(r, t) {
  return r.dispatchAction || J(t.dispatchAction, t);
}
function LP(r, t, e, n, i, a, o) {
  var s = e.getSize(), l = s[0], u = s[1];
  return a != null && (r + l + a + 2 > n ? r -= l + a : r += a), o != null && (t + u + o > i ? t -= u + o : t += o), [r, t];
}
function PP(r, t, e, n, i) {
  var a = e.getSize(), o = a[0], s = a[1];
  return r = Math.min(r + o, n) - o, t = Math.min(t + s, i) - s, r = Math.max(r, 0), t = Math.max(t, 0), [r, t];
}
function OP(r, t, e, n) {
  var i = e[0], a = e[1], o = Math.ceil(Math.SQRT2 * n) + 8, s = 0, l = 0, u = t.width, f = t.height;
  switch (r) {
    case "inside":
      s = t.x + u / 2 - i / 2, l = t.y + f / 2 - a / 2;
      break;
    case "top":
      s = t.x + u / 2 - i / 2, l = t.y - a - o;
      break;
    case "bottom":
      s = t.x + u / 2 - i / 2, l = t.y + f + o;
      break;
    case "left":
      s = t.x - i - o, l = t.y + f / 2 - a / 2;
      break;
    case "right":
      s = t.x + u + o, l = t.y + f / 2 - a / 2;
  }
  return [s, l];
}
function qg(r) {
  return r === "center" || r === "middle";
}
function RP(r, t, e) {
  var n = rc(r).queryOptionMap, i = n.keys()[0];
  if (!(!i || i === "series")) {
    var a = fo(t, i, n.get(i), {
      useDefault: !1,
      enableAll: !1,
      enableNone: !1
    }), o = a.models[0];
    if (o) {
      var s = e.getViewOfComponentModel(o), l;
      if (s.group.traverse(function(u) {
        var f = at(u).tooltipConfig;
        if (f && f.name === r.name)
          return l = u, !0;
      }), l)
        return {
          componentMainType: i,
          componentIndex: o.componentIndex,
          el: l
        };
    }
  }
}
function Ni(r) {
  Ft(C1), r.registerComponentModel(yP), r.registerComponentView(IP), r.registerAction({
    type: "showTip",
    event: "showTip",
    update: "tooltip:manuallyShowTip"
  }, Xt), r.registerAction({
    type: "hideTip",
    event: "hideTip",
    update: "tooltip:manuallyHideTip"
  }, Xt);
}
var Zg = D;
function jg(r) {
  if (r) {
    for (var t in r)
      if (r.hasOwnProperty(t))
        return !0;
  }
}
function Kg(r, t, e) {
  var n = {};
  return Zg(t, function(a) {
    var o = n[a] = i();
    Zg(r[a], function(s, l) {
      if ($t.isValidType(l)) {
        var u = {
          type: l,
          visual: s
        };
        e && e(u, a), o[l] = new $t(u), l === "opacity" && (u = j(u), u.type = "colorAlpha", o.__hidden.__alphaForOpacity = new $t(u));
      }
    });
  }), n;
  function i() {
    var a = function() {
    };
    a.prototype.__hidden = a.prototype;
    var o = new a();
    return o;
  }
}
function NP(r, t, e) {
  var n;
  D(e, function(i) {
    t.hasOwnProperty(i) && jg(t[i]) && (n = !0);
  }), n && D(e, function(i) {
    t.hasOwnProperty(i) && jg(t[i]) ? r[i] = j(t[i]) : delete r[i];
  });
}
function kP(r, t, e, n) {
  var i = {};
  return D(r, function(a) {
    var o = $t.prepareVisualTypes(t[a]);
    i[a] = o;
  }), {
    progress: function(o, s) {
      var l;
      n != null && (l = s.getDimensionIndex(n));
      function u(w) {
        return H0(s, h, w);
      }
      function f(w, b) {
        aM(s, h, w, b);
      }
      for (var h, v = s.getStore(); (h = o.next()) != null; ) {
        var c = s.getRawDataItem(h);
        if (!(c && c.visualMap === !1))
          for (var p = n != null ? v.get(l, h) : h, d = e(p), g = t[d], y = i[d], m = 0, _ = y.length; m < _; m++) {
            var S = y[m];
            g[S] && g[S].applyVisual(p, u, f);
          }
      }
    }
  };
}
var VP = (
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
  })(ot)
), BP = (
  /** @class */
  (function(r) {
    z(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.prototype.render = function(e, n, i) {
      if (this.group.removeAll(), !!e.get("show")) {
        var a = this.group, o = e.getModel("textStyle"), s = e.getModel("subtextStyle"), l = e.get("textAlign"), u = Q(e.get("textBaseline"), e.get("textVerticalAlign")), f = new St({
          style: de(o, {
            text: e.get("text"),
            fill: o.getTextColor()
          }, {
            disableBox: !0
          }),
          z2: 10
        }), h = f.getBoundingRect(), v = e.get("subtext"), c = new St({
          style: de(s, {
            text: v,
            fill: s.getTextColor(),
            y: h.height + e.get("itemGap"),
            verticalAlign: "top"
          }, {
            disableBox: !0
          }),
          z2: 10
        }), p = e.get("link"), d = e.get("sublink"), g = e.get("triggerEvent", !0);
        f.silent = !p && !g, c.silent = !d && !g, p && f.on("click", function() {
          Bp(p, "_" + e.get("target"));
        }), d && c.on("click", function() {
          Bp(d, "_" + e.get("subtarget"));
        }), at(f).eventData = at(c).eventData = g ? {
          componentType: "title",
          componentIndex: e.componentIndex
        } : null, a.add(f), v && a.add(c);
        var y = a.getBoundingRect(), m = e.getBoxLayoutParams();
        m.width = y.width, m.height = y.height;
        var _ = ar(m, {
          width: i.getWidth(),
          height: i.getHeight()
        }, e.get("padding"));
        l || (l = e.get("left") || e.get("right"), l === "middle" && (l = "center"), l === "right" ? _.x += _.width : l === "center" && (_.x += _.width / 2)), u || (u = e.get("top") || e.get("bottom"), u === "center" && (u = "middle"), u === "bottom" ? _.y += _.height : u === "middle" && (_.y += _.height / 2), u = u || "top"), a.x = _.x, a.y = _.y, a.markRedraw();
        var S = {
          align: l,
          verticalAlign: u
        };
        f.setStyle(S), c.setStyle(S), y = a.getBoundingRect();
        var w = _.margin, b = e.getItemStyle(["color", "opacity"]);
        b.fill = e.get("backgroundColor");
        var x = new _t({
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
  })(ne)
);
function Ul(r) {
  r.registerComponentModel(VP), r.registerComponentView(BP);
}
var zP = function(r, t) {
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
}, Eh = (
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
      n === !0 && (n = e.selector = ["all", "inverse"]), H(n) && D(n, function(a, o) {
        U(a) && (a = {
          type: a
        }), n[o] = st(a, zP(i, a.type));
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
      e.eachRawSeries(function(l) {
        var u = l.name;
        i.push(u);
        var f;
        if (l.legendVisualProvider) {
          var h = l.legendVisualProvider, v = h.getAllNames();
          e.isSeriesFiltered(l) || (i = i.concat(v)), v.length ? n = n.concat(v) : f = !0;
        } else
          f = !0;
        f && ec(l) && n.push(l.name);
      }), this._availableNames = i;
      var a = this.get("data") || n, o = et(), s = Y(a, function(l) {
        return (U(l) || dt(l)) && (l = {
          name: l
        }), o.get(l.name) ? null : (o.set(l.name, !0), new mt(l, this, this.ecModel));
      }, this);
      this._data = At(s, function(l) {
        return !!l;
      });
    }, t.prototype.getData = function() {
      return this._data;
    }, t.prototype.select = function(e) {
      var n = this.option.selected, i = this.get("selectedMode");
      if (i === "single") {
        var a = this._data;
        D(a, function(o) {
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
      D(e, function(i) {
        n[i.get("name", !0)] = !0;
      });
    }, t.prototype.inverseSelect = function() {
      var e = this._data, n = this.option.selected;
      D(e, function(i) {
        var a = i.get("name", !0);
        n.hasOwnProperty(a) || (n[a] = !0), n[a] = !n[a];
      });
    }, t.prototype.isSelected = function(e) {
      var n = this.option.selected;
      return !(n.hasOwnProperty(e) && !n[e]) && vt(this._availableNames, e) >= 0;
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
  })(ot)
), si = wt, Ih = D, as = xt, I1 = (
  /** @class */
  (function(r) {
    z(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e.newlineDisabled = !1, e;
    }
    return t.prototype.init = function() {
      this.group.add(this._contentGroup = new as()), this.group.add(this._selectorGroup = new as()), this._isFirstRender = !0;
    }, t.prototype.getContentGroup = function() {
      return this._contentGroup;
    }, t.prototype.getSelectorGroup = function() {
      return this._selectorGroup;
    }, t.prototype.render = function(e, n, i) {
      var a = this._isFirstRender;
      if (this._isFirstRender = !1, this.resetInner(), !!e.get("show", !0)) {
        var o = e.get("align"), s = e.get("orient");
        (!o || o === "auto") && (o = e.get("left") === "right" && s === "vertical" ? "right" : "left");
        var l = e.get("selector", !0), u = e.get("selectorPosition", !0);
        l && (!u || u === "auto") && (u = s === "horizontal" ? "end" : "start"), this.renderInner(o, e, n, i, l, s, u);
        var f = e.getBoxLayoutParams(), h = {
          width: i.getWidth(),
          height: i.getHeight()
        }, v = e.get("padding"), c = ar(f, h, v), p = this.layoutInner(e, o, c, a, l, u), d = ar(ut({
          width: p.width,
          height: p.height
        }, f), h, v);
        this.group.x = d.x - p.x, this.group.y = d.y - p.y, this.group.markRedraw(), this.group.add(this._backgroundEl = gP(p, e));
      }
    }, t.prototype.resetInner = function() {
      this.getContentGroup().removeAll(), this._backgroundEl && this.group.remove(this._backgroundEl), this.getSelectorGroup().removeAll();
    }, t.prototype.renderInner = function(e, n, i, a, o, s, l) {
      var u = this.getContentGroup(), f = et(), h = n.get("selectedMode"), v = [];
      i.eachRawSeries(function(c) {
        !c.get("legendHoverLink") && v.push(c.id);
      }), Ih(n.getData(), function(c, p) {
        var d = c.get("name");
        if (!this.newlineDisabled && (d === "" || d === `
`)) {
          var g = new as();
          g.newline = !0, u.add(g);
          return;
        }
        var y = i.getSeriesByName(d)[0];
        if (!f.get(d)) {
          if (y) {
            var m = y.getData(), _ = m.getVisual("legendLineStyle") || {}, S = m.getVisual("legendIcon"), w = m.getVisual("style"), b = this._createItem(y, d, p, c, n, e, _, w, S, h, a);
            b.on("click", si(Qg, d, null, a, v)).on("mouseover", si(Lh, y.name, null, a, v)).on("mouseout", si(Ph, y.name, null, a, v)), i.ssr && b.eachChild(function(x) {
              var T = at(x);
              T.seriesIndex = y.seriesIndex, T.dataIndex = p, T.ssrType = "legend";
            }), f.set(d, !0);
          } else
            i.eachRawSeries(function(x) {
              if (!f.get(d) && x.legendVisualProvider) {
                var T = x.legendVisualProvider;
                if (!T.containName(d))
                  return;
                var A = T.indexOfName(d), M = T.getItemVisual(A, "style"), C = T.getItemVisual(A, "legendIcon"), E = ue(M.fill);
                E && E[3] === 0 && (E[3] = 0.2, M = B(B({}, M), {
                  fill: Fe(E, "rgba")
                }));
                var I = this._createItem(x, d, p, c, n, e, {}, M, C, h, a);
                I.on("click", si(Qg, null, d, a, v)).on("mouseover", si(Lh, null, d, a, v)).on("mouseout", si(Ph, null, d, a, v)), i.ssr && I.eachChild(function(P) {
                  var O = at(P);
                  O.seriesIndex = x.seriesIndex, O.dataIndex = p, O.ssrType = "legend";
                }), f.set(d, !0);
              }
            }, this);
          process.env.NODE_ENV !== "production" && (f.get(d) || console.warn(d + " series not exists. Legend data should be same with series name or data name."));
        }
      }, this), o && this._createSelector(o, n, a, s, l);
    }, t.prototype._createSelector = function(e, n, i, a, o) {
      var s = this.getSelectorGroup();
      Ih(e, function(u) {
        var f = u.type, h = new St({
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
        Gn(h, {
          normal: v,
          emphasis: c
        }, {
          defaultText: u.title
        }), Hs(h);
      });
    }, t.prototype._createItem = function(e, n, i, a, o, s, l, u, f, h, v) {
      var c = e.visualDrawType, p = o.get("itemWidth"), d = o.get("itemHeight"), g = o.isSelected(n), y = a.get("symbolRotate"), m = a.get("symbolKeepAspect"), _ = a.get("icon");
      f = _ || f || "roundRect";
      var S = FP(f, a, l, u, c, g, v), w = new as(), b = a.getModel("textStyle");
      if ($(e.getLegendIcon) && (!_ || _ === "inherit"))
        w.add(e.getLegendIcon({
          itemWidth: p,
          itemHeight: d,
          icon: f,
          iconRotate: y,
          itemStyle: S.itemStyle,
          lineStyle: S.lineStyle,
          symbolKeepAspect: m
        }));
      else {
        var x = _ === "inherit" && e.getData().getVisual("symbol") ? y === "inherit" ? e.getData().getVisual("symbolRotate") : y : 0;
        w.add(HP({
          itemWidth: p,
          itemHeight: d,
          icon: f,
          iconRotate: x,
          itemStyle: S.itemStyle,
          symbolKeepAspect: m
        }));
      }
      var T = s === "left" ? p + 5 : -5, A = s, M = o.get("formatter"), C = n;
      U(M) && M ? C = M.replace("{name}", n ?? "") : $(M) && (C = M(n));
      var E = g ? b.getTextColor() : a.get("inactiveColor");
      w.add(new St({
        style: de(b, {
          text: C,
          x: T,
          y: d / 2,
          fill: E,
          align: A,
          verticalAlign: "middle"
        }, {
          inheritColor: E
        })
      }));
      var I = new _t({
        shape: w.getBoundingRect(),
        style: {
          // Cannot use 'invisible' because SVG SSR will miss the node
          fill: "transparent"
        }
      }), P = a.getModel("tooltip");
      return P.get("show") && Tl({
        el: I,
        componentModel: o,
        itemName: n,
        itemTooltipOption: P.option
      }), w.add(I), w.eachChild(function(O) {
        O.silent = !0;
      }), I.silent = !h, this.getContentGroup().add(w), Hs(w), w.__legendDataIndex = i, w;
    }, t.prototype.layoutInner = function(e, n, i, a, o, s) {
      var l = this.getContentGroup(), u = this.getSelectorGroup();
      Si(e.get("orient"), l, e.get("itemGap"), i.width, i.height);
      var f = l.getBoundingRect(), h = [-f.x, -f.y];
      if (u.markRedraw(), l.markRedraw(), o) {
        Si(
          // Buttons in selectorGroup always layout horizontally
          "horizontal",
          u,
          e.get("selectorItemGap", !0)
        );
        var v = u.getBoundingRect(), c = [-v.x, -v.y], p = e.get("selectorButtonGap", !0), d = e.getOrient().index, g = d === 0 ? "width" : "height", y = d === 0 ? "height" : "width", m = d === 0 ? "y" : "x";
        s === "end" ? c[d] += f[g] + p : h[d] += v[g] + p, c[1 - d] += f[y] / 2 - v[y] / 2, u.x = c[0], u.y = c[1], l.x = h[0], l.y = h[1];
        var _ = {
          x: 0,
          y: 0
        };
        return _[g] = f[g] + p + v[g], _[y] = Math.max(f[y], v[y]), _[m] = Math.min(0, v[m] + c[1 - d]), _;
      } else
        return l.x = h[0], l.y = h[1], this.group.getBoundingRect();
    }, t.prototype.remove = function() {
      this.getContentGroup().removeAll(), this._isFirstRender = !0;
    }, t.type = "legend.plain", t;
  })(ne)
);
function FP(r, t, e, n, i, a, o) {
  function s(g, y) {
    g.lineWidth === "auto" && (g.lineWidth = y.lineWidth > 0 ? 2 : 0), Ih(g, function(m, _) {
      g[_] === "inherit" && (g[_] = y[_]);
    });
  }
  var l = t.getModel("itemStyle"), u = l.getItemStyle(), f = r.lastIndexOf("empty", 0) === 0 ? "fill" : "stroke", h = l.getShallow("decal");
  u.decal = !h || h === "inherit" ? n.decal : ch(h, o), u.fill === "inherit" && (u.fill = n[i]), u.stroke === "inherit" && (u.stroke = n[f]), u.opacity === "inherit" && (u.opacity = (i === "fill" ? n : e).opacity), s(u, n);
  var v = t.getModel("lineStyle"), c = v.getLineStyle();
  if (s(c, e), u.fill === "auto" && (u.fill = n.fill), u.stroke === "auto" && (u.stroke = n.fill), c.stroke === "auto" && (c.stroke = n.fill), !a) {
    var p = t.get("inactiveBorderWidth"), d = u[f];
    u.lineWidth = p === "auto" ? n.lineWidth > 0 && d ? 2 : 0 : u.lineWidth, u.fill = t.get("inactiveColor"), u.stroke = t.get("inactiveBorderColor"), c.stroke = v.get("inactiveColor"), c.lineWidth = v.get("inactiveWidth");
  }
  return {
    itemStyle: u,
    lineStyle: c
  };
}
function HP(r) {
  var t = r.icon || "roundRect", e = Ue(t, 0, 0, r.itemWidth, r.itemHeight, r.itemStyle.fill, r.symbolKeepAspect);
  return e.setStyle(r.itemStyle), e.rotation = (r.iconRotate || 0) * Math.PI / 180, e.setOrigin([r.itemWidth / 2, r.itemHeight / 2]), t.indexOf("empty") > -1 && (e.style.stroke = e.style.fill, e.style.fill = "#fff", e.style.lineWidth = 2), e;
}
function Qg(r, t, e, n) {
  Ph(r, t, e, n), e.dispatchAction({
    type: "legendToggleSelect",
    name: r ?? t
  }), Lh(r, t, e, n);
}
function L1(r) {
  for (var t = r.getZr().storage.getDisplayList(), e, n = 0, i = t.length; n < i && !(e = t[n].states.emphasis); )
    n++;
  return e && e.hoverLayer;
}
function Lh(r, t, e, n) {
  L1(e) || e.dispatchAction({
    type: "highlight",
    seriesName: r,
    name: t,
    excludeSeriesId: n
  });
}
function Ph(r, t, e, n) {
  L1(e) || e.dispatchAction({
    type: "downplay",
    seriesName: r,
    name: t,
    excludeSeriesId: n
  });
}
function GP(r) {
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
function pa(r, t, e) {
  var n = r === "allSelect" || r === "inverseSelect", i = {}, a = [];
  e.eachComponent({
    mainType: "legend",
    query: t
  }, function(s) {
    n ? s[r]() : s[r](t.name), Jg(s, i), a.push(s.componentIndex);
  });
  var o = {};
  return e.eachComponent("legend", function(s) {
    D(i, function(l, u) {
      s[l ? "select" : "unSelect"](u);
    }), Jg(s, o);
  }), n ? {
    selected: o,
    // return legendIndex array to tell the developers which legends are allSelect / inverseSelect
    legendIndex: a
  } : {
    name: t.name,
    selected: o
  };
}
function Jg(r, t) {
  var e = t || {};
  return D(r.getData(), function(n) {
    var i = n.get("name");
    if (!(i === `
` || i === "")) {
      var a = r.isSelected(i);
      jr(e, i) ? e[i] = e[i] && a : e[i] = a;
    }
  }), e;
}
function WP(r) {
  r.registerAction("legendToggleSelect", "legendselectchanged", wt(pa, "toggleSelected")), r.registerAction("legendAllSelect", "legendselectall", wt(pa, "allSelect")), r.registerAction("legendInverseSelect", "legendinverseselect", wt(pa, "inverseSelect")), r.registerAction("legendSelect", "legendselected", wt(pa, "select")), r.registerAction("legendUnSelect", "legendunselected", wt(pa, "unSelect"));
}
function P1(r) {
  r.registerComponentModel(Eh), r.registerComponentView(I1), r.registerProcessor(r.PRIORITY.PROCESSOR.SERIES_FILTER, GP), r.registerSubTypeDefaulter("legend", function() {
    return "plain";
  }), WP(r);
}
var UP = (
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
      var a = Ol(e);
      r.prototype.init.call(this, e, n, i), ty(this, e, a);
    }, t.prototype.mergeOption = function(e, n) {
      r.prototype.mergeOption.call(this, e, n), ty(this, this.option, e);
    }, t.type = "legend.scroll", t.defaultOption = Al(Eh.defaultOption, {
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
  })(Eh)
);
function ty(r, t, e) {
  var n = r.getOrient(), i = [1, 1];
  i[n.index] = 0, Ti(t, e, {
    type: "box",
    ignoreSize: !!i
  });
}
var ey = xt, _f = ["width", "height"], Sf = ["x", "y"], YP = (
  /** @class */
  (function(r) {
    z(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e.newlineDisabled = !0, e._currentIndex = 0, e;
    }
    return t.prototype.init = function() {
      r.prototype.init.call(this), this.group.add(this._containerGroup = new ey()), this._containerGroup.add(this.getContentGroup()), this.group.add(this._controllerGroup = new ey());
    }, t.prototype.resetInner = function() {
      r.prototype.resetInner.call(this), this._controllerGroup.removeAll(), this._containerGroup.removeClipPath(), this._containerGroup.__rectSize = null;
    }, t.prototype.renderInner = function(e, n, i, a, o, s, l) {
      var u = this;
      r.prototype.renderInner.call(this, e, n, i, a, o, s, l);
      var f = this._controllerGroup, h = n.get("pageIconSize", !0), v = H(h) ? h : [h, h];
      p("pagePrev", 0);
      var c = n.getModel("pageTextStyle");
      f.add(new St({
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
      })), p("pageNext", 1);
      function p(d, g) {
        var y = d + "DataIndex", m = xl(n.get("pageIcons", !0)[n.getOrient().name][g], {
          // Buttons will be created in each render, so we do not need
          // to worry about avoiding using legendModel kept in scope.
          onclick: J(u._pageGo, u, y, n, a)
        }, {
          x: -v[0] / 2,
          y: -v[1] / 2,
          width: v[0],
          height: v[1]
        });
        m.name = d, f.add(m);
      }
    }, t.prototype.layoutInner = function(e, n, i, a, o, s) {
      var l = this.getSelectorGroup(), u = e.getOrient().index, f = _f[u], h = Sf[u], v = _f[1 - u], c = Sf[1 - u];
      o && Si(
        // Buttons in selectorGroup always layout horizontally
        "horizontal",
        l,
        e.get("selectorItemGap", !0)
      );
      var p = e.get("selectorButtonGap", !0), d = l.getBoundingRect(), g = [-d.x, -d.y], y = j(i);
      o && (y[f] = i[f] - d[f] - p);
      var m = this._layoutContentAndController(e, a, y, u, f, v, c, h);
      if (o) {
        if (s === "end")
          g[u] += m[f] + p;
        else {
          var _ = d[f] + p;
          g[u] -= _, m[h] -= _;
        }
        m[f] += d[f] + p, g[1 - u] += m[c] + m[v] / 2 - d[v] / 2, m[v] = Math.max(m[v], d[v]), m[c] = Math.min(m[c], d[c] + g[1 - u]), l.x = g[0], l.y = g[1], l.markRedraw();
      }
      return m;
    }, t.prototype._layoutContentAndController = function(e, n, i, a, o, s, l, u) {
      var f = this.getContentGroup(), h = this._containerGroup, v = this._controllerGroup;
      Si(e.get("orient"), f, e.get("itemGap"), a ? i.width : null, a ? null : i.height), Si(
        // Buttons in controller are layout always horizontally.
        "horizontal",
        v,
        e.get("pageButtonItemGap", !0)
      );
      var c = f.getBoundingRect(), p = v.getBoundingRect(), d = this._showController = c[o] > i[o], g = [-c.x, -c.y];
      n || (g[a] = f[u]);
      var y = [0, 0], m = [-p.x, -p.y], _ = Q(e.get("pageButtonGap", !0), e.get("itemGap", !0));
      if (d) {
        var S = e.get("pageButtonPosition", !0);
        S === "end" ? m[a] += i[o] - p[o] : y[a] += p[o] + _;
      }
      m[1 - a] += c[s] / 2 - p[s] / 2, f.setPosition(g), h.setPosition(y), v.setPosition(m);
      var w = {
        x: 0,
        y: 0
      };
      if (w[o] = d ? i[o] : c[o], w[s] = Math.max(c[s], p[s]), w[l] = Math.min(0, p[l] + m[1 - a]), h.__rectSize = i[o], d) {
        var b = {
          x: 0,
          y: 0
        };
        b[o] = Math.max(i[o] - p[o] - _, 0), b[s] = w[s], h.setClipPath(new _t({
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
      return x.pageIndex != null && Ot(
        f,
        {
          x: x.contentPosition[0],
          y: x.contentPosition[1]
        },
        // When switch from "show controller" to "not show controller", view should be
        // updated immediately without animation, otherwise causes weird effect.
        d ? e : null
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
      D(["pagePrev", "pageNext"], function(f) {
        var h = f + "DataIndex", v = n[h] != null, c = i.childOfName(f);
        c && (c.setStyle("fill", v ? e.get("pageIconColor", !0) : e.get("pageIconInactiveColor", !0)), c.cursor = v ? "pointer" : "default");
      });
      var a = i.childOfName("pageText"), o = e.get("pageFormatter"), s = n.pageIndex, l = s != null ? s + 1 : 0, u = n.pageCount;
      a && o && a.setStyle("text", U(o) ? o.replace("{current}", l == null ? "" : l + "").replace("{total}", u == null ? "" : u + "") : o({
        current: l,
        total: u
      }));
    }, t.prototype._getPageInfo = function(e) {
      var n = e.get("scrollDataIndex", !0), i = this.getContentGroup(), a = this._containerGroup.__rectSize, o = e.getOrient().index, s = _f[o], l = Sf[o], u = this._findTargetItemIndex(n), f = i.children(), h = f[u], v = f.length, c = v ? 1 : 0, p = {
        contentPosition: [i.x, i.y],
        pageCount: c,
        pageIndex: c - 1,
        pagePrevDataIndex: null,
        pageNextDataIndex: null
      };
      if (!h)
        return p;
      var d = S(h);
      p.contentPosition[o] = -d.s;
      for (var g = u + 1, y = d, m = d, _ = null; g <= v; ++g)
        _ = S(f[g]), // Half of the last item is out of the window.
        (!_ && m.e > y.s + a || _ && !w(_, y.s)) && (m.i > y.i ? y = m : y = _, y && (p.pageNextDataIndex == null && (p.pageNextDataIndex = y.i), ++p.pageCount)), m = _;
      for (var g = u - 1, y = d, m = d, _ = null; g >= -1; --g)
        _ = S(f[g]), // If the the end item does not intersect with the window started
        // from the current item, a page can be settled.
        (!_ || !w(m, _.s)) && y.i < m.i && (m = y, p.pagePrevDataIndex == null && (p.pagePrevDataIndex = y.i), ++p.pageCount, ++p.pageIndex), y = _;
      return p;
      function S(b) {
        if (b) {
          var x = b.getBoundingRect(), T = x[l] + b[l];
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
        var l = o.__legendDataIndex;
        a == null && l != null && (a = s), l === e && (n = s);
      }), n ?? a;
    }, t.type = "legend.scroll", t;
  })(I1)
);
function XP(r) {
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
function $P(r) {
  Ft(P1), r.registerComponentModel(UP), r.registerComponentView(YP), XP(r);
}
function Yl(r) {
  Ft(P1), Ft($P);
}
var O1 = {
  /**
   * @public
   */
  get: function(r, t, e) {
    var n = j((qP[r] || {})[t]);
    return e && H(n) ? n[n.length - 1] : n;
  }
}, qP = {
  color: {
    active: ["#006edd", "#e0ffff"],
    inactive: ["rgba(0,0,0,0)"]
  },
  colorHue: {
    active: [0, 360],
    inactive: [0, 0]
  },
  colorSaturation: {
    active: [0.3, 1],
    inactive: [0, 0]
  },
  colorLightness: {
    active: [0.9, 0.5],
    inactive: [0, 0]
  },
  colorAlpha: {
    active: [0.3, 1],
    inactive: [0, 0]
  },
  opacity: {
    active: [0.3, 1],
    inactive: [0, 0]
  },
  symbol: {
    active: ["circle", "roundRect", "diamond"],
    inactive: ["none"]
  },
  symbolSize: {
    active: [10, 50],
    inactive: [0, 0]
  }
}, ry = $t.mapVisual, ZP = $t.eachVisual, jP = H, ny = D, KP = Kh, QP = ge, al = (
  /** @class */
  (function(r) {
    z(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e.stateList = ["inRange", "outOfRange"], e.replacableOptionKeys = ["inRange", "outOfRange", "target", "controller", "color"], e.layoutMode = {
        type: "box",
        ignoreSize: !0
      }, e.dataBound = [-1 / 0, 1 / 0], e.targetVisuals = {}, e.controllerVisuals = {}, e;
    }
    return t.prototype.init = function(e, n, i) {
      this.mergeDefaultAndTheme(e, i);
    }, t.prototype.optionUpdated = function(e, n) {
      var i = this.option;
      !n && NP(i, e, this.replacableOptionKeys), this.textStyleModel = this.getModel("textStyle"), this.resetItemSize(), this.completeVisualOption();
    }, t.prototype.resetVisual = function(e) {
      var n = this.stateList;
      e = J(e, this), this.controllerVisuals = Kg(this.option.controller, n, e), this.targetVisuals = Kg(this.option.target, n, e);
    }, t.prototype.getItemSymbol = function() {
      return null;
    }, t.prototype.getTargetSeriesIndices = function() {
      var e = this.option.seriesIndex, n = [];
      return e == null || e === "all" ? this.ecModel.eachSeries(function(i, a) {
        n.push(a);
      }) : n = Bt(e), n;
    }, t.prototype.eachTargetSeries = function(e, n) {
      D(this.getTargetSeriesIndices(), function(i) {
        var a = this.ecModel.getSeriesByIndex(i);
        a && e.call(n, a);
      }, this);
    }, t.prototype.isTargetSeries = function(e) {
      var n = !1;
      return this.eachTargetSeries(function(i) {
        i === e && (n = !0);
      }), n;
    }, t.prototype.formatValueText = function(e, n, i) {
      var a = this.option, o = a.precision, s = this.dataBound, l = a.formatter, u;
      i = i || ["<", ">"], H(e) && (e = e.slice(), u = !0);
      var f = n ? e : u ? [h(e[0]), h(e[1])] : h(e);
      if (U(l))
        return l.replace("{value}", u ? f[0] : f).replace("{value2}", u ? f[1] : f);
      if ($(l))
        return u ? l(e[0], e[1]) : l(e);
      if (u)
        return e[0] === s[0] ? i[0] + " " + f[1] : e[1] === s[1] ? i[1] + " " + f[0] : f[0] + " - " + f[1];
      return f;
      function h(v) {
        return v === s[0] ? "min" : v === s[1] ? "max" : (+v).toFixed(Math.min(o, 20));
      }
    }, t.prototype.resetExtent = function() {
      var e = this.option, n = KP([e.min, e.max]);
      this._dataExtent = n;
    }, t.prototype.getDataDimensionIndex = function(e) {
      var n = this.option.dimension;
      if (n != null)
        return e.getDimensionIndex(n);
      for (var i = e.dimensions, a = i.length - 1; a >= 0; a--) {
        var o = i[a], s = e.getDimensionInfo(o);
        if (!s.isCalculationCoord)
          return s.storeDimIndex;
      }
    }, t.prototype.getExtent = function() {
      return this._dataExtent.slice();
    }, t.prototype.completeVisualOption = function() {
      var e = this.ecModel, n = this.option, i = {
        inRange: n.inRange,
        outOfRange: n.outOfRange
      }, a = n.target || (n.target = {}), o = n.controller || (n.controller = {});
      st(a, i), st(o, i);
      var s = this.isCategory();
      l.call(this, a), l.call(this, o), u.call(this, a, "inRange", "outOfRange"), f.call(this, o);
      function l(h) {
        jP(n.color) && !h.inRange && (h.inRange = {
          color: n.color.slice().reverse()
        }), h.inRange = h.inRange || {
          color: e.get("gradientColor")
        };
      }
      function u(h, v, c) {
        var p = h[v], d = h[c];
        p && !d && (d = h[c] = {}, ny(p, function(g, y) {
          if ($t.isValidType(y)) {
            var m = O1.get(y, "inactive", s);
            m != null && (d[y] = m, y === "color" && !d.hasOwnProperty("opacity") && !d.hasOwnProperty("colorAlpha") && (d.opacity = [0, 0]));
          }
        }));
      }
      function f(h) {
        var v = (h.inRange || {}).symbol || (h.outOfRange || {}).symbol, c = (h.inRange || {}).symbolSize || (h.outOfRange || {}).symbolSize, p = this.get("inactiveColor"), d = this.getItemSymbol(), g = d || "roundRect";
        ny(this.stateList, function(y) {
          var m = this.itemSize, _ = h[y];
          _ || (_ = h[y] = {
            color: s ? p : [p]
          }), _.symbol == null && (_.symbol = v && j(v) || (s ? g : [g])), _.symbolSize == null && (_.symbolSize = c && j(c) || (s ? m[0] : [m[0], m[0]])), _.symbol = ry(_.symbol, function(b) {
            return b === "none" ? g : b;
          });
          var S = _.symbolSize;
          if (S != null) {
            var w = -1 / 0;
            ZP(S, function(b) {
              b > w && (w = b);
            }), _.symbolSize = ry(S, function(b) {
              return QP(b, [0, w], [0, m[0]], !0);
            });
          }
        }, this);
      }
    }, t.prototype.resetItemSize = function() {
      this.itemSize = [parseFloat(this.get("itemWidth")), parseFloat(this.get("itemHeight"))];
    }, t.prototype.isCategory = function() {
      return !!this.option.categories;
    }, t.prototype.setSelected = function(e) {
    }, t.prototype.getSelected = function() {
      return null;
    }, t.prototype.getValueState = function(e) {
      return null;
    }, t.prototype.getVisualMeta = function(e) {
      return null;
    }, t.type = "visualMap", t.dependencies = ["series"], t.defaultOption = {
      show: !0,
      // zlevel: 0,
      z: 4,
      seriesIndex: "all",
      min: 0,
      max: 200,
      left: 0,
      right: null,
      top: null,
      bottom: 0,
      itemWidth: null,
      itemHeight: null,
      inverse: !1,
      orient: "vertical",
      backgroundColor: "rgba(0,0,0,0)",
      borderColor: "#ccc",
      contentColor: "#5793f3",
      inactiveColor: "#aaa",
      borderWidth: 0,
      padding: 5,
      // 接受数组分别设定上右下左边距，同css
      textGap: 10,
      precision: 0,
      textStyle: {
        color: "#333"
        // 值域文字颜色
      }
    }, t;
  })(ot)
), iy = [20, 140], JP = (
  /** @class */
  (function(r) {
    z(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.prototype.optionUpdated = function(e, n) {
      r.prototype.optionUpdated.apply(this, arguments), this.resetExtent(), this.resetVisual(function(i) {
        i.mappingMethod = "linear", i.dataExtent = this.getExtent();
      }), this._resetRange();
    }, t.prototype.resetItemSize = function() {
      r.prototype.resetItemSize.apply(this, arguments);
      var e = this.itemSize;
      (e[0] == null || isNaN(e[0])) && (e[0] = iy[0]), (e[1] == null || isNaN(e[1])) && (e[1] = iy[1]);
    }, t.prototype._resetRange = function() {
      var e = this.getExtent(), n = this.option.range;
      !n || n.auto ? (e.auto = 1, this.option.range = e) : H(n) && (n[0] > n[1] && n.reverse(), n[0] = Math.max(n[0], e[0]), n[1] = Math.min(n[1], e[1]));
    }, t.prototype.completeVisualOption = function() {
      r.prototype.completeVisualOption.apply(this, arguments), D(this.stateList, function(e) {
        var n = this.option.controller[e].symbolSize;
        n && n[0] !== n[1] && (n[0] = n[1] / 3);
      }, this);
    }, t.prototype.setSelected = function(e) {
      this.option.range = e.slice(), this._resetRange();
    }, t.prototype.getSelected = function() {
      var e = this.getExtent(), n = Kh((this.get("range") || []).slice());
      return n[0] > e[1] && (n[0] = e[1]), n[1] > e[1] && (n[1] = e[1]), n[0] < e[0] && (n[0] = e[0]), n[1] < e[0] && (n[1] = e[0]), n;
    }, t.prototype.getValueState = function(e) {
      var n = this.option.range, i = this.getExtent();
      return (n[0] <= i[0] || n[0] <= e) && (n[1] >= i[1] || e <= n[1]) ? "inRange" : "outOfRange";
    }, t.prototype.findTargetDataIndices = function(e) {
      var n = [];
      return this.eachTargetSeries(function(i) {
        var a = [], o = i.getData();
        o.each(this.getDataDimensionIndex(o), function(s, l) {
          e[0] <= s && s <= e[1] && a.push(l);
        }, this), n.push({
          seriesId: i.id,
          dataIndex: a
        });
      }, this), n;
    }, t.prototype.getVisualMeta = function(e) {
      var n = ay(this, "outOfRange", this.getExtent()), i = ay(this, "inRange", this.option.range.slice()), a = [];
      function o(c, p) {
        a.push({
          value: c,
          color: e(c, p)
        });
      }
      for (var s = 0, l = 0, u = i.length, f = n.length; l < f && (!i.length || n[l] <= i[0]); l++)
        n[l] < i[s] && o(n[l], "outOfRange");
      for (var h = 1; s < u; s++, h = 0)
        h && a.length && o(i[s], "outOfRange"), o(i[s], "inRange");
      for (var h = 1; l < f; l++)
        (!i.length || i[i.length - 1] < n[l]) && (h && (a.length && o(a[a.length - 1].value, "outOfRange"), h = 0), o(n[l], "outOfRange"));
      var v = a.length;
      return {
        stops: a,
        outerColors: [v ? a[0].color : "transparent", v ? a[v - 1].color : "transparent"]
      };
    }, t.type = "visualMap.continuous", t.defaultOption = Al(al.defaultOption, {
      align: "auto",
      calculable: !1,
      hoverLink: !0,
      realtime: !0,
      handleIcon: "path://M-11.39,9.77h0a3.5,3.5,0,0,1-3.5,3.5h-22a3.5,3.5,0,0,1-3.5-3.5h0a3.5,3.5,0,0,1,3.5-3.5h22A3.5,3.5,0,0,1-11.39,9.77Z",
      handleSize: "120%",
      handleStyle: {
        borderColor: "#fff",
        borderWidth: 1
      },
      indicatorIcon: "circle",
      indicatorSize: "50%",
      indicatorStyle: {
        borderColor: "#fff",
        borderWidth: 2,
        shadowBlur: 2,
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowColor: "rgba(0,0,0,0.2)"
      }
      // emphasis: {
      //     handleStyle: {
      //         shadowBlur: 3,
      //         shadowOffsetX: 1,
      //         shadowOffsetY: 1,
      //         shadowColor: 'rgba(0,0,0,0.2)'
      //     }
      // }
    }), t;
  })(al)
);
function ay(r, t, e) {
  if (e[0] === e[1])
    return e.slice();
  for (var n = 200, i = (e[1] - e[0]) / n, a = e[0], o = [], s = 0; s <= n && a < e[1]; s++)
    o.push(a), a += i;
  return o.push(e[1]), o;
}
var R1 = (
  /** @class */
  (function(r) {
    z(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e.autoPositionValues = {
        left: 1,
        right: 1,
        top: 1,
        bottom: 1
      }, e;
    }
    return t.prototype.init = function(e, n) {
      this.ecModel = e, this.api = n;
    }, t.prototype.render = function(e, n, i, a) {
      if (this.visualMapModel = e, e.get("show") === !1) {
        this.group.removeAll();
        return;
      }
      this.doRender(e, n, i, a);
    }, t.prototype.renderBackground = function(e) {
      var n = this.visualMapModel, i = Ei(n.get("padding") || 0), a = e.getBoundingRect();
      e.add(new _t({
        z2: -1,
        silent: !0,
        shape: {
          x: a.x - i[3],
          y: a.y - i[0],
          width: a.width + i[3] + i[1],
          height: a.height + i[0] + i[2]
        },
        style: {
          fill: n.get("backgroundColor"),
          stroke: n.get("borderColor"),
          lineWidth: n.get("borderWidth")
        }
      }));
    }, t.prototype.getControllerVisual = function(e, n, i) {
      i = i || {};
      var a = i.forceState, o = this.visualMapModel, s = {};
      if (n === "color") {
        var l = o.get("contentColor");
        s.color = l;
      }
      function u(c) {
        return s[c];
      }
      function f(c, p) {
        s[c] = p;
      }
      var h = o.controllerVisuals[a || o.getValueState(e)], v = $t.prepareVisualTypes(h);
      return D(v, function(c) {
        var p = h[c];
        i.convertOpacityToAlpha && c === "opacity" && (c = "colorAlpha", p = h.__alphaForOpacity), $t.dependsOn(c, n) && p && p.applyVisual(e, u, f);
      }), s[n];
    }, t.prototype.positionGroup = function(e) {
      var n = this.visualMapModel, i = this.api;
      gC(e, n.getBoxLayoutParams(), {
        width: i.getWidth(),
        height: i.getHeight()
      });
    }, t.prototype.doRender = function(e, n, i, a) {
    }, t.type = "visualMap", t;
  })(ne)
), oy = [["left", "right", "width"], ["top", "bottom", "height"]];
function N1(r, t, e) {
  var n = r.option, i = n.align;
  if (i != null && i !== "auto")
    return i;
  for (var a = {
    width: t.getWidth(),
    height: t.getHeight()
  }, o = n.orient === "horizontal" ? 1 : 0, s = oy[o], l = [0, null, 10], u = {}, f = 0; f < 3; f++)
    u[oy[1 - o][f]] = l[f], u[s[f]] = f === 2 ? e[0] : n[s[f]];
  var h = [["x", "width", 3], ["y", "height", 0]][o], v = ar(u, a, n.padding);
  return s[(v.margin[h[2]] || 0) + v[h[0]] + v[h[1]] * 0.5 < a[h[1]] * 0.5 ? 0 : 1];
}
function ws(r, t) {
  return D(r || [], function(e) {
    e.dataIndex != null && (e.dataIndexInside = e.dataIndex, e.dataIndex = null), e.highlightKey = "visualMap" + (t ? t.componentIndex : "");
  }), r;
}
var Qe = ge, t2 = D, sy = Math.min, bf = Math.max, e2 = 12, r2 = 6, n2 = (
  /** @class */
  (function(r) {
    z(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e._shapes = {}, e._dataInterval = [], e._handleEnds = [], e._hoverLinkDataIndices = [], e;
    }
    return t.prototype.init = function(e, n) {
      r.prototype.init.call(this, e, n), this._hoverLinkFromSeriesMouseOver = J(this._hoverLinkFromSeriesMouseOver, this), this._hideIndicator = J(this._hideIndicator, this);
    }, t.prototype.doRender = function(e, n, i, a) {
      (!a || a.type !== "selectDataRange" || a.from !== this.uid) && this._buildView();
    }, t.prototype._buildView = function() {
      this.group.removeAll();
      var e = this.visualMapModel, n = this.group;
      this._orient = e.get("orient"), this._useHandle = e.get("calculable"), this._resetInterval(), this._renderBar(n);
      var i = e.get("text");
      this._renderEndsText(n, i, 0), this._renderEndsText(n, i, 1), this._updateView(!0), this.renderBackground(n), this._updateView(), this._enableHoverLinkToSeries(), this._enableHoverLinkFromSeries(), this.positionGroup(n);
    }, t.prototype._renderEndsText = function(e, n, i) {
      if (n) {
        var a = n[1 - i];
        a = a != null ? a + "" : "";
        var o = this.visualMapModel, s = o.get("textGap"), l = o.itemSize, u = this._shapes.mainGroup, f = this._applyTransform([l[0] / 2, i === 0 ? -s : l[1] + s], u), h = this._applyTransform(i === 0 ? "bottom" : "top", u), v = this._orient, c = this.visualMapModel.textStyleModel;
        this.group.add(new St({
          style: de(c, {
            x: f[0],
            y: f[1],
            verticalAlign: v === "horizontal" ? "middle" : h,
            align: v === "horizontal" ? h : "center",
            text: a
          })
        }));
      }
    }, t.prototype._renderBar = function(e) {
      var n = this.visualMapModel, i = this._shapes, a = n.itemSize, o = this._orient, s = this._useHandle, l = N1(n, this.api, a), u = i.mainGroup = this._createBarGroup(l), f = new xt();
      u.add(f), f.add(i.outOfRange = ly()), f.add(i.inRange = ly(null, s ? fy(this._orient) : null, J(this._dragHandle, this, "all", !1), J(this._dragHandle, this, "all", !0))), f.setClipPath(new _t({
        shape: {
          x: 0,
          y: 0,
          width: a[0],
          height: a[1],
          r: 3
        }
      }));
      var h = n.textStyleModel.getTextRect("国"), v = bf(h.width, h.height);
      s && (i.handleThumbs = [], i.handleLabels = [], i.handleLabelPoints = [], this._createHandle(n, u, 0, a, v, o), this._createHandle(n, u, 1, a, v, o)), this._createIndicator(n, u, a, v, o), e.add(u);
    }, t.prototype._createHandle = function(e, n, i, a, o, s) {
      var l = J(this._dragHandle, this, i, !1), u = J(this._dragHandle, this, i, !0), f = ir(e.get("handleSize"), a[0]), h = Ue(e.get("handleIcon"), -f / 2, -f / 2, f, f, null, !0), v = fy(this._orient);
      h.attr({
        cursor: v,
        draggable: !0,
        drift: l,
        ondragend: u,
        onmousemove: function(y) {
          Ba(y.event);
        }
      }), h.x = a[0] / 2, h.useStyle(e.getModel("handleStyle").getItemStyle()), h.setStyle({
        strokeNoScale: !0,
        strokeFirst: !0
      }), h.style.lineWidth *= 2, h.ensureState("emphasis").style = e.getModel(["emphasis", "handleStyle"]).getItemStyle(), lc(h, !0), n.add(h);
      var c = this.visualMapModel.textStyleModel, p = new St({
        cursor: v,
        draggable: !0,
        drift: l,
        onmousemove: function(y) {
          Ba(y.event);
        },
        ondragend: u,
        style: de(c, {
          x: 0,
          y: 0,
          text: ""
        })
      });
      p.ensureState("blur").style = {
        opacity: 0.1
      }, p.stateTransition = {
        duration: 200
      }, this.group.add(p);
      var d = [f, 0], g = this._shapes;
      g.handleThumbs[i] = h, g.handleLabelPoints[i] = d, g.handleLabels[i] = p;
    }, t.prototype._createIndicator = function(e, n, i, a, o) {
      var s = ir(e.get("indicatorSize"), i[0]), l = Ue(e.get("indicatorIcon"), -s / 2, -s / 2, s, s, null, !0);
      l.attr({
        cursor: "move",
        invisible: !0,
        silent: !0,
        x: i[0] / 2
      });
      var u = e.getModel("indicatorStyle").getItemStyle();
      if (l instanceof Ye) {
        var f = l.style;
        l.useStyle(B({
          // TODO other properties like x, y ?
          image: f.image,
          x: f.x,
          y: f.y,
          width: f.width,
          height: f.height
        }, u));
      } else
        l.useStyle(u);
      n.add(l);
      var h = this.visualMapModel.textStyleModel, v = new St({
        silent: !0,
        invisible: !0,
        style: de(h, {
          x: 0,
          y: 0,
          text: ""
        })
      });
      this.group.add(v);
      var c = [(o === "horizontal" ? a / 2 : r2) + i[0] / 2, 0], p = this._shapes;
      p.indicator = l, p.indicatorLabel = v, p.indicatorLabelPoint = c, this._firstShowIndicator = !0;
    }, t.prototype._dragHandle = function(e, n, i, a) {
      if (this._useHandle) {
        if (this._dragging = !n, !n) {
          var o = this._applyTransform([i, a], this._shapes.mainGroup, !0);
          this._updateInterval(e, o[1]), this._hideIndicator(), this._updateView();
        }
        n === !this.visualMapModel.get("realtime") && this.api.dispatchAction({
          type: "selectDataRange",
          from: this.uid,
          visualMapId: this.visualMapModel.id,
          selected: this._dataInterval.slice()
        }), n ? !this._hovering && this._clearHoverLinkToSeries() : uy(this.visualMapModel) && this._doHoverLinkToSeries(this._handleEnds[e], !1);
      }
    }, t.prototype._resetInterval = function() {
      var e = this.visualMapModel, n = this._dataInterval = e.getSelected(), i = e.getExtent(), a = [0, e.itemSize[1]];
      this._handleEnds = [Qe(n[0], i, a, !0), Qe(n[1], i, a, !0)];
    }, t.prototype._updateInterval = function(e, n) {
      n = n || 0;
      var i = this.visualMapModel, a = this._handleEnds, o = [0, i.itemSize[1]];
      BL(
        n,
        a,
        o,
        e,
        // cross is forbidden
        0
      );
      var s = i.getExtent();
      this._dataInterval = [Qe(a[0], o, s, !0), Qe(a[1], o, s, !0)];
    }, t.prototype._updateView = function(e) {
      var n = this.visualMapModel, i = n.getExtent(), a = this._shapes, o = [0, n.itemSize[1]], s = e ? o : this._handleEnds, l = this._createBarVisual(this._dataInterval, i, s, "inRange"), u = this._createBarVisual(i, i, o, "outOfRange");
      a.inRange.setStyle({
        fill: l.barColor
        // opacity: visualInRange.opacity
      }).setShape("points", l.barPoints), a.outOfRange.setStyle({
        fill: u.barColor
        // opacity: visualOutOfRange.opacity
      }).setShape("points", u.barPoints), this._updateHandle(s, l);
    }, t.prototype._createBarVisual = function(e, n, i, a) {
      var o = {
        forceState: a,
        convertOpacityToAlpha: !0
      }, s = this._makeColorGradient(e, o), l = [this.getControllerVisual(e[0], "symbolSize", o), this.getControllerVisual(e[1], "symbolSize", o)], u = this._createBarPoints(i, l);
      return {
        barColor: new Sl(0, 0, 0, 1, s),
        barPoints: u,
        handlesColor: [s[0].color, s[s.length - 1].color]
      };
    }, t.prototype._makeColorGradient = function(e, n) {
      var i = 100, a = [], o = (e[1] - e[0]) / i;
      a.push({
        color: this.getControllerVisual(e[0], "color", n),
        offset: 0
      });
      for (var s = 1; s < i; s++) {
        var l = e[0] + o * s;
        if (l > e[1])
          break;
        a.push({
          color: this.getControllerVisual(l, "color", n),
          offset: s / i
        });
      }
      return a.push({
        color: this.getControllerVisual(e[1], "color", n),
        offset: 1
      }), a;
    }, t.prototype._createBarPoints = function(e, n) {
      var i = this.visualMapModel.itemSize;
      return [[i[0] - n[0], e[0]], [i[0], e[0]], [i[0], e[1]], [i[0] - n[1], e[1]]];
    }, t.prototype._createBarGroup = function(e) {
      var n = this._orient, i = this.visualMapModel.get("inverse");
      return new xt(n === "horizontal" && !i ? {
        scaleX: e === "bottom" ? 1 : -1,
        rotation: Math.PI / 2
      } : n === "horizontal" && i ? {
        scaleX: e === "bottom" ? -1 : 1,
        rotation: -Math.PI / 2
      } : n === "vertical" && !i ? {
        scaleX: e === "left" ? 1 : -1,
        scaleY: -1
      } : {
        scaleX: e === "left" ? 1 : -1
      });
    }, t.prototype._updateHandle = function(e, n) {
      if (this._useHandle) {
        var i = this._shapes, a = this.visualMapModel, o = i.handleThumbs, s = i.handleLabels, l = a.itemSize, u = a.getExtent(), f = this._applyTransform("left", i.mainGroup);
        t2([0, 1], function(h) {
          var v = o[h];
          v.setStyle("fill", n.handlesColor[h]), v.y = e[h];
          var c = Qe(e[h], [0, l[1]], u, !0), p = this.getControllerVisual(c, "symbolSize");
          v.scaleX = v.scaleY = p / l[0], v.x = l[0] - p / 2;
          var d = gi(i.handleLabelPoints[h], La(v, this.group));
          if (this._orient === "horizontal") {
            var g = f === "left" || f === "top" ? (l[0] - p) / 2 : (l[0] - p) / -2;
            d[1] += g;
          }
          s[h].setStyle({
            x: d[0],
            y: d[1],
            text: a.formatValueText(this._dataInterval[h]),
            verticalAlign: "middle",
            align: this._orient === "vertical" ? this._applyTransform("left", i.mainGroup) : "center"
          });
        }, this);
      }
    }, t.prototype._showIndicator = function(e, n, i, a) {
      var o = this.visualMapModel, s = o.getExtent(), l = o.itemSize, u = [0, l[1]], f = this._shapes, h = f.indicator;
      if (h) {
        h.attr("invisible", !1);
        var v = {
          convertOpacityToAlpha: !0
        }, c = this.getControllerVisual(e, "color", v), p = this.getControllerVisual(e, "symbolSize"), d = Qe(e, s, u, !0), g = l[0] - p / 2, y = {
          x: h.x,
          y: h.y
        };
        h.y = d, h.x = g;
        var m = gi(f.indicatorLabelPoint, La(h, this.group)), _ = f.indicatorLabel;
        _.attr("invisible", !1);
        var S = this._applyTransform("left", f.mainGroup), w = this._orient, b = w === "horizontal";
        _.setStyle({
          text: (i || "") + o.formatValueText(n),
          verticalAlign: b ? S : "middle",
          align: b ? "center" : S
        });
        var x = {
          x: g,
          y: d,
          style: {
            fill: c
          }
        }, T = {
          style: {
            x: m[0],
            y: m[1]
          }
        };
        if (o.ecModel.isAnimationEnabled() && !this._firstShowIndicator) {
          var A = {
            duration: 100,
            easing: "cubicInOut",
            additive: !0
          };
          h.x = y.x, h.y = y.y, h.animateTo(x, A), _.animateTo(T, A);
        } else
          h.attr(x), _.attr(T);
        this._firstShowIndicator = !1;
        var M = this._shapes.handleLabels;
        if (M)
          for (var C = 0; C < M.length; C++)
            this.api.enterBlur(M[C]);
      }
    }, t.prototype._enableHoverLinkToSeries = function() {
      var e = this;
      this._shapes.mainGroup.on("mousemove", function(n) {
        if (e._hovering = !0, !e._dragging) {
          var i = e.visualMapModel.itemSize, a = e._applyTransform([n.offsetX, n.offsetY], e._shapes.mainGroup, !0, !0);
          a[1] = sy(bf(0, a[1]), i[1]), e._doHoverLinkToSeries(a[1], 0 <= a[0] && a[0] <= i[0]);
        }
      }).on("mouseout", function() {
        e._hovering = !1, !e._dragging && e._clearHoverLinkToSeries();
      });
    }, t.prototype._enableHoverLinkFromSeries = function() {
      var e = this.api.getZr();
      this.visualMapModel.option.hoverLink ? (e.on("mouseover", this._hoverLinkFromSeriesMouseOver, this), e.on("mouseout", this._hideIndicator, this)) : this._clearHoverLinkFromSeries();
    }, t.prototype._doHoverLinkToSeries = function(e, n) {
      var i = this.visualMapModel, a = i.itemSize;
      if (i.option.hoverLink) {
        var o = [0, a[1]], s = i.getExtent();
        e = sy(bf(o[0], e), o[1]);
        var l = i2(i, s, o), u = [e - l, e + l], f = Qe(e, o, s, !0), h = [Qe(u[0], o, s, !0), Qe(u[1], o, s, !0)];
        u[0] < o[0] && (h[0] = -1 / 0), u[1] > o[1] && (h[1] = 1 / 0), n && (h[0] === -1 / 0 ? this._showIndicator(f, h[1], "< ", l) : h[1] === 1 / 0 ? this._showIndicator(f, h[0], "> ", l) : this._showIndicator(f, f, "≈ ", l));
        var v = this._hoverLinkDataIndices, c = [];
        (n || uy(i)) && (c = this._hoverLinkDataIndices = i.findTargetDataIndices(h));
        var p = zw(v, c);
        this._dispatchHighDown("downplay", ws(p[0], i)), this._dispatchHighDown("highlight", ws(p[1], i));
      }
    }, t.prototype._hoverLinkFromSeriesMouseOver = function(e) {
      var n;
      if (vi(e.target, function(l) {
        var u = at(l);
        if (u.dataIndex != null)
          return n = u, !0;
      }, !0), !!n) {
        var i = this.ecModel.getSeriesByIndex(n.seriesIndex), a = this.visualMapModel;
        if (a.isTargetSeries(i)) {
          var o = i.getData(n.dataType), s = o.getStore().get(a.getDataDimensionIndex(o), n.dataIndex);
          isNaN(s) || this._showIndicator(s, s);
        }
      }
    }, t.prototype._hideIndicator = function() {
      var e = this._shapes;
      e.indicator && e.indicator.attr("invisible", !0), e.indicatorLabel && e.indicatorLabel.attr("invisible", !0);
      var n = this._shapes.handleLabels;
      if (n)
        for (var i = 0; i < n.length; i++)
          this.api.leaveBlur(n[i]);
    }, t.prototype._clearHoverLinkToSeries = function() {
      this._hideIndicator();
      var e = this._hoverLinkDataIndices;
      this._dispatchHighDown("downplay", ws(e, this.visualMapModel)), e.length = 0;
    }, t.prototype._clearHoverLinkFromSeries = function() {
      this._hideIndicator();
      var e = this.api.getZr();
      e.off("mouseover", this._hoverLinkFromSeriesMouseOver), e.off("mouseout", this._hideIndicator);
    }, t.prototype._applyTransform = function(e, n, i, a) {
      var o = La(n, a ? null : this.group);
      return H(e) ? gi(e, o, i) : Um(e, o, i);
    }, t.prototype._dispatchHighDown = function(e, n) {
      n && n.length && this.api.dispatchAction({
        type: e,
        batch: n
      });
    }, t.prototype.dispose = function() {
      this._clearHoverLinkFromSeries(), this._clearHoverLinkToSeries();
    }, t.type = "visualMap.continuous", t;
  })(R1)
);
function ly(r, t, e, n) {
  return new Ai({
    shape: {
      points: r
    },
    draggable: !!e,
    cursor: t,
    drift: e,
    onmousemove: function(i) {
      Ba(i.event);
    },
    ondragend: n
  });
}
function i2(r, t, e) {
  var n = e2 / 2, i = r.get("hoverLinkDataSize");
  return i && (n = Qe(i, t, e, !0) / 2), n;
}
function uy(r) {
  var t = r.get("hoverLinkOnHandle");
  return !!(t ?? r.get("realtime"));
}
function fy(r) {
  return r === "vertical" ? "ns-resize" : "ew-resize";
}
var a2 = {
  type: "selectDataRange",
  event: "dataRangeSelected",
  // FIXME use updateView appears wrong
  update: "update"
}, o2 = function(r, t) {
  t.eachComponent({
    mainType: "visualMap",
    query: r
  }, function(e) {
    e.setSelected(r.selected);
  });
}, s2 = [
  {
    createOnAllSeries: !0,
    reset: function(r, t) {
      var e = [];
      return t.eachComponent("visualMap", function(n) {
        var i = r.pipelineContext;
        !n.isTargetSeries(r) || i && i.large || e.push(kP(n.stateList, n.targetVisuals, J(n.getValueState, n), n.getDataDimensionIndex(r.getData())));
      }), e;
    }
  },
  // Only support color.
  {
    createOnAllSeries: !0,
    reset: function(r, t) {
      var e = r.getData(), n = [];
      t.eachComponent("visualMap", function(i) {
        if (i.isTargetSeries(r)) {
          var a = i.getVisualMeta(J(l2, null, r, i)) || {
            stops: [],
            outerColors: []
          }, o = i.getDataDimensionIndex(e);
          o >= 0 && (a.dimension = o, n.push(a));
        }
      }), r.getData().setVisual("visualMeta", n);
    }
  }
];
function l2(r, t, e, n) {
  for (var i = t.targetVisuals[n], a = $t.prepareVisualTypes(i), o = {
    color: G0(r.getData(), "color")
    // default color.
  }, s = 0, l = a.length; s < l; s++) {
    var u = a[s], f = i[u === "opacity" ? "__alphaForOpacity" : u];
    f && f.applyVisual(e, h, v);
  }
  return o.color;
  function h(c) {
    return o[c];
  }
  function v(c, p) {
    o[c] = p;
  }
}
var hy = D;
function u2(r) {
  var t = r && r.visualMap;
  H(t) || (t = t ? [t] : []), hy(t, function(e) {
    if (e) {
      li(e, "splitList") && !li(e, "pieces") && (e.pieces = e.splitList, delete e.splitList);
      var n = e.pieces;
      n && H(n) && hy(n, function(i) {
        W(i) && (li(i, "start") && !li(i, "min") && (i.min = i.start), li(i, "end") && !li(i, "max") && (i.max = i.end));
      });
    }
  });
}
function li(r, t) {
  return r && r.hasOwnProperty && r.hasOwnProperty(t);
}
var cy = !1;
function k1(r) {
  cy || (cy = !0, r.registerSubTypeDefaulter("visualMap", function(t) {
    return !t.categories && (!(t.pieces ? t.pieces.length > 0 : t.splitNumber > 0) || t.calculable) ? "continuous" : "piecewise";
  }), r.registerAction(a2, o2), D(s2, function(t) {
    r.registerVisual(r.PRIORITY.VISUAL.COMPONENT, t);
  }), r.registerPreprocessor(u2));
}
function f2(r) {
  r.registerComponentModel(JP), r.registerComponentView(n2), k1(r);
}
var h2 = (
  /** @class */
  (function(r) {
    z(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e._pieceList = [], e;
    }
    return t.prototype.optionUpdated = function(e, n) {
      r.prototype.optionUpdated.apply(this, arguments), this.resetExtent();
      var i = this._mode = this._determineMode();
      this._pieceList = [], c2[this._mode].call(this, this._pieceList), this._resetSelected(e, n);
      var a = this.option.categories;
      this.resetVisual(function(o, s) {
        i === "categories" ? (o.mappingMethod = "category", o.categories = j(a)) : (o.dataExtent = this.getExtent(), o.mappingMethod = "piecewise", o.pieceList = Y(this._pieceList, function(l) {
          return l = j(l), s !== "inRange" && (l.visual = null), l;
        }));
      });
    }, t.prototype.completeVisualOption = function() {
      var e = this.option, n = {}, i = $t.listVisualTypes(), a = this.isCategory();
      D(e.pieces, function(s) {
        D(i, function(l) {
          s.hasOwnProperty(l) && (n[l] = 1);
        });
      }), D(n, function(s, l) {
        var u = !1;
        D(this.stateList, function(f) {
          u = u || o(e, f, l) || o(e.target, f, l);
        }, this), !u && D(this.stateList, function(f) {
          (e[f] || (e[f] = {}))[l] = O1.get(l, f === "inRange" ? "active" : "inactive", a);
        });
      }, this);
      function o(s, l, u) {
        return s && s[l] && s[l].hasOwnProperty(u);
      }
      r.prototype.completeVisualOption.apply(this, arguments);
    }, t.prototype._resetSelected = function(e, n) {
      var i = this.option, a = this._pieceList, o = (n ? i : e).selected || {};
      if (i.selected = o, D(a, function(l, u) {
        var f = this.getSelectedMapKey(l);
        o.hasOwnProperty(f) || (o[f] = !0);
      }, this), i.selectedMode === "single") {
        var s = !1;
        D(a, function(l, u) {
          var f = this.getSelectedMapKey(l);
          o[f] && (s ? o[f] = !1 : s = !0);
        }, this);
      }
    }, t.prototype.getItemSymbol = function() {
      return this.get("itemSymbol");
    }, t.prototype.getSelectedMapKey = function(e) {
      return this._mode === "categories" ? e.value + "" : e.index + "";
    }, t.prototype.getPieceList = function() {
      return this._pieceList;
    }, t.prototype._determineMode = function() {
      var e = this.option;
      return e.pieces && e.pieces.length > 0 ? "pieces" : this.option.categories ? "categories" : "splitNumber";
    }, t.prototype.setSelected = function(e) {
      this.option.selected = j(e);
    }, t.prototype.getValueState = function(e) {
      var n = $t.findPieceIndex(e, this._pieceList);
      return n != null && this.option.selected[this.getSelectedMapKey(this._pieceList[n])] ? "inRange" : "outOfRange";
    }, t.prototype.findTargetDataIndices = function(e) {
      var n = [], i = this._pieceList;
      return this.eachTargetSeries(function(a) {
        var o = [], s = a.getData();
        s.each(this.getDataDimensionIndex(s), function(l, u) {
          var f = $t.findPieceIndex(l, i);
          f === e && o.push(u);
        }, this), n.push({
          seriesId: a.id,
          dataIndex: o
        });
      }, this), n;
    }, t.prototype.getRepresentValue = function(e) {
      var n;
      if (this.isCategory())
        n = e.value;
      else if (e.value != null)
        n = e.value;
      else {
        var i = e.interval || [];
        n = i[0] === -1 / 0 && i[1] === 1 / 0 ? 0 : (i[0] + i[1]) / 2;
      }
      return n;
    }, t.prototype.getVisualMeta = function(e) {
      if (this.isCategory())
        return;
      var n = [], i = ["", ""], a = this;
      function o(f, h) {
        var v = a.getRepresentValue({
          interval: f
        });
        h || (h = a.getValueState(v));
        var c = e(v, h);
        f[0] === -1 / 0 ? i[0] = c : f[1] === 1 / 0 ? i[1] = c : n.push({
          value: f[0],
          color: c
        }, {
          value: f[1],
          color: c
        });
      }
      var s = this._pieceList.slice();
      if (!s.length)
        s.push({
          interval: [-1 / 0, 1 / 0]
        });
      else {
        var l = s[0].interval[0];
        l !== -1 / 0 && s.unshift({
          interval: [-1 / 0, l]
        }), l = s[s.length - 1].interval[1], l !== 1 / 0 && s.push({
          interval: [l, 1 / 0]
        });
      }
      var u = -1 / 0;
      return D(s, function(f) {
        var h = f.interval;
        h && (h[0] > u && o([u, h[0]], "outOfRange"), o(h.slice()), u = h[1]);
      }, this), {
        stops: n,
        outerColors: i
      };
    }, t.type = "visualMap.piecewise", t.defaultOption = Al(al.defaultOption, {
      selected: null,
      minOpen: !1,
      maxOpen: !1,
      align: "auto",
      itemWidth: 20,
      itemHeight: 14,
      itemSymbol: "roundRect",
      pieces: null,
      categories: null,
      splitNumber: 5,
      selectedMode: "multiple",
      itemGap: 10,
      hoverLink: !0
      // Enable hover highlight.
    }), t;
  })(al)
), c2 = {
  splitNumber: function(r) {
    var t = this.option, e = Math.min(t.precision, 20), n = this.getExtent(), i = t.splitNumber;
    i = Math.max(parseInt(i, 10), 1), t.splitNumber = i;
    for (var a = (n[1] - n[0]) / i; +a.toFixed(e) !== a && e < 5; )
      e++;
    t.precision = e, a = +a.toFixed(e), t.minOpen && r.push({
      interval: [-1 / 0, n[0]],
      close: [0, 0]
    });
    for (var o = 0, s = n[0]; o < i; s += a, o++) {
      var l = o === i - 1 ? n[1] : s + a;
      r.push({
        interval: [s, l],
        close: [1, 1]
      });
    }
    t.maxOpen && r.push({
      interval: [n[1], 1 / 0],
      close: [0, 0]
    }), Yf(r), D(r, function(u, f) {
      u.index = f, u.text = this.formatValueText(u.interval);
    }, this);
  },
  categories: function(r) {
    var t = this.option;
    D(t.categories, function(e) {
      r.push({
        text: this.formatValueText(e, !0),
        value: e
      });
    }, this), vy(t, r);
  },
  pieces: function(r) {
    var t = this.option;
    D(t.pieces, function(e, n) {
      W(e) || (e = {
        value: e
      });
      var i = {
        text: "",
        index: n
      };
      if (e.label != null && (i.text = e.label), e.hasOwnProperty("value")) {
        var a = i.value = e.value;
        i.interval = [a, a], i.close = [1, 1];
      } else {
        for (var o = i.interval = [], s = i.close = [0, 0], l = [1, 0, 1], u = [-1 / 0, 1 / 0], f = [], h = 0; h < 2; h++) {
          for (var v = [["gte", "gt", "min"], ["lte", "lt", "max"]][h], c = 0; c < 3 && o[h] == null; c++)
            o[h] = e[v[c]], s[h] = l[c], f[h] = c === 2;
          o[h] == null && (o[h] = u[h]);
        }
        f[0] && o[1] === 1 / 0 && (s[0] = 0), f[1] && o[0] === -1 / 0 && (s[1] = 0), process.env.NODE_ENV !== "production" && o[0] > o[1] && console.warn("Piece " + n + "is illegal: " + o + " lower bound should not greater then uppper bound."), o[0] === o[1] && s[0] && s[1] && (i.value = o[0]);
      }
      i.visual = $t.retrieveVisuals(e), r.push(i);
    }, this), vy(t, r), Yf(r), D(r, function(e) {
      var n = e.close, i = [["<", "≤"][n[1]], [">", "≥"][n[0]]];
      e.text = e.text || this.formatValueText(e.value != null ? e.value : e.interval, !1, i);
    }, this);
  }
};
function vy(r, t) {
  var e = r.inverse;
  (r.orient === "vertical" ? !e : e) && t.reverse();
}
var v2 = (
  /** @class */
  (function(r) {
    z(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = t.type, e;
    }
    return t.prototype.doRender = function() {
      var e = this.group;
      e.removeAll();
      var n = this.visualMapModel, i = n.get("textGap"), a = n.textStyleModel, o = a.getFont(), s = a.getTextColor(), l = this._getItemAlign(), u = n.itemSize, f = this._getViewData(), h = f.endsText, v = wr(n.get("showLabel", !0), !h), c = !n.get("selectedMode");
      h && this._renderEndsText(e, h[0], u, v, l), D(f.viewPieceList, function(p) {
        var d = p.piece, g = new xt();
        g.onclick = J(this._onItemClick, this, d), this._enableHoverLink(g, p.indexInModelPieceList);
        var y = n.getRepresentValue(d);
        if (this._createItemSymbol(g, y, [0, 0, u[0], u[1]], c), v) {
          var m = this.visualMapModel.getValueState(y);
          g.add(new St({
            style: {
              x: l === "right" ? -i : u[0] + i,
              y: u[1] / 2,
              text: d.text,
              verticalAlign: "middle",
              align: l,
              font: o,
              fill: s,
              opacity: m === "outOfRange" ? 0.5 : 1
            },
            silent: c
          }));
        }
        e.add(g);
      }, this), h && this._renderEndsText(e, h[1], u, v, l), Si(n.get("orient"), e, n.get("itemGap")), this.renderBackground(e), this.positionGroup(e);
    }, t.prototype._enableHoverLink = function(e, n) {
      var i = this;
      e.on("mouseover", function() {
        return a("highlight");
      }).on("mouseout", function() {
        return a("downplay");
      });
      var a = function(o) {
        var s = i.visualMapModel;
        s.option.hoverLink && i.api.dispatchAction({
          type: o,
          batch: ws(s.findTargetDataIndices(n), s)
        });
      };
    }, t.prototype._getItemAlign = function() {
      var e = this.visualMapModel, n = e.option;
      if (n.orient === "vertical")
        return N1(e, this.api, e.itemSize);
      var i = n.align;
      return (!i || i === "auto") && (i = "left"), i;
    }, t.prototype._renderEndsText = function(e, n, i, a, o) {
      if (n) {
        var s = new xt(), l = this.visualMapModel.textStyleModel;
        s.add(new St({
          style: de(l, {
            x: a ? o === "right" ? i[0] : 0 : i[0] / 2,
            y: i[1] / 2,
            verticalAlign: "middle",
            align: a ? o : "center",
            text: n
          })
        })), e.add(s);
      }
    }, t.prototype._getViewData = function() {
      var e = this.visualMapModel, n = Y(e.getPieceList(), function(s, l) {
        return {
          piece: s,
          indexInModelPieceList: l
        };
      }), i = e.get("text"), a = e.get("orient"), o = e.get("inverse");
      return (a === "horizontal" ? o : !o) ? n.reverse() : i && (i = i.slice().reverse()), {
        viewPieceList: n,
        endsText: i
      };
    }, t.prototype._createItemSymbol = function(e, n, i, a) {
      var o = Ue(
        // symbol will be string
        this.getControllerVisual(n, "symbol"),
        i[0],
        i[1],
        i[2],
        i[3],
        // color will be string
        this.getControllerVisual(n, "color")
      );
      o.silent = a, e.add(o);
    }, t.prototype._onItemClick = function(e) {
      var n = this.visualMapModel, i = n.option, a = i.selectedMode;
      if (a) {
        var o = j(i.selected), s = n.getSelectedMapKey(e);
        a === "single" || a === !0 ? (o[s] = !0, D(o, function(l, u) {
          o[u] = u === s;
        })) : o[s] = !o[s], this.api.dispatchAction({
          type: "selectDataRange",
          from: this.uid,
          visualMapId: this.visualMapModel.id,
          selected: o
        });
      }
    }, t.type = "visualMap.piecewise", t;
  })(R1)
);
function p2(r) {
  r.registerComponentModel(h2), r.registerComponentView(v2), k1(r);
}
function d2(r) {
  Ft(f2), Ft(p2);
}
function py(r, t, e) {
  var n = Ge.createCanvas(), i = t.getWidth(), a = t.getHeight(), o = n.style;
  return o && (o.position = "absolute", o.left = "0", o.top = "0", o.width = i + "px", o.height = a + "px", n.setAttribute("data-zr-dom-id", r)), n.width = i * e, n.height = a * e, n;
}
var wf = (function(r) {
  z(t, r);
  function t(e, n, i) {
    var a = r.call(this) || this;
    a.motionBlur = !1, a.lastFrameAlpha = 0.7, a.dpr = 1, a.virtual = !1, a.config = {}, a.incremental = !1, a.zlevel = 0, a.maxRepaintRectCount = 5, a.__dirty = !0, a.__firstTimePaint = !0, a.__used = !1, a.__drawIndex = 0, a.__startIndex = 0, a.__endIndex = 0, a.__prevStartIndex = null, a.__prevEndIndex = null;
    var o;
    i = i || Ps, typeof e == "string" ? o = py(e, n, i) : W(e) && (o = e, e = o.id), a.id = e, a.dom = o;
    var s = o.style;
    return s && (Hh(o), o.onselectstart = function() {
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
    this.domBack = py("back-" + this.id, this.painter, e), this.ctxBack = this.domBack.getContext("2d"), e !== 1 && this.ctxBack.scale(e, e);
  }, t.prototype.createRepaintRects = function(e, n, i, a) {
    if (this.__firstTimePaint)
      return this.__firstTimePaint = !1, null;
    var o = [], s = this.maxRepaintRectCount, l = !1, u = new lt(0, 0, 0, 0);
    function f(m) {
      if (!(!m.isFinite() || m.isZero()))
        if (o.length === 0) {
          var _ = new lt(0, 0, 0, 0);
          _.copy(m), o.push(_);
        } else {
          for (var S = !1, w = 1 / 0, b = 0, x = 0; x < o.length; ++x) {
            var T = o[x];
            if (T.intersect(m)) {
              var A = new lt(0, 0, 0, 0);
              A.copy(T), A.union(m), o[x] = A, S = !0;
              break;
            } else if (l) {
              u.copy(m), u.union(T);
              var M = m.width * m.height, C = T.width * T.height, E = u.width * u.height, I = E - M - C;
              I < w && (w = I, b = x);
            }
          }
          if (l && (o[b].union(m), S = !0), !S) {
            var _ = new lt(0, 0, 0, 0);
            _.copy(m), o.push(_);
          }
          l || (l = o.length >= s);
        }
    }
    for (var h = this.__startIndex; h < this.__endIndex; ++h) {
      var v = e[h];
      if (v) {
        var c = v.shouldBePainted(i, a, !0, !0), p = v.__isRendered && (v.__dirty & ve || !c) ? v.getPrevPaintRect() : null;
        p && f(p);
        var d = c && (v.__dirty & ve || !v.__isRendered) ? v.getPaintRect() : null;
        d && f(d);
      }
    }
    for (var h = this.__prevStartIndex; h < this.__prevEndIndex; ++h) {
      var v = n[h], c = v && v.shouldBePainted(i, a, !0, !0);
      if (v && (!c || !v.__zr) && v.__isRendered) {
        var p = v.getPrevPaintRect();
        p && f(p);
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
    var a = this.dom, o = this.ctx, s = a.width, l = a.height;
    n = n || this.clearColor;
    var u = this.motionBlur && !e, f = this.lastFrameAlpha, h = this.dpr, v = this;
    u && (this.domBack || this.createBackBuffer(), this.ctxBack.globalCompositeOperation = "copy", this.ctxBack.drawImage(a, 0, 0, s / h, l / h));
    var c = this.domBack;
    function p(d, g, y, m) {
      if (o.clearRect(d, g, y, m), n && n !== "transparent") {
        var _ = void 0;
        if (no(n)) {
          var S = n.global || n.__width === y && n.__height === m;
          _ = S && n.__canvasGradient || fh(o, n, {
            x: 0,
            y: 0,
            width: y,
            height: m
          }), n.__canvasGradient = _, n.__width = y, n.__height = m;
        } else xy(n) && (n.scaleX = n.scaleX || h, n.scaleY = n.scaleY || h, _ = hh(o, n, {
          dirty: function() {
            v.setUnpainted(), v.painter.refresh();
          }
        }));
        o.save(), o.fillStyle = _ || n, o.fillRect(d, g, y, m), o.restore();
      }
      u && (o.save(), o.globalAlpha = f, o.drawImage(c, d, g, y, m), o.restore());
    }
    !i || u ? p(0, 0, s, l) : i.length && D(i, function(d) {
      p(d.x * h, d.y * h, d.width * h, d.height * h);
    });
  }, t;
})(or), dy = 1e5, Sn = 314159, os = 0.01, g2 = 1e-3;
function y2(r) {
  return r ? r.__builtin__ ? !0 : !(typeof r.resize != "function" || typeof r.refresh != "function") : !1;
}
function m2(r, t) {
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
var _2 = (function() {
  function r(t, e, n, i) {
    this.type = "canvas", this._zlevelList = [], this._prevDisplayList = [], this._layers = {}, this._layerConfig = {}, this._needsManuallyCompositing = !1, this.type = "canvas";
    var a = !t.nodeName || t.nodeName.toUpperCase() === "CANVAS";
    this._opts = n = B({}, n || {}), this.dpr = n.devicePixelRatio || Ps, this._singleCanvas = a, this.root = t;
    var o = t.style;
    o && (Hh(t), t.innerHTML = ""), this.storage = e;
    var s = this._zlevelList;
    this._prevDisplayList = [];
    var l = this._layers;
    if (a) {
      var f = t, h = f.width, v = f.height;
      n.width != null && (h = n.width), n.height != null && (v = n.height), this.dpr = n.devicePixelRatio || 1, f.width = h * this.dpr, f.height = v * this.dpr, this._width = h, this._height = v;
      var c = new wf(f, this, this.dpr);
      c.__builtin__ = !0, c.initContext(), l[Sn] = c, c.zlevel = Sn, s.push(Sn), this._domRoot = t;
    } else {
      this._width = Yo(t, 0, n), this._height = Yo(t, 1, n);
      var u = this._domRoot = m2(this._width, this._height);
      t.appendChild(u);
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
        var l = a === 0 ? this._backgroundColor : null;
        s.refresh(l);
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
        s.__inHover && (n || (n = this._hoverlayer = this.getLayer(dy)), a || (a = n.ctx, a.save()), Dn(a, s, i, o === e - 1));
      }
      a && a.restore();
    }
  }, r.prototype.getHoverLayer = function() {
    return this.getLayer(dy);
  }, r.prototype.paintOne = function(t, e) {
    Ec(t, e);
  }, r.prototype._paintList = function(t, e, n, i) {
    if (this._redrawId === i) {
      n = n || !1, this._updateLayerStatus(t);
      var a = this._doPaintList(t, e, n), o = a.finished, s = a.needsRefreshHover;
      if (this._needsManuallyCompositing && this._compositeManually(), s && this._paintHoverList(t), o)
        this.eachLayer(function(u) {
          u.afterBrush && u.afterBrush();
        });
      else {
        var l = this;
        Ms(function() {
          l._paintList(t, e, n, i);
        });
      }
    }
  }, r.prototype._compositeManually = function() {
    var t = this.getLayer(Sn).ctx, e = this._domRoot.width, n = this._domRoot.height;
    t.clearRect(0, 0, e, n), this.eachBuiltinLayer(function(i) {
      i.virtual && t.drawImage(i.dom, 0, 0, e, n);
    });
  }, r.prototype._doPaintList = function(t, e, n) {
    for (var i = this, a = [], o = this._opts.useDirtyRect, s = 0; s < this._zlevelList.length; s++) {
      var l = this._zlevelList[s], u = this._layers[l];
      u.__builtin__ && u !== this._hoverlayer && (u.__dirty || n) && a.push(u);
    }
    for (var f = !0, h = !1, v = function(d) {
      var g = a[d], y = g.ctx, m = o && g.createRepaintRects(t, e, c._width, c._height), _ = n ? g.__startIndex : g.__drawIndex, S = !n && g.incremental && Date.now, w = S && Date.now(), b = g.zlevel === c._zlevelList[0] ? c._backgroundColor : null;
      if (g.__startIndex === g.__endIndex)
        g.clear(!1, b, m);
      else if (_ === g.__startIndex) {
        var x = t[_];
        (!x.incremental || !x.notClear || n) && g.clear(!1, b, m);
      }
      _ === -1 && (console.error("For some unknown reason. drawIndex is -1"), _ = g.__startIndex);
      var T, A = function(I) {
        var P = {
          inHover: !1,
          allClipped: !1,
          prevEl: null,
          viewWidth: i._width,
          viewHeight: i._height
        };
        for (T = _; T < g.__endIndex; T++) {
          var O = t[T];
          if (O.__inHover && (h = !0), i._doPaintEl(O, g, o, I, P, T === g.__endIndex - 1), S) {
            var R = Date.now() - w;
            if (R > 15)
              break;
          }
        }
        P.prevElClipPaths && y.restore();
      };
      if (m)
        if (m.length === 0)
          T = g.__endIndex;
        else
          for (var M = c.dpr, C = 0; C < m.length; ++C) {
            var E = m[C];
            y.save(), y.beginPath(), y.rect(E.x * M, E.y * M, E.width * M, E.height * M), y.clip(), A(E), y.restore();
          }
      else
        y.save(), A(), y.restore();
      g.__drawIndex = T, g.__drawIndex < g.__endIndex && (f = !1);
    }, c = this, p = 0; p < a.length; p++)
      v(p);
    return Z.wxa && D(this._layers, function(d) {
      d && d.ctx && d.ctx.draw && d.ctx.draw();
    }), {
      finished: f,
      needsRefreshHover: h
    };
  }, r.prototype._doPaintEl = function(t, e, n, i, a, o) {
    var s = e.ctx;
    if (n) {
      var l = t.getPaintRect();
      (!i || l && l.intersect(i)) && (Dn(s, t, a, o), t.setPrevPaintRect(l));
    } else
      Dn(s, t, a, o);
  }, r.prototype.getLayer = function(t, e) {
    this._singleCanvas && !this._needsManuallyCompositing && (t = Sn);
    var n = this._layers[t];
    return n || (n = new wf("zr_" + t, this, this.dpr), n.zlevel = t, n.__builtin__ = !0, this._layerConfig[t] ? st(n, this._layerConfig[t], !0) : this._layerConfig[t - os] && st(n, this._layerConfig[t - os], !0), e && (n.virtual = e), this.insertLayer(t, n), n.initContext()), n;
  }, r.prototype.insertLayer = function(t, e) {
    var n = this._layers, i = this._zlevelList, a = i.length, o = this._domRoot, s = null, l = -1;
    if (n[t]) {
      process.env.NODE_ENV !== "production" && Ur("ZLevel " + t + " has been used already");
      return;
    }
    if (!y2(e)) {
      process.env.NODE_ENV !== "production" && Ur("Layer of zlevel " + t + " is not valid");
      return;
    }
    if (a > 0 && t > i[0]) {
      for (l = 0; l < a - 1 && !(i[l] < t && i[l + 1] > t); l++)
        ;
      s = n[i[l]];
    }
    if (i.splice(l + 1, 0, t), n[t] = e, !e.virtual)
      if (s) {
        var u = s.dom;
        u.nextSibling ? o.insertBefore(e.dom, u.nextSibling) : o.appendChild(e.dom);
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
    var a = null, o = 0, s, l;
    for (l = 0; l < t.length; l++) {
      var i = t[l], u = i.zlevel, f = void 0;
      s !== u && (s = u, o = 0), i.incremental ? (f = this.getLayer(u + g2, this._needsManuallyCompositing), f.incremental = !0, o = 1) : f = this.getLayer(u + (o > 0 ? os : 0), this._needsManuallyCompositing), f.__builtin__ || Ur("ZLevel " + u + " has been used by unkown layer " + f.id), f !== a && (f.__used = !0, f.__startIndex !== l && (f.__dirty = !0), f.__startIndex = l, f.incremental ? f.__drawIndex = -1 : f.__drawIndex = l, e(l), a = f), i.__dirty & ve && !i.__inHover && (f.__dirty = !0, f.incremental && f.__drawIndex < 0 && (f.__drawIndex = l));
    }
    e(l), this.eachBuiltinLayer(function(h, v) {
      !h.__used && h.getElementCount() > 0 && (h.__dirty = !0, h.__startIndex = h.__endIndex = h.__drawIndex = 0), h.__dirty && h.__drawIndex < 0 && (h.__drawIndex = h.__startIndex);
    });
  }, r.prototype.clear = function() {
    return this.eachBuiltinLayer(this._clearLayer), this;
  }, r.prototype._clearLayer = function(t) {
    t.clear();
  }, r.prototype.setBackgroundColor = function(t) {
    this._backgroundColor = t, D(this._layers, function(e) {
      e.setUnpainted();
    });
  }, r.prototype.configLayer = function(t, e) {
    if (e) {
      var n = this._layerConfig;
      n[t] ? st(n[t], e, !0) : n[t] = e;
      for (var i = 0; i < this._zlevelList.length; i++) {
        var a = this._zlevelList[i];
        if (a === t || a === t + os) {
          var o = this._layers[a];
          st(o, n[t], !0);
        }
      }
    }
  }, r.prototype.delLayer = function(t) {
    var e = this._layers, n = this._zlevelList, i = e[t];
    i && (i.dom.parentNode.removeChild(i.dom), delete e[t], n.splice(vt(n, t), 1));
  }, r.prototype.resize = function(t, e) {
    if (this._domRoot.style) {
      var n = this._domRoot;
      n.style.display = "none";
      var i = this._opts, a = this.root;
      if (t != null && (i.width = t), e != null && (i.height = e), t = Yo(a, 0, i), e = Yo(a, 1, i), n.style.display = "", this._width !== t || e !== this._height) {
        n.style.width = t + "px", n.style.height = e + "px";
        for (var o in this._layers)
          this._layers.hasOwnProperty(o) && this._layers[o].resize(t, e);
        this.refresh(!0);
      }
      this._width = t, this._height = e;
    } else {
      if (t == null || e == null)
        return;
      this._width = t, this._height = e, this.getLayer(Sn).resize(t, e);
    }
    return this;
  }, r.prototype.clearLayer = function(t) {
    var e = this._layers[t];
    e && e.clear();
  }, r.prototype.dispose = function() {
    this.root.innerHTML = "", this.root = this.storage = this._domRoot = this._layers = null;
  }, r.prototype.getRenderedCanvas = function(t) {
    if (t = t || {}, this._singleCanvas && !this._compositeManually)
      return this._layers[Sn].dom;
    var e = new wf("image", this, t.pixelRatio || this.dpr);
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
      }, s = this.storage.getDisplayList(!0), l = 0, u = s.length; l < u; l++) {
        var f = s[l];
        Dn(n, f, o, l === u - 1);
      }
    return e.dom;
  }, r.prototype.getWidth = function() {
    return this._width;
  }, r.prototype.getHeight = function() {
    return this._height;
  }, r;
})();
function ki(r) {
  r.registerPainter("canvas", _2);
}
Ft([LI, Ul, Ni, Wl, Yl, ki]);
function S2(r, t = []) {
  const e = r[0], n = Array.isArray(e?.data) ? e.data : [];
  let i = 0;
  const a = n.map((o, s) => s === 0 ? 0 : (i += n[s - 1] ?? 0, i));
  return [
    // Placeholder (offset)
    {
      ...t[0] || {},
      name: "",
      //baseSeries[0]?.name || ""
      silent: !0,
      tooltip: { show: !1 },
      type: "bar",
      stack: "total",
      data: a,
      itemStyle: {
        color: "transparent",
        borderColor: "transparent",
        ...t[0]?.itemStyle || {}
      },
      emphasis: {
        itemStyle: {
          color: "transparent",
          borderColor: "transparent"
        }
      }
    },
    // Actual values
    {
      ...e,
      // data + name
      ...t[1] || {},
      // style wins
      name: t[1]?.name || e?.name || "",
      type: "bar",
      stack: "total",
      label: {
        show: !0,
        position: "inside",
        ...t[1]?.label || {}
      }
    }
  ];
}
function b2({ config: r = {}, data: t = {} }) {
  const e = t.categories || [], n = t.series || [], i = r.options?.series || [], { subType: a } = r;
  let o = n.map((d, g) => ({
    ...d,
    ...i[g] || {},
    name: d.name,
    type: i[g]?.type ?? "bar",
    data: Array.isArray(d.data) ? d.data : []
  }));
  a === "stacked" && (o = o.map((d) => ({ ...d, stack: "total" }))), a === "sorting" && o.length === 1 && (o = o.map((d) => ({ ...d, realtimeSort: !0 }))), a === "waterfall" && (o = S2(o, i));
  const {
    xAxis: s,
    yAxis: l,
    series: u,
    ...f
  } = r.options || {}, h = Array.isArray(s) ? s[0] : s, v = Array.isArray(l) ? l[0] : l, c = h?.type === "value" || v?.type === "category", p = {
    ...f,
    tooltip: { trigger: "axis", ...f.tooltip },
    legend: {
      show: !0,
      ...f.legend
    },
    grid: { containLabel: !0, ...f.grid },
    xAxis: c ? {
      type: "value",
      ...h
    } : {
      type: "category",
      ...h,
      data: e
    },
    yAxis: c ? {
      type: "category",
      ...v,
      data: e
    } : Array.isArray(l) ? l : {
      type: "value",
      ...v
    },
    series: o
  };
  return /* @__PURE__ */ Jt.jsx(
    Di,
    {
      echarts: Ri,
      option: p,
      style: { width: "100%", height: "100%" }
    }
  );
}
Ft([
  gI,
  Ul,
  Ni,
  Wl,
  Yl,
  ki
]);
function w2({ config: r, data: t }) {
  const e = t?.categories || [], n = t?.series || [], i = r.options?.series || [], { subType: a } = r;
  let o = n.map((p, d) => ({
    ...i[d] || {},
    // style/config provided from JSON first
    ...p,
    // inject dynamic data from API
    name: p.name,
    type: "line",
    data: Array.isArray(p.data) ? p.data : []
  }));
  a === "smooth" && (o = o.map((p) => ({ ...p, smooth: !0 }))), a === "area" && (o = o.map((p) => ({ ...p, areaStyle: {} }))), a === "stacked" && (o = o.map((p) => ({ ...p, stack: "total", areaStyle: {} })));
  const {
    xAxis: s,
    yAxis: l,
    series: u,
    ...f
  } = r.options || {}, h = Array.isArray(s) ? s[0] : s, v = Array.isArray(l) ? l[0] : l, c = {
    ...f,
    tooltip: { trigger: "axis", ...f.tooltip },
    legend: { show: !0, ...f.legend },
    xAxis: {
      type: "category",
      boundaryGap: !(a === "area" || a === "stacked"),
      ...h,
      // user styles (boundaryGap etc.)
      data: e
      // engine always wins
    },
    yAxis: Array.isArray(l) ? l : {
      type: "value",
      ...v
    },
    series: o
  };
  return /* @__PURE__ */ Jt.jsx(
    Di,
    {
      echarts: Ri,
      option: c,
      style: { width: "100%", height: "100%" }
    }
  );
}
Ft([HI, Ul, Ni, Yl, ki]);
function x2({ config: r, data: t }) {
  const { subType: e } = r;
  console.log("config", r);
  const n = t.series || [], i = r.options?.series?.[0] ?? {};
  let a = {
    type: "pie",
    data: n.map((s) => ({
      name: s.name,
      value: s.value
    })),
    ...i
  };
  e === "donut" && (a.radius = i.radius ?? ["40%", "70%"]), e === "semi-donut" && (a.radius = i.radius ?? ["40%", "70%"], a.center = i.center ?? ["50%", "70%"], a.startAngle = i.startAngle ?? 180, a.endAngle = i.endAngle ?? 360), e === "rose" && (a.roseType = "area");
  const o = {
    tooltip: { trigger: "item", ...r.options?.tooltip },
    legend: { top: "5%", left: "center", ...r.options?.legend },
    ...r.options,
    series: [a]
  };
  return /* @__PURE__ */ Jt.jsx(
    Di,
    {
      echarts: Ri,
      option: o,
      style: { width: "100%", height: "100%" }
    }
  );
}
function dr(r) {
  return typeof r != "string" ? String(r ?? "") : r.replace(/_/g, " ").toLowerCase().split(" ").filter(Boolean).map((t) => t[0]?.toUpperCase() + t.slice(1)).join(" ");
}
function T2(r, t) {
  if (!Array.isArray(r) || r.length === 0)
    return { categories: [], series: [] };
  const e = r[0], n = Object.keys(e), i = t.labelKey || n.find((u) => typeof e[u] != "number") || n[0], a = t.valueKey || n.find((u) => typeof e[u] == "number") || n[1], o = t.seriesKey;
  if (["pie", "donut", "rose", "funnel"].includes(t.type))
    return {
      categories: [],
      series: r.map((u) => ({
        name: dr(u[i]),
        value: Number(u[a]) || 0
        // TS Safe
      }))
    };
  if (t.type === "heatmap") {
    const u = t.xKey || n[0], f = t.yKey || n[1], h = t.valueKey || n.find((d) => typeof e[d] == "number"), v = [...new Set(r.map((d) => dr(d[u])))], c = [...new Set(r.map((d) => dr(d[f])))], p = r.map((d) => [
      v.indexOf(dr(d[u])),
      c.indexOf(dr(d[f])),
      Number(d[h]) || 0
    ]);
    return {
      xCategories: v,
      yCategories: c,
      series: [
        {
          name: dr(t.seriesName || "Heatmap"),
          data: p
        }
      ]
    };
  }
  if (!o)
    return {
      categories: r.map((u) => u[i]),
      series: [{
        name: dr(t.seriesName || "Series"),
        data: r.map((u) => Number(u[a]) || 0)
      }]
    };
  const s = [...new Set(r.map((u) => u[i]))], l = {};
  return r.forEach((u) => {
    const f = u[o];
    l[f] || (l[f] = new Array(s.length).fill(0)), l[f][s.indexOf(u[i])] = Number(u[a]) || 0;
  }), {
    categories: s,
    series: Object.keys(l).map((u) => ({ name: dr(u), data: l[u] }))
  };
}
function C2(r) {
  return Array.isArray(r) ? r : Array.isArray(r?.data) ? r.data : r && typeof r == "object" ? Object.values(r) : [];
}
async function D2(r, t, e, n = void 0, i = void 0, a = {}) {
  try {
    let o = e;
    return o || (o = (await fetch(r.baseURL + r.registerQuery, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${r?.accessToken}`
      },
      body: JSON.stringify({
        query: t,
        srcid: i
      })
    }).then((u) => u.json())).data.queryid), await fetch(r.baseURL + r.runQuery, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${r?.accessToken}`
      },
      body: JSON.stringify({
        queryid: o,
        filter: a,
        refid: n,
        page: 0,
        limit: 1e4
      })
    }).then((l) => l.json());
  } catch (o) {
    throw o;
  }
}
Ft([TL, Ni, Wl, Ul, ki]);
function M2({ config: r, data: t }) {
  const { xKey: e, yKey: n, sizeKey: i, labelKey: a } = r, s = (Array.isArray(t) ? t : []).map((u) => ({
    name: dr(u[a]),
    value: [
      Number(u[e]) || 0,
      Number(u[n]) || 0,
      Number(u[i]) || 0
    ]
  })), l = {
    ...r.options,
    xAxis: { type: "value", ...r.options?.xAxis },
    yAxis: { type: "value", ...r.options?.yAxis },
    series: [
      {
        type: "scatter",
        data: s,
        symbolSize: (u) => Math.max(6, Math.sqrt(u[2] ?? 0) * 2)
        // scalable bubble size
      }
    ]
  };
  return console.log("options", l), /* @__PURE__ */ Jt.jsx(
    Di,
    {
      echarts: Ri,
      option: l,
      style: { width: "100%", height: "100%" }
    }
  );
}
Ft([VL, Ni, Yl, ki]);
function A2({
  config: r,
  data: t
}) {
  const e = t.series || [], n = r.options?.series?.[0] ?? {};
  console.log("rawSeries", e);
  const i = {
    type: "funnel",
    left: "10%",
    top: 20,
    bottom: 20,
    width: "80%",
    min: 0,
    sort: "descending",
    gap: 2,
    label: {
      show: !0,
      position: "inside"
    },
    ...n,
    data: e.map((o) => ({
      name: o.name,
      value: o.value
    }))
  }, a = {
    tooltip: { trigger: "item", ...r.options?.tooltip },
    legend: { bottom: 0, ...r.options?.legend },
    ...r.options,
    series: [i]
  };
  return console.log("options", a), /* @__PURE__ */ Jt.jsx(
    Di,
    {
      echarts: Ri,
      option: a,
      style: { width: "100%", height: "100%" }
    }
  );
}
Ft([
  YL,
  Wl,
  Ni,
  d2,
  ki
]);
function E2({ config: r, data: t }) {
  const e = r.options?.series?.[0] ?? {}, n = {
    type: "heatmap",
    label: { show: !1 },
    emphasis: {
      itemStyle: {
        shadowBlur: 10,
        shadowColor: "rgba(0,0,0,0.4)"
      }
    },
    ...e,
    data: t.series?.[0]?.data || []
  }, i = {
    tooltip: { position: "top", ...r.options?.tooltip },
    grid: {
      height: "60%",
      top: "10%",
      ...r.options?.grid
    },
    xAxis: {
      type: "category",
      data: t.xCategories || [],
      splitArea: { show: !0 },
      ...r.options?.xAxis || {}
    },
    yAxis: {
      type: "category",
      data: t.yCategories || [],
      splitArea: { show: !0 },
      ...r.options?.yAxis || {}
    },
    visualMap: {
      min: 0,
      max: Math.max(
        ...(t.series?.[0]?.data || []).map((a) => a[2] ?? 0),
        0
      ),
      calculable: !0,
      orient: "horizontal",
      left: "center",
      bottom: 10,
      ...r.options?.visualMap || {}
    },
    ...r.options,
    series: [n]
  };
  return /* @__PURE__ */ Jt.jsx(
    Di,
    {
      echarts: Ri,
      option: i,
      style: { width: "100%", height: "100%" }
    }
  );
}
const I2 = ({ graph_config: r, methods: t = {}, sqlOpsConfig: e, module_refid: n }) => {
  if (!r?.config?.type) return null;
  const { config: i, source: a } = r;
  console.log("source", a);
  const [o, s] = z1({ categories: [], series: [] });
  switch (F1(() => {
    (async () => {
      let u = {};
      if (console.log("source?.type", a?.type), a?.type === "method") {
        const h = t[a.method];
        u = h ? await Promise.resolve(h()) : {}, console.log("result", u);
      } else if (a?.type === "api" && a.url)
        u = await fetch(a.url, {
          method: a.method || "GET",
          headers: a.headers || {}
        }).then((h) => h.json());
      else if (a?.type === "sql" && e)
        try {
          let h;
          a.queryid || (h = {
            table: a.table,
            cols: a.columns ?? a.cols,
            where: a.where ?? {},
            orderby: a.orderby ?? "",
            groupby: a.groupby ?? ""
          }), u = await D2(e, h, a?.queryid, void 0, n);
        } catch (h) {
          console.error("API fetch failed:", h);
        }
      const f = C2(u);
      if (i.type === "bubble" || i.type === "scatter")
        s(f);
      else {
        const h = T2(f, i);
        s(h);
      }
    })();
  }, [a?.method, a?.url, a?.type, i.type]), r?.config.type) {
    case "bar":
      return /* @__PURE__ */ Jt.jsx(b2, { config: i, data: o });
    case "line":
      return /* @__PURE__ */ Jt.jsx(w2, { config: i, data: o });
    case "pie":
      return /* @__PURE__ */ Jt.jsx(x2, { config: i, data: o });
    case "scatter":
    case "bubble":
      return /* @__PURE__ */ Jt.jsx(M2, { config: i, data: o });
    case "funnel":
      return /* @__PURE__ */ Jt.jsx(A2, { config: i, data: o });
    case "heatmap":
      return /* @__PURE__ */ Jt.jsx(E2, { config: i, data: o });
    default:
      return /* @__PURE__ */ Jt.jsxs("div", { className: "text-red-500", children: [
        "Unknown chart type: ",
        i.type
      ] });
  }
};
function P2({ graph_config: r, methods: t, sqlOpsConfig: e, module_refid: n }) {
  const i = r.height ?? 250;
  return /* @__PURE__ */ Jt.jsx("div", { style: { height: i, width: "100%" }, children: /* @__PURE__ */ Jt.jsx(I2, { module_refid: n, graph_config: r, methods: t || {}, sqlOpsConfig: e }) });
}
export {
  P2 as LogiksGraph,
  P2 as default
};
