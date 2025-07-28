"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6928],
  {
    10255: (e, t, r) => {
      function n(e) {
        let { moduleIds: t } = e;
        return null;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "PreloadChunks", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        r(95155),
        r(47650),
        r(85744),
        r(20589);
    },
    15564: (e, t, r) => {
      var n = r(49509);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          default: function () {
            return g;
          },
          defaultHead: function () {
            return f;
          },
        });
      let i = r(88229),
        l = r(6966),
        o = r(95155),
        a = l._(r(12115)),
        s = i._(r(85029)),
        d = r(42464),
        c = r(82830),
        u = r(17544);
      function f(e) {
        void 0 === e && (e = !1);
        let t = [(0, o.jsx)("meta", { charSet: "utf-8" }, "charset")];
        return (
          e ||
            t.push(
              (0, o.jsx)(
                "meta",
                { name: "viewport", content: "width=device-width" },
                "viewport"
              )
            ),
          t
        );
      }
      function p(e, t) {
        return "string" == typeof t || "number" == typeof t
          ? e
          : t.type === a.default.Fragment
          ? e.concat(
              a.default.Children.toArray(t.props.children).reduce(
                (e, t) =>
                  "string" == typeof t || "number" == typeof t
                    ? e
                    : e.concat(t),
                []
              )
            )
          : e.concat(t);
      }
      r(43230);
      let h = ["name", "httpEquiv", "charSet", "itemProp"];
      function m(e, t) {
        let { inAmpMode: r } = t;
        return e
          .reduce(p, [])
          .reverse()
          .concat(f(r).reverse())
          .filter(
            (function () {
              let e = new Set(),
                t = new Set(),
                r = new Set(),
                n = {};
              return (i) => {
                let l = !0,
                  o = !1;
                if (
                  i.key &&
                  "number" != typeof i.key &&
                  i.key.indexOf("$") > 0
                ) {
                  o = !0;
                  let t = i.key.slice(i.key.indexOf("$") + 1);
                  e.has(t) ? (l = !1) : e.add(t);
                }
                switch (i.type) {
                  case "title":
                  case "base":
                    t.has(i.type) ? (l = !1) : t.add(i.type);
                    break;
                  case "meta":
                    for (let e = 0, t = h.length; e < t; e++) {
                      let t = h[e];
                      if (i.props.hasOwnProperty(t))
                        if ("charSet" === t) r.has(t) ? (l = !1) : r.add(t);
                        else {
                          let e = i.props[t],
                            r = n[t] || new Set();
                          ("name" !== t || !o) && r.has(e)
                            ? (l = !1)
                            : (r.add(e), (n[t] = r));
                        }
                    }
                }
                return l;
              };
            })()
          )
          .reverse()
          .map((e, t) => {
            let i = e.key || t;
            if (
              n.env.__NEXT_OPTIMIZE_FONTS &&
              !r &&
              "link" === e.type &&
              e.props.href &&
              [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/",
              ].some((t) => e.props.href.startsWith(t))
            ) {
              let t = { ...(e.props || {}) };
              return (
                (t["data-href"] = t.href),
                (t.href = void 0),
                (t["data-optimized-fonts"] = !0),
                a.default.cloneElement(e, t)
              );
            }
            return a.default.cloneElement(e, { key: i });
          });
      }
      let g = function (e) {
        let { children: t } = e,
          r = (0, a.useContext)(d.AmpStateContext),
          n = (0, a.useContext)(c.HeadManagerContext);
        return (0, o.jsx)(s.default, {
          reduceComponentsToState: m,
          headManager: n,
          inAmpMode: (0, u.isInAmpMode)(r),
          children: t,
        });
      };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    17544: (e, t) => {
      function r(e) {
        let {
          ampFirst: t = !1,
          hybrid: r = !1,
          hasQuery: n = !1,
        } = void 0 === e ? {} : e;
        return t || (r && n);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isInAmpMode", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
    },
    17828: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "workAsyncStorageInstance", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = (0, r(64054).createAsyncLocalStorage)();
    },
    33063: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "Image", {
          enumerable: !0,
          get: function () {
            return y;
          },
        });
      let n = r(88229),
        i = r(6966),
        l = r(95155),
        o = i._(r(12115)),
        a = n._(r(47650)),
        s = n._(r(15564)),
        d = r(38883),
        c = r(95840),
        u = r(86752);
      r(43230);
      let f = r(70901),
        p = n._(r(51193)),
        h = r(6654),
        m = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        };
      function g(e, t, r, n, i, l, o) {
        let a = null == e ? void 0 : e.src;
        e &&
          e["data-loaded-src"] !== a &&
          ((e["data-loaded-src"] = a),
          ("decode" in e ? e.decode() : Promise.resolve())
            .catch(() => {})
            .then(() => {
              if (e.parentElement && e.isConnected) {
                if (("empty" !== t && i(!0), null == r ? void 0 : r.current)) {
                  let t = new Event("load");
                  Object.defineProperty(t, "target", {
                    writable: !1,
                    value: e,
                  });
                  let n = !1,
                    i = !1;
                  r.current({
                    ...t,
                    nativeEvent: t,
                    currentTarget: e,
                    target: e,
                    isDefaultPrevented: () => n,
                    isPropagationStopped: () => i,
                    persist: () => {},
                    preventDefault: () => {
                      (n = !0), t.preventDefault();
                    },
                    stopPropagation: () => {
                      (i = !0), t.stopPropagation();
                    },
                  });
                }
                (null == n ? void 0 : n.current) && n.current(e);
              }
            }));
      }
      function b(e) {
        return o.use ? { fetchPriority: e } : { fetchpriority: e };
      }
      let _ = (0, o.forwardRef)((e, t) => {
        let {
            src: r,
            srcSet: n,
            sizes: i,
            height: a,
            width: s,
            decoding: d,
            className: c,
            style: u,
            fetchPriority: f,
            placeholder: p,
            loading: m,
            unoptimized: _,
            fill: S,
            onLoadRef: y,
            onLoadingCompleteRef: I,
            setBlurComplete: v,
            setShowAltText: x,
            sizesInput: E,
            onLoad: j,
            onError: w,
            ...T
          } = e,
          O = (0, o.useCallback)(
            (e) => {
              e && (w && (e.src = e.src), e.complete && g(e, p, y, I, v, _, E));
            },
            [r, p, y, I, v, w, _, E]
          ),
          R = (0, h.useMergedRef)(t, O);
        return (0, l.jsx)("img", {
          ...T,
          ...b(f),
          loading: m,
          width: s,
          height: a,
          decoding: d,
          "data-nimg": S ? "fill" : "1",
          className: c,
          style: u,
          sizes: i,
          srcSet: n,
          src: r,
          ref: R,
          onLoad: (e) => {
            g(e.currentTarget, p, y, I, v, _, E);
          },
          onError: (e) => {
            x(!0), "empty" !== p && v(!0), w && w(e);
          },
        });
      });
      function S(e) {
        let { isAppRouter: t, imgAttributes: r } = e,
          n = {
            as: "image",
            imageSrcSet: r.srcSet,
            imageSizes: r.sizes,
            crossOrigin: r.crossOrigin,
            referrerPolicy: r.referrerPolicy,
            ...b(r.fetchPriority),
          };
        return t && a.default.preload
          ? (a.default.preload(r.src, n), null)
          : (0, l.jsx)(s.default, {
              children: (0, l.jsx)(
                "link",
                { rel: "preload", href: r.srcSet ? void 0 : r.src, ...n },
                "__nimg-" + r.src + r.srcSet + r.sizes
              ),
            });
      }
      let y = (0, o.forwardRef)((e, t) => {
        let r = (0, o.useContext)(f.RouterContext),
          n = (0, o.useContext)(u.ImageConfigContext),
          i = (0, o.useMemo)(() => {
            var e;
            let t = m || n || c.imageConfigDefault,
              r = [...t.deviceSizes, ...t.imageSizes].sort((e, t) => e - t),
              i = t.deviceSizes.sort((e, t) => e - t),
              l = null == (e = t.qualities) ? void 0 : e.sort((e, t) => e - t);
            return { ...t, allSizes: r, deviceSizes: i, qualities: l };
          }, [n]),
          { onLoad: a, onLoadingComplete: s } = e,
          h = (0, o.useRef)(a);
        (0, o.useEffect)(() => {
          h.current = a;
        }, [a]);
        let g = (0, o.useRef)(s);
        (0, o.useEffect)(() => {
          g.current = s;
        }, [s]);
        let [b, y] = (0, o.useState)(!1),
          [I, v] = (0, o.useState)(!1),
          { props: x, meta: E } = (0, d.getImgProps)(e, {
            defaultLoader: p.default,
            imgConf: i,
            blurComplete: b,
            showAltText: I,
          });
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(_, {
              ...x,
              unoptimized: E.unoptimized,
              placeholder: E.placeholder,
              fill: E.fill,
              onLoadRef: h,
              onLoadingCompleteRef: g,
              setBlurComplete: y,
              setShowAltText: v,
              sizesInput: e.sizes,
              ref: t,
            }),
            E.priority
              ? (0, l.jsx)(S, { isAppRouter: !r, imgAttributes: x })
              : null,
          ],
        });
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    38883: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImgProps", {
          enumerable: !0,
          get: function () {
            return s;
          },
        }),
        r(43230);
      let n = r(75100),
        i = r(95840),
        l = ["-moz-initial", "fill", "none", "scale-down", void 0];
      function o(e) {
        return void 0 !== e.default;
      }
      function a(e) {
        return void 0 === e
          ? e
          : "number" == typeof e
          ? Number.isFinite(e)
            ? e
            : NaN
          : "string" == typeof e && /^[0-9]+$/.test(e)
          ? parseInt(e, 10)
          : NaN;
      }
      function s(e, t) {
        var r, s;
        let d,
          c,
          u,
          {
            src: f,
            sizes: p,
            unoptimized: h = !1,
            priority: m = !1,
            loading: g,
            className: b,
            quality: _,
            width: S,
            height: y,
            fill: I = !1,
            style: v,
            overrideSrc: x,
            onLoad: E,
            onLoadingComplete: j,
            placeholder: w = "empty",
            blurDataURL: T,
            fetchPriority: O,
            decoding: R = "async",
            layout: C,
            objectFit: A,
            objectPosition: k,
            lazyBoundary: N,
            lazyRoot: P,
            ...L
          } = e,
          { imgConf: D, showAltText: M, blurComplete: G, defaultLoader: U } = t,
          z = D || i.imageConfigDefault;
        if ("allSizes" in z) d = z;
        else {
          let e = [...z.deviceSizes, ...z.imageSizes].sort((e, t) => e - t),
            t = z.deviceSizes.sort((e, t) => e - t),
            n = null == (r = z.qualities) ? void 0 : r.sort((e, t) => e - t);
          d = { ...z, allSizes: e, deviceSizes: t, qualities: n };
        }
        if (void 0 === U)
          throw Object.defineProperty(
            Error(
              "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"
            ),
            "__NEXT_ERROR_CODE",
            { value: "E163", enumerable: !1, configurable: !0 }
          );
        let H = L.loader || U;
        delete L.loader, delete L.srcSet;
        let B = "__next_img_default" in H;
        if (B) {
          if ("custom" === d.loader)
            throw Object.defineProperty(
              Error(
                'Image with src "' +
                  f +
                  '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
              ),
              "__NEXT_ERROR_CODE",
              { value: "E252", enumerable: !1, configurable: !0 }
            );
        } else {
          let e = H;
          H = (t) => {
            let { config: r, ...n } = t;
            return e(n);
          };
        }
        if (C) {
          "fill" === C && (I = !0);
          let e = {
            intrinsic: { maxWidth: "100%", height: "auto" },
            responsive: { width: "100%", height: "auto" },
          }[C];
          e && (v = { ...v, ...e });
          let t = { responsive: "100vw", fill: "100vw" }[C];
          t && !p && (p = t);
        }
        let F = "",
          $ = a(S),
          X = a(y);
        if ((s = f) && "object" == typeof s && (o(s) || void 0 !== s.src)) {
          let e = o(f) ? f.default : f;
          if (!e.src)
            throw Object.defineProperty(
              Error(
                "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                  JSON.stringify(e)
              ),
              "__NEXT_ERROR_CODE",
              { value: "E460", enumerable: !1, configurable: !0 }
            );
          if (!e.height || !e.width)
            throw Object.defineProperty(
              Error(
                "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                  JSON.stringify(e)
              ),
              "__NEXT_ERROR_CODE",
              { value: "E48", enumerable: !1, configurable: !0 }
            );
          if (
            ((c = e.blurWidth),
            (u = e.blurHeight),
            (T = T || e.blurDataURL),
            (F = e.src),
            !I)
          )
            if ($ || X) {
              if ($ && !X) {
                let t = $ / e.width;
                X = Math.round(e.height * t);
              } else if (!$ && X) {
                let t = X / e.height;
                $ = Math.round(e.width * t);
              }
            } else ($ = e.width), (X = e.height);
        }
        let J = !m && ("lazy" === g || void 0 === g);
        (!(f = "string" == typeof f ? f : F) ||
          f.startsWith("data:") ||
          f.startsWith("blob:")) &&
          ((h = !0), (J = !1)),
          d.unoptimized && (h = !0),
          B &&
            !d.dangerouslyAllowSVG &&
            f.split("?", 1)[0].endsWith(".svg") &&
            (h = !0);
        let q = a(_),
          W = Object.assign(
            I
              ? {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: A,
                  objectPosition: k,
                }
              : {},
            M ? {} : { color: "transparent" },
            v
          ),
          V =
            G || "empty" === w
              ? null
              : "blur" === w
              ? 'url("data:image/svg+xml;charset=utf-8,' +
                (0, n.getImageBlurSvg)({
                  widthInt: $,
                  heightInt: X,
                  blurWidth: c,
                  blurHeight: u,
                  blurDataURL: T || "",
                  objectFit: W.objectFit,
                }) +
                '")'
              : 'url("' + w + '")',
          K = l.includes(W.objectFit)
            ? "fill" === W.objectFit
              ? "100% 100%"
              : "cover"
            : W.objectFit,
          Y = V
            ? {
                backgroundSize: K,
                backgroundPosition: W.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: V,
              }
            : {},
          Z = (function (e) {
            let {
              config: t,
              src: r,
              unoptimized: n,
              width: i,
              quality: l,
              sizes: o,
              loader: a,
            } = e;
            if (n) return { src: r, srcSet: void 0, sizes: void 0 };
            let { widths: s, kind: d } = (function (e, t, r) {
                let { deviceSizes: n, allSizes: i } = e;
                if (r) {
                  let e = /(^|\s)(1?\d?\d)vw/g,
                    t = [];
                  for (let n; (n = e.exec(r)); ) t.push(parseInt(n[2]));
                  if (t.length) {
                    let e = 0.01 * Math.min(...t);
                    return {
                      widths: i.filter((t) => t >= n[0] * e),
                      kind: "w",
                    };
                  }
                  return { widths: i, kind: "w" };
                }
                return "number" != typeof t
                  ? { widths: n, kind: "w" }
                  : {
                      widths: [
                        ...new Set(
                          [t, 2 * t].map(
                            (e) => i.find((t) => t >= e) || i[i.length - 1]
                          )
                        ),
                      ],
                      kind: "x",
                    };
              })(t, i, o),
              c = s.length - 1;
            return {
              sizes: o || "w" !== d ? o : "100vw",
              srcSet: s
                .map(
                  (e, n) =>
                    a({ config: t, src: r, quality: l, width: e }) +
                    " " +
                    ("w" === d ? e : n + 1) +
                    d
                )
                .join(", "),
              src: a({ config: t, src: r, quality: l, width: s[c] }),
            };
          })({
            config: d,
            src: f,
            unoptimized: h,
            width: $,
            quality: q,
            sizes: p,
            loader: H,
          });
        return {
          props: {
            ...L,
            loading: J ? "lazy" : g,
            fetchPriority: O,
            width: $,
            height: X,
            decoding: R,
            className: b,
            style: { ...W, ...Y },
            sizes: Z.sizes,
            srcSet: Z.srcSet,
            src: x || Z.src,
          },
          meta: { unoptimized: h, priority: m, placeholder: w, fill: I },
        };
      }
    },
    42464: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "AmpStateContext", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = r(88229)._(r(12115)).default.createContext({});
    },
    51193: (e, t) => {
      function r(e) {
        var t;
        let { config: r, src: n, width: i, quality: l } = e,
          o =
            l ||
            (null == (t = r.qualities)
              ? void 0
              : t.reduce((e, t) =>
                  Math.abs(t - 75) < Math.abs(e - 75) ? t : e
                )) ||
            75;
        return (
          r.path +
          "?url=" +
          encodeURIComponent(n) +
          "&w=" +
          i +
          "&q=" +
          o +
          (n.startsWith("/_next/static/media/"), "")
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        (r.__next_img_default = !0);
      let n = r;
    },
    61787: (e, t, r) => {
      r.d(t, { s: () => p });
      var n = r(95155),
        i = r(12115);
      let l = { horizontalrule: (0, n.jsx)("hr", {}) },
        o = { linebreak: (0, n.jsx)("br", {}) };
      var a = r(95653),
        s = r(79737);
      let d = {
        IS_NORMAL: 0,
        IS_TOKEN: 1,
        IS_SEGMENTED: 2,
        IS_BOLD: 1,
        IS_ITALIC: 2,
        IS_STRIKETHROUGH: 4,
        IS_UNDERLINE: 8,
        IS_CODE: 16,
        IS_SUBSCRIPT: 32,
        IS_SUPERSCRIPT: 64,
        IS_HIGHLIGHT: 128,
        IS_DIRECTIONLESS: 1,
        IS_UNMERGEABLE: 2,
        IS_ALIGN_LEFT: 1,
        IS_ALIGN_CENTER: 2,
        IS_ALIGN_RIGHT: 3,
        IS_ALIGN_JUSTIFY: 4,
        IS_ALIGN_START: 5,
        IS_ALIGN_END: 6,
      };
      d.IS_BOLD,
        d.IS_ITALIC,
        d.IS_STRIKETHROUGH,
        d.IS_UNDERLINE,
        d.IS_CODE,
        d.IS_SUBSCRIPT,
        d.IS_SUPERSCRIPT,
        d.IS_HIGHLIGHT;
      let c = "֑-߿יִ-﷽ﹰ-ﻼ",
        u = "A-Za-z\xc0-\xd6\xd8-\xf6\xf8-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿";
      RegExp("^[^" + u + "]*[" + c + "]"),
        RegExp("^[^" + c + "]*[" + u + "]"),
        d.IS_BOLD,
        d.IS_CODE,
        d.IS_HIGHLIGHT,
        d.IS_ITALIC,
        d.IS_STRIKETHROUGH,
        d.IS_SUBSCRIPT,
        d.IS_SUPERSCRIPT,
        d.IS_UNDERLINE,
        d.IS_DIRECTIONLESS,
        d.IS_UNMERGEABLE,
        d.IS_ALIGN_CENTER,
        d.IS_ALIGN_END,
        d.IS_ALIGN_JUSTIFY,
        d.IS_ALIGN_LEFT,
        d.IS_ALIGN_RIGHT,
        d.IS_ALIGN_START,
        d.IS_ALIGN_CENTER,
        d.IS_ALIGN_END,
        d.IS_ALIGN_JUSTIFY,
        d.IS_ALIGN_LEFT,
        d.IS_ALIGN_RIGHT,
        d.IS_ALIGN_START,
        d.IS_NORMAL,
        d.IS_SEGMENTED,
        d.IS_TOKEN,
        d.IS_NORMAL,
        d.IS_SEGMENTED,
        d.IS_TOKEN;
      let f = {
          paragraph: ({ node: e, nodesToJSX: t }) => {
            let r = t({ nodes: e.children });
            return r?.length
              ? (0, n.jsx)("p", { children: r })
              : (0, n.jsx)("p", { children: (0, n.jsx)("br", {}) });
          },
          text: ({ node: e }) => {
            let t = e.text;
            return (
              e.format & d.IS_BOLD &&
                (t = (0, n.jsx)("strong", { children: t })),
              e.format & d.IS_ITALIC && (t = (0, n.jsx)("em", { children: t })),
              e.format & d.IS_STRIKETHROUGH &&
                (t = (0, n.jsx)("span", {
                  style: { textDecoration: "line-through" },
                  children: t,
                })),
              e.format & d.IS_UNDERLINE &&
                (t = (0, n.jsx)("span", {
                  style: { textDecoration: "underline" },
                  children: t,
                })),
              e.format & d.IS_CODE && (t = (0, n.jsx)("code", { children: t })),
              e.format & d.IS_SUBSCRIPT &&
                (t = (0, n.jsx)("sub", { children: t })),
              e.format & d.IS_SUPERSCRIPT &&
                (t = (0, n.jsx)("sup", { children: t })),
              t
            );
          },
          ...o,
          quote: ({ node: e, nodesToJSX: t }) => {
            let r = t({ nodes: e.children });
            return (0, n.jsx)("blockquote", { children: r });
          },
          table: ({ node: e, nodesToJSX: t }) => {
            let r = t({ nodes: e.children });
            return (0, n.jsx)("div", {
              className: "lexical-table-container",
              children: (0, n.jsx)("table", {
                className: "lexical-table",
                style: { borderCollapse: "collapse" },
                children: (0, n.jsx)("tbody", { children: r }),
              }),
            });
          },
          tablecell: ({ node: e, nodesToJSX: t }) => {
            let r = t({ nodes: e.children }),
              i = e.headerState > 0 ? "th" : "td",
              l = `lexical-table-cell-header-${e.headerState}`,
              o = {
                backgroundColor: e.backgroundColor || void 0,
                border: "1px solid #ccc",
                padding: "8px",
              },
              a = e.colSpan && e.colSpan > 1 ? e.colSpan : void 0,
              s = e.rowSpan && e.rowSpan > 1 ? e.rowSpan : void 0;
            return (0, n.jsx)(i, {
              className: `lexical-table-cell ${l}`,
              colSpan: a,
              rowSpan: s,
              style: o,
              children: r,
            });
          },
          tablerow: ({ node: e, nodesToJSX: t }) => {
            let r = t({ nodes: e.children });
            return (0, n.jsx)("tr", {
              className: "lexical-table-row",
              children: r,
            });
          },
          heading: ({ node: e, nodesToJSX: t }) => {
            let r = t({ nodes: e.children }),
              i = e.tag;
            return (0, n.jsx)(i, { children: r });
          },
          ...l,
          list: ({ node: e, nodesToJSX: t }) => {
            let r = t({ nodes: e.children }),
              i = e.tag;
            return (0, n.jsx)(i, {
              className: `list-${e?.listType}`,
              children: r,
            });
          },
          listitem: ({ node: e, nodesToJSX: t, parent: r }) => {
            let i = e.children.some((e) => "list" === e.type),
              l = t({ nodes: e.children });
            if (!("listType" in r) || r?.listType !== "check")
              return (0, n.jsx)("li", {
                className: `${i ? "nestedListItem" : ""}`,
                style: i ? { listStyleType: "none" } : void 0,
                value: e?.value,
                children: l,
              });
            {
              let t = (0, s.A)();
              return (0, n.jsx)("li", {
                "aria-checked": e.checked ? "true" : "false",
                className: `list-item-checkbox${
                  e.checked
                    ? " list-item-checkbox-checked"
                    : " list-item-checkbox-unchecked"
                }${i ? " nestedListItem" : ""}`,
                role: "checkbox",
                style: { listStyleType: "none" },
                tabIndex: -1,
                value: e?.value,
                children: i
                  ? l
                  : (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsx)("input", {
                          checked: e.checked,
                          id: t,
                          readOnly: !0,
                          type: "checkbox",
                        }),
                        (0, n.jsx)("label", { htmlFor: t, children: l }),
                        (0, n.jsx)("br", {}),
                      ],
                    }),
              });
            }
          },
          ...(0, a.A)({}),
          upload: ({ node: e }) => {
            if ("object" != typeof e.value) return null;
            let t = e.value,
              r = t.url;
            if (!t.mimeType.startsWith("image"))
              return (0, n.jsx)("a", {
                href: r,
                rel: "noopener noreferrer",
                children: t.filename,
              });
            if (!t.sizes || !Object.keys(t.sizes).length)
              return (0, n.jsx)("img", {
                alt: t.filename,
                height: t.height,
                src: r,
                width: t.width,
              });
            let i = [];
            for (let e in t.sizes) {
              let r = t.sizes[e];
              if (
                !r ||
                !r.width ||
                !r.height ||
                !r.mimeType ||
                !r.filesize ||
                !r.filename ||
                !r.url
              )
                continue;
              let l = r?.url;
              i.push(
                (0, n.jsx)(
                  "source",
                  {
                    media: `(max-width: ${r.width}px)`,
                    srcSet: l,
                    type: r.mimeType,
                  },
                  e
                )
              );
            }
            return (
              i.push(
                (0, n.jsx)(
                  "img",
                  {
                    alt: t?.filename,
                    height: t?.height,
                    src: r,
                    width: t?.width,
                  },
                  "image"
                )
              ),
              (0, n.jsx)("picture", { children: i })
            );
          },
          tab: "	",
        },
        p = ({
          className: e,
          converters: t,
          data: r,
          disableContainer: l,
          disableIndent: o,
          disableTextAlign: a,
        }) => {
          if (!r) return null;
          let s = {};
          s = t
            ? "function" == typeof t
              ? t({ defaultConverters: f })
              : t
            : f;
          let d =
            r &&
            !Array.isArray(r) &&
            "object" == typeof r &&
            "root" in r &&
            (function ({
              converters: e,
              data: t,
              disableIndent: r,
              disableTextAlign: l,
            }) {
              return !(function (e) {
                let t = !!e?.root?.children?.length,
                  r = !1;
                if (
                  e?.root?.children?.length === 1 &&
                  e?.root?.children[0]?.type === "paragraph"
                ) {
                  let t = e?.root?.children[0];
                  if (t?.children && t?.children?.length !== 0) {
                    if (t?.children?.length === 1) {
                      let e = t?.children[0];
                      e?.type !== "text" || e?.text?.length || (r = !0);
                    }
                  } else r = !0;
                }
                return !!t && !r;
              })(t)
                ? (0, n.jsx)(n.Fragment, {})
                : (function e({
                    converters: t,
                    disableIndent: r,
                    disableTextAlign: l,
                    nodes: o,
                    parent: a,
                  }) {
                    let s = t.unknown;
                    return o
                      .map((o, d) => {
                        let c;
                        "block" === o.type
                          ? (c = t?.blocks?.[o?.fields?.blockType]) ||
                            s ||
                            console.error(
                              `Lexical => JSX converter: Blocks converter: found ${o?.fields?.blockType} block, but no converter is provided`
                            )
                          : "inlineBlock" === o.type
                          ? (c = t?.inlineBlocks?.[o?.fields?.blockType]) ||
                            s ||
                            console.error(
                              `Lexical => JSX converter: Inline Blocks converter: found ${o?.fields?.blockType} inline block, but no converter is provided`
                            )
                          : (c = t[o.type]);
                        try {
                          let u;
                          !c && s && (c = s),
                            (u = c
                              ? "function" == typeof c
                                ? c({
                                    childIndex: d,
                                    converters: t,
                                    node: o,
                                    nodesToJSX: (n) =>
                                      e({
                                        converters: n.converters ?? t,
                                        disableIndent: n.disableIndent ?? r,
                                        disableTextAlign:
                                          n.disableTextAlign ?? l,
                                        nodes: n.nodes,
                                        parent: n.parent ?? { ...o, parent: a },
                                      }),
                                    parent: a,
                                  })
                                : c
                              : (0, n.jsx)(
                                  "span",
                                  { children: "unknown node" },
                                  d
                                ));
                          let f = {};
                          if (
                            !l &&
                            (!Array.isArray(l) || !l?.includes(o.type)) &&
                            "format" in o &&
                            o.format
                          )
                            switch (o.format) {
                              case "center":
                                f.textAlign = "center";
                                break;
                              case "end":
                              case "right":
                                f.textAlign = "right";
                                break;
                              case "justify":
                                f.textAlign = "justify";
                                break;
                              case "left":
                                break;
                              case "start":
                                f.textAlign = "left";
                            }
                          if (
                            (!r &&
                              (!Array.isArray(r) || !r?.includes(o.type)) &&
                              "indent" in o &&
                              o.indent &&
                              "listitem" !== o.type &&
                              (f.paddingInlineStart = `${
                                2 * Number(o.indent)
                              }em`),
                            i.isValidElement(u))
                          ) {
                            if (f.textAlign || f.paddingInlineStart) {
                              let e = { ...f, ...(u?.props?.style ?? {}) };
                              return i.cloneElement(u, { key: d, style: e });
                            }
                            return i.cloneElement(u, { key: d });
                          }
                          return u;
                        } catch (e) {
                          return (
                            console.error(
                              "Error converting lexical node to JSX:",
                              e,
                              "node:",
                              o
                            ),
                            null
                          );
                        }
                      })
                      .filter(Boolean);
                  })({
                    converters: e,
                    disableIndent: r,
                    disableTextAlign: l,
                    nodes: t?.root?.children,
                    parent: t?.root,
                  });
            })({
              converters: s,
              data: r,
              disableIndent: o,
              disableTextAlign: a,
            });
          return l
            ? (0, n.jsx)(n.Fragment, { children: d })
            : (0, n.jsx)("div", {
                className: e ?? "payload-richtext",
                children: d,
              });
        };
    },
    62146: (e, t, r) => {
      function n(e) {
        let { reason: t, children: r } = e;
        return r;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "BailoutToCSR", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        r(45262);
    },
    64054: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          bindSnapshot: function () {
            return o;
          },
          createAsyncLocalStorage: function () {
            return l;
          },
          createSnapshot: function () {
            return a;
          },
        });
      let r = Object.defineProperty(
        Error(
          "Invariant: AsyncLocalStorage accessed in runtime where it is not available"
        ),
        "__NEXT_ERROR_CODE",
        { value: "E504", enumerable: !1, configurable: !0 }
      );
      class n {
        disable() {
          throw r;
        }
        getStore() {}
        run() {
          throw r;
        }
        exit() {
          throw r;
        }
        enterWith() {
          throw r;
        }
        static bind(e) {
          return e;
        }
      }
      let i = "undefined" != typeof globalThis && globalThis.AsyncLocalStorage;
      function l() {
        return i ? new i() : new n();
      }
      function o(e) {
        return i ? i.bind(e) : n.bind(e);
      }
      function a() {
        return i
          ? i.snapshot()
          : function (e, ...t) {
              return e(...t);
            };
      }
    },
    70901: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "RouterContext", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = r(88229)._(r(12115)).default.createContext(null);
    },
    75100: (e, t) => {
      function r(e) {
        let {
            widthInt: t,
            heightInt: r,
            blurWidth: n,
            blurHeight: i,
            blurDataURL: l,
            objectFit: o,
          } = e,
          a = n ? 40 * n : t,
          s = i ? 40 * i : r,
          d = a && s ? "viewBox='0 0 " + a + " " + s + "'" : "";
        return (
          "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
          d +
          "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
          (d
            ? "none"
            : "contain" === o
            ? "xMidYMid"
            : "cover" === o
            ? "xMidYMid slice"
            : "none") +
          "' style='filter: url(%23b);' href='" +
          l +
          "'/%3E%3C/svg%3E"
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImageBlurSvg", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
    },
    79737: (e, t, r) => {
      r.d(t, { A: () => s });
      let n = {
        randomUUID:
          "undefined" != typeof crypto &&
          crypto.randomUUID &&
          crypto.randomUUID.bind(crypto),
      };
      for (var i, l = new Uint8Array(16), o = [], a = 0; a < 256; ++a)
        o.push((a + 256).toString(16).slice(1));
      let s = function (e, t, r) {
        if (n.randomUUID && !t && !e) return n.randomUUID();
        var a =
          (e = e || {}).random ||
          (
            e.rng ||
            function () {
              if (
                !i &&
                !(i =
                  "undefined" != typeof crypto &&
                  crypto.getRandomValues &&
                  crypto.getRandomValues.bind(crypto))
              )
                throw Error(
                  "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
                );
              return i(l);
            }
          )();
        if (((a[6] = (15 & a[6]) | 64), (a[8] = (63 & a[8]) | 128), t)) {
          r = r || 0;
          for (var s = 0; s < 16; ++s) t[r + s] = a[s];
          return t;
        }
        return (function (e, t = 0) {
          return (
            o[e[t + 0]] +
            o[e[t + 1]] +
            o[e[t + 2]] +
            o[e[t + 3]] +
            "-" +
            o[e[t + 4]] +
            o[e[t + 5]] +
            "-" +
            o[e[t + 6]] +
            o[e[t + 7]] +
            "-" +
            o[e[t + 8]] +
            o[e[t + 9]] +
            "-" +
            o[e[t + 10]] +
            o[e[t + 11]] +
            o[e[t + 12]] +
            o[e[t + 13]] +
            o[e[t + 14]] +
            o[e[t + 15]]
          ).toLowerCase();
        })(a);
      };
    },
    85029: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let n = r(12115),
        i = n.useLayoutEffect,
        l = n.useEffect;
      function o(e) {
        let { headManager: t, reduceComponentsToState: r } = e;
        function o() {
          if (t && t.mountedInstances) {
            let i = n.Children.toArray(
              Array.from(t.mountedInstances).filter(Boolean)
            );
            t.updateHead(r(i, e));
          }
        }
        return (
          i(() => {
            var r;
            return (
              null == t ||
                null == (r = t.mountedInstances) ||
                r.add(e.children),
              () => {
                var r;
                null == t ||
                  null == (r = t.mountedInstances) ||
                  r.delete(e.children);
              }
            );
          }),
          i(
            () => (
              t && (t._pendingUpdate = o),
              () => {
                t && (t._pendingUpdate = o);
              }
            )
          ),
          l(
            () => (
              t &&
                t._pendingUpdate &&
                (t._pendingUpdate(), (t._pendingUpdate = null)),
              () => {
                t &&
                  t._pendingUpdate &&
                  (t._pendingUpdate(), (t._pendingUpdate = null));
              }
            )
          ),
          null
        );
      }
    },
    85744: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "workAsyncStorage", {
          enumerable: !0,
          get: function () {
            return n.workAsyncStorageInstance;
          },
        });
      let n = r(17828);
    },
    86752: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ImageConfigContext", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let n = r(88229)._(r(12115)),
        i = r(95840),
        l = n.default.createContext(i.imageConfigDefault);
    },
    95653: (e, t, r) => {
      r.d(t, { A: () => i });
      var n = r(95155);
      let i = ({ internalDocToHref: e }) => ({
        autolink: ({ node: e, nodesToJSX: t }) => {
          let r = t({ nodes: e.children }),
            i = e.fields.newTab ? "noopener noreferrer" : void 0,
            l = e.fields.newTab ? "_blank" : void 0;
          return (0, n.jsx)("a", {
            href: e.fields.url,
            rel: i,
            target: l,
            children: r,
          });
        },
        link: ({ node: t, nodesToJSX: r }) => {
          let i = r({ nodes: t.children }),
            l = t.fields.newTab ? "noopener noreferrer" : void 0,
            o = t.fields.newTab ? "_blank" : void 0,
            a = t.fields.url ?? "";
          return (
            "internal" === t.fields.linkType &&
              (e
                ? (a = e({ linkNode: t }))
                : (console.error(
                    "Lexical => JSX converter: Link converter: found internal link, but internalDocToHref is not provided"
                  ),
                  (a = "#"))),
            (0, n.jsx)("a", { href: a, rel: l, target: o, children: i })
          );
        },
      });
    },
    95840: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          VALID_LOADERS: function () {
            return r;
          },
          imageConfigDefault: function () {
            return n;
          },
        });
      let r = ["default", "imgix", "cloudinary", "akamai", "custom"],
        n = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          loaderFile: "",
          domains: [],
          disableStaticImages: !1,
          minimumCacheTTL: 60,
          formats: ["image/webp"],
          dangerouslyAllowSVG: !1,
          contentSecurityPolicy:
            "script-src 'none'; frame-src 'none'; sandbox;",
          contentDispositionType: "attachment",
          localPatterns: void 0,
          remotePatterns: [],
          qualities: void 0,
          unoptimized: !1,
        };
    },
  },
]);
