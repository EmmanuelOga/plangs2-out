"use strict";
(() => {
  // node_modules/preact/dist/preact.module.js
  var n;
  var l;
  var u;
  var t;
  var i;
  var o;
  var r;
  var f;
  var e;
  var c;
  var s;
  var a;
  var h = {};
  var p = [];
  var v = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  var y = Array.isArray;
  function d(n2, l4) {
    for (var u5 in l4) n2[u5] = l4[u5];
    return n2;
  }
  function w(n2) {
    var l4 = n2.parentNode;
    l4 && l4.removeChild(n2);
  }
  function _(l4, u5, t3) {
    var i6, o4, r3, f5 = {};
    for (r3 in u5) "key" == r3 ? i6 = u5[r3] : "ref" == r3 ? o4 = u5[r3] : f5[r3] = u5[r3];
    if (arguments.length > 2 && (f5.children = arguments.length > 3 ? n.call(arguments, 2) : t3), "function" == typeof l4 && null != l4.defaultProps) for (r3 in l4.defaultProps) void 0 === f5[r3] && (f5[r3] = l4.defaultProps[r3]);
    return g(l4, f5, i6, o4, null);
  }
  function g(n2, t3, i6, o4, r3) {
    var f5 = { type: n2, props: t3, key: i6, ref: o4, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: null == r3 ? ++u : r3, __i: -1, __u: 0 };
    return null == r3 && null != l.vnode && l.vnode(f5), f5;
  }
  function k(n2) {
    return n2.children;
  }
  function b(n2, l4) {
    this.props = n2, this.context = l4;
  }
  function x(n2, l4) {
    if (null == l4) return n2.__ ? x(n2.__, n2.__i + 1) : null;
    for (var u5; l4 < n2.__k.length; l4++) if (null != (u5 = n2.__k[l4]) && null != u5.__e) return u5.__e;
    return "function" == typeof n2.type ? x(n2) : null;
  }
  function C(n2) {
    var l4, u5;
    if (null != (n2 = n2.__) && null != n2.__c) {
      for (n2.__e = n2.__c.base = null, l4 = 0; l4 < n2.__k.length; l4++) if (null != (u5 = n2.__k[l4]) && null != u5.__e) {
        n2.__e = n2.__c.base = u5.__e;
        break;
      }
      return C(n2);
    }
  }
  function M(n2) {
    (!n2.__d && (n2.__d = true) && i.push(n2) && !P.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r)(P);
  }
  function P() {
    var n2, u5, t3, o4, r3, e3, c4, s4;
    for (i.sort(f); n2 = i.shift(); ) n2.__d && (u5 = i.length, o4 = void 0, e3 = (r3 = (t3 = n2).__v).__e, c4 = [], s4 = [], t3.__P && ((o4 = d({}, r3)).__v = r3.__v + 1, l.vnode && l.vnode(o4), O(t3.__P, o4, r3, t3.__n, t3.__P.namespaceURI, 32 & r3.__u ? [e3] : null, c4, null == e3 ? x(r3) : e3, !!(32 & r3.__u), s4), o4.__v = r3.__v, o4.__.__k[o4.__i] = o4, j(c4, o4, s4), o4.__e != e3 && C(o4)), i.length > u5 && i.sort(f));
    P.__r = 0;
  }
  function S(n2, l4, u5, t3, i6, o4, r3, f5, e3, c4, s4) {
    var a4, v4, y4, d4, w4, _2 = t3 && t3.__k || p, g2 = l4.length;
    for (u5.__d = e3, $(u5, l4, _2), e3 = u5.__d, a4 = 0; a4 < g2; a4++) null != (y4 = u5.__k[a4]) && "boolean" != typeof y4 && "function" != typeof y4 && (v4 = -1 === y4.__i ? h : _2[y4.__i] || h, y4.__i = a4, O(n2, y4, v4, i6, o4, r3, f5, e3, c4, s4), d4 = y4.__e, y4.ref && v4.ref != y4.ref && (v4.ref && N(v4.ref, null, y4), s4.push(y4.ref, y4.__c || d4, y4)), null == w4 && null != d4 && (w4 = d4), 65536 & y4.__u || v4.__k === y4.__k ? e3 = I(y4, e3, n2) : "function" == typeof y4.type && void 0 !== y4.__d ? e3 = y4.__d : d4 && (e3 = d4.nextSibling), y4.__d = void 0, y4.__u &= -196609);
    u5.__d = e3, u5.__e = w4;
  }
  function $(n2, l4, u5) {
    var t3, i6, o4, r3, f5, e3 = l4.length, c4 = u5.length, s4 = c4, a4 = 0;
    for (n2.__k = [], t3 = 0; t3 < e3; t3++) r3 = t3 + a4, null != (i6 = n2.__k[t3] = null == (i6 = l4[t3]) || "boolean" == typeof i6 || "function" == typeof i6 ? null : "string" == typeof i6 || "number" == typeof i6 || "bigint" == typeof i6 || i6.constructor == String ? g(null, i6, null, null, null) : y(i6) ? g(k, { children: i6 }, null, null, null) : void 0 === i6.constructor && i6.__b > 0 ? g(i6.type, i6.props, i6.key, i6.ref ? i6.ref : null, i6.__v) : i6) ? (i6.__ = n2, i6.__b = n2.__b + 1, f5 = L(i6, u5, r3, s4), i6.__i = f5, o4 = null, -1 !== f5 && (s4--, (o4 = u5[f5]) && (o4.__u |= 131072)), null == o4 || null === o4.__v ? (-1 == f5 && a4--, "function" != typeof i6.type && (i6.__u |= 65536)) : f5 !== r3 && (f5 == r3 - 1 ? a4-- : f5 == r3 + 1 ? a4++ : f5 > r3 ? s4 > e3 - r3 ? a4 += f5 - r3 : a4-- : f5 < r3 && (f5 == r3 - a4 ? a4 -= f5 - r3 : a4++), f5 !== t3 + a4 && (i6.__u |= 65536))) : (o4 = u5[r3]) && null == o4.key && o4.__e && 0 == (131072 & o4.__u) && (o4.__e == n2.__d && (n2.__d = x(o4)), V(o4, o4, false), u5[r3] = null, s4--);
    if (s4) for (t3 = 0; t3 < c4; t3++) null != (o4 = u5[t3]) && 0 == (131072 & o4.__u) && (o4.__e == n2.__d && (n2.__d = x(o4)), V(o4, o4));
  }
  function I(n2, l4, u5) {
    var t3, i6;
    if ("function" == typeof n2.type) {
      for (t3 = n2.__k, i6 = 0; t3 && i6 < t3.length; i6++) t3[i6] && (t3[i6].__ = n2, l4 = I(t3[i6], l4, u5));
      return l4;
    }
    n2.__e != l4 && (l4 && n2.type && !u5.contains(l4) && (l4 = x(n2)), u5.insertBefore(n2.__e, l4 || null), l4 = n2.__e);
    do {
      l4 = l4 && l4.nextSibling;
    } while (null != l4 && 8 === l4.nodeType);
    return l4;
  }
  function L(n2, l4, u5, t3) {
    var i6 = n2.key, o4 = n2.type, r3 = u5 - 1, f5 = u5 + 1, e3 = l4[u5];
    if (null === e3 || e3 && i6 == e3.key && o4 === e3.type && 0 == (131072 & e3.__u)) return u5;
    if (t3 > (null != e3 && 0 == (131072 & e3.__u) ? 1 : 0)) for (; r3 >= 0 || f5 < l4.length; ) {
      if (r3 >= 0) {
        if ((e3 = l4[r3]) && 0 == (131072 & e3.__u) && i6 == e3.key && o4 === e3.type) return r3;
        r3--;
      }
      if (f5 < l4.length) {
        if ((e3 = l4[f5]) && 0 == (131072 & e3.__u) && i6 == e3.key && o4 === e3.type) return f5;
        f5++;
      }
    }
    return -1;
  }
  function T(n2, l4, u5) {
    "-" === l4[0] ? n2.setProperty(l4, null == u5 ? "" : u5) : n2[l4] = null == u5 ? "" : "number" != typeof u5 || v.test(l4) ? u5 : u5 + "px";
  }
  function A(n2, l4, u5, t3, i6) {
    var o4;
    n: if ("style" === l4) if ("string" == typeof u5) n2.style.cssText = u5;
    else {
      if ("string" == typeof t3 && (n2.style.cssText = t3 = ""), t3) for (l4 in t3) u5 && l4 in u5 || T(n2.style, l4, "");
      if (u5) for (l4 in u5) t3 && u5[l4] === t3[l4] || T(n2.style, l4, u5[l4]);
    }
    else if ("o" === l4[0] && "n" === l4[1]) o4 = l4 !== (l4 = l4.replace(/(PointerCapture)$|Capture$/i, "$1")), l4 = l4.toLowerCase() in n2 || "onFocusOut" === l4 || "onFocusIn" === l4 ? l4.toLowerCase().slice(2) : l4.slice(2), n2.l || (n2.l = {}), n2.l[l4 + o4] = u5, u5 ? t3 ? u5.u = t3.u : (u5.u = e, n2.addEventListener(l4, o4 ? s : c, o4)) : n2.removeEventListener(l4, o4 ? s : c, o4);
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
  function F(n2) {
    return function(u5) {
      if (this.l) {
        var t3 = this.l[u5.type + n2];
        if (null == u5.t) u5.t = e++;
        else if (u5.t < t3.u) return;
        return t3(l.event ? l.event(u5) : u5);
      }
    };
  }
  function O(n2, u5, t3, i6, o4, r3, f5, e3, c4, s4) {
    var a4, h4, p4, v4, w4, _2, g2, m3, x3, C3, M2, P2, $3, I2, H, L2, T3 = u5.type;
    if (void 0 !== u5.constructor) return null;
    128 & t3.__u && (c4 = !!(32 & t3.__u), r3 = [e3 = u5.__e = t3.__e]), (a4 = l.__b) && a4(u5);
    n: if ("function" == typeof T3) try {
      if (m3 = u5.props, x3 = "prototype" in T3 && T3.prototype.render, C3 = (a4 = T3.contextType) && i6[a4.__c], M2 = a4 ? C3 ? C3.props.value : a4.__ : i6, t3.__c ? g2 = (h4 = u5.__c = t3.__c).__ = h4.__E : (x3 ? u5.__c = h4 = new T3(m3, M2) : (u5.__c = h4 = new b(m3, M2), h4.constructor = T3, h4.render = q), C3 && C3.sub(h4), h4.props = m3, h4.state || (h4.state = {}), h4.context = M2, h4.__n = i6, p4 = h4.__d = true, h4.__h = [], h4._sb = []), x3 && null == h4.__s && (h4.__s = h4.state), x3 && null != T3.getDerivedStateFromProps && (h4.__s == h4.state && (h4.__s = d({}, h4.__s)), d(h4.__s, T3.getDerivedStateFromProps(m3, h4.__s))), v4 = h4.props, w4 = h4.state, h4.__v = u5, p4) x3 && null == T3.getDerivedStateFromProps && null != h4.componentWillMount && h4.componentWillMount(), x3 && null != h4.componentDidMount && h4.__h.push(h4.componentDidMount);
      else {
        if (x3 && null == T3.getDerivedStateFromProps && m3 !== v4 && null != h4.componentWillReceiveProps && h4.componentWillReceiveProps(m3, M2), !h4.__e && (null != h4.shouldComponentUpdate && false === h4.shouldComponentUpdate(m3, h4.__s, M2) || u5.__v === t3.__v)) {
          for (u5.__v !== t3.__v && (h4.props = m3, h4.state = h4.__s, h4.__d = false), u5.__e = t3.__e, u5.__k = t3.__k, u5.__k.forEach(function(n3) {
            n3 && (n3.__ = u5);
          }), P2 = 0; P2 < h4._sb.length; P2++) h4.__h.push(h4._sb[P2]);
          h4._sb = [], h4.__h.length && f5.push(h4);
          break n;
        }
        null != h4.componentWillUpdate && h4.componentWillUpdate(m3, h4.__s, M2), x3 && null != h4.componentDidUpdate && h4.__h.push(function() {
          h4.componentDidUpdate(v4, w4, _2);
        });
      }
      if (h4.context = M2, h4.props = m3, h4.__P = n2, h4.__e = false, $3 = l.__r, I2 = 0, x3) {
        for (h4.state = h4.__s, h4.__d = false, $3 && $3(u5), a4 = h4.render(h4.props, h4.state, h4.context), H = 0; H < h4._sb.length; H++) h4.__h.push(h4._sb[H]);
        h4._sb = [];
      } else do {
        h4.__d = false, $3 && $3(u5), a4 = h4.render(h4.props, h4.state, h4.context), h4.state = h4.__s;
      } while (h4.__d && ++I2 < 25);
      h4.state = h4.__s, null != h4.getChildContext && (i6 = d(d({}, i6), h4.getChildContext())), x3 && !p4 && null != h4.getSnapshotBeforeUpdate && (_2 = h4.getSnapshotBeforeUpdate(v4, w4)), S(n2, y(L2 = null != a4 && a4.type === k && null == a4.key ? a4.props.children : a4) ? L2 : [L2], u5, t3, i6, o4, r3, f5, e3, c4, s4), h4.base = u5.__e, u5.__u &= -161, h4.__h.length && f5.push(h4), g2 && (h4.__E = h4.__ = null);
    } catch (n3) {
      if (u5.__v = null, c4 || null != r3) {
        for (u5.__u |= c4 ? 160 : 32; e3 && 8 === e3.nodeType && e3.nextSibling; ) e3 = e3.nextSibling;
        r3[r3.indexOf(e3)] = null, u5.__e = e3;
      } else u5.__e = t3.__e, u5.__k = t3.__k;
      l.__e(n3, u5, t3);
    }
    else null == r3 && u5.__v === t3.__v ? (u5.__k = t3.__k, u5.__e = t3.__e) : u5.__e = z(t3.__e, u5, t3, i6, o4, r3, f5, c4, s4);
    (a4 = l.diffed) && a4(u5);
  }
  function j(n2, u5, t3) {
    u5.__d = void 0;
    for (var i6 = 0; i6 < t3.length; i6++) N(t3[i6], t3[++i6], t3[++i6]);
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
  function z(l4, u5, t3, i6, o4, r3, f5, e3, c4) {
    var s4, a4, p4, v4, d4, _2, g2, m3 = t3.props, k3 = u5.props, b3 = u5.type;
    if ("svg" === b3 ? o4 = "http://www.w3.org/2000/svg" : "math" === b3 ? o4 = "http://www.w3.org/1998/Math/MathML" : o4 || (o4 = "http://www.w3.org/1999/xhtml"), null != r3) {
      for (s4 = 0; s4 < r3.length; s4++) if ((d4 = r3[s4]) && "setAttribute" in d4 == !!b3 && (b3 ? d4.localName === b3 : 3 === d4.nodeType)) {
        l4 = d4, r3[s4] = null;
        break;
      }
    }
    if (null == l4) {
      if (null === b3) return document.createTextNode(k3);
      l4 = document.createElementNS(o4, b3, k3.is && k3), r3 = null, e3 = false;
    }
    if (null === b3) m3 === k3 || e3 && l4.data === k3 || (l4.data = k3);
    else {
      if (r3 = r3 && n.call(l4.childNodes), m3 = t3.props || h, !e3 && null != r3) for (m3 = {}, s4 = 0; s4 < l4.attributes.length; s4++) m3[(d4 = l4.attributes[s4]).name] = d4.value;
      for (s4 in m3) if (d4 = m3[s4], "children" == s4) ;
      else if ("dangerouslySetInnerHTML" == s4) p4 = d4;
      else if ("key" !== s4 && !(s4 in k3)) {
        if ("value" == s4 && "defaultValue" in k3 || "checked" == s4 && "defaultChecked" in k3) continue;
        A(l4, s4, null, d4, o4);
      }
      for (s4 in k3) d4 = k3[s4], "children" == s4 ? v4 = d4 : "dangerouslySetInnerHTML" == s4 ? a4 = d4 : "value" == s4 ? _2 = d4 : "checked" == s4 ? g2 = d4 : "key" === s4 || e3 && "function" != typeof d4 || m3[s4] === d4 || A(l4, s4, d4, m3[s4], o4);
      if (a4) e3 || p4 && (a4.__html === p4.__html || a4.__html === l4.innerHTML) || (l4.innerHTML = a4.__html), u5.__k = [];
      else if (p4 && (l4.innerHTML = ""), S(l4, y(v4) ? v4 : [v4], u5, t3, i6, "foreignObject" === b3 ? "http://www.w3.org/1999/xhtml" : o4, r3, f5, r3 ? r3[0] : t3.__k && x(t3, 0), e3, c4), null != r3) for (s4 = r3.length; s4--; ) null != r3[s4] && w(r3[s4]);
      e3 || (s4 = "value", void 0 !== _2 && (_2 !== l4[s4] || "progress" === b3 && !_2 || "option" === b3 && _2 !== m3[s4]) && A(l4, s4, _2, m3[s4], o4), s4 = "checked", void 0 !== g2 && g2 !== l4[s4] && A(l4, s4, g2, m3[s4], o4));
    }
    return l4;
  }
  function N(n2, u5, t3) {
    try {
      if ("function" == typeof n2) {
        var i6 = "function" == typeof n2.__u;
        i6 && n2.__u(), i6 && null == u5 || (n2.__u = n2(u5));
      } else n2.current = u5;
    } catch (n3) {
      l.__e(n3, t3);
    }
  }
  function V(n2, u5, t3) {
    var i6, o4;
    if (l.unmount && l.unmount(n2), (i6 = n2.ref) && (i6.current && i6.current !== n2.__e || N(i6, null, u5)), null != (i6 = n2.__c)) {
      if (i6.componentWillUnmount) try {
        i6.componentWillUnmount();
      } catch (n3) {
        l.__e(n3, u5);
      }
      i6.base = i6.__P = null;
    }
    if (i6 = n2.__k) for (o4 = 0; o4 < i6.length; o4++) i6[o4] && V(i6[o4], u5, t3 || "function" != typeof n2.type);
    t3 || null == n2.__e || w(n2.__e), n2.__c = n2.__ = n2.__e = n2.__d = void 0;
  }
  function q(n2, l4, u5) {
    return this.constructor(n2, u5);
  }
  function B(u5, t3, i6) {
    var o4, r3, f5, e3;
    l.__ && l.__(u5, t3), r3 = (o4 = "function" == typeof i6) ? null : i6 && i6.__k || t3.__k, f5 = [], e3 = [], O(t3, u5 = (!o4 && i6 || t3).__k = _(k, null, [u5]), r3 || h, h, t3.namespaceURI, !o4 && i6 ? [i6] : r3 ? null : t3.firstChild ? n.call(t3.childNodes) : null, f5, !o4 && i6 ? i6 : r3 ? r3.__e : t3.firstChild, o4, e3), j(f5, u5, e3);
  }
  function G(n2, l4) {
    var u5 = { __c: l4 = "__cC" + a++, __: n2, Consumer: function(n3, l5) {
      return n3.children(l5);
    }, Provider: function(n3) {
      var u6, t3;
      return this.getChildContext || (u6 = [], (t3 = {})[l4] = this, this.getChildContext = function() {
        return t3;
      }, this.componentWillUnmount = function() {
        u6 = null;
      }, this.shouldComponentUpdate = function(n4) {
        this.props.value !== n4.value && u6.some(function(n5) {
          n5.__e = true, M(n5);
        });
      }, this.sub = function(n4) {
        u6.push(n4);
        var l5 = n4.componentWillUnmount;
        n4.componentWillUnmount = function() {
          u6 && u6.splice(u6.indexOf(n4), 1), l5 && l5.call(n4);
        };
      }), n3.children;
    } };
    return u5.Provider.__ = u5.Consumer.contextType = u5;
  }
  n = p.slice, l = { __e: function(n2, l4, u5, t3) {
    for (var i6, o4, r3; l4 = l4.__; ) if ((i6 = l4.__c) && !i6.__) try {
      if ((o4 = i6.constructor) && null != o4.getDerivedStateFromError && (i6.setState(o4.getDerivedStateFromError(n2)), r3 = i6.__d), null != i6.componentDidCatch && (i6.componentDidCatch(n2, t3 || {}), r3 = i6.__d), r3) return i6.__E = i6;
    } catch (l5) {
      n2 = l5;
    }
    throw n2;
  } }, u = 0, t = function(n2) {
    return null != n2 && null == n2.constructor;
  }, b.prototype.setState = function(n2, l4) {
    var u5;
    u5 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = d({}, this.state), "function" == typeof n2 && (n2 = n2(d({}, u5), this.props)), n2 && d(u5, n2), null != n2 && this.__v && (l4 && this._sb.push(l4), M(this));
  }, b.prototype.forceUpdate = function(n2) {
    this.__v && (this.__e = true, n2 && this.__h.push(n2), M(this));
  }, b.prototype.render = k, i = [], r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f = function(n2, l4) {
    return n2.__v.__b - l4.__v.__b;
  }, P.__r = 0, e = 0, c = F(false), s = F(true), a = 0;

  // node_modules/preact/devtools/dist/devtools.module.js
  var i2;
  null != (i2 = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0) && i2.__PREACT_DEVTOOLS__ && i2.__PREACT_DEVTOOLS__.attachPreact("10.23.2", l, { Fragment: k, Component: b });

  // node_modules/preact/debug/dist/debug.module.js
  var o2 = {};
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
    for (var e3 = [n2], t3 = n2; null != t3.__o; ) e3.push(t3.__o), t3 = t3.__o;
    return e3.reduce(function(n3, e4) {
      n3 += "  in " + a2(e4);
      var t4 = e4.__source;
      return t4 ? n3 += " (at " + t4.fileName + ":" + t4.lineNumber + ")" : l2 && console.warn("Add @babel/plugin-transform-react-jsx-source to get a more detailed component stack. Note that you should not add it to production builds of your App for bundle size reasons."), l2 = false, n3 + "\n";
    }, "");
  }
  var p2 = "function" == typeof WeakMap;
  function d2(n2) {
    var e3 = [];
    return n2.__k ? (n2.__k.forEach(function(n3) {
      n3 && "function" == typeof n3.type ? e3.push.apply(e3, d2(n3)) : n3 && "string" == typeof n3.type && e3.push(n3.type);
    }), e3) : e3;
  }
  function h2(n2) {
    return n2 ? "function" == typeof n2.type ? null == n2.__ ? null != n2.__e && null != n2.__e.parentNode ? n2.__e.parentNode.localName : "" : h2(n2.__) : n2.type : "";
  }
  var v2 = b.prototype.setState;
  function y2(n2) {
    return "table" === n2 || "tfoot" === n2 || "tbody" === n2 || "thead" === n2 || "td" === n2 || "tr" === n2 || "th" === n2;
  }
  b.prototype.setState = function(n2, e3) {
    return null == this.__v && null == this.state && console.warn('Calling "this.setState" inside the constructor of a component is a no-op and might be a bug in your application. Instead, set "this.state = {}" directly.\n\n' + f2(c2())), v2.call(this, n2, e3);
  };
  var m = /^(address|article|aside|blockquote|details|div|dl|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hgroup|hr|main|menu|nav|ol|p|pre|search|section|table|ul)$/;
  var b2 = b.prototype.forceUpdate;
  function w2(n2) {
    var e3 = n2.props, t3 = a2(n2), o4 = "";
    for (var r3 in e3) if (e3.hasOwnProperty(r3) && "children" !== r3) {
      var i6 = e3[r3];
      "function" == typeof i6 && (i6 = "function " + (i6.displayName || i6.name) + "() {}"), i6 = Object(i6) !== i6 || i6.toString ? i6 + "" : Object.prototype.toString.call(i6), o4 += " " + r3 + "=" + JSON.stringify(i6);
    }
    var s4 = e3.children;
    return "<" + t3 + o4 + (s4 && s4.length ? ">..</" + t3 + ">" : " />");
  }
  b.prototype.forceUpdate = function(n2) {
    return null == this.__v ? console.warn('Calling "this.forceUpdate" inside the constructor of a component is a no-op and might be a bug in your application.\n\n' + f2(c2())) : null == this.__P && console.warn(`Can't call "this.forceUpdate" on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.

` + f2(this.__v)), b2.call(this, n2);
  }, function() {
    !function() {
      var n3 = l.__b, t4 = l.diffed, o4 = l.__, r4 = l.vnode, a4 = l.__r;
      l.diffed = function(n4) {
        u2(n4) && s2.pop(), i3.pop(), t4 && t4(n4);
      }, l.__b = function(e3) {
        u2(e3) && i3.push(e3), n3 && n3(e3);
      }, l.__ = function(n4, e3) {
        s2 = [], o4 && o4(n4, e3);
      }, l.vnode = function(n4) {
        n4.__o = s2.length > 0 ? s2[s2.length - 1] : null, r4 && r4(n4);
      }, l.__r = function(n4) {
        u2(n4) && s2.push(n4), a4 && a4(n4);
      };
    }();
    var n2 = false, t3 = l.__b, r3 = l.diffed, c4 = l.vnode, l4 = l.__r, v4 = l.__e, b3 = l.__, g2 = l.__h, E = p2 ? { useEffect: /* @__PURE__ */ new WeakMap(), useLayoutEffect: /* @__PURE__ */ new WeakMap(), lazyPropTypes: /* @__PURE__ */ new WeakMap() } : null, k3 = [];
    l.__e = function(n3, e3, t4, o4) {
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
        (o4 = o4 || {}).componentStack = f2(e3), v4(n3, e3, t4, o4), "function" != typeof n3.then && setTimeout(function() {
          throw n3;
        });
      } catch (n4) {
        throw n4;
      }
    }, l.__ = function(n3, e3) {
      if (!e3) throw new Error("Undefined parent passed to render(), this is the second argument.\nCheck if the element is available in the DOM/has the correct id.");
      var t4;
      switch (e3.nodeType) {
        case 1:
        case 11:
        case 9:
          t4 = true;
          break;
        default:
          t4 = false;
      }
      if (!t4) {
        var o4 = a2(n3);
        throw new Error("Expected a valid HTML node as a second argument to render.	Received " + e3 + " instead: render(<" + o4 + " />, " + e3 + ");");
      }
      b3 && b3(n3, e3);
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
          for (var t4 in e4) n3[t4] = e4[t4];
          return n3;
        }({}, l5)).ref, function(n3, e4, t4, r5, a4) {
          Object.keys(n3).forEach(function(t5) {
            var i7;
            try {
              i7 = n3[t5](e4, t5, r5, "prop", null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (n4) {
              i7 = n4;
            }
            i7 && !(i7.message in o2) && (o2[i7.message] = true, console.error("Failed prop type: " + i7.message + (a4 && "\n" + a4() || "")));
          });
        }(e3.type.propTypes, l5, 0, a2(e3), function() {
          return f2(e3);
        });
      }
      t3 && t3(e3);
    };
    var _2, T3 = 0;
    l.__r = function(e3) {
      l4 && l4(e3), n2 = true;
      var t4 = e3.__c;
      if (t4 === _2 ? T3++ : T3 = 1, T3 >= 25) throw new Error("Too many re-renders. This is limited to prevent an infinite loop which may lock up your browser. The component causing this is: " + a2(e3));
      _2 = t4;
    }, l.__h = function(e3, t4, o4) {
      if (!e3 || !n2) throw new Error("Hook can only be invoked from render methods.");
      g2 && g2(e3, t4, o4);
    };
    var I2 = function(n3, e3) {
      return { get: function() {
        var t4 = "get" + n3 + e3;
        k3 && k3.indexOf(t4) < 0 && (k3.push(t4), console.warn("getting vnode." + n3 + " is deprecated, " + e3));
      }, set: function() {
        var t4 = "set" + n3 + e3;
        k3 && k3.indexOf(t4) < 0 && (k3.push(t4), console.warn("setting vnode." + n3 + " is not allowed, " + e3));
      } };
    }, j3 = { nodeName: I2("nodeName", "use vnode.type"), attributes: I2("attributes", "use vnode.props"), children: I2("children", "use vnode.props.children") }, O2 = Object.create({}, j3);
    l.vnode = function(n3) {
      var e3 = n3.props;
      if (null !== n3.type && null != e3 && ("__source" in e3 || "__self" in e3)) {
        var t4 = n3.props = {};
        for (var o4 in e3) {
          var r4 = e3[o4];
          "__source" === o4 ? n3.__source = r4 : "__self" === o4 ? n3.__self = r4 : t4[o4] = r4;
        }
      }
      n3.__proto__ = O2, c4 && c4(n3);
    }, l.diffed = function(e3) {
      var t4, o4 = e3.type, i6 = e3.__;
      if (e3.__k && e3.__k.forEach(function(n3) {
        if ("object" == typeof n3 && n3 && void 0 === n3.type) {
          var t5 = Object.keys(n3).join(",");
          throw new Error("Objects are not valid as a child. Encountered an object with the keys {" + t5 + "}.\n\n" + f2(e3));
        }
      }), e3.__c === _2 && (T3 = 0), "string" == typeof o4 && (y2(o4) || "p" === o4 || "a" === o4 || "button" === o4)) {
        var s4 = h2(i6);
        if ("" !== s4 && y2(o4)) "table" === o4 && "td" !== s4 && y2(s4) ? (console.log(s4, i6.__e), console.error("Improper nesting of table. Your <table> should not have a table-node parent." + w2(e3) + "\n\n" + f2(e3))) : "thead" !== o4 && "tfoot" !== o4 && "tbody" !== o4 || "table" === s4 ? "tr" === o4 && "thead" !== s4 && "tfoot" !== s4 && "tbody" !== s4 ? console.error("Improper nesting of table. Your <tr> should have a <thead/tbody/tfoot> parent." + w2(e3) + "\n\n" + f2(e3)) : "td" === o4 && "tr" !== s4 ? console.error("Improper nesting of table. Your <td> should have a <tr> parent." + w2(e3) + "\n\n" + f2(e3)) : "th" === o4 && "tr" !== s4 && console.error("Improper nesting of table. Your <th> should have a <tr>." + w2(e3) + "\n\n" + f2(e3)) : console.error("Improper nesting of table. Your <thead/tbody/tfoot> should have a <table> parent." + w2(e3) + "\n\n" + f2(e3));
        else if ("p" === o4) {
          var c5 = d2(e3).filter(function(n3) {
            return m.test(n3);
          });
          c5.length && console.error("Improper nesting of paragraph. Your <p> should not have " + c5.join(", ") + "as child-elements." + w2(e3) + "\n\n" + f2(e3));
        } else "a" !== o4 && "button" !== o4 || -1 !== d2(e3).indexOf(o4) && console.error("Improper nesting of interactive content. Your <" + o4 + "> should not have other " + ("a" === o4 ? "anchor" : "button") + " tags as child-elements." + w2(e3) + "\n\n" + f2(e3));
      }
      if (n2 = false, r3 && r3(e3), null != e3.__k) for (var l5 = [], u5 = 0; u5 < e3.__k.length; u5++) {
        var p4 = e3.__k[u5];
        if (p4 && null != p4.key) {
          var v5 = p4.key;
          if (-1 !== l5.indexOf(v5)) {
            console.error('Following component has two or more children with the same key attribute: "' + v5 + '". This may cause glitches and misbehavior in rendering process. Component: \n\n' + w2(e3) + "\n\n" + f2(e3));
            break;
          }
          l5.push(v5);
        }
      }
      if (null != e3.__c && null != e3.__c.__H) {
        var b4 = e3.__c.__H.__;
        if (b4) for (var g3 = 0; g3 < b4.length; g3 += 1) {
          var E2 = b4[g3];
          if (E2.__H) {
            for (var k4 = 0; k4 < E2.__H.length; k4++) if ((t4 = E2.__H[k4]) != t4) {
              var I3 = a2(e3);
              throw new Error("Invalid argument passed to hook. Hooks should not be called with NaN in the dependency array. Hook index " + g3 + " in component " + I3 + " was called with NaN.");
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

  // packages/frontend/src/auxiliar/dom.ts
  var doc = typeof document === "undefined" ? void 0 : document;
  var $2 = doc?.querySelector.bind(doc);
  var $$ = doc?.querySelectorAll.bind(doc);
  var elem = (key) => $2(`#${cssID(key)}`) ?? void 0;
  var elems = (key) => $$(`.${cssClass(key)}`);
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

  // packages/plangs/src/util.ts
  function getStrDateYear(strDate) {
    if (!strDate) return void 0;
    try {
      const year = Number.parseInt(strDate?.slice(0, 4));
      if (year >= 1900 && year <= 2100) return year;
    } catch (e3) {
      return void 0;
    }
  }

  // packages/frontend/src/auxiliar/utils.ts
  function debounce(callback, millies) {
    let timeout;
    return (...args) => {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => callback(...args), millies);
    };
  }
  var tap = (item, action) => action(item);
  function isEmpty(obj) {
    for (const prop in obj) {
      if (Object.hasOwn(obj, prop)) return false;
    }
    return true;
  }

  // packages/frontend/src/auxiliar/fragment.ts
  var win = typeof window === "undefined" ? void 0 : window;
  function getFragment(fragmentOrURL = win.location) {
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
        const data = fragment.slice(fragment.indexOf("#") + 1).trim();
        if (data.length > 2 && data.startsWith("(") && data.endsWith(")")) return RISON.parse(data);
      } catch (e3) {
        console.warn("Failed to parse RISON:", fragment, e3);
      }
    }
    // biome-ignore lint/suspicious/noExplicitAny: RISON.stringify can serialize any data.
    static serialize(data) {
      try {
        if (isEmpty(data)) return void 0;
        return RISON.stringify(data);
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

  // packages/frontend/src/auxiliar/styles.ts
  var BAR = "bg-linear-to-b from-secondary to-background";
  var BORDER = "border-primary/85 border-dotted";
  var HOVER = "hover:bg-hiliteb hover:text-hilitef cursor-pointer";
  var HOVER_SVG = "hover:stroke-1 hover:stroke-hiliteb";
  var HOVER_SVG_GROUP = "group-hover:stroke-1 group-hover:stroke-hiliteb";
  var INPUT = "bg-background text-foreground placeholder:text-foreground/50";
  function tw(...classes) {
    return classes.flat(5).filter((s4) => typeof s4 === "string" && !/^;|;$/.test(s4)).join(" ");
  }
  function classesExcept(elem2, ...cssClasses) {
    return [...new Set(elem2.classList).difference(new Set(cssClasses))].join(" ");
  }

  // node_modules/preact/hooks/dist/hooks.module.js
  var t2;
  var r2;
  var u3;
  var i4;
  var o3 = 0;
  var f3 = [];
  var c3 = l;
  var e2 = c3.__b;
  var a3 = c3.__r;
  var v3 = c3.diffed;
  var l3 = c3.__c;
  var m2 = c3.unmount;
  var s3 = c3.__;
  function d3(n2, t3) {
    c3.__h && c3.__h(r2, n2, o3 || t3), o3 = 0;
    var u5 = r2.__H || (r2.__H = { __: [], __h: [] });
    return n2 >= u5.__.length && u5.__.push({}), u5.__[n2];
  }
  function h3(n2) {
    return o3 = 1, p3(D, n2);
  }
  function p3(n2, u5, i6) {
    var o4 = d3(t2++, 2);
    if (o4.t = n2, !o4.__c && (o4.__ = [i6 ? i6(u5) : D(void 0, u5), function(n3) {
      var t3 = o4.__N ? o4.__N[0] : o4.__[0], r3 = o4.t(t3, n3);
      t3 !== r3 && (o4.__N = [r3, o4.__[1]], o4.__c.setState({}));
    }], o4.__c = r2, !r2.u)) {
      var f5 = function(n3, t3, r3) {
        if (!o4.__c.__H) return true;
        var u6 = o4.__c.__H.__.filter(function(n4) {
          return !!n4.__c;
        });
        if (u6.every(function(n4) {
          return !n4.__N;
        })) return !c4 || c4.call(this, n3, t3, r3);
        var i7 = false;
        return u6.forEach(function(n4) {
          if (n4.__N) {
            var t4 = n4.__[0];
            n4.__ = n4.__N, n4.__N = void 0, t4 !== n4.__[0] && (i7 = true);
          }
        }), !(!i7 && o4.__c.props === n3) && (!c4 || c4.call(this, n3, t3, r3));
      };
      r2.u = true;
      var c4 = r2.shouldComponentUpdate, e3 = r2.componentWillUpdate;
      r2.componentWillUpdate = function(n3, t3, r3) {
        if (this.__e) {
          var u6 = c4;
          c4 = void 0, f5(n3, t3, r3), c4 = u6;
        }
        e3 && e3.call(this, n3, t3, r3);
      }, r2.shouldComponentUpdate = f5;
    }
    return o4.__N || o4.__;
  }
  function y3(n2, u5) {
    var i6 = d3(t2++, 3);
    !c3.__s && C2(i6.__H, u5) && (i6.__ = n2, i6.i = u5, r2.__H.__h.push(i6));
  }
  function A2(n2) {
    return o3 = 5, T2(function() {
      return { current: n2 };
    }, []);
  }
  function T2(n2, r3) {
    var u5 = d3(t2++, 7);
    return C2(u5.__H, r3) && (u5.__ = n2(), u5.__H = r3, u5.__h = n2), u5.__;
  }
  function x2(n2) {
    var u5 = r2.context[n2.__c], i6 = d3(t2++, 9);
    return i6.c = n2, u5 ? (null == i6.__ && (i6.__ = true, u5.sub(r2)), u5.props.value) : n2.__;
  }
  function j2() {
    for (var n2; n2 = f3.shift(); ) if (n2.__P && n2.__H) try {
      n2.__H.__h.forEach(z2), n2.__H.__h.forEach(B2), n2.__H.__h = [];
    } catch (t3) {
      n2.__H.__h = [], c3.__e(t3, n2.__v);
    }
  }
  c3.__b = function(n2) {
    r2 = null, e2 && e2(n2);
  }, c3.__ = function(n2, t3) {
    n2 && t3.__k && t3.__k.__m && (n2.__m = t3.__k.__m), s3 && s3(n2, t3);
  }, c3.__r = function(n2) {
    a3 && a3(n2), t2 = 0;
    var i6 = (r2 = n2.__c).__H;
    i6 && (u3 === r2 ? (i6.__h = [], r2.__h = [], i6.__.forEach(function(n3) {
      n3.__N && (n3.__ = n3.__N), n3.i = n3.__N = void 0;
    })) : (i6.__h.forEach(z2), i6.__h.forEach(B2), i6.__h = [], t2 = 0)), u3 = r2;
  }, c3.diffed = function(n2) {
    v3 && v3(n2);
    var t3 = n2.__c;
    t3 && t3.__H && (t3.__H.__h.length && (1 !== f3.push(t3) && i4 === c3.requestAnimationFrame || ((i4 = c3.requestAnimationFrame) || w3)(j2)), t3.__H.__.forEach(function(n3) {
      n3.i && (n3.__H = n3.i), n3.i = void 0;
    })), u3 = r2 = null;
  }, c3.__c = function(n2, t3) {
    t3.some(function(n3) {
      try {
        n3.__h.forEach(z2), n3.__h = n3.__h.filter(function(n4) {
          return !n4.__ || B2(n4);
        });
      } catch (r3) {
        t3.some(function(n4) {
          n4.__h && (n4.__h = []);
        }), t3 = [], c3.__e(r3, n3.__v);
      }
    }), l3 && l3(n2, t3);
  }, c3.unmount = function(n2) {
    m2 && m2(n2);
    var t3, r3 = n2.__c;
    r3 && r3.__H && (r3.__H.__.forEach(function(n3) {
      try {
        z2(n3);
      } catch (n4) {
        t3 = n4;
      }
    }), r3.__H = void 0, t3 && c3.__e(t3, r3.__v));
  };
  var k2 = "function" == typeof requestAnimationFrame;
  function w3(n2) {
    var t3, r3 = function() {
      clearTimeout(u5), k2 && cancelAnimationFrame(t3), setTimeout(n2);
    }, u5 = setTimeout(r3, 100);
    k2 && (t3 = requestAnimationFrame(r3));
  }
  function z2(n2) {
    var t3 = r2, u5 = n2.__c;
    "function" == typeof u5 && (n2.__c = void 0, u5()), r2 = t3;
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
  function D(n2, t3) {
    return "function" == typeof t3 ? t3(n2) : t3;
  }

  // packages/frontend/src/auxiliar/dispatchable.ts
  var Dispatchable = class {
    constructor(data) {
      this.data = data;
    }
    dispatcher;
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
  function u4(e3, t3, n2, o4, i6, u5) {
    t3 || (t3 = {});
    var a4, c4, p4 = t3;
    if ("ref" in p4) for (c4 in p4 = {}, t3) "ref" == c4 ? a4 = t3[c4] : p4[c4] = t3[c4];
    var l4 = { type: e3, props: p4, key: n2, ref: a4, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --f4, __i: -1, __u: 0, __source: i6, __self: u5 };
    if ("function" == typeof e3 && (a4 = e3.defaultProps)) for (c4 in a4) void 0 === p4[c4] && (p4[c4] = a4[c4]);
    return l.vnode && l.vnode(l4), l4;
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
  var FULLCIRCLE = /* @__PURE__ */ u4("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", class: css, children: [
    /* @__PURE__ */ u4("title", { children: "Circle" }),
    /* @__PURE__ */ u4("circle", { class: "fill", cx: "9", cy: "9", r: "8" })
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
    /** Returns an iterator of the keys in the first dimension. */
    keys() {
      return this.#map.keys().filter((k1) => (this.#map.get(k1)?.size ?? 0) > 0);
    }
    entries() {
      return [...this.#map.entries()].filter(([_k1, map2]) => map2.size > 0);
    }
    *flatEntries() {
      for (const [k1, map2] of this.#map) {
        for (const [k22, v4] of map2) yield [k1, k22, v4];
      }
    }
    values() {
      return [...this.#map.values()].flatMap((map) => [...map.values()]);
    }
    /**
     * NOTE: This will work best if the keys are strings, symbols or numbers.
     * Otherwise JavaScript will convert them to strings, which may not be what you want.
     */
    toObject(mapper) {
      const object = {};
      for (const [k1, k22, v4] of this.flatEntries()) {
        (object[k1] = object[k1] ?? {})[k22] = mapper(v4);
      }
      return object;
    }
    toString() {
      const entries = [...this.flatEntries()].map(([k1, k22, v4]) => `(${k1}, ${k22}) => ${v4}`);
      return `Map2(size: ${this.size})${entries.length > 0 ? ` { ${entries.join(", ")} }` : ""}`;
    }
  };

  // packages/auxiliar/src/filters.ts
  var Filter = class _Filter {
    constructor(mode = "any", values = /* @__PURE__ */ new Set()) {
      this.mode = mode;
      this.values = values;
    }
    get isEmpty() {
      return this.values.size === 0;
    }
    add(value) {
      this.values.add(value);
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

  // packages/frontend/src/auxiliar/storage.ts
  var storageKey = (tab, key) => `${tab}-${key}`;
  function updateLocalStorage(tab, key, data) {
    localStorage.setItem(storageKey(tab, key), JSON.stringify(data));
  }
  function loadLocalStorage(tab, key) {
    const json = localStorage.getItem(storageKey(tab, key));
    if (!json) return void 0;
    try {
      return JSON.parse(json);
    } catch (e3) {
      console.warn("Failed to parse localStorage filters.", json);
      localStorage.removeItem(storageKey(tab, key));
    }
  }

  // packages/frontend/src/components/facets/main/grid.ts
  function doUpdateThumbns(nodeKeys) {
    for (const div of elems("plThumb")) {
      const plKey = div.dataset.nodeKey;
      const visible = nodeKeys.has(plKey);
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

  // packages/frontend/src/components/facets/misc/facet-bool.tsx
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

  // packages/frontend/src/components/facets/misc/facet-group.tsx
  function FacetGroup({
    label: label2,
    groupKey,
    active,
    children
  }) {
    const main = x2(FacetsMainContext);
    const hasValues = main.groupHasValues(groupKey);
    return /* @__PURE__ */ u4("div", { class: tw("flex-1", "flex flex-col", "overflow-hidden", !active && "hidden"), children: [
      /* @__PURE__ */ u4(
        "header",
        {
          class: tw(
            "sticky top-0 z-10",
            "shrink-0",
            "p-2",
            "flex flex-row",
            "items-center justify-between",
            "truncate",
            "text-primary",
            tw(BORDER, "border-b-1"),
            BAR
          ),
          children: [
            /* @__PURE__ */ u4("span", { class: "inline-block", children: label2 }),
            /* @__PURE__ */ u4(
              "span",
              {
                tabIndex: 0,
                class: tw("group", "cursor-pointer", hasValues ? "text-foreground" : "text-foreground/50"),
                ...onClickOnEnter(() => {
                  main.doResetGroup(groupKey);
                }),
                children: /* @__PURE__ */ u4("div", { class: "inline-flex flex-row items-center", children: [
                  /* @__PURE__ */ u4("span", { class: tw(hasValues && "group-hover:text-hiliteb"), children: "Reset" }),
                  /* @__PURE__ */ u4("span", { class: tw(hasValues && HOVER_SVG_GROUP, "scale-50"), children: DESELECT })
                ] })
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ u4("div", { class: tw("flex-1", "flex flex-col", "gap-4", "overflow-y-scroll", "relative"), children })
    ] });
  }

  // packages/frontend/src/components/facets/misc/facet-text.tsx
  function FacetText({
    groupKey,
    facetKey,
    label: label2
  }) {
    const main = x2(FacetsMainContext);
    const onInput = handler((input) => {
      main.doSetValue(groupKey, facetKey, new ValRegExp(new RegExp(`${input.value}`, "i")));
    });
    return /* @__PURE__ */ u4(
      "input",
      {
        type: "search",
        onInput,
        placeholder: label2,
        class: tw("w-full", INPUT),
        value: main.values.get(groupKey, facetKey)?.value?.source ?? ""
      }
    );
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
      const { disabled, ...data } = this.data;
      return data;
    }
  };
  var ToggleLights = class _ToggleLights extends IconButtonBaseState {
    static initial(disabled = false) {
      return new _ToggleLights({ mode: localStorage.getItem("lightMode") === "light" ? "light" : "dark", disabled });
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
      localStorage.setItem("lightMode", this.data.mode);
    }
  };
  var ToggleHamburguer = class _ToggleHamburguer extends IconButtonBaseState {
    static initial(disabled = false) {
      return new _ToggleHamburguer({ mode: localStorage.getItem("hamburguer") === "show" ? "show" : "hide", disabled });
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
      localStorage.setItem("hamburguer", this.data.mode);
    }
  };
  var ToggleFacetsMenu = class _ToggleFacetsMenu extends IconButtonBaseState {
    static initial(disabled = false) {
      return new _ToggleFacetsMenu({ mode: localStorage.getItem("facets") === "show" ? "show" : "hide", disabled });
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
      localStorage.setItem("facets", this.data.mode);
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
      const grid = elem("nodeGrid");
      if (!grid) return;
      const thumbns = [...elems("plThumb")].sort(CMP[this.mode]);
      for (const thumb of thumbns) {
        grid.appendChild(thumb);
      }
    }
  };
  var RANKED_LAST = Number.MAX_SAFE_INTEGER;
  var getRank = (el) => el.dataset.nodeRanking ? Number.parseInt(el.dataset.nodeRanking, 10) : RANKED_LAST;
  var getKey = (el) => el.dataset.nodeKey ?? "";
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

  // packages/frontend/src/components/facets/multisel/state.ts
  var FacetMultiState = class extends Dispatchable {
    /** Actions */
    doSetValue(val) {
      const { main, data } = this;
      return main.doSetValue(data.groupKey, data.facetKey, val);
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

  // packages/frontend/src/components/facets/multisel/facet-multi.tsx
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
    const remover = (idx) => handler((b3, ev) => {
      ev.stopPropagation();
      if (state.doRemove(b3.dataset.value)) {
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

  // packages/frontend/src/components/facets/table/entries.ts
  function generateEntries(pg, config) {
    if (config.kind === "noderel") {
      const { node, edge, dir } = config;
      const emap = dir === "direct" ? pg.edges[edge].adjTo : pg.edges[edge].adjFrom;
      if (!emap) {
        console.error("No edges found for:", edge, dir);
        return [];
      }
      return [...emap.entries()].filter(([, edges]) => edges.size > 0).map(([key, edges]) => {
        const anyEdge = edges.values().next().value;
        const name = (dir === "direct" ? anyEdge.nodeTo : anyEdge.nodeFrom)?.name ?? anyEdge.key;
        return { value: key, label: name, count: edges.size };
      });
    }
    if (config.kind === "year") {
      const years = /* @__PURE__ */ new Map();
      for (const { year } of pg.nodes.pl.values) {
        if (!year) continue;
        years.set(year, (years.get(year) ?? 0) + 1);
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
    if (col === "facet" && config.kind === "noderel") return config.node;
    if (col === "facet" && config.kind === "year") return `${config.node} year`;
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
    "facet-asc": (a4, b3) => a4.label.localeCompare(b3.label),
    "facet-desc": (a4, b3) => b3.label.localeCompare(a4.label),
    "count-asc": (a4, b3) => a4.count - b3.count,
    "count-desc": (a4, b3) => b3.count - a4.count,
    "sel-asc": (a4, b3, isSel) => isSel ? Number(isSel(a4)) - Number(isSel(b3)) : 0,
    "sel-desc": (a4, b3, isSel) => isSel ? Number(isSel(b3)) - Number(isSel(a4)) : 0
  };
  function sortEntries(entries, order, isSel) {
    const less = CMP2[order];
    return entries.sort((a4, b3) => less(a4, b3, isSel));
  }

  // packages/frontend/src/components/facets/table/header.tsx
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

  // packages/frontend/src/components/facets/table/state.ts
  var FacetTableState = class extends Dispatchable {
    /** Actions */
    doSetValue(val) {
      const { main, data } = this;
      return main.doSetValue(data.groupKey, data.facetKey, val);
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

  // packages/frontend/src/components/facets/table/facet-table.tsx
  function FacetTable({
    groupKey,
    facetKey,
    config,
    active
  }) {
    const self = A2();
    const main = x2(FacetsMainContext);
    const state = useDispatchable(() => {
      const order = config.kind === "year" ? "facet-desc" : "facet-asc";
      const entries = sortEntries(generateEntries(main.pg, config), order);
      return new FacetTableState({ config, entries, facetKey, groupKey, main, order });
    });
    y3(
      () => on(self?.current, "icon-button", (ev) => {
        ev.stopPropagation();
        state.doSetMode(ev.detail.mode === "all" ? "all" : "any");
      })
    );
    const SUBGRID = tw("col-span-3", "grid grid-cols-subgrid", "items-center");
    const ROW = tw(SUBGRID, tw("border-b-1", BORDER));
    const CENTER_ROW = tw("items-center justify-between");
    const body = () => /* @__PURE__ */ u4("div", { class: tw("grid grid-cols-[1fr_auto_auto]", "overflow-y-auto", "relative"), children: [
      /* @__PURE__ */ u4("div", { class: tw(ROW, "sticky top-0 cursor-pointer", tw(BORDER, "border-b-1")), children: [
        /* @__PURE__ */ u4("div", { class: tw("col-span-3", "py-1", "flex shrink-0 flex-row", "bg-background", CENTER_ROW, tw(BORDER, "border-t-1")), children: /* @__PURE__ */ u4("span", { class: tw("pl-2", CENTER_ROW, state.value.size < 2 ? "text-foreground/50" : "text-foreground"), children: /* @__PURE__ */ u4(IconButton, { action: "allAny", disabled: state.value.size < 2, initial: state.value.mode, class: tw(config.kind === "year" && "hidden") }) }) }),
        /* @__PURE__ */ u4("div", { class: tw(ROW, "col-span-3", "bg-primary text-background/80"), children: [
          /* @__PURE__ */ u4(Header, { class: "text-left", action: () => state.doToggleOrder("facet"), col: "facet", config, order: state.order }),
          /* @__PURE__ */ u4(Header, { class: "text-center", action: () => state.doToggleOrder("count"), col: "count", config, order: state.order }),
          /* @__PURE__ */ u4(Header, { class: "text-right", action: () => state.doToggleOrder("sel"), col: "sel", config, order: state.order })
        ] })
      ] }),
      state.entries.map(
        (entry) => tap(
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
    array;
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
    get isEmpty() {
      return this.array ? this.array.length === 0 : true;
    }
    get size() {
      return this.array ? this.array.length : 0;
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

  // packages/auxiliar/src/graph.ts
  var Node = class {
    constructor(graph, key) {
      this.graph = graph;
      this.key = key;
    }
    data = {};
    /** Shallow merge data. */
    merge(data) {
      Object.assign(this.data, data);
      return this;
    }
    /** The key without the node kind prefix. */
    get plainKey() {
      return this.key.replace(/^[a-z]+\+/, "");
    }
    /** The first letter of the key, or "_" if it starts with a non-letter. */
    get keyPrefix() {
      const pk = this.plainKey;
      return /^[a-z]/i.test(pk) ? pk[0].toLowerCase() : "_";
    }
    toString() {
      return this.key;
    }
  };
  var Edge = class {
    constructor(graph, from, to) {
      this.graph = graph;
      this.from = from;
      this.to = to;
    }
    data = {};
    /** Shallow merge data. */
    merge(data) {
      Object.assign(this.data, data);
      return this;
    }
    get key() {
      return `${this.kind}~${this.from}~${this.to}`;
    }
    toString() {
      return `${this.from} -[${this.kind}]-> ${this.to}`;
    }
  };
  var NodeMap = class {
    constructor(factory) {
      this.factory = factory;
    }
    #map = /* @__PURE__ */ new Map();
    get(key) {
      return key ? this.#map.get(key) : void 0;
    }
    get size() {
      return this.#map.size;
    }
    keys() {
      return this.#map.keys();
    }
    set(key, data = {}) {
      let n2 = this.#map.get(key);
      if (n2 === void 0) {
        n2 = this.factory(key);
        this.#map.set(key, n2);
      }
      return n2.merge(data);
    }
    has(key) {
      return this.#map.has(key);
    }
    get values() {
      return new IterTap(this.#map.values());
    }
    *findAll(predicate) {
      for (const node of this.#map.values()) if (predicate(node)) yield node;
    }
    [Symbol.iterator](n2) {
      return this.#map[Symbol.iterator]();
    }
    batch(maxEntries, start2 = 0) {
      return Array.from(this.#map).slice(start2, maxEntries);
    }
    toString() {
      return `NodeMap(size: ${this.size})`;
    }
  };
  var EdgeMap = class {
    constructor(factory) {
      this.factory = factory;
    }
    adjFrom = new Map2();
    adjTo = new Map2();
    connect(from, to) {
      let edge = this.adjFrom.get(from, to);
      if (edge) return edge;
      edge = this.factory(from, to);
      this.adjFrom.set(from, to, edge);
      this.adjTo.set(to, from, edge);
      return edge;
    }
    get(from, to) {
      return this.adjFrom.get(from, to);
    }
    set(from, to, data) {
      return this.connect(from, to).merge(data);
    }
    delete(from, to) {
      const f5 = this.adjFrom.delete(from, to);
      const t3 = this.adjTo.delete(to, from);
      return f5 || t3;
    }
    /** Get all edges. Uses the adjFrom map, but both maps should have the same values. */
    get values() {
      return this.adjFrom.values();
    }
    get size() {
      return this.adjFrom.size;
    }
    toString() {
      return `EdgeMap(size: ${this.size})`;
    }
  };
  var BaseGraph = class {
    get nodeEntries() {
      return Object.entries(this.nodes);
    }
    get edgeEntries() {
      return Object.entries(this.edges);
    }
    get nodeCount() {
      return this.nodeEntries.reduce((acc, [_2, map]) => acc + map.size, 0);
    }
    get edgeCount() {
      return this.edgeEntries.reduce((acc, [_2, map]) => acc + map.adjFrom.size, 0);
    }
    toJSON() {
      const data = { nodes: {}, edges: {} };
      for (const [name, nodeMap] of this.nodeEntries) {
        const m3 = {};
        for (const [key, { data: data2 }] of nodeMap) m3[key] = data2;
        data.nodes[name] = m3;
      }
      for (const [name, edgeMap] of this.edgeEntries) {
        const m3 = {};
        for (const edge of edgeMap.adjFrom.values()) {
          const fromMap = m3[edge.from] ??= {};
          fromMap[edge.to] = edge.data;
        }
        data.edges[name] = m3;
      }
      return data;
    }
    loadJSON(data) {
      for (const [name, nodes] of Object.entries(data.nodes)) {
        const nodeMap = this.nodes[name];
        if (!nodes) console.warn(`Data has no nodes for type "${name}"`);
        if (!nodeMap) console.warn(`Graph has no node map for type "${name}"`);
        if (!nodes || !nodeMap) continue;
        for (const [key, nodeData] of Object.entries(nodes)) {
          nodeMap.set(key).merge(nodeData);
        }
      }
      for (const [name, edges] of Object.entries(data.edges)) {
        const edgeMap = this.edges[name];
        if (!edges) console.warn(`Data has no edges for type "${name}"`);
        if (!edgeMap) console.warn(`Graph has no edge map for type "${name}"`);
        if (!edges || !edgeMap) continue;
        for (const [from, tos] of Object.entries(edges)) {
          for (const [to, edgeData] of Object.entries(tos)) {
            edgeMap.connect(from, to).merge(edgeData);
          }
        }
      }
      return this;
    }
  };

  // packages/auxiliar/src/map_tap.ts
  var MapTap = class {
    constructor(map) {
      this.map = map;
    }
    get size() {
      return this.map ? this.map.size : 0;
    }
    has(val) {
      return this.map ? this.map.has(val) : false;
    }
    tap(callback) {
      if (this.map && this.map.size > 0) return callback(this);
    }
    get keys() {
      return new IterTap(this.map?.keys());
    }
    get values() {
      return new IterTap(this.map?.values());
    }
    get entries() {
      return new IterTap(this.map?.entries());
    }
    [Symbol.iterator]() {
      return (this.map ?? /* @__PURE__ */ new Map())[Symbol.iterator]();
    }
  };

  // packages/plangs/src/facets/plangs.ts
  var PLANG_FACET_PREDICATES = {
    compilesTo: ({ relCompilesTo }, flt) => flt.matches((key) => relCompilesTo.has(key)),
    createdRecently: (pl, year) => pl.createdRecently(year.value),
    creationYear: (pl, flt) => flt.matches((year) => pl.year === year),
    dialectOf: ({ relDialectOf }, flt) => flt.matches((key) => relDialectOf.has(key)),
    extensions: ({ extensions }, flt) => flt.matches((key) => extensions.includes(key)),
    isPopular: (pl, val) => val.value === pl.isPopular,
    hasLogo: (pl, val) => val.value === pl.images.some((img) => img.kind === "logo"),
    hasWikipedia: (pl, val) => val.value === !!pl.data.extWikipediaPath,
    implements: ({ relImplements }, flt) => flt.matches((key) => relImplements.has(key)),
    influenced: ({ relInfluenced }, flt) => flt.matches((key) => relInfluenced.has(key)),
    influencedBy: ({ relInfluencedBy }, flt) => flt.matches((key) => relInfluencedBy.has(key)),
    isTranspiler: (pl, val) => val.value === pl.isTranspiler,
    licenses: ({ relLicenses }, flt) => flt.matches((key) => relLicenses.has(key)),
    paradigms: ({ relParadigms }, flt) => flt.matches((key) => relParadigms.has(key)),
    plangName: (pl, regexp) => regexp.value.test(pl.name),
    platforms: ({ relPlatforms }, flt) => flt.matches((key) => relPlatforms.has(key)),
    releasedRecently: (pl, year) => pl.releasedRecently(year.value),
    tags: ({ relTags }, flt) => flt.matches((key) => relTags.has(key)),
    typeSystems: ({ relTsys }, flt) => flt.matches((key) => relTsys.has(key)),
    writtenIn: ({ relWrittenIn }, flt) => flt.matches((key) => relWrittenIn.has(key))
  };
  function plangMatches(pl, values) {
    for (const [key, value] of values) {
      const pred = PLANG_FACET_PREDICATES[key];
      if (!pred) console.error(`No predicate found for key: ${key}`);
      if (pred && value.isPresent && !pred(pl, value)) return false;
    }
    return true;
  }

  // packages/plangs/src/index.ts
  var PlangsGraph = class extends BaseGraph {
    #nodeMap = (ctor) => new NodeMap((key) => new ctor(this, key));
    #edgeMap = (ctor) => new EdgeMap((from, to) => new ctor(this, from, to));
    nodes = {
      app: this.#nodeMap(NApp),
      post: this.#nodeMap(NPost),
      bundle: this.#nodeMap(NBundle),
      lib: this.#nodeMap(NLibrary),
      license: this.#nodeMap(NLicense),
      paradigm: this.#nodeMap(NParadigm),
      pl: this.#nodeMap(NPlang),
      plat: this.#nodeMap(NPlatform),
      tag: this.#nodeMap(NTag),
      tool: this.#nodeMap(NTool),
      tsys: this.#nodeMap(NTsys)
    };
    edges = {
      app: this.#edgeMap(EApp),
      bundle: this.#edgeMap(EBundle),
      compilesTo: this.#edgeMap(ECompilesTo),
      dialect: this.#edgeMap(EDialect),
      impl: this.#edgeMap(EImpl),
      influence: this.#edgeMap(EInfluence),
      lib: this.#edgeMap(ELib),
      license: this.#edgeMap(ELicense),
      paradigm: this.#edgeMap(EParadigm),
      plBundle: this.#edgeMap(EPlBundle),
      plat: this.#edgeMap(EPlat),
      post: this.#edgeMap(EPost),
      tag: this.#edgeMap(ETag),
      tool: this.#edgeMap(ETool),
      tsys: this.#edgeMap(ETsys),
      writtenIn: this.#edgeMap(EWrittenIn)
    };
    /** Find all plangs that match the given filters. */
    plangs(values, limit = -1) {
      const keys = /* @__PURE__ */ new Set();
      for (const pl of this.nodes.pl.values) {
        if (limit >= 0 && keys.size >= limit) break;
        if (plangMatches(pl, values)) keys.add(pl.key);
      }
      return keys;
    }
  };
  var NBase = class extends Node {
    get name() {
      return this.data.name ? this.data.name : this.plainKey;
    }
    get description() {
      return this.data.description || this.name;
    }
    get urlHome() {
      return this.data.extHomeURL;
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
  };
  var NPlang = class _NPlang extends NBase {
    static kind = "pl";
    kind = _NPlang.kind;
    get ranking() {
      return this.data.languishRanking;
    }
    get href() {
      return `/${this.plainKey}`;
    }
    get extensions() {
      return new IterTap(this.data.extensions);
    }
    /** Whether the language is considered popular by Github, or its Languish ranking is <= 25. */
    get isPopular() {
      const { githubPopular, languishRanking } = this.data;
      return !!githubPopular || typeof languishRanking === "number" && languishRanking <= 25;
    }
    get isTranspiler() {
      return this.data.isTranspiler === true;
    }
    get releases() {
      return new IterTap(this.data.releases);
    }
    get lastRelease() {
      const rel = this.releases.sort((r1, r22) => r22.date?.localeCompare(r1.date ?? "") ?? 0);
      if (rel.length === 0) return void 0;
      return rel[0];
    }
    get lastReleaseYear() {
      return getStrDateYear(this.lastRelease?.date);
    }
    get year() {
      return this.data.year;
    }
    get urlRepository() {
      return this.data.extRepositoryURL;
    }
    get urlGithub() {
      return this.data.extGithubPath ? `https://github.com/${this.data.extGithubPath}` : void 0;
    }
    get urlWikipedia() {
      return this.data.extWikipediaPath ? `https://github.com/${this.data.extGithubPath}` : void 0;
    }
    get urlReddit() {
      return this.data.extRedditPath ? `https://reddit.com/${this.data.extRedditPath}` : void 0;
    }
    get urlStackov() {
      return this.stackovTags ? `https://stackoverflow.com/questions/tagged/${this.stackovTags.join("+")}` : void 0;
    }
    get stackovTags() {
      return new IterTap(this.data.stackovTags);
    }
    releasedRecently(minYear) {
      const relYear = this.lastReleaseYear;
      if (!relYear) return false;
      return relYear >= minYear;
    }
    createdRecently(minYear) {
      if (!this.year) return false;
      return this.year >= minYear;
    }
    addApps(others) {
      for (const other of others) this.graph.edges.app.connect(this.key, other);
      return this;
    }
    addBundles(others) {
      for (const other of others) this.graph.edges.plBundle.connect(this.key, other);
      return this;
    }
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
    addCompilesTo(others) {
      if (others.length > 0) this.data.isTranspiler = true;
      for (const other of others) this.graph.edges.compilesTo.connect(this.key, other);
      return this;
    }
    addDialectOf(others) {
      for (const other of others) this.graph.edges.dialect.connect(this.key, other);
      return this;
    }
    addImplements(others) {
      for (const other of others) this.graph.edges.impl.connect(this.key, other);
      return this;
    }
    addInfluencedBy(others) {
      for (const other of others) this.graph.edges.influence.connect(this.key, other);
      return this;
    }
    addLibs(others) {
      for (const other of others) this.graph.edges.lib.connect(this.key, other);
      return this;
    }
    addLicenses(others) {
      for (const other of others) this.graph.edges.license.connect(this.key, other);
      return this;
    }
    addParadigms(others) {
      for (const otherkey of others) this.graph.edges.paradigm.connect(this.key, otherkey);
      return this;
    }
    addPlatforms(others) {
      for (const other of others) this.graph.edges.plat.connect(this.key, other);
      return this;
    }
    addPosts(others) {
      for (const other of others) this.graph.edges.post.connect(this.key, other);
      return this;
    }
    addStackovTags(stackovTags) {
      arrayMerge(this.data.stackovTags ??= [], stackovTags);
      return this;
    }
    addTags(others) {
      for (const other of others) this.graph.edges.tag.connect(this.key, other);
      return this;
    }
    addTools(others) {
      for (const other of others) this.graph.edges.tool.connect(this.key, other);
      return this;
    }
    addTypeSystems(others) {
      for (const other of others) this.graph.edges.tsys.connect(this.key, other);
      return this;
    }
    addWrittenIn(others) {
      for (const other of others) this.graph.edges.writtenIn.connect(this.key, other);
      return this;
    }
    /**
     * Builds (non-recursively) a set of all languages that this language is related to, not including self.
     * A language is related if it is compiled to, is a dialect of, or implements this language.
     */
    family(opt = { compilesTo: true, dialectOf: true, implements: true }) {
      const set = /* @__PURE__ */ new Set([]);
      const addRel = (rel) => {
        for (const pl of rel.values.map((e3) => e3.nodeTo).existing) set.add(pl);
      };
      if (opt.compilesTo) addRel(this.relCompilesTo);
      if (opt.dialectOf) addRel(this.relDialectOf);
      if (opt.implements) addRel(this.relImplements);
      return set;
    }
    get relApps() {
      return new MapTap(this.graph.edges.app.adjFrom.getMap(this.key));
    }
    get relCompilesTo() {
      return new MapTap(this.graph.edges.compilesTo.adjFrom.getMap(this.key));
    }
    get relDialectOf() {
      return new MapTap(this.graph.edges.dialect.adjFrom.getMap(this.key));
    }
    get relImplements() {
      return new MapTap(this.graph.edges.impl.adjFrom.getMap(this.key));
    }
    get relInfluenced() {
      return new MapTap(this.graph.edges.influence.adjTo.getMap(this.key));
    }
    get relInfluencedBy() {
      return new MapTap(this.graph.edges.influence.adjFrom.getMap(this.key));
    }
    get relLibs() {
      return new MapTap(this.graph.edges.lib.adjFrom.getMap(this.key));
    }
    get relLicenses() {
      return new MapTap(this.graph.edges.license.adjFrom.getMap(this.key));
    }
    get relParadigms() {
      return new MapTap(this.graph.edges.paradigm.adjFrom.getMap(this.key));
    }
    get relPlBundles() {
      return new MapTap(this.graph.edges.plBundle.adjFrom.getMap(this.key));
    }
    get relPlatforms() {
      return new MapTap(this.graph.edges.plat.adjFrom.getMap(this.key));
    }
    get relTags() {
      return new MapTap(this.graph.edges.tag.adjFrom.getMap(this.key));
    }
    get relTools() {
      return new MapTap(this.graph.edges.tool.adjFrom.getMap(this.key));
    }
    get relTsys() {
      return new MapTap(this.graph.edges.tsys.adjFrom.getMap(this.key));
    }
    get relWrittenIn() {
      return new MapTap(this.graph.edges.writtenIn.adjFrom.getMap(this.key));
    }
    get relPosts() {
      return new MapTap(this.graph.edges.post.adjFrom.getMap(this.key));
    }
  };
  var NLibrary = class _NLibrary extends NBase {
    static kind = "lib";
    kind = _NLibrary.kind;
    addPls(others) {
      for (const other of others) this.graph.edges.lib.connect(other, this.key);
      return this;
    }
  };
  var NLicense = class _NLicense extends NBase {
    static kind = "license";
    kind = _NLicense.kind;
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
  var NParadigm = class _NParadigm extends NBase {
    static kind = "paradigm";
    kind = _NParadigm.kind;
  };
  var NPlatform = class _NPlatform extends NBase {
    static kind = "plat";
    kind = _NPlatform.kind;
  };
  var NTag = class _NTag extends NBase {
    static kind = "tag";
    kind = _NTag.kind;
  };
  var NTool = class _NTool extends NBase {
    static kind = "tool";
    kind = _NTool.kind;
    addPls(others) {
      for (const other of others) this.graph.edges.tool.connect(other, this.key);
      return this;
    }
  };
  var NTsys = class _NTsys extends NBase {
    static kind = "tsys";
    kind = _NTsys.kind;
  };
  var NApp = class _NApp extends NBase {
    static kind = "app";
    kind = _NApp.kind;
    addPls(others) {
      for (const other of others) this.graph.edges.app.connect(other, this.key);
      return this;
    }
  };
  var NBundle = class _NBundle extends NBase {
    static kind = "bundle";
    kind = _NBundle.kind;
    addTools(others) {
      for (const other of others) this.graph.edges.bundle.connect(this.key, other);
      return this;
    }
    addPls(others) {
      for (const other of others) this.graph.edges.plBundle.connect(other, this.key);
      return this;
    }
    get relTools() {
      return new MapTap(this.graph.edges.bundle.adjFrom.getMap(this.key));
    }
    get relPls() {
      return new MapTap(this.graph.edges.plBundle.adjTo.getMap(this.key));
    }
  };
  var NPost = class _NPost extends NBase {
    static kind = "post";
    kind = _NPost.kind;
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
    get href() {
      return `/blog/${this.plainKey}`;
    }
    addPls(others) {
      for (const other of others) this.graph.edges.post.connect(other, this.key);
      return this;
    }
    get relPls() {
      return new MapTap(this.graph.edges.post.adjTo.getMap(this.key));
    }
  };
  var EBase = class extends Edge {
  };
  var EApp = class extends EBase {
    kind = "app";
    get nodeFrom() {
      return this.graph.nodes.pl.get(this.from);
    }
    get nodeTo() {
      return this.graph.nodes.app.get(this.to);
    }
  };
  var EBundle = class extends EBase {
    kind = "bundle";
    get nodeFrom() {
      return this.graph.nodes.bundle.get(this.from);
    }
    get nodeTo() {
      return this.graph.nodes.tool.get(this.to);
    }
  };
  var ECompilesTo = class extends EBase {
    kind = "compilesTo";
    get nodeFrom() {
      return this.graph.nodes.pl.get(this.from);
    }
    get nodeTo() {
      return this.graph.nodes.pl.get(this.to);
    }
  };
  var EDialect = class extends EBase {
    kind = "dialect";
    get nodeFrom() {
      return this.graph.nodes.pl.get(this.from);
    }
    get nodeTo() {
      return this.graph.nodes.pl.get(this.to);
    }
  };
  var ELicense = class extends EBase {
    kind = "license";
    get nodeFrom() {
      return this.graph.nodes.pl.get(this.from);
    }
    get nodeTo() {
      return this.graph.nodes.license.get(this.to);
    }
  };
  var EImpl = class extends EBase {
    kind = "impl";
    get nodeFrom() {
      return this.graph.nodes.pl.get(this.from);
    }
    get nodeTo() {
      return this.graph.nodes.pl.get(this.to);
    }
  };
  var EInfluence = class extends EBase {
    kind = "influence";
    get nodeFrom() {
      return this.graph.nodes.pl.get(this.from);
    }
    get nodeTo() {
      return this.graph.nodes.pl.get(this.to);
    }
  };
  var EParadigm = class extends EBase {
    kind = "paradigm";
    get nodeFrom() {
      return this.graph.nodes.pl.get(this.from);
    }
    get nodeTo() {
      return this.graph.nodes.paradigm.get(this.to);
    }
  };
  var ETsys = class extends EBase {
    kind = "tsys";
    get nodeFrom() {
      return this.graph.nodes.pl.get(this.from);
    }
    get nodeTo() {
      return this.graph.nodes.tsys.get(this.to);
    }
  };
  var EPlBundle = class extends EBase {
    kind = "plBundle";
    get nodeFrom() {
      return this.graph.nodes.pl.get(this.from);
    }
    get nodeTo() {
      return this.graph.nodes.bundle.get(this.to);
    }
  };
  var EPlat = class extends EBase {
    kind = "plat";
    get nodeFrom() {
      return this.graph.nodes.pl.get(this.from);
    }
    get nodeTo() {
      return this.graph.nodes.plat.get(this.to);
    }
  };
  var EPost = class extends EBase {
    kind = "post";
    get nodeFrom() {
      return this.graph.nodes.pl.get(this.from);
    }
    get nodeTo() {
      return this.graph.nodes.post.get(this.to);
    }
  };
  var ELib = class extends EBase {
    kind = "lib";
    get nodeFrom() {
      return this.graph.nodes.pl.get(this.from);
    }
    get nodeTo() {
      return this.graph.nodes.lib.get(this.to);
    }
  };
  var ETag = class extends EBase {
    kind = "tag";
    get nodeFrom() {
      return this.graph.nodes.pl.get(this.from);
    }
    get nodeTo() {
      return this.graph.nodes.tag.get(this.to);
    }
  };
  var ETool = class extends EBase {
    kind = "tool";
    get nodeFrom() {
      return this.graph.nodes.pl.get(this.from);
    }
    get nodeTo() {
      return this.graph.nodes.tool.get(this.to);
    }
  };
  var EWrittenIn = class extends EBase {
    kind = "writtenIn";
    get nodeFrom() {
      return this.graph.nodes.pl.get(this.from);
    }
    get nodeTo() {
      return this.graph.nodes.pl.get(this.to);
    }
  };

  // packages/frontend/src/components/facets/main/types.ts
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
  function defineFacets(...facets) {
    return facets.reduce((map, facet) => {
      map.set(facet.facetKey, facet);
      return map;
    }, /* @__PURE__ */ new Map());
  }
  function group(groupKey, label2, facetKeys) {
    return { groupKey, label: label2, facetKeys };
  }
  function defineGroups(...groups) {
    const groupMap = /* @__PURE__ */ new Map();
    const groupForFacetKey = /* @__PURE__ */ new Map();
    for (const group2 of groups) {
      groupMap.set(group2.groupKey, group2);
      for (const facetKey of group2.facetKeys) groupForFacetKey.set(facetKey, group2.groupKey);
    }
    return [groupMap, groupForFacetKey];
  }
  function mapGroups(groups, currentFacetGroup, mapper) {
    return [...groups.values()].map(
      ({ groupKey, label: label2, facetKeys }) => mapper({ groupKey, label: label2, facetKeys, active: currentFacetGroup === groupKey })
    );
  }

  // packages/frontend/src/components/facets/main/plangs.tsx
  var FACETS = defineFacets(
    bool("createdRecently", "Created Recently", (checked) => checked ? new ValNumber((/* @__PURE__ */ new Date()).getFullYear() - 5) : new ValNil()),
    bool("hasLogo", "Has Logo"),
    bool("hasWikipedia", "Has Wikipedia"),
    bool("isPopular", "Is Popular"),
    bool("isTranspiler", "Is Transpiler"),
    bool("releasedRecently", "Released Recently", (checked) => checked ? new ValNumber((/* @__PURE__ */ new Date()).getFullYear() - 1) : new ValNil()),
    multi("extensions", "Extensions"),
    table("compilesTo", "Compiles To", { kind: "noderel", edge: "compilesTo", node: NPlang.kind, dir: "direct" }),
    table("creationYear", "Creation Year", { kind: "year", node: NPlang.kind }),
    table("dialectOf", "Dialect Of", { kind: "noderel", edge: "dialect", node: NPlang.kind, dir: "direct" }),
    table("implements", "Implements", { kind: "noderel", edge: "impl", node: NPlang.kind, dir: "direct" }),
    table("influenced", "Influenced", { kind: "noderel", edge: "influence", node: NPlang.kind, dir: "inverse" }),
    table("influencedBy", "Influenced By", { kind: "noderel", edge: "influence", node: NPlang.kind, dir: "direct" }),
    table("licenses", "Licenses", { kind: "noderel", edge: "license", node: NLicense.kind, dir: "direct" }),
    table("paradigms", "Paradigms", { kind: "noderel", edge: "paradigm", node: NParadigm.kind, dir: "direct" }),
    table("platforms", "Platforms", { kind: "noderel", edge: "plat", node: NPlatform.kind, dir: "direct" }),
    table("tags", "Tags", { kind: "noderel", edge: "tag", node: NTag.kind, dir: "direct" }),
    table("typeSystems", "Type Systems", { kind: "noderel", edge: "tsys", node: NTsys.kind, dir: "direct" }),
    table("writtenIn", "Written In", { kind: "noderel", edge: "writtenIn", node: NPlang.kind, dir: "direct" }),
    text("plangName", "Plang Name")
  );
  var [GROUPS, GROUP_FOR_FACET_KEY] = defineGroups(
    group("creationYear", "Creation Year", ["creationYear"]),
    group("dialectOf", "Dialect Of", ["dialectOf"]),
    group("general", "General", ["plangName", "createdRecently", "releasedRecently", "isPopular", "hasLogo", "hasWikipedia", "extensions"]),
    group("implements", "Implements", ["implements"]),
    group("influenced", "Influenced", ["influenced"]),
    group("influencedBy", "Influenced By", ["influencedBy"]),
    group("licenses", "Licenses", ["licenses"]),
    group("paradigms", "Paradigms", ["paradigms"]),
    group("platforms", "Platforms", ["platforms"]),
    group("tags", "Tags", ["tags"]),
    group("transpiler", "Transpiler", ["isTranspiler", "compilesTo"]),
    group("typeSystems", "Type Systems", ["typeSystems"]),
    group("writtenIn", "Written In", ["writtenIn"])
  );
  var NAV = [
    ["general"],
    ["platforms", "paradigms", "typeSystems"],
    ["writtenIn", "transpiler", "dialectOf", "implements", "influencedBy", "influenced"],
    ["tags", "creationYear", "licenses"]
  ];
  var DEFAULT_GROUP = "general";
  var PlangsFacetGroups = ({ currentFacetGroup }) => /* @__PURE__ */ u4(k, { children: mapGroups(GROUPS, currentFacetGroup, ({ groupKey, active, label: label2, facetKeys }) => /* @__PURE__ */ u4(FacetGroup, { groupKey, label: label2, active, children: facetKeys.map((facetKey) => {
    const facet = FACETS.get(facetKey);
    const props = (f5) => ({ groupKey, facetKey, label: f5.label, active });
    switch (facet?.kind) {
      case "bool":
        return /* @__PURE__ */ u4(FacetBool, { ...props(facet), valueMapper: facet.valueMapper });
      case "multi":
        return /* @__PURE__ */ u4(FacetMulti, { ...props(facet) });
      case "table":
        return /* @__PURE__ */ u4(FacetTable, { ...props(facet), config: facet.config });
      case "text":
        return /* @__PURE__ */ u4(FacetText, { ...props(facet) });
      default:
        console.error("Facet not found", facetKey);
    }
  }) }, groupKey)) });

  // packages/frontend/src/components/facets/main/state.ts
  function useFacetState(tab, pg) {
    if (tab === "plangs") return useDispatchable(() => PlangsFacetsState.initial(pg));
    console.error("Unknown tab", tab);
  }
  var FacetsMainState = class _FacetsMainState extends Dispatchable {
    /** Attempt to reconstruct a structured "form value" from generic data. */
    // biome-ignore lint/suspicious/noExplicitAny: this data is the result of a de/serialization process and is not typed.
    static dataToValue(groupsByFacetKey, genericData) {
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
      updateLocalStorage(this.tab, "lastGroup", groupKey);
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
        this.data.values = _FacetsMainState.dataToValue(GROUP_FOR_FACET_KEY, values);
      } else {
        this.values.clear();
      }
      this.doSetCurrentGroup(this.defaultGroup);
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
    get tab() {
      return this.data.tab;
    }
    get defaultGroup() {
      return this.data.defaultGroup;
    }
    get pg() {
      return this.data.pg;
    }
    get values() {
      return this.data.values;
    }
    get serialized() {
      const data = {};
      for (const [_2, facetKey, value] of this.values.flatEntries()) {
        if (value.isPresent) data[facetKey] = value.serializable();
      }
      return data;
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
    /** Helpers */
    /** Update the clear facets button on the toolbar. */
    updateClearFacets() {
      const clearAll = $2("#icon-button-clearFacets");
      if (!clearAll?.state) return this;
      clearAll.state.doToggleMode(this.values.isEmpty ? "" : "clearFacets");
      return this;
    }
    dispatch() {
      super.dispatch();
      const data = this.serialized;
      window.fragment.pushState(FragmentTracker.serialize(data));
      updateLocalStorage(this.tab, "inputs", data);
      updateThumbns(this.results);
      this.updateClearFacets();
      return this;
    }
  };
  var PlangsFacetsState = class _PlangsFacetsState extends FacetsMainState {
    static initial(pg) {
      const tab = "plangs";
      return new _PlangsFacetsState({
        pg,
        tab,
        defaultGroup: DEFAULT_GROUP,
        currentGroupKey: loadLocalStorage(tab, "lastGroup") ?? DEFAULT_GROUP,
        values: FacetsMainState.dataToValue(GROUP_FOR_FACET_KEY, FragmentTracker.deserialize() ?? loadLocalStorage(tab, "inputs"))
      }).updateClearFacets();
    }
    get nav() {
      return NAV;
    }
    groupTitle(key) {
      return GROUPS.get(key)?.label ?? key;
    }
    get facetGroupsComponent() {
      return PlangsFacetGroups;
    }
    get results() {
      if (!this.pg) return /* @__PURE__ */ new Set();
      return this.pg.plangs(this.values.getMap2());
    }
  };

  // packages/frontend/src/components/facets/main/facets-main.tsx
  var FacetsMainContext = G(void 0);
  function FacetsMain({ tab, pg }) {
    const state = useFacetState(tab, pg);
    const self = useRootState(state);
    y3(() => window.fragment.onUserChange((ev) => state?.doResetAll(ev.deserFrag)));
    const body = () => !state ? null : /* @__PURE__ */ u4(FacetsMainContext.Provider, { value: state, children: [
      /* @__PURE__ */ u4("div", { class: tw(tw(BORDER, "border-r-1"), "overflow-y-scroll", "shrink-0 grow-0"), children: /* @__PURE__ */ u4("div", { class: tw("grid grid-cols-[auto_auto]", "gap-2", "pt-1"), children: state.nav.flatMap((keys) => (
        // Subgrid respects the alignment of indicators while allowing to group the links and add a border.
        /* @__PURE__ */ u4("div", { class: tw("col-span-2", "grid grid-cols-subgrid", "items-center", "pb-2", tw(BORDER, "border-b-1")), children: keys.map((groupKey) => /* @__PURE__ */ u4(k, { children: [
          /* @__PURE__ */ u4("div", { class: tw("mt-[.45rem] pl-1", state.groupHasValues(groupKey) ? "text-primary" : "text-foreground/20 text-xs"), children: /* @__PURE__ */ u4("div", { class: "-mt-[2px] scale-66", children: FULLCIRCLE }) }),
          /* @__PURE__ */ u4(
            "button",
            {
              ...onClickOnEnter(() => state.doSetCurrentGroup(groupKey)),
              class: tw(
                "block",
                "truncate text-left",
                "mr-2 px-1 py-1",
                state.currentGroupKey === groupKey ? "text-primary" : "text-foreground/85",
                "underline decoration-1 decoration-dotted",
                "cursor-pointer",
                HOVER
              ),
              children: state.groupTitle(groupKey)
            }
          )
        ] }, groupKey)) }, keys.join("-"))
      )) }) }),
      /* @__PURE__ */ u4("div", { class: tw("flex w-full flex-col", "overflow-hidden", "bg-linear-to-b to-secondary/50"), children: /* @__PURE__ */ u4(state.facetGroupsComponent, { currentFacetGroup: state.currentGroupKey }) })
    ] });
    return /* @__PURE__ */ u4(
      "aside",
      {
        ref: self,
        class: tw("flex flex-row", "max-h-full overflow-hidden", tw(BORDER, "border-b-1", "border-t-1", "sm:border-r-1")),
        children: body()
      }
    );
  }

  // packages/frontend/src/components/facets/main/index.tsx
  var CL = "facetsMain";
  function activateFacetsMain(pg) {
    for (const elem2 of elems(CL)) {
      if (pg && elem2.dataset.tab) {
        const props = { pg, tab: elem2.dataset.tab };
        B(/* @__PURE__ */ u4(FacetsMain, { ...props }), elem2);
      } else {
        console.error("Missing prop for FacetsMain component.");
      }
    }
  }

  // packages/frontend/src/components/icon-button/index.tsx
  function activateIconButtons() {
    for (const elem2 of elems("iconButton")) {
      if (elem2.dataset.action) {
        const props = {
          action: elem2.dataset.action,
          class: classesExcept(elem2, cssClass("iconButton"))
        };
        B(/* @__PURE__ */ u4(IconButton, { ...props }), elem2);
      } else {
        console.error("Missing prop for IconButton component.");
      }
    }
  }

  // packages/frontend/src/app/pl.ts
  function getPl(pg, target) {
    const keyHolder = target.closest("[data-node-key]");
    if (!keyHolder || !keyHolder.dataset.nodeKey) return;
    return pg.nodes.pl.get(keyHolder.dataset.nodeKey);
  }
  function lastPlang(pg) {
    try {
      const { key, data } = JSON.parse(localStorage.getItem("last-plang") || "{}");
      return new NPlang(pg, key).merge(data);
    } catch (err) {
      console.warn(err);
    }
  }

  // packages/frontend/src/components/misc/pill.tsx
  function Pill({ name, nodeKey, kind, tab }) {
    return /* @__PURE__ */ u4(
      "div",
      {
        "data-node-key": nodeKey ?? "NONE",
        class: tw(
          cssClass("pill"),
          "inline-block text-center",
          // NOTE: this approximately solves a mistmatch between rendering as a web component and as a Preact component,
          // but it's not perfect. This bug makes no sense so far and I need to find the root cause.
          tab === "plangs" ? "mr-4 mb-4" : "mr-[10.65px] mb-4",
          tab === "plangs" ? "min-w-8 p-1.5" : "min-w-8 px-[6.025px] py-1.5",
          "font-bold text-sm",
          "rounded",
          kind === "pl" ? "bg-primary text-background" : "bg-secondary text-foreground",
          "shadow-lg shadow-secondary",
          "outline-2 outline-secondary",
          kind === "pl" && HOVER
        ),
        children: name
      }
    );
  }

  // packages/frontend/src/components/pl-info/pl-info.tsx
  function PlInfo({ pl, open, tab }) {
    const forGrid = tab === "plangs";
    return /* @__PURE__ */ u4(
      "div",
      {
        class: tw(
          "w-full overflow-y-scroll",
          "px-2 pt-2 sm:p-4",
          !forGrid && "-mx-4",
          // Compensate for padding so it aligns with the rest of the content.
          "prose prose-green dark:prose-invert sm:prose-sm lg:prose-lg xl:prose-xl max-w-[unset]",
          forGrid && "bg-linear-to-b to-secondary/50",
          tw(BORDER, forGrid && "border-b-1")
        ),
        children: [
          /* @__PURE__ */ u4("h1", { class: tw(!forGrid && "text-4xl", forGrid && "inline text-lg sm:block sm:text-4xl"), children: /* @__PURE__ */ u4("a", { class: "text-foreground decoration-1 decoration-dotted", href: `/${pl?.plainKey}`, children: pl?.name ?? "Plang" }) }),
          pl && /* @__PURE__ */ u4(k, { children: [
            /* @__PURE__ */ u4("span", { class: tw(forGrid ? "dash sm:hidden" : "hidden"), children: "\u2014" }),
            /* @__PURE__ */ u4("div", { class: tw(forGrid && "hidden sm:block"), children: [
              pl.year && /* @__PURE__ */ u4(Pill, { name: `Appeared ${pl.year}`, nodeKey: "NA", kind: "firstAppeared", tab }),
              pl.lastRelease && /* @__PURE__ */ u4(Pill, { name: `Last Rel ${pl.lastRelease.date ?? pl.lastRelease.version}`, nodeKey: "NA", kind: "firstAppeared", tab }),
              pl.isTranspiler && /* @__PURE__ */ u4(Pill, { name: "Transpiler", nodeKey: "NA", kind: "transpiler", tab }),
              pl.isPopular && /* @__PURE__ */ u4(Pill, { name: "Popular", nodeKey: "NA", kind: "popular", tab })
            ] }),
            /* @__PURE__ */ u4("p", { class: tw(forGrid && "inline sm:block"), children: pl.description || "..." }),
            /* @__PURE__ */ u4("details", { class: tw(forGrid && "hidden sm:block", "pb-4"), open, children: [
              /* @__PURE__ */ u4("summary", { class: "cursor-pointer text-xl", children: "Details" }),
              relations(pl).map(([title, iterTap]) => /* @__PURE__ */ u4("div", { children: [
                /* @__PURE__ */ u4("h2", { class: "mt-4 text-xl", children: title }),
                iterTap.existing.map(({ name, key, kind }) => /* @__PURE__ */ u4(Pill, { name, nodeKey: key, kind, tab }, key))
              ] }, title))
            ] })
          ] })
        ]
      }
    );
  }
  function relations(pl) {
    const all = [
      ["Type Systems", pl.relTsys.values.map(({ nodeTo }) => nodeTo)],
      ["Tags", pl.relTags.values.map(({ nodeTo }) => nodeTo)],
      ["Platforms", pl.relPlatforms.values.map(({ nodeTo }) => nodeTo)],
      ["Influenced By", pl.relInfluencedBy.values.map(({ nodeTo }) => nodeTo)],
      ["Influenced", pl.relInfluenced.values.map(({ nodeFrom }) => nodeFrom)],
      ["Dialect Of", pl.relDialectOf.values.map(({ nodeTo }) => nodeTo)],
      ["Implements", pl.relImplements.values.map(({ nodeTo }) => nodeTo)],
      ["Compiles To", pl.relCompilesTo.values.map(({ nodeTo }) => nodeTo)],
      ["Licenses", pl.relLicenses.values.map(({ nodeTo }) => nodeTo)],
      ["Extensions", pl.extensions.map((name) => ({ key: name, name, kind: "ext" }))]
    ];
    return all.filter(([_2, iterTap]) => iterTap.isEmpty === false);
  }

  // packages/frontend/src/components/pl-info/index.tsx
  function renderPlInfo({ pl, tab, open }) {
    const plInfo = elem("plInfo");
    if (!plInfo) {
      console.log("No plInfo wrapper found.");
      return;
    }
    if (!pl || !tab) {
      console.log("Missing props to render plInfo.");
      return;
    }
    B(/* @__PURE__ */ u4(PlInfo, { pl, tab, open }), plInfo);
  }
  function renderLastPlInfo(pg) {
    const plInfo = elem("plInfo");
    const pl = lastPlang(pg);
    if (plInfo && pl) renderPlInfo({ pl, tab: "plangs" });
  }

  // packages/frontend/src/app/index.tsx
  async function start() {
    const pg = new PlangsGraph();
    const loadData = fetch("/plangs.json").then(async (r3) => pg.loadJSON(await r3.json()));
    window.fragment = new FragmentTracker().bind();
    window.restoreFilters = () => ToggleFacetsMenu.initial().runEffects();
    window.restoreHamburguer = () => ToggleHamburguer.initial().runEffects();
    window.restoreLightMode = () => ToggleLights.initial().runEffects();
    window.restorePlInfo = () => renderLastPlInfo(pg);
    document.addEventListener("DOMContentLoaded", () => {
      activateIconButtons();
      loadData.then(() => {
        activateFacetsMain(pg);
        const grid = elem("nodeGrid");
        if (!grid) return;
        on(grid, "pointerdown", ({ target }) => {
          const pl = getPl(pg, target);
          if (pl) renderPlInfo({ pl, tab: "plangs" });
        });
        on(grid, "dblclick", ({ target }) => {
          const pl = getPl(pg, target);
          if (pl) window.location.href = `/${pl.plainKey}`;
        });
      });
    });
  }
  if (false) {
    try {
      connectLivereload();
    } catch (err) {
      console.error(err);
    }
  }
  start();
})();
//# sourceMappingURL=app.js.map
