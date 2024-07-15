var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/*! For license information please see main.89904a74734dd5c3a0b5.js.LICENSE.txt */
(function () {
    "use strict";
    var e, t, n, r, a = { 551: function (e, t, n) { var r = n(540), a = n(982); function i(e) { for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
            t += "&args[]=" + encodeURIComponent(arguments[n]); return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."; } var o = new Set, l = {}; function u(e, t) { s(e, t), s(e + "Capture", t); } function s(e, t) { for (l[e] = t, e = 0; e < t.length; e++)
            o.add(t[e]); } var c = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement), d = Object.prototype.hasOwnProperty, f = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, p = {}, m = {}; function h(e, t, n, r, a, i, o) { this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = r, this.attributeNamespace = a, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = o; } var v = {}; "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function (e) { v[e] = new h(e, 0, !1, e, null, !1, !1); })), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach((function (e) { var t = e[0]; v[t] = new h(t, 1, !1, e[1], null, !1, !1); })), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function (e) { v[e] = new h(e, 2, !1, e.toLowerCase(), null, !1, !1); })), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function (e) { v[e] = new h(e, 2, !1, e, null, !1, !1); })), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function (e) { v[e] = new h(e, 3, !1, e.toLowerCase(), null, !1, !1); })), ["checked", "multiple", "muted", "selected"].forEach((function (e) { v[e] = new h(e, 3, !0, e, null, !1, !1); })), ["capture", "download"].forEach((function (e) { v[e] = new h(e, 4, !1, e, null, !1, !1); })), ["cols", "rows", "size", "span"].forEach((function (e) { v[e] = new h(e, 6, !1, e, null, !1, !1); })), ["rowSpan", "start"].forEach((function (e) { v[e] = new h(e, 5, !1, e.toLowerCase(), null, !1, !1); })); var g = /[\-:]([a-z])/g; function b(e) { return e[1].toUpperCase(); } function y(e, t, n, r) { var a = v.hasOwnProperty(t) ? v[t] : null; (null !== a ? 0 !== a.type : r || !(2 < t.length) || "o" !== t[0] && "O" !== t[0] || "n" !== t[1] && "N" !== t[1]) && (function (e, t, n, r) { if (null == t || function (e, t, n, r) { if (null !== n && 0 === n.type)
            return !1; switch (typeof t) {
            case "function":
            case "symbol": return !0;
            case "boolean": return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
            default: return !1;
        } }(e, t, n, r))
            return !0; if (r)
            return !1; if (null !== n)
            switch (n.type) {
                case 3: return !t;
                case 4: return !1 === t;
                case 5: return isNaN(t);
                case 6: return isNaN(t) || 1 > t;
            } return !1; }(t, n, a, r) && (n = null), r || null === a ? function (e) { return !!d.call(m, e) || !d.call(p, e) && (f.test(e) ? m[e] = !0 : (p[e] = !0, !1)); }(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : a.mustUseProperty ? e[a.propertyName] = null === n ? 3 !== a.type && "" : n : (t = a.attributeName, r = a.attributeNamespace, null === n ? e.removeAttribute(t) : (n = 3 === (a = a.type) || 4 === a && !0 === n ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n)))); } "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function (e) { var t = e.replace(g, b); v[t] = new h(t, 1, !1, e, null, !1, !1); })), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function (e) { var t = e.replace(g, b); v[t] = new h(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1); })), ["xml:base", "xml:lang", "xml:space"].forEach((function (e) { var t = e.replace(g, b); v[t] = new h(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1); })), ["tabIndex", "crossOrigin"].forEach((function (e) { v[e] = new h(e, 1, !1, e.toLowerCase(), null, !1, !1); })), v.xlinkHref = new h("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach((function (e) { v[e] = new h(e, 1, !1, e.toLowerCase(), null, !0, !0); })); var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, k = Symbol.for("react.element"), S = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), q = Symbol.for("react.profiler"), C = Symbol.for("react.provider"), _ = Symbol.for("react.context"), P = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), D = Symbol.for("react.suspense_list"), L = Symbol.for("react.memo"), N = Symbol.for("react.lazy"); Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode"); var T = Symbol.for("react.offscreen"); Symbol.for("react.legacy_hidden"), Symbol.for("react.cache"), Symbol.for("react.tracing_marker"); var z = Symbol.iterator; function M(e) { return null === e || "object" != typeof e ? null : "function" == typeof (e = z && e[z] || e["@@iterator"]) ? e : null; } var O, F = Object.assign; function I(e) { if (void 0 === O)
            try {
                throw Error();
            }
            catch (e) {
                var t = e.stack.trim().match(/\n( *(at )?)/);
                O = t && t[1] || "";
            } return "\n" + O + e; } var U = !1; function A(e, t) { if (!e || U)
            return ""; U = !0; var n = Error.prepareStackTrace; Error.prepareStackTrace = void 0; try {
            if (t)
                if (t = function () { throw Error(); }, Object.defineProperty(t.prototype, "props", { set: function () { throw Error(); } }), "object" == typeof Reflect && Reflect.construct) {
                    try {
                        Reflect.construct(t, []);
                    }
                    catch (e) {
                        var r = e;
                    }
                    Reflect.construct(e, [], t);
                }
                else {
                    try {
                        t.call();
                    }
                    catch (e) {
                        r = e;
                    }
                    e.call(t.prototype);
                }
            else {
                try {
                    throw Error();
                }
                catch (e) {
                    r = e;
                }
                e();
            }
        }
        catch (t) {
            if (t && r && "string" == typeof t.stack) {
                for (var a = t.stack.split("\n"), i = r.stack.split("\n"), o = a.length - 1, l = i.length - 1; 1 <= o && 0 <= l && a[o] !== i[l];)
                    l--;
                for (; 1 <= o && 0 <= l; o--, l--)
                    if (a[o] !== i[l]) {
                        if (1 !== o || 1 !== l)
                            do {
                                if (o--, 0 > --l || a[o] !== i[l]) {
                                    var u = "\n" + a[o].replace(" at new ", " at ");
                                    return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u;
                                }
                            } while (1 <= o && 0 <= l);
                        break;
                    }
            }
        }
        finally {
            U = !1, Error.prepareStackTrace = n;
        } return (e = e ? e.displayName || e.name : "") ? I(e) : ""; } function j(e) { switch (e.tag) {
            case 5: return I(e.type);
            case 16: return I("Lazy");
            case 13: return I("Suspense");
            case 19: return I("SuspenseList");
            case 0:
            case 2:
            case 15: return A(e.type, !1);
            case 11: return A(e.type.render, !1);
            case 1: return A(e.type, !0);
            default: return "";
        } } function B(e) { if (null == e)
            return null; if ("function" == typeof e)
            return e.displayName || e.name || null; if ("string" == typeof e)
            return e; switch (e) {
            case x: return "Fragment";
            case S: return "Portal";
            case q: return "Profiler";
            case E: return "StrictMode";
            case R: return "Suspense";
            case D: return "SuspenseList";
        } if ("object" == typeof e)
            switch (e.$$typeof) {
                case _: return (e.displayName || "Context") + ".Consumer";
                case C: return (e._context.displayName || "Context") + ".Provider";
                case P:
                    var t = e.render;
                    return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
                case L: return null !== (t = e.displayName || null) ? t : B(e.type) || "Memo";
                case N:
                    t = e._payload, e = e._init;
                    try {
                        return B(e(t));
                    }
                    catch (e) { }
            } return null; } function $(e) { var t = e.type; switch (e.tag) {
            case 24: return "Cache";
            case 9: return (t.displayName || "Context") + ".Consumer";
            case 10: return (t._context.displayName || "Context") + ".Provider";
            case 18: return "DehydratedFragment";
            case 11: return e = (e = t.render).displayName || e.name || "", t.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef");
            case 7: return "Fragment";
            case 5: return t;
            case 4: return "Portal";
            case 3: return "Root";
            case 6: return "Text";
            case 16: return B(t);
            case 8: return t === E ? "StrictMode" : "Mode";
            case 22: return "Offscreen";
            case 12: return "Profiler";
            case 21: return "Scope";
            case 13: return "Suspense";
            case 19: return "SuspenseList";
            case 25: return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
                if ("function" == typeof t)
                    return t.displayName || t.name || null;
                if ("string" == typeof t)
                    return t;
        } return null; } function V(e) { switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object": return e;
            default: return "";
        } } function Q(e) { var t = e.type; return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t); } function H(e) { e._valueTracker || (e._valueTracker = function (e) { var t = Q(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t]; if (!e.hasOwnProperty(t) && void 0 !== n && "function" == typeof n.get && "function" == typeof n.set) {
            var a = n.get, i = n.set;
            return Object.defineProperty(e, t, { configurable: !0, get: function () { return a.call(this); }, set: function (e) { r = "" + e, i.call(this, e); } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function () { return r; }, setValue: function (e) { r = "" + e; }, stopTracking: function () { e._valueTracker = null, delete e[t]; } };
        } }(e)); } function W(e) { if (!e)
            return !1; var t = e._valueTracker; if (!t)
            return !0; var n = t.getValue(), r = ""; return e && (r = Q(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0); } function K(e) { if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0)))
            return null; try {
            return e.activeElement || e.body;
        }
        catch (t) {
            return e.body;
        } } function Y(e, t) { var n = t.checked; return F({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != n ? n : e._wrapperState.initialChecked }); } function X(e, t) { var n = null == t.defaultValue ? "" : t.defaultValue, r = null != t.checked ? t.checked : t.defaultChecked; n = V(null != t.value ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value }; } function G(e, t) { null != (t = t.checked) && y(e, "checked", t, !1); } function J(e, t) { G(e, t); var n = V(t.value), r = t.type; if (null != n)
            "number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
        else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value"); t.hasOwnProperty("value") ? ee(e, t.type, n) : t.hasOwnProperty("defaultValue") && ee(e, t.type, V(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked); } function Z(e, t, n) { if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (!("submit" !== r && "reset" !== r || void 0 !== t.value && null !== t.value))
                return;
            t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
        } "" !== (n = e.name) && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, "" !== n && (e.name = n); } function ee(e, t, n) { "number" === t && K(e.ownerDocument) === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n)); } var te = Array.isArray; function ne(e, t, n, r) { if (e = e.options, t) {
            t = {};
            for (var a = 0; a < n.length; a++)
                t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
                a = t.hasOwnProperty("$" + e[n].value), e[n].selected !== a && (e[n].selected = a), a && r && (e[n].defaultSelected = !0);
        }
        else {
            for (n = "" + V(n), t = null, a = 0; a < e.length; a++) {
                if (e[a].value === n)
                    return e[a].selected = !0, void (r && (e[a].defaultSelected = !0));
                null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
        } } function re(e, t) { if (null != t.dangerouslySetInnerHTML)
            throw Error(i(91)); return F({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue }); } function ae(e, t) { var n = t.value; if (null == n) {
            if (n = t.children, t = t.defaultValue, null != n) {
                if (null != t)
                    throw Error(i(92));
                if (te(n)) {
                    if (1 < n.length)
                        throw Error(i(93));
                    n = n[0];
                }
                t = n;
            }
            null == t && (t = ""), n = t;
        } e._wrapperState = { initialValue: V(n) }; } function ie(e, t) { var n = V(t.value), r = V(t.defaultValue); null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != r && (e.defaultValue = "" + r); } function oe(e) { var t = e.textContent; t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t); } function le(e) { switch (e) {
            case "svg": return "http://www.w3.org/2000/svg";
            case "math": return "http://www.w3.org/1998/Math/MathML";
            default: return "http://www.w3.org/1999/xhtml";
        } } function ue(e, t) { return null == e || "http://www.w3.org/1999/xhtml" === e ? le(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e; } var se, ce, de = (ce = function (e, t) { if ("http://www.w3.org/2000/svg" !== e.namespaceURI || "innerHTML" in e)
            e.innerHTML = t;
        else {
            for ((se = se || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = se.firstChild; e.firstChild;)
                e.removeChild(e.firstChild);
            for (; t.firstChild;)
                e.appendChild(t.firstChild);
        } }, "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function (e, t, n, r) { MSApp.execUnsafeLocalFunction((function () { return ce(e, t); })); } : ce); function fe(e, t) { if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
                return void (n.nodeValue = t);
        } e.textContent = t; } var pe = { animationIterationCount: !0, aspectRatio: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridArea: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 }, me = ["Webkit", "ms", "Moz", "O"]; function he(e, t, n) { return null == t || "boolean" == typeof t || "" === t ? "" : n || "number" != typeof t || 0 === t || pe.hasOwnProperty(e) && pe[e] ? ("" + t).trim() : t + "px"; } function ve(e, t) { for (var n in e = e.style, t)
            if (t.hasOwnProperty(n)) {
                var r = 0 === n.indexOf("--"), a = he(n, t[n], r);
                "float" === n && (n = "cssFloat"), r ? e.setProperty(n, a) : e[n] = a;
            } } Object.keys(pe).forEach((function (e) { me.forEach((function (t) { t = t + e.charAt(0).toUpperCase() + e.substring(1), pe[t] = pe[e]; })); })); var ge = F({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 }); function be(e, t) { if (t) {
            if (ge[e] && (null != t.children || null != t.dangerouslySetInnerHTML))
                throw Error(i(137, e));
            if (null != t.dangerouslySetInnerHTML) {
                if (null != t.children)
                    throw Error(i(60));
                if ("object" != typeof t.dangerouslySetInnerHTML || !("__html" in t.dangerouslySetInnerHTML))
                    throw Error(i(61));
            }
            if (null != t.style && "object" != typeof t.style)
                throw Error(i(62));
        } } function ye(e, t) { if (-1 === e.indexOf("-"))
            return "string" == typeof t.is; switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph": return !1;
            default: return !0;
        } } var we = null; function ke(e) { return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e; } var Se = null, xe = null, Ee = null; function qe(e) { if (e = ya(e)) {
            if ("function" != typeof Se)
                throw Error(i(280));
            var t = e.stateNode;
            t && (t = ka(t), Se(e.stateNode, e.type, t));
        } } function Ce(e) { xe ? Ee ? Ee.push(e) : Ee = [e] : xe = e; } function _e() { if (xe) {
            var e = xe, t = Ee;
            if (Ee = xe = null, qe(e), t)
                for (e = 0; e < t.length; e++)
                    qe(t[e]);
        } } function Pe(e, t) { return e(t); } function Re() { } var De = !1; function Le(e, t, n) { if (De)
            return e(t, n); De = !0; try {
            return Pe(e, t, n);
        }
        finally {
            De = !1, (null !== xe || null !== Ee) && (Re(), _e());
        } } function Ne(e, t) { var n = e.stateNode; if (null === n)
            return null; var r = ka(n); if (null === r)
            return null; n = r[t]; e: switch (t) {
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
            default: e = !1;
        } if (e)
            return null; if (n && "function" != typeof n)
            throw Error(i(231, t, typeof n)); return n; } var Te = !1; if (c)
            try {
                var ze = {};
                Object.defineProperty(ze, "passive", { get: function () { Te = !0; } }), window.addEventListener("test", ze, ze), window.removeEventListener("test", ze, ze);
            }
            catch (ce) {
                Te = !1;
            } function Me(e, t, n, r, a, i, o, l, u) { var s = Array.prototype.slice.call(arguments, 3); try {
            t.apply(n, s);
        }
        catch (e) {
            this.onError(e);
        } } var Oe = !1, Fe = null, Ie = !1, Ue = null, Ae = { onError: function (e) { Oe = !0, Fe = e; } }; function je(e, t, n, r, a, i, o, l, u) { Oe = !1, Fe = null, Me.apply(Ae, arguments); } function Be(e) { var t = e, n = e; if (e.alternate)
            for (; t.return;)
                t = t.return;
        else {
            e = t;
            do {
                !!(4098 & (t = e).flags) && (n = t.return), e = t.return;
            } while (e);
        } return 3 === t.tag ? n : null; } function $e(e) { if (13 === e.tag) {
            var t = e.memoizedState;
            if (null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t)
                return t.dehydrated;
        } return null; } function Ve(e) { if (Be(e) !== e)
            throw Error(i(188)); } function Qe(e) { return null !== (e = function (e) { var t = e.alternate; if (!t) {
            if (null === (t = Be(e)))
                throw Error(i(188));
            return t !== e ? null : e;
        } for (var n = e, r = t;;) {
            var a = n.return;
            if (null === a)
                break;
            var o = a.alternate;
            if (null === o) {
                if (null !== (r = a.return)) {
                    n = r;
                    continue;
                }
                break;
            }
            if (a.child === o.child) {
                for (o = a.child; o;) {
                    if (o === n)
                        return Ve(a), e;
                    if (o === r)
                        return Ve(a), t;
                    o = o.sibling;
                }
                throw Error(i(188));
            }
            if (n.return !== r.return)
                n = a, r = o;
            else {
                for (var l = !1, u = a.child; u;) {
                    if (u === n) {
                        l = !0, n = a, r = o;
                        break;
                    }
                    if (u === r) {
                        l = !0, r = a, n = o;
                        break;
                    }
                    u = u.sibling;
                }
                if (!l) {
                    for (u = o.child; u;) {
                        if (u === n) {
                            l = !0, n = o, r = a;
                            break;
                        }
                        if (u === r) {
                            l = !0, r = o, n = a;
                            break;
                        }
                        u = u.sibling;
                    }
                    if (!l)
                        throw Error(i(189));
                }
            }
            if (n.alternate !== r)
                throw Error(i(190));
        } if (3 !== n.tag)
            throw Error(i(188)); return n.stateNode.current === n ? e : t; }(e)) ? He(e) : null; } function He(e) { if (5 === e.tag || 6 === e.tag)
            return e; for (e = e.child; null !== e;) {
            var t = He(e);
            if (null !== t)
                return t;
            e = e.sibling;
        } return null; } var We = a.unstable_scheduleCallback, Ke = a.unstable_cancelCallback, Ye = a.unstable_shouldYield, Xe = a.unstable_requestPaint, Ge = a.unstable_now, Je = a.unstable_getCurrentPriorityLevel, Ze = a.unstable_ImmediatePriority, et = a.unstable_UserBlockingPriority, tt = a.unstable_NormalPriority, nt = a.unstable_LowPriority, rt = a.unstable_IdlePriority, at = null, it = null, ot = Math.clz32 ? Math.clz32 : function (e) { return 0 === (e >>>= 0) ? 32 : 31 - (lt(e) / ut | 0) | 0; }, lt = Math.log, ut = Math.LN2, st = 64, ct = 4194304; function dt(e) { switch (e & -e) {
            case 1: return 1;
            case 2: return 2;
            case 4: return 4;
            case 8: return 8;
            case 16: return 16;
            case 32: return 32;
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
            case 2097152: return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864: return 130023424 & e;
            case 134217728: return 134217728;
            case 268435456: return 268435456;
            case 536870912: return 536870912;
            case 1073741824: return 1073741824;
            default: return e;
        } } function ft(e, t) { var n = e.pendingLanes; if (0 === n)
            return 0; var r = 0, a = e.suspendedLanes, i = e.pingedLanes, o = 268435455 & n; if (0 !== o) {
            var l = o & ~a;
            0 !== l ? r = dt(l) : 0 != (i &= o) && (r = dt(i));
        }
        else
            0 != (o = n & ~a) ? r = dt(o) : 0 !== i && (r = dt(i)); if (0 === r)
            return 0; if (0 !== t && t !== r && !(t & a) && ((a = r & -r) >= (i = t & -t) || 16 === a && 4194240 & i))
            return t; if (4 & r && (r |= 16 & n), 0 !== (t = e.entangledLanes))
            for (e = e.entanglements, t &= r; 0 < t;)
                a = 1 << (n = 31 - ot(t)), r |= e[n], t &= ~a; return r; } function pt(e, t) { switch (e) {
            case 1:
            case 2:
            case 4: return t + 250;
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
            case 2097152: return t + 5e3;
            default: return -1;
        } } function mt(e) { return 0 != (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0; } function ht() { var e = st; return !(4194240 & (st <<= 1)) && (st = 64), e; } function vt(e) { for (var t = [], n = 0; 31 > n; n++)
            t.push(e); return t; } function gt(e, t, n) { e.pendingLanes |= t, 536870912 !== t && (e.suspendedLanes = 0, e.pingedLanes = 0), (e = e.eventTimes)[t = 31 - ot(t)] = n; } function bt(e, t) { var n = e.entangledLanes |= t; for (e = e.entanglements; n;) {
            var r = 31 - ot(n), a = 1 << r;
            a & t | e[r] & t && (e[r] |= t), n &= ~a;
        } } var yt = 0; function wt(e) { return 1 < (e &= -e) ? 4 < e ? 268435455 & e ? 16 : 536870912 : 4 : 1; } var kt, St, xt, Et, qt, Ct = !1, _t = [], Pt = null, Rt = null, Dt = null, Lt = new Map, Nt = new Map, Tt = [], zt = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" "); function Mt(e, t) { switch (e) {
            case "focusin":
            case "focusout":
                Pt = null;
                break;
            case "dragenter":
            case "dragleave":
                Rt = null;
                break;
            case "mouseover":
            case "mouseout":
                Dt = null;
                break;
            case "pointerover":
            case "pointerout":
                Lt.delete(t.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture": Nt.delete(t.pointerId);
        } } function Ot(e, t, n, r, a, i) { return null === e || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [a] }, null !== t && null !== (t = ya(t)) && St(t), e) : (e.eventSystemFlags |= r, t = e.targetContainers, null !== a && -1 === t.indexOf(a) && t.push(a), e); } function Ft(e) { var t = ba(e.target); if (null !== t) {
            var n = Be(t);
            if (null !== n)
                if (13 === (t = n.tag)) {
                    if (null !== (t = $e(n)))
                        return e.blockedOn = t, void qt(e.priority, (function () { xt(n); }));
                }
                else if (3 === t && n.stateNode.current.memoizedState.isDehydrated)
                    return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null);
        } e.blockedOn = null; } function It(e) { if (null !== e.blockedOn)
            return !1; for (var t = e.targetContainers; 0 < t.length;) {
            var n = Yt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
                return null !== (t = ya(n)) && St(t), e.blockedOn = n, !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            we = r, n.target.dispatchEvent(r), we = null, t.shift();
        } return !0; } function Ut(e, t, n) { It(e) && n.delete(t); } function At() { Ct = !1, null !== Pt && It(Pt) && (Pt = null), null !== Rt && It(Rt) && (Rt = null), null !== Dt && It(Dt) && (Dt = null), Lt.forEach(Ut), Nt.forEach(Ut); } function jt(e, t) { e.blockedOn === t && (e.blockedOn = null, Ct || (Ct = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, At))); } function Bt(e) { function t(t) { return jt(t, e); } if (0 < _t.length) {
            jt(_t[0], e);
            for (var n = 1; n < _t.length; n++) {
                var r = _t[n];
                r.blockedOn === e && (r.blockedOn = null);
            }
        } for (null !== Pt && jt(Pt, e), null !== Rt && jt(Rt, e), null !== Dt && jt(Dt, e), Lt.forEach(t), Nt.forEach(t), n = 0; n < Tt.length; n++)
            (r = Tt[n]).blockedOn === e && (r.blockedOn = null); for (; 0 < Tt.length && null === (n = Tt[0]).blockedOn;)
            Ft(n), null === n.blockedOn && Tt.shift(); } var $t = w.ReactCurrentBatchConfig, Vt = !0; function Qt(e, t, n, r) { var a = yt, i = $t.transition; $t.transition = null; try {
            yt = 1, Wt(e, t, n, r);
        }
        finally {
            yt = a, $t.transition = i;
        } } function Ht(e, t, n, r) { var a = yt, i = $t.transition; $t.transition = null; try {
            yt = 4, Wt(e, t, n, r);
        }
        finally {
            yt = a, $t.transition = i;
        } } function Wt(e, t, n, r) { if (Vt) {
            var a = Yt(e, t, n, r);
            if (null === a)
                Vr(e, t, r, Kt, n), Mt(e, r);
            else if (function (e, t, n, r, a) { switch (t) {
                case "focusin": return Pt = Ot(Pt, e, t, n, r, a), !0;
                case "dragenter": return Rt = Ot(Rt, e, t, n, r, a), !0;
                case "mouseover": return Dt = Ot(Dt, e, t, n, r, a), !0;
                case "pointerover":
                    var i = a.pointerId;
                    return Lt.set(i, Ot(Lt.get(i) || null, e, t, n, r, a)), !0;
                case "gotpointercapture": return i = a.pointerId, Nt.set(i, Ot(Nt.get(i) || null, e, t, n, r, a)), !0;
            } return !1; }(a, e, t, n, r))
                r.stopPropagation();
            else if (Mt(e, r), 4 & t && -1 < zt.indexOf(e)) {
                for (; null !== a;) {
                    var i = ya(a);
                    if (null !== i && kt(i), null === (i = Yt(e, t, n, r)) && Vr(e, t, r, Kt, n), i === a)
                        break;
                    a = i;
                }
                null !== a && r.stopPropagation();
            }
            else
                Vr(e, t, r, null, n);
        } } var Kt = null; function Yt(e, t, n, r) { if (Kt = null, null !== (e = ba(e = ke(r))))
            if (null === (t = Be(e)))
                e = null;
            else if (13 === (n = t.tag)) {
                if (null !== (e = $e(t)))
                    return e;
                e = null;
            }
            else if (3 === n) {
                if (t.stateNode.current.memoizedState.isDehydrated)
                    return 3 === t.tag ? t.stateNode.containerInfo : null;
                e = null;
            }
            else
                t !== e && (e = null); return Kt = e, null; } function Xt(e) { switch (e) {
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
            case "selectstart": return 1;
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
            case "pointerleave": return 4;
            case "message": switch (Je()) {
                case Ze: return 1;
                case et: return 4;
                case tt:
                case nt: return 16;
                case rt: return 536870912;
                default: return 16;
            }
            default: return 16;
        } } var Gt = null, Jt = null, Zt = null; function en() { if (Zt)
            return Zt; var e, t, n = Jt, r = n.length, a = "value" in Gt ? Gt.value : Gt.textContent, i = a.length; for (e = 0; e < r && n[e] === a[e]; e++)
            ; var o = r - e; for (t = 1; t <= o && n[r - t] === a[i - t]; t++)
            ; return Zt = a.slice(e, 1 < t ? 1 - t : void 0); } function tn(e) { var t = e.keyCode; return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0; } function nn() { return !0; } function rn() { return !1; } function an(e) { function t(t, n, r, a, i) { for (var o in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = a, this.target = i, this.currentTarget = null, e)
            e.hasOwnProperty(o) && (t = e[o], this[o] = t ? t(a) : a[o]); return this.isDefaultPrevented = (null != a.defaultPrevented ? a.defaultPrevented : !1 === a.returnValue) ? nn : rn, this.isPropagationStopped = rn, this; } return F(t.prototype, { preventDefault: function () { this.defaultPrevented = !0; var e = this.nativeEvent; e && (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = nn); }, stopPropagation: function () { var e = this.nativeEvent; e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = nn); }, persist: function () { }, isPersistent: nn }), t; } var on, ln, un, sn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function (e) { return e.timeStamp || Date.now(); }, defaultPrevented: 0, isTrusted: 0 }, cn = an(sn), dn = F({}, sn, { view: 0, detail: 0 }), fn = an(dn), pn = F({}, dn, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: qn, button: 0, buttons: 0, relatedTarget: function (e) { return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget; }, movementX: function (e) { return "movementX" in e ? e.movementX : (e !== un && (un && "mousemove" === e.type ? (on = e.screenX - un.screenX, ln = e.screenY - un.screenY) : ln = on = 0, un = e), on); }, movementY: function (e) { return "movementY" in e ? e.movementY : ln; } }), mn = an(pn), hn = an(F({}, pn, { dataTransfer: 0 })), vn = an(F({}, dn, { relatedTarget: 0 })), gn = an(F({}, sn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })), bn = F({}, sn, { clipboardData: function (e) { return "clipboardData" in e ? e.clipboardData : window.clipboardData; } }), yn = an(bn), wn = an(F({}, sn, { data: 0 })), kn = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, Sn = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, xn = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" }; function En(e) { var t = this.nativeEvent; return t.getModifierState ? t.getModifierState(e) : !!(e = xn[e]) && !!t[e]; } function qn() { return En; } var Cn = F({}, dn, { key: function (e) { if (e.key) {
                var t = kn[e.key] || e.key;
                if ("Unidentified" !== t)
                    return t;
            } return "keypress" === e.type ? 13 === (e = tn(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? Sn[e.keyCode] || "Unidentified" : ""; }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: qn, charCode: function (e) { return "keypress" === e.type ? tn(e) : 0; }, keyCode: function (e) { return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0; }, which: function (e) { return "keypress" === e.type ? tn(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0; } }), _n = an(Cn), Pn = an(F({}, pn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 })), Rn = an(F({}, dn, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: qn })), Dn = an(F({}, sn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })), Ln = F({}, pn, { deltaX: function (e) { return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0; }, deltaY: function (e) { return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0; }, deltaZ: 0, deltaMode: 0 }), Nn = an(Ln), Tn = [9, 13, 27, 32], zn = c && "CompositionEvent" in window, Mn = null; c && "documentMode" in document && (Mn = document.documentMode); var On = c && "TextEvent" in window && !Mn, Fn = c && (!zn || Mn && 8 < Mn && 11 >= Mn), In = String.fromCharCode(32), Un = !1; function An(e, t) { switch (e) {
            case "keyup": return -1 !== Tn.indexOf(t.keyCode);
            case "keydown": return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout": return !0;
            default: return !1;
        } } function jn(e) { return "object" == typeof (e = e.detail) && "data" in e ? e.data : null; } var Bn = !1, $n = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 }; function Vn(e) { var t = e && e.nodeName && e.nodeName.toLowerCase(); return "input" === t ? !!$n[e.type] : "textarea" === t; } function Qn(e, t, n, r) { Ce(r), 0 < (t = Hr(t, "onChange")).length && (n = new cn("onChange", "change", null, n, r), e.push({ event: n, listeners: t })); } var Hn = null, Wn = null; function Kn(e) { Ir(e, 0); } function Yn(e) { if (W(wa(e)))
            return e; } function Xn(e, t) { if ("change" === e)
            return t; } var Gn = !1; if (c) {
            var Jn;
            if (c) {
                var Zn = "oninput" in document;
                if (!Zn) {
                    var er = document.createElement("div");
                    er.setAttribute("oninput", "return;"), Zn = "function" == typeof er.oninput;
                }
                Jn = Zn;
            }
            else
                Jn = !1;
            Gn = Jn && (!document.documentMode || 9 < document.documentMode);
        } function tr() { Hn && (Hn.detachEvent("onpropertychange", nr), Wn = Hn = null); } function nr(e) { if ("value" === e.propertyName && Yn(Wn)) {
            var t = [];
            Qn(t, Wn, e, ke(e)), Le(Kn, t);
        } } function rr(e, t, n) { "focusin" === e ? (tr(), Wn = n, (Hn = t).attachEvent("onpropertychange", nr)) : "focusout" === e && tr(); } function ar(e) { if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Yn(Wn); } function ir(e, t) { if ("click" === e)
            return Yn(t); } function or(e, t) { if ("input" === e || "change" === e)
            return Yn(t); } var lr = "function" == typeof Object.is ? Object.is : function (e, t) { return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t; }; function ur(e, t) { if (lr(e, t))
            return !0; if ("object" != typeof e || null === e || "object" != typeof t || null === t)
            return !1; var n = Object.keys(e), r = Object.keys(t); if (n.length !== r.length)
            return !1; for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!d.call(t, a) || !lr(e[a], t[a]))
                return !1;
        } return !0; } function sr(e) { for (; e && e.firstChild;)
            e = e.firstChild; return e; } function cr(e, t) { var n, r = sr(e); for (e = 0; r;) {
            if (3 === r.nodeType) {
                if (n = e + r.textContent.length, e <= t && n >= t)
                    return { node: r, offset: t - e };
                e = n;
            }
            e: {
                for (; r;) {
                    if (r.nextSibling) {
                        r = r.nextSibling;
                        break e;
                    }
                    r = r.parentNode;
                }
                r = void 0;
            }
            r = sr(r);
        } } function dr(e, t) { return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? dr(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t)))); } function fr() { for (var e = window, t = K(); t instanceof e.HTMLIFrameElement;) {
            try {
                var n = "string" == typeof t.contentWindow.location.href;
            }
            catch (e) {
                n = !1;
            }
            if (!n)
                break;
            t = K((e = t.contentWindow).document);
        } return t; } function pr(e) { var t = e && e.nodeName && e.nodeName.toLowerCase(); return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable); } function mr(e) { var t = fr(), n = e.focusedElem, r = e.selectionRange; if (t !== n && n && n.ownerDocument && dr(n.ownerDocument.documentElement, n)) {
            if (null !== r && pr(n))
                if (t = r.start, void 0 === (e = r.end) && (e = t), "selectionStart" in n)
                    n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
                else if ((e = (t = n.ownerDocument || document) && t.defaultView || window).getSelection) {
                    e = e.getSelection();
                    var a = n.textContent.length, i = Math.min(r.start, a);
                    r = void 0 === r.end ? i : Math.min(r.end, a), !e.extend && i > r && (a = r, r = i, i = a), a = cr(n, i);
                    var o = cr(n, r);
                    a && o && (1 !== e.rangeCount || e.anchorNode !== a.node || e.anchorOffset !== a.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && ((t = t.createRange()).setStart(a.node, a.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)));
                }
            for (t = [], e = n; e = e.parentNode;)
                1 === e.nodeType && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for ("function" == typeof n.focus && n.focus(), n = 0; n < t.length; n++)
                (e = t[n]).element.scrollLeft = e.left, e.element.scrollTop = e.top;
        } } var hr = c && "documentMode" in document && 11 >= document.documentMode, vr = null, gr = null, br = null, yr = !1; function wr(e, t, n) { var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument; yr || null == vr || vr !== K(r) || (r = "selectionStart" in (r = vr) && pr(r) ? { start: r.selectionStart, end: r.selectionEnd } : { anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }, br && ur(br, r) || (br = r, 0 < (r = Hr(gr, "onSelect")).length && (t = new cn("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = vr))); } function kr(e, t) { var n = {}; return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n; } var Sr = { animationend: kr("Animation", "AnimationEnd"), animationiteration: kr("Animation", "AnimationIteration"), animationstart: kr("Animation", "AnimationStart"), transitionend: kr("Transition", "TransitionEnd") }, xr = {}, Er = {}; function qr(e) { if (xr[e])
            return xr[e]; if (!Sr[e])
            return e; var t, n = Sr[e]; for (t in n)
            if (n.hasOwnProperty(t) && t in Er)
                return xr[e] = n[t]; return e; } c && (Er = document.createElement("div").style, "AnimationEvent" in window || (delete Sr.animationend.animation, delete Sr.animationiteration.animation, delete Sr.animationstart.animation), "TransitionEvent" in window || delete Sr.transitionend.transition); var Cr = qr("animationend"), _r = qr("animationiteration"), Pr = qr("animationstart"), Rr = qr("transitionend"), Dr = new Map, Lr = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" "); function Nr(e, t) { Dr.set(e, t), u(t, [e]); } for (var Tr = 0; Tr < Lr.length; Tr++) {
            var zr = Lr[Tr];
            Nr(zr.toLowerCase(), "on" + (zr[0].toUpperCase() + zr.slice(1)));
        } Nr(Cr, "onAnimationEnd"), Nr(_r, "onAnimationIteration"), Nr(Pr, "onAnimationStart"), Nr("dblclick", "onDoubleClick"), Nr("focusin", "onFocus"), Nr("focusout", "onBlur"), Nr(Rr, "onTransitionEnd"), s("onMouseEnter", ["mouseout", "mouseover"]), s("onMouseLeave", ["mouseout", "mouseover"]), s("onPointerEnter", ["pointerout", "pointerover"]), s("onPointerLeave", ["pointerout", "pointerover"]), u("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), u("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), u("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), u("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), u("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), u("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" ")); var Mr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Or = new Set("cancel close invalid load scroll toggle".split(" ").concat(Mr)); function Fr(e, t, n) { var r = e.type || "unknown-event"; e.currentTarget = n, function (e, t, n, r, a, o, l, u, s) { if (je.apply(this, arguments), Oe) {
            if (!Oe)
                throw Error(i(198));
            var c = Fe;
            Oe = !1, Fe = null, Ie || (Ie = !0, Ue = c);
        } }(r, t, void 0, e), e.currentTarget = null; } function Ir(e, t) { t = !!(4 & t); for (var n = 0; n < e.length; n++) {
            var r = e[n], a = r.event;
            r = r.listeners;
            e: {
                var i = void 0;
                if (t)
                    for (var o = r.length - 1; 0 <= o; o--) {
                        var l = r[o], u = l.instance, s = l.currentTarget;
                        if (l = l.listener, u !== i && a.isPropagationStopped())
                            break e;
                        Fr(a, l, s), i = u;
                    }
                else
                    for (o = 0; o < r.length; o++) {
                        if (u = (l = r[o]).instance, s = l.currentTarget, l = l.listener, u !== i && a.isPropagationStopped())
                            break e;
                        Fr(a, l, s), i = u;
                    }
            }
        } if (Ie)
            throw e = Ue, Ie = !1, Ue = null, e; } function Ur(e, t) { var n = t[ha]; void 0 === n && (n = t[ha] = new Set); var r = e + "__bubble"; n.has(r) || ($r(t, e, 2, !1), n.add(r)); } function Ar(e, t, n) { var r = 0; t && (r |= 4), $r(n, e, r, t); } var jr = "_reactListening" + Math.random().toString(36).slice(2); function Br(e) { if (!e[jr]) {
            e[jr] = !0, o.forEach((function (t) { "selectionchange" !== t && (Or.has(t) || Ar(t, !1, e), Ar(t, !0, e)); }));
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[jr] || (t[jr] = !0, Ar("selectionchange", !1, t));
        } } function $r(e, t, n, r) { switch (Xt(t)) {
            case 1:
                var a = Qt;
                break;
            case 4:
                a = Ht;
                break;
            default: a = Wt;
        } n = a.bind(null, t, n, e), a = void 0, !Te || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (a = !0), r ? void 0 !== a ? e.addEventListener(t, n, { capture: !0, passive: a }) : e.addEventListener(t, n, !0) : void 0 !== a ? e.addEventListener(t, n, { passive: a }) : e.addEventListener(t, n, !1); } function Vr(e, t, n, r, a) { var i = r; if (!(1 & t || 2 & t || null === r))
            e: for (;;) {
                if (null === r)
                    return;
                var o = r.tag;
                if (3 === o || 4 === o) {
                    var l = r.stateNode.containerInfo;
                    if (l === a || 8 === l.nodeType && l.parentNode === a)
                        break;
                    if (4 === o)
                        for (o = r.return; null !== o;) {
                            var u = o.tag;
                            if ((3 === u || 4 === u) && ((u = o.stateNode.containerInfo) === a || 8 === u.nodeType && u.parentNode === a))
                                return;
                            o = o.return;
                        }
                    for (; null !== l;) {
                        if (null === (o = ba(l)))
                            return;
                        if (5 === (u = o.tag) || 6 === u) {
                            r = i = o;
                            continue e;
                        }
                        l = l.parentNode;
                    }
                }
                r = r.return;
            } Le((function () { var r = i, a = ke(n), o = []; e: {
            var l = Dr.get(e);
            if (void 0 !== l) {
                var u = cn, s = e;
                switch (e) {
                    case "keypress": if (0 === tn(n))
                        break e;
                    case "keydown":
                    case "keyup":
                        u = _n;
                        break;
                    case "focusin":
                        s = "focus", u = vn;
                        break;
                    case "focusout":
                        s = "blur", u = vn;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        u = vn;
                        break;
                    case "click": if (2 === n.button)
                        break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        u = mn;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        u = hn;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        u = Rn;
                        break;
                    case Cr:
                    case _r:
                    case Pr:
                        u = gn;
                        break;
                    case Rr:
                        u = Dn;
                        break;
                    case "scroll":
                        u = fn;
                        break;
                    case "wheel":
                        u = Nn;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        u = yn;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup": u = Pn;
                }
                var c = !!(4 & t), d = !c && "scroll" === e, f = c ? null !== l ? l + "Capture" : null : l;
                c = [];
                for (var p, m = r; null !== m;) {
                    var h = (p = m).stateNode;
                    if (5 === p.tag && null !== h && (p = h, null !== f && null != (h = Ne(m, f)) && c.push(Qr(m, h, p))), d)
                        break;
                    m = m.return;
                }
                0 < c.length && (l = new u(l, s, null, n, a), o.push({ event: l, listeners: c }));
            }
        } if (!(7 & t)) {
            if (u = "mouseout" === e || "pointerout" === e, (!(l = "mouseover" === e || "pointerover" === e) || n === we || !(s = n.relatedTarget || n.fromElement) || !ba(s) && !s[ma]) && (u || l) && (l = a.window === a ? a : (l = a.ownerDocument) ? l.defaultView || l.parentWindow : window, u ? (u = r, null !== (s = (s = n.relatedTarget || n.toElement) ? ba(s) : null) && (s !== (d = Be(s)) || 5 !== s.tag && 6 !== s.tag) && (s = null)) : (u = null, s = r), u !== s)) {
                if (c = mn, h = "onMouseLeave", f = "onMouseEnter", m = "mouse", "pointerout" !== e && "pointerover" !== e || (c = Pn, h = "onPointerLeave", f = "onPointerEnter", m = "pointer"), d = null == u ? l : wa(u), p = null == s ? l : wa(s), (l = new c(h, m + "leave", u, n, a)).target = d, l.relatedTarget = p, h = null, ba(a) === r && ((c = new c(f, m + "enter", s, n, a)).target = p, c.relatedTarget = d, h = c), d = h, u && s)
                    e: {
                        for (f = s, m = 0, p = c = u; p; p = Wr(p))
                            m++;
                        for (p = 0, h = f; h; h = Wr(h))
                            p++;
                        for (; 0 < m - p;)
                            c = Wr(c), m--;
                        for (; 0 < p - m;)
                            f = Wr(f), p--;
                        for (; m--;) {
                            if (c === f || null !== f && c === f.alternate)
                                break e;
                            c = Wr(c), f = Wr(f);
                        }
                        c = null;
                    }
                else
                    c = null;
                null !== u && Kr(o, l, u, c, !1), null !== s && null !== d && Kr(o, d, s, c, !0);
            }
            if ("select" === (u = (l = r ? wa(r) : window).nodeName && l.nodeName.toLowerCase()) || "input" === u && "file" === l.type)
                var v = Xn;
            else if (Vn(l))
                if (Gn)
                    v = or;
                else {
                    v = ar;
                    var g = rr;
                }
            else
                (u = l.nodeName) && "input" === u.toLowerCase() && ("checkbox" === l.type || "radio" === l.type) && (v = ir);
            switch (v && (v = v(e, r)) ? Qn(o, v, n, a) : (g && g(e, l, r), "focusout" === e && (g = l._wrapperState) && g.controlled && "number" === l.type && ee(l, "number", l.value)), g = r ? wa(r) : window, e) {
                case "focusin":
                    (Vn(g) || "true" === g.contentEditable) && (vr = g, gr = r, br = null);
                    break;
                case "focusout":
                    br = gr = vr = null;
                    break;
                case "mousedown":
                    yr = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    yr = !1, wr(o, n, a);
                    break;
                case "selectionchange": if (hr)
                    break;
                case "keydown":
                case "keyup": wr(o, n, a);
            }
            var b;
            if (zn)
                e: {
                    switch (e) {
                        case "compositionstart":
                            var y = "onCompositionStart";
                            break e;
                        case "compositionend":
                            y = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            y = "onCompositionUpdate";
                            break e;
                    }
                    y = void 0;
                }
            else
                Bn ? An(e, n) && (y = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (y = "onCompositionStart");
            y && (Fn && "ko" !== n.locale && (Bn || "onCompositionStart" !== y ? "onCompositionEnd" === y && Bn && (b = en()) : (Jt = "value" in (Gt = a) ? Gt.value : Gt.textContent, Bn = !0)), 0 < (g = Hr(r, y)).length && (y = new wn(y, e, null, n, a), o.push({ event: y, listeners: g }), (b || null !== (b = jn(n))) && (y.data = b))), (b = On ? function (e, t) { switch (e) {
                case "compositionend": return jn(t);
                case "keypress": return 32 !== t.which ? null : (Un = !0, In);
                case "textInput": return (e = t.data) === In && Un ? null : e;
                default: return null;
            } }(e, n) : function (e, t) { if (Bn)
                return "compositionend" === e || !zn && An(e, t) ? (e = en(), Zt = Jt = Gt = null, Bn = !1, e) : null; switch (e) {
                case "paste":
                default: return null;
                case "keypress":
                    if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                        if (t.char && 1 < t.char.length)
                            return t.char;
                        if (t.which)
                            return String.fromCharCode(t.which);
                    }
                    return null;
                case "compositionend": return Fn && "ko" !== t.locale ? null : t.data;
            } }(e, n)) && 0 < (r = Hr(r, "onBeforeInput")).length && (a = new wn("onBeforeInput", "beforeinput", null, n, a), o.push({ event: a, listeners: r }), a.data = b);
        } Ir(o, t); })); } function Qr(e, t, n) { return { instance: e, listener: t, currentTarget: n }; } function Hr(e, t) { for (var n = t + "Capture", r = []; null !== e;) {
            var a = e, i = a.stateNode;
            5 === a.tag && null !== i && (a = i, null != (i = Ne(e, n)) && r.unshift(Qr(e, i, a)), null != (i = Ne(e, t)) && r.push(Qr(e, i, a))), e = e.return;
        } return r; } function Wr(e) { if (null === e)
            return null; do {
            e = e.return;
        } while (e && 5 !== e.tag); return e || null; } function Kr(e, t, n, r, a) { for (var i = t._reactName, o = []; null !== n && n !== r;) {
            var l = n, u = l.alternate, s = l.stateNode;
            if (null !== u && u === r)
                break;
            5 === l.tag && null !== s && (l = s, a ? null != (u = Ne(n, i)) && o.unshift(Qr(n, u, l)) : a || null != (u = Ne(n, i)) && o.push(Qr(n, u, l))), n = n.return;
        } 0 !== o.length && e.push({ event: t, listeners: o }); } var Yr = /\r\n?/g, Xr = /\u0000|\uFFFD/g; function Gr(e) { return ("string" == typeof e ? e : "" + e).replace(Yr, "\n").replace(Xr, ""); } function Jr(e, t, n) { if (t = Gr(t), Gr(e) !== t && n)
            throw Error(i(425)); } function Zr() { } var ea = null, ta = null; function na(e, t) { return "textarea" === e || "noscript" === e || "string" == typeof t.children || "number" == typeof t.children || "object" == typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html; } var ra = "function" == typeof setTimeout ? setTimeout : void 0, aa = "function" == typeof clearTimeout ? clearTimeout : void 0, ia = "function" == typeof Promise ? Promise : void 0, oa = "function" == typeof queueMicrotask ? queueMicrotask : void 0 !== ia ? function (e) { return ia.resolve(null).then(e).catch(la); } : ra; function la(e) { setTimeout((function () { throw e; })); } function ua(e, t) { var n = t, r = 0; do {
            var a = n.nextSibling;
            if (e.removeChild(n), a && 8 === a.nodeType)
                if ("/$" === (n = a.data)) {
                    if (0 === r)
                        return e.removeChild(a), void Bt(t);
                    r--;
                }
                else
                    "$" !== n && "$?" !== n && "$!" !== n || r++;
            n = a;
        } while (n); Bt(t); } function sa(e) { for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t)
                break;
            if (8 === t) {
                if ("$" === (t = e.data) || "$!" === t || "$?" === t)
                    break;
                if ("/$" === t)
                    return null;
            }
        } return e; } function ca(e) { e = e.previousSibling; for (var t = 0; e;) {
            if (8 === e.nodeType) {
                var n = e.data;
                if ("$" === n || "$!" === n || "$?" === n) {
                    if (0 === t)
                        return e;
                    t--;
                }
                else
                    "/$" === n && t++;
            }
            e = e.previousSibling;
        } return null; } var da = Math.random().toString(36).slice(2), fa = "__reactFiber$" + da, pa = "__reactProps$" + da, ma = "__reactContainer$" + da, ha = "__reactEvents$" + da, va = "__reactListeners$" + da, ga = "__reactHandles$" + da; function ba(e) { var t = e[fa]; if (t)
            return t; for (var n = e.parentNode; n;) {
            if (t = n[ma] || n[fa]) {
                if (n = t.alternate, null !== t.child || null !== n && null !== n.child)
                    for (e = ca(e); null !== e;) {
                        if (n = e[fa])
                            return n;
                        e = ca(e);
                    }
                return t;
            }
            n = (e = n).parentNode;
        } return null; } function ya(e) { return !(e = e[fa] || e[ma]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e; } function wa(e) { if (5 === e.tag || 6 === e.tag)
            return e.stateNode; throw Error(i(33)); } function ka(e) { return e[pa] || null; } var Sa = [], xa = -1; function Ea(e) { return { current: e }; } function qa(e) { 0 > xa || (e.current = Sa[xa], Sa[xa] = null, xa--); } function Ca(e, t) { xa++, Sa[xa] = e.current, e.current = t; } var _a = {}, Pa = Ea(_a), Ra = Ea(!1), Da = _a; function La(e, t) { var n = e.type.contextTypes; if (!n)
            return _a; var r = e.stateNode; if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext; var a, i = {}; for (a in n)
            i[a] = t[a]; return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i; } function Na(e) { return null != e.childContextTypes; } function Ta() { qa(Ra), qa(Pa); } function za(e, t, n) { if (Pa.current !== _a)
            throw Error(i(168)); Ca(Pa, t), Ca(Ra, n); } function Ma(e, t, n) { var r = e.stateNode; if (t = t.childContextTypes, "function" != typeof r.getChildContext)
            return n; for (var a in r = r.getChildContext())
            if (!(a in t))
                throw Error(i(108, $(e) || "Unknown", a)); return F({}, n, r); } function Oa(e) { return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || _a, Da = Pa.current, Ca(Pa, e), Ca(Ra, Ra.current), !0; } function Fa(e, t, n) { var r = e.stateNode; if (!r)
            throw Error(i(169)); n ? (e = Ma(e, t, Da), r.__reactInternalMemoizedMergedChildContext = e, qa(Ra), qa(Pa), Ca(Pa, e)) : qa(Ra), Ca(Ra, n); } var Ia = null, Ua = !1, Aa = !1; function ja(e) { null === Ia ? Ia = [e] : Ia.push(e); } function Ba() { if (!Aa && null !== Ia) {
            Aa = !0;
            var e = 0, t = yt;
            try {
                var n = Ia;
                for (yt = 1; e < n.length; e++) {
                    var r = n[e];
                    do {
                        r = r(!0);
                    } while (null !== r);
                }
                Ia = null, Ua = !1;
            }
            catch (t) {
                throw null !== Ia && (Ia = Ia.slice(e + 1)), We(Ze, Ba), t;
            }
            finally {
                yt = t, Aa = !1;
            }
        } return null; } var $a = [], Va = 0, Qa = null, Ha = 0, Wa = [], Ka = 0, Ya = null, Xa = 1, Ga = ""; function Ja(e, t) { $a[Va++] = Ha, $a[Va++] = Qa, Qa = e, Ha = t; } function Za(e, t, n) { Wa[Ka++] = Xa, Wa[Ka++] = Ga, Wa[Ka++] = Ya, Ya = e; var r = Xa; e = Ga; var a = 32 - ot(r) - 1; r &= ~(1 << a), n += 1; var i = 32 - ot(t) + a; if (30 < i) {
            var o = a - a % 5;
            i = (r & (1 << o) - 1).toString(32), r >>= o, a -= o, Xa = 1 << 32 - ot(t) + a | n << a | r, Ga = i + e;
        }
        else
            Xa = 1 << i | n << a | r, Ga = e; } function ei(e) { null !== e.return && (Ja(e, 1), Za(e, 1, 0)); } function ti(e) { for (; e === Qa;)
            Qa = $a[--Va], $a[Va] = null, Ha = $a[--Va], $a[Va] = null; for (; e === Ya;)
            Ya = Wa[--Ka], Wa[Ka] = null, Ga = Wa[--Ka], Wa[Ka] = null, Xa = Wa[--Ka], Wa[Ka] = null; } var ni = null, ri = null, ai = !1, ii = null; function oi(e, t) { var n = Ns(5, null, null, 0); n.elementType = "DELETED", n.stateNode = t, n.return = e, null === (t = e.deletions) ? (e.deletions = [n], e.flags |= 16) : t.push(n); } function li(e, t) { switch (e.tag) {
            case 5:
                var n = e.type;
                return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, ni = e, ri = sa(t.firstChild), !0);
            case 6: return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, ni = e, ri = null, !0);
            case 13: return null !== (t = 8 !== t.nodeType ? null : t) && (n = null !== Ya ? { id: Xa, overflow: Ga } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, (n = Ns(18, null, null, 0)).stateNode = t, n.return = e, e.child = n, ni = e, ri = null, !0);
            default: return !1;
        } } function ui(e) { return !(!(1 & e.mode) || 128 & e.flags); } function si(e) { if (ai) {
            var t = ri;
            if (t) {
                var n = t;
                if (!li(e, t)) {
                    if (ui(e))
                        throw Error(i(418));
                    t = sa(n.nextSibling);
                    var r = ni;
                    t && li(e, t) ? oi(r, n) : (e.flags = -4097 & e.flags | 2, ai = !1, ni = e);
                }
            }
            else {
                if (ui(e))
                    throw Error(i(418));
                e.flags = -4097 & e.flags | 2, ai = !1, ni = e;
            }
        } } function ci(e) { for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;)
            e = e.return; ni = e; } function di(e) { if (e !== ni)
            return !1; if (!ai)
            return ci(e), ai = !0, !1; var t; if ((t = 3 !== e.tag) && !(t = 5 !== e.tag) && (t = "head" !== (t = e.type) && "body" !== t && !na(e.type, e.memoizedProps)), t && (t = ri)) {
            if (ui(e))
                throw fi(), Error(i(418));
            for (; t;)
                oi(e, t), t = sa(t.nextSibling);
        } if (ci(e), 13 === e.tag) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
                throw Error(i(317));
            e: {
                for (e = e.nextSibling, t = 0; e;) {
                    if (8 === e.nodeType) {
                        var n = e.data;
                        if ("/$" === n) {
                            if (0 === t) {
                                ri = sa(e.nextSibling);
                                break e;
                            }
                            t--;
                        }
                        else
                            "$" !== n && "$!" !== n && "$?" !== n || t++;
                    }
                    e = e.nextSibling;
                }
                ri = null;
            }
        }
        else
            ri = ni ? sa(e.stateNode.nextSibling) : null; return !0; } function fi() { for (var e = ri; e;)
            e = sa(e.nextSibling); } function pi() { ri = ni = null, ai = !1; } function mi(e) { null === ii ? ii = [e] : ii.push(e); } var hi = w.ReactCurrentBatchConfig; function vi(e, t) { if (e && e.defaultProps) {
            for (var n in t = F({}, t), e = e.defaultProps)
                void 0 === t[n] && (t[n] = e[n]);
            return t;
        } return t; } var gi = Ea(null), bi = null, yi = null, wi = null; function ki() { wi = yi = bi = null; } function Si(e) { var t = gi.current; qa(gi), e._currentValue = t; } function xi(e, t, n) { for (; null !== e;) {
            var r = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t, null !== r && (r.childLanes |= t)) : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
                break;
            e = e.return;
        } } function Ei(e, t) { bi = e, wi = yi = null, null !== (e = e.dependencies) && null !== e.firstContext && (!!(e.lanes & t) && (wl = !0), e.firstContext = null); } function qi(e) { var t = e._currentValue; if (wi !== e)
            if (e = { context: e, memoizedValue: t, next: null }, null === yi) {
                if (null === bi)
                    throw Error(i(308));
                yi = e, bi.dependencies = { lanes: 0, firstContext: e };
            }
            else
                yi = yi.next = e; return t; } var Ci = null; function _i(e) { null === Ci ? Ci = [e] : Ci.push(e); } function Pi(e, t, n, r) { var a = t.interleaved; return null === a ? (n.next = n, _i(t)) : (n.next = a.next, a.next = n), t.interleaved = n, Ri(e, r); } function Ri(e, t) { e.lanes |= t; var n = e.alternate; for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e;)
            e.childLanes |= t, null !== (n = e.alternate) && (n.childLanes |= t), n = e, e = e.return; return 3 === n.tag ? n.stateNode : null; } var Di = !1; function Li(e) { e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null }; } function Ni(e, t) { e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects }); } function Ti(e, t) { return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null }; } function zi(e, t, n) { var r = e.updateQueue; if (null === r)
            return null; if (r = r.shared, 2 & Ru) {
            var a = r.pending;
            return null === a ? t.next = t : (t.next = a.next, a.next = t), r.pending = t, Ri(e, n);
        } return null === (a = r.interleaved) ? (t.next = t, _i(r)) : (t.next = a.next, a.next = t), r.interleaved = t, Ri(e, n); } function Mi(e, t, n) { if (null !== (t = t.updateQueue) && (t = t.shared, 4194240 & n)) {
            var r = t.lanes;
            n |= r &= e.pendingLanes, t.lanes = n, bt(e, n);
        } } function Oi(e, t) { var n = e.updateQueue, r = e.alternate; if (null !== r && n === (r = r.updateQueue)) {
            var a = null, i = null;
            if (null !== (n = n.firstBaseUpdate)) {
                do {
                    var o = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
                    null === i ? a = i = o : i = i.next = o, n = n.next;
                } while (null !== n);
                null === i ? a = i = t : i = i.next = t;
            }
            else
                a = i = t;
            return n = { baseState: r.baseState, firstBaseUpdate: a, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, void (e.updateQueue = n);
        } null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t; } function Fi(e, t, n, r) { var a = e.updateQueue; Di = !1; var i = a.firstBaseUpdate, o = a.lastBaseUpdate, l = a.shared.pending; if (null !== l) {
            a.shared.pending = null;
            var u = l, s = u.next;
            u.next = null, null === o ? i = s : o.next = s, o = u;
            var c = e.alternate;
            null !== c && (l = (c = c.updateQueue).lastBaseUpdate) !== o && (null === l ? c.firstBaseUpdate = s : l.next = s, c.lastBaseUpdate = u);
        } if (null !== i) {
            var d = a.baseState;
            for (o = 0, c = s = u = null, l = i;;) {
                var f = l.lane, p = l.eventTime;
                if ((r & f) === f) {
                    null !== c && (c = c.next = { eventTime: p, lane: 0, tag: l.tag, payload: l.payload, callback: l.callback, next: null });
                    e: {
                        var m = e, h = l;
                        switch (f = t, p = n, h.tag) {
                            case 1:
                                if ("function" == typeof (m = h.payload)) {
                                    d = m.call(p, d, f);
                                    break e;
                                }
                                d = m;
                                break e;
                            case 3: m.flags = -65537 & m.flags | 128;
                            case 0:
                                if (null == (f = "function" == typeof (m = h.payload) ? m.call(p, d, f) : m))
                                    break e;
                                d = F({}, d, f);
                                break e;
                            case 2: Di = !0;
                        }
                    }
                    null !== l.callback && 0 !== l.lane && (e.flags |= 64, null === (f = a.effects) ? a.effects = [l] : f.push(l));
                }
                else
                    p = { eventTime: p, lane: f, tag: l.tag, payload: l.payload, callback: l.callback, next: null }, null === c ? (s = c = p, u = d) : c = c.next = p, o |= f;
                if (null === (l = l.next)) {
                    if (null === (l = a.shared.pending))
                        break;
                    l = (f = l).next, f.next = null, a.lastBaseUpdate = f, a.shared.pending = null;
                }
            }
            if (null === c && (u = d), a.baseState = u, a.firstBaseUpdate = s, a.lastBaseUpdate = c, null !== (t = a.shared.interleaved)) {
                a = t;
                do {
                    o |= a.lane, a = a.next;
                } while (a !== t);
            }
            else
                null === i && (a.shared.lanes = 0);
            Fu |= o, e.lanes = o, e.memoizedState = d;
        } } function Ii(e, t, n) { if (e = t.effects, t.effects = null, null !== e)
            for (t = 0; t < e.length; t++) {
                var r = e[t], a = r.callback;
                if (null !== a) {
                    if (r.callback = null, r = n, "function" != typeof a)
                        throw Error(i(191, a));
                    a.call(r);
                }
            } } var Ui = (new r.Component).refs; function Ai(e, t, n, r) { n = null == (n = n(r, t = e.memoizedState)) ? t : F({}, t, n), e.memoizedState = n, 0 === e.lanes && (e.updateQueue.baseState = n); } var ji = { isMounted: function (e) { return !!(e = e._reactInternals) && Be(e) === e; }, enqueueSetState: function (e, t, n) { e = e._reactInternals; var r = ts(), a = ns(e), i = Ti(r, a); i.payload = t, null != n && (i.callback = n), null !== (t = zi(e, i, a)) && (rs(t, e, a, r), Mi(t, e, a)); }, enqueueReplaceState: function (e, t, n) { e = e._reactInternals; var r = ts(), a = ns(e), i = Ti(r, a); i.tag = 1, i.payload = t, null != n && (i.callback = n), null !== (t = zi(e, i, a)) && (rs(t, e, a, r), Mi(t, e, a)); }, enqueueForceUpdate: function (e, t) { e = e._reactInternals; var n = ts(), r = ns(e), a = Ti(n, r); a.tag = 2, null != t && (a.callback = t), null !== (t = zi(e, a, r)) && (rs(t, e, r, n), Mi(t, e, r)); } }; function Bi(e, t, n, r, a, i, o) { return "function" == typeof (e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, i, o) : !(t.prototype && t.prototype.isPureReactComponent && ur(n, r) && ur(a, i)); } function $i(e, t, n) { var r = !1, a = _a, i = t.contextType; return "object" == typeof i && null !== i ? i = qi(i) : (a = Na(t) ? Da : Pa.current, i = (r = null != (r = t.contextTypes)) ? La(e, a) : _a), t = new t(n, i), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = ji, e.stateNode = t, t._reactInternals = e, r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = i), t; } function Vi(e, t, n, r) { e = t.state, "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ji.enqueueReplaceState(t, t.state, null); } function Qi(e, t, n, r) { var a = e.stateNode; a.props = n, a.state = e.memoizedState, a.refs = Ui, Li(e); var i = t.contextType; "object" == typeof i && null !== i ? a.context = qi(i) : (i = Na(t) ? Da : Pa.current, a.context = La(e, i)), a.state = e.memoizedState, "function" == typeof (i = t.getDerivedStateFromProps) && (Ai(e, t, i, n), a.state = e.memoizedState), "function" == typeof t.getDerivedStateFromProps || "function" == typeof a.getSnapshotBeforeUpdate || "function" != typeof a.UNSAFE_componentWillMount && "function" != typeof a.componentWillMount || (t = a.state, "function" == typeof a.componentWillMount && a.componentWillMount(), "function" == typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(), t !== a.state && ji.enqueueReplaceState(a, a.state, null), Fi(e, n, a, r), a.state = e.memoizedState), "function" == typeof a.componentDidMount && (e.flags |= 4194308); } function Hi(e, t, n) { if (null !== (e = n.ref) && "function" != typeof e && "object" != typeof e) {
            if (n._owner) {
                if (n = n._owner) {
                    if (1 !== n.tag)
                        throw Error(i(309));
                    var r = n.stateNode;
                }
                if (!r)
                    throw Error(i(147, e));
                var a = r, o = "" + e;
                return null !== t && null !== t.ref && "function" == typeof t.ref && t.ref._stringRef === o ? t.ref : (t = function (e) { var t = a.refs; t === Ui && (t = a.refs = {}), null === e ? delete t[o] : t[o] = e; }, t._stringRef = o, t);
            }
            if ("string" != typeof e)
                throw Error(i(284));
            if (!n._owner)
                throw Error(i(290, e));
        } return e; } function Wi(e, t) { throw e = Object.prototype.toString.call(t), Error(i(31, "[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)); } function Ki(e) { return (0, e._init)(e._payload); } function Yi(e) { function t(t, n) { if (e) {
            var r = t.deletions;
            null === r ? (t.deletions = [n], t.flags |= 16) : r.push(n);
        } } function n(n, r) { if (!e)
            return null; for (; null !== r;)
            t(n, r), r = r.sibling; return null; } function r(e, t) { for (e = new Map; null !== t;)
            null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling; return e; } function a(e, t) { return (e = zs(e, t)).index = 0, e.sibling = null, e; } function o(t, n, r) { return t.index = r, e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.flags |= 2, n) : r : (t.flags |= 2, n) : (t.flags |= 1048576, n); } function l(t) { return e && null === t.alternate && (t.flags |= 2), t; } function u(e, t, n, r) { return null === t || 6 !== t.tag ? ((t = Is(n, e.mode, r)).return = e, t) : ((t = a(t, n)).return = e, t); } function s(e, t, n, r) { var i = n.type; return i === x ? d(e, t, n.props.children, r, n.key) : null !== t && (t.elementType === i || "object" == typeof i && null !== i && i.$$typeof === N && Ki(i) === t.type) ? ((r = a(t, n.props)).ref = Hi(e, t, n), r.return = e, r) : ((r = Ms(n.type, n.key, n.props, null, e.mode, r)).ref = Hi(e, t, n), r.return = e, r); } function c(e, t, n, r) { return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = Us(n, e.mode, r)).return = e, t) : ((t = a(t, n.children || [])).return = e, t); } function d(e, t, n, r, i) { return null === t || 7 !== t.tag ? ((t = Os(n, e.mode, r, i)).return = e, t) : ((t = a(t, n)).return = e, t); } function f(e, t, n) { if ("string" == typeof t && "" !== t || "number" == typeof t)
            return (t = Is("" + t, e.mode, n)).return = e, t; if ("object" == typeof t && null !== t) {
            switch (t.$$typeof) {
                case k: return (n = Ms(t.type, t.key, t.props, null, e.mode, n)).ref = Hi(e, null, t), n.return = e, n;
                case S: return (t = Us(t, e.mode, n)).return = e, t;
                case N: return f(e, (0, t._init)(t._payload), n);
            }
            if (te(t) || M(t))
                return (t = Os(t, e.mode, n, null)).return = e, t;
            Wi(e, t);
        } return null; } function p(e, t, n, r) { var a = null !== t ? t.key : null; if ("string" == typeof n && "" !== n || "number" == typeof n)
            return null !== a ? null : u(e, t, "" + n, r); if ("object" == typeof n && null !== n) {
            switch (n.$$typeof) {
                case k: return n.key === a ? s(e, t, n, r) : null;
                case S: return n.key === a ? c(e, t, n, r) : null;
                case N: return p(e, t, (a = n._init)(n._payload), r);
            }
            if (te(n) || M(n))
                return null !== a ? null : d(e, t, n, r, null);
            Wi(e, n);
        } return null; } function m(e, t, n, r, a) { if ("string" == typeof r && "" !== r || "number" == typeof r)
            return u(t, e = e.get(n) || null, "" + r, a); if ("object" == typeof r && null !== r) {
            switch (r.$$typeof) {
                case k: return s(t, e = e.get(null === r.key ? n : r.key) || null, r, a);
                case S: return c(t, e = e.get(null === r.key ? n : r.key) || null, r, a);
                case N: return m(e, t, n, (0, r._init)(r._payload), a);
            }
            if (te(r) || M(r))
                return d(t, e = e.get(n) || null, r, a, null);
            Wi(t, r);
        } return null; } function h(a, i, l, u) { for (var s = null, c = null, d = i, h = i = 0, v = null; null !== d && h < l.length; h++) {
            d.index > h ? (v = d, d = null) : v = d.sibling;
            var g = p(a, d, l[h], u);
            if (null === g) {
                null === d && (d = v);
                break;
            }
            e && d && null === g.alternate && t(a, d), i = o(g, i, h), null === c ? s = g : c.sibling = g, c = g, d = v;
        } if (h === l.length)
            return n(a, d), ai && Ja(a, h), s; if (null === d) {
            for (; h < l.length; h++)
                null !== (d = f(a, l[h], u)) && (i = o(d, i, h), null === c ? s = d : c.sibling = d, c = d);
            return ai && Ja(a, h), s;
        } for (d = r(a, d); h < l.length; h++)
            null !== (v = m(d, a, h, l[h], u)) && (e && null !== v.alternate && d.delete(null === v.key ? h : v.key), i = o(v, i, h), null === c ? s = v : c.sibling = v, c = v); return e && d.forEach((function (e) { return t(a, e); })), ai && Ja(a, h), s; } function v(a, l, u, s) { var c = M(u); if ("function" != typeof c)
            throw Error(i(150)); if (null == (u = c.call(u)))
            throw Error(i(151)); for (var d = c = null, h = l, v = l = 0, g = null, b = u.next(); null !== h && !b.done; v++, b = u.next()) {
            h.index > v ? (g = h, h = null) : g = h.sibling;
            var y = p(a, h, b.value, s);
            if (null === y) {
                null === h && (h = g);
                break;
            }
            e && h && null === y.alternate && t(a, h), l = o(y, l, v), null === d ? c = y : d.sibling = y, d = y, h = g;
        } if (b.done)
            return n(a, h), ai && Ja(a, v), c; if (null === h) {
            for (; !b.done; v++, b = u.next())
                null !== (b = f(a, b.value, s)) && (l = o(b, l, v), null === d ? c = b : d.sibling = b, d = b);
            return ai && Ja(a, v), c;
        } for (h = r(a, h); !b.done; v++, b = u.next())
            null !== (b = m(h, a, v, b.value, s)) && (e && null !== b.alternate && h.delete(null === b.key ? v : b.key), l = o(b, l, v), null === d ? c = b : d.sibling = b, d = b); return e && h.forEach((function (e) { return t(a, e); })), ai && Ja(a, v), c; } return function e(r, i, o, u) { if ("object" == typeof o && null !== o && o.type === x && null === o.key && (o = o.props.children), "object" == typeof o && null !== o) {
            switch (o.$$typeof) {
                case k:
                    e: {
                        for (var s = o.key, c = i; null !== c;) {
                            if (c.key === s) {
                                if ((s = o.type) === x) {
                                    if (7 === c.tag) {
                                        n(r, c.sibling), (i = a(c, o.props.children)).return = r, r = i;
                                        break e;
                                    }
                                }
                                else if (c.elementType === s || "object" == typeof s && null !== s && s.$$typeof === N && Ki(s) === c.type) {
                                    n(r, c.sibling), (i = a(c, o.props)).ref = Hi(r, c, o), i.return = r, r = i;
                                    break e;
                                }
                                n(r, c);
                                break;
                            }
                            t(r, c), c = c.sibling;
                        }
                        o.type === x ? ((i = Os(o.props.children, r.mode, u, o.key)).return = r, r = i) : ((u = Ms(o.type, o.key, o.props, null, r.mode, u)).ref = Hi(r, i, o), u.return = r, r = u);
                    }
                    return l(r);
                case S:
                    e: {
                        for (c = o.key; null !== i;) {
                            if (i.key === c) {
                                if (4 === i.tag && i.stateNode.containerInfo === o.containerInfo && i.stateNode.implementation === o.implementation) {
                                    n(r, i.sibling), (i = a(i, o.children || [])).return = r, r = i;
                                    break e;
                                }
                                n(r, i);
                                break;
                            }
                            t(r, i), i = i.sibling;
                        }
                        (i = Us(o, r.mode, u)).return = r, r = i;
                    }
                    return l(r);
                case N: return e(r, i, (c = o._init)(o._payload), u);
            }
            if (te(o))
                return h(r, i, o, u);
            if (M(o))
                return v(r, i, o, u);
            Wi(r, o);
        } return "string" == typeof o && "" !== o || "number" == typeof o ? (o = "" + o, null !== i && 6 === i.tag ? (n(r, i.sibling), (i = a(i, o)).return = r, r = i) : (n(r, i), (i = Is(o, r.mode, u)).return = r, r = i), l(r)) : n(r, i); }; } var Xi = Yi(!0), Gi = Yi(!1), Ji = {}, Zi = Ea(Ji), eo = Ea(Ji), to = Ea(Ji); function no(e) { if (e === Ji)
            throw Error(i(174)); return e; } function ro(e, t) { switch (Ca(to, t), Ca(eo, e), Ca(Zi, Ji), e = t.nodeType) {
            case 9:
            case 11:
                t = (t = t.documentElement) ? t.namespaceURI : ue(null, "");
                break;
            default: t = ue(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null, e = e.tagName);
        } qa(Zi), Ca(Zi, t); } function ao() { qa(Zi), qa(eo), qa(to); } function io(e) { no(to.current); var t = no(Zi.current), n = ue(t, e.type); t !== n && (Ca(eo, e), Ca(Zi, n)); } function oo(e) { eo.current === e && (qa(Zi), qa(eo)); } var lo = Ea(0); function uo(e) { for (var t = e; null !== t;) {
            if (13 === t.tag) {
                var n = t.memoizedState;
                if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data))
                    return t;
            }
            else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                if (128 & t.flags)
                    return t;
            }
            else if (null !== t.child) {
                t.child.return = t, t = t.child;
                continue;
            }
            if (t === e)
                break;
            for (; null === t.sibling;) {
                if (null === t.return || t.return === e)
                    return null;
                t = t.return;
            }
            t.sibling.return = t.return, t = t.sibling;
        } return null; } var so = []; function co() { for (var e = 0; e < so.length; e++)
            so[e]._workInProgressVersionPrimary = null; so.length = 0; } var fo = w.ReactCurrentDispatcher, po = w.ReactCurrentBatchConfig, mo = 0, ho = null, vo = null, go = null, bo = !1, yo = !1, wo = 0, ko = 0; function So() { throw Error(i(321)); } function xo(e, t) { if (null === t)
            return !1; for (var n = 0; n < t.length && n < e.length; n++)
            if (!lr(e[n], t[n]))
                return !1; return !0; } function Eo(e, t, n, r, a, o) { if (mo = o, ho = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, fo.current = null === e || null === e.memoizedState ? ll : ul, e = n(r, a), yo) {
            o = 0;
            do {
                if (yo = !1, wo = 0, 25 <= o)
                    throw Error(i(301));
                o += 1, go = vo = null, t.updateQueue = null, fo.current = sl, e = n(r, a);
            } while (yo);
        } if (fo.current = ol, t = null !== vo && null !== vo.next, mo = 0, go = vo = ho = null, bo = !1, t)
            throw Error(i(300)); return e; } function qo() { var e = 0 !== wo; return wo = 0, e; } function Co() { var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }; return null === go ? ho.memoizedState = go = e : go = go.next = e, go; } function _o() { if (null === vo) {
            var e = ho.alternate;
            e = null !== e ? e.memoizedState : null;
        }
        else
            e = vo.next; var t = null === go ? ho.memoizedState : go.next; if (null !== t)
            go = t, vo = e;
        else {
            if (null === e)
                throw Error(i(310));
            e = { memoizedState: (vo = e).memoizedState, baseState: vo.baseState, baseQueue: vo.baseQueue, queue: vo.queue, next: null }, null === go ? ho.memoizedState = go = e : go = go.next = e;
        } return go; } function Po(e, t) { return "function" == typeof t ? t(e) : t; } function Ro(e) { var t = _o(), n = t.queue; if (null === n)
            throw Error(i(311)); n.lastRenderedReducer = e; var r = vo, a = r.baseQueue, o = n.pending; if (null !== o) {
            if (null !== a) {
                var l = a.next;
                a.next = o.next, o.next = l;
            }
            r.baseQueue = a = o, n.pending = null;
        } if (null !== a) {
            o = a.next, r = r.baseState;
            var u = l = null, s = null, c = o;
            do {
                var d = c.lane;
                if ((mo & d) === d)
                    null !== s && (s = s.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
                else {
                    var f = { lane: d, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null };
                    null === s ? (u = s = f, l = r) : s = s.next = f, ho.lanes |= d, Fu |= d;
                }
                c = c.next;
            } while (null !== c && c !== o);
            null === s ? l = r : s.next = u, lr(r, t.memoizedState) || (wl = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = s, n.lastRenderedState = r;
        } if (null !== (e = n.interleaved)) {
            a = e;
            do {
                o = a.lane, ho.lanes |= o, Fu |= o, a = a.next;
            } while (a !== e);
        }
        else
            null === a && (n.lanes = 0); return [t.memoizedState, n.dispatch]; } function Do(e) { var t = _o(), n = t.queue; if (null === n)
            throw Error(i(311)); n.lastRenderedReducer = e; var r = n.dispatch, a = n.pending, o = t.memoizedState; if (null !== a) {
            n.pending = null;
            var l = a = a.next;
            do {
                o = e(o, l.action), l = l.next;
            } while (l !== a);
            lr(o, t.memoizedState) || (wl = !0), t.memoizedState = o, null === t.baseQueue && (t.baseState = o), n.lastRenderedState = o;
        } return [o, r]; } function Lo() { } function No(e, t) { var n = ho, r = _o(), a = t(), o = !lr(r.memoizedState, a); if (o && (r.memoizedState = a, wl = !0), r = r.queue, Vo(Mo.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || null !== go && 1 & go.memoizedState.tag) {
            if (n.flags |= 2048, Uo(9, zo.bind(null, n, r, a, t), void 0, null), null === Du)
                throw Error(i(349));
            30 & mo || To(n, t, a);
        } return a; } function To(e, t, n) { e.flags |= 16384, e = { getSnapshot: t, value: n }, null === (t = ho.updateQueue) ? (t = { lastEffect: null, stores: null }, ho.updateQueue = t, t.stores = [e]) : null === (n = t.stores) ? t.stores = [e] : n.push(e); } function zo(e, t, n, r) { t.value = n, t.getSnapshot = r, Oo(t) && Fo(e); } function Mo(e, t, n) { return n((function () { Oo(t) && Fo(e); })); } function Oo(e) { var t = e.getSnapshot; e = e.value; try {
            var n = t();
            return !lr(e, n);
        }
        catch (e) {
            return !0;
        } } function Fo(e) { var t = Ri(e, 1); null !== t && rs(t, e, 1, -1); } function Io(e) { var t = Co(); return "function" == typeof e && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Po, lastRenderedState: e }, t.queue = e, e = e.dispatch = nl.bind(null, ho, e), [t.memoizedState, e]; } function Uo(e, t, n, r) { return e = { tag: e, create: t, destroy: n, deps: r, next: null }, null === (t = ho.updateQueue) ? (t = { lastEffect: null, stores: null }, ho.updateQueue = t, t.lastEffect = e.next = e) : null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e; } function Ao() { return _o().memoizedState; } function jo(e, t, n, r) { var a = Co(); ho.flags |= e, a.memoizedState = Uo(1 | t, n, void 0, void 0 === r ? null : r); } function Bo(e, t, n, r) { var a = _o(); r = void 0 === r ? null : r; var i = void 0; if (null !== vo) {
            var o = vo.memoizedState;
            if (i = o.destroy, null !== r && xo(r, o.deps))
                return void (a.memoizedState = Uo(t, n, i, r));
        } ho.flags |= e, a.memoizedState = Uo(1 | t, n, i, r); } function $o(e, t) { return jo(8390656, 8, e, t); } function Vo(e, t) { return Bo(2048, 8, e, t); } function Qo(e, t) { return Bo(4, 2, e, t); } function Ho(e, t) { return Bo(4, 4, e, t); } function Wo(e, t) { return "function" == typeof t ? (e = e(), t(e), function () { t(null); }) : null != t ? (e = e(), t.current = e, function () { t.current = null; }) : void 0; } function Ko(e, t, n) { return n = null != n ? n.concat([e]) : null, Bo(4, 4, Wo.bind(null, t, e), n); } function Yo() { } function Xo(e, t) { var n = _o(); t = void 0 === t ? null : t; var r = n.memoizedState; return null !== r && null !== t && xo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e); } function Go(e, t) { var n = _o(); t = void 0 === t ? null : t; var r = n.memoizedState; return null !== r && null !== t && xo(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e); } function Jo(e, t, n) { return 21 & mo ? (lr(n, t) || (n = ht(), ho.lanes |= n, Fu |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, wl = !0), e.memoizedState = n); } function Zo(e, t) { var n = yt; yt = 0 !== n && 4 > n ? n : 4, e(!0); var r = po.transition; po.transition = {}; try {
            e(!1), t();
        }
        finally {
            yt = n, po.transition = r;
        } } function el() { return _o().memoizedState; } function tl(e, t, n) { var r = ns(e); n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, rl(e) ? al(t, n) : null !== (n = Pi(e, t, n, r)) && (rs(n, e, r, ts()), il(n, t, r)); } function nl(e, t, n) { var r = ns(e), a = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }; if (rl(e))
            al(t, a);
        else {
            var i = e.alternate;
            if (0 === e.lanes && (null === i || 0 === i.lanes) && null !== (i = t.lastRenderedReducer))
                try {
                    var o = t.lastRenderedState, l = i(o, n);
                    if (a.hasEagerState = !0, a.eagerState = l, lr(l, o)) {
                        var u = t.interleaved;
                        return null === u ? (a.next = a, _i(t)) : (a.next = u.next, u.next = a), void (t.interleaved = a);
                    }
                }
                catch (e) { }
            null !== (n = Pi(e, t, a, r)) && (rs(n, e, r, a = ts()), il(n, t, r));
        } } function rl(e) { var t = e.alternate; return e === ho || null !== t && t === ho; } function al(e, t) { yo = bo = !0; var n = e.pending; null === n ? t.next = t : (t.next = n.next, n.next = t), e.pending = t; } function il(e, t, n) { if (4194240 & n) {
            var r = t.lanes;
            n |= r &= e.pendingLanes, t.lanes = n, bt(e, n);
        } } var ol = { readContext: qi, useCallback: So, useContext: So, useEffect: So, useImperativeHandle: So, useInsertionEffect: So, useLayoutEffect: So, useMemo: So, useReducer: So, useRef: So, useState: So, useDebugValue: So, useDeferredValue: So, useTransition: So, useMutableSource: So, useSyncExternalStore: So, useId: So, unstable_isNewReconciler: !1 }, ll = { readContext: qi, useCallback: function (e, t) { return Co().memoizedState = [e, void 0 === t ? null : t], e; }, useContext: qi, useEffect: $o, useImperativeHandle: function (e, t, n) { return n = null != n ? n.concat([e]) : null, jo(4194308, 4, Wo.bind(null, t, e), n); }, useLayoutEffect: function (e, t) { return jo(4194308, 4, e, t); }, useInsertionEffect: function (e, t) { return jo(4, 2, e, t); }, useMemo: function (e, t) { var n = Co(); return t = void 0 === t ? null : t, e = e(), n.memoizedState = [e, t], e; }, useReducer: function (e, t, n) { var r = Co(); return t = void 0 !== n ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = tl.bind(null, ho, e), [r.memoizedState, e]; }, useRef: function (e) { return e = { current: e }, Co().memoizedState = e; }, useState: Io, useDebugValue: Yo, useDeferredValue: function (e) { return Co().memoizedState = e; }, useTransition: function () { var e = Io(!1), t = e[0]; return e = Zo.bind(null, e[1]), Co().memoizedState = e, [t, e]; }, useMutableSource: function () { }, useSyncExternalStore: function (e, t, n) { var r = ho, a = Co(); if (ai) {
                if (void 0 === n)
                    throw Error(i(407));
                n = n();
            }
            else {
                if (n = t(), null === Du)
                    throw Error(i(349));
                30 & mo || To(r, t, n);
            } a.memoizedState = n; var o = { value: n, getSnapshot: t }; return a.queue = o, $o(Mo.bind(null, r, o, e), [e]), r.flags |= 2048, Uo(9, zo.bind(null, r, o, n, t), void 0, null), n; }, useId: function () { var e = Co(), t = Du.identifierPrefix; if (ai) {
                var n = Ga;
                t = ":" + t + "R" + (n = (Xa & ~(1 << 32 - ot(Xa) - 1)).toString(32) + n), 0 < (n = wo++) && (t += "H" + n.toString(32)), t += ":";
            }
            else
                t = ":" + t + "r" + (n = ko++).toString(32) + ":"; return e.memoizedState = t; }, unstable_isNewReconciler: !1 }, ul = { readContext: qi, useCallback: Xo, useContext: qi, useEffect: Vo, useImperativeHandle: Ko, useInsertionEffect: Qo, useLayoutEffect: Ho, useMemo: Go, useReducer: Ro, useRef: Ao, useState: function () { return Ro(Po); }, useDebugValue: Yo, useDeferredValue: function (e) { return Jo(_o(), vo.memoizedState, e); }, useTransition: function () { return [Ro(Po)[0], _o().memoizedState]; }, useMutableSource: Lo, useSyncExternalStore: No, useId: el, unstable_isNewReconciler: !1 }, sl = { readContext: qi, useCallback: Xo, useContext: qi, useEffect: Vo, useImperativeHandle: Ko, useInsertionEffect: Qo, useLayoutEffect: Ho, useMemo: Go, useReducer: Do, useRef: Ao, useState: function () { return Do(Po); }, useDebugValue: Yo, useDeferredValue: function (e) { var t = _o(); return null === vo ? t.memoizedState = e : Jo(t, vo.memoizedState, e); }, useTransition: function () { return [Do(Po)[0], _o().memoizedState]; }, useMutableSource: Lo, useSyncExternalStore: No, useId: el, unstable_isNewReconciler: !1 }; function cl(e, t) { try {
            var n = "", r = t;
            do {
                n += j(r), r = r.return;
            } while (r);
            var a = n;
        }
        catch (e) {
            a = "\nError generating stack: " + e.message + "\n" + e.stack;
        } return { value: e, source: t, stack: a, digest: null }; } function dl(e, t, n) { return { value: e, source: null, stack: null != n ? n : null, digest: null != t ? t : null }; } function fl(e, t) { try {
            console.error(t.value);
        }
        catch (e) {
            setTimeout((function () { throw e; }));
        } } var pl = "function" == typeof WeakMap ? WeakMap : Map; function ml(e, t, n) { (n = Ti(-1, n)).tag = 3, n.payload = { element: null }; var r = t.value; return n.callback = function () { Qu || (Qu = !0, Hu = r), fl(0, t); }, n; } function hl(e, t, n) { (n = Ti(-1, n)).tag = 3; var r = e.type.getDerivedStateFromError; if ("function" == typeof r) {
            var a = t.value;
            n.payload = function () { return r(a); }, n.callback = function () { fl(0, t); };
        } var i = e.stateNode; return null !== i && "function" == typeof i.componentDidCatch && (n.callback = function () { fl(0, t), "function" != typeof r && (null === Wu ? Wu = new Set([this]) : Wu.add(this)); var e = t.stack; this.componentDidCatch(t.value, { componentStack: null !== e ? e : "" }); }), n; } function vl(e, t, n) { var r = e.pingCache; if (null === r) {
            r = e.pingCache = new pl;
            var a = new Set;
            r.set(t, a);
        }
        else
            void 0 === (a = r.get(t)) && (a = new Set, r.set(t, a)); a.has(n) || (a.add(n), e = Cs.bind(null, e, t, n), t.then(e, e)); } function gl(e) { do {
            var t;
            if ((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated), t)
                return e;
            e = e.return;
        } while (null !== e); return null; } function bl(e, t, n, r, a) { return 1 & e.mode ? (e.flags |= 65536, e.lanes = a, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, 1 === n.tag && (null === n.alternate ? n.tag = 17 : ((t = Ti(-1, 1)).tag = 2, zi(n, t, 1))), n.lanes |= 1), e); } var yl = w.ReactCurrentOwner, wl = !1; function kl(e, t, n, r) { t.child = null === e ? Gi(t, null, n, r) : Xi(t, e.child, n, r); } function Sl(e, t, n, r, a) { n = n.render; var i = t.ref; return Ei(t, a), r = Eo(e, t, n, r, i, a), n = qo(), null === e || wl ? (ai && n && ei(t), t.flags |= 1, kl(e, t, r, a), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Ql(e, t, a)); } function xl(e, t, n, r, a) { if (null === e) {
            var i = n.type;
            return "function" != typeof i || Ts(i) || void 0 !== i.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = Ms(n.type, null, r, t, t.mode, a)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = i, El(e, t, i, r, a));
        } if (i = e.child, !(e.lanes & a)) {
            var o = i.memoizedProps;
            if ((n = null !== (n = n.compare) ? n : ur)(o, r) && e.ref === t.ref)
                return Ql(e, t, a);
        } return t.flags |= 1, (e = zs(i, r)).ref = t.ref, e.return = t, t.child = e; } function El(e, t, n, r, a) { if (null !== e) {
            var i = e.memoizedProps;
            if (ur(i, r) && e.ref === t.ref) {
                if (wl = !1, t.pendingProps = r = i, !(e.lanes & a))
                    return t.lanes = e.lanes, Ql(e, t, a);
                131072 & e.flags && (wl = !0);
            }
        } return _l(e, t, n, r, a); } function ql(e, t, n) { var r = t.pendingProps, a = r.children, i = null !== e ? e.memoizedState : null; if ("hidden" === r.mode)
            if (1 & t.mode) {
                if (!(1073741824 & n))
                    return e = null !== i ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Ca(zu, Tu), Tu |= e, null;
                t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = null !== i ? i.baseLanes : n, Ca(zu, Tu), Tu |= r;
            }
            else
                t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ca(zu, Tu), Tu |= n;
        else
            null !== i ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, Ca(zu, Tu), Tu |= r; return kl(e, t, a, n), t.child; } function Cl(e, t) { var n = t.ref; (null === e && null !== n || null !== e && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152); } function _l(e, t, n, r, a) { var i = Na(n) ? Da : Pa.current; return i = La(t, i), Ei(t, a), n = Eo(e, t, n, r, i, a), r = qo(), null === e || wl ? (ai && r && ei(t), t.flags |= 1, kl(e, t, n, a), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Ql(e, t, a)); } function Pl(e, t, n, r, a) { if (Na(n)) {
            var i = !0;
            Oa(t);
        }
        else
            i = !1; if (Ei(t, a), null === t.stateNode)
            Vl(e, t), $i(t, n, r), Qi(t, n, r, a), r = !0;
        else if (null === e) {
            var o = t.stateNode, l = t.memoizedProps;
            o.props = l;
            var u = o.context, s = n.contextType;
            s = "object" == typeof s && null !== s ? qi(s) : La(t, s = Na(n) ? Da : Pa.current);
            var c = n.getDerivedStateFromProps, d = "function" == typeof c || "function" == typeof o.getSnapshotBeforeUpdate;
            d || "function" != typeof o.UNSAFE_componentWillReceiveProps && "function" != typeof o.componentWillReceiveProps || (l !== r || u !== s) && Vi(t, o, r, s), Di = !1;
            var f = t.memoizedState;
            o.state = f, Fi(t, r, o, a), u = t.memoizedState, l !== r || f !== u || Ra.current || Di ? ("function" == typeof c && (Ai(t, n, c, r), u = t.memoizedState), (l = Di || Bi(t, n, l, r, f, u, s)) ? (d || "function" != typeof o.UNSAFE_componentWillMount && "function" != typeof o.componentWillMount || ("function" == typeof o.componentWillMount && o.componentWillMount(), "function" == typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount()), "function" == typeof o.componentDidMount && (t.flags |= 4194308)) : ("function" == typeof o.componentDidMount && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), o.props = r, o.state = u, o.context = s, r = l) : ("function" == typeof o.componentDidMount && (t.flags |= 4194308), r = !1);
        }
        else {
            o = t.stateNode, Ni(e, t), l = t.memoizedProps, s = t.type === t.elementType ? l : vi(t.type, l), o.props = s, d = t.pendingProps, f = o.context, u = "object" == typeof (u = n.contextType) && null !== u ? qi(u) : La(t, u = Na(n) ? Da : Pa.current);
            var p = n.getDerivedStateFromProps;
            (c = "function" == typeof p || "function" == typeof o.getSnapshotBeforeUpdate) || "function" != typeof o.UNSAFE_componentWillReceiveProps && "function" != typeof o.componentWillReceiveProps || (l !== d || f !== u) && Vi(t, o, r, u), Di = !1, f = t.memoizedState, o.state = f, Fi(t, r, o, a);
            var m = t.memoizedState;
            l !== d || f !== m || Ra.current || Di ? ("function" == typeof p && (Ai(t, n, p, r), m = t.memoizedState), (s = Di || Bi(t, n, s, r, f, m, u) || !1) ? (c || "function" != typeof o.UNSAFE_componentWillUpdate && "function" != typeof o.componentWillUpdate || ("function" == typeof o.componentWillUpdate && o.componentWillUpdate(r, m, u), "function" == typeof o.UNSAFE_componentWillUpdate && o.UNSAFE_componentWillUpdate(r, m, u)), "function" == typeof o.componentDidUpdate && (t.flags |= 4), "function" == typeof o.getSnapshotBeforeUpdate && (t.flags |= 1024)) : ("function" != typeof o.componentDidUpdate || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), "function" != typeof o.getSnapshotBeforeUpdate || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = m), o.props = r, o.state = m, o.context = u, r = s) : ("function" != typeof o.componentDidUpdate || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), "function" != typeof o.getSnapshotBeforeUpdate || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
        } return Rl(e, t, n, r, i, a); } function Rl(e, t, n, r, a, i) { Cl(e, t); var o = !!(128 & t.flags); if (!r && !o)
            return a && Fa(t, n, !1), Ql(e, t, i); r = t.stateNode, yl.current = t; var l = o && "function" != typeof n.getDerivedStateFromError ? null : r.render(); return t.flags |= 1, null !== e && o ? (t.child = Xi(t, e.child, null, i), t.child = Xi(t, null, l, i)) : kl(e, t, l, i), t.memoizedState = r.state, a && Fa(t, n, !0), t.child; } function Dl(e) { var t = e.stateNode; t.pendingContext ? za(0, t.pendingContext, t.pendingContext !== t.context) : t.context && za(0, t.context, !1), ro(e, t.containerInfo); } function Ll(e, t, n, r, a) { return pi(), mi(a), t.flags |= 256, kl(e, t, n, r), t.child; } var Nl, Tl, zl, Ml, Ol = { dehydrated: null, treeContext: null, retryLane: 0 }; function Fl(e) { return { baseLanes: e, cachePool: null, transitions: null }; } function Il(e, t, n) { var r, a = t.pendingProps, o = lo.current, l = !1, u = !!(128 & t.flags); if ((r = u) || (r = (null === e || null !== e.memoizedState) && !!(2 & o)), r ? (l = !0, t.flags &= -129) : null !== e && null === e.memoizedState || (o |= 1), Ca(lo, 1 & o), null === e)
            return si(t), null !== (e = t.memoizedState) && null !== (e = e.dehydrated) ? (1 & t.mode ? "$!" === e.data ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (u = a.children, e = a.fallback, l ? (a = t.mode, l = t.child, u = { mode: "hidden", children: u }, 1 & a || null === l ? l = Fs(u, a, 0, null) : (l.childLanes = 0, l.pendingProps = u), e = Os(e, a, n, null), l.return = t, e.return = t, l.sibling = e, t.child = l, t.child.memoizedState = Fl(n), t.memoizedState = Ol, e) : Ul(t, u)); if (null !== (o = e.memoizedState) && null !== (r = o.dehydrated))
            return function (e, t, n, r, a, o, l) { if (n)
                return 256 & t.flags ? (t.flags &= -257, Al(e, t, l, r = dl(Error(i(422))))) : null !== t.memoizedState ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, a = t.mode, r = Fs({ mode: "visible", children: r.children }, a, 0, null), (o = Os(o, a, l, null)).flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, 1 & t.mode && Xi(t, e.child, null, l), t.child.memoizedState = Fl(l), t.memoizedState = Ol, o); if (!(1 & t.mode))
                return Al(e, t, l, null); if ("$!" === a.data) {
                if (r = a.nextSibling && a.nextSibling.dataset)
                    var u = r.dgst;
                return r = u, Al(e, t, l, r = dl(o = Error(i(419)), r, void 0));
            } if (u = !!(l & e.childLanes), wl || u) {
                if (null !== (r = Du)) {
                    switch (l & -l) {
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
                        default: a = 0;
                    }
                    0 !== (a = a & (r.suspendedLanes | l) ? 0 : a) && a !== o.retryLane && (o.retryLane = a, Ri(e, a), rs(r, e, a, -1));
                }
                return vs(), Al(e, t, l, r = dl(Error(i(421))));
            } return "$?" === a.data ? (t.flags |= 128, t.child = e.child, t = Ps.bind(null, e), a._reactRetry = t, null) : (e = o.treeContext, ri = sa(a.nextSibling), ni = t, ai = !0, ii = null, null !== e && (Wa[Ka++] = Xa, Wa[Ka++] = Ga, Wa[Ka++] = Ya, Xa = e.id, Ga = e.overflow, Ya = t), (t = Ul(t, r.children)).flags |= 4096, t); }(e, t, u, a, r, o, n); if (l) {
            l = a.fallback, u = t.mode, r = (o = e.child).sibling;
            var s = { mode: "hidden", children: a.children };
            return 1 & u || t.child === o ? (a = zs(o, s)).subtreeFlags = 14680064 & o.subtreeFlags : ((a = t.child).childLanes = 0, a.pendingProps = s, t.deletions = null), null !== r ? l = zs(r, l) : (l = Os(l, u, n, null)).flags |= 2, l.return = t, a.return = t, a.sibling = l, t.child = a, a = l, l = t.child, u = null === (u = e.child.memoizedState) ? Fl(n) : { baseLanes: u.baseLanes | n, cachePool: null, transitions: u.transitions }, l.memoizedState = u, l.childLanes = e.childLanes & ~n, t.memoizedState = Ol, a;
        } return e = (l = e.child).sibling, a = zs(l, { mode: "visible", children: a.children }), !(1 & t.mode) && (a.lanes = n), a.return = t, a.sibling = null, null !== e && (null === (n = t.deletions) ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = a, t.memoizedState = null, a; } function Ul(e, t) { return (t = Fs({ mode: "visible", children: t }, e.mode, 0, null)).return = e, e.child = t; } function Al(e, t, n, r) { return null !== r && mi(r), Xi(t, e.child, null, n), (e = Ul(t, t.pendingProps.children)).flags |= 2, t.memoizedState = null, e; } function jl(e, t, n) { e.lanes |= t; var r = e.alternate; null !== r && (r.lanes |= t), xi(e.return, t, n); } function Bl(e, t, n, r, a) { var i = e.memoizedState; null === i ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: a } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = a); } function $l(e, t, n) { var r = t.pendingProps, a = r.revealOrder, i = r.tail; if (kl(e, t, r.children, n), 2 & (r = lo.current))
            r = 1 & r | 2, t.flags |= 128;
        else {
            if (null !== e && 128 & e.flags)
                e: for (e = t.child; null !== e;) {
                    if (13 === e.tag)
                        null !== e.memoizedState && jl(e, n, t);
                    else if (19 === e.tag)
                        jl(e, n, t);
                    else if (null !== e.child) {
                        e.child.return = e, e = e.child;
                        continue;
                    }
                    if (e === t)
                        break e;
                    for (; null === e.sibling;) {
                        if (null === e.return || e.return === t)
                            break e;
                        e = e.return;
                    }
                    e.sibling.return = e.return, e = e.sibling;
                }
            r &= 1;
        } if (Ca(lo, r), 1 & t.mode)
            switch (a) {
                case "forwards":
                    for (n = t.child, a = null; null !== n;)
                        null !== (e = n.alternate) && null === uo(e) && (a = n), n = n.sibling;
                    null === (n = a) ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), Bl(t, !1, a, n, i);
                    break;
                case "backwards":
                    for (n = null, a = t.child, t.child = null; null !== a;) {
                        if (null !== (e = a.alternate) && null === uo(e)) {
                            t.child = a;
                            break;
                        }
                        e = a.sibling, a.sibling = n, n = a, a = e;
                    }
                    Bl(t, !0, n, null, i);
                    break;
                case "together":
                    Bl(t, !1, null, null, void 0);
                    break;
                default: t.memoizedState = null;
            }
        else
            t.memoizedState = null; return t.child; } function Vl(e, t) { !(1 & t.mode) && null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2); } function Ql(e, t, n) { if (null !== e && (t.dependencies = e.dependencies), Fu |= t.lanes, !(n & t.childLanes))
            return null; if (null !== e && t.child !== e.child)
            throw Error(i(153)); if (null !== t.child) {
            for (n = zs(e = t.child, e.pendingProps), t.child = n, n.return = t; null !== e.sibling;)
                e = e.sibling, (n = n.sibling = zs(e, e.pendingProps)).return = t;
            n.sibling = null;
        } return t.child; } function Hl(e, t) { if (!ai)
            switch (e.tailMode) {
                case "hidden":
                    t = e.tail;
                    for (var n = null; null !== t;)
                        null !== t.alternate && (n = t), t = t.sibling;
                    null === n ? e.tail = null : n.sibling = null;
                    break;
                case "collapsed":
                    n = e.tail;
                    for (var r = null; null !== n;)
                        null !== n.alternate && (r = n), n = n.sibling;
                    null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null;
            } } function Wl(e) { var t = null !== e.alternate && e.alternate.child === e.child, n = 0, r = 0; if (t)
            for (var a = e.child; null !== a;)
                n |= a.lanes | a.childLanes, r |= 14680064 & a.subtreeFlags, r |= 14680064 & a.flags, a.return = e, a = a.sibling;
        else
            for (a = e.child; null !== a;)
                n |= a.lanes | a.childLanes, r |= a.subtreeFlags, r |= a.flags, a.return = e, a = a.sibling; return e.subtreeFlags |= r, e.childLanes = n, t; } function Kl(e, t, n) { var r = t.pendingProps; switch (ti(t), t.tag) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14: return Wl(t), null;
            case 1:
            case 17: return Na(t.type) && Ta(), Wl(t), null;
            case 3: return r = t.stateNode, ao(), qa(Ra), qa(Pa), co(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), null !== e && null !== e.child || (di(t) ? t.flags |= 4 : null === e || e.memoizedState.isDehydrated && !(256 & t.flags) || (t.flags |= 1024, null !== ii && (ls(ii), ii = null))), Tl(e, t), Wl(t), null;
            case 5:
                oo(t);
                var a = no(to.current);
                if (n = t.type, null !== e && null != t.stateNode)
                    zl(e, t, n, r, a), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
                else {
                    if (!r) {
                        if (null === t.stateNode)
                            throw Error(i(166));
                        return Wl(t), null;
                    }
                    if (e = no(Zi.current), di(t)) {
                        r = t.stateNode, n = t.type;
                        var o = t.memoizedProps;
                        switch (r[fa] = t, r[pa] = o, e = !!(1 & t.mode), n) {
                            case "dialog":
                                Ur("cancel", r), Ur("close", r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                Ur("load", r);
                                break;
                            case "video":
                            case "audio":
                                for (a = 0; a < Mr.length; a++)
                                    Ur(Mr[a], r);
                                break;
                            case "source":
                                Ur("error", r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                Ur("error", r), Ur("load", r);
                                break;
                            case "details":
                                Ur("toggle", r);
                                break;
                            case "input":
                                X(r, o), Ur("invalid", r);
                                break;
                            case "select":
                                r._wrapperState = { wasMultiple: !!o.multiple }, Ur("invalid", r);
                                break;
                            case "textarea": ae(r, o), Ur("invalid", r);
                        }
                        for (var u in be(n, o), a = null, o)
                            if (o.hasOwnProperty(u)) {
                                var s = o[u];
                                "children" === u ? "string" == typeof s ? r.textContent !== s && (!0 !== o.suppressHydrationWarning && Jr(r.textContent, s, e), a = ["children", s]) : "number" == typeof s && r.textContent !== "" + s && (!0 !== o.suppressHydrationWarning && Jr(r.textContent, s, e), a = ["children", "" + s]) : l.hasOwnProperty(u) && null != s && "onScroll" === u && Ur("scroll", r);
                            }
                        switch (n) {
                            case "input":
                                H(r), Z(r, o, !0);
                                break;
                            case "textarea":
                                H(r), oe(r);
                                break;
                            case "select":
                            case "option": break;
                            default: "function" == typeof o.onClick && (r.onclick = Zr);
                        }
                        r = a, t.updateQueue = r, null !== r && (t.flags |= 4);
                    }
                    else {
                        u = 9 === a.nodeType ? a : a.ownerDocument, "http://www.w3.org/1999/xhtml" === e && (e = le(n)), "http://www.w3.org/1999/xhtml" === e ? "script" === n ? ((e = u.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : "string" == typeof r.is ? e = u.createElement(n, { is: r.is }) : (e = u.createElement(n), "select" === n && (u = e, r.multiple ? u.multiple = !0 : r.size && (u.size = r.size))) : e = u.createElementNS(e, n), e[fa] = t, e[pa] = r, Nl(e, t, !1, !1), t.stateNode = e;
                        e: {
                            switch (u = ye(n, r), n) {
                                case "dialog":
                                    Ur("cancel", e), Ur("close", e), a = r;
                                    break;
                                case "iframe":
                                case "object":
                                case "embed":
                                    Ur("load", e), a = r;
                                    break;
                                case "video":
                                case "audio":
                                    for (a = 0; a < Mr.length; a++)
                                        Ur(Mr[a], e);
                                    a = r;
                                    break;
                                case "source":
                                    Ur("error", e), a = r;
                                    break;
                                case "img":
                                case "image":
                                case "link":
                                    Ur("error", e), Ur("load", e), a = r;
                                    break;
                                case "details":
                                    Ur("toggle", e), a = r;
                                    break;
                                case "input":
                                    X(e, r), a = Y(e, r), Ur("invalid", e);
                                    break;
                                case "option":
                                default:
                                    a = r;
                                    break;
                                case "select":
                                    e._wrapperState = { wasMultiple: !!r.multiple }, a = F({}, r, { value: void 0 }), Ur("invalid", e);
                                    break;
                                case "textarea": ae(e, r), a = re(e, r), Ur("invalid", e);
                            }
                            for (o in be(n, a), s = a)
                                if (s.hasOwnProperty(o)) {
                                    var c = s[o];
                                    "style" === o ? ve(e, c) : "dangerouslySetInnerHTML" === o ? null != (c = c ? c.__html : void 0) && de(e, c) : "children" === o ? "string" == typeof c ? ("textarea" !== n || "" !== c) && fe(e, c) : "number" == typeof c && fe(e, "" + c) : "suppressContentEditableWarning" !== o && "suppressHydrationWarning" !== o && "autoFocus" !== o && (l.hasOwnProperty(o) ? null != c && "onScroll" === o && Ur("scroll", e) : null != c && y(e, o, c, u));
                                }
                            switch (n) {
                                case "input":
                                    H(e), Z(e, r, !1);
                                    break;
                                case "textarea":
                                    H(e), oe(e);
                                    break;
                                case "option":
                                    null != r.value && e.setAttribute("value", "" + V(r.value));
                                    break;
                                case "select":
                                    e.multiple = !!r.multiple, null != (o = r.value) ? ne(e, !!r.multiple, o, !1) : null != r.defaultValue && ne(e, !!r.multiple, r.defaultValue, !0);
                                    break;
                                default: "function" == typeof a.onClick && (e.onclick = Zr);
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
                                default: r = !1;
                            }
                        }
                        r && (t.flags |= 4);
                    }
                    null !== t.ref && (t.flags |= 512, t.flags |= 2097152);
                }
                return Wl(t), null;
            case 6:
                if (e && null != t.stateNode)
                    Ml(e, t, e.memoizedProps, r);
                else {
                    if ("string" != typeof r && null === t.stateNode)
                        throw Error(i(166));
                    if (n = no(to.current), no(Zi.current), di(t)) {
                        if (r = t.stateNode, n = t.memoizedProps, r[fa] = t, (o = r.nodeValue !== n) && null !== (e = ni))
                            switch (e.tag) {
                                case 3:
                                    Jr(r.nodeValue, n, !!(1 & e.mode));
                                    break;
                                case 5: !0 !== e.memoizedProps.suppressHydrationWarning && Jr(r.nodeValue, n, !!(1 & e.mode));
                            }
                        o && (t.flags |= 4);
                    }
                    else
                        (r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[fa] = t, t.stateNode = r;
                }
                return Wl(t), null;
            case 13:
                if (qa(lo), r = t.memoizedState, null === e || null !== e.memoizedState && null !== e.memoizedState.dehydrated) {
                    if (ai && null !== ri && 1 & t.mode && !(128 & t.flags))
                        fi(), pi(), t.flags |= 98560, o = !1;
                    else if (o = di(t), null !== r && null !== r.dehydrated) {
                        if (null === e) {
                            if (!o)
                                throw Error(i(318));
                            if (!(o = null !== (o = t.memoizedState) ? o.dehydrated : null))
                                throw Error(i(317));
                            o[fa] = t;
                        }
                        else
                            pi(), !(128 & t.flags) && (t.memoizedState = null), t.flags |= 4;
                        Wl(t), o = !1;
                    }
                    else
                        null !== ii && (ls(ii), ii = null), o = !0;
                    if (!o)
                        return 65536 & t.flags ? t : null;
                }
                return 128 & t.flags ? (t.lanes = n, t) : ((r = null !== r) != (null !== e && null !== e.memoizedState) && r && (t.child.flags |= 8192, 1 & t.mode && (null === e || 1 & lo.current ? 0 === Mu && (Mu = 3) : vs())), null !== t.updateQueue && (t.flags |= 4), Wl(t), null);
            case 4: return ao(), Tl(e, t), null === e && Br(t.stateNode.containerInfo), Wl(t), null;
            case 10: return Si(t.type._context), Wl(t), null;
            case 19:
                if (qa(lo), null === (o = t.memoizedState))
                    return Wl(t), null;
                if (r = !!(128 & t.flags), null === (u = o.rendering))
                    if (r)
                        Hl(o, !1);
                    else {
                        if (0 !== Mu || null !== e && 128 & e.flags)
                            for (e = t.child; null !== e;) {
                                if (null !== (u = uo(e))) {
                                    for (t.flags |= 128, Hl(o, !1), null !== (r = u.updateQueue) && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; null !== n;)
                                        e = r, (o = n).flags &= 14680066, null === (u = o.alternate) ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = u.childLanes, o.lanes = u.lanes, o.child = u.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = u.memoizedProps, o.memoizedState = u.memoizedState, o.updateQueue = u.updateQueue, o.type = u.type, e = u.dependencies, o.dependencies = null === e ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                                    return Ca(lo, 1 & lo.current | 2), t.child;
                                }
                                e = e.sibling;
                            }
                        null !== o.tail && Ge() > $u && (t.flags |= 128, r = !0, Hl(o, !1), t.lanes = 4194304);
                    }
                else {
                    if (!r)
                        if (null !== (e = uo(u))) {
                            if (t.flags |= 128, r = !0, null !== (n = e.updateQueue) && (t.updateQueue = n, t.flags |= 4), Hl(o, !0), null === o.tail && "hidden" === o.tailMode && !u.alternate && !ai)
                                return Wl(t), null;
                        }
                        else
                            2 * Ge() - o.renderingStartTime > $u && 1073741824 !== n && (t.flags |= 128, r = !0, Hl(o, !1), t.lanes = 4194304);
                    o.isBackwards ? (u.sibling = t.child, t.child = u) : (null !== (n = o.last) ? n.sibling = u : t.child = u, o.last = u);
                }
                return null !== o.tail ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = Ge(), t.sibling = null, n = lo.current, Ca(lo, r ? 1 & n | 2 : 1 & n), t) : (Wl(t), null);
            case 22:
            case 23: return fs(), r = null !== t.memoizedState, null !== e && null !== e.memoizedState !== r && (t.flags |= 8192), r && 1 & t.mode ? !!(1073741824 & Tu) && (Wl(t), 6 & t.subtreeFlags && (t.flags |= 8192)) : Wl(t), null;
            case 24:
            case 25: return null;
        } throw Error(i(156, t.tag)); } function Yl(e, t) { switch (ti(t), t.tag) {
            case 1: return Na(t.type) && Ta(), 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
            case 3: return ao(), qa(Ra), qa(Pa), co(), 65536 & (e = t.flags) && !(128 & e) ? (t.flags = -65537 & e | 128, t) : null;
            case 5: return oo(t), null;
            case 13:
                if (qa(lo), null !== (e = t.memoizedState) && null !== e.dehydrated) {
                    if (null === t.alternate)
                        throw Error(i(340));
                    pi();
                }
                return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
            case 19: return qa(lo), null;
            case 4: return ao(), null;
            case 10: return Si(t.type._context), null;
            case 22:
            case 23: return fs(), null;
            default: return null;
        } } Nl = function (e, t) { for (var n = t.child; null !== n;) {
            if (5 === n.tag || 6 === n.tag)
                e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
                n.child.return = n, n = n.child;
                continue;
            }
            if (n === t)
                break;
            for (; null === n.sibling;) {
                if (null === n.return || n.return === t)
                    return;
                n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
        } }, Tl = function () { }, zl = function (e, t, n, r) { var a = e.memoizedProps; if (a !== r) {
            e = t.stateNode, no(Zi.current);
            var i, o = null;
            switch (n) {
                case "input":
                    a = Y(e, a), r = Y(e, r), o = [];
                    break;
                case "select":
                    a = F({}, a, { value: void 0 }), r = F({}, r, { value: void 0 }), o = [];
                    break;
                case "textarea":
                    a = re(e, a), r = re(e, r), o = [];
                    break;
                default: "function" != typeof a.onClick && "function" == typeof r.onClick && (e.onclick = Zr);
            }
            for (c in be(n, r), n = null, a)
                if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
                    if ("style" === c) {
                        var u = a[c];
                        for (i in u)
                            u.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
                    }
                    else
                        "dangerouslySetInnerHTML" !== c && "children" !== c && "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && "autoFocus" !== c && (l.hasOwnProperty(c) ? o || (o = []) : (o = o || []).push(c, null));
            for (c in r) {
                var s = r[c];
                if (u = null != a ? a[c] : void 0, r.hasOwnProperty(c) && s !== u && (null != s || null != u))
                    if ("style" === c)
                        if (u) {
                            for (i in u)
                                !u.hasOwnProperty(i) || s && s.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
                            for (i in s)
                                s.hasOwnProperty(i) && u[i] !== s[i] && (n || (n = {}), n[i] = s[i]);
                        }
                        else
                            n || (o || (o = []), o.push(c, n)), n = s;
                    else
                        "dangerouslySetInnerHTML" === c ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, null != s && u !== s && (o = o || []).push(c, s)) : "children" === c ? "string" != typeof s && "number" != typeof s || (o = o || []).push(c, "" + s) : "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && (l.hasOwnProperty(c) ? (null != s && "onScroll" === c && Ur("scroll", e), o || u === s || (o = [])) : (o = o || []).push(c, s));
            }
            n && (o = o || []).push("style", n);
            var c = o;
            (t.updateQueue = c) && (t.flags |= 4);
        } }, Ml = function (e, t, n, r) { n !== r && (t.flags |= 4); }; var Xl = !1, Gl = !1, Jl = "function" == typeof WeakSet ? WeakSet : Set, Zl = null; function eu(e, t) { var n = e.ref; if (null !== n)
            if ("function" == typeof n)
                try {
                    n(null);
                }
                catch (n) {
                    qs(e, t, n);
                }
            else
                n.current = null; } function tu(e, t, n) { try {
            n();
        }
        catch (n) {
            qs(e, t, n);
        } } var nu = !1; function ru(e, t, n) { var r = t.updateQueue; if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = r = r.next;
            do {
                if ((a.tag & e) === e) {
                    var i = a.destroy;
                    a.destroy = void 0, void 0 !== i && tu(t, n, i);
                }
                a = a.next;
            } while (a !== r);
        } } function au(e, t) { if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
            var n = t = t.next;
            do {
                if ((n.tag & e) === e) {
                    var r = n.create;
                    n.destroy = r();
                }
                n = n.next;
            } while (n !== t);
        } } function iu(e) { var t = e.ref; if (null !== t) {
            var n = e.stateNode;
            e.tag, e = n, "function" == typeof t ? t(e) : t.current = e;
        } } function ou(e) { var t = e.alternate; null !== t && (e.alternate = null, ou(t)), e.child = null, e.deletions = null, e.sibling = null, 5 === e.tag && null !== (t = e.stateNode) && (delete t[fa], delete t[pa], delete t[ha], delete t[va], delete t[ga]), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null; } function lu(e) { return 5 === e.tag || 3 === e.tag || 4 === e.tag; } function uu(e) { e: for (;;) {
            for (; null === e.sibling;) {
                if (null === e.return || lu(e.return))
                    return null;
                e = e.return;
            }
            for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag;) {
                if (2 & e.flags)
                    continue e;
                if (null === e.child || 4 === e.tag)
                    continue e;
                e.child.return = e, e = e.child;
            }
            if (!(2 & e.flags))
                return e.stateNode;
        } } function su(e, t, n) { var r = e.tag; if (5 === r || 6 === r)
            e = e.stateNode, t ? 8 === n.nodeType ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e), null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = Zr));
        else if (4 !== r && null !== (e = e.child))
            for (su(e, t, n), e = e.sibling; null !== e;)
                su(e, t, n), e = e.sibling; } function cu(e, t, n) { var r = e.tag; if (5 === r || 6 === r)
            e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (4 !== r && null !== (e = e.child))
            for (cu(e, t, n), e = e.sibling; null !== e;)
                cu(e, t, n), e = e.sibling; } var du = null, fu = !1; function pu(e, t, n) { for (n = n.child; null !== n;)
            mu(e, t, n), n = n.sibling; } function mu(e, t, n) { if (it && "function" == typeof it.onCommitFiberUnmount)
            try {
                it.onCommitFiberUnmount(at, n);
            }
            catch (e) { } switch (n.tag) {
            case 5: Gl || eu(n, t);
            case 6:
                var r = du, a = fu;
                du = null, pu(e, t, n), fu = a, null !== (du = r) && (fu ? (e = du, n = n.stateNode, 8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n)) : du.removeChild(n.stateNode));
                break;
            case 18:
                null !== du && (fu ? (e = du, n = n.stateNode, 8 === e.nodeType ? ua(e.parentNode, n) : 1 === e.nodeType && ua(e, n), Bt(e)) : ua(du, n.stateNode));
                break;
            case 4:
                r = du, a = fu, du = n.stateNode.containerInfo, fu = !0, pu(e, t, n), du = r, fu = a;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                if (!Gl && null !== (r = n.updateQueue) && null !== (r = r.lastEffect)) {
                    a = r = r.next;
                    do {
                        var i = a, o = i.destroy;
                        i = i.tag, void 0 !== o && (2 & i || 4 & i) && tu(n, t, o), a = a.next;
                    } while (a !== r);
                }
                pu(e, t, n);
                break;
            case 1:
                if (!Gl && (eu(n, t), "function" == typeof (r = n.stateNode).componentWillUnmount))
                    try {
                        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
                    }
                    catch (e) {
                        qs(n, t, e);
                    }
                pu(e, t, n);
                break;
            case 21:
                pu(e, t, n);
                break;
            case 22:
                1 & n.mode ? (Gl = (r = Gl) || null !== n.memoizedState, pu(e, t, n), Gl = r) : pu(e, t, n);
                break;
            default: pu(e, t, n);
        } } function hu(e) { var t = e.updateQueue; if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Jl), t.forEach((function (t) { var r = Rs.bind(null, e, t); n.has(t) || (n.add(t), t.then(r, r)); }));
        } } function vu(e, t) { var n = t.deletions; if (null !== n)
            for (var r = 0; r < n.length; r++) {
                var a = n[r];
                try {
                    var o = e, l = t, u = l;
                    e: for (; null !== u;) {
                        switch (u.tag) {
                            case 5:
                                du = u.stateNode, fu = !1;
                                break e;
                            case 3:
                            case 4:
                                du = u.stateNode.containerInfo, fu = !0;
                                break e;
                        }
                        u = u.return;
                    }
                    if (null === du)
                        throw Error(i(160));
                    mu(o, l, a), du = null, fu = !1;
                    var s = a.alternate;
                    null !== s && (s.return = null), a.return = null;
                }
                catch (e) {
                    qs(a, t, e);
                }
            } if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t;)
                gu(t, e), t = t.sibling; } function gu(e, t) { var n = e.alternate, r = e.flags; switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                if (vu(t, e), bu(e), 4 & r) {
                    try {
                        ru(3, e, e.return), au(3, e);
                    }
                    catch (t) {
                        qs(e, e.return, t);
                    }
                    try {
                        ru(5, e, e.return);
                    }
                    catch (t) {
                        qs(e, e.return, t);
                    }
                }
                break;
            case 1:
                vu(t, e), bu(e), 512 & r && null !== n && eu(n, n.return);
                break;
            case 5:
                if (vu(t, e), bu(e), 512 & r && null !== n && eu(n, n.return), 32 & e.flags) {
                    var a = e.stateNode;
                    try {
                        fe(a, "");
                    }
                    catch (t) {
                        qs(e, e.return, t);
                    }
                }
                if (4 & r && null != (a = e.stateNode)) {
                    var o = e.memoizedProps, l = null !== n ? n.memoizedProps : o, u = e.type, s = e.updateQueue;
                    if (e.updateQueue = null, null !== s)
                        try {
                            "input" === u && "radio" === o.type && null != o.name && G(a, o), ye(u, l);
                            var c = ye(u, o);
                            for (l = 0; l < s.length; l += 2) {
                                var d = s[l], f = s[l + 1];
                                "style" === d ? ve(a, f) : "dangerouslySetInnerHTML" === d ? de(a, f) : "children" === d ? fe(a, f) : y(a, d, f, c);
                            }
                            switch (u) {
                                case "input":
                                    J(a, o);
                                    break;
                                case "textarea":
                                    ie(a, o);
                                    break;
                                case "select":
                                    var p = a._wrapperState.wasMultiple;
                                    a._wrapperState.wasMultiple = !!o.multiple;
                                    var m = o.value;
                                    null != m ? ne(a, !!o.multiple, m, !1) : p !== !!o.multiple && (null != o.defaultValue ? ne(a, !!o.multiple, o.defaultValue, !0) : ne(a, !!o.multiple, o.multiple ? [] : "", !1));
                            }
                            a[pa] = o;
                        }
                        catch (t) {
                            qs(e, e.return, t);
                        }
                }
                break;
            case 6:
                if (vu(t, e), bu(e), 4 & r) {
                    if (null === e.stateNode)
                        throw Error(i(162));
                    a = e.stateNode, o = e.memoizedProps;
                    try {
                        a.nodeValue = o;
                    }
                    catch (t) {
                        qs(e, e.return, t);
                    }
                }
                break;
            case 3:
                if (vu(t, e), bu(e), 4 & r && null !== n && n.memoizedState.isDehydrated)
                    try {
                        Bt(t.containerInfo);
                    }
                    catch (t) {
                        qs(e, e.return, t);
                    }
                break;
            case 4:
            default:
                vu(t, e), bu(e);
                break;
            case 13:
                vu(t, e), bu(e), 8192 & (a = e.child).flags && (o = null !== a.memoizedState, a.stateNode.isHidden = o, !o || null !== a.alternate && null !== a.alternate.memoizedState || (Bu = Ge())), 4 & r && hu(e);
                break;
            case 22:
                if (d = null !== n && null !== n.memoizedState, 1 & e.mode ? (Gl = (c = Gl) || d, vu(t, e), Gl = c) : vu(t, e), bu(e), 8192 & r) {
                    if (c = null !== e.memoizedState, (e.stateNode.isHidden = c) && !d && 1 & e.mode)
                        for (Zl = e, d = e.child; null !== d;) {
                            for (f = Zl = d; null !== Zl;) {
                                switch (m = (p = Zl).child, p.tag) {
                                    case 0:
                                    case 11:
                                    case 14:
                                    case 15:
                                        ru(4, p, p.return);
                                        break;
                                    case 1:
                                        eu(p, p.return);
                                        var h = p.stateNode;
                                        if ("function" == typeof h.componentWillUnmount) {
                                            r = p, n = p.return;
                                            try {
                                                t = r, h.props = t.memoizedProps, h.state = t.memoizedState, h.componentWillUnmount();
                                            }
                                            catch (e) {
                                                qs(r, n, e);
                                            }
                                        }
                                        break;
                                    case 5:
                                        eu(p, p.return);
                                        break;
                                    case 22: if (null !== p.memoizedState) {
                                        Su(f);
                                        continue;
                                    }
                                }
                                null !== m ? (m.return = p, Zl = m) : Su(f);
                            }
                            d = d.sibling;
                        }
                    e: for (d = null, f = e;;) {
                        if (5 === f.tag) {
                            if (null === d) {
                                d = f;
                                try {
                                    a = f.stateNode, c ? "function" == typeof (o = a.style).setProperty ? o.setProperty("display", "none", "important") : o.display = "none" : (u = f.stateNode, l = null != (s = f.memoizedProps.style) && s.hasOwnProperty("display") ? s.display : null, u.style.display = he("display", l));
                                }
                                catch (t) {
                                    qs(e, e.return, t);
                                }
                            }
                        }
                        else if (6 === f.tag) {
                            if (null === d)
                                try {
                                    f.stateNode.nodeValue = c ? "" : f.memoizedProps;
                                }
                                catch (t) {
                                    qs(e, e.return, t);
                                }
                        }
                        else if ((22 !== f.tag && 23 !== f.tag || null === f.memoizedState || f === e) && null !== f.child) {
                            f.child.return = f, f = f.child;
                            continue;
                        }
                        if (f === e)
                            break e;
                        for (; null === f.sibling;) {
                            if (null === f.return || f.return === e)
                                break e;
                            d === f && (d = null), f = f.return;
                        }
                        d === f && (d = null), f.sibling.return = f.return, f = f.sibling;
                    }
                }
                break;
            case 19: vu(t, e), bu(e), 4 & r && hu(e);
            case 21:
        } } function bu(e) { var t = e.flags; if (2 & t) {
            try {
                e: {
                    for (var n = e.return; null !== n;) {
                        if (lu(n)) {
                            var r = n;
                            break e;
                        }
                        n = n.return;
                    }
                    throw Error(i(160));
                }
                switch (r.tag) {
                    case 5:
                        var a = r.stateNode;
                        32 & r.flags && (fe(a, ""), r.flags &= -33), cu(e, uu(e), a);
                        break;
                    case 3:
                    case 4:
                        var o = r.stateNode.containerInfo;
                        su(e, uu(e), o);
                        break;
                    default: throw Error(i(161));
                }
            }
            catch (t) {
                qs(e, e.return, t);
            }
            e.flags &= -3;
        } 4096 & t && (e.flags &= -4097); } function yu(e, t, n) { Zl = e, wu(e, t, n); } function wu(e, t, n) { for (var r = !!(1 & e.mode); null !== Zl;) {
            var a = Zl, i = a.child;
            if (22 === a.tag && r) {
                var o = null !== a.memoizedState || Xl;
                if (!o) {
                    var l = a.alternate, u = null !== l && null !== l.memoizedState || Gl;
                    l = Xl;
                    var s = Gl;
                    if (Xl = o, (Gl = u) && !s)
                        for (Zl = a; null !== Zl;)
                            u = (o = Zl).child, 22 === o.tag && null !== o.memoizedState ? xu(a) : null !== u ? (u.return = o, Zl = u) : xu(a);
                    for (; null !== i;)
                        Zl = i, wu(i, t, n), i = i.sibling;
                    Zl = a, Xl = l, Gl = s;
                }
                ku(e);
            }
            else
                8772 & a.subtreeFlags && null !== i ? (i.return = a, Zl = i) : ku(e);
        } } function ku(e) { for (; null !== Zl;) {
            var t = Zl;
            if (8772 & t.flags) {
                var n = t.alternate;
                try {
                    if (8772 & t.flags)
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                Gl || au(5, t);
                                break;
                            case 1:
                                var r = t.stateNode;
                                if (4 & t.flags && !Gl)
                                    if (null === n)
                                        r.componentDidMount();
                                    else {
                                        var a = t.elementType === t.type ? n.memoizedProps : vi(t.type, n.memoizedProps);
                                        r.componentDidUpdate(a, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                                    }
                                var o = t.updateQueue;
                                null !== o && Ii(t, o, r);
                                break;
                            case 3:
                                var l = t.updateQueue;
                                if (null !== l) {
                                    if (n = null, null !== t.child)
                                        switch (t.child.tag) {
                                            case 5:
                                            case 1: n = t.child.stateNode;
                                        }
                                    Ii(t, l, n);
                                }
                                break;
                            case 5:
                                var u = t.stateNode;
                                if (null === n && 4 & t.flags) {
                                    n = u;
                                    var s = t.memoizedProps;
                                    switch (t.type) {
                                        case "button":
                                        case "input":
                                        case "select":
                                        case "textarea":
                                            s.autoFocus && n.focus();
                                            break;
                                        case "img": s.src && (n.src = s.src);
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
                            case 25: break;
                            case 13:
                                if (null === t.memoizedState) {
                                    var c = t.alternate;
                                    if (null !== c) {
                                        var d = c.memoizedState;
                                        if (null !== d) {
                                            var f = d.dehydrated;
                                            null !== f && Bt(f);
                                        }
                                    }
                                }
                                break;
                            default: throw Error(i(163));
                        }
                    Gl || 512 & t.flags && iu(t);
                }
                catch (e) {
                    qs(t, t.return, e);
                }
            }
            if (t === e) {
                Zl = null;
                break;
            }
            if (null !== (n = t.sibling)) {
                n.return = t.return, Zl = n;
                break;
            }
            Zl = t.return;
        } } function Su(e) { for (; null !== Zl;) {
            var t = Zl;
            if (t === e) {
                Zl = null;
                break;
            }
            var n = t.sibling;
            if (null !== n) {
                n.return = t.return, Zl = n;
                break;
            }
            Zl = t.return;
        } } function xu(e) { for (; null !== Zl;) {
            var t = Zl;
            try {
                switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        var n = t.return;
                        try {
                            au(4, t);
                        }
                        catch (e) {
                            qs(t, n, e);
                        }
                        break;
                    case 1:
                        var r = t.stateNode;
                        if ("function" == typeof r.componentDidMount) {
                            var a = t.return;
                            try {
                                r.componentDidMount();
                            }
                            catch (e) {
                                qs(t, a, e);
                            }
                        }
                        var i = t.return;
                        try {
                            iu(t);
                        }
                        catch (e) {
                            qs(t, i, e);
                        }
                        break;
                    case 5:
                        var o = t.return;
                        try {
                            iu(t);
                        }
                        catch (e) {
                            qs(t, o, e);
                        }
                }
            }
            catch (e) {
                qs(t, t.return, e);
            }
            if (t === e) {
                Zl = null;
                break;
            }
            var l = t.sibling;
            if (null !== l) {
                l.return = t.return, Zl = l;
                break;
            }
            Zl = t.return;
        } } var Eu, qu = Math.ceil, Cu = w.ReactCurrentDispatcher, _u = w.ReactCurrentOwner, Pu = w.ReactCurrentBatchConfig, Ru = 0, Du = null, Lu = null, Nu = 0, Tu = 0, zu = Ea(0), Mu = 0, Ou = null, Fu = 0, Iu = 0, Uu = 0, Au = null, ju = null, Bu = 0, $u = 1 / 0, Vu = null, Qu = !1, Hu = null, Wu = null, Ku = !1, Yu = null, Xu = 0, Gu = 0, Ju = null, Zu = -1, es = 0; function ts() { return 6 & Ru ? Ge() : -1 !== Zu ? Zu : Zu = Ge(); } function ns(e) { return 1 & e.mode ? 2 & Ru && 0 !== Nu ? Nu & -Nu : null !== hi.transition ? (0 === es && (es = ht()), es) : 0 !== (e = yt) ? e : e = void 0 === (e = window.event) ? 16 : Xt(e.type) : 1; } function rs(e, t, n, r) { if (50 < Gu)
            throw Gu = 0, Ju = null, Error(i(185)); gt(e, n, r), 2 & Ru && e === Du || (e === Du && (!(2 & Ru) && (Iu |= n), 4 === Mu && us(e, Nu)), as(e, r), 1 === n && 0 === Ru && !(1 & t.mode) && ($u = Ge() + 500, Ua && Ba())); } function as(e, t) { var n = e.callbackNode; !function (e, t) { for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, i = e.pendingLanes; 0 < i;) {
            var o = 31 - ot(i), l = 1 << o, u = a[o];
            -1 === u ? l & n && !(l & r) || (a[o] = pt(l, t)) : u <= t && (e.expiredLanes |= l), i &= ~l;
        } }(e, t); var r = ft(e, e === Du ? Nu : 0); if (0 === r)
            null !== n && Ke(n), e.callbackNode = null, e.callbackPriority = 0;
        else if (t = r & -r, e.callbackPriority !== t) {
            if (null != n && Ke(n), 1 === t)
                0 === e.tag ? function (e) { Ua = !0, ja(e); }(ss.bind(null, e)) : ja(ss.bind(null, e)), oa((function () { !(6 & Ru) && Ba(); })), n = null;
            else {
                switch (wt(r)) {
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
                    case 536870912: n = rt;
                }
                n = Ds(n, is.bind(null, e));
            }
            e.callbackPriority = t, e.callbackNode = n;
        } } function is(e, t) { if (Zu = -1, es = 0, 6 & Ru)
            throw Error(i(327)); var n = e.callbackNode; if (xs() && e.callbackNode !== n)
            return null; var r = ft(e, e === Du ? Nu : 0); if (0 === r)
            return null; if (30 & r || r & e.expiredLanes || t)
            t = gs(e, r);
        else {
            t = r;
            var a = Ru;
            Ru |= 2;
            var o = hs();
            for (Du === e && Nu === t || (Vu = null, $u = Ge() + 500, ps(e, t));;)
                try {
                    ys();
                    break;
                }
                catch (t) {
                    ms(e, t);
                }
            ki(), Cu.current = o, Ru = a, null !== Lu ? t = 0 : (Du = null, Nu = 0, t = Mu);
        } if (0 !== t) {
            if (2 === t && 0 !== (a = mt(e)) && (r = a, t = os(e, a)), 1 === t)
                throw n = Ou, ps(e, 0), us(e, r), as(e, Ge()), n;
            if (6 === t)
                us(e, r);
            else {
                if (a = e.current.alternate, !(30 & r || function (e) { for (var t = e;;) {
                    if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                            for (var r = 0; r < n.length; r++) {
                                var a = n[r], i = a.getSnapshot;
                                a = a.value;
                                try {
                                    if (!lr(i(), a))
                                        return !1;
                                }
                                catch (e) {
                                    return !1;
                                }
                            }
                    }
                    if (n = t.child, 16384 & t.subtreeFlags && null !== n)
                        n.return = t, t = n;
                    else {
                        if (t === e)
                            break;
                        for (; null === t.sibling;) {
                            if (null === t.return || t.return === e)
                                return !0;
                            t = t.return;
                        }
                        t.sibling.return = t.return, t = t.sibling;
                    }
                } return !0; }(a) || (t = gs(e, r), 2 === t && (o = mt(e), 0 !== o && (r = o, t = os(e, o))), 1 !== t)))
                    throw n = Ou, ps(e, 0), us(e, r), as(e, Ge()), n;
                switch (e.finishedWork = a, e.finishedLanes = r, t) {
                    case 0:
                    case 1: throw Error(i(345));
                    case 2:
                    case 5:
                        Ss(e, ju, Vu);
                        break;
                    case 3:
                        if (us(e, r), (130023424 & r) === r && 10 < (t = Bu + 500 - Ge())) {
                            if (0 !== ft(e, 0))
                                break;
                            if (((a = e.suspendedLanes) & r) !== r) {
                                ts(), e.pingedLanes |= e.suspendedLanes & a;
                                break;
                            }
                            e.timeoutHandle = ra(Ss.bind(null, e, ju, Vu), t);
                            break;
                        }
                        Ss(e, ju, Vu);
                        break;
                    case 4:
                        if (us(e, r), (4194240 & r) === r)
                            break;
                        for (t = e.eventTimes, a = -1; 0 < r;) {
                            var l = 31 - ot(r);
                            o = 1 << l, (l = t[l]) > a && (a = l), r &= ~o;
                        }
                        if (r = a, 10 < (r = (120 > (r = Ge() - r) ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * qu(r / 1960)) - r)) {
                            e.timeoutHandle = ra(Ss.bind(null, e, ju, Vu), r);
                            break;
                        }
                        Ss(e, ju, Vu);
                        break;
                    default: throw Error(i(329));
                }
            }
        } return as(e, Ge()), e.callbackNode === n ? is.bind(null, e) : null; } function os(e, t) { var n = Au; return e.current.memoizedState.isDehydrated && (ps(e, t).flags |= 256), 2 !== (e = gs(e, t)) && (t = ju, ju = n, null !== t && ls(t)), e; } function ls(e) { null === ju ? ju = e : ju.push.apply(ju, e); } function us(e, t) { for (t &= ~Uu, t &= ~Iu, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
            var n = 31 - ot(t), r = 1 << n;
            e[n] = -1, t &= ~r;
        } } function ss(e) { if (6 & Ru)
            throw Error(i(327)); xs(); var t = ft(e, 0); if (!(1 & t))
            return as(e, Ge()), null; var n = gs(e, t); if (0 !== e.tag && 2 === n) {
            var r = mt(e);
            0 !== r && (t = r, n = os(e, r));
        } if (1 === n)
            throw n = Ou, ps(e, 0), us(e, t), as(e, Ge()), n; if (6 === n)
            throw Error(i(345)); return e.finishedWork = e.current.alternate, e.finishedLanes = t, Ss(e, ju, Vu), as(e, Ge()), null; } function cs(e, t) { var n = Ru; Ru |= 1; try {
            return e(t);
        }
        finally {
            0 === (Ru = n) && ($u = Ge() + 500, Ua && Ba());
        } } function ds(e) { null !== Yu && 0 === Yu.tag && !(6 & Ru) && xs(); var t = Ru; Ru |= 1; var n = Pu.transition, r = yt; try {
            if (Pu.transition = null, yt = 1, e)
                return e();
        }
        finally {
            yt = r, Pu.transition = n, !(6 & (Ru = t)) && Ba();
        } } function fs() { Tu = zu.current, qa(zu); } function ps(e, t) { e.finishedWork = null, e.finishedLanes = 0; var n = e.timeoutHandle; if (-1 !== n && (e.timeoutHandle = -1, aa(n)), null !== Lu)
            for (n = Lu.return; null !== n;) {
                var r = n;
                switch (ti(r), r.tag) {
                    case 1:
                        null != (r = r.type.childContextTypes) && Ta();
                        break;
                    case 3:
                        ao(), qa(Ra), qa(Pa), co();
                        break;
                    case 5:
                        oo(r);
                        break;
                    case 4:
                        ao();
                        break;
                    case 13:
                    case 19:
                        qa(lo);
                        break;
                    case 10:
                        Si(r.type._context);
                        break;
                    case 22:
                    case 23: fs();
                }
                n = n.return;
            } if (Du = e, Lu = e = zs(e.current, null), Nu = Tu = t, Mu = 0, Ou = null, Uu = Iu = Fu = 0, ju = Au = null, null !== Ci) {
            for (t = 0; t < Ci.length; t++)
                if (null !== (r = (n = Ci[t]).interleaved)) {
                    n.interleaved = null;
                    var a = r.next, i = n.pending;
                    if (null !== i) {
                        var o = i.next;
                        i.next = a, r.next = o;
                    }
                    n.pending = r;
                }
            Ci = null;
        } return e; } function ms(e, t) { for (;;) {
            var n = Lu;
            try {
                if (ki(), fo.current = ol, bo) {
                    for (var r = ho.memoizedState; null !== r;) {
                        var a = r.queue;
                        null !== a && (a.pending = null), r = r.next;
                    }
                    bo = !1;
                }
                if (mo = 0, go = vo = ho = null, yo = !1, wo = 0, _u.current = null, null === n || null === n.return) {
                    Mu = 1, Ou = t, Lu = null;
                    break;
                }
                e: {
                    var o = e, l = n.return, u = n, s = t;
                    if (t = Nu, u.flags |= 32768, null !== s && "object" == typeof s && "function" == typeof s.then) {
                        var c = s, d = u, f = d.tag;
                        if (!(1 & d.mode || 0 !== f && 11 !== f && 15 !== f)) {
                            var p = d.alternate;
                            p ? (d.updateQueue = p.updateQueue, d.memoizedState = p.memoizedState, d.lanes = p.lanes) : (d.updateQueue = null, d.memoizedState = null);
                        }
                        var m = gl(l);
                        if (null !== m) {
                            m.flags &= -257, bl(m, l, u, 0, t), 1 & m.mode && vl(o, c, t), s = c;
                            var h = (t = m).updateQueue;
                            if (null === h) {
                                var v = new Set;
                                v.add(s), t.updateQueue = v;
                            }
                            else
                                h.add(s);
                            break e;
                        }
                        if (!(1 & t)) {
                            vl(o, c, t), vs();
                            break e;
                        }
                        s = Error(i(426));
                    }
                    else if (ai && 1 & u.mode) {
                        var g = gl(l);
                        if (null !== g) {
                            !(65536 & g.flags) && (g.flags |= 256), bl(g, l, u, 0, t), mi(cl(s, u));
                            break e;
                        }
                    }
                    o = s = cl(s, u), 4 !== Mu && (Mu = 2), null === Au ? Au = [o] : Au.push(o), o = l;
                    do {
                        switch (o.tag) {
                            case 3:
                                o.flags |= 65536, t &= -t, o.lanes |= t, Oi(o, ml(0, s, t));
                                break e;
                            case 1:
                                u = s;
                                var b = o.type, y = o.stateNode;
                                if (!(128 & o.flags || "function" != typeof b.getDerivedStateFromError && (null === y || "function" != typeof y.componentDidCatch || null !== Wu && Wu.has(y)))) {
                                    o.flags |= 65536, t &= -t, o.lanes |= t, Oi(o, hl(o, u, t));
                                    break e;
                                }
                        }
                        o = o.return;
                    } while (null !== o);
                }
                ks(n);
            }
            catch (e) {
                t = e, Lu === n && null !== n && (Lu = n = n.return);
                continue;
            }
            break;
        } } function hs() { var e = Cu.current; return Cu.current = ol, null === e ? ol : e; } function vs() { 0 !== Mu && 3 !== Mu && 2 !== Mu || (Mu = 4), null === Du || !(268435455 & Fu) && !(268435455 & Iu) || us(Du, Nu); } function gs(e, t) { var n = Ru; Ru |= 2; var r = hs(); for (Du === e && Nu === t || (Vu = null, ps(e, t));;)
            try {
                bs();
                break;
            }
            catch (t) {
                ms(e, t);
            } if (ki(), Ru = n, Cu.current = r, null !== Lu)
            throw Error(i(261)); return Du = null, Nu = 0, Mu; } function bs() { for (; null !== Lu;)
            ws(Lu); } function ys() { for (; null !== Lu && !Ye();)
            ws(Lu); } function ws(e) { var t = Eu(e.alternate, e, Tu); e.memoizedProps = e.pendingProps, null === t ? ks(e) : Lu = t, _u.current = null; } function ks(e) { var t = e; do {
            var n = t.alternate;
            if (e = t.return, 32768 & t.flags) {
                if (null !== (n = Yl(n, t)))
                    return n.flags &= 32767, void (Lu = n);
                if (null === e)
                    return Mu = 6, void (Lu = null);
                e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            }
            else if (null !== (n = Kl(n, t, Tu)))
                return void (Lu = n);
            if (null !== (t = t.sibling))
                return void (Lu = t);
            Lu = t = e;
        } while (null !== t); 0 === Mu && (Mu = 5); } function Ss(e, t, n) { var r = yt, a = Pu.transition; try {
            Pu.transition = null, yt = 1, function (e, t, n, r) { do {
                xs();
            } while (null !== Yu); if (6 & Ru)
                throw Error(i(327)); n = e.finishedWork; var a = e.finishedLanes; if (null === n)
                return null; if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
                throw Error(i(177)); e.callbackNode = null, e.callbackPriority = 0; var o = n.lanes | n.childLanes; if (function (e, t) { var n = e.pendingLanes & ~t; e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements; var r = e.eventTimes; for (e = e.expirationTimes; 0 < n;) {
                var a = 31 - ot(n), i = 1 << a;
                t[a] = 0, r[a] = -1, e[a] = -1, n &= ~i;
            } }(e, o), e === Du && (Lu = Du = null, Nu = 0), !(2064 & n.subtreeFlags) && !(2064 & n.flags) || Ku || (Ku = !0, Ds(tt, (function () { return xs(), null; }))), o = !!(15990 & n.flags), 15990 & n.subtreeFlags || o) {
                o = Pu.transition, Pu.transition = null;
                var l = yt;
                yt = 1;
                var u = Ru;
                Ru |= 4, _u.current = null, function (e, t) { if (ea = Vt, pr(e = fr())) {
                    if ("selectionStart" in e)
                        var n = { start: e.selectionStart, end: e.selectionEnd };
                    else
                        e: {
                            var r = (n = (n = e.ownerDocument) && n.defaultView || window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                                n = r.anchorNode;
                                var a = r.anchorOffset, o = r.focusNode;
                                r = r.focusOffset;
                                try {
                                    n.nodeType, o.nodeType;
                                }
                                catch (e) {
                                    n = null;
                                    break e;
                                }
                                var l = 0, u = -1, s = -1, c = 0, d = 0, f = e, p = null;
                                t: for (;;) {
                                    for (var m; f !== n || 0 !== a && 3 !== f.nodeType || (u = l + a), f !== o || 0 !== r && 3 !== f.nodeType || (s = l + r), 3 === f.nodeType && (l += f.nodeValue.length), null !== (m = f.firstChild);)
                                        p = f, f = m;
                                    for (;;) {
                                        if (f === e)
                                            break t;
                                        if (p === n && ++c === a && (u = l), p === o && ++d === r && (s = l), null !== (m = f.nextSibling))
                                            break;
                                        p = (f = p).parentNode;
                                    }
                                    f = m;
                                }
                                n = -1 === u || -1 === s ? null : { start: u, end: s };
                            }
                            else
                                n = null;
                        }
                    n = n || { start: 0, end: 0 };
                }
                else
                    n = null; for (ta = { focusedElem: e, selectionRange: n }, Vt = !1, Zl = t; null !== Zl;)
                    if (e = (t = Zl).child, 1028 & t.subtreeFlags && null !== e)
                        e.return = t, Zl = e;
                    else
                        for (; null !== Zl;) {
                            t = Zl;
                            try {
                                var h = t.alternate;
                                if (1024 & t.flags)
                                    switch (t.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                        case 5:
                                        case 6:
                                        case 4:
                                        case 17: break;
                                        case 1:
                                            if (null !== h) {
                                                var v = h.memoizedProps, g = h.memoizedState, b = t.stateNode, y = b.getSnapshotBeforeUpdate(t.elementType === t.type ? v : vi(t.type, v), g);
                                                b.__reactInternalSnapshotBeforeUpdate = y;
                                            }
                                            break;
                                        case 3:
                                            var w = t.stateNode.containerInfo;
                                            1 === w.nodeType ? w.textContent = "" : 9 === w.nodeType && w.documentElement && w.removeChild(w.documentElement);
                                            break;
                                        default: throw Error(i(163));
                                    }
                            }
                            catch (e) {
                                qs(t, t.return, e);
                            }
                            if (null !== (e = t.sibling)) {
                                e.return = t.return, Zl = e;
                                break;
                            }
                            Zl = t.return;
                        } h = nu, nu = !1; }(e, n), gu(n, e), mr(ta), Vt = !!ea, ta = ea = null, e.current = n, yu(n, e, a), Xe(), Ru = u, yt = l, Pu.transition = o;
            }
            else
                e.current = n; if (Ku && (Ku = !1, Yu = e, Xu = a), 0 === (o = e.pendingLanes) && (Wu = null), function (e) { if (it && "function" == typeof it.onCommitFiberRoot)
                try {
                    it.onCommitFiberRoot(at, e, void 0, !(128 & ~e.current.flags));
                }
                catch (e) { } }(n.stateNode), as(e, Ge()), null !== t)
                for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    r((a = t[n]).value, { componentStack: a.stack, digest: a.digest }); if (Qu)
                throw Qu = !1, e = Hu, Hu = null, e; !!(1 & Xu) && 0 !== e.tag && xs(), 1 & (o = e.pendingLanes) ? e === Ju ? Gu++ : (Gu = 0, Ju = e) : Gu = 0, Ba(); }(e, t, n, r);
        }
        finally {
            Pu.transition = a, yt = r;
        } return null; } function xs() { if (null !== Yu) {
            var e = wt(Xu), t = Pu.transition, n = yt;
            try {
                if (Pu.transition = null, yt = 16 > e ? 16 : e, null === Yu)
                    var r = !1;
                else {
                    if (e = Yu, Yu = null, Xu = 0, 6 & Ru)
                        throw Error(i(331));
                    var a = Ru;
                    for (Ru |= 4, Zl = e.current; null !== Zl;) {
                        var o = Zl, l = o.child;
                        if (16 & Zl.flags) {
                            var u = o.deletions;
                            if (null !== u) {
                                for (var s = 0; s < u.length; s++) {
                                    var c = u[s];
                                    for (Zl = c; null !== Zl;) {
                                        var d = Zl;
                                        switch (d.tag) {
                                            case 0:
                                            case 11:
                                            case 15: ru(8, d, o);
                                        }
                                        var f = d.child;
                                        if (null !== f)
                                            f.return = d, Zl = f;
                                        else
                                            for (; null !== Zl;) {
                                                var p = (d = Zl).sibling, m = d.return;
                                                if (ou(d), d === c) {
                                                    Zl = null;
                                                    break;
                                                }
                                                if (null !== p) {
                                                    p.return = m, Zl = p;
                                                    break;
                                                }
                                                Zl = m;
                                            }
                                    }
                                }
                                var h = o.alternate;
                                if (null !== h) {
                                    var v = h.child;
                                    if (null !== v) {
                                        h.child = null;
                                        do {
                                            var g = v.sibling;
                                            v.sibling = null, v = g;
                                        } while (null !== v);
                                    }
                                }
                                Zl = o;
                            }
                        }
                        if (2064 & o.subtreeFlags && null !== l)
                            l.return = o, Zl = l;
                        else
                            e: for (; null !== Zl;) {
                                if (2048 & (o = Zl).flags)
                                    switch (o.tag) {
                                        case 0:
                                        case 11:
                                        case 15: ru(9, o, o.return);
                                    }
                                var b = o.sibling;
                                if (null !== b) {
                                    b.return = o.return, Zl = b;
                                    break e;
                                }
                                Zl = o.return;
                            }
                    }
                    var y = e.current;
                    for (Zl = y; null !== Zl;) {
                        var w = (l = Zl).child;
                        if (2064 & l.subtreeFlags && null !== w)
                            w.return = l, Zl = w;
                        else
                            e: for (l = y; null !== Zl;) {
                                if (2048 & (u = Zl).flags)
                                    try {
                                        switch (u.tag) {
                                            case 0:
                                            case 11:
                                            case 15: au(9, u);
                                        }
                                    }
                                    catch (e) {
                                        qs(u, u.return, e);
                                    }
                                if (u === l) {
                                    Zl = null;
                                    break e;
                                }
                                var k = u.sibling;
                                if (null !== k) {
                                    k.return = u.return, Zl = k;
                                    break e;
                                }
                                Zl = u.return;
                            }
                    }
                    if (Ru = a, Ba(), it && "function" == typeof it.onPostCommitFiberRoot)
                        try {
                            it.onPostCommitFiberRoot(at, e);
                        }
                        catch (e) { }
                    r = !0;
                }
                return r;
            }
            finally {
                yt = n, Pu.transition = t;
            }
        } return !1; } function Es(e, t, n) { e = zi(e, t = ml(0, t = cl(n, t), 1), 1), t = ts(), null !== e && (gt(e, 1, t), as(e, t)); } function qs(e, t, n) { if (3 === e.tag)
            Es(e, e, n);
        else
            for (; null !== t;) {
                if (3 === t.tag) {
                    Es(t, e, n);
                    break;
                }
                if (1 === t.tag) {
                    var r = t.stateNode;
                    if ("function" == typeof t.type.getDerivedStateFromError || "function" == typeof r.componentDidCatch && (null === Wu || !Wu.has(r))) {
                        t = zi(t, e = hl(t, e = cl(n, e), 1), 1), e = ts(), null !== t && (gt(t, 1, e), as(t, e));
                        break;
                    }
                }
                t = t.return;
            } } function Cs(e, t, n) { var r = e.pingCache; null !== r && r.delete(t), t = ts(), e.pingedLanes |= e.suspendedLanes & n, Du === e && (Nu & n) === n && (4 === Mu || 3 === Mu && (130023424 & Nu) === Nu && 500 > Ge() - Bu ? ps(e, 0) : Uu |= n), as(e, t); } function _s(e, t) { 0 === t && (1 & e.mode ? (t = ct, !(130023424 & (ct <<= 1)) && (ct = 4194304)) : t = 1); var n = ts(); null !== (e = Ri(e, t)) && (gt(e, t, n), as(e, n)); } function Ps(e) { var t = e.memoizedState, n = 0; null !== t && (n = t.retryLane), _s(e, n); } function Rs(e, t) { var n = 0; switch (e.tag) {
            case 13:
                var r = e.stateNode, a = e.memoizedState;
                null !== a && (n = a.retryLane);
                break;
            case 19:
                r = e.stateNode;
                break;
            default: throw Error(i(314));
        } null !== r && r.delete(t), _s(e, n); } function Ds(e, t) { return We(e, t); } function Ls(e, t, n, r) { this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null; } function Ns(e, t, n, r) { return new Ls(e, t, n, r); } function Ts(e) { return !(!(e = e.prototype) || !e.isReactComponent); } function zs(e, t) { var n = e.alternate; return null === n ? ((n = Ns(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = 14680064 & e.flags, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n; } function Ms(e, t, n, r, a, o) { var l = 2; if (r = e, "function" == typeof e)
            Ts(e) && (l = 1);
        else if ("string" == typeof e)
            l = 5;
        else
            e: switch (e) {
                case x: return Os(n.children, a, o, t);
                case E:
                    l = 8, a |= 8;
                    break;
                case q: return (e = Ns(12, n, t, 2 | a)).elementType = q, e.lanes = o, e;
                case R: return (e = Ns(13, n, t, a)).elementType = R, e.lanes = o, e;
                case D: return (e = Ns(19, n, t, a)).elementType = D, e.lanes = o, e;
                case T: return Fs(n, a, o, t);
                default:
                    if ("object" == typeof e && null !== e)
                        switch (e.$$typeof) {
                            case C:
                                l = 10;
                                break e;
                            case _:
                                l = 9;
                                break e;
                            case P:
                                l = 11;
                                break e;
                            case L:
                                l = 14;
                                break e;
                            case N:
                                l = 16, r = null;
                                break e;
                        }
                    throw Error(i(130, null == e ? e : typeof e, ""));
            } return (t = Ns(l, n, t, a)).elementType = e, t.type = r, t.lanes = o, t; } function Os(e, t, n, r) { return (e = Ns(7, e, r, t)).lanes = n, e; } function Fs(e, t, n, r) { return (e = Ns(22, e, r, t)).elementType = T, e.lanes = n, e.stateNode = { isHidden: !1 }, e; } function Is(e, t, n) { return (e = Ns(6, e, null, t)).lanes = n, e; } function Us(e, t, n) { return (t = Ns(4, null !== e.children ? e.children : [], e.key, t)).lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t; } function As(e, t, n, r, a) { this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = vt(0), this.expirationTimes = vt(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = vt(0), this.identifierPrefix = r, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null; } function js(e, t, n, r, a, i, o, l, u) { return e = new As(e, t, n, l, u), 1 === t ? (t = 1, !0 === i && (t |= 8)) : t = 0, i = Ns(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Li(i), e; } function Bs(e) { if (!e)
            return _a; e: {
            if (Be(e = e._reactInternals) !== e || 1 !== e.tag)
                throw Error(i(170));
            var t = e;
            do {
                switch (t.tag) {
                    case 3:
                        t = t.stateNode.context;
                        break e;
                    case 1: if (Na(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e;
                    }
                }
                t = t.return;
            } while (null !== t);
            throw Error(i(171));
        } if (1 === e.tag) {
            var n = e.type;
            if (Na(n))
                return Ma(e, n, t);
        } return t; } function $s(e, t, n, r, a, i, o, l, u) { return (e = js(n, r, !0, e, 0, i, 0, l, u)).context = Bs(null), n = e.current, (i = Ti(r = ts(), a = ns(n))).callback = null != t ? t : null, zi(n, i, a), e.current.lanes = a, gt(e, a, r), as(e, r), e; } function Vs(e, t, n, r) { var a = t.current, i = ts(), o = ns(a); return n = Bs(n), null === t.context ? t.context = n : t.pendingContext = n, (t = Ti(i, o)).payload = { element: e }, null !== (r = void 0 === r ? null : r) && (t.callback = r), null !== (e = zi(a, t, o)) && (rs(e, a, o, i), Mi(e, a, o)), o; } function Qs(e) { return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null; } function Hs(e, t) { if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
        } } function Ws(e, t) { Hs(e, t), (e = e.alternate) && Hs(e, t); } Eu = function (e, t, n) { if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Ra.current)
                wl = !0;
            else {
                if (!(e.lanes & n || 128 & t.flags))
                    return wl = !1, function (e, t, n) { switch (t.tag) {
                        case 3:
                            Dl(t), pi();
                            break;
                        case 5:
                            io(t);
                            break;
                        case 1:
                            Na(t.type) && Oa(t);
                            break;
                        case 4:
                            ro(t, t.stateNode.containerInfo);
                            break;
                        case 10:
                            var r = t.type._context, a = t.memoizedProps.value;
                            Ca(gi, r._currentValue), r._currentValue = a;
                            break;
                        case 13:
                            if (null !== (r = t.memoizedState))
                                return null !== r.dehydrated ? (Ca(lo, 1 & lo.current), t.flags |= 128, null) : n & t.child.childLanes ? Il(e, t, n) : (Ca(lo, 1 & lo.current), null !== (e = Ql(e, t, n)) ? e.sibling : null);
                            Ca(lo, 1 & lo.current);
                            break;
                        case 19:
                            if (r = !!(n & t.childLanes), 128 & e.flags) {
                                if (r)
                                    return $l(e, t, n);
                                t.flags |= 128;
                            }
                            if (null !== (a = t.memoizedState) && (a.rendering = null, a.tail = null, a.lastEffect = null), Ca(lo, lo.current), r)
                                break;
                            return null;
                        case 22:
                        case 23: return t.lanes = 0, ql(e, t, n);
                    } return Ql(e, t, n); }(e, t, n);
                wl = !!(131072 & e.flags);
            }
        else
            wl = !1, ai && 1048576 & t.flags && Za(t, Ha, t.index); switch (t.lanes = 0, t.tag) {
            case 2:
                var r = t.type;
                Vl(e, t), e = t.pendingProps;
                var a = La(t, Pa.current);
                Ei(t, n), a = Eo(null, t, r, e, a, n);
                var o = qo();
                return t.flags |= 1, "object" == typeof a && null !== a && "function" == typeof a.render && void 0 === a.$$typeof ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Na(r) ? (o = !0, Oa(t)) : o = !1, t.memoizedState = null !== a.state && void 0 !== a.state ? a.state : null, Li(t), a.updater = ji, t.stateNode = a, a._reactInternals = t, Qi(t, r, e, n), t = Rl(null, t, r, !0, o, n)) : (t.tag = 0, ai && o && ei(t), kl(null, t, a, n), t = t.child), t;
            case 16:
                r = t.elementType;
                e: {
                    switch (Vl(e, t), e = t.pendingProps, r = (a = r._init)(r._payload), t.type = r, a = t.tag = function (e) { if ("function" == typeof e)
                        return Ts(e) ? 1 : 0; if (null != e) {
                        if ((e = e.$$typeof) === P)
                            return 11;
                        if (e === L)
                            return 14;
                    } return 2; }(r), e = vi(r, e), a) {
                        case 0:
                            t = _l(null, t, r, e, n);
                            break e;
                        case 1:
                            t = Pl(null, t, r, e, n);
                            break e;
                        case 11:
                            t = Sl(null, t, r, e, n);
                            break e;
                        case 14:
                            t = xl(null, t, r, vi(r.type, e), n);
                            break e;
                    }
                    throw Error(i(306, r, ""));
                }
                return t;
            case 0: return r = t.type, a = t.pendingProps, _l(e, t, r, a = t.elementType === r ? a : vi(r, a), n);
            case 1: return r = t.type, a = t.pendingProps, Pl(e, t, r, a = t.elementType === r ? a : vi(r, a), n);
            case 3:
                e: {
                    if (Dl(t), null === e)
                        throw Error(i(387));
                    r = t.pendingProps, a = (o = t.memoizedState).element, Ni(e, t), Fi(t, r, null, n);
                    var l = t.memoizedState;
                    if (r = l.element, o.isDehydrated) {
                        if (o = { element: r, isDehydrated: !1, cache: l.cache, pendingSuspenseBoundaries: l.pendingSuspenseBoundaries, transitions: l.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, 256 & t.flags) {
                            t = Ll(e, t, r, n, a = cl(Error(i(423)), t));
                            break e;
                        }
                        if (r !== a) {
                            t = Ll(e, t, r, n, a = cl(Error(i(424)), t));
                            break e;
                        }
                        for (ri = sa(t.stateNode.containerInfo.firstChild), ni = t, ai = !0, ii = null, n = Gi(t, null, r, n), t.child = n; n;)
                            n.flags = -3 & n.flags | 4096, n = n.sibling;
                    }
                    else {
                        if (pi(), r === a) {
                            t = Ql(e, t, n);
                            break e;
                        }
                        kl(e, t, r, n);
                    }
                    t = t.child;
                }
                return t;
            case 5: return io(t), null === e && si(t), r = t.type, a = t.pendingProps, o = null !== e ? e.memoizedProps : null, l = a.children, na(r, a) ? l = null : null !== o && na(r, o) && (t.flags |= 32), Cl(e, t), kl(e, t, l, n), t.child;
            case 6: return null === e && si(t), null;
            case 13: return Il(e, t, n);
            case 4: return ro(t, t.stateNode.containerInfo), r = t.pendingProps, null === e ? t.child = Xi(t, null, r, n) : kl(e, t, r, n), t.child;
            case 11: return r = t.type, a = t.pendingProps, Sl(e, t, r, a = t.elementType === r ? a : vi(r, a), n);
            case 7: return kl(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12: return kl(e, t, t.pendingProps.children, n), t.child;
            case 10:
                e: {
                    if (r = t.type._context, a = t.pendingProps, o = t.memoizedProps, l = a.value, Ca(gi, r._currentValue), r._currentValue = l, null !== o)
                        if (lr(o.value, l)) {
                            if (o.children === a.children && !Ra.current) {
                                t = Ql(e, t, n);
                                break e;
                            }
                        }
                        else
                            for (null !== (o = t.child) && (o.return = t); null !== o;) {
                                var u = o.dependencies;
                                if (null !== u) {
                                    l = o.child;
                                    for (var s = u.firstContext; null !== s;) {
                                        if (s.context === r) {
                                            if (1 === o.tag) {
                                                (s = Ti(-1, n & -n)).tag = 2;
                                                var c = o.updateQueue;
                                                if (null !== c) {
                                                    var d = (c = c.shared).pending;
                                                    null === d ? s.next = s : (s.next = d.next, d.next = s), c.pending = s;
                                                }
                                            }
                                            o.lanes |= n, null !== (s = o.alternate) && (s.lanes |= n), xi(o.return, n, t), u.lanes |= n;
                                            break;
                                        }
                                        s = s.next;
                                    }
                                }
                                else if (10 === o.tag)
                                    l = o.type === t.type ? null : o.child;
                                else if (18 === o.tag) {
                                    if (null === (l = o.return))
                                        throw Error(i(341));
                                    l.lanes |= n, null !== (u = l.alternate) && (u.lanes |= n), xi(l, n, t), l = o.sibling;
                                }
                                else
                                    l = o.child;
                                if (null !== l)
                                    l.return = o;
                                else
                                    for (l = o; null !== l;) {
                                        if (l === t) {
                                            l = null;
                                            break;
                                        }
                                        if (null !== (o = l.sibling)) {
                                            o.return = l.return, l = o;
                                            break;
                                        }
                                        l = l.return;
                                    }
                                o = l;
                            }
                    kl(e, t, a.children, n), t = t.child;
                }
                return t;
            case 9: return a = t.type, r = t.pendingProps.children, Ei(t, n), r = r(a = qi(a)), t.flags |= 1, kl(e, t, r, n), t.child;
            case 14: return a = vi(r = t.type, t.pendingProps), xl(e, t, r, a = vi(r.type, a), n);
            case 15: return El(e, t, t.type, t.pendingProps, n);
            case 17: return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : vi(r, a), Vl(e, t), t.tag = 1, Na(r) ? (e = !0, Oa(t)) : e = !1, Ei(t, n), $i(t, r, a), Qi(t, r, a, n), Rl(null, t, r, !0, e, n);
            case 19: return $l(e, t, n);
            case 22: return ql(e, t, n);
        } throw Error(i(156, t.tag)); }; var Ks = "function" == typeof reportError ? reportError : function (e) { console.error(e); }; function Ys(e) { this._internalRoot = e; } function Xs(e) { this._internalRoot = e; } function Gs(e) { return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType); } function Js(e) { return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue)); } function Zs() { } function ec(e, t, n, r, a) { var i = n._reactRootContainer; if (i) {
            var o = i;
            if ("function" == typeof a) {
                var l = a;
                a = function () { var e = Qs(o); l.call(e); };
            }
            Vs(t, o, e, a);
        }
        else
            o = function (e, t, n, r, a) { if (a) {
                if ("function" == typeof r) {
                    var i = r;
                    r = function () { var e = Qs(o); i.call(e); };
                }
                var o = $s(t, r, e, 0, null, !1, 0, "", Zs);
                return e._reactRootContainer = o, e[ma] = o.current, Br(8 === e.nodeType ? e.parentNode : e), ds(), o;
            } for (; a = e.lastChild;)
                e.removeChild(a); if ("function" == typeof r) {
                var l = r;
                r = function () { var e = Qs(u); l.call(e); };
            } var u = js(e, 0, !1, null, 0, !1, 0, "", Zs); return e._reactRootContainer = u, e[ma] = u.current, Br(8 === e.nodeType ? e.parentNode : e), ds((function () { Vs(t, u, n, r); })), u; }(n, t, e, a, r); return Qs(o); } Xs.prototype.render = Ys.prototype.render = function (e) { var t = this._internalRoot; if (null === t)
            throw Error(i(409)); Vs(e, t, null, null); }, Xs.prototype.unmount = Ys.prototype.unmount = function () { var e = this._internalRoot; if (null !== e) {
            this._internalRoot = null;
            var t = e.containerInfo;
            ds((function () { Vs(null, e, null, null); })), t[ma] = null;
        } }, Xs.prototype.unstable_scheduleHydration = function (e) { if (e) {
            var t = Et();
            e = { blockedOn: null, target: e, priority: t };
            for (var n = 0; n < Tt.length && 0 !== t && t < Tt[n].priority; n++)
                ;
            Tt.splice(n, 0, e), 0 === n && Ft(e);
        } }, kt = function (e) { switch (e.tag) {
            case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                    var n = dt(t.pendingLanes);
                    0 !== n && (bt(t, 1 | n), as(t, Ge()), !(6 & Ru) && ($u = Ge() + 500, Ba()));
                }
                break;
            case 13: ds((function () { var t = Ri(e, 1); if (null !== t) {
                var n = ts();
                rs(t, e, 1, n);
            } })), Ws(e, 1);
        } }, St = function (e) { if (13 === e.tag) {
            var t = Ri(e, 134217728);
            null !== t && rs(t, e, 134217728, ts()), Ws(e, 134217728);
        } }, xt = function (e) { if (13 === e.tag) {
            var t = ns(e), n = Ri(e, t);
            null !== n && rs(n, e, t, ts()), Ws(e, t);
        } }, Et = function () { return yt; }, qt = function (e, t) { var n = yt; try {
            return yt = e, t();
        }
        finally {
            yt = n;
        } }, Se = function (e, t, n) { switch (t) {
            case "input":
                if (J(e, n), t = n.name, "radio" === n.type && null != t) {
                    for (n = e; n.parentNode;)
                        n = n.parentNode;
                    for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                        var r = n[t];
                        if (r !== e && r.form === e.form) {
                            var a = ka(r);
                            if (!a)
                                throw Error(i(90));
                            W(r), J(r, a);
                        }
                    }
                }
                break;
            case "textarea":
                ie(e, n);
                break;
            case "select": null != (t = n.value) && ne(e, !!n.multiple, t, !1);
        } }, Pe = cs, Re = ds; var tc = { usingClientEntryPoint: !1, Events: [ya, wa, ka, Ce, _e, cs] }, nc = { findFiberByHostInstance: ba, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, rc = { bundleType: nc.bundleType, version: nc.version, rendererPackageName: nc.rendererPackageName, rendererConfig: nc.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: w.ReactCurrentDispatcher, findHostInstanceByFiber: function (e) { return null === (e = Qe(e)) ? null : e.stateNode; }, findFiberByHostInstance: nc.findFiberByHostInstance || function () { return null; }, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" }; if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
            var ac = __REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (!ac.isDisabled && ac.supportsFiber)
                try {
                    at = ac.inject(rc), it = ac;
                }
                catch (ce) { }
        } t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc, t.createPortal = function (e, t) { var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null; if (!Gs(t))
            throw Error(i(200)); return function (e, t, n) { var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null; return { $$typeof: S, key: null == r ? null : "" + r, children: e, containerInfo: t, implementation: n }; }(e, t, null, n); }, t.createRoot = function (e, t) { if (!Gs(e))
            throw Error(i(299)); var n = !1, r = "", a = Ks; return null != t && (!0 === t.unstable_strictMode && (n = !0), void 0 !== t.identifierPrefix && (r = t.identifierPrefix), void 0 !== t.onRecoverableError && (a = t.onRecoverableError)), t = js(e, 1, !1, null, 0, n, 0, r, a), e[ma] = t.current, Br(8 === e.nodeType ? e.parentNode : e), new Ys(t); }, t.findDOMNode = function (e) { if (null == e)
            return null; if (1 === e.nodeType)
            return e; var t = e._reactInternals; if (void 0 === t) {
            if ("function" == typeof e.render)
                throw Error(i(188));
            throw e = Object.keys(e).join(","), Error(i(268, e));
        } return null === (e = Qe(t)) ? null : e.stateNode; }, t.flushSync = function (e) { return ds(e); }, t.hydrate = function (e, t, n) { if (!Js(t))
            throw Error(i(200)); return ec(null, e, t, !0, n); }, t.hydrateRoot = function (e, t, n) { if (!Gs(e))
            throw Error(i(405)); var r = null != n && n.hydratedSources || null, a = !1, o = "", l = Ks; if (null != n && (!0 === n.unstable_strictMode && (a = !0), void 0 !== n.identifierPrefix && (o = n.identifierPrefix), void 0 !== n.onRecoverableError && (l = n.onRecoverableError)), t = $s(t, null, e, 1, null != n ? n : null, a, 0, o, l), e[ma] = t.current, Br(e), r)
            for (e = 0; e < r.length; e++)
                a = (a = (n = r[e])._getVersion)(n._source), null == t.mutableSourceEagerHydrationData ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(n, a); return new Xs(t); }, t.render = function (e, t, n) { if (!Js(t))
            throw Error(i(200)); return ec(null, e, t, !1, n); }, t.unmountComponentAtNode = function (e) { if (!Js(e))
            throw Error(i(40)); return !!e._reactRootContainer && (ds((function () { ec(null, null, e, !1, (function () { e._reactRootContainer = null, e[ma] = null; })); })), !0); }, t.unstable_batchedUpdates = cs, t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) { if (!Js(n))
            throw Error(i(200)); if (null == e || void 0 === e._reactInternals)
            throw Error(i(38)); return ec(e, t, n, !1, r); }, t.version = "18.2.0-next-9e3b772b8-20220608"; }, 338: function (e, t, n) { var r = n(961); t.H = r.createRoot, r.hydrateRoot; }, 961: function (e, t, n) { !function e() { if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            }
            catch (e) {
                console.error(e);
            } }(), e.exports = n(551); }, 20: function (e, t, n) { var r = n(540), a = Symbol.for("react.element"), i = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty), o = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 }; function u(e, t, n) { var r, u = {}, s = null, c = null; for (r in void 0 !== n && (s = "" + n), void 0 !== t.key && (s = "" + t.key), void 0 !== t.ref && (c = t.ref), t)
            i.call(t, r) && !l.hasOwnProperty(r) && (u[r] = t[r]); if (e && e.defaultProps)
            for (r in t = e.defaultProps)
                void 0 === u[r] && (u[r] = t[r]); return { $$typeof: a, type: e, key: s, ref: c, props: u, _owner: o.current }; } t.jsx = u, t.jsxs = u; }, 287: function (e, t) { var n = Symbol.for("react.element"), r = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), u = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), p = Symbol.iterator, m = { isMounted: function () { return !1; }, enqueueForceUpdate: function () { }, enqueueReplaceState: function () { }, enqueueSetState: function () { } }, h = Object.assign, v = {}; function g(e, t, n) { this.props = e, this.context = t, this.refs = v, this.updater = n || m; } function b() { } function y(e, t, n) { this.props = e, this.context = t, this.refs = v, this.updater = n || m; } g.prototype.isReactComponent = {}, g.prototype.setState = function (e, t) { if ("object" != typeof e && "function" != typeof e && null != e)
            throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables."); this.updater.enqueueSetState(this, e, t, "setState"); }, g.prototype.forceUpdate = function (e) { this.updater.enqueueForceUpdate(this, e, "forceUpdate"); }, b.prototype = g.prototype; var w = y.prototype = new b; w.constructor = y, h(w, g.prototype), w.isPureReactComponent = !0; var k = Array.isArray, S = Object.prototype.hasOwnProperty, x = { current: null }, E = { key: !0, ref: !0, __self: !0, __source: !0 }; function q(e, t, r) { var a, i = {}, o = null, l = null; if (null != t)
            for (a in void 0 !== t.ref && (l = t.ref), void 0 !== t.key && (o = "" + t.key), t)
                S.call(t, a) && !E.hasOwnProperty(a) && (i[a] = t[a]); var u = arguments.length - 2; if (1 === u)
            i.children = r;
        else if (1 < u) {
            for (var s = Array(u), c = 0; c < u; c++)
                s[c] = arguments[c + 2];
            i.children = s;
        } if (e && e.defaultProps)
            for (a in u = e.defaultProps)
                void 0 === i[a] && (i[a] = u[a]); return { $$typeof: n, type: e, key: o, ref: l, props: i, _owner: x.current }; } function C(e) { return "object" == typeof e && null !== e && e.$$typeof === n; } var _ = /\/+/g; function P(e, t) { return "object" == typeof e && null !== e && null != e.key ? function (e) { var t = { "=": "=0", ":": "=2" }; return "$" + e.replace(/[=:]/g, (function (e) { return t[e]; })); }("" + e.key) : t.toString(36); } function R(e, t, a, i, o) { var l = typeof e; "undefined" !== l && "boolean" !== l || (e = null); var u = !1; if (null === e)
            u = !0;
        else
            switch (l) {
                case "string":
                case "number":
                    u = !0;
                    break;
                case "object": switch (e.$$typeof) {
                    case n:
                    case r: u = !0;
                }
            } if (u)
            return o = o(u = e), e = "" === i ? "." + P(u, 0) : i, k(o) ? (a = "", null != e && (a = e.replace(_, "$&/") + "/"), R(o, t, a, "", (function (e) { return e; }))) : null != o && (C(o) && (o = function (e, t) { return { $$typeof: n, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner }; }(o, a + (!o.key || u && u.key === o.key ? "" : ("" + o.key).replace(_, "$&/") + "/") + e)), t.push(o)), 1; if (u = 0, i = "" === i ? "." : i + ":", k(e))
            for (var s = 0; s < e.length; s++) {
                var c = i + P(l = e[s], s);
                u += R(l, t, a, c, o);
            }
        else if (c = function (e) { return null === e || "object" != typeof e ? null : "function" == typeof (e = p && e[p] || e["@@iterator"]) ? e : null; }(e), "function" == typeof c)
            for (e = c.call(e), s = 0; !(l = e.next()).done;)
                u += R(l = l.value, t, a, c = i + P(l, s++), o);
        else if ("object" === l)
            throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead."); return u; } function D(e, t, n) { if (null == e)
            return e; var r = [], a = 0; return R(e, r, "", "", (function (e) { return t.call(n, e, a++); })), r; } function L(e) { if (-1 === e._status) {
            var t = e._result;
            (t = t()).then((function (t) { 0 !== e._status && -1 !== e._status || (e._status = 1, e._result = t); }), (function (t) { 0 !== e._status && -1 !== e._status || (e._status = 2, e._result = t); })), -1 === e._status && (e._status = 0, e._result = t);
        } if (1 === e._status)
            return e._result.default; throw e._result; } var N = { current: null }, T = { transition: null }, z = { ReactCurrentDispatcher: N, ReactCurrentBatchConfig: T, ReactCurrentOwner: x }; t.Children = { map: D, forEach: function (e, t, n) { D(e, (function () { t.apply(this, arguments); }), n); }, count: function (e) { var t = 0; return D(e, (function () { t++; })), t; }, toArray: function (e) { return D(e, (function (e) { return e; })) || []; }, only: function (e) { if (!C(e))
                throw Error("React.Children.only expected to receive a single React element child."); return e; } }, t.Component = g, t.Fragment = a, t.Profiler = o, t.PureComponent = y, t.StrictMode = i, t.Suspense = c, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = z, t.cloneElement = function (e, t, r) { if (null == e)
            throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + "."); var a = h({}, e.props), i = e.key, o = e.ref, l = e._owner; if (null != t) {
            if (void 0 !== t.ref && (o = t.ref, l = x.current), void 0 !== t.key && (i = "" + t.key), e.type && e.type.defaultProps)
                var u = e.type.defaultProps;
            for (s in t)
                S.call(t, s) && !E.hasOwnProperty(s) && (a[s] = void 0 === t[s] && void 0 !== u ? u[s] : t[s]);
        } var s = arguments.length - 2; if (1 === s)
            a.children = r;
        else if (1 < s) {
            u = Array(s);
            for (var c = 0; c < s; c++)
                u[c] = arguments[c + 2];
            a.children = u;
        } return { $$typeof: n, type: e.type, key: i, ref: o, props: a, _owner: l }; }, t.createContext = function (e) { return (e = { $$typeof: u, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }).Provider = { $$typeof: l, _context: e }, e.Consumer = e; }, t.createElement = q, t.createFactory = function (e) { var t = q.bind(null, e); return t.type = e, t; }, t.createRef = function () { return { current: null }; }, t.forwardRef = function (e) { return { $$typeof: s, render: e }; }, t.isValidElement = C, t.lazy = function (e) { return { $$typeof: f, _payload: { _status: -1, _result: e }, _init: L }; }, t.memo = function (e, t) { return { $$typeof: d, type: e, compare: void 0 === t ? null : t }; }, t.startTransition = function (e) { var t = T.transition; T.transition = {}; try {
            e();
        }
        finally {
            T.transition = t;
        } }, t.unstable_act = function () { throw Error("act(...) is not supported in production builds of React."); }, t.useCallback = function (e, t) { return N.current.useCallback(e, t); }, t.useContext = function (e) { return N.current.useContext(e); }, t.useDebugValue = function () { }, t.useDeferredValue = function (e) { return N.current.useDeferredValue(e); }, t.useEffect = function (e, t) { return N.current.useEffect(e, t); }, t.useId = function () { return N.current.useId(); }, t.useImperativeHandle = function (e, t, n) { return N.current.useImperativeHandle(e, t, n); }, t.useInsertionEffect = function (e, t) { return N.current.useInsertionEffect(e, t); }, t.useLayoutEffect = function (e, t) { return N.current.useLayoutEffect(e, t); }, t.useMemo = function (e, t) { return N.current.useMemo(e, t); }, t.useReducer = function (e, t, n) { return N.current.useReducer(e, t, n); }, t.useRef = function (e) { return N.current.useRef(e); }, t.useState = function (e) { return N.current.useState(e); }, t.useSyncExternalStore = function (e, t, n) { return N.current.useSyncExternalStore(e, t, n); }, t.useTransition = function () { return N.current.useTransition(); }, t.version = "18.2.0"; }, 540: function (e, t, n) { e.exports = n(287); }, 848: function (e, t, n) { e.exports = n(20); }, 463: function (e, t) { function n(e, t) { var n = e.length; e.push(t); e: for (; 0 < n;) {
            var r = n - 1 >>> 1, a = e[r];
            if (!(0 < i(a, t)))
                break e;
            e[r] = t, e[n] = a, n = r;
        } } function r(e) { return 0 === e.length ? null : e[0]; } function a(e) { if (0 === e.length)
            return null; var t = e[0], n = e.pop(); if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, o = a >>> 1; r < o;) {
                var l = 2 * (r + 1) - 1, u = e[l], s = l + 1, c = e[s];
                if (0 > i(u, n))
                    s < a && 0 > i(c, u) ? (e[r] = c, e[s] = n, r = s) : (e[r] = u, e[l] = n, r = l);
                else {
                    if (!(s < a && 0 > i(c, n)))
                        break e;
                    e[r] = c, e[s] = n, r = s;
                }
            }
        } return t; } function i(e, t) { var n = e.sortIndex - t.sortIndex; return 0 !== n ? n : e.id - t.id; } if ("object" == typeof performance && "function" == typeof performance.now) {
            var o = performance;
            t.unstable_now = function () { return o.now(); };
        }
        else {
            var l = Date, u = l.now();
            t.unstable_now = function () { return l.now() - u; };
        } var s = [], c = [], d = 1, f = null, p = 3, m = !1, h = !1, v = !1, g = "function" == typeof setTimeout ? setTimeout : null, b = "function" == typeof clearTimeout ? clearTimeout : null, y = "undefined" != typeof setImmediate ? setImmediate : null; function w(e) { for (var t = r(c); null !== t;) {
            if (null === t.callback)
                a(c);
            else {
                if (!(t.startTime <= e))
                    break;
                a(c), t.sortIndex = t.expirationTime, n(s, t);
            }
            t = r(c);
        } } function k(e) { if (v = !1, w(e), !h)
            if (null !== r(s))
                h = !0, T(S);
            else {
                var t = r(c);
                null !== t && z(k, t.startTime - e);
            } } function S(e, n) { h = !1, v && (v = !1, b(C), C = -1), m = !0; var i = p; try {
            for (w(n), f = r(s); null !== f && (!(f.expirationTime > n) || e && !R());) {
                var o = f.callback;
                if ("function" == typeof o) {
                    f.callback = null, p = f.priorityLevel;
                    var l = o(f.expirationTime <= n);
                    n = t.unstable_now(), "function" == typeof l ? f.callback = l : f === r(s) && a(s), w(n);
                }
                else
                    a(s);
                f = r(s);
            }
            if (null !== f)
                var u = !0;
            else {
                var d = r(c);
                null !== d && z(k, d.startTime - n), u = !1;
            }
            return u;
        }
        finally {
            f = null, p = i, m = !1;
        } } "undefined" != typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling); var x, E = !1, q = null, C = -1, _ = 5, P = -1; function R() { return !(t.unstable_now() - P < _); } function D() { if (null !== q) {
            var e = t.unstable_now();
            P = e;
            var n = !0;
            try {
                n = q(!0, e);
            }
            finally {
                n ? x() : (E = !1, q = null);
            }
        }
        else
            E = !1; } if ("function" == typeof y)
            x = function () { y(D); };
        else if ("undefined" != typeof MessageChannel) {
            var L = new MessageChannel, N = L.port2;
            L.port1.onmessage = D, x = function () { N.postMessage(null); };
        }
        else
            x = function () { g(D, 0); }; function T(e) { q = e, E || (E = !0, x()); } function z(e, n) { C = g((function () { e(t.unstable_now()); }), n); } t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function (e) { e.callback = null; }, t.unstable_continueExecution = function () { h || m || (h = !0, T(S)); }, t.unstable_forceFrameRate = function (e) { 0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : _ = 0 < e ? Math.floor(1e3 / e) : 5; }, t.unstable_getCurrentPriorityLevel = function () { return p; }, t.unstable_getFirstCallbackNode = function () { return r(s); }, t.unstable_next = function (e) { switch (p) {
            case 1:
            case 2:
            case 3:
                var t = 3;
                break;
            default: t = p;
        } var n = p; p = t; try {
            return e();
        }
        finally {
            p = n;
        } }, t.unstable_pauseExecution = function () { }, t.unstable_requestPaint = function () { }, t.unstable_runWithPriority = function (e, t) { switch (e) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5: break;
            default: e = 3;
        } var n = p; p = e; try {
            return t();
        }
        finally {
            p = n;
        } }, t.unstable_scheduleCallback = function (e, a, i) { var o = t.unstable_now(); switch (i = "object" == typeof i && null !== i && "number" == typeof (i = i.delay) && 0 < i ? o + i : o, e) {
            case 1:
                var l = -1;
                break;
            case 2:
                l = 250;
                break;
            case 5:
                l = 1073741823;
                break;
            case 4:
                l = 1e4;
                break;
            default: l = 5e3;
        } return e = { id: d++, callback: a, priorityLevel: e, startTime: i, expirationTime: l = i + l, sortIndex: -1 }, i > o ? (e.sortIndex = i, n(c, e), null === r(s) && e === r(c) && (v ? (b(C), C = -1) : v = !0, z(k, i - o))) : (e.sortIndex = l, n(s, e), h || m || (h = !0, T(S))), e; }, t.unstable_shouldYield = R, t.unstable_wrapCallback = function (e) { var t = p; return function () { var n = p; p = t; try {
            return e.apply(this, arguments);
        }
        finally {
            p = n;
        } }; }; }, 982: function (e, t, n) { e.exports = n(463); }, 852: function (e, t, n) { n.r(t), n.d(t, { default: function () { return a; } }); var r = n(848); var a = function () { return (0, r.jsx)("h1", { children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae soluta explicabo dolore corporis sit aperiam maiores delectus recusandae ab, veritatis, laborum laboriosam atque voluptatibus porro voluptates numquam magnam repellat. Enim! Fuga nisi neque voluptatem consequuntur rerum, expedita alias, enim beatae iste quo error facere quia molestiae mollitia omnis voluptas amet non ab? Quis vitae dolores non suscipit facilis minus dolorem! Maiores dolores natus fugit repellat quaerat repudiandae illum, eos assumenda ex delectus suscipit nesciunt asperiores esse autem. Cum consequatur inventore dolorum quas sit, officia odit ratione dignissimos tenetur. Optio, doloribus! Suscipit fugiat eveniet error ad voluptatem velit fugit dignissimos sapiente, minima consectetur sed illum, doloremque laudantium tenetur eaque assumenda ex voluptatum? Sapiente consectetur at officia aliquid minima corporis quas perspiciatis. Recusandae ipsam molestias quibusdam ab facilis illo libero, non quia maxime ullam perspiciatis provident fugit atque est temporibus? Excepturi vel voluptatem maxime similique mollitia aspernatur explicabo temporibus nihil ea repellat! Ab harum corporis, saepe, repellendus, deleniti esse iusto alias nemo cupiditate doloribus dolorum. Culpa cumque necessitatibus aut deleniti corporis nesciunt, vero sunt ab. Quisquam delectus suscipit sequi maxime quam. Corrupti. Quas, modi debitis illo repudiandae corporis similique dicta dolor veritatis quis odio eos facere blanditiis tempore enim. Provident veniam, eum quibusdam esse fugiat consectetur fuga, non facilis aliquam sapiente cumque. Laboriosam assumenda quo ipsum eum alias laborum. Ad, ducimus, nulla nihil autem praesentium excepturi repellendus atque sequi minima ratione itaque ipsa. Nisi in aut necessitatibus laboriosam pariatur quam repellendus amet? Est nobis molestias eum quibusdam esse tempora culpa nesciunt eligendi, earum ad. Itaque temporibus ex accusamus consectetur sit magnam eum, voluptatum nisi adipisci ipsam. Accusamus aperiam voluptatum ipsa voluptatibus at? Est nihil minima doloremque aspernatur sed quia, eum vero eaque unde, magni possimus explicabo perferendis harum magnam asperiores ullam ipsam. Maxime quidem non accusamus rem, quisquam voluptatibus labore dolores itaque. Debitis autem itaque illum culpa iure, explicabo cupiditate enim voluptatem esse asperiores quia praesentium unde repellendus impedit vero earum delectus nemo incidunt non odit. Aut ratione consectetur consequuntur et odit. Tempore iusto in fuga! Nemo, temporibus veniam, facilis corrupti voluptatem mollitia quis eligendi unde debitis aut perferendis? Ipsa, itaque. Quaerat aliquid et officia? Eaque quae eveniet cum quos, possimus officiis! Ipsum ad recusandae ea officia eaque sapiente labore assumenda quaerat magnam fuga praesentium amet saepe suscipit sequi expedita corporis, debitis maiores nulla porro similique reprehenderit nihil illum! Facilis, architecto quod. Optio, qui earum nihil neque officia error repellendus, dolor perspiciatis cum commodi laboriosam eos, non architecto voluptatibus pariatur molestiae incidunt. Quasi, blanditiis doloremque nulla dignissimos eius expedita dolor ipsum fugiat? Veniam cumque doloremque dignissimos expedita, beatae quos quae officiis, neque sed, blanditiis tempore consectetur alias dolores nesciunt eum reprehenderit asperiores facilis commodi vel repellat aut placeat libero ipsam velit. Nemo! Sint quis ullam nostrum corrupti iste voluptates sed dolor. Odit sed accusamus repellat alias, eos ea iusto nulla? Voluptate eum optio qui, maiores quaerat tempora adipisci cupiditate repellat obcaecati quis! Ipsam incidunt ipsa consequuntur inventore omnis magnam quae cupiditate sed ducimus maxime fuga, eum exercitationem rem perferendis suscipit nulla? Fugiat reiciendis nihil perferendis cupiditate porro eligendi, repudiandae culpa sint aspernatur? Dicta maiores a unde ipsam, autem amet dolor consectetur suscipit commodi iure consequuntur error reprehenderit ullam, ducimus aliquam voluptas deleniti repellat. Impedit cumque laborum similique dicta alias quaerat repudiandae et. Porro alias quam magni incidunt iure tempora quas impedit corrupti unde sed omnis error libero, officia ipsum voluptas dolores velit neque quia est. Assumenda, illum in iusto quasi laudantium quaerat! Blanditiis numquam voluptate voluptatem optio culpa ut sit, nesciunt neque non officiis eum cumque nulla maxime adipisci cupiditate beatae, magnam esse corrupti autem explicabo fugit sint voluptates ducimus porro. Repellendus. Eum incidunt cupiditate expedita libero! Nisi repudiandae libero assumenda reprehenderit nemo eum magnam quasi debitis modi harum. Natus, amet distinctio suscipit, vel nemo in fugit blanditiis odio dolorum dolore facilis. Minima, illo. Fugiat deleniti, quo temporibus quas itaque odit distinctio dolorum reiciendis nemo, sed minus dolores? Sequi nam culpa ab ut, unde molestias quisquam dicta cum porro, debitis expedita accusamus. Perferendis ex animi illum accusamus veniam? Quaerat qui quam rem voluptates, distinctio consequuntur unde ipsam corporis dolorem ut obcaecati veritatis vero est iusto dolore! Consequatur labore aspernatur earum eos perferendis! Aliquid voluptatibus ducimus reprehenderit veritatis! Nesciunt impedit ea dolore, qui iure veniam dolorum fuga vitae quaerat mollitia sequi ad doloremque, eum dicta! Fuga in sint sunt hic placeat, laboriosam tenetur? Possimus quibusdam voluptate dolores odit voluptatum similique at, modi saepe ullam, totam, adipisci id. Quo voluptas, consequatur fugiat deleniti accusamus doloremque, nam distinctio ex, exercitationem eum autem? Vitae, ex. Assumenda? Dicta, suscipit doloremque. Magnam, quas? In dolorum, debitis beatae placeat amet eos adipisci corrupti aliquam velit recusandae ab quod quas ex facilis tenetur eum impedit, nihil est rem possimus a? Officiis, reprehenderit omnis temporibus quibusdam eius velit aliquid assumenda nihil minus nemo facilis illum modi, sunt quae maxime numquam quos ut doloremque dolorum! A deleniti veniam error delectus, nostrum quaerat. Harum sapiente accusamus non dignissimos corporis reprehenderit tenetur rem labore, porro atque fugit iste quis recusandae incidunt itaque magni velit ducimus distinctio dicta at illum fuga, repellat maiores temporibus! Mollitia! Ipsam, consequuntur nulla. Placeat repudiandae, ullam quia velit excepturi accusamus dignissimos nostrum tenetur ad, quasi amet tempore modi aliquam expedita soluta consectetur esse doloremque explicabo? Facere sunt tempora ea suscipit! Eveniet delectus magni cum odit neque, expedita explicabo nesciunt voluptas aliquid veritatis et mollitia corrupti! Dicta neque aut adipisci dolores maiores odit iure quisquam corrupti quia ea. Enim, praesentium esse. Praesentium libero tenetur vel, illum odit inventore nihil, quaerat non obcaecati veritatis temporibus, ipsam vero architecto aliquam officia sed saepe quos dolor earum debitis eaque unde? Officia voluptatum quasi cumque. Facere autem incidunt quibusdam totam deleniti! Harum pariatur laudantium dolorem non, sunt dicta error obcaecati! Maxime soluta itaque placeat totam tempore officia fuga perferendis, optio quae, nemo impedit, debitis suscipit? Dolore incidunt animi iure quae earum maiores id corrupti, in dolores, officia nisi libero explicabo dicta eum natus perspiciatis est laboriosam a quo molestiae delectus hic? At pariatur laboriosam soluta! Accusantium rem modi, iure assumenda voluptatum corrupti quibusdam eaque autem. Culpa saepe aliquid ex id deleniti? Numquam vel beatae adipisci saepe alias inventore tenetur quo, aliquid aperiam, voluptatem neque ipsam. Nisi quod rem ratione, ipsam possimus debitis aspernatur, natus nihil cumque incidunt officiis, ducimus culpa molestias vel amet saepe accusantium non voluptatum atque expedita eveniet necessitatibus! Voluptas nulla mollitia saepe! Corporis incidunt quidem necessitatibus suscipit optio culpa! Dolores praesentium tempora quos iste culpa voluptatem voluptates recusandae, est accusamus nisi non architecto minus consequatur, earum quae officiis, eveniet corporis dolorem perspiciatis. Provident minima voluptas odit veritatis magni id impedit eos ex ipsam sequi rem, explicabo nemo in dolore illum porro officiis, ipsa quos atque aliquid veniam. Adipisci autem minus dolorem unde. Unde similique iste a? Natus laudantium itaque, iusto nobis nemo eos adipisci numquam praesentium tempore sed nostrum neque, nesciunt eius quaerat, dignissimos perspiciatis amet rem ipsam autem pariatur. Qui, nam. Necessitatibus sapiente non iusto consequuntur omnis minus totam, rem possimus esse est! Eveniet labore dicta quaerat corporis. Deleniti, neque provident! Optio accusantium, ducimus consequatur ab quaerat cumque facilis reprehenderit repudiandae. Provident voluptas vitae nemo pariatur cumque nobis. Molestias adipisci vero temporibus, quisquam assumenda sit ipsa nostrum molestiae commodi veniam vel velit fugit id accusantium voluptatem earum hic odio, sunt ea? Dolores facere assumenda consequuntur fugiat iure qui tenetur tempore officia, animi, ex hic illo nostrum ipsum fugit reprehenderit. Accusantium est ipsum cum, excepturi ad sit. Nemo, amet. Minima, quisquam provident. Deserunt perferendis ipsum quidem sapiente voluptatem pariatur quis vel perspiciatis placeat quisquam temporibus, harum consectetur enim dolorem exercitationem repellendus nostrum ducimus unde. Ratione dignissimos officiis, iure quaerat ex inventore quibusdam. Natus asperiores quia quo dicta, voluptatem impedit adipisci accusamus, cumque, amet ut perspiciatis laborum numquam sed quaerat? Sint recusandae magnam dicta architecto eaque sequi, sit veniam, obcaecati ut tenetur tempora? Sapiente maxime maiores voluptatibus labore aliquid ex aliquam quasi ipsum, omnis asperiores veritatis autem ipsa, illo quos aspernatur necessitatibus voluptatum quae. Dignissimos incidunt cumque voluptatem consequuntur ullam enim odit iste. Eligendi nesciunt libero laudantium sed obcaecati laboriosam architecto sit consequuntur voluptatum quae, maxime sunt dolorum minima optio porro aliquam, ab minus quasi. Laudantium ex hic velit illo molestias obcaecati dolorum. Numquam at quis, dolore pariatur magni dolorum possimus quam tempora reprehenderit, quos accusantium, eligendi nemo aliquid voluptatum? Cum reprehenderit asperiores aliquid qui, earum at totam commodi! Voluptatibus facilis totam sunt. Nemo, explicabo labore. Odit itaque veritatis sapiente veniam harum quo maxime. Minima, odio in iure culpa illo, a dignissimos repellat explicabo modi temporibus saepe quidem quasi quisquam sapiente ut vitae. Exercitationem eaque similique officia commodi! Perspiciatis, aliquam magnam assumenda iure praesentium reprehenderit deleniti adipisci repudiandae obcaecati in iste incidunt cupiditate. Numquam dicta quo quia suscipit quam vel quis tenetur distinctio! Repellat cumque itaque cum excepturi, corporis atque velit ullam pariatur maiores maxime? Deleniti ipsam dolor explicabo quidem vel ipsa nesciunt placeat ut! Id quaerat, ad eligendi quisquam ipsum adipisci ut! Architecto tempora nulla assumenda quia vitae dolores exercitationem inventore eos rerum corrupti! Quod iusto impedit ipsum ex fuga itaque ea eaque unde pariatur eveniet? Voluptate quam eligendi voluptatem quibusdam ipsam. Reiciendis, excepturi! Aperiam eos, asperiores eveniet quaerat odio deserunt. Expedita asperiores voluptas labore officiis deserunt minima tempora repellendus totam accusamus reprehenderit delectus quas, non velit unde aspernatur veniam enim. Ea. Voluptatum dolorum iusto magni distinctio provident deserunt mollitia, repellat voluptas sunt nobis eos dolore dolores reiciendis eveniet deleniti consectetur quis soluta dicta consequuntur, in quae est et natus corporis! Quaerat. Tempora consequatur, porro quasi voluptatum maiores enim impedit voluptatibus autem facilis mollitia saepe quae excepturi ducimus dolorem magni perspiciatis cumque aut. Dolor facilis necessitatibus nemo mollitia? Dolor, autem nobis. Dicta. Alias at nostrum accusamus laudantium eius sit, ad amet optio modi dolore totam assumenda laborum vel consequatur quibusdam odit delectus, quas accusantium magni voluptate! Minus accusantium sed eaque at cupiditate. Facilis maiores impedit tempora fuga a suscipit, odit deserunt! Quas quae ipsa sapiente, id vel illum deserunt, hic ullam harum quos doloribus. Ex neque deleniti quas iure odit ducimus ut! Debitis perspiciatis, magnam consequuntur ipsum esse nostrum facilis praesentium animi. Pariatur dolorum mollitia nisi placeat impedit cupiditate unde magni consectetur accusantium? Obcaecati a odio est facilis, ab quibusdam reprehenderit aliquid. Dolorum illo assumenda vitae possimus nulla aspernatur eius doloremque quis fuga enim est natus, incidunt mollitia! Assumenda dolorum repudiandae consequuntur explicabo, ipsam quod error. Architecto, nam porro? Sed, deleniti tempora! Distinctio, est? Aliquid voluptas, reprehenderit eligendi impedit, culpa reiciendis error quod nemo quas aspernatur natus eos? Magni, doloribus. Iste libero placeat beatae minus enim totam aperiam minima debitis ipsa fugiat! Numquam voluptates modi accusamus. Quidem sed assumenda unde nesciunt soluta harum omnis accusantium itaque voluptas quod, illo incidunt qui alias cum et laborum voluptatem temporibus labore aperiam accusamus. Possimus, cum? Voluptatibus vitae neque maiores veniam at provident, nostrum beatae! Quisquam velit in deserunt nisi, reprehenderit tempora earum dignissimos rerum quia ipsa doloremque voluptas odit ad, aliquam ab aspernatur aliquid facere. Rerum delectus exercitationem facilis ipsam dolorem ut saepe, voluptatibus necessitatibus ab deserunt quas ducimus? Numquam architecto, reiciendis doloremque aperiam temporibus accusamus, quis rerum voluptas quia error, nemo eveniet? Quos, fuga! Error ab cumque delectus, beatae rem quisquam. Fugiat voluptas ad asperiores eius possimus cumque perferendis aperiam iste expedita sequi similique voluptatibus tempore consequuntur praesentium in, laborum amet! Quae, neque libero. Repellat repudiandae eveniet voluptas accusamus eius non nulla molestias sapiente consequatur laborum maiores nihil asperiores enim blanditiis necessitatibus amet, ratione hic autem ab, quod ipsa? Ab, reprehenderit delectus. Totam, in. Officia, quas. Ab reprehenderit reiciendis esse. Possimus in, officiis iusto, impedit ut architecto eveniet itaque odit, placeat ipsa facere excepturi nesciunt laborum magni quas consequatur sint! Quam recusandae dicta perspiciatis? Quisquam magnam nihil eum error et ab quam odio adipisci blanditiis? Culpa at, dicta iste alias temporibus rem velit obcaecati vitae porro officia eligendi corrupti enim aut molestias nam ipsa. Exercitationem, molestiae aperiam harum sequi ab iure, eveniet odit reiciendis voluptatem in repellendus officia eaque perspiciatis! In quaerat dolor molestiae eveniet debitis! Repudiandae dignissimos tempora, quod ex rerum pariatur? Eius. Architecto facilis deleniti tempora, aperiam voluptatem consectetur reprehenderit iusto, voluptatibus perferendis voluptas, minus perspiciatis earum blanditiis? Cumque adipisci enim minus rerum laboriosam distinctio eligendi quo, harum sit reprehenderit assumenda sint. Voluptate tempora beatae eius, laudantium repellat vitae ullam ut sint corporis eos maiores quos expedita. Doloribus, adipisci. Labore, reiciendis nesciunt error dignissimos id voluptatem qui eveniet eius quis temporibus non! In facere illum, officiis voluptas maiores aperiam. Esse aut natus, debitis ab eum temporibus nostrum dignissimos, doloribus repellendus impedit accusamus, incidunt ducimus cumque expedita blanditiis laborum reiciendis corrupti. Assumenda, rem! Dicta incidunt commodi deserunt cum non ducimus laboriosam cumque! Maiores, quaerat. Illum enim inventore laborum recusandae id fugit, facilis atque eius aut minus voluptates ad, obcaecati a eum expedita aperiam! Quidem amet, ipsa minima officiis explicabo, cumque voluptas nam sed inventore similique iusto doloribus veniam ratione, eum optio deserunt? Placeat magni laborum inventore a reiciendis non minus! Ut, aliquid veritatis. Sint reiciendis illum qui, tenetur maiores voluptas magnam esse quaerat nobis similique fugiat earum sit quod eveniet ad rem, est voluptatum. Obcaecati iure omnis modi repudiandae saepe, assumenda vel soluta. Aperiam blanditiis dolorum rerum! Eius quaerat tempore sunt harum officiis laboriosam ipsam cum amet a natus. Odit natus, cupiditate repudiandae architecto ratione enim harum omnis doloribus. Sit doloremque mollitia vitae. Id magnam consectetur, laudantium, fugiat velit amet animi et, maxime tempore voluptatum placeat! Sequi tempore, labore natus placeat dicta assumenda fuga asperiores, voluptas mollitia libero earum quisquam reprehenderit praesentium. Eaque. Iusto dignissimos aliquid ipsam dolorum praesentium, magnam magni cupiditate dolorem blanditiis vel accusamus fuga porro, sunt odio aperiam voluptas totam laudantium. Laudantium consequatur ea vel aperiam quos numquam voluptate voluptatem! Eum voluptate sint cupiditate consequuntur veniam in animi quam ipsa doloremque error rem, nobis ipsum maiores magni unde neque veritatis iusto iure? Illo, porro voluptatem aperiam reiciendis aliquam sit non. Voluptatum odio adipisci neque cum aspernatur optio soluta veritatis amet, laudantium sint culpa aut assumenda est tempore reprehenderit vel error voluptate quis ex molestiae at dolorum eveniet. Molestias, fugit ratione. Laudantium repudiandae, debitis cupiditate nihil fugit, ratione praesentium quia illum alias vero, neque saepe molestiae id similique veritatis? Mollitia deleniti nihil ullam vero sapiente a quod deserunt, cum velit unde. Doloribus voluptates, ad esse assumenda numquam quae iure repudiandae, soluta rem, animi vero rerum? At facere ab repudiandae vel, reiciendis facilis alias laboriosam fuga necessitatibus. Aliquam error consequuntur enim sequi! Aperiam deserunt nisi odio excepturi obcaecati sint possimus, saepe quis numquam hic, sequi at nesciunt unde quisquam iusto, consequuntur inventore? Doloremque dolor cupiditate recusandae alias veniam facilis amet, hic quidem. Alias facilis ipsum illum iste quibusdam dolorum cumque, id, error accusantium quaerat eaque impedit, adipisci quas mollitia maxime et hic molestiae animi. Quas, quae officia ex est exercitationem modi explicabo. Omnis, cumque obcaecati incidunt blanditiis suscipit quo necessitatibus laborum autem ipsa in est eos nobis iusto illum. Quam voluptates animi quidem iure inventore ratione quasi, rerum ipsum iste. Eos, dignissimos. Corrupti tempora expedita perferendis asperiores sapiente omnis? Hic, sequi? Exercitationem, eaque pariatur maiores temporibus sed saepe, quisquam voluptates et quam molestiae possimus soluta quis dignissimos ratione iure consequatur deleniti veniam. Rem deleniti excepturi a exercitationem, autem, ullam unde, reprehenderit obcaecati nulla saepe veniam ducimus labore! Exercitationem sunt asperiores molestiae, accusamus, ab voluptatem nostrum libero minima nesciunt mollitia fugiat. Excepturi, eaque. Accusamus expedita enim laudantium nam! Laudantium rerum, asperiores illo quisquam vero optio fugit harum sapiente nihil placeat fugiat ullam repellendus quos eius, maiores est vitae pariatur culpa nulla ad at! Iste eaque a qui optio eligendi excepturi, dolore veritatis voluptate ab. Sed, tempore assumenda dolorum velit eligendi officiis deleniti rem esse facere nisi explicabo, sit delectus inventore culpa, iure deserunt. Quam ea pariatur odio soluta possimus dicta dolorum reiciendis. Facilis dolorem distinctio iusto tempore autem id eos quam similique dolores minus. Magnam vitae neque veritatis maxime? Quas facere blanditiis dolor! Accusamus rerum delectus voluptates illum architecto nostrum nesciunt vel iusto, reiciendis ratione sapiente laborum nulla animi esse voluptate et dolor ducimus quibusdam autem quos! Distinctio in at aut neque rem. Accusamus, blanditiis odit! Molestias, voluptate debitis vel laborum temporibus provident officiis perspiciatis doloribus aspernatur voluptas quod quibusdam illo a modi aperiam excepturi, nihil voluptatibus, alias eos! Soluta fugit eligendi repellat! Odio, velit totam ipsa aut magni dolorem voluptas error dignissimos repellat aliquam suscipit quaerat nisi optio dolor sunt. Ullam qui sunt quisquam! Odit necessitatibus asperiores enim qui! Animi, repudiandae quasi. Suscipit eligendi cumque iste expedita, reiciendis ullam praesentium aliquam dicta laborum ducimus facilis alias? Obcaecati nisi reprehenderit eius magnam harum, officiis magni soluta incidunt consectetur voluptatem dolor nulla, odio iure. Sapiente doloremque quas molestias, rerum repellat dolores unde, sed saepe, perspiciatis tenetur illo. Itaque qui soluta nulla. Molestias atque ex voluptate omnis, similique, facere beatae obcaecati consequatur sapiente odio dolore. Totam hic porro quis autem explicabo placeat facilis, aut repellat dignissimos mollitia quam ex sed sequi cum suscipit quos ea. Adipisci consequuntur maxime sint tenetur similique in at, quas facilis! Eius eum similique nemo non quas a tempora esse labore iure quidem? Sapiente ipsa quos qui atque sint. Dolore tempora culpa similique quod porro! Nulla maiores illo pariatur vel tempora. Eveniet ab obcaecati rerum dolor debitis iste ratione corrupti, error, unde quasi sequi consequuntur ea dolores culpa qui autem quis facilis nulla. Beatae modi unde atque laudantium at tenetur quidem! Dolorem sequi laboriosam odit natus dolore, dicta suscipit ab ex quaerat, numquam, accusantium tempora molestias et! Temporibus minima exercitationem numquam tenetur officiis eius libero tempore adipisci non, quam dicta unde. Architecto minima eum incidunt nemo, quia magni earum cupiditate doloribus deleniti eos distinctio ipsam repellat sit voluptatum quisquam asperiores quam est deserunt, dicta alias laborum error fugiat? Quis, deserunt dolore. Rem a alias vel minus tempore nobis laudantium corporis nam repellat, aspernatur sequi! Culpa nulla voluptatibus, error tempore animi reiciendis, doloribus delectus repellendus at vel minima, quae quas veritatis sint. Placeat eos ad corporis, mollitia recusandae cupiditate reprehenderit aperiam neque illum esse dolore possimus. Itaque natus exercitationem error maxime, distinctio tempore quae necessitatibus minus laudantium atque, repudiandae voluptatum temporibus? Delectus. Illum corrupti officiis magnam, libero quod repellat amet ex soluta atque sequi veniam odio, consectetur consequatur nemo eveniet cupiditate voluptatem quidem molestiae error? Dolor, nesciunt magnam ut asperiores doloribus maiores!" }); }; } }, i = {};
    function o(e) { var t = i[e]; if (void 0 !== t)
        return t.exports; var n = i[e] = { exports: {} }; return a[e](n, n.exports, o), n.exports; }
    o.m = a, t = Object.getPrototypeOf ? function (e) { return Object.getPrototypeOf(e); } : function (e) { return e.__proto__; }, o.t = function (n, r) { if (1 & r && (n = this(n)), 8 & r)
        return n; if ("object" == typeof n && n) {
        if (4 & r && n.__esModule)
            return n;
        if (16 & r && "function" == typeof n.then)
            return n;
    } var a = Object.create(null); o.r(a); var i = {}; e = e || [null, t({}), t([]), t(t)]; for (var l = 2 & r && n; "object" == typeof l && !~e.indexOf(l); l = t(l))
        Object.getOwnPropertyNames(l).forEach((function (e) { return i[e] = function () { return n[e]; }; })); return i.default = function () { return n; }, o.d(a, i), a; }, o.d = function (e, t) { for (var n in t)
        o.o(t, n) && !o.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] }); }, o.f = {}, o.e = function (e) { return Promise.all(Object.keys(o.f).reduce((function (t, n) { return (o.f[n](e, t), t); }), [])); }, o.u = function (e) { return e + ".cda19c124123bf747fb8.js"; }, o.miniCssF = function (e) { }, o.g = function () { if ("object" == typeof globalThis)
        return globalThis; try {
        return this || new Function("return this")();
    }
    catch (e) {
        if ("object" == typeof window)
            return window;
    } }(), o.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t); }, n = {}, r = "webpacktrainingprojectulbi:", o.l = function (e, t, a, i) { if (n[e])
        n[e].push(t);
    else {
        var l, u;
        if (void 0 !== a)
            for (var s = document.getElementsByTagName("script"), c = 0; c < s.length; c++) {
                var d = s[c];
                if (d.getAttribute("src") == e || d.getAttribute("data-webpack") == r + a) {
                    l = d;
                    break;
                }
            }
        l || (u = !0, (l = document.createElement("script")).charset = "utf-8", l.timeout = 120, o.nc && l.setAttribute("nonce", o.nc), l.setAttribute("data-webpack", r + a), l.src = e), n[e] = [t];
        var f = function (t, r) { l.onerror = l.onload = null, clearTimeout(p); var a = n[e]; if (delete n[e], l.parentNode && l.parentNode.removeChild(l), a && a.forEach((function (e) { return e(r); })), t)
            return t(r); }, p = setTimeout(f.bind(null, void 0, { type: "timeout", target: l }), 12e4);
        l.onerror = f.bind(null, l.onerror), l.onload = f.bind(null, l.onload), u && document.head.appendChild(l);
    } }, o.r = function (e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }); }, (function () { var e; o.g.importScripts && (e = o.g.location + ""); var t = o.g.document; if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var n = t.getElementsByTagName("script");
        if (n.length)
            for (var r = n.length - 1; r > -1 && (!e || !/^http(s?):/.test(e));)
                e = n[r--].src;
    } if (!e)
        throw new Error("Automatic publicPath is not supported in this browser"); e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), o.p = e; })(), (function () { var e = { 792: 0 }; o.f.j = function (t, n) { var r = o.o(e, t) ? e[t] : void 0; if (0 !== r)
        if (r)
            n.push(r[2]);
        else {
            var a = new Promise((function (n, a) { return r = e[t] = [n, a]; }));
            n.push(r[2] = a);
            var i = o.p + o.u(t), l = new Error;
            o.l(i, (function (n) { if (o.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0), r)) {
                var a = n && ("load" === n.type ? "missing" : n.type), i = n && n.target && n.target.src;
                l.message = "Loading chunk " + t + " failed.\n(" + a + ": " + i + ")", l.name = "ChunkLoadError", l.type = a, l.request = i, r[1](l);
            } }), "chunk-" + t, t);
        } }; var t = function (t, n) { var r, a, i = n[0], l = n[1], u = n[2], s = 0; if (i.some((function (t) { return 0 !== e[t]; }))) {
        for (r in l)
            o.o(l, r) && (o.m[r] = l[r]);
        u && u(o);
    } for (t && t(n); s < i.length; s++)
        a = i[s], o.o(e, a) && e[a] && e[a][0](), e[a] = 0; }, n = self.webpackChunkwebpacktrainingprojectulbi = self.webpackChunkwebpacktrainingprojectulbi || []; n.forEach(t.bind(null, 0)), n.push = t.bind(null, n.push.bind(n)); })(), (function () { var e, t = o(848), n = o(338), r = o(540), a = o.t(r, 2); function i() { return i = Object.assign ? Object.assign.bind() : function (e) { for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    } return e; }, i.apply(this, arguments); } !function (e) { e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"; }(e || (e = {})); var l = "popstate"; function u(e, t) { if (!1 === e || null == e)
        throw new Error(t); } function s(e, t) { if (!e) {
        "undefined" != typeof console && console.warn(t);
        try {
            throw new Error(t);
        }
        catch (e) { }
    } } function c(e, t) { return { usr: e.state, key: e.key, idx: t }; } function d(e, t, n, r) { return void 0 === n && (n = null), i({ pathname: "string" == typeof e ? e : e.pathname, search: "", hash: "" }, "string" == typeof t ? p(t) : t, { state: n, key: t && t.key || r || Math.random().toString(36).substr(2, 8) }); } function f(e) { var _b = e.pathname, t = _b === void 0 ? "/" : _b, _c = e.search, n = _c === void 0 ? "" : _c, _d = e.hash, r = _d === void 0 ? "" : _d; return n && "?" !== n && (t += "?" === n.charAt(0) ? n : "?" + n), r && "#" !== r && (t += "#" === r.charAt(0) ? r : "#" + r), t; } function p(e) { var t = {}; if (e) {
        var n_1 = e.indexOf("#");
        n_1 >= 0 && (t.hash = e.substr(n_1), e = e.substr(0, n_1));
        var r_1 = e.indexOf("?");
        r_1 >= 0 && (t.search = e.substr(r_1), e = e.substr(0, r_1)), e && (t.pathname = e);
    } return t; } var m; !function (e) { e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"; }(m || (m = {})); var h = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]); function v(e, t, n, r) { return void 0 === n && (n = []), void 0 === r && (r = {}), e.map((function (e, a) { var o = __spreadArray(__spreadArray([], n, true), [a], false), l = "string" == typeof e.id ? e.id : o.join("-"); if (u(!0 !== e.index || !e.children, "Cannot specify children on an index route"), u(!r[l], 'Found a route id collision on id "' + l + "\".  Route id's must be globally unique within Data Router usages"), function (e) { return !0 === e.index; }(e)) {
        var n_2 = i({}, e, t(e), { id: l });
        return r[l] = n_2, n_2;
    } {
        var n_3 = i({}, e, t(e), { id: l, children: void 0 });
        return r[l] = n_3, e.children && (n_3.children = v(e.children, t, o, r)), n_3;
    } })); } function g(e, t, n) { void 0 === n && (n = "/"); var r = L(("string" == typeof t ? p(t) : t).pathname || "/", n); if (null == r)
        return null; var a = b(e); !function (e) { e.sort((function (e, t) { return e.score !== t.score ? t.score - e.score : function (e, t) { return e.length === t.length && e.slice(0, -1).every((function (e, n) { return e === t[n]; })) ? e[e.length - 1] - t[t.length - 1] : 0; }(e.routesMeta.map((function (e) { return e.childrenIndex; })), t.routesMeta.map((function (e) { return e.childrenIndex; }))); })); }(a); var i = null; for (var e_1 = 0; null == i && e_1 < a.length; ++e_1)
        i = P(a[e_1], D(r)); return i; } function b(e, t, n, r) { void 0 === t && (t = []), void 0 === n && (n = []), void 0 === r && (r = ""); var a = function (e, a, i) { var o = { relativePath: void 0 === i ? e.path || "" : i, caseSensitive: !0 === e.caseSensitive, childrenIndex: a, route: e }; o.relativePath.startsWith("/") && (u(o.relativePath.startsWith(r), 'Absolute route path "' + o.relativePath + '" nested under path "' + r + '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'), o.relativePath = o.relativePath.slice(r.length)); var l = z([r, o.relativePath]), s = n.concat(o); e.children && e.children.length > 0 && (u(!0 !== e.index, 'Index routes must not have child routes. Please remove all child routes from route path "' + l + '".'), b(e.children, t, s, l)), (null != e.path || e.index) && t.push({ path: l, score: _(l, e.index), routesMeta: s }); }; return e.forEach((function (e, t) { var n; if ("" !== e.path && null != (n = e.path) && n.includes("?"))
        for (var _b = 0, _c = y(e.path); _b < _c.length; _b++) {
            var n_4 = _c[_b];
            a(e, t, n_4);
        }
    else
        a(e, t); })), t; } function y(e) { var t = e.split("/"); if (0 === t.length)
        return []; var n = t[0], r = t.slice(1), a = n.endsWith("?"), i = n.replace(/\?$/, ""); if (0 === r.length)
        return a ? [i, ""] : [i]; var o = y(r.join("/")), l = []; return l.push.apply(l, o.map((function (e) { return "" === e ? i : [i, e].join("/"); }))), a && l.push.apply(l, o), l.map((function (t) { return e.startsWith("/") && "" === t ? "/" : t; })); } var w = /^:\w+$/, k = 3, S = 2, x = 1, E = 10, q = -2, C = function (e) { return "*" === e; }; function _(e, t) { var n = e.split("/"), r = n.length; return n.some(C) && (r += q), t && (r += S), n.filter((function (e) { return !C(e); })).reduce((function (e, t) { return e + (w.test(t) ? k : "" === t ? x : E); }), r); } function P(e, t) { var n = e.routesMeta, r = {}, a = "/", i = []; for (var e_2 = 0; e_2 < n.length; ++e_2) {
        var o_1 = n[e_2], l_1 = e_2 === n.length - 1, u_1 = "/" === a ? t : t.slice(a.length) || "/", s_1 = R({ path: o_1.relativePath, caseSensitive: o_1.caseSensitive, end: l_1 }, u_1);
        if (!s_1)
            return null;
        Object.assign(r, s_1.params);
        var c_1 = o_1.route;
        i.push({ params: r, pathname: z([a, s_1.pathname]), pathnameBase: M(z([a, s_1.pathnameBase])), route: c_1 }), "/" !== s_1.pathnameBase && (a = z([a, s_1.pathnameBase]));
    } return i; } function R(e, t) { "string" == typeof e && (e = { path: e, caseSensitive: !1, end: !0 }); var _b = function (e, t, n) { void 0 === t && (t = !1), void 0 === n && (n = !0), s("*" === e || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were "' + e.replace(/\*$/, "/*") + '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' + e.replace(/\*$/, "/*") + '".'); var r = [], a = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/\/:(\w+)/g, (function (e, t) { return (r.push(t), "/([^\\/]+)"); })); return e.endsWith("*") ? (r.push("*"), a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? a += "\\/*$" : "" !== e && "/" !== e && (a += "(?:(?=\\/|$))"), [new RegExp(a, t ? void 0 : "i"), r]; }(e.path, e.caseSensitive, e.end), n = _b[0], r = _b[1], a = t.match(n); if (!a)
        return null; var i = a[0], o = i.replace(/(.)\/+$/, "$1"), l = a.slice(1); return { params: r.reduce((function (e, t, n) { if ("*" === t) {
            var e_3 = l[n] || "";
            o = i.slice(0, i.length - e_3.length).replace(/(.)\/+$/, "$1");
        } return e[t] = function (e, t) { try {
            return decodeURIComponent(e);
        }
        catch (n) {
            return s(!1, 'The value for the URL param "' + t + '" will not be decoded because the string "' + e + '" is a malformed URL segment. This is probably due to a bad percent encoding (' + n + ")."), e;
        } }(l[n] || "", t), e; }), {}), pathname: i, pathnameBase: o, pattern: e }; } function D(e) { try {
        return decodeURI(e);
    }
    catch (t) {
        return s(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' + t + ")."), e;
    } } function L(e, t) { if ("/" === t)
        return e; if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null; var n = t.endsWith("/") ? t.length - 1 : t.length, r = e.charAt(n); return r && "/" !== r ? null : e.slice(n) || "/"; } function N(e, t, n, r) { return "Cannot include a '" + e + "' character in a manually specified `to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the `to." + n + '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'; } function T(e) { return e.filter((function (e, t) { return 0 === t || e.route.path && e.route.path.length > 0; })); } var z = function (e) { return e.join("/").replace(/\/\/+/g, "/"); }, M = function (e) { return e.replace(/\/+$/, "").replace(/^\/*/, "/"); }, O = function (e) { return e && "?" !== e ? e.startsWith("?") ? e : "?" + e : ""; }, F = function (e) { return e && "#" !== e ? e.startsWith("#") ? e : "#" + e : ""; }; Error;
        var I = /** @class */ (function () {
            function I(e, t, n, r) {
                void 0 === r && (r = !1), this.status = e, this.statusText = t || "", this.internal = r, n instanceof Error ? (this.data = n.toString(), this.error = n) : this.data = n;
            }
            return I;
        }()); function U(e) { return null != e && "number" == typeof e.status && "string" == typeof e.statusText && "boolean" == typeof e.internal && "data" in e; } var A = ["post", "put", "patch", "delete"], j = new Set(A), B = __spreadArray(["get"], A, true), $ = new Set(B), V = new Set([301, 302, 303, 307, 308]), Q = new Set([307, 308]), H = { state: "idle", location: void 0, formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0 }, W = { state: "idle", data: void 0, formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0 }, K = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 }, Y = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, X = function (e) { return ({ hasErrorBoundary: Boolean(e.hasErrorBoundary) }); }; function G(e, t, n, r, a, o, l) { var s, c; if (null != o && "path" !== l) {
        s = [];
        for (var _b = 0, t_1 = t; _b < t_1.length; _b++) {
            var e_4 = t_1[_b];
            if (s.push(e_4), e_4.route.id === o) {
                c = e_4;
                break;
            }
        }
    }
    else
        s = t, c = t[t.length - 1]; var d = function (e, t, n, r) { var a; void 0 === r && (r = !1), "string" == typeof e ? a = p(e) : (a = i({}, e), u(!a.pathname || !a.pathname.includes("?"), N("?", "pathname", "search", a)), u(!a.pathname || !a.pathname.includes("#"), N("#", "pathname", "hash", a)), u(!a.search || !a.search.includes("#"), N("#", "search", "hash", a))); var o, l = "" === e || "" === a.pathname, s = l ? "/" : a.pathname; if (r || null == s)
        o = n;
    else {
        var e_5 = t.length - 1;
        if (s.startsWith("..")) {
            var t_2 = s.split("/");
            for (; ".." === t_2[0];)
                t_2.shift(), e_5 -= 1;
            a.pathname = t_2.join("/");
        }
        o = e_5 >= 0 ? t[e_5] : "/";
    } var c = function (e, t) { void 0 === t && (t = "/"); var _b = "string" == typeof e ? p(e) : e, n = _b.pathname, _c = _b.search, r = _c === void 0 ? "" : _c, _d = _b.hash, a = _d === void 0 ? "" : _d, i = n ? n.startsWith("/") ? n : function (e, t) { var n = t.replace(/\/+$/, "").split("/"); return e.split("/").forEach((function (e) { ".." === e ? n.length > 1 && n.pop() : "." !== e && n.push(e); })), n.length > 1 ? n.join("/") : "/"; }(n, t) : t; return { pathname: i, search: O(r), hash: F(a) }; }(a, o), d = s && "/" !== s && s.endsWith("/"), f = (l || "." === s) && n.endsWith("/"); return c.pathname.endsWith("/") || !d && !f || (c.pathname += "/"), c; }(a || ".", T(s).map((function (e) { return e.pathnameBase; })), L(e.pathname, n) || e.pathname, "path" === l); return null == a && (d.search = e.search, d.hash = e.hash), null != a && "" !== a && "." !== a || !c || !c.route.index || we(d.search) || (d.search = d.search ? d.search.replace(/^\?/, "?index&") : "?index"), r && "/" !== n && (d.pathname = "/" === d.pathname ? n : z([n, d.pathname])), f(d); } function J(e, t, n, r) { if (!r || !function (e) { return null != e && ("formData" in e && null != e.formData || "body" in e && void 0 !== e.body); }(r))
        return { path: n }; if (r.formMethod && (a = r.formMethod, !$.has(a.toLowerCase())))
        return { path: n, error: de(405, { method: r.formMethod }) }; var a; var i, o, l = function () { return ({ path: n, error: de(400, { type: "invalid-body" }) }); }, s = r.formMethod || "get", c = e ? s.toUpperCase() : s.toLowerCase(), d = pe(n); if (void 0 !== r.body) {
        if ("text/plain" === r.formEncType) {
            if (!ge(c))
                return l();
            var e_6 = "string" == typeof r.body ? r.body : r.body instanceof FormData || r.body instanceof URLSearchParams ? Array.from(r.body.entries()).reduce((function (e, t) { var n = t[0], r = t[1]; return "" + e + n + "=" + r + "\n"; }), "") : String(r.body);
            return { path: n, submission: { formMethod: c, formAction: d, formEncType: r.formEncType, formData: void 0, json: void 0, text: e_6 } };
        }
        if ("application/json" === r.formEncType) {
            if (!ge(c))
                return l();
            try {
                var e_7 = "string" == typeof r.body ? JSON.parse(r.body) : r.body;
                return { path: n, submission: { formMethod: c, formAction: d, formEncType: r.formEncType, formData: void 0, json: e_7, text: void 0 } };
            }
            catch (e) {
                return l();
            }
        }
    } if (u("function" == typeof FormData, "FormData is not available in this environment"), r.formData)
        i = ie(r.formData), o = r.formData;
    else if (r.body instanceof FormData)
        i = ie(r.body), o = r.body;
    else if (r.body instanceof URLSearchParams)
        i = r.body, o = oe(i);
    else if (null == r.body)
        i = new URLSearchParams, o = new FormData;
    else
        try {
            i = new URLSearchParams(r.body), o = oe(i);
        }
        catch (e) {
            return l();
        } var m = { formMethod: c, formAction: d, formEncType: r && r.formEncType || "application/x-www-form-urlencoded", formData: o, json: void 0, text: void 0 }; if (ge(m.formMethod))
        return { path: n, submission: m }; var h = p(n); return t && h.search && we(h.search) && i.append("index", ""), h.search = "?" + i, { path: f(h), submission: m }; } function Z(e, t, n, r, a, o, l, u, s, c, d, f, p, m) { var h = m ? Object.values(m)[0] : p ? Object.values(p)[0] : void 0, v = e.createURL(t.location), b = e.createURL(a), y = m ? Object.keys(m)[0] : void 0, w = function (e, t) { var n = e; if (t) {
        var r_2 = e.findIndex((function (e) { return e.route.id === t; }));
        r_2 >= 0 && (n = e.slice(0, r_2));
    } return n; }(n, y).filter((function (e, n) { if (e.route.lazy)
        return !0; if (null == e.route.loader)
        return !1; if (function (e, t, n) { var r = !t || n.route.id !== t.route.id, a = void 0 === e[n.route.id]; return r || a; }(t.loaderData, t.matches[n], e) || l.some((function (t) { return t === e.route.id; })))
        return !0; var a = t.matches[n], u = e; return te(e, i({ currentUrl: v, currentParams: a.params, nextUrl: b, nextParams: u.params }, r, { actionResult: h, defaultShouldRevalidate: o || v.pathname + v.search === b.pathname + b.search || v.search !== b.search || ee(a, u) })); })), k = []; return s.forEach((function (e, a) { if (!n.some((function (t) { return t.route.id === e.routeId; })))
        return; var l = g(d, e.path, f); if (!l)
        return void k.push({ key: a, routeId: e.routeId, path: e.path, matches: null, match: null, controller: null }); var s = t.fetchers.get(a), p = ke(l, e.path), m = !1; m = !c.has(a) && (!!u.includes(a) || (s && "idle" !== s.state && void 0 === s.data ? o : te(p, i({ currentUrl: v, currentParams: t.matches[t.matches.length - 1].params, nextUrl: b, nextParams: n[n.length - 1].params }, r, { actionResult: h, defaultShouldRevalidate: o })))), m && k.push({ key: a, routeId: e.routeId, path: e.path, matches: l, match: p, controller: new AbortController }); })), [w, k]; } function ee(e, t) { var n = e.route.path; return e.pathname !== t.pathname || null != n && n.endsWith("*") && e.params["*"] !== t.params["*"]; } function te(e, t) { if (e.route.shouldRevalidate) {
        var n_5 = e.route.shouldRevalidate(t);
        if ("boolean" == typeof n_5)
            return n_5;
    } return t.defaultShouldRevalidate; } function ne(e, t, n) {
        return __awaiter(this, void 0, void 0, function () { var r, a, o, e_8, t_3; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!e.lazy)
                        return [2 /*return*/];
                    return [4 /*yield*/, e.lazy()];
                case 1:
                    r = _b.sent();
                    if (!e.lazy)
                        return [2 /*return*/];
                    a = n[e.id];
                    u(a, "No route found in manifest");
                    o = {};
                    for (e_8 in r) {
                        t_3 = void 0 !== a[e_8] && "hasErrorBoundary" !== e_8;
                        s(!t_3, 'Route "' + a.id + '" has a static property "' + e_8 + '" defined but its lazy function is also returning a value for this property. The lazy route property "' + e_8 + '" will be ignored.'), t_3 || h.has(e_8) || (o[e_8] = r[e_8]);
                    }
                    Object.assign(a, o), Object.assign(a, i({}, t(a), { lazy: void 0 }));
                    return [2 /*return*/];
            }
        }); });
    } function re(e, t, n, r, a, i, o, l) {
        return __awaiter(this, void 0, void 0, function () { var s, c, d, f, r_3, e_10, t_4, e_11, r_4, e_12, e_9, e_13, a_1, e_14, n_6, r_5, a_2, i_1, _b, p, h, v; return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    void 0 === l && (l = {});
                    f = function (e) { var r, a = new Promise((function (e, t) { return r = t; })); return d = function () { return r(); }, t.signal.addEventListener("abort", d), Promise.race([e({ request: t, params: n.params, context: l.requestContext }), a]); };
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 10, 11, 12]);
                    r_3 = n.route[e];
                    if (!n.route.lazy) return [3 /*break*/, 7];
                    if (!r_3) return [3 /*break*/, 3];
                    return [4 /*yield*/, Promise.all([f(r_3).catch((function (t) { e_10 = t; })), ne(n.route, i, a)])];
                case 2:
                    t_4 = _c.sent();
                    if (e_10)
                        throw e_10;
                    c = t_4[0];
                    return [3 /*break*/, 6];
                case 3: return [4 /*yield*/, ne(n.route, i, a)];
                case 4:
                    if (_c.sent(), r_3 = n.route[e], !r_3) {
                        if ("action" === e) {
                            e_11 = new URL(t.url), r_4 = e_11.pathname + e_11.search;
                            throw de(405, { method: t.method, pathname: r_4, routeId: n.route.id });
                        }
                        return [2 /*return*/, { type: m.data, data: void 0 }];
                    }
                    return [4 /*yield*/, f(r_3)];
                case 5:
                    c = _c.sent();
                    _c.label = 6;
                case 6: return [3 /*break*/, 9];
                case 7:
                    if (!r_3) {
                        e_12 = new URL(t.url);
                        throw de(404, { pathname: e_12.pathname + e_12.search });
                    }
                    return [4 /*yield*/, f(r_3)];
                case 8:
                    c = _c.sent();
                    _c.label = 9;
                case 9:
                    u(void 0 !== c, "You defined " + ("action" === e ? "an action" : "a loader") + ' for route "' + n.route.id + "\" but didn't return anything from your `" + e + "` function. Please return a value or `null`.");
                    return [3 /*break*/, 12];
                case 10:
                    e_9 = _c.sent();
                    s = m.error, c = e_9;
                    return [3 /*break*/, 12];
                case 11:
                    d && t.signal.removeEventListener("abort", d);
                    return [7 /*endfinally*/];
                case 12:
                    if (!(null != (p = c) && "number" == typeof p.status && "string" == typeof p.statusText && "object" == typeof p.headers && void 0 !== p.body)) return [3 /*break*/, 17];
                    a_1 = c.status;
                    if (V.has(a_1)) {
                        e_14 = c.headers.get("Location");
                        if (u(e_14, "Redirects returned/thrown from loaders/actions must have a Location header"), Y.test(e_14)) {
                            if (!l.isStaticRequest) {
                                n_6 = new URL(t.url), r_5 = e_14.startsWith("//") ? new URL(n_6.protocol + e_14) : new URL(e_14), a_2 = null != L(r_5.pathname, o);
                                r_5.origin === n_6.origin && a_2 && (e_14 = r_5.pathname + r_5.search + r_5.hash);
                            }
                        }
                        else
                            e_14 = G(new URL(t.url), r.slice(0, r.indexOf(n) + 1), o, !0, e_14);
                        if (l.isStaticRequest)
                            throw c.headers.set("Location", e_14), c;
                        return [2 /*return*/, { type: m.redirect, status: a_1, location: e_14, revalidate: null !== c.headers.get("X-Remix-Revalidate"), reloadDocument: null !== c.headers.get("X-Remix-Reload-Document") }];
                    }
                    if (l.isRouteRequest)
                        throw { type: s === m.error ? m.error : m.data, response: c };
                    i_1 = c.headers.get("Content-Type");
                    if (!(i_1 && /\bapplication\/json\b/.test(i_1))) return [3 /*break*/, 14];
                    return [4 /*yield*/, c.json()];
                case 13:
                    _b = _c.sent();
                    return [3 /*break*/, 16];
                case 14: return [4 /*yield*/, c.text()];
                case 15:
                    _b = _c.sent();
                    _c.label = 16;
                case 16: return [2 /*return*/, (e_13 = _b, s === m.error ? { type: s, error: new I(a_1, c.statusText, e_13), headers: c.headers } : { type: m.data, data: e_13, statusCode: c.status, headers: c.headers })];
                case 17: return [2 /*return*/, s === m.error ? { type: s, error: c } : function (e) { var t = e; return t && "object" == typeof t && "object" == typeof t.data && "function" == typeof t.subscribe && "function" == typeof t.cancel && "function" == typeof t.resolveData; }(c) ? { type: m.deferred, deferredData: c, statusCode: null == (h = c.init) ? void 0 : h.status, headers: (null == (v = c.init) ? void 0 : v.headers) && new Headers(c.init.headers) } : { type: m.data, data: c }];
            }
        }); });
    } function ae(e, t, n, r) { var a = e.createURL(pe(t)).toString(), i = { signal: n }; if (r && ge(r.formMethod)) {
        var e_15 = r.formMethod, t_5 = r.formEncType;
        i.method = e_15.toUpperCase(), "application/json" === t_5 ? (i.headers = new Headers({ "Content-Type": t_5 }), i.body = JSON.stringify(r.json)) : "text/plain" === t_5 ? i.body = r.text : "application/x-www-form-urlencoded" === t_5 && r.formData ? i.body = ie(r.formData) : i.body = r.formData;
    } return new Request(a, i); } function ie(e) { var t = new URLSearchParams; for (var _b = 0, _c = e.entries(); _b < _c.length; _b++) {
        var _d = _c[_b], n_7 = _d[0], r_6 = _d[1];
        t.append(n_7, "string" == typeof r_6 ? r_6 : r_6.name);
    } return t; } function oe(e) { var t = new FormData; for (var _b = 0, _c = e.entries(); _b < _c.length; _b++) {
        var _d = _c[_b], n_8 = _d[0], r_7 = _d[1];
        t.append(n_8, r_7);
    } return t; } function le(e, t, n, r, a, o, l, s) {
        var _b;
        var _c = function (e, t, n, r, a) { var i, o = {}, l = null, s = !1, c = {}; return n.forEach((function (n, d) { var f = t[d].route.id; if (u(!ve(n), "Cannot handle redirect results in processLoaderData"), he(n)) {
            var t_6 = se(e, f), a_3 = n.error;
            r && (a_3 = Object.values(r)[0], r = void 0), l = l || {}, null == l[t_6.route.id] && (l[t_6.route.id] = a_3), o[f] = void 0, s || (s = !0, i = U(n.error) ? n.error.status : 500), n.headers && (c[f] = n.headers);
        }
        else
            me(n) ? (a.set(f, n.deferredData), o[f] = n.deferredData.data) : o[f] = n.data, null == n.statusCode || 200 === n.statusCode || s || (i = n.statusCode), n.headers && (c[f] = n.headers); })), r && (l = r, o[Object.keys(r)[0]] = void 0), { loaderData: o, errors: l, statusCode: i || 200, loaderHeaders: c }; }(t, n, r, a, s), c = _c.loaderData, d = _c.errors;
        for (var t_7 = 0; t_7 < o.length; t_7++) {
            var _d = o[t_7], n_9 = _d.key, r_8 = _d.match, a_4 = _d.controller;
            u(void 0 !== l && void 0 !== l[t_7], "Did not find corresponding fetcher result");
            var s_2 = l[t_7];
            if (!a_4 || !a_4.signal.aborted)
                if (he(s_2)) {
                    var t_8 = se(e.matches, null == r_8 ? void 0 : r_8.route.id);
                    d && d[t_8.route.id] || (d = i({}, d, (_b = {}, _b[t_8.route.id] = s_2.error, _b))), e.fetchers.delete(n_9);
                }
                else if (ve(s_2))
                    u(!1, "Unhandled fetcher revalidation redirect");
                else if (me(s_2))
                    u(!1, "Unhandled fetcher deferred data");
                else {
                    var t_9 = qe(s_2.data);
                    e.fetchers.set(n_9, t_9);
                }
        }
        return { loaderData: c, errors: d };
    } function ue(e, t, n, r) { var a = i({}, t); for (var _b = 0, n_10 = n; _b < n_10.length; _b++) {
        var i_2 = n_10[_b];
        var n_11 = i_2.route.id;
        if (t.hasOwnProperty(n_11) ? void 0 !== t[n_11] && (a[n_11] = t[n_11]) : void 0 !== e[n_11] && i_2.route.loader && (a[n_11] = e[n_11]), r && r.hasOwnProperty(n_11))
            break;
    } return a; } function se(e, t) { return (t ? e.slice(0, e.findIndex((function (e) { return e.route.id === t; })) + 1) : __spreadArray([], e, true)).reverse().find((function (e) { return !0 === e.route.hasErrorBoundary; })) || e[0]; } function ce(e) { var t = e.find((function (e) { return e.index || !e.path || "/" === e.path; })) || { id: "__shim-error-route__" }; return { matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }], route: t }; } function de(e, t) { var _b = void 0 === t ? {} : t, n = _b.pathname, r = _b.routeId, a = _b.method, i = _b.type, o = "Unknown Server Error", l = "Unknown @remix-run/router error"; return 400 === e ? (o = "Bad Request", a && n && r ? l = "You made a " + a + ' request to "' + n + '" but did not provide a `loader` for route "' + r + '", so there is no way to handle the request.' : "defer-action" === i ? l = "defer() is not supported in actions" : "invalid-body" === i && (l = "Unable to encode submission body")) : 403 === e ? (o = "Forbidden", l = 'Route "' + r + '" does not match URL "' + n + '"') : 404 === e ? (o = "Not Found", l = 'No route matches URL "' + n + '"') : 405 === e && (o = "Method Not Allowed", a && n && r ? l = "You made a " + a.toUpperCase() + ' request to "' + n + '" but did not provide an `action` for route "' + r + '", so there is no way to handle the request.' : a && (l = 'Invalid request method "' + a.toUpperCase() + '"')), new I(e || 500, o, new Error(l), !0); } function fe(e) { for (var t_10 = e.length - 1; t_10 >= 0; t_10--) {
        var n_12 = e[t_10];
        if (ve(n_12))
            return { result: n_12, idx: t_10 };
    } } function pe(e) { return f(i({}, "string" == typeof e ? p(e) : e, { hash: "" })); } function me(e) { return e.type === m.deferred; } function he(e) { return e.type === m.error; } function ve(e) { return (e && e.type) === m.redirect; } function ge(e) { return j.has(e.toLowerCase()); } function be(e, t, n, r, a, i) {
        return __awaiter(this, void 0, void 0, function () { var _loop_1, o_2; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _loop_1 = function (o_2) {
                        var l_2, s_3, c_2, d_1, e_16;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    l_2 = n[o_2], s_3 = t[o_2];
                                    if (!s_3)
                                        return [2 /*return*/, "continue"];
                                    c_2 = e.find((function (e) { return e.route.id === s_3.route.id; })), d_1 = null != c_2 && !ee(c_2, s_3) && void 0 !== (i && i[s_3.route.id]);
                                    if (!(me(l_2) && (a || d_1))) return [3 /*break*/, 2];
                                    e_16 = r[o_2];
                                    u(e_16, "Expected an AbortSignal for revalidating fetcher deferred result");
                                    return [4 /*yield*/, ye(l_2, e_16, a).then((function (e) { e && (n[o_2] = e || n[o_2]); }))];
                                case 1:
                                    _c.sent();
                                    _c.label = 2;
                                case 2: return [2 /*return*/];
                            }
                        });
                    };
                    o_2 = 0;
                    _b.label = 1;
                case 1:
                    if (!(o_2 < n.length)) return [3 /*break*/, 4];
                    return [5 /*yield**/, _loop_1(o_2)];
                case 2:
                    _b.sent();
                    _b.label = 3;
                case 3:
                    o_2++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        }); });
    } function ye(e, t, n) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    void 0 === n && (n = !1);
                    return [4 /*yield*/, e.deferredData.resolveData(t)];
                case 1:
                    if (!(_b.sent())) {
                        if (n)
                            try {
                                return [2 /*return*/, { type: m.data, data: e.deferredData.unwrappedData }];
                            }
                            catch (e) {
                                return [2 /*return*/, { type: m.error, error: e }];
                            }
                        return [2 /*return*/, { type: m.data, data: e.deferredData.data }];
                    }
                    return [2 /*return*/];
            }
        }); });
    } function we(e) { return new URLSearchParams(e).getAll("index").some((function (e) { return "" === e; })); } function ke(e, t) { var n = "string" == typeof t ? p(t).search : t.search; if (e[e.length - 1].route.index && we(n || ""))
        return e[e.length - 1]; var r = T(e); return r[r.length - 1]; } function Se(e) { var t = e.formMethod, n = e.formAction, r = e.formEncType, a = e.text, i = e.formData, o = e.json; if (t && n && r)
        return null != a ? { formMethod: t, formAction: n, formEncType: r, formData: void 0, json: void 0, text: a } : null != i ? { formMethod: t, formAction: n, formEncType: r, formData: i, json: void 0, text: void 0 } : void 0 !== o ? { formMethod: t, formAction: n, formEncType: r, formData: void 0, json: o, text: void 0 } : void 0; } function xe(e, t) { return t ? { state: "loading", location: e, formMethod: t.formMethod, formAction: t.formAction, formEncType: t.formEncType, formData: t.formData, json: t.json, text: t.text } : { state: "loading", location: e, formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0 }; } function Ee(e, t) { return e ? { state: "loading", formMethod: e.formMethod, formAction: e.formAction, formEncType: e.formEncType, formData: e.formData, json: e.json, text: e.text, data: t } : { state: "loading", formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0, data: t }; } function qe(e) { return { state: "idle", formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0, data: e }; } function Ce() { return Ce = Object.assign ? Object.assign.bind() : function (e) { for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    } return e; }, Ce.apply(this, arguments); } Symbol("deferred"); var _e = r.createContext(null), Pe = r.createContext(null), Re = r.createContext(null), De = r.createContext(null), Le = r.createContext({ outlet: null, matches: [], isDataRoute: !1 }), Ne = r.createContext(null); function Te() { return null != r.useContext(De); } function ze(t, n, a) { Te() || u(!1); var i = r.useContext(Re).navigator, o = r.useContext(Le).matches, l = o[o.length - 1], s = l ? l.params : {}, c = (l && l.pathname, l ? l.pathnameBase : "/"); l && l.route; var d, f = (Te() || u(!1), r.useContext(De).location); if (n) {
        var m;
        var e_17 = "string" == typeof n ? p(n) : n;
        "/" === c || (null == (m = e_17.pathname) ? void 0 : m.startsWith(c)) || u(!1), d = e_17;
    }
    else
        d = f; var h = d.pathname || "/", v = g(t, { pathname: "/" === c ? h : h.slice(c.length) || "/" }), b = function (e, t, n) { var a; if (void 0 === t && (t = []), void 0 === n && (n = null), null == e) {
        var i;
        if (null == (i = n) || !i.errors)
            return null;
        e = n.matches;
    } var o = e, l = null == (a = n) ? void 0 : a.errors; if (null != l) {
        var e_18 = o.findIndex((function (e) { return e.route.id && (null == l ? void 0 : l[e.route.id]); }));
        e_18 >= 0 || u(!1), o = o.slice(0, Math.min(o.length, e_18 + 1));
    } return o.reduceRight((function (e, a, i) { var u = a.route.id ? null == l ? void 0 : l[a.route.id] : null, s = null; n && (s = a.route.errorElement || Oe); var c = t.concat(o.slice(0, i + 1)), d = function () { var t; return t = u ? s : a.route.Component ? r.createElement(a.route.Component, null) : a.route.element ? a.route.element : e, r.createElement(Ie, { match: a, routeContext: { outlet: e, matches: c, isDataRoute: null != n }, children: t }); }; return n && (a.route.ErrorBoundary || a.route.errorElement || 0 === i) ? r.createElement(Fe, { location: n.location, revalidation: n.revalidation, component: s, error: u, children: d(), routeContext: { outlet: null, matches: c, isDataRoute: !0 } }) : d(); }), null); }(v && v.map((function (e) { return Object.assign({}, e, { params: Object.assign({}, s, e.params), pathname: z([c, i.encodeLocation ? i.encodeLocation(e.pathname).pathname : e.pathname]), pathnameBase: "/" === e.pathnameBase ? c : z([c, i.encodeLocation ? i.encodeLocation(e.pathnameBase).pathname : e.pathnameBase]) }); })), o, a); return n && b ? r.createElement(De.Provider, { value: { location: Ce({ pathname: "/", search: "", hash: "", state: null, key: "default" }, d), navigationType: e.Pop } }, b) : b; } function Me() { var e = function () { var e; var t = r.useContext(Ne), n = function (e) { var t = r.useContext(Pe); return t || u(!1), t; }(Ue.UseRouteError), a = function (e) { var t = function (e) { var t = r.useContext(Le); return t || u(!1), t; }(), n = t.matches[t.matches.length - 1]; return n.route.id || u(!1), n.route.id; }(Ue.UseRouteError); return t || (null == (e = n.errors) ? void 0 : e[a]); }(), t = U(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e), n = e instanceof Error ? e.stack : null, a = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" }; return r.createElement(r.Fragment, null, r.createElement("h2", null, "Unexpected Application Error!"), r.createElement("h3", { style: { fontStyle: "italic" } }, t), n ? r.createElement("pre", { style: a }, n) : null, null); } var Oe = r.createElement(Me, null);
        var Fe = /** @class */ (function (_super) {
            __extends(Fe, _super);
            function Fe(e) {
                var _this = this;
                _this = _super.call(this, e) || this, _this.state = { location: e.location, revalidation: e.revalidation, error: e.error };
                return _this;
            }
            Fe.getDerivedStateFromError = function (e) { return { error: e }; };
            Fe.getDerivedStateFromProps = function (e, t) { return t.location !== e.location || "idle" !== t.revalidation && "idle" === e.revalidation ? { error: e.error, location: e.location, revalidation: e.revalidation } : { error: e.error || t.error, location: t.location, revalidation: e.revalidation || t.revalidation }; };
            Fe.prototype.componentDidCatch = function (e, t) { console.error("React Router caught the following error during render", e, t); };
            Fe.prototype.render = function () { return this.state.error ? r.createElement(Le.Provider, { value: this.props.routeContext }, r.createElement(Ne.Provider, { value: this.state.error, children: this.props.component })) : this.props.children; };
            return Fe;
        }(r.Component)); function Ie(e) { var t = e.routeContext, n = e.match, a = e.children, i = r.useContext(_e); return i && i.static && i.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = n.route.id), r.createElement(Le.Provider, { value: t }, a); } var Ue = function (e) { return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e; }(Ue || {}); var Ae = a.startTransition; function je(e) { var t = e.routes, n = e.state; return ze(t, void 0, n); } function Be(t) { var _b = t.basename, n = _b === void 0 ? "/" : _b, _c = t.children, a = _c === void 0 ? null : _c, i = t.location, _d = t.navigationType, o = _d === void 0 ? e.Pop : _d, l = t.navigator, _f = t.static, s = _f === void 0 ? !1 : _f; Te() && u(!1); var c = n.replace(/^\/*/, "/"), d = r.useMemo((function () { return ({ basename: c, navigator: l, static: s }); }), [c, l, s]); "string" == typeof i && (i = p(i)); var _g = i.pathname, f = _g === void 0 ? "/" : _g, _h = i.search, m = _h === void 0 ? "" : _h, _j = i.hash, h = _j === void 0 ? "" : _j, _k = i.state, v = _k === void 0 ? null : _k, _m = i.key, g = _m === void 0 ? "default" : _m, b = r.useMemo((function () { var e = L(f, c); return null == e ? null : { location: { pathname: e, search: m, hash: h, state: v, key: g }, navigationType: o }; }), [c, f, m, h, v, g, o]); return null == b ? null : r.createElement(Re.Provider, { value: d }, r.createElement(De.Provider, { children: a, value: b })); } function $e() { return $e = Object.assign ? Object.assign.bind() : function (e) { for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    } return e; }, $e.apply(this, arguments); } function Ve(e) { if (!e)
        return null; var t = Object.entries(e), n = {}; for (var _b = 0, t_11 = t; _b < t_11.length; _b++) {
        var _c = t_11[_b], e_19 = _c[0], r_9 = _c[1];
        if (r_9 && "RouteErrorResponse" === r_9.__type)
            n[e_19] = new I(r_9.status, r_9.statusText, r_9.data, !0 === r_9.internal);
        else if (r_9 && "Error" === r_9.__type) {
            if (r_9.__subType) {
                var t_12 = window[r_9.__subType];
                if ("function" == typeof t_12)
                    try {
                        var a_5 = new t_12(r_9.message);
                        a_5.stack = "", n[e_19] = a_5;
                    }
                    catch (e) { }
            }
            if (null == n[e_19]) {
                var t_13 = new Error(r_9.message);
                t_13.stack = "", n[e_19] = t_13;
            }
        }
        else
            n[e_19] = r_9;
    } return n; } var Qe, He, We; new Promise((function () { })), r.Component, new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]), a.startTransition, "undefined" != typeof window && void 0 !== window.document && window.document.createElement, (We = Qe || (Qe = {})).UseScrollRestoration = "useScrollRestoration", We.UseSubmit = "useSubmit", We.UseSubmitFetcher = "useSubmitFetcher", We.UseFetcher = "useFetcher", function (e) { e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"; }(He || (He = {})), o(852), o.p, o.p; var Ke = (0, r.lazy)((function () { return o.e(902).then(o.bind(o, 902)); })), Ye = (0, r.lazy)((function () { return Promise.resolve().then(o.bind(o, 852)); })), Xe = document.getElementById("root"); if (!Xe)
        throw new Error("root not found"); var Ge, Je, Ze = (0, n.H)(Xe), et = (Ge = [{ path: "/", element: (0, t.jsx)((function () { var e = (0, r.useState)(0); return e[0], e[1], (0, t.jsx)("div", { children: "ISDESKTOPPLATFORM" }); }), {}), children: [{ path: "/about", element: (0, t.jsx)(r.Suspense, { fallback: "Loading...", children: (0, t.jsx)(Ye, {}) }) }, { path: "/shop", element: (0, t.jsx)(r.Suspense, { fallback: "Loading...", children: (0, t.jsx)(Ke, {}) }) }] }], function (t) {
        var _b;
        var n = t.window ? t.window : "undefined" != typeof window ? window : void 0, r = void 0 !== n && void 0 !== n.document && void 0 !== n.document.createElement, a = !r;
        var o;
        if (u(t.routes.length > 0, "You must provide a non-empty routes array to createRouter"), t.mapRouteProperties)
            o = t.mapRouteProperties;
        else if (t.detectErrorBoundary) {
            var e_20 = t.detectErrorBoundary;
            o = function (t) { return ({ hasErrorBoundary: e_20(t) }); };
        }
        else
            o = X;
        var l, c = {}, f = v(t.routes, o, void 0, c), p = t.basename || "/", h = i({ v7_normalizeFormMethod: !1, v7_prependBasename: !1 }, t.future), b = null, y = new Set, w = null, k = null, S = null, x = null != t.hydrationData, E = g(f, t.history.location, p), q = null;
        if (null == E) {
            var e_21 = de(404, { pathname: t.history.location.pathname }), _c = ce(f), n_13 = _c.matches, r_10 = _c.route;
            E = n_13, q = (_b = {}, _b[r_10.id] = e_21, _b);
        }
        var C, _, P = !(E.some((function (e) { return e.route.lazy; })) || E.some((function (e) { return e.route.loader; })) && null == t.hydrationData), R = { historyAction: t.history.action, location: t.history.location, matches: E, initialized: P, navigation: H, restoreScrollPosition: null == t.hydrationData && null, preventScrollReset: !1, revalidation: "idle", loaderData: t.hydrationData && t.hydrationData.loaderData || {}, actionData: t.hydrationData && t.hydrationData.actionData || null, errors: t.hydrationData && t.hydrationData.errors || q, fetchers: new Map, blockers: new Map }, D = e.Pop, N = !1, T = !1, z = !1, M = [], O = [], F = new Map, I = 0, U = -1, A = new Map, j = new Set, B = new Map, $ = new Map, V = new Map, ee = !1;
        function te(e) { R = i({}, R, e), y.forEach((function (e) { return e(R); })); }
        function ne(n, r) { var a, o; var u, s = null != R.actionData && null != R.navigation.formMethod && ge(R.navigation.formMethod) && "loading" === R.navigation.state && !0 !== (null == (a = n.state) ? void 0 : a._isRedirect); u = r.actionData ? Object.keys(r.actionData).length > 0 ? r.actionData : null : s ? R.actionData : null; var c = r.loaderData ? ue(R.loaderData, r.loaderData, r.matches || [], r.errors) : R.loaderData, d = R.blockers; d.size > 0 && (d = new Map(d), d.forEach((function (e, t) { return d.set(t, K); }))); var p = !0 === N || null != R.navigation.formMethod && ge(R.navigation.formMethod) && !0 !== (null == (o = n.state) ? void 0 : o._isRedirect); l && (f = l, l = void 0), T || D === e.Pop || (D === e.Push ? t.history.push(n, n.state) : D === e.Replace && t.history.replace(n, n.state)), te(i({}, r, { actionData: u, loaderData: c, historyAction: D, location: n, initialized: !0, navigation: H, revalidation: "idle", restoreScrollPosition: Ie(n, r.matches || R.matches), preventScrollReset: p, blockers: d })), D = e.Pop, N = !1, T = !1, z = !1, M = [], O = []; }
        function ie(n, r, a) {
            return __awaiter(this, void 0, void 0, function () {
                var u, s, d, e_22, _b, t_14, n_14, h, v, b, y, k, t_15, _c, x, E, q;
                var _d, _f;
                return __generator(this, function (_g) {
                    switch (_g.label) {
                        case 0:
                            _ && _.abort(), _ = null, D = n, T = !0 === (a && a.startUninterruptedRevalidation), function (e, t) { if (w && S) {
                                var n_15 = Fe(e, t);
                                w[n_15] = S();
                            } }(R.location, R.matches), N = !0 === (a && a.preventScrollReset);
                            u = l || f, s = a && a.overrideNavigation, d = g(u, r, p);
                            if (!d) {
                                e_22 = de(404, { pathname: r.pathname }), _b = ce(u), t_14 = _b.matches, n_14 = _b.route;
                                return [2 /*return*/, (Oe(), void ne(r, { matches: t_14, loaderData: {}, errors: (_d = {}, _d[n_14.id] = e_22, _d) }))];
                            }
                            if (R.initialized && !z && (h = R.location, v = r, h.pathname === v.pathname && h.search === v.search && ("" === h.hash ? "" !== v.hash : h.hash === v.hash || "" !== v.hash)) && !(a && a.submission && ge(a.submission.formMethod)))
                                return [2 /*return*/, void ne(r, { matches: d })];
                            _ = new AbortController;
                            k = ae(t.history, r, _.signal, a && a.submission);
                            if (!(a && a.pendingError)) return [3 /*break*/, 1];
                            y = (_f = {}, _f[se(d).route.id] = a.pendingError, _f);
                            return [3 /*break*/, 3];
                        case 1:
                            if (!(a && a.submission && ge(a.submission.formMethod))) return [3 /*break*/, 3];
                            return [4 /*yield*/, function (t, n, r, a, i) {
                                    return __awaiter(this, void 0, void 0, function () {
                                        var l, u, s, e_23, t_16;
                                        var _b, _c;
                                        return __generator(this, function (_d) {
                                            switch (_d.label) {
                                                case 0:
                                                    void 0 === i && (i = {}), Ce();
                                                    u = function (e, t) { return { state: "submitting", location: e, formMethod: t.formMethod, formAction: t.formAction, formEncType: t.formEncType, formData: t.formData, json: t.json, text: t.text }; }(n, r);
                                                    te({ navigation: u });
                                                    s = ke(a, n);
                                                    if (!(s.route.action || s.route.lazy)) return [3 /*break*/, 2];
                                                    return [4 /*yield*/, re("action", t, s, a, c, o, p)];
                                                case 1:
                                                    if (l = _d.sent(), t.signal.aborted)
                                                        return [2 /*return*/, { shortCircuited: !0 }];
                                                    return [3 /*break*/, 3];
                                                case 2:
                                                    l = { type: m.error, error: de(405, { method: t.method, pathname: n.pathname, routeId: s.route.id }) };
                                                    _d.label = 3;
                                                case 3:
                                                    if (!ve(l)) return [3 /*break*/, 5];
                                                    e_23 = i && null != i.replace ? i.replace : l.location === R.location.pathname + R.location.search;
                                                    return [4 /*yield*/, pe(R, l, { submission: r, replace: e_23 })];
                                                case 4: return [2 /*return*/, (_d.sent(), { shortCircuited: !0 })];
                                                case 5:
                                                    if (he(l)) {
                                                        t_16 = se(a, s.route.id);
                                                        return [2 /*return*/, (!0 !== (i && i.replace) && (D = e.Push), { pendingActionData: {}, pendingActionError: (_b = {}, _b[t_16.route.id] = l.error, _b) })];
                                                    }
                                                    if (me(l))
                                                        throw de(400, { type: "defer-action" });
                                                    return [2 /*return*/, { pendingActionData: (_c = {}, _c[s.route.id] = l.data, _c) }];
                                            }
                                        });
                                    });
                                }(k, r, a.submission, d, { replace: a.replace })];
                        case 2:
                            t_15 = _g.sent();
                            if (t_15.shortCircuited)
                                return [2 /*return*/];
                            b = t_15.pendingActionData, y = t_15.pendingActionError, s = xe(r, a.submission), k = new Request(k.url, { signal: k.signal });
                            _g.label = 3;
                        case 3: return [4 /*yield*/, function (e, n, r, a, o, u, s, c, d) {
                                return __awaiter(this, void 0, void 0, function () { var m, h, v, _b, g, b, e_24, e_25, y, _c, w, k, S, x, e_26, _d, E, q, C, P; return __generator(this, function (_f) {
                                    switch (_f.label) {
                                        case 0:
                                            m = a || xe(n, o), h = o || u || Se(m), v = l || f, _b = Z(t.history, R, r, h, n, z, M, O, B, j, v, p, c, d), g = _b[0], b = _b[1];
                                            if (Oe((function (e) { return !(r && r.some((function (t) { return t.route.id === e; }))) || g && g.some((function (t) { return t.route.id === e; })); })), U = ++I, 0 === g.length && 0 === b.length) {
                                                e_24 = Le();
                                                return [2 /*return*/, (ne(n, i({ matches: r, loaderData: {}, errors: d || null }, c ? { actionData: c } : {}, e_24 ? { fetchers: new Map(R.fetchers) } : {})), { shortCircuited: !0 })];
                                            }
                                            if (!T) {
                                                b.forEach((function (e) { var t = R.fetchers.get(e.key), n = Ee(void 0, t ? t.data : void 0); R.fetchers.set(e.key, n); }));
                                                e_25 = c || R.actionData;
                                                te(i({ navigation: m }, e_25 ? 0 === Object.keys(e_25).length ? { actionData: null } : { actionData: e_25 } : {}, b.length > 0 ? { fetchers: new Map(R.fetchers) } : {}));
                                            }
                                            b.forEach((function (e) { F.has(e.key) && Re(e.key), e.controller && F.set(e.key, e.controller); }));
                                            y = function () { return b.forEach((function (e) { return Re(e.key); })); };
                                            _ && _.signal.addEventListener("abort", y);
                                            return [4 /*yield*/, we(R.matches, r, g, b, e)];
                                        case 1:
                                            _c = _f.sent(), w = _c.results, k = _c.loaderResults, S = _c.fetcherResults;
                                            if (e.signal.aborted)
                                                return [2 /*return*/, { shortCircuited: !0 }];
                                            _ && _.signal.removeEventListener("abort", y), b.forEach((function (e) { return F.delete(e.key); }));
                                            x = fe(w);
                                            if (!x) return [3 /*break*/, 3];
                                            if (x.idx >= g.length) {
                                                e_26 = b[x.idx - g.length].key;
                                                j.add(e_26);
                                            }
                                            return [4 /*yield*/, pe(R, x.result, { replace: s })];
                                        case 2: return [2 /*return*/, (_f.sent(), { shortCircuited: !0 })];
                                        case 3:
                                            _d = le(R, r, g, k, d, b, S, $), E = _d.loaderData, q = _d.errors;
                                            $.forEach((function (e, t) { e.subscribe((function (n) { (n || e.done) && $.delete(t); })); }));
                                            C = Le(), P = Ne(U);
                                            return [2 /*return*/, i({ loaderData: E, errors: q }, C || P || b.length > 0 ? { fetchers: new Map(R.fetchers) } : {})];
                                    }
                                }); });
                            }(k, r, d, s, a && a.submission, a && a.fetcherSubmission, a && a.replace, b, y)];
                        case 4:
                            _c = _g.sent(), x = _c.shortCircuited, E = _c.loaderData, q = _c.errors;
                            x || (_ = null, ne(r, i({ matches: d }, b ? { actionData: b } : {}, { loaderData: E, errors: q })));
                            return [2 /*return*/];
                    }
                });
            });
        }
        function oe(e) { return R.fetchers.get(e) || W; }
        function pe(a, o, l) {
            return __awaiter(this, void 0, void 0, function () { var _b, s, c, f, m, e_27, r_11, h, _c, v, g, b, y, e_28; return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _b = void 0 === l ? {} : l, s = _b.submission, c = _b.fetcherSubmission, f = _b.replace;
                        o.revalidate && (z = !0);
                        m = d(a.location, o.location, { _isRedirect: !0 });
                        if (u(m, "Expected a location on the redirect navigation"), r) {
                            e_27 = !1;
                            if (o.reloadDocument)
                                e_27 = !0;
                            else if (Y.test(o.location)) {
                                r_11 = t.history.createURL(o.location);
                                e_27 = r_11.origin !== n.location.origin || null == L(r_11.pathname, p);
                            }
                            if (e_27)
                                return [2 /*return*/, void (f ? n.location.replace(o.location) : n.location.assign(o.location))];
                        }
                        _ = null;
                        h = !0 === f ? e.Replace : e.Push, _c = a.navigation, v = _c.formMethod, g = _c.formAction, b = _c.formEncType;
                        !s && !c && v && g && b && (s = Se(a.navigation));
                        y = s || c;
                        if (!(Q.has(o.status) && y && ge(y.formMethod))) return [3 /*break*/, 2];
                        return [4 /*yield*/, ie(h, m, { submission: i({}, y, { formAction: o.location }), preventScrollReset: N })];
                    case 1:
                        _d.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        e_28 = xe(m, s);
                        return [4 /*yield*/, ie(h, m, { overrideNavigation: e_28, fetcherSubmission: c, preventScrollReset: N })];
                    case 3:
                        _d.sent();
                        _d.label = 4;
                    case 4: return [2 /*return*/];
                }
            }); });
        }
        function we(e, n, r, a, i) {
            return __awaiter(this, void 0, void 0, function () { var l, u, s; return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Promise.all(__spreadArray(__spreadArray([], r.map((function (e) { return re("loader", i, e, n, c, o, p); })), true), a.map((function (e) { return e.matches && e.match && e.controller ? re("loader", ae(t.history, e.path, e.controller.signal), e.match, e.matches, c, o, p) : { type: m.error, error: de(404, { pathname: e.path }) }; })), true))];
                    case 1:
                        l = _b.sent(), u = l.slice(0, r.length), s = l.slice(r.length);
                        return [4 /*yield*/, Promise.all([be(e, r, u, u.map((function () { return i.signal; })), !1, R.loaderData), be(e, a.map((function (e) { return e.match; })), s, a.map((function (e) { return e.controller ? e.controller.signal : null; })), !0)])];
                    case 2: return [2 /*return*/, (_b.sent(), { results: l, loaderResults: u, fetcherResults: s })];
                }
            }); });
        }
        function Ce() { z = !0, M.push.apply(M, Oe()), B.forEach((function (e, t) { F.has(t) && (O.push(t), Re(t)); })); }
        function _e(e, t, n) {
            var _b;
            var r = se(R.matches, t);
            Pe(e), te({ errors: (_b = {}, _b[r.route.id] = n, _b), fetchers: new Map(R.fetchers) });
        }
        function Pe(e) { var t = R.fetchers.get(e); !F.has(e) || t && "loading" === t.state && A.has(e) || Re(e), B.delete(e), A.delete(e), j.delete(e), R.fetchers.delete(e); }
        function Re(e) { var t = F.get(e); u(t, "Expected fetch controller: " + e), t.abort(), F.delete(e); }
        function De(e) { for (var _b = 0, e_29 = e; _b < e_29.length; _b++) {
            var t_17 = e_29[_b];
            var e_30 = qe(oe(t_17).data);
            R.fetchers.set(t_17, e_30);
        } }
        function Le() { var e = [], t = !1; for (var _b = 0, j_1 = j; _b < j_1.length; _b++) {
            var n_16 = j_1[_b];
            var r_12 = R.fetchers.get(n_16);
            u(r_12, "Expected fetcher: " + n_16), "loading" === r_12.state && (j.delete(n_16), e.push(n_16), t = !0);
        } return De(e), t; }
        function Ne(e) { var t = []; for (var _b = 0, A_1 = A; _b < A_1.length; _b++) {
            var _c = A_1[_b], n_17 = _c[0], r_13 = _c[1];
            if (r_13 < e) {
                var e_31 = R.fetchers.get(n_17);
                u(e_31, "Expected fetcher: " + n_17), "loading" === e_31.state && (Re(n_17), A.delete(n_17), t.push(n_17));
            }
        } return De(t), t.length > 0; }
        function Te(e) { R.blockers.delete(e), V.delete(e); }
        function ze(e, t) { var n = R.blockers.get(e) || K; u("unblocked" === n.state && "blocked" === t.state || "blocked" === n.state && "blocked" === t.state || "blocked" === n.state && "proceeding" === t.state || "blocked" === n.state && "unblocked" === t.state || "proceeding" === n.state && "unblocked" === t.state, "Invalid blocker state transition: " + n.state + " -> " + t.state); var r = new Map(R.blockers); r.set(e, t), te({ blockers: r }); }
        function Me(e) { var t = e.currentLocation, n = e.nextLocation, r = e.historyAction; if (0 === V.size)
            return; V.size > 1 && s(!1, "A router only supports one blocker at a time"); var a = Array.from(V.entries()), _b = a[a.length - 1], i = _b[0], o = _b[1], l = R.blockers.get(i); return l && "proceeding" === l.state ? void 0 : o({ currentLocation: t, nextLocation: n, historyAction: r }) ? i : void 0; }
        function Oe(e) { var t = []; return $.forEach((function (n, r) { e && !e(r) || (n.cancel(), t.push(r), $.delete(r)); })), t; }
        function Fe(e, t) { return k && k(e, t.map((function (e) { return function (e, t) { var n = e.route, r = e.pathname, a = e.params; return { id: n.id, pathname: r, params: a, data: t[n.id], handle: n.handle }; }(e, R.loaderData); }))) || e.key; }
        function Ie(e, t) { if (w) {
            var n_18 = Fe(e, t), r_14 = w[n_18];
            if ("number" == typeof r_14)
                return r_14;
        } return null; }
        return C = { get basename() { return p; }, get state() { return R; }, get routes() { return f; }, initialize: function () { return b = t.history.listen((function (e) { var n = e.action, r = e.location, a = e.delta; if (ee)
                return void (ee = !1); s(0 === V.size || null != a, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."); var i = Me({ currentLocation: R.location, nextLocation: r, historyAction: n }); return i && null != a ? (ee = !0, t.history.go(-1 * a), void ze(i, { state: "blocked", location: r, proceed: function () { ze(i, { state: "proceeding", proceed: void 0, reset: void 0, location: r }), t.history.go(a); }, reset: function () { var e = new Map(R.blockers); e.set(i, K), te({ blockers: e }); } })) : ie(n, r); })), R.initialized || ie(e.Pop, R.location), C; }, subscribe: function (e) { return y.add(e), function () { return y.delete(e); }; }, enableScrollRestoration: function (e, t, n) { if (w = e, S = t, k = n || null, !x && R.navigation === H) {
                x = !0;
                var e_32 = Ie(R.location, R.matches);
                null != e_32 && te({ restoreScrollPosition: e_32 });
            } return function () { w = null, S = null, k = null; }; }, navigate: function n(r, a) {
                return __awaiter(this, void 0, void 0, function () { var o, _b, l, u, s, c, f, m, v, g, b; return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            if ("number" == typeof r)
                                return [2 /*return*/, void t.history.go(r)];
                            o = G(R.location, R.matches, p, h.v7_prependBasename, r, null == a ? void 0 : a.fromRouteId, null == a ? void 0 : a.relative), _b = J(h.v7_normalizeFormMethod, !1, o, a), l = _b.path, u = _b.submission, s = _b.error, c = R.location, f = d(R.location, l, a && a.state);
                            f = i({}, f, t.history.encodeLocation(f));
                            m = a && null != a.replace ? a.replace : void 0, v = e.Push;
                            !0 === m ? v = e.Replace : !1 === m || null != u && ge(u.formMethod) && u.formAction === R.location.pathname + R.location.search && (v = e.Replace);
                            g = a && "preventScrollReset" in a ? !0 === a.preventScrollReset : void 0, b = Me({ currentLocation: c, nextLocation: f, historyAction: v });
                            if (!!b) return [3 /*break*/, 2];
                            return [4 /*yield*/, ie(v, f, { submission: u, pendingError: s, preventScrollReset: g, replace: a && a.replace })];
                        case 1: return [2 /*return*/, _c.sent()];
                        case 2:
                            ze(b, { state: "blocked", location: f, proceed: function () { ze(b, { state: "proceeding", proceed: void 0, reset: void 0, location: f }), n(r, a); }, reset: function () { var e = new Map(R.blockers); e.set(b, K), te({ blockers: e }); } });
                            return [2 /*return*/];
                    }
                }); });
            }, fetch: function (e, n, r, s) { if (a)
                throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."); F.has(e) && Re(e); var d = l || f, m = G(R.location, R.matches, p, h.v7_prependBasename, r, n, null == s ? void 0 : s.relative), v = g(d, m, p); if (!v)
                return void _e(e, n, de(404, { pathname: m })); var _b = J(h.v7_normalizeFormMethod, !0, m, s), b = _b.path, y = _b.submission, w = _b.error; if (w)
                return void _e(e, n, w); var k = ke(v, b); N = !0 === (s && s.preventScrollReset), y && ge(y.formMethod) ? function (e, n, r, a, s, d) {
                return __awaiter(this, void 0, void 0, function () {
                    var t_18, m, h, v, b, y, t_19, t_20, w, k, S, x, E, q, _b, C, P, L, _c, N, T, V, Q, e_33, _d, H, W, t_21, K;
                    var _f;
                    return __generator(this, function (_g) {
                        switch (_g.label) {
                            case 0:
                                if (Ce(), B.delete(e), !a.route.action && !a.route.lazy) {
                                    t_18 = de(405, { method: d.formMethod, pathname: r, routeId: n });
                                    return [2 /*return*/, void _e(e, n, t_18)];
                                }
                                m = function (e, t) { return { state: "submitting", formMethod: e.formMethod, formAction: e.formAction, formEncType: e.formEncType, formData: e.formData, json: e.json, text: e.text, data: t ? t.data : void 0 }; }(d, R.fetchers.get(e));
                                R.fetchers.set(e, m), te({ fetchers: new Map(R.fetchers) });
                                h = new AbortController, v = ae(t.history, r, h.signal, d);
                                F.set(e, h);
                                b = I;
                                return [4 /*yield*/, re("action", v, a, s, c, o, p)];
                            case 1:
                                y = _g.sent();
                                if (v.signal.aborted)
                                    return [2 /*return*/, void (F.get(e) === h && F.delete(e))];
                                if (ve(y)) {
                                    if (F.delete(e), U > b) {
                                        t_19 = qe(void 0);
                                        return [2 /*return*/, (R.fetchers.set(e, t_19), void te({ fetchers: new Map(R.fetchers) }))];
                                    }
                                    {
                                        j.add(e);
                                        t_20 = Ee(d);
                                        return [2 /*return*/, (R.fetchers.set(e, t_20), te({ fetchers: new Map(R.fetchers) }), pe(R, y, { fetcherSubmission: d }))];
                                    }
                                }
                                if (he(y))
                                    return [2 /*return*/, void _e(e, n, y.error)];
                                if (me(y))
                                    throw de(400, { type: "defer-action" });
                                w = R.navigation.location || R.location, k = ae(t.history, w, h.signal), S = l || f, x = "idle" !== R.navigation.state ? g(S, R.navigation.location, p) : R.matches;
                                u(x, "Didn't find any matches after fetcher action");
                                E = ++I;
                                A.set(e, E);
                                q = Ee(d, y.data);
                                R.fetchers.set(e, q);
                                _b = Z(t.history, R, x, d, w, z, M, O, B, j, S, p, (_f = {}, _f[a.route.id] = y.data, _f), void 0), C = _b[0], P = _b[1];
                                P.filter((function (t) { return t.key !== e; })).forEach((function (e) { var t = e.key, n = R.fetchers.get(t), r = Ee(void 0, n ? n.data : void 0); R.fetchers.set(t, r), F.has(t) && Re(t), e.controller && F.set(t, e.controller); })), te({ fetchers: new Map(R.fetchers) });
                                L = function () { return P.forEach((function (e) { return Re(e.key); })); };
                                h.signal.addEventListener("abort", L);
                                return [4 /*yield*/, we(R.matches, x, C, P, k)];
                            case 2:
                                _c = _g.sent(), N = _c.results, T = _c.loaderResults, V = _c.fetcherResults;
                                if (h.signal.aborted)
                                    return [2 /*return*/];
                                h.signal.removeEventListener("abort", L), A.delete(e), F.delete(e), P.forEach((function (e) { return F.delete(e.key); }));
                                Q = fe(N);
                                if (Q) {
                                    if (Q.idx >= C.length) {
                                        e_33 = P[Q.idx - C.length].key;
                                        j.add(e_33);
                                    }
                                    return [2 /*return*/, pe(R, Q.result)];
                                }
                                _d = le(R, R.matches, C, T, void 0, P, V, $), H = _d.loaderData, W = _d.errors;
                                if (R.fetchers.has(e)) {
                                    t_21 = qe(y.data);
                                    R.fetchers.set(e, t_21);
                                }
                                K = Ne(E);
                                "loading" === R.navigation.state && E > U ? (u(D, "Expected pending action"), _ && _.abort(), ne(R.navigation.location, { matches: x, loaderData: H, errors: W, fetchers: new Map(R.fetchers) })) : (te(i({ errors: W, loaderData: ue(R.loaderData, H, x, W) }, K || P.length > 0 ? { fetchers: new Map(R.fetchers) } : {})), z = !1);
                                return [2 /*return*/];
                        }
                    });
                });
            }(e, n, b, k, v, y) : (B.set(e, { routeId: n, path: b }), function (e, n, r, a, i, l) {
                return __awaiter(this, void 0, void 0, function () {
                    var s, d, f, m, h, v, _b, t_22, t_23, g;
                    var _c;
                    return __generator(this, function (_d) {
                        switch (_d.label) {
                            case 0:
                                s = R.fetchers.get(e), d = Ee(l, s ? s.data : void 0);
                                R.fetchers.set(e, d), te({ fetchers: new Map(R.fetchers) });
                                f = new AbortController, m = ae(t.history, r, f.signal);
                                F.set(e, f);
                                h = I;
                                return [4 /*yield*/, re("loader", m, a, i, c, o, p)];
                            case 1:
                                v = _d.sent();
                                _b = me(v);
                                if (!_b) return [3 /*break*/, 3];
                                return [4 /*yield*/, ye(v, m.signal, !0)];
                            case 2:
                                _b = (v = (_d.sent()) || v);
                                _d.label = 3;
                            case 3:
                                if (_b, F.get(e) === f && F.delete(e), m.signal.aborted)
                                    return [2 /*return*/];
                                if (!ve(v)) return [3 /*break*/, 5];
                                if (U > h) {
                                    t_22 = qe(void 0);
                                    return [2 /*return*/, (R.fetchers.set(e, t_22), void te({ fetchers: new Map(R.fetchers) }))];
                                }
                                j.add(e);
                                return [4 /*yield*/, pe(R, v)];
                            case 4: return [2 /*return*/, void (_d.sent())];
                            case 5:
                                if (he(v)) {
                                    t_23 = se(R.matches, n);
                                    return [2 /*return*/, (R.fetchers.delete(e), void te({ fetchers: new Map(R.fetchers), errors: (_c = {}, _c[t_23.route.id] = v.error, _c) }))];
                                }
                                u(!me(v), "Unhandled fetcher deferred data");
                                g = qe(v.data);
                                R.fetchers.set(e, g), te({ fetchers: new Map(R.fetchers) });
                                return [2 /*return*/];
                        }
                    });
                });
            }(e, n, b, k, v, y)); }, revalidate: function () { Ce(), te({ revalidation: "loading" }), "submitting" !== R.navigation.state && ("idle" !== R.navigation.state ? ie(D || R.historyAction, R.navigation.location, { overrideNavigation: R.navigation }) : ie(R.historyAction, R.location, { startUninterruptedRevalidation: !0 })); }, createHref: function (e) { return t.history.createHref(e); }, encodeLocation: function (e) { return t.history.encodeLocation(e); }, getFetcher: oe, deleteFetcher: Pe, dispose: function () { b && b(), y.clear(), _ && _.abort(), R.fetchers.forEach((function (e, t) { return Pe(t); })), R.blockers.forEach((function (e, t) { return Te(t); })); }, getBlocker: function (e, t) { var n = R.blockers.get(e) || K; return V.get(e) !== t && V.set(e, t), n; }, deleteBlocker: Te, _internalFetchControllers: F, _internalActiveDeferreds: $, _internalSetRoutes: function (e) { c = {}, l = v(e, o, void 0, c); } }, C;
    }({ basename: void 0, future: $e({}, void 0, { v7_prependBasename: !0 }), history: (Je = { window: void 0 }, void 0 === Je && (Je = {}), function (t, n, r, a) { void 0 === a && (a = {}); var _b = a.window, o = _b === void 0 ? document.defaultView : _b, _c = a.v5Compat, s = _c === void 0 ? !1 : _c, p = o.history, m = e.Pop, h = null, v = g(); function g() { return (p.state || { idx: null }).idx; } function b() { m = e.Pop; var t = g(), n = null == t ? null : t - v; v = t, h && h({ action: m, location: w.location, delta: n }); } function y(e) { var t = "null" !== o.location.origin ? o.location.origin : o.location.href, n = "string" == typeof e ? e : f(e); return u(t, "No window.location.(origin|href) available to create URL for href: " + n), new URL(n, t); } null == v && (v = 0, p.replaceState(i({}, p.state, { idx: v }), "")); var w = { get action() { return m; }, get location() { return t(o, p); }, listen: function (e) { if (h)
                throw new Error("A history only accepts one active listener"); return o.addEventListener(l, b), h = e, function () { o.removeEventListener(l, b), h = null; }; }, createHref: function (e) { return n(o, e); }, createURL: y, encodeLocation: function (e) { var t = y(e); return { pathname: t.pathname, search: t.search, hash: t.hash }; }, push: function (t, n) { m = e.Push; var a = d(w.location, t, n); r && r(a, t), v = g() + 1; var i = c(a, v), l = w.createHref(a); try {
                p.pushState(i, "", l);
            }
            catch (e) {
                if (e instanceof DOMException && "DataCloneError" === e.name)
                    throw e;
                o.location.assign(l);
            } s && h && h({ action: m, location: w.location, delta: 1 }); }, replace: function (t, n) { m = e.Replace; var a = d(w.location, t, n); r && r(a, t), v = g(); var i = c(a, v), o = w.createHref(a); p.replaceState(i, "", o), s && h && h({ action: m, location: w.location, delta: 0 }); }, go: function (e) { return p.go(e); } }; return w; }((function (e, t) { var _b = e.location, n = _b.pathname, r = _b.search, a = _b.hash; return d("", { pathname: n, search: r, hash: a }, t.state && t.state.usr || null, t.state && t.state.key || "default"); }), (function (e, t) { return "string" == typeof t ? t : f(t); }), null, Je)), hydrationData: function () { var e; var t = null == (e = window) ? void 0 : e.__staticRouterHydrationData; return t && t.errors && (t = $e({}, t, { errors: Ve(t.errors) })), t; }(), routes: Ge, mapRouteProperties: function (e) { var t = { hasErrorBoundary: null != e.ErrorBoundary || null != e.errorElement }; return e.Component && Object.assign(t, { element: r.createElement(e.Component), Component: void 0 }), e.ErrorBoundary && Object.assign(t, { errorElement: r.createElement(e.ErrorBoundary), ErrorBoundary: void 0 }), t; } }).initialize()); Ze.render((0, t.jsx)((function (e) { var t = e.fallbackElement, n = e.router, a = e.future, _b = r.useState(n.state), i = _b[0], o = _b[1], l = (a || {}).v7_startTransition, u = r.useCallback((function (e) { l && Ae ? Ae((function () { return o(e); })) : o(e); }), [o, l]); r.useLayoutEffect((function () { return n.subscribe(u); }), [n, u]); var s = r.useMemo((function () { return ({ createHref: n.createHref, encodeLocation: n.encodeLocation, go: function (e) { return n.navigate(e); }, push: function (e, t, r) { return n.navigate(e, { state: t, preventScrollReset: null == r ? void 0 : r.preventScrollReset }); }, replace: function (e, t, r) { return n.navigate(e, { replace: !0, state: t, preventScrollReset: null == r ? void 0 : r.preventScrollReset }); } }); }), [n]), c = n.basename || "/", d = r.useMemo((function () { return ({ router: n, navigator: s, static: !1, basename: c }); }), [n, s, c]); return r.createElement(r.Fragment, null, r.createElement(_e.Provider, { value: d }, r.createElement(Pe.Provider, { value: i }, r.createElement(Be, { basename: c, location: i.location, navigationType: i.historyAction, navigator: s }, i.initialized ? r.createElement(je, { routes: n.routes, state: i }) : t))), null); }), { router: et })); })();
})();
