/**
 * @license  OpenTok JavaScript Library v2.5.1 23265fa HEAD
 * http://www.tokbox.com/
 *
 * Copyright (c) 2014 TokBox, Inc.
 *
 * Date: April 13 06:37:41 2015
 */
! function(a) {
    ! function(a, b, c) {
        function d(a) {
            if ("string" == typeof a) return a;
            var b = [];
            for (var c in a) b.push(encodeURIComponent(c) + "=" + encodeURIComponent(a[c]));
            return b.join("&").replace(/\+/g, "%20")
        }

        function e(a, b) {
            return b ? k.hasCapabilities("classList") ? a.classList.contains(b) : a.className.indexOf(b) > -1 : !1
        }

        function f(a, b) {
            if (b && 0 !== b.length && 1 === a.nodeType) {
                var c = b.length,
                    d = 0;
                if (k.hasCapabilities("classList"))
                    for (; c > d; ++d) a.classList.toggle(b[d]);
                else {
                    for (var f = (" " + a.className + " ").replace(/[\s+]/, " "); c > d; ++d) e(a, b[d]) ? f = f.replace(" " + b[d] + " ", " ") : f += b[d] + " ";
                    a.className = k.trim(f)
                }
            }
        }

        function g(a, b) {
            if (b && 0 !== b.length && 1 === a.nodeType) {
                var c = b.length,
                    d = 0;
                if (k.hasCapabilities("classList"))
                    for (; c > d; ++d) a.classList.add(b[d]);
                else if (a.className || 1 !== b.length) {
                    for (var e = " " + a.className + " "; c > d; ++d) ~e.indexOf(" " + b[d] + " ") || (e += b[d] + " ");
                    a.className = k.trim(e)
                } else a.className = b.join(" ")
            }
        }

        function h(a, b) {
                if (b && 0 !== b.length && 1 === a.nodeType) {
                    var c = b.length,
                        d = 0;
                    if (k.hasCapabilities("classList"))
                        for (; c > d; ++d) a.classList.remove(b[d]);
                    else {
                        for (var e = (" " + a.className + " ").replace(/[\s+]/, " "); c > d; ++d) e = e.replace(" " + b[d] + " ", " ");
                        a.className = k.trim(e)
                    }
                }
            }
            /**
             * @license  Common JS Helpers on OpenTok 0.3.0 058dfa5 2015Q1
             * http://www.tokbox.com/
             *
             * Copyright (c) 2015 TokBox, Inc.
             *
             * Date: April 13 06:37:28 2015
             *
             */
        var i = Array.prototype.slice,
            j = /^#([\w-]*)$/,
            b = function(c, d) {
                var e = [];
                if ("string" == typeof c) {
                    var f = j.exec(c);
                    if (d = d || document, f && f[1]) {
                        var g = d.getElementById(f[1]);
                        g && e.push(g)
                    } else e = d.querySelectorAll(c)
                } else c && (c.nodeType || a.XMLHttpRequest && c instanceof XMLHttpRequest) ? (e = [c], d = c) : b.isArray(c) && (e = c.slice(), d = null);
                return new m(e, d)
            },
            k = b,
            l = function(a) {
                if ("IE" !== k.env.name || k.env.version > 9) return i.call(a);
                for (var b = [], c = 0, d = a.length; d > c; ++c) b.push(a[c]);
                return b
            },
            m = function(a, b) {
                var c = l(a);
                this.context = b, this.toArray = function() {
                    return c
                }, this.length = c.length, this.first = c[0], this.last = c[c.length - 1], this.get = function(a) {
                    return void 0 === a ? c : c[a]
                }
            };
        m.prototype.some = function(a, b) {
            return k.some(this.get(), a, b)
        }, m.prototype.forEach = function(a, b) {
            return k.forEach(this.get(), a, b), this
        }, m.prototype.map = function(a, b) {
            return new m(k.map(this.get(), a, b), this.context)
        }, m.prototype.filter = function(a, b) {
            return new m(k.filter(this.get(), a, b), this.context)
        }, m.prototype.find = function(a) {
            return k(a, this.first)
        };
        var n = a.OTHelpers;
        a.OTHelpers = b, a.___othelpers = !0, b.keys = Object.keys || function(a) {
            var b = [],
                c = Object.prototype.hasOwnProperty;
            for (var d in a) c.call(a, d) && b.push(d);
            return b
        };
        var o = Array.prototype.forEach || function(a, b) {
            for (var c = 0, d = this.length || 0; d > c; ++c) c in this && a.call(b, this[c], c)
        };
        b.forEach = function(a, b, c) {
            return o.call(a, b, c)
        };
        var p = Array.prototype.map || function(a, b) {
            var c = [];
            return o.call(this, function(d, e) {
                c.push(a.call(b, d, e))
            }), c
        };
        b.map = function(a, b) {
            return p.call(a, b)
        };
        var q = Array.prototype.filter || function(a, b) {
            var c = [];
            return o.call(this, function(d, e) {
                a.call(b, d, e) && c.push(d)
            }), c
        };
        b.filter = function(a, b, c) {
            return q.call(a, b, c)
        };
        var r = Array.prototype.some || function(a, b) {
            for (var c = !1, d = 0, e = this.length || 0; e > d; ++d)
                if (d in this && a.call(b, this[d], d)) {
                    c = !0;
                    break
                }
            return c
        };
        b.find = function(a, b, c) {
            if (!k.isFunction(b)) throw new TypeError("iter must be a function");
            for (var d = void 0, e = 0, f = a.length || 0; f > e; ++e)
                if (e in a && b.call(c, a[e], e)) {
                    d = a[e];
                    break
                }
            return d
        }, b.findIndex = function(a, b, c) {
            if (!k.isFunction(b)) throw new TypeError("iter must be a function");
            for (var d = 0, e = a.length || 0; e > d; ++d)
                if (d in a && b.call(c, a[d], d, a)) return d;
            return -1
        }, b.some = function(a, b, c) {
            return r.call(a, b, c)
        };
        var s = Array.prototype.indexOf || function(a, b) {
            var c, d, e = b ? b : 0;
            if (!this) throw new TypeError;
            if (d = this.length, 0 === d || e >= d) return -1;
            for (0 > e && (e = d - Math.abs(e)), c = e; d > c; c++)
                if (this[c] === a) return c;
            return -1
        };
        b.arrayIndexOf = function(a, b, c) {
            return s.call(a, b, c)
        };
        var t = Function.prototype.bind || function() {
            var a = i.call(arguments),
                b = a.shift(),
                c = this;
            return function() {
                return c.apply(b, a.concat(i.call(arguments)))
            }
        };
        b.bind = function() {
            var a = i.call(arguments),
                b = a.shift();
            return t.apply(b, a)
        };
        var u = String.prototype.trim || function() {
            return this.replace(/^\s+|\s+$/g, "")
        };
        b.trim = function(a) {
            return u.call(a)
        }, b.noConflict = function() {
            return b.noConflict = function() {
                return b
            }, a.OTHelpers = n, b
        }, b.isNone = function(a) {
            return void 0 === a || null === a
        }, b.isObject = function(a) {
            return a === Object(a)
        }, b.isFunction = function(a) {
            return !!a && (-1 !== a.toString().indexOf("()") || "[object Function]" === Object.prototype.toString.call(a))
        }, b.isArray = b.isFunction(Array.isArray) && Array.isArray || function(a) {
            return "[object Array]" === Object.prototype.toString.call(a)
        }, b.isEmpty = function(a) {
            if (null === a || void 0 === a) return !0;
            if (b.isArray(a) || "string" == typeof a) return 0 === a.length;
            for (var c in a)
                if (a.hasOwnProperty(c)) return !1;
            return !0
        }, b.extend = function() {
            var a = i.call(arguments),
                c = a.shift();
            return b.forEach(a, function(a) {
                for (var b in a) c[b] = a[b]
            }), c
        }, b.defaults = function() {
            var a = i.call(arguments),
                c = a.shift();
            return b.forEach(a, function(a) {
                for (var b in a) void 0 === c[b] && (c[b] = a[b])
            }), c
        }, b.clone = function(a) {
            return b.isObject(a) ? b.isArray(a) ? a.slice() : b.extend({}, a) : a
        }, b.noop = function() {}, b.now = function() {
            var c, d = a.performance || {},
                e = d.now || d.mozNow || d.msNow || d.oNow || d.webkitNow;
            return e ? (e = b.bind(e, d), c = d.timing.navigationStart, function() {
                return c + e()
            }) : function() {
                return (new Date).getTime()
            }
        }(), b.canDefineProperty = !0;
        try {
            Object.defineProperty({}, "x", {})
        } catch (v) {
            b.canDefineProperty = !1
        }
        b.defineGetters = function(a, c, d) {
            var e = {};
            void 0 === d && (d = !1);
            for (var f in c) e[f] = {
                get: c[f],
                enumerable: d
            };
            b.defineProperties(a, e)
        };
        var w = function(a, b, c) {
            return b && !c ? function() {
                return b.call(a)
            } : b && c ? function(d) {
                return void 0 !== d && c.call(a, d), b.call(a)
            } : function(b) {
                void 0 !== b && c.call(a, b)
            }
        };
        b.defineProperties = function(a, b) {
                for (var c in b) a[c] = w(a, b[c].get, b[c].set)
            }, Object.create || (Object.create = function(a) {
                function b() {}
                if (arguments.length > 1) throw new Error("Object.create implementation only accepts the first parameter.");
                return b.prototype = a, new b
            }), b.invert = function(a) {
                var b = {};
                for (var c in a) a.hasOwnProperty(c) && (b[a[c]] = c);
                return b
            }, b.Event = function() {
                return function(a, d) {
                    this.type = a, this.cancelable = d !== c ? d : !0;
                    var e = !1;
                    this.preventDefault = function() {
                        this.cancelable ? e = !0 : b.warn("Event.preventDefault :: Trying to preventDefault on an Event that isn't cancelable")
                    }, this.isDefaultPrevented = function() {
                        return e
                    }
                }
            }, b.statable = function(a, c, d, e, f) {
                var g, h = a.currentState = d,
                    i = function(d) {
                        if (h !== d) {
                            if (-1 === b.arrayIndexOf(c, d)) return void(f && b.isFunction(f) && f("invalidState", d));
                            a.previousState = g = h, a.currentState = h = d, e && b.isFunction(e) && e(d, g)
                        }
                    };
                return a.is = function() {
                    return -1 !== b.arrayIndexOf(arguments, h)
                }, a.isNot = function() {
                    return -1 === b.arrayIndexOf(arguments, h)
                }, i
            },
            /*!
             *  This is a modified version of Robert Kieffer awesome uuid.js library.
             *  The only modifications we've made are to remove the Node.js specific
             *  parts of the code and the UUID version 1 generator (which we don't
             *  use). The original copyright notice is below.
             *
             *     node-uuid/uuid.js
             *
             *     Copyright (c) 2010 Robert Kieffer
             *     Dual licensed under the MIT and GPL licenses.
             *     Documentation and details at https://github.com/broofa/node-uuid
             */
            function() {
                function c(a, b, c) {
                    var d = b && c || 0,
                        e = 0;
                    for (b = b || [], a.toLowerCase().replace(/[0-9a-f]{2}/g, function(a) {
                            16 > e && (b[d + e++] = m[a])
                        }); 16 > e;) b[d + e++] = 0;
                    return b
                }

                function d(a, b) {
                    var c = b || 0,
                        d = l;
                    return d[a[c++]] + d[a[c++]] + d[a[c++]] + d[a[c++]] + "-" + d[a[c++]] + d[a[c++]] + "-" + d[a[c++]] + d[a[c++]] + "-" + d[a[c++]] + d[a[c++]] + "-" + d[a[c++]] + d[a[c++]] + d[a[c++]] + d[a[c++]] + d[a[c++]] + d[a[c++]]
                }

                function e(a, b, c) {
                    var e = b && c || 0;
                    "string" == typeof a && (b = "binary" === a ? new k(16) : null, a = null), a = a || {};
                    var f = a.random || (a.rng || j)();
                    if (f[6] = 15 & f[6] | 64, f[8] = 63 & f[8] | 128, b)
                        for (var g = 0; 16 > g; g++) b[e + g] = f[g];
                    return b || d(f)
                }
                var f, g, h = new Array(16);
                if (f = function() {
                        var a, b = h,
                            c = 0;
                        for (c = 0; 16 > c; c++) 0 === (3 & c) && (a = 4294967296 * Math.random()), b[c] = a >>> ((3 & c) << 3) & 255;
                        return b
                    }, a.crypto && crypto.getRandomValues) {
                    var i = new Uint32Array(4);
                    g = function() {
                        crypto.getRandomValues(i);
                        for (var a = 0; 16 > a; a++) h[a] = i[a >> 2] >>> 8 * (3 & a) & 255;
                        return h
                    }
                }
                for (var j = g || f, k = "function" == typeof Buffer ? Buffer : Array, l = [], m = {}, n = 0; 256 > n; n++) l[n] = (n + 256).toString(16).substr(1), m[l[n]] = n;
                var o = e;
                o.v4 = e, o.parse = c, o.unparse = d, o.BufferClass = k, o.mathRNG = f, o.whatwgRNG = g, b.uuid = o
            }(),
            /*!
             * @overview RSVP - a tiny implementation of Promises/A+.
             * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors
             * @license   Licensed under MIT license
             *            See https://raw.githubusercontent.com/tildeio/rsvp.js/master/LICENSE
             * @version   3.0.16
             */
            function() {
                "use strict";

                function d(a) {
                    return "function" == typeof a || "object" == typeof a && null !== a
                }

                function e(a) {
                    return "function" == typeof a
                }

                function f(a) {
                    return "object" == typeof a && null !== a
                }

                function g() {}

                function h(a, b) {
                    for (var c = 0, d = a.length; d > c; c++)
                        if (a[c] === b) return c;
                    return -1
                }

                function i(a) {
                    var b = a._promiseCallbacks;
                    return b || (b = a._promiseCallbacks = {}), b
                }

                function j(a, b) {
                    return "onerror" === a ? void ya.on("error", b) : 2 !== arguments.length ? ya[a] : void(ya[a] = b)
                }

                function k() {
                    setTimeout(function() {
                        for (var a, b = 0; b < za.length; b++) {
                            a = za[b];
                            var c = a.payload;
                            c.guid = c.key + c.id, c.childGuid = c.key + c.childId, c.error && (c.stack = c.error.stack), ya.trigger(a.name, a.payload)
                        }
                        za.length = 0
                    }, 50)
                }

                function l(a, b, c) {
                    1 === za.push({
                        name: a,
                        payload: {
                            key: b._guidKey,
                            id: b._id,
                            eventName: a,
                            detail: b._result,
                            childId: c && c._id,
                            label: b._label,
                            timeStamp: va(),
                            error: ya["instrument-with-stack"] ? new Error(b._label) : null
                        }
                    }) && k()
                }

                function m() {
                    return new TypeError("A promises callback cannot return that same promise.")
                }

                function n() {}

                function o(a) {
                    try {
                        return a.then
                    } catch (b) {
                        return Ea.error = b, Ea
                    }
                }

                function p(a, b, c, d) {
                    try {
                        a.call(b, c, d)
                    } catch (e) {
                        return e
                    }
                }

                function q(a, b, c) {
                    ya.async(function(a) {
                        var d = !1,
                            e = p(c, b, function(c) {
                                d || (d = !0, b !== c ? t(a, c) : v(a, c))
                            }, function(b) {
                                d || (d = !0, w(a, b))
                            }, "Settle: " + (a._label || " unknown promise"));
                        !d && e && (d = !0, w(a, e))
                    }, a)
                }

                function r(a, b) {
                    b._state === Ca ? v(a, b._result) : b._state === Da ? (b._onError = null, w(a, b._result)) : x(b, c, function(c) {
                        b !== c ? t(a, c) : v(a, c)
                    }, function(b) {
                        w(a, b)
                    })
                }

                function s(a, b) {
                    if (b.constructor === a.constructor) r(a, b);
                    else {
                        var d = o(b);
                        d === Ea ? w(a, Ea.error) : d === c ? v(a, b) : e(d) ? q(a, b, d) : v(a, b)
                    }
                }

                function t(a, b) {
                    a === b ? v(a, b) : d(b) ? s(a, b) : v(a, b)
                }

                function u(a) {
                    a._onError && a._onError(a._result), y(a)
                }

                function v(a, b) {
                    a._state === Ba && (a._result = b, a._state = Ca, 0 === a._subscribers.length ? ya.instrument && Aa("fulfilled", a) : ya.async(y, a))
                }

                function w(a, b) {
                    a._state === Ba && (a._state = Da, a._result = b, ya.async(u, a))
                }

                function x(a, b, c, d) {
                    var e = a._subscribers,
                        f = e.length;
                    a._onError = null, e[f] = b, e[f + Ca] = c, e[f + Da] = d, 0 === f && a._state && ya.async(y, a)
                }

                function y(a) {
                    var b = a._subscribers,
                        c = a._state;
                    if (ya.instrument && Aa(c === Ca ? "fulfilled" : "rejected", a), 0 !== b.length) {
                        for (var d, e, f = a._result, g = 0; g < b.length; g += 3) d = b[g], e = b[g + c], d ? B(c, d, e, f) : e(f);
                        a._subscribers.length = 0
                    }
                }

                function z() {
                    this.error = null
                }

                function A(a, b) {
                    try {
                        return a(b)
                    } catch (c) {
                        return Fa.error = c, Fa
                    }
                }

                function B(a, b, c, d) {
                    var f, g, h, i, j = e(c);
                    if (j) {
                        if (f = A(c, d), f === Fa ? (i = !0, g = f.error, f = null) : h = !0, b === f) return void w(b, m())
                    } else f = d, h = !0;
                    b._state !== Ba || (j && h ? t(b, f) : i ? w(b, g) : a === Ca ? v(b, f) : a === Da && w(b, f))
                }

                function C(a, b) {
                    var c = !1;
                    try {
                        b(function(b) {
                            c || (c = !0, t(a, b))
                        }, function(b) {
                            c || (c = !0, w(a, b))
                        })
                    } catch (d) {
                        w(a, d)
                    }
                }

                function D(a, b, c) {
                    return a === Ca ? {
                        state: "fulfilled",
                        value: c
                    } : {
                        state: "rejected",
                        reason: c
                    }
                }

                function E(a, b, c, d) {
                    this._instanceConstructor = a, this.promise = new a(n, d), this._abortOnReject = c, this._validateInput(b) ? (this._input = b, this.length = b.length, this._remaining = b.length, this._init(), 0 === this.length ? v(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(), 0 === this._remaining && v(this.promise, this._result))) : w(this.promise, this._validationError())
                }

                function F(a, b) {
                    return new Ga(this, a, !0, b).promise
                }

                function G(a, b) {
                    function d(a) {
                        t(g, a)
                    }

                    function e(a) {
                        w(g, a)
                    }
                    var f = this,
                        g = new f(n, b);
                    if (!ua(a)) return w(g, new TypeError("You must pass an array to race.")), g;
                    for (var h = a.length, i = 0; g._state === Ba && h > i; i++) x(f.resolve(a[i]), c, d, e);
                    return g
                }

                function H(a, b) {
                    var c = this;
                    if (a && "object" == typeof a && a.constructor === c) return a;
                    var d = new c(n, b);
                    return t(d, a), d
                }

                function I(a, b) {
                    var c = this,
                        d = new c(n, b);
                    return w(d, a), d
                }

                function J() {
                    throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                }

                function K() {
                    throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                }

                function L(a, b) {
                    this._id = Ma++, this._label = b, this._state = c, this._result = c, this._subscribers = [], ya.instrument && Aa("created", this), n !== a && (e(a) || J(), this instanceof L || K(), C(this, a))
                }

                function M(a, b, c) {
                    this._superConstructor(a, b, !1, c)
                }

                function N(a, b) {
                    return new M(Na, a, b).promise
                }

                function O(a, b) {
                    return Na.all(a, b)
                }

                function P(a, b) {
                    Za[Sa] = a, Za[Sa + 1] = b, Sa += 2, 2 === Sa && Pa()
                }

                function Q() {
                    var a = process.nextTick,
                        b = process.versions.node.match(/^(?:(\d+)\.)?(?:(\d+)\.)?(\*|\d+)$/);
                    return Array.isArray(b) && "0" === b[1] && "10" === b[2] && (a = setImmediate),
                        function() {
                            a(V)
                        }
                }

                function R() {
                    return function() {
                        Oa(V)
                    }
                }

                function S() {
                    var a = 0,
                        b = new Wa(V),
                        c = document.createTextNode("");
                    return b.observe(c, {
                            characterData: !0
                        }),
                        function() {
                            c.data = a = ++a % 2
                        }
                }

                function T() {
                    var a = new MessageChannel;
                    return a.port1.onmessage = V,
                        function() {
                            a.port2.postMessage(0)
                        }
                }

                function U() {
                    return function() {
                        setTimeout(V, 1)
                    }
                }

                function V() {
                    for (var a = 0; Sa > a; a += 2) {
                        var b = Za[a],
                            d = Za[a + 1];
                        b(d), Za[a] = c, Za[a + 1] = c
                    }
                    Sa = 0
                }

                function W() {
                    try {
                        var a = require,
                            b = a("vertx");
                        return Oa = b.runOnLoop || b.runOnContext, R()
                    } catch (c) {
                        return U()
                    }
                }

                function X(a) {
                    var b = {};
                    return b.promise = new Na(function(a, c) {
                        b.resolve = a, b.reject = c
                    }, a), b
                }

                function Y(a, b, c) {
                    return Na.all(a, c).then(function(a) {
                        if (!e(b)) throw new TypeError("You must pass a function as filter's second argument.");
                        for (var d = a.length, f = new Array(d), g = 0; d > g; g++) f[g] = b(a[g]);
                        return Na.all(f, c).then(function(b) {
                            for (var c = new Array(d), e = 0, f = 0; d > f; f++) b[f] && (c[e] = a[f], e++);
                            return c.length = e, c
                        })
                    })
                }

                function Z(a, b, c) {
                    this._superConstructor(a, b, !0, c)
                }

                function $(a, b, c) {
                    this._superConstructor(a, b, !1, c)
                }

                function _(a, b) {
                    return new $(Na, a, b).promise
                }

                function aa(a, b) {
                    return new ab(Na, a, b).promise
                }

                function ba(a, b, c) {
                    return Na.all(a, c).then(function(a) {
                        if (!e(b)) throw new TypeError("You must pass a function as map's second argument.");
                        for (var d = a.length, f = new Array(d), g = 0; d > g; g++) f[g] = b(a[g]);
                        return Na.all(f, c)
                    })
                }

                function ca() {
                    this.value = c
                }

                function da(a) {
                    try {
                        return a.then
                    } catch (b) {
                        return eb.value = b, eb
                    }
                }

                function ea(a, b, c) {
                    try {
                        a.apply(b, c)
                    } catch (d) {
                        return eb.value = d, eb
                    }
                }

                function fa(a, b) {
                    for (var c, d, e = {}, f = a.length, g = new Array(f), h = 0; f > h; h++) g[h] = a[h];
                    for (d = 0; d < b.length; d++) c = b[d], e[c] = g[d + 1];
                    return e
                }

                function ga(a) {
                    for (var b = a.length, c = new Array(b - 1), d = 1; b > d; d++) c[d - 1] = a[d];
                    return c
                }

                function ha(a, b) {
                    return {
                        then: function(c, d) {
                            return a.call(b, c, d)
                        }
                    }
                }

                function ia(a, b) {
                    var d = function() {
                        for (var d, e = this, f = arguments.length, g = new Array(f + 1), h = !1, i = 0; f > i; ++i) {
                            if (d = arguments[i], !h) {
                                if (h = la(d), h === fb) {
                                    var j = new Na(n);
                                    return w(j, fb.value), j
                                }
                                h && h !== !0 && (d = ha(h, d))
                            }
                            g[i] = d
                        }
                        var k = new Na(n);
                        return g[f] = function(a, d) {
                            a ? w(k, a) : b === c ? t(k, d) : b === !0 ? t(k, ga(arguments)) : ua(b) ? t(k, fa(arguments, b)) : t(k, d)
                        }, h ? ka(k, g, a, e) : ja(k, g, a, e)
                    };
                    return d.__proto__ = a, d
                }

                function ja(a, b, c, d) {
                    var e = ea(c, d, b);
                    return e === eb && w(a, e.value), a
                }

                function ka(a, b, c, d) {
                    return Na.all(b).then(function(b) {
                        var e = ea(c, d, b);
                        return e === eb && w(a, e.value), a
                    })
                }

                function la(a) {
                    return a && "object" == typeof a ? a.constructor === Na ? !0 : da(a) : !1
                }

                function ma(a, b) {
                    return Na.race(a, b)
                }

                function na(a, b) {
                    return Na.reject(a, b)
                }

                function oa(a, b) {
                    return Na.resolve(a, b)
                }

                function pa(a) {
                    throw setTimeout(function() {
                        throw a
                    }), a
                }

                function qa(a, b) {
                    ya.async(a, b)
                }

                function ra() {
                    ya.on.apply(ya, arguments)
                }

                function sa() {
                    ya.off.apply(ya, arguments)
                }
                var ta;
                ta = Array.isArray ? Array.isArray : function(a) {
                    return "[object Array]" === Object.prototype.toString.call(a)
                };
                var ua = ta,
                    va = Date.now || function() {
                        return (new Date).getTime()
                    },
                    wa = Object.create || function(a) {
                        if (arguments.length > 1) throw new Error("Second argument not supported");
                        if ("object" != typeof a) throw new TypeError("Argument must be an object");
                        return g.prototype = a, new g
                    },
                    xa = {
                        mixin: function(a) {
                            return a.on = this.on, a.off = this.off, a.trigger = this.trigger, a._promiseCallbacks = c, a
                        },
                        on: function(a, b) {
                            var c, d = i(this);
                            c = d[a], c || (c = d[a] = []), -1 === h(c, b) && c.push(b)
                        },
                        off: function(a, b) {
                            var c, d, e = i(this);
                            return b ? (c = e[a], d = h(c, b), void(-1 !== d && c.splice(d, 1))) : void(e[a] = [])
                        },
                        trigger: function(a, b) {
                            var c, d, e = i(this);
                            if (c = e[a])
                                for (var f = 0; f < c.length; f++)(d = c[f])(b)
                        }
                    },
                    ya = {
                        instrument: !1
                    };
                xa.mixin(ya);
                var za = [],
                    Aa = l,
                    Ba = void 0,
                    Ca = 1,
                    Da = 2,
                    Ea = new z,
                    Fa = new z,
                    Ga = E;
                E.prototype._validateInput = function(a) {
                    return ua(a)
                }, E.prototype._validationError = function() {
                    return new Error("Array Methods must be provided an Array")
                }, E.prototype._init = function() {
                    this._result = new Array(this.length)
                }, E.prototype._enumerate = function() {
                    for (var a = this.length, b = this.promise, c = this._input, d = 0; b._state === Ba && a > d; d++) this._eachEntry(c[d], d)
                }, E.prototype._eachEntry = function(a, b) {
                    var c = this._instanceConstructor;
                    f(a) ? a.constructor === c && a._state !== Ba ? (a._onError = null, this._settledAt(a._state, b, a._result)) : this._willSettleAt(c.resolve(a), b) : (this._remaining--, this._result[b] = this._makeResult(Ca, b, a))
                }, E.prototype._settledAt = function(a, b, c) {
                    var d = this.promise;
                    d._state === Ba && (this._remaining--, this._abortOnReject && a === Da ? w(d, c) : this._result[b] = this._makeResult(a, b, c)), 0 === this._remaining && v(d, this._result)
                }, E.prototype._makeResult = function(a, b, c) {
                    return c
                }, E.prototype._willSettleAt = function(a, b) {
                    var d = this;
                    x(a, c, function(a) {
                        d._settledAt(Ca, b, a)
                    }, function(a) {
                        d._settledAt(Da, b, a)
                    })
                };
                var Ha = F,
                    Ia = G,
                    Ja = H,
                    Ka = I,
                    La = "rsvp_" + va() + "-",
                    Ma = 0,
                    Na = L;
                L.cast = Ja, L.all = Ha, L.race = Ia, L.resolve = Ja, L.reject = Ka, L.prototype = {
                    constructor: L,
                    _guidKey: La,
                    _onError: function(a) {
                        ya.async(function(b) {
                            setTimeout(function() {
                                b._onError && ya.trigger("error", a)
                            }, 0)
                        }, this)
                    },
                    then: function(a, b, c) {
                        var d = this,
                            e = d._state;
                        if (e === Ca && !a || e === Da && !b) return ya.instrument && Aa("chained", this, this), this;
                        d._onError = null;
                        var f = new this.constructor(n, c),
                            g = d._result;
                        if (ya.instrument && Aa("chained", d, f), e) {
                            var h = arguments[e - 1];
                            ya.async(function() {
                                B(e, f, h, g)
                            })
                        } else x(d, f, a, b);
                        return f
                    },
                    "catch": function(a, b) {
                        return this.then(null, a, b)
                    },
                    "finally": function(a, b) {
                        var c = this.constructor;
                        return this.then(function(b) {
                            return c.resolve(a()).then(function() {
                                return b
                            })
                        }, function(b) {
                            return c.resolve(a()).then(function() {
                                throw b
                            })
                        }, b)
                    }
                }, M.prototype = wa(Ga.prototype), M.prototype._superConstructor = Ga, M.prototype._makeResult = D, M.prototype._validationError = function() {
                    return new Error("allSettled must be called with an array")
                };
                var Oa, Pa, Qa = N,
                    Ra = O,
                    Sa = 0,
                    Ta = ({}.toString, P),
                    Ua = "undefined" != typeof a ? a : c,
                    Va = Ua || {},
                    Wa = Va.MutationObserver || Va.WebKitMutationObserver,
                    Xa = "undefined" != typeof process && "[object process]" === {}.toString.call(process),
                    Ya = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
                    Za = new Array(1e3);
                Pa = Xa ? Q() : Wa ? S() : Ya ? T() : Ua === c && "function" == typeof require ? W() : U();
                var $a = X,
                    _a = Y,
                    ab = Z;
                Z.prototype = wa(Ga.prototype), Z.prototype._superConstructor = Ga, Z.prototype._init = function() {
                    this._result = {}
                }, Z.prototype._validateInput = function(a) {
                    return a && "object" == typeof a
                }, Z.prototype._validationError = function() {
                    return new Error("Promise.hash must be called with an object")
                }, Z.prototype._enumerate = function() {
                    var a = this.promise,
                        b = this._input,
                        c = [];
                    for (var d in b) a._state === Ba && b.hasOwnProperty(d) && c.push({
                        position: d,
                        entry: b[d]
                    });
                    var e = c.length;
                    this._remaining = e;
                    for (var f, g = 0; a._state === Ba && e > g; g++) f = c[g], this._eachEntry(f.entry, f.position)
                }, $.prototype = wa(ab.prototype), $.prototype._superConstructor = Ga, $.prototype._makeResult = D, $.prototype._validationError = function() {
                    return new Error("hashSettled must be called with an object")
                };
                var bb = _,
                    cb = aa,
                    db = ba,
                    eb = new ca,
                    fb = new ca,
                    gb = ia,
                    hb = ma,
                    ib = na,
                    jb = oa,
                    kb = pa;
                ya.async = Ta;
                if ("undefined" != typeof a && "object" == typeof a.__PROMISE_INSTRUMENTATION__) {
                    var lb = a.__PROMISE_INSTRUMENTATION__;
                    j("instrument", !0);
                    for (var mb in lb) lb.hasOwnProperty(mb) && ra(mb, lb[mb])
                }
                var nb = {
                    race: hb,
                    Promise: Na,
                    allSettled: Qa,
                    hash: cb,
                    hashSettled: bb,
                    denodeify: gb,
                    on: ra,
                    off: sa,
                    map: db,
                    filter: _a,
                    resolve: jb,
                    reject: ib,
                    all: Ra,
                    rethrow: kb,
                    defer: $a,
                    EventTarget: xa,
                    configure: j,
                    async: qa
                };
                b.RSVP = nb
            }.call(this);
        var x, y = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
        b.Error = function(a, b, c) {
            switch (arguments.length) {
                case 1:
                    k.isObject(a) && (c = a, b = void 0, a = void 0);
                    break;
                case 2:
                    k.isObject(b) && (c = b, b = void 0)
            }
            if (c instanceof Error)
                for (var d = 0, e = y.length; e > d; ++d) this[y[d]] = c[y[d]];
            else if (k.isObject(c))
                for (var f in c) c.hasOwnProperty(f) && (this[f] = c[f]);
            if (!(this.fileName && this.lineNumber && this.columnNumber && this.stack)) {
                var g = x();
                !this.fileName && g.fileName && (this.fileName = g.fileName), !this.lineNumber && g.lineNumber && (this.lineNumber = g.lineNumber), !this.columnNumber && g.columnNumber && (this.columnNumber = g.columnNumber), !this.stack && g.stack && (this.stack = g.stack)
            }!this.message && a && (this.message = a), !this.name && b && (this.name = b)
        }, b.Error.prototype.toString = b.Error.prototype.valueOf = function() {
            var a = "";
            return this.fileName && (a += " " + this.fileName), this.lineNumber && (a += " " + this.lineNumber, this.columnNumber && (a += ":" + this.columnNumber)), "<" + (this.name ? this.name + " " : "") + this.message + a + ">"
        };
        var z = function(a, b) {
            return k.map(b.slice(2), function(a) {
                var b = {
                    fileName: a.getFileName(),
                    linenumber: a.getLineNumber(),
                    columnNumber: a.getColumnNumber()
                };
                return a.getFunctionName() && (b.functionName = a.getFunctionName()), a.getMethodName() && (b.methodName = a.getMethodName()), a.getThis() && (b.self = a.getThis()), b
            })
        };
        x = function() {
                var b, c, d, e = {};
                switch (k.env.name) {
                    case "Firefox":
                    case "Safari":
                    case "IE":
                        if ("IE" === k.env.name) d = new Error;
                        else try {
                            a.call.js.is.explody
                        } catch (f) {
                            d = f
                        }
                        b = d.stack.split("\n"), b.shift(), b.shift(), e.stack = b, "IE" === k.env.name && (e.stack.shift(), e.stack = k.map(b, function(a) {
                            return a.replace(/^\s+at\s+/g, "")
                        })), c = /@(.+?):([0-9]+)(:([0-9]+))?$/.exec(b[0]), c && (e.fileName = c[1], e.lineNumber = parseInt(c[2], 10), c.length > 3 && (e.columnNumber = parseInt(c[4], 10)));
                        break;
                    case "Chrome":
                    case "Node":
                    case "Opera":
                        var g = Error.prepareStackTrace;
                        Error.prepareStackTrace = z, d = new Error, e.stack = d.stack, Error.prepareStackTrace = g;
                        var h = e.stack[0];
                        e.lineNumber = h.lineNumber, e.columnNumber = h.columnNumber, e.fileName = h.fileName, h.functionName && (e.functionName = h.functionName), h.methodName && (e.methodName = h.methodName), h.self && (e.self = h.self);
                        break;
                    default:
                        d = new Error, d.stack && (e.stack = d.stack.split("\n"))
                }
                return d.message && (e.message = d.message), e
            },
            function() {
                var c = -1,
                    d = function(a) {
                        if (a === c) return !0;
                        if ("number" == typeof a && "number" == typeof c) return a > c;
                        for (var b = a.split("."), d = c.split("."), e = (b.length > d.length ? d : b).length, f = 0; e > f; ++f)
                            if (parseInt(b[f], 10) > parseInt(d[f], 10)) return !0;
                        return f < b.length ? !0 : !1
                    },
                    e = function() {
                        if ("undefined" != typeof process && "undefined" != typeof process.versions && "string" == typeof process.versions.node) return c = process.versions.node, "v" === c.substr(1) && (c = c.substr(1)), {
                            name: "Node",
                            version: c,
                            userAgent: "Node " + c,
                            iframeNeedsLoad: !1,
                            versionGreaterThan: d
                        };
                        var b, e = a.navigator.userAgent.toLowerCase(),
                            f = a.navigator.appName,
                            g = "unknown";
                        return e.indexOf("opera") > -1 || e.indexOf("opr") > -1 ? (g = "Opera", null !== /opr\/([0-9]{1,}[\.0-9]{0,})/.exec(e) && (c = parseFloat(RegExp.$1))) : e.indexOf("firefox") > -1 ? (g = "Firefox", null !== /firefox\/([0-9]{1,}[\.0-9]{0,})/.exec(e) && (c = parseFloat(RegExp.$1))) : "Microsoft Internet Explorer" === f ? (g = "IE", null !== /msie ([0-9]{1,}[\.0-9]{0,})/.exec(e) && (c = parseFloat(RegExp.$1))) : "Netscape" === f && e.indexOf("trident") > -1 ? (g = "IE", null !== /trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(e) && (c = parseFloat(RegExp.$1))) : e.indexOf("chrome") > -1 ? (g = "Chrome", null !== /chrome\/([0-9]{1,}[\.0-9]{0,})/.exec(e) && (c = parseFloat(RegExp.$1))) : (b = a.navigator.vendor) && b.toLowerCase().indexOf("apple") > -1 && (g = "Safari", null !== /version\/([0-9]{1,}[\.0-9]{0,})/.exec(e) && (c = parseFloat(RegExp.$1))), {
                            name: g,
                            version: c,
                            userAgent: a.navigator.userAgent,
                            iframeNeedsLoad: e.indexOf("webkit") < 0,
                            versionGreaterThan: d
                        }
                    }();
                b.env = e, b.browser = function() {
                    return b.env.name
                }, b.browserVersion = function() {
                    return b.env
                }
            }();
        var A;
        "Node" === k.env.name && ! function() {
            var a = require("events").EventEmitter,
                b = require("util"),
                c = function() {
                    a.call(this), this.events = {}
                };
            b.inherits(c, a), A = function() {
                var a = new c,
                    b = a.on,
                    d = a.removeListener;
                return a.addListeners = function(c, d, e, f) {
                    var g = {
                        handler: d
                    };
                    e && (g.context = e), f && (g.closure = f), k.forEach(c, function(c) {
                        a.events[c] || (a.events[c] = []), a.events[c].push(g), b(c, d);
                        var e = c + ":added";
                        a.events[e] && a.emit(e, a.events[c].length)
                    })
                }, a.removeAllListenersNamed = function(b) {
                    var c = b.split(" ");
                    a.removeAllListeners(c), k.forEach(c, function(b) {
                        a.events[b] && delete a.events[b]
                    })
                }, a.removeListeners = function(b, c, e) {
                    function f(a) {
                        return !(a.handler === c && a.closure === e)
                    }
                    k.forEach(b.split(" "), function(b) {
                        if (a.events[b]) {
                            d(b, c), a.events[b] = k.filter(a.events[b], f), 0 === a.events[b].length && delete a.events[b];
                            var e = b + ":removed";
                            a.events[e] && a.emit(e, a.events[b] ? a.events[b].length : 0)
                        }
                    })
                }, a.removeAllListeners = function() {
                    a.events = {}, a.removeAllListeners()
                }, a.dispatchEvent = function(a, b) {
                    this.emit(a.type, a), b && b.call(null, a)
                }, a.trigger = k.bind(a.emit, a), a
            }
        }();
        var B;
        if ("Node" !== k.env.name && (B = function(a, b) {
                function c(a, b) {
                    a && a.apply(null, b.slice())
                }

                function d(a, b, d) {
                    var e = f.events[a];
                    if (e && 0 !== e.length) {
                        var g = e.length;
                        k.forEach(e, function(e) {
                            function h(a) {
                                return a.handler === e.handler
                            }
                            k.callAsync(function() {
                                try {
                                    f.events[a] && k.some(f.events[a], h) && (e.closure || e.handler).apply(e.context || null, b)
                                } finally {
                                    g--, 0 === g && c(d, b)
                                }
                            })
                        })
                    }
                }

                function e(a, b) {
                    var c = f.events[a];
                    c && 0 !== c.length && k.forEach(c, function(a) {
                        (a.closure || a.handler).apply(a.context || null, b)
                    })
                }
                var f = {
                        events: {}
                    },
                    g = b === !0 ? e : d;
                return f.addListeners = function(a, b, c, d) {
                    var e = {
                        handler: b
                    };
                    c && (e.context = c), d && (e.closure = d), k.forEach(a, function(a) {
                        f.events[a] || (f.events[a] = []), f.events[a].push(e);
                        var b = a + ":added";
                        f.events[b] && g(b, [f.events[a].length])
                    })
                }, f.removeListeners = function(a, b, c) {
                    function d(a) {
                        var d = a.handler.originalHandler === b || a.handler === b;
                        return !(d && a.context === c)
                    }
                    k.forEach(a, function(a) {
                        if (f.events[a]) {
                            f.events[a] = k.filter(f.events[a], d), 0 === f.events[a].length && delete f.events[a];
                            var b = a + ":removed";
                            f.events[b] && g(b, [f.events[a] ? f.events[a].length : 0])
                        }
                    })
                }, f.removeAllListenersNamed = function(a) {
                    k.forEach(a, function(a) {
                        f.events[a] && delete f.events[a]
                    })
                }, f.removeAllListeners = function() {
                    f.events = {}
                }, f.dispatchEvent = function(a, b) {
                    return f.events[a.type] && 0 !== f.events[a.type].length ? void g(a.type, [a], b) : void c(b, [a])
                }, f.trigger = function(a, b) {
                    f.events[a] && 0 !== f.events[a].length && g(a, b)
                }, f
            }), "Node" === a.OTHelpers.env.name) {
            var C = require("request");
            b.request = function(a, b, c) {
                var d = function(a, b, d) {
                    var e = {
                        response: b,
                        body: d
                    };
                    !a && b.statusCode >= 200 && (b.statusCode < 300 || 304 === b.statusCode) ? c(null, e) : c(a, e)
                };
                "get" === b.method.toLowerCase() ? C.get(a, d) : C.post(a, b.body, d)
            }, b.getJSON = function(a, b, c) {
                var d = require("underscore").extend({
                    Accept: "application/json"
                }, b.headers || {});
                C.get({
                    url: a,
                    headers: d,
                    json: !0
                }, function(a, b) {
                    c(a, b && b.body)
                })
            }
        }
        "Node" !== a.OTHelpers.env.name && (b.xdomainRequest = function(a, b, c) {
            function e(a, b) {
                f.onload = f.onerror = f.ontimeout = function() {}, f = void 0, c(a, b)
            }
            var f = new XDomainRequest,
                g = b || {},
                h = g.method.toLowerCase();
            return h ? (h = h.toUpperCase(), "GET" !== h && "POST" !== h ? void c(new Error("HTTP method can only be ")) : (f.onload = function() {
                e(null, {
                    target: {
                        responseText: f.responseText,
                        headers: {
                            "content-type": f.contentType
                        }
                    }
                })
            }, f.onerror = function() {
                e(new Error("XDomainRequest of " + a + " failed"))
            }, f.ontimeout = function() {
                e(new Error("XDomainRequest of " + a + " timed out"))
            }, f.open(h, a), void f.send(b.body && d(b.body)))) : void c(new Error("No HTTP method specified in options"))
        }, b.request = function(a, c, e) {
            var f = new XMLHttpRequest,
                g = c || {},
                h = g.method;
            if (!h) return void e(new Error("No HTTP method specified in options"));
            e && (b.on(f, "load", function(a) {
                var b = a.target.status;
                b >= 200 && (300 > b || 304 === b) ? e(null, a) : e(a)
            }), b.on(f, "error", e)), f.open(c.method, a, !0), g.headers || (g.headers = {});
            for (var i in g.headers) f.setRequestHeader(i, g.headers[i]);
            f.send(c.body && d(c.body))
        }, b.getJSON = function(a, c, d) {
            c = c || {};
            var e = function(a, b) {
                if (a) d(a, b && b.target && b.target.responseText);
                else {
                    var c;
                    try {
                        c = JSON.parse(b.target.responseText)
                    } catch (e) {
                        return void d(e, b && b.target && b.target.responseText)
                    }
                    d(null, c, b)
                }
            };
            if (c.xdomainrequest) b.xdomainRequest(a, {
                method: "GET"
            }, e);
            else {
                var f = b.extend({
                    Accept: "application/json"
                }, c.headers || {});
                b.get(a, b.extend(c || {}, {
                    headers: f
                }), e)
            }
        });
        var D = 5,
            E = 4,
            F = 3,
            G = 2,
            H = 1,
            I = 0,
            J = I,
            K = function(a) {
                return J = "number" == typeof a ? a : 0
            };
        b.useLogHelpers = function(c) {
                function d(b, d, e) {
                    return function() {
                        if (c.shouldLog(d)) {
                            var f = a.console,
                                g = m(arguments);
                            if (f && f[b]) f[b].apply || k ? (f[b].apply || (f[b] = Function.prototype.bind.call(f[b], f)), f[b].apply(f, g)) : f[b](g);
                            else if (e) return void e.apply(c, g);
                            h(b, m(arguments))
                        }
                    }
                }

                function e() {
                    var a = new Date;
                    return a.toLocaleTimeString() + a.getMilliseconds()
                }

                function f(a) {
                    try {
                        return JSON.stringify(a)
                    } catch (b) {
                        return a.toString()
                    }
                }

                function g(a) {
                    var c = [];
                    if ("undefined" == typeof a);
                    else if (null === a) c.push("NULL");
                    else if (b.isArray(a))
                        for (var d = 0; d < a.length; ++d) c.push(f(a[d]));
                    else if (b.isObject(a))
                        for (var e in a) {
                            var g;
                            b.isFunction(a[e]) ? a.hasOwnProperty(e) && (g = "function " + e + "()") : g = f(a[e]), c.push(e + ": " + g)
                        } else if (b.isFunction(a)) try {
                            c.push(a.toString())
                        } catch (h) {
                            c.push("function()")
                        } else c.push(a.toString());
                    return c.join(", ")
                }

                function h(a, b) {
                    if (b) {
                        var c = g(b);
                        c.length <= 2 || j.push([a, e(), c])
                    }
                }
                c.DEBUG = D, c.LOG = E, c.INFO = F, c.WARN = G, c.ERROR = H, c.NONE = I;
                var j = [],
                    k = !0;
                try {
                    Function.prototype.bind.call(a.console.log, a.console)
                } catch (l) {
                    k = !1
                }
                var m = function(a) {
                    return a
                };
                "IE" === b.env.name && (m = function(a) {
                    return [g(i.apply(a))]
                }), c.log = d("log", c.LOG), c.debug = d("debug", c.DEBUG, c.log), c.info = d("info", c.INFO, c.log), c.warn = d("warn", c.WARN, c.log), c.error = d("error", c.ERROR, c.log), c.setLogLevel = function(a) {
                    return c.debug("TB.setLogLevel(" + J + ")"), K(a)
                }, c.getLogs = function() {
                    return j
                }, c.shouldLog = function(a) {
                    return J >= a
                }
            }, b.useLogHelpers(b), b.setLogLevel(b.ERROR), m.prototype.on = function(a, b) {
                return this.forEach(function(c) {
                    if (c.addEventListener) c.addEventListener(a, b, !1);
                    else if (c.attachEvent) c.attachEvent("on" + a, b);
                    else {
                        var d = c["on" + a];
                        c["on" + a] = function() {
                            b.apply(this, arguments), d && d.apply(this, arguments)
                        }
                    }
                })
            }, m.prototype.off = function(a, b) {
                return this.forEach(function(c) {
                    c.removeEventListener ? c.removeEventListener(a, b, !1) : c.detachEvent && c.detachEvent("on" + a, b)
                })
            }, m.prototype.once = function(a, b) {
                var c = k.bind(function() {
                    this.off(a, c), b.apply(null, arguments)
                }, this);
                return this.on(a, c)
            }, b.on = function(a, b, c) {
                return k(a).on(b, c)
            }, b.off = function(a, b, c) {
                return k(a).off(b, c)
            }, b.once = function(a, b, c) {
                return k(a).once(b, c)
            },
            function() {
                var c = "undefined" == typeof document || "complete" === document.readyState || "interactive" === document.readyState && document.body,
                    d = [],
                    e = [],
                    f = !1,
                    g = function() {
                        c = !0, "undefined" != typeof document && (document.addEventListener ? (document.removeEventListener("DOMContentLoaded", g, !1), a.removeEventListener("load", g, !1)) : (document.detachEvent("onreadystatechange", g), a.detachEvent("onload", g))), b.on(a, "unload", h), b.forEach(d, function(a) {
                            a[0].call(a[1])
                        }), d = []
                    },
                    h = function() {
                        f = !0, b.forEach(e, function(a) {
                            a[0].call(a[1])
                        }), e = []
                    };
                b.onDOMLoad = function(a, c) {
                    return b.isReady() ? void a.call(c) : void d.push([a, c])
                }, b.onDOMUnload = function(a, b) {
                    return this.isDOMUnloaded() ? void a.call(b) : void e.push([a, b])
                }, b.isReady = function() {
                    return !f && c
                }, b.isDOMUnloaded = function() {
                    return f
                }, c ? g() : "undefined" != typeof document && (document.addEventListener ? (document.addEventListener("DOMContentLoaded", g, !1), a.addEventListener("load", g, !1)) : document.attachEvent && (document.attachEvent("onreadystatechange", function() {
                    "complete" === document.readyState && g()
                }), a.attachEvent("onload", g)))
            }(), b.setCookie = function(a, b) {
                try {
                    localStorage.setItem(a, b)
                } catch (c) {
                    var d = new Date;
                    d.setTime(d.getTime() + 31536e6);
                    var e = "; expires=" + d.toGMTString();
                    document.cookie = a + "=" + b + e + "; path=/"
                }
            }, b.getCookie = function(a) {
                var b;
                try {
                    return b = localStorage.getItem(a)
                } catch (c) {
                    for (var d = a + "=", e = document.cookie.split(";"), f = 0; f < e.length; f++) {
                        for (var g = e[f];
                            " " === g.charAt(0);) g = g.substring(1, g.length);
                        0 === g.indexOf(d) && (b = g.substring(d.length, g.length))
                    }
                    if (b) return b
                }
                return null
            }, b.Collection = function(a) {
                var c = [],
                    d = {},
                    e = a || "id";
                b.eventing(this, !0);
                var f = function(a, c) {
                        return b.isFunction(a[c]) ? a[c]() : a[c]
                    },
                    g = b.bind(function(a) {
                        this.trigger("update", a), this.trigger("update:" + a.target.id, a)
                    }, this),
                    h = b.bind(function(a) {
                        this.remove(a.target, a.reason)
                    }, this);
                this.reset = function() {
                    b.forEach(c, function(a) {
                        a.off("updated", g, this), a.off("destroyed", h, this)
                    }, this), c = [], d = {}
                }, this.destroy = function(a) {
                    b.forEach(c, function(b) {
                        b && "function" == typeof b.destroy && b.destroy(a, !0)
                    }), this.reset(), this.off()
                }, this.get = function(a) {
                    return a && void 0 !== d[a] ? c[d[a]] : void 0
                }, this.has = function(a) {
                    return a && void 0 !== d[a]
                }, this.toString = function() {
                    return c.toString()
                }, this.where = function(a, d) {
                    return b.isFunction(a) ? b.filter(c, a, d) : b.filter(c, function(b) {
                        for (var c in a)
                            if (a.hasOwnProperty(c) && f(b, c) !== a[c]) return !1;
                        return !0
                    })
                }, this.find = function(a, d) {
                    var e;
                    e = b.isFunction(a) ? a : function(b) {
                        for (var c in a)
                            if (a.hasOwnProperty(c) && f(b, c) !== a[c]) return !1;
                        return !0
                    }, e = b.bind(e, d);
                    for (var g = 0; g < c.length; ++g)
                        if (e(c[g]) === !0) return c[g];
                    return null
                }, this.add = function(a) {
                    var i = f(a, e);
                    return this.has(i) ? (b.warn("Model " + i + " is already in the collection", c), this) : (d[i] = c.push(a) - 1, a.on("updated", g, this), a.on("destroyed", h, this), this.trigger("add", a), this.trigger("add:" + i, a), this)
                }, this.remove = function(a, b) {
                    var i = f(a, e);
                    c.splice(d[i], 1);
                    for (var j = d[i]; j < c.length; ++j) d[c[j][e]] = j;
                    return delete d[i], a.off("updated", g, this), a.off("destroyed", h, this), this.trigger("remove", a, b), this.trigger("remove:" + i, a, b), this
                }, this._triggerAddEvents = function() {
                    var a = this.where.apply(this, arguments);
                    b.forEach(a, function(a) {
                        this.trigger("add", a), this.trigger("add:" + f(a, e), a)
                    }, this)
                }, this.length = function() {
                    return c.length
                }
            }, b.castToBoolean = function(a, b) {
                return a === c ? b : "true" === a || a === !0
            }, b.roundFloat = function(a, b) {
                return Number(a.toFixed(b))
            },
            function() {
                var a = {};
                b.registerCapability = function(d, e) {
                    var f = d.toLowerCase();
                    return a.hasOwnProperty(f) ? void b.error("Attempted to register", d, "capability more than once") : b.isFunction(e) ? void c(f, e) : void b.error("Attempted to register", d, "capability with a callback that isn' a function")
                };
                var c = function(b, c) {
                        a[b] = function() {
                            var d = c();
                            return a[b] = function() {
                                return d
                            }, d
                        }
                    },
                    d = function(b) {
                        return a[b]()
                    };
                b.hasCapabilities = function() {
                    for (var c, e = i.call(arguments), f = 0; f < e.length; ++f) {
                        if (c = e[f].toLowerCase(), !a.hasOwnProperty(c)) return b.error("hasCapabilities was called with an unknown capability: " + c), !1;
                        if (d(c) === !1) return !1
                    }
                    return !0
                }
            }(), b.registerCapability("websockets", function() {
                return "WebSocket" in a && void 0 !== a.WebSocket
            }),
            function() {
                var c, d = function() {
                    if (a.postMessage) {
                        var b = !0,
                            c = a.onmessage;
                        return a.onmessage = function() {
                            b = !1
                        }, a.postMessage("", "*"), a.onmessage = c, b
                    }
                }();
                if (d) {
                    var e = [],
                        f = "OTHelpers." + b.uuid.v4() + ".zero-timeout",
                        g = function() {
                            e = [], a.removeEventListener ? a.removeEventListener("message", h) : a.detachEvent && a.detachEvent("onmessage", h)
                        },
                        h = function(c) {
                            if (c.source === a && c.data === f) {
                                if (b.isFunction(c.stopPropagation) && c.stopPropagation(), c.cancelBubble = !0, !a.___othelpers) return void g();
                                if (e.length > 0) {
                                    var d = e.shift(),
                                        h = d.shift();
                                    h.apply(null, d)
                                }
                            }
                        };
                    b.on(a, "unload", g), a.addEventListener ? a.addEventListener("message", h, !0) : a.attachEvent && a.attachEvent("onmessage", h), c = function() {
                        e.push(i.call(arguments)), a.postMessage(f, "*")
                    }
                } else c = function() {
                    var a = i.call(arguments),
                        b = a.shift();
                    setTimeout(function() {
                        b.apply(null, a)
                    }, 0)
                };
                b.callAsync = c, b.createAsyncHandler = function(a) {
                    return function() {
                        var c = i.call(arguments);
                        b.callAsync(function() {
                            a.apply(null, c)
                        })
                    }
                }
            }(), b.eventing = function(a, b) {
                var c = (A || B)(this, b);
                return a.on = function(a, b, d) {
                    if ("string" == typeof a && b) c.addListeners(a.split(" "), b, d);
                    else
                        for (var e in a) a.hasOwnProperty(e) && c.addListeners([e], a[e], b);
                    return this
                }, a.off = function(a, b, d) {
                    if ("string" == typeof a) b && k.isFunction(b) ? c.removeListeners(a.split(" "), b, d) : c.removeAllListenersNamed(a.split(" "));
                    else if (a)
                        for (var e in a) a.hasOwnProperty(e) && c.removeListeners([e], a[e], d);
                    else c.removeAllListeners();
                    return this
                }, a.once = function(b, c, d) {
                    var e = function() {
                        a.off(b, e, d), c.apply(d, arguments)
                    };
                    return e.originalHandler = c, a.on(b, e, d), this
                }, a.dispatchEvent = function(a, b) {
                    if (!a.type) throw k.error("OTHelpers.Eventing.dispatchEvent: Event has no type"), k.error(a), new Error("OTHelpers.Eventing.dispatchEvent: Event has no type");
                    return a.target || (a.target = this), c.dispatchEvent(a, b), this
                }, a.trigger = function() {
                    var a = i.call(arguments);
                    return c.trigger(a.shift(), a), this
                }, a.emit = a.trigger, a.addEventListener = function(b, c, d) {
                    return k.warn("The addEventListener() method is deprecated. Use on() or once() instead."), a.on(b, c, d)
                }, a.removeEventListener = function(b, c, d) {
                    return k.warn("The removeEventListener() method is deprecated. Use off() instead."), a.off(b, c, d)
                }, a
            }, b.createElement = function(a, b, c, d) {
                var e = (d || document).createElement(a);
                if (b)
                    for (var f in b)
                        if ("object" == typeof b[f]) {
                            e[f] || (e[f] = {});
                            var g = b[f];
                            for (var h in g) e[f][h] = g[h]
                        } else "className" === f ? e.className = b[f] : e.setAttribute(f, b[f]);
                var i = function(a) {
                    "string" == typeof a ? e.innerHTML = e.innerHTML + a : e.appendChild(a)
                };
                return k.isArray(c) ? k.forEach(c, i) : c && i(c), e
            }, b.createButton = function(a, b, c) {
                var d = k.createElement("button", b, a);
                if (c) {
                    for (var e in c) c.hasOwnProperty(e) && k.on(d, e, c[e]);
                    d._boundEvents = c
                }
                return d
            };
        var L;
        L = "undefined" != typeof document && void 0 !== document.createElement("div").firstElementChild ? function(a) {
                return a.firstElementChild
            } : function(a) {
                var b = a.firstChild;
                do {
                    if (1 === b.nodeType) return b;
                    b = b.nextSibling
                } while (b);
                return null
            }, m.prototype.appendTo = function(a) {
                if (!a) throw new Error("appendTo requires a DOMElement to append to.");
                return this.forEach(function(b) {
                    a.appendChild(b)
                })
            }, m.prototype.append = function() {
                var a = this.first;
                return a ? (k.forEach(i.call(arguments), function(b) {
                    a.appendChild(b)
                }), this) : this
            }, m.prototype.prepend = function() {
                if (0 === arguments.length) return this;
                var a, b = this.first;
                return b ? (a = i.call(arguments), L(b) || b.appendChild(a.shift()), k.forEach(a, function(a) {
                    b.insertBefore(a, L(b))
                }), this) : this
            }, m.prototype.after = function(a) {
                if (!a) throw new Error("after requires a DOMElement to insert after");
                return this.forEach(function(b) {
                    b.parentElement && (a !== b.parentNode.lastChild ? b.parentElement.insertBefore(b, a) : b.parentElement.appendChild(b))
                })
            }, m.prototype.before = function(a) {
                if (!a) throw new Error("before requires a DOMElement to insert before");
                return this.forEach(function(b) {
                    b.parentElement && b.parentElement.insertBefore(b, a)
                })
            }, m.prototype.remove = function() {
                return this.forEach(function(a) {
                    a.parentNode && a.parentNode.removeChild(a)
                })
            }, m.prototype.empty = function() {
                return this.forEach(function(a) {
                    for (; a.firstChild;) a.removeChild(a.firstChild)
                })
            }, m.prototype.isDisplayNone = function() {
                return this.some(function(a) {
                    return 0 !== a.offsetWidth && 0 !== a.offsetHeight || "none" !== k(a).css("display") ? a.parentNode && a.parentNode.style ? k(a.parentNode).isDisplayNone() : void 0 : !0
                })
            }, m.prototype.findElementWithDisplayNone = function(a) {
                return k.findElementWithDisplayNone(a)
            }, b.isElementNode = function(a) {
                return a && "object" == typeof a && 1 === a.nodeType
            }, b.removeElement = function(a) {
                k(a).remove()
            }, b.removeElementById = function(a) {
                return k("#" + a).remove()
            }, b.removeElementsByType = function(a, b) {
                return k(b, a).remove()
            }, b.emptyElement = function(a) {
                return k(a).empty()
            }, b.isDisplayNone = function(a) {
                return k(a).isDisplayNone()
            }, b.findElementWithDisplayNone = function(a) {
                return 0 !== a.offsetWidth && 0 !== a.offsetHeight || "none" !== k.css(a, "display") ? a.parentNode && a.parentNode.style ? k.findElementWithDisplayNone(a.parentNode) : null : a
            }, b.Modal = function(a) {
                b.eventing(this, !0);
                var c = arguments[arguments.length - 1];
                if (!b.isFunction(c)) throw new Error("OTHelpers.Modal2 must be given a callback");
                arguments.length < 2 && (a = {});
                var d = document.createElement("iframe");
                d.id = a.id || b.uuid(), d.style.position = "absolute", d.style.position = "fixed", d.style.height = "100%", d.style.width = "100%", d.style.top = "0px", d.style.left = "0px", d.style.right = "0px", d.style.bottom = "0px", d.style.zIndex = 1e3, d.style.border = "0";
                try {
                    d.style.backgroundColor = "rgba(0,0,0,0.2)"
                } catch (e) {
                    d.style.backgroundColor = "transparent", d.setAttribute("allowTransparency", "true")
                }
                d.scrolling = "no", d.setAttribute("scrolling", "no");
                var f = '<!DOCTYPE html><html><head><meta http-equiv="x-ua-compatible" content="IE=Edge"><meta http-equiv="Content-type" content="text/html; charset=utf-8"><title></title></head><body></body></html>',
                    g = function() {
                        var a = d.contentDocument || d.contentWindow.document;
                        b.env.iframeNeedsLoad && (a.body.style.backgroundColor = "transparent", a.body.style.border = "none", "IE" !== b.env.name && (a.open(), a.write(f), a.close())), c(d.contentWindow, a)
                    };
                document.body.appendChild(d), b.env.iframeNeedsLoad ? ("IE" === b.env.name && (d.contentWindow.contents = f,
                    d.src = 'javascript:window["contents"]'), b.on(d, "load", g)) : setTimeout(g, 0), this.close = function() {
                    return b.removeElement(d), this.trigger("closed"), this.element = d = null, this
                }, this.element = d
            },
            function() {
                function a(b, c, d, e) {
                    var f, g = c[d],
                        h = parseFloat(g),
                        i = g.split(/\d/)[0];
                    return e = null != e ? e : /%|em/.test(i) && b.parentElement ? a(b.parentElement, b.parentElement.currentStyle, "fontSize", null) : 16, f = "fontSize" === d ? e : /width/i.test(d) ? b.clientWidth : b.clientHeight, "em" === i ? h * e : "in" === i ? 96 * h : "pt" === i ? 96 * h / 72 : "%" === i ? h / 100 * f : h
                }

                function c(a, b) {
                    var c = "border" === b ? "Width" : "",
                        d = b + "Top" + c,
                        e = b + "Right" + c,
                        f = b + "Bottom" + c,
                        g = b + "Left" + c;
                    a[b] = (a[d] === a[e] === a[f] === a[g] ? [a[d]] : a[d] === a[f] && a[g] === a[e] ? [a[d], a[e]] : a[g] === a[e] ? [a[d], a[e], a[f]] : [a[d], a[e], a[f], a[g]]).join(" ")
                }

                function d(b) {
                    var d, e = b.currentStyle,
                        f = this,
                        g = a(b, e, "fontSize", null);
                    for (d in e) /width|height|margin.|padding.|border.+W/.test(d) && "auto" !== f[d] ? f[d] = a(b, e, d, g) + "px" : "styleFloat" === d ? f["float"] = e[d] : f[d] = e[d];
                    return c(f, "margin"), c(f, "padding"), c(f, "border"), f.fontSize = g + "px", f
                }

                function e(a) {
                    return new d(a)
                }
                d.prototype = {
                    constructor: d,
                    getPropertyPriority: function() {},
                    getPropertyValue: function(a) {
                        return this[a] || ""
                    },
                    item: function() {},
                    removeProperty: function() {},
                    setProperty: function() {},
                    getPropertyCSSValue: function() {}
                }, b.getComputedStyle = function(a) {
                    return a && a.ownerDocument && a.ownerDocument.defaultView && a.ownerDocument.defaultView.getComputedStyle ? a.ownerDocument.defaultView.getComputedStyle(a) : e(a)
                }
            }();
        var M = function(a, b, c) {
                var d = {},
                    e = function(b) {
                        switch (b) {
                            case "width":
                                return k(a).width();
                            case "height":
                                return k(a).height();
                            default:
                                return k(a).css(b)
                        }
                    };
                k.forEach(b, function(a) {
                    d[a] = e(a)
                });
                var f = new MutationObserver(function(f) {
                    var g = {};
                    k.forEach(f, function(c) {
                        if ("style" === c.attributeName) {
                            var f = k.isDisplayNone(a);
                            k.forEach(b, function(a) {
                                if (!f || "width" !== a && "height" !== a) {
                                    var b = e(a);
                                    b !== d[a] && (g[a] = [d[a], b], d[a] = b)
                                }
                            })
                        }
                    }), k.isEmpty(g) || k.callAsync(function() {
                        c.call(null, g)
                    })
                });
                return f.observe(a, {
                    attributes: !0,
                    attributeFilter: ["style"],
                    childList: !1,
                    characterData: !1,
                    subtree: !1
                }), f
            },
            N = function(a, b) {
                var c = new MutationObserver(function(a) {
                    var c = [];
                    k.forEach(a, function(a) {
                        a.removedNodes.length && (c = c.concat(i.call(a.removedNodes)))
                    }), c.length && k.callAsync(function() {
                        b(k(c))
                    })
                });
                return c.observe(a, {
                    attributes: !1,
                    childList: !0,
                    characterData: !1,
                    subtree: !0
                }), c
            },
            O = function(a, b) {
                var c = {
                        width: 0,
                        height: 0
                    },
                    d = setInterval(function() {
                        var d = a.getBoundingClientRect();
                        (c.width !== d.width || c.height !== d.height) && (b(d, c), c = {
                            width: d.width,
                            height: d.height
                        })
                    }, 200);
                return {
                    disconnect: function() {
                        clearInterval(d)
                    }
                }
            };
        m.prototype.observeStyleChanges = function(a, b) {
            var c = [];
            return this.forEach(function(d) {
                c.push(M(d, a, b))
            }), c
        }, m.prototype.observeNodeOrChildNodeRemoval = function(a) {
            var b = [];
            return this.forEach(function(c) {
                b.push(N(c, a))
            }), b
        }, m.prototype.observeSize = function(a) {
            var b = [];
            return this.forEach(function(c) {
                b.push(O(c, a))
            }), b
        }, b.observeStyleChanges = function(a, b, c) {
            return k(a).observeStyleChanges(b, c)[0]
        }, b.observeNodeOrChildNodeRemoval = function(a, b) {
            return k(a).observeNodeOrChildNodeRemoval(b)[0]
        }, b.registerCapability("classList", function() {
            return "undefined" != typeof document && "classList" in document.createElement("a")
        }), m.prototype.addClass = function(a) {
            if (a) {
                var b = k.trim(a).split(/\s+/);
                this.forEach(function(a) {
                    g(a, b)
                })
            }
            return this
        }, m.prototype.removeClass = function(a) {
            if (a) {
                var b = k.trim(a).split(/\s+/);
                this.forEach(function(a) {
                    h(a, b)
                })
            }
            return this
        }, m.prototype.toggleClass = function(a) {
            if (a) {
                var b = k.trim(a).split(/\s+/);
                this.forEach(function(a) {
                    f(a, b)
                })
            }
            return this
        }, m.prototype.hasClass = function(a) {
            return this.some(function(b) {
                return e(b, a)
            })
        }, b.addClass = function(a, b) {
            return k(a).addClass(b)
        }, b.removeClass = function(a, b) {
            return k(a).removeClass(b)
        };
        var P = {
            "for": "htmlFor",
            "class": "className"
        };
        m.prototype.attr = function(a, c) {
                if (b.isObject(a)) {
                    var d;
                    for (var e in a) d = P[e] || e, this.first.setAttribute(d, a[e])
                } else {
                    if (void 0 === c) return this.first.getAttribute(P[a] || a);
                    this.first.setAttribute(P[a] || a, c)
                }
                return this
            }, m.prototype.removeAttr = function(a) {
                var b = P[a] || a;
                return this.forEach(function(a) {
                    a.removeAttribute(b)
                }), this
            }, m.prototype.html = function(a) {
                return void 0 !== a && (this.first.innerHTML = a), this.first.innerHTML
            }, m.prototype.center = function(a, b) {
                var c;
                return this.forEach(function(d) {
                    c = k(d), a || (a = parseInt(c.width(), 10)), b || (b = parseInt(c.height(), 10));
                    var e = -.5 * a + "px",
                        f = -.5 * b + "px";
                    c.css("margin", f + " 0 0 " + e).addClass("OT_centered")
                }), this
            }, b.centerElement = function(a, b, c) {
                return k(a).center(b, c)
            },
            function() {
                var a = function(a) {
                        return a.offsetWidth > 0 ? a.offsetWidth + "px" : k(a).css("width")
                    },
                    c = function(a) {
                        return a.offsetHeight > 0 ? a.offsetHeight + "px" : k(a).css("height")
                    };
                m.prototype.width = function(b) {
                    return b ? (this.css("width", b), this) : this.isDisplayNone() ? this.makeVisibleAndYield(function(b) {
                        return a(b)
                    })[0] : a(this.get(0))
                }, m.prototype.height = function(a) {
                    return a ? (this.css("height", a), this) : this.isDisplayNone() ? this.makeVisibleAndYield(function(a) {
                        return c(a)
                    })[0] : c(this.get(0))
                }, b.width = function(a, c) {
                    var d = k(a).width(c);
                    return c ? b : d
                }, b.height = function(a, c) {
                    var d = k(a).height(c);
                    return c ? b : d
                }
            }(),
            function() {
                var a = {},
                    d = {},
                    e = function(a) {
                        if (d[a.ownerDocument] && d[a.ownerDocument][a.nodeName]) return d[a.ownerDocument][a.nodeName];
                        d[a.ownerDocument] || (d[a.ownerDocument] = {});
                        var b, c = a.ownerDocument.createElement(a.nodeName);
                        return a.ownerDocument.body.appendChild(c), b = d[a.ownerDocument][a.nodeName] = k(c).css("display"), k(c).remove(), c = null, b
                    },
                    f = function(a) {
                        var b = k.getComputedStyle(a);
                        return "none" === b.getPropertyValue("display")
                    },
                    g = function(a, b) {
                        var c = a.style;
                        for (var d in b) b.hasOwnProperty(d) && (c[d] = b[d])
                    },
                    h = function(a, b, c) {
                        a.style[b] = c
                    },
                    i = function(a, b) {
                        var c = b.replace(/([A-Z]|^ms)/g, "-$1").toLowerCase(),
                            d = k.getComputedStyle(a),
                            e = d.getPropertyValue(c);
                        return "" === e && (e = a.style[c]), e
                    },
                    j = function(a, b, c) {
                        var d, e, f = {};
                        for (d in b) b.hasOwnProperty(d) && (f[d] = a.style[d], k(a).css(d, b[d]));
                        e = c(a);
                        for (d in b) b.hasOwnProperty(d) && k(a).css(d, f[d] || "");
                        return e
                    };
                m.prototype.show = function() {
                    return this.forEach(function(b) {
                        var c = b.style.display;
                        ("" === c || "none" === c) && (b.style.display = a[b] || "", delete a[b]), f(b) && (a[b] = "none", b.style.display = e(b))
                    })
                }, m.prototype.hide = function() {
                    return this.forEach(function(b) {
                        "none" !== b.style.display && (a[b] = b.style.display, b.style.display = "none")
                    })
                }, m.prototype.css = function(a, b) {
                    return 0 !== this.length ? "string" != typeof a ? this.forEach(function(b) {
                        g(b, a)
                    }) : b !== c ? this.forEach(function(c) {
                        h(c, a, b)
                    }) : i(this.first, a, b) : void 0
                }, m.prototype.applyCSS = function(a, b) {
                    var c = [];
                    return this.forEach(function(d) {
                        c.push(j(d, a, b))
                    }), c
                }, m.prototype.makeVisibleAndYield = function(a) {
                    var b = {
                            display: "block",
                            visibility: "hidden"
                        },
                        c = [];
                    return this.forEach(function(d) {
                        var e = k.findElementWithDisplayNone(d);
                        c.push(e ? j(e, b, a) : void 0)
                    }), c
                }, b.show = function(a) {
                    return k(a).show()
                }, b.hide = function(a) {
                    return k(a).hide()
                }, b.css = function(a, b, c) {
                    return k(a).css(b, c)
                }, b.applyCSS = function(a, b, c) {
                    return k(a).applyCSS(b, c)
                }, b.makeVisibleAndYield = function(a, b) {
                    return k(a).makeVisibleAndYield(b)
                }
            }(),
            function() {
                b.setImmediate = function() {
                    return "undefined" != typeof process && process.nextTick ? "undefined" != typeof setImmediate ? setImmediate : process.nextTick : "function" == typeof setImmediate ? function(a) {
                        setImmediate(a)
                    } : function(a) {
                        setTimeout(a, 0)
                    }
                }(), b.iterator = function(a) {
                    var b = function(c) {
                        var d = function() {
                            return a.length && a[c].apply(null, arguments), d.next()
                        };
                        return d.next = function() {
                            return c < a.length - 1 ? b(c + 1) : null
                        }, d
                    };
                    return b(0)
                }, b.waterfall = function(a, c) {
                    if (c = c || function() {}, a.constructor !== Array) return c(new Error("First argument to waterfall must be an array of functions"));
                    if (!a.length) return c();
                    var d = function(a) {
                        return function(e) {
                            if (e) c.apply(null, arguments), c = function() {};
                            else {
                                var f = i.call(arguments, 1),
                                    g = a.next();
                                f.push(g ? d(g) : c), b.setImmediate(function() {
                                    a.apply(null, f)
                                })
                            }
                        }
                    };
                    d(b.iterator(a))()
                }
            }(),
            function() {
                var c = a.requestAnimationFrame || a.mozRequestAnimationFrame || a.webkitRequestAnimationFrame || a.msRequestAnimationFrame;
                if (c) c = b.bind(c, a);
                else {
                    var d = 0,
                        e = b.now();
                    c = function(c) {
                        var f = b.now(),
                            g = Math.max(0, 16 - (f - d)),
                            h = a.setTimeout(function() {
                                c(f - e)
                            }, g);
                        return d = f + g, h
                    }
                }
                b.requestAnimationFrame = c
            }(),
            function() {
                var a = [],
                    d = !1;
                b.Analytics = function(e, f) {
                    var g = e + "/logging/ClientEvent",
                        h = e + "/logging/ClientQos",
                        i = {},
                        j = function(a, c, d) {
                            b.post((c ? h : g) + "?_=" + b.uuid.v4(), {
                                body: a,
                                xdomainrequest: "IE" === k.env.name && k.env.version < 10,
                                headers: {
                                    "Content-Type": "application/json"
                                }
                            }, d)
                        },
                        l = function() {
                            if (!d && a.length > 0) {
                                d = !0;
                                var b = a[0],
                                    c = function() {
                                        a.shift(), d = !1, l()
                                    };
                                b && j(b.data, b.isQos, function(a) {
                                    if (a) {
                                        var d = "Failed to send ClientEvent, moving on to the next item.";
                                        f ? f(d) : console.log(d)
                                    } else b.onComplete();
                                    setTimeout(c, 50)
                                })
                            }
                        },
                        m = function(b, c, d) {
                            a.push({
                                data: b,
                                onComplete: c,
                                isQos: d
                            }), l()
                        },
                        n = function(a, b, d) {
                            if (!d) return !1;
                            var e = [d, b, a].join("_"),
                                f = 100;
                            return null === f || f === c ? !1 : (i[e] || 0) <= f
                        };
                    this.logError = function(a, c, d, e, f) {
                        f || (f = {});
                        var g = f.partnerId;
                        if (!n(a, c, g)) {
                            var h = [g, c, a].join("_"),
                                j = e ? e : null;
                            i[h] = "undefined" != typeof i[h] ? i[h] + 1 : 1, this.logEvent(b.extend(f, {
                                action: c + "." + a,
                                payload: j
                            }), !1)
                        }
                    }, this.logEvent = function(a, b, c) {
                        if (b || (b = !1), !(c && !isNaN(c) && Math.random() > c)) {
                            for (var d in a) a.hasOwnProperty(d) && null === a[d] && delete a[d];
                            a = JSON.stringify(a);
                            var e = function() {};
                            m(a, e, b)
                        }
                    }, this.logQOS = function(a) {
                        this.logEvent(a, !0)
                    }
                }
            }(), b.get = function(a, c, d) {
                var e = b.extend(c || {}, {
                    method: "GET"
                });
                b.request(a, e, d)
            }, b.post = function(a, c, d) {
                var e = b.extend(c || {}, {
                    method: "POST"
                });
                e.xdomainrequest ? b.xdomainRequest(a, e, d) : b.request(a, e, d)
            }
    }(a, a.OTHelpers),
    /**
     * @license  TB Plugin 0.4.0.10 01e58ad 2015Q1
     * http://www.tokbox.com/
     *
     * Copyright (c) 2015 TokBox, Inc.
     *
     * Date: April 13 06:37:38 2015
     *
     */
    function(b) {
        if (void 0 === b.OTPlugin) {
            var c = OTHelpers,
                d = "Safari" === c.env.name || "IE" === c.env.name && c.env.version >= 8 && -1 === c.env.userAgent.indexOf("x64"),
                e = !1,
                f = {
                    isSupported: function() {
                        return d
                    },
                    isReady: function() {
                        return e
                    },
                    meta: {
                        mimeType: "application/x-opentokie,version=0.4.0.10",
                        activeXName: "TokBox.OpenTokIE.0.4.0.10",
                        version: "0.4.0.10"
                    },
                    useLoggingFrom: function(a) {
                        f.log = c.bind(a.log, a), f.debug = c.bind(a.debug, a), f.info = c.bind(a.info, a), f.warn = c.bind(a.warn, a), f.error = c.bind(a.error, a)
                    }
                };
            if (c.useLogHelpers(f), b.OTPlugin = f, c.registerCapability("otplugin", function() {
                    return f.isInstalled()
                }), !f.isSupported()) return void(f.isInstalled = function() {
                return !1
            });
            var g = function() {
                    Function.prototype.bind || (Function.prototype.bind = function(a) {
                        if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
                        var b = Array.prototype.slice.call(arguments, 1),
                            c = this,
                            d = function() {},
                            e = function() {
                                return c.apply(this instanceof d && a ? this : a, b.concat(Array.prototype.slice.call(arguments)))
                            };
                        return d.prototype = this.prototype, e.prototype = new d, e
                    }), Array.isArray || (Array.isArray = function(a) {
                        return "[object Array]" === Object.prototype.toString.call(a)
                    }), Array.prototype.indexOf || (Array.prototype.indexOf = function(a, b) {
                        var c, d, e = b ? b : 0;
                        if (!this) throw new TypeError;
                        if (d = this.length, 0 === d || e >= d) return -1;
                        for (0 > e && (e = d - Math.abs(e)), c = e; d > c; c++)
                            if (this[c] === a) return c;
                        return -1
                    }), Array.prototype.map || (Array.prototype.map = function(a) {
                        "use strict";
                        if (void 0 === this || null === this) throw new TypeError;
                        var b = Object(this),
                            c = b.length >>> 0;
                        if ("function" != typeof a) throw new TypeError;
                        for (var d = new Array(c), e = arguments.length >= 2 ? arguments[1] : void 0, f = 0; c > f; f++) f in b && (d[f] = a.call(e, b[f], f, b));
                        return d
                    })
                },
                h = function(a, b) {
                    var d, e, g, h = function() {},
                        i = new h,
                        j = !1;
                    try {
                        d = a._.RumorInit(b, "")
                    } catch (k) {
                        f.error("Error creating the Rumor Socket: ", k.message)
                    }
                    if (!d) throw new Error("Could not initialise OTPlugin rumor connection");
                    return i.open = function() {
                        j = !0, a._.RumorOpen(d)
                    }, i.close = function(b, c) {
                        j && (j = !1, a._.RumorClose(d, b, c)), a.removeRef(i)
                    }, i.destroy = function() {
                        this.close()
                    }, i.send = function(b) {
                        a._.RumorSend(d, b.type, b.toAddress, JSON.parse(JSON.stringify(b.headers)), b.data)
                    }, i.onOpen = function(a) {
                        e = a
                    }, i.onClose = function(a) {
                        g = a
                    }, i.onError = function(b) {
                        a._.SetOnRumorError(d, m(b))
                    }, i.onMessage = function(b) {
                        a._.SetOnRumorMessage(d, m(b))
                    }, a.addRef(i), a._.SetOnRumorOpen(d, m(function() {
                        e && c.isFunction(e) && e.call(null)
                    })), a._.SetOnRumorClose(d, m(function(b) {
                        g(b), a.removeRef(i)
                    })), i
                },
                i = function(a) {
                    var b = [];
                    a.addRef = function(c) {
                        return b.push(c), a
                    }, a.removeRef = function(c) {
                        if (0 !== b.length) {
                            var d = b.indexOf(c);
                            return -1 !== d && b.splice(d, 1), 0 === b.length && a.destroy(), a
                        }
                    }, a.removeAllRefs = function() {
                        for (; b.length;) b.shift().destroy()
                    }
                },
                j = function(a) {
                    var b = {},
                        d = function() {
                            var b = Array.prototype.slice.call(arguments);
                            a.emit(b.shift(), b)
                        };
                    a.on = function(c, d, e) {
                        return b.hasOwnProperty(c) || (b[c] = []), b[c].push([d, e]), a
                    }, a.off = function(d, e, f) {
                        return b.hasOwnProperty(d) && 0 !== b[d].length ? (c.filter(b[d], function(a) {
                            return a[0] === e && a[1] === f
                        }), a) : void 0
                    }, a.once = function(b, c, d) {
                        var e = function() {
                            return a.off(b, e), c.apply(d, arguments)
                        };
                        return a.on(b, e), a
                    }, a.emit = function(d, e) {
                        return c.callAsync(function() {
                            (b.hasOwnProperty(d) || !b[d].length) && c.forEach(b[d], function(a) {
                                a[0].apply(a[1], e)
                            })
                        }), a
                    };
                    var e = function(b) {
                        a._.on && a._.on(-1, {
                            customEvent: m(d)
                        }), a._.initialise ? (a.on("ready", m(b)), a._.initialise()) : b.call(a)
                    };
                    return function(b) {
                        e(function(c) {
                            return c ? (f.error("Error while starting up plugin " + a.uuid + ": " + c), void b(c)) : (f.debug("Plugin " + a.id + " is loaded"), void b(void 0, a))
                        })
                    }
                },
                k = 5e3,
                l = {},
                m = function(a) {
                    return function() {
                        var b = Array.prototype.slice.call(arguments);
                        b.unshift(a), c.callAsync.apply(c, b)
                    }
                },
                n = function(a) {
                    if (a && (l[a] && (clearTimeout(l[a]), l[a] = null), b[a])) try {
                        delete b[a]
                    } catch (c) {
                        b[a] = void 0
                    }
                },
                o = function(a, c) {
                    l[a] = setTimeout(function() {
                        n(a), c("The object timed out while loading.")
                    }, k), b[a] = function() {
                        n(a);
                        var b = Array.prototype.slice.call(arguments);
                        b.unshift(null), c.apply(null, b)
                    }
                },
                p = function() {
                    return "OTPlugin_loaded_" + c.uuid().replace(/\-+/g, "")
                },
                q = function(a, b) {
                    b = b || {};
                    var d = [],
                        e = ['type="' + b.mimeType + '"', 'id="' + a + '_obj"', 'tb_callback_id="' + a + '"', 'width="0" height="0"'],
                        f = {
                            userAgent: c.env.userAgent.toLowerCase(),
                            windowless: b.windowless,
                            onload: a
                        };
                    b.isVisible !== !0 && e.push('visibility="hidden"'), d.push("<object " + e.join(" ") + ">");
                    for (var g in f) f.hasOwnProperty(g) && d.push('<param name="' + g + '" value="' + f[g] + '" />');
                    return d.push("</object>"), d.join("")
                },
                r = function(a, c, d) {
                    c = c || {};
                    var e = q(a, c),
                        f = c.doc || b.document;
                    f.body.insertAdjacentHTML("beforeend", e);
                    var g = f.body.querySelector("#" + a + "_obj");
                    d(void 0, g)
                },
                s = function(a, b) {
                    var d = function() {},
                        e = new d,
                        f = j(e);
                    i(e);
                    var g = function(a) {
                        a ? (e._ = a, e.parentElement = a.parentElement, e.$ = c(a)) : (e._ = null, e.parentElement = null, e.$ = c())
                    };
                    return e.uuid = p(), e.isValid = function() {
                        return e._.valid
                    }, e.destroy = function() {
                        e.removeAllRefs(), g(null), e.emit("destroy")
                    }, g(null), o(e.uuid, function(c) {
                        return c ? (b("The plugin with the mimeType of " + a.mimeType + " timed out while loading: " + c), void e.destroy()) : (e._.setAttribute("id", "tb_plugin_" + e._.uuid), e._.removeAttribute("tb_callback_id"), e.uuid = e._.uuid, e.id = e._.id, void f(function(a) {
                            return a ? (b("Error while starting up plugin " + e.uuid + ": " + a), void e.destroy()) : void b(void 0, e)
                        }))
                    }), r(e.uuid, a, function(a, b) {
                        g(b)
                    }), e
                },
                t = function(a) {
                    return a.selectSources = function() {
                        return a._.selectSources.apply(a._, arguments)
                    }, a
                },
                u = function(a) {
                    return a.setStream = function(b, d) {
                        if (a._.setStream(b), d)
                            if (b.hasVideo()) {
                                var e = function() {
                                    return a._ ? void(a._.videoWidth > 0 ? setTimeout(d, 200) : setTimeout(e, 500)) : void d(new c.Error("The plugin went away before the stream could be bound."))
                                };
                                setTimeout(e, 500)
                            } else setTimeout(d, 200);
                        return a
                    }, a
                },
                v = function(a, b) {
                    var d = function() {},
                        e = new d;
                    return e.domElement = a._, e.$ = c(a._), e.parentElement = a._.parentNode, a.addRef(e), e.appendTo = function(b) {
                        b && a._.parentNode !== b && (f.debug("VideoContainer appendTo", b), b.appendChild(a._), e.parentElement = b)
                    }, e.show = function(d) {
                        return f.debug("VideoContainer show"), a._.removeAttribute("width"), a._.removeAttribute("height"), a.setStream(b, d), c.show(a._), e
                    }, e.setSize = function(b, c) {
                        return a._.setAttribute("width", b), a._.setAttribute("height", c), e
                    }, e.width = function(b) {
                        return void 0 !== b && (f.debug("VideoContainer set width to " + b), a._.setAttribute("width", b)), a._.getAttribute("width")
                    }, e.height = function(b) {
                        return void 0 !== b && (f.debug("VideoContainer set height to " + b), a._.setAttribute("height", b)), a._.getAttribute("height")
                    }, e.volume = function(a) {
                        return f.debug(void 0 !== a ? "VideoContainer setVolume not implemented: called with " + a : "VideoContainer getVolume not implemented"), .5
                    }, e.getImgData = function() {
                        return a._.getImgData("image/png")
                    }, e.videoWidth = function() {
                        return a._.videoWidth
                    }, e.videoHeight = function() {
                        return a._.videoHeight
                    }, e.destroy = function() {
                        a._.setStream(null), a.removeRef(e)
                    }, e
                },
                w = function(a) {
                    for (var b in a) a.hasOwnProperty(b) && (this[b] = a[b])
                };
            w.prototype.forEach = function(a, b) {
                for (var c in this) this.hasOwnProperty(c) && a.call(b, this[c])
            };
            var x = function() {
                    var a = function() {},
                        b = new a,
                        d = {},
                        e = function(a) {
                            b.mediaCapturer && b.mediaCapturer.id === a.id ? b.mediaCapturer = null : d.hasOwnProperty(a.id) && delete d[a.id], a.$ && a.$.remove()
                        };
                    return b.mediaCapturer = null, b.removeAll = function() {
                        for (var a in d) d.hasOwnProperty(a) && d[a].destroy();
                        b.mediaCapturer && b.mediaCapturer.destroy()
                    }, b.create = function(a, b) {
                        var c = s(a, b);
                        return d[c.uuid] = c, c.on("destroy", function() {
                            e(c)
                        }), c
                    }, b.createMediaPeer = function(a, e) {
                        c.isFunction(a) && (e = a, a = {});
                        var g = b.create(c.extend(a || {}, {
                            mimeType: f.meta.mimeType,
                            isVisible: !0,
                            windowless: !0
                        }), function(a) {
                            return a ? void e.call(f, a) : (d[g.id] = g, void e.call(f, void 0, g))
                        });
                        u(g)
                    }, b.createMediaCapturer = function(a) {
                        return b.mediaCapturer ? (a.call(f, void 0, b.mediaCapturer), b) : (b.mediaCapturer = b.create({
                            mimeType: f.meta.mimeType,
                            isVisible: !1,
                            windowless: !1
                        }, function(c) {
                            a.call(f, c, b.mediaCapturer)
                        }), void t(b.mediaCapturer))
                    }, b
                }(),
                y = function(a, b, d, e) {
                    var g, h = function() {},
                        i = new h,
                        j = c.uuid(),
                        k = !1,
                        l = !1,
                        n = [],
                        o = !1,
                        p = [];
                    d.addRef(i), g = {
                        addstream: [],
                        removestream: [],
                        icecandidate: [],
                        signalingstatechange: [],
                        iceconnectionstatechange: []
                    };
                    var q = function() {},
                        r = function(a) {
                            f.error("Failed to process candidate"), f.error(a)
                        },
                        s = function() {
                            for (var a = 0; a < n.length; ++a) d._.addIceCandidate(j, n[a], q, r)
                        },
                        t = function(a) {
                            return function() {
                                return o === !0 ? a.apply(i, arguments) : void p.push([a, arguments])
                            }
                        },
                        u = function() {
                            for (var a; a = p.shift();) a[0].apply(i, a[1])
                        },
                        v = function() {
                            var a = Array.prototype.slice.call(arguments),
                                b = a.shift();
                            return g.hasOwnProperty(b) ? void c.forEach(g[b], function(b) {
                                b.apply(null, a)
                            }) : void f.error("PeerConnection does not have an event called: " + b)
                        },
                        x = function(a) {
                            for (var b in a) a.hasOwnProperty(b) && (a[b] = m(a[b]));
                            d._.on(j, a)
                        },
                        y = function(a) {
                            setTimeout(function() {
                                var b = A.fromJson(a, d),
                                    e = {
                                        stream: b,
                                        target: i
                                    };
                                i.onaddstream && c.isFunction(i.onaddstream) && c.callAsync(i.onaddstream, e), v("addstream", e)
                            }, 3e3)
                        },
                        z = function(a) {
                            var b = A.fromJson(a, d),
                                e = {
                                    stream: b,
                                    target: i
                                };
                            i.onremovestream && c.isFunction(i.onremovestream) && c.callAsync(i.onremovestream, e), v("removestream", e)
                        },
                        B = function(a, b, d) {
                            var e = new f.RTCIceCandidate({
                                    candidate: a,
                                    sdpMid: b,
                                    sdpMLineIndex: d
                                }),
                                g = {
                                    candidate: e,
                                    target: i
                                };
                            i.onicecandidate && c.isFunction(i.onicecandidate) && c.callAsync(i.onicecandidate, g), v("icecandidate", g)
                        },
                        C = function(a) {
                            i.signalingState = a;
                            var b = {
                                state: a,
                                target: i
                            };
                            i.onsignalingstatechange && c.isFunction(i.onsignalingstatechange) && c.callAsync(i.onsignalingstatechange, b), v("signalingstate", b)
                        },
                        D = function(a) {
                            i.iceConnectionState = a;
                            var b = {
                                state: a,
                                target: i
                            };
                            i.oniceconnectionstatechange && c.isFunction(i.oniceconnectionstatechange) && c.callAsync(i.oniceconnectionstatechange, b), v("iceconnectionstatechange", b)
                        };
                    return i.createOffer = t(function(a, b, c) {
                        f.debug("createOffer", c), d._.createOffer(j, function(b, c) {
                            a(new f.RTCSessionDescription({
                                type: b,
                                sdp: c
                            }))
                        }, b, c || {})
                    }), i.createAnswer = t(function(a, b, c) {
                        f.debug("createAnswer", c), d._.createAnswer(j, function(b, c) {
                            a(new f.RTCSessionDescription({
                                type: b,
                                sdp: c
                            }))
                        }, b, c || {})
                    }), i.setLocalDescription = t(function(a, b, c) {
                        f.debug("setLocalDescription"), d._.setLocalDescription(j, a, function() {
                            k = !0, l && s(), b && b.call(null)
                        }, c)
                    }), i.setRemoteDescription = t(function(a, b, c) {
                        f.debug("setRemoteDescription"), d._.setRemoteDescription(j, a, function() {
                            l = !0, k && s(), b && b.call(null)
                        }, c)
                    }), i.addIceCandidate = t(function(a) {
                        f.debug("addIceCandidate"), k && l ? d._.addIceCandidate(j, a, q, r) : n.push(a)
                    }), i.addStream = t(function(a) {
                        var b = {};
                        d._.addStream(j, a, b)
                    }), i.removeStream = t(function(a) {
                        d._.removeStream(j, a)
                    }), i.getRemoteStreams = function() {
                        return c.map(d._.getRemoteStreams(j), function(a) {
                            return A.fromJson(a, d)
                        })
                    }, i.getLocalStreams = function() {
                        return c.map(d._.getLocalStreams(j), function(a) {
                            return A.fromJson(a, d)
                        })
                    }, i.getStreamById = function(a) {
                        return A.fromJson(d._.getStreamById(j, a), d)
                    }, i.getStats = t(function(a, b, c) {
                        d._.getStats(j, a || null, m(function(a) {
                            var c = new w(JSON.parse(a));
                            b(c)
                        }), c)
                    }), i.close = function() {
                        d._.destroyPeerConnection(j), d.removeRef(this)
                    }, i.destroy = function() {
                        i.close()
                    }, i.addEventListener = function(a, b) {
                        return void 0 === g[a] ? (f.error('Could not bind invalid event "' + a + '" to PeerConnection. The valid event types are:'), void f.error(" " + c.keys(g).join(", "))) : void g[a].push(b)
                    }, i.removeEventListener = function(a, b) {
                        return void 0 === g[a] ? (f.error('Could not unbind invalid event "' + a + '" to PeerConnection. The valid event types are:'), void f.error(" " + c.keys(g).join(", "))) : void(g[a] = c.filter(g[a], b))
                    }, i.onaddstream = null, i.onremovestream = null, i.onicecandidate = null, i.onsignalingstatechange = null, i.oniceconnectionstatechange = null, c.forEach(a.iceServers, function(a) {
                        a.username || (a.username = ""), a.credential || (a.credential = "")
                    }), d._.initPeerConnection(j, a, b) ? (x({
                        addStream: y,
                        removeStream: z,
                        iceCandidate: B,
                        signalingStateChange: C,
                        iceConnectionChange: D
                    }), o = !0, u(), e(void 0, i), i) : void e(new c.error("Failed to initialise PeerConnection"))
                };
            y.create = function(a, b, c, d) {
                new y(a, b, c, d)
            };
            var z = function(a, b, d) {
                    var e = function() {},
                        f = new e;
                    return f.id = b.id, f.kind = b.kind, f.label = b.label, f.enabled = c.castToBoolean(b.enabled), f.streamId = a, f.setEnabled = function(b) {
                        f.enabled = c.castToBoolean(b), f.enabled ? d._.enableMediaStreamTrack(a, f.id) : d._.disableMediaStreamTrack(a, f.id)
                    }, f
                },
                A = function(a, b) {
                    var d = function() {},
                        e = new d,
                        f = [],
                        g = [];
                    e.id = a.id, b.addRef(e), a.videoTracks && a.videoTracks.map(function(c) {
                        g.push(new z(a.id, c, b))
                    }), a.audioTracks && a.audioTracks.map(function(c) {
                        f.push(new z(a.id, c, b))
                    });
                    var h = function(a) {
                        var b = "video" === a ? g : f;
                        return c.some(b, function(a) {
                            return a.enabled
                        })
                    };
                    return e.getVideoTracks = function() {
                        return g
                    }, e.getAudioTracks = function() {
                        return f
                    }, e.getTrackById = function(a) {
                        return g.concat(f).forEach(function(b) {
                            return b.id === a ? b : void 0
                        }), null
                    }, e.hasVideo = function() {
                        return h("video")
                    }, e.hasAudio = function() {
                        return h("audio")
                    }, e.addTrack = function() {}, e.removeTrack = function() {}, e.stop = function() {
                        b._.stopMediaStream(e.id), b.removeRef(e)
                    }, e.destroy = function() {
                        e.stop()
                    }, e._ = {
                        plugin: b,
                        render: function() {
                            return new v(b, e)
                        }
                    }, e
                };
            A.fromJson = function(a, b) {
                return a ? new A(JSON.parse(a), b) : null
            };
            var B, C = function(a) {
                var b = c.clone(a);
                this.hasVideo = void 0 !== b.video && b.video !== !1, this.hasAudio = void 0 !== b.audio && b.audio !== !1, b.video === !0 && (b.video = {}), b.audio === !0 && (b.audio = {}), this.hasVideo && !b.video.mandatory && (b.video.mandatory = {}), this.hasAudio && !b.audio.mandatory && (b.audio.mandatory = {}), this.screenSharing = this.hasVideo && ("screen" === b.video.mandatory.chromeMediaSource || "window" === b.video.mandatory.chromeMediaSource), this.audio = b.audio, this.video = b.video, this.setVideoSource = function(a) {
                    void 0 !== a ? b.video.mandatory.sourceId = a : delete b.video
                }, this.setAudioSource = function(a) {
                    void 0 !== a ? b.audio.mandatory.sourceId = a : delete b.audio
                }, this.toHash = function() {
                    return b
                }
            };
            ! function() {
                var b, d, e = -1,
                    g = function(a, b) {
                        if (a === b) return !1;
                        if (-1 === a) return b;
                        if (-1 === b) return a;
                        if (-1 === a.indexOf(".") && -1 === b.indexOf(".")) return a > b;
                        for (var c = a.split("."), d = b.split("."), e = (c.length > d.length ? d : c).length, f = 0; e > f; ++f)
                            if (parseInt(c[f], 10) > parseInt(d[f], 10)) return !0;
                        return f < c.length ? !0 : !1
                    },
                    h = function() {
                        if (void 0 !== d) return d;
                        var a = "TokBox.otiePluginInstaller",
                            b = "otiePluginInstaller",
                            f = "application/x-otieplugininstaller",
                            h = navigator.plugins[a] || navigator.plugins[b];
                        if (e = -1, h)
                            for (var i, j, k = h.length, l = new RegExp(f.replace("-", "\\-") + ",version=([0-9a-zA-Z-_.]+)", "i"), m = 0; k > m; ++m) i = h[m], i && i.enabledPlugin && i.enabledPlugin.name === h.name && -1 !== i.type.indexOf(f) && (j = l.exec(i.type), null !== j && g(j[1], e) && (e = j[1]));
                        else if ("IE" === c.env.name) try {
                            h = new ActiveXObject(a), e = h.getMasterVersion()
                        } catch (n) {}
                        d = -1 !== e ? f + ",version=" + e : null
                    },
                    i = function() {
                        return void 0 === d && h(), d
                    },
                    j = function() {
                        return void 0 === e && h(), e
                    },
                    k = function() {
                        var a = "0.4.0.9" === j() || !g(j(), "0.4.0.4");
                        return k = function() {
                            return a
                        }, a
                    };
                B = function() {
                    var b, d = function(a) {
                        return function() {
                            return b ? a(void 0, arguments) : void x.create({
                                mimeType: i(),
                                isVisible: !1,
                                windowless: !1
                            }, function(c, d) {
                                return b = d, c ? void f.error("Error while loading the AutoUpdater: " + c) : a.apply(void 0, arguments)
                            })
                        }
                    };
                    this.isOutOfDate = function() {
                        return g(f.meta.version, j())
                    }, this.autoUpdate = d(function() {
                        var d = OT.Dialogs.Plugin.updateInProgress(),
                            e = new OT.Analytics,
                            g = {
                                ieVersion: c.env.version,
                                pluginOldVersion: f.installedVersion(),
                                pluginNewVersion: f.version()
                            },
                            h = m(function() {
                                e.logEvent({
                                    action: "OTPluginAutoUpdate",
                                    variation: "Success",
                                    partnerId: OT.APIKEY,
                                    payload: JSON.stringify(g)
                                }), b.destroy(), d.close(), OT.Dialogs.Plugin.updateComplete().on({
                                    reload: function() {
                                        a.location.reload()
                                    }
                                })
                            }),
                            i = m(function(a, c, h) {
                                g.errorCode = a, g.systemErrorCode = h, e.logEvent({
                                    action: "OTPluginAutoUpdate",
                                    variation: "Failure",
                                    partnerId: OT.APIKEY,
                                    payload: JSON.stringify(g)
                                }), b.destroy(), d.close();
                                var i = c + " (" + a + "). Please restart your browser and try again.";
                                d = OT.Dialogs.Plugin.updateComplete(i).on({
                                    reload: function() {
                                        d.close()
                                    }
                                }), f.error("autoUpdate failed: " + c + " (" + a + "). Please restart your browser and try again.")
                            }),
                            j = m(function(a) {
                                d.setUpdateProgress(a.toFixed())
                            });
                        b._.updatePlugin(f.pathToInstaller(), h, i, j)
                    }), this.destroy = function() {
                        b && b.destroy()
                    }, navigator.plugins && navigator.plugins.refresh(!1)
                }, B.get = function(a) {
                    if (!b) {
                        if (!this.isinstalled()) return void a.call(null, "Plugin was not installed");
                        b = new B
                    }
                    a.call(null, void 0, b)
                }, B.isinstalled = function() {
                    return null !== i() && !k()
                }, B.installedVersion = function() {
                    return j()
                }
            }();
            var D = [],
                E = function() {
                    x.removeAll()
                },
                F = function(a) {
                    D.push(a)
                },
                G = function(a) {
                    for (var b;
                        (b = D.pop()) && c.isFunction(b);) b.call(f, a)
                },
                H = function() {
                    B.get(function(a, b) {
                        return a ? (f.error("Error while loading the AutoUpdater: " + a), void G("Error while loading the AutoUpdater: " + a)) : b.isOutOfDate() ? void b.autoUpdate() : void x.createMediaCapturer(function(a) {
                            a || !x.mediaCapturer || x.mediaCapturer.isValid() || (a = "The TB Plugin failed to load properly"), e = !0, G(a), c.onDOMUnload(E)
                        })
                    })
                };
            f.isInstalled = function() {
                return this.isSupported() ? B.isinstalled() : !1
            }, f.version = function() {
                return f.meta.version
            }, f.installedVersion = function() {
                return B.installedVersion()
            }, f.pathToInstaller = function() {
                return "https://s3.amazonaws.com/otplugin.tokbox.com/v" + f.meta.version + "/otiePluginMain.msi"
            }, f.ready = function(a) {
                if (f.isReady()) {
                    var b;
                    x.mediaCapturer && x.mediaCapturer.isValid() || (b = "The TB Plugin failed to load properly"), a.call(f, b)
                } else F(a)
            };
            var I = function(a, b, c) {
                x.createMediaPeer(function(d, e) {
                    return d ? void c.call(f, d) : void e._.getUserMedia(a.toHash(), function(a) {
                        b.call(f, A.fromJson(a, e))
                    }, c)
                })
            };
            f.getUserMedia = function(a, b, c) {
                var d = new C(a);
                if (d.screenSharing) I(d, b, c);
                else {
                    var e = [];
                    d.hasVideo && e.push("video"), d.hasAudio && e.push("audio"), x.mediaCapturer.selectSources(e, function(a) {
                        for (var e in a) a.hasOwnProperty(e) && f.debug(e + " Capture Device: " + a[e]);
                        d.setVideoSource(a.video), d.setAudioSource(a.audio), I(d, b, c)
                    }, c)
                }
            }, f.initRumorSocket = function(a, b) {
                f.ready(function(c) {
                    c ? b(c) : b(null, new h(x.mediaCapturer, a))
                })
            }, f.initPeerConnection = function(a, b, c, d) {
                var e = function(c, e) {
                    return c ? void d.call(f, c) : (f.debug("Got PeerConnection for " + e.id), void y.create(a, b, e, function(a, b) {
                        return a ? void d.call(f, a) : void d.call(f, null, b)
                    }))
                };
                c && c._.plugin ? e(null, c._.plugin) : x.createMediaPeer(e)
            }, f.RTCSessionDescription = function(a) {
                this.type = a.type, this.sdp = a.sdp
            }, f.RTCIceCandidate = function(a) {
                this.sdpMid = a.sdpMid, this.sdpMLineIndex = parseInt(a.sdpMLineIndex, 10), this.candidate = a.candidate
            }, g(), c.onDOMLoad(H)
        }
    }(this), ! function(a, b) {
        function c(a) {
            for (var b = new ArrayBuffer(a.length), c = new Uint8Array(b), d = 0; d < a.length; ++d) c[d] = a[d];
            return b
        }

        function d(a) {
            function c(a) {
                var c = new XMLHttpRequest,
                    d = new b.$.RSVP.Promise(function(b, d) {
                        function e(a) {
                            return 8e3 * a / (Date.now() - f)
                        }
                        var f = Date.now(),
                            g = 0;
                        c.addEventListener("load", function(a) {
                            b(e(a.loaded))
                        }), c.addEventListener("abort", function() {
                            b(e(g))
                        }), c.addEventListener("error", function(a) {
                            d(a)
                        }), c.addEventListener("progress", function(a) {
                            g = a.loaded
                        }), c.open("GET", a + "?_" + Math.random()), c.send()
                    });
                return {
                    promise: d,
                    abort: function() {
                        c.abort()
                    }
                }
            }

            function d(a, c) {
                var d = new XMLHttpRequest,
                    e = new b.$.RSVP.Promise(function(b, e) {
                        var f, g, h;
                        d.upload.addEventListener("progress", function(a) {
                            f || (f = Date.now()), h = a.loaded
                        }), d.addEventListener("load", function() {
                            g = Date.now(), b(8e3 * h / (g - f))
                        }), d.addEventListener("error", function(a) {
                            e(a)
                        }), d.addEventListener("abort", function() {
                            e()
                        }), d.open("POST", a), d.send(c)
                    });
                return {
                    promise: e,
                    abort: function() {
                        d.abort()
                    }
                }
            }

            function e(a, b) {
                var d = c(a);
                return setTimeout(function() {
                    d.abort()
                }, b), d.promise
            }

            function f(a, c, e) {
                return new b.$.RSVP.Promise(function(b) {
                    function f(b) {
                        g = d(a, new ArrayBuffer(b / 8)), g.promise.then(function(a) {
                            h = a, f(2 * b)
                        })
                    }
                    var g, h = 0;
                    setTimeout(function() {
                        g.abort(), b(h)
                    }, e), f(c)
                })
            }
            var g = a.httpConfig;
            return b.$.RSVP.Promise.all([e(g.downloadUrl, 1e3 * g.duration), f(g.uploadUrl, g.uploadSize, 1e3 * g.duration)]).then(function(a) {
                return {
                    downloadBandwidth: a[0],
                    uploadBandwidth: a[1]
                }
            })
        }

        function e(a) {
            return a.hasOwnProperty("googFrameWidthReceived") || a.hasOwnProperty("googFrameWidthInput") || "video" === a.mediaType
        }

        function f(a) {
            return a.hasOwnProperty("audioInputLevel") || a.hasOwnProperty("audioOutputLevel") || "audio" === a.mediaType
        }

        function g(a) {
            return a.hasOwnProperty("bytesReceived")
        }

        function h(a) {
            var b = {
                packetsLost: 0,
                packetsReceived: 0,
                bytesReceived: 0
            };
            return a.hasOwnProperty("packetsReceived") && (b.packetsReceived = parseInt(a.packetsReceived, 10)), a.hasOwnProperty("packetsLost") && (b.packetsLost = parseInt(a.packetsLost, 10)), a.hasOwnProperty("bytesReceived") && (b.bytesReceived += parseInt(a.bytesReceived, 10)), b
        }

        function i(a) {
            return b.$.isObject(a) && "getTime" in a ? a.getTime() : a
        }

        function j() {
            function a(a, b) {
                a.getStats(function(a) {
                    var c = [];
                    a.result().forEach(function(a) {
                        var b = {};
                        a.names().forEach(function(c) {
                            b[c] = a.stat(c)
                        }), b.id = a.id, b.type = a.type, b.timestamp = a.timestamp, c.push(b)
                    }), b(null, c)
                })
            }

            function c(a, b) {
                a.getStats(null, function(a) {
                    var c = [];
                    a.forEach(function(a) {
                        c.push(a)
                    }), b(null, c)
                }, b)
            }
            return "Firefox" === b.$.browserVersion().name || OTPlugin.isInstalled() ? c : a
        }

        function k(c) {
            function d(a) {
                return -1 !== a.candidate.indexOf("relay")
            }

            function e() {
                var a = new b.VideoElement({
                    attributes: {
                        muted: !0
                    }
                });
                return a.domElement().style.position = "absolute", a.domElement().style.top = "-9999%", a.appendTo(document.body), a
            }

            function f() {
                return new b.$.RSVP.Promise(function(a, c) {
                    b.$.createPeerConnection({
                        iceServers: t.iceServers
                    }, {}, null, function(d, e) {
                        d ? c(new b.$.Error("createPeerConnection failed", 1600, d)) : a(e)
                    })
                })
            }

            function g(a) {
                return new b.$.RSVP.Promise(function(b, c) {
                    a.createOffer(b, c)
                })
            }

            function h(a, c) {
                return new b.$.RSVP.Promise(function(d, e) {
                    a.bindToStream(c, function(a) {
                        a ? e(new b.$.Error("bindToStream failed", 1600, a)) : d()
                    })
                })
            }

            function i(a, c) {
                return new b.$.RSVP.Promise(function(b, d) {
                    a.addIceCandidate(new r({
                        sdpMLineIndex: c.sdpMLineIndex,
                        candidate: c.candidate
                    }), b, d)
                })
            }

            function j(a, c) {
                return new b.$.RSVP.Promise(function(d, e) {
                    a.setLocalDescription(c, d, function(a) {
                        e(new b.$.Error("setLocalDescription failed", 1600, a))
                    })
                })
            }

            function k(a, c) {
                return new b.$.RSVP.Promise(function(d, e) {
                    a.setRemoteDescription(c, d, function(a) {
                        e(new b.$.Error("setRemoteDescription failed", 1600, a))
                    })
                })
            }

            function l(a) {
                return new b.$.RSVP.Promise(function(c, d) {
                    a.createAnswer(c, function(a) {
                        d(new b.$.Error("createAnswer failed", 1600, a))
                    })
                })
            }

            function m(a) {
                return new b.$.RSVP.Promise(function(c, d) {
                    s(a, function(a, e) {
                        a ? d(new b.$.Error("geStats failed", 1600, a)) : c(e)
                    })
                })
            }

            function n(a) {
                return function(c) {
                    c.candidate && d(c.candidate) && i(a, c.candidate)["catch"](function() {
                        b.warn("An error occurred while adding a ICE candidate during webrtc test")
                    })
                }
            }

            function o(a) {
                return 8 * (a.videoBytesReceived + a.audioBytesReceived) / (b.$.now() - a.startTs) * 1e3
            }

            function p(a, c) {
                var d = 1e3;
                return new b.$.RSVP.Promise(function(e) {
                    function f() {
                        b.$.RSVP.Promise.all([m(a).then(function(a) {
                            b.$.forEach(a, function(a) {
                                if (b.getStatsHelpers.isVideoStat(a)) {
                                    var c = null;
                                    a.hasOwnProperty("googRtt") ? c = parseInt(a.googRtt, 10) : a.hasOwnProperty("mozRtt") && (c = a.mozRtt), null !== c && c > -1 && (i.roundTripTimeSamplesCount++, i.roundTripTime += c)
                                }
                            })
                        }), m(c).then(function(a) {
                            b.$.forEach(a, function(a) {
                                if (b.getStatsHelpers.isVideoStat(a)) {
                                    if (a.hasOwnProperty("packetsReceived") && a.hasOwnProperty("packetsLost")) {
                                        var c = parseInt(a.packetsLost, 10),
                                            d = parseInt(a.packetsReceived, 10);
                                        c >= 0 && d > 0 && (i.packetLostRatioSamplesCount++, i.packetLostRatio += 100 * c / d)
                                    }
                                    a.hasOwnProperty("bytesReceived") && (i.videoBytesReceived = parseInt(a.bytesReceived, 10))
                                } else b.getStatsHelpers.isAudioStat(a) && a.hasOwnProperty("bytesReceived") && (i.audioBytesReceived = parseInt(a.bytesReceived, 10))
                            })
                        })]).then(function() {
                            setTimeout(function() {
                                h && f()
                            }, d)
                        })
                    }

                    function g(a) {
                        h = !1;
                        var b = {
                            packetLostRatio: i.packetLostRatioSamplesCount > 0 ? i.packetLostRatio /= 100 * i.packetLostRatioSamplesCount : null,
                            roundTripTime: i.roundTripTimeSamplesCount > 0 ? i.roundTripTime /= i.roundTripTimeSamplesCount : null,
                            bandwidth: o(i),
                            extended: a
                        };
                        e(b)
                    }
                    var h = !0,
                        i = {
                            startTs: b.$.now(),
                            packetLostRatioSamplesCount: 0,
                            packetLostRatio: 0,
                            roundTripTimeSamplesCount: 0,
                            roundTripTime: 0,
                            videoBytesReceived: 0,
                            audioBytesReceived: 0
                        };
                    f(), setTimeout(function() {
                        o(i) < t.thresholdBitsPerSecond ? setTimeout(function() {
                            g(!0)
                        }, 1e3 * t.extendedDuration) : g(!1)
                    }, 1e3 * t.duration)
                })
            }
            var q, r, s = b.getStatsAdpater(),
                t = c.mediaConfig,
                u = c.localStream;
            return OTPlugin.isInstalled() ? (q = OTPlugin.RTCSessionDescription, r = OTPlugin.RTCIceCandidate) : (q = a.mozRTCSessionDescription || a.RTCSessionDescription, r = a.mozRTCIceCandidate || a.RTCIceCandidate), b.$.RSVP.Promise.all([f(), f()]).then(function(a) {
                function c() {
                    i.destroy(), m.destroy(), d.close(), f.close()
                }
                var d = a[0],
                    f = a[1],
                    i = e(),
                    m = e();
                h(i, u), d.addStream(u);
                var o;
                return f.onaddstream = function(a) {
                    o = a.stream, h(m, o)
                }, d.onicecandidate = n(f), f.onicecandidate = n(d), g(d).then(function(a) {
                    return b.$.RSVP.Promise.all([j(d, a), k(f, a)])
                }).then(function() {
                    return l(f)
                }).then(function(a) {
                    return b.$.RSVP.Promise.all([j(f, a), k(d, a)])
                }).then(function() {
                    return p(d, f)
                }).then(function(a) {
                    return c(), a
                }, function(a) {
                    throw c(), a
                })
            })
        }

        function l(a, b) {
            this.code = a, this.message = b, this.reason = b
        }
        "file:" === location.protocol && alert("You cannot test a page using WebRTC through the file system due to browser permissions. You must run it over a web server.");
        var b = a.OT || {};
        b.APIKEY = function() {
            var a = function() {
                    var a = document.getElementsByTagName("script");
                    return a = a[a.length - 1], a = a.getAttribute("src") || a.src
                }(),
                b = a.match(/[\?\&]apikey=([^&]+)/i);
            return b ? b[1] : ""
        }(), a.OT || (a.OT = b), a.TB || (a.TB = b), b.properties = {
            version: "v2.5.1",
            build: "23265fa",
            debug: "false",
            websiteURL: "http://www.tokbox.com",
            cdnURL: "http://static.opentok.com",
            loggingURL: "http://hlg.tokbox.com/prod",
            apiURL: "http://anvil.opentok.com",
            messagingProtocol: "wss",
            messagingPort: 443,
            supportSSL: "true",
            cdnURLSSL: "https://static.opentok.com",
            loggingURLSSL: "https://hlg.tokbox.com/prod",
            apiURLSSL: "https://anvil.opentok.com",
            minimumVersion: {
                firefox: parseFloat("29"),
                chrome: parseFloat("34")
            }
        }, b.$ = a.OTHelpers, b.$.eventing(b), b.$.defineGetters = function(a, b, c) {
            var d = {};
            void 0 === c && (c = !1);
            for (var e in b) b.hasOwnProperty(e) && (d[e] = {
                get: b[e],
                enumerable: c
            });
            Object.defineProperties(a, d)
        }, b.Modal = b.$.Modal, b.$.useLogHelpers(b);
        var m = !1,
            n = b.setLogLevel;
        b.setLogLevel = function(a) {
            b.$.setLogLevel(a);
            var c = n.call(b, a);
            return b.shouldLog(b.DEBUG) && !m && (b.debug("OpenTok JavaScript library " + b.properties.version), b.debug("Release notes: " + b.properties.websiteURL + "/opentok/webrtc/docs/js/release-notes.html"), b.debug("Known issues: " + b.properties.websiteURL + "/opentok/webrtc/docs/js/release-notes.html#knownIssues"), m = !0), b.debug("OT.setLogLevel(" + c + ")"), c
        };
        var o = "true" === b.properties.debug || b.properties.debug === !0;
        b.setLogLevel(o ? b.DEBUG : b.ERROR), OTPlugin && OTPlugin.isInstalled() && (b.$.env.userAgent += "; OTPlugin " + OTPlugin.version()), b.$.userAgent = function() {
                return b.$.env.userAgent
            }, b.Rumor = {
                MessageType: {
                    SUBSCRIBE: 0,
                    UNSUBSCRIBE: 1,
                    MESSAGE: 2,
                    CONNECT: 3,
                    DISCONNECT: 4,
                    PING: 7,
                    PONG: 8,
                    STATUS: 9
                }
            }, ! function() {
                b.Rumor.PluginSocket = function(a, c) {
                    var d, e = "initializing";
                    OTPlugin.initRumorSocket(a, b.$.bind(function(a, f) {
                        a ? (e = "closed", c.onClose({
                            code: 4999
                        })) : "initializing" === e ? (d = f, d.onOpen(function() {
                            e = "open", c.onOpen()
                        }), d.onClose(function(a) {
                            e = "closed", c.onClose({
                                code: a
                            })
                        }), d.onError(function(a) {
                            e = "closed", c.onError(a), c.onClose({
                                code: a
                            })
                        }), d.onMessage(function(a, d, e, f) {
                            var g = new b.Rumor.Message(a, d, e, f);
                            c.onMessage(g)
                        }), d.open()) : this.close()
                    }, this)), this.close = function() {
                        return "initializing" === e || "closed" === e ? void(e = "closed") : void d.close(1e3, "")
                    }, this.send = function(a) {
                        "open" === e && d.send(a)
                    }, this.isClosed = function() {
                        return "closed" === e
                    }
                }
            }(this),
            /**
             * @license  Copyright 2014 Joshua Bell
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *     http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             *
             * Original source: https://github.com/inexorabletash/text-encoding
             ***/
            function(a) {
                "use strict";

                function c(a, b, c) {
                    return a >= b && c >= a
                }

                function d(a, b) {
                    return Math.floor(a / b)
                }

                function e(a) {
                    var b = 0;
                    this.get = function() {
                        return b >= a.length ? r : Number(a[b])
                    }, this.offset = function(c) {
                        if (b += c, 0 > b) throw new Error("Seeking past start of the buffer");
                        if (b > a.length) throw new Error("Seeking past EOF")
                    }, this.match = function(c) {
                        if (c.length > b + a.length) return !1;
                        var d;
                        for (d = 0; d < c.length; d += 1)
                            if (Number(a[b + d]) !== c[d]) return !1;
                        return !0
                    }
                }

                function f(a) {
                    var b = 0;
                    this.emit = function(c) {
                        var d, e = r;
                        for (d = 0; d < arguments.length; ++d) e = Number(arguments[d]), a[b++] = e;
                        return e
                    }
                }

                function g(a) {
                    function b(a) {
                        for (var b = [], d = 0, e = a.length; d < a.length;) {
                            var f = a.charCodeAt(d);
                            if (c(f, 55296, 57343))
                                if (c(f, 56320, 57343)) b.push(65533);
                                else if (d === e - 1) b.push(65533);
                            else {
                                var g = a.charCodeAt(d + 1);
                                if (c(g, 56320, 57343)) {
                                    var h = 1023 & f,
                                        i = 1023 & g;
                                    d += 1, b.push(65536 + (h << 10) + i)
                                } else b.push(65533)
                            } else b.push(f);
                            d += 1
                        }
                        return b
                    }
                    var d = 0,
                        e = b(a);
                    this.offset = function(a) {
                        if (d += a, 0 > d) throw new Error("Seeking past start of the buffer");
                        if (d > e.length) throw new Error("Seeking past EOF")
                    }, this.get = function() {
                        return d >= e.length ? s : e[d]
                    }
                }

                function h() {
                    var a = "";
                    this.string = function() {
                        return a
                    }, this.emit = function(b) {
                        65535 >= b ? a += String.fromCharCode(b) : (b -= 65536, a += String.fromCharCode(55296 + (b >> 10 & 1023)), a += String.fromCharCode(56320 + (1023 & b)))
                    }
                }

                function i(a) {
                    this.name = "EncodingError", this.message = a, this.code = 0
                }

                function j(a, b) {
                    if (a) throw new i("Decoder error");
                    return b || 65533
                }

                function k(a) {
                    throw new i("The code point " + a + " could not be encoded.")
                }

                function l(a) {
                    return a = String(a).trim().toLowerCase(), Object.prototype.hasOwnProperty.call(v, a) ? v[a] : null
                }

                function m(a) {
                    var b = a.fatal,
                        d = 0,
                        e = 0,
                        f = 0,
                        g = 0;
                    this.decode = function(a) {
                        var h = a.get();
                        if (h === r) return 0 !== e ? j(b) : s;
                        if (a.offset(1), 0 === e) {
                            if (c(h, 0, 127)) return h;
                            if (c(h, 194, 223)) e = 1, g = 128, d = h - 192;
                            else if (c(h, 224, 239)) e = 2, g = 2048, d = h - 224;
                            else {
                                if (!c(h, 240, 244)) return j(b);
                                e = 3, g = 65536, d = h - 240
                            }
                            return d *= Math.pow(64, e), null
                        }
                        if (!c(h, 128, 191)) return d = 0, e = 0, f = 0, g = 0, a.offset(-1), j(b);
                        if (f += 1, d += (h - 128) * Math.pow(64, e - f), f !== e) return null;
                        var i = d,
                            k = g;
                        return d = 0, e = 0, f = 0, g = 0, c(i, k, 1114111) && !c(i, 55296, 57343) ? i : j(b)
                    }
                }

                function n(a) {
                    a.fatal;
                    this.encode = function(a, b) {
                        var e = b.get();
                        if (e === s) return r;
                        if (b.offset(1), c(e, 55296, 57343)) return k(e);
                        if (c(e, 0, 127)) return a.emit(e);
                        var f, g;
                        c(e, 128, 2047) ? (f = 1, g = 192) : c(e, 2048, 65535) ? (f = 2, g = 224) : c(e, 65536, 1114111) && (f = 3, g = 240);
                        for (var h = a.emit(d(e, Math.pow(64, f)) + g); f > 0;) {
                            var i = d(e, Math.pow(64, f - 1));
                            h = a.emit(128 + i % 64), f -= 1
                        }
                        return h
                    }
                }

                function o(a, b) {
                    return b.match([255, 254]) && "utf-16" === a ? void b.offset(2) : b.match([254, 255]) && "utf-16be" == a ? void b.offset(2) : b.match([239, 187, 191]) && "utf-8" == a ? void b.offset(3) : void 0
                }

                function p(b, c) {
                    if (!this || this === a) return new p(b, c);
                    if (b = b ? String(b) : w, c = Object(c), this._encoding = l(b), null === this._encoding || "utf-8" !== this._encoding.name && "utf-16" !== this._encoding.name && "utf-16be" !== this._encoding.name) throw new TypeError("Unknown encoding: " + b);
                    return this._streaming = !1, this._encoder = null, this._options = {
                        fatal: Boolean(c.fatal)
                    }, Object.defineProperty ? Object.defineProperty(this, "encoding", {
                        get: function() {
                            return this._encoding.name
                        }
                    }) : this.encoding = this._encoding.name, this
                }

                function q(b, c) {
                    if (!this || this === a) return new q(b, c);
                    if (b = b ? String(b) : w, c = Object(c), this._encoding = l(b), null === this._encoding) throw new TypeError("Unknown encoding: " + b);
                    return this._streaming = !1, this._decoder = null, this._options = {
                        fatal: Boolean(c.fatal)
                    }, Object.defineProperty ? Object.defineProperty(this, "encoding", {
                        get: function() {
                            return this._encoding.name
                        }
                    }) : this.encoding = this._encoding.name, this
                }
                if (!(b.$.env && "IE" === b.$.env.name && b.$.env.version < 10 || void 0 !== a.TextEncoder && void 0 !== a.TextDecoder)) {
                    var r = -1,
                        s = -1;
                    i.prototype = Error.prototype;
                    var t = [{
                            encodings: [{
                                labels: ["unicode-1-1-utf-8", "utf-8", "utf8"],
                                name: "utf-8"
                            }],
                            heading: "The Encoding"
                        }, {
                            encodings: [{
                                labels: ["cp864", "ibm864"],
                                name: "ibm864"
                            }, {
                                labels: ["cp866", "ibm866"],
                                name: "ibm866"
                            }, {
                                labels: ["csisolatin2", "iso-8859-2", "iso-ir-101", "iso8859-2", "iso_8859-2", "l2", "latin2"],
                                name: "iso-8859-2"
                            }, {
                                labels: ["csisolatin3", "iso-8859-3", "iso_8859-3", "iso-ir-109", "l3", "latin3"],
                                name: "iso-8859-3"
                            }, {
                                labels: ["csisolatin4", "iso-8859-4", "iso_8859-4", "iso-ir-110", "l4", "latin4"],
                                name: "iso-8859-4"
                            }, {
                                labels: ["csisolatincyrillic", "cyrillic", "iso-8859-5", "iso_8859-5", "iso-ir-144"],
                                name: "iso-8859-5"
                            }, {
                                labels: ["arabic", "csisolatinarabic", "ecma-114", "iso-8859-6", "iso_8859-6", "iso-ir-127"],
                                name: "iso-8859-6"
                            }, {
                                labels: ["csisolatingreek", "ecma-118", "elot_928", "greek", "greek8", "iso-8859-7", "iso_8859-7", "iso-ir-126"],
                                name: "iso-8859-7"
                            }, {
                                labels: ["csisolatinhebrew", "hebrew", "iso-8859-8", "iso-8859-8-i", "iso-ir-138", "iso_8859-8", "visual"],
                                name: "iso-8859-8"
                            }, {
                                labels: ["csisolatin6", "iso-8859-10", "iso-ir-157", "iso8859-10", "l6", "latin6"],
                                name: "iso-8859-10"
                            }, {
                                labels: ["iso-8859-13"],
                                name: "iso-8859-13"
                            }, {
                                labels: ["iso-8859-14", "iso8859-14"],
                                name: "iso-8859-14"
                            }, {
                                labels: ["iso-8859-15", "iso_8859-15"],
                                name: "iso-8859-15"
                            }, {
                                labels: ["iso-8859-16"],
                                name: "iso-8859-16"
                            }, {
                                labels: ["koi8-r", "koi8_r"],
                                name: "koi8-r"
                            }, {
                                labels: ["koi8-u"],
                                name: "koi8-u"
                            }, {
                                labels: ["csmacintosh", "mac", "macintosh", "x-mac-roman"],
                                name: "macintosh"
                            }, {
                                labels: ["iso-8859-11", "tis-620", "windows-874"],
                                name: "windows-874"
                            }, {
                                labels: ["windows-1250", "x-cp1250"],
                                name: "windows-1250"
                            }, {
                                labels: ["windows-1251", "x-cp1251"],
                                name: "windows-1251"
                            }, {
                                labels: ["ascii", "ansi_x3.4-1968", "csisolatin1", "iso-8859-1", "iso8859-1", "iso_8859-1", "l1", "latin1", "us-ascii", "windows-1252"],
                                name: "windows-1252"
                            }, {
                                labels: ["cp1253", "windows-1253"],
                                name: "windows-1253"
                            }, {
                                labels: ["csisolatin5", "iso-8859-9", "iso-ir-148", "l5", "latin5", "windows-1254"],
                                name: "windows-1254"
                            }, {
                                labels: ["cp1255", "windows-1255"],
                                name: "windows-1255"
                            }, {
                                labels: ["cp1256", "windows-1256"],
                                name: "windows-1256"
                            }, {
                                labels: ["windows-1257"],
                                name: "windows-1257"
                            }, {
                                labels: ["cp1258", "windows-1258"],
                                name: "windows-1258"
                            }, {
                                labels: ["x-mac-cyrillic", "x-mac-ukrainian"],
                                name: "x-mac-cyrillic"
                            }],
                            heading: "Legacy single-byte encodings"
                        }, {
                            encodings: [{
                                labels: ["chinese", "csgb2312", "csiso58gb231280", "gb2312", "gbk", "gb_2312", "gb_2312-80", "iso-ir-58", "x-gbk"],
                                name: "gbk"
                            }, {
                                labels: ["gb18030"],
                                name: "gb18030"
                            }, {
                                labels: ["hz-gb-2312"],
                                name: "hz-gb-2312"
                            }],
                            heading: "Legacy multi-byte Chinese (simplified) encodings"
                        }, {
                            encodings: [{
                                labels: ["big5", "big5-hkscs", "cn-big5", "csbig5", "x-x-big5"],
                                name: "big5"
                            }],
                            heading: "Legacy multi-byte Chinese (traditional) encodings"
                        }, {
                            encodings: [{
                                labels: ["cseucpkdfmtjapanese", "euc-jp", "x-euc-jp"],
                                name: "euc-jp"
                            }, {
                                labels: ["csiso2022jp", "iso-2022-jp"],
                                name: "iso-2022-jp"
                            }, {
                                labels: ["csshiftjis", "ms_kanji", "shift-jis", "shift_jis", "sjis", "windows-31j", "x-sjis"],
                                name: "shift_jis"
                            }],
                            heading: "Legacy multi-byte Japanese encodings"
                        }, {
                            encodings: [{
                                labels: ["cseuckr", "csksc56011987", "euc-kr", "iso-ir-149", "korean", "ks_c_5601-1987", "ks_c_5601-1989", "ksc5601", "ksc_5601", "windows-949"],
                                name: "euc-kr"
                            }, {
                                labels: ["csiso2022kr", "iso-2022-kr"],
                                name: "iso-2022-kr"
                            }],
                            heading: "Legacy multi-byte Korean encodings"
                        }, {
                            encodings: [{
                                labels: ["utf-16", "utf-16le"],
                                name: "utf-16"
                            }, {
                                labels: ["utf-16be"],
                                name: "utf-16be"
                            }],
                            heading: "Legacy utf-16 encodings"
                        }],
                        u = {},
                        v = {};
                    t.forEach(function(a) {
                        a.encodings.forEach(function(a) {
                            u[a.name] = a, a.labels.forEach(function(b) {
                                v[b] = a
                            })
                        })
                    }); {
                        a["encoding-indexes"] || {}
                    }
                    u["utf-8"].getEncoder = function(a) {
                        return new n(a)
                    }, u["utf-8"].getDecoder = function(a) {
                        return new m(a)
                    };
                    var w = "utf-8";
                    p.prototype = {
                        encode: function(a, b) {
                            a = a ? String(a) : "", b = Object(b), this._streaming || (this._encoder = this._encoding.getEncoder(this._options)), this._streaming = Boolean(b.stream);
                            for (var c = [], d = new f(c), e = new g(a); e.get() !== s;) this._encoder.encode(d, e);
                            if (!this._streaming) {
                                var h;
                                do h = this._encoder.encode(d, e); while (h !== r);
                                this._encoder = null
                            }
                            return new Uint8Array(c)
                        }
                    }, q.prototype = {
                        decode: function(a, b) {
                            if (a && !("buffer" in a && "byteOffset" in a && "byteLength" in a)) throw new TypeError("Expected ArrayBufferView");
                            a || (a = new Uint8Array(0)), b = Object(b), this._streaming || (this._decoder = this._encoding.getDecoder(this._options)), this._streaming = Boolean(b.stream);
                            var c = new Uint8Array(a.buffer, a.byteOffset, a.byteLength),
                                d = new e(c);
                            this._BOMseen || (this._BOMseen = !0, o(this._encoding.name, d));
                            for (var f, g = new h; d.get() !== r;) f = this._decoder.decode(d), null !== f && f !== s && g.emit(f);
                            if (!this._streaming) {
                                do f = this._decoder.decode(d), null !== f && f !== s && g.emit(f); while (f !== s && d.get() != r);
                                this._decoder = null
                            }
                            return g.string()
                        }
                    }, a.TextEncoder = a.TextEncoder || p, a.TextDecoder = a.TextDecoder || q
                }
            }(this), b.Rumor.Message = function(a, b, c, d) {
                this.type = a, this.toAddress = b, this.headers = c, this.data = d, this.transactionId = this.headers["TRANSACTION-ID"], this.status = this.headers.STATUS, this.isError = !(this.status && "2" === this.status[0])
            }, b.Rumor.Message.prototype.serialize = function() {
                var a, b, c, d, e = 8,
                    f = 7,
                    g = [],
                    h = [],
                    i = [];
                for (f++, c = 0; c < this.toAddress.length; c++) g.push(new TextEncoder("utf-8").encode(this.toAddress[c])), f += 2, f += g[c].length;
                f++, c = 0;
                for (var j in this.headers) this.headers.hasOwnProperty(j) && (h.push(new TextEncoder("utf-8").encode(j)), i.push(new TextEncoder("utf-8").encode(this.headers[j])), f += 4, f += h[c].length, f += i[c].length, c++);
                b = new TextEncoder("utf-8").encode(this.data), f += b.length;
                var k = new ArrayBuffer(f),
                    l = new Uint8Array(k, 0, f);
                for (f -= 4, l[0] = (4278190080 & f) >>> 24, l[1] = (16711680 & f) >>> 16, l[2] = (65280 & f) >>> 8, l[3] = (255 & f) >>> 0, l[4] = 0, l[5] = 0, l[6] = this.type, l[7] = this.toAddress.length, c = 0; c < g.length; c++)
                    for (a = g[c], l[e++] = a.length >> 8 & 255, l[e++] = a.length >> 0 & 255, d = 0; d < a.length; d++) l[e++] = a[d];
                for (l[e++] = h.length, c = 0; c < h.length; c++) {
                    for (a = h[c], l[e++] = a.length >> 8 & 255, l[e++] = a.length >> 0 & 255, d = 0; d < a.length; d++) l[e++] = a[d];
                    for (a = i[c], l[e++] = a.length >> 8 & 255, l[e++] = a.length >> 0 & 255, d = 0; d < a.length; d++) l[e++] = a[d]
                }
                for (c = 0; c < b.length; c++) l[e++] = b[c];
                return k
            }, b.Rumor.Message.deserialize = function(a) {
                "undefined" != typeof Buffer && Buffer.isBuffer(a) && (a = c(a));
                var d, e, f, g, h, i, j, k, l = 0,
                    m = 8,
                    n = new Uint8Array(a);
                l += n[0] << 24, l += n[1] << 16, l += n[2] << 8, l += n[3] << 0, d = n[6];
                var o = [];
                for (k = 0; k < n[7]; k++) j = n[m++] << 8, j += n[m++], e = new Uint8Array(a, m, j), o[k] = new TextDecoder("utf-8").decode(e), m += j;
                for (f = n[m++], g = {}, k = 0; f > k; k++) j = n[m++] << 8, j += n[m++], e = new Uint8Array(a, m, j), h = new TextDecoder("utf-8").decode(e), m += j, j = n[m++] << 8, j += n[m++], e = new Uint8Array(a, m, j), i = new TextDecoder("utf-8").decode(e), g[h] = i, m += j;
                var p = new Uint8Array(a, m),
                    q = new TextDecoder("utf-8").decode(p);
                return new b.Rumor.Message(d, o, g, q)
            }, b.Rumor.Message.Connect = function(a, c) {
                var d = {
                    uniqueId: a,
                    notifyDisconnectAddress: c
                };
                return new b.Rumor.Message(b.Rumor.MessageType.CONNECT, [], d, "")
            }, b.Rumor.Message.Disconnect = function() {
                return new b.Rumor.Message(b.Rumor.MessageType.DISCONNECT, [], {}, "")
            }, b.Rumor.Message.Subscribe = function(a) {
                return new b.Rumor.Message(b.Rumor.MessageType.SUBSCRIBE, a, {}, "")
            }, b.Rumor.Message.Unsubscribe = function(a) {
                return new b.Rumor.Message(b.Rumor.MessageType.UNSUBSCRIBE, a, {}, "")
            }, b.Rumor.Message.Publish = function(a, c, d) {
                return new b.Rumor.Message(b.Rumor.MessageType.MESSAGE, a, d || {}, c || "")
            }, b.Rumor.Message.Ping = function() {
                return new b.Rumor.Message(b.Rumor.MessageType.PING, [], {}, "")
            }, ! function() {
                var a = 100,
                    c = 10;
                b.Rumor.NativeSocket = function(d, e, f) {
                    var g, h, i, j;
                    g = new d(e), g.binaryType = "arraybuffer", g.onopen = f.onOpen, g.onclose = f.onClose, g.onerror = f.onError, g.onmessage = function(a) {
                        if (b) {
                            var c = b.Rumor.Message.deserialize(a.data);
                            f.onMessage(c)
                        }
                    }, h = function k(b) {
                        g && (void 0 === b && (b = 0), i && clearTimeout(i), g.bufferedAmount > 0 && c >= b + 1 ? i = setTimeout(k, a, b + 1) : j())
                    }, j = function() {
                        g.close()
                    }, this.close = function(a) {
                        a ? h() : j()
                    }, this.send = function(a) {
                        g.send(a.serialize())
                    }, this.isClosed = function() {
                        return 3 === g.readyState
                    }
                }
            }(this);
        var p, q = 9e3,
            r = 5 * q - 100;
        p = {
                1002: "The endpoint is terminating the connection due to a protocol error. (CLOSE_PROTOCOL_ERROR)",
                1003: "The connection is being terminated because the endpoint received data of a type it cannot accept (for example, a text-only endpoint received binary data). (CLOSE_UNSUPPORTED)",
                1004: "The endpoint is terminating the connection because a data frame was received that is too large. (CLOSE_TOO_LARGE)",
                1005: "Indicates that no status code was provided even though one was expected. (CLOSE_NO_STATUS)",
                1006: "Used to indicate that a connection was closed abnormally (that is, with no close frame being sent) when a status code is expected. (CLOSE_ABNORMAL)",
                1007: "Indicates that an endpoint is terminating the connection because it has received data within a message that was not consistent with the type of the message (e.g., non-UTF-8 [RFC3629] data within a text message)",
                1008: "Indicates that an endpoint is terminating the connection because it has received a message that violates its policy.  This is a generic status code that can be returned when there is no other more suitable status code (e.g., 1003 or 1009) or if there is a need to hide specific details about the policy",
                1009: "Indicates that an endpoint is terminating the connection because it has received a message that is too big for it to process",
                1011: "Indicates that a server is terminating the connection because it encountered an unexpected condition that prevented it from fulfilling the request",
                4001: "Connectivity loss was detected as it was too long since the socket received the last PONG message"
            }, b.Rumor.SocketError = function(a, b) {
                this.code = a, this.message = b
            }, b.Rumor.Socket = function(c, d, e) {
                var f, g, h, i, j, k, l, m, n, o, s = ["disconnected", "error", "connected", "connecting", "disconnecting"],
                    t = function(a) {
                        switch (a) {
                            case "disconnected":
                            case "error":
                                if (f = null, j) {
                                    var b;
                                    x() && (b = new Error(p[4001]), b.code = 4001), j(b)
                                }
                        }
                    },
                    u = b.$.statable(this, s, "disconnected", t),
                    v = function(a, c) {
                        if (null === c || !b.$.isFunction(c)) throw new Error("The Rumor.Socket " + a + " callback must be a valid function or null")
                    },
                    w = b.$.bind(function(a) {
                        b.error("Rumor.Socket: " + a);
                        var c = new b.Rumor.SocketError(null, a || "Unknown Socket Error");
                        m && clearTimeout(m), u("error"), "connecting" === this.previousState && l && (l(c, void 0), l = null), i && i(c)
                    }, this),
                    x = function() {
                        return n ? b.$.now() - n >= r : !1
                    },
                    y = b.$.bind(function() {
                        this.is("connected") && (x() ? D({
                            code: 4001
                        }) : (f.send(b.Rumor.Message.Ping()), o = setTimeout(y, q)))
                    }, this),
                    z = function() {
                        return !a.OT
                    },
                    A = b.$.bind(function() {
                        return m && clearTimeout(m), this.isNot("connecting") ? void b.debug("webSocketConnected reached in state other than connecting") : (f.send(b.Rumor.Message.Connect(g, d)), u("connected"), l && (l(void 0, g), l = null), h && h(g), void(o = setTimeout(function() {
                            n = b.$.now(), y()
                        }, q)))
                    }, this),
                    B = function() {
                        var a = f;
                        w("Timed out while waiting for the Rumor socket to connect.");
                        try {
                            a.close()
                        } catch (b) {}
                    },
                    C = function() {},
                    D = b.$.bind(function(a) {
                        if (m && clearTimeout(m), o && clearTimeout(o), !z()) {
                            if (1e3 !== a.code && 1001 !== a.code) {
                                var b = a.reason || a.message;
                                !b && p.hasOwnProperty(a.code) && (b = p[a.code]), w("Rumor Socket Disconnected: " + b)
                            }
                            this.isNot("error") && u("disconnected")
                        }
                    }, this),
                    E = function(a) {
                        n = b.$.now(), k && a.type !== b.Rumor.MessageType.PONG && k(a)
                    };
                this.publish = function(a, c, d) {
                    f.send(b.Rumor.Message.Publish(a, c, d))
                }, this.subscribe = function(a) {
                    f.send(b.Rumor.Message.Subscribe(a))
                }, this.unsubscribe = function(a) {
                    f.send(b.Rumor.Message.Unsubscribe(a))
                }, this.connect = function(d, h) {
                    if (this.is("connecting", "connected")) return void h(new b.Rumor.SocketError(null, "Rumor.Socket cannot connect when it is already connecting or connected."));
                    g = d, l = h, u("connecting");
                    var i = e || a.WebSocket,
                        j = {
                            onOpen: A,
                            onClose: D,
                            onError: C,
                            onMessage: E
                        };
                    try {
                        f = "undefined" != typeof i ? new b.Rumor.NativeSocket(i, c, j) : new b.Rumor.PluginSocket(c, j), m = setTimeout(B, b.Rumor.Socket.CONNECT_TIMEOUT)
                    } catch (k) {
                        b.error(k), w("Could not connect to the Rumor socket, possibly because of a blocked port.")
                    }
                }, this.disconnect = function(a) {
                    return m && clearTimeout(m), o && clearTimeout(o), f ? void(f.isClosed() ? this.isNot("error") && u("disconnected") : (this.is("connected") && f.send(b.Rumor.Message.Disconnect()), f.close(a))) : void(this.isNot("error") && u("disconnected"))
                }, b.$.defineProperties(this, {
                    id: {
                        get: function() {
                            return g
                        }
                    },
                    onOpen: {
                        set: function(a) {
                            v("onOpen", a), h = a
                        },
                        get: function() {
                            return h
                        }
                    },
                    onError: {
                        set: function(a) {
                            v("onError", a), i = a
                        },
                        get: function() {
                            return i
                        }
                    },
                    onClose: {
                        set: function(a) {
                            v("onClose", a), j = a
                        },
                        get: function() {
                            return j
                        }
                    },
                    onMessage: {
                        set: function(a) {
                            v("onMessage", a), k = a
                        },
                        get: function() {
                            return k
                        }
                    }
                })
            }, b.Rumor.Socket.CONNECT_TIMEOUT = 15e3, b.Raptor = {
                Actions: {
                    CONNECT: 100,
                    CREATE: 101,
                    UPDATE: 102,
                    DELETE: 103,
                    STATE: 104,
                    FORCE_DISCONNECT: 105,
                    FORCE_UNPUBLISH: 106,
                    SIGNAL: 107,
                    CREATE_ARCHIVE: 108,
                    CLOSE_ARCHIVE: 109,
                    START_RECORDING_SESSION: 110,
                    STOP_RECORDING_SESSION: 111,
                    START_RECORDING_STREAM: 112,
                    STOP_RECORDING_STREAM: 113,
                    LOAD_ARCHIVE: 114,
                    START_PLAYBACK: 115,
                    STOP_PLAYBACK: 116,
                    APPSTATE_PUT: 117,
                    APPSTATE_DELETE: 118,
                    OFFER: 119,
                    ANSWER: 120,
                    PRANSWER: 121,
                    CANDIDATE: 122,
                    SUBSCRIBE: 123,
                    UNSUBSCRIBE: 124,
                    QUERY: 125,
                    SDP_ANSWER: 126,
                    PONG: 127,
                    REGISTER: 128,
                    QUALITY_CHANGED: 129
                },
                Types: {
                    RPC_REQUEST: 100,
                    RPC_RESPONSE: 101,
                    STREAM: 102,
                    ARCHIVE: 103,
                    CONNECTION: 104,
                    APPSTATE: 105,
                    CONNECTIONCOUNT: 106,
                    MODERATION: 107,
                    SIGNAL: 108,
                    SUBSCRIBER: 110,
                    JSEP: 109
                }
            }, b.Raptor.serializeMessage = function(a) {
                return JSON.stringify(a)
            }, b.Raptor.deserializeMessage = function(a) {
                if (0 === a.length) return {};
                var b = JSON.parse(a),
                    c = b.uri.substr(1).split("/");
                c.shift(), "" === c[c.length - 1] && c.pop(), b.params = {};
                for (var d = 0, e = c.length; e - 1 > d; d += 2) b.params[c[d]] = c[d + 1];
                return c.length % 2 === 0 ? "channel" === c[c.length - 2] && c.length > 6 ? b.resource = c[c.length - 4] + "_" + c[c.length - 2] : b.resource = c[c.length - 2] : "channel" === c[c.length - 1] && c.length > 5 ? b.resource = c[c.length - 3] + "_" + c[c.length - 1] : b.resource = c[c.length - 1], b.signature = b.resource + "#" + b.method, b
            }, b.Raptor.unboxFromRumorMessage = function(a) {
                var c = b.Raptor.deserializeMessage(a.data);
                return c.transactionId = a.transactionId, c.fromAddress = a.headers["X-TB-FROM-ADDRESS"], c
            }, b.Raptor.parseIceServers = function(a) {
                try {
                    return JSON.parse(a.data).content.iceServers
                } catch (b) {
                    return []
                }
            }, b.Raptor.Message = {}, b.Raptor.Message.offer = function(a, c) {
                return b.Raptor.serializeMessage({
                    method: "offer",
                    uri: a,
                    content: {
                        sdp: c
                    }
                })
            }, b.Raptor.Message.connections = {}, b.Raptor.Message.connections.create = function(a, c, d) {
                return b.Raptor.serializeMessage({
                    method: "create",
                    uri: "/v2/partner/" + a + "/session/" + c + "/connection/" + d,
                    content: {
                        userAgent: b.$.env.userAgent
                    }
                })
            }, b.Raptor.Message.connections.destroy = function(a, c, d) {
                return b.Raptor.serializeMessage({
                    method: "delete",
                    uri: "/v2/partner/" + a + "/session/" + c + "/connection/" + d,
                    content: {}
                })
            }, b.Raptor.Message.sessions = {}, b.Raptor.Message.sessions.get = function(a, c) {
                return b.Raptor.serializeMessage({
                    method: "read",
                    uri: "/v2/partner/" + a + "/session/" + c,
                    content: {}
                })
            }, b.Raptor.Message.streams = {}, b.Raptor.Message.streams.get = function(a, c, d) {
                return b.Raptor.serializeMessage({
                    method: "read",
                    uri: "/v2/partner/" + a + "/session/" + c + "/stream/" + d,
                    content: {}
                })
            }, b.Raptor.Message.streams.channelFromOTChannel = function(a) {
                var b = {
                    id: a.id,
                    type: a.type,
                    active: a.active
                };
                return "video" === a.type && (b.width = a.width, b.height = a.height, b.orientation = a.orientation, b.frameRate = a.frameRate, "default" !== a.source && (b.source = a.source), b.fitMode = a.fitMode), b
            }, b.Raptor.Message.streams.create = function(a, c, d, e, f, g, h, i) {
                var j = {
                    id: d,
                    name: e,
                    audioFallbackEnabled: f,
                    channel: b.$.map(g, function(a) {
                        return b.Raptor.Message.streams.channelFromOTChannel(a)
                    })
                };
                return h && (j.minBitrate = h), i && (j.maxBitrate = i), b.Raptor.serializeMessage({
                    method: "create",
                    uri: "/v2/partner/" + a + "/session/" + c + "/stream/" + d,
                    content: j
                })
            }, b.Raptor.Message.streams.destroy = function(a, c, d) {
                return b.Raptor.serializeMessage({
                    method: "delete",
                    uri: "/v2/partner/" + a + "/session/" + c + "/stream/" + d,
                    content: {}
                })
            }, b.Raptor.Message.streams.answer = function(a, c, d, e) {
                return b.Raptor.serializeMessage({
                    method: "answer",
                    uri: "/v2/partner/" + a + "/session/" + c + "/stream/" + d,
                    content: {
                        sdp: e
                    }
                })
            }, b.Raptor.Message.streams.candidate = function(a, c, d, e) {
                return b.Raptor.serializeMessage({
                    method: "candidate",
                    uri: "/v2/partner/" + a + "/session/" + c + "/stream/" + d,
                    content: e
                })
            }, b.Raptor.Message.streamChannels = {}, b.Raptor.Message.streamChannels.update = function(a, c, d, e, f) {
                return b.Raptor.serializeMessage({
                    method: "update",
                    uri: "/v2/partner/" + a + "/session/" + c + "/stream/" + d + "/channel/" + e,
                    content: f
                })
            }, b.Raptor.Message.subscribers = {}, b.Raptor.Message.subscribers.create = function(a, c, d, e, f, g) {
                var h = {
                    id: e,
                    connection: f,
                    keyManagementMethod: b.$.supportedCryptoScheme(),
                    bundleSupport: b.$.hasCapabilities("bundle"),
                    rtcpMuxSupport: b.$.hasCapabilities("RTCPMux")
                };
                return g && (h.channel = g), b.Raptor.serializeMessage({
                    method: "create",
                    uri: "/v2/partner/" + a + "/session/" + c + "/stream/" + d + "/subscriber/" + e,
                    content: h
                })
            }, b.Raptor.Message.subscribers.destroy = function(a, c, d, e) {
                return b.Raptor.serializeMessage({
                    method: "delete",
                    uri: "/v2/partner/" + a + "/session/" + c + "/stream/" + d + "/subscriber/" + e,
                    content: {}
                })
            }, b.Raptor.Message.subscribers.update = function(a, c, d, e, f) {
                return b.Raptor.serializeMessage({
                    method: "update",
                    uri: "/v2/partner/" + a + "/session/" + c + "/stream/" + d + "/subscriber/" + e,
                    content: f
                })
            }, b.Raptor.Message.subscribers.candidate = function(a, c, d, e, f) {
                return b.Raptor.serializeMessage({
                    method: "candidate",
                    uri: "/v2/partner/" + a + "/session/" + c + "/stream/" + d + "/subscriber/" + e,
                    content: f
                })
            }, b.Raptor.Message.subscribers.answer = function(a, c, d, e, f) {
                return b.Raptor.serializeMessage({
                    method: "answer",
                    uri: "/v2/partner/" + a + "/session/" + c + "/stream/" + d + "/subscriber/" + e,
                    content: {
                        sdp: f
                    }
                })
            }, b.Raptor.Message.subscriberChannels = {}, b.Raptor.Message.subscriberChannels.update = function(a, c, d, e, f, g) {
                return b.Raptor.serializeMessage({
                    method: "update",
                    uri: "/v2/partner/" + a + "/session/" + c + "/stream/" + d + "/subscriber/" + e + "/channel/" + f,
                    content: g
                })
            }, b.Raptor.Message.signals = {}, b.Raptor.Message.signals.create = function(a, c, d, e, f) {
                var g = {};
                return void 0 !== e && (g.type = e), void 0 !== f && (g.data = f), b.Raptor.serializeMessage({
                    method: "signal",
                    uri: "/v2/partner/" + a + "/session/" + c + (void 0 !== d ? "/connection/" + d : "") + "/signal/" + b.$.uuid(),
                    content: g
                })
            }, ! function() {
                var a;
                a = {
                    409: "This P2P session already has 2 participants.",
                    410: "The session already has four participants.",
                    1004: "The token passed is invalid."
                }, b.Raptor.Dispatcher = function() {
                    b.$.eventing(this, !0), this.callbacks = {}
                }, b.Raptor.Dispatcher.prototype.registerCallback = function(a, b) {
                    this.callbacks[a] = b
                }, b.Raptor.Dispatcher.prototype.triggerCallback = function(a) {
                    if (a) {
                        var c = this.callbacks[a];
                        if (c && b.$.isFunction(c)) {
                            var d = Array.prototype.slice.call(arguments);
                            d.shift(), c.apply(null, d)
                        }
                        delete this.callbacks[a]
                    }
                }, b.Raptor.Dispatcher.prototype.onClose = function(a) {
                    this.emit("close", a)
                }, b.Raptor.Dispatcher.prototype.dispatch = function(a) {
                    if (a.type === b.Rumor.MessageType.STATUS) {
                        b.debug("OT.Raptor.dispatch: STATUS"), b.debug(a);
                        var c;
                        return a.isError && (c = new b.Error(a.status)), void this.triggerCallback(a.transactionId, c, a)
                    }
                    var d = b.Raptor.unboxFromRumorMessage(a);
                    switch (b.debug("OT.Raptor.dispatch " + d.signature), b.debug(a.data), d.resource) {
                        case "session":
                            this.dispatchSession(d);
                            break;
                        case "connection":
                            this.dispatchConnection(d);
                            break;
                        case "stream":
                            this.dispatchStream(d);
                            break;
                        case "stream_channel":
                            this.dispatchStreamChannel(d);
                            break;
                        case "subscriber":
                            this.dispatchSubscriber(d);
                            break;
                        case "subscriber_channel":
                            this.dispatchSubscriberChannel(d);
                            break;
                        case "signal":
                            this.dispatchSignal(d);
                            break;
                        case "archive":
                            this.dispatchArchive(d);
                            break;
                        default:
                            b.warn("OT.Raptor.dispatch: Type " + d.resource + " is not currently implemented")
                    }
                }, b.Raptor.Dispatcher.prototype.dispatchSession = function(a) {
                    switch (a.method) {
                        case "read":
                            this.emit("session#read", a.content, a.transactionId);
                            break;
                        default:
                            b.warn("OT.Raptor.dispatch: " + a.signature + " is not currently implemented")
                    }
                }, b.Raptor.Dispatcher.prototype.dispatchConnection = function(a) {
                    switch (a.method) {
                        case "created":
                            this.emit("connection#created", a.content);
                            break;
                        case "deleted":
                            this.emit("connection#deleted", a.params.connection, a.reason);
                            break;
                        default:
                            b.warn("OT.Raptor.dispatch: " + a.signature + " is not currently implemented")
                    }
                }, b.Raptor.Dispatcher.prototype.dispatchStream = function(a) {
                    switch (a.method) {
                        case "created":
                            this.emit("stream#created", a.content, a.transactionId);
                            break;
                        case "deleted":
                            this.emit("stream#deleted", a.params.stream, a.reason);
                            break;
                        case "updated":
                            this.emit("stream#updated", a.params.stream, a.content);
                            break;
                        case "generateoffer":
                        case "answer":
                        case "pranswer":
                        case "offer":
                        case "candidate":
                            this.dispatchJsep(a.method, a);
                            break;
                        default:
                            b.warn("OT.Raptor.dispatch: " + a.signature + " is not currently implemented")
                    }
                }, b.Raptor.Dispatcher.prototype.dispatchStreamChannel = function(a) {
                    switch (a.method) {
                        case "updated":
                            this.emit("streamChannel#updated", a.params.stream, a.params.channel, a.content);
                            break;
                        default:
                            b.warn("OT.Raptor.dispatch: " + a.signature + " is not currently implemented")
                    }
                }, b.Raptor.Dispatcher.prototype.dispatchJsep = function(a, b) {
                    this.emit("jsep#" + a, b.params.stream, b.fromAddress, b)
                }, b.Raptor.Dispatcher.prototype.dispatchSubscriberChannel = function(a) {
                    switch (a.method) {
                        case "updated":
                            this.emit("subscriberChannel#updated", a.params.stream, a.params.channel, a.content);
                            break;
                        case "update":
                            this.emit("subscriberChannel#update", a.params.subscriber, a.params.stream, a.content);
                            break;
                        default:
                            b.warn("OT.Raptor.dispatch: " + a.signature + " is not currently implemented")
                    }
                }, b.Raptor.Dispatcher.prototype.dispatchSubscriber = function(a) {
                    switch (a.method) {
                        case "created":
                            this.emit("subscriber#created", a.params.stream, a.fromAddress, a.content.id);
                            break;
                        case "deleted":
                            this.dispatchJsep("unsubscribe", a), this.emit("subscriber#deleted", a.params.stream, a.fromAddress);
                            break;
                        case "generateoffer":
                        case "answer":
                        case "pranswer":
                        case "offer":
                        case "candidate":
                            this.dispatchJsep(a.method, a);
                            break;
                        default:
                            b.warn("OT.Raptor.dispatch: " + a.signature + " is not currently implemented")
                    }
                }, b.Raptor.Dispatcher.prototype.dispatchSignal = function(a) {
                    return "signal" !== a.method ? void b.warn("OT.Raptor.dispatch: " + a.signature + " is not currently implemented") : void this.emit("signal", a.fromAddress, a.content.type, a.content.data)
                }, b.Raptor.Dispatcher.prototype.dispatchArchive = function(a) {
                    switch (a.method) {
                        case "created":
                            this.emit("archive#created", a.content);
                            break;
                        case "updated":
                            this.emit("archive#updated", a.params.archive, a.content)
                    }
                }
            }(this),
            function(a) {
                function c(a, c) {
                    var d = a.channel.map(function(a) {
                            return new b.StreamChannel(a)
                        }),
                        e = a.connectionId ? a.connectionId : a.connection.id;
                    return new b.Stream(a.id, a.name, a.creationTime, c.connections.get(e), c, d)
                }

                function d(a, b) {
                    if (!b.streams.has(a.id)) {
                        var d = c(a, b);
                        return b.streams.add(d), d
                    }
                }

                function e(a) {
                    return new b.Archive(a.id, a.name, a.status)
                }

                function f(a, b) {
                    if (!b.archives.has(a.id)) {
                        var c = e(a);
                        return b.archives.add(c), c
                    }
                }
                b.publishers = new b.$.Collection("guid"), b.subscribers = new b.$.Collection("widgetId"), b.sessions = new b.$.Collection;
                var g = function(a) {
                        var b = [];
                        this.enqueue = function() {
                            b.push(Array.prototype.slice.call(arguments))
                        }, this.triggerAll = function() {
                            for (var c; c = b.shift();) a.trigger.apply(a, c)
                        }
                    },
                    h = function(a) {
                        var c = {};
                        this.enqueue = function() {
                            var b = arguments[0],
                                d = Array.prototype.slice.call(arguments, 1);
                            c[b] || (c[b] = new g(a)), c[b].enqueue.apply(c[b], d)
                        }, this.triggerConnectionCreated = function(a) {
                            c["connectionCreated" + a.id] && c["connectionCreated" + a.id].triggerAll()
                        }, this.triggerSessionConnected = function(a) {
                            c.sessionConnected && c.sessionConnected.triggerAll(), b.$.forEach(a, function(a) {
                                this.triggerConnectionCreated(a)
                            })
                        }
                    },
                    i = {};
                a.OT.SessionDispatcher = function(a) {
                    var c = new b.Raptor.Dispatcher,
                        e = !1,
                        g = new h(c);
                    c.on("close", function(c) {
                        var d = a.connection;
                        if (d) return d.destroyedReason() ? void b.debug("OT.Raptor.Socket: Socket was closed but the connection had already been destroyed. Reason: " + d.destroyedReason()) : void d.destroy(c)
                    });
                    var j = function(c, e) {
                        return c = b.Connection.fromHash(c), (e || a.connection && c.id !== a.connection.id) && (a.connections.add(c), g.triggerConnectionCreated(c)), b.$.forEach(b.$.keys(i), function(b) {
                            var f = i[b];
                            if (f && c.id === f.connection.id) {
                                d(f, a), delete i[f.id];
                                var g = {
                                    debug: e ? "connection came in session#read" : "connection came in connection#created",
                                    streamId: f.id,
                                    connectionId: c.id
                                };
                                a.logEvent("streamCreated", "warning", g)
                            }
                        }), c
                    };
                    c.on("session#read", function(h, i) {
                        var k, l = {};
                        l.streams = [], l.connections = [], l.archives = [], b.$.forEach(h.connection, function(a) {
                            k = j(a, !0), l.connections.push(k)
                        }), b.$.forEach(h.stream, function(b) {
                            l.streams.push(d(b, a))
                        }), b.$.forEach(h.archive || h.archives, function(b) {
                            l.archives.push(f(b, a))
                        }), a._.subscriberMap = {}, c.triggerCallback(i, null, l), e = !0, g.triggerSessionConnected(a.connections)
                    }), c.on("connection#created", function(a) {
                        j(a)
                    }), c.on("connection#deleted", function(b, c) {
                        b = a.connections.get(b), b.destroy(c)
                    }), c.on("stream#created", function(b, e) {
                        var f = b.connectionId ? b.connectionId : b.connection.id;
                        if (a.connections.has(f)) b = d(b, a);
                        else {
                            i[b.id] = b;
                            var g = {
                                debug: "eventOrderError -- streamCreated event before connectionCreated",
                                streamId: b.id
                            };
                            a.logEvent("streamCreated", "warning", g)
                        }
                        b.publisher && b.publisher.setStream(b), c.triggerCallback(e, null, b)
                    }), c.on("stream#deleted", function(c, d) {
                        var e = a.streams.get(c);
                        return e ? void e.destroy(d) : void b.error("OT.Raptor.dispatch: A stream does not exist with the id of " + c + ", for stream#deleted message!")
                    }), c.on("stream#updated", function(c, d) {
                        var e = a.streams.get(c);
                        return e ? void e._.update(d) : void b.error("OT.Raptor.dispatch: A stream does not exist with the id of " + c + ", for stream#updated message!")
                    }), c.on("streamChannel#updated", function(c, d, e) {
                        var f;
                        return c && (f = a.streams.get(c)) ? void f._.updateChannel(d, e) : void b.error("OT.Raptor.dispatch: Unable to determine streamId, or the stream does not exist, for streamChannel message!")
                    });
                    var k = function(a, c, d, e) {
                        var f, g;
                        switch (a) {
                            case "offer":
                                g = [];
                                var h = b.subscribers.find({
                                    streamId: c
                                });
                                h && g.push(h);
                                break;
                            case "answer":
                            case "pranswer":
                            case "generateoffer":
                            case "unsubscribe":
                                g = b.publishers.where({
                                    streamId: c
                                });
                                break;
                            case "candidate":
                                g = b.publishers.where({
                                    streamId: c
                                }).concat(b.subscribers.where({
                                    streamId: c
                                }));
                                break;
                            default:
                                return void b.warn("OT.Raptor.dispatch: jsep#" + a + " is not currently implemented")
                        }
                        if (0 !== g.length) {
                            if (f = g[0].session.connections.get(d), !f && d.match(/^symphony\./)) f = b.Connection.fromHash({
                                id: d,
                                creationTime: Math.floor(b.$.now())
                            }), g[0].session.connections.add(f);
                            else if (!f) return void b.warn("OT.Raptor.dispatch: Messsage comes from a connection (" + d + ") that we do not know about. The message was ignored.");
                            b.$.forEach(g, function(b) {
                                b.processMessage(a, f, e)
                            })
                        }
                    };
                    return c.on("jsep#offer", b.$.bind(k, null, "offer")), c.on("jsep#answer", b.$.bind(k, null, "answer")), c.on("jsep#pranswer", b.$.bind(k, null, "pranswer")), c.on("jsep#generateoffer", b.$.bind(k, null, "generateoffer")), c.on("jsep#unsubscribe", b.$.bind(k, null, "unsubscribe")), c.on("jsep#candidate", b.$.bind(k, null, "candidate")), c.on("subscriberChannel#updated", function(c, d, e) {
                        return c && a.streams.has(c) ? void a.streams.get(c)._.updateChannel(d, e) : void b.error("OT.Raptor.dispatch: Unable to determine streamId, or the stream does not exist, for subscriberChannel#updated message!")
                    }), c.on("subscriberChannel#update", function(c, d, e) {
                        return d && a.streams.has(d) ? b.subscribers.has(c) ? void b.subscribers.get(c).disableVideo(e.active) : void b.error("OT.Raptor.dispatch: Unable to determine subscriberId, or the subscriber does not exist, for subscriberChannel#update message!") : void b.error("OT.Raptor.dispatch: Unable to determine streamId, or the stream does not exist, for subscriberChannel#update message!")
                    }), c.on("subscriber#created", function(c, d, e) {
                        var f = c ? a.streams.get(c) : null;
                        return f ? void(a._.subscriberMap[d + "_" + f.id] = e) : void b.error("OT.Raptor.dispatch: Unable to determine streamId, or the stream does not exist, for subscriber#created message!")
                    }), c.on("subscriber#deleted", function(c, d) {
                        var e = c ? a.streams.get(c) : null;
                        return e ? void delete a._.subscriberMap[d + "_" + e.id] : void b.error("OT.Raptor.dispatch: Unable to determine streamId, or the stream does not exist, for subscriber#created message!")
                    }), c.on("signal", function(b, c, d) {
                        var f = a.connections.get(b);
                        a.connection && b === a.connection.connectionId ? e ? a._.dispatchSignal(f, c, d) : g.enqueue("sessionConnected", "signal", b, c, d) : a.connections.get(b) ? a._.dispatchSignal(f, c, d) : g.enqueue("connectionCreated" + b, "signal", b, c, d)
                    }), c.on("archive#created", function(b) {
                        f(b, a)
                    }), c.on("archive#updated", function(c, d) {
                        var e = a.archives.get(c);
                        return e ? void e._.update(d) : void b.error("OT.Raptor.dispatch: An archive does not exist with the id of " + c + ", for archive#updated message!")
                    }), c
                }
            }(a), b.httpTest = d;
        var s = {
                getMLineIndex: function(a, c) {
                    var d = "m=" + c;
                    return b.$.findIndex(a, function(a) {
                        return -1 !== a.indexOf(d) ? !0 : !1
                    })
                },
                getMLinePayloadTypes: function(a, c) {
                    var d = new RegExp("^m=" + c + " \\d+(/\\d+)? [a-zA-Z0-9/]+(( [a-zA-Z0-9/]+)+)$", "i"),
                        e = a.match(d);
                    return !e || e.length < 2 ? [] : b.$.trim(e[2]).split(" ");

                },
                removeTypesFromMLine: function(a, c) {
                    return b.$.trim(a.replace(new RegExp(" " + c.join(" |"), "ig"), " ").replace(/\s+/g, " "))
                },
                removeMediaEncoding: function(a, c, d) {
                    var e, f, g = a.split("\r\n"),
                        h = s.getMLineIndex(g, c),
                        i = h > -1 ? g[h] : void 0,
                        j = [];
                    if (-1 === h) return g.join("\r\n");
                    if (e = s.getMLinePayloadTypes(i, c), 0 === e.length) return g.join("\r\n");
                    var k = new RegExp("a=rtpmap:(" + e.join("|") + ") " + d + "\\/\\d+", "i");
                    return g = b.$.filter(g, function(a, b) {
                        return f = a.match(k), null === f ? !0 : (j.push(f[1]), h > b && h--, !1)
                    }), j.length > 0 && h > -1 && (g[h] = s.removeTypesFromMLine(i, j)), g.join("\r\n")
                },
                removeComfortNoise: function(a) {
                    return s.removeMediaEncoding(a, "audio", "CN")
                },
                removeVideoCodec: function(a, b) {
                    return s.removeMediaEncoding(a, "video", b)
                }
            },
            t = {};
        t.isVideoStat = e, t.isAudioStat = f, t.isInboundStat = g, t.parseStatCategory = h, t.normalizeTimestamp = i, b.getStatsHelpers = t, b.getStatsAdpater = j, b.webrtcTest = k, b.Chrome = function(a) {
            var c = !1,
                d = {},
                e = function(b, c) {
                    c.parent = this, c.appendTo(a.parent), d[b] = c, this[b] = c
                };
            a.parent && (b.$.eventing(this), this.destroy = function() {
                this.off(), this.hideWhileLoading();
                for (var a in d) d[a].destroy()
            }, this.showAfterLoading = function() {
                c = !0;
                for (var a in d) d[a].showAfterLoading()
            }, this.hideWhileLoading = function() {
                c = !1;
                for (var a in d) d[a].hideWhileLoading()
            }, this.set = function(a, b) {
                if ("string" == typeof a && b) e.call(this, a, b);
                else
                    for (var c in a) a.hasOwnProperty(c) && e.call(this, c, a[c]);
                return this
            })
        }, b.Chrome.Behaviour || (b.Chrome.Behaviour = {}), b.Chrome.Behaviour.Widget = function(a, c) {
            var d, e, f = c || {},
                g = "auto";
            a.setDisplayMode = function(a) {
                var c = a || "auto";
                d !== c && (b.$.removeClass(this.domElement, "OT_mode-" + d), b.$.addClass(this.domElement, "OT_mode-" + c), "off" === c && (g = d), d = c)
            }, a.getDisplayMode = function() {
                return d
            }, a.show = function() {
                return d !== g && (this.setDisplayMode(g), f.onShow && f.onShow()), this
            }, a.showAfterLoading = function() {
                this.setDisplayMode(e)
            }, a.hide = function() {
                return "off" !== d && (this.setDisplayMode("off"), f.onHide && f.onHide()), this
            }, a.hideWhileLoading = function() {
                e = d, this.setDisplayMode("off")
            }, a.destroy = function() {
                return f.onDestroy && f.onDestroy(this.domElement), this.domElement && b.$.removeElement(this.domElement), a
            }, a.appendTo = function(c) {
                return this.domElement = b.$.createElement(f.nodeName || "div", f.htmlAttributes, f.htmlContent), f.onCreate && f.onCreate(this.domElement), a.setDisplayMode(f.mode), "auto" === f.mode && (b.$.addClass(a.domElement, "OT_mode-on-hold"), setTimeout(function() {
                    b.$.removeClass(a.domElement, "OT_mode-on-hold")
                }, 2e3)), c.appendChild(this.domElement), a
            }
        }, b.Chrome.VideoDisabledIndicator = function(a) {
            var c, d = !1,
                e = !1;
            c = b.$.bind(function(a) {
                d ? b.$.addClass(a, "OT_video-disabled") : b.$.removeClass(a, "OT_video-disabled"), e ? b.$.addClass(a, "OT_video-disabled-warning") : b.$.removeClass(a, "OT_video-disabled-warning"), !d && !e || "auto" !== this.getDisplayMode() && "on" !== this.getDisplayMode() ? b.$.removeClass(a, "OT_active") : b.$.addClass(a, "OT_active")
            }, this), this.disableVideo = function(a) {
                d = a, a === !0 && (e = !1), c(this.domElement)
            }, this.setWarning = function(a) {
                e = a, c(this.domElement)
            }, b.Chrome.Behaviour.Widget(this, {
                mode: a.mode || "auto",
                nodeName: "div",
                htmlAttributes: {
                    className: "OT_video-disabled-indicator"
                }
            });
            var f = b.$.bind(this.setDisplayMode, this);
            this.setDisplayMode = function(a) {
                f(a), c(this.domElement)
            }
        }, b.Chrome.NamePanel = function(a) {
            var c = a.name;
            c && "" !== b.$.trim(c).length || (c = null, a.mode = "off"), this.setName = b.$.bind(function(a) {
                c || this.setDisplayMode("auto"), c = a, this.domElement.innerHTML = c
            }), b.Chrome.Behaviour.Widget(this, {
                mode: a.mode,
                nodeName: "h1",
                htmlContent: c,
                htmlAttributes: {
                    className: "OT_name OT_edge-bar-item"
                }
            })
        }, b.Chrome.MuteButton = function(a) {
            var c, d, e, f, g, h = a.muted || !1;
            d = b.$.bind(function() {
                h ? b.$.addClass(this.domElement, "OT_active") : b.$.removeClass(this.domElement, "OT_active ")
            }, this), e = function(a) {
                c = b.$.bind(g, this), b.$.on(a, "click", c)
            }, f = function(a) {
                c = null, b.$.off(a, "click", c)
            }, g = function() {
                return h = !h, d(), h ? this.parent.trigger("muted", this) : this.parent.trigger("unmuted", this), !1
            }, b.$.defineProperties(this, {
                muted: {
                    get: function() {
                        return h
                    },
                    set: function(a) {
                        h = a, d()
                    }
                }
            });
            var i = h ? "OT_edge-bar-item OT_mute OT_active" : "OT_edge-bar-item OT_mute";
            b.Chrome.Behaviour.Widget(this, {
                mode: a.mode,
                nodeName: "button",
                htmlContent: "Mute",
                htmlAttributes: {
                    className: i
                },
                onCreate: b.$.bind(e, this),
                onDestroy: b.$.bind(f, this)
            })
        }, b.Chrome.BackingBar = function(a) {
            function c() {
                return "on" === d || "on" === e ? "on" : "mini" === d || "mini" === e ? "mini" : "mini-auto" === d || "mini-auto" === e ? "mini-auto" : "auto" === d || "auto" === e ? "auto" : "off"
            }
            var d = a.nameMode,
                e = a.muteMode;
            b.Chrome.Behaviour.Widget(this, {
                mode: c(),
                nodeName: "div",
                htmlContent: "",
                htmlAttributes: {
                    className: "OT_bar OT_edge-bar-item"
                }
            }), this.setNameMode = function(a) {
                d = a, this.setDisplayMode(c())
            }, this.setMuteMode = function(a) {
                e = a, this.setDisplayMode(c())
            }
        }, b.Chrome.AudioLevelMeter = function(a) {
            function c() {
                e = b.$.createElement("div", {
                    className: "OT_audio-level-meter__bar"
                }, ""), g = b.$.createElement("div", {
                    className: "OT_audio-level-meter__value"
                }, ""), f = b.$.createElement("div", {
                    className: "OT_audio-level-meter__audio-only-img"
                }, ""), i.domElement.appendChild(e), i.domElement.appendChild(f), i.domElement.appendChild(g)
            }

            function d() {
                var a = 100 * h / (j - k);
                g.style.width = g.style.height = 2 * a + "%", g.style.top = g.style.right = -a + "%"
            }
            var e, f, g, h, i = this,
                j = a.maxValue || 1,
                k = a.minValue || 0,
                l = {
                    mode: a ? a.mode : "auto",
                    nodeName: "div",
                    htmlAttributes: {
                        className: "OT_audio-level-meter"
                    },
                    onCreate: c
                };
            b.Chrome.Behaviour.Widget(this, l);
            var m = b.$.bind(i.setDisplayMode, i);
            i.setDisplayMode = function(b) {
                m(b), "off" === b ? a.onPassivate && a.onPassivate() : a.onActivate && a.onActivate()
            }, i.setValue = function(a) {
                h = a, d()
            }
        }, b.Chrome.Archiving = function(a) {
            var c, d, e, f, g, h, i, j = a.archiving,
                k = a.archivingStarted || "Archiving on",
                l = a.archivingEnded || "Archiving off",
                m = !0;
            h = function(a) {
                f.nodeValue = a, c.setAttribute("title", a)
            }, i = b.$.bind(function() {
                g && (clearTimeout(g), g = null), j ? b.$.addClass(d, "OT_active") : b.$.removeClass(d, "OT_active"), b.$.removeClass(this.domElement, "OT_archiving-" + (j ? "off" : "on")), b.$.addClass(this.domElement, "OT_archiving-" + (j ? "on" : "off")), a.show && j ? (h(k), b.$.addClass(e, "OT_mode-on"), b.$.removeClass(e, "OT_mode-auto"), this.setDisplayMode("on"), g = setTimeout(function() {
                    b.$.addClass(e, "OT_mode-auto"), b.$.removeClass(e, "OT_mode-on")
                }, 5e3)) : a.show && !m ? (b.$.addClass(e, "OT_mode-on"), b.$.removeClass(e, "OT_mode-auto"), this.setDisplayMode("on"), h(l), g = setTimeout(b.$.bind(function() {
                    this.setDisplayMode("off")
                }, this), 5e3)) : this.setDisplayMode("off")
            }, this), b.Chrome.Behaviour.Widget(this, {
                mode: j && a.show && "on" || "off",
                nodeName: "h1",
                htmlAttributes: {
                    className: "OT_archiving OT_edge-bar-item OT_edge-bottom"
                },
                onCreate: b.$.bind(function() {
                    c = b.$.createElement("div", {
                        className: "OT_archiving-light-box"
                    }, ""), d = b.$.createElement("div", {
                        className: "OT_archiving-light"
                    }, ""), c.appendChild(d), e = b.$.createElement("div", {
                        className: "OT_archiving-status OT_mode-on OT_edge-bar-item OT_edge-bottom"
                    }, ""), f = document.createTextNode(""), e.appendChild(f), this.domElement.appendChild(c), this.domElement.appendChild(e), i()
                }, this)
            }), this.setShowArchiveStatus = b.$.bind(function(b) {
                a.show = b, this.domElement && i.call(this)
            }, this), this.setArchiving = b.$.bind(function(a) {
                j = a, m = !1, this.domElement && i.call(this)
            }, this)
        }, ! function(a) {
            if (a && "undefined" != typeof navigator) {
                var c = a.webkitRTCPeerConnection || a.mozRTCPeerConnection;
                navigator.webkitGetUserMedia ? (webkitMediaStream.prototype.getVideoTracks || (webkitMediaStream.prototype.getVideoTracks = function() {
                    return this.videoTracks
                }), webkitMediaStream.prototype.getAudioTracks || (webkitMediaStream.prototype.getAudioTracks = function() {
                    return this.audioTracks
                }), webkitRTCPeerConnection.prototype.getLocalStreams || (webkitRTCPeerConnection.prototype.getLocalStreams = function() {
                    return this.localStreams
                }), webkitRTCPeerConnection.prototype.getRemoteStreams || (webkitRTCPeerConnection.prototype.getRemoteStreams = function() {
                    return this.remoteStreams
                })) : navigator.mozGetUserMedia && (MediaStream.prototype.getVideoTracks || (MediaStream.prototype.getVideoTracks = function() {
                    return []
                }), MediaStream.prototype.getAudioTracks || (MediaStream.prototype.getAudioTracks = function() {
                    return []
                })), "undefined" != typeof a.MediaStreamTrack && (a.MediaStreamTrack.prototype.setEnabled || (a.MediaStreamTrack.prototype.setEnabled = function(a) {
                    this.enabled = b.$.castToBoolean(a)
                })), !a.URL && a.webkitURL && (a.URL = a.webkitURL), b.$.createPeerConnection = function(a, b, d, e) {
                    if (OTPlugin.isInstalled()) OTPlugin.initPeerConnection(a, b, d, e);
                    else {
                        var f;
                        try {
                            f = new c(a, b)
                        } catch (g) {
                            return void e(g.message)
                        }
                        e(null, f)
                    }
                }
            }
            b.$.supportedCryptoScheme = function() {
                return "Chrome" === b.$.env.name && b.$.env.version < 25 ? "SDES_SRTP" : "DTLS_SRTP"
            }
        }(a);
        var u, v = function(a, c, d) {
                var e, f;
                e = function(a, c) {
                    return function(e) {
                        b.error(a), b.error(e), d && d(a, e, c)
                    }
                }, f = function(b) {
                    b.sdp = s.removeComfortNoise(b.sdp), b.sdp = s.removeVideoCodec(b.sdp, "ulpfec"), b.sdp = s.removeVideoCodec(b.sdp, "red"), a.setLocalDescription(b, function() {
                        c(b)
                    }, e("Error while setting LocalDescription", "SetLocalDescription"))
                }, a.createOffer(f, e("Error while creating Offer", "CreateOffer"), {})
            },
            w = function(a, c, d, e) {
                var f, g, h;
                if (f = function(a, c) {
                        return function(d) {
                            b.error(a), b.error(d), e && e(a, d, c)
                        }
                    }, g = function(b) {
                        b.sdp = s.removeComfortNoise(b.sdp), b.sdp = s.removeVideoCodec(b.sdp, "ulpfec"), b.sdp = s.removeVideoCodec(b.sdp, "red"), a.setLocalDescription(b, function() {
                            d(b)
                        }, f("Error while setting LocalDescription", "SetLocalDescription"))
                    }, h = function() {
                        a.createAnswer(g, f("Error while setting createAnswer", "CreateAnswer"), null, !1)
                    }, -1 === c.sdp.indexOf("a=rtcp-fb")) {
                    var i = "a=rtcp-fb:* ccm fir\r\na=rtcp-fb:* nack ";
                    c.sdp = c.sdp.replace(/^m=video(.*)$/gim, "m=video$1\r\n" + i)
                }
                a.setRemoteDescription(c, h, f("Error while setting RemoteDescription", "SetRemoteDescription"))
            };
        u = OTPlugin.isInstalled() ? OTPlugin.RTCIceCandidate : a.mozRTCIceCandidate || a.RTCIceCandidate;
        var x, y = function() {
                var a = [],
                    b = null;
                this.setPeerConnection = function(a) {
                    b = a
                }, this.process = function(c) {
                    var d = new u(c.content);
                    b ? b.addIceCandidate(d) : a.push(d)
                }, this.processPending = function() {
                    for (; a.length;) b.addIceCandidate(a.shift())
                }
            },
            z = function(a) {
                this.data = a.data, this.source = a.source, this.lastEventId = a.lastEventId, this.origin = a.origin, this.timeStamp = a.timeStamp, this.type = a.type, this.ports = a.ports, this.path = a.path
            },
            A = function(a) {
                var c = {},
                    d = [],
                    e = function(a) {
                        return d.push(a), c
                    },
                    f = function(b) {
                        return a.send(b), c
                    },
                    g = function() {
                        for (var a; a = d.shift();) c.send(a)
                    },
                    h = function() {
                        c.send = f, g()
                    },
                    i = function(a) {
                        c.send = e, c.trigger("close", a)
                    },
                    j = function(a) {
                        b.error("Data Channel Error:", a)
                    },
                    k = function(a) {
                        var b = new z(a);
                        c.trigger("message", b)
                    };
                return b.$.eventing(c, !0), c.label = a.label, c.id = a.id, c.reliable = a.reliable, c.negotiated = a.negotiated, c.ordered = a.ordered, c.protocol = a.protocol, c._channel = a, c.close = function() {
                    a.close()
                }, c.equals = function(a, b) {
                    if (c.label !== a) return !1;
                    for (var d in b)
                        if (b.hasOwnProperty(d) && c[d] !== b[d]) return !1;
                    return !0
                }, c.send = e, a.addEventListener("open", h, !1), a.addEventListener("close", i, !1), a.addEventListener("error", j, !1), a.addEventListener("message", k, !1), c
            },
            B = function(a) {
                var c = [],
                    d = {},
                    e = function(a) {
                        b.$.filter(c, function(b) {
                            return a !== b
                        })
                    },
                    f = function(a) {
                        var b = new A(a);
                        return c.push(b), b.on("close", function() {
                            e(b)
                        }), b
                    };
                return d.add = function(b, c) {
                    return f(a.createDataChannel(b, c))
                }, d.addMany = function(a) {
                    for (var b in a) a.hasOwnProperty(b) && d.add(b, a[b])
                }, d.get = function(a, d) {
                    return b.$.find(c, function(b) {
                        return b.equals(a, d)
                    })
                }, d.getOrAdd = function(a, b) {
                    var c = d.get(a, b);
                    return c || (c = d.add(a, b)), c
                }, d.destroy = function() {
                    b.$.forEach(c, function(a) {
                        a.close()
                    }), c = []
                }, a.addEventListener("datachannel", function(a) {
                    f(a.channel)
                }, !1), d
            },
            C = function(a) {
                var c, d, e = b.$.now(),
                    f = [],
                    g = function() {
                        var d = b.$.now(),
                            e = f[f.length - 1],
                            g = {
                                delta: c ? d - c : 0
                            };
                        e && e.iceConnection === a.iceConnectionState || (g.iceConnectionState = a.iceConnectionState), e && e.signalingState === a.signalingState || (g.signalingState = a.signalingState), e && e.iceGatheringState === a.iceGatheringState || (g.iceGathering = a.iceGatheringState), b.debug(g), f.push(g), c = d
                    };
                return a.addEventListener("iceconnectionstatechange", g, !1), a.addEventListener("signalingstatechange", g, !1), a.addEventListener("icegatheringstatechange", g, !1), {
                    stop: function() {
                        a.removeEventListener("iceconnectionstatechange", g, !1), a.removeEventListener("signalingstatechange", g, !1), a.removeEventListener("icegatheringstatechange", g, !1), d = !0;
                        var h = {
                            type: "PeerConnectionWorkflow",
                            success: d,
                            startTime: e,
                            finishTime: c,
                            states: f
                        };
                        b.debug(h)
                    }
                }
            };
        x = OTPlugin.isInstalled() ? OTPlugin.RTCSessionDescription : a.mozRTCSessionDescription || a.RTCSessionDescription;
        var D = function(a) {
            return function(c) {
                c.candidate ? a(b.Raptor.Actions.CANDIDATE, {
                    candidate: c.candidate.candidate,
                    sdpMid: c.candidate.sdpMid || "",
                    sdpMLineIndex: c.candidate.sdpMLineIndex || 0
                }) : b.debug("IceCandidateForwarder: No more ICE candidates.")
            }
        };
        b.PeerConnection = function(a) {
            var c, d, e, f, g, h = [],
                i = new y,
                j = b.getStatsAdpater(),
                k = "new",
                l = [],
                m = {};
            b.$.eventing(m), a.iceServers || (a.iceServers = []);
            var n = function(a, b, c) {
                    l.length && l[0](a, b, c)
                },
                o = function(d, e) {
                    if (c) return void d.call(null, null, c);
                    if (h.push(d), !(h.length > 1)) {
                        var f = {
                            optional: [{
                                DtlsSrtpKeyAgreement: !0
                            }, {
                                googIPv6: !1
                            }]
                        };
                        b.debug('Creating peer connection config "' + JSON.stringify(a) + '".'), a.iceServers && 0 !== a.iceServers.length || b.error("No ice servers present"), b.$.createPeerConnection(a, f, e, p)
                    }
                },
                p = function(f, g) {
                    if (f) return I("Failed to create PeerConnection, exception: " + f.toString(), "NewPeerConnection"), void(h = []);
                    if (b.debug("OT attachEventsToPeerConnection"), c = g, e = C(c), d = new B(c), a.channels && d.addMany(a.channels), c.addEventListener("icecandidate", D(n), !1), c.addEventListener("addstream", z, !1), c.addEventListener("removestream", A, !1), c.addEventListener("signalingstatechange", s, !1), void 0 !== c.oniceconnectionstatechange) {
                        var i;
                        c.addEventListener("iceconnectionstatechange", function(a) {
                            "failed" === a.target.iceConnectionState && (i && clearTimeout(i), i = setTimeout(function() {
                                "failed" === a.target.iceConnectionState && I("The stream was unable to connect due to a network error. Make sure your connection isn't blocked by a firewall.", "ICEWorkflow")
                            }, 5e3))
                        }, !1)
                    }
                    q(null)
                },
                q = function() {
                    for (; h.length;) h.shift().call(null)
                },
                r = function() {
                    i && i.setPeerConnection(null), e && e.stop(), K.stopCollecting(), null !== c && (c.destroy && c.destroy(), c = null, m.trigger("close"))
                },
                s = function() {
                    var a = c.signalingState;
                    if (a && a !== k) switch (k = a, b.debug("PeerConnection.stateChange: " + k), k) {
                        case "closed":
                            r()
                    }
                },
                t = function(a) {
                    m.trigger("qos", a)
                },
                u = function() {
                    var a;
                    if (c.getRemoteStreams) a = c.getRemoteStreams();
                    else {
                        if (!c.remoteStreams) throw new Error("Invalid Peer Connection object implements no method for retrieving remote streams");
                        a = c.remoteStreams
                    }
                    return Array.prototype.slice.call(a)
                },
                z = function(a) {
                    m.trigger("streamAdded", a.stream)
                },
                A = function(a) {
                    m.trigger("streamRemoved", a.stream)
                },
                E = function(a, b, c) {
                    n(a, b, c)
                },
                F = function(a) {
                    var d = new x({
                            type: "offer",
                            sdp: a.content.sdp
                        }),
                        e = function(a) {
                            i.setPeerConnection(c), i.processPending(), E(b.Raptor.Actions.ANSWER, a), K.startCollecting(c)
                        },
                        f = function(a, b, c) {
                            I("PeerConnection.offerProcessor " + a + ": " + b, c)
                        };
                    o(function() {
                        w(c, d, e, f)
                    })
                },
                G = function(a) {
                    return a.content.sdp ? (g = new x({
                        type: "answer",
                        sdp: a.content.sdp
                    }), c.setRemoteDescription(g, function() {
                        b.debug("setRemoteDescription Success")
                    }, function(a) {
                        I("Error while setting RemoteDescription " + a, "SetRemoteDescription")
                    }), i.setPeerConnection(c), i.processPending(), void K.startCollecting(c)) : void b.error("PeerConnection.processMessage: Weird answer message, no SDP.")
                },
                H = function(a) {
                    if (b.debug("PeerConnection.processSubscribe: Sending offer to subscriber."), !c) throw new Error("PeerConnection broke!");
                    o(function() {
                        v(c, function(c) {
                            f = c, E(b.Raptor.Actions.OFFER, f, a.uri)
                        }, function(a, b, c) {
                            I("PeerConnection.subscribeProcessor " + a + ": " + b, c)
                        })
                    })
                },
                I = function(a, c) {
                    b.error(a), m.trigger("error", a, c)
                };
            m.addLocalStream = function(a) {
                o(function() {
                    c.addStream(a)
                }, a)
            }, m.getSenders = function() {
                return c.getSenders()
            }, m.disconnect = function() {
                i = null, c && c.signalingState && "closed" !== c.signalingState.toLowerCase() && (c.close(), "Firefox" === b.$.env.name && b.$.callAsync(r)), m.off()
            }, m.processMessage = function(a, c) {
                switch (b.debug("PeerConnection.processMessage: Received " + a + " from " + c.fromAddress), b.debug(c), a) {
                    case "generateoffer":
                        H(c);
                        break;
                    case "offer":
                        F(c);
                        break;
                    case "answer":
                    case "pranswer":
                        G(c);
                        break;
                    case "candidate":
                        i.process(c);
                        break;
                    default:
                        b.debug("PeerConnection.processMessage: Received an unexpected message of type " + a + " from " + c.fromAddress + ": " + JSON.stringify(c))
                }
                return m
            }, m.setIceServers = function(b) {
                b && (a.iceServers = b)
            }, m.registerMessageDelegate = function(a) {
                return l.push(a)
            }, m.unregisterMessageDelegate = function(a) {
                var c = b.$.arrayIndexOf(l, a);
                return -1 !== c && l.splice(c, 1), l.length
            }, m.remoteStreams = function() {
                return c ? u() : []
            }, m.getStats = function(a) {
                o(function() {
                    j(c, a)
                })
            };
            var J = function L(a, c, e, f) {
                var g, h = d.get(c, e);
                if (!h) {
                    if (a > 0) return void setTimeout(b.$.bind(L, null, a - 1, c, e, f), 200);
                    g = new b.$.Error("A channel with that label and options could not be found. Label:" + c + ". Options: " + JSON.stringify(e))
                }
                f(g, h)
            };
            m.getDataChannel = function(a, b, c) {
                o(function() {
                    J(100, a, b, c)
                })
            };
            var K = new b.PeerConnection.QOS(t);
            return m
        }, ! function() {
            var a = function(a, b, c, d) {
                    var e = function(a) {
                            return a.stat("googFrameRateSent") ? (c.videoSentBytes = Number(a.stat("bytesSent")), c.videoSentPackets = Number(a.stat("packetsSent")), c.videoSentPacketsLost = Number(a.stat("packetsLost")), c.videoRtt = Number(a.stat("googRtt")), c.videoFrameRate = Number(a.stat("googFrameRateInput")), c.videoWidth = Number(a.stat("googFrameWidthSent")), c.videoHeight = Number(a.stat("googFrameHeightSent")), c.videoCodec = a.stat("googCodecName")) : a.stat("googFrameRateReceived") && (c.videoRecvBytes = Number(a.stat("bytesReceived")), c.videoRecvPackets = Number(a.stat("packetsReceived")), c.videoRecvPacketsLost = Number(a.stat("packetsLost")), c.videoFrameRate = Number(a.stat("googFrameRateOutput")), c.videoWidth = Number(a.stat("googFrameWidthReceived")), c.videoHeight = Number(a.stat("googFrameHeightReceived")), c.videoCodec = a.stat("googCodecName")), null
                        },
                        f = function(a) {
                            a.stat("audioInputLevel") ? (c.audioSentPackets = Number(a.stat("packetsSent")), c.audioSentPacketsLost = Number(a.stat("packetsLost")), c.audioSentBytes = Number(a.stat("bytesSent")), c.audioCodec = a.stat("googCodecName"), c.audioRtt = Number(a.stat("googRtt"))) : a.stat("audioOutputLevel") && (c.audioRecvPackets = Number(a.stat("packetsReceived")), c.audioRecvPacketsLost = Number(a.stat("packetsLost")), c.audioRecvBytes = Number(a.stat("bytesReceived")), c.audioCodec = a.stat("googCodecName"))
                        },
                        g = function(a) {
                            if (a.result)
                                for (var b = a.result(), g = 0; g < b.length; g++) {
                                    var h = b[g];
                                    h.stat && ("true" === h.stat("googActiveConnection") && (c.localCandidateType = h.stat("googLocalCandidateType"), c.remoteCandidateType = h.stat("googRemoteCandidateType"), c.transportType = h.stat("googTransportType")), f(h), e(h))
                                }
                            d(null, c)
                        };
                    a.getStats(g)
                },
                c = function(a, b, c, d) {
                    var e = function(a) {
                            d(a)
                        },
                        f = function(a) {
                            var d, e = b.audioBytesTransferred || 0;
                            a.audioInputLevel ? (c.audioSentBytes = Number(a.bytesSent), c.audioSentPackets = Number(a.packetsSent), c.audioSentPacketsLost = Number(a.packetsLost), c.audioRtt = Number(a.googRtt), c.audioCodec = a.googCodecName) : a.audioOutputLevel && (c.audioBytesTransferred = Number(a.bytesReceived), c.audioCodec = a.googCodecName), c.audioBytesTransferred && (d = c.audioBytesTransferred - e, c.avgAudioBitrate = Math.round(8 * d / (c.period / 1e3)))
                        },
                        g = function(a) {
                            var d, e = b.videoBytesTransferred || 0;
                            a.googFrameHeightSent ? (c.videoSentBytes = Number(a.bytesSent), c.videoSentPackets = Number(a.packetsSent), c.videoSentPacketsLost = Number(a.packetsLost), c.videoRtt = Number(a.googRtt), c.videoCodec = a.googCodecName, c.videoWidth = Number(a.googFrameWidthSent), c.videoHeight = Number(a.googFrameHeightSent)) : a.googFrameHeightReceived && (c.videoRecvBytes = Number(a.bytesReceived), c.videoRecvPackets = Number(a.packetsReceived), c.videoRecvPacketsLost = Number(a.packetsLost), c.videoRtt = Number(a.googRtt), c.videoCodec = a.googCodecName, c.videoWidth = Number(a.googFrameWidthReceived), c.videoHeight = Number(a.googFrameHeightReceived)), c.videoBytesTransferred && (d = c.videoBytesTransferred - e, c.avgVideoBitrate = Math.round(8 * d / (c.period / 1e3))), a.googFrameRateSent ? c.videoFrameRate = Number(a.googFrameRateSent) : a.googFrameRateReceived && (c.videoFrameRate = Number(a.googFrameRateReceived))
                        },
                        h = function(a) {
                            return void 0 !== a.googFrameHeightSent || void 0 !== a.googFrameHeightReceived || void 0 !== c.videoBytesTransferred || void 0 !== a.googFrameRateSent
                        },
                        i = function(a) {
                            return "true" === a.googActiveConnection
                        };
                    a.getStats(null, function(a) {
                        a.forEach(function(a) {
                            i(a) ? (c.localCandidateType = a.googLocalCandidateType, c.remoteCandidateType = a.googRemoteCandidateType, c.transportType = a.googTransportType) : h(a) ? g(a) : f(a)
                        }), d(null, c)
                    }, e)
                },
                d = function(a, b, c, d) {
                    var e = function(a) {
                            d(a)
                        },
                        f = function(a) {
                            "outboundrtp" === a.type ? (c.audioSentPackets = a.packetsSent, c.audioSentPacketsLost = a.packetsLost, c.audioSentBytes = a.bytesSent) : "inboundrtp" === a.type && (c.audioRecvPackets = a.packetsReceived, c.audioRecvPacketsLost = a.packetsLost, c.audioRecvBytes = a.bytesReceived)
                        },
                        g = function(a) {
                            "outboundrtp" === a.type ? (c.videoSentPackets = a.packetsSent, c.videoSentPacketsLost = a.packetsLost, c.videoSentBytes = a.bytesSent) : "inboundrtp" === a.type && (c.videoRecvPackets = a.packetsReceived, c.videoRecvPacketsLost = a.packetsLost, c.videoRecvBytes = a.bytesReceived)
                        };
                    a.getStats(null, function(a) {
                        for (var b in a)
                            if (a.hasOwnProperty(b) && ("outboundrtp" === a[b].type || "inboundrtp" === a[b].type)) {
                                var e = a[b]; - 1 !== e.id.indexOf("rtp") && (-1 !== e.id.indexOf("audio") ? f(e) : -1 !== e.id.indexOf("video") && g(e))
                            }
                        d(null, c)
                    }, e)
                },
                e = function(f, g, h, i) {
                    return OTPlugin.isInstalled() ? (e = c, c(f, g, h, i)) : "Firefox" === b.$.env.name && b.$.env.version >= 27 ? (e = d, d(f, g, h, i)) : (e = a, a(f, g, h, i))
                };
            b.PeerConnection.QOS = function(a) {
                var c, d = b.$.now(),
                    f = b.$.bind(function g(f) {
                        if (c) {
                            var h = b.$.now(),
                                i = {
                                    timeStamp: h,
                                    duration: Math.round(h - d),
                                    period: Math.round(h - f.timeStamp)
                                },
                                j = function(c, d) {
                                    return c ? void b.error("Failed to Parse QOS Stats: " + JSON.stringify(c)) : (a(d, f), void setTimeout(b.$.bind(g, null, d), b.PeerConnection.QOS.INTERVAL))
                                };
                            e(c, f, i, j)
                        }
                    }, this);
                this.startCollecting = function(a) {
                    a && a.getStats && (c = a, f({
                        timeStamp: b.$.now()
                    }))
                }, this.stopCollecting = function() {
                    c = null
                }
            }, b.PeerConnection.QOS.INTERVAL = 3e4
        }(), b.PeerConnections = function() {
            var a = {};
            return {
                add: function(c, d, e) {
                    var f = c.id + "_" + d,
                        g = a[f];
                    return g || (g = a[f] = {
                        count: 0,
                        pc: new b.PeerConnection(e)
                    }), g.count += 1, g.pc
                },
                remove: function(b, c) {
                    var d = b.id + "_" + c,
                        e = a[d];
                    e && (e.count -= 1, 0 === e.count && (e.pc.disconnect(), delete a[d]))
                }
            }
        }(), b.SubscriberPeerConnection = function(a, c, d, e, f) {
            var g, h, i, j, k, l, m, n, o = !1,
                p = !1;
            h = function() {
                this.destroy(), this.trigger("disconnected", this)
            }, i = function(a) {
                this.trigger("remoteStreamAdded", a, this)
            }, j = function(a) {
                this.trigger("remoteStreamRemoved", a, this)
            }, k = function(a, b) {
                this.trigger("error", null, a, this, b)
            }, l = b.$.bind(function(a, f) {
                if (!p) {
                    var g = a === b.Raptor.Actions.CANDIDATE || a === b.Raptor.Actions.OFFER || a === b.Raptor.Actions.ANSWER || a === b.Raptor.Actions.PRANSWER;
                    if (g) {
                        var h = a === b.Raptor.Actions.CANDIDATE ? f.candidate : f.sdp;
                        p = -1 !== h.indexOf("typ relay")
                    }
                }
                switch (a) {
                    case b.Raptor.Actions.ANSWER:
                    case b.Raptor.Actions.PRANSWER:
                        this.trigger("connected"), c._.jsepAnswerP2p(d.id, e.widgetId, f.sdp);
                        break;
                    case b.Raptor.Actions.OFFER:
                        c._.jsepOfferP2p(d.id, e.widgetId, f.sdp);
                        break;
                    case b.Raptor.Actions.CANDIDATE:
                        c._.jsepCandidateP2p(d.id, e.widgetId, f)
                }
            }, this), m = function(a) {
                var b = "get" + (a ? "Video" : "Audio") + "Tracks";
                return function(a) {
                    var c, d, e = g.remoteStreams();
                    if (0 !== e.length && e[0][b])
                        for (var f = 0, h = e.length; h > f; ++f) {
                            d = e[f], c = d[b]();
                            for (var i = 0, j = c.length; j > i; ++i) c[i].enabled !== a && c[i].setEnabled(a)
                        }
                }
            }, n = b.$.bind(function(a, b) {
                this.trigger("qos", a, b)
            }, this), b.$.eventing(this), this.destroy = function() {
                if (!o) {
                    if (o = !0, g) {
                        var f = g.unregisterMessageDelegate(l);
                        0 === f && (c && c.isConnected() && d && !d.destroyed && c._.subscriberDestroy(d, e), this.subscribeToAudio(!1)), b.PeerConnections.remove(a, d.id)
                    }
                    g = null, this.off()
                }
            }, this.getDataChannel = function(a, b, c) {
                g.getDataChannel(a, b, c)
            }, this.processMessage = function(a, b) {
                g.processMessage(a, b)
            }, this.getStats = function(a) {
                g ? g.getStats(a) : a(new b.$.Error("Subscriber is not connected cannot getStats", 1015))
            }, this.subscribeToAudio = m(!1), this.subscribeToVideo = m(!0), this.hasRelayCandidates = function() {
                return p
            }, this.init = function() {
                g = b.PeerConnections.add(a, d.streamId, {}), g.on({
                    close: h,
                    streamAdded: i,
                    streamRemoved: j,
                    error: k,
                    qos: n
                }, this);
                var m = g.registerMessageDelegate(l);
                if (g.remoteStreams().length > 0) b.$.forEach(g.remoteStreams(), i, this);
                else if (1 === m) {
                    var o;
                    if (f.subscribeToVideo || f.subscribeToAudio) {
                        var p = d.getChannelsOfType("audio"),
                            q = d.getChannelsOfType("video");
                        o = b.$.map(p, function(a) {
                            return {
                                id: a.id,
                                type: a.type,
                                active: f.subscribeToAudio
                            }
                        }).concat(b.$.map(q, function(a) {
                            return {
                                id: a.id,
                                type: a.type,
                                active: f.subscribeToVideo,
                                restrictFrameRate: void 0 !== f.restrictFrameRate ? f.restrictFrameRate : !1
                            }
                        }))
                    }
                    c._.subscriberCreate(d, e, o, b.$.bind(function(a, c) {
                        a && this.trigger("error", a.message, this, "Subscribe"), g && g.setIceServers(b.Raptor.parseIceServers(c))
                    }, this))
                }
            }
        }, b.PublisherPeerConnection = function(a, c, d, e, f) {
            var g, h, i, j, k, l = !1,
                m = c._.subscriberMap[a.id + "_" + d];
            h = function() {
                this.destroy(), this.trigger("disconnected", this)
            }, i = function(a, b) {
                this.trigger("error", null, a, this, b), this.destroy()
            }, j = b.$.bind(function(a, e, f) {
                if (!l) {
                    var g = a === b.Raptor.Actions.CANDIDATE || a === b.Raptor.Actions.OFFER || a === b.Raptor.Actions.ANSWER || a === b.Raptor.Actions.PRANSWER;
                    if (g) {
                        var h = a === b.Raptor.Actions.CANDIDATE ? e.candidate : e.sdp;
                        l = -1 !== h.indexOf("typ relay")
                    }
                }
                switch (a) {
                    case b.Raptor.Actions.ANSWER:
                    case b.Raptor.Actions.PRANSWER:
                        c.sessionInfo.p2pEnabled ? c._.jsepAnswerP2p(d, m, e.sdp) : c._.jsepAnswer(d, e.sdp);
                        break;
                    case b.Raptor.Actions.OFFER:
                        this.trigger("connected"), c._.jsepOffer(f, e.sdp);
                        break;
                    case b.Raptor.Actions.CANDIDATE:
                        c.sessionInfo.p2pEnabled ? c._.jsepCandidateP2p(d, m, e) : c._.jsepCandidate(d, e)
                }
            }, this), k = b.$.bind(function(b, c) {
                this.trigger("qos", a, b, c)
            }, this), b.$.eventing(this), this.getDataChannel = function(a, b, c) {
                g.getDataChannel(a, b, c)
            }, this.destroy = function() {
                g && (g.off(), b.PeerConnections.remove(a, d)), g = null
            }, this.processMessage = function(a, b) {
                g.processMessage(a, b)
            }, this.init = function(c) {
                g = b.PeerConnections.add(a, d, {
                    iceServers: c,
                    channels: f
                }), g.on({
                    close: h,
                    error: i,
                    qos: k
                }, this), g.registerMessageDelegate(j), g.addLocalStream(e), this.remoteConnection = function() {
                    return a
                }, this.hasRelayCandidates = function() {
                    return l
                }
            }, this.getSenders = function() {
                return g.getSenders()
            }
        };
        var E = function(b, c) {
            function d() {
                h || ((f !== c.videoWidth || g !== c.videoHeight) && (b.trigger("videoDimensionsChanged", {
                    width: f,
                    height: g
                }, {
                    width: c.videoWidth,
                    height: c.videoHeight
                }), f = c.videoWidth, g = c.videoHeight), e())
            }

            function e() {
                b.whenTimeIncrements(function() {
                    a.requestAnimationFrame(d)
                })
            }
            var f = c.videoWidth,
                g = c.videoHeight,
                h = !0;
            b.startObservingSize = function() {
                h = !1, e()
            }, b.stopObservingSize = function() {
                h = !0
            }
        };
        if (function(a) {
                function c(a, b) {
                    var c = document.createElement("video");
                    if (c.setAttribute("autoplay", ""), c.innerHTML = a, b) {
                        b.muted === !0 && (delete b.muted, c.muted = "true");
                        for (var d in b) b.hasOwnProperty(d) && c.setAttribute(d, b[d])
                    }
                    return c
                }

                function d(a) {
                    return m[parseInt(a, 10)] || "An unknown error occurred."
                }

                function e(c, e, g) {
                    var h, i = "Chrome" === b.$.env.name ? 1 : 0,
                        j = e.getVideoTracks().length > i ? "timeupdate" : "loadedmetadata",
                        k = function() {
                            clearTimeout(h), c.removeEventListener(j, l, !1), c.removeEventListener("error", m, !1), e.onended = null
                        },
                        l = function() {
                            k(), g(null)
                        },
                        m = function(a) {
                            k(), f(c), g("There was an unexpected problem with the Video Stream: " + d(a.target.error.code))
                        },
                        n = function() {
                            k(), f(c), g("Stream ended while trying to bind it to a video element.")
                        };
                    c.addEventListener(j, l, !1), c.addEventListener("error", m, !1), e.onended = n, void 0 !== c.srcObject ? c.srcObject = e : void 0 !== c.mozSrcObject ? c.mozSrcObject = e : c.src = a.URL.createObjectURL(e)
                }

                function f(b) {
                    void 0 !== b.srcObject ? b.srcObject = null : void 0 !== b.mozSrcObject ? b.mozSrcObject = null : a.URL.revokeObjectURL(b.src)
                }
                var g = {
                    0: "rotate(0deg)",
                    270: "rotate(90deg)",
                    90: "rotate(-90deg)",
                    180: "rotate(180deg)"
                };
                b.VideoOrientation = {
                    ROTATED_NORMAL: 0,
                    ROTATED_LEFT: 270,
                    ROTATED_RIGHT: 90,
                    ROTATED_UPSIDE_DOWN: 180
                };
                var h = 50,
                    i = 2 * Math.PI / 360;
                b.VideoElement = function(a) {
                    var c, d, e = b.$.defaults(a && !b.$.isFunction(a) ? a : {}, {
                            fallbackText: "Sorry, Web RTC is not available in your browser"
                        }),
                        f = b.$.isFunction(arguments[arguments.length - 1]) ? arguments[arguments.length - 1] : void 0,
                        g = b.$.bind(function(a) {
                            this.trigger("orientationChanged", a)
                        }, this),
                        h = OTPlugin.isInstalled() ? new j(e, f, g) : new k(e, f, g),
                        i = !1;
                    b.$.eventing(this), h.on("videoDimensionsChanged", b.$.bind(function(a, b) {
                        this.trigger("videoDimensionsChanged", a, b)
                    }, this)), h.on("mediaStopped", b.$.bind(function() {
                        this.trigger("mediaStopped")
                    }, this)), b.$.defineProperties(this, {
                        domElement: {
                            get: function() {
                                return h.domElement()
                            }
                        },
                        videoWidth: {
                            get: function() {
                                return h["video" + (this.isRotated() ? "Height" : "Width")]()
                            }
                        },
                        videoHeight: {
                            get: function() {
                                return h["video" + (this.isRotated() ? "Width" : "Height")]()
                            }
                        },
                        aspectRatio: {
                            get: function() {
                                return (this.videoWidth() + 0) / this.videoHeight()
                            }
                        },
                        isRotated: {
                            get: function() {
                                return h.isRotated()
                            }
                        },
                        orientation: {
                            get: function() {
                                return h.orientation()
                            },
                            set: function(a) {
                                h.orientation(a)
                            }
                        },
                        audioChannelType: {
                            get: function() {
                                return h.audioChannelType()
                            },
                            set: function(a) {
                                h.audioChannelType(a)
                            }
                        }
                    }), this.imgData = function() {
                        return h.imgData()
                    }, this.appendTo = function(a) {
                        return h.appendTo(a), this
                    }, this.bindToStream = function(a, e) {
                        return i = !1, c = a, h.bindToStream(a, b.$.bind(function(a) {
                            return a ? void e(a) : (i = !0, d && (this.setAudioVolume(d), d = null), h.on("aspectRatioAvailable", b.$.bind(this.trigger, this, "aspectRatioAvailable")), void e(null))
                        }, this)), this
                    }, this.unbindStream = function() {
                        return c ? (c = null, h.unbindStream(), this) : this
                    }, this.setAudioVolume = function(a) {
                        return i ? h.setAudioVolume(b.$.roundFloat(a / 100, 2)) : d = a, this
                    }, this.getAudioVolume = function() {
                        return i ? parseInt(100 * h.getAudioVolume(), 10) : d || 50
                    }, this.whenTimeIncrements = function(a, b) {
                        return h.whenTimeIncrements(a, b), this
                    }, this.onRatioAvailable = function(a) {
                        return h.onRatioAvailable(a), this
                    }, this.destroy = function() {
                        return this.off(), void h.destroy()
                    }
                };
                var j = function(a, c, d) {
                        var e, f, g = !1,
                            i = [];
                        b.$.eventing(this), l(this, function() {
                            return e.domElement
                        }, d), this.domElement = function() {
                            return e ? e.domElement : void 0
                        }, this.videoWidth = function() {
                            return e ? e.videoWidth() : void 0
                        }, this.videoHeight = function() {
                            return e ? e.videoHeight() : void 0
                        }, this.imgData = function() {
                            return e ? e.getImgData() : null
                        }, this.appendTo = function(a) {
                            return f = a, this
                        }, this.bindToStream = function(a, b) {
                            return f ? (e = a._.render(), e.appendTo(f), e.show(function(a) {
                                if (!a) {
                                    g = !0;
                                    for (var c; c = i.shift();) c()
                                }
                                b(a)
                            }), this) : void b("The VideoElement must attached to a DOM node before a stream can be bound")
                        }, this.unbindStream = function() {
                            return e && (e.destroy(), f = null, e = null), this
                        }, this.setAudioVolume = function(a) {
                            e && e.volume(a)
                        }, this.getAudioVolume = function() {
                            return e ? e.volume() : h
                        }, this.audioChannelType = function() {
                            return "unknown"
                        }, this.whenTimeIncrements = function(a, c) {
                            b.$.callAsync(b.$.bind(a, c))
                        }, this.onRatioAvailable = function(a) {
                            g ? a() : i.push(a)
                        }, this.destroy = function() {
                            return void this.unbindStream()
                        }
                    },
                    k = function(a, g, i) {
                        var j, k = !1;
                        b.$.eventing(this);
                        var m = b.$.bind(function(a) {
                                var b = "There was an unexpected problem with the Video Stream: " + d(a.target.error.code);
                                g(b, this, "VideoElement")
                            }, this),
                            n = function() {
                                k || (b.warn("Video element paused, auto-resuming. If you intended to do this, use publishVideo(false) or subscribeToVideo(false) instead."), k = !0), j.play()
                            };
                        j = c(a.fallbackText, a.attributes);
                        var o = !1,
                            p = [];
                        j.addEventListener("timeupdate", function q() {
                            if (!j) return void event.target.removeEventListener("timeupdate", q);
                            var a = j.videoWidth / j.videoHeight;
                            if (!isNaN(a)) {
                                j.removeEventListener("timeupdate", q), o = !0;
                                for (var b; b = p.shift();) b()
                            }
                        }), j.addEventListener("pause", n), E(this, j), l(this, function() {
                            return j
                        }, i), this.domElement = function() {
                            return j
                        }, this.videoWidth = function() {
                            return j ? j.videoWidth : 0
                        }, this.videoHeight = function() {
                            return j ? j.videoHeight : 0
                        }, this.imgData = function() {
                            var a = b.$.createElement("canvas", {
                                width: j.videoWidth,
                                height: j.videoHeight,
                                style: {
                                    display: "none"
                                }
                            });
                            document.body.appendChild(a);
                            try {
                                a.getContext("2d").drawImage(j, 0, 0, a.width, a.height)
                            } catch (c) {
                                return b.warn("Cannot get image data yet"), null
                            }
                            var d = a.toDataURL("image/png");
                            return b.$.removeElement(a), b.$.trim(d.replace("data:image/png;base64,", ""))
                        }, this.appendTo = function(a) {
                            return a.appendChild(j), this
                        }, this.bindToStream = function(a, b) {
                            var c = this;
                            return e(j, a, function(d) {
                                return d ? void b(d) : (c.startObservingSize(), a.onended = function() {
                                    c.trigger("mediaStopped", this)
                                }, j && j.addEventListener("error", m, !1), void b(null))
                            }), this
                        }, this.unbindStream = function() {
                            return j && f(j), this.stopObservingSize(), this
                        }, this.setAudioVolume = function(a) {
                            j && (j.volume = a)
                        }, this.getAudioVolume = function() {
                            return j ? j.volume : h
                        }, this.audioChannelType = function(a) {
                            return void 0 !== a && (j.mozAudioChannelType = a), "mozAudioChannelType" in j ? j.mozAudioChannelType : "unknown"
                        }, this.whenTimeIncrements = function(a, c) {
                            if (j) {
                                var d, e;
                                e = b.$.bind(function() {
                                    j && (!d || d >= j.currentTime ? d = j.currentTime : (j.removeEventListener("timeupdate", e, !1), a.call(c, this)))
                                }, this), j.addEventListener("timeupdate", e, !1)
                            }
                        }, this.destroy = function() {
                            return this.unbindStream(), void(j && (j.removeEventListener("pause", n), b.$.removeElement(j), j = null))
                        }, this.onRatioAvailable = function(a) {
                            o ? a() : p.push(a)
                        }
                    },
                    l = function(a, c, d, e) {
                        var f = e;
                        b.$.defineProperties(a, {
                            isRotated: {
                                get: function() {
                                    return this.orientation() && (270 === this.orientation().videoOrientation || 90 === this.orientation().videoOrientation)
                                }
                            },
                            orientation: {
                                get: function() {
                                    return f
                                },
                                set: function(a) {
                                    f = a;
                                    var e = g[a.videoOrientation] || g.ROTATED_NORMAL;
                                    switch (b.$.env.name) {
                                        case "Chrome":
                                        case "Safari":
                                            c().style.webkitTransform = e;
                                            break;
                                        case "IE":
                                            if (b.$.env.version >= 9) c().style.msTransform = e;
                                            else {
                                                var h = a.videoOrientation * i,
                                                    j = c(),
                                                    k = Math.cos(h),
                                                    l = Math.sin(h);
                                                j.style.filter = "progid:DXImageTransform.Microsoft.Matrix(M11=" + k + ",M12=" + -l + ",M21=" + l + ",M22=" + k + ",SizingMethod='auto expand')"
                                            }
                                            break;
                                        default:
                                            c().style.transform = e
                                    }
                                    d(f)
                                }
                            },
                            audioChannelType: {
                                get: function() {
                                    return "mozAudioChannelType" in this.domElement ? this.domElement.mozAudioChannelType : "unknown"
                                },
                                set: function(a) {
                                    "mozAudioChannelType" in this.domElement && (this.domElement.mozAudioChannelType = a)
                                }
                            }
                        })
                    },
                    m = {};
                a.MediaError && (m[a.MediaError.MEDIA_ERR_ABORTED] = "The fetching process for the media resource was aborted by the user agent at the user's request.", m[a.MediaError.MEDIA_ERR_NETWORK] = "A network error of some description caused the user agent to stop fetching the media resource, after the resource was established to be usable.", m[a.MediaError.MEDIA_ERR_DECODE] = "An error of some description occurred while decoding the media resource, after the resource was established to be  usable.", m[a.MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED] = "The media resource indicated by the src attribute was not suitable.")
            }(a), ! function() {
                function a(a, c, d, f, g) {
                    var h = b.$(".OT_video-element", a);
                    if (h.length > 0) {
                        var i = {
                            left: "",
                            top: ""
                        };
                        if (OTPlugin.isInstalled()) i.width = "100%", i.height = "100%";
                        else {
                            f = f || e, f = g ? 1 / f : f;
                            var j, k, l = c / d;
                            g ? (k = c, j = k * f, i.width = j + "px", i.height = k + "px", i.top = (j + d) / 2 + "px") : l > f ? (j = c, k = j / f, i.width = j + "px", i.height = k + "px", i.top = (-k + d) / 2 + "px") : (k = d, j = k * f, i.width = j + "px", i.height = k + "px", i.left = (-j + c) / 2 + "px")
                        }
                        h.css(i)
                    }
                }

                function c(a, c, d, f, g) {
                    var h = b.$(".OT_video-element", a);
                    if (h.length > 0) {
                        var i = {
                            left: "",
                            top: ""
                        };
                        if (OTPlugin.isInstalled()) {
                            f = f || e;
                            var j, k, l = c / d;
                            l > f ? (k = d, j = d * f, i.width = j + "px", i.height = k + "px", i.left = (c - j) / 2 + "px") : (j = c, k = j / f, i.width = j + "px", i.height = k + "px", i.top = (d - k) / 2 + "px")
                        } else g ? (i.width = d + "px", i.height = c + "px", i.top = d + "px") : (i.width = "100%", i.height = "100%");
                        h.css(i)
                    }
                }

                function d(a, c, d) {
                    var e = parseInt(c, 10),
                        j = parseInt(d, 10);
                    h > e || i > j ? b.$.addClass(a, "OT_micro") : b.$.removeClass(a, "OT_micro"), f > e || g > j ? b.$.addClass(a, "OT_mini") : b.$.removeClass(a, "OT_mini")
                }
                var e = 4 / 3,
                    f = 128,
                    g = 128,
                    h = 64,
                    i = 64,
                    j = function(a, c) {
                        var d, e;
                        if (a && a.nodeName ? (d = a, d.getAttribute("id") && 0 !== d.getAttribute("id").length || d.setAttribute("id", "OT_" + b.$.uuid()), e = d.getAttribute("id")) : a && (d = b.$("#" + a).get(0), d && (e = a)), e || (e = "OT_" + b.$.uuid().replace(/-/g, "_")), d)
                            if (null != c && "replace" !== c) {
                                var f = document.createElement("div");
                                f.id = "OT_" + b.$.uuid(), "append" === c ? (d.appendChild(f), d = f) : "before" === c ? (d.parentNode.insertBefore(f, d), d = f) : "after" === c && (d.parentNode.insertBefore(f, d.nextSibling), d = f)
                            } else b.$.emptyElement(d);
                        else d = b.$.createElement("div", {
                            id: e
                        }), d.style.backgroundColor = "#000000", document.body.appendChild(d);
                        return d
                    };
                b.WidgetView = function(e, f) {
                    var g, h, i, k, l, m, n, o = {},
                        p = j(e, f && f.insertMode),
                        q = document.createElement("div"),
                        r = {},
                        s = !0,
                        t = !1,
                        u = "cover",
                        v = a;
                    b.$.eventing(o), f && (m = f.width, n = f.height, m && "number" == typeof m && (m += "px"), n && "number" == typeof n && (n += "px"), p.style.width = m ? m : "264px", p.style.height = n ? n : "198px", p.style.overflow = "hidden", d(p, m || "264px", n || "198px"), (void 0 === f.mirror || f.mirror) && b.$.addClass(p, "OT_mirrored"), "contain" === f.fitMode ? (u = "contain", v = c) : "cover" !== f.fitMode && b.warn('Invalid fit value "' + f.fitMode + '" passed. Only "contain" and "cover" can be used.')), f.classNames && b.$.addClass(p, f.classNames), b.$(p).addClass("OT_loading OT_fit-mode-" + u), b.$.addClass(q, "OT_widget-container"), q.style.width = "100%", q.style.height = "100%", p.appendChild(q), l = document.createElement("div"), b.$.addClass(l, "OT_video-loading"), q.appendChild(l), k = document.createElement("div"), b.$.addClass(k, "OT_video-poster"), q.appendChild(k), r.width = p.offsetWidth, r.height = p.offsetHeight, OTPlugin.isInstalled() || (g = b.$(p).observeSize(function(a) {
                        var b = a.width,
                            c = a.height;
                        d(p, b, c), h && v(q, b, c, h.aspectRatio(), h.isRotated())
                    })[0], i = b.$.observeNodeOrChildNodeRemoval(p, function(a) {
                        if (h) {
                            var c = b.$.some(a, function(a) {
                                return a === q || "VIDEO" === a.nodeName
                            });
                            c && (h.destroy(), h = null), q && (b.$.removeElement(q), q = null), g && (g.disconnect(), g = null), i && (i.disconnect(), i = null)
                        }
                    }));
                    var w = function() {
                        h && v(q, p.offsetWidth, p.offsetHeight, h.aspectRatio(), h.isRotated())
                    };
                    return o.destroy = function() {
                        g && (g.disconnect(), g = null), i && (i.disconnect(), i = null), h && (h.destroy(), h = null), p && (b.$.removeElement(p), p = null)
                    }, o.setBackgroundImageURI = function(a) {
                        "http:" !== a.substr(0, 5) && "https:" !== a.substr(0, 6) && "data:image/png;base64," !== a.substr(0, 22) && (a = "data:image/png;base64," + a), b.$.css(k, "backgroundImage", "url(" + a + ")"), b.$.css(k, "backgroundSize", "contain"), b.$.css(k, "opacity", "1.0")
                    }, f && f.style && f.style.backgroundImageURI && o.setBackgroundImageURI(f.style.backgroundImageURI), o.bindVideo = function(a, c, d) {
                        h && (h.destroy(), h = null);
                        var e = c && c.error ? c.error : void 0;
                        delete c.error;
                        var f = new b.VideoElement({
                            attributes: c
                        }, e);
                        return c.audioVolume && f.setAudioVolume(c.audioVolume), f.audioChannelType("telephony"), f.appendTo(q).bindToStream(a, function(a) {
                            return a ? (f.destroy(), void d(a)) : (h = f, f.domElement() && b.$.css(f.domElement(), "height", ""), f.on({
                                orientationChanged: w,
                                videoDimensionsChanged: function(a, b) {
                                    w(), o.trigger("videoDimensionsChanged", a, b)
                                },
                                mediaStopped: function() {
                                    o.trigger("mediaStopped")
                                }
                            }), f.onRatioAvailable(w), void d(null, f))
                        }), b.$.addClass(f.domElement(), "OT_video-element"), b.$.css(f.domElement(), "height", "1px"), f
                    }, b.$.defineProperties(o, {
                        video: {
                            get: function() {
                                return h
                            }
                        },
                        showPoster: {
                            get: function() {
                                return !b.$.isDisplayNone(k)
                            },
                            set: function(a) {
                                a ? b.$.show(k) : b.$.hide(k)
                            }
                        },
                        poster: {
                            get: function() {
                                return b.$.css(k, "backgroundImage")
                            },
                            set: function(a) {
                                b.$.css(k, "backgroundImage", "url(" + a + ")")
                            }
                        },
                        loading: {
                            get: function() {
                                return s
                            },
                            set: function(a) {
                                s = a, s ? b.$.addClass(p, "OT_loading") : b.$.removeClass(p, "OT_loading")
                            }
                        },
                        audioOnly: {
                            get: function() {
                                return t
                            },
                            set: function(a) {
                                t = a, t ? b.$.addClass(p, "OT_audio-only") : b.$.removeClass(p, "OT_audio-only"), OTPlugin.isInstalled() && setTimeout(w, 0)
                            }
                        },
                        domId: {
                            get: function() {
                                return p.getAttribute("id")
                            }
                        }
                    }), o.domElement = p, o.addError = function(a, c, d) {
                        p.innerHTML = "<p>" + a + (c ? ' <span class="ot-help-message">' + c + "</span>" : "") + "</p>", b.$.addClass(p, d || "OT_subscriber_error"), p.querySelector("p").offsetHeight > p.offsetHeight && (p.querySelector("span").style.display = "none")
                    }, o
                }
            }(a), !b.properties) throw new Error("OT.properties does not exist, please ensure that you include a valid properties file.");
        b.useSSL = function() {
            return b.properties.supportSSL && (a.location.protocol.indexOf("https") >= 0 || a.location.protocol.indexOf("chrome-extension") >= 0)
        }, b.properties = function(c) {
            var d = b.$.clone(c);
            d.debug = "true" === c.debug || c.debug === !0, d.supportSSL = "true" === c.supportSSL || c.supportSSL === !0, a.OTProperties && (a.OTProperties.cdnURL && (d.cdnURL = a.OTProperties.cdnURL), a.OTProperties.cdnURLSSL && (d.cdnURLSSL = a.OTProperties.cdnURLSSL), a.OTProperties.configURL && (d.configURL = a.OTProperties.configURL), a.OTProperties.assetURL && (d.assetURL = a.OTProperties.assetURL), a.OTProperties.cssURL && (d.cssURL = a.OTProperties.cssURL)), d.assetURL || (b.useSSL() ? d.assetURL = d.cdnURLSSL + "/webrtc/" + d.version : d.assetURL = d.cdnURL + "/webrtc/" + d.version);
            var e = "IE" === b.$.env.name && b.$.env.version <= 9;
            return e && a.location.protocol.indexOf("https") < 0 || (d.apiURL = d.apiURLSSL, d.loggingURL = d.loggingURLSSL), d.configURL || (d.configURL = d.assetURL + "/js/dynamic_config.min.js"), d.cssURL || (d.cssURL = d.assetURL + "/css/TB.min.css"), d
        }(b.properties), ! function() {
            var a, c, d = function(a) {
                    return !(b.$.isFunction(a.get) && b.$.isFunction(a.set))
                },
                e = function(b) {
                    return c ? void b(null, c) : void a.get(b)
                };
            b.overrideGuidStorage = function(e) {
                if (d(e)) throw new Error("The storageInterface argument does not seem to be valid, it must implement get and set methods");
                a !== e && (a = e, c && a.set(c, function(a) {
                    a && b.error("Failed to send initial Guid value (" + c + ") to the newly assigned Guid Storage. The error was: " + a)
                }))
            }, b._ || (b._ = {}), b._.getClientGuid = function(d) {
                e(function(e, f) {
                    return e ? void d(e) : (f ? c || (c = f) : (f = b.$.uuid(), a.set(f, function(a) {
                        return a ? void d(a) : void(c = f)
                    })), void d(null, c))
                })
            }, b.overrideGuidStorage({
                get: function(a) {
                    a(null, b.$.getCookie("opentok_client_id"))
                },
                set: function(a, c) {
                    b.$.setCookie("opentok_client_id", a), c(null)
                }
            })
        }(a), ! function() {
            var a, c, d, e, f, g;
            a = function() {
                return navigator.getUserMedia ? b.$.bind(navigator.getUserMedia, navigator) : navigator.mozGetUserMedia ? b.$.bind(navigator.mozGetUserMedia, navigator) : navigator.webkitGetUserMedia ? b.$.bind(navigator.webkitGetUserMedia, navigator) : OTPlugin.isInstalled() ? b.$.bind(OTPlugin.getUserMedia, OTPlugin) : void 0
            }(), c = {
                PERMISSION_DENIED: "PermissionDeniedError",
                NOT_SUPPORTED_ERROR: "NotSupportedError",
                MANDATORY_UNSATISFIED_ERROR: " ConstraintNotSatisfiedError",
                NO_DEVICES_FOUND: "NoDevicesFoundError",
                HARDWARE_UNAVAILABLE: "HardwareUnavailableError",
                TrackStartError: "HardwareUnavailableError"
            }, d = {
                PermissionDeniedError: "End-user denied permission to hardware devices",
                PermissionDismissedError: "End-user dismissed permission to hardware devices",
                NotSupportedError: "A constraint specified is not supported by the browser.",
                ConstraintNotSatisfiedError: "It's not possible to satisfy one or more constraints passed into the getUserMedia function",
                OverconstrainedError: "Due to changes in the environment, one or more mandatory constraints can no longer be satisfied.",
                NoDevicesFoundError: "No voice or video input devices are available on this machine.",
                HardwareUnavailableError: "The selected voice or video devices are unavailable. Verify that the chosen devices are not in use by another application."
            }, e = function(a, b) {
                var c, e;
                return c = b.hasOwnProperty(a) ? b[a] : a, e = d.hasOwnProperty(c) ? d[c] : "Unknown Error while getting user media", {
                    name: c,
                    message: e
                }
            }, f = function(a) {
                var d;
                return b.$.isObject(a) && a.name ? (d = e(a.name, c), d.constraintName = a.constraintName) : d = "string" == typeof a ? e(a, c) : {
                    message: "Unknown Error type while getting media"
                }, d
            }, g = function(a) {
                if (!a || !b.$.isObject(a)) return !0;
                for (var c in a)
                    if (a.hasOwnProperty(c) && a[c]) return !1;
                return !0
            }, b.$.getUserMedia = function(c, d, e, h, i, j, k) {
                var l = a;
                if (b.$.isFunction(k) && (l = k), g(c)) return b.error("Couldn't get UserMedia: All constraints were false"), void e.call(null, {
                    name: "NO_VALID_CONSTRAINTS",
                    message: "Video and Audio was disabled, you need to enabled at least one"
                });
                var m = null,
                    n = !1,
                    o = function() {
                        m && clearTimeout(m), n && i && i()
                    },
                    p = function() {
                        m = null, n = !0, h && h()
                    },
                    q = function(a) {
                        o(), d.call(null, a)
                    },
                    r = function(a) {
                        o();
                        var b = f(a);
                        "PermissionDeniedError" === b.name || "PermissionDismissedError" === b.name ? j.call(null, b) : e.call(null, b)
                    };
                try {
                    l(c, q, r)
                } catch (s) {
                    return b.error("Couldn't get UserMedia: " + s.toString()), void r()
                }
                m = -1 === location.protocol.indexOf("https") ? setTimeout(p, 100) : setTimeout(p, 500)
            }
        }(), ! function() {
            var a = function(a) {
                    return function(b, c) {
                        c.querySelector("html").style.height = c.body.style.height = "100%", a(b, c)
                    }
                },
                c = function(a, c, d) {
                    var e = a.head || a.getElementsByTagName("head")[0],
                        f = b.$.createElement("link", {
                            type: "text/css",
                            media: "screen",
                            rel: "stylesheet",
                            href: c
                        });
                    e.appendChild(f), b.$.on(f, "error", function(a) {
                        b.error("Could not load CSS for dialog", c, a && a.message || a)
                    }), b.$.on(f, "load", d)
                },
                d = function(a, d, e) {
                    var f = ["//fonts.googleapis.com/css?family=Didact+Gothic", b.properties.cssURL].concat(d),
                        g = f.length;
                    b.$.forEach(f, function(b) {
                        c(a, b, function() {
                            --g <= 0 && e()
                        })
                    })
                },
                e = function(a, c, d) {
                    var e = b.$.createElement(d || "div", {
                        "class": a
                    }, c, this);
                    return e.on = b.$.bind(b.$.on, b.$, e), e.off = b.$.bind(b.$.off, b.$, e), e
                },
                f = function(a, c, d) {
                    var f = e.call(this, "", null, "input");
                    return f = b.$(f).on("change", d), "IE" === b.$.env.name && b.$.env.version <= 8 && f.on("click", function() {
                        f.first.blur(), f.first.focus()
                    }), f.attr({
                        name: c,
                        id: c,
                        type: "checkbox"
                    }), f.first
                },
                g = function(a, b, c) {
                    var d = e.call(this, c || "", a, "a");
                    return d.setAttribute("href", b), d
                };
            b.Dialogs = {}, b.Dialogs.Plugin = {}, b.Dialogs.Plugin.promptToInstall = function() {
                var c = new b.$.Modal(a(function(a, h) {
                    function i() {
                        c.trigger("download"), setTimeout(function() {
                            q.querySelector(".OT_dialog-messages-main").innerHTML = "Plugin installation successful";
                            var a = q.querySelectorAll(".OT_dialog-section");
                            b.$.addClass(a[0], "OT_dialog-hidden"), b.$.removeClass(a[1], "OT_dialog-hidden")
                        }, 3e3)
                    }

                    function j() {
                        c.trigger("refresh")
                    }

                    function k() {
                        o.checked ? l() : m()
                    }

                    function l() {
                        t.enable(), t.on("click", i), v.enable(), v.on("click", j)
                    }

                    function m() {
                        t.disable(), t.off("click", i), v.disable(), v.off("click", j)
                    }
                    var n, o, p, q, r = b.$.bind(e, h),
                        s = function(a, c) {
                            var d = "OT_dialog-button " + (c ? "OT_dialog-button-" + c : "OT_dialog-button-large"),
                                e = r(d, a);
                            return e.enable = function() {
                                return b.$.removeClass(this, "OT_dialog-button-disabled"), this
                            }, e.disable = function() {
                                return b.$.addClass(this, "OT_dialog-button-disabled"), this
                            }, e
                        },
                        t = s("Download plugin"),
                        u = s("cancel", "small"),
                        v = s("Refresh browser");
                    b.$.addClass(u, "OT_dialog-no-natural-margin OT_dialog-button-block"), b.$.addClass(v, "OT_dialog-no-natural-margin"), t.disable(), v.disable(), u.on("click", function() {
                        c.trigger("cancelButtonClicked"), c.close()
                    }), p = r("OT_closeButton", "&times;").on("click", function() {
                        c.trigger("closeButtonClicked"), c.close()
                    }).first;
                    var w = a.location.protocol.indexOf("https") >= 0 ? "https" : "http";
                    n = g.call(h, "end-user license agreement", w + "://tokbox.com/support/ie-eula"), o = f.call(h, null, "acceptEULA", k), q = r("OT_dialog-centering", [r("OT_dialog-centering-child", [r("OT_root OT_dialog OT_dialog-plugin-prompt", [p, r("OT_dialog-messages", [r("OT_dialog-messages-main", "This app requires real-time communication")]), r("OT_dialog-section", [r("OT_dialog-single-button-with-title", [r("OT_dialog-button-title", [o, function() {
                        var a = r("", "accept", "label");
                        return a.setAttribute("for", o.id), a.style.margin = "0 5px", a
                    }(), n]), r("OT_dialog-actions-card", [t, u])])]), r("OT_dialog-section OT_dialog-hidden", [r("OT_dialog-button-title", ["You can now enjoy webRTC enabled video via Internet Explorer."]), v])])])]), d(h, [], function() {
                        h.body.appendChild(q)
                    })
                }));
                return c
            }, b.Dialogs.Plugin.promptToReinstall = function() {
                var c = new b.$.Modal(a(function(a, f) {
                    var g, h, i, j = b.$.bind(e, f);
                    g = j("OT_closeButton", "&times;").on("click", function() {
                        c.trigger("closeButtonClicked"), c.close()
                    }).first, h = j("OT_dialog-button OT_dialog-button-large OT_dialog-no-natural-margin", "Okay").on("click", function() {
                        c.trigger("okay")
                    }).first, i = j("OT_dialog-centering", [j("OT_dialog-centering-child", [j("OT_ROOT OT_dialog OT_dialog-plugin-reinstall", [g, j("OT_dialog-messages", [j("OT_dialog-messages-main", "Reinstall Opentok Plugin"), j("OT_dialog-messages-minor", "Uh oh! Try reinstalling the OpenTok plugin again to enable real-time video communication for Internet Explorer.")]), j("OT_dialog-section", [j("OT_dialog-single-button", h)])])])]), d(f, [], function() {
                        f.body.appendChild(i)
                    })
                }));
                return c
            }, b.Dialogs.Plugin.updateInProgress = function() {
                var c, f, g = 0,
                    h = new b.$.Modal(a(function(a, i) {
                        var j, k = b.$.bind(e, i);
                        f = k("OT_dialog-plugin-upgrade-percentage", "0%", "strong"), c = k("OT_dialog-progress-bar-fill"), j = k("OT_dialog-centering", [k("OT_dialog-centering-child", [k("OT_ROOT OT_dialog OT_dialog-plugin-upgrading", [k("OT_dialog-messages", [k("OT_dialog-messages-main", ["One moment please... ", f]), k("OT_dialog-progress-bar", c), k("OT_dialog-messages-minor OT_dialog-no-natural-margin", "Please wait while the OpenTok plugin is updated")])])])]), d(i, [], function() {
                            i.body.appendChild(j), null != g && h.setUpdateProgress(g)
                        })
                    }));
                return h.setUpdateProgress = function(a) {
                    c && f ? a > 99 ? (b.$.css(c, "width", ""), f.innerHTML = "100%") : 1 > a ? (b.$.css(c, "width", "0%"), f.innerHTML = "0%") : (b.$.css(c, "width", a + "%"), f.innerHTML = a + "%") : g = a
                }, h
            }, b.Dialogs.Plugin.updateComplete = function(c) {
                var f = new b.$.Modal(a(function(a, g) {
                    var h, i, j = b.$.bind(e, g);
                    h = j("OT_dialog-button OT_dialog-button-large OT_dialog-no-natural-margin", "Reload").on("click", function() {
                        f.trigger("reload")
                    }).first;
                    var k;
                    k = c ? ["Update Failed.", c + "" || "NO ERROR"] : ["Update Complete.", "The OpenTok plugin has been succesfully updated. Please reload your browser."], i = j("OT_dialog-centering", [j("OT_dialog-centering-child", [j("OT_root OT_dialog OT_dialog-plugin-upgraded", [j("OT_dialog-messages", [j("OT_dialog-messages-main", k[0]), j("OT_dialog-messages-minor", k[1])]), j("OT_dialog-single-button", h)])])]), d(g, [], function() {
                        g.body.appendChild(i)
                    })
                }));
                return f
            }
        }(), ! function(a) {
            var c = {
                audio: "audioInput",
                video: "videoInput"
            };
            b.$.shouldAskForDevices = function(c) {
                var d = a.MediaStreamTrack;
                null != d && b.$.isFunction(d.getSources) ? a.MediaStreamTrack.getSources(function(a) {
                    var b = a.some(function(a) {
                            return "audio" === a.kind
                        }),
                        d = a.some(function(a) {
                            return "video" === a.kind
                        });
                    c.call(null, {
                        video: d,
                        audio: b
                    })
                }) : (b.$.shouldAskForDevices = function(a) {
                    setTimeout(b.$.bind(a, null, {
                        video: !0,
                        audio: !0
                    }))
                }, b.$.shouldAskForDevices(c))
            }, b.$.getMediaDevices = function(d) {
                b.$.hasCapabilities("getMediaDevices") ? a.MediaStreamTrack.getSources(function(a) {
                    var e = b.$.filter(a, function(a) {
                        return null != c[a.kind]
                    });
                    d(void 0, b.$.map(e, function(a) {
                        return {
                            deviceId: a.id,
                            label: a.label,
                            kind: c[a.kind]
                        }
                    }))
                }) : d(new Error("This browser does not support getMediaDevices APIs"))
            }
        }(a);
        var F = function(a) {
            var b = document.createElement("link");
            b.type = "text/css", b.media = "screen", b.rel = "stylesheet", b.href = a;
            var c = document.head || document.getElementsByTagName("head")[0];
            c.appendChild(b)
        };
        b.Config = function() {
            var a, c, d, e = !1,
                f = {},
                g = {},
                h = document.head || document.getElementsByTagName("head")[0],
                i = function() {
                    c && (clearTimeout(c), c = null)
                },
                j = function() {
                    i(), a && (a.onload = a.onreadystatechange = null, h && a.parentNode && h.removeChild(a), a = void 0)
                },
                k = function() {
                    (!a.readyState || /loaded|complete/.test(a.readyState)) && (i(), e || d._onLoadTimeout())
                },
                l = function() {
                    j(), b.warn("TB DynamicConfig failed to load due to an error"), this.trigger("dynamicConfigLoadFailed")
                },
                m = function(a, b) {
                    return b && g[b] && g[b][a] ? g[b][a] : f[a]
                };
            return d = {
                loadTimeout: 4e3,
                _onLoadTimeout: function() {
                    j(), b.warn("TB DynamicConfig failed to load in " + d.loadTimeout + " ms"), this.trigger("dynamicConfigLoadFailed")
                },
                load: function(f) {
                    if (!f) throw new Error("You must pass a valid configUrl to Config.load");
                    e = !1, setTimeout(function() {
                        a = document.createElement("script"), a.async = "async", a.src = f, a.onload = a.onreadystatechange = b.$.bind(k, d), a.onerror = b.$.bind(l, d), h.appendChild(a)
                    }, 1), c = setTimeout(function() {
                        d._onLoadTimeout()
                    }, this.loadTimeout)
                },
                isLoaded: function() {
                    return e
                },
                reset: function() {
                    this.off(), j(), e = !1, f = {}, g = {}
                },
                replaceWith: function(a) {
                    j(), a || (a = {}), f = a.global || {}, g = a.partners || {}, e || (e = !0), this.trigger("dynamicConfigChanged")
                },
                get: function(a, b, c) {
                    var d = m(a, c);
                    return d ? d[b] : null
                }
            }, b.$.eventing(d), d
        }(), b.$.registerCapability("getUserMedia", function() {
            return "Node" === b.$.env ? !1 : !!(navigator.webkitGetUserMedia || navigator.mozGetUserMedia || OTPlugin.isInstalled())
        }), b.$.registerCapability("PeerConnection", function() {
            return "Node" === b.$.env ? !1 : "function" == typeof a.webkitRTCPeerConnection && a.webkitRTCPeerConnection.prototype.addStream ? !0 : "function" == typeof a.mozRTCPeerConnection && b.$.env.version > 20 ? !0 : OTPlugin.isInstalled()
        }), b.$.registerCapability("webrtc", function() {
            if (b.properties) {
                var a = b.properties.minimumVersion || {},
                    c = a[b.$.env.name.toLowerCase()];
                if (c && b.$.env.versionGreaterThan(c)) return b.debug("Support for", b.$.env.name, "is disabled because we require", c, "but this is", b.$.env.version), !1
            }
            return "Node" === b.$.env ? !0 : b.$.hasCapabilities("getUserMedia", "PeerConnection")
        }), b.$.registerCapability("bundle", function() {
            return b.$.hasCapabilities("webrtc") && ("Chrome" === b.$.env.name || "Node" === b.$.env.name || OTPlugin.isInstalled())
        }), b.$.registerCapability("RTCPMux", function() {
            return b.$.hasCapabilities("webrtc") && ("Chrome" === b.$.env.name || "Node" === b.$.env.name || OTPlugin.isInstalled())
        }), b.$.registerCapability("getMediaDevices", function() {
            return b.$.isFunction(a.MediaStreamTrack) && b.$.isFunction(a.MediaStreamTrack.getSources)
        }), b.$.registerCapability("audioOutputLevelStat", function() {
            return "Chrome" === b.$.env.name || "IE" === b.$.env.name
        }), b.$.registerCapability("webAudioCapableRemoteStream", function() {
            return "Firefox" === b.$.env.name
        }), b.$.registerCapability("webAudio", function() {
            return "AudioContext" in a
        }), b.Analytics = function(c) {
            var d = "1",
                e = new b.$.Analytics(c, b.debug, b._.getClientGuid);
            this.logError = function(c, f, g, h, i) {
                i || (i = {});
                var j = i.partnerId;
                b.Config.get("exceptionLogging", "enabled", j) === !0 && b._.getClientGuid(function(k, l) {
                    if (!k) {
                        var m = b.$.extend({
                            clientVersion: "js-" + b.properties.version.replace("v", ""),
                            guid: l,
                            partnerId: j,
                            source: a.location.href,
                            logVersion: d,
                            clientSystemTime: (new Date).getTime()
                        }, i);
                        e.logError(c, f, g, h, m)
                    }
                })
            }, this.logEvent = function(c, f) {
                var g = c.partnerId;
                c || (c = {}), b._.getClientGuid(function(h, i) {
                    if (!h) {
                        var j = b.$.extend({
                            clientVersion: "js-" + b.properties.version.replace("v", ""),
                            guid: i,
                            partnerId: g,
                            source: a.location.href,
                            logVersion: d,
                            clientSystemTime: (new Date).getTime()
                        }, c);
                        e.logEvent(j, !1, f)
                    }
                })
            }, this.logQOS = function(c) {
                var f = c.partnerId;
                c || (c = {}), b._.getClientGuid(function(g, h) {
                    if (!g) {
                        var i = b.$.extend({
                            clientVersion: "js-" + b.properties.version.replace("v", ""),
                            guid: h,
                            partnerId: f,
                            source: a.location.href,
                            logVersion: d,
                            clientSystemTime: (new Date).getTime(),
                            duration: 0
                        }, c);
                        e.logQOS(i)
                    }
                })
            }
        }, b.ConnectivityAttemptPinger = function(a) {
            var c, d, e, f = "Initial",
                g = ["Initial", "Attempt", "Success", "Failure"],
                h = 5e3,
                i = 6,
                j = function(d) {
                    f = d;
                    var e = !1;
                    switch (f) {
                        case "Attempt":
                            "Initial" !== c && (e = !0), l();
                            break;
                        case "Success":
                            "Attempt" !== c && (e = !0), m();
                            break;
                        case "Failure":
                            "Attempt" !== c && (e = !0), m()
                    }
                    if (e) {
                        var g = a ? b.$.clone(a) : {};
                        g.action = "Internal Error", g.variation = "Non-fatal", g.payload = {
                            debug: "Invalid sequence: " + a.action + " " + c + " -> " + f
                        }, b.analytics.logEvent(g)
                    }
                },
                k = b.$.statable(this, g, "Failure", j),
                l = function() {
                    e = 0, d = setInterval(function() {
                        if (i > e) {
                            var c = b.$.extend(a, {
                                variation: "Attempting"
                            });
                            b.analytics.logEvent(c)
                        } else m();
                        e++
                    }, h)
                },
                m = function() {
                    clearInterval(d)
                };
            this.setVariation = function(a) {
                c = f, k(a)
            }, this.stop = function() {
                m()
            }
        }, b.StylableComponent = function(a, c, d, e) {
            if (!a.trigger) throw new Error("OT.StylableComponent is dependent on the mixin OT.$.eventing. Ensure that this is included in the object before StylableComponent.");
            var f = !1,
                g = function(b, c, d) {
                    d ? a.trigger("styleValueChanged", b, c, d) : a.trigger("styleValueChanged", b, c)
                };
            d === !1 && (c = {
                buttonDisplayMode: "off",
                nameDisplayMode: "off",
                audioLevelDisplayMode: "off"
            }, f = !0, e({
                showControls: !1
            }));
            var h = new G(c, g);
            a.getStyle = function(a) {
                return h.get(a)
            }, f ? a.setStyle = function() {
                return b.warn("Calling setStyle() has no effect because theshowControls option was set to false"), this
            } : a.setStyle = function(a, b, c) {
                var d = {};
                return "string" != typeof a ? (h.setAll(a, c), d = a) : (h.set(a, b), d[a] = b), e && e(d), this
            }
        };
        var G = function(a, c) {
            var d, e, f, g, h = {};
            d = ["showMicButton", "showSpeakerButton", "nameDisplayMode", "buttonDisplayMode", "backgroundImageURI", "audioLevelDisplayMode"], e = {
                buttonDisplayMode: ["auto", "mini", "mini-auto", "off", "on"],
                nameDisplayMode: ["auto", "off", "on"],
                audioLevelDisplayMode: ["auto", "off", "on"],
                showSettingsButton: [!0, !1],
                showMicButton: [!0, !1],
                backgroundImageURI: null,
                showControlBar: [!0, !1],
                showArchiveStatus: [!0, !1],
                videoDisabledDisplayMode: ["auto", "off", "on"]
            }, f = function(a, c) {
                return "backgroundImageURI" === a || e.hasOwnProperty(a) && -1 !== b.$.arrayIndexOf(e[a], c)
            }, g = function(a) {
                switch (a) {
                    case "true":
                        return !0;
                    case "false":
                        return !1;
                    default:
                        return a
                }
            }, this.getAll = function() {
                var a = b.$.clone(h);
                for (var c in a) a.hasOwnProperty(c) && b.$.arrayIndexOf(d, c) < 0 && delete a[c];
                return a
            }, this.get = function(a) {
                return a ? h[a] : this.getAll()
            }, this.setAll = function(a, d) {
                var e, i;
                for (var j in a) a.hasOwnProperty(j) && (i = g(a[j]), f(j, i) ? (e = h[j], i !== e && (h[j] = i, d || c(j, i, e))) : b.warn("Style.setAll::Invalid style property passed " + j + " : " + i));
                return this
            }, this.set = function(a, d) {
                b.debug("setStyle: " + a.toString());
                var e, i = g(d);
                return f(a, i) ? (e = h[a], i !== e && (h[a] = i, c(a, d, e)), this) : (b.warn("Style.set::Invalid style property passed " + a + " : " + i), this)
            }, a && this.setAll(a, !0)
        };
        b.generateSimpleStateMachine = function(a, c, d) {
            var e = c.slice(),
                f = b.$.clone(d),
                g = function(a) {
                    return -1 !== b.$.arrayIndexOf(e, a)
                },
                h = function(a, c) {
                    return f[a] && -1 !== b.$.arrayIndexOf(f[a], c)
                };
            return function(b) {
                function c(a, c) {
                    b({
                        message: a,
                        newState: c,
                        currentState: e,
                        previousState: f
                    })
                }

                function d(a) {
                    return g(a) ? h(e, a) ? !0 : (c("'" + e + "' cannot transition to '" + a + "'", a), !1) : (c("'" + a + "' is not a valid state", a), !1)
                }
                var e = a,
                    f = null;
                this.current = e, this.set = function(a) {
                    d(a) && (f = e, this.current = e = a)
                }
            }
        }, ! function() {
            var a, c, d = "NotSubscribing";
            a = ["NotSubscribing", "Init", "ConnectingToPeer", "BindingRemoteStream", "Subscribing", "Failed", "Destroyed"], c = {
                NotSubscribing: ["NotSubscribing", "Init", "Destroyed"],
                Init: ["NotSubscribing", "ConnectingToPeer", "BindingRemoteStream", "Destroyed"],
                ConnectingToPeer: ["NotSubscribing", "BindingRemoteStream", "Failed", "Destroyed"],
                BindingRemoteStream: ["NotSubscribing", "Subscribing", "Failed", "Destroyed"],
                Subscribing: ["NotSubscribing", "Failed", "Destroyed"],
                Failed: ["Destroyed"],
                Destroyed: []
            }, b.SubscribingState = b.generateSimpleStateMachine(d, a, c), b.SubscribingState.prototype.isDestroyed = function() {
                return "Destroyed" === this.current
            }, b.SubscribingState.prototype.isFailed = function() {
                return "Failed" === this.current
            }, b.SubscribingState.prototype.isSubscribing = function() {
                return "Subscribing" === this.current
            }, b.SubscribingState.prototype.isAttemptingToSubscribe = function() {
                return -1 !== b.$.arrayIndexOf(["Init", "ConnectingToPeer", "BindingRemoteStream"], this.current)
            }
        }(a), ! function() {
            var a = ["NotPublishing", "GetUserMedia", "BindingMedia", "MediaBound", "PublishingToSession", "Publishing", "Failed", "Destroyed"],
                c = {
                    NotPublishing: ["NotPublishing", "GetUserMedia", "Destroyed"],
                    GetUserMedia: ["BindingMedia", "Failed", "NotPublishing", "Destroyed"],
                    BindingMedia: ["MediaBound", "Failed", "NotPublishing", "Destroyed"],
                    MediaBound: ["NotPublishing", "PublishingToSession", "Failed", "Destroyed"],
                    PublishingToSession: ["NotPublishing", "Publishing", "Failed", "Destroyed"],
                    Publishing: ["NotPublishing", "MediaBound", "Failed", "Destroyed"],
                    Failed: ["Destroyed"],
                    Destroyed: []
                },
                d = "NotPublishing";
            b.PublishingState = b.generateSimpleStateMachine(d, a, c), b.PublishingState.prototype.isDestroyed = function() {
                return "Destroyed" === this.current
            }, b.PublishingState.prototype.isAttemptingToPublish = function() {
                return -1 !== b.$.arrayIndexOf(["GetUserMedia", "BindingMedia", "MediaBound", "PublishingToSession"], this.current)
            }, b.PublishingState.prototype.isPublishing = function() {
                return "Publishing" === this.current
            }
        }(a), ! function() {
            b.Microphone = function(a, c) {
                var d;
                b.$.defineProperties(this, {
                    muted: {
                        get: function() {
                            return d
                        },
                        set: function(b) {
                            if (d !== b) {
                                d = b;
                                for (var c = a.getAudioTracks(), e = 0, f = c.length; f > e; ++e) c[e].setEnabled(!d)
                            }
                        }
                    }
                }), this.muted(void 0 !== c ? c === !0 : a.getAudioTracks().length ? !a.getAudioTracks()[0].enabled : !1)
            }
        }(a), b.IntervalRunner = function(b, c) {
            var d = b,
                e = c,
                f = null;
            this.start = function() {
                f = a.setInterval(d, 1e3 / e)
            }, this.stop = function() {
                a.clearInterval(f), f = null
            }
        }, ! function() {
            b.Event = b.$.Event(), b.Event.names = {
                ACTIVE: "active",
                INACTIVE: "inactive",
                UNKNOWN: "unknown",
                PER_SESSION: "perSession",
                PER_STREAM: "perStream",
                EXCEPTION: "exception",
                ISSUE_REPORTED: "issueReported",
                SESSION_CONNECTED: "sessionConnected",
                SESSION_DISCONNECTED: "sessionDisconnected",
                STREAM_CREATED: "streamCreated",
                STREAM_DESTROYED: "streamDestroyed",
                CONNECTION_CREATED: "connectionCreated",
                CONNECTION_DESTROYED: "connectionDestroyed",
                SIGNAL: "signal",
                STREAM_PROPERTY_CHANGED: "streamPropertyChanged",
                MICROPHONE_LEVEL_CHANGED: "microphoneLevelChanged",
                RESIZE: "resize",
                SETTINGS_BUTTON_CLICK: "settingsButtonClick",
                DEVICE_INACTIVE: "deviceInactive",
                INVALID_DEVICE_NAME: "invalidDeviceName",
                ACCESS_ALLOWED: "accessAllowed",
                ACCESS_DENIED: "accessDenied",
                ACCESS_DIALOG_OPENED: "accessDialogOpened",
                ACCESS_DIALOG_CLOSED: "accessDialogClosed",
                ECHO_CANCELLATION_MODE_CHANGED: "echoCancellationModeChanged",
                MEDIA_STOPPED: "mediaStopped",
                PUBLISHER_DESTROYED: "destroyed",
                SUBSCRIBER_DESTROYED: "destroyed",
                DEVICES_DETECTED: "devicesDetected",
                DEVICES_SELECTED: "devicesSelected",
                CLOSE_BUTTON_CLICK: "closeButtonClick",
                MICLEVEL: "microphoneActivityLevel",
                MICGAINCHANGED: "microphoneGainChanged",
                ENV_LOADED: "envLoaded",
                ENV_UNLOADED: "envUnloaded",
                AUDIO_LEVEL_UPDATED: "audioLevelUpdated"
            }, b.ExceptionCodes = {
                JS_EXCEPTION: 2e3,
                AUTHENTICATION_ERROR: 1004,
                INVALID_SESSION_ID: 1005,
                CONNECT_FAILED: 1006,
                CONNECT_REJECTED: 1007,
                CONNECTION_TIMEOUT: 1008,
                NOT_CONNECTED: 1010,
                P2P_CONNECTION_FAILED: 1013,
                API_RESPONSE_FAILURE: 1014,
                TERMS_OF_SERVICE_FAILURE: 1026,
                UNABLE_TO_PUBLISH: 1500,
                UNABLE_TO_SUBSCRIBE: 1501,
                UNABLE_TO_FORCE_DISCONNECT: 1520,
                UNABLE_TO_FORCE_UNPUBLISH: 1530,
                PUBLISHER_ICE_WORKFLOW_FAILED: 1553,
                SUBSCRIBER_ICE_WORKFLOW_FAILED: 1554,
                UNEXPECTED_SERVER_RESPONSE: 2001
            }, b.ExceptionEvent = function(a, c, d, e, f, g) {
                b.Event.call(this, a), this.message = c, this.title = d, this.code = e, this.component = f, this.target = g
            }, b.IssueReportedEvent = function(a, c) {
                b.Event.call(this, a), this.issueId = c
            }, b.EnvLoadedEvent = function(a) {
                b.Event.call(this, a)
            };
            var a = !1;
            b.ConnectionEvent = function(c, d, e) {
                b.Event.call(this, c, !1), b.$.canDefineProperty ? Object.defineProperty(this, "connections", {
                    get: function() {
                        return a || (b.warn("OT.ConnectionEvent connections property is deprecated, use connection instead."), a = !0), [d]
                    }
                }) : this.connections = [d], this.connection = d, this.reason = e
            };
            var c = !1;
            b.StreamEvent = function(a, d, e, f) {
                b.Event.call(this, a, f), b.$.canDefineProperty ? Object.defineProperty(this, "streams", {
                    get: function() {
                        return c || (b.warn("OT.StreamEvent streams property is deprecated, use stream instead."), c = !0), [d]
                    }
                }) : this.streams = [d], this.stream = d, this.reason = e
            };
            var d = !1,
                e = !1,
                f = !1;
            b.SessionConnectEvent = function(a) {
                b.Event.call(this, a, !1), b.$.canDefineProperty ? Object.defineProperties(this, {
                    connections: {
                        get: function() {
                            return d || (b.warn("OT.SessionConnectedEvent no longer includes connections. Listen for connectionCreated events instead."), d = !0), []
                        }
                    },
                    streams: {
                        get: function() {
                            return e || (b.warn("OT.SessionConnectedEvent no longer includes streams. Listen for streamCreated events instead."), d = !0), []
                        }
                    },
                    archives: {
                        get: function() {
                            return f || (b.warn("OT.SessionConnectedEvent no longer includes archives. Listen for archiveStarted events instead."), f = !0), []
                        }
                    }
                }) : (this.connections = [], this.streams = [], this.archives = [])
            }, b.SessionDisconnectEvent = function(a, c, d) {
                b.Event.call(this, a, d), this.reason = c
            }, b.StreamPropertyChangedEvent = function(a, c, d, e, f) {
                b.Event.call(this, a, !1), this.type = a, this.stream = c, this.changedProperty = d, this.oldValue = e, this.newValue = f
            }, b.VideoDimensionsChangedEvent = function(a, c, d) {
                b.Event.call(this, "videoDimensionsChanged", !1), this.type = "videoDimensionsChanged", this.target = a, this.oldValue = c, this.newValue = d
            }, b.ArchiveEvent = function(a, c) {
                b.Event.call(this, a, !1), this.type = a, this.id = c.id, this.name = c.name, this.status = c.status, this.archive = c
            }, b.ArchiveUpdatedEvent = function(a, c, d, e) {
                b.Event.call(this, "updated", !1), this.target = a, this.changedProperty = c, this.oldValue = d, this.newValue = e
            }, b.SignalEvent = function(a, c, d) {
                b.Event.call(this, a ? "signal:" + a : b.Event.names.SIGNAL, !1), this.data = c, this.from = d
            }, b.StreamUpdatedEvent = function(a, c, d, e) {
                b.Event.call(this, "updated", !1), this.target = a, this.changedProperty = c, this.oldValue = d, this.newValue = e
            }, b.DestroyedEvent = function(a, c, d) {
                b.Event.call(this, a, !1), this.target = c, this.reason = d
            }, b.VideoEnabledChangedEvent = function(a, c) {
                b.Event.call(this, a, !1), this.reason = c.reason
            }, b.VideoDisableWarningEvent = function(a) {
                b.Event.call(this, a, !1)
            }, b.AudioLevelUpdatedEvent = function(a) {
                b.Event.call(this, b.Event.names.AUDIO_LEVEL_UPDATED, !1), this.audioLevel = a
            }, b.MediaStoppedEvent = function(a) {
                b.Event.call(this, b.Event.names.MEDIA_STOPPED, !0), this.target = a
            }
        }(a);
        var H = {},
            I = {};
        b.registerScreenSharingExtensionHelper = function(a, c) {
            I[a] = c, c.autoRegisters && c.isSupportedInThisBrowser && b.registerScreenSharingExtension(a)
        }, b.registerScreenSharingExtension = function(a) {
            var b = Array.prototype.slice.call(arguments, 1);
            if (null == I[a]) throw new Error("Unsupported kind passed to OT.registerScreenSharingExtension");
            var c = I[a].register.apply(I[a], b);
            H[a] = c
        };
        var J = function() {
            var a = b.$.find(b.$.keys(I), function(a) {
                return I[a].isSupportedInThisBrowser
            });
            return void 0 === a ? {} : {
                name: a,
                proto: I[a],
                instance: H[a]
            }
        };
        b.pickScreenSharingHelper = function() {
            return J()
        }, b.checkScreenSharingCapability = function(a) {
            var b = {
                    supported: !1,
                    extensionRequired: void 0,
                    extensionRegistered: void 0,
                    extensionInstalled: void 0,
                    supportedSources: {}
                },
                c = J();
            return void 0 === c.name ? void setTimeout(a.bind(null, b)) : (b.supported = !0, b.extensionRequired = c.proto.extensionRequired ? c.name : void 0, b.supportedSources = {
                screen: c.proto.sources.screen,
                application: c.proto.sources.application,
                window: c.proto.sources.window,
                browser: c.proto.sources.browser
            }, c.instance ? (b.extensionRegistered = b.extensionRequired ? !0 : void 0, void c.instance.isInstalled(function(c) {
                b.extensionInstalled = b.extensionRequired ? c : void 0, a(b)
            })) : (b.extensionRegistered = !1, b.extensionRequired && (b.extensionInstalled = !1), void setTimeout(a.bind(null, b))))
        }, b.registerScreenSharingExtensionHelper("firefox", {
            isSupportedInThisBrowser: "Firefox" === b.$.env.name,
            autoRegisters: !0,
            extensionRequired: !1,
            getConstraintsShowsPermissionUI: !1,
            sources: {
                screen: !0,
                application: "Firefox" === b.$.env.name && b.$.env.version >= 34,
                window: "Firefox" === b.$.env.name && b.$.env.version >= 34,
                browser: "Firefox" === b.$.env.name && b.$.env.version >= 38
            },
            register: function() {
                return {
                    isInstalled: function(a) {
                        a(!0)
                    },
                    getConstraints: function(a, b, c) {
                        b.video = {
                            mediaSource: a
                        }, b.browserWindow && (b.video.browserWindow = b.browserWindow, delete b.browserWindow), "undefined" != typeof b.scrollWithPage && (b.video.scrollWithPage = b.scrollWithPage, delete b.scrollWithPage), c(void 0, b)
                    }
                }
            }
        }), b.registerScreenSharingExtensionHelper("chrome", {
            isSupportedInThisBrowser: !!navigator.webkitGetUserMedia && "undefined" != typeof chrome,
            autoRegisters: !1,
            extensionRequired: !0,
            getConstraintsShowsPermissionUI: !0,
            sources: {
                screen: !0,
                application: !1,
                window: !1,
                browser: !1
            },
            register: function(c) {
                if (!c) throw new Error("initChromeScreenSharingExtensionHelper: extensionID is required.");
                var d = !!navigator.webkitGetUserMedia && "undefined" != typeof chrome,
                    e = {},
                    f = void 0,
                    g = "com.tokbox.screenSharing." + c,
                    h = function(a, b) {
                        var c = {
                            payload: b,
                            from: "jsapi"
                        };
                        return c[g] = a, c
                    },
                    i = function(a, c) {
                        var d, f = b.$.uuid();
                        return e[f] = function() {
                            clearTimeout(d), d = null, a.apply(null, arguments)
                        }, c && (d = setTimeout(function() {
                            delete e[f], a(new Error("Timeout waiting for response to request."))
                        }, c)), f
                    },
                    j = function(b) {
                        if (!b) throw new Error("isAvailable: callback is required.");
                        if (d || setTimeout(b.bind(null, !1)), void 0 !== f) setTimeout(b.bind(null, f));
                        else {
                            var c = i(function(a, c) {
                                    f !== !0 && (f = "extensionLoaded" === c), b(f)
                                }, 2e3),
                                e = h("isExtensionInstalled", {
                                    requestId: c
                                });
                            a.postMessage(e, "*")
                        }
                    },
                    k = function(b, c, d) {
                        if (!d) throw new Error("getSourceId: callback is required");
                        j(function(e) {
                            if (e) {
                                var f = i(function(a, b, e) {
                                    "permissionDenied" === b ? d(new Error("PermissionDeniedError")) : (c.video || (c.video = {}), c.video.mandatory || (c.video.mandatory = {}), c.video.mandatory.chromeMediaSource = "desktop", c.video.mandatory.chromeMediaSourceId = e.sourceId, d(void 0, c))
                                });
                                a.postMessage(h("getSourceId", {
                                    requestId: f,
                                    source: b
                                }), "*")
                            } else d(new Error("Extension is not installed"))
                        })
                    };
                return a.addEventListener("message", function(b) {
                    if (b.origin === a.location.origin && null != b.data && "object" == typeof b.data && "extension" === b.data.from) {
                        var c = b.data[g],
                            d = b.data.payload;
                        if (d && d.requestId) {
                            var h = e[d.requestId];
                            delete e[d.requestId], h && h(null, c, d)
                        }
                        "extensionLoaded" === c && (f = !0)
                    }
                }), {
                    isInstalled: j,
                    getConstraints: k
                }
            }
        }), b.StreamChannel = function(a) {
            this.id = a.id, this.type = a.type, this.active = b.$.castToBoolean(a.active), this.orientation = a.orientation || b.VideoOrientation.ROTATED_NORMAL, a.frameRate && (this.frameRate = parseFloat(a.frameRate, 10)), this.width = parseInt(a.width, 10), this.height = parseInt(a.height, 10), this.source = a.source || "camera", this.fitMode = a.fitMode || "cover", b.$.eventing(this, !0), this.update = function(a) {
                var c = {},
                    d = {};
                for (var e in a)
                    if (a.hasOwnProperty(e)) {
                        var f = this[e];
                        switch (e) {
                            case "active":
                                this.active = b.$.castToBoolean(a[e]);
                                break;
                            case "disableWarning":
                                this.disableWarning = b.$.castToBoolean(a[e]);
                                break;
                            case "frameRate":
                                this.frameRate = parseFloat(a[e], 10);
                                break;
                            case "width":
                            case "height":
                                this[e] = parseInt(a[e], 10), c[e] = this[e], d[e] = f;
                                break;
                            case "orientation":
                                this[e] = a[e], c[e] = this[e], d[e] = f;
                                break;
                            case "fitMode":
                                this[e] = a[e];
                                break;
                            case "source":
                                this[e] = a[e];
                                break;
                            default:
                                return void b.warn("Tried to update unknown key " + e + " on " + this.type + " channel " + this.id)
                        }
                        this.trigger("update", this, e, f, this[e])
                    }
                return b.$.keys(c).length && this.trigger("update", this, "videoDimensions", d, c), !0
            }
        }, ! function() {
            var a = ["name", "archiving"];
            b.Stream = function(c, d, e, f, g, h) {
                var i;
                this.id = this.streamId = c, this.name = d, this.creationTime = Number(e), this.connection = f, this.channel = h, this.publisher = b.publishers.find({
                    streamId: this.id
                }), b.$.eventing(this);
                var j = b.$.bind(function(a, c, d, e) {
                        var f = c;
                        switch (f) {
                            case "active":
                                f = "audio" === a.type ? "hasAudio" : "hasVideo", this[f] = e;
                                break;
                            case "disableWarning":
                                if (f = "audio" === a.type ? "audioDisableWarning" : "videoDisableWarning", this[f] = e, !this["audio" === a.type ? "hasAudio" : "hasVideo"]) return;
                                break;
                            case "fitMode":
                                f = "defaultFitMode", this[f] = e;
                                break;
                            case "source":
                                f = "audio" === a.type ? "audioType" : "videoType", this[f] = e;
                                break;
                            case "orientation":
                            case "width":
                            case "height":
                                return void(this.videoDimensions = {
                                    width: a.width,
                                    height: a.height,
                                    orientation: a.orientation
                                })
                        }
                        this.dispatchEvent(new b.StreamUpdatedEvent(this, f, d, e))
                    }, this),
                    k = b.$.bind(function() {
                        return this.publisher ? this.publisher : b.subscribers.find(function(a) {
                            return a.stream.id === this.id && a.session.id === g.id
                        })
                    }, this);
                this.getChannelsOfType = function(a) {
                    return b.$.filter(this.channel, function(b) {
                        return b.type === a
                    })
                }, this.getChannel = function(a) {
                    for (var b = 0; b < this.channel.length; ++b)
                        if (this.channel[b].id === a) return this.channel[b];
                    return null
                };
                var l = this.getChannelsOfType("audio")[0],
                    m = this.getChannelsOfType("video")[0];
                this.hasAudio = null != l && l.active, this.hasVideo = null != m && m.active, this.videoType = m && m.source, this.defaultFitMode = m && m.fitMode, this.videoDimensions = {}, m && (this.videoDimensions.width = m.width, this.videoDimensions.height = m.height, this.videoDimensions.orientation = m.orientation, m.on("update", j), this.frameRate = m.frameRate), l && l.on("update", j), this.setChannelActiveState = function(a, b, c) {
                    var d = {
                        active: b
                    };
                    c && (d.activeReason = c), n(a, d)
                }, this.setVideoDimensions = function(a, b) {
                    n("video", {
                        width: a,
                        height: b,
                        orientation: 0
                    })
                }, this.setRestrictFrameRate = function(a) {
                    n("video", {
                        restrictFrameRate: a
                    })
                };
                var n = b.$.bind(function(a, c) {
                    var d;
                    if (this.publisher) d = function(a) {
                        g._.streamChannelUpdate(this, a, c)
                    };
                    else {
                        var e = b.subscribers.find(function(a) {
                            return a.stream && a.stream.id === this.id && a.session.id === g.id
                        }, this);
                        d = function(a) {
                            g._.subscriberChannelUpdate(this, e, a, c)
                        }
                    }
                    b.$.forEach(this.getChannelsOfType(a), b.$.bind(d, this))
                }, this);
                this.destroyed = !1, this.destroyedReason = void 0, this.destroy = function(a, c) {
                    i = a || "clientDisconnected", this.destroyed = !0, this.destroyedReason = i, c !== !0 && this.dispatchEvent(new b.DestroyedEvent("destroyed", this, i))
                }, this._ = {}, this._.updateProperty = b.$.bind(function(c, d) {
                    if (-1 === b.$.arrayIndexOf(a, c)) return void b.warn('Unknown stream property "' + c + '" was modified to "' + d + '".');
                    var e = this[c],
                        f = d;
                    switch (c) {
                        case "name":
                            this[c] = f;
                            break;
                        case "archiving":
                            var g = k();
                            g && g._.archivingStatus(f), this[c] = f
                    }
                    var h = new b.StreamUpdatedEvent(this, c, e, f);
                    this.dispatchEvent(h)
                }, this), this._.update = b.$.bind(function(a) {
                    for (var b in a) a.hasOwnProperty(b) && this._.updateProperty(b, a[b])
                }, this), this._.updateChannel = b.$.bind(function(a, b) {
                    this.getChannel(a).update(b)
                }, this)
            }
        }(a), ! function() {
            var a, c, d;
            b.SessionInfo = function(a) {
                var c = a[0];
                b.log("SessionInfo Response:"), b.log(a), this.sessionId = c.session_id, this.partnerId = c.partner_id, this.sessionStatus = c.session_status, this.messagingServer = c.messaging_server_url, this.messagingURL = c.messaging_url, this.symphonyAddress = c.symphony_address, this.p2pEnabled = !!(c.properties && c.properties.p2p && c.properties.p2p.preference && "enabled" === c.properties.p2p.preference.value)
            }, b.SessionInfo.get = function(e, f, g) {
                var h, i = b.properties.apiURL + "/session/" + e.id + "?extended=true",
                    j = b.$.now(),
                    k = function(h) {
                        e.logEvent("Instrumentation", null, "gsi", b.$.now() - j);
                        var i = a(h);
                        i === !1 ? c(e, f, h) : d(e, g, i, JSON.stringify(h))
                    };
                "IE" === b.$.env.name && b.$.env.version < 10 ? (i = i + "&format=json&token=" + encodeURIComponent(e.token) + "&version=1&cache=" + b.$.uuid(), h = {
                    xdomainrequest: !0
                }) : h = {
                    headers: {
                        "X-TB-TOKEN-AUTH": e.token,
                        "X-TB-VERSION": 1
                    }
                }, e.logEvent("SessionInfo", "Attempt"), b.$.getJSON(i, h, function(a, c) {
                    if (a) {
                        var f = c;
                        d(e, g, new b.Error(a.target && a.target.status || a.code, a.message || "Could not connect to the OpenTok API Server."), f)
                    } else k(c)
                })
            };
            var e = {};
            e[404] = b.ExceptionCodes.INVALID_SESSION_ID, e[409] = b.ExceptionCodes.TERMS_OF_SERVICE_FAILURE, e[400] = b.ExceptionCodes.INVALID_SESSION_ID, e[403] = b.ExceptionCodes.AUTHENTICATION_ERROR, a = function(a) {
                if (b.$.isArray(a)) {
                    var c = b.$.filter(a, function(a) {
                            return null != a.error
                        }),
                        d = c.length;
                    if (0 === d) return !1;
                    var f, g = c[0].error.code;
                    return e[g.toString()] ? (g = e[g], f = c[0].error.errorMessage && c[0].error.errorMessage.message) : (g = b.ErrorCodes.UNEXPECTED_SERVER_RESPONSE, f = "Unexpected server response. Try this operation again later."), {
                        code: g,
                        message: f
                    }
                }
                return {
                    code: null,
                    message: "Unknown error: getSessionInfo JSON response was badly formed"
                }
            }, c = function(a, c, d) {
                a.logEvent("SessionInfo", "Success", {
                    messagingServer: d[0].messaging_server_url
                }), c(new b.SessionInfo(d))
            }, d = function(a, b, c, d) {
                var e = {
                    reason: "GetSessionInfo",
                    code: c.code || "No code",
                    message: c.message + ":" + (d || "Empty responseText from API server")
                };
                a.logConnectivityEvent("Failure", e), b(c, a)
            }
        }(a), ! function() {
            function a(a, d, e, f) {
                var g = c[e],
                    h = f ? b.$.clone(f) : {};
                b.error("OT.exception :: title: " + g + " (" + e + ") msg: " + d), h.partnerId || (h.partnerId = b.APIKEY);
                try {
                    b.analytics.logError(e, "tb.exception", g, {
                        details: d
                    }, h), b.dispatchEvent(new b.ExceptionEvent(b.Event.names.EXCEPTION, d, g, e, a, a))
                } catch (i) {
                    b.error("OT.exception :: Failed to dispatch exception - " + i.toString())
                }
            }
            b.Error = function(a, b) {
                this.code = a, this.message = b
            };
            var c = {
                1004: "Authentication error",
                1005: "Invalid Session ID",
                1006: "Connect Failed",
                1007: "Connect Rejected",
                1008: "Connect Time-out",
                1009: "Security Error",
                1010: "Not Connected",
                1011: "Invalid Parameter",
                1012: "Peer-to-peer Stream Play Failed",
                1013: "Connection Failed",
                1014: "API Response Failure",
                1015: "Session connected, cannot test network",
                1021: "Request Timeout",
                1026: "Terms of Service Violation: Export Compliance",
                1500: "Unable to Publish",
                1503: "No TURN server found",
                1520: "Unable to Force Disconnect",
                1530: "Unable to Force Unpublish",
                1553: "ICEWorkflow failed",
                1600: "createOffer, createAnswer, setLocalDescription, setRemoteDescription",
                2e3: "Internal Error",
                2001: "Unexpected Server Response",
                4e3: "WebSocket Connection Failed",
                4001: "WebSocket Network Disconnected"
            };
            b.getErrorTitleByCode = function(a) {
                return c[+a]
            }, b.handleJsException = function(b, c, d) {
                d = d || {};
                var e, f = d.session;
                f ? (e = {
                    sessionId: f.sessionId
                }, f.isConnected() && (e.connectionId = f.connection.connectionId), d.target || (d.target = f)) : d.sessionId && (e = {
                    sessionId: d.sessionId
                }, d.target || (d.target = null)), a(d.target, b, c, e)
            }, b.dispatchError = function(a, c, d, e) {
                b.error(a, c), d && b.$.isFunction(d) && d.call(null, new b.Error(a, c)), b.handleJsException(c, a, {
                    session: e
                })
            }
        }(a), ! function() {
            function a() {
                var a = !1,
                    c = OTPlugin.isSupported(),
                    d = c ? OTPlugin.isReady() : !0,
                    e = function() {
                        return !b.$.isDOMUnloaded() && b.$.isReady() && a && d
                    },
                    f = function() {
                        e() && b.dispatchEvent(new b.EnvLoadedEvent(b.Event.names.ENV_LOADED))
                    },
                    g = function() {
                        b.$.onDOMUnload(h), b.Config.load(b.properties.configURL), f()
                    },
                    h = function() {
                        b.dispatchEvent(new b.EnvLoadedEvent(b.Event.names.ENV_UNLOADED))
                    },
                    i = function(a) {
                        d = !0, a && b.debug("TB Plugin failed to load or was not installed"), f()
                    },
                    j = function() {
                        a = !0, b.Config.off("dynamicConfigChanged", j), b.Config.off("dynamicConfigLoadFailed", k), f()
                    },
                    k = function() {
                        j()
                    };
                b.Config.on("dynamicConfigChanged", j), b.Config.on("dynamicConfigLoadFailed", k), b.$.onDOMLoad(g), c && OTPlugin.ready(i), this.onLoad = function(a, c) {
                    return e() ? void a.call(c) : void b.on(b.Event.names.ENV_LOADED, a, c)
                }, this.onUnload = function(a, c) {
                    return this.isUnloaded() ? void a.call(c) : void b.on(b.Event.names.ENV_UNLOADED, a, c)
                }, this.isUnloaded = function() {
                    return b.$.isDOMUnloaded()
                }
            }
            var c = new a;
            b.onLoad = function(a, b) {
                c.onLoad(a, b)
            }, b.onUnload = function(a, b) {
                c.onUnload(a, b)
            }, b.isUnloaded = function() {
                return c.isUnloaded()
            }
        }();
        var K, L = document.location.hash;
        b.HAS_REQUIREMENTS = 1, b.NOT_HAS_REQUIREMENTS = 0, b.checkSystemRequirements = function() {
            b.debug("OT.checkSystemRequirements()");
            var a = b.$.hasCapabilities("websockets", "webrtc") || OTPlugin.isInstalled();
            return a = a ? this.HAS_REQUIREMENTS : this.NOT_HAS_REQUIREMENTS, b.checkSystemRequirements = function() {
                return b.debug("OT.checkSystemRequirements()"), a
            }, a === this.NOT_HAS_REQUIREMENTS && b.analytics.logEvent({
                action: "checkSystemRequirements",
                variation: "notHasRequirements",
                partnerId: b.APIKEY,
                payload: {
                    userAgent: b.$.env.userAgent
                }
            }), a
        }, b.upgradeSystemRequirements = function() {
            b.onLoad(function() {
                if (OTPlugin.isSupported()) return void b.Dialogs.Plugin.promptToInstall().on({
                    download: function() {
                        a.location = OTPlugin.pathToInstaller()
                    },
                    refresh: function() {
                        location.reload()
                    },
                    closed: function() {}
                });
                var c = "_upgradeFlash";
                document.body.appendChild(function() {
                    var a = document.createElement("iframe");
                    a.id = c, a.style.position = "absolute", a.style.position = "fixed", a.style.height = "100%", a.style.width = "100%", a.style.top = "0px", a.style.left = "0px", a.style.right = "0px", a.style.bottom = "0px", a.style.zIndex = 1e3;
                    try {
                        a.style.backgroundColor = "rgba(0,0,0,0.2)"
                    } catch (d) {
                        a.style.backgroundColor = "transparent", a.setAttribute("allowTransparency", "true")
                    }
                    a.setAttribute("frameBorder", "0"), a.frameBorder = "0", a.scrolling = "no", a.setAttribute("scrolling", "no");
                    var e = b.properties.minimumVersion[b.$.env.name.toLowerCase()],
                        f = e > b.$.env.version;
                    return a.src = b.properties.assetURL + "/html/upgrade.html#" + encodeURIComponent(f ? "true" : "false") + "," + encodeURIComponent(JSON.stringify(b.properties.minimumVersion)) + "|" + encodeURIComponent(document.location.href), a
                }()), K && clearInterval(K), K = setInterval(function() {
                    var a = document.location.hash,
                        b = /^#?\d+&/;
                    a !== L && b.test(a) && (L = a, "close_window" === a.replace(b, "") && (document.body.removeChild(document.getElementById(c)), document.location.hash = ""))
                }, 100)
            })
        }, b.ConnectionCapabilities = function(a) {
            var c = function(a) {
                    return a.supportsWebRTC = b.$.castToBoolean(a.supportsWebRTC), a
                },
                d = c(a);
            this.supportsWebRTC = d.supportsWebRTC
        }, b.Capabilities = function(a) {
            this.publish = -1 !== b.$.arrayIndexOf(a, "publish") ? 1 : 0, this.subscribe = -1 !== b.$.arrayIndexOf(a, "subscribe") ? 1 : 0, this.forceUnpublish = -1 !== b.$.arrayIndexOf(a, "forceunpublish") ? 1 : 0, this.forceDisconnect = -1 !== b.$.arrayIndexOf(a, "forcedisconnect") ? 1 : 0, this.supportsWebRTC = b.$.hasCapabilities("webrtc") ? 1 : 0, this.permittedTo = function(a) {
                return this.hasOwnProperty(a) && 1 === this[a]
            }
        }, b.Connection = function(a, c, d, e, f) {
            var g;
            this.id = this.connectionId = a, this.creationTime = c ? Number(c) : null, this.data = d, this.capabilities = new b.ConnectionCapabilities(e), this.permissions = new b.Capabilities(f), this.quality = null, b.$.eventing(this), this.destroy = b.$.bind(function(a, c) {
                g = a || "clientDisconnected", c !== !0 && this.dispatchEvent(new b.DestroyedEvent("destroyed", this, g))
            }, this), this.destroyed = function() {
                return void 0 !== g
            }, this.destroyedReason = function() {
                return g
            }
        }, b.Connection.fromHash = function(a) {
            return new b.Connection(a.id, a.creationTime, a.data, b.$.extend(a.capablities || {}, {
                supportsWebRTC: !0
            }), a.permissions || [])
        }, ! function() {
            var a = 8192,
                c = 128;
            b.Signal = function(d, e, f) {
                var g = function(a) {
                        return !/^[a-zA-Z0-9\-\._~]+$/.exec(a)
                    },
                    h = function(a) {
                        return a ? a instanceof b.Connection || a instanceof b.Session ? null : {
                            code: 400,
                            reason: "The To field was invalid"
                        } : {
                            code: 400,
                            reason: "The signal to field was invalid. Either set it to a OT.Connection, OT.Session, or omit it entirely"
                        }
                    },
                    i = function(a) {
                        var b = null;
                        return null === a || void 0 === a ? b = {
                            code: 400,
                            reason: "The signal type was null or undefined. Either set it to a String value or omit it"
                        } : a.length > c ? b = {
                            code: 413,
                            reason: "The signal type was too long, the maximum length of it is " + c + " characters"
                        } : g(a) && (b = {
                            code: 400,
                            reason: "The signal type was invalid, it can only contain letters, numbers, '-', '_', and '~'."
                        }), b
                    },
                    j = function(b) {
                        var c = null;
                        if (null === b || void 0 === b) c = {
                            code: 400,
                            reason: "The signal data was null or undefined. Either set it to a String value or omit it"
                        };
                        else try {
                            JSON.stringify(b).length > a && (c = {
                                code: 413,
                                reason: "The data field was too long, the maximum size of it is " + a + " characters"
                            })
                        } catch (d) {
                            c = {
                                code: 400,
                                reason: "The data field was not valid JSON"
                            }
                        }
                        return c
                    };
                this.toRaptorMessage = function() {
                    var a = this.to;
                    return a && "string" != typeof a && (a = a.id), b.Raptor.Message.signals.create(b.APIKEY, d, a, this.type, this.data)
                }, this.toHash = function() {
                    return f
                }, this.error = null, f && (f.hasOwnProperty("data") && (this.data = b.$.clone(f.data), this.error = j(this.data)), f.hasOwnProperty("to") && (this.to = f.to, this.error || (this.error = h(this.to))), f.hasOwnProperty("type") && (this.error || (this.error = i(f.type)), this.type = f.type)), this.valid = null === this.error
            }
        }(this), b.Raptor.Socket = function(a, c, d, e, f) {
            var g, h, i, j, k, m = ["disconnected", "connecting", "connected", "error", "disconnecting"],
                n = b.$.statable(this, m, "disconnected"),
                o = function(a) {
                    n(a ? "error" : "connected"), k.apply(null, arguments)
                },
                p = b.$.bind(function(a) {
                    var b = "clientDisconnected";
                    !this.is("disconnecting") && i.is("error") && (b = "networkDisconnected"), a && 4001 === a.code && (b = "networkTimedout"), n("disconnected"), j.onClose(b)
                }, this),
                q = function() {};
            this.connect = function(c, f, l) {
                if (!this.is("disconnected", "error")) return void b.warn("Cannot connect the Raptor Socket as it is currently connected. You should disconnect first.");
                n("connecting"), g = f.sessionId, h = c, k = l;
                var m = "/v2/partner/" + b.APIKEY + "/session/" + g;
                i = new b.Rumor.Socket(d, e), i.onClose(p), i.onMessage(b.$.bind(j.dispatch, j)), i.connect(a, b.$.bind(function(c) {
                    if (c) return void o({
                        reason: "WebSocketConnection",
                        code: c.code,
                        message: c.message
                    });
                    i.onError(q), b.debug("Raptor Socket connected. Subscribing to " + m + " on " + d), i.subscribe([m]);
                    var e = b.Raptor.Message.connections.create(b.APIKEY, g, i.id());
                    this.publish(e, {
                        "X-TB-TOKEN-AUTH": h
                    }, b.$.bind(function(c) {
                        if (c) {
                            var d, e, f = [400, 403, 409];
                            c.code === b.ExceptionCodes.CONNECT_FAILED ? (d = c.code, e = b.getErrorTitleByCode(c.code)) : c.code && b.$.arrayIndexOf(f, c.code) > -1 ? (d = b.ExceptionCodes.CONNECT_FAILED, e = "Received error response to connection create message.") : (d = b.ExceptionCodes.UNEXPECTED_SERVER_RESPONSE, e = "Unexpected server response. Try this operation again later."), c.message = "ConnectToSession:" + c.code + ":Received error response to connection create message.";
                            var h = {
                                    reason: "ConnectToSession",
                                    code: d,
                                    message: e
                                },
                                i = {
                                    action: "Connect",
                                    variation: "Failure",
                                    payload: h,
                                    sessionId: g,
                                    partnerId: b.APIKEY,
                                    connectionId: a
                                };
                            return b.analytics.logEvent(i), void o(h)
                        }
                        this.publish(b.Raptor.Message.sessions.get(b.APIKEY, g), function(c) {
                            if (c) {
                                var d, e, f = [400, 403, 409];
                                c.code && b.$.arrayIndexOf(f, c.code) > -1 ? (d = b.ExceptionCodes.CONNECT_FAILED, e = "Received error response to session read") : (d = b.ExceptionCodes.UNEXPECTED_SERVER_RESPONSE, e = "Unexpected server response. Try this operation again later.");
                                var h = {
                                        reason: "GetSessionState",
                                        code: c.code,
                                        message: e
                                    },
                                    i = {
                                        action: "Connect",
                                        variation: "Failure",
                                        payload: h,
                                        sessionId: g,
                                        partnerId: b.APIKEY,
                                        connectionId: a
                                    };
                                b.analytics.logEvent(i), o(h)
                            } else o.apply(null, arguments)
                        })
                    }, this))
                }, this))
            }, this.disconnect = function(a) {
                this.is("disconnected") || (n("disconnecting"), i.disconnect(a))
            }, this.publish = function(a, c, d) {
                if (i.isNot("connected")) return void b.error("OT.Raptor.Socket: cannot publish until the socket is connected." + a);
                var f, g = b.$.uuid(),
                    h = {};
                return c && (b.$.isFunction(c) ? (h = {}, f = c) : h = c), !f && d && b.$.isFunction(d) && (f = d), f && j.registerCallback(g, f), b.debug("OT.Raptor.Socket Publish (ID:" + g + ") "), b.debug(a), i.publish([e], a, b.$.extend(h, {
                    "Content-Type": "application/x-raptor+v2",
                    "TRANSACTION-ID": g,
                    "X-TB-FROM-ADDRESS": i.id()
                })), g
            }, this.streamCreate = function(a, c, d, e, f, h, i) {
                var j = b.Raptor.Message.streams.create(b.APIKEY, g, c, a, d, e, f, h);
                this.publish(j, function(a, b) {
                    i(a, c, b)
                })
            }, this.streamDestroy = function(a) {
                this.publish(b.Raptor.Message.streams.destroy(b.APIKEY, g, a))
            }, this.streamChannelUpdate = function(a, c, d) {
                this.publish(b.Raptor.Message.streamChannels.update(b.APIKEY, g, a, c, d))
            }, this.subscriberCreate = function(a, c, d, e) {
                this.publish(b.Raptor.Message.subscribers.create(b.APIKEY, g, a, c, i.id(), d), e)
            }, this.subscriberDestroy = function(a, c) {
                this.publish(b.Raptor.Message.subscribers.destroy(b.APIKEY, g, a, c))
            }, this.subscriberUpdate = function(a, c, d) {
                this.publish(b.Raptor.Message.subscribers.update(b.APIKEY, g, a, c, d))
            }, this.subscriberChannelUpdate = function(a, c, d, e) {
                this.publish(b.Raptor.Message.subscriberChannels.update(b.APIKEY, g, a, c, d, e))
            }, this.forceDisconnect = function(a, c) {
                this.publish(b.Raptor.Message.connections.destroy(b.APIKEY, g, a), c)
            }, this.forceUnpublish = function(a, c) {
                this.publish(b.Raptor.Message.streams.destroy(b.APIKEY, g, a), c)
            }, this.jsepCandidate = function(a, c) {
                this.publish(b.Raptor.Message.streams.candidate(b.APIKEY, g, a, c))
            }, this.jsepCandidateP2p = function(a, c, d) {
                this.publish(b.Raptor.Message.subscribers.candidate(b.APIKEY, g, a, c, d))
            }, this.jsepOffer = function(a, c) {
                this.publish(b.Raptor.Message.offer(a, c))
            }, this.jsepAnswer = function(a, c) {
                this.publish(b.Raptor.Message.streams.answer(b.APIKEY, g, a, c))
            }, this.jsepAnswerP2p = function(a, c, d) {
                this.publish(b.Raptor.Message.subscribers.answer(b.APIKEY, g, a, c, d))
            }, this.signal = function(a, c, d) {
                var e = new b.Signal(g, i.id(), a || {});
                return e.valid ? void this.publish(e.toRaptorMessage(), function(a) {
                    var f, g, h, i = [400, 403, 404, 413];
                    if (a) a.code && b.$.arrayIndexOf(i, f.code) > -1 ? (g = a.code, h = a.message) : (g = b.ExceptionCodes.UNEXPECTED_SERVER_RESPONSE, h = "Unexpected server response. Try this operation again later."), f = new b.SignalError(g, h);
                    else {
                        var j = e.data ? typeof e.data : null;
                        d("signal", "send", {
                            type: j
                        })
                    }
                    c && b.$.isFunction(c) && c(f, e.toHash())
                }) : void(c && b.$.isFunction(c) && c(new l(e.error.code, e.error.reason), e.toHash()))
            }, this.id = function() {
                return i && i.id()
            }, null == f && (f = new b.Raptor.Dispatcher), j = f
        }, b.GetStatsAudioLevelSampler = function(a) {
            if (!b.$.hasCapabilities("audioOutputLevelStat")) throw new Error("The current platform does not provide the required capabilities");
            var c = a,
                d = "audioOutputLevel";
            this.sample = function(a) {
                c.getStats(function(b, c) {
                    if (!b)
                        for (var e = 0; e < c.length; e++) {
                            var f = c[e],
                                g = parseFloat(f[d]);
                            if (!isNaN(g)) return void a(g / 32768)
                        }
                    a(null)
                })
            }
        }, b.AnalyserAudioLevelSampler = function(a) {
            var c = this,
                d = null,
                e = null,
                f = null,
                g = function(b) {
                    var c = a.createMediaStreamSource(b),
                        d = a.createAnalyser();
                    return c.connect(d), d
                };
            b.$.defineProperties(c, {
                webRTCStream: {
                    get: function() {
                        return f
                    },
                    set: function(a) {
                        f = a, d = g(f), e = new Uint8Array(d.frequencyBinCount)
                    }
                }
            }), this.sample = function(a) {
                if (d) {
                    d.getByteTimeDomainData(e);
                    for (var b = 0, c = 0; c < e.length; c++) b = Math.max(b, Math.abs(e[c] - 128));
                    a(b / 128)
                } else a(null)
            }
        }, b.AudioLevelTransformer = function() {
            var a = null;
            this.transform = function(b) {
                a = null === a || b >= a ? b : .3 * b + .7 * a;
                var c = Math.log(a) / Math.LN10 / 1.5 + 1;
                return Math.min(Math.max(c, 0), 1)
            }
        }, b.audioContext = function() {
            var c = new a.AudioContext;
            return b.audioContext = function() {
                return c
            }, c
        }, b.Archive = function(a, c, d) {
            this.id = a, this.name = c, this.status = d, this._ = {}, b.$.eventing(this), this._.update = b.$.bind(function(a) {
                for (var c in a)
                    if (a.hasOwnProperty(c)) {
                        var d = this[c];
                        this[c] = a[c];
                        var e = new b.ArchiveUpdatedEvent(this, c, d, this[c]);
                        this.dispatchEvent(e)
                    }
            }, this), this.destroy = function() {}
        }, b.analytics = new b.Analytics(b.properties.loggingURL), b.Subscriber = function(a, c, d) {
            var e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t = b.$.uuid(),
                u = a || t,
                v = c.session,
                w = c.stream,
                x = 100,
                y = b.$.hasCapabilities("audioOutputLevelStat") || b.$.hasCapabilities("webAudioCapableRemoteStream"),
                z = !1,
                A = this;
            if (m = b.$.defaults({}, c, {
                    showControls: !0,
                    fitMode: w.defaultFitMode || "cover"
                }), this.id = u, this.widgetId = t, this.session = v, this.stream = w = m.stream, this.streamId = w.id, o = {
                    timeStamp: b.$.now()
                }, !v) return void b.handleJsException("Subscriber must be passed a session option", 2e3, {
                session: v,
                target: this
            });
            b.$.eventing(this, !1), "function" == typeof d && this.once("subscribeComplete", d), y && this.on({
                "audioLevelUpdated:added": function(a) {
                    1 === a && r && r.start()
                },
                "audioLevelUpdated:removed": function(a) {
                    0 === a && r && r.stop()
                }
            });
            var B = function(a, c, d, e) {
                    var f = [{
                        action: a,
                        variation: c,
                        payload: d,
                        streamId: w ? w.id : null,
                        sessionId: v ? v.sessionId : null,
                        connectionId: v && v.isConnected() ? v.connection.connectionId : null,
                        partnerId: v && v.isConnected() ? v.sessionInfo.partnerId : null,
                        subscriberId: t
                    }];
                    e && f.push(e), b.analytics.logEvent.apply(b.analytics, f)
                },
                C = function(a, c) {
                    "Attempt" !== a && s || (s = new b.ConnectivityAttemptPinger({
                        action: "Subscribe",
                        sessionId: v ? v.sessionId : null,
                        connectionId: v && v.isConnected() ? v.connection.connectionId : null,
                        partnerId: v.isConnected() ? v.sessionInfo.partnerId : null,
                        streamId: w ? w.id : null
                    })), s.setVariation(a), B("Subscribe", a, c)
                },
                D = b.$.bind(function(a) {
                    var c = {
                        streamType: "WebRTC",
                        width: e ? Number(b.$.width(e.domElement).replace("px", "")) : null,
                        height: e ? Number(b.$.height(e.domElement).replace("px", "")) : null,
                        sessionId: v ? v.sessionId : null,
                        connectionId: v ? v.connection.connectionId : null,
                        mediaServerName: v ? v.sessionInfo.messagingServer : null,
                        p2pFlag: v ? v.sessionInfo.p2pEnabled : !1,
                        partnerId: v ? v.apiKey : null,
                        streamId: w.id,
                        subscriberId: t,
                        version: b.properties.version,
                        duration: parseInt(b.$.now() - k, 10),
                        remoteConnectionId: w.connection.connectionId
                    };
                    b.analytics.logQOS(b.$.extend(c, a)), this.trigger("qos", a)
                }, this),
                E = function(a) {
                    b.error("Subscriber State Change Failed: ", a.message), b.debug(a)
                },
                F = function() {
                    if (!n.isSubscribing() && f) {
                        b.debug("OT.Subscriber.onLoaded"), n.set("Subscribing"), k = b.$.now();
                        var a = {
                            pcc: parseInt(k - l, 10),
                            hasRelayCandidates: j && j.hasRelayCandidates()
                        };
                        B("createPeerConnection", "Success", a), e.loading(!1), g.showAfterLoading(), z && w.setRestrictFrameRate(!0), h && "auto" === A.getStyle("audioLevelDisplayMode") && h[e.audioOnly() ? "show" : "hide"](), this.trigger("subscribeComplete", null, this), this.trigger("loaded", this), C("Success", {
                            streamId: w.id
                        })
                    }
                },
                G = function() {
                    b.debug("OT.Subscriber has been disconnected from the Publisher's PeerConnection"), n.isAttemptingToSubscribe() ? (n.set("Failed"), this.trigger("subscribeComplete", new b.Error(null, "ClientDisconnected"))) : n.isSubscribing() && n.set("Failed"), this.disconnect()
                },
                H = b.$.bind(function(a, c, d, e) {
                    var f;
                    n.isAttemptingToSubscribe() ? (f = {
                        reason: e ? e : "PeerConnectionError",
                        message: "Subscriber PeerConnection Error: " + c,
                        hasRelayCandidates: j && j.hasRelayCandidates()
                    }, B("createPeerConnection", "Failure", f), n.set("Failed"), this.trigger("subscribeComplete", new b.Error(null, c))) : n.isSubscribing() && (n.set("Failed"), this.trigger("error", c)), this.disconnect();
                    var g;
                    g = "ICEWorkflow" === e ? b.ExceptionCodes.SUBSCRIBER_ICE_WORKFLOW_FAILED : b.ExceptionCodes.P2P_CONNECTION_FAILED, f = {
                        reason: e ? e : "PeerConnectionError",
                        message: "Subscriber PeerConnection Error: " + c,
                        code: g
                    }, C("Failure", f), b.handleJsException("Subscriber PeerConnection Error: " + c, g, {
                        session: v,
                        target: this
                    }), P.call(this, c)
                }, this),
                I = function(a) {
                    b.debug("OT.Subscriber.onRemoteStreamAdded"), n.set("BindingRemoteStream"), this.subscribeToAudio(m.subscribeToAudio), p = "loading", this.subscribeToVideo(m.subscribeToVideo, "loading");
                    var c = {
                            error: H,
                            audioVolume: x
                        },
                        d = a.getVideoTracks();
                    d.length > 0 && b.$.forEach(d, function(a) {
                        a.setEnabled(w.hasVideo && m.subscribeToVideo)
                    }), f = e.bindVideo(a, c, b.$.bind(function(a) {
                        return a ? void H(null, a.message || a, j, "VideoElement") : (f && f.orientation({
                            width: w.videoDimensions.width,
                            height: w.videoDimensions.height,
                            videoOrientation: w.videoDimensions.orientation
                        }), void F.call(this, null))
                    }, this)), b.$.hasCapabilities("webAudioCapableRemoteStream") && q && a.getAudioTracks().length > 0 && q.webRTCStream(a), B("createPeerConnection", "StreamAdded"), this.trigger("streamAdded", this)
                },
                J = function(a) {
                    b.debug("OT.Subscriber.onStreamRemoved"), f.stream === a && (f.destroy(), f = null), this.trigger("streamRemoved", this)
                },
                K = function() {
                    this.disconnect()
                },
                L = function(a) {
                    switch (a.changedProperty) {
                        case "videoDimensions":
                            if (!f) break;
                            f.orientation({
                                width: a.newValue.width,
                                height: a.newValue.height,
                                videoOrientation: a.newValue.orientation
                            }), this.dispatchEvent(new b.VideoDimensionsChangedEvent(this, a.oldValue, a.newValue));
                            break;
                        case "videoDisableWarning":
                            g.videoDisabledIndicator.setWarning(a.newValue), this.dispatchEvent(new b.VideoDisableWarningEvent(a.newValue ? "videoDisableWarning" : "videoDisableWarningLifted"));
                            break;
                        case "hasVideo":
                            Q(!(w.hasVideo && m.subscribeToVideo)), this.dispatchEvent(new b.VideoEnabledChangedEvent(w.hasVideo ? "videoEnabled" : "videoDisabled", {
                                reason: "publishVideo"
                            }));
                            break;
                        case "hasAudio":
                    }
                },
                M = function(a) {
                    if (a === !1) return "off";
                    var b = this.getStyle("buttonDisplayMode");
                    return b === !1 ? "on" : b
                },
                N = function(a, b) {
                    if (g) switch (a) {
                        case "nameDisplayMode":
                            g.name.setDisplayMode(b), g.backingBar.setNameMode(b);
                            break;
                        case "videoDisabledDisplayMode":
                            g.videoDisabledIndicator.setDisplayMode(b);
                            break;
                        case "showArchiveStatus":
                            g.archive.setShowArchiveStatus(b);
                            break;
                        case "buttonDisplayMode":
                            g.muteButton.setDisplayMode(b), g.backingBar.setMuteMode(b);
                            break;
                        case "audioLevelDisplayMode":
                            g.audioLevel.setDisplayMode(b);
                            break;
                        case "bugDisplayMode":
                        case "backgroundImageURI":
                            e.setBackgroundImageURI(b)
                    }
                },
                O = function() {
                    var a = {
                        backingBar: new b.Chrome.BackingBar({
                            nameMode: m.name ? this.getStyle("nameDisplayMode") : "off",
                            muteMode: M.call(this, this.getStyle("showMuteButton"))
                        }),
                        name: new b.Chrome.NamePanel({
                            name: m.name,
                            mode: this.getStyle("nameDisplayMode")
                        }),
                        muteButton: new b.Chrome.MuteButton({
                            muted: m.muted,
                            mode: M.call(this, this.getStyle("showMuteButton"))
                        }),
                        archive: new b.Chrome.Archiving({
                            show: this.getStyle("showArchiveStatus"),
                            archiving: !1
                        })
                    };
                    if (y) {
                        var c = new b.AudioLevelTransformer,
                            d = function(a) {
                                h.setValue(c.transform(a.audioLevel))
                            };
                        h = new b.Chrome.AudioLevelMeter({
                            mode: this.getStyle("audioLevelDisplayMode"),
                            onActivate: function() {
                                A.on("audioLevelUpdated", d)
                            },
                            onPassivate: function() {
                                A.off("audioLevelUpdated", d)
                            }
                        }), a.audioLevel = h
                    }
                    a.videoDisabledIndicator = new b.Chrome.VideoDisabledIndicator({
                        mode: this.getStyle("videoDisabledDisplayMode")
                    }), g = new b.Chrome({
                        parent: e.domElement
                    }).set(a).on({
                        muted: function() {
                            S.call(this, !0)
                        },
                        unmuted: function() {
                            S.call(this, !1)
                        }
                    }, this), g.hideWhileLoading()
                },
                P = function() {
                    e && e.addError("The stream was unable to connect due to a network error.", "Make sure your connection isn't blocked by a firewall.")
                };
            b.StylableComponent(this, {
                nameDisplayMode: "auto",
                buttonDisplayMode: "auto",
                audioLevelDisplayMode: "auto",
                videoDisabledDisplayMode: "auto",
                backgroundImageURI: null,
                showArchiveStatus: !0,
                showMicButton: !0
            }, m.showControls, function(a) {
                B("SetStyle", "Subscriber", a, .1)
            });
            var Q = function(a) {
                    j && j.subscribeToVideo(!a), e && (e.audioOnly(a), e.showPoster(a)), h && "auto" === A.getStyle("audioLevelDisplayMode") && h[a ? "show" : "hide"]()
                },
                R = function() {
                    var a = 0;
                    return function() {
                        a % 100 === 0 && B("getStats", "Called"), a++
                    }
                }();
            this.destroy = function(a, c) {
                return n.isDestroyed() ? void 0 : ("streamDestroyed" === a && n.isAttemptingToSubscribe() && this.trigger("subscribeComplete", new b.Error(null, "InvalidStreamID")), n.set("Destroyed"), r && r.stop(), this.disconnect(), g && (g.destroy(), g = null), e && (e.destroy(), e = null, this.element = null), w && !w.destroyed && B("unsubscribe", null, {
                    streamId: w.id
                }), this.id = u = null, this.stream = w = null, this.streamId = null, this.session = v = null, m = null, c !== !0 && this.dispatchEvent(new b.DestroyedEvent(b.Event.names.SUBSCRIBER_DESTROYED, this, a), b.$.bind(this.off, this)), this)
            }, this.disconnect = function() {
                n.isDestroyed() || n.isFailed() || n.set("NotSubscribing"), f && (f.destroy(), f = null), j && (j.destroy(), j = null, B("disconnect", "PeerConnection", {
                    streamId: w.id
                }))
            }, this.processMessage = function(a, c, d) {
                b.debug("OT.Subscriber.processMessage: Received " + a + " message from " + c.id), b.debug(d), i !== c.id && (i = c.id), j && j.processMessage(a, d)
            }, this.disableVideo = function(a) {
                if (a) {
                    if ("auto" !== p) return void b.info("Video was not re-enabled because it was manually disabled");
                    b.info("Video has been re-enabled"), g.videoDisabledIndicator.disableVideo(!1)
                } else b.warn("Due to high packet loss and low bandwidth, video has been disabled");

                this.subscribeToVideo(a, "auto"), a || g.videoDisabledIndicator.disableVideo(!0);
                var c = a ? {
                    videoEnabled: !0
                } : {
                    videoDisabled: !0
                };
                B("updateQuality", "video", c)
            }, this.getImgData = function() {
                return this.isSubscribing() ? f.imgData() : (b.error("OT.Subscriber.getImgData: Cannot getImgData before the Subscriber is subscribing."), null)
            }, this.getStats = function(a) {
                return j ? (R(), void j.getStats(function(c, d) {
                    if (c) return void a(c);
                    var e = {
                        timestamp: 0
                    };
                    b.$.forEach(d, function(a) {
                        if (b.getStatsHelpers.isInboundStat(a)) {
                            var c = b.getStatsHelpers.isVideoStat(a),
                                d = b.getStatsHelpers.isAudioStat(a);
                            (d || c) && (e.timestamp = b.getStatsHelpers.normalizeTimestamp(a.timestamp)), c ? e.video = b.getStatsHelpers.parseStatCategory(a) : d && (e.audio = b.getStatsHelpers.parseStatCategory(a))
                        }
                    }), a(null, e)
                })) : void a(new b.$.Error("Subscriber is not connected cannot getStats", 1015))
            }, this.setAudioVolume = function(a) {
                return a = parseInt(a, 10), isNaN(a) ? (b.error("OT.Subscriber.setAudioVolume: value should be an integer between 0 and 100"), this) : (x = Math.max(0, Math.min(100, a)), x !== a && b.warn("OT.Subscriber.setAudioVolume: value should be an integer between 0 and 100"), m.muted && x > 0 && (m.premuteVolume = a, S.call(this, !1)), f && f.setAudioVolume(x), this)
            }, this.getAudioVolume = function() {
                return m.muted ? 0 : f ? f.getAudioVolume() : x
            }, this.subscribeToAudio = function(a) {
                var c = b.$.castToBoolean(a, !0);
                return j && (j.subscribeToAudio(c && !m.subscribeMute), v && w && c !== m.subscribeToAudio && w.setChannelActiveState("audio", c && !m.subscribeMute)), m.subscribeToAudio = c, this
            };
            var S = function(a) {
                    g.muteButton.muted(a), a !== m.mute && ("Chrome" === b.$.env.name || OTPlugin.isInstalled() ? (m.subscribeMute = m.muted = a, this.subscribeToAudio(m.subscribeToAudio)) : a ? (m.premuteVolume = this.getAudioVolume(), m.muted = !0, this.setAudioVolume(0)) : (m.premuteVolume || m.audioVolume) && (m.muted = !1, this.setAudioVolume(m.premuteVolume || m.audioVolume)), m.mute = m.mute)
                },
                T = {
                    auto: "quality",
                    publishVideo: "publishVideo",
                    subscribeToVideo: "subscribeToVideo"
                };
            if (this.subscribeToVideo = function(a, c) {
                    var d = b.$.castToBoolean(a, !0);
                    return Q(!(d && w.hasVideo)), d && e && e.video() && (e.loading(d), e.video().whenTimeIncrements(function() {
                        e.loading(!1)
                    }, this)), g && g.videoDisabledIndicator && g.videoDisabledIndicator.disableVideo(!1), j && v && w && (d !== m.subscribeToVideo || c !== p) && w.setChannelActiveState("video", d, c), m.subscribeToVideo = d, p = c, "loading" !== c && this.dispatchEvent(new b.VideoEnabledChangedEvent(d ? "videoEnabled" : "videoDisabled", {
                        reason: T[c] || "subscribeToVideo"
                    })), this
                }, this.isSubscribing = function() {
                    return n.isSubscribing()
                }, this.isWebRTC = !0, this.isLoading = function() {
                    return e && e.loading()
                }, this.videoElement = function() {
                    return f.domElement()
                }, this.videoWidth = function() {
                    return f.videoWidth()
                }, this.videoHeight = function() {
                    return f.videoHeight()
                }, this.restrictFrameRate = function(a) {
                    return b.debug("OT.Subscriber.restrictFrameRate(" + a + ")"), B("restrictFrameRate", a.toString(), {
                        streamId: w.id
                    }), v.sessionInfo.p2pEnabled && b.warn("OT.Subscriber.restrictFrameRate: Cannot restrictFrameRate on a P2P session"), "boolean" != typeof a ? b.error("OT.Subscriber.restrictFrameRate: expected a boolean value got a " + typeof a) : (z = a, w.setRestrictFrameRate(a)), this
                }, this.on("styleValueChanged", N, this), this._ = {
                    archivingStatus: function(a) {
                        g && g.archive.setArchiving(a)
                    },
                    getDataChannel: function(a, c, d) {
                        return j ? void j.getDataChannel(a, c, d) : void d(new b.$.Error("Cannot create a DataChannel before there is a publisher connection."))
                    }
                }, n = new b.SubscribingState(E), b.debug("OT.Subscriber: subscribe to " + w.id), n.set("Init"), !w) return b.error("OT.Subscriber: No stream parameter."), !1;
            if (w.on({
                    updated: L,
                    destroyed: K
                }, this), i = w.connection.id, m.name = m.name || w.name, m.classNames = "OT_root OT_subscriber", m.style && this.setStyle(m.style, null, !0), m.audioVolume && this.setAudioVolume(m.audioVolume), m.subscribeToAudio = b.$.castToBoolean(m.subscribeToAudio, !0), m.subscribeToVideo = b.$.castToBoolean(m.subscribeToVideo, !0), e = new b.WidgetView(a, m), this.id = u = e.domId(), this.element = e.domElement, O.call(this), l = b.$.now(), w.connection.id !== v.connection.id) {
                if (B("createPeerConnection", "Attempt", ""), n.set("ConnectingToPeer"), j = new b.SubscriberPeerConnection(w.connection, v, w, this, m), j.on({
                        disconnected: G,
                        error: H,
                        remoteStreamAdded: I,
                        remoteStreamRemoved: J,
                        qos: D
                    }, this), j.init(), b.$.hasCapabilities("audioOutputLevelStat") ? q = new b.GetStatsAudioLevelSampler(j, "out") : b.$.hasCapabilities("webAudioCapableRemoteStream") && (q = new b.AnalyserAudioLevelSampler(b.audioContext())), q) {
                    var U = this;
                    r = new b.IntervalRunner(function() {
                        q.sample(function(a) {
                            null !== a && b.$.requestAnimationFrame(function() {
                                U.dispatchEvent(new b.AudioLevelUpdatedEvent(a))
                            })
                        })
                    }, 60)
                }
            } else {
                B("createPeerConnection", "Attempt", "");
                var V = v.getPublisherForStream(w);
                if (!V || !V._.webRtcStream()) return this.trigger("subscribeComplete", new b.Error(null, "InvalidStreamID")), this;
                I.call(this, V._.webRtcStream())
            }
            C("Attempt", {
                streamId: w.id
            })
        }, b.Session = function(a, c) {
            function d(a) {
                return new b.$.RSVP.Promise(function(c, d) {
                    b.$.getJSON([b.properties.apiURL, "/v2/partner/", C, "/session/", E, "/connection/", G, "/testNetworkConfig"].join(""), {
                        headers: {
                            "X-TB-TOKEN-AUTH": a
                        }
                    }, function(a, e) {
                        if (a) {
                            var f = JSON.parse(a.target.responseText);
                            d(-1 === f.code ? new b.$.Error("Unexpected HTTP error codes " + a.target.status, "2001") : 10001 === f.code || 10002 === f.code ? new b.$.Error(f.message, "1004") : new b.$.Error(f.message, f.code))
                        } else c(e)
                    })
                })
            }
            if (b.$.eventing(this), !b.checkSystemRequirements()) return void b.upgradeSystemRequirements();
            null == c && (c = a, a = null), this.id = this.sessionId = c;
            var e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B = !0,
                C = a,
                D = this,
                E = c,
                F = b.$.uuid(),
                G = b.$.uuid(),
                H = b.$.statable(this, ["disconnected", "connecting", "connected", "disconnecting"], "disconnected");
            this.connection = null, this.connections = new b.$.Collection, this.streams = new b.$.Collection, this.archives = new b.$.Collection, g = function(a, c) {
                H("disconnected"), b.error(a), this.trigger("sessionConnectFailed", new b.Error(c || b.ExceptionCodes.CONNECT_FAILED, a)), b.handleJsException(a, c || b.ExceptionCodes.CONNECT_FAILED, {
                    session: this
                })
            }, h = function(a) {
                var c = a.reason;
                "networkTimedout" === c ? (c = "networkDisconnected", this.logEvent("Connect", "TimeOutDisconnect", {
                    reason: a.reason
                })) : this.logEvent("Connect", "Disconnected", {
                    reason: a.reason
                });
                var d = new b.SessionDisconnectEvent("sessionDisconnected", c);
                r(), s.call(this, c);
                var e = b.$.bind(function() {
                    t.call(this, d.reason), d.isDefaultPrevented() || u.call(this, d.reason)
                }, this);
                this.dispatchEvent(d, e)
            }, i = function(a) {
                a.id.match(/^symphony\./) || this.dispatchEvent(new b.ConnectionEvent(b.Event.names.CONNECTION_CREATED, a))
            }, j = function(a, c) {
                a.id.match(/^symphony\./) || a.id !== f.id() && this.dispatchEvent(new b.ConnectionEvent(b.Event.names.CONNECTION_DESTROYED, a, c))
            }, k = function(a) {
                a.connection.id !== this.connection.id && this.dispatchEvent(new b.StreamEvent(b.Event.names.STREAM_CREATED, a, null, !1))
            }, l = function(a) {
                var c = a.target,
                    d = a.changedProperty,
                    e = a.newValue;
                "videoDisableWarning" !== d && "audioDisableWarning" !== d && ("orientation" === d && (d = "videoDimensions", e = {
                    width: e.width,
                    height: e.height
                }), this.dispatchEvent(new b.StreamPropertyChangedEvent(b.Event.names.STREAM_PROPERTY_CHANGED, c, d, a.oldValue, e)))
            }, m = function(a, c) {
                if (a.connection.id === this.connection.id) return void b.$.forEach(b.publishers.where({
                    streamId: a.id
                }), b.$.bind(function(a) {
                    a._.unpublishFromSession(this, c)
                }, this));
                var d = new b.StreamEvent("streamDestroyed", a, c, !0),
                    e = b.$.bind(function() {
                        d.isDefaultPrevented() || b.$.forEach(b.subscribers.where({
                            streamId: a.id
                        }), function(a) {
                            a.session.id === this.id && a.stream && a.destroy("streamDestroyed")
                        }, this)
                    }, this);
                this.dispatchEvent(d, e)
            }, n = function(a) {
                this.dispatchEvent(new b.ArchiveEvent("archiveStarted", a))
            }, o = function(a) {
                this.dispatchEvent(new b.ArchiveEvent("archiveDestroyed", a))
            }, p = function(a) {
                var c = a.target,
                    d = a.changedProperty,
                    e = a.newValue;
                this.dispatchEvent("status" === d && "stopped" === e ? new b.ArchiveEvent("archiveStopped", c) : new b.ArchiveEvent("archiveUpdated", c))
            }, q = function() {
                D.token = e = null, H("disconnected"), D.connection = null, D.capabilities = new b.Capabilities([]), D.connections.destroy(), D.streams.destroy(), D.archives.destroy()
            }, r = function() {
                G = b.$.uuid(), q()
            }, s = function(a) {
                b.$.forEach(b.publishers.where({
                    session: this
                }), function(b) {
                    b.disconnect(a)
                }), b.$.forEach(b.subscribers.where({
                    session: this
                }), function(a) {
                    a.disconnect()
                })
            }, t = function(a) {
                b.$.forEach(b.publishers.where({
                    session: this
                }), function(b) {
                    b._.streamDestroyed(a)
                })
            }, u = function(a) {
                b.$.forEach(b.subscribers.where({
                    session: this
                }), function(b) {
                    b.destroy(a)
                })
            }, v = function() {
                b.debug("OT.Session: connecting to Raptor");
                var a = this.sessionInfo.messagingURL,
                    c = b.properties.symphonyAddresss || this.sessionInfo.symphonyAddress;
                f = new b.Raptor.Socket(G, F, a, c, b.SessionDispatcher(this)), f.connect(e, this.sessionInfo, b.$.bind(function(a, c) {
                    return a ? (f = void 0, this.logConnectivityEvent("Failure", a), void g.call(this, a.message, a.code)) : (b.debug("OT.Session: Received session state from Raptor", c), this.connection = this.connections.get(f.id()), this.connection && (this.capabilities = this.connection.permissions), H("connected"), this.logConnectivityEvent("Success", null, {
                        connectionId: this.connection.id
                    }), this.connection.on("destroyed", h, this), this.connections.on({
                        add: i,
                        remove: j
                    }, this), this.streams.on({
                        add: k,
                        remove: m,
                        update: l
                    }, this), this.archives.on({
                        add: n,
                        remove: o,
                        update: p
                    }, this), void this.dispatchEvent(new b.SessionConnectEvent(b.Event.names.SESSION_CONNECTED), b.$.bind(function() {
                        this.connections._triggerAddEvents(), this.streams._triggerAddEvents(), this.archives._triggerAddEvents()
                    }, this)))
                }, this))
            }, w = function() {
                this.is("connecting") && b.SessionInfo.get(this, b.$.bind(x, this), b.$.bind(function(a) {
                    g.call(this, a.message + (a.code ? " (" + a.code + ")" : ""), a.code)
                }, this))
            }, x = function(a) {
                if (this.is("connecting")) {
                    var c = b.properties.sessionInfoOverrides;
                    if (this.sessionInfo = a, null != c && "object" == typeof c && (this.sessionInfo = b.$.defaults(c, this.sessionInfo)), this.sessionInfo.partnerId && this.sessionInfo.partnerId !== C) {
                        this.apiKey = C = this.sessionInfo.partnerId;
                        var d = "Authentication Error: The API key does not match the token or session.",
                            e = {
                                code: b.ExceptionCodes.AUTHENTICATION_ERROR,
                                message: d
                            };
                        this.logEvent("Failure", "SessionInfo", e), g.call(this, d, b.ExceptionCodes.AUTHENTICATION_ERROR)
                    } else v.call(this)
                }
            }, y = b.$.bind(function(a) {
                return this.capabilities.permittedTo(a)
            }, this), A = b.$.bind(function(a, c, d) {
                b.dispatchError(a, c, d, this)
            }, this), this.logEvent = function(a, c, d, e) {
                var f = {
                    action: a,
                    variation: c,
                    payload: d,
                    sessionId: E,
                    partnerId: C
                };
                f.connectionId = G, e && (f = b.$.extend(e, f)), b.analytics.logEvent(f)
            }, this.testNetwork = function(a, c, e) {
                var f = e;
                if (e = function(a, b) {
                        a ? D.logEvent("TestNetwork", "Failure", {
                            failureCode: a.name || a.message || "unknown"
                        }) : D.logEvent("TestNetwork", "Success", b), f(a, b)
                    }, D.logEvent("TestNetwork", "Attempt", {}), this.isConnected()) return void e(new b.$.Error("Session connected, cannot test network", 1015));
                var g, h, i = new b.$.RSVP.Promise(function(a, b) {
                    var d = c._.webRtcStream();
                    if (d) a(d);
                    else {
                        var e = function() {
                                g(), a(c._.webRtcStream())
                            },
                            f = function(a) {
                                a && (g(), b(a))
                            },
                            g = function() {
                                c.off("publishComplete", f), c.off("accessAllowed", e)
                            };
                        c.on("publishComplete", f), c.on("accessAllowed", e)
                    }
                });
                b.$.RSVP.Promise.all([d(a), i]).then(function(a) {
                    var c = a[1];
                    return g = a[0], b.webrtcTest({
                        mediaConfig: g.media,
                        localStream: c
                    })
                }).then(function(a) {
                    return b.debug("Received stats from webrtcTest: ", a), a.bandwidth < g.media.thresholdBitsPerSecond ? b.$.RSVP.Promise.reject(new b.$.Error("The detect bandwidth form the WebRTC stage of the test was not sufficient to run the HTTP stage of the test", 1553)) : void(h = a)
                }).then(function() {
                    return h.extended ? void 0 : b.httpTest({
                        httpConfig: g.http
                    })
                }).then(function(a) {
                    var b = {
                        uploadBitsPerSecond: a ? a.uploadBandwidth : h.bandwidth,
                        downloadBitsPerSecond: a ? a.downloadBandwidth : h.bandwidth,
                        packetLossRatio: h.packetLostRatio,
                        roundTripTimeMilliseconds: h.roundTripTime
                    };
                    e(null, b)
                })["catch"](function(a) {
                    e(a)
                })
            }, this.logConnectivityEvent = function(a, c, d) {
                if ("Attempt" === a || !z) {
                    var e = {
                        action: "Connect",
                        sessionId: E,
                        partnerId: C
                    };
                    this.connection && this.connection.id ? e = event.connectionId = this.connection.id : G && (e.connectionId = G), z = new b.ConnectivityAttemptPinger(e)
                }
                z.setVariation(a), this.logEvent("Connect", a, c, d)
            }, this.connect = function(c) {
                null == a && arguments.length > 1 && ("string" == typeof arguments[0] || "number" == typeof arguments[0]) && "string" == typeof arguments[1] && (C = c.toString(), c = arguments[1]);
                var d = arguments[arguments.length - 1];
                if (this.is("connecting", "connected")) return b.warn("OT.Session: Cannot connect, the session is already " + this.state), this;
                if (q(), H("connecting"), this.token = e = !b.$.isFunction(c) && c, B ? B = !1 : F = b.$.uuid(), d && b.$.isFunction(d) && (this.once("sessionConnected", b.$.bind(d, null, null)), this.once("sessionConnectFailed", d)), null == C || b.$.isFunction(C)) return setTimeout(b.$.bind(g, this, "API Key is undefined. You must pass an API Key to initSession.", b.ExceptionCodes.AUTHENTICATION_ERROR)), this;
                if (this.logConnectivityEvent("Attempt"), !E || b.$.isObject(E) || b.$.isArray(E)) {
                    var f;
                    return E ? (f = "SessionID is not a string. You must use string as the session ID passed into OT.initSession().", E = E.toString()) : f = "SessionID is undefined. You must pass a sessionID to initSession.", setTimeout(b.$.bind(g, this, f, b.ExceptionCodes.INVALID_SESSION_ID)), this.logConnectivityEvent("Failure", {
                        reason: "ConnectToSession",
                        code: b.ExceptionCodes.INVALID_SESSION_ID,
                        message: f
                    }), this
                }
                return this.apiKey = C = C.toString(), 0 === b.APIKEY.length && (b.APIKEY = C), w.call(this), this
            };
            var I = b.$.bind(function(a) {
                f && f.isNot("disconnected") ? f.isNot("disconnecting") && (H("disconnecting"), f.disconnect(a)) : r()
            }, this);
            this.disconnect = function(a) {
                I(void 0 !== a ? a : !0)
            }, this.destroy = function(a) {
                this.streams.destroy(), this.connections.destroy(), this.archives.destroy(), I("unloaded" !== a)
            }, this.publish = function(a, c, d) {
                if ("function" == typeof a && (d = a, a = void 0), "function" == typeof c && (d = c, c = void 0), this.isNot("connected")) return b.analytics.logError(1010, "OT.exception", "We need to be connected before you can publish", null, {
                    action: "Publish",
                    variation: "Failure",
                    payload: {
                        reason: "unconnected",
                        code: b.ExceptionCodes.NOT_CONNECTED,
                        message: "We need to be connected before you can publish"
                    },
                    sessionId: E,
                    streamId: a && a.stream ? a.stream.id : null,
                    partnerId: C
                }), d && b.$.isFunction(d) && A(b.ExceptionCodes.NOT_CONNECTED, "We need to be connected before you can publish", d), null;
                if (!y("publish")) {
                    var e = "This token does not allow publishing. The role must be at least `publisher` to enable this functionality",
                        f = {
                            reason: "permission",
                            code: b.ExceptionCodes.UNABLE_TO_PUBLISH,
                            message: e
                        };
                    return this.logEvent("publish", "Failure", f), A(b.ExceptionCodes.UNABLE_TO_PUBLISH, e, d), null
                }
                if (!a || "string" == typeof a || b.$.isElementNode(a)) a = b.initPublisher(a, c);
                else {
                    if (!(a instanceof b.Publisher)) return void A(b.ExceptionCodes.UNABLE_TO_PUBLISH, "Session.publish :: First parameter passed in is neither a string nor an instance of the Publisher", d);
                    "session" in a && a.session && "sessionId" in a.session && b.warn(a.session.sessionId === this.sessionId ? "Cannot publish " + a.guid() + " again to " + this.sessionId + ". Please call session.unpublish(publisher) first." : "Cannot publish " + a.guid() + " publisher already attached to " + a.session.sessionId + ". Please call session.unpublish(publisher) first.")
                }
                return a.once("publishComplete", function(a) {
                    return a ? void A(b.ExceptionCodes.UNABLE_TO_PUBLISH, "Session.publish :: " + a.message, d) : void(d && b.$.isFunction(d) && d.apply(null, arguments))
                }), a._.publishToSession(this), a
            }, this.unpublish = function(a) {
                return a ? void a._.unpublishFromSession(this, "unpublished") : void b.error("OT.Session.unpublish: publisher parameter missing.")
            }, this.subscribe = function(a, c, d, e) {
                if ("function" == typeof c && (e = c, c = void 0, d = void 0), "function" == typeof d && (e = d, d = void 0), !this.connection || !this.connection.connectionId) return void A(b.ExceptionCodes.UNABLE_TO_SUBSCRIBE, "Session.subscribe :: Connection required to subscribe", e);
                if (!a) return void A(b.ExceptionCodes.UNABLE_TO_SUBSCRIBE, "Session.subscribe :: stream cannot be null", e);
                if (!a.hasOwnProperty("streamId")) return void A(b.ExceptionCodes.UNABLE_TO_SUBSCRIBE, "Session.subscribe :: invalid stream object", e);
                var f = new b.Subscriber(c, b.$.extend(d || {}, {
                    stream: a,
                    session: this
                }), function(a) {
                    if (a) {
                        var c, d, f = [400, 403];
                        !a.code && b.$.arrayIndexOf(f, a.code) > -1 ? (c = b.OT.ExceptionCodes.UNABLE_TO_SUBSCRIBE, d = "Session.subscribe :: " + a.message) : (c = b.ExceptionCodes.UNEXPECTED_SERVER_RESPONSE, d = "Unexpected server response. Try this operation again later."), A(c, d, e)
                    } else e && b.$.isFunction(e) && e.apply(null, arguments)
                });
                return b.subscribers.add(f), f
            }, this.unsubscribe = function(a) {
                if (!a) {
                    var c = "OT.Session.unsubscribe: subscriber cannot be null";
                    throw b.error(c), new Error(c)
                }
                return a.stream ? (b.debug("OT.Session.unsubscribe: subscriber " + a.id), a.destroy(), !0) : (b.warn("OT.Session.unsubscribe:: tried to unsubscribe a subscriber that had no stream"), !1)
            }, this.getSubscribersForStream = function(a) {
                return b.subscribers.where({
                    streamId: a.id
                })
            }, this.getPublisherForStream = function(a) {
                var c, d;
                if ("string" == typeof a) c = a;
                else {
                    if ("object" != typeof a || !a || !a.hasOwnProperty("id")) throw d = "Session.getPublisherForStream :: Invalid stream type", b.error(d), new Error(d);
                    c = a.id
                }
                return b.publishers.where({
                    streamId: c
                })[0]
            }, this._ = {
                jsepCandidateP2p: function(a, b, c) {
                    return f.jsepCandidateP2p(a, b, c)
                },
                jsepCandidate: function(a, b) {
                    return f.jsepCandidate(a, b)
                },
                jsepOffer: function(a, b) {
                    return f.jsepOffer(a, b)
                },
                jsepOfferP2p: function(a, b, c) {
                    return f.jsepOfferP2p(a, b, c)
                },
                jsepAnswer: function(a, b) {
                    return f.jsepAnswer(a, b)
                },
                jsepAnswerP2p: function(a, b, c) {
                    return f.jsepAnswerP2p(a, b, c)
                },
                dispatchSignal: b.$.bind(function(a, c, d) {
                    var e = new b.SignalEvent(c, d, a);
                    e.target = this, this.trigger(b.Event.names.SIGNAL, e), c && this.dispatchEvent(e)
                }, this),
                subscriberCreate: function(a, b, c, d) {
                    return f.subscriberCreate(a.id, b.widgetId, c, d)
                },
                subscriberDestroy: function(a, b) {
                    return f.subscriberDestroy(a.id, b.widgetId)
                },
                subscriberUpdate: function(a, b, c) {
                    return f.subscriberUpdate(a.id, b.widgetId, c)
                },
                subscriberChannelUpdate: function(a, b, c, d) {
                    return f.subscriberChannelUpdate(a.id, b.widgetId, c.id, d)
                },
                streamCreate: function(a, c, d, e, g) {
                    f.streamCreate(a, c, d, e, b.Config.get("bitrates", "min", b.APIKEY), b.Config.get("bitrates", "max", b.APIKEY), g)
                },
                streamDestroy: function(a) {
                    f.streamDestroy(a)
                },
                streamChannelUpdate: function(a, b, c) {
                    f.streamChannelUpdate(a.id, b.id, c)
                }
            }, this.signal = function(a, c) {
                var d = a,
                    e = c;
                if (b.$.isFunction(d) && (e = d, d = null), this.isNot("connected")) {
                    var g = "Unable to send signal - you are not connected to the session.";
                    return void A(500, g, e)
                }
                f.signal(d, e, this.logEvent), a && a.data && "string" != typeof a.data && b.warn("Signaling of anything other than Strings is deprecated. Please update the data property to be a string.")
            }, this.forceDisconnect = function(a, c) {
                if (this.isNot("connected")) {
                    var d = "Cannot call forceDisconnect(). You are not connected to the session.";
                    return void A(b.ExceptionCodes.NOT_CONNECTED, d, c)
                }
                var e = "This token does not allow forceDisconnect. The role must be at least `moderator` to enable this functionality";
                if (y("forceDisconnect")) {
                    var g = "string" == typeof a ? a : a.id;
                    f.forceDisconnect(g, function(a) {
                        a ? A(b.ExceptionCodes.UNABLE_TO_FORCE_DISCONNECT, e, c) : c && b.$.isFunction(c) && c.apply(null, arguments)
                    })
                } else A(b.ExceptionCodes.UNABLE_TO_FORCE_DISCONNECT, e, c)
            }, this.forceUnpublish = function(a, c) {
                if (this.isNot("connected")) {
                    var d = "Cannot call forceUnpublish(). You are not connected to the session.";
                    return void A(b.ExceptionCodes.NOT_CONNECTED, d, c)
                }
                var e = "This token does not allow forceUnpublish. The role must be at least `moderator` to enable this functionality";
                if (y("forceUnpublish")) {
                    var g = "string" == typeof a ? this.streams.get(a) : a;
                    f.forceUnpublish(g.id, function(a) {
                        a ? A(b.ExceptionCodes.UNABLE_TO_FORCE_UNPUBLISH, e, c) : c && b.$.isFunction(c) && c.apply(null, arguments)
                    })
                } else A(b.ExceptionCodes.UNABLE_TO_FORCE_UNPUBLISH, e, c)
            }, this.getStateManager = function() {
                b.warn("Fixme: Have not implemented session.getStateManager")
            }, this.isConnected = function() {
                return this.is("connected")
            }, this.capabilities = new b.Capabilities([])
        };
        var M = {
            audio: !0,
            video: !0
        };
        b.Publisher = function(c) {
            if (!b.checkSystemRequirements()) return void b.upgradeSystemRequirements();
            var d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v = b.Publisher.nextId(),
                w = {},
                x = !1,
                y = [1, 7, 15, 30],
                z = b.$.hasCapabilities("webAudio"),
                A = c && ("screen" === c.videoSource || "window" === c.videoSource || "tab" === c.videoSource || "browser" === c.videoSource || "application" === c.videoSource),
                B = this;
            if (o = b.$.defaults(c || {}, {
                    publishAudio: A ? !1 : !0,
                    publishVideo: !0,
                    mirror: A ? !1 : !0,
                    showControls: !0,
                    fitMode: A ? "contain" : "cover",
                    audioFallbackEnabled: A ? !1 : !0,
                    maxResolution: A ? {
                        width: 1920,
                        height: 1920
                    } : void 0
                }), p = {
                    "320x240": {
                        width: 320,
                        height: 240
                    },
                    "640x480": {
                        width: 640,
                        height: 480
                    },
                    "1280x720": {
                        width: 1280,
                        height: 720
                    }
                }, A && "https:" !== a.location.protocol && b.warn("Screen Sharing typically requires pages to be loadever over HTTPS - unless this browser is configured locally to allow non-SSL pages, permission will be denied without user input."), q = {
                    timeStamp: b.$.now()
                }, b.$.eventing(this), !A && z) {
                t = new b.AnalyserAudioLevelSampler(b.audioContext());
                var C = new b.IntervalRunner(function() {
                    t.sample(function(a) {
                        b.$.requestAnimationFrame(function() {
                            B.dispatchEvent(new b.AudioLevelUpdatedEvent(a))
                        })
                    })
                }, 60);
                this.on({
                    "audioLevelUpdated:added": function(a) {
                        1 === a && C.start()
                    },
                    "audioLevelUpdated:removed": function(a) {
                        0 === a && C.stop()
                    }
                })
            }
            var D = function(a, c, d, e) {
                    b.analytics.logEvent({
                        action: a,
                        variation: c,
                        payload: d,
                        sessionId: j ? j.sessionId : null,
                        connectionId: j && j.isConnected() ? j.connection.connectionId : null,
                        partnerId: j ? j.apiKey : b.APIKEY,
                        streamId: h
                    }, e)
                },
                E = function(a, c) {
                    "Attempt" !== a && u || (u = new b.ConnectivityAttemptPinger({
                        action: "Publish",
                        sessionId: j ? j.sessionId : null,
                        connectionId: j && j.isConnected() ? j.connection.connectionId : null,
                        partnerId: j ? j.apiKey : b.APIKEY,
                        streamId: h
                    })), "Failure" === a && "Non-fatal" !== c.reason && u.setVariation(a), D("Publish", a, c)
                },
                F = b.$.bind(function(a, c) {
                    var d = {
                        streamType: "WebRTC",
                        sessionId: j ? j.sessionId : null,
                        connectionId: j && j.isConnected() ? j.connection.connectionId : null,
                        partnerId: j ? j.apiKey : b.APIKEY,
                        streamId: h,
                        width: e ? Number(b.$.width(e.domElement).replace("px", "")) : void 0,
                        height: e ? Number(b.$.height(e.domElement).replace("px", "")) : void 0,
                        version: b.properties.version,
                        mediaServerName: j ? j.sessionInfo.messagingServer : null,
                        p2pFlag: j ? j.sessionInfo.p2pEnabled : !1,
                        duration: k ? (new Date).getTime() - k.getTime() : 0,
                        remoteConnectionId: a.id
                    };
                    b.analytics.logQOS(b.$.extend(d, c)), this.trigger("qos", c)
                }, this),
                G = function(a) {
                    b.error("Publisher State Change Failed: ", a.message), b.debug(a)
                },
                H = b.$.bind(function() {
                    r.isDestroyed() || (b.debug("OT.Publisher.onLoaded"), r.set("MediaBound"), e.loading(this.session ? !g : !1), x = !0, Y.call(this), this.trigger("initSuccess"), this.trigger("loaded", this))
                }, this),
                I = b.$.bind(function(a) {
                    var c = b.ExceptionCodes.P2P_CONNECTION_FAILED,
                        d = {
                            reason: "Publisher PeerConnection Error: ",
                            code: c,
                            message: a
                        };
                    E("Failure", d), r.set("Failed"), this.trigger("publishComplete", new b.Error(c, "Publisher PeerConnection Error: " + a)), b.handleJsException("Publisher PeerConnection Error: " + a, b.ExceptionCodes.P2P_CONNECTION_FAILED, {
                        session: j,
                        target: this
                    })
                }, this),
                J = b.$.bind(function(a) {
                    b.debug("OT.Publisher.onStreamAvailable"), r.set("BindingMedia"), U(), i = a, l = new b.Microphone(i, !o.publishAudio), this.publishVideo(o.publishVideo && i.getVideoTracks().length > 0), this.accessAllowed = !0, this.dispatchEvent(new b.Event(b.Event.names.ACCESS_ALLOWED, !1));
                    var c = {
                        muted: !0,
                        error: Q
                    };
                    f = e.bindVideo(i, c, function(a) {
                        return a ? void I(a) : void H()
                    }), t && i.getAudioTracks().length > 0 && t.webRTCStream(i)
                }, this),
                K = b.$.bind(function(a) {
                    b.error("OT.Publisher.onStreamAvailableError " + a.name + ": " + a.message), r.set("Failed"), this.trigger("publishComplete", new b.Error(b.ExceptionCodes.UNABLE_TO_PUBLISH, a.message)), e && e.destroy();
                    var c = {
                        reason: "GetUserMedia",
                        code: b.ExceptionCodes.UNABLE_TO_PUBLISH,
                        message: "Publisher failed to access camera/mic: " + a.message
                    };
                    E("Failure", c), b.handleJsException(c.reason, c.code, {
                        session: j,
                        target: this
                    })
                }, this),
                L = b.$.bind(function(a) {
                    b.error("OT.Publisher.onScreenSharingError " + a.message), r.set("Failed"), this.trigger("publishComplete", new b.Error(b.ExceptionCodes.UNABLE_TO_PUBLISH, "Screensharing: " + a.message));
                    var c = {
                        reason: "ScreenSharing",
                        message: a.message
                    };
                    E("Failure", c)
                }, this),
                N = b.$.bind(function(a) {
                    b.error("OT.Publisher.onStreamAvailableError Permission Denied"), r.set("Failed");
                    var c = "Publisher Access Denied: Permission Denied" + (a.message ? ": " + a.message : ""),
                        d = b.ExceptionCodes.UNABLE_TO_PUBLISH;
                    this.trigger("publishComplete", new b.Error(d, c));
                    var e = {
                        reason: "GetUserMedia",
                        code: d,
                        message: c
                    };
                    E("Failure", e), this.dispatchEvent(new b.Event(b.Event.names.ACCESS_DENIED))
                }, this),
                O = b.$.bind(function() {
                    D("accessDialog", "Opened"), this.dispatchEvent(new b.Event(b.Event.names.ACCESS_DIALOG_OPENED, !0))
                }, this),
                P = b.$.bind(function() {
                    D("accessDialog", "Closed"), this.dispatchEvent(new b.Event(b.Event.names.ACCESS_DIALOG_CLOSED, !1))
                }, this),
                Q = b.$.bind(function(a, c) {
                    b.error("OT.Publisher.onVideoError");
                    var d = c + (a ? " (" + a + ")" : "");
                    D("stream", null, {
                        reason: "Publisher while playing stream: " + d
                    }), r.set("Failed"), r.isAttemptingToPublish() ? this.trigger("publishComplete", new b.Error(b.ExceptionCodes.UNABLE_TO_PUBLISH, d)) : this.trigger("error", d), b.handleJsException("Publisher error playing stream: " + d, b.ExceptionCodes.UNABLE_TO_PUBLISH, {
                        session: j,
                        target: this
                    })
                }, this),
                R = b.$.bind(function(a) {
                    b.debug("OT.Subscriber has been disconnected from the Publisher's PeerConnection"), this.cleanupSubscriber(a.remoteConnection().id)
                }, this),
                S = b.$.bind(function(a, c, d, e) {
                    var f;
                    f = "ICEWorkflow" === e ? b.ExceptionCodes.PUBLISHER_ICE_WORKFLOW_FAILED : b.ExceptionCodes.UNABLE_TO_PUBLISH;
                    var g = {
                        reason: e ? e : "PeerConnectionError",
                        code: f,
                        message: (e ? e : "") + ":Publisher PeerConnection with connection " + (d && d.remoteConnection && d.remoteConnection().id) + " failed: " + c,
                        hasRelayCandidates: d.hasRelayCandidates()
                    };
                    r.isPublishing() ? g.reason = "Non-fatal" : this.trigger("publishComplete", new b.Error(b.ExceptionCodes.UNABLE_TO_PUBLISH, g.message)), E("Failure", g), b.handleJsException("Publisher PeerConnection Error: " + c, f, {
                        session: j,
                        target: this
                    }), delete w[d.remoteConnection().id]
                }, this),
                T = b.$.bind(function(a) {
                    this.stream = g = a, g.on("destroyed", this.disconnect, this), r.set("Publishing"), e.loading(!x), k = new Date, this.trigger("publishComplete", null, this), this.dispatchEvent(new b.StreamEvent("streamCreated", a, null, !1));
                    var c = {
                        streamType: "WebRTC"
                    };
                    E("Success", c)
                }, this),
                U = function() {
                    i && (i.stop(), i = null)
                },
                V = b.$.bind(function(a) {
                    var c = w[a.id];
                    if (!c) {
                        var d = b.$.now();
                        D("createPeerConnection", "Attempt"), a.on("destroyed", b.$.bind(this.cleanupSubscriber, this, a.id)), c = w[a.id] = new b.PublisherPeerConnection(a, j, h, i, o.channels), c.on({
                            connected: function() {
                                var a = {
                                    pcc: parseInt(b.$.now() - d, 10),
                                    hasRelayCandidates: c.hasRelayCandidates()
                                };
                                D("createPeerConnection", "Success", a)
                            },
                            disconnected: R,
                            error: S,
                            qos: F
                        }, this), c.init(s)
                    }
                    return c
                }, this),
                W = function(a) {
                    if (a === !1) return "off";
                    var b = this.getStyle("buttonDisplayMode");
                    return b === !1 ? "on" : b
                },
                X = function(a, b) {
                    if (m) switch (a) {
                        case "nameDisplayMode":
                            m.name.setDisplayMode(b), m.backingBar.setNameMode(b);
                            break;
                        case "showArchiveStatus":
                            D("showArchiveStatus", "styleChange", {
                                mode: b ? "on" : "off"
                            }), m.archive.setShowArchiveStatus(b);
                            break;
                        case "buttonDisplayMode":
                            m.muteButton.setDisplayMode(b), m.backingBar.setMuteMode(b);
                            break;
                        case "audioLevelDisplayMode":
                            m.audioLevel.setDisplayMode(b);
                            break;
                        case "backgroundImageURI":
                            e.setBackgroundImageURI(b)
                    }
                },
                Y = function() {
                    this.getStyle("showArchiveStatus") || D("showArchiveStatus", "createChrome", {
                        mode: "off"
                    });
                    var a = {
                        backingBar: new b.Chrome.BackingBar({
                            nameMode: o.name ? this.getStyle("nameDisplayMode") : "off",
                            muteMode: W.call(this, this.getStyle("buttonDisplayMode"))
                        }),
                        name: new b.Chrome.NamePanel({
                            name: o.name,
                            mode: this.getStyle("nameDisplayMode")
                        }),
                        muteButton: new b.Chrome.MuteButton({
                            muted: o.publishAudio === !1,
                            mode: W.call(this, this.getStyle("buttonDisplayMode"))
                        }),
                        archive: new b.Chrome.Archiving({
                            show: this.getStyle("showArchiveStatus"),
                            archiving: !1
                        })
                    };
                    if (z) {
                        var c = new b.AudioLevelTransformer,
                            d = function(a) {
                                n.setValue(c.transform(a.audioLevel))
                            };
                        n = new b.Chrome.AudioLevelMeter({
                            mode: this.getStyle("audioLevelDisplayMode"),
                            onActivate: function() {
                                B.on("audioLevelUpdated", d)
                            },
                            onPassivate: function() {
                                B.off("audioLevelUpdated", d)
                            }
                        }), a.audioLevel = n
                    }
                    m = new b.Chrome({
                        parent: e.domElement
                    }).set(a).on({
                        muted: b.$.bind(this.publishAudio, this, !1),
                        unmuted: b.$.bind(this.publishAudio, this, !0)
                    }), n && "auto" === this.getStyle("audioLevelDisplayMode") && n[e.audioOnly() ? "show" : "hide"]()
                },
                Z = b.$.bind(function() {
                    m && (m.destroy(), m = null), this.disconnect(), l = null, f && (f.destroy(), f = null), U(), e && (e.destroy(), e = null), j && this._.unpublishFromSession(j, "reset"), this.id = d = null, this.stream = g = null, x = !1, this.session = j = null, r.isDestroyed() || r.set("NotPublishing")
                }, this);
            b.StylableComponent(this, {
                showArchiveStatus: !0,
                nameDisplayMode: "auto",
                buttonDisplayMode: "auto",
                audioLevelDisplayMode: A ? "off" : "auto",
                backgroundImageURI: null
            }, o.showControls, function(a) {
                D("SetStyle", "Publisher", a, .1)
            });
            var $ = function(a) {
                e && (e.audioOnly(a), e.showPoster(a)), n && "auto" === B.getStyle("audioLevelDisplayMode") && n[a ? "show" : "hide"]()
            };
            this.publish = function(a) {
                if (b.debug("OT.Publisher: publish"), (r.isAttemptingToPublish() || r.isPublishing()) && Z(), r.set("GetUserMedia"), o.constraints) b.warn("You have passed your own constraints not using ours");
                else if (o.constraints = b.$.clone(M), A && (null != o.audioSource && b.warn("Invalid audioSource passed to Publisher - when using screen sharing no audioSource may be used"), o.audioSource = null), null === o.audioSource || o.audioSource === !1 ? (o.constraints.audio = !1, o.publishAudio = !1) : ("object" == typeof o.audioSource && (null != o.audioSource.deviceId ? o.audioSource = o.audioSource.deviceId : b.warn("Invalid audioSource passed to Publisher. Expected either a device ID")), o.audioSource && ("object" != typeof o.constraints.audio && (o.constraints.audio = {}), o.constraints.audio.mandatory || (o.constraints.audio.mandatory = {}), o.constraints.audio.optional || (o.constraints.audio.optional = []), o.constraints.audio.mandatory.sourceId = o.audioSource)), null === o.videoSource || o.videoSource === !1) o.constraints.video = !1, o.publishVideo = !1;
                else {
                    "object" == typeof o.videoSource && null == o.videoSource.deviceId && (b.warn("Invalid videoSource passed to Publisher. Expected either a device ID or device."), o.videoSource = null);
                    var f = function() {
                        "object" != typeof o.constraints.video && (o.constraints.video = {}), o.constraints.video.mandatory || (o.constraints.video.mandatory = {}), o.constraints.video.optional || (o.constraints.video.optional = [])
                    };
                    if (o.videoSource) {
                        f();
                        var h = o.constraints.video.mandatory;
                        A || (null != o.videoSource.deviceId ? h.sourceId = o.videoSource.deviceId : h.sourceId = o.videoSource)
                    }
                    o.resolution && (p.hasOwnProperty(o.resolution) ? (o.videoDimensions = p[o.resolution], f(), "Chrome" === b.$.env.name && (o.constraints.video.optional = o.constraints.video.optional.concat([{
                        minWidth: o.videoDimensions.width
                    }, {
                        maxWidth: o.videoDimensions.width
                    }, {
                        minHeight: o.videoDimensions.height
                    }, {
                        maxHeight: o.videoDimensions.height
                    }]))) : b.warn("Invalid resolution passed to the Publisher. Got: " + o.resolution + ' expecting one of "' + b.$.keys(p).join('","') + '"')), o.maxResolution && (f(), o.maxResolution.width > 1920 && (b.warn("Invalid maxResolution passed to the Publisher. maxResolution.width must be less than or equal to 1920"), o.maxResolution.width = 1920), o.maxResolution.height > 1920 && (b.warn("Invalid maxResolution passed to the Publisher. maxResolution.height must be less than or equal to 1920"), o.maxResolution.height = 1920), o.videoDimensions = o.maxResolution, "Chrome" === b.$.env.name && (f(), o.constraints.video.mandatory.maxWidth = o.videoDimensions.width, o.constraints.video.mandatory.maxHeight = o.videoDimensions.height)), void 0 !== o.frameRate && -1 === b.$.arrayIndexOf(y, o.frameRate) ? (b.warn("Invalid frameRate passed to the publisher got: " + o.frameRate + " expecting one of " + y.join(",")), delete o.frameRate) : o.frameRate && (f(), o.constraints.video.optional = o.constraints.video.optional.concat([{
                        minFrameRate: o.frameRate
                    }, {
                        maxFrameRate: o.frameRate
                    }]))
                }
                return o.style && this.setStyle(o.style, null, !0), o.name && (o.name = o.name.toString()), o.classNames = "OT_root OT_publisher", b.onLoad(function() {
                    e = new b.WidgetView(a, o), B.id = d = e.domId(), B.element = e.domElement, e.on("videoDimensionsChanged", function(a, c) {
                        g && g.setVideoDimensions(c.width, c.height), B.dispatchEvent(new b.VideoDimensionsChangedEvent(B, a, c))
                    }), e.on("mediaStopped", function() {
                        var a = new b.MediaStoppedEvent(B);
                        B.dispatchEvent(a, function() {
                            a.isDefaultPrevented() || (j ? B._.unpublishFromSession(j, "mediaStopped") : B.destroy("mediaStopped"))
                        })
                    }), b.$.waterfall([function(a) {
                        A ? b.checkScreenSharingCapability(function(d) {
                            if (d.supported)
                                if (d.extensionRegistered === !1) L(new Error("Screen Sharing suppor in this browser requires an extension, but one has not been registered."));
                                else if (d.extensionInstalled === !1) L(new Error("Screen Sharing suppor in this browser requires an extension, but the extension is not installed."));
                            else {
                                var e = b.pickScreenSharingHelper();
                                e.proto.getConstraintsShowsPermissionUI && O(), e.instance.getConstraints(c.videoSource, o.constraints, function(b, c) {
                                    e.proto.getConstraintsShowsPermissionUI && P(), b ? "PermissionDeniedError" === b.message ? N(b) : L(b) : (o.constraints = c, a())
                                })
                            } else L(new Error("Screen Sharing is not supported in this browser"))
                        }) : b.$.shouldAskForDevices(function(c) {
                            c.video || (b.warn("Setting video constraint to false, there are no video sources"), o.constraints.video = !1), c.audio || (b.warn("Setting audio constraint to false, there are no audio sources"), o.constraints.audio = !1), a()
                        })
                    }, function() {
                        r.isDestroyed() || b.$.getUserMedia(o.constraints, J, K, O, P, N)
                    }])
                }, this), this
            }, this.publishAudio = function(a) {
                return o.publishAudio = a, l && l.muted(!a), m && m.muteButton.muted(!a), j && g && g.setChannelActiveState("audio", a), this
            }, this.publishVideo = function(a) {
                var b = o.publishVideo;
                if (o.publishVideo = a, j && g && o.publishVideo !== b && g.setChannelActiveState("video", a), i)
                    for (var c = i.getVideoTracks(), d = 0, e = c.length; e > d; ++d) c[d].setEnabled(a);
                return $(!a), this
            }, this.destroy = function(a, c) {
                return r.isDestroyed() ? void 0 : (r.set("Destroyed"), Z(), c !== !0 && this.dispatchEvent(new b.DestroyedEvent(b.Event.names.PUBLISHER_DESTROYED, this, a), b.$.bind(this.off, this)), this)
            }, this.disconnect = function() {
                for (var a in w) this.cleanupSubscriber(a)
            }, this.cleanupSubscriber = function(a) {
                var b = w[a];
                b && (b.destroy(), delete w[a], D("disconnect", "PeerConnection", {
                    subscriberConnection: a
                }))
            }, this.processMessage = function(a, c, d) {
                switch (b.debug("OT.Publisher.processMessage: Received " + a + " from " + c.id), b.debug(d), a) {
                    case "unsubscribe":
                        this.cleanupSubscriber(d.content.connection.id);
                        break;
                    default:
                        var e = V(c);
                        e.processMessage(a, d)
                }
            }, this.getImgData = function() {
                return x ? f.imgData() : (b.error("OT.Publisher.getImgData: Cannot getImgData before the Publisher is publishing."), null)
            }, this._ = {
                publishToSession: b.$.bind(function(a) {
                    this.session = j = a, h = b.$.uuid();
                    var c = function() {
                        var c, d;
                        if (j) {
                            r.set("PublishingToSession");
                            var e = b.$.bind(function(a, c, d) {
                                if (a) {
                                    var e, f, g = [403, 404, 409];
                                    a.code && b.$.arrayIndexOf(g, a.code) > -1 ? (e = b.ExceptionCodes.UNABLE_TO_PUBLISH, f = a.message) : (e = b.ExceptionCodes.UNEXPECTED_SERVER_RESPONSE, f = "Unexpected server response. Try this operation again later.");
                                    var i = {
                                        reason: "Publish",
                                        code: e,
                                        message: f
                                    };
                                    return E("Failure", i), r.isAttemptingToPublish() && this.trigger("publishComplete", new b.Error(e, f)), void b.handleJsException(a.message, e, {
                                        session: j,
                                        target: this
                                    })
                                }
                                this.streamId = h = c, s = b.Raptor.parseIceServers(d)
                            }, this);
                            o.videoDimensions ? (c = Math.min(o.videoDimensions.width, f.videoWidth() || 640), d = Math.min(o.videoDimensions.height, f.videoHeight() || 480)) : (c = f.videoWidth() || 640, d = f.videoHeight() || 480);
                            var g = [];
                            null !== o.videoSource && o.videoSource !== !1 && g.push(new b.StreamChannel({
                                id: "video1",
                                type: "video",
                                active: o.publishVideo,
                                orientation: b.VideoOrientation.ROTATED_NORMAL,
                                frameRate: o.frameRate,
                                width: c,
                                height: d,
                                source: A ? "screen" : "camera",
                                fitMode: o.fitMode
                            })), null !== o.audioSource && o.audioSource !== !1 && g.push(new b.StreamChannel({
                                id: "audio1",
                                type: "audio",
                                active: o.publishAudio
                            })), a._.streamCreate(o.name || "", h, o.audioFallbackEnabled, g, e)
                        }
                    };
                    return x ? c.call(this) : this.on("initSuccess", c, this), E("Attempt", {
                        streamType: "WebRTC"
                    }), this
                }, this),
                unpublishFromSession: b.$.bind(function(a, c) {
                    return j && a.id === j.id ? (a.isConnected() && this.stream && a._.streamDestroy(this.stream.id), this.disconnect(), this.session = j = null, r.isDestroyed() || r.set("MediaBound"), u && u.stop(), D("unpublish", "Success", {
                        sessionId: a.id
                    }), this._.streamDestroyed(c), this) : (b.warn("The publisher " + v + " is trying to unpublish from a session " + a.id + " it is not attached to (it is attached to " + (j && j.id || "no session") + ")"), this)
                }, this),
                streamDestroyed: b.$.bind(function(a) {
                    if (b.$.arrayIndexOf(["reset"], a) < 0) {
                        var c = new b.StreamEvent("streamDestroyed", g, a, !0),
                            d = b.$.bind(function() {
                                c.isDefaultPrevented() || this.destroy()
                            }, this);
                        this.dispatchEvent(c, d)
                    }
                }, this),
                archivingStatus: b.$.bind(function(a) {
                    return m && m.archive.setArchiving(a), a
                }, this),
                webRtcStream: function() {
                    return i
                },
                switchTracks: function() {
                    return new Promise(function(a, c) {
                        b.$.getUserMedia(o.constraints, function(d) {
                            U(), i = d, l = new b.Microphone(i, !o.publishAudio);
                            var g = {
                                muted: !0,
                                error: Q
                            };
                            f = e.bindVideo(i, g, function(a) {
                                a && (I(a), c(a))
                            }), t && i.getAudioTracks().length > 0 && t.webRTCStream(i);
                            var h = [];
                            Object.keys(w).forEach(function(a) {
                                var b = w[a];
                                b.getSenders().forEach(function(a) {
                                    "audio" === a.track.kind && d.getAudioTracks().length ? h.push(a.switchTracks(d.getAudioTracks()[0])) : "video" === a.track.kind && d.getVideoTracks().length && h.push(a.switchTracks(d.getVideoTracks()[0]))
                                })
                            }), Promise.all(h).then(a, c)
                        }, function(a) {
                            K(a), c(a)
                        }, O, P, function(a) {
                            N(a), c(a)
                        })
                    })
                },
                switchAcquiredWindow: function(a) {
                    if ("Firefox" !== b.$.env.name || b.$.env.version < 38) throw new Error("switchAcquiredWindow is an experimental method and is not supported bythe current platform");
                    "undefined" != typeof a && (o.constraints.video.browserWindow = a), D("SwitchAcquiredWindow", "Attempt", {
                        constraints: o.constraints
                    });
                    var c = B._.switchTracks();
                    return c.then(function() {
                        D("SwitchAcquiredWindow", "Success", {
                            constraints: o.constraints
                        })
                    }, function(a) {
                        D("SwitchAcquiredWindow", "Failure", {
                            error: a,
                            constraints: o.constraints
                        })
                    }), c
                },
                getDataChannel: function(a, c, d) {
                    var e = w[b.$.keys(w)[0]];
                    return e ? void e.getDataChannel(a, c, d) : void d(new b.$.Error("Cannot create a DataChannel before there is a subscriber."))
                }
            }, this.detectDevices = function() {
                b.warn("Fixme: Haven't implemented detectDevices")
            }, this.detectMicActivity = function() {
                b.warn("Fixme: Haven't implemented detectMicActivity")
            }, this.getEchoCancellationMode = function() {
                return b.warn("Fixme: Haven't implemented getEchoCancellationMode"), "fullDuplex"
            }, this.setMicrophoneGain = function() {
                b.warn("Fixme: Haven't implemented setMicrophoneGain")
            }, this.getMicrophoneGain = function() {
                return b.warn("Fixme: Haven't implemented getMicrophoneGain"), .5
            }, this.setCamera = function() {
                b.warn("Fixme: Haven't implemented setCamera")
            }, this.setMicrophone = function() {
                b.warn("Fixme: Haven't implemented setMicrophone")
            }, this.guid = function() {
                return v
            }, this.videoElement = function() {
                return f.domElement()
            }, this.setStream = T, this.isWebRTC = !0, this.isLoading = function() {
                return e && e.loading()
            }, this.videoWidth = function() {
                return f.videoWidth()
            }, this.videoHeight = function() {
                return f.videoHeight()
            }, this.on("styleValueChanged", X, this), r = new b.PublishingState(G), this.accessAllowed = !1
        }, b.Publisher.nextId = b.$.uuid, b.initSession = function(a, c) {
            null == c && (c = a, a = null), b.$.isArray(c) && 1 === c.length && (c = c[0]);
            var d = b.sessions.get(c);
            return d || (d = new b.Session(a, c), b.sessions.add(d)), d
        }, b.initPublisher = function(a, c, d) {
            b.debug("OT.initPublisher(" + a + ")"), "string" != typeof a || document.getElementById(a) || (a = c, c = d, d = arguments[3]), "function" == typeof a ? (d = a, c = void 0, a = void 0) : b.$.isObject(a) && !b.$.isElementNode(a) && (d = c, c = a, a = void 0), "function" == typeof c && (d = c, c = void 0);
            var e = new b.Publisher(c);
            b.publishers.add(e);
            var f = function(a) {
                    a ? b.dispatchError(a.code, a.message, d, e.session) : d && b.$.isFunction(d) && d.apply(null, arguments)
                },
                g = function(a) {
                    e.off("publishComplete", h), f(a)
                },
                h = function(a) {
                    e.off("initSuccess", g), a && f(a)
                };
            return e.once("initSuccess", g), e.once("publishComplete", h), e.publish(a), e
        }, b.getDevices = function(a) {
            b.$.getMediaDevices(a)
        }, b.reportIssue = function() {
            b.warn("ToDo: haven't yet implemented OT.reportIssue")
        }, b.components = {}, b.onUnload(function() {
            b.publishers.destroy(), b.subscribers.destroy(), b.sessions.destroy("unloaded")
        }), F(b.properties.cssURL), "function" == typeof define && define.amd && define("TB", [], function() {
            return TB
        })
    }(a, a.OT)
}(window || exports);
//# sourceMappingURL=TB.js.map