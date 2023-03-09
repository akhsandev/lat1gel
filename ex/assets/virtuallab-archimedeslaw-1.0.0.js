/**
 * virtuallab-archimedeslaw - v1.0.0 - 2016-02-07
 * 
 *
 * Copyright (c) 2016 Tim Virtual Lab
 * Licensed Proprietary <>
 * 
 The function of education is to teach one to think intensively and to think critically. Intelligence plus character - that is the goal of true education.  - Martin Luther King, Jr. 
 */
! function(a, b, c) {
    "use strict";

    function d(a, b) {
        return b = b || Error,
            function() {
                var c, d, e = 2,
                    f = arguments,
                    g = f[0],
                    h = "[" + (a ? a + ":" : "") + g + "] ",
                    i = f[1];
                for (h += i.replace(/\{\d+\}/g, function(a) {
                        var b = +a.slice(1, -1),
                            c = b + e;
                        return c < f.length ? ta(f[c]) : a
                    }), h += "\nhttp://errors.angularjs.org/1.4.8/" + (a ? a + "/" : "") + g, d = e, c = "?"; d < f.length; d++, c = "&") h += c + "p" + (d - e) + "=" + encodeURIComponent(ta(f[d]));
                return new b(h)
            }
    }

    function e(a) {
        if (null == a || C(a)) return !1;
        if (Od(a) || x(a) || Cd && a instanceof Cd) return !0;
        var b = "length" in Object(a) && a.length;
        return y(b) && (b >= 0 && b - 1 in a || "function" == typeof a.item)
    }

    function f(a, b, c) {
        var d, g;
        if (a)
            if (A(a))
                for (d in a) "prototype" == d || "length" == d || "name" == d || a.hasOwnProperty && !a.hasOwnProperty(d) || b.call(c, a[d], d, a);
            else if (Od(a) || e(a)) {
            var h = "object" != typeof a;
            for (d = 0, g = a.length; g > d; d++)(h || d in a) && b.call(c, a[d], d, a)
        } else if (a.forEach && a.forEach !== f) a.forEach(b, c, a);
        else if (w(a))
            for (d in a) b.call(c, a[d], d, a);
        else if ("function" == typeof a.hasOwnProperty)
            for (d in a) a.hasOwnProperty(d) && b.call(c, a[d], d, a);
        else
            for (d in a) xd.call(a, d) && b.call(c, a[d], d, a);
        return a
    }

    function g(a, b, c) {
        for (var d = Object.keys(a).sort(), e = 0; e < d.length; e++) b.call(c, a[d[e]], d[e]);
        return d
    }

    function h(a) {
        return function(b, c) {
            a(c, b)
        }
    }

    function i() {
        return ++Md
    }

    function j(a, b) {
        b ? a.$$hashKey = b : delete a.$$hashKey
    }

    function k(a, b, c) {
        for (var d = a.$$hashKey, e = 0, f = b.length; f > e; ++e) {
            var g = b[e];
            if (v(g) || A(g))
                for (var h = Object.keys(g), i = 0, l = h.length; l > i; i++) {
                    var m = h[i],
                        n = g[m];
                    c && v(n) ? z(n) ? a[m] = new Date(n.valueOf()) : B(n) ? a[m] = new RegExp(n) : n.nodeName ? a[m] = n.cloneNode(!0) : K(n) ? a[m] = n.clone() : (v(a[m]) || (a[m] = Od(n) ? [] : {}), k(a[m], [n], !0)) : a[m] = n
                }
        }
        return j(a, d), a
    }

    function l(a) {
        return k(a, Fd.call(arguments, 1), !1)
    }

    function m(a) {
        return k(a, Fd.call(arguments, 1), !0)
    }

    function n(a) {
        return parseInt(a, 10)
    }

    function o(a, b) {
        return l(Object.create(a), b)
    }

    function p() {}

    function q(a) {
        return a
    }

    function r(a) {
        return function() {
            return a
        }
    }

    function s(a) {
        return A(a.toString) && a.toString !== Id
    }

    function t(a) {
        return "undefined" == typeof a
    }

    function u(a) {
        return "undefined" != typeof a
    }

    function v(a) {
        return null !== a && "object" == typeof a
    }

    function w(a) {
        return null !== a && "object" == typeof a && !Jd(a)
    }

    function x(a) {
        return "string" == typeof a
    }

    function y(a) {
        return "number" == typeof a
    }

    function z(a) {
        return "[object Date]" === Id.call(a)
    }

    function A(a) {
        return "function" == typeof a
    }

    function B(a) {
        return "[object RegExp]" === Id.call(a)
    }

    function C(a) {
        return a && a.window === a
    }

    function D(a) {
        return a && a.$evalAsync && a.$watch
    }

    function E(a) {
        return "[object File]" === Id.call(a)
    }

    function F(a) {
        return "[object FormData]" === Id.call(a)
    }

    function G(a) {
        return "[object Blob]" === Id.call(a)
    }

    function H(a) {
        return "boolean" == typeof a
    }

    function I(a) {
        return a && A(a.then)
    }

    function J(a) {
        return a && y(a.length) && Pd.test(Id.call(a))
    }

    function K(a) {
        return !(!a || !(a.nodeName || a.prop && a.attr && a.find))
    }

    function L(a) {
        var b, c = {},
            d = a.split(",");
        for (b = 0; b < d.length; b++) c[d[b]] = !0;
        return c
    }

    function M(a) {
        return wd(a.nodeName || a[0] && a[0].nodeName)
    }

    function N(a, b) {
        var c = a.indexOf(b);
        return c >= 0 && a.splice(c, 1), c
    }

    function O(a, b) {
        function c(a, b) {
            var c, e = b.$$hashKey;
            if (Od(a))
                for (var f = 0, g = a.length; g > f; f++) b.push(d(a[f]));
            else if (w(a))
                for (c in a) b[c] = d(a[c]);
            else if (a && "function" == typeof a.hasOwnProperty)
                for (c in a) a.hasOwnProperty(c) && (b[c] = d(a[c]));
            else
                for (c in a) xd.call(a, c) && (b[c] = d(a[c]));
            return j(b, e), b
        }

        function d(a) {
            if (!v(a)) return a;
            var b = e.indexOf(a);
            if (-1 !== b) return g[b];
            if (C(a) || D(a)) throw Kd("cpws", "Can't copy! Making copies of Window or Scope instances is not supported.");
            var d, f = !1;
            return Od(a) ? (d = [], f = !0) : J(a) ? d = new a.constructor(a) : z(a) ? d = new Date(a.getTime()) : B(a) ? (d = new RegExp(a.source, a.toString().match(/[^\/]*$/)[0]), d.lastIndex = a.lastIndex) : A(a.cloneNode) ? d = a.cloneNode(!0) : (d = Object.create(Jd(a)), f = !0), e.push(a), g.push(d), f ? c(a, d) : d
        }
        var e = [],
            g = [];
        if (b) {
            if (J(b)) throw Kd("cpta", "Can't copy! TypedArray destination cannot be mutated.");
            if (a === b) throw Kd("cpi", "Can't copy! Source and destination are identical.");
            return Od(b) ? b.length = 0 : f(b, function(a, c) {
                "$$hashKey" !== c && delete b[c]
            }), e.push(a), g.push(b), c(a, b)
        }
        return d(a)
    }

    function P(a, b) {
        if (Od(a)) {
            b = b || [];
            for (var c = 0, d = a.length; d > c; c++) b[c] = a[c]
        } else if (v(a)) {
            b = b || {};
            for (var e in a)("$" !== e.charAt(0) || "$" !== e.charAt(1)) && (b[e] = a[e])
        }
        return b || a
    }

    function Q(a, b) {
        if (a === b) return !0;
        if (null === a || null === b) return !1;
        if (a !== a && b !== b) return !0;
        var c, d, e, f = typeof a,
            g = typeof b;
        if (f == g && "object" == f) {
            if (!Od(a)) {
                if (z(a)) return z(b) ? Q(a.getTime(), b.getTime()) : !1;
                if (B(a)) return B(b) ? a.toString() == b.toString() : !1;
                if (D(a) || D(b) || C(a) || C(b) || Od(b) || z(b) || B(b)) return !1;
                e = qa();
                for (d in a)
                    if ("$" !== d.charAt(0) && !A(a[d])) {
                        if (!Q(a[d], b[d])) return !1;
                        e[d] = !0
                    }
                for (d in b)
                    if (!(d in e) && "$" !== d.charAt(0) && u(b[d]) && !A(b[d])) return !1;
                return !0
            }
            if (!Od(b)) return !1;
            if ((c = a.length) == b.length) {
                for (d = 0; c > d; d++)
                    if (!Q(a[d], b[d])) return !1;
                return !0
            }
        }
        return !1
    }

    function R(a, b, c) {
        return a.concat(Fd.call(b, c))
    }

    function S(a, b) {
        return Fd.call(a, b || 0)
    }

    function T(a, b) {
        var c = arguments.length > 2 ? S(arguments, 2) : [];
        return !A(b) || b instanceof RegExp ? b : c.length ? function() {
            return arguments.length ? b.apply(a, R(c, arguments, 0)) : b.apply(a, c)
        } : function() {
            return arguments.length ? b.apply(a, arguments) : b.call(a)
        }
    }

    function U(a, d) {
        var e = d;
        return "string" == typeof a && "$" === a.charAt(0) && "$" === a.charAt(1) ? e = c : C(d) ? e = "$WINDOW" : d && b === d ? e = "$DOCUMENT" : D(d) && (e = "$SCOPE"), e
    }

    function V(a, b) {
        return "undefined" == typeof a ? c : (y(b) || (b = b ? 2 : null), JSON.stringify(a, U, b))
    }

    function W(a) {
        return x(a) ? JSON.parse(a) : a
    }

    function X(a, b) {
        var c = Date.parse("Jan 01, 1970 00:00:00 " + a) / 6e4;
        return isNaN(c) ? b : c
    }

    function Y(a, b) {
        return a = new Date(a.getTime()), a.setMinutes(a.getMinutes() + b), a
    }

    function Z(a, b, c) {
        c = c ? -1 : 1;
        var d = X(b, a.getTimezoneOffset());
        return Y(a, c * (d - a.getTimezoneOffset()))
    }

    function $(a) {
        a = Cd(a).clone();
        try {
            a.empty()
        } catch (b) {}
        var c = Cd("<div>").append(a).html();
        try {
            return a[0].nodeType === Zd ? wd(c) : c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(a, b) {
                return "<" + wd(b)
            })
        } catch (b) {
            return wd(c)
        }
    }

    function _(a) {
        try {
            return decodeURIComponent(a)
        } catch (b) {}
    }

    function aa(a) {
        var b = {};
        return f((a || "").split("&"), function(a) {
            var c, d, e;
            a && (d = a = a.replace(/\+/g, "%20"), c = a.indexOf("="), -1 !== c && (d = a.substring(0, c), e = a.substring(c + 1)), d = _(d), u(d) && (e = u(e) ? _(e) : !0, xd.call(b, d) ? Od(b[d]) ? b[d].push(e) : b[d] = [b[d], e] : b[d] = e))
        }), b
    }

    function ba(a) {
        var b = [];
        return f(a, function(a, c) {
            Od(a) ? f(a, function(a) {
                b.push(da(c, !0) + (a === !0 ? "" : "=" + da(a, !0)))
            }) : b.push(da(c, !0) + (a === !0 ? "" : "=" + da(a, !0)))
        }), b.length ? b.join("&") : ""
    }

    function ca(a) {
        return da(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
    }

    function da(a, b) {
        return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, b ? "%20" : "+")
    }

    function ea(a, b) {
        var c, d, e = Ud.length;
        for (d = 0; e > d; ++d)
            if (c = Ud[d] + b, x(c = a.getAttribute(c))) return c;
        return null
    }

    function fa(a, b) {
        var c, d, e = {};
        f(Ud, function(b) {
            var e = b + "app";
            !c && a.hasAttribute && a.hasAttribute(e) && (c = a, d = a.getAttribute(e))
        }), f(Ud, function(b) {
            var e, f = b + "app";
            !c && (e = a.querySelector("[" + f.replace(":", "\\:") + "]")) && (c = e, d = e.getAttribute(f))
        }), c && (e.strictDi = null !== ea(c, "strict-di"), b(c, d ? [d] : [], e))
    }

    function ga(c, d, e) {
        v(e) || (e = {});
        var g = {
            strictDi: !1
        };
        e = l(g, e);
        var h = function() {
                if (c = Cd(c), c.injector()) {
                    var a = c[0] === b ? "document" : $(c);
                    throw Kd("btstrpd", "App Already Bootstrapped with this Element '{0}'", a.replace(/</, "&lt;").replace(/>/, "&gt;"))
                }
                d = d || [], d.unshift(["$provide", function(a) {
                    a.value("$rootElement", c)
                }]), e.debugInfoEnabled && d.push(["$compileProvider", function(a) {
                    a.debugInfoEnabled(!0)
                }]), d.unshift("ng");
                var f = ab(d, e.strictDi);
                return f.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function(a, b, c, d) {
                    a.$apply(function() {
                        b.data("$injector", d), c(b)(a)
                    })
                }]), f
            },
            i = /^NG_ENABLE_DEBUG_INFO!/,
            j = /^NG_DEFER_BOOTSTRAP!/;
        return a && i.test(a.name) && (e.debugInfoEnabled = !0, a.name = a.name.replace(i, "")), a && !j.test(a.name) ? h() : (a.name = a.name.replace(j, ""), Ld.resumeBootstrap = function(a) {
            return f(a, function(a) {
                d.push(a)
            }), h()
        }, void(A(Ld.resumeDeferredBootstrap) && Ld.resumeDeferredBootstrap()))
    }

    function ha() {
        a.name = "NG_ENABLE_DEBUG_INFO!" + a.name, a.location.reload()
    }

    function ia(a) {
        var b = Ld.element(a).injector();
        if (!b) throw Kd("test", "no injector found for element argument to getTestability");
        return b.get("$$testability")
    }

    function ja(a, b) {
        return b = b || "_", a.replace(Vd, function(a, c) {
            return (c ? b : "") + a.toLowerCase()
        })
    }

    function ka() {
        var b;
        if (!Wd) {
            var d = Td();
            Dd = t(d) ? a.jQuery : d ? a[d] : c, Dd && Dd.fn.on ? (Cd = Dd, l(Dd.fn, {
                scope: qe.scope,
                isolateScope: qe.isolateScope,
                controller: qe.controller,
                injector: qe.injector,
                inheritedData: qe.inheritedData
            }), b = Dd.cleanData, Dd.cleanData = function(a) {
                var c;
                if (Nd) Nd = !1;
                else
                    for (var d, e = 0; null != (d = a[e]); e++) c = Dd._data(d, "events"), c && c.$destroy && Dd(d).triggerHandler("$destroy");
                b(a)
            }) : Cd = Ca, Ld.element = Cd, Wd = !0
        }
    }

    function la(a, b, c) {
        if (!a) throw Kd("areq", "Argument '{0}' is {1}", b || "?", c || "required");
        return a
    }

    function ma(a, b, c) {
        return c && Od(a) && (a = a[a.length - 1]), la(A(a), b, "not a function, got " + (a && "object" == typeof a ? a.constructor.name || "Object" : typeof a)), a
    }

    function na(a, b) {
        if ("hasOwnProperty" === a) throw Kd("badname", "hasOwnProperty is not a valid {0} name", b)
    }

    function oa(a, b, c) {
        if (!b) return a;
        for (var d, e = b.split("."), f = a, g = e.length, h = 0; g > h; h++) d = e[h], a && (a = (f = a)[d]);
        return !c && A(a) ? T(f, a) : a
    }

    function pa(a) {
        for (var b, c = a[0], d = a[a.length - 1], e = 1; c !== d && (c = c.nextSibling); e++)(b || a[e] !== c) && (b || (b = Cd(Fd.call(a, 0, e))), b.push(c));
        return b || a
    }

    function qa() {
        return Object.create(null)
    }

    function ra(a) {
        function b(a, b, c) {
            return a[b] || (a[b] = c())
        }
        var c = d("$injector"),
            e = d("ng"),
            f = b(a, "angular", Object);
        return f.$$minErr = f.$$minErr || d, b(f, "module", function() {
            var a = {};
            return function(d, f, g) {
                var h = function(a, b) {
                    if ("hasOwnProperty" === a) throw e("badname", "hasOwnProperty is not a valid {0} name", b)
                };
                return h(d, "module"), f && a.hasOwnProperty(d) && (a[d] = null), b(a, d, function() {
                    function a(a, b, c, d) {
                        return d || (d = e),
                            function() {
                                return d[c || "push"]([a, b, arguments]), k
                            }
                    }

                    function b(a, b) {
                        return function(c, f) {
                            return f && A(f) && (f.$$moduleName = d), e.push([a, b, arguments]), k
                        }
                    }
                    if (!f) throw c("nomod", "Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.", d);
                    var e = [],
                        h = [],
                        i = [],
                        j = a("$injector", "invoke", "push", h),
                        k = {
                            _invokeQueue: e,
                            _configBlocks: h,
                            _runBlocks: i,
                            requires: f,
                            name: d,
                            provider: b("$provide", "provider"),
                            factory: b("$provide", "factory"),
                            service: b("$provide", "service"),
                            value: a("$provide", "value"),
                            constant: a("$provide", "constant", "unshift"),
                            decorator: b("$provide", "decorator"),
                            animation: b("$animateProvider", "register"),
                            filter: b("$filterProvider", "register"),
                            controller: b("$controllerProvider", "register"),
                            directive: b("$compileProvider", "directive"),
                            config: j,
                            run: function(a) {
                                return i.push(a), this
                            }
                        };
                    return g && j(g), k
                })
            }
        })
    }

    function sa(a) {
        var b = [];
        return JSON.stringify(a, function(a, c) {
            if (c = U(a, c), v(c)) {
                if (b.indexOf(c) >= 0) return "...";
                b.push(c)
            }
            return c
        })
    }

    function ta(a) {
        return "function" == typeof a ? a.toString().replace(/ \{[\s\S]*$/, "") : t(a) ? "undefined" : "string" != typeof a ? sa(a) : a
    }

    function ua(b) {
        l(b, {
            bootstrap: ga,
            copy: O,
            extend: l,
            merge: m,
            equals: Q,
            element: Cd,
            forEach: f,
            injector: ab,
            noop: p,
            bind: T,
            toJson: V,
            fromJson: W,
            identity: q,
            isUndefined: t,
            isDefined: u,
            isString: x,
            isFunction: A,
            isObject: v,
            isNumber: y,
            isElement: K,
            isArray: Od,
            version: be,
            isDate: z,
            lowercase: wd,
            uppercase: yd,
            callbacks: {
                counter: 0
            },
            getTestability: ia,
            $$minErr: d,
            $$csp: Sd,
            reloadWithDebugInfo: ha
        }), (Ed = ra(a))("ng", ["ngLocale"], ["$provide", function(a) {
            a.provider({
                $$sanitizeUri: sc
            }), a.provider("$compile", kb).directive({
                a: rf,
                input: If,
                textarea: If,
                form: wf,
                script: Ag,
                select: Dg,
                style: Fg,
                option: Eg,
                ngBind: Lf,
                ngBindHtml: Nf,
                ngBindTemplate: Mf,
                ngClass: Pf,
                ngClassEven: Rf,
                ngClassOdd: Qf,
                ngCloak: Sf,
                ngController: Tf,
                ngForm: xf,
                ngHide: ug,
                ngIf: Wf,
                ngInclude: Xf,
                ngInit: Zf,
                ngNonBindable: lg,
                ngPluralize: pg,
                ngRepeat: qg,
                ngShow: tg,
                ngStyle: vg,
                ngSwitch: wg,
                ngSwitchWhen: xg,
                ngSwitchDefault: yg,
                ngOptions: og,
                ngTransclude: zg,
                ngModel: ig,
                ngList: $f,
                ngChange: Of,
                pattern: Hg,
                ngPattern: Hg,
                required: Gg,
                ngRequired: Gg,
                minlength: Jg,
                ngMinlength: Jg,
                maxlength: Ig,
                ngMaxlength: Ig,
                ngValue: Kf,
                ngModelOptions: kg
            }).directive({
                ngInclude: Yf
            }).directive(sf).directive(Uf), a.provider({
                $anchorScroll: bb,
                $animate: Fe,
                $animateCss: Ge,
                $$animateQueue: Ee,
                $$AnimateRunner: De,
                $browser: hb,
                $cacheFactory: ib,
                $controller: pb,
                $document: qb,
                $exceptionHandler: rb,
                $filter: Gc,
                $$forceReflow: Le,
                $interpolate: Fb,
                $interval: Gb,
                $http: Bb,
                $httpParamSerializer: tb,
                $httpParamSerializerJQLike: ub,
                $httpBackend: Db,
                $xhrFactory: Cb,
                $location: Ub,
                $log: Vb,
                $parse: mc,
                $rootScope: rc,
                $q: nc,
                $$q: oc,
                $sce: wc,
                $sceDelegate: vc,
                $sniffer: xc,
                $templateCache: jb,
                $templateRequest: yc,
                $$testability: zc,
                $timeout: Ac,
                $window: Dc,
                $$rAF: qc,
                $$jqLite: Xa,
                $$HashMap: ue,
                $$cookieReader: Fc
            })
        }])
    }

    function va() {
        return ++de
    }

    function wa(a) {
        return a.replace(ge, function(a, b, c, d) {
            return d ? c.toUpperCase() : c
        }).replace(he, "Moz$1")
    }

    function xa(a) {
        return !le.test(a)
    }

    function ya(a) {
        var b = a.nodeType;
        return b === Xd || !b || b === _d
    }

    function za(a) {
        for (var b in ce[a.ng339]) return !0;
        return !1
    }

    function Aa(a, b) {
        var c, d, e, g, h = b.createDocumentFragment(),
            i = [];
        if (xa(a)) i.push(b.createTextNode(a));
        else {
            for (c = c || h.appendChild(b.createElement("div")), d = (me.exec(a) || ["", ""])[1].toLowerCase(), e = oe[d] || oe._default, c.innerHTML = e[1] + a.replace(ne, "<$1></$2>") + e[2], g = e[0]; g--;) c = c.lastChild;
            i = R(i, c.childNodes), c = h.firstChild, c.textContent = ""
        }
        return h.textContent = "", h.innerHTML = "", f(i, function(a) {
            h.appendChild(a)
        }), h
    }

    function Ba(a, c) {
        c = c || b;
        var d;
        return (d = ke.exec(a)) ? [c.createElement(d[1])] : (d = Aa(a, c)) ? d.childNodes : []
    }

    function Ca(a) {
        if (a instanceof Ca) return a;
        var b;
        if (x(a) && (a = Qd(a), b = !0), !(this instanceof Ca)) {
            if (b && "<" != a.charAt(0)) throw je("nosel", "Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");
            return new Ca(a)
        }
        b ? Ma(this, Ba(a)) : Ma(this, a)
    }

    function Da(a) {
        return a.cloneNode(!0)
    }

    function Ea(a, b) {
        if (b || Ga(a), a.querySelectorAll)
            for (var c = a.querySelectorAll("*"), d = 0, e = c.length; e > d; d++) Ga(c[d])
    }

    function Fa(a, b, c, d) {
        if (u(d)) throw je("offargs", "jqLite#off() does not support the `selector` argument");
        var e = Ha(a),
            g = e && e.events,
            h = e && e.handle;
        if (h)
            if (b) {
                var i = function(b) {
                    var d = g[b];
                    u(c) && N(d || [], c), u(c) && d && d.length > 0 || (fe(a, b, h), delete g[b])
                };
                f(b.split(" "), function(a) {
                    i(a), ie[a] && i(ie[a])
                })
            } else
                for (b in g) "$destroy" !== b && fe(a, b, h), delete g[b]
    }

    function Ga(a, b) {
        var d = a.ng339,
            e = d && ce[d];
        if (e) {
            if (b) return void delete e.data[b];
            e.handle && (e.events.$destroy && e.handle({}, "$destroy"), Fa(a)), delete ce[d], a.ng339 = c
        }
    }

    function Ha(a, b) {
        var d = a.ng339,
            e = d && ce[d];
        return b && !e && (a.ng339 = d = va(), e = ce[d] = {
            events: {},
            data: {},
            handle: c
        }), e
    }

    function Ia(a, b, c) {
        if (ya(a)) {
            var d = u(c),
                e = !d && b && !v(b),
                f = !b,
                g = Ha(a, !e),
                h = g && g.data;
            if (d) h[b] = c;
            else {
                if (f) return h;
                if (e) return h && h[b];
                l(h, b)
            }
        }
    }

    function Ja(a, b) {
        return a.getAttribute ? (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + b + " ") > -1 : !1
    }

    function Ka(a, b) {
        b && a.setAttribute && f(b.split(" "), function(b) {
            a.setAttribute("class", Qd((" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + Qd(b) + " ", " ")))
        })
    }

    function La(a, b) {
        if (b && a.setAttribute) {
            var c = (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
            f(b.split(" "), function(a) {
                a = Qd(a), -1 === c.indexOf(" " + a + " ") && (c += a + " ")
            }), a.setAttribute("class", Qd(c))
        }
    }

    function Ma(a, b) {
        if (b)
            if (b.nodeType) a[a.length++] = b;
            else {
                var c = b.length;
                if ("number" == typeof c && b.window !== b) {
                    if (c)
                        for (var d = 0; c > d; d++) a[a.length++] = b[d]
                } else a[a.length++] = b
            }
    }

    function Na(a, b) {
        return Oa(a, "$" + (b || "ngController") + "Controller")
    }

    function Oa(a, b, c) {
        a.nodeType == _d && (a = a.documentElement);
        for (var d = Od(b) ? b : [b]; a;) {
            for (var e = 0, f = d.length; f > e; e++)
                if (u(c = Cd.data(a, d[e]))) return c;
            a = a.parentNode || a.nodeType === ae && a.host
        }
    }

    function Pa(a) {
        for (Ea(a, !0); a.firstChild;) a.removeChild(a.firstChild)
    }

    function Qa(a, b) {
        b || Ea(a);
        var c = a.parentNode;
        c && c.removeChild(a)
    }

    function Ra(b, c) {
        c = c || a, "complete" === c.document.readyState ? c.setTimeout(b) : Cd(c).on("load", b)
    }

    function Sa(a, b) {
        var c = re[b.toLowerCase()];
        return c && se[M(a)] && c
    }

    function Ta(a) {
        return te[a]
    }

    function Ua(a, b) {
        var c = function(c, d) {
            c.isDefaultPrevented = function() {
                return c.defaultPrevented
            };
            var e = b[d || c.type],
                f = e ? e.length : 0;
            if (f) {
                if (t(c.immediatePropagationStopped)) {
                    var g = c.stopImmediatePropagation;
                    c.stopImmediatePropagation = function() {
                        c.immediatePropagationStopped = !0, c.stopPropagation && c.stopPropagation(), g && g.call(c)
                    }
                }
                c.isImmediatePropagationStopped = function() {
                    return c.immediatePropagationStopped === !0
                };
                var h = e.specialHandlerWrapper || Va;
                f > 1 && (e = P(e));
                for (var i = 0; f > i; i++) c.isImmediatePropagationStopped() || h(a, c, e[i])
            }
        };
        return c.elem = a, c
    }

    function Va(a, b, c) {
        c.call(a, b)
    }

    function Wa(a, b, c) {
        var d = b.relatedTarget;
        (!d || d !== a && !pe.call(a, d)) && c.call(a, b)
    }

    function Xa() {
        this.$get = function() {
            return l(Ca, {
                hasClass: function(a, b) {
                    return a.attr && (a = a[0]), Ja(a, b)
                },
                addClass: function(a, b) {
                    return a.attr && (a = a[0]), La(a, b)
                },
                removeClass: function(a, b) {
                    return a.attr && (a = a[0]), Ka(a, b)
                }
            })
        }
    }

    function Ya(a, b) {
        var c = a && a.$$hashKey;
        if (c) return "function" == typeof c && (c = a.$$hashKey()), c;
        var d = typeof a;
        return c = "function" == d || "object" == d && null !== a ? a.$$hashKey = d + ":" + (b || i)() : d + ":" + a
    }

    function Za(a, b) {
        if (b) {
            var c = 0;
            this.nextUid = function() {
                return ++c
            }
        }
        f(a, this.put, this)
    }

    function $a(a) {
        var b = a.toString().replace(ye, ""),
            c = b.match(ve);
        return c ? "function(" + (c[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn"
    }

    function _a(a, b, c) {
        var d, e, g, h;
        if ("function" == typeof a) {
            if (!(d = a.$inject)) {
                if (d = [], a.length) {
                    if (b) throw x(c) && c || (c = a.name || $a(a)), ze("strictdi", "{0} is not using explicit annotation and cannot be invoked in strict mode", c);
                    e = a.toString().replace(ye, ""), g = e.match(ve), f(g[1].split(we), function(a) {
                        a.replace(xe, function(a, b, c) {
                            d.push(c)
                        })
                    })
                }
                a.$inject = d
            }
        } else Od(a) ? (h = a.length - 1, ma(a[h], "fn"), d = a.slice(0, h)) : ma(a, "fn", !0);
        return d
    }

    function ab(a, b) {
        function d(a) {
            return function(b, c) {
                return v(b) ? void f(b, h(a)) : a(b, c)
            }
        }

        function e(a, b) {
            if (na(a, "service"), (A(b) || Od(b)) && (b = y.instantiate(b)), !b.$get) throw ze("pget", "Provider '{0}' must define $get factory method.", a);
            return w[a + q] = b
        }

        function g(a, b) {
            return function() {
                var c = B.invoke(b, this);
                if (t(c)) throw ze("undef", "Provider '{0}' must return a value from $get factory method.", a);
                return c
            }
        }

        function i(a, b, c) {
            return e(a, {
                $get: c !== !1 ? g(a, b) : b
            })
        }

        function j(a, b) {
            return i(a, ["$injector", function(a) {
                return a.instantiate(b)
            }])
        }

        function k(a, b) {
            return i(a, r(b), !1)
        }

        function l(a, b) {
            na(a, "constant"), w[a] = b, z[a] = b
        }

        function m(a, b) {
            var c = y.get(a + q),
                d = c.$get;
            c.$get = function() {
                var a = B.invoke(d, c);
                return B.invoke(b, null, {
                    $delegate: a
                })
            }
        }

        function n(a) {
            la(t(a) || Od(a), "modulesToLoad", "not an array");
            var b, c = [];
            return f(a, function(a) {
                function d(a) {
                    var b, c;
                    for (b = 0, c = a.length; c > b; b++) {
                        var d = a[b],
                            e = y.get(d[0]);
                        e[d[1]].apply(e, d[2])
                    }
                }
                if (!u.get(a)) {
                    u.put(a, !0);
                    try {
                        x(a) ? (b = Ed(a), c = c.concat(n(b.requires)).concat(b._runBlocks), d(b._invokeQueue), d(b._configBlocks)) : A(a) ? c.push(y.invoke(a)) : Od(a) ? c.push(y.invoke(a)) : ma(a, "module")
                    } catch (e) {
                        throw Od(a) && (a = a[a.length - 1]), e.message && e.stack && -1 == e.stack.indexOf(e.message) && (e = e.message + "\n" + e.stack), ze("modulerr", "Failed to instantiate module {0} due to:\n{1}", a, e.stack || e.message || e)
                    }
                }
            }), c
        }

        function o(a, c) {
            function d(b, d) {
                if (a.hasOwnProperty(b)) {
                    if (a[b] === p) throw ze("cdep", "Circular dependency found: {0}", b + " <- " + s.join(" <- "));
                    return a[b]
                }
                try {
                    return s.unshift(b), a[b] = p, a[b] = c(b, d)
                } catch (e) {
                    throw a[b] === p && delete a[b], e
                } finally {
                    s.shift()
                }
            }

            function e(a, c, e, f) {
                "string" == typeof e && (f = e, e = null);
                var g, h, i, j = [],
                    k = ab.$$annotate(a, b, f);
                for (h = 0, g = k.length; g > h; h++) {
                    if (i = k[h], "string" != typeof i) throw ze("itkn", "Incorrect injection token! Expected service name as string, got {0}", i);
                    j.push(e && e.hasOwnProperty(i) ? e[i] : d(i, f))
                }
                return Od(a) && (a = a[g]), a.apply(c, j)
            }

            function f(a, b, c) {
                var d = Object.create((Od(a) ? a[a.length - 1] : a).prototype || null),
                    f = e(a, d, b, c);
                return v(f) || A(f) ? f : d
            }
            return {
                invoke: e,
                instantiate: f,
                get: d,
                annotate: ab.$$annotate,
                has: function(b) {
                    return w.hasOwnProperty(b + q) || a.hasOwnProperty(b)
                }
            }
        }
        b = b === !0;
        var p = {},
            q = "Provider",
            s = [],
            u = new Za([], !0),
            w = {
                $provide: {
                    provider: d(e),
                    factory: d(i),
                    service: d(j),
                    value: d(k),
                    constant: d(l),
                    decorator: m
                }
            },
            y = w.$injector = o(w, function(a, b) {
                throw Ld.isString(b) && s.push(b), ze("unpr", "Unknown provider: {0}", s.join(" <- "))
            }),
            z = {},
            B = z.$injector = o(z, function(a, b) {
                var d = y.get(a + q, b);
                return B.invoke(d.$get, d, c, a)
            });
        return f(n(a), function(a) {
            a && B.invoke(a)
        }), B
    }

    function bb() {
        var a = !0;
        this.disableAutoScrolling = function() {
            a = !1
        }, this.$get = ["$window", "$location", "$rootScope", function(b, c, d) {
            function e(a) {
                var b = null;
                return Array.prototype.some.call(a, function(a) {
                    return "a" === M(a) ? (b = a, !0) : void 0
                }), b
            }

            function f() {
                var a = h.yOffset;
                if (A(a)) a = a();
                else if (K(a)) {
                    var c = a[0],
                        d = b.getComputedStyle(c);
                    a = "fixed" !== d.position ? 0 : c.getBoundingClientRect().bottom
                } else y(a) || (a = 0);
                return a
            }

            function g(a) {
                if (a) {
                    a.scrollIntoView();
                    var c = f();
                    if (c) {
                        var d = a.getBoundingClientRect().top;
                        b.scrollBy(0, d - c)
                    }
                } else b.scrollTo(0, 0)
            }

            function h(a) {
                a = x(a) ? a : c.hash();
                var b;
                a ? (b = i.getElementById(a)) ? g(b) : (b = e(i.getElementsByName(a))) ? g(b) : "top" === a && g(null) : g(null)
            }
            var i = b.document;
            return a && d.$watch(function() {
                return c.hash()
            }, function(a, b) {
                (a !== b || "" !== a) && Ra(function() {
                    d.$evalAsync(h)
                })
            }), h
        }]
    }

    function cb(a, b) {
        return a || b ? a ? b ? (Od(a) && (a = a.join(" ")), Od(b) && (b = b.join(" ")), a + " " + b) : a : b : ""
    }

    function db(a) {
        for (var b = 0; b < a.length; b++) {
            var c = a[b];
            if (c.nodeType === Be) return c
        }
    }

    function eb(a) {
        x(a) && (a = a.split(" "));
        var b = qa();
        return f(a, function(a) {
            a.length && (b[a] = !0)
        }), b
    }

    function fb(a) {
        return v(a) ? a : {}
    }

    function gb(a, b, c, d) {
        function e(a) {
            try {
                a.apply(null, S(arguments, 1))
            } finally {
                if (s--, 0 === s)
                    for (; u.length;) try {
                        u.pop()()
                    } catch (b) {
                        c.error(b)
                    }
            }
        }

        function g(a) {
            var b = a.indexOf("#");
            return -1 === b ? "" : a.substr(b)
        }

        function h() {
            z = null, j(), k()
        }

        function i() {
            try {
                return n.state
            } catch (a) {}
        }

        function j() {
            v = i(), v = t(v) ? null : v, Q(v, C) && (v = C), C = v
        }

        function k() {
            (x !== l.url() || w !== v) && (x = l.url(), w = v, f(A, function(a) {
                a(l.url(), v)
            }))
        }
        var l = this,
            m = (b[0], a.location),
            n = a.history,
            o = a.setTimeout,
            q = a.clearTimeout,
            r = {};
        l.isMock = !1;
        var s = 0,
            u = [];
        l.$$completeOutstandingRequest = e, l.$$incOutstandingRequestCount = function() {
            s++
        }, l.notifyWhenNoOutstandingRequests = function(a) {
            0 === s ? a() : u.push(a)
        };
        var v, w, x = m.href,
            y = b.find("base"),
            z = null;
        j(), w = v, l.url = function(b, c, e) {
            if (t(e) && (e = null), m !== a.location && (m = a.location), n !== a.history && (n = a.history), b) {
                var f = w === e;
                if (x === b && (!d.history || f)) return l;
                var h = x && Lb(x) === Lb(b);
                return x = b, w = e, !d.history || h && f ? ((!h || z) && (z = b), c ? m.replace(b) : h ? m.hash = g(b) : m.href = b, m.href !== b && (z = b)) : (n[c ? "replaceState" : "pushState"](e, "", b), j(), w = v), l
            }
            return z || m.href.replace(/%27/g, "'")
        }, l.state = function() {
            return v
        };
        var A = [],
            B = !1,
            C = null;
        l.onUrlChange = function(b) {
            return B || (d.history && Cd(a).on("popstate", h), Cd(a).on("hashchange", h), B = !0), A.push(b), b
        }, l.$$applicationDestroyed = function() {
            Cd(a).off("hashchange popstate", h)
        }, l.$$checkUrlChange = k, l.baseHref = function() {
            var a = y.attr("href");
            return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
        }, l.defer = function(a, b) {
            var c;
            return s++, c = o(function() {
                delete r[c], e(a)
            }, b || 0), r[c] = !0, c
        }, l.defer.cancel = function(a) {
            return r[a] ? (delete r[a], q(a), e(p), !0) : !1
        }
    }

    function hb() {
        this.$get = ["$window", "$log", "$sniffer", "$document", function(a, b, c, d) {
            return new gb(a, d, b, c)
        }]
    }

    function ib() {
        this.$get = function() {
            function a(a, c) {
                function e(a) {
                    a != m && (n ? n == a && (n = a.n) : n = a, f(a.n, a.p), f(a, m), m = a, m.n = null)
                }

                function f(a, b) {
                    a != b && (a && (a.p = b), b && (b.n = a))
                }
                if (a in b) throw d("$cacheFactory")("iid", "CacheId '{0}' is already taken!", a);
                var g = 0,
                    h = l({}, c, {
                        id: a
                    }),
                    i = qa(),
                    j = c && c.capacity || Number.MAX_VALUE,
                    k = qa(),
                    m = null,
                    n = null;
                return b[a] = {
                    put: function(a, b) {
                        if (!t(b)) {
                            if (j < Number.MAX_VALUE) {
                                var c = k[a] || (k[a] = {
                                    key: a
                                });
                                e(c)
                            }
                            return a in i || g++, i[a] = b, g > j && this.remove(n.key), b
                        }
                    },
                    get: function(a) {
                        if (j < Number.MAX_VALUE) {
                            var b = k[a];
                            if (!b) return;
                            e(b)
                        }
                        return i[a]
                    },
                    remove: function(a) {
                        if (j < Number.MAX_VALUE) {
                            var b = k[a];
                            if (!b) return;
                            b == m && (m = b.p), b == n && (n = b.n), f(b.n, b.p), delete k[a]
                        }
                        a in i && (delete i[a], g--)
                    },
                    removeAll: function() {
                        i = qa(), g = 0, k = qa(), m = n = null
                    },
                    destroy: function() {
                        i = null, h = null, k = null, delete b[a]
                    },
                    info: function() {
                        return l({}, h, {
                            size: g
                        })
                    }
                }
            }
            var b = {};
            return a.info = function() {
                var a = {};
                return f(b, function(b, c) {
                    a[c] = b.info()
                }), a
            }, a.get = function(a) {
                return b[a]
            }, a
        }
    }

    function jb() {
        this.$get = ["$cacheFactory", function(a) {
            return a("templates")
        }]
    }

    function kb(a, d) {
        function e(a, b, c) {
            var d = /^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,
                e = {};
            return f(a, function(a, f) {
                var g = a.match(d);
                if (!g) throw He("iscp", "Invalid {3} for directive '{0}'. Definition: {... {1}: '{2}' ...}", b, f, a, c ? "controller bindings definition" : "isolate scope definition");
                e[f] = {
                    mode: g[1][0],
                    collection: "*" === g[2],
                    optional: "?" === g[3],
                    attrName: g[4] || f
                }
            }), e
        }

        function g(a, b) {
            var c = {
                isolateScope: null,
                bindToController: null
            };
            if (v(a.scope) && (a.bindToController === !0 ? (c.bindToController = e(a.scope, b, !0), c.isolateScope = {}) : c.isolateScope = e(a.scope, b, !1)), v(a.bindToController) && (c.bindToController = e(a.bindToController, b, !0)), v(c.bindToController)) {
                var d = a.controller,
                    f = a.controllerAs;
                if (!d) throw He("noctrl", "Cannot bind to controller without directive '{0}'s controller.", b);
                if (!ob(d, f)) throw He("noident", "Cannot bind to controller without identifier for directive '{0}'.", b)
            }
            return c
        }

        function i(a) {
            var b = a.charAt(0);
            if (!b || b !== wd(b)) throw He("baddir", "Directive name '{0}' is invalid. The first character must be a lowercase letter", a);
            if (a !== a.trim()) throw He("baddir", "Directive name '{0}' is invalid. The name should not contain leading or trailing whitespaces", a)
        }
        var j = {},
            k = "Directive",
            m = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/,
            n = /(([\w\-]+)(?:\:([^;]+))?;?)/,
            s = L("ngSrc,ngSrcset,src,srcset"),
            w = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
            y = /^(on[a-z]+|formaction)$/;
        this.directive = function B(b, c) {
            return na(b, "directive"), x(b) ? (i(b), la(c, "directiveFactory"), j.hasOwnProperty(b) || (j[b] = [], a.factory(b + k, ["$injector", "$exceptionHandler", function(a, c) {
                var d = [];
                return f(j[b], function(e, f) {
                    try {
                        var h = a.invoke(e);
                        A(h) ? h = {
                            compile: r(h)
                        } : !h.compile && h.link && (h.compile = r(h.link)), h.priority = h.priority || 0, h.index = f, h.name = h.name || b, h.require = h.require || h.controller && h.name, h.restrict = h.restrict || "EA";
                        var i = h.$$bindings = g(h, h.name);
                        v(i.isolateScope) && (h.$$isolateBindings = i.isolateScope), h.$$moduleName = e.$$moduleName, d.push(h)
                    } catch (j) {
                        c(j)
                    }
                }), d
            }])), j[b].push(c)) : f(b, h(B)), this
        }, this.aHrefSanitizationWhitelist = function(a) {
            return u(a) ? (d.aHrefSanitizationWhitelist(a), this) : d.aHrefSanitizationWhitelist()
        }, this.imgSrcSanitizationWhitelist = function(a) {
            return u(a) ? (d.imgSrcSanitizationWhitelist(a), this) : d.imgSrcSanitizationWhitelist()
        };
        var z = !0;
        this.debugInfoEnabled = function(a) {
            return u(a) ? (z = a, this) : z
        }, this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function(a, d, e, g, h, i, r, u, B, C, E) {
            function F(a, b) {
                try {
                    a.addClass(b)
                } catch (c) {}
            }

            function G(a, b, c, d, e) {
                a instanceof Cd || (a = Cd(a)), f(a, function(b, c) {
                    b.nodeType == Zd && b.nodeValue.match(/\S+/) && (a[c] = Cd(b).wrap("<span></span>").parent()[0])
                });
                var g = I(a, b, a, c, d, e);
                G.$$addScopeClass(a);
                var h = null;
                return function(b, c, d) {
                    la(b, "scope"), e && e.needsNewScope && (b = b.$parent.$new()), d = d || {};
                    var f = d.parentBoundTranscludeFn,
                        i = d.transcludeControllers,
                        j = d.futureParentElement;
                    f && f.$$boundTransclude && (f = f.$$boundTransclude), h || (h = H(j));
                    var k;
                    if (k = "html" !== h ? Cd(_(h, Cd("<div>").append(a).html())) : c ? qe.clone.call(a) : a, i)
                        for (var l in i) k.data("$" + l + "Controller", i[l].instance);
                    return G.$$addScopeInfo(k, b), c && c(k, b), g && g(b, k, k, f), k
                }
            }

            function H(a) {
                var b = a && a[0];
                return b && "foreignobject" !== M(b) && b.toString().match(/SVG/) ? "svg" : "html"
            }

            function I(a, b, d, e, f, g) {
                function h(a, d, e, f) {
                    var g, h, i, j, k, l, m, n, q;
                    if (o) {
                        var r = d.length;
                        for (q = new Array(r), k = 0; k < p.length; k += 3) m = p[k], q[m] = d[m]
                    } else q = d;
                    for (k = 0, l = p.length; l > k;) i = q[p[k++]], g = p[k++], h = p[k++], g ? (g.scope ? (j = a.$new(), G.$$addScopeInfo(Cd(i), j)) : j = a, n = g.transcludeOnThisElement ? J(a, g.transclude, f) : !g.templateOnThisElement && f ? f : !f && b ? J(a, b) : null, g(h, j, i, e, n)) : h && h(a, i.childNodes, c, f)
                }
                for (var i, j, k, l, m, n, o, p = [], q = 0; q < a.length; q++) i = new ga, j = K(a[q], [], i, 0 === q ? e : c, f), k = j.length ? P(j, a[q], i, b, d, null, [], [], g) : null, k && k.scope && G.$$addScopeClass(i.$$element), m = k && k.terminal || !(l = a[q].childNodes) || !l.length ? null : I(l, k ? (k.transcludeOnThisElement || !k.templateOnThisElement) && k.transclude : b), (k || m) && (p.push(q, k, m), n = !0, o = o || k), g = null;
                return n ? h : null
            }

            function J(a, b, c) {
                var d = function(d, e, f, g, h) {
                    return d || (d = a.$new(!1, h), d.$$transcluded = !0), b(d, e, {
                        parentBoundTranscludeFn: c,
                        transcludeControllers: f,
                        futureParentElement: g
                    })
                };
                return d
            }

            function K(a, b, c, d, e) {
                var f, g, h = a.nodeType,
                    i = c.$attr;
                switch (h) {
                    case Xd:
                        T(b, lb(M(a)), "E", d, e);
                        for (var j, k, l, o, p, q, r = a.attributes, s = 0, t = r && r.length; t > s; s++) {
                            var u = !1,
                                w = !1;
                            j = r[s], k = j.name, p = Qd(j.value), o = lb(k), (q = ma.test(o)) && (k = k.replace(Ie, "").substr(8).replace(/_(.)/g, function(a, b) {
                                return b.toUpperCase()
                            }));
                            var y = o.match(na);
                            y && U(y[1]) && (u = k, w = k.substr(0, k.length - 5) + "end", k = k.substr(0, k.length - 6)), l = lb(k.toLowerCase()), i[l] = k, (q || !c.hasOwnProperty(l)) && (c[l] = p, Sa(a, l) && (c[l] = !0)), ba(a, b, p, l, q), T(b, l, "A", d, e, u, w)
                        }
                        if (g = a.className, v(g) && (g = g.animVal), x(g) && "" !== g)
                            for (; f = n.exec(g);) l = lb(f[2]), T(b, l, "C", d, e) && (c[l] = Qd(f[3])), g = g.substr(f.index + f[0].length);
                        break;
                    case Zd:
                        if (11 === Bd)
                            for (; a.parentNode && a.nextSibling && a.nextSibling.nodeType === Zd;) a.nodeValue = a.nodeValue + a.nextSibling.nodeValue, a.parentNode.removeChild(a.nextSibling);
                        Z(b, a.nodeValue);
                        break;
                    case $d:
                        try {
                            f = m.exec(a.nodeValue), f && (l = lb(f[1]), T(b, l, "M", d, e) && (c[l] = Qd(f[2])))
                        } catch (z) {}
                }
                return b.sort(X), b
            }

            function L(a, b, c) {
                var d = [],
                    e = 0;
                if (b && a.hasAttribute && a.hasAttribute(b)) {
                    do {
                        if (!a) throw He("uterdir", "Unterminated attribute, found '{0}' but no matching '{1}' found.", b, c);
                        a.nodeType == Xd && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--), d.push(a), a = a.nextSibling
                    } while (e > 0)
                } else d.push(a);
                return Cd(d)
            }

            function O(a, b, c) {
                return function(d, e, f, g, h) {
                    return e = L(e[0], b, c), a(d, e, f, g, h)
                }
            }

            function P(a, d, f, g, h, j, k, l, m) {
                function n(a, b, c, d) {
                    a && (c && (a = O(a, c, d)), a.require = r.require, a.directiveName = s, (E === r || r.$$isolateScope) && (a = da(a, {
                        isolateScope: !0
                    })), k.push(a)), b && (c && (b = O(b, c, d)), b.require = r.require, b.directiveName = s, (E === r || r.$$isolateScope) && (b = da(b, {
                        isolateScope: !0
                    })), l.push(b))
                }

                function o(a, b, c, d) {
                    var e;
                    if (x(b)) {
                        var f = b.match(w),
                            g = b.substring(f[0].length),
                            h = f[1] || f[3],
                            i = "?" === f[2];
                        if ("^^" === h ? c = c.parent() : (e = d && d[g], e = e && e.instance), !e) {
                            var j = "$" + g + "Controller";
                            e = h ? c.inheritedData(j) : c.data(j)
                        }
                        if (!e && !i) throw He("ctreq", "Controller '{0}', required by directive '{1}', can't be found!", g, a)
                    } else if (Od(b)) {
                        e = [];
                        for (var k = 0, l = b.length; l > k; k++) e[k] = o(a, b[k], c, d)
                    }
                    return e || null
                }

                function p(a, b, c, d, e, f) {
                    var g = qa();
                    for (var h in d) {
                        var j = d[h],
                            k = {
                                $scope: j === E || j.$$isolateScope ? e : f,
                                $element: a,
                                $attrs: b,
                                $transclude: c
                            },
                            l = j.controller;
                        "@" == l && (l = b[j.name]);
                        var m = i(l, k, !0, j.controllerAs);
                        g[j.name] = m, M || a.data("$" + j.name + "Controller", m.instance)
                    }
                    return g
                }

                function q(a, b, e, g, h) {
                    function i(a, b, d) {
                        var e;
                        return D(a) || (d = b, b = a, a = c), M && (e = q), d || (d = M ? s.parent() : s), h(a, b, e, d, H)
                    }
                    var j, m, n, q, r, s, t, u, v;
                    d === e ? (t = f, s = f.$$element) : (s = Cd(e), t = new ga(s, f)), n = b, E ? m = b.$new(!0) : B && (n = b.$parent), h && (r = i, r.$$boundTransclude = h), C && (q = p(s, t, r, C, m, b)), E && (G.$$addScopeInfo(s, m, !0, !(F && (F === E || F === E.$$originalDirective))), G.$$addScopeClass(s, !0), m.$$isolateBindings = E.$$isolateBindings, u = fa(b, t, m, m.$$isolateBindings, E), u && m.$on("$destroy", u));
                    for (var w in q) {
                        var x = C[w],
                            y = q[w],
                            z = x.$$bindings.bindToController;
                        y.identifier && z && (v = fa(n, t, y.instance, z, x));
                        var A = y();
                        A !== y.instance && (y.instance = A, s.data("$" + x.name + "Controller", A), v && v(), v = fa(n, t, y.instance, z, x))
                    }
                    for (T = 0, U = k.length; U > T; T++) j = k[T], ea(j, j.isolateScope ? m : b, s, t, j.require && o(j.directiveName, j.require, s, q), r);
                    var H = b;
                    for (E && (E.template || null === E.templateUrl) && (H = m), a && a(H, e.childNodes, c, h), T = l.length - 1; T >= 0; T--) j = l[T], ea(j, j.isolateScope ? m : b, s, t, j.require && o(j.directiveName, j.require, s, q), r)
                }
                m = m || {};
                for (var r, s, t, u, y, z = -Number.MAX_VALUE, B = m.newScopeDirective, C = m.controllerDirectives, E = m.newIsolateScopeDirective, F = m.templateDirective, H = m.nonTlbTranscludeDirective, I = !1, J = !1, M = m.hasElementTranscludeDirective, N = f.$$element = Cd(d), P = j, Q = g, T = 0, U = a.length; U > T; T++) {
                    r = a[T];
                    var X = r.$$start,
                        Z = r.$$end;
                    if (X && (N = L(d, X, Z)), t = c, z > r.priority) break;
                    if ((y = r.scope) && (r.templateUrl || (v(y) ? (Y("new/isolated scope", E || B, r, N), E = r) : Y("new/isolated scope", E, r, N)),
                            B = B || r), s = r.name, !r.templateUrl && r.controller && (y = r.controller, C = C || qa(), Y("'" + s + "' controller", C[s], r, N), C[s] = r), (y = r.transclude) && (I = !0, r.$$tlb || (Y("transclusion", H, r, N), H = r), "element" == y ? (M = !0, z = r.priority, t = N, N = f.$$element = Cd(b.createComment(" " + s + ": " + f[s] + " ")), d = N[0], ca(h, S(t), d), Q = G(t, g, z, P && P.name, {
                            nonTlbTranscludeDirective: H
                        })) : (t = Cd(Da(d)).contents(), N.empty(), Q = G(t, g, c, c, {
                            needsNewScope: r.$$isolateScope || r.$$newScope
                        }))), r.template)
                        if (J = !0, Y("template", F, r, N), F = r, y = A(r.template) ? r.template(N, f) : r.template, y = ka(y), r.replace) {
                            if (P = r, t = xa(y) ? [] : nb(_(r.templateNamespace, Qd(y))), d = t[0], 1 != t.length || d.nodeType !== Xd) throw He("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", s, "");
                            ca(h, N, d);
                            var aa = {
                                    $attr: {}
                                },
                                ba = K(d, [], aa),
                                ha = a.splice(T + 1, a.length - (T + 1));
                            (E || B) && R(ba, E, B), a = a.concat(ba).concat(ha), V(f, aa), U = a.length
                        } else N.html(y);
                    if (r.templateUrl) J = !0, Y("template", F, r, N), F = r, r.replace && (P = r), q = W(a.splice(T, a.length - T), N, f, h, I && Q, k, l, {
                        controllerDirectives: C,
                        newScopeDirective: B !== r && B,
                        newIsolateScopeDirective: E,
                        templateDirective: F,
                        nonTlbTranscludeDirective: H
                    }), U = a.length;
                    else if (r.compile) try {
                        u = r.compile(N, f, Q), A(u) ? n(null, u, X, Z) : u && n(u.pre, u.post, X, Z)
                    } catch (ia) {
                        e(ia, $(N))
                    }
                    r.terminal && (q.terminal = !0, z = Math.max(z, r.priority))
                }
                return q.scope = B && B.scope === !0, q.transcludeOnThisElement = I, q.templateOnThisElement = J, q.transclude = Q, m.hasElementTranscludeDirective = M, q
            }

            function R(a, b, c) {
                for (var d = 0, e = a.length; e > d; d++) a[d] = o(a[d], {
                    $$isolateScope: b,
                    $$newScope: c
                })
            }

            function T(b, c, d, f, g, h, i) {
                if (c === g) return null;
                var l = null;
                if (j.hasOwnProperty(c))
                    for (var m, n = a.get(c + k), p = 0, q = n.length; q > p; p++) try {
                        m = n[p], (t(f) || f > m.priority) && -1 != m.restrict.indexOf(d) && (h && (m = o(m, {
                            $$start: h,
                            $$end: i
                        })), b.push(m), l = m)
                    } catch (r) {
                        e(r)
                    }
                return l
            }

            function U(b) {
                if (j.hasOwnProperty(b))
                    for (var c, d = a.get(b + k), e = 0, f = d.length; f > e; e++)
                        if (c = d[e], c.multiElement) return !0;
                return !1
            }

            function V(a, b) {
                var c = b.$attr,
                    d = a.$attr,
                    e = a.$$element;
                f(a, function(d, e) {
                    "$" != e.charAt(0) && (b[e] && b[e] !== d && (d += ("style" === e ? ";" : " ") + b[e]), a.$set(e, d, !0, c[e]))
                }), f(b, function(b, f) {
                    "class" == f ? (F(e, b), a["class"] = (a["class"] ? a["class"] + " " : "") + b) : "style" == f ? (e.attr("style", e.attr("style") + ";" + b), a.style = (a.style ? a.style + ";" : "") + b) : "$" == f.charAt(0) || a.hasOwnProperty(f) || (a[f] = b, d[f] = c[f])
                })
            }

            function W(a, b, c, d, e, h, i, j) {
                var k, l, m = [],
                    n = b[0],
                    p = a.shift(),
                    q = o(p, {
                        templateUrl: null,
                        transclude: null,
                        replace: null,
                        $$originalDirective: p
                    }),
                    r = A(p.templateUrl) ? p.templateUrl(b, c) : p.templateUrl,
                    s = p.templateNamespace;
                return b.empty(), g(r).then(function(g) {
                        var o, t, u, w;
                        if (g = ka(g), p.replace) {
                            if (u = xa(g) ? [] : nb(_(s, Qd(g))), o = u[0], 1 != u.length || o.nodeType !== Xd) throw He("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", p.name, r);
                            t = {
                                $attr: {}
                            }, ca(d, b, o);
                            var x = K(o, [], t);
                            v(p.scope) && R(x, !0), a = x.concat(a), V(c, t)
                        } else o = n, b.html(g);
                        for (a.unshift(q), k = P(a, o, c, e, b, p, h, i, j), f(d, function(a, c) {
                                a == o && (d[c] = b[0])
                            }), l = I(b[0].childNodes, e); m.length;) {
                            var y = m.shift(),
                                z = m.shift(),
                                A = m.shift(),
                                B = m.shift(),
                                C = b[0];
                            if (!y.$$destroyed) {
                                if (z !== n) {
                                    var D = z.className;
                                    j.hasElementTranscludeDirective && p.replace || (C = Da(o)), ca(A, Cd(z), C), F(Cd(C), D)
                                }
                                w = k.transcludeOnThisElement ? J(y, k.transclude, B) : B, k(l, y, C, d, w)
                            }
                        }
                        m = null
                    }),
                    function(a, b, c, d, e) {
                        var f = e;
                        b.$$destroyed || (m ? m.push(b, c, d, f) : (k.transcludeOnThisElement && (f = J(b, k.transclude, e)), k(l, b, c, d, f)))
                    }
            }

            function X(a, b) {
                var c = b.priority - a.priority;
                return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index
            }

            function Y(a, b, c, d) {
                function e(a) {
                    return a ? " (module: " + a + ")" : ""
                }
                if (b) throw He("multidir", "Multiple directives [{0}{1}, {2}{3}] asking for {4} on: {5}", b.name, e(b.$$moduleName), c.name, e(c.$$moduleName), a, $(d))
            }

            function Z(a, b) {
                var c = d(b, !0);
                c && a.push({
                    priority: 0,
                    compile: function(a) {
                        var b = a.parent(),
                            d = !!b.length;
                        return d && G.$$addBindingClass(b),
                            function(a, b) {
                                var e = b.parent();
                                d || G.$$addBindingClass(e), G.$$addBindingInfo(e, c.expressions), a.$watch(c, function(a) {
                                    b[0].nodeValue = a
                                })
                            }
                    }
                })
            }

            function _(a, c) {
                switch (a = wd(a || "html")) {
                    case "svg":
                    case "math":
                        var d = b.createElement("div");
                        return d.innerHTML = "<" + a + ">" + c + "</" + a + ">", d.childNodes[0].childNodes;
                    default:
                        return c
                }
            }

            function aa(a, b) {
                if ("srcdoc" == b) return B.HTML;
                var c = M(a);
                return "xlinkHref" == b || "form" == c && "action" == b || "img" != c && ("src" == b || "ngSrc" == b) ? B.RESOURCE_URL : void 0
            }

            function ba(a, b, c, e, f) {
                var g = aa(a, e);
                f = s[e] || f;
                var h = d(c, !0, g, f);
                if (h) {
                    if ("multiple" === e && "select" === M(a)) throw He("selmulti", "Binding to the 'multiple' attribute is not supported. Element: {0}", $(a));
                    b.push({
                        priority: 100,
                        compile: function() {
                            return {
                                pre: function(a, b, i) {
                                    var j = i.$$observers || (i.$$observers = qa());
                                    if (y.test(e)) throw He("nodomevents", "Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.");
                                    var k = i[e];
                                    k !== c && (h = k && d(k, !0, g, f), c = k), h && (i[e] = h(a), (j[e] || (j[e] = [])).$$inter = !0, (i.$$observers && i.$$observers[e].$$scope || a).$watch(h, function(a, b) {
                                        "class" === e && a != b ? i.$updateClass(a, b) : i.$set(e, a)
                                    }))
                                }
                            }
                        }
                    })
                }
            }

            function ca(a, c, d) {
                var e, f, g = c[0],
                    h = c.length,
                    i = g.parentNode;
                if (a)
                    for (e = 0, f = a.length; f > e; e++)
                        if (a[e] == g) {
                            a[e++] = d;
                            for (var j = e, k = j + h - 1, l = a.length; l > j; j++, k++) l > k ? a[j] = a[k] : delete a[j];
                            a.length -= h - 1, a.context === g && (a.context = d);
                            break
                        }
                i && i.replaceChild(d, g);
                var m = b.createDocumentFragment();
                m.appendChild(g), Cd.hasData(g) && (Cd.data(d, Cd.data(g)), Dd ? (Nd = !0, Dd.cleanData([g])) : delete Cd.cache[g[Cd.expando]]);
                for (var n = 1, o = c.length; o > n; n++) {
                    var p = c[n];
                    Cd(p).remove(), m.appendChild(p), delete c[n]
                }
                c[0] = d, c.length = 1
            }

            function da(a, b) {
                return l(function() {
                    return a.apply(null, arguments)
                }, a, b)
            }

            function ea(a, b, c, d, f, g) {
                try {
                    a(b, c, d, f, g)
                } catch (h) {
                    e(h, $(c))
                }
            }

            function fa(a, b, c, e, g) {
                var i = [];
                return f(e, function(e, f) {
                    var j, k, l, m, n = e.attrName,
                        o = e.optional,
                        q = e.mode;
                    switch (q) {
                        case "@":
                            o || xd.call(b, n) || (c[f] = b[n] = void 0), b.$observe(n, function(a) {
                                x(a) && (c[f] = a)
                            }), b.$$observers[n].$$scope = a, x(b[n]) && (c[f] = d(b[n])(a));
                            break;
                        case "=":
                            if (!xd.call(b, n)) {
                                if (o) break;
                                b[n] = void 0
                            }
                            if (o && !b[n]) break;
                            k = h(b[n]), m = k.literal ? Q : function(a, b) {
                                return a === b || a !== a && b !== b
                            }, l = k.assign || function() {
                                throw j = c[f] = k(a), He("nonassign", "Expression '{0}' used with directive '{1}' is non-assignable!", b[n], g.name)
                            }, j = c[f] = k(a);
                            var r = function(b) {
                                return m(b, c[f]) || (m(b, j) ? l(a, b = c[f]) : c[f] = b), j = b
                            };
                            r.$stateful = !0;
                            var s;
                            s = e.collection ? a.$watchCollection(b[n], r) : a.$watch(h(b[n], r), null, k.literal), i.push(s);
                            break;
                        case "&":
                            if (k = b.hasOwnProperty(n) ? h(b[n]) : p, k === p && o) break;
                            c[f] = function(b) {
                                return k(a, b)
                            }
                    }
                }), i.length && function() {
                    for (var a = 0, b = i.length; b > a; ++a) i[a]()
                }
            }
            var ga = function(a, b) {
                if (b) {
                    var c, d, e, f = Object.keys(b);
                    for (c = 0, d = f.length; d > c; c++) e = f[c], this[e] = b[e]
                } else this.$attr = {};
                this.$$element = a
            };
            ga.prototype = {
                $normalize: lb,
                $addClass: function(a) {
                    a && a.length > 0 && C.addClass(this.$$element, a)
                },
                $removeClass: function(a) {
                    a && a.length > 0 && C.removeClass(this.$$element, a)
                },
                $updateClass: function(a, b) {
                    var c = mb(a, b);
                    c && c.length && C.addClass(this.$$element, c);
                    var d = mb(b, a);
                    d && d.length && C.removeClass(this.$$element, d)
                },
                $set: function(a, b, c, d) {
                    var g, h = this.$$element[0],
                        i = Sa(h, a),
                        j = Ta(a),
                        k = a;
                    if (i ? (this.$$element.prop(a, b), d = i) : j && (this[j] = b, k = j), this[a] = b, d ? this.$attr[a] = d : (d = this.$attr[a], d || (this.$attr[a] = d = ja(a, "-"))), g = M(this.$$element), "a" === g && "href" === a || "img" === g && "src" === a) this[a] = b = E(b, "src" === a);
                    else if ("img" === g && "srcset" === a) {
                        for (var l = "", m = Qd(b), n = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, o = /\s/.test(m) ? n : /(,)/, p = m.split(o), q = Math.floor(p.length / 2), r = 0; q > r; r++) {
                            var s = 2 * r;
                            l += E(Qd(p[s]), !0), l += " " + Qd(p[s + 1])
                        }
                        var u = Qd(p[2 * r]).split(/\s/);
                        l += E(Qd(u[0]), !0), 2 === u.length && (l += " " + Qd(u[1])), this[a] = b = l
                    }
                    c !== !1 && (null === b || t(b) ? this.$$element.removeAttr(d) : this.$$element.attr(d, b));
                    var v = this.$$observers;
                    v && f(v[k], function(a) {
                        try {
                            a(b)
                        } catch (c) {
                            e(c)
                        }
                    })
                },
                $observe: function(a, b) {
                    var c = this,
                        d = c.$$observers || (c.$$observers = qa()),
                        e = d[a] || (d[a] = []);
                    return e.push(b), r.$evalAsync(function() {
                            e.$$inter || !c.hasOwnProperty(a) || t(c[a]) || b(c[a])
                        }),
                        function() {
                            N(e, b)
                        }
                }
            };
            var ha = d.startSymbol(),
                ia = d.endSymbol(),
                ka = "{{" == ha || "}}" == ia ? q : function(a) {
                    return a.replace(/\{\{/g, ha).replace(/}}/g, ia)
                },
                ma = /^ngAttr[A-Z]/,
                na = /^(.+)Start$/;
            return G.$$addBindingInfo = z ? function(a, b) {
                var c = a.data("$binding") || [];
                Od(b) ? c = c.concat(b) : c.push(b), a.data("$binding", c)
            } : p, G.$$addBindingClass = z ? function(a) {
                F(a, "ng-binding")
            } : p, G.$$addScopeInfo = z ? function(a, b, c, d) {
                var e = c ? d ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope";
                a.data(e, b)
            } : p, G.$$addScopeClass = z ? function(a, b) {
                F(a, b ? "ng-isolate-scope" : "ng-scope")
            } : p, G
        }]
    }

    function lb(a) {
        return wa(a.replace(Ie, ""))
    }

    function mb(a, b) {
        var c = "",
            d = a.split(/\s+/),
            e = b.split(/\s+/);
        a: for (var f = 0; f < d.length; f++) {
            for (var g = d[f], h = 0; h < e.length; h++)
                if (g == e[h]) continue a;
            c += (c.length > 0 ? " " : "") + g
        }
        return c
    }

    function nb(a) {
        a = Cd(a);
        var b = a.length;
        if (1 >= b) return a;
        for (; b--;) {
            var c = a[b];
            c.nodeType === $d && Gd.call(a, b, 1)
        }
        return a
    }

    function ob(a, b) {
        if (b && x(b)) return b;
        if (x(a)) {
            var c = Ke.exec(a);
            if (c) return c[3]
        }
    }

    function pb() {
        var a = {},
            b = !1;
        this.register = function(b, c) {
            na(b, "controller"), v(b) ? l(a, b) : a[b] = c
        }, this.allowGlobals = function() {
            b = !0
        }, this.$get = ["$injector", "$window", function(e, f) {
            function g(a, b, c, e) {
                if (!a || !v(a.$scope)) throw d("$controller")("noscp", "Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.", e, b);
                a.$scope[b] = c
            }
            return function(d, h, i, j) {
                var k, m, n, o;
                if (i = i === !0, j && x(j) && (o = j), x(d)) {
                    if (m = d.match(Ke), !m) throw Je("ctrlfmt", "Badly formed controller string '{0}'. Must match `__name__ as __id__` or `__name__`.", d);
                    n = m[1], o = o || m[3], d = a.hasOwnProperty(n) ? a[n] : oa(h.$scope, n, !0) || (b ? oa(f, n, !0) : c), ma(d, n, !0)
                }
                if (i) {
                    var p = (Od(d) ? d[d.length - 1] : d).prototype;
                    k = Object.create(p || null), o && g(h, o, k, n || d.name);
                    var q;
                    return q = l(function() {
                        var a = e.invoke(d, k, h, n);
                        return a !== k && (v(a) || A(a)) && (k = a, o && g(h, o, k, n || d.name)), k
                    }, {
                        instance: k,
                        identifier: o
                    })
                }
                return k = e.instantiate(d, h, n), o && g(h, o, k, n || d.name), k
            }
        }]
    }

    function qb() {
        this.$get = ["$window", function(a) {
            return Cd(a.document)
        }]
    }

    function rb() {
        this.$get = ["$log", function(a) {
            return function(b, c) {
                a.error.apply(a, arguments)
            }
        }]
    }

    function sb(a) {
        return v(a) ? z(a) ? a.toISOString() : V(a) : a
    }

    function tb() {
        this.$get = function() {
            return function(a) {
                if (!a) return "";
                var b = [];
                return g(a, function(a, c) {
                    null === a || t(a) || (Od(a) ? f(a, function(a, d) {
                        b.push(da(c) + "=" + da(sb(a)))
                    }) : b.push(da(c) + "=" + da(sb(a))))
                }), b.join("&")
            }
        }
    }

    function ub() {
        this.$get = function() {
            return function(a) {
                function b(a, d, e) {
                    null === a || t(a) || (Od(a) ? f(a, function(a, c) {
                        b(a, d + "[" + (v(a) ? c : "") + "]")
                    }) : v(a) && !z(a) ? g(a, function(a, c) {
                        b(a, d + (e ? "" : "[") + c + (e ? "" : "]"))
                    }) : c.push(da(d) + "=" + da(sb(a))))
                }
                if (!a) return "";
                var c = [];
                return b(a, "", !0), c.join("&")
            }
        }
    }

    function vb(a, b) {
        if (x(a)) {
            var c = a.replace(Qe, "").trim();
            if (c) {
                var d = b("Content-Type");
                (d && 0 === d.indexOf(Me) || wb(c)) && (a = W(c))
            }
        }
        return a
    }

    function wb(a) {
        var b = a.match(Oe);
        return b && Pe[b[0]].test(a)
    }

    function xb(a) {
        function b(a, b) {
            a && (d[a] = d[a] ? d[a] + ", " + b : b)
        }
        var c, d = qa();
        return x(a) ? f(a.split("\n"), function(a) {
            c = a.indexOf(":"), b(wd(Qd(a.substr(0, c))), Qd(a.substr(c + 1)))
        }) : v(a) && f(a, function(a, c) {
            b(wd(c), Qd(a))
        }), d
    }

    function yb(a) {
        var b;
        return function(c) {
            if (b || (b = xb(a)), c) {
                var d = b[wd(c)];
                return void 0 === d && (d = null), d
            }
            return b
        }
    }

    function zb(a, b, c, d) {
        return A(d) ? d(a, b, c) : (f(d, function(d) {
            a = d(a, b, c)
        }), a)
    }

    function Ab(a) {
        return a >= 200 && 300 > a
    }

    function Bb() {
        var a = this.defaults = {
                transformResponse: [vb],
                transformRequest: [function(a) {
                    return !v(a) || E(a) || G(a) || F(a) ? a : V(a)
                }],
                headers: {
                    common: {
                        Accept: "application/json, text/plain, */*"
                    },
                    post: P(Ne),
                    put: P(Ne),
                    patch: P(Ne)
                },
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN",
                paramSerializer: "$httpParamSerializer"
            },
            b = !1;
        this.useApplyAsync = function(a) {
            return u(a) ? (b = !!a, this) : b
        };
        var e = !0;
        this.useLegacyPromiseExtensions = function(a) {
            return u(a) ? (e = !!a, this) : e
        };
        var g = this.interceptors = [];
        this.$get = ["$httpBackend", "$$cookieReader", "$cacheFactory", "$rootScope", "$q", "$injector", function(h, i, j, k, m, n) {
            function o(b) {
                function g(a) {
                    var b = l({}, a);
                    return b.data = zb(a.data, a.headers, a.status, j.transformResponse), Ab(a.status) ? b : m.reject(b)
                }

                function h(a, b) {
                    var c, d = {};
                    return f(a, function(a, e) {
                        A(a) ? (c = a(b), null != c && (d[e] = c)) : d[e] = a
                    }), d
                }

                function i(b) {
                    var c, d, e, f = a.headers,
                        g = l({}, b.headers);
                    f = l({}, f.common, f[wd(b.method)]);
                    a: for (c in f) {
                        d = wd(c);
                        for (e in g)
                            if (wd(e) === d) continue a;
                        g[c] = f[c]
                    }
                    return h(g, P(b))
                }
                if (!Ld.isObject(b)) throw d("$http")("badreq", "Http request configuration must be an object.  Received: {0}", b);
                var j = l({
                    method: "get",
                    transformRequest: a.transformRequest,
                    transformResponse: a.transformResponse,
                    paramSerializer: a.paramSerializer
                }, b);
                j.headers = i(b), j.method = yd(j.method), j.paramSerializer = x(j.paramSerializer) ? n.get(j.paramSerializer) : j.paramSerializer;
                var k = function(b) {
                        var d = b.headers,
                            e = zb(b.data, yb(d), c, b.transformRequest);
                        return t(e) && f(d, function(a, b) {
                            "content-type" === wd(b) && delete d[b]
                        }), t(b.withCredentials) && !t(a.withCredentials) && (b.withCredentials = a.withCredentials), r(b, e).then(g, g)
                    },
                    o = [k, c],
                    p = m.when(j);
                for (f(y, function(a) {
                        (a.request || a.requestError) && o.unshift(a.request, a.requestError), (a.response || a.responseError) && o.push(a.response, a.responseError)
                    }); o.length;) {
                    var q = o.shift(),
                        s = o.shift();
                    p = p.then(q, s)
                }
                return e ? (p.success = function(a) {
                    return ma(a, "fn"), p.then(function(b) {
                        a(b.data, b.status, b.headers, j)
                    }), p
                }, p.error = function(a) {
                    return ma(a, "fn"), p.then(null, function(b) {
                        a(b.data, b.status, b.headers, j)
                    }), p
                }) : (p.success = Se("success"), p.error = Se("error")), p
            }

            function p(a) {
                f(arguments, function(a) {
                    o[a] = function(b, c) {
                        return o(l({}, c || {}, {
                            method: a,
                            url: b
                        }))
                    }
                })
            }

            function q(a) {
                f(arguments, function(a) {
                    o[a] = function(b, c, d) {
                        return o(l({}, d || {}, {
                            method: a,
                            url: b,
                            data: c
                        }))
                    }
                })
            }

            function r(d, e) {
                function f(a, c, d, e) {
                    function f() {
                        g(c, a, d, e)
                    }
                    n && (Ab(a) ? n.put(y, [a, c, xb(d), e]) : n.remove(y)), b ? k.$applyAsync(f) : (f(), k.$$phase || k.$apply())
                }

                function g(a, b, c, e) {
                    b = b >= -1 ? b : 0, (Ab(b) ? q.resolve : q.reject)({
                        data: a,
                        status: b,
                        headers: yb(c),
                        config: d,
                        statusText: e
                    })
                }

                function j(a) {
                    g(a.data, a.status, P(a.headers()), a.statusText)
                }

                function l() {
                    var a = o.pendingRequests.indexOf(d); - 1 !== a && o.pendingRequests.splice(a, 1)
                }
                var n, p, q = m.defer(),
                    r = q.promise,
                    x = d.headers,
                    y = s(d.url, d.paramSerializer(d.params));
                if (o.pendingRequests.push(d), r.then(l, l), !d.cache && !a.cache || d.cache === !1 || "GET" !== d.method && "JSONP" !== d.method || (n = v(d.cache) ? d.cache : v(a.cache) ? a.cache : w), n && (p = n.get(y), u(p) ? I(p) ? p.then(j, j) : Od(p) ? g(p[1], p[0], P(p[2]), p[3]) : g(p, 200, {}, "OK") : n.put(y, r)), t(p)) {
                    var z = Cc(d.url) ? i()[d.xsrfCookieName || a.xsrfCookieName] : c;
                    z && (x[d.xsrfHeaderName || a.xsrfHeaderName] = z), h(d.method, y, e, f, x, d.timeout, d.withCredentials, d.responseType)
                }
                return r
            }

            function s(a, b) {
                return b.length > 0 && (a += (-1 == a.indexOf("?") ? "?" : "&") + b), a
            }
            var w = j("$http");
            a.paramSerializer = x(a.paramSerializer) ? n.get(a.paramSerializer) : a.paramSerializer;
            var y = [];
            return f(g, function(a) {
                y.unshift(x(a) ? n.get(a) : n.invoke(a))
            }), o.pendingRequests = [], p("get", "delete", "head", "jsonp"), q("post", "put", "patch"), o.defaults = a, o
        }]
    }

    function Cb() {
        this.$get = function() {
            return function() {
                return new a.XMLHttpRequest
            }
        }
    }

    function Db() {
        this.$get = ["$browser", "$window", "$document", "$xhrFactory", function(a, b, c, d) {
            return Eb(a, d, a.defer, b.angular.callbacks, c[0])
        }]
    }

    function Eb(a, b, c, d, e) {
        function g(a, b, c) {
            var f = e.createElement("script"),
                g = null;
            return f.type = "text/javascript", f.src = a, f.async = !0, g = function(a) {
                fe(f, "load", g), fe(f, "error", g), e.body.removeChild(f), f = null;
                var h = -1,
                    i = "unknown";
                a && ("load" !== a.type || d[b].called || (a = {
                    type: "error"
                }), i = a.type, h = "error" === a.type ? 404 : 200), c && c(h, i)
            }, ee(f, "load", g), ee(f, "error", g), e.body.appendChild(f), g
        }
        return function(e, h, i, j, k, l, m, n) {
            function o() {
                s && s(), v && v.abort()
            }

            function q(b, d, e, f, g) {
                u(y) && c.cancel(y), s = v = null, b(d, e, f, g), a.$$completeOutstandingRequest(p)
            }
            if (a.$$incOutstandingRequestCount(), h = h || a.url(), "jsonp" == wd(e)) {
                var r = "_" + (d.counter++).toString(36);
                d[r] = function(a) {
                    d[r].data = a, d[r].called = !0
                };
                var s = g(h.replace("JSON_CALLBACK", "angular.callbacks." + r), r, function(a, b) {
                    q(j, a, d[r].data, "", b), d[r] = p
                })
            } else {
                var v = b(e, h);
                v.open(e, h, !0), f(k, function(a, b) {
                    u(a) && v.setRequestHeader(b, a)
                }), v.onload = function() {
                    var a = v.statusText || "",
                        b = "response" in v ? v.response : v.responseText,
                        c = 1223 === v.status ? 204 : v.status;
                    0 === c && (c = b ? 200 : "file" == Bc(h).protocol ? 404 : 0), q(j, c, b, v.getAllResponseHeaders(), a)
                };
                var w = function() {
                    q(j, -1, null, null, "")
                };
                if (v.onerror = w, v.onabort = w, m && (v.withCredentials = !0), n) try {
                    v.responseType = n
                } catch (x) {
                    if ("json" !== n) throw x
                }
                v.send(t(i) ? null : i)
            }
            if (l > 0) var y = c(o, l);
            else I(l) && l.then(o)
        }
    }

    function Fb() {
        var a = "{{",
            b = "}}";
        this.startSymbol = function(b) {
            return b ? (a = b, this) : a
        }, this.endSymbol = function(a) {
            return a ? (b = a, this) : b
        }, this.$get = ["$parse", "$exceptionHandler", "$sce", function(c, d, e) {
            function f(a) {
                return "\\\\\\" + a
            }

            function g(c) {
                return c.replace(m, a).replace(n, b)
            }

            function h(a) {
                if (null == a) return "";
                switch (typeof a) {
                    case "string":
                        break;
                    case "number":
                        a = "" + a;
                        break;
                    default:
                        a = V(a)
                }
                return a
            }

            function i(f, i, m, n) {
                function o(a) {
                    try {
                        return a = C(a), n && !u(a) ? a : h(a)
                    } catch (b) {
                        d(Te.interr(f, b))
                    }
                }
                n = !!n;
                for (var p, q, r, s = 0, v = [], w = [], x = f.length, y = [], z = []; x > s;) {
                    if (-1 == (p = f.indexOf(a, s)) || -1 == (q = f.indexOf(b, p + j))) {
                        s !== x && y.push(g(f.substring(s)));
                        break
                    }
                    s !== p && y.push(g(f.substring(s, p))), r = f.substring(p + j, q), v.push(r), w.push(c(r, o)), s = q + k, z.push(y.length), y.push("")
                }
                if (m && y.length > 1 && Te.throwNoconcat(f), !i || v.length) {
                    var B = function(a) {
                            for (var b = 0, c = v.length; c > b; b++) {
                                if (n && t(a[b])) return;
                                y[z[b]] = a[b]
                            }
                            return y.join("")
                        },
                        C = function(a) {
                            return m ? e.getTrusted(m, a) : e.valueOf(a)
                        };
                    return l(function(a) {
                        var b = 0,
                            c = v.length,
                            e = new Array(c);
                        try {
                            for (; c > b; b++) e[b] = w[b](a);
                            return B(e)
                        } catch (g) {
                            d(Te.interr(f, g))
                        }
                    }, {
                        exp: f,
                        expressions: v,
                        $$watchDelegate: function(a, b) {
                            var c;
                            return a.$watchGroup(w, function(d, e) {
                                var f = B(d);
                                A(b) && b.call(this, f, d !== e ? c : f, a), c = f
                            })
                        }
                    })
                }
            }
            var j = a.length,
                k = b.length,
                m = new RegExp(a.replace(/./g, f), "g"),
                n = new RegExp(b.replace(/./g, f), "g");
            return i.startSymbol = function() {
                return a
            }, i.endSymbol = function() {
                return b
            }, i
        }]
    }

    function Gb() {
        this.$get = ["$rootScope", "$window", "$q", "$$q", function(a, b, c, d) {
            function e(e, g, h, i) {
                var j = arguments.length > 4,
                    k = j ? S(arguments, 4) : [],
                    l = b.setInterval,
                    m = b.clearInterval,
                    n = 0,
                    o = u(i) && !i,
                    p = (o ? d : c).defer(),
                    q = p.promise;
                return h = u(h) ? h : 0, q.then(null, null, j ? function() {
                    e.apply(null, k)
                } : e), q.$$intervalId = l(function() {
                    p.notify(n++), h > 0 && n >= h && (p.resolve(n), m(q.$$intervalId), delete f[q.$$intervalId]), o || a.$apply()
                }, g), f[q.$$intervalId] = p, q
            }
            var f = {};
            return e.cancel = function(a) {
                return a && a.$$intervalId in f ? (f[a.$$intervalId].reject("canceled"), b.clearInterval(a.$$intervalId), delete f[a.$$intervalId], !0) : !1
            }, e
        }]
    }

    function Hb(a) {
        for (var b = a.split("/"), c = b.length; c--;) b[c] = ca(b[c]);
        return b.join("/")
    }

    function Ib(a, b) {
        var c = Bc(a);
        b.$$protocol = c.protocol, b.$$host = c.hostname, b.$$port = n(c.port) || Ve[c.protocol] || null
    }

    function Jb(a, b) {
        var c = "/" !== a.charAt(0);
        c && (a = "/" + a);
        var d = Bc(a);
        b.$$path = decodeURIComponent(c && "/" === d.pathname.charAt(0) ? d.pathname.substring(1) : d.pathname), b.$$search = aa(d.search), b.$$hash = decodeURIComponent(d.hash), b.$$path && "/" != b.$$path.charAt(0) && (b.$$path = "/" + b.$$path)
    }

    function Kb(a, b) {
        return 0 === b.indexOf(a) ? b.substr(a.length) : void 0
    }

    function Lb(a) {
        var b = a.indexOf("#");
        return -1 == b ? a : a.substr(0, b)
    }

    function Mb(a) {
        return a.replace(/(#.+)|#$/, "$1")
    }

    function Nb(a) {
        return a.substr(0, Lb(a).lastIndexOf("/") + 1)
    }

    function Ob(a) {
        return a.substring(0, a.indexOf("/", a.indexOf("//") + 2))
    }

    function Pb(a, b, c) {
        this.$$html5 = !0, c = c || "", Ib(a, this), this.$$parse = function(a) {
            var c = Kb(b, a);
            if (!x(c)) throw We("ipthprfx", 'Invalid url "{0}", missing path prefix "{1}".', a, b);
            Jb(c, this), this.$$path || (this.$$path = "/"), this.$$compose()
        }, this.$$compose = function() {
            var a = ba(this.$$search),
                c = this.$$hash ? "#" + ca(this.$$hash) : "";
            this.$$url = Hb(this.$$path) + (a ? "?" + a : "") + c, this.$$absUrl = b + this.$$url.substr(1)
        }, this.$$parseLinkUrl = function(d, e) {
            if (e && "#" === e[0]) return this.hash(e.slice(1)), !0;
            var f, g, h;
            return u(f = Kb(a, d)) ? (g = f, h = u(f = Kb(c, f)) ? b + (Kb("/", f) || f) : a + g) : u(f = Kb(b, d)) ? h = b + f : b == d + "/" && (h = b), h && this.$$parse(h), !!h
        }
    }

    function Qb(a, b, c) {
        Ib(a, this), this.$$parse = function(d) {
            function e(a, b, c) {
                var d, e = /^\/[A-Z]:(\/.*)/;
                return 0 === b.indexOf(c) && (b = b.replace(c, "")), e.exec(b) ? a : (d = e.exec(a), d ? d[1] : a)
            }
            var f, g = Kb(a, d) || Kb(b, d);
            t(g) || "#" !== g.charAt(0) ? this.$$html5 ? f = g : (f = "", t(g) && (a = d, this.replace())) : (f = Kb(c, g), t(f) && (f = g)), Jb(f, this), this.$$path = e(this.$$path, f, a), this.$$compose()
        }, this.$$compose = function() {
            var b = ba(this.$$search),
                d = this.$$hash ? "#" + ca(this.$$hash) : "";
            this.$$url = Hb(this.$$path) + (b ? "?" + b : "") + d, this.$$absUrl = a + (this.$$url ? c + this.$$url : "")
        }, this.$$parseLinkUrl = function(b, c) {
            return Lb(a) == Lb(b) ? (this.$$parse(b), !0) : !1
        }
    }

    function Rb(a, b, c) {
        this.$$html5 = !0, Qb.apply(this, arguments), this.$$parseLinkUrl = function(d, e) {
            if (e && "#" === e[0]) return this.hash(e.slice(1)), !0;
            var f, g;
            return a == Lb(d) ? f = d : (g = Kb(b, d)) ? f = a + c + g : b === d + "/" && (f = b), f && this.$$parse(f), !!f
        }, this.$$compose = function() {
            var b = ba(this.$$search),
                d = this.$$hash ? "#" + ca(this.$$hash) : "";
            this.$$url = Hb(this.$$path) + (b ? "?" + b : "") + d, this.$$absUrl = a + c + this.$$url
        }
    }

    function Sb(a) {
        return function() {
            return this[a]
        }
    }

    function Tb(a, b) {
        return function(c) {
            return t(c) ? this[a] : (this[a] = b(c), this.$$compose(), this)
        }
    }

    function Ub() {
        var a = "",
            b = {
                enabled: !1,
                requireBase: !0,
                rewriteLinks: !0
            };
        this.hashPrefix = function(b) {
            return u(b) ? (a = b, this) : a
        }, this.html5Mode = function(a) {
            return H(a) ? (b.enabled = a, this) : v(a) ? (H(a.enabled) && (b.enabled = a.enabled), H(a.requireBase) && (b.requireBase = a.requireBase), H(a.rewriteLinks) && (b.rewriteLinks = a.rewriteLinks), this) : b
        }, this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function(c, d, e, f, g) {
            function h(a, b, c) {
                var e = j.url(),
                    f = j.$$state;
                try {
                    d.url(a, b, c), j.$$state = d.state()
                } catch (g) {
                    throw j.url(e), j.$$state = f, g
                }
            }

            function i(a, b) {
                c.$broadcast("$locationChangeSuccess", j.absUrl(), a, j.$$state, b)
            }
            var j, k, l, m = d.baseHref(),
                n = d.url();
            if (b.enabled) {
                if (!m && b.requireBase) throw We("nobase", "$location in HTML5 mode requires a <base> tag to be present!");
                l = Ob(n) + (m || "/"), k = e.history ? Pb : Rb
            } else l = Lb(n), k = Qb;
            var o = Nb(l);
            j = new k(l, o, "#" + a), j.$$parseLinkUrl(n, n), j.$$state = d.state();
            var p = /^\s*(javascript|mailto):/i;
            f.on("click", function(a) {
                if (b.rewriteLinks && !a.ctrlKey && !a.metaKey && !a.shiftKey && 2 != a.which && 2 != a.button) {
                    for (var e = Cd(a.target);
                        "a" !== M(e[0]);)
                        if (e[0] === f[0] || !(e = e.parent())[0]) return;
                    var h = e.prop("href"),
                        i = e.attr("href") || e.attr("xlink:href");
                    v(h) && "[object SVGAnimatedString]" === h.toString() && (h = Bc(h.animVal).href), p.test(h) || !h || e.attr("target") || a.isDefaultPrevented() || j.$$parseLinkUrl(h, i) && (a.preventDefault(), j.absUrl() != d.url() && (c.$apply(), g.angular["ff-684208-preventDefault"] = !0))
                }
            }), Mb(j.absUrl()) != Mb(n) && d.url(j.absUrl(), !0);
            var q = !0;
            return d.onUrlChange(function(a, b) {
                return t(Kb(o, a)) ? void(g.location.href = a) : (c.$evalAsync(function() {
                    var d, e = j.absUrl(),
                        f = j.$$state;
                    a = Mb(a), j.$$parse(a), j.$$state = b, d = c.$broadcast("$locationChangeStart", a, e, b, f).defaultPrevented, j.absUrl() === a && (d ? (j.$$parse(e), j.$$state = f, h(e, !1, f)) : (q = !1, i(e, f)))
                }), void(c.$$phase || c.$digest()))
            }), c.$watch(function() {
                var a = Mb(d.url()),
                    b = Mb(j.absUrl()),
                    f = d.state(),
                    g = j.$$replace,
                    k = a !== b || j.$$html5 && e.history && f !== j.$$state;
                (q || k) && (q = !1, c.$evalAsync(function() {
                    var b = j.absUrl(),
                        d = c.$broadcast("$locationChangeStart", b, a, j.$$state, f).defaultPrevented;
                    j.absUrl() === b && (d ? (j.$$parse(a), j.$$state = f) : (k && h(b, g, f === j.$$state ? null : j.$$state), i(a, f)))
                })), j.$$replace = !1
            }), j
        }]
    }

    function Vb() {
        var a = !0,
            b = this;
        this.debugEnabled = function(b) {
            return u(b) ? (a = b, this) : a
        }, this.$get = ["$window", function(c) {
            function d(a) {
                return a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line)), a
            }

            function e(a) {
                var b = c.console || {},
                    e = b[a] || b.log || p,
                    g = !1;
                try {
                    g = !!e.apply
                } catch (h) {}
                return g ? function() {
                    var a = [];
                    return f(arguments, function(b) {
                        a.push(d(b))
                    }), e.apply(b, a)
                } : function(a, b) {
                    e(a, null == b ? "" : b)
                }
            }
            return {
                log: e("log"),
                info: e("info"),
                warn: e("warn"),
                error: e("error"),
                debug: function() {
                    var c = e("debug");
                    return function() {
                        a && c.apply(b, arguments)
                    }
                }()
            }
        }]
    }

    function Wb(a, b) {
        if ("__defineGetter__" === a || "__defineSetter__" === a || "__lookupGetter__" === a || "__lookupSetter__" === a || "__proto__" === a) throw Ye("isecfld", "Attempting to access a disallowed field in Angular expressions! Expression: {0}", b);
        return a
    }

    function Xb(a, b) {
        if (a += "", !x(a)) throw Ye("iseccst", "Cannot convert object to primitive value! Expression: {0}", b);
        return a
    }

    function Yb(a, b) {
        if (a) {
            if (a.constructor === a) throw Ye("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", b);
            if (a.window === a) throw Ye("isecwindow", "Referencing the Window in Angular expressions is disallowed! Expression: {0}", b);
            if (a.children && (a.nodeName || a.prop && a.attr && a.find)) throw Ye("isecdom", "Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}", b);
            if (a === Object) throw Ye("isecobj", "Referencing Object in Angular expressions is disallowed! Expression: {0}", b)
        }
        return a
    }

    function Zb(a, b) {
        if (a) {
            if (a.constructor === a) throw Ye("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", b);
            if (a === Ze || a === $e || a === _e) throw Ye("isecff", "Referencing call, apply or bind in Angular expressions is disallowed! Expression: {0}", b)
        }
    }

    function $b(a, b) {
        if (a && (a === 0..constructor || a === (!1).constructor || a === "".constructor || a === {}.constructor || a === [].constructor || a === Function.constructor)) throw Ye("isecaf", "Assigning to a constructor is disallowed! Expression: {0}", b)
    }

    function _b(a, b) {
        return "undefined" != typeof a ? a : b
    }

    function ac(a, b) {
        return "undefined" == typeof a ? b : "undefined" == typeof b ? a : a + b
    }

    function bc(a, b) {
        var c = a(b);
        return !c.$stateful
    }

    function cc(a, b) {
        var c, d;
        switch (a.type) {
            case df.Program:
                c = !0, f(a.body, function(a) {
                    cc(a.expression, b), c = c && a.expression.constant
                }), a.constant = c;
                break;
            case df.Literal:
                a.constant = !0, a.toWatch = [];
                break;
            case df.UnaryExpression:
                cc(a.argument, b), a.constant = a.argument.constant, a.toWatch = a.argument.toWatch;
                break;
            case df.BinaryExpression:
                cc(a.left, b), cc(a.right, b), a.constant = a.left.constant && a.right.constant, a.toWatch = a.left.toWatch.concat(a.right.toWatch);
                break;
            case df.LogicalExpression:
                cc(a.left, b), cc(a.right, b), a.constant = a.left.constant && a.right.constant, a.toWatch = a.constant ? [] : [a];
                break;
            case df.ConditionalExpression:
                cc(a.test, b), cc(a.alternate, b), cc(a.consequent, b), a.constant = a.test.constant && a.alternate.constant && a.consequent.constant, a.toWatch = a.constant ? [] : [a];
                break;
            case df.Identifier:
                a.constant = !1, a.toWatch = [a];
                break;
            case df.MemberExpression:
                cc(a.object, b), a.computed && cc(a.property, b), a.constant = a.object.constant && (!a.computed || a.property.constant), a.toWatch = [a];
                break;
            case df.CallExpression:
                c = a.filter ? bc(b, a.callee.name) : !1, d = [], f(a.arguments, function(a) {
                    cc(a, b), c = c && a.constant, a.constant || d.push.apply(d, a.toWatch)
                }), a.constant = c, a.toWatch = a.filter && bc(b, a.callee.name) ? d : [a];
                break;
            case df.AssignmentExpression:
                cc(a.left, b), cc(a.right, b), a.constant = a.left.constant && a.right.constant, a.toWatch = [a];
                break;
            case df.ArrayExpression:
                c = !0, d = [], f(a.elements, function(a) {
                    cc(a, b), c = c && a.constant, a.constant || d.push.apply(d, a.toWatch)
                }), a.constant = c, a.toWatch = d;
                break;
            case df.ObjectExpression:
                c = !0, d = [], f(a.properties, function(a) {
                    cc(a.value, b), c = c && a.value.constant, a.value.constant || d.push.apply(d, a.value.toWatch)
                }), a.constant = c, a.toWatch = d;
                break;
            case df.ThisExpression:
                a.constant = !1, a.toWatch = []
        }
    }

    function dc(a) {
        if (1 == a.length) {
            var b = a[0].expression,
                d = b.toWatch;
            return 1 !== d.length ? d : d[0] !== b ? d : c
        }
    }

    function ec(a) {
        return a.type === df.Identifier || a.type === df.MemberExpression
    }

    function fc(a) {
        return 1 === a.body.length && ec(a.body[0].expression) ? {
            type: df.AssignmentExpression,
            left: a.body[0].expression,
            right: {
                type: df.NGValueParameter
            },
            operator: "="
        } : void 0
    }

    function gc(a) {
        return 0 === a.body.length || 1 === a.body.length && (a.body[0].expression.type === df.Literal || a.body[0].expression.type === df.ArrayExpression || a.body[0].expression.type === df.ObjectExpression)
    }

    function hc(a) {
        return a.constant
    }

    function ic(a, b) {
        this.astBuilder = a, this.$filter = b
    }

    function jc(a, b) {
        this.astBuilder = a, this.$filter = b
    }

    function kc(a) {
        return "constructor" == a
    }

    function lc(a) {
        return A(a.valueOf) ? a.valueOf() : ff.call(a)
    }

    function mc() {
        var a = qa(),
            b = qa();
        this.$get = ["$filter", function(d) {
            function e(a, b) {
                return null == a || null == b ? a === b : "object" == typeof a && (a = lc(a), "object" == typeof a) ? !1 : a === b || a !== a && b !== b
            }

            function g(a, b, d, f, g) {
                var h, i = f.inputs;
                if (1 === i.length) {
                    var j = e;
                    return i = i[0], a.$watch(function(a) {
                        var b = i(a);
                        return e(b, j) || (h = f(a, c, c, [b]), j = b && lc(b)), h
                    }, b, d, g)
                }
                for (var k = [], l = [], m = 0, n = i.length; n > m; m++) k[m] = e, l[m] = null;
                return a.$watch(function(a) {
                    for (var b = !1, d = 0, g = i.length; g > d; d++) {
                        var j = i[d](a);
                        (b || (b = !e(j, k[d]))) && (l[d] = j, k[d] = j && lc(j))
                    }
                    return b && (h = f(a, c, c, l)), h
                }, b, d, g)
            }

            function h(a, b, c, d) {
                var e, f;
                return e = a.$watch(function(a) {
                    return d(a)
                }, function(a, c, d) {
                    f = a, A(b) && b.apply(this, arguments), u(a) && d.$$postDigest(function() {
                        u(f) && e()
                    })
                }, c)
            }

            function i(a, b, c, d) {
                function e(a) {
                    var b = !0;
                    return f(a, function(a) {
                        u(a) || (b = !1)
                    }), b
                }
                var g, h;
                return g = a.$watch(function(a) {
                    return d(a)
                }, function(a, c, d) {
                    h = a, A(b) && b.call(this, a, c, d), e(a) && d.$$postDigest(function() {
                        e(h) && g()
                    })
                }, c)
            }

            function j(a, b, c, d) {
                var e;
                return e = a.$watch(function(a) {
                    return d(a)
                }, function(a, c, d) {
                    A(b) && b.apply(this, arguments), e()
                }, c)
            }

            function k(a, b) {
                if (!b) return a;
                var c = a.$$watchDelegate,
                    d = !1,
                    e = c !== i && c !== h,
                    f = e ? function(c, e, f, g) {
                        var h = d && g ? g[0] : a(c, e, f, g);
                        return b(h, c, e)
                    } : function(c, d, e, f) {
                        var g = a(c, d, e, f),
                            h = b(g, c, d);
                        return u(g) ? h : g
                    };
                return a.$$watchDelegate && a.$$watchDelegate !== g ? f.$$watchDelegate = a.$$watchDelegate : b.$stateful || (f.$$watchDelegate = g, d = !a.inputs, f.inputs = a.inputs ? a.inputs : [a]), f
            }
            var l = Sd().noUnsafeEval,
                m = {
                    csp: l,
                    expensiveChecks: !1
                },
                n = {
                    csp: l,
                    expensiveChecks: !0
                };
            return function(c, e, f) {
                var l, o, q;
                switch (typeof c) {
                    case "string":
                        c = c.trim(), q = c;
                        var r = f ? b : a;
                        if (l = r[q], !l) {
                            ":" === c.charAt(0) && ":" === c.charAt(1) && (o = !0, c = c.substring(2));
                            var s = f ? n : m,
                                t = new cf(s),
                                u = new ef(t, d, s);
                            l = u.parse(c), l.constant ? l.$$watchDelegate = j : o ? l.$$watchDelegate = l.literal ? i : h : l.inputs && (l.$$watchDelegate = g), r[q] = l
                        }
                        return k(l, e);
                    case "function":
                        return k(c, e);
                    default:
                        return p
                }
            }
        }]
    }

    function nc() {
        this.$get = ["$rootScope", "$exceptionHandler", function(a, b) {
            return pc(function(b) {
                a.$evalAsync(b)
            }, b)
        }]
    }

    function oc() {
        this.$get = ["$browser", "$exceptionHandler", function(a, b) {
            return pc(function(b) {
                a.defer(b)
            }, b)
        }]
    }

    function pc(a, b) {
        function e(a, b, c) {
            function d(b) {
                return function(c) {
                    e || (e = !0, b.call(a, c))
                }
            }
            var e = !1;
            return [d(b), d(c)]
        }

        function g() {
            this.$$state = {
                status: 0
            }
        }

        function h(a, b) {
            return function(c) {
                b.call(a, c)
            }
        }

        function i(a) {
            var d, e, f;
            f = a.pending, a.processScheduled = !1, a.pending = c;
            for (var g = 0, h = f.length; h > g; ++g) {
                e = f[g][0], d = f[g][a.status];
                try {
                    A(d) ? e.resolve(d(a.value)) : 1 === a.status ? e.resolve(a.value) : e.reject(a.value)
                } catch (i) {
                    e.reject(i), b(i)
                }
            }
        }

        function j(b) {
            !b.processScheduled && b.pending && (b.processScheduled = !0, a(function() {
                i(b)
            }))
        }

        function k() {
            this.promise = new g, this.resolve = h(this, this.resolve), this.reject = h(this, this.reject), this.notify = h(this, this.notify)
        }

        function m(a) {
            var b = new k,
                c = 0,
                d = Od(a) ? [] : {};
            return f(a, function(a, e) {
                c++, s(a).then(function(a) {
                    d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d))
                }, function(a) {
                    d.hasOwnProperty(e) || b.reject(a)
                })
            }), 0 === c && b.resolve(d), b.promise
        }
        var n = d("$q", TypeError),
            o = function() {
                return new k
            };
        l(g.prototype, {
            then: function(a, b, c) {
                if (t(a) && t(b) && t(c)) return this;
                var d = new k;
                return this.$$state.pending = this.$$state.pending || [], this.$$state.pending.push([d, a, b, c]), this.$$state.status > 0 && j(this.$$state), d.promise
            },
            "catch": function(a) {
                return this.then(null, a)
            },
            "finally": function(a, b) {
                return this.then(function(b) {
                    return r(b, !0, a)
                }, function(b) {
                    return r(b, !1, a)
                }, b)
            }
        }), l(k.prototype, {
            resolve: function(a) {
                this.promise.$$state.status || (a === this.promise ? this.$$reject(n("qcycle", "Expected promise to be resolved with value other than itself '{0}'", a)) : this.$$resolve(a))
            },
            $$resolve: function(a) {
                var c, d;
                d = e(this, this.$$resolve, this.$$reject);
                try {
                    (v(a) || A(a)) && (c = a && a.then), A(c) ? (this.promise.$$state.status = -1, c.call(a, d[0], d[1], this.notify)) : (this.promise.$$state.value = a, this.promise.$$state.status = 1, j(this.promise.$$state))
                } catch (f) {
                    d[1](f), b(f)
                }
            },
            reject: function(a) {
                this.promise.$$state.status || this.$$reject(a)
            },
            $$reject: function(a) {
                this.promise.$$state.value = a, this.promise.$$state.status = 2, j(this.promise.$$state)
            },
            notify: function(c) {
                var d = this.promise.$$state.pending;
                this.promise.$$state.status <= 0 && d && d.length && a(function() {
                    for (var a, e, f = 0, g = d.length; g > f; f++) {
                        e = d[f][0], a = d[f][3];
                        try {
                            e.notify(A(a) ? a(c) : c);
                        } catch (h) {
                            b(h)
                        }
                    }
                })
            }
        });
        var p = function(a) {
                var b = new k;
                return b.reject(a), b.promise
            },
            q = function(a, b) {
                var c = new k;
                return b ? c.resolve(a) : c.reject(a), c.promise
            },
            r = function(a, b, c) {
                var d = null;
                try {
                    A(c) && (d = c())
                } catch (e) {
                    return q(e, !1)
                }
                return I(d) ? d.then(function() {
                    return q(a, b)
                }, function(a) {
                    return q(a, !1)
                }) : q(a, b)
            },
            s = function(a, b, c, d) {
                var e = new k;
                return e.resolve(a), e.promise.then(b, c, d)
            },
            u = s,
            w = function x(a) {
                function b(a) {
                    d.resolve(a)
                }

                function c(a) {
                    d.reject(a)
                }
                if (!A(a)) throw n("norslvr", "Expected resolverFn, got '{0}'", a);
                if (!(this instanceof x)) return new x(a);
                var d = new k;
                return a(b, c), d.promise
            };
        return w.defer = o, w.reject = p, w.when = s, w.resolve = u, w.all = m, w
    }

    function qc() {
        this.$get = ["$window", "$timeout", function(a, b) {
            var c = a.requestAnimationFrame || a.webkitRequestAnimationFrame,
                d = a.cancelAnimationFrame || a.webkitCancelAnimationFrame || a.webkitCancelRequestAnimationFrame,
                e = !!c,
                f = e ? function(a) {
                    var b = c(a);
                    return function() {
                        d(b)
                    }
                } : function(a) {
                    var c = b(a, 16.66, !1);
                    return function() {
                        b.cancel(c)
                    }
                };
            return f.supported = e, f
        }]
    }

    function rc() {
        function a(a) {
            function b() {
                this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null, this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$id = i(), this.$$ChildScope = null
            }
            return b.prototype = a, b
        }
        var b = 10,
            c = d("$rootScope"),
            g = null,
            h = null;
        this.digestTtl = function(a) {
            return arguments.length && (b = a), b
        }, this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser", function(d, j, k, l) {
            function m(a) {
                a.currentScope.$$destroyed = !0
            }

            function n(a) {
                9 === Bd && (a.$$childHead && n(a.$$childHead), a.$$nextSibling && n(a.$$nextSibling)), a.$parent = a.$$nextSibling = a.$$prevSibling = a.$$childHead = a.$$childTail = a.$root = a.$$watchers = null
            }

            function o() {
                this.$id = i(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this.$root = this, this.$$destroyed = !1, this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$$isolateBindings = null
            }

            function q(a) {
                if (z.$$phase) throw c("inprog", "{0} already in progress", z.$$phase);
                z.$$phase = a
            }

            function r() {
                z.$$phase = null
            }

            function s(a, b) {
                do a.$$watchersCount += b; while (a = a.$parent)
            }

            function u(a, b, c) {
                do a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c]; while (a = a.$parent)
            }

            function w() {}

            function x() {
                for (; D.length;) try {
                    D.shift()()
                } catch (a) {
                    j(a)
                }
                h = null
            }

            function y() {
                null === h && (h = l.defer(function() {
                    z.$apply(x)
                }))
            }
            o.prototype = {
                constructor: o,
                $new: function(b, c) {
                    var d;
                    return c = c || this, b ? (d = new o, d.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = a(this)), d = new this.$$ChildScope), d.$parent = c, d.$$prevSibling = c.$$childTail, c.$$childHead ? (c.$$childTail.$$nextSibling = d, c.$$childTail = d) : c.$$childHead = c.$$childTail = d, (b || c != this) && d.$on("$destroy", m), d
                },
                $watch: function(a, b, c, d) {
                    var e = k(a);
                    if (e.$$watchDelegate) return e.$$watchDelegate(this, b, c, e, a);
                    var f = this,
                        h = f.$$watchers,
                        i = {
                            fn: b,
                            last: w,
                            get: e,
                            exp: d || a,
                            eq: !!c
                        };
                    return g = null, A(b) || (i.fn = p), h || (h = f.$$watchers = []), h.unshift(i), s(this, 1),
                        function() {
                            N(h, i) >= 0 && s(f, -1), g = null
                        }
                },
                $watchGroup: function(a, b) {
                    function c() {
                        i = !1, j ? (j = !1, b(e, e, h)) : b(e, d, h)
                    }
                    var d = new Array(a.length),
                        e = new Array(a.length),
                        g = [],
                        h = this,
                        i = !1,
                        j = !0;
                    if (!a.length) {
                        var k = !0;
                        return h.$evalAsync(function() {
                                k && b(e, e, h)
                            }),
                            function() {
                                k = !1
                            }
                    }
                    return 1 === a.length ? this.$watch(a[0], function(a, c, f) {
                        e[0] = a, d[0] = c, b(e, a === c ? e : d, f)
                    }) : (f(a, function(a, b) {
                        var f = h.$watch(a, function(a, f) {
                            e[b] = a, d[b] = f, i || (i = !0, h.$evalAsync(c))
                        });
                        g.push(f)
                    }), function() {
                        for (; g.length;) g.shift()()
                    })
                },
                $watchCollection: function(a, b) {
                    function c(a) {
                        f = a;
                        var b, c, d, h, i;
                        if (!t(f)) {
                            if (v(f))
                                if (e(f)) {
                                    g !== n && (g = n, q = g.length = 0, l++), b = f.length, q !== b && (l++, g.length = q = b);
                                    for (var j = 0; b > j; j++) i = g[j], h = f[j], d = i !== i && h !== h, d || i === h || (l++, g[j] = h)
                                } else {
                                    g !== o && (g = o = {}, q = 0, l++), b = 0;
                                    for (c in f) xd.call(f, c) && (b++, h = f[c], i = g[c], c in g ? (d = i !== i && h !== h, d || i === h || (l++, g[c] = h)) : (q++, g[c] = h, l++));
                                    if (q > b) {
                                        l++;
                                        for (c in g) xd.call(f, c) || (q--, delete g[c])
                                    }
                                }
                            else g !== f && (g = f, l++);
                            return l
                        }
                    }

                    function d() {
                        if (p ? (p = !1, b(f, f, i)) : b(f, h, i), j)
                            if (v(f))
                                if (e(f)) {
                                    h = new Array(f.length);
                                    for (var a = 0; a < f.length; a++) h[a] = f[a]
                                } else {
                                    h = {};
                                    for (var c in f) xd.call(f, c) && (h[c] = f[c])
                                }
                        else h = f
                    }
                    c.$stateful = !0;
                    var f, g, h, i = this,
                        j = b.length > 1,
                        l = 0,
                        m = k(a, c),
                        n = [],
                        o = {},
                        p = !0,
                        q = 0;
                    return this.$watch(m, d)
                },
                $digest: function() {
                    var a, d, e, f, i, k, m, n, o, p, s = b,
                        t = this,
                        u = [];
                    q("$digest"), l.$$checkUrlChange(), this === z && null !== h && (l.defer.cancel(h), x()), g = null;
                    do {
                        for (k = !1, n = t; B.length;) {
                            try {
                                p = B.shift(), p.scope.$eval(p.expression, p.locals)
                            } catch (v) {
                                j(v)
                            }
                            g = null
                        }
                        a: do {
                            if (f = n.$$watchers)
                                for (i = f.length; i--;) try {
                                    if (a = f[i])
                                        if ((d = a.get(n)) === (e = a.last) || (a.eq ? Q(d, e) : "number" == typeof d && "number" == typeof e && isNaN(d) && isNaN(e))) {
                                            if (a === g) {
                                                k = !1;
                                                break a
                                            }
                                        } else k = !0, g = a, a.last = a.eq ? O(d, null) : d, a.fn(d, e === w ? d : e, n), 5 > s && (o = 4 - s, u[o] || (u[o] = []), u[o].push({
                                            msg: A(a.exp) ? "fn: " + (a.exp.name || a.exp.toString()) : a.exp,
                                            newVal: d,
                                            oldVal: e
                                        }))
                                } catch (v) {
                                    j(v)
                                }
                            if (!(m = n.$$watchersCount && n.$$childHead || n !== t && n.$$nextSibling))
                                for (; n !== t && !(m = n.$$nextSibling);) n = n.$parent
                        } while (n = m);
                        if ((k || B.length) && !s--) throw r(), c("infdig", "{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}", b, u)
                    } while (k || B.length);
                    for (r(); C.length;) try {
                        C.shift()()
                    } catch (v) {
                        j(v)
                    }
                },
                $destroy: function() {
                    if (!this.$$destroyed) {
                        var a = this.$parent;
                        this.$broadcast("$destroy"), this.$$destroyed = !0, this === z && l.$$applicationDestroyed(), s(this, -this.$$watchersCount);
                        for (var b in this.$$listenerCount) u(this, this.$$listenerCount[b], b);
                        a && a.$$childHead == this && (a.$$childHead = this.$$nextSibling), a && a.$$childTail == this && (a.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = p, this.$on = this.$watch = this.$watchGroup = function() {
                            return p
                        }, this.$$listeners = {}, this.$$nextSibling = null, n(this)
                    }
                },
                $eval: function(a, b) {
                    return k(a)(this, b)
                },
                $evalAsync: function(a, b) {
                    z.$$phase || B.length || l.defer(function() {
                        B.length && z.$digest()
                    }), B.push({
                        scope: this,
                        expression: a,
                        locals: b
                    })
                },
                $$postDigest: function(a) {
                    C.push(a)
                },
                $apply: function(a) {
                    try {
                        q("$apply");
                        try {
                            return this.$eval(a)
                        } finally {
                            r()
                        }
                    } catch (b) {
                        j(b)
                    } finally {
                        try {
                            z.$digest()
                        } catch (b) {
                            throw j(b), b
                        }
                    }
                },
                $applyAsync: function(a) {
                    function b() {
                        c.$eval(a)
                    }
                    var c = this;
                    a && D.push(b), y()
                },
                $on: function(a, b) {
                    var c = this.$$listeners[a];
                    c || (this.$$listeners[a] = c = []), c.push(b);
                    var d = this;
                    do d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++; while (d = d.$parent);
                    var e = this;
                    return function() {
                        var d = c.indexOf(b); - 1 !== d && (c[d] = null, u(e, 1, a))
                    }
                },
                $emit: function(a, b) {
                    var c, d, e, f = [],
                        g = this,
                        h = !1,
                        i = {
                            name: a,
                            targetScope: g,
                            stopPropagation: function() {
                                h = !0
                            },
                            preventDefault: function() {
                                i.defaultPrevented = !0
                            },
                            defaultPrevented: !1
                        },
                        k = R([i], arguments, 1);
                    do {
                        for (c = g.$$listeners[a] || f, i.currentScope = g, d = 0, e = c.length; e > d; d++)
                            if (c[d]) try {
                                c[d].apply(null, k)
                            } catch (l) {
                                j(l)
                            } else c.splice(d, 1), d--, e--;
                        if (h) return i.currentScope = null, i;
                        g = g.$parent
                    } while (g);
                    return i.currentScope = null, i
                },
                $broadcast: function(a, b) {
                    var c = this,
                        d = c,
                        e = c,
                        f = {
                            name: a,
                            targetScope: c,
                            preventDefault: function() {
                                f.defaultPrevented = !0
                            },
                            defaultPrevented: !1
                        };
                    if (!c.$$listenerCount[a]) return f;
                    for (var g, h, i, k = R([f], arguments, 1); d = e;) {
                        for (f.currentScope = d, g = d.$$listeners[a] || [], h = 0, i = g.length; i > h; h++)
                            if (g[h]) try {
                                g[h].apply(null, k)
                            } catch (l) {
                                j(l)
                            } else g.splice(h, 1), h--, i--;
                        if (!(e = d.$$listenerCount[a] && d.$$childHead || d !== c && d.$$nextSibling))
                            for (; d !== c && !(e = d.$$nextSibling);) d = d.$parent
                    }
                    return f.currentScope = null, f
                }
            };
            var z = new o,
                B = z.$$asyncQueue = [],
                C = z.$$postDigestQueue = [],
                D = z.$$applyAsyncQueue = [];
            return z
        }]
    }

    function sc() {
        var a = /^\s*(https?|ftp|mailto|tel|file):/,
            b = /^\s*((https?|ftp|file|blob):|data:image\/)/;
        this.aHrefSanitizationWhitelist = function(b) {
            return u(b) ? (a = b, this) : a
        }, this.imgSrcSanitizationWhitelist = function(a) {
            return u(a) ? (b = a, this) : b
        }, this.$get = function() {
            return function(c, d) {
                var e, f = d ? b : a;
                return e = Bc(c).href, "" === e || e.match(f) ? c : "unsafe:" + e
            }
        }
    }

    function tc(a) {
        if ("self" === a) return a;
        if (x(a)) {
            if (a.indexOf("***") > -1) throw gf("iwcard", "Illegal sequence *** in string matcher.  String: {0}", a);
            return a = Rd(a).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"), new RegExp("^" + a + "$")
        }
        if (B(a)) return new RegExp("^" + a.source + "$");
        throw gf("imatcher", 'Matchers may only be "self", string patterns or RegExp objects')
    }

    function uc(a) {
        var b = [];
        return u(a) && f(a, function(a) {
            b.push(tc(a))
        }), b
    }

    function vc() {
        this.SCE_CONTEXTS = hf;
        var a = ["self"],
            b = [];
        this.resourceUrlWhitelist = function(b) {
            return arguments.length && (a = uc(b)), a
        }, this.resourceUrlBlacklist = function(a) {
            return arguments.length && (b = uc(a)), b
        }, this.$get = ["$injector", function(c) {
            function d(a, b) {
                return "self" === a ? Cc(b) : !!a.exec(b.href)
            }

            function e(c) {
                var e, f, g = Bc(c.toString()),
                    h = !1;
                for (e = 0, f = a.length; f > e; e++)
                    if (d(a[e], g)) {
                        h = !0;
                        break
                    }
                if (h)
                    for (e = 0, f = b.length; f > e; e++)
                        if (d(b[e], g)) {
                            h = !1;
                            break
                        }
                return h
            }

            function f(a) {
                var b = function(a) {
                    this.$$unwrapTrustedValue = function() {
                        return a
                    }
                };
                return a && (b.prototype = new a), b.prototype.valueOf = function() {
                    return this.$$unwrapTrustedValue()
                }, b.prototype.toString = function() {
                    return this.$$unwrapTrustedValue().toString()
                }, b
            }

            function g(a, b) {
                var c = l.hasOwnProperty(a) ? l[a] : null;
                if (!c) throw gf("icontext", "Attempted to trust a value in invalid context. Context: {0}; Value: {1}", a, b);
                if (null === b || t(b) || "" === b) return b;
                if ("string" != typeof b) throw gf("itype", "Attempted to trust a non-string value in a content requiring a string: Context: {0}", a);
                return new c(b)
            }

            function h(a) {
                return a instanceof k ? a.$$unwrapTrustedValue() : a
            }

            function i(a, b) {
                if (null === b || t(b) || "" === b) return b;
                var c = l.hasOwnProperty(a) ? l[a] : null;
                if (c && b instanceof c) return b.$$unwrapTrustedValue();
                if (a === hf.RESOURCE_URL) {
                    if (e(b)) return b;
                    throw gf("insecurl", "Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}", b.toString())
                }
                if (a === hf.HTML) return j(b);
                throw gf("unsafe", "Attempting to use an unsafe value in a safe context.")
            }
            var j = function(a) {
                throw gf("unsafe", "Attempting to use an unsafe value in a safe context.")
            };
            c.has("$sanitize") && (j = c.get("$sanitize"));
            var k = f(),
                l = {};
            return l[hf.HTML] = f(k), l[hf.CSS] = f(k), l[hf.URL] = f(k), l[hf.JS] = f(k), l[hf.RESOURCE_URL] = f(l[hf.URL]), {
                trustAs: g,
                getTrusted: i,
                valueOf: h
            }
        }]
    }

    function wc() {
        var a = !0;
        this.enabled = function(b) {
            return arguments.length && (a = !!b), a
        }, this.$get = ["$parse", "$sceDelegate", function(b, c) {
            if (a && 8 > Bd) throw gf("iequirks", "Strict Contextual Escaping does not support Internet Explorer version < 11 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.");
            var d = P(hf);
            d.isEnabled = function() {
                return a
            }, d.trustAs = c.trustAs, d.getTrusted = c.getTrusted, d.valueOf = c.valueOf, a || (d.trustAs = d.getTrusted = function(a, b) {
                return b
            }, d.valueOf = q), d.parseAs = function(a, c) {
                var e = b(c);
                return e.literal && e.constant ? e : b(c, function(b) {
                    return d.getTrusted(a, b)
                })
            };
            var e = d.parseAs,
                g = d.getTrusted,
                h = d.trustAs;
            return f(hf, function(a, b) {
                var c = wd(b);
                d[wa("parse_as_" + c)] = function(b) {
                    return e(a, b)
                }, d[wa("get_trusted_" + c)] = function(b) {
                    return g(a, b)
                }, d[wa("trust_as_" + c)] = function(b) {
                    return h(a, b)
                }
            }), d
        }]
    }

    function xc() {
        this.$get = ["$window", "$document", function(a, b) {
            var c, d, e = {},
                f = n((/android (\d+)/.exec(wd((a.navigator || {}).userAgent)) || [])[1]),
                g = /Boxee/i.test((a.navigator || {}).userAgent),
                h = b[0] || {},
                i = /^(Moz|webkit|ms)(?=[A-Z])/,
                j = h.body && h.body.style,
                k = !1,
                l = !1;
            if (j) {
                for (var m in j)
                    if (d = i.exec(m)) {
                        c = d[0], c = c.substr(0, 1).toUpperCase() + c.substr(1);
                        break
                    }
                c || (c = "WebkitOpacity" in j && "webkit"), k = !!("transition" in j || c + "Transition" in j), l = !!("animation" in j || c + "Animation" in j), !f || k && l || (k = x(j.webkitTransition), l = x(j.webkitAnimation))
            }
            return {
                history: !(!a.history || !a.history.pushState || 4 > f || g),
                hasEvent: function(a) {
                    if ("input" === a && 11 >= Bd) return !1;
                    if (t(e[a])) {
                        var b = h.createElement("div");
                        e[a] = "on" + a in b
                    }
                    return e[a]
                },
                csp: Sd(),
                vendorPrefix: c,
                transitions: k,
                animations: l,
                android: f
            }
        }]
    }

    function yc() {
        this.$get = ["$templateCache", "$http", "$q", "$sce", function(a, b, c, d) {
            function e(f, g) {
                function h(a) {
                    if (!g) throw He("tpload", "Failed to load template: {0} (HTTP status: {1} {2})", f, a.status, a.statusText);
                    return c.reject(a)
                }
                e.totalPendingRequests++, x(f) && a.get(f) || (f = d.getTrustedResourceUrl(f));
                var i = b.defaults && b.defaults.transformResponse;
                Od(i) ? i = i.filter(function(a) {
                    return a !== vb
                }) : i === vb && (i = null);
                var j = {
                    cache: a,
                    transformResponse: i
                };
                return b.get(f, j)["finally"](function() {
                    e.totalPendingRequests--
                }).then(function(b) {
                    return a.put(f, b.data), b.data
                }, h)
            }
            return e.totalPendingRequests = 0, e
        }]
    }

    function zc() {
        this.$get = ["$rootScope", "$browser", "$location", function(a, b, c) {
            var d = {};
            return d.findBindings = function(a, b, c) {
                var d = a.getElementsByClassName("ng-binding"),
                    e = [];
                return f(d, function(a) {
                    var d = Ld.element(a).data("$binding");
                    d && f(d, function(d) {
                        if (c) {
                            var f = new RegExp("(^|\\s)" + Rd(b) + "(\\s|\\||$)");
                            f.test(d) && e.push(a)
                        } else -1 != d.indexOf(b) && e.push(a)
                    })
                }), e
            }, d.findModels = function(a, b, c) {
                for (var d = ["ng-", "data-ng-", "ng\\:"], e = 0; e < d.length; ++e) {
                    var f = c ? "=" : "*=",
                        g = "[" + d[e] + "model" + f + '"' + b + '"]',
                        h = a.querySelectorAll(g);
                    if (h.length) return h
                }
            }, d.getLocation = function() {
                return c.url()
            }, d.setLocation = function(b) {
                b !== c.url() && (c.url(b), a.$digest())
            }, d.whenStable = function(a) {
                b.notifyWhenNoOutstandingRequests(a)
            }, d
        }]
    }

    function Ac() {
        this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function(a, b, c, d, e) {
            function f(f, h, i) {
                A(f) || (i = h, h = f, f = p);
                var j, k = S(arguments, 3),
                    l = u(i) && !i,
                    m = (l ? d : c).defer(),
                    n = m.promise;
                return j = b.defer(function() {
                    try {
                        m.resolve(f.apply(null, k))
                    } catch (b) {
                        m.reject(b), e(b)
                    } finally {
                        delete g[n.$$timeoutId]
                    }
                    l || a.$apply()
                }, h), n.$$timeoutId = j, g[j] = m, n
            }
            var g = {};
            return f.cancel = function(a) {
                return a && a.$$timeoutId in g ? (g[a.$$timeoutId].reject("canceled"), delete g[a.$$timeoutId], b.defer.cancel(a.$$timeoutId)) : !1
            }, f
        }]
    }

    function Bc(a) {
        var b = a;
        return Bd && (jf.setAttribute("href", b), b = jf.href), jf.setAttribute("href", b), {
            href: jf.href,
            protocol: jf.protocol ? jf.protocol.replace(/:$/, "") : "",
            host: jf.host,
            search: jf.search ? jf.search.replace(/^\?/, "") : "",
            hash: jf.hash ? jf.hash.replace(/^#/, "") : "",
            hostname: jf.hostname,
            port: jf.port,
            pathname: "/" === jf.pathname.charAt(0) ? jf.pathname : "/" + jf.pathname
        }
    }

    function Cc(a) {
        var b = x(a) ? Bc(a) : a;
        return b.protocol === kf.protocol && b.host === kf.host
    }

    function Dc() {
        this.$get = r(a)
    }

    function Ec(a) {
        function b(a) {
            try {
                return decodeURIComponent(a)
            } catch (b) {
                return a
            }
        }
        var c = a[0] || {},
            d = {},
            e = "";
        return function() {
            var a, f, g, h, i, j = c.cookie || "";
            if (j !== e)
                for (e = j, a = e.split("; "), d = {}, g = 0; g < a.length; g++) f = a[g], h = f.indexOf("="), h > 0 && (i = b(f.substring(0, h)), t(d[i]) && (d[i] = b(f.substring(h + 1))));
            return d
        }
    }

    function Fc() {
        this.$get = Ec
    }

    function Gc(a) {
        function b(d, e) {
            if (v(d)) {
                var g = {};
                return f(d, function(a, c) {
                    g[c] = b(c, a)
                }), g
            }
            return a.factory(d + c, e)
        }
        var c = "Filter";
        this.register = b, this.$get = ["$injector", function(a) {
            return function(b) {
                return a.get(b + c)
            }
        }], b("currency", Lc), b("date", Yc), b("filter", Hc), b("json", Zc), b("limitTo", $c), b("lowercase", pf), b("number", Mc), b("orderBy", _c), b("uppercase", qf)
    }

    function Hc() {
        return function(a, b, c) {
            if (!e(a)) {
                if (null == a) return a;
                throw d("filter")("notarray", "Expected array but received: {0}", a)
            }
            var f, g, h = Kc(b);
            switch (h) {
                case "function":
                    f = b;
                    break;
                case "boolean":
                case "null":
                case "number":
                case "string":
                    g = !0;
                case "object":
                    f = Ic(b, c, g);
                    break;
                default:
                    return a
            }
            return Array.prototype.filter.call(a, f)
        }
    }

    function Ic(a, b, c) {
        var d, e = v(a) && "$" in a;
        return b === !0 ? b = Q : A(b) || (b = function(a, b) {
            return t(a) ? !1 : null === a || null === b ? a === b : v(b) || v(a) && !s(a) ? !1 : (a = wd("" + a), b = wd("" + b), -1 !== a.indexOf(b))
        }), d = function(d) {
            return e && !v(d) ? Jc(d, a.$, b, !1) : Jc(d, a, b, c)
        }
    }

    function Jc(a, b, c, d, e) {
        var f = Kc(a),
            g = Kc(b);
        if ("string" === g && "!" === b.charAt(0)) return !Jc(a, b.substring(1), c, d);
        if (Od(a)) return a.some(function(a) {
            return Jc(a, b, c, d)
        });
        switch (f) {
            case "object":
                var h;
                if (d) {
                    for (h in a)
                        if ("$" !== h.charAt(0) && Jc(a[h], b, c, !0)) return !0;
                    return e ? !1 : Jc(a, b, c, !1)
                }
                if ("object" === g) {
                    for (h in b) {
                        var i = b[h];
                        if (!A(i) && !t(i)) {
                            var j = "$" === h,
                                k = j ? a : a[h];
                            if (!Jc(k, i, c, j, j)) return !1
                        }
                    }
                    return !0
                }
                return c(a, b);
            case "function":
                return !1;
            default:
                return c(a, b)
        }
    }

    function Kc(a) {
        return null === a ? "null" : typeof a
    }

    function Lc(a) {
        var b = a.NUMBER_FORMATS;
        return function(a, c, d) {
            return t(c) && (c = b.CURRENCY_SYM), t(d) && (d = b.PATTERNS[1].maxFrac), null == a ? a : Nc(a, b.PATTERNS[1], b.GROUP_SEP, b.DECIMAL_SEP, d).replace(/\u00A4/g, c)
        }
    }

    function Mc(a) {
        var b = a.NUMBER_FORMATS;
        return function(a, c) {
            return null == a ? a : Nc(a, b.PATTERNS[0], b.GROUP_SEP, b.DECIMAL_SEP, c)
        }
    }

    function Nc(a, b, c, d, e) {
        if (v(a)) return "";
        var f = 0 > a;
        a = Math.abs(a);
        var g = a === 1 / 0;
        if (!g && !isFinite(a)) return "";
        var h = a + "",
            i = "",
            j = !1,
            k = [];
        if (g && (i = "âˆž"), !g && -1 !== h.indexOf("e")) {
            var l = h.match(/([\d\.]+)e(-?)(\d+)/);
            l && "-" == l[2] && l[3] > e + 1 ? a = 0 : (i = h, j = !0)
        }
        if (g || j) e > 0 && 1 > a && (i = a.toFixed(e), a = parseFloat(i), i = i.replace(lf, d));
        else {
            var m = (h.split(lf)[1] || "").length;
            t(e) && (e = Math.min(Math.max(b.minFrac, m), b.maxFrac)), a = +(Math.round(+(a.toString() + "e" + e)).toString() + "e" + -e);
            var n = ("" + a).split(lf),
                o = n[0];
            n = n[1] || "";
            var p, q = 0,
                r = b.lgSize,
                s = b.gSize;
            if (o.length >= r + s)
                for (q = o.length - r, p = 0; q > p; p++)(q - p) % s === 0 && 0 !== p && (i += c), i += o.charAt(p);
            for (p = q; p < o.length; p++)(o.length - p) % r === 0 && 0 !== p && (i += c), i += o.charAt(p);
            for (; n.length < e;) n += "0";
            e && "0" !== e && (i += d + n.substr(0, e))
        }
        return 0 === a && (f = !1), k.push(f ? b.negPre : b.posPre, i, f ? b.negSuf : b.posSuf), k.join("")
    }

    function Oc(a, b, c) {
        var d = "";
        for (0 > a && (d = "-", a = -a), a = "" + a; a.length < b;) a = "0" + a;
        return c && (a = a.substr(a.length - b)), d + a
    }

    function Pc(a, b, c, d) {
        return c = c || 0,
            function(e) {
                var f = e["get" + a]();
                return (c > 0 || f > -c) && (f += c), 0 === f && -12 == c && (f = 12), Oc(f, b, d)
            }
    }

    function Qc(a, b) {
        return function(c, d) {
            var e = c["get" + a](),
                f = yd(b ? "SHORT" + a : a);
            return d[f][e]
        }
    }

    function Rc(a, b, c) {
        var d = -1 * c,
            e = d >= 0 ? "+" : "";
        return e += Oc(Math[d > 0 ? "floor" : "ceil"](d / 60), 2) + Oc(Math.abs(d % 60), 2)
    }

    function Sc(a) {
        var b = new Date(a, 0, 1).getDay();
        return new Date(a, 0, (4 >= b ? 5 : 12) - b)
    }

    function Tc(a) {
        return new Date(a.getFullYear(), a.getMonth(), a.getDate() + (4 - a.getDay()))
    }

    function Uc(a) {
        return function(b) {
            var c = Sc(b.getFullYear()),
                d = Tc(b),
                e = +d - +c,
                f = 1 + Math.round(e / 6048e5);
            return Oc(f, a)
        }
    }

    function Vc(a, b) {
        return a.getHours() < 12 ? b.AMPMS[0] : b.AMPMS[1]
    }

    function Wc(a, b) {
        return a.getFullYear() <= 0 ? b.ERAS[0] : b.ERAS[1]
    }

    function Xc(a, b) {
        return a.getFullYear() <= 0 ? b.ERANAMES[0] : b.ERANAMES[1]
    }

    function Yc(a) {
        function b(a) {
            var b;
            if (b = a.match(c)) {
                var d = new Date(0),
                    e = 0,
                    f = 0,
                    g = b[8] ? d.setUTCFullYear : d.setFullYear,
                    h = b[8] ? d.setUTCHours : d.setHours;
                b[9] && (e = n(b[9] + b[10]), f = n(b[9] + b[11])), g.call(d, n(b[1]), n(b[2]) - 1, n(b[3]));
                var i = n(b[4] || 0) - e,
                    j = n(b[5] || 0) - f,
                    k = n(b[6] || 0),
                    l = Math.round(1e3 * parseFloat("0." + (b[7] || 0)));
                return h.call(d, i, j, k, l), d
            }
            return a
        }
        var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function(c, d, e) {
            var g, h, i = "",
                j = [];
            if (d = d || "mediumDate", d = a.DATETIME_FORMATS[d] || d, x(c) && (c = of .test(c) ? n(c) : b(c)), y(c) && (c = new Date(c)), !z(c) || !isFinite(c.getTime())) return c;
            for (; d;) h = nf.exec(d), h ? (j = R(j, h, 1), d = j.pop()) : (j.push(d), d = null);
            var k = c.getTimezoneOffset();
            return e && (k = X(e, c.getTimezoneOffset()), c = Z(c, e, !0)), f(j, function(b) {
                g = mf[b], i += g ? g(c, a.DATETIME_FORMATS, k) : b.replace(/(^'|'$)/g, "").replace(/''/g, "'")
            }), i
        }
    }

    function Zc() {
        return function(a, b) {
            return t(b) && (b = 2), V(a, b)
        }
    }

    function $c() {
        return function(a, b, c) {
            return b = Math.abs(Number(b)) === 1 / 0 ? Number(b) : n(b), isNaN(b) ? a : (y(a) && (a = a.toString()), Od(a) || x(a) ? (c = !c || isNaN(c) ? 0 : n(c), c = 0 > c ? Math.max(0, a.length + c) : c, b >= 0 ? a.slice(c, c + b) : 0 === c ? a.slice(b, a.length) : a.slice(Math.max(0, c + b), c)) : a)
        }
    }

    function _c(a) {
        function b(b, c) {
            return c = c ? -1 : 1, b.map(function(b) {
                var d = 1,
                    e = q;
                if (A(b)) e = b;
                else if (x(b) && (("+" == b.charAt(0) || "-" == b.charAt(0)) && (d = "-" == b.charAt(0) ? -1 : 1, b = b.substring(1)), "" !== b && (e = a(b), e.constant))) {
                    var f = e();
                    e = function(a) {
                        return a[f]
                    }
                }
                return {
                    get: e,
                    descending: d * c
                }
            })
        }

        function c(a) {
            switch (typeof a) {
                case "number":
                case "boolean":
                case "string":
                    return !0;
                default:
                    return !1
            }
        }

        function d(a, b) {
            return "function" == typeof a.valueOf && (a = a.valueOf(), c(a)) ? a : s(a) && (a = a.toString(), c(a)) ? a : b
        }

        function f(a, b) {
            var c = typeof a;
            return null === a ? (c = "string", a = "null") : "string" === c ? a = a.toLowerCase() : "object" === c && (a = d(a, b)), {
                value: a,
                type: c
            }
        }

        function g(a, b) {
            var c = 0;
            return a.type === b.type ? a.value !== b.value && (c = a.value < b.value ? -1 : 1) : c = a.type < b.type ? -1 : 1, c
        }
        return function(a, c, d) {
            function h(a, b) {
                return {
                    value: a,
                    predicateValues: j.map(function(c) {
                        return f(c.get(a), b)
                    })
                }
            }

            function i(a, b) {
                for (var c = 0, d = 0, e = j.length; e > d && !(c = g(a.predicateValues[d], b.predicateValues[d]) * j[d].descending); ++d);
                return c
            }
            if (!e(a)) return a;
            Od(c) || (c = [c]), 0 === c.length && (c = ["+"]);
            var j = b(c, d);
            j.push({
                get: function() {
                    return {}
                },
                descending: d ? -1 : 1
            });
            var k = Array.prototype.map.call(a, h);
            return k.sort(i), a = k.map(function(a) {
                return a.value
            })
        }
    }

    function ad(a) {
        return A(a) && (a = {
            link: a
        }), a.restrict = a.restrict || "AC", r(a)
    }

    function bd(a, b) {
        a.$name = b
    }

    function cd(a, b, d, e, g) {
        var h = this,
            i = [];
        h.$error = {}, h.$$success = {}, h.$pending = c, h.$name = g(b.name || b.ngForm || "")(d), h.$dirty = !1, h.$pristine = !0, h.$valid = !0, h.$invalid = !1, h.$submitted = !1, h.$$parentForm = tf, h.$rollbackViewValue = function() {
            f(i, function(a) {
                a.$rollbackViewValue()
            })
        }, h.$commitViewValue = function() {
            f(i, function(a) {
                a.$commitViewValue()
            })
        }, h.$addControl = function(a) {
            na(a.$name, "input"), i.push(a), a.$name && (h[a.$name] = a), a.$$parentForm = h
        }, h.$$renameControl = function(a, b) {
            var c = a.$name;
            h[c] === a && delete h[c], h[b] = a, a.$name = b
        }, h.$removeControl = function(a) {
            a.$name && h[a.$name] === a && delete h[a.$name], f(h.$pending, function(b, c) {
                h.$setValidity(c, null, a)
            }), f(h.$error, function(b, c) {
                h.$setValidity(c, null, a)
            }), f(h.$$success, function(b, c) {
                h.$setValidity(c, null, a)
            }), N(i, a), a.$$parentForm = tf
        }, rd({
            ctrl: this,
            $element: a,
            set: function(a, b, c) {
                var d = a[b];
                if (d) {
                    var e = d.indexOf(c); - 1 === e && d.push(c)
                } else a[b] = [c]
            },
            unset: function(a, b, c) {
                var d = a[b];
                d && (N(d, c), 0 === d.length && delete a[b])
            },
            $animate: e
        }), h.$setDirty = function() {
            e.removeClass(a, bg), e.addClass(a, cg), h.$dirty = !0, h.$pristine = !1, h.$$parentForm.$setDirty()
        }, h.$setPristine = function() {
            e.setClass(a, bg, cg + " " + uf), h.$dirty = !1, h.$pristine = !0, h.$submitted = !1, f(i, function(a) {
                a.$setPristine()
            })
        }, h.$setUntouched = function() {
            f(i, function(a) {
                a.$setUntouched()
            })
        }, h.$setSubmitted = function() {
            e.addClass(a, uf), h.$submitted = !0, h.$$parentForm.$setSubmitted()
        }
    }

    function dd(a) {
        a.$formatters.push(function(b) {
            return a.$isEmpty(b) ? b : b.toString()
        })
    }

    function ed(a, b, c, d, e, f) {
        fd(a, b, c, d, e, f), dd(d)
    }

    function fd(a, b, c, d, e, f) {
        var g = wd(b[0].type);
        if (!e.android) {
            var h = !1;
            b.on("compositionstart", function(a) {
                h = !0
            }), b.on("compositionend", function() {
                h = !1, i()
            })
        }
        var i = function(a) {
            if (j && (f.defer.cancel(j), j = null), !h) {
                var e = b.val(),
                    i = a && a.type;
                "password" === g || c.ngTrim && "false" === c.ngTrim || (e = Qd(e)), (d.$viewValue !== e || "" === e && d.$$hasNativeValidators) && d.$setViewValue(e, i)
            }
        };
        if (e.hasEvent("input")) b.on("input", i);
        else {
            var j, k = function(a, b, c) {
                j || (j = f.defer(function() {
                    j = null, b && b.value === c || i(a)
                }))
            };
            b.on("keydown", function(a) {
                var b = a.keyCode;
                91 === b || b > 15 && 19 > b || b >= 37 && 40 >= b || k(a, this, this.value)
            }), e.hasEvent("paste") && b.on("paste cut", k)
        }
        b.on("change", i), d.$render = function() {
            var a = d.$isEmpty(d.$viewValue) ? "" : d.$viewValue;
            b.val() !== a && b.val(a)
        }
    }

    function gd(a, b) {
        if (z(a)) return a;
        if (x(a)) {
            Ef.lastIndex = 0;
            var c = Ef.exec(a);
            if (c) {
                var d = +c[1],
                    e = +c[2],
                    f = 0,
                    g = 0,
                    h = 0,
                    i = 0,
                    j = Sc(d),
                    k = 7 * (e - 1);
                return b && (f = b.getHours(), g = b.getMinutes(), h = b.getSeconds(), i = b.getMilliseconds()), new Date(d, 0, j.getDate() + k, f, g, h, i)
            }
        }
        return NaN
    }

    function hd(a, b) {
        return function(c, d) {
            var e, g;
            if (z(c)) return c;
            if (x(c)) {
                if ('"' == c.charAt(0) && '"' == c.charAt(c.length - 1) && (c = c.substring(1, c.length - 1)), yf.test(c)) return new Date(c);
                if (a.lastIndex = 0, e = a.exec(c)) return e.shift(), g = d ? {
                    yyyy: d.getFullYear(),
                    MM: d.getMonth() + 1,
                    dd: d.getDate(),
                    HH: d.getHours(),
                    mm: d.getMinutes(),
                    ss: d.getSeconds(),
                    sss: d.getMilliseconds() / 1e3
                } : {
                    yyyy: 1970,
                    MM: 1,
                    dd: 1,
                    HH: 0,
                    mm: 0,
                    ss: 0,
                    sss: 0
                }, f(e, function(a, c) {
                    c < b.length && (g[b[c]] = +a)
                }), new Date(g.yyyy, g.MM - 1, g.dd, g.HH, g.mm, g.ss || 0, 1e3 * g.sss || 0)
            }
            return NaN
        }
    }

    function id(a, b, d, e) {
        return function(f, g, h, i, j, k, l) {
            function m(a) {
                return a && !(a.getTime && a.getTime() !== a.getTime())
            }

            function n(a) {
                return u(a) && !z(a) ? d(a) || c : a
            }
            jd(f, g, h, i), fd(f, g, h, i, j, k);
            var o, p = i && i.$options && i.$options.timezone;
            if (i.$$parserName = a, i.$parsers.push(function(a) {
                    if (i.$isEmpty(a)) return null;
                    if (b.test(a)) {
                        var e = d(a, o);
                        return p && (e = Z(e, p)), e
                    }
                    return c
                }), i.$formatters.push(function(a) {
                    if (a && !z(a)) throw gg("datefmt", "Expected `{0}` to be a date", a);
                    return m(a) ? (o = a, o && p && (o = Z(o, p, !0)), l("date")(a, e, p)) : (o = null, "")
                }), u(h.min) || h.ngMin) {
                var q;
                i.$validators.min = function(a) {
                    return !m(a) || t(q) || d(a) >= q
                }, h.$observe("min", function(a) {
                    q = n(a), i.$validate()
                })
            }
            if (u(h.max) || h.ngMax) {
                var r;
                i.$validators.max = function(a) {
                    return !m(a) || t(r) || d(a) <= r
                }, h.$observe("max", function(a) {
                    r = n(a), i.$validate()
                })
            }
        }
    }

    function jd(a, b, d, e) {
        var f = b[0],
            g = e.$$hasNativeValidators = v(f.validity);
        g && e.$parsers.push(function(a) {
            var d = b.prop(vd) || {};
            return d.badInput && !d.typeMismatch ? c : a
        })
    }

    function kd(a, b, d, e, f, g) {
        if (jd(a, b, d, e), fd(a, b, d, e, f, g), e.$$parserName = "number", e.$parsers.push(function(a) {
                return e.$isEmpty(a) ? null : Bf.test(a) ? parseFloat(a) : c
            }), e.$formatters.push(function(a) {
                if (!e.$isEmpty(a)) {
                    if (!y(a)) throw gg("numfmt", "Expected `{0}` to be a number", a);
                    a = a.toString()
                }
                return a
            }), u(d.min) || d.ngMin) {
            var h;
            e.$validators.min = function(a) {
                return e.$isEmpty(a) || t(h) || a >= h
            }, d.$observe("min", function(a) {
                u(a) && !y(a) && (a = parseFloat(a, 10)), h = y(a) && !isNaN(a) ? a : c, e.$validate()
            })
        }
        if (u(d.max) || d.ngMax) {
            var i;
            e.$validators.max = function(a) {
                return e.$isEmpty(a) || t(i) || i >= a
            }, d.$observe("max", function(a) {
                u(a) && !y(a) && (a = parseFloat(a, 10)), i = y(a) && !isNaN(a) ? a : c, e.$validate()
            })
        }
    }

    function ld(a, b, c, d, e, f) {
        fd(a, b, c, d, e, f), dd(d), d.$$parserName = "url", d.$validators.url = function(a, b) {
            var c = a || b;
            return d.$isEmpty(c) || zf.test(c)
        }
    }

    function md(a, b, c, d, e, f) {
        fd(a, b, c, d, e, f), dd(d), d.$$parserName = "email", d.$validators.email = function(a, b) {
            var c = a || b;
            return d.$isEmpty(c) || Af.test(c)
        }
    }

    function nd(a, b, c, d) {
        t(c.name) && b.attr("name", i());
        var e = function(a) {
            b[0].checked && d.$setViewValue(c.value, a && a.type)
        };
        b.on("click", e), d.$render = function() {
            var a = c.value;
            b[0].checked = a == d.$viewValue
        }, c.$observe("value", d.$render)
    }

    function od(a, b, c, d, e) {
        var f;
        if (u(d)) {
            if (f = a(d), !f.constant) throw gg("constexpr", "Expected constant expression for `{0}`, but saw `{1}`.", c, d);
            return f(b)
        }
        return e
    }

    function pd(a, b, c, d, e, f, g, h) {
        var i = od(h, a, "ngTrueValue", c.ngTrueValue, !0),
            j = od(h, a, "ngFalseValue", c.ngFalseValue, !1),
            k = function(a) {
                d.$setViewValue(b[0].checked, a && a.type)
            };
        b.on("click", k), d.$render = function() {
            b[0].checked = d.$viewValue
        }, d.$isEmpty = function(a) {
            return a === !1
        }, d.$formatters.push(function(a) {
            return Q(a, i)
        }), d.$parsers.push(function(a) {
            return a ? i : j
        })
    }

    function qd(a, b) {
        return a = "ngClass" + a, ["$animate", function(c) {
            function d(a, b) {
                var c = [];
                a: for (var d = 0; d < a.length; d++) {
                    for (var e = a[d], f = 0; f < b.length; f++)
                        if (e == b[f]) continue a;
                    c.push(e)
                }
                return c
            }

            function e(a) {
                var b = [];
                return Od(a) ? (f(a, function(a) {
                    b = b.concat(e(a))
                }), b) : x(a) ? a.split(" ") : v(a) ? (f(a, function(a, c) {
                    a && (b = b.concat(c.split(" ")))
                }), b) : a
            }
            return {
                restrict: "AC",
                link: function(g, h, i) {
                    function j(a) {
                        var b = l(a, 1);
                        i.$addClass(b)
                    }

                    function k(a) {
                        var b = l(a, -1);
                        i.$removeClass(b)
                    }

                    function l(a, b) {
                        var c = h.data("$classCounts") || qa(),
                            d = [];
                        return f(a, function(a) {
                            (b > 0 || c[a]) && (c[a] = (c[a] || 0) + b, c[a] === +(b > 0) && d.push(a))
                        }), h.data("$classCounts", c), d.join(" ")
                    }

                    function m(a, b) {
                        var e = d(b, a),
                            f = d(a, b);
                        e = l(e, 1), f = l(f, -1), e && e.length && c.addClass(h, e), f && f.length && c.removeClass(h, f)
                    }

                    function n(a) {
                        if (b === !0 || g.$index % 2 === b) {
                            var c = e(a || []);
                            if (o) {
                                if (!Q(a, o)) {
                                    var d = e(o);
                                    m(d, c)
                                }
                            } else j(c)
                        }
                        o = P(a)
                    }
                    var o;
                    g.$watch(i[a], n, !0), i.$observe("class", function(b) {
                        n(g.$eval(i[a]))
                    }), "ngClass" !== a && g.$watch("$index", function(c, d) {
                        var f = 1 & c;
                        if (f !== (1 & d)) {
                            var h = e(g.$eval(i[a]));
                            f === b ? j(h) : k(h)
                        }
                    })
                }
            }
        }]
    }

    function rd(a) {
        function b(a, b, i) {
            t(b) ? d("$pending", a, i) : e("$pending", a, i), H(b) ? b ? (l(h.$error, a, i), k(h.$$success, a, i)) : (k(h.$error, a, i), l(h.$$success, a, i)) : (l(h.$error, a, i), l(h.$$success, a, i)), h.$pending ? (f(fg, !0), h.$valid = h.$invalid = c, g("", null)) : (f(fg, !1), h.$valid = sd(h.$error), h.$invalid = !h.$valid, g("", h.$valid));
            var j;
            j = h.$pending && h.$pending[a] ? c : h.$error[a] ? !1 : h.$$success[a] ? !0 : null, g(a, j), h.$$parentForm.$setValidity(a, j, h)
        }

        function d(a, b, c) {
            h[a] || (h[a] = {}), k(h[a], b, c)
        }

        function e(a, b, d) {
            h[a] && l(h[a], b, d), sd(h[a]) && (h[a] = c)
        }

        function f(a, b) {
            b && !j[a] ? (m.addClass(i, a), j[a] = !0) : !b && j[a] && (m.removeClass(i, a), j[a] = !1)
        }

        function g(a, b) {
            a = a ? "-" + ja(a, "-") : "", f(_f + a, b === !0), f(ag + a, b === !1)
        }
        var h = a.ctrl,
            i = a.$element,
            j = {},
            k = a.set,
            l = a.unset,
            m = a.$animate;
        j[ag] = !(j[_f] = i.hasClass(_f)), h.$setValidity = b
    }

    function sd(a) {
        if (a)
            for (var b in a)
                if (a.hasOwnProperty(b)) return !1;
        return !0
    }

    function td(a) {
        a[0].hasAttribute("selected") && (a[0].selected = !0)
    }
    var ud = /^\/(.+)\/([a-z]*)$/,
        vd = "validity",
        wd = function(a) {
            return x(a) ? a.toLowerCase() : a
        },
        xd = Object.prototype.hasOwnProperty,
        yd = function(a) {
            return x(a) ? a.toUpperCase() : a
        },
        zd = function(a) {
            return x(a) ? a.replace(/[A-Z]/g, function(a) {
                return String.fromCharCode(32 | a.charCodeAt(0))
            }) : a
        },
        Ad = function(a) {
            return x(a) ? a.replace(/[a-z]/g, function(a) {
                return String.fromCharCode(-33 & a.charCodeAt(0))
            }) : a
        };
    "i" !== "I".toLowerCase() && (wd = zd, yd = Ad);
    var Bd, Cd, Dd, Ed, Fd = [].slice,
        Gd = [].splice,
        Hd = [].push,
        Id = Object.prototype.toString,
        Jd = Object.getPrototypeOf,
        Kd = d("ng"),
        Ld = a.angular || (a.angular = {}),
        Md = 0;
    Bd = b.documentMode, p.$inject = [], q.$inject = [];
    var Nd, Od = Array.isArray,
        Pd = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/,
        Qd = function(a) {
            return x(a) ? a.trim() : a
        },
        Rd = function(a) {
            return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
        },
        Sd = function() {
            function a() {
                try {
                    return new Function(""), !1
                } catch (a) {
                    return !0
                }
            }
            if (!u(Sd.rules)) {
                var c = b.querySelector("[ng-csp]") || b.querySelector("[data-ng-csp]");
                if (c) {
                    var d = c.getAttribute("ng-csp") || c.getAttribute("data-ng-csp");
                    Sd.rules = {
                        noUnsafeEval: !d || -1 !== d.indexOf("no-unsafe-eval"),
                        noInlineStyle: !d || -1 !== d.indexOf("no-inline-style")
                    }
                } else Sd.rules = {
                    noUnsafeEval: a(),
                    noInlineStyle: !1
                }
            }
            return Sd.rules
        },
        Td = function() {
            if (u(Td.name_)) return Td.name_;
            var a, c, d, e, f = Ud.length;
            for (c = 0; f > c; ++c)
                if (d = Ud[c], a = b.querySelector("[" + d.replace(":", "\\:") + "jq]")) {
                    e = a.getAttribute(d + "jq");
                    break
                }
            return Td.name_ = e
        },
        Ud = ["ng-", "data-ng-", "ng:", "x-ng-"],
        Vd = /[A-Z]/g,
        Wd = !1,
        Xd = 1,
        Yd = 2,
        Zd = 3,
        $d = 8,
        _d = 9,
        ae = 11,
        be = {
            full: "1.4.8",
            major: 1,
            minor: 4,
            dot: 8,
            codeName: "ice-manipulation"
        };
    Ca.expando = "ng339";
    var ce = Ca.cache = {},
        de = 1,
        ee = function(a, b, c) {
            a.addEventListener(b, c, !1)
        },
        fe = function(a, b, c) {
            a.removeEventListener(b, c, !1)
        };
    Ca._data = function(a) {
        return this.cache[a[this.expando]] || {}
    };
    var ge = /([\:\-\_]+(.))/g,
        he = /^moz([A-Z])/,
        ie = {
            mouseleave: "mouseout",
            mouseenter: "mouseover"
        },
        je = d("jqLite"),
        ke = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        le = /<|&#?\w+;/,
        me = /<([\w:-]+)/,
        ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        oe = {
            option: [1, '<select multiple="multiple">', "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    oe.optgroup = oe.option, oe.tbody = oe.tfoot = oe.colgroup = oe.caption = oe.thead, oe.th = oe.td;
    var pe = Node.prototype.contains || function(a) {
            return !!(16 & this.compareDocumentPosition(a))
        },
        qe = Ca.prototype = {
            ready: function(c) {
                function d() {
                    e || (e = !0, c())
                }
                var e = !1;
                "complete" === b.readyState ? setTimeout(d) : (this.on("DOMContentLoaded", d), Ca(a).on("load", d))
            },
            toString: function() {
                var a = [];
                return f(this, function(b) {
                    a.push("" + b)
                }), "[" + a.join(", ") + "]"
            },
            eq: function(a) {
                return Cd(a >= 0 ? this[a] : this[this.length + a])
            },
            length: 0,
            push: Hd,
            sort: [].sort,
            splice: [].splice
        },
        re = {};
    f("multiple,selected,checked,disabled,readOnly,required,open".split(","), function(a) {
        re[wd(a)] = a
    });
    var se = {};
    f("input,select,option,textarea,button,form,details".split(","), function(a) {
        se[a] = !0
    });
    var te = {
        ngMinlength: "minlength",
        ngMaxlength: "maxlength",
        ngMin: "min",
        ngMax: "max",
        ngPattern: "pattern"
    };
    f({
        data: Ia,
        removeData: Ga,
        hasData: za
    }, function(a, b) {
        Ca[b] = a
    }), f({
        data: Ia,
        inheritedData: Oa,
        scope: function(a) {
            return Cd.data(a, "$scope") || Oa(a.parentNode || a, ["$isolateScope", "$scope"])
        },
        isolateScope: function(a) {
            return Cd.data(a, "$isolateScope") || Cd.data(a, "$isolateScopeNoTemplate")
        },
        controller: Na,
        injector: function(a) {
            return Oa(a, "$injector")
        },
        removeAttr: function(a, b) {
            a.removeAttribute(b)
        },
        hasClass: Ja,
        css: function(a, b, c) {
            return b = wa(b), u(c) ? void(a.style[b] = c) : a.style[b];
        },
        attr: function(a, b, d) {
            var e = a.nodeType;
            if (e !== Zd && e !== Yd && e !== $d) {
                var f = wd(b);
                if (re[f]) {
                    if (!u(d)) return a[b] || (a.attributes.getNamedItem(b) || p).specified ? f : c;
                    d ? (a[b] = !0, a.setAttribute(b, f)) : (a[b] = !1, a.removeAttribute(f))
                } else if (u(d)) a.setAttribute(b, d);
                else if (a.getAttribute) {
                    var g = a.getAttribute(b, 2);
                    return null === g ? c : g
                }
            }
        },
        prop: function(a, b, c) {
            return u(c) ? void(a[b] = c) : a[b]
        },
        text: function() {
            function a(a, b) {
                if (t(b)) {
                    var c = a.nodeType;
                    return c === Xd || c === Zd ? a.textContent : ""
                }
                a.textContent = b
            }
            return a.$dv = "", a
        }(),
        val: function(a, b) {
            if (t(b)) {
                if (a.multiple && "select" === M(a)) {
                    var c = [];
                    return f(a.options, function(a) {
                        a.selected && c.push(a.value || a.text)
                    }), 0 === c.length ? null : c
                }
                return a.value
            }
            a.value = b
        },
        html: function(a, b) {
            return t(b) ? a.innerHTML : (Ea(a, !0), void(a.innerHTML = b))
        },
        empty: Pa
    }, function(a, b) {
        Ca.prototype[b] = function(b, c) {
            var d, e, f = this.length;
            if (a !== Pa && t(2 == a.length && a !== Ja && a !== Na ? b : c)) {
                if (v(b)) {
                    for (d = 0; f > d; d++)
                        if (a === Ia) a(this[d], b);
                        else
                            for (e in b) a(this[d], e, b[e]);
                    return this
                }
                for (var g = a.$dv, h = t(g) ? Math.min(f, 1) : f, i = 0; h > i; i++) {
                    var j = a(this[i], b, c);
                    g = g ? g + j : j
                }
                return g
            }
            for (d = 0; f > d; d++) a(this[d], b, c);
            return this
        }
    }), f({
        removeData: Ga,
        on: function(a, b, d, e) {
            if (u(e)) throw je("onargs", "jqLite#on() does not support the `selector` or `eventData` parameters");
            if (ya(a)) {
                var f = Ha(a, !0),
                    g = f.events,
                    h = f.handle;
                h || (h = f.handle = Ua(a, g));
                for (var i = b.indexOf(" ") >= 0 ? b.split(" ") : [b], j = i.length, k = function(b, c, e) {
                        var f = g[b];
                        f || (f = g[b] = [], f.specialHandlerWrapper = c, "$destroy" === b || e || ee(a, b, h)), f.push(d)
                    }; j--;) b = i[j], ie[b] ? (k(ie[b], Wa), k(b, c, !0)) : k(b)
            }
        },
        off: Fa,
        one: function(a, b, c) {
            a = Cd(a), a.on(b, function d() {
                a.off(b, c), a.off(b, d)
            }), a.on(b, c)
        },
        replaceWith: function(a, b) {
            var c, d = a.parentNode;
            Ea(a), f(new Ca(b), function(b) {
                c ? d.insertBefore(b, c.nextSibling) : d.replaceChild(b, a), c = b
            })
        },
        children: function(a) {
            var b = [];
            return f(a.childNodes, function(a) {
                a.nodeType === Xd && b.push(a)
            }), b
        },
        contents: function(a) {
            return a.contentDocument || a.childNodes || []
        },
        append: function(a, b) {
            var c = a.nodeType;
            if (c === Xd || c === ae) {
                b = new Ca(b);
                for (var d = 0, e = b.length; e > d; d++) {
                    var f = b[d];
                    a.appendChild(f)
                }
            }
        },
        prepend: function(a, b) {
            if (a.nodeType === Xd) {
                var c = a.firstChild;
                f(new Ca(b), function(b) {
                    a.insertBefore(b, c)
                })
            }
        },
        wrap: function(a, b) {
            b = Cd(b).eq(0).clone()[0];
            var c = a.parentNode;
            c && c.replaceChild(b, a), b.appendChild(a)
        },
        remove: Qa,
        detach: function(a) {
            Qa(a, !0)
        },
        after: function(a, b) {
            var c = a,
                d = a.parentNode;
            b = new Ca(b);
            for (var e = 0, f = b.length; f > e; e++) {
                var g = b[e];
                d.insertBefore(g, c.nextSibling), c = g
            }
        },
        addClass: La,
        removeClass: Ka,
        toggleClass: function(a, b, c) {
            b && f(b.split(" "), function(b) {
                var d = c;
                t(d) && (d = !Ja(a, b)), (d ? La : Ka)(a, b)
            })
        },
        parent: function(a) {
            var b = a.parentNode;
            return b && b.nodeType !== ae ? b : null
        },
        next: function(a) {
            return a.nextElementSibling
        },
        find: function(a, b) {
            return a.getElementsByTagName ? a.getElementsByTagName(b) : []
        },
        clone: Da,
        triggerHandler: function(a, b, c) {
            var d, e, g, h = b.type || b,
                i = Ha(a),
                j = i && i.events,
                k = j && j[h];
            k && (d = {
                preventDefault: function() {
                    this.defaultPrevented = !0
                },
                isDefaultPrevented: function() {
                    return this.defaultPrevented === !0
                },
                stopImmediatePropagation: function() {
                    this.immediatePropagationStopped = !0
                },
                isImmediatePropagationStopped: function() {
                    return this.immediatePropagationStopped === !0
                },
                stopPropagation: p,
                type: h,
                target: a
            }, b.type && (d = l(d, b)), e = P(k), g = c ? [d].concat(c) : [d], f(e, function(b) {
                d.isImmediatePropagationStopped() || b.apply(a, g)
            }))
        }
    }, function(a, b) {
        Ca.prototype[b] = function(b, c, d) {
            for (var e, f = 0, g = this.length; g > f; f++) t(e) ? (e = a(this[f], b, c, d), u(e) && (e = Cd(e))) : Ma(e, a(this[f], b, c, d));
            return u(e) ? e : this
        }, Ca.prototype.bind = Ca.prototype.on, Ca.prototype.unbind = Ca.prototype.off
    }), Za.prototype = {
        put: function(a, b) {
            this[Ya(a, this.nextUid)] = b
        },
        get: function(a) {
            return this[Ya(a, this.nextUid)]
        },
        remove: function(a) {
            var b = this[a = Ya(a, this.nextUid)];
            return delete this[a], b
        }
    };
    var ue = [function() {
            this.$get = [function() {
                return Za
            }]
        }],
        ve = /^[^\(]*\(\s*([^\)]*)\)/m,
        we = /,/,
        xe = /^\s*(_?)(\S+?)\1\s*$/,
        ye = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,
        ze = d("$injector");
    ab.$$annotate = _a;
    var Ae = d("$animate"),
        Be = 1,
        Ce = "ng-animate",
        De = function() {
            this.$get = ["$q", "$$rAF", function(a, b) {
                function c() {}
                return c.all = p, c.chain = p, c.prototype = {
                    end: p,
                    cancel: p,
                    resume: p,
                    pause: p,
                    complete: p,
                    then: function(c, d) {
                        return a(function(a) {
                            b(function() {
                                a()
                            })
                        }).then(c, d)
                    }
                }, c
            }]
        },
        Ee = function() {
            var a = new Za,
                b = [];
            this.$get = ["$$AnimateRunner", "$rootScope", function(c, d) {
                function e(a, b, c) {
                    var d = !1;
                    return b && (b = x(b) ? b.split(" ") : Od(b) ? b : [], f(b, function(b) {
                        b && (d = !0, a[b] = c)
                    })), d
                }

                function g() {
                    f(b, function(b) {
                        var c = a.get(b);
                        if (c) {
                            var d = eb(b.attr("class")),
                                e = "",
                                g = "";
                            f(c, function(a, b) {
                                var c = !!d[b];
                                a !== c && (a ? e += (e.length ? " " : "") + b : g += (g.length ? " " : "") + b)
                            }), f(b, function(a) {
                                e && La(a, e), g && Ka(a, g)
                            }), a.remove(b)
                        }
                    }), b.length = 0
                }

                function h(c, f, h) {
                    var i = a.get(c) || {},
                        j = e(i, f, !0),
                        k = e(i, h, !1);
                    (j || k) && (a.put(c, i), b.push(c), 1 === b.length && d.$$postDigest(g))
                }
                return {
                    enabled: p,
                    on: p,
                    off: p,
                    pin: p,
                    push: function(a, b, d, e) {
                        return e && e(), d = d || {}, d.from && a.css(d.from), d.to && a.css(d.to), (d.addClass || d.removeClass) && h(a, d.addClass, d.removeClass), new c
                    }
                }
            }]
        },
        Fe = ["$provide", function(a) {
            var b = this;
            this.$$registeredAnimations = Object.create(null), this.register = function(c, d) {
                if (c && "." !== c.charAt(0)) throw Ae("notcsel", "Expecting class selector starting with '.' got '{0}'.", c);
                var e = c + "-animation";
                b.$$registeredAnimations[c.substr(1)] = e, a.factory(e, d)
            }, this.classNameFilter = function(a) {
                if (1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null, this.$$classNameFilter)) {
                    var b = new RegExp("(\\s+|\\/)" + Ce + "(\\s+|\\/)");
                    if (b.test(this.$$classNameFilter.toString())) throw Ae("nongcls", '$animateProvider.classNameFilter(regex) prohibits accepting a regex value which matches/contains the "{0}" CSS class.', Ce)
                }
                return this.$$classNameFilter
            }, this.$get = ["$$animateQueue", function(a) {
                function b(a, b, c) {
                    if (c) {
                        var d = db(c);
                        !d || d.parentNode || d.previousElementSibling || (c = null)
                    }
                    c ? c.after(a) : b.prepend(a)
                }
                return {
                    on: a.on,
                    off: a.off,
                    pin: a.pin,
                    enabled: a.enabled,
                    cancel: function(a) {
                        a.end && a.end()
                    },
                    enter: function(c, d, e, f) {
                        return d = d && Cd(d), e = e && Cd(e), d = d || e.parent(), b(c, d, e), a.push(c, "enter", fb(f))
                    },
                    move: function(c, d, e, f) {
                        return d = d && Cd(d), e = e && Cd(e), d = d || e.parent(), b(c, d, e), a.push(c, "move", fb(f))
                    },
                    leave: function(b, c) {
                        return a.push(b, "leave", fb(c), function() {
                            b.remove()
                        })
                    },
                    addClass: function(b, c, d) {
                        return d = fb(d), d.addClass = cb(d.addclass, c), a.push(b, "addClass", d)
                    },
                    removeClass: function(b, c, d) {
                        return d = fb(d), d.removeClass = cb(d.removeClass, c), a.push(b, "removeClass", d)
                    },
                    setClass: function(b, c, d, e) {
                        return e = fb(e), e.addClass = cb(e.addClass, c), e.removeClass = cb(e.removeClass, d), a.push(b, "setClass", e)
                    },
                    animate: function(b, c, d, e, f) {
                        return f = fb(f), f.from = f.from ? l(f.from, c) : c, f.to = f.to ? l(f.to, d) : d, e = e || "ng-inline-animate", f.tempClasses = cb(f.tempClasses, e), a.push(b, "animate", f)
                    }
                }
            }]
        }],
        Ge = function() {
            this.$get = ["$$rAF", "$q", function(a, b) {
                var c = function() {};
                return c.prototype = {
                        done: function(a) {
                            this.defer && this.defer[a === !0 ? "reject" : "resolve"]()
                        },
                        end: function() {
                            this.done()
                        },
                        cancel: function() {
                            this.done(!0)
                        },
                        getPromise: function() {
                            return this.defer || (this.defer = b.defer()), this.defer.promise
                        },
                        then: function(a, b) {
                            return this.getPromise().then(a, b)
                        },
                        "catch": function(a) {
                            return this.getPromise()["catch"](a)
                        },
                        "finally": function(a) {
                            return this.getPromise()["finally"](a)
                        }
                    },
                    function(b, d) {
                        function e() {
                            return a(function() {
                                f(), g || h.done(), g = !0
                            }), h
                        }

                        function f() {
                            d.addClass && (b.addClass(d.addClass), d.addClass = null), d.removeClass && (b.removeClass(d.removeClass), d.removeClass = null), d.to && (b.css(d.to), d.to = null)
                        }
                        d.cleanupStyles && (d.from = d.to = null), d.from && (b.css(d.from), d.from = null);
                        var g, h = new c;
                        return {
                            start: e,
                            end: e
                        }
                    }
            }]
        },
        He = d("$compile");
    kb.$inject = ["$provide", "$$sanitizeUriProvider"];
    var Ie = /^((?:x|data)[\:\-_])/i,
        Je = d("$controller"),
        Ke = /^(\S+)(\s+as\s+(\w+))?$/,
        Le = function() {
            this.$get = ["$document", function(a) {
                return function(b) {
                    return b ? !b.nodeType && b instanceof Cd && (b = b[0]) : b = a[0].body, b.offsetWidth + 1
                }
            }]
        },
        Me = "application/json",
        Ne = {
            "Content-Type": Me + ";charset=utf-8"
        },
        Oe = /^\[|^\{(?!\{)/,
        Pe = {
            "[": /]$/,
            "{": /}$/
        },
        Qe = /^\)\]\}',?\n/,
        Re = d("$http"),
        Se = function(a) {
            return function() {
                throw Re("legacy", "The method `{0}` on the promise returned from `$http` has been disabled.", a)
            }
        },
        Te = Ld.$interpolateMinErr = d("$interpolate");
    Te.throwNoconcat = function(a) {
        throw Te("noconcat", "Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce", a)
    }, Te.interr = function(a, b) {
        return Te("interr", "Can't interpolate: {0}\n{1}", a, b.toString())
    };
    var Ue = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
        Ve = {
            http: 80,
            https: 443,
            ftp: 21
        },
        We = d("$location"),
        Xe = {
            $$html5: !1,
            $$replace: !1,
            absUrl: Sb("$$absUrl"),
            url: function(a) {
                if (t(a)) return this.$$url;
                var b = Ue.exec(a);
                return (b[1] || "" === a) && this.path(decodeURIComponent(b[1])), (b[2] || b[1] || "" === a) && this.search(b[3] || ""), this.hash(b[5] || ""), this
            },
            protocol: Sb("$$protocol"),
            host: Sb("$$host"),
            port: Sb("$$port"),
            path: Tb("$$path", function(a) {
                return a = null !== a ? a.toString() : "", "/" == a.charAt(0) ? a : "/" + a
            }),
            search: function(a, b) {
                switch (arguments.length) {
                    case 0:
                        return this.$$search;
                    case 1:
                        if (x(a) || y(a)) a = a.toString(), this.$$search = aa(a);
                        else {
                            if (!v(a)) throw We("isrcharg", "The first argument of the `$location#search()` call must be a string or an object.");
                            a = O(a, {}), f(a, function(b, c) {
                                null == b && delete a[c]
                            }), this.$$search = a
                        }
                        break;
                    default:
                        t(b) || null === b ? delete this.$$search[a] : this.$$search[a] = b
                }
                return this.$$compose(), this
            },
            hash: Tb("$$hash", function(a) {
                return null !== a ? a.toString() : ""
            }),
            replace: function() {
                return this.$$replace = !0, this
            }
        };
    f([Rb, Qb, Pb], function(a) {
        a.prototype = Object.create(Xe), a.prototype.state = function(b) {
            if (!arguments.length) return this.$$state;
            if (a !== Pb || !this.$$html5) throw We("nostate", "History API state support is available only in HTML5 mode and only in browsers supporting HTML5 History API");
            return this.$$state = t(b) ? null : b, this
        }
    });
    var Ye = d("$parse"),
        Ze = Function.prototype.call,
        $e = Function.prototype.apply,
        _e = Function.prototype.bind,
        af = qa();
    f("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function(a) {
        af[a] = !0
    });
    var bf = {
            n: "\n",
            f: "\f",
            r: "\r",
            t: "	",
            v: "",
            "'": "'",
            '"': '"'
        },
        cf = function(a) {
            this.options = a
        };
    cf.prototype = {
        constructor: cf,
        lex: function(a) {
            for (this.text = a, this.index = 0, this.tokens = []; this.index < this.text.length;) {
                var b = this.text.charAt(this.index);
                if ('"' === b || "'" === b) this.readString(b);
                else if (this.isNumber(b) || "." === b && this.isNumber(this.peek())) this.readNumber();
                else if (this.isIdent(b)) this.readIdent();
                else if (this.is(b, "(){}[].,;:?")) this.tokens.push({
                    index: this.index,
                    text: b
                }), this.index++;
                else if (this.isWhitespace(b)) this.index++;
                else {
                    var c = b + this.peek(),
                        d = c + this.peek(2),
                        e = af[b],
                        f = af[c],
                        g = af[d];
                    if (e || f || g) {
                        var h = g ? d : f ? c : b;
                        this.tokens.push({
                            index: this.index,
                            text: h,
                            operator: !0
                        }), this.index += h.length
                    } else this.throwError("Unexpected next character ", this.index, this.index + 1)
                }
            }
            return this.tokens
        },
        is: function(a, b) {
            return -1 !== b.indexOf(a)
        },
        peek: function(a) {
            var b = a || 1;
            return this.index + b < this.text.length ? this.text.charAt(this.index + b) : !1
        },
        isNumber: function(a) {
            return a >= "0" && "9" >= a && "string" == typeof a
        },
        isWhitespace: function(a) {
            return " " === a || "\r" === a || "	" === a || "\n" === a || "" === a || "Â " === a
        },
        isIdent: function(a) {
            return a >= "a" && "z" >= a || a >= "A" && "Z" >= a || "_" === a || "$" === a
        },
        isExpOperator: function(a) {
            return "-" === a || "+" === a || this.isNumber(a)
        },
        throwError: function(a, b, c) {
            c = c || this.index;
            var d = u(b) ? "s " + b + "-" + this.index + " [" + this.text.substring(b, c) + "]" : " " + c;
            throw Ye("lexerr", "Lexer Error: {0} at column{1} in expression [{2}].", a, d, this.text)
        },
        readNumber: function() {
            for (var a = "", b = this.index; this.index < this.text.length;) {
                var c = wd(this.text.charAt(this.index));
                if ("." == c || this.isNumber(c)) a += c;
                else {
                    var d = this.peek();
                    if ("e" == c && this.isExpOperator(d)) a += c;
                    else if (this.isExpOperator(c) && d && this.isNumber(d) && "e" == a.charAt(a.length - 1)) a += c;
                    else {
                        if (!this.isExpOperator(c) || d && this.isNumber(d) || "e" != a.charAt(a.length - 1)) break;
                        this.throwError("Invalid exponent")
                    }
                }
                this.index++
            }
            this.tokens.push({
                index: b,
                text: a,
                constant: !0,
                value: Number(a)
            })
        },
        readIdent: function() {
            for (var a = this.index; this.index < this.text.length;) {
                var b = this.text.charAt(this.index);
                if (!this.isIdent(b) && !this.isNumber(b)) break;
                this.index++
            }
            this.tokens.push({
                index: a,
                text: this.text.slice(a, this.index),
                identifier: !0
            })
        },
        readString: function(a) {
            var b = this.index;
            this.index++;
            for (var c = "", d = a, e = !1; this.index < this.text.length;) {
                var f = this.text.charAt(this.index);
                if (d += f, e) {
                    if ("u" === f) {
                        var g = this.text.substring(this.index + 1, this.index + 5);
                        g.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + g + "]"), this.index += 4, c += String.fromCharCode(parseInt(g, 16))
                    } else {
                        var h = bf[f];
                        c += h || f
                    }
                    e = !1
                } else if ("\\" === f) e = !0;
                else {
                    if (f === a) return this.index++, void this.tokens.push({
                        index: b,
                        text: d,
                        constant: !0,
                        value: c
                    });
                    c += f
                }
                this.index++
            }
            this.throwError("Unterminated quote", b)
        }
    };
    var df = function(a, b) {
        this.lexer = a, this.options = b
    };
    df.Program = "Program", df.ExpressionStatement = "ExpressionStatement", df.AssignmentExpression = "AssignmentExpression", df.ConditionalExpression = "ConditionalExpression", df.LogicalExpression = "LogicalExpression", df.BinaryExpression = "BinaryExpression", df.UnaryExpression = "UnaryExpression", df.CallExpression = "CallExpression", df.MemberExpression = "MemberExpression", df.Identifier = "Identifier", df.Literal = "Literal", df.ArrayExpression = "ArrayExpression", df.Property = "Property", df.ObjectExpression = "ObjectExpression", df.ThisExpression = "ThisExpression", df.NGValueParameter = "NGValueParameter", df.prototype = {
        ast: function(a) {
            this.text = a, this.tokens = this.lexer.lex(a);
            var b = this.program();
            return 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), b
        },
        program: function() {
            for (var a = [];;)
                if (this.tokens.length > 0 && !this.peek("}", ")", ";", "]") && a.push(this.expressionStatement()), !this.expect(";")) return {
                    type: df.Program,
                    body: a
                }
        },
        expressionStatement: function() {
            return {
                type: df.ExpressionStatement,
                expression: this.filterChain()
            }
        },
        filterChain: function() {
            for (var a, b = this.expression(); a = this.expect("|");) b = this.filter(b);
            return b
        },
        expression: function() {
            return this.assignment()
        },
        assignment: function() {
            var a = this.ternary();
            return this.expect("=") && (a = {
                type: df.AssignmentExpression,
                left: a,
                right: this.assignment(),
                operator: "="
            }), a
        },
        ternary: function() {
            var a, b, c = this.logicalOR();
            return this.expect("?") && (a = this.expression(), this.consume(":")) ? (b = this.expression(), {
                type: df.ConditionalExpression,
                test: c,
                alternate: a,
                consequent: b
            }) : c
        },
        logicalOR: function() {
            for (var a = this.logicalAND(); this.expect("||");) a = {
                type: df.LogicalExpression,
                operator: "||",
                left: a,
                right: this.logicalAND()
            };
            return a
        },
        logicalAND: function() {
            for (var a = this.equality(); this.expect("&&");) a = {
                type: df.LogicalExpression,
                operator: "&&",
                left: a,
                right: this.equality()
            };
            return a
        },
        equality: function() {
            for (var a, b = this.relational(); a = this.expect("==", "!=", "===", "!==");) b = {
                type: df.BinaryExpression,
                operator: a.text,
                left: b,
                right: this.relational()
            };
            return b
        },
        relational: function() {
            for (var a, b = this.additive(); a = this.expect("<", ">", "<=", ">=");) b = {
                type: df.BinaryExpression,
                operator: a.text,
                left: b,
                right: this.additive()
            };
            return b
        },
        additive: function() {
            for (var a, b = this.multiplicative(); a = this.expect("+", "-");) b = {
                type: df.BinaryExpression,
                operator: a.text,
                left: b,
                right: this.multiplicative()
            };
            return b
        },
        multiplicative: function() {
            for (var a, b = this.unary(); a = this.expect("*", "/", "%");) b = {
                type: df.BinaryExpression,
                operator: a.text,
                left: b,
                right: this.unary()
            };
            return b
        },
        unary: function() {
            var a;
            return (a = this.expect("+", "-", "!")) ? {
                type: df.UnaryExpression,
                operator: a.text,
                prefix: !0,
                argument: this.unary()
            } : this.primary()
        },
        primary: function() {
            var a;
            this.expect("(") ? (a = this.filterChain(), this.consume(")")) : this.expect("[") ? a = this.arrayDeclaration() : this.expect("{") ? a = this.object() : this.constants.hasOwnProperty(this.peek().text) ? a = O(this.constants[this.consume().text]) : this.peek().identifier ? a = this.identifier() : this.peek().constant ? a = this.constant() : this.throwError("not a primary expression", this.peek());
            for (var b; b = this.expect("(", "[", ".");) "(" === b.text ? (a = {
                type: df.CallExpression,
                callee: a,
                arguments: this.parseArguments()
            }, this.consume(")")) : "[" === b.text ? (a = {
                type: df.MemberExpression,
                object: a,
                property: this.expression(),
                computed: !0
            }, this.consume("]")) : "." === b.text ? a = {
                type: df.MemberExpression,
                object: a,
                property: this.identifier(),
                computed: !1
            } : this.throwError("IMPOSSIBLE");
            return a
        },
        filter: function(a) {
            for (var b = [a], c = {
                    type: df.CallExpression,
                    callee: this.identifier(),
                    arguments: b,
                    filter: !0
                }; this.expect(":");) b.push(this.expression());
            return c
        },
        parseArguments: function() {
            var a = [];
            if (")" !== this.peekToken().text)
                do a.push(this.expression()); while (this.expect(","));
            return a
        },
        identifier: function() {
            var a = this.consume();
            return a.identifier || this.throwError("is not a valid identifier", a), {
                type: df.Identifier,
                name: a.text
            }
        },
        constant: function() {
            return {
                type: df.Literal,
                value: this.consume().value
            }
        },
        arrayDeclaration: function() {
            var a = [];
            if ("]" !== this.peekToken().text)
                do {
                    if (this.peek("]")) break;
                    a.push(this.expression())
                } while (this.expect(","));
            return this.consume("]"), {
                type: df.ArrayExpression,
                elements: a
            }
        },
        object: function() {
            var a, b = [];
            if ("}" !== this.peekToken().text)
                do {
                    if (this.peek("}")) break;
                    a = {
                        type: df.Property,
                        kind: "init"
                    }, this.peek().constant ? a.key = this.constant() : this.peek().identifier ? a.key = this.identifier() : this.throwError("invalid key", this.peek()), this.consume(":"), a.value = this.expression(), b.push(a)
                } while (this.expect(","));
            return this.consume("}"), {
                type: df.ObjectExpression,
                properties: b
            }
        },
        throwError: function(a, b) {
            throw Ye("syntax", "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].", b.text, a, b.index + 1, this.text, this.text.substring(b.index))
        },
        consume: function(a) {
            if (0 === this.tokens.length) throw Ye("ueoe", "Unexpected end of expression: {0}", this.text);
            var b = this.expect(a);
            return b || this.throwError("is unexpected, expecting [" + a + "]", this.peek()), b
        },
        peekToken: function() {
            if (0 === this.tokens.length) throw Ye("ueoe", "Unexpected end of expression: {0}", this.text);
            return this.tokens[0]
        },
        peek: function(a, b, c, d) {
            return this.peekAhead(0, a, b, c, d)
        },
        peekAhead: function(a, b, c, d, e) {
            if (this.tokens.length > a) {
                var f = this.tokens[a],
                    g = f.text;
                if (g === b || g === c || g === d || g === e || !b && !c && !d && !e) return f
            }
            return !1
        },
        expect: function(a, b, c, d) {
            var e = this.peek(a, b, c, d);
            return e ? (this.tokens.shift(), e) : !1
        },
        constants: {
            "true": {
                type: df.Literal,
                value: !0
            },
            "false": {
                type: df.Literal,
                value: !1
            },
            "null": {
                type: df.Literal,
                value: null
            },
            undefined: {
                type: df.Literal,
                value: c
            },
            "this": {
                type: df.ThisExpression
            }
        }
    }, ic.prototype = {
        compile: function(a, b) {
            var d = this,
                e = this.astBuilder.ast(a);
            this.state = {
                nextId: 0,
                filters: {},
                expensiveChecks: b,
                fn: {
                    vars: [],
                    body: [],
                    own: {}
                },
                assign: {
                    vars: [],
                    body: [],
                    own: {}
                },
                inputs: []
            }, cc(e, d.$filter);
            var g, h = "";
            if (this.stage = "assign", g = fc(e)) {
                this.state.computing = "assign";
                var i = this.nextId();
                this.recurse(g, i), this.return_(i), h = "fn.assign=" + this.generateFunction("assign", "s,v,l")
            }
            var j = dc(e.body);
            d.stage = "inputs", f(j, function(a, b) {
                var c = "fn" + b;
                d.state[c] = {
                    vars: [],
                    body: [],
                    own: {}
                }, d.state.computing = c;
                var e = d.nextId();
                d.recurse(a, e), d.return_(e), d.state.inputs.push(c), a.watchId = b
            }), this.state.computing = "fn", this.stage = "main", this.recurse(e);
            var k = '"' + this.USE + " " + this.STRICT + '";\n' + this.filterPrefix() + "var fn=" + this.generateFunction("fn", "s,l,a,i") + h + this.watchFns() + "return fn;",
                l = new Function("$filter", "ensureSafeMemberName", "ensureSafeObject", "ensureSafeFunction", "getStringValue", "ensureSafeAssignContext", "ifDefined", "plus", "text", k)(this.$filter, Wb, Yb, Zb, Xb, $b, _b, ac, a);
            return this.state = this.stage = c, l.literal = gc(e), l.constant = hc(e), l
        },
        USE: "use",
        STRICT: "strict",
        watchFns: function() {
            var a = [],
                b = this.state.inputs,
                c = this;
            return f(b, function(b) {
                a.push("var " + b + "=" + c.generateFunction(b, "s"))
            }), b.length && a.push("fn.inputs=[" + b.join(",") + "];"), a.join("")
        },
        generateFunction: function(a, b) {
            return "function(" + b + "){" + this.varsPrefix(a) + this.body(a) + "};"
        },
        filterPrefix: function() {
            var a = [],
                b = this;
            return f(this.state.filters, function(c, d) {
                a.push(c + "=$filter(" + b.escape(d) + ")")
            }), a.length ? "var " + a.join(",") + ";" : ""
        },
        varsPrefix: function(a) {
            return this.state[a].vars.length ? "var " + this.state[a].vars.join(",") + ";" : ""
        },
        body: function(a) {
            return this.state[a].body.join("")
        },
        recurse: function(a, b, d, e, g, h) {
            var i, j, k, l, m = this;
            if (e = e || p, !h && u(a.watchId)) return b = b || this.nextId(), void this.if_("i", this.lazyAssign(b, this.computedMember("i", a.watchId)), this.lazyRecurse(a, b, d, e, g, !0));
            switch (a.type) {
                case df.Program:
                    f(a.body, function(b, d) {
                        m.recurse(b.expression, c, c, function(a) {
                            j = a
                        }), d !== a.body.length - 1 ? m.current().body.push(j, ";") : m.return_(j)
                    });
                    break;
                case df.Literal:
                    l = this.escape(a.value), this.assign(b, l), e(l);
                    break;
                case df.UnaryExpression:
                    this.recurse(a.argument, c, c, function(a) {
                        j = a
                    }), l = a.operator + "(" + this.ifDefined(j, 0) + ")", this.assign(b, l), e(l);
                    break;
                case df.BinaryExpression:
                    this.recurse(a.left, c, c, function(a) {
                        i = a
                    }), this.recurse(a.right, c, c, function(a) {
                        j = a
                    }), l = "+" === a.operator ? this.plus(i, j) : "-" === a.operator ? this.ifDefined(i, 0) + a.operator + this.ifDefined(j, 0) : "(" + i + ")" + a.operator + "(" + j + ")", this.assign(b, l), e(l);
                    break;
                case df.LogicalExpression:
                    b = b || this.nextId(), m.recurse(a.left, b), m.if_("&&" === a.operator ? b : m.not(b), m.lazyRecurse(a.right, b)), e(b);
                    break;
                case df.ConditionalExpression:
                    b = b || this.nextId(), m.recurse(a.test, b), m.if_(b, m.lazyRecurse(a.alternate, b), m.lazyRecurse(a.consequent, b)), e(b);
                    break;
                case df.Identifier:
                    b = b || this.nextId(), d && (d.context = "inputs" === m.stage ? "s" : this.assign(this.nextId(), this.getHasOwnProperty("l", a.name) + "?l:s"), d.computed = !1, d.name = a.name), Wb(a.name), m.if_("inputs" === m.stage || m.not(m.getHasOwnProperty("l", a.name)), function() {
                        m.if_("inputs" === m.stage || "s", function() {
                            g && 1 !== g && m.if_(m.not(m.nonComputedMember("s", a.name)), m.lazyAssign(m.nonComputedMember("s", a.name), "{}")), m.assign(b, m.nonComputedMember("s", a.name))
                        })
                    }, b && m.lazyAssign(b, m.nonComputedMember("l", a.name))), (m.state.expensiveChecks || kc(a.name)) && m.addEnsureSafeObject(b), e(b);
                    break;
                case df.MemberExpression:
                    i = d && (d.context = this.nextId()) || this.nextId(), b = b || this.nextId(), m.recurse(a.object, i, c, function() {
                        m.if_(m.notNull(i), function() {
                            a.computed ? (j = m.nextId(), m.recurse(a.property, j), m.getStringValue(j), m.addEnsureSafeMemberName(j), g && 1 !== g && m.if_(m.not(m.computedMember(i, j)), m.lazyAssign(m.computedMember(i, j), "{}")), l = m.ensureSafeObject(m.computedMember(i, j)), m.assign(b, l), d && (d.computed = !0, d.name = j)) : (Wb(a.property.name), g && 1 !== g && m.if_(m.not(m.nonComputedMember(i, a.property.name)), m.lazyAssign(m.nonComputedMember(i, a.property.name), "{}")), l = m.nonComputedMember(i, a.property.name), (m.state.expensiveChecks || kc(a.property.name)) && (l = m.ensureSafeObject(l)), m.assign(b, l), d && (d.computed = !1, d.name = a.property.name))
                        }, function() {
                            m.assign(b, "undefined")
                        }), e(b)
                    }, !!g);
                    break;
                case df.CallExpression:
                    b = b || this.nextId(), a.filter ? (j = m.filter(a.callee.name), k = [], f(a.arguments, function(a) {
                        var b = m.nextId();
                        m.recurse(a, b), k.push(b)
                    }), l = j + "(" + k.join(",") + ")", m.assign(b, l), e(b)) : (j = m.nextId(), i = {}, k = [], m.recurse(a.callee, j, i, function() {
                        m.if_(m.notNull(j), function() {
                            m.addEnsureSafeFunction(j), f(a.arguments, function(a) {
                                m.recurse(a, m.nextId(), c, function(a) {
                                    k.push(m.ensureSafeObject(a))
                                })
                            }), i.name ? (m.state.expensiveChecks || m.addEnsureSafeObject(i.context), l = m.member(i.context, i.name, i.computed) + "(" + k.join(",") + ")") : l = j + "(" + k.join(",") + ")", l = m.ensureSafeObject(l), m.assign(b, l)
                        }, function() {
                            m.assign(b, "undefined")
                        }), e(b)
                    }));
                    break;
                case df.AssignmentExpression:
                    if (j = this.nextId(), i = {}, !ec(a.left)) throw Ye("lval", "Trying to assing a value to a non l-value");
                    this.recurse(a.left, c, i, function() {
                        m.if_(m.notNull(i.context), function() {
                            m.recurse(a.right, j), m.addEnsureSafeObject(m.member(i.context, i.name, i.computed)), m.addEnsureSafeAssignContext(i.context), l = m.member(i.context, i.name, i.computed) + a.operator + j, m.assign(b, l), e(b || l)
                        })
                    }, 1);
                    break;
                case df.ArrayExpression:
                    k = [], f(a.elements, function(a) {
                        m.recurse(a, m.nextId(), c, function(a) {
                            k.push(a)
                        })
                    }), l = "[" + k.join(",") + "]", this.assign(b, l), e(l);
                    break;
                case df.ObjectExpression:
                    k = [], f(a.properties, function(a) {
                        m.recurse(a.value, m.nextId(), c, function(b) {
                            k.push(m.escape(a.key.type === df.Identifier ? a.key.name : "" + a.key.value) + ":" + b)
                        })
                    }), l = "{" + k.join(",") + "}", this.assign(b, l), e(l);
                    break;
                case df.ThisExpression:
                    this.assign(b, "s"), e("s");
                    break;
                case df.NGValueParameter:
                    this.assign(b, "v"), e("v")
            }
        },
        getHasOwnProperty: function(a, b) {
            var c = a + "." + b,
                d = this.current().own;
            return d.hasOwnProperty(c) || (d[c] = this.nextId(!1, a + "&&(" + this.escape(b) + " in " + a + ")")), d[c]
        },
        assign: function(a, b) {
            return a ? (this.current().body.push(a, "=", b, ";"), a) : void 0
        },
        filter: function(a) {
            return this.state.filters.hasOwnProperty(a) || (this.state.filters[a] = this.nextId(!0)), this.state.filters[a]
        },
        ifDefined: function(a, b) {
            return "ifDefined(" + a + "," + this.escape(b) + ")"
        },
        plus: function(a, b) {
            return "plus(" + a + "," + b + ")"
        },
        return_: function(a) {
            this.current().body.push("return ", a, ";")
        },
        if_: function(a, b, c) {
            if (a === !0) b();
            else {
                var d = this.current().body;
                d.push("if(", a, "){"), b(), d.push("}"), c && (d.push("else{"), c(), d.push("}"))
            }
        },
        not: function(a) {
            return "!(" + a + ")"
        },
        notNull: function(a) {
            return a + "!=null"
        },
        nonComputedMember: function(a, b) {
            return a + "." + b
        },
        computedMember: function(a, b) {
            return a + "[" + b + "]"
        },
        member: function(a, b, c) {
            return c ? this.computedMember(a, b) : this.nonComputedMember(a, b)
        },
        addEnsureSafeObject: function(a) {
            this.current().body.push(this.ensureSafeObject(a), ";")
        },
        addEnsureSafeMemberName: function(a) {
            this.current().body.push(this.ensureSafeMemberName(a), ";")
        },
        addEnsureSafeFunction: function(a) {
            this.current().body.push(this.ensureSafeFunction(a), ";")
        },
        addEnsureSafeAssignContext: function(a) {
            this.current().body.push(this.ensureSafeAssignContext(a), ";")
        },
        ensureSafeObject: function(a) {
            return "ensureSafeObject(" + a + ",text)"
        },
        ensureSafeMemberName: function(a) {
            return "ensureSafeMemberName(" + a + ",text)"
        },
        ensureSafeFunction: function(a) {
            return "ensureSafeFunction(" + a + ",text)"
        },
        getStringValue: function(a) {
            this.assign(a, "getStringValue(" + a + ",text)")
        },
        ensureSafeAssignContext: function(a) {
            return "ensureSafeAssignContext(" + a + ",text)"
        },
        lazyRecurse: function(a, b, c, d, e, f) {
            var g = this;
            return function() {
                g.recurse(a, b, c, d, e, f)
            }
        },
        lazyAssign: function(a, b) {
            var c = this;
            return function() {
                c.assign(a, b)
            }
        },
        stringEscapeRegex: /[^ a-zA-Z0-9]/g,
        stringEscapeFn: function(a) {
            return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        },
        escape: function(a) {
            if (x(a)) return "'" + a.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'";
            if (y(a)) return a.toString();
            if (a === !0) return "true";
            if (a === !1) return "false";
            if (null === a) return "null";
            if ("undefined" == typeof a) return "undefined";
            throw Ye("esc", "IMPOSSIBLE")
        },
        nextId: function(a, b) {
            var c = "v" + this.state.nextId++;
            return a || this.current().vars.push(c + (b ? "=" + b : "")), c
        },
        current: function() {
            return this.state[this.state.computing]
        }
    }, jc.prototype = {
        compile: function(a, b) {
            var c = this,
                d = this.astBuilder.ast(a);
            this.expression = a, this.expensiveChecks = b, cc(d, c.$filter);
            var e, g;
            (e = fc(d)) && (g = this.recurse(e));
            var h, i = dc(d.body);
            i && (h = [], f(i, function(a, b) {
                var d = c.recurse(a);
                a.input = d, h.push(d), a.watchId = b
            }));
            var j = [];
            f(d.body, function(a) {
                j.push(c.recurse(a.expression))
            });
            var k = 0 === d.body.length ? function() {} : 1 === d.body.length ? j[0] : function(a, b) {
                var c;
                return f(j, function(d) {
                    c = d(a, b)
                }), c
            };
            return g && (k.assign = function(a, b, c) {
                return g(a, c, b)
            }), h && (k.inputs = h), k.literal = gc(d), k.constant = hc(d), k
        },
        recurse: function(a, b, d) {
            var e, g, h, i = this;
            if (a.input) return this.inputs(a.input, a.watchId);
            switch (a.type) {
                case df.Literal:
                    return this.value(a.value, b);
                case df.UnaryExpression:
                    return g = this.recurse(a.argument), this["unary" + a.operator](g, b);
                case df.BinaryExpression:
                    return e = this.recurse(a.left), g = this.recurse(a.right), this["binary" + a.operator](e, g, b);
                case df.LogicalExpression:
                    return e = this.recurse(a.left), g = this.recurse(a.right), this["binary" + a.operator](e, g, b);
                case df.ConditionalExpression:
                    return this["ternary?:"](this.recurse(a.test), this.recurse(a.alternate), this.recurse(a.consequent), b);
                case df.Identifier:
                    return Wb(a.name, i.expression), i.identifier(a.name, i.expensiveChecks || kc(a.name), b, d, i.expression);
                case df.MemberExpression:
                    return e = this.recurse(a.object, !1, !!d), a.computed || (Wb(a.property.name, i.expression), g = a.property.name), a.computed && (g = this.recurse(a.property)), a.computed ? this.computedMember(e, g, b, d, i.expression) : this.nonComputedMember(e, g, i.expensiveChecks, b, d, i.expression);
                case df.CallExpression:
                    return h = [], f(a.arguments, function(a) {
                        h.push(i.recurse(a))
                    }), a.filter && (g = this.$filter(a.callee.name)), a.filter || (g = this.recurse(a.callee, !0)), a.filter ? function(a, d, e, f) {
                        for (var i = [], j = 0; j < h.length; ++j) i.push(h[j](a, d, e, f));
                        var k = g.apply(c, i, f);
                        return b ? {
                            context: c,
                            name: c,
                            value: k
                        } : k
                    } : function(a, c, d, e) {
                        var f, j = g(a, c, d, e);
                        if (null != j.value) {
                            Yb(j.context, i.expression), Zb(j.value, i.expression);
                            for (var k = [], l = 0; l < h.length; ++l) k.push(Yb(h[l](a, c, d, e), i.expression));
                            f = Yb(j.value.apply(j.context, k), i.expression)
                        }
                        return b ? {
                            value: f
                        } : f
                    };
                case df.AssignmentExpression:
                    return e = this.recurse(a.left, !0, 1), g = this.recurse(a.right),
                        function(a, c, d, f) {
                            var h = e(a, c, d, f),
                                j = g(a, c, d, f);
                            return Yb(h.value, i.expression), $b(h.context), h.context[h.name] = j, b ? {
                                value: j
                            } : j
                        };
                case df.ArrayExpression:
                    return h = [], f(a.elements, function(a) {
                            h.push(i.recurse(a))
                        }),
                        function(a, c, d, e) {
                            for (var f = [], g = 0; g < h.length; ++g) f.push(h[g](a, c, d, e));
                            return b ? {
                                value: f
                            } : f
                        };
                case df.ObjectExpression:
                    return h = [], f(a.properties, function(a) {
                            h.push({
                                key: a.key.type === df.Identifier ? a.key.name : "" + a.key.value,
                                value: i.recurse(a.value)
                            })
                        }),
                        function(a, c, d, e) {
                            for (var f = {}, g = 0; g < h.length; ++g) f[h[g].key] = h[g].value(a, c, d, e);
                            return b ? {
                                value: f
                            } : f
                        };
                case df.ThisExpression:
                    return function(a) {
                        return b ? {
                            value: a
                        } : a
                    };
                case df.NGValueParameter:
                    return function(a, c, d, e) {
                        return b ? {
                            value: d
                        } : d
                    }
            }
        },
        "unary+": function(a, b) {
            return function(c, d, e, f) {
                var g = a(c, d, e, f);
                return g = u(g) ? +g : 0, b ? {
                    value: g
                } : g
            }
        },
        "unary-": function(a, b) {
            return function(c, d, e, f) {
                var g = a(c, d, e, f);
                return g = u(g) ? -g : 0, b ? {
                    value: g
                } : g
            }
        },
        "unary!": function(a, b) {
            return function(c, d, e, f) {
                var g = !a(c, d, e, f);
                return b ? {
                    value: g
                } : g
            }
        },
        "binary+": function(a, b, c) {
            return function(d, e, f, g) {
                var h = a(d, e, f, g),
                    i = b(d, e, f, g),
                    j = ac(h, i);
                return c ? {
                    value: j
                } : j
            }
        },
        "binary-": function(a, b, c) {
            return function(d, e, f, g) {
                var h = a(d, e, f, g),
                    i = b(d, e, f, g),
                    j = (u(h) ? h : 0) - (u(i) ? i : 0);
                return c ? {
                    value: j
                } : j
            }
        },
        "binary*": function(a, b, c) {
            return function(d, e, f, g) {
                var h = a(d, e, f, g) * b(d, e, f, g);
                return c ? {
                    value: h
                } : h
            }
        },
        "binary/": function(a, b, c) {
            return function(d, e, f, g) {
                var h = a(d, e, f, g) / b(d, e, f, g);
                return c ? {
                    value: h
                } : h
            }
        },
        "binary%": function(a, b, c) {
            return function(d, e, f, g) {
                var h = a(d, e, f, g) % b(d, e, f, g);
                return c ? {
                    value: h
                } : h
            }
        },
        "binary===": function(a, b, c) {
            return function(d, e, f, g) {
                var h = a(d, e, f, g) === b(d, e, f, g);
                return c ? {
                    value: h
                } : h
            }
        },
        "binary!==": function(a, b, c) {
            return function(d, e, f, g) {
                var h = a(d, e, f, g) !== b(d, e, f, g);
                return c ? {
                    value: h
                } : h
            }
        },
        "binary==": function(a, b, c) {
            return function(d, e, f, g) {
                var h = a(d, e, f, g) == b(d, e, f, g);
                return c ? {
                    value: h
                } : h
            }
        },
        "binary!=": function(a, b, c) {
            return function(d, e, f, g) {
                var h = a(d, e, f, g) != b(d, e, f, g);
                return c ? {
                    value: h
                } : h
            }
        },
        "binary<": function(a, b, c) {
            return function(d, e, f, g) {
                var h = a(d, e, f, g) < b(d, e, f, g);
                return c ? {
                    value: h
                } : h
            }
        },
        "binary>": function(a, b, c) {
            return function(d, e, f, g) {
                var h = a(d, e, f, g) > b(d, e, f, g);
                return c ? {
                    value: h
                } : h
            }
        },
        "binary<=": function(a, b, c) {
            return function(d, e, f, g) {
                var h = a(d, e, f, g) <= b(d, e, f, g);
                return c ? {
                    value: h
                } : h
            }
        },
        "binary>=": function(a, b, c) {
            return function(d, e, f, g) {
                var h = a(d, e, f, g) >= b(d, e, f, g);
                return c ? {
                    value: h
                } : h
            }
        },
        "binary&&": function(a, b, c) {
            return function(d, e, f, g) {
                var h = a(d, e, f, g) && b(d, e, f, g);
                return c ? {
                    value: h
                } : h
            }
        },
        "binary||": function(a, b, c) {
            return function(d, e, f, g) {
                var h = a(d, e, f, g) || b(d, e, f, g);
                return c ? {
                    value: h
                } : h
            }
        },
        "ternary?:": function(a, b, c, d) {
            return function(e, f, g, h) {
                var i = a(e, f, g, h) ? b(e, f, g, h) : c(e, f, g, h);
                return d ? {
                    value: i
                } : i
            }
        },
        value: function(a, b) {
            return function() {
                return b ? {
                    context: c,
                    name: c,
                    value: a
                } : a
            }
        },
        identifier: function(a, b, d, e, f) {
            return function(g, h, i, j) {
                var k = h && a in h ? h : g;
                e && 1 !== e && k && !k[a] && (k[a] = {});
                var l = k ? k[a] : c;
                return b && Yb(l, f), d ? {
                    context: k,
                    name: a,
                    value: l
                } : l
            }
        },
        computedMember: function(a, b, c, d, e) {
            return function(f, g, h, i) {
                var j, k, l = a(f, g, h, i);
                return null != l && (j = b(f, g, h, i), j = Xb(j), Wb(j, e), d && 1 !== d && l && !l[j] && (l[j] = {}), k = l[j], Yb(k, e)), c ? {
                    context: l,
                    name: j,
                    value: k
                } : k
            }
        },
        nonComputedMember: function(a, b, d, e, f, g) {
            return function(h, i, j, k) {
                var l = a(h, i, j, k);
                f && 1 !== f && l && !l[b] && (l[b] = {});
                var m = null != l ? l[b] : c;
                return (d || kc(b)) && Yb(m, g), e ? {
                    context: l,
                    name: b,
                    value: m
                } : m
            }
        },
        inputs: function(a, b) {
            return function(c, d, e, f) {
                return f ? f[b] : a(c, d, e)
            }
        }
    };
    var ef = function(a, b, c) {
        this.lexer = a, this.$filter = b, this.options = c, this.ast = new df(this.lexer), this.astCompiler = c.csp ? new jc(this.ast, b) : new ic(this.ast, b)
    };
    ef.prototype = {
        constructor: ef,
        parse: function(a) {
            return this.astCompiler.compile(a, this.options.expensiveChecks)
        }
    };
    var ff = (qa(), qa(), Object.prototype.valueOf),
        gf = d("$sce"),
        hf = {
            HTML: "html",
            CSS: "css",
            URL: "url",
            RESOURCE_URL: "resourceUrl",
            JS: "js"
        },
        He = d("$compile"),
        jf = b.createElement("a"),
        kf = Bc(a.location.href);
    Ec.$inject = ["$document"], Gc.$inject = ["$provide"], Lc.$inject = ["$locale"], Mc.$inject = ["$locale"];
    var lf = ".",
        mf = {
            yyyy: Pc("FullYear", 4),
            yy: Pc("FullYear", 2, 0, !0),
            y: Pc("FullYear", 1),
            MMMM: Qc("Month"),
            MMM: Qc("Month", !0),
            MM: Pc("Month", 2, 1),
            M: Pc("Month", 1, 1),
            dd: Pc("Date", 2),
            d: Pc("Date", 1),
            HH: Pc("Hours", 2),
            H: Pc("Hours", 1),
            hh: Pc("Hours", 2, -12),
            h: Pc("Hours", 1, -12),
            mm: Pc("Minutes", 2),
            m: Pc("Minutes", 1),
            ss: Pc("Seconds", 2),
            s: Pc("Seconds", 1),
            sss: Pc("Milliseconds", 3),
            EEEE: Qc("Day"),
            EEE: Qc("Day", !0),
            a: Vc,
            Z: Rc,
            ww: Uc(2),
            w: Uc(1),
            G: Wc,
            GG: Wc,
            GGG: Wc,
            GGGG: Xc
        },
        nf = /((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,
        of = /^\-?\d+$/;
    Yc.$inject = ["$locale"];
    var pf = r(wd),
        qf = r(yd);
    _c.$inject = ["$parse"];
    var rf = r({
            restrict: "E",
            compile: function(a, b) {
                return b.href || b.xlinkHref ? void 0 : function(a, b) {
                    if ("a" === b[0].nodeName.toLowerCase()) {
                        var c = "[object SVGAnimatedString]" === Id.call(b.prop("href")) ? "xlink:href" : "href";
                        b.on("click", function(a) {
                            b.attr(c) || a.preventDefault()
                        })
                    }
                }
            }
        }),
        sf = {};
    f(re, function(a, b) {
        function c(a, c, e) {
            a.$watch(e[d], function(a) {
                e.$set(b, !!a)
            })
        }
        if ("multiple" != a) {
            var d = lb("ng-" + b),
                e = c;
            "checked" === a && (e = function(a, b, e) {
                e.ngModel !== e[d] && c(a, b, e)
            }), sf[d] = function() {
                return {
                    restrict: "A",
                    priority: 100,
                    link: e
                }
            }
        }
    }), f(te, function(a, b) {
        sf[b] = function() {
            return {
                priority: 100,
                link: function(a, c, d) {
                    if ("ngPattern" === b && "/" == d.ngPattern.charAt(0)) {
                        var e = d.ngPattern.match(ud);
                        if (e) return void d.$set("ngPattern", new RegExp(e[1], e[2]))
                    }
                    a.$watch(d[b], function(a) {
                        d.$set(b, a)
                    })
                }
            }
        }
    }), f(["src", "srcset", "href"], function(a) {
        var b = lb("ng-" + a);
        sf[b] = function() {
            return {
                priority: 99,
                link: function(c, d, e) {
                    var f = a,
                        g = a;
                    "href" === a && "[object SVGAnimatedString]" === Id.call(d.prop("href")) && (g = "xlinkHref", e.$attr[g] = "xlink:href", f = null), e.$observe(b, function(b) {
                        return b ? (e.$set(g, b), void(Bd && f && d.prop(f, e[g]))) : void("href" === a && e.$set(g, null))
                    })
                }
            }
        }
    });
    var tf = {
            $addControl: p,
            $$renameControl: bd,
            $removeControl: p,
            $setValidity: p,
            $setDirty: p,
            $setPristine: p,
            $setSubmitted: p
        },
        uf = "ng-submitted";
    cd.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];
    var vf = function(a) {
            return ["$timeout", "$parse", function(b, d) {
                function e(a) {
                    return "" === a ? d('this[""]').assign : d(a).assign || p
                }
                var f = {
                    name: "form",
                    restrict: a ? "EAC" : "E",
                    require: ["form", "^^?form"],
                    controller: cd,
                    compile: function(d, f) {
                        d.addClass(bg).addClass(_f);
                        var g = f.name ? "name" : a && f.ngForm ? "ngForm" : !1;
                        return {
                            pre: function(a, d, f, h) {
                                var i = h[0];
                                if (!("action" in f)) {
                                    var j = function(b) {
                                        a.$apply(function() {
                                            i.$commitViewValue(), i.$setSubmitted()
                                        }), b.preventDefault()
                                    };
                                    ee(d[0], "submit", j), d.on("$destroy", function() {
                                        b(function() {
                                            fe(d[0], "submit", j)
                                        }, 0, !1)
                                    })
                                }
                                var k = h[1] || i.$$parentForm;
                                k.$addControl(i);
                                var m = g ? e(i.$name) : p;
                                g && (m(a, i), f.$observe(g, function(b) {
                                    i.$name !== b && (m(a, c), i.$$parentForm.$$renameControl(i, b), (m = e(i.$name))(a, i))
                                })), d.on("$destroy", function() {
                                    i.$$parentForm.$removeControl(i), m(a, c), l(i, tf)
                                })
                            }
                        }
                    }
                };
                return f
            }]
        },
        wf = vf(),
        xf = vf(!0),
        yf = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,
        zf = /^[A-Za-z][A-Za-z\d.+-]*:\/*(?:\w+(?::\w+)?@)?[^\s\/]+(?::\d+)?(?:\/[\w#!:.?+=&%@\-\/]*)?$/,
        Af = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
        Bf = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,
        Cf = /^(\d{4})-(\d{2})-(\d{2})$/,
        Df = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
        Ef = /^(\d{4})-W(\d\d)$/,
        Ff = /^(\d{4})-(\d\d)$/,
        Gf = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
        Hf = {
            text: ed,
            date: id("date", Cf, hd(Cf, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
            "datetime-local": id("datetimelocal", Df, hd(Df, ["yyyy", "MM", "dd", "HH", "mm", "ss", "sss"]), "yyyy-MM-ddTHH:mm:ss.sss"),
            time: id("time", Gf, hd(Gf, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
            week: id("week", Ef, gd, "yyyy-Www"),
            month: id("month", Ff, hd(Ff, ["yyyy", "MM"]), "yyyy-MM"),
            number: kd,
            url: ld,
            email: md,
            radio: nd,
            checkbox: pd,
            hidden: p,
            button: p,
            submit: p,
            reset: p,
            file: p
        },
        If = ["$browser", "$sniffer", "$filter", "$parse", function(a, b, c, d) {
            return {
                restrict: "E",
                require: ["?ngModel"],
                link: {
                    pre: function(e, f, g, h) {
                        h[0] && (Hf[wd(g.type)] || Hf.text)(e, f, g, h[0], b, a, c, d)
                    }
                }
            }
        }],
        Jf = /^(true|false|\d+)$/,
        Kf = function() {
            return {
                restrict: "A",
                priority: 100,
                compile: function(a, b) {
                    return Jf.test(b.ngValue) ? function(a, b, c) {
                        c.$set("value", a.$eval(c.ngValue))
                    } : function(a, b, c) {
                        a.$watch(c.ngValue, function(a) {
                            c.$set("value", a)
                        })
                    }
                }
            }
        },
        Lf = ["$compile", function(a) {
            return {
                restrict: "AC",
                compile: function(b) {
                    return a.$$addBindingClass(b),
                        function(b, c, d) {
                            a.$$addBindingInfo(c, d.ngBind), c = c[0], b.$watch(d.ngBind, function(a) {
                                c.textContent = t(a) ? "" : a
                            })
                        }
                }
            }
        }],
        Mf = ["$interpolate", "$compile", function(a, b) {
            return {
                compile: function(c) {
                    return b.$$addBindingClass(c),
                        function(c, d, e) {
                            var f = a(d.attr(e.$attr.ngBindTemplate));
                            b.$$addBindingInfo(d, f.expressions), d = d[0], e.$observe("ngBindTemplate", function(a) {
                                d.textContent = t(a) ? "" : a
                            })
                        }
                }
            }
        }],
        Nf = ["$sce", "$parse", "$compile", function(a, b, c) {
            return {
                restrict: "A",
                compile: function(d, e) {
                    var f = b(e.ngBindHtml),
                        g = b(e.ngBindHtml, function(a) {
                            return (a || "").toString()
                        });
                    return c.$$addBindingClass(d),
                        function(b, d, e) {
                            c.$$addBindingInfo(d, e.ngBindHtml), b.$watch(g, function() {
                                d.html(a.getTrustedHtml(f(b)) || "")
                            })
                        }
                }
            }
        }],
        Of = r({
            restrict: "A",
            require: "ngModel",
            link: function(a, b, c, d) {
                d.$viewChangeListeners.push(function() {
                    a.$eval(c.ngChange)
                })
            }
        }),
        Pf = qd("", !0),
        Qf = qd("Odd", 0),
        Rf = qd("Even", 1),
        Sf = ad({
            compile: function(a, b) {
                b.$set("ngCloak", c), a.removeClass("ng-cloak")
            }
        }),
        Tf = [function() {
            return {
                restrict: "A",
                scope: !0,
                controller: "@",
                priority: 500
            }
        }],
        Uf = {},
        Vf = {
            blur: !0,
            focus: !0
        };
    f("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(a) {
        var b = lb("ng-" + a);
        Uf[b] = ["$parse", "$rootScope", function(c, d) {
            return {
                restrict: "A",
                compile: function(e, f) {
                    var g = c(f[b], null, !0);
                    return function(b, c) {
                        c.on(a, function(c) {
                            var e = function() {
                                g(b, {
                                    $event: c
                                })
                            };
                            Vf[a] && d.$$phase ? b.$evalAsync(e) : b.$apply(e)
                        })
                    }
                }
            }
        }]
    });
    var Wf = ["$animate", function(a) {
            return {
                multiElement: !0,
                transclude: "element",
                priority: 600,
                terminal: !0,
                restrict: "A",
                $$tlb: !0,
                link: function(c, d, e, f, g) {
                    var h, i, j;
                    c.$watch(e.ngIf, function(c) {
                        c ? i || g(function(c, f) {
                            i = f, c[c.length++] = b.createComment(" end ngIf: " + e.ngIf + " "), h = {
                                clone: c
                            }, a.enter(c, d.parent(), d)
                        }) : (j && (j.remove(), j = null), i && (i.$destroy(), i = null), h && (j = pa(h.clone), a.leave(j).then(function() {
                            j = null
                        }), h = null))
                    })
                }
            }
        }],
        Xf = ["$templateRequest", "$anchorScroll", "$animate", function(a, b, c) {
            return {
                restrict: "ECA",
                priority: 400,
                terminal: !0,
                transclude: "element",
                controller: Ld.noop,
                compile: function(d, e) {
                    var f = e.ngInclude || e.src,
                        g = e.onload || "",
                        h = e.autoscroll;
                    return function(d, e, i, j, k) {
                        var l, m, n, o = 0,
                            p = function() {
                                m && (m.remove(), m = null), l && (l.$destroy(), l = null), n && (c.leave(n).then(function() {
                                    m = null
                                }), m = n, n = null)
                            };
                        d.$watch(f, function(f) {
                            var i = function() {
                                    !u(h) || h && !d.$eval(h) || b()
                                },
                                m = ++o;
                            f ? (a(f, !0).then(function(a) {
                                if (m === o) {
                                    var b = d.$new();
                                    j.template = a;
                                    var h = k(b, function(a) {
                                        p(), c.enter(a, null, e).then(i)
                                    });
                                    l = b, n = h, l.$emit("$includeContentLoaded", f), d.$eval(g)
                                }
                            }, function() {
                                m === o && (p(), d.$emit("$includeContentError", f))
                            }), d.$emit("$includeContentRequested", f)) : (p(), j.template = null)
                        })
                    }
                }
            }
        }],
        Yf = ["$compile", function(a) {
            return {
                restrict: "ECA",
                priority: -400,
                require: "ngInclude",
                link: function(c, d, e, f) {
                    return /SVG/.test(d[0].toString()) ? (d.empty(), void a(Aa(f.template, b).childNodes)(c, function(a) {
                        d.append(a)
                    }, {
                        futureParentElement: d
                    })) : (d.html(f.template), void a(d.contents())(c))
                }
            }
        }],
        Zf = ad({
            priority: 450,
            compile: function() {
                return {
                    pre: function(a, b, c) {
                        a.$eval(c.ngInit)
                    }
                }
            }
        }),
        $f = function() {
            return {
                restrict: "A",
                priority: 100,
                require: "ngModel",
                link: function(a, b, d, e) {
                    var g = b.attr(d.$attr.ngList) || ", ",
                        h = "false" !== d.ngTrim,
                        i = h ? Qd(g) : g,
                        j = function(a) {
                            if (!t(a)) {
                                var b = [];
                                return a && f(a.split(i), function(a) {
                                    a && b.push(h ? Qd(a) : a)
                                }), b
                            }
                        };
                    e.$parsers.push(j), e.$formatters.push(function(a) {
                        return Od(a) ? a.join(g) : c
                    }), e.$isEmpty = function(a) {
                        return !a || !a.length
                    }
                }
            }
        },
        _f = "ng-valid",
        ag = "ng-invalid",
        bg = "ng-pristine",
        cg = "ng-dirty",
        dg = "ng-untouched",
        eg = "ng-touched",
        fg = "ng-pending",
        gg = d("ngModel"),
        hg = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function(a, b, d, e, g, h, i, j, k, l) {
            this.$viewValue = Number.NaN, this.$modelValue = Number.NaN, this.$$rawModelValue = c, this.$validators = {}, this.$asyncValidators = {}, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$untouched = !0, this.$touched = !1, this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$error = {}, this.$$success = {}, this.$pending = c, this.$name = l(d.name || "", !1)(a), this.$$parentForm = tf;
            var m, n = g(d.ngModel),
                o = n.assign,
                q = n,
                r = o,
                s = null,
                v = this;
            this.$$setOptions = function(a) {
                if (v.$options = a, a && a.getterSetter) {
                    var b = g(d.ngModel + "()"),
                        c = g(d.ngModel + "($$$p)");
                    q = function(a) {
                        var c = n(a);
                        return A(c) && (c = b(a)), c
                    }, r = function(a, b) {
                        A(n(a)) ? c(a, {
                            $$$p: v.$modelValue
                        }) : o(a, v.$modelValue)
                    }
                } else if (!n.assign) throw gg("nonassign", "Expression '{0}' is non-assignable. Element: {1}", d.ngModel, $(e))
            }, this.$render = p, this.$isEmpty = function(a) {
                return t(a) || "" === a || null === a || a !== a
            };
            var w = 0;
            rd({
                ctrl: this,
                $element: e,
                set: function(a, b) {
                    a[b] = !0
                },
                unset: function(a, b) {
                    delete a[b]
                },
                $animate: h
            }), this.$setPristine = function() {
                v.$dirty = !1, v.$pristine = !0, h.removeClass(e, cg), h.addClass(e, bg)
            }, this.$setDirty = function() {
                v.$dirty = !0, v.$pristine = !1, h.removeClass(e, bg), h.addClass(e, cg), v.$$parentForm.$setDirty()
            }, this.$setUntouched = function() {
                v.$touched = !1, v.$untouched = !0, h.setClass(e, dg, eg)
            }, this.$setTouched = function() {
                v.$touched = !0, v.$untouched = !1, h.setClass(e, eg, dg)
            }, this.$rollbackViewValue = function() {
                i.cancel(s), v.$viewValue = v.$$lastCommittedViewValue, v.$render()
            }, this.$validate = function() {
                if (!y(v.$modelValue) || !isNaN(v.$modelValue)) {
                    var a = v.$$lastCommittedViewValue,
                        b = v.$$rawModelValue,
                        d = v.$valid,
                        e = v.$modelValue,
                        f = v.$options && v.$options.allowInvalid;
                    v.$$runValidators(b, a, function(a) {
                        f || d === a || (v.$modelValue = a ? b : c, v.$modelValue !== e && v.$$writeModelToScope())
                    })
                }
            }, this.$$runValidators = function(a, b, d) {
                function e() {
                    var a = v.$$parserName || "parse";
                    return t(m) ? (i(a, null), !0) : (m || (f(v.$validators, function(a, b) {
                        i(b, null)
                    }), f(v.$asyncValidators, function(a, b) {
                        i(b, null)
                    })), i(a, m), m)
                }

                function g() {
                    var c = !0;
                    return f(v.$validators, function(d, e) {
                        var f = d(a, b);
                        c = c && f, i(e, f)
                    }), c ? !0 : (f(v.$asyncValidators, function(a, b) {
                        i(b, null)
                    }), !1)
                }

                function h() {
                    var d = [],
                        e = !0;
                    f(v.$asyncValidators, function(f, g) {
                        var h = f(a, b);
                        if (!I(h)) throw gg("$asyncValidators", "Expected asynchronous validator to return a promise but got '{0}' instead.", h);
                        i(g, c), d.push(h.then(function() {
                            i(g, !0)
                        }, function(a) {
                            e = !1, i(g, !1)
                        }))
                    }), d.length ? k.all(d).then(function() {
                        j(e)
                    }, p) : j(!0)
                }

                function i(a, b) {
                    l === w && v.$setValidity(a, b)
                }

                function j(a) {
                    l === w && d(a)
                }
                w++;
                var l = w;
                return e() && g() ? void h() : void j(!1)
            }, this.$commitViewValue = function() {
                var a = v.$viewValue;
                i.cancel(s), (v.$$lastCommittedViewValue !== a || "" === a && v.$$hasNativeValidators) && (v.$$lastCommittedViewValue = a, v.$pristine && this.$setDirty(), this.$$parseAndValidate())
            }, this.$$parseAndValidate = function() {
                function b() {
                    v.$modelValue !== g && v.$$writeModelToScope()
                }
                var d = v.$$lastCommittedViewValue,
                    e = d;
                if (m = t(e) ? c : !0)
                    for (var f = 0; f < v.$parsers.length; f++)
                        if (e = v.$parsers[f](e), t(e)) {
                            m = !1;
                            break
                        }
                y(v.$modelValue) && isNaN(v.$modelValue) && (v.$modelValue = q(a));
                var g = v.$modelValue,
                    h = v.$options && v.$options.allowInvalid;
                v.$$rawModelValue = e, h && (v.$modelValue = e, b()), v.$$runValidators(e, v.$$lastCommittedViewValue, function(a) {
                    h || (v.$modelValue = a ? e : c, b())
                })
            }, this.$$writeModelToScope = function() {
                r(a, v.$modelValue), f(v.$viewChangeListeners, function(a) {
                    try {
                        a()
                    } catch (c) {
                        b(c)
                    }
                })
            }, this.$setViewValue = function(a, b) {
                v.$viewValue = a, (!v.$options || v.$options.updateOnDefault) && v.$$debounceViewValueCommit(b)
            }, this.$$debounceViewValueCommit = function(b) {
                var c, d = 0,
                    e = v.$options;
                e && u(e.debounce) && (c = e.debounce, y(c) ? d = c : y(c[b]) ? d = c[b] : y(c["default"]) && (d = c["default"])), i.cancel(s), d ? s = i(function() {
                    v.$commitViewValue()
                }, d) : j.$$phase ? v.$commitViewValue() : a.$apply(function() {
                    v.$commitViewValue()
                })
            }, a.$watch(function() {
                var b = q(a);
                if (b !== v.$modelValue && (v.$modelValue === v.$modelValue || b === b)) {
                    v.$modelValue = v.$$rawModelValue = b, m = c;
                    for (var d = v.$formatters, e = d.length, f = b; e--;) f = d[e](f);
                    v.$viewValue !== f && (v.$viewValue = v.$$lastCommittedViewValue = f, v.$render(), v.$$runValidators(b, f, p))
                }
                return b
            })
        }],
        ig = ["$rootScope", function(a) {
            return {
                restrict: "A",
                require: ["ngModel", "^?form", "^?ngModelOptions"],
                controller: hg,
                priority: 1,
                compile: function(b) {
                    return b.addClass(bg).addClass(dg).addClass(_f), {
                        pre: function(a, b, c, d) {
                            var e = d[0],
                                f = d[1] || e.$$parentForm;
                            e.$$setOptions(d[2] && d[2].$options), f.$addControl(e), c.$observe("name", function(a) {
                                e.$name !== a && e.$$parentForm.$$renameControl(e, a)
                            }), a.$on("$destroy", function() {
                                e.$$parentForm.$removeControl(e)
                            })
                        },
                        post: function(b, c, d, e) {
                            var f = e[0];
                            f.$options && f.$options.updateOn && c.on(f.$options.updateOn, function(a) {
                                f.$$debounceViewValueCommit(a && a.type)
                            }), c.on("blur", function(c) {
                                f.$touched || (a.$$phase ? b.$evalAsync(f.$setTouched) : b.$apply(f.$setTouched))
                            })
                        }
                    }
                }
            }
        }],
        jg = /(\s+|^)default(\s+|$)/,
        kg = function() {
            return {
                restrict: "A",
                controller: ["$scope", "$attrs", function(a, b) {
                    var c = this;
                    this.$options = O(a.$eval(b.ngModelOptions)), u(this.$options.updateOn) ? (this.$options.updateOnDefault = !1, this.$options.updateOn = Qd(this.$options.updateOn.replace(jg, function() {
                        return c.$options.updateOnDefault = !0, " "
                    }))) : this.$options.updateOnDefault = !0
                }]
            }
        },
        lg = ad({
            terminal: !0,
            priority: 1e3
        }),
        mg = d("ngOptions"),
        ng = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
        og = ["$compile", "$parse", function(a, c) {
            function d(a, b, d) {
                function f(a, b, c, d, e) {
                    this.selectValue = a, this.viewValue = b, this.label = c, this.group = d, this.disabled = e
                }

                function g(a) {
                    var b;
                    if (!j && e(a)) b = a;
                    else {
                        b = [];
                        for (var c in a) a.hasOwnProperty(c) && "$" !== c.charAt(0) && b.push(c)
                    }
                    return b
                }
                var h = a.match(ng);
                if (!h) throw mg("iexp", "Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}", a, $(b));
                var i = h[5] || h[7],
                    j = h[6],
                    k = / as /.test(h[0]) && h[1],
                    l = h[9],
                    m = c(h[2] ? h[1] : i),
                    n = k && c(k),
                    o = n || m,
                    p = l && c(l),
                    q = l ? function(a, b) {
                        return p(d, b)
                    } : function(a) {
                        return Ya(a)
                    },
                    r = function(a, b) {
                        return q(a, x(a, b))
                    },
                    s = c(h[2] || h[1]),
                    t = c(h[3] || ""),
                    u = c(h[4] || ""),
                    v = c(h[8]),
                    w = {},
                    x = j ? function(a, b) {
                        return w[j] = b, w[i] = a, w
                    } : function(a) {
                        return w[i] = a, w
                    };
                return {
                    trackBy: l,
                    getTrackByValue: r,
                    getWatchables: c(v, function(a) {
                        var b = [];
                        a = a || [];
                        for (var c = g(a), e = c.length, f = 0; e > f; f++) {
                            var i = a === c ? f : c[f],
                                j = (a[i], x(a[i], i)),
                                k = q(a[i], j);
                            if (b.push(k), h[2] || h[1]) {
                                var l = s(d, j);
                                b.push(l)
                            }
                            if (h[4]) {
                                var m = u(d, j);
                                b.push(m)
                            }
                        }
                        return b
                    }),
                    getOptions: function() {
                        for (var a = [], b = {}, c = v(d) || [], e = g(c), h = e.length, i = 0; h > i; i++) {
                            var j = c === e ? i : e[i],
                                k = c[j],
                                m = x(k, j),
                                n = o(d, m),
                                p = q(n, m),
                                w = s(d, m),
                                y = t(d, m),
                                z = u(d, m),
                                A = new f(p, n, w, y, z);
                            a.push(A), b[p] = A
                        }
                        return {
                            items: a,
                            selectValueMap: b,
                            getOptionFromViewValue: function(a) {
                                return b[r(a)]
                            },
                            getViewValueFromOption: function(a) {
                                return l ? Ld.copy(a.viewValue) : a.viewValue
                            }
                        }
                    }
                }
            }

            function g(b, c, e, g) {
                function j(a, b) {
                    a.element = b, b.disabled = a.disabled, a.label !== b.label && (b.label = a.label, b.textContent = a.label), a.value !== b.value && (b.value = a.selectValue)
                }

                function k(a, b, c, d) {
                    var e;
                    return b && wd(b.nodeName) === c ? e = b : (e = d.cloneNode(!1), b ? a.insertBefore(e, b) : a.appendChild(e)), e
                }

                function l(a) {
                    for (var b; a;) b = a.nextSibling, Qa(a), a = b
                }

                function m(a) {
                    var b = p && p[0],
                        c = w && w[0];
                    if (b || c)
                        for (; a && (a === b || a === c || a.nodeType === $d || "" === a.value);) a = a.nextSibling;
                    return a
                }

                function n() {
                    var a = x && q.readValue();
                    x = y.getOptions();
                    var b = {},
                        d = c[0].firstChild;
                    if (v && c.prepend(p), d = m(d), x.items.forEach(function(a) {
                            var e, f, g;
                            a.group ? (e = b[a.group], e || (f = k(c[0], d, "optgroup", i), d = f.nextSibling, f.label = a.group, e = b[a.group] = {
                                groupElement: f,
                                currentOptionElement: f.firstChild
                            }), g = k(e.groupElement, e.currentOptionElement, "option", h), j(a, g), e.currentOptionElement = g.nextSibling) : (g = k(c[0], d, "option", h), j(a, g), d = g.nextSibling)
                        }), Object.keys(b).forEach(function(a) {
                            l(b[a].currentOptionElement)
                        }), l(d), o.$render(), !o.$isEmpty(a)) {
                        var e = q.readValue();
                        (y.trackBy ? Q(a, e) : a === e) || (o.$setViewValue(e), o.$render())
                    }
                }
                var o = g[1];
                if (o) {
                    for (var p, q = g[0], r = e.multiple, s = 0, t = c.children(), u = t.length; u > s; s++)
                        if ("" === t[s].value) {
                            p = t.eq(s);
                            break
                        }
                    var v = !!p,
                        w = Cd(h.cloneNode(!1));
                    w.val("?");
                    var x, y = d(e.ngOptions, c, b),
                        z = function() {
                            v || c.prepend(p), c.val(""), p.prop("selected", !0), p.attr("selected", !0)
                        },
                        A = function() {
                            v || p.remove()
                        },
                        B = function() {
                            c.prepend(w), c.val("?"), w.prop("selected", !0), w.attr("selected", !0)
                        },
                        C = function() {
                            w.remove()
                        };
                    r ? (o.$isEmpty = function(a) {
                        return !a || 0 === a.length
                    }, q.writeValue = function(a) {
                        x.items.forEach(function(a) {
                            a.element.selected = !1
                        }), a && a.forEach(function(a) {
                            var b = x.getOptionFromViewValue(a);
                            b && !b.disabled && (b.element.selected = !0)
                        })
                    }, q.readValue = function() {
                        var a = c.val() || [],
                            b = [];
                        return f(a, function(a) {
                            var c = x.selectValueMap[a];
                            c && !c.disabled && b.push(x.getViewValueFromOption(c))
                        }), b
                    }, y.trackBy && b.$watchCollection(function() {
                        return Od(o.$viewValue) ? o.$viewValue.map(function(a) {
                            return y.getTrackByValue(a)
                        }) : void 0
                    }, function() {
                        o.$render()
                    })) : (q.writeValue = function(a) {
                        var b = x.getOptionFromViewValue(a);
                        b && !b.disabled ? c[0].value !== b.selectValue && (C(), A(), c[0].value = b.selectValue, b.element.selected = !0, b.element.setAttribute("selected", "selected")) : null === a || v ? (C(), z()) : (A(), B())
                    }, q.readValue = function() {
                        var a = x.selectValueMap[c.val()];
                        return a && !a.disabled ? (A(), C(), x.getViewValueFromOption(a)) : null
                    }, y.trackBy && b.$watch(function() {
                        return y.getTrackByValue(o.$viewValue)
                    }, function() {
                        o.$render()
                    })), v ? (p.remove(), a(p)(b), p.removeClass("ng-scope")) : p = Cd(h.cloneNode(!1)), n(), b.$watchCollection(y.getWatchables, n)
                }
            }
            var h = b.createElement("option"),
                i = b.createElement("optgroup");
            return {
                restrict: "A",
                terminal: !0,
                require: ["select", "?ngModel"],
                link: {
                    pre: function(a, b, c, d) {
                        d[0].registerOption = p
                    },
                    post: g
                }
            }
        }],
        pg = ["$locale", "$interpolate", "$log", function(a, b, c) {
            var d = /{}/g,
                e = /^when(Minus)?(.+)$/;
            return {
                link: function(g, h, i) {
                    function j(a) {
                        h.text(a || "")
                    }
                    var k, l = i.count,
                        m = i.$attr.when && h.attr(i.$attr.when),
                        n = i.offset || 0,
                        o = g.$eval(m) || {},
                        q = {},
                        r = b.startSymbol(),
                        s = b.endSymbol(),
                        u = r + l + "-" + n + s,
                        v = Ld.noop;
                    f(i, function(a, b) {
                        var c = e.exec(b);
                        if (c) {
                            var d = (c[1] ? "-" : "") + wd(c[2]);
                            o[d] = h.attr(i.$attr[b])
                        }
                    }), f(o, function(a, c) {
                        q[c] = b(a.replace(d, u))
                    }), g.$watch(l, function(b) {
                        var d = parseFloat(b),
                            e = isNaN(d);
                        if (e || d in o || (d = a.pluralCat(d - n)), d !== k && !(e && y(k) && isNaN(k))) {
                            v();
                            var f = q[d];
                            t(f) ? (null != b && c.debug("ngPluralize: no rule defined for '" + d + "' in " + m), v = p, j()) : v = g.$watch(f, j), k = d
                        }
                    })
                }
            }
        }],
        qg = ["$parse", "$animate", function(a, g) {
            var h = "$$NG_REMOVED",
                i = d("ngRepeat"),
                j = function(a, b, c, d, e, f, g) {
                    a[c] = d, e && (a[e] = f), a.$index = b, a.$first = 0 === b, a.$last = b === g - 1, a.$middle = !(a.$first || a.$last), a.$odd = !(a.$even = 0 === (1 & b))
                },
                k = function(a) {
                    return a.clone[0]
                },
                l = function(a) {
                    return a.clone[a.clone.length - 1]
                };
            return {
                restrict: "A",
                multiElement: !0,
                transclude: "element",
                priority: 1e3,
                terminal: !0,
                $$tlb: !0,
                compile: function(d, m) {
                    var n = m.ngRepeat,
                        o = b.createComment(" end ngRepeat: " + n + " "),
                        p = n.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
                    if (!p) throw i("iexp", "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.", n);
                    var q = p[1],
                        r = p[2],
                        s = p[3],
                        t = p[4];
                    if (p = q.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/), !p) throw i("iidexp", "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.", q);
                    var u = p[3] || p[1],
                        v = p[2];
                    if (s && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(s) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(s))) throw i("badident", "alias '{0}' is invalid --- must be a valid JS identifier which is not a reserved name.", s);
                    var w, x, y, z, A = {
                        $id: Ya
                    };
                    return t ? w = a(t) : (y = function(a, b) {
                            return Ya(b)
                        }, z = function(a) {
                            return a
                        }),
                        function(a, b, d, m, p) {
                            w && (x = function(b, c, d) {
                                return v && (A[v] = b), A[u] = c, A.$index = d, w(a, A)
                            });
                            var q = qa();
                            a.$watchCollection(r, function(d) {
                                var m, r, t, w, A, B, C, D, E, F, G, H, I = b[0],
                                    J = qa();
                                if (s && (a[s] = d), e(d)) E = d, D = x || y;
                                else {
                                    D = x || z, E = [];
                                    for (var K in d) xd.call(d, K) && "$" !== K.charAt(0) && E.push(K)
                                }
                                for (w = E.length, G = new Array(w), m = 0; w > m; m++)
                                    if (A = d === E ? m : E[m], B = d[A], C = D(A, B, m), q[C]) F = q[C], delete q[C], J[C] = F, G[m] = F;
                                    else {
                                        if (J[C]) throw f(G, function(a) {
                                            a && a.scope && (q[a.id] = a)
                                        }), i("dupes", "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}", n, C, B);
                                        G[m] = {
                                            id: C,
                                            scope: c,
                                            clone: c
                                        }, J[C] = !0
                                    }
                                for (var L in q) {
                                    if (F = q[L], H = pa(F.clone), g.leave(H), H[0].parentNode)
                                        for (m = 0, r = H.length; r > m; m++) H[m][h] = !0;
                                    F.scope.$destroy()
                                }
                                for (m = 0; w > m; m++)
                                    if (A = d === E ? m : E[m], B = d[A], F = G[m], F.scope) {
                                        t = I;
                                        do t = t.nextSibling; while (t && t[h]);
                                        k(F) != t && g.move(pa(F.clone), null, Cd(I)), I = l(F), j(F.scope, m, u, B, v, A, w)
                                    } else p(function(a, b) {
                                        F.scope = b;
                                        var c = o.cloneNode(!1);
                                        a[a.length++] = c, g.enter(a, null, Cd(I)), I = c, F.clone = a, J[F.id] = F, j(F.scope, m, u, B, v, A, w)
                                    });
                                q = J
                            })
                        }
                }
            }
        }],
        rg = "ng-hide",
        sg = "ng-hide-animate",
        tg = ["$animate", function(a) {
            return {
                restrict: "A",
                multiElement: !0,
                link: function(b, c, d) {
                    b.$watch(d.ngShow, function(b) {
                        a[b ? "removeClass" : "addClass"](c, rg, {
                            tempClasses: sg
                        })
                    })
                }
            }
        }],
        ug = ["$animate", function(a) {
            return {
                restrict: "A",
                multiElement: !0,
                link: function(b, c, d) {
                    b.$watch(d.ngHide, function(b) {
                        a[b ? "addClass" : "removeClass"](c, rg, {
                            tempClasses: sg
                        })
                    })
                }
            }
        }],
        vg = ad(function(a, b, c) {
            a.$watch(c.ngStyle, function(a, c) {
                c && a !== c && f(c, function(a, c) {
                    b.css(c, "")
                }), a && b.css(a)
            }, !0)
        }),
        wg = ["$animate", function(a) {
            return {
                require: "ngSwitch",
                controller: ["$scope", function() {
                    this.cases = {}
                }],
                link: function(c, d, e, g) {
                    var h = e.ngSwitch || e.on,
                        i = [],
                        j = [],
                        k = [],
                        l = [],
                        m = function(a, b) {
                            return function() {
                                a.splice(b, 1)
                            }
                        };
                    c.$watch(h, function(c) {
                        var d, e;
                        for (d = 0, e = k.length; e > d; ++d) a.cancel(k[d]);
                        for (k.length = 0, d = 0, e = l.length; e > d; ++d) {
                            var h = pa(j[d].clone);
                            l[d].$destroy();
                            var n = k[d] = a.leave(h);
                            n.then(m(k, d))
                        }
                        j.length = 0, l.length = 0, (i = g.cases["!" + c] || g.cases["?"]) && f(i, function(c) {
                            c.transclude(function(d, e) {
                                l.push(e);
                                var f = c.element;
                                d[d.length++] = b.createComment(" end ngSwitchWhen: ");
                                var g = {
                                    clone: d
                                };
                                j.push(g), a.enter(d, f.parent(), f)
                            })
                        })
                    })
                }
            }
        }],
        xg = ad({
            transclude: "element",
            priority: 1200,
            require: "^ngSwitch",
            multiElement: !0,
            link: function(a, b, c, d, e) {
                d.cases["!" + c.ngSwitchWhen] = d.cases["!" + c.ngSwitchWhen] || [], d.cases["!" + c.ngSwitchWhen].push({
                    transclude: e,
                    element: b
                })
            }
        }),
        yg = ad({
            transclude: "element",
            priority: 1200,
            require: "^ngSwitch",
            multiElement: !0,
            link: function(a, b, c, d, e) {
                d.cases["?"] = d.cases["?"] || [], d.cases["?"].push({
                    transclude: e,
                    element: b
                })
            }
        }),
        zg = ad({
            restrict: "EAC",
            link: function(a, b, c, e, f) {
                if (!f) throw d("ngTransclude")("orphan", "Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}", $(b));
                f(function(a) {
                    b.empty(), b.append(a)
                })
            }
        }),
        Ag = ["$templateCache", function(a) {
            return {
                restrict: "E",
                terminal: !0,
                compile: function(b, c) {
                    if ("text/ng-template" == c.type) {
                        var d = c.id,
                            e = b[0].text;
                        a.put(d, e)
                    }
                }
            }
        }],
        Bg = {
            $setViewValue: p,
            $render: p
        },
        Cg = ["$element", "$scope", "$attrs", function(a, d, e) {
            var f = this,
                g = new Za;
            f.ngModelCtrl = Bg, f.unknownOption = Cd(b.createElement("option")), f.renderUnknownOption = function(b) {
                var c = "? " + Ya(b) + " ?";
                f.unknownOption.val(c), a.prepend(f.unknownOption), a.val(c)
            }, d.$on("$destroy", function() {
                f.renderUnknownOption = p
            }), f.removeUnknownOption = function() {
                f.unknownOption.parent() && f.unknownOption.remove()
            }, f.readValue = function() {
                return f.removeUnknownOption(), a.val()
            }, f.writeValue = function(b) {
                f.hasOption(b) ? (f.removeUnknownOption(), a.val(b), "" === b && f.emptyOption.prop("selected", !0)) : null == b && f.emptyOption ? (f.removeUnknownOption(), a.val("")) : f.renderUnknownOption(b)
            }, f.addOption = function(a, b) {
                na(a, '"option value"'), "" === a && (f.emptyOption = b);
                var c = g.get(a) || 0;
                g.put(a, c + 1), f.ngModelCtrl.$render(), td(b)
            }, f.removeOption = function(a) {
                var b = g.get(a);
                b && (1 === b ? (g.remove(a), "" === a && (f.emptyOption = c)) : g.put(a, b - 1))
            }, f.hasOption = function(a) {
                return !!g.get(a)
            }, f.registerOption = function(a, b, c, d, e) {
                if (d) {
                    var g;
                    c.$observe("value", function(a) {
                        u(g) && f.removeOption(g), g = a, f.addOption(a, b)
                    })
                } else e ? a.$watch(e, function(a, d) {
                    c.$set("value", a), d !== a && f.removeOption(d), f.addOption(a, b)
                }) : f.addOption(c.value, b);
                b.on("$destroy", function() {
                    f.removeOption(c.value), f.ngModelCtrl.$render()
                })
            }
        }],
        Dg = function() {
            function a(a, b, c, d) {
                var e = d[1];
                if (e) {
                    var g = d[0];
                    if (g.ngModelCtrl = e, e.$render = function() {
                            g.writeValue(e.$viewValue)
                        }, b.on("change", function() {
                            a.$apply(function() {
                                e.$setViewValue(g.readValue())
                            })
                        }), c.multiple) {
                        g.readValue = function() {
                            var a = [];
                            return f(b.find("option"), function(b) {
                                b.selected && a.push(b.value)
                            }), a
                        }, g.writeValue = function(a) {
                            var c = new Za(a);
                            f(b.find("option"), function(a) {
                                a.selected = u(c.get(a.value))
                            })
                        };
                        var h, i = NaN;
                        a.$watch(function() {
                            i !== e.$viewValue || Q(h, e.$viewValue) || (h = P(e.$viewValue), e.$render()), i = e.$viewValue
                        }), e.$isEmpty = function(a) {
                            return !a || 0 === a.length
                        }
                    }
                }
            }
            return {
                restrict: "E",
                require: ["select", "?ngModel"],
                controller: Cg,
                priority: 1,
                link: {
                    pre: a
                }
            }
        },
        Eg = ["$interpolate", function(a) {
            return {
                restrict: "E",
                priority: 100,
                compile: function(b, c) {
                    if (u(c.value)) var d = a(c.value, !0);
                    else {
                        var e = a(b.text(), !0);
                        e || c.$set("value", b.text())
                    }
                    return function(a, b, c) {
                        var f = "$selectController",
                            g = b.parent(),
                            h = g.data(f) || g.parent().data(f);
                        h && h.registerOption(a, b, c, d, e)
                    }
                }
            }
        }],
        Fg = r({
            restrict: "E",
            terminal: !1
        }),
        Gg = function() {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function(a, b, c, d) {
                    d && (c.required = !0, d.$validators.required = function(a, b) {
                        return !c.required || !d.$isEmpty(b)
                    }, c.$observe("required", function() {
                        d.$validate()
                    }))
                }
            }
        },
        Hg = function() {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function(a, b, e, f) {
                    if (f) {
                        var g, h = e.ngPattern || e.pattern;
                        e.$observe("pattern", function(a) {
                            if (x(a) && a.length > 0 && (a = new RegExp("^" + a + "$")), a && !a.test) throw d("ngPattern")("noregexp", "Expected {0} to be a RegExp but was {1}. Element: {2}", h, a, $(b));
                            g = a || c, f.$validate()
                        }), f.$validators.pattern = function(a, b) {
                            return f.$isEmpty(b) || t(g) || g.test(b)
                        }
                    }
                }
            }
        },
        Ig = function() {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function(a, b, c, d) {
                    if (d) {
                        var e = -1;
                        c.$observe("maxlength", function(a) {
                            var b = n(a);
                            e = isNaN(b) ? -1 : b, d.$validate()
                        }), d.$validators.maxlength = function(a, b) {
                            return 0 > e || d.$isEmpty(b) || b.length <= e
                        }
                    }
                }
            }
        },
        Jg = function() {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function(a, b, c, d) {
                    if (d) {
                        var e = 0;
                        c.$observe("minlength", function(a) {
                            e = n(a) || 0, d.$validate()
                        }), d.$validators.minlength = function(a, b) {
                            return d.$isEmpty(b) || b.length >= e
                        }
                    }
                }
            }
        };
    return a.angular.bootstrap ? void console.log("WARNING: Tried to load angular more than once.") : (ka(), ua(Ld), Ld.module("ngLocale", [], ["$provide", function(a) {
        function b(a) {
            a += "";
            var b = a.indexOf(".");
            return -1 == b ? 0 : a.length - b - 1
        }

        function d(a, d) {
            var e = d;
            c === e && (e = Math.min(b(a), 3));
            var f = Math.pow(10, e),
                g = (a * f | 0) % f;
            return {
                v: e,
                f: g
            }
        }
        var e = {
            ZERO: "zero",
            ONE: "one",
            TWO: "two",
            FEW: "few",
            MANY: "many",
            OTHER: "other"
        };
        a.value("$locale", {
            DATETIME_FORMATS: {
                AMPMS: ["AM", "PM"],
                DAY: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                ERANAMES: ["Before Christ", "Anno Domini"],
                ERAS: ["BC", "AD"],
                FIRSTDAYOFWEEK: 6,
                MONTH: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                SHORTDAY: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                SHORTMONTH: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                WEEKENDRANGE: [5, 6],
                fullDate: "EEEE, MMMM d, y",
                longDate: "MMMM d, y",
                medium: "MMM d, y h:mm:ss a",
                mediumDate: "MMM d, y",
                mediumTime: "h:mm:ss a",
                "short": "M/d/yy h:mm a",
                shortDate: "M/d/yy",
                shortTime: "h:mm a"
            },
            NUMBER_FORMATS: {
                CURRENCY_SYM: "$",
                DECIMAL_SEP: ".",
                GROUP_SEP: ",",
                PATTERNS: [{
                    gSize: 3,
                    lgSize: 3,
                    maxFrac: 3,
                    minFrac: 0,
                    minInt: 1,
                    negPre: "-",
                    negSuf: "",
                    posPre: "",
                    posSuf: ""
                }, {
                    gSize: 3,
                    lgSize: 3,
                    maxFrac: 2,
                    minFrac: 2,
                    minInt: 1,
                    negPre: "-Â¤",
                    negSuf: "",
                    posPre: "Â¤",
                    posSuf: ""
                }]
            },
            id: "en-us",
            pluralCat: function(a, b) {
                var c = 0 | a,
                    f = d(a, b);
                return 1 == c && 0 == f.v ? e.ONE : e.OTHER
            }
        })
    }]), void Cd(b).ready(function() {
        fa(b, ga)
    }))
}(window, document), !window.angular.$$csp().noInlineStyle && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>'), "undefined" != typeof module && "undefined" != typeof exports && module.exports === exports && (module.exports = "ui.router"),
    function(a, b, c) {
        "use strict";

        function d(a, b) {
            return N(new(N(function() {}, {
                prototype: a
            })), b)
        }

        function e(a) {
            return M(arguments, function(b) {
                b !== a && M(b, function(b, c) {
                    a.hasOwnProperty(c) || (a[c] = b)
                })
            }), a
        }

        function f(a, b) {
            var c = [];
            for (var d in a.path) {
                if (a.path[d] !== b.path[d]) break;
                c.push(a.path[d])
            }
            return c
        }

        function g(a) {
            if (Object.keys) return Object.keys(a);
            var b = [];
            return M(a, function(a, c) {
                b.push(c)
            }), b
        }

        function h(a, b) {
            if (Array.prototype.indexOf) return a.indexOf(b, Number(arguments[2]) || 0);
            var c = a.length >>> 0,
                d = Number(arguments[2]) || 0;
            for (d = 0 > d ? Math.ceil(d) : Math.floor(d), 0 > d && (d += c); c > d; d++)
                if (d in a && a[d] === b) return d;
            return -1
        }

        function i(a, b, c, d) {
            var e, i = f(c, d),
                j = {},
                k = [];
            for (var l in i)
                if (i[l].params && (e = g(i[l].params), e.length))
                    for (var m in e) h(k, e[m]) >= 0 || (k.push(e[m]), j[e[m]] = a[e[m]]);
            return N({}, j, b)
        }

        function j(a, b, c) {
            if (!c) {
                c = [];
                for (var d in a) c.push(d)
            }
            for (var e = 0; e < c.length; e++) {
                var f = c[e];
                if (a[f] != b[f]) return !1
            }
            return !0
        }

        function k(a, b) {
            var c = {};
            return M(a, function(a) {
                c[a] = b[a]
            }), c
        }

        function l(a) {
            var b = {},
                c = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
            return M(c, function(c) {
                c in a && (b[c] = a[c])
            }), b
        }

        function m(a) {
            var b = {},
                c = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
            for (var d in a) - 1 == h(c, d) && (b[d] = a[d]);
            return b
        }

        function n(a, b) {
            var c = L(a),
                d = c ? [] : {};
            return M(a, function(a, e) {
                b(a, e) && (d[c ? d.length : e] = a)
            }), d
        }

        function o(a, b) {
            var c = L(a) ? [] : {};
            return M(a, function(a, d) {
                c[d] = b(a, d)
            }), c
        }

        function p(a, b) {
            var d = 1,
                f = 2,
                i = {},
                j = [],
                k = i,
                l = N(a.when(i), {
                    $$promises: i,
                    $$values: i
                });
            this.study = function(i) {
                function n(a, c) {
                    if (s[c] !== f) {
                        if (r.push(c), s[c] === d) throw r.splice(0, h(r, c)), new Error("Cyclic dependency: " + r.join(" -> "));
                        if (s[c] = d, J(a)) q.push(c, [function() {
                            return b.get(a)
                        }], j);
                        else {
                            var e = b.annotate(a);
                            M(e, function(a) {
                                a !== c && i.hasOwnProperty(a) && n(i[a], a)
                            }), q.push(c, a, e)
                        }
                        r.pop(), s[c] = f
                    }
                }

                function o(a) {
                    return K(a) && a.then && a.$$promises
                }
                if (!K(i)) throw new Error("'invocables' must be an object");
                var p = g(i || {}),
                    q = [],
                    r = [],
                    s = {};
                return M(i, n), i = r = s = null,
                    function(d, f, g) {
                        function h() {
                            --u || (v || e(t, f.$$values), r.$$values = t, r.$$promises = r.$$promises || !0, delete r.$$inheritedValues, n.resolve(t))
                        }

                        function i(a) {
                            r.$$failure = a, n.reject(a)
                        }

                        function j(c, e, f) {
                            function j(a) {
                                l.reject(a), i(a)
                            }

                            function k() {
                                if (!H(r.$$failure)) try {
                                    l.resolve(b.invoke(e, g, t)), l.promise.then(function(a) {
                                        t[c] = a, h()
                                    }, j)
                                } catch (a) {
                                    j(a)
                                }
                            }
                            var l = a.defer(),
                                m = 0;
                            M(f, function(a) {
                                s.hasOwnProperty(a) && !d.hasOwnProperty(a) && (m++, s[a].then(function(b) {
                                    t[a] = b, --m || k()
                                }, j))
                            }), m || k(), s[c] = l.promise
                        }
                        if (o(d) && g === c && (g = f, f = d, d = null), d) {
                            if (!K(d)) throw new Error("'locals' must be an object")
                        } else d = k;
                        if (f) {
                            if (!o(f)) throw new Error("'parent' must be a promise returned by $resolve.resolve()")
                        } else f = l;
                        var n = a.defer(),
                            r = n.promise,
                            s = r.$$promises = {},
                            t = N({}, d),
                            u = 1 + q.length / 3,
                            v = !1;
                        if (H(f.$$failure)) return i(f.$$failure), r;
                        f.$$inheritedValues && e(t, m(f.$$inheritedValues, p)), N(s, f.$$promises), f.$$values ? (v = e(t, m(f.$$values, p)), r.$$inheritedValues = m(f.$$values, p), h()) : (f.$$inheritedValues && (r.$$inheritedValues = m(f.$$inheritedValues, p)), f.then(h, i));
                        for (var w = 0, x = q.length; x > w; w += 3) d.hasOwnProperty(q[w]) ? h() : j(q[w], q[w + 1], q[w + 2]);
                        return r
                    }
            }, this.resolve = function(a, b, c, d) {
                return this.study(a)(b, c, d)
            }
        }

        function q(a, b, c) {
            this.fromConfig = function(a, b, c) {
                return H(a.template) ? this.fromString(a.template, b) : H(a.templateUrl) ? this.fromUrl(a.templateUrl, b) : H(a.templateProvider) ? this.fromProvider(a.templateProvider, b, c) : null
            }, this.fromString = function(a, b) {
                return I(a) ? a(b) : a
            }, this.fromUrl = function(c, d) {
                return I(c) && (c = c(d)), null == c ? null : a.get(c, {
                    cache: b,
                    headers: {
                        Accept: "text/html"
                    }
                }).then(function(a) {
                    return a.data
                })
            }, this.fromProvider = function(a, b, d) {
                return c.invoke(a, null, d || {
                    params: b
                })
            }
        }

        function r(a, b, e) {
            function f(b, c, d, e) {
                if (q.push(b), o[b]) return o[b];
                if (!/^\w+(-+\w+)*(?:\[\])?$/.test(b)) throw new Error("Invalid parameter name '" + b + "' in pattern '" + a + "'");
                if (p[b]) throw new Error("Duplicate parameter name '" + b + "' in pattern '" + a + "'");
                return p[b] = new P.Param(b, c, d, e), p[b]
            }

            function g(a, b, c, d) {
                var e = ["", ""],
                    f = a.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&");
                if (!b) return f;
                switch (c) {
                    case !1:
                        e = ["(", ")" + (d ? "?" : "")];
                        break;
                    case !0:
                        e = ["?(", ")?"];
                        break;
                    default:
                        e = ["(" + c + "|", ")?"]
                }
                return f + e[0] + b + e[1]
            }

            function h(e, f) {
                var g, h, i, j, k;
                return g = e[2] || e[3], k = b.params[g], i = a.substring(m, e.index), h = f ? e[4] : e[4] || ("*" == e[1] ? ".*" : null), j = P.type(h || "string") || d(P.type("string"), {
                    pattern: new RegExp(h, b.caseInsensitive ? "i" : c)
                }), {
                    id: g,
                    regexp: h,
                    segment: i,
                    type: j,
                    cfg: k
                }
            }
            b = N({
                params: {}
            }, K(b) ? b : {});
            var i, j = /([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
                k = /([:]?)([\w\[\]-]+)|\{([\w\[\]-]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
                l = "^",
                m = 0,
                n = this.segments = [],
                o = e ? e.params : {},
                p = this.params = e ? e.params.$$new() : new P.ParamSet,
                q = [];
            this.source = a;
            for (var r, s, t;
                (i = j.exec(a)) && (r = h(i, !1), !(r.segment.indexOf("?") >= 0));) s = f(r.id, r.type, r.cfg, "path"), l += g(r.segment, s.type.pattern.source, s.squash, s.isOptional), n.push(r.segment), m = j.lastIndex;
            t = a.substring(m);
            var u = t.indexOf("?");
            if (u >= 0) {
                var v = this.sourceSearch = t.substring(u);
                if (t = t.substring(0, u), this.sourcePath = a.substring(0, m + u), v.length > 0)
                    for (m = 0; i = k.exec(v);) r = h(i, !0), s = f(r.id, r.type, r.cfg, "search"), m = j.lastIndex
            } else this.sourcePath = a, this.sourceSearch = "";
            l += g(t) + (b.strict === !1 ? "/?" : "") + "$", n.push(t), this.regexp = new RegExp(l, b.caseInsensitive ? "i" : c), this.prefix = n[0], this.$$paramNames = q
        }

        function s(a) {
            N(this, a)
        }

        function t() {
            function a(a) {
                return null != a ? a.toString().replace(/\//g, "%2F") : a
            }

            function e(a) {
                return null != a ? a.toString().replace(/%2F/g, "/") : a
            }

            function f() {
                return {
                    strict: p,
                    caseInsensitive: m
                }
            }

            function i(a) {
                return I(a) || L(a) && I(a[a.length - 1])
            }

            function j() {
                for (; w.length;) {
                    var a = w.shift();
                    if (a.pattern) throw new Error("You cannot override a type's .pattern at runtime.");
                    b.extend(u[a.name], l.invoke(a.def))
                }
            }

            function k(a) {
                N(this, a || {})
            }
            P = this;
            var l, m = !1,
                p = !0,
                q = !1,
                u = {},
                v = !0,
                w = [],
                x = {
                    string: {
                        encode: a,
                        decode: e,
                        is: function(a) {
                            return null == a || !H(a) || "string" == typeof a
                        },
                        pattern: /[^\/]*/
                    },
                    "int": {
                        encode: a,
                        decode: function(a) {
                            return parseInt(a, 10)
                        },
                        is: function(a) {
                            return H(a) && this.decode(a.toString()) === a
                        },
                        pattern: /\d+/
                    },
                    bool: {
                        encode: function(a) {
                            return a ? 1 : 0
                        },
                        decode: function(a) {
                            return 0 !== parseInt(a, 10)
                        },
                        is: function(a) {
                            return a === !0 || a === !1
                        },
                        pattern: /0|1/
                    },
                    date: {
                        encode: function(a) {
                            return this.is(a) ? [a.getFullYear(), ("0" + (a.getMonth() + 1)).slice(-2), ("0" + a.getDate()).slice(-2)].join("-") : c
                        },
                        decode: function(a) {
                            if (this.is(a)) return a;
                            var b = this.capture.exec(a);
                            return b ? new Date(b[1], b[2] - 1, b[3]) : c
                        },
                        is: function(a) {
                            return a instanceof Date && !isNaN(a.valueOf())
                        },
                        equals: function(a, b) {
                            return this.is(a) && this.is(b) && a.toISOString() === b.toISOString()
                        },
                        pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,
                        capture: /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/
                    },
                    json: {
                        encode: b.toJson,
                        decode: b.fromJson,
                        is: b.isObject,
                        equals: b.equals,
                        pattern: /[^\/]*/
                    },
                    any: {
                        encode: b.identity,
                        decode: b.identity,
                        equals: b.equals,
                        pattern: /.*/
                    }
                };
            t.$$getDefaultValue = function(a) {
                if (!i(a.value)) return a.value;
                if (!l) throw new Error("Injectable functions cannot be called at configuration time");
                return l.invoke(a.value)
            }, this.caseInsensitive = function(a) {
                return H(a) && (m = a), m
            }, this.strictMode = function(a) {
                return H(a) && (p = a), p
            }, this.defaultSquashPolicy = function(a) {
                if (!H(a)) return q;
                if (a !== !0 && a !== !1 && !J(a)) throw new Error("Invalid squash policy: " + a + ". Valid policies: false, true, arbitrary-string");
                return q = a, a
            }, this.compile = function(a, b) {
                return new r(a, N(f(), b))
            }, this.isMatcher = function(a) {
                if (!K(a)) return !1;
                var b = !0;
                return M(r.prototype, function(c, d) {
                    I(c) && (b = b && H(a[d]) && I(a[d]))
                }), b
            }, this.type = function(a, b, c) {
                if (!H(b)) return u[a];
                if (u.hasOwnProperty(a)) throw new Error("A type named '" + a + "' has already been defined.");
                return u[a] = new s(N({
                    name: a
                }, b)), c && (w.push({
                    name: a,
                    def: c
                }), v || j()), this
            }, M(x, function(a, b) {
                u[b] = new s(N({
                    name: b
                }, a))
            }), u = d(u, {}), this.$get = ["$injector", function(a) {
                return l = a, v = !1, j(), M(x, function(a, b) {
                    u[b] || (u[b] = new s(a))
                }), this
            }], this.Param = function(a, b, d, e) {
                function f(a) {
                    var b = K(a) ? g(a) : [],
                        c = -1 === h(b, "value") && -1 === h(b, "type") && -1 === h(b, "squash") && -1 === h(b, "array");
                    return c && (a = {
                        value: a
                    }), a.$$fn = i(a.value) ? a.value : function() {
                        return a.value
                    }, a
                }

                function j(b, c, d) {
                    if (b.type && c) throw new Error("Param '" + a + "' has two type configurations.");
                    return c ? c : b.type ? b.type instanceof s ? b.type : new s(b.type) : "config" === d ? u.any : u.string
                }

                function k() {
                    var b = {
                            array: "search" === e ? "auto" : !1
                        },
                        c = a.match(/\[\]$/) ? {
                            array: !0
                        } : {};
                    return N(b, c, d).array
                }

                function m(a, b) {
                    var c = a.squash;
                    if (!b || c === !1) return !1;
                    if (!H(c) || null == c) return q;
                    if (c === !0 || J(c)) return c;
                    throw new Error("Invalid squash policy: '" + c + "'. Valid policies: false, true, or arbitrary string")
                }

                function p(a, b, d, e) {
                    var f, g, i = [{
                        from: "",
                        to: d || b ? c : ""
                    }, {
                        from: null,
                        to: d || b ? c : ""
                    }];
                    return f = L(a.replace) ? a.replace : [], J(e) && f.push({
                        from: e,
                        to: c
                    }), g = o(f, function(a) {
                        return a.from
                    }), n(i, function(a) {
                        return -1 === h(g, a.from)
                    }).concat(f)
                }

                function r() {
                    if (!l) throw new Error("Injectable functions cannot be called at configuration time");
                    var a = l.invoke(d.$$fn);
                    if (null !== a && a !== c && !w.type.is(a)) throw new Error("Default value (" + a + ") for parameter '" + w.id + "' is not an instance of Type (" + w.type.name + ")");
                    return a
                }

                function t(a) {
                    function b(a) {
                        return function(b) {
                            return b.from === a
                        }
                    }

                    function c(a) {
                        var c = o(n(w.replace, b(a)), function(a) {
                            return a.to
                        });
                        return c.length ? c[0] : a
                    }
                    return a = c(a), H(a) ? w.type.$normalize(a) : r()
                }

                function v() {
                    return "{Param:" + a + " " + b + " squash: '" + z + "' optional: " + y + "}"
                }
                var w = this;
                d = f(d), b = j(d, b, e);
                var x = k();
                b = x ? b.$asArray(x, "search" === e) : b, "string" !== b.name || x || "path" !== e || d.value !== c || (d.value = "");
                var y = d.value !== c,
                    z = m(d, y),
                    A = p(d, x, y, z);
                N(this, {
                    id: a,
                    type: b,
                    location: e,
                    array: x,
                    squash: z,
                    replace: A,
                    isOptional: y,
                    value: t,
                    dynamic: c,
                    config: d,
                    toString: v
                })
            }, k.prototype = {
                $$new: function() {
                    return d(this, N(new k, {
                        $$parent: this
                    }))
                },
                $$keys: function() {
                    for (var a = [], b = [], c = this, d = g(k.prototype); c;) b.push(c), c = c.$$parent;
                    return b.reverse(), M(b, function(b) {
                        M(g(b), function(b) {
                            -1 === h(a, b) && -1 === h(d, b) && a.push(b)
                        })
                    }), a
                },
                $$values: function(a) {
                    var b = {},
                        c = this;
                    return M(c.$$keys(), function(d) {
                        b[d] = c[d].value(a && a[d])
                    }), b
                },
                $$equals: function(a, b) {
                    var c = !0,
                        d = this;
                    return M(d.$$keys(), function(e) {
                        var f = a && a[e],
                            g = b && b[e];
                        d[e].type.equals(f, g) || (c = !1)
                    }), c
                },
                $$validates: function(a) {
                    var d, e, f, g, h, i = this.$$keys();
                    for (d = 0; d < i.length && (e = this[i[d]], f = a[i[d]], f !== c && null !== f || !e.isOptional); d++) {
                        if (g = e.type.$normalize(f), !e.type.is(g)) return !1;
                        if (h = e.type.encode(g), b.isString(h) && !e.type.pattern.exec(h)) return !1
                    }
                    return !0
                },
                $$parent: c
            }, this.ParamSet = k
        }

        function u(a, d) {
            function e(a) {
                var b = /^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(a.source);
                return null != b ? b[1].replace(/\\(.)/g, "$1") : ""
            }

            function f(a, b) {
                return a.replace(/\$(\$|\d{1,2})/, function(a, c) {
                    return b["$" === c ? 0 : Number(c)]
                })
            }

            function g(a, b, c) {
                if (!c) return !1;
                var d = a.invoke(b, b, {
                    $match: c
                });
                return H(d) ? d : !0
            }

            function h(d, e, f, g) {
                function h(a, b, c) {
                    return "/" === p ? a : b ? p.slice(0, -1) + a : c ? p.slice(1) + a : a
                }

                function m(a) {
                    function b(a) {
                        var b = a(f, d);
                        return b ? (J(b) && d.replace().url(b), !0) : !1
                    }
                    if (!a || !a.defaultPrevented) {
                        o && d.url() === o;
                        o = c;
                        var e, g = j.length;
                        for (e = 0; g > e; e++)
                            if (b(j[e])) return;
                        k && b(k)
                    }
                }

                function n() {
                    return i = i || e.$on("$locationChangeSuccess", m)
                }
                var o, p = g.baseHref(),
                    q = d.url();
                return l || n(), {
                    sync: function() {
                        m()
                    },
                    listen: function() {
                        return n()
                    },
                    update: function(a) {
                        return a ? void(q = d.url()) : void(d.url() !== q && (d.url(q), d.replace()))
                    },
                    push: function(a, b, e) {
                        var f = a.format(b || {});
                        null !== f && b && b["#"] && (f += "#" + b["#"]), d.url(f), o = e && e.$$avoidResync ? d.url() : c, e && e.replace && d.replace()
                    },
                    href: function(c, e, f) {
                        if (!c.validates(e)) return null;
                        var g = a.html5Mode();
                        b.isObject(g) && (g = g.enabled);
                        var i = c.format(e);
                        if (f = f || {}, g || null === i || (i = "#" + a.hashPrefix() + i), null !== i && e && e["#"] && (i += "#" + e["#"]), i = h(i, g, f.absolute), !f.absolute || !i) return i;
                        var j = !g && i ? "/" : "",
                            k = d.port();
                        return k = 80 === k || 443 === k ? "" : ":" + k, [d.protocol(), "://", d.host(), k, j, i].join("")
                    }
                }
            }
            var i, j = [],
                k = null,
                l = !1;
            this.rule = function(a) {
                if (!I(a)) throw new Error("'rule' must be a function");
                return j.push(a), this
            }, this.otherwise = function(a) {
                if (J(a)) {
                    var b = a;
                    a = function() {
                        return b
                    }
                } else if (!I(a)) throw new Error("'rule' must be a function");
                return k = a, this
            }, this.when = function(a, b) {
                var c, h = J(b);
                if (J(a) && (a = d.compile(a)), !h && !I(b) && !L(b)) throw new Error("invalid 'handler' in when()");
                var i = {
                        matcher: function(a, b) {
                            return h && (c = d.compile(b), b = ["$match", function(a) {
                                return c.format(a)
                            }]), N(function(c, d) {
                                return g(c, b, a.exec(d.path(), d.search()))
                            }, {
                                prefix: J(a.prefix) ? a.prefix : ""
                            })
                        },
                        regex: function(a, b) {
                            if (a.global || a.sticky) throw new Error("when() RegExp must not be global or sticky");
                            return h && (c = b, b = ["$match", function(a) {
                                return f(c, a)
                            }]), N(function(c, d) {
                                return g(c, b, a.exec(d.path()))
                            }, {
                                prefix: e(a)
                            })
                        }
                    },
                    j = {
                        matcher: d.isMatcher(a),
                        regex: a instanceof RegExp
                    };
                for (var k in j)
                    if (j[k]) return this.rule(i[k](a, b));
                throw new Error("invalid 'what' in when()")
            }, this.deferIntercept = function(a) {
                a === c && (a = !0), l = a
            }, this.$get = h, h.$inject = ["$location", "$rootScope", "$injector", "$browser"]
        }

        function v(a, e) {
            function f(a) {
                return 0 === a.indexOf(".") || 0 === a.indexOf("^")
            }

            function m(a, b) {
                if (!a) return c;
                var d = J(a),
                    e = d ? a : a.name,
                    g = f(e);
                if (g) {
                    if (!b) throw new Error("No reference point given for path '" + e + "'");
                    b = m(b);
                    for (var h = e.split("."), i = 0, j = h.length, k = b; j > i; i++)
                        if ("" !== h[i] || 0 !== i) {
                            if ("^" !== h[i]) break;
                            if (!k.parent) throw new Error("Path '" + e + "' not valid for state '" + b.name + "'");
                            k = k.parent
                        } else k = b;
                    h = h.slice(i).join("."), e = k.name + (k.name && h ? "." : "") + h
                }
                var l = z[e];
                return !l || !d && (d || l !== a && l.self !== a) ? c : l
            }

            function n(a, b) {
                A[a] || (A[a] = []), A[a].push(b)
            }

            function p(a) {
                for (var b = A[a] || []; b.length;) q(b.shift())
            }

            function q(b) {
                b = d(b, {
                    self: b,
                    resolve: b.resolve || {},
                    toString: function() {
                        return this.name
                    }
                });
                var c = b.name;
                if (!J(c) || c.indexOf("@") >= 0) throw new Error("State must have a valid name");
                if (z.hasOwnProperty(c)) throw new Error("State '" + c + "'' is already defined");
                var e = -1 !== c.indexOf(".") ? c.substring(0, c.lastIndexOf(".")) : J(b.parent) ? b.parent : K(b.parent) && J(b.parent.name) ? b.parent.name : "";
                if (e && !z[e]) return n(e, b.self);
                for (var f in C) I(C[f]) && (b[f] = C[f](b, C.$delegates[f]));
                return z[c] = b, !b[B] && b.url && a.when(b.url, ["$match", "$stateParams", function(a, c) {
                    y.$current.navigable == b && j(a, c) || y.transitionTo(b, a, {
                        inherit: !0,
                        location: !1
                    })
                }]), p(c), b
            }

            function r(a) {
                return a.indexOf("*") > -1
            }

            function s(a) {
                for (var b = a.split("."), c = y.$current.name.split("."), d = 0, e = b.length; e > d; d++) "*" === b[d] && (c[d] = "*");
                return "**" === b[0] && (c = c.slice(h(c, b[1])), c.unshift("**")), "**" === b[b.length - 1] && (c.splice(h(c, b[b.length - 2]) + 1, Number.MAX_VALUE), c.push("**")), b.length != c.length ? !1 : c.join("") === b.join("")
            }

            function t(a, b) {
                return J(a) && !H(b) ? C[a] : I(b) && J(a) ? (C[a] && !C.$delegates[a] && (C.$delegates[a] = C[a]), C[a] = b, this) : this
            }

            function u(a, b) {
                return K(a) ? b = a : b.name = a, q(b), this
            }

            function v(a, e, f, h, l, n, p, q, t) {
                function u(b, c, d, f) {
                    var g = a.$broadcast("$stateNotFound", b, c, d);
                    if (g.defaultPrevented) return p.update(), D;
                    if (!g.retry) return null;
                    if (f.$retry) return p.update(), E;
                    var h = y.transition = e.when(g.retry);
                    return h.then(function() {
                        return h !== y.transition ? A : (b.options.$retry = !0, y.transitionTo(b.to, b.toParams, b.options))
                    }, function() {
                        return D
                    }), p.update(), h
                }

                function v(a, c, d, g, i, j) {
                    function m() {
                        var c = [];
                        return M(a.views, function(d, e) {
                            var g = d.resolve && d.resolve !== a.resolve ? d.resolve : {};
                            g.$template = [function() {
                                return f.load(e, {
                                    view: d,
                                    locals: i.globals,
                                    params: n,
                                    notify: j.notify
                                }) || ""
                            }], c.push(l.resolve(g, i.globals, i.resolve, a).then(function(c) {
                                if (I(d.controllerProvider) || L(d.controllerProvider)) {
                                    var f = b.extend({}, g, i.globals);
                                    c.$$controller = h.invoke(d.controllerProvider, null, f)
                                } else c.$$controller = d.controller;
                                c.$$state = a, c.$$controllerAs = d.controllerAs, i[e] = c
                            }))
                        }), e.all(c).then(function() {
                            return i.globals
                        })
                    }
                    var n = d ? c : k(a.params.$$keys(), c),
                        o = {
                            $stateParams: n
                        };
                    i.resolve = l.resolve(a.resolve, o, i.resolve, a);
                    var p = [i.resolve.then(function(a) {
                        i.globals = a
                    })];
                    return g && p.push(g), e.all(p).then(m).then(function(a) {
                        return i
                    })
                }
                var A = e.reject(new Error("transition superseded")),
                    C = e.reject(new Error("transition prevented")),
                    D = e.reject(new Error("transition aborted")),
                    E = e.reject(new Error("transition failed"));
                return x.locals = {
                    resolve: null,
                    globals: {
                        $stateParams: {}
                    }
                }, y = {
                    params: {},
                    current: x.self,
                    $current: x,
                    transition: null
                }, y.reload = function(a) {
                    return y.transitionTo(y.current, n, {
                        reload: a || !0,
                        inherit: !1,
                        notify: !0
                    })
                }, y.go = function(a, b, c) {
                    return y.transitionTo(a, b, N({
                        inherit: !0,
                        relative: y.$current
                    }, c))
                }, y.transitionTo = function(b, c, f) {
                    c = c || {}, f = N({
                        location: !0,
                        inherit: !1,
                        relative: null,
                        notify: !0,
                        reload: !1,
                        $retry: !1
                    }, f || {});
                    var g, j = y.$current,
                        l = y.params,
                        o = j.path,
                        q = m(b, f.relative),
                        r = c["#"];
                    if (!H(q)) {
                        var s = {
                                to: b,
                                toParams: c,
                                options: f
                            },
                            t = u(s, j.self, l, f);
                        if (t) return t;
                        if (b = s.to, c = s.toParams, f = s.options, q = m(b, f.relative), !H(q)) {
                            if (!f.relative) throw new Error("No such state '" + b + "'");
                            throw new Error("Could not resolve '" + b + "' from state '" + f.relative + "'")
                        }
                    }
                    if (q[B]) throw new Error("Cannot transition to abstract state '" + b + "'");
                    if (f.inherit && (c = i(n, c || {}, y.$current, q)), !q.params.$$validates(c)) return E;
                    c = q.params.$$values(c), b = q;
                    var z = b.path,
                        D = 0,
                        F = z[D],
                        G = x.locals,
                        I = [];
                    if (f.reload) {
                        if (J(f.reload) || K(f.reload)) {
                            if (K(f.reload) && !f.reload.name) throw new Error("Invalid reload state object");
                            var L = f.reload === !0 ? o[0] : m(f.reload);
                            if (f.reload && !L) throw new Error("No such reload state '" + (J(f.reload) ? f.reload : f.reload.name) + "'");
                            for (; F && F === o[D] && F !== L;) G = I[D] = F.locals, D++, F = z[D]
                        }
                    } else
                        for (; F && F === o[D] && F.ownParams.$$equals(c, l);) G = I[D] = F.locals, D++, F = z[D];
                    if (w(b, c, j, l, G, f)) return r && (c["#"] = r), y.params = c, O(y.params, n), f.location && b.navigable && b.navigable.url && (p.push(b.navigable.url, c, {
                        $$avoidResync: !0,
                        replace: "replace" === f.location
                    }), p.update(!0)), y.transition = null, e.when(y.current);
                    if (c = k(b.params.$$keys(), c || {}), f.notify && a.$broadcast("$stateChangeStart", b.self, c, j.self, l).defaultPrevented) return a.$broadcast("$stateChangeCancel", b.self, c, j.self, l), p.update(), C;
                    for (var M = e.when(G), P = D; P < z.length; P++, F = z[P]) G = I[P] = d(G), M = v(F, c, F === b, M, G, f);
                    var Q = y.transition = M.then(function() {
                        var d, e, g;
                        if (y.transition !== Q) return A;
                        for (d = o.length - 1; d >= D; d--) g = o[d], g.self.onExit && h.invoke(g.self.onExit, g.self, g.locals.globals), g.locals = null;
                        for (d = D; d < z.length; d++) e = z[d], e.locals = I[d], e.self.onEnter && h.invoke(e.self.onEnter, e.self, e.locals.globals);
                        return r && (c["#"] = r), y.transition !== Q ? A : (y.$current = b, y.current = b.self, y.params = c, O(y.params, n), y.transition = null, f.location && b.navigable && p.push(b.navigable.url, b.navigable.locals.globals.$stateParams, {
                            $$avoidResync: !0,
                            replace: "replace" === f.location
                        }), f.notify && a.$broadcast("$stateChangeSuccess", b.self, c, j.self, l), p.update(!0), y.current)
                    }, function(d) {
                        return y.transition !== Q ? A : (y.transition = null, g = a.$broadcast("$stateChangeError", b.self, c, j.self, l, d), g.defaultPrevented || p.update(), e.reject(d))
                    });
                    return Q
                }, y.is = function(a, b, d) {
                    d = N({
                        relative: y.$current
                    }, d || {});
                    var e = m(a, d.relative);
                    return H(e) ? y.$current !== e ? !1 : b ? j(e.params.$$values(b), n) : !0 : c
                }, y.includes = function(a, b, d) {
                    if (d = N({
                            relative: y.$current
                        }, d || {}), J(a) && r(a)) {
                        if (!s(a)) return !1;
                        a = y.$current.name
                    }
                    var e = m(a, d.relative);
                    return H(e) ? H(y.$current.includes[e.name]) ? b ? j(e.params.$$values(b), n, g(b)) : !0 : !1 : c
                }, y.href = function(a, b, d) {
                    d = N({
                        lossy: !0,
                        inherit: !0,
                        absolute: !1,
                        relative: y.$current
                    }, d || {});
                    var e = m(a, d.relative);
                    if (!H(e)) return null;
                    d.inherit && (b = i(n, b || {}, y.$current, e));
                    var f = e && d.lossy ? e.navigable : e;
                    return f && f.url !== c && null !== f.url ? p.href(f.url, k(e.params.$$keys().concat("#"), b || {}), {
                        absolute: d.absolute
                    }) : null
                }, y.get = function(a, b) {
                    if (0 === arguments.length) return o(g(z), function(a) {
                        return z[a].self
                    });
                    var c = m(a, b || y.$current);
                    return c && c.self ? c.self : null
                }, y
            }

            function w(a, b, c, d, e, f) {
                function g(a, b, c) {
                    function d(b) {
                        return "search" != a.params[b].location
                    }
                    var e = a.params.$$keys().filter(d),
                        f = l.apply({}, [a.params].concat(e)),
                        g = new P.ParamSet(f);
                    return g.$$equals(b, c)
                }
                return !f.reload && a === c && (e === c.locals || a.self.reloadOnSearch === !1 && g(c, d, b)) ? !0 : void 0
            }
            var x, y, z = {},
                A = {},
                B = "abstract",
                C = {
                    parent: function(a) {
                        if (H(a.parent) && a.parent) return m(a.parent);
                        var b = /^(.+)\.[^.]+$/.exec(a.name);
                        return b ? m(b[1]) : x
                    },
                    data: function(a) {
                        return a.parent && a.parent.data && (a.data = a.self.data = N({}, a.parent.data, a.data)), a.data
                    },
                    url: function(a) {
                        var b = a.url,
                            c = {
                                params: a.params || {}
                            };
                        if (J(b)) return "^" == b.charAt(0) ? e.compile(b.substring(1), c) : (a.parent.navigable || x).url.concat(b, c);
                        if (!b || e.isMatcher(b)) return b;
                        throw new Error("Invalid url '" + b + "' in state '" + a + "'")
                    },
                    navigable: function(a) {
                        return a.url ? a : a.parent ? a.parent.navigable : null
                    },
                    ownParams: function(a) {
                        var b = a.url && a.url.params || new P.ParamSet;
                        return M(a.params || {}, function(a, c) {
                            b[c] || (b[c] = new P.Param(c, null, a, "config"))
                        }), b
                    },
                    params: function(a) {
                        return a.parent && a.parent.params ? N(a.parent.params.$$new(), a.ownParams) : new P.ParamSet
                    },
                    views: function(a) {
                        var b = {};
                        return M(H(a.views) ? a.views : {
                            "": a
                        }, function(c, d) {
                            d.indexOf("@") < 0 && (d += "@" + a.parent.name), b[d] = c
                        }), b
                    },
                    path: function(a) {
                        return a.parent ? a.parent.path.concat(a) : []
                    },
                    includes: function(a) {
                        var b = a.parent ? N({}, a.parent.includes) : {};
                        return b[a.name] = !0, b
                    },
                    $delegates: {}
                };
            x = q({
                name: "",
                url: "^",
                views: null,
                "abstract": !0
            }), x.navigable = null, this.decorator = t, this.state = u, this.$get = v, v.$inject = ["$rootScope", "$q", "$view", "$injector", "$resolve", "$stateParams", "$urlRouter", "$location", "$urlMatcherFactory"]
        }

        function w() {
            function a(a, b) {
                return {
                    load: function(c, d) {
                        var e, f = {
                            template: null,
                            controller: null,
                            view: null,
                            locals: null,
                            notify: !0,
                            async: !0,
                            params: {}
                        };
                        return d = N(f, d), d.view && (e = b.fromConfig(d.view, d.params, d.locals)), e && d.notify && a.$broadcast("$viewContentLoading", d), e
                    }
                }
            }
            this.$get = a, a.$inject = ["$rootScope", "$templateFactory"]
        }

        function x() {
            var a = !1;
            this.useAnchorScroll = function() {
                a = !0
            }, this.$get = ["$anchorScroll", "$timeout", function(b, c) {
                return a ? b : function(a) {
                    return c(function() {
                        a[0].scrollIntoView()
                    }, 0, !1)
                }
            }]
        }

        function y(a, c, d, e) {
            function f() {
                return c.has ? function(a) {
                    return c.has(a) ? c.get(a) : null
                } : function(a) {
                    try {
                        return c.get(a)
                    } catch (b) {
                        return null
                    }
                }
            }

            function g(a, b) {
                var c = function() {
                    return {
                        enter: function(a, b, c) {
                            b.after(a), c()
                        },
                        leave: function(a, b) {
                            a.remove(), b()
                        }
                    }
                };
                if (j) return {
                    enter: function(a, b, c) {
                        var d = j.enter(a, null, b, c);
                        d && d.then && d.then(c)
                    },
                    leave: function(a, b) {
                        var c = j.leave(a, b);
                        c && c.then && c.then(b)
                    }
                };
                if (i) {
                    var d = i && i(b, a);
                    return {
                        enter: function(a, b, c) {
                            d.enter(a, null, b), c()
                        },
                        leave: function(a, b) {
                            d.leave(a), b()
                        }
                    }
                }
                return c()
            }
            var h = f(),
                i = h("$animator"),
                j = h("$animate"),
                k = {
                    restrict: "ECA",
                    terminal: !0,
                    priority: 400,
                    transclude: "element",
                    compile: function(c, f, h) {
                        return function(c, f, i) {
                            function j() {
                                l && (l.remove(), l = null), n && (n.$destroy(), n = null), m && (r.leave(m, function() {
                                    l = null
                                }), l = m, m = null)
                            }

                            function k(g) {
                                var k, l = A(c, i, f, e),
                                    s = l && a.$current && a.$current.locals[l];
                                if (g || s !== o) {
                                    k = c.$new(), o = a.$current.locals[l];
                                    var t = h(k, function(a) {
                                        r.enter(a, f, function() {
                                            n && n.$emit("$viewContentAnimationEnded"), (b.isDefined(q) && !q || c.$eval(q)) && d(a)
                                        }), j()
                                    });
                                    m = t, n = k, n.$emit("$viewContentLoaded"), n.$eval(p)
                                }
                            }
                            var l, m, n, o, p = i.onload || "",
                                q = i.autoscroll,
                                r = g(i, c);
                            c.$on("$stateChangeSuccess", function() {
                                k(!1)
                            }), c.$on("$viewContentLoading", function() {
                                k(!1)
                            }), k(!0)
                        }
                    }
                };
            return k
        }

        function z(a, b, c, d) {
            return {
                restrict: "ECA",
                priority: -400,
                compile: function(e) {
                    var f = e.html();
                    return function(e, g, h) {
                        var i = c.$current,
                            j = A(e, h, g, d),
                            k = i && i.locals[j];
                        if (k) {
                            g.data("$uiView", {
                                name: j,
                                state: k.$$state
                            }), g.html(k.$template ? k.$template : f);
                            var l = a(g.contents());
                            if (k.$$controller) {
                                k.$scope = e, k.$element = g;
                                var m = b(k.$$controller, k);
                                k.$$controllerAs && (e[k.$$controllerAs] = m), g.data("$ngControllerController", m), g.children().data("$ngControllerController", m)
                            }
                            l(e)
                        }
                    }
                }
            }
        }

        function A(a, b, c, d) {
            var e = d(b.uiView || b.name || "")(a),
                f = c.inheritedData("$uiView");
            return e.indexOf("@") >= 0 ? e : e + "@" + (f ? f.state.name : "")
        }

        function B(a, b) {
            var c, d = a.match(/^\s*({[^}]*})\s*$/);
            if (d && (a = b + "(" + d[1] + ")"), c = a.replace(/\n/g, " ").match(/^([^(]+?)\s*(\((.*)\))?$/), !c || 4 !== c.length) throw new Error("Invalid state ref '" + a + "'");
            return {
                state: c[1],
                paramExpr: c[3] || null
            }
        }

        function C(a) {
            var b = a.parent().inheritedData("$uiView");
            return b && b.state && b.state.name ? b.state : void 0
        }

        function D(a, c) {
            var d = ["location", "inherit", "reload", "absolute"];
            return {
                restrict: "A",
                require: ["?^uiSrefActive", "?^uiSrefActiveEq"],
                link: function(e, f, g, h) {
                    var i = B(g.uiSref, a.current.name),
                        j = null,
                        k = C(f) || a.$current,
                        l = "[object SVGAnimatedString]" === Object.prototype.toString.call(f.prop("href")) ? "xlink:href" : "href",
                        m = null,
                        n = "A" === f.prop("tagName").toUpperCase(),
                        o = "FORM" === f[0].nodeName,
                        p = o ? "action" : l,
                        q = !0,
                        r = {
                            relative: k,
                            inherit: !0
                        },
                        s = e.$eval(g.uiSrefOpts) || {};
                    b.forEach(d, function(a) {
                        a in s && (r[a] = s[a])
                    });
                    var t = function(c) {
                        if (c && (j = b.copy(c)), q) {
                            m = a.href(i.state, j, r);
                            var d = h[1] || h[0];
                            return d && d.$$addStateInfo(i.state, j), null === m ? (q = !1, !1) : void g.$set(p, m)
                        }
                    };
                    i.paramExpr && (e.$watch(i.paramExpr, function(a, b) {
                        a !== j && t(a)
                    }, !0), j = b.copy(e.$eval(i.paramExpr))), t(), o || f.bind("click", function(b) {
                        var d = b.which || b.button;
                        if (!(d > 1 || b.ctrlKey || b.metaKey || b.shiftKey || f.attr("target"))) {
                            var e = c(function() {
                                a.go(i.state, j, r)
                            });
                            b.preventDefault();
                            var g = n && !m ? 1 : 0;
                            b.preventDefault = function() {
                                g-- <= 0 && c.cancel(e)
                            }
                        }
                    })
                }
            }
        }

        function E(a, b, c) {
            return {
                restrict: "A",
                controller: ["$scope", "$element", "$attrs", function(b, d, e) {
                    function f() {
                        g() ? d.addClass(i) : d.removeClass(i)
                    }

                    function g() {
                        for (var a = 0; a < j.length; a++)
                            if (h(j[a].state, j[a].params)) return !0;
                        return !1
                    }

                    function h(b, c) {
                        return "undefined" != typeof e.uiSrefActiveEq ? a.is(b.name, c) : a.includes(b.name, c)
                    }
                    var i, j = [];
                    i = c(e.uiSrefActiveEq || e.uiSrefActive || "", !1)(b), this.$$addStateInfo = function(b, c) {
                        var e = a.get(b, C(d));
                        j.push({
                            state: e || {
                                name: b
                            },
                            params: c
                        }), f()
                    }, b.$on("$stateChangeSuccess", f)
                }]
            }
        }

        function F(a) {
            var b = function(b) {
                return a.is(b)
            };
            return b.$stateful = !0, b
        }

        function G(a) {
            var b = function(b) {
                return a.includes(b)
            };
            return b.$stateful = !0, b
        }
        var H = b.isDefined,
            I = b.isFunction,
            J = b.isString,
            K = b.isObject,
            L = b.isArray,
            M = b.forEach,
            N = b.extend,
            O = b.copy;
        b.module("ui.router.util", ["ng"]), b.module("ui.router.router", ["ui.router.util"]), b.module("ui.router.state", ["ui.router.router", "ui.router.util"]), b.module("ui.router", ["ui.router.state"]), b.module("ui.router.compat", ["ui.router"]), p.$inject = ["$q", "$injector"], b.module("ui.router.util").service("$resolve", p), q.$inject = ["$http", "$templateCache", "$injector"], b.module("ui.router.util").service("$templateFactory", q);
        var P;
        r.prototype.concat = function(a, b) {
            var c = {
                caseInsensitive: P.caseInsensitive(),
                strict: P.strictMode(),
                squash: P.defaultSquashPolicy()
            };
            return new r(this.sourcePath + a + this.sourceSearch, N(c, b), this)
        }, r.prototype.toString = function() {
            return this.source
        }, r.prototype.exec = function(a, b) {
            function c(a) {
                function b(a) {
                    return a.split("").reverse().join("")
                }

                function c(a) {
                    return a.replace(/\\-/g, "-")
                }
                var d = b(a).split(/-(?!\\)/),
                    e = o(d, b);
                return o(e, c).reverse()
            }
            var d = this.regexp.exec(a);
            if (!d) return null;
            b = b || {};
            var e, f, g, h = this.parameters(),
                i = h.length,
                j = this.segments.length - 1,
                k = {};
            if (j !== d.length - 1) throw new Error("Unbalanced capture group in route '" + this.source + "'");
            for (e = 0; j > e; e++) {
                g = h[e];
                var l = this.params[g],
                    m = d[e + 1];
                for (f = 0; f < l.replace; f++) l.replace[f].from === m && (m = l.replace[f].to);
                m && l.array === !0 && (m = c(m)), k[g] = l.value(m)
            }
            for (; i > e; e++) g = h[e], k[g] = this.params[g].value(b[g]);
            return k
        }, r.prototype.parameters = function(a) {
            return H(a) ? this.params[a] || null : this.$$paramNames
        }, r.prototype.validates = function(a) {
            return this.params.$$validates(a)
        }, r.prototype.format = function(a) {
            function b(a) {
                return encodeURIComponent(a).replace(/-/g, function(a) {
                    return "%5C%" + a.charCodeAt(0).toString(16).toUpperCase()
                })
            }
            a = a || {};
            var c = this.segments,
                d = this.parameters(),
                e = this.params;
            if (!this.validates(a)) return null;
            var f, g = !1,
                h = c.length - 1,
                i = d.length,
                j = c[0];
            for (f = 0; i > f; f++) {
                var k = h > f,
                    l = d[f],
                    m = e[l],
                    n = m.value(a[l]),
                    p = m.isOptional && m.type.equals(m.value(), n),
                    q = p ? m.squash : !1,
                    r = m.type.encode(n);
                if (k) {
                    var s = c[f + 1];
                    if (q === !1) null != r && (j += L(r) ? o(r, b).join("-") : encodeURIComponent(r)), j += s;
                    else if (q === !0) {
                        var t = j.match(/\/$/) ? /\/?(.*)/ : /(.*)/;
                        j += s.match(t)[1]
                    } else J(q) && (j += q + s)
                } else {
                    if (null == r || p && q !== !1) continue;
                    L(r) || (r = [r]), r = o(r, encodeURIComponent).join("&" + l + "="), j += (g ? "&" : "?") + (l + "=" + r), g = !0
                }
            }
            return j
        }, s.prototype.is = function(a, b) {
            return !0
        }, s.prototype.encode = function(a, b) {
            return a
        }, s.prototype.decode = function(a, b) {
            return a
        }, s.prototype.equals = function(a, b) {
            return a == b
        }, s.prototype.$subPattern = function() {
            var a = this.pattern.toString();
            return a.substr(1, a.length - 2)
        }, s.prototype.pattern = /.*/, s.prototype.toString = function() {
            return "{Type:" + this.name + "}"
        }, s.prototype.$normalize = function(a) {
            return this.is(a) ? a : this.decode(a)
        }, s.prototype.$asArray = function(a, b) {
            function d(a, b) {
                function d(a, b) {
                    return function() {
                        return a[b].apply(a, arguments)
                    }
                }

                function e(a) {
                    return L(a) ? a : H(a) ? [a] : []
                }

                function f(a) {
                    switch (a.length) {
                        case 0:
                            return c;
                        case 1:
                            return "auto" === b ? a[0] : a;
                        default:
                            return a
                    }
                }

                function g(a) {
                    return !a
                }

                function h(a, b) {
                    return function(c) {
                        c = e(c);
                        var d = o(c, a);
                        return b === !0 ? 0 === n(d, g).length : f(d)
                    }
                }

                function i(a) {
                    return function(b, c) {
                        var d = e(b),
                            f = e(c);
                        if (d.length !== f.length) return !1;
                        for (var g = 0; g < d.length; g++)
                            if (!a(d[g], f[g])) return !1;
                        return !0
                    }
                }
                this.encode = h(d(a, "encode")), this.decode = h(d(a, "decode")), this.is = h(d(a, "is"), !0), this.equals = i(d(a, "equals")), this.pattern = a.pattern, this.$normalize = h(d(a, "$normalize")), this.name = a.name, this.$arrayMode = b
            }
            if (!a) return this;
            if ("auto" === a && !b) throw new Error("'auto' array mode is for query parameters only");
            return new d(this, a)
        }, b.module("ui.router.util").provider("$urlMatcherFactory", t), b.module("ui.router.util").run(["$urlMatcherFactory", function(a) {}]), u.$inject = ["$locationProvider", "$urlMatcherFactoryProvider"], b.module("ui.router.router").provider("$urlRouter", u), v.$inject = ["$urlRouterProvider", "$urlMatcherFactoryProvider"], b.module("ui.router.state").value("$stateParams", {}).provider("$state", v), w.$inject = [], b.module("ui.router.state").provider("$view", w), b.module("ui.router.state").provider("$uiViewScroll", x), y.$inject = ["$state", "$injector", "$uiViewScroll", "$interpolate"], z.$inject = ["$compile", "$controller", "$state", "$interpolate"], b.module("ui.router.state").directive("uiView", y), b.module("ui.router.state").directive("uiView", z), D.$inject = ["$state", "$timeout"], E.$inject = ["$state", "$stateParams", "$interpolate"], b.module("ui.router.state").directive("uiSref", D).directive("uiSrefActive", E).directive("uiSrefActiveEq", E), F.$inject = ["$state"], G.$inject = ["$state"], b.module("ui.router.state").filter("isState", F).filter("includedByState", G)
    }(window, window.angular);
var Konva = {};
! function(a) {
    "use strict";
    var b = Math.PI / 180;
    Konva = {
        version: "0.10.0",
        stages: [],
        idCounter: 0,
        ids: {},
        names: {},
        shapes: {},
        listenClickTap: !1,
        inDblClickWindow: !1,
        enableTrace: !1,
        traceArrMax: 100,
        dblClickWindow: 400,
        pixelRatio: void 0,
        dragDistance: 0,
        angleDeg: !0,
        showWarnings: !0,
        Filters: {},
        isDragging: function() {
            var a = Konva.DD;
            return a ? a.isDragging : !1
        },
        isDragReady: function() {
            var a = Konva.DD;
            return a ? !!a.node : !1
        },
        _addId: function(a, b) {
            void 0 !== b && (this.ids[b] = a)
        },
        _removeId: function(a) {
            void 0 !== a && delete this.ids[a]
        },
        _addName: function(a, b) {
            b && (this.names[b] || (this.names[b] = []), this.names[b].push(a))
        },
        _removeName: function(a, b) {
            if (a) {
                var c = this.names[a];
                if (c) {
                    for (var d = 0; d < c.length; d++) {
                        var e = c[d];
                        e._id === b && c.splice(d, 1)
                    }
                    0 === c.length && delete this.names[a]
                }
            }
        },
        getAngle: function(a) {
            return this.angleDeg ? a * b : a
        },
        _parseUA: function(a) {
            var b = a.toLowerCase(),
                c = /(chrome)[ \/]([\w.]+)/.exec(b) || /(webkit)[ \/]([\w.]+)/.exec(b) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(b) || /(msie) ([\w.]+)/.exec(b) || b.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(b) || [],
                d = !!a.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i),
                e = !!a.match(/IEMobile/i);
            return {
                browser: c[1] || "",
                version: c[2] || "0",
                mobile: d,
                ieMobile: e
            }
        },
        UA: void 0
    }, Konva.UA = Konva._parseUA(a.navigator && a.navigator.userAgent || "")
}(this),
function(a, b) {
    "use strict";
    if ("object" == typeof exports) {
        var c = b();
        if (global.window && global.window.document) Konva.document = global.window.document, Konva.window = global.window;
        else {
            var d = require("canvas"),
                e = require("jsdom").jsdom;
            Konva.document = e("<!DOCTYPE html><html><head></head><body></body></html>"), Konva.window = Konva.document.parentWindow, Konva.window.Image = d.Image, Konva._nodeCanvas = d
        }
        return Konva.root = a, void(module.exports = c)
    }
    "function" == typeof define && define.amd && define(b), Konva.document = document, Konva.window = window, Konva.root = a
}(this, function() {
    "use strict";
    return Konva
}),
function() {
    "use strict";
    Konva.Collection = function() {
        var a = [].slice.call(arguments),
            b = a.length,
            c = 0;
        for (this.length = b; b > c; c++) this[c] = a[c];
        return this
    }, Konva.Collection.prototype = [], Konva.Collection.prototype.each = function(a) {
        for (var b = 0; b < this.length; b++) a(this[b], b)
    }, Konva.Collection.prototype.toArray = function() {
        var a, b = [],
            c = this.length;
        for (a = 0; c > a; a++) b.push(this[a]);
        return b
    }, Konva.Collection.toCollection = function(a) {
        var b, c = new Konva.Collection,
            d = a.length;
        for (b = 0; d > b; b++) c.push(a[b]);
        return c
    }, Konva.Collection._mapMethod = function(a) {
        Konva.Collection.prototype[a] = function() {
            var b, c = this.length,
                d = [].slice.call(arguments);
            for (b = 0; c > b; b++) this[b][a].apply(this[b], d);
            return this
        }
    }, Konva.Collection.mapMethods = function(a) {
        var b = a.prototype;
        for (var c in b) Konva.Collection._mapMethod(c)
    }, Konva.Transform = function(a) {
        this.m = a && a.slice() || [1, 0, 0, 1, 0, 0]
    }, Konva.Transform.prototype = {
        copy: function() {
            return new Konva.Transform(this.m)
        },
        point: function(a) {
            var b = this.m;
            return {
                x: b[0] * a.x + b[2] * a.y + b[4],
                y: b[1] * a.x + b[3] * a.y + b[5]
            }
        },
        translate: function(a, b) {
            return this.m[4] += this.m[0] * a + this.m[2] * b, this.m[5] += this.m[1] * a + this.m[3] * b, this
        },
        scale: function(a, b) {
            return this.m[0] *= a, this.m[1] *= a, this.m[2] *= b, this.m[3] *= b, this
        },
        rotate: function(a) {
            var b = Math.cos(a),
                c = Math.sin(a),
                d = this.m[0] * b + this.m[2] * c,
                e = this.m[1] * b + this.m[3] * c,
                f = this.m[0] * -c + this.m[2] * b,
                g = this.m[1] * -c + this.m[3] * b;
            return this.m[0] = d, this.m[1] = e, this.m[2] = f, this.m[3] = g, this
        },
        getTranslation: function() {
            return {
                x: this.m[4],
                y: this.m[5]
            }
        },
        skew: function(a, b) {
            var c = this.m[0] + this.m[2] * b,
                d = this.m[1] + this.m[3] * b,
                e = this.m[2] + this.m[0] * a,
                f = this.m[3] + this.m[1] * a;
            return this.m[0] = c, this.m[1] = d, this.m[2] = e, this.m[3] = f, this
        },
        multiply: function(a) {
            var b = this.m[0] * a.m[0] + this.m[2] * a.m[1],
                c = this.m[1] * a.m[0] + this.m[3] * a.m[1],
                d = this.m[0] * a.m[2] + this.m[2] * a.m[3],
                e = this.m[1] * a.m[2] + this.m[3] * a.m[3],
                f = this.m[0] * a.m[4] + this.m[2] * a.m[5] + this.m[4],
                g = this.m[1] * a.m[4] + this.m[3] * a.m[5] + this.m[5];
            return this.m[0] = b, this.m[1] = c, this.m[2] = d, this.m[3] = e, this.m[4] = f, this.m[5] = g, this
        },
        invert: function() {
            var a = 1 / (this.m[0] * this.m[3] - this.m[1] * this.m[2]),
                b = this.m[3] * a,
                c = -this.m[1] * a,
                d = -this.m[2] * a,
                e = this.m[0] * a,
                f = a * (this.m[2] * this.m[5] - this.m[3] * this.m[4]),
                g = a * (this.m[1] * this.m[4] - this.m[0] * this.m[5]);
            return this.m[0] = b, this.m[1] = c, this.m[2] = d, this.m[3] = e, this.m[4] = f, this.m[5] = g, this
        },
        getMatrix: function() {
            return this.m
        },
        setAbsolutePosition: function(a, b) {
            var c = this.m[0],
                d = this.m[1],
                e = this.m[2],
                f = this.m[3],
                g = this.m[4],
                h = this.m[5],
                i = (c * (b - h) - d * (a - g)) / (c * f - d * e),
                j = (a - g - e * i) / c;
            return this.translate(j, i)
        }
    };
    var a = "2d",
        b = "[object Array]",
        c = "[object Number]",
        d = "[object String]",
        e = Math.PI / 180,
        f = 180 / Math.PI,
        g = "#",
        h = "",
        i = "0",
        j = "Konva warning: ",
        k = "Konva error: ",
        l = "rgb(",
        m = {
            aliceblue: [240, 248, 255],
            antiquewhite: [250, 235, 215],
            aqua: [0, 255, 255],
            aquamarine: [127, 255, 212],
            azure: [240, 255, 255],
            beige: [245, 245, 220],
            bisque: [255, 228, 196],
            black: [0, 0, 0],
            blanchedalmond: [255, 235, 205],
            blue: [0, 0, 255],
            blueviolet: [138, 43, 226],
            brown: [165, 42, 42],
            burlywood: [222, 184, 135],
            cadetblue: [95, 158, 160],
            chartreuse: [127, 255, 0],
            chocolate: [210, 105, 30],
            coral: [255, 127, 80],
            cornflowerblue: [100, 149, 237],
            cornsilk: [255, 248, 220],
            crimson: [220, 20, 60],
            cyan: [0, 255, 255],
            darkblue: [0, 0, 139],
            darkcyan: [0, 139, 139],
            darkgoldenrod: [184, 132, 11],
            darkgray: [169, 169, 169],
            darkgreen: [0, 100, 0],
            darkgrey: [169, 169, 169],
            darkkhaki: [189, 183, 107],
            darkmagenta: [139, 0, 139],
            darkolivegreen: [85, 107, 47],
            darkorange: [255, 140, 0],
            darkorchid: [153, 50, 204],
            darkred: [139, 0, 0],
            darksalmon: [233, 150, 122],
            darkseagreen: [143, 188, 143],
            darkslateblue: [72, 61, 139],
            darkslategray: [47, 79, 79],
            darkslategrey: [47, 79, 79],
            darkturquoise: [0, 206, 209],
            darkviolet: [148, 0, 211],
            deeppink: [255, 20, 147],
            deepskyblue: [0, 191, 255],
            dimgray: [105, 105, 105],
            dimgrey: [105, 105, 105],
            dodgerblue: [30, 144, 255],
            firebrick: [178, 34, 34],
            floralwhite: [255, 255, 240],
            forestgreen: [34, 139, 34],
            fuchsia: [255, 0, 255],
            gainsboro: [220, 220, 220],
            ghostwhite: [248, 248, 255],
            gold: [255, 215, 0],
            goldenrod: [218, 165, 32],
            gray: [128, 128, 128],
            green: [0, 128, 0],
            greenyellow: [173, 255, 47],
            grey: [128, 128, 128],
            honeydew: [240, 255, 240],
            hotpink: [255, 105, 180],
            indianred: [205, 92, 92],
            indigo: [75, 0, 130],
            ivory: [255, 255, 240],
            khaki: [240, 230, 140],
            lavender: [230, 230, 250],
            lavenderblush: [255, 240, 245],
            lawngreen: [124, 252, 0],
            lemonchiffon: [255, 250, 205],
            lightblue: [173, 216, 230],
            lightcoral: [240, 128, 128],
            lightcyan: [224, 255, 255],
            lightgoldenrodyellow: [250, 250, 210],
            lightgray: [211, 211, 211],
            lightgreen: [144, 238, 144],
            lightgrey: [211, 211, 211],
            lightpink: [255, 182, 193],
            lightsalmon: [255, 160, 122],
            lightseagreen: [32, 178, 170],
            lightskyblue: [135, 206, 250],
            lightslategray: [119, 136, 153],
            lightslategrey: [119, 136, 153],
            lightsteelblue: [176, 196, 222],
            lightyellow: [255, 255, 224],
            lime: [0, 255, 0],
            limegreen: [50, 205, 50],
            linen: [250, 240, 230],
            magenta: [255, 0, 255],
            maroon: [128, 0, 0],
            mediumaquamarine: [102, 205, 170],
            mediumblue: [0, 0, 205],
            mediumorchid: [186, 85, 211],
            mediumpurple: [147, 112, 219],
            mediumseagreen: [60, 179, 113],
            mediumslateblue: [123, 104, 238],
            mediumspringgreen: [0, 250, 154],
            mediumturquoise: [72, 209, 204],
            mediumvioletred: [199, 21, 133],
            midnightblue: [25, 25, 112],
            mintcream: [245, 255, 250],
            mistyrose: [255, 228, 225],
            moccasin: [255, 228, 181],
            navajowhite: [255, 222, 173],
            navy: [0, 0, 128],
            oldlace: [253, 245, 230],
            olive: [128, 128, 0],
            olivedrab: [107, 142, 35],
            orange: [255, 165, 0],
            orangered: [255, 69, 0],
            orchid: [218, 112, 214],
            palegoldenrod: [238, 232, 170],
            palegreen: [152, 251, 152],
            paleturquoise: [175, 238, 238],
            palevioletred: [219, 112, 147],
            papayawhip: [255, 239, 213],
            peachpuff: [255, 218, 185],
            peru: [205, 133, 63],
            pink: [255, 192, 203],
            plum: [221, 160, 203],
            powderblue: [176, 224, 230],
            purple: [128, 0, 128],
            rebeccapurple: [102, 51, 153],
            red: [255, 0, 0],
            rosybrown: [188, 143, 143],
            royalblue: [65, 105, 225],
            saddlebrown: [139, 69, 19],
            salmon: [250, 128, 114],
            sandybrown: [244, 164, 96],
            seagreen: [46, 139, 87],
            seashell: [255, 245, 238],
            sienna: [160, 82, 45],
            silver: [192, 192, 192],
            skyblue: [135, 206, 235],
            slateblue: [106, 90, 205],
            slategray: [119, 128, 144],
            slategrey: [119, 128, 144],
            snow: [255, 255, 250],
            springgreen: [0, 255, 127],
            steelblue: [70, 130, 180],
            tan: [210, 180, 140],
            teal: [0, 128, 128],
            thistle: [216, 191, 216],
            transparent: [255, 255, 255, 0],
            tomato: [255, 99, 71],
            turquoise: [64, 224, 208],
            violet: [238, 130, 238],
            wheat: [245, 222, 179],
            white: [255, 255, 255],
            whitesmoke: [245, 245, 245],
            yellow: [255, 255, 0],
            yellowgreen: [154, 205, 5]
        },
        n = /rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/;
    Konva.Util = {
        _isElement: function(a) {
            return !(!a || 1 != a.nodeType)
        },
        _isFunction: function(a) {
            return !!(a && a.constructor && a.call && a.apply)
        },
        _isObject: function(a) {
            return !!a && a.constructor === Object
        },
        _isArray: function(a) {
            return Object.prototype.toString.call(a) === b
        },
        _isNumber: function(a) {
            return Object.prototype.toString.call(a) === c
        },
        _isString: function(a) {
            return Object.prototype.toString.call(a) === d
        },
        _throttle: function(a, b, c) {
            var d, e, f, g = null,
                h = 0,
                i = c || {},
                j = function() {
                    h = i.leading === !1 ? 0 : (new Date).getTime(), g = null, f = a.apply(d, e), d = e = null
                };
            return function() {
                var c = (new Date).getTime();
                h || i.leading !== !1 || (h = c);
                var k = b - (c - h);
                return d = this, e = arguments, 0 >= k ? (clearTimeout(g), g = null, h = c, f = a.apply(d, e), d = e = null) : g || i.trailing === !1 || (g = setTimeout(j, k)), f
            }
        },
        _hasMethods: function(a) {
            var b, c = [];
            for (b in a) a.hasOwnProperty(b) && this._isFunction(a[b]) && c.push(b);
            return c.length > 0
        },
        createCanvasElement: function() {
            var a = Konva.document.createElement("canvas");
            try {
                a.style = a.style || {}
            } catch (b) {}
            return a
        },
        isBrowser: function() {
            return "object" != typeof exports
        },
        _isInDocument: function(a) {
            for (; a = a.parentNode;)
                if (a == Konva.document) return !0;
            return !1
        },
        _simplifyArray: function(a) {
            var b, c, d = [],
                e = a.length,
                f = Konva.Util;
            for (b = 0; e > b; b++) c = a[b], f._isNumber(c) ? c = Math.round(1e3 * c) / 1e3 : f._isString(c) || (c = c.toString()), d.push(c);
            return d
        },
        _getImage: function(b, c) {
            var d, e;
            if (b)
                if (this._isElement(b)) c(b);
                else if (this._isString(b)) d = new Konva.window.Image, d.onload = function() {
                c(d)
            }, d.src = b;
            else if (b.data) {
                e = Konva.Util.createCanvasElement(), e.width = b.width, e.height = b.height;
                var f = e.getContext(a);
                f.putImageData(b, 0, 0), this._getImage(e.toDataURL(), c)
            } else c(null);
            else c(null)
        },
        _getRGBAString: function(a) {
            var b = a.red || 0,
                c = a.green || 0,
                d = a.blue || 0,
                e = a.alpha || 1;
            return ["rgba(", b, ",", c, ",", d, ",", e, ")"].join(h)
        },
        _rgbToHex: function(a, b, c) {
            return ((1 << 24) + (a << 16) + (b << 8) + c).toString(16).slice(1)
        },
        _hexToRgb: function(a) {
            a = a.replace(g, h);
            var b = parseInt(a, 16);
            return {
                r: b >> 16 & 255,
                g: b >> 8 & 255,
                b: 255 & b
            }
        },
        getRandomColor: function() {
            for (var a = (16777215 * Math.random() << 0).toString(16); a.length < 6;) a = i + a;
            return g + a
        },
        get: function(a, b) {
            return void 0 === a ? b : a
        },
        getRGB: function(a) {
            var b;
            return a in m ? (b = m[a], {
                r: b[0],
                g: b[1],
                b: b[2]
            }) : a[0] === g ? this._hexToRgb(a.substring(1)) : a.substr(0, 4) === l ? (b = n.exec(a.replace(/ /g, "")), {
                r: parseInt(b[1], 10),
                g: parseInt(b[2], 10),
                b: parseInt(b[3], 10)
            }) : {
                r: 0,
                g: 0,
                b: 0
            }
        },
        colorToRGBA: function(a) {
            return a = a || "black", Konva.Util._namedColorToRBA(a) || Konva.Util._hex3ColorToRGBA(a) || Konva.Util._hex6ColorToRGBA(a) || Konva.Util._rgbColorToRGBA(a) || Konva.Util._rgbaColorToRGBA(a)
        },
        _namedColorToRBA: function(a) {
            var b = m[a.toLowerCase()];
            return b ? {
                r: b[0],
                g: b[1],
                b: b[2],
                a: 1
            } : null
        },
        _rgbColorToRGBA: function(a) {
            if (0 === a.indexOf("rgb(")) {
                a = a.match(/rgb\(([^)]+)\)/)[1];
                var b = a.split(/ *, */).map(Number);
                return {
                    r: b[0],
                    g: b[1],
                    b: b[2],
                    a: 1
                }
            }
        },
        _rgbaColorToRGBA: function(a) {
            if (0 === a.indexOf("rgba(")) {
                a = a.match(/rgba\(([^)]+)\)/)[1];
                var b = a.split(/ *, */).map(Number);
                return {
                    r: b[0],
                    g: b[1],
                    b: b[2],
                    a: b[3]
                }
            }
        },
        _hex6ColorToRGBA: function(a) {
            return "#" === a[0] && 7 === a.length ? {
                r: parseInt(a.slice(1, 3), 16),
                g: parseInt(a.slice(3, 5), 16),
                b: parseInt(a.slice(5, 7), 16),
                a: 1
            } : void 0
        },
        _hex3ColorToRGBA: function(a) {
            return "#" === a[0] && 4 === a.length ? {
                r: parseInt(a[1] + a[1], 16),
                g: parseInt(a[2] + a[2], 16),
                b: parseInt(a[3] + a[3], 16),
                a: 1
            } : void 0
        },
        _merge: function(a, b) {
            var c = this._clone(b);
            for (var d in a) this._isObject(a[d]) ? c[d] = this._merge(a[d], c[d]) : c[d] = a[d];
            return c
        },
        cloneObject: function(a) {
            var b = {};
            for (var c in a) this._isObject(a[c]) ? b[c] = this.cloneObject(a[c]) : this._isArray(a[c]) ? b[c] = this.cloneArray(a[c]) : b[c] = a[c];
            return b
        },
        cloneArray: function(a) {
            return a.slice(0)
        },
        _degToRad: function(a) {
            return a * e
        },
        _radToDeg: function(a) {
            return a * f
        },
        _capitalize: function(a) {
            return a.charAt(0).toUpperCase() + a.slice(1)
        },
        "throw": function(a) {
            throw new Error(k + a)
        },
        error: function(a) {
            console.error(k + a)
        },
        warn: function(a) {
            Konva.root.console && console.warn && Konva.showWarnings && console.warn(j + a)
        },
        extend: function(a, b) {
            function c() {
                this.constructor = a
            }
            c.prototype = b.prototype;
            var d = a.prototype;
            a.prototype = new c;
            for (var e in d) d.hasOwnProperty(e) && (a.prototype[e] = d[e]);
            a.__super__ = b.prototype, a["super"] = b
        },
        addMethods: function(a, b) {
            var c;
            for (c in b) a.prototype[c] = b[c]
        },
        _getControlPoints: function(a, b, c, d, e, f, g) {
            var h = Math.sqrt(Math.pow(c - a, 2) + Math.pow(d - b, 2)),
                i = Math.sqrt(Math.pow(e - c, 2) + Math.pow(f - d, 2)),
                j = g * h / (h + i),
                k = g * i / (h + i),
                l = c - j * (e - a),
                m = d - j * (f - b),
                n = c + k * (e - a),
                o = d + k * (f - b);
            return [l, m, n, o]
        },
        _expandPoints: function(a, b) {
            var c, d, e = a.length,
                f = [];
            for (c = 2; e - 2 > c; c += 2) d = Konva.Util._getControlPoints(a[c - 2], a[c - 1], a[c], a[c + 1], a[c + 2], a[c + 3], b), f.push(d[0]), f.push(d[1]), f.push(a[c]), f.push(a[c + 1]), f.push(d[2]), f.push(d[3]);
            return f
        },
        _removeLastLetter: function(a) {
            return a.substring(0, a.length - 1)
        },
        each: function(a, b) {
            for (var c in a) b(c, a[c])
        },
        _getProjectionToSegment: function(a, b, c, d, e, f) {
            var g, h, i, j = (a - c) * (a - c) + (b - d) * (b - d);
            if (0 == j) g = a, h = b, i = (e - c) * (e - c) + (f - d) * (f - d);
            else {
                var k = ((e - a) * (c - a) + (f - b) * (d - b)) / j;
                0 > k ? (g = a, h = b, i = (a - e) * (a - e) + (b - f) * (b - f)) : k > 1 ? (g = c, h = d, i = (c - e) * (c - e) + (d - f) * (d - f)) : (g = a + k * (c - a), h = b + k * (d - b), i = (g - e) * (g - e) + (h - f) * (h - f))
            }
            return [g, h, i]
        },
        _getProjectionToLine: function(a, b, c) {
            var d = Konva.Util.cloneObject(a),
                e = Number.MAX_VALUE;
            return b.forEach(function(f, g) {
                if (c || g !== b.length - 1) {
                    var h = b[(g + 1) % b.length],
                        i = Konva.Util._getProjectionToSegment(f.x, f.y, h.x, h.y, a.x, a.y),
                        j = i[0],
                        k = i[1],
                        l = i[2];
                    e > l && (d.x = j, d.y = k, e = l)
                }
            }), d
        },
        _prepareArrayForTween: function(a, b, c) {
            var d, e = [],
                f = [];
            if (a.length > b.length) {
                var g = b;
                b = a, a = g
            }
            for (d = 0; d < a.length; d += 2) e.push({
                x: a[d],
                y: a[d + 1]
            });
            for (d = 0; d < b.length; d += 2) f.push({
                x: b[d],
                y: b[d + 1]
            });
            var h = [];
            return f.forEach(function(a) {
                var b = Konva.Util._getProjectionToLine(a, e, c);
                h.push(b.x), h.push(b.y)
            }), h
        }
    }
}(),
function() {
    "use strict";
    var a = Konva.Util.createCanvasElement(),
        b = a.getContext("2d"),
        c = function() {
            var a = Konva.window.devicePixelRatio || 1,
                c = b.webkitBackingStorePixelRatio || b.mozBackingStorePixelRatio || b.msBackingStorePixelRatio || b.oBackingStorePixelRatio || b.backingStorePixelRatio || 1;
            return a / c
        }();
    Konva.Canvas = function(a) {
        this.init(a)
    }, Konva.Canvas.prototype = {
        init: function(a) {
            var b = a || {},
                d = b.pixelRatio || Konva.pixelRatio || c;
            this.pixelRatio = d, this._canvas = Konva.Util.createCanvasElement(), this._canvas.style.padding = 0, this._canvas.style.margin = 0, this._canvas.style.border = 0, this._canvas.style.background = "transparent", this._canvas.style.position = "absolute", this._canvas.style.top = 0, this._canvas.style.left = 0
        },
        getContext: function() {
            return this.context
        },
        getPixelRatio: function() {
            return this.pixelRatio
        },
        setPixelRatio: function(a) {
            var b = this.pixelRatio;
            this.pixelRatio = a, this.setSize(this.getWidth() / b, this.getHeight() / b)
        },
        setWidth: function(a) {
            this.width = this._canvas.width = a * this.pixelRatio, this._canvas.style.width = a + "px";
            var b = this.pixelRatio,
                c = this.getContext()._context;
            c.scale(b, b)
        },
        setHeight: function(a) {
            this.height = this._canvas.height = a * this.pixelRatio, this._canvas.style.height = a + "px";
            var b = this.pixelRatio,
                c = this.getContext()._context;
            c.scale(b, b)
        },
        getWidth: function() {
            return this.width
        },
        getHeight: function() {
            return this.height
        },
        setSize: function(a, b) {
            this.setWidth(a), this.setHeight(b)
        },
        toDataURL: function(a, b) {
            try {
                return this._canvas.toDataURL(a, b)
            } catch (c) {
                try {
                    return this._canvas.toDataURL()
                } catch (d) {
                    return Konva.Util.warn("Unable to get data URL. " + d.message), ""
                }
            }
        }
    }, Konva.SceneCanvas = function(a) {
        var b = a || {},
            c = b.width || 0,
            d = b.height || 0;
        Konva.Canvas.call(this, b), this.context = new Konva.SceneContext(this), this.setSize(c, d)
    }, Konva.Util.extend(Konva.SceneCanvas, Konva.Canvas), Konva.HitCanvas = function(a) {
        var b = a || {},
            c = b.width || 0,
            d = b.height || 0;
        Konva.Canvas.call(this, b), this.context = new Konva.HitContext(this), this.setSize(c, d), this.hitCanvas = !0
    }, Konva.Util.extend(Konva.HitCanvas, Konva.Canvas)
}(),
function() {
    "use strict";
    var a = ",",
        b = "(",
        c = ")",
        d = "([",
        e = "])",
        f = ";",
        g = "()",
        h = "=",
        i = ["arc", "arcTo", "beginPath", "bezierCurveTo", "clearRect", "clip", "closePath", "createLinearGradient", "createPattern", "createRadialGradient", "drawImage", "fill", "fillText", "getImageData", "createImageData", "lineTo", "moveTo", "putImageData", "quadraticCurveTo", "rect", "restore", "rotate", "save", "scale", "setLineDash", "setTransform", "stroke", "strokeText", "transform", "translate"],
        j = ["fillStyle", "strokeStyle", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "lineCap", "lineJoin", "lineWidth", "miterLimit", "font", "textAlign", "textBaseline", "globalAlpha", "globalCompositeOperation"];
    Konva.Context = function(a) {
        this.init(a)
    }, Konva.Context.prototype = {
        init: function(a) {
            this.canvas = a, this._context = a._canvas.getContext("2d"), Konva.enableTrace && (this.traceArr = [], this._enableTrace())
        },
        fillShape: function(a) {
            a.getFillEnabled() && this._fill(a)
        },
        strokeShape: function(a) {
            a.getStrokeEnabled() && this._stroke(a)
        },
        fillStrokeShape: function(a) {
            var b = a.getFillEnabled();
            b && this._fill(a), a.getStrokeEnabled() && this._stroke(a)
        },
        getTrace: function(i) {
            var j, k, l, m, n = this.traceArr,
                o = n.length,
                p = "";
            for (j = 0; o > j; j++) k = n[j], l = k.method, l ? (m = k.args, p += l, p += i ? g : Konva.Util._isArray(m[0]) ? d + m.join(a) + e : b + m.join(a) + c) : (p += k.property, i || (p += h + k.val)), p += f;
            return p
        },
        clearTrace: function() {
            this.traceArr = []
        },
        _trace: function(a) {
            var b, c = this.traceArr;
            c.push(a), b = c.length, b >= Konva.traceArrMax && c.shift()
        },
        reset: function() {
            var a = this.getCanvas().getPixelRatio();
            this.setTransform(1 * a, 0, 0, 1 * a, 0, 0)
        },
        getCanvas: function() {
            return this.canvas
        },
        clear: function(a) {
            var b = this.getCanvas();
            a ? this.clearRect(a.x || 0, a.y || 0, a.width || 0, a.height || 0) : this.clearRect(0, 0, b.getWidth() / b.pixelRatio, b.getHeight() / b.pixelRatio)
        },
        _applyLineCap: function(a) {
            var b = a.getLineCap();
            b && this.setAttr("lineCap", b)
        },
        _applyOpacity: function(a) {
            var b = a.getAbsoluteOpacity();
            1 !== b && this.setAttr("globalAlpha", b)
        },
        _applyLineJoin: function(a) {
            var b = a.getLineJoin();
            b && this.setAttr("lineJoin", b)
        },
        setAttr: function(a, b) {
            this._context[a] = b
        },
        arc: function() {
            var a = arguments;
            this._context.arc(a[0], a[1], a[2], a[3], a[4], a[5])
        },
        beginPath: function() {
            this._context.beginPath()
        },
        bezierCurveTo: function() {
            var a = arguments;
            this._context.bezierCurveTo(a[0], a[1], a[2], a[3], a[4], a[5])
        },
        clearRect: function() {
            var a = arguments;
            this._context.clearRect(a[0], a[1], a[2], a[3])
        },
        clip: function() {
            this._context.clip()
        },
        closePath: function() {
            this._context.closePath()
        },
        createImageData: function() {
            var a = arguments;
            return 2 === a.length ? this._context.createImageData(a[0], a[1]) : 1 === a.length ? this._context.createImageData(a[0]) : void 0
        },
        createLinearGradient: function() {
            var a = arguments;
            return this._context.createLinearGradient(a[0], a[1], a[2], a[3])
        },
        createPattern: function() {
            var a = arguments;
            return this._context.createPattern(a[0], a[1])
        },
        createRadialGradient: function() {
            var a = arguments;
            return this._context.createRadialGradient(a[0], a[1], a[2], a[3], a[4], a[5])
        },
        drawImage: function() {
            var a = arguments,
                b = this._context;
            3 === a.length ? b.drawImage(a[0], a[1], a[2]) : 5 === a.length ? b.drawImage(a[0], a[1], a[2], a[3], a[4]) : 9 === a.length && b.drawImage(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8])
        },
        isPointInPath: function(a, b) {
            return this._context.isPointInPath(a, b)
        },
        fill: function() {
            this._context.fill()
        },
        fillRect: function(a, b, c, d) {
            this._context.fillRect(a, b, c, d)
        },
        strokeRect: function(a, b, c, d) {
            this._context.strokeRect(a, b, c, d)
        },
        fillText: function() {
            var a = arguments;
            this._context.fillText(a[0], a[1], a[2])
        },
        measureText: function(a) {
            return this._context.measureText(a)
        },
        getImageData: function() {
            var a = arguments;
            return this._context.getImageData(a[0], a[1], a[2], a[3])
        },
        lineTo: function() {
            var a = arguments;
            this._context.lineTo(a[0], a[1])
        },
        moveTo: function() {
            var a = arguments;
            this._context.moveTo(a[0], a[1])
        },
        rect: function() {
            var a = arguments;
            this._context.rect(a[0], a[1], a[2], a[3])
        },
        putImageData: function() {
            var a = arguments;
            this._context.putImageData(a[0], a[1], a[2])
        },
        quadraticCurveTo: function() {
            var a = arguments;
            this._context.quadraticCurveTo(a[0], a[1], a[2], a[3])
        },
        restore: function() {
            this._context.restore()
        },
        rotate: function() {
            var a = arguments;
            this._context.rotate(a[0])
        },
        save: function() {
            this._context.save()
        },
        scale: function() {
            var a = arguments;
            this._context.scale(a[0], a[1])
        },
        setLineDash: function() {
            var a = arguments,
                b = this._context;
            this._context.setLineDash ? b.setLineDash(a[0]) : "mozDash" in b ? b.mozDash = a[0] : "webkitLineDash" in b && (b.webkitLineDash = a[0])
        },
        getLineDash: function() {
            return this._context.getLineDash()
        },
        setTransform: function() {
            var a = arguments;
            this._context.setTransform(a[0], a[1], a[2], a[3], a[4], a[5])
        },
        stroke: function() {
            this._context.stroke()
        },
        strokeText: function() {
            var a = arguments;
            this._context.strokeText(a[0], a[1], a[2])
        },
        transform: function() {
            var a = arguments;
            this._context.transform(a[0], a[1], a[2], a[3], a[4], a[5])
        },
        translate: function() {
            var a = arguments;
            this._context.translate(a[0], a[1])
        },
        _enableTrace: function() {
            var a, b, c = this,
                d = i.length,
                e = Konva.Util._simplifyArray,
                f = this.setAttr,
                g = function(a) {
                    var d, f = c[a];
                    c[a] = function() {
                        return b = e(Array.prototype.slice.call(arguments, 0)), d = f.apply(c, arguments), "clearRect" === a && (b[2] = b[2] / c.canvas.getPixelRatio(), b[3] = b[3] / c.canvas.getPixelRatio()), c._trace({
                            method: a,
                            args: b
                        }), d
                    }
                };
            for (a = 0; d > a; a++) g(i[a]);
            c.setAttr = function() {
                f.apply(c, arguments), c._trace({
                    property: arguments[0],
                    val: arguments[1]
                })
            }
        }
    }, j.forEach(function(a) {
        Object.defineProperty(Konva.Context.prototype, a, {
            get: function() {
                return this._context[a]
            },
            set: function(b) {
                this._context[a] = b
            }
        })
    }), Konva.SceneContext = function(a) {
        Konva.Context.call(this, a)
    }, Konva.SceneContext.prototype = {
        _fillColor: function(a) {
            var b = a.fill();
            this.setAttr("fillStyle", b), a._fillFunc(this)
        },
        _fillPattern: function(a) {
            var b = a.getFillPatternX(),
                c = a.getFillPatternY(),
                d = a.getFillPatternScale(),
                e = Konva.getAngle(a.getFillPatternRotation()),
                f = a.getFillPatternOffset();
            (b || c) && this.translate(b || 0, c || 0), e && this.rotate(e), d && this.scale(d.x, d.y), f && this.translate(-1 * f.x, -1 * f.y), this.setAttr("fillStyle", this.createPattern(a.getFillPatternImage(), a.getFillPatternRepeat() || "repeat")), this.fill()
        },
        _fillLinearGradient: function(a) {
            var b = a.getFillLinearGradientStartPoint(),
                c = a.getFillLinearGradientEndPoint(),
                d = a.getFillLinearGradientColorStops(),
                e = this.createLinearGradient(b.x, b.y, c.x, c.y);
            if (d) {
                for (var f = 0; f < d.length; f += 2) e.addColorStop(d[f], d[f + 1]);
                this.setAttr("fillStyle", e), a._fillFunc(this)
            }
        },
        _fillRadialGradient: function(a) {
            for (var b = a.getFillRadialGradientStartPoint(), c = a.getFillRadialGradientEndPoint(), d = a.getFillRadialGradientStartRadius(), e = a.getFillRadialGradientEndRadius(), f = a.getFillRadialGradientColorStops(), g = this.createRadialGradient(b.x, b.y, d, c.x, c.y, e), h = 0; h < f.length; h += 2) g.addColorStop(f[h], f[h + 1]);
            this.setAttr("fillStyle", g), this.fill()
        },
        _fill: function(a) {
            var b = a.fill(),
                c = a.getFillPatternImage(),
                d = a.getFillLinearGradientColorStops(),
                e = a.getFillRadialGradientColorStops(),
                f = a.getFillPriority();
            b && "color" === f ? this._fillColor(a) : c && "pattern" === f ? this._fillPattern(a) : d && "linear-gradient" === f ? this._fillLinearGradient(a) : e && "radial-gradient" === f ? this._fillRadialGradient(a) : b ? this._fillColor(a) : c ? this._fillPattern(a) : d ? this._fillLinearGradient(a) : e && this._fillRadialGradient(a)
        },
        _stroke: function(a) {
            var b = a.dash(),
                c = a.getStrokeScaleEnabled() || a instanceof Konva.Text;
            a.hasStroke() && (c || (this.save(), this.setTransform(1, 0, 0, 1, 0, 0)), this._applyLineCap(a), b && a.dashEnabled() && this.setLineDash(b), this.setAttr("lineWidth", a.strokeWidth()), this.setAttr("strokeStyle", a.stroke()), a.getShadowForStrokeEnabled() || this.setAttr("shadowColor", "rgba(0,0,0,0)"), a._strokeFunc(this), c || this.restore())
        },
        _applyShadow: function(a) {
            var b = Konva.Util,
                c = b.get(a.getShadowRGBA(), "black"),
                d = b.get(a.getShadowBlur(), 5),
                e = b.get(a.getShadowOffset(), {
                    x: 0,
                    y: 0
                }),
                f = a.getAbsoluteTransform().m,
                g = f[0],
                h = f[3];
            this.setAttr("shadowColor", c), this.setAttr("shadowBlur", d), this.setAttr("shadowOffsetX", e.x * g), this.setAttr("shadowOffsetY", e.y * h)
        }
    }, Konva.Util.extend(Konva.SceneContext, Konva.Context), Konva.HitContext = function(a) {
        Konva.Context.call(this, a)
    }, Konva.HitContext.prototype = {
        _fill: function(a) {
            this.save(), this.setAttr("fillStyle", a.colorKey), a._fillFuncHit(this), this.restore()
        },
        _stroke: function(a) {
            if (a.hasStroke() && a.strokeHitEnabled()) {
                var b = a.getStrokeScaleEnabled() || a instanceof Konva.Text;
                b || (this.save(), this.setTransform(1, 0, 0, 1, 0, 0)), this._applyLineCap(a), this.setAttr("lineWidth", a.strokeWidth()), this.setAttr("strokeStyle", a.colorKey), a._strokeFuncHit(this), b || this.restore()
            }
        }
    }, Konva.Util.extend(Konva.HitContext, Konva.Context)
}(),
function() {
    "use strict";
    var a = "get",
        b = "set";
    Konva.Factory = {
        addGetterSetter: function(a, b, c, d, e) {
            this.addGetter(a, b, c), this.addSetter(a, b, d, e), this.addOverloadedGetterSetter(a, b)
        },
        addGetter: function(b, c, d) {
            var e = a + Konva.Util._capitalize(c);
            b.prototype[e] = function() {
                var a = this.attrs[c];
                return void 0 === a ? d : a
            }
        },
        addSetter: function(a, c, d, e) {
            var f = b + Konva.Util._capitalize(c);
            a.prototype[f] = function(a) {
                return d && (a = d.call(this, a)), this._setAttr(c, a), e && e.call(this), this
            }
        },
        addComponentsGetterSetter: function(c, d, e, f, g) {
            var h, i, j = e.length,
                k = Konva.Util._capitalize,
                l = a + k(d),
                m = b + k(d);
            c.prototype[l] = function() {
                var a = {};
                for (h = 0; j > h; h++) i = e[h], a[i] = this.getAttr(d + k(i));
                return a
            }, c.prototype[m] = function(a) {
                var b, c = this.attrs[d];
                f && (a = f.call(this, a));
                for (b in a) a.hasOwnProperty(b) && this._setAttr(d + k(b), a[b]);
                return this._fireChangeEvent(d, c, a), g && g.call(this), this
            }, this.addOverloadedGetterSetter(c, d)
        },
        addOverloadedGetterSetter: function(c, d) {
            var e = Konva.Util._capitalize(d),
                f = b + e,
                g = a + e;
            c.prototype[d] = function() {
                return arguments.length ? (this[f](arguments[0]), this) : this[g]()
            }
        },
        addDeprecatedGetterSetter: function(b, c, d, e) {
            var f = a + Konva.Util._capitalize(c),
                g = c + " property is deprecated and will be removed soon. Look at Konva change log for more information.";
            b.prototype[f] = function() {
                Konva.Util.error(g);
                var a = this.attrs[c];
                return void 0 === a ? d : a
            }, this.addSetter(b, c, e, function() {
                Konva.Util.error(g)
            }), this.addOverloadedGetterSetter(b, c)
        },
        backCompat: function(a, b) {
            Konva.Util.each(b, function(b, c) {
                var d = a.prototype[c];
                a.prototype[b] = function() {
                    d.apply(this, arguments), Konva.Util.error(b + " method is deprecated and will be removed soon. Use " + c + " instead")
                }
            })
        },
        afterSetFilter: function() {
            this._filterUpToDate = !1
        }
    }, Konva.Validators = {
        RGBComponent: function(a) {
            return a > 255 ? 255 : 0 > a ? 0 : Math.round(a)
        },
        alphaComponent: function(a) {
            return a > 1 ? 1 : 1e-4 > a ? 1e-4 : a
        }
    }
}(),
function(a) {
    "use strict";
    var b = "absoluteOpacity",
        c = "absoluteTransform",
        d = "Change",
        e = "children",
        f = ".",
        g = "",
        h = "get",
        i = "id",
        j = "konva",
        k = "listening",
        l = "mouseenter",
        m = "mouseleave",
        n = "name",
        o = "set",
        p = "Shape",
        q = " ",
        r = "stage",
        s = "transform",
        t = "Stage",
        u = "visible",
        v = ["id"],
        w = ["xChange.konva", "yChange.konva", "scaleXChange.konva", "scaleYChange.konva", "skewXChange.konva", "skewYChange.konva", "rotationChange.konva", "offsetXChange.konva", "offsetYChange.konva", "transformsEnabledChange.konva"].join(q);
    a.Node = function(a) {
        this._init(a)
    }, a.Util.addMethods(a.Node, {
        _init: function(d) {
            var e = this;
            this._id = a.idCounter++, this.eventListeners = {}, this.attrs = {}, this._cache = {}, this._filterUpToDate = !1, this.setAttrs(d), this.on(w, function() {
                this._clearCache(s), e._clearSelfAndDescendantCache(c)
            }), this.on("visibleChange.konva", function() {
                e._clearSelfAndDescendantCache(u)
            }), this.on("listeningChange.konva", function() {
                e._clearSelfAndDescendantCache(k)
            }), this.on("opacityChange.konva", function() {
                e._clearSelfAndDescendantCache(b)
            })
        },
        _clearCache: function(a) {
            a ? delete this._cache[a] : this._cache = {}
        },
        _getCache: function(a, b) {
            var c = this._cache[a];
            return void 0 === c && (this._cache[a] = b.call(this)), this._cache[a]
        },
        _clearSelfAndDescendantCache: function(a) {
            this._clearCache(a), this.children && this.getChildren().each(function(b) {
                b._clearSelfAndDescendantCache(a)
            })
        },
        clearCache: function() {
            return delete this._cache.canvas, this._filterUpToDate = !1, this
        },
        cache: function(b) {
            var c = b || {},
                d = this.getClientRect(!0),
                e = c.width || d.width,
                f = c.height || d.height,
                g = c.x || d.x,
                h = c.y || d.y,
                i = c.offset || 0,
                j = c.drawBorder || !1;
            if (!e || !f) throw new Error("Width or height of caching configuration equals 0.");
            e += 2 * i, f += 2 * i, g -= i, h -= i;
            var k = new a.SceneCanvas({
                    width: e,
                    height: f
                }),
                l = new a.SceneCanvas({
                    width: e,
                    height: f
                }),
                m = new a.HitCanvas({
                    pixelRatio: 1,
                    width: e,
                    height: f
                }),
                n = k.getContext(),
                o = m.getContext();
            return m.isCache = !0, this.clearCache(), n.save(), o.save(), n.translate(-g, -h), o.translate(-g, -h), this.drawScene(k, this, !0), this.drawHit(m, this, !0), n.restore(), o.restore(), j && (n.save(), n.beginPath(), n.rect(0, 0, e, f), n.closePath(), n.setAttr("strokeStyle", "red"), n.setAttr("lineWidth", 5), n.stroke(), n.restore()), this._cache.canvas = {
                scene: k,
                filter: l,
                hit: m,
                x: g,
                y: h
            }, this
        },
        getClientRect: function() {
            throw new Error('abstract "getClientRect" method call')
        },
        _transformedRect: function(a) {
            var b, c, d, e, f = [{
                    x: a.x,
                    y: a.y
                }, {
                    x: a.x + a.width,
                    y: a.y
                }, {
                    x: a.x + a.width,
                    y: a.y + a.height
                }, {
                    x: a.x,
                    y: a.y + a.height
                }],
                g = this.getTransform();
            return f.forEach(function(a) {
                var f = g.point(a);
                void 0 === b && (b = d = f.x, c = e = f.y), b = Math.min(b, f.x), c = Math.min(c, f.y), d = Math.max(d, f.x), e = Math.max(e, f.y)
            }), {
                x: Math.round(b),
                y: Math.round(c),
                width: Math.round(d - b),
                height: Math.round(e - c)
            }
        },
        _drawCachedSceneCanvas: function(a) {
            a.save(), a._applyOpacity(this), a.translate(this._cache.canvas.x, this._cache.canvas.y);
            var b = this._getCachedSceneCanvas(),
                c = b.pixelRatio;
            a.drawImage(b._canvas, 0, 0, b.width / c, b.height / c), a.restore()
        },
        _drawCachedHitCanvas: function(a) {
            var b = this._cache.canvas,
                c = b.hit;
            a.save(), a.translate(this._cache.canvas.x, this._cache.canvas.y), a.drawImage(c._canvas, 0, 0), a.restore()
        },
        _getCachedSceneCanvas: function() {
            var b, c, d, e, f = this.filters(),
                g = this._cache.canvas,
                h = g.scene,
                i = g.filter,
                j = i.getContext();
            if (f) {
                if (!this._filterUpToDate) {
                    var k = h.pixelRatio;
                    try {
                        for (b = f.length, j.clear(), j.drawImage(h._canvas, 0, 0, h.getWidth() / k, h.getHeight() / k), c = j.getImageData(0, 0, i.getWidth(), i.getHeight()), d = 0; b > d; d++) e = f[d], e.call(this, c), j.putImageData(c, 0, 0)
                    } catch (l) {
                        a.Util.warn("Unable to apply filter. " + l.message)
                    }
                    this._filterUpToDate = !0
                }
                return i
            }
            return h
        },
        on: function(a, b) {
            var c, d, e, h, i, j = a.split(q),
                k = j.length;
            for (c = 0; k > c; c++) d = j[c], e = d.split(f), h = e[0], i = e[1] || g, this.eventListeners[h] || (this.eventListeners[h] = []), this.eventListeners[h].push({
                name: i,
                handler: b
            });
            return this
        },
        off: function(a) {
            var b, c, d, e, g, h, i = (a || "").split(q),
                j = i.length;
            if (!a)
                for (c in this.eventListeners) this._off(c);
            for (b = 0; j > b; b++)
                if (d = i[b], e = d.split(f), g = e[0], h = e[1], g) this.eventListeners[g] && this._off(g, h);
                else
                    for (c in this.eventListeners) this._off(c, h);
            return this
        },
        dispatchEvent: function(a) {
            var b = {
                target: this,
                type: a.type,
                evt: a
            };
            this.fire(a.type, b)
        },
        addEventListener: function(a, b) {
            this.on(a, function(a) {
                b.call(this, a.evt)
            })
        },
        removeEventListener: function(a) {
            this.off(a)
        },
        remove: function() {
            var a = this.getParent();
            return a && a.children && (a.children.splice(this.index, 1), a._setChildrenIndices(), delete this.parent), this._clearSelfAndDescendantCache(r), this._clearSelfAndDescendantCache(c), this._clearSelfAndDescendantCache(u), this._clearSelfAndDescendantCache(k), this._clearSelfAndDescendantCache(b), this
        },
        destroy: function() {
            a._removeId(this.getId()), a._removeName(this.getName(), this._id), this.remove()
        },
        getAttr: function(b) {
            var c = h + a.Util._capitalize(b);
            return a.Util._isFunction(this[c]) ? this[c]() : this.attrs[b]
        },
        getAncestors: function() {
            for (var b = this.getParent(), c = new a.Collection; b;) c.push(b), b = b.getParent();
            return c
        },
        getAttrs: function() {
            return this.attrs || {}
        },
        setAttrs: function(b) {
            var c, d;
            if (!b) return this;
            for (c in b) c !== e && (d = o + a.Util._capitalize(c), a.Util._isFunction(this[d]) ? this[d](b[c]) : this._setAttr(c, b[c]));
            return this
        },
        isListening: function() {
            return this._getCache(k, this._isListening)
        },
        _isListening: function() {
            var a = this.getListening(),
                b = this.getParent();
            return "inherit" === a ? b ? b.isListening() : !0 : a
        },
        isVisible: function() {
            return this._getCache(u, this._isVisible)
        },
        _isVisible: function() {
            var a = this.getVisible(),
                b = this.getParent();
            return "inherit" === a ? b ? b.isVisible() : !0 : a
        },
        shouldDrawHit: function(a) {
            var b = this.getLayer();
            return a && a.isCache || b && b.hitGraphEnabled() && this.isListening() && this.isVisible()
        },
        show: function() {
            return this.setVisible(!0), this
        },
        hide: function() {
            return this.setVisible(!1), this
        },
        getZIndex: function() {
            return this.index || 0
        },
        getAbsoluteZIndex: function() {
            function a(i) {
                for (b = [], c = i.length, d = 0; c > d; d++) e = i[d], h++, e.nodeType !== p && (b = b.concat(e.getChildren().toArray())), e._id === g._id && (d = c);
                b.length > 0 && b[0].getDepth() <= f && a(b)
            }
            var b, c, d, e, f = this.getDepth(),
                g = this,
                h = 0;
            return g.nodeType !== t && a(g.getStage().getChildren()), h
        },
        getDepth: function() {
            for (var a = 0, b = this.parent; b;) a++, b = b.parent;
            return a
        },
        setPosition: function(a) {
            return this.setX(a.x), this.setY(a.y), this
        },
        getPosition: function() {
            return {
                x: this.getX(),
                y: this.getY()
            }
        },
        getAbsolutePosition: function() {
            var b = this.getAbsoluteTransform().getMatrix(),
                c = new a.Transform,
                d = this.offset();
            return c.m = b.slice(), c.translate(d.x, d.y), c.getTranslation()
        },
        setAbsolutePosition: function(a) {
            var b, c = this._clearTransform();
            return this.attrs.x = c.x, this.attrs.y = c.y, delete c.x, delete c.y, b = this.getAbsoluteTransform(), b.invert(), b.translate(a.x, a.y), a = {
                x: this.attrs.x + b.getTranslation().x,
                y: this.attrs.y + b.getTranslation().y
            }, this.setPosition({
                x: a.x,
                y: a.y
            }), this._setTransform(c), this
        },
        _setTransform: function(a) {
            var b;
            for (b in a) this.attrs[b] = a[b];
            this._clearCache(s), this._clearSelfAndDescendantCache(c)
        },
        _clearTransform: function() {
            var a = {
                x: this.getX(),
                y: this.getY(),
                rotation: this.getRotation(),
                scaleX: this.getScaleX(),
                scaleY: this.getScaleY(),
                offsetX: this.getOffsetX(),
                offsetY: this.getOffsetY(),
                skewX: this.getSkewX(),
                skewY: this.getSkewY()
            };
            return this.attrs.x = 0, this.attrs.y = 0, this.attrs.rotation = 0, this.attrs.scaleX = 1, this.attrs.scaleY = 1, this.attrs.offsetX = 0, this.attrs.offsetY = 0, this.attrs.skewX = 0, this.attrs.skewY = 0, this._clearCache(s), this._clearSelfAndDescendantCache(c), a
        },
        move: function(a) {
            var b = a.x,
                c = a.y,
                d = this.getX(),
                e = this.getY();
            return void 0 !== b && (d += b), void 0 !== c && (e += c), this.setPosition({
                x: d,
                y: e
            }), this
        },
        _eachAncestorReverse: function(a, b) {
            var c, d, e = [],
                f = this.getParent();
            if (b && b._id === this._id) return a(this), !0;
            for (e.unshift(this); f && (!b || f._id !== b._id);) e.unshift(f), f = f.parent;
            for (c = e.length, d = 0; c > d; d++) a(e[d])
        },
        rotate: function(a) {
            return this.setRotation(this.getRotation() + a), this
        },
        moveToTop: function() {
            if (!this.parent) return a.Util.warn("Node has no parent. moveToTop function is ignored."), !1;
            var b = this.index;
            return this.parent.children.splice(b, 1), this.parent.children.push(this), this.parent._setChildrenIndices(), !0
        },
        moveUp: function() {
            if (!this.parent) return a.Util.warn("Node has no parent. moveUp function is ignored."), !1;
            var b = this.index,
                c = this.parent.getChildren().length;
            return c - 1 > b ? (this.parent.children.splice(b, 1), this.parent.children.splice(b + 1, 0, this), this.parent._setChildrenIndices(), !0) : !1
        },
        moveDown: function() {
            if (!this.parent) return a.Util.warn("Node has no parent. moveDown function is ignored."), !1;
            var b = this.index;
            return b > 0 ? (this.parent.children.splice(b, 1), this.parent.children.splice(b - 1, 0, this), this.parent._setChildrenIndices(), !0) : !1
        },
        moveToBottom: function() {
            if (!this.parent) return a.Util.warn("Node has no parent. moveToBottom function is ignored."), !1;
            var b = this.index;
            return b > 0 ? (this.parent.children.splice(b, 1), this.parent.children.unshift(this), this.parent._setChildrenIndices(), !0) : !1
        },
        setZIndex: function(b) {
            if (!this.parent) return a.Util.warn("Node has no parent. zIndex parameter is ignored."), !1;
            var c = this.index;
            return this.parent.children.splice(c, 1), this.parent.children.splice(b, 0, this), this.parent._setChildrenIndices(), this
        },
        getAbsoluteOpacity: function() {
            return this._getCache(b, this._getAbsoluteOpacity)
        },
        _getAbsoluteOpacity: function() {
            var a = this.getOpacity();
            return this.getParent() && (a *= this.getParent().getAbsoluteOpacity()), a
        },
        moveTo: function(a) {
            return this.getParent() !== a && (this.remove(), a.add(this)), this
        },
        toObject: function() {
            var b, c, d, e, f = {},
                g = this.getAttrs();
            f.attrs = {};
            for (b in g) c = g[b], a.Util._isFunction(c) || a.Util._isElement(c) || a.Util._isObject(c) || a.Util._hasMethods(c) || (d = this[b], delete g[b], e = d ? d.call(this) : null, g[b] = c, e !== c && (f.attrs[b] = c));
            return f.className = this.getClassName(), f
        },
        toJSON: function() {
            return JSON.stringify(this.toObject())
        },
        getParent: function() {
            return this.parent
        },
        getLayer: function() {
            var a = this.getParent();
            return a ? a.getLayer() : null
        },
        getStage: function() {
            return this._getCache(r, this._getStage)
        },
        _getStage: function() {
            var a = this.getParent();
            return a ? a.getStage() : void 0
        },
        fire: function(a, b, c) {
            return c ? this._fireAndBubble(a, b || {}) : this._fire(a, b || {}), this
        },
        getAbsoluteTransform: function(a) {
            return a ? this._getAbsoluteTransform(a) : this._getCache(c, this._getAbsoluteTransform)
        },
        _getAbsoluteTransform: function(b) {
            var c, d, e = new a.Transform;
            return this._eachAncestorReverse(function(a) {
                c = a.transformsEnabled(), d = a.getTransform(), "all" === c ? e.multiply(d) : "position" === c && e.translate(a.x(), a.y())
            }, b), e
        },
        getTransform: function() {
            return this._getCache(s, this._getTransform)
        },
        _getTransform: function() {
            var b = new a.Transform,
                c = this.getX(),
                d = this.getY(),
                e = a.getAngle(this.getRotation()),
                f = this.getScaleX(),
                g = this.getScaleY(),
                h = this.getSkewX(),
                i = this.getSkewY(),
                j = this.getOffsetX(),
                k = this.getOffsetY();
            return (0 !== c || 0 !== d) && b.translate(c, d), 0 !== e && b.rotate(e), (0 !== h || 0 !== i) && b.skew(h, i), (1 !== f || 1 !== g) && b.scale(f, g), (0 !== j || 0 !== k) && b.translate(-1 * j, -1 * k), b
        },
        clone: function(b) {
            var c, d, e, f, g, h = a.Util.cloneObject(this.attrs);
            for (var i in v) {
                var k = v[i];
                delete h[k]
            }
            for (c in b) h[c] = b[c];
            var l = new this.constructor(h);
            for (c in this.eventListeners)
                for (d = this.eventListeners[c], e = d.length, f = 0; e > f; f++) g = d[f], g.name.indexOf(j) < 0 && (l.eventListeners[c] || (l.eventListeners[c] = []), l.eventListeners[c].push(g));
            return l
        },
        toDataURL: function(b) {
            b = b || {};
            var c = b.mimeType || null,
                d = b.quality || null,
                e = this.getStage(),
                f = b.x || 0,
                g = b.y || 0,
                h = b.pixelRatio || 1,
                i = new a.SceneCanvas({
                    width: b.width || this.getWidth() || (e ? e.getWidth() : 0),
                    height: b.height || this.getHeight() || (e ? e.getHeight() : 0),
                    pixelRatio: h
                }),
                j = i.getContext();
            return j.save(), (f || g) && j.translate(-1 * f, -1 * g), this.drawScene(i), j.restore(), i.toDataURL(c, d)
        },
        toImage: function(b) {
            if (!b || !b.callback) throw "callback required for toImage method config argument";
            a.Util._getImage(this.toDataURL(b), function(a) {
                b.callback(a)
            })
        },
        setSize: function(a) {
            return this.setWidth(a.width), this.setHeight(a.height), this
        },
        getSize: function() {
            return {
                width: this.getWidth(),
                height: this.getHeight()
            }
        },
        getWidth: function() {
            return this.attrs.width || 0
        },
        getHeight: function() {
            return this.attrs.height || 0
        },
        getClassName: function() {
            return this.className || this.nodeType
        },
        getType: function() {
            return this.nodeType
        },
        getDragDistance: function() {
            return void 0 !== this.attrs.dragDistance ? this.attrs.dragDistance : this.parent ? this.parent.getDragDistance() : a.dragDistance
        },
        _get: function(a) {
            return this.className === a || this.nodeType === a ? [this] : []
        },
        _off: function(a, b) {
            var c, d, e = this.eventListeners[a];
            for (c = 0; c < e.length; c++)
                if (d = e[c].name, !("konva" === d && "konva" !== b || b && d !== b)) {
                    if (e.splice(c, 1), 0 === e.length) {
                        delete this.eventListeners[a];
                        break
                    }
                    c--
                }
        },
        _fireChangeEvent: function(a, b, c) {
            this._fire(a + d, {
                oldVal: b,
                newVal: c
            })
        },
        setId: function(b) {
            var c = this.getId();
            return a._removeId(c), a._addId(this, b), this._setAttr(i, b), this
        },
        setName: function(b) {
            var c, d, e = (this.getName() || "").split(/\s/g),
                f = (b || "").split(/\s/g);
            for (d = 0; d < e.length; d++) c = e[d], -1 === f.indexOf(c) && c && a._removeName(c, this._id);
            for (d = 0; d < f.length; d++) c = f[d], -1 === e.indexOf(c) && c && a._addName(this, c);
            return this._setAttr(n, b), this
        },
        addName: function(a) {
            if (!this.hasName(a)) {
                var b = this.name(),
                    c = b ? b + " " + a : a;
                this.setName(c)
            }
            return this
        },
        hasName: function(a) {
            var b = (this.name() || "").split(/\s/g);
            return -1 !== b.indexOf(a)
        },
        removeName: function(a) {
            var b = (this.name() || "").split(/\s/g),
                c = b.indexOf(a); - 1 !== c && (b.splice(c, 1), this.setName(b.join(" ")))
        },
        setAttr: function(b, c) {
            var d = o + a.Util._capitalize(b),
                e = this[d];
            return a.Util._isFunction(e) ? e.call(this, c) : this._setAttr(b, c), this
        },
        _setAttr: function(a, b) {
            var c;
            void 0 !== b && (c = this.attrs[a], this.attrs[a] = b, this._fireChangeEvent(a, c, b))
        },
        _setComponentAttr: function(a, b, c) {
            var d;
            void 0 !== c && (d = this.attrs[a], d || (this.attrs[a] = this.getAttr(a)), this.attrs[a][b] = c, this._fireChangeEvent(a, d, c))
        },
        _fireAndBubble: function(a, b, c) {
            var d = !0;
            if (b && this.nodeType === p && (b.target = this), a === l && c && (this._id === c._id || this.isAncestorOf && this.isAncestorOf(c)) ? d = !1 : a === m && c && (this._id === c._id || this.isAncestorOf && this.isAncestorOf(c)) && (d = !1), d) {
                this._fire(a, b);
                var e = (a === l || a === m) && (c && c.isAncestorOf && c.isAncestorOf(this) || !(!c || !c.isAncestorOf));
                b && !b.cancelBubble && this.parent && this.parent.isListening() && !e && (c && c.parent ? this._fireAndBubble.call(this.parent, a, b, c.parent) : this._fireAndBubble.call(this.parent, a, b))
            }
        },
        _fire: function(a, b) {
            var c, d = this.eventListeners[a];
            if (b.type = a, d)
                for (c = 0; c < d.length; c++) d[c].handler.call(this, b)
        },
        draw: function() {
            return this.drawScene(), this.drawHit(), this
        }
    }), a.Node.create = function(b, c) {
        return a.Util._isString(b) && (b = JSON.parse(b)), this._createNode(b, c)
    }, a.Node._createNode = function(b, c) {
        var d, e, f, g = a.Node.prototype.getClassName.call(b),
            h = b.children;
        if (c && (b.attrs.container = c), d = new a[g](b.attrs), h)
            for (e = h.length, f = 0; e > f; f++) d.add(this._createNode(h[f]));
        return d
    }, a.Factory.addOverloadedGetterSetter(a.Node, "position"), a.Factory.addGetterSetter(a.Node, "x", 0), a.Factory.addGetterSetter(a.Node, "y", 0), a.Factory.addGetterSetter(a.Node, "opacity", 1), a.Factory.addGetter(a.Node, "name"), a.Factory.addOverloadedGetterSetter(a.Node, "name"), a.Factory.addGetter(a.Node, "id"), a.Factory.addOverloadedGetterSetter(a.Node, "id"), a.Factory.addGetterSetter(a.Node, "rotation", 0), a.Factory.addComponentsGetterSetter(a.Node, "scale", ["x", "y"]), a.Factory.addGetterSetter(a.Node, "scaleX", 1), a.Factory.addGetterSetter(a.Node, "scaleY", 1), a.Factory.addComponentsGetterSetter(a.Node, "skew", ["x", "y"]), a.Factory.addGetterSetter(a.Node, "skewX", 0), a.Factory.addGetterSetter(a.Node, "skewY", 0), a.Factory.addComponentsGetterSetter(a.Node, "offset", ["x", "y"]), a.Factory.addGetterSetter(a.Node, "offsetX", 0), a.Factory.addGetterSetter(a.Node, "offsetY", 0), a.Factory.addSetter(a.Node, "dragDistance"), a.Factory.addOverloadedGetterSetter(a.Node, "dragDistance"), a.Factory.addSetter(a.Node, "width", 0), a.Factory.addOverloadedGetterSetter(a.Node, "width"), a.Factory.addSetter(a.Node, "height", 0), a.Factory.addOverloadedGetterSetter(a.Node, "height"), a.Factory.addGetterSetter(a.Node, "listening", "inherit"), a.Factory.addGetterSetter(a.Node, "filters", void 0, function(a) {
        return this._filterUpToDate = !1, a
    }), a.Factory.addGetterSetter(a.Node, "visible", "inherit"), a.Factory.addGetterSetter(a.Node, "transformsEnabled", "all"), a.Factory.addOverloadedGetterSetter(a.Node, "size"), a.Factory.backCompat(a.Node, {
        rotateDeg: "rotate",
        setRotationDeg: "setRotation",
        getRotationDeg: "getRotation"
    }), a.Collection.mapMethods(a.Node)
}(Konva),
function() {
    "use strict";
    Konva.Filters.Grayscale = function(a) {
        var b, c, d = a.data,
            e = d.length;
        for (b = 0; e > b; b += 4) c = .34 * d[b] + .5 * d[b + 1] + .16 * d[b + 2], d[b] = c, d[b + 1] = c, d[b + 2] = c
    }
}(),
function() {
    "use strict";
    Konva.Filters.Brighten = function(a) {
        var b, c = 255 * this.brightness(),
            d = a.data,
            e = d.length;
        for (b = 0; e > b; b += 4) d[b] += c, d[b + 1] += c, d[b + 2] += c
    }, Konva.Factory.addGetterSetter(Konva.Node, "brightness", 0, null, Konva.Factory.afterSetFilter)
}(),
function() {
    "use strict";
    Konva.Filters.Invert = function(a) {
        var b, c = a.data,
            d = c.length;
        for (b = 0; d > b; b += 4) c[b] = 255 - c[b], c[b + 1] = 255 - c[b + 1], c[b + 2] = 255 - c[b + 2]
    }
}(),
function() {
    "use strict";

    function a() {
        this.r = 0, this.g = 0, this.b = 0, this.a = 0, this.next = null
    }

    function b(b, e) {
        var f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D = b.data,
            E = b.width,
            F = b.height,
            G = e + e + 1,
            H = E - 1,
            I = F - 1,
            J = e + 1,
            K = J * (J + 1) / 2,
            L = new a,
            M = null,
            N = L,
            O = null,
            P = null,
            Q = c[e],
            R = d[e];
        for (h = 1; G > h; h++) N = N.next = new a, h === J && (M = N);
        for (N.next = L, l = k = 0, g = 0; F > g; g++) {
            for (u = v = w = x = m = n = o = p = 0, q = J * (y = D[k]), r = J * (z = D[k + 1]), s = J * (A = D[k + 2]), t = J * (B = D[k + 3]), m += K * y, n += K * z, o += K * A, p += K * B, N = L, h = 0; J > h; h++) N.r = y, N.g = z, N.b = A, N.a = B, N = N.next;
            for (h = 1; J > h; h++) i = k + ((h > H ? H : h) << 2), m += (N.r = y = D[i]) * (C = J - h), n += (N.g = z = D[i + 1]) * C, o += (N.b = A = D[i + 2]) * C, p += (N.a = B = D[i + 3]) * C, u += y, v += z, w += A, x += B, N = N.next;
            for (O = L, P = M, f = 0; E > f; f++) D[k + 3] = B = p * Q >> R, 0 !== B ? (B = 255 / B, D[k] = (m * Q >> R) * B, D[k + 1] = (n * Q >> R) * B, D[k + 2] = (o * Q >> R) * B) : D[k] = D[k + 1] = D[k + 2] = 0, m -= q, n -= r, o -= s, p -= t, q -= O.r, r -= O.g, s -= O.b, t -= O.a, i = l + ((i = f + e + 1) < H ? i : H) << 2, u += O.r = D[i], v += O.g = D[i + 1], w += O.b = D[i + 2], x += O.a = D[i + 3], m += u, n += v, o += w, p += x, O = O.next, q += y = P.r, r += z = P.g, s += A = P.b, t += B = P.a, u -= y, v -= z, w -= A, x -= B, P = P.next, k += 4;
            l += E
        }
        for (f = 0; E > f; f++) {
            for (v = w = x = u = n = o = p = m = 0, k = f << 2, q = J * (y = D[k]), r = J * (z = D[k + 1]), s = J * (A = D[k + 2]), t = J * (B = D[k + 3]), m += K * y, n += K * z, o += K * A, p += K * B, N = L, h = 0; J > h; h++) N.r = y, N.g = z, N.b = A, N.a = B, N = N.next;
            for (j = E, h = 1; e >= h; h++) k = j + f << 2, m += (N.r = y = D[k]) * (C = J - h), n += (N.g = z = D[k + 1]) * C, o += (N.b = A = D[k + 2]) * C, p += (N.a = B = D[k + 3]) * C, u += y, v += z, w += A, x += B, N = N.next, I > h && (j += E);
            for (k = f, O = L, P = M, g = 0; F > g; g++) i = k << 2, D[i + 3] = B = p * Q >> R, B > 0 ? (B = 255 / B, D[i] = (m * Q >> R) * B, D[i + 1] = (n * Q >> R) * B, D[i + 2] = (o * Q >> R) * B) : D[i] = D[i + 1] = D[i + 2] = 0, m -= q, n -= r, o -= s, p -= t, q -= O.r, r -= O.g, s -= O.b, t -= O.a, i = f + ((i = g + J) < I ? i : I) * E << 2, m += u += O.r = D[i], n += v += O.g = D[i + 1], o += w += O.b = D[i + 2], p += x += O.a = D[i + 3], O = O.next, q += y = P.r, r += z = P.g, s += A = P.b, t += B = P.a, u -= y, v -= z, w -= A, x -= B, P = P.next, k += E
        }
    }
    var c = [512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259],
        d = [9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24];
    Konva.Filters.Blur = function(a) {
        var c = Math.round(this.blurRadius());
        c > 0 && b(a, c)
    }, Konva.Factory.addGetterSetter(Konva.Node, "blurRadius", 0, null, Konva.Factory.afterSetFilter)
}(),
function() {
    "use strict";

    function a(a, b, c) {
        var d = 4 * (c * a.width + b),
            e = [];
        return e.push(a.data[d++], a.data[d++], a.data[d++], a.data[d++]), e
    }

    function b(a, b) {
        return Math.sqrt(Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2) + Math.pow(a[2] - b[2], 2))
    }

    function c(a) {
        for (var b = [0, 0, 0], c = 0; c < a.length; c++) b[0] += a[c][0], b[1] += a[c][1], b[2] += a[c][2];
        return b[0] /= a.length, b[1] /= a.length, b[2] /= a.length, b
    }

    function d(d, e) {
        var f = a(d, 0, 0),
            g = a(d, d.width - 1, 0),
            h = a(d, 0, d.height - 1),
            i = a(d, d.width - 1, d.height - 1),
            j = e || 10;
        if (b(f, g) < j && b(g, i) < j && b(i, h) < j && b(h, f) < j) {
            for (var k = c([g, f, i, h]), l = [], m = 0; m < d.width * d.height; m++) {
                var n = b(k, [d.data[4 * m], d.data[4 * m + 1], d.data[4 * m + 2]]);
                l[m] = j > n ? 0 : 255
            }
            return l
        }
    }

    function e(a, b) {
        for (var c = 0; c < a.width * a.height; c++) a.data[4 * c + 3] = b[c]
    }

    function f(a, b, c) {
        for (var d = [1, 1, 1, 1, 0, 1, 1, 1, 1], e = Math.round(Math.sqrt(d.length)), f = Math.floor(e / 2), g = [], h = 0; c > h; h++)
            for (var i = 0; b > i; i++) {
                for (var j = h * b + i, k = 0, l = 0; e > l; l++)
                    for (var m = 0; e > m; m++) {
                        var n = h + l - f,
                            o = i + m - f;
                        if (n >= 0 && c > n && o >= 0 && b > o) {
                            var p = n * b + o,
                                q = d[l * e + m];
                            k += a[p] * q
                        }
                    }
                g[j] = 2040 === k ? 255 : 0
            }
        return g
    }

    function g(a, b, c) {
        for (var d = [1, 1, 1, 1, 1, 1, 1, 1, 1], e = Math.round(Math.sqrt(d.length)), f = Math.floor(e / 2), g = [], h = 0; c > h; h++)
            for (var i = 0; b > i; i++) {
                for (var j = h * b + i, k = 0, l = 0; e > l; l++)
                    for (var m = 0; e > m; m++) {
                        var n = h + l - f,
                            o = i + m - f;
                        if (n >= 0 && c > n && o >= 0 && b > o) {
                            var p = n * b + o,
                                q = d[l * e + m];
                            k += a[p] * q
                        }
                    }
                g[j] = k >= 1020 ? 255 : 0
            }
        return g
    }

    function h(a, b, c) {
        for (var d = [1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9], e = Math.round(Math.sqrt(d.length)), f = Math.floor(e / 2), g = [], h = 0; c > h; h++)
            for (var i = 0; b > i; i++) {
                for (var j = h * b + i, k = 0, l = 0; e > l; l++)
                    for (var m = 0; e > m; m++) {
                        var n = h + l - f,
                            o = i + m - f;
                        if (n >= 0 && c > n && o >= 0 && b > o) {
                            var p = n * b + o,
                                q = d[l * e + m];
                            k += a[p] * q
                        }
                    }
                g[j] = k
            }
        return g
    }
    Konva.Filters.Mask = function(a) {
        var b = this.threshold(),
            c = d(a, b);
        return c && (c = f(c, a.width, a.height), c = g(c, a.width, a.height), c = h(c, a.width, a.height), e(a, c)), a
    }, Konva.Factory.addGetterSetter(Konva.Node, "threshold", 0, null, Konva.Factory.afterSetFilter)
}(),
function() {
    "use strict";
    Konva.Filters.RGB = function(a) {
        var b, c, d = a.data,
            e = d.length,
            f = this.red(),
            g = this.green(),
            h = this.blue();
        for (b = 0; e > b; b += 4) c = (.34 * d[b] + .5 * d[b + 1] + .16 * d[b + 2]) / 255, d[b] = c * f, d[b + 1] = c * g, d[b + 2] = c * h, d[b + 3] = d[b + 3]
    }, Konva.Factory.addGetterSetter(Konva.Node, "red", 0, function(a) {
        return this._filterUpToDate = !1, a > 255 ? 255 : 0 > a ? 0 : Math.round(a)
    }), Konva.Factory.addGetterSetter(Konva.Node, "green", 0, function(a) {
        return this._filterUpToDate = !1, a > 255 ? 255 : 0 > a ? 0 : Math.round(a)
    }), Konva.Factory.addGetterSetter(Konva.Node, "blue", 0, Konva.Validators.RGBComponent, Konva.Factory.afterSetFilter)
}(),
function() {
    "use strict";
    Konva.Filters.RGBA = function(a) {
        var b, c, d = a.data,
            e = d.length,
            f = this.red(),
            g = this.green(),
            h = this.blue(),
            i = this.alpha();
        for (b = 0; e > b; b += 4) c = 1 - i, d[b] = f * i + d[b] * c, d[b + 1] = g * i + d[b + 1] * c, d[b + 2] = h * i + d[b + 2] * c
    }, Konva.Factory.addGetterSetter(Konva.Node, "red", 0, function(a) {
        return this._filterUpToDate = !1, a > 255 ? 255 : 0 > a ? 0 : Math.round(a)
    }), Konva.Factory.addGetterSetter(Konva.Node, "green", 0, function(a) {
        return this._filterUpToDate = !1, a > 255 ? 255 : 0 > a ? 0 : Math.round(a)
    }), Konva.Factory.addGetterSetter(Konva.Node, "blue", 0, Konva.Validators.RGBComponent, Konva.Factory.afterSetFilter), Konva.Factory.addGetterSetter(Konva.Node, "alpha", 1, function(a) {
        return this._filterUpToDate = !1, a > 1 ? 1 : 0 > a ? 0 : a
    })
}(),
function() {
    "use strict";
    Konva.Filters.HSV = function(a) {
        var b, c, d, e, f, g = a.data,
            h = g.length,
            i = Math.pow(2, this.value()),
            j = Math.pow(2, this.saturation()),
            k = Math.abs(this.hue() + 360) % 360,
            l = i * j * Math.cos(k * Math.PI / 180),
            m = i * j * Math.sin(k * Math.PI / 180),
            n = .299 * i + .701 * l + .167 * m,
            o = .587 * i - .587 * l + .33 * m,
            p = .114 * i - .114 * l - .497 * m,
            q = .299 * i - .299 * l - .328 * m,
            r = .587 * i + .413 * l + .035 * m,
            s = .114 * i - .114 * l + .293 * m,
            t = .299 * i - .3 * l + 1.25 * m,
            u = .587 * i - .586 * l - 1.05 * m,
            v = .114 * i + .886 * l - .2 * m;
        for (b = 0; h > b; b += 4) c = g[b + 0], d = g[b + 1], e = g[b + 2], f = g[b + 3], g[b + 0] = n * c + o * d + p * e, g[b + 1] = q * c + r * d + s * e, g[b + 2] = t * c + u * d + v * e, g[b + 3] = f
    }, Konva.Factory.addGetterSetter(Konva.Node, "hue", 0, null, Konva.Factory.afterSetFilter), Konva.Factory.addGetterSetter(Konva.Node, "saturation", 0, null, Konva.Factory.afterSetFilter), Konva.Factory.addGetterSetter(Konva.Node, "value", 0, null, Konva.Factory.afterSetFilter)
}(),
function() {
    "use strict";
    Konva.Factory.addGetterSetter(Konva.Node, "hue", 0, null, Konva.Factory.afterSetFilter), Konva.Factory.addGetterSetter(Konva.Node, "saturation", 0, null, Konva.Factory.afterSetFilter), Konva.Factory.addGetterSetter(Konva.Node, "luminance", 0, null, Konva.Factory.afterSetFilter), Konva.Filters.HSL = function(a) {
        var b, c, d, e, f, g = a.data,
            h = g.length,
            i = 1,
            j = Math.pow(2, this.saturation()),
            k = Math.abs(this.hue() + 360) % 360,
            l = 127 * this.luminance(),
            m = i * j * Math.cos(k * Math.PI / 180),
            n = i * j * Math.sin(k * Math.PI / 180),
            o = .299 * i + .701 * m + .167 * n,
            p = .587 * i - .587 * m + .33 * n,
            q = .114 * i - .114 * m - .497 * n,
            r = .299 * i - .299 * m - .328 * n,
            s = .587 * i + .413 * m + .035 * n,
            t = .114 * i - .114 * m + .293 * n,
            u = .299 * i - .3 * m + 1.25 * n,
            v = .587 * i - .586 * m - 1.05 * n,
            w = .114 * i + .886 * m - .2 * n;
        for (b = 0; h > b; b += 4) c = g[b + 0], d = g[b + 1], e = g[b + 2], f = g[b + 3], g[b + 0] = o * c + p * d + q * e + l, g[b + 1] = r * c + s * d + t * e + l, g[b + 2] = u * c + v * d + w * e + l, g[b + 3] = f
    }
}(),
function() {
    "use strict";
    Konva.Filters.Emboss = function(a) {
        var b = 10 * this.embossStrength(),
            c = 255 * this.embossWhiteLevel(),
            d = this.embossDirection(),
            e = this.embossBlend(),
            f = 0,
            g = 0,
            h = a.data,
            i = a.width,
            j = a.height,
            k = 4 * i,
            l = j;
        switch (d) {
            case "top-left":
                f = -1, g = -1;
                break;
            case "top":
                f = -1, g = 0;
                break;
            case "top-right":
                f = -1, g = 1;
                break;
            case "right":
                f = 0, g = 1;
                break;
            case "bottom-right":
                f = 1, g = 1;
                break;
            case "bottom":
                f = 1, g = 0;
                break;
            case "bottom-left":
                f = 1, g = -1;
                break;
            case "left":
                f = 0, g = -1
        }
        do {
            var m = (l - 1) * k,
                n = f;
            1 > l + n && (n = 0), l + n > j && (n = 0);
            var o = (l - 1 + n) * i * 4,
                p = i;
            do {
                var q = m + 4 * (p - 1),
                    r = g;
                1 > p + r && (r = 0), p + r > i && (r = 0);
                var s = o + 4 * (p - 1 + r),
                    t = h[q] - h[s],
                    u = h[q + 1] - h[s + 1],
                    v = h[q + 2] - h[s + 2],
                    w = t,
                    x = w > 0 ? w : -w,
                    y = u > 0 ? u : -u,
                    z = v > 0 ? v : -v;
                if (y > x && (w = u), z > x && (w = v), w *= b, e) {
                    var A = h[q] + w,
                        B = h[q + 1] + w,
                        C = h[q + 2] + w;
                    h[q] = A > 255 ? 255 : 0 > A ? 0 : A, h[q + 1] = B > 255 ? 255 : 0 > B ? 0 : B, h[q + 2] = C > 255 ? 255 : 0 > C ? 0 : C
                } else {
                    var D = c - w;
                    0 > D ? D = 0 : D > 255 && (D = 255), h[q] = h[q + 1] = h[q + 2] = D
                }
            } while (--p)
        } while (--l)
    }, Konva.Factory.addGetterSetter(Konva.Node, "embossStrength", .5, null, Konva.Factory.afterSetFilter), Konva.Factory.addGetterSetter(Konva.Node, "embossWhiteLevel", .5, null, Konva.Factory.afterSetFilter), Konva.Factory.addGetterSetter(Konva.Node, "embossDirection", "top-left", null, Konva.Factory.afterSetFilter), Konva.Factory.addGetterSetter(Konva.Node, "embossBlend", !1, null, Konva.Factory.afterSetFilter)
}(),
function() {
    "use strict";

    function a(a, b, c, d, e) {
        var f, g = c - b,
            h = e - d;
        return 0 === g ? d + h / 2 : 0 === h ? d : (f = (a - b) / g, f = h * f + d)
    }
    Konva.Filters.Enhance = function(b) {
        var c, d, e, f, g = b.data,
            h = g.length,
            i = g[0],
            j = i,
            k = g[1],
            l = k,
            m = g[2],
            n = m,
            o = this.enhance();
        if (0 !== o) {
            for (f = 0; h > f; f += 4) c = g[f + 0], i > c ? i = c : c > j && (j = c), d = g[f + 1], k > d ? k = d : d > l && (l = d), e = g[f + 2], m > e ? m = e : e > n && (n = e);
            j === i && (j = 255, i = 0), l === k && (l = 255, k = 0), n === m && (n = 255, m = 0);
            var p, q, r, s, t, u, v, w, x;
            for (o > 0 ? (q = j + o * (255 - j), r = i - o * (i - 0), t = l + o * (255 - l), u = k - o * (k - 0), w = n + o * (255 - n), x = m - o * (m - 0)) : (p = .5 * (j + i), q = j + o * (j - p), r = i + o * (i - p), s = .5 * (l + k), t = l + o * (l - s), u = k + o * (k - s), v = .5 * (n + m), w = n + o * (n - v), x = m + o * (m - v)), f = 0; h > f; f += 4) g[f + 0] = a(g[f + 0], i, j, r, q), g[f + 1] = a(g[f + 1], k, l, u, t), g[f + 2] = a(g[f + 2], m, n, x, w)
        }
    }, Konva.Factory.addGetterSetter(Konva.Node, "enhance", 0, null, Konva.Factory.afterSetFilter)
}(),
function() {
    "use strict";
    Konva.Filters.Posterize = function(a) {
        var b, c = Math.round(254 * this.levels()) + 1,
            d = a.data,
            e = d.length,
            f = 255 / c;
        for (b = 0; e > b; b += 1) d[b] = Math.floor(d[b] / f) * f
    }, Konva.Factory.addGetterSetter(Konva.Node, "levels", .5, null, Konva.Factory.afterSetFilter)
}(),
function() {
    "use strict";
    Konva.Filters.Noise = function(a) {
        var b, c = 255 * this.noise(),
            d = a.data,
            e = d.length,
            f = c / 2;
        for (b = 0; e > b; b += 4) d[b + 0] += f - 2 * f * Math.random(), d[b + 1] += f - 2 * f * Math.random(), d[b + 2] += f - 2 * f * Math.random()
    }, Konva.Factory.addGetterSetter(Konva.Node, "noise", .2, null, Konva.Factory.afterSetFilter)
}(),
function() {
    "use strict";
    Konva.Filters.Pixelate = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p = Math.ceil(this.pixelSize()),
            q = a.width,
            r = a.height,
            s = Math.ceil(q / p),
            t = Math.ceil(r / p);
        for (a = a.data, m = 0; s > m; m += 1)
            for (n = 0; t > n; n += 1) {
                for (e = 0, f = 0, g = 0, h = 0, i = m * p, j = i + p, k = n * p, l = k + p, o = 0, b = i; j > b; b += 1)
                    if (!(b >= q))
                        for (c = k; l > c; c += 1) c >= r || (d = 4 * (q * c + b), e += a[d + 0], f += a[d + 1], g += a[d + 2], h += a[d + 3], o += 1);
                for (e /= o, f /= o, g /= o, b = i; j > b; b += 1)
                    if (!(b >= q))
                        for (c = k; l > c; c += 1) c >= r || (d = 4 * (q * c + b), a[d + 0] = e, a[d + 1] = f, a[d + 2] = g, a[d + 3] = h)
            }
    }, Konva.Factory.addGetterSetter(Konva.Node, "pixelSize", 8, null, Konva.Factory.afterSetFilter)
}(),
function() {
    "use strict";
    Konva.Filters.Threshold = function(a) {
        var b, c = 255 * this.threshold(),
            d = a.data,
            e = d.length;
        for (b = 0; e > b; b += 1) d[b] = d[b] < c ? 0 : 255
    }, Konva.Factory.addGetterSetter(Konva.Node, "threshold", .5, null, Konva.Factory.afterSetFilter)
}(),
function() {
    "use strict";
    Konva.Filters.Sepia = function(a) {
        var b, c, d, e, f, g, h, i, j, k = a.data,
            l = a.width,
            m = a.height,
            n = 4 * l;
        do {
            b = (m - 1) * n, c = l;
            do d = b + 4 * (c - 1), e = k[d], f = k[d + 1], g = k[d + 2], h = .393 * e + .769 * f + .189 * g, i = .349 * e + .686 * f + .168 * g, j = .272 * e + .534 * f + .131 * g, k[d] = h > 255 ? 255 : h, k[d + 1] = i > 255 ? 255 : i, k[d + 2] = j > 255 ? 255 : j, k[d + 3] = k[d + 3]; while (--c)
        } while (--m)
    }
}(),
function() {
    "use strict";
    Konva.Filters.Solarize = function(a) {
        var b = a.data,
            c = a.width,
            d = a.height,
            e = 4 * c,
            f = d;
        do {
            var g = (f - 1) * e,
                h = c;
            do {
                var i = g + 4 * (h - 1),
                    j = b[i],
                    k = b[i + 1],
                    l = b[i + 2];
                j > 127 && (j = 255 - j), k > 127 && (k = 255 - k), l > 127 && (l = 255 - l), b[i] = j, b[i + 1] = k, b[i + 2] = l
            } while (--h)
        } while (--f)
    }
}(),
function() {
    "use strict";
    var a = function(a, b, c) {
            var d, e, f, g, h = a.data,
                i = b.data,
                j = a.width,
                k = a.height,
                l = c.polarCenterX || j / 2,
                m = c.polarCenterY || k / 2,
                n = 0,
                o = 0,
                p = 0,
                q = 0,
                r = Math.sqrt(l * l + m * m);
            e = j - l, f = k - m, g = Math.sqrt(e * e + f * f), r = g > r ? g : r;
            var s, t, u, v, w = k,
                x = j,
                y = 360 / x * Math.PI / 180;
            for (t = 0; x > t; t += 1)
                for (u = Math.sin(t * y), v = Math.cos(t * y), s = 0; w > s; s += 1) e = Math.floor(l + r * s / w * v), f = Math.floor(m + r * s / w * u), d = 4 * (f * j + e), n = h[d + 0], o = h[d + 1], p = h[d + 2], q = h[d + 3], d = 4 * (t + s * j), i[d + 0] = n, i[d + 1] = o, i[d + 2] = p, i[d + 3] = q
        },
        b = function(a, b, c) {
            var d, e, f, g, h, i, j = a.data,
                k = b.data,
                l = a.width,
                m = a.height,
                n = c.polarCenterX || l / 2,
                o = c.polarCenterY || m / 2,
                p = 0,
                q = 0,
                r = 0,
                s = 0,
                t = Math.sqrt(n * n + o * o);
            e = l - n, f = m - o, i = Math.sqrt(e * e + f * f), t = i > t ? i : t;
            var u, v, w, x, y = m,
                z = l,
                A = c.polarRotation || 0;
            for (e = 0; l > e; e += 1)
                for (f = 0; m > f; f += 1) g = e - n, h = f - o, u = Math.sqrt(g * g + h * h) * y / t, v = (180 * Math.atan2(h, g) / Math.PI + 360 + A) % 360, v = v * z / 360, w = Math.floor(v), x = Math.floor(u), d = 4 * (x * l + w), p = j[d + 0], q = j[d + 1], r = j[d + 2], s = j[d + 3], d = 4 * (f * l + e), k[d + 0] = p, k[d + 1] = q, k[d + 2] = r, k[d + 3] = s
        },
        c = Konva.Util.createCanvasElement();
    Konva.Filters.Kaleidoscope = function(d) {
        var e, f, g, h, i, j, k, l, m, n, o = d.width,
            p = d.height,
            q = Math.round(this.kaleidoscopePower()),
            r = Math.round(this.kaleidoscopeAngle()),
            s = Math.floor(o * (r % 360) / 360);
        if (!(1 > q)) {
            c.width = o, c.height = p;
            var t = c.getContext("2d").getImageData(0, 0, o, p);
            a(d, t, {
                polarCenterX: o / 2,
                polarCenterY: p / 2
            });
            for (var u = o / Math.pow(2, q); 8 >= u;) u = 2 * u, q -= 1;
            u = Math.ceil(u);
            var v = u,
                w = 0,
                x = v,
                y = 1;
            for (s + u > o && (w = v, x = 0, y = -1), f = 0; p > f; f += 1)
                for (e = w; e !== x; e += y) g = Math.round(e + s) % o, m = 4 * (o * f + g), i = t.data[m + 0], j = t.data[m + 1], k = t.data[m + 2], l = t.data[m + 3], n = 4 * (o * f + e), t.data[n + 0] = i, t.data[n + 1] = j, t.data[n + 2] = k, t.data[n + 3] = l;
            for (f = 0; p > f; f += 1)
                for (v = Math.floor(u), h = 0; q > h; h += 1) {
                    for (e = 0; v + 1 > e; e += 1) m = 4 * (o * f + e), i = t.data[m + 0], j = t.data[m + 1], k = t.data[m + 2], l = t.data[m + 3], n = 4 * (o * f + 2 * v - e - 1), t.data[n + 0] = i, t.data[n + 1] = j, t.data[n + 2] = k, t.data[n + 3] = l;
                    v *= 2
                }
            b(t, d, {
                polarRotation: 0
            })
        }
    }, Konva.Factory.addGetterSetter(Konva.Node, "kaleidoscopePower", 2, null, Konva.Factory.afterSetFilter), Konva.Factory.addGetterSetter(Konva.Node, "kaleidoscopeAngle", 0, null, Konva.Factory.afterSetFilter)
}(),
function() {
    "use strict";

    function a(a) {
        if ("string" != typeof a) return !1;
        var b = a[0];
        return "#" === b || "." === b || b === b.toUpperCase()
    }
    Konva.Container = function(a) {
        this.__init(a)
    }, Konva.Util.addMethods(Konva.Container, {
        __init: function(a) {
            this.children = new Konva.Collection, Konva.Node.call(this, a)
        },
        getChildren: function(a) {
            if (!a) return this.children;
            var b = new Konva.Collection;
            return this.children.each(function(c) {
                a(c) && b.push(c)
            }), b
        },
        hasChildren: function() {
            return this.getChildren().length > 0
        },
        removeChildren: function() {
            for (var a, b = Konva.Collection.toCollection(this.children), c = 0; c < b.length; c++) a = b[c], delete a.parent, a.index = 0, a.hasChildren() && a.removeChildren(), a.remove();
            return b = null, this.children = new Konva.Collection, this
        },
        destroyChildren: function() {
            for (var a, b = Konva.Collection.toCollection(this.children), c = 0; c < b.length; c++) a = b[c], delete a.parent, a.index = 0, a.destroy();
            return b = null, this.children = new Konva.Collection, this
        },
        add: function(a) {
            if (arguments.length > 1) {
                for (var b = 0; b < arguments.length; b++) this.add(arguments[b]);
                return this
            }
            if (a.getParent()) return a.moveTo(this), this;
            var c = this.children;
            return this._validateAdd(a), a.index = c.length, a.parent = this, c.push(a), this._fire("add", {
                child: a
            }), Konva.DD && a.isDragging() && Konva.DD.anim.setLayers(a.getLayer()), this
        },
        destroy: function() {
            this.hasChildren() && this.destroyChildren(), Konva.Node.prototype.destroy.call(this)
        },
        find: function(b) {
            var c, d, e, f, g, h, i, j = [],
                k = b.replace(/ /g, "").split(","),
                l = k.length;
            for (c = 0; l > c; c++)
                if (e = k[c], a(e) || (Konva.Util.warn('Selector "' + e + '" is invalid. Allowed selectors examples are "#foo", ".bar" or "Group".'), Konva.Util.warn('If you have a custom shape with such className, please change it to start with upper letter like "Triangle".'), Konva.Util.warn("Konva is awesome, right?")), "#" === e.charAt(0)) g = this._getNodeById(e.slice(1)), g && j.push(g);
                else if ("." === e.charAt(0)) f = this._getNodesByName(e.slice(1)), j = j.concat(f);
            else
                for (h = this.getChildren(), i = h.length, d = 0; i > d; d++) j = j.concat(h[d]._get(e));
            return Konva.Collection.toCollection(j)
        },
        findOne: function(a) {
            return this.find(a)[0]
        },
        _getNodeById: function(a) {
            var b = Konva.ids[a];
            return void 0 !== b && this.isAncestorOf(b) ? b : null
        },
        _getNodesByName: function(a) {
            var b = Konva.names[a] || [];
            return this._getDescendants(b)
        },
        _get: function(a) {
            for (var b = Konva.Node.prototype._get.call(this, a), c = this.getChildren(), d = c.length, e = 0; d > e; e++) b = b.concat(c[e]._get(a));
            return b
        },
        toObject: function() {
            var a = Konva.Node.prototype.toObject.call(this);
            a.children = [];
            for (var b = this.getChildren(), c = b.length, d = 0; c > d; d++) {
                var e = b[d];
                a.children.push(e.toObject())
            }
            return a
        },
        _getDescendants: function(a) {
            for (var b = [], c = a.length, d = 0; c > d; d++) {
                var e = a[d];
                this.isAncestorOf(e) && b.push(e)
            }
            return b
        },
        isAncestorOf: function(a) {
            for (var b = a.getParent(); b;) {
                if (b._id === this._id) return !0;
                b = b.getParent()
            }
            return !1
        },
        clone: function(a) {
            var b = Konva.Node.prototype.clone.call(this, a);
            return this.getChildren().each(function(a) {
                b.add(a.clone())
            }), b
        },
        getAllIntersections: function(a) {
            var b = [];
            return this.find("Shape").each(function(c) {
                c.isVisible() && c.intersects(a) && b.push(c)
            }), b
        },
        _setChildrenIndices: function() {
            this.children.each(function(a, b) {
                a.index = b
            })
        },
        drawScene: function(a, b, c) {
            var d = this.getLayer(),
                e = a || d && d.getCanvas(),
                f = e && e.getContext(),
                g = this._cache.canvas,
                h = g && g.scene;
            return this.isVisible() && (!c && h ? (f.save(), d._applyTransform(this, f, b), this._drawCachedSceneCanvas(f), f.restore()) : this._drawChildren(e, "drawScene", b, !1, c)), this
        },
        drawHit: function(a, b, c) {
            var d = this.getLayer(),
                e = a || d && d.hitCanvas,
                f = e && e.getContext(),
                g = this._cache.canvas,
                h = g && g.hit;
            return this.shouldDrawHit(e) && (d && d.clearHitCache(), !c && h ? (f.save(), d._applyTransform(this, f, b), this._drawCachedHitCanvas(f), f.restore()) : this._drawChildren(e, "drawHit", b)), this
        },
        _drawChildren: function(a, b, c, d, e) {
            var f, g, h = this.getLayer(),
                i = a && a.getContext(),
                j = this.getClipWidth(),
                k = this.getClipHeight(),
                l = j && k;
            l && h && (f = this.getClipX(), g = this.getClipY(), i.save(), h._applyTransform(this, i), i.beginPath(), i.rect(f, g, j, k), i.clip(), i.reset()), this.children.each(function(f) {
                f[b](a, c, d, e)
            }), l && i.restore()
        },
        shouldDrawHit: function(a) {
            var b = this.getLayer(),
                c = Konva.DD,
                d = c && Konva.isDragging() && -1 !== Konva.DD.anim.getLayers().indexOf(b);
            return a && a.isCache || b && b.hitGraphEnabled() && this.isVisible() && !d
        },
        getClientRect: function(a) {
            var b, c, d, e, f = {
                x: 0,
                y: 0,
                width: 0,
                height: 0
            };
            return this.children.each(function(a) {
                var f = a.getClientRect();
                void 0 === b ? (b = f.x, c = f.y, d = f.x + f.width, e = f.y + f.height) : (b = Math.min(b, f.x), c = Math.min(c, f.y), d = Math.max(d, f.x + f.width), e = Math.max(e, f.y + f.height))
            }), 0 !== this.children.length && (f = {
                x: b,
                y: c,
                width: d - b,
                height: e - c
            }), a ? f : this._transformedRect(f)
        }
    }), Konva.Util.extend(Konva.Container, Konva.Node), Konva.Container.prototype.get = Konva.Container.prototype.find, Konva.Factory.addComponentsGetterSetter(Konva.Container, "clip", ["x", "y", "width", "height"]), Konva.Factory.addGetterSetter(Konva.Container, "clipX"), Konva.Factory.addGetterSetter(Konva.Container, "clipY"), Konva.Factory.addGetterSetter(Konva.Container, "clipWidth"), Konva.Factory.addGetterSetter(Konva.Container, "clipHeight"), Konva.Collection.mapMethods(Konva.Container)
}(),
function(a) {
    "use strict";

    function b(a) {
        a.fill()
    }

    function c(a) {
        a.stroke()
    }

    function d(a) {
        a.fill()
    }

    function e(a) {
        a.stroke()
    }

    function f() {
        this._clearCache(h)
    }

    function g() {
        this._clearCache(i)
    }
    var h = "hasShadow",
        i = "shadowRGBA";
    a.Shape = function(a) {
            this.__init(a)
        }, a.Util.addMethods(a.Shape, {
            __init: function(h) {
                this.nodeType = "Shape", this._fillFunc = b, this._strokeFunc = c, this._fillFuncHit = d, this._strokeFuncHit = e;
                for (var i, j = a.shapes; i = a.Util.getRandomColor(), !i || i in j;);
                this.colorKey = i, j[i] = this, a.Node.call(this, h), this.on("shadowColorChange.konva shadowBlurChange.konva shadowOffsetChange.konva shadowOpacityChange.konva shadowEnabledChange.konva", f), this.on("shadowColorChange.konva shadowOpacityChange.konva shadowEnabledChange.konva", g)
            },
            hasChildren: function() {
                return !1
            },
            getChildren: function() {
                return []
            },
            getContext: function() {
                return this.getLayer().getContext()
            },
            getCanvas: function() {
                return this.getLayer().getCanvas()
            },
            hasShadow: function() {
                return this._getCache(h, this._hasShadow)
            },
            _hasShadow: function() {
                return this.getShadowEnabled() && 0 !== this.getShadowOpacity() && !!(this.getShadowColor() || this.getShadowBlur() || this.getShadowOffsetX() || this.getShadowOffsetY())
            },
            getShadowRGBA: function() {
                return this._getCache(i, this._getShadowRGBA)
            },
            _getShadowRGBA: function() {
                if (this.hasShadow()) {
                    var b = a.Util.colorToRGBA(this.shadowColor());
                    return "rgba(" + b.r + "," + b.g + "," + b.b + "," + b.a * (this.getShadowOpacity() || 1) + ")"
                }
            },
            hasFill: function() {
                return !!(this.getFill() || this.getFillPatternImage() || this.getFillLinearGradientColorStops() || this.getFillRadialGradientColorStops())
            },
            hasStroke: function() {
                return !!this.stroke()
            },
            intersects: function(a) {
                var b, c = this.getStage(),
                    d = c.bufferHitCanvas;
                return d.getContext().clear(), this.drawScene(d), b = d.context.getImageData(Math.round(a.x), Math.round(a.y), 1, 1).data, b[3] > 0
            },
            destroy: function() {
                a.Node.prototype.destroy.call(this), delete a.shapes[this.colorKey]
            },
            _useBufferCanvas: function(a) {
                return !a && this.perfectDrawEnabled() && 1 !== this.getAbsoluteOpacity() && this.hasFill() && this.hasStroke() && this.getStage() || this.perfectDrawEnabled() && this.hasShadow() && 1 !== this.getAbsoluteOpacity() && this.hasFill() && this.hasStroke() && this.getStage()
            },
            getSelfRect: function() {
                var a = this.getSize();
                return {
                    x: this._centroid ? Math.round(-a.width / 2) : 0,
                    y: this._centroid ? Math.round(-a.height / 2) : 0,
                    width: a.width,
                    height: a.height
                }
            },
            getClientRect: function(a) {
                var b = this.getSelfRect(),
                    c = this.hasStroke() && this.strokeWidth() || 0,
                    d = b.width + c,
                    e = b.height + c,
                    f = this.shadowOffsetX(),
                    g = this.shadowOffsetY(),
                    h = d + Math.abs(f),
                    i = e + Math.abs(g),
                    j = this.hasShadow() && this.shadowBlur() || 0,
                    k = h + 2 * j,
                    l = i + 2 * j,
                    m = 0;
                Math.round(c / 2) !== c / 2 && (m = 1);
                var n = {
                    width: k + m,
                    height: l + m,
                    x: -Math.round(c / 2 + j) + Math.min(f, 0) + b.x,
                    y: -Math.round(c / 2 + j) + Math.min(g, 0) + b.y
                };
                return a ? n : this._transformedRect(n)
            },
            drawScene: function(a, b, c, d) {
                var e, f, g, h = this.getLayer(),
                    i = a || h.getCanvas(),
                    j = i.getContext(),
                    k = this._cache.canvas,
                    l = this.sceneFunc(),
                    m = this.hasShadow(),
                    n = this.hasStroke();
                if (!this.isVisible()) return this;
                if (k) return j.save(), h._applyTransform(this, j, b), this._drawCachedSceneCanvas(j), j.restore(), this;
                if (!l) return this;
                if (j.save(), this._useBufferCanvas(c) && !d) {
                    if (e = this.getStage(), f = e.bufferCanvas, g = f.getContext(), g.clear(), g.save(), g._applyLineJoin(this), !c)
                        if (h) h._applyTransform(this, g, b);
                        else {
                            var o = this.getAbsoluteTransform(b).getMatrix();
                            j.transform(o[0], o[1], o[2], o[3], o[4], o[5])
                        }
                    l.call(this, g), g.restore(), m && !i.hitCanvas ? (j.save(), j._applyShadow(this), j._applyOpacity(this), j.drawImage(f._canvas, 0, 0), j.restore()) : (j._applyOpacity(this), j.drawImage(f._canvas, 0, 0))
                } else {
                    if (j._applyLineJoin(this), !c)
                        if (h) h._applyTransform(this, j, b);
                        else {
                            var p = this.getAbsoluteTransform(b).getMatrix();
                            j.transform(p[0], p[1], p[2], p[3], p[4], p[5])
                        }
                    m && n && !i.hitCanvas ? (j.save(), c || j._applyOpacity(this), j._applyShadow(this), l.call(this, j), j.restore(), this.hasFill() && this.getShadowForStrokeEnabled() && l.call(this, j)) : m && !i.hitCanvas ? (j.save(), c || j._applyOpacity(this), j._applyShadow(this), l.call(this, j), j.restore()) : (c || j._applyOpacity(this), l.call(this, j))
                }
                return j.restore(), this
            },
            drawHit: function(a, b, c) {
                var d = this.getLayer(),
                    e = a || d.hitCanvas,
                    f = e.getContext(),
                    g = this.hitFunc() || this.sceneFunc(),
                    h = this._cache.canvas,
                    i = h && h.hit;
                if (!this.shouldDrawHit(e)) return this;
                if (d && d.clearHitCache(), i) return f.save(), d._applyTransform(this, f, b), this._drawCachedHitCanvas(f), f.restore(), this;
                if (!g) return this;
                if (f.save(), f._applyLineJoin(this), !c)
                    if (d) d._applyTransform(this, f, b);
                    else {
                        var j = this.getAbsoluteTransform(b).getMatrix();
                        f.transform(j[0], j[1], j[2], j[3], j[4], j[5])
                    }
                return g.call(this, f), f.restore(), this
            },
            drawHitFromCache: function(b) {
                var c, d, e, f, g, h, i = b || 0,
                    j = this._cache.canvas,
                    k = this._getCachedSceneCanvas(),
                    l = j.hit,
                    m = l.getContext(),
                    n = l.getWidth(),
                    o = l.getHeight();
                m.clear(), m.drawImage(k._canvas, 0, 0, n, o);
                try {
                    for (c = m.getImageData(0, 0, n, o), d = c.data, e = d.length, f = a.Util._hexToRgb(this.colorKey), g = 0; e > g; g += 4) h = d[g + 3], h > i ? (d[g] = f.r, d[g + 1] = f.g, d[g + 2] = f.b, d[g + 3] = 255) : d[g + 3] = 0;
                    m.putImageData(c, 0, 0)
                } catch (p) {
                    a.Util.error("Unable to draw hit graph from cached scene canvas. " + p.message)
                }
                return this
            }
        }), a.Util.extend(a.Shape, a.Node), a.Factory.addGetterSetter(a.Shape, "stroke"), a.Factory.addDeprecatedGetterSetter(a.Shape, "strokeRed", 0, a.Validators.RGBComponent), a.Factory.addDeprecatedGetterSetter(a.Shape, "strokeGreen", 0, a.Validators.RGBComponent), a.Factory.addDeprecatedGetterSetter(a.Shape, "strokeBlue", 0, a.Validators.RGBComponent), a.Factory.addDeprecatedGetterSetter(a.Shape, "strokeAlpha", 1, a.Validators.alphaComponent), a.Factory.addGetterSetter(a.Shape, "strokeWidth", 2), a.Factory.addGetterSetter(a.Shape, "strokeHitEnabled", !0), a.Factory.addGetterSetter(a.Shape, "perfectDrawEnabled", !0), a.Factory.addGetterSetter(a.Shape, "shadowForStrokeEnabled", !0), a.Factory.addGetterSetter(a.Shape, "lineJoin"), a.Factory.addGetterSetter(a.Shape, "lineCap"), a.Factory.addGetterSetter(a.Shape, "sceneFunc"), a.Factory.addGetterSetter(a.Shape, "hitFunc"), a.Factory.addGetterSetter(a.Shape, "dash"), a.Factory.addGetterSetter(a.Shape, "shadowColor"), a.Factory.addDeprecatedGetterSetter(a.Shape, "shadowRed", 0, a.Validators.RGBComponent), a.Factory.addDeprecatedGetterSetter(a.Shape, "shadowGreen", 0, a.Validators.RGBComponent), a.Factory.addDeprecatedGetterSetter(a.Shape, "shadowBlue", 0, a.Validators.RGBComponent), a.Factory.addDeprecatedGetterSetter(a.Shape, "shadowAlpha", 1, a.Validators.alphaComponent), a.Factory.addGetterSetter(a.Shape, "shadowBlur"), a.Factory.addGetterSetter(a.Shape, "shadowOpacity"), a.Factory.addComponentsGetterSetter(a.Shape, "shadowOffset", ["x", "y"]), a.Factory.addGetterSetter(a.Shape, "shadowOffsetX", 0), a.Factory.addGetterSetter(a.Shape, "shadowOffsetY", 0), a.Factory.addGetterSetter(a.Shape, "fillPatternImage"), a.Factory.addGetterSetter(a.Shape, "fill"), a.Factory.addDeprecatedGetterSetter(a.Shape, "fillRed", 0, a.Validators.RGBComponent), a.Factory.addDeprecatedGetterSetter(a.Shape, "fillGreen", 0, a.Validators.RGBComponent), a.Factory.addDeprecatedGetterSetter(a.Shape, "fillBlue", 0, a.Validators.RGBComponent), a.Factory.addDeprecatedGetterSetter(a.Shape, "fillAlpha", 1, a.Validators.alphaComponent),
        a.Factory.addGetterSetter(a.Shape, "fillPatternX", 0), a.Factory.addGetterSetter(a.Shape, "fillPatternY", 0), a.Factory.addGetterSetter(a.Shape, "fillLinearGradientColorStops"), a.Factory.addGetterSetter(a.Shape, "fillRadialGradientStartRadius", 0), a.Factory.addGetterSetter(a.Shape, "fillRadialGradientEndRadius", 0), a.Factory.addGetterSetter(a.Shape, "fillRadialGradientColorStops"), a.Factory.addGetterSetter(a.Shape, "fillPatternRepeat", "repeat"), a.Factory.addGetterSetter(a.Shape, "fillEnabled", !0), a.Factory.addGetterSetter(a.Shape, "strokeEnabled", !0), a.Factory.addGetterSetter(a.Shape, "shadowEnabled", !0), a.Factory.addGetterSetter(a.Shape, "dashEnabled", !0), a.Factory.addGetterSetter(a.Shape, "strokeScaleEnabled", !0), a.Factory.addGetterSetter(a.Shape, "fillPriority", "color"), a.Factory.addComponentsGetterSetter(a.Shape, "fillPatternOffset", ["x", "y"]), a.Factory.addGetterSetter(a.Shape, "fillPatternOffsetX", 0), a.Factory.addGetterSetter(a.Shape, "fillPatternOffsetY", 0), a.Factory.addComponentsGetterSetter(a.Shape, "fillPatternScale", ["x", "y"]), a.Factory.addGetterSetter(a.Shape, "fillPatternScaleX", 1), a.Factory.addGetterSetter(a.Shape, "fillPatternScaleY", 1), a.Factory.addComponentsGetterSetter(a.Shape, "fillLinearGradientStartPoint", ["x", "y"]), a.Factory.addGetterSetter(a.Shape, "fillLinearGradientStartPointX", 0), a.Factory.addGetterSetter(a.Shape, "fillLinearGradientStartPointY", 0), a.Factory.addComponentsGetterSetter(a.Shape, "fillLinearGradientEndPoint", ["x", "y"]), a.Factory.addGetterSetter(a.Shape, "fillLinearGradientEndPointX", 0), a.Factory.addGetterSetter(a.Shape, "fillLinearGradientEndPointY", 0), a.Factory.addComponentsGetterSetter(a.Shape, "fillRadialGradientStartPoint", ["x", "y"]), a.Factory.addGetterSetter(a.Shape, "fillRadialGradientStartPointX", 0), a.Factory.addGetterSetter(a.Shape, "fillRadialGradientStartPointY", 0), a.Factory.addComponentsGetterSetter(a.Shape, "fillRadialGradientEndPoint", ["x", "y"]), a.Factory.addGetterSetter(a.Shape, "fillRadialGradientEndPointX", 0), a.Factory.addGetterSetter(a.Shape, "fillRadialGradientEndPointY", 0), a.Factory.addGetterSetter(a.Shape, "fillPatternRotation", 0), a.Factory.backCompat(a.Shape, {
            dashArray: "dash",
            getDashArray: "getDash",
            setDashArray: "getDash",
            drawFunc: "sceneFunc",
            getDrawFunc: "getSceneFunc",
            setDrawFunc: "setSceneFunc",
            drawHitFunc: "hitFunc",
            getDrawHitFunc: "getHitFunc",
            setDrawHitFunc: "setHitFunc"
        }), a.Collection.mapMethods(a.Shape)
}(Konva),
function() {
    "use strict";

    function a(a, b) {
        a.content.addEventListener(b, function(c) {
            a[K + b](c)
        }, !1)
    }
    var b = "Stage",
        c = "string",
        d = "px",
        e = "mouseout",
        f = "mouseleave",
        g = "mouseover",
        h = "mouseenter",
        i = "mousemove",
        j = "mousedown",
        k = "mouseup",
        l = "click",
        m = "dblclick",
        n = "touchstart",
        o = "touchend",
        p = "tap",
        q = "dbltap",
        r = "touchmove",
        s = "DOMMouseScroll",
        t = "mousewheel",
        u = "wheel",
        v = "contentMouseout",
        w = "contentMouseover",
        x = "contentMousemove",
        y = "contentMousedown",
        z = "contentMouseup",
        A = "contentClick",
        B = "contentDblclick",
        C = "contentTouchstart",
        D = "contentTouchend",
        E = "contentDbltap",
        F = "contentTouchmove",
        G = "div",
        H = "relative",
        I = "konvajs-content",
        J = " ",
        K = "_",
        L = "container",
        M = "",
        N = [j, i, k, e, n, r, o, g, s, t, u],
        O = N.length;
    Konva.Stage = function(a) {
        this.___init(a)
    }, Konva.Util.addMethods(Konva.Stage, {
        ___init: function(a) {
            this.nodeType = b, Konva.Container.call(this, a), this._id = Konva.idCounter++, this._buildDOM(), this._bindContentEvents(), this._enableNestedTransforms = !1, Konva.stages.push(this)
        },
        _validateAdd: function(a) {
            "Layer" !== a.getType() && Konva.Util["throw"]("You may only add layers to the stage.")
        },
        setContainer: function(a) {
            if (typeof a === c) {
                var b = a;
                if (a = Konva.document.getElementById(a), !a) throw "Can not find container in document with id " + b
            }
            return this._setAttr(L, a), this
        },
        shouldDrawHit: function() {
            return !0
        },
        draw: function() {
            return Konva.Node.prototype.draw.call(this), this
        },
        setHeight: function(a) {
            return Konva.Node.prototype.setHeight.call(this, a), this._resizeDOM(), this
        },
        setWidth: function(a) {
            return Konva.Node.prototype.setWidth.call(this, a), this._resizeDOM(), this
        },
        clear: function() {
            var a, b = this.children,
                c = b.length;
            for (a = 0; c > a; a++) b[a].clear();
            return this
        },
        clone: function(a) {
            return a || (a = {}), a.container = Konva.document.createElement(G), Konva.Container.prototype.clone.call(this, a)
        },
        destroy: function() {
            var a = this.content;
            Konva.Container.prototype.destroy.call(this), a && Konva.Util._isInDocument(a) && this.getContainer().removeChild(a);
            var b = Konva.stages.indexOf(this);
            b > -1 && Konva.stages.splice(b, 1)
        },
        getPointerPosition: function() {
            return this.pointerPos
        },
        getStage: function() {
            return this
        },
        getContent: function() {
            return this.content
        },
        toDataURL: function(a) {
            a = a || {};
            var b = a.mimeType || null,
                c = a.quality || null,
                d = a.x || 0,
                e = a.y || 0,
                f = new Konva.SceneCanvas({
                    width: a.width || this.getWidth(),
                    height: a.height || this.getHeight(),
                    pixelRatio: a.pixelRatio
                }),
                g = f.getContext()._context,
                h = this.children;
            (d || e) && g.translate(-1 * d, -1 * e), h.each(function(a) {
                var b = a.getCanvas().getWidth(),
                    c = a.getCanvas().getHeight(),
                    d = a.getCanvas().getPixelRatio();
                g.drawImage(a.getCanvas()._canvas, 0, 0, b / d, c / d)
            });
            var i = f.toDataURL(b, c);
            return a.callback && a.callback(i), i
        },
        toImage: function(a) {
            var b = a.callback;
            a.callback = function(a) {
                Konva.Util._getImage(a, function(a) {
                    b(a)
                })
            }, this.toDataURL(a)
        },
        getIntersection: function(a) {
            var b, c, d = this.getChildren(),
                e = d.length,
                f = e - 1;
            for (b = f; b >= 0; b--)
                if (c = d[b].getIntersection(a)) return c;
            return null
        },
        _resizeDOM: function() {
            if (this.content) {
                var a, b, c = this.getWidth(),
                    e = this.getHeight(),
                    f = this.getChildren(),
                    g = f.length;
                for (this.content.style.width = c + d, this.content.style.height = e + d, this.bufferCanvas.setSize(c, e), this.bufferHitCanvas.setSize(c, e), a = 0; g > a; a++) b = f[a], b.setSize(c, e), b.draw()
            }
        },
        add: function(a) {
            if (arguments.length > 1) {
                for (var b = 0; b < arguments.length; b++) this.add(arguments[b]);
                return this
            }
            return Konva.Container.prototype.add.call(this, a), a._setCanvasSize(this.width(), this.height()), a.draw(), this.content.appendChild(a.canvas._canvas), this
        },
        getParent: function() {
            return null
        },
        getLayer: function() {
            return null
        },
        getLayers: function() {
            return this.getChildren()
        },
        _bindContentEvents: function() {
            for (var b = 0; O > b; b++) a(this, N[b])
        },
        _mouseover: function(a) {
            Konva.UA.mobile || (this._setPointerPosition(a), this._fire(w, {
                evt: a
            }))
        },
        _mouseout: function(a) {
            if (!Konva.UA.mobile) {
                this._setPointerPosition(a);
                var b = this.targetShape;
                b && !Konva.isDragging() && (b._fireAndBubble(e, {
                    evt: a
                }), b._fireAndBubble(f, {
                    evt: a
                }), this.targetShape = null), this.pointerPos = void 0, this._fire(v, {
                    evt: a
                })
            }
        },
        _mousemove: function(a) {
            if (Konva.UA.ieMobile) return this._touchmove(a);
            if (("undefined" != typeof a.movementX || "undefined" != typeof a.movementY) && 0 === a.movementY && 0 === a.movementX) return null;
            if (Konva.UA.mobile) return null;
            this._setPointerPosition(a);
            var b;
            Konva.isDragging() || (b = this.getIntersection(this.getPointerPosition()), b && b.isListening() ? Konva.isDragging() || this.targetShape && this.targetShape._id === b._id ? b._fireAndBubble(i, {
                evt: a
            }) : (this.targetShape && (this.targetShape._fireAndBubble(e, {
                evt: a
            }, b), this.targetShape._fireAndBubble(f, {
                evt: a
            }, b)), b._fireAndBubble(g, {
                evt: a
            }, this.targetShape), b._fireAndBubble(h, {
                evt: a
            }, this.targetShape), this.targetShape = b) : this.targetShape && !Konva.isDragging() && (this.targetShape._fireAndBubble(e, {
                evt: a
            }), this.targetShape._fireAndBubble(f, {
                evt: a
            }), this.targetShape = null), this._fire(x, {
                evt: a
            })), a.preventDefault && a.preventDefault()
        },
        _mousedown: function(a) {
            if (Konva.UA.ieMobile) return this._touchstart(a);
            if (!Konva.UA.mobile) {
                this._setPointerPosition(a);
                var b = this.getIntersection(this.getPointerPosition());
                Konva.listenClickTap = !0, b && b.isListening() && (this.clickStartShape = b, b._fireAndBubble(j, {
                    evt: a
                })), this._fire(y, {
                    evt: a
                })
            }
            a.preventDefault && a.preventDefault()
        },
        _mouseup: function(a) {
            if (Konva.UA.ieMobile) return this._touchend(a);
            if (!Konva.UA.mobile) {
                this._setPointerPosition(a);
                var b = this.getIntersection(this.getPointerPosition()),
                    c = this.clickStartShape,
                    d = !1,
                    e = Konva.DD;
                Konva.inDblClickWindow ? (d = !0, Konva.inDblClickWindow = !1) : e && e.justDragged ? e && (e.justDragged = !1) : Konva.inDblClickWindow = !0, setTimeout(function() {
                    Konva.inDblClickWindow = !1
                }, Konva.dblClickWindow), b && b.isListening() && (b._fireAndBubble(k, {
                    evt: a
                }), Konva.listenClickTap && c && c._id === b._id && (b._fireAndBubble(l, {
                    evt: a
                }), d && b._fireAndBubble(m, {
                    evt: a
                }))), this._fire(z, {
                    evt: a
                }), Konva.listenClickTap && (this._fire(A, {
                    evt: a
                }), d && this._fire(B, {
                    evt: a
                })), Konva.listenClickTap = !1
            }
            a.preventDefault && a.preventDefault()
        },
        _touchstart: function(a) {
            this._setPointerPosition(a);
            var b = this.getIntersection(this.getPointerPosition());
            Konva.listenClickTap = !0, b && b.isListening() && (this.tapStartShape = b, b._fireAndBubble(n, {
                evt: a
            }), b.isListening() && a.preventDefault && a.preventDefault()), this._fire(C, {
                evt: a
            })
        },
        _touchend: function(a) {
            this._setPointerPosition(a);
            var b = this.getIntersection(this.getPointerPosition()),
                c = !1;
            Konva.inDblClickWindow ? (c = !0, Konva.inDblClickWindow = !1) : Konva.inDblClickWindow = !0, setTimeout(function() {
                Konva.inDblClickWindow = !1
            }, Konva.dblClickWindow), b && b.isListening() && (b._fireAndBubble(o, {
                evt: a
            }), Konva.listenClickTap && b._id === this.tapStartShape._id && (b._fireAndBubble(p, {
                evt: a
            }), c && b._fireAndBubble(q, {
                evt: a
            })), b.isListening() && a.preventDefault && a.preventDefault()), Konva.listenClickTap && (this._fire(D, {
                evt: a
            }), c && this._fire(E, {
                evt: a
            })), Konva.listenClickTap = !1
        },
        _touchmove: function(a) {
            this._setPointerPosition(a);
            var b, c = Konva.DD;
            Konva.isDragging() || (b = this.getIntersection(this.getPointerPosition()), b && b.isListening() && (b._fireAndBubble(r, {
                evt: a
            }), b.isListening() && a.preventDefault && a.preventDefault()), this._fire(F, {
                evt: a
            })), c && Konva.isDragging() && a.preventDefault()
        },
        _DOMMouseScroll: function(a) {
            this._mousewheel(a)
        },
        _mousewheel: function(a) {
            this._setPointerPosition(a);
            var b = this.getIntersection(this.getPointerPosition());
            b && b.isListening() && b._fireAndBubble(t, {
                evt: a
            })
        },
        _wheel: function(a) {
            this._mousewheel(a)
        },
        _setPointerPosition: function(a) {
            var b = this._getContentPosition(),
                c = null,
                d = null;
            if (a = a ? a : window.event, void 0 !== a.touches) {
                if (a.touches.length > 0) {
                    var e = a.touches[0];
                    c = e.clientX - b.left, d = e.clientY - b.top
                }
            } else b ? "mozilla" === Konva.UA.browser ? (c = a.layerX || a.clientX - b.left, d = a.layerY || a.clientY - b.top) : (c = a.clientX - b.left, d = a.clientY - b.top) : (c = a.offsetX, d = a.offetY);
            null !== c && null !== d && (this.pointerPos = {
                x: c,
                y: d
            })
        },
        _getContentPosition: function() {
            var a = this.content.getBoundingClientRect ? this.content.getBoundingClientRect() : {
                top: 0,
                left: 0
            };
            return {
                top: a.top,
                left: a.left
            }
        },
        _buildDOM: function() {
            var a = this.getContainer();
            if (!a) {
                if (Konva.Util.isBrowser()) throw "Stage has no container. A container is required.";
                a = Konva.document.createElement(G)
            }
            a.innerHTML = M, this.content = Konva.document.createElement(G), this.content.style.position = H, this.content.className = I, this.content.setAttribute("role", "presentation"), a.appendChild(this.content), this.bufferCanvas = new Konva.SceneCanvas({
                pixelRatio: 1
            }), this.bufferHitCanvas = new Konva.HitCanvas, this._resizeDOM()
        },
        _onContent: function(a, b) {
            var c, d, e = a.split(J),
                f = e.length;
            for (c = 0; f > c; c++) d = e[c], this.content.addEventListener(d, b, !1)
        },
        cache: function() {
            Konva.Util.warn("Cache function is not allowed for stage. You may use cache only for layers, groups and shapes.")
        },
        clearCache: function() {}
    }), Konva.Util.extend(Konva.Stage, Konva.Container), Konva.Factory.addGetter(Konva.Stage, "container"), Konva.Factory.addOverloadedGetterSetter(Konva.Stage, "container")
}(),
function() {
    "use strict";
    Konva.BaseLayer = function(a) {
        this.___init(a)
    }, Konva.Util.addMethods(Konva.BaseLayer, {
        ___init: function(a) {
            this.nodeType = "Layer", Konva.Container.call(this, a)
        },
        createPNGStream: function() {
            return this.canvas._canvas.createPNGStream()
        },
        getCanvas: function() {
            return this.canvas
        },
        getHitCanvas: function() {
            return this.hitCanvas
        },
        getContext: function() {
            return this.getCanvas().getContext()
        },
        clear: function(a) {
            return this.getContext().clear(a), this
        },
        clearHitCache: function() {
            this._hitImageData = void 0
        },
        setZIndex: function(a) {
            Konva.Node.prototype.setZIndex.call(this, a);
            var b = this.getStage();
            return b && (b.content.removeChild(this.getCanvas()._canvas), a < b.getChildren().length - 1 ? b.content.insertBefore(this.getCanvas()._canvas, b.getChildren()[a + 1].getCanvas()._canvas) : b.content.appendChild(this.getCanvas()._canvas)), this
        },
        moveToTop: function() {
            Konva.Node.prototype.moveToTop.call(this);
            var a = this.getStage();
            a && (a.content.removeChild(this.getCanvas()._canvas), a.content.appendChild(this.getCanvas()._canvas))
        },
        moveUp: function() {
            var a = Konva.Node.prototype.moveUp.call(this);
            if (a) {
                var b = this.getStage();
                b && (b.content.removeChild(this.getCanvas()._canvas), this.index < b.getChildren().length - 1 ? b.content.insertBefore(this.getCanvas()._canvas, b.getChildren()[this.index + 1].getCanvas()._canvas) : b.content.appendChild(this.getCanvas()._canvas))
            }
        },
        moveDown: function() {
            if (Konva.Node.prototype.moveDown.call(this)) {
                var a = this.getStage();
                if (a) {
                    var b = a.getChildren();
                    a.content.removeChild(this.getCanvas()._canvas), a.content.insertBefore(this.getCanvas()._canvas, b[this.index + 1].getCanvas()._canvas)
                }
            }
        },
        moveToBottom: function() {
            if (Konva.Node.prototype.moveToBottom.call(this)) {
                var a = this.getStage();
                if (a) {
                    var b = a.getChildren();
                    a.content.removeChild(this.getCanvas()._canvas), a.content.insertBefore(this.getCanvas()._canvas, b[1].getCanvas()._canvas)
                }
            }
        },
        getLayer: function() {
            return this
        },
        remove: function() {
            var a = this.getCanvas()._canvas;
            return Konva.Node.prototype.remove.call(this), a && a.parentNode && Konva.Util._isInDocument(a) && a.parentNode.removeChild(a), this
        },
        getStage: function() {
            return this.parent
        },
        setSize: function(a, b) {
            this.canvas.setSize(a, b)
        },
        getWidth: function() {
            return this.parent ? this.parent.getWidth() : void 0
        },
        setWidth: function() {
            Konva.Util.warn('Can not change width of layer. Use "stage.width(value)" function instead.')
        },
        getHeight: function() {
            return this.parent ? this.parent.getHeight() : void 0
        },
        setHeight: function() {
            Konva.Util.warn('Can not change height of layer. Use "stage.height(value)" function instead.')
        },
        _applyTransform: function(a, b, c) {
            var d = a.getAbsoluteTransform(c).getMatrix();
            b.transform(d[0], d[1], d[2], d[3], d[4], d[5])
        }
    }), Konva.Util.extend(Konva.BaseLayer, Konva.Container), Konva.Factory.addGetterSetter(Konva.BaseLayer, "clearBeforeDraw", !0), Konva.Collection.mapMethods(Konva.BaseLayer)
}(),
function() {
    "use strict";
    var a = "#",
        b = "beforeDraw",
        c = "draw",
        d = [{
            x: 0,
            y: 0
        }, {
            x: -1,
            y: 0
        }, {
            x: -1,
            y: -1
        }, {
            x: 0,
            y: -1
        }, {
            x: 1,
            y: -1
        }, {
            x: 1,
            y: 0
        }, {
            x: 1,
            y: 1
        }, {
            x: 0,
            y: 1
        }, {
            x: -1,
            y: 1
        }],
        e = d.length;
    Konva.Layer = function(a) {
        this.____init(a)
    }, Konva.Util.addMethods(Konva.Layer, {
        ____init: function(a) {
            this.nodeType = "Layer", this.canvas = new Konva.SceneCanvas, this.hitCanvas = new Konva.HitCanvas({
                pixelRatio: 1
            }), Konva.BaseLayer.call(this, a)
        },
        _setCanvasSize: function(a, b) {
            this.canvas.setSize(a, b), this.hitCanvas.setSize(a, b)
        },
        _validateAdd: function(a) {
            var b = a.getType();
            "Group" !== b && "Shape" !== b && Konva.Util["throw"]("You may only add groups and shapes to a layer.")
        },
        getIntersection: function(a) {
            var b, c, f, g;
            if (!this.hitGraphEnabled() || !this.isVisible()) return null;
            for (var h = 1, i = !1;;) {
                for (c = 0; e > c; c++) {
                    if (f = d[c], b = this._getIntersection({
                            x: a.x + f.x * h,
                            y: a.y + f.y * h
                        }), g = b.shape) return g;
                    if (i = !!b.antialiased, !b.antialiased) break
                }
                if (!i) return null;
                h += 1
            }
        },
        _getImageData: function(a, b) {
            var c = this.hitCanvas.width || 1,
                d = this.hitCanvas.height || 1,
                e = Math.round(b) * c + Math.round(a);
            return this._hitImageData || (this._hitImageData = this.hitCanvas.context.getImageData(0, 0, c, d)), [this._hitImageData.data[4 * e + 0], this._hitImageData.data[4 * e + 1], this._hitImageData.data[4 * e + 2], this._hitImageData.data[4 * e + 3]]
        },
        _getIntersection: function(b) {
            var c, d, e = this.hitCanvas.pixelRatio,
                f = this.hitCanvas.context.getImageData(Math.round(b.x * e), Math.round(b.y * e), 1, 1).data,
                g = f[3];
            return 255 === g ? (c = Konva.Util._rgbToHex(f[0], f[1], f[2]), d = Konva.shapes[a + c], d ? {
                shape: d
            } : {
                antialiased: !0
            }) : g > 0 ? {
                antialiased: !0
            } : {}
        },
        drawScene: function(a, d) {
            var e = this.getLayer(),
                f = a || e && e.getCanvas();
            return this._fire(b, {
                node: this
            }), this.getClearBeforeDraw() && f.getContext().clear(), Konva.Container.prototype.drawScene.call(this, f, d), this._fire(c, {
                node: this
            }), this
        },
        drawHit: function(a, b) {
            var c = this.getLayer(),
                d = a || c && c.hitCanvas;
            return c && c.getClearBeforeDraw() && c.getHitCanvas().getContext().clear(), Konva.Container.prototype.drawHit.call(this, d, b), this.imageData = null, this
        },
        clear: function(a) {
            return Konva.BaseLayer.prototype.clear.call(this, a), this.getHitCanvas().getContext().clear(a), this.imageData = null, this
        },
        setVisible: function(a) {
            return Konva.Node.prototype.setVisible.call(this, a), a ? (this.getCanvas()._canvas.style.display = "block", this.hitCanvas._canvas.style.display = "block") : (this.getCanvas()._canvas.style.display = "none", this.hitCanvas._canvas.style.display = "none"), this
        },
        enableHitGraph: function() {
            return this.setHitGraphEnabled(!0), this
        },
        disableHitGraph: function() {
            return this.setHitGraphEnabled(!1), this
        },
        setSize: function(a, b) {
            Konva.BaseLayer.prototype.setSize.call(this, a, b), this.hitCanvas.setSize(a, b)
        }
    }), Konva.Util.extend(Konva.Layer, Konva.BaseLayer), Konva.Factory.addGetterSetter(Konva.Layer, "hitGraphEnabled", !0), Konva.Collection.mapMethods(Konva.Layer)
}(),
function() {
    "use strict";
    Konva.FastLayer = function(a) {
        this.____init(a)
    }, Konva.Util.addMethods(Konva.FastLayer, {
        ____init: function(a) {
            this.nodeType = "Layer", this.canvas = new Konva.SceneCanvas, Konva.BaseLayer.call(this, a)
        },
        _validateAdd: function(a) {
            var b = a.getType();
            "Shape" !== b && Konva.Util["throw"]("You may only add shapes to a fast layer.")
        },
        _setCanvasSize: function(a, b) {
            this.canvas.setSize(a, b)
        },
        hitGraphEnabled: function() {
            return !1
        },
        getIntersection: function() {
            return null
        },
        drawScene: function(a) {
            var b = this.getLayer(),
                c = a || b && b.getCanvas();
            return this.getClearBeforeDraw() && c.getContext().clear(), Konva.Container.prototype.drawScene.call(this, c), this
        },
        draw: function() {
            return this.drawScene(), this
        },
        setVisible: function(a) {
            return Konva.Node.prototype.setVisible.call(this, a), a ? this.getCanvas()._canvas.style.display = "block" : this.getCanvas()._canvas.style.display = "none", this
        }
    }), Konva.Util.extend(Konva.FastLayer, Konva.BaseLayer), Konva.Collection.mapMethods(Konva.FastLayer)
}(),
function() {
    "use strict";
    Konva.Group = function(a) {
        this.___init(a)
    }, Konva.Util.addMethods(Konva.Group, {
        ___init: function(a) {
            this.nodeType = "Group", Konva.Container.call(this, a)
        },
        _validateAdd: function(a) {
            var b = a.getType();
            "Group" !== b && "Shape" !== b && Konva.Util["throw"]("You may only add groups and shapes to groups.")
        }
    }), Konva.Util.extend(Konva.Group, Konva.Container), Konva.Collection.mapMethods(Konva.Group)
}(),
function(a) {
    "use strict";

    function b(a) {
        setTimeout(a, 1e3 / 60)
    }

    function c() {
        return f.apply(a.root, arguments)
    }
    var d = 500,
        e = function() {
            return a.root.performance && a.root.performance.now ? function() {
                return a.root.performance.now()
            } : function() {
                return (new Date).getTime()
            }
        }(),
        f = function() {
            return a.root.requestAnimationFrame || a.root.webkitRequestAnimationFrame || a.root.mozRequestAnimationFrame || a.root.oRequestAnimationFrame || a.root.msRequestAnimationFrame || b
        }();
    a.Animation = function(b, c) {
        var d = a.Animation;
        this.func = b, this.setLayers(c), this.id = d.animIdCounter++, this.frame = {
            time: 0,
            timeDiff: 0,
            lastTime: e()
        }
    }, a.Animation.prototype = {
        setLayers: function(a) {
            var b = [];
            return b = a ? a.length > 0 ? a : [a] : [], this.layers = b, this
        },
        getLayers: function() {
            return this.layers
        },
        addLayer: function(a) {
            var b, c = this.layers,
                d = c.length;
            for (b = 0; d > b; b++)
                if (c[b]._id === a._id) return !1;
            return this.layers.push(a), !0
        },
        isRunning: function() {
            var b, c = a.Animation,
                d = c.animations,
                e = d.length;
            for (b = 0; e > b; b++)
                if (d[b].id === this.id) return !0;
            return !1
        },
        start: function() {
            var b = a.Animation;
            return this.stop(), this.frame.timeDiff = 0, this.frame.lastTime = e(), b._addAnimation(this), this
        },
        stop: function() {
            return a.Animation._removeAnimation(this), this
        },
        _updateFrameObject: function(a) {
            this.frame.timeDiff = a - this.frame.lastTime, this.frame.lastTime = a, this.frame.time += this.frame.timeDiff, this.frame.frameRate = 1e3 / this.frame.timeDiff
        }
    }, a.Animation.animations = [], a.Animation.animIdCounter = 0, a.Animation.animRunning = !1, a.Animation._addAnimation = function(a) {
        this.animations.push(a), this._handleAnimation()
    }, a.Animation._removeAnimation = function(a) {
        var b, c = a.id,
            d = this.animations,
            e = d.length;
        for (b = 0; e > b; b++)
            if (d[b].id === c) {
                this.animations.splice(b, 1);
                break
            }
    }, a.Animation._runFrames = function() {
        var a, b, c, d, f, g, h, i, j, k = {},
            l = this.animations;
        for (d = 0; d < l.length; d++)
            if (a = l[d], b = a.layers, c = a.func, a._updateFrameObject(e()), g = b.length, j = c ? c.call(a, a.frame) !== !1 : !0)
                for (f = 0; g > f; f++) h = b[f], void 0 !== h._id && (k[h._id] = h);
        for (i in k) k.hasOwnProperty(i) && k[i].draw()
    }, a.Animation._animationLoop = function() {
        var b = a.Animation;
        b.animations.length ? (c(b._animationLoop), b._runFrames()) : b.animRunning = !1
    }, a.Animation._handleAnimation = function() {
        this.animRunning || (this.animRunning = !0, this._animationLoop())
    };
    var g = a.Node.prototype.moveTo;
    a.Node.prototype.moveTo = function(a) {
        g.call(this, a)
    }, a.BaseLayer.prototype.batchDraw = function() {
        var b = this,
            c = a.Animation;
        return this.batchAnim || (this.batchAnim = new c(function() {
            b.lastBatchDrawTime && e() - b.lastBatchDrawTime > d && b.batchAnim.stop()
        }, this)), this.lastBatchDrawTime = e(), this.batchAnim.isRunning() || (this.draw(), this.batchAnim.start()), this
    }, a.Stage.prototype.batchDraw = function() {
        return this.getChildren().each(function(a) {
            a.batchDraw()
        }), this
    }
}(Konva),
function() {
    "use strict";
    var a = {
            node: 1,
            duration: 1,
            easing: 1,
            onFinish: 1,
            yoyo: 1
        },
        b = 1,
        c = 2,
        d = 3,
        e = 0,
        f = ["fill", "stroke", "shadowColor"],
        g = function(a, b, c, d, e, f, g) {
            this.prop = a, this.propFunc = b, this.begin = d, this._pos = d, this.duration = f, this._change = 0, this.prevPos = 0, this.yoyo = g, this._time = 0, this._position = 0, this._startTime = 0, this._finish = 0, this.func = c, this._change = e - this.begin, this.pause()
        };
    g.prototype = {
        fire: function(a) {
            var b = this[a];
            b && b()
        },
        setTime: function(a) {
            a > this.duration ? this.yoyo ? (this._time = this.duration, this.reverse()) : this.finish() : 0 > a ? this.yoyo ? (this._time = 0, this.play()) : this.reset() : (this._time = a, this.update())
        },
        getTime: function() {
            return this._time
        },
        setPosition: function(a) {
            this.prevPos = this._pos, this.propFunc(a), this._pos = a
        },
        getPosition: function(a) {
            return void 0 === a && (a = this._time), this.func(a, this.begin, this._change, this.duration)
        },
        play: function() {
            this.state = c, this._startTime = this.getTimer() - this._time, this.onEnterFrame(), this.fire("onPlay")
        },
        reverse: function() {
            this.state = d, this._time = this.duration - this._time, this._startTime = this.getTimer() - this._time, this.onEnterFrame(), this.fire("onReverse")
        },
        seek: function(a) {
            this.pause(), this._time = a, this.update(), this.fire("onSeek")
        },
        reset: function() {
            this.pause(), this._time = 0, this.update(), this.fire("onReset")
        },
        finish: function() {
            this.pause(), this._time = this.duration, this.update(), this.fire("onFinish")
        },
        update: function() {
            this.setPosition(this.getPosition(this._time))
        },
        onEnterFrame: function() {
            var a = this.getTimer() - this._startTime;
            this.state === c ? this.setTime(a) : this.state === d && this.setTime(this.duration - a)
        },
        pause: function() {
            this.state = b, this.fire("onPause")
        },
        getTimer: function() {
            return (new Date).getTime()
        }
    }, Konva.Tween = function(b) {
        var c, d, f = this,
            h = b.node,
            i = h._id,
            j = b.easing || Konva.Easings.Linear,
            k = !!b.yoyo;
        c = "undefined" == typeof b.duration ? 1 : 0 === b.duration ? .001 : b.duration, this.node = h, this._id = e++, this.anim = new Konva.Animation(function() {
            f.tween.onEnterFrame()
        }, h.getLayer() || (h instanceof Konva.Stage ? h.getLayers() : null)), this.tween = new g(d, function(a) {
            f._tweenFunc(a)
        }, j, 0, 1, 1e3 * c, k), this._addListeners(), Konva.Tween.attrs[i] || (Konva.Tween.attrs[i] = {}), Konva.Tween.attrs[i][this._id] || (Konva.Tween.attrs[i][this._id] = {}), Konva.Tween.tweens[i] || (Konva.Tween.tweens[i] = {});
        for (d in b) void 0 === a[d] && this._addAttr(d, b[d]);
        this.reset(), this.onFinish = b.onFinish, this.onReset = b.onReset
    }, Konva.Tween.attrs = {}, Konva.Tween.tweens = {}, Konva.Tween.prototype = {
        _addAttr: function(a, b) {
            var c, d, e, g, h, i, j, k = this.node,
                l = k._id;
            if (e = Konva.Tween.tweens[l][a], e && delete Konva.Tween.attrs[l][e][a], c = k.getAttr(a), Konva.Util._isArray(b))
                for (d = [], h = Math.max(b.length, c.length), "points" === a && b.length !== c.length && (b.length > c.length ? (j = c, c = Konva.Util._prepareArrayForTween(c, b, k.closed())) : (i = b, b = Konva.Util._prepareArrayForTween(b, c, k.closed()))), g = 0; h > g; g++) d.push(b[g] - c[g]);
            else if (-1 !== f.indexOf(a)) {
                c = Konva.Util.colorToRGBA(c);
                var m = Konva.Util.colorToRGBA(b);
                d = {
                    r: m.r - c.r,
                    g: m.g - c.g,
                    b: m.b - c.b,
                    a: m.a - c.a
                }
            } else d = b - c;
            Konva.Tween.attrs[l][this._id][a] = {
                start: c,
                diff: d,
                end: b,
                trueEnd: i,
                trueStart: j
            }, Konva.Tween.tweens[l][a] = this._id
        },
        _tweenFunc: function(a) {
            var b, c, d, e, g, h, i, j, k = this.node,
                l = Konva.Tween.attrs[k._id][this._id];
            for (b in l) {
                if (c = l[b], d = c.start, e = c.diff, j = c.end, Konva.Util._isArray(d))
                    for (g = [], i = Math.max(d.length, j.length), h = 0; i > h; h++) g.push((d[h] || 0) + e[h] * a);
                else g = -1 !== f.indexOf(b) ? "rgba(" + Math.round(d.r + e.r * a) + "," + Math.round(d.g + e.g * a) + "," + Math.round(d.b + e.b * a) + "," + (d.a + e.a * a) + ")" : d + e * a;
                k.setAttr(b, g)
            }
        },
        _addListeners: function() {
            var a = this;
            this.tween.onPlay = function() {
                a.anim.start()
            }, this.tween.onReverse = function() {
                a.anim.start()
            }, this.tween.onPause = function() {
                a.anim.stop()
            }, this.tween.onFinish = function() {
                var b = a.node,
                    c = Konva.Tween.attrs[b._id][a._id];
                c.points && c.points.trueEnd && b.points(c.points.trueEnd), a.onFinish && a.onFinish.call(a)
            }, this.tween.onReset = function() {
                var b = a.node,
                    c = Konva.Tween.attrs[b._id][a._id];
                c.points && c.points.trueStart && b.points(c.points.trueStart), a.onReset && a.onReset()
            }
        },
        play: function() {
            return this.tween.play(), this
        },
        reverse: function() {
            return this.tween.reverse(), this
        },
        reset: function() {
            return this.tween.reset(), this
        },
        seek: function(a) {
            return this.tween.seek(1e3 * a), this
        },
        pause: function() {
            return this.tween.pause(), this
        },
        finish: function() {
            return this.tween.finish(), this
        },
        destroy: function() {
            var a, b = this.node._id,
                c = this._id,
                d = Konva.Tween.tweens[b];
            this.pause();
            for (a in d) delete Konva.Tween.tweens[b][a];
            delete Konva.Tween.attrs[b][c]
        }
    }, Konva.Node.prototype.to = function(a) {
        var b = a.onFinish;
        a.node = this, a.onFinish = function() {
            this.destroy(), b && b()
        };
        var c = new Konva.Tween(a);
        c.play()
    }, Konva.Easings = {
        BackEaseIn: function(a, b, c, d) {
            var e = 1.70158;
            return c * (a /= d) * a * ((e + 1) * a - e) + b
        },
        BackEaseOut: function(a, b, c, d) {
            var e = 1.70158;
            return c * ((a = a / d - 1) * a * ((e + 1) * a + e) + 1) + b
        },
        BackEaseInOut: function(a, b, c, d) {
            var e = 1.70158;
            return (a /= d / 2) < 1 ? c / 2 * (a * a * (((e *= 1.525) + 1) * a - e)) + b : c / 2 * ((a -= 2) * a * (((e *= 1.525) + 1) * a + e) + 2) + b
        },
        ElasticEaseIn: function(a, b, c, d, e, f) {
            var g = 0;
            return 0 === a ? b : 1 === (a /= d) ? b + c : (f || (f = .3 * d), !e || e < Math.abs(c) ? (e = c, g = f / 4) : g = f / (2 * Math.PI) * Math.asin(c / e), -(e * Math.pow(2, 10 * (a -= 1)) * Math.sin((a * d - g) * (2 * Math.PI) / f)) + b)
        },
        ElasticEaseOut: function(a, b, c, d, e, f) {
            var g = 0;
            return 0 === a ? b : 1 === (a /= d) ? b + c : (f || (f = .3 * d), !e || e < Math.abs(c) ? (e = c, g = f / 4) : g = f / (2 * Math.PI) * Math.asin(c / e), e * Math.pow(2, -10 * a) * Math.sin((a * d - g) * (2 * Math.PI) / f) + c + b)
        },
        ElasticEaseInOut: function(a, b, c, d, e, f) {
            var g = 0;
            return 0 === a ? b : 2 === (a /= d / 2) ? b + c : (f || (f = d * (.3 * 1.5)), !e || e < Math.abs(c) ? (e = c, g = f / 4) : g = f / (2 * Math.PI) * Math.asin(c / e), 1 > a ? -.5 * (e * Math.pow(2, 10 * (a -= 1)) * Math.sin((a * d - g) * (2 * Math.PI) / f)) + b : e * Math.pow(2, -10 * (a -= 1)) * Math.sin((a * d - g) * (2 * Math.PI) / f) * .5 + c + b)
        },
        BounceEaseOut: function(a, b, c, d) {
            return (a /= d) < 1 / 2.75 ? c * (7.5625 * a * a) + b : 2 / 2.75 > a ? c * (7.5625 * (a -= 1.5 / 2.75) * a + .75) + b : 2.5 / 2.75 > a ? c * (7.5625 * (a -= 2.25 / 2.75) * a + .9375) + b : c * (7.5625 * (a -= 2.625 / 2.75) * a + .984375) + b
        },
        BounceEaseIn: function(a, b, c, d) {
            return c - Konva.Easings.BounceEaseOut(d - a, 0, c, d) + b
        },
        BounceEaseInOut: function(a, b, c, d) {
            return d / 2 > a ? .5 * Konva.Easings.BounceEaseIn(2 * a, 0, c, d) + b : .5 * Konva.Easings.BounceEaseOut(2 * a - d, 0, c, d) + .5 * c + b
        },
        EaseIn: function(a, b, c, d) {
            return c * (a /= d) * a + b
        },
        EaseOut: function(a, b, c, d) {
            return -c * (a /= d) * (a - 2) + b
        },
        EaseInOut: function(a, b, c, d) {
            return (a /= d / 2) < 1 ? c / 2 * a * a + b : -c / 2 * (--a * (a - 2) - 1) + b
        },
        StrongEaseIn: function(a, b, c, d) {
            return c * (a /= d) * a * a * a * a + b
        },
        StrongEaseOut: function(a, b, c, d) {
            return c * ((a = a / d - 1) * a * a * a * a + 1) + b
        },
        StrongEaseInOut: function(a, b, c, d) {
            return (a /= d / 2) < 1 ? c / 2 * a * a * a * a * a + b : c / 2 * ((a -= 2) * a * a * a * a + 2) + b
        },
        Linear: function(a, b, c, d) {
            return c * a / d + b
        }
    }
}(),
function() {
    "use strict";
    Konva.DD = {
        anim: new Konva.Animation(function() {
            var a = this.dirty;
            return this.dirty = !1, a
        }),
        isDragging: !1,
        justDragged: !1,
        offset: {
            x: 0,
            y: 0
        },
        node: null,
        _drag: function(a) {
            var b = Konva.DD,
                c = b.node;
            if (c) {
                if (!b.isDragging) {
                    var d = c.getStage().getPointerPosition(),
                        e = c.dragDistance(),
                        f = Math.max(Math.abs(d.x - b.startPointerPos.x), Math.abs(d.y - b.startPointerPos.y));
                    if (e > f) return
                }
                c.getStage()._setPointerPosition(a), c._setDragPosition(a), b.isDragging || (b.isDragging = !0, c.fire("dragstart", {
                    type: "dragstart",
                    target: c,
                    evt: a
                }, !0)), c.fire("dragmove", {
                    type: "dragmove",
                    target: c,
                    evt: a
                }, !0)
            }
        },
        _endDragBefore: function(a) {
            var b, c = Konva.DD,
                d = c.node;
            d && (b = d.getLayer(), c.anim.stop(), c.isDragging && (c.isDragging = !1, c.justDragged = !0, Konva.listenClickTap = !1, a && (a.dragEndNode = d)), delete c.node, (b || d).draw())
        },
        _endDragAfter: function(a) {
            a = a || {};
            var b = a.dragEndNode;
            a && b && b.fire("dragend", {
                type: "dragend",
                target: b,
                evt: a
            }, !0)
        }
    }, Konva.Node.prototype.startDrag = function() {
        var a = Konva.DD,
            b = this.getStage(),
            c = this.getLayer(),
            d = b.getPointerPosition(),
            e = this.getAbsolutePosition();
        d && (a.node && a.node.stopDrag(), a.node = this, a.startPointerPos = d, a.offset.x = d.x - e.x, a.offset.y = d.y - e.y, a.anim.setLayers(c || this.getLayers()), a.anim.start(), this._setDragPosition())
    }, Konva.Node.prototype._setDragPosition = function(a) {
        var b = Konva.DD,
            c = this.getStage().getPointerPosition(),
            d = this.getDragBoundFunc();
        if (c) {
            var e = {
                x: c.x - b.offset.x,
                y: c.y - b.offset.y
            };
            void 0 !== d && (e = d.call(this, e, a)), this.setAbsolutePosition(e), this._lastPos && this._lastPos.x === e.x && this._lastPos.y === e.y || (b.anim.dirty = !0), this._lastPos = e
        }
    }, Konva.Node.prototype.stopDrag = function() {
        var a = Konva.DD,
            b = {};
        a._endDragBefore(b), a._endDragAfter(b)
    }, Konva.Node.prototype.setDraggable = function(a) {
        this._setAttr("draggable", a), this._dragChange()
    };
    var a = Konva.Node.prototype.destroy;
    Konva.Node.prototype.destroy = function() {
        var b = Konva.DD;
        b.node && b.node._id === this._id && this.stopDrag(), a.call(this)
    }, Konva.Node.prototype.isDragging = function() {
        var a = Konva.DD;
        return !(!a.node || a.node._id !== this._id || !a.isDragging)
    }, Konva.Node.prototype._listenDrag = function() {
        var a = this;
        this._dragCleanup(), "Stage" === this.getClassName() ? this.on("contentMousedown.konva contentTouchstart.konva", function(b) {
            Konva.DD.node || a.startDrag(b)
        }) : this.on("mousedown.konva touchstart.konva", function(b) {
            1 !== b.evt.button && 2 !== b.evt.button && (Konva.DD.node || a.startDrag(b))
        })
    }, Konva.Node.prototype._dragChange = function() {
        if (this.attrs.draggable) this._listenDrag();
        else {
            this._dragCleanup();
            var a = this.getStage(),
                b = Konva.DD;
            a && b.node && b.node._id === this._id && b.node.stopDrag()
        }
    }, Konva.Node.prototype._dragCleanup = function() {
        "Stage" === this.getClassName() ? (this.off("contentMousedown.konva"), this.off("contentTouchstart.konva")) : (this.off("mousedown.konva"), this.off("touchstart.konva"))
    }, Konva.Factory.addGetterSetter(Konva.Node, "dragBoundFunc"), Konva.Factory.addGetter(Konva.Node, "draggable", !1), Konva.Factory.addOverloadedGetterSetter(Konva.Node, "draggable");
    var b = Konva.document.documentElement;
    b.addEventListener("mouseup", Konva.DD._endDragBefore, !0), b.addEventListener("touchend", Konva.DD._endDragBefore, !0), b.addEventListener("mousemove", Konva.DD._drag), b.addEventListener("touchmove", Konva.DD._drag), b.addEventListener("mouseup", Konva.DD._endDragAfter, !1), b.addEventListener("touchend", Konva.DD._endDragAfter, !1)
}(),
function() {
    "use strict";
    Konva.Rect = function(a) {
        this.___init(a)
    }, Konva.Rect.prototype = {
        ___init: function(a) {
            Konva.Shape.call(this, a), this.className = "Rect", this.sceneFunc(this._sceneFunc)
        },
        _sceneFunc: function(a) {
            var b = this.getCornerRadius(),
                c = this.getWidth(),
                d = this.getHeight();
            a.beginPath(), b ? (b = Math.min(b, c / 2, d / 2), a.moveTo(b, 0), a.lineTo(c - b, 0), a.arc(c - b, b, b, 3 * Math.PI / 2, 0, !1), a.lineTo(c, d - b), a.arc(c - b, d - b, b, 0, Math.PI / 2, !1), a.lineTo(b, d), a.arc(b, d - b, b, Math.PI / 2, Math.PI, !1), a.lineTo(0, b), a.arc(b, b, b, Math.PI, 3 * Math.PI / 2, !1)) : a.rect(0, 0, c, d), a.closePath(), a.fillStrokeShape(this)
        }
    }, Konva.Util.extend(Konva.Rect, Konva.Shape), Konva.Factory.addGetterSetter(Konva.Rect, "cornerRadius", 0), Konva.Collection.mapMethods(Konva.Rect)
}(),
function() {
    "use strict";
    var a = 2 * Math.PI - 1e-4,
        b = "Circle";
    Konva.Circle = function(a) {
            this.___init(a)
        }, Konva.Circle.prototype = {
            _centroid: !0,
            ___init: function(a) {
                Konva.Shape.call(this, a), this.className = b, this.sceneFunc(this._sceneFunc)
            },
            _sceneFunc: function(b) {
                b.beginPath(), b.arc(0, 0, this.getRadius(), 0, a, !1), b.closePath(), b.fillStrokeShape(this)
            },
            getWidth: function() {
                return 2 * this.getRadius()
            },
            getHeight: function() {
                return 2 * this.getRadius()
            },
            setWidth: function(a) {
                Konva.Node.prototype.setWidth.call(this, a), this.radius() !== a / 2 && this.setRadius(a / 2)
            },
            setHeight: function(a) {
                Konva.Node.prototype.setHeight.call(this, a), this.radius() !== a / 2 && this.setRadius(a / 2)
            }
        }, Konva.Util.extend(Konva.Circle, Konva.Shape), Konva.Factory.addGetterSetter(Konva.Circle, "radius", 0), Konva.Factory.addOverloadedGetterSetter(Konva.Circle, "radius"),
        Konva.Collection.mapMethods(Konva.Circle)
}(),
function() {
    "use strict";
    var a = 2 * Math.PI - 1e-4,
        b = "Ellipse";
    Konva.Ellipse = function(a) {
        this.___init(a)
    }, Konva.Ellipse.prototype = {
        _centroid: !0,
        ___init: function(a) {
            Konva.Shape.call(this, a), this.className = b, this.sceneFunc(this._sceneFunc)
        },
        _sceneFunc: function(b) {
            var c = this.getRadiusX(),
                d = this.getRadiusY();
            b.beginPath(), b.save(), c !== d && b.scale(1, d / c), b.arc(0, 0, c, 0, a, !1), b.restore(), b.closePath(), b.fillStrokeShape(this)
        },
        getWidth: function() {
            return 2 * this.getRadiusX()
        },
        getHeight: function() {
            return 2 * this.getRadiusY()
        },
        setWidth: function(a) {
            Konva.Node.prototype.setWidth.call(this, a), this.setRadius({
                x: a / 2
            })
        },
        setHeight: function(a) {
            Konva.Node.prototype.setHeight.call(this, a), this.setRadius({
                y: a / 2
            })
        }
    }, Konva.Util.extend(Konva.Ellipse, Konva.Shape), Konva.Factory.addComponentsGetterSetter(Konva.Ellipse, "radius", ["x", "y"]), Konva.Factory.addGetterSetter(Konva.Ellipse, "radiusX", 0), Konva.Factory.addGetterSetter(Konva.Ellipse, "radiusY", 0), Konva.Collection.mapMethods(Konva.Ellipse)
}(),
function() {
    "use strict";
    var a = 2 * Math.PI - 1e-4;
    Konva.Ring = function(a) {
        this.___init(a)
    }, Konva.Ring.prototype = {
        _centroid: !0,
        ___init: function(a) {
            Konva.Shape.call(this, a), this.className = "Ring", this.sceneFunc(this._sceneFunc)
        },
        _sceneFunc: function(b) {
            b.beginPath(), b.arc(0, 0, this.getInnerRadius(), 0, a, !1), b.moveTo(this.getOuterRadius(), 0), b.arc(0, 0, this.getOuterRadius(), a, 0, !0), b.closePath(), b.fillStrokeShape(this)
        },
        getWidth: function() {
            return 2 * this.getOuterRadius()
        },
        getHeight: function() {
            return 2 * this.getOuterRadius()
        },
        setWidth: function(a) {
            Konva.Node.prototype.setWidth.call(this, a), this.outerRadius() !== a / 2 && this.setOuterRadius(a / 2)
        },
        setHeight: function(a) {
            Konva.Node.prototype.setHeight.call(this, a), this.outerRadius() !== a / 2 && this.setOuterRadius(a / 2)
        },
        setOuterRadius: function(a) {
            this._setAttr("outerRadius", a), this.setWidth(2 * a), this.setHeight(2 * a)
        }
    }, Konva.Util.extend(Konva.Ring, Konva.Shape), Konva.Factory.addGetterSetter(Konva.Ring, "innerRadius", 0), Konva.Factory.addGetter(Konva.Ring, "outerRadius", 0), Konva.Factory.addOverloadedGetterSetter(Konva.Ring, "outerRadius"), Konva.Collection.mapMethods(Konva.Ring)
}(),
function() {
    "use strict";
    Konva.Wedge = function(a) {
        this.___init(a)
    }, Konva.Wedge.prototype = {
        _centroid: !0,
        ___init: function(a) {
            Konva.Shape.call(this, a), this.className = "Wedge", this.sceneFunc(this._sceneFunc)
        },
        _sceneFunc: function(a) {
            a.beginPath(), a.arc(0, 0, this.getRadius(), 0, Konva.getAngle(this.getAngle()), this.getClockwise()), a.lineTo(0, 0), a.closePath(), a.fillStrokeShape(this)
        },
        getWidth: function() {
            return 2 * this.getRadius()
        },
        getHeight: function() {
            return 2 * this.getRadius()
        },
        setWidth: function(a) {
            Konva.Node.prototype.setWidth.call(this, a), this.radius() !== a / 2 && this.setRadius(a / 2)
        },
        setHeight: function(a) {
            Konva.Node.prototype.setHeight.call(this, a), this.radius() !== a / 2 && this.setRadius(a / 2)
        }
    }, Konva.Util.extend(Konva.Wedge, Konva.Shape), Konva.Factory.addGetterSetter(Konva.Wedge, "radius", 0), Konva.Factory.addGetterSetter(Konva.Wedge, "angle", 0), Konva.Factory.addGetterSetter(Konva.Wedge, "clockwise", !1), Konva.Factory.backCompat(Konva.Wedge, {
        angleDeg: "angle",
        getAngleDeg: "getAngle",
        setAngleDeg: "setAngle"
    }), Konva.Collection.mapMethods(Konva.Wedge)
}(),
function() {
    "use strict";
    Konva.Arc = function(a) {
        this.___init(a)
    }, Konva.Arc.prototype = {
        _centroid: !0,
        ___init: function(a) {
            Konva.Shape.call(this, a), this.className = "Arc", this.sceneFunc(this._sceneFunc)
        },
        _sceneFunc: function(a) {
            var b = Konva.getAngle(this.angle()),
                c = this.clockwise();
            a.beginPath(), a.arc(0, 0, this.getOuterRadius(), 0, b, c), a.arc(0, 0, this.getInnerRadius(), b, 0, !c), a.closePath(), a.fillStrokeShape(this)
        },
        getWidth: function() {
            return 2 * this.getOuterRadius()
        },
        getHeight: function() {
            return 2 * this.getOuterRadius()
        },
        setWidth: function(a) {
            Konva.Node.prototype.setWidth.call(this, a), this.getOuterRadius() !== a / 2 && this.setOuterRadius(a / 2)
        },
        setHeight: function(a) {
            Konva.Node.prototype.setHeight.call(this, a), this.getOuterRadius() !== a / 2 && this.setOuterRadius(a / 2)
        }
    }, Konva.Util.extend(Konva.Arc, Konva.Shape), Konva.Factory.addGetterSetter(Konva.Arc, "innerRadius", 0), Konva.Factory.addGetterSetter(Konva.Arc, "outerRadius", 0), Konva.Factory.addGetterSetter(Konva.Arc, "angle", 0), Konva.Factory.addGetterSetter(Konva.Arc, "clockwise", !1), Konva.Collection.mapMethods(Konva.Arc)
}(),
function() {
    "use strict";
    var a = "Image";
    Konva.Image = function(a) {
        this.___init(a)
    }, Konva.Image.prototype = {
        ___init: function(b) {
            Konva.Shape.call(this, b), this.className = a, this.sceneFunc(this._sceneFunc), this.hitFunc(this._hitFunc)
        },
        _useBufferCanvas: function() {
            return (this.hasShadow() || 1 !== this.getAbsoluteOpacity()) && this.hasStroke() && this.getStage()
        },
        _sceneFunc: function(a) {
            var b, c, d, e = this.getWidth(),
                f = this.getHeight(),
                g = this.getImage();
            g && (b = this.getCropWidth(), c = this.getCropHeight(), d = b && c ? [g, this.getCropX(), this.getCropY(), b, c, 0, 0, e, f] : [g, 0, 0, e, f]), (this.hasFill() || this.hasStroke()) && (a.beginPath(), a.rect(0, 0, e, f), a.closePath(), a.fillStrokeShape(this)), g && a.drawImage.apply(a, d)
        },
        _hitFunc: function(a) {
            var b = this.getWidth(),
                c = this.getHeight();
            a.beginPath(), a.rect(0, 0, b, c), a.closePath(), a.fillStrokeShape(this)
        },
        getWidth: function() {
            var a = this.getImage();
            return this.attrs.width || (a ? a.width : 0)
        },
        getHeight: function() {
            var a = this.getImage();
            return this.attrs.height || (a ? a.height : 0)
        }
    }, Konva.Util.extend(Konva.Image, Konva.Shape), Konva.Factory.addGetterSetter(Konva.Image, "image"), Konva.Factory.addComponentsGetterSetter(Konva.Image, "crop", ["x", "y", "width", "height"]), Konva.Factory.addGetterSetter(Konva.Image, "cropX", 0), Konva.Factory.addGetterSetter(Konva.Image, "cropY", 0), Konva.Factory.addGetterSetter(Konva.Image, "cropWidth", 0), Konva.Factory.addGetterSetter(Konva.Image, "cropHeight", 0), Konva.Collection.mapMethods(Konva.Image), Konva.Image.fromURL = function(a, b) {
        var c = new Image;
        c.onload = function() {
            var a = new Konva.Image({
                image: c
            });
            b(a)
        }, c.src = a
    }
}(),
function() {
    "use strict";

    function a(a) {
        a.fillText(this.partialText, 0, 0)
    }

    function b(a) {
        a.strokeText(this.partialText, 0, 0)
    }
    var c = "auto",
        d = "center",
        e = "Change.konva",
        f = "2d",
        g = "-",
        h = "",
        i = "left",
        j = "text",
        k = "Text",
        l = "middle",
        m = "normal",
        n = "px ",
        o = " ",
        p = "right",
        q = "word",
        r = "char",
        s = "none",
        t = ["fontFamily", "fontSize", "fontStyle", "fontVariant", "padding", "align", "lineHeight", "text", "width", "height", "wrap"],
        u = t.length,
        v = Konva.Util.createCanvasElement().getContext(f);
    Konva.Text = function(a) {
        this.___init(a)
    }, Konva.Text.prototype = {
        ___init: function(d) {
            d = d || {}, d.fillLinearGradientColorStops || d.fillRadialGradientColorStops || (d.fill = d.fill || "black"), void 0 === d.width && (d.width = c), void 0 === d.height && (d.height = c), Konva.Shape.call(this, d), this._fillFunc = a, this._strokeFunc = b, this.className = k;
            for (var f = 0; u > f; f++) this.on(t[f] + e, this._setTextData);
            this._setTextData(), this.sceneFunc(this._sceneFunc), this.hitFunc(this._hitFunc)
        },
        _sceneFunc: function(a) {
            var b, c = this.getPadding(),
                e = this.getTextHeight(),
                f = this.getLineHeight() * e,
                g = this.textArr,
                h = g.length,
                j = this.getWidth();
            for (a.setAttr("font", this._getContextFont()), a.setAttr("textBaseline", l), a.setAttr("textAlign", i), a.save(), c ? (a.translate(c, 0), a.translate(0, c + e / 2)) : a.translate(0, e / 2), b = 0; h > b; b++) {
                var k = g[b],
                    m = k.text,
                    n = k.width;
                a.save(), this.getAlign() === p ? a.translate(j - n - 2 * c, 0) : this.getAlign() === d && a.translate((j - n - 2 * c) / 2, 0), this.partialText = m, a.fillStrokeShape(this), a.restore(), a.translate(0, f)
            }
            a.restore()
        },
        _hitFunc: function(a) {
            var b = this.getWidth(),
                c = this.getHeight();
            a.beginPath(), a.rect(0, 0, b, c), a.closePath(), a.fillStrokeShape(this)
        },
        setText: function(a) {
            var b = Konva.Util._isString(a) ? a : a.toString();
            return this._setAttr(j, b), this
        },
        getWidth: function() {
            return this.attrs.width === c ? this.getTextWidth() + 2 * this.getPadding() : this.attrs.width
        },
        getHeight: function() {
            return this.attrs.height === c ? this.getTextHeight() * this.textArr.length * this.getLineHeight() + 2 * this.getPadding() : this.attrs.height
        },
        getTextWidth: function() {
            return this.textWidth
        },
        getTextHeight: function() {
            return this.textHeight
        },
        _getTextSize: function(a) {
            var b, c = v,
                d = this.getFontSize();
            return c.save(), c.font = this._getContextFont(), b = c.measureText(a), c.restore(), {
                width: b.width,
                height: parseInt(d, 10)
            }
        },
        _getContextFont: function() {
            return this.getFontStyle() + o + this.getFontVariant() + o + this.getFontSize() + n + this.getFontFamily()
        },
        _addTextLine: function(a, b) {
            return this.textArr.push({
                text: a,
                width: b
            })
        },
        _getTextWidth: function(a) {
            return v.measureText(a).width
        },
        _setTextData: function() {
            var a = this.getText().split("\n"),
                b = +this.getFontSize(),
                d = 0,
                e = this.getLineHeight() * b,
                f = this.attrs.width,
                h = this.attrs.height,
                i = f !== c,
                j = h !== c,
                k = this.getPadding(),
                l = f - 2 * k,
                m = h - 2 * k,
                n = 0,
                p = this.getWrap(),
                q = p !== s,
                t = p !== r && q;
            this.textArr = [], v.save(), v.font = this._getContextFont();
            for (var u = 0, w = a.length; w > u; ++u) {
                var x = a[u],
                    y = this._getTextWidth(x);
                if (i && y > l)
                    for (; x.length > 0;) {
                        for (var z = 0, A = x.length, B = "", C = 0; A > z;) {
                            var D = z + A >>> 1,
                                E = x.slice(0, D + 1),
                                F = this._getTextWidth(E);
                            l >= F ? (z = D + 1, B = E, C = F) : A = D
                        }
                        if (!B) break;
                        if (t) {
                            var G = Math.max(B.lastIndexOf(o), B.lastIndexOf(g)) + 1;
                            G > 0 && (z = G, B = B.slice(0, z), C = this._getTextWidth(B))
                        }
                        if (this._addTextLine(B, C), d = Math.max(d, C), n += e, !q || j && n + e > m) break;
                        if (x = x.slice(z), x.length > 0 && (y = this._getTextWidth(x), l >= y)) {
                            this._addTextLine(x, y), n += e, d = Math.max(d, y);
                            break
                        }
                    } else this._addTextLine(x, y), n += e, d = Math.max(d, y);
                if (j && n + e > m) break
            }
            v.restore(), this.textHeight = b, this.textWidth = d
        }
    }, Konva.Util.extend(Konva.Text, Konva.Shape), Konva.Factory.addGetterSetter(Konva.Text, "fontFamily", "Arial"), Konva.Factory.addGetterSetter(Konva.Text, "fontSize", 12), Konva.Factory.addGetterSetter(Konva.Text, "fontStyle", m), Konva.Factory.addGetterSetter(Konva.Text, "fontVariant", m), Konva.Factory.addGetterSetter(Konva.Text, "padding", 0), Konva.Factory.addGetterSetter(Konva.Text, "align", i), Konva.Factory.addGetterSetter(Konva.Text, "lineHeight", 1), Konva.Factory.addGetterSetter(Konva.Text, "wrap", q), Konva.Factory.addGetter(Konva.Text, "text", h), Konva.Factory.addOverloadedGetterSetter(Konva.Text, "text"), Konva.Collection.mapMethods(Konva.Text)
}(),
function() {
    "use strict";
    Konva.Line = function(a) {
        this.___init(a)
    }, Konva.Line.prototype = {
        ___init: function(a) {
            Konva.Shape.call(this, a), this.className = "Line", this.on("pointsChange.konva tensionChange.konva closedChange.konva", function() {
                this._clearCache("tensionPoints")
            }), this.sceneFunc(this._sceneFunc)
        },
        _sceneFunc: function(a) {
            var b, c, d, e = this.getPoints(),
                f = e.length,
                g = this.getTension(),
                h = this.getClosed();
            if (f) {
                if (a.beginPath(), a.moveTo(e[0], e[1]), 0 !== g && f > 4) {
                    for (b = this.getTensionPoints(), c = b.length, d = h ? 0 : 4, h || a.quadraticCurveTo(b[0], b[1], b[2], b[3]); c - 2 > d;) a.bezierCurveTo(b[d++], b[d++], b[d++], b[d++], b[d++], b[d++]);
                    h || a.quadraticCurveTo(b[c - 2], b[c - 1], e[f - 2], e[f - 1])
                } else
                    for (d = 2; f > d; d += 2) a.lineTo(e[d], e[d + 1]);
                h ? (a.closePath(), a.fillStrokeShape(this)) : a.strokeShape(this)
            }
        },
        getTensionPoints: function() {
            return this._getCache("tensionPoints", this._getTensionPoints)
        },
        _getTensionPoints: function() {
            return this.getClosed() ? this._getTensionPointsClosed() : Konva.Util._expandPoints(this.getPoints(), this.getTension())
        },
        _getTensionPointsClosed: function() {
            var a = this.getPoints(),
                b = a.length,
                c = this.getTension(),
                d = Konva.Util,
                e = d._getControlPoints(a[b - 2], a[b - 1], a[0], a[1], a[2], a[3], c),
                f = d._getControlPoints(a[b - 4], a[b - 3], a[b - 2], a[b - 1], a[0], a[1], c),
                g = Konva.Util._expandPoints(a, c),
                h = [e[2], e[3]].concat(g).concat([f[0], f[1], a[b - 2], a[b - 1], f[2], f[3], e[0], e[1], a[0], a[1]]);
            return h
        },
        getWidth: function() {
            return this.getSelfRect().width
        },
        getHeight: function() {
            return this.getSelfRect().height
        },
        getSelfRect: function() {
            var a;
            a = 0 !== this.getTension() ? this._getTensionPoints() : this.getPoints();
            for (var b, c, d = a[0], e = a[0], f = a[1], g = a[1], h = 0; h < a.length / 2; h++) b = a[2 * h], c = a[2 * h + 1], d = Math.min(d, b), e = Math.max(e, b), f = Math.min(f, c), g = Math.max(g, c);
            return {
                x: Math.round(d),
                y: Math.round(f),
                width: Math.round(e - d),
                height: Math.round(g - f)
            }
        }
    }, Konva.Util.extend(Konva.Line, Konva.Shape), Konva.Factory.addGetterSetter(Konva.Line, "closed", !1), Konva.Factory.addGetterSetter(Konva.Line, "tension", 0), Konva.Factory.addGetterSetter(Konva.Line, "points", []), Konva.Collection.mapMethods(Konva.Line)
}(),
function() {
    "use strict";
    Konva.Sprite = function(a) {
        this.___init(a)
    }, Konva.Sprite.prototype = {
        ___init: function(a) {
            Konva.Shape.call(this, a), this.className = "Sprite", this._updated = !0;
            var b = this;
            this.anim = new Konva.Animation(function() {
                var a = b._updated;
                return b._updated = !1, a
            }), this.on("animationChange.konva", function() {
                this.frameIndex(0)
            }), this.on("frameIndexChange.konva", function() {
                this._updated = !0
            }), this.on("frameRateChange.konva", function() {
                this.anim.isRunning() && (clearInterval(this.interval), this._setInterval())
            }), this.sceneFunc(this._sceneFunc), this.hitFunc(this._hitFunc)
        },
        _sceneFunc: function(a) {
            var b = this.getAnimation(),
                c = this.frameIndex(),
                d = 4 * c,
                e = this.getAnimations()[b],
                f = this.frameOffsets(),
                g = e[d + 0],
                h = e[d + 1],
                i = e[d + 2],
                j = e[d + 3],
                k = this.getImage();
            if ((this.hasFill() || this.hasStroke()) && (a.beginPath(), a.rect(0, 0, i, j), a.closePath(), a.fillStrokeShape(this)), k)
                if (f) {
                    var l = f[b],
                        m = 2 * c;
                    a.drawImage(k, g, h, i, j, l[m + 0], l[m + 1], i, j)
                } else a.drawImage(k, g, h, i, j, 0, 0, i, j)
        },
        _hitFunc: function(a) {
            var b = this.getAnimation(),
                c = this.frameIndex(),
                d = 4 * c,
                e = this.getAnimations()[b],
                f = this.frameOffsets(),
                g = e[d + 2],
                h = e[d + 3];
            if (a.beginPath(), f) {
                var i = f[b],
                    j = 2 * c;
                a.rect(i[j + 0], i[j + 1], g, h)
            } else a.rect(0, 0, g, h);
            a.closePath(), a.fillShape(this)
        },
        _useBufferCanvas: function() {
            return (this.hasShadow() || 1 !== this.getAbsoluteOpacity()) && this.hasStroke()
        },
        _setInterval: function() {
            var a = this;
            this.interval = setInterval(function() {
                a._updateIndex()
            }, 1e3 / this.getFrameRate())
        },
        start: function() {
            var a = this.getLayer();
            this.anim.setLayers(a), this._setInterval(), this.anim.start()
        },
        stop: function() {
            this.anim.stop(), clearInterval(this.interval)
        },
        isRunning: function() {
            return this.anim.isRunning()
        },
        _updateIndex: function() {
            var a = this.frameIndex(),
                b = this.getAnimation(),
                c = this.getAnimations(),
                d = c[b],
                e = d.length / 4;
            e - 1 > a ? this.frameIndex(a + 1) : this.frameIndex(0)
        }
    }, Konva.Util.extend(Konva.Sprite, Konva.Shape), Konva.Factory.addGetterSetter(Konva.Sprite, "animation"), Konva.Factory.addGetterSetter(Konva.Sprite, "animations"), Konva.Factory.addGetterSetter(Konva.Sprite, "frameOffsets"), Konva.Factory.addGetterSetter(Konva.Sprite, "image"), Konva.Factory.addGetterSetter(Konva.Sprite, "frameIndex", 0), Konva.Factory.addGetterSetter(Konva.Sprite, "frameRate", 17), Konva.Factory.backCompat(Konva.Sprite, {
        index: "frameIndex",
        getIndex: "getFrameIndex",
        setIndex: "setFrameIndex"
    }), Konva.Collection.mapMethods(Konva.Sprite)
}(),
function() {
    "use strict";
    Konva.Path = function(a) {
        this.___init(a)
    }, Konva.Path.prototype = {
        ___init: function(a) {
            this.dataArray = [];
            var b = this;
            Konva.Shape.call(this, a), this.className = "Path", this.dataArray = Konva.Path.parsePathData(this.getData()), this.on("dataChange.konva", function() {
                b.dataArray = Konva.Path.parsePathData(this.getData())
            }), this.sceneFunc(this._sceneFunc)
        },
        _sceneFunc: function(a) {
            var b = this.dataArray,
                c = !1;
            a.beginPath();
            for (var d = 0; d < b.length; d++) {
                var e = b[d].command,
                    f = b[d].points;
                switch (e) {
                    case "L":
                        a.lineTo(f[0], f[1]);
                        break;
                    case "M":
                        a.moveTo(f[0], f[1]);
                        break;
                    case "C":
                        a.bezierCurveTo(f[0], f[1], f[2], f[3], f[4], f[5]);
                        break;
                    case "Q":
                        a.quadraticCurveTo(f[0], f[1], f[2], f[3]);
                        break;
                    case "A":
                        var g = f[0],
                            h = f[1],
                            i = f[2],
                            j = f[3],
                            k = f[4],
                            l = f[5],
                            m = f[6],
                            n = f[7],
                            o = i > j ? i : j,
                            p = i > j ? 1 : i / j,
                            q = i > j ? j / i : 1;
                        a.translate(g, h), a.rotate(m), a.scale(p, q), a.arc(0, 0, o, k, k + l, 1 - n), a.scale(1 / p, 1 / q), a.rotate(-m), a.translate(-g, -h);
                        break;
                    case "z":
                        a.closePath(), c = !0
                }
            }
            c ? a.fillStrokeShape(this) : a.strokeShape(this)
        },
        getSelfRect: function() {
            var a = [];
            this.dataArray.forEach(function(b) {
                a = a.concat(b.points)
            });
            for (var b, c, d = a[0], e = a[0], f = a[0], g = a[0], h = 0; h < a.length / 2; h++) b = a[2 * h], c = a[2 * h + 1], d = Math.min(d, b), e = Math.max(e, b), f = Math.min(f, c), g = Math.max(g, c);
            return {
                x: Math.round(d),
                y: Math.round(f),
                width: Math.round(e - d),
                height: Math.round(g - f)
            }
        }
    }, Konva.Util.extend(Konva.Path, Konva.Shape), Konva.Path.getLineLength = function(a, b, c, d) {
        return Math.sqrt((c - a) * (c - a) + (d - b) * (d - b))
    }, Konva.Path.getPointOnLine = function(a, b, c, d, e, f, g) {
        void 0 === f && (f = b), void 0 === g && (g = c);
        var h = (e - c) / (d - b + 1e-8),
            i = Math.sqrt(a * a / (1 + h * h));
        b > d && (i *= -1);
        var j, k = h * i;
        if (d === b) j = {
            x: f,
            y: g + k
        };
        else if ((g - c) / (f - b + 1e-8) === h) j = {
            x: f + i,
            y: g + k
        };
        else {
            var l, m, n = this.getLineLength(b, c, d, e);
            if (1e-8 > n) return void 0;
            var o = (f - b) * (d - b) + (g - c) * (e - c);
            o /= n * n, l = b + o * (d - b), m = c + o * (e - c);
            var p = this.getLineLength(f, g, l, m),
                q = Math.sqrt(a * a - p * p);
            i = Math.sqrt(q * q / (1 + h * h)), b > d && (i *= -1), k = h * i, j = {
                x: l + i,
                y: m + k
            }
        }
        return j
    }, Konva.Path.getPointOnCubicBezier = function(a, b, c, d, e, f, g, h, i) {
        function j(a) {
            return a * a * a
        }

        function k(a) {
            return 3 * a * a * (1 - a)
        }

        function l(a) {
            return 3 * a * (1 - a) * (1 - a)
        }

        function m(a) {
            return (1 - a) * (1 - a) * (1 - a)
        }
        var n = h * j(a) + f * k(a) + d * l(a) + b * m(a),
            o = i * j(a) + g * k(a) + e * l(a) + c * m(a);
        return {
            x: n,
            y: o
        }
    }, Konva.Path.getPointOnQuadraticBezier = function(a, b, c, d, e, f, g) {
        function h(a) {
            return a * a
        }

        function i(a) {
            return 2 * a * (1 - a)
        }

        function j(a) {
            return (1 - a) * (1 - a)
        }
        var k = f * h(a) + d * i(a) + b * j(a),
            l = g * h(a) + e * i(a) + c * j(a);
        return {
            x: k,
            y: l
        }
    }, Konva.Path.getPointOnEllipticalArc = function(a, b, c, d, e, f) {
        var g = Math.cos(f),
            h = Math.sin(f),
            i = {
                x: c * Math.cos(e),
                y: d * Math.sin(e)
            };
        return {
            x: a + (i.x * g - i.y * h),
            y: b + (i.x * h + i.y * g)
        }
    }, Konva.Path.parsePathData = function(a) {
        if (!a) return [];
        var b = a,
            c = ["m", "M", "l", "L", "v", "V", "h", "H", "z", "Z", "c", "C", "q", "Q", "t", "T", "s", "S", "a", "A"];
        b = b.replace(new RegExp(" ", "g"), ",");
        for (var d = 0; d < c.length; d++) b = b.replace(new RegExp(c[d], "g"), "|" + c[d]);
        var e = b.split("|"),
            f = [],
            g = 0,
            h = 0;
        for (d = 1; d < e.length; d++) {
            var i = e[d],
                j = i.charAt(0);
            i = i.slice(1), i = i.replace(new RegExp(",-", "g"), "-"), i = i.replace(new RegExp("-", "g"), ",-"), i = i.replace(new RegExp("e,-", "g"), "e-");
            var k = i.split(",");
            k.length > 0 && "" === k[0] && k.shift();
            for (var l = 0; l < k.length; l++) k[l] = parseFloat(k[l]);
            for (; k.length > 0 && !isNaN(k[0]);) {
                var m, n, o, p, q, r, s, t, u, v, w = null,
                    x = [],
                    y = g,
                    z = h;
                switch (j) {
                    case "l":
                        g += k.shift(), h += k.shift(), w = "L", x.push(g, h);
                        break;
                    case "L":
                        g = k.shift(), h = k.shift(), x.push(g, h);
                        break;
                    case "m":
                        var A = k.shift(),
                            B = k.shift();
                        if (g += A, h += B, w = "M", f.length > 2 && "z" === f[f.length - 1].command)
                            for (var C = f.length - 2; C >= 0; C--)
                                if ("M" === f[C].command) {
                                    g = f[C].points[0] + A, h = f[C].points[1] + B;
                                    break
                                }
                        x.push(g, h), j = "l";
                        break;
                    case "M":
                        g = k.shift(), h = k.shift(), w = "M", x.push(g, h), j = "L";
                        break;
                    case "h":
                        g += k.shift(), w = "L", x.push(g, h);
                        break;
                    case "H":
                        g = k.shift(), w = "L", x.push(g, h);
                        break;
                    case "v":
                        h += k.shift(), w = "L", x.push(g, h);
                        break;
                    case "V":
                        h = k.shift(), w = "L", x.push(g, h);
                        break;
                    case "C":
                        x.push(k.shift(), k.shift(), k.shift(), k.shift()), g = k.shift(), h = k.shift(), x.push(g, h);
                        break;
                    case "c":
                        x.push(g + k.shift(), h + k.shift(), g + k.shift(), h + k.shift()), g += k.shift(), h += k.shift(), w = "C", x.push(g, h);
                        break;
                    case "S":
                        n = g, o = h, m = f[f.length - 1], "C" === m.command && (n = g + (g - m.points[2]), o = h + (h - m.points[3])), x.push(n, o, k.shift(), k.shift()), g = k.shift(), h = k.shift(), w = "C", x.push(g, h);
                        break;
                    case "s":
                        n = g, o = h, m = f[f.length - 1], "C" === m.command && (n = g + (g - m.points[2]), o = h + (h - m.points[3])), x.push(n, o, g + k.shift(), h + k.shift()), g += k.shift(), h += k.shift(), w = "C", x.push(g, h);
                        break;
                    case "Q":
                        x.push(k.shift(), k.shift()), g = k.shift(), h = k.shift(), x.push(g, h);
                        break;
                    case "q":
                        x.push(g + k.shift(), h + k.shift()), g += k.shift(), h += k.shift(), w = "Q", x.push(g, h);
                        break;
                    case "T":
                        n = g, o = h, m = f[f.length - 1], "Q" === m.command && (n = g + (g - m.points[0]), o = h + (h - m.points[1])), g = k.shift(), h = k.shift(), w = "Q", x.push(n, o, g, h);
                        break;
                    case "t":
                        n = g, o = h, m = f[f.length - 1], "Q" === m.command && (n = g + (g - m.points[0]), o = h + (h - m.points[1])), g += k.shift(), h += k.shift(), w = "Q", x.push(n, o, g, h);
                        break;
                    case "A":
                        p = k.shift(), q = k.shift(), r = k.shift(), s = k.shift(), t = k.shift(), u = g, v = h, g = k.shift(), h = k.shift(), w = "A", x = this.convertEndpointToCenterParameterization(u, v, g, h, s, t, p, q, r);
                        break;
                    case "a":
                        p = k.shift(), q = k.shift(), r = k.shift(), s = k.shift(), t = k.shift(), u = g, v = h, g += k.shift(), h += k.shift(), w = "A", x = this.convertEndpointToCenterParameterization(u, v, g, h, s, t, p, q, r)
                }
                f.push({
                    command: w || j,
                    points: x,
                    start: {
                        x: y,
                        y: z
                    },
                    pathLength: this.calcLength(y, z, w || j, x)
                })
            }("z" === j || "Z" === j) && f.push({
                command: "z",
                points: [],
                start: void 0,
                pathLength: 0
            })
        }
        return f
    }, Konva.Path.calcLength = function(a, b, c, d) {
        var e, f, g, h, i = Konva.Path;
        switch (c) {
            case "L":
                return i.getLineLength(a, b, d[0], d[1]);
            case "C":
                for (e = 0, f = i.getPointOnCubicBezier(0, a, b, d[0], d[1], d[2], d[3], d[4], d[5]), h = .01; 1 >= h; h += .01) g = i.getPointOnCubicBezier(h, a, b, d[0], d[1], d[2], d[3], d[4], d[5]), e += i.getLineLength(f.x, f.y, g.x, g.y), f = g;
                return e;
            case "Q":
                for (e = 0, f = i.getPointOnQuadraticBezier(0, a, b, d[0], d[1], d[2], d[3]), h = .01; 1 >= h; h += .01) g = i.getPointOnQuadraticBezier(h, a, b, d[0], d[1], d[2], d[3]), e += i.getLineLength(f.x, f.y, g.x, g.y), f = g;
                return e;
            case "A":
                e = 0;
                var j = d[4],
                    k = d[5],
                    l = d[4] + k,
                    m = Math.PI / 180;
                if (Math.abs(j - l) < m && (m = Math.abs(j - l)), f = i.getPointOnEllipticalArc(d[0], d[1], d[2], d[3], j, 0), 0 > k)
                    for (h = j - m; h > l; h -= m) g = i.getPointOnEllipticalArc(d[0], d[1], d[2], d[3], h, 0), e += i.getLineLength(f.x, f.y, g.x, g.y), f = g;
                else
                    for (h = j + m; l > h; h += m) g = i.getPointOnEllipticalArc(d[0], d[1], d[2], d[3], h, 0), e += i.getLineLength(f.x, f.y, g.x, g.y), f = g;
                return g = i.getPointOnEllipticalArc(d[0], d[1], d[2], d[3], l, 0), e += i.getLineLength(f.x, f.y, g.x, g.y)
        }
        return 0
    }, Konva.Path.convertEndpointToCenterParameterization = function(a, b, c, d, e, f, g, h, i) {
        var j = i * (Math.PI / 180),
            k = Math.cos(j) * (a - c) / 2 + Math.sin(j) * (b - d) / 2,
            l = -1 * Math.sin(j) * (a - c) / 2 + Math.cos(j) * (b - d) / 2,
            m = k * k / (g * g) + l * l / (h * h);
        m > 1 && (g *= Math.sqrt(m), h *= Math.sqrt(m));
        var n = Math.sqrt((g * g * (h * h) - g * g * (l * l) - h * h * (k * k)) / (g * g * (l * l) + h * h * (k * k)));
        e === f && (n *= -1), isNaN(n) && (n = 0);
        var o = n * g * l / h,
            p = n * -h * k / g,
            q = (a + c) / 2 + Math.cos(j) * o - Math.sin(j) * p,
            r = (b + d) / 2 + Math.sin(j) * o + Math.cos(j) * p,
            s = function(a) {
                return Math.sqrt(a[0] * a[0] + a[1] * a[1])
            },
            t = function(a, b) {
                return (a[0] * b[0] + a[1] * b[1]) / (s(a) * s(b))
            },
            u = function(a, b) {
                return (a[0] * b[1] < a[1] * b[0] ? -1 : 1) * Math.acos(t(a, b))
            },
            v = u([1, 0], [(k - o) / g, (l - p) / h]),
            w = [(k - o) / g, (l - p) / h],
            x = [(-1 * k - o) / g, (-1 * l - p) / h],
            y = u(w, x);
        return t(w, x) <= -1 && (y = Math.PI), t(w, x) >= 1 && (y = 0), 0 === f && y > 0 && (y -= 2 * Math.PI), 1 === f && 0 > y && (y += 2 * Math.PI), [q, r, g, h, v, y, j, f]
    }, Konva.Factory.addGetterSetter(Konva.Path, "data"), Konva.Collection.mapMethods(Konva.Path)
}(),
function() {
    "use strict";

    function a(a) {
        a.fillText(this.partialText, 0, 0)
    }

    function b(a) {
        a.strokeText(this.partialText, 0, 0)
    }
    var c = "",
        d = "normal";
    Konva.TextPath = function(a) {
        this.___init(a)
    }, Konva.TextPath.prototype = {
        ___init: function(c) {
            var d = this;
            this.dummyCanvas = Konva.Util.createCanvasElement(), this.dataArray = [], Konva.Shape.call(this, c), this._fillFunc = a, this._strokeFunc = b, this._fillFuncHit = a, this._strokeFuncHit = b, this.className = "TextPath", this.dataArray = Konva.Path.parsePathData(this.attrs.data), this.on("dataChange.konva", function() {
                d.dataArray = Konva.Path.parsePathData(this.attrs.data)
            }), this.on("textChange.konva textStroke.konva textStrokeWidth.konva", d._setTextData), d._setTextData(), this.sceneFunc(this._sceneFunc)
        },
        _sceneFunc: function(a) {
            a.setAttr("font", this._getContextFont()), a.setAttr("textBaseline", "middle"), a.setAttr("textAlign", "left"), a.save();
            for (var b = this.glyphInfo, c = 0; c < b.length; c++) {
                a.save();
                var d = b[c].p0;
                a.translate(d.x, d.y), a.rotate(b[c].rotation), this.partialText = b[c].text, a.fillStrokeShape(this), a.restore()
            }
            a.restore()
        },
        getTextWidth: function() {
            return this.textWidth
        },
        getTextHeight: function() {
            return this.textHeight
        },
        setText: function(a) {
            Konva.Text.prototype.setText.call(this, a)
        },
        _getTextSize: function(a) {
            var b = this.dummyCanvas,
                c = b.getContext("2d");
            c.save(), c.font = this._getContextFont();
            var d = c.measureText(a);
            return c.restore(), {
                width: d.width,
                height: parseInt(this.attrs.fontSize, 10)
            }
        },
        _setTextData: function() {
            var a = this,
                b = this._getTextSize(this.attrs.text);
            this.textWidth = b.width, this.textHeight = b.height, this.glyphInfo = [];
            for (var c, d, e, f = this.attrs.text.split(""), g = -1, h = 0, i = function() {
                    h = 0;
                    for (var b = a.dataArray, d = g + 1; d < b.length; d++) {
                        if (b[d].pathLength > 0) return g = d, b[d];
                        "M" === b[d].command && (c = {
                            x: b[d].points[0],
                            y: b[d].points[1]
                        })
                    }
                    return {}
                }, j = function(b) {
                    var f = a._getTextSize(b).width,
                        g = 0,
                        j = 0;
                    for (d = void 0; Math.abs(f - g) / f > .01 && 25 > j;) {
                        j++;
                        for (var k = g; void 0 === e;) e = i(), e && k + e.pathLength < f && (k += e.pathLength, e = void 0);
                        if (e === {} || void 0 === c) return void 0;
                        var l = !1;
                        switch (e.command) {
                            case "L":
                                Konva.Path.getLineLength(c.x, c.y, e.points[0], e.points[1]) > f ? d = Konva.Path.getPointOnLine(f, c.x, c.y, e.points[0], e.points[1], c.x, c.y) : e = void 0;
                                break;
                            case "A":
                                var m = e.points[4],
                                    n = e.points[5],
                                    o = e.points[4] + n;
                                0 === h ? h = m + 1e-8 : f > g ? h += Math.PI / 180 * n / Math.abs(n) : h -= Math.PI / 360 * n / Math.abs(n), (0 > n && o > h || n >= 0 && h > o) && (h = o, l = !0), d = Konva.Path.getPointOnEllipticalArc(e.points[0], e.points[1], e.points[2], e.points[3], h, e.points[6]);
                                break;
                            case "C":
                                0 === h ? h = f > e.pathLength ? 1e-8 : f / e.pathLength : f > g ? h += (f - g) / e.pathLength : h -= (g - f) / e.pathLength, h > 1 && (h = 1, l = !0), d = Konva.Path.getPointOnCubicBezier(h, e.start.x, e.start.y, e.points[0], e.points[1], e.points[2], e.points[3], e.points[4], e.points[5]);
                                break;
                            case "Q":
                                0 === h ? h = f / e.pathLength : f > g ? h += (f - g) / e.pathLength : h -= (g - f) / e.pathLength, h > 1 && (h = 1, l = !0), d = Konva.Path.getPointOnQuadraticBezier(h, e.start.x, e.start.y, e.points[0], e.points[1], e.points[2], e.points[3])
                        }
                        void 0 !== d && (g = Konva.Path.getLineLength(c.x, c.y, d.x, d.y)), l && (l = !1, e = void 0)
                    }
                }, k = 0; k < f.length && (j(f[k]), void 0 !== c && void 0 !== d); k++) {
                var l = Konva.Path.getLineLength(c.x, c.y, d.x, d.y),
                    m = 0,
                    n = Konva.Path.getPointOnLine(m + l / 2, c.x, c.y, d.x, d.y),
                    o = Math.atan2(d.y - c.y, d.x - c.x);
                this.glyphInfo.push({
                    transposeX: n.x,
                    transposeY: n.y,
                    text: f[k],
                    rotation: o,
                    p0: c,
                    p1: d
                }), c = d
            }
        },
        getSelfRect: function() {
            var a = [],
                b = this.fontSize();
            this.glyphInfo.forEach(function(b) {
                a.push(b.p0.x), a.push(b.p0.y), a.push(b.p1.x), a.push(b.p1.y)
            });
            for (var c, d, e = a[0], f = a[0], g = a[0], h = a[0], i = 0; i < a.length / 2; i++) c = a[2 * i], d = a[2 * i + 1], e = Math.min(e, c), f = Math.max(f, c), g = Math.min(g, d), h = Math.max(h, d);
            return {
                x: Math.round(e) - b,
                y: Math.round(g) - b,
                width: Math.round(f - e) + 2 * b,
                height: Math.round(h - g) + 2 * b
            }
        }
    }, Konva.TextPath.prototype._getContextFont = Konva.Text.prototype._getContextFont, Konva.Util.extend(Konva.TextPath, Konva.Shape), Konva.Factory.addGetterSetter(Konva.TextPath, "fontFamily", "Arial"), Konva.Factory.addGetterSetter(Konva.TextPath, "fontSize", 12), Konva.Factory.addGetterSetter(Konva.TextPath, "fontStyle", d), Konva.Factory.addGetterSetter(Konva.TextPath, "fontVariant", d), Konva.Factory.addGetter(Konva.TextPath, "text", c), Konva.Collection.mapMethods(Konva.TextPath)
}(),
function() {
    "use strict";
    Konva.RegularPolygon = function(a) {
        this.___init(a)
    }, Konva.RegularPolygon.prototype = {
        _centroid: !0,
        ___init: function(a) {
            Konva.Shape.call(this, a), this.className = "RegularPolygon", this.sceneFunc(this._sceneFunc)
        },
        _sceneFunc: function(a) {
            var b, c, d, e = this.attrs.sides,
                f = this.attrs.radius;
            for (a.beginPath(), a.moveTo(0, 0 - f), b = 1; e > b; b++) c = f * Math.sin(2 * b * Math.PI / e), d = -1 * f * Math.cos(2 * b * Math.PI / e), a.lineTo(c, d);
            a.closePath(), a.fillStrokeShape(this)
        },
        getWidth: function() {
            return 2 * this.getRadius()
        },
        getHeight: function() {
            return 2 * this.getRadius()
        },
        setWidth: function(a) {
            Konva.Node.prototype.setWidth.call(this, a), this.radius() !== a / 2 && this.setRadius(a / 2)
        },
        setHeight: function(a) {
            Konva.Node.prototype.setHeight.call(this, a), this.radius() !== a / 2 && this.setRadius(a / 2)
        }
    }, Konva.Util.extend(Konva.RegularPolygon, Konva.Shape), Konva.Factory.addGetterSetter(Konva.RegularPolygon, "radius", 0), Konva.Factory.addGetterSetter(Konva.RegularPolygon, "sides", 0), Konva.Collection.mapMethods(Konva.RegularPolygon)
}(),
function() {
    "use strict";
    Konva.Star = function(a) {
        this.___init(a)
    }, Konva.Star.prototype = {
        _centroid: !0,
        ___init: function(a) {
            Konva.Shape.call(this, a), this.className = "Star", this.sceneFunc(this._sceneFunc)
        },
        _sceneFunc: function(a) {
            var b = this.innerRadius(),
                c = this.outerRadius(),
                d = this.numPoints();
            a.beginPath(), a.moveTo(0, 0 - c);
            for (var e = 1; 2 * d > e; e++) {
                var f = e % 2 === 0 ? c : b,
                    g = f * Math.sin(e * Math.PI / d),
                    h = -1 * f * Math.cos(e * Math.PI / d);
                a.lineTo(g, h)
            }
            a.closePath(), a.fillStrokeShape(this)
        },
        getWidth: function() {
            return 2 * this.getOuterRadius()
        },
        getHeight: function() {
            return 2 * this.getOuterRadius()
        },
        setWidth: function(a) {
            Konva.Node.prototype.setWidth.call(this, a), this.outerRadius() !== a / 2 && this.setOuterRadius(a / 2)
        },
        setHeight: function(a) {
            Konva.Node.prototype.setHeight.call(this, a), this.outerRadius() !== a / 2 && this.setOuterRadius(a / 2)
        }
    }, Konva.Util.extend(Konva.Star, Konva.Shape), Konva.Factory.addGetterSetter(Konva.Star, "numPoints", 5), Konva.Factory.addGetterSetter(Konva.Star, "innerRadius", 0), Konva.Factory.addGetterSetter(Konva.Star, "outerRadius", 0), Konva.Collection.mapMethods(Konva.Star)
}(),
function() {
    "use strict";
    var a = ["fontFamily", "fontSize", "fontStyle", "padding", "lineHeight", "text"],
        b = "Change.konva",
        c = "none",
        d = "up",
        e = "right",
        f = "down",
        g = "left",
        h = "Label",
        i = a.length;
    Konva.Label = function(a) {
        this.____init(a)
    }, Konva.Label.prototype = {
        ____init: function(a) {
            var b = this;
            Konva.Group.call(this, a), this.className = h, this.on("add.konva", function(a) {
                b._addListeners(a.child), b._sync()
            })
        },
        getText: function() {
            return this.find("Text")[0]
        },
        getTag: function() {
            return this.find("Tag")[0]
        },
        _addListeners: function(c) {
            var d, e = this,
                f = function() {
                    e._sync()
                };
            for (d = 0; i > d; d++) c.on(a[d] + b, f)
        },
        getWidth: function() {
            return this.getText().getWidth()
        },
        getHeight: function() {
            return this.getText().getHeight()
        },
        _sync: function() {
            var a, b, c, h, i, j, k, l = this.getText(),
                m = this.getTag();
            if (l && m) {
                switch (a = l.getWidth(), b = l.getHeight(), c = m.getPointerDirection(), h = m.getPointerWidth(), k = m.getPointerHeight(), i = 0, j = 0, c) {
                    case d:
                        i = a / 2, j = -1 * k;
                        break;
                    case e:
                        i = a + h, j = b / 2;
                        break;
                    case f:
                        i = a / 2, j = b + k;
                        break;
                    case g:
                        i = -1 * h, j = b / 2
                }
                m.setAttrs({
                    x: -1 * i,
                    y: -1 * j,
                    width: a,
                    height: b
                }), l.setAttrs({
                    x: -1 * i,
                    y: -1 * j
                })
            }
        }
    }, Konva.Util.extend(Konva.Label, Konva.Group), Konva.Collection.mapMethods(Konva.Label), Konva.Tag = function(a) {
        this.___init(a)
    }, Konva.Tag.prototype = {
        ___init: function(a) {
            Konva.Shape.call(this, a), this.className = "Tag", this.sceneFunc(this._sceneFunc)
        },
        _sceneFunc: function(a) {
            var b = this.getWidth(),
                c = this.getHeight(),
                h = this.getPointerDirection(),
                i = this.getPointerWidth(),
                j = this.getPointerHeight(),
                k = this.getCornerRadius();
            a.beginPath(), a.moveTo(0, 0), h === d && (a.lineTo((b - i) / 2, 0), a.lineTo(b / 2, -1 * j), a.lineTo((b + i) / 2, 0)), k ? (a.lineTo(b - k, 0), a.arc(b - k, k, k, 3 * Math.PI / 2, 0, !1)) : a.lineTo(b, 0), h === e && (a.lineTo(b, (c - j) / 2), a.lineTo(b + i, c / 2), a.lineTo(b, (c + j) / 2)), k ? (a.lineTo(b, c - k), a.arc(b - k, c - k, k, 0, Math.PI / 2, !1)) : a.lineTo(b, c), h === f && (a.lineTo((b + i) / 2, c), a.lineTo(b / 2, c + j), a.lineTo((b - i) / 2, c)), k ? (a.lineTo(k, c), a.arc(k, c - k, k, Math.PI / 2, Math.PI, !1)) : a.lineTo(0, c), h === g && (a.lineTo(0, (c + j) / 2), a.lineTo(-1 * i, c / 2), a.lineTo(0, (c - j) / 2)), k && (a.lineTo(0, k), a.arc(k, k, k, Math.PI, 3 * Math.PI / 2, !1)), a.closePath(), a.fillStrokeShape(this)
        },
        getSelfRect: function() {
            var a = 0,
                b = 0,
                c = this.getPointerWidth(),
                h = this.getPointerHeight(),
                i = this.pointerDirection(),
                j = this.getWidth(),
                k = this.getHeight();
            return i === d ? (b -= h, k += h) : i === f ? k += h : i === g ? (a -= 1.5 * c, j += c) : i === e && (j += 1.5 * c), {
                x: a,
                y: b,
                width: j,
                height: k
            }
        }
    }, Konva.Util.extend(Konva.Tag, Konva.Shape), Konva.Factory.addGetterSetter(Konva.Tag, "pointerDirection", c), Konva.Factory.addGetterSetter(Konva.Tag, "pointerWidth", 0), Konva.Factory.addGetterSetter(Konva.Tag, "pointerHeight", 0), Konva.Factory.addGetterSetter(Konva.Tag, "cornerRadius", 0), Konva.Collection.mapMethods(Konva.Tag)
}(),
function() {
    "use strict";
    Konva.Arrow = function(a) {
        this.____init(a)
    }, Konva.Arrow.prototype = {
        ____init: function(a) {
            Konva.Line.call(this, a), this.className = "Arrow"
        },
        _sceneFunc: function(a) {
            var b = 2 * Math.PI,
                c = this.points(),
                d = c.length,
                e = c[d - 2] - c[d - 4],
                f = c[d - 1] - c[d - 3],
                g = (Math.atan2(f, e) + b) % b,
                h = this.pointerLength(),
                i = this.pointerWidth();
            a.save(), a.beginPath(), a.translate(c[d - 2], c[d - 1]), a.rotate(g), a.moveTo(0, 0), a.lineTo(-h, i / 2), a.lineTo(-h, -i / 2), a.closePath(), a.restore(), this.pointerAtBeginning() && (a.save(), a.translate(c[0], c[1]), e = c[2] - c[0], f = c[3] - c[1], a.rotate((Math.atan2(-f, -e) + b) % b), a.moveTo(0, 0), a.lineTo(-10, 6), a.lineTo(-10, -6), a.closePath(), a.restore()), a.fillStrokeShape(this), Konva.Line.prototype._sceneFunc.apply(this, arguments)
        }
    }, Konva.Util.extend(Konva.Arrow, Konva.Line), Konva.Factory.addGetterSetter(Konva.Arrow, "pointerLength", 10), Konva.Factory.addGetterSetter(Konva.Arrow, "pointerWidth", 10), Konva.Factory.addGetterSetter(Konva.Arrow, "pointerAtBeginning", !1), Konva.Collection.mapMethods(Konva.Arrow)
}(),
function() {
    "use strict";

    function a(b, d) {
        function e(a, b) {
            return function() {
                return a.apply(b, arguments)
            }
        }
        var f;
        if (d = d || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = d.touchBoundary || 10, this.layer = b, this.tapDelay = d.tapDelay || 200, this.tapTimeout = d.tapTimeout || 700, !a.notNeeded(b)) {
            for (var g = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], h = this, i = 0, j = g.length; j > i; i++) h[g[i]] = e(h[g[i]], h);
            c && (b.addEventListener("mouseover", this.onMouse, !0), b.addEventListener("mousedown", this.onMouse, !0), b.addEventListener("mouseup", this.onMouse, !0)), b.addEventListener("click", this.onClick, !0), b.addEventListener("touchstart", this.onTouchStart, !1),
                b.addEventListener("touchmove", this.onTouchMove, !1), b.addEventListener("touchend", this.onTouchEnd, !1), b.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (b.removeEventListener = function(a, c, d) {
                    var e = Node.prototype.removeEventListener;
                    "click" === a ? e.call(b, a, c.hijacked || c, d) : e.call(b, a, c, d)
                }, b.addEventListener = function(a, c, d) {
                    var e = Node.prototype.addEventListener;
                    "click" === a ? e.call(b, a, c.hijacked || (c.hijacked = function(a) {
                        a.propagationStopped || c(a)
                    }), d) : e.call(b, a, c, d)
                }), "function" == typeof b.onclick && (f = b.onclick, b.addEventListener("click", function(a) {
                    f(a)
                }, !1), b.onclick = null)
        }
    }
    var b = navigator.userAgent.indexOf("Windows Phone") >= 0,
        c = navigator.userAgent.indexOf("Android") > 0 && !b,
        d = /iP(ad|hone|od)/.test(navigator.userAgent) && !b,
        e = d && /OS 4_\d(_\d)?/.test(navigator.userAgent),
        f = d && /OS [6-7]_\d/.test(navigator.userAgent),
        g = navigator.userAgent.indexOf("BB10") > 0;
    a.prototype.needsClick = function(a) {
        switch (a.nodeName.toLowerCase()) {
            case "button":
            case "select":
            case "textarea":
                if (a.disabled) return !0;
                break;
            case "input":
                if (d && "file" === a.type || a.disabled) return !0;
                break;
            case "label":
            case "iframe":
            case "video":
                return !0
        }
        return /\bneedsclick\b/.test(a.className)
    }, a.prototype.needsFocus = function(a) {
        switch (a.nodeName.toLowerCase()) {
            case "textarea":
                return !0;
            case "select":
                return !c;
            case "input":
                switch (a.type) {
                    case "button":
                    case "checkbox":
                    case "file":
                    case "image":
                    case "radio":
                    case "submit":
                        return !1
                }
                return !a.disabled && !a.readOnly;
            default:
                return /\bneedsfocus\b/.test(a.className)
        }
    }, a.prototype.sendClick = function(a, b) {
        var c, d;
        document.activeElement && document.activeElement !== a && document.activeElement.blur(), d = b.changedTouches[0], c = document.createEvent("MouseEvents"), c.initMouseEvent(this.determineEventType(a), !0, !0, window, 1, d.screenX, d.screenY, d.clientX, d.clientY, !1, !1, !1, !1, 0, null), c.forwardedTouchEvent = !0, a.dispatchEvent(c)
    }, a.prototype.determineEventType = function(a) {
        return c && "select" === a.tagName.toLowerCase() ? "mousedown" : "click"
    }, a.prototype.focus = function(a) {
        var b;
        d && a.setSelectionRange && 0 !== a.type.indexOf("date") && "time" !== a.type && "month" !== a.type ? (b = a.value.length, a.setSelectionRange(b, b)) : a.focus()
    }, a.prototype.updateScrollParent = function(a) {
        var b, c;
        if (b = a.fastClickScrollParent, !b || !b.contains(a)) {
            c = a;
            do {
                if (c.scrollHeight > c.offsetHeight) {
                    b = c, a.fastClickScrollParent = c;
                    break
                }
                c = c.parentElement
            } while (c)
        }
        b && (b.fastClickLastScrollTop = b.scrollTop)
    }, a.prototype.getTargetElementFromEventTarget = function(a) {
        return a.nodeType === Node.TEXT_NODE ? a.parentNode : a
    }, a.prototype.onTouchStart = function(a) {
        var b, c, f;
        if (a.targetTouches.length > 1) return !0;
        if (b = this.getTargetElementFromEventTarget(a.target), c = a.targetTouches[0], d) {
            if (f = window.getSelection(), f.rangeCount && !f.isCollapsed) return !0;
            if (!e) {
                if (c.identifier && c.identifier === this.lastTouchIdentifier) return a.preventDefault(), !1;
                this.lastTouchIdentifier = c.identifier, this.updateScrollParent(b)
            }
        }
        return this.trackingClick = !0, this.trackingClickStart = a.timeStamp, this.targetElement = b, this.touchStartX = c.pageX, this.touchStartY = c.pageY, a.timeStamp - this.lastClickTime < this.tapDelay && a.preventDefault(), !0
    }, a.prototype.touchHasMoved = function(a) {
        var b = a.changedTouches[0],
            c = this.touchBoundary;
        return Math.abs(b.pageX - this.touchStartX) > c || Math.abs(b.pageY - this.touchStartY) > c ? !0 : !1
    }, a.prototype.onTouchMove = function(a) {
        return this.trackingClick ? ((this.targetElement !== this.getTargetElementFromEventTarget(a.target) || this.touchHasMoved(a)) && (this.trackingClick = !1, this.targetElement = null), !0) : !0
    }, a.prototype.findControl = function(a) {
        return void 0 !== a.control ? a.control : a.htmlFor ? document.getElementById(a.htmlFor) : a.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
    }, a.prototype.onTouchEnd = function(a) {
        var b, g, h, i, j, k = this.targetElement;
        if (!this.trackingClick) return !0;
        if (a.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0, !0;
        if (a.timeStamp - this.trackingClickStart > this.tapTimeout) return !0;
        if (this.cancelNextClick = !1, this.lastClickTime = a.timeStamp, g = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, f && (j = a.changedTouches[0], k = document.elementFromPoint(j.pageX - window.pageXOffset, j.pageY - window.pageYOffset) || k, k.fastClickScrollParent = this.targetElement.fastClickScrollParent), h = k.tagName.toLowerCase(), "label" === h) {
            if (b = this.findControl(k)) {
                if (this.focus(k), c) return !1;
                k = b
            }
        } else if (this.needsFocus(k)) return a.timeStamp - g > 100 || d && window.top !== window && "input" === h ? (this.targetElement = null, !1) : (this.focus(k), this.sendClick(k, a), d && "select" === h || (this.targetElement = null, a.preventDefault()), !1);
        return d && !e && (i = k.fastClickScrollParent, i && i.fastClickLastScrollTop !== i.scrollTop) ? !0 : (this.needsClick(k) || (a.preventDefault(), this.sendClick(k, a)), !1)
    }, a.prototype.onTouchCancel = function() {
        this.trackingClick = !1, this.targetElement = null
    }, a.prototype.onMouse = function(a) {
        return this.targetElement ? a.forwardedTouchEvent ? !0 : a.cancelable && (!this.needsClick(this.targetElement) || this.cancelNextClick) ? (a.stopImmediatePropagation ? a.stopImmediatePropagation() : a.propagationStopped = !0, a.stopPropagation(), a.preventDefault(), !1) : !0 : !0
    }, a.prototype.onClick = function(a) {
        var b;
        return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === a.target.type && 0 === a.detail ? !0 : (b = this.onMouse(a), b || (this.targetElement = null), b)
    }, a.prototype.destroy = function() {
        var a = this.layer;
        c && (a.removeEventListener("mouseover", this.onMouse, !0), a.removeEventListener("mousedown", this.onMouse, !0), a.removeEventListener("mouseup", this.onMouse, !0)), a.removeEventListener("click", this.onClick, !0), a.removeEventListener("touchstart", this.onTouchStart, !1), a.removeEventListener("touchmove", this.onTouchMove, !1), a.removeEventListener("touchend", this.onTouchEnd, !1), a.removeEventListener("touchcancel", this.onTouchCancel, !1)
    }, a.notNeeded = function(a) {
        var b, d, e, f;
        if ("undefined" == typeof window.ontouchstart) return !0;
        if (d = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
            if (!c) return !0;
            if (b = document.querySelector("meta[name=viewport]")) {
                if (-1 !== b.content.indexOf("user-scalable=no")) return !0;
                if (d > 31 && document.documentElement.scrollWidth <= window.outerWidth) return !0
            }
        }
        if (g && (e = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), e[1] >= 10 && e[2] >= 3 && (b = document.querySelector("meta[name=viewport]")))) {
            if (-1 !== b.content.indexOf("user-scalable=no")) return !0;
            if (document.documentElement.scrollWidth <= window.outerWidth) return !0
        }
        return "none" === a.style.msTouchAction || "manipulation" === a.style.touchAction ? !0 : (f = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1], f >= 27 && (b = document.querySelector("meta[name=viewport]"), b && (-1 !== b.content.indexOf("user-scalable=no") || document.documentElement.scrollWidth <= window.outerWidth)) ? !0 : "none" === a.style.touchAction || "manipulation" === a.style.touchAction ? !0 : !1)
    }, a.attach = function(b, c) {
        return new a(b, c)
    }, "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function() {
        return a
    }) : "undefined" != typeof module && module.exports ? (module.exports = a.attach, module.exports.FastClick = a) : window.FastClick = a
}(),
function(a, b, c) {
    "use strict";

    function d(a, c, d) {
        e.directive(a, ["$parse", "$swipe", function(e, f) {
            return function(g, h, i) {
                function j(a) {
                    if (!k) return !1;
                    var b = Math.abs(a.y - k.y);
                    return a = (a.x - k.x) * c, l && 75 > b && a > 0 && a > 30 && .3 > b / a
                }
                var k, l, m = e(i[a]),
                    n = ["touch"];
                b.isDefined(i.ngSwipeDisableMouse) || n.push("mouse"), f.bind(h, {
                    start: function(a, b) {
                        k = a, l = !0
                    },
                    cancel: function(a) {
                        l = !1
                    },
                    end: function(a, b) {
                        j(a) && g.$apply(function() {
                            h.triggerHandler(d), m(g, {
                                $event: b
                            })
                        })
                    }
                }, n)
            }
        }])
    }
    var e = b.module("ngTouch", []);
    e.factory("$swipe", [function() {
        function a(a) {
            a = a.originalEvent || a;
            var b = a.touches && a.touches.length ? a.touches : [a];
            return a = a.changedTouches && a.changedTouches[0] || b[0], {
                x: a.clientX,
                y: a.clientY
            }
        }

        function c(a, c) {
            var e = [];
            return b.forEach(a, function(a) {
                (a = d[a][c]) && e.push(a)
            }), e.join(" ")
        }
        var d = {
            mouse: {
                start: "mousedown",
                move: "mousemove",
                end: "mouseup"
            },
            touch: {
                start: "touchstart",
                move: "touchmove",
                end: "touchend",
                cancel: "touchcancel"
            }
        };
        return {
            bind: function(b, d, e) {
                var f, g, h, i, j = !1;
                e = e || ["mouse", "touch"], b.on(c(e, "start"), function(b) {
                    h = a(b), j = !0, g = f = 0, i = h, d.start && d.start(h, b)
                });
                var k = c(e, "cancel");
                k && b.on(k, function(a) {
                    j = !1, d.cancel && d.cancel(a)
                }), b.on(c(e, "move"), function(b) {
                    if (j && h) {
                        var c = a(b);
                        f += Math.abs(c.x - i.x), g += Math.abs(c.y - i.y), i = c, 10 > f && 10 > g || (g > f ? (j = !1, d.cancel && d.cancel(b)) : (b.preventDefault(), d.move && d.move(c, b)))
                    }
                }), b.on(c(e, "end"), function(b) {
                    j && (j = !1, d.end && d.end(a(b), b))
                })
            }
        }
    }]), e.config(["$provide", function(a) {
        a.decorator("ngClickDirective", ["$delegate", function(a) {
            return a.shift(), a
        }])
    }]), e.directive("ngClick", ["$parse", "$timeout", "$rootElement", function(a, c, d) {
        function e(a, b, c) {
            for (var d = 0; d < a.length; d += 2) {
                var e = a[d + 1],
                    f = c;
                if (25 > Math.abs(a[d] - b) && 25 > Math.abs(e - f)) return a.splice(d, d + 2), !0
            }
            return !1
        }

        function f(a) {
            if (!(2500 < Date.now() - h)) {
                var c = a.touches && a.touches.length ? a.touches : [a],
                    d = c[0].clientX,
                    c = c[0].clientY;
                if (!(1 > d && 1 > c || j && j[0] === d && j[1] === c)) {
                    j && (j = null);
                    var f = a.target;
                    "label" === b.lowercase(f.nodeName || f[0] && f[0].nodeName) && (j = [d, c]), e(i, d, c) || (a.stopPropagation(), a.preventDefault(), a.target && a.target.blur && a.target.blur())
                }
            }
        }

        function g(a) {
            a = a.touches && a.touches.length ? a.touches : [a];
            var b = a[0].clientX,
                d = a[0].clientY;
            i.push(b, d), c(function() {
                for (var a = 0; a < i.length; a += 2)
                    if (i[a] == b && i[a + 1] == d) {
                        i.splice(a, a + 2);
                        break
                    }
            }, 2500, !1)
        }
        var h, i, j;
        return function(c, j, k) {
            var l, m, n, o, p = a(k.ngClick),
                q = !1;
            j.on("touchstart", function(a) {
                q = !0, l = a.target ? a.target : a.srcElement, 3 == l.nodeType && (l = l.parentNode), j.addClass("ng-click-active"), m = Date.now(), a = a.originalEvent || a, a = (a.touches && a.touches.length ? a.touches : [a])[0], n = a.clientX, o = a.clientY
            }), j.on("touchcancel", function(a) {
                q = !1, j.removeClass("ng-click-active")
            }), j.on("touchend", function(a) {
                var c = Date.now() - m,
                    p = a.originalEvent || a,
                    r = (p.changedTouches && p.changedTouches.length ? p.changedTouches : p.touches && p.touches.length ? p.touches : [p])[0],
                    p = r.clientX,
                    r = r.clientY,
                    s = Math.sqrt(Math.pow(p - n, 2) + Math.pow(r - o, 2));
                q && 750 > c && 12 > s && (i || (d[0].addEventListener("click", f, !0), d[0].addEventListener("touchstart", g, !0), i = []), h = Date.now(), e(i, p, r), l && l.blur(), b.isDefined(k.disabled) && !1 !== k.disabled || j.triggerHandler("click", [a])), q = !1, j.removeClass("ng-click-active")
            }), j.onclick = function(a) {}, j.on("click", function(a, b) {
                c.$apply(function() {
                    p(c, {
                        $event: b || a
                    })
                })
            }), j.on("mousedown", function(a) {
                j.addClass("ng-click-active")
            }), j.on("mousemove mouseup", function(a) {
                j.removeClass("ng-click-active")
            })
        }
    }]), d("ngSwipeLeft", -1, "swipeleft"), d("ngSwipeRight", 1, "swiperight")
}(window, window.angular), ! function(a, b) {
    "undefined" != typeof module && module.exports ? "undefined" == typeof angular ? (b(require("angular")), module.exports = "ngDialog") : (b(angular), module.exports = "ngDialog") : "function" == typeof define && define.amd ? define(["angular"], b) : b(a.angular)
}(this, function(a) {
    "use strict";
    var b = a.module("ngDialog", []),
        c = a.element,
        d = a.isDefined,
        e = (document.body || document.documentElement).style,
        f = d(e.animation) || d(e.WebkitAnimation) || d(e.MozAnimation) || d(e.MsAnimation) || d(e.OAnimation),
        g = "animationend webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend",
        h = "a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]",
        i = "ngdialog-disabled-animation",
        j = {
            html: !1,
            body: !1
        },
        k = {},
        l = [],
        m = !1;
    return b.provider("ngDialog", function() {
        var b = this.defaults = {
            className: "ngdialog-theme-default",
            disableAnimation: !1,
            plain: !1,
            showClose: !0,
            closeByDocument: !0,
            closeByEscape: !0,
            closeByNavigation: !1,
            appendTo: !1,
            preCloseCallback: !1,
            overlay: !0,
            cache: !0,
            trapFocus: !0,
            preserveFocus: !0,
            ariaAuto: !0,
            ariaRole: null,
            ariaLabelledById: null,
            ariaLabelledBySelector: null,
            ariaDescribedById: null,
            ariaDescribedBySelector: null
        };
        this.setForceHtmlReload = function(a) {
            j.html = a || !1
        }, this.setForceBodyReload = function(a) {
            j.body = a || !1
        }, this.setDefaults = function(c) {
            a.extend(b, c)
        };
        var d, e = 0,
            n = 0,
            o = {};
        this.$get = ["$document", "$templateCache", "$compile", "$q", "$http", "$rootScope", "$timeout", "$window", "$controller", "$injector", function(p, q, r, s, t, u, v, w, x, y) {
            var z = [],
                A = {
                    onDocumentKeydown: function(a) {
                        27 === a.keyCode && B.close("$escape")
                    },
                    activate: function(a) {
                        var b = a.data("$ngDialogOptions");
                        b.trapFocus && (a.on("keydown", A.onTrapFocusKeydown), z.body.on("keydown", A.onTrapFocusKeydown))
                    },
                    deactivate: function(a) {
                        a.off("keydown", A.onTrapFocusKeydown), z.body.off("keydown", A.onTrapFocusKeydown)
                    },
                    deactivateAll: function(b) {
                        a.forEach(b, function(b) {
                            var c = a.element(b);
                            A.deactivate(c)
                        })
                    },
                    setBodyPadding: function(a) {
                        var b = parseInt(z.body.css("padding-right") || 0, 10);
                        z.body.css("padding-right", b + a + "px"), z.body.data("ng-dialog-original-padding", b), u.$broadcast("ngDialog.setPadding", a)
                    },
                    resetBodyPadding: function() {
                        var a = z.body.data("ng-dialog-original-padding");
                        a ? z.body.css("padding-right", a + "px") : z.body.css("padding-right", ""), u.$broadcast("ngDialog.setPadding", 0)
                    },
                    performCloseDialog: function(a, b) {
                        var c = a.data("$ngDialogOptions"),
                            e = a.attr("id"),
                            h = k[e];
                        if (h) {
                            if ("undefined" != typeof w.Hammer) {
                                var i = h.hammerTime;
                                i.off("tap", d), i.destroy && i.destroy(), delete h.hammerTime
                            } else a.unbind("click");
                            1 === n && z.body.unbind("keydown", A.onDocumentKeydown), a.hasClass("ngdialog-closing") || (n -= 1);
                            var j = a.data("$ngDialogPreviousFocus");
                            j && j.focus && j.focus(), u.$broadcast("ngDialog.closing", a, b), n = 0 > n ? 0 : n, f && !c.disableAnimation ? (h.$destroy(), a.unbind(g).bind(g, function() {
                                A.closeDialogElement(a, b)
                            }).addClass("ngdialog-closing")) : (h.$destroy(), A.closeDialogElement(a, b)), o[e] && (o[e].resolve({
                                id: e,
                                value: b,
                                $dialog: a,
                                remainingDialogs: n
                            }), delete o[e]), k[e] && delete k[e], l.splice(l.indexOf(e), 1), l.length || (z.body.unbind("keydown", A.onDocumentKeydown), m = !1)
                        }
                    },
                    closeDialogElement: function(a, b) {
                        a.remove(), 0 === n && (z.html.removeClass("ngdialog-open"), z.body.removeClass("ngdialog-open"), A.resetBodyPadding()), u.$broadcast("ngDialog.closed", a, b)
                    },
                    closeDialog: function(b, c) {
                        var d = b.data("$ngDialogPreCloseCallback");
                        if (d && a.isFunction(d)) {
                            var e = d.call(b, c);
                            a.isObject(e) ? e.closePromise ? e.closePromise.then(function() {
                                A.performCloseDialog(b, c)
                            }) : e.then(function() {
                                A.performCloseDialog(b, c)
                            }, function() {}) : e !== !1 && A.performCloseDialog(b, c)
                        } else A.performCloseDialog(b, c)
                    },
                    onTrapFocusKeydown: function(b) {
                        var c, d = a.element(b.currentTarget);
                        if (d.hasClass("ngdialog")) c = d;
                        else if (c = A.getActiveDialog(), null === c) return;
                        var e = 9 === b.keyCode,
                            f = b.shiftKey === !0;
                        e && A.handleTab(c, b, f)
                    },
                    handleTab: function(a, b, c) {
                        var d = A.getFocusableElements(a);
                        if (0 === d.length) return void(document.activeElement && document.activeElement.blur());
                        var e = document.activeElement,
                            f = Array.prototype.indexOf.call(d, e),
                            g = -1 === f,
                            h = 0 === f,
                            i = f === d.length - 1,
                            j = !1;
                        c ? (g || h) && (d[d.length - 1].focus(), j = !0) : (g || i) && (d[0].focus(), j = !0), j && (b.preventDefault(), b.stopPropagation())
                    },
                    autoFocus: function(a) {
                        var b = a[0],
                            d = b.querySelector("*[autofocus]");
                        if (null === d || (d.focus(), document.activeElement !== d)) {
                            var e = A.getFocusableElements(a);
                            if (e.length > 0) return void e[0].focus();
                            var f = A.filterVisibleElements(b.querySelectorAll("h1,h2,h3,h4,h5,h6,p,span"));
                            if (f.length > 0) {
                                var g = f[0];
                                c(g).attr("tabindex", "-1").css("outline", "0"), g.focus()
                            }
                        }
                    },
                    getFocusableElements: function(a) {
                        var b = a[0],
                            c = b.querySelectorAll(h),
                            d = A.filterTabbableElements(c);
                        return A.filterVisibleElements(d)
                    },
                    filterTabbableElements: function(a) {
                        for (var b = [], d = 0; d < a.length; d++) {
                            var e = a[d];
                            "-1" !== c(e).attr("tabindex") && b.push(e)
                        }
                        return b
                    },
                    filterVisibleElements: function(a) {
                        for (var b = [], c = 0; c < a.length; c++) {
                            var d = a[c];
                            (d.offsetWidth > 0 || d.offsetHeight > 0) && b.push(d)
                        }
                        return b
                    },
                    getActiveDialog: function() {
                        var a = document.querySelectorAll(".ngdialog");
                        return 0 === a.length ? null : c(a[a.length - 1])
                    },
                    applyAriaAttributes: function(a, b) {
                        if (b.ariaAuto) {
                            if (!b.ariaRole) {
                                var c = A.getFocusableElements(a).length > 0 ? "dialog" : "alertdialog";
                                b.ariaRole = c
                            }
                            b.ariaLabelledBySelector || (b.ariaLabelledBySelector = "h1,h2,h3,h4,h5,h6"), b.ariaDescribedBySelector || (b.ariaDescribedBySelector = "article,section,p")
                        }
                        b.ariaRole && a.attr("role", b.ariaRole), A.applyAriaAttribute(a, "aria-labelledby", b.ariaLabelledById, b.ariaLabelledBySelector), A.applyAriaAttribute(a, "aria-describedby", b.ariaDescribedById, b.ariaDescribedBySelector)
                    },
                    applyAriaAttribute: function(a, b, d, e) {
                        if (d && a.attr(b, d), e) {
                            var f = a.attr("id"),
                                g = a[0].querySelector(e);
                            if (!g) return;
                            var h = f + "-" + b;
                            return c(g).attr("id", h), a.attr(b, h), h
                        }
                    },
                    detectUIRouter: function() {
                        try {
                            return a.module("ui.router"), !0
                        } catch (b) {
                            return !1
                        }
                    },
                    getRouterLocationEventName: function() {
                        return A.detectUIRouter() ? "$stateChangeSuccess" : "$locationChangeSuccess"
                    }
                },
                B = {
                    __PRIVATE__: A,
                    open: function(f) {
                        function g(a, b) {
                            return u.$broadcast("ngDialog.templateLoading", a), t.get(a, b || {}).then(function(b) {
                                return u.$broadcast("ngDialog.templateLoaded", a), b.data || ""
                            })
                        }

                        function h(b) {
                            return b ? a.isString(b) && j.plain ? b : "boolean" != typeof j.cache || j.cache ? g(b, {
                                cache: q
                            }) : g(b, {
                                cache: !1
                            }) : "Empty template"
                        }
                        var j = a.copy(b),
                            p = ++e,
                            C = "ngdialog" + p;
                        l.push(C), f = f || {}, a.extend(j, f);
                        var D;
                        o[C] = D = s.defer();
                        var E;
                        k[C] = E = a.isObject(j.scope) ? j.scope.$new() : u.$new();
                        var F, G, H = a.extend({}, j.resolve);
                        return a.forEach(H, function(b, c) {
                            H[c] = a.isString(b) ? y.get(b) : y.invoke(b, null, null, c)
                        }), s.all({
                            template: h(j.template || j.templateUrl),
                            locals: s.all(H)
                        }).then(function(b) {
                            var e = b.template,
                                f = b.locals;
                            j.showClose && (e += '<div class="ngdialog-close"></div>');
                            var g = j.overlay ? "" : " ngdialog-no-overlay";
                            if (F = c('<div id="ngdialog' + p + '" class="ngdialog' + g + '"></div>'), F.html(j.overlay ? '<div class="ngdialog-overlay"></div><div class="ngdialog-content" role="document">' + e + "</div>" : '<div class="ngdialog-content" role="document">' + e + "</div>"), F.data("$ngDialogOptions", j), E.ngDialogId = C, j.data && a.isString(j.data)) {
                                var h = j.data.replace(/^\s*/, "")[0];
                                E.ngDialogData = "{" === h || "[" === h ? a.fromJson(j.data) : j.data, E.ngDialogData.ngDialogId = C
                            } else j.data && a.isObject(j.data) && (E.ngDialogData = j.data, E.ngDialogData.ngDialogId = C);
                            if (j.className && F.addClass(j.className), j.disableAnimation && F.addClass(i), G = j.appendTo && a.isString(j.appendTo) ? a.element(document.querySelector(j.appendTo)) : z.body, A.applyAriaAttributes(F, j), j.preCloseCallback) {
                                var k;
                                a.isFunction(j.preCloseCallback) ? k = j.preCloseCallback : a.isString(j.preCloseCallback) && E && (a.isFunction(E[j.preCloseCallback]) ? k = E[j.preCloseCallback] : E.$parent && a.isFunction(E.$parent[j.preCloseCallback]) ? k = E.$parent[j.preCloseCallback] : u && a.isFunction(u[j.preCloseCallback]) && (k = u[j.preCloseCallback])), k && F.data("$ngDialogPreCloseCallback", k)
                            }
                            if (E.closeThisDialog = function(a) {
                                    A.closeDialog(F, a)
                                }, j.controller && (a.isString(j.controller) || a.isArray(j.controller) || a.isFunction(j.controller))) {
                                var l;
                                j.controllerAs && a.isString(j.controllerAs) && (l = j.controllerAs);
                                var o = x(j.controller, a.extend(f, {
                                    $scope: E,
                                    $element: F
                                }), null, l);
                                F.data("$ngDialogControllerController", o)
                            }
                            if (v(function() {
                                    var a = document.querySelectorAll(".ngdialog");
                                    A.deactivateAll(a), r(F)(E);
                                    var b = w.innerWidth - z.body.prop("clientWidth");
                                    z.html.addClass("ngdialog-open"), z.body.addClass("ngdialog-open");
                                    var c = b - (w.innerWidth - z.body.prop("clientWidth"));
                                    c > 0 && A.setBodyPadding(c), G.append(F), A.activate(F), j.trapFocus && A.autoFocus(F), j.name ? u.$broadcast("ngDialog.opened", {
                                        dialog: F,
                                        name: j.name
                                    }) : u.$broadcast("ngDialog.opened", F)
                                }), m || (z.body.bind("keydown", A.onDocumentKeydown), m = !0), j.closeByNavigation) {
                                var q = A.getRouterLocationEventName();
                                u.$on(q, function() {
                                    A.closeDialog(F)
                                })
                            }
                            if (j.preserveFocus && F.data("$ngDialogPreviousFocus", document.activeElement), d = function(a) {
                                    var b = j.closeByDocument ? c(a.target).hasClass("ngdialog-overlay") : !1,
                                        d = c(a.target).hasClass("ngdialog-close");
                                    (b || d) && B.close(F.attr("id"), d ? "$closeButton" : "$document")
                                }, "undefined" != typeof w.Hammer) {
                                var s = E.hammerTime = w.Hammer(F[0]);
                                s.on("tap", d)
                            } else F.bind("click", d);
                            return n += 1, B
                        }), {
                            id: C,
                            closePromise: D.promise,
                            close: function(a) {
                                A.closeDialog(F, a)
                            }
                        }
                    },
                    openConfirm: function(b) {
                        var d = s.defer(),
                            e = {
                                closeByEscape: !1,
                                closeByDocument: !1
                            };
                        a.extend(e, b), e.scope = a.isObject(e.scope) ? e.scope.$new() : u.$new(), e.scope.confirm = function(a) {
                            d.resolve(a);
                            var b = c(document.getElementById(f.id));
                            A.performCloseDialog(b, a)
                        };
                        var f = B.open(e);
                        return f.closePromise.then(function(a) {
                            return a ? d.reject(a.value) : d.reject()
                        }), d.promise
                    },
                    isOpen: function(a) {
                        var b = c(document.getElementById(a));
                        return b.length > 0
                    },
                    close: function(a, b) {
                        var d = c(document.getElementById(a));
                        if (d.length) A.closeDialog(d, b);
                        else if ("$escape" === a) {
                            var e = l[l.length - 1];
                            d = c(document.getElementById(e)), d.data("$ngDialogOptions").closeByEscape && A.closeDialog(d, "$escape")
                        } else B.closeAll(b);
                        return B
                    },
                    closeAll: function(a) {
                        for (var b = document.querySelectorAll(".ngdialog"), d = b.length - 1; d >= 0; d--) {
                            var e = b[d];
                            A.closeDialog(c(e), a)
                        }
                    },
                    getOpenDialogs: function() {
                        return l
                    },
                    getDefaults: function() {
                        return b
                    }
                };
            return a.forEach(["html", "body"], function(a) {
                if (z[a] = p.find(a), j[a]) {
                    var b = A.getRouterLocationEventName();
                    u.$on(b, function() {
                        z[a] = p.find(a)
                    })
                }
            }), B
        }]
    }), b.directive("ngDialog", ["ngDialog", function(b) {
        return {
            restrict: "A",
            scope: {
                ngDialogScope: "="
            },
            link: function(c, d, e) {
                d.on("click", function(d) {
                    d.preventDefault();
                    var f = a.isDefined(c.ngDialogScope) ? c.ngDialogScope : "noScope";
                    a.isDefined(e.ngDialogClosePrevious) && b.close(e.ngDialogClosePrevious);
                    var g = b.getDefaults();
                    b.open({
                        template: e.ngDialog,
                        className: e.ngDialogClass || g.className,
                        controller: e.ngDialogController,
                        controllerAs: e.ngDialogControllerAs,
                        bindToController: e.ngDialogBindToController,
                        scope: f,
                        data: e.ngDialogData,
                        showClose: "false" === e.ngDialogShowClose ? !1 : "true" === e.ngDialogShowClose ? !0 : g.showClose,
                        closeByDocument: "false" === e.ngDialogCloseByDocument ? !1 : "true" === e.ngDialogCloseByDocument ? !0 : g.closeByDocument,
                        closeByEscape: "false" === e.ngDialogCloseByEscape ? !1 : "true" === e.ngDialogCloseByEscape ? !0 : g.closeByEscape,
                        overlay: "false" === e.ngDialogOverlay ? !1 : "true" === e.ngDialogOverlay ? !0 : g.overlay,
                        preCloseCallback: e.ngDialogPreCloseCallback || g.preCloseCallback
                    })
                })
            }
        }
    }]), b
}), angular.module("angular-carousel", ["ngTouch", "angular-carousel.shifty"]), angular.module("angular-carousel").directive("rnCarouselAutoSlide", ["$interval", function(a) {
        return {
            restrict: "A",
            link: function(b, c, d) {
                var e = function() {
                        b.autoSlider && (a.cancel(b.autoSlider), b.autoSlider = null)
                    },
                    f = function() {
                        b.autoSlide()
                    };
                b.$watch("carouselIndex", f), d.hasOwnProperty("rnCarouselPauseOnHover") && "false" !== d.rnCarouselPauseOnHover && (c.on("mouseenter", e), c.on("mouseleave", f)), b.$on("$destroy", function() {
                    e(), c.off("mouseenter", e), c.off("mouseleave", f)
                })
            }
        }
    }]), angular.module("angular-carousel").directive("rnCarouselIndicators", ["$parse", function(a) {
        return {
            restrict: "A",
            scope: {
                slides: "=",
                index: "=rnCarouselIndex"
            },
            templateUrl: "carousel-indicators.html",
            link: function(b, c, d) {
                var e = a(d.rnCarouselIndex);
                b.goToSlide = function(a) {
                    e.assign(b.$parent.$parent, a)
                }
            }
        }
    }]), angular.module("angular-carousel").run(["$templateCache", function(a) {
        a.put("carousel-indicators.html", '<div class="rn-carousel-indicator">\n<span ng-repeat="slide in slides" ng-class="{active: $index==index}" ng-click="goToSlide($index)">â—</span></div>')
    }]),
    function() {
        "use strict";
        angular.module("angular-carousel").service("DeviceCapabilities", function() {
            function a() {
                var a = "transform",
                    b = "webkitTransform";
                return "undefined" != typeof document.body.style[a] ? ["webkit", "moz", "o", "ms"].every(function(b) {
                    var c = "-" + b + "-transform";
                    return "undefined" != typeof document.body.style[c] ? (a = c, !1) : !0
                }) : a = "undefined" != typeof document.body.style[b] ? "-webkit-transform" : void 0, a
            }

            function b() {
                var a, b = document.createElement("p"),
                    c = {
                        webkitTransform: "-webkit-transform",
                        msTransform: "-ms-transform",
                        transform: "transform"
                    };
                document.body.insertBefore(b, null);
                for (var d in c) void 0 !== b.style[d] && (b.style[d] = "translate3d(1px,1px,1px)", a = window.getComputedStyle(b).getPropertyValue(c[d]));
                return document.body.removeChild(b), void 0 !== a && a.length > 0 && "none" !== a
            }
            return {
                has3d: b(),
                transformProperty: a()
            }
        }).service("computeCarouselSlideStyle", ["DeviceCapabilities", function(a) {
            return function(b, c, d) {
                var e, f = {
                        display: "inline-block"
                    },
                    g = 100 * b + c,
                    h = a.has3d ? "translate3d(" + g + "%, 0, 0)" : "translate3d(" + g + "%, 0)",
                    i = (100 - Math.abs(g)) / 100;
                if (a.transformProperty)
                    if ("fadeAndSlide" == d) f[a.transformProperty] = h, e = 0, Math.abs(g) < 100 && (e = .3 + .7 * i), f.opacity = e;
                    else if ("hexagon" == d) {
                    var j = 100,
                        k = 0,
                        l = 60 * (i - 1);
                    j = -100 * b > c ? 100 : 0, k = -100 * b > c ? l : -l, f[a.transformProperty] = h + " rotateY(" + k + "deg)", f[a.transformProperty + "-origin"] = j + "% 50%"
                } else if ("zoom" == d) {
                    f[a.transformProperty] = h;
                    var m = 1;
                    Math.abs(g) < 100 && (m = 1 + 2 * (1 - i)), f[a.transformProperty] += " scale(" + m + ")", f[a.transformProperty + "-origin"] = "50% 50%", e = 0, Math.abs(g) < 100 && (e = .3 + .7 * i), f.opacity = e
                } else f[a.transformProperty] = h;
                else f["margin-left"] = g + "%";
                return f
            }
        }]).service("createStyleString", function() {
            return function(a) {
                var b = [];
                return angular.forEach(a, function(a, c) {
                    b.push(c + ":" + a)
                }), b.join(";")
            }
        }).directive("rnCarousel", ["$swipe", "$window", "$document", "$parse", "$compile", "$timeout", "$interval", "computeCarouselSlideStyle", "createStyleString", "Tweenable", function(a, b, c, d, e, f, g, h, i, j) {
            function k(a, b, c) {
                var d = c;
                return a.every(function(a, c) {
                    return angular.equals(a, b) ? (d = c, !1) : !0
                }), d
            }
            var l = 0;
            return b.requestAnimationFrame || b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame, {
                restrict: "A",
                scope: !0,
                compile: function(m, n) {
                    var o, p, q = m[0].querySelector("li"),
                        r = q ? q.attributes : [],
                        s = !1,
                        t = !1;
                    return ["ng-repeat", "data-ng-repeat", "ng:repeat", "x-ng-repeat"].every(function(a) {
                            var b = r[a];
                            if (angular.isDefined(b)) {
                                var c = b.value.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/),
                                    d = c[3];
                                if (o = c[1], p = c[2], o) return angular.isDefined(n.rnCarouselBuffered) && (t = !0, b.value = o + " in " + p + "|carouselSlice:carouselBufferIndex:carouselBufferSize", d && (b.value += " track by " + d)), s = !0, !1
                            }
                            return !0
                        }),
                        function(m, o, q) {
                            function r() {
                                return o[0].querySelectorAll("ul[rn-carousel] > li")
                            }

                            function u(a) {
                                N = !0, D({
                                    x: a.clientX,
                                    y: a.clientY
                                }, a)
                            }

                            function v(a) {
                                var b = 100 * m.carouselBufferIndex + a;
                                angular.forEach(r(), function(a, c) {
                                    a.style.cssText = i(h(c, b, K.transitionType))
                                })
                            }

                            function w(a, b) {
                                if (void 0 === a && (a = m.carouselIndex), b = b || {}, b.animate === !1 || "none" === K.transitionType) return S = !1, M = -100 * a, m.carouselIndex = a, void E();
                                S = !0;
                                var c = new j;
                                c.tween({
                                    from: {
                                        x: M
                                    },
                                    to: {
                                        x: -100 * a
                                    },
                                    duration: K.transitionDuration,
                                    easing: K.transitionEasing,
                                    step: function(a) {
                                        v(a.x)
                                    },
                                    finish: function() {
                                        m.$apply(function() {
                                            m.carouselIndex = a, M = -100 * a, E(), f(function() {
                                                S = !1
                                            }, 0, !1)
                                        })
                                    }
                                })
                            }

                            function x() {
                                var a = o[0].getBoundingClientRect();
                                return a.width ? a.width : a.right - a.left
                            }

                            function y() {
                                P = x()
                            }

                            function z() {
                                R || (R = !0, c.bind("mouseup", u))
                            }

                            function A() {
                                R && (R = !1, c.unbind("mouseup", u))
                            }

                            function B(a) {
                                return S || O.length <= 1 ? void 0 : (y(), Q = o[0].querySelector("li").getBoundingClientRect().left, G = !0, H = a.x, !1)
                            }

                            function C(a) {
                                var b, c;
                                if (z(), G && (b = a.x, c = H - b, c > 2 || -2 > c)) {
                                    N = !0;
                                    var d = M + 100 * -c / P;
                                    v(d)
                                }
                                return !1
                            }

                            function D(a, b) {
                                if ((!b || N) && (A(), G = !1, N = !1, I = H - a.x, 0 !== I && !S))
                                    if (M += 100 * -I / P, K.isSequential) {
                                        var c = K.moveTreshold * P,
                                            e = -I,
                                            f = -Math[e >= 0 ? "ceil" : "floor"](e / P),
                                            g = Math.abs(e) > c;
                                        O && f + m.carouselIndex >= O.length && (f = O.length - 1 - m.carouselIndex), f + m.carouselIndex < 0 && (f = -m.carouselIndex);
                                        var h = g ? f : 0;
                                        I = m.carouselIndex + h, w(I), void 0 !== q.rnCarouselOnInfiniteScrollRight && 0 === f && 0 !== m.carouselIndex && (d(q.rnCarouselOnInfiniteScrollRight)(m), w(0)), void 0 !== q.rnCarouselOnInfiniteScrollLeft && 0 === f && 0 === m.carouselIndex && 0 === h && (d(q.rnCarouselOnInfiniteScrollLeft)(m), w(O.length))
                                    } else m.$apply(function() {
                                        m.carouselIndex = parseInt(-M / 100, 10), E()
                                    })
                            }

                            function E() {
                                var a = 0,
                                    b = (m.carouselBufferSize - 1) / 2;
                                t ? (a = m.carouselIndex <= b ? 0 : O && O.length < m.carouselBufferSize ? 0 : O && m.carouselIndex > O.length - m.carouselBufferSize ? O.length - m.carouselBufferSize : m.carouselIndex - b, m.carouselBufferIndex = a, f(function() {
                                    v(M)
                                }, 0, !1)) : f(function() {
                                    v(M)
                                }, 0, !1)
                            }

                            function F() {
                                y(), w()
                            }
                            l++;
                            var G, H, I, J = {
                                    transitionType: q.rnCarouselTransition || "slide",
                                    transitionEasing: q.rnCarouselEasing || "easeTo",
                                    transitionDuration: parseInt(q.rnCarouselDuration, 10) || 300,
                                    isSequential: !0,
                                    autoSlideDuration: 3,
                                    bufferSize: 5,
                                    moveTreshold: .1,
                                    defaultIndex: 0
                                },
                                K = angular.extend({}, J),
                                L = !1,
                                M = 0,
                                N = !1,
                                O = [],
                                P = null,
                                Q = null,
                                R = !1,
                                S = !1;
                            "true" !== q.rnSwipeDisabled && a.bind(o, {
                                start: B,
                                move: C,
                                end: D,
                                cancel: function(a) {
                                    D({}, a)
                                }
                            }), m.nextSlide = function(a) {
                                var b = m.carouselIndex + 1;
                                b > O.length - 1 && (b = 0), S || w(b, a)
                            }, m.prevSlide = function(a) {
                                var b = m.carouselIndex - 1;
                                0 > b && (b = O.length - 1), w(b, a)
                            };
                            var T = !0;
                            if (m.carouselIndex = 0, s || (O = [], angular.forEach(r(), function(a, b) {
                                    O.push({
                                        id: b
                                    })
                                })), void 0 !== q.rnCarouselControls) {
                                var U = (s ? m.$eval(p.replace("::", "")).length : O.length) > 1 ? angular.isDefined(n.rnCarouselControlsAllowLoop) : !1,
                                    V = s ? "(" + p.replace("::", "") + ").length - 1" : O.length - 1,
                                    W = '<div class="rn-carousel-controls">\n  <span class="rn-carousel-control rn-carousel-control-prev" ng-click="prevSlide()" ng-if="carouselIndex > 0 || ' + U + '"></span>\n  <span class="rn-carousel-control rn-carousel-control-next" ng-click="nextSlide()" ng-if="carouselIndex < ' + V + " || " + U + '"></span>\n</div>';
                                o.parent().append(e(angular.element(W))(m))
                            }
                            if (void 0 !== q.rnCarouselAutoSlide) {
                                var X = parseInt(q.rnCarouselAutoSlide, 10) || K.autoSlideDuration;
                                m.autoSlide = function() {
                                    m.autoSlider && (g.cancel(m.autoSlider), m.autoSlider = null), m.autoSlider = g(function() {
                                        S || G || m.nextSlide()
                                    }, 1e3 * X)
                                }
                            }
                            if (q.rnCarouselDefaultIndex) {
                                var Y = d(q.rnCarouselDefaultIndex);
                                K.defaultIndex = Y(m.$parent) || 0
                            }
                            if (q.rnCarouselIndex) {
                                var Z = function(a) {
                                        $.assign(m.$parent, a)
                                    },
                                    $ = d(q.rnCarouselIndex);
                                angular.isFunction($.assign) ? (m.$watch("carouselIndex", function(a) {
                                    Z(a)
                                }), m.$parent.$watch($, function(a) {
                                    void 0 !== a && null !== a && (O && O.length > 0 && a >= O.length ? (a = O.length - 1, Z(a)) : O && 0 > a && (a = 0, Z(a)), S || w(a, {
                                        animate: !T
                                    }), T = !1)
                                }), L = !0, K.defaultIndex && w(K.defaultIndex, {
                                    animate: !T
                                })) : isNaN(q.rnCarouselIndex) || w(parseInt(q.rnCarouselIndex, 10), {
                                    animate: !1
                                })
                            } else w(K.defaultIndex, {
                                animate: !T
                            }), T = !1;
                            if (q.rnCarouselLocked && m.$watch(q.rnCarouselLocked, function(a) {
                                    S = a === !0 ? !0 : !1
                                }), s) {
                                var _ = void 0 !== q.rnCarouselDeepWatch;
                                m[_ ? "$watch" : "$watchCollection"](p, function(a, b) {
                                    if (O = a, _ && angular.isArray(a)) {
                                        var c = b[m.carouselIndex],
                                            d = k(a, c, m.carouselIndex);
                                        w(d, {
                                            animate: !1
                                        })
                                    } else w(m.carouselIndex, {
                                        animate: !1
                                    })
                                }, !0)
                            }
                            m.$on("$destroy", function() {
                                A()
                            }), m.carouselBufferIndex = 0, m.carouselBufferSize = K.bufferSize;
                            var aa = angular.element(b);
                            aa.bind("orientationchange", F), aa.bind("resize", F), m.$on("$destroy", function() {
                                A(), aa.unbind("orientationchange", F), aa.unbind("resize", F)
                            })
                        }
                }
            }
        }])
    }(), angular.module("angular-carousel.shifty", []).factory("Tweenable", function() {
        return function(a) {
            var b = function() {
                "use strict";

                function b() {}

                function c(a, b) {
                    var c;
                    for (c in a) Object.hasOwnProperty.call(a, c) && b(c)
                }

                function d(a, b) {
                    return c(b, function(c) {
                        a[c] = b[c]
                    }), a
                }

                function e(a, b) {
                    c(b, function(c) {
                        "undefined" == typeof a[c] && (a[c] = b[c])
                    })
                }

                function f(a, b, c, d, e, f, h) {
                    var i, j = (a - f) / e;
                    for (i in b) b.hasOwnProperty(i) && (b[i] = g(c[i], d[i], l[h[i]], j));
                    return b
                }

                function g(a, b, c, d) {
                    return a + (b - a) * c(d)
                }

                function h(a, b) {
                    var d = k.prototype.filter,
                        e = a._filterArgs;
                    c(d, function(c) {
                        "undefined" != typeof d[c][b] && d[c][b].apply(a, e)
                    })
                }

                function i(a, b, c, d, e, g, i, j, k) {
                    s = b + c, t = Math.min(r(), s), u = t >= s, v = c - (s - t), a.isPlaying() && !u ? (a._scheduleId = k(a._timeoutHandler, p), h(a, "beforeTween"), f(t, d, e, g, c, b, i), h(a, "afterTween"), j(d, a._attachment, v)) : u && (j(g, a._attachment, v), a.stop(!0))
                }

                function j(a, b) {
                    var d = {};
                    return "string" == typeof b ? c(a, function(a) {
                        d[a] = b
                    }) : c(a, function(a) {
                        d[a] || (d[a] = b[a] || n)
                    }), d
                }

                function k(a, b) {
                    this._currentState = a || {}, this._configured = !1, this._scheduleFunction = m, "undefined" != typeof b && this.setConfig(b)
                }
                var l, m, n = "linear",
                    o = 500,
                    p = 1e3 / 60,
                    q = Date.now ? Date.now : function() {
                        return +new Date
                    },
                    r = "undefined" != typeof SHIFTY_DEBUG_NOW ? SHIFTY_DEBUG_NOW : q;
                m = "undefined" != typeof window ? window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || window.mozCancelRequestAnimationFrame && window.mozRequestAnimationFrame || setTimeout : setTimeout;
                var s, t, u, v;
                return k.prototype.tween = function(a) {
                    return this._isTweening ? this : (void 0 === a && this._configured || this.setConfig(a), this._timestamp = r(), this._start(this.get(), this._attachment), this.resume())
                }, k.prototype.setConfig = function(a) {
                    a = a || {}, this._configured = !0, this._attachment = a.attachment, this._pausedAtTime = null, this._scheduleId = null, this._start = a.start || b, this._step = a.step || b, this._finish = a.finish || b, this._duration = a.duration || o, this._currentState = a.from || this.get(), this._originalState = this.get(), this._targetState = a.to || this.get();
                    var c = this._currentState,
                        d = this._targetState;
                    return e(d, c),
                        this._easing = j(c, a.easing || n), this._filterArgs = [c, this._originalState, d, this._easing], h(this, "tweenCreated"), this
                }, k.prototype.get = function() {
                    return d({}, this._currentState)
                }, k.prototype.set = function(a) {
                    this._currentState = a
                }, k.prototype.pause = function() {
                    return this._pausedAtTime = r(), this._isPaused = !0, this
                }, k.prototype.resume = function() {
                    this._isPaused && (this._timestamp += r() - this._pausedAtTime), this._isPaused = !1, this._isTweening = !0;
                    var a = this;
                    return this._timeoutHandler = function() {
                        i(a, a._timestamp, a._duration, a._currentState, a._originalState, a._targetState, a._easing, a._step, a._scheduleFunction)
                    }, this._timeoutHandler(), this
                }, k.prototype.seek = function(a) {
                    return this._timestamp = r() - a, this.isPlaying() || (this._isTweening = !0, this._isPaused = !1, i(this, this._timestamp, this._duration, this._currentState, this._originalState, this._targetState, this._easing, this._step, this._scheduleFunction), this._timeoutHandler(), this.pause()), this
                }, k.prototype.stop = function(c) {
                    return this._isTweening = !1, this._isPaused = !1, this._timeoutHandler = b, (a.cancelAnimationFrame || a.webkitCancelAnimationFrame || a.oCancelAnimationFrame || a.msCancelAnimationFrame || a.mozCancelRequestAnimationFrame || a.clearTimeout)(this._scheduleId), c && (d(this._currentState, this._targetState), h(this, "afterTweenEnd"), this._finish.call(this, this._currentState, this._attachment)), this
                }, k.prototype.isPlaying = function() {
                    return this._isTweening && !this._isPaused
                }, k.prototype.setScheduleFunction = function(a) {
                    this._scheduleFunction = a
                }, k.prototype.dispose = function() {
                    var a;
                    for (a in this) this.hasOwnProperty(a) && delete this[a]
                }, k.prototype.filter = {}, k.prototype.formula = {
                    linear: function(a) {
                        return a
                    }
                }, l = k.prototype.formula, d(k, {
                    now: r,
                    each: c,
                    tweenProps: f,
                    tweenProp: g,
                    applyFilter: h,
                    shallowCopy: d,
                    defaults: e,
                    composeEasingObject: j
                }), a.Tweenable = k, k
            }();
            ! function() {
                b.shallowCopy(b.prototype.formula, {
                    easeInQuad: function(a) {
                        return Math.pow(a, 2)
                    },
                    easeOutQuad: function(a) {
                        return -(Math.pow(a - 1, 2) - 1)
                    },
                    easeInOutQuad: function(a) {
                        return (a /= .5) < 1 ? .5 * Math.pow(a, 2) : -.5 * ((a -= 2) * a - 2)
                    },
                    easeInCubic: function(a) {
                        return Math.pow(a, 3)
                    },
                    easeOutCubic: function(a) {
                        return Math.pow(a - 1, 3) + 1
                    },
                    easeInOutCubic: function(a) {
                        return (a /= .5) < 1 ? .5 * Math.pow(a, 3) : .5 * (Math.pow(a - 2, 3) + 2)
                    },
                    easeInQuart: function(a) {
                        return Math.pow(a, 4)
                    },
                    easeOutQuart: function(a) {
                        return -(Math.pow(a - 1, 4) - 1)
                    },
                    easeInOutQuart: function(a) {
                        return (a /= .5) < 1 ? .5 * Math.pow(a, 4) : -.5 * ((a -= 2) * Math.pow(a, 3) - 2)
                    },
                    easeInQuint: function(a) {
                        return Math.pow(a, 5)
                    },
                    easeOutQuint: function(a) {
                        return Math.pow(a - 1, 5) + 1
                    },
                    easeInOutQuint: function(a) {
                        return (a /= .5) < 1 ? .5 * Math.pow(a, 5) : .5 * (Math.pow(a - 2, 5) + 2)
                    },
                    easeInSine: function(a) {
                        return -Math.cos(a * (Math.PI / 2)) + 1
                    },
                    easeOutSine: function(a) {
                        return Math.sin(a * (Math.PI / 2))
                    },
                    easeInOutSine: function(a) {
                        return -.5 * (Math.cos(Math.PI * a) - 1)
                    },
                    easeInExpo: function(a) {
                        return 0 === a ? 0 : Math.pow(2, 10 * (a - 1))
                    },
                    easeOutExpo: function(a) {
                        return 1 === a ? 1 : -Math.pow(2, -10 * a) + 1
                    },
                    easeInOutExpo: function(a) {
                        return 0 === a ? 0 : 1 === a ? 1 : (a /= .5) < 1 ? .5 * Math.pow(2, 10 * (a - 1)) : .5 * (-Math.pow(2, -10 * --a) + 2)
                    },
                    easeInCirc: function(a) {
                        return -(Math.sqrt(1 - a * a) - 1)
                    },
                    easeOutCirc: function(a) {
                        return Math.sqrt(1 - Math.pow(a - 1, 2))
                    },
                    easeInOutCirc: function(a) {
                        return (a /= .5) < 1 ? -.5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
                    },
                    easeOutBounce: function(a) {
                        return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
                    },
                    easeInBack: function(a) {
                        var b = 1.70158;
                        return a * a * ((b + 1) * a - b)
                    },
                    easeOutBack: function(a) {
                        var b = 1.70158;
                        return (a -= 1) * a * ((b + 1) * a + b) + 1
                    },
                    easeInOutBack: function(a) {
                        var b = 1.70158;
                        return (a /= .5) < 1 ? .5 * a * a * (((b *= 1.525) + 1) * a - b) : .5 * ((a -= 2) * a * (((b *= 1.525) + 1) * a + b) + 2)
                    },
                    elastic: function(a) {
                        return -1 * Math.pow(4, -8 * a) * Math.sin(2 * (6 * a - 1) * Math.PI / 2) + 1
                    },
                    swingFromTo: function(a) {
                        var b = 1.70158;
                        return (a /= .5) < 1 ? .5 * a * a * (((b *= 1.525) + 1) * a - b) : .5 * ((a -= 2) * a * (((b *= 1.525) + 1) * a + b) + 2)
                    },
                    swingFrom: function(a) {
                        var b = 1.70158;
                        return a * a * ((b + 1) * a - b)
                    },
                    swingTo: function(a) {
                        var b = 1.70158;
                        return (a -= 1) * a * ((b + 1) * a + b) + 1
                    },
                    bounce: function(a) {
                        return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
                    },
                    bouncePast: function(a) {
                        return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 2 - (7.5625 * (a -= 1.5 / 2.75) * a + .75) : 2.5 / 2.75 > a ? 2 - (7.5625 * (a -= 2.25 / 2.75) * a + .9375) : 2 - (7.5625 * (a -= 2.625 / 2.75) * a + .984375)
                    },
                    easeFromTo: function(a) {
                        return (a /= .5) < 1 ? .5 * Math.pow(a, 4) : -.5 * ((a -= 2) * Math.pow(a, 3) - 2)
                    },
                    easeFrom: function(a) {
                        return Math.pow(a, 4)
                    },
                    easeTo: function(a) {
                        return Math.pow(a, .25)
                    }
                })
            }(),
            function() {
                function a(a, b, c, d, e, f) {
                    function g(a) {
                        return ((n * a + o) * a + p) * a
                    }

                    function h(a) {
                        return ((q * a + r) * a + s) * a
                    }

                    function i(a) {
                        return (3 * n * a + 2 * o) * a + p
                    }

                    function j(a) {
                        return 1 / (200 * a)
                    }

                    function k(a, b) {
                        return h(m(a, b))
                    }

                    function l(a) {
                        return a >= 0 ? a : 0 - a
                    }

                    function m(a, b) {
                        var c, d, e, f, h, j;
                        for (e = a, j = 0; 8 > j; j++) {
                            if (f = g(e) - a, l(f) < b) return e;
                            if (h = i(e), l(h) < 1e-6) break;
                            e -= f / h
                        }
                        if (c = 0, d = 1, e = a, c > e) return c;
                        if (e > d) return d;
                        for (; d > c;) {
                            if (f = g(e), l(f - a) < b) return e;
                            a > f ? c = e : d = e, e = .5 * (d - c) + c
                        }
                        return e
                    }
                    var n = 0,
                        o = 0,
                        p = 0,
                        q = 0,
                        r = 0,
                        s = 0;
                    return p = 3 * b, o = 3 * (d - b) - p, n = 1 - p - o, s = 3 * c, r = 3 * (e - c) - s, q = 1 - s - r, k(a, j(f))
                }

                function c(b, c, d, e) {
                    return function(f) {
                        return a(f, b, c, d, e, 1)
                    }
                }
                b.setBezierFunction = function(a, d, e, f, g) {
                    var h = c(d, e, f, g);
                    return h.x1 = d, h.y1 = e, h.x2 = f, h.y2 = g, b.prototype.formula[a] = h
                }, b.unsetBezierFunction = function(a) {
                    delete b.prototype.formula[a]
                }
            }(),
            function() {
                function a(a, c, d, e, f) {
                    return b.tweenProps(e, c, a, d, 1, 0, f)
                }
                var c = new b;
                c._filterArgs = [], b.interpolate = function(d, e, f, g) {
                    var h = b.shallowCopy({}, d),
                        i = b.composeEasingObject(d, g || "linear");
                    c.set({});
                    var j = c._filterArgs;
                    j.length = 0, j[0] = h, j[1] = d, j[2] = e, j[3] = i, b.applyFilter(c, "tweenCreated"), b.applyFilter(c, "beforeTween");
                    var k = a(d, h, e, f, i);
                    return b.applyFilter(c, "afterTween"), k
                }
            }(),
            function(a) {
                function b(a, b) {
                    B.length = 0;
                    var c, d = a.length;
                    for (c = 0; d > c; c++) B.push("_" + b + "_" + c);
                    return B
                }

                function c(a) {
                    var b = a.match(v);
                    return b ? (1 === b.length || a[0].match(u)) && b.unshift("") : b = ["", ""], b.join(A)
                }

                function d(b) {
                    a.each(b, function(a) {
                        var c = b[a];
                        "string" == typeof c && c.match(z) && (b[a] = e(c))
                    })
                }

                function e(a) {
                    return i(z, a, f)
                }

                function f(a) {
                    var b = g(a);
                    return "rgb(" + b[0] + "," + b[1] + "," + b[2] + ")"
                }

                function g(a) {
                    return a = a.replace(/#/, ""), 3 === a.length && (a = a.split(""), a = a[0] + a[0] + a[1] + a[1] + a[2] + a[2]), C[0] = h(a.substr(0, 2)), C[1] = h(a.substr(2, 2)), C[2] = h(a.substr(4, 2)), C
                }

                function h(a) {
                    return parseInt(a, 16)
                }

                function i(a, b, c) {
                    var d = b.match(a),
                        e = b.replace(a, A);
                    if (d)
                        for (var f, g = d.length, h = 0; g > h; h++) f = d.shift(), e = e.replace(A, c(f));
                    return e
                }

                function j(a) {
                    return i(x, a, k)
                }

                function k(a) {
                    for (var b = a.match(w), c = b.length, d = a.match(y)[0], e = 0; c > e; e++) d += parseInt(b[e], 10) + ",";
                    return d = d.slice(0, -1) + ")"
                }

                function l(d) {
                    var e = {};
                    return a.each(d, function(a) {
                        var f = d[a];
                        if ("string" == typeof f) {
                            var g = r(f);
                            e[a] = {
                                formatString: c(f),
                                chunkNames: b(g, a)
                            }
                        }
                    }), e
                }

                function m(b, c) {
                    a.each(c, function(a) {
                        for (var d = b[a], e = r(d), f = e.length, g = 0; f > g; g++) b[c[a].chunkNames[g]] = +e[g];
                        delete b[a]
                    })
                }

                function n(b, c) {
                    a.each(c, function(a) {
                        var d = b[a],
                            e = o(b, c[a].chunkNames),
                            f = p(e, c[a].chunkNames);
                        d = q(c[a].formatString, f), b[a] = j(d)
                    })
                }

                function o(a, b) {
                    for (var c, d = {}, e = b.length, f = 0; e > f; f++) c = b[f], d[c] = a[c], delete a[c];
                    return d
                }

                function p(a, b) {
                    D.length = 0;
                    for (var c = b.length, d = 0; c > d; d++) D.push(a[b[d]]);
                    return D
                }

                function q(a, b) {
                    for (var c = a, d = b.length, e = 0; d > e; e++) c = c.replace(A, +b[e].toFixed(4));
                    return c
                }

                function r(a) {
                    return a.match(w)
                }

                function s(b, c) {
                    a.each(c, function(a) {
                        for (var d = c[a], e = d.chunkNames, f = e.length, g = b[a].split(" "), h = g[g.length - 1], i = 0; f > i; i++) b[e[i]] = g[i] || h;
                        delete b[a]
                    })
                }

                function t(b, c) {
                    a.each(c, function(a) {
                        for (var d = c[a], e = d.chunkNames, f = e.length, g = "", h = 0; f > h; h++) g += " " + b[e[h]], delete b[e[h]];
                        b[a] = g.substr(1)
                    })
                }
                var u = /(\d|\-|\.)/,
                    v = /([^\-0-9\.]+)/g,
                    w = /[0-9.\-]+/g,
                    x = new RegExp("rgb\\(" + w.source + /,\s*/.source + w.source + /,\s*/.source + w.source + "\\)", "g"),
                    y = /^.*\(/,
                    z = /#([0-9]|[a-f]){3,6}/gi,
                    A = "VAL",
                    B = [],
                    C = [],
                    D = [];
                a.prototype.filter.token = {
                    tweenCreated: function(a, b, c) {
                        d(a), d(b), d(c), this._tokenData = l(a)
                    },
                    beforeTween: function(a, b, c, d) {
                        s(d, this._tokenData), m(a, this._tokenData), m(b, this._tokenData), m(c, this._tokenData)
                    },
                    afterTween: function(a, b, c, d) {
                        n(a, this._tokenData), n(b, this._tokenData), n(c, this._tokenData), t(d, this._tokenData)
                    }
                }
            }(b)
        }(window), window.Tweenable
    }),
    function() {
        "use strict";
        angular.module("angular-carousel").filter("carouselSlice", function() {
            return function(a, b, c) {
                return angular.isArray(a) ? a.slice(b, b + c) : angular.isObject(a) ? a : void 0
            }
        })
    }(),
    function(a, b, c) {
        b.module("virtualLab", ["templates-app", "templates-common", "virtualLab.main", "ui.router", "ngDialog", "ngTouch"]).config(["$stateProvider", "$urlRouterProvider", function(a, b) {
            b.otherwise("/")
        }]).run(function() {
            FastClick.attach(document.body)
        }).controller("GlobalCtrl", ["$scope", "ngDialog", "$location", "$window", function(a, c, d, e) {
            function f(a, b) {
                return a.indexOf(b) > -1 ? !0 : !1
            }
            a.menuState = "optionbar-display", a.optionbarToggle = function() {
                "optionbar-display" == a.menuState ? a.menuState = "" : a.menuState = "optionbar-display"
            }, a.$on("$stateChangeSuccess", function(c, d, e, f, g) {
                b.isDefined(d.data.pageTitle) && (a.pageTitle = d.data.pageTitle + " | Lab Maya - Versi 1")
            }), a.showModal = !0;
            var g = ["http://localhost", "https://localhost", "file://", "http://127.0.0.1", "https://127.0.0.1"];
            a.link = e.location.href;
            for (var h = 0; h < g.length; h++)
                if (f(a.link, g[h])) {
                    a.showModal = !1;
                    break
                }
            a.shareModalClick = function() {
                c.open({
                    template: "modalShare",
                    trapFocus: !1,
                    controller: "ShareController",
                    scope: a,
                    className: "ngdialog-theme-default"
                })
            }
        }]).controller("ShareController", ["$scope", "$window", function(a, b) {
            a.shareTitle = "Bagikan Lab Maya Hukum Archimedes", a.url = b.location.href;
            var c = "Lab maya mengenai Hukum Archimedes, kunjungi ";
            a.link = {
                facebook: "http://www.facebook.com/sharer.php?u=" + b.encodeURIComponent(a.url),
                twitter: "https://twitter.com/intent/tweet?text=" + c + " " + a.url,
                gplus: "https://plus.google.com/share?url=" + b.encodeURIComponent(a.url)
            }
        }]).directive("selectOnClick", ["$window", function(a) {
            return {
                restrict: "A",
                link: function(b, c, d) {
                    c.on("click", function() {
                        a.getSelection().toString() || this.setSelectionRange(0, this.value.length)
                    })
                }
            }
        }]);
        var d = b.module("virtualLab.formula", []);
        d.service("archimedesFormula", function() {
            function a(a) {
                return +(Math.round(a + "e+2") + "e-2")
            }

            function b(a, b, c) {
                return a * b * c
            }

            function c() {
                g.archimedesDatas.box.volume = 5, g.archimedesDatas.box.massa = 2650, g.archimedesDatas.fluida.volume = 1e3
            }

            function d(b) {
                return a(b / 23.4)
            }

            function e(a) {
                return 1e3 * a
            }
            var f, g = this,
                h = 0;
            this.archimedesLists = {
                box: [{
                    id: 1,
                    name: "Alumunium",
                    density: 2420
                }, {
                    id: 2,
                    name: "Batu Bata",
                    density: 1700
                }, {
                    id: 3,
                    name: "Es",
                    density: 750
                }, {
                    id: 4,
                    name: "Kayu",
                    density: 530
                }, {
                    id: 5,
                    name: "Styrofoam",
                    density: 70
                }, {
                    id: 6,
                    name: "Benda Melayang",
                    density: 1e3
                }],
                fluida: [{
                    id: 1,
                    name: "Air",
                    density: 1e3,
                    color: "#5D6E74"
                }, {
                    id: 2,
                    name: "Minyak",
                    density: 900,
                    color: "#999933"
                }, {
                    id: 3,
                    name: "Madu",
                    density: 1400,
                    color: "#a98307"
                }]
            }, this.archimedesDatas = {
                box: {
                    jenis: 4,
                    massa: 2650,
                    volume: 5,
                    density: 530
                },
                fluida: {
                    jenis: 1,
                    massa: 1e3,
                    volume: 1e5,
                    density: 1e3
                },
                gravitasi: 9.8,
                result: {
                    archimedes: 16660,
                    berat: 8830,
                    tercelup: 0,
                    terapung: 0
                }
            }, this.calculate = function() {
                var a = this.archimedesDatas.fluida.density,
                    c = h / 1e3,
                    d = this.archimedesDatas.gravitasi,
                    e = b(a, c, d);
                this.archimedesDatas.result.archimedes = Math.round(e), this.archimedesDatas.result.berat = Math.round(this.archimedesDatas.box.massa * this.archimedesDatas.gravitasi)
            }, this.checkFloat = function() {
                return this.archimedesDatas.result.archimedes >= this.archimedesDatas.result.berat ? (this.archimedesDatas.result.archimedes = this.archimedesDatas.result.berat, !1) : !0
            }, this.firstConditions = function() {
                c()
            }, f = this.archimedesDatas.fluida.volume, this.changeVolume = function(b) {
                var c = d(b),
                    g = c;
                c = e(c), h = c, this.archimedesDatas.fluida.volume = f + c, this.archimedesDatas.result.tercelup = g, this.archimedesDatas.result.terapung = a(this.archimedesDatas.box.volume - g), this.calculate()
            }, this.changeSelection = function(a, b) {
                this.archimedesDatas.box.massa = this.archimedesLists.box[a].density * this.archimedesDatas.box.volume, this.archimedesDatas.box.density = this.archimedesLists.box[a].density, this.archimedesDatas.fluida.density = this.archimedesLists.fluida[b].density
            }, this.setVolume = function(a) {
                return .2 * a
            }
        });
        var d = b.module("virtualLab.stage", ["virtualLab.formula"]);
        d.service("archimedesLayer", ["baseService", "objectService", "archimedesFormula", function(a, b, d) {
            function e() {
                return s.density < t.density ? "float" : s.density > t.density ? "sink" : "fly"
            }

            function f(a, b) {
                var c = 2e5;
                return m.box.getBody() <= n.getWaterHeight() ? b * a / c : 0
            }

            function g(a, b, c) {
                var d = f(b, c);
                a.isPush() || a.y(a.y() - d)
            }

            function h(a, b, c) {
                var d = f(b, c);
                a.isPush() || a.y(a.y() + d)
            }

            function i() {
                return m.box.getBody() < n.getWaterLevel() ? !0 : !1
            }

            function j(a) {
                (a === c || a > m.box.getBody()) && (a = m.box.height()), r.changeVolume(a), n.volume(a), p.$apply()
            }

            function k(a) {
                var b;
                a && (b = 0), m.box.getBody() > n.getWaterLevel() && m.box.y() <= n.getWaterLevel() && (b = m.box.getBody() - n.getWaterLevel()), j(b)
            }

            function l(a) {
                var b = m.box;
                if (u) {
                    if (i()) h(b, a.timeDiff, v), k(!0);
                    else {
                        var c = e();
                        if ("float" === c) {
                            var d = r.archimedesDatas.result.berat - r.archimedesDatas.result.archimedes;
                            0 > d ? g(b, a.timeDiff, v / 1.3) : h(b, a.timeDiff, d)
                        } else "fly" === c ? m.box.y() <= n.getWaterLevel() && (g(b, a.timeDiff, v / 1.3), h(b, a.timeDiff, v), u = !1) : "sink" === c && (g(b, a.timeDiff, v / 1.3), h(b, a.timeDiff, v), m.box.getBody() > n.getWaterHeight() && (m.box.y(m.box.getBody() - (m.box.getBody() - n.getWaterHeight()) - m.box.height()), k(!1), u = !1));
                        k(!1)
                    }
                    o.batchDraw()
                } else m.box.isPush && (u = !0)
            }
            var m, n, o, p, q = 1,
                r = d,
                s = d.archimedesDatas.box,
                t = d.archimedesDatas.fluida,
                u = !0,
                v = (d.archimedesDatas.gravitasi, 5e4);
            this.construct = function(c, d) {
                var e = c;
                p = d, p.data.height = e.getHeight(), p.data.width = e.getWidth(), o = new Konva.Layer;
                var f = new Konva.Group({
                        x: 0,
                        y: 0
                    }),
                    g = {
                        layer: f,
                        stage: e,
                        mainLayer: o
                    };
                n = a.init(g), m = b.init(g), n.addPondFront(), m.box.addTouch(), m.setAnother(n.getWaterHeight(), n.getW()), o.add(f), e.add(o);
                var h = new Konva.Animation(function(a) {
                    l(a)
                });
                h.start()
            }, this.changeSelection = function(a) {
                u = !0, m.box.changeTo(a)
            }, this.changeVolume = function(a) {
                q = r.setVolume(a), m.box.setVolume(q)
            }, this.changeColor = function(a) {
                n.pondFront.fill(a), n.surface.fill(a)
            }
        }]);
        var d = b.module("virtualLab.stage");
        d.service("baseService", function() {
            function a(a) {
                b = this;
                var d = a.layer,
                    f = a.stage;
                this.mainLayer = a.mainLayer, this.gGroup = d;
                var g = new Konva.Rect({
                    x: 0,
                    y: 0,
                    width: f.getWidth(),
                    height: f.getHeight(),
                    fill: "#dbf5fa"
                });
                d.add(g);
                var h = new Konva.Rect({
                        x: 0,
                        y: f.getHeight() - 308,
                        width: f.getWidth(),
                        height: 308,
                        fill: "#97d80e"
                    }),
                    i = new Konva.Rect({
                        x: 0,
                        y: f.getHeight() - 241,
                        width: f.getWidth(),
                        height: 241,
                        fill: "#a9b666"
                    });
                d.add(h), d.add(i);
                var j = new Image,
                    k = new Konva.Image({
                        x: f.getWidth() / 2 - 312 - 215,
                        y: f.getHeight() - 308 - 70,
                        image: j,
                        width: 312,
                        height: 75
                    });
                j.src = "assets/img/trees-left-side.png", j.onload = function() {
                    f.batchDraw()
                };
                var l = new Image,
                    m = new Konva.Image({
                        x: f.getWidth() / 2 + 215,
                        y: f.getHeight() - 308 - 70,
                        image: l,
                        width: 299,
                        height: 75
                    });
                l.src = "assets/img/trees-right-side.png", l.onload = function() {
                    f.batchDraw()
                }, d.add(k), d.add(m);
                var n = new Image,
                    o = new Konva.Image({
                        x: (f.getWidth() - 585) / 2,
                        y: f.getHeight() - 241 - 30,
                        image: n,
                        width: 585,
                        height: 239
                    });
                n.src = "assets/img/pond.png", n.onload = function() {
                    f.batchDraw()
                }, d.add(o);
                var p = .7;
                this.pondFront = new Konva.Rect({
                    x: (f.getWidth() - 585) / 2 + 3,
                    y: f.getHeight() - 241 - 30 + 89.5,
                    fill: "#5D6E74",
                    width: 580,
                    opacity: p,
                    height: e
                }), c = this.pondFront.y(), this.surface = new Konva.Line({
                    points: [0, 1, 42, -30, 538, -30, 579, 1],
                    x: this.pondFront.x(),
                    y: this.pondFront.y(),
                    fill: "#5D6E74",
                    opacity: p,
                    closed: !0
                }), d.add(this.surface), b.mainLayer.batchDraw()
            }
            var b, c, d = this,
                e = 150;
            a.prototype = {
                addPondFront: function() {
                    b.gGroup.add(b.pondFront)
                },
                changeTo: function(a) {
                    switch (a) {
                        case "Air":
                            b.boxMat.setImage(b.boxAlumunium), b.mainLayer.batchDraw();
                            break;
                        case "Bensin":
                            b.boxMat.setImage(b.boxBrick), b.mainLayer.batchDraw();
                            break;
                        case "Madu":
                            b.boxMat.setImage(b.boxIce), b.mainLayer.batchDraw()
                    }
                },
                getWaterHeight: function() {
                    return b.pondFront.y() + b.pondFront.height()
                },
                getWaterLevel: function() {
                    return b.pondFront.y()
                },
                yFront: function(a) {
                    return a ? void b.pondFront.y(a) : b.pondFront.y()
                },
                ySurface: function(a) {
                    a ? b.surface.y(a) : b.surface.y()
                },
                volume: function(a) {
                    a ? (b.yFront(c - a / 3), b.pondFront.height(e + a / 3), b.ySurface(c - a / 3)) : (b.yFront(c), b.pondFront.height(e), b.ySurface(c))
                },
                getW: function() {
                    return {
                        l: b.pondFront.x(),
                        r: b.pondFront.x() + b.pondFront.width()
                    }
                }
            }, d.init = function(b) {
                return new a(b)
            }
        });
        var d = b.module("virtualLab.stage");
        d.service("objectService", function() {
            function a(a) {
                b = this, b.isPushing = !1, this.globalGroup = a.layer;
                var f = a.stage;
                this.mainLayer = a.mainLayer;
                var g = 131,
                    h = 117,
                    i = new Konva.Group({
                        x: (f.getWidth() - 150) / 2,
                        y: f.getHeight() - 258 - 100,
                        width: g,
                        height: h
                    });
                this.boxGroupPos = {
                    x: i.x(),
                    y: i.y()
                };
                var j = new Image;
                this.boxMat = new Konva.Image({
                    x: 0,
                    y: 0,
                    image: j,
                    width: g,
                    height: h
                }), j.src = "assets/img/box-wood.png", j.onload = function() {
                    f.batchDraw()
                }, this.boxTouch = new Konva.Rect({
                    x: this.boxGroupPos.x,
                    y: this.boxGroupPos.y,
                    fill: "white",
                    width: g,
                    height: h,
                    opacity: 0,
                    draggable: !0
                }), this.boxTouch.on("mouseover touchstart", function() {
                    document.body.style.cursor = "pointer"
                }), this.boxTouch.on("mouseout touchend", function() {
                    document.body.style.cursor = "default"
                }), this.boxTouch.on("dragmove", function() {
                    this.x() > e ? this.x(e) : this.x() < d && this.x(d), b.box.getBody() >= c && this.y(c - b.box.height()), i.x(this.x()), i.y(this.y())
                }), this.boxTouch.on("mousedown", function() {
                    b.isPushing = !0
                }), this.boxTouch.on("mouseup", function() {
                    b.isPushing = !1
                }), i.add(this.boxMat), this.boxWood = j, this.boxAlumunium = new Image, this.boxAlumunium.src = "assets/img/box-alumunium.png", this.boxAlumunium.onload = function() {
                    f.batchDraw()
                }, this.boxBrick = new Image, this.boxBrick.src = "assets/img/box-brick.png", this.boxBrick.onload = function() {
                    f.batchDraw()
                }, this.boxIce = new Image, this.boxIce.src = "assets/img/box-ice.png", this.boxIce.onload = function() {
                    f.batchDraw()
                }, this.boxStyrofoam = new Image, this.boxStyrofoam.src = "assets/img/box-styrofoam.png", this.boxStyrofoam.onload = function() {
                    f.batchDraw()
                }, this.custom = new Image, this.custom.src = "assets/img/box-custom.png", this.custom.onload = function() {
                    f.batchDraw()
                }, this.globalGroup.add(i), this.bGroup = i
            }
            var b, c, d, e, f = this,
                g = 1;
            a.prototype = {
                box: {
                    addTouch: function() {
                        b.globalGroup.add(b.boxTouch), b.mainLayer.batchDraw()
                    },
                    moveTo: function(a) {
                        b.boxMat.setX(a.x), b.boxMat.setY(a.y)
                    },
                    getPosition: {
                        x: function() {
                            return b.boxMat.x()
                        },
                        y: function() {
                            return b.boxMat.y()
                        }
                    },
                    changeTo: function(a) {
                        switch (a) {
                            case "Alumunium":
                                b.boxMat.setImage(b.boxAlumunium);
                                break;
                            case "Batu Bata":
                                b.boxMat.setImage(b.boxBrick);
                                break;
                            case "Es":
                                b.boxMat.setImage(b.boxIce);
                                break;
                            case "Kayu":
                                b.boxMat.setImage(b.boxWood);
                                break;
                            case "Styrofoam":
                                b.boxMat.setImage(b.boxStyrofoam);
                                break;
                            case "Benda Melayang":
                                b.boxMat.setImage(b.custom)
                        }
                        b.mainLayer.batchDraw()
                    },
                    onTheGround: function(a) {
                        var c = b.boxMat.y() + b.boxMat.height() + b.boxGroupPos.y;
                        return a - 1 > c ? !1 : !0
                    },
                    onWaterLevel: function(a, c) {
                        c || (c = 0);
                        var d = b.boxMat.y() + b.boxGroupPos.y,
                            e = a - (a - b.boxGroupPos.y) + c;
                        return d > e ? !1 : !0
                    },
                    setVolume: function(a) {
                        g = a, b.boxTouch.scale({
                            x: g,
                            y: g
                        }), b.bGroup.scale({
                            x: g,
                            y: g
                        }), b.mainLayer.batchDraw()
                    },
                    getBody: function() {
                        return b.boxTouch.y() + b.boxTouch.height() * g
                    },
                    y: function(a) {
                        return a ? (b.boxTouch.y(a), void b.bGroup.y(b.boxTouch.y())) : b.boxTouch.y()
                    },
                    isPush: function() {
                        return b.isPushing
                    },
                    height: function() {
                        return b.boxTouch.height() * g
                    }
                },
                setAnother: function(a, f) {
                    c = a, d = f.l, e = f.r - b.boxTouch.width()
                }
            }, f.init = function(b) {
                return new a(b)
            }
        }), b.module("virtualLab.main", ["ui.router", "virtualLab.formula", "virtualLab.stage", "angular-carousel"]).config(["$stateProvider", function(a) {
            a.state("main", {
                url: "/",
                views: {
                    main: {
                        controller: "MainCtrl",
                        templateUrl: "main/main.tpl.html"
                    }
                },
                data: {
                    pageTitle: "Hukum Archimedes"
                }
            })
        }]).controller("MainCtrl", ["$scope", "$window", "$rootScope", "archimedesLayer", "archimedesFormula", "ngDialog", "$sce", "$timeout", function(a, b, c, d, e, f, g, h) {
            var i = a,
                j = d,
                k = e,
                l = 3,
                m = 7;
            i.archimedesData = k.archimedesDatas, i.archimedesList = k.archimedesLists, i.onChangeSelection = function() {
                i.archimedesList.box[i.archimedesList.box.length - 1].density = i.archimedesList.fluida[i.subtanceSelected.b - 1].density, j.changeSelection(i.archimedesList.box[i.subtanceSelected.a - 1].name), k.changeSelection(i.subtanceSelected.a - 1, i.subtanceSelected.b - 1), k.calculate(), j.changeColor(i.archimedesList.fluida[i.subtanceSelected.b - 1].color)
            }, i.onChangeInput = function() {
                i.archimedesData.box.volume < l ? i.archimedesData.box.volume = l : i.archimedesData.box.volume > m ? i.archimedesData.box.volume = m : i.archimedesData.box.massa = i.archimedesData.box.volume * i.archimedesData.box.density, k.calculate(), j.changeVolume(i.archimedesData.box.volume)
            }, i.subtanceSelected = {
                a: 4,
                b: 1
            }, i.backTo = function() {
                i.subtanceSelected.a = 4, i.subtanceSelected.b = 1, k.firstConditions(), j.changeSelection(i.archimedesList.box[i.subtanceSelected.a - 1].name), k.calculate()
            };
            var n = a,
                o = function() {
                    this.width = 0, this.height = 0
                };
            a.data = new o;
            var p, q, r = 0,
                s = 43;
            p = b.innerWidth >= 768 ? b.innerWidth - r : b.innerWidth, q = b.innerHeight - s, c.stageWidth = p, c.stageHeight = q, a.$on("KONVA:READY", function(b, c) {
                j.construct(c, a)
            }), a.optionBarTab = 1, a.helpModalClick = function() {
                f.open({
                    template: "modalHelp",
                    trapFocus: !1,
                    controller: "HelpController",
                    scope: n
                })
            }, n.helpImg = [{
                src: "assets/img/help-1.jpg",
                desc: g.trustAsHtml("Tentukan jenis objek yang akan digunakan dalam percobaan.")
            }, {
                src: "assets/img/help-2.jpg",
                desc: g.trustAsHtml("Tentukan jenis zat cair yang akan digunakan dalam percobaan.")
            }, {
                src: "assets/img/help-3.jpg",
                desc: g.trustAsHtml("Amati hasil percobaan pada panel <strong>Data Perhitungan</strong>.")
            }], n.nextSlide = function() {
                n.slideIndex++
            }, n.prevSlide = function() {
                n.slideIndex--
            }, a.theoryModalClick = function() {
                f.open({
                    template: "modalTheory",
                    trapFocus: !1,
                    scope: n,
                    className: "ngdialog-theme-default ngdialog-lg"
                })
            }
        }]).directive("stage", ["$rootScope", function(a) {
            return {
                restrict: "EA",
                scope: {
                    stageWidth: "=",
                    stageHeight: "="
                },
                link: function(b, c, d, e) {
                    var f = d.id;
                    f || (f = Math.random().toString(36).substring(8), c.attr("id", f));
                    var g = (b.stageWidth || 900, b.stageHeight || 800, {
                        stage: new Konva.Stage({
                            container: f,
                            width: a.stageWidth,
                            height: a.stageHeight
                        })
                    });
                    b.konva = g, a.$broadcast("KONVA:READY", g.stage)
                }
            }
        }]).controller("HelpController", ["$scope", function(a) {
            a.nextSlide = function() {
                a.slideIndex++
            }, a.prevSlide = function() {
                a.slideIndex--
            }
        }]), b.module("plusOne", []).directive("plusOne", function() {
            return {
                link: function(a, b, c) {
                    gapi.plusone.render(b[0], {
                        size: "medium",
                        href: "http://bit.ly/ngBoilerplate"
                    })
                }
            }
        }), b.module("templates-app", ["main/main.tpl.html"]), b.module("main/main.tpl.html", []).run(["$templateCache", function(a) {
                       a.put("main/main.tpl.html", '<div class="wrapper-inner">\n	\n	<div class="optionbar">\n\n		<ul class="optionbar-controltab">\n			<li class="{{optionBarTab == 1? \'active\' : \'\'}}" ng-click="optionBarTab = 1">\n				Pengaturan Objek\n			</li>\n			<li class="{{optionBarTab == 2? \'active\' : \'\'}}" ng-click="optionBarTab = 2">\n				Zat Cair\n			</li>\n			<li class="{{optionBarTab == 3? \'active\' : \'\'}}" ng-click="optionBarTab = 3">\n				Data Perhitungan\n			</li>\n		</ul>\n		<!-- TAB 1 -->\n		<div class="optionbar-tab {{optionBarTab == 1? \'active\' : \'\'}}">\n\n			<div class="optionbar-title clearfix">\n				<h2>Hukum Archimedes</h2>\n				<span class="glyphicon glyphicon-question-sign" aria-hidden="true" title="Bantuan" ng-click="helpModalClick()"></span>\n				<span class="glyphicon glyphicon-book" aria-hidden="true" title="Teori" ng-click="theoryModalClick()"></span>\n			</div>\n\n			<div class="optionbar-panel">\n\n				<div class="row optionbar-panel-list">\n					<div class="col-xs-5">Material</div>\n					<div class="col-xs-7">\n                                            <select class="form-control input-sm" ng-model="subtanceSelected.a" ng-options="subtance.id as subtance.name for subtance in archimedesList.box" ng-change="onChangeSelection()">\n                                            </select>\n<!--						<select class="form-control input-sm">\n							<option value="alumunium">Alumunium</option>\n							<option value="batu">Batu</option>\n							<option value="Es">Es</option>\n							<option value="kayu">Kayu</option>\n							<option value="styrofoam">Styrofoam</option>\n						</select>-->\n					</div>\n				</div>\n				<div class="row optionbar-panel-list">\n					<div class="col-xs-5">Massa (<em>kg</em>)</div>\n					<div class="col-xs-7 text-left" >\n                                            <input class="form-control input-sm" type="number" step="any" ng-model="archimedesData.box.massa" ng-change="onChangeInput()" readonly />\n					</div>\n				</div>		\n				<div class="row optionbar-panel-list">\n					<div class="col-xs-5">Volume (<em>m<sup>3</sup></em>)</div>\n					<div  class="col-xs-7 text-left">\n						<input class="form-control input-sm" type="number" step="any" ng-model="archimedesData.box.volume" ng-change="onChangeInput()" />\n					</div>\n				</div>\n\n			</div>\n		</div>\n\n		<!-- TAB 2 -->\n		<div class="optionbar-tab {{optionBarTab == 2? \'active\' : \'\'}}">\n\n			<div class="optionbar-panel">\n\n				<h3 class="optionbar-panel-title">Pengaturan Zat Cair</h3>\n\n				<div class="row optionbar-panel-list">\n					<div class="col-xs-5">Jenis</div>\n					<div class="col-xs-7">\n                                            <select class="form-control input-sm" ng-model="subtanceSelected.b" ng-options="subtance.id as subtance.name for subtance in archimedesList.fluida" ng-change="onChangeSelection()">\n                                            </select>\n<!--						<select class="form-control input-sm">\n							<option value="air">Air</option>\n							<option value="bensin">Bensin</option>\n							<option value="madu">Madu</option>\n						</select>-->\n					</div>\n				</div>\n				<div class="row optionbar-panel-list">\n					<div class="col-xs-5">Massa Jenis (<em>kg/L</em>)</div>\n					<div class="col-xs-7 text-left" >\n                                            <input class="form-control input-sm" type="number" step="any" ng-model="archimedesData.fluida.density" ng-change="onChangeInput()" readonly/>\n					</div>\n				</div>		\n				<div class="row optionbar-panel-list">\n					<div class="col-xs-5">Perubahan Volume (<em>L</em>)</div>\n					<div  class="col-xs-7 text-left">\n                                            <input class="form-control input-sm" type="number" step="any" ng-model="archimedesData.fluida.volume" ng-change="onChangeInput()" readonly />\n					</div>\n				</div>\n\n			</div>\n		</div>\n\n		<!-- TAB 3 -->\n			<div class="optionbar-toggle" ng-click="optionbarToggle()">\n			<span class="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span>\n		</div>\n\n	</div> <!-- Optionbar END -->\n\n	<div class="compactbar">\n		<div class="info">Massa Kotak {{ archimedesList.box[subtanceSelected.a - 1].name }}: {{ archimedesData.box.massa }} kg</div>\n		<div class="info">Volume {{ archimedesList.fluida[subtanceSelected.b - 1].name }}: {{ archimedesData.fluida.volume }} L</div>\n		<div class="info">Gaya Archimedes: {{ archimedesData.result.archimedes }} N</div>\n	</div>\n\n\n	<div stage="" class="stage" ng-style="stageStyle"></div>\n\n</div>\n\n\n\n<!-- MODAL HELP -->\n<script type="text/ng-template" id="modalHelp">\n\n	<form>\n		<div class="modal-header text-center">\n			<h4 class="modal-title">Bantuan</h4>\n		</div>\n		<div class="modal-body">\n			<ul class="help-slider" rn-carousel rn-carousel-index="slideIndex">\n			  <li ng-repeat="image in helpImg">\n			  	<img ng-src="{{image.src}}" />\n\n					<div class="help-desc">\n						<span ng-bind-html="image.desc"></span>\n					</div>\n			  </li>\n			</ul>\n\n			<div class="help-indi">{{slideIndex+1}} dari {{helpImg.length}}</div>\n\n		</div>\n		<div class="modal-footer text-center">\n			<div class="col-xs-2">\n				<div class="btn btn-link btn-lg {{ slideIndex == \'0\' ? \'hide\' : \'\' }}" ng-click="prevSlide()"><span class="glyphicon glyphicon-arrow-left" aria-hidden="true"></span></div>\n			</div>\n			<div class="col-xs-8">\n\n				<button type="submit" class="btn btn-primary" ng-click="closeThisDialog(\'\')">Tutup</button>\n\n			</div>\n			<div class="col-xs-2">\n				<div class="btn btn-link btn-lg {{ (slideIndex+1) == helpImg.length ? \'hide\' : \'\' }}" ng-click="nextSlide()"><span class="glyphicon glyphicon-arrow-right" aria-hidden="true"></span></div>\n			</div>\n		</div>\n	</form>\n</script>\n\n\n<!-- MODAL THEORY -->\n<script type="text/ng-template" id="modalTheory">\n\n		<div class="modal-header text-center">\n			<h4 class="modal-title">Teori</h4>\n		</div>\n		<div class="modal-body text-paragraph" style="background-color:#fff;">\n			\n			<p>\n				Archimedes menyatakan bahwa suatu benda yang dicelupkan sebagian atau seluruhnya ke dalam zat cair, mengalami gaya ke atas yang besarnya sama dengan berat zat cair yang dipindahkan oleh benda tersebut. Adanya gaya dalam zat cair menjadikan benda yang dimasukan kedalam zat cair mengalami tiga kemungkinan, yaitu terapung, melayang, dan tenggelam.\n			</p>\n			<p class="text-center">\n				<img src="assets/img/t1.png" alt="" />\n			</p>\n			<p>\n				Secara matematis hokum Archimedes dapat dirumuskan sebagai berikut\n			</p>\n			<p class="text-center">\n				<img src="assets/img/t2.png" alt="" />\n			</p>\n			<p>\n				Beberapa kondisi benda dalam zat cair\n				<ol>\n					<li>\n						<p>Terapung</p>\n						<p>\n							Benda yang dicelupkan dekalam fluida akan terapung jika massa jenis benda lebih kecil daripada massa jenis fluida (&rho;b< &rho;f). Massa jenis benda yang terapung dalam fluida akan memenuhi persamaan berikut.\n							<p class="text-center">\n								<img src="assets/img/t3.png" alt="" />\n							</p>\n						</p>\n					</li>\n					\n					<li>\n						<p>Tenggelam</p>\n						<p>\n							Benda yang dicelupkan ke dalam fluida akan tenggelam jika massa jenis benda lebih besar daripada massa jenis fluida (&rho;b> &rho;f). Jika benda tersebut dapat tenggelam fluida ditimbang didalam fluida tersebut, berat benda menjadi.\n							<p class="text-center">\n								<img src="assets/img/t4.png" alt="" />\n							</p>\n						</p>\n					</li>\n					<li>\n						<p>Melayang</p>\n						<p>\n							Benda yang dicelupkan ke dalam fluida akan melayang jika massa jenis benda sama dengan massa jenis fluida (&rho;b= &rho;f). \n						</p>\n					</li>\n				</ol>\n			</p>\n\n		</div>\n		<div class="modal-footer text-center">\n			<button type="submit" class="btn btn-primary" ng-click="closeThisDialog(\'\')">Tutup</button>\n		</div>\n\n</script>')
        }]), b.module("templates-common", [])
    }(window, window.angular);