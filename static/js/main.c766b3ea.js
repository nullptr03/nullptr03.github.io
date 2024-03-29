/*!For license information please see main.c766b3ea.js.LICENSE.txt*/ 
!function() {
	var e = {
        945: function(e) {
            e.exports = function(e) {
                function t(r) {
                    if (n[r]) return n[r].exports;
                    var a = n[r] = {
                        exports: {},
                        id: r,
                        loaded: !1
                    };
                    return e[r].call(a.exports, a, a.exports, t), a.loaded = !0, a.exports
                }
                var n = {};
                return t.m = e, t.c = n, t.p = "dist/", t(0)
            }([function(e, t, n) {
                "use strict";

                function r(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                var a = Object.assign || function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                        }
                        return e
                    },
                    l = (r(n(1)), n(6)),
                    i = r(l),
                    o = r(n(7)),
                    s = r(n(8)),
                    c = r(n(9)),
                    u = r(n(10)),
                    d = r(n(11)),
                    f = r(n(14)),
                    h = [],
                    m = !1,
                    p = {
                        offset: 120,
                        delay: 0,
                        easing: "ease",
                        duration: 400,
                        disable: !1,
                        once: !1,
                        startEvent: "DOMContentLoaded",
                        throttleDelay: 99,
                        debounceDelay: 50,
                        disableMutationObserver: !1
                    },
                    g = function() {
                        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (m = !0), m) return h = (0, d.default)(h, p), (0, u.default)(h, p.once), h
                    },
                    v = function() {
                        h = (0, f.default)(), g()
                    },
                    b = function() {
                        h.forEach((function(e, t) {
                            e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), e.node.removeAttribute("data-aos-delay")
                        }))
                    },
                    x = function(e) {
                        return !0 === e || "mobile" === e && c.default.mobile() || "phone" === e && c.default.phone() || "tablet" === e && c.default.tablet() || "function" == typeof e && !0 === e()
                    },
                    y = function(e) {
                        p = a(p, e), h = (0, f.default)();
                        var t = document.all && !window.atob;
                        return x(p.disable) || t ? b() : (p.disableMutationObserver || s.default.isSupported() || (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '), p.disableMutationObserver = !0), document.querySelector("body").setAttribute("data-aos-easing", p.easing), document.querySelector("body").setAttribute("data-aos-duration", p.duration), document.querySelector("body").setAttribute("data-aos-delay", p.delay), "DOMContentLoaded" === p.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 ? g(!0) : "load" === p.startEvent ? window.addEventListener(p.startEvent, (function() {
                            g(!0)
                        })) : document.addEventListener(p.startEvent, (function() {
                            g(!0)
                        })), window.addEventListener("resize", (0, o.default)(g, p.debounceDelay, !0)), window.addEventListener("orientationchange", (0, o.default)(g, p.debounceDelay, !0)), window.addEventListener("scroll", (0, i.default)((function() {
                            (0, u.default)(h, p.once)
                        }), p.throttleDelay)), p.disableMutationObserver || s.default.ready("[data-aos]", v), h)
                    };
                e.exports = {
                    init: y,
                    refresh: g,
                    refreshHard: v
                }
            }, function(e, t) {}, , , , , function(e, t) {
                (function(t) {
                    "use strict";

                    function n(e, t, n) {
                        function r(t) {
                            var n = p,
                                r = g;
                            return p = g = void 0, N = t, b = e.apply(r, n)
                        }

                        function l(e) {
                            return N = e, x = setTimeout(u, t), S ? r(e) : b
                        }

                        function i(e) {
                            var n = t - (e - y);
                            return _ ? j(n, v - (e - N)) : n
                        }

                        function s(e) {
                            var n = e - y;
                            return void 0 === y || n >= t || n < 0 || _ && e - N >= v
                        }

                        function u() {
                            var e = k();
                            return s(e) ? d(e) : void(x = setTimeout(u, i(e)))
                        }

                        function d(e) {
                            return x = void 0, E && p ? r(e) : (p = g = void 0, b)
                        }

                        function f() {
                            void 0 !== x && clearTimeout(x), N = 0, p = y = g = x = void 0
                        }

                        function h() {
                            return void 0 === x ? b : d(k())
                        }

                        function m() {
                            var e = k(),
                                n = s(e);
                            if (p = arguments, g = this, y = e, n) {
                                if (void 0 === x) return l(y);
                                if (_) return x = setTimeout(u, t), r(y)
                            }
                            return void 0 === x && (x = setTimeout(u, t)), b
                        }
                        var p, g, v, b, x, y, N = 0,
                            S = !1,
                            _ = !1,
                            E = !0;
                        if ("function" != typeof e) throw new TypeError(c);
                        return t = o(t) || 0, a(n) && (S = !!n.leading, v = (_ = "maxWait" in n) ? w(o(n.maxWait) || 0, t) : v, E = "trailing" in n ? !!n.trailing : E), m.cancel = f, m.flush = h, m
                    }

                    function r(e, t, r) {
                        var l = !0,
                            i = !0;
                        if ("function" != typeof e) throw new TypeError(c);
                        return a(r) && (l = "leading" in r ? !!r.leading : l, i = "trailing" in r ? !!r.trailing : i), n(e, t, {
                            leading: l,
                            maxWait: t,
                            trailing: i
                        })
                    }

                    function a(e) {
                        var t = "undefined" == typeof e ? "undefined" : s(e);
                        return !!e && ("object" == t || "function" == t)
                    }

                    function l(e) {
                        return !!e && "object" == ("undefined" == typeof e ? "undefined" : s(e))
                    }

                    function i(e) {
                        return "symbol" == ("undefined" == typeof e ? "undefined" : s(e)) || l(e) && y.call(e) == d
                    }

                    function o(e) {
                        if ("number" == typeof e) return e;
                        if (i(e)) return u;
                        if (a(e)) {
                            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                            e = a(t) ? t + "" : t
                        }
                        if ("string" != typeof e) return 0 === e ? e : +e;
                        e = e.replace(f, "");
                        var n = m.test(e);
                        return n || p.test(e) ? g(e.slice(2), n ? 2 : 8) : h.test(e) ? u : +e
                    }
                    var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        },
                        c = "Expected a function",
                        u = NaN,
                        d = "[object Symbol]",
                        f = /^\s+|\s+$/g,
                        h = /^[-+]0x[0-9a-f]+$/i,
                        m = /^0b[01]+$/i,
                        p = /^0o[0-7]+$/i,
                        g = parseInt,
                        v = "object" == ("undefined" == typeof t ? "undefined" : s(t)) && t && t.Object === Object && t,
                        b = "object" == ("undefined" == typeof self ? "undefined" : s(self)) && self && self.Object === Object && self,
                        x = v || b || Function("return this")(),
                        y = Object.prototype.toString,
                        w = Math.max,
                        j = Math.min,
                        k = function() {
                            return x.Date.now()
                        };
                    e.exports = r
                }).call(t, function() {
                    return this
                }())
            }, function(e, t) {
                (function(t) {
                    "use strict";

                    function n(e, t, n) {
                        function a(t) {
                            var n = p,
                                r = g;
                            return p = g = void 0, N = t, b = e.apply(r, n)
                        }

                        function l(e) {
                            return N = e, x = setTimeout(u, t), S ? a(e) : b
                        }

                        function o(e) {
                            var n = t - (e - k);
                            return _ ? w(n, v - (e - N)) : n
                        }

                        function c(e) {
                            var n = e - k;
                            return void 0 === k || n >= t || n < 0 || _ && e - N >= v
                        }

                        function u() {
                            var e = j();
                            return c(e) ? d(e) : void(x = setTimeout(u, o(e)))
                        }

                        function d(e) {
                            return x = void 0, E && p ? a(e) : (p = g = void 0, b)
                        }

                        function f() {
                            void 0 !== x && clearTimeout(x), N = 0, p = k = g = x = void 0
                        }

                        function h() {
                            return void 0 === x ? b : d(j())
                        }

                        function m() {
                            var e = j(),
                                n = c(e);
                            if (p = arguments, g = this, k = e, n) {
                                if (void 0 === x) return l(k);
                                if (_) return x = setTimeout(u, t), a(k)
                            }
                            return void 0 === x && (x = setTimeout(u, t)), b
                        }
                        var p, g, v, b, x, k, N = 0,
                            S = !1,
                            _ = !1,
                            E = !0;
                        if ("function" != typeof e) throw new TypeError(s);
                        return t = i(t) || 0, r(n) && (S = !!n.leading, v = (_ = "maxWait" in n) ? y(i(n.maxWait) || 0, t) : v, E = "trailing" in n ? !!n.trailing : E), m.cancel = f, m.flush = h, m
                    }

                    function r(e) {
                        var t = "undefined" == typeof e ? "undefined" : o(e);
                        return !!e && ("object" == t || "function" == t)
                    }

                    function a(e) {
                        return !!e && "object" == ("undefined" == typeof e ? "undefined" : o(e))
                    }

                    function l(e) {
                        return "symbol" == ("undefined" == typeof e ? "undefined" : o(e)) || a(e) && x.call(e) == u
                    }

                    function i(e) {
                        if ("number" == typeof e) return e;
                        if (l(e)) return c;
                        if (r(e)) {
                            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                            e = r(t) ? t + "" : t
                        }
                        if ("string" != typeof e) return 0 === e ? e : +e;
                        e = e.replace(d, "");
                        var n = h.test(e);
                        return n || m.test(e) ? p(e.slice(2), n ? 2 : 8) : f.test(e) ? c : +e
                    }
                    var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        },
                        s = "Expected a function",
                        c = NaN,
                        u = "[object Symbol]",
                        d = /^\s+|\s+$/g,
                        f = /^[-+]0x[0-9a-f]+$/i,
                        h = /^0b[01]+$/i,
                        m = /^0o[0-7]+$/i,
                        p = parseInt,
                        g = "object" == ("undefined" == typeof t ? "undefined" : o(t)) && t && t.Object === Object && t,
                        v = "object" == ("undefined" == typeof self ? "undefined" : o(self)) && self && self.Object === Object && self,
                        b = g || v || Function("return this")(),
                        x = Object.prototype.toString,
                        y = Math.max,
                        w = Math.min,
                        j = function() {
                            return b.Date.now()
                        };
                    e.exports = n
                }).call(t, function() {
                    return this
                }())
            }, function(e, t) {
                "use strict";

                function n(e) {
                    var t = void 0,
                        r = void 0;
                    for (t = 0; t < e.length; t += 1) {
                        if ((r = e[t]).dataset && r.dataset.aos) return !0;
                        if (r.children && n(r.children)) return !0
                    }
                    return !1
                }

                function r() {
                    return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
                }

                function a() {
                    return !!r()
                }

                function l(e, t) {
                    var n = window.document,
                        a = new(r())(i);
                    o = t, a.observe(n.documentElement, {
                        childList: !0,
                        subtree: !0,
                        removedNodes: !0
                    })
                }

                function i(e) {
                    e && e.forEach((function(e) {
                        var t = Array.prototype.slice.call(e.addedNodes),
                            r = Array.prototype.slice.call(e.removedNodes);
                        if (n(t.concat(r))) return o()
                    }))
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var o = function() {};
                t.default = {
                    isSupported: a,
                    ready: l
                }
            }, function(e, t) {
                "use strict";

                function n(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }

                function r() {
                    return navigator.userAgent || navigator.vendor || window.opera || ""
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var a = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }
                        return function(t, n, r) {
                            return n && e(t.prototype, n), r && e(t, r), t
                        }
                    }(),
                    l = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
                    i = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                    o = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
                    s = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                    c = function() {
                        function e() {
                            n(this, e)
                        }
                        return a(e, [{
                            key: "phone",
                            value: function() {
                                var e = r();
                                return !(!l.test(e) && !i.test(e.substr(0, 4)))
                            }
                        }, {
                            key: "mobile",
                            value: function() {
                                var e = r();
                                return !(!o.test(e) && !s.test(e.substr(0, 4)))
                            }
                        }, {
                            key: "tablet",
                            value: function() {
                                return this.mobile() && !this.phone()
                            }
                        }]), e
                    }();
                t.default = new c
            }, function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var n = function(e, t, n) {
                        var r = e.node.getAttribute("data-aos-once");
                        t > e.position ? e.node.classList.add("aos-animate") : "undefined" != typeof r && ("false" === r || !n && "true" !== r) && e.node.classList.remove("aos-animate")
                    },
                    r = function(e, t) {
                        var r = window.pageYOffset,
                            a = window.innerHeight;
                        e.forEach((function(e, l) {
                            n(e, a + r, t)
                        }))
                    };
                t.default = r
            }, function(e, t, n) {
                "use strict";

                function r(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var a = r(n(12)),
                    l = function(e, t) {
                        return e.forEach((function(e, n) {
                            e.node.classList.add("aos-init"), e.position = (0, a.default)(e.node, t.offset)
                        })), e
                    };
                t.default = l
            }, function(e, t, n) {
                "use strict";

                function r(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var a = r(n(13)),
                    l = function(e, t) {
                        var n = 0,
                            r = 0,
                            l = window.innerHeight,
                            i = {
                                offset: e.getAttribute("data-aos-offset"),
                                anchor: e.getAttribute("data-aos-anchor"),
                                anchorPlacement: e.getAttribute("data-aos-anchor-placement")
                            };
                        switch (i.offset && !isNaN(i.offset) && (r = parseInt(i.offset)), i.anchor && document.querySelectorAll(i.anchor) && (e = document.querySelectorAll(i.anchor)[0]), n = (0, a.default)(e).top, i.anchorPlacement) {
                            case "top-bottom":
                                break;
                            case "center-bottom":
                                n += e.offsetHeight / 2;
                                break;
                            case "bottom-bottom":
                                n += e.offsetHeight;
                                break;
                            case "top-center":
                                n += l / 2;
                                break;
                            case "bottom-center":
                                n += l / 2 + e.offsetHeight;
                                break;
                            case "center-center":
                                n += l / 2 + e.offsetHeight / 2;
                                break;
                            case "top-top":
                                n += l;
                                break;
                            case "bottom-top":
                                n += e.offsetHeight + l;
                                break;
                            case "center-top":
                                n += e.offsetHeight / 2 + l
                        }
                        return i.anchorPlacement || i.offset || isNaN(t) || (r = t), n + r
                    };
                t.default = l
            }, function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var n = function(e) {
                    for (var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);) t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0), n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0), e = e.offsetParent;
                    return {
                        top: n,
                        left: t
                    }
                };
                t.default = n
            }, function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var n = function(e) {
                    return e = e || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(e, (function(e) {
                        return {
                            node: e
                        }
                    }))
                };
                t.default = n
            }])
        },
        463: function(e, t, n) {
            "use strict";
            var r = n(791),
                a = n(296);

            function l(e) {
                for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
                return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
            }
            var i = new Set,
                o = {};

            function s(e, t) {
                c(e, t), c(e + "Capture", t)
            }

            function c(e, t) {
                for (o[e] = t, e = 0; e < t.length; e++) i.add(t[e])
            }
            var u = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement),
                d = Object.prototype.hasOwnProperty,
                f = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
                h = {},
                m = {};

            function p(e, t, n, r, a, l, i) {
                this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = r, this.attributeNamespace = a, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = l, this.removeEmptyString = i
            }
            var g = {};
            "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e) {
                g[e] = new p(e, 0, !1, e, null, !1, !1)
            })), [
                ["acceptCharset", "accept-charset"],
                ["className", "class"],
                ["htmlFor", "for"],
                ["httpEquiv", "http-equiv"]
            ].forEach((function(e) {
                var t = e[0];
                g[t] = new p(t, 1, !1, e[1], null, !1, !1)
            })), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function(e) {
                g[e] = new p(e, 2, !1, e.toLowerCase(), null, !1, !1)
            })), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function(e) {
                g[e] = new p(e, 2, !1, e, null, !1, !1)
            })), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e) {
                g[e] = new p(e, 3, !1, e.toLowerCase(), null, !1, !1)
            })), ["checked", "multiple", "muted", "selected"].forEach((function(e) {
                g[e] = new p(e, 3, !0, e, null, !1, !1)
            })), ["capture", "download"].forEach((function(e) {
                g[e] = new p(e, 4, !1, e, null, !1, !1)
            })), ["cols", "rows", "size", "span"].forEach((function(e) {
                g[e] = new p(e, 6, !1, e, null, !1, !1)
            })), ["rowSpan", "start"].forEach((function(e) {
                g[e] = new p(e, 5, !1, e.toLowerCase(), null, !1, !1)
            }));
            var v = /[\-:]([a-z])/g;

            function b(e) {
                return e[1].toUpperCase()
            }

            function x(e, t, n, r) {
                var a = g.hasOwnProperty(t) ? g[t] : null;
                (null !== a ? 0 !== a.type : r || !(2 < t.length) || "o" !== t[0] && "O" !== t[0] || "n" !== t[1] && "N" !== t[1]) && (function(e, t, n, r) {
                    if (null === t || "undefined" === typeof t || function(e, t, n, r) {
                            if (null !== n && 0 === n.type) return !1;
                            switch (typeof t) {
                                case "function":
                                case "symbol":
                                    return !0;
                                case "boolean":
                                    return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                                default:
                                    return !1
                            }
                        }(e, t, n, r)) return !0;
                    if (r) return !1;
                    if (null !== n) switch (n.type) {
                        case 3:
                            return !t;
                        case 4:
                            return !1 === t;
                        case 5:
                            return isNaN(t);
                        case 6:
                            return isNaN(t) || 1 > t
                    }
                    return !1
                }(t, n, a, r) && (n = null), r || null === a ? function(e) {
                    return !!d.call(m, e) || !d.call(h, e) && (f.test(e) ? m[e] = !0 : (h[e] = !0, !1))
                }(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : a.mustUseProperty ? e[a.propertyName] = null === n ? 3 !== a.type && "" : n : (t = a.attributeName, r = a.attributeNamespace, null === n ? e.removeAttribute(t) : (n = 3 === (a = a.type) || 4 === a && !0 === n ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
            }
            "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e) {
                var t = e.replace(v, b);
                g[t] = new p(t, 1, !1, e, null, !1, !1)
            })), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e) {
                var t = e.replace(v, b);
                g[t] = new p(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
            })), ["xml:base", "xml:lang", "xml:space"].forEach((function(e) {
                var t = e.replace(v, b);
                g[t] = new p(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
            })), ["tabIndex", "crossOrigin"].forEach((function(e) {
                g[e] = new p(e, 1, !1, e.toLowerCase(), null, !1, !1)
            })), g.xlinkHref = new p("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach((function(e) {
                g[e] = new p(e, 1, !1, e.toLowerCase(), null, !0, !0)
            }));
            var y = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
                w = Symbol.for("react.element"),
                j = Symbol.for("react.portal"),
                k = Symbol.for("react.fragment"),
                N = Symbol.for("react.strict_mode"),
                S = Symbol.for("react.profiler"),
                _ = Symbol.for("react.provider"),
                E = Symbol.for("react.context"),
                C = Symbol.for("react.forward_ref"),
                P = Symbol.for("react.suspense"),
                z = Symbol.for("react.suspense_list"),
                O = Symbol.for("react.memo"),
                T = Symbol.for("react.lazy");
            Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
            var R = Symbol.for("react.offscreen");
            Symbol.for("react.legacy_hidden"), Symbol.for("react.cache"), Symbol.for("react.tracing_marker");
            var D = Symbol.iterator;

            function L(e) {
                return null === e || "object" !== typeof e ? null : "function" === typeof(e = D && e[D] || e["@@iterator"]) ? e : null
            }
            var A, M = Object.assign;

            function I(e) {
                if (void 0 === A) try {
                    throw Error()
                } catch (n) {
                    var t = n.stack.trim().match(/\n( *(at )?)/);
                    A = t && t[1] || ""
                }
                return "\n" + A + e
            }
            var F = !1;

            function U(e, t) {
                if (!e || F) return "";
                F = !0;
                var n = Error.prepareStackTrace;
                Error.prepareStackTrace = void 0;
                try {
                    if (t)
                        if (t = function() {
                                throw Error()
                            }, Object.defineProperty(t.prototype, "props", {
                                set: function() {
                                    throw Error()
                                }
                            }), "object" === typeof Reflect && Reflect.construct) {
                            try {
                                Reflect.construct(t, [])
                            } catch (c) {
                                var r = c
                            }
                            Reflect.construct(e, [], t)
                        } else {
                            try {
                                t.call()
                            } catch (c) {
                                r = c
                            }
                            e.call(t.prototype)
                        }
                    else {
                        try {
                            throw Error()
                        } catch (c) {
                            r = c
                        }
                        e()
                    }
                } catch (c) {
                    if (c && r && "string" === typeof c.stack) {
                        for (var a = c.stack.split("\n"), l = r.stack.split("\n"), i = a.length - 1, o = l.length - 1; 1 <= i && 0 <= o && a[i] !== l[o];) o--;
                        for (; 1 <= i && 0 <= o; i--, o--)
                            if (a[i] !== l[o]) {
                                if (1 !== i || 1 !== o)
                                    do {
                                        if (i--, 0 > --o || a[i] !== l[o]) {
                                            var s = "\n" + a[i].replace(" at new ", " at ");
                                            return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s
                                        }
                                    } while (1 <= i && 0 <= o);
                                break
                            }
                    }
                } finally {
                    F = !1, Error.prepareStackTrace = n
                }
                return (e = e ? e.displayName || e.name : "") ? I(e) : ""
            }

            function B(e) {
                switch (e.tag) {
                    case 5:
                        return I(e.type);
                    case 16:
                        return I("Lazy");
                    case 13:
                        return I("Suspense");
                    case 19:
                        return I("SuspenseList");
                    case 0:
                    case 2:
                    case 15:
                        return e = U(e.type, !1);
                    case 11:
                        return e = U(e.type.render, !1);
                    case 1:
                        return e = U(e.type, !0);
                    default:
                        return ""
                }
            }

            function W(e) {
                if (null == e) return null;
                if ("function" === typeof e) return e.displayName || e.name || null;
                if ("string" === typeof e) return e;
                switch (e) {
                    case k:
                        return "Fragment";
                    case j:
                        return "Portal";
                    case S:
                        return "Profiler";
                    case N:
                        return "StrictMode";
                    case P:
                        return "Suspense";
                    case z:
                        return "SuspenseList"
                }
                if ("object" === typeof e) switch (e.$$typeof) {
                    case E:
                        return (e.displayName || "Context") + ".Consumer";
                    case _:
                        return (e._context.displayName || "Context") + ".Provider";
                    case C:
                        var t = e.render;
                        return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
                    case O:
                        return null !== (t = e.displayName || null) ? t : W(e.type) || "Memo";
                    case T:
                        t = e._payload, e = e._init;
                        try {
                            return W(e(t))
                        } catch (n) {}
                }
                return null
            }

            function $(e) {
                var t = e.type;
                switch (e.tag) {
                    case 24:
                        return "Cache";
                    case 9:
                        return (t.displayName || "Context") + ".Consumer";
                    case 10:
                        return (t._context.displayName || "Context") + ".Provider";
                    case 18:
                        return "DehydratedFragment";
                    case 11:
                        return e = (e = t.render).displayName || e.name || "", t.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef");
                    case 7:
                        return "Fragment";
                    case 5:
                        return t;
                    case 4:
                        return "Portal";
                    case 3:
                        return "Root";
                    case 6:
                        return "Text";
                    case 16:
                        return W(t);
                    case 8:
                        return t === N ? "StrictMode" : "Mode";
                    case 22:
                        return "Offscreen";
                    case 12:
                        return "Profiler";
                    case 21:
                        return "Scope";
                    case 13:
                        return "Suspense";
                    case 19:
                        return "SuspenseList";
                    case 25:
                        return "TracingMarker";
                    case 1:
                    case 0:
                    case 17:
                    case 2:
                    case 14:
                    case 15:
                        if ("function" === typeof t) return t.displayName || t.name || null;
                        if ("string" === typeof t) return t
                }
                return null
            }

            function V(e) {
                switch (typeof e) {
                    case "boolean":
                    case "number":
                    case "string":
                    case "undefined":
                    case "object":
                        return e;
                    default:
                        return ""
                }
            }

            function H(e) {
                var t = e.type;
                return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
            }

            function K(e) {
                e._valueTracker || (e._valueTracker = function(e) {
                    var t = H(e) ? "checked" : "value",
                        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                        r = "" + e[t];
                    if (!e.hasOwnProperty(t) && "undefined" !== typeof n && "function" === typeof n.get && "function" === typeof n.set) {
                        var a = n.get,
                            l = n.set;
                        return Object.defineProperty(e, t, {
                            configurable: !0,
                            get: function() {
                                return a.call(this)
                            },
                            set: function(e) {
                                r = "" + e, l.call(this, e)
                            }
                        }), Object.defineProperty(e, t, {
                            enumerable: n.enumerable
                        }), {
                            getValue: function() {
                                return r
                            },
                            setValue: function(e) {
                                r = "" + e
                            },
                            stopTracking: function() {
                                e._valueTracker = null, delete e[t]
                            }
                        }
                    }
                }(e))
            }

            function Q(e) {
                if (!e) return !1;
                var t = e._valueTracker;
                if (!t) return !0;
                var n = t.getValue(),
                    r = "";
                return e && (r = H(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0)
            }

            function X(e) {
                if ("undefined" === typeof(e = e || ("undefined" !== typeof document ? document : void 0))) return null;
                try {
                    return e.activeElement || e.body
                } catch (t) {
                    return e.body
                }
            }

            function q(e, t) {
                var n = t.checked;
                return M({}, t, {
                    defaultChecked: void 0,
                    defaultValue: void 0,
                    value: void 0,
                    checked: null != n ? n : e._wrapperState.initialChecked
                })
            }

            function G(e, t) {
                var n = null == t.defaultValue ? "" : t.defaultValue,
                    r = null != t.checked ? t.checked : t.defaultChecked;
                n = V(null != t.value ? t.value : n), e._wrapperState = {
                    initialChecked: r,
                    initialValue: n,
                    controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
                }
            }

            function Y(e, t) {
                null != (t = t.checked) && x(e, "checked", t, !1)
            }

            function J(e, t) {
                Y(e, t);
                var n = V(t.value),
                    r = t.type;
                if (null != n) "number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
                else if ("submit" === r || "reset" === r) return void e.removeAttribute("value");
                t.hasOwnProperty("value") ? ee(e, t.type, n) : t.hasOwnProperty("defaultValue") && ee(e, t.type, V(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
            }

            function Z(e, t, n) {
                if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
                    var r = t.type;
                    if (!("submit" !== r && "reset" !== r || void 0 !== t.value && null !== t.value)) return;
                    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
                }
                "" !== (n = e.name) && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, "" !== n && (e.name = n)
            }

            function ee(e, t, n) {
                "number" === t && X(e.ownerDocument) === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
            }
            var te = Array.isArray;

            function ne(e, t, n, r) {
                if (e = e.options, t) {
                    t = {};
                    for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
                    for (n = 0; n < e.length; n++) a = t.hasOwnProperty("$" + e[n].value), e[n].selected !== a && (e[n].selected = a), a && r && (e[n].defaultSelected = !0)
                } else {
                    for (n = "" + V(n), t = null, a = 0; a < e.length; a++) {
                        if (e[a].value === n) return e[a].selected = !0, void(r && (e[a].defaultSelected = !0));
                        null !== t || e[a].disabled || (t = e[a])
                    }
                    null !== t && (t.selected = !0)
                }
            }

            function re(e, t) {
                if (null != t.dangerouslySetInnerHTML) throw Error(l(91));
                return M({}, t, {
                    value: void 0,
                    defaultValue: void 0,
                    children: "" + e._wrapperState.initialValue
                })
            }

            function ae(e, t) {
                var n = t.value;
                if (null == n) {
                    if (n = t.children, t = t.defaultValue, null != n) {
                        if (null != t) throw Error(l(92));
                        if (te(n)) {
                            if (1 < n.length) throw Error(l(93));
                            n = n[0]
                        }
                        t = n
                    }
                    null == t && (t = ""), n = t
                }
                e._wrapperState = {
                    initialValue: V(n)
                }
            }

            function le(e, t) {
                var n = V(t.value),
                    r = V(t.defaultValue);
                null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != r && (e.defaultValue = "" + r)
            }

            function ie(e) {
                var t = e.textContent;
                t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t)
            }

            function oe(e) {
                switch (e) {
                    case "svg":
                        return "http://www.w3.org/2000/svg";
                    case "math":
                        return "http://www.w3.org/1998/Math/MathML";
                    default:
                        return "http://www.w3.org/1999/xhtml"
                }
            }

            function se(e, t) {
                return null == e || "http://www.w3.org/1999/xhtml" === e ? oe(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e
            }
            var ce, ue, de = (ue = function(e, t) {
                if ("http://www.w3.org/2000/svg" !== e.namespaceURI || "innerHTML" in e) e.innerHTML = t;
                else {
                    for ((ce = ce || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ce.firstChild; e.firstChild;) e.removeChild(e.firstChild);
                    for (; t.firstChild;) e.appendChild(t.firstChild)
                }
            }, "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(e, t, n, r) {
                MSApp.execUnsafeLocalFunction((function() {
                    return ue(e, t)
                }))
            } : ue);

            function fe(e, t) {
                if (t) {
                    var n = e.firstChild;
                    if (n && n === e.lastChild && 3 === n.nodeType) return void(n.nodeValue = t)
                }
                e.textContent = t
            }
            var he = {
                    animationIterationCount: !0,
                    aspectRatio: !0,
                    borderImageOutset: !0,
                    borderImageSlice: !0,
                    borderImageWidth: !0,
                    boxFlex: !0,
                    boxFlexGroup: !0,
                    boxOrdinalGroup: !0,
                    columnCount: !0,
                    columns: !0,
                    flex: !0,
                    flexGrow: !0,
                    flexPositive: !0,
                    flexShrink: !0,
                    flexNegative: !0,
                    flexOrder: !0,
                    gridArea: !0,
                    gridRow: !0,
                    gridRowEnd: !0,
                    gridRowSpan: !0,
                    gridRowStart: !0,
                    gridColumn: !0,
                    gridColumnEnd: !0,
                    gridColumnSpan: !0,
                    gridColumnStart: !0,
                    fontWeight: !0,
                    lineClamp: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    tabSize: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0,
                    fillOpacity: !0,
                    floodOpacity: !0,
                    stopOpacity: !0,
                    strokeDasharray: !0,
                    strokeDashoffset: !0,
                    strokeMiterlimit: !0,
                    strokeOpacity: !0,
                    strokeWidth: !0
                },
                me = ["Webkit", "ms", "Moz", "O"];

            function pe(e, t, n) {
                return null == t || "boolean" === typeof t || "" === t ? "" : n || "number" !== typeof t || 0 === t || he.hasOwnProperty(e) && he[e] ? ("" + t).trim() : t + "px"
            }

            function ge(e, t) {
                for (var n in e = e.style, t)
                    if (t.hasOwnProperty(n)) {
                        var r = 0 === n.indexOf("--"),
                            a = pe(n, t[n], r);
                        "float" === n && (n = "cssFloat"), r ? e.setProperty(n, a) : e[n] = a
                    }
            }
            Object.keys(he).forEach((function(e) {
                me.forEach((function(t) {
                    t = t + e.charAt(0).toUpperCase() + e.substring(1), he[t] = he[e]
                }))
            }));
            var ve = M({
                menuitem: !0
            }, {
                area: !0,
                base: !0,
                br: !0,
                col: !0,
                embed: !0,
                hr: !0,
                img: !0,
                input: !0,
                keygen: !0,
                link: !0,
                meta: !0,
                param: !0,
                source: !0,
                track: !0,
                wbr: !0
            });

            function be(e, t) {
                if (t) {
                    if (ve[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(l(137, e));
                    if (null != t.dangerouslySetInnerHTML) {
                        if (null != t.children) throw Error(l(60));
                        if ("object" !== typeof t.dangerouslySetInnerHTML || !("__html" in t.dangerouslySetInnerHTML)) throw Error(l(61))
                    }
                    if (null != t.style && "object" !== typeof t.style) throw Error(l(62))
                }
            }

            function xe(e, t) {
                if (-1 === e.indexOf("-")) return "string" === typeof t.is;
                switch (e) {
                    case "annotation-xml":
                    case "color-profile":
                    case "font-face":
                    case "font-face-src":
                    case "font-face-uri":
                    case "font-face-format":
                    case "font-face-name":
                    case "missing-glyph":
                        return !1;
                    default:
                        return !0
                }
            }
            var ye = null;

            function we(e) {
                return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
            }
            var je = null,
                ke = null,
                Ne = null;

            function Se(e) {
                if (e = xa(e)) {
                    if ("function" !== typeof je) throw Error(l(280));
                    var t = e.stateNode;
                    t && (t = wa(t), je(e.stateNode, e.type, t))
                }
            }

            function _e(e) {
                ke ? Ne ? Ne.push(e) : Ne = [e] : ke = e
            }

            function Ee() {
                if (ke) {
                    var e = ke,
                        t = Ne;
                    if (Ne = ke = null, Se(e), t)
                        for (e = 0; e < t.length; e++) Se(t[e])
                }
            }

            function Ce(e, t) {
                return e(t)
            }

            function Pe() {}
            var ze = !1;

            function Oe(e, t, n) {
                if (ze) return e(t, n);
                ze = !0;
                try {
                    return Ce(e, t, n)
                } finally {
                    ze = !1, (null !== ke || null !== Ne) && (Pe(), Ee())
                }
            }

            function Te(e, t) {
                var n = e.stateNode;
                if (null === n) return null;
                var r = wa(n);
                if (null === r) return null;
                n = r[t];
                e: switch (t) {
                    case "onClick":
                    case "onClickCapture":
                    case "onDoubleClick":
                    case "onDoubleClickCapture":
                    case "onMouseDown":
                    case "onMouseDownCapture":
                    case "onMouseMove":
                    case "onMouseMoveCapture":
                    case "onMouseUp":
                    case "onMouseUpCapture":
                    case "onMouseEnter":
                        (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !r;
                        break e;
                    default:
                        e = !1
                }
                if (e) return null;
                if (n && "function" !== typeof n) throw Error(l(231, t, typeof n));
                return n
            }
            var Re = !1;
            if (u) try {
                var De = {};
                Object.defineProperty(De, "passive", {
                    get: function() {
                        Re = !0
                    }
                }), window.addEventListener("test", De, De), window.removeEventListener("test", De, De)
            } catch (ue) {
                Re = !1
            }

            function Le(e, t, n, r, a, l, i, o, s) {
                var c = Array.prototype.slice.call(arguments, 3);
                try {
                    t.apply(n, c)
                } catch (u) {
                    this.onError(u)
                }
            }
            var Ae = !1,
                Me = null,
                Ie = !1,
                Fe = null,
                Ue = {
                    onError: function(e) {
                        Ae = !0, Me = e
                    }
                };

            function Be(e, t, n, r, a, l, i, o, s) {
                Ae = !1, Me = null, Le.apply(Ue, arguments)
            }

            function We(e) {
                var t = e,
                    n = e;
                if (e.alternate)
                    for (; t.return;) t = t.return;
                else {
                    e = t;
                    do {
                        0 !== (4098 & (t = e).flags) && (n = t.return), e = t.return
                    } while (e)
                }
                return 3 === t.tag ? n : null
            }

            function $e(e) {
                if (13 === e.tag) {
                    var t = e.memoizedState;
                    if (null === t && (null !== (e = e.alternate) && (t = e.memoizedState)), null !== t) return t.dehydrated
                }
                return null
            }

            function Ve(e) {
                if (We(e) !== e) throw Error(l(188))
            }

            function He(e) {
                return null !== (e = function(e) {
                    var t = e.alternate;
                    if (!t) {
                        if (null === (t = We(e))) throw Error(l(188));
                        return t !== e ? null : e
                    }
                    for (var n = e, r = t;;) {
                        var a = n.return;
                        if (null === a) break;
                        var i = a.alternate;
                        if (null === i) {
                            if (null !== (r = a.return)) {
                                n = r;
                                continue
                            }
                            break
                        }
                        if (a.child === i.child) {
                            for (i = a.child; i;) {
                                if (i === n) return Ve(a), e;
                                if (i === r) return Ve(a), t;
                                i = i.sibling
                            }
                            throw Error(l(188))
                        }
                        if (n.return !== r.return) n = a, r = i;
                        else {
                            for (var o = !1, s = a.child; s;) {
                                if (s === n) {
                                    o = !0, n = a, r = i;
                                    break
                                }
                                if (s === r) {
                                    o = !0, r = a, n = i;
                                    break
                                }
                                s = s.sibling
                            }
                            if (!o) {
                                for (s = i.child; s;) {
                                    if (s === n) {
                                        o = !0, n = i, r = a;
                                        break
                                    }
                                    if (s === r) {
                                        o = !0, r = i, n = a;
                                        break
                                    }
                                    s = s.sibling
                                }
                                if (!o) throw Error(l(189))
                            }
                        }
                        if (n.alternate !== r) throw Error(l(190))
                    }
                    if (3 !== n.tag) throw Error(l(188));
                    return n.stateNode.current === n ? e : t
                }(e)) ? Ke(e) : null
            }

            function Ke(e) {
                if (5 === e.tag || 6 === e.tag) return e;
                for (e = e.child; null !== e;) {
                    var t = Ke(e);
                    if (null !== t) return t;
                    e = e.sibling
                }
                return null
            }
            var Qe = a.unstable_scheduleCallback,
                Xe = a.unstable_cancelCallback,
                qe = a.unstable_shouldYield,
                Ge = a.unstable_requestPaint,
                Ye = a.unstable_now,
                Je = a.unstable_getCurrentPriorityLevel,
                Ze = a.unstable_ImmediatePriority,
                et = a.unstable_UserBlockingPriority,
                tt = a.unstable_NormalPriority,
                nt = a.unstable_LowPriority,
                rt = a.unstable_IdlePriority,
                at = null,
                lt = null;
            var it = Math.clz32 ? Math.clz32 : function(e) {
                    return 0 === (e >>>= 0) ? 32 : 31 - (ot(e) / st | 0) | 0
                },
                ot = Math.log,
                st = Math.LN2;
            var ct = 64,
                ut = 4194304;

            function dt(e) {
                switch (e & -e) {
                    case 1:
                        return 1;
                    case 2:
                        return 2;
                    case 4:
                        return 4;
                    case 8:
                        return 8;
                    case 16:
                        return 16;
                    case 32:
                        return 32;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                        return 4194240 & e;
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                        return 130023424 & e;
                    case 134217728:
                        return 134217728;
                    case 268435456:
                        return 268435456;
                    case 536870912:
                        return 536870912;
                    case 1073741824:
                        return 1073741824;
                    default:
                        return e
                }
            }

            function ft(e, t) {
                var n = e.pendingLanes;
                if (0 === n) return 0;
                var r = 0,
                    a = e.suspendedLanes,
                    l = e.pingedLanes,
                    i = 268435455 & n;
                if (0 !== i) {
                    var o = i & ~a;
                    0 !== o ? r = dt(o) : 0 !== (l &= i) && (r = dt(l))
                } else 0 !== (i = n & ~a) ? r = dt(i) : 0 !== l && (r = dt(l));
                if (0 === r) return 0;
                if (0 !== t && t !== r && 0 === (t & a) && ((a = r & -r) >= (l = t & -t) || 16 === a && 0 !== (4194240 & l))) return t;
                if (0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes))
                    for (e = e.entanglements, t &= r; 0 < t;) a = 1 << (n = 31 - it(t)), r |= e[n], t &= ~a;
                return r
            }

            function ht(e, t) {
                switch (e) {
                    case 1:
                    case 2:
                    case 4:
                        return t + 250;
                    case 8:
                    case 16:
                    case 32:
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                        return t + 5e3;
                    default:
                        return -1
                }
            }

            function mt(e) {
                return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0
            }

            function pt() {
                var e = ct;
                return 0 === (4194240 & (ct <<= 1)) && (ct = 64), e
            }

            function gt(e) {
                for (var t = [], n = 0; 31 > n; n++) t.push(e);
                return t
            }

            function vt(e, t, n) {
                e.pendingLanes |= t, 536870912 !== t && (e.suspendedLanes = 0, e.pingedLanes = 0), (e = e.eventTimes)[t = 31 - it(t)] = n
            }

            function bt(e, t) {
                var n = e.entangledLanes |= t;
                for (e = e.entanglements; n;) {
                    var r = 31 - it(n),
                        a = 1 << r;
                    a & t | e[r] & t && (e[r] |= t), n &= ~a
                }
            }
            var xt = 0;

            function yt(e) {
                return 1 < (e &= -e) ? 4 < e ? 0 !== (268435455 & e) ? 16 : 536870912 : 4 : 1
            }
            var wt, jt, kt, Nt, St, _t = !1,
                Et = [],
                Ct = null,
                Pt = null,
                zt = null,
                Ot = new Map,
                Tt = new Map,
                Rt = [],
                Dt = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

            function Lt(e, t) {
                switch (e) {
                    case "focusin":
                    case "focusout":
                        Ct = null;
                        break;
                    case "dragenter":
                    case "dragleave":
                        Pt = null;
                        break;
                    case "mouseover":
                    case "mouseout":
                        zt = null;
                        break;
                    case "pointerover":
                    case "pointerout":
                        Ot.delete(t.pointerId);
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                        Tt.delete(t.pointerId)
                }
            }

            function At(e, t, n, r, a, l) {
                return null === e || e.nativeEvent !== l ? (e = {
                    blockedOn: t,
                    domEventName: n,
                    eventSystemFlags: r,
                    nativeEvent: l,
                    targetContainers: [a]
                }, null !== t && (null !== (t = xa(t)) && jt(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, null !== a && -1 === t.indexOf(a) && t.push(a), e)
            }

            function Mt(e) {
                var t = ba(e.target);
                if (null !== t) {
                    var n = We(t);
                    if (null !== n)
                        if (13 === (t = n.tag)) {
                            if (null !== (t = $e(n))) return e.blockedOn = t, void St(e.priority, (function() {
                                kt(n)
                            }))
                        } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated) return void(e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
                }
                e.blockedOn = null
            }

            function It(e) {
                if (null !== e.blockedOn) return !1;
                for (var t = e.targetContainers; 0 < t.length;) {
                    var n = qt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
                    if (null !== n) return null !== (t = xa(n)) && jt(t), e.blockedOn = n, !1;
                    var r = new(n = e.nativeEvent).constructor(n.type, n);
                    ye = r, n.target.dispatchEvent(r), ye = null, t.shift()
                }
                return !0
            }

            function Ft(e, t, n) {
                It(e) && n.delete(t)
            }

            function Ut() {
                _t = !1, null !== Ct && It(Ct) && (Ct = null), null !== Pt && It(Pt) && (Pt = null), null !== zt && It(zt) && (zt = null), Ot.forEach(Ft), Tt.forEach(Ft)
            }

            function Bt(e, t) {
                e.blockedOn === t && (e.blockedOn = null, _t || (_t = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, Ut)))
            }

            function Wt(e) {
                function t(t) {
                    return Bt(t, e)
                }
                if (0 < Et.length) {
                    Bt(Et[0], e);
                    for (var n = 1; n < Et.length; n++) {
                        var r = Et[n];
                        r.blockedOn === e && (r.blockedOn = null)
                    }
                }
                for (null !== Ct && Bt(Ct, e), null !== Pt && Bt(Pt, e), null !== zt && Bt(zt, e), Ot.forEach(t), Tt.forEach(t), n = 0; n < Rt.length; n++)(r = Rt[n]).blockedOn === e && (r.blockedOn = null);
                for (; 0 < Rt.length && null === (n = Rt[0]).blockedOn;) Mt(n), null === n.blockedOn && Rt.shift()
            }
            var $t = y.ReactCurrentBatchConfig,
                Vt = !0;

            function Ht(e, t, n, r) {
                var a = xt,
                    l = $t.transition;
                $t.transition = null;
                try {
                    xt = 1, Qt(e, t, n, r)
                } finally {
                    xt = a, $t.transition = l
                }
            }

            function Kt(e, t, n, r) {
                var a = xt,
                    l = $t.transition;
                $t.transition = null;
                try {
                    xt = 4, Qt(e, t, n, r)
                } finally {
                    xt = a, $t.transition = l
                }
            }

            function Qt(e, t, n, r) {
                if (Vt) {
                    var a = qt(e, t, n, r);
                    if (null === a) Vr(e, t, r, Xt, n), Lt(e, r);
                    else if (function(e, t, n, r, a) {
                            switch (t) {
                                case "focusin":
                                    return Ct = At(Ct, e, t, n, r, a), !0;
                                case "dragenter":
                                    return Pt = At(Pt, e, t, n, r, a), !0;
                                case "mouseover":
                                    return zt = At(zt, e, t, n, r, a), !0;
                                case "pointerover":
                                    var l = a.pointerId;
                                    return Ot.set(l, At(Ot.get(l) || null, e, t, n, r, a)), !0;
                                case "gotpointercapture":
                                    return l = a.pointerId, Tt.set(l, At(Tt.get(l) || null, e, t, n, r, a)), !0
                            }
                            return !1
                        }(a, e, t, n, r)) r.stopPropagation();
                    else if (Lt(e, r), 4 & t && -1 < Dt.indexOf(e)) {
                        for (; null !== a;) {
                            var l = xa(a);
                            if (null !== l && wt(l), null === (l = qt(e, t, n, r)) && Vr(e, t, r, Xt, n), l === a) break;
                            a = l
                        }
                        null !== a && r.stopPropagation()
                    } else Vr(e, t, r, null, n)
                }
            }
            var Xt = null;

            function qt(e, t, n, r) {
                if (Xt = null, null !== (e = ba(e = we(r))))
                    if (null === (t = We(e))) e = null;
                    else if (13 === (n = t.tag)) {
                    if (null !== (e = $e(t))) return e;
                    e = null
                } else if (3 === n) {
                    if (t.stateNode.current.memoizedState.isDehydrated) return 3 === t.tag ? t.stateNode.containerInfo : null;
                    e = null
                } else t !== e && (e = null);
                return Xt = e, null
            }

            function Gt(e) {
                switch (e) {
                    case "cancel":
                    case "click":
                    case "close":
                    case "contextmenu":
                    case "copy":
                    case "cut":
                    case "auxclick":
                    case "dblclick":
                    case "dragend":
                    case "dragstart":
                    case "drop":
                    case "focusin":
                    case "focusout":
                    case "input":
                    case "invalid":
                    case "keydown":
                    case "keypress":
                    case "keyup":
                    case "mousedown":
                    case "mouseup":
                    case "paste":
                    case "pause":
                    case "play":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointerup":
                    case "ratechange":
                    case "reset":
                    case "resize":
                    case "seeked":
                    case "submit":
                    case "touchcancel":
                    case "touchend":
                    case "touchstart":
                    case "volumechange":
                    case "change":
                    case "selectionchange":
                    case "textInput":
                    case "compositionstart":
                    case "compositionend":
                    case "compositionupdate":
                    case "beforeblur":
                    case "afterblur":
                    case "beforeinput":
                    case "blur":
                    case "fullscreenchange":
                    case "focus":
                    case "hashchange":
                    case "popstate":
                    case "select":
                    case "selectstart":
                        return 1;
                    case "drag":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "mousemove":
                    case "mouseout":
                    case "mouseover":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "scroll":
                    case "toggle":
                    case "touchmove":
                    case "wheel":
                    case "mouseenter":
                    case "mouseleave":
                    case "pointerenter":
                    case "pointerleave":
                        return 4;
                    case "message":
                        switch (Je()) {
                            case Ze:
                                return 1;
                            case et:
                                return 4;
                            case tt:
                            case nt:
                                return 16;
                            case rt:
                                return 536870912;
                            default:
                                return 16
                        }
                    default:
                        return 16
                }
            }
            var Yt = null,
                Jt = null,
                Zt = null;

            function en() {
                if (Zt) return Zt;
                var e, t, n = Jt,
                    r = n.length,
                    a = "value" in Yt ? Yt.value : Yt.textContent,
                    l = a.length;
                for (e = 0; e < r && n[e] === a[e]; e++);
                var i = r - e;
                for (t = 1; t <= i && n[r - t] === a[l - t]; t++);
                return Zt = a.slice(e, 1 < t ? 1 - t : void 0)
            }

            function tn(e) {
                var t = e.keyCode;
                return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
            }

            function nn() {
                return !0
            }

            function rn() {
                return !1
            }

            function an(e) {
                function t(t, n, r, a, l) {
                    for (var i in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = a, this.target = l, this.currentTarget = null, e) e.hasOwnProperty(i) && (t = e[i], this[i] = t ? t(a) : a[i]);
                    return this.isDefaultPrevented = (null != a.defaultPrevented ? a.defaultPrevented : !1 === a.returnValue) ? nn : rn, this.isPropagationStopped = rn, this
                }
                return M(t.prototype, {
                    preventDefault: function() {
                        this.defaultPrevented = !0;
                        var e = this.nativeEvent;
                        e && (e.preventDefault ? e.preventDefault() : "unknown" !== typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = nn)
                    },
                    stopPropagation: function() {
                        var e = this.nativeEvent;
                        e && (e.stopPropagation ? e.stopPropagation() : "unknown" !== typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = nn)
                    },
                    persist: function() {},
                    isPersistent: nn
                }), t
            }
            var ln, on, sn, cn = {
                    eventPhase: 0,
                    bubbles: 0,
                    cancelable: 0,
                    timeStamp: function(e) {
                        return e.timeStamp || Date.now()
                    },
                    defaultPrevented: 0,
                    isTrusted: 0
                },
                un = an(cn),
                dn = M({}, cn, {
                    view: 0,
                    detail: 0
                }),
                fn = an(dn),
                hn = M({}, dn, {
                    screenX: 0,
                    screenY: 0,
                    clientX: 0,
                    clientY: 0,
                    pageX: 0,
                    pageY: 0,
                    ctrlKey: 0,
                    shiftKey: 0,
                    altKey: 0,
                    metaKey: 0,
                    getModifierState: Sn,
                    button: 0,
                    buttons: 0,
                    relatedTarget: function(e) {
                        return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
                    },
                    movementX: function(e) {
                        return "movementX" in e ? e.movementX : (e !== sn && (sn && "mousemove" === e.type ? (ln = e.screenX - sn.screenX, on = e.screenY - sn.screenY) : on = ln = 0, sn = e), ln)
                    },
                    movementY: function(e) {
                        return "movementY" in e ? e.movementY : on
                    }
                }),
                mn = an(hn),
                pn = an(M({}, hn, {
                    dataTransfer: 0
                })),
                gn = an(M({}, dn, {
                    relatedTarget: 0
                })),
                vn = an(M({}, cn, {
                    animationName: 0,
                    elapsedTime: 0,
                    pseudoElement: 0
                })),
                bn = M({}, cn, {
                    clipboardData: function(e) {
                        return "clipboardData" in e ? e.clipboardData : window.clipboardData
                    }
                }),
                xn = an(bn),
                yn = an(M({}, cn, {
                    data: 0
                })),
                wn = {
                    Esc: "Escape",
                    Spacebar: " ",
                    Left: "ArrowLeft",
                    Up: "ArrowUp",
                    Right: "ArrowRight",
                    Down: "ArrowDown",
                    Del: "Delete",
                    Win: "OS",
                    Menu: "ContextMenu",
                    Apps: "ContextMenu",
                    Scroll: "ScrollLock",
                    MozPrintableKey: "Unidentified"
                },
                jn = {
                    8: "Backspace",
                    9: "Tab",
                    12: "Clear",
                    13: "Enter",
                    16: "Shift",
                    17: "Control",
                    18: "Alt",
                    19: "Pause",
                    20: "CapsLock",
                    27: "Escape",
                    32: " ",
                    33: "PageUp",
                    34: "PageDown",
                    35: "End",
                    36: "Home",
                    37: "ArrowLeft",
                    38: "ArrowUp",
                    39: "ArrowRight",
                    40: "ArrowDown",
                    45: "Insert",
                    46: "Delete",
                    112: "F1",
                    113: "F2",
                    114: "F3",
                    115: "F4",
                    116: "F5",
                    117: "F6",
                    118: "F7",
                    119: "F8",
                    120: "F9",
                    121: "F10",
                    122: "F11",
                    123: "F12",
                    144: "NumLock",
                    145: "ScrollLock",
                    224: "Meta"
                },
                kn = {
                    Alt: "altKey",
                    Control: "ctrlKey",
                    Meta: "metaKey",
                    Shift: "shiftKey"
                };

            function Nn(e) {
                var t = this.nativeEvent;
                return t.getModifierState ? t.getModifierState(e) : !!(e = kn[e]) && !!t[e]
            }

            function Sn() {
                return Nn
            }
            var _n = M({}, dn, {
                    key: function(e) {
                        if (e.key) {
                            var t = wn[e.key] || e.key;
                            if ("Unidentified" !== t) return t
                        }
                        return "keypress" === e.type ? 13 === (e = tn(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? jn[e.keyCode] || "Unidentified" : ""
                    },
                    code: 0,
                    location: 0,
                    ctrlKey: 0,
                    shiftKey: 0,
                    altKey: 0,
                    metaKey: 0,
                    repeat: 0,
                    locale: 0,
                    getModifierState: Sn,
                    charCode: function(e) {
                        return "keypress" === e.type ? tn(e) : 0
                    },
                    keyCode: function(e) {
                        return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                    },
                    which: function(e) {
                        return "keypress" === e.type ? tn(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                    }
                }),
                En = an(_n),
                Cn = an(M({}, hn, {
                    pointerId: 0,
                    width: 0,
                    height: 0,
                    pressure: 0,
                    tangentialPressure: 0,
                    tiltX: 0,
                    tiltY: 0,
                    twist: 0,
                    pointerType: 0,
                    isPrimary: 0
                })),
                Pn = an(M({}, dn, {
                    touches: 0,
                    targetTouches: 0,
                    changedTouches: 0,
                    altKey: 0,
                    metaKey: 0,
                    ctrlKey: 0,
                    shiftKey: 0,
                    getModifierState: Sn
                })),
                zn = an(M({}, cn, {
                    propertyName: 0,
                    elapsedTime: 0,
                    pseudoElement: 0
                })),
                On = M({}, hn, {
                    deltaX: function(e) {
                        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
                    },
                    deltaY: function(e) {
                        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
                    },
                    deltaZ: 0,
                    deltaMode: 0
                }),
                Tn = an(On),
                Rn = [9, 13, 27, 32],
                Dn = u && "CompositionEvent" in window,
                Ln = null;
            u && "documentMode" in document && (Ln = document.documentMode);
            var An = u && "TextEvent" in window && !Ln,
                Mn = u && (!Dn || Ln && 8 < Ln && 11 >= Ln),
                In = String.fromCharCode(32),
                Fn = !1;

            function Un(e, t) {
                switch (e) {
                    case "keyup":
                        return -1 !== Rn.indexOf(t.keyCode);
                    case "keydown":
                        return 229 !== t.keyCode;
                    case "keypress":
                    case "mousedown":
                    case "focusout":
                        return !0;
                    default:
                        return !1
                }
            }

            function Bn(e) {
                return "object" === typeof(e = e.detail) && "data" in e ? e.data : null
            }
            var Wn = !1;
            var $n = {
                color: !0,
                date: !0,
                datetime: !0,
                "datetime-local": !0,
                email: !0,
                month: !0,
                number: !0,
                password: !0,
                range: !0,
                search: !0,
                tel: !0,
                text: !0,
                time: !0,
                url: !0,
                week: !0
            };

            function Vn(e) {
                var t = e && e.nodeName && e.nodeName.toLowerCase();
                return "input" === t ? !!$n[e.type] : "textarea" === t
            }

            function Hn(e, t, n, r) {
                _e(r), 0 < (t = Kr(t, "onChange")).length && (n = new un("onChange", "change", null, n, r), e.push({
                    event: n,
                    listeners: t
                }))
            }
            var Kn = null,
                Qn = null;

            function Xn(e) {
                Ir(e, 0)
            }

            function qn(e) {
                if (Q(ya(e))) return e
            }

            function Gn(e, t) {
                if ("change" === e) return t
            }
            var Yn = !1;
            if (u) {
                var Jn;
                if (u) {
                    var Zn = "oninput" in document;
                    if (!Zn) {
                        var er = document.createElement("div");
                        er.setAttribute("oninput", "return;"), Zn = "function" === typeof er.oninput
                    }
                    Jn = Zn
                } else Jn = !1;
                Yn = Jn && (!document.documentMode || 9 < document.documentMode)
            }

            function tr() {
                Kn && (Kn.detachEvent("onpropertychange", nr), Qn = Kn = null)
            }

            function nr(e) {
                if ("value" === e.propertyName && qn(Qn)) {
                    var t = [];
                    Hn(t, Qn, e, we(e)), Oe(Xn, t)
                }
            }

            function rr(e, t, n) {
                "focusin" === e ? (tr(), Qn = n, (Kn = t).attachEvent("onpropertychange", nr)) : "focusout" === e && tr()
            }

            function ar(e) {
                if ("selectionchange" === e || "keyup" === e || "keydown" === e) return qn(Qn)
            }

            function lr(e, t) {
                if ("click" === e) return qn(t)
            }

            function ir(e, t) {
                if ("input" === e || "change" === e) return qn(t)
            }
            var or = "function" === typeof Object.is ? Object.is : function(e, t) {
                return e === t && (0 !== e || 1 / e === 1 / t) || e !== e && t !== t
            };

            function sr(e, t) {
                if (or(e, t)) return !0;
                if ("object" !== typeof e || null === e || "object" !== typeof t || null === t) return !1;
                var n = Object.keys(e),
                    r = Object.keys(t);
                if (n.length !== r.length) return !1;
                for (r = 0; r < n.length; r++) {
                    var a = n[r];
                    if (!d.call(t, a) || !or(e[a], t[a])) return !1
                }
                return !0
            }

            function cr(e) {
                for (; e && e.firstChild;) e = e.firstChild;
                return e
            }

            function ur(e, t) {
                var n, r = cr(e);
                for (e = 0; r;) {
                    if (3 === r.nodeType) {
                        if (n = e + r.textContent.length, e <= t && n >= t) return {
                            node: r,
                            offset: t - e
                        };
                        e = n
                    }
                    e: {
                        for (; r;) {
                            if (r.nextSibling) {
                                r = r.nextSibling;
                                break e
                            }
                            r = r.parentNode
                        }
                        r = void 0
                    }
                    r = cr(r)
                }
            }

            function dr(e, t) {
                return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? dr(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))))
            }

            function fr() {
                for (var e = window, t = X(); t instanceof e.HTMLIFrameElement;) {
                    try {
                        var n = "string" === typeof t.contentWindow.location.href
                    } catch (r) {
                        n = !1
                    }
                    if (!n) break;
                    t = X((e = t.contentWindow).document)
                }
                return t
            }

            function hr(e) {
                var t = e && e.nodeName && e.nodeName.toLowerCase();
                return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
            }

            function mr(e) {
                var t = fr(),
                    n = e.focusedElem,
                    r = e.selectionRange;
                if (t !== n && n && n.ownerDocument && dr(n.ownerDocument.documentElement, n)) {
                    if (null !== r && hr(n))
                        if (t = r.start, void 0 === (e = r.end) && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
                        else if ((e = (t = n.ownerDocument || document) && t.defaultView || window).getSelection) {
                        e = e.getSelection();
                        var a = n.textContent.length,
                            l = Math.min(r.start, a);
                        r = void 0 === r.end ? l : Math.min(r.end, a), !e.extend && l > r && (a = r, r = l, l = a), a = ur(n, l);
                        var i = ur(n, r);
                        a && i && (1 !== e.rangeCount || e.anchorNode !== a.node || e.anchorOffset !== a.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && ((t = t.createRange()).setStart(a.node, a.offset), e.removeAllRanges(), l > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)))
                    }
                    for (t = [], e = n; e = e.parentNode;) 1 === e.nodeType && t.push({
                        element: e,
                        left: e.scrollLeft,
                        top: e.scrollTop
                    });
                    for ("function" === typeof n.focus && n.focus(), n = 0; n < t.length; n++)(e = t[n]).element.scrollLeft = e.left, e.element.scrollTop = e.top
                }
            }
            var pr = u && "documentMode" in document && 11 >= document.documentMode,
                gr = null,
                vr = null,
                br = null,
                xr = !1;

            function yr(e, t, n) {
                var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
                xr || null == gr || gr !== X(r) || ("selectionStart" in (r = gr) && hr(r) ? r = {
                    start: r.selectionStart,
                    end: r.selectionEnd
                } : r = {
                    anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode,
                    anchorOffset: r.anchorOffset,
                    focusNode: r.focusNode,
                    focusOffset: r.focusOffset
                }, br && sr(br, r) || (br = r, 0 < (r = Kr(vr, "onSelect")).length && (t = new un("onSelect", "select", null, t, n), e.push({
                    event: t,
                    listeners: r
                }), t.target = gr)))
            }

            function wr(e, t) {
                var n = {};
                return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
            }
            var jr = {
                    animationend: wr("Animation", "AnimationEnd"),
                    animationiteration: wr("Animation", "AnimationIteration"),
                    animationstart: wr("Animation", "AnimationStart"),
                    transitionend: wr("Transition", "TransitionEnd")
                },
                kr = {},
                Nr = {};

            function Sr(e) {
                if (kr[e]) return kr[e];
                if (!jr[e]) return e;
                var t, n = jr[e];
                for (t in n)
                    if (n.hasOwnProperty(t) && t in Nr) return kr[e] = n[t];
                return e
            }
            u && (Nr = document.createElement("div").style, "AnimationEvent" in window || (delete jr.animationend.animation, delete jr.animationiteration.animation, delete jr.animationstart.animation), "TransitionEvent" in window || delete jr.transitionend.transition);
            var _r = Sr("animationend"),
                Er = Sr("animationiteration"),
                Cr = Sr("animationstart"),
                Pr = Sr("transitionend"),
                zr = new Map,
                Or = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

            function Tr(e, t) {
                zr.set(e, t), s(t, [e])
            }
            for (var Rr = 0; Rr < Or.length; Rr++) {
                var Dr = Or[Rr];
                Tr(Dr.toLowerCase(), "on" + (Dr[0].toUpperCase() + Dr.slice(1)))
            }
            Tr(_r, "onAnimationEnd"), Tr(Er, "onAnimationIteration"), Tr(Cr, "onAnimationStart"), Tr("dblclick", "onDoubleClick"), Tr("focusin", "onFocus"), Tr("focusout", "onBlur"), Tr(Pr, "onTransitionEnd"), c("onMouseEnter", ["mouseout", "mouseover"]), c("onMouseLeave", ["mouseout", "mouseover"]), c("onPointerEnter", ["pointerout", "pointerover"]), c("onPointerLeave", ["pointerout", "pointerover"]), s("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), s("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), s("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), s("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), s("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), s("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
            var Lr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
                Ar = new Set("cancel close invalid load scroll toggle".split(" ").concat(Lr));

            function Mr(e, t, n) {
                var r = e.type || "unknown-event";
                e.currentTarget = n,
                    function(e, t, n, r, a, i, o, s, c) {
                        if (Be.apply(this, arguments), Ae) {
                            if (!Ae) throw Error(l(198));
                            var u = Me;
                            Ae = !1, Me = null, Ie || (Ie = !0, Fe = u)
                        }
                    }(r, t, void 0, e), e.currentTarget = null
            }

            function Ir(e, t) {
                t = 0 !== (4 & t);
                for (var n = 0; n < e.length; n++) {
                    var r = e[n],
                        a = r.event;
                    r = r.listeners;
                    e: {
                        var l = void 0;
                        if (t)
                            for (var i = r.length - 1; 0 <= i; i--) {
                                var o = r[i],
                                    s = o.instance,
                                    c = o.currentTarget;
                                if (o = o.listener, s !== l && a.isPropagationStopped()) break e;
                                Mr(a, o, c), l = s
                            } else
                                for (i = 0; i < r.length; i++) {
                                    if (s = (o = r[i]).instance, c = o.currentTarget, o = o.listener, s !== l && a.isPropagationStopped()) break e;
                                    Mr(a, o, c), l = s
                                }
                    }
                }
                if (Ie) throw e = Fe, Ie = !1, Fe = null, e
            }

            function Fr(e, t) {
                var n = t[pa];
                void 0 === n && (n = t[pa] = new Set);
                var r = e + "__bubble";
                n.has(r) || ($r(t, e, 2, !1), n.add(r))
            }

            function Ur(e, t, n) {
                var r = 0;
                t && (r |= 4), $r(n, e, r, t)
            }
            var Br = "_reactListening" + Math.random().toString(36).slice(2);

            function Wr(e) {
                if (!e[Br]) {
                    e[Br] = !0, i.forEach((function(t) {
                        "selectionchange" !== t && (Ar.has(t) || Ur(t, !1, e), Ur(t, !0, e))
                    }));
                    var t = 9 === e.nodeType ? e : e.ownerDocument;
                    null === t || t[Br] || (t[Br] = !0, Ur("selectionchange", !1, t))
                }
            }

            function $r(e, t, n, r) {
                switch (Gt(t)) {
                    case 1:
                        var a = Ht;
                        break;
                    case 4:
                        a = Kt;
                        break;
                    default:
                        a = Qt
                }
                n = a.bind(null, t, n, e), a = void 0, !Re || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (a = !0), r ? void 0 !== a ? e.addEventListener(t, n, {
                    capture: !0,
                    passive: a
                }) : e.addEventListener(t, n, !0) : void 0 !== a ? e.addEventListener(t, n, {
                    passive: a
                }) : e.addEventListener(t, n, !1)
            }

            function Vr(e, t, n, r, a) {
                var l = r;
                if (0 === (1 & t) && 0 === (2 & t) && null !== r) e: for (;;) {
                    if (null === r) return;
                    var i = r.tag;
                    if (3 === i || 4 === i) {
                        var o = r.stateNode.containerInfo;
                        if (o === a || 8 === o.nodeType && o.parentNode === a) break;
                        if (4 === i)
                            for (i = r.return; null !== i;) {
                                var s = i.tag;
                                if ((3 === s || 4 === s) && ((s = i.stateNode.containerInfo) === a || 8 === s.nodeType && s.parentNode === a)) return;
                                i = i.return
                            }
                        for (; null !== o;) {
                            if (null === (i = ba(o))) return;
                            if (5 === (s = i.tag) || 6 === s) {
                                r = l = i;
                                continue e
                            }
                            o = o.parentNode
                        }
                    }
                    r = r.return
                }
                Oe((function() {
                    var r = l,
                        a = we(n),
                        i = [];
                    e: {
                        var o = zr.get(e);
                        if (void 0 !== o) {
                            var s = un,
                                c = e;
                            switch (e) {
                                case "keypress":
                                    if (0 === tn(n)) break e;
                                case "keydown":
                                case "keyup":
                                    s = En;
                                    break;
                                case "focusin":
                                    c = "focus", s = gn;
                                    break;
                                case "focusout":
                                    c = "blur", s = gn;
                                    break;
                                case "beforeblur":
                                case "afterblur":
                                    s = gn;
                                    break;
                                case "click":
                                    if (2 === n.button) break e;
                                case "auxclick":
                                case "dblclick":
                                case "mousedown":
                                case "mousemove":
                                case "mouseup":
                                case "mouseout":
                                case "mouseover":
                                case "contextmenu":
                                    s = mn;
                                    break;
                                case "drag":
                                case "dragend":
                                case "dragenter":
                                case "dragexit":
                                case "dragleave":
                                case "dragover":
                                case "dragstart":
                                case "drop":
                                    s = pn;
                                    break;
                                case "touchcancel":
                                case "touchend":
                                case "touchmove":
                                case "touchstart":
                                    s = Pn;
                                    break;
                                case _r:
                                case Er:
                                case Cr:
                                    s = vn;
                                    break;
                                case Pr:
                                    s = zn;
                                    break;
                                case "scroll":
                                    s = fn;
                                    break;
                                case "wheel":
                                    s = Tn;
                                    break;
                                case "copy":
                                case "cut":
                                case "paste":
                                    s = xn;
                                    break;
                                case "gotpointercapture":
                                case "lostpointercapture":
                                case "pointercancel":
                                case "pointerdown":
                                case "pointermove":
                                case "pointerout":
                                case "pointerover":
                                case "pointerup":
                                    s = Cn
                            }
                            var u = 0 !== (4 & t),
                                d = !u && "scroll" === e,
                                f = u ? null !== o ? o + "Capture" : null : o;
                            u = [];
                            for (var h, m = r; null !== m;) {
                                var p = (h = m).stateNode;
                                if (5 === h.tag && null !== p && (h = p, null !== f && (null != (p = Te(m, f)) && u.push(Hr(m, p, h)))), d) break;
                                m = m.return
                            }
                            0 < u.length && (o = new s(o, c, null, n, a), i.push({
                                event: o,
                                listeners: u
                            }))
                        }
                    }
                    if (0 === (7 & t)) {
                        if (s = "mouseout" === e || "pointerout" === e, (!(o = "mouseover" === e || "pointerover" === e) || n === ye || !(c = n.relatedTarget || n.fromElement) || !ba(c) && !c[ma]) && (s || o) && (o = a.window === a ? a : (o = a.ownerDocument) ? o.defaultView || o.parentWindow : window, s ? (s = r, null !== (c = (c = n.relatedTarget || n.toElement) ? ba(c) : null) && (c !== (d = We(c)) || 5 !== c.tag && 6 !== c.tag) && (c = null)) : (s = null, c = r), s !== c)) {
                            if (u = mn, p = "onMouseLeave", f = "onMouseEnter", m = "mouse", "pointerout" !== e && "pointerover" !== e || (u = Cn, p = "onPointerLeave", f = "onPointerEnter", m = "pointer"), d = null == s ? o : ya(s), h = null == c ? o : ya(c), (o = new u(p, m + "leave", s, n, a)).target = d, o.relatedTarget = h, p = null, ba(a) === r && ((u = new u(f, m + "enter", c, n, a)).target = h, u.relatedTarget = d, p = u), d = p, s && c) e: {
                                for (f = c, m = 0, h = u = s; h; h = Qr(h)) m++;
                                for (h = 0, p = f; p; p = Qr(p)) h++;
                                for (; 0 < m - h;) u = Qr(u),
                                m--;
                                for (; 0 < h - m;) f = Qr(f),
                                h--;
                                for (; m--;) {
                                    if (u === f || null !== f && u === f.alternate) break e;
                                    u = Qr(u), f = Qr(f)
                                }
                                u = null
                            }
                            else u = null;
                            null !== s && Xr(i, o, s, u, !1), null !== c && null !== d && Xr(i, d, c, u, !0)
                        }
                        if ("select" === (s = (o = r ? ya(r) : window).nodeName && o.nodeName.toLowerCase()) || "input" === s && "file" === o.type) var g = Gn;
                        else if (Vn(o))
                            if (Yn) g = ir;
                            else {
                                g = ar;
                                var v = rr
                            }
                        else(s = o.nodeName) && "input" === s.toLowerCase() && ("checkbox" === o.type || "radio" === o.type) && (g = lr);
                        switch (g && (g = g(e, r)) ? Hn(i, g, n, a) : (v && v(e, o, r), "focusout" === e && (v = o._wrapperState) && v.controlled && "number" === o.type && ee(o, "number", o.value)), v = r ? ya(r) : window, e) {
                            case "focusin":
                                (Vn(v) || "true" === v.contentEditable) && (gr = v, vr = r, br = null);
                                break;
                            case "focusout":
                                br = vr = gr = null;
                                break;
                            case "mousedown":
                                xr = !0;
                                break;
                            case "contextmenu":
                            case "mouseup":
                            case "dragend":
                                xr = !1, yr(i, n, a);
                                break;
                            case "selectionchange":
                                if (pr) break;
                            case "keydown":
                            case "keyup":
                                yr(i, n, a)
                        }
                        var b;
                        if (Dn) e: {
                            switch (e) {
                                case "compositionstart":
                                    var x = "onCompositionStart";
                                    break e;
                                case "compositionend":
                                    x = "onCompositionEnd";
                                    break e;
                                case "compositionupdate":
                                    x = "onCompositionUpdate";
                                    break e
                            }
                            x = void 0
                        }
                        else Wn ? Un(e, n) && (x = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (x = "onCompositionStart");
                        x && (Mn && "ko" !== n.locale && (Wn || "onCompositionStart" !== x ? "onCompositionEnd" === x && Wn && (b = en()) : (Jt = "value" in (Yt = a) ? Yt.value : Yt.textContent, Wn = !0)), 0 < (v = Kr(r, x)).length && (x = new yn(x, e, null, n, a), i.push({
                            event: x,
                            listeners: v
                        }), b ? x.data = b : null !== (b = Bn(n)) && (x.data = b))), (b = An ? function(e, t) {
                            switch (e) {
                                case "compositionend":
                                    return Bn(t);
                                case "keypress":
                                    return 32 !== t.which ? null : (Fn = !0, In);
                                case "textInput":
                                    return (e = t.data) === In && Fn ? null : e;
                                default:
                                    return null
                            }
                        }(e, n) : function(e, t) {
                            if (Wn) return "compositionend" === e || !Dn && Un(e, t) ? (e = en(), Zt = Jt = Yt = null, Wn = !1, e) : null;
                            switch (e) {
                                case "paste":
                                default:
                                    return null;
                                case "keypress":
                                    if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                                        if (t.char && 1 < t.char.length) return t.char;
                                        if (t.which) return String.fromCharCode(t.which)
                                    }
                                    return null;
                                case "compositionend":
                                    return Mn && "ko" !== t.locale ? null : t.data
                            }
                        }(e, n)) && (0 < (r = Kr(r, "onBeforeInput")).length && (a = new yn("onBeforeInput", "beforeinput", null, n, a), i.push({
                            event: a,
                            listeners: r
                        }), a.data = b))
                    }
                    Ir(i, t)
                }))
            }

            function Hr(e, t, n) {
                return {
                    instance: e,
                    listener: t,
                    currentTarget: n
                }
            }

            function Kr(e, t) {
                for (var n = t + "Capture", r = []; null !== e;) {
                    var a = e,
                        l = a.stateNode;
                    5 === a.tag && null !== l && (a = l, null != (l = Te(e, n)) && r.unshift(Hr(e, l, a)), null != (l = Te(e, t)) && r.push(Hr(e, l, a))), e = e.return
                }
                return r
            }

            function Qr(e) {
                if (null === e) return null;
                do {
                    e = e.return
                } while (e && 5 !== e.tag);
                return e || null
            }

            function Xr(e, t, n, r, a) {
                for (var l = t._reactName, i = []; null !== n && n !== r;) {
                    var o = n,
                        s = o.alternate,
                        c = o.stateNode;
                    if (null !== s && s === r) break;
                    5 === o.tag && null !== c && (o = c, a ? null != (s = Te(n, l)) && i.unshift(Hr(n, s, o)) : a || null != (s = Te(n, l)) && i.push(Hr(n, s, o))), n = n.return
                }
                0 !== i.length && e.push({
                    event: t,
                    listeners: i
                })
            }
            var qr = /\r\n?/g,
                Gr = /\u0000|\uFFFD/g;

            function Yr(e) {
                return ("string" === typeof e ? e : "" + e).replace(qr, "\n").replace(Gr, "")
            }

            function Jr(e, t, n) {
                if (t = Yr(t), Yr(e) !== t && n) throw Error(l(425))
            }

            function Zr() {}
            var ea = null,
                ta = null;

            function na(e, t) {
                return "textarea" === e || "noscript" === e || "string" === typeof t.children || "number" === typeof t.children || "object" === typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
            }
            var ra = "function" === typeof setTimeout ? setTimeout : void 0,
                aa = "function" === typeof clearTimeout ? clearTimeout : void 0,
                la = "function" === typeof Promise ? Promise : void 0,
                ia = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof la ? function(e) {
                    return la.resolve(null).then(e).catch(oa)
                } : ra;

            function oa(e) {
                setTimeout((function() {
                    throw e
                }))
            }

            function sa(e, t) {
                var n = t,
                    r = 0;
                do {
                    var a = n.nextSibling;
                    if (e.removeChild(n), a && 8 === a.nodeType)
                        if ("/$" === (n = a.data)) {
                            if (0 === r) return e.removeChild(a), void Wt(t);
                            r--
                        } else "$" !== n && "$?" !== n && "$!" !== n || r++;
                    n = a
                } while (n);
                Wt(t)
            }

            function ca(e) {
                for (; null != e; e = e.nextSibling) {
                    var t = e.nodeType;
                    if (1 === t || 3 === t) break;
                    if (8 === t) {
                        if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
                        if ("/$" === t) return null
                    }
                }
                return e
            }

            function ua(e) {
                e = e.previousSibling;
                for (var t = 0; e;) {
                    if (8 === e.nodeType) {
                        var n = e.data;
                        if ("$" === n || "$!" === n || "$?" === n) {
                            if (0 === t) return e;
                            t--
                        } else "/$" === n && t++
                    }
                    e = e.previousSibling
                }
                return null
            }
            var da = Math.random().toString(36).slice(2),
                fa = "__reactFiber$" + da,
                ha = "__reactProps$" + da,
                ma = "__reactContainer$" + da,
                pa = "__reactEvents$" + da,
                ga = "__reactListeners$" + da,
                va = "__reactHandles$" + da;

            function ba(e) {
                var t = e[fa];
                if (t) return t;
                for (var n = e.parentNode; n;) {
                    if (t = n[ma] || n[fa]) {
                        if (n = t.alternate, null !== t.child || null !== n && null !== n.child)
                            for (e = ua(e); null !== e;) {
                                if (n = e[fa]) return n;
                                e = ua(e)
                            }
                        return t
                    }
                    n = (e = n).parentNode
                }
                return null
            }

            function xa(e) {
                return !(e = e[fa] || e[ma]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e
            }

            function ya(e) {
                if (5 === e.tag || 6 === e.tag) return e.stateNode;
                throw Error(l(33))
            }

            function wa(e) {
                return e[ha] || null
            }
            var ja = [],
                ka = -1;

            function Na(e) {
                return {
                    current: e
                }
            }

            function Sa(e) {
                0 > ka || (e.current = ja[ka], ja[ka] = null, ka--)
            }

            function _a(e, t) {
                ka++, ja[ka] = e.current, e.current = t
            }
            var Ea = {},
                Ca = Na(Ea),
                Pa = Na(!1),
                za = Ea;

            function Oa(e, t) {
                var n = e.type.contextTypes;
                if (!n) return Ea;
                var r = e.stateNode;
                if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
                var a, l = {};
                for (a in n) l[a] = t[a];
                return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l
            }

            function Ta(e) {
                return null !== (e = e.childContextTypes) && void 0 !== e
            }

            function Ra() {
                Sa(Pa), Sa(Ca)
            }

            function Da(e, t, n) {
                if (Ca.current !== Ea) throw Error(l(168));
                _a(Ca, t), _a(Pa, n)
            }

            function La(e, t, n) {
                var r = e.stateNode;
                if (t = t.childContextTypes, "function" !== typeof r.getChildContext) return n;
                for (var a in r = r.getChildContext())
                    if (!(a in t)) throw Error(l(108, $(e) || "Unknown", a));
                return M({}, n, r)
            }

            function Aa(e) {
                return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ea, za = Ca.current, _a(Ca, e), _a(Pa, Pa.current), !0
            }

            function Ma(e, t, n) {
                var r = e.stateNode;
                if (!r) throw Error(l(169));
                n ? (e = La(e, t, za), r.__reactInternalMemoizedMergedChildContext = e, Sa(Pa), Sa(Ca), _a(Ca, e)) : Sa(Pa), _a(Pa, n)
            }
            var Ia = null,
                Fa = !1,
                Ua = !1;

            function Ba(e) {
                null === Ia ? Ia = [e] : Ia.push(e)
            }

            function Wa() {
                if (!Ua && null !== Ia) {
                    Ua = !0;
                    var e = 0,
                        t = xt;
                    try {
                        var n = Ia;
                        for (xt = 1; e < n.length; e++) {
                            var r = n[e];
                            do {
                                r = r(!0)
                            } while (null !== r)
                        }
                        Ia = null, Fa = !1
                    } catch (a) {
                        throw null !== Ia && (Ia = Ia.slice(e + 1)), Qe(Ze, Wa), a
                    } finally {
                        xt = t, Ua = !1
                    }
                }
                return null
            }
            var $a = [],
                Va = 0,
                Ha = null,
                Ka = 0,
                Qa = [],
                Xa = 0,
                qa = null,
                Ga = 1,
                Ya = "";

            function Ja(e, t) {
                $a[Va++] = Ka, $a[Va++] = Ha, Ha = e, Ka = t
            }

            function Za(e, t, n) {
                Qa[Xa++] = Ga, Qa[Xa++] = Ya, Qa[Xa++] = qa, qa = e;
                var r = Ga;
                e = Ya;
                var a = 32 - it(r) - 1;
                r &= ~(1 << a), n += 1;
                var l = 32 - it(t) + a;
                if (30 < l) {
                    var i = a - a % 5;
                    l = (r & (1 << i) - 1).toString(32), r >>= i, a -= i, Ga = 1 << 32 - it(t) + a | n << a | r, Ya = l + e
                } else Ga = 1 << l | n << a | r, Ya = e
            }

            function el(e) {
                null !== e.return && (Ja(e, 1), Za(e, 1, 0))
            }

            function tl(e) {
                for (; e === Ha;) Ha = $a[--Va], $a[Va] = null, Ka = $a[--Va], $a[Va] = null;
                for (; e === qa;) qa = Qa[--Xa], Qa[Xa] = null, Ya = Qa[--Xa], Qa[Xa] = null, Ga = Qa[--Xa], Qa[Xa] = null
            }
            var nl = null,
                rl = null,
                al = !1,
                ll = null;

            function il(e, t) {
                var n = Oc(5, null, null, 0);
                n.elementType = "DELETED", n.stateNode = t, n.return = e, null === (t = e.deletions) ? (e.deletions = [n], e.flags |= 16) : t.push(n)
            }

            function ol(e, t) {
                switch (e.tag) {
                    case 5:
                        var n = e.type;
                        return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, nl = e, rl = ca(t.firstChild), !0);
                    case 6:
                        return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, nl = e, rl = null, !0);
                    case 13:
                        return null !== (t = 8 !== t.nodeType ? null : t) && (n = null !== qa ? {
                            id: Ga,
                            overflow: Ya
                        } : null, e.memoizedState = {
                            dehydrated: t,
                            treeContext: n,
                            retryLane: 1073741824
                        }, (n = Oc(18, null, null, 0)).stateNode = t, n.return = e, e.child = n, nl = e, rl = null, !0);
                    default:
                        return !1
                }
            }

            function sl(e) {
                return 0 !== (1 & e.mode) && 0 === (128 & e.flags)
            }

            function cl(e) {
                if (al) {
                    var t = rl;
                    if (t) {
                        var n = t;
                        if (!ol(e, t)) {
                            if (sl(e)) throw Error(l(418));
                            t = ca(n.nextSibling);
                            var r = nl;
                            t && ol(e, t) ? il(r, n) : (e.flags = -4097 & e.flags | 2, al = !1, nl = e)
                        }
                    } else {
                        if (sl(e)) throw Error(l(418));
                        e.flags = -4097 & e.flags | 2, al = !1, nl = e
                    }
                }
            }

            function ul(e) {
                for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;) e = e.return;
                nl = e
            }

            function dl(e) {
                if (e !== nl) return !1;
                if (!al) return ul(e), al = !0, !1;
                var t;
                if ((t = 3 !== e.tag) && !(t = 5 !== e.tag) && (t = "head" !== (t = e.type) && "body" !== t && !na(e.type, e.memoizedProps)), t && (t = rl)) {
                    if (sl(e)) throw fl(), Error(l(418));
                    for (; t;) il(e, t), t = ca(t.nextSibling)
                }
                if (ul(e), 13 === e.tag) {
                    if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(l(317));
                    e: {
                        for (e = e.nextSibling, t = 0; e;) {
                            if (8 === e.nodeType) {
                                var n = e.data;
                                if ("/$" === n) {
                                    if (0 === t) {
                                        rl = ca(e.nextSibling);
                                        break e
                                    }
                                    t--
                                } else "$" !== n && "$!" !== n && "$?" !== n || t++
                            }
                            e = e.nextSibling
                        }
                        rl = null
                    }
                } else rl = nl ? ca(e.stateNode.nextSibling) : null;
                return !0
            }

            function fl() {
                for (var e = rl; e;) e = ca(e.nextSibling)
            }

            function hl() {
                rl = nl = null, al = !1
            }

            function ml(e) {
                null === ll ? ll = [e] : ll.push(e)
            }
            var pl = y.ReactCurrentBatchConfig;

            function gl(e, t) {
                if (e && e.defaultProps) {
                    for (var n in t = M({}, t), e = e.defaultProps) void 0 === t[n] && (t[n] = e[n]);
                    return t
                }
                return t
            }
            var vl = Na(null),
                bl = null,
                xl = null,
                yl = null;

            function wl() {
                yl = xl = bl = null
            }

            function jl(e) {
                var t = vl.current;
                Sa(vl), e._currentValue = t
            }

            function kl(e, t, n) {
                for (; null !== e;) {
                    var r = e.alternate;
                    if ((e.childLanes & t) !== t ? (e.childLanes |= t, null !== r && (r.childLanes |= t)) : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
                    e = e.return
                }
            }

            function Nl(e, t) {
                bl = e, yl = xl = null, null !== (e = e.dependencies) && null !== e.firstContext && (0 !== (e.lanes & t) && (yo = !0), e.firstContext = null)
            }

            function Sl(e) {
                var t = e._currentValue;
                if (yl !== e)
                    if (e = {
                            context: e,
                            memoizedValue: t,
                            next: null
                        }, null === xl) {
                        if (null === bl) throw Error(l(308));
                        xl = e, bl.dependencies = {
                            lanes: 0,
                            firstContext: e
                        }
                    } else xl = xl.next = e;
                return t
            }
            var _l = null;

            function El(e) {
                null === _l ? _l = [e] : _l.push(e)
            }

            function Cl(e, t, n, r) {
                var a = t.interleaved;
                return null === a ? (n.next = n, El(t)) : (n.next = a.next, a.next = n), t.interleaved = n, Pl(e, r)
            }

            function Pl(e, t) {
                e.lanes |= t;
                var n = e.alternate;
                for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e;) e.childLanes |= t, null !== (n = e.alternate) && (n.childLanes |= t), n = e, e = e.return;
                return 3 === n.tag ? n.stateNode : null
            }
            var zl = !1;

            function Ol(e) {
                e.updateQueue = {
                    baseState: e.memoizedState,
                    firstBaseUpdate: null,
                    lastBaseUpdate: null,
                    shared: {
                        pending: null,
                        interleaved: null,
                        lanes: 0
                    },
                    effects: null
                }
            }

            function Tl(e, t) {
                e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
                    baseState: e.baseState,
                    firstBaseUpdate: e.firstBaseUpdate,
                    lastBaseUpdate: e.lastBaseUpdate,
                    shared: e.shared,
                    effects: e.effects
                })
            }

            function Rl(e, t) {
                return {
                    eventTime: e,
                    lane: t,
                    tag: 0,
                    payload: null,
                    callback: null,
                    next: null
                }
            }

            function Dl(e, t, n) {
                var r = e.updateQueue;
                if (null === r) return null;
                if (r = r.shared, 0 !== (2 & Cs)) {
                    var a = r.pending;
                    return null === a ? t.next = t : (t.next = a.next, a.next = t), r.pending = t, Pl(e, n)
                }
                return null === (a = r.interleaved) ? (t.next = t, El(r)) : (t.next = a.next, a.next = t), r.interleaved = t, Pl(e, n)
            }

            function Ll(e, t, n) {
                if (null !== (t = t.updateQueue) && (t = t.shared, 0 !== (4194240 & n))) {
                    var r = t.lanes;
                    n |= r &= e.pendingLanes, t.lanes = n, bt(e, n)
                }
            }

            function Al(e, t) {
                var n = e.updateQueue,
                    r = e.alternate;
                if (null !== r && n === (r = r.updateQueue)) {
                    var a = null,
                        l = null;
                    if (null !== (n = n.firstBaseUpdate)) {
                        do {
                            var i = {
                                eventTime: n.eventTime,
                                lane: n.lane,
                                tag: n.tag,
                                payload: n.payload,
                                callback: n.callback,
                                next: null
                            };
                            null === l ? a = l = i : l = l.next = i, n = n.next
                        } while (null !== n);
                        null === l ? a = l = t : l = l.next = t
                    } else a = l = t;
                    return n = {
                        baseState: r.baseState,
                        firstBaseUpdate: a,
                        lastBaseUpdate: l,
                        shared: r.shared,
                        effects: r.effects
                    }, void(e.updateQueue = n)
                }
                null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
            }

            function Ml(e, t, n, r) {
                var a = e.updateQueue;
                zl = !1;
                var l = a.firstBaseUpdate,
                    i = a.lastBaseUpdate,
                    o = a.shared.pending;
                if (null !== o) {
                    a.shared.pending = null;
                    var s = o,
                        c = s.next;
                    s.next = null, null === i ? l = c : i.next = c, i = s;
                    var u = e.alternate;
                    null !== u && ((o = (u = u.updateQueue).lastBaseUpdate) !== i && (null === o ? u.firstBaseUpdate = c : o.next = c, u.lastBaseUpdate = s))
                }
                if (null !== l) {
                    var d = a.baseState;
                    for (i = 0, u = c = s = null, o = l;;) {
                        var f = o.lane,
                            h = o.eventTime;
                        if ((r & f) === f) {
                            null !== u && (u = u.next = {
                                eventTime: h,
                                lane: 0,
                                tag: o.tag,
                                payload: o.payload,
                                callback: o.callback,
                                next: null
                            });
                            e: {
                                var m = e,
                                    p = o;
                                switch (f = t, h = n, p.tag) {
                                    case 1:
                                        if ("function" === typeof(m = p.payload)) {
                                            d = m.call(h, d, f);
                                            break e
                                        }
                                        d = m;
                                        break e;
                                    case 3:
                                        m.flags = -65537 & m.flags | 128;
                                    case 0:
                                        if (null === (f = "function" === typeof(m = p.payload) ? m.call(h, d, f) : m) || void 0 === f) break e;
                                        d = M({}, d, f);
                                        break e;
                                    case 2:
                                        zl = !0
                                }
                            }
                            null !== o.callback && 0 !== o.lane && (e.flags |= 64, null === (f = a.effects) ? a.effects = [o] : f.push(o))
                        } else h = {
                            eventTime: h,
                            lane: f,
                            tag: o.tag,
                            payload: o.payload,
                            callback: o.callback,
                            next: null
                        }, null === u ? (c = u = h, s = d) : u = u.next = h, i |= f;
                        if (null === (o = o.next)) {
                            if (null === (o = a.shared.pending)) break;
                            o = (f = o).next, f.next = null, a.lastBaseUpdate = f, a.shared.pending = null
                        }
                    }
                    if (null === u && (s = d), a.baseState = s, a.firstBaseUpdate = c, a.lastBaseUpdate = u, null !== (t = a.shared.interleaved)) {
                        a = t;
                        do {
                            i |= a.lane, a = a.next
                        } while (a !== t)
                    } else null === l && (a.shared.lanes = 0);
                    As |= i, e.lanes = i, e.memoizedState = d
                }
            }

            function Il(e, t, n) {
                if (e = t.effects, t.effects = null, null !== e)
                    for (t = 0; t < e.length; t++) {
                        var r = e[t],
                            a = r.callback;
                        if (null !== a) {
                            if (r.callback = null, r = n, "function" !== typeof a) throw Error(l(191, a));
                            a.call(r)
                        }
                    }
            }
            var Fl = (new r.Component).refs;

            function Ul(e, t, n, r) {
                n = null === (n = n(r, t = e.memoizedState)) || void 0 === n ? t : M({}, t, n), e.memoizedState = n, 0 === e.lanes && (e.updateQueue.baseState = n)
            }
            var Bl = {
                isMounted: function(e) {
                    return !!(e = e._reactInternals) && We(e) === e
                },
                enqueueSetState: function(e, t, n) {
                    e = e._reactInternals;
                    var r = ec(),
                        a = tc(e),
                        l = Rl(r, a);
                    l.payload = t, void 0 !== n && null !== n && (l.callback = n), null !== (t = Dl(e, l, a)) && (nc(t, e, a, r), Ll(t, e, a))
                },
                enqueueReplaceState: function(e, t, n) {
                    e = e._reactInternals;
                    var r = ec(),
                        a = tc(e),
                        l = Rl(r, a);
                    l.tag = 1, l.payload = t, void 0 !== n && null !== n && (l.callback = n), null !== (t = Dl(e, l, a)) && (nc(t, e, a, r), Ll(t, e, a))
                },
                enqueueForceUpdate: function(e, t) {
                    e = e._reactInternals;
                    var n = ec(),
                        r = tc(e),
                        a = Rl(n, r);
                    a.tag = 2, void 0 !== t && null !== t && (a.callback = t), null !== (t = Dl(e, a, r)) && (nc(t, e, r, n), Ll(t, e, r))
                }
            };

            function Wl(e, t, n, r, a, l, i) {
                return "function" === typeof(e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, l, i) : !t.prototype || !t.prototype.isPureReactComponent || (!sr(n, r) || !sr(a, l))
            }

            function $l(e, t, n) {
                var r = !1,
                    a = Ea,
                    l = t.contextType;
                return "object" === typeof l && null !== l ? l = Sl(l) : (a = Ta(t) ? za : Ca.current, l = (r = null !== (r = t.contextTypes) && void 0 !== r) ? Oa(e, a) : Ea), t = new t(n, l), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = Bl, e.stateNode = t, t._reactInternals = e, r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = l), t
            }

            function Vl(e, t, n, r) {
                e = t.state, "function" === typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" === typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Bl.enqueueReplaceState(t, t.state, null)
            }

            function Hl(e, t, n, r) {
                var a = e.stateNode;
                a.props = n, a.state = e.memoizedState, a.refs = Fl, Ol(e);
                var l = t.contextType;
                "object" === typeof l && null !== l ? a.context = Sl(l) : (l = Ta(t) ? za : Ca.current, a.context = Oa(e, l)), a.state = e.memoizedState, "function" === typeof(l = t.getDerivedStateFromProps) && (Ul(e, t, l, n), a.state = e.memoizedState), "function" === typeof t.getDerivedStateFromProps || "function" === typeof a.getSnapshotBeforeUpdate || "function" !== typeof a.UNSAFE_componentWillMount && "function" !== typeof a.componentWillMount || (t = a.state, "function" === typeof a.componentWillMount && a.componentWillMount(), "function" === typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(), t !== a.state && Bl.enqueueReplaceState(a, a.state, null), Ml(e, n, a, r), a.state = e.memoizedState), "function" === typeof a.componentDidMount && (e.flags |= 4194308)
            }

            function Kl(e, t, n) {
                if (null !== (e = n.ref) && "function" !== typeof e && "object" !== typeof e) {
                    if (n._owner) {
                        if (n = n._owner) {
                            if (1 !== n.tag) throw Error(l(309));
                            var r = n.stateNode
                        }
                        if (!r) throw Error(l(147, e));
                        var a = r,
                            i = "" + e;
                        return null !== t && null !== t.ref && "function" === typeof t.ref && t.ref._stringRef === i ? t.ref : (t = function(e) {
                            var t = a.refs;
                            t === Fl && (t = a.refs = {}), null === e ? delete t[i] : t[i] = e
                        }, t._stringRef = i, t)
                    }
                    if ("string" !== typeof e) throw Error(l(284));
                    if (!n._owner) throw Error(l(290, e))
                }
                return e
            }

            function Ql(e, t) {
                throw e = Object.prototype.toString.call(t), Error(l(31, "[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
            }

            function Xl(e) {
                return (0, e._init)(e._payload)
            }

            function ql(e) {
                function t(t, n) {
                    if (e) {
                        var r = t.deletions;
                        null === r ? (t.deletions = [n], t.flags |= 16) : r.push(n)
                    }
                }

                function n(n, r) {
                    if (!e) return null;
                    for (; null !== r;) t(n, r), r = r.sibling;
                    return null
                }

                function r(e, t) {
                    for (e = new Map; null !== t;) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling;
                    return e
                }

                function a(e, t) {
                    return (e = Rc(e, t)).index = 0, e.sibling = null, e
                }

                function i(t, n, r) {
                    return t.index = r, e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.flags |= 2, n) : r : (t.flags |= 2, n) : (t.flags |= 1048576, n)
                }

                function o(t) {
                    return e && null === t.alternate && (t.flags |= 2), t
                }

                function s(e, t, n, r) {
                    return null === t || 6 !== t.tag ? ((t = Mc(n, e.mode, r)).return = e, t) : ((t = a(t, n)).return = e, t)
                }

                function c(e, t, n, r) {
                    var l = n.type;
                    return l === k ? d(e, t, n.props.children, r, n.key) : null !== t && (t.elementType === l || "object" === typeof l && null !== l && l.$$typeof === T && Xl(l) === t.type) ? ((r = a(t, n.props)).ref = Kl(e, t, n), r.return = e, r) : ((r = Dc(n.type, n.key, n.props, null, e.mode, r)).ref = Kl(e, t, n), r.return = e, r)
                }

                function u(e, t, n, r) {
                    return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = Ic(n, e.mode, r)).return = e, t) : ((t = a(t, n.children || [])).return = e, t)
                }

                function d(e, t, n, r, l) {
                    return null === t || 7 !== t.tag ? ((t = Lc(n, e.mode, r, l)).return = e, t) : ((t = a(t, n)).return = e, t)
                }

                function f(e, t, n) {
                    if ("string" === typeof t && "" !== t || "number" === typeof t) return (t = Mc("" + t, e.mode, n)).return = e, t;
                    if ("object" === typeof t && null !== t) {
                        switch (t.$$typeof) {
                            case w:
                                return (n = Dc(t.type, t.key, t.props, null, e.mode, n)).ref = Kl(e, null, t), n.return = e, n;
                            case j:
                                return (t = Ic(t, e.mode, n)).return = e, t;
                            case T:
                                return f(e, (0, t._init)(t._payload), n)
                        }
                        if (te(t) || L(t)) return (t = Lc(t, e.mode, n, null)).return = e, t;
                        Ql(e, t)
                    }
                    return null
                }

                function h(e, t, n, r) {
                    var a = null !== t ? t.key : null;
                    if ("string" === typeof n && "" !== n || "number" === typeof n) return null !== a ? null : s(e, t, "" + n, r);
                    if ("object" === typeof n && null !== n) {
                        switch (n.$$typeof) {
                            case w:
                                return n.key === a ? c(e, t, n, r) : null;
                            case j:
                                return n.key === a ? u(e, t, n, r) : null;
                            case T:
                                return h(e, t, (a = n._init)(n._payload), r)
                        }
                        if (te(n) || L(n)) return null !== a ? null : d(e, t, n, r, null);
                        Ql(e, n)
                    }
                    return null
                }

                function m(e, t, n, r, a) {
                    if ("string" === typeof r && "" !== r || "number" === typeof r) return s(t, e = e.get(n) || null, "" + r, a);
                    if ("object" === typeof r && null !== r) {
                        switch (r.$$typeof) {
                            case w:
                                return c(t, e = e.get(null === r.key ? n : r.key) || null, r, a);
                            case j:
                                return u(t, e = e.get(null === r.key ? n : r.key) || null, r, a);
                            case T:
                                return m(e, t, n, (0, r._init)(r._payload), a)
                        }
                        if (te(r) || L(r)) return d(t, e = e.get(n) || null, r, a, null);
                        Ql(t, r)
                    }
                    return null
                }

                function p(a, l, o, s) {
                    for (var c = null, u = null, d = l, p = l = 0, g = null; null !== d && p < o.length; p++) {
                        d.index > p ? (g = d, d = null) : g = d.sibling;
                        var v = h(a, d, o[p], s);
                        if (null === v) {
                            null === d && (d = g);
                            break
                        }
                        e && d && null === v.alternate && t(a, d), l = i(v, l, p), null === u ? c = v : u.sibling = v, u = v, d = g
                    }
                    if (p === o.length) return n(a, d), al && Ja(a, p), c;
                    if (null === d) {
                        for (; p < o.length; p++) null !== (d = f(a, o[p], s)) && (l = i(d, l, p), null === u ? c = d : u.sibling = d, u = d);
                        return al && Ja(a, p), c
                    }
                    for (d = r(a, d); p < o.length; p++) null !== (g = m(d, a, p, o[p], s)) && (e && null !== g.alternate && d.delete(null === g.key ? p : g.key), l = i(g, l, p), null === u ? c = g : u.sibling = g, u = g);
                    return e && d.forEach((function(e) {
                        return t(a, e)
                    })), al && Ja(a, p), c
                }

                function g(a, o, s, c) {
                    var u = L(s);
                    if ("function" !== typeof u) throw Error(l(150));
                    if (null == (s = u.call(s))) throw Error(l(151));
                    for (var d = u = null, p = o, g = o = 0, v = null, b = s.next(); null !== p && !b.done; g++, b = s.next()) {
                        p.index > g ? (v = p, p = null) : v = p.sibling;
                        var x = h(a, p, b.value, c);
                        if (null === x) {
                            null === p && (p = v);
                            break
                        }
                        e && p && null === x.alternate && t(a, p), o = i(x, o, g), null === d ? u = x : d.sibling = x, d = x, p = v
                    }
                    if (b.done) return n(a, p), al && Ja(a, g), u;
                    if (null === p) {
                        for (; !b.done; g++, b = s.next()) null !== (b = f(a, b.value, c)) && (o = i(b, o, g), null === d ? u = b : d.sibling = b, d = b);
                        return al && Ja(a, g), u
                    }
                    for (p = r(a, p); !b.done; g++, b = s.next()) null !== (b = m(p, a, g, b.value, c)) && (e && null !== b.alternate && p.delete(null === b.key ? g : b.key), o = i(b, o, g), null === d ? u = b : d.sibling = b, d = b);
                    return e && p.forEach((function(e) {
                        return t(a, e)
                    })), al && Ja(a, g), u
                }
                return function e(r, l, i, s) {
                    if ("object" === typeof i && null !== i && i.type === k && null === i.key && (i = i.props.children), "object" === typeof i && null !== i) {
                        switch (i.$$typeof) {
                            case w:
                                e: {
                                    for (var c = i.key, u = l; null !== u;) {
                                        if (u.key === c) {
                                            if ((c = i.type) === k) {
                                                if (7 === u.tag) {
                                                    n(r, u.sibling), (l = a(u, i.props.children)).return = r, r = l;
                                                    break e
                                                }
                                            } else if (u.elementType === c || "object" === typeof c && null !== c && c.$$typeof === T && Xl(c) === u.type) {
                                                n(r, u.sibling), (l = a(u, i.props)).ref = Kl(r, u, i), l.return = r, r = l;
                                                break e
                                            }
                                            n(r, u);
                                            break
                                        }
                                        t(r, u), u = u.sibling
                                    }
                                    i.type === k ? ((l = Lc(i.props.children, r.mode, s, i.key)).return = r, r = l) : ((s = Dc(i.type, i.key, i.props, null, r.mode, s)).ref = Kl(r, l, i), s.return = r, r = s)
                                }
                                return o(r);
                            case j:
                                e: {
                                    for (u = i.key; null !== l;) {
                                        if (l.key === u) {
                                            if (4 === l.tag && l.stateNode.containerInfo === i.containerInfo && l.stateNode.implementation === i.implementation) {
                                                n(r, l.sibling), (l = a(l, i.children || [])).return = r, r = l;
                                                break e
                                            }
                                            n(r, l);
                                            break
                                        }
                                        t(r, l), l = l.sibling
                                    }(l = Ic(i, r.mode, s)).return = r,
                                    r = l
                                }
                                return o(r);
                            case T:
                                return e(r, l, (u = i._init)(i._payload), s)
                        }
                        if (te(i)) return p(r, l, i, s);
                        if (L(i)) return g(r, l, i, s);
                        Ql(r, i)
                    }
                    return "string" === typeof i && "" !== i || "number" === typeof i ? (i = "" + i, null !== l && 6 === l.tag ? (n(r, l.sibling), (l = a(l, i)).return = r, r = l) : (n(r, l), (l = Mc(i, r.mode, s)).return = r, r = l), o(r)) : n(r, l)
                }
            }
            var Gl = ql(!0),
                Yl = ql(!1),
                Jl = {},
                Zl = Na(Jl),
                ei = Na(Jl),
                ti = Na(Jl);

            function ni(e) {
                if (e === Jl) throw Error(l(174));
                return e
            }

            function ri(e, t) {
                switch (_a(ti, t), _a(ei, e), _a(Zl, Jl), e = t.nodeType) {
                    case 9:
                    case 11:
                        t = (t = t.documentElement) ? t.namespaceURI : se(null, "");
                        break;
                    default:
                        t = se(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null, e = e.tagName)
                }
                Sa(Zl), _a(Zl, t)
            }

            function ai() {
                Sa(Zl), Sa(ei), Sa(ti)
            }

            function li(e) {
                ni(ti.current);
                var t = ni(Zl.current),
                    n = se(t, e.type);
                t !== n && (_a(ei, e), _a(Zl, n))
            }

            function ii(e) {
                ei.current === e && (Sa(Zl), Sa(ei))
            }
            var oi = Na(0);

            function si(e) {
                for (var t = e; null !== t;) {
                    if (13 === t.tag) {
                        var n = t.memoizedState;
                        if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)) return t
                    } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                        if (0 !== (128 & t.flags)) return t
                    } else if (null !== t.child) {
                        t.child.return = t, t = t.child;
                        continue
                    }
                    if (t === e) break;
                    for (; null === t.sibling;) {
                        if (null === t.return || t.return === e) return null;
                        t = t.return
                    }
                    t.sibling.return = t.return, t = t.sibling
                }
                return null
            }
            var ci = [];

            function ui() {
                for (var e = 0; e < ci.length; e++) ci[e]._workInProgressVersionPrimary = null;
                ci.length = 0
            }
            var di = y.ReactCurrentDispatcher,
                fi = y.ReactCurrentBatchConfig,
                hi = 0,
                mi = null,
                pi = null,
                gi = null,
                vi = !1,
                bi = !1,
                xi = 0,
                yi = 0;

            function wi() {
                throw Error(l(321))
            }

            function ji(e, t) {
                if (null === t) return !1;
                for (var n = 0; n < t.length && n < e.length; n++)
                    if (!or(e[n], t[n])) return !1;
                return !0
            }

            function ki(e, t, n, r, a, i) {
                if (hi = i, mi = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, di.current = null === e || null === e.memoizedState ? io : oo, e = n(r, a), bi) {
                    i = 0;
                    do {
                        if (bi = !1, xi = 0, 25 <= i) throw Error(l(301));
                        i += 1, gi = pi = null, t.updateQueue = null, di.current = so, e = n(r, a)
                    } while (bi)
                }
                if (di.current = lo, t = null !== pi && null !== pi.next, hi = 0, gi = pi = mi = null, vi = !1, t) throw Error(l(300));
                return e
            }

            function Ni() {
                var e = 0 !== xi;
                return xi = 0, e
            }

            function Si() {
                var e = {
                    memoizedState: null,
                    baseState: null,
                    baseQueue: null,
                    queue: null,
                    next: null
                };
                return null === gi ? mi.memoizedState = gi = e : gi = gi.next = e, gi
            }

            function _i() {
                if (null === pi) {
                    var e = mi.alternate;
                    e = null !== e ? e.memoizedState : null
                } else e = pi.next;
                var t = null === gi ? mi.memoizedState : gi.next;
                if (null !== t) gi = t, pi = e;
                else {
                    if (null === e) throw Error(l(310));
                    e = {
                        memoizedState: (pi = e).memoizedState,
                        baseState: pi.baseState,
                        baseQueue: pi.baseQueue,
                        queue: pi.queue,
                        next: null
                    }, null === gi ? mi.memoizedState = gi = e : gi = gi.next = e
                }
                return gi
            }

            function Ei(e, t) {
                return "function" === typeof t ? t(e) : t
            }

            function Ci(e) {
                var t = _i(),
                    n = t.queue;
                if (null === n) throw Error(l(311));
                n.lastRenderedReducer = e;
                var r = pi,
                    a = r.baseQueue,
                    i = n.pending;
                if (null !== i) {
                    if (null !== a) {
                        var o = a.next;
                        a.next = i.next, i.next = o
                    }
                    r.baseQueue = a = i, n.pending = null
                }
                if (null !== a) {
                    i = a.next, r = r.baseState;
                    var s = o = null,
                        c = null,
                        u = i;
                    do {
                        var d = u.lane;
                        if ((hi & d) === d) null !== c && (c = c.next = {
                            lane: 0,
                            action: u.action,
                            hasEagerState: u.hasEagerState,
                            eagerState: u.eagerState,
                            next: null
                        }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
                        else {
                            var f = {
                                lane: d,
                                action: u.action,
                                hasEagerState: u.hasEagerState,
                                eagerState: u.eagerState,
                                next: null
                            };
                            null === c ? (s = c = f, o = r) : c = c.next = f, mi.lanes |= d, As |= d
                        }
                        u = u.next
                    } while (null !== u && u !== i);
                    null === c ? o = r : c.next = s, or(r, t.memoizedState) || (yo = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = c, n.lastRenderedState = r
                }
                if (null !== (e = n.interleaved)) {
                    a = e;
                    do {
                        i = a.lane, mi.lanes |= i, As |= i, a = a.next
                    } while (a !== e)
                } else null === a && (n.lanes = 0);
                return [t.memoizedState, n.dispatch]
            }

            function Pi(e) {
                var t = _i(),
                    n = t.queue;
                if (null === n) throw Error(l(311));
                n.lastRenderedReducer = e;
                var r = n.dispatch,
                    a = n.pending,
                    i = t.memoizedState;
                if (null !== a) {
                    n.pending = null;
                    var o = a = a.next;
                    do {
                        i = e(i, o.action), o = o.next
                    } while (o !== a);
                    or(i, t.memoizedState) || (yo = !0), t.memoizedState = i, null === t.baseQueue && (t.baseState = i), n.lastRenderedState = i
                }
                return [i, r]
            }

            function zi() {}

            function Oi(e, t) {
                var n = mi,
                    r = _i(),
                    a = t(),
                    i = !or(r.memoizedState, a);
                if (i && (r.memoizedState = a, yo = !0), r = r.queue, $i(Di.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || null !== gi && 1 & gi.memoizedState.tag) {
                    if (n.flags |= 2048, Ii(9, Ri.bind(null, n, r, a, t), void 0, null), null === Ps) throw Error(l(349));
                    0 !== (30 & hi) || Ti(n, t, a)
                }
                return a
            }

            function Ti(e, t, n) {
                e.flags |= 16384, e = {
                    getSnapshot: t,
                    value: n
                }, null === (t = mi.updateQueue) ? (t = {
                    lastEffect: null,
                    stores: null
                }, mi.updateQueue = t, t.stores = [e]) : null === (n = t.stores) ? t.stores = [e] : n.push(e)
            }

            function Ri(e, t, n, r) {
                t.value = n, t.getSnapshot = r, Li(t) && Ai(e)
            }

            function Di(e, t, n) {
                return n((function() {
                    Li(t) && Ai(e)
                }))
            }

            function Li(e) {
                var t = e.getSnapshot;
                e = e.value;
                try {
                    var n = t();
                    return !or(e, n)
                } catch (r) {
                    return !0
                }
            }

            function Ai(e) {
                var t = Pl(e, 1);
                null !== t && nc(t, e, 1, -1)
            }

            function Mi(e) {
                var t = Si();
                return "function" === typeof e && (e = e()), t.memoizedState = t.baseState = e, e = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: Ei,
                    lastRenderedState: e
                }, t.queue = e, e = e.dispatch = to.bind(null, mi, e), [t.memoizedState, e]
            }

            function Ii(e, t, n, r) {
                return e = {
                    tag: e,
                    create: t,
                    destroy: n,
                    deps: r,
                    next: null
                }, null === (t = mi.updateQueue) ? (t = {
                    lastEffect: null,
                    stores: null
                }, mi.updateQueue = t, t.lastEffect = e.next = e) : null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e
            }

            function Fi() {
                return _i().memoizedState
            }

            function Ui(e, t, n, r) {
                var a = Si();
                mi.flags |= e, a.memoizedState = Ii(1 | t, n, void 0, void 0 === r ? null : r)
            }

            function Bi(e, t, n, r) {
                var a = _i();
                r = void 0 === r ? null : r;
                var l = void 0;
                if (null !== pi) {
                    var i = pi.memoizedState;
                    if (l = i.destroy, null !== r && ji(r, i.deps)) return void(a.memoizedState = Ii(t, n, l, r))
                }
                mi.flags |= e, a.memoizedState = Ii(1 | t, n, l, r)
            }

            function Wi(e, t) {
                return Ui(8390656, 8, e, t)
            }

            function $i(e, t) {
                return Bi(2048, 8, e, t)
            }

            function Vi(e, t) {
                return Bi(4, 2, e, t)
            }

            function Hi(e, t) {
                return Bi(4, 4, e, t)
            }

            function Ki(e, t) {
                return "function" === typeof t ? (e = e(), t(e), function() {
                    t(null)
                }) : null !== t && void 0 !== t ? (e = e(), t.current = e, function() {
                    t.current = null
                }) : void 0
            }

            function Qi(e, t, n) {
                return n = null !== n && void 0 !== n ? n.concat([e]) : null, Bi(4, 4, Ki.bind(null, t, e), n)
            }

            function Xi() {}

            function qi(e, t) {
                var n = _i();
                t = void 0 === t ? null : t;
                var r = n.memoizedState;
                return null !== r && null !== t && ji(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
            }

            function Gi(e, t) {
                var n = _i();
                t = void 0 === t ? null : t;
                var r = n.memoizedState;
                return null !== r && null !== t && ji(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
            }

            function Yi(e, t, n) {
                return 0 === (21 & hi) ? (e.baseState && (e.baseState = !1, yo = !0), e.memoizedState = n) : (or(n, t) || (n = pt(), mi.lanes |= n, As |= n, e.baseState = !0), t)
            }

            function Ji(e, t) {
                var n = xt;
                xt = 0 !== n && 4 > n ? n : 4, e(!0);
                var r = fi.transition;
                fi.transition = {};
                try {
                    e(!1), t()
                } finally {
                    xt = n, fi.transition = r
                }
            }

            function Zi() {
                return _i().memoizedState
            }

            function eo(e, t, n) {
                var r = tc(e);
                if (n = {
                        lane: r,
                        action: n,
                        hasEagerState: !1,
                        eagerState: null,
                        next: null
                    }, no(e)) ro(t, n);
                else if (null !== (n = Cl(e, t, n, r))) {
                    nc(n, e, r, ec()), ao(n, t, r)
                }
            }

            function to(e, t, n) {
                var r = tc(e),
                    a = {
                        lane: r,
                        action: n,
                        hasEagerState: !1,
                        eagerState: null,
                        next: null
                    };
                if (no(e)) ro(t, a);
                else {
                    var l = e.alternate;
                    if (0 === e.lanes && (null === l || 0 === l.lanes) && null !== (l = t.lastRenderedReducer)) try {
                        var i = t.lastRenderedState,
                            o = l(i, n);
                        if (a.hasEagerState = !0, a.eagerState = o, or(o, i)) {
                            var s = t.interleaved;
                            return null === s ? (a.next = a, El(t)) : (a.next = s.next, s.next = a), void(t.interleaved = a)
                        }
                    } catch (c) {}
                    null !== (n = Cl(e, t, a, r)) && (nc(n, e, r, a = ec()), ao(n, t, r))
                }
            }

            function no(e) {
                var t = e.alternate;
                return e === mi || null !== t && t === mi
            }

            function ro(e, t) {
                bi = vi = !0;
                var n = e.pending;
                null === n ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
            }

            function ao(e, t, n) {
                if (0 !== (4194240 & n)) {
                    var r = t.lanes;
                    n |= r &= e.pendingLanes, t.lanes = n, bt(e, n)
                }
            }
            var lo = {
                    readContext: Sl,
                    useCallback: wi,
                    useContext: wi,
                    useEffect: wi,
                    useImperativeHandle: wi,
                    useInsertionEffect: wi,
                    useLayoutEffect: wi,
                    useMemo: wi,
                    useReducer: wi,
                    useRef: wi,
                    useState: wi,
                    useDebugValue: wi,
                    useDeferredValue: wi,
                    useTransition: wi,
                    useMutableSource: wi,
                    useSyncExternalStore: wi,
                    useId: wi,
                    unstable_isNewReconciler: !1
                },
                io = {
                    readContext: Sl,
                    useCallback: function(e, t) {
                        return Si().memoizedState = [e, void 0 === t ? null : t], e
                    },
                    useContext: Sl,
                    useEffect: Wi,
                    useImperativeHandle: function(e, t, n) {
                        return n = null !== n && void 0 !== n ? n.concat([e]) : null, Ui(4194308, 4, Ki.bind(null, t, e), n)
                    },
                    useLayoutEffect: function(e, t) {
                        return Ui(4194308, 4, e, t)
                    },
                    useInsertionEffect: function(e, t) {
                        return Ui(4, 2, e, t)
                    },
                    useMemo: function(e, t) {
                        var n = Si();
                        return t = void 0 === t ? null : t, e = e(), n.memoizedState = [e, t], e
                    },
                    useReducer: function(e, t, n) {
                        var r = Si();
                        return t = void 0 !== n ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                            pending: null,
                            interleaved: null,
                            lanes: 0,
                            dispatch: null,
                            lastRenderedReducer: e,
                            lastRenderedState: t
                        }, r.queue = e, e = e.dispatch = eo.bind(null, mi, e), [r.memoizedState, e]
                    },
                    useRef: function(e) {
                        return e = {
                            current: e
                        }, Si().memoizedState = e
                    },
                    useState: Mi,
                    useDebugValue: Xi,
                    useDeferredValue: function(e) {
                        return Si().memoizedState = e
                    },
                    useTransition: function() {
                        var e = Mi(!1),
                            t = e[0];
                        return e = Ji.bind(null, e[1]), Si().memoizedState = e, [t, e]
                    },
                    useMutableSource: function() {},
                    useSyncExternalStore: function(e, t, n) {
                        var r = mi,
                            a = Si();
                        if (al) {
                            if (void 0 === n) throw Error(l(407));
                            n = n()
                        } else {
                            if (n = t(), null === Ps) throw Error(l(349));
                            0 !== (30 & hi) || Ti(r, t, n)
                        }
                        a.memoizedState = n;
                        var i = {
                            value: n,
                            getSnapshot: t
                        };
                        return a.queue = i, Wi(Di.bind(null, r, i, e), [e]), r.flags |= 2048, Ii(9, Ri.bind(null, r, i, n, t), void 0, null), n
                    },
                    useId: function() {
                        var e = Si(),
                            t = Ps.identifierPrefix;
                        if (al) {
                            var n = Ya;
                            t = ":" + t + "R" + (n = (Ga & ~(1 << 32 - it(Ga) - 1)).toString(32) + n), 0 < (n = xi++) && (t += "H" + n.toString(32)), t += ":"
                        } else t = ":" + t + "r" + (n = yi++).toString(32) + ":";
                        return e.memoizedState = t
                    },
                    unstable_isNewReconciler: !1
                },
                oo = {
                    readContext: Sl,
                    useCallback: qi,
                    useContext: Sl,
                    useEffect: $i,
                    useImperativeHandle: Qi,
                    useInsertionEffect: Vi,
                    useLayoutEffect: Hi,
                    useMemo: Gi,
                    useReducer: Ci,
                    useRef: Fi,
                    useState: function() {
                        return Ci(Ei)
                    },
                    useDebugValue: Xi,
                    useDeferredValue: function(e) {
                        return Yi(_i(), pi.memoizedState, e)
                    },
                    useTransition: function() {
                        return [Ci(Ei)[0], _i().memoizedState]
                    },
                    useMutableSource: zi,
                    useSyncExternalStore: Oi,
                    useId: Zi,
                    unstable_isNewReconciler: !1
                },
                so = {
                    readContext: Sl,
                    useCallback: qi,
                    useContext: Sl,
                    useEffect: $i,
                    useImperativeHandle: Qi,
                    useInsertionEffect: Vi,
                    useLayoutEffect: Hi,
                    useMemo: Gi,
                    useReducer: Pi,
                    useRef: Fi,
                    useState: function() {
                        return Pi(Ei)
                    },
                    useDebugValue: Xi,
                    useDeferredValue: function(e) {
                        var t = _i();
                        return null === pi ? t.memoizedState = e : Yi(t, pi.memoizedState, e)
                    },
                    useTransition: function() {
                        return [Pi(Ei)[0], _i().memoizedState]
                    },
                    useMutableSource: zi,
                    useSyncExternalStore: Oi,
                    useId: Zi,
                    unstable_isNewReconciler: !1
                };

            function co(e, t) {
                try {
                    var n = "",
                        r = t;
                    do {
                        n += B(r), r = r.return
                    } while (r);
                    var a = n
                } catch (l) {
                    a = "\nError generating stack: " + l.message + "\n" + l.stack
                }
                return {
                    value: e,
                    source: t,
                    stack: a,
                    digest: null
                }
            }

            function uo(e, t, n) {
                return {
                    value: e,
                    source: null,
                    stack: null != n ? n : null,
                    digest: null != t ? t : null
                }
            }

            function fo(e, t) {
                try {
                    console.error(t.value)
                } catch (n) {
                    setTimeout((function() {
                        throw n
                    }))
                }
            }
            var ho = "function" === typeof WeakMap ? WeakMap : Map;

            function mo(e, t, n) {
                (n = Rl(-1, n)).tag = 3, n.payload = {
                    element: null
                };
                var r = t.value;
                return n.callback = function() {
                    Vs || (Vs = !0, Hs = r), fo(0, t)
                }, n
            }

            function po(e, t, n) {
                (n = Rl(-1, n)).tag = 3;
                var r = e.type.getDerivedStateFromError;
                if ("function" === typeof r) {
                    var a = t.value;
                    n.payload = function() {
                        return r(a)
                    }, n.callback = function() {
                        fo(0, t)
                    }
                }
                var l = e.stateNode;
                return null !== l && "function" === typeof l.componentDidCatch && (n.callback = function() {
                    fo(0, t), "function" !== typeof r && (null === Ks ? Ks = new Set([this]) : Ks.add(this));
                    var e = t.stack;
                    this.componentDidCatch(t.value, {
                        componentStack: null !== e ? e : ""
                    })
                }), n
            }

            function go(e, t, n) {
                var r = e.pingCache;
                if (null === r) {
                    r = e.pingCache = new ho;
                    var a = new Set;
                    r.set(t, a)
                } else void 0 === (a = r.get(t)) && (a = new Set, r.set(t, a));
                a.has(n) || (a.add(n), e = Sc.bind(null, e, t, n), t.then(e, e))
            }

            function vo(e) {
                do {
                    var t;
                    if ((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated), t) return e;
                    e = e.return
                } while (null !== e);
                return null
            }

            function bo(e, t, n, r, a) {
                return 0 === (1 & e.mode) ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, 1 === n.tag && (null === n.alternate ? n.tag = 17 : ((t = Rl(-1, 1)).tag = 2, Dl(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = a, e)
            }
            var xo = y.ReactCurrentOwner,
                yo = !1;

            function wo(e, t, n, r) {
                t.child = null === e ? Yl(t, null, n, r) : Gl(t, e.child, n, r)
            }

            function jo(e, t, n, r, a) {
                n = n.render;
                var l = t.ref;
                return Nl(t, a), r = ki(e, t, n, r, l, a), n = Ni(), null === e || yo ? (al && n && el(t), t.flags |= 1, wo(e, t, r, a), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Vo(e, t, a))
            }

            function ko(e, t, n, r, a) {
                if (null === e) {
                    var l = n.type;
                    return "function" !== typeof l || Tc(l) || void 0 !== l.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = Dc(n.type, null, r, t, t.mode, a)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = l, No(e, t, l, r, a))
                }
                if (l = e.child, 0 === (e.lanes & a)) {
                    var i = l.memoizedProps;
                    if ((n = null !== (n = n.compare) ? n : sr)(i, r) && e.ref === t.ref) return Vo(e, t, a)
                }
                return t.flags |= 1, (e = Rc(l, r)).ref = t.ref, e.return = t, t.child = e
            }

            function No(e, t, n, r, a) {
                if (null !== e) {
                    var l = e.memoizedProps;
                    if (sr(l, r) && e.ref === t.ref) {
                        if (yo = !1, t.pendingProps = r = l, 0 === (e.lanes & a)) return t.lanes = e.lanes, Vo(e, t, a);
                        0 !== (131072 & e.flags) && (yo = !0)
                    }
                }
                return Eo(e, t, n, r, a)
            }

            function So(e, t, n) {
                var r = t.pendingProps,
                    a = r.children,
                    l = null !== e ? e.memoizedState : null;
                if ("hidden" === r.mode)
                    if (0 === (1 & t.mode)) t.memoizedState = {
                        baseLanes: 0,
                        cachePool: null,
                        transitions: null
                    }, _a(Rs, Ts), Ts |= n;
                    else {
                        if (0 === (1073741824 & n)) return e = null !== l ? l.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                            baseLanes: e,
                            cachePool: null,
                            transitions: null
                        }, t.updateQueue = null, _a(Rs, Ts), Ts |= e, null;
                        t.memoizedState = {
                            baseLanes: 0,
                            cachePool: null,
                            transitions: null
                        }, r = null !== l ? l.baseLanes : n, _a(Rs, Ts), Ts |= r
                    }
                else null !== l ? (r = l.baseLanes | n, t.memoizedState = null) : r = n, _a(Rs, Ts), Ts |= r;
                return wo(e, t, a, n), t.child
            }

            function _o(e, t) {
                var n = t.ref;
                (null === e && null !== n || null !== e && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
            }

            function Eo(e, t, n, r, a) {
                var l = Ta(n) ? za : Ca.current;
                return l = Oa(t, l), Nl(t, a), n = ki(e, t, n, r, l, a), r = Ni(), null === e || yo ? (al && r && el(t), t.flags |= 1, wo(e, t, n, a), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Vo(e, t, a))
            }

            function Co(e, t, n, r, a) {
                if (Ta(n)) {
                    var l = !0;
                    Aa(t)
                } else l = !1;
                if (Nl(t, a), null === t.stateNode) $o(e, t), $l(t, n, r), Hl(t, n, r, a), r = !0;
                else if (null === e) {
                    var i = t.stateNode,
                        o = t.memoizedProps;
                    i.props = o;
                    var s = i.context,
                        c = n.contextType;
                    "object" === typeof c && null !== c ? c = Sl(c) : c = Oa(t, c = Ta(n) ? za : Ca.current);
                    var u = n.getDerivedStateFromProps,
                        d = "function" === typeof u || "function" === typeof i.getSnapshotBeforeUpdate;
                    d || "function" !== typeof i.UNSAFE_componentWillReceiveProps && "function" !== typeof i.componentWillReceiveProps || (o !== r || s !== c) && Vl(t, i, r, c), zl = !1;
                    var f = t.memoizedState;
                    i.state = f, Ml(t, r, i, a), s = t.memoizedState, o !== r || f !== s || Pa.current || zl ? ("function" === typeof u && (Ul(t, n, u, r), s = t.memoizedState), (o = zl || Wl(t, n, o, r, f, s, c)) ? (d || "function" !== typeof i.UNSAFE_componentWillMount && "function" !== typeof i.componentWillMount || ("function" === typeof i.componentWillMount && i.componentWillMount(), "function" === typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount()), "function" === typeof i.componentDidMount && (t.flags |= 4194308)) : ("function" === typeof i.componentDidMount && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), i.props = r, i.state = s, i.context = c, r = o) : ("function" === typeof i.componentDidMount && (t.flags |= 4194308), r = !1)
                } else {
                    i = t.stateNode, Tl(e, t), o = t.memoizedProps, c = t.type === t.elementType ? o : gl(t.type, o), i.props = c, d = t.pendingProps, f = i.context, "object" === typeof(s = n.contextType) && null !== s ? s = Sl(s) : s = Oa(t, s = Ta(n) ? za : Ca.current);
                    var h = n.getDerivedStateFromProps;
                    (u = "function" === typeof h || "function" === typeof i.getSnapshotBeforeUpdate) || "function" !== typeof i.UNSAFE_componentWillReceiveProps && "function" !== typeof i.componentWillReceiveProps || (o !== d || f !== s) && Vl(t, i, r, s), zl = !1, f = t.memoizedState, i.state = f, Ml(t, r, i, a);
                    var m = t.memoizedState;
                    o !== d || f !== m || Pa.current || zl ? ("function" === typeof h && (Ul(t, n, h, r), m = t.memoizedState), (c = zl || Wl(t, n, c, r, f, m, s) || !1) ? (u || "function" !== typeof i.UNSAFE_componentWillUpdate && "function" !== typeof i.componentWillUpdate || ("function" === typeof i.componentWillUpdate && i.componentWillUpdate(r, m, s), "function" === typeof i.UNSAFE_componentWillUpdate && i.UNSAFE_componentWillUpdate(r, m, s)), "function" === typeof i.componentDidUpdate && (t.flags |= 4), "function" === typeof i.getSnapshotBeforeUpdate && (t.flags |= 1024)) : ("function" !== typeof i.componentDidUpdate || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), "function" !== typeof i.getSnapshotBeforeUpdate || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = m), i.props = r, i.state = m, i.context = s, r = c) : ("function" !== typeof i.componentDidUpdate || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), "function" !== typeof i.getSnapshotBeforeUpdate || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1)
                }
                return Po(e, t, n, r, l, a)
            }

            function Po(e, t, n, r, a, l) {
                _o(e, t);
                var i = 0 !== (128 & t.flags);
                if (!r && !i) return a && Ma(t, n, !1), Vo(e, t, l);
                r = t.stateNode, xo.current = t;
                var o = i && "function" !== typeof n.getDerivedStateFromError ? null : r.render();
                return t.flags |= 1, null !== e && i ? (t.child = Gl(t, e.child, null, l), t.child = Gl(t, null, o, l)) : wo(e, t, o, l), t.memoizedState = r.state, a && Ma(t, n, !0), t.child
            }

            function zo(e) {
                var t = e.stateNode;
                t.pendingContext ? Da(0, t.pendingContext, t.pendingContext !== t.context) : t.context && Da(0, t.context, !1), ri(e, t.containerInfo)
            }

            function Oo(e, t, n, r, a) {
                return hl(), ml(a), t.flags |= 256, wo(e, t, n, r), t.child
            }
            var To, Ro, Do, Lo = {
                dehydrated: null,
                treeContext: null,
                retryLane: 0
            };

            function Ao(e) {
                return {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                }
            }

            function Mo(e, t, n) {
                var r, a = t.pendingProps,
                    i = oi.current,
                    o = !1,
                    s = 0 !== (128 & t.flags);
                if ((r = s) || (r = (null === e || null !== e.memoizedState) && 0 !== (2 & i)), r ? (o = !0, t.flags &= -129) : null !== e && null === e.memoizedState || (i |= 1), _a(oi, 1 & i), null === e) return cl(t), null !== (e = t.memoizedState) && null !== (e = e.dehydrated) ? (0 === (1 & t.mode) ? t.lanes = 1 : "$!" === e.data ? t.lanes = 8 : t.lanes = 1073741824, null) : (s = a.children, e = a.fallback, o ? (a = t.mode, o = t.child, s = {
                    mode: "hidden",
                    children: s
                }, 0 === (1 & a) && null !== o ? (o.childLanes = 0, o.pendingProps = s) : o = Ac(s, a, 0, null), e = Lc(e, a, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Ao(n), t.memoizedState = Lo, e) : Io(t, s));
                if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated)) return function(e, t, n, r, a, i, o) {
                    if (n) return 256 & t.flags ? (t.flags &= -257, Fo(e, t, o, r = uo(Error(l(422))))) : null !== t.memoizedState ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, a = t.mode, r = Ac({
                        mode: "visible",
                        children: r.children
                    }, a, 0, null), (i = Lc(i, a, o, null)).flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, 0 !== (1 & t.mode) && Gl(t, e.child, null, o), t.child.memoizedState = Ao(o), t.memoizedState = Lo, i);
                    if (0 === (1 & t.mode)) return Fo(e, t, o, null);
                    if ("$!" === a.data) {
                        if (r = a.nextSibling && a.nextSibling.dataset) var s = r.dgst;
                        return r = s, Fo(e, t, o, r = uo(i = Error(l(419)), r, void 0))
                    }
                    if (s = 0 !== (o & e.childLanes), yo || s) {
                        if (null !== (r = Ps)) {
                            switch (o & -o) {
                                case 4:
                                    a = 2;
                                    break;
                                case 16:
                                    a = 8;
                                    break;
                                case 64:
                                case 128:
                                case 256:
                                case 512:
                                case 1024:
                                case 2048:
                                case 4096:
                                case 8192:
                                case 16384:
                                case 32768:
                                case 65536:
                                case 131072:
                                case 262144:
                                case 524288:
                                case 1048576:
                                case 2097152:
                                case 4194304:
                                case 8388608:
                                case 16777216:
                                case 33554432:
                                case 67108864:
                                    a = 32;
                                    break;
                                case 536870912:
                                    a = 268435456;
                                    break;
                                default:
                                    a = 0
                            }
                            0 !== (a = 0 !== (a & (r.suspendedLanes | o)) ? 0 : a) && a !== i.retryLane && (i.retryLane = a, Pl(e, a), nc(r, e, a, -1))
                        }
                        return pc(), Fo(e, t, o, r = uo(Error(l(421))))
                    }
                    return "$?" === a.data ? (t.flags |= 128, t.child = e.child, t = Ec.bind(null, e), a._reactRetry = t, null) : (e = i.treeContext, rl = ca(a.nextSibling), nl = t, al = !0, ll = null, null !== e && (Qa[Xa++] = Ga, Qa[Xa++] = Ya, Qa[Xa++] = qa, Ga = e.id, Ya = e.overflow, qa = t), (t = Io(t, r.children)).flags |= 4096, t)
                }(e, t, s, a, r, i, n);
                if (o) {
                    o = a.fallback, s = t.mode, r = (i = e.child).sibling;
                    var c = {
                        mode: "hidden",
                        children: a.children
                    };
                    return 0 === (1 & s) && t.child !== i ? ((a = t.child).childLanes = 0, a.pendingProps = c, t.deletions = null) : (a = Rc(i, c)).subtreeFlags = 14680064 & i.subtreeFlags, null !== r ? o = Rc(r, o) : (o = Lc(o, s, n, null)).flags |= 2, o.return = t, a.return = t, a.sibling = o, t.child = a, a = o, o = t.child, s = null === (s = e.child.memoizedState) ? Ao(n) : {
                        baseLanes: s.baseLanes | n,
                        cachePool: null,
                        transitions: s.transitions
                    }, o.memoizedState = s, o.childLanes = e.childLanes & ~n, t.memoizedState = Lo, a
                }
                return e = (o = e.child).sibling, a = Rc(o, {
                    mode: "visible",
                    children: a.children
                }), 0 === (1 & t.mode) && (a.lanes = n), a.return = t, a.sibling = null, null !== e && (null === (n = t.deletions) ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = a, t.memoizedState = null, a
            }

            function Io(e, t) {
                return (t = Ac({
                    mode: "visible",
                    children: t
                }, e.mode, 0, null)).return = e, e.child = t
            }

            function Fo(e, t, n, r) {
                return null !== r && ml(r), Gl(t, e.child, null, n), (e = Io(t, t.pendingProps.children)).flags |= 2, t.memoizedState = null, e
            }

            function Uo(e, t, n) {
                e.lanes |= t;
                var r = e.alternate;
                null !== r && (r.lanes |= t), kl(e.return, t, n)
            }

            function Bo(e, t, n, r, a) {
                var l = e.memoizedState;
                null === l ? e.memoizedState = {
                    isBackwards: t,
                    rendering: null,
                    renderingStartTime: 0,
                    last: r,
                    tail: n,
                    tailMode: a
                } : (l.isBackwards = t, l.rendering = null, l.renderingStartTime = 0, l.last = r, l.tail = n, l.tailMode = a)
            }

            function Wo(e, t, n) {
                var r = t.pendingProps,
                    a = r.revealOrder,
                    l = r.tail;
                if (wo(e, t, r.children, n), 0 !== (2 & (r = oi.current))) r = 1 & r | 2, t.flags |= 128;
                else {
                    if (null !== e && 0 !== (128 & e.flags)) e: for (e = t.child; null !== e;) {
                        if (13 === e.tag) null !== e.memoizedState && Uo(e, n, t);
                        else if (19 === e.tag) Uo(e, n, t);
                        else if (null !== e.child) {
                            e.child.return = e, e = e.child;
                            continue
                        }
                        if (e === t) break e;
                        for (; null === e.sibling;) {
                            if (null === e.return || e.return === t) break e;
                            e = e.return
                        }
                        e.sibling.return = e.return, e = e.sibling
                    }
                    r &= 1
                }
                if (_a(oi, r), 0 === (1 & t.mode)) t.memoizedState = null;
                else switch (a) {
                    case "forwards":
                        for (n = t.child, a = null; null !== n;) null !== (e = n.alternate) && null === si(e) && (a = n), n = n.sibling;
                        null === (n = a) ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), Bo(t, !1, a, n, l);
                        break;
                    case "backwards":
                        for (n = null, a = t.child, t.child = null; null !== a;) {
                            if (null !== (e = a.alternate) && null === si(e)) {
                                t.child = a;
                                break
                            }
                            e = a.sibling, a.sibling = n, n = a, a = e
                        }
                        Bo(t, !0, n, null, l);
                        break;
                    case "together":
                        Bo(t, !1, null, null, void 0);
                        break;
                    default:
                        t.memoizedState = null
                }
                return t.child
            }

            function $o(e, t) {
                0 === (1 & t.mode) && null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2)
            }

            function Vo(e, t, n) {
                if (null !== e && (t.dependencies = e.dependencies), As |= t.lanes, 0 === (n & t.childLanes)) return null;
                if (null !== e && t.child !== e.child) throw Error(l(153));
                if (null !== t.child) {
                    for (n = Rc(e = t.child, e.pendingProps), t.child = n, n.return = t; null !== e.sibling;) e = e.sibling, (n = n.sibling = Rc(e, e.pendingProps)).return = t;
                    n.sibling = null
                }
                return t.child
            }

            function Ho(e, t) {
                if (!al) switch (e.tailMode) {
                    case "hidden":
                        t = e.tail;
                        for (var n = null; null !== t;) null !== t.alternate && (n = t), t = t.sibling;
                        null === n ? e.tail = null : n.sibling = null;
                        break;
                    case "collapsed":
                        n = e.tail;
                        for (var r = null; null !== n;) null !== n.alternate && (r = n), n = n.sibling;
                        null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null
                }
            }

            function Ko(e) {
                var t = null !== e.alternate && e.alternate.child === e.child,
                    n = 0,
                    r = 0;
                if (t)
                    for (var a = e.child; null !== a;) n |= a.lanes | a.childLanes, r |= 14680064 & a.subtreeFlags, r |= 14680064 & a.flags, a.return = e, a = a.sibling;
                else
                    for (a = e.child; null !== a;) n |= a.lanes | a.childLanes, r |= a.subtreeFlags, r |= a.flags, a.return = e, a = a.sibling;
                return e.subtreeFlags |= r, e.childLanes = n, t
            }

            function Qo(e, t, n) {
                var r = t.pendingProps;
                switch (tl(t), t.tag) {
                    case 2:
                    case 16:
                    case 15:
                    case 0:
                    case 11:
                    case 7:
                    case 8:
                    case 12:
                    case 9:
                    case 14:
                        return Ko(t), null;
                    case 1:
                    case 17:
                        return Ta(t.type) && Ra(), Ko(t), null;
                    case 3:
                        return r = t.stateNode, ai(), Sa(Pa), Sa(Ca), ui(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), null !== e && null !== e.child || (dl(t) ? t.flags |= 4 : null === e || e.memoizedState.isDehydrated && 0 === (256 & t.flags) || (t.flags |= 1024, null !== ll && (ic(ll), ll = null))), Ko(t), null;
                    case 5:
                        ii(t);
                        var a = ni(ti.current);
                        if (n = t.type, null !== e && null != t.stateNode) Ro(e, t, n, r), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
                        else {
                            if (!r) {
                                if (null === t.stateNode) throw Error(l(166));
                                return Ko(t), null
                            }
                            if (e = ni(Zl.current), dl(t)) {
                                r = t.stateNode, n = t.type;
                                var i = t.memoizedProps;
                                switch (r[fa] = t, r[ha] = i, e = 0 !== (1 & t.mode), n) {
                                    case "dialog":
                                        Fr("cancel", r), Fr("close", r);
                                        break;
                                    case "iframe":
                                    case "object":
                                    case "embed":
                                        Fr("load", r);
                                        break;
                                    case "video":
                                    case "audio":
                                        for (a = 0; a < Lr.length; a++) Fr(Lr[a], r);
                                        break;
                                    case "source":
                                        Fr("error", r);
                                        break;
                                    case "img":
                                    case "image":
                                    case "link":
                                        Fr("error", r), Fr("load", r);
                                        break;
                                    case "details":
                                        Fr("toggle", r);
                                        break;
                                    case "input":
                                        G(r, i), Fr("invalid", r);
                                        break;
                                    case "select":
                                        r._wrapperState = {
                                            wasMultiple: !!i.multiple
                                        }, Fr("invalid", r);
                                        break;
                                    case "textarea":
                                        ae(r, i), Fr("invalid", r)
                                }
                                for (var s in be(n, i), a = null, i)
                                    if (i.hasOwnProperty(s)) {
                                        var c = i[s];
                                        "children" === s ? "string" === typeof c ? r.textContent !== c && (!0 !== i.suppressHydrationWarning && Jr(r.textContent, c, e), a = ["children", c]) : "number" === typeof c && r.textContent !== "" + c && (!0 !== i.suppressHydrationWarning && Jr(r.textContent, c, e), a = ["children", "" + c]) : o.hasOwnProperty(s) && null != c && "onScroll" === s && Fr("scroll", r)
                                    } switch (n) {
                                    case "input":
                                        K(r), Z(r, i, !0);
                                        break;
                                    case "textarea":
                                        K(r), ie(r);
                                        break;
                                    case "select":
                                    case "option":
                                        break;
                                    default:
                                        "function" === typeof i.onClick && (r.onclick = Zr)
                                }
                                r = a, t.updateQueue = r, null !== r && (t.flags |= 4)
                            } else {
                                s = 9 === a.nodeType ? a : a.ownerDocument, "http://www.w3.org/1999/xhtml" === e && (e = oe(n)), "http://www.w3.org/1999/xhtml" === e ? "script" === n ? ((e = s.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : "string" === typeof r.is ? e = s.createElement(n, {
                                    is: r.is
                                }) : (e = s.createElement(n), "select" === n && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[fa] = t, e[ha] = r, To(e, t), t.stateNode = e;
                                e: {
                                    switch (s = xe(n, r), n) {
                                        case "dialog":
                                            Fr("cancel", e), Fr("close", e), a = r;
                                            break;
                                        case "iframe":
                                        case "object":
                                        case "embed":
                                            Fr("load", e), a = r;
                                            break;
                                        case "video":
                                        case "audio":
                                            for (a = 0; a < Lr.length; a++) Fr(Lr[a], e);
                                            a = r;
                                            break;
                                        case "source":
                                            Fr("error", e), a = r;
                                            break;
                                        case "img":
                                        case "image":
                                        case "link":
                                            Fr("error", e), Fr("load", e), a = r;
                                            break;
                                        case "details":
                                            Fr("toggle", e), a = r;
                                            break;
                                        case "input":
                                            G(e, r), a = q(e, r), Fr("invalid", e);
                                            break;
                                        case "option":
                                        default:
                                            a = r;
                                            break;
                                        case "select":
                                            e._wrapperState = {
                                                wasMultiple: !!r.multiple
                                            }, a = M({}, r, {
                                                value: void 0
                                            }), Fr("invalid", e);
                                            break;
                                        case "textarea":
                                            ae(e, r), a = re(e, r), Fr("invalid", e)
                                    }
                                    for (i in be(n, a), c = a)
                                        if (c.hasOwnProperty(i)) {
                                            var u = c[i];
                                            "style" === i ? ge(e, u) : "dangerouslySetInnerHTML" === i ? null != (u = u ? u.__html : void 0) && de(e, u) : "children" === i ? "string" === typeof u ? ("textarea" !== n || "" !== u) && fe(e, u) : "number" === typeof u && fe(e, "" + u) : "suppressContentEditableWarning" !== i && "suppressHydrationWarning" !== i && "autoFocus" !== i && (o.hasOwnProperty(i) ? null != u && "onScroll" === i && Fr("scroll", e) : null != u && x(e, i, u, s))
                                        } switch (n) {
                                        case "input":
                                            K(e), Z(e, r, !1);
                                            break;
                                        case "textarea":
                                            K(e), ie(e);
                                            break;
                                        case "option":
                                            null != r.value && e.setAttribute("value", "" + V(r.value));
                                            break;
                                        case "select":
                                            e.multiple = !!r.multiple, null != (i = r.value) ? ne(e, !!r.multiple, i, !1) : null != r.defaultValue && ne(e, !!r.multiple, r.defaultValue, !0);
                                            break;
                                        default:
                                            "function" === typeof a.onClick && (e.onclick = Zr)
                                    }
                                    switch (n) {
                                        case "button":
                                        case "input":
                                        case "select":
                                        case "textarea":
                                            r = !!r.autoFocus;
                                            break e;
                                        case "img":
                                            r = !0;
                                            break e;
                                        default:
                                            r = !1
                                    }
                                }
                                r && (t.flags |= 4)
                            }
                            null !== t.ref && (t.flags |= 512, t.flags |= 2097152)
                        }
                        return Ko(t), null;
                    case 6:
                        if (e && null != t.stateNode) Do(0, t, e.memoizedProps, r);
                        else {
                            if ("string" !== typeof r && null === t.stateNode) throw Error(l(166));
                            if (n = ni(ti.current), ni(Zl.current), dl(t)) {
                                if (r = t.stateNode, n = t.memoizedProps, r[fa] = t, (i = r.nodeValue !== n) && null !== (e = nl)) switch (e.tag) {
                                    case 3:
                                        Jr(r.nodeValue, n, 0 !== (1 & e.mode));
                                        break;
                                    case 5:
                                        !0 !== e.memoizedProps.suppressHydrationWarning && Jr(r.nodeValue, n, 0 !== (1 & e.mode))
                                }
                                i && (t.flags |= 4)
                            } else(r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[fa] = t, t.stateNode = r
                        }
                        return Ko(t), null;
                    case 13:
                        if (Sa(oi), r = t.memoizedState, null === e || null !== e.memoizedState && null !== e.memoizedState.dehydrated) {
                            if (al && null !== rl && 0 !== (1 & t.mode) && 0 === (128 & t.flags)) fl(), hl(), t.flags |= 98560, i = !1;
                            else if (i = dl(t), null !== r && null !== r.dehydrated) {
                                if (null === e) {
                                    if (!i) throw Error(l(318));
                                    if (!(i = null !== (i = t.memoizedState) ? i.dehydrated : null)) throw Error(l(317));
                                    i[fa] = t
                                } else hl(), 0 === (128 & t.flags) && (t.memoizedState = null), t.flags |= 4;
                                Ko(t), i = !1
                            } else null !== ll && (ic(ll), ll = null), i = !0;
                            if (!i) return 65536 & t.flags ? t : null
                        }
                        return 0 !== (128 & t.flags) ? (t.lanes = n, t) : ((r = null !== r) !== (null !== e && null !== e.memoizedState) && r && (t.child.flags |= 8192, 0 !== (1 & t.mode) && (null === e || 0 !== (1 & oi.current) ? 0 === Ds && (Ds = 3) : pc())), null !== t.updateQueue && (t.flags |= 4), Ko(t), null);
                    case 4:
                        return ai(), null === e && Wr(t.stateNode.containerInfo), Ko(t), null;
                    case 10:
                        return jl(t.type._context), Ko(t), null;
                    case 19:
                        if (Sa(oi), null === (i = t.memoizedState)) return Ko(t), null;
                        if (r = 0 !== (128 & t.flags), null === (s = i.rendering))
                            if (r) Ho(i, !1);
                            else {
                                if (0 !== Ds || null !== e && 0 !== (128 & e.flags))
                                    for (e = t.child; null !== e;) {
                                        if (null !== (s = si(e))) {
                                            for (t.flags |= 128, Ho(i, !1), null !== (r = s.updateQueue) && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; null !== n;) e = r, (i = n).flags &= 14680066, null === (s = i.alternate) ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = null === e ? null : {
                                                lanes: e.lanes,
                                                firstContext: e.firstContext
                                            }), n = n.sibling;
                                            return _a(oi, 1 & oi.current | 2), t.child
                                        }
                                        e = e.sibling
                                    }
                                null !== i.tail && Ye() > Ws && (t.flags |= 128, r = !0, Ho(i, !1), t.lanes = 4194304)
                            }
                        else {
                            if (!r)
                                if (null !== (e = si(s))) {
                                    if (t.flags |= 128, r = !0, null !== (n = e.updateQueue) && (t.updateQueue = n, t.flags |= 4), Ho(i, !0), null === i.tail && "hidden" === i.tailMode && !s.alternate && !al) return Ko(t), null
                                } else 2 * Ye() - i.renderingStartTime > Ws && 1073741824 !== n && (t.flags |= 128, r = !0, Ho(i, !1), t.lanes = 4194304);
                            i.isBackwards ? (s.sibling = t.child, t.child = s) : (null !== (n = i.last) ? n.sibling = s : t.child = s, i.last = s)
                        }
                        return null !== i.tail ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Ye(), t.sibling = null, n = oi.current, _a(oi, r ? 1 & n | 2 : 1 & n), t) : (Ko(t), null);
                    case 22:
                    case 23:
                        return dc(), r = null !== t.memoizedState, null !== e && null !== e.memoizedState !== r && (t.flags |= 8192), r && 0 !== (1 & t.mode) ? 0 !== (1073741824 & Ts) && (Ko(t), 6 & t.subtreeFlags && (t.flags |= 8192)) : Ko(t), null;
                    case 24:
                    case 25:
                        return null
                }
                throw Error(l(156, t.tag))
            }

            function Xo(e, t) {
                switch (tl(t), t.tag) {
                    case 1:
                        return Ta(t.type) && Ra(), 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                    case 3:
                        return ai(), Sa(Pa), Sa(Ca), ui(), 0 !== (65536 & (e = t.flags)) && 0 === (128 & e) ? (t.flags = -65537 & e | 128, t) : null;
                    case 5:
                        return ii(t), null;
                    case 13:
                        if (Sa(oi), null !== (e = t.memoizedState) && null !== e.dehydrated) {
                            if (null === t.alternate) throw Error(l(340));
                            hl()
                        }
                        return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                    case 19:
                        return Sa(oi), null;
                    case 4:
                        return ai(), null;
                    case 10:
                        return jl(t.type._context), null;
                    case 22:
                    case 23:
                        return dc(), null;
                    default:
                        return null
                }
            }
            To = function(e, t) {
                for (var n = t.child; null !== n;) {
                    if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
                    else if (4 !== n.tag && null !== n.child) {
                        n.child.return = n, n = n.child;
                        continue
                    }
                    if (n === t) break;
                    for (; null === n.sibling;) {
                        if (null === n.return || n.return === t) return;
                        n = n.return
                    }
                    n.sibling.return = n.return, n = n.sibling
                }
            }, Ro = function(e, t, n, r) {
                var a = e.memoizedProps;
                if (a !== r) {
                    e = t.stateNode, ni(Zl.current);
                    var l, i = null;
                    switch (n) {
                        case "input":
                            a = q(e, a), r = q(e, r), i = [];
                            break;
                        case "select":
                            a = M({}, a, {
                                value: void 0
                            }), r = M({}, r, {
                                value: void 0
                            }), i = [];
                            break;
                        case "textarea":
                            a = re(e, a), r = re(e, r), i = [];
                            break;
                        default:
                            "function" !== typeof a.onClick && "function" === typeof r.onClick && (e.onclick = Zr)
                    }
                    for (u in be(n, r), n = null, a)
                        if (!r.hasOwnProperty(u) && a.hasOwnProperty(u) && null != a[u])
                            if ("style" === u) {
                                var s = a[u];
                                for (l in s) s.hasOwnProperty(l) && (n || (n = {}), n[l] = "")
                            } else "dangerouslySetInnerHTML" !== u && "children" !== u && "suppressContentEditableWarning" !== u && "suppressHydrationWarning" !== u && "autoFocus" !== u && (o.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
                    for (u in r) {
                        var c = r[u];
                        if (s = null != a ? a[u] : void 0, r.hasOwnProperty(u) && c !== s && (null != c || null != s))
                            if ("style" === u)
                                if (s) {
                                    for (l in s) !s.hasOwnProperty(l) || c && c.hasOwnProperty(l) || (n || (n = {}), n[l] = "");
                                    for (l in c) c.hasOwnProperty(l) && s[l] !== c[l] && (n || (n = {}), n[l] = c[l])
                                } else n || (i || (i = []), i.push(u, n)), n = c;
                        else "dangerouslySetInnerHTML" === u ? (c = c ? c.__html : void 0, s = s ? s.__html : void 0, null != c && s !== c && (i = i || []).push(u, c)) : "children" === u ? "string" !== typeof c && "number" !== typeof c || (i = i || []).push(u, "" + c) : "suppressContentEditableWarning" !== u && "suppressHydrationWarning" !== u && (o.hasOwnProperty(u) ? (null != c && "onScroll" === u && Fr("scroll", e), i || s === c || (i = [])) : (i = i || []).push(u, c))
                    }
                    n && (i = i || []).push("style", n);
                    var u = i;
                    (t.updateQueue = u) && (t.flags |= 4)
                }
            }, Do = function(e, t, n, r) {
                n !== r && (t.flags |= 4)
            };
            var qo = !1,
                Go = !1,
                Yo = "function" === typeof WeakSet ? WeakSet : Set,
                Jo = null;

            function Zo(e, t) {
                var n = e.ref;
                if (null !== n)
                    if ("function" === typeof n) try {
                        n(null)
                    } catch (r) {
                        Nc(e, t, r)
                    } else n.current = null
            }

            function es(e, t, n) {
                try {
                    n()
                } catch (r) {
                    Nc(e, t, r)
                }
            }
            var ts = !1;

            function ns(e, t, n) {
                var r = t.updateQueue;
                if (null !== (r = null !== r ? r.lastEffect : null)) {
                    var a = r = r.next;
                    do {
                        if ((a.tag & e) === e) {
                            var l = a.destroy;
                            a.destroy = void 0, void 0 !== l && es(t, n, l)
                        }
                        a = a.next
                    } while (a !== r)
                }
            }

            function rs(e, t) {
                if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
                    var n = t = t.next;
                    do {
                        if ((n.tag & e) === e) {
                            var r = n.create;
                            n.destroy = r()
                        }
                        n = n.next
                    } while (n !== t)
                }
            }

            function as(e) {
                var t = e.ref;
                if (null !== t) {
                    var n = e.stateNode;
                    e.tag, e = n, "function" === typeof t ? t(e) : t.current = e
                }
            }

            function ls(e) {
                var t = e.alternate;
                null !== t && (e.alternate = null, ls(t)), e.child = null, e.deletions = null, e.sibling = null, 5 === e.tag && (null !== (t = e.stateNode) && (delete t[fa], delete t[ha], delete t[pa], delete t[ga], delete t[va])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
            }

            function is(e) {
                return 5 === e.tag || 3 === e.tag || 4 === e.tag
            }

            function os(e) {
                e: for (;;) {
                    for (; null === e.sibling;) {
                        if (null === e.return || is(e.return)) return null;
                        e = e.return
                    }
                    for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag;) {
                        if (2 & e.flags) continue e;
                        if (null === e.child || 4 === e.tag) continue e;
                        e.child.return = e, e = e.child
                    }
                    if (!(2 & e.flags)) return e.stateNode
                }
            }

            function ss(e, t, n) {
                var r = e.tag;
                if (5 === r || 6 === r) e = e.stateNode, t ? 8 === n.nodeType ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e), null !== (n = n._reactRootContainer) && void 0 !== n || null !== t.onclick || (t.onclick = Zr));
                else if (4 !== r && null !== (e = e.child))
                    for (ss(e, t, n), e = e.sibling; null !== e;) ss(e, t, n), e = e.sibling
            }

            function cs(e, t, n) {
                var r = e.tag;
                if (5 === r || 6 === r) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
                else if (4 !== r && null !== (e = e.child))
                    for (cs(e, t, n), e = e.sibling; null !== e;) cs(e, t, n), e = e.sibling
            }
            var us = null,
                ds = !1;

            function fs(e, t, n) {
                for (n = n.child; null !== n;) hs(e, t, n), n = n.sibling
            }

            function hs(e, t, n) {
                if (lt && "function" === typeof lt.onCommitFiberUnmount) try {
                    lt.onCommitFiberUnmount(at, n)
                } catch (o) {}
                switch (n.tag) {
                    case 5:
                        Go || Zo(n, t);
                    case 6:
                        var r = us,
                            a = ds;
                        us = null, fs(e, t, n), ds = a, null !== (us = r) && (ds ? (e = us, n = n.stateNode, 8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n)) : us.removeChild(n.stateNode));
                        break;
                    case 18:
                        null !== us && (ds ? (e = us, n = n.stateNode, 8 === e.nodeType ? sa(e.parentNode, n) : 1 === e.nodeType && sa(e, n), Wt(e)) : sa(us, n.stateNode));
                        break;
                    case 4:
                        r = us, a = ds, us = n.stateNode.containerInfo, ds = !0, fs(e, t, n), us = r, ds = a;
                        break;
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                        if (!Go && (null !== (r = n.updateQueue) && null !== (r = r.lastEffect))) {
                            a = r = r.next;
                            do {
                                var l = a,
                                    i = l.destroy;
                                l = l.tag, void 0 !== i && (0 !== (2 & l) || 0 !== (4 & l)) && es(n, t, i), a = a.next
                            } while (a !== r)
                        }
                        fs(e, t, n);
                        break;
                    case 1:
                        if (!Go && (Zo(n, t), "function" === typeof(r = n.stateNode).componentWillUnmount)) try {
                            r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
                        } catch (o) {
                            Nc(n, t, o)
                        }
                        fs(e, t, n);
                        break;
                    case 21:
                        fs(e, t, n);
                        break;
                    case 22:
                        1 & n.mode ? (Go = (r = Go) || null !== n.memoizedState, fs(e, t, n), Go = r) : fs(e, t, n);
                        break;
                    default:
                        fs(e, t, n)
                }
            }

            function ms(e) {
                var t = e.updateQueue;
                if (null !== t) {
                    e.updateQueue = null;
                    var n = e.stateNode;
                    null === n && (n = e.stateNode = new Yo), t.forEach((function(t) {
                        var r = Cc.bind(null, e, t);
                        n.has(t) || (n.add(t), t.then(r, r))
                    }))
                }
            }

            function ps(e, t) {
                var n = t.deletions;
                if (null !== n)
                    for (var r = 0; r < n.length; r++) {
                        var a = n[r];
                        try {
                            var i = e,
                                o = t,
                                s = o;
                            e: for (; null !== s;) {
                                switch (s.tag) {
                                    case 5:
                                        us = s.stateNode, ds = !1;
                                        break e;
                                    case 3:
                                    case 4:
                                        us = s.stateNode.containerInfo, ds = !0;
                                        break e
                                }
                                s = s.return
                            }
                            if (null === us) throw Error(l(160));
                            hs(i, o, a), us = null, ds = !1;
                            var c = a.alternate;
                            null !== c && (c.return = null), a.return = null
                        } catch (u) {
                            Nc(a, t, u)
                        }
                    }
                if (12854 & t.subtreeFlags)
                    for (t = t.child; null !== t;) gs(t, e), t = t.sibling
            }

            function gs(e, t) {
                var n = e.alternate,
                    r = e.flags;
                switch (e.tag) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                        if (ps(t, e), vs(e), 4 & r) {
                            try {
                                ns(3, e, e.return), rs(3, e)
                            } catch (g) {
                                Nc(e, e.return, g)
                            }
                            try {
                                ns(5, e, e.return)
                            } catch (g) {
                                Nc(e, e.return, g)
                            }
                        }
                        break;
                    case 1:
                        ps(t, e), vs(e), 512 & r && null !== n && Zo(n, n.return);
                        break;
                    case 5:
                        if (ps(t, e), vs(e), 512 & r && null !== n && Zo(n, n.return), 32 & e.flags) {
                            var a = e.stateNode;
                            try {
                                fe(a, "")
                            } catch (g) {
                                Nc(e, e.return, g)
                            }
                        }
                        if (4 & r && null != (a = e.stateNode)) {
                            var i = e.memoizedProps,
                                o = null !== n ? n.memoizedProps : i,
                                s = e.type,
                                c = e.updateQueue;
                            if (e.updateQueue = null, null !== c) try {
                                "input" === s && "radio" === i.type && null != i.name && Y(a, i), xe(s, o);
                                var u = xe(s, i);
                                for (o = 0; o < c.length; o += 2) {
                                    var d = c[o],
                                        f = c[o + 1];
                                    "style" === d ? ge(a, f) : "dangerouslySetInnerHTML" === d ? de(a, f) : "children" === d ? fe(a, f) : x(a, d, f, u)
                                }
                                switch (s) {
                                    case "input":
                                        J(a, i);
                                        break;
                                    case "textarea":
                                        le(a, i);
                                        break;
                                    case "select":
                                        var h = a._wrapperState.wasMultiple;
                                        a._wrapperState.wasMultiple = !!i.multiple;
                                        var m = i.value;
                                        null != m ? ne(a, !!i.multiple, m, !1) : h !== !!i.multiple && (null != i.defaultValue ? ne(a, !!i.multiple, i.defaultValue, !0) : ne(a, !!i.multiple, i.multiple ? [] : "", !1))
                                }
                                a[ha] = i
                            } catch (g) {
                                Nc(e, e.return, g)
                            }
                        }
                        break;
                    case 6:
                        if (ps(t, e), vs(e), 4 & r) {
                            if (null === e.stateNode) throw Error(l(162));
                            a = e.stateNode, i = e.memoizedProps;
                            try {
                                a.nodeValue = i
                            } catch (g) {
                                Nc(e, e.return, g)
                            }
                        }
                        break;
                    case 3:
                        if (ps(t, e), vs(e), 4 & r && null !== n && n.memoizedState.isDehydrated) try {
                            Wt(t.containerInfo)
                        } catch (g) {
                            Nc(e, e.return, g)
                        }
                        break;
                    case 4:
                    default:
                        ps(t, e), vs(e);
                        break;
                    case 13:
                        ps(t, e), vs(e), 8192 & (a = e.child).flags && (i = null !== a.memoizedState, a.stateNode.isHidden = i, !i || null !== a.alternate && null !== a.alternate.memoizedState || (Bs = Ye())), 4 & r && ms(e);
                        break;
                    case 22:
                        if (d = null !== n && null !== n.memoizedState, 1 & e.mode ? (Go = (u = Go) || d, ps(t, e), Go = u) : ps(t, e), vs(e), 8192 & r) {
                            if (u = null !== e.memoizedState, (e.stateNode.isHidden = u) && !d && 0 !== (1 & e.mode))
                                for (Jo = e, d = e.child; null !== d;) {
                                    for (f = Jo = d; null !== Jo;) {
                                        switch (m = (h = Jo).child, h.tag) {
                                            case 0:
                                            case 11:
                                            case 14:
                                            case 15:
                                                ns(4, h, h.return);
                                                break;
                                            case 1:
                                                Zo(h, h.return);
                                                var p = h.stateNode;
                                                if ("function" === typeof p.componentWillUnmount) {
                                                    r = h, n = h.return;
                                                    try {
                                                        t = r, p.props = t.memoizedProps, p.state = t.memoizedState, p.componentWillUnmount()
                                                    } catch (g) {
                                                        Nc(r, n, g)
                                                    }
                                                }
                                                break;
                                            case 5:
                                                Zo(h, h.return);
                                                break;
                                            case 22:
                                                if (null !== h.memoizedState) {
                                                    ws(f);
                                                    continue
                                                }
                                        }
                                        null !== m ? (m.return = h, Jo = m) : ws(f)
                                    }
                                    d = d.sibling
                                }
                            e: for (d = null, f = e;;) {
                                if (5 === f.tag) {
                                    if (null === d) {
                                        d = f;
                                        try {
                                            a = f.stateNode, u ? "function" === typeof(i = a.style).setProperty ? i.setProperty("display", "none", "important") : i.display = "none" : (s = f.stateNode, o = void 0 !== (c = f.memoizedProps.style) && null !== c && c.hasOwnProperty("display") ? c.display : null, s.style.display = pe("display", o))
                                        } catch (g) {
                                            Nc(e, e.return, g)
                                        }
                                    }
                                } else if (6 === f.tag) {
                                    if (null === d) try {
                                        f.stateNode.nodeValue = u ? "" : f.memoizedProps
                                    } catch (g) {
                                        Nc(e, e.return, g)
                                    }
                                } else if ((22 !== f.tag && 23 !== f.tag || null === f.memoizedState || f === e) && null !== f.child) {
                                    f.child.return = f, f = f.child;
                                    continue
                                }
                                if (f === e) break e;
                                for (; null === f.sibling;) {
                                    if (null === f.return || f.return === e) break e;
                                    d === f && (d = null), f = f.return
                                }
                                d === f && (d = null), f.sibling.return = f.return, f = f.sibling
                            }
                        }
                        break;
                    case 19:
                        ps(t, e), vs(e), 4 & r && ms(e);
                    case 21:
                }
            }

            function vs(e) {
                var t = e.flags;
                if (2 & t) {
                    try {
                        e: {
                            for (var n = e.return; null !== n;) {
                                if (is(n)) {
                                    var r = n;
                                    break e
                                }
                                n = n.return
                            }
                            throw Error(l(160))
                        }
                        switch (r.tag) {
                            case 5:
                                var a = r.stateNode;
                                32 & r.flags && (fe(a, ""), r.flags &= -33), cs(e, os(e), a);
                                break;
                            case 3:
                            case 4:
                                var i = r.stateNode.containerInfo;
                                ss(e, os(e), i);
                                break;
                            default:
                                throw Error(l(161))
                        }
                    }
                    catch (o) {
                        Nc(e, e.return, o)
                    }
                    e.flags &= -3
                }
                4096 & t && (e.flags &= -4097)
            }

            function bs(e, t, n) {
                Jo = e, xs(e, t, n)
            }

            function xs(e, t, n) {
                for (var r = 0 !== (1 & e.mode); null !== Jo;) {
                    var a = Jo,
                        l = a.child;
                    if (22 === a.tag && r) {
                        var i = null !== a.memoizedState || qo;
                        if (!i) {
                            var o = a.alternate,
                                s = null !== o && null !== o.memoizedState || Go;
                            o = qo;
                            var c = Go;
                            if (qo = i, (Go = s) && !c)
                                for (Jo = a; null !== Jo;) s = (i = Jo).child, 22 === i.tag && null !== i.memoizedState ? js(a) : null !== s ? (s.return = i, Jo = s) : js(a);
                            for (; null !== l;) Jo = l, xs(l, t, n), l = l.sibling;
                            Jo = a, qo = o, Go = c
                        }
                        ys(e)
                    } else 0 !== (8772 & a.subtreeFlags) && null !== l ? (l.return = a, Jo = l) : ys(e)
                }
            }

            function ys(e) {
                for (; null !== Jo;) {
                    var t = Jo;
                    if (0 !== (8772 & t.flags)) {
                        var n = t.alternate;
                        try {
                            if (0 !== (8772 & t.flags)) switch (t.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Go || rs(5, t);
                                    break;
                                case 1:
                                    var r = t.stateNode;
                                    if (4 & t.flags && !Go)
                                        if (null === n) r.componentDidMount();
                                        else {
                                            var a = t.elementType === t.type ? n.memoizedProps : gl(t.type, n.memoizedProps);
                                            r.componentDidUpdate(a, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                                        } var i = t.updateQueue;
                                    null !== i && Il(t, i, r);
                                    break;
                                case 3:
                                    var o = t.updateQueue;
                                    if (null !== o) {
                                        if (n = null, null !== t.child) switch (t.child.tag) {
                                            case 5:
                                            case 1:
                                                n = t.child.stateNode
                                        }
                                        Il(t, o, n)
                                    }
                                    break;
                                case 5:
                                    var s = t.stateNode;
                                    if (null === n && 4 & t.flags) {
                                        n = s;
                                        var c = t.memoizedProps;
                                        switch (t.type) {
                                            case "button":
                                            case "input":
                                            case "select":
                                            case "textarea":
                                                c.autoFocus && n.focus();
                                                break;
                                            case "img":
                                                c.src && (n.src = c.src)
                                        }
                                    }
                                    break;
                                case 6:
                                case 4:
                                case 12:
                                case 19:
                                case 17:
                                case 21:
                                case 22:
                                case 23:
                                case 25:
                                    break;
                                case 13:
                                    if (null === t.memoizedState) {
                                        var u = t.alternate;
                                        if (null !== u) {
                                            var d = u.memoizedState;
                                            if (null !== d) {
                                                var f = d.dehydrated;
                                                null !== f && Wt(f)
                                            }
                                        }
                                    }
                                    break;
                                default:
                                    throw Error(l(163))
                            }
                            Go || 512 & t.flags && as(t)
                        } catch (h) {
                            Nc(t, t.return, h)
                        }
                    }
                    if (t === e) {
                        Jo = null;
                        break
                    }
                    if (null !== (n = t.sibling)) {
                        n.return = t.return, Jo = n;
                        break
                    }
                    Jo = t.return
                }
            }

            function ws(e) {
                for (; null !== Jo;) {
                    var t = Jo;
                    if (t === e) {
                        Jo = null;
                        break
                    }
                    var n = t.sibling;
                    if (null !== n) {
                        n.return = t.return, Jo = n;
                        break
                    }
                    Jo = t.return
                }
            }

            function js(e) {
                for (; null !== Jo;) {
                    var t = Jo;
                    try {
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                var n = t.return;
                                try {
                                    rs(4, t)
                                } catch (s) {
                                    Nc(t, n, s)
                                }
                                break;
                            case 1:
                                var r = t.stateNode;
                                if ("function" === typeof r.componentDidMount) {
                                    var a = t.return;
                                    try {
                                        r.componentDidMount()
                                    } catch (s) {
                                        Nc(t, a, s)
                                    }
                                }
                                var l = t.return;
                                try {
                                    as(t)
                                } catch (s) {
                                    Nc(t, l, s)
                                }
                                break;
                            case 5:
                                var i = t.return;
                                try {
                                    as(t)
                                } catch (s) {
                                    Nc(t, i, s)
                                }
                        }
                    } catch (s) {
                        Nc(t, t.return, s)
                    }
                    if (t === e) {
                        Jo = null;
                        break
                    }
                    var o = t.sibling;
                    if (null !== o) {
                        o.return = t.return, Jo = o;
                        break
                    }
                    Jo = t.return
                }
            }
            var ks, Ns = Math.ceil,
                Ss = y.ReactCurrentDispatcher,
                _s = y.ReactCurrentOwner,
                Es = y.ReactCurrentBatchConfig,
                Cs = 0,
                Ps = null,
                zs = null,
                Os = 0,
                Ts = 0,
                Rs = Na(0),
                Ds = 0,
                Ls = null,
                As = 0,
                Ms = 0,
                Is = 0,
                Fs = null,
                Us = null,
                Bs = 0,
                Ws = 1 / 0,
                $s = null,
                Vs = !1,
                Hs = null,
                Ks = null,
                Qs = !1,
                Xs = null,
                qs = 0,
                Gs = 0,
                Ys = null,
                Js = -1,
                Zs = 0;

            function ec() {
                return 0 !== (6 & Cs) ? Ye() : -1 !== Js ? Js : Js = Ye()
            }

            function tc(e) {
                return 0 === (1 & e.mode) ? 1 : 0 !== (2 & Cs) && 0 !== Os ? Os & -Os : null !== pl.transition ? (0 === Zs && (Zs = pt()), Zs) : 0 !== (e = xt) ? e : e = void 0 === (e = window.event) ? 16 : Gt(e.type)
            }

            function nc(e, t, n, r) {
                if (50 < Gs) throw Gs = 0, Ys = null, Error(l(185));
                vt(e, n, r), 0 !== (2 & Cs) && e === Ps || (e === Ps && (0 === (2 & Cs) && (Ms |= n), 4 === Ds && oc(e, Os)), rc(e, r), 1 === n && 0 === Cs && 0 === (1 & t.mode) && (Ws = Ye() + 500, Fa && Wa()))
            }

            function rc(e, t) {
                var n = e.callbackNode;
                ! function(e, t) {
                    for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, l = e.pendingLanes; 0 < l;) {
                        var i = 31 - it(l),
                            o = 1 << i,
                            s = a[i]; - 1 === s ? 0 !== (o & n) && 0 === (o & r) || (a[i] = ht(o, t)) : s <= t && (e.expiredLanes |= o), l &= ~o
                    }
                }(e, t);
                var r = ft(e, e === Ps ? Os : 0);
                if (0 === r) null !== n && Xe(n), e.callbackNode = null, e.callbackPriority = 0;
                else if (t = r & -r, e.callbackPriority !== t) {
                    if (null != n && Xe(n), 1 === t) 0 === e.tag ? function(e) {
                        Fa = !0, Ba(e)
                    }(sc.bind(null, e)) : Ba(sc.bind(null, e)), ia((function() {
                        0 === (6 & Cs) && Wa()
                    })), n = null;
                    else {
                        switch (yt(r)) {
                            case 1:
                                n = Ze;
                                break;
                            case 4:
                                n = et;
                                break;
                            case 16:
                            default:
                                n = tt;
                                break;
                            case 536870912:
                                n = rt
                        }
                        n = Pc(n, ac.bind(null, e))
                    }
                    e.callbackPriority = t, e.callbackNode = n
                }
            }

            function ac(e, t) {
                if (Js = -1, Zs = 0, 0 !== (6 & Cs)) throw Error(l(327));
                var n = e.callbackNode;
                if (jc() && e.callbackNode !== n) return null;
                var r = ft(e, e === Ps ? Os : 0);
                if (0 === r) return null;
                if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = gc(e, r);
                else {
                    t = r;
                    var a = Cs;
                    Cs |= 2;
                    var i = mc();
                    for (Ps === e && Os === t || ($s = null, Ws = Ye() + 500, fc(e, t));;) try {
                        bc();
                        break
                    } catch (s) {
                        hc(e, s)
                    }
                    wl(), Ss.current = i, Cs = a, null !== zs ? t = 0 : (Ps = null, Os = 0, t = Ds)
                }
                if (0 !== t) {
                    if (2 === t && (0 !== (a = mt(e)) && (r = a, t = lc(e, a))), 1 === t) throw n = Ls, fc(e, 0), oc(e, r), rc(e, Ye()), n;
                    if (6 === t) oc(e, r);
                    else {
                        if (a = e.current.alternate, 0 === (30 & r) && ! function(e) {
                                for (var t = e;;) {
                                    if (16384 & t.flags) {
                                        var n = t.updateQueue;
                                        if (null !== n && null !== (n = n.stores))
                                            for (var r = 0; r < n.length; r++) {
                                                var a = n[r],
                                                    l = a.getSnapshot;
                                                a = a.value;
                                                try {
                                                    if (!or(l(), a)) return !1
                                                } catch (o) {
                                                    return !1
                                                }
                                            }
                                    }
                                    if (n = t.child, 16384 & t.subtreeFlags && null !== n) n.return = t, t = n;
                                    else {
                                        if (t === e) break;
                                        for (; null === t.sibling;) {
                                            if (null === t.return || t.return === e) return !0;
                                            t = t.return
                                        }
                                        t.sibling.return = t.return, t = t.sibling
                                    }
                                }
                                return !0
                            }(a) && (2 === (t = gc(e, r)) && (0 !== (i = mt(e)) && (r = i, t = lc(e, i))), 1 === t)) throw n = Ls, fc(e, 0), oc(e, r), rc(e, Ye()), n;
                        switch (e.finishedWork = a, e.finishedLanes = r, t) {
                            case 0:
                            case 1:
                                throw Error(l(345));
                            case 2:
                            case 5:
                                wc(e, Us, $s);
                                break;
                            case 3:
                                if (oc(e, r), (130023424 & r) === r && 10 < (t = Bs + 500 - Ye())) {
                                    if (0 !== ft(e, 0)) break;
                                    if (((a = e.suspendedLanes) & r) !== r) {
                                        ec(), e.pingedLanes |= e.suspendedLanes & a;
                                        break
                                    }
                                    e.timeoutHandle = ra(wc.bind(null, e, Us, $s), t);
                                    break
                                }
                                wc(e, Us, $s);
                                break;
                            case 4:
                                if (oc(e, r), (4194240 & r) === r) break;
                                for (t = e.eventTimes, a = -1; 0 < r;) {
                                    var o = 31 - it(r);
                                    i = 1 << o, (o = t[o]) > a && (a = o), r &= ~i
                                }
                                if (r = a, 10 < (r = (120 > (r = Ye() - r) ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Ns(r / 1960)) - r)) {
                                    e.timeoutHandle = ra(wc.bind(null, e, Us, $s), r);
                                    break
                                }
                                wc(e, Us, $s);
                                break;
                            default:
                                throw Error(l(329))
                        }
                    }
                }
                return rc(e, Ye()), e.callbackNode === n ? ac.bind(null, e) : null
            }

            function lc(e, t) {
                var n = Fs;
                return e.current.memoizedState.isDehydrated && (fc(e, t).flags |= 256), 2 !== (e = gc(e, t)) && (t = Us, Us = n, null !== t && ic(t)), e
            }

            function ic(e) {
                null === Us ? Us = e : Us.push.apply(Us, e)
            }

            function oc(e, t) {
                for (t &= ~Is, t &= ~Ms, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
                    var n = 31 - it(t),
                        r = 1 << n;
                    e[n] = -1, t &= ~r
                }
            }

            function sc(e) {
                if (0 !== (6 & Cs)) throw Error(l(327));
                jc();
                var t = ft(e, 0);
                if (0 === (1 & t)) return rc(e, Ye()), null;
                var n = gc(e, t);
                if (0 !== e.tag && 2 === n) {
                    var r = mt(e);
                    0 !== r && (t = r, n = lc(e, r))
                }
                if (1 === n) throw n = Ls, fc(e, 0), oc(e, t), rc(e, Ye()), n;
                if (6 === n) throw Error(l(345));
                return e.finishedWork = e.current.alternate, e.finishedLanes = t, wc(e, Us, $s), rc(e, Ye()), null
            }

            function cc(e, t) {
                var n = Cs;
                Cs |= 1;
                try {
                    return e(t)
                } finally {
                    0 === (Cs = n) && (Ws = Ye() + 500, Fa && Wa())
                }
            }

            function uc(e) {
                null !== Xs && 0 === Xs.tag && 0 === (6 & Cs) && jc();
                var t = Cs;
                Cs |= 1;
                var n = Es.transition,
                    r = xt;
                try {
                    if (Es.transition = null, xt = 1, e) return e()
                } finally {
                    xt = r, Es.transition = n, 0 === (6 & (Cs = t)) && Wa()
                }
            }

            function dc() {
                Ts = Rs.current, Sa(Rs)
            }

            function fc(e, t) {
                e.finishedWork = null, e.finishedLanes = 0;
                var n = e.timeoutHandle;
                if (-1 !== n && (e.timeoutHandle = -1, aa(n)), null !== zs)
                    for (n = zs.return; null !== n;) {
                        var r = n;
                        switch (tl(r), r.tag) {
                            case 1:
                                null !== (r = r.type.childContextTypes) && void 0 !== r && Ra();
                                break;
                            case 3:
                                ai(), Sa(Pa), Sa(Ca), ui();
                                break;
                            case 5:
                                ii(r);
                                break;
                            case 4:
                                ai();
                                break;
                            case 13:
                            case 19:
                                Sa(oi);
                                break;
                            case 10:
                                jl(r.type._context);
                                break;
                            case 22:
                            case 23:
                                dc()
                        }
                        n = n.return
                    }
                if (Ps = e, zs = e = Rc(e.current, null), Os = Ts = t, Ds = 0, Ls = null, Is = Ms = As = 0, Us = Fs = null, null !== _l) {
                    for (t = 0; t < _l.length; t++)
                        if (null !== (r = (n = _l[t]).interleaved)) {
                            n.interleaved = null;
                            var a = r.next,
                                l = n.pending;
                            if (null !== l) {
                                var i = l.next;
                                l.next = a, r.next = i
                            }
                            n.pending = r
                        } _l = null
                }
                return e
            }

            function hc(e, t) {
                for (;;) {
                    var n = zs;
                    try {
                        if (wl(), di.current = lo, vi) {
                            for (var r = mi.memoizedState; null !== r;) {
                                var a = r.queue;
                                null !== a && (a.pending = null), r = r.next
                            }
                            vi = !1
                        }
                        if (hi = 0, gi = pi = mi = null, bi = !1, xi = 0, _s.current = null, null === n || null === n.return) {
                            Ds = 1, Ls = t, zs = null;
                            break
                        }
                        e: {
                            var i = e,
                                o = n.return,
                                s = n,
                                c = t;
                            if (t = Os, s.flags |= 32768, null !== c && "object" === typeof c && "function" === typeof c.then) {
                                var u = c,
                                    d = s,
                                    f = d.tag;
                                if (0 === (1 & d.mode) && (0 === f || 11 === f || 15 === f)) {
                                    var h = d.alternate;
                                    h ? (d.updateQueue = h.updateQueue, d.memoizedState = h.memoizedState, d.lanes = h.lanes) : (d.updateQueue = null, d.memoizedState = null)
                                }
                                var m = vo(o);
                                if (null !== m) {
                                    m.flags &= -257, bo(m, o, s, 0, t), 1 & m.mode && go(i, u, t), c = u;
                                    var p = (t = m).updateQueue;
                                    if (null === p) {
                                        var g = new Set;
                                        g.add(c), t.updateQueue = g
                                    } else p.add(c);
                                    break e
                                }
                                if (0 === (1 & t)) {
                                    go(i, u, t), pc();
                                    break e
                                }
                                c = Error(l(426))
                            } else if (al && 1 & s.mode) {
                                var v = vo(o);
                                if (null !== v) {
                                    0 === (65536 & v.flags) && (v.flags |= 256), bo(v, o, s, 0, t), ml(co(c, s));
                                    break e
                                }
                            }
                            i = c = co(c, s),
                            4 !== Ds && (Ds = 2),
                            null === Fs ? Fs = [i] : Fs.push(i),
                            i = o;do {
                                switch (i.tag) {
                                    case 3:
                                        i.flags |= 65536, t &= -t, i.lanes |= t, Al(i, mo(0, c, t));
                                        break e;
                                    case 1:
                                        s = c;
                                        var b = i.type,
                                            x = i.stateNode;
                                        if (0 === (128 & i.flags) && ("function" === typeof b.getDerivedStateFromError || null !== x && "function" === typeof x.componentDidCatch && (null === Ks || !Ks.has(x)))) {
                                            i.flags |= 65536, t &= -t, i.lanes |= t, Al(i, po(i, s, t));
                                            break e
                                        }
                                }
                                i = i.return
                            } while (null !== i)
                        }
                        yc(n)
                    } catch (y) {
                        t = y, zs === n && null !== n && (zs = n = n.return);
                        continue
                    }
                    break
                }
            }

            function mc() {
                var e = Ss.current;
                return Ss.current = lo, null === e ? lo : e
            }

            function pc() {
                0 !== Ds && 3 !== Ds && 2 !== Ds || (Ds = 4), null === Ps || 0 === (268435455 & As) && 0 === (268435455 & Ms) || oc(Ps, Os)
            }

            function gc(e, t) {
                var n = Cs;
                Cs |= 2;
                var r = mc();
                for (Ps === e && Os === t || ($s = null, fc(e, t));;) try {
                    vc();
                    break
                } catch (a) {
                    hc(e, a)
                }
                if (wl(), Cs = n, Ss.current = r, null !== zs) throw Error(l(261));
                return Ps = null, Os = 0, Ds
            }

            function vc() {
                for (; null !== zs;) xc(zs)
            }

            function bc() {
                for (; null !== zs && !qe();) xc(zs)
            }

            function xc(e) {
                var t = ks(e.alternate, e, Ts);
                e.memoizedProps = e.pendingProps, null === t ? yc(e) : zs = t, _s.current = null
            }

            function yc(e) {
                var t = e;
                do {
                    var n = t.alternate;
                    if (e = t.return, 0 === (32768 & t.flags)) {
                        if (null !== (n = Qo(n, t, Ts))) return void(zs = n)
                    } else {
                        if (null !== (n = Xo(n, t))) return n.flags &= 32767, void(zs = n);
                        if (null === e) return Ds = 6, void(zs = null);
                        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null
                    }
                    if (null !== (t = t.sibling)) return void(zs = t);
                    zs = t = e
                } while (null !== t);
                0 === Ds && (Ds = 5)
            }

            function wc(e, t, n) {
                var r = xt,
                    a = Es.transition;
                try {
                    Es.transition = null, xt = 1,
                        function(e, t, n, r) {
                            do {
                                jc()
                            } while (null !== Xs);
                            if (0 !== (6 & Cs)) throw Error(l(327));
                            n = e.finishedWork;
                            var a = e.finishedLanes;
                            if (null === n) return null;
                            if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(l(177));
                            e.callbackNode = null, e.callbackPriority = 0;
                            var i = n.lanes | n.childLanes;
                            if (function(e, t) {
                                    var n = e.pendingLanes & ~t;
                                    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
                                    var r = e.eventTimes;
                                    for (e = e.expirationTimes; 0 < n;) {
                                        var a = 31 - it(n),
                                            l = 1 << a;
                                        t[a] = 0, r[a] = -1, e[a] = -1, n &= ~l
                                    }
                                }(e, i), e === Ps && (zs = Ps = null, Os = 0), 0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags) || Qs || (Qs = !0, Pc(tt, (function() {
                                    return jc(), null
                                }))), i = 0 !== (15990 & n.flags), 0 !== (15990 & n.subtreeFlags) || i) {
                                i = Es.transition, Es.transition = null;
                                var o = xt;
                                xt = 1;
                                var s = Cs;
                                Cs |= 4, _s.current = null,
                                    function(e, t) {
                                        if (ea = Vt, hr(e = fr())) {
                                            if ("selectionStart" in e) var n = {
                                                start: e.selectionStart,
                                                end: e.selectionEnd
                                            };
                                            else e: {
                                                var r = (n = (n = e.ownerDocument) && n.defaultView || window).getSelection && n.getSelection();
                                                if (r && 0 !== r.rangeCount) {
                                                    n = r.anchorNode;
                                                    var a = r.anchorOffset,
                                                        i = r.focusNode;
                                                    r = r.focusOffset;
                                                    try {
                                                        n.nodeType, i.nodeType
                                                    } catch (w) {
                                                        n = null;
                                                        break e
                                                    }
                                                    var o = 0,
                                                        s = -1,
                                                        c = -1,
                                                        u = 0,
                                                        d = 0,
                                                        f = e,
                                                        h = null;
                                                    t: for (;;) {
                                                        for (var m; f !== n || 0 !== a && 3 !== f.nodeType || (s = o + a), f !== i || 0 !== r && 3 !== f.nodeType || (c = o + r), 3 === f.nodeType && (o += f.nodeValue.length), null !== (m = f.firstChild);) h = f, f = m;
                                                        for (;;) {
                                                            if (f === e) break t;
                                                            if (h === n && ++u === a && (s = o), h === i && ++d === r && (c = o), null !== (m = f.nextSibling)) break;
                                                            h = (f = h).parentNode
                                                        }
                                                        f = m
                                                    }
                                                    n = -1 === s || -1 === c ? null : {
                                                        start: s,
                                                        end: c
                                                    }
                                                } else n = null
                                            }
                                            n = n || {
                                                start: 0,
                                                end: 0
                                            }
                                        } else n = null;
                                        for (ta = {
                                                focusedElem: e,
                                                selectionRange: n
                                            }, Vt = !1, Jo = t; null !== Jo;)
                                            if (e = (t = Jo).child, 0 !== (1028 & t.subtreeFlags) && null !== e) e.return = t, Jo = e;
                                            else
                                                for (; null !== Jo;) {
                                                    t = Jo;
                                                    try {
                                                        var p = t.alternate;
                                                        if (0 !== (1024 & t.flags)) switch (t.tag) {
                                                            case 0:
                                                            case 11:
                                                            case 15:
                                                            case 5:
                                                            case 6:
                                                            case 4:
                                                            case 17:
                                                                break;
                                                            case 1:
                                                                if (null !== p) {
                                                                    var g = p.memoizedProps,
                                                                        v = p.memoizedState,
                                                                        b = t.stateNode,
                                                                        x = b.getSnapshotBeforeUpdate(t.elementType === t.type ? g : gl(t.type, g), v);
                                                                    b.__reactInternalSnapshotBeforeUpdate = x
                                                                }
                                                                break;
                                                            case 3:
                                                                var y = t.stateNode.containerInfo;
                                                                1 === y.nodeType ? y.textContent = "" : 9 === y.nodeType && y.documentElement && y.removeChild(y.documentElement);
                                                                break;
                                                            default:
                                                                throw Error(l(163))
                                                        }
                                                    } catch (w) {
                                                        Nc(t, t.return, w)
                                                    }
                                                    if (null !== (e = t.sibling)) {
                                                        e.return = t.return, Jo = e;
                                                        break
                                                    }
                                                    Jo = t.return
                                                }
                                        p = ts, ts = !1
                                    }(e, n), gs(n, e), mr(ta), Vt = !!ea, ta = ea = null, e.current = n, bs(n, e, a), Ge(), Cs = s, xt = o, Es.transition = i
                            } else e.current = n;
                            if (Qs && (Qs = !1, Xs = e, qs = a), 0 === (i = e.pendingLanes) && (Ks = null), function(e) {
                                    if (lt && "function" === typeof lt.onCommitFiberRoot) try {
                                        lt.onCommitFiberRoot(at, e, void 0, 128 === (128 & e.current.flags))
                                    } catch (t) {}
                                }(n.stateNode), rc(e, Ye()), null !== t)
                                for (r = e.onRecoverableError, n = 0; n < t.length; n++) r((a = t[n]).value, {
                                    componentStack: a.stack,
                                    digest: a.digest
                                });
                            if (Vs) throw Vs = !1, e = Hs, Hs = null, e;
                            0 !== (1 & qs) && 0 !== e.tag && jc(), 0 !== (1 & (i = e.pendingLanes)) ? e === Ys ? Gs++ : (Gs = 0, Ys = e) : Gs = 0, Wa()
                        }(e, t, n, r)
                } finally {
                    Es.transition = a, xt = r
                }
                return null
            }

            function jc() {
                if (null !== Xs) {
                    var e = yt(qs),
                        t = Es.transition,
                        n = xt;
                    try {
                        if (Es.transition = null, xt = 16 > e ? 16 : e, null === Xs) var r = !1;
                        else {
                            if (e = Xs, Xs = null, qs = 0, 0 !== (6 & Cs)) throw Error(l(331));
                            var a = Cs;
                            for (Cs |= 4, Jo = e.current; null !== Jo;) {
                                var i = Jo,
                                    o = i.child;
                                if (0 !== (16 & Jo.flags)) {
                                    var s = i.deletions;
                                    if (null !== s) {
                                        for (var c = 0; c < s.length; c++) {
                                            var u = s[c];
                                            for (Jo = u; null !== Jo;) {
                                                var d = Jo;
                                                switch (d.tag) {
                                                    case 0:
                                                    case 11:
                                                    case 15:
                                                        ns(8, d, i)
                                                }
                                                var f = d.child;
                                                if (null !== f) f.return = d, Jo = f;
                                                else
                                                    for (; null !== Jo;) {
                                                        var h = (d = Jo).sibling,
                                                            m = d.return;
                                                        if (ls(d), d === u) {
                                                            Jo = null;
                                                            break
                                                        }
                                                        if (null !== h) {
                                                            h.return = m, Jo = h;
                                                            break
                                                        }
                                                        Jo = m
                                                    }
                                            }
                                        }
                                        var p = i.alternate;
                                        if (null !== p) {
                                            var g = p.child;
                                            if (null !== g) {
                                                p.child = null;
                                                do {
                                                    var v = g.sibling;
                                                    g.sibling = null, g = v
                                                } while (null !== g)
                                            }
                                        }
                                        Jo = i
                                    }
                                }
                                if (0 !== (2064 & i.subtreeFlags) && null !== o) o.return = i, Jo = o;
                                else e: for (; null !== Jo;) {
                                    if (0 !== (2048 & (i = Jo).flags)) switch (i.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            ns(9, i, i.return)
                                    }
                                    var b = i.sibling;
                                    if (null !== b) {
                                        b.return = i.return, Jo = b;
                                        break e
                                    }
                                    Jo = i.return
                                }
                            }
                            var x = e.current;
                            for (Jo = x; null !== Jo;) {
                                var y = (o = Jo).child;
                                if (0 !== (2064 & o.subtreeFlags) && null !== y) y.return = o, Jo = y;
                                else e: for (o = x; null !== Jo;) {
                                    if (0 !== (2048 & (s = Jo).flags)) try {
                                        switch (s.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                rs(9, s)
                                        }
                                    } catch (j) {
                                        Nc(s, s.return, j)
                                    }
                                    if (s === o) {
                                        Jo = null;
                                        break e
                                    }
                                    var w = s.sibling;
                                    if (null !== w) {
                                        w.return = s.return, Jo = w;
                                        break e
                                    }
                                    Jo = s.return
                                }
                            }
                            if (Cs = a, Wa(), lt && "function" === typeof lt.onPostCommitFiberRoot) try {
                                lt.onPostCommitFiberRoot(at, e)
                            } catch (j) {}
                            r = !0
                        }
                        return r
                    } finally {
                        xt = n, Es.transition = t
                    }
                }
                return !1
            }

            function kc(e, t, n) {
                e = Dl(e, t = mo(0, t = co(n, t), 1), 1), t = ec(), null !== e && (vt(e, 1, t), rc(e, t))
            }

            function Nc(e, t, n) {
                if (3 === e.tag) kc(e, e, n);
                else
                    for (; null !== t;) {
                        if (3 === t.tag) {
                            kc(t, e, n);
                            break
                        }
                        if (1 === t.tag) {
                            var r = t.stateNode;
                            if ("function" === typeof t.type.getDerivedStateFromError || "function" === typeof r.componentDidCatch && (null === Ks || !Ks.has(r))) {
                                t = Dl(t, e = po(t, e = co(n, e), 1), 1), e = ec(), null !== t && (vt(t, 1, e), rc(t, e));
                                break
                            }
                        }
                        t = t.return
                    }
            }

            function Sc(e, t, n) {
                var r = e.pingCache;
                null !== r && r.delete(t), t = ec(), e.pingedLanes |= e.suspendedLanes & n, Ps === e && (Os & n) === n && (4 === Ds || 3 === Ds && (130023424 & Os) === Os && 500 > Ye() - Bs ? fc(e, 0) : Is |= n), rc(e, t)
            }

            function _c(e, t) {
                0 === t && (0 === (1 & e.mode) ? t = 1 : (t = ut, 0 === (130023424 & (ut <<= 1)) && (ut = 4194304)));
                var n = ec();
                null !== (e = Pl(e, t)) && (vt(e, t, n), rc(e, n))
            }

            function Ec(e) {
                var t = e.memoizedState,
                    n = 0;
                null !== t && (n = t.retryLane), _c(e, n)
            }

            function Cc(e, t) {
                var n = 0;
                switch (e.tag) {
                    case 13:
                        var r = e.stateNode,
                            a = e.memoizedState;
                        null !== a && (n = a.retryLane);
                        break;
                    case 19:
                        r = e.stateNode;
                        break;
                    default:
                        throw Error(l(314))
                }
                null !== r && r.delete(t), _c(e, n)
            }

            function Pc(e, t) {
                return Qe(e, t)
            }

            function zc(e, t, n, r) {
                this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
            }

            function Oc(e, t, n, r) {
                return new zc(e, t, n, r)
            }

            function Tc(e) {
                return !(!(e = e.prototype) || !e.isReactComponent)
            }

            function Rc(e, t) {
                var n = e.alternate;
                return null === n ? ((n = Oc(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = 14680064 & e.flags, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : {
                    lanes: t.lanes,
                    firstContext: t.firstContext
                }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
            }

            function Dc(e, t, n, r, a, i) {
                var o = 2;
                if (r = e, "function" === typeof e) Tc(e) && (o = 1);
                else if ("string" === typeof e) o = 5;
                else e: switch (e) {
                    case k:
                        return Lc(n.children, a, i, t);
                    case N:
                        o = 8, a |= 8;
                        break;
                    case S:
                        return (e = Oc(12, n, t, 2 | a)).elementType = S, e.lanes = i, e;
                    case P:
                        return (e = Oc(13, n, t, a)).elementType = P, e.lanes = i, e;
                    case z:
                        return (e = Oc(19, n, t, a)).elementType = z, e.lanes = i, e;
                    case R:
                        return Ac(n, a, i, t);
                    default:
                        if ("object" === typeof e && null !== e) switch (e.$$typeof) {
                            case _:
                                o = 10;
                                break e;
                            case E:
                                o = 9;
                                break e;
                            case C:
                                o = 11;
                                break e;
                            case O:
                                o = 14;
                                break e;
                            case T:
                                o = 16, r = null;
                                break e
                        }
                        throw Error(l(130, null == e ? e : typeof e, ""))
                }
                return (t = Oc(o, n, t, a)).elementType = e, t.type = r, t.lanes = i, t
            }

            function Lc(e, t, n, r) {
                return (e = Oc(7, e, r, t)).lanes = n, e
            }

            function Ac(e, t, n, r) {
                return (e = Oc(22, e, r, t)).elementType = R, e.lanes = n, e.stateNode = {
                    isHidden: !1
                }, e
            }

            function Mc(e, t, n) {
                return (e = Oc(6, e, null, t)).lanes = n, e
            }

            function Ic(e, t, n) {
                return (t = Oc(4, null !== e.children ? e.children : [], e.key, t)).lanes = n, t.stateNode = {
                    containerInfo: e.containerInfo,
                    pendingChildren: null,
                    implementation: e.implementation
                }, t
            }

            function Fc(e, t, n, r, a) {
                this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = gt(0), this.expirationTimes = gt(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = gt(0), this.identifierPrefix = r, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null
            }

            function Uc(e, t, n, r, a, l, i, o, s) {
                return e = new Fc(e, t, n, o, s), 1 === t ? (t = 1, !0 === l && (t |= 8)) : t = 0, l = Oc(3, null, null, t), e.current = l, l.stateNode = e, l.memoizedState = {
                    element: r,
                    isDehydrated: n,
                    cache: null,
                    transitions: null,
                    pendingSuspenseBoundaries: null
                }, Ol(l), e
            }

            function Bc(e, t, n) {
                var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                return {
                    $$typeof: j,
                    key: null == r ? null : "" + r,
                    children: e,
                    containerInfo: t,
                    implementation: n
                }
            }

            function Wc(e) {
                if (!e) return Ea;
                e: {
                    if (We(e = e._reactInternals) !== e || 1 !== e.tag) throw Error(l(170));
                    var t = e;do {
                        switch (t.tag) {
                            case 3:
                                t = t.stateNode.context;
                                break e;
                            case 1:
                                if (Ta(t.type)) {
                                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                                    break e
                                }
                        }
                        t = t.return
                    } while (null !== t);
                    throw Error(l(171))
                }
                if (1 === e.tag) {
                    var n = e.type;
                    if (Ta(n)) return La(e, n, t)
                }
                return t
            }

            function $c(e, t, n, r, a, l, i, o, s) {
                return (e = Uc(n, r, !0, e, 0, l, 0, o, s)).context = Wc(null), n = e.current, (l = Rl(r = ec(), a = tc(n))).callback = void 0 !== t && null !== t ? t : null, Dl(n, l, a), e.current.lanes = a, vt(e, a, r), rc(e, r), e
            }

            function Vc(e, t, n, r) {
                var a = t.current,
                    l = ec(),
                    i = tc(a);
                return n = Wc(n), null === t.context ? t.context = n : t.pendingContext = n, (t = Rl(l, i)).payload = {
                    element: e
                }, null !== (r = void 0 === r ? null : r) && (t.callback = r), null !== (e = Dl(a, t, i)) && (nc(e, a, i, l), Ll(e, a, i)), i
            }

            function Hc(e) {
                return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null
            }

            function Kc(e, t) {
                if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
                    var n = e.retryLane;
                    e.retryLane = 0 !== n && n < t ? n : t
                }
            }

            function Qc(e, t) {
                Kc(e, t), (e = e.alternate) && Kc(e, t)
            }
            ks = function(e, t, n) {
                if (null !== e)
                    if (e.memoizedProps !== t.pendingProps || Pa.current) yo = !0;
                    else {
                        if (0 === (e.lanes & n) && 0 === (128 & t.flags)) return yo = !1,
                            function(e, t, n) {
                                switch (t.tag) {
                                    case 3:
                                        zo(t), hl();
                                        break;
                                    case 5:
                                        li(t);
                                        break;
                                    case 1:
                                        Ta(t.type) && Aa(t);
                                        break;
                                    case 4:
                                        ri(t, t.stateNode.containerInfo);
                                        break;
                                    case 10:
                                        var r = t.type._context,
                                            a = t.memoizedProps.value;
                                        _a(vl, r._currentValue), r._currentValue = a;
                                        break;
                                    case 13:
                                        if (null !== (r = t.memoizedState)) return null !== r.dehydrated ? (_a(oi, 1 & oi.current), t.flags |= 128, null) : 0 !== (n & t.child.childLanes) ? Mo(e, t, n) : (_a(oi, 1 & oi.current), null !== (e = Vo(e, t, n)) ? e.sibling : null);
                                        _a(oi, 1 & oi.current);
                                        break;
                                    case 19:
                                        if (r = 0 !== (n & t.childLanes), 0 !== (128 & e.flags)) {
                                            if (r) return Wo(e, t, n);
                                            t.flags |= 128
                                        }
                                        if (null !== (a = t.memoizedState) && (a.rendering = null, a.tail = null, a.lastEffect = null), _a(oi, oi.current), r) break;
                                        return null;
                                    case 22:
                                    case 23:
                                        return t.lanes = 0, So(e, t, n)
                                }
                                return Vo(e, t, n)
                            }(e, t, n);
                        yo = 0 !== (131072 & e.flags)
                    }
                else yo = !1, al && 0 !== (1048576 & t.flags) && Za(t, Ka, t.index);
                switch (t.lanes = 0, t.tag) {
                    case 2:
                        var r = t.type;
                        $o(e, t), e = t.pendingProps;
                        var a = Oa(t, Ca.current);
                        Nl(t, n), a = ki(null, t, r, e, a, n);
                        var i = Ni();
                        return t.flags |= 1, "object" === typeof a && null !== a && "function" === typeof a.render && void 0 === a.$$typeof ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ta(r) ? (i = !0, Aa(t)) : i = !1, t.memoizedState = null !== a.state && void 0 !== a.state ? a.state : null, Ol(t), a.updater = Bl, t.stateNode = a, a._reactInternals = t, Hl(t, r, e, n), t = Po(null, t, r, !0, i, n)) : (t.tag = 0, al && i && el(t), wo(null, t, a, n), t = t.child), t;
                    case 16:
                        r = t.elementType;
                        e: {
                            switch ($o(e, t), e = t.pendingProps, r = (a = r._init)(r._payload), t.type = r, a = t.tag = function(e) {
                                    if ("function" === typeof e) return Tc(e) ? 1 : 0;
                                    if (void 0 !== e && null !== e) {
                                        if ((e = e.$$typeof) === C) return 11;
                                        if (e === O) return 14
                                    }
                                    return 2
                                }(r), e = gl(r, e), a) {
                                case 0:
                                    t = Eo(null, t, r, e, n);
                                    break e;
                                case 1:
                                    t = Co(null, t, r, e, n);
                                    break e;
                                case 11:
                                    t = jo(null, t, r, e, n);
                                    break e;
                                case 14:
                                    t = ko(null, t, r, gl(r.type, e), n);
                                    break e
                            }
                            throw Error(l(306, r, ""))
                        }
                        return t;
                    case 0:
                        return r = t.type, a = t.pendingProps, Eo(e, t, r, a = t.elementType === r ? a : gl(r, a), n);
                    case 1:
                        return r = t.type, a = t.pendingProps, Co(e, t, r, a = t.elementType === r ? a : gl(r, a), n);
                    case 3:
                        e: {
                            if (zo(t), null === e) throw Error(l(387));r = t.pendingProps,
                            a = (i = t.memoizedState).element,
                            Tl(e, t),
                            Ml(t, r, null, n);
                            var o = t.memoizedState;
                            if (r = o.element, i.isDehydrated) {
                                if (i = {
                                        element: r,
                                        isDehydrated: !1,
                                        cache: o.cache,
                                        pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                                        transitions: o.transitions
                                    }, t.updateQueue.baseState = i, t.memoizedState = i, 256 & t.flags) {
                                    t = Oo(e, t, r, n, a = co(Error(l(423)), t));
                                    break e
                                }
                                if (r !== a) {
                                    t = Oo(e, t, r, n, a = co(Error(l(424)), t));
                                    break e
                                }
                                for (rl = ca(t.stateNode.containerInfo.firstChild), nl = t, al = !0, ll = null, n = Yl(t, null, r, n), t.child = n; n;) n.flags = -3 & n.flags | 4096, n = n.sibling
                            } else {
                                if (hl(), r === a) {
                                    t = Vo(e, t, n);
                                    break e
                                }
                                wo(e, t, r, n)
                            }
                            t = t.child
                        }
                        return t;
                    case 5:
                        return li(t), null === e && cl(t), r = t.type, a = t.pendingProps, i = null !== e ? e.memoizedProps : null, o = a.children, na(r, a) ? o = null : null !== i && na(r, i) && (t.flags |= 32), _o(e, t), wo(e, t, o, n), t.child;
                    case 6:
                        return null === e && cl(t), null;
                    case 13:
                        return Mo(e, t, n);
                    case 4:
                        return ri(t, t.stateNode.containerInfo), r = t.pendingProps, null === e ? t.child = Gl(t, null, r, n) : wo(e, t, r, n), t.child;
                    case 11:
                        return r = t.type, a = t.pendingProps, jo(e, t, r, a = t.elementType === r ? a : gl(r, a), n);
                    case 7:
                        return wo(e, t, t.pendingProps, n), t.child;
                    case 8:
                    case 12:
                        return wo(e, t, t.pendingProps.children, n), t.child;
                    case 10:
                        e: {
                            if (r = t.type._context, a = t.pendingProps, i = t.memoizedProps, o = a.value, _a(vl, r._currentValue), r._currentValue = o, null !== i)
                                if (or(i.value, o)) {
                                    if (i.children === a.children && !Pa.current) {
                                        t = Vo(e, t, n);
                                        break e
                                    }
                                } else
                                    for (null !== (i = t.child) && (i.return = t); null !== i;) {
                                        var s = i.dependencies;
                                        if (null !== s) {
                                            o = i.child;
                                            for (var c = s.firstContext; null !== c;) {
                                                if (c.context === r) {
                                                    if (1 === i.tag) {
                                                        (c = Rl(-1, n & -n)).tag = 2;
                                                        var u = i.updateQueue;
                                                        if (null !== u) {
                                                            var d = (u = u.shared).pending;
                                                            null === d ? c.next = c : (c.next = d.next, d.next = c), u.pending = c
                                                        }
                                                    }
                                                    i.lanes |= n, null !== (c = i.alternate) && (c.lanes |= n), kl(i.return, n, t), s.lanes |= n;
                                                    break
                                                }
                                                c = c.next
                                            }
                                        } else if (10 === i.tag) o = i.type === t.type ? null : i.child;
                                        else if (18 === i.tag) {
                                            if (null === (o = i.return)) throw Error(l(341));
                                            o.lanes |= n, null !== (s = o.alternate) && (s.lanes |= n), kl(o, n, t), o = i.sibling
                                        } else o = i.child;
                                        if (null !== o) o.return = i;
                                        else
                                            for (o = i; null !== o;) {
                                                if (o === t) {
                                                    o = null;
                                                    break
                                                }
                                                if (null !== (i = o.sibling)) {
                                                    i.return = o.return, o = i;
                                                    break
                                                }
                                                o = o.return
                                            }
                                        i = o
                                    }
                            wo(e, t, a.children, n),
                            t = t.child
                        }
                        return t;
                    case 9:
                        return a = t.type, r = t.pendingProps.children, Nl(t, n), r = r(a = Sl(a)), t.flags |= 1, wo(e, t, r, n), t.child;
                    case 14:
                        return a = gl(r = t.type, t.pendingProps), ko(e, t, r, a = gl(r.type, a), n);
                    case 15:
                        return No(e, t, t.type, t.pendingProps, n);
                    case 17:
                        return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : gl(r, a), $o(e, t), t.tag = 1, Ta(r) ? (e = !0, Aa(t)) : e = !1, Nl(t, n), $l(t, r, a), Hl(t, r, a, n), Po(null, t, r, !0, e, n);
                    case 19:
                        return Wo(e, t, n);
                    case 22:
                        return So(e, t, n)
                }
                throw Error(l(156, t.tag))
            };
            var Xc = "function" === typeof reportError ? reportError : function(e) {
                console.error(e)
            };

            function qc(e) {
                this._internalRoot = e
            }

            function Gc(e) {
                this._internalRoot = e
            }

            function Yc(e) {
                return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
            }

            function Jc(e) {
                return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
            }

            function Zc() {}

            function eu(e, t, n, r, a) {
                var l = n._reactRootContainer;
                if (l) {
                    var i = l;
                    if ("function" === typeof a) {
                        var o = a;
                        a = function() {
                            var e = Hc(i);
                            o.call(e)
                        }
                    }
                    Vc(t, i, e, a)
                } else i = function(e, t, n, r, a) {
                    if (a) {
                        if ("function" === typeof r) {
                            var l = r;
                            r = function() {
                                var e = Hc(i);
                                l.call(e)
                            }
                        }
                        var i = $c(t, r, e, 0, null, !1, 0, "", Zc);
                        return e._reactRootContainer = i, e[ma] = i.current, Wr(8 === e.nodeType ? e.parentNode : e), uc(), i
                    }
                    for (; a = e.lastChild;) e.removeChild(a);
                    if ("function" === typeof r) {
                        var o = r;
                        r = function() {
                            var e = Hc(s);
                            o.call(e)
                        }
                    }
                    var s = Uc(e, 0, !1, null, 0, !1, 0, "", Zc);
                    return e._reactRootContainer = s, e[ma] = s.current, Wr(8 === e.nodeType ? e.parentNode : e), uc((function() {
                        Vc(t, s, n, r)
                    })), s
                }(n, t, e, a, r);
                return Hc(i)
            }
            Gc.prototype.render = qc.prototype.render = function(e) {
                var t = this._internalRoot;
                if (null === t) throw Error(l(409));
                Vc(e, t, null, null)
            }, Gc.prototype.unmount = qc.prototype.unmount = function() {
                var e = this._internalRoot;
                if (null !== e) {
                    this._internalRoot = null;
                    var t = e.containerInfo;
                    uc((function() {
                        Vc(null, e, null, null)
                    })), t[ma] = null
                }
            }, Gc.prototype.unstable_scheduleHydration = function(e) {
                if (e) {
                    var t = Nt();
                    e = {
                        blockedOn: null,
                        target: e,
                        priority: t
                    };
                    for (var n = 0; n < Rt.length && 0 !== t && t < Rt[n].priority; n++);
                    Rt.splice(n, 0, e), 0 === n && Mt(e)
                }
            }, wt = function(e) {
                switch (e.tag) {
                    case 3:
                        var t = e.stateNode;
                        if (t.current.memoizedState.isDehydrated) {
                            var n = dt(t.pendingLanes);
                            0 !== n && (bt(t, 1 | n), rc(t, Ye()), 0 === (6 & Cs) && (Ws = Ye() + 500, Wa()))
                        }
                        break;
                    case 13:
                        uc((function() {
                            var t = Pl(e, 1);
                            if (null !== t) {
                                var n = ec();
                                nc(t, e, 1, n)
                            }
                        })), Qc(e, 1)
                }
            }, jt = function(e) {
                if (13 === e.tag) {
                    var t = Pl(e, 134217728);
                    if (null !== t) nc(t, e, 134217728, ec());
                    Qc(e, 134217728)
                }
            }, kt = function(e) {
                if (13 === e.tag) {
                    var t = tc(e),
                        n = Pl(e, t);
                    if (null !== n) nc(n, e, t, ec());
                    Qc(e, t)
                }
            }, Nt = function() {
                return xt
            }, St = function(e, t) {
                var n = xt;
                try {
                    return xt = e, t()
                } finally {
                    xt = n
                }
            }, je = function(e, t, n) {
                switch (t) {
                    case "input":
                        if (J(e, n), t = n.name, "radio" === n.type && null != t) {
                            for (n = e; n.parentNode;) n = n.parentNode;
                            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                                var r = n[t];
                                if (r !== e && r.form === e.form) {
                                    var a = wa(r);
                                    if (!a) throw Error(l(90));
                                    Q(r), J(r, a)
                                }
                            }
                        }
                        break;
                    case "textarea":
                        le(e, n);
                        break;
                    case "select":
                        null != (t = n.value) && ne(e, !!n.multiple, t, !1)
                }
            }, Ce = cc, Pe = uc;
            var tu = {
                    usingClientEntryPoint: !1,
                    Events: [xa, ya, wa, _e, Ee, cc]
                },
                nu = {
                    findFiberByHostInstance: ba,
                    bundleType: 0,
                    version: "18.2.0",
                    rendererPackageName: "react-dom"
                },
                ru = {
                    bundleType: nu.bundleType,
                    version: nu.version,
                    rendererPackageName: nu.rendererPackageName,
                    rendererConfig: nu.rendererConfig,
                    overrideHookState: null,
                    overrideHookStateDeletePath: null,
                    overrideHookStateRenamePath: null,
                    overrideProps: null,
                    overridePropsDeletePath: null,
                    overridePropsRenamePath: null,
                    setErrorHandler: null,
                    setSuspenseHandler: null,
                    scheduleUpdate: null,
                    currentDispatcherRef: y.ReactCurrentDispatcher,
                    findHostInstanceByFiber: function(e) {
                        return null === (e = He(e)) ? null : e.stateNode
                    },
                    findFiberByHostInstance: nu.findFiberByHostInstance || function() {
                        return null
                    },
                    findHostInstancesForRefresh: null,
                    scheduleRefresh: null,
                    scheduleRoot: null,
                    setRefreshHandler: null,
                    getCurrentFiber: null,
                    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
                };
            if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
                var au = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                if (!au.isDisabled && au.supportsFiber) try {
                    at = au.inject(ru), lt = au
                } catch (ue) {}
            }
            t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tu, t.createPortal = function(e, t) {
                var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                if (!Yc(t)) throw Error(l(200));
                return Bc(e, t, null, n)
            }, t.createRoot = function(e, t) {
                if (!Yc(e)) throw Error(l(299));
                var n = !1,
                    r = "",
                    a = Xc;
                return null !== t && void 0 !== t && (!0 === t.unstable_strictMode && (n = !0), void 0 !== t.identifierPrefix && (r = t.identifierPrefix), void 0 !== t.onRecoverableError && (a = t.onRecoverableError)), t = Uc(e, 1, !1, null, 0, n, 0, r, a), e[ma] = t.current, Wr(8 === e.nodeType ? e.parentNode : e), new qc(t)
            }, t.findDOMNode = function(e) {
                if (null == e) return null;
                if (1 === e.nodeType) return e;
                var t = e._reactInternals;
                if (void 0 === t) {
                    if ("function" === typeof e.render) throw Error(l(188));
                    throw e = Object.keys(e).join(","), Error(l(268, e))
                }
                return e = null === (e = He(t)) ? null : e.stateNode
            }, t.flushSync = function(e) {
                return uc(e)
            }, t.hydrate = function(e, t, n) {
                if (!Jc(t)) throw Error(l(200));
                return eu(null, e, t, !0, n)
            }, t.hydrateRoot = function(e, t, n) {
                if (!Yc(e)) throw Error(l(405));
                var r = null != n && n.hydratedSources || null,
                    a = !1,
                    i = "",
                    o = Xc;
                if (null !== n && void 0 !== n && (!0 === n.unstable_strictMode && (a = !0), void 0 !== n.identifierPrefix && (i = n.identifierPrefix), void 0 !== n.onRecoverableError && (o = n.onRecoverableError)), t = $c(t, null, e, 1, null != n ? n : null, a, 0, i, o), e[ma] = t.current, Wr(e), r)
                    for (e = 0; e < r.length; e++) a = (a = (n = r[e])._getVersion)(n._source), null == t.mutableSourceEagerHydrationData ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(n, a);
                return new Gc(t)
            }, t.render = function(e, t, n) {
                if (!Jc(t)) throw Error(l(200));
                return eu(null, e, t, !1, n)
            }, t.unmountComponentAtNode = function(e) {
                if (!Jc(e)) throw Error(l(40));
                return !!e._reactRootContainer && (uc((function() {
                    eu(null, null, e, !1, (function() {
                        e._reactRootContainer = null, e[ma] = null
                    }))
                })), !0)
            }, t.unstable_batchedUpdates = cc, t.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
                if (!Jc(n)) throw Error(l(200));
                if (null == e || void 0 === e._reactInternals) throw Error(l(38));
                return eu(e, t, n, !1, r)
            }, t.version = "18.2.0-next-9e3b772b8-20220608"
        },
        250: function(e, t, n) {
            "use strict";
            var r = n(164);
            t.createRoot = r.createRoot, t.hydrateRoot = r.hydrateRoot
        },
        164: function(e, t, n) {
            "use strict";
            ! function e() {
                if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
                    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
                } catch (t) {
                    console.error(t)
                }
            }(), e.exports = n(463)
        },
        374: function(e, t, n) {
            "use strict";
            var r = n(791),
                a = Symbol.for("react.element"),
                l = Symbol.for("react.fragment"),
                i = Object.prototype.hasOwnProperty,
                o = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                s = {
                    key: !0,
                    ref: !0,
                    __self: !0,
                    __source: !0
                };

            function c(e, t, n) {
                var r, l = {},
                    c = null,
                    u = null;
                for (r in void 0 !== n && (c = "" + n), void 0 !== t.key && (c = "" + t.key), void 0 !== t.ref && (u = t.ref), t) i.call(t, r) && !s.hasOwnProperty(r) && (l[r] = t[r]);
                if (e && e.defaultProps)
                    for (r in t = e.defaultProps) void 0 === l[r] && (l[r] = t[r]);
                return {
                    $$typeof: a,
                    type: e,
                    key: c,
                    ref: u,
                    props: l,
                    _owner: o.current
                }
            }
            t.Fragment = l, t.jsx = c, t.jsxs = c
        },
        117: function(e, t) {
            "use strict";
            var n = Symbol.for("react.element"),
                r = Symbol.for("react.portal"),
                a = Symbol.for("react.fragment"),
                l = Symbol.for("react.strict_mode"),
                i = Symbol.for("react.profiler"),
                o = Symbol.for("react.provider"),
                s = Symbol.for("react.context"),
                c = Symbol.for("react.forward_ref"),
                u = Symbol.for("react.suspense"),
                d = Symbol.for("react.memo"),
                f = Symbol.for("react.lazy"),
                h = Symbol.iterator;
            var m = {
                    isMounted: function() {
                        return !1
                    },
                    enqueueForceUpdate: function() {},
                    enqueueReplaceState: function() {},
                    enqueueSetState: function() {}
                },
                p = Object.assign,
                g = {};

            function v(e, t, n) {
                this.props = e, this.context = t, this.refs = g, this.updater = n || m
            }

            function b() {}

            function x(e, t, n) {
                this.props = e, this.context = t, this.refs = g, this.updater = n || m
            }
            v.prototype.isReactComponent = {}, v.prototype.setState = function(e, t) {
                if ("object" !== typeof e && "function" !== typeof e && null != e) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
                this.updater.enqueueSetState(this, e, t, "setState")
            }, v.prototype.forceUpdate = function(e) {
                this.updater.enqueueForceUpdate(this, e, "forceUpdate")
            }, b.prototype = v.prototype;
            var y = x.prototype = new b;
            y.constructor = x, p(y, v.prototype), y.isPureReactComponent = !0;
            var w = Array.isArray,
                j = Object.prototype.hasOwnProperty,
                k = {
                    current: null
                },
                N = {
                    key: !0,
                    ref: !0,
                    __self: !0,
                    __source: !0
                };

            function S(e, t, r) {
                var a, l = {},
                    i = null,
                    o = null;
                if (null != t)
                    for (a in void 0 !== t.ref && (o = t.ref), void 0 !== t.key && (i = "" + t.key), t) j.call(t, a) && !N.hasOwnProperty(a) && (l[a] = t[a]);
                var s = arguments.length - 2;
                if (1 === s) l.children = r;
                else if (1 < s) {
                    for (var c = Array(s), u = 0; u < s; u++) c[u] = arguments[u + 2];
                    l.children = c
                }
                if (e && e.defaultProps)
                    for (a in s = e.defaultProps) void 0 === l[a] && (l[a] = s[a]);
                return {
                    $$typeof: n,
                    type: e,
                    key: i,
                    ref: o,
                    props: l,
                    _owner: k.current
                }
            }

            function _(e) {
                return "object" === typeof e && null !== e && e.$$typeof === n
            }
            var E = /\/+/g;

            function C(e, t) {
                return "object" === typeof e && null !== e && null != e.key ? function(e) {
                    var t = {
                        "=": "=0",
                        ":": "=2"
                    };
                    return "$" + e.replace(/[=:]/g, (function(e) {
                        return t[e]
                    }))
                }("" + e.key) : t.toString(36)
            }

            function P(e, t, a, l, i) {
                var o = typeof e;
                "undefined" !== o && "boolean" !== o || (e = null);
                var s = !1;
                if (null === e) s = !0;
                else switch (o) {
                    case "string":
                    case "number":
                        s = !0;
                        break;
                    case "object":
                        switch (e.$$typeof) {
                            case n:
                            case r:
                                s = !0
                        }
                }
                if (s) return i = i(s = e), e = "" === l ? "." + C(s, 0) : l, w(i) ? (a = "", null != e && (a = e.replace(E, "$&/") + "/"), P(i, t, a, "", (function(e) {
                    return e
                }))) : null != i && (_(i) && (i = function(e, t) {
                    return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner
                    }
                }(i, a + (!i.key || s && s.key === i.key ? "" : ("" + i.key).replace(E, "$&/") + "/") + e)), t.push(i)), 1;
                if (s = 0, l = "" === l ? "." : l + ":", w(e))
                    for (var c = 0; c < e.length; c++) {
                        var u = l + C(o = e[c], c);
                        s += P(o, t, a, u, i)
                    } else if (u = function(e) {
                            return null === e || "object" !== typeof e ? null : "function" === typeof(e = h && e[h] || e["@@iterator"]) ? e : null
                        }(e), "function" === typeof u)
                        for (e = u.call(e), c = 0; !(o = e.next()).done;) s += P(o = o.value, t, a, u = l + C(o, c++), i);
                    else if ("object" === o) throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
                return s
            }

            function z(e, t, n) {
                if (null == e) return e;
                var r = [],
                    a = 0;
                return P(e, r, "", "", (function(e) {
                    return t.call(n, e, a++)
                })), r
            }

            function O(e) {
                if (-1 === e._status) {
                    var t = e._result;
                    (t = t()).then((function(t) {
                        0 !== e._status && -1 !== e._status || (e._status = 1, e._result = t)
                    }), (function(t) {
                        0 !== e._status && -1 !== e._status || (e._status = 2, e._result = t)
                    })), -1 === e._status && (e._status = 0, e._result = t)
                }
                if (1 === e._status) return e._result.default;
                throw e._result
            }
            var T = {
                    current: null
                },
                R = {
                    transition: null
                },
                D = {
                    ReactCurrentDispatcher: T,
                    ReactCurrentBatchConfig: R,
                    ReactCurrentOwner: k
                };
            t.Children = {
                map: z,
                forEach: function(e, t, n) {
                    z(e, (function() {
                        t.apply(this, arguments)
                    }), n)
                },
                count: function(e) {
                    var t = 0;
                    return z(e, (function() {
                        t++
                    })), t
                },
                toArray: function(e) {
                    return z(e, (function(e) {
                        return e
                    })) || []
                },
                only: function(e) {
                    if (!_(e)) throw Error("React.Children.only expected to receive a single React element child.");
                    return e
                }
            }, t.Component = v, t.Fragment = a, t.Profiler = i, t.PureComponent = x, t.StrictMode = l, t.Suspense = u, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = D, t.cloneElement = function(e, t, r) {
                if (null === e || void 0 === e) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
                var a = p({}, e.props),
                    l = e.key,
                    i = e.ref,
                    o = e._owner;
                if (null != t) {
                    if (void 0 !== t.ref && (i = t.ref, o = k.current), void 0 !== t.key && (l = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
                    for (c in t) j.call(t, c) && !N.hasOwnProperty(c) && (a[c] = void 0 === t[c] && void 0 !== s ? s[c] : t[c])
                }
                var c = arguments.length - 2;
                if (1 === c) a.children = r;
                else if (1 < c) {
                    s = Array(c);
                    for (var u = 0; u < c; u++) s[u] = arguments[u + 2];
                    a.children = s
                }
                return {
                    $$typeof: n,
                    type: e.type,
                    key: l,
                    ref: i,
                    props: a,
                    _owner: o
                }
            }, t.createContext = function(e) {
                return (e = {
                    $$typeof: s,
                    _currentValue: e,
                    _currentValue2: e,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null,
                    _defaultValue: null,
                    _globalName: null
                }).Provider = {
                    $$typeof: o,
                    _context: e
                }, e.Consumer = e
            }, t.createElement = S, t.createFactory = function(e) {
                var t = S.bind(null, e);
                return t.type = e, t
            }, t.createRef = function() {
                return {
                    current: null
                }
            }, t.forwardRef = function(e) {
                return {
                    $$typeof: c,
                    render: e
                }
            }, t.isValidElement = _, t.lazy = function(e) {
                return {
                    $$typeof: f,
                    _payload: {
                        _status: -1,
                        _result: e
                    },
                    _init: O
                }
            }, t.memo = function(e, t) {
                return {
                    $$typeof: d,
                    type: e,
                    compare: void 0 === t ? null : t
                }
            }, t.startTransition = function(e) {
                var t = R.transition;
                R.transition = {};
                try {
                    e()
                } finally {
                    R.transition = t
                }
            }, t.unstable_act = function() {
                throw Error("act(...) is not supported in production builds of React.")
            }, t.useCallback = function(e, t) {
                return T.current.useCallback(e, t)
            }, t.useContext = function(e) {
                return T.current.useContext(e)
            }, t.useDebugValue = function() {}, t.useDeferredValue = function(e) {
                return T.current.useDeferredValue(e)
            }, t.useEffect = function(e, t) {
                return T.current.useEffect(e, t)
            }, t.useId = function() {
                return T.current.useId()
            }, t.useImperativeHandle = function(e, t, n) {
                return T.current.useImperativeHandle(e, t, n)
            }, t.useInsertionEffect = function(e, t) {
                return T.current.useInsertionEffect(e, t)
            }, t.useLayoutEffect = function(e, t) {
                return T.current.useLayoutEffect(e, t)
            }, t.useMemo = function(e, t) {
                return T.current.useMemo(e, t)
            }, t.useReducer = function(e, t, n) {
                return T.current.useReducer(e, t, n)
            }, t.useRef = function(e) {
                return T.current.useRef(e)
            }, t.useState = function(e) {
                return T.current.useState(e)
            }, t.useSyncExternalStore = function(e, t, n) {
                return T.current.useSyncExternalStore(e, t, n)
            }, t.useTransition = function() {
                return T.current.useTransition()
            }, t.version = "18.2.0"
        },
        791: function(e, t, n) {
            "use strict";
            e.exports = n(117)
        },
        184: function(e, t, n) {
            "use strict";
            e.exports = n(374)
        },
        813: function(e, t) {
            "use strict";

            function n(e, t) {
                var n = e.length;
                e.push(t);
                e: for (; 0 < n;) {
                    var r = n - 1 >>> 1,
                        a = e[r];
                    if (!(0 < l(a, t))) break e;
                    e[r] = t, e[n] = a, n = r
                }
            }

            function r(e) {
                return 0 === e.length ? null : e[0]
            }

            function a(e) {
                if (0 === e.length) return null;
                var t = e[0],
                    n = e.pop();
                if (n !== t) {
                    e[0] = n;
                    e: for (var r = 0, a = e.length, i = a >>> 1; r < i;) {
                        var o = 2 * (r + 1) - 1,
                            s = e[o],
                            c = o + 1,
                            u = e[c];
                        if (0 > l(s, n)) c < a && 0 > l(u, s) ? (e[r] = u, e[c] = n, r = c) : (e[r] = s, e[o] = n, r = o);
                        else {
                            if (!(c < a && 0 > l(u, n))) break e;
                            e[r] = u, e[c] = n, r = c
                        }
                    }
                }
                return t
            }

            function l(e, t) {
                var n = e.sortIndex - t.sortIndex;
                return 0 !== n ? n : e.id - t.id
            }
            if ("object" === typeof performance && "function" === typeof performance.now) {
                var i = performance;
                t.unstable_now = function() {
                    return i.now()
                }
            } else {
                var o = Date,
                    s = o.now();
                t.unstable_now = function() {
                    return o.now() - s
                }
            }
            var c = [],
                u = [],
                d = 1,
                f = null,
                h = 3,
                m = !1,
                p = !1,
                g = !1,
                v = "function" === typeof setTimeout ? setTimeout : null,
                b = "function" === typeof clearTimeout ? clearTimeout : null,
                x = "undefined" !== typeof setImmediate ? setImmediate : null;

            function y(e) {
                for (var t = r(u); null !== t;) {
                    if (null === t.callback) a(u);
                    else {
                        if (!(t.startTime <= e)) break;
                        a(u), t.sortIndex = t.expirationTime, n(c, t)
                    }
                    t = r(u)
                }
            }

            function w(e) {
                if (g = !1, y(e), !p)
                    if (null !== r(c)) p = !0, R(j);
                    else {
                        var t = r(u);
                        null !== t && D(w, t.startTime - e)
                    }
            }

            function j(e, n) {
                p = !1, g && (g = !1, b(_), _ = -1), m = !0;
                var l = h;
                try {
                    for (y(n), f = r(c); null !== f && (!(f.expirationTime > n) || e && !P());) {
                        var i = f.callback;
                        if ("function" === typeof i) {
                            f.callback = null, h = f.priorityLevel;
                            var o = i(f.expirationTime <= n);
                            n = t.unstable_now(), "function" === typeof o ? f.callback = o : f === r(c) && a(c), y(n)
                        } else a(c);
                        f = r(c)
                    }
                    if (null !== f) var s = !0;
                    else {
                        var d = r(u);
                        null !== d && D(w, d.startTime - n), s = !1
                    }
                    return s
                } finally {
                    f = null, h = l, m = !1
                }
            }
            "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
            var k, N = !1,
                S = null,
                _ = -1,
                E = 5,
                C = -1;

            function P() {
                return !(t.unstable_now() - C < E)
            }

            function z() {
                if (null !== S) {
                    var e = t.unstable_now();
                    C = e;
                    var n = !0;
                    try {
                        n = S(!0, e)
                    } finally {
                        n ? k() : (N = !1, S = null)
                    }
                } else N = !1
            }
            if ("function" === typeof x) k = function() {
                x(z)
            };
            else if ("undefined" !== typeof MessageChannel) {
                var O = new MessageChannel,
                    T = O.port2;
                O.port1.onmessage = z, k = function() {
                    T.postMessage(null)
                }
            } else k = function() {
                v(z, 0)
            };

            function R(e) {
                S = e, N || (N = !0, k())
            }

            function D(e, n) {
                _ = v((function() {
                    e(t.unstable_now())
                }), n)
            }
            t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(e) {
                e.callback = null
            }, t.unstable_continueExecution = function() {
                p || m || (p = !0, R(j))
            }, t.unstable_forceFrameRate = function(e) {
                0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : E = 0 < e ? Math.floor(1e3 / e) : 5
            }, t.unstable_getCurrentPriorityLevel = function() {
                return h
            }, t.unstable_getFirstCallbackNode = function() {
                return r(c)
            }, t.unstable_next = function(e) {
                switch (h) {
                    case 1:
                    case 2:
                    case 3:
                        var t = 3;
                        break;
                    default:
                        t = h
                }
                var n = h;
                h = t;
                try {
                    return e()
                } finally {
                    h = n
                }
            }, t.unstable_pauseExecution = function() {}, t.unstable_requestPaint = function() {}, t.unstable_runWithPriority = function(e, t) {
                switch (e) {
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        break;
                    default:
                        e = 3
                }
                var n = h;
                h = e;
                try {
                    return t()
                } finally {
                    h = n
                }
            }, t.unstable_scheduleCallback = function(e, a, l) {
                var i = t.unstable_now();
                switch ("object" === typeof l && null !== l ? l = "number" === typeof(l = l.delay) && 0 < l ? i + l : i : l = i, e) {
                    case 1:
                        var o = -1;
                        break;
                    case 2:
                        o = 250;
                        break;
                    case 5:
                        o = 1073741823;
                        break;
                    case 4:
                        o = 1e4;
                        break;
                    default:
                        o = 5e3
                }
                return e = {
                    id: d++,
                    callback: a,
                    priorityLevel: e,
                    startTime: l,
                    expirationTime: o = l + o,
                    sortIndex: -1
                }, l > i ? (e.sortIndex = l, n(u, e), null === r(c) && e === r(u) && (g ? (b(_), _ = -1) : g = !0, D(w, l - i))) : (e.sortIndex = o, n(c, e), p || m || (p = !0, R(j))), e
            }, t.unstable_shouldYield = P, t.unstable_wrapCallback = function(e) {
                var t = h;
                return function() {
                    var n = h;
                    h = t;
                    try {
                        return e.apply(this, arguments)
                    } finally {
                        h = n
                    }
                }
            }
        },
        296: function(e, t, n) {
            "use strict";
            e.exports = n(813)
        }
    },
    t = {};

    function n(r) {
        var a = t[r];
        if (void 0 !== a) return a.exports;
        var l = t[r] = {
            exports: {}
        };
        return e[r].call(l.exports, l, l.exports, n), l.exports
    }
    n.m = e, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, {
            a: t
        }), t
    }, n.d = function(e, t) {
        for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
        })
    }, n.f = {}, n.e = function(e) {
        return Promise.all(Object.keys(n.f).reduce((function(t, r) {
            return n.f[r](e, t), t
        }), []))
    }, n.u = function(e) {
        return "static/js/" + e + ".d9c9735c.chunk.js"
    }, n.miniCssF = function(e) {}, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    },
    function() {
        var e = {},
            t = "komodo-os:";
        n.l = function(r, a, l, i) {
            if (e[r]) e[r].push(a);
            else {
                var o, s;
                if (void 0 !== l)
                    for (var c = document.getElementsByTagName("script"), u = 0; u < c.length; u++) {
                        var d = c[u];
                        if (d.getAttribute("src") == r || d.getAttribute("data-webpack") == t + l) {
                            o = d;
                            break
                        }
                    }
                o || (s = !0, (o = document.createElement("script")).charset = "utf-8", o.timeout = 120, n.nc && o.setAttribute("nonce", n.nc), o.setAttribute("data-webpack", t + l), o.src = r), e[r] = [a];
                var f = function(t, n) {
                        o.onerror = o.onload = null, clearTimeout(h);
                        var a = e[r];
                        if (delete e[r], o.parentNode && o.parentNode.removeChild(o), a && a.forEach((function(e) {
                                return e(n)
                            })), t) return t(n)
                    },
                    h = setTimeout(f.bind(null, void 0, {
                        type: "timeout",
                        target: o
                    }), 12e4);
                o.onerror = f.bind(null, o.onerror), o.onload = f.bind(null, o.onload), s && document.head.appendChild(o)
            }
        }
    }(), n.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.p = "/",
    function() {
        var e = {
            179: 0
        };
        n.f.j = function(t, r) {
            var a = n.o(e, t) ? e[t] : void 0;
            if (0 !== a)
                if (a) r.push(a[2]);
                else {
                    var l = new Promise((function(n, r) {
                        a = e[t] = [n, r]
                    }));
                    r.push(a[2] = l);
                    var i = n.p + n.u(t),
                        o = new Error;
                    n.l(i, (function(r) {
                        if (n.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                            var l = r && ("load" === r.type ? "missing" : r.type),
                                i = r && r.target && r.target.src;
                            o.message = "Loading chunk " + t + " failed.\n(" + l + ": " + i + ")", o.name = "ChunkLoadError", o.type = l, o.request = i, a[1](o)
                        }
                    }), "chunk-" + t, t)
                }
        };
        var t = function(t, r) {
                var a, l, i = r[0],
                    o = r[1],
                    s = r[2],
                    c = 0;
                if (i.some((function(t) {
                        return 0 !== e[t]
                    }))) {
                    for (a in o) n.o(o, a) && (n.m[a] = o[a]);
                    if (s) s(n)
                }
                for (t && t(r); c < i.length; c++) l = i[c], n.o(e, l) && e[l] && e[l][0](), e[l] = 0
            },
            r = self.webpackChunkkomodo_os = self.webpackChunkkomodo_os || [];
        r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
    }(),
    function() {
        "use strict";
        var e = n(791),
            t = n(250);
        var r, a = n.p + "static/media/brand.52caf444f99ab7165a48d04188470b9d.svg";

        function l(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }

        function i(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e
            }(e) || function(e, t) {
                var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var r, a, l = [],
                        i = !0,
                        o = !1;
                    try {
                        for (n = n.call(e); !(i = (r = n.next()).done) && (l.push(r.value), !t || l.length !== t); i = !0);
                    } catch (s) {
                        o = !0, a = s
                    } finally {
                        try {
                            i || null == n.return || n.return()
                        } finally {
                            if (o) throw a
                        }
                    }
                    return l
                }
            }(e, t) || function(e, t) {
                if (e) {
                    if ("string" === typeof e) return l(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? l(e, t) : void 0
                }
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function o() {
            return o = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }, o.apply(this, arguments)
        }! function(e) {
            e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
        }(r || (r = {}));
        var s = function(e) {
            return e
        };
        var c = "beforeunload",
            u = "popstate";

        function d(e) {
            e.preventDefault(), e.returnValue = ""
        }

        function f() {
            var e = [];
            return {
                get length() {
                    return e.length
                },
                push: function(t) {
                    return e.push(t),
                        function() {
                            e = e.filter((function(e) {
                                return e !== t
                            }))
                        }
                },
                call: function(t) {
                    e.forEach((function(e) {
                        return e && e(t)
                    }))
                }
            }
        }

        function h() {
            return Math.random().toString(36).substr(2, 8)
        }

        function m(e) {
            var t = e.pathname,
                n = void 0 === t ? "/" : t,
                r = e.search,
                a = void 0 === r ? "" : r,
                l = e.hash,
                i = void 0 === l ? "" : l;
            return a && "?" !== a && (n += "?" === a.charAt(0) ? a : "?" + a), i && "#" !== i && (n += "#" === i.charAt(0) ? i : "#" + i), n
        }

        function p(e) {
            var t = {};
            if (e) {
                var n = e.indexOf("#");
                n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
                var r = e.indexOf("?");
                r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e)
            }
            return t
        }
        var g = (0, e.createContext)(null);
        var v = (0, e.createContext)(null);
        var b = (0, e.createContext)({
            outlet: null,
            matches: []
        });

        function x(e, t) {
            if (!e) throw new Error(t)
        }

        function y(e, t, n) {
            void 0 === n && (n = "/");
            var r = C(("string" === typeof t ? p(t) : t).pathname || "/", n);
            if (null == r) return null;
            var a = w(e);
            ! function(e) {
                e.sort((function(e, t) {
                    return e.score !== t.score ? t.score - e.score : function(e, t) {
                        var n = e.length === t.length && e.slice(0, -1).every((function(e, n) {
                            return e === t[n]
                        }));
                        return n ? e[e.length - 1] - t[t.length - 1] : 0
                    }(e.routesMeta.map((function(e) {
                        return e.childrenIndex
                    })), t.routesMeta.map((function(e) {
                        return e.childrenIndex
                    })))
                }))
            }(a);
            for (var l = null, i = 0; null == l && i < a.length; ++i) l = S(a[i], r);
            return l
        }

        function w(e, t, n, r) {
            return void 0 === t && (t = []), void 0 === n && (n = []), void 0 === r && (r = ""), e.forEach((function(e, a) {
                var l = {
                    relativePath: e.path || "",
                    caseSensitive: !0 === e.caseSensitive,
                    childrenIndex: a,
                    route: e
                };
                l.relativePath.startsWith("/") && (l.relativePath.startsWith(r) || x(!1), l.relativePath = l.relativePath.slice(r.length));
                var i = P([r, l.relativePath]),
                    o = n.concat(l);
                e.children && e.children.length > 0 && (!0 === e.index && x(!1), w(e.children, t, o, i)), (null != e.path || e.index) && t.push({
                    path: i,
                    score: N(i, e.index),
                    routesMeta: o
                })
            })), t
        }
        var j = /^:\w+$/,
            k = function(e) {
                return "*" === e
            };

        function N(e, t) {
            var n = e.split("/"),
                r = n.length;
            return n.some(k) && (r += -2), t && (r += 2), n.filter((function(e) {
                return !k(e)
            })).reduce((function(e, t) {
                return e + (j.test(t) ? 3 : "" === t ? 1 : 10)
            }), r)
        }

        function S(e, t) {
            for (var n = e.routesMeta, r = {}, a = "/", l = [], i = 0; i < n.length; ++i) {
                var o = n[i],
                    s = i === n.length - 1,
                    c = "/" === a ? t : t.slice(a.length) || "/",
                    u = _({
                        path: o.relativePath,
                        caseSensitive: o.caseSensitive,
                        end: s
                    }, c);
                if (!u) return null;
                Object.assign(r, u.params);
                var d = o.route;
                l.push({
                    params: r,
                    pathname: P([a, u.pathname]),
                    pathnameBase: z(P([a, u.pathnameBase])),
                    route: d
                }), "/" !== u.pathnameBase && (a = P([a, u.pathnameBase]))
            }
            return l
        }

        function _(e, t) {
            "string" === typeof e && (e = {
                path: e,
                caseSensitive: !1,
                end: !0
            });
            var n = function(e, t, n) {
                    void 0 === t && (t = !1);
                    void 0 === n && (n = !0);
                    var r = [],
                        a = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/:(\w+)/g, (function(e, t) {
                            return r.push(t), "([^\\/]+)"
                        }));
                    e.endsWith("*") ? (r.push("*"), a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : a += n ? "\\/*$" : "(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)";
                    return [new RegExp(a, t ? void 0 : "i"), r]
                }(e.path, e.caseSensitive, e.end),
                r = i(n, 2),
                a = r[0],
                l = r[1],
                o = t.match(a);
            if (!o) return null;
            var s = o[0],
                c = s.replace(/(.)\/+$/, "$1"),
                u = o.slice(1);
            return {
                params: l.reduce((function(e, t, n) {
                    if ("*" === t) {
                        var r = u[n] || "";
                        c = s.slice(0, s.length - r.length).replace(/(.)\/+$/, "$1")
                    }
                    return e[t] = function(e, t) {
                        try {
                            return decodeURIComponent(e)
                        } catch (n) {
                            return e
                        }
                    }(u[n] || ""), e
                }), {}),
                pathname: s,
                pathnameBase: c,
                pattern: e
            }
        }

        function E(e, t, n) {
            var r, a = "string" === typeof e ? p(e) : e,
                l = "" === e || "" === a.pathname ? "/" : a.pathname;
            if (null == l) r = n;
            else {
                var i = t.length - 1;
                if (l.startsWith("..")) {
                    for (var o = l.split("/");
                        ".." === o[0];) o.shift(), i -= 1;
                    a.pathname = o.join("/")
                }
                r = i >= 0 ? t[i] : "/"
            }
            var s = function(e, t) {
                void 0 === t && (t = "/");
                var n = "string" === typeof e ? p(e) : e,
                    r = n.pathname,
                    a = n.search,
                    l = void 0 === a ? "" : a,
                    i = n.hash,
                    o = void 0 === i ? "" : i,
                    s = r ? r.startsWith("/") ? r : function(e, t) {
                        var n = t.replace(/\/+$/, "").split("/");
                        return e.split("/").forEach((function(e) {
                            ".." === e ? n.length > 1 && n.pop() : "." !== e && n.push(e)
                        })), n.length > 1 ? n.join("/") : "/"
                    }(r, t) : t;
                return {
                    pathname: s,
                    search: O(l),
                    hash: T(o)
                }
            }(a, r);
            return l && "/" !== l && l.endsWith("/") && !s.pathname.endsWith("/") && (s.pathname += "/"), s
        }

        function C(e, t) {
            if ("/" === t) return e;
            if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
            var n = e.charAt(t.length);
            return n && "/" !== n ? null : e.slice(t.length) || "/"
        }
        var P = function(e) {
                return e.join("/").replace(/\/\/+/g, "/")
            },
            z = function(e) {
                return e.replace(/\/+$/, "").replace(/^\/*/, "/")
            },
            O = function(e) {
                return e && "?" !== e ? e.startsWith("?") ? e : "?" + e : ""
            },
            T = function(e) {
                return e && "#" !== e ? e.startsWith("#") ? e : "#" + e : ""
            };

        function R(t) {
            D() || x(!1);
            var n = (0, e.useContext)(g),
                r = n.basename,
                a = n.navigator,
                l = M(t),
                i = l.hash,
                o = l.pathname,
                s = l.search,
                c = o;
            if ("/" !== r) {
                var u = function(e) {
                        return "" === e || "" === e.pathname ? "/" : "string" === typeof e ? p(e).pathname : e.pathname
                    }(t),
                    d = null != u && u.endsWith("/");
                c = "/" === o ? r + (d ? "/" : "") : P([r, o])
            }
            return a.createHref({
                pathname: c,
                search: s,
                hash: i
            })
        }

        function D() {
            return null != (0, e.useContext)(v)
        }

        function L() {
            return D() || x(!1), (0, e.useContext)(v).location
        }

        function A() {
            D() || x(!1);
            var t = (0, e.useContext)(g),
                n = t.basename,
                r = t.navigator,
                a = (0, e.useContext)(b).matches,
                l = L().pathname,
                i = JSON.stringify(a.map((function(e) {
                    return e.pathnameBase
                }))),
                o = (0, e.useRef)(!1);
            return (0, e.useEffect)((function() {
                o.current = !0
            })), (0, e.useCallback)((function(e, t) {
                if (void 0 === t && (t = {}), o.current)
                    if ("number" !== typeof e) {
                        var a = E(e, JSON.parse(i), l);
                        "/" !== n && (a.pathname = P([n, a.pathname])), (t.replace ? r.replace : r.push)(a, t.state)
                    } else r.go(e)
            }), [n, r, i, l])
        }

        function M(t) {
            var n = (0, e.useContext)(b).matches,
                r = L().pathname,
                a = JSON.stringify(n.map((function(e) {
                    return e.pathnameBase
                })));
            return (0, e.useMemo)((function() {
                return E(t, JSON.parse(a), r)
            }), [t, a, r])
        }

        function I(t, n) {
            return void 0 === n && (n = []), null == t ? null : t.reduceRight((function(r, a, l) {
                return (0, e.createElement)(b.Provider, {
                    children: void 0 !== a.route.element ? a.route.element : r,
                    value: {
                        outlet: r,
                        matches: n.concat(t.slice(0, l + 1))
                    }
                })
            }), null)
        }

        function F(e) {
            x(!1)
        }

        function U(t) {
            var n = t.basename,
                a = void 0 === n ? "/" : n,
                l = t.children,
                i = void 0 === l ? null : l,
                o = t.location,
                s = t.navigationType,
                c = void 0 === s ? r.Pop : s,
                u = t.navigator,
                d = t.static,
                f = void 0 !== d && d;
            D() && x(!1);
            var h = z(a),
                m = (0, e.useMemo)((function() {
                    return {
                        basename: h,
                        navigator: u,
                        static: f
                    }
                }), [h, u, f]);
            "string" === typeof o && (o = p(o));
            var b = o,
                y = b.pathname,
                w = void 0 === y ? "/" : y,
                j = b.search,
                k = void 0 === j ? "" : j,
                N = b.hash,
                S = void 0 === N ? "" : N,
                _ = b.state,
                E = void 0 === _ ? null : _,
                P = b.key,
                O = void 0 === P ? "default" : P,
                T = (0, e.useMemo)((function() {
                    var e = C(w, h);
                    return null == e ? null : {
                        pathname: e,
                        search: k,
                        hash: S,
                        state: E,
                        key: O
                    }
                }), [h, w, k, S, E, O]);
            return null == T ? null : (0, e.createElement)(g.Provider, {
                value: m
            }, (0, e.createElement)(v.Provider, {
                children: i,
                value: {
                    location: T,
                    navigationType: c
                }
            }))
        }

        function B(t) {
            var n = t.children,
                r = t.location;
            return function(t, n) {
                D() || x(!1);
                var r, a = (0, e.useContext)(b).matches,
                    l = a[a.length - 1],
                    i = l ? l.params : {},
                    o = (l && l.pathname, l ? l.pathnameBase : "/"),
                    s = (l && l.route, L());
                if (n) {
                    var c, u = "string" === typeof n ? p(n) : n;
                    "/" === o || (null == (c = u.pathname) ? void 0 : c.startsWith(o)) || x(!1), r = u
                } else r = s;
                var d = r.pathname || "/",
                    f = y(t, {
                        pathname: "/" === o ? d : d.slice(o.length) || "/"
                    });
                return I(f && f.map((function(e) {
                    return Object.assign({}, e, {
                        params: Object.assign({}, i, e.params),
                        pathname: P([o, e.pathname]),
                        pathnameBase: "/" === e.pathnameBase ? o : P([o, e.pathnameBase])
                    })
                })), a)
            }(W(n), r)
        }

        function W(t) {
            var n = [];
            return e.Children.forEach(t, (function(t) {
                if ((0, e.isValidElement)(t))
                    if (t.type !== e.Fragment) {
                        t.type !== F && x(!1);
                        var r = {
                            caseSensitive: t.props.caseSensitive,
                            element: t.props.element,
                            index: t.props.index,
                            path: t.props.path
                        };
                        t.props.children && (r.children = W(t.props.children)), n.push(r)
                    } else n.push.apply(n, W(t.props.children))
            })), n
        }

        function $() {
            return $ = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }, $.apply(this, arguments)
        }

        function V(e, t) {
            if (null == e) return {};
            var n, r, a = {},
                l = Object.keys(e);
            for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a
        }
        var H = ["onClick", "reloadDocument", "replace", "state", "target", "to"];

        function K(t) {
            var n = t.basename,
                a = t.children,
                l = t.window,
                g = (0, e.useRef)();
            null == g.current && (g.current = function(e) {
                void 0 === e && (e = {});
                var t = e.window,
                    n = void 0 === t ? document.defaultView : t,
                    a = n.history;

                function l() {
                    var e = n.location,
                        t = e.pathname,
                        r = e.search,
                        l = e.hash,
                        i = a.state || {};
                    return [i.idx, s({
                        pathname: t,
                        search: r,
                        hash: l,
                        state: i.usr || null,
                        key: i.key || "default"
                    })]
                }
                var i = null;
                n.addEventListener(u, (function() {
                    if (i) w.call(i), i = null;
                    else {
                        var e = r.Pop,
                            t = l(),
                            n = t[0],
                            a = t[1];
                        if (w.length) {
                            if (null != n) {
                                var o = b - n;
                                o && (i = {
                                    action: e,
                                    location: a,
                                    retry: function() {
                                        E(-1 * o)
                                    }
                                }, E(o))
                            }
                        } else _(e)
                    }
                }));
                var g = r.Pop,
                    v = l(),
                    b = v[0],
                    x = v[1],
                    y = f(),
                    w = f();

                function j(e) {
                    return "string" === typeof e ? e : m(e)
                }

                function k(e, t) {
                    return void 0 === t && (t = null), s(o({
                        pathname: x.pathname,
                        hash: "",
                        search: ""
                    }, "string" === typeof e ? p(e) : e, {
                        state: t,
                        key: h()
                    }))
                }

                function N(e, t) {
                    return [{
                        usr: e.state,
                        key: e.key,
                        idx: t
                    }, j(e)]
                }

                function S(e, t, n) {
                    return !w.length || (w.call({
                        action: e,
                        location: t,
                        retry: n
                    }), !1)
                }

                function _(e) {
                    g = e;
                    var t = l();
                    b = t[0], x = t[1], y.call({
                        action: g,
                        location: x
                    })
                }

                function E(e) {
                    a.go(e)
                }
                null == b && (b = 0, a.replaceState(o({}, a.state, {
                    idx: b
                }), ""));
                var C = {
                    get action() {
                        return g
                    },
                    get location() {
                        return x
                    },
                    createHref: j,
                    push: function e(t, l) {
                        var i = r.Push,
                            o = k(t, l);
                        if (S(i, o, (function() {
                                e(t, l)
                            }))) {
                            var s = N(o, b + 1),
                                c = s[0],
                                u = s[1];
                            try {
                                a.pushState(c, "", u)
                            } catch (d) {
                                n.location.assign(u)
                            }
                            _(i)
                        }
                    },
                    replace: function e(t, n) {
                        var l = r.Replace,
                            i = k(t, n);
                        if (S(l, i, (function() {
                                e(t, n)
                            }))) {
                            var o = N(i, b),
                                s = o[0],
                                c = o[1];
                            a.replaceState(s, "", c), _(l)
                        }
                    },
                    go: E,
                    back: function() {
                        E(-1)
                    },
                    forward: function() {
                        E(1)
                    },
                    listen: function(e) {
                        return y.push(e)
                    },
                    block: function(e) {
                        var t = w.push(e);
                        return 1 === w.length && n.addEventListener(c, d),
                            function() {
                                t(), w.length || n.removeEventListener(c, d)
                            }
                    }
                };
                return C
            }({
                window: l
            }));
            var v = g.current,
                b = i((0, e.useState)({
                    action: v.action,
                    location: v.location
                }), 2),
                x = b[0],
                y = b[1];
            return (0, e.useLayoutEffect)((function() {
                return v.listen(y)
            }), [v]), (0, e.createElement)(U, {
                basename: n,
                children: a,
                location: x.location,
                navigationType: x.action,
                navigator: v
            })
        }
        var Q = (0, e.forwardRef)((function(t, n) {
            var r = t.onClick,
                a = t.reloadDocument,
                l = t.replace,
                i = void 0 !== l && l,
                o = t.state,
                s = t.target,
                c = t.to,
                u = V(t, H),
                d = R(c),
                f = function(t, n) {
                    var r = void 0 === n ? {} : n,
                        a = r.target,
                        l = r.replace,
                        i = r.state,
                        o = A(),
                        s = L(),
                        c = M(t);
                    return (0, e.useCallback)((function(e) {
                        if (0 === e.button && (!a || "_self" === a) && ! function(e) {
                                return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
                            }(e)) {
                            e.preventDefault();
                            var n = !!l || m(s) === m(c);
                            o(t, {
                                replace: n,
                                state: i
                            })
                        }
                    }), [s, o, c, l, i, a, t])
                }(c, {
                    replace: i,
                    state: o,
                    target: s
                });
            return (0, e.createElement)("a", $({}, u, {
                href: d,
                onClick: function(e) {
                    r && r(e), e.defaultPrevented || a || f(e)
                },
                ref: n,
                target: s
            }))
        }));
        var X = n(184);
        var q = function() {
            var t = window.pageYOffset,
                n = function() {
                    var e = window.pageYOffset;
                    t > e ? (document.getElementById("navbar").style.top = "0", document.getElementById("navbar").style.opacity = "1") : (document.getElementById("navbar").style.top = "-100px", document.getElementById("navbar").style.opacity = "0"), t = e
                };
            (0, e.useEffect)((function() {
                return window.addEventListener("scroll", n),
                    function() {
                        window.removeEventListener("scroll", n)
                    }
            }), []);
            var r = function() {
                document.body.scrollTop = 0, document.documentElement.scrollTop = 0, document.getElementById("navbarNavDropdown").classList.remove("show")
            };
            return (0, X.jsx)("nav", {
                id: "navbar",
                className: "navbar navbar-index navbar-expand-lg navbar-light py-3 bg-white py-md-4",
                children: (0, X.jsxs)("div", {
                    className: "container",
                    children: [(0, X.jsx)("a", {
                        className: "navbar-brand",
                        href: "/",
                        children: (0, X.jsx)("img", {
                            src: a,
                            alt: "komodo os",
                            draggable: "false"
                        })
                    }), (0, X.jsx)("button", {
                        className: "navbar-toggler",
                        type: "button",
                        "data-bs-toggle": "collapse",
                        "data-bs-target": "#navbarNavDropdown",
                        "aria-controls": "navbarNavDropdown",
                        "aria-expanded": "false",
                        "aria-label": "Toggle navigation",
                        children: (0, X.jsx)("i", {
                            className: "fas fa-bars"
                        })
                    }), (0, X.jsx)("div", {
                        className: "collapse navbar-collapse justify-content-end text-center",
                        id: "navbarNavDropdown",
                        children: (0, X.jsxs)("ul", {
                            className: "navbar-nav fw-bold",
                            children: [(0, X.jsx)("li", {
                                className: "nav-item py-2 py-lg-0 mx-0 mx-md-4",
                                children: (0, X.jsx)(Q, {
                                    className: "nav-link",
                                    to: "/changelog",
                                    onClick: function() {
                                        return r()
                                    },
                                    children: "Changelog"
                                })
                            }), (0, X.jsx)("li", {
                                className: "nav-item py-2 py-lg-0 mx-0 mx-md-4",
                                children: (0, X.jsx)(Q, {
                                    className: "nav-link",
                                    to: "/donate",
                                    onClick: function() {
                                        return r()
                                    },
                                    children: "Donate"
                                })
                            }), (0, X.jsx)("li", {
                                className: "nav-item py-2 py-lg-0 mx-0 mx-md-4",
                                children: (0, X.jsx)(Q, {
                                    className: "nav-link",
                                    to: "/team",
                                    onClick: function() {
                                        return r()
                                    },
                                    children: "Team"
                                })
                            }), (0, X.jsx)("li", {
                                className: "nav-item d-inline d-lg-none py-2 py-lg-0 mx-0 mx-md-4",
                                children: (0, X.jsx)(Q, {
                                    className: "nav-link",
                                    to: "/download",
                                    onClick: function() {
                                        return r()
                                    },
                                    children: "Download"
                                })
                            }), (0, X.jsx)("li", {
                                className: "nav-item d-none d-lg-inline",
                                children: (0, X.jsx)(Q, {
                                    className: "nav-link btn btn-primary btn-donate px-4",
                                    to: "/download",
                                    onClick: function() {
                                        return r()
                                    },
                                    children: "Download"
                                })
                            })]
                        })
                    })]
                })
            })
        };
        var G = function() {
                var t = function() {
                    var e = document.getElementById("scroll-top"),
                        t = document.getElementById("navbar");
                    document.body.scrollTop > 70 || document.documentElement.scrollTop > 70 ? (e.style.opacity = "100", e.style.cursor = "pointer", t.classList.add("shadow")) : (e.style.opacity = "0", e.style.cursor = "default", t.classList.remove("shadow"))
                };
                return (0, e.useEffect)((function() {
                    return window.addEventListener("scroll", t),
                        function() {
                            window.removeEventListener("scroll", t)
                        }
                }), []), (0, X.jsxs)(X.Fragment, {
                    children: [(0, X.jsxs)("footer", {
                        className: "bg-dark text-white",
                        children: [(0, X.jsx)("div", {
                            className: "container py-5 px-4 px-md-0",
                            children: (0, X.jsxs)("div", {
                                className: "row",
                                children: [(0, X.jsx)("div", {
                                    className: "col-12 col-md-4 d-flex my-auto text-center text-sm-start",
                                    children: (0, X.jsxs)("div", {
                                        className: "w-100",
                                        children: [(0, X.jsxs)("a", {
                                            className: "d-flex",
                                            href: "/",
                                            children: [(0, X.jsx)("img", {
                                                src: a,
                                                alt: "komodo os",
                                                draggable: "false"
                                            }), (0, X.jsx)("b", {
                                                className: "fs-4 ms-3 text-white",
                                                children: "KOMODO OS"
                                            })]
                                        }), (0, X.jsx)("p", {
                                            className: "text-muted mt-3",
                                            children: "Custom ROM with all its local wisdom."
                                        })]
                                    })
                                }), (0, X.jsxs)("div", {
                                    className: "col-12 col-sm-6 col-md-4 text-center text-sm-start text-md-center my-3 my-sm-0",
                                    children: [(0, X.jsx)("a", {
                                        href: "http://t.me/komodosrom/",
                                        children: "Telegram"
                                    }), (0, X.jsx)("a", {
                                        href: "http://t.me/komodosgroup/",
                                        children: "Support Group"
                                    }), (0, X.jsx)("a", {
                                        href: "https://www.instagram.com/komodorom/",
                                        children: "Instagram"
                                    }), (0, X.jsx)("a", {
                                        href: "https://twitter.com/komodoOSproject",
                                        children: "Twitter"
                                    })]
                                }), (0, X.jsxs)("div", {
                                    className: "col-12 col-sm-6 col-md-4 text-center my-3",
                                    children: [(0, X.jsx)("p", {
                                        id: "maintainer",
                                        children: "Want to build the ROM officialy?"
                                    }), (0, X.jsx)("a", {
                                        href: "https://docs.google.com/forms/d/e/1FAIpQLSdjPwX5xveh4qN2sgX_csnXXyCQ3qnwGUCM9lLUiDg4bOMVkA/viewform",
                                        target: "_blank",
                                        className: "btn btn-primary px-4 text-dark",
                                        children: "Join Us!"
                                    })]
                                })]
                            })
                        }), (0, X.jsx)("div", {
                            className: "container px-4",
                            children: (0, X.jsx)("div", {
                                className: "text-sm-center py-3",
                                children: (0, X.jsx)("p", {
                                    id: "copyright",
                                    className: "text-muted small",
                                    children: "\xa9 Komodo OS - 2021"
                                })
                            })
                        })]
                    }), (0, X.jsx)("button", {
                        onClick: function() {
                            document.body.scrollTop = 0, document.documentElement.scrollTop = 0
                        },
                        className: "rounded-circle shadow-lg",
                        id: "scroll-top",
                        title: "Go to top",
                        children: (0, X.jsx)("i", {
                            className: "fas fa-arrow-up"
                        })
                    })]
                })
            },
            Y = [{
                brand: "Xiaomi",
                device: "Poco M3",
                codename: "Juice",
                maintainer: "frost",
                github: "https://github.com/frostg-012",
                changelog: [{
                    cl_code: "Sweetpea",
                    link: "https://raw.githubusercontent.com/Komodo-OS-Devices/DeviceChangelogs/main/4.x/juice"
                }],
                download: "https://www.pling.com/p/1539069/"
            }, {
                brand: "Xiaomi",
                device: "Poco X3 NFC",
                codename: "Surya",
                maintainer: ". \u0192\u03b1\u03c5z\u03b1\u03b7",
                github: "https://github.com/buglessx",
                changelog: [{
                    cl_code: "SweetPea",
                    link: "https://raw.githubusercontent.com/Komodo-OS-Devices/DeviceChangelogs/main/4.x/surya"
                }],
                download: "https://www.pling.com/p/1832469/"
            }, {
                brand: "Xiaomi",
                device: "Poco X3 Pro",
                codename: "Vayu",
                maintainer: "\ud835\ude8a\ud835\ude95\ud835\ude8a\ud835\ude97\ud835\ude97\ud835\ude8d\ud835\udea3 & Dzaky",
                github: "https://github.com/alanndz",
                changelog: [{
                    cl_code: "Sakura",
                    link: "https://raw.githubusercontent.com/Komodo-OS-Devices/DeviceChangelogs/main/4.x/vayu"
                }],
                download: "https://www.pling.com/p/1670191/"
            }, {
                brand: "Xiaomi",
                device: "Poco F1",
                codename: "Beryllium",
                maintainer: "Dzaky",
                github: "https://github.com/zkyzzz",
                changelog: [{
                    cl_code: "Snowdrop",
                    link: "https://raw.githubusercontent.com/Komodo-OS-Devices/DeviceChangelogs/main/4.x/beryllium"
                }],
                download: "https://www.pling.com/p/1707782/"
            }, {
                brand: "Xiaomi",
                device: "Redmi 4X",
                codename: "Santoni",
                maintainer: "ItoRenz",
                github: "https://github.com/ItoRenz",
                changelog: [{
                    cl_code: "Seroja",
                    link: "https://raw.githubusercontent.com/Komodo-OS-Devices/DeviceChangelogs/main/4.x/santoni"
                }],
                download: "https://www.pling.com/p/1549224/"
            }, {
                brand: "Xiaomi",
                device: "Redmi 4A/5A",
                codename: "Rova",
                maintainer: "ItoRenz",
                github: "https://github.com/ItoRenz",
                changelog: [{
                    cl_code: "Seroja",
                    link: "https://raw.githubusercontent.com/Komodo-OS-Devices/DeviceChangelogs/main/4.x/rova"
                }],
                download: "https://www.pling.com/p/1830809/"
            }, {
                brand: "Xiaomi",
                device: "Redmi 5",
                codename: "Rosy",
                maintainer: "Neno",
                github: "https://github.com/developer",
                changelog: "",
                download: "https://sourceforge.net/projects/komodos-rom/files/rosy/"
            }, {
                brand: "Xiaomi",
                device: "Redmi 5 Plus",
                codename: "Vince",
                maintainer: "Aurora",
                github: "https://github.com/developer",
                changelog: "",
                download: "https://sourceforge.net/projects/komodos-rom/files/vince/"
            }, {
                brand: "Xiaomi",
                device: "Redmi 6/6A Unified",
                codename: "Certus",
                maintainer: "wulan17",
                github: "https://github.com/wulan17",
                changelog: "",
                download: "https://sourceforge.net/projects/komodos-rom/files/certus/"
            }, {
                brand: "Xiaomi",
                device: "Redmi 7",
                codename: "Onclite",
                maintainer: "\u061cHadad",
                github: "https://github.com/hadad",
                changelog: [{
                    cl_code: "Rattle",
                    link: "https://raw.githubusercontent.com/Komodo-OS-Devices/DeviceChangelogs/main/3.x/onclite"
                }],
                download: "https://www.pling.com/p/1539068/"
            }, {
                brand: "Xiaomi",
                device: "Redmi 8/8A/8A Dual",
                codename: "Olives",
                maintainer: "skittels15",
                github: "https://github.com/skittels15",
                changelog: [{
                    cl_code: "Serunai",
                    link: "https://raw.githubusercontent.com/Komodo-OS-Devices/DeviceChangelogs/main/4.x/olives"
                }, {
                    cl_code: "Raptor",
                    link: "https://raw.githubusercontent.com/Komodo-OS-Devices/DeviceChangelogs/main/3.x/olives"
                }],
                download: "https://sourceforge.net/projects/komodos-rom/files/olives/"
            }, {
                brand: "Xiaomi",
                device: "Redmi 9 / Poco M2",
                codename: "Lava",
                maintainer: "mikazuuu07",
                github: "https://github.com/Mikazuuu07",
                changelog: [{
                    cl_code: "Serunai",
                    link: "https://raw.githubusercontent.com/Komodo-OS-Devices/DeviceChangelogs/main/4.x/lava"
                }],
                download: "https://www.pling.com/p/1686033/"
            }, {
                brand: "Xiaomi",
                device: "Redmi 9T",
                codename: "Juice",
                maintainer: "\u061cfais",
                github: "https://github.com/droidsix",
                changelog: [{
                    cl_code: "Serunai",
                    link: "https://raw.githubusercontent.com/Komodo-OS-Devices/DeviceChangelogs/main/4.x/juice"
                }],
                download: "https://www.pling.com/p/1539069/"
            }, {
                brand: "Xiaomi",
                device: "Redmi 10",
                codename: "Selene",
                maintainer: "mikazuuu07",
                github: "https://github.com/Mikazuuu07",
                changelog: [{
                    cl_code: "Seroja",
                    link: "https://raw.githubusercontent.com/Komodo-OS-Devices/DeviceChangelogs/main/4.x/selene"
                }],
                download: "https://www.pling.com/p/1861110/"
            }, {
                brand: "Xiaomi",
                device: "Redmi 10C",
                codename: "Fog",
                maintainer: "\u24d3\u24d1\u24db\u24d4\u24dd\u24da",
                github: "https://github.com/boedhack99",
                changelog: [{
                    cl_code: "Seroja",
                    link: "https://raw.githubusercontent.com/Komodo-OS-Devices/DeviceChangelogs/main/4.x/fog"
                }],
                download: "https://www.pling.com/p/1861110/"
            }, {
                brand: "Xiaomi",
                device: "Redmi Note 4X",
                codename: "Mido",
                maintainer: "Rafiester",
                github: "https://github.com/developer",
                changelog: "",
                download: "https://sourceforge.net/projects/komodos-rom/files/mido/"
            }, {
                brand: "Xiaomi",
                device: "Redmi Note 5",
                codename: "Whyred",
                maintainer: "Ayush",
                github: "https://github.com/developer",
                changelog: "",
                download: "https://sourceforge.net/projects/komodos-rom/files/whyred/"
            }, {
                brand: "Xiaomi",
                device: "Redmi Note 6 Pro",
                codename: "Tulip",
                maintainer: "MOCHA",
                github: "https://github.com/AlokRonaldo",
                changelog: [{
                    cl_code: "SweetPea",
                    link: "https://raw.githubusercontent.com/Komodo-OS-Devices/DeviceChangelogs/main/4.x/tulip"
                }],
                download: "https://www.pling.com/p/1594512/"
            }, {
                brand: "Xiaomi",
                device: "Redmi Note 7",
                codename: "Lavender",
                maintainer: "\ud835\udc2d\ud835\udc2b\ud835\udc22\ud835\udc2c\ud835\udc1f",
                github: "https://github.com/trisfaizal",
                changelog: [{
                    cl_code: "Seroja",
                    link: "https://raw.githubusercontent.com/Komodo-OS-Devices/DeviceChangelogs/main/4.x/lavender"
                }],
                download: "https://www.pling.com/p/1823660/"
            }, {
                brand: "Xiaomi",
                device: "Redmi Note 7 Pro",
                codename: "Violet",
                maintainer: "Thunder105",
                github: "https://github.com/Thunder105",
                changelog: [{
                    cl_code: "Raptor",
                    link: "https://raw.githubusercontent.com/Komodo-OS-Devices/DeviceChangelogs/main/3.x/violet"
                }],
                download: "https://www.pling.com/p/1546803/"
            }, {
                brand: "Xiaomi",
                device: "Redmi Note 8/8T",
                codename: "Ginkgo",
                maintainer: "WisnuArdhi34",
                github: "https://github.com/WisnuArdhi28",
                changelog: [{
                    cl_code: "Seroja",
                    link: "https://raw.githubusercontent.com/Komodo-OS-Devices/DeviceChangelogs/main/4.x/ginkgo"
                }],
                download: "https://sourceforge.net/projects/komodos-rom/files/ginkgo/"
            }, {
                brand: "Xiaomi",
                device: "Redmi Note 8 Pro",
                codename: "Begonia",
                maintainer: "TeraaBytee",
                github: "https://github.com/TeraaBytee",
                changelog: [{
                    cl_code: "Raptor",
                    link: "https://raw.githubusercontent.com/Komodo-OS-Devices/DeviceChangelogs/main/3.x/begonia"
                }],
                download: "https://www.pling.com/p/1565383/"
            }, {
                brand: "Xiaomi",
                device: "Redmi Note 9",
                codename: "Merlinx",
                maintainer: "Luigiee",
                github: "https://github.com/fourninesix",
                changelog: [{
                    cl_code: "Snowdrop",
                    link: "https://raw.githubusercontent.com/Komodo-OS-Devices/DeviceChangelogs/main/4.x/merlinx"
                }],
                download: "https://sourceforge.net/projects/komodos-rom/files/merlinx/"
            }, {
                brand: "Xiaomi",
                device: "Redmi Note 9 Pro",
                codename: "Joyeuse",
                maintainer: "KryPtoN",
                github: "https://github.com/Kry9toN",
                changelog: [{
                    cl_code: "Serunai",
                    link: "https://raw.githubusercontent.com/Komodo-OS-Devices/DeviceChangelogs/main/4.x/joyeuse"
                }],
                download: "https://www.pling.com/p/1539067/"
            }, {
                brand: "Xiaomi",
                device: "Redmi Note 10",
                codename: "Mojito",
                maintainer: "dblenk9",
                github: "https://github.com/boedhack99",
                changelog: [{
                    cl_code: "Snowdrop",
                    link: "https://raw.githubusercontent.com/Komodo-OS-Devices/DeviceChangelogs/main/4.x/mojito"
                }],
                download: "https://www.pling.com/p/1861110/"
            }, {
                brand: "Xiaomi",
                device: "Redmi Note 10 Pro/Max",
                codename: "Sweet",
                maintainer: "Djampt",
                github: "https://github.com/",
                changelog: [{
                    cl_code: "Snowdrop",
                    link: "https://raw.githubusercontent.com/Komodo-OS-Devices/DeviceChangelogs/main/4.x/sweet"
                }],
                download: "https://www.pling.com/p/1708866/"
            }, {
                brand: "Xiaomi",
                device: "Redmi Note 11",
                codename: " Spes",
                maintainer: "dblenk9",
                github: "https://github.com/boedhack99",
                changelog: [{
                    cl_code: "Snowdrop",
                    link: "https://raw.githubusercontent.com/Komodo-OS-Devices/DeviceChangelogs/main/4.x/spes"
                }],
                download: "https://www.pling.com/p/1768983/"
            }, {
                brand: "Xiaomi",
                device: "Mi6",
                codename: "Sagit",
                maintainer: "deny2311",
                github: "https://github.com/@deny2311",
                changelog: [{
                    cl_code: "Seroja",
                    link: "https://raw.githubusercontent.com/Komodo-OS-Devices/DeviceChangelogs/main/4.x/sagit"
                }],
                download: "https://www.pling.com/p/1547767/"
            }, {
                brand: "Xiaomi",
                device: "Mi9",
                codename: "Cepheus",
                maintainer: "\u061c\ud835\udc2d\ud835\udc2b\ud835\udc22\ud835\udc2c\ud835\udc1f\u200c\u200c",
                github: "https://github.com/trisfaizal",
                changelog: [{
                    cl_code: "Rattle",
                    link: "https://raw.githubusercontent.com/Komodo-OS-Devices/DeviceChangelogs/main/3.x/cepheus"
                }],
                download: "https://sourceforge.net/projects/komodos-rom/files/"
            }, {
                brand: "Motorola",
                device: "Moto G7 Power",
                codename: "Ocean",
                maintainer: "\u061cIgnacio Garcia",
                github: "https://github.com/Naxo79",
                changelog: [{
                    cl_code: "Raptor",
                    link: "https://raw.githubusercontent.com/Komodo-OS-Devices/DeviceChangelogs/main/3.x/ocean"
                }],
                download: "https://www.pling.com/p/1566311/"
            }, {
                brand: "Realme",
                device: "C2",
                codename: "RMX1941",
                maintainer: "Fraschze97",
                github: "https://github.com/AIV-97",
                changelog: [{
                    cl_code: "SweetPea",
                    link: "https://raw.githubusercontent.com/Komodo-OS-Devices/DeviceChangelogs/main/4.x/RMX1941"
                }],
                download: "https://www.pling.com/p/1708077/"
            }, {
                brand: "Realme",
                device: "C3",
                codename: "RMX2020",
                maintainer: "Felixxandi79",
                github: "https://github.com/felixxandi79",
                changelog: [{
                    cl_code: "Rattle",
                    link: "https://raw.githubusercontent.com/Komodo-OS-Devices/DeviceChangelogs/main/3.x/RMX2020"
                }],
                download: "https://www.pling.com/p/1561805/"
            }, {
                brand: "Realme",
                device: "Narzo 10A",
                codename: "RMX2020",
                maintainer: "Felixxandi79",
                github: "https://github.com/felixxandi79",
                changelog: [{
                    cl_code: "Rattle",
                    link: "https://raw.githubusercontent.com/Komodo-OS-Devices/DeviceChangelogs/main/3.x/RMX2020"
                }],
                download: "https://www.pling.com/p/1561805/"
            }, {
                brand: "Realme",
                device: "5",
                codename: "RMX1911",
                maintainer: "henshin",
                github: "https://github.com/henrysg29",
                changelog: [{
                    cl_code: "Rattle",
                    link: "https://raw.githubusercontent.com/Komodo-OS-Devices/DeviceChangelogs/main/3.x/Realme_trinket"
                }],
                download: "https://www.pling.com/p/1540535/"
            }, {
                brand: "Realme",
                device: "5i",
                codename: "RMX2030",
                maintainer: "henshin",
                github: "https://github.com/henrysg29",
                changelog: [{
                    cl_code: "Rattle",
                    link: "https://raw.githubusercontent.com/Komodo-OS-Devices/DeviceChangelogs/main/3.x/Realme_trinket"
                }],
                download: "https://www.pling.com/p/1540535/"
            }];
        var J = function() {
                var t = i((0, e.useState)(""), 2),
                    n = t[0],
                    r = t[1];
                return (0, e.useEffect)((function() {})), (0, X.jsxs)("div", {
                    children: [(0, X.jsx)("script", {
                        async: !0,
                        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7142462988454705",
                        crossOrigin: "anonymous"
                    }), (0, X.jsx)("section", {
                        id: "section-1",
                        children: (0, X.jsxs)("div", {
                            className: "container",
                            children: [(0, X.jsx)("div", {
                                className: "row d-flex align-items-center mb-5 pb-5",
                                children: (0, X.jsx)("div", {
                                    className: "col my-5",
                                    children: (0, X.jsxs)("div", {
                                        className: "text-center",
                                        children: [(0, X.jsx)("h1", {
                                            className: "display-5 display-md-4",
                                            children: "Download Build"
                                        }), (0, X.jsx)("div", {
                                            className: "row justify-content-center",
                                            children: (0, X.jsx)("div", {
                                                className: "col-10 col-md-8 col-lg-6",
                                                children: (0, X.jsx)("div", {
                                                    className: "input-group mt-3",
                                                    children: (0, X.jsx)("input", {
                                                        type: "text",
                                                        className: "form-control",
                                                        placeholder: "Search your device here",
                                                        id: "search",
                                                        name: "search",
                                                        onChange: function(e) {
                                                            r(e.target.value)
                                                        }
                                                    })
                                                })
                                            })
                                        })]
                                    })
                                })
                            }), (0, X.jsx)("div", {
                                className: "container my-5",
                                children: (0, X.jsx)("div", {
                                    className: "bg-white shadow card-download px-2 pb-4",
                                    children: (0, X.jsxs)("div", {
                                        className: "card-body",
                                        children: [(0, X.jsx)("h3", {
                                            className: "text-center pt-2 pb-3",
                                            children: "List of Available Devices"
                                        }), (0, X.jsx)("div", {
                                            className: "accordion accordion-flush",
                                            id: "result",
                                            children: Y.filter((function(e) {
                                                return "" == n || e.codename.toLowerCase().includes(n.toLowerCase()) || e.device.toLowerCase().includes(n.toLowerCase()) || e.brand.toLowerCase().includes(n.toLowerCase()) ? e : void 0
                                            })).map((function(e, t) {
                                                return (0, X.jsxs)("div", {
                                                    className: "accordion-item",
                                                    children: [(0, X.jsx)("h2", {
                                                        className: "accordion-header",
                                                        id: "flush-heading-".concat(t),
                                                        children: (0, X.jsxs)("button", {
                                                            className: "accordion-button collapsed",
                                                            type: "button",
                                                            "data-bs-toggle": "collapse",
                                                            "data-bs-target": "#flush-collapse-".concat(t),
                                                            "aria-expanded": "false",
                                                            "aria-controls": "flush-collapse-".concat(t),
                                                            children: [e.brand, " ", e.device]
                                                        })
                                                    }), (0, X.jsx)("div", {
                                                        id: "flush-collapse-".concat(t),
                                                        className: "accordion-collapse collapse",
                                                        "aria-labelledby": "flush-heading-".concat(t),
                                                        "data-bs-parent": "#result",
                                                        children: (0, X.jsxs)("div", {
                                                            className: "accordion-body d-flex justify-content-between",
                                                            children: [(0, X.jsxs)("div", {
                                                                children: [(0, X.jsx)("h3", {
                                                                    className: "mb-4",
                                                                    children: e.codename
                                                                }), (0, X.jsxs)("p", {
                                                                    children: [(0, X.jsxs)("span", {
                                                                        className: "fs-5 fw-bold",
                                                                        children: ["Maintained by", (0, X.jsx)("a", {
                                                                            href: e.github,
                                                                            className: "text-body text-primary",
                                                                            target: "_blank",
                                                                            children: " " + e.maintainer
                                                                        })]
                                                                    }), (0, X.jsx)("br", {})]
                                                                }), "" != e.changelog ? (0, X.jsxs)("p", {
                                                                    children: [(0, X.jsx)("span", {
                                                                        className: "fs-5 fw-bold",
                                                                        children: "Changelogs"
                                                                    }), (0, X.jsx)("br", {}), e.changelog.map((function(e, t) {
                                                                        return (0, X.jsxs)("span", {
                                                                            children: ["\u2192", " ", (0, X.jsx)("a", {
                                                                                href: e.link,
                                                                                className: "text-body text-decoration-underline text-secondary",
                                                                                target: "_blank",
                                                                                children: e.cl_code
                                                                            }), (0, X.jsx)("br", {})]
                                                                        }, t)
                                                                    }))]
                                                                }) : ""]
                                                            }), (0, X.jsx)("div", {
                                                                children: (0, X.jsxs)("a", {
                                                                    href: e.download,
                                                                    className: "btn btn-primary px-3 mt-2",
                                                                    title: "Download",
                                                                    children: [(0, X.jsx)("i", {
                                                                        className: "fas fa-download fa-lg me-md-2"
                                                                    }), (0, X.jsx)("span", {
                                                                        className: "d-none d-md-inline",
                                                                        children: "Download"
                                                                    })]
                                                                })
                                                            })]
                                                        })
                                                    })]
                                                }, t)
                                            }))
                                        })]
                                    })
                                })
                            })]
                        })
                    })]
                })
            },
            Z = n.p + "static/media/merch.2a3d1e2baa7f0b8007ca.jpg";
        var ee = function() {
                return (0, X.jsxs)("section", {
                    style: {
                        minHeight: "100vh",
                        marginTop: "72px"
                    },
                    children: [(0, X.jsx)("img", {
                        src: Z,
                        className: "w-100"
                    }), (0, X.jsxs)("div", {
                        className: "container py-5",
                        children: [(0, X.jsx)("h1", {
                            children: "Komodo OS Merch"
                        }), (0, X.jsx)("br", {}), (0, X.jsx)("h3", {
                            children: "Specification"
                        }), (0, X.jsx)("p", {
                            className: "fs-5",
                            children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis recusandae facere eum velit sequi porro accusantium culpa et, nam, omnis ex sit dolor eos fugit. Magni, maxime necessitatibus consectetur earum voluptas voluptates deleniti a distinctio iure porro vel eum reprehenderit, nesciunt veniam corporis animi molestiae molestias perferendis dolores ratione illo."
                        }), (0, X.jsx)("div", {
                            className: "text-center",
                            children: (0, X.jsx)("a", {
                                href: "#",
                                className: "btn btn-lg btn-primary",
                                children: "Buy Now"
                            })
                        })]
                    })]
                })
            },
            te = n.p + "static/media/qris.34d2d33e8298d9c5652d.png",
            ne = n.p + "static/media/paypal.71420c699b10dcb532b5.png";
        var re = n.p + "static/media/shape.1109344ee3e414e6a72baef4f3d64249.svg";
        var ae = function() {
            return (0, X.jsxs)("div", {
                children: [(0, X.jsx)("section", {
                    className: "mt-5 py-4",
                    children: (0, X.jsx)("div", {
                        className: "container my-4",
                        children: (0, X.jsx)("div", {
                            className: "row d-flex align-items-center",
                            children: (0, X.jsx)("div", {
                                children: (0, X.jsx)("div", {
                                    className: "mt-2 text-center",
                                    children: (0, X.jsx)("h1", {
                                        className: "display-5 display-md-4",
                                        children: "Like our work? Support us!"
                                    })
                                })
                            })
                        })
                    })
                }), (0, X.jsx)("section", {
                    id: "section-5",
                    className: "pb-5",
                    children: (0, X.jsx)("div", {
                        className: "row justify-content-center",
                        children: (0, X.jsx)("div", {
                            className: "col-12 col-lg-6",
                            children: (0, X.jsxs)("div", {
                                className: "row row-cols-1 row-cols-md-2 g-4 align-items-center px-5",
                                children: [(0, X.jsx)("div", {
                                    className: "col",
                                    "data-aos": "fade-in",
                                    children: (0, X.jsx)("div", {
                                        className: "bg-white shadow rounded py-3 h-100",
                                        children: (0, X.jsxs)("div", {
                                            className: "card-body",
                                            children: [(0, X.jsx)("h2", {
                                                className: "fw-bold text-center mb-0",
                                                children: "QRIS"
                                            }), (0, X.jsx)("div", {
                                                className: "d-flex p-3",
                                                children: (0, X.jsx)("img", {
                                                    src: te,
                                                    className: "w-75 mx-auto"
                                                })
                                            }), (0, X.jsx)("div", {
                                                className: "d-flex",
                                                children: (0, X.jsx)("a", {
                                                    href: "https://invoice.xendit.co/donation/KomodoOS",
                                                    target: "_blank",
                                                    className: "btn btn-primary mx-auto",
                                                    children: "Belikan kami pulsa"
                                                })
                                            })]
                                        })
                                    })
                                }), (0, X.jsx)("div", {
                                    className: "col",
                                    "data-aos": "fade-in",
                                    "data-aos-delay": "500",
                                    children: (0, X.jsx)("div", {
                                        className: "bg-white shadow rounded py-3 h-100",
                                        children: (0, X.jsxs)("div", {
                                            className: "card-body",
                                            children: [(0, X.jsx)("h2", {
                                                className: "fw-bold text-center mb-0",
                                                children: "PayPal"
                                            }), (0, X.jsx)("div", {
                                                className: "d-flex p-3",
                                                children: (0, X.jsx)("img", {
                                                    src: ne,
                                                    className: "w-75 mx-auto"
                                                })
                                            }), (0, X.jsx)("div", {
                                                className: "d-flex",
                                                children: (0, X.jsx)("a", {
                                                    href: "https://paypal.me/KomodoOS",
                                                    target: "_blank",
                                                    className: "btn btn-primary mx-auto",
                                                    children: "Buy us a coffee"
                                                })
                                            })]
                                        })
                                    })
                                })]
                            })
                        })
                    })
                }), (0, X.jsx)("img", {
                    className: "shape-divider",
                    src: re,
                    draggable: "false"
                }), (0, X.jsx)("section", {
                    id: "section-5",
                    className: "pb-5",
                    style: {
                        backgroundColor: "#E6E8EB"
                    },
                    children: (0, X.jsxs)("div", {
                        className: "container pb-5",
                        children: [(0, X.jsx)("div", {
                            id: "donate"
                        }), (0, X.jsx)("div", {
                            id: "final-section",
                            className: "mt-0 pt-5 text-center",
                            children: (0, X.jsx)("p", {
                                className: "h1 mb-4",
                                children: "It means a lot for us. Thank you!"
                            })
                        })]
                    })
                })]
            })
        };
        var le = function() {
            return (0, X.jsx)("section", {
                id: "changelog-page",
                class: "bg-light",
                children: (0, X.jsx)("div", {
                    class: "container",
                    children: (0, X.jsxs)("div", {
                        class: "row",
                        children: [(0, X.jsxs)("div", {
                            id: "changelog",
                            class: "col-lg-9 col-md-8 mb-5 order-2 order-md-1",
                            children: [(0, X.jsx)("p", {
                                class: "fs-2 mb-4",
                                children: "Changelog"
                            }), (0, X.jsxs)("div", {
                                id: "4.5",
                                children: [(0, X.jsx)("div", {
                                    class: "cl-scroll"
                                }), (0, X.jsxs)("p", {
                                    children: [(0, X.jsx)("span", {
                                        class: "badge rounded-pill bg-primary fs-6 px-3",
                                        children: "v4.4 - Snowdrop"
                                    }), " ", "- 17 Aug 2022"]
                                }), (0, X.jsxs)("ul", {
                                    class: "mb-5",
                                    children: [(0, X.jsx)("li", {
                                        children: "Merge tag August SPL"
                                    }), (0, X.jsx)("li", {
                                        children: "Fix menu popup ripple"
                                    }), (0, X.jsx)("li", {
                                        children: "Fix issue with linked notification volume"
                                    }), (0, X.jsx)("li", {
                                        children: "Remove duplicate clamping on move action"
                                    }), (0, X.jsx)("li", {
                                        children: "Remove misplaced call to set crop view padding"
                                    }), (0, X.jsx)("li", {
                                        children: "Add extra crop boundaries"
                                    }), (0, X.jsx)("li", {
                                        children: "Fix suspicious space around QS mobile icons"
                                    }), (0, X.jsx)("li", {
                                        children: "Disable magnification for partial screenshots"
                                    }), (0, X.jsx)("li", {
                                        children: "Fix QS mobile icon disappearing on theme switch"
                                    }), (0, X.jsx)("li", {
                                        children: "Fix OOM cache app optimizer flaky test"
                                    }), (0, X.jsx)("li", {
                                        children: "Enable system compaction at bootup"
                                    }), (0, X.jsx)("li", {
                                        children: "Introduce GamesProps and add user toggle for GamesProps"
                                    }), (0, X.jsx)("li", {
                                        children: "Optimize download/upload animations"
                                    }), (0, X.jsx)("li", {
                                        children: "Allow using 4G icon instead of LTE"
                                    }), (0, X.jsx)("li", {
                                        children: "Improve 4G icon switch code"
                                    }), (0, X.jsx)("li", {
                                        children: "Add support for displaying Volte icon"
                                    }), (0, X.jsx)("li", {
                                        children: "Add Volte Icon Toggle"
                                    }), (0, X.jsx)("li", {
                                        children: "Improvement art bionic optimization from aospa"
                                    }), (0, X.jsx)("li", {
                                        children: "Fixed Pixel Launcher crash when using the music widget"
                                    })]
                                })]
                            }), (0, X.jsxs)("div", {
                                id: "4.4",
                                children: [(0, X.jsx)("div", {
                                    class: "cl-scroll"
                                }), (0, X.jsxs)("p", {
                                    children: [(0, X.jsx)("span", {
                                        class: "badge rounded-pill bg-primary fs-6 px-3",
                                        children: "v4.4 - Seroja"
                                    }), " ", "- 07 Jul 2022"]
                                }), (0, X.jsxs)("ul", {
                                    class: "mb-5",
                                    children: [(0, X.jsx)("li", {
                                        children: "Merge tag android-12.1.0_r11"
                                    }), (0, X.jsx)("li", {
                                        children: "Update build fingerprint to july 2022"
                                    }), (0, X.jsx)("li", {
                                        children: "Add Taskbar for Launcher3"
                                    }), (0, X.jsx)("li", {
                                        children: "Add Icon and Icon text size customization"
                                    }), (0, X.jsx)("li", {
                                        children: "Add toggle for desktop and drawer labels"
                                    }), (0, X.jsx)("li", {
                                        children: "Allow disabling workspace edit"
                                    }), (0, X.jsx)("li", {
                                        children: "Fix occasional NPE"
                                    }), (0, X.jsx)("li", {
                                        children: "Introduce Lawnchair"
                                    }), (0, X.jsx)("li", {
                                        children: "Fixed blank Internet QSTile after reboot"
                                    }), (0, X.jsx)("li", {
                                        children: "Move Wifi icons after mobile data icon"
                                    }), (0, X.jsx)("li", {
                                        children: "Silence Shortcut package logspam"
                                    }), (0, X.jsx)("li", {
                                        children: "Add colors to assistant animation"
                                    }), (0, X.jsx)("li", {
                                        children: "Initial import lineage hardware"
                                    }), (0, X.jsx)("li", {
                                        children: "Add Touch HIDL Support"
                                    }), (0, X.jsx)("li", {
                                        children: "Add keyhandler overlays"
                                    }), (0, X.jsx)("li", {
                                        children: "Move high touch sensitivity and hovering to InputService"
                                    }), (0, X.jsx)("li", {
                                        children: "Introduce high touch polling rate feature control"
                                    }), (0, X.jsx)("li", {
                                        children: "Update some icon to MD2"
                                    }), (0, X.jsx)("li", {
                                        children: "Allow to hide arrow for back gesture"
                                    }), (0, X.jsx)("li", {
                                        children: "Fix pink progress animation color in expanded Wi-Fi tile"
                                    }), (0, X.jsx)("li", {
                                        children: "Add support for timeout-reboot"
                                    }), (0, X.jsx)("li", {
                                        children: "Silence PowerUI debug logspill"
                                    }), (0, X.jsx)("li", {
                                        children: "Fix some Wifi Display NPE"
                                    }), (0, X.jsx)("li", {
                                        children: "Increase Zygote command buffer size to 32k"
                                    }), (0, X.jsx)("li", {
                                        children: "Fix incall proximity not turning off display"
                                    }), (0, X.jsx)("li", {
                                        children: "Use public types to update system UI visibility"
                                    }), (0, X.jsx)("li", {
                                        children: "Fix swapped backup/heavy oom adj labels"
                                    }), (0, X.jsx)("li", {
                                        children: "Reset QS on UI mode change"
                                    }), (0, X.jsx)("li", {
                                        children: "Add left padding for keyguard slices"
                                    }), (0, X.jsx)("li", {
                                        children: "Add Fingerprint authentication vibration"
                                    }), (0, X.jsx)("li", {
                                        children: "Add 2 button navigation bar overlay"
                                    }), (0, X.jsx)("li", {
                                        children: "Fix QS clock overlapping on UI mode change"
                                    })]
                                })]
                            }), (0, X.jsxs)("div", {
                                id: "4.3",
                                children: [(0, X.jsx)("div", {
                                    class: "cl-scroll"
                                }), (0, X.jsxs)("p", {
                                    children: [(0, X.jsx)("span", {
                                        class: "badge rounded-pill bg-primary fs-6 px-3",
                                        children: "v4.3 - SweetPea"
                                    }), " ", "- 07 Jun 2022"]
                                }), (0, X.jsxs)("ul", {
                                    class: "mb-5",
                                    children: [(0, X.jsx)("li", {
                                        children: "Merge tag android-12.1.0_r8"
                                    }), (0, X.jsx)("li", {
                                        children: "Add hotspot settings to allow VPN upstreams"
                                    }), (0, X.jsx)("li", {
                                        children: "Allow changing monet settings from Reptools"
                                    }), (0, X.jsx)("li", {
                                        children: "Update PixelPropsUtils Fingerprint to june 2022"
                                    }), (0, X.jsx)("li", {
                                        children: "Add option to scramble pin layout when unlocking"
                                    }), (0, X.jsx)("li", {
                                        children: "Add LockScreen Quick Unlock"
                                    }), (0, X.jsx)("li", {
                                        children: "Apply monet to fingerprint authentication ripple animation"
                                    }), (0, X.jsx)("li", {
                                        children: "Update 4G+ icon to Silk design as well"
                                    }), (0, X.jsx)("li", {
                                        children: "Allow overlaying max notification icons"
                                    }), (0, X.jsx)("li", {
                                        children: "Increase max attemps failed Fingerprint"
                                    }), (0, X.jsx)("li", {
                                        children: "Add auto brightness button to QS brightness slider"
                                    }), (0, X.jsx)("li", {
                                        children: "Enable USAP by default"
                                    }), (0, X.jsx)("li", {
                                        children: "Allow disabling ripple effect on unlock"
                                    }), (0, X.jsx)("li", {
                                        children: "Make Quick Unlock compatible with long PIN/Password"
                                    }), (0, X.jsx)("li", {
                                        children: "Fix SystemUI Crash in several devices"
                                    }), (0, X.jsx)("li", {
                                        children: "Touch response optimizations"
                                    }), (0, X.jsx)("li", {
                                        children: "Add Pixel Navigation Bar's Home icon"
                                    }), (0, X.jsx)("li", {
                                        children: "Fix ripple animation for side fp devices"
                                    }), (0, X.jsx)("li", {
                                        children: "Add support for persistent usb drive notification"
                                    }), (0, X.jsx)("li", {
                                        children: "Enable smart battery for everyone"
                                    }), (0, X.jsx)("li", {
                                        children: "Set scroll friction to 0.012"
                                    }), (0, X.jsx)("li", {
                                        children: "Disable wallpaper zoom"
                                    }), (0, X.jsx)("li", {
                                        children: "Add backup shared mode"
                                    }), (0, X.jsx)("li", {
                                        children: "Silence a lot of debug logspam"
                                    }), (0, X.jsx)("li", {
                                        children: "Fix edit button in screenshot share activity"
                                    }), (0, X.jsx)("li", {
                                        children: "Reduce padding use by privacy indicator resources"
                                    }), (0, X.jsx)("li", {
                                        children: "Block OTA downloading from GMS"
                                    }), (0, X.jsx)("li", {
                                        children: "Fix manual network selection with old modem"
                                    }), (0, X.jsx)("li", {
                                        children: "Update external card state based on current app"
                                    }), (0, X.jsx)("li", {
                                        children: "Release wakelock if setRadioCapability is not supported"
                                    }), (0, X.jsx)("li", {
                                        children: "Restore support with RadioConfig@1.0 dsds clients"
                                    }), (0, X.jsx)("li", {
                                        children: "Handle all gms exact alarm denials"
                                    }), (0, X.jsx)("li", {
                                        children: "Add config for repainter integration service"
                                    }), (0, X.jsx)("li", {
                                        children: "Import themed icons for pixel launcher from lawicons"
                                    }), (0, X.jsx)("li", {
                                        children: "Provide required permission for cellbroadcastreceiver"
                                    })]
                                })]
                            }), (0, X.jsxs)("div", {
                                id: "4.2",
                                children: [(0, X.jsx)("div", {
                                    class: "cl-scroll"
                                }), (0, X.jsxs)("p", {
                                    children: [(0, X.jsx)("span", {
                                        class: "badge rounded-pill bg-primary fs-6 px-3",
                                        children: "v4.2 - Sakura"
                                    }), " ", "- 16 Apr 2022"]
                                }), (0, X.jsxs)("ul", {
                                    class: "mb-5",
                                    children: [(0, X.jsx)("li", {
                                        children: "Merged April 2022 patch"
                                    }), (0, X.jsx)("li", {
                                        children: "Bump version to 4.2"
                                    }), (0, X.jsx)("li", {
                                        children: "Rebased android-12.1.0_r4"
                                    }), (0, X.jsx)("li", {
                                        children: "Nuke monet settings"
                                    }), (0, X.jsx)("li", {
                                        children: "Remove some feature cause conflict with 12L"
                                    }), (0, X.jsx)("li", {
                                        children: "Allow doubletap/longpress power to toggle torch"
                                    }), (0, X.jsx)("li", {
                                        children: "Update raven and redfin fp to April"
                                    }), (0, X.jsx)("li", {
                                        children: "Fix the unlock sound played repeatedly"
                                    }), (0, X.jsx)("li", {
                                        children: "And many other changes"
                                    })]
                                })]
                            }), (0, X.jsxs)("div", {
                                id: "4.1",
                                children: [(0, X.jsx)("div", {
                                    class: "cl-scroll"
                                }), (0, X.jsxs)("p", {
                                    children: [(0, X.jsx)("span", {
                                        class: "badge rounded-pill bg-primary fs-6 px-3",
                                        children: "v4.1 - Serunai"
                                    }), " ", "- 11 Feb 2022"]
                                }), (0, X.jsxs)("ul", {
                                    class: "mb-5",
                                    children: [(0, X.jsx)("li", {
                                        children: "Merged February 2022 patch"
                                    }), (0, X.jsx)("li", {
                                        children: "Bump version to 4.1"
                                    }), (0, X.jsx)("li", {
                                        children: "Add Volume waker"
                                    }), (0, X.jsx)("li", {
                                        children: "Allow to suppress notifications sound/vibration if screen is ON"
                                    }), (0, X.jsx)("li", {
                                        children: "Update string for add tiles with one click"
                                    }), (0, X.jsx)("li", {
                                        children: "Add DataSwitchTile"
                                    }), (0, X.jsx)("li", {
                                        children: "Add a toggle for secure tiles on keyguard"
                                    }), (0, X.jsx)("li", {
                                        children: "Allow overriding feature flags on release builds"
                                    }), (0, X.jsx)("li", {
                                        children: "SystemUI: Allow overlaying max notification icons"
                                    }), (0, X.jsx)("li", {
                                        children: "SystemUI: Bring back ic_qs_bluetooth_connected.xml"
                                    }), (0, X.jsx)("li", {
                                        children: "base: SystemUI: Kill fake navbar once again"
                                    }), (0, X.jsx)("li", {
                                        children: "SystemUI: Allow snoozing SD card notification by unconditionally"
                                    }), (0, X.jsx)("li", {
                                        children: "Allow to disable Ripple effect animaton"
                                    })]
                                })]
                            }), (0, X.jsxs)("div", {
                                id: "4.0-alpha",
                                children: [(0, X.jsx)("div", {
                                    class: "cl-scroll"
                                }), (0, X.jsxs)("p", {
                                    children: [(0, X.jsx)("span", {
                                        class: "badge rounded-pill bg-primary fs-6 px-3",
                                        children: "v4.0-alpha - Sabre"
                                    }), " ", "- 20 Des 2021"]
                                }), (0, X.jsxs)("ul", {
                                    class: "mb-5",
                                    children: [(0, X.jsx)("li", {
                                        children: "Komodo OS Android 12 - Sabre"
                                    }), (0, X.jsx)("li", {
                                        children: "Merged December 2021 Security Patch"
                                    }), (0, X.jsx)("li", {
                                        children: "Swipe to screenshot"
                                    }), (0, X.jsx)("li", {
                                        children: "Add Monet"
                                    }), (0, X.jsx)("li", {
                                        children: "Add Network Traffic"
                                    }), (0, X.jsx)("li", {
                                        children: "Add Double tap to sleep on statusbar and lockscreen"
                                    }), (0, X.jsx)("li", {
                                        children: "Add volume key music control"
                                    }), (0, X.jsx)("li", {
                                        children: "Add Sync QS tile"
                                    }), (0, X.jsx)("li", {
                                        children: "Add USB Tether QS tile"
                                    }), (0, X.jsx)("li", {
                                        children: "Add AmbientDisplay QS tile"
                                    }), (0, X.jsx)("li", {
                                        children: "Add Caffeine QS tile"
                                    }), (0, X.jsx)("li", {
                                        children: "Add FPS info tile"
                                    }), (0, X.jsx)("li", {
                                        children: "Add CPU Info tile"
                                    }), (0, X.jsx)("li", {
                                        children: "Add Screenshot tile"
                                    }), (0, X.jsx)("li", {
                                        children: "Add Sound tile"
                                    }), (0, X.jsx)("li", {
                                        children: "Add global action with advanced reboot"
                                    }), (0, X.jsx)("li", {
                                        children: "Allow disable of screenshot shutter sound"
                                    }), (0, X.jsx)("li", {
                                        children: "Add refresh rate settings"
                                    }), (0, X.jsx)("li", {
                                        children: "Add switch for linked ring and media notification volumes"
                                    }), (0, X.jsx)("li", {
                                        children: "Add Navigation bar settings"
                                    }), (0, X.jsx)("li", {
                                        children: "Add Pill length for Gesture settings"
                                    }), (0, X.jsx)("li", {
                                        children: "Amount of screen height used as touchable region for back gesture"
                                    }), (0, X.jsx)("li", {
                                        children: "Allow user to add/remove QS with one click"
                                    })]
                                })]
                            }), (0, X.jsxs)("div", {
                                id: "3.2.1",
                                children: [(0, X.jsx)("div", {
                                    class: "cl-scroll"
                                }), (0, X.jsxs)("p", {
                                    children: [(0, X.jsx)("span", {
                                        class: "badge rounded-pill bg-primary fs-6 px-3",
                                        children: "v3.2.1 - Raptor"
                                    }), " ", "- 20 July 2021"]
                                }), (0, X.jsxs)("ul", {
                                    class: "mb-5",
                                    children: [(0, X.jsx)("li", {
                                        children: "Merged September 2021 Security Patch"
                                    }), (0, X.jsx)("li", {
                                        children: "September redfin build fingerprint"
                                    }), (0, X.jsx)("li", {
                                        children: "Fix overlay resetting every reboot"
                                    }), (0, X.jsx)("li", {
                                        children: "Add HW key Custom & HW backlight"
                                    }), (0, X.jsx)("li", {
                                        children: "Add rusian translate thanks to @BEERdMANN"
                                    }), (0, X.jsx)("li", {
                                        children: "Rebranding Komodo Settings to Reptools"
                                    }), (0, X.jsx)("li", {
                                        children: "Fix null pointer on Reptools"
                                    }), (0, X.jsx)("li", {
                                        children: "And other little optimization"
                                    })]
                                })]
                            }), (0, X.jsxs)("div", {
                                id: "3.2.0",
                                children: [(0, X.jsx)("div", {
                                    class: "cl-scroll"
                                }), (0, X.jsxs)("p", {
                                    children: [(0, X.jsx)("span", {
                                        class: "badge rounded-pill bg-primary fs-6 px-3",
                                        children: "v3.2.0 - Rattle"
                                    }), " ", "- 20 July 2021"]
                                }), (0, X.jsxs)("ul", {
                                    class: "mb-5",
                                    children: [(0, X.jsx)("li", {
                                        children: "Merged July 2021 Security Patch"
                                    }), (0, X.jsx)("li", {
                                        children: "Drop gradient shit"
                                    }), (0, X.jsx)("li", {
                                        children: "Add new qs tint"
                                    }), (0, X.jsx)("li", {
                                        children: "Add P mobile type icon"
                                    }), (0, X.jsx)("li", {
                                        children: "Add Haptic Feedback to tiles"
                                    }), (0, X.jsx)("li", {
                                        children: "Add QS animationr"
                                    }), (0, X.jsx)("li", {
                                        children: "Add LTE to 4G switch"
                                    }), (0, X.jsx)("li", {
                                        children: "Bring back GVM picker"
                                    }), (0, X.jsx)("li", {
                                        children: "Add icon VoWifi"
                                    }), (0, X.jsx)("li", {
                                        children: "Dynamic VoWifi & VoLTE icon"
                                    }), (0, X.jsx)("li", {
                                        children: "Add statusbar icon switches"
                                    }), (0, X.jsx)("li", {
                                        children: "Add navigation gesture"
                                    })]
                                })]
                            }), (0, X.jsxs)("div", {
                                id: "3.1.0",
                                children: [(0, X.jsx)("div", {
                                    class: "cl-scroll"
                                }), (0, X.jsxs)("p", {
                                    children: [(0, X.jsx)("span", {
                                        class: "badge rounded-pill bg-primary fs-6 px-3",
                                        children: "v3.1.0 - Reptile"
                                    }), " ", "- 15 Juni 2021"]
                                }), (0, X.jsxs)("ul", {
                                    class: "mb-5",
                                    children: [(0, X.jsx)("li", {
                                        children: "June security patch android 11.0.0_r38"
                                    }), (0, X.jsx)("li", {
                                        children: "Added Sound tile"
                                    }), (0, X.jsx)("li", {
                                        children: "Added option to record for longer"
                                    }), (0, X.jsx)("li", {
                                        children: "Added LTE tile"
                                    }), (0, X.jsx)("li", {
                                        children: "Added Adaptive charging"
                                    }), (0, X.jsx)("li", {
                                        children: "Added runtime UI background blur"
                                    }), (0, X.jsx)("li", {
                                        children: "Added Statusbar Ticker"
                                    }), (0, X.jsx)("li", {
                                        children: "Added back signature spoofing"
                                    }), (0, X.jsx)("li", {
                                        children: "Added hiding lock icon on lockscreen"
                                    }), (0, X.jsx)("li", {
                                        children: "Clean up omnistyle header image"
                                    }), (0, X.jsx)("li", {
                                        children: "Explicitly make SBC Dual Channel an optional (HD) codec"
                                    }), (0, X.jsx)("li", {
                                        children: "Fix label tint for random color"
                                    }), (0, X.jsx)("li", {
                                        children: "Fixed google sans font"
                                    }), (0, X.jsx)("li", {
                                        children: "Improvment QS Detail layout"
                                    }), (0, X.jsx)("li", {
                                        children: "Improvment volume dialog code"
                                    }), (0, X.jsx)("li", {
                                        children: "Improvment settings layout"
                                    }), (0, X.jsx)("li", {
                                        children: "Improvment gaming mode"
                                    }), (0, X.jsx)("li", {
                                        children: "Improvment toast notification"
                                    }), (0, X.jsx)("li", {
                                        children: "Improvment network traffic layout"
                                    }), (0, X.jsx)("li", {
                                        children: "Remove glassy themes"
                                    }), (0, X.jsx)("li", {
                                        children: "Remove device hostname"
                                    })]
                                })]
                            }), (0, X.jsxs)("div", {
                                id: "3.0.0",
                                children: [(0, X.jsx)("div", {
                                    class: "cl-scroll"
                                }), (0, X.jsxs)("p", {
                                    children: [(0, X.jsx)("span", {
                                        class: "badge rounded-pill bg-primary fs-6 px-3",
                                        children: "v3.0.0 - Reptile Beta"
                                    }), " ", "- 15 Maret 2021"]
                                }), (0, X.jsxs)("ul", {
                                    class: "mb-5",
                                    children: [(0, X.jsx)("li", {
                                        children: "March security patch android 11.0.0_r38"
                                    }), (0, X.jsx)("li", {
                                        children: "Initial A11"
                                    }), (0, X.jsx)("li", {
                                        children: "Add battery health"
                                    }), (0, X.jsx)("li", {
                                        children: "Add Grid/Colom QS"
                                    }), (0, X.jsx)("li", {
                                        children: "Add Brightness position"
                                    }), (0, X.jsx)("li", {
                                        children: "Add BT stack"
                                    }), (0, X.jsx)("li", {
                                        children: "And another"
                                    })]
                                })]
                            }), (0, X.jsxs)("div", {
                                id: "2.5.0",
                                children: [(0, X.jsx)("div", {
                                    class: "cl-scroll"
                                }), (0, X.jsxs)("p", {
                                    children: [(0, X.jsx)("span", {
                                        class: "badge rounded-pill bg-primary fs-6 px-3",
                                        children: "v2.5.0 - Pantura"
                                    }), " ", "- 15 Maret 2021"]
                                }), (0, X.jsxs)("ul", {
                                    class: "mb-5",
                                    children: [(0, X.jsx)("li", {
                                        children: "Latest security patch android 11.0.0"
                                    }), (0, X.jsx)("li", {
                                        children: "Clean up omnistyle header image"
                                    }), (0, X.jsx)("li", {
                                        children: "Explicitly make SBC Dual Channel an optional (HD) codec"
                                    }), (0, X.jsx)("li", {
                                        children: "Fix label tint for random color"
                                    }), (0, X.jsx)("li", {
                                        children: "Fixed google sans font"
                                    }), (0, X.jsx)("li", {
                                        children: "Improvment QS Detail layout"
                                    }), (0, X.jsx)("li", {
                                        children: "Improvment volume dialog code"
                                    }), (0, X.jsx)("li", {
                                        children: "Improvment settings layout"
                                    }), (0, X.jsx)("li", {
                                        children: "Improvment gaming mode"
                                    }), (0, X.jsx)("li", {
                                        children: "Improvment toast notification"
                                    }), (0, X.jsx)("li", {
                                        children: "Improvment network traffic layout"
                                    }), (0, X.jsx)("li", {
                                        children: "Remove glassy themes"
                                    }), (0, X.jsx)("li", {
                                        children: "Remove device hostname"
                                    })]
                                })]
                            })]
                        }), (0, X.jsx)("div", {
                            id: "version",
                            class: "col-lg-3 col-md-4 mb-5 order-1 order-md-2",
                            children: (0, X.jsx)("div", {
                                class: "bg-white shadow sidebar",
                                children: (0, X.jsx)("div", {
                                    class: "card-body",
                                    children: (0, X.jsxs)("div", {
                                        class: "py-1",
                                        children: [(0, X.jsx)("div", {
                                            class: "bg-primary rounded text-center text-white position-sticky",
                                            children: (0, X.jsx)("p", {
                                                class: "py-2",
                                                children: "Latest"
                                            })
                                        }), (0, X.jsx)("a", {
                                            href: "#4.5",
                                            class: "d-block py-1 text-dark",
                                            children: "v4.5 - Snowdrop"
                                        }), (0, X.jsx)("div", {
                                            class: "bg-light rounded text-center mt-2",
                                            children: (0, X.jsx)("p", {
                                                class: "py-2",
                                                children: "Older"
                                            })
                                        }), (0, X.jsx)("a", {
                                            href: "#4.4",
                                            class: "d-block py-1 text-dark",
                                            children: "v4.4 - Seroja"
                                        }), (0, X.jsx)("a", {
                                            href: "#4.3",
                                            class: "d-block py-1 text-dark",
                                            children: "v4.3 - SweetPea"
                                        }), (0, X.jsx)("a", {
                                            href: "#4.2",
                                            class: "d-block py-1 text-dark",
                                            children: "v4.2 - Sakura"
                                        }), (0, X.jsx)("a", {
                                            href: "#4.1",
                                            class: "d-block py-1 text-dark",
                                            children: "v4.1 - Serunai"
                                        }), (0, X.jsx)("a", {
                                            href: "#4.0",
                                            class: "d-block py-1 text-dark",
                                            children: "v4.0 - Sabre"
                                        }), (0, X.jsx)("a", {
                                            href: "#4.0-alpha",
                                            class: "d-block py-1 text-dark",
                                            children: "v4.0-alpha - Sabre-alpha"
                                        }), (0, X.jsx)("a", {
                                            href: "#3.2.1",
                                            class: "d-block py-1 text-secondary",
                                            children: "v3.2.1 - Raptor"
                                        }), (0, X.jsx)("a", {
                                            href: "#3.2.0",
                                            class: "d-block py-1 text-secondary",
                                            children: "v3.1.0 - Rattle"
                                        }), (0, X.jsx)("a", {
                                            href: "#3.1.0",
                                            class: "d-block py-1 text-secondary",
                                            children: "v3.1.0 - Reptile"
                                        }), (0, X.jsx)("a", {
                                            href: "#3.0.0",
                                            class: "d-block py-1 text-secondary",
                                            children: "v3.0.0 - Reptile Beta"
                                        }), (0, X.jsx)("a", {
                                            href: "#2.5.0",
                                            class: "d-block py-1 text-secondary",
                                            children: "v2.5.0 - Pantura"
                                        })]
                                    })
                                })
                            })
                        })]
                    })
                })
            })
        };
        var ie = function() {
            return (0, X.jsxs)("div", {
                children: [(0, X.jsx)("section", {
                    className: "mt-5 py-4",
                    children: (0, X.jsx)("div", {
                        className: "container my-4",
                        children: (0, X.jsx)("div", {
                            className: "row d-flex align-items-center",
                            children: (0, X.jsx)("div", {
                                children: (0, X.jsx)("div", {
                                    className: "mt-2 text-center",
                                    children: (0, X.jsx)("h1", {
                                        className: "display-5 display-md-4",
                                        children: "Our Team"
                                    })
                                })
                            })
                        })
                    })
                }), (0, X.jsxs)("section", {
                    id: "section-5",
                    className: "pb-5",
                    children: [(0, X.jsx)("div", {
                        className: "bg-primary"
                    }), (0, X.jsx)("div", {
                        className: "container pb-5",
                        children: (0, X.jsxs)("div", {
                            className: "row row-cols-2 row-cols-lg-4 g-4",
                            children: [(0, X.jsx)("div", {
                                className: "col",
                                children: (0, X.jsxs)("div", {
                                    className: "bg-white h-100 shadow rounded",
                                    children: [(0, X.jsx)("img", {
                                        src: "https://avatars.githubusercontent.com/Kry9toN",
                                        className: "card-img-top",
                                        alt: "Krypton"
                                    }), (0, X.jsxs)("div", {
                                        className: "card-body text-center",
                                        children: [(0, X.jsx)("h5", {
                                            className: "fw-bold",
                                            children: "Dhimas Bagus Prayoga"
                                        }), (0, X.jsx)("p", {
                                            className: "small text-muted text-truncate",
                                            children: "Founder"
                                        }), (0, X.jsx)("a", {
                                            href: "https://github.com/Kry9toN",
                                            target: "_blank",
                                            children: (0, X.jsx)("i", {
                                                className: "fab fa-github fa-lg text-dark mx-1"
                                            })
                                        }), (0, X.jsx)("a", {
                                            href: "https://t.me/Kry9toN",
                                            target: "_blank",
                                            children: (0, X.jsx)("i", {
                                                className: "fab fa-telegram fa-lg mx-1"
                                            })
                                        })]
                                    })]
                                })
                            }), (0, X.jsx)("div", {
                                className: "col",
                                children: (0, X.jsxs)("div", {
                                    className: "bg-white h-100 shadow rounded",
                                    children: [(0, X.jsx)("img", {
                                        src: "https://avatars.githubusercontent.com/alanndz",
                                        className: "card-img-top",
                                        alt: "alanndz"
                                    }), (0, X.jsxs)("div", {
                                        className: "card-body text-center",
                                        children: [(0, X.jsx)("h5", {
                                            className: "fw-bold",
                                            children: "\ud835\ude8a\ud835\ude95\ud835\ude8a\ud835\ude97\ud835\ude97\ud835\ude8d\ud835\udea3"
                                        }), (0, X.jsx)("p", {
                                            className: "small text-muted text-truncate",
                                            children: "Founder"
                                        }), (0, X.jsx)("a", {
                                            href: "https://github.com/alanndz",
                                            target: "_blank",
                                            children: (0, X.jsx)("i", {
                                                className: "fab fa-github fa-lg text-dark mx-1"
                                            })
                                        }), (0, X.jsx)("a", {
                                            href: "https://t.me/Kry9toN",
                                            target: "_blank",
                                            children: (0, X.jsx)("i", {
                                                className: "fab fa-telegram fa-lg mx-1"
                                            })
                                        })]
                                    })]
                                })
                            }), (0, X.jsx)("div", {
                                className: "col",
                                children: (0, X.jsxs)("div", {
                                    className: "bg-white h-100 shadow rounded",
                                    children: [(0, X.jsx)("img", {
                                        src: "https://avatars.githubusercontent.com/Mikazuuu07",
                                        className: "card-img-top",
                                        alt: "Mikazuuu07"
                                    }), (0, X.jsxs)("div", {
                                        className: "card-body text-center",
                                        children: [(0, X.jsx)("h5", {
                                            className: "fw-bold",
                                            children: "\u304b\u305a\u3002"
                                        }), (0, X.jsx)("p", {
                                            className: "small text-muted text-truncate",
                                            children: "Core Dev"
                                        }), (0, X.jsx)("a", {
                                            href: "https://github.com/Mikazuuu07",
                                            target: "_blank",
                                            children: (0, X.jsx)("i", {
                                                className: "fab fa-github fa-lg text-dark mx-1"
                                            })
                                        }), (0, X.jsx)("a", {
                                            href: "http://t.me/mikazuuu07",
                                            target: "_blank",
                                            children: (0, X.jsx)("i", {
                                                className: "fab fa-telegram fa-lg mx-1"
                                            })
                                        })]
                                    })]
                                })
                            }), (0, X.jsx)("div", {
                                className: "col",
                                children: (0, X.jsxs)("div", {
                                    className: "bg-white h-100 shadow rounded",
                                    children: [(0, X.jsx)("img", {
                                        src: "https://avatars.githubusercontent.com/trisfaizal",
                                        className: "card-img-top",
                                        alt: "trisf"
                                    }), (0, X.jsxs)("div", {
                                        className: "card-body text-center",
                                        children: [(0, X.jsx)("h5", {
                                            className: "fw-bold",
                                            children: "\u061c\ud835\udc2d\ud835\udc2b\ud835\udc22\ud835\udc2c\ud835\udc1f \u4e09\u200c\u200c"
                                        }), (0, X.jsx)("p", {
                                            className: "small text-muted text-truncate",
                                            children: "Project Manager"
                                        }), (0, X.jsx)("a", {
                                            href: "https://github.com/trisfaizal",
                                            target: "_blank",
                                            children: (0, X.jsx)("i", {
                                                className: "fab fa-github fa-lg text-dark mx-1"
                                            })
                                        }), (0, X.jsx)("a", {
                                            href: "https://t.me/trisf",
                                            target: "_blank",
                                            children: (0, X.jsx)("i", {
                                                className: "fab fa-telegram fa-lg mx-1"
                                            })
                                        })]
                                    })]
                                })
                            }), (0, X.jsx)("div", {
                                className: "col",
                                children: (0, X.jsxs)("div", {
                                    className: "bg-white h-100 shadow rounded",
                                    children: [(0, X.jsx)("img", {
                                        src: "https://avatars.githubusercontent.com/wulan17",
                                        className: "card-img-top",
                                        alt: "wulan"
                                    }), (0, X.jsxs)("div", {
                                        className: "card-body text-center",
                                        children: [(0, X.jsx)("h5", {
                                            className: "fw-bold",
                                            children: "\u061cwulan\u200c\u200c"
                                        }), (0, X.jsx)("p", {
                                            className: "small text-muted text-truncate",
                                            children: "Core Dev"
                                        }), (0, X.jsx)("a", {
                                            href: "https://github.com/wulan17",
                                            target: "_blank",
                                            children: (0, X.jsx)("i", {
                                                className: "fab fa-github fa-lg text-dark mx-1"
                                            })
                                        }), (0, X.jsx)("a", {
                                            href: "https://t.me/wulan17",
                                            target: "_blank",
                                            children: (0, X.jsx)("i", {
                                                className: "fab fa-telegram fa-lg mx-1"
                                            })
                                        })]
                                    })]
                                })
                            }), (0, X.jsx)("div", {
                                className: "col",
                                children: (0, X.jsxs)("div", {
                                    className: "bg-white h-100 shadow rounded",
                                    children: [(0, X.jsx)("img", {
                                        src: "https://avatars.githubusercontent.com/goodmeow",
                                        className: "card-img-top",
                                        alt: "Goodmeow"
                                    }), (0, X.jsxs)("div", {
                                        className: "card-body text-center",
                                        children: [(0, X.jsx)("h5", {
                                            className: "fw-bold",
                                            children: "Harun Al Rasyid"
                                        }), (0, X.jsx)("p", {
                                            className: "small text-muted text-truncate",
                                            children: "Core Dev"
                                        }), (0, X.jsx)("a", {
                                            href: "https://github.com/goodmeow",
                                            target: "_blank",
                                            children: (0, X.jsx)("i", {
                                                className: "fab fa-github fa-lg text-dark mx-1"
                                            })
                                        }), (0, X.jsx)("a", {
                                            href: "https://t.me/Aarunalr",
                                            target: "_blank",
                                            children: (0, X.jsx)("i", {
                                                className: "fab fa-telegram fa-lg mx-1"
                                            })
                                        })]
                                    })]
                                })
                            }), (0, X.jsx)("div", {
                                className: "col",
                                children: (0, X.jsxs)("div", {
                                    className: "bg-white h-100 shadow rounded",
                                    children: [(0, X.jsx)("img", {
                                        src: "https://avatars.githubusercontent.com/najahiiii",
                                        className: "card-img-top",
                                        alt: "Najahi"
                                    }), (0, X.jsxs)("div", {
                                        className: "card-body text-center",
                                        children: [(0, X.jsx)("h5", {
                                            className: "fw-bold",
                                            children: "Najahi"
                                        }), (0, X.jsx)("p", {
                                            className: "small text-muted text-truncate",
                                            children: "Core Dev"
                                        }), (0, X.jsx)("a", {
                                            href: "https://github.com/najahiiii",
                                            target: "_blank",
                                            children: (0, X.jsx)("i", {
                                                className: "fab fa-github fa-lg text-dark mx-1"
                                            })
                                        }), (0, X.jsx)("a", {
                                            href: "https://t.me/Najahiii",
                                            target: "_blank",
                                            children: (0, X.jsx)("i", {
                                                className: "fab fa-telegram fa-lg mx-1"
                                            })
                                        })]
                                    })]
                                })
                            }), (0, X.jsx)("div", {
                                className: "col",
                                children: (0, X.jsxs)("div", {
                                    className: "bg-white h-100 shadow rounded",
                                    children: [(0, X.jsx)("img", {
                                        src: "https://avatars.githubusercontent.com/Gnonymous7",
                                        className: "card-img-top",
                                        alt: "Gnonymous7"
                                    }), (0, X.jsxs)("div", {
                                        className: "card-body text-center",
                                        children: [(0, X.jsx)("h5", {
                                            className: "fw-bold",
                                            children: "Gnonymous"
                                        }), (0, X.jsx)("p", {
                                            className: "small text-muted text-truncate",
                                            children: "UI Designer"
                                        }), (0, X.jsx)("a", {
                                            href: "https://github.com/Gnonymous7",
                                            target: "_blank",
                                            children: (0, X.jsx)("i", {
                                                className: "fab fa-github fa-lg text-dark mx-1"
                                            })
                                        }), (0, X.jsx)("a", {
                                            href: "https://t.me/ImYourGege",
                                            target: "_blank",
                                            children: (0, X.jsx)("i", {
                                                className: "fab fa-telegram fa-lg mx-1"
                                            })
                                        })]
                                    })]
                                })
                            }), (0, X.jsx)("div", {
                                className: "col",
                                children: (0, X.jsxs)("div", {
                                    className: "bg-white h-100 shadow rounded",
                                    children: [(0, X.jsx)("img", {
                                        src: "https://avatars.githubusercontent.com/aryanataandi",
                                        className: "card-img-top",
                                        alt: "Aryanata"
                                    }), (0, X.jsxs)("div", {
                                        className: "card-body text-center",
                                        children: [(0, X.jsx)("h5", {
                                            className: "fw-bold",
                                            children: "Aryanata"
                                        }), (0, X.jsx)("p", {
                                            className: "small text-muted text-truncate",
                                            children: "Web Developer | Designer"
                                        }), (0, X.jsx)("a", {
                                            href: "https://github.com/aryanataandi",
                                            target: "_blank",
                                            children: (0, X.jsx)("i", {
                                                className: "fab fa-github fa-lg text-dark mx-1"
                                            })
                                        }), (0, X.jsx)("a", {
                                            href: "https://t.me/aryanata_andi",
                                            target: "_blank",
                                            children: (0, X.jsx)("i", {
                                                className: "fab fa-telegram fa-lg mx-1"
                                            })
                                        })]
                                    })]
                                })
                            }), (0, X.jsx)("div", {
                                className: "col",
                                children: (0, X.jsxs)("div", {
                                    className: "bg-white h-100 shadow rounded",
                                    children: [(0, X.jsx)("img", {
                                        src: "https://avatars.githubusercontent.com/zamprjkt",
                                        className: "card-img-top",
                                        alt: "zamprjkt"
                                    }), (0, X.jsxs)("div", {
                                        className: "card-body text-center",
                                        children: [(0, X.jsx)("h5", {
                                            className: "fw-bold",
                                            children: "Kiko \u2618"
                                        }), (0, X.jsx)("p", {
                                            className: "small text-muted text-truncate",
                                            children: "Designer"
                                        }), (0, X.jsx)("a", {
                                            href: "https://github.com/zamprjkt",
                                            target: "_blank",
                                            children: (0, X.jsx)("i", {
                                                className: "fab fa-github fa-lg text-dark mx-1"
                                            })
                                        }), (0, X.jsx)("a", {
                                            href: "https://t.me/naalpha",
                                            target: "_blank",
                                            children: (0, X.jsx)("i", {
                                                className: "fab fa-telegram fa-lg mx-1"
                                            })
                                        })]
                                    })]
                                })
                            }), (0, X.jsx)("div", {
                                className: "col",
                                children: (0, X.jsxs)("div", {
                                    className: "bg-white h-100 shadow rounded",
                                    children: [(0, X.jsx)("img", {
                                        src: "https://avatars.githubusercontent.com/henrysg29",
                                        className: "card-img-top",
                                        alt: "henrysg29"
                                    }), (0, X.jsxs)("div", {
                                        className: "card-body text-center",
                                        children: [(0, X.jsx)("h5", {
                                            className: "fw-bold",
                                            children: "\u2022 \u043d\u03b5\u03b7s\u043d\u03b9\u03b7"
                                        }), (0, X.jsx)("p", {
                                            className: "small text-muted text-truncate",
                                            children: "Realme 5/I/S"
                                        }), (0, X.jsx)("a", {
                                            href: "https://github.com/henrysg29",
                                            target: "_blank",
                                            children: (0, X.jsx)("i", {
                                                className: "fab fa-github fa-lg text-dark mx-1"
                                            })
                                        }), (0, X.jsx)("a", {
                                            href: "https://t.me/henztz",
                                            target: "_blank",
                                            children: (0, X.jsx)("i", {
                                                className: "fab fa-telegram fa-lg mx-1"
                                            })
                                        })]
                                    })]
                                })
                            }), (0, X.jsx)("div", {
                                className: "col",
                                children: (0, X.jsxs)("div", {
                                    className: "bg-white h-100 shadow rounded",
                                    children: [(0, X.jsx)("img", {
                                        src: "https://avatars.githubusercontent.com/hadad",
                                        className: "card-img-top",
                                        alt: "hadad"
                                    }), (0, X.jsxs)("div", {
                                        className: "card-body text-center",
                                        children: [(0, X.jsx)("h5", {
                                            className: "fw-bold",
                                            children: "Hadad"
                                        }), (0, X.jsx)("p", {
                                            className: "small text-muted text-truncate",
                                            children: "Redmi 7"
                                        }), (0, X.jsx)("a", {
                                            href: "https://github.com/hadad",
                                            target: "_blank",
                                            children: (0, X.jsx)("i", {
                                                className: "fab fa-github fa-lg text-dark mx-1"
                                            })
                                        }), (0, X.jsx)("a", {
                                            href: "https://t.me/hdrjt",
                                            target: "_blank",
                                            children: (0, X.jsx)("i", {
                                                className: "fab fa-telegram fa-lg mx-1"
                                            })
                                        })]
                                    })]
                                })
                            }), (0, X.jsx)("div", {
                                className: "col",
                                children: (0, X.jsxs)("div", {
                                    className: "bg-white h-100 shadow rounded",
                                    children: [(0, X.jsx)("img", {
                                        src: "https://avatars.githubusercontent.com/felixandi79",
                                        className: "card-img-top",
                                        alt: "felixandi79"
                                    }), (0, X.jsxs)("div", {
                                        className: "card-body text-center",
                                        children: [(0, X.jsx)("h5", {
                                            className: "fw-bold",
                                            children: "Felixxandi79"
                                        }), (0, X.jsx)("p", {
                                            className: "small text-muted text-truncate",
                                            children: "Realme C3/Narzo 10A"
                                        }), (0, X.jsx)("a", {
                                            href: "https://github.com/felixandi79",
                                            target: "_blank",
                                            children: (0, X.jsx)("i", {
                                                className: "fab fa-github fa-lg text-dark mx-1"
                                            })
                                        }), (0, X.jsx)("a", {
                                            href: "http://t.me/felixxandi79",
                                            target: "_blank",
                                            children: (0, X.jsx)("i", {
                                                className: "fab fa-telegram fa-lg mx-1"
                                            })
                                        })]
                                    })]
                                })
                            }), (0, X.jsx)("div", {
                                className: "col",
                                children: (0, X.jsxs)("div", {
                                    className: "bg-white h-100 shadow rounded",
                                    children: [(0, X.jsx)("img", {
                                        src: "https://avatars.githubusercontent.com/deny2311",
                                        className: "card-img-top",
                                        alt: "deny2311"
                                    }), (0, X.jsxs)("div", {
                                        className: "card-body text-center",
                                        children: [(0, X.jsx)("h5", {
                                            className: "fw-bold",
                                            children: "deny2311"
                                        }), (0, X.jsx)("p", {
                                            className: "small text-muted text-truncate",
                                            children: "Mi 6"
                                        }), (0, X.jsx)("a", {
                                            href: "https://github.com/deny2311",
                                            target: "_blank",
                                            children: (0, X.jsx)("i", {
                                                className: "fab fa-github fa-lg text-dark mx-1"
                                            })
                                        }), (0, X.jsx)("a", {
                                            href: "http://t.me/deny2311",
                                            target: "_blank",
                                            children: (0, X.jsx)("i", {
                                                className: "fab fa-telegram fa-lg mx-1"
                                            })
                                        })]
                                    })]
                                })
                            }), (0, X.jsx)("div", {
                                className: "col",
                                children: (0, X.jsxs)("div", {
                                    className: "bg-white h-100 shadow rounded",
                                    children: [(0, X.jsx)("img", {
                                        src: "https://avatars.githubusercontent.com/frostg-012",
                                        className: "card-img-top",
                                        alt: "frostg-012"
                                    }), (0, X.jsxs)("div", {
                                        className: "card-body text-center",
                                        children: [(0, X.jsx)("h5", {
                                            className: "fw-bold",
                                            children: "frost"
                                        }), (0, X.jsx)("p", {
                                            className: "small text-muted text-truncate",
                                            children: "Poco M3 / Redmi 9T"
                                        }), (0, X.jsx)("a", {
                                            href: "https://github.com/frostg-012",
                                            target: "_blank",
                                            children: (0, X.jsx)("i", {
                                                className: "fab fa-github fa-lg text-dark mx-1"
                                            })
                                        }), (0, X.jsx)("a", {
                                            href: "http://t.me/frostg012",
                                            target: "_blank",
                                            children: (0, X.jsx)("i", {
                                                className: "fab fa-telegram fa-lg mx-1"
                                            })
                                        })]
                                    })]
                                })
                            }), (0, X.jsx)("div", {
                                className: "col",
                                children: (0, X.jsxs)("div", {
                                    className: "bg-white h-100 shadow rounded",
                                    children: [(0, X.jsx)("img", {
                                        src: "https://avatars.githubusercontent.com/Thunder105",
                                        className: "card-img-top",
                                        alt: "Thunder105"
                                    }), (0, X.jsxs)("div", {
                                        className: "card-body text-center",
                                        children: [(0, X.jsx)("h5", {
                                            className: "fw-bold",
                                            children: "Hariprakash"
                                        }), (0, X.jsx)("p", {
                                            className: "small text-muted text-truncate",
                                            children: "Redmi Note 7 Pro"
                                        }), (0, X.jsx)("a", {
                                            href: "https://github.com/Thunder105",
                                            target: "_blank",
                                            children: (0, X.jsx)("i", {
                                                className: "fab fa-github fa-lg text-dark mx-1"
                                            })
                                        }), (0, X.jsx)("a", {
                                            href: "http://t.me/Thunder105",
                                            target: "_blank",
                                            children: (0, X.jsx)("i", {
                                                className: "fab fa-telegram fa-lg mx-1"
                                            })
                                        })]
                                    })]
                                })
                            }), (0, X.jsx)("div", {
                                className: "col",
                                children: (0, X.jsxs)("div", {
                                    className: "bg-white h-100 shadow rounded",
                                    children: [(0, X.jsx)("img", {
                                        src: "https://avatars.githubusercontent.com/Naxo79",
                                        className: "card-img-top",
                                        alt: "Naxo79"
                                    }), (0, X.jsxs)("div", {
                                        className: "card-body text-center",
                                        children: [(0, X.jsx)("h5", {
                                            className: "fw-bold",
                                            children: "Ignacio Garcia"
                                        }), (0, X.jsx)("p", {
                                            className: "small text-muted text-truncate",
                                            children: "Moto G7 Power"
                                        }), (0, X.jsx)("a", {
                                            href: "https://github.com/Naxo79",
                                            target: "_blank",
                                            children: (0, X.jsx)("i", {
                                                className: "fab fa-github fa-lg text-dark mx-1"
                                            })
                                        }), (0, X.jsx)("a", {
                                            href: "http://t.me/Naxo79",
                                            target: "_blank",
                                            children: (0, X.jsx)("i", {
                                                className: "fab fa-telegram fa-lg mx-1"
                                            })
                                        })]
                                    })]
                                })
                            }), (0, X.jsx)("div", {
                                className: "col",
                                children: (0, X.jsxs)("div", {
                                    className: "bg-white h-100 shadow rounded",
                                    children: [(0, X.jsx)("img", {
                                        src: "https://avatars.githubusercontent.com/TeraaBytee",
                                        className: "card-img-top",
                                        alt: "TeraaBytee"
                                    }), (0, X.jsxs)("div", {
                                        className: "card-body text-center",
                                        children: [(0, X.jsx)("h5", {
                                            className: "fw-bold",
                                            children: "TeraaBytee"
                                        }), (0, X.jsx)("p", {
                                            className: "small text-muted text-truncate",
                                            children: "Redmi Note 8 Pro"
                                        }), (0, X.jsx)("a", {
                                            href: "https://github.com/TeraaBytee",
                                            target: "_blank",
                                            children: (0, X.jsx)("i", {
                                                className: "fab fa-github fa-lg text-dark mx-1"
                                            })
                                        }), (0, X.jsx)("a", {
                                            href: "http://t.me/TeraaBytee",
                                            target: "_blank",
                                            children: (0, X.jsx)("i", {
                                                className: "fab fa-telegram fa-lg mx-1"
                                            })
                                        })]
                                    })]
                                })
                            }), (0, X.jsx)("div", {
                                className: "col",
                                children: (0, X.jsxs)("div", {
                                    className: "bg-white h-100 shadow rounded",
                                    children: [(0, X.jsx)("img", {
                                        src: "https://avatars.githubusercontent.com/skittels15",
                                        className: "card-img-top",
                                        alt: "skittels15"
                                    }), (0, X.jsxs)("div", {
                                        className: "card-body text-center",
                                        children: [(0, X.jsx)("h5", {
                                            className: "fw-bold",
                                            children: "\u4e43\u4e47\u4e47\u5c3a\u15ea\u722a\u5342\u51e0\u51e0 \ud83c\uddf7\ud83c\uddfa"
                                        }), (0, X.jsx)("p", {
                                            className: "small text-muted text-truncate",
                                            children: "Redmi 8/8A/8A Dual"
                                        }), (0, X.jsx)("a", {
                                            href: "https://github.com/skittels15",
                                            target: "_blank",
                                            children: (0, X.jsx)("i", {
                                                className: "fab fa-github fa-lg text-dark mx-1"
                                            })
                                        }), (0, X.jsx)("a", {
                                            href: "http://t.me/beerdmann",
                                            target: "_blank",
                                            children: (0, X.jsx)("i", {
                                                className: "fab fa-telegram fa-lg mx-1"
                                            })
                                        })]
                                    })]
                                })
                            }), (0, X.jsx)("div", {
                                className: "col",
                                children: (0, X.jsxs)("div", {
                                    className: "bg-white h-100 shadow rounded",
                                    children: [(0, X.jsx)("img", {
                                        src: "https://avatars.githubusercontent.com/WisnuArdhi28",
                                        className: "card-img-top",
                                        alt: "WisnuArdhi34"
                                    }), (0, X.jsxs)("div", {
                                        className: "card-body text-center",
                                        children: [(0, X.jsx)("h5", {
                                            className: "fw-bold",
                                            children: "WisnuArdhi34"
                                        }), (0, X.jsx)("p", {
                                            className: "small text-muted text-truncate",
                                            children: "Redmi Note 8/8T"
                                        }), (0, X.jsx)("a", {
                                            href: "https://github.com/WisnuArdhi28",
                                            target: "_blank",
                                            children: (0, X.jsx)("i", {
                                                className: "fab fa-github fa-lg text-dark mx-1"
                                            })
                                        }), (0, X.jsx)("a", {
                                            href: "https://t.me/WisnuArdhi34",
                                            target: "_blank",
                                            children: (0, X.jsx)("i", {
                                                className: "fab fa-telegram fa-lg mx-1"
                                            })
                                        })]
                                    })]
                                })
                            }), (0, X.jsx)("div", {
                                className: "col",
                                children: (0, X.jsxs)("div", {
                                    className: "bg-white h-100 shadow rounded",
                                    children: [(0, X.jsx)("img", {
                                        src: "https://avatars.githubusercontent.com/zkyzzz",
                                        className: "card-img-top",
                                        alt: "zkyzzz"
                                    }), (0, X.jsxs)("div", {
                                        className: "card-body text-center",
                                        children: [(0, X.jsx)("h5", {
                                            className: "fw-bold",
                                            children: "A. Dzaky"
                                        }), (0, X.jsx)("p", {
                                            className: "small text-muted text-truncate",
                                            children: "Poco X3 Pro & Poco F1"
                                        }), (0, X.jsx)("a", {
                                            href: "https://github.com/zkyzzz",
                                            target: "_blank",
                                            children: (0, X.jsx)("i", {
                                                className: "fab fa-github fa-lg text-dark mx-1"
                                            })
                                        }), (0, X.jsx)("a", {
                                            href: "http://t.me/zkyzzz",
                                            target: "_blank",
                                            children: (0, X.jsx)("i", {
                                                className: "fab fa-telegram fa-lg mx-1"
                                            })
                                        })]
                                    })]
                                })
                            }), (0, X.jsx)("div", {
                                className: "col",
                                children: (0, X.jsxs)("div", {
                                    className: "bg-white h-100 shadow rounded",
                                    children: [(0, X.jsx)("img", {
                                        src: "https://avatars.githubusercontent.com/fourninesix",
                                        className: "card-img-top",
                                        alt: "fourninesix"
                                    }), (0, X.jsxs)("div", {
                                        className: "card-body text-center",
                                        children: [(0, X.jsx)("h5", {
                                            className: "fw-bold",
                                            children: "Luigiee"
                                        }), (0, X.jsx)("p", {
                                            className: "small text-muted text-truncate",
                                            children: "Redmi Note 9"
                                        }), (0, X.jsx)("a", {
                                            href: "https://github.com/fourninesix",
                                            target: "_blank",
                                            children: (0, X.jsx)("i", {
                                                className: "fab fa-github fa-lg text-dark mx-1"
                                            })
                                        }), (0, X.jsx)("a", {
                                            href: "http://t.me/Luigiee",
                                            target: "_blank",
                                            children: (0, X.jsx)("i", {
                                                className: "fab fa-telegram fa-lg mx-1"
                                            })
                                        })]
                                    })]
                                })
                            }), (0, X.jsx)("div", {
                                className: "col",
                                children: (0, X.jsxs)("div", {
                                    className: "bg-white h-100 shadow rounded",
                                    children: [(0, X.jsx)("img", {
                                        src: "https://avatars.githubusercontent.com/official-mocha",
                                        className: "card-img-top",
                                        alt: "official-mocha"
                                    }), (0, X.jsxs)("div", {
                                        className: "card-body text-center",
                                        children: [(0, X.jsx)("h5", {
                                            className: "fw-bold",
                                            children: "\uff2d\uff2f\uff23\uff28\uff21"
                                        }), (0, X.jsx)("p", {
                                            className: "small text-muted text-truncate",
                                            children: "Redmi Note 6 Pro"
                                        }), (0, X.jsx)("a", {
                                            href: "https://github.com/official-mocha",
                                            target: "_blank",
                                            children: (0, X.jsx)("i", {
                                                className: "fab fa-github fa-lg text-dark mx-1"
                                            })
                                        }), (0, X.jsx)("a", {
                                            href: "http://t.me/official_mocha",
                                            target: "_blank",
                                            children: (0, X.jsx)("i", {
                                                className: "fab fa-telegram fa-lg mx-1"
                                            })
                                        })]
                                    })]
                                })
                            }), (0, X.jsx)("div", {
                                className: "col",
                                children: (0, X.jsxs)("div", {
                                    className: "bg-white h-100 shadow rounded",
                                    children: [(0, X.jsx)("img", {
                                        src: "https://avatars.githubusercontent.com/AIV-97",
                                        className: "card-img-top",
                                        alt: "AIV-97"
                                    }), (0, X.jsxs)("div", {
                                        className: "card-body text-center",
                                        children: [(0, X.jsx)("h5", {
                                            className: "fw-bold",
                                            children: "Fraschze97"
                                        }), (0, X.jsx)("p", {
                                            className: "small text-muted text-truncate",
                                            children: "Realme C2"
                                        }), (0, X.jsx)("a", {
                                            href: "https://github.com/AIV-97",
                                            target: "_blank",
                                            children: (0, X.jsx)("i", {
                                                className: "fab fa-github fa-lg text-dark mx-1"
                                            })
                                        }), (0, X.jsx)("a", {
                                            href: "http://t.me/noob_permanently2",
                                            target: "_blank",
                                            children: (0, X.jsx)("i", {
                                                className: "fab fa-telegram fa-lg mx-1"
                                            })
                                        })]
                                    })]
                                })
                            }), (0, X.jsx)("div", {
                                className: "col",
                                children: (0, X.jsxs)("div", {
                                    className: "bg-white h-100 shadow rounded",
                                    children: [(0, X.jsx)("img", {
                                        src: "https://avatars.githubusercontent.com/unsatifsed27",
                                        className: "card-img-top",
                                        alt: "SAYOOJ"
                                    }), (0, X.jsxs)("div", {
                                        className: "card-body text-center",
                                        children: [(0, X.jsx)("h5", {
                                            className: "fw-bold",
                                            children: "Dampt..."
                                        }), (0, X.jsx)("p", {
                                            className: "small text-muted text-truncate",
                                            children: "Redmi Note 10 Pro/Max"
                                        }), (0, X.jsx)("a", {
                                            href: "https://github.com/sayooxx",
                                            target: "_blank",
                                            children: (0, X.jsx)("i", {
                                                className: "fab fa-github fa-lg text-dark mx-1"
                                            })
                                        }), (0, X.jsx)("a", {
                                            href: "http://t.me/Djampt",
                                            target: "_blank",
                                            children: (0, X.jsx)("i", {
                                                className: "fab fa-telegram fa-lg mx-1"
                                            })
                                        })]
                                    })]
                                })
                            }), (0, X.jsx)("div", {
                                className: "col",
                                children: (0, X.jsxs)("div", {
                                    className: "bg-white h-100 shadow rounded",
                                    children: [(0, X.jsx)("img", {
                                        src: "https://avatars.githubusercontent.com/buglessx",
                                        className: "card-img-top",
                                        alt: "buglessx"
                                    }), (0, X.jsxs)("div", {
                                        className: "card-body text-center",
                                        children: [(0, X.jsx)("h5", {
                                            className: "fw-bold",
                                            children: ". \u0192\u03b1\u03c5z\u03b1\u03b7"
                                        }), (0, X.jsx)("p", {
                                            className: "small text-muted text-truncate",
                                            children: "Poco X3 NFC"
                                        }), (0, X.jsx)("a", {
                                            href: "https://github.com/buglessx",
                                            target: "_blank",
                                            children: (0, X.jsx)("i", {
                                                className: "fab fa-github fa-lg text-dark mx-1"
                                            })
                                        }), (0, X.jsx)("a", {
                                            href: "https://t.me/nowulimited",
                                            target: "_blank",
                                            children: (0, X.jsx)("i", {
                                                className: "fab fa-telegram fa-lg mx-1"
                                            })
                                        })]
                                    })]
                                })
                            }), (0, X.jsx)("div", {
                                className: "col",
                                children: (0, X.jsxs)("div", {
                                    className: "bg-white h-100 shadow rounded",
                                    children: [(0, X.jsx)("img", {
                                        src: "https://avatars.githubusercontent.com/ItoRenz",
                                        className: "card-img-top",
                                        alt: "ItoRenz"
                                    }), (0, X.jsxs)("div", {
                                        className: "card-body text-center",
                                        children: [(0, X.jsx)("h5", {
                                            className: "fw-bold",
                                            children: "ItoRenz"
                                        }), (0, X.jsx)("p", {
                                            className: "small text-muted text-truncate",
                                            children: "Redmi 4X 4A/5A"
                                        }), (0, X.jsx)("a", {
                                            href: "https://github.com/ItoRenz",
                                            target: "_blank",
                                            children: (0, X.jsx)("i", {
                                                className: "fab fa-github fa-lg text-dark mx-1"
                                            })
                                        }), (0, X.jsx)("a", {
                                            href: "https://t.me/ItoRenz",
                                            target: "_blank",
                                            children: (0, X.jsx)("i", {
                                                className: "fab fa-telegram fa-lg mx-1"
                                            })
                                        })]
                                    })]
                                })
                            })]
                        })
                    })]
                })]
            })
        };
        var oe = n.p + "static/media/hero.ac841c60110a02ec901bdf3157298660.svg",
            se = n.p + "static/media/ss.214628bf44581499cc7d.png";
        var ce = n.p + "static/media/a11.2d739a17298f21c5bfa005304fb1cded.svg";
        var ue = n.p + "static/media/download.b01046791db8343a8547d64862bdce08.svg";
        var de = function() {
            return (0, X.jsxs)(X.Fragment, {
                children: [(0, X.jsx)("div", {
                    style: {
                        height: "72px"
                    }
                }), (0, X.jsx)("div", {
                    id: "home"
                }), (0, X.jsx)("section", {
                    id: "section-1",
                    children: (0, X.jsx)("div", {
                        className: "container my-4",
                        children: (0, X.jsxs)("div", {
                            className: "row d-flex align-items-center",
                            children: [(0, X.jsx)("div", {
                                className: "col-12 col-md-7 col-lg-6 order-md-1 order-2",
                                "data-aos": "fade-up",
                                children: (0, X.jsxs)("div", {
                                    className: "mt-2 text-md-start text-center",
                                    children: [(0, X.jsx)("h1", {
                                        className: "display-5 display-md-4",
                                        children: "Welcome to the Jungle!"
                                    }), (0, X.jsx)("br", {}), (0, X.jsx)("p", {
                                        id: "tagline",
                                        className: "fs-5 fw-light text-reset",
                                        children: "Komodo OS is AOSP-based with customization & optimized feature. #Komodo #WildYourAndroid"
                                    }), (0, X.jsx)("br", {}), (0, X.jsxs)("div", {
                                        id: "btn-landing",
                                        className: "text-md-start text-center",
                                        children: [(0, X.jsx)(Q, {
                                            className: "btn button btn-primary btn-lg me-1",
                                            to: "/download",
                                            children: "Download Now"
                                        }), (0, X.jsx)(Q, {
                                            className: "btn button btn-secondary btn-lg px-4",
                                            "data-bs-toggle": "popover",
                                            to: "/changelog",
                                            children: "Changelog"
                                        })]
                                    })]
                                })
                            }), (0, X.jsx)("div", {
                                className: "col-12 col-md-5 col-lg-6 order-md-2 order-1",
                                "data-aos": "fade-up",
                                "data-aos-delay": "100",
                                children: (0, X.jsx)("img", {
                                    id: "hero-img",
                                    src: oe,
                                    alt: "hero",
                                    className: "img-fluid pb-4 pb-md-0 d-flex mx-auto",
                                    style: {
                                        zIndex: -20
                                    },
                                    draggable: "false"
                                })
                            })]
                        })
                    })
                }), (0, X.jsx)("div", {
                    id: "about"
                }), (0, X.jsx)("section", {
                    id: "section-2",
                    className: "mt-5",
                    children: (0, X.jsx)("div", {
                        className: "container",
                        children: (0, X.jsx)("div", {
                            className: "row justify-content-center py-5",
                            children: (0, X.jsxs)("div", {
                                id: "section-2-card",
                                className: "col-md-10 col-11 bg-white shadow-lg pt-4 pb-4 pb-md-5 px-5",
                                children: [(0, X.jsxs)("div", {
                                    className: "text-center",
                                    children: [(0, X.jsx)("p", {
                                        className: "fs-4 fw-bold py-3",
                                        children: "What is this?"
                                    }), (0, X.jsxs)("p", {
                                        className: "fs-6 d-lg-none",
                                        children: [(0, X.jsx)("span", {
                                            className: "text-primary",
                                            children: "Komodo OS"
                                        }), " is an Android operating system based on Android Open Source Project (AOSP) adapted to optimal features and configurations. We release regular updates with monthly security patches from the latest AOSP sources."]
                                    }), (0, X.jsxs)("p", {
                                        className: "fs-5 d-none d-lg-inline",
                                        children: [(0, X.jsx)("span", {
                                            className: "text-primary",
                                            children: "Komodo OS"
                                        }), " is an Android operating system based on Android Open Source Project (AOSP) adapted to optimal features and configurations. We release regular updates with monthly security patches from the latest AOSP sources."]
                                    })]
                                }), (0, X.jsx)("hr", {
                                    className: "mt-4"
                                }), (0, X.jsxs)("div", {
                                    className: "text-center",
                                    children: [(0, X.jsx)("p", {
                                        className: "fs-4 fw-bold py-3",
                                        children: "What do we want to achieve?"
                                    }), (0, X.jsx)("p", {
                                        className: "fs-6 d-lg-none",
                                        children: "Our goal is to collaborate with anyone interested in all aspects within Android customization."
                                    }), (0, X.jsx)("p", {
                                        className: "fs-5 d-none d-lg-inline",
                                        children: "Our goal is to collaborate with anyone interested in all aspects within Android customization."
                                    })]
                                })]
                            })
                        })
                    })
                }), (0, X.jsxs)("section", {
                    id: "section-3",
                    className: "bg-primary text-white shadow-sm",
                    children: [(0, X.jsx)("div", {
                        className: "bg-primary"
                    }), (0, X.jsxs)("div", {
                        className: "container py-5",
                        children: [(0, X.jsx)("p", {
                            id: "features",
                            className: "fs-2 text-center pt-3 mb-0 mb-md-5 fw-bold",
                            "data-aos": "fade-down",
                            children: "Features & Advantages"
                        }), (0, X.jsxs)("div", {
                            className: "row justify-content-center",
                            children: [(0, X.jsx)("div", {
                                className: "col-12 col-md-7 order-2 order-md-1",
                                children: (0, X.jsxs)("div", {
                                    className: "row text-center mt-5 d-flex",
                                    "data-aos": "fade-right",
                                    children: [(0, X.jsxs)("div", {
                                        className: "col-8 col-md-6 mx-auto",
                                        children: [(0, X.jsx)("i", {
                                            className: "fas fa-tachometer-alt fa-3x mb-4"
                                        }), (0, X.jsx)("p", {
                                            className: "fs-5 fw-bolder",
                                            children: "Performance"
                                        }), (0, X.jsx)("p", {
                                            className: "px-0 px-md-4",
                                            children: "Focused on speed and stability using certain tweak on some apps"
                                        })]
                                    }), (0, X.jsxs)("div", {
                                        className: "col-8 col-md-6 mx-auto",
                                        children: [(0, X.jsx)("i", {
                                            className: "fas fa-swatchbook fa-3x mb-4"
                                        }), (0, X.jsx)("p", {
                                            className: "fs-5 fw-bolder",
                                            children: "Customization"
                                        }), (0, X.jsx)("p", {
                                            className: "px-0 px-md-4",
                                            children: "We are including a lot of option to get rid of Android theming"
                                        })]
                                    }), (0, X.jsxs)("div", {
                                        className: "col-8 col-md-6 mx-auto",
                                        children: [(0, X.jsx)("i", {
                                            className: "fas fa-shield-alt fa-3x mb-4"
                                        }), (0, X.jsx)("p", {
                                            className: "fs-5 fw-bolder",
                                            children: "Security"
                                        }), (0, X.jsx)("p", {
                                            className: "px-0 px-md-4",
                                            children: "Security patch updates simultaneously"
                                        })]
                                    }), (0, X.jsxs)("div", {
                                        className: "col-8 col-md-6 mx-auto",
                                        children: [(0, X.jsx)("i", {
                                            className: "fas fa-battery-full fa-3x mb-4"
                                        }), (0, X.jsx)("p", {
                                            className: "fs-5 fw-bolder",
                                            children: "Battery Friendly"
                                        }), (0, X.jsx)("p", {
                                            className: "px-0 px-md-4",
                                            children: "Additional option served to reach the best battery consumtion"
                                        })]
                                    })]
                                })
                            }), (0, X.jsx)("div", {
                                className: "col-12 col-md-4 order-1 order-md-2",
                                "data-aos": "fade-left",
                                "data-aos-offset": "140",
                                children: (0, X.jsx)("img", {
                                    id: "ss-img",
                                    src: se,
                                    alt: "screenshot",
                                    className: "d-flex mx-auto my-5 my-md-0",
                                    draggable: "false"
                                })
                            })]
                        })]
                    })]
                }), (0, X.jsx)("section", {
                    id: "section-4",
                    children: (0, X.jsx)("div", {
                        className: "container",
                        children: (0, X.jsxs)("div", {
                            className: "row justify-content-center",
                            children: [(0, X.jsx)("div", {
                                className: "col-12 col-md-6",
                                "data-aos": "fade-right",
                                children: (0, X.jsx)("img", {
                                    id: "a11-img",
                                    src: ce,
                                    alt: "a11 ready",
                                    className: "img-fluid d-flex mx-auto mt-5",
                                    draggable: "false"
                                })
                            }), (0, X.jsx)("div", {
                                className: "col-12 col-md-6",
                                "data-aos": "fade-left",
                                children: (0, X.jsx)("p", {
                                    id: "section-4-quotes",
                                    className: "text-center text-md-start fs-4 fs-md-2 fw-bold px-5",
                                    children: "We are adapting to latest version of Android and giving the best experience to users"
                                })
                            })]
                        })
                    })
                }), (0, X.jsx)("section", {
                    id: "count",
                    children: (0, X.jsx)("div", {
                        className: "container",
                        children: (0, X.jsxs)("div", {
                            className: "row",
                            children: [(0, X.jsx)("div", {
                                className: "col d-flex flex-column",
                                "data-aos": "fade-right",
                                children: (0, X.jsxs)("div", {
                                    className: "my-auto mx-0 mx-md-4 text-center text-lg-start",
                                    children: [(0, X.jsx)("p", {
                                        className: "fs-4 fw-bold",
                                        children: "We have reached several milestones that have proven our work."
                                    }), (0, X.jsxs)("p", {
                                        className: "fs-4",
                                        children: ["Let this stats tell you more about how", " ", (0, X.jsx)("span", {
                                            className: "text-primary",
                                            children: "Komodo"
                                        }), " team have done for its users."]
                                    }), (0, X.jsxs)("div", {
                                        className: "row my-4",
                                        children: [(0, X.jsxs)("div", {
                                            className: "col-4",
                                            children: [(0, X.jsx)("h1", {
                                                children: "100%"
                                            }), (0, X.jsx)("p", {
                                                className: "fs-5 fw-bold",
                                                children: "Satisfaction"
                                            })]
                                        }), (0, X.jsxs)("div", {
                                            className: "col-4",
                                            children: [(0, X.jsx)("h1", {
                                                id: "device"
                                            }), (0, X.jsx)("p", {
                                                className: "fs-5 fw-bold",
                                                children: "Devices"
                                            })]
                                        }), (0, X.jsxs)("div", {
                                            className: "col-4",
                                            children: [(0, X.jsxs)("h1", {
                                                children: [(0, X.jsx)("span", {
                                                    id: "download"
                                                }), "+"]
                                            }), (0, X.jsx)("p", {
                                                className: "fs-5 fw-bold",
                                                children: "Downloads"
                                            })]
                                        })]
                                    })]
                                })
                            }), (0, X.jsx)("div", {
                                className: "col d-lg-flex d-none",
                                "data-aos": "fade-left",
                                children: (0, X.jsx)("img", {
                                    src: ue,
                                    alt: "Download",
                                    className: "img-fluid m-auto",
                                    draggable: "false"
                                })
                            })]
                        })
                    })
                }), (0, X.jsx)("img", {
                    className: "shape-divider",
                    src: re,
                    draggable: "false"
                }), (0, X.jsx)("section", {
                    id: "section-5",
                    className: "pb-5",
                    style: {
                        backgroundColor: "#E6E8EB"
                    },
                    children: (0, X.jsxs)("div", {
                        className: "container pb-5",
                        children: [(0, X.jsx)("div", {
                            id: "donate"
                        }), (0, X.jsxs)("div", {
                            id: "final-section",
                            className: "mt-0 pt-5 text-center",
                            children: [(0, X.jsx)("p", {
                                className: "h1 mb-4",
                                children: "That's all for now, let's get started!"
                            }), (0, X.jsx)(Q, {
                                to: "/download",
                                className: "btn btn-lg btn-primary fs-3 fw-light px-4",
                                onClick: function() {
                                    document.body.scrollTop = 0, document.documentElement.scrollTop = 0
                                },
                                children: "Download Now"
                            })]
                        })]
                    })
                })]
            })
        };
        var fe = function() {
                return (0, X.jsx)("section", {
                    style: {
                        minHeight: "100vh",
                        display: "flex"
                    },
                    children: (0, X.jsxs)("div", {
                        className: "m-auto text-center",
                        children: [(0, X.jsx)("h1", {
                            style: {
                                fontSize: "12em",
                                marginBottom: 0
                            },
                            className: "text-primary",
                            children: "404"
                        }), (0, X.jsx)("p", {
                            className: "display-5",
                            children: "Page Not Found"
                        }), (0, X.jsx)("a", {
                            href: "/",
                            className: "btn btn-large btn-primary mt-4 p-2 px-3 fs-3",
                            children: "Go Home"
                        })]
                    })
                })
            },
            he = n(945),
            me = n.n(he);
        var pe = function() {
                return (0, e.useEffect)((function() {
                    me().init({
                            duration: 600,
                            once: !0
                        }), me().refresh(),
                        function() {
                            var e = document.getElementById("download"),
                                t = new Date,
                                n = t.getFullYear(),
                                r = t.getMonth(),
                                a = t.getDate();
                            fetch("https://sourceforge.net/projects/komodos-rom/files/stats/json?start_date=2019-10-11&end_date=".concat(n, "-").concat(r, "-").concat(a, "&os_by_country=false&period=monthly"), {
                                method: "GET"
                            }).then((function(e) {
                                return e.json()
                            })).then((function(t) {
                                e.appendChild(document.createTextNode("".concat(t.summaries.time.downloads)))
                            })).catch((function(e) {
                                return console.log("error", e)
                            }));
                            var l = document.getElementById("device");
                            fetch("https://raw.githubusercontent.com/Komodo-OS/official-devices/12/komodo.devices", {
                                method: "GET"
                            }).then((function(e) {
                                return e.text()
                            })).then((function(e) {
                                var t = e.split(/\r\n|\r|\n/).length;
                                l.appendChild(document.createTextNode("".concat(t - 1)))
                            })).catch((function(e) {
                                return console.log("error", e)
                            }))
                        }(), setTimeout((function() {
                            document.getElementById("preloader").classList.add("hide"), setTimeout((function() {
                                document.getElementById("preloader").classList.add("d-none")
                            }), 300)
                        }), 1e3)
                }), []), (0, X.jsx)("div", {
                    children: (0, X.jsxs)(K, {
                        children: [(0, X.jsx)("div", {
                            id: "preloader"
                        }), (0, X.jsx)(q, {}), (0, X.jsxs)(B, {
                            children: [(0, X.jsx)(F, {
                                path: "/",
                                element: (0, X.jsx)(de, {})
                            }), (0, X.jsx)(F, {
                                path: "/download",
                                element: (0, X.jsx)(J, {})
                            }), (0, X.jsx)(F, {
                                path: "/changelog",
                                element: (0, X.jsx)(le, {})
                            }), (0, X.jsx)(F, {
                                path: "/merch",
                                element: (0, X.jsx)(ee, {})
                            }), (0, X.jsx)(F, {
                                path: "/donate",
                                element: (0, X.jsx)(ae, {})
                            }), (0, X.jsx)(F, {
                                path: "/team",
                                element: (0, X.jsx)(ie, {})
                            }), (0, X.jsx)(F, {
                                path: "*",
                                element: (0, X.jsx)(fe, {})
                            })]
                        }), (0, X.jsx)(G, {})]
                    })
                })
            },
            ge = function(e) {
                e && e instanceof Function && n.e(787).then(n.bind(n, 787)).then((function(t) {
                    var n = t.getCLS,
                        r = t.getFID,
                        a = t.getFCP,
                        l = t.getLCP,
                        i = t.getTTFB;
                    n(e), r(e), a(e), l(e), i(e)
                }))
            };
        t.createRoot(document.getElementById("root")).render((0, X.jsx)(e.StrictMode, {
            children: (0, X.jsx)(pe, {})
        })), ge()
    }()
}();