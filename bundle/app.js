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
  function w(n2, l4) {
    for (var u5 in l4) n2[u5] = l4[u5];
    return n2;
  }
  function _(n2) {
    n2 && n2.parentNode && n2.parentNode.removeChild(n2);
  }
  function g(l4, u5, t4) {
    var i6, r3, o3, e3 = {};
    for (o3 in u5) "key" == o3 ? i6 = u5[o3] : "ref" == o3 ? r3 = u5[o3] : e3[o3] = u5[o3];
    if (arguments.length > 2 && (e3.children = arguments.length > 3 ? n.call(arguments, 2) : t4), "function" == typeof l4 && null != l4.defaultProps) for (o3 in l4.defaultProps) void 0 === e3[o3] && (e3[o3] = l4.defaultProps[o3]);
    return m(l4, e3, i6, r3, null);
  }
  function m(n2, t4, i6, r3, o3) {
    var e3 = { type: n2, props: t4, key: i6, ref: r3, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: null == o3 ? ++u : o3, __i: -1, __u: 0 };
    return null == o3 && null != l.vnode && l.vnode(e3), e3;
  }
  function k(n2) {
    return n2.children;
  }
  function x(n2, l4) {
    this.props = n2, this.context = l4;
  }
  function C(n2, l4) {
    if (null == l4) return n2.__ ? C(n2.__, n2.__i + 1) : null;
    for (var u5; l4 < n2.__k.length; l4++) if (null != (u5 = n2.__k[l4]) && null != u5.__e) return u5.__e;
    return "function" == typeof n2.type ? C(n2) : null;
  }
  function S(n2) {
    var l4, u5;
    if (null != (n2 = n2.__) && null != n2.__c) {
      for (n2.__e = n2.__c.base = null, l4 = 0; l4 < n2.__k.length; l4++) if (null != (u5 = n2.__k[l4]) && null != u5.__e) {
        n2.__e = n2.__c.base = u5.__e;
        break;
      }
      return S(n2);
    }
  }
  function M(n2) {
    (!n2.__d && (n2.__d = true) && i.push(n2) && !P.__r++ || r !== l.debounceRendering) && ((r = l.debounceRendering) || o)(P);
  }
  function P() {
    var n2, u5, t4, r3, o3, f5, c4, s4;
    for (i.sort(e); n2 = i.shift(); ) n2.__d && (u5 = i.length, r3 = void 0, f5 = (o3 = (t4 = n2).__v).__e, c4 = [], s4 = [], t4.__P && ((r3 = w({}, o3)).__v = o3.__v + 1, l.vnode && l.vnode(r3), j(t4.__P, r3, o3, t4.__n, t4.__P.namespaceURI, 32 & o3.__u ? [f5] : null, c4, null == f5 ? C(o3) : f5, !!(32 & o3.__u), s4), r3.__v = o3.__v, r3.__.__k[r3.__i] = r3, z(c4, r3, s4), r3.__e != f5 && S(r3)), i.length > u5 && i.sort(e));
    P.__r = 0;
  }
  function $(n2, l4, u5, t4, i6, r3, o3, e3, f5, c4, s4) {
    var a4, h4, y4, d4, w4, _2, g2 = t4 && t4.__k || v, m4 = l4.length;
    for (f5 = I(u5, l4, g2, f5), a4 = 0; a4 < m4; a4++) null != (y4 = u5.__k[a4]) && (h4 = -1 === y4.__i ? p : g2[y4.__i] || p, y4.__i = a4, _2 = j(n2, y4, h4, i6, r3, o3, e3, f5, c4, s4), d4 = y4.__e, y4.ref && h4.ref != y4.ref && (h4.ref && V(h4.ref, null, y4), s4.push(y4.ref, y4.__c || d4, y4)), null == w4 && null != d4 && (w4 = d4), 4 & y4.__u || h4.__k === y4.__k ? f5 = H(y4, f5, n2) : "function" == typeof y4.type && void 0 !== _2 ? f5 = _2 : d4 && (f5 = d4.nextSibling), y4.__u &= -7);
    return u5.__e = w4, f5;
  }
  function I(n2, l4, u5, t4) {
    var i6, r3, o3, e3, f5, c4 = l4.length, s4 = u5.length, a4 = s4, h4 = 0;
    for (n2.__k = [], i6 = 0; i6 < c4; i6++) null != (r3 = l4[i6]) && "boolean" != typeof r3 && "function" != typeof r3 ? (e3 = i6 + h4, (r3 = n2.__k[i6] = "string" == typeof r3 || "number" == typeof r3 || "bigint" == typeof r3 || r3.constructor == String ? m(null, r3, null, null, null) : d(r3) ? m(k, { children: r3 }, null, null, null) : void 0 === r3.constructor && r3.__b > 0 ? m(r3.type, r3.props, r3.key, r3.ref ? r3.ref : null, r3.__v) : r3).__ = n2, r3.__b = n2.__b + 1, o3 = null, -1 !== (f5 = r3.__i = T(r3, u5, e3, a4)) && (a4--, (o3 = u5[f5]) && (o3.__u |= 2)), null == o3 || null === o3.__v ? (-1 == f5 && h4--, "function" != typeof r3.type && (r3.__u |= 4)) : f5 !== e3 && (f5 == e3 - 1 ? h4-- : f5 == e3 + 1 ? h4++ : (f5 > e3 ? h4-- : h4++, r3.__u |= 4))) : r3 = n2.__k[i6] = null;
    if (a4) for (i6 = 0; i6 < s4; i6++) null != (o3 = u5[i6]) && 0 == (2 & o3.__u) && (o3.__e == t4 && (t4 = C(o3)), q(o3, o3));
    return t4;
  }
  function H(n2, l4, u5) {
    var t4, i6;
    if ("function" == typeof n2.type) {
      for (t4 = n2.__k, i6 = 0; t4 && i6 < t4.length; i6++) t4[i6] && (t4[i6].__ = n2, l4 = H(t4[i6], l4, u5));
      return l4;
    }
    n2.__e != l4 && (l4 && n2.type && !u5.contains(l4) && (l4 = C(n2)), u5.insertBefore(n2.__e, l4 || null), l4 = n2.__e);
    do {
      l4 = l4 && l4.nextSibling;
    } while (null != l4 && 8 === l4.nodeType);
    return l4;
  }
  function T(n2, l4, u5, t4) {
    var i6 = n2.key, r3 = n2.type, o3 = u5 - 1, e3 = u5 + 1, f5 = l4[u5];
    if (null === f5 || f5 && i6 == f5.key && r3 === f5.type && 0 == (2 & f5.__u)) return u5;
    if (("function" != typeof r3 || r3 === k || i6) && t4 > (null != f5 && 0 == (2 & f5.__u) ? 1 : 0)) for (; o3 >= 0 || e3 < l4.length; ) {
      if (o3 >= 0) {
        if ((f5 = l4[o3]) && 0 == (2 & f5.__u) && i6 == f5.key && r3 === f5.type) return o3;
        o3--;
      }
      if (e3 < l4.length) {
        if ((f5 = l4[e3]) && 0 == (2 & f5.__u) && i6 == f5.key && r3 === f5.type) return e3;
        e3++;
      }
    }
    return -1;
  }
  function A(n2, l4, u5) {
    "-" === l4[0] ? n2.setProperty(l4, null == u5 ? "" : u5) : n2[l4] = null == u5 ? "" : "number" != typeof u5 || y.test(l4) ? u5 : u5 + "px";
  }
  function F(n2, l4, u5, t4, i6) {
    var r3;
    n: if ("style" === l4) if ("string" == typeof u5) n2.style.cssText = u5;
    else {
      if ("string" == typeof t4 && (n2.style.cssText = t4 = ""), t4) for (l4 in t4) u5 && l4 in u5 || A(n2.style, l4, "");
      if (u5) for (l4 in u5) t4 && u5[l4] === t4[l4] || A(n2.style, l4, u5[l4]);
    }
    else if ("o" === l4[0] && "n" === l4[1]) r3 = l4 !== (l4 = l4.replace(f, "$1")), l4 = l4.toLowerCase() in n2 || "onFocusOut" === l4 || "onFocusIn" === l4 ? l4.toLowerCase().slice(2) : l4.slice(2), n2.l || (n2.l = {}), n2.l[l4 + r3] = u5, u5 ? t4 ? u5.u = t4.u : (u5.u = c, n2.addEventListener(l4, r3 ? a : s, r3)) : n2.removeEventListener(l4, r3 ? a : s, r3);
    else {
      if ("http://www.w3.org/2000/svg" == i6) l4 = l4.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("width" != l4 && "height" != l4 && "href" != l4 && "list" != l4 && "form" != l4 && "tabIndex" != l4 && "download" != l4 && "rowSpan" != l4 && "colSpan" != l4 && "role" != l4 && "popover" != l4 && l4 in n2) try {
        n2[l4] = null == u5 ? "" : u5;
        break n;
      } catch (n3) {
      }
      "function" == typeof u5 || (null == u5 || false === u5 && "-" !== l4[4] ? n2.removeAttribute(l4) : n2.setAttribute(l4, "popover" == l4 && 1 == u5 ? "" : u5));
    }
  }
  function O(n2) {
    return function(u5) {
      if (this.l) {
        var t4 = this.l[u5.type + n2];
        if (null == u5.t) u5.t = c++;
        else if (u5.t < t4.u) return;
        return t4(l.event ? l.event(u5) : u5);
      }
    };
  }
  function j(n2, u5, t4, i6, r3, o3, e3, f5, c4, s4) {
    var a4, h4, p4, v4, y4, g2, m4, b2, C3, S2, M2, P2, I2, H2, L, T3, A3, F2 = u5.type;
    if (void 0 !== u5.constructor) return null;
    128 & t4.__u && (c4 = !!(32 & t4.__u), o3 = [f5 = u5.__e = t4.__e]), (a4 = l.__b) && a4(u5);
    n: if ("function" == typeof F2) try {
      if (b2 = u5.props, C3 = "prototype" in F2 && F2.prototype.render, S2 = (a4 = F2.contextType) && i6[a4.__c], M2 = a4 ? S2 ? S2.props.value : a4.__ : i6, t4.__c ? m4 = (h4 = u5.__c = t4.__c).__ = h4.__E : (C3 ? u5.__c = h4 = new F2(b2, M2) : (u5.__c = h4 = new x(b2, M2), h4.constructor = F2, h4.render = B), S2 && S2.sub(h4), h4.props = b2, h4.state || (h4.state = {}), h4.context = M2, h4.__n = i6, p4 = h4.__d = true, h4.__h = [], h4._sb = []), C3 && null == h4.__s && (h4.__s = h4.state), C3 && null != F2.getDerivedStateFromProps && (h4.__s == h4.state && (h4.__s = w({}, h4.__s)), w(h4.__s, F2.getDerivedStateFromProps(b2, h4.__s))), v4 = h4.props, y4 = h4.state, h4.__v = u5, p4) C3 && null == F2.getDerivedStateFromProps && null != h4.componentWillMount && h4.componentWillMount(), C3 && null != h4.componentDidMount && h4.__h.push(h4.componentDidMount);
      else {
        if (C3 && null == F2.getDerivedStateFromProps && b2 !== v4 && null != h4.componentWillReceiveProps && h4.componentWillReceiveProps(b2, M2), !h4.__e && (null != h4.shouldComponentUpdate && false === h4.shouldComponentUpdate(b2, h4.__s, M2) || u5.__v === t4.__v)) {
          for (u5.__v !== t4.__v && (h4.props = b2, h4.state = h4.__s, h4.__d = false), u5.__e = t4.__e, u5.__k = t4.__k, u5.__k.some(function(n3) {
            n3 && (n3.__ = u5);
          }), P2 = 0; P2 < h4._sb.length; P2++) h4.__h.push(h4._sb[P2]);
          h4._sb = [], h4.__h.length && e3.push(h4);
          break n;
        }
        null != h4.componentWillUpdate && h4.componentWillUpdate(b2, h4.__s, M2), C3 && null != h4.componentDidUpdate && h4.__h.push(function() {
          h4.componentDidUpdate(v4, y4, g2);
        });
      }
      if (h4.context = M2, h4.props = b2, h4.__P = n2, h4.__e = false, I2 = l.__r, H2 = 0, C3) {
        for (h4.state = h4.__s, h4.__d = false, I2 && I2(u5), a4 = h4.render(h4.props, h4.state, h4.context), L = 0; L < h4._sb.length; L++) h4.__h.push(h4._sb[L]);
        h4._sb = [];
      } else do {
        h4.__d = false, I2 && I2(u5), a4 = h4.render(h4.props, h4.state, h4.context), h4.state = h4.__s;
      } while (h4.__d && ++H2 < 25);
      h4.state = h4.__s, null != h4.getChildContext && (i6 = w(w({}, i6), h4.getChildContext())), C3 && !p4 && null != h4.getSnapshotBeforeUpdate && (g2 = h4.getSnapshotBeforeUpdate(v4, y4)), f5 = $(n2, d(T3 = null != a4 && a4.type === k && null == a4.key ? a4.props.children : a4) ? T3 : [T3], u5, t4, i6, r3, o3, e3, f5, c4, s4), h4.base = u5.__e, u5.__u &= -161, h4.__h.length && e3.push(h4), m4 && (h4.__E = h4.__ = null);
    } catch (n3) {
      if (u5.__v = null, c4 || null != o3) if (n3.then) {
        for (u5.__u |= c4 ? 160 : 128; f5 && 8 === f5.nodeType && f5.nextSibling; ) f5 = f5.nextSibling;
        o3[o3.indexOf(f5)] = null, u5.__e = f5;
      } else for (A3 = o3.length; A3--; ) _(o3[A3]);
      else u5.__e = t4.__e, u5.__k = t4.__k;
      l.__e(n3, u5, t4);
    }
    else null == o3 && u5.__v === t4.__v ? (u5.__k = t4.__k, u5.__e = t4.__e) : f5 = u5.__e = N(t4.__e, u5, t4, i6, r3, o3, e3, c4, s4);
    return (a4 = l.diffed) && a4(u5), 128 & u5.__u ? void 0 : f5;
  }
  function z(n2, u5, t4) {
    for (var i6 = 0; i6 < t4.length; i6++) V(t4[i6], t4[++i6], t4[++i6]);
    l.__c && l.__c(u5, n2), n2.some(function(u6) {
      try {
        n2 = u6.__h, u6.__h = [], n2.some(function(n3) {
          n3.call(u6);
        });
      } catch (n3) {
        l.__e(n3, u6.__v);
      }
    });
  }
  function N(u5, t4, i6, r3, o3, e3, f5, c4, s4) {
    var a4, h4, v4, y4, w4, g2, m4, b2 = i6.props, k3 = t4.props, x3 = t4.type;
    if ("svg" === x3 ? o3 = "http://www.w3.org/2000/svg" : "math" === x3 ? o3 = "http://www.w3.org/1998/Math/MathML" : o3 || (o3 = "http://www.w3.org/1999/xhtml"), null != e3) {
      for (a4 = 0; a4 < e3.length; a4++) if ((w4 = e3[a4]) && "setAttribute" in w4 == !!x3 && (x3 ? w4.localName === x3 : 3 === w4.nodeType)) {
        u5 = w4, e3[a4] = null;
        break;
      }
    }
    if (null == u5) {
      if (null === x3) return document.createTextNode(k3);
      u5 = document.createElementNS(o3, x3, k3.is && k3), c4 && (l.__m && l.__m(t4, e3), c4 = false), e3 = null;
    }
    if (null === x3) b2 === k3 || c4 && u5.data === k3 || (u5.data = k3);
    else {
      if (e3 = e3 && n.call(u5.childNodes), b2 = i6.props || p, !c4 && null != e3) for (b2 = {}, a4 = 0; a4 < u5.attributes.length; a4++) b2[(w4 = u5.attributes[a4]).name] = w4.value;
      for (a4 in b2) if (w4 = b2[a4], "children" == a4) ;
      else if ("dangerouslySetInnerHTML" == a4) v4 = w4;
      else if (!(a4 in k3)) {
        if ("value" == a4 && "defaultValue" in k3 || "checked" == a4 && "defaultChecked" in k3) continue;
        F(u5, a4, null, w4, o3);
      }
      for (a4 in k3) w4 = k3[a4], "children" == a4 ? y4 = w4 : "dangerouslySetInnerHTML" == a4 ? h4 = w4 : "value" == a4 ? g2 = w4 : "checked" == a4 ? m4 = w4 : c4 && "function" != typeof w4 || b2[a4] === w4 || F(u5, a4, w4, b2[a4], o3);
      if (h4) c4 || v4 && (h4.__html === v4.__html || h4.__html === u5.innerHTML) || (u5.innerHTML = h4.__html), t4.__k = [];
      else if (v4 && (u5.innerHTML = ""), $(u5, d(y4) ? y4 : [y4], t4, i6, r3, "foreignObject" === x3 ? "http://www.w3.org/1999/xhtml" : o3, e3, f5, e3 ? e3[0] : i6.__k && C(i6, 0), c4, s4), null != e3) for (a4 = e3.length; a4--; ) _(e3[a4]);
      c4 || (a4 = "value", "progress" === x3 && null == g2 ? u5.removeAttribute("value") : void 0 !== g2 && (g2 !== u5[a4] || "progress" === x3 && !g2 || "option" === x3 && g2 !== b2[a4]) && F(u5, a4, g2, b2[a4], o3), a4 = "checked", void 0 !== m4 && m4 !== u5[a4] && F(u5, a4, m4, b2[a4], o3));
    }
    return u5;
  }
  function V(n2, u5, t4) {
    try {
      if ("function" == typeof n2) {
        var i6 = "function" == typeof n2.__u;
        i6 && n2.__u(), i6 && null == u5 || (n2.__u = n2(u5));
      } else n2.current = u5;
    } catch (n3) {
      l.__e(n3, t4);
    }
  }
  function q(n2, u5, t4) {
    var i6, r3;
    if (l.unmount && l.unmount(n2), (i6 = n2.ref) && (i6.current && i6.current !== n2.__e || V(i6, null, u5)), null != (i6 = n2.__c)) {
      if (i6.componentWillUnmount) try {
        i6.componentWillUnmount();
      } catch (n3) {
        l.__e(n3, u5);
      }
      i6.base = i6.__P = null;
    }
    if (i6 = n2.__k) for (r3 = 0; r3 < i6.length; r3++) i6[r3] && q(i6[r3], u5, t4 || "function" != typeof n2.type);
    t4 || _(n2.__e), n2.__c = n2.__ = n2.__e = void 0;
  }
  function B(n2, l4, u5) {
    return this.constructor(n2, u5);
  }
  function D(u5, t4, i6) {
    var r3, o3, e3, f5;
    t4 === document && (t4 = document.documentElement), l.__ && l.__(u5, t4), o3 = (r3 = "function" == typeof i6) ? null : i6 && i6.__k || t4.__k, e3 = [], f5 = [], j(t4, u5 = (!r3 && i6 || t4).__k = g(k, null, [u5]), o3 || p, p, t4.namespaceURI, !r3 && i6 ? [i6] : o3 ? null : t4.firstChild ? n.call(t4.childNodes) : null, e3, !r3 && i6 ? i6 : o3 ? o3.__e : t4.firstChild, r3, f5), z(e3, u5, f5);
  }
  function J(n2, l4) {
    var u5 = { __c: l4 = "__cC" + h++, __: n2, Consumer: function(n3, l5) {
      return n3.children(l5);
    }, Provider: function(n3) {
      var u6, t4;
      return this.getChildContext || (u6 = /* @__PURE__ */ new Set(), (t4 = {})[l4] = this, this.getChildContext = function() {
        return t4;
      }, this.componentWillUnmount = function() {
        u6 = null;
      }, this.shouldComponentUpdate = function(n4) {
        this.props.value !== n4.value && u6.forEach(function(n5) {
          n5.__e = true, M(n5);
        });
      }, this.sub = function(n4) {
        u6.add(n4);
        var l5 = n4.componentWillUnmount;
        n4.componentWillUnmount = function() {
          u6 && u6.delete(n4), l5 && l5.call(n4);
        };
      }), n3.children;
    } };
    return u5.Provider.__ = u5.Consumer.contextType = u5;
  }
  n = v.slice, l = { __e: function(n2, l4, u5, t4) {
    for (var i6, r3, o3; l4 = l4.__; ) if ((i6 = l4.__c) && !i6.__) try {
      if ((r3 = i6.constructor) && null != r3.getDerivedStateFromError && (i6.setState(r3.getDerivedStateFromError(n2)), o3 = i6.__d), null != i6.componentDidCatch && (i6.componentDidCatch(n2, t4 || {}), o3 = i6.__d), o3) return i6.__E = i6;
    } catch (l5) {
      n2 = l5;
    }
    throw n2;
  } }, u = 0, t = function(n2) {
    return null != n2 && null == n2.constructor;
  }, x.prototype.setState = function(n2, l4) {
    var u5;
    u5 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = w({}, this.state), "function" == typeof n2 && (n2 = n2(w({}, u5), this.props)), n2 && w(u5, n2), null != n2 && this.__v && (l4 && this._sb.push(l4), M(this));
  }, x.prototype.forceUpdate = function(n2) {
    this.__v && (this.__e = true, n2 && this.__h.push(n2), M(this));
  }, x.prototype.render = k, i = [], o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, e = function(n2, l4) {
    return n2.__v.__b - l4.__v.__b;
  }, P.__r = 0, f = /(PointerCapture)$|Capture$/i, c = 0, s = O(false), a = O(true), h = 0;

  // node_modules/preact/devtools/dist/devtools.module.js
  var i2;
  null != (i2 = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0) && i2.__PREACT_DEVTOOLS__ && i2.__PREACT_DEVTOOLS__.attachPreact("10.25.1", l, { Fragment: k, Component: x });

  // node_modules/preact/debug/dist/debug.module.js
  var t2 = {};
  function a2(e3) {
    return e3.type === k ? "Fragment" : "function" == typeof e3.type ? e3.type.displayName || e3.type.name : "string" == typeof e3.type ? e3.type : "#text";
  }
  var i3 = [];
  var s2 = [];
  function c2() {
    return i3.length > 0 ? i3[i3.length - 1] : null;
  }
  var l2 = true;
  function u2(e3) {
    return "function" == typeof e3.type && e3.type != k;
  }
  function f2(n2) {
    for (var e3 = [n2], o3 = n2; null != o3.__o; ) e3.push(o3.__o), o3 = o3.__o;
    return e3.reduce(function(n3, e4) {
      n3 += "  in " + a2(e4);
      var o4 = e4.__source;
      return o4 ? n3 += " (at " + o4.fileName + ":" + o4.lineNumber + ")" : l2 && console.warn("Add @babel/plugin-transform-react-jsx-source to get a more detailed component stack. Note that you should not add it to production builds of your App for bundle size reasons."), l2 = false, n3 + "\n";
    }, "");
  }
  var d2 = "function" == typeof WeakMap;
  function p2(n2) {
    var e3 = [];
    return n2.__k ? (n2.__k.forEach(function(n3) {
      n3 && "function" == typeof n3.type ? e3.push.apply(e3, p2(n3)) : n3 && "string" == typeof n3.type && e3.push(n3.type);
    }), e3) : e3;
  }
  function h2(n2) {
    return n2 ? "function" == typeof n2.type ? null == n2.__ ? null != n2.__e && null != n2.__e.parentNode ? n2.__e.parentNode.localName : "" : h2(n2.__) : n2.type : "";
  }
  var v2 = x.prototype.setState;
  function y2(n2) {
    return "table" === n2 || "tfoot" === n2 || "tbody" === n2 || "thead" === n2 || "td" === n2 || "tr" === n2 || "th" === n2;
  }
  x.prototype.setState = function(n2, e3) {
    return null == this.__v && null == this.state && console.warn('Calling "this.setState" inside the constructor of a component is a no-op and might be a bug in your application. Instead, set "this.state = {}" directly.\n\n' + f2(c2())), v2.call(this, n2, e3);
  };
  var m2 = /^(address|article|aside|blockquote|details|div|dl|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hgroup|hr|main|menu|nav|ol|p|pre|search|section|table|ul)$/;
  var b = x.prototype.forceUpdate;
  function w2(n2) {
    var e3 = n2.props, o3 = a2(n2), t4 = "";
    for (var r3 in e3) if (e3.hasOwnProperty(r3) && "children" !== r3) {
      var i6 = e3[r3];
      "function" == typeof i6 && (i6 = "function " + (i6.displayName || i6.name) + "() {}"), i6 = Object(i6) !== i6 || i6.toString ? i6 + "" : Object.prototype.toString.call(i6), t4 += " " + r3 + "=" + JSON.stringify(i6);
    }
    var s4 = e3.children;
    return "<" + o3 + t4 + (s4 && s4.length ? ">..</" + o3 + ">" : " />");
  }
  x.prototype.forceUpdate = function(n2) {
    return null == this.__v ? console.warn('Calling "this.forceUpdate" inside the constructor of a component is a no-op and might be a bug in your application.\n\n' + f2(c2())) : null == this.__P && console.warn(`Can't call "this.forceUpdate" on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.

` + f2(this.__v)), b.call(this, n2);
  }, l.__m = function(n2, e3) {
    var o3 = n2.type, t4 = e3.map(function(n3) {
      return n3 && n3.localName;
    }).filter(Boolean);
    console.error("Expected a DOM node of type " + o3 + " but found " + t4.join(", ") + "as available DOM-node(s), this is caused by the SSR'd HTML containing different DOM-nodes compared to the hydrated one.\n\n" + f2(n2));
  }, function() {
    !function() {
      var n3 = l.__b, o4 = l.diffed, t4 = l.__, r4 = l.vnode, a4 = l.__r;
      l.diffed = function(n4) {
        u2(n4) && s2.pop(), i3.pop(), o4 && o4(n4);
      }, l.__b = function(e3) {
        u2(e3) && i3.push(e3), n3 && n3(e3);
      }, l.__ = function(n4, e3) {
        s2 = [], t4 && t4(n4, e3);
      }, l.vnode = function(n4) {
        n4.__o = s2.length > 0 ? s2[s2.length - 1] : null, r4 && r4(n4);
      }, l.__r = function(n4) {
        u2(n4) && s2.push(n4), a4 && a4(n4);
      };
    }();
    var n2 = false, o3 = l.__b, r3 = l.diffed, c4 = l.vnode, l4 = l.__r, v4 = l.__e, b2 = l.__, g2 = l.__h, E = d2 ? { useEffect: /* @__PURE__ */ new WeakMap(), useLayoutEffect: /* @__PURE__ */ new WeakMap(), lazyPropTypes: /* @__PURE__ */ new WeakMap() } : null, k3 = [];
    l.__e = function(n3, e3, o4, t4) {
      if (e3 && e3.__c && "function" == typeof n3.then) {
        var r4 = n3;
        n3 = new Error("Missing Suspense. The throwing component was: " + a2(e3));
        for (var i6 = e3; i6; i6 = i6.__) if (i6.__c && i6.__c.__c) {
          n3 = r4;
          break;
        }
        if (n3 instanceof Error) throw n3;
      }
      try {
        (t4 = t4 || {}).componentStack = f2(e3), v4(n3, e3, o4, t4), "function" != typeof n3.then && setTimeout(function() {
          throw n3;
        });
      } catch (n4) {
        throw n4;
      }
    }, l.__ = function(n3, e3) {
      if (!e3) throw new Error("Undefined parent passed to render(), this is the second argument.\nCheck if the element is available in the DOM/has the correct id.");
      var o4;
      switch (e3.nodeType) {
        case 1:
        case 11:
        case 9:
          o4 = true;
          break;
        default:
          o4 = false;
      }
      if (!o4) {
        var t4 = a2(n3);
        throw new Error("Expected a valid HTML node as a second argument to render.	Received " + e3 + " instead: render(<" + t4 + " />, " + e3 + ");");
      }
      b2 && b2(n3, e3);
    }, l.__b = function(e3) {
      var r4 = e3.type;
      if (n2 = true, void 0 === r4) throw new Error("Undefined component passed to createElement()\n\nYou likely forgot to export your component or might have mixed up default and named imports" + w2(e3) + "\n\n" + f2(e3));
      if (null != r4 && "object" == typeof r4) {
        if (void 0 !== r4.__k && void 0 !== r4.__e) throw new Error("Invalid type passed to createElement(): " + r4 + "\n\nDid you accidentally pass a JSX literal as JSX twice?\n\n  let My" + a2(e3) + " = " + w2(r4) + ";\n  let vnode = <My" + a2(e3) + " />;\n\nThis usually happens when you export a JSX literal and not the component.\n\n" + f2(e3));
        throw new Error("Invalid type passed to createElement(): " + (Array.isArray(r4) ? "array" : r4));
      }
      if (void 0 !== e3.ref && "function" != typeof e3.ref && "object" != typeof e3.ref && !("$$typeof" in e3)) throw new Error(`Component's "ref" property should be a function, or an object created by createRef(), but got [` + typeof e3.ref + "] instead\n" + w2(e3) + "\n\n" + f2(e3));
      if ("string" == typeof e3.type) {
        for (var i6 in e3.props) if ("o" === i6[0] && "n" === i6[1] && "function" != typeof e3.props[i6] && null != e3.props[i6]) throw new Error(`Component's "` + i6 + '" property should be a function, but got [' + typeof e3.props[i6] + "] instead\n" + w2(e3) + "\n\n" + f2(e3));
      }
      if ("function" == typeof e3.type && e3.type.propTypes) {
        if ("Lazy" === e3.type.displayName && E && !E.lazyPropTypes.has(e3.type)) {
          var s4 = "PropTypes are not supported on lazy(). Use propTypes on the wrapped component itself. ";
          try {
            var c5 = e3.type();
            E.lazyPropTypes.set(e3.type, true), console.warn(s4 + "Component wrapped in lazy() is " + a2(c5));
          } catch (n3) {
            console.warn(s4 + "We will log the wrapped component's name once it is loaded.");
          }
        }
        var l5 = e3.props;
        e3.type.__f && delete (l5 = function(n3, e4) {
          for (var o4 in e4) n3[o4] = e4[o4];
          return n3;
        }({}, l5)).ref, function(n3, e4, o4, r5, a4) {
          Object.keys(n3).forEach(function(o5) {
            var i7;
            try {
              i7 = n3[o5](e4, o5, r5, "prop", null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (n4) {
              i7 = n4;
            }
            i7 && !(i7.message in t2) && (t2[i7.message] = true, console.error("Failed prop type: " + i7.message + (a4 && "\n" + a4() || "")));
          });
        }(e3.type.propTypes, l5, 0, a2(e3), function() {
          return f2(e3);
        });
      }
      o3 && o3(e3);
    };
    var T3, _2 = 0;
    l.__r = function(e3) {
      l4 && l4(e3), n2 = true;
      var o4 = e3.__c;
      if (o4 === T3 ? _2++ : _2 = 1, _2 >= 25) throw new Error("Too many re-renders. This is limited to prevent an infinite loop which may lock up your browser. The component causing this is: " + a2(e3));
      T3 = o4;
    }, l.__h = function(e3, o4, t4) {
      if (!e3 || !n2) throw new Error("Hook can only be invoked from render methods.");
      g2 && g2(e3, o4, t4);
    };
    var O2 = function(n3, e3) {
      return { get: function() {
        var o4 = "get" + n3 + e3;
        k3 && k3.indexOf(o4) < 0 && (k3.push(o4), console.warn("getting vnode." + n3 + " is deprecated, " + e3));
      }, set: function() {
        var o4 = "set" + n3 + e3;
        k3 && k3.indexOf(o4) < 0 && (k3.push(o4), console.warn("setting vnode." + n3 + " is not allowed, " + e3));
      } };
    }, I2 = { nodeName: O2("nodeName", "use vnode.type"), attributes: O2("attributes", "use vnode.props"), children: O2("children", "use vnode.props.children") }, M2 = Object.create({}, I2);
    l.vnode = function(n3) {
      var e3 = n3.props;
      if (null !== n3.type && null != e3 && ("__source" in e3 || "__self" in e3)) {
        var o4 = n3.props = {};
        for (var t4 in e3) {
          var r4 = e3[t4];
          "__source" === t4 ? n3.__source = r4 : "__self" === t4 ? n3.__self = r4 : o4[t4] = r4;
        }
      }
      n3.__proto__ = M2, c4 && c4(n3);
    }, l.diffed = function(e3) {
      var o4, t4 = e3.type, i6 = e3.__;
      if (e3.__k && e3.__k.forEach(function(n3) {
        if ("object" == typeof n3 && n3 && void 0 === n3.type) {
          var o5 = Object.keys(n3).join(",");
          throw new Error("Objects are not valid as a child. Encountered an object with the keys {" + o5 + "}.\n\n" + f2(e3));
        }
      }), e3.__c === T3 && (_2 = 0), "string" == typeof t4 && (y2(t4) || "p" === t4 || "a" === t4 || "button" === t4)) {
        var s4 = h2(i6);
        if ("" !== s4 && y2(t4)) "table" === t4 && "td" !== s4 && y2(s4) ? (console.log(s4, i6.__e), console.error("Improper nesting of table. Your <table> should not have a table-node parent." + w2(e3) + "\n\n" + f2(e3))) : "thead" !== t4 && "tfoot" !== t4 && "tbody" !== t4 || "table" === s4 ? "tr" === t4 && "thead" !== s4 && "tfoot" !== s4 && "tbody" !== s4 ? console.error("Improper nesting of table. Your <tr> should have a <thead/tbody/tfoot> parent." + w2(e3) + "\n\n" + f2(e3)) : "td" === t4 && "tr" !== s4 ? console.error("Improper nesting of table. Your <td> should have a <tr> parent." + w2(e3) + "\n\n" + f2(e3)) : "th" === t4 && "tr" !== s4 && console.error("Improper nesting of table. Your <th> should have a <tr>." + w2(e3) + "\n\n" + f2(e3)) : console.error("Improper nesting of table. Your <thead/tbody/tfoot> should have a <table> parent." + w2(e3) + "\n\n" + f2(e3));
        else if ("p" === t4) {
          var c5 = p2(e3).filter(function(n3) {
            return m2.test(n3);
          });
          c5.length && console.error("Improper nesting of paragraph. Your <p> should not have " + c5.join(", ") + " as child-elements." + w2(e3) + "\n\n" + f2(e3));
        } else "a" !== t4 && "button" !== t4 || -1 !== p2(e3).indexOf(t4) && console.error("Improper nesting of interactive content. Your <" + t4 + "> should not have other " + ("a" === t4 ? "anchor" : "button") + " tags as child-elements." + w2(e3) + "\n\n" + f2(e3));
      }
      if (n2 = false, r3 && r3(e3), null != e3.__k) for (var l5 = [], u5 = 0; u5 < e3.__k.length; u5++) {
        var d4 = e3.__k[u5];
        if (d4 && null != d4.key) {
          var v5 = d4.key;
          if (-1 !== l5.indexOf(v5)) {
            console.error('Following component has two or more children with the same key attribute: "' + v5 + '". This may cause glitches and misbehavior in rendering process. Component: \n\n' + w2(e3) + "\n\n" + f2(e3));
            break;
          }
          l5.push(v5);
        }
      }
      if (null != e3.__c && null != e3.__c.__H) {
        var b3 = e3.__c.__H.__;
        if (b3) for (var g3 = 0; g3 < b3.length; g3 += 1) {
          var E2 = b3[g3];
          if (E2.__H) {
            for (var k4 = 0; k4 < E2.__H.length; k4++) if ((o4 = E2.__H[k4]) != o4) {
              var O3 = a2(e3);
              console.warn("Invalid argument passed to hook. Hooks should not be called with NaN in the dependency array. Hook index " + g3 + " in component " + O3 + " was called with NaN.");
            }
          }
        }
      }
    };
  }();

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
  var minWidthBP = (size) => window.matchMedia(`(min-width: ${size})`).matches ?? false;

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
      let i6 = pos;
      while (true) {
        if (source.length <= ++i6) {
          throw new SyntaxError(`Unexpected end of Rison input`);
        }
        switch (source[i6]) {
          case "!":
            i6++;
            continue;
          case "'":
            return { kind: STRING, value: source.slice(pos, i6 + 1) };
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
      return token.value[0] === "'" ? token.value.replace(/!./g, (c4) => c4[1]).slice(1, -1) : token.value;
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
      return ID_REGEXP.test(value) ? value : `'${value.replace(/[!']/g, (c4) => `!${c4}`)}'`;
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

  // packages/frontend/src/auxiliar/styles.ts
  var VSCROLL = "overflow-hidden overflow-y-auto";
  var BORDER = "border-primary/85 border-dotted";
  var HOVER = "hover:bg-hiliteb hover:text-hilitef cursor-pointer";
  var HOVER_SVG = "hover:stroke-1 hover:stroke-hiliteb cursor-pointer";
  var INPUT = "bg-background text-foreground placeholder:text-foreground/50";
  var PROSE_BASIC = "prose dark:prose-invert sm:prose-sm lg:prose-lg xl:prose-xl";
  var PROSE = `${PROSE_BASIC} max-w-[80ch] mx-auto`;
  function tw(...classes) {
    return classes.flat(5).filter((s4) => typeof s4 === "string" && !/^;|;$/.test(s4)).join(" ");
  }
  function classesExcept(elem2, ...cssClasses) {
    return [...new Set(elem2.classList).difference(new Set(cssClasses))].join(" ");
  }

  // node_modules/preact/hooks/dist/hooks.module.js
  var t3;
  var r2;
  var u3;
  var i4;
  var o2 = 0;
  var f3 = [];
  var c3 = l;
  var e2 = c3.__b;
  var a3 = c3.__r;
  var v3 = c3.diffed;
  var l3 = c3.__c;
  var m3 = c3.unmount;
  var s3 = c3.__;
  function d3(n2, t4) {
    c3.__h && c3.__h(r2, n2, o2 || t4), o2 = 0;
    var u5 = r2.__H || (r2.__H = { __: [], __h: [] });
    return n2 >= u5.__.length && u5.__.push({}), u5.__[n2];
  }
  function h3(n2) {
    return o2 = 1, p3(D2, n2);
  }
  function p3(n2, u5, i6) {
    var o3 = d3(t3++, 2);
    if (o3.t = n2, !o3.__c && (o3.__ = [i6 ? i6(u5) : D2(void 0, u5), function(n3) {
      var t4 = o3.__N ? o3.__N[0] : o3.__[0], r3 = o3.t(t4, n3);
      t4 !== r3 && (o3.__N = [r3, o3.__[1]], o3.__c.setState({}));
    }], o3.__c = r2, !r2.u)) {
      var f5 = function(n3, t4, r3) {
        if (!o3.__c.__H) return true;
        var u6 = o3.__c.__H.__.filter(function(n4) {
          return !!n4.__c;
        });
        if (u6.every(function(n4) {
          return !n4.__N;
        })) return !c4 || c4.call(this, n3, t4, r3);
        var i7 = o3.__c.props !== n3;
        return u6.forEach(function(n4) {
          if (n4.__N) {
            var t5 = n4.__[0];
            n4.__ = n4.__N, n4.__N = void 0, t5 !== n4.__[0] && (i7 = true);
          }
        }), c4 && c4.call(this, n3, t4, r3) || i7;
      };
      r2.u = true;
      var c4 = r2.shouldComponentUpdate, e3 = r2.componentWillUpdate;
      r2.componentWillUpdate = function(n3, t4, r3) {
        if (this.__e) {
          var u6 = c4;
          c4 = void 0, f5(n3, t4, r3), c4 = u6;
        }
        e3 && e3.call(this, n3, t4, r3);
      }, r2.shouldComponentUpdate = f5;
    }
    return o3.__N || o3.__;
  }
  function y3(n2, u5) {
    var i6 = d3(t3++, 3);
    !c3.__s && C2(i6.__H, u5) && (i6.__ = n2, i6.i = u5, r2.__H.__h.push(i6));
  }
  function A2(n2) {
    return o2 = 5, T2(function() {
      return { current: n2 };
    }, []);
  }
  function T2(n2, r3) {
    var u5 = d3(t3++, 7);
    return C2(u5.__H, r3) && (u5.__ = n2(), u5.__H = r3, u5.__h = n2), u5.__;
  }
  function x2(n2) {
    var u5 = r2.context[n2.__c], i6 = d3(t3++, 9);
    return i6.c = n2, u5 ? (null == i6.__ && (i6.__ = true, u5.sub(r2)), u5.props.value) : n2.__;
  }
  function j2() {
    for (var n2; n2 = f3.shift(); ) if (n2.__P && n2.__H) try {
      n2.__H.__h.forEach(z2), n2.__H.__h.forEach(B2), n2.__H.__h = [];
    } catch (t4) {
      n2.__H.__h = [], c3.__e(t4, n2.__v);
    }
  }
  c3.__b = function(n2) {
    r2 = null, e2 && e2(n2);
  }, c3.__ = function(n2, t4) {
    n2 && t4.__k && t4.__k.__m && (n2.__m = t4.__k.__m), s3 && s3(n2, t4);
  }, c3.__r = function(n2) {
    a3 && a3(n2), t3 = 0;
    var i6 = (r2 = n2.__c).__H;
    i6 && (u3 === r2 ? (i6.__h = [], r2.__h = [], i6.__.forEach(function(n3) {
      n3.__N && (n3.__ = n3.__N), n3.i = n3.__N = void 0;
    })) : (i6.__h.forEach(z2), i6.__h.forEach(B2), i6.__h = [], t3 = 0)), u3 = r2;
  }, c3.diffed = function(n2) {
    v3 && v3(n2);
    var t4 = n2.__c;
    t4 && t4.__H && (t4.__H.__h.length && (1 !== f3.push(t4) && i4 === c3.requestAnimationFrame || ((i4 = c3.requestAnimationFrame) || w3)(j2)), t4.__H.__.forEach(function(n3) {
      n3.i && (n3.__H = n3.i), n3.i = void 0;
    })), u3 = r2 = null;
  }, c3.__c = function(n2, t4) {
    t4.some(function(n3) {
      try {
        n3.__h.forEach(z2), n3.__h = n3.__h.filter(function(n4) {
          return !n4.__ || B2(n4);
        });
      } catch (r3) {
        t4.some(function(n4) {
          n4.__h && (n4.__h = []);
        }), t4 = [], c3.__e(r3, n3.__v);
      }
    }), l3 && l3(n2, t4);
  }, c3.unmount = function(n2) {
    m3 && m3(n2);
    var t4, r3 = n2.__c;
    r3 && r3.__H && (r3.__H.__.forEach(function(n3) {
      try {
        z2(n3);
      } catch (n4) {
        t4 = n4;
      }
    }), r3.__H = void 0, t4 && c3.__e(t4, r3.__v));
  };
  var k2 = "function" == typeof requestAnimationFrame;
  function w3(n2) {
    var t4, r3 = function() {
      clearTimeout(u5), k2 && cancelAnimationFrame(t4), setTimeout(n2);
    }, u5 = setTimeout(r3, 100);
    k2 && (t4 = requestAnimationFrame(r3));
  }
  function z2(n2) {
    var t4 = r2, u5 = n2.__c;
    "function" == typeof u5 && (n2.__c = void 0, u5()), r2 = t4;
  }
  function B2(n2) {
    var t4 = r2;
    n2.__c = n2.__(), r2 = t4;
  }
  function C2(n2, t4) {
    return !n2 || n2.length !== t4.length || t4.some(function(t5, r3) {
      return t5 !== n2[r3];
    });
  }
  function D2(n2, t4) {
    return "function" == typeof t4 ? t4(n2) : t4;
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
    const [state, dispatcher] = h3(factory);
    state.dispatcher = dispatcher;
    return state;
  }
  function useRootState(state) {
    const ref = A2();
    y3(() => {
      const root = ref.current?.parentElement;
      if (root && state) root.state = state;
    }, [state]);
    return ref;
  }

  // node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
  var f4 = 0;
  var i5 = Array.isArray;
  function u4(e3, t4, n2, o3, i6, u5) {
    t4 || (t4 = {});
    var a4, c4, l4 = t4;
    "ref" in t4 && (a4 = t4.ref, delete t4.ref);
    var p4 = { type: e3, props: l4, key: n2, ref: a4, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --f4, __i: -1, __u: 0, __source: i6, __self: u5 };
    if ("function" == typeof e3 && (a4 = e3.defaultProps)) for (c4 in a4) void 0 === l4[c4] && (l4[c4] = a4[c4]);
    return l.vnode && l.vnode(p4), p4;
  }

  // packages/frontend/src/auxiliar/icons.tsx
  var css = "fill-current size-[1.5rem] sm:size-[1.75rem] lg:size-[2rem] xl:size-[2.25rem] 2xl:size-[2.5rem]";
  var ABC = /* @__PURE__ */ u4("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", class: css, children: [
    /* @__PURE__ */ u4("title", { children: "Alphabetic" }),
    /* @__PURE__ */ u4(
      "path",
      {
        class: "fill",
        d: "M3.0805,8.3675,2.31,10.878c-.028.091-.0705.122-.154.122H.756c-.0845,0-.1125-.0455-.1-.15L3.5425,1.9285A2.51436,2.51436,0,0,0,3.669,1.107c0-.0615.028-.107.084-.107H5.7c.0705,0,.084.015.1.0915L9.0355,10.863c.0145.0915,0,.137-.084.137H7.381a.14051.14051,0,0,1-.1405-.0915L6.428,8.3675Zm2.9-1.6595c-.294-1.005-.9525-3.12-1.233-4.1855h-.014c-.224,1.02-.785,2.8-1.2045,4.1855Z"
      }
    ),
    /* @__PURE__ */ u4(
      "path",
      {
        class: "fill",
        d: "M9.613,17c-.0565,0-.1125-.015-.1125-.122v-1.02a.346.346,0,0,1,.042-.1825l4.861-7.032H9.711c-.0705,0-.1125-.0145-.1-.106l.21-1.4155C9.835,7.031,9.877,7,9.9465,7H16.463c.069,0,.084.031.084.0915v1.096a.3265.3265,0,0,1-.0705.213L11.7,15.3415h5.015c.069,0,.1.0455.069.137l-.2235,1.4c-.0135.091-.042.122-.126.122Z"
      }
    )
  ] });
  var RANKING = /* @__PURE__ */ u4("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", class: css, children: [
    /* @__PURE__ */ u4("title", { children: "Ranking" }),
    /* @__PURE__ */ u4(
      "path",
      {
        class: "fill",
        d: "M14.259,7.6a2.3635,2.3635,0,0,0,1.6805-2.2255c0-1.521-1.0885-2.625-3.0895-2.625a5.365,5.365,0,0,0-2.561.6245.13949.13949,0,0,0-.064.144V4.542c0,.064.0165.0795.0965.05A4.33146,4.33146,0,0,1,12.626,3.95c1.4085,0,2,.688,2,1.584,0,1.0245-.8645,1.569-2.273,1.569h-.591c-.08,0-.096.05-.096.112V8.223c0,.064.032.096.112.096h.672c1.5845,0,2.641.5765,2.641,1.857,0,1.009-.704,1.8725-2.4325,1.8725a7.11785,7.11785,0,0,1-2.497-.654,3.79252,3.79252,0,0,0,.3305-1.54,3.01569,3.01569,0,0,0-3.224-3.192A6.30249,6.30249,0,0,0,4.5,7.392V1.625a.375.375,0,0,0-.375-.375H3.379a.3735.3735,0,0,0-.3.15L1.65,2.545a.747.747,0,0,0-.15.45v.124a.375.375,0,0,0,.375.375H3v7.125a.375.375,0,0,0,.375.375h.75a.375.375,0,0,0,.375-.375V8.7775a5.26947,5.26947,0,0,1,2.516-.754c1.2735,0,2.05.6225,2.05,1.8765,0,.9625-.4695,1.8975-1.9,3.4775A24.53582,24.53582,0,0,1,4.6,15.897a.25.25,0,0,0-.0845.2095v.709c0,.161.106.1845.169.1845H10.575c.1185,0,.156-.0425.2-.15l.235-.9755a.135.135,0,0,0-.0175-.1215.17851.17851,0,0,0-.15-.05H8.669c-1.209,0-1.457,0-1.932.031a15.25015,15.25015,0,0,0,1.859-2.0125c.3735-.4585.6955-.874.9695-1.275a8.3231,8.3231,0,0,0,3.1085.805c2.161,0,3.7775-1.104,3.7775-3.073A2.611,2.611,0,0,0,14.259,7.6Z"
      }
    )
  ] });
  var SUN = /* @__PURE__ */ u4("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", class: css, children: [
    /* @__PURE__ */ u4("title", { children: "Sun" }),
    /* @__PURE__ */ u4("path", { d: "m9,5.05c2.18152,0,3.95,1.76848,3.95,3.95s-1.76848,3.95-3.95,3.95-3.95-1.76848-3.95-3.95,1.76848-3.95,3.95-3.95Zm-.9-4.8v2.5c0,.13807.11193.25.25.25h1.3c.13807,0,.25-.11193.25-.25V.25c0-.13807-.11193-.25-.25-.25h-1.3c-.13807,0-.25.11193-.25.25Zm0,15v2.5c0,.13807.11193.25.25.25h1.3c.13807,0,.25-.11193.25-.25v-2.5c0-.13807-.11193-.25-.25-.25h-1.3c-.13807,0-.25.11193-.25.25ZM0,8.35v1.3c0,.13807.11193.25.25.25h2.5c.13807,0,.25-.11193.25-.25v-1.3c0-.13807-.11193-.25-.25-.25H.25c-.13807,0-.25.11193-.25.25Zm15,0v1.3c0,.13807.11193.25.25.25h2.5c.13807,0,.25-.11193.25-.25v-1.3c0-.13807-.11193-.25-.25-.25h-2.5c-.13807,0-.25.11193-.25.25Zm-2.01021-4.23913l.91924.91924c.09763.09763.25592.09763.35355,0l1.76777-1.76777c.09763-.09763.09763-.25592,0-.35355l-.91924-.91924c-.09763-.09763-.25592-.09763-.35355,0l-1.76777,1.76777c-.09763.09763-.09763.25592,0,.35355ZM1.98978,15.11121l.91924.91924c.09763.09763.25592.09763.35355,0l1.76777-1.76777c.09763-.09763.09763-.25592,0-.35355l-.91924-.91924c-.09763-.09763-.25592-.09763-.35355,0l-1.76777,1.76777c-.09763.09763-.09763.25592,0,.35355Zm-.01031-11.8587l1.76777,1.76777c.09763.09763.25592.09763.35355,0l.91924-.91924c.09763-.09763.09763-.25592,0-.35355l-1.76777-1.76777c-.09763-.09763-.25592-.09763-.35355,0l-.91924.91924c-.09763.09763-.09763.25592,0,.35355Zm10.9902,10.99001l1.76777,1.76777c.09763.09763.25592.09763.35355,0l.91924-.91924c.09763-.09763.09763-.25592,0-.35355l-1.76777-1.76777c-.09763-.09763-.25592-.09763-.35355,0l-.91924.91924c-.09763.09763-.09763.25592,0,.35355Z" })
  ] });
  var MOON = /* @__PURE__ */ u4("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", class: css, children: [
    /* @__PURE__ */ u4("title", { children: "Moon" }),
    /* @__PURE__ */ u4("path", { d: "M9,1a8,8,0,1,0,8,8A8,8,0,0,0,9,1Zm.5,14.982c-.165.0115-.332.018-.5.018A7,7,0,0,1,9,2c.168,0,.335.0065.5.018A11,11,0,0,0,9.5,15.982Z" })
  ] });
  var MENU = /* @__PURE__ */ u4("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", class: css, children: [
    /* @__PURE__ */ u4("title", { children: "Menu" }),
    /* @__PURE__ */ u4("rect", { height: "2", rx: "0.5", width: "14", x: "2", y: "8" }),
    /* @__PURE__ */ u4("rect", { height: "2", rx: "0.5", width: "14", x: "2", y: "3" }),
    /* @__PURE__ */ u4("rect", { height: "2", rx: "0.5", width: "14", x: "2", y: "13" })
  ] });
  var CLOSE = /* @__PURE__ */ u4("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", class: css, children: [
    /* @__PURE__ */ u4("title", { children: "Close" }),
    /* @__PURE__ */ u4("path", { d: "M13.2425,3.343,9,7.586,4.7575,3.343a.5.5,0,0,0-.707,0L3.343,4.05a.5.5,0,0,0,0,.707L7.586,9,3.343,13.2425a.5.5,0,0,0,0,.707l.707.7075a.5.5,0,0,0,.707,0L9,10.414l4.2425,4.243a.5.5,0,0,0,.707,0l.7075-.707a.5.5,0,0,0,0-.707L10.414,9l4.243-4.2425a.5.5,0,0,0,0-.707L13.95,3.343a.5.5,0,0,0-.70711-.00039Z" })
  ] });
  var FILTER_EDIT = /* @__PURE__ */ u4("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", class: css, children: [
    /* @__PURE__ */ u4("title", { children: "Filter Edit" }),
    /* @__PURE__ */ u4("path", { d: "M17.8925,10.8605,16.14,9.1075A.36952.36952,0,0,0,15.8765,9H15.865a.41651.41651,0,0,0-.282.1235l-5.411,5.411a.304.304,0,0,0-.0765.128l-1.0135,3c-.0345.1145.1395.2585.238.2585a.15858.15858,0,0,0,.0185,0c.084-.0195,2.5615-.882,3-1.014a.3.3,0,0,0,.126-.0755l5.412-5.4145A.41749.41749,0,0,0,18,11.15.37152.37152,0,0,0,17.8925,10.8605Zm-5.8,5.4815c-.657.1975-1.65.6145-2.215.784l.78-2.2155Z" }),
    /* @__PURE__ */ u4("path", { d: "M15.473,1H1.527a.5.5,0,0,0-.3935.8085L7,9.2945V15a.496.496,0,0,0,.84.4125L9.83,13.336a.61.61,0,0,0,.17-.4225V9.2945l5.8665-7.486A.5.5,0,0,0,15.473,1Z" })
  ] });
  var BOOLEAN = /* @__PURE__ */ u4("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", class: css, children: [
    /* @__PURE__ */ u4("title", { children: "Boolean" }),
    /* @__PURE__ */ u4("path", { d: "M12,4.25a4.75,4.75,0,0,1,0,9.5H6a4.75,4.75,0,0,1,0-9.5ZM12,3H6A6,6,0,0,0,6,15h6A6,6,0,0,0,12,3Zm0,3A3,3,0,1,1,9,9,3,3,0,0,1,12,6Z" })
  ] });
  var DESELECT = /* @__PURE__ */ u4("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", class: css, children: [
    /* @__PURE__ */ u4("title", { children: "Deselect" }),
    /* @__PURE__ */ u4("path", { d: "m2,9h1v3h-1v-3Zm1,6v-1h-1v1.5555c0,.24549.19901.4445.4445.4445h1.5555v-1h-1Zm3,1h3v-1h-3v1Zm9-7h1v-3h-1v3Zm.5555-7h-1.5555v1h1v1h1v-1.5555c0-.24549-.19901-.4445-.4445-.4445Zm-6.5555,1h3v-1h-3v1ZM1.10295,1.97065l14.92632,14.92632c.15973.15973.41869.15972.57841,0l.28956-.28956c.15972-.15972.15973-.41869,0-.57841L1.97092,1.10268c-.15972-.15972-.41869-.15972-.57841,0l-.28956.28956c-.15972.15972-.15972.41869,0,.57841Zm14.89705,11.74835v-2.719h-1v1.719l1,1Zm-3.282,1.281h-1.718v1h2.718l-1-1ZM2,4.281v2.719h1v-1.719l-1-1Zm3.281-1.281h1.719v-1h-2.719l1,1Z" })
  ] });
  var SORT_DOWN = /* @__PURE__ */ u4("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", class: css, children: [
    /* @__PURE__ */ u4("title", { children: "Sort Down" }),
    /* @__PURE__ */ u4("rect", { id: "Canvas", fill: "#ff13dc", opacity: "0", width: "18", height: "18" }),
    /* @__PURE__ */ u4("rect", { class: "fill", height: "2", rx: "0.5", width: "6", x: "1", y: "12" }),
    /* @__PURE__ */ u4("rect", { height: "2", rx: "0.5", width: "8", x: "1", y: "8" }),
    /* @__PURE__ */ u4("rect", { height: "2", rx: "0.5", width: "10", x: "1", y: "4" }),
    /* @__PURE__ */ u4("path", { d: "M16,12H14.9965V4.5a.494.494,0,0,0-.488-.5L14.503,4h-.496a.5.5,0,0,0-.5.5L13.5035,12H12.5a.25.25,0,0,0-.25.25.245.245,0,0,0,.0735.175l1.7685,2.0165a.25.25,0,0,0,.316,0l1.7685-2.0165a.245.245,0,0,0,.0735-.175A.25.25,0,0,0,16,12Z" })
  ] });
  var SORT_UP = /* @__PURE__ */ u4("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", class: css, children: [
    /* @__PURE__ */ u4("title", { children: "Sort Up" }),
    /* @__PURE__ */ u4("rect", { height: "2", rx: "0.5", width: "6", x: "1", y: "4" }),
    /* @__PURE__ */ u4("rect", { height: "2", rx: "0.5", width: "8", x: "1", y: "8" }),
    /* @__PURE__ */ u4("rect", { height: "2", rx: "0.5", width: "10", x: "1", y: "12" }),
    /* @__PURE__ */ u4("path", { d: "M15.99951,6H14.99634v7.5a.49378.49378,0,0,1-.49317.5h-.49633a.5.5,0,0,1-.5-.49951L13.50366,6H12.50049A.24984.24984,0,0,1,12.25,5.74823a.24439.24439,0,0,1,.07373-.175L14.0918,3.5564a.25007.25007,0,0,1,.3164,0l1.76807,2.01684a.24439.24439,0,0,1,.07373.175A.24984.24984,0,0,1,15.99951,6Z" })
  ] });
  var EXTERNAL = /* @__PURE__ */ u4("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", class: css, children: [
    /* @__PURE__ */ u4("title", { children: "External" }),
    /* @__PURE__ */ u4(
      "path",
      {
        class: "fill",
        d: "M12.5,13h-1a.5.5,0,0,0-.5.5V15H3V3h8V4.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-3a.5.5,0,0,0-.5-.5H1.5a.5.5,0,0,0-.5.5v15a.5.5,0,0,0,.5.5h11a.5.5,0,0,0,.5-.5v-3A.5.5,0,0,0,12.5,13Z"
      }
    ),
    /* @__PURE__ */ u4(
      "path",
      {
        class: "fill",
        d: "M17.9255,8.8275,14.666,5.1a.39352.39352,0,0,0-.2635-.1.4.4,0,0,0-.4.4V8H8.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5H14v2.6a.4.4,0,0,0,.4.4.39352.39352,0,0,0,.2635-.1l3.262-3.7225A.25.25,0,0,0,17.9255,8.8275Z"
      }
    )
  ] });

  // packages/frontend/src/auxiliar/storage.ts
  function storeKey(page, key, postfix) {
    if (postfix) return `site-${page}-${key}-${postfix}`;
    return `site-${page}-${key}`;
  }
  function storeUpdate(key, data2) {
    localStorage.setItem(key, JSON.stringify(data2));
  }
  function storeLoad(key) {
    const jsonString = localStorage.getItem(key);
    if (!jsonString) return void 0;
    try {
      return JSON.parse(jsonString);
    } catch (e3) {
      console.error("Failed to load data from localStorage", { key, jsonString, e: e3 });
      localStorage.removeItem(key);
    }
  }

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
  };
  var ToggleLights = class _ToggleLights extends IconButtonBaseState {
    static initial(disabled = false) {
      const theme = storeLoad(storeKey("_any_page_", "theme"));
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
      storeUpdate(storeKey("_any_page_", "theme"), this.data.mode);
    }
  };
  var ToggleHamburguer = class _ToggleHamburguer extends IconButtonBaseState {
    static initial(disabled = false) {
      const mode = storeLoad(storeKey("_any_page_", "hamburger-menu"));
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
      storeUpdate(storeKey("_any_page_", "hamburger-menu"), this.data.mode);
    }
  };
  var ToggleFacetsMenu = class _ToggleFacetsMenu extends IconButtonBaseState {
    static initial(disabled = false) {
      const mode = storeLoad(storeKey("_any_page_", "facets-browser"));
      return new _ToggleFacetsMenu({ mode: mode === "show" ? "show" : "hide", disabled });
    }
    get show() {
      return this.data.mode === "show";
    }
    get icon() {
      return /* @__PURE__ */ u4(
        "span",
        {
          class: tw(
            "inline-block",
            "mt-[6px] scale-85",
            this.show && "stroke-[1px] stroke-foreground/50",
            this.show ? "text-hiliteb" : "text-primary"
            // fmt.
          ),
          children: FILTER_EDIT
        }
      );
    }
    doAction() {
      this.data.mode = this.show ? "hide" : "show";
    }
    runEffects() {
      const fm = elems("facetsMain");
      if (fm.length > 0) fm[0].classList.toggle("hidden", !this.show);
      storeUpdate(storeKey("_any_page_", "facets-browser"), this.data.mode);
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
      return /* @__PURE__ */ u4("span", { class: tw("flex flex-row gap-1", "items-center"), children: [
        /* @__PURE__ */ u4("span", { class: tw(shadeAll && "opacity-50", !disabled && "group-hover:text-hiliteb"), children: "All of" }),
        /* @__PURE__ */ u4("span", { class: tw("inline-block", "mt-[1px]", "scale-85", this.mode === "all" && "rotate-180"), children: BOOLEAN }),
        /* @__PURE__ */ u4("span", { class: tw(shadeAny && "opacity-50", !disabled && "group-hover:text-hiliteb"), children: "Any of" })
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
  function IconButton({ action, disabled, initial, class: cssClass2 }) {
    const state = useIconButtonState({ action, disabled, initial });
    const self = useRootState(state);
    y3(() => {
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
    return /* @__PURE__ */ u4(
      "div",
      {
        ref: self,
        tabIndex: disabled ? void 0 : 0,
        ...onClickOnEnter(toggle),
        class: tw("group", "cursor-pointer", !disabled && HOVER_SVG, cssClass2),
        children: state?.icon
      }
    );
  }

  // packages/frontend/src/components/icon-button/index.tsx
  function activateIconButtons() {
    for (const elem2 of elems("iconButton")) {
      if (elem2.dataset.action) {
        const props = {
          action: elem2.dataset.action,
          class: classesExcept(elem2, cssClass("iconButton"))
        };
        D(/* @__PURE__ */ u4(IconButton, { ...props }), elem2);
      } else {
        console.error("Missing prop for IconButton component.");
      }
    }
  }

  // packages/server/src/components/layout.tsx
  var GRID_PAGES = /* @__PURE__ */ new Set(["plangs", "tools", "apps", "libs", "learning", "communities"]);

  // packages/server/src/components/vertex-link.tsx
  function VertexLink({
    vertex,
    nocolor,
    title,
    includeLocal
  }) {
    const url = includeLocal ? vertex.href : vertex.urlHome;
    const overrideProse = nocolor ? { style: "color: var(--color-foreground);" } : {};
    return /* @__PURE__ */ u4("div", { class: tw("group relative", "inline-flex flex-row items-center align-middle"), children: [
      /* @__PURE__ */ u4("div", { class: tw("-left-5 absolute", "font-bold", "hidden", includeLocal && "group-hover:block"), children: "#" }),
      /* @__PURE__ */ u4("a", { id: `${vertex.plainKey}`, href: url, title: vertex.name, ...overrideProse, children: title ?? vertex.name }),
      /* @__PURE__ */ u4("a", { class: tw("inline-block scale-50 opacity-50 hover:opacity-100", HOVER_SVG), href: vertex.urlHome, ...overrideProse, children: EXTERNAL })
    ] });
  }

  // packages/frontend/src/components/vertex-info/vertex-info.tsx
  function VertexInfo({ vertex, open, page }) {
    const h1Ref = A2(null);
    y3(() => h1Ref.current?.scrollIntoView({ behavior: "smooth", block: "end" }));
    const forGrid = GRID_PAGES.has(page);
    return /* @__PURE__ */ u4(
      "div",
      {
        class: tw(
          "w-full overflow-y-scroll",
          "px-2 pt-2 sm:px-4",
          !forGrid && "-mx-4",
          // Compensate for padding so it aligns with the rest of the content.
          PROSE_BASIC,
          "max-w-[unset]"
        ),
        children: [
          !vertex && /* @__PURE__ */ u4(k, { children: [
            /* @__PURE__ */ u4("h2", { class: tw("mt-0!"), children: "Information" }),
            /* @__PURE__ */ u4("p", { children: [
              /* @__PURE__ */ u4("strong", { children: "Click" }),
              " a thumbnail for more info. ",
              /* @__PURE__ */ u4("strong", { children: "Double-click" }),
              " a thumbnail to go directly to the item's page."
            ] })
          ] }),
          vertex && /* @__PURE__ */ u4(k, { children: [
            /* @__PURE__ */ u4("h2", { ref: h1Ref, class: tw("mt-0!", forGrid && "inline sm:block"), children: /* @__PURE__ */ u4("a", { class: "text-primary", href: vertex.href, children: vertex.name }) }),
            /* @__PURE__ */ u4("span", { class: tw(forGrid ? "dash mx-2 inline-block sm:hidden" : "hidden"), children: "\u2014" }),
            /* @__PURE__ */ u4("div", { class: tw(forGrid && "hidden sm:block"), children: [
              vertex.urlHome && /* @__PURE__ */ u4(Pill, { children: /* @__PURE__ */ u4(VertexLink, { vertex, includeLocal: false, title: "Homepage", nocolor: true }) }),
              vertex.created.value && /* @__PURE__ */ u4(Pill, { children: `Appeared ${vertex.created.year}` }),
              "releases" in vertex && ret(vertex.releases.last, (rel2) => rel2 && /* @__PURE__ */ u4(Pill, { children: `Released ${rel2.date ?? rel2.version}` })),
              "isTranspiler" in vertex && vertex.isTranspiler && /* @__PURE__ */ u4(Pill, { children: "Transpiler" }),
              "isPopular" in vertex && vertex.isPopular && /* @__PURE__ */ u4(Pill, { children: "Popular" })
            ] }),
            /* @__PURE__ */ u4("p", { class: tw(forGrid && "inline sm:block"), children: vertex.description })
          ] }),
          ret(
            relations(vertex),
            (rels) => rels.length > 0 && /* @__PURE__ */ u4("details", { class: tw(forGrid && "hidden sm:block", "pb-4"), open, children: [
              /* @__PURE__ */ u4("summary", { class: "cursor-pointer text-primary", children: "Details" }),
              /* @__PURE__ */ u4("table", { children: /* @__PURE__ */ u4("tbody", { children: relations(vertex).map(([title, vertices]) => /* @__PURE__ */ u4("tr", { children: [
                /* @__PURE__ */ u4("th", { class: "align-baseline", children: title }),
                /* @__PURE__ */ u4("td", { children: vertices.map((vertex2) => /* @__PURE__ */ u4(Pill, { children: /* @__PURE__ */ u4("a", { href: vertex2.href, children: vertex2.name }) }, vertex2.key)) })
              ] }, title)) }) })
            ] })
          )
        ]
      }
    );
  }
  function Pill({ children }) {
    return (
      // shadow-md inset-shadow-sm inset-shadow-white/20 ring ring-blue-600 inset-ring inset-ring-white/15
      /* @__PURE__ */ u4(
        "span",
        {
          style: "font-size: 1.125rem; height: 2rem;",
          class: tw(
            "inline-flex items-center",
            "rounded-tl-2xl rounded-br-2xl",
            "mr-2 mb-3 px-2",
            "border-2 border-secondary",
            "bg-secondary/50 text-foreground"
          ),
          children
        }
      )
    );
  }
  function relations(vertex) {
    const result = [];
    if (!vertex) return result;
    for (const relName of vertex.relations.keys()) {
      const relation = vertex[relName];
      if (relation.size > 0) result.push([relation.desc, relation.values]);
    }
    return result;
  }

  // packages/frontend/src/components/vertex-info/index.tsx
  function renderVertexInfo({ vertex }) {
    for (const elem2 of elems("vertexInfo")) {
      D(/* @__PURE__ */ u4(VertexInfo, { vertex, page: elem2.dataset.page, open: elem2.dataset.open === "true" }), elem2);
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
      for (const v4 of this.values) if (!predicate(v4)) return false;
      return true;
    }
    any(predicate) {
      for (const v4 of this.values) if (predicate(v4)) return true;
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
      for (const v4 of this.values) if (!other.values.has(v4)) return false;
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
      for (const v4 of this.value) if (!other.value.has(v4)) return false;
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

  // packages/auxiliar/src/map2.ts
  var Map2 = class {
    #map = /* @__PURE__ */ new Map();
    has(k1, k22) {
      return this.#map.get(k1)?.has(k22) ?? false;
    }
    set(k1, k22, v4) {
      let m22 = this.#map.get(k1);
      if (!m22) {
        m22 = /* @__PURE__ */ new Map();
        this.#map.set(k1, m22);
      }
      m22.set(k22, v4);
      return this;
    }
    getOrSet(k1, k22, whenMissing) {
      let v4 = this.get(k1, k22);
      if (v4 === void 0) this.set(k1, k22, v4 = whenMissing());
      return v4;
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
        for (const [k22, v4] of map2) res.set(k22, v4);
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
      const m4 = this.#map.get(k1);
      if (m4) for (const k22 of m4.keys()) res.push(k22);
      return res;
    }
    entries() {
      return [...this.#map.entries()].filter(([_k1, map2]) => map2.size > 0);
    }
    flatEntries() {
      const results = [];
      for (const [k1, map2] of this.#map) {
        for (const [k22, v4] of map2) results.push([k1, k22, v4]);
      }
      return results;
    }
    values() {
      return [...this.#map.values()].flatMap((map) => [...map.values()]);
    }
    values2(k1) {
      const m4 = this.#map.get(k1);
      return m4 ? [...m4.values()] : [];
    }
    /** Get all values going from first dimension, them map them and return the non-falsey values. */
    values2Mapped(k1, mapper) {
      return this.values2(k1).map(mapper).filter((v4) => v4);
    }
    toString() {
      const entries = [...this.flatEntries()].map(([k1, k22, v4]) => `(${k1}, ${k22}) => ${v4}`);
      return `Map2(size: ${this.size})${entries.length > 0 ? ` { ${entries.join(", ")} }` : ""}`;
    }
  };

  // packages/auxiliar/src/debounce.ts
  function debounce(callback, millies) {
    let timeout;
    return (...args) => {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => callback(...args), millies);
    };
  }

  // packages/frontend/src/facets/main/grid_util.ts
  function doUpdateThumbns(vertexKeys) {
    for (const div of elems("vertexThumbn")) {
      const plKey = div.dataset.vertexKey;
      const visible = vertexKeys.has(plKey);
      div.classList.toggle("hidden", !visible);
    }
    adjustGrid();
  }
  var updateThumbns = debounce(doUpdateThumbns, 30);
  function doAdjustGrid() {
    const widthRow = 0;
    const widthThumb = 0;
    const visibleThumbs = 0;
    const numCols = Math.min(Math.floor(widthRow / widthThumb), visibleThumbs);
    const maxCols = Math.floor(widthRow / (5 * 16));
    if (numCols < maxCols && visibleThumbs < maxCols && minWidthBP("48rem")) {
    } else {
    }
  }
  var adjustGrid = debounce(doAdjustGrid, 30);

  // packages/frontend/src/facets/main/state.ts
  var FacetsMainState = class _FacetsMainState extends Dispatchable {
    constructor() {
      super(...arguments);
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
      storeUpdate(storeKey(this.page, "facets-last-group"), groupKey);
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
        if (!value.equalTo(values.get(groupKey, facetKey))) {
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
      for (const v4 of this.values.getMap(groupKey)?.values() ?? []) {
        if (v4.isPresent) return true;
      }
      return false;
    }
    get anyValues() {
      return this.values.values().some((v4) => v4.isPresent);
    }
    groupTitle(key) {
      return this.groupsConfig.get(key)?.title ?? key;
    }
    /** Helpers */
    /**
     * Run any side effects without dispatching.
     * Useful for instance on start, for instance: where we don't want to dispatch
     * (hence render twice) but we do want to setup a clean state.
     */
    runEffects(persist = "") {
      if (persist === "persist") {
        const data2 = this.serialized;
        this.pushState(data2);
        storeUpdate(storeKey(this.page, "facet-value"), data2);
      }
      updateThumbns(this.results);
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
    return /* @__PURE__ */ u4("label", { for: facetKey, class: tw("block", "px-2"), children: [
      /* @__PURE__ */ u4(
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
      /* @__PURE__ */ u4("span", { class: "ml-2", children: label2 })
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
    return /* @__PURE__ */ u4("input", { type: "search", onInput, placeholder: label2, class: tw("w-full", INPUT, "mt-8"), value: current });
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
    y3(() => {
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
    const remover = (idx) => handler((b2, ev) => {
      ev.stopPropagation();
      if (state.doRemove(b2.dataset.value)) {
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
    const body = () => /* @__PURE__ */ u4(k, { children: [
      /* @__PURE__ */ u4(
        "input",
        {
          type: "search",
          name: facetKey,
          ref: input,
          placeholder: label2,
          class: tw(INPUT, "w-full"),
          onKeyDown: add
        }
      ),
      /* @__PURE__ */ u4("span", { class: tw(state.value.size === 0 && "hidden", state.value.size < 2 ? "text-foreground/50" : "text-foreground", "pl-2"), children: /* @__PURE__ */ u4(IconButton, { action: "allAny", disabled: state.value.size < 2, initial: "any" }) }),
      /* @__PURE__ */ u4("ul", { children: mapEntries(([idx, value]) => /* @__PURE__ */ u4("li", { children: /* @__PURE__ */ u4(
        "button",
        {
          type: "button",
          "data-value": value,
          class: tw("inline-flex flex-row", "p-2", "w-full text-left", "cursor-pointer", HOVER),
          ...onClickOnEnter(remover(idx)),
          children: [
            /* @__PURE__ */ u4("div", { class: "-mt-[2px] inline-block scale-75 text-red-500", children: CLOSE }),
            value
          ]
        }
      ) }, value)) })
    ] });
    return /* @__PURE__ */ u4("div", { ref: self, class: tw("flex flex-col"), children: active ? body() : null });
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
      const relations2 = direction === "direct" ? edges.entriesBackward : edges.entriesForward;
      const source = direction === "direct" ? edges.toSource : edges.fromSource;
      const entries = [...relations2].map(([key, toKeys]) => {
        const name = source.get(key)?.name ?? key;
        return { value: key, label: name, count: toKeys.size };
      });
      if (typeof minEntries === "number") return entries.filter((entry) => entry.count >= minEntries);
      return entries;
    }
    if (config.kind === "prop") {
      const years = /* @__PURE__ */ new Map();
      for (const { created } of pg.plang.values) {
        if (!created.value) continue;
        years.set(created.value, (years.get(created.value) ?? 0) + 1);
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
    "facet-asc": (a4, b2) => a4.label.localeCompare(b2.label),
    "facet-desc": (a4, b2) => b2.label.localeCompare(a4.label),
    "count-asc": (a4, b2) => a4.count - b2.count,
    "count-desc": (a4, b2) => b2.count - a4.count,
    "sel-asc": (a4, b2, isSel) => isSel ? Number(isSel(a4)) - Number(isSel(b2)) : 0,
    "sel-desc": (a4, b2, isSel) => isSel ? Number(isSel(b2)) - Number(isSel(a4)) : 0
  };
  function sortEntries(entries, order, isSel) {
    const less = CMP2[order];
    return entries.sort((a4, b2) => less(a4, b2, isSel));
  }

  // packages/frontend/src/facets/table/header.tsx
  function Header({
    action,
    class: cssClass2,
    col,
    config,
    order
  }) {
    return /* @__PURE__ */ u4(
      "button",
      {
        type: "button",
        class: tw("p-1", "italic", "underline decoration-1 decoration-dotted", "cursor-pointer", cssClass2),
        ...onClickOnEnter(action),
        children: /* @__PURE__ */ u4("div", { class: tw(HOVER, "inline-flex w-full", "p-1", "items-center justify-between", "gap-1"), children: [
          /* @__PURE__ */ u4("span", { children: label(col, config) }),
          /* @__PURE__ */ u4("span", { class: tw("scale-75", "mt-1"), children: icon(col, order) }),
          /* @__PURE__ */ u4("span", { class: "flex-1" })
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
    /** Queries */
    get main() {
      return this.data.main;
    }
    /** Selected values. */
    get value() {
      const { main, groupKey, facetKey } = this.data;
      return main.values.getOrSet(groupKey, facetKey, () => new Filter("any"));
    }
    /** All entries. */
    get entries() {
      return this.data.entries;
    }
    get order() {
      return this.data.order;
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
      return new FacetTableState({ config, entries, facetKey, groupKey, main, order });
    });
    y3(
      () => on(self?.current, "icon-button", (ev) => {
        ev.stopPropagation();
        state.doSetMode(ev.detail.mode === "all" ? "all" : "any");
      })
    );
    const SUBGRID2 = tw("col-span-3", "grid grid-cols-subgrid", "items-center");
    const ROW = tw(SUBGRID2, tw("border-b-1", BORDER));
    const CENTER_ROW = tw("items-center justify-between");
    const body = () => /* @__PURE__ */ u4("div", { class: tw("grid grid-cols-[1fr_auto_auto]", "overflow-y-auto", "relative"), children: [
      /* @__PURE__ */ u4("div", { class: tw(ROW, "sticky top-0 cursor-pointer", tw(BORDER, "border-b-1")), children: [
        /* @__PURE__ */ u4("div", { class: tw("col-span-3", "py-1", "flex shrink-0 flex-row", "bg-background", CENTER_ROW), children: /* @__PURE__ */ u4("span", { class: tw("pl-2", CENTER_ROW, state.value.size < 2 ? "text-foreground/50" : "text-foreground"), children: /* @__PURE__ */ u4(IconButton, { action: "allAny", disabled: state.value.size < 2, initial: state.value.mode, class: tw(config.kind === "prop" && "hidden") }) }) }),
        /* @__PURE__ */ u4("div", { class: tw(ROW, "col-span-3", "bg-primary text-background/80"), children: [
          /* @__PURE__ */ u4(Header, { class: "text-left", action: () => state.doToggleOrder("facet"), col: "facet", config, order: state.order }),
          /* @__PURE__ */ u4(Header, { class: "text-center", action: () => state.doToggleOrder("count"), col: "count", config, order: state.order }),
          /* @__PURE__ */ u4(Header, { class: "text-right", action: () => state.doToggleOrder("sel"), col: "sel", config, order: state.order })
        ] })
      ] }),
      state.entries.map(
        (entry) => ret(
          onClickOnEnter(() => state.doToggle(entry.value)),
          (clickOrEnter) => /* @__PURE__ */ u4("div", { class: tw(ROW, HOVER, state.value.has(entry.value) && "bg-primary/20"), ...clickOrEnter, children: [
            /* @__PURE__ */ u4("div", { class: tw("p-2", "text-left", "overflow-hidden text-ellipsis", "line-clamp-3"), children: entry.label }),
            /* @__PURE__ */ u4("div", { class: tw("p-2", "text-center"), children: entry.count }),
            /* @__PURE__ */ u4("div", { class: tw("p-2", "text-right"), children: /* @__PURE__ */ u4("input", { type: "checkbox", checked: state.value.has(entry.value), ...clickOrEnter }) })
          ] }, entry.value)
        )
      )
    ] });
    return /* @__PURE__ */ u4("div", { ref: self, class: tw("flex flex-col"), children: active ? body() : null });
  }

  // packages/frontend/src/facets/misc/facet-group.tsx
  function createFacetGroupsComponent(groups) {
    return ({ currentFacetGroup }) => /* @__PURE__ */ u4(k, { children: [...groups.entries()].map(([groupKey, { title, facets }]) => /* @__PURE__ */ u4(FacetGroup, { groupKey, label: title, active: currentFacetGroup === groupKey, children: facets.map((facet) => {
      const { kind, label: label2, facetKey } = facet;
      const props = { groupKey, facetKey, label: label2, active: currentFacetGroup === groupKey };
      switch (kind) {
        case "bool":
          return /* @__PURE__ */ u4(FacetBool, { ...props, valueMapper: facet.valueMapper });
        case "multi":
          return /* @__PURE__ */ u4(FacetMulti, { ...props });
        case "table":
          return /* @__PURE__ */ u4(FacetTable, { ...props, config: facet.config });
        case "text":
          return /* @__PURE__ */ u4(FacetText, { ...props });
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
    return /* @__PURE__ */ u4(
      "div",
      {
        class: tw(
          "relative",
          !active && "hidden",
          // Self.
          "flex-1",
          "overflow-y-scroll",
          "self-center",
          "w-[calc(100%_-_1rem)]",
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
    dialectOf: (pl, flt) => flt.matches((key) => pl.relDialectOf.has(key)),
    extensions: (pl, flt) => flt.matches((key) => pl.extensions.includes(key)),
    hasLogo: (pl, val) => val.value === pl.images.some((img) => img.kind === "logo"),
    hasWikipedia: (pl, val) => val.value === !!pl.data.extWikipediaPath,
    implements: (pl, flt) => flt.matches((key) => pl.relImplements.has(key)),
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
  function matchVertex(vertex, predicates, facetValues) {
    for (const [key, value] of facetValues) {
      const pred = predicates[key];
      if (!pred) console.error(`No predicate found for key: ${key}`);
      if (pred && value.isPresent && !pred(vertex, value)) return false;
    }
    return true;
  }
  function matchVertices(vertices, facetValues, limit = -1) {
    const predicates = vertexPredicates(vertices.name);
    const result = /* @__PURE__ */ new Set();
    if (!predicates) {
      console.warn(`No predicates found for vertex name: ${vertices.name}`);
      return result;
    }
    for (const vertex of vertices.values) {
      if (limit >= 0 && result.size >= limit) break;
      if (matchVertex(vertex, predicates, facetValues)) result.add(vertex.key);
    }
    return result;
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
    }
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
      return this.filter((v4) => v4 !== void 0 && v4 !== null && (typeof v4 !== "string" || v4.length > 0));
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
      const f5 = this.#forward.get(fromKey)?.delete(toKey) ?? false;
      const b2 = this.#backward.get(toKey)?.delete(fromKey) ?? false;
      return f5 || b2;
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
      return this.#forward.values().reduce((acc, set) => acc + set.size, 0);
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
      return [...this.keys].map((k3) => this.edges.toSource.get(k3)).filter((v4) => v4);
    }
    get size() {
      return this.keys.size;
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
      return [...this.keys].map((k3) => this.edges.fromSource.get(k3)).filter((v4) => v4);
    }
    get size() {
      return this.keys.size;
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
  function strDateCompare(a4, b2) {
    if (a4 === b2) return 0;
    if (!a4) return -1;
    if (!b2) return 1;
    return a4.localeCompare(b2);
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
    get urlHome() {
      return this.data.extHomeURL;
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
    addLinks(links) {
      arrayMerge(this.data.links ??= [], links, (l1, l22) => l1.url === l22.url);
      return this;
    }
  };

  // packages/plangs/src/graph/generated.ts
  var PlangsGraphBase = class _PlangsGraphBase {
    constructor() {
      // Create a Vertices instances for each vertex.
      this.app = new Vertices("app", "app", (key) => new VApp(this, key));
      this.bundle = new Vertices("bundle", "bun", (key) => new VBundle(this, key));
      this.community = new Vertices("community", "comm", (key) => new VCommunity(this, key));
      this.learning = new Vertices("learning", "learn", (key) => new VLearning(this, key));
      this.library = new Vertices("library", "lib", (key) => new VLibrary(this, key));
      this.license = new Vertices("license", "lic", (key) => new VLicense(this, key));
      this.paradigm = new Vertices("paradigm", "para", (key) => new VParadigm(this, key));
      this.plang = new Vertices("plang", "pl", (key) => new VPlang(this, key));
      this.platform = new Vertices("platform", "plat", (key) => new VPlatform(this, key));
      this.post = new Vertices("post", "post", (key) => new VPost(this, key));
      this.tag = new Vertices("tag", "tag", (key) => new VTag(this, key));
      this.tool = new Vertices("tool", "tool", (key) => new VTool(this, key));
      this.typeSystem = new Vertices("typeSystem", "tsys", (key) => new VTypeSystem(this, key));
      /** All vertex collections. */
      this.vertices = {
        app: this.app,
        bundle: this.bundle,
        community: this.community,
        learning: this.learning,
        library: this.library,
        license: this.license,
        paradigm: this.paradigm,
        plang: this.plang,
        platform: this.platform,
        post: this.post,
        tag: this.tag,
        tool: this.tool,
        typeSystem: this.typeSystem
      };
      /** All edge collections. */
      this.edges = {
        appRelPlatforms: new Edges(this.app, this.platform, "Platforms", "Apps"),
        appRelWrittenWith: new Edges(this.app, this.plang, "Plangs", "Apps"),
        bundleRelPlangs: new Edges(this.bundle, this.plang, "Plangs", "Bundles"),
        bundleRelTools: new Edges(this.bundle, this.tool, "Tools", "Bundles"),
        communityRelApps: new Edges(this.community, this.app, "Apps", "Communities"),
        communityRelLibraries: new Edges(this.community, this.library, "Libraries", "Communities"),
        communityRelPlangs: new Edges(this.community, this.plang, "Plangs", "Communities"),
        communityRelTools: new Edges(this.community, this.tool, "Tools", "Communities"),
        learningRelApps: new Edges(this.learning, this.app, "Apps", "Learning Resources"),
        learningRelCommunities: new Edges(this.learning, this.community, "Communities", "Learning Resources"),
        learningRelLibraries: new Edges(this.learning, this.library, "Libraries", "Learning Resources"),
        learningRelPlangs: new Edges(this.learning, this.plang, "Plangs", "Learning Resources"),
        learningRelTools: new Edges(this.learning, this.tool, "Tools", "Learning Resources"),
        libraryRelPlangs: new Edges(this.library, this.plang, "Plangs", "Libraries"),
        libraryRelPlatforms: new Edges(this.library, this.platform, "Platforms", "Libraries"),
        libraryRelWrittenWith: new Edges(this.library, this.plang, "Written With", "Used for Libraries"),
        licenseRelApps: new Edges(this.license, this.app, "Apps", "Licenses"),
        licenseRelLibraries: new Edges(this.license, this.library, "Libraries", "Licenses"),
        licenseRelPlangs: new Edges(this.license, this.plang, "Plangs", "Licenses"),
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
        postRelCommunities: new Edges(this.post, this.community, "Communities", "Posts"),
        postRelLearning: new Edges(this.post, this.learning, "Learning Resources", "Posts"),
        postRelLibraries: new Edges(this.post, this.library, "Libraries", "Posts"),
        postRelPlangs: new Edges(this.post, this.plang, "Plangs", "Posts"),
        postRelTools: new Edges(this.post, this.tool, "Tools", "Posts"),
        tagRelApps: new Edges(this.tag, this.app, "Apps tagged", "Tags"),
        tagRelCommunities: new Edges(this.tag, this.community, "Communities", "Tags"),
        tagRelLearning: new Edges(this.tag, this.learning, "Learning Resources", "Tags"),
        tagRelLibraries: new Edges(this.tag, this.library, "Libraries", "Tags"),
        tagRelPlangs: new Edges(this.tag, this.plang, "Plangs", "Tags"),
        tagRelTools: new Edges(this.tag, this.tool, "Tools", "Tags"),
        toolRelPlatforms: new Edges(this.tool, this.platform, "Platforms", "Tools"),
        toolRelWrittenWith: new Edges(this.tool, this.plang, "Implemented With", "Tool Plang")
      };
    }
    /** Return a type checked object identifying a relationship of a specific kind of Vertex. */
    static relConfig(vertexName, vertexRel) {
      const klass = _PlangsGraphBase.vertexClass(vertexName);
      const rel2 = klass.relations.get(vertexRel);
      return { kind: "rel", edgeName: rel2.edgeName, direction: rel2.direction };
    }
    /** Return a type checked object identifying a property of the class that is "readable" (a prop returning a String, Boolean or Nunber). */
    static propConfig(vertexName, vertexProp) {
      return { kind: "prop", vertexName, vertexProp };
    }
    /** Get a Vertex class by its Vertex name. */
    static vertexClass(vertexName) {
      if (vertexName === "app") return VApp;
      if (vertexName === "bundle") return VBundle;
      if (vertexName === "community") return VCommunity;
      if (vertexName === "learning") return VLearning;
      if (vertexName === "library") return VLibrary;
      if (vertexName === "license") return VLicense;
      if (vertexName === "paradigm") return VParadigm;
      if (vertexName === "plang") return VPlang;
      if (vertexName === "platform") return VPlatform;
      if (vertexName === "post") return VPost;
      if (vertexName === "tag") return VTag;
      if (vertexName === "tool") return VTool;
      if (vertexName === "typeSystem") return VTypeSystem;
    }
    static {
      /** Vertex kinds per Vertex Name. The kind is the prefix of a Vertex Key. */
      this.vertexKind = /* @__PURE__ */ new Map([
        ["app", "app"],
        ["bundle", "bun"],
        ["community", "comm"],
        ["learning", "learn"],
        ["library", "lib"],
        ["license", "lic"],
        ["paradigm", "para"],
        ["plang", "pl"],
        ["platform", "plat"],
        ["post", "post"],
        ["tag", "tag"],
        ["tool", "tool"],
        ["typeSystem", "tsys"]
      ]);
    }
    static {
      /** Reverse map of vertexKind. */
      this.vertexNameByKind = new Map(Array.from(_PlangsGraphBase.vertexKind.entries()).map(([k3, v4]) => [v4, k3]));
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
        vertices: Object.fromEntries(Object.entries(this.vertices).map(([k3, v4]) => [k3, v4.toJSON()])),
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
      this.relations = _VAppBase.relations;
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
      /** Describes the edges and direction used for every relationship in this Vertex. */
      this.relations = /* @__PURE__ */ new Map([
        ["relCommunities", { edgeName: "communityRelApps", direction: "inverse" }],
        ["relLearning", { edgeName: "learningRelApps", direction: "inverse" }],
        ["relLicenses", { edgeName: "licenseRelApps", direction: "inverse" }],
        ["relPlatforms", { edgeName: "appRelPlatforms", direction: "direct" }],
        ["relPosts", { edgeName: "postRelApps", direction: "inverse" }],
        ["relTags", { edgeName: "tagRelApps", direction: "inverse" }],
        ["relWrittenWith", { edgeName: "appRelWrittenWith", direction: "direct" }]
      ]);
    }
    /** Communities `VCommunity-[relApps]->(this:VApp)`. Inverse: {@link VCommunity.relApps}. */
    get relCommunities() {
      return new RelTo(this, this.graph.edges.communityRelApps);
    }
    /** Learning Resources `VLearning-[relApps]->(this:VApp)`. Inverse: {@link VLearning.relApps}. */
    get relLearning() {
      return new RelTo(this, this.graph.edges.learningRelApps);
    }
    /** Licenses `VLicense-[relApps]->(this:VApp)`. Inverse: {@link VLicense.relApps}. */
    get relLicenses() {
      return new RelTo(this, this.graph.edges.licenseRelApps);
    }
    /** Platforms `(this:VApp)-[relPlatforms]->VPlatform`. Inverse: {@link VPlatform.relApps}. */
    get relPlatforms() {
      return new RelFrom(this, this.graph.edges.appRelPlatforms);
    }
    /** Posts `VPost-[relApps]->(this:VApp)`. Inverse: {@link VPost.relApps}. */
    get relPosts() {
      return new RelTo(this, this.graph.edges.postRelApps);
    }
    /** Tags `VTag-[relApps]->(this:VApp)`. Inverse: {@link VTag.relApps}. */
    get relTags() {
      return new RelTo(this, this.graph.edges.tagRelApps);
    }
    /** Plangs `(this:VApp)-[relWrittenWith]->VPlang`. Inverse: {@link VPlang.relApps}. */
    get relWrittenWith() {
      return new RelFrom(this, this.graph.edges.appRelWrittenWith);
    }
  };
  var VBundleBase = class _VBundleBase extends PlangsVertex {
    constructor() {
      super(...arguments);
      this.vertexKind = _VBundleBase.vertexKind;
      this.vertexDesc = _VBundleBase.vertexDesc;
      this.vertexName = _VBundleBase.vertexName;
      this.relations = _VBundleBase.relations;
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
      /** Describes the edges and direction used for every relationship in this Vertex. */
      this.relations = /* @__PURE__ */ new Map([
        ["relPlangs", { edgeName: "bundleRelPlangs", direction: "direct" }],
        ["relTools", { edgeName: "bundleRelTools", direction: "direct" }]
      ]);
    }
    /** Plangs `(this:VBundle)-[relPlangs]->VPlang`. Inverse: {@link VPlang.relBundles}. */
    get relPlangs() {
      return new RelFrom(this, this.graph.edges.bundleRelPlangs);
    }
    /** Tools `(this:VBundle)-[relTools]->VTool`. Inverse: {@link VTool.relBundles}. */
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
      this.relations = _VCommunityBase.relations;
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
      /** Describes the edges and direction used for every relationship in this Vertex. */
      this.relations = /* @__PURE__ */ new Map([
        ["relApps", { edgeName: "communityRelApps", direction: "direct" }],
        ["relLearning", { edgeName: "learningRelCommunities", direction: "inverse" }],
        ["relLibraries", { edgeName: "communityRelLibraries", direction: "direct" }],
        ["relPlangs", { edgeName: "communityRelPlangs", direction: "direct" }],
        ["relPosts", { edgeName: "postRelCommunities", direction: "inverse" }],
        ["relTags", { edgeName: "tagRelCommunities", direction: "inverse" }],
        ["relTools", { edgeName: "communityRelTools", direction: "direct" }]
      ]);
    }
    /** Apps `(this:VCommunity)-[relApps]->VApp`. Inverse: {@link VApp.relCommunities}. */
    get relApps() {
      return new RelFrom(this, this.graph.edges.communityRelApps);
    }
    /** Learning Resources `VLearning-[relCommunities]->(this:VCommunity)`. Inverse: {@link VLearning.relCommunities}. */
    get relLearning() {
      return new RelTo(this, this.graph.edges.learningRelCommunities);
    }
    /** Libraries `(this:VCommunity)-[relLibraries]->VLibrary`. Inverse: {@link VLibrary.relCommunities}. */
    get relLibraries() {
      return new RelFrom(this, this.graph.edges.communityRelLibraries);
    }
    /** Plangs `(this:VCommunity)-[relPlangs]->VPlang`. Inverse: {@link VPlang.relCommunities}. */
    get relPlangs() {
      return new RelFrom(this, this.graph.edges.communityRelPlangs);
    }
    /** Posts `VPost-[relCommunities]->(this:VCommunity)`. Inverse: {@link VPost.relCommunities}. */
    get relPosts() {
      return new RelTo(this, this.graph.edges.postRelCommunities);
    }
    /** Tags `VTag-[relCommunities]->(this:VCommunity)`. Inverse: {@link VTag.relCommunities}. */
    get relTags() {
      return new RelTo(this, this.graph.edges.tagRelCommunities);
    }
    /** Tools `(this:VCommunity)-[relTools]->VTool`. Inverse: {@link VTool.relCommunities}. */
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
      this.relations = _VLearningBase.relations;
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
      /** Describes the edges and direction used for every relationship in this Vertex. */
      this.relations = /* @__PURE__ */ new Map([
        ["relApps", { edgeName: "learningRelApps", direction: "direct" }],
        ["relCommunities", { edgeName: "learningRelCommunities", direction: "direct" }],
        ["relLibraries", { edgeName: "learningRelLibraries", direction: "direct" }],
        ["relPlangs", { edgeName: "learningRelPlangs", direction: "direct" }],
        ["relPosts", { edgeName: "postRelLearning", direction: "inverse" }],
        ["relTags", { edgeName: "tagRelLearning", direction: "inverse" }],
        ["relTools", { edgeName: "learningRelTools", direction: "direct" }]
      ]);
    }
    /** Apps `(this:VLearning)-[relApps]->VApp`. Inverse: {@link VApp.relLearning}. */
    get relApps() {
      return new RelFrom(this, this.graph.edges.learningRelApps);
    }
    /** Communities `(this:VLearning)-[relCommunities]->VCommunity`. Inverse: {@link VCommunity.relLearning}. */
    get relCommunities() {
      return new RelFrom(this, this.graph.edges.learningRelCommunities);
    }
    /** Libraries `(this:VLearning)-[relLibraries]->VLibrary`. Inverse: {@link VLibrary.relLearning}. */
    get relLibraries() {
      return new RelFrom(this, this.graph.edges.learningRelLibraries);
    }
    /** Plangs `(this:VLearning)-[relPlangs]->VPlang`. Inverse: {@link VPlang.relLearning}. */
    get relPlangs() {
      return new RelFrom(this, this.graph.edges.learningRelPlangs);
    }
    /** Posts `VPost-[relLearning]->(this:VLearning)`. Inverse: {@link VPost.relLearning}. */
    get relPosts() {
      return new RelTo(this, this.graph.edges.postRelLearning);
    }
    /** Tags `VTag-[relLearning]->(this:VLearning)`. Inverse: {@link VTag.relLearning}. */
    get relTags() {
      return new RelTo(this, this.graph.edges.tagRelLearning);
    }
    /** Tools `(this:VLearning)-[relTools]->VTool`. Inverse: {@link VTool.relLearning}. */
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
      this.relations = _VLibraryBase.relations;
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
      /** Describes the edges and direction used for every relationship in this Vertex. */
      this.relations = /* @__PURE__ */ new Map([
        ["relCommunities", { edgeName: "communityRelLibraries", direction: "inverse" }],
        ["relLearning", { edgeName: "learningRelLibraries", direction: "inverse" }],
        ["relLicenses", { edgeName: "licenseRelLibraries", direction: "inverse" }],
        ["relPlangs", { edgeName: "libraryRelPlangs", direction: "direct" }],
        ["relPlatforms", { edgeName: "libraryRelPlatforms", direction: "direct" }],
        ["relPosts", { edgeName: "postRelLibraries", direction: "inverse" }],
        ["relTags", { edgeName: "tagRelLibraries", direction: "inverse" }],
        ["relWrittenWith", { edgeName: "libraryRelWrittenWith", direction: "direct" }]
      ]);
    }
    /** Communities `VCommunity-[relLibraries]->(this:VLibrary)`. Inverse: {@link VCommunity.relLibraries}. */
    get relCommunities() {
      return new RelTo(this, this.graph.edges.communityRelLibraries);
    }
    /** Learning Resources `VLearning-[relLibraries]->(this:VLibrary)`. Inverse: {@link VLearning.relLibraries}. */
    get relLearning() {
      return new RelTo(this, this.graph.edges.learningRelLibraries);
    }
    /** Licenses `VLicense-[relLibraries]->(this:VLibrary)`. Inverse: {@link VLicense.relLibraries}. */
    get relLicenses() {
      return new RelTo(this, this.graph.edges.licenseRelLibraries);
    }
    /** Plangs `(this:VLibrary)-[relPlangs]->VPlang`. Inverse: {@link VPlang.relLibraries}. */
    get relPlangs() {
      return new RelFrom(this, this.graph.edges.libraryRelPlangs);
    }
    /** Platforms `(this:VLibrary)-[relPlatforms]->VPlatform`. Inverse: {@link VPlatform.relLibraries}. */
    get relPlatforms() {
      return new RelFrom(this, this.graph.edges.libraryRelPlatforms);
    }
    /** Posts `VPost-[relLibraries]->(this:VLibrary)`. Inverse: {@link VPost.relLibraries}. */
    get relPosts() {
      return new RelTo(this, this.graph.edges.postRelLibraries);
    }
    /** Tags `VTag-[relLibraries]->(this:VLibrary)`. Inverse: {@link VTag.relLibraries}. */
    get relTags() {
      return new RelTo(this, this.graph.edges.tagRelLibraries);
    }
    /** Written With `(this:VLibrary)-[relWrittenWith]->VPlang`. Inverse: {@link VPlang.relUsedInLibrary}. */
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
      this.relations = _VLicenseBase.relations;
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
      /** Describes the edges and direction used for every relationship in this Vertex. */
      this.relations = /* @__PURE__ */ new Map([
        ["relApps", { edgeName: "licenseRelApps", direction: "direct" }],
        ["relLibraries", { edgeName: "licenseRelLibraries", direction: "direct" }],
        ["relPlangs", { edgeName: "licenseRelPlangs", direction: "direct" }],
        ["relTools", { edgeName: "licenseRelTools", direction: "direct" }]
      ]);
    }
    /** Apps `(this:VLicense)-[relApps]->VApp`. Inverse: {@link VApp.relLicenses}. */
    get relApps() {
      return new RelFrom(this, this.graph.edges.licenseRelApps);
    }
    /** Libraries `(this:VLicense)-[relLibraries]->VLibrary`. Inverse: {@link VLibrary.relLicenses}. */
    get relLibraries() {
      return new RelFrom(this, this.graph.edges.licenseRelLibraries);
    }
    /** Plangs `(this:VLicense)-[relPlangs]->VPlang`. Inverse: {@link VPlang.relLicenses}. */
    get relPlangs() {
      return new RelFrom(this, this.graph.edges.licenseRelPlangs);
    }
    /** Tools `(this:VLicense)-[relTools]->VTool`. Inverse: {@link VTool.relLicenses}. */
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
      this.relations = _VParadigmBase.relations;
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
      /** Describes the edges and direction used for every relationship in this Vertex. */
      this.relations = /* @__PURE__ */ new Map([
        ["relPlangs", { edgeName: "plangRelParadigms", direction: "inverse" }]
      ]);
    }
    /** Plangs `VPlang-[relParadigms]->(this:VParadigm)`. Inverse: {@link VPlang.relParadigms}. */
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
      this.relations = _VPlangBase.relations;
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
      /** Describes the edges and direction used for every relationship in this Vertex. */
      this.relations = /* @__PURE__ */ new Map([
        ["relApps", { edgeName: "appRelWrittenWith", direction: "inverse" }],
        ["relBundles", { edgeName: "bundleRelPlangs", direction: "inverse" }],
        ["relCommunities", { edgeName: "communityRelPlangs", direction: "inverse" }],
        ["relCompilesTo", { edgeName: "plangRelCompilesTo", direction: "direct" }],
        ["relDialectOf", { edgeName: "plangRelDialectOf", direction: "direct" }],
        ["relDialects", { edgeName: "plangRelDialectOf", direction: "inverse" }],
        ["relImplementedBy", { edgeName: "plangRelImplements", direction: "inverse" }],
        ["relImplements", { edgeName: "plangRelImplements", direction: "direct" }],
        ["relInfluenced", { edgeName: "plangRelInfluencedBy", direction: "inverse" }],
        ["relInfluencedBy", { edgeName: "plangRelInfluencedBy", direction: "direct" }],
        ["relLearning", { edgeName: "learningRelPlangs", direction: "inverse" }],
        ["relLibraries", { edgeName: "libraryRelPlangs", direction: "inverse" }],
        ["relLicenses", { edgeName: "licenseRelPlangs", direction: "inverse" }],
        ["relParadigms", { edgeName: "plangRelParadigms", direction: "direct" }],
        ["relPlatforms", { edgeName: "plangRelPlatforms", direction: "direct" }],
        ["relPosts", { edgeName: "postRelPlangs", direction: "inverse" }],
        ["relTags", { edgeName: "tagRelPlangs", direction: "inverse" }],
        ["relTargetOf", { edgeName: "plangRelCompilesTo", direction: "inverse" }],
        ["relTools", { edgeName: "plangRelTools", direction: "direct" }],
        ["relToolsUsing", { edgeName: "toolRelWrittenWith", direction: "inverse" }],
        ["relTypeSystems", { edgeName: "plangRelTypeSystems", direction: "direct" }],
        ["relUsedInLibrary", { edgeName: "libraryRelWrittenWith", direction: "inverse" }],
        ["relUsedToWrite", { edgeName: "plangRelWrittenWith", direction: "inverse" }],
        ["relWrittenWith", { edgeName: "plangRelWrittenWith", direction: "direct" }]
      ]);
    }
    /** Apps `VApp-[relWrittenWith]->(this:VPlang)`. Inverse: {@link VApp.relWrittenWith}. */
    get relApps() {
      return new RelTo(this, this.graph.edges.appRelWrittenWith);
    }
    /** Bundles `VBundle-[relPlangs]->(this:VPlang)`. Inverse: {@link VBundle.relPlangs}. */
    get relBundles() {
      return new RelTo(this, this.graph.edges.bundleRelPlangs);
    }
    /** Communities `VCommunity-[relPlangs]->(this:VPlang)`. Inverse: {@link VCommunity.relPlangs}. */
    get relCommunities() {
      return new RelTo(this, this.graph.edges.communityRelPlangs);
    }
    /** Transpiling Targets `(this:VPlang)-[relCompilesTo]->VPlang`. Inverse: {@link VPlang.relTargetOf}. */
    get relCompilesTo() {
      return new RelFrom(this, this.graph.edges.plangRelCompilesTo);
    }
    /** Dialect of `(this:VPlang)-[relDialectOf]->VPlang`. Inverse: {@link VPlang.relDialects}. */
    get relDialectOf() {
      return new RelFrom(this, this.graph.edges.plangRelDialectOf);
    }
    /** Dialects `VPlang-[relDialectOf]->(this:VPlang)`. Inverse: {@link VPlang.relDialectOf}. */
    get relDialects() {
      return new RelTo(this, this.graph.edges.plangRelDialectOf);
    }
    /** Implemented By `VPlang-[relImplements]->(this:VPlang)`. Inverse: {@link VPlang.relImplements}. */
    get relImplementedBy() {
      return new RelTo(this, this.graph.edges.plangRelImplements);
    }
    /** Implements `(this:VPlang)-[relImplements]->VPlang`. Inverse: {@link VPlang.relImplementedBy}. */
    get relImplements() {
      return new RelFrom(this, this.graph.edges.plangRelImplements);
    }
    /** Influenced `VPlang-[relInfluencedBy]->(this:VPlang)`. Inverse: {@link VPlang.relInfluencedBy}. */
    get relInfluenced() {
      return new RelTo(this, this.graph.edges.plangRelInfluencedBy);
    }
    /** Influenced By `(this:VPlang)-[relInfluencedBy]->VPlang`. Inverse: {@link VPlang.relInfluenced}. */
    get relInfluencedBy() {
      return new RelFrom(this, this.graph.edges.plangRelInfluencedBy);
    }
    /** Learning Resources `VLearning-[relPlangs]->(this:VPlang)`. Inverse: {@link VLearning.relPlangs}. */
    get relLearning() {
      return new RelTo(this, this.graph.edges.learningRelPlangs);
    }
    /** Libraries `VLibrary-[relPlangs]->(this:VPlang)`. Inverse: {@link VLibrary.relPlangs}. */
    get relLibraries() {
      return new RelTo(this, this.graph.edges.libraryRelPlangs);
    }
    /** Licenses `VLicense-[relPlangs]->(this:VPlang)`. Inverse: {@link VLicense.relPlangs}. */
    get relLicenses() {
      return new RelTo(this, this.graph.edges.licenseRelPlangs);
    }
    /** Paradigms `(this:VPlang)-[relParadigms]->VParadigm`. Inverse: {@link VParadigm.relPlangs}. */
    get relParadigms() {
      return new RelFrom(this, this.graph.edges.plangRelParadigms);
    }
    /** Platforms `(this:VPlang)-[relPlatforms]->VPlatform`. Inverse: {@link VPlatform.relPlangs}. */
    get relPlatforms() {
      return new RelFrom(this, this.graph.edges.plangRelPlatforms);
    }
    /** Posts `VPost-[relPlangs]->(this:VPlang)`. Inverse: {@link VPost.relPlangs}. */
    get relPosts() {
      return new RelTo(this, this.graph.edges.postRelPlangs);
    }
    /** Tags `VTag-[relPlangs]->(this:VPlang)`. Inverse: {@link VTag.relPlangs}. */
    get relTags() {
      return new RelTo(this, this.graph.edges.tagRelPlangs);
    }
    /** Source Plangs `VPlang-[relCompilesTo]->(this:VPlang)`. Inverse: {@link VPlang.relCompilesTo}. */
    get relTargetOf() {
      return new RelTo(this, this.graph.edges.plangRelCompilesTo);
    }
    /** Tools `(this:VPlang)-[relTools]->VTool`. Inverse: {@link VTool.relPlangs}. */
    get relTools() {
      return new RelFrom(this, this.graph.edges.plangRelTools);
    }
    /** Tool Plang `VTool-[relWrittenWith]->(this:VPlang)`. Inverse: {@link VTool.relWrittenWith}. */
    get relToolsUsing() {
      return new RelTo(this, this.graph.edges.toolRelWrittenWith);
    }
    /** Type Systems `(this:VPlang)-[relTypeSystems]->VTypeSystem`. Inverse: {@link VTypeSystem.relPlangs}. */
    get relTypeSystems() {
      return new RelFrom(this, this.graph.edges.plangRelTypeSystems);
    }
    /** Used for Libraries `VLibrary-[relWrittenWith]->(this:VPlang)`. Inverse: {@link VLibrary.relWrittenWith}. */
    get relUsedInLibrary() {
      return new RelTo(this, this.graph.edges.libraryRelWrittenWith);
    }
    /** Used to Write `VPlang-[relWrittenWith]->(this:VPlang)`. Inverse: {@link VPlang.relWrittenWith}. */
    get relUsedToWrite() {
      return new RelTo(this, this.graph.edges.plangRelWrittenWith);
    }
    /** Written With `(this:VPlang)-[relWrittenWith]->VPlang`. Inverse: {@link VPlang.relUsedToWrite}. */
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
      this.relations = _VPlatformBase.relations;
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
      /** Describes the edges and direction used for every relationship in this Vertex. */
      this.relations = /* @__PURE__ */ new Map([
        ["relApps", { edgeName: "appRelPlatforms", direction: "inverse" }],
        ["relLibraries", { edgeName: "libraryRelPlatforms", direction: "inverse" }],
        ["relPlangs", { edgeName: "plangRelPlatforms", direction: "inverse" }],
        ["relTools", { edgeName: "toolRelPlatforms", direction: "inverse" }]
      ]);
    }
    /** Apps `VApp-[relPlatforms]->(this:VPlatform)`. Inverse: {@link VApp.relPlatforms}. */
    get relApps() {
      return new RelTo(this, this.graph.edges.appRelPlatforms);
    }
    /** Libraries `VLibrary-[relPlatforms]->(this:VPlatform)`. Inverse: {@link VLibrary.relPlatforms}. */
    get relLibraries() {
      return new RelTo(this, this.graph.edges.libraryRelPlatforms);
    }
    /** Plangs `VPlang-[relPlatforms]->(this:VPlatform)`. Inverse: {@link VPlang.relPlatforms}. */
    get relPlangs() {
      return new RelTo(this, this.graph.edges.plangRelPlatforms);
    }
    /** Tools `VTool-[relPlatforms]->(this:VPlatform)`. Inverse: {@link VTool.relPlatforms}. */
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
      this.relations = _VPostBase.relations;
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
      /** Describes the edges and direction used for every relationship in this Vertex. */
      this.relations = /* @__PURE__ */ new Map([
        ["relApps", { edgeName: "postRelApps", direction: "direct" }],
        ["relCommunities", { edgeName: "postRelCommunities", direction: "direct" }],
        ["relLearning", { edgeName: "postRelLearning", direction: "direct" }],
        ["relLibraries", { edgeName: "postRelLibraries", direction: "direct" }],
        ["relPlangs", { edgeName: "postRelPlangs", direction: "direct" }],
        ["relTools", { edgeName: "postRelTools", direction: "direct" }]
      ]);
    }
    /** Apps `(this:VPost)-[relApps]->VApp`. Inverse: {@link VApp.relPosts}. */
    get relApps() {
      return new RelFrom(this, this.graph.edges.postRelApps);
    }
    /** Communities `(this:VPost)-[relCommunities]->VCommunity`. Inverse: {@link VCommunity.relPosts}. */
    get relCommunities() {
      return new RelFrom(this, this.graph.edges.postRelCommunities);
    }
    /** Learning Resources `(this:VPost)-[relLearning]->VLearning`. Inverse: {@link VLearning.relPosts}. */
    get relLearning() {
      return new RelFrom(this, this.graph.edges.postRelLearning);
    }
    /** Libraries `(this:VPost)-[relLibraries]->VLibrary`. Inverse: {@link VLibrary.relPosts}. */
    get relLibraries() {
      return new RelFrom(this, this.graph.edges.postRelLibraries);
    }
    /** Plangs `(this:VPost)-[relPlangs]->VPlang`. Inverse: {@link VPlang.relPosts}. */
    get relPlangs() {
      return new RelFrom(this, this.graph.edges.postRelPlangs);
    }
    /** Tools `(this:VPost)-[relTools]->VTool`. Inverse: {@link VTool.relPosts}. */
    get relTools() {
      return new RelFrom(this, this.graph.edges.postRelTools);
    }
  };
  var VTagBase = class _VTagBase extends PlangsVertex {
    constructor() {
      super(...arguments);
      this.vertexKind = _VTagBase.vertexKind;
      this.vertexDesc = _VTagBase.vertexDesc;
      this.vertexName = _VTagBase.vertexName;
      this.relations = _VTagBase.relations;
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
      /** Describes the edges and direction used for every relationship in this Vertex. */
      this.relations = /* @__PURE__ */ new Map([
        ["relApps", { edgeName: "tagRelApps", direction: "direct" }],
        ["relCommunities", { edgeName: "tagRelCommunities", direction: "direct" }],
        ["relLearning", { edgeName: "tagRelLearning", direction: "direct" }],
        ["relLibraries", { edgeName: "tagRelLibraries", direction: "direct" }],
        ["relPlangs", { edgeName: "tagRelPlangs", direction: "direct" }],
        ["relTools", { edgeName: "tagRelTools", direction: "direct" }]
      ]);
    }
    /** Apps tagged `(this:VTag)-[relApps]->VApp`. Inverse: {@link VApp.relTags}. */
    get relApps() {
      return new RelFrom(this, this.graph.edges.tagRelApps);
    }
    /** Communities `(this:VTag)-[relCommunities]->VCommunity`. Inverse: {@link VCommunity.relTags}. */
    get relCommunities() {
      return new RelFrom(this, this.graph.edges.tagRelCommunities);
    }
    /** Learning Resources `(this:VTag)-[relLearning]->VLearning`. Inverse: {@link VLearning.relTags}. */
    get relLearning() {
      return new RelFrom(this, this.graph.edges.tagRelLearning);
    }
    /** Libraries `(this:VTag)-[relLibraries]->VLibrary`. Inverse: {@link VLibrary.relTags}. */
    get relLibraries() {
      return new RelFrom(this, this.graph.edges.tagRelLibraries);
    }
    /** Plangs `(this:VTag)-[relPlangs]->VPlang`. Inverse: {@link VPlang.relTags}. */
    get relPlangs() {
      return new RelFrom(this, this.graph.edges.tagRelPlangs);
    }
    /** Tools `(this:VTag)-[relTools]->VTool`. Inverse: {@link VTool.relTags}. */
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
      this.relations = _VToolBase.relations;
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
      /** Describes the edges and direction used for every relationship in this Vertex. */
      this.relations = /* @__PURE__ */ new Map([
        ["relBundles", { edgeName: "bundleRelTools", direction: "inverse" }],
        ["relCommunities", { edgeName: "communityRelTools", direction: "inverse" }],
        ["relLearning", { edgeName: "learningRelTools", direction: "inverse" }],
        ["relLicenses", { edgeName: "licenseRelTools", direction: "inverse" }],
        ["relPlangs", { edgeName: "plangRelTools", direction: "inverse" }],
        ["relPlatforms", { edgeName: "toolRelPlatforms", direction: "direct" }],
        ["relPosts", { edgeName: "postRelTools", direction: "inverse" }],
        ["relTags", { edgeName: "tagRelTools", direction: "inverse" }],
        ["relWrittenWith", { edgeName: "toolRelWrittenWith", direction: "direct" }]
      ]);
    }
    /** Bundles `VBundle-[relTools]->(this:VTool)`. Inverse: {@link VBundle.relTools}. */
    get relBundles() {
      return new RelTo(this, this.graph.edges.bundleRelTools);
    }
    /** Communities `VCommunity-[relTools]->(this:VTool)`. Inverse: {@link VCommunity.relTools}. */
    get relCommunities() {
      return new RelTo(this, this.graph.edges.communityRelTools);
    }
    /** Learning Resources `VLearning-[relTools]->(this:VTool)`. Inverse: {@link VLearning.relTools}. */
    get relLearning() {
      return new RelTo(this, this.graph.edges.learningRelTools);
    }
    /** Licenses `VLicense-[relTools]->(this:VTool)`. Inverse: {@link VLicense.relTools}. */
    get relLicenses() {
      return new RelTo(this, this.graph.edges.licenseRelTools);
    }
    /** Plangs `VPlang-[relTools]->(this:VTool)`. Inverse: {@link VPlang.relTools}. */
    get relPlangs() {
      return new RelTo(this, this.graph.edges.plangRelTools);
    }
    /** Platforms `(this:VTool)-[relPlatforms]->VPlatform`. Inverse: {@link VPlatform.relTools}. */
    get relPlatforms() {
      return new RelFrom(this, this.graph.edges.toolRelPlatforms);
    }
    /** Posts `VPost-[relTools]->(this:VTool)`. Inverse: {@link VPost.relTools}. */
    get relPosts() {
      return new RelTo(this, this.graph.edges.postRelTools);
    }
    /** Tags `VTag-[relTools]->(this:VTool)`. Inverse: {@link VTag.relTools}. */
    get relTags() {
      return new RelTo(this, this.graph.edges.tagRelTools);
    }
    /** Implemented With `(this:VTool)-[relWrittenWith]->VPlang`. Inverse: {@link VPlang.relToolsUsing}. */
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
      this.relations = _VTypeSystemBase.relations;
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
      /** Describes the edges and direction used for every relationship in this Vertex. */
      this.relations = /* @__PURE__ */ new Map([
        ["relPlangs", { edgeName: "plangRelTypeSystems", direction: "inverse" }]
      ]);
    }
    /** Plangs `VPlang-[relTypeSystems]->(this:VTypeSystem)`. Inverse: {@link VPlang.relTypeSystems}. */
    get relPlangs() {
      return new RelTo(this, this.graph.edges.plangRelTypeSystems);
    }
  };

  // packages/plangs/src/graph/index.ts
  var rel = PlangsGraphBase.relConfig;
  var prop = PlangsGraphBase.propConfig;
  var PlangsGraph = class extends PlangsGraphBase {
    /**
     * We can derive / infer some data from the existing data.
     * We may implement some sort of inference engine in the future,
     * but for now we can just materialize some simple rules.
     */
    materialize() {
      for (const pl of this.plang.values) pl.relImplements.add(pl.key);
      for (const bundle of this.bundle.values) {
        for (const tool of bundle.relTools.values) {
          bundle.relPlangs.add(...tool.relPlangs.keys);
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
    addStackovTags(stackovTags) {
      arrayMerge(this.data.stackovTags ??= [], stackovTags);
      return this;
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
    get urlReddit() {
      return this.data.extRedditPath ? `https://reddit.com/${this.data.extRedditPath}` : void 0;
    }
    get urlRepository() {
      return this.data.extRepositoryURL;
    }
    get urlStackov() {
      return this.stackovTags ? `https://stackoverflow.com/questions/tagged/${this.stackovTags.join("+")}` : void 0;
    }
    get urlWikipedia() {
      return this.data.extWikipediaPath ? `https://github.com/${this.data.extGithubPath}` : void 0;
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
  var VBundle = class extends VBundleBase {
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
      this.gkByFk = GK_BY_FK;
      this.groupsConfig = GROUPS;
      this.groupsComponent = COMPONENT;
    }
    static initial(pg) {
      const currentGroupKey = storeLoad(storeKey(PAGE, "facets-last-group")) ?? NAV.default;
      const values = FacetsMainState.deserialize(GK_BY_FK, FragmentTracker.deserialize() ?? storeLoad(storeKey(PAGE, "facet-value")));
      return new _AppsFacetsState({ pg, currentGroupKey, values });
    }
    get results() {
      if (!this.pg) return /* @__PURE__ */ new Set();
      return matchVertices(this.pg.app, this.values.getMap2());
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
      this.gkByFk = GK_BY_FK2;
      this.groupsConfig = GROUPS2;
      this.groupsComponent = COMPONENT2;
    }
    static initial(pg) {
      const currentGroupKey = storeLoad(storeKey(PAGE2, "facets-last-group")) ?? NAV2.default;
      const values = FacetsMainState.deserialize(GK_BY_FK2, FragmentTracker.deserialize() ?? storeLoad(storeKey(PAGE2, "facet-value")));
      return new _CommunitiesFacetsState({ pg, currentGroupKey, values });
    }
    get results() {
      if (!this.pg) return /* @__PURE__ */ new Set();
      return matchVertices(this.pg.community, this.values.getMap2());
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
      this.gkByFk = GK_BY_FK3;
      this.groupsConfig = GROUPS3;
      this.groupsComponent = COMPONENT3;
    }
    static initial(pg) {
      const currentGroupKey = storeLoad(storeKey(PAGE3, "facets-last-group")) ?? NAV3.default;
      const values = FacetsMainState.deserialize(GK_BY_FK3, FragmentTracker.deserialize() ?? storeLoad(storeKey(PAGE3, "facet-value")));
      return new _LearningFacetsState({ pg, currentGroupKey, values });
    }
    get results() {
      if (!this.pg) return /* @__PURE__ */ new Set();
      return matchVertices(this.pg.learning, this.values.getMap2());
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
  var PAGE4 = "libs";
  var NAV4 = {
    groupKeys: [["general"], ["writtenWith", "writtenFor"], ["tags", "creationYear", "licenses"], ["platforms"]],
    default: "general"
  };
  var LibrariesFacetsState = class _LibrariesFacetsState extends FacetsMainState {
    constructor() {
      super(...arguments);
      this.nav = NAV4;
      this.page = PAGE4;
      this.gkByFk = GK_BY_FK4;
      this.groupsConfig = GROUPS4;
      this.groupsComponent = COMPONENT4;
    }
    static initial(pg) {
      const currentGroupKey = storeLoad(storeKey(PAGE4, "facets-last-group")) ?? NAV4.default;
      const values = FacetsMainState.deserialize(GK_BY_FK4, FragmentTracker.deserialize() ?? storeLoad(storeKey(PAGE4, "facet-value")));
      return new _LibrariesFacetsState({ pg, currentGroupKey, values });
    }
    get results() {
      if (!this.pg) return /* @__PURE__ */ new Set();
      return matchVertices(this.pg.library, this.values.getMap2());
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
      facets: [bool("isTranspiler", "Is Transpiler"), table("compilesTo", "Compiles To", rel("plang", "relCompilesTo"))]
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
      this.gkByFk = GK_BY_FK5;
      this.groupsConfig = GROUPS5;
      this.groupsComponent = COMPONENT5;
    }
    static initial(pg) {
      const currentGroupKey = storeLoad(storeKey(PAGE5, "facets-last-group")) ?? NAV5.default;
      const values = FacetsMainState.deserialize(GK_BY_FK5, FragmentTracker.deserialize() ?? storeLoad(storeKey(PAGE5, "facet-value")));
      return new _PlangsFacetsState({ pg, currentGroupKey, values });
    }
    get results() {
      if (!this.pg) return /* @__PURE__ */ new Set();
      return matchVertices(this.pg.plang, this.values.getMap2());
    }
  };

  // packages/frontend/src/facets/kind/tools.tsx
  var [GROUPS6, GK_BY_FK6, COMPONENT6] = defineFacetGroups({
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
  var PAGE6 = "tools";
  var NAV6 = {
    groupKeys: [["general"], ["writtenWith", "writtenFor"], ["tags", "creationYear", "licenses"], ["platforms"]],
    default: "general"
  };
  var ToolsFacetsState = class _ToolsFacetsState extends FacetsMainState {
    constructor() {
      super(...arguments);
      this.nav = NAV6;
      this.page = PAGE6;
      this.gkByFk = GK_BY_FK6;
      this.groupsConfig = GROUPS6;
      this.groupsComponent = COMPONENT6;
    }
    static initial(pg) {
      const currentGroupKey = storeLoad(storeKey(PAGE6, "facets-last-group")) ?? NAV6.default;
      const values = FacetsMainState.deserialize(GK_BY_FK6, FragmentTracker.deserialize() ?? storeLoad(storeKey(PAGE6, "facet-value")));
      return new _ToolsFacetsState({ pg, currentGroupKey, values });
    }
    get results() {
      if (!this.pg) return /* @__PURE__ */ new Set();
      return matchVertices(this.pg.tool, this.values.getMap2());
    }
  };

  // packages/frontend/src/facets/main/use_state.ts
  var FacetsMainContext = J(void 0);
  function useFacetState(page, pg) {
    let state;
    if (page === "apps") state = useDispatchable(() => AppsFacetsState.initial(pg));
    if (page === "communities") state = useDispatchable(() => CommunitiesFacetsState.initial(pg));
    if (page === "learning") state = useDispatchable(() => LearningFacetsState.initial(pg));
    if (page === "libs") state = useDispatchable(() => LibrariesFacetsState.initial(pg));
    if (page === "plangs") state = useDispatchable(() => PlangsFacetsState.initial(pg));
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
    y3(() => window.fragment.onUserChange((ev) => state?.doResetAll(ev.deserFrag)));
    const mapGroups = (state2, group, callback) => group.map((groupKey) => callback(groupKey, state2.currentGroupKey === groupKey, state2.groupHasValues(groupKey)));
    const iconStyle = tw("scale-66", "mr-1");
    const body = (state2) => /* @__PURE__ */ u4(FacetsMainContext.Provider, { value: state2, children: [
      /* @__PURE__ */ u4(
        "aside",
        {
          class: tw(
            tw("h-full", VSCROLL),
            "min-w-[10rem] sm:min-w-[12rem]",
            // ---
            tw(BORDER, "border-r-1"),
            "bg-linear-to-t from-secondary to-background"
          ),
          children: /* @__PURE__ */ u4("div", { class: tw("grid grid-cols-[auto_auto]"), children: [
            /* @__PURE__ */ u4("header", { class: tw("uppercase", "text-primary", "mb-2", "ml-4"), children: "Filters" }),
            state2.nav.groupKeys.map((group) => /* @__PURE__ */ u4("nav", { class: tw("sm:mb-6", "min-w-[12rem] max-w-[15rem]", SUBGRID), children: mapGroups(state2, group, (groupKey, isCurrent, hasValues) => /* @__PURE__ */ u4(
              "div",
              {
                class: tw(SUBGRID, isCurrent ? "bg-primary/85 text-background" : "hover:bg-primary/25"),
                style: `${hasValues ? "font-weight: bold" : ""}`,
                children: [
                  /* @__PURE__ */ u4(
                    "button",
                    {
                      ...onClickOnEnter(() => state2.doSetCurrentGroup(groupKey)),
                      class: tw(
                        "block w-full",
                        "truncate text-left",
                        "sm:ml-4",
                        "mr-2 px-1 py-1",
                        "px-4 py-2 sm:mb-1",
                        "cursor-pointer",
                        isCurrent ? "text-background/85" : hasValues ? "text-primary" : "text-foreground"
                      ),
                      children: state2.groupTitle(groupKey)
                    }
                  ),
                  /* @__PURE__ */ u4(
                    "div",
                    {
                      ...onClickOnEnter(() => state2.doResetGroup(groupKey)),
                      class: tw(iconStyle, !state2.groupHasValues(groupKey) && "hidden", HOVER_SVG),
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
      /* @__PURE__ */ u4("div", { class: tw("flex w-full flex-col", "overflow-hidden", "bg-linear-to-b to-secondary/50", "relative"), children: /* @__PURE__ */ u4(state2.groupsComponent, { currentFacetGroup: state2.currentGroupKey }) })
    ] });
    return /* @__PURE__ */ u4("aside", { ref: self, class: tw("flex flex-row items-stretch", "h-full overflow-hidden"), children: state && body(state) });
  }

  // packages/frontend/src/facets/main/index.tsx
  function activateFacetsMain(pg) {
    for (const elem2 of elems("facetsMain")) {
      if (pg && elem2.dataset.page) {
        D(/* @__PURE__ */ u4(FacetsMain, { pg, page: elem2.dataset.page }), elem2);
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
    window.fragment = new FragmentTracker().bind();
    window.restoreFilters = () => ToggleFacetsMenu.initial().runEffects();
    window.restoreHamburguer = () => ToggleHamburguer.initial().runEffects();
    window.restoreLightMode = () => ToggleLights.initial().runEffects();
    document.addEventListener("DOMContentLoaded", () => {
      activateIconButtons();
      loadData.then(() => {
        activateFacetsMain(pg);
        const grid = elem("vertexGrid");
        if (!grid) return;
        on(grid, "pointerdown", ({ target }) => {
          const vertex = getClosestVertex(pg, target);
          if (vertex) renderVertexInfo({ vertex });
        });
        on(grid, "dblclick", ({ target }) => {
          const vertex = getClosestVertex(pg, target);
          if (!vertex) return;
          if (vertex.vertexName === "plang") {
            window.location.href = `/${vertex.plainKey}`;
          } else {
            window.location.href = `/${vertex.vertexName}/${vertex.plainKey}`;
          }
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
  start();
})();
//# sourceMappingURL=app.js.map
