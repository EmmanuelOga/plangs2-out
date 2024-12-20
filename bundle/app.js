"use strict";
(() => {
  // node_modules/preact/dist/preact.module.js
  var n;
  var l;
  var u;
  var t;
  var i;
  var r;
  var o;
  var e;
  var f;
  var c;
  var s;
  var a;
  var h;
  var p = {};
  var v = [];
  var y = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  var d = Array.isArray;
  function w(n2, l3) {
    for (var u4 in l3) n2[u4] = l3[u4];
    return n2;
  }
  function _(n2) {
    n2 && n2.parentNode && n2.parentNode.removeChild(n2);
  }
  function g(l3, u4, t3) {
    var i4, r3, o3, e3 = {};
    for (o3 in u4) "key" == o3 ? i4 = u4[o3] : "ref" == o3 ? r3 = u4[o3] : e3[o3] = u4[o3];
    if (arguments.length > 2 && (e3.children = arguments.length > 3 ? n.call(arguments, 2) : t3), "function" == typeof l3 && null != l3.defaultProps) for (o3 in l3.defaultProps) void 0 === e3[o3] && (e3[o3] = l3.defaultProps[o3]);
    return m(l3, e3, i4, r3, null);
  }
  function m(n2, t3, i4, r3, o3) {
    var e3 = { type: n2, props: t3, key: i4, ref: r3, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: null == o3 ? ++u : o3, __i: -1, __u: 0 };
    return null == o3 && null != l.vnode && l.vnode(e3), e3;
  }
  function k(n2) {
    return n2.children;
  }
  function x(n2, l3) {
    this.props = n2, this.context = l3;
  }
  function C(n2, l3) {
    if (null == l3) return n2.__ ? C(n2.__, n2.__i + 1) : null;
    for (var u4; l3 < n2.__k.length; l3++) if (null != (u4 = n2.__k[l3]) && null != u4.__e) return u4.__e;
    return "function" == typeof n2.type ? C(n2) : null;
  }
  function S(n2) {
    var l3, u4;
    if (null != (n2 = n2.__) && null != n2.__c) {
      for (n2.__e = n2.__c.base = null, l3 = 0; l3 < n2.__k.length; l3++) if (null != (u4 = n2.__k[l3]) && null != u4.__e) {
        n2.__e = n2.__c.base = u4.__e;
        break;
      }
      return S(n2);
    }
  }
  function M(n2) {
    (!n2.__d && (n2.__d = true) && i.push(n2) && !P.__r++ || r !== l.debounceRendering) && ((r = l.debounceRendering) || o)(P);
  }
  function P() {
    var n2, u4, t3, r3, o3, f4, c3, s3;
    for (i.sort(e); n2 = i.shift(); ) n2.__d && (u4 = i.length, r3 = void 0, f4 = (o3 = (t3 = n2).__v).__e, c3 = [], s3 = [], t3.__P && ((r3 = w({}, o3)).__v = o3.__v + 1, l.vnode && l.vnode(r3), j(t3.__P, r3, o3, t3.__n, t3.__P.namespaceURI, 32 & o3.__u ? [f4] : null, c3, null == f4 ? C(o3) : f4, !!(32 & o3.__u), s3), r3.__v = o3.__v, r3.__.__k[r3.__i] = r3, z(c3, r3, s3), r3.__e != f4 && S(r3)), i.length > u4 && i.sort(e));
    P.__r = 0;
  }
  function $(n2, l3, u4, t3, i4, r3, o3, e3, f4, c3, s3) {
    var a3, h3, y3, d3, w3, _2, g2 = t3 && t3.__k || v, m3 = l3.length;
    for (f4 = I(u4, l3, g2, f4, m3), a3 = 0; a3 < m3; a3++) null != (y3 = u4.__k[a3]) && (h3 = -1 === y3.__i ? p : g2[y3.__i] || p, y3.__i = a3, _2 = j(n2, y3, h3, i4, r3, o3, e3, f4, c3, s3), d3 = y3.__e, y3.ref && h3.ref != y3.ref && (h3.ref && V(h3.ref, null, y3), s3.push(y3.ref, y3.__c || d3, y3)), null == w3 && null != d3 && (w3 = d3), 4 & y3.__u || h3.__k === y3.__k ? f4 = A(y3, f4, n2) : "function" == typeof y3.type && void 0 !== _2 ? f4 = _2 : d3 && (f4 = d3.nextSibling), y3.__u &= -7);
    return u4.__e = w3, f4;
  }
  function I(n2, l3, u4, t3, i4) {
    var r3, o3, e3, f4, c3, s3 = u4.length, a3 = s3, h3 = 0;
    for (n2.__k = new Array(i4), r3 = 0; r3 < i4; r3++) null != (o3 = l3[r3]) && "boolean" != typeof o3 && "function" != typeof o3 ? (f4 = r3 + h3, (o3 = n2.__k[r3] = "string" == typeof o3 || "number" == typeof o3 || "bigint" == typeof o3 || o3.constructor == String ? m(null, o3, null, null, null) : d(o3) ? m(k, { children: o3 }, null, null, null) : void 0 === o3.constructor && o3.__b > 0 ? m(o3.type, o3.props, o3.key, o3.ref ? o3.ref : null, o3.__v) : o3).__ = n2, o3.__b = n2.__b + 1, e3 = null, -1 !== (c3 = o3.__i = L(o3, u4, f4, a3)) && (a3--, (e3 = u4[c3]) && (e3.__u |= 2)), null == e3 || null === e3.__v ? (-1 == c3 && h3--, "function" != typeof o3.type && (o3.__u |= 4)) : c3 != f4 && (c3 == f4 - 1 ? h3-- : c3 == f4 + 1 ? h3++ : (c3 > f4 ? h3-- : h3++, o3.__u |= 4))) : n2.__k[r3] = null;
    if (a3) for (r3 = 0; r3 < s3; r3++) null != (e3 = u4[r3]) && 0 == (2 & e3.__u) && (e3.__e == t3 && (t3 = C(e3)), q(e3, e3));
    return t3;
  }
  function A(n2, l3, u4) {
    var t3, i4;
    if ("function" == typeof n2.type) {
      for (t3 = n2.__k, i4 = 0; t3 && i4 < t3.length; i4++) t3[i4] && (t3[i4].__ = n2, l3 = A(t3[i4], l3, u4));
      return l3;
    }
    n2.__e != l3 && (l3 && n2.type && !u4.contains(l3) && (l3 = C(n2)), u4.insertBefore(n2.__e, l3 || null), l3 = n2.__e);
    do {
      l3 = l3 && l3.nextSibling;
    } while (null != l3 && 8 == l3.nodeType);
    return l3;
  }
  function L(n2, l3, u4, t3) {
    var i4, r3, o3 = n2.key, e3 = n2.type, f4 = l3[u4];
    if (null === f4 || f4 && o3 == f4.key && e3 === f4.type && 0 == (2 & f4.__u)) return u4;
    if (t3 > (null != f4 && 0 == (2 & f4.__u) ? 1 : 0)) for (i4 = u4 - 1, r3 = u4 + 1; i4 >= 0 || r3 < l3.length; ) {
      if (i4 >= 0) {
        if ((f4 = l3[i4]) && 0 == (2 & f4.__u) && o3 == f4.key && e3 === f4.type) return i4;
        i4--;
      }
      if (r3 < l3.length) {
        if ((f4 = l3[r3]) && 0 == (2 & f4.__u) && o3 == f4.key && e3 === f4.type) return r3;
        r3++;
      }
    }
    return -1;
  }
  function T(n2, l3, u4) {
    "-" == l3[0] ? n2.setProperty(l3, null == u4 ? "" : u4) : n2[l3] = null == u4 ? "" : "number" != typeof u4 || y.test(l3) ? u4 : u4 + "px";
  }
  function F(n2, l3, u4, t3, i4) {
    var r3;
    n: if ("style" == l3) if ("string" == typeof u4) n2.style.cssText = u4;
    else {
      if ("string" == typeof t3 && (n2.style.cssText = t3 = ""), t3) for (l3 in t3) u4 && l3 in u4 || T(n2.style, l3, "");
      if (u4) for (l3 in u4) t3 && u4[l3] === t3[l3] || T(n2.style, l3, u4[l3]);
    }
    else if ("o" == l3[0] && "n" == l3[1]) r3 = l3 != (l3 = l3.replace(f, "$1")), l3 = l3.toLowerCase() in n2 || "onFocusOut" == l3 || "onFocusIn" == l3 ? l3.toLowerCase().slice(2) : l3.slice(2), n2.l || (n2.l = {}), n2.l[l3 + r3] = u4, u4 ? t3 ? u4.u = t3.u : (u4.u = c, n2.addEventListener(l3, r3 ? a : s, r3)) : n2.removeEventListener(l3, r3 ? a : s, r3);
    else {
      if ("http://www.w3.org/2000/svg" == i4) l3 = l3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("width" != l3 && "height" != l3 && "href" != l3 && "list" != l3 && "form" != l3 && "tabIndex" != l3 && "download" != l3 && "rowSpan" != l3 && "colSpan" != l3 && "role" != l3 && "popover" != l3 && l3 in n2) try {
        n2[l3] = null == u4 ? "" : u4;
        break n;
      } catch (n3) {
      }
      "function" == typeof u4 || (null == u4 || false === u4 && "-" != l3[4] ? n2.removeAttribute(l3) : n2.setAttribute(l3, "popover" == l3 && 1 == u4 ? "" : u4));
    }
  }
  function O(n2) {
    return function(u4) {
      if (this.l) {
        var t3 = this.l[u4.type + n2];
        if (null == u4.t) u4.t = c++;
        else if (u4.t < t3.u) return;
        return t3(l.event ? l.event(u4) : u4);
      }
    };
  }
  function j(n2, u4, t3, i4, r3, o3, e3, f4, c3, s3) {
    var a3, h3, p3, v3, y3, g2, m3, b, C3, S2, M2, P2, I2, A3, H, L2, T3, F2 = u4.type;
    if (void 0 !== u4.constructor) return null;
    128 & t3.__u && (c3 = !!(32 & t3.__u), o3 = [f4 = u4.__e = t3.__e]), (a3 = l.__b) && a3(u4);
    n: if ("function" == typeof F2) try {
      if (b = u4.props, C3 = "prototype" in F2 && F2.prototype.render, S2 = (a3 = F2.contextType) && i4[a3.__c], M2 = a3 ? S2 ? S2.props.value : a3.__ : i4, t3.__c ? m3 = (h3 = u4.__c = t3.__c).__ = h3.__E : (C3 ? u4.__c = h3 = new F2(b, M2) : (u4.__c = h3 = new x(b, M2), h3.constructor = F2, h3.render = B), S2 && S2.sub(h3), h3.props = b, h3.state || (h3.state = {}), h3.context = M2, h3.__n = i4, p3 = h3.__d = true, h3.__h = [], h3._sb = []), C3 && null == h3.__s && (h3.__s = h3.state), C3 && null != F2.getDerivedStateFromProps && (h3.__s == h3.state && (h3.__s = w({}, h3.__s)), w(h3.__s, F2.getDerivedStateFromProps(b, h3.__s))), v3 = h3.props, y3 = h3.state, h3.__v = u4, p3) C3 && null == F2.getDerivedStateFromProps && null != h3.componentWillMount && h3.componentWillMount(), C3 && null != h3.componentDidMount && h3.__h.push(h3.componentDidMount);
      else {
        if (C3 && null == F2.getDerivedStateFromProps && b !== v3 && null != h3.componentWillReceiveProps && h3.componentWillReceiveProps(b, M2), !h3.__e && (null != h3.shouldComponentUpdate && false === h3.shouldComponentUpdate(b, h3.__s, M2) || u4.__v == t3.__v)) {
          for (u4.__v != t3.__v && (h3.props = b, h3.state = h3.__s, h3.__d = false), u4.__e = t3.__e, u4.__k = t3.__k, u4.__k.some(function(n3) {
            n3 && (n3.__ = u4);
          }), P2 = 0; P2 < h3._sb.length; P2++) h3.__h.push(h3._sb[P2]);
          h3._sb = [], h3.__h.length && e3.push(h3);
          break n;
        }
        null != h3.componentWillUpdate && h3.componentWillUpdate(b, h3.__s, M2), C3 && null != h3.componentDidUpdate && h3.__h.push(function() {
          h3.componentDidUpdate(v3, y3, g2);
        });
      }
      if (h3.context = M2, h3.props = b, h3.__P = n2, h3.__e = false, I2 = l.__r, A3 = 0, C3) {
        for (h3.state = h3.__s, h3.__d = false, I2 && I2(u4), a3 = h3.render(h3.props, h3.state, h3.context), H = 0; H < h3._sb.length; H++) h3.__h.push(h3._sb[H]);
        h3._sb = [];
      } else do {
        h3.__d = false, I2 && I2(u4), a3 = h3.render(h3.props, h3.state, h3.context), h3.state = h3.__s;
      } while (h3.__d && ++A3 < 25);
      h3.state = h3.__s, null != h3.getChildContext && (i4 = w(w({}, i4), h3.getChildContext())), C3 && !p3 && null != h3.getSnapshotBeforeUpdate && (g2 = h3.getSnapshotBeforeUpdate(v3, y3)), f4 = $(n2, d(L2 = null != a3 && a3.type === k && null == a3.key ? a3.props.children : a3) ? L2 : [L2], u4, t3, i4, r3, o3, e3, f4, c3, s3), h3.base = u4.__e, u4.__u &= -161, h3.__h.length && e3.push(h3), m3 && (h3.__E = h3.__ = null);
    } catch (n3) {
      if (u4.__v = null, c3 || null != o3) if (n3.then) {
        for (u4.__u |= c3 ? 160 : 128; f4 && 8 == f4.nodeType && f4.nextSibling; ) f4 = f4.nextSibling;
        o3[o3.indexOf(f4)] = null, u4.__e = f4;
      } else for (T3 = o3.length; T3--; ) _(o3[T3]);
      else u4.__e = t3.__e, u4.__k = t3.__k;
      l.__e(n3, u4, t3);
    }
    else null == o3 && u4.__v == t3.__v ? (u4.__k = t3.__k, u4.__e = t3.__e) : f4 = u4.__e = N(t3.__e, u4, t3, i4, r3, o3, e3, c3, s3);
    return (a3 = l.diffed) && a3(u4), 128 & u4.__u ? void 0 : f4;
  }
  function z(n2, u4, t3) {
    for (var i4 = 0; i4 < t3.length; i4++) V(t3[i4], t3[++i4], t3[++i4]);
    l.__c && l.__c(u4, n2), n2.some(function(u5) {
      try {
        n2 = u5.__h, u5.__h = [], n2.some(function(n3) {
          n3.call(u5);
        });
      } catch (n3) {
        l.__e(n3, u5.__v);
      }
    });
  }
  function N(u4, t3, i4, r3, o3, e3, f4, c3, s3) {
    var a3, h3, v3, y3, w3, g2, m3, b = i4.props, k3 = t3.props, x3 = t3.type;
    if ("svg" == x3 ? o3 = "http://www.w3.org/2000/svg" : "math" == x3 ? o3 = "http://www.w3.org/1998/Math/MathML" : o3 || (o3 = "http://www.w3.org/1999/xhtml"), null != e3) {
      for (a3 = 0; a3 < e3.length; a3++) if ((w3 = e3[a3]) && "setAttribute" in w3 == !!x3 && (x3 ? w3.localName == x3 : 3 == w3.nodeType)) {
        u4 = w3, e3[a3] = null;
        break;
      }
    }
    if (null == u4) {
      if (null == x3) return document.createTextNode(k3);
      u4 = document.createElementNS(o3, x3, k3.is && k3), c3 && (l.__m && l.__m(t3, e3), c3 = false), e3 = null;
    }
    if (null === x3) b === k3 || c3 && u4.data === k3 || (u4.data = k3);
    else {
      if (e3 = e3 && n.call(u4.childNodes), b = i4.props || p, !c3 && null != e3) for (b = {}, a3 = 0; a3 < u4.attributes.length; a3++) b[(w3 = u4.attributes[a3]).name] = w3.value;
      for (a3 in b) if (w3 = b[a3], "children" == a3) ;
      else if ("dangerouslySetInnerHTML" == a3) v3 = w3;
      else if (!(a3 in k3)) {
        if ("value" == a3 && "defaultValue" in k3 || "checked" == a3 && "defaultChecked" in k3) continue;
        F(u4, a3, null, w3, o3);
      }
      for (a3 in k3) w3 = k3[a3], "children" == a3 ? y3 = w3 : "dangerouslySetInnerHTML" == a3 ? h3 = w3 : "value" == a3 ? g2 = w3 : "checked" == a3 ? m3 = w3 : c3 && "function" != typeof w3 || b[a3] === w3 || F(u4, a3, w3, b[a3], o3);
      if (h3) c3 || v3 && (h3.__html === v3.__html || h3.__html === u4.innerHTML) || (u4.innerHTML = h3.__html), t3.__k = [];
      else if (v3 && (u4.innerHTML = ""), $(u4, d(y3) ? y3 : [y3], t3, i4, r3, "foreignObject" == x3 ? "http://www.w3.org/1999/xhtml" : o3, e3, f4, e3 ? e3[0] : i4.__k && C(i4, 0), c3, s3), null != e3) for (a3 = e3.length; a3--; ) _(e3[a3]);
      c3 || (a3 = "value", "progress" == x3 && null == g2 ? u4.removeAttribute("value") : void 0 !== g2 && (g2 !== u4[a3] || "progress" == x3 && !g2 || "option" == x3 && g2 !== b[a3]) && F(u4, a3, g2, b[a3], o3), a3 = "checked", void 0 !== m3 && m3 !== u4[a3] && F(u4, a3, m3, b[a3], o3));
    }
    return u4;
  }
  function V(n2, u4, t3) {
    try {
      if ("function" == typeof n2) {
        var i4 = "function" == typeof n2.__u;
        i4 && n2.__u(), i4 && null == u4 || (n2.__u = n2(u4));
      } else n2.current = u4;
    } catch (n3) {
      l.__e(n3, t3);
    }
  }
  function q(n2, u4, t3) {
    var i4, r3;
    if (l.unmount && l.unmount(n2), (i4 = n2.ref) && (i4.current && i4.current !== n2.__e || V(i4, null, u4)), null != (i4 = n2.__c)) {
      if (i4.componentWillUnmount) try {
        i4.componentWillUnmount();
      } catch (n3) {
        l.__e(n3, u4);
      }
      i4.base = i4.__P = null;
    }
    if (i4 = n2.__k) for (r3 = 0; r3 < i4.length; r3++) i4[r3] && q(i4[r3], u4, t3 || "function" != typeof n2.type);
    t3 || _(n2.__e), n2.__c = n2.__ = n2.__e = void 0;
  }
  function B(n2, l3, u4) {
    return this.constructor(n2, u4);
  }
  function D(u4, t3, i4) {
    var r3, o3, e3, f4;
    t3 == document && (t3 = document.documentElement), l.__ && l.__(u4, t3), o3 = (r3 = "function" == typeof i4) ? null : i4 && i4.__k || t3.__k, e3 = [], f4 = [], j(t3, u4 = (!r3 && i4 || t3).__k = g(k, null, [u4]), o3 || p, p, t3.namespaceURI, !r3 && i4 ? [i4] : o3 ? null : t3.firstChild ? n.call(t3.childNodes) : null, e3, !r3 && i4 ? i4 : o3 ? o3.__e : t3.firstChild, r3, f4), z(e3, u4, f4);
  }
  function J(n2, l3) {
    var u4 = { __c: l3 = "__cC" + h++, __: n2, Consumer: function(n3, l4) {
      return n3.children(l4);
    }, Provider: function(n3) {
      var u5, t3;
      return this.getChildContext || (u5 = /* @__PURE__ */ new Set(), (t3 = {})[l3] = this, this.getChildContext = function() {
        return t3;
      }, this.componentWillUnmount = function() {
        u5 = null;
      }, this.shouldComponentUpdate = function(n4) {
        this.props.value !== n4.value && u5.forEach(function(n5) {
          n5.__e = true, M(n5);
        });
      }, this.sub = function(n4) {
        u5.add(n4);
        var l4 = n4.componentWillUnmount;
        n4.componentWillUnmount = function() {
          u5 && u5.delete(n4), l4 && l4.call(n4);
        };
      }), n3.children;
    } };
    return u4.Provider.__ = u4.Consumer.contextType = u4;
  }
  n = v.slice, l = { __e: function(n2, l3, u4, t3) {
    for (var i4, r3, o3; l3 = l3.__; ) if ((i4 = l3.__c) && !i4.__) try {
      if ((r3 = i4.constructor) && null != r3.getDerivedStateFromError && (i4.setState(r3.getDerivedStateFromError(n2)), o3 = i4.__d), null != i4.componentDidCatch && (i4.componentDidCatch(n2, t3 || {}), o3 = i4.__d), o3) return i4.__E = i4;
    } catch (l4) {
      n2 = l4;
    }
    throw n2;
  } }, u = 0, t = function(n2) {
    return null != n2 && null == n2.constructor;
  }, x.prototype.setState = function(n2, l3) {
    var u4;
    u4 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = w({}, this.state), "function" == typeof n2 && (n2 = n2(w({}, u4), this.props)), n2 && w(u4, n2), null != n2 && this.__v && (l3 && this._sb.push(l3), M(this));
  }, x.prototype.forceUpdate = function(n2) {
    this.__v && (this.__e = true, n2 && this.__h.push(n2), M(this));
  }, x.prototype.render = k, i = [], o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, e = function(n2, l3) {
    return n2.__v.__b - l3.__v.__b;
  }, P.__r = 0, f = /(PointerCapture)$|Capture$/i, c = 0, s = O(false), a = O(true), h = 0;

  // packages/server/src/elements.ts
  function cssID(key) {
    return `id-${key}`;
  }
  function cssClass(key) {
    return `cl-${key}`;
  }
  function dataKey(key) {
    return `data-${key}`;
  }

  // packages/frontend/src/auxiliar/dom.ts
  var doc = typeof document === "undefined" ? void 0 : document;
  var $2 = doc?.querySelector.bind(doc);
  var $$ = doc?.querySelectorAll.bind(doc);
  var elem = (key) => $2(`#${cssID(key)}`) ?? void 0;
  var elems = (key) => $$(`.${cssClass(key)}`);
  var data = (el, key) => el?.getAttribute(dataKey(key)) ?? void 0;
  function onClickOnEnter(action) {
    return {
      onClick: (ev) => {
        ev.stopPropagation();
        action(ev);
      },
      onKeyDown: (ev) => {
        ev.stopPropagation();
        if (ev.key === "Enter") {
          ev.preventDefault();
          action(ev);
        }
      }
    };
  }

  // packages/frontend/src/auxiliar/events.ts
  function on(target, type, listener, opt) {
    if (!target) console.warn("missing target", { type, listener, opt });
    target?.addEventListener(type, listener, opt);
    if (target) return () => off(target, type, listener, opt);
  }
  function off(target, type, listener, opt) {
    if (!target) console.warn("missing target", { type, listener, opt });
    target?.removeEventListener(type, listener, opt);
  }
  function send(target, ev) {
    if (!target) console.warn("missing target", ev);
    return target?.dispatchEvent(ev);
  }
  function customEvent(type, detail, options = { bubbles: true, composed: true, cancelable: void 0 }) {
    return new CustomEvent(type, { detail, ...options });
  }
  function handler(action) {
    return (ev) => {
      if (ev.target && "tagName" in ev.target) action(ev.target, ev);
    };
  }

  // node_modules/rison2/lib/token.mjs
  var NULL = "!n";
  var TRUE = "!t";
  var FALSE = "!f";
  var OBJECT_START = "(";
  var ARRAY_START = "!(";
  var OBJECT_ARRAY_END = ")";
  var COLON = ":";
  var COMMA = ",";
  var STRING = "string";
  var NUMBER = "number";

  // node_modules/rison2/lib/lexer.mjs
  var rules = {
    quote: () => (source, pos) => {
      if (!source.startsWith("'", pos))
        return null;
      let i4 = pos;
      while (true) {
        if (source.length <= ++i4) {
          throw new SyntaxError(`Unexpected end of Rison input`);
        }
        switch (source[i4]) {
          case "!":
            i4++;
            continue;
          case "'":
            return { kind: STRING, value: source.slice(pos, i4 + 1) };
        }
      }
    },
    string: (kind) => (source, pos) => source.startsWith(kind, pos) ? { kind, value: kind } : null,
    regexp: (kind, reg) => (source, pos) => {
      const match = reg.exec(source.slice(pos));
      return match ? { kind, value: match[0] } : null;
    }
  };
  var RULES = [
    rules.quote(),
    rules.string(OBJECT_START),
    rules.string(ARRAY_START),
    rules.string(OBJECT_ARRAY_END),
    rules.string(NULL),
    rules.string(TRUE),
    rules.string(FALSE),
    rules.string(COLON),
    rules.string(COMMA),
    rules.regexp(STRING, /^[^0-9- '!:(),*@$][^ '!:(),*@$]*/),
    rules.regexp(NUMBER, /^-?([1-9][0-9]*|[0-9])(\.[0-9]+)?(e-?[0-9]+)?/)
  ];
  var Lexer = class {
    source;
    pos = 0;
    constructor(source) {
      this.source = source;
    }
    position() {
      return this.pos;
    }
    length() {
      return this.source.length;
    }
    nextToken() {
      if (this.pos >= this.source.length)
        return null;
      for (const rule of RULES) {
        const token = rule(this.source, this.pos);
        if (token !== null) {
          this.pos += token.value.length;
          return token;
        }
      }
      throw new SyntaxError(`Unexpected token ${this.source[this.pos]} in Rison at position ${this.pos}`);
    }
    syntaxError(token) {
      const pos = this.pos - token.value.length;
      return new SyntaxError(`Unexpected token ${this.source[pos]} in Rison at position ${pos}`);
    }
  };

  // node_modules/rison2/lib/parser.mjs
  var Parser = class {
    lexer;
    constructor(lexer) {
      this.lexer = lexer;
    }
    readAsAny() {
      const val = this.asAny(this.nextToken());
      if (this.lexer.position() < this.lexer.length()) {
        throw this.lexer.syntaxError(this.nextToken());
      }
      return val;
    }
    asAny(token) {
      switch (token.kind) {
        case NULL:
          return null;
        case TRUE:
          return true;
        case FALSE:
          return false;
        case STRING:
          return this.asString(token);
        case NUMBER:
          return Number(token.value);
        case OBJECT_START:
          return this.readAsObject();
        case ARRAY_START:
          return this.readAsArray();
        default:
          throw this.lexer.syntaxError(token);
      }
    }
    asString(token) {
      return token.value[0] === "'" ? token.value.replace(/!./g, (c3) => c3[1]).slice(1, -1) : token.value;
    }
    readAsObject() {
      const obj = {};
      let token = this.nextToken();
      while (token.kind !== OBJECT_ARRAY_END) {
        const key = this.asString(token);
        this.expectToken(COLON);
        const val = this.asAny(this.nextToken());
        obj[key] = val;
        token = this.nextToken();
        if (token.kind === OBJECT_ARRAY_END)
          break;
        if (token.kind !== COMMA)
          throw this.lexer.syntaxError(token);
        token = this.nextToken();
      }
      return obj;
    }
    readAsArray() {
      const arr = [];
      let token = this.nextToken();
      while (token.kind !== OBJECT_ARRAY_END) {
        arr.push(this.asAny(token));
        token = this.nextToken();
        if (token.kind === OBJECT_ARRAY_END)
          break;
        if (token.kind !== COMMA)
          throw this.lexer.syntaxError(token);
        token = this.nextToken();
      }
      return arr;
    }
    expectToken(kind) {
      const token = this.nextToken();
      if (token.kind !== kind)
        throw this.lexer.syntaxError(token);
    }
    nextToken() {
      const token = this.lexer.nextToken();
      if (!token)
        throw new SyntaxError(`Unexpected end of Rison input`);
      return token;
    }
  };

  // node_modules/rison2/lib/stringifier.mjs
  var ID_REGEXP = /^[^0-9- '!:(),*@$][^ '!:(),*@$]*$/;
  var Stringifier = class {
    value(value) {
      if (value === void 0)
        return void 0;
      if (value === null)
        return NULL;
      switch (typeof value) {
        case "object":
          return Array.isArray(value) ? `${ARRAY_START}${this.array(value)}${OBJECT_ARRAY_END}` : `${OBJECT_START}${this.object(value)}${OBJECT_ARRAY_END}`;
        case "boolean":
          return this.boolean(value);
        case "number":
          return this.number(value);
        case "string":
          return this.string(value);
        case "bigint":
          throw new TypeError("Do not known how to serialize a BigInt");
        default:
          return void 0;
      }
    }
    object(value) {
      return Object.entries(value).reduce((prev, [key, value2]) => {
        const str = this.value(value2);
        if (str === void 0)
          return prev;
        const pair = `${this.string(key)}${COLON}${str}`;
        return prev.length > 0 ? `${prev}${COMMA}${pair}` : pair;
      }, "");
    }
    array(value) {
      return value.reduce((prev, value2) => {
        const str = this.value(value2) || NULL;
        return prev.length > 0 ? `${prev}${COMMA}${str}` : str;
      }, "");
    }
    boolean(value) {
      return value ? TRUE : FALSE;
    }
    number(value) {
      return Number.isFinite(value) ? value.toString().replace("+", "") : NULL;
    }
    string(value) {
      return ID_REGEXP.test(value) ? value : `'${value.replace(/[!']/g, (c3) => `!${c3}`)}'`;
    }
  };

  // node_modules/rison2/lib/rison.mjs
  var RISON = {
    parse: (text2) => {
      const lexer = new Lexer(text2);
      const parser = new Parser(lexer);
      return parser.readAsAny();
    },
    stringify: (value) => {
      const stringifier = new Stringifier();
      return stringifier.value(value);
    }
  };

  // node_modules/rison2/lib/escaped.mjs
  var ESCAPE_NO_REQUIRED = /^[-A-Za-z0-9~!*()_.',:@$/]*$/;
  var escape = (str) => {
    if (ESCAPE_NO_REQUIRED.test(str))
      return str;
    return encodeURIComponent(str).replace(/%2C/g, ",").replace(/%3A/g, ":").replace(/%40/g, "@").replace(/%24/g, "$").replace(/%2F/g, "/").replace(/%20/g, "+");
  };
  var unescape = (str) => decodeURIComponent(str.replace(/\+/g, "%20"));
  var RISON2 = {
    parse: (text2) => RISON.parse(unescape(text2)),
    stringify: (value) => escape(RISON.stringify(value))
  };
  var parse = RISON2.parse;
  var stringify = RISON2.stringify;

  // node_modules/rison2/lib/index.mjs
  var parse2 = RISON.parse;
  var stringify2 = RISON.stringify;

  // packages/auxiliar/src/misc.ts
  var ret = (item, action) => action(item);
  var tap = (item, action) => {
    action(item);
    return item;
  };
  function isEmpty(obj) {
    for (const prop2 in obj) {
      if (Object.hasOwn(obj, prop2)) return false;
    }
    return true;
  }

  // packages/frontend/src/auxiliar/fragment.ts
  var win = typeof window === "undefined" ? void 0 : window;
  function getFragment(fragmentOrURL) {
    if (!fragmentOrURL) return "";
    if (fragmentOrURL instanceof URL || fragmentOrURL instanceof Location) return fragmentOrURL.hash.slice(1);
    const hashIndex = fragmentOrURL.indexOf("#");
    return hashIndex !== -1 ? fragmentOrURL.slice(hashIndex + 1) : fragmentOrURL;
  }
  var FragmentTracker = class extends EventTarget {
    #fragment = win.location.hash.slice(1);
    #previous;
    /** Keep a reference so we can remove it if needed (with {@link destroy}). */
    #boundedHandler;
    // biome-ignore lint/suspicious/noExplicitAny: Return of RISON.parse is any.
    static deserialize(fragment = win.location.hash) {
      try {
        const data2 = fragment.slice(fragment.indexOf("#") + 1).trim();
        if (data2.length > 2 && data2.startsWith("(") && data2.endsWith(")")) return RISON.parse(data2);
      } catch (e3) {
        console.warn("Failed to parse RISON:", fragment, e3);
      }
    }
    // biome-ignore lint/suspicious/noExplicitAny: RISON.stringify can serialize any data.
    static serialize(data2) {
      try {
        if (isEmpty(data2)) return void 0;
        return RISON.stringify(data2);
      } catch (e3) {
        console.error("Failed to serialize data", e3);
      }
    }
    /** Call this to bind the tracker to the hashchange event of the window. */
    bind() {
      this.destroy();
      this.#boundedHandler = this.#hashChangeHandler.bind(this);
      win.addEventListener("hashchange", this.#boundedHandler);
      return this;
    }
    /** Remove the hashchange event listener off the window. */
    destroy() {
      if (this.#boundedHandler) {
        win.removeEventListener("hashchange", this.#boundedHandler);
        this.#boundedHandler = void 0;
      }
    }
    get fragment() {
      return this.#fragment;
    }
    get previous() {
      return this.#previous;
    }
    /**
     * Handler for 'hashchange': this must come from user action (or 3rd party code :-/) since
     * updates through this class use history.pushState, which doesn't trigger hashchange.
     */
    #hashChangeHandler({ newURL, oldURL }) {
      const newFragment = getFragment(newURL);
      if (newFragment !== this.#fragment) {
        this.#previous = getFragment(oldURL);
        this.#fragment = newFragment;
        this.dispatchEvent(this.#createEvent(FRAGMENT_USER_CHANGE));
        this.dispatchEvent(this.#createEvent(FRAGMENT_CHANGE));
      }
    }
    /**
     * This method will use history.pushState, so it won't trigger a {@link FRAGMENT_USER_CHANGE}.
     * https://developer.mozilla.org/en-US/docs/Web/API/History/pushState#description
     */
    pushState(fragmentOrURL) {
      const newFragment = getFragment(fragmentOrURL);
      if (newFragment !== this.#fragment) {
        this.#previous = this.#fragment;
        this.#fragment = newFragment;
        history.pushState(null, "", `#${newFragment}`);
        this.dispatchEvent(this.#createEvent(FRAGMENT_CHANGE));
      }
    }
    /**
     * Updates fragment using window.location.hash,
     * which will trigger both {@link FRAGMENT_USER_CHANGE} and {@link FRAGMENT_CHANGE}.
     * Useful for programmatically simulating user navigation.
     */
    update(fragmentOrURL) {
      win.location.hash = getFragment(fragmentOrURL);
    }
    onUserChange(callback) {
      return on(this, FRAGMENT_USER_CHANGE, callback);
    }
    #createEvent(type) {
      return new FragmentChangeEvent(type, { fragment: this.#fragment, previous: this.#previous });
    }
  };
  var FRAGMENT_CHANGE = "fragmentchange";
  var FRAGMENT_USER_CHANGE = "fragmentuserchange";
  var FragmentChangeEvent = class extends CustomEvent {
    constructor(type, detail, options = { bubbles: true, cancelable: void 0, composed: true }) {
      super(type, { ...options, detail });
    }
    get fragment() {
      return this.detail.fragment;
    }
    get previous() {
      return this.detail.previous;
    }
    /** Attempt to deserialize RISON data. */
    // biome-ignore lint/suspicious/noExplicitAny: RISON data can be anything.
    get deserFrag() {
      return FragmentTracker.deserialize(this.detail.fragment);
    }
    /** Attempt to deserialize RISON data. */
    // biome-ignore lint/suspicious/noExplicitAny: RISON data can be anything.
    get deserPrev() {
      const { previous } = this.detail;
      return previous ? FragmentTracker.deserialize(previous) : void 0;
    }
  };

  // packages/frontend/src/auxiliar/livereload.ts
  var pingTimer;
  var INITIAL_TIMEOUT_MS = 1e3;
  var PING_FREQ_MS = 10;
  var RELOAD_LATENCY_MS = 10;
  function connectLivereload(timeout = INITIAL_TIMEOUT_MS, lifecycle = "start") {
    if (pingTimer) {
      clearInterval(pingTimer);
      pingTimer = void 0;
    }
    const reconnect = () => {
      console.info("attempting livereload reconnect in", timeout, "ms");
      setTimeout(() => connectLivereload(timeout * 1.5, "error"), timeout);
    };
    const reload = () => {
      setTimeout(() => window.location.reload(), RELOAD_LATENCY_MS);
    };
    const socket = new WebSocket("/livereload");
    socket.addEventListener("open", () => {
      if (lifecycle === "error") return reload();
      socket.send("CONNECT");
      pingTimer = setInterval(() => socket.readyState === WebSocket.OPEN && socket.send("PING"), PING_FREQ_MS);
    });
    socket.addEventListener("message", (event) => {
      if (event.data === "ACK") console.info("livereload connected", /* @__PURE__ */ new Date());
      if (event.data === "RELOAD") reload();
    });
    socket.addEventListener("close", (event) => {
      reconnect();
    });
  }

  // node_modules/preact/hooks/dist/hooks.module.js
  var t2;
  var r2;
  var u2;
  var i2;
  var o2 = 0;
  var f2 = [];
  var c2 = l;
  var e2 = c2.__b;
  var a2 = c2.__r;
  var v2 = c2.diffed;
  var l2 = c2.__c;
  var m2 = c2.unmount;
  var s2 = c2.__;
  function d2(n2, t3) {
    c2.__h && c2.__h(r2, n2, o2 || t3), o2 = 0;
    var u4 = r2.__H || (r2.__H = { __: [], __h: [] });
    return n2 >= u4.__.length && u4.__.push({}), u4.__[n2];
  }
  function h2(n2) {
    return o2 = 1, p2(D2, n2);
  }
  function p2(n2, u4, i4) {
    var o3 = d2(t2++, 2);
    if (o3.t = n2, !o3.__c && (o3.__ = [i4 ? i4(u4) : D2(void 0, u4), function(n3) {
      var t3 = o3.__N ? o3.__N[0] : o3.__[0], r3 = o3.t(t3, n3);
      t3 !== r3 && (o3.__N = [r3, o3.__[1]], o3.__c.setState({}));
    }], o3.__c = r2, !r2.u)) {
      var f4 = function(n3, t3, r3) {
        if (!o3.__c.__H) return true;
        var u5 = o3.__c.__H.__.filter(function(n4) {
          return !!n4.__c;
        });
        if (u5.every(function(n4) {
          return !n4.__N;
        })) return !c3 || c3.call(this, n3, t3, r3);
        var i5 = o3.__c.props !== n3;
        return u5.forEach(function(n4) {
          if (n4.__N) {
            var t4 = n4.__[0];
            n4.__ = n4.__N, n4.__N = void 0, t4 !== n4.__[0] && (i5 = true);
          }
        }), c3 && c3.call(this, n3, t3, r3) || i5;
      };
      r2.u = true;
      var c3 = r2.shouldComponentUpdate, e3 = r2.componentWillUpdate;
      r2.componentWillUpdate = function(n3, t3, r3) {
        if (this.__e) {
          var u5 = c3;
          c3 = void 0, f4(n3, t3, r3), c3 = u5;
        }
        e3 && e3.call(this, n3, t3, r3);
      }, r2.shouldComponentUpdate = f4;
    }
    return o3.__N || o3.__;
  }
  function y2(n2, u4) {
    var i4 = d2(t2++, 3);
    !c2.__s && C2(i4.__H, u4) && (i4.__ = n2, i4.i = u4, r2.__H.__h.push(i4));
  }
  function A2(n2) {
    return o2 = 5, T2(function() {
      return { current: n2 };
    }, []);
  }
  function T2(n2, r3) {
    var u4 = d2(t2++, 7);
    return C2(u4.__H, r3) && (u4.__ = n2(), u4.__H = r3, u4.__h = n2), u4.__;
  }
  function x2(n2) {
    var u4 = r2.context[n2.__c], i4 = d2(t2++, 9);
    return i4.c = n2, u4 ? (null == i4.__ && (i4.__ = true, u4.sub(r2)), u4.props.value) : n2.__;
  }
  function j2() {
    for (var n2; n2 = f2.shift(); ) if (n2.__P && n2.__H) try {
      n2.__H.__h.forEach(z2), n2.__H.__h.forEach(B2), n2.__H.__h = [];
    } catch (t3) {
      n2.__H.__h = [], c2.__e(t3, n2.__v);
    }
  }
  c2.__b = function(n2) {
    r2 = null, e2 && e2(n2);
  }, c2.__ = function(n2, t3) {
    n2 && t3.__k && t3.__k.__m && (n2.__m = t3.__k.__m), s2 && s2(n2, t3);
  }, c2.__r = function(n2) {
    a2 && a2(n2), t2 = 0;
    var i4 = (r2 = n2.__c).__H;
    i4 && (u2 === r2 ? (i4.__h = [], r2.__h = [], i4.__.forEach(function(n3) {
      n3.__N && (n3.__ = n3.__N), n3.i = n3.__N = void 0;
    })) : (i4.__h.forEach(z2), i4.__h.forEach(B2), i4.__h = [], t2 = 0)), u2 = r2;
  }, c2.diffed = function(n2) {
    v2 && v2(n2);
    var t3 = n2.__c;
    t3 && t3.__H && (t3.__H.__h.length && (1 !== f2.push(t3) && i2 === c2.requestAnimationFrame || ((i2 = c2.requestAnimationFrame) || w2)(j2)), t3.__H.__.forEach(function(n3) {
      n3.i && (n3.__H = n3.i), n3.i = void 0;
    })), u2 = r2 = null;
  }, c2.__c = function(n2, t3) {
    t3.some(function(n3) {
      try {
        n3.__h.forEach(z2), n3.__h = n3.__h.filter(function(n4) {
          return !n4.__ || B2(n4);
        });
      } catch (r3) {
        t3.some(function(n4) {
          n4.__h && (n4.__h = []);
        }), t3 = [], c2.__e(r3, n3.__v);
      }
    }), l2 && l2(n2, t3);
  }, c2.unmount = function(n2) {
    m2 && m2(n2);
    var t3, r3 = n2.__c;
    r3 && r3.__H && (r3.__H.__.forEach(function(n3) {
      try {
        z2(n3);
      } catch (n4) {
        t3 = n4;
      }
    }), r3.__H = void 0, t3 && c2.__e(t3, r3.__v));
  };
  var k2 = "function" == typeof requestAnimationFrame;
  function w2(n2) {
    var t3, r3 = function() {
      clearTimeout(u4), k2 && cancelAnimationFrame(t3), setTimeout(n2);
    }, u4 = setTimeout(r3, 100);
    k2 && (t3 = requestAnimationFrame(r3));
  }
  function z2(n2) {
    var t3 = r2, u4 = n2.__c;
    "function" == typeof u4 && (n2.__c = void 0, u4()), r2 = t3;
  }
  function B2(n2) {
    var t3 = r2;
    n2.__c = n2.__(), r2 = t3;
  }
  function C2(n2, t3) {
    return !n2 || n2.length !== t3.length || t3.some(function(t4, r3) {
      return t4 !== n2[r3];
    });
  }
  function D2(n2, t3) {
    return "function" == typeof t3 ? t3(n2) : t3;
  }

  // packages/frontend/src/auxiliar/dispatchable.ts
  var Dispatchable = class {
    constructor(data2) {
      this.data = data2;
    }
    clone() {
      const Ctor = this.constructor;
      const clone = new Ctor(this.data);
      clone.dispatcher = this.dispatcher;
      return clone;
    }
    dispatch() {
      this.dispatcher?.(this.clone());
      return this;
    }
  };
  function useDispatchable(factory) {
    const [state, dispatcher] = h2(factory);
    state.dispatcher = dispatcher;
    return state;
  }
  function useRootState(state) {
    const ref = A2();
    y2(() => {
      const root = ref.current?.parentElement;
      if (root && state) root.state = state;
    }, [state]);
    return ref;
  }

  // packages/frontend/src/auxiliar/styles.ts
  var VSCROLL = "overflow-hidden overflow-y-auto";
  var BORDER = "border-primary/85 border-dotted";
  var INPUT = "bg-background text-foreground placeholder:text-foreground/50 mx-2";
  var HOVER = "hover:bg-hiliteb/75 hover:text-hilitef cursor-pointer";
  var HOVER_ICON = "rounded p-1 hover:bg-primary/20 hover:text-hiliteb hover:ring-2 hover:ring-primary";
  var HOVER_ICON_BG = "rounded-2xl hover:bg-background/20 hover:text-hiliteb";
  var PROSE_BASIC = "prose dark:prose-invert sm:prose-sm lg:prose-lg xl:prose-xl";
  var PROSE = `${PROSE_BASIC} max-w-[80ch] mx-auto`;
  function tw(...classes) {
    return classes.flat(5).filter((s3) => typeof s3 === "string" && !/^;|;$/.test(s3)).join(" ");
  }

  // node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
  var f3 = 0;
  var i3 = Array.isArray;
  function u3(e3, t3, n2, o3, i4, u4) {
    t3 || (t3 = {});
    var a3, c3, l3 = t3;
    "ref" in t3 && (a3 = t3.ref, delete t3.ref);
    var p3 = { type: e3, props: l3, key: n2, ref: a3, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --f3, __i: -1, __u: 0, __source: i4, __self: u4 };
    if ("function" == typeof e3 && (a3 = e3.defaultProps)) for (c3 in a3) void 0 === l3[c3] && (l3[c3] = a3[c3]);
    return l.vnode && l.vnode(p3), p3;
  }

  // packages/frontend/src/auxiliar/icons.tsx
  var CSS = "fill-current size-[1.5rem] sm:size-[1.75rem] lg:size-[2rem] xl:size-[2.25rem] 2xl:size-[2.5rem]";
  var ABC = /* @__PURE__ */ u3("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", class: CSS, children: [
    /* @__PURE__ */ u3("title", { children: "Alphabetic" }),
    /* @__PURE__ */ u3("path", { d: "M3.0805,8.3675,2.31,10.878c-.028.091-.0705.122-.154.122H.756c-.0845,0-.1125-.0455-.1-.15L3.5425,1.9285A2.51436,2.51436,0,0,0,3.669,1.107c0-.0615.028-.107.084-.107H5.7c.0705,0,.084.015.1.0915L9.0355,10.863c.0145.0915,0,.137-.084.137H7.381a.14051.14051,0,0,1-.1405-.0915L6.428,8.3675Zm2.9-1.6595c-.294-1.005-.9525-3.12-1.233-4.1855h-.014c-.224,1.02-.785,2.8-1.2045,4.1855Z" }),
    /* @__PURE__ */ u3("path", { d: "M9.613,17c-.0565,0-.1125-.015-.1125-.122v-1.02a.346.346,0,0,1,.042-.1825l4.861-7.032H9.711c-.0705,0-.1125-.0145-.1-.106l.21-1.4155C9.835,7.031,9.877,7,9.9465,7H16.463c.069,0,.084.031.084.0915v1.096a.3265.3265,0,0,1-.0705.213L11.7,15.3415h5.015c.069,0,.1.0455.069.137l-.2235,1.4c-.0135.091-.042.122-.126.122Z" })
  ] });
  var RANKING = /* @__PURE__ */ u3("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", class: CSS, children: [
    /* @__PURE__ */ u3("title", { children: "Ranking" }),
    /* @__PURE__ */ u3("path", { d: "M14.259,7.6a2.3635,2.3635,0,0,0,1.6805-2.2255c0-1.521-1.0885-2.625-3.0895-2.625a5.365,5.365,0,0,0-2.561.6245.13949.13949,0,0,0-.064.144V4.542c0,.064.0165.0795.0965.05A4.33146,4.33146,0,0,1,12.626,3.95c1.4085,0,2,.688,2,1.584,0,1.0245-.8645,1.569-2.273,1.569h-.591c-.08,0-.096.05-.096.112V8.223c0,.064.032.096.112.096h.672c1.5845,0,2.641.5765,2.641,1.857,0,1.009-.704,1.8725-2.4325,1.8725a7.11785,7.11785,0,0,1-2.497-.654,3.79252,3.79252,0,0,0,.3305-1.54,3.01569,3.01569,0,0,0-3.224-3.192A6.30249,6.30249,0,0,0,4.5,7.392V1.625a.375.375,0,0,0-.375-.375H3.379a.3735.3735,0,0,0-.3.15L1.65,2.545a.747.747,0,0,0-.15.45v.124a.375.375,0,0,0,.375.375H3v7.125a.375.375,0,0,0,.375.375h.75a.375.375,0,0,0,.375-.375V8.7775a5.26947,5.26947,0,0,1,2.516-.754c1.2735,0,2.05.6225,2.05,1.8765,0,.9625-.4695,1.8975-1.9,3.4775A24.53582,24.53582,0,0,1,4.6,15.897a.25.25,0,0,0-.0845.2095v.709c0,.161.106.1845.169.1845H10.575c.1185,0,.156-.0425.2-.15l.235-.9755a.135.135,0,0,0-.0175-.1215.17851.17851,0,0,0-.15-.05H8.669c-1.209,0-1.457,0-1.932.031a15.25015,15.25015,0,0,0,1.859-2.0125c.3735-.4585.6955-.874.9695-1.275a8.3231,8.3231,0,0,0,3.1085.805c2.161,0,3.7775-1.104,3.7775-3.073A2.611,2.611,0,0,0,14.259,7.6Z" })
  ] });
  var SUN = /* @__PURE__ */ u3("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", class: CSS, children: [
    /* @__PURE__ */ u3("title", { children: "Sun" }),
    /* @__PURE__ */ u3("path", { d: "m9,5.05c2.18152,0,3.95,1.76848,3.95,3.95s-1.76848,3.95-3.95,3.95-3.95-1.76848-3.95-3.95,1.76848-3.95,3.95-3.95Zm-.9-4.8v2.5c0,.13807.11193.25.25.25h1.3c.13807,0,.25-.11193.25-.25V.25c0-.13807-.11193-.25-.25-.25h-1.3c-.13807,0-.25.11193-.25.25Zm0,15v2.5c0,.13807.11193.25.25.25h1.3c.13807,0,.25-.11193.25-.25v-2.5c0-.13807-.11193-.25-.25-.25h-1.3c-.13807,0-.25.11193-.25.25ZM0,8.35v1.3c0,.13807.11193.25.25.25h2.5c.13807,0,.25-.11193.25-.25v-1.3c0-.13807-.11193-.25-.25-.25H.25c-.13807,0-.25.11193-.25.25Zm15,0v1.3c0,.13807.11193.25.25.25h2.5c.13807,0,.25-.11193.25-.25v-1.3c0-.13807-.11193-.25-.25-.25h-2.5c-.13807,0-.25.11193-.25.25Zm-2.01021-4.23913l.91924.91924c.09763.09763.25592.09763.35355,0l1.76777-1.76777c.09763-.09763.09763-.25592,0-.35355l-.91924-.91924c-.09763-.09763-.25592-.09763-.35355,0l-1.76777,1.76777c-.09763.09763-.09763.25592,0,.35355ZM1.98978,15.11121l.91924.91924c.09763.09763.25592.09763.35355,0l1.76777-1.76777c.09763-.09763.09763-.25592,0-.35355l-.91924-.91924c-.09763-.09763-.25592-.09763-.35355,0l-1.76777,1.76777c-.09763.09763-.09763.25592,0,.35355Zm-.01031-11.8587l1.76777,1.76777c.09763.09763.25592.09763.35355,0l.91924-.91924c.09763-.09763.09763-.25592,0-.35355l-1.76777-1.76777c-.09763-.09763-.25592-.09763-.35355,0l-.91924.91924c-.09763.09763-.09763.25592,0,.35355Zm10.9902,10.99001l1.76777,1.76777c.09763.09763.25592.09763.35355,0l.91924-.91924c.09763-.09763.09763-.25592,0-.35355l-1.76777-1.76777c-.09763-.09763-.25592-.09763-.35355,0l-.91924.91924c-.09763.09763-.09763.25592,0,.35355Z" })
  ] });
  var MOON = /* @__PURE__ */ u3("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", class: CSS, children: [
    /* @__PURE__ */ u3("title", { children: "Moon" }),
    /* @__PURE__ */ u3("path", { d: "M9,1a8,8,0,1,0,8,8A8,8,0,0,0,9,1Zm.5,14.982c-.165.0115-.332.018-.5.018A7,7,0,0,1,9,2c.168,0,.335.0065.5.018A11,11,0,0,0,9.5,15.982Z" })
  ] });
  var MENU = /* @__PURE__ */ u3("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", class: CSS, children: [
    /* @__PURE__ */ u3("title", { children: "Menu" }),
    /* @__PURE__ */ u3("rect", { height: "2", rx: "0.5", width: "14", x: "2", y: "8" }),
    /* @__PURE__ */ u3("rect", { height: "2", rx: "0.5", width: "14", x: "2", y: "3" }),
    /* @__PURE__ */ u3("rect", { height: "2", rx: "0.5", width: "14", x: "2", y: "13" })
  ] });
  var CLOSE = /* @__PURE__ */ u3("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", class: CSS, children: [
    /* @__PURE__ */ u3("title", { children: "Close" }),
    /* @__PURE__ */ u3("path", { d: "M13.2425,3.343,9,7.586,4.7575,3.343a.5.5,0,0,0-.707,0L3.343,4.05a.5.5,0,0,0,0,.707L7.586,9,3.343,13.2425a.5.5,0,0,0,0,.707l.707.7075a.5.5,0,0,0,.707,0L9,10.414l4.2425,4.243a.5.5,0,0,0,.707,0l.7075-.707a.5.5,0,0,0,0-.707L10.414,9l4.243-4.2425a.5.5,0,0,0,0-.707L13.95,3.343a.5.5,0,0,0-.70711-.00039Z" })
  ] });
  var FILTER_EDIT = /* @__PURE__ */ u3("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", class: CSS, children: [
    /* @__PURE__ */ u3("title", { children: "Filter Edit" }),
    /* @__PURE__ */ u3("path", { d: "M17.8925,10.8605,16.14,9.1075A.36952.36952,0,0,0,15.8765,9H15.865a.41651.41651,0,0,0-.282.1235l-5.411,5.411a.304.304,0,0,0-.0765.128l-1.0135,3c-.0345.1145.1395.2585.238.2585a.15858.15858,0,0,0,.0185,0c.084-.0195,2.5615-.882,3-1.014a.3.3,0,0,0,.126-.0755l5.412-5.4145A.41749.41749,0,0,0,18,11.15.37152.37152,0,0,0,17.8925,10.8605Zm-5.8,5.4815c-.657.1975-1.65.6145-2.215.784l.78-2.2155Z" }),
    /* @__PURE__ */ u3("path", { d: "M15.473,1H1.527a.5.5,0,0,0-.3935.8085L7,9.2945V15a.496.496,0,0,0,.84.4125L9.83,13.336a.61.61,0,0,0,.17-.4225V9.2945l5.8665-7.486A.5.5,0,0,0,15.473,1Z" })
  ] });
  var BOOLEAN = /* @__PURE__ */ u3("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", class: CSS, children: [
    /* @__PURE__ */ u3("title", { children: "Boolean" }),
    /* @__PURE__ */ u3("path", { d: "M12,4.25a4.75,4.75,0,0,1,0,9.5H6a4.75,4.75,0,0,1,0-9.5ZM12,3H6A6,6,0,0,0,6,15h6A6,6,0,0,0,12,3Zm0,3A3,3,0,1,1,9,9,3,3,0,0,1,12,6Z" })
  ] });
  var DESELECT = /* @__PURE__ */ u3("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", class: CSS, children: [
    /* @__PURE__ */ u3("title", { children: "Reset Selection" }),
    /* @__PURE__ */ u3("path", { d: "m2,9h1v3h-1v-3Zm1,6v-1h-1v1.5555c0,.24549.19901.4445.4445.4445h1.5555v-1h-1Zm3,1h3v-1h-3v1Zm9-7h1v-3h-1v3Zm.5555-7h-1.5555v1h1v1h1v-1.5555c0-.24549-.19901-.4445-.4445-.4445Zm-6.5555,1h3v-1h-3v1ZM1.10295,1.97065l14.92632,14.92632c.15973.15973.41869.15972.57841,0l.28956-.28956c.15972-.15972.15973-.41869,0-.57841L1.97092,1.10268c-.15972-.15972-.41869-.15972-.57841,0l-.28956.28956c-.15972.15972-.15972.41869,0,.57841Zm14.89705,11.74835v-2.719h-1v1.719l1,1Zm-3.282,1.281h-1.718v1h2.718l-1-1ZM2,4.281v2.719h1v-1.719l-1-1Zm3.281-1.281h1.719v-1h-2.719l1,1Z" })
  ] });
  var SORT_DOWN = /* @__PURE__ */ u3("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", class: CSS, children: [
    /* @__PURE__ */ u3("title", { children: "Sort Down" }),
    /* @__PURE__ */ u3("rect", { id: "Canvas", fill: "#ff13dc", opacity: "0", width: "18", height: "18" }),
    /* @__PURE__ */ u3("rect", { height: "2", rx: "0.5", width: "6", x: "1", y: "12" }),
    /* @__PURE__ */ u3("rect", { height: "2", rx: "0.5", width: "8", x: "1", y: "8" }),
    /* @__PURE__ */ u3("rect", { height: "2", rx: "0.5", width: "10", x: "1", y: "4" }),
    /* @__PURE__ */ u3("path", { d: "M16,12H14.9965V4.5a.494.494,0,0,0-.488-.5L14.503,4h-.496a.5.5,0,0,0-.5.5L13.5035,12H12.5a.25.25,0,0,0-.25.25.245.245,0,0,0,.0735.175l1.7685,2.0165a.25.25,0,0,0,.316,0l1.7685-2.0165a.245.245,0,0,0,.0735-.175A.25.25,0,0,0,16,12Z" })
  ] });
  var SORT_UP = /* @__PURE__ */ u3("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", class: CSS, children: [
    /* @__PURE__ */ u3("title", { children: "Sort Up" }),
    /* @__PURE__ */ u3("rect", { height: "2", rx: "0.5", width: "6", x: "1", y: "4" }),
    /* @__PURE__ */ u3("rect", { height: "2", rx: "0.5", width: "8", x: "1", y: "8" }),
    /* @__PURE__ */ u3("rect", { height: "2", rx: "0.5", width: "10", x: "1", y: "12" }),
    /* @__PURE__ */ u3("path", { d: "M15.99951,6H14.99634v7.5a.49378.49378,0,0,1-.49317.5h-.49633a.5.5,0,0,1-.5-.49951L13.50366,6H12.50049A.24984.24984,0,0,1,12.25,5.74823a.24439.24439,0,0,1,.07373-.175L14.0918,3.5564a.25007.25007,0,0,1,.3164,0l1.76807,2.01684a.24439.24439,0,0,1,.07373.175A.24984.24984,0,0,1,15.99951,6Z" })
  ] });
  var LANGUISH = /* @__PURE__ */ u3("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", class: CSS, children: [
    /* @__PURE__ */ u3("title", { children: "Languish Language Rankings" }),
    /* @__PURE__ */ u3("path", { d: "M16.5465,3.0305l-4.07,5.687L10.45,4.6605a.25.25,0,0,0-.4585.0265l-2.725,7.496L5.226,10.1425a.25.25,0,0,0-.337-.0155L1.09,13.2895a.25.25,0,0,0-.09.192v2.094a.25.25,0,0,0,.4145.188l3.524-3.0785,2.854,2.854a.25.25,0,0,0,.4115-.0915l2.274-6.255L12,12.2405a.25.25,0,0,0,.4285.0315L16.955,5.808A.25.25,0,0,0,17,5.665V3.176a.25.25,0,0,0-.4535-.1455Z" })
  ] });
  var GITHUB = /* @__PURE__ */ u3("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 16 480 384", class: CSS, children: [
    /* @__PURE__ */ u3("title", { children: "Github" }),
    /* @__PURE__ */ u3("path", { d: "M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z" })
  ] });
  var REDDIT = /* @__PURE__ */ u3("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 32 512 448", class: CSS, children: [
    /* @__PURE__ */ u3("title", { children: "Reddit" }),
    /* @__PURE__ */ u3("path", { d: "M373 138.6c-25.2 0-46.3-17.5-51.9-41l0 0c-30.6 4.3-54.2 30.7-54.2 62.4l0 .2c47.4 1.8 90.6 15.1 124.9 36.3c12.6-9.7 28.4-15.5 45.5-15.5c41.3 0 74.7 33.4 74.7 74.7c0 29.8-17.4 55.5-42.7 67.5c-2.4 86.8-97 156.6-213.2 156.6S45.5 410.1 43 323.4C17.6 311.5 0 285.7 0 255.7c0-41.3 33.4-74.7 74.7-74.7c17.2 0 33 5.8 45.7 15.6c34-21.1 76.8-34.4 123.7-36.4l0-.3c0-44.3 33.7-80.9 76.8-85.5C325.8 50.2 347.2 32 373 32c29.4 0 53.3 23.9 53.3 53.3s-23.9 53.3-53.3 53.3zM157.5 255.3c-20.9 0-38.9 20.8-40.2 47.9s17.1 38.1 38 38.1s36.6-9.8 37.8-36.9s-14.7-49.1-35.7-49.1zM395 303.1c-1.2-27.1-19.2-47.9-40.2-47.9s-36.9 22-35.7 49.1c1.2 27.1 16.9 36.9 37.8 36.9s39.3-11 38-38.1zm-60.1 70.8c1.5-3.6-1-7.7-4.9-8.1c-23-2.3-47.9-3.6-73.8-3.6s-50.8 1.3-73.8 3.6c-3.9 .4-6.4 4.5-4.9 8.1c12.9 30.8 43.3 52.4 78.7 52.4s65.8-21.6 78.7-52.4z" })
  ] });
  var WIKIPEDIA = /* @__PURE__ */ u3("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 413", class: CSS, children: [
    /* @__PURE__ */ u3("title", { children: "Wikipedia" }),
    /* @__PURE__ */ u3("path", { d: "M640 51.2l-.3 12.2c-28.1 .8-45 15.8-55.8 40.3-25 57.8-103.3 240-155.3 358.6H415l-81.9-193.1c-32.5 63.6-68.3 130-99.2 193.1-.3 .3-15 0-15-.3C172 352.3 122.8 243.4 75.8 133.4 64.4 106.7 26.4 63.4 .2 63.7c0-3.1-.3-10-.3-14.2h161.9v13.9c-19.2 1.1-52.8 13.3-43.3 34.2 21.9 49.7 103.6 240.3 125.6 288.6 15-29.7 57.8-109.2 75.3-142.8-13.9-28.3-58.6-133.9-72.8-160-9.7-17.8-36.1-19.4-55.8-19.7V49.8l142.5 .3v13.1c-19.4 .6-38.1 7.8-29.4 26.1 18.9 40 30.6 68.1 48.1 104.7 5.6-10.8 34.7-69.4 48.1-100.8 8.9-20.6-3.9-28.6-38.6-29.4 .3-3.6 0-10.3 .3-13.6 44.4-.3 111.1-.3 123.1-.6v13.6c-22.5 .8-45.8 12.8-58.1 31.7l-59.2 122.8c6.4 16.1 63.3 142.8 69.2 156.7L559.2 91.8c-8.6-23.1-36.4-28.1-47.2-28.3V49.6l127.8 1.1 .2 .5z" })
  ] });
  var STACKOV = /* @__PURE__ */ u3("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "3 32 379 448", class: CSS, children: [
    /* @__PURE__ */ u3("title", { children: "Stack Overflow" }),
    /* @__PURE__ */ u3("path", { d: "M290.7 311L95 269.7 86.8 309l195.7 41zm51-87L188.2 95.7l-25.5 30.8 153.5 128.3zm-31.2 39.7L129.2 179l-16.7 36.5L293.7 300zM262 32l-32 24 119.3 160.3 32-24zm20.5 328h-200v39.7h200zm39.7 80H42.7V320h-40v160h359.5V320h-40z" })
  ] });
  var EXTERN = /* @__PURE__ */ u3("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", class: CSS, children: [
    /* @__PURE__ */ u3("title", { children: "External Link" }),
    /* @__PURE__ */ u3("path", { d: "M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z" })
  ] });

  // packages/frontend/src/auxiliar/storage.ts
  var stapi = typeof localStorage === "undefined" ? void 0 : localStorage;
  var doc2 = typeof document === "undefined" ? void 0 : document;
  var getStore = (page) => new Store(page);
  var getCurrentPage = () => (doc2 ? doc2.body.dataset.page : void 0) ?? "_any_page_";
  var getCurrentPageStore = () => getStore(getCurrentPage());
  var Store = class {
    constructor(page) {
      this.page = page;
    }
    // biome-ignore lint/suspicious/noExplicitAny: JSON can serialize any data.
    update(key, data2) {
      const fk = this.fullKey(key);
      stapi?.setItem(fk, JSON.stringify(data2));
    }
    // biome-ignore lint/suspicious/noExplicitAny: JSON can deserialize any data.
    load(key) {
      const fk = this.fullKey(key);
      const jsonString = stapi?.getItem(fk);
      if (!jsonString) return void 0;
      try {
        return JSON.parse(jsonString);
      } catch (e3) {
        console.error("Failed to load data from localStorage", { key: fk, jsonString, e: e3 });
        stapi?.removeItem(fk);
      }
    }
    fullKey(key) {
      return `plangs-${this.page}-${key}`;
    }
  };

  // packages/frontend/src/components/icon-button/state.tsx
  function useIconButtonState({ action, disabled, initial }) {
    if (action === "lights") return useDispatchable(() => ToggleLights.initial(disabled));
    if (action === "hamburger") return useDispatchable(() => ToggleHamburguer.initial(disabled));
    if (action === "facets") return useDispatchable(() => ToggleFacetsMenu.initial(disabled));
    if (action === "allAny") return useDispatchable(() => ToggleAllAny.initial(initial, disabled));
    if (action === "clearFacets") return useDispatchable(() => ToggleClearFacets.initial(disabled));
    if (action === "gridOrder") return useDispatchable(() => ToggleGridOrder.initial(disabled));
    console.error(`Unknown action: ${action}`);
  }
  var IconButtonBaseState = class extends Dispatchable {
    get disabled() {
      return this.data.disabled;
    }
    set disabled(value) {
      this.data.disabled = value;
    }
    get value() {
      const { disabled, ...data2 } = this.data;
      return data2;
    }
    get hilight() {
      return false;
    }
  };
  var STORE = getStore("_any_page_");
  var ToggleLights = class _ToggleLights extends IconButtonBaseState {
    static initial(disabled = false) {
      const theme = STORE.load("theme");
      return new _ToggleLights({ mode: theme === "light" ? "light" : "dark", disabled });
    }
    get isDark() {
      return this.data.mode === "dark";
    }
    get icon() {
      return this.isDark ? SUN : MOON;
    }
    doAction() {
      this.data.mode = this.isDark ? "light" : "dark";
    }
    runEffects() {
      document.body.classList.toggle("dark", this.isDark);
      STORE.update("theme", this.data.mode);
    }
  };
  var ToggleHamburguer = class _ToggleHamburguer extends IconButtonBaseState {
    static initial(disabled = false) {
      const mode = STORE.load("hamburger-menu");
      return new _ToggleHamburguer({ mode: mode === "show" ? "show" : "hide", disabled });
    }
    get hide() {
      return this.data.mode === "hide";
    }
    get icon() {
      return this.hide ? MENU : CLOSE;
    }
    doAction() {
      this.data.mode = this.hide ? "show" : "hide";
    }
    runEffects() {
      elem("mainNav")?.classList.toggle("hidden", this.hide);
      STORE.update("hamburger-menu", this.data.mode);
    }
  };
  var ToggleFacetsMenu = class _ToggleFacetsMenu extends IconButtonBaseState {
    static initial(disabled = false) {
      const mode = getCurrentPageStore().load("facets-browser");
      return new _ToggleFacetsMenu({ mode: mode === "show" ? "show" : "hide", disabled });
    }
    get hilight() {
      return this.show;
    }
    get show() {
      return this.data.mode === "show";
    }
    get icon() {
      return FILTER_EDIT;
    }
    doAction() {
      this.data.mode = this.show ? "hide" : "show";
    }
    runEffects() {
      const fm = elems("facetsMain");
      if (fm.length > 0) fm[0].classList.toggle("hidden", !this.show);
      getCurrentPageStore().update("facets-browser", this.data.mode);
    }
  };
  var ToggleAllAny = class _ToggleAllAny extends IconButtonBaseState {
    static initial(initial, disabled = false) {
      return new _ToggleAllAny({ mode: initial === "all" ? "all" : "any", disabled });
    }
    get mode() {
      return this.data.mode;
    }
    get icon() {
      const disabled = this.data.disabled;
      const shadeAll = disabled || this.mode === "any";
      const shadeAny = disabled || this.mode === "all";
      return /* @__PURE__ */ u3("span", { class: tw("px-1", "flex flex-row gap-1", "items-center", "align-middle"), children: [
        /* @__PURE__ */ u3("span", { class: tw(shadeAll && "opacity-50", "whitespace-nowrap"), children: "All" }),
        /* @__PURE__ */ u3("span", { class: tw("inline-block", "mt-[1px] px-1", "scale-85", this.mode === "all" && "rotate-180", !disabled && HOVER_ICON_BG), children: BOOLEAN }),
        /* @__PURE__ */ u3("span", { class: tw(shadeAny && "opacity-50", "whitespace-nowrap"), children: "Any" })
      ] });
    }
    doAction() {
      this.data.mode = this.mode === "all" ? "any" : "all";
    }
    runEffects() {
    }
  };
  var ToggleClearFacets = class _ToggleClearFacets extends IconButtonBaseState {
    static initial(disabled = false) {
      return new _ToggleClearFacets({ disabled, mode: "" });
    }
    get icon() {
      return this.data.mode === "clearFacets" ? DESELECT : null;
    }
    doAction() {
      this.data.mode = "";
    }
    doToggleMode(mode) {
      this.data.mode = mode;
      this.dispatch();
    }
    runEffects() {
      for (const el of elems("facetsMain")) el.state?.doResetAll();
    }
  };
  var ToggleGridOrder = class _ToggleGridOrder extends IconButtonBaseState {
    static initial(disabled = false) {
      return new _ToggleGridOrder({ disabled, mode: "alpha" });
    }
    get mode() {
      return this.data.mode;
    }
    get icon() {
      return this.mode === "alpha" ? ABC : RANKING;
    }
    doAction() {
      this.data.mode = this.mode === "alpha" ? "ranking" : "alpha";
    }
    /** Reorder the grid on dispatch. */
    runEffects() {
      const grid = elem("vertexGrid");
      if (!grid) return;
      const thumbns = [...elems("vertexThumbn")].sort(CMP[this.mode]);
      for (const thumb of thumbns) {
        grid.appendChild(thumb);
      }
    }
  };
  var RANKED_LAST = Number.MAX_SAFE_INTEGER;
  var getRank = (el) => {
    const ranking = data(el, "vertex-ranking");
    return ranking ? Number.parseInt(ranking) : RANKED_LAST;
  };
  var getKey = (el) => el.dataset.vertexKey ?? "";
  var CMP = {
    ranking: (elA, elB) => getRank(elA) - getRank(elB),
    alpha: (elA, elB) => getKey(elA).localeCompare(getKey(elB))
  };

  // packages/frontend/src/components/icon-button/icon-button.tsx
  function IconButton({ action, disabled, initial }) {
    const state = useIconButtonState({ action, disabled, initial });
    const self = useRootState(state);
    y2(() => {
      if (!state) return;
      const newval = disabled === void 0 ? false : disabled;
      if (newval !== state.disabled) {
        state.disabled = newval;
        state.dispatch();
      }
    }, [disabled]);
    const toggle = () => {
      if (!state) return;
      state.doAction();
      state.runEffects();
      state.dispatch();
      send(self.current, customEvent("icon-button", state.value));
    };
    return /* @__PURE__ */ u3(
      "div",
      {
        ref: self,
        tabIndex: disabled ? void 0 : 0,
        ...onClickOnEnter(toggle),
        class: tw(
          "group",
          disabled ? "cursor-auto opacity-50" : "cursor-pointer",
          state?.hilight && "ring-1 ring-primary",
          action !== "allAny" && HOVER_ICON
        ),
        children: state?.icon
      }
    );
  }

  // packages/frontend/src/components/icon-button/index.tsx
  function activateIconButtons() {
    for (const elem2 of elems("iconButton")) {
      if (elem2.dataset.action) {
        const action = elem2.dataset.action;
        D(/* @__PURE__ */ u3(IconButton, { action }), elem2);
      } else {
        console.error("Missing prop for IconButton component.");
      }
    }
  }

  // packages/frontend/src/components/misc/pill.tsx
  function Pill({ children, title }) {
    return (
      // shadow-md inset-shadow-sm inset-shadow-white/20 ring ring-blue-600 inset-ring inset-ring-white/15
      /* @__PURE__ */ u3(
        "div",
        {
          ...title ? { title } : {},
          class: tw(
            "inline-flex items-center",
            "mr-4 mb-3 h-8 px-2",
            "border-1 border-foreground/25",
            "rounded-tl-2xl rounded-br-2xl",
            "bg-secondary/75 text-foreground/85",
            "overflow-ellipsis whitespace-nowrap"
          ),
          children
        }
      )
    );
  }

  // packages/server/src/utils/html.ts
  function dataset(data2) {
    const entries = Object.entries(data2).filter(([, value]) => {
      if (typeof value === "boolean") return value;
      if (typeof value === "string") return !!value;
      if (typeof value === "number") return value;
      return false;
    }).map(([key, value]) => [dataKey(key), `${value}`]);
    return Object.fromEntries(entries);
  }

  // packages/server/src/components/layout.tsx
  var GRID_PAGES = /* @__PURE__ */ new Set(["plangs", "tools", "apps", "libraries", "subsystems", "communities", "learning"]);

  // packages/server/src/components/vertex-thumbn.tsx
  var PLACEHOLDER = "/images/placeholder.png";
  function VertexThumbn({ detail, onlyImg, class: klass }) {
    return /* @__PURE__ */ u3(
      "div",
      {
        ...dataset({ "vertex-key": detail.key, "vertex-name": detail.vertexName, "vertex-ranking": detail.ranking }),
        class: tw(cssClass("vertexThumbn"), "group", !onlyImg && "cursor-pointer", klass),
        children: [
          !onlyImg && /* @__PURE__ */ u3("div", { class: "truncate text-center", children: /* @__PURE__ */ u3("a", { class: "text-foreground group-hover:text-primary", href: detail.href, children: detail.name }) }),
          /* @__PURE__ */ u3(
            "div",
            {
              class: tw(
                "relative",
                "p-4",
                "aspect-square overflow-hidden",
                "flex items-center justify-center",
                "bg-thumbnails",
                "border-1 border-primary",
                "shadow-background shadow-lg group-hover:shadow-md group-hover:shadow-primary"
              ),
              children: [
                /* @__PURE__ */ u3(
                  "img",
                  {
                    loading: "lazy",
                    src: onlyImg ? detail.thumbUrl ?? PLACEHOLDER : PLACEHOLDER,
                    alt: detail.name,
                    "data-src": detail.thumbUrl ?? "",
                    class: tw(cssClass("vertexThumbnImg"), "max-h-full max-w-full object-contain")
                  }
                ),
                "ranking" in detail && detail.ranking && /* @__PURE__ */ u3(
                  "div",
                  {
                    title: `Languish Ranking: ${detail.ranking}`,
                    class: tw(
                      "block",
                      // ALlow hiding the ranking using a data attribute on the wrapper.
                      "group-[[data-hide-ranking='1']]:hidden",
                      "-bottom-1 absolute right-0",
                      "p-1 text-primary text-xs",
                      "rounded opacity-50",
                      HOVER,
                      "hover:border-1 hover:border-primary hover:opacity-100"
                    ),
                    children: detail.ranking
                  }
                )
              ]
            }
          )
        ]
      }
    );
  }

  // packages/frontend/src/components/vertex-info/vertex-info.tsx
  function VertexInfo({ detail, open, page }) {
    const self = A2(null);
    const store = getCurrentPageStore();
    const updateOpen = () => {
      const elem2 = self.current?.querySelector("details");
      if (elem2) store.update("vertex-detail-open", !elem2.open);
    };
    y2(() => {
      if (!self.current) return;
      self.current.querySelector("h2")?.scrollIntoView({ behavior: "smooth", block: "end" });
      const links = self.current.querySelectorAll(`.${cssClass("externalLink")}`);
      if (links.length === 0) return;
      for (const [i4, el] of links.entries()) {
        el.classList.add("scale-0");
        setTimeout(() => el.classList.remove("scale-0"), 50 + (i4 + 1) * 50);
      }
    });
    const forGrid = GRID_PAGES.has(page);
    return /* @__PURE__ */ u3("div", { ref: self, class: tw(VSCROLL, forGrid && "p-4", !forGrid && "sm:mb-16", PROSE_BASIC, "max-w-[unset]"), children: [
      !detail && /* @__PURE__ */ u3("div", { children: [
        /* @__PURE__ */ u3("h2", { class: tw("mt-0!"), children: "Information" }),
        /* @__PURE__ */ u3("p", { children: [
          /* @__PURE__ */ u3("strong", { class: "text-primary", children: "Click" }),
          " a thumbnail for more info."
        ] })
      ] }),
      detail && /* @__PURE__ */ u3("div", { children: [
        /* @__PURE__ */ u3("h2", { class: tw("mt-0!", forGrid && "inline sm:block"), children: [
          !forGrid && /* @__PURE__ */ u3("div", { class: tw("float-right ml-2 p-4", tw(BORDER, "border-1")), children: /* @__PURE__ */ u3(VertexThumbn, { detail, onlyImg: true, class: "size-24" }) }),
          /* @__PURE__ */ u3("a", { class: "text-primary", href: detail.href, children: detail.name })
        ] }),
        /* @__PURE__ */ u3("div", { class: "-mx-1 flex flex-row gap-1 align-middle", children: [
          ret(detail.urlHome, (url) => url && /* @__PURE__ */ u3(IconLink, { href: url, icon: EXTERN })),
          ret(detail.urlLanguish, (url) => url && /* @__PURE__ */ u3(IconLink, { href: url, icon: LANGUISH, title: `#${detail.ranking} on Languish` })),
          ret(detail.urlGithub, (url) => url && /* @__PURE__ */ u3(IconLink, { href: url, icon: GITHUB })),
          ret(detail.urlWikipedia, (url) => url && /* @__PURE__ */ u3(IconLink, { href: url, icon: WIKIPEDIA })),
          ret(detail.urlStackov, (url) => url && /* @__PURE__ */ u3(IconLink, { href: url, icon: STACKOV })),
          ret(detail.urlReddit, (url) => url && /* @__PURE__ */ u3(IconLink, { href: url, icon: REDDIT }))
        ] }),
        /* @__PURE__ */ u3("p", { class: tw(forGrid && "inline sm:block", "hyphens-auto"), children: forGrid ? detail.shortDesc : detail.description })
      ] }),
      detail && detail.relations.length > 0 && /* @__PURE__ */ u3("details", { class: tw(forGrid && "hidden sm:block", "overflow-hidden", !forGrid && tw("p-4")), open, children: [
        /* @__PURE__ */ u3("summary", { class: "cursor-pointer text-primary", ...onClickOnEnter(updateOpen), children: "Details" }),
        /* @__PURE__ */ u3("div", { class: tw(forGrid ? "flex flex-col" : "grid grid-cols-[auto_1fr]", "sm:gap-4", "sm:p-4"), children: [
          detail.general.length > 0 && /* @__PURE__ */ u3(RelationCell, { title: "General", children: detail.general.map((item) => /* @__PURE__ */ u3(Pill, { title: item.title, children: item.kind === "text" ? item.value : /* @__PURE__ */ u3("a", { href: item.href, class: tw("inline-flex flex-row items-center align-middle"), children: [
            /* @__PURE__ */ u3("span", { children: item.value }),
            /* @__PURE__ */ u3("span", { class: tw("inline-block scale-50", "rounded"), children: EXTERN })
          ] }) }, item)) }),
          detail.relations.map(([title, vertices]) => /* @__PURE__ */ u3(RelationCell, { title, children: vertices.map((vertex) => /* @__PURE__ */ u3(Pill, { children: /* @__PURE__ */ u3("a", { href: vertex.href, children: vertex.name }) }, vertex.name)) }, title))
        ] })
      ] })
    ] });
  }
  function IconLink({ href, icon: icon2, title }) {
    return /* @__PURE__ */ u3(
      "a",
      {
        ...title ? { title } : {},
        href,
        class: tw(cssClass("externalLink"), "inline-block aspect-square", "transition-transform", "text-primary"),
        children: /* @__PURE__ */ u3("div", { class: tw("inline-block scale-75", HOVER_ICON), children: icon2 })
      }
    );
  }
  function RelationCell({ title, children }) {
    return /* @__PURE__ */ u3(
      "div",
      {
        class: tw("col-span-2 grid grid-cols-subgrid", tw("border-foreground/25 border-dotted sm:border-t-1", "pt-4"), tw("hover:bg-hiliteb/10")),
        children: [
          /* @__PURE__ */ u3("header", { class: "p-1 text-foreground/75", children: title }),
          /* @__PURE__ */ u3("div", { children })
        ]
      },
      title
    );
  }

  // packages/frontend/src/components/vertex-info/index.tsx
  function renderVertexInfo(vertex) {
    const page = getCurrentPage();
    const store = getCurrentPageStore();
    for (const elem2 of elems("vertexInfo")) {
      let detail = vertex?.detail;
      let open = elem2.dataset.open === "true";
      if (detail) {
        store.update("vertex-detail", detail);
        store.update("vertex-detail-open", open);
      } else {
        open = store.load("vertex-detail-open") ?? open ?? true;
        detail = store.load("vertex-detail");
      }
      D(/* @__PURE__ */ u3(VertexInfo, { detail, page, open }), elem2);
    }
  }

  // packages/auxiliar/src/filters.ts
  var Filter = class _Filter {
    constructor(mode = "any", values = /* @__PURE__ */ new Set()) {
      this.mode = mode;
      this.values = values;
    }
    get isEmpty() {
      return this.values.size === 0;
    }
    add(...values) {
      for (const val of values) this.values.add(val);
      return this;
    }
    delete(value) {
      return this.values.delete(value);
    }
    has(value) {
      return this.values.has(value);
    }
    clear() {
      this.values.clear();
    }
    get size() {
      return this.values.size;
    }
    matches(predicate) {
      return this.mode === "all" ? this.all(predicate) : this.any(predicate);
    }
    all(predicate) {
      for (const v3 of this.values) if (!predicate(v3)) return false;
      return true;
    }
    any(predicate) {
      for (const v3 of this.values) if (predicate(v3)) return true;
      return false;
    }
    get value() {
      return this;
    }
    get isPresent() {
      return !this.isEmpty;
    }
    equalTo(other) {
      if (!other) return false;
      if (!(other instanceof _Filter)) return false;
      if (this.mode !== other.mode) return false;
      if (this.values.size !== other.values.size) return false;
      for (const v3 of this.values) if (!other.values.has(v3)) return false;
      return true;
    }
    clone() {
      return new _Filter(this.mode, new Set(this.values));
    }
    toJSON() {
      return { mode: this.mode, values: [...this.values] };
    }
    serializable() {
      return this.isEmpty ? void 0 : this.toJSON();
    }
    // biome-ignore lint/suspicious/noExplicitAny: we can't know for sure the type of the values here.
    static isSerialized(val) {
      return !!val && typeof val === "object" && "mode" in val && (val.mode === "all" || val.mode === "any") && "values" in val && Array.isArray(val.values);
    }
    toString() {
      return `Filter(${this.mode}: ${JSON.stringify([...this.values]).slice(1, -1)})`;
    }
  };

  // packages/auxiliar/src/value.ts
  var ValBase = class {
    constructor(value) {
      this.value = value;
    }
    get isNil() {
      return this.value === void 0 || this.value === null;
    }
    get isPresent() {
      return !this.isNil;
    }
    // biome-ignore lint/suspicious/noExplicitAny: We can't be more specific here.
    serializable() {
      return this.isPresent ? this.value : void 0;
    }
  };
  var ValNil = class _ValNil extends ValBase {
    constructor(value = void 0) {
      super(value);
    }
    equalTo(other) {
      return other instanceof _ValNil;
    }
  };
  var ValNumber = class _ValNumber extends ValBase {
    equalTo(other) {
      return other instanceof _ValNumber && this.value === other.value;
    }
  };
  var ValBool = class _ValBool extends ValBase {
    get isPresent() {
      return !this.isNil && this.value === true;
    }
    equalTo(other) {
      return other instanceof _ValBool && this.value === other.value;
    }
  };
  var ValString = class _ValString extends ValBase {
    get isPresent() {
      return !this.isNil && this.value.length > 0 && !/^\s*$/.test(this.value);
    }
    equalTo(other) {
      return other instanceof _ValString && this.value === other.value;
    }
  };
  var ValSet = class _ValSet extends ValBase {
    get isPresent() {
      return !this.isNil && this.value.size > 0;
    }
    equalTo(other) {
      if (!(other instanceof _ValSet)) return false;
      if (this.value === other.value) return true;
      if (this.value.size !== other.value.size) return false;
      for (const v3 of this.value) if (!other.value.has(v3)) return false;
      return true;
    }
    serializable() {
      return this.isPresent ? ["Set", [...this.value]] : void 0;
    }
    // biome-ignore lint/suspicious/noExplicitAny: we cannot know for sure the type of the values.
    static isSerialized(val) {
      return Array.isArray(val) && val[0] === "Set" && Array.isArray(val[1]);
    }
  };
  var EMPTY_REGEX = /(?:)/;
  var ValRegExp = class _ValRegExp extends ValBase {
    get isPresent() {
      return !this.isNil && this.value.source !== EMPTY_REGEX.source;
    }
    equalTo(other) {
      return other instanceof _ValRegExp && this.value.source === other.value.source;
    }
    serializable() {
      const { value } = this;
      return this.isPresent ? value.flags ? ["RegExp", value.source, value.flags] : ["RegExp", value.source] : void 0;
    }
    static isSerialized(val) {
      return Array.isArray(val) && val[0] === "RegExp" && typeof val[1] === "string" && (val[2] === void 0 || typeof val[2] === "string");
    }
  };
  function deserializeValue(val) {
    if (val === void 0 || val === null) return new ValNil(val);
    switch (typeof val) {
      case "number":
        return new ValNumber(val);
      case "boolean":
        return new ValBool(val);
      case "string":
        return new ValString(val);
    }
    if (ValRegExp.isSerialized(val)) return new ValRegExp(new RegExp(val[1], val[2]));
    if (ValSet.isSerialized(val)) return new ValSet(new Set(val[1]));
    if (Filter.isSerialized(val)) return new Filter(val.mode, new Set(val.values));
    console.log("Attempt to deserialize an unrecognized value shape:", val);
  }

  // packages/auxiliar/src/debounce.ts
  function debounce(callback, millies) {
    let timeout;
    return (...args) => {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => callback(...args), millies);
    };
  }

  // packages/auxiliar/src/map2.ts
  var Map2 = class _Map2 {
    #map = /* @__PURE__ */ new Map();
    has(k1, k22) {
      return this.#map.get(k1)?.has(k22) ?? false;
    }
    set(k1, k22, v3) {
      let m22 = this.#map.get(k1);
      if (!m22) {
        m22 = /* @__PURE__ */ new Map();
        this.#map.set(k1, m22);
      }
      m22.set(k22, v3);
      return this;
    }
    getOrSet(k1, k22, whenMissing) {
      let v3 = this.get(k1, k22);
      if (v3 === void 0) this.set(k1, k22, v3 = whenMissing());
      return v3;
    }
    delete(k1, k22) {
      return this.#map.get(k1)?.delete(k22) ?? false;
    }
    // Delete all keys [k1, *] from the map.
    delete1(k1) {
      const map = this.#map.get(k1);
      if (map) {
        this.#map.delete(k1);
        return map.size > 0;
      }
      return false;
    }
    clear() {
      this.#map.clear();
    }
    get(k1, k22) {
      return this.#map.get(k1)?.get(k22);
    }
    getMap(k1) {
      return this.#map.get(k1);
    }
    /** Get a consolidated map of all keys in the second dimension. */
    getMap2() {
      const res = /* @__PURE__ */ new Map();
      for (const [_k1, map2] of this.#map) {
        for (const [k22, v3] of map2) res.set(k22, v3);
      }
      return res;
    }
    get size() {
      let size = 0;
      for (const map of this.#map.values()) size += map.size;
      return size;
    }
    get isEmpty() {
      for (const map of this.#map.values()) if (map.size > 0) return false;
      return true;
    }
    /** Returns the size of the second dimension for a given key in the first dimension. */
    size2(k1) {
      return this.#map.get(k1)?.size ?? 0;
    }
    /** Returns the keys in the first dimension. */
    keys() {
      return [...this.#map.keys()].filter((k1) => (this.#map.get(k1)?.size ?? 0) > 0);
    }
    /** Return all the keys from a first dimension. */
    keys2(k1) {
      const res = [];
      const m3 = this.#map.get(k1);
      if (m3) for (const k22 of m3.keys()) res.push(k22);
      return res;
    }
    entries() {
      return [...this.#map.entries()].filter(([_k1, map2]) => map2.size > 0);
    }
    flatEntries() {
      const results = [];
      for (const [k1, map2] of this.#map) {
        for (const [k22, v3] of map2) results.push([k1, k22, v3]);
      }
      return results;
    }
    /** Return a new Map with filtered entries. */
    filter(predicate) {
      const m3 = new _Map2();
      for (const [k1, map2] of this.#map) {
        for (const [k22, v3] of map2) if (predicate(k1, k22, v3)) m3.set(k1, k22, v3);
      }
      return m3;
    }
    values() {
      return [...this.#map.values()].flatMap((map) => [...map.values()]);
    }
    values2(k1) {
      const m3 = this.#map.get(k1);
      return m3 ? [...m3.values()] : [];
    }
    toString() {
      const entries = [...this.flatEntries()].map(([k1, k22, v3]) => `(${k1}, ${k22}) => ${v3}`);
      return `Map2(size: ${this.size})${entries.length > 0 ? ` { ${entries.join(", ")} }` : ""}`;
    }
  };

  // packages/plangs/src/facets/apps.ts
  var APP_FACET_PREDICATES = {
    createdRecently: (app, date) => app.created.isRecent(date.value),
    creationYear: (app, flt) => ret(app.created.strYear, (appYear) => flt.matches((year) => appYear === year)),
    ghStars: (app, num) => app.github.stars > num.value,
    licenses: (app, flt) => flt.matches((key) => app.relLicenses.has(key)),
    name: (app, str) => app.lcName.includes(str.value),
    platforms: (app, flt) => flt.matches((key) => app.relPlatforms.has(key)),
    releasedRecently: (app, date) => ret(app.releases.last, (lastRel) => lastRel?.isRecent(date.value)),
    tags: (app, flt) => flt.matches((key) => app.relTags.has(key)),
    writtenWith: (app, flt) => flt.matches((key) => app.relWrittenWith.has(key))
  };

  // packages/plangs/src/facets/communities.ts
  var COMMUNITY_FACET_PREDICATES = {
    apps: (comm, flt) => flt.matches((key) => comm.relApps.has(key)),
    createdRecently: (comm, date) => comm.created.isRecent(date.value),
    creationYear: (comm, flt) => ret(comm.created.strYear, (communityYear) => flt.matches((year) => communityYear === year)),
    libraries: (comm, flt) => flt.matches((key) => comm.relLibraries.has(key)),
    name: (comm, str) => comm.lcName.includes(str.value),
    plangs: (com, flt) => flt.matches((key) => com.relPlangs.has(key)),
    tags: (comm, flt) => flt.matches((key) => comm.relTags.has(key)),
    tools: (comm, flt) => flt.matches((key) => comm.relTools.has(key))
  };

  // packages/plangs/src/facets/learning.ts
  var LEARNING_FACET_PREDICATES = {
    apps: (learn, flt) => flt.matches((key) => learn.relApps.has(key)),
    createdRecently: (learn, date) => learn.created.isRecent(date.value),
    creationYear: (learn, flt) => ret(learn.created.strYear, (learningYear) => flt.matches((year) => learningYear === year)),
    libraries: (learn, flt) => flt.matches((key) => learn.relLibraries.has(key)),
    name: (learn, str) => learn.lcName.includes(str.value),
    plangs: (learn, flt) => flt.matches((key) => learn.relPlangs.has(key)),
    tags: (learn, flt) => flt.matches((key) => learn.relTags.has(key)),
    tools: (learn, flt) => flt.matches((key) => learn.relTools.has(key))
  };

  // packages/plangs/src/facets/libraries.ts
  var LIBRARY_FACET_PREDICATES = {
    createdRecently: (lib, date) => lib.created.isRecent(date.value),
    creationYear: (lib, flt) => ret(lib.created.strYear, (libraryYear) => flt.matches((year) => libraryYear === year)),
    ghStars: (lib, num) => lib.github.stars > num.value,
    licenses: (lib, flt) => flt.matches((key) => lib.relLicenses.has(key)),
    name: (lib, str) => lib.lcName.includes(str.value),
    platforms: (lib, flt) => flt.matches((key) => lib.relPlatforms.has(key)),
    releasedRecently: (lib, date) => ret(lib.releases.last, (lastRel) => lastRel?.isRecent(date.value)),
    tags: (lib, flt) => flt.matches((key) => lib.relTags.has(key)),
    writtenFor: (lib, flt) => flt.matches((key) => lib.relPlangs.has(key)),
    writtenWith: (lib, flt) => flt.matches((key) => lib.relWrittenWith.has(key))
  };

  // packages/plangs/src/facets/plangs.ts
  var PLANG_FACET_PREDICATES = {
    compilesTo: (pl, flt) => flt.matches((key) => pl.relCompilesTo.has(key)),
    createdRecently: (pl, date) => pl.created.isRecent(date.value),
    creationYear: (pl, flt) => ret(pl.created.strYear, (plYear) => flt.matches((year) => plYear === year)),
    dialectOf: (pl, flt) => flt.matches((key) => pl.key === key || pl.relDialectOf.has(key)),
    extensions: (pl, flt) => flt.matches((key) => pl.extensions.includes(key)),
    hasLogo: (pl, val) => val.value === pl.images.some((img) => img.kind === "logo"),
    hasWikipedia: (pl, val) => val.value === !!pl.data.extWikipediaPath,
    implements: (pl, flt) => flt.matches((key) => key === pl.key || pl.relImplements.has(key)),
    influenced: (pl, flt) => flt.matches((key) => pl.relInfluenced.has(key)),
    influencedBy: (pl, flt) => flt.matches((key) => pl.relInfluencedBy.has(key)),
    isPopular: (pl, val) => val.value === pl.isPopular,
    isTranspiler: (pl, val) => val.value === pl.isTranspiler,
    licenses: (pl, flt) => flt.matches((key) => pl.relLicenses.has(key)),
    paradigms: (pl, flt) => flt.matches((key) => pl.relParadigms.has(key)),
    plangName: (pl, str) => pl.lcName.includes(str.value),
    platforms: (pl, flt) => flt.matches((key) => pl.relPlatforms.has(key)),
    releasedRecently: (pl, date) => ret(pl.releases.last, (lastRel) => lastRel?.isRecent(date.value)),
    tags: (pl, flt) => flt.matches((key) => pl.relTags.has(key)),
    typeSystems: (pl, flt) => flt.matches((key) => pl.relTypeSystems.has(key)),
    writtenWith: (pl, flt) => flt.matches((key) => pl.relWrittenWith.has(key))
    // These relationships are probably less useful for filtering.
    // dialects: // "Dialects", rel("plang", "relDialects")). Ex. Pick "VisualBasic" and see "Basic".
    // implementedBy: // "Implemented By", rel("plang", "relImplementedBy")). Ex. Pick "CPython" and see "Python".
    // targetOf: // "Target of", rel("plang", "relTargetOf")). Ex. Pick "Haxe" and see what languages it targets.
    // usedToWrite: //  "Used to Write", rel("plang", "relUsedToWrite")). Ex Pick "C++" and see "C".
  };

  // packages/plangs/src/facets/subsystems.ts
  var SUBSYSTEM_FACET_PREDICATES = {
    createdRecently: (sys, date) => sys.created.isRecent(date.value),
    creationYear: (sys, flt) => ret(sys.created.strYear, (appYear) => flt.matches((year) => appYear === year)),
    ghStars: (sys, num) => sys.github.stars > num.value,
    licenses: (sys, flt) => flt.matches((key) => sys.relLicenses.has(key)),
    name: (sys, str) => sys.lcName.includes(str.value),
    platforms: (sys, flt) => flt.matches((key) => sys.relPlatforms.has(key)),
    releasedRecently: (sys, date) => ret(sys.releases.last, (lastRel) => lastRel?.isRecent(date.value)),
    tags: (sys, flt) => flt.matches((key) => sys.relTags.has(key)),
    writtenWith: (sys, flt) => flt.matches((key) => sys.relWrittenWith.has(key))
  };

  // packages/plangs/src/facets/tools.ts
  var TOOL_FACET_PREDICATES = {
    createdRecently: (tool, date) => tool.created.isRecent(date.value),
    creationYear: (tool, flt) => ret(tool.created.strYear, (toolYear) => flt.matches((year) => toolYear === year)),
    ghStars: (tool, num) => tool.github.stars > num.value,
    licenses: (tool, flt) => flt.matches((key) => tool.relLicenses.has(key)),
    name: (tool, str) => tool.lcName.includes(str.value),
    platforms: (tool, flt) => flt.matches((key) => tool.relPlatforms.has(key)),
    releasedRecently: (tool, date) => ret(tool.releases.last, (lastRel) => lastRel?.isRecent(date.value)),
    tags: (tool, flt) => flt.matches((key) => tool.relTags.has(key)),
    writtenFor: (tool, flt) => flt.matches((key) => tool.relPlangs.has(key)),
    writtenWith: (tool, flt) => flt.matches((key) => tool.relWrittenWith.has(key))
  };

  // packages/plangs/src/facets/index.ts
  function matchVertex(vertex, predicates, facetValues, mode = "any") {
    let someFilter = false;
    for (const [key, value] of facetValues) {
      if (!value.isPresent) continue;
      someFilter = true;
      const pred = predicates[key];
      if (!pred) {
        console.error(`No predicate found for key: ${key}`);
        continue;
      }
      const predResult = pred(vertex, value);
      if (mode === "all" && !predResult) return false;
      if (mode === "any" && predResult) return true;
    }
    if (!someFilter) return true;
    return mode === "all";
  }
  function matchVertices(vertices, facetValues, mode = "all") {
    const predicates = vertexPredicates(vertices.name);
    if (!predicates) {
      console.warn(`No predicates found for vertex name: ${vertices.name}`);
      return new Set(vertices.keys);
    }
    return new Set([...vertices.values].filter((v3) => matchVertex(v3, predicates, facetValues, mode)).map((v3) => v3.key));
  }
  function matchVerticesFromGroups(vertices, facetValues, mode = "any") {
    let results = /* @__PURE__ */ new Set();
    for (const [_2, fkValueMap] of facetValues.entries()) {
      const groupResult = matchVertices(vertices, fkValueMap, "all");
      if (mode === "all") {
        if (groupResult.size === 0) return /* @__PURE__ */ new Set();
        results = results.intersection(groupResult);
        if (results.size === 0) return results;
      } else {
        results = results.union(groupResult);
      }
    }
    return results;
  }
  function vertexPredicates(name) {
    switch (name) {
      case "app":
        return APP_FACET_PREDICATES;
      case "community":
        return COMMUNITY_FACET_PREDICATES;
      case "learning":
        return LEARNING_FACET_PREDICATES;
      case "library":
        return LIBRARY_FACET_PREDICATES;
      case "plang":
        return PLANG_FACET_PREDICATES;
      case "tool":
        return TOOL_FACET_PREDICATES;
      case "subsystem":
        return SUBSYSTEM_FACET_PREDICATES;
    }
  }

  // packages/frontend/src/facets/main/state.ts
  var FacetsMainState = class _FacetsMainState extends Dispatchable {
    constructor() {
      super(...arguments);
      this.updateThumbns = debounce(this._updateThumbs.bind(this), 30);
      /** Push state to the history, but debounced. */
      this.pushState = debounce(
        ((data2) => {
          window.fragment.pushState(FragmentTracker.serialize(data2));
        }).bind(this),
        50
      );
    }
    /** Attempt to reconstruct the state from a serialized value (ex: a value coming from the URL fragment). */
    // biome-ignore lint/suspicious/noExplicitAny: this data is the result of a de/serialization process and is not typed.
    static deserialize(groupsByFacetKey, genericData) {
      const result = new Map2();
      if (!genericData) return result;
      for (const [facetKey, rawValue] of Object.entries(genericData)) {
        const groupKey = groupsByFacetKey.get(facetKey);
        if (!groupKey) {
          console.error("missing group for facet", facetKey);
          continue;
        }
        const value = deserializeValue(rawValue);
        if (value?.isPresent) {
          result.set(groupKey, facetKey, value);
        } else {
          console.error("failed to deserialize value", facetKey, rawValue);
        }
      }
      return result;
    }
    doSetCurrentGroup(groupKey) {
      this.data.currentGroupKey = groupKey;
      getStore(this.page).update("facets-last-group", groupKey);
      this.dispatch();
    }
    /** Removes any and all values for the given group.  */
    doResetGroup(groupKey) {
      this.values.delete1(groupKey);
      this.dispatch();
    }
    /** Removes any and all values for the given group.  */
    // biome-ignore lint/suspicious/noExplicitAny: coming from deserialize we'll have to deal with it.
    doResetAll(values) {
      if (values) {
        this.data.values = _FacetsMainState.deserialize(this.gkByFk, values);
      } else {
        this.values.clear();
      }
      this.doSetCurrentGroup(this.nav.default);
    }
    /** This dispatches since we want to change the indicator of active state. */
    doSetValue(groupKey, facetKey, value) {
      const { values } = this.data;
      let result;
      if (value.isPresent) {
        if (!values.has(groupKey, facetKey) || !value.equalTo(values.get(groupKey, facetKey))) {
          values.set(groupKey, facetKey, value);
          result = "changed";
        } else {
          result = "unchanged";
        }
      } else {
        result = values.delete(groupKey, facetKey) ? "changed" : "unchanged";
      }
      this.dispatch();
      return result;
    }
    /** Queries */
    get pg() {
      return this.data.pg;
    }
    get values() {
      return this.data.values;
    }
    get serialized() {
      const data2 = {};
      for (const [_2, facetKey, value] of this.values.flatEntries()) {
        if (value.isPresent) data2[facetKey] = value.serializable();
      }
      return data2;
    }
    get currentGroupKey() {
      return this.data.currentGroupKey;
    }
    groupHasValues(groupKey) {
      for (const v3 of this.values.getMap(groupKey)?.values() ?? []) {
        if (v3.isPresent) return true;
      }
      return false;
    }
    get anyValues() {
      return this.values.values().some((v3) => v3.isPresent);
    }
    groupTitle(key) {
      return this.groupsConfig.get(key)?.title ?? key;
    }
    /** Helpers */
    /** A static thumbnail grid will be render server side, we just need to show or hide each element.  */
    _updateThumbs() {
      const selection = this.values.filter((g2, f4, v3) => v3.isPresent);
      const vertexKeys = selection.isEmpty ? void 0 : (
        // biome-ignore lint/suspicious/noExplicitAny: the loop up next can handle any kind of key returned.
        matchVerticesFromGroups(this.pg[this.vertexName], selection)
      );
      for (const div of elems("vertexThumbn")) {
        const vkey = div.dataset.vertexKey;
        if (!vkey) continue;
        const visible = vertexKeys === void 0 || vertexKeys.has(vkey);
        div.classList.toggle("hidden", !visible);
      }
    }
    /**
     * Run any side effects without dispatching.
     * Useful for instance on start, for instance: where we don't want to dispatch
     * (hence render twice) but we do want to setup a clean state.
     */
    runEffects(persist = "") {
      if (persist === "persist") {
        const data2 = this.serialized;
        this.pushState(data2);
        getStore(this.page).update("facet-value", data2);
      }
      this.updateThumbns();
      this.updateClearFacets();
      return this;
    }
    /** Update the clear facets button on the toolbar. */
    updateClearFacets() {
      const clearAll = $2("#icon-button-clearFacets");
      if (!clearAll?.state) return this;
      clearAll.state.doToggleMode(this.anyValues ? "clearFacets" : "");
      return this;
    }
    dispatch() {
      try {
        super.dispatch();
        this.runEffects("persist");
      } catch (err) {
        console.error(err);
      }
      return this;
    }
  };

  // packages/frontend/src/facets/misc/facet-bool.tsx
  function FacetBool({
    groupKey,
    facetKey,
    label: label2,
    valueMapper = (checked) => new ValBool(checked)
  }) {
    const input = A2();
    const main = x2(FacetsMainContext);
    const toggle = handler((checkbox) => {
      main.doSetValue(groupKey, facetKey, valueMapper(checkbox.checked));
    });
    return /* @__PURE__ */ u3("label", { for: facetKey, class: tw("block", "px-2"), children: [
      /* @__PURE__ */ u3(
        "input",
        {
          id: facetKey,
          name: facetKey,
          type: "checkbox",
          class: tw("-mt-1"),
          placeholder: label2,
          ...onClickOnEnter(toggle),
          checked: !!main.values.get(groupKey, facetKey)?.isPresent,
          ref: input
        }
      ),
      /* @__PURE__ */ u3("span", { class: "ml-2", children: label2 })
    ] });
  }

  // packages/frontend/src/facets/misc/facet-text.tsx
  function FacetText({
    groupKey,
    facetKey,
    label: label2
  }) {
    const main = x2(FacetsMainContext);
    const onInput = debounce(
      handler((input) => {
        main.doSetValue(groupKey, facetKey, new ValString(input.value.toLowerCase()));
      }),
      50
    );
    const current = main.values.get(groupKey, facetKey)?.value ?? "";
    return /* @__PURE__ */ u3("input", { type: "search", onInput, placeholder: label2, class: tw(INPUT, "mt-8"), value: current });
  }

  // packages/frontend/src/facets/multisel/state.ts
  var FacetMultiState = class extends Dispatchable {
    /** Actions */
    doSetValue(val) {
      const { main, data: data2 } = this;
      return main.doSetValue(data2.groupKey, data2.facetKey, val);
    }
    doAdd(val) {
      if (!val) return false;
      const { value } = this;
      if (value.has(val)) return false;
      value.add(val);
      return this.doSetValue(value) === "changed";
    }
    doRemove(val) {
      if (!val) return false;
      const { value } = this;
      if (!value.has(val)) return false;
      value.delete(val);
      return this.doSetValue(value) === "changed";
    }
    doSetMode(mode) {
      const { value } = this;
      if (value.mode === mode) return;
      this.value.mode = mode === "all" ? "all" : "any";
      this.doSetValue(value);
    }
    /** Queries */
    get main() {
      return this.data.main;
    }
    get value() {
      const { main, groupKey, facetKey } = this.data;
      return main.values.getOrSet(groupKey, facetKey, () => new Filter("any"));
    }
  };

  // packages/frontend/src/facets/multisel/facet-multi.tsx
  function FacetMulti({
    active,
    facetKey,
    groupKey,
    label: label2
  }) {
    const self = A2();
    const input = A2();
    const main = x2(FacetsMainContext);
    const state = useDispatchable(() => new FacetMultiState({ main, groupKey, facetKey }));
    y2(() => {
      return on(self?.current, "icon-button", (ev) => {
        ev.stopPropagation();
        state.doSetMode(ev.detail.mode);
      });
    });
    const maybeScroll = (value) => self.current?.querySelector(`button[data-value="${value}"]`)?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    const add = handler((input2, ev) => {
      ev.stopPropagation();
      if (ev.key !== "Enter") return;
      const val = input2.value.startsWith(".") ? input2.value : `.${input2.value}`;
      if (state.doAdd(val)) setTimeout(() => maybeScroll(val), 100);
      input2.value = "";
    });
    const removePulse = debounce(() => {
      for (const li of self.current?.querySelectorAll(".quick-pulse") ?? []) li.classList.remove("quick-pulse");
    }, 150);
    const nthButton = (n2) => self.current?.querySelector(`li:nth-child(${n2})>button`);
    const remover = (idx) => handler((b, ev) => {
      ev.stopPropagation();
      if (state.doRemove(b.dataset.value)) {
        setTimeout(() => {
          const nb = nthButton(idx + 1) ?? nthButton(idx);
          (nb ?? input.current)?.focus();
          if (!nb) return;
          nb.classList.add("quick-pulse");
          setTimeout(() => removePulse(), 150);
        }, 10);
      }
    });
    function mapEntries(mapper) {
      return Array.from([...state.value.values].entries()).map(mapper);
    }
    const body = () => /* @__PURE__ */ u3(k, { children: [
      /* @__PURE__ */ u3("input", { type: "search", name: facetKey, ref: input, placeholder: label2, class: tw(INPUT), onKeyDown: add }),
      /* @__PURE__ */ u3("span", { class: tw(state.value.size === 0 && "hidden", state.value.size < 2 ? "text-foreground/50" : "text-foreground", "pl-2"), children: /* @__PURE__ */ u3(IconButton, { action: "allAny", disabled: state.value.size < 2, initial: "any" }) }),
      /* @__PURE__ */ u3("ul", { children: mapEntries(([idx, value]) => /* @__PURE__ */ u3("li", { children: /* @__PURE__ */ u3(
        "button",
        {
          type: "button",
          "data-value": value,
          class: tw("inline-flex flex-row", "p-2", "w-full text-left", "cursor-pointer", HOVER),
          ...onClickOnEnter(remover(idx)),
          children: [
            /* @__PURE__ */ u3("div", { class: "-mt-[2px] inline-block scale-75 text-red-500", children: CLOSE }),
            value
          ]
        }
      ) }, value)) })
    ] });
    return /* @__PURE__ */ u3("div", { ref: self, class: tw("flex flex-col"), children: active ? body() : null });
  }

  // packages/frontend/src/facets/table/entries.ts
  function generateEntries(pg, config) {
    if (config.kind === "rel") {
      const { edgeName, direction, minEntries } = config;
      const edges = pg.edges[edgeName];
      if (!edges) {
        console.error("No edges found for:", edgeName, direction);
        return [];
      }
      const relations = direction === "direct" ? edges.entriesBackward : edges.entriesForward;
      const source = direction === "direct" ? edges.toSource : edges.fromSource;
      const entries = [...relations].map(([key, toKeys]) => {
        const name = source.get(key)?.name ?? key;
        return { value: key, label: name, count: toKeys.size };
      });
      if (typeof minEntries === "number") return entries.filter((entry) => entry.count >= minEntries);
      return entries;
    }
    if (config.kind === "prop") {
      const years = /* @__PURE__ */ new Map();
      for (const { created } of pg[config.vertexName].values) {
        if (!created.year) continue;
        const key = `${created.year}`;
        years.set(key, (years.get(key) ?? 0) + 1);
      }
      return [...years.entries()].map(([year, count]) => {
        const strYear = `${year}`;
        return { value: year, label: strYear, count };
      });
    }
    console.error("Unknown config kind", config);
    return [];
  }
  function label(col, config) {
    if (col === "facet" && config.kind === "rel") return "Name";
    if (col === "facet" && config.kind === "prop") return "Value";
    return col;
  }
  function icon(col, order) {
    if (col === "facet") return order === "facet-asc" && SORT_UP || order === "facet-desc" && SORT_DOWN;
    if (col === "count") return order === "count-asc" && SORT_UP || order === "count-desc" && SORT_DOWN;
    return order === "sel-asc" && SORT_UP || order === "sel-desc" && SORT_DOWN;
  }
  function opposite(col, order) {
    if (col === "facet") return order === "facet-asc" ? "facet-desc" : "facet-asc";
    if (col === "count") return order === "count-desc" ? "count-asc" : "count-desc";
    return order === "sel-desc" ? "sel-asc" : "sel-desc";
  }
  var CMP2 = {
    "facet-asc": (a3, b) => a3.label.localeCompare(b.label),
    "facet-desc": (a3, b) => b.label.localeCompare(a3.label),
    "count-asc": (a3, b) => a3.count - b.count,
    "count-desc": (a3, b) => b.count - a3.count,
    "sel-asc": (a3, b, isSel) => isSel ? Number(isSel(a3)) - Number(isSel(b)) : 0,
    "sel-desc": (a3, b, isSel) => isSel ? Number(isSel(b)) - Number(isSel(a3)) : 0
  };
  function sortEntries(entries, order, isSel) {
    const less = CMP2[order];
    return entries.sort((a3, b) => less(a3, b, isSel));
  }

  // packages/frontend/src/facets/table/header.tsx
  function Header({
    action,
    class: cssClass2,
    col,
    config,
    order
  }) {
    return /* @__PURE__ */ u3(
      "button",
      {
        type: "button",
        class: tw("px-1", "italic", "underline decoration-1 decoration-dotted", "cursor-pointer", cssClass2),
        ...onClickOnEnter(action),
        children: /* @__PURE__ */ u3("div", { class: tw(HOVER, "inline-flex w-full", "px-1", "items-center justify-between", "gap-1"), children: [
          /* @__PURE__ */ u3("span", { children: label(col, config) }),
          /* @__PURE__ */ u3("span", { class: tw("scale-75", "mt-1"), children: icon(col, order) }),
          /* @__PURE__ */ u3("span", { class: "flex-1" })
        ] })
      }
    );
  }

  // packages/frontend/src/facets/table/state.ts
  var FacetTableState = class extends Dispatchable {
    /** Actions */
    doSetValue(val) {
      const { main, data: data2 } = this;
      return main.doSetValue(data2.groupKey, data2.facetKey, val);
    }
    doToggle(val) {
      const { value } = this;
      value.has(val) ? value.delete(val) : value.add(val);
      this.doSetValue(value);
    }
    doSetMode(mode) {
      const { value } = this;
      if (value.mode === mode) return;
      this.value.mode = mode === "all" ? "all" : "any";
      this.doSetValue(value);
    }
    // Note that this is the only place where we dispatch locally instead of through the main state.
    doToggleOrder(col) {
      const { order } = this.data;
      this.data.order = opposite(col, order);
      sortEntries(this.data.entries, this.data.order, (entry) => this.value.has(entry.value));
      this.dispatch();
    }
    doResetSelection() {
      this.value.clear();
      this.doSetValue(this.value);
    }
    doSetFilter(value) {
      this.data.filter = value;
      this.dispatch();
    }
    /** Queries */
    get main() {
      return this.data.main;
    }
    get filter() {
      return this.data.filter;
    }
    /** Selected values. */
    get value() {
      const { main, groupKey, facetKey } = this.data;
      return main.values.getOrSet(groupKey, facetKey, () => new Filter("any"));
    }
    /** All entries. */
    get filteredEntries() {
      if (this.filter === "") return this.data.entries;
      const pattern = this.filter.toLowerCase();
      return this.data.entries.filter((entry) => entry.label.toLowerCase().includes(pattern));
    }
    get order() {
      return this.data.order;
    }
    get hasSelection() {
      return this.value.size > 0;
    }
  };

  // packages/frontend/src/facets/table/facet-table.tsx
  function FacetTable({
    groupKey,
    facetKey,
    config,
    active
  }) {
    const self = A2();
    const main = x2(FacetsMainContext);
    const state = useDispatchable(() => {
      const order = config.kind === "prop" ? "facet-desc" : "facet-asc";
      const entries = sortEntries(generateEntries(main.pg, config), order);
      return new FacetTableState({ config, entries, facetKey, groupKey, main, order, filter: "" });
    });
    y2(
      () => on(self?.current, "icon-button", (ev) => {
        ev.stopPropagation();
        state.doSetMode(ev.detail.mode === "all" ? "all" : "any");
      })
    );
    const SUBGRID2 = tw("col-span-3", "grid grid-cols-subgrid");
    const ROW = tw(SUBGRID2, tw("border-b-1", BORDER));
    const body = () => /* @__PURE__ */ u3("div", { class: tw("grid grid-cols-[1fr_auto_auto]", VSCROLL, "relative"), children: [
      /* @__PURE__ */ u3("div", { class: tw(ROW, "sticky top-0", "bg-primary text-background/80", "cursor-pointer", tw(BORDER, "border-b-1")), children: [
        /* @__PURE__ */ u3("div", { class: tw("col-span-3", "flex flex-row items-center gap-2", "px-1", "border-secondary border-b-1 border-dotted"), children: [
          /* @__PURE__ */ u3("label", { for: "filter-facets", class: "inline-block", children: "Filter:" }),
          /* @__PURE__ */ u3(
            "input",
            {
              id: "filter-facets",
              class: "m-2 inline-block flex-1 p-1",
              value: state.filter,
              onInput: (ev) => state.doSetFilter(ev.currentTarget.value)
            }
          ),
          /* @__PURE__ */ u3(IconButton, { action: "allAny", initial: state.value.mode, disabled: state.value.size < 2 }),
          /* @__PURE__ */ u3(
            "div",
            {
              ...onClickOnEnter(() => state.doResetSelection()),
              class: tw("scale-75 p-1", state.hasSelection ? tw("hover:text-hiliteb", HOVER_ICON_BG) : "opacity-25"),
              children: DESELECT
            }
          )
        ] }),
        /* @__PURE__ */ u3("div", { class: tw(ROW, "col-span-3"), children: [
          /* @__PURE__ */ u3(Header, { class: "text-left", action: () => state.doToggleOrder("facet"), col: "facet", config, order: state.order }),
          /* @__PURE__ */ u3(Header, { class: "text-center", action: () => state.doToggleOrder("count"), col: "count", config, order: state.order }),
          /* @__PURE__ */ u3(Header, { class: "text-right", action: () => state.doToggleOrder("sel"), col: "sel", config, order: state.order })
        ] })
      ] }),
      state.filteredEntries.map(
        (entry) => ret(
          onClickOnEnter(() => state.doToggle(entry.value)),
          (clickOrEnter) => /* @__PURE__ */ u3("div", { class: tw(ROW, HOVER, state.value.has(entry.value) && "bg-primary/20"), ...clickOrEnter, children: [
            /* @__PURE__ */ u3("div", { class: tw("p-2", "text-left", "overflow-hidden text-ellipsis", "line-clamp-3"), children: entry.label }),
            /* @__PURE__ */ u3("div", { class: tw("p-2", "text-center"), children: entry.count }),
            /* @__PURE__ */ u3("div", { class: tw("p-2", "text-right"), children: /* @__PURE__ */ u3("input", { type: "checkbox", checked: state.value.has(entry.value), ...clickOrEnter }) })
          ] }, entry.value)
        )
      )
    ] });
    return /* @__PURE__ */ u3("div", { ref: self, class: tw("flex flex-col", "size-full overflow-hidden"), children: active ? body() : null });
  }

  // packages/frontend/src/facets/misc/facet-group.tsx
  function createFacetGroupsComponent(groups) {
    return ({ currentFacetGroup }) => /* @__PURE__ */ u3(k, { children: [...groups.entries()].map(([groupKey, { title, facets }]) => /* @__PURE__ */ u3(FacetGroup, { groupKey, label: title, active: currentFacetGroup === groupKey, children: facets.map((facet) => {
      const { kind, label: label2, facetKey } = facet;
      const props = { groupKey, facetKey, label: label2, active: currentFacetGroup === groupKey };
      switch (kind) {
        case "bool":
          return /* @__PURE__ */ u3(FacetBool, { ...props, valueMapper: facet.valueMapper });
        case "multi":
          return /* @__PURE__ */ u3(FacetMulti, { ...props });
        case "table":
          return /* @__PURE__ */ u3(FacetTable, { ...props, config: facet.config });
        case "text":
          return /* @__PURE__ */ u3(FacetText, { ...props });
        default:
          console.error("Facet not found", facetKey);
      }
    }) }, groupKey)) });
  }
  function FacetGroup({
    active,
    children
  }) {
    const main = x2(FacetsMainContext);
    return /* @__PURE__ */ u3(
      "div",
      {
        class: tw(
          "relative",
          !active && "hidden",
          // Self.
          "flex-1",
          "self-center",
          "size-full overflow-hidden overflow-y-auto",
          // Children.
          "flex flex-col gap-4"
        ),
        children
      }
    );
  }

  // packages/frontend/src/facets/main/types.ts
  function bool(facetKey, label2, valueMapper) {
    return { kind: "bool", facetKey, label: label2, valueMapper };
  }
  function multi(facetKey, label2) {
    return { kind: "multi", facetKey, label: label2 };
  }
  function table(facetKey, label2, config) {
    return { kind: "table", facetKey, label: label2, config };
  }
  function text(facetKey, label2) {
    return { kind: "text", facetKey, label: label2 };
  }
  function defineFacetGroups(groups) {
    const groupsMap = new Map(Object.entries(groups));
    const gkByFk = /* @__PURE__ */ new Map();
    for (const [groupKey, { facets }] of Object.entries(groups)) {
      for (const facet of facets) gkByFk.set(facet.facetKey, groupKey);
    }
    const component = createFacetGroupsComponent(groupsMap);
    return [groupsMap, gkByFk, component];
  }

  // packages/auxiliar/src/array.ts
  function arrayMerge(target, newData, similar = (l1, l22) => l1 === l22, onDuplicate) {
    for (const newElem of newData) {
      const prevElem = target.find((elem2) => similar(elem2, newElem));
      if (prevElem) {
        onDuplicate?.(prevElem, newElem);
      } else {
        target.push(newElem);
      }
    }
  }

  // packages/auxiliar/src/iter_tap.ts
  var IterTap = class _IterTap {
    constructor(iterable) {
      this.array = Array.isArray(iterable) ? iterable : iterable ? [...iterable] : void 0;
    }
    filter(callback) {
      return this.array ? this.array.filter(callback) : [];
    }
    map(callback) {
      return new _IterTap(this.array ? this.array.map(callback) : []);
    }
    reduce(callback, init) {
      return this.array ? this.array.reduce(callback, init) : init;
    }
    sort(cmp) {
      return this.array ? [...this.array].sort(cmp) : [];
    }
    join(str) {
      return this.array ? this.array.join(str) : "";
    }
    includes(val) {
      return this.array ? this.array.includes(val) : false;
    }
    some(predicate) {
      return this.array ? this.array.some(predicate) : false;
    }
    find(predicate) {
      return this.array?.find(predicate);
    }
    tap(callback) {
      if (this.array && this.array.length > 0) return callback(this.array);
    }
    get(index) {
      return this.array ? this.array[index] : void 0;
    }
    get isEmpty() {
      return this.array ? this.array.length === 0 : true;
    }
    get size() {
      return this.array ? this.array.length : 0;
    }
    get length() {
      return this.size;
    }
    /** Return all non-null and non-undefined values (if strings, returns the ones with length > 0). */
    get existing() {
      return this.filter((v3) => v3 !== void 0 && v3 !== null && (typeof v3 !== "string" || v3.length > 0));
    }
    get reverse() {
      return new _IterTap(this.array ? [...this.array].reverse() : void 0);
    }
    get first() {
      return this.array && this.array.length > 0 ? this.array[0] : void 0;
    }
    get last() {
      return this.array && this.array.length > 0 ? this.array[this.array.length - 1] : void 0;
    }
    [Symbol.iterator]() {
      return this.array ? this.array[Symbol.iterator]() : [].values();
    }
  };

  // packages/graphgen/src/library.ts
  var Vertex = class {
    constructor(key) {
      this.key = key;
      /** Serializable data. */
      this.data = {};
    }
    /** Shallow merge data. */
    merge(data2) {
      Object.assign(this.data, data2);
      return this;
    }
    /** The key without the `${kind}+` prefix. */
    get plainKey() {
      return this.key.replace(/^[a-z]+\+/, "");
    }
    /**
     * Lower-case first letter of the {@link plainKey}, or {@link NON_AZ} if it starts with a non-letter.
     * Useful when doing things like organizing the data in a folder structure.
     */
    get classifier() {
      const pk = this.plainKey;
      return /^[a-z]/i.test(pk) ? pk[0].toLowerCase() : NON_AZ;
    }
    /** {@link merge} can be used to load serialized data into an instance. */
    toJSON() {
      return this.data;
    }
    toString() {
      return this.key;
    }
  };
  var NON_AZ = "-";
  var Vertices = class {
    constructor(name, kind, factory) {
      this.name = name;
      this.kind = kind;
      this.factory = factory;
      this.map = /* @__PURE__ */ new Map();
    }
    set(key, data2 = {}) {
      const vertex = this.factory(key).merge(data2);
      this.map.set(key, vertex);
      return vertex;
    }
    get(key) {
      return this.map.get(key);
    }
    has(key) {
      return this.map.has(key);
    }
    delete(key) {
      return this.map.delete(key);
    }
    clear() {
      this.map.clear();
    }
    get keys() {
      return this.map.keys();
    }
    get values() {
      return this.map.values();
    }
    get entries() {
      return this.map.entries();
    }
    toJSON() {
      return Object.fromEntries([...this.map].map(([key, vertex]) => [key, vertex.toJSON()]));
    }
  };
  var Edges = class {
    /**
     * We keep track of the from and to sources {@link Vertices} containers,
     * so we can easily retrieve the actual vertex from its key when needed.
     */
    constructor(fromSource, toSource, descDirect, descInverse) {
      this.fromSource = fromSource;
      this.toSource = toSource;
      this.descDirect = descDirect;
      this.descInverse = descInverse;
    }
    #forward = /* @__PURE__ */ new Map();
    #backward = /* @__PURE__ */ new Map();
    /**
     * Track a relationship between two vertices.
     * **Note**: the user is responsible of ensuring the vertices exist.
     */
    add(fromKey, ...toKeys) {
      let forward = this.#forward.get(fromKey);
      if (!forward) this.#forward.set(fromKey, forward = /* @__PURE__ */ new Set());
      for (const toKey of toKeys) {
        forward.add(toKey);
        let backward = this.#backward.get(toKey);
        if (!backward) this.#backward.set(toKey, backward = /* @__PURE__ */ new Set());
        backward.add(fromKey);
      }
      return this;
    }
    /** Get the vertices from the keys. */
    get(fromKey, toKey) {
      return [this.fromSource.get(fromKey), this.toSource.get(toKey)];
    }
    /** Shortcut: add a relationship and return the target vertices. */
    addGet(fromKey, toKey) {
      return this.add(fromKey, toKey).get(fromKey, toKey);
    }
    delete(fromKey, toKey) {
      const f4 = this.#forward.get(fromKey)?.delete(toKey) ?? false;
      const b = this.#backward.get(toKey)?.delete(fromKey) ?? false;
      return f4 || b;
    }
    forward(fromKey) {
      return this.#forward.get(fromKey) ?? /* @__PURE__ */ new Set();
    }
    backward(toKey) {
      return this.#backward.get(toKey) ?? /* @__PURE__ */ new Set();
    }
    has(fromKey, toKey) {
      return this.#forward.get(fromKey)?.has(toKey) ?? false;
    }
    /** Return all keys `[fromKey, Set<toKey>]`. */
    get entriesForward() {
      return [...this.#forward].map(([key, set]) => [key, set]);
    }
    /** Return all keys `[toKey, Set<fromKey>]`. */
    get entriesBackward() {
      return [...this.#backward].map(([key, set]) => [key, set]);
    }
    /** Map all Vertex keys to their respective Vertices or undefined if missing. */
    get vertices() {
      const result = [];
      for (const [fromKey, toKeys] of this.entriesForward) {
        const from = this.fromSource.get(fromKey);
        for (const toKey of toKeys) result.push([fromKey, from, toKey, this.toSource.get(toKey)]);
      }
      return result;
    }
    /* Number of relationships. */
    get size() {
      let size = 0;
      for (const set of this.#forward.values()) size += set.size;
      return size;
    }
    /* {@link addMany} can be used to load back the result of the serialization. */
    toJSON() {
      return Object.fromEntries(this.entriesForward.map(([fromKey, setToKeys]) => [fromKey, [...setToKeys]]));
    }
  };
  var RelFrom = class {
    constructor(from, edges) {
      this.from = from;
      this.edges = edges;
    }
    get desc() {
      return this.edges.descDirect;
    }
    add(...toKeys) {
      this.edges.add(this.from.key, ...toKeys);
      return this.from;
    }
    /** Add keys if they match existing vertices only. */
    maybeAdd(toKeys) {
      const existing = toKeys.filter((k3) => this.edges.toSource.has(k3));
      return this.add(...existing);
    }
    remove(...toKeys) {
      for (const toKey of toKeys) this.edges.delete(this.from.key, toKey);
      return this.from;
    }
    has(toKey) {
      return this.edges.has(this.from.key, toKey);
    }
    get keys() {
      return this.edges.forward(this.from.key);
    }
    get values() {
      return [...this.keys].map((k3) => this.edges.toSource.get(k3)).filter((v3) => v3);
    }
    get size() {
      return this.keys.size;
    }
    toString() {
      return `RelFrom(${this.from}, ${this.desc})`;
    }
  };
  var RelTo = class {
    constructor(to, edges) {
      this.to = to;
      this.edges = edges;
    }
    get desc() {
      return this.edges.descInverse;
    }
    add(...fromKeys) {
      for (const fromKey of fromKeys) this.edges.add(fromKey, this.to.key);
      return this.to;
    }
    /** Add keys if they match existing vertices only. */
    maybeAdd(fromKeys) {
      const existing = fromKeys.filter((k3) => this.edges.fromSource.has(k3));
      return this.add(...existing);
    }
    remove(...fromKeys) {
      for (const fromKey of fromKeys) this.edges.delete(fromKey, this.to.key);
      return this.to;
    }
    has(fromKey) {
      return this.edges.has(fromKey, this.to.key);
    }
    get keys() {
      return this.edges.backward(this.to.key);
    }
    get values() {
      return [...this.keys].map((k3) => this.edges.fromSource.get(k3)).filter((v3) => v3);
    }
    get size() {
      return this.keys.size;
    }
    toString() {
      return `RelTo(${this.to}, ${this.desc})`;
    }
  };

  // packages/plangs/src/auxiliar/str_date.ts
  var validYear = (year) => year >= 1940 && year <= 2100;
  var validMonth = (month) => month >= 1 && month <= 12;
  function parseYear(val) {
    if (!val || val.length < 4 || val.length > 10) return;
    const year = Number.parseInt(val.split(/\D/, 3)[0], 10);
    if (validYear(year)) return year;
  }
  function parseMonth(val) {
    if (!val || val.length < 4 || val.length > 10) return;
    const month = Number.parseInt(val.split(/\D/, 3)[1], 10);
    if (validMonth(month)) return month;
  }
  function strDateCompare(a3, b) {
    if (a3 === b) return 0;
    if (!a3) return -1;
    if (!b) return 1;
    return a3.localeCompare(b);
  }
  function isRecent(date, referenceDate) {
    if (!date) return false;
    return date >= referenceDate;
  }

  // packages/plangs/src/graph/vertex_data_fields.ts
  var ReleaseWrapper = class {
    constructor(release) {
      this.release = release;
    }
    get version() {
      return this.release.version;
    }
    get date() {
      return this.release.date;
    }
    get year() {
      return parseYear(this.release.date);
    }
    get month() {
      return parseMonth(this.release.date);
    }
    get yearMonth() {
      const { year, month } = this;
      return year && month ? `${month.toString().padStart(2, "0")}/${year}` : year;
    }
    isRecent(referenceDate) {
      return isRecent(this.date, referenceDate);
    }
    compareDate(other) {
      return strDateCompare(this.date, other.date);
    }
  };
  var FieldReleases = class {
    constructor(vertex) {
      this.vertex = vertex;
    }
    get all() {
      return new IterTap(this.vertex.data.releases).map((rel2) => new ReleaseWrapper(rel2));
    }
    get last() {
      const all = this.all;
      if (all.size === 0) return void 0;
      if (all.size === 1) return all.get(0);
      return all.sort((r1, r22) => r1.compareDate(r22))[0];
    }
  };
  var FieldStrDate = class {
    constructor(key, vertex) {
      this.key = key;
      this.vertex = vertex;
    }
    get value() {
      return this.vertex.data[this.key];
    }
    get year() {
      return parseYear(this.value);
    }
    get strYear() {
      return this.value?.slice(0, 4);
    }
    get month() {
      return parseMonth(this.value);
    }
    isRecent(referenceDate) {
      return isRecent(this.value, referenceDate);
    }
  };
  var FieldGithub = class {
    constructor(vertex) {
      this.vertex = vertex;
    }
    /** Returns -1 if the number of stars is unknown. */
    get stars() {
      return this.vertex.data.githubStars ?? -1;
    }
    get path() {
      return this.vertex.data.extGithubPath;
    }
    get url() {
      return this.path ? `https://github.com/${this.path}` : void 0;
    }
  };

  // packages/plangs/src/graph/vertex_base.ts
  var PlangsVertex = class extends Vertex {
    constructor(graph, key) {
      super(key);
      this.graph = graph;
    }
    /** Generate a detail of the vertex, used to render thumbnails and info boxes. */
    get detail() {
      const relations = [];
      const vertex = this;
      for (const rel2 of vertex.relations.values()) {
        const relValues = rel2.values.filter((related) => related.key !== vertex.key);
        if (relValues.length === 0) continue;
        relations.push([rel2.desc, relValues.map(({ name, href }) => ({ name, href }))]);
      }
      const general = [];
      if (vertex instanceof VPlang) {
        tap(vertex.created.year, (year) => year && general.push({ kind: "text", value: `Appeared ${vertex.created.year}` }));
        tap(vertex.isPopular, (pop) => pop && general.push({ kind: "text", value: "Popular", title: "Languish's Rank <= #25 or popular on Github." }));
        tap(vertex.isTranspiler, (tsp) => tsp && general.push({ kind: "text", value: "Transpiler", title: "a.k.a. Source-to-Source Compiler." }));
        tap(
          vertex.releases.last,
          (rel2) => rel2 && general.push({ kind: "text", value: `Released ${rel2.yearMonth ?? rel2.version}`, title: "Last Release we know about." })
        );
        tap(
          [vertex.urlLanguish, vertex.ranking && `#${vertex.ranking} on Languish`],
          ([href, value]) => href && value && general.push({ kind: "link", href, value, title: value })
        );
      }
      for (const link of vertex.links ?? []) {
        general.push({ kind: "link", href: link.url, value: link.title ?? "Link" });
      }
      return {
        description: vertex.description,
        href: vertex.href,
        key: vertex.key,
        name: vertex.name,
        ranking: vertex.ranking,
        shortDesc: vertex.shortDesc,
        thumbUrl: vertex.thumbUrl,
        urlGithub: vertex.urlGithub,
        urlHome: vertex.urlHome,
        urlReddit: vertex.urlReddit,
        urlStackov: vertex.urlStackov,
        urlWikipedia: vertex.urlWikipedia,
        urlLanguish: vertex.urlLanguish,
        vertexDesc: vertex.vertexDesc,
        vertexKind: vertex.vertexKind,
        vertexName: vertex.vertexName,
        general,
        relations
      };
    }
    /** Internal path name for rendering the vertex in the web UI.  */
    get href() {
      if (this.vertexName === "plang") return `/${this.plainKey}`;
      if (this.vertexName === "post") return `/blog/${this.plainKey}`;
      return `/${this.vertexName.toLowerCase()}/${this.plainKey}`;
    }
    /** Node ranking, if the nodes are ranked. For instance, Plangs use Linguist data for ranking popularity. */
    get ranking() {
      return void 0;
    }
    get name() {
      return this.data.name ? this.data.name : this.plainKey;
    }
    #lcName;
    /** Lower case Name, used to compare agasint user search string. */
    get lcName() {
      if (!this.#lcName) this.#lcName = this.name.toLowerCase();
      return this.#lcName;
    }
    get created() {
      return new FieldStrDate("created", this);
    }
    get description() {
      return this.data.description || this.name;
    }
    get shortDesc() {
      if (this.data.shortDesc) return this.data.shortDesc;
      const desc = this.description;
      return desc.length > 100 ? `${desc.slice(0, 80)} ...` : desc;
    }
    get urlHome() {
      return this.data.extHomeURL;
    }
    get urlGithub() {
      return "github" in this ? this.github.url : void 0;
    }
    get urlStackov() {
      return this.data.stackovTags ? `https://stackoverflow.com/questions/tagged/${this.data.stackovTags.join("+")}` : void 0;
    }
    get urlReddit() {
      return this.data.extRedditPath ? `https://reddit.com/r/${this.data.extRedditPath}` : void 0;
    }
    get urlWikipedia() {
      return this.data.extWikipediaPath ? `https://en.wikipedia.org/wiki/${this.data.extWikipediaPath}` : void 0;
    }
    get urlLanguish() {
      if (!(this instanceof VPlang) || !this.data.languishRanking) return void 0;
      return `https://tjpalmer.github.io/languish/#names=${encodeURIComponent(this.name.toLowerCase())}`;
    }
    get links() {
      return new IterTap(this.data.links);
    }
    get images() {
      return new IterTap(this.data.images);
    }
    get keywords() {
      return new IterTap(this.data.keywords);
    }
    get keywordsRegexp() {
      const { keywords } = this.data;
      if (!keywords) return void 0;
      const lenient = keywords.map((k3) => k3.replaceAll(/[- ]/g, "\\s*.?\\s*"));
      return new RegExp(`\\b(${lenient.join("|")})\\b`, "i");
    }
    get thumbUrl() {
      return (this.images.find(({ kind }) => kind === "logo") ?? this.images.first)?.url;
    }
    addImages(images) {
      arrayMerge(this.data.images ??= [], images, (i1, i22) => i1.url === i22.url);
      return this;
    }
    addKeywords(keywords) {
      arrayMerge(this.data.keywords ??= [], keywords);
      return this;
    }
    addLinks(links) {
      arrayMerge(this.data.links ??= [], links, (l1, l22) => l1.url === l22.url);
      return this;
    }
    addStackovTags(stackovTags) {
      arrayMerge(this.data.stackovTags ??= [], stackovTags);
      return this;
    }
    /** Override merge to handle some array fields better. */
    merge(data2) {
      const { keywords, images, links, stackovTags, ...rest } = data2;
      if (images) this.addImages(images);
      if (keywords) this.addKeywords(keywords);
      if (links) this.addLinks(links);
      if (stackovTags) this.addStackovTags(stackovTags);
      return super.merge(rest);
    }
  };

  // packages/plangs/src/graph/generated.ts
  var PlangsGraphBase = class _PlangsGraphBase {
    constructor() {
      // Create a Vertices instances for each vertex.
      this.app = new Vertices("app", "app", (key) => new VApp(this, key));
      this.author = new Vertices("author", "author", (key) => new VAuthor(this, key));
      this.bundle = new Vertices("bundle", "bun", (key) => new VBundle(this, key));
      this.community = new Vertices("community", "comm", (key) => new VCommunity(this, key));
      this.learning = new Vertices("learning", "learn", (key) => new VLearning(this, key));
      this.library = new Vertices("library", "lib", (key) => new VLibrary(this, key));
      this.license = new Vertices("license", "lic", (key) => new VLicense(this, key));
      this.paradigm = new Vertices("paradigm", "para", (key) => new VParadigm(this, key));
      this.plang = new Vertices("plang", "pl", (key) => new VPlang(this, key));
      this.platform = new Vertices("platform", "plat", (key) => new VPlatform(this, key));
      this.post = new Vertices("post", "post", (key) => new VPost(this, key));
      this.subsystem = new Vertices("subsystem", "sys", (key) => new VSubsystem(this, key));
      this.tag = new Vertices("tag", "tag", (key) => new VTag(this, key));
      this.tool = new Vertices("tool", "tool", (key) => new VTool(this, key));
      this.typeSystem = new Vertices("typeSystem", "tsys", (key) => new VTypeSystem(this, key));
      /** All vertex collections. */
      this.vertices = {
        app: this.app,
        author: this.author,
        bundle: this.bundle,
        community: this.community,
        learning: this.learning,
        library: this.library,
        license: this.license,
        paradigm: this.paradigm,
        plang: this.plang,
        platform: this.platform,
        post: this.post,
        subsystem: this.subsystem,
        tag: this.tag,
        tool: this.tool,
        typeSystem: this.typeSystem
      };
      /** All edge collections. */
      this.edges = {
        appRelPlatforms: new Edges(this.app, this.platform, "Platforms", "Apps"),
        appRelWrittenWith: new Edges(this.app, this.plang, "Plangs", "Apps"),
        authorRelCommunites: new Edges(this.author, this.community, "Communites", "Members"),
        bundleRelPlangs: new Edges(this.bundle, this.plang, "Plangs", "Bundles"),
        bundleRelTools: new Edges(this.bundle, this.tool, "Tools", "Bundles"),
        communityRelApps: new Edges(this.community, this.app, "Apps", "Communities"),
        communityRelLibraries: new Edges(this.community, this.library, "Libraries", "Communities"),
        communityRelPlangs: new Edges(this.community, this.plang, "Plangs", "Communities"),
        communityRelSubsystems: new Edges(this.community, this.subsystem, "Subsystems", "Communities"),
        communityRelTools: new Edges(this.community, this.tool, "Tools", "Communities"),
        learningRelApps: new Edges(this.learning, this.app, "Apps", "Learning Resources"),
        learningRelCommunities: new Edges(this.learning, this.community, "Communities", "Learning Resources"),
        learningRelLibraries: new Edges(this.learning, this.library, "Libraries", "Learning Resources"),
        learningRelPlangs: new Edges(this.learning, this.plang, "Plangs", "Learning Resources"),
        learningRelSubsystems: new Edges(this.learning, this.subsystem, "Subsystems", "Learning Resources"),
        learningRelTools: new Edges(this.learning, this.tool, "Tools", "Learning Resources"),
        libraryRelPlangs: new Edges(this.library, this.plang, "Plangs", "Libraries"),
        libraryRelPlatforms: new Edges(this.library, this.platform, "Platforms", "Libraries"),
        libraryRelWrittenWith: new Edges(this.library, this.plang, "Written With", "Used for Libraries"),
        licenseRelApps: new Edges(this.license, this.app, "Apps", "Licenses"),
        licenseRelLibraries: new Edges(this.license, this.library, "Libraries", "Licenses"),
        licenseRelPlangs: new Edges(this.license, this.plang, "Plangs", "Licenses"),
        licenseRelSubsystems: new Edges(this.license, this.subsystem, "Subsystems", "Licenses"),
        licenseRelTools: new Edges(this.license, this.tool, "Tools", "Licenses"),
        plangRelCompilesTo: new Edges(this.plang, this.plang, "Transpiling Targets", "Source Plangs"),
        plangRelDialectOf: new Edges(this.plang, this.plang, "Dialect of", "Dialects"),
        plangRelImplements: new Edges(this.plang, this.plang, "Implements", "Implemented By"),
        plangRelInfluencedBy: new Edges(this.plang, this.plang, "Influenced By", "Influenced"),
        plangRelParadigms: new Edges(this.plang, this.paradigm, "Paradigms", "Plangs"),
        plangRelPlatforms: new Edges(this.plang, this.platform, "Platforms", "Plangs"),
        plangRelTools: new Edges(this.plang, this.tool, "Tools", "Plangs"),
        plangRelTypeSystems: new Edges(this.plang, this.typeSystem, "Type Systems", "Plangs"),
        plangRelWrittenWith: new Edges(this.plang, this.plang, "Written With", "Used to Write"),
        postRelApps: new Edges(this.post, this.app, "Apps", "Posts"),
        postRelAuthors: new Edges(this.post, this.author, "Authors", "Posts"),
        postRelCommunities: new Edges(this.post, this.community, "Communities", "Posts"),
        postRelLearning: new Edges(this.post, this.learning, "Learning Resources", "Posts"),
        postRelLibraries: new Edges(this.post, this.library, "Libraries", "Posts"),
        postRelPlangs: new Edges(this.post, this.plang, "Plangs", "Posts"),
        postRelSubsystems: new Edges(this.post, this.subsystem, "Subsystems", "Posts"),
        postRelTools: new Edges(this.post, this.tool, "Tools", "Posts"),
        subsystemRelPlatforms: new Edges(this.subsystem, this.platform, "Platforms", "Subsystems"),
        subsystemRelWrittenWith: new Edges(this.subsystem, this.plang, "Plangs", "Subsystems"),
        tagRelApps: new Edges(this.tag, this.app, "Apps tagged", "Tags"),
        tagRelCommunities: new Edges(this.tag, this.community, "Communities", "Tags"),
        tagRelLearning: new Edges(this.tag, this.learning, "Learning Resources", "Tags"),
        tagRelLibraries: new Edges(this.tag, this.library, "Libraries", "Tags"),
        tagRelPlangs: new Edges(this.tag, this.plang, "Plangs", "Tags"),
        tagRelSubsystems: new Edges(this.tag, this.subsystem, "Subsystems", "Tags"),
        tagRelTools: new Edges(this.tag, this.tool, "Tools", "Tags"),
        toolRelPlatforms: new Edges(this.tool, this.platform, "Platforms", "Tools"),
        toolRelWrittenWith: new Edges(this.tool, this.plang, "Implemented With", "Tool Plang")
      };
    }
    /** Return a type checked object identifying a relationship of a specific kind of Vertex. */
    static relConfig(vertexName, vertexRel) {
      const klass = _PlangsGraphBase.vertexClass(vertexName);
      const { edgeName, direction } = klass.relConfig[vertexRel];
      return { kind: "rel", edgeName, direction };
    }
    /** Return a type checked object identifying a property of the class that is "readable" (a prop returning a String, Boolean or Nunber). */
    static propConfig(vertexName, vertexProp) {
      return { kind: "prop", vertexName, vertexProp };
    }
    /** Get a Vertex class by its Vertex name. */
    static vertexClass(vertexName) {
      if (vertexName === "app") return VApp;
      if (vertexName === "author") return VAuthor;
      if (vertexName === "bundle") return VBundle;
      if (vertexName === "community") return VCommunity;
      if (vertexName === "learning") return VLearning;
      if (vertexName === "library") return VLibrary;
      if (vertexName === "license") return VLicense;
      if (vertexName === "paradigm") return VParadigm;
      if (vertexName === "plang") return VPlang;
      if (vertexName === "platform") return VPlatform;
      if (vertexName === "post") return VPost;
      if (vertexName === "subsystem") return VSubsystem;
      if (vertexName === "tag") return VTag;
      if (vertexName === "tool") return VTool;
      if (vertexName === "typeSystem") return VTypeSystem;
    }
    static {
      /** Vertex kinds per Vertex Name. The kind is the prefix of a Vertex Key. */
      this.vertexKind = /* @__PURE__ */ new Map([
        ["app", "app"],
        ["author", "author"],
        ["bundle", "bun"],
        ["community", "comm"],
        ["learning", "learn"],
        ["library", "lib"],
        ["license", "lic"],
        ["paradigm", "para"],
        ["plang", "pl"],
        ["platform", "plat"],
        ["post", "post"],
        ["subsystem", "sys"],
        ["tag", "tag"],
        ["tool", "tool"],
        ["typeSystem", "tsys"]
      ]);
    }
    static {
      /** Reverse map of vertexKind. */
      this.vertexNameByKind = new Map(Array.from(_PlangsGraphBase.vertexKind.entries()).map(([k3, v3]) => [v3, k3]));
    }
    /** Get a vertex by key, if the kind of vertex is known. */
    getVertex(vertexKey) {
      const kind = vertexKey.split("+", 2)[0];
      const vertexName = _PlangsGraphBase.vertexNameByKind.get(kind);
      if (!vertexName) return;
      return this.vertices[vertexName]?.get(vertexKey);
    }
    toJSON() {
      return {
        vertices: Object.fromEntries(Object.entries(this.vertices).map(([k3, v3]) => [k3, v3.toJSON()])),
        edges: Object.fromEntries(Object.entries(this.edges).map(([k3, e3]) => [k3, e3.toJSON()]))
      };
    }
    loadJSON(data2) {
      for (const [vertexName, vertices] of Object.entries(data2.vertices)) {
        const map = this.vertices[vertexName];
        for (const [vertexKey, vertexData] of Object.entries(vertices)) {
          map.set(vertexKey, vertexData);
        }
      }
      for (const [edgeName, edges] of Object.entries(data2.edges)) {
        const map = this.edges[edgeName];
        for (const [fromKey, toKeys] of Object.entries(edges)) {
          map.add(fromKey, ...toKeys);
        }
      }
      return this;
    }
  };
  var VAppBase = class _VAppBase extends PlangsVertex {
    constructor() {
      super(...arguments);
      this.vertexKind = _VAppBase.vertexKind;
      this.vertexDesc = _VAppBase.vertexDesc;
      this.vertexName = _VAppBase.vertexName;
      this.relConfig = _VAppBase.relConfig;
    }
    static {
      this.vertexKind = "app";
    }
    static {
      this.vertexName = "app";
    }
    static {
      this.vertexDesc = "Software Application";
    }
    static {
      this.relConfig = {
        relCommunities: { edgeName: "communityRelApps", direction: "inverse", gen: false },
        relLearning: { edgeName: "learningRelApps", direction: "inverse", gen: false },
        relLicenses: { edgeName: "licenseRelApps", direction: "inverse", gen: true },
        relPlatforms: { edgeName: "appRelPlatforms", direction: "direct", gen: true },
        relPosts: { edgeName: "postRelApps", direction: "inverse", gen: false },
        relTags: { edgeName: "tagRelApps", direction: "inverse", gen: true },
        relWrittenWith: { edgeName: "appRelWrittenWith", direction: "direct", gen: true }
      };
    }
    /** All the relations, keyed by rel name. */
    get relations() {
      return new Map(Object.keys(_VAppBase.relConfig).map((rel2) => [rel2, this[rel2]]));
    }
    /** Communities `VCommunity-[communityRelApps]->(this:VApp)`. Inverse: {@link VC.VCommunity.relApps}. */
    get relCommunities() {
      return new RelTo(this, this.graph.edges.communityRelApps);
    }
    /** Learning Resources `VLearning-[learningRelApps]->(this:VApp)`. Inverse: {@link VC.VLearning.relApps}. */
    get relLearning() {
      return new RelTo(this, this.graph.edges.learningRelApps);
    }
    /** Licenses `VLicense-[licenseRelApps]->(this:VApp)`. Inverse: {@link VC.VLicense.relApps}. */
    get relLicenses() {
      return new RelTo(this, this.graph.edges.licenseRelApps);
    }
    /** Platforms `(this:VApp)-[appRelPlatforms]->VPlatform`. Inverse: {@link VC.VPlatform.relApps}. */
    get relPlatforms() {
      return new RelFrom(this, this.graph.edges.appRelPlatforms);
    }
    /** Posts `VPost-[postRelApps]->(this:VApp)`. Inverse: {@link VC.VPost.relApps}. */
    get relPosts() {
      return new RelTo(this, this.graph.edges.postRelApps);
    }
    /** Tags `VTag-[tagRelApps]->(this:VApp)`. Inverse: {@link VC.VTag.relApps}. */
    get relTags() {
      return new RelTo(this, this.graph.edges.tagRelApps);
    }
    /** Plangs `(this:VApp)-[appRelWrittenWith]->VPlang`. Inverse: {@link VC.VPlang.relApps}. */
    get relWrittenWith() {
      return new RelFrom(this, this.graph.edges.appRelWrittenWith);
    }
  };
  var VAuthorBase = class _VAuthorBase extends PlangsVertex {
    constructor() {
      super(...arguments);
      this.vertexKind = _VAuthorBase.vertexKind;
      this.vertexDesc = _VAuthorBase.vertexDesc;
      this.vertexName = _VAuthorBase.vertexName;
      this.relConfig = _VAuthorBase.relConfig;
    }
    static {
      this.vertexKind = "author";
    }
    static {
      this.vertexName = "author";
    }
    static {
      this.vertexDesc = "Author";
    }
    static {
      this.relConfig = {
        relCommunites: { edgeName: "authorRelCommunites", direction: "direct", gen: true },
        relPosts: { edgeName: "postRelAuthors", direction: "inverse", gen: false }
      };
    }
    /** All the relations, keyed by rel name. */
    get relations() {
      return new Map(Object.keys(_VAuthorBase.relConfig).map((rel2) => [rel2, this[rel2]]));
    }
    /** Communites `(this:VAuthor)-[authorRelCommunites]->VCommunity`. Inverse: {@link VC.VCommunity.relMembers}. */
    get relCommunites() {
      return new RelFrom(this, this.graph.edges.authorRelCommunites);
    }
    /** Posts `VPost-[postRelAuthors]->(this:VAuthor)`. Inverse: {@link VC.VPost.relAuthors}. */
    get relPosts() {
      return new RelTo(this, this.graph.edges.postRelAuthors);
    }
  };
  var VBundleBase = class _VBundleBase extends PlangsVertex {
    constructor() {
      super(...arguments);
      this.vertexKind = _VBundleBase.vertexKind;
      this.vertexDesc = _VBundleBase.vertexDesc;
      this.vertexName = _VBundleBase.vertexName;
      this.relConfig = _VBundleBase.relConfig;
    }
    static {
      this.vertexKind = "bun";
    }
    static {
      this.vertexName = "bundle";
    }
    static {
      this.vertexDesc = "Bundle of Tools";
    }
    static {
      this.relConfig = {
        relPlangs: { edgeName: "bundleRelPlangs", direction: "direct", gen: false },
        relTools: { edgeName: "bundleRelTools", direction: "direct", gen: true }
      };
    }
    /** All the relations, keyed by rel name. */
    get relations() {
      return new Map(Object.keys(_VBundleBase.relConfig).map((rel2) => [rel2, this[rel2]]));
    }
    /** Plangs `(this:VBundle)-[bundleRelPlangs]->VPlang`. Inverse: {@link VC.VPlang.relBundles}. */
    get relPlangs() {
      return new RelFrom(this, this.graph.edges.bundleRelPlangs);
    }
    /** Tools `(this:VBundle)-[bundleRelTools]->VTool`. Inverse: {@link VC.VTool.relBundles}. */
    get relTools() {
      return new RelFrom(this, this.graph.edges.bundleRelTools);
    }
  };
  var VCommunityBase = class _VCommunityBase extends PlangsVertex {
    constructor() {
      super(...arguments);
      this.vertexKind = _VCommunityBase.vertexKind;
      this.vertexDesc = _VCommunityBase.vertexDesc;
      this.vertexName = _VCommunityBase.vertexName;
      this.relConfig = _VCommunityBase.relConfig;
    }
    static {
      this.vertexKind = "comm";
    }
    static {
      this.vertexName = "community";
    }
    static {
      this.vertexDesc = "Community";
    }
    static {
      this.relConfig = {
        relApps: { edgeName: "communityRelApps", direction: "direct", gen: true },
        relLearning: { edgeName: "learningRelCommunities", direction: "inverse", gen: false },
        relLibraries: { edgeName: "communityRelLibraries", direction: "direct", gen: true },
        relMembers: { edgeName: "authorRelCommunites", direction: "inverse", gen: false },
        relPlangs: { edgeName: "communityRelPlangs", direction: "direct", gen: true },
        relPosts: { edgeName: "postRelCommunities", direction: "inverse", gen: false },
        relSubsystems: { edgeName: "communityRelSubsystems", direction: "direct", gen: true },
        relTags: { edgeName: "tagRelCommunities", direction: "inverse", gen: true },
        relTools: { edgeName: "communityRelTools", direction: "direct", gen: true }
      };
    }
    /** All the relations, keyed by rel name. */
    get relations() {
      return new Map(Object.keys(_VCommunityBase.relConfig).map((rel2) => [rel2, this[rel2]]));
    }
    /** Apps `(this:VCommunity)-[communityRelApps]->VApp`. Inverse: {@link VC.VApp.relCommunities}. */
    get relApps() {
      return new RelFrom(this, this.graph.edges.communityRelApps);
    }
    /** Learning Resources `VLearning-[learningRelCommunities]->(this:VCommunity)`. Inverse: {@link VC.VLearning.relCommunities}. */
    get relLearning() {
      return new RelTo(this, this.graph.edges.learningRelCommunities);
    }
    /** Libraries `(this:VCommunity)-[communityRelLibraries]->VLibrary`. Inverse: {@link VC.VLibrary.relCommunities}. */
    get relLibraries() {
      return new RelFrom(this, this.graph.edges.communityRelLibraries);
    }
    /** Members `VAuthor-[authorRelCommunites]->(this:VCommunity)`. Inverse: {@link VC.VAuthor.relCommunites}. */
    get relMembers() {
      return new RelTo(this, this.graph.edges.authorRelCommunites);
    }
    /** Plangs `(this:VCommunity)-[communityRelPlangs]->VPlang`. Inverse: {@link VC.VPlang.relCommunities}. */
    get relPlangs() {
      return new RelFrom(this, this.graph.edges.communityRelPlangs);
    }
    /** Posts `VPost-[postRelCommunities]->(this:VCommunity)`. Inverse: {@link VC.VPost.relCommunities}. */
    get relPosts() {
      return new RelTo(this, this.graph.edges.postRelCommunities);
    }
    /** Subsystems `(this:VCommunity)-[communityRelSubsystems]->VSubsystem`. Inverse: {@link VC.VSubsystem.relCommunities}. */
    get relSubsystems() {
      return new RelFrom(this, this.graph.edges.communityRelSubsystems);
    }
    /** Tags `VTag-[tagRelCommunities]->(this:VCommunity)`. Inverse: {@link VC.VTag.relCommunities}. */
    get relTags() {
      return new RelTo(this, this.graph.edges.tagRelCommunities);
    }
    /** Tools `(this:VCommunity)-[communityRelTools]->VTool`. Inverse: {@link VC.VTool.relCommunities}. */
    get relTools() {
      return new RelFrom(this, this.graph.edges.communityRelTools);
    }
  };
  var VLearningBase = class _VLearningBase extends PlangsVertex {
    constructor() {
      super(...arguments);
      this.vertexKind = _VLearningBase.vertexKind;
      this.vertexDesc = _VLearningBase.vertexDesc;
      this.vertexName = _VLearningBase.vertexName;
      this.relConfig = _VLearningBase.relConfig;
    }
    static {
      this.vertexKind = "learn";
    }
    static {
      this.vertexName = "learning";
    }
    static {
      this.vertexDesc = "Learning Resource";
    }
    static {
      this.relConfig = {
        relApps: { edgeName: "learningRelApps", direction: "direct", gen: true },
        relCommunities: { edgeName: "learningRelCommunities", direction: "direct", gen: true },
        relLibraries: { edgeName: "learningRelLibraries", direction: "direct", gen: true },
        relPlangs: { edgeName: "learningRelPlangs", direction: "direct", gen: true },
        relPosts: { edgeName: "postRelLearning", direction: "inverse", gen: false },
        relSubsystems: { edgeName: "learningRelSubsystems", direction: "direct", gen: true },
        relTags: { edgeName: "tagRelLearning", direction: "inverse", gen: true },
        relTools: { edgeName: "learningRelTools", direction: "direct", gen: true }
      };
    }
    /** All the relations, keyed by rel name. */
    get relations() {
      return new Map(Object.keys(_VLearningBase.relConfig).map((rel2) => [rel2, this[rel2]]));
    }
    /** Apps `(this:VLearning)-[learningRelApps]->VApp`. Inverse: {@link VC.VApp.relLearning}. */
    get relApps() {
      return new RelFrom(this, this.graph.edges.learningRelApps);
    }
    /** Communities `(this:VLearning)-[learningRelCommunities]->VCommunity`. Inverse: {@link VC.VCommunity.relLearning}. */
    get relCommunities() {
      return new RelFrom(this, this.graph.edges.learningRelCommunities);
    }
    /** Libraries `(this:VLearning)-[learningRelLibraries]->VLibrary`. Inverse: {@link VC.VLibrary.relLearning}. */
    get relLibraries() {
      return new RelFrom(this, this.graph.edges.learningRelLibraries);
    }
    /** Plangs `(this:VLearning)-[learningRelPlangs]->VPlang`. Inverse: {@link VC.VPlang.relLearning}. */
    get relPlangs() {
      return new RelFrom(this, this.graph.edges.learningRelPlangs);
    }
    /** Posts `VPost-[postRelLearning]->(this:VLearning)`. Inverse: {@link VC.VPost.relLearning}. */
    get relPosts() {
      return new RelTo(this, this.graph.edges.postRelLearning);
    }
    /** Subsystems `(this:VLearning)-[learningRelSubsystems]->VSubsystem`. Inverse: {@link VC.VSubsystem.relLearning}. */
    get relSubsystems() {
      return new RelFrom(this, this.graph.edges.learningRelSubsystems);
    }
    /** Tags `VTag-[tagRelLearning]->(this:VLearning)`. Inverse: {@link VC.VTag.relLearning}. */
    get relTags() {
      return new RelTo(this, this.graph.edges.tagRelLearning);
    }
    /** Tools `(this:VLearning)-[learningRelTools]->VTool`. Inverse: {@link VC.VTool.relLearning}. */
    get relTools() {
      return new RelFrom(this, this.graph.edges.learningRelTools);
    }
  };
  var VLibraryBase = class _VLibraryBase extends PlangsVertex {
    constructor() {
      super(...arguments);
      this.vertexKind = _VLibraryBase.vertexKind;
      this.vertexDesc = _VLibraryBase.vertexDesc;
      this.vertexName = _VLibraryBase.vertexName;
      this.relConfig = _VLibraryBase.relConfig;
    }
    static {
      this.vertexKind = "lib";
    }
    static {
      this.vertexName = "library";
    }
    static {
      this.vertexDesc = "Software Library";
    }
    static {
      this.relConfig = {
        relCommunities: { edgeName: "communityRelLibraries", direction: "inverse", gen: false },
        relLearning: { edgeName: "learningRelLibraries", direction: "inverse", gen: false },
        relLicenses: { edgeName: "licenseRelLibraries", direction: "inverse", gen: true },
        relPlangs: { edgeName: "libraryRelPlangs", direction: "direct", gen: true },
        relPlatforms: { edgeName: "libraryRelPlatforms", direction: "direct", gen: true },
        relPosts: { edgeName: "postRelLibraries", direction: "inverse", gen: false },
        relTags: { edgeName: "tagRelLibraries", direction: "inverse", gen: true },
        relWrittenWith: { edgeName: "libraryRelWrittenWith", direction: "direct", gen: true }
      };
    }
    /** All the relations, keyed by rel name. */
    get relations() {
      return new Map(Object.keys(_VLibraryBase.relConfig).map((rel2) => [rel2, this[rel2]]));
    }
    /** Communities `VCommunity-[communityRelLibraries]->(this:VLibrary)`. Inverse: {@link VC.VCommunity.relLibraries}. */
    get relCommunities() {
      return new RelTo(this, this.graph.edges.communityRelLibraries);
    }
    /** Learning Resources `VLearning-[learningRelLibraries]->(this:VLibrary)`. Inverse: {@link VC.VLearning.relLibraries}. */
    get relLearning() {
      return new RelTo(this, this.graph.edges.learningRelLibraries);
    }
    /** Licenses `VLicense-[licenseRelLibraries]->(this:VLibrary)`. Inverse: {@link VC.VLicense.relLibraries}. */
    get relLicenses() {
      return new RelTo(this, this.graph.edges.licenseRelLibraries);
    }
    /** Plangs `(this:VLibrary)-[libraryRelPlangs]->VPlang`. Inverse: {@link VC.VPlang.relLibraries}. */
    get relPlangs() {
      return new RelFrom(this, this.graph.edges.libraryRelPlangs);
    }
    /** Platforms `(this:VLibrary)-[libraryRelPlatforms]->VPlatform`. Inverse: {@link VC.VPlatform.relLibraries}. */
    get relPlatforms() {
      return new RelFrom(this, this.graph.edges.libraryRelPlatforms);
    }
    /** Posts `VPost-[postRelLibraries]->(this:VLibrary)`. Inverse: {@link VC.VPost.relLibraries}. */
    get relPosts() {
      return new RelTo(this, this.graph.edges.postRelLibraries);
    }
    /** Tags `VTag-[tagRelLibraries]->(this:VLibrary)`. Inverse: {@link VC.VTag.relLibraries}. */
    get relTags() {
      return new RelTo(this, this.graph.edges.tagRelLibraries);
    }
    /** Written With `(this:VLibrary)-[libraryRelWrittenWith]->VPlang`. Inverse: {@link VC.VPlang.relUsedInLibrary}. */
    get relWrittenWith() {
      return new RelFrom(this, this.graph.edges.libraryRelWrittenWith);
    }
  };
  var VLicenseBase = class _VLicenseBase extends PlangsVertex {
    constructor() {
      super(...arguments);
      this.vertexKind = _VLicenseBase.vertexKind;
      this.vertexDesc = _VLicenseBase.vertexDesc;
      this.vertexName = _VLicenseBase.vertexName;
      this.relConfig = _VLicenseBase.relConfig;
    }
    static {
      this.vertexKind = "lic";
    }
    static {
      this.vertexName = "license";
    }
    static {
      this.vertexDesc = "Software License";
    }
    static {
      this.relConfig = {
        relApps: { edgeName: "licenseRelApps", direction: "direct", gen: false },
        relLibraries: { edgeName: "licenseRelLibraries", direction: "direct", gen: false },
        relPlangs: { edgeName: "licenseRelPlangs", direction: "direct", gen: false },
        relSubsystems: { edgeName: "licenseRelSubsystems", direction: "direct", gen: false },
        relTools: { edgeName: "licenseRelTools", direction: "direct", gen: false }
      };
    }
    /** All the relations, keyed by rel name. */
    get relations() {
      return new Map(Object.keys(_VLicenseBase.relConfig).map((rel2) => [rel2, this[rel2]]));
    }
    /** Apps `(this:VLicense)-[licenseRelApps]->VApp`. Inverse: {@link VC.VApp.relLicenses}. */
    get relApps() {
      return new RelFrom(this, this.graph.edges.licenseRelApps);
    }
    /** Libraries `(this:VLicense)-[licenseRelLibraries]->VLibrary`. Inverse: {@link VC.VLibrary.relLicenses}. */
    get relLibraries() {
      return new RelFrom(this, this.graph.edges.licenseRelLibraries);
    }
    /** Plangs `(this:VLicense)-[licenseRelPlangs]->VPlang`. Inverse: {@link VC.VPlang.relLicenses}. */
    get relPlangs() {
      return new RelFrom(this, this.graph.edges.licenseRelPlangs);
    }
    /** Subsystems `(this:VLicense)-[licenseRelSubsystems]->VSubsystem`. Inverse: {@link VC.VSubsystem.relLicenses}. */
    get relSubsystems() {
      return new RelFrom(this, this.graph.edges.licenseRelSubsystems);
    }
    /** Tools `(this:VLicense)-[licenseRelTools]->VTool`. Inverse: {@link VC.VTool.relLicenses}. */
    get relTools() {
      return new RelFrom(this, this.graph.edges.licenseRelTools);
    }
  };
  var VParadigmBase = class _VParadigmBase extends PlangsVertex {
    constructor() {
      super(...arguments);
      this.vertexKind = _VParadigmBase.vertexKind;
      this.vertexDesc = _VParadigmBase.vertexDesc;
      this.vertexName = _VParadigmBase.vertexName;
      this.relConfig = _VParadigmBase.relConfig;
    }
    static {
      this.vertexKind = "para";
    }
    static {
      this.vertexName = "paradigm";
    }
    static {
      this.vertexDesc = "Programming Language Paradigm";
    }
    static {
      this.relConfig = { relPlangs: { edgeName: "plangRelParadigms", direction: "inverse", gen: false } };
    }
    /** All the relations, keyed by rel name. */
    get relations() {
      return new Map(Object.keys(_VParadigmBase.relConfig).map((rel2) => [rel2, this[rel2]]));
    }
    /** Plangs `VPlang-[plangRelParadigms]->(this:VParadigm)`. Inverse: {@link VC.VPlang.relParadigms}. */
    get relPlangs() {
      return new RelTo(this, this.graph.edges.plangRelParadigms);
    }
  };
  var VPlangBase = class _VPlangBase extends PlangsVertex {
    constructor() {
      super(...arguments);
      this.vertexKind = _VPlangBase.vertexKind;
      this.vertexDesc = _VPlangBase.vertexDesc;
      this.vertexName = _VPlangBase.vertexName;
      this.relConfig = _VPlangBase.relConfig;
    }
    static {
      this.vertexKind = "pl";
    }
    static {
      this.vertexName = "plang";
    }
    static {
      this.vertexDesc = "Programming Language";
    }
    static {
      this.relConfig = {
        relApps: { edgeName: "appRelWrittenWith", direction: "inverse", gen: false },
        relBundles: { edgeName: "bundleRelPlangs", direction: "inverse", gen: false },
        relCommunities: { edgeName: "communityRelPlangs", direction: "inverse", gen: false },
        relCompilesTo: { edgeName: "plangRelCompilesTo", direction: "direct", gen: true },
        relDialectOf: { edgeName: "plangRelDialectOf", direction: "direct", gen: true },
        relDialects: { edgeName: "plangRelDialectOf", direction: "inverse", gen: false },
        relImplementedBy: { edgeName: "plangRelImplements", direction: "inverse", gen: false },
        relImplements: { edgeName: "plangRelImplements", direction: "direct", gen: true },
        relInfluenced: { edgeName: "plangRelInfluencedBy", direction: "inverse", gen: false },
        relInfluencedBy: { edgeName: "plangRelInfluencedBy", direction: "direct", gen: true },
        relLearning: { edgeName: "learningRelPlangs", direction: "inverse", gen: false },
        relLibraries: { edgeName: "libraryRelPlangs", direction: "inverse", gen: false },
        relLicenses: { edgeName: "licenseRelPlangs", direction: "inverse", gen: true },
        relParadigms: { edgeName: "plangRelParadigms", direction: "direct", gen: true },
        relPlatforms: { edgeName: "plangRelPlatforms", direction: "direct", gen: true },
        relPosts: { edgeName: "postRelPlangs", direction: "inverse", gen: false },
        relSubsystems: { edgeName: "subsystemRelWrittenWith", direction: "inverse", gen: false },
        relTags: { edgeName: "tagRelPlangs", direction: "inverse", gen: true },
        relTargetOf: { edgeName: "plangRelCompilesTo", direction: "inverse", gen: false },
        relTools: { edgeName: "plangRelTools", direction: "direct", gen: false },
        relToolsUsing: { edgeName: "toolRelWrittenWith", direction: "inverse", gen: false },
        relTypeSystems: { edgeName: "plangRelTypeSystems", direction: "direct", gen: true },
        relUsedInLibrary: { edgeName: "libraryRelWrittenWith", direction: "inverse", gen: false },
        relUsedToWrite: { edgeName: "plangRelWrittenWith", direction: "inverse", gen: false },
        relWrittenWith: { edgeName: "plangRelWrittenWith", direction: "direct", gen: true }
      };
    }
    /** All the relations, keyed by rel name. */
    get relations() {
      return new Map(Object.keys(_VPlangBase.relConfig).map((rel2) => [rel2, this[rel2]]));
    }
    /** Apps `VApp-[appRelWrittenWith]->(this:VPlang)`. Inverse: {@link VC.VApp.relWrittenWith}. */
    get relApps() {
      return new RelTo(this, this.graph.edges.appRelWrittenWith);
    }
    /** Bundles `VBundle-[bundleRelPlangs]->(this:VPlang)`. Inverse: {@link VC.VBundle.relPlangs}. */
    get relBundles() {
      return new RelTo(this, this.graph.edges.bundleRelPlangs);
    }
    /** Communities `VCommunity-[communityRelPlangs]->(this:VPlang)`. Inverse: {@link VC.VCommunity.relPlangs}. */
    get relCommunities() {
      return new RelTo(this, this.graph.edges.communityRelPlangs);
    }
    /** Transpiling Targets `(this:VPlang)-[plangRelCompilesTo]->VPlang`. Inverse: {@link VC.VPlang.relTargetOf}. */
    get relCompilesTo() {
      return new RelFrom(this, this.graph.edges.plangRelCompilesTo);
    }
    /** Dialect of `(this:VPlang)-[plangRelDialectOf]->VPlang`. Inverse: {@link VC.VPlang.relDialects}. */
    get relDialectOf() {
      return new RelFrom(this, this.graph.edges.plangRelDialectOf);
    }
    /** Dialects `VPlang-[plangRelDialectOf]->(this:VPlang)`. Inverse: {@link VC.VPlang.relDialectOf}. */
    get relDialects() {
      return new RelTo(this, this.graph.edges.plangRelDialectOf);
    }
    /** Implemented By `VPlang-[plangRelImplements]->(this:VPlang)`. Inverse: {@link VC.VPlang.relImplements}. */
    get relImplementedBy() {
      return new RelTo(this, this.graph.edges.plangRelImplements);
    }
    /** Implements `(this:VPlang)-[plangRelImplements]->VPlang`. Inverse: {@link VC.VPlang.relImplementedBy}. */
    get relImplements() {
      return new RelFrom(this, this.graph.edges.plangRelImplements);
    }
    /** Influenced `VPlang-[plangRelInfluencedBy]->(this:VPlang)`. Inverse: {@link VC.VPlang.relInfluencedBy}. */
    get relInfluenced() {
      return new RelTo(this, this.graph.edges.plangRelInfluencedBy);
    }
    /** Influenced By `(this:VPlang)-[plangRelInfluencedBy]->VPlang`. Inverse: {@link VC.VPlang.relInfluenced}. */
    get relInfluencedBy() {
      return new RelFrom(this, this.graph.edges.plangRelInfluencedBy);
    }
    /** Learning Resources `VLearning-[learningRelPlangs]->(this:VPlang)`. Inverse: {@link VC.VLearning.relPlangs}. */
    get relLearning() {
      return new RelTo(this, this.graph.edges.learningRelPlangs);
    }
    /** Libraries `VLibrary-[libraryRelPlangs]->(this:VPlang)`. Inverse: {@link VC.VLibrary.relPlangs}. */
    get relLibraries() {
      return new RelTo(this, this.graph.edges.libraryRelPlangs);
    }
    /** Licenses `VLicense-[licenseRelPlangs]->(this:VPlang)`. Inverse: {@link VC.VLicense.relPlangs}. */
    get relLicenses() {
      return new RelTo(this, this.graph.edges.licenseRelPlangs);
    }
    /** Paradigms `(this:VPlang)-[plangRelParadigms]->VParadigm`. Inverse: {@link VC.VParadigm.relPlangs}. */
    get relParadigms() {
      return new RelFrom(this, this.graph.edges.plangRelParadigms);
    }
    /** Platforms `(this:VPlang)-[plangRelPlatforms]->VPlatform`. Inverse: {@link VC.VPlatform.relPlangs}. */
    get relPlatforms() {
      return new RelFrom(this, this.graph.edges.plangRelPlatforms);
    }
    /** Posts `VPost-[postRelPlangs]->(this:VPlang)`. Inverse: {@link VC.VPost.relPlangs}. */
    get relPosts() {
      return new RelTo(this, this.graph.edges.postRelPlangs);
    }
    /** Subsystems `VSubsystem-[subsystemRelWrittenWith]->(this:VPlang)`. Inverse: {@link VC.VSubsystem.relWrittenWith}. */
    get relSubsystems() {
      return new RelTo(this, this.graph.edges.subsystemRelWrittenWith);
    }
    /** Tags `VTag-[tagRelPlangs]->(this:VPlang)`. Inverse: {@link VC.VTag.relPlangs}. */
    get relTags() {
      return new RelTo(this, this.graph.edges.tagRelPlangs);
    }
    /** Source Plangs `VPlang-[plangRelCompilesTo]->(this:VPlang)`. Inverse: {@link VC.VPlang.relCompilesTo}. */
    get relTargetOf() {
      return new RelTo(this, this.graph.edges.plangRelCompilesTo);
    }
    /** Tools `(this:VPlang)-[plangRelTools]->VTool`. Inverse: {@link VC.VTool.relPlangs}. */
    get relTools() {
      return new RelFrom(this, this.graph.edges.plangRelTools);
    }
    /** Tool Plang `VTool-[toolRelWrittenWith]->(this:VPlang)`. Inverse: {@link VC.VTool.relWrittenWith}. */
    get relToolsUsing() {
      return new RelTo(this, this.graph.edges.toolRelWrittenWith);
    }
    /** Type Systems `(this:VPlang)-[plangRelTypeSystems]->VTypeSystem`. Inverse: {@link VC.VTypeSystem.relPlangs}. */
    get relTypeSystems() {
      return new RelFrom(this, this.graph.edges.plangRelTypeSystems);
    }
    /** Used for Libraries `VLibrary-[libraryRelWrittenWith]->(this:VPlang)`. Inverse: {@link VC.VLibrary.relWrittenWith}. */
    get relUsedInLibrary() {
      return new RelTo(this, this.graph.edges.libraryRelWrittenWith);
    }
    /** Used to Write `VPlang-[plangRelWrittenWith]->(this:VPlang)`. Inverse: {@link VC.VPlang.relWrittenWith}. */
    get relUsedToWrite() {
      return new RelTo(this, this.graph.edges.plangRelWrittenWith);
    }
    /** Written With `(this:VPlang)-[plangRelWrittenWith]->VPlang`. Inverse: {@link VC.VPlang.relUsedToWrite}. */
    get relWrittenWith() {
      return new RelFrom(this, this.graph.edges.plangRelWrittenWith);
    }
  };
  var VPlatformBase = class _VPlatformBase extends PlangsVertex {
    constructor() {
      super(...arguments);
      this.vertexKind = _VPlatformBase.vertexKind;
      this.vertexDesc = _VPlatformBase.vertexDesc;
      this.vertexName = _VPlatformBase.vertexName;
      this.relConfig = _VPlatformBase.relConfig;
    }
    static {
      this.vertexKind = "plat";
    }
    static {
      this.vertexName = "platform";
    }
    static {
      this.vertexDesc = "Platform where Software runs";
    }
    static {
      this.relConfig = {
        relApps: { edgeName: "appRelPlatforms", direction: "inverse", gen: false },
        relLibraries: { edgeName: "libraryRelPlatforms", direction: "inverse", gen: false },
        relPlangs: { edgeName: "plangRelPlatforms", direction: "inverse", gen: false },
        relSubsystems: { edgeName: "subsystemRelPlatforms", direction: "inverse", gen: false },
        relTools: { edgeName: "toolRelPlatforms", direction: "inverse", gen: false }
      };
    }
    /** All the relations, keyed by rel name. */
    get relations() {
      return new Map(Object.keys(_VPlatformBase.relConfig).map((rel2) => [rel2, this[rel2]]));
    }
    /** Apps `VApp-[appRelPlatforms]->(this:VPlatform)`. Inverse: {@link VC.VApp.relPlatforms}. */
    get relApps() {
      return new RelTo(this, this.graph.edges.appRelPlatforms);
    }
    /** Libraries `VLibrary-[libraryRelPlatforms]->(this:VPlatform)`. Inverse: {@link VC.VLibrary.relPlatforms}. */
    get relLibraries() {
      return new RelTo(this, this.graph.edges.libraryRelPlatforms);
    }
    /** Plangs `VPlang-[plangRelPlatforms]->(this:VPlatform)`. Inverse: {@link VC.VPlang.relPlatforms}. */
    get relPlangs() {
      return new RelTo(this, this.graph.edges.plangRelPlatforms);
    }
    /** Subsystems `VSubsystem-[subsystemRelPlatforms]->(this:VPlatform)`. Inverse: {@link VC.VSubsystem.relPlatforms}. */
    get relSubsystems() {
      return new RelTo(this, this.graph.edges.subsystemRelPlatforms);
    }
    /** Tools `VTool-[toolRelPlatforms]->(this:VPlatform)`. Inverse: {@link VC.VTool.relPlatforms}. */
    get relTools() {
      return new RelTo(this, this.graph.edges.toolRelPlatforms);
    }
  };
  var VPostBase = class _VPostBase extends PlangsVertex {
    constructor() {
      super(...arguments);
      this.vertexKind = _VPostBase.vertexKind;
      this.vertexDesc = _VPostBase.vertexDesc;
      this.vertexName = _VPostBase.vertexName;
      this.relConfig = _VPostBase.relConfig;
    }
    static {
      this.vertexKind = "post";
    }
    static {
      this.vertexName = "post";
    }
    static {
      this.vertexDesc = "Blog Post";
    }
    static {
      this.relConfig = {
        relApps: { edgeName: "postRelApps", direction: "direct", gen: false },
        relAuthors: { edgeName: "postRelAuthors", direction: "direct", gen: false },
        relCommunities: { edgeName: "postRelCommunities", direction: "direct", gen: false },
        relLearning: { edgeName: "postRelLearning", direction: "direct", gen: false },
        relLibraries: { edgeName: "postRelLibraries", direction: "direct", gen: false },
        relPlangs: { edgeName: "postRelPlangs", direction: "direct", gen: false },
        relSubsystems: { edgeName: "postRelSubsystems", direction: "direct", gen: false },
        relTools: { edgeName: "postRelTools", direction: "direct", gen: false }
      };
    }
    /** All the relations, keyed by rel name. */
    get relations() {
      return new Map(Object.keys(_VPostBase.relConfig).map((rel2) => [rel2, this[rel2]]));
    }
    /** Apps `(this:VPost)-[postRelApps]->VApp`. Inverse: {@link VC.VApp.relPosts}. */
    get relApps() {
      return new RelFrom(this, this.graph.edges.postRelApps);
    }
    /** Authors `(this:VPost)-[postRelAuthors]->VAuthor`. Inverse: {@link VC.VAuthor.relPosts}. */
    get relAuthors() {
      return new RelFrom(this, this.graph.edges.postRelAuthors);
    }
    /** Communities `(this:VPost)-[postRelCommunities]->VCommunity`. Inverse: {@link VC.VCommunity.relPosts}. */
    get relCommunities() {
      return new RelFrom(this, this.graph.edges.postRelCommunities);
    }
    /** Learning Resources `(this:VPost)-[postRelLearning]->VLearning`. Inverse: {@link VC.VLearning.relPosts}. */
    get relLearning() {
      return new RelFrom(this, this.graph.edges.postRelLearning);
    }
    /** Libraries `(this:VPost)-[postRelLibraries]->VLibrary`. Inverse: {@link VC.VLibrary.relPosts}. */
    get relLibraries() {
      return new RelFrom(this, this.graph.edges.postRelLibraries);
    }
    /** Plangs `(this:VPost)-[postRelPlangs]->VPlang`. Inverse: {@link VC.VPlang.relPosts}. */
    get relPlangs() {
      return new RelFrom(this, this.graph.edges.postRelPlangs);
    }
    /** Subsystems `(this:VPost)-[postRelSubsystems]->VSubsystem`. Inverse: {@link VC.VSubsystem.relPosts}. */
    get relSubsystems() {
      return new RelFrom(this, this.graph.edges.postRelSubsystems);
    }
    /** Tools `(this:VPost)-[postRelTools]->VTool`. Inverse: {@link VC.VTool.relPosts}. */
    get relTools() {
      return new RelFrom(this, this.graph.edges.postRelTools);
    }
  };
  var VSubsystemBase = class _VSubsystemBase extends PlangsVertex {
    constructor() {
      super(...arguments);
      this.vertexKind = _VSubsystemBase.vertexKind;
      this.vertexDesc = _VSubsystemBase.vertexDesc;
      this.vertexName = _VSubsystemBase.vertexName;
      this.relConfig = _VSubsystemBase.relConfig;
    }
    static {
      this.vertexKind = "sys";
    }
    static {
      this.vertexName = "subsystem";
    }
    static {
      this.vertexDesc = "Subsystem";
    }
    static {
      this.relConfig = {
        relCommunities: { edgeName: "communityRelSubsystems", direction: "inverse", gen: false },
        relLearning: { edgeName: "learningRelSubsystems", direction: "inverse", gen: false },
        relLicenses: { edgeName: "licenseRelSubsystems", direction: "inverse", gen: true },
        relPlatforms: { edgeName: "subsystemRelPlatforms", direction: "direct", gen: true },
        relPosts: { edgeName: "postRelSubsystems", direction: "inverse", gen: false },
        relTags: { edgeName: "tagRelSubsystems", direction: "inverse", gen: true },
        relWrittenWith: { edgeName: "subsystemRelWrittenWith", direction: "direct", gen: true }
      };
    }
    /** All the relations, keyed by rel name. */
    get relations() {
      return new Map(Object.keys(_VSubsystemBase.relConfig).map((rel2) => [rel2, this[rel2]]));
    }
    /** Communities `VCommunity-[communityRelSubsystems]->(this:VSubsystem)`. Inverse: {@link VC.VCommunity.relSubsystems}. */
    get relCommunities() {
      return new RelTo(this, this.graph.edges.communityRelSubsystems);
    }
    /** Learning Resources `VLearning-[learningRelSubsystems]->(this:VSubsystem)`. Inverse: {@link VC.VLearning.relSubsystems}. */
    get relLearning() {
      return new RelTo(this, this.graph.edges.learningRelSubsystems);
    }
    /** Licenses `VLicense-[licenseRelSubsystems]->(this:VSubsystem)`. Inverse: {@link VC.VLicense.relSubsystems}. */
    get relLicenses() {
      return new RelTo(this, this.graph.edges.licenseRelSubsystems);
    }
    /** Platforms `(this:VSubsystem)-[subsystemRelPlatforms]->VPlatform`. Inverse: {@link VC.VPlatform.relSubsystems}. */
    get relPlatforms() {
      return new RelFrom(this, this.graph.edges.subsystemRelPlatforms);
    }
    /** Posts `VPost-[postRelSubsystems]->(this:VSubsystem)`. Inverse: {@link VC.VPost.relSubsystems}. */
    get relPosts() {
      return new RelTo(this, this.graph.edges.postRelSubsystems);
    }
    /** Tags `VTag-[tagRelSubsystems]->(this:VSubsystem)`. Inverse: {@link VC.VTag.relSubsystems}. */
    get relTags() {
      return new RelTo(this, this.graph.edges.tagRelSubsystems);
    }
    /** Plangs `(this:VSubsystem)-[subsystemRelWrittenWith]->VPlang`. Inverse: {@link VC.VPlang.relSubsystems}. */
    get relWrittenWith() {
      return new RelFrom(this, this.graph.edges.subsystemRelWrittenWith);
    }
  };
  var VTagBase = class _VTagBase extends PlangsVertex {
    constructor() {
      super(...arguments);
      this.vertexKind = _VTagBase.vertexKind;
      this.vertexDesc = _VTagBase.vertexDesc;
      this.vertexName = _VTagBase.vertexName;
      this.relConfig = _VTagBase.relConfig;
    }
    static {
      this.vertexKind = "tag";
    }
    static {
      this.vertexName = "tag";
    }
    static {
      this.vertexDesc = "Tag";
    }
    static {
      this.relConfig = {
        relApps: { edgeName: "tagRelApps", direction: "direct", gen: false },
        relCommunities: { edgeName: "tagRelCommunities", direction: "direct", gen: false },
        relLearning: { edgeName: "tagRelLearning", direction: "direct", gen: false },
        relLibraries: { edgeName: "tagRelLibraries", direction: "direct", gen: false },
        relPlangs: { edgeName: "tagRelPlangs", direction: "direct", gen: false },
        relSubsystems: { edgeName: "tagRelSubsystems", direction: "direct", gen: false },
        relTools: { edgeName: "tagRelTools", direction: "direct", gen: false }
      };
    }
    /** All the relations, keyed by rel name. */
    get relations() {
      return new Map(Object.keys(_VTagBase.relConfig).map((rel2) => [rel2, this[rel2]]));
    }
    /** Apps tagged `(this:VTag)-[tagRelApps]->VApp`. Inverse: {@link VC.VApp.relTags}. */
    get relApps() {
      return new RelFrom(this, this.graph.edges.tagRelApps);
    }
    /** Communities `(this:VTag)-[tagRelCommunities]->VCommunity`. Inverse: {@link VC.VCommunity.relTags}. */
    get relCommunities() {
      return new RelFrom(this, this.graph.edges.tagRelCommunities);
    }
    /** Learning Resources `(this:VTag)-[tagRelLearning]->VLearning`. Inverse: {@link VC.VLearning.relTags}. */
    get relLearning() {
      return new RelFrom(this, this.graph.edges.tagRelLearning);
    }
    /** Libraries `(this:VTag)-[tagRelLibraries]->VLibrary`. Inverse: {@link VC.VLibrary.relTags}. */
    get relLibraries() {
      return new RelFrom(this, this.graph.edges.tagRelLibraries);
    }
    /** Plangs `(this:VTag)-[tagRelPlangs]->VPlang`. Inverse: {@link VC.VPlang.relTags}. */
    get relPlangs() {
      return new RelFrom(this, this.graph.edges.tagRelPlangs);
    }
    /** Subsystems `(this:VTag)-[tagRelSubsystems]->VSubsystem`. Inverse: {@link VC.VSubsystem.relTags}. */
    get relSubsystems() {
      return new RelFrom(this, this.graph.edges.tagRelSubsystems);
    }
    /** Tools `(this:VTag)-[tagRelTools]->VTool`. Inverse: {@link VC.VTool.relTags}. */
    get relTools() {
      return new RelFrom(this, this.graph.edges.tagRelTools);
    }
  };
  var VToolBase = class _VToolBase extends PlangsVertex {
    constructor() {
      super(...arguments);
      this.vertexKind = _VToolBase.vertexKind;
      this.vertexDesc = _VToolBase.vertexDesc;
      this.vertexName = _VToolBase.vertexName;
      this.relConfig = _VToolBase.relConfig;
    }
    static {
      this.vertexKind = "tool";
    }
    static {
      this.vertexName = "tool";
    }
    static {
      this.vertexDesc = "Programming Tool";
    }
    static {
      this.relConfig = {
        relBundles: { edgeName: "bundleRelTools", direction: "inverse", gen: false },
        relCommunities: { edgeName: "communityRelTools", direction: "inverse", gen: false },
        relLearning: { edgeName: "learningRelTools", direction: "inverse", gen: false },
        relLicenses: { edgeName: "licenseRelTools", direction: "inverse", gen: true },
        relPlangs: { edgeName: "plangRelTools", direction: "inverse", gen: true },
        relPlatforms: { edgeName: "toolRelPlatforms", direction: "direct", gen: true },
        relPosts: { edgeName: "postRelTools", direction: "inverse", gen: false },
        relTags: { edgeName: "tagRelTools", direction: "inverse", gen: true },
        relWrittenWith: { edgeName: "toolRelWrittenWith", direction: "direct", gen: true }
      };
    }
    /** All the relations, keyed by rel name. */
    get relations() {
      return new Map(Object.keys(_VToolBase.relConfig).map((rel2) => [rel2, this[rel2]]));
    }
    /** Bundles `VBundle-[bundleRelTools]->(this:VTool)`. Inverse: {@link VC.VBundle.relTools}. */
    get relBundles() {
      return new RelTo(this, this.graph.edges.bundleRelTools);
    }
    /** Communities `VCommunity-[communityRelTools]->(this:VTool)`. Inverse: {@link VC.VCommunity.relTools}. */
    get relCommunities() {
      return new RelTo(this, this.graph.edges.communityRelTools);
    }
    /** Learning Resources `VLearning-[learningRelTools]->(this:VTool)`. Inverse: {@link VC.VLearning.relTools}. */
    get relLearning() {
      return new RelTo(this, this.graph.edges.learningRelTools);
    }
    /** Licenses `VLicense-[licenseRelTools]->(this:VTool)`. Inverse: {@link VC.VLicense.relTools}. */
    get relLicenses() {
      return new RelTo(this, this.graph.edges.licenseRelTools);
    }
    /** Plangs `VPlang-[plangRelTools]->(this:VTool)`. Inverse: {@link VC.VPlang.relTools}. */
    get relPlangs() {
      return new RelTo(this, this.graph.edges.plangRelTools);
    }
    /** Platforms `(this:VTool)-[toolRelPlatforms]->VPlatform`. Inverse: {@link VC.VPlatform.relTools}. */
    get relPlatforms() {
      return new RelFrom(this, this.graph.edges.toolRelPlatforms);
    }
    /** Posts `VPost-[postRelTools]->(this:VTool)`. Inverse: {@link VC.VPost.relTools}. */
    get relPosts() {
      return new RelTo(this, this.graph.edges.postRelTools);
    }
    /** Tags `VTag-[tagRelTools]->(this:VTool)`. Inverse: {@link VC.VTag.relTools}. */
    get relTags() {
      return new RelTo(this, this.graph.edges.tagRelTools);
    }
    /** Implemented With `(this:VTool)-[toolRelWrittenWith]->VPlang`. Inverse: {@link VC.VPlang.relToolsUsing}. */
    get relWrittenWith() {
      return new RelFrom(this, this.graph.edges.toolRelWrittenWith);
    }
  };
  var VTypeSystemBase = class _VTypeSystemBase extends PlangsVertex {
    constructor() {
      super(...arguments);
      this.vertexKind = _VTypeSystemBase.vertexKind;
      this.vertexDesc = _VTypeSystemBase.vertexDesc;
      this.vertexName = _VTypeSystemBase.vertexName;
      this.relConfig = _VTypeSystemBase.relConfig;
    }
    static {
      this.vertexKind = "tsys";
    }
    static {
      this.vertexName = "typeSystem";
    }
    static {
      this.vertexDesc = "Type System";
    }
    static {
      this.relConfig = { relPlangs: { edgeName: "plangRelTypeSystems", direction: "inverse", gen: false } };
    }
    /** All the relations, keyed by rel name. */
    get relations() {
      return new Map(Object.keys(_VTypeSystemBase.relConfig).map((rel2) => [rel2, this[rel2]]));
    }
    /** Plangs `VPlang-[plangRelTypeSystems]->(this:VTypeSystem)`. Inverse: {@link VC.VPlang.relTypeSystems}. */
    get relPlangs() {
      return new RelTo(this, this.graph.edges.plangRelTypeSystems);
    }
  };

  // packages/plangs/src/graph/index.ts
  var rel = PlangsGraphBase.relConfig;
  var prop = PlangsGraphBase.propConfig;
  var PlangsGraph = class extends PlangsGraphBase {
    /** We can derive / infer some data from the existing data. */
    materialize() {
      for (const bundle of this.bundle.values) {
        for (const tool of bundle.relTools.values) {
          bundle.relPlangs.add(...tool.relPlangs.keys);
        }
      }
      for (const plang of this.plang.values) {
        if (!plang.isTranspiler && plang.relCompilesTo.size > 0) {
          plang.data.isTranspiler = true;
        }
      }
      return this;
    }
  };
  var VApp = class extends VAppBase {
    get github() {
      return new FieldGithub(this);
    }
    get releases() {
      return new FieldReleases(this);
    }
  };
  var VAuthor = class extends VAuthorBase {
  };
  var VBundle = class extends VBundleBase {
  };
  var VCommunity = class extends VCommunityBase {
  };
  var VLearning = class extends VLearningBase {
  };
  var VLibrary = class extends VLibraryBase {
    get github() {
      return new FieldGithub(this);
    }
    get releases() {
      return new FieldReleases(this);
    }
  };
  var VLicense = class extends VLicenseBase {
    get spdx() {
      return this.data.spdx;
    }
    get isFSFLibre() {
      return this.data.isFSFLibre === true;
    }
    get isOSIApproved() {
      return this.data.isOSIApproved === true;
    }
  };
  var VParadigm = class extends VParadigmBase {
  };
  var VPlang = class extends VPlangBase {
    addExtensions(exts) {
      arrayMerge(this.data.extensions ??= [], exts);
      return this;
    }
    addFilenames(filenames) {
      arrayMerge(this.data.filenames ??= [], filenames);
      return this;
    }
    addReleases(releases) {
      arrayMerge(this.data.releases ??= [], releases, (r1, r22) => r1.version === r22.version);
      return this;
    }
    /** Override merge to handle some array fields better. */
    merge(data2) {
      const { extensions, filenames, releases, ...rest } = data2;
      if (extensions) this.addExtensions(extensions);
      if (filenames) this.addFilenames(filenames);
      if (releases) this.addReleases(releases);
      return super.merge(rest);
    }
    get extensions() {
      return new IterTap(this.data.extensions);
    }
    get github() {
      return new FieldGithub(this);
    }
    get isPopular() {
      const { githubPopular, languishRanking } = this.data;
      return !!githubPopular || typeof languishRanking === "number" && languishRanking <= 25;
    }
    get isTranspiler() {
      return this.data.isTranspiler === true;
    }
    get ranking() {
      return this.data.languishRanking;
    }
    get releases() {
      return new FieldReleases(this);
    }
    get stackovTags() {
      return new IterTap(this.data.stackovTags);
    }
    /**
     * Builds (non-recursively) a set of all languages that this language is related to, not including self.
     * A language is related if it is compiled to, is a dialect of, or implements this language.
     */
    family(opt = { compilesTo: true, dialectOf: true, implements: true }) {
      const set = /* @__PURE__ */ new Set([]);
      if (opt.compilesTo) for (const pl of this.relCompilesTo.values) set.add(pl);
      if (opt.dialectOf) for (const pl of this.relDialectOf.values) set.add(pl);
      if (opt.implements) for (const pl of this.relImplements.values) set.add(pl);
      return set;
    }
  };
  var VPlatform = class extends VPlatformBase {
  };
  var VTag = class extends VTagBase {
  };
  var VTool = class extends VToolBase {
    get github() {
      return new FieldGithub(this);
    }
    get releases() {
      return new FieldReleases(this);
    }
  };
  var VTypeSystem = class extends VTypeSystemBase {
  };
  var VSubsystem = class extends VSubsystemBase {
    get github() {
      return new FieldGithub(this);
    }
    get releases() {
      return new FieldReleases(this);
    }
  };
  var VPost = class extends VPostBase {
    set path(path) {
      this.data.path = path;
    }
    get author() {
      return this.data.author;
    }
    get date() {
      return this.data.date;
    }
    get path() {
      return this.data.path;
    }
    get title() {
      return this.name;
    }
  };

  // packages/frontend/src/facets/kind/apps.tsx
  var [GROUPS, GK_BY_FK, COMPONENT] = defineFacetGroups({
    creationYear: { title: "Creation Year", facets: [table("creationYear", "Creation Year", prop("app", "created"))] },
    general: {
      title: "General",
      facets: [
        text("name", "App Name"),
        bool("createdRecently", "Created Recently", (checked) => checked ? new ValNumber((/* @__PURE__ */ new Date()).getFullYear() - 5) : new ValNil()),
        bool("releasedRecently", "Released Recently", (checked) => checked ? new ValNumber((/* @__PURE__ */ new Date()).getFullYear() - 1) : new ValNil()),
        text("ghStars", "GitHub Stars")
      ]
    },
    licenses: { title: "Licenses", facets: [table("licenses", "Licenses", rel("app", "relLicenses"))] },
    platforms: { title: "Platforms", facets: [table("platforms", "Platforms", rel("app", "relPlatforms"))] },
    tags: { title: "Tags", facets: [table("tags", "Tags", rel("app", "relTags"))] },
    writtenWith: { title: "Written With", facets: [table("writtenWith", "Written With", rel("app", "relWrittenWith"))] }
  });
  var PAGE = "apps";
  var NAV = {
    groupKeys: [["general"], ["writtenWith"], ["tags", "creationYear", "licenses"], ["platforms"]],
    default: "general"
  };
  var AppsFacetsState = class _AppsFacetsState extends FacetsMainState {
    constructor() {
      super(...arguments);
      this.nav = NAV;
      this.page = PAGE;
      this.vertexName = "app";
      this.gkByFk = GK_BY_FK;
      this.groupsConfig = GROUPS;
      this.groupsComponent = COMPONENT;
    }
    static initial(pg) {
      const store = getStore(PAGE);
      const currentGroupKey = store.load("facets-last-group") ?? NAV.default;
      const values = FacetsMainState.deserialize(GK_BY_FK, FragmentTracker.deserialize() ?? store.load("facet-value"));
      return new _AppsFacetsState({ pg, currentGroupKey, values });
    }
  };

  // packages/frontend/src/facets/kind/communities.tsx
  var [GROUPS2, GK_BY_FK2, COMPONENT2] = defineFacetGroups({
    creationYear: { title: "Creation Year", facets: [table("creationYear", "Creation Year", prop("community", "created"))] },
    general: {
      title: "General",
      facets: [
        text("name", "Community Name"),
        bool("createdRecently", "Created Recently", (checked) => checked ? new ValNumber((/* @__PURE__ */ new Date()).getFullYear() - 5) : new ValNil())
      ]
    },
    apps: { title: "Licenses", facets: [table("apps", "Apps", rel("community", "relApps"))] },
    libraries: { title: "Platforms", facets: [table("libraries", "libraries", rel("community", "relLibraries"))] },
    tags: { title: "Tags", facets: [table("tags", "Tags", rel("community", "relTags"))] },
    plangs: { title: "Written For", facets: [table("plangs", "Plangs", rel("community", "relPlangs"))] },
    tools: { title: "Written With", facets: [table("tools", "Tools", rel("community", "relTools"))] }
  });
  var PAGE2 = "communities";
  var NAV2 = {
    groupKeys: [["general"], ["plangs", "libraries"], ["apps", "tools"], ["tags"]],
    default: "general"
  };
  var CommunitiesFacetsState = class _CommunitiesFacetsState extends FacetsMainState {
    constructor() {
      super(...arguments);
      this.nav = NAV2;
      this.page = PAGE2;
      this.vertexName = "community";
      this.gkByFk = GK_BY_FK2;
      this.groupsConfig = GROUPS2;
      this.groupsComponent = COMPONENT2;
    }
    static initial(pg) {
      const store = getStore(PAGE2);
      const currentGroupKey = store.load("facets-last-group") ?? NAV2.default;
      const values = FacetsMainState.deserialize(GK_BY_FK2, FragmentTracker.deserialize() ?? store.load("facet-value"));
      return new _CommunitiesFacetsState({ pg, currentGroupKey, values });
    }
  };

  // packages/frontend/src/facets/kind/learning.tsx
  var [GROUPS3, GK_BY_FK3, COMPONENT3] = defineFacetGroups({
    creationYear: { title: "Creation Year", facets: [table("creationYear", "Creation Year", prop("learning", "created"))] },
    general: {
      title: "General",
      facets: [
        text("name", "Learning Name"),
        bool("createdRecently", "Created Recently", (checked) => checked ? new ValNumber((/* @__PURE__ */ new Date()).getFullYear() - 5) : new ValNil())
      ]
    },
    apps: { title: "Apps", facets: [table("apps", "Apps", rel("learning", "relApps"))] },
    libraries: { title: "Libraries", facets: [table("libraries", "libraries", rel("learning", "relLibraries"))] },
    tags: { title: "Tags", facets: [table("tags", "Tags", rel("learning", "relTags"))] },
    plangs: { title: "Plangs", facets: [table("plangs", "Plangs", rel("learning", "relPlangs"))] },
    tools: { title: "Tools", facets: [table("tools", "Tools", rel("learning", "relTools"))] }
  });
  var PAGE3 = "learning";
  var NAV3 = {
    groupKeys: [["general"], ["plangs", "libraries"], ["apps", "tools"], ["tags"]],
    default: "general"
  };
  var LearningFacetsState = class _LearningFacetsState extends FacetsMainState {
    constructor() {
      super(...arguments);
      this.nav = NAV3;
      this.page = PAGE3;
      this.vertexName = "learning";
      this.gkByFk = GK_BY_FK3;
      this.groupsConfig = GROUPS3;
      this.groupsComponent = COMPONENT3;
    }
    static initial(pg) {
      const store = getStore(PAGE3);
      const currentGroupKey = store.load("facets-last-group") ?? NAV3.default;
      const values = FacetsMainState.deserialize(GK_BY_FK3, FragmentTracker.deserialize() ?? store.load("facet-value"));
      return new _LearningFacetsState({ pg, currentGroupKey, values });
    }
  };

  // packages/frontend/src/facets/kind/libraries.tsx
  var [GROUPS4, GK_BY_FK4, COMPONENT4] = defineFacetGroups({
    creationYear: { title: "Creation Year", facets: [table("creationYear", "Creation Year", prop("library", "created"))] },
    general: {
      title: "General",
      facets: [
        text("name", "Library Name"),
        bool("createdRecently", "Created Recently", (checked) => checked ? new ValNumber((/* @__PURE__ */ new Date()).getFullYear() - 5) : new ValNil()),
        bool("releasedRecently", "Released Recently", (checked) => checked ? new ValNumber((/* @__PURE__ */ new Date()).getFullYear() - 1) : new ValNil()),
        text("ghStars", "GitHub Stars")
      ]
    },
    licenses: {
      title: "Licenses",
      facets: [table("licenses", "Licenses", rel("library", "relLicenses"))]
    },
    platforms: {
      title: "Platforms",
      facets: [table("platforms", "Platforms", rel("library", "relPlatforms"))]
    },
    tags: {
      title: "Tags",
      facets: [table("tags", "Tags", rel("library", "relTags"))]
    },
    writtenWith: { title: "Written With ", facets: [table("writtenWith", "Written With", rel("library", "relWrittenWith"))] },
    writtenFor: { title: "Written For", facets: [table("writtenFor", "Written For", rel("tool", "relPlangs"))] }
  });
  var PAGE4 = "libraries";
  var NAV4 = {
    groupKeys: [["general"], ["writtenWith", "writtenFor"], ["tags", "creationYear", "licenses"], ["platforms"]],
    default: "general"
  };
  var LibrariesFacetsState = class _LibrariesFacetsState extends FacetsMainState {
    constructor() {
      super(...arguments);
      this.nav = NAV4;
      this.page = PAGE4;
      this.vertexName = "library";
      this.gkByFk = GK_BY_FK4;
      this.groupsConfig = GROUPS4;
      this.groupsComponent = COMPONENT4;
    }
    static initial(pg) {
      const store = getStore(PAGE4);
      const currentGroupKey = store.load("facets-last-group") ?? NAV4.default;
      const values = FacetsMainState.deserialize(GK_BY_FK4, FragmentTracker.deserialize() ?? store.load("facet-value"));
      return new _LibrariesFacetsState({ pg, currentGroupKey, values });
    }
  };

  // packages/frontend/src/facets/kind/plangs.tsx
  var [GROUPS5, GK_BY_FK5, COMPONENT5] = defineFacetGroups({
    creationYear: { title: "Creation Year", facets: [table("creationYear", "Creation Year", prop("plang", "created"))] },
    dialectOf: { title: "Dialect Of", facets: [table("dialectOf", "Dialect Of", rel("plang", "relDialectOf"))] },
    general: {
      title: "General",
      facets: [
        text("plangName", "Plang Name"),
        bool("createdRecently", "Created Recently", (checked) => checked ? new ValNumber((/* @__PURE__ */ new Date()).getFullYear() - 5) : new ValNil()),
        bool("releasedRecently", "Released Recently", (checked) => checked ? new ValNumber((/* @__PURE__ */ new Date()).getFullYear() - 1) : new ValNil()),
        bool("isPopular", "Is Popular"),
        bool("hasLogo", "Has Logo"),
        bool("hasWikipedia", "Has Wikipedia"),
        multi("extensions", "Extensions")
      ]
    },
    implements: {
      title: "Implements",
      facets: [
        table("implements", "Implements", { ...rel("plang", "relImplements"), minEntries: 2 })
        // All plangs implement themselves.
      ]
    },
    influenced: { title: "Influenced", facets: [table("influenced", "Influenced", rel("plang", "relInfluenced"))] },
    influencedBy: { title: "Influenced By", facets: [table("influencedBy", "Influenced By", rel("plang", "relInfluencedBy"))] },
    licenses: { title: "Licenses", facets: [table("licenses", "Licenses", rel("plang", "relLicenses"))] },
    paradigms: { title: "Paradigms", facets: [table("paradigms", "Paradigms", rel("plang", "relParadigms"))] },
    platforms: { title: "Platforms", facets: [table("platforms", "Platforms", rel("plang", "relPlatforms"))] },
    tags: { title: "Tags", facets: [table("tags", "Tags", rel("plang", "relTags"))] },
    transpiler: {
      title: "Transpiler",
      facets: [bool("isTranspiler", "Transpiler to Anything"), table("compilesTo", "Compiles To", rel("plang", "relCompilesTo"))]
    },
    typeSystems: { title: "Type Systems", facets: [table("typeSystems", "Type Systems", rel("plang", "relTypeSystems"))] },
    writtenWith: { title: "Written With", facets: [table("writtenWith", "Written With", rel("plang", "relWrittenWith"))] }
  });
  var PAGE5 = "plangs";
  var NAV5 = {
    groupKeys: [
      ["general"],
      ["platforms", "paradigms", "typeSystems"],
      ["writtenWith", "transpiler", "dialectOf", "implements", "influencedBy", "influenced"],
      ["tags", "creationYear", "licenses"]
    ],
    default: "general"
  };
  var PlangsFacetsState = class _PlangsFacetsState extends FacetsMainState {
    constructor() {
      super(...arguments);
      this.nav = NAV5;
      this.page = PAGE5;
      this.vertexName = "plang";
      this.gkByFk = GK_BY_FK5;
      this.groupsConfig = GROUPS5;
      this.groupsComponent = COMPONENT5;
    }
    static initial(pg) {
      const store = getStore(PAGE5);
      const currentGroupKey = store.load("facets-last-group") ?? NAV5.default;
      const values = FacetsMainState.deserialize(GK_BY_FK5, FragmentTracker.deserialize() ?? store.load("facet-value"));
      return new _PlangsFacetsState({ pg, currentGroupKey, values });
    }
  };

  // packages/frontend/src/facets/kind/subsystem.tsx
  var [GROUPS6, GK_BY_FK6, COMPONENT6] = defineFacetGroups({
    creationYear: { title: "Creation Year", facets: [table("creationYear", "Creation Year", prop("subsystem", "created"))] },
    general: {
      title: "General",
      facets: [
        text("name", "Subsystem Name"),
        bool("createdRecently", "Created Recently", (checked) => checked ? new ValNumber((/* @__PURE__ */ new Date()).getFullYear() - 5) : new ValNil()),
        bool("releasedRecently", "Released Recently", (checked) => checked ? new ValNumber((/* @__PURE__ */ new Date()).getFullYear() - 1) : new ValNil()),
        text("ghStars", "GitHub Stars")
      ]
    },
    licenses: { title: "Licenses", facets: [table("licenses", "Licenses", rel("subsystem", "relLicenses"))] },
    platforms: { title: "Platforms", facets: [table("platforms", "Platforms", rel("subsystem", "relPlatforms"))] },
    tags: { title: "Tags", facets: [table("tags", "Tags", rel("subsystem", "relTags"))] },
    writtenWith: { title: "Written With", facets: [table("writtenWith", "Written With", rel("subsystem", "relWrittenWith"))] }
  });
  var PAGE6 = "subsystems";
  var NAV6 = {
    groupKeys: [["general"], ["writtenWith"], ["tags", "creationYear", "licenses"], ["platforms"]],
    default: "general"
  };
  var SubsystemsFacetsState = class _SubsystemsFacetsState extends FacetsMainState {
    constructor() {
      super(...arguments);
      this.nav = NAV6;
      this.page = PAGE6;
      this.vertexName = "subsystem";
      this.gkByFk = GK_BY_FK6;
      this.groupsConfig = GROUPS6;
      this.groupsComponent = COMPONENT6;
    }
    static initial(pg) {
      const store = getStore(PAGE6);
      const currentGroupKey = store.load("facets-last-group") ?? NAV6.default;
      const values = FacetsMainState.deserialize(GK_BY_FK6, FragmentTracker.deserialize() ?? store.load("facet-value"));
      return new _SubsystemsFacetsState({ pg, currentGroupKey, values });
    }
  };

  // packages/frontend/src/facets/kind/tools.tsx
  var [GROUPS7, GK_BY_FK7, COMPONENT7] = defineFacetGroups({
    creationYear: { title: "Creation Year", facets: [table("creationYear", "Creation Year", prop("tool", "created"))] },
    general: {
      title: "General",
      facets: [
        text("name", "Tool Name"),
        bool("createdRecently", "Created Recently", (checked) => checked ? new ValNumber((/* @__PURE__ */ new Date()).getFullYear() - 5) : new ValNil()),
        bool("releasedRecently", "Released Recently", (checked) => checked ? new ValNumber((/* @__PURE__ */ new Date()).getFullYear() - 1) : new ValNil()),
        text("ghStars", "GitHub Stars")
      ]
    },
    licenses: { title: "Licenses", facets: [table("licenses", "Licenses", rel("tool", "relLicenses"))] },
    platforms: { title: "Platforms", facets: [table("platforms", "Platforms", rel("tool", "relPlatforms"))] },
    tags: { title: "Tags", facets: [table("tags", "Tags", rel("tool", "relTags"))] },
    writtenFor: { title: "Written For", facets: [table("writtenFor", "Written For", rel("tool", "relPlangs"))] },
    writtenWith: { title: "Written With", facets: [table("writtenWith", "Written With", rel("tool", "relWrittenWith"))] }
  });
  var PAGE7 = "tools";
  var NAV7 = {
    groupKeys: [["general"], ["writtenWith", "writtenFor"], ["tags", "creationYear", "licenses"], ["platforms"]],
    default: "general"
  };
  var ToolsFacetsState = class _ToolsFacetsState extends FacetsMainState {
    constructor() {
      super(...arguments);
      this.nav = NAV7;
      this.page = PAGE7;
      this.vertexName = "tool";
      this.gkByFk = GK_BY_FK7;
      this.groupsConfig = GROUPS7;
      this.groupsComponent = COMPONENT7;
    }
    static initial(pg) {
      const store = getStore(PAGE7);
      const currentGroupKey = store.load("facets-last-group") ?? NAV7.default;
      const values = FacetsMainState.deserialize(GK_BY_FK7, FragmentTracker.deserialize() ?? store.load("facet-value"));
      return new _ToolsFacetsState({ pg, currentGroupKey, values });
    }
  };

  // packages/frontend/src/facets/main/use_state.ts
  var FacetsMainContext = J(void 0);
  function useFacetState(page, pg) {
    let state;
    if (page === "apps") state = useDispatchable(() => AppsFacetsState.initial(pg));
    if (page === "communities") state = useDispatchable(() => CommunitiesFacetsState.initial(pg));
    if (page === "learning") state = useDispatchable(() => LearningFacetsState.initial(pg));
    if (page === "libraries") state = useDispatchable(() => LibrariesFacetsState.initial(pg));
    if (page === "plangs") state = useDispatchable(() => PlangsFacetsState.initial(pg));
    if (page === "subsystems") state = useDispatchable(() => SubsystemsFacetsState.initial(pg));
    if (page === "tools") state = useDispatchable(() => ToolsFacetsState.initial(pg));
    if (!state) {
      console.error("Unknown page", page);
      return;
    }
    return state.runEffects();
  }

  // packages/frontend/src/facets/main/main.tsx
  var SUBGRID = tw("col-span-2", "grid grid-cols-subgrid", "items-center", "grow-0");
  function FacetsMain({ page, pg }) {
    const state = useFacetState(page, pg);
    const self = useRootState(state);
    y2(() => window.fragment.onUserChange((ev) => state?.doResetAll(ev.deserFrag)));
    const mapGroups = (state2, group, callback) => group.map((groupKey) => callback(groupKey, state2.currentGroupKey === groupKey, state2.groupHasValues(groupKey)));
    const body = (state2) => /* @__PURE__ */ u3(FacetsMainContext.Provider, { value: state2, children: [
      /* @__PURE__ */ u3(
        "aside",
        {
          class: tw(
            tw("h-full", VSCROLL),
            "min-w-[10rem] sm:min-w-[12rem]",
            // ---
            tw(BORDER, "border-r-1"),
            "bg-linear-to-t from-secondary to-background"
          ),
          children: /* @__PURE__ */ u3("div", { class: tw("grid grid-cols-[auto_auto]"), children: [
            /* @__PURE__ */ u3("header", { class: tw("uppercase", "text-primary", "mb-4", "ml-4"), children: [
              "Filter ",
              page
            ] }),
            state2.nav.groupKeys.map((group) => /* @__PURE__ */ u3("nav", { class: tw("sm:mb-6", "min-w-[12rem] max-w-[15rem]", SUBGRID), children: mapGroups(state2, group, (groupKey, isCurrent, hasValues) => /* @__PURE__ */ u3(
              "div",
              {
                class: tw(
                  SUBGRID,
                  isCurrent ? tw(tw("border-secondary border-dotted", "border-l-1"), "bg-primary/85 text-background") : "hover:bg-primary/25"
                ),
                style: `${hasValues ? "font-weight: bold" : ""}`,
                children: [
                  /* @__PURE__ */ u3(
                    "button",
                    {
                      ...onClickOnEnter(() => state2.doSetCurrentGroup(groupKey)),
                      class: tw(
                        "block w-full",
                        "truncate text-left",
                        "mr-2 px-4 py-1.5 sm:mb-1 sm:ml-4",
                        "cursor-pointer",
                        isCurrent ? "text-background/85" : hasValues ? "text-primary" : "text-foreground"
                      ),
                      children: state2.groupTitle(groupKey)
                    }
                  ),
                  /* @__PURE__ */ u3(
                    "div",
                    {
                      ...onClickOnEnter(() => state2.doResetGroup(groupKey)),
                      class: tw(
                        "mr-1 p-1",
                        "scale-75",
                        "cursor-pointer",
                        state2.groupHasValues(groupKey) ? tw("hover:text-hiliteb", HOVER_ICON_BG) : "hidden"
                      ),
                      children: DESELECT
                    }
                  )
                ]
              },
              groupKey
            )) }, group.join("-")))
          ] })
        }
      ),
      /* @__PURE__ */ u3("div", { class: tw("flex w-full flex-col", "overflow-hidden", tw(BORDER, "border-r-1"), "bg-linear-to-b to-secondary/50", "relative"), children: /* @__PURE__ */ u3(state2.groupsComponent, { currentFacetGroup: state2.currentGroupKey }) })
    ] });
    return /* @__PURE__ */ u3("aside", { ref: self, class: tw("flex flex-row items-stretch", "size-full overflow-hidden"), children: state && body(state) });
  }

  // packages/frontend/src/facets/main/index.tsx
  function activateFacetsMain(pg) {
    for (const elem2 of elems("facetsMain")) {
      if (pg && elem2.dataset.page) {
        try {
          D(/* @__PURE__ */ u3(FacetsMain, { pg, page: elem2.dataset.page }), elem2);
        } catch (e3) {
          console.error("Error rendering FacetsMain component:", e3);
        }
      } else {
        console.error("Missing prop for FacetsMain component.");
      }
    }
  }

  // packages/frontend/src/app/vertices.ts
  function getClosestVertex(pg, target) {
    const elem2 = target.closest(`[${dataKey("vertex-key")}]`);
    const key = data(elem2, "vertex-key");
    const vertexName = data(elem2, "vertex-name");
    const vertices = key && vertexName && pg[vertexName];
    if (!vertices) return;
    return vertices.get(key);
  }

  // packages/frontend/src/app/index.tsx
  async function start() {
    const pg = new PlangsGraph();
    const loadData = fetch("/plangs.json").then(async (r3) => pg.loadJSON(await r3.json())).then((g2) => g2.materialize());
    document.addEventListener("DOMContentLoaded", () => {
      activateIconButtons();
      loadData.then(() => {
        activateFacetsMain(pg);
        const grid = elem("vertexGrid");
        if (!grid) return;
        on(grid, "pointerdown", ({ target }) => {
          const vertex = getClosestVertex(pg, target);
          renderVertexInfo(vertex);
        });
        for (const img of elems("vertexThumbnImg")) {
          const src = img.dataset.src;
          if (src) img.setAttribute("src", src);
        }
      });
    });
  }
  if (true) {
    try {
      connectLivereload();
    } catch (err) {
      console.error(err);
    }
  }
  try {
    start();
  } catch (err) {
    console.error(err);
  }
  window.fragment = new FragmentTracker().bind();
  window.restoreFilters = () => ToggleFacetsMenu.initial().runEffects();
  window.restoreHamburguer = () => ToggleHamburguer.initial().runEffects();
  window.restoreLightMode = () => ToggleLights.initial().runEffects();
  window.restoreVertexInfo = () => renderVertexInfo();
})();
//# sourceMappingURL=app.js.map
