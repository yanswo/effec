(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6828],
  {
    4386: (e) => {
      e.exports = {
        header: "AppHeader_header__jEoAR",
        "header-menu--open": "AppHeader_header-menu--open__riFjl",
        "theme-light": "AppHeader_theme-light__BV3Ph",
        "theme-dark": "AppHeader_theme-dark__w7dm0",
        "header-wrapper": "AppHeader_header-wrapper__2hqBf",
      };
    },
    4488: (e, t, l) => {
      "use strict";
      l.r(t), l.d(t, { default: () => g });
      var n = l(95155),
        o = l(12115),
        a = l(38364),
        i = l(52596),
        s = l(60388);
      let r = (0, o.memo)(function (e) {
          let {
              children: t,
              className: l,
              activeClassName: o = "",
              href: a,
              target: r,
              ...u
            } = e,
            c = (0, s.a8)() === a;
          return (0,
          n.jsx)(s.N_, { href: a, target: r, className: (0, i.A)({ [o]: c, active: c }, l), ...u, children: t });
        }),
        u = (e) => {
          let { oneLinkURL: t, params: l } = e;
          if (!window.AF_SMART_SCRIPT) return null;
          let n = window.AF_SMART_SCRIPT.generateOneLinkURL({
            oneLinkURL: t || "https://novapay.oneme/6dt5",
            afParameters: {
              mediaSource: {
                keys: ["pid"],
                defaultValue:
                  (null == l ? void 0 : l.mediaSource) || "landing_eu",
              },
              campaign: {
                keys: ["c"],
                defaultValue: (null == l ? void 0 : l.campaign) || "default",
              },
              adSet: {
                keys: ["af_adset"],
                defaultValue: (null == l ? void 0 : l.adSet) || "default",
              },
              afCustom: [
                {
                  paramKey: "af_android_url",
                  keys: ["af_android_url"],
                  defaultValue:
                    (null == l ? void 0 : l.afAndroidUrl) || "novapay.com",
                },
                {
                  paramKey: "af_ios_url",
                  keys: ["af_ios_url"],
                  defaultValue:
                    (null == l ? void 0 : l.afIosUrl) || "novapay.com",
                },
                {
                  paramKey: "af_web_dp",
                  keys: ["af_web_dp"],
                  defaultValue:
                    (null == l ? void 0 : l.afWebDp) || "novapay.com",
                },
                {
                  paramKey: "af_c_id",
                  keys: ["af_c_id"],
                  defaultValue: (null == l ? void 0 : l.afCId) || "default",
                },
                {
                  paramKey: "af_adset_id",
                  keys: ["af_adset_id"],
                  defaultValue: (null == l ? void 0 : l.afAdsetId) || "default",
                },
                {
                  paramKey: "af_ss_ui",
                  defaultValue: (null == l ? void 0 : l.afSsUi) || "true",
                },
              ],
            },
          });
          return (null == n ? void 0 : n.clickURL) || null;
        };
      var c = l(48565),
        d = l(47650),
        m = l(17652),
        f = l(31857),
        p = l(55160),
        _ = l(51026),
        h = l.n(_);
      let b = null;
      function v(e) {
        let { onClose: t, smartLink: l } = e,
          a = (0, m.c3)("get-app-modal"),
          [s, r] = (0, o.useState)(null),
          u = (0, o.useCallback)(() => {
            r({ visible: !1 }),
              b && clearTimeout(b),
              (b = setTimeout(() => {
                r(null), t();
              }, 200));
          }, [r, t]);
        return ((0, o.useEffect)(
          () => (
            r({ visible: !1 }),
            (document.body.style.overflow = "hidden"),
            (b = setTimeout(() => {
              r({ visible: !0 });
            }, 200)),
            () => {
              b && clearTimeout(b),
                document.body.style.removeProperty("overflow");
            }
          ),
          [r]
        ),
        s)
          ? (0, d.createPortal)(
              (0, n.jsxs)("div", {
                className: (0, i.A)(
                  h().modal,
                  h()[
                    "modal-".concat(
                      (null == s ? void 0 : s.visible) ? "open" : "close"
                    )
                  ],
                  "d-f ai-c js-c"
                ),
                children: [
                  (0, n.jsx)("div", {
                    className: (0, i.A)(h()["modal-close-bg"]),
                    onClick: u,
                  }),
                  (0, n.jsx)("div", {
                    className: (0, i.A)(h()["modal-wrapper"]),
                    children: (0, n.jsxs)("div", {
                      className: h()["modal-content"],
                      children: [
                        (0, n.jsx)("button", {
                          className: h()["modal-btn-close"],
                          onClick: u,
                          children: (0, n.jsx)(p.A, { className: "d-f" }),
                        }),
                        (0, n.jsx)("div", {
                          className: h()["modal-title"],
                          children: a("title"),
                        }),
                        (0, n.jsxs)("div", {
                          className: (0, i.A)(h()["modal-locales"], "d-f fd-c"),
                          children: [
                            (0, n.jsx)("div", {
                              className: h()["modal-text"],
                              children: a("text"),
                            }),
                            l &&
                              (0, n.jsx)(f.h, {
                                value: l,
                                width: 200,
                                height: 200,
                                marginSize: 2,
                                style: {
                                  borderRadius: 6,
                                  margin: "40px auto 0",
                                },
                              }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              document.body
            )
          : null;
      }
      let g = (0, o.memo)(function (e) {
        let {
            link: t,
            children: l,
            size: i,
            color: s = "violet",
            buttonStyle: d,
            icon: m,
            iconPosition: f = "right",
            disabled: p,
            className: _,
            activeClassName: h,
            linkType: b = "link-button",
            onClick: g = () => void 0,
          } = e,
          [w, x] = (0, o.useState)(null),
          k = (0, o.useRef)(g);
        k.current = g;
        let j = (0, o.useMemo)(() => {
            if ("custom" === t.type)
              return {
                label: t.customLabel || "",
                href: t.url || "",
                target: t.newTab ? "_blank" : "_self",
              };
            if ("reference" === t.type) {
              var e, l, n, o, a;
              let i =
                  "object" ==
                  typeof (null == (e = t.reference) ? void 0 : e.value)
                    ? null == (l = t.reference)
                      ? void 0
                      : l.value.title
                    : "",
                s =
                  "object" ==
                  typeof (null == (n = t.reference) ? void 0 : n.value)
                    ? null == (o = t.reference)
                      ? void 0
                      : o.value.slug
                    : "";
              return (
                (s = "home" === s ? "/" : s),
                {
                  label: t.referenceLabel || i || "",
                  href: ""
                    .concat(
                      c.VH[
                        (null == (a = t.reference) ? void 0 : a.relationTo) ||
                          "pages"
                      ]
                    )
                    .concat(s),
                  target: t.newTab ? "_blank" : "_self",
                }
              );
            }
            return "smartLink" === t.type
              ? {
                  label: t.smartLinkLabel,
                  href: "#",
                  smartLinkBaseUrl: t.smartLinkBaseUrl || "",
                  smartLinkParams: t.smartLinkParams || {},
                }
              : null;
          }, [t]),
          L = (0, o.useCallback)(
            (e) => {
              var l, n;
              if (p) return void e.preventDefault();
              if (document.querySelector(".__TAG_ASSISTANT_BADGE")) {
                let t = null == (n = e.target) ? void 0 : n.href;
                if (t) {
                  e.preventDefault(), window.open(t, "_self");
                  return;
                }
              }
              if ("smartLink" === t.type) {
                e.preventDefault();
                let l = window.innerWidth <= 1024,
                  n = u({
                    oneLinkURL: t.smartLinkBaseUrl,
                    params: t.smartLinkParams,
                  });
                l && n && window.open(n, "_self"), !l && n && x(n);
              }
              null == (l = k.current) || l.call(k, e);
            },
            [
              null == t ? void 0 : t.type,
              null == t ? void 0 : t.smartLinkBaseUrl,
              null == t ? void 0 : t.smartLinkParams,
              p,
              x,
            ]
          );
        return j && j.label
          ? (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)(o.Suspense, {
                  children:
                    !!w &&
                    (0, n.jsx)(v, { onClose: () => x(null), smartLink: w }),
                }),
                "link-button" === b &&
                  (0, n.jsxs)(a.default, {
                    rel: "smartLink" === t.type || p ? "nofollow" : void 0,
                    target: j.target || "_self",
                    href: j.href,
                    color: s,
                    size: i,
                    buttonStyle: d,
                    iconPosition: f,
                    icon: m,
                    disabled: p,
                    className: _,
                    onClick: L,
                    children: [j.label, l],
                  }),
                "link" === b &&
                  (0, n.jsxs)(r, {
                    rel: "smartLink" === t.type || p ? "nofollow" : void 0,
                    style: d,
                    href: j.href,
                    onClick: L,
                    target: j.target,
                    className: _,
                    activeClassName: h,
                    children: [
                      (0, n.jsx)("span", {
                        className: "link-label",
                        children: null == j ? void 0 : j.label,
                      }),
                      l,
                    ],
                  }),
              ],
            })
          : null;
      });
    },
    5854: (e, t, l) => {
      "use strict";
      l.r(t), l.d(t, { default: () => s });
      var n = l(95155),
        o = l(12115),
        a = l(97104);
      l(42460);
      var i = l(48565);
      function s(e) {
        let t = (0, o.useMemo)(
          () =>
            e.src
              ? /^(http|https|blob:)/.test(e.src)
                ? e.src
                : "".concat(i.GI).concat(e.src)
              : "",
          [e.src]
        );
        return (0, n.jsx)(a.LazyLoadImage, { ...e, src: t, effect: "blur" });
      }
    },
    12406: (e, t, l) => {
      "use strict";
      l.d(t, { default: () => k });
      var n = l(95155),
        o = l(52596),
        a = l(12115),
        i = l(83717),
        s = l(60388),
        r = l(5854),
        u = l(70122),
        c = l.n(u);
      function d(e) {
        let { logo: t } = e;
        return t.url
          ? (0, n.jsx)(s.N_, {
              className: (0, o.A)(c().logo, "b-logo d-f ai-c jc-c"),
              href: "/",
              children: (0, n.jsx)(r.default, {
                className: c()["logo-image"],
                src: t.url,
                alt: t.alt,
                visibleByDefault: !0,
              }),
            })
          : null;
      }
      var m = l(4488),
        f = l(38394),
        p = l.n(f);
      function _(e) {
        let { menu: t, button: l, isOpenMenu: a, onCloseMenu: i } = e;
        return (0, n.jsxs)("nav", {
          className: (0, o.A)(
            p().menu,
            { [p()["menu--open"]]: a },
            "d-f fd-c ai-c"
          ),
          children: [
            !!t.length &&
              (0, n.jsx)("ul", {
                className: (0, o.A)(p()["menu-list"], "d-f fw-w"),
                children: t.map((e, t) =>
                  (0, n.jsx)(
                    "li",
                    {
                      className: p()["menu-item"],
                      children: (0, n.jsx)(m.default, {
                        link: e.link,
                        className: (0, o.A)(p()["menu-link"], "b-menu-link"),
                        activeClassName: p()["menu-link--active"],
                        onClick: i,
                        linkType: "link",
                      }),
                    },
                    t
                  )
                ),
              }),
            !!l &&
              (0, n.jsx)(m.default, {
                link: l,
                size: "small",
                color: "white",
                className: (0, o.A)(
                  p()["menu-btn-bottom"],
                  "b-menu-btn-bottom w-100"
                ),
              }),
          ],
        });
      }
      var h = l(27552),
        b = l(87714),
        v = l.n(b);
      function g(e) {
        let {
          button: t,
          isShowMenuButton: l,
          isOpenMenu: a,
          headerTheme: s,
          pageLocaleSlugs: r,
          onToggleOpenMenu: u,
        } = e;
        return (0, n.jsxs)("div", {
          className: (0, o.A)(v().actions, "d-f ai-c"),
          children: [
            (0, n.jsx)(h.default, { pageLocaleSlugs: r }),
            !!t &&
              (0, n.jsx)(m.default, {
                size: "small",
                color: s === i.a.light ? "white" : "violet",
                className: (0, o.A)(
                  v()["actions-btn-link"],
                  "b-actions-btn-link"
                ),
                link: t,
              }),
            l &&
              (0, n.jsxs)("button", {
                type: "button",
                onClick: u,
                className: (0, o.A)(v()["actions-btn"], "b-actions-btn", {
                  [v()["btn--open"]]: a,
                }),
                children: [
                  (0, n.jsx)("span", {}),
                  (0, n.jsx)("span", {}),
                  (0, n.jsx)("span", {}),
                  (0, n.jsx)("span", {}),
                  (0, n.jsx)("span", {}),
                  (0, n.jsx)("span", {}),
                ],
              }),
          ],
        });
      }
      var w = l(4386),
        x = l.n(w);
      function k(e) {
        var t, l;
        let {
            menu: s,
            defaultColor: r = i.a.dark,
            logoDark: u,
            logoWhite: c,
            button: m,
            pageLocaleSlugs: f,
          } = e,
          [p, h] = (0, a.useState)(!1),
          [b, v] = (0, a.useState)(r),
          w = (0, a.useRef)(null),
          k = (0, a.useCallback)(() => {
            h(
              (e) => (
                e && document.body.style.removeProperty("overflow"),
                e || (document.body.style.overflow = "hidden"),
                !e
              )
            );
          }, [h]),
          j = (0, a.useCallback)(() => {
            h(!1), document.body.style.removeProperty("overflow");
          }, [h]);
        return (
          (0, a.useEffect)(() => {
            let e = w.current,
              t = document.querySelectorAll("[data-header-theme]");
            if (!e || !t.length) return;
            let l = () => {
                let l = e.offsetHeight,
                  n = i.a.dark;
                t.forEach((e) => {
                  let t = e.getBoundingClientRect();
                  t.top <= l &&
                    t.bottom > l &&
                    (n = e.getAttribute("data-header-theme"));
                }),
                  v(n);
              },
              n = () => {
                j();
              };
            return (
              window.addEventListener("scroll", l, { passive: !0 }),
              window.addEventListener("resize", n, { passive: !0 }),
              l(),
              () => {
                window.removeEventListener("scroll", l),
                  window.removeEventListener("resize", n);
              }
            );
          }, [j]),
          (0, n.jsx)("header", {
            ref: w,
            className: (0, o.A)(x().header, x()["theme-".concat(b)], {
              [x()["header-menu--open"]]: p,
            }),
            children: (0, n.jsxs)("div", {
              className: (0, o.A)(
                x()["header-wrapper"],
                "container d-f ai-c jc-sb"
              ),
              children: [
                u && c && (0, n.jsx)(d, { logo: b === i.a.light || p ? c : u }),
                !!(null == s ? void 0 : s.length) &&
                  (0, n.jsx)(_, {
                    menu: s || [],
                    isOpenMenu: p,
                    button:
                      (null == m || null == (t = m[0]) ? void 0 : t.link) ||
                      void 0,
                    onCloseMenu: j,
                  }),
                (0, n.jsx)(g, {
                  pageLocaleSlugs: f,
                  headerTheme: b,
                  isShowMenuButton: !!(null == s ? void 0 : s.length),
                  isOpenMenu: p,
                  button:
                    (null == m || null == (l = m[0]) ? void 0 : l.link) ||
                    void 0,
                  onToggleOpenMenu: k,
                }),
              ],
            }),
          })
        );
      }
    },
    15210: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => o });
      var n = l(95155);
      function o(e) {
        let { className: t } = e;
        return (0, n.jsx)("svg", {
          className: t,
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, n.jsx)("g", {
            opacity: "0.8",
            children: (0, n.jsx)("path", {
              d: "M12 6L8 10L4 6",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          }),
        });
      }
    },
    24346: (e) => {
      e.exports = {
        "locale-switcher": "LocaleSwitcher_locale-switcher__r6X7q",
        "locale-switcher_btn": "LocaleSwitcher_locale-switcher_btn__Lh2FK",
      };
    },
    24388: (e) => {
      e.exports = { "button-wrapper": "ButtonScrollTop_button-wrapper__1Rz9_" };
    },
    26599: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => n });
      let n = {
        defaultLocale: "en",
        locales: [
          { code: "en", label: "English" },
          { code: "pl", label: "Polskі" },
          { code: "ua", label: "Українська" },
        ],
      };
    },
    27552: (e, t, l) => {
      "use strict";
      l.d(t, { default: () => m });
      var n = l(95155),
        o = l(52596),
        a = l(12115),
        i = l(35695),
        s = l(26599),
        r = l(64820),
        u = l(24346),
        c = l.n(u);
      let d = (0, a.lazy)(() =>
        Promise.all([l.e(8978), l.e(1319)]).then(l.bind(l, 21319))
      );
      function m(e) {
        let { pageLocaleSlugs: t, position: l = "bottom-right" } = e,
          u = (0, i.useParams)(),
          [m, f] = (0, a.useState)(!1),
          p = (0, a.useMemo)(
            () =>
              "object" != typeof t
                ? []
                : s.A.locales.filter((e) => e.code in t),
            [t]
          );
        return t
          ? (0, n.jsxs)("div", {
              className: c()["locale-switcher"],
              children: [
                (0, n.jsx)(a.Suspense, {
                  children:
                    m &&
                    (0, n.jsx)(d, {
                      onClose: () => f(!1),
                      position: l,
                      pageLocaleSlugs: t,
                    }),
                }),
                (0, n.jsx)(r.A, {
                  color: "outline-white",
                  size: "small",
                  className: (0, o.A)(
                    c()["locale-switcher_btn"],
                    "b-locale-switcher_btn"
                  ),
                  onClick: () => f(!0),
                  children: u.locale || s.A.defaultLocale,
                }),
                p.map((e) => {
                  let l = null == t ? void 0 : t[e.code];
                  return (0, n.jsx)(
                    "a",
                    {
                      style: {
                        display: "none",
                        position: "absolute",
                        opacity: "0",
                      },
                      href:
                        l && "home" !== l
                          ? "/".concat(e.code, "/").concat(l)
                          : "/".concat(e.code),
                      children: e.label,
                    },
                    e.code
                  );
                }),
              ],
            })
          : null;
      }
    },
    38364: (e, t, l) => {
      "use strict";
      l.d(t, { default: () => c });
      var n = l(95155),
        o = l(12115),
        a = l(52596),
        i = l(60388),
        s = l(62800),
        r = l(46290),
        u = l.n(r);
      let c = (0, o.memo)(function (e) {
        let {
            children: t,
            size: l = "small",
            rel: r,
            color: c = "violet",
            loading: d = !1,
            disabled: m = !1,
            active: f,
            buttonStyle: p,
            icon: _,
            iconPosition: h = "right",
            href: b,
            target: v = "_self",
            className: g,
            onClick: w = () => void 0,
          } = e,
          x = (0, o.useMemo)(
            () => ("outline-white" === c || "white" === c ? "black" : "white"),
            [c]
          ),
          k = (0, o.useCallback)(
            (e) => {
              d || m || w(e);
            },
            [w, d, m]
          ),
          j = (0, o.useMemo)(() => {
            let e = !1;
            return !d && _ && "left" === h && (e = !0), e;
          }, [d, _, h]),
          L = (0, o.useMemo)(() => {
            let e = !1;
            return (
              !d && _ && "right" === h && (e = !0), t || d || !_ || (e = !0), e
            );
          }, [d, _, h, t]),
          y = (0, o.useMemo)(() => !!t, [t]);
        return (0,
        n.jsxs)(i.N_, { style: p, href: b, target: v, onClick: k, rel: r, className: (0, a.A)(u()["button-wrapper"], u()["button-size-".concat(l)], u()["button-color-".concat(c)], { [u()["button-size-".concat(l, "-only-icon")]]: !y }, { [u()["button-disabled"]]: m }, { [u()["button-".concat(c, "-disabled")]]: m }, { [u()["button-loading"]]: d }, { [u()["button-".concat(c, "-active")]]: f }, "d-if", "jc-c", "ai-c", "cur--pointer", "button-wrapper", g), children: [(0, n.jsx)("span", { className: u()["button-hover-line"] }), j && (0, n.jsx)("div", { className: (0, a.A)(u().icon), children: _ }), d && "left" === h && (0, n.jsx)("div", { className: (0, a.A)(u().icon, u()["loading-icon"], "d-f"), children: (0, n.jsx)(s.A, { color: x }) }), y && (0, n.jsx)("span", { className: (0, a.A)(u()["button-text"], "cur--pointer button-text d-f"), children: t }), L && (0, n.jsx)("div", { className: (0, a.A)(u().icon), children: _ }), d && "right" === h && (0, n.jsx)("div", { className: (0, a.A)(u().icon, u()["loading-icon"], "d-f"), children: (0, n.jsx)(s.A, { color: x }) })] });
      });
    },
    38394: (e) => {
      e.exports = {
        menu: "Menu_menu__hKhTR",
        "menu--open": "Menu_menu--open__VEy_8",
        "menu-list": "Menu_menu-list__nAMf9",
        "menu-link": "Menu_menu-link__qQYfj",
        "menu-link--active": "Menu_menu-link--active__g9Zcw",
        "menu-btn-bottom": "Menu_menu-btn-bottom__cEMeI",
      };
    },
    46290: (e) => {
      e.exports = {
        "button-wrapper": "Button_button-wrapper__yDmDc",
        "button-hover-line": "Button_button-hover-line__TTegF",
        "button-size-small": "Button_button-size-small__R_m08",
        "button-size-large": "Button_button-size-large__ElqqP",
        "button-size-small-only-icon":
          "Button_button-size-small-only-icon__2Ms_2",
        "button-size-large-only-icon":
          "Button_button-size-large-only-icon__d6SgV",
        "button-color-violet": "Button_button-color-violet__oJ_Pm",
        "button-violet-disabled": "Button_button-violet-disabled__0hfpY",
        "button-color-white": "Button_button-color-white__mzwbe",
        "button-white-disabled": "Button_button-white-disabled__VXu0c",
        "button-color-outline-white":
          "Button_button-color-outline-white__UfBPS",
        "button-outline-white-disabled":
          "Button_button-outline-white-disabled__E2oLi",
        "button-loading": "Button_button-loading__k1F2Y",
        "button-disabled": "Button_button-disabled__m0f_1",
        icon: "Button_icon__V2EYJ",
        "button-text": "Button_button-text__eKp_Z",
        "loading-icon": "Button_loading-icon__MUdyC",
        rotate: "Button_rotate__zRD65",
      };
    },
    46779: (e, t, l) => {
      "use strict";
      l.d(t, { default: () => c });
      var n = l(95155),
        o = l(12115),
        a = l(60388),
        i = l(64820);
      function s(e) {
        let { className: t } = e;
        return (0, n.jsx)("svg", {
          className: t,
          width: "28",
          height: "28",
          viewBox: "0 0 28 28",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, n.jsx)("path", {
            d: "M14 5.83203L14 22.1654M14 5.83203L7 12.832M14 5.83203L21 12.832",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }),
        });
      }
      var r = l(24388),
        u = l.n(r);
      function c() {
        let e = (0, a.a8)(),
          t = (0, o.useRef)(null),
          [l, r] = (0, o.useState)("violet"),
          c = (0, o.useCallback)(() => {
            let e = t.current;
            if (e) {
              if (window.pageYOffset >= window.innerHeight) {
                (e.style.opacity = "1"), (e.style.visibility = "visible");
                return;
              }
              (e.style.opacity = "0"), (e.style.visibility = "hidden");
            }
          }, []);
        return (
          (0, o.useEffect)(() => {
            c();
          }, [e, c]),
          (0, o.useEffect)(
            () => (
              window.addEventListener("scroll", c, { passive: !0 }),
              () => {
                window.removeEventListener("scroll", c);
              }
            ),
            [c]
          ),
          (0, o.useEffect)(() => {
            let e = t.current,
              l = document.querySelectorAll("[data-header-theme]");
            if (!e || !l.length) return;
            let n = () => {
              let t = e.getBoundingClientRect(),
                n = t.top + t.height / 2,
                o = t.left + t.width / 2,
                a = "violet";
              l.forEach((e) => {
                let t = e.getBoundingClientRect();
                n >= t.top &&
                  n <= t.bottom &&
                  o >= t.left &&
                  o <= t.right &&
                  (a = e.getAttribute("data-btn-theme"));
              }),
                r(a);
            };
            return (
              n(),
              window.addEventListener("scroll", n, { passive: !0 }),
              () => {
                window.removeEventListener("scroll", n);
              }
            );
          }, []),
          (0, n.jsx)("div", {
            ref: t,
            className: u()["button-wrapper"],
            children: (0, n.jsx)(i.A, {
              color: l,
              type: "button",
              size: "large",
              onClick: () => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              },
              icon: (0, n.jsx)(s, {}),
              className: "b-button-scroll-top",
            }),
          })
        );
      }
    },
    48565: (e, t, l) => {
      "use strict";
      l.d(t, { GI: () => n, VH: () => o });
      let n = "https://novapay.com",
        o = { pages: "/" };
    },
    51026: (e) => {
      e.exports = {
        "modal-open": "SmartLinkModal_modal-open__57z0t",
        "modal-close": "SmartLinkModal_modal-close___zEL_",
        modal: "SmartLinkModal_modal__ls8U3",
        "modal-close-bg": "SmartLinkModal_modal-close-bg__mynrX",
        "modal-btn-close": "SmartLinkModal_modal-btn-close__U_lef",
        "modal-wrapper": "SmartLinkModal_modal-wrapper__bk5ka",
        "modal-content": "SmartLinkModal_modal-content__9SsMj",
        "modal-title": "SmartLinkModal_modal-title__C6Moa",
        "modal-text": "SmartLinkModal_modal-text__1igOQ",
      };
    },
    55160: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => o });
      var n = l(95155);
      function o(e) {
        let { className: t } = e;
        return (0, n.jsx)("svg", {
          className: t,
          width: "32",
          height: "32",
          viewBox: "0 0 32 32",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, n.jsx)("path", {
            d: "M24 8L8 24M8 8L24 24",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }),
        });
      }
    },
    60388: (e, t, l) => {
      "use strict";
      l.d(t, { N_: () => s, a8: () => u, rd: () => c });
      var n = l(30981),
        o = l(49984),
        a = l(26599);
      let i = (0, o.A)({
          localeDetection: !0,
          localePrefix: "always",
          locales: a.A.locales.map((e) => e.code),
          defaultLocale: a.A.defaultLocale,
        }),
        {
          Link: s,
          redirect: r,
          usePathname: u,
          useRouter: c,
          getPathname: d,
        } = (0, n.A)(i);
    },
    62800: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => a });
      var n = l(95155),
        o = l(12115);
      function a(e) {
        let { className: t, color: l = "white" } = e,
          a = (0, o.useMemo)(
            () =>
              "black" === l
                ? [
                    { f: "black", o: 1 },
                    { f: "#666666", o: 1 },
                    { f: "#E5E5E5", o: 1 },
                    { f: "#4D4D4D", o: 1 },
                    { f: "#CCCCCC", o: 1 },
                    { f: "#333333", o: 1 },
                    { f: "#B2B2B2", o: 1 },
                    { f: "black", o: 1 },
                    { f: "#999999", o: 1 },
                    { f: "black", o: 1 },
                    { f: "#808080", o: 1 },
                    { f: "black", o: 1 },
                  ]
                : [
                    { f: "white", o: 1 },
                    { f: "white", o: 0.6 },
                    { f: "white", o: 0.1 },
                    { f: "white", o: 0.7 },
                    { f: "white", o: 0.2 },
                    { f: "white", o: 0.8 },
                    { f: "white", o: 0.3 },
                    { f: "white", o: 1 },
                    { f: "white", o: 0.4 },
                    { f: "white", o: 1 },
                    { f: "white", o: 0.5 },
                    { f: "white", o: 1 },
                  ],
            [l]
          );
        return (0, n.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "none",
          className: t,
          children: [
            (0, n.jsx)("path", {
              d: "M7.68522 4.18328C7.54966 4.31884 7.31787 4.22283 7.31787 4.03112V1.524C7.31787 1.33166 7.55096 1.23593 7.68614 1.37276L8.9321 2.63392C9.01527 2.7181 9.01486 2.85364 8.93118 2.93732L7.68522 4.18328Z",
              fill: a[0].f,
              fillOpacity: a[0].o,
            }),
            (0, n.jsx)("path", {
              d: "M8.71507 11.4167C8.85064 11.2812 9.08243 11.3772 9.08243 11.5689V14.076C9.08243 14.2683 8.84934 14.3641 8.71416 14.2272L7.46819 12.9661C7.38503 12.8819 7.38544 12.7464 7.46911 12.6627L8.71507 11.4167Z",
              fill: a[1].f,
              fillOpacity: a[1].o,
            }),
            (0, n.jsx)("path", {
              d: "M5.94573 4.92704C5.8964 5.11286 5.64671 5.14565 5.55107 4.97887L4.3042 2.80445C4.20899 2.63841 4.36167 2.44002 4.54655 2.48954L6.2496 2.94571C6.36422 2.97641 6.43235 3.09411 6.40191 3.20879L5.94573 4.92704Z",
              fill: a[2].f,
              fillOpacity: a[2].o,
            }),
            (0, n.jsx)("path", {
              d: "M10.4544 10.673C10.5037 10.4871 10.7534 10.4543 10.849 10.6211L12.0959 12.7955C12.1911 12.9616 12.0384 13.16 11.8536 13.1105L10.1505 12.6543C10.0359 12.6236 9.96776 12.5059 9.99821 12.3912L10.4544 10.673Z",
              fill: a[3].f,
              fillOpacity: a[3].o,
            }),
            (0, n.jsx)("path", {
              d: "M4.81113 6.43479C4.86241 6.62008 4.66347 6.77451 4.49669 6.67887L2.32615 5.43423C2.15957 5.3387 2.19203 5.08937 2.37752 5.03969L4.07752 4.58433C4.19164 4.55376 4.30907 4.62092 4.34059 4.73479L4.81113 6.43479Z",
              fill: a[4].f,
              fillOpacity: a[4].o,
            }),
            (0, n.jsx)("path", {
              d: "M11.5891 9.1652C11.5378 8.97991 11.7367 8.82548 11.9035 8.92112L14.0741 10.1658C14.2406 10.2613 14.2082 10.5106 14.0227 10.5603L12.3227 11.0157C12.2086 11.0462 12.0911 10.9791 12.0596 10.8652L11.5891 9.1652Z",
              fill: a[5].f,
              fillOpacity: a[5].o,
            }),
            (0, n.jsx)("path", {
              d: "M4.58318 8.31493C4.71874 8.45049 4.62273 8.68228 4.43102 8.68228H1.9239C1.73156 8.68228 1.63584 8.44919 1.77267 8.31401L3.03382 7.06805C3.118 6.98488 3.25354 6.98529 3.33722 7.06897L4.58318 8.31493Z",
              fill: a[6].f,
              fillOpacity: a[6].o,
            }),
            (0, n.jsx)("path", {
              d: "M11.8166 7.28508C11.681 7.14951 11.777 6.91772 11.9687 6.91772H14.4759C14.6682 6.91772 14.7639 7.15082 14.6271 7.286L13.3659 8.53196C13.2818 8.61513 13.1462 8.61471 13.0625 8.53104L11.8166 7.28508Z",
              fill: a[7].f,
              fillOpacity: a[7].o,
            }),
            (0, n.jsx)("path", {
              d: "M5.32721 10.0543C5.51303 10.1036 5.54582 10.3533 5.37903 10.449L3.20461 11.6958C3.03857 11.791 2.84018 11.6384 2.8897 11.4535L3.34587 9.75043C3.37658 9.63581 3.49427 9.56768 3.60895 9.59812L5.32721 10.0543Z",
              fill: a[8].f,
              fillOpacity: a[8].o,
            }),
            (0, n.jsx)("path", {
              d: "M11.073 5.54569C10.8872 5.49636 10.8544 5.24667 11.0212 5.15103L13.1956 3.90416C13.3616 3.80895 13.56 3.96163 13.5105 4.14651L13.0543 5.84956C13.0236 5.96418 12.9059 6.03231 12.7913 6.00187L11.073 5.54569Z",
              fill: a[9].f,
              fillOpacity: a[9].o,
            }),
            (0, n.jsx)("path", {
              d: "M6.83487 11.189C7.02017 11.1377 7.17459 11.3366 7.07895 11.5034L5.83431 13.674C5.73879 13.8405 5.48946 13.8081 5.43977 13.6226L4.98442 11.9226C4.95385 11.8085 5.02101 11.691 5.13487 11.6595L6.83487 11.189Z",
              fill: a[10].f,
              fillOpacity: a[10].o,
            }),
            (0, n.jsx)("path", {
              d: "M9.565 4.41101C9.3797 4.4623 9.22528 4.26336 9.32092 4.09657L10.5656 1.92604C10.6611 1.75945 10.9104 1.79191 10.9601 1.9774L11.4155 3.6774C11.446 3.79153 11.3789 3.90896 11.265 3.94047L9.565 4.41101Z",
              fill: a[11].f,
              fillOpacity: a[11].o,
            }),
          ],
        });
      }
    },
    64820: (e, t, l) => {
      "use strict";
      l.d(t, { A: () => u });
      var n = l(95155),
        o = l(12115),
        a = l(52596),
        i = l(62800),
        s = l(46290),
        r = l.n(s);
      let u = (0, o.memo)(function (e) {
        let {
            children: t,
            size: l = "small",
            color: s = "violet",
            loading: u = !1,
            disabled: c = !1,
            active: d,
            icon: m,
            iconPosition: f = "right",
            type: p = "button",
            buttonStyle: _,
            className: h,
            onClick: b = () => void 0,
            isStopPropagation: v = !0,
          } = e,
          g = (0, o.useMemo)(
            () => ("outline-white" === s || "white" === s ? "black" : "white"),
            [s]
          ),
          w = (0, o.useCallback)(
            (e) => {
              v && e.stopPropagation(), u || c || b(e);
            },
            [b, u, c, v]
          ),
          x = (0, o.useMemo)(() => {
            let e = !1;
            return !u && m && "left" === f && (e = !0), e;
          }, [u, m, f]),
          k = (0, o.useMemo)(() => {
            let e = !1;
            return (
              !u && m && "right" === f && (e = !0), t || u || !m || (e = !0), e
            );
          }, [u, m, f, t]),
          j = (0, o.useMemo)(() => !!t, [t]);
        return (0,
        n.jsxs)("button", { type: p, onClick: w, style: _, className: (0, a.A)(r()["button-wrapper"], r()["button-size-".concat(l)], r()["button-color-".concat(s)], { [r()["button-size-".concat(l, "-only-icon")]]: !j }, { [r()["button-disabled"]]: c }, { [r()["button-".concat(s, "-disabled")]]: c }, { [r()["button-loading"]]: u }, { [r()["button-".concat(s, "-active")]]: d }, "d-if", "jc-c", "ai-c", "cur--pointer", "button-wrapper", h), children: [(0, n.jsx)("span", { className: r()["button-hover-line"] }), x && (0, n.jsx)("div", { className: (0, a.A)(r().icon, "d-f ai-c jc-c"), children: m }), u && "left" === f && (0, n.jsx)("div", { className: (0, a.A)(r().icon, r()["loading-icon"], "d-f"), children: (0, n.jsx)(i.A, { color: g }) }), j && (0, n.jsx)("span", { className: (0, a.A)(r()["button-text"], "cur--pointer d-f"), children: t }), k && (0, n.jsx)("div", { className: (0, a.A)(r().icon, "d-f ai-c jc-c"), children: m }), u && "right" === f && (0, n.jsx)("div", { className: (0, a.A)(r().icon, r()["loading-icon"], "d-f"), children: (0, n.jsx)(i.A, { color: g }) })] });
      });
    },
    69265: (e) => {
      e.exports = {
        "menu-group": "MenuGroup_menu-group__B5OLv",
        "menu-group--open": "MenuGroup_menu-group--open__ZT6SE",
        "menu-group-icon": "MenuGroup_menu-group-icon__7wygz",
        "menu-group-name": "MenuGroup_menu-group-name__USsIv",
        "menu-group-content": "MenuGroup_menu-group-content__v_HpN",
        "menu-group-list": "MenuGroup_menu-group-list__bowhR",
        "menu-group-link": "MenuGroup_menu-group-link__YZsQ4",
        "menu-group-link_label": "MenuGroup_menu-group-link_label__AqivQ",
      };
    },
    70122: (e) => {
      e.exports = {
        logo: "Logo_logo__dIGtw",
        "logo-image": "Logo_logo-image__8_8BV",
      };
    },
    83717: (e, t, l) => {
      "use strict";
      l.d(t, { a: () => n });
      var n = (function (e) {
        return (e.light = "light"), (e.dark = "dark"), e;
      })({});
    },
    87714: (e) => {
      e.exports = {
        actions: "Actions_actions__ULXWQ",
        "actions-btn-link": "Actions_actions-btn-link__Ch22o",
        "actions-btn": "Actions_actions-btn__f1BSz",
        "btn--open": "Actions_btn--open__LKNCg",
      };
    },
    95809: (e, t, l) => {
      "use strict";
      l.d(t, { default: () => c });
      var n = l(95155),
        o = l(12115),
        a = l(52596),
        i = l(15210),
        s = l(4488),
        r = l(69265),
        u = l.n(r);
      function c(e) {
        let { groupName: t, menu: l } = e,
          [r, c] = (0, o.useState)(!1),
          [d, m] = (0, o.useState)(!1),
          f = (0, o.useRef)(null),
          p = (0, o.useCallback)(() => {
            let e = f.current;
            if (!d && e) {
              if ((m(!0), r)) {
                c(!1),
                  (e.style.height = "".concat(e.clientHeight, "px")),
                  setTimeout(() => (e.style.height = "".concat(0, "px")), 10),
                  setTimeout(() => m(!1), 300);
                return;
              }
              c(!0),
                (e.style.height = "".concat(e.scrollHeight, "px")),
                setTimeout(() => {
                  m(!1), (e.style.height = "auto");
                }, 300);
            }
          }, [d, r, c, m]);
        return (0, n.jsxs)("div", {
          className: (0, a.A)(u()["menu-group"], {
            [u()["menu-group--open"]]: r,
          }),
          children: [
            (0, n.jsxs)("div", {
              className: (0, a.A)(
                u()["menu-group-name"],
                "b-menu-group-name d-f ai-c jc-sb"
              ),
              onClick: p,
              children: [
                t,
                (0, n.jsx)("div", {
                  className: u()["menu-group-icon"],
                  children: (0, n.jsx)(i.A, { className: "d-f" }),
                }),
              ],
            }),
            (0, n.jsx)("div", {
              ref: f,
              className: (0, a.A)(u()["menu-group-content"]),
              children: (0, n.jsx)("ul", {
                className: (0, a.A)(
                  u()["menu-group-list"],
                  "d-f fd-c ai-fs jc-fs"
                ),
                children: l.map((e, t) =>
                  (0, n.jsx)(
                    "li",
                    {
                      className: u()["menu-group-item"],
                      children: (0, n.jsx)(s.default, {
                        link: e.link,
                        disabled: !!e.isDisabledLink,
                        className: (0, a.A)(
                          u()["menu-group-link"],
                          "b-menu-group-link d-f ai-c"
                        ),
                        linkType: "link",
                        children:
                          e.label &&
                          (0, n.jsx)("span", {
                            className: u()["menu-group-link_label"],
                            children: e.label,
                          }),
                      }),
                    },
                    t
                  )
                ),
              }),
            }),
          ],
        });
      }
    },
  },
]);
