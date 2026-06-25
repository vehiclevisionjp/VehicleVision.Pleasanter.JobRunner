"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    try {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e) {
      throw mod = 0, e;
    }
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/knockout/build/output/knockout-latest.js
  var require_knockout_latest = __commonJS({
    "node_modules/knockout/build/output/knockout-latest.js"(exports, module) {
      (function() {
        (function(p) {
          var z = this || (0, eval)("this"), v = z.document, R = z.navigator, w = z.jQuery, G = z.JSON;
          w || "undefined" === typeof jQuery || (w = jQuery);
          (function(p2) {
            "function" === typeof define && define.amd ? define(["exports", "require"], p2) : "object" === typeof exports && "object" === typeof module ? p2(module.exports || exports) : p2(z.ko = {});
          })(function(S, T) {
            function K(a2, c) {
              return null === a2 || typeof a2 in X ? a2 === c : false;
            }
            function Y(b, c) {
              var d;
              return function() {
                d || (d = a.a.setTimeout(function() {
                  d = p;
                  b();
                }, c));
              };
            }
            function Z(b, c) {
              var d;
              return function() {
                clearTimeout(d);
                d = a.a.setTimeout(b, c);
              };
            }
            function aa(a2, c) {
              c && "change" !== c ? "beforeChange" === c ? this.pc(a2) : this.ib(a2, c) : this.qc(a2);
            }
            function ba(a2, c) {
              null !== c && c.s && c.s();
            }
            function ca(a2, c) {
              var d = this.qd, e = d[t];
              e.ta || (this.Rb && this.ob[c] ? (d.uc(c, a2, this.ob[c]), this.ob[c] = null, --this.Rb) : e.I[c] || d.uc(c, a2, e.K ? { da: a2 } : d.$c(a2)), a2.La && a2.gd());
            }
            var a = "undefined" !== typeof S ? S : {};
            a.b = function(b, c) {
              for (var d = b.split("."), e = a, f = 0; f < d.length - 1; f++) e = e[d[f]];
              e[d[d.length - 1]] = c;
            };
            a.L = function(a2, c, d) {
              a2[c] = d;
            };
            a.version = "3.5.3";
            a.b(
              "version",
              a.version
            );
            a.options = { deferUpdates: false, useOnlyNativeEvents: false, foreachHidesDestroyed: false };
            var H;
            if ("undefined" !== typeof trustedTypes) try {
              H = trustedTypes.createPolicy("knockout", { createHTML: function(a2) {
                return a2;
              }, createScript: function(a2) {
                return a2;
              } });
            } catch (fa) {
            }
            a.a = (function() {
              function b(a2, b2) {
                for (var c2 in a2) f.call(a2, c2) && b2(c2, a2[c2]);
              }
              function c(a2, b2) {
                if (b2) for (var c2 in b2) f.call(b2, c2) && (a2[c2] = b2[c2]);
                return a2;
              }
              function d(a2, b2) {
                a2.__proto__ = b2;
                return a2;
              }
              function e(b2, c2, e2, d2) {
                var l2 = b2[c2].match(n) || [];
                a.a.D(e2.match(n), function(b3) {
                  a.a.Pa(
                    l2,
                    b3,
                    d2
                  );
                });
                b2[c2] = l2.join(" ");
              }
              var f = Object.prototype.hasOwnProperty, g = { __proto__: [] } instanceof Array, h = "function" === typeof Symbol, m = {}, k = {};
              m[R && /Firefox\/2/i.test(R.userAgent) ? "KeyboardEvent" : "UIEvents"] = ["keyup", "keydown", "keypress"];
              m.MouseEvents = "click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" ");
              b(m, function(a2, b2) {
                if (b2.length) for (var c2 = 0, e2 = b2.length; c2 < e2; c2++) k[b2[c2]] = a2;
              });
              var l = { propertychange: true }, q;
              H || (q = v && (function() {
                for (var a2 = 3, b2 = v.createElement("div"), c2 = b2.getElementsByTagName("i"); b2.innerHTML = "<!--[if gt IE " + ++a2 + "]><i></i><![endif]-->", c2[0]; ) ;
                return 4 < a2 ? a2 : p;
              })());
              var n = /\S+/g, r;
              return {
                Jc: ["authenticity_token", /^__RequestVerificationToken(_.*)?$/],
                D: function(a2, b2, c2) {
                  for (var e2 = 0, d2 = a2.length; e2 < d2; e2++) b2.call(c2, a2[e2], e2, a2);
                },
                A: "function" == typeof Array.prototype.indexOf ? function(a2, b2) {
                  return Array.prototype.indexOf.call(a2, b2);
                } : function(a2, b2) {
                  for (var c2 = 0, e2 = a2.length; c2 < e2; c2++) if (a2[c2] === b2) return c2;
                  return -1;
                },
                Mb: function(a2, b2, c2) {
                  for (var e2 = 0, d2 = a2.length; e2 < d2; e2++) if (b2.call(
                    c2,
                    a2[e2],
                    e2,
                    a2
                  )) return a2[e2];
                  return p;
                },
                Ra: function(b2, c2) {
                  var e2 = a.a.A(b2, c2);
                  0 < e2 ? b2.splice(e2, 1) : 0 === e2 && b2.shift();
                },
                wc: function(b2) {
                  var c2 = [];
                  b2 && a.a.D(b2, function(b3) {
                    0 > a.a.A(c2, b3) && c2.push(b3);
                  });
                  return c2;
                },
                Nb: function(a2, b2, c2) {
                  var e2 = [];
                  if (a2) for (var d2 = 0, l2 = a2.length; d2 < l2; d2++) e2.push(b2.call(c2, a2[d2], d2));
                  return e2;
                },
                lb: function(a2, b2, c2) {
                  var e2 = [];
                  if (a2) for (var d2 = 0, l2 = a2.length; d2 < l2; d2++) b2.call(c2, a2[d2], d2) && e2.push(a2[d2]);
                  return e2;
                },
                Ob: function(a2, b2) {
                  if (b2 instanceof Array) a2.push.apply(a2, b2);
                  else for (var c2 = 0, e2 = b2.length; c2 < e2; c2++) a2.push(b2[c2]);
                  return a2;
                },
                Pa: function(b2, c2, e2) {
                  var d2 = a.a.A(a.a.bc(b2), c2);
                  0 > d2 ? e2 && b2.push(c2) : e2 || b2.splice(d2, 1);
                },
                Ca: g,
                extend: c,
                setPrototypeOf: d,
                Bb: g ? d : c,
                P: b,
                Ia: function(a2, b2, c2) {
                  if (!a2) return a2;
                  var e2 = {}, d2;
                  for (d2 in a2) f.call(a2, d2) && (e2[d2] = b2.call(c2, a2[d2], d2, a2));
                  return e2;
                },
                Ub: function(b2) {
                  for (; b2.firstChild; ) a.removeNode(b2.firstChild);
                },
                Zb: function(b2) {
                  b2 = a.a.la(b2);
                  for (var c2 = (b2[0] && b2[0].ownerDocument || v).createElement("div"), e2 = 0, d2 = b2.length; e2 < d2; e2++) c2.appendChild(a.pa(b2[e2]));
                  return c2;
                },
                Da: function(b2, c2) {
                  for (var e2 = 0, d2 = b2.length, l2 = []; e2 < d2; e2++) {
                    var k2 = b2[e2].cloneNode(true);
                    l2.push(c2 ? a.pa(k2) : k2);
                  }
                  return l2;
                },
                xa: function(b2, c2) {
                  a.a.Ub(b2);
                  if (c2) for (var e2 = 0, d2 = c2.length; e2 < d2; e2++) b2.appendChild(c2[e2]);
                },
                Xc: function(b2, c2) {
                  var e2 = b2.nodeType ? [b2] : b2;
                  if (0 < e2.length) {
                    for (var d2 = e2[0], l2 = d2.parentNode, k2 = 0, f2 = c2.length; k2 < f2; k2++) l2.insertBefore(c2[k2], d2);
                    k2 = 0;
                    for (f2 = e2.length; k2 < f2; k2++) a.removeNode(e2[k2]);
                  }
                },
                Wa: function(a2, b2) {
                  if (a2.length) {
                    for (b2 = 8 === b2.nodeType && b2.parentNode || b2; a2.length && a2[0].parentNode !== b2; ) a2.splice(0, 1);
                    for (; 1 < a2.length && a2[a2.length - 1].parentNode !== b2; ) a2.length--;
                    if (1 < a2.length) {
                      var c2 = a2[0], e2 = a2[a2.length - 1];
                      for (a2.length = 0; c2 !== e2; ) a2.push(c2), c2 = c2.nextSibling;
                      a2.push(e2);
                    }
                  }
                  return a2;
                },
                Zc: function(a2, b2) {
                  7 > q ? a2.setAttribute("selected", b2) : a2.selected = b2;
                },
                Eb: function(a2) {
                  return null === a2 || a2 === p ? "" : a2.trim ? a2.trim() : a2.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
                },
                Ud: function(a2, b2) {
                  a2 = a2 || "";
                  return b2.length > a2.length ? false : a2.substring(0, b2.length) === b2;
                },
                vd: function(a2, b2) {
                  if (a2 === b2) return true;
                  if (11 === a2.nodeType) return false;
                  if (b2.contains) return b2.contains(1 !== a2.nodeType ? a2.parentNode : a2);
                  if (b2.compareDocumentPosition) return 16 == (b2.compareDocumentPosition(a2) & 16);
                  for (; a2 && a2 != b2; ) a2 = a2.parentNode;
                  return !!a2;
                },
                Tb: function(b2) {
                  return a.a.vd(b2, b2.ownerDocument.documentElement);
                },
                kd: function(b2) {
                  return !!a.a.Mb(b2, a.a.Tb);
                },
                R: function(a2) {
                  return a2 && a2.tagName && a2.tagName.toLowerCase();
                },
                Ac: function(b2) {
                  return a.onError ? function() {
                    try {
                      return b2.apply(this, arguments);
                    } catch (c2) {
                      throw a.onError && a.onError(c2), c2;
                    }
                  } : b2;
                },
                setTimeout: function(b2, c2) {
                  return setTimeout(a.a.Ac(b2), c2);
                },
                Gc: function(b2) {
                  setTimeout(function() {
                    a.onError && a.onError(b2);
                    throw b2;
                  }, 0);
                },
                B: function(b2, c2, e2) {
                  var d2 = a.a.Ac(e2);
                  e2 = l[c2];
                  if (!a.options.useOnlyNativeEvents && !e2 && w) r || (r = "function" == typeof w(b2).on ? "on" : "bind"), w(b2)[r](c2, d2);
                  else if (!e2 && "function" == typeof b2.addEventListener) b2.addEventListener(c2, d2, false), a.a.J.oa(b2, function() {
                    b2.removeEventListener(c2, d2);
                  });
                  else if ("undefined" != typeof b2.attachEvent) {
                    var k2 = function(a2) {
                      d2.call(b2, a2);
                    }, f2 = "on" + c2;
                    b2.attachEvent(f2, k2);
                    a.a.J.oa(b2, function() {
                      b2.detachEvent(f2, k2);
                    });
                  }
                },
                Gb: function(b2, c2) {
                  if (!b2 || !b2.nodeType) throw Error("element must be a DOM node when calling triggerEvent");
                  var e2;
                  "input" === a.a.R(b2) && b2.type && "click" == c2.toLowerCase() ? (e2 = b2.type, e2 = "checkbox" == e2 || "radio" == e2) : e2 = false;
                  if (a.options.useOnlyNativeEvents || !w || e2) if ("function" == typeof v.createEvent) if ("function" == typeof b2.dispatchEvent) e2 = v.createEvent(k[c2] || "HTMLEvents"), e2.initEvent(c2, true, true, z, 0, 0, 0, 0, 0, false, false, false, false, 0, b2), b2.dispatchEvent(e2);
                  else throw Error("The supplied element doesn't support dispatchEvent");
                  else if (e2 && b2.click) b2.click();
                  else if ("undefined" != typeof b2.fireEvent) b2.fireEvent("on" + c2);
                  else throw Error("Browser doesn't support triggering events");
                  else w(b2).trigger(c2);
                },
                f: function(b2) {
                  return a.O(b2) ? b2() : b2;
                },
                bc: function(b2) {
                  return a.O(b2) ? b2.v() : b2;
                },
                Fb: function(b2, c2, d2) {
                  var l2;
                  c2 && ("object" === typeof b2.classList ? (l2 = b2.classList[d2 ? "add" : "remove"], a.a.D(c2.match(n), function(a2) {
                    l2.call(b2.classList, a2);
                  })) : "string" === typeof b2.className.baseVal ? e(b2.className, "baseVal", c2, d2) : e(b2, "className", c2, d2));
                },
                Cb: function(b2, c2) {
                  var e2 = a.a.f(c2);
                  if (null === e2 || e2 === p) e2 = "";
                  var d2 = a.h.firstChild(b2);
                  !d2 || 3 != d2.nodeType || a.h.nextSibling(d2) ? a.h.xa(b2, [b2.ownerDocument.createTextNode(e2)]) : d2.data = e2;
                  a.a.Ad(b2);
                },
                Yc: function(a2, b2) {
                  a2.name = b2;
                  if (7 >= q) try {
                    var c2 = a2.name.replace(/[&<>'"]/g, function(a3) {
                      return "&#" + a3.charCodeAt(0) + ";";
                    });
                    a2.mergeAttributes(v.createElement("<input name='" + c2 + "'/>"), false);
                  } catch (e2) {
                  }
                },
                Ad: function(a2) {
                  9 <= q && (a2 = 1 == a2.nodeType ? a2 : a2.parentNode, a2.style && (a2.style.zoom = a2.style.zoom));
                },
                wd: function(a2) {
                  if (q) {
                    var b2 = a2.style.width;
                    a2.style.width = 0;
                    a2.style.width = b2;
                  }
                },
                Pd: function(b2, c2) {
                  b2 = a.a.f(b2);
                  c2 = a.a.f(c2);
                  for (var e2 = [], d2 = b2; d2 <= c2; d2++) e2.push(d2);
                  return e2;
                },
                la: function(a2) {
                  for (var b2 = [], c2 = 0, e2 = a2.length; c2 < e2; c2++) b2.push(a2[c2]);
                  return b2;
                },
                Ea: function(a2) {
                  return h ? Symbol(a2) : a2;
                },
                Zd: 6 === q,
                $d: 7 === q,
                W: q,
                Lc: function(b2, c2) {
                  for (var e2 = a.a.la(b2.getElementsByTagName("input")).concat(a.a.la(b2.getElementsByTagName("textarea"))), d2 = "string" == typeof c2 ? function(a2) {
                    return a2.name === c2;
                  } : function(a2) {
                    return c2.test(a2.name);
                  }, l2 = [], k2 = e2.length - 1; 0 <= k2; k2--) d2(e2[k2]) && l2.push(e2[k2]);
                  return l2;
                },
                Nd: function(b2) {
                  return "string" == typeof b2 && (b2 = a.a.Eb(b2)) ? G && G.parse ? G.parse(b2) : new Function("return " + b2)() : null;
                },
                hc: function(b2, c2, e2) {
                  if (!G || !G.stringify) throw Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
                  return G.stringify(a.a.f(b2), c2, e2);
                },
                Od: function(c2, e2, d2) {
                  d2 = d2 || {};
                  var l2 = d2.params || {}, k2 = d2.includeFields || this.Jc, f2 = c2;
                  if ("object" == typeof c2 && "form" === a.a.R(c2)) for (var f2 = c2.action, h2 = k2.length - 1; 0 <= h2; h2--) for (var g2 = a.a.Lc(c2, k2[h2]), m2 = g2.length - 1; 0 <= m2; m2--) l2[g2[m2].name] = g2[m2].value;
                  e2 = a.a.f(e2);
                  var n2 = v.createElement("form");
                  n2.style.display = "none";
                  n2.action = f2;
                  n2.method = "post";
                  for (var q2 in e2) c2 = v.createElement("input"), c2.type = "hidden", c2.name = q2, c2.value = a.a.hc(a.a.f(e2[q2])), n2.appendChild(c2);
                  b(l2, function(a2, b2) {
                    var c3 = v.createElement("input");
                    c3.type = "hidden";
                    c3.name = a2;
                    c3.value = b2;
                    n2.appendChild(c3);
                  });
                  v.body.appendChild(n2);
                  d2.submitter ? d2.submitter(n2) : n2.submit();
                  setTimeout(function() {
                    n2.parentNode.removeChild(n2);
                  }, 0);
                }
              };
            })();
            a.b("utils", a.a);
            a.b("utils.arrayForEach", a.a.D);
            a.b("utils.arrayFirst", a.a.Mb);
            a.b("utils.arrayFilter", a.a.lb);
            a.b("utils.arrayGetDistinctValues", a.a.wc);
            a.b("utils.arrayIndexOf", a.a.A);
            a.b("utils.arrayMap", a.a.Nb);
            a.b("utils.arrayPushAll", a.a.Ob);
            a.b("utils.arrayRemoveItem", a.a.Ra);
            a.b("utils.cloneNodes", a.a.Da);
            a.b(
              "utils.createSymbolOrString",
              a.a.Ea
            );
            a.b("utils.extend", a.a.extend);
            a.b("utils.fieldsIncludedWithJsonPost", a.a.Jc);
            a.b("utils.getFormFields", a.a.Lc);
            a.b("utils.objectMap", a.a.Ia);
            a.b("utils.peekObservable", a.a.bc);
            a.b("utils.postJson", a.a.Od);
            a.b("utils.parseJson", a.a.Nd);
            a.b("utils.registerEventHandler", a.a.B);
            a.b("utils.stringifyJson", a.a.hc);
            a.b("utils.range", a.a.Pd);
            a.b("utils.toggleDomNodeCssClass", a.a.Fb);
            a.b("utils.triggerEvent", a.a.Gb);
            a.b("utils.unwrapObservable", a.a.f);
            a.b("utils.objectForEach", a.a.P);
            a.b(
              "utils.addOrRemoveItem",
              a.a.Pa
            );
            a.b("utils.setTextContent", a.a.Cb);
            a.b("unwrap", a.a.f);
            Function.prototype.bind || (Function.prototype.bind = function(a2) {
              var c = this;
              if (1 === arguments.length) return function() {
                return c.apply(a2, arguments);
              };
              var d = Array.prototype.slice.call(arguments, 1);
              return function() {
                var e = d.slice(0);
                e.push.apply(e, arguments);
                return c.apply(a2, e);
              };
            });
            a.a.g = new function() {
              var b = 0, c = "__ko__" + (/* @__PURE__ */ new Date()).getTime(), d = {}, e, f;
              a.a.W ? (e = function(a2, e2) {
                var f2 = a2[c];
                if (!f2 || "null" === f2 || !d[f2]) {
                  if (!e2) return p;
                  f2 = a2[c] = "ko" + b++;
                  d[f2] = {};
                }
                return d[f2];
              }, f = function(a2) {
                var b2 = a2[c];
                return b2 ? (delete d[b2], a2[c] = null, true) : false;
              }) : (e = function(a2, b2) {
                var e2 = a2[c];
                !e2 && b2 && (e2 = a2[c] = {});
                return e2;
              }, f = function(a2) {
                return a2[c] ? (delete a2[c], true) : false;
              });
              return { get: function(a2, b2) {
                var c2 = e(a2, false);
                return c2 && c2[b2];
              }, set: function(a2, b2, c2) {
                (a2 = e(a2, c2 !== p)) && (a2[b2] = c2);
              }, Vb: function(a2, b2, c2) {
                a2 = e(a2, true);
                return a2[b2] || (a2[b2] = c2);
              }, clear: f, Z: function() {
                return b++ + c;
              } };
            }();
            a.b("utils.domData", a.a.g);
            a.b("utils.domData.clear", a.a.g.clear);
            a.a.J = new function() {
              function b(b2, c2) {
                var d2 = a.a.g.get(b2, e);
                d2 === p && c2 && (d2 = [], a.a.g.set(b2, e, d2));
                return d2;
              }
              function c(c2) {
                var e2 = b(c2, false);
                if (e2) for (var e2 = e2.slice(0), k = 0; k < e2.length; k++) e2[k](c2);
                a.a.g.clear(c2);
                a.a.J.cleanExternalData(c2);
                g[c2.nodeType] && d(c2.childNodes, true);
              }
              function d(b2, e2) {
                for (var d2 = [], l, f2 = 0; f2 < b2.length; f2++) if (!e2 || 8 === b2[f2].nodeType) {
                  if (c(d2[d2.length] = l = b2[f2]), b2[f2] !== l) for (; f2-- && -1 == a.a.A(d2, b2[f2]); ) ;
                }
              }
              var e = a.a.g.Z(), f = { 1: true, 8: true, 9: true }, g = { 1: true, 9: true };
              return { oa: function(a2, c2) {
                if ("function" != typeof c2) throw Error("Callback must be a function");
                b(a2, true).push(c2);
              }, zb: function(c2, d2) {
                var f2 = b(c2, false);
                f2 && (a.a.Ra(f2, d2), 0 == f2.length && a.a.g.set(c2, e, p));
              }, pa: function(b2) {
                a.u.G(function() {
                  f[b2.nodeType] && (c(b2), g[b2.nodeType] && d(b2.getElementsByTagName("*")));
                });
                return b2;
              }, removeNode: function(b2) {
                a.pa(b2);
                b2.parentNode && b2.parentNode.removeChild(b2);
              }, cleanExternalData: function(a2) {
                w && "function" == typeof w.cleanData && w.cleanData([a2]);
              } };
            }();
            a.pa = a.a.J.pa;
            a.removeNode = a.a.J.removeNode;
            a.b("cleanNode", a.pa);
            a.b("removeNode", a.removeNode);
            a.b("utils.domNodeDisposal", a.a.J);
            a.b(
              "utils.domNodeDisposal.addDisposeCallback",
              a.a.J.oa
            );
            a.b("utils.domNodeDisposal.removeDisposeCallback", a.a.J.zb);
            (function() {
              var b = [0, "", ""], c = [1, "<table>", "</table>"], d = [3, "<table><tbody><tr>", "</tr></tbody></table>"], e = [1, "<select multiple='multiple'>", "</select>"], f = { thead: c, tbody: c, tfoot: c, tr: [2, "<table><tbody>", "</tbody></table>"], td: d, th: d, option: e, optgroup: e }, g = 8 >= a.a.W;
              a.a.wa = function(c2, e2) {
                var d2;
                if (w) if (w.parseHTML) d2 = w.parseHTML(c2, e2) || [];
                else {
                  if ((d2 = w.clean([c2], e2)) && d2[0]) {
                    for (var l = d2[0]; l.parentNode && 11 !== l.parentNode.nodeType; ) l = l.parentNode;
                    l.parentNode && l.parentNode.removeChild(l);
                  }
                }
                else {
                  (d2 = e2) || (d2 = v);
                  var l = d2.parentWindow || d2.defaultView || z, q = a.a.Eb(c2).toLowerCase(), n = d2.createElement("div"), r;
                  r = (q = q.match(/^(?:\x3c!--.*?--\x3e\s*?)*?<([a-z]+)[\s>]/)) && f[q[1]] || b;
                  q = r[0];
                  r = "ignored<div>" + r[1] + c2 + r[2] + "</div>";
                  "function" == typeof l.innerShiv ? n.appendChild(l.innerShiv(r)) : (g && d2.body.appendChild(n), n.innerHTML = H ? H.createHTML(r) : r, g && n.parentNode.removeChild(n));
                  for (; q--; ) n = n.lastChild;
                  d2 = a.a.la(n.lastChild.childNodes);
                }
                return d2;
              };
              a.a.Md = function(b2, c2) {
                var e2 = a.a.wa(b2, c2);
                return e2.length && e2[0].parentElement || a.a.Zb(e2);
              };
              a.a.fc = function(b2, c2) {
                a.a.Ub(b2);
                c2 = a.a.f(c2);
                if (null !== c2 && c2 !== p) {
                  if ("string" != typeof c2) {
                    if ("undefined" !== typeof trustedTypes && trustedTypes.isHTML(c2)) {
                      b2.innerHTML = c2;
                      return;
                    }
                    c2 = c2.toString();
                  }
                  if (w) w(b2).html(c2);
                  else for (var e2 = a.a.wa(c2, b2.ownerDocument), d2 = 0; d2 < e2.length; d2++) b2.appendChild(e2[d2]);
                }
              };
            })();
            a.b("utils.parseHtmlFragment", a.a.wa);
            a.b("utils.setHtml", a.a.fc);
            a.aa = /* @__PURE__ */ (function() {
              function b(c2, e) {
                if (c2) {
                  if (8 == c2.nodeType) {
                    var f = a.aa.Uc(c2.nodeValue);
                    null != f && e.push({ ud: c2, Kd: f });
                  } else if (1 == c2.nodeType) for (var f = 0, g = c2.childNodes, h = g.length; f < h; f++) b(g[f], e);
                }
              }
              var c = {};
              return { Yb: function(a2) {
                if ("function" != typeof a2) throw Error("You can only pass a function to ko.memoization.memoize()");
                var b2 = (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1) + (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1);
                c[b2] = a2;
                return "<!--[ko_memo:" + b2 + "]-->";
              }, bd: function(a2, b2) {
                var f = c[a2];
                if (f === p) throw Error("Couldn't find any memo with ID " + a2 + ". Perhaps it's already been unmemoized.");
                try {
                  return f.apply(null, b2 || []), true;
                } finally {
                  delete c[a2];
                }
              }, cd: function(c2, e) {
                var f = [];
                b(c2, f);
                for (var g = 0, h = f.length; g < h; g++) {
                  var m = f[g].ud, k = [m];
                  e && a.a.Ob(k, e);
                  a.aa.bd(f[g].Kd, k);
                  m.nodeValue = "";
                  m.parentNode && m.parentNode.removeChild(m);
                }
              }, Uc: function(a2) {
                return (a2 = a2.match(/^\[ko_memo\:(.*?)\]$/)) ? a2[1] : null;
              } };
            })();
            a.b("memoization", a.aa);
            a.b("memoization.memoize", a.aa.Yb);
            a.b("memoization.unmemoize", a.aa.bd);
            a.b("memoization.parseMemoText", a.aa.Uc);
            a.b("memoization.unmemoizeDomNodeAndDescendants", a.aa.cd);
            a.na = (function() {
              function b() {
                if (f) {
                  for (var b2 = f, c2 = 0, d2; h < f; ) if (d2 = e[h++]) {
                    if (h > b2) {
                      if (5e3 <= ++c2) {
                        h = f;
                        a.a.Gc(Error("'Too much recursion' after processing " + c2 + " task groups."));
                        break;
                      }
                      b2 = f;
                    }
                    try {
                      d2();
                    } catch (g2) {
                      a.a.Gc(g2);
                    }
                  }
                }
              }
              function c() {
                b();
                h = f = e.length = 0;
              }
              var d, e = [], f = 0, g = 1, h = 0;
              z.MutationObserver ? d = (function(a2) {
                var b2 = v.createElement("div");
                new MutationObserver(a2).observe(b2, { attributes: true });
                return function() {
                  b2.classList.toggle("foo");
                };
              })(c) : d = v && "onreadystatechange" in v.createElement("script") ? function(a2) {
                var b2 = v.createElement("script");
                b2.onreadystatechange = function() {
                  b2.onreadystatechange = null;
                  v.documentElement.removeChild(b2);
                  b2 = null;
                  a2();
                };
                v.documentElement.appendChild(b2);
              } : function(a2) {
                setTimeout(a2, 0);
              };
              return { scheduler: d, Ab: function(b2) {
                f || a.na.scheduler(c);
                e[f++] = b2;
                return g++;
              }, cancel: function(a2) {
                a2 = a2 - (g - f);
                a2 >= h && a2 < f && (e[a2] = null);
              }, resetForTesting: function() {
                var a2 = f - h;
                h = f = e.length = 0;
                return a2;
              }, Sd: b };
            })();
            a.b("tasks", a.na);
            a.b("tasks.schedule", a.na.Ab);
            a.b("tasks.runEarly", a.na.Sd);
            a.Va = { throttle: function(b, c) {
              b.throttleEvaluation = c;
              var d = null;
              return a.$({ read: b, write: function(e) {
                clearTimeout(d);
                d = a.a.setTimeout(function() {
                  b(e);
                }, c);
              } });
            }, rateLimit: function(a2, c) {
              var d, e, f;
              "number" == typeof c ? d = c : (d = c.timeout, e = c.method);
              a2.Ib = false;
              f = "function" == typeof e ? e : "notifyWhenChangesStop" == e ? Z : Y;
              a2.ub(function(a3) {
                return f(a3, d, c);
              });
            }, deferred: function(b, c) {
              if (true !== c) throw Error("The 'deferred' extender only accepts the value 'true', because it is not supported to turn deferral off once enabled.");
              b.Ib || (b.Ib = true, b.ub(function(c2) {
                var e, f = false;
                return function() {
                  if (!f) {
                    a.na.cancel(e);
                    e = a.na.Ab(c2);
                    try {
                      f = true, b.notifySubscribers(p, "dirty");
                    } finally {
                      f = false;
                    }
                  }
                };
              }));
            }, notify: function(a2, c) {
              a2.equalityComparer = "always" == c ? null : K;
            } };
            var X = { undefined: 1, "boolean": 1, number: 1, string: 1 };
            a.b("extenders", a.Va);
            a.ic = function(b, c, d) {
              this.da = b;
              this.lc = c;
              this.mc = d;
              this.Jb = false;
              this.hb = this.Kb = null;
              a.L(this, "dispose", this.s);
              a.L(this, "disposeWhenNodeIsRemoved", this.l);
            };
            a.ic.prototype.s = function() {
              this.Jb || (this.hb && a.a.J.zb(this.Kb, this.hb), this.Jb = true, this.mc(), this.da = this.lc = this.mc = this.Kb = this.hb = null);
            };
            a.ic.prototype.l = function(b) {
              this.Kb = b;
              a.a.J.oa(b, this.hb = this.s.bind(this));
            };
            a.T = function() {
              a.a.Bb(this, D);
              D.rb(this);
            };
            var D = { rb: function(a2) {
              a2.U = { change: [] };
              a2.sc = 1;
            }, subscribe: function(b, c, d) {
              var e = this;
              d = d || "change";
              var f = new a.ic(e, c ? b.bind(c) : b, function() {
                a.a.Ra(e.U[d], f);
                e.jb && e.jb(d);
              });
              e.Sa && e.Sa(d);
              e.U[d] || (e.U[d] = []);
              e.U[d].push(f);
              return f;
            }, notifySubscribers: function(b, c) {
              c = c || "change";
              "change" === c && this.Hb();
              if (this.Ya(c)) {
                var d = "change" === c && this.ed || this.U[c].slice(0);
                try {
                  a.u.xc();
                  for (var e = 0, f; f = d[e]; ++e) f.Jb || f.lc(b);
                } finally {
                  a.u.end();
                }
              }
            }, qb: function() {
              return this.sc;
            }, Dd: function(a2) {
              return this.qb() !== a2;
            }, Hb: function() {
              ++this.sc;
            }, ub: function(b) {
              var c = this, d = a.O(c), e, f, g, h, m;
              c.ib || (c.ib = c.notifySubscribers, c.notifySubscribers = aa);
              var k = b(function() {
                c.La = false;
                d && h === c && (h = c.nc ? c.nc() : c());
                var a2 = f || m && c.sb(g, h);
                m = f = e = false;
                a2 && c.ib(g = h);
              });
              c.qc = function(a2, b2) {
                b2 && c.La || (m = !b2);
                c.ed = c.U.change.slice(0);
                c.La = e = true;
                h = a2;
                k();
              };
              c.pc = function(a2) {
                e || (g = a2, c.ib(a2, "beforeChange"));
              };
              c.rc = function() {
                m = true;
              };
              c.gd = function() {
                c.sb(g, c.v(true)) && (f = true);
              };
            }, Ya: function(a2) {
              return this.U[a2] && this.U[a2].length;
            }, Bd: function(b) {
              if (b) return this.U[b] && this.U[b].length || 0;
              var c = 0;
              a.a.P(this.U, function(a2, b2) {
                "dirty" !== a2 && (c += b2.length);
              });
              return c;
            }, sb: function(a2, c) {
              return !this.equalityComparer || !this.equalityComparer(a2, c);
            }, toString: function() {
              return "[object Object]";
            }, extend: function(b) {
              var c = this;
              b && a.a.P(b, function(b2, e) {
                var f = a.Va[b2];
                "function" == typeof f && (c = f(c, e) || c);
              });
              return c;
            } };
            a.L(D, "init", D.rb);
            a.L(D, "subscribe", D.subscribe);
            a.L(D, "extend", D.extend);
            a.L(D, "getSubscriptionsCount", D.Bd);
            a.a.Ca && a.a.setPrototypeOf(D, Function.prototype);
            a.T.fn = D;
            a.Qc = function(a2) {
              return null != a2 && "function" == typeof a2.subscribe && "function" == typeof a2.notifySubscribers;
            };
            a.b("subscribable", a.T);
            a.b("isSubscribable", a.Qc);
            a.S = a.u = /* @__PURE__ */ (function() {
              function b(a2) {
                d.push(e);
                e = a2;
              }
              function c() {
                e = d.pop();
              }
              var d = [], e, f = 0;
              return { xc: b, end: c, cc: function(b2) {
                if (e) {
                  if (!a.Qc(b2)) throw Error("Only subscribable things can act as dependencies");
                  e.od.call(e.pd, b2, b2.fd || (b2.fd = ++f));
                }
              }, G: function(a2, e2, d2) {
                try {
                  return b(), a2.apply(e2, d2 || []);
                } finally {
                  c();
                }
              }, ra: function() {
                if (e) return e.o.ra();
              }, Xa: function() {
                if (e) return e.o.Xa();
              }, $a: function() {
                if (e) return e.$a;
              }, o: function() {
                if (e) return e.o;
              } };
            })();
            a.b("computedContext", a.S);
            a.b("computedContext.getDependenciesCount", a.S.ra);
            a.b("computedContext.getDependencies", a.S.Xa);
            a.b("computedContext.isInitial", a.S.$a);
            a.b("computedContext.registerDependency", a.S.cc);
            a.b("ignoreDependencies", a.Yd = a.u.G);
            var I = a.a.Ea("_latestValue");
            a.va = function(b) {
              function c() {
                if (0 < arguments.length) return c.sb(c[I], arguments[0]) && (c.Aa(), c[I] = arguments[0], c.za()), this;
                a.u.cc(c);
                return c[I];
              }
              c[I] = b;
              a.a.Ca || a.a.extend(c, a.T.fn);
              a.T.fn.rb(c);
              a.a.Bb(c, E);
              a.options.deferUpdates && a.Va.deferred(c, true);
              return c;
            };
            var E = { equalityComparer: K, v: function() {
              return this[I];
            }, za: function() {
              this.notifySubscribers(this[I], "spectate");
              this.notifySubscribers(this[I]);
            }, Aa: function() {
              this.notifySubscribers(this[I], "beforeChange");
            } };
            a.a.Ca && a.a.setPrototypeOf(E, a.T.fn);
            var J = a.va.Oa = "__ko_proto__";
            E[J] = a.va;
            a.O = function(b) {
              if ((b = "function" == typeof b && b[J]) && b !== E[J] && b !== a.o.fn[J]) throw Error("Invalid object that looks like an observable; possibly from another Knockout instance");
              return !!b;
            };
            a.ab = function(b) {
              return "function" == typeof b && (b[J] === E[J] || b[J] === a.o.fn[J] && b.Nc);
            };
            a.b("observable", a.va);
            a.b("isObservable", a.O);
            a.b("isWriteableObservable", a.ab);
            a.b("isWritableObservable", a.ab);
            a.b("observable.fn", E);
            a.L(E, "peek", E.v);
            a.L(E, "valueHasMutated", E.za);
            a.L(E, "valueWillMutate", E.Aa);
            a.Ja = function(b) {
              b = b || [];
              if ("object" != typeof b || !("length" in b)) throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");
              b = a.va(b);
              a.a.Bb(b, a.Ja.fn);
              return b.extend({ trackArrayChanges: true });
            };
            a.Ja.fn = { remove: function(b) {
              for (var c = this.v(), d = [], e = "function" != typeof b || a.O(b) ? function(a2) {
                return a2 === b;
              } : b, f = 0; f < c.length; f++) {
                var g = c[f];
                if (e(g)) {
                  0 === d.length && this.Aa();
                  if (c[f] !== g) throw Error("Array modified during remove; cannot remove item");
                  d.push(g);
                  c.splice(f, 1);
                  f--;
                }
              }
              d.length && this.za();
              return d;
            }, removeAll: function(b) {
              if (b === p) {
                var c = this.v(), d = c.slice(0);
                this.Aa();
                c.splice(0, c.length);
                this.za();
                return d;
              }
              return b ? this.remove(function(c2) {
                return 0 <= a.a.A(b, c2);
              }) : [];
            }, destroy: function(b) {
              var c = this.v(), d = "function" != typeof b || a.O(b) ? function(a2) {
                return a2 === b;
              } : b;
              this.Aa();
              for (var e = c.length - 1; 0 <= e; e--) {
                var f = c[e];
                d(f) && (f._destroy = true);
              }
              this.za();
            }, destroyAll: function(b) {
              return b === p ? this.destroy(function() {
                return true;
              }) : b ? this.destroy(function(c) {
                return 0 <= a.a.A(b, c);
              }) : [];
            }, indexOf: function(b) {
              var c = this();
              return a.a.A(c, b);
            }, replace: function(a2, c) {
              var d = this.indexOf(a2);
              0 <= d && (this.Aa(), this.v()[d] = c, this.za());
            }, sorted: function(a2) {
              var c = this().slice(0);
              return a2 ? c.sort(a2) : c.sort();
            }, reversed: function() {
              return this().slice(0).reverse();
            } };
            a.a.Ca && a.a.setPrototypeOf(a.Ja.fn, a.va.fn);
            a.a.D("pop push reverse shift sort splice unshift".split(" "), function(b) {
              a.Ja.fn[b] = function() {
                var a2 = this.v();
                this.Aa();
                this.zc(a2, b, arguments);
                var d = a2[b].apply(a2, arguments);
                this.za();
                return d === a2 ? this : d;
              };
            });
            a.a.D(["slice"], function(b) {
              a.Ja.fn[b] = function() {
                var a2 = this();
                return a2[b].apply(a2, arguments);
              };
            });
            a.Pc = function(b) {
              return a.O(b) && "function" == typeof b.remove && "function" == typeof b.push;
            };
            a.b("observableArray", a.Ja);
            a.b("isObservableArray", a.Pc);
            a.Va.trackArrayChanges = function(b, c) {
              function d() {
                function c2() {
                  if (m) {
                    var e2 = [].concat(b.v() || []), d2;
                    if (b.Ya("arrayChange")) {
                      if (!f || 1 < m) f = a.a.Qb(k, e2, b.Pb);
                      d2 = f;
                    }
                    k = e2;
                    f = null;
                    m = 0;
                    d2 && d2.length && b.notifySubscribers(d2, "arrayChange");
                  }
                }
                e ? c2() : (e = true, h = b.subscribe(
                  function() {
                    ++m;
                  },
                  null,
                  "spectate"
                ), k = [].concat(b.v() || []), f = null, g = b.subscribe(c2));
              }
              b.Pb = {};
              c && "object" == typeof c && a.a.extend(b.Pb, c);
              b.Pb.sparse = true;
              if (!b.zc) {
                var e = false, f = null, g, h, m = 0, k, l = b.Sa, q = b.jb;
                b.Sa = function(a2) {
                  l && l.call(b, a2);
                  "arrayChange" === a2 && d();
                };
                b.jb = function(a2) {
                  q && q.call(b, a2);
                  "arrayChange" !== a2 || b.Ya("arrayChange") || (g && g.s(), h && h.s(), h = g = null, e = false, k = p);
                };
                b.zc = function(b2, c2, d2) {
                  function l2(a2, b3, c3) {
                    return k2[k2.length] = { status: a2, value: b3, index: c3 };
                  }
                  if (e && !m) {
                    var k2 = [], g2 = b2.length, q2 = d2.length, h2 = 0;
                    switch (c2) {
                      case "push":
                        h2 = g2;
                      case "unshift":
                        for (c2 = 0; c2 < q2; c2++) l2("added", d2[c2], h2 + c2);
                        break;
                      case "pop":
                        h2 = g2 - 1;
                      case "shift":
                        g2 && l2("deleted", b2[h2], h2);
                        break;
                      case "splice":
                        c2 = Math.min(Math.max(0, 0 > d2[0] ? g2 + d2[0] : d2[0]), g2);
                        for (var g2 = 1 === q2 ? g2 : Math.min(c2 + (d2[1] || 0), g2), q2 = c2 + q2 - 2, h2 = Math.max(g2, q2), U = [], V = [], p2 = 2; c2 < h2; ++c2, ++p2) c2 < g2 && V.push(l2("deleted", b2[c2], c2)), c2 < q2 && U.push(l2("added", d2[p2], c2));
                        a.a.Kc(V, U);
                        break;
                      default:
                        return;
                    }
                    f = k2;
                  }
                };
              }
            };
            var t = a.a.Ea("_state");
            a.o = a.$ = function(b, c, d) {
              function e() {
                if (0 < arguments.length) {
                  if ("function" === typeof f) f.apply(g.pb, arguments);
                  else throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
                  return this;
                }
                g.ta || a.u.cc(e);
                (g.ka || g.K && e.Za()) && e.ha();
                return g.X;
              }
              "object" === typeof b ? d = b : (d = d || {}, b && (d.read = b));
              if ("function" != typeof d.read) throw Error("Pass a function that returns the value of the ko.computed");
              var f = d.write, g = {
                X: p,
                ua: true,
                ka: true,
                sa: false,
                jc: false,
                ta: false,
                xb: false,
                K: false,
                Wc: d.read,
                pb: c || d.owner,
                l: d.disposeWhenNodeIsRemoved || d.l || null,
                Ua: d.disposeWhen || d.Ua,
                Sb: null,
                I: {},
                V: 0,
                Ic: null
              };
              e[t] = g;
              e.Nc = "function" === typeof f;
              a.a.Ca || a.a.extend(e, a.T.fn);
              a.T.fn.rb(e);
              a.a.Bb(e, B);
              d.pure ? (g.xb = true, g.K = true, a.a.extend(e, da)) : d.deferEvaluation && a.a.extend(e, ea);
              a.options.deferUpdates && a.Va.deferred(e, true);
              g.l && (g.jc = true, g.l.nodeType || (g.l = null));
              g.K || d.deferEvaluation || e.ha();
              g.l && e.ja() && a.a.J.oa(g.l, g.Sb = function() {
                e.s();
              });
              return e;
            };
            var B = { equalityComparer: K, ra: function() {
              return this[t].V;
            }, Xa: function() {
              var b = [];
              a.a.P(this[t].I, function(a2, d) {
                b[d.Ma] = d.da;
              });
              return b;
            }, Wb: function(b) {
              if (!this[t].V) return false;
              var c = this.Xa();
              return -1 !== a.a.A(c, b) ? true : !!a.a.Mb(c, function(a2) {
                return a2.Wb && a2.Wb(b);
              });
            }, uc: function(a2, c, d) {
              if (this[t].xb && c === this) throw Error("A 'pure' computed must not be called recursively");
              this[t].I[a2] = d;
              d.Ma = this[t].V++;
              d.Na = c.qb();
            }, Za: function() {
              var a2 = this[t];
              if (a2.sa) return false;
              a2.sa = true;
              try {
                var c, d, e = a2.I;
                for (c in e) if (Object.prototype.hasOwnProperty.call(e, c) && (d = e[c], this.Ka && d.da.La || d.da.Dd(d.Na))) return true;
              } finally {
                a2.sa = false;
              }
            }, Jd: function() {
              this.Ka && !this[t].sa && this.Ka(false);
            }, ja: function() {
              var a2 = this[t];
              return a2.ka || 0 < a2.V;
            }, Rd: function() {
              this.La ? this[t].ka && (this[t].ua = true) : this.Hc();
            }, $c: function(a2) {
              if (a2.Ib) {
                var c = a2.subscribe(this.Jd, this, "dirty"), d = a2.subscribe(this.Rd, this);
                return { da: a2, s: function() {
                  c.s();
                  d.s();
                } };
              }
              return a2.subscribe(this.Hc, this);
            }, Hc: function() {
              var b = this, c = b.throttleEvaluation;
              c && 0 <= c ? (clearTimeout(this[t].Ic), this[t].Ic = a.a.setTimeout(function() {
                b.ha(true);
              }, c)) : b.Ka ? b.Ka(true) : b.ha(true);
            }, ha: function(b) {
              var c = this[t], d = c.Ua, e = false;
              if (!c.sa && !c.ta) {
                if (c.l && !a.a.Tb(c.l) || d && d()) {
                  if (!c.jc) {
                    this.s();
                    return;
                  }
                } else c.jc = false;
                c.sa = true;
                try {
                  e = this.zd(b);
                } finally {
                  c.sa = false;
                }
                return e;
              }
            }, zd: function(b) {
              var c = this[t], d = false, e = c.xb ? p : !c.V, d = { qd: this, ob: c.I, Rb: c.V };
              a.u.xc({ pd: d, od: ca, o: this, $a: e });
              c.I = {};
              c.V = 0;
              var f = this.yd(c, d);
              c.V ? d = this.sb(c.X, f) : (this.s(), d = true);
              d && (c.K ? this.Hb() : this.notifySubscribers(c.X, "beforeChange"), c.X = f, this.notifySubscribers(c.X, "spectate"), !c.K && b && this.notifySubscribers(c.X), this.rc && this.rc());
              e && this.notifySubscribers(c.X, "awake");
              return d;
            }, yd: function(b, c) {
              try {
                var d = b.Wc;
                return b.pb ? d.call(b.pb) : d();
              } finally {
                a.u.end(), c.Rb && !b.K && a.a.P(c.ob, ba), b.ua = b.ka = false;
              }
            }, v: function(a2) {
              var c = this[t];
              (c.ka && (a2 || !c.V) || c.K && this.Za()) && this.ha();
              return c.X;
            }, ub: function(b) {
              a.T.fn.ub.call(this, b);
              this.nc = function() {
                this[t].K || (this[t].ua ? this.ha() : this[t].ka = false);
                return this[t].X;
              };
              this.Ka = function(a2) {
                this.pc(this[t].X);
                this[t].ka = true;
                a2 && (this[t].ua = true);
                this.qc(this, !a2);
              };
            }, s: function() {
              var b = this[t];
              !b.K && b.I && a.a.P(b.I, function(a2, b2) {
                b2.s && b2.s();
              });
              b.l && b.Sb && a.a.J.zb(b.l, b.Sb);
              b.I = p;
              b.V = 0;
              b.ta = true;
              b.ua = false;
              b.ka = false;
              b.K = false;
              b.l = p;
              b.Ua = p;
              b.Wc = p;
              this.Nc || (b.pb = p);
            } }, da = { Sa: function(b) {
              var c = this, d = c[t];
              if (!d.ta && d.K && "change" == b) {
                d.K = false;
                if (d.ua || c.Za()) d.I = null, d.V = 0, c.ha() && c.Hb();
                else {
                  var e = [];
                  a.a.P(d.I, function(a2, b2) {
                    e[b2.Ma] = a2;
                  });
                  a.a.D(e, function(a2, b2) {
                    var e2 = d.I[a2], m = c.$c(e2.da);
                    m.Ma = b2;
                    m.Na = e2.Na;
                    d.I[a2] = m;
                  });
                  c.Za() && c.ha() && c.Hb();
                }
                d.ta || c.notifySubscribers(d.X, "awake");
              }
            }, jb: function(b) {
              var c = this[t];
              c.ta || "change" != b || this.Ya("change") || (a.a.P(c.I, function(a2, b2) {
                b2.s && (c.I[a2] = { da: b2.da, Ma: b2.Ma, Na: b2.Na }, b2.s());
              }), c.K = true, this.notifySubscribers(p, "asleep"));
            }, qb: function() {
              var b = this[t];
              b.K && (b.ua || this.Za()) && this.ha();
              return a.T.fn.qb.call(this);
            } }, ea = { Sa: function(a2) {
              "change" != a2 && "beforeChange" != a2 || this.v();
            } };
            a.a.Ca && a.a.setPrototypeOf(B, a.T.fn);
            var O = a.va.Oa;
            B[O] = a.o;
            a.Oc = function(a2) {
              return "function" == typeof a2 && a2[O] === B[O];
            };
            a.Fd = function(b) {
              return a.Oc(b) && b[t] && b[t].xb;
            };
            a.b("computed", a.o);
            a.b("dependentObservable", a.o);
            a.b("isComputed", a.Oc);
            a.b(
              "isPureComputed",
              a.Fd
            );
            a.b("computed.fn", B);
            a.L(B, "peek", B.v);
            a.L(B, "dispose", B.s);
            a.L(B, "isActive", B.ja);
            a.L(B, "getDependenciesCount", B.ra);
            a.L(B, "getDependencies", B.Xa);
            a.yb = function(b, c) {
              if ("function" === typeof b) return a.o(b, c, { pure: true });
              b = a.a.extend({}, b);
              b.pure = true;
              return a.o(b, c);
            };
            a.b("pureComputed", a.yb);
            (function() {
              function b(a2, f, g) {
                g = g || new d();
                a2 = f(a2);
                if ("object" != typeof a2 || null === a2 || a2 === p || a2 instanceof RegExp || a2 instanceof Date || a2 instanceof String || a2 instanceof Number || a2 instanceof Boolean) return a2;
                var h = a2 instanceof Array ? [] : {};
                g.save(a2, h);
                c(a2, function(c2) {
                  var d2 = f(a2[c2]);
                  switch (typeof d2) {
                    case "boolean":
                    case "number":
                    case "string":
                    case "bigint":
                    case "symbol":
                    case "function":
                      h[c2] = d2;
                      break;
                    case "object":
                    case "undefined":
                      var l = g.get(d2);
                      h[c2] = l !== p ? l : b(d2, f, g);
                  }
                });
                return h;
              }
              function c(a2, b2) {
                if (a2 instanceof Array) {
                  for (var c2 = 0; c2 < a2.length; c2++) b2(c2);
                  "function" == typeof a2.toJSON && b2("toJSON");
                } else for (c2 in a2) b2(c2);
              }
              function d() {
                this.keys = [];
                this.values = [];
              }
              a.ad = function(c2) {
                if (0 == arguments.length) throw Error("When calling ko.toJS, pass the object you want to convert.");
                return b(c2, function(b2) {
                  for (var c3 = 0; a.O(b2) && 10 > c3; c3++) b2 = b2();
                  return b2;
                });
              };
              a.toJSON = function(b2, c2, d2) {
                b2 = a.ad(b2);
                return a.a.hc(b2, c2, d2);
              };
              d.prototype = { constructor: d, save: function(b2, c2) {
                var d2 = a.a.A(this.keys, b2);
                0 <= d2 ? this.values[d2] = c2 : (this.keys.push(b2), this.values.push(c2));
              }, get: function(b2) {
                b2 = a.a.A(this.keys, b2);
                return 0 <= b2 ? this.values[b2] : p;
              } };
            })();
            a.b("toJS", a.ad);
            a.b("toJSON", a.toJSON);
            a.Wd = function(b, c, d) {
              function e(c2) {
                var e2 = a.yb(b, d).extend({ ma: "always" }), h = e2.subscribe(function(a2) {
                  a2 && (h.s(), c2(a2));
                });
                e2.notifySubscribers(e2.v());
                return h;
              }
              return "function" !== typeof Promise || c ? e(c.bind(d)) : new Promise(e);
            };
            a.b("when", a.Wd);
            (function() {
              a.w = { M: function(b) {
                switch (a.a.R(b)) {
                  case "option":
                    return true === b.__ko__hasDomDataOptionValue__ ? a.a.g.get(b, a.c.options.$b) : 7 >= a.a.W ? b.getAttributeNode("value") && b.getAttributeNode("value").specified ? b.value : b.text : b.value;
                  case "select":
                    return 0 <= b.selectedIndex ? a.w.M(b.options[b.selectedIndex]) : p;
                  default:
                    return b.value;
                }
              }, fb: function(b, c, d) {
                switch (a.a.R(b)) {
                  case "option":
                    "string" === typeof c ? (a.a.g.set(
                      b,
                      a.c.options.$b,
                      p
                    ), "__ko__hasDomDataOptionValue__" in b && delete b.__ko__hasDomDataOptionValue__, b.value = c) : (a.a.g.set(b, a.c.options.$b, c), b.__ko__hasDomDataOptionValue__ = true, b.value = "number" === typeof c ? c : "");
                    break;
                  case "select":
                    if ("" === c || null === c) c = p;
                    for (var e = -1, f = 0, g = b.options.length, h; f < g; ++f) if (h = a.w.M(b.options[f]), h == c || "" === h && c === p) {
                      e = f;
                      break;
                    }
                    if (d || 0 <= e || c === p && 1 < b.size) b.selectedIndex = e, 6 === a.a.W && a.a.setTimeout(function() {
                      b.selectedIndex = e;
                    }, 0);
                    break;
                  default:
                    if (null === c || c === p) c = "";
                    b.value = c;
                }
              } };
            })();
            a.b("selectExtensions", a.w);
            a.b("selectExtensions.readValue", a.w.M);
            a.b("selectExtensions.writeValue", a.w.fb);
            a.m = (function() {
              function b(b2) {
                b2 = a.a.Eb(b2);
                123 === b2.charCodeAt(0) && (b2 = b2.slice(1, -1));
                b2 += "\n,";
                var c2 = [], d2 = b2.match(e), q, n = [], h2 = 0;
                if (1 < d2.length) {
                  for (var y = 0, C; C = d2[y]; ++y) {
                    var u = C.charCodeAt(0);
                    if (44 === u) {
                      if (0 >= h2) {
                        c2.push(q && n.length ? { key: q, value: n.join("") } : { unknown: q || n.join("") });
                        q = h2 = 0;
                        n = [];
                        continue;
                      }
                    } else if (58 === u) {
                      if (!h2 && !q && 1 === n.length) {
                        q = n.pop();
                        continue;
                      }
                    } else if (47 === u && 1 < C.length && (47 === C.charCodeAt(1) || 42 === C.charCodeAt(1))) continue;
                    else 47 === u && y && 1 < C.length ? (u = d2[y - 1].match(f)) && !g[u[0]] && (b2 = b2.substr(b2.indexOf(C) + 1), d2 = b2.match(e), y = -1, C = "/") : 40 === u || 123 === u || 91 === u ? ++h2 : 41 === u || 125 === u || 93 === u ? --h2 : q || n.length || 34 !== u && 39 !== u || (C = C.slice(1, -1));
                    n.push(C);
                  }
                  if (0 < h2) throw Error("Unbalanced parentheses, braces, or brackets");
                }
                return c2;
              }
              var c = ["true", "false", "null", "undefined"], d = /^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i, e = RegExp(
                "\"(?:\\\\.|[^\"])*\"|'(?:\\\\.|[^'])*'|`(?:\\\\.|[^`])*`|/\\*(?:[^*]|\\*+[^*/])*\\*+/|//.*\n|/(?:\\\\.|[^/])+/w*|[^\\s:,/][^,\"'`{}()/:[\\]]*[^\\s,\"'`{}()/:[\\]]|[^\\s]",
                "g"
              ), f = /[\])"'A-Za-z0-9_$]+$/, g = { "in": 1, "return": 1, "typeof": 1 }, h = {};
              return { Ta: [], ya: h, ac: b, wb: function(e2, f2) {
                function l(b2, e3) {
                  var f3;
                  if (!y) {
                    var k = a.getBindingHandler(b2);
                    if (k && k.preprocess && !(e3 = k.preprocess(e3, b2, l))) return;
                    if (k = h[b2]) f3 = e3, 0 <= a.a.A(c, f3) ? f3 = false : (k = f3.match(d), f3 = null === k ? false : k[1] ? "Object(" + k[1] + ")" + k[2] : f3), k = f3;
                    k && n.push("'" + ("string" == typeof h[b2] ? h[b2] : b2) + "':function(_z){" + f3 + "=_z}");
                  }
                  g2 && (e3 = "function(){return " + e3 + " }");
                  q.push("'" + b2 + "':" + e3);
                }
                f2 = f2 || {};
                var q = [], n = [], g2 = f2.valueAccessors, y = f2.bindingParams, C = "string" === typeof e2 ? b(e2) : e2;
                a.a.D(C, function(a2) {
                  l(a2.key || a2.unknown, a2.value);
                });
                n.length && l("_ko_property_writers", "{" + n.join(",") + " }");
                return q.join(",");
              }, Id: function(a2, b2) {
                for (var c2 = 0; c2 < a2.length; c2++) if (a2[c2].key == b2) return true;
                return false;
              }, gb: function(b2, c2, e2, d2, f2) {
                if (b2 && a.O(b2)) !a.ab(b2) || f2 && b2.v() === d2 || b2(d2);
                else if ((b2 = c2.get("_ko_property_writers")) && b2[e2]) b2[e2](d2);
              } };
            })();
            a.b("expressionRewriting", a.m);
            a.b("expressionRewriting.bindingRewriteValidators", a.m.Ta);
            a.b("expressionRewriting.parseObjectLiteral", a.m.ac);
            a.b("expressionRewriting.preProcessBindings", a.m.wb);
            a.b("expressionRewriting._twoWayBindings", a.m.ya);
            a.b("jsonExpressionRewriting", a.m);
            a.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson", a.m.wb);
            (function() {
              function b(a2) {
                return 8 == a2.nodeType && g.test(f ? a2.text : a2.nodeValue);
              }
              function c(a2) {
                return 8 == a2.nodeType && h.test(f ? a2.text : a2.nodeValue);
              }
              function d(e2, d2) {
                for (var f2 = e2, h2 = 1, g2 = []; f2 = f2.nextSibling; ) {
                  if (c(f2) && (a.a.g.set(f2, k, true), h2--, 0 === h2)) return g2;
                  g2.push(f2);
                  b(f2) && h2++;
                }
                if (!d2) throw Error("Cannot find closing comment tag to match: " + e2.nodeValue);
                return null;
              }
              function e(a2, b2) {
                var c2 = d(a2, b2);
                return c2 ? 0 < c2.length ? c2[c2.length - 1].nextSibling : a2.nextSibling : null;
              }
              var f = v && "<!--test-->" === v.createComment("test").text, g = f ? /^\x3c!--\s*ko(?:\s+([\s\S]+))?\s*--\x3e$/ : /^\s*ko(?:\s+([\s\S]+))?\s*$/, h = f ? /^\x3c!--\s*\/ko\s*--\x3e$/ : /^\s*\/ko\s*$/, m = { ul: true, ol: true }, k = "__ko_matchedEndComment__";
              a.h = {
                ea: {},
                childNodes: function(a2) {
                  return b(a2) ? d(a2) : a2.childNodes;
                },
                Fa: function(c2) {
                  if (b(c2)) {
                    c2 = a.h.childNodes(c2);
                    for (var e2 = 0, d2 = c2.length; e2 < d2; e2++) a.removeNode(c2[e2]);
                  } else a.a.Ub(c2);
                },
                xa: function(c2, e2) {
                  if (b(c2)) {
                    a.h.Fa(c2);
                    for (var d2 = c2.nextSibling, f2 = 0, k2 = e2.length; f2 < k2; f2++) d2.parentNode.insertBefore(e2[f2], d2);
                  } else a.a.xa(c2, e2);
                },
                Vc: function(a2, c2) {
                  var e2;
                  b(a2) ? (e2 = a2.nextSibling, a2 = a2.parentNode) : e2 = a2.firstChild;
                  e2 ? c2 !== e2 && a2.insertBefore(c2, e2) : a2.appendChild(c2);
                },
                Xb: function(c2, e2, d2) {
                  d2 ? (d2 = d2.nextSibling, b(c2) && (c2 = c2.parentNode), d2 ? e2 !== d2 && c2.insertBefore(e2, d2) : c2.appendChild(e2)) : a.h.Vc(c2, e2);
                },
                firstChild: function(a2) {
                  return b(a2) ? !a2.nextSibling || c(a2.nextSibling) ? null : a2.nextSibling : a2.firstChild && c(a2.firstChild) ? a2.firstChild.nextSibling : a2.firstChild;
                },
                nextSibling: function(d2) {
                  b(d2) && (d2 = e(d2));
                  return d2.nextSibling && c(d2.nextSibling) ? (d2 = d2.nextSibling, c(d2) && a.a.g.get(d2, k), null) : d2.nextSibling;
                },
                Cd: b,
                Vd: function(a2) {
                  return (a2 = (f ? a2.text : a2.nodeValue).match(g)) ? a2[1] : null;
                },
                Sc: function(d2) {
                  if (m[a.a.R(d2)]) {
                    var f2 = d2.firstChild;
                    if (f2) {
                      do
                        if (1 === f2.nodeType) {
                          var k2;
                          k2 = f2.firstChild;
                          var h2 = null;
                          if (k2) {
                            do
                              if (h2) h2.push(k2);
                              else if (b(k2)) {
                                var g2 = e(k2, true);
                                g2 ? k2 = g2 : h2 = [k2];
                              } else c(k2) && (h2 = [k2]);
                            while (k2 = k2.nextSibling);
                          }
                          if (k2 = h2) for (h2 = f2.nextSibling, g2 = 0; g2 < k2.length; g2++) h2 ? d2.insertBefore(
                            k2[g2],
                            h2
                          ) : d2.appendChild(k2[g2]);
                        }
                      while (f2 = f2.nextSibling);
                    }
                  }
                }
              };
            })();
            a.b("virtualElements", a.h);
            a.b("virtualElements.allowedBindings", a.h.ea);
            a.b("virtualElements.emptyNode", a.h.Fa);
            a.b("virtualElements.insertAfter", a.h.Xb);
            a.b("virtualElements.prepend", a.h.Vc);
            a.b("virtualElements.setDomNodeChildren", a.h.xa);
            (function() {
              function b(b2, d) {
                var e = "with($context){with($data||{}){return{" + a.m.wb(b2, d) + "}}}";
                return H ? (0, eval)(H.createScript("(function($context,$element){" + e + "})")) : new Function("$context", "$element", e);
              }
              a.ga = function() {
                this.nd = {};
              };
              a.a.extend(a.ga.prototype, {
                nodeHasBindings: function(b2) {
                  switch (b2.nodeType) {
                    case 1:
                      return null != b2.getAttribute("data-bind") || a.j.getComponentNameForNode(b2);
                    case 8:
                      return a.h.Cd(b2);
                    default:
                      return false;
                  }
                },
                getBindings: function(b2, d) {
                  var e = this.getBindingsString(b2, d), e = e ? this.parseBindingsString(e, d, b2) : null;
                  return a.j.tc(e, b2, d, false);
                },
                getBindingAccessors: function(b2, d) {
                  var e = this.getBindingsString(b2, d), e = e ? this.parseBindingsString(e, d, b2, { valueAccessors: true }) : null;
                  return a.j.tc(e, b2, d, true);
                },
                getBindingsString: function(b2) {
                  switch (b2.nodeType) {
                    case 1:
                      return b2.getAttribute("data-bind");
                    case 8:
                      return a.h.Vd(b2);
                    default:
                      return null;
                  }
                },
                parseBindingsString: function(a2, d, e, f) {
                  try {
                    var g = this.nd, h = a2 + (f && f.valueAccessors || "");
                    return (g[h] || (g[h] = b(a2, f)))(d, e);
                  } catch (m) {
                    throw m.message = "Unable to parse bindings.\nBindings value: " + a2 + "\nMessage: " + m.message, m;
                  }
                }
              });
              a.ga.instance = new a.ga();
            })();
            a.b("bindingProvider", a.ga);
            (function() {
              function b(b2) {
                var c2 = (b2 = a.a.g.get(b2, A)) && b2.N;
                c2 && (b2.N = null, c2.Tc());
              }
              function c(c2, d2, e2) {
                this.node = c2;
                this.yc = d2;
                this.mb = [];
                this.H = false;
                d2.N || a.a.J.oa(c2, b);
                e2 && e2.N && (e2.N.mb.push(c2), this.Lb = e2);
              }
              function d(a2) {
                return function() {
                  return a2;
                };
              }
              function e(a2) {
                return a2();
              }
              function f(b2) {
                return a.a.Ia(a.u.G(b2), function(a2, c2) {
                  return function() {
                    return b2()[c2];
                  };
                });
              }
              function g(b2, c2, e2) {
                return "function" === typeof b2 ? f(b2.bind(null, c2, e2)) : a.a.Ia(b2, d);
              }
              function h(a2, b2) {
                return f(this.getBindings.bind(this, a2, b2));
              }
              function m(b2, c2) {
                var e2 = a.h.firstChild(c2);
                if (e2) {
                  var d2, f2 = a.ga.instance, l2 = f2.preprocessNode;
                  if (l2) {
                    for (; d2 = e2; ) e2 = a.h.nextSibling(d2), l2.call(f2, d2);
                    e2 = a.h.firstChild(c2);
                  }
                  for (; d2 = e2; ) e2 = a.h.nextSibling(d2), k(b2, d2);
                }
                a.i.ma(c2, a.i.H);
              }
              function k(b2, c2) {
                var e2 = b2, d2 = 1 === c2.nodeType;
                d2 && a.h.Sc(c2);
                if (d2 || a.ga.instance.nodeHasBindings(c2)) e2 = q(c2, null, b2).bindingContextForDescendants;
                e2 && !u[a.a.R(c2)] && m(e2, c2);
              }
              function l(b2) {
                var c2 = [], e2 = {}, d2 = [];
                a.a.P(b2, function x(f2) {
                  if (!e2[f2]) {
                    var k2 = a.getBindingHandler(f2);
                    k2 && (k2.after && (d2.push(f2), a.a.D(k2.after, function(c3) {
                      if (b2[c3]) {
                        if (-1 !== a.a.A(d2, c3)) throw Error("Cannot combine the following bindings, because they have a cyclic dependency: " + d2.join(", "));
                        x(c3);
                      }
                    }), d2.length--), c2.push({ key: f2, Mc: k2 }));
                    e2[f2] = true;
                  }
                });
                return c2;
              }
              function q(b2, c2, d2) {
                var f2 = a.a.g.Vb(b2, A, {}), k2 = f2.hd;
                if (!c2) {
                  if (k2) throw Error("You cannot apply bindings multiple times to the same element.");
                  f2.hd = true;
                }
                k2 || (f2.context = d2);
                f2.vb || (f2.vb = {});
                var g2;
                if (c2 && "function" !== typeof c2) g2 = c2;
                else {
                  var q2 = a.ga.instance, n2 = q2.getBindingAccessors || h, m2 = a.$(function() {
                    if (g2 = c2 ? c2(d2, b2) : n2.call(q2, b2, d2)) {
                      if (d2[r]) d2[r]();
                      if (d2[C]) d2[C]();
                    }
                    return g2;
                  }, null, { l: b2 });
                  g2 && m2.ja() || (m2 = null);
                }
                var y2 = d2, u2;
                if (g2) {
                  var L2 = m2 ? function(a2) {
                    return function() {
                      return e(m2()[a2]);
                    };
                  } : function(a2) {
                    return g2[a2];
                  }, t2 = function() {
                    return a.a.Ia(m2 ? m2() : g2, e);
                  };
                  t2.get = function(a2) {
                    return g2[a2] && e(L2(a2));
                  };
                  t2.has = function(a2) {
                    return a2 in g2;
                  };
                  a.i.H in g2 && a.i.subscribe(b2, a.i.H, function() {
                    var c3 = (0, g2[a.i.H])();
                    if (c3) {
                      var d3 = a.h.childNodes(b2);
                      d3.length && c3(d3, a.Ec(d3[0]));
                    }
                  });
                  a.i.qa in g2 && (y2 = a.i.Db(b2, d2), a.i.subscribe(b2, a.i.qa, function() {
                    var c3 = (0, g2[a.i.qa])();
                    c3 && a.h.firstChild(b2) && c3(b2);
                  }));
                  f2 = l(g2);
                  a.a.D(f2, function(c3) {
                    var d3 = c3.Mc.init, e2 = c3.Mc.update, f3 = c3.key;
                    if (8 === b2.nodeType && !a.h.ea[f3]) throw Error("The binding '" + f3 + "' cannot be used with virtual elements");
                    try {
                      "function" == typeof d3 && a.u.G(function() {
                        var a2 = d3(b2, L2(f3), t2, y2.$data, y2);
                        if (a2 && a2.controlsDescendantBindings) {
                          if (u2 !== p) throw Error("Multiple bindings (" + u2 + " and " + f3 + ") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");
                          u2 = f3;
                        }
                      }), "function" == typeof e2 && a.$(function() {
                        e2(b2, L2(f3), t2, y2.$data, y2);
                      }, null, { l: b2 });
                    } catch (k3) {
                      throw k3.message = 'Unable to process binding "' + f3 + ": " + g2[f3] + '"\nMessage: ' + k3.message, k3;
                    }
                  });
                }
                f2 = u2 === p;
                return { shouldBindDescendants: f2, bindingContextForDescendants: f2 && y2 };
              }
              function n(b2, c2) {
                return b2 && b2 instanceof a.fa ? b2 : new a.fa(b2, p, p, c2);
              }
              var r = a.a.Ea("_subscribable"), y = a.a.Ea("_ancestorBindingInfo"), C = a.a.Ea("_dataDependency");
              a.c = {};
              var u = { script: true, textarea: true, template: true };
              a.getBindingHandler = function(b2) {
                return a.c[b2];
              };
              var L = {};
              a.fa = function(b2, c2, d2, e2, f2) {
                function k2() {
                  var b3 = q2 ? h2() : h2, f3 = a.a.f(b3);
                  c2 ? (a.a.extend(l2, c2), y in c2 && (l2[y] = c2[y])) : (l2.$parents = [], l2.$root = f3, l2.ko = a);
                  l2[r] = n2;
                  g2 ? f3 = l2.$data : (l2.$rawData = b3, l2.$data = f3);
                  d2 && (l2[d2] = f3);
                  e2 && e2(l2, c2, f3);
                  if (c2 && c2[r] && !a.S.o().Wb(c2[r])) c2[r]();
                  m2 && (l2[C] = m2);
                  return l2.$data;
                }
                var l2 = this, g2 = b2 === L, h2 = g2 ? p : b2, q2 = "function" == typeof h2 && !a.O(h2), n2, m2 = f2 && f2.dataDependency;
                f2 && f2.exportDependencies ? k2() : (n2 = a.yb(k2), n2.v(), n2.ja() ? n2.equalityComparer = null : l2[r] = p);
              };
              a.fa.prototype.createChildContext = function(b2, c2, d2, e2) {
                !e2 && c2 && "object" == typeof c2 && (e2 = c2, c2 = e2.as, d2 = e2.extend);
                if (c2 && e2 && e2.noChildContext) {
                  var f2 = "function" == typeof b2 && !a.O(b2);
                  return new a.fa(L, this, null, function(a2) {
                    d2 && d2(a2);
                    a2[c2] = f2 ? b2() : b2;
                  }, e2);
                }
                return new a.fa(
                  b2,
                  this,
                  c2,
                  function(a2, b3) {
                    a2.$parentContext = b3;
                    a2.$parent = b3.$data;
                    a2.$parents = (b3.$parents || []).slice(0);
                    a2.$parents.unshift(a2.$parent);
                    d2 && d2(a2);
                  },
                  e2
                );
              };
              a.fa.prototype.extend = function(b2, c2) {
                return new a.fa(L, this, null, function(c3) {
                  a.a.extend(c3, "function" == typeof b2 ? b2(c3) : b2);
                }, c2);
              };
              var A = a.a.g.Z();
              c.prototype.Tc = function() {
                this.Lb && this.Lb.N && this.Lb.N.sd(this.node);
              };
              c.prototype.sd = function(b2) {
                a.a.Ra(this.mb, b2);
                !this.mb.length && this.H && this.Cc();
              };
              c.prototype.Cc = function() {
                this.H = true;
                this.yc.N && !this.mb.length && (this.yc.N = null, a.a.J.zb(this.node, b), a.i.ma(this.node, a.i.qa), this.Tc());
              };
              a.i = { H: "childrenComplete", qa: "descendantsComplete", subscribe: function(b2, c2, d2, e2, f2) {
                var k2 = a.a.g.Vb(b2, A, {});
                k2.Ga || (k2.Ga = new a.T());
                f2 && f2.notifyImmediately && k2.vb && k2.vb[c2] && a.u.G(d2, e2, [b2]);
                return k2.Ga.subscribe(d2, e2, c2);
              }, ma: function(b2, c2) {
                var d2 = a.a.g.get(b2, A);
                if (d2 && (d2.vb[c2] = true, d2.Ga && d2.Ga.notifySubscribers(b2, c2), c2 == a.i.H)) {
                  if (d2.N) d2.N.Cc();
                  else if (d2.N === p && d2.Ga && d2.Ga.Ya(a.i.qa)) throw Error("descendantsComplete event not supported for bindings on this node");
                }
              }, Db: function(b2, d2) {
                var e2 = a.a.g.Vb(b2, A, {});
                e2.N || (e2.N = new c(b2, e2, d2[y]));
                return d2[y] == e2 ? d2 : d2.extend(function(a2) {
                  a2[y] = e2;
                });
              } };
              a.Td = function(b2) {
                return (b2 = a.a.g.get(b2, A)) && b2.context;
              };
              a.kb = function(b2, c2, d2) {
                1 === b2.nodeType && a.h.Sc(b2);
                return q(b2, c2, n(d2));
              };
              a.ld = function(b2, c2, d2) {
                d2 = n(d2);
                return a.kb(b2, g(c2, d2, b2), d2);
              };
              a.Qa = function(a2, b2) {
                1 !== b2.nodeType && 8 !== b2.nodeType || m(n(a2), b2);
              };
              a.vc = function(a2, b2, c2) {
                !w && z.jQuery && (w = z.jQuery);
                if (2 > arguments.length) {
                  if (b2 = v.body, !b2) throw Error("ko.applyBindings: could not find document.body; has the document been loaded?");
                } else if (!b2 || 1 !== b2.nodeType && 8 !== b2.nodeType) throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");
                k(n(a2, c2), b2);
              };
              a.Dc = function(b2) {
                return !b2 || 1 !== b2.nodeType && 8 !== b2.nodeType ? p : a.Td(b2);
              };
              a.Ec = function(b2) {
                return (b2 = a.Dc(b2)) ? b2.$data : p;
              };
              a.b("bindingHandlers", a.c);
              a.b("bindingEvent", a.i);
              a.b("bindingEvent.subscribe", a.i.subscribe);
              a.b("bindingEvent.startPossiblyAsyncContentBinding", a.i.Db);
              a.b("applyBindings", a.vc);
              a.b("applyBindingsToDescendants", a.Qa);
              a.b("applyBindingAccessorsToNode", a.kb);
              a.b("applyBindingsToNode", a.ld);
              a.b("contextFor", a.Dc);
              a.b("dataFor", a.Ec);
            })();
            (function(b) {
              function c(c2, e2) {
                var k = Object.prototype.hasOwnProperty.call(f, c2) ? f[c2] : b, l;
                k ? k.subscribe(e2) : (k = f[c2] = new a.T(), k.subscribe(e2), d(c2, function(b2, d2) {
                  var e3 = !(!d2 || !d2.synchronous);
                  g[c2] = { definition: b2, Gd: e3 };
                  delete f[c2];
                  l || e3 ? k.notifySubscribers(b2) : a.na.Ab(function() {
                    k.notifySubscribers(b2);
                  });
                }), l = true);
              }
              function d(a2, b2) {
                e("getConfig", [a2], function(c2) {
                  c2 ? e("loadComponent", [a2, c2], function(a3) {
                    b2(
                      a3,
                      c2
                    );
                  }) : b2(null, null);
                });
              }
              function e(c2, d2, f2, l) {
                l || (l = a.j.loaders.slice(0));
                var g2 = l.shift();
                if (g2) {
                  var n = g2[c2];
                  if (n) {
                    var r = false;
                    if (n.apply(g2, d2.concat(function(a2) {
                      r ? f2(null) : null !== a2 ? f2(a2) : e(c2, d2, f2, l);
                    })) !== b && (r = true, !g2.suppressLoaderExceptions)) throw Error("Component loaders must supply values by invoking the callback, not by returning values synchronously.");
                  } else e(c2, d2, f2, l);
                } else f2(null);
              }
              var f = {}, g = {};
              a.j = { get: function(d2, e2) {
                var f2 = Object.prototype.hasOwnProperty.call(g, d2) ? g[d2] : b;
                f2 ? f2.Gd ? a.u.G(function() {
                  e2(f2.definition);
                }) : a.na.Ab(function() {
                  e2(f2.definition);
                }) : c(d2, e2);
              }, Bc: function(a2) {
                delete g[a2];
              }, oc: e };
              a.j.loaders = [];
              a.b("components", a.j);
              a.b("components.get", a.j.get);
              a.b("components.clearCachedDefinition", a.j.Bc);
            })();
            (function() {
              function b(b2, c2, d2, e2) {
                function g2() {
                  0 === --C && e2(h2);
                }
                var h2 = {}, C = 2, u = d2.template;
                d2 = d2.viewModel;
                u ? f(c2, u, function(c3) {
                  a.j.oc("loadTemplate", [b2, c3], function(a2) {
                    h2.template = a2;
                    g2();
                  });
                }) : g2();
                d2 ? f(c2, d2, function(c3) {
                  a.j.oc("loadViewModel", [b2, c3], function(a2) {
                    h2[m] = a2;
                    g2();
                  });
                }) : g2();
              }
              function c(a2, b2, d2) {
                if ("function" === typeof b2) d2(function(a3) {
                  return new b2(a3);
                });
                else if ("function" === typeof b2[m]) d2(b2[m]);
                else if ("instance" in b2) {
                  var e2 = b2.instance;
                  d2(function() {
                    return e2;
                  });
                } else "viewModel" in b2 ? c(a2, b2.viewModel, d2) : a2("Unknown viewModel value: " + b2);
              }
              function d(b2) {
                switch (a.a.R(b2)) {
                  case "script":
                    return a.a.wa(b2.text);
                  case "textarea":
                    return a.a.wa(b2.value);
                  case "template":
                    if (e(b2.content)) return a.a.Da(b2.content.childNodes);
                }
                return a.a.Da(b2.childNodes);
              }
              function e(a2) {
                return z.DocumentFragment ? a2 instanceof DocumentFragment : a2 && 11 === a2.nodeType;
              }
              function f(a2, b2, c2) {
                "string" === typeof b2.require ? T || z.require ? (T || z.require)([b2.require], function(a3) {
                  a3 && "object" === typeof a3 && a3.Xd && a3["default"] && (a3 = a3["default"]);
                  c2(a3);
                }) : a2("Uses require, but no AMD loader is present") : c2(b2);
              }
              function g(a2) {
                return function(b2) {
                  throw Error("Component '" + a2 + "': " + b2);
                };
              }
              var h = {};
              a.j.register = function(b2, c2) {
                if (!c2) throw Error("Invalid configuration for " + b2);
                if (a.j.tb(b2)) throw Error("Component " + b2 + " is already registered");
                h[b2] = c2;
              };
              a.j.tb = function(a2) {
                return Object.prototype.hasOwnProperty.call(h, a2);
              };
              a.j.unregister = function(b2) {
                delete h[b2];
                a.j.Bc(b2);
              };
              a.j.Fc = { getConfig: function(b2, c2) {
                c2(a.j.tb(b2) ? h[b2] : null);
              }, loadComponent: function(a2, c2, d2) {
                var e2 = g(a2);
                f(e2, c2, function(c3) {
                  b(a2, e2, c3, d2);
                });
              }, loadTemplate: function(b2, c2, f2) {
                b2 = g(b2);
                if ("string" === typeof c2) f2(a.a.wa(c2));
                else if (c2 instanceof Array) f2(c2);
                else if (e(c2)) f2(a.a.la(c2.childNodes));
                else if (c2.element) if (c2 = c2.element, z.HTMLElement ? c2 instanceof HTMLElement : c2 && c2.tagName && 1 === c2.nodeType) f2(d(c2));
                else if ("string" === typeof c2) {
                  var h2 = v.getElementById(c2);
                  h2 ? f2(d(h2)) : b2("Cannot find element with ID " + c2);
                } else b2("Unknown element type: " + c2);
                else b2("Unknown template value: " + c2);
              }, loadViewModel: function(a2, b2, d2) {
                c(g(a2), b2, d2);
              } };
              var m = "createViewModel";
              a.b("components.register", a.j.register);
              a.b("components.isRegistered", a.j.tb);
              a.b("components.unregister", a.j.unregister);
              a.b("components.defaultLoader", a.j.Fc);
              a.j.loaders.push(a.j.Fc);
              a.j.dd = h;
            })();
            (function() {
              function b(b2, e) {
                var f = b2.getAttribute("params");
                if (f) {
                  var f = c.parseBindingsString(f, e, b2, { valueAccessors: true, bindingParams: true }), f = a.a.Ia(f, function(c2) {
                    return a.o(c2, null, { l: b2 });
                  }), g = a.a.Ia(
                    f,
                    function(c2) {
                      var e2 = c2.v();
                      return c2.ja() ? a.o({ read: function() {
                        return a.a.f(c2());
                      }, write: a.ab(e2) && function(a2) {
                        c2()(a2);
                      }, l: b2 }) : e2;
                    }
                  );
                  Object.prototype.hasOwnProperty.call(g, "$raw") || (g.$raw = f);
                  return g;
                }
                return { $raw: {} };
              }
              a.j.getComponentNameForNode = function(b2) {
                var c2 = a.a.R(b2);
                if (a.j.tb(c2) && (-1 != c2.indexOf("-") || "[object HTMLUnknownElement]" == "" + b2 || 8 >= a.a.W && b2.tagName === c2)) return c2;
              };
              a.j.tc = function(c2, e, f, g) {
                if (1 === e.nodeType) {
                  var h = a.j.getComponentNameForNode(e);
                  if (h) {
                    c2 = c2 || {};
                    if (c2.component) throw Error('Cannot use the "component" binding on a custom element matching a component');
                    var m = { name: h, params: b(e, f) };
                    c2.component = g ? function() {
                      return m;
                    } : m;
                  }
                }
                return c2;
              };
              var c = new a.ga();
              9 > a.a.W && (a.j.register = /* @__PURE__ */ (function(a2) {
                return function(b2) {
                  return a2.apply(this, arguments);
                };
              })(a.j.register), v.createDocumentFragment = /* @__PURE__ */ (function(b2) {
                return function() {
                  var c2 = b2(), f = a.j.dd, g;
                  for (g in f) ;
                  return c2;
                };
              })(v.createDocumentFragment));
            })();
            (function() {
              function b(b2, c2, d2) {
                c2 = c2.template;
                if (!c2) throw Error("Component '" + b2 + "' has no template");
                b2 = a.a.Da(c2);
                a.h.xa(d2, b2);
              }
              function c(a2, b2, c2) {
                var d2 = a2.createViewModel;
                return d2 ? d2.call(
                  a2,
                  b2,
                  c2
                ) : b2;
              }
              var d = 0;
              a.c.component = { init: function(e, f, g, h, m) {
                function k() {
                  var a2 = l && l.dispose;
                  "function" === typeof a2 && a2.call(l);
                  n && n.s();
                  q = l = n = null;
                }
                var l, q, n, r = a.a.la(a.h.childNodes(e));
                a.h.Fa(e);
                a.a.J.oa(e, k);
                a.o(function() {
                  var g2 = a.a.f(f()), h2, u;
                  "string" === typeof g2 ? h2 = g2 : (h2 = a.a.f(g2.name), u = a.a.f(g2.params));
                  if (!h2) throw Error("No component name specified");
                  var p2 = a.i.Db(e, m), A = q = ++d;
                  a.j.get(h2, function(d2) {
                    if (q === A) {
                      k();
                      if (!d2) throw Error("Unknown component '" + h2 + "'");
                      b(h2, d2, e);
                      var f2 = c(d2, u, { element: e, templateNodes: r });
                      d2 = p2.createChildContext(f2, { extend: function(a2) {
                        a2.$component = f2;
                        a2.$componentTemplateNodes = r;
                      } });
                      f2 && f2.koDescendantsComplete && (n = a.i.subscribe(e, a.i.qa, f2.koDescendantsComplete, f2));
                      l = f2;
                      a.Qa(d2, e);
                    }
                  });
                }, null, { l: e });
                return { controlsDescendantBindings: true };
              } };
              a.h.ea.component = true;
            })();
            var W = { "class": "className", "for": "htmlFor" };
            a.c.attr = { update: function(b, c) {
              var d = a.a.f(c()) || {};
              a.a.P(d, function(c2, d2) {
                d2 = a.a.f(d2);
                var g = c2.indexOf(":"), g = "lookupNamespaceURI" in b && 0 < g && b.lookupNamespaceURI(c2.substr(0, g)), h = false === d2 || null === d2 || d2 === p;
                h ? g ? b.removeAttributeNS(g, c2) : b.removeAttribute(c2) : d2 = d2.toString();
                8 >= a.a.W && c2 in W ? (c2 = W[c2], h ? b.removeAttribute(c2) : b[c2] = d2) : h || (g ? b.setAttributeNS(g, c2, d2) : b.setAttribute(c2, d2));
                "name" === c2 && a.a.Yc(b, h ? "" : d2);
              });
            } };
            (function() {
              a.c.checked = { after: ["value", "attr"], init: function(b, c, d) {
                function e() {
                  var e2 = b.checked, f2 = g();
                  if (!a.S.$a() && (e2 || !m && !a.S.ra())) {
                    var k2 = a.u.G(c);
                    if (l) {
                      var n2 = q ? k2.v() : k2, A = r;
                      r = f2;
                      A !== f2 ? e2 && (a.a.Pa(n2, f2, true), a.a.Pa(n2, A, false)) : a.a.Pa(n2, f2, e2);
                      q && a.ab(k2) && k2(n2);
                    } else h && (f2 === p ? f2 = e2 : e2 || (f2 = p)), a.m.gb(
                      k2,
                      d,
                      "checked",
                      f2,
                      true
                    );
                  }
                }
                function f() {
                  var d2 = a.a.f(c()), e2 = g();
                  l ? (b.checked = null != d2 && 0 <= a.a.A(d2, e2), r = e2) : b.checked = h && e2 === p ? !!d2 : g() === d2;
                }
                var g = a.yb(function() {
                  if (d.has("checkedValue")) return a.a.f(d.get("checkedValue"));
                  if (n) return d.has("value") ? a.a.f(d.get("value")) : b.value;
                }), h = "checkbox" == b.type, m = "radio" == b.type;
                if (h || m) {
                  var k = c(), l = h && a.a.f(k) instanceof Array, q = !(l && k.push && k.splice), n = m || l, r = l ? g() : p;
                  m && !b.name && a.c.uniqueName.init(b, function() {
                    return true;
                  });
                  a.o(e, null, { l: b });
                  a.a.B(b, "click", e);
                  a.o(
                    f,
                    null,
                    { l: b }
                  );
                  k = p;
                }
              } };
              a.m.ya.checked = true;
              a.c.checkedValue = { update: function(b, c) {
                b.value = a.a.f(c());
              } };
            })();
            a.c["class"] = { update: function(b, c) {
              var d = a.a.Eb(a.a.f(c()));
              a.a.Fb(b, b.__ko__cssValue, false);
              b.__ko__cssValue = d;
              a.a.Fb(b, d, true);
            } };
            a.c.css = { update: function(b, c) {
              var d = a.a.f(c());
              null !== d && "object" == typeof d ? a.a.P(d, function(c2, d2) {
                d2 = a.a.f(d2);
                a.a.Fb(b, c2, d2);
              }) : a.c["class"].update(b, c);
            } };
            a.c.enable = { update: function(b, c) {
              var d = a.a.f(c());
              d && b.disabled ? b.removeAttribute("disabled") : d || b.disabled || (b.disabled = true);
            } };
            a.c.disable = { update: function(b, c) {
              a.c.enable.update(b, function() {
                return !a.a.f(c());
              });
            } };
            a.c.event = { init: function(b, c, d, e, f) {
              var g = c() || {};
              a.a.P(g, function(g2) {
                "string" == typeof g2 && a.a.B(b, g2, function(b2) {
                  var k, l = c()[g2];
                  if (l) {
                    try {
                      var q = a.a.la(arguments);
                      e = f.$data;
                      q.unshift(e);
                      k = l.apply(e, q);
                    } finally {
                      true !== k && (b2.preventDefault ? b2.preventDefault() : b2.returnValue = false);
                    }
                    false === d.get(g2 + "Bubble") && (b2.cancelBubble = true, b2.stopPropagation && b2.stopPropagation());
                  }
                });
              });
            } };
            a.c.foreach = { Rc: function(b) {
              return function() {
                var c = b(), d = a.a.bc(c);
                if (!d || "number" == typeof d.length) return { foreach: c, templateEngine: a.ba.Oa };
                a.a.f(c);
                return { foreach: d.data, as: d.as, noChildContext: d.noChildContext, includeDestroyed: d.includeDestroyed, afterAdd: d.afterAdd, beforeRemove: d.beforeRemove, afterRender: d.afterRender, beforeMove: d.beforeMove, afterMove: d.afterMove, templateEngine: a.ba.Oa };
              };
            }, init: function(b, c) {
              return a.c.template.init(b, a.c.foreach.Rc(c));
            }, update: function(b, c, d, e, f) {
              return a.c.template.update(b, a.c.foreach.Rc(c), d, e, f);
            } };
            a.m.Ta.foreach = false;
            a.h.ea.foreach = true;
            a.c.hasfocus = { init: function(b, c, d) {
              function e(e2) {
                b.__ko_hasfocusUpdating = true;
                var f2 = b.ownerDocument;
                if ("activeElement" in f2) {
                  var g2;
                  try {
                    g2 = f2.activeElement;
                  } catch (l) {
                    g2 = f2.body;
                  }
                  e2 = g2 === b;
                }
                f2 = c();
                a.m.gb(f2, d, "hasfocus", e2, true);
                b.__ko_hasfocusLastValue = e2;
                b.__ko_hasfocusUpdating = false;
              }
              var f = e.bind(null, true), g = e.bind(null, false);
              a.a.B(b, "focus", f);
              a.a.B(b, "focusin", f);
              a.a.B(b, "blur", g);
              a.a.B(b, "focusout", g);
              b.__ko_hasfocusLastValue = false;
            }, update: function(b, c) {
              var d = !!a.a.f(c());
              b.__ko_hasfocusUpdating || b.__ko_hasfocusLastValue === d || (d ? b.focus() : b.blur(), !d && b.__ko_hasfocusLastValue && b.ownerDocument.body.focus(), a.u.G(a.a.Gb, null, [b, d ? "focusin" : "focusout"]));
            } };
            a.m.ya.hasfocus = true;
            a.c.hasFocus = a.c.hasfocus;
            a.m.ya.hasFocus = "hasfocus";
            a.c.html = { init: function() {
              return { controlsDescendantBindings: true };
            }, update: function(b, c) {
              a.a.fc(b, c());
            } };
            (function() {
              function b(b2, d, e) {
                a.c[b2] = { init: function(b3, c, h, m, k) {
                  var l, q, n = {}, r, y, p2;
                  if (d) {
                    m = h.get("as");
                    var u = h.get("noChildContext");
                    p2 = !(m && u);
                    n = { as: m, noChildContext: u, exportDependencies: p2 };
                  }
                  y = (r = "render" == h.get("completeOn")) || h.has(a.i.qa);
                  a.o(function() {
                    var h2 = a.a.f(c()), m2 = !e !== !h2, u2 = !q, t2;
                    if (p2 || m2 !== l) {
                      y && (k = a.i.Db(b3, k));
                      if (m2) {
                        if (!d || p2) n.dataDependency = a.S.o();
                        t2 = d ? k.createChildContext("function" == typeof h2 ? h2 : c, n) : a.S.ra() ? k.extend(null, n) : k;
                      }
                      u2 && a.S.ra() && (q = a.a.Da(a.h.childNodes(b3), true));
                      m2 ? (u2 || a.h.xa(b3, a.a.Da(q)), a.Qa(t2, b3)) : (a.h.Fa(b3), r || a.i.ma(b3, a.i.H));
                      l = m2;
                    }
                  }, null, { l: b3 });
                  return { controlsDescendantBindings: true };
                } };
                a.m.Ta[b2] = false;
                a.h.ea[b2] = true;
              }
              b("if");
              b("ifnot", false, true);
              b("with", true);
            })();
            a.c.let = { init: function(b, c, d, e, f) {
              c = f.extend(c);
              a.Qa(c, b);
              return { controlsDescendantBindings: true };
            } };
            a.h.ea.let = true;
            var Q = {};
            a.c.options = { init: function(b) {
              if ("select" !== a.a.R(b)) throw Error("options binding applies only to SELECT elements");
              for (; 0 < b.length; ) b.remove(0);
              return { controlsDescendantBindings: true };
            }, update: function(b, c, d) {
              function e() {
                return a.a.lb(b.options, function(a2) {
                  return a2.selected;
                });
              }
              function f(a2, b2, c2) {
                var d2 = typeof b2;
                return "function" == d2 ? b2(a2) : "string" == d2 ? a2[b2] : c2;
              }
              function g(c2, d2) {
                if (y && l) a.i.ma(b, a.i.H);
                else if (r.length) {
                  var e2 = 0 <= a.a.A(r, a.w.M(d2[0]));
                  a.a.Zc(d2[0], e2);
                  y && !e2 && a.u.G(a.a.Gb, null, [b, "change"]);
                }
              }
              var h = b.multiple, m = 0 != b.length && h ? b.scrollTop : null, k = a.a.f(c()), l = d.get("valueAllowUnset") && d.has("value"), q = d.get("optionsIncludeDestroyed");
              c = {};
              var n, r = [];
              l || (h ? r = a.a.Nb(e(), a.w.M) : 0 <= b.selectedIndex && r.push(a.w.M(b.options[b.selectedIndex])));
              k && ("undefined" == typeof k.length && (k = [k]), n = a.a.lb(k, function(b2) {
                return q || b2 === p || null === b2 || !a.a.f(b2._destroy);
              }), d.has("optionsCaption") && (k = a.a.f(d.get("optionsCaption")), null !== k && k !== p && n.unshift(Q)));
              var y = false;
              c.beforeRemove = function(a2) {
                b.removeChild(a2);
              };
              k = g;
              d.has("optionsAfterRender") && "function" == typeof d.get("optionsAfterRender") && (k = function(b2, c2) {
                g(0, c2);
                a.u.G(d.get("optionsAfterRender"), null, [c2[0], b2 !== Q ? b2 : p]);
              });
              a.a.ec(b, n, function(c2, e2, g2) {
                g2.length && (r = !l && g2[0].selected ? [a.w.M(g2[0])] : [], y = true);
                e2 = b.ownerDocument.createElement("option");
                c2 === Q ? (a.a.Cb(e2, d.get("optionsCaption")), a.w.fb(e2, p)) : (g2 = f(c2, d.get("optionsValue"), c2), a.w.fb(e2, a.a.f(g2)), c2 = f(c2, d.get("optionsText"), g2), a.a.Cb(e2, c2));
                return [e2];
              }, c, k);
              if (!l) {
                var C;
                h ? C = r.length && e().length < r.length : C = r.length && 0 <= b.selectedIndex ? a.w.M(b.options[b.selectedIndex]) !== r[0] : r.length || 0 <= b.selectedIndex;
                C && a.u.G(a.a.Gb, null, [b, "change"]);
              }
              (l || a.S.$a()) && a.i.ma(b, a.i.H);
              a.a.wd(b);
              m && 20 < Math.abs(m - b.scrollTop) && (b.scrollTop = m);
            } };
            a.c.options.$b = a.a.g.Z();
            a.c.selectedOptions = { init: function(b, c, d) {
              function e() {
                var e2 = c(), f2 = [];
                a.a.D(b.getElementsByTagName("option"), function(b2) {
                  b2.selected && f2.push(a.w.M(b2));
                });
                a.m.gb(
                  e2,
                  d,
                  "selectedOptions",
                  f2
                );
              }
              function f() {
                var d2 = a.a.f(c()), e2 = b.scrollTop;
                d2 && "number" == typeof d2.length && a.a.D(b.getElementsByTagName("option"), function(b2) {
                  var c2 = 0 <= a.a.A(d2, a.w.M(b2));
                  b2.selected != c2 && a.a.Zc(b2, c2);
                });
                b.scrollTop = e2;
              }
              if ("select" != a.a.R(b)) throw Error("selectedOptions binding applies only to SELECT elements");
              var g;
              a.i.subscribe(b, a.i.H, function() {
                g ? e() : (a.a.B(b, "change", e), g = a.o(f, null, { l: b }));
              }, null, { notifyImmediately: true });
            }, update: function() {
            } };
            a.m.ya.selectedOptions = true;
            a.c.style = { update: function(b, c) {
              var d = a.a.f(c() || {});
              a.a.P(d, function(c2, d2) {
                d2 = a.a.f(d2);
                if (null === d2 || d2 === p || false === d2) d2 = "";
                if (w) w(b).css(c2, d2);
                else if (/^--/.test(c2)) b.style.setProperty(c2, d2);
                else {
                  c2 = c2.replace(/-(\w)/g, function(a2, b2) {
                    return b2.toUpperCase();
                  });
                  var g = b.style[c2];
                  b.style[c2] = d2;
                  d2 === g || b.style[c2] != g || isNaN(d2) || (b.style[c2] = d2 + "px");
                }
              });
            } };
            a.c.submit = { init: function(b, c, d, e, f) {
              if ("function" != typeof c()) throw Error("The value for a submit binding must be a function");
              a.a.B(b, "submit", function(a2) {
                var d2, e2 = c();
                try {
                  d2 = e2.call(f.$data, b);
                } finally {
                  true !== d2 && (a2.preventDefault ? a2.preventDefault() : a2.returnValue = false);
                }
              });
            } };
            a.c.text = { init: function() {
              return { controlsDescendantBindings: true };
            }, update: function(b, c) {
              a.a.Cb(b, c());
            } };
            a.h.ea.text = true;
            (function() {
              if (z && z.navigator) {
                var b = function(a2) {
                  if (a2) return parseFloat(a2[1]);
                }, c = z.navigator.userAgent, d, e, f, g, h;
                (d = z.opera && z.opera.version && parseInt(z.opera.version())) || (h = b(c.match(/Edge\/([^ ]+)$/))) || b(c.match(/Chrome\/([^ ]+)/)) || (e = b(c.match(/Version\/([^ ]+) Safari/))) || (f = b(c.match(/Firefox\/([^ ]+)/))) || (g = a.a.W || b(c.match(/MSIE ([^ ]+)/))) || (g = b(c.match(/rv:([^ )]+)/)));
              }
              if (8 <= g && 10 > g) var m = a.a.g.Z(), k = a.a.g.Z(), l = function(b2) {
                var c2 = this.activeElement;
                (c2 = c2 && a.a.g.get(c2, k)) && c2(b2);
              }, q = function(b2, c2) {
                var d2 = b2.ownerDocument;
                a.a.g.get(d2, m) || (a.a.g.set(d2, m, true), a.a.B(d2, "selectionchange", l));
                a.a.g.set(b2, k, c2);
              };
              a.c.textInput = { init: function(b2, c2, k2) {
                function l2(c3, d2) {
                  a.a.B(b2, c3, d2);
                }
                function m2() {
                  var d2 = a.a.f(c2());
                  if (null === d2 || d2 === p) d2 = "";
                  z2 !== p && d2 === z2 ? a.a.setTimeout(m2, 4) : b2.value !== d2 && (D2 = true, b2.value = d2, D2 = false, w2 = b2.value);
                }
                function t2() {
                  v2 || (z2 = b2.value, v2 = a.a.setTimeout(
                    A,
                    4
                  ));
                }
                function A() {
                  clearTimeout(v2);
                  z2 = v2 = p;
                  var d2 = b2.value;
                  w2 !== d2 && (w2 = d2, a.m.gb(c2(), k2, "textInput", d2));
                }
                var w2 = b2.value, v2, z2, B2 = 9 == a.a.W ? t2 : A, D2 = false;
                g && l2("keypress", A);
                11 > g && l2("propertychange", function(a2) {
                  D2 || "value" !== a2.propertyName || B2(a2);
                });
                8 == g && (l2("keyup", A), l2("keydown", A));
                q && (q(b2, B2), l2("dragend", t2));
                (!g || 9 <= g) && l2("input", B2);
                5 > e && "textarea" === a.a.R(b2) ? (l2("keydown", t2), l2("paste", t2), l2("cut", t2)) : 11 > d ? l2("keydown", t2) : 4 > f ? (l2("DOMAutoComplete", A), l2("dragdrop", A), l2("drop", A)) : h && "number" === b2.type && l2("keydown", t2);
                l2(
                  "change",
                  A
                );
                l2("blur", A);
                a.o(m2, null, { l: b2 });
              } };
              a.m.ya.textInput = true;
              a.c.textinput = { preprocess: function(a2, b2, c2) {
                c2("textInput", a2);
              } };
            })();
            a.c.uniqueName = { init: function(b, c) {
              if (c()) {
                var d = "ko_unique_" + ++a.c.uniqueName.rd;
                a.a.Yc(b, d);
              }
            } };
            a.c.uniqueName.rd = 0;
            a.c.using = { init: function(b, c, d, e, f) {
              var g;
              d.has("as") && (g = { as: d.get("as"), noChildContext: d.get("noChildContext") });
              c = f.createChildContext(c, g);
              a.Qa(c, b);
              return { controlsDescendantBindings: true };
            } };
            a.h.ea.using = true;
            a.c.value = { init: function(b, c, d) {
              var e = a.a.R(b), f = "input" == e;
              if (!f || "checkbox" != b.type && "radio" != b.type) {
                var g = [], h = d.get("valueUpdate"), m = false, k = null;
                h && ("string" == typeof h ? g = [h] : g = a.a.wc(h), a.a.Ra(g, "change"));
                var l = function() {
                  k = null;
                  m = false;
                  var e2 = c(), f2 = a.w.M(b);
                  a.m.gb(e2, d, "value", f2);
                };
                !a.a.W || !f || "text" != b.type || "off" == b.autocomplete || b.form && "off" == b.form.autocomplete || -1 != a.a.A(g, "propertychange") || (a.a.B(b, "propertychange", function() {
                  m = true;
                }), a.a.B(b, "focus", function() {
                  m = false;
                }), a.a.B(b, "blur", function() {
                  m && l();
                }));
                a.a.D(g, function(c2) {
                  var d2 = l;
                  a.a.Ud(c2, "after") && (d2 = function() {
                    k = a.w.M(b);
                    a.a.setTimeout(l, 0);
                  }, c2 = c2.substring(5));
                  a.a.B(b, c2, d2);
                });
                var q;
                q = f && "file" == b.type ? function() {
                  var d2 = a.a.f(c());
                  null === d2 || d2 === p || "" === d2 ? b.value = "" : a.u.G(l);
                } : function() {
                  var f2 = a.a.f(c()), g2 = a.w.M(b);
                  if (null !== k && f2 === k) a.a.setTimeout(q, 0);
                  else if (f2 !== g2 || g2 === p) "select" === e ? (g2 = d.get("valueAllowUnset"), a.w.fb(b, f2, g2), g2 || f2 === a.w.M(b) || a.u.G(l)) : a.w.fb(b, f2);
                };
                if ("select" === e) {
                  var n;
                  a.a.B(b, "change", function() {
                    n && l();
                  });
                  a.i.subscribe(b, a.i.H, function() {
                    n ? d.get("valueAllowUnset") ? q() : l() : n = a.o(q, null, { l: b });
                  }, null, { notifyImmediately: true });
                } else a.a.B(b, "change", l), a.o(q, null, { l: b });
              } else a.kb(b, { checkedValue: c });
            }, update: function() {
            } };
            a.m.ya.value = true;
            a.c.visible = { update: function(b, c) {
              var d = a.a.f(c()), e = "none" != b.style.display;
              d && !e ? b.style.display = "" : !d && e && (b.style.display = "none");
            } };
            a.c.hidden = { update: function(b, c) {
              a.c.visible.update(b, function() {
                return !a.a.f(c());
              });
            } };
            (function(b) {
              a.c[b] = { init: function(c, d, e, f, g) {
                return a.c.event.init.call(
                  this,
                  c,
                  function() {
                    var a2 = {};
                    a2[b] = d();
                    return a2;
                  },
                  e,
                  f,
                  g
                );
              } };
            })("click");
            a.ca = function() {
            };
            a.ca.prototype.renderTemplateSource = function() {
              throw Error("Override renderTemplateSource");
            };
            a.ca.prototype.createJavaScriptEvaluatorBlock = function() {
              throw Error("Override createJavaScriptEvaluatorBlock");
            };
            a.ca.prototype.makeTemplateSource = function(b, c) {
              if ("string" == typeof b) {
                c = c || v;
                var d = c.getElementById(b);
                if (!d) throw Error("Cannot find template with ID " + b);
                return new a.C.F(d);
              }
              if (1 == b.nodeType || 8 == b.nodeType) return new a.C.ia(b);
              throw Error("Unknown template type: " + b);
            };
            a.ca.prototype.renderTemplate = function(a2, c, d, e) {
              a2 = this.makeTemplateSource(a2, e);
              return this.renderTemplateSource(a2, c, d, e);
            };
            a.ca.prototype.isTemplateRewritten = function(a2, c) {
              return false === this.allowTemplateRewriting ? true : this.makeTemplateSource(a2, c).data("isRewritten");
            };
            a.ca.prototype.rewriteTemplate = function(a2, c, d) {
              a2 = this.makeTemplateSource(a2, d);
              c = c(a2.text());
              a2.text(c);
              a2.data("isRewritten", true);
            };
            a.b("templateEngine", a.ca);
            a.kc = /* @__PURE__ */ (function() {
              function b(b2, c2, d2, h) {
                b2 = a.m.ac(b2);
                for (var m = a.m.Ta, k = 0; k < b2.length; k++) {
                  var l = b2[k].key;
                  if (Object.prototype.hasOwnProperty.call(m, l)) {
                    var q = m[l];
                    if ("function" === typeof q) {
                      if (l = q(b2[k].value)) throw Error(l);
                    } else if (!q) throw Error("This template engine does not support the '" + l + "' binding within its templates");
                  }
                }
                d2 = "ko.__tr_ambtns(function($context,$element){return(function(){return{ " + a.m.wb(b2, { valueAccessors: true }) + " } })()},'" + d2.toLowerCase() + "')";
                return h.createJavaScriptEvaluatorBlock(d2) + c2;
              }
              var c = /(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'|[^>]*))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi, d = /\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;
              return { xd: function(b2, c2, d2) {
                c2.isTemplateRewritten(b2, d2) || c2.rewriteTemplate(b2, function(b3) {
                  return a.kc.Ld(b3, c2);
                }, d2);
              }, Ld: function(a2, f) {
                return a2.replace(c, function(a3, c2, d2, e, l) {
                  return b(l, c2, d2, f);
                }).replace(d, function(a3, c2) {
                  return b(c2, "<!-- ko -->", "#comment", f);
                });
              }, md: function(b2, c2) {
                return a.aa.Yb(function(d2, h) {
                  var m = d2.nextSibling;
                  m && m.nodeName.toLowerCase() === c2 && a.kb(m, b2, h);
                });
              } };
            })();
            a.b("__tr_ambtns", a.kc.md);
            (function() {
              a.C = {};
              a.C.F = function(b2) {
                if (this.F = b2) {
                  var c2 = a.a.R(b2);
                  this.cb = "script" === c2 ? 1 : "textarea" === c2 ? 2 : "template" == c2 && b2.content && 11 === b2.content.nodeType ? 3 : 4;
                }
              };
              a.C.F.prototype.text = function() {
                var b2 = 1 === this.cb ? "text" : 2 === this.cb ? "value" : "innerHTML";
                if (0 == arguments.length) return this.F[b2];
                var c2 = arguments[0];
                "innerHTML" === b2 ? a.a.fc(this.F, c2) : this.F[b2] = c2;
              };
              var b = a.a.g.Z() + "_";
              a.C.F.prototype.data = function(c2) {
                if (1 === arguments.length) return a.a.g.get(this.F, b + c2);
                a.a.g.set(this.F, b + c2, arguments[1]);
              };
              var c = a.a.g.Z();
              a.C.F.prototype.nodes = function() {
                var b2 = this.F;
                if (0 == arguments.length) {
                  var e = a.a.g.get(b2, c) || {}, f = e.nb || (3 === this.cb ? b2.content : 4 === this.cb ? b2 : p);
                  if (!f || e.jd) {
                    var g = this.text();
                    g && g !== e.eb && (f = a.a.Md(g, b2.ownerDocument), a.a.g.set(b2, c, { nb: f, eb: g, jd: true }));
                  }
                  return f;
                }
                e = arguments[0];
                this.cb !== p && this.text("");
                a.a.g.set(b2, c, { nb: e });
              };
              a.C.ia = function(a2) {
                this.F = a2;
              };
              a.C.ia.prototype = new a.C.F();
              a.C.ia.prototype.constructor = a.C.ia;
              a.C.ia.prototype.text = function() {
                if (0 == arguments.length) {
                  var b2 = a.a.g.get(this.F, c) || {};
                  b2.eb === p && b2.nb && (b2.eb = b2.nb.innerHTML);
                  return b2.eb;
                }
                a.a.g.set(
                  this.F,
                  c,
                  { eb: arguments[0] }
                );
              };
              a.b("templateSources", a.C);
              a.b("templateSources.domElement", a.C.F);
              a.b("templateSources.anonymousTemplate", a.C.ia);
            })();
            (function() {
              function b(b2, c2, d2) {
                var e2;
                for (c2 = a.h.nextSibling(c2); b2 && (e2 = b2) !== c2; ) b2 = a.h.nextSibling(e2), d2(e2, b2);
              }
              function c(c2, d2) {
                if (c2.length) {
                  var e2 = c2[0], f2 = c2[c2.length - 1], g2 = e2.parentNode, h2 = a.ga.instance, m2 = h2.preprocessNode;
                  if (m2) {
                    b(e2, f2, function(a2, b2) {
                      var c3 = a2.previousSibling, d3 = m2.call(h2, a2);
                      d3 && (a2 === e2 && (e2 = d3[0] || b2), a2 === f2 && (f2 = d3[d3.length - 1] || c3));
                    });
                    c2.length = 0;
                    if (!e2) return;
                    e2 === f2 ? c2.push(e2) : (c2.push(e2, f2), a.a.Wa(c2, g2));
                  }
                  b(e2, f2, function(b2) {
                    1 !== b2.nodeType && 8 !== b2.nodeType || a.vc(d2, b2);
                  });
                  b(e2, f2, function(b2) {
                    1 !== b2.nodeType && 8 !== b2.nodeType || a.aa.cd(b2, [d2]);
                  });
                  a.a.Wa(c2, g2);
                }
              }
              function d(a2) {
                return a2.nodeType ? a2 : 0 < a2.length ? a2[0] : null;
              }
              function e(b2, e2, f2, h2, m2) {
                m2 = m2 || {};
                var p2 = (b2 && d(b2) || f2 || {}).ownerDocument, C = m2.templateEngine || g;
                a.kc.xd(f2, C, p2);
                f2 = C.renderTemplate(f2, h2, m2, p2);
                if ("number" != typeof f2.length || 0 < f2.length && "number" != typeof f2[0].nodeType) throw Error("Template engine must return an array of DOM nodes");
                p2 = false;
                switch (e2) {
                  case "replaceChildren":
                    a.h.xa(
                      b2,
                      f2
                    );
                    p2 = true;
                    break;
                  case "replaceNode":
                    a.a.Xc(b2, f2);
                    p2 = true;
                    break;
                  case "ignoreTargetNode":
                    break;
                  default:
                    throw Error("Unknown renderMode: " + e2);
                }
                p2 && (c(f2, h2), m2.afterRender && a.u.G(m2.afterRender, null, [f2, h2[m2.as || "$data"]]), "replaceChildren" == e2 && a.i.ma(b2, a.i.H));
                return f2;
              }
              function f(b2, c2, d2) {
                return a.O(b2) ? b2() : "function" === typeof b2 ? b2(c2, d2) : b2;
              }
              var g;
              a.gc = function(b2) {
                if (b2 != p && !(b2 instanceof a.ca)) throw Error("templateEngine must inherit from ko.templateEngine");
                g = b2;
              };
              a.dc = function(b2, c2, h2, n, m2) {
                h2 = h2 || {};
                if ((h2.templateEngine || g) == p) throw Error("Set a template engine before calling renderTemplate");
                m2 = m2 || "replaceChildren";
                if (n) {
                  var y = d(n);
                  return a.$(function() {
                    var g2 = c2 && c2 instanceof a.fa ? c2 : new a.fa(c2, null, null, null, { exportDependencies: true }), p2 = f(b2, g2.$data, g2), g2 = e(n, m2, p2, g2, h2);
                    "replaceNode" == m2 && (n = g2, y = d(n));
                  }, null, { Ua: function() {
                    return !y || !a.a.Tb(y);
                  }, l: y && "replaceNode" == m2 ? y.parentNode : y });
                }
                return a.aa.Yb(function(d2) {
                  a.dc(b2, c2, h2, d2, "replaceNode");
                });
              };
              a.Qd = function(b2, d2, g2, h2, m2) {
                function y(a2) {
                  B2.push(a2);
                  if (!D2) {
                    D2 = true;
                    try {
                      for (; B2.length; ) try {
                        t2(
                          d2.v(),
                          B2[0]
                        );
                      } finally {
                        B2.shift();
                      }
                    } finally {
                      D2 = false;
                    }
                  }
                }
                function t2(b3, c2) {
                  a.u.G(a.a.ec, null, [h2, b3, w2, g2, u, c2]);
                  a.i.ma(h2, a.i.H);
                }
                function u(a2, b3) {
                  c(b3, A);
                  g2.afterRender && g2.afterRender(b3, a2);
                  A = null;
                }
                function w2(a2, c2) {
                  A = m2.createChildContext(a2, { as: v2, noChildContext: g2.noChildContext, extend: function(a3) {
                    a3.$index = c2;
                    v2 && (a3[v2 + "Index"] = c2);
                  } });
                  var d3 = f(b2, a2, A);
                  return e(h2, "ignoreTargetNode", d3, A, g2);
                }
                var A, v2 = g2.as, z2 = false === g2.includeDestroyed || a.options.foreachHidesDestroyed && !g2.includeDestroyed;
                if (z2 || g2.beforeRemove || !a.Pc(d2)) return a.$(function() {
                  var b3 = a.a.f(d2) || [];
                  "undefined" == typeof b3.length && (b3 = [b3]);
                  z2 && (b3 = a.a.lb(b3, function(b4) {
                    return b4 === p || null === b4 || !a.a.f(b4._destroy);
                  }));
                  t2(b3);
                }, null, { l: h2 });
                var B2 = [], D2 = false, E2 = d2.subscribe(y, null, "arrayChange");
                E2.l(h2);
                y();
                return E2;
              };
              var h = a.a.g.Z(), m = a.a.g.Z();
              a.c.template = { init: function(b2, c2) {
                var d2 = a.a.f(c2());
                if ("string" == typeof d2 || "name" in d2) a.h.Fa(b2);
                else if ("nodes" in d2) {
                  d2 = d2.nodes || [];
                  if (a.O(d2)) throw Error('The "nodes" option must be a plain, non-observable array.');
                  var e2 = d2[0] && d2[0].parentNode;
                  e2 && a.a.g.get(e2, m) || (e2 = a.a.Zb(d2), a.a.g.set(e2, m, true));
                  new a.C.ia(b2).nodes(e2);
                } else if (d2 = a.h.childNodes(b2), 0 < d2.length) e2 = a.a.Zb(d2), new a.C.ia(b2).nodes(e2);
                else throw Error("Anonymous template defined, but no template content was provided");
                return { controlsDescendantBindings: true };
              }, update: function(b2, c2, d2, e2, f2) {
                var g2 = c2();
                c2 = a.a.f(g2);
                d2 = true;
                e2 = null;
                "string" == typeof c2 ? c2 = {} : (g2 = "name" in c2 ? c2.name : b2, "if" in c2 && (d2 = a.a.f(c2["if"])), d2 && "ifnot" in c2 && (d2 = !a.a.f(c2.ifnot)));
                d2 && !g2 && (d2 = false);
                var m2 = a.a.g.get(b2, h);
                m2 && "function" == typeof m2.s && m2.s();
                "foreach" in c2 ? e2 = a.Qd(g2, d2 && c2.foreach || [], c2, b2, f2) : d2 ? (d2 = f2, "data" in c2 && (d2 = f2.createChildContext(c2.data, { as: c2.as, noChildContext: c2.noChildContext, exportDependencies: true })), e2 = a.dc(g2, d2, c2, b2)) : a.h.Fa(b2);
                a.a.g.set(b2, h, !e2 || e2.ja && !e2.ja() ? p : e2);
              } };
              a.m.Ta.template = function(b2) {
                b2 = a.m.ac(b2);
                return 1 == b2.length && b2[0].unknown || a.m.Id(b2, "name") ? null : "This template engine does not support anonymous templates nested within its templates";
              };
              a.h.ea.template = true;
            })();
            a.b("setTemplateEngine", a.gc);
            a.b("renderTemplate", a.dc);
            a.a.Kc = function(a2, c, d) {
              if (a2.length && c.length) {
                var e, f, g, h, m;
                for (e = f = 0; (!d || e < d) && (h = a2[f]); ++f) {
                  for (g = 0; m = c[g]; ++g) if (h.value === m.value) {
                    h.moved = m.index;
                    m.moved = h.index;
                    c.splice(g, 1);
                    e = g = 0;
                    break;
                  }
                  e += g;
                }
              }
            };
            a.a.Qb = /* @__PURE__ */ (function() {
              function b(b2, d, e, f, g) {
                var h = Math.min, m = Math.max, k = [], l, p2 = b2.length, n, r = d.length, t2 = r - p2 || 1, C = p2 + r + 1, u, v2, w2;
                for (l = 0; l <= p2; l++) for (v2 = u, k.push(u = []), w2 = h(r, l + t2), n = m(0, l - 1); n <= w2; n++) u[n] = n ? l ? b2[l - 1] === d[n - 1] ? v2[n - 1] : h(v2[n] || C, u[n - 1] || C) + 1 : n + 1 : l + 1;
                h = [];
                m = [];
                t2 = [];
                l = p2;
                for (n = r; l || n; ) r = k[l][n] - 1, n && r === k[l][n - 1] ? m.push(h[h.length] = { status: e, value: d[--n], index: n }) : l && r === k[l - 1][n] ? t2.push(h[h.length] = { status: f, value: b2[--l], index: l }) : (--n, --l, g.sparse || h.push({ status: "retained", value: d[n] }));
                a.a.Kc(t2, m, !g.dontLimitMoves && 10 * p2);
                return h.reverse();
              }
              return function(a2, d, e) {
                e = "boolean" === typeof e ? { dontLimitMoves: e } : e || {};
                a2 = a2 || [];
                d = d || [];
                return a2.length < d.length ? b(a2, d, "added", "deleted", e) : b(d, a2, "deleted", "added", e);
              };
            })();
            a.b("utils.compareArrays", a.a.Qb);
            (function() {
              function b(b2, c2, d2, h, m) {
                var k = [], l = a.$(function() {
                  var l2 = c2(d2, m, a.a.Wa(
                    k,
                    b2
                  )) || [];
                  0 < k.length && (a.a.Xc(k, l2), h && a.u.G(h, null, [d2, l2, m]));
                  k.length = 0;
                  a.a.Ob(k, l2);
                }, null, { l: b2, Ua: function() {
                  return !a.a.kd(k);
                } });
                return { Y: k, $: l.ja() ? l : p };
              }
              var c = a.a.g.Z(), d = a.a.g.Z();
              a.a.ec = function(e, f, g, h, m, k) {
                function l(b2) {
                  x = { Ba: b2, Ha: a.va(w2++) };
                  v2.push(x);
                  t2 || (I2[w2 - 1] = x);
                }
                function q(b2) {
                  x = r[b2];
                  w2 !== x.Ha.v() && (D2[x.Ha.v()] = x, E2[w2] = x);
                  x.Ha(w2++);
                  a.a.Wa(x.Y, e);
                  v2.push(x);
                }
                function n(b2, c2) {
                  if (b2) for (var d2 = 0, e2 = c2.length; d2 < e2; d2++) c2[d2] && a.a.D(c2[d2].Y, function(a2) {
                    b2(a2, d2, c2[d2].Ba);
                  });
                }
                f = f || [];
                "undefined" == typeof f.length && (f = [f]);
                h = h || {};
                var r = a.a.g.get(e, c), t2 = !r, v2 = [], u = 0, w2 = 0, A = [], z2 = [], B2 = [], D2 = [], E2 = [], I2 = [], x, J2 = 0;
                if (t2) a.a.D(f, l);
                else {
                  if (!k || r && r._countWaitingForRemove) {
                    var F = a.a.Nb(r, function(a2) {
                      return a2.Ba;
                    });
                    k = a.a.Qb(F, f, { dontLimitMoves: h.dontLimitMoves, sparse: true });
                  }
                  for (var F = 0, G2, H2, K2; G2 = k[F]; F++) switch (H2 = G2.moved, K2 = G2.index, G2.status) {
                    case "deleted":
                      for (; u < K2; ) q(u++);
                      H2 === p && (x = r[u], x.$ && (x.$.s(), x.$ = p), a.a.Wa(x.Y, e).length && (h.beforeRemove && (v2.push(x), J2++, x.Ba === d ? x = null : B2[x.Ha.v()] = x), x && A.push.apply(A, x.Y)));
                      u++;
                      break;
                    case "added":
                      for (; w2 < K2; ) q(u++);
                      H2 !== p ? (z2.push(v2.length), q(H2)) : l(G2.value);
                  }
                  for (; w2 < f.length; ) q(u++);
                  v2._countWaitingForRemove = J2;
                }
                a.a.g.set(e, c, v2);
                n(h.beforeMove, D2);
                a.a.D(A, h.beforeRemove ? a.pa : a.removeNode);
                var M, P, N;
                try {
                  N = e.ownerDocument.activeElement;
                } catch (O2) {
                }
                if (z2.length) for (; (F = z2.shift()) != p; ) {
                  x = v2[F];
                  for (M = p; F; ) if ((P = v2[--F].Y) && P.length) {
                    M = P[P.length - 1];
                    break;
                  }
                  for (f = 0; u = x.Y[f]; M = u, f++) a.h.Xb(e, u, M);
                }
                for (F = 0; x = v2[F]; F++) {
                  x.Y || a.a.extend(x, b(e, g, x.Ba, m, x.Ha));
                  for (f = 0; u = x.Y[f]; M = u, f++) a.h.Xb(e, u, M);
                  !x.Ed && m && (m(x.Ba, x.Y, x.Ha), x.Ed = true, M = x.Y[x.Y.length - 1]);
                }
                N && e.ownerDocument.activeElement != N && "function" === typeof N.focus && N.focus();
                n(h.beforeRemove, B2);
                for (F = 0; F < B2.length; ++F) B2[F] && (B2[F].Ba = d);
                n(h.afterMove, E2);
                n(h.afterAdd, I2);
              };
            })();
            a.b("utils.setDomNodeChildrenFromArrayMapping", a.a.ec);
            a.ba = function() {
              this.allowTemplateRewriting = false;
            };
            a.ba.prototype = new a.ca();
            a.ba.prototype.constructor = a.ba;
            a.ba.prototype.renderTemplateSource = function(b, c, d, e) {
              if (c = (9 > a.a.W ? 0 : b.nodes) ? b.nodes() : null) return a.a.la(c.cloneNode(true).childNodes);
              b = b.text();
              return a.a.wa(b, e);
            };
            a.ba.Oa = new a.ba();
            a.gc(a.ba.Oa);
            a.b("nativeTemplateEngine", a.ba);
            (function() {
              a.bb = function() {
                var a2 = this.Hd = (function() {
                  if (!w || !w.tmpl) return 0;
                  try {
                    if (0 <= w.tmpl.tag.tmpl.open.toString().indexOf("__")) return 2;
                  } catch (a3) {
                  }
                  return 1;
                })();
                this.renderTemplateSource = function(b2, e, f, g) {
                  g = g || v;
                  f = f || {};
                  if (2 > a2) throw Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");
                  var h = b2.data("precompiled");
                  h || (h = b2.text() || "", h = w.template(null, "{{ko_with $item.koBindingContext}}" + h + "{{/ko_with}}"), b2.data("precompiled", h));
                  b2 = [e.$data];
                  e = w.extend({ koBindingContext: e }, f.templateOptions);
                  e = w.tmpl(h, b2, e);
                  e.appendTo(g.createElement("div"));
                  w.fragments = {};
                  return e;
                };
                this.createJavaScriptEvaluatorBlock = function(a3) {
                  return "{{ko_code ((function() { return " + a3 + " })()) }}";
                };
                this.addTemplate = function(a3, b2) {
                  v.write("<script type='text/html' id='" + a3 + "'>" + b2 + "<\/script>");
                };
                0 < a2 && (w.tmpl.tag.ko_code = { open: "__.push($1 || '');" }, w.tmpl.tag.ko_with = { open: "with($1) {", close: "} " });
              };
              a.bb.prototype = new a.ca();
              a.bb.prototype.constructor = a.bb;
              var b = new a.bb();
              0 < b.Hd && a.gc(b);
              a.b("jqueryTmplTemplateEngine", a.bb);
            })();
          });
        })();
      })();
    }
  });

  // node_modules/@popperjs/core/lib/index.js
  var lib_exports = {};
  __export(lib_exports, {
    afterMain: () => afterMain,
    afterRead: () => afterRead,
    afterWrite: () => afterWrite,
    applyStyles: () => applyStyles_default,
    arrow: () => arrow_default,
    auto: () => auto,
    basePlacements: () => basePlacements,
    beforeMain: () => beforeMain,
    beforeRead: () => beforeRead,
    beforeWrite: () => beforeWrite,
    bottom: () => bottom,
    clippingParents: () => clippingParents,
    computeStyles: () => computeStyles_default,
    createPopper: () => createPopper3,
    createPopperBase: () => createPopper,
    createPopperLite: () => createPopper2,
    detectOverflow: () => detectOverflow,
    end: () => end,
    eventListeners: () => eventListeners_default,
    flip: () => flip_default,
    hide: () => hide_default,
    left: () => left,
    main: () => main,
    modifierPhases: () => modifierPhases,
    offset: () => offset_default,
    placements: () => placements,
    popper: () => popper,
    popperGenerator: () => popperGenerator,
    popperOffsets: () => popperOffsets_default,
    preventOverflow: () => preventOverflow_default,
    read: () => read,
    reference: () => reference,
    right: () => right,
    start: () => start,
    top: () => top,
    variationPlacements: () => variationPlacements,
    viewport: () => viewport,
    write: () => write
  });

  // node_modules/@popperjs/core/lib/enums.js
  var top = "top";
  var bottom = "bottom";
  var right = "right";
  var left = "left";
  var auto = "auto";
  var basePlacements = [top, bottom, right, left];
  var start = "start";
  var end = "end";
  var clippingParents = "clippingParents";
  var viewport = "viewport";
  var popper = "popper";
  var reference = "reference";
  var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
    return acc.concat([placement + "-" + start, placement + "-" + end]);
  }, []);
  var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
    return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
  }, []);
  var beforeRead = "beforeRead";
  var read = "read";
  var afterRead = "afterRead";
  var beforeMain = "beforeMain";
  var main = "main";
  var afterMain = "afterMain";
  var beforeWrite = "beforeWrite";
  var write = "write";
  var afterWrite = "afterWrite";
  var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

  // node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
  function getNodeName(element) {
    return element ? (element.nodeName || "").toLowerCase() : null;
  }

  // node_modules/@popperjs/core/lib/dom-utils/getWindow.js
  function getWindow(node) {
    if (node == null) {
      return window;
    }
    if (node.toString() !== "[object Window]") {
      var ownerDocument = node.ownerDocument;
      return ownerDocument ? ownerDocument.defaultView || window : window;
    }
    return node;
  }

  // node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
  function isElement(node) {
    var OwnElement = getWindow(node).Element;
    return node instanceof OwnElement || node instanceof Element;
  }
  function isHTMLElement(node) {
    var OwnElement = getWindow(node).HTMLElement;
    return node instanceof OwnElement || node instanceof HTMLElement;
  }
  function isShadowRoot(node) {
    if (typeof ShadowRoot === "undefined") {
      return false;
    }
    var OwnElement = getWindow(node).ShadowRoot;
    return node instanceof OwnElement || node instanceof ShadowRoot;
  }

  // node_modules/@popperjs/core/lib/modifiers/applyStyles.js
  function applyStyles(_ref) {
    var state = _ref.state;
    Object.keys(state.elements).forEach(function(name) {
      var style = state.styles[name] || {};
      var attributes = state.attributes[name] || {};
      var element = state.elements[name];
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(name2) {
        var value = attributes[name2];
        if (value === false) {
          element.removeAttribute(name2);
        } else {
          element.setAttribute(name2, value === true ? "" : value);
        }
      });
    });
  }
  function effect(_ref2) {
    var state = _ref2.state;
    var initialStyles = {
      popper: {
        position: state.options.strategy,
        left: "0",
        top: "0",
        margin: "0"
      },
      arrow: {
        position: "absolute"
      },
      reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;
    if (state.elements.arrow) {
      Object.assign(state.elements.arrow.style, initialStyles.arrow);
    }
    return function() {
      Object.keys(state.elements).forEach(function(name) {
        var element = state.elements[name];
        var attributes = state.attributes[name] || {};
        var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
        var style = styleProperties.reduce(function(style2, property) {
          style2[property] = "";
          return style2;
        }, {});
        if (!isHTMLElement(element) || !getNodeName(element)) {
          return;
        }
        Object.assign(element.style, style);
        Object.keys(attributes).forEach(function(attribute) {
          element.removeAttribute(attribute);
        });
      });
    };
  }
  var applyStyles_default = {
    name: "applyStyles",
    enabled: true,
    phase: "write",
    fn: applyStyles,
    effect,
    requires: ["computeStyles"]
  };

  // node_modules/@popperjs/core/lib/utils/getBasePlacement.js
  function getBasePlacement(placement) {
    return placement.split("-")[0];
  }

  // node_modules/@popperjs/core/lib/utils/math.js
  var max = Math.max;
  var min = Math.min;
  var round = Math.round;

  // node_modules/@popperjs/core/lib/utils/userAgent.js
  function getUAString() {
    var uaData = navigator.userAgentData;
    if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
      return uaData.brands.map(function(item) {
        return item.brand + "/" + item.version;
      }).join(" ");
    }
    return navigator.userAgent;
  }

  // node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js
  function isLayoutViewport() {
    return !/^((?!chrome|android).)*safari/i.test(getUAString());
  }

  // node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
  function getBoundingClientRect(element, includeScale, isFixedStrategy) {
    if (includeScale === void 0) {
      includeScale = false;
    }
    if (isFixedStrategy === void 0) {
      isFixedStrategy = false;
    }
    var clientRect = element.getBoundingClientRect();
    var scaleX = 1;
    var scaleY = 1;
    if (includeScale && isHTMLElement(element)) {
      scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
      scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
    }
    var _ref = isElement(element) ? getWindow(element) : window, visualViewport = _ref.visualViewport;
    var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
    var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
    var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
    var width = clientRect.width / scaleX;
    var height = clientRect.height / scaleY;
    return {
      width,
      height,
      top: y,
      right: x + width,
      bottom: y + height,
      left: x,
      x,
      y
    };
  }

  // node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
  function getLayoutRect(element) {
    var clientRect = getBoundingClientRect(element);
    var width = element.offsetWidth;
    var height = element.offsetHeight;
    if (Math.abs(clientRect.width - width) <= 1) {
      width = clientRect.width;
    }
    if (Math.abs(clientRect.height - height) <= 1) {
      height = clientRect.height;
    }
    return {
      x: element.offsetLeft,
      y: element.offsetTop,
      width,
      height
    };
  }

  // node_modules/@popperjs/core/lib/dom-utils/contains.js
  function contains(parent, child) {
    var rootNode = child.getRootNode && child.getRootNode();
    if (parent.contains(child)) {
      return true;
    } else if (rootNode && isShadowRoot(rootNode)) {
      var next = child;
      do {
        if (next && parent.isSameNode(next)) {
          return true;
        }
        next = next.parentNode || next.host;
      } while (next);
    }
    return false;
  }

  // node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
  function getComputedStyle2(element) {
    return getWindow(element).getComputedStyle(element);
  }

  // node_modules/@popperjs/core/lib/dom-utils/isTableElement.js
  function isTableElement(element) {
    return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
  }

  // node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
  function getDocumentElement(element) {
    return ((isElement(element) ? element.ownerDocument : (
      // $FlowFixMe[prop-missing]
      element.document
    )) || window.document).documentElement;
  }

  // node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
  function getParentNode(element) {
    if (getNodeName(element) === "html") {
      return element;
    }
    return (
      // this is a quicker (but less type safe) way to save quite some bytes from the bundle
      // $FlowFixMe[incompatible-return]
      // $FlowFixMe[prop-missing]
      element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
      element.parentNode || // DOM Element detected
      (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
      // $FlowFixMe[incompatible-call]: HTMLElement is a Node
      getDocumentElement(element)
    );
  }

  // node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
  function getTrueOffsetParent(element) {
    if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
    getComputedStyle2(element).position === "fixed") {
      return null;
    }
    return element.offsetParent;
  }
  function getContainingBlock(element) {
    var isFirefox = /firefox/i.test(getUAString());
    var isIE = /Trident/i.test(getUAString());
    if (isIE && isHTMLElement(element)) {
      var elementCss = getComputedStyle2(element);
      if (elementCss.position === "fixed") {
        return null;
      }
    }
    var currentNode = getParentNode(element);
    if (isShadowRoot(currentNode)) {
      currentNode = currentNode.host;
    }
    while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
      var css = getComputedStyle2(currentNode);
      if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
        return currentNode;
      } else {
        currentNode = currentNode.parentNode;
      }
    }
    return null;
  }
  function getOffsetParent(element) {
    var window2 = getWindow(element);
    var offsetParent = getTrueOffsetParent(element);
    while (offsetParent && isTableElement(offsetParent) && getComputedStyle2(offsetParent).position === "static") {
      offsetParent = getTrueOffsetParent(offsetParent);
    }
    if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle2(offsetParent).position === "static")) {
      return window2;
    }
    return offsetParent || getContainingBlock(element) || window2;
  }

  // node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
  function getMainAxisFromPlacement(placement) {
    return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
  }

  // node_modules/@popperjs/core/lib/utils/within.js
  function within(min2, value, max2) {
    return max(min2, min(value, max2));
  }
  function withinMaxClamp(min2, value, max2) {
    var v = within(min2, value, max2);
    return v > max2 ? max2 : v;
  }

  // node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
  function getFreshSideObject() {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  }

  // node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
  function mergePaddingObject(paddingObject) {
    return Object.assign({}, getFreshSideObject(), paddingObject);
  }

  // node_modules/@popperjs/core/lib/utils/expandToHashMap.js
  function expandToHashMap(value, keys) {
    return keys.reduce(function(hashMap, key) {
      hashMap[key] = value;
      return hashMap;
    }, {});
  }

  // node_modules/@popperjs/core/lib/modifiers/arrow.js
  var toPaddingObject = function toPaddingObject2(padding, state) {
    padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
      placement: state.placement
    })) : padding;
    return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  };
  function arrow(_ref) {
    var _state$modifiersData$;
    var state = _ref.state, name = _ref.name, options = _ref.options;
    var arrowElement = state.elements.arrow;
    var popperOffsets2 = state.modifiersData.popperOffsets;
    var basePlacement = getBasePlacement(state.placement);
    var axis = getMainAxisFromPlacement(basePlacement);
    var isVertical = [left, right].indexOf(basePlacement) >= 0;
    var len = isVertical ? "height" : "width";
    if (!arrowElement || !popperOffsets2) {
      return;
    }
    var paddingObject = toPaddingObject(options.padding, state);
    var arrowRect = getLayoutRect(arrowElement);
    var minProp = axis === "y" ? top : left;
    var maxProp = axis === "y" ? bottom : right;
    var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
    var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
    var arrowOffsetParent = getOffsetParent(arrowElement);
    var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
    var centerToReference = endDiff / 2 - startDiff / 2;
    var min2 = paddingObject[minProp];
    var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
    var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
    var offset2 = within(min2, center, max2);
    var axisProp = axis;
    state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
  }
  function effect2(_ref2) {
    var state = _ref2.state, options = _ref2.options;
    var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
    if (arrowElement == null) {
      return;
    }
    if (typeof arrowElement === "string") {
      arrowElement = state.elements.popper.querySelector(arrowElement);
      if (!arrowElement) {
        return;
      }
    }
    if (!contains(state.elements.popper, arrowElement)) {
      return;
    }
    state.elements.arrow = arrowElement;
  }
  var arrow_default = {
    name: "arrow",
    enabled: true,
    phase: "main",
    fn: arrow,
    effect: effect2,
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"]
  };

  // node_modules/@popperjs/core/lib/utils/getVariation.js
  function getVariation(placement) {
    return placement.split("-")[1];
  }

  // node_modules/@popperjs/core/lib/modifiers/computeStyles.js
  var unsetSides = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };
  function roundOffsetsByDPR(_ref, win) {
    var x = _ref.x, y = _ref.y;
    var dpr = win.devicePixelRatio || 1;
    return {
      x: round(x * dpr) / dpr || 0,
      y: round(y * dpr) / dpr || 0
    };
  }
  function mapToStyles(_ref2) {
    var _Object$assign2;
    var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
    var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
    var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
      x,
      y
    }) : {
      x,
      y
    };
    x = _ref3.x;
    y = _ref3.y;
    var hasX = offsets.hasOwnProperty("x");
    var hasY = offsets.hasOwnProperty("y");
    var sideX = left;
    var sideY = top;
    var win = window;
    if (adaptive) {
      var offsetParent = getOffsetParent(popper2);
      var heightProp = "clientHeight";
      var widthProp = "clientWidth";
      if (offsetParent === getWindow(popper2)) {
        offsetParent = getDocumentElement(popper2);
        if (getComputedStyle2(offsetParent).position !== "static" && position === "absolute") {
          heightProp = "scrollHeight";
          widthProp = "scrollWidth";
        }
      }
      offsetParent = offsetParent;
      if (placement === top || (placement === left || placement === right) && variation === end) {
        sideY = bottom;
        var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : (
          // $FlowFixMe[prop-missing]
          offsetParent[heightProp]
        );
        y -= offsetY - popperRect.height;
        y *= gpuAcceleration ? 1 : -1;
      }
      if (placement === left || (placement === top || placement === bottom) && variation === end) {
        sideX = right;
        var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : (
          // $FlowFixMe[prop-missing]
          offsetParent[widthProp]
        );
        x -= offsetX - popperRect.width;
        x *= gpuAcceleration ? 1 : -1;
      }
    }
    var commonStyles = Object.assign({
      position
    }, adaptive && unsetSides);
    var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
      x,
      y
    }, getWindow(popper2)) : {
      x,
      y
    };
    x = _ref4.x;
    y = _ref4.y;
    if (gpuAcceleration) {
      var _Object$assign;
      return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
    }
    return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
  }
  function computeStyles(_ref5) {
    var state = _ref5.state, options = _ref5.options;
    var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
    var commonStyles = {
      placement: getBasePlacement(state.placement),
      variation: getVariation(state.placement),
      popper: state.elements.popper,
      popperRect: state.rects.popper,
      gpuAcceleration,
      isFixed: state.options.strategy === "fixed"
    };
    if (state.modifiersData.popperOffsets != null) {
      state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.popperOffsets,
        position: state.options.strategy,
        adaptive,
        roundOffsets
      })));
    }
    if (state.modifiersData.arrow != null) {
      state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.arrow,
        position: "absolute",
        adaptive: false,
        roundOffsets
      })));
    }
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
      "data-popper-placement": state.placement
    });
  }
  var computeStyles_default = {
    name: "computeStyles",
    enabled: true,
    phase: "beforeWrite",
    fn: computeStyles,
    data: {}
  };

  // node_modules/@popperjs/core/lib/modifiers/eventListeners.js
  var passive = {
    passive: true
  };
  function effect3(_ref) {
    var state = _ref.state, instance = _ref.instance, options = _ref.options;
    var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
    var window2 = getWindow(state.elements.popper);
    var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.addEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.addEventListener("resize", instance.update, passive);
    }
    return function() {
      if (scroll) {
        scrollParents.forEach(function(scrollParent) {
          scrollParent.removeEventListener("scroll", instance.update, passive);
        });
      }
      if (resize) {
        window2.removeEventListener("resize", instance.update, passive);
      }
    };
  }
  var eventListeners_default = {
    name: "eventListeners",
    enabled: true,
    phase: "write",
    fn: function fn() {
    },
    effect: effect3,
    data: {}
  };

  // node_modules/@popperjs/core/lib/utils/getOppositePlacement.js
  var hash = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, function(matched) {
      return hash[matched];
    });
  }

  // node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
  var hash2 = {
    start: "end",
    end: "start"
  };
  function getOppositeVariationPlacement(placement) {
    return placement.replace(/start|end/g, function(matched) {
      return hash2[matched];
    });
  }

  // node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js
  function getWindowScroll(node) {
    var win = getWindow(node);
    var scrollLeft = win.pageXOffset;
    var scrollTop = win.pageYOffset;
    return {
      scrollLeft,
      scrollTop
    };
  }

  // node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
  function getWindowScrollBarX(element) {
    return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
  }

  // node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
  function getViewportRect(element, strategy) {
    var win = getWindow(element);
    var html = getDocumentElement(element);
    var visualViewport = win.visualViewport;
    var width = html.clientWidth;
    var height = html.clientHeight;
    var x = 0;
    var y = 0;
    if (visualViewport) {
      width = visualViewport.width;
      height = visualViewport.height;
      var layoutViewport = isLayoutViewport();
      if (layoutViewport || !layoutViewport && strategy === "fixed") {
        x = visualViewport.offsetLeft;
        y = visualViewport.offsetTop;
      }
    }
    return {
      width,
      height,
      x: x + getWindowScrollBarX(element),
      y
    };
  }

  // node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js
  function getDocumentRect(element) {
    var _element$ownerDocumen;
    var html = getDocumentElement(element);
    var winScroll = getWindowScroll(element);
    var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
    var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
    var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
    var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
    var y = -winScroll.scrollTop;
    if (getComputedStyle2(body || html).direction === "rtl") {
      x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
    }
    return {
      width,
      height,
      x,
      y
    };
  }

  // node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js
  function isScrollParent(element) {
    var _getComputedStyle = getComputedStyle2(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
    return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
  }

  // node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
  function getScrollParent(node) {
    if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
      return node.ownerDocument.body;
    }
    if (isHTMLElement(node) && isScrollParent(node)) {
      return node;
    }
    return getScrollParent(getParentNode(node));
  }

  // node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
  function listScrollParents(element, list) {
    var _element$ownerDocumen;
    if (list === void 0) {
      list = [];
    }
    var scrollParent = getScrollParent(element);
    var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
    var win = getWindow(scrollParent);
    var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
    var updatedList = list.concat(target);
    return isBody ? updatedList : (
      // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
      updatedList.concat(listScrollParents(getParentNode(target)))
    );
  }

  // node_modules/@popperjs/core/lib/utils/rectToClientRect.js
  function rectToClientRect(rect) {
    return Object.assign({}, rect, {
      left: rect.x,
      top: rect.y,
      right: rect.x + rect.width,
      bottom: rect.y + rect.height
    });
  }

  // node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
  function getInnerBoundingClientRect(element, strategy) {
    var rect = getBoundingClientRect(element, false, strategy === "fixed");
    rect.top = rect.top + element.clientTop;
    rect.left = rect.left + element.clientLeft;
    rect.bottom = rect.top + element.clientHeight;
    rect.right = rect.left + element.clientWidth;
    rect.width = element.clientWidth;
    rect.height = element.clientHeight;
    rect.x = rect.left;
    rect.y = rect.top;
    return rect;
  }
  function getClientRectFromMixedType(element, clippingParent, strategy) {
    return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
  }
  function getClippingParents(element) {
    var clippingParents2 = listScrollParents(getParentNode(element));
    var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle2(element).position) >= 0;
    var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
    if (!isElement(clipperElement)) {
      return [];
    }
    return clippingParents2.filter(function(clippingParent) {
      return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
    });
  }
  function getClippingRect(element, boundary, rootBoundary, strategy) {
    var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
    var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
    var firstClippingParent = clippingParents2[0];
    var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
      var rect = getClientRectFromMixedType(element, clippingParent, strategy);
      accRect.top = max(rect.top, accRect.top);
      accRect.right = min(rect.right, accRect.right);
      accRect.bottom = min(rect.bottom, accRect.bottom);
      accRect.left = max(rect.left, accRect.left);
      return accRect;
    }, getClientRectFromMixedType(element, firstClippingParent, strategy));
    clippingRect.width = clippingRect.right - clippingRect.left;
    clippingRect.height = clippingRect.bottom - clippingRect.top;
    clippingRect.x = clippingRect.left;
    clippingRect.y = clippingRect.top;
    return clippingRect;
  }

  // node_modules/@popperjs/core/lib/utils/computeOffsets.js
  function computeOffsets(_ref) {
    var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
    var basePlacement = placement ? getBasePlacement(placement) : null;
    var variation = placement ? getVariation(placement) : null;
    var commonX = reference2.x + reference2.width / 2 - element.width / 2;
    var commonY = reference2.y + reference2.height / 2 - element.height / 2;
    var offsets;
    switch (basePlacement) {
      case top:
        offsets = {
          x: commonX,
          y: reference2.y - element.height
        };
        break;
      case bottom:
        offsets = {
          x: commonX,
          y: reference2.y + reference2.height
        };
        break;
      case right:
        offsets = {
          x: reference2.x + reference2.width,
          y: commonY
        };
        break;
      case left:
        offsets = {
          x: reference2.x - element.width,
          y: commonY
        };
        break;
      default:
        offsets = {
          x: reference2.x,
          y: reference2.y
        };
    }
    var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
    if (mainAxis != null) {
      var len = mainAxis === "y" ? "height" : "width";
      switch (variation) {
        case start:
          offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
          break;
        case end:
          offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
          break;
        default:
      }
    }
    return offsets;
  }

  // node_modules/@popperjs/core/lib/utils/detectOverflow.js
  function detectOverflow(state, options) {
    if (options === void 0) {
      options = {};
    }
    var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
    var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
    var altContext = elementContext === popper ? reference : popper;
    var popperRect = state.rects.popper;
    var element = state.elements[altBoundary ? altContext : elementContext];
    var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
    var referenceClientRect = getBoundingClientRect(state.elements.reference);
    var popperOffsets2 = computeOffsets({
      reference: referenceClientRect,
      element: popperRect,
      strategy: "absolute",
      placement
    });
    var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
    var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
    var overflowOffsets = {
      top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
      bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
      left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
      right: elementClientRect.right - clippingClientRect.right + paddingObject.right
    };
    var offsetData = state.modifiersData.offset;
    if (elementContext === popper && offsetData) {
      var offset2 = offsetData[placement];
      Object.keys(overflowOffsets).forEach(function(key) {
        var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
        var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
        overflowOffsets[key] += offset2[axis] * multiply;
      });
    }
    return overflowOffsets;
  }

  // node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js
  function computeAutoPlacement(state, options) {
    if (options === void 0) {
      options = {};
    }
    var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
    var variation = getVariation(placement);
    var placements2 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
      return getVariation(placement2) === variation;
    }) : basePlacements;
    var allowedPlacements = placements2.filter(function(placement2) {
      return allowedAutoPlacements.indexOf(placement2) >= 0;
    });
    if (allowedPlacements.length === 0) {
      allowedPlacements = placements2;
    }
    var overflows = allowedPlacements.reduce(function(acc, placement2) {
      acc[placement2] = detectOverflow(state, {
        placement: placement2,
        boundary,
        rootBoundary,
        padding
      })[getBasePlacement(placement2)];
      return acc;
    }, {});
    return Object.keys(overflows).sort(function(a, b) {
      return overflows[a] - overflows[b];
    });
  }

  // node_modules/@popperjs/core/lib/modifiers/flip.js
  function getExpandedFallbackPlacements(placement) {
    if (getBasePlacement(placement) === auto) {
      return [];
    }
    var oppositePlacement = getOppositePlacement(placement);
    return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
  }
  function flip(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    if (state.modifiersData[name]._skip) {
      return;
    }
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
    var preferredPlacement = state.options.placement;
    var basePlacement = getBasePlacement(preferredPlacement);
    var isBasePlacement = basePlacement === preferredPlacement;
    var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
    var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
      return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
        placement: placement2,
        boundary,
        rootBoundary,
        padding,
        flipVariations,
        allowedAutoPlacements
      }) : placement2);
    }, []);
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var checksMap = /* @__PURE__ */ new Map();
    var makeFallbackChecks = true;
    var firstFittingPlacement = placements2[0];
    for (var i = 0; i < placements2.length; i++) {
      var placement = placements2[i];
      var _basePlacement = getBasePlacement(placement);
      var isStartVariation = getVariation(placement) === start;
      var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
      var len = isVertical ? "width" : "height";
      var overflow = detectOverflow(state, {
        placement,
        boundary,
        rootBoundary,
        altBoundary,
        padding
      });
      var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
      if (referenceRect[len] > popperRect[len]) {
        mainVariationSide = getOppositePlacement(mainVariationSide);
      }
      var altVariationSide = getOppositePlacement(mainVariationSide);
      var checks = [];
      if (checkMainAxis) {
        checks.push(overflow[_basePlacement] <= 0);
      }
      if (checkAltAxis) {
        checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
      }
      if (checks.every(function(check) {
        return check;
      })) {
        firstFittingPlacement = placement;
        makeFallbackChecks = false;
        break;
      }
      checksMap.set(placement, checks);
    }
    if (makeFallbackChecks) {
      var numberOfChecks = flipVariations ? 3 : 1;
      var _loop = function _loop2(_i2) {
        var fittingPlacement = placements2.find(function(placement2) {
          var checks2 = checksMap.get(placement2);
          if (checks2) {
            return checks2.slice(0, _i2).every(function(check) {
              return check;
            });
          }
        });
        if (fittingPlacement) {
          firstFittingPlacement = fittingPlacement;
          return "break";
        }
      };
      for (var _i = numberOfChecks; _i > 0; _i--) {
        var _ret = _loop(_i);
        if (_ret === "break") break;
      }
    }
    if (state.placement !== firstFittingPlacement) {
      state.modifiersData[name]._skip = true;
      state.placement = firstFittingPlacement;
      state.reset = true;
    }
  }
  var flip_default = {
    name: "flip",
    enabled: true,
    phase: "main",
    fn: flip,
    requiresIfExists: ["offset"],
    data: {
      _skip: false
    }
  };

  // node_modules/@popperjs/core/lib/modifiers/hide.js
  function getSideOffsets(overflow, rect, preventedOffsets) {
    if (preventedOffsets === void 0) {
      preventedOffsets = {
        x: 0,
        y: 0
      };
    }
    return {
      top: overflow.top - rect.height - preventedOffsets.y,
      right: overflow.right - rect.width + preventedOffsets.x,
      bottom: overflow.bottom - rect.height + preventedOffsets.y,
      left: overflow.left - rect.width - preventedOffsets.x
    };
  }
  function isAnySideFullyClipped(overflow) {
    return [top, right, bottom, left].some(function(side) {
      return overflow[side] >= 0;
    });
  }
  function hide(_ref) {
    var state = _ref.state, name = _ref.name;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var preventedOffsets = state.modifiersData.preventOverflow;
    var referenceOverflow = detectOverflow(state, {
      elementContext: "reference"
    });
    var popperAltOverflow = detectOverflow(state, {
      altBoundary: true
    });
    var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
    var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
    var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
    var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
    state.modifiersData[name] = {
      referenceClippingOffsets,
      popperEscapeOffsets,
      isReferenceHidden,
      hasPopperEscaped
    };
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
      "data-popper-reference-hidden": isReferenceHidden,
      "data-popper-escaped": hasPopperEscaped
    });
  }
  var hide_default = {
    name: "hide",
    enabled: true,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: hide
  };

  // node_modules/@popperjs/core/lib/modifiers/offset.js
  function distanceAndSkiddingToXY(placement, rects, offset2) {
    var basePlacement = getBasePlacement(placement);
    var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
    var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
      placement
    })) : offset2, skidding = _ref[0], distance = _ref[1];
    skidding = skidding || 0;
    distance = (distance || 0) * invertDistance;
    return [left, right].indexOf(basePlacement) >= 0 ? {
      x: distance,
      y: skidding
    } : {
      x: skidding,
      y: distance
    };
  }
  function offset(_ref2) {
    var state = _ref2.state, options = _ref2.options, name = _ref2.name;
    var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
    var data = placements.reduce(function(acc, placement) {
      acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
      return acc;
    }, {});
    var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
    if (state.modifiersData.popperOffsets != null) {
      state.modifiersData.popperOffsets.x += x;
      state.modifiersData.popperOffsets.y += y;
    }
    state.modifiersData[name] = data;
  }
  var offset_default = {
    name: "offset",
    enabled: true,
    phase: "main",
    requires: ["popperOffsets"],
    fn: offset
  };

  // node_modules/@popperjs/core/lib/modifiers/popperOffsets.js
  function popperOffsets(_ref) {
    var state = _ref.state, name = _ref.name;
    state.modifiersData[name] = computeOffsets({
      reference: state.rects.reference,
      element: state.rects.popper,
      strategy: "absolute",
      placement: state.placement
    });
  }
  var popperOffsets_default = {
    name: "popperOffsets",
    enabled: true,
    phase: "read",
    fn: popperOffsets,
    data: {}
  };

  // node_modules/@popperjs/core/lib/utils/getAltAxis.js
  function getAltAxis(axis) {
    return axis === "x" ? "y" : "x";
  }

  // node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
  function preventOverflow(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
    var overflow = detectOverflow(state, {
      boundary,
      rootBoundary,
      padding,
      altBoundary
    });
    var basePlacement = getBasePlacement(state.placement);
    var variation = getVariation(state.placement);
    var isBasePlacement = !variation;
    var mainAxis = getMainAxisFromPlacement(basePlacement);
    var altAxis = getAltAxis(mainAxis);
    var popperOffsets2 = state.modifiersData.popperOffsets;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
      placement: state.placement
    })) : tetherOffset;
    var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
      mainAxis: tetherOffsetValue,
      altAxis: tetherOffsetValue
    } : Object.assign({
      mainAxis: 0,
      altAxis: 0
    }, tetherOffsetValue);
    var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
    var data = {
      x: 0,
      y: 0
    };
    if (!popperOffsets2) {
      return;
    }
    if (checkMainAxis) {
      var _offsetModifierState$;
      var mainSide = mainAxis === "y" ? top : left;
      var altSide = mainAxis === "y" ? bottom : right;
      var len = mainAxis === "y" ? "height" : "width";
      var offset2 = popperOffsets2[mainAxis];
      var min2 = offset2 + overflow[mainSide];
      var max2 = offset2 - overflow[altSide];
      var additive = tether ? -popperRect[len] / 2 : 0;
      var minLen = variation === start ? referenceRect[len] : popperRect[len];
      var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
      var arrowElement = state.elements.arrow;
      var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
        width: 0,
        height: 0
      };
      var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
      var arrowPaddingMin = arrowPaddingObject[mainSide];
      var arrowPaddingMax = arrowPaddingObject[altSide];
      var arrowLen = within(0, referenceRect[len], arrowRect[len]);
      var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
      var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
      var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
      var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
      var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
      var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
      var tetherMax = offset2 + maxOffset - offsetModifierValue;
      var preventedOffset = within(tether ? min(min2, tetherMin) : min2, offset2, tether ? max(max2, tetherMax) : max2);
      popperOffsets2[mainAxis] = preventedOffset;
      data[mainAxis] = preventedOffset - offset2;
    }
    if (checkAltAxis) {
      var _offsetModifierState$2;
      var _mainSide = mainAxis === "x" ? top : left;
      var _altSide = mainAxis === "x" ? bottom : right;
      var _offset = popperOffsets2[altAxis];
      var _len = altAxis === "y" ? "height" : "width";
      var _min = _offset + overflow[_mainSide];
      var _max = _offset - overflow[_altSide];
      var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
      var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
      var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
      var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
      var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
      popperOffsets2[altAxis] = _preventedOffset;
      data[altAxis] = _preventedOffset - _offset;
    }
    state.modifiersData[name] = data;
  }
  var preventOverflow_default = {
    name: "preventOverflow",
    enabled: true,
    phase: "main",
    fn: preventOverflow,
    requiresIfExists: ["offset"]
  };

  // node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
  function getHTMLElementScroll(element) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }

  // node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
  function getNodeScroll(node) {
    if (node === getWindow(node) || !isHTMLElement(node)) {
      return getWindowScroll(node);
    } else {
      return getHTMLElementScroll(node);
    }
  }

  // node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
  function isElementScaled(element) {
    var rect = element.getBoundingClientRect();
    var scaleX = round(rect.width) / element.offsetWidth || 1;
    var scaleY = round(rect.height) / element.offsetHeight || 1;
    return scaleX !== 1 || scaleY !== 1;
  }
  function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
    if (isFixed === void 0) {
      isFixed = false;
    }
    var isOffsetParentAnElement = isHTMLElement(offsetParent);
    var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
    var documentElement = getDocumentElement(offsetParent);
    var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
    var scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    var offsets = {
      x: 0,
      y: 0
    };
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
      if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
      isScrollParent(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }
      if (isHTMLElement(offsetParent)) {
        offsets = getBoundingClientRect(offsetParent, true);
        offsets.x += offsetParent.clientLeft;
        offsets.y += offsetParent.clientTop;
      } else if (documentElement) {
        offsets.x = getWindowScrollBarX(documentElement);
      }
    }
    return {
      x: rect.left + scroll.scrollLeft - offsets.x,
      y: rect.top + scroll.scrollTop - offsets.y,
      width: rect.width,
      height: rect.height
    };
  }

  // node_modules/@popperjs/core/lib/utils/orderModifiers.js
  function order(modifiers) {
    var map = /* @__PURE__ */ new Map();
    var visited = /* @__PURE__ */ new Set();
    var result = [];
    modifiers.forEach(function(modifier) {
      map.set(modifier.name, modifier);
    });
    function sort(modifier) {
      visited.add(modifier.name);
      var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
      requires.forEach(function(dep) {
        if (!visited.has(dep)) {
          var depModifier = map.get(dep);
          if (depModifier) {
            sort(depModifier);
          }
        }
      });
      result.push(modifier);
    }
    modifiers.forEach(function(modifier) {
      if (!visited.has(modifier.name)) {
        sort(modifier);
      }
    });
    return result;
  }
  function orderModifiers(modifiers) {
    var orderedModifiers = order(modifiers);
    return modifierPhases.reduce(function(acc, phase) {
      return acc.concat(orderedModifiers.filter(function(modifier) {
        return modifier.phase === phase;
      }));
    }, []);
  }

  // node_modules/@popperjs/core/lib/utils/debounce.js
  function debounce(fn2) {
    var pending;
    return function() {
      if (!pending) {
        pending = new Promise(function(resolve) {
          Promise.resolve().then(function() {
            pending = void 0;
            resolve(fn2());
          });
        });
      }
      return pending;
    };
  }

  // node_modules/@popperjs/core/lib/utils/mergeByName.js
  function mergeByName(modifiers) {
    var merged = modifiers.reduce(function(merged2, current) {
      var existing = merged2[current.name];
      merged2[current.name] = existing ? Object.assign({}, existing, current, {
        options: Object.assign({}, existing.options, current.options),
        data: Object.assign({}, existing.data, current.data)
      }) : current;
      return merged2;
    }, {});
    return Object.keys(merged).map(function(key) {
      return merged[key];
    });
  }

  // node_modules/@popperjs/core/lib/createPopper.js
  var DEFAULT_OPTIONS = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };
  function areValidElements() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return !args.some(function(element) {
      return !(element && typeof element.getBoundingClientRect === "function");
    });
  }
  function popperGenerator(generatorOptions) {
    if (generatorOptions === void 0) {
      generatorOptions = {};
    }
    var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers3 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
    return function createPopper4(reference2, popper2, options) {
      if (options === void 0) {
        options = defaultOptions;
      }
      var state = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
        modifiersData: {},
        elements: {
          reference: reference2,
          popper: popper2
        },
        attributes: {},
        styles: {}
      };
      var effectCleanupFns = [];
      var isDestroyed = false;
      var instance = {
        state,
        setOptions: function setOptions(setOptionsAction) {
          var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
          cleanupModifierEffects();
          state.options = Object.assign({}, defaultOptions, state.options, options2);
          state.scrollParents = {
            reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
            popper: listScrollParents(popper2)
          };
          var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers3, state.options.modifiers)));
          state.orderedModifiers = orderedModifiers.filter(function(m) {
            return m.enabled;
          });
          runModifierEffects();
          return instance.update();
        },
        // Sync update – it will always be executed, even if not necessary. This
        // is useful for low frequency updates where sync behavior simplifies the
        // logic.
        // For high frequency updates (e.g. `resize` and `scroll` events), always
        // prefer the async Popper#update method
        forceUpdate: function forceUpdate() {
          if (isDestroyed) {
            return;
          }
          var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
          if (!areValidElements(reference3, popper3)) {
            return;
          }
          state.rects = {
            reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
            popper: getLayoutRect(popper3)
          };
          state.reset = false;
          state.placement = state.options.placement;
          state.orderedModifiers.forEach(function(modifier) {
            return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
          });
          for (var index = 0; index < state.orderedModifiers.length; index++) {
            if (state.reset === true) {
              state.reset = false;
              index = -1;
              continue;
            }
            var _state$orderedModifie = state.orderedModifiers[index], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
            if (typeof fn2 === "function") {
              state = fn2({
                state,
                options: _options,
                name,
                instance
              }) || state;
            }
          }
        },
        // Async and optimistically optimized update – it will not be executed if
        // not necessary (debounced to run at most once-per-tick)
        update: debounce(function() {
          return new Promise(function(resolve) {
            instance.forceUpdate();
            resolve(state);
          });
        }),
        destroy: function destroy() {
          cleanupModifierEffects();
          isDestroyed = true;
        }
      };
      if (!areValidElements(reference2, popper2)) {
        return instance;
      }
      instance.setOptions(options).then(function(state2) {
        if (!isDestroyed && options.onFirstUpdate) {
          options.onFirstUpdate(state2);
        }
      });
      function runModifierEffects() {
        state.orderedModifiers.forEach(function(_ref) {
          var name = _ref.name, _ref$options = _ref.options, options2 = _ref$options === void 0 ? {} : _ref$options, effect4 = _ref.effect;
          if (typeof effect4 === "function") {
            var cleanupFn = effect4({
              state,
              name,
              instance,
              options: options2
            });
            var noopFn = function noopFn2() {
            };
            effectCleanupFns.push(cleanupFn || noopFn);
          }
        });
      }
      function cleanupModifierEffects() {
        effectCleanupFns.forEach(function(fn2) {
          return fn2();
        });
        effectCleanupFns = [];
      }
      return instance;
    };
  }
  var createPopper = /* @__PURE__ */ popperGenerator();

  // node_modules/@popperjs/core/lib/popper-lite.js
  var defaultModifiers = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default];
  var createPopper2 = /* @__PURE__ */ popperGenerator({
    defaultModifiers
  });

  // node_modules/@popperjs/core/lib/popper.js
  var defaultModifiers2 = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default, offset_default, flip_default, preventOverflow_default, arrow_default, hide_default];
  var createPopper3 = /* @__PURE__ */ popperGenerator({
    defaultModifiers: defaultModifiers2
  });

  // node_modules/bootstrap/dist/js/bootstrap.esm.js
  var elementMap = /* @__PURE__ */ new Map();
  var Data = {
    set(element, key, instance) {
      if (!elementMap.has(element)) {
        elementMap.set(element, /* @__PURE__ */ new Map());
      }
      const instanceMap = elementMap.get(element);
      if (!instanceMap.has(key) && instanceMap.size !== 0) {
        console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
        return;
      }
      instanceMap.set(key, instance);
    },
    get(element, key) {
      if (elementMap.has(element)) {
        return elementMap.get(element).get(key) || null;
      }
      return null;
    },
    remove(element, key) {
      if (!elementMap.has(element)) {
        return;
      }
      const instanceMap = elementMap.get(element);
      instanceMap.delete(key);
      if (instanceMap.size === 0) {
        elementMap.delete(element);
      }
    }
  };
  var MAX_UID = 1e6;
  var MILLISECONDS_MULTIPLIER = 1e3;
  var TRANSITION_END = "transitionend";
  var parseSelector = (selector) => {
    if (selector && window.CSS && window.CSS.escape) {
      selector = selector.replace(/#([^\s"#']+)/g, (match, id) => `#${CSS.escape(id)}`);
    }
    return selector;
  };
  var toType = (object) => {
    if (object === null || object === void 0) {
      return `${object}`;
    }
    return Object.prototype.toString.call(object).match(/\s([a-z]+)/i)[1].toLowerCase();
  };
  var getUID = (prefix) => {
    do {
      prefix += Math.floor(Math.random() * MAX_UID);
    } while (document.getElementById(prefix));
    return prefix;
  };
  var getTransitionDurationFromElement = (element) => {
    if (!element) {
      return 0;
    }
    let {
      transitionDuration,
      transitionDelay
    } = window.getComputedStyle(element);
    const floatTransitionDuration = Number.parseFloat(transitionDuration);
    const floatTransitionDelay = Number.parseFloat(transitionDelay);
    if (!floatTransitionDuration && !floatTransitionDelay) {
      return 0;
    }
    transitionDuration = transitionDuration.split(",")[0];
    transitionDelay = transitionDelay.split(",")[0];
    return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
  };
  var triggerTransitionEnd = (element) => {
    element.dispatchEvent(new Event(TRANSITION_END));
  };
  var isElement2 = (object) => {
    if (!object || typeof object !== "object") {
      return false;
    }
    if (typeof object.jquery !== "undefined") {
      object = object[0];
    }
    return typeof object.nodeType !== "undefined";
  };
  var getElement = (object) => {
    if (isElement2(object)) {
      return object.jquery ? object[0] : object;
    }
    if (typeof object === "string" && object.length > 0) {
      return document.querySelector(parseSelector(object));
    }
    return null;
  };
  var isVisible = (element) => {
    if (!isElement2(element) || element.getClientRects().length === 0) {
      return false;
    }
    const elementIsVisible = getComputedStyle(element).getPropertyValue("visibility") === "visible";
    const closedDetails = element.closest("details:not([open])");
    if (!closedDetails) {
      return elementIsVisible;
    }
    if (closedDetails !== element) {
      const summary = element.closest("summary");
      if (summary && summary.parentNode !== closedDetails) {
        return false;
      }
      if (summary === null) {
        return false;
      }
    }
    return elementIsVisible;
  };
  var isDisabled = (element) => {
    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
      return true;
    }
    if (element.classList.contains("disabled")) {
      return true;
    }
    if (typeof element.disabled !== "undefined") {
      return element.disabled;
    }
    return element.hasAttribute("disabled") && element.getAttribute("disabled") !== "false";
  };
  var findShadowRoot = (element) => {
    if (!document.documentElement.attachShadow) {
      return null;
    }
    if (typeof element.getRootNode === "function") {
      const root = element.getRootNode();
      return root instanceof ShadowRoot ? root : null;
    }
    if (element instanceof ShadowRoot) {
      return element;
    }
    if (!element.parentNode) {
      return null;
    }
    return findShadowRoot(element.parentNode);
  };
  var noop = () => {
  };
  var reflow = (element) => {
    element.offsetHeight;
  };
  var getjQuery = () => {
    if (window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")) {
      return window.jQuery;
    }
    return null;
  };
  var DOMContentLoadedCallbacks = [];
  var onDOMContentLoaded = (callback) => {
    if (document.readyState === "loading") {
      if (!DOMContentLoadedCallbacks.length) {
        document.addEventListener("DOMContentLoaded", () => {
          for (const callback2 of DOMContentLoadedCallbacks) {
            callback2();
          }
        });
      }
      DOMContentLoadedCallbacks.push(callback);
    } else {
      callback();
    }
  };
  var isRTL = () => document.documentElement.dir === "rtl";
  var defineJQueryPlugin = (plugin) => {
    onDOMContentLoaded(() => {
      const $ = getjQuery();
      if ($) {
        const name = plugin.NAME;
        const JQUERY_NO_CONFLICT = $.fn[name];
        $.fn[name] = plugin.jQueryInterface;
        $.fn[name].Constructor = plugin;
        $.fn[name].noConflict = () => {
          $.fn[name] = JQUERY_NO_CONFLICT;
          return plugin.jQueryInterface;
        };
      }
    });
  };
  var execute = (possibleCallback, args = [], defaultValue = possibleCallback) => {
    return typeof possibleCallback === "function" ? possibleCallback.call(...args) : defaultValue;
  };
  var executeAfterTransition = (callback, transitionElement, waitForTransition = true) => {
    if (!waitForTransition) {
      execute(callback);
      return;
    }
    const durationPadding = 5;
    const emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
    let called = false;
    const handler = ({
      target
    }) => {
      if (target !== transitionElement) {
        return;
      }
      called = true;
      transitionElement.removeEventListener(TRANSITION_END, handler);
      execute(callback);
    };
    transitionElement.addEventListener(TRANSITION_END, handler);
    setTimeout(() => {
      if (!called) {
        triggerTransitionEnd(transitionElement);
      }
    }, emulatedDuration);
  };
  var getNextActiveElement = (list, activeElement, shouldGetNext, isCycleAllowed) => {
    const listLength = list.length;
    let index = list.indexOf(activeElement);
    if (index === -1) {
      return !shouldGetNext && isCycleAllowed ? list[listLength - 1] : list[0];
    }
    index += shouldGetNext ? 1 : -1;
    if (isCycleAllowed) {
      index = (index + listLength) % listLength;
    }
    return list[Math.max(0, Math.min(index, listLength - 1))];
  };
  var namespaceRegex = /[^.]*(?=\..*)\.|.*/;
  var stripNameRegex = /\..*/;
  var stripUidRegex = /::\d+$/;
  var eventRegistry = {};
  var uidEvent = 1;
  var customEvents = {
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  };
  var nativeEvents = /* @__PURE__ */ new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
  function makeEventUid(element, uid) {
    return uid && `${uid}::${uidEvent++}` || element.uidEvent || uidEvent++;
  }
  function getElementEvents(element) {
    const uid = makeEventUid(element);
    element.uidEvent = uid;
    eventRegistry[uid] = eventRegistry[uid] || {};
    return eventRegistry[uid];
  }
  function bootstrapHandler(element, fn2) {
    return function handler(event) {
      hydrateObj(event, {
        delegateTarget: element
      });
      if (handler.oneOff) {
        EventHandler.off(element, event.type, fn2);
      }
      return fn2.apply(element, [event]);
    };
  }
  function bootstrapDelegationHandler(element, selector, fn2) {
    return function handler(event) {
      const domElements = element.querySelectorAll(selector);
      for (let {
        target
      } = event; target && target !== this; target = target.parentNode) {
        for (const domElement of domElements) {
          if (domElement !== target) {
            continue;
          }
          hydrateObj(event, {
            delegateTarget: target
          });
          if (handler.oneOff) {
            EventHandler.off(element, event.type, selector, fn2);
          }
          return fn2.apply(target, [event]);
        }
      }
    };
  }
  function findHandler(events, callable, delegationSelector = null) {
    return Object.values(events).find((event) => event.callable === callable && event.delegationSelector === delegationSelector);
  }
  function normalizeParameters(originalTypeEvent, handler, delegationFunction) {
    const isDelegated = typeof handler === "string";
    const callable = isDelegated ? delegationFunction : handler || delegationFunction;
    let typeEvent = getTypeEvent(originalTypeEvent);
    if (!nativeEvents.has(typeEvent)) {
      typeEvent = originalTypeEvent;
    }
    return [isDelegated, callable, typeEvent];
  }
  function addHandler(element, originalTypeEvent, handler, delegationFunction, oneOff) {
    if (typeof originalTypeEvent !== "string" || !element) {
      return;
    }
    let [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
    if (originalTypeEvent in customEvents) {
      const wrapFunction = (fn3) => {
        return function(event) {
          if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {
            return fn3.call(this, event);
          }
        };
      };
      callable = wrapFunction(callable);
    }
    const events = getElementEvents(element);
    const handlers = events[typeEvent] || (events[typeEvent] = {});
    const previousFunction = findHandler(handlers, callable, isDelegated ? handler : null);
    if (previousFunction) {
      previousFunction.oneOff = previousFunction.oneOff && oneOff;
      return;
    }
    const uid = makeEventUid(callable, originalTypeEvent.replace(namespaceRegex, ""));
    const fn2 = isDelegated ? bootstrapDelegationHandler(element, handler, callable) : bootstrapHandler(element, callable);
    fn2.delegationSelector = isDelegated ? handler : null;
    fn2.callable = callable;
    fn2.oneOff = oneOff;
    fn2.uidEvent = uid;
    handlers[uid] = fn2;
    element.addEventListener(typeEvent, fn2, isDelegated);
  }
  function removeHandler(element, events, typeEvent, handler, delegationSelector) {
    const fn2 = findHandler(events[typeEvent], handler, delegationSelector);
    if (!fn2) {
      return;
    }
    element.removeEventListener(typeEvent, fn2, Boolean(delegationSelector));
    delete events[typeEvent][fn2.uidEvent];
  }
  function removeNamespacedHandlers(element, events, typeEvent, namespace) {
    const storeElementEvent = events[typeEvent] || {};
    for (const [handlerKey, event] of Object.entries(storeElementEvent)) {
      if (handlerKey.includes(namespace)) {
        removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
      }
    }
  }
  function getTypeEvent(event) {
    event = event.replace(stripNameRegex, "");
    return customEvents[event] || event;
  }
  var EventHandler = {
    on(element, event, handler, delegationFunction) {
      addHandler(element, event, handler, delegationFunction, false);
    },
    one(element, event, handler, delegationFunction) {
      addHandler(element, event, handler, delegationFunction, true);
    },
    off(element, originalTypeEvent, handler, delegationFunction) {
      if (typeof originalTypeEvent !== "string" || !element) {
        return;
      }
      const [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
      const inNamespace = typeEvent !== originalTypeEvent;
      const events = getElementEvents(element);
      const storeElementEvent = events[typeEvent] || {};
      const isNamespace = originalTypeEvent.startsWith(".");
      if (typeof callable !== "undefined") {
        if (!Object.keys(storeElementEvent).length) {
          return;
        }
        removeHandler(element, events, typeEvent, callable, isDelegated ? handler : null);
        return;
      }
      if (isNamespace) {
        for (const elementEvent of Object.keys(events)) {
          removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
        }
      }
      for (const [keyHandlers, event] of Object.entries(storeElementEvent)) {
        const handlerKey = keyHandlers.replace(stripUidRegex, "");
        if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
          removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
        }
      }
    },
    trigger(element, event, args) {
      if (typeof event !== "string" || !element) {
        return null;
      }
      const $ = getjQuery();
      const typeEvent = getTypeEvent(event);
      const inNamespace = event !== typeEvent;
      let jQueryEvent = null;
      let bubbles = true;
      let nativeDispatch = true;
      let defaultPrevented = false;
      if (inNamespace && $) {
        jQueryEvent = $.Event(event, args);
        $(element).trigger(jQueryEvent);
        bubbles = !jQueryEvent.isPropagationStopped();
        nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
        defaultPrevented = jQueryEvent.isDefaultPrevented();
      }
      const evt = hydrateObj(new Event(event, {
        bubbles,
        cancelable: true
      }), args);
      if (defaultPrevented) {
        evt.preventDefault();
      }
      if (nativeDispatch) {
        element.dispatchEvent(evt);
      }
      if (evt.defaultPrevented && jQueryEvent) {
        jQueryEvent.preventDefault();
      }
      return evt;
    }
  };
  function hydrateObj(obj, meta = {}) {
    for (const [key, value] of Object.entries(meta)) {
      try {
        obj[key] = value;
      } catch (_unused) {
        Object.defineProperty(obj, key, {
          configurable: true,
          get() {
            return value;
          }
        });
      }
    }
    return obj;
  }
  function normalizeData(value) {
    if (value === "true") {
      return true;
    }
    if (value === "false") {
      return false;
    }
    if (value === Number(value).toString()) {
      return Number(value);
    }
    if (value === "" || value === "null") {
      return null;
    }
    if (typeof value !== "string") {
      return value;
    }
    try {
      return JSON.parse(decodeURIComponent(value));
    } catch (_unused) {
      return value;
    }
  }
  function normalizeDataKey(key) {
    return key.replace(/[A-Z]/g, (chr) => `-${chr.toLowerCase()}`);
  }
  var Manipulator = {
    setDataAttribute(element, key, value) {
      element.setAttribute(`data-bs-${normalizeDataKey(key)}`, value);
    },
    removeDataAttribute(element, key) {
      element.removeAttribute(`data-bs-${normalizeDataKey(key)}`);
    },
    getDataAttributes(element) {
      if (!element) {
        return {};
      }
      const attributes = {};
      const bsKeys = Object.keys(element.dataset).filter((key) => key.startsWith("bs") && !key.startsWith("bsConfig"));
      for (const key of bsKeys) {
        let pureKey = key.replace(/^bs/, "");
        pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1);
        attributes[pureKey] = normalizeData(element.dataset[key]);
      }
      return attributes;
    },
    getDataAttribute(element, key) {
      return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`));
    }
  };
  var Config = class {
    // Getters
    static get Default() {
      return {};
    }
    static get DefaultType() {
      return {};
    }
    static get NAME() {
      throw new Error('You have to implement the static method "NAME", for each component!');
    }
    _getConfig(config) {
      config = this._mergeConfigObj(config);
      config = this._configAfterMerge(config);
      this._typeCheckConfig(config);
      return config;
    }
    _configAfterMerge(config) {
      return config;
    }
    _mergeConfigObj(config, element) {
      const jsonConfig = isElement2(element) ? Manipulator.getDataAttribute(element, "config") : {};
      return {
        ...this.constructor.Default,
        ...typeof jsonConfig === "object" ? jsonConfig : {},
        ...isElement2(element) ? Manipulator.getDataAttributes(element) : {},
        ...typeof config === "object" ? config : {}
      };
    }
    _typeCheckConfig(config, configTypes = this.constructor.DefaultType) {
      for (const [property, expectedTypes] of Object.entries(configTypes)) {
        const value = config[property];
        const valueType = isElement2(value) ? "element" : toType(value);
        if (!new RegExp(expectedTypes).test(valueType)) {
          throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
        }
      }
    }
  };
  var VERSION = "5.3.8";
  var BaseComponent = class extends Config {
    constructor(element, config) {
      super();
      element = getElement(element);
      if (!element) {
        return;
      }
      this._element = element;
      this._config = this._getConfig(config);
      Data.set(this._element, this.constructor.DATA_KEY, this);
    }
    // Public
    dispose() {
      Data.remove(this._element, this.constructor.DATA_KEY);
      EventHandler.off(this._element, this.constructor.EVENT_KEY);
      for (const propertyName of Object.getOwnPropertyNames(this)) {
        this[propertyName] = null;
      }
    }
    // Private
    _queueCallback(callback, element, isAnimated = true) {
      executeAfterTransition(callback, element, isAnimated);
    }
    _getConfig(config) {
      config = this._mergeConfigObj(config, this._element);
      config = this._configAfterMerge(config);
      this._typeCheckConfig(config);
      return config;
    }
    // Static
    static getInstance(element) {
      return Data.get(getElement(element), this.DATA_KEY);
    }
    static getOrCreateInstance(element, config = {}) {
      return this.getInstance(element) || new this(element, typeof config === "object" ? config : null);
    }
    static get VERSION() {
      return VERSION;
    }
    static get DATA_KEY() {
      return `bs.${this.NAME}`;
    }
    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`;
    }
    static eventName(name) {
      return `${name}${this.EVENT_KEY}`;
    }
  };
  var getSelector = (element) => {
    let selector = element.getAttribute("data-bs-target");
    if (!selector || selector === "#") {
      let hrefAttribute = element.getAttribute("href");
      if (!hrefAttribute || !hrefAttribute.includes("#") && !hrefAttribute.startsWith(".")) {
        return null;
      }
      if (hrefAttribute.includes("#") && !hrefAttribute.startsWith("#")) {
        hrefAttribute = `#${hrefAttribute.split("#")[1]}`;
      }
      selector = hrefAttribute && hrefAttribute !== "#" ? hrefAttribute.trim() : null;
    }
    return selector ? selector.split(",").map((sel) => parseSelector(sel)).join(",") : null;
  };
  var SelectorEngine = {
    find(selector, element = document.documentElement) {
      return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
    },
    findOne(selector, element = document.documentElement) {
      return Element.prototype.querySelector.call(element, selector);
    },
    children(element, selector) {
      return [].concat(...element.children).filter((child) => child.matches(selector));
    },
    parents(element, selector) {
      const parents = [];
      let ancestor = element.parentNode.closest(selector);
      while (ancestor) {
        parents.push(ancestor);
        ancestor = ancestor.parentNode.closest(selector);
      }
      return parents;
    },
    prev(element, selector) {
      let previous = element.previousElementSibling;
      while (previous) {
        if (previous.matches(selector)) {
          return [previous];
        }
        previous = previous.previousElementSibling;
      }
      return [];
    },
    // TODO: this is now unused; remove later along with prev()
    next(element, selector) {
      let next = element.nextElementSibling;
      while (next) {
        if (next.matches(selector)) {
          return [next];
        }
        next = next.nextElementSibling;
      }
      return [];
    },
    focusableChildren(element) {
      const focusables = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((selector) => `${selector}:not([tabindex^="-"])`).join(",");
      return this.find(focusables, element).filter((el) => !isDisabled(el) && isVisible(el));
    },
    getSelectorFromElement(element) {
      const selector = getSelector(element);
      if (selector) {
        return SelectorEngine.findOne(selector) ? selector : null;
      }
      return null;
    },
    getElementFromSelector(element) {
      const selector = getSelector(element);
      return selector ? SelectorEngine.findOne(selector) : null;
    },
    getMultipleElementsFromSelector(element) {
      const selector = getSelector(element);
      return selector ? SelectorEngine.find(selector) : [];
    }
  };
  var enableDismissTrigger = (component, method = "hide") => {
    const clickEvent = `click.dismiss${component.EVENT_KEY}`;
    const name = component.NAME;
    EventHandler.on(document, clickEvent, `[data-bs-dismiss="${name}"]`, function(event) {
      if (["A", "AREA"].includes(this.tagName)) {
        event.preventDefault();
      }
      if (isDisabled(this)) {
        return;
      }
      const target = SelectorEngine.getElementFromSelector(this) || this.closest(`.${name}`);
      const instance = component.getOrCreateInstance(target);
      instance[method]();
    });
  };
  var NAME$f = "alert";
  var DATA_KEY$a = "bs.alert";
  var EVENT_KEY$b = `.${DATA_KEY$a}`;
  var EVENT_CLOSE = `close${EVENT_KEY$b}`;
  var EVENT_CLOSED = `closed${EVENT_KEY$b}`;
  var CLASS_NAME_FADE$5 = "fade";
  var CLASS_NAME_SHOW$8 = "show";
  var Alert = class _Alert extends BaseComponent {
    // Getters
    static get NAME() {
      return NAME$f;
    }
    // Public
    close() {
      const closeEvent = EventHandler.trigger(this._element, EVENT_CLOSE);
      if (closeEvent.defaultPrevented) {
        return;
      }
      this._element.classList.remove(CLASS_NAME_SHOW$8);
      const isAnimated = this._element.classList.contains(CLASS_NAME_FADE$5);
      this._queueCallback(() => this._destroyElement(), this._element, isAnimated);
    }
    // Private
    _destroyElement() {
      this._element.remove();
      EventHandler.trigger(this._element, EVENT_CLOSED);
      this.dispose();
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Alert.getOrCreateInstance(this);
        if (typeof config !== "string") {
          return;
        }
        if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config](this);
      });
    }
  };
  enableDismissTrigger(Alert, "close");
  defineJQueryPlugin(Alert);
  var NAME$e = "button";
  var DATA_KEY$9 = "bs.button";
  var EVENT_KEY$a = `.${DATA_KEY$9}`;
  var DATA_API_KEY$6 = ".data-api";
  var CLASS_NAME_ACTIVE$3 = "active";
  var SELECTOR_DATA_TOGGLE$5 = '[data-bs-toggle="button"]';
  var EVENT_CLICK_DATA_API$6 = `click${EVENT_KEY$a}${DATA_API_KEY$6}`;
  var Button = class _Button extends BaseComponent {
    // Getters
    static get NAME() {
      return NAME$e;
    }
    // Public
    toggle() {
      this._element.setAttribute("aria-pressed", this._element.classList.toggle(CLASS_NAME_ACTIVE$3));
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Button.getOrCreateInstance(this);
        if (config === "toggle") {
          data[config]();
        }
      });
    }
  };
  EventHandler.on(document, EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$5, (event) => {
    event.preventDefault();
    const button = event.target.closest(SELECTOR_DATA_TOGGLE$5);
    const data = Button.getOrCreateInstance(button);
    data.toggle();
  });
  defineJQueryPlugin(Button);
  var NAME$d = "swipe";
  var EVENT_KEY$9 = ".bs.swipe";
  var EVENT_TOUCHSTART = `touchstart${EVENT_KEY$9}`;
  var EVENT_TOUCHMOVE = `touchmove${EVENT_KEY$9}`;
  var EVENT_TOUCHEND = `touchend${EVENT_KEY$9}`;
  var EVENT_POINTERDOWN = `pointerdown${EVENT_KEY$9}`;
  var EVENT_POINTERUP = `pointerup${EVENT_KEY$9}`;
  var POINTER_TYPE_TOUCH = "touch";
  var POINTER_TYPE_PEN = "pen";
  var CLASS_NAME_POINTER_EVENT = "pointer-event";
  var SWIPE_THRESHOLD = 40;
  var Default$c = {
    endCallback: null,
    leftCallback: null,
    rightCallback: null
  };
  var DefaultType$c = {
    endCallback: "(function|null)",
    leftCallback: "(function|null)",
    rightCallback: "(function|null)"
  };
  var Swipe = class _Swipe extends Config {
    constructor(element, config) {
      super();
      this._element = element;
      if (!element || !_Swipe.isSupported()) {
        return;
      }
      this._config = this._getConfig(config);
      this._deltaX = 0;
      this._supportPointerEvents = Boolean(window.PointerEvent);
      this._initEvents();
    }
    // Getters
    static get Default() {
      return Default$c;
    }
    static get DefaultType() {
      return DefaultType$c;
    }
    static get NAME() {
      return NAME$d;
    }
    // Public
    dispose() {
      EventHandler.off(this._element, EVENT_KEY$9);
    }
    // Private
    _start(event) {
      if (!this._supportPointerEvents) {
        this._deltaX = event.touches[0].clientX;
        return;
      }
      if (this._eventIsPointerPenTouch(event)) {
        this._deltaX = event.clientX;
      }
    }
    _end(event) {
      if (this._eventIsPointerPenTouch(event)) {
        this._deltaX = event.clientX - this._deltaX;
      }
      this._handleSwipe();
      execute(this._config.endCallback);
    }
    _move(event) {
      this._deltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - this._deltaX;
    }
    _handleSwipe() {
      const absDeltaX = Math.abs(this._deltaX);
      if (absDeltaX <= SWIPE_THRESHOLD) {
        return;
      }
      const direction = absDeltaX / this._deltaX;
      this._deltaX = 0;
      if (!direction) {
        return;
      }
      execute(direction > 0 ? this._config.rightCallback : this._config.leftCallback);
    }
    _initEvents() {
      if (this._supportPointerEvents) {
        EventHandler.on(this._element, EVENT_POINTERDOWN, (event) => this._start(event));
        EventHandler.on(this._element, EVENT_POINTERUP, (event) => this._end(event));
        this._element.classList.add(CLASS_NAME_POINTER_EVENT);
      } else {
        EventHandler.on(this._element, EVENT_TOUCHSTART, (event) => this._start(event));
        EventHandler.on(this._element, EVENT_TOUCHMOVE, (event) => this._move(event));
        EventHandler.on(this._element, EVENT_TOUCHEND, (event) => this._end(event));
      }
    }
    _eventIsPointerPenTouch(event) {
      return this._supportPointerEvents && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH);
    }
    // Static
    static isSupported() {
      return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
    }
  };
  var NAME$c = "carousel";
  var DATA_KEY$8 = "bs.carousel";
  var EVENT_KEY$8 = `.${DATA_KEY$8}`;
  var DATA_API_KEY$5 = ".data-api";
  var ARROW_LEFT_KEY$1 = "ArrowLeft";
  var ARROW_RIGHT_KEY$1 = "ArrowRight";
  var TOUCHEVENT_COMPAT_WAIT = 500;
  var ORDER_NEXT = "next";
  var ORDER_PREV = "prev";
  var DIRECTION_LEFT = "left";
  var DIRECTION_RIGHT = "right";
  var EVENT_SLIDE = `slide${EVENT_KEY$8}`;
  var EVENT_SLID = `slid${EVENT_KEY$8}`;
  var EVENT_KEYDOWN$1 = `keydown${EVENT_KEY$8}`;
  var EVENT_MOUSEENTER$1 = `mouseenter${EVENT_KEY$8}`;
  var EVENT_MOUSELEAVE$1 = `mouseleave${EVENT_KEY$8}`;
  var EVENT_DRAG_START = `dragstart${EVENT_KEY$8}`;
  var EVENT_LOAD_DATA_API$3 = `load${EVENT_KEY$8}${DATA_API_KEY$5}`;
  var EVENT_CLICK_DATA_API$5 = `click${EVENT_KEY$8}${DATA_API_KEY$5}`;
  var CLASS_NAME_CAROUSEL = "carousel";
  var CLASS_NAME_ACTIVE$2 = "active";
  var CLASS_NAME_SLIDE = "slide";
  var CLASS_NAME_END = "carousel-item-end";
  var CLASS_NAME_START = "carousel-item-start";
  var CLASS_NAME_NEXT = "carousel-item-next";
  var CLASS_NAME_PREV = "carousel-item-prev";
  var SELECTOR_ACTIVE = ".active";
  var SELECTOR_ITEM = ".carousel-item";
  var SELECTOR_ACTIVE_ITEM = SELECTOR_ACTIVE + SELECTOR_ITEM;
  var SELECTOR_ITEM_IMG = ".carousel-item img";
  var SELECTOR_INDICATORS = ".carousel-indicators";
  var SELECTOR_DATA_SLIDE = "[data-bs-slide], [data-bs-slide-to]";
  var SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
  var KEY_TO_DIRECTION = {
    [ARROW_LEFT_KEY$1]: DIRECTION_RIGHT,
    [ARROW_RIGHT_KEY$1]: DIRECTION_LEFT
  };
  var Default$b = {
    interval: 5e3,
    keyboard: true,
    pause: "hover",
    ride: false,
    touch: true,
    wrap: true
  };
  var DefaultType$b = {
    interval: "(number|boolean)",
    // TODO:v6 remove boolean support
    keyboard: "boolean",
    pause: "(string|boolean)",
    ride: "(boolean|string)",
    touch: "boolean",
    wrap: "boolean"
  };
  var Carousel = class _Carousel extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._interval = null;
      this._activeElement = null;
      this._isSliding = false;
      this.touchTimeout = null;
      this._swipeHelper = null;
      this._indicatorsElement = SelectorEngine.findOne(SELECTOR_INDICATORS, this._element);
      this._addEventListeners();
      if (this._config.ride === CLASS_NAME_CAROUSEL) {
        this.cycle();
      }
    }
    // Getters
    static get Default() {
      return Default$b;
    }
    static get DefaultType() {
      return DefaultType$b;
    }
    static get NAME() {
      return NAME$c;
    }
    // Public
    next() {
      this._slide(ORDER_NEXT);
    }
    nextWhenVisible() {
      if (!document.hidden && isVisible(this._element)) {
        this.next();
      }
    }
    prev() {
      this._slide(ORDER_PREV);
    }
    pause() {
      if (this._isSliding) {
        triggerTransitionEnd(this._element);
      }
      this._clearInterval();
    }
    cycle() {
      this._clearInterval();
      this._updateInterval();
      this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
    }
    _maybeEnableCycle() {
      if (!this._config.ride) {
        return;
      }
      if (this._isSliding) {
        EventHandler.one(this._element, EVENT_SLID, () => this.cycle());
        return;
      }
      this.cycle();
    }
    to(index) {
      const items = this._getItems();
      if (index > items.length - 1 || index < 0) {
        return;
      }
      if (this._isSliding) {
        EventHandler.one(this._element, EVENT_SLID, () => this.to(index));
        return;
      }
      const activeIndex = this._getItemIndex(this._getActive());
      if (activeIndex === index) {
        return;
      }
      const order2 = index > activeIndex ? ORDER_NEXT : ORDER_PREV;
      this._slide(order2, items[index]);
    }
    dispose() {
      if (this._swipeHelper) {
        this._swipeHelper.dispose();
      }
      super.dispose();
    }
    // Private
    _configAfterMerge(config) {
      config.defaultInterval = config.interval;
      return config;
    }
    _addEventListeners() {
      if (this._config.keyboard) {
        EventHandler.on(this._element, EVENT_KEYDOWN$1, (event) => this._keydown(event));
      }
      if (this._config.pause === "hover") {
        EventHandler.on(this._element, EVENT_MOUSEENTER$1, () => this.pause());
        EventHandler.on(this._element, EVENT_MOUSELEAVE$1, () => this._maybeEnableCycle());
      }
      if (this._config.touch && Swipe.isSupported()) {
        this._addTouchEventListeners();
      }
    }
    _addTouchEventListeners() {
      for (const img of SelectorEngine.find(SELECTOR_ITEM_IMG, this._element)) {
        EventHandler.on(img, EVENT_DRAG_START, (event) => event.preventDefault());
      }
      const endCallBack = () => {
        if (this._config.pause !== "hover") {
          return;
        }
        this.pause();
        if (this.touchTimeout) {
          clearTimeout(this.touchTimeout);
        }
        this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), TOUCHEVENT_COMPAT_WAIT + this._config.interval);
      };
      const swipeConfig = {
        leftCallback: () => this._slide(this._directionToOrder(DIRECTION_LEFT)),
        rightCallback: () => this._slide(this._directionToOrder(DIRECTION_RIGHT)),
        endCallback: endCallBack
      };
      this._swipeHelper = new Swipe(this._element, swipeConfig);
    }
    _keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }
      const direction = KEY_TO_DIRECTION[event.key];
      if (direction) {
        event.preventDefault();
        this._slide(this._directionToOrder(direction));
      }
    }
    _getItemIndex(element) {
      return this._getItems().indexOf(element);
    }
    _setActiveIndicatorElement(index) {
      if (!this._indicatorsElement) {
        return;
      }
      const activeIndicator = SelectorEngine.findOne(SELECTOR_ACTIVE, this._indicatorsElement);
      activeIndicator.classList.remove(CLASS_NAME_ACTIVE$2);
      activeIndicator.removeAttribute("aria-current");
      const newActiveIndicator = SelectorEngine.findOne(`[data-bs-slide-to="${index}"]`, this._indicatorsElement);
      if (newActiveIndicator) {
        newActiveIndicator.classList.add(CLASS_NAME_ACTIVE$2);
        newActiveIndicator.setAttribute("aria-current", "true");
      }
    }
    _updateInterval() {
      const element = this._activeElement || this._getActive();
      if (!element) {
        return;
      }
      const elementInterval = Number.parseInt(element.getAttribute("data-bs-interval"), 10);
      this._config.interval = elementInterval || this._config.defaultInterval;
    }
    _slide(order2, element = null) {
      if (this._isSliding) {
        return;
      }
      const activeElement = this._getActive();
      const isNext = order2 === ORDER_NEXT;
      const nextElement = element || getNextActiveElement(this._getItems(), activeElement, isNext, this._config.wrap);
      if (nextElement === activeElement) {
        return;
      }
      const nextElementIndex = this._getItemIndex(nextElement);
      const triggerEvent = (eventName) => {
        return EventHandler.trigger(this._element, eventName, {
          relatedTarget: nextElement,
          direction: this._orderToDirection(order2),
          from: this._getItemIndex(activeElement),
          to: nextElementIndex
        });
      };
      const slideEvent = triggerEvent(EVENT_SLIDE);
      if (slideEvent.defaultPrevented) {
        return;
      }
      if (!activeElement || !nextElement) {
        return;
      }
      const isCycling = Boolean(this._interval);
      this.pause();
      this._isSliding = true;
      this._setActiveIndicatorElement(nextElementIndex);
      this._activeElement = nextElement;
      const directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;
      const orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;
      nextElement.classList.add(orderClassName);
      reflow(nextElement);
      activeElement.classList.add(directionalClassName);
      nextElement.classList.add(directionalClassName);
      const completeCallBack = () => {
        nextElement.classList.remove(directionalClassName, orderClassName);
        nextElement.classList.add(CLASS_NAME_ACTIVE$2);
        activeElement.classList.remove(CLASS_NAME_ACTIVE$2, orderClassName, directionalClassName);
        this._isSliding = false;
        triggerEvent(EVENT_SLID);
      };
      this._queueCallback(completeCallBack, activeElement, this._isAnimated());
      if (isCycling) {
        this.cycle();
      }
    }
    _isAnimated() {
      return this._element.classList.contains(CLASS_NAME_SLIDE);
    }
    _getActive() {
      return SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);
    }
    _getItems() {
      return SelectorEngine.find(SELECTOR_ITEM, this._element);
    }
    _clearInterval() {
      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }
    }
    _directionToOrder(direction) {
      if (isRTL()) {
        return direction === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT;
      }
      return direction === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV;
    }
    _orderToDirection(order2) {
      if (isRTL()) {
        return order2 === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT;
      }
      return order2 === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT;
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Carousel.getOrCreateInstance(this, config);
        if (typeof config === "number") {
          data.to(config);
          return;
        }
        if (typeof config === "string") {
          if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
            throw new TypeError(`No method named "${config}"`);
          }
          data[config]();
        }
      });
    }
  };
  EventHandler.on(document, EVENT_CLICK_DATA_API$5, SELECTOR_DATA_SLIDE, function(event) {
    const target = SelectorEngine.getElementFromSelector(this);
    if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) {
      return;
    }
    event.preventDefault();
    const carousel = Carousel.getOrCreateInstance(target);
    const slideIndex = this.getAttribute("data-bs-slide-to");
    if (slideIndex) {
      carousel.to(slideIndex);
      carousel._maybeEnableCycle();
      return;
    }
    if (Manipulator.getDataAttribute(this, "slide") === "next") {
      carousel.next();
      carousel._maybeEnableCycle();
      return;
    }
    carousel.prev();
    carousel._maybeEnableCycle();
  });
  EventHandler.on(window, EVENT_LOAD_DATA_API$3, () => {
    const carousels = SelectorEngine.find(SELECTOR_DATA_RIDE);
    for (const carousel of carousels) {
      Carousel.getOrCreateInstance(carousel);
    }
  });
  defineJQueryPlugin(Carousel);
  var NAME$b = "collapse";
  var DATA_KEY$7 = "bs.collapse";
  var EVENT_KEY$7 = `.${DATA_KEY$7}`;
  var DATA_API_KEY$4 = ".data-api";
  var EVENT_SHOW$6 = `show${EVENT_KEY$7}`;
  var EVENT_SHOWN$6 = `shown${EVENT_KEY$7}`;
  var EVENT_HIDE$6 = `hide${EVENT_KEY$7}`;
  var EVENT_HIDDEN$6 = `hidden${EVENT_KEY$7}`;
  var EVENT_CLICK_DATA_API$4 = `click${EVENT_KEY$7}${DATA_API_KEY$4}`;
  var CLASS_NAME_SHOW$7 = "show";
  var CLASS_NAME_COLLAPSE = "collapse";
  var CLASS_NAME_COLLAPSING = "collapsing";
  var CLASS_NAME_COLLAPSED = "collapsed";
  var CLASS_NAME_DEEPER_CHILDREN = `:scope .${CLASS_NAME_COLLAPSE} .${CLASS_NAME_COLLAPSE}`;
  var CLASS_NAME_HORIZONTAL = "collapse-horizontal";
  var WIDTH = "width";
  var HEIGHT = "height";
  var SELECTOR_ACTIVES = ".collapse.show, .collapse.collapsing";
  var SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle="collapse"]';
  var Default$a = {
    parent: null,
    toggle: true
  };
  var DefaultType$a = {
    parent: "(null|element)",
    toggle: "boolean"
  };
  var Collapse = class _Collapse extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._isTransitioning = false;
      this._triggerArray = [];
      const toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE$4);
      for (const elem of toggleList) {
        const selector = SelectorEngine.getSelectorFromElement(elem);
        const filterElement = SelectorEngine.find(selector).filter((foundElement) => foundElement === this._element);
        if (selector !== null && filterElement.length) {
          this._triggerArray.push(elem);
        }
      }
      this._initializeChildren();
      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._triggerArray, this._isShown());
      }
      if (this._config.toggle) {
        this.toggle();
      }
    }
    // Getters
    static get Default() {
      return Default$a;
    }
    static get DefaultType() {
      return DefaultType$a;
    }
    static get NAME() {
      return NAME$b;
    }
    // Public
    toggle() {
      if (this._isShown()) {
        this.hide();
      } else {
        this.show();
      }
    }
    show() {
      if (this._isTransitioning || this._isShown()) {
        return;
      }
      let activeChildren = [];
      if (this._config.parent) {
        activeChildren = this._getFirstLevelChildren(SELECTOR_ACTIVES).filter((element) => element !== this._element).map((element) => _Collapse.getOrCreateInstance(element, {
          toggle: false
        }));
      }
      if (activeChildren.length && activeChildren[0]._isTransitioning) {
        return;
      }
      const startEvent = EventHandler.trigger(this._element, EVENT_SHOW$6);
      if (startEvent.defaultPrevented) {
        return;
      }
      for (const activeInstance of activeChildren) {
        activeInstance.hide();
      }
      const dimension = this._getDimension();
      this._element.classList.remove(CLASS_NAME_COLLAPSE);
      this._element.classList.add(CLASS_NAME_COLLAPSING);
      this._element.style[dimension] = 0;
      this._addAriaAndCollapsedClass(this._triggerArray, true);
      this._isTransitioning = true;
      const complete = () => {
        this._isTransitioning = false;
        this._element.classList.remove(CLASS_NAME_COLLAPSING);
        this._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);
        this._element.style[dimension] = "";
        EventHandler.trigger(this._element, EVENT_SHOWN$6);
      };
      const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      const scrollSize = `scroll${capitalizedDimension}`;
      this._queueCallback(complete, this._element, true);
      this._element.style[dimension] = `${this._element[scrollSize]}px`;
    }
    hide() {
      if (this._isTransitioning || !this._isShown()) {
        return;
      }
      const startEvent = EventHandler.trigger(this._element, EVENT_HIDE$6);
      if (startEvent.defaultPrevented) {
        return;
      }
      const dimension = this._getDimension();
      this._element.style[dimension] = `${this._element.getBoundingClientRect()[dimension]}px`;
      reflow(this._element);
      this._element.classList.add(CLASS_NAME_COLLAPSING);
      this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);
      for (const trigger of this._triggerArray) {
        const element = SelectorEngine.getElementFromSelector(trigger);
        if (element && !this._isShown(element)) {
          this._addAriaAndCollapsedClass([trigger], false);
        }
      }
      this._isTransitioning = true;
      const complete = () => {
        this._isTransitioning = false;
        this._element.classList.remove(CLASS_NAME_COLLAPSING);
        this._element.classList.add(CLASS_NAME_COLLAPSE);
        EventHandler.trigger(this._element, EVENT_HIDDEN$6);
      };
      this._element.style[dimension] = "";
      this._queueCallback(complete, this._element, true);
    }
    // Private
    _isShown(element = this._element) {
      return element.classList.contains(CLASS_NAME_SHOW$7);
    }
    _configAfterMerge(config) {
      config.toggle = Boolean(config.toggle);
      config.parent = getElement(config.parent);
      return config;
    }
    _getDimension() {
      return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT;
    }
    _initializeChildren() {
      if (!this._config.parent) {
        return;
      }
      const children = this._getFirstLevelChildren(SELECTOR_DATA_TOGGLE$4);
      for (const element of children) {
        const selected = SelectorEngine.getElementFromSelector(element);
        if (selected) {
          this._addAriaAndCollapsedClass([element], this._isShown(selected));
        }
      }
    }
    _getFirstLevelChildren(selector) {
      const children = SelectorEngine.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
      return SelectorEngine.find(selector, this._config.parent).filter((element) => !children.includes(element));
    }
    _addAriaAndCollapsedClass(triggerArray, isOpen) {
      if (!triggerArray.length) {
        return;
      }
      for (const element of triggerArray) {
        element.classList.toggle(CLASS_NAME_COLLAPSED, !isOpen);
        element.setAttribute("aria-expanded", isOpen);
      }
    }
    // Static
    static jQueryInterface(config) {
      const _config = {};
      if (typeof config === "string" && /show|hide/.test(config)) {
        _config.toggle = false;
      }
      return this.each(function() {
        const data = _Collapse.getOrCreateInstance(this, _config);
        if (typeof config === "string") {
          if (typeof data[config] === "undefined") {
            throw new TypeError(`No method named "${config}"`);
          }
          data[config]();
        }
      });
    }
  };
  EventHandler.on(document, EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$4, function(event) {
    if (event.target.tagName === "A" || event.delegateTarget && event.delegateTarget.tagName === "A") {
      event.preventDefault();
    }
    for (const element of SelectorEngine.getMultipleElementsFromSelector(this)) {
      Collapse.getOrCreateInstance(element, {
        toggle: false
      }).toggle();
    }
  });
  defineJQueryPlugin(Collapse);
  var NAME$a = "dropdown";
  var DATA_KEY$6 = "bs.dropdown";
  var EVENT_KEY$6 = `.${DATA_KEY$6}`;
  var DATA_API_KEY$3 = ".data-api";
  var ESCAPE_KEY$2 = "Escape";
  var TAB_KEY$1 = "Tab";
  var ARROW_UP_KEY$1 = "ArrowUp";
  var ARROW_DOWN_KEY$1 = "ArrowDown";
  var RIGHT_MOUSE_BUTTON = 2;
  var EVENT_HIDE$5 = `hide${EVENT_KEY$6}`;
  var EVENT_HIDDEN$5 = `hidden${EVENT_KEY$6}`;
  var EVENT_SHOW$5 = `show${EVENT_KEY$6}`;
  var EVENT_SHOWN$5 = `shown${EVENT_KEY$6}`;
  var EVENT_CLICK_DATA_API$3 = `click${EVENT_KEY$6}${DATA_API_KEY$3}`;
  var EVENT_KEYDOWN_DATA_API = `keydown${EVENT_KEY$6}${DATA_API_KEY$3}`;
  var EVENT_KEYUP_DATA_API = `keyup${EVENT_KEY$6}${DATA_API_KEY$3}`;
  var CLASS_NAME_SHOW$6 = "show";
  var CLASS_NAME_DROPUP = "dropup";
  var CLASS_NAME_DROPEND = "dropend";
  var CLASS_NAME_DROPSTART = "dropstart";
  var CLASS_NAME_DROPUP_CENTER = "dropup-center";
  var CLASS_NAME_DROPDOWN_CENTER = "dropdown-center";
  var SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)';
  var SELECTOR_DATA_TOGGLE_SHOWN = `${SELECTOR_DATA_TOGGLE$3}.${CLASS_NAME_SHOW$6}`;
  var SELECTOR_MENU = ".dropdown-menu";
  var SELECTOR_NAVBAR = ".navbar";
  var SELECTOR_NAVBAR_NAV = ".navbar-nav";
  var SELECTOR_VISIBLE_ITEMS = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)";
  var PLACEMENT_TOP = isRTL() ? "top-end" : "top-start";
  var PLACEMENT_TOPEND = isRTL() ? "top-start" : "top-end";
  var PLACEMENT_BOTTOM = isRTL() ? "bottom-end" : "bottom-start";
  var PLACEMENT_BOTTOMEND = isRTL() ? "bottom-start" : "bottom-end";
  var PLACEMENT_RIGHT = isRTL() ? "left-start" : "right-start";
  var PLACEMENT_LEFT = isRTL() ? "right-start" : "left-start";
  var PLACEMENT_TOPCENTER = "top";
  var PLACEMENT_BOTTOMCENTER = "bottom";
  var Default$9 = {
    autoClose: true,
    boundary: "clippingParents",
    display: "dynamic",
    offset: [0, 2],
    popperConfig: null,
    reference: "toggle"
  };
  var DefaultType$9 = {
    autoClose: "(boolean|string)",
    boundary: "(string|element)",
    display: "string",
    offset: "(array|string|function)",
    popperConfig: "(null|object|function)",
    reference: "(string|element|object)"
  };
  var Dropdown = class _Dropdown extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._popper = null;
      this._parent = this._element.parentNode;
      this._menu = SelectorEngine.next(this._element, SELECTOR_MENU)[0] || SelectorEngine.prev(this._element, SELECTOR_MENU)[0] || SelectorEngine.findOne(SELECTOR_MENU, this._parent);
      this._inNavbar = this._detectNavbar();
    }
    // Getters
    static get Default() {
      return Default$9;
    }
    static get DefaultType() {
      return DefaultType$9;
    }
    static get NAME() {
      return NAME$a;
    }
    // Public
    toggle() {
      return this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (isDisabled(this._element) || this._isShown()) {
        return;
      }
      const relatedTarget = {
        relatedTarget: this._element
      };
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$5, relatedTarget);
      if (showEvent.defaultPrevented) {
        return;
      }
      this._createPopper();
      if ("ontouchstart" in document.documentElement && !this._parent.closest(SELECTOR_NAVBAR_NAV)) {
        for (const element of [].concat(...document.body.children)) {
          EventHandler.on(element, "mouseover", noop);
        }
      }
      this._element.focus();
      this._element.setAttribute("aria-expanded", true);
      this._menu.classList.add(CLASS_NAME_SHOW$6);
      this._element.classList.add(CLASS_NAME_SHOW$6);
      EventHandler.trigger(this._element, EVENT_SHOWN$5, relatedTarget);
    }
    hide() {
      if (isDisabled(this._element) || !this._isShown()) {
        return;
      }
      const relatedTarget = {
        relatedTarget: this._element
      };
      this._completeHide(relatedTarget);
    }
    dispose() {
      if (this._popper) {
        this._popper.destroy();
      }
      super.dispose();
    }
    update() {
      this._inNavbar = this._detectNavbar();
      if (this._popper) {
        this._popper.update();
      }
    }
    // Private
    _completeHide(relatedTarget) {
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$5, relatedTarget);
      if (hideEvent.defaultPrevented) {
        return;
      }
      if ("ontouchstart" in document.documentElement) {
        for (const element of [].concat(...document.body.children)) {
          EventHandler.off(element, "mouseover", noop);
        }
      }
      if (this._popper) {
        this._popper.destroy();
      }
      this._menu.classList.remove(CLASS_NAME_SHOW$6);
      this._element.classList.remove(CLASS_NAME_SHOW$6);
      this._element.setAttribute("aria-expanded", "false");
      Manipulator.removeDataAttribute(this._menu, "popper");
      EventHandler.trigger(this._element, EVENT_HIDDEN$5, relatedTarget);
    }
    _getConfig(config) {
      config = super._getConfig(config);
      if (typeof config.reference === "object" && !isElement2(config.reference) && typeof config.reference.getBoundingClientRect !== "function") {
        throw new TypeError(`${NAME$a.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
      }
      return config;
    }
    _createPopper() {
      if (typeof lib_exports === "undefined") {
        throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");
      }
      let referenceElement = this._element;
      if (this._config.reference === "parent") {
        referenceElement = this._parent;
      } else if (isElement2(this._config.reference)) {
        referenceElement = getElement(this._config.reference);
      } else if (typeof this._config.reference === "object") {
        referenceElement = this._config.reference;
      }
      const popperConfig = this._getPopperConfig();
      this._popper = createPopper3(referenceElement, this._menu, popperConfig);
    }
    _isShown() {
      return this._menu.classList.contains(CLASS_NAME_SHOW$6);
    }
    _getPlacement() {
      const parentDropdown = this._parent;
      if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) {
        return PLACEMENT_RIGHT;
      }
      if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) {
        return PLACEMENT_LEFT;
      }
      if (parentDropdown.classList.contains(CLASS_NAME_DROPUP_CENTER)) {
        return PLACEMENT_TOPCENTER;
      }
      if (parentDropdown.classList.contains(CLASS_NAME_DROPDOWN_CENTER)) {
        return PLACEMENT_BOTTOMCENTER;
      }
      const isEnd = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
      if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) {
        return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;
      }
      return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
    }
    _detectNavbar() {
      return this._element.closest(SELECTOR_NAVBAR) !== null;
    }
    _getOffset() {
      const {
        offset: offset2
      } = this._config;
      if (typeof offset2 === "string") {
        return offset2.split(",").map((value) => Number.parseInt(value, 10));
      }
      if (typeof offset2 === "function") {
        return (popperData) => offset2(popperData, this._element);
      }
      return offset2;
    }
    _getPopperConfig() {
      const defaultBsPopperConfig = {
        placement: this._getPlacement(),
        modifiers: [{
          name: "preventOverflow",
          options: {
            boundary: this._config.boundary
          }
        }, {
          name: "offset",
          options: {
            offset: this._getOffset()
          }
        }]
      };
      if (this._inNavbar || this._config.display === "static") {
        Manipulator.setDataAttribute(this._menu, "popper", "static");
        defaultBsPopperConfig.modifiers = [{
          name: "applyStyles",
          enabled: false
        }];
      }
      return {
        ...defaultBsPopperConfig,
        ...execute(this._config.popperConfig, [void 0, defaultBsPopperConfig])
      };
    }
    _selectMenuItem({
      key,
      target
    }) {
      const items = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter((element) => isVisible(element));
      if (!items.length) {
        return;
      }
      getNextActiveElement(items, target, key === ARROW_DOWN_KEY$1, !items.includes(target)).focus();
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Dropdown.getOrCreateInstance(this, config);
        if (typeof config !== "string") {
          return;
        }
        if (typeof data[config] === "undefined") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
    static clearMenus(event) {
      if (event.button === RIGHT_MOUSE_BUTTON || event.type === "keyup" && event.key !== TAB_KEY$1) {
        return;
      }
      const openToggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE_SHOWN);
      for (const toggle of openToggles) {
        const context = _Dropdown.getInstance(toggle);
        if (!context || context._config.autoClose === false) {
          continue;
        }
        const composedPath = event.composedPath();
        const isMenuTarget = composedPath.includes(context._menu);
        if (composedPath.includes(context._element) || context._config.autoClose === "inside" && !isMenuTarget || context._config.autoClose === "outside" && isMenuTarget) {
          continue;
        }
        if (context._menu.contains(event.target) && (event.type === "keyup" && event.key === TAB_KEY$1 || /input|select|option|textarea|form/i.test(event.target.tagName))) {
          continue;
        }
        const relatedTarget = {
          relatedTarget: context._element
        };
        if (event.type === "click") {
          relatedTarget.clickEvent = event;
        }
        context._completeHide(relatedTarget);
      }
    }
    static dataApiKeydownHandler(event) {
      const isInput = /input|textarea/i.test(event.target.tagName);
      const isEscapeEvent = event.key === ESCAPE_KEY$2;
      const isUpOrDownEvent = [ARROW_UP_KEY$1, ARROW_DOWN_KEY$1].includes(event.key);
      if (!isUpOrDownEvent && !isEscapeEvent) {
        return;
      }
      if (isInput && !isEscapeEvent) {
        return;
      }
      event.preventDefault();
      const getToggleButton = this.matches(SELECTOR_DATA_TOGGLE$3) ? this : SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE$3)[0] || SelectorEngine.next(this, SELECTOR_DATA_TOGGLE$3)[0] || SelectorEngine.findOne(SELECTOR_DATA_TOGGLE$3, event.delegateTarget.parentNode);
      const instance = _Dropdown.getOrCreateInstance(getToggleButton);
      if (isUpOrDownEvent) {
        event.stopPropagation();
        instance.show();
        instance._selectMenuItem(event);
        return;
      }
      if (instance._isShown()) {
        event.stopPropagation();
        instance.hide();
        getToggleButton.focus();
      }
    }
  };
  EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$3, Dropdown.dataApiKeydownHandler);
  EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
  EventHandler.on(document, EVENT_CLICK_DATA_API$3, Dropdown.clearMenus);
  EventHandler.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);
  EventHandler.on(document, EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$3, function(event) {
    event.preventDefault();
    Dropdown.getOrCreateInstance(this).toggle();
  });
  defineJQueryPlugin(Dropdown);
  var NAME$9 = "backdrop";
  var CLASS_NAME_FADE$4 = "fade";
  var CLASS_NAME_SHOW$5 = "show";
  var EVENT_MOUSEDOWN = `mousedown.bs.${NAME$9}`;
  var Default$8 = {
    className: "modal-backdrop",
    clickCallback: null,
    isAnimated: false,
    isVisible: true,
    // if false, we use the backdrop helper without adding any element to the dom
    rootElement: "body"
    // give the choice to place backdrop under different elements
  };
  var DefaultType$8 = {
    className: "string",
    clickCallback: "(function|null)",
    isAnimated: "boolean",
    isVisible: "boolean",
    rootElement: "(element|string)"
  };
  var Backdrop = class extends Config {
    constructor(config) {
      super();
      this._config = this._getConfig(config);
      this._isAppended = false;
      this._element = null;
    }
    // Getters
    static get Default() {
      return Default$8;
    }
    static get DefaultType() {
      return DefaultType$8;
    }
    static get NAME() {
      return NAME$9;
    }
    // Public
    show(callback) {
      if (!this._config.isVisible) {
        execute(callback);
        return;
      }
      this._append();
      const element = this._getElement();
      if (this._config.isAnimated) {
        reflow(element);
      }
      element.classList.add(CLASS_NAME_SHOW$5);
      this._emulateAnimation(() => {
        execute(callback);
      });
    }
    hide(callback) {
      if (!this._config.isVisible) {
        execute(callback);
        return;
      }
      this._getElement().classList.remove(CLASS_NAME_SHOW$5);
      this._emulateAnimation(() => {
        this.dispose();
        execute(callback);
      });
    }
    dispose() {
      if (!this._isAppended) {
        return;
      }
      EventHandler.off(this._element, EVENT_MOUSEDOWN);
      this._element.remove();
      this._isAppended = false;
    }
    // Private
    _getElement() {
      if (!this._element) {
        const backdrop = document.createElement("div");
        backdrop.className = this._config.className;
        if (this._config.isAnimated) {
          backdrop.classList.add(CLASS_NAME_FADE$4);
        }
        this._element = backdrop;
      }
      return this._element;
    }
    _configAfterMerge(config) {
      config.rootElement = getElement(config.rootElement);
      return config;
    }
    _append() {
      if (this._isAppended) {
        return;
      }
      const element = this._getElement();
      this._config.rootElement.append(element);
      EventHandler.on(element, EVENT_MOUSEDOWN, () => {
        execute(this._config.clickCallback);
      });
      this._isAppended = true;
    }
    _emulateAnimation(callback) {
      executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
    }
  };
  var NAME$8 = "focustrap";
  var DATA_KEY$5 = "bs.focustrap";
  var EVENT_KEY$5 = `.${DATA_KEY$5}`;
  var EVENT_FOCUSIN$2 = `focusin${EVENT_KEY$5}`;
  var EVENT_KEYDOWN_TAB = `keydown.tab${EVENT_KEY$5}`;
  var TAB_KEY = "Tab";
  var TAB_NAV_FORWARD = "forward";
  var TAB_NAV_BACKWARD = "backward";
  var Default$7 = {
    autofocus: true,
    trapElement: null
    // The element to trap focus inside of
  };
  var DefaultType$7 = {
    autofocus: "boolean",
    trapElement: "element"
  };
  var FocusTrap = class extends Config {
    constructor(config) {
      super();
      this._config = this._getConfig(config);
      this._isActive = false;
      this._lastTabNavDirection = null;
    }
    // Getters
    static get Default() {
      return Default$7;
    }
    static get DefaultType() {
      return DefaultType$7;
    }
    static get NAME() {
      return NAME$8;
    }
    // Public
    activate() {
      if (this._isActive) {
        return;
      }
      if (this._config.autofocus) {
        this._config.trapElement.focus();
      }
      EventHandler.off(document, EVENT_KEY$5);
      EventHandler.on(document, EVENT_FOCUSIN$2, (event) => this._handleFocusin(event));
      EventHandler.on(document, EVENT_KEYDOWN_TAB, (event) => this._handleKeydown(event));
      this._isActive = true;
    }
    deactivate() {
      if (!this._isActive) {
        return;
      }
      this._isActive = false;
      EventHandler.off(document, EVENT_KEY$5);
    }
    // Private
    _handleFocusin(event) {
      const {
        trapElement
      } = this._config;
      if (event.target === document || event.target === trapElement || trapElement.contains(event.target)) {
        return;
      }
      const elements = SelectorEngine.focusableChildren(trapElement);
      if (elements.length === 0) {
        trapElement.focus();
      } else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) {
        elements[elements.length - 1].focus();
      } else {
        elements[0].focus();
      }
    }
    _handleKeydown(event) {
      if (event.key !== TAB_KEY) {
        return;
      }
      this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD;
    }
  };
  var SELECTOR_FIXED_CONTENT = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top";
  var SELECTOR_STICKY_CONTENT = ".sticky-top";
  var PROPERTY_PADDING = "padding-right";
  var PROPERTY_MARGIN = "margin-right";
  var ScrollBarHelper = class {
    constructor() {
      this._element = document.body;
    }
    // Public
    getWidth() {
      const documentWidth = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - documentWidth);
    }
    hide() {
      const width = this.getWidth();
      this._disableOverFlow();
      this._setElementAttributes(this._element, PROPERTY_PADDING, (calculatedValue) => calculatedValue + width);
      this._setElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING, (calculatedValue) => calculatedValue + width);
      this._setElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN, (calculatedValue) => calculatedValue - width);
    }
    reset() {
      this._resetElementAttributes(this._element, "overflow");
      this._resetElementAttributes(this._element, PROPERTY_PADDING);
      this._resetElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING);
      this._resetElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN);
    }
    isOverflowing() {
      return this.getWidth() > 0;
    }
    // Private
    _disableOverFlow() {
      this._saveInitialAttribute(this._element, "overflow");
      this._element.style.overflow = "hidden";
    }
    _setElementAttributes(selector, styleProperty, callback) {
      const scrollbarWidth = this.getWidth();
      const manipulationCallBack = (element) => {
        if (element !== this._element && window.innerWidth > element.clientWidth + scrollbarWidth) {
          return;
        }
        this._saveInitialAttribute(element, styleProperty);
        const calculatedValue = window.getComputedStyle(element).getPropertyValue(styleProperty);
        element.style.setProperty(styleProperty, `${callback(Number.parseFloat(calculatedValue))}px`);
      };
      this._applyManipulationCallback(selector, manipulationCallBack);
    }
    _saveInitialAttribute(element, styleProperty) {
      const actualValue = element.style.getPropertyValue(styleProperty);
      if (actualValue) {
        Manipulator.setDataAttribute(element, styleProperty, actualValue);
      }
    }
    _resetElementAttributes(selector, styleProperty) {
      const manipulationCallBack = (element) => {
        const value = Manipulator.getDataAttribute(element, styleProperty);
        if (value === null) {
          element.style.removeProperty(styleProperty);
          return;
        }
        Manipulator.removeDataAttribute(element, styleProperty);
        element.style.setProperty(styleProperty, value);
      };
      this._applyManipulationCallback(selector, manipulationCallBack);
    }
    _applyManipulationCallback(selector, callBack) {
      if (isElement2(selector)) {
        callBack(selector);
        return;
      }
      for (const sel of SelectorEngine.find(selector, this._element)) {
        callBack(sel);
      }
    }
  };
  var NAME$7 = "modal";
  var DATA_KEY$4 = "bs.modal";
  var EVENT_KEY$4 = `.${DATA_KEY$4}`;
  var DATA_API_KEY$2 = ".data-api";
  var ESCAPE_KEY$1 = "Escape";
  var EVENT_HIDE$4 = `hide${EVENT_KEY$4}`;
  var EVENT_HIDE_PREVENTED$1 = `hidePrevented${EVENT_KEY$4}`;
  var EVENT_HIDDEN$4 = `hidden${EVENT_KEY$4}`;
  var EVENT_SHOW$4 = `show${EVENT_KEY$4}`;
  var EVENT_SHOWN$4 = `shown${EVENT_KEY$4}`;
  var EVENT_RESIZE$1 = `resize${EVENT_KEY$4}`;
  var EVENT_CLICK_DISMISS = `click.dismiss${EVENT_KEY$4}`;
  var EVENT_MOUSEDOWN_DISMISS = `mousedown.dismiss${EVENT_KEY$4}`;
  var EVENT_KEYDOWN_DISMISS$1 = `keydown.dismiss${EVENT_KEY$4}`;
  var EVENT_CLICK_DATA_API$2 = `click${EVENT_KEY$4}${DATA_API_KEY$2}`;
  var CLASS_NAME_OPEN = "modal-open";
  var CLASS_NAME_FADE$3 = "fade";
  var CLASS_NAME_SHOW$4 = "show";
  var CLASS_NAME_STATIC = "modal-static";
  var OPEN_SELECTOR$1 = ".modal.show";
  var SELECTOR_DIALOG = ".modal-dialog";
  var SELECTOR_MODAL_BODY = ".modal-body";
  var SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle="modal"]';
  var Default$6 = {
    backdrop: true,
    focus: true,
    keyboard: true
  };
  var DefaultType$6 = {
    backdrop: "(boolean|string)",
    focus: "boolean",
    keyboard: "boolean"
  };
  var Modal = class _Modal extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, this._element);
      this._backdrop = this._initializeBackDrop();
      this._focustrap = this._initializeFocusTrap();
      this._isShown = false;
      this._isTransitioning = false;
      this._scrollBar = new ScrollBarHelper();
      this._addEventListeners();
    }
    // Getters
    static get Default() {
      return Default$6;
    }
    static get DefaultType() {
      return DefaultType$6;
    }
    static get NAME() {
      return NAME$7;
    }
    // Public
    toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    }
    show(relatedTarget) {
      if (this._isShown || this._isTransitioning) {
        return;
      }
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$4, {
        relatedTarget
      });
      if (showEvent.defaultPrevented) {
        return;
      }
      this._isShown = true;
      this._isTransitioning = true;
      this._scrollBar.hide();
      document.body.classList.add(CLASS_NAME_OPEN);
      this._adjustDialog();
      this._backdrop.show(() => this._showElement(relatedTarget));
    }
    hide() {
      if (!this._isShown || this._isTransitioning) {
        return;
      }
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$4);
      if (hideEvent.defaultPrevented) {
        return;
      }
      this._isShown = false;
      this._isTransitioning = true;
      this._focustrap.deactivate();
      this._element.classList.remove(CLASS_NAME_SHOW$4);
      this._queueCallback(() => this._hideModal(), this._element, this._isAnimated());
    }
    dispose() {
      EventHandler.off(window, EVENT_KEY$4);
      EventHandler.off(this._dialog, EVENT_KEY$4);
      this._backdrop.dispose();
      this._focustrap.deactivate();
      super.dispose();
    }
    handleUpdate() {
      this._adjustDialog();
    }
    // Private
    _initializeBackDrop() {
      return new Backdrop({
        isVisible: Boolean(this._config.backdrop),
        // 'static' option will be translated to true, and booleans will keep their value,
        isAnimated: this._isAnimated()
      });
    }
    _initializeFocusTrap() {
      return new FocusTrap({
        trapElement: this._element
      });
    }
    _showElement(relatedTarget) {
      if (!document.body.contains(this._element)) {
        document.body.append(this._element);
      }
      this._element.style.display = "block";
      this._element.removeAttribute("aria-hidden");
      this._element.setAttribute("aria-modal", true);
      this._element.setAttribute("role", "dialog");
      this._element.scrollTop = 0;
      const modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);
      if (modalBody) {
        modalBody.scrollTop = 0;
      }
      reflow(this._element);
      this._element.classList.add(CLASS_NAME_SHOW$4);
      const transitionComplete = () => {
        if (this._config.focus) {
          this._focustrap.activate();
        }
        this._isTransitioning = false;
        EventHandler.trigger(this._element, EVENT_SHOWN$4, {
          relatedTarget
        });
      };
      this._queueCallback(transitionComplete, this._dialog, this._isAnimated());
    }
    _addEventListeners() {
      EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS$1, (event) => {
        if (event.key !== ESCAPE_KEY$1) {
          return;
        }
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        this._triggerBackdropTransition();
      });
      EventHandler.on(window, EVENT_RESIZE$1, () => {
        if (this._isShown && !this._isTransitioning) {
          this._adjustDialog();
        }
      });
      EventHandler.on(this._element, EVENT_MOUSEDOWN_DISMISS, (event) => {
        EventHandler.one(this._element, EVENT_CLICK_DISMISS, (event2) => {
          if (this._element !== event.target || this._element !== event2.target) {
            return;
          }
          if (this._config.backdrop === "static") {
            this._triggerBackdropTransition();
            return;
          }
          if (this._config.backdrop) {
            this.hide();
          }
        });
      });
    }
    _hideModal() {
      this._element.style.display = "none";
      this._element.setAttribute("aria-hidden", true);
      this._element.removeAttribute("aria-modal");
      this._element.removeAttribute("role");
      this._isTransitioning = false;
      this._backdrop.hide(() => {
        document.body.classList.remove(CLASS_NAME_OPEN);
        this._resetAdjustments();
        this._scrollBar.reset();
        EventHandler.trigger(this._element, EVENT_HIDDEN$4);
      });
    }
    _isAnimated() {
      return this._element.classList.contains(CLASS_NAME_FADE$3);
    }
    _triggerBackdropTransition() {
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED$1);
      if (hideEvent.defaultPrevented) {
        return;
      }
      const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
      const initialOverflowY = this._element.style.overflowY;
      if (initialOverflowY === "hidden" || this._element.classList.contains(CLASS_NAME_STATIC)) {
        return;
      }
      if (!isModalOverflowing) {
        this._element.style.overflowY = "hidden";
      }
      this._element.classList.add(CLASS_NAME_STATIC);
      this._queueCallback(() => {
        this._element.classList.remove(CLASS_NAME_STATIC);
        this._queueCallback(() => {
          this._element.style.overflowY = initialOverflowY;
        }, this._dialog);
      }, this._dialog);
      this._element.focus();
    }
    /**
     * The following methods are used to handle overflowing modals
     */
    _adjustDialog() {
      const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
      const scrollbarWidth = this._scrollBar.getWidth();
      const isBodyOverflowing = scrollbarWidth > 0;
      if (isBodyOverflowing && !isModalOverflowing) {
        const property = isRTL() ? "paddingLeft" : "paddingRight";
        this._element.style[property] = `${scrollbarWidth}px`;
      }
      if (!isBodyOverflowing && isModalOverflowing) {
        const property = isRTL() ? "paddingRight" : "paddingLeft";
        this._element.style[property] = `${scrollbarWidth}px`;
      }
    }
    _resetAdjustments() {
      this._element.style.paddingLeft = "";
      this._element.style.paddingRight = "";
    }
    // Static
    static jQueryInterface(config, relatedTarget) {
      return this.each(function() {
        const data = _Modal.getOrCreateInstance(this, config);
        if (typeof config !== "string") {
          return;
        }
        if (typeof data[config] === "undefined") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config](relatedTarget);
      });
    }
  };
  EventHandler.on(document, EVENT_CLICK_DATA_API$2, SELECTOR_DATA_TOGGLE$2, function(event) {
    const target = SelectorEngine.getElementFromSelector(this);
    if (["A", "AREA"].includes(this.tagName)) {
      event.preventDefault();
    }
    EventHandler.one(target, EVENT_SHOW$4, (showEvent) => {
      if (showEvent.defaultPrevented) {
        return;
      }
      EventHandler.one(target, EVENT_HIDDEN$4, () => {
        if (isVisible(this)) {
          this.focus();
        }
      });
    });
    const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR$1);
    if (alreadyOpen) {
      Modal.getInstance(alreadyOpen).hide();
    }
    const data = Modal.getOrCreateInstance(target);
    data.toggle(this);
  });
  enableDismissTrigger(Modal);
  defineJQueryPlugin(Modal);
  var NAME$6 = "offcanvas";
  var DATA_KEY$3 = "bs.offcanvas";
  var EVENT_KEY$3 = `.${DATA_KEY$3}`;
  var DATA_API_KEY$1 = ".data-api";
  var EVENT_LOAD_DATA_API$2 = `load${EVENT_KEY$3}${DATA_API_KEY$1}`;
  var ESCAPE_KEY = "Escape";
  var CLASS_NAME_SHOW$3 = "show";
  var CLASS_NAME_SHOWING$1 = "showing";
  var CLASS_NAME_HIDING = "hiding";
  var CLASS_NAME_BACKDROP = "offcanvas-backdrop";
  var OPEN_SELECTOR = ".offcanvas.show";
  var EVENT_SHOW$3 = `show${EVENT_KEY$3}`;
  var EVENT_SHOWN$3 = `shown${EVENT_KEY$3}`;
  var EVENT_HIDE$3 = `hide${EVENT_KEY$3}`;
  var EVENT_HIDE_PREVENTED = `hidePrevented${EVENT_KEY$3}`;
  var EVENT_HIDDEN$3 = `hidden${EVENT_KEY$3}`;
  var EVENT_RESIZE = `resize${EVENT_KEY$3}`;
  var EVENT_CLICK_DATA_API$1 = `click${EVENT_KEY$3}${DATA_API_KEY$1}`;
  var EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY$3}`;
  var SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle="offcanvas"]';
  var Default$5 = {
    backdrop: true,
    keyboard: true,
    scroll: false
  };
  var DefaultType$5 = {
    backdrop: "(boolean|string)",
    keyboard: "boolean",
    scroll: "boolean"
  };
  var Offcanvas = class _Offcanvas extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._isShown = false;
      this._backdrop = this._initializeBackDrop();
      this._focustrap = this._initializeFocusTrap();
      this._addEventListeners();
    }
    // Getters
    static get Default() {
      return Default$5;
    }
    static get DefaultType() {
      return DefaultType$5;
    }
    static get NAME() {
      return NAME$6;
    }
    // Public
    toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    }
    show(relatedTarget) {
      if (this._isShown) {
        return;
      }
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$3, {
        relatedTarget
      });
      if (showEvent.defaultPrevented) {
        return;
      }
      this._isShown = true;
      this._backdrop.show();
      if (!this._config.scroll) {
        new ScrollBarHelper().hide();
      }
      this._element.setAttribute("aria-modal", true);
      this._element.setAttribute("role", "dialog");
      this._element.classList.add(CLASS_NAME_SHOWING$1);
      const completeCallBack = () => {
        if (!this._config.scroll || this._config.backdrop) {
          this._focustrap.activate();
        }
        this._element.classList.add(CLASS_NAME_SHOW$3);
        this._element.classList.remove(CLASS_NAME_SHOWING$1);
        EventHandler.trigger(this._element, EVENT_SHOWN$3, {
          relatedTarget
        });
      };
      this._queueCallback(completeCallBack, this._element, true);
    }
    hide() {
      if (!this._isShown) {
        return;
      }
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$3);
      if (hideEvent.defaultPrevented) {
        return;
      }
      this._focustrap.deactivate();
      this._element.blur();
      this._isShown = false;
      this._element.classList.add(CLASS_NAME_HIDING);
      this._backdrop.hide();
      const completeCallback = () => {
        this._element.classList.remove(CLASS_NAME_SHOW$3, CLASS_NAME_HIDING);
        this._element.removeAttribute("aria-modal");
        this._element.removeAttribute("role");
        if (!this._config.scroll) {
          new ScrollBarHelper().reset();
        }
        EventHandler.trigger(this._element, EVENT_HIDDEN$3);
      };
      this._queueCallback(completeCallback, this._element, true);
    }
    dispose() {
      this._backdrop.dispose();
      this._focustrap.deactivate();
      super.dispose();
    }
    // Private
    _initializeBackDrop() {
      const clickCallback = () => {
        if (this._config.backdrop === "static") {
          EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
          return;
        }
        this.hide();
      };
      const isVisible2 = Boolean(this._config.backdrop);
      return new Backdrop({
        className: CLASS_NAME_BACKDROP,
        isVisible: isVisible2,
        isAnimated: true,
        rootElement: this._element.parentNode,
        clickCallback: isVisible2 ? clickCallback : null
      });
    }
    _initializeFocusTrap() {
      return new FocusTrap({
        trapElement: this._element
      });
    }
    _addEventListeners() {
      EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, (event) => {
        if (event.key !== ESCAPE_KEY) {
          return;
        }
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
      });
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Offcanvas.getOrCreateInstance(this, config);
        if (typeof config !== "string") {
          return;
        }
        if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config](this);
      });
    }
  };
  EventHandler.on(document, EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE$1, function(event) {
    const target = SelectorEngine.getElementFromSelector(this);
    if (["A", "AREA"].includes(this.tagName)) {
      event.preventDefault();
    }
    if (isDisabled(this)) {
      return;
    }
    EventHandler.one(target, EVENT_HIDDEN$3, () => {
      if (isVisible(this)) {
        this.focus();
      }
    });
    const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR);
    if (alreadyOpen && alreadyOpen !== target) {
      Offcanvas.getInstance(alreadyOpen).hide();
    }
    const data = Offcanvas.getOrCreateInstance(target);
    data.toggle(this);
  });
  EventHandler.on(window, EVENT_LOAD_DATA_API$2, () => {
    for (const selector of SelectorEngine.find(OPEN_SELECTOR)) {
      Offcanvas.getOrCreateInstance(selector).show();
    }
  });
  EventHandler.on(window, EVENT_RESIZE, () => {
    for (const element of SelectorEngine.find("[aria-modal][class*=show][class*=offcanvas-]")) {
      if (getComputedStyle(element).position !== "fixed") {
        Offcanvas.getOrCreateInstance(element).hide();
      }
    }
  });
  enableDismissTrigger(Offcanvas);
  defineJQueryPlugin(Offcanvas);
  var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
  var DefaultAllowlist = {
    // Global attributes allowed on any supplied element below.
    "*": ["class", "dir", "id", "lang", "role", ARIA_ATTRIBUTE_PATTERN],
    a: ["target", "href", "title", "rel"],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    dd: [],
    div: [],
    dl: [],
    dt: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ["src", "srcset", "alt", "title", "width", "height"],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  };
  var uriAttributes = /* @__PURE__ */ new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]);
  var SAFE_URL_PATTERN = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i;
  var allowedAttribute = (attribute, allowedAttributeList) => {
    const attributeName = attribute.nodeName.toLowerCase();
    if (allowedAttributeList.includes(attributeName)) {
      if (uriAttributes.has(attributeName)) {
        return Boolean(SAFE_URL_PATTERN.test(attribute.nodeValue));
      }
      return true;
    }
    return allowedAttributeList.filter((attributeRegex) => attributeRegex instanceof RegExp).some((regex) => regex.test(attributeName));
  };
  function sanitizeHtml(unsafeHtml, allowList, sanitizeFunction) {
    if (!unsafeHtml.length) {
      return unsafeHtml;
    }
    if (sanitizeFunction && typeof sanitizeFunction === "function") {
      return sanitizeFunction(unsafeHtml);
    }
    const domParser = new window.DOMParser();
    const createdDocument = domParser.parseFromString(unsafeHtml, "text/html");
    const elements = [].concat(...createdDocument.body.querySelectorAll("*"));
    for (const element of elements) {
      const elementName = element.nodeName.toLowerCase();
      if (!Object.keys(allowList).includes(elementName)) {
        element.remove();
        continue;
      }
      const attributeList = [].concat(...element.attributes);
      const allowedAttributes = [].concat(allowList["*"] || [], allowList[elementName] || []);
      for (const attribute of attributeList) {
        if (!allowedAttribute(attribute, allowedAttributes)) {
          element.removeAttribute(attribute.nodeName);
        }
      }
    }
    return createdDocument.body.innerHTML;
  }
  var NAME$5 = "TemplateFactory";
  var Default$4 = {
    allowList: DefaultAllowlist,
    content: {},
    // { selector : text ,  selector2 : text2 , }
    extraClass: "",
    html: false,
    sanitize: true,
    sanitizeFn: null,
    template: "<div></div>"
  };
  var DefaultType$4 = {
    allowList: "object",
    content: "object",
    extraClass: "(string|function)",
    html: "boolean",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    template: "string"
  };
  var DefaultContentType = {
    entry: "(string|element|function|null)",
    selector: "(string|element)"
  };
  var TemplateFactory = class extends Config {
    constructor(config) {
      super();
      this._config = this._getConfig(config);
    }
    // Getters
    static get Default() {
      return Default$4;
    }
    static get DefaultType() {
      return DefaultType$4;
    }
    static get NAME() {
      return NAME$5;
    }
    // Public
    getContent() {
      return Object.values(this._config.content).map((config) => this._resolvePossibleFunction(config)).filter(Boolean);
    }
    hasContent() {
      return this.getContent().length > 0;
    }
    changeContent(content) {
      this._checkContent(content);
      this._config.content = {
        ...this._config.content,
        ...content
      };
      return this;
    }
    toHtml() {
      const templateWrapper = document.createElement("div");
      templateWrapper.innerHTML = this._maybeSanitize(this._config.template);
      for (const [selector, text] of Object.entries(this._config.content)) {
        this._setContent(templateWrapper, text, selector);
      }
      const template = templateWrapper.children[0];
      const extraClass = this._resolvePossibleFunction(this._config.extraClass);
      if (extraClass) {
        template.classList.add(...extraClass.split(" "));
      }
      return template;
    }
    // Private
    _typeCheckConfig(config) {
      super._typeCheckConfig(config);
      this._checkContent(config.content);
    }
    _checkContent(arg) {
      for (const [selector, content] of Object.entries(arg)) {
        super._typeCheckConfig({
          selector,
          entry: content
        }, DefaultContentType);
      }
    }
    _setContent(template, content, selector) {
      const templateElement = SelectorEngine.findOne(selector, template);
      if (!templateElement) {
        return;
      }
      content = this._resolvePossibleFunction(content);
      if (!content) {
        templateElement.remove();
        return;
      }
      if (isElement2(content)) {
        this._putElementInTemplate(getElement(content), templateElement);
        return;
      }
      if (this._config.html) {
        templateElement.innerHTML = this._maybeSanitize(content);
        return;
      }
      templateElement.textContent = content;
    }
    _maybeSanitize(arg) {
      return this._config.sanitize ? sanitizeHtml(arg, this._config.allowList, this._config.sanitizeFn) : arg;
    }
    _resolvePossibleFunction(arg) {
      return execute(arg, [void 0, this]);
    }
    _putElementInTemplate(element, templateElement) {
      if (this._config.html) {
        templateElement.innerHTML = "";
        templateElement.append(element);
        return;
      }
      templateElement.textContent = element.textContent;
    }
  };
  var NAME$4 = "tooltip";
  var DISALLOWED_ATTRIBUTES = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]);
  var CLASS_NAME_FADE$2 = "fade";
  var CLASS_NAME_MODAL = "modal";
  var CLASS_NAME_SHOW$2 = "show";
  var SELECTOR_TOOLTIP_INNER = ".tooltip-inner";
  var SELECTOR_MODAL = `.${CLASS_NAME_MODAL}`;
  var EVENT_MODAL_HIDE = "hide.bs.modal";
  var TRIGGER_HOVER = "hover";
  var TRIGGER_FOCUS = "focus";
  var TRIGGER_CLICK = "click";
  var TRIGGER_MANUAL = "manual";
  var EVENT_HIDE$2 = "hide";
  var EVENT_HIDDEN$2 = "hidden";
  var EVENT_SHOW$2 = "show";
  var EVENT_SHOWN$2 = "shown";
  var EVENT_INSERTED = "inserted";
  var EVENT_CLICK$1 = "click";
  var EVENT_FOCUSIN$1 = "focusin";
  var EVENT_FOCUSOUT$1 = "focusout";
  var EVENT_MOUSEENTER = "mouseenter";
  var EVENT_MOUSELEAVE = "mouseleave";
  var AttachmentMap = {
    AUTO: "auto",
    TOP: "top",
    RIGHT: isRTL() ? "left" : "right",
    BOTTOM: "bottom",
    LEFT: isRTL() ? "right" : "left"
  };
  var Default$3 = {
    allowList: DefaultAllowlist,
    animation: true,
    boundary: "clippingParents",
    container: false,
    customClass: "",
    delay: 0,
    fallbackPlacements: ["top", "right", "bottom", "left"],
    html: false,
    offset: [0, 6],
    placement: "top",
    popperConfig: null,
    sanitize: true,
    sanitizeFn: null,
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    title: "",
    trigger: "hover focus"
  };
  var DefaultType$3 = {
    allowList: "object",
    animation: "boolean",
    boundary: "(string|element)",
    container: "(string|element|boolean)",
    customClass: "(string|function)",
    delay: "(number|object)",
    fallbackPlacements: "array",
    html: "boolean",
    offset: "(array|string|function)",
    placement: "(string|function)",
    popperConfig: "(null|object|function)",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    selector: "(string|boolean)",
    template: "string",
    title: "(string|element|function)",
    trigger: "string"
  };
  var Tooltip = class _Tooltip extends BaseComponent {
    constructor(element, config) {
      if (typeof lib_exports === "undefined") {
        throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");
      }
      super(element, config);
      this._isEnabled = true;
      this._timeout = 0;
      this._isHovered = null;
      this._activeTrigger = {};
      this._popper = null;
      this._templateFactory = null;
      this._newContent = null;
      this.tip = null;
      this._setListeners();
      if (!this._config.selector) {
        this._fixTitle();
      }
    }
    // Getters
    static get Default() {
      return Default$3;
    }
    static get DefaultType() {
      return DefaultType$3;
    }
    static get NAME() {
      return NAME$4;
    }
    // Public
    enable() {
      this._isEnabled = true;
    }
    disable() {
      this._isEnabled = false;
    }
    toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }
    toggle() {
      if (!this._isEnabled) {
        return;
      }
      if (this._isShown()) {
        this._leave();
        return;
      }
      this._enter();
    }
    dispose() {
      clearTimeout(this._timeout);
      EventHandler.off(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
      if (this._element.getAttribute("data-bs-original-title")) {
        this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title"));
      }
      this._disposePopper();
      super.dispose();
    }
    show() {
      if (this._element.style.display === "none") {
        throw new Error("Please use show on visible elements");
      }
      if (!(this._isWithContent() && this._isEnabled)) {
        return;
      }
      const showEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOW$2));
      const shadowRoot = findShadowRoot(this._element);
      const isInTheDom = (shadowRoot || this._element.ownerDocument.documentElement).contains(this._element);
      if (showEvent.defaultPrevented || !isInTheDom) {
        return;
      }
      this._disposePopper();
      const tip = this._getTipElement();
      this._element.setAttribute("aria-describedby", tip.getAttribute("id"));
      const {
        container
      } = this._config;
      if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
        container.append(tip);
        EventHandler.trigger(this._element, this.constructor.eventName(EVENT_INSERTED));
      }
      this._popper = this._createPopper(tip);
      tip.classList.add(CLASS_NAME_SHOW$2);
      if ("ontouchstart" in document.documentElement) {
        for (const element of [].concat(...document.body.children)) {
          EventHandler.on(element, "mouseover", noop);
        }
      }
      const complete = () => {
        EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOWN$2));
        if (this._isHovered === false) {
          this._leave();
        }
        this._isHovered = false;
      };
      this._queueCallback(complete, this.tip, this._isAnimated());
    }
    hide() {
      if (!this._isShown()) {
        return;
      }
      const hideEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDE$2));
      if (hideEvent.defaultPrevented) {
        return;
      }
      const tip = this._getTipElement();
      tip.classList.remove(CLASS_NAME_SHOW$2);
      if ("ontouchstart" in document.documentElement) {
        for (const element of [].concat(...document.body.children)) {
          EventHandler.off(element, "mouseover", noop);
        }
      }
      this._activeTrigger[TRIGGER_CLICK] = false;
      this._activeTrigger[TRIGGER_FOCUS] = false;
      this._activeTrigger[TRIGGER_HOVER] = false;
      this._isHovered = null;
      const complete = () => {
        if (this._isWithActiveTrigger()) {
          return;
        }
        if (!this._isHovered) {
          this._disposePopper();
        }
        this._element.removeAttribute("aria-describedby");
        EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDDEN$2));
      };
      this._queueCallback(complete, this.tip, this._isAnimated());
    }
    update() {
      if (this._popper) {
        this._popper.update();
      }
    }
    // Protected
    _isWithContent() {
      return Boolean(this._getTitle());
    }
    _getTipElement() {
      if (!this.tip) {
        this.tip = this._createTipElement(this._newContent || this._getContentForTemplate());
      }
      return this.tip;
    }
    _createTipElement(content) {
      const tip = this._getTemplateFactory(content).toHtml();
      if (!tip) {
        return null;
      }
      tip.classList.remove(CLASS_NAME_FADE$2, CLASS_NAME_SHOW$2);
      tip.classList.add(`bs-${this.constructor.NAME}-auto`);
      const tipId = getUID(this.constructor.NAME).toString();
      tip.setAttribute("id", tipId);
      if (this._isAnimated()) {
        tip.classList.add(CLASS_NAME_FADE$2);
      }
      return tip;
    }
    setContent(content) {
      this._newContent = content;
      if (this._isShown()) {
        this._disposePopper();
        this.show();
      }
    }
    _getTemplateFactory(content) {
      if (this._templateFactory) {
        this._templateFactory.changeContent(content);
      } else {
        this._templateFactory = new TemplateFactory({
          ...this._config,
          // the `content` var has to be after `this._config`
          // to override config.content in case of popover
          content,
          extraClass: this._resolvePossibleFunction(this._config.customClass)
        });
      }
      return this._templateFactory;
    }
    _getContentForTemplate() {
      return {
        [SELECTOR_TOOLTIP_INNER]: this._getTitle()
      };
    }
    _getTitle() {
      return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
    }
    // Private
    _initializeOnDelegatedTarget(event) {
      return this.constructor.getOrCreateInstance(event.delegateTarget, this._getDelegateConfig());
    }
    _isAnimated() {
      return this._config.animation || this.tip && this.tip.classList.contains(CLASS_NAME_FADE$2);
    }
    _isShown() {
      return this.tip && this.tip.classList.contains(CLASS_NAME_SHOW$2);
    }
    _createPopper(tip) {
      const placement = execute(this._config.placement, [this, tip, this._element]);
      const attachment = AttachmentMap[placement.toUpperCase()];
      return createPopper3(this._element, tip, this._getPopperConfig(attachment));
    }
    _getOffset() {
      const {
        offset: offset2
      } = this._config;
      if (typeof offset2 === "string") {
        return offset2.split(",").map((value) => Number.parseInt(value, 10));
      }
      if (typeof offset2 === "function") {
        return (popperData) => offset2(popperData, this._element);
      }
      return offset2;
    }
    _resolvePossibleFunction(arg) {
      return execute(arg, [this._element, this._element]);
    }
    _getPopperConfig(attachment) {
      const defaultBsPopperConfig = {
        placement: attachment,
        modifiers: [{
          name: "flip",
          options: {
            fallbackPlacements: this._config.fallbackPlacements
          }
        }, {
          name: "offset",
          options: {
            offset: this._getOffset()
          }
        }, {
          name: "preventOverflow",
          options: {
            boundary: this._config.boundary
          }
        }, {
          name: "arrow",
          options: {
            element: `.${this.constructor.NAME}-arrow`
          }
        }, {
          name: "preSetPlacement",
          enabled: true,
          phase: "beforeMain",
          fn: (data) => {
            this._getTipElement().setAttribute("data-popper-placement", data.state.placement);
          }
        }]
      };
      return {
        ...defaultBsPopperConfig,
        ...execute(this._config.popperConfig, [void 0, defaultBsPopperConfig])
      };
    }
    _setListeners() {
      const triggers = this._config.trigger.split(" ");
      for (const trigger of triggers) {
        if (trigger === "click") {
          EventHandler.on(this._element, this.constructor.eventName(EVENT_CLICK$1), this._config.selector, (event) => {
            const context = this._initializeOnDelegatedTarget(event);
            context._activeTrigger[TRIGGER_CLICK] = !(context._isShown() && context._activeTrigger[TRIGGER_CLICK]);
            context.toggle();
          });
        } else if (trigger !== TRIGGER_MANUAL) {
          const eventIn = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSEENTER) : this.constructor.eventName(EVENT_FOCUSIN$1);
          const eventOut = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSELEAVE) : this.constructor.eventName(EVENT_FOCUSOUT$1);
          EventHandler.on(this._element, eventIn, this._config.selector, (event) => {
            const context = this._initializeOnDelegatedTarget(event);
            context._activeTrigger[event.type === "focusin" ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
            context._enter();
          });
          EventHandler.on(this._element, eventOut, this._config.selector, (event) => {
            const context = this._initializeOnDelegatedTarget(event);
            context._activeTrigger[event.type === "focusout" ? TRIGGER_FOCUS : TRIGGER_HOVER] = context._element.contains(event.relatedTarget);
            context._leave();
          });
        }
      }
      this._hideModalHandler = () => {
        if (this._element) {
          this.hide();
        }
      };
      EventHandler.on(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
    }
    _fixTitle() {
      const title = this._element.getAttribute("title");
      if (!title) {
        return;
      }
      if (!this._element.getAttribute("aria-label") && !this._element.textContent.trim()) {
        this._element.setAttribute("aria-label", title);
      }
      this._element.setAttribute("data-bs-original-title", title);
      this._element.removeAttribute("title");
    }
    _enter() {
      if (this._isShown() || this._isHovered) {
        this._isHovered = true;
        return;
      }
      this._isHovered = true;
      this._setTimeout(() => {
        if (this._isHovered) {
          this.show();
        }
      }, this._config.delay.show);
    }
    _leave() {
      if (this._isWithActiveTrigger()) {
        return;
      }
      this._isHovered = false;
      this._setTimeout(() => {
        if (!this._isHovered) {
          this.hide();
        }
      }, this._config.delay.hide);
    }
    _setTimeout(handler, timeout) {
      clearTimeout(this._timeout);
      this._timeout = setTimeout(handler, timeout);
    }
    _isWithActiveTrigger() {
      return Object.values(this._activeTrigger).includes(true);
    }
    _getConfig(config) {
      const dataAttributes = Manipulator.getDataAttributes(this._element);
      for (const dataAttribute of Object.keys(dataAttributes)) {
        if (DISALLOWED_ATTRIBUTES.has(dataAttribute)) {
          delete dataAttributes[dataAttribute];
        }
      }
      config = {
        ...dataAttributes,
        ...typeof config === "object" && config ? config : {}
      };
      config = this._mergeConfigObj(config);
      config = this._configAfterMerge(config);
      this._typeCheckConfig(config);
      return config;
    }
    _configAfterMerge(config) {
      config.container = config.container === false ? document.body : getElement(config.container);
      if (typeof config.delay === "number") {
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      }
      if (typeof config.title === "number") {
        config.title = config.title.toString();
      }
      if (typeof config.content === "number") {
        config.content = config.content.toString();
      }
      return config;
    }
    _getDelegateConfig() {
      const config = {};
      for (const [key, value] of Object.entries(this._config)) {
        if (this.constructor.Default[key] !== value) {
          config[key] = value;
        }
      }
      config.selector = false;
      config.trigger = "manual";
      return config;
    }
    _disposePopper() {
      if (this._popper) {
        this._popper.destroy();
        this._popper = null;
      }
      if (this.tip) {
        this.tip.remove();
        this.tip = null;
      }
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Tooltip.getOrCreateInstance(this, config);
        if (typeof config !== "string") {
          return;
        }
        if (typeof data[config] === "undefined") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
  };
  defineJQueryPlugin(Tooltip);
  var NAME$3 = "popover";
  var SELECTOR_TITLE = ".popover-header";
  var SELECTOR_CONTENT = ".popover-body";
  var Default$2 = {
    ...Tooltip.Default,
    content: "",
    offset: [0, 8],
    placement: "right",
    template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    trigger: "click"
  };
  var DefaultType$2 = {
    ...Tooltip.DefaultType,
    content: "(null|string|element|function)"
  };
  var Popover = class _Popover extends Tooltip {
    // Getters
    static get Default() {
      return Default$2;
    }
    static get DefaultType() {
      return DefaultType$2;
    }
    static get NAME() {
      return NAME$3;
    }
    // Overrides
    _isWithContent() {
      return this._getTitle() || this._getContent();
    }
    // Private
    _getContentForTemplate() {
      return {
        [SELECTOR_TITLE]: this._getTitle(),
        [SELECTOR_CONTENT]: this._getContent()
      };
    }
    _getContent() {
      return this._resolvePossibleFunction(this._config.content);
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Popover.getOrCreateInstance(this, config);
        if (typeof config !== "string") {
          return;
        }
        if (typeof data[config] === "undefined") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
  };
  defineJQueryPlugin(Popover);
  var NAME$2 = "scrollspy";
  var DATA_KEY$2 = "bs.scrollspy";
  var EVENT_KEY$2 = `.${DATA_KEY$2}`;
  var DATA_API_KEY = ".data-api";
  var EVENT_ACTIVATE = `activate${EVENT_KEY$2}`;
  var EVENT_CLICK = `click${EVENT_KEY$2}`;
  var EVENT_LOAD_DATA_API$1 = `load${EVENT_KEY$2}${DATA_API_KEY}`;
  var CLASS_NAME_DROPDOWN_ITEM = "dropdown-item";
  var CLASS_NAME_ACTIVE$1 = "active";
  var SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
  var SELECTOR_TARGET_LINKS = "[href]";
  var SELECTOR_NAV_LIST_GROUP = ".nav, .list-group";
  var SELECTOR_NAV_LINKS = ".nav-link";
  var SELECTOR_NAV_ITEMS = ".nav-item";
  var SELECTOR_LIST_ITEMS = ".list-group-item";
  var SELECTOR_LINK_ITEMS = `${SELECTOR_NAV_LINKS}, ${SELECTOR_NAV_ITEMS} > ${SELECTOR_NAV_LINKS}, ${SELECTOR_LIST_ITEMS}`;
  var SELECTOR_DROPDOWN = ".dropdown";
  var SELECTOR_DROPDOWN_TOGGLE$1 = ".dropdown-toggle";
  var Default$1 = {
    offset: null,
    // TODO: v6 @deprecated, keep it for backwards compatibility reasons
    rootMargin: "0px 0px -25%",
    smoothScroll: false,
    target: null,
    threshold: [0.1, 0.5, 1]
  };
  var DefaultType$1 = {
    offset: "(number|null)",
    // TODO v6 @deprecated, keep it for backwards compatibility reasons
    rootMargin: "string",
    smoothScroll: "boolean",
    target: "element",
    threshold: "array"
  };
  var ScrollSpy = class _ScrollSpy extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._targetLinks = /* @__PURE__ */ new Map();
      this._observableSections = /* @__PURE__ */ new Map();
      this._rootElement = getComputedStyle(this._element).overflowY === "visible" ? null : this._element;
      this._activeTarget = null;
      this._observer = null;
      this._previousScrollData = {
        visibleEntryTop: 0,
        parentScrollTop: 0
      };
      this.refresh();
    }
    // Getters
    static get Default() {
      return Default$1;
    }
    static get DefaultType() {
      return DefaultType$1;
    }
    static get NAME() {
      return NAME$2;
    }
    // Public
    refresh() {
      this._initializeTargetsAndObservables();
      this._maybeEnableSmoothScroll();
      if (this._observer) {
        this._observer.disconnect();
      } else {
        this._observer = this._getNewObserver();
      }
      for (const section of this._observableSections.values()) {
        this._observer.observe(section);
      }
    }
    dispose() {
      this._observer.disconnect();
      super.dispose();
    }
    // Private
    _configAfterMerge(config) {
      config.target = getElement(config.target) || document.body;
      config.rootMargin = config.offset ? `${config.offset}px 0px -30%` : config.rootMargin;
      if (typeof config.threshold === "string") {
        config.threshold = config.threshold.split(",").map((value) => Number.parseFloat(value));
      }
      return config;
    }
    _maybeEnableSmoothScroll() {
      if (!this._config.smoothScroll) {
        return;
      }
      EventHandler.off(this._config.target, EVENT_CLICK);
      EventHandler.on(this._config.target, EVENT_CLICK, SELECTOR_TARGET_LINKS, (event) => {
        const observableSection = this._observableSections.get(event.target.hash);
        if (observableSection) {
          event.preventDefault();
          const root = this._rootElement || window;
          const height = observableSection.offsetTop - this._element.offsetTop;
          if (root.scrollTo) {
            root.scrollTo({
              top: height,
              behavior: "smooth"
            });
            return;
          }
          root.scrollTop = height;
        }
      });
    }
    _getNewObserver() {
      const options = {
        root: this._rootElement,
        threshold: this._config.threshold,
        rootMargin: this._config.rootMargin
      };
      return new IntersectionObserver((entries) => this._observerCallback(entries), options);
    }
    // The logic of selection
    _observerCallback(entries) {
      const targetElement = (entry) => this._targetLinks.get(`#${entry.target.id}`);
      const activate = (entry) => {
        this._previousScrollData.visibleEntryTop = entry.target.offsetTop;
        this._process(targetElement(entry));
      };
      const parentScrollTop = (this._rootElement || document.documentElement).scrollTop;
      const userScrollsDown = parentScrollTop >= this._previousScrollData.parentScrollTop;
      this._previousScrollData.parentScrollTop = parentScrollTop;
      for (const entry of entries) {
        if (!entry.isIntersecting) {
          this._activeTarget = null;
          this._clearActiveClass(targetElement(entry));
          continue;
        }
        const entryIsLowerThanPrevious = entry.target.offsetTop >= this._previousScrollData.visibleEntryTop;
        if (userScrollsDown && entryIsLowerThanPrevious) {
          activate(entry);
          if (!parentScrollTop) {
            return;
          }
          continue;
        }
        if (!userScrollsDown && !entryIsLowerThanPrevious) {
          activate(entry);
        }
      }
    }
    _initializeTargetsAndObservables() {
      this._targetLinks = /* @__PURE__ */ new Map();
      this._observableSections = /* @__PURE__ */ new Map();
      const targetLinks = SelectorEngine.find(SELECTOR_TARGET_LINKS, this._config.target);
      for (const anchor of targetLinks) {
        if (!anchor.hash || isDisabled(anchor)) {
          continue;
        }
        const observableSection = SelectorEngine.findOne(decodeURI(anchor.hash), this._element);
        if (isVisible(observableSection)) {
          this._targetLinks.set(decodeURI(anchor.hash), anchor);
          this._observableSections.set(anchor.hash, observableSection);
        }
      }
    }
    _process(target) {
      if (this._activeTarget === target) {
        return;
      }
      this._clearActiveClass(this._config.target);
      this._activeTarget = target;
      target.classList.add(CLASS_NAME_ACTIVE$1);
      this._activateParents(target);
      EventHandler.trigger(this._element, EVENT_ACTIVATE, {
        relatedTarget: target
      });
    }
    _activateParents(target) {
      if (target.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) {
        SelectorEngine.findOne(SELECTOR_DROPDOWN_TOGGLE$1, target.closest(SELECTOR_DROPDOWN)).classList.add(CLASS_NAME_ACTIVE$1);
        return;
      }
      for (const listGroup of SelectorEngine.parents(target, SELECTOR_NAV_LIST_GROUP)) {
        for (const item of SelectorEngine.prev(listGroup, SELECTOR_LINK_ITEMS)) {
          item.classList.add(CLASS_NAME_ACTIVE$1);
        }
      }
    }
    _clearActiveClass(parent) {
      parent.classList.remove(CLASS_NAME_ACTIVE$1);
      const activeNodes = SelectorEngine.find(`${SELECTOR_TARGET_LINKS}.${CLASS_NAME_ACTIVE$1}`, parent);
      for (const node of activeNodes) {
        node.classList.remove(CLASS_NAME_ACTIVE$1);
      }
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _ScrollSpy.getOrCreateInstance(this, config);
        if (typeof config !== "string") {
          return;
        }
        if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
  };
  EventHandler.on(window, EVENT_LOAD_DATA_API$1, () => {
    for (const spy of SelectorEngine.find(SELECTOR_DATA_SPY)) {
      ScrollSpy.getOrCreateInstance(spy);
    }
  });
  defineJQueryPlugin(ScrollSpy);
  var NAME$1 = "tab";
  var DATA_KEY$1 = "bs.tab";
  var EVENT_KEY$1 = `.${DATA_KEY$1}`;
  var EVENT_HIDE$1 = `hide${EVENT_KEY$1}`;
  var EVENT_HIDDEN$1 = `hidden${EVENT_KEY$1}`;
  var EVENT_SHOW$1 = `show${EVENT_KEY$1}`;
  var EVENT_SHOWN$1 = `shown${EVENT_KEY$1}`;
  var EVENT_CLICK_DATA_API = `click${EVENT_KEY$1}`;
  var EVENT_KEYDOWN = `keydown${EVENT_KEY$1}`;
  var EVENT_LOAD_DATA_API = `load${EVENT_KEY$1}`;
  var ARROW_LEFT_KEY = "ArrowLeft";
  var ARROW_RIGHT_KEY = "ArrowRight";
  var ARROW_UP_KEY = "ArrowUp";
  var ARROW_DOWN_KEY = "ArrowDown";
  var HOME_KEY = "Home";
  var END_KEY = "End";
  var CLASS_NAME_ACTIVE = "active";
  var CLASS_NAME_FADE$1 = "fade";
  var CLASS_NAME_SHOW$1 = "show";
  var CLASS_DROPDOWN = "dropdown";
  var SELECTOR_DROPDOWN_TOGGLE = ".dropdown-toggle";
  var SELECTOR_DROPDOWN_MENU = ".dropdown-menu";
  var NOT_SELECTOR_DROPDOWN_TOGGLE = `:not(${SELECTOR_DROPDOWN_TOGGLE})`;
  var SELECTOR_TAB_PANEL = '.list-group, .nav, [role="tablist"]';
  var SELECTOR_OUTER = ".nav-item, .list-group-item";
  var SELECTOR_INNER = `.nav-link${NOT_SELECTOR_DROPDOWN_TOGGLE}, .list-group-item${NOT_SELECTOR_DROPDOWN_TOGGLE}, [role="tab"]${NOT_SELECTOR_DROPDOWN_TOGGLE}`;
  var SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]';
  var SELECTOR_INNER_ELEM = `${SELECTOR_INNER}, ${SELECTOR_DATA_TOGGLE}`;
  var SELECTOR_DATA_TOGGLE_ACTIVE = `.${CLASS_NAME_ACTIVE}[data-bs-toggle="tab"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="pill"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="list"]`;
  var Tab = class _Tab extends BaseComponent {
    constructor(element) {
      super(element);
      this._parent = this._element.closest(SELECTOR_TAB_PANEL);
      if (!this._parent) {
        return;
      }
      this._setInitialAttributes(this._parent, this._getChildren());
      EventHandler.on(this._element, EVENT_KEYDOWN, (event) => this._keydown(event));
    }
    // Getters
    static get NAME() {
      return NAME$1;
    }
    // Public
    show() {
      const innerElem = this._element;
      if (this._elemIsActive(innerElem)) {
        return;
      }
      const active = this._getActiveElem();
      const hideEvent = active ? EventHandler.trigger(active, EVENT_HIDE$1, {
        relatedTarget: innerElem
      }) : null;
      const showEvent = EventHandler.trigger(innerElem, EVENT_SHOW$1, {
        relatedTarget: active
      });
      if (showEvent.defaultPrevented || hideEvent && hideEvent.defaultPrevented) {
        return;
      }
      this._deactivate(active, innerElem);
      this._activate(innerElem, active);
    }
    // Private
    _activate(element, relatedElem) {
      if (!element) {
        return;
      }
      element.classList.add(CLASS_NAME_ACTIVE);
      this._activate(SelectorEngine.getElementFromSelector(element));
      const complete = () => {
        if (element.getAttribute("role") !== "tab") {
          element.classList.add(CLASS_NAME_SHOW$1);
          return;
        }
        element.removeAttribute("tabindex");
        element.setAttribute("aria-selected", true);
        this._toggleDropDown(element, true);
        EventHandler.trigger(element, EVENT_SHOWN$1, {
          relatedTarget: relatedElem
        });
      };
      this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));
    }
    _deactivate(element, relatedElem) {
      if (!element) {
        return;
      }
      element.classList.remove(CLASS_NAME_ACTIVE);
      element.blur();
      this._deactivate(SelectorEngine.getElementFromSelector(element));
      const complete = () => {
        if (element.getAttribute("role") !== "tab") {
          element.classList.remove(CLASS_NAME_SHOW$1);
          return;
        }
        element.setAttribute("aria-selected", false);
        element.setAttribute("tabindex", "-1");
        this._toggleDropDown(element, false);
        EventHandler.trigger(element, EVENT_HIDDEN$1, {
          relatedTarget: relatedElem
        });
      };
      this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));
    }
    _keydown(event) {
      if (![ARROW_LEFT_KEY, ARROW_RIGHT_KEY, ARROW_UP_KEY, ARROW_DOWN_KEY, HOME_KEY, END_KEY].includes(event.key)) {
        return;
      }
      event.stopPropagation();
      event.preventDefault();
      const children = this._getChildren().filter((element) => !isDisabled(element));
      let nextActiveElement;
      if ([HOME_KEY, END_KEY].includes(event.key)) {
        nextActiveElement = children[event.key === HOME_KEY ? 0 : children.length - 1];
      } else {
        const isNext = [ARROW_RIGHT_KEY, ARROW_DOWN_KEY].includes(event.key);
        nextActiveElement = getNextActiveElement(children, event.target, isNext, true);
      }
      if (nextActiveElement) {
        nextActiveElement.focus({
          preventScroll: true
        });
        _Tab.getOrCreateInstance(nextActiveElement).show();
      }
    }
    _getChildren() {
      return SelectorEngine.find(SELECTOR_INNER_ELEM, this._parent);
    }
    _getActiveElem() {
      return this._getChildren().find((child) => this._elemIsActive(child)) || null;
    }
    _setInitialAttributes(parent, children) {
      this._setAttributeIfNotExists(parent, "role", "tablist");
      for (const child of children) {
        this._setInitialAttributesOnChild(child);
      }
    }
    _setInitialAttributesOnChild(child) {
      child = this._getInnerElement(child);
      const isActive = this._elemIsActive(child);
      const outerElem = this._getOuterElement(child);
      child.setAttribute("aria-selected", isActive);
      if (outerElem !== child) {
        this._setAttributeIfNotExists(outerElem, "role", "presentation");
      }
      if (!isActive) {
        child.setAttribute("tabindex", "-1");
      }
      this._setAttributeIfNotExists(child, "role", "tab");
      this._setInitialAttributesOnTargetPanel(child);
    }
    _setInitialAttributesOnTargetPanel(child) {
      const target = SelectorEngine.getElementFromSelector(child);
      if (!target) {
        return;
      }
      this._setAttributeIfNotExists(target, "role", "tabpanel");
      if (child.id) {
        this._setAttributeIfNotExists(target, "aria-labelledby", `${child.id}`);
      }
    }
    _toggleDropDown(element, open) {
      const outerElem = this._getOuterElement(element);
      if (!outerElem.classList.contains(CLASS_DROPDOWN)) {
        return;
      }
      const toggle = (selector, className) => {
        const element2 = SelectorEngine.findOne(selector, outerElem);
        if (element2) {
          element2.classList.toggle(className, open);
        }
      };
      toggle(SELECTOR_DROPDOWN_TOGGLE, CLASS_NAME_ACTIVE);
      toggle(SELECTOR_DROPDOWN_MENU, CLASS_NAME_SHOW$1);
      outerElem.setAttribute("aria-expanded", open);
    }
    _setAttributeIfNotExists(element, attribute, value) {
      if (!element.hasAttribute(attribute)) {
        element.setAttribute(attribute, value);
      }
    }
    _elemIsActive(elem) {
      return elem.classList.contains(CLASS_NAME_ACTIVE);
    }
    // Try to get the inner element (usually the .nav-link)
    _getInnerElement(elem) {
      return elem.matches(SELECTOR_INNER_ELEM) ? elem : SelectorEngine.findOne(SELECTOR_INNER_ELEM, elem);
    }
    // Try to get the outer element (usually the .nav-item)
    _getOuterElement(elem) {
      return elem.closest(SELECTOR_OUTER) || elem;
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Tab.getOrCreateInstance(this);
        if (typeof config !== "string") {
          return;
        }
        if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
  };
  EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function(event) {
    if (["A", "AREA"].includes(this.tagName)) {
      event.preventDefault();
    }
    if (isDisabled(this)) {
      return;
    }
    Tab.getOrCreateInstance(this).show();
  });
  EventHandler.on(window, EVENT_LOAD_DATA_API, () => {
    for (const element of SelectorEngine.find(SELECTOR_DATA_TOGGLE_ACTIVE)) {
      Tab.getOrCreateInstance(element);
    }
  });
  defineJQueryPlugin(Tab);
  var NAME = "toast";
  var DATA_KEY = "bs.toast";
  var EVENT_KEY = `.${DATA_KEY}`;
  var EVENT_MOUSEOVER = `mouseover${EVENT_KEY}`;
  var EVENT_MOUSEOUT = `mouseout${EVENT_KEY}`;
  var EVENT_FOCUSIN = `focusin${EVENT_KEY}`;
  var EVENT_FOCUSOUT = `focusout${EVENT_KEY}`;
  var EVENT_HIDE = `hide${EVENT_KEY}`;
  var EVENT_HIDDEN = `hidden${EVENT_KEY}`;
  var EVENT_SHOW = `show${EVENT_KEY}`;
  var EVENT_SHOWN = `shown${EVENT_KEY}`;
  var CLASS_NAME_FADE = "fade";
  var CLASS_NAME_HIDE = "hide";
  var CLASS_NAME_SHOW = "show";
  var CLASS_NAME_SHOWING = "showing";
  var DefaultType = {
    animation: "boolean",
    autohide: "boolean",
    delay: "number"
  };
  var Default = {
    animation: true,
    autohide: true,
    delay: 5e3
  };
  var Toast = class _Toast extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._timeout = null;
      this._hasMouseInteraction = false;
      this._hasKeyboardInteraction = false;
      this._setListeners();
    }
    // Getters
    static get Default() {
      return Default;
    }
    static get DefaultType() {
      return DefaultType;
    }
    static get NAME() {
      return NAME;
    }
    // Public
    show() {
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW);
      if (showEvent.defaultPrevented) {
        return;
      }
      this._clearTimeout();
      if (this._config.animation) {
        this._element.classList.add(CLASS_NAME_FADE);
      }
      const complete = () => {
        this._element.classList.remove(CLASS_NAME_SHOWING);
        EventHandler.trigger(this._element, EVENT_SHOWN);
        this._maybeScheduleHide();
      };
      this._element.classList.remove(CLASS_NAME_HIDE);
      reflow(this._element);
      this._element.classList.add(CLASS_NAME_SHOW, CLASS_NAME_SHOWING);
      this._queueCallback(complete, this._element, this._config.animation);
    }
    hide() {
      if (!this.isShown()) {
        return;
      }
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE);
      if (hideEvent.defaultPrevented) {
        return;
      }
      const complete = () => {
        this._element.classList.add(CLASS_NAME_HIDE);
        this._element.classList.remove(CLASS_NAME_SHOWING, CLASS_NAME_SHOW);
        EventHandler.trigger(this._element, EVENT_HIDDEN);
      };
      this._element.classList.add(CLASS_NAME_SHOWING);
      this._queueCallback(complete, this._element, this._config.animation);
    }
    dispose() {
      this._clearTimeout();
      if (this.isShown()) {
        this._element.classList.remove(CLASS_NAME_SHOW);
      }
      super.dispose();
    }
    isShown() {
      return this._element.classList.contains(CLASS_NAME_SHOW);
    }
    // Private
    _maybeScheduleHide() {
      if (!this._config.autohide) {
        return;
      }
      if (this._hasMouseInteraction || this._hasKeyboardInteraction) {
        return;
      }
      this._timeout = setTimeout(() => {
        this.hide();
      }, this._config.delay);
    }
    _onInteraction(event, isInteracting) {
      switch (event.type) {
        case "mouseover":
        case "mouseout": {
          this._hasMouseInteraction = isInteracting;
          break;
        }
        case "focusin":
        case "focusout": {
          this._hasKeyboardInteraction = isInteracting;
          break;
        }
      }
      if (isInteracting) {
        this._clearTimeout();
        return;
      }
      const nextElement = event.relatedTarget;
      if (this._element === nextElement || this._element.contains(nextElement)) {
        return;
      }
      this._maybeScheduleHide();
    }
    _setListeners() {
      EventHandler.on(this._element, EVENT_MOUSEOVER, (event) => this._onInteraction(event, true));
      EventHandler.on(this._element, EVENT_MOUSEOUT, (event) => this._onInteraction(event, false));
      EventHandler.on(this._element, EVENT_FOCUSIN, (event) => this._onInteraction(event, true));
      EventHandler.on(this._element, EVENT_FOCUSOUT, (event) => this._onInteraction(event, false));
    }
    _clearTimeout() {
      clearTimeout(this._timeout);
      this._timeout = null;
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Toast.getOrCreateInstance(this, config);
        if (typeof config === "string") {
          if (typeof data[config] === "undefined") {
            throw new TypeError(`No method named "${config}"`);
          }
          data[config](this);
        }
      });
    }
  };
  enableDismissTrigger(Toast);
  defineJQueryPlugin(Toast);

  // src/VehicleVision.Pleasanter.JobRunner.Web/ClientApp/ts/app.ts
  var ko = __toESM(require_knockout_latest(), 1);
  var scriptSamples = {
    CSharp: 'Console.WriteLine("Hello from C#");',
    Python: 'print("Hello from Python")'
  };
  var JobRunnerViewModel = class {
    selectedLanguage;
    scriptCode;
    sampleButtonText;
    constructor(root) {
      const languageSelect = root.querySelector("[data-jobrunner-language]");
      const codeTextArea = root.querySelector("[data-jobrunner-code]");
      this.selectedLanguage = ko.observable(languageSelect?.value || "CSharp");
      this.scriptCode = ko.observable(codeTextArea?.value || scriptSamples.CSharp);
      this.sampleButtonText = ko.pureComputed(() => `Use ${this.selectedLanguage()} sample`);
    }
    useSample = () => {
      this.scriptCode(scriptSamples[this.selectedLanguage()] ?? scriptSamples.CSharp);
    };
  };
  function applyJobRunnerBindings() {
    const root = document.querySelector("[data-jobrunner-app]");
    if (!root) {
      return;
    }
    ko.applyBindings(new JobRunnerViewModel(root), root);
  }
  document.addEventListener("DOMContentLoaded", applyJobRunnerBindings);
})();
/*! Bundled license information:

knockout/build/output/knockout-latest.js:
  (*!
   * Knockout JavaScript library v3.5.3
   * (c) The Knockout.js team - http://knockoutjs.com/
   * License: MIT (http://www.opensource.org/licenses/mit-license.php)
   *)

bootstrap/dist/js/bootstrap.esm.js:
  (*!
    * Bootstrap v5.3.8 (https://getbootstrap.com/)
    * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    *)
*/
//# sourceMappingURL=app.js.map
