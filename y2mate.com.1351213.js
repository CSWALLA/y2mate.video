(function() {
    var c = function(n, t) {
        return function() {
            return n && (t = n(n = 0)), t
        }
    };
    var f = function(n, t) {
        return function() {
            return t || n((t = {
                exports: {}
            }).exports, t), t.exports
        }
    };
    var u = c(function() {});
    var s = c(function() {});
    var p = c(function() {});
    var l = c(function() {});
    var h = c(function() {});
    var g = c(function() {});
    var v = f(function(W) {
        u();
        s();
        p();
        l();
        h();
        g();
        Object.defineProperty(W, "__esModule", {
            value: !0
        });
        W.AdditionalWidget = void 0;
        var A = function() {
            function n(t, e) {
                var i = this;
                if (this.additionalWidgets = e, this.mainWidgetJstSrc = t, this.additionalWidgets.length)
                    for (var d = function(m) {
                            setTimeout(function() {
                                i._init(i.additionalWidgets[m])
                            }, 0)
                        }, o = 0; o < this.additionalWidgets.length; o++) d(o)
            }
            return n.prototype._init = function(t) {
                var e = this,
                    i = this._createWidgetDiv(t.id),
                    d = this._createWidgetScript(t.id);
                this._waitForElement(t.selector).then(function(o) {
                    e._insertWidgetBlock(o, i), e._insertWidgetScript(d)
                })
            }, n.prototype._createWidgetDiv = function(t) {
                var e = document.createElement("div"),
                    i = document.createElement("div"),
                    d = "M".concat(826034, "ScriptRootC").concat(t);
                return e.classList.add("".concat(d, "-additional")), i.id = d, e.appendChild(i), e
            }, n.prototype._createWidgetScript = function(t) {
                var e = document.createElement("script");
                return e.src = this.mainWidgetJstSrc.replace(1351213, t.toString()), e.async = "async", e
            }, n.prototype._insertWidgetBlock = function(t, e) {
                if (window._mgAdditionalPage) t.appendChild(e);
                else {
                    var i = t.parentElement;
                    i.insertBefore(e, t)
                }
            }, n.prototype._insertWidgetScript = function(t) {
                document.head ? document.head.appendChild(t) : document.body.appendChild(t)
            }, n.prototype._waitForElement = function(t) {
                return new Promise(function(e) {
                    if (document.querySelector(t)) return e(document.querySelector(t));
                    var i = new MutationObserver(function() {
                        document.querySelector(t) && (e(document.querySelector(t)), i.disconnect())
                    });
                    i.observe(document.body, {
                        childList: !0,
                        subtree: !0
                    })
                })
            }, n
        }();
        W.AdditionalWidget = A
    });
    var I = f(function(S) {
        u();
        s();
        p();
        l();
        h();
        g();
        Object.defineProperty(S, "__esModule", {
            value: !0
        });
        var N = v();
        (function() {
            var n = d(),
                t = n ? "https://jsc.adskeeper.com/y/2/y2mate.com.1351213.es6.js" : "https://jsc.adskeeper.com/y/2/y2mate.com.1351213.es5.js";
            y(t), m(t);
            for (var e = ["https://servicer.adskeeper.com"], i = 0; i < e.length; i++) o(e[i]);

            function d() {
                try {
                    return new Function("async (x = 0) => x; try {const x=window?.x;} catch {};"), !0
                } catch (a) {
                    return !1
                }
            }

            function o(a) {
                var r = document.createElement("link");
                r.rel = "preconnect", r.href = a, document.head ? document.head.appendChild(r) : document.body.appendChild(r)
            }

            function m(a) {
                var r = JSON.parse("[]")
            }

            function y(a) {
                var r = document.createElement("script");
                r.async = "async", r.src = a, document.head ? document.head.appendChild(r) : document.body.appendChild(r)
            }
        })()
    });
    I();
})();