(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6039],
  {
    980: (e) => {
      e.exports = {
        "white-block": "RichTextWhiteBlock_white-block__gNLu0",
        "white-block_title": "RichTextWhiteBlock_white-block_title__0ngiI",
        "white-block_text": "RichTextWhiteBlock_white-block_text__OaLHT",
        "white-block_content": "RichTextWhiteBlock_white-block_content__PZL6w",
      };
    },
    1164: (e, t, n) => {
      "use strict";
      n.d(t, { default: () => c });
      var r = n(95155),
        o = n(52596),
        a = n(12115),
        i = n(5854),
        s = n(93814),
        l = n.n(s);
      function c(e) {
        let { icon: t, text: n, backgroundColor: s, iconOffset: c } = e,
          _ = (0, a.useRef)(null);
        return (
          (0, a.useEffect)(() => {
            let e,
              t = _.current;
            if (!t) return;
            let n = () => {
              let r = t.getBoundingClientRect(),
                o = window.innerHeight;
              if (r.top < o - 10 && r.bottom > 0) {
                let e = Math.min(1, Math.max(0, (o - r.top) / r.height));
                t.style.transform = "translateX(".concat(150 * (1 - e), "px)");
              }
              e = requestAnimationFrame(n);
            };
            return (
              (e = requestAnimationFrame(n)),
              () => {
                e && cancelAnimationFrame(e);
              }
            );
          }, []),
          (0, r.jsxs)("div", {
            ref: _,
            className: (0, o.A)(
              l()["benefits-card"],
              l()["benefits-card-bg-".concat(s)]
            ),
            children: [
              (null == t ? void 0 : t.url) &&
                (0, r.jsx)(i.default, {
                  src: t.url,
                  alt: t.alt,
                  wrapperClassName: (0, o.A)(
                    l()["benefits-card_icon"],
                    "d-f ia-fe"
                  ),
                  wrapperProps: {
                    style: {
                      display: "flex",
                      ...((null == c ? void 0 : c.top) ? { top: c.top } : {}),
                      ...((null == c ? void 0 : c.right)
                        ? { right: c.right }
                        : {}),
                      ...((null == c ? void 0 : c.bottom)
                        ? { bottom: c.bottom }
                        : {}),
                    },
                  },
                  className: l()["benefits-card_icon-inner"],
                }),
              (0, r.jsx)("div", {
                className: l()["benefits-card_text"],
                children: n,
              }),
            ],
          })
        );
      }
    },
    8698: (e) => {
      e.exports = {
        "faq-groups": "FaqGroups_faq-groups__Ve0wV",
        "faq-groups_title": "FaqGroups_faq-groups_title__ryo_A",
        "faq-groups_content": "FaqGroups_faq-groups_content__H8vDf",
        "faq-groups_sidebar": "FaqGroups_faq-groups_sidebar__e_5bU",
        "faq-groups_body": "FaqGroups_faq-groups_body__AAAdi",
      };
    },
    9054: (e) => {
      e.exports = {
        partners: "Partners_partners__xpoOn",
        "partners-head": "Partners_partners-head__bQn_w",
        "partners-title": "Partners_partners-title__Y8jq2",
        "partners-text": "Partners_partners-text__NdMCm",
        "partners-link": "Partners_partners-link__N_oOX",
        "partners-link-icon": "Partners_partners-link-icon__5jEWr",
        "partners-logos": "Partners_partners-logos__VaPR7",
        "partners-logos-item": "Partners_partners-logos-item__XZZ8S",
      };
    },
    11906: (e, t, n) => {
      "use strict";
      n.d(t, { default: () => c });
      var r = n(95155),
        o = n(52596),
        a = n(12115),
        i = n(43063),
        s = n.n(i);
      let l = (0, a.forwardRef)((e, t) => {
        let {
            children: n,
            wrapperClassName: i,
            autoScroll: l = !0,
            autoHeight: c = !1,
            autoScrollTime: _ = 5e3,
            isShowDots: u = !0,
            id: d,
            dataHeaderTheme: m,
          } = e,
          [p, f] = (0, a.useState)(!1),
          [h, b] = (0, a.useState)(0),
          [g, A] = (0, a.useState)("auto"),
          x = (0, a.useRef)(null),
          v = (0, a.useRef)(null),
          w = (0, a.useRef)([]),
          k = a.Children.count(n),
          j = (0, a.useCallback)(() => {
            l &&
              (v.current && clearInterval(v.current),
              (v.current = setInterval(() => {
                b((e) => (e + 1) % k);
              }, _)));
          }, [b, k, l, _]),
          q = (0, a.useCallback)(() => {
            p ||
              (f(!0),
              b((e) => (e + 1) % k),
              j(),
              setTimeout(() => {
                f(!1);
              }, 350));
          }, [p, k, j, f]),
          N = (0, a.useCallback)(() => {
            p ||
              (f(!0),
              b((e) => (0 === e ? k - 1 : e - 1)),
              j(),
              setTimeout(() => {
                f(!1);
              }, 350));
          }, [p, k, j, f]),
          C = (0, a.useCallback)(
            (e) => {
              b(e), j();
            },
            [j, b]
          );
        (0, a.useEffect)(() => {
          if (p) return;
          let e = x.current,
            t = { startX: 0, endX: 0 };
          j();
          let n = (e) => {
              (t.startX = e.touches[0].clientX), (t.endX = 0);
            },
            r = (e) => {
              t.endX = e.touches[0].clientX;
            },
            o = () => {
              Math.abs(t.endX - t.startX) > 40 &&
                0 !== t.endX &&
                (t.endX < t.startX ? q() : N());
            },
            a = (e) => {
              t.startX = e.clientX;
            },
            i = (e) => {
              Math.abs(e.clientX - t.startX) > 30 &&
                (e.clientX < t.startX ? q() : N());
            };
          if (e)
            return (
              e.addEventListener("touchstart", n),
              e.addEventListener("touchmove", r),
              e.addEventListener("touchend", o),
              e.addEventListener("mousedown", a),
              e.addEventListener("mouseup", i),
              () => {
                e.removeEventListener("touchstart", n),
                  e.removeEventListener("touchmove", r),
                  e.removeEventListener("touchend", o),
                  e.removeEventListener("mousedown", a),
                  e.removeEventListener("mouseup", i);
              }
            );
        }, [q, N, j, p]);
        let y = (0, a.useCallback)(() => k > 1, [k]),
          F = (0, a.useCallback)(() => {
            b(0);
          }, [b]),
          T = (0, a.useCallback)(() => {
            if (c && w.current[h]) {
              var e;
              A((null == (e = w.current[h]) ? void 0 : e.offsetHeight) || 0);
              return;
            }
            A(
              w.current.reduce(
                (e, t) => (t ? Math.max(e, t.offsetHeight) : e),
                0
              )
            );
          }, [h, c, A]);
        return (
          (0, a.useEffect)(() => {
            let e = window.innerWidth;
            T();
            let t = () => {
              let t = window.innerWidth;
              t !== e && ((e = t), T());
            };
            return (
              window.addEventListener("resize", t),
              () => {
                window.removeEventListener("resize", t);
              }
            );
          }, [T]),
          (0, a.useImperativeHandle)(
            t,
            () => ({ next: q, prev: N, reset: F, canPaginate: y }),
            [q, N, F, y]
          ),
          (0, r.jsxs)("div", {
            ref: x,
            className: (0, o.A)(s()["swiper-fade"], i, "hide-scroll d-f ai-s"),
            style: { height: g },
            id: d,
            "data-header-theme": m,
            children: [
              a.Children.map(n, (e, t) =>
                (0, r.jsx)("div", {
                  ref: (e) => {
                    e && (w.current[t] = e);
                  },
                  className: (0, o.A)(s()["swiper-fade-slide"], {
                    [s()["swiper-fade-slide--current"]]: t === h,
                  }),
                  children: e,
                })
              ),
              u &&
                k > 1 &&
                (0, r.jsx)("div", {
                  className: (0, o.A)(
                    s()["swiper-fade-dots"],
                    "d-f ai-c jc-c fw-w"
                  ),
                  children: Array(k)
                    .fill("")
                    .map((e, t) =>
                      (0, r.jsx)(
                        "div",
                        {
                          onClick: () => C(t),
                          className: (0, o.A)(s()["swiper-fade-dots-item"], {
                            [s()["swiper-fade-dots-item--current"]]: t === h,
                          }),
                        },
                        t
                      )
                    ),
                }),
            ],
          })
        );
      });
      l.displayName = "SwiperFade";
      let c = l;
    },
    14820: (e) => {
      e.exports = {
        head: "Head_head__yLSrn",
        "head-btn": "Head_head-btn__0s7Fw",
        "head-title": "Head_head-title__xOIuK",
        "head-text": "Head_head-text__HWG_U",
      };
    },
    18790: (e) => {
      e.exports = {
        "content-grid": "ContentGrid_content-grid__BAYUZ",
        "content-grid_title": "ContentGrid_content-grid_title__sDDi2",
        "content-grid_subtitle": "ContentGrid_content-grid_subtitle__A2ip7",
        "content-grid_content": "ContentGrid_content-grid_content__VIDkS",
        "content-grid_left-card": "ContentGrid_content-grid_left-card__SKRF9",
        "content-grid_left-card_image":
          "ContentGrid_content-grid_left-card_image__Zb1bH",
        "content-grid_left-card_image-inner":
          "ContentGrid_content-grid_left-card_image-inner__eCDlh",
        "content-grid_left-card_text":
          "ContentGrid_content-grid_left-card_text__gKbaP",
        "content-grid_top-text": "ContentGrid_content-grid_top-text__hdSEL",
        "content-grid_top-text_text":
          "ContentGrid_content-grid_top-text_text__HcmYV",
        "content-grid_top-image": "ContentGrid_content-grid_top-image__D7nDN",
        "content-grid_top-image_image":
          "ContentGrid_content-grid_top-image_image__FXPE8",
        "content-grid_top-image_image-inner":
          "ContentGrid_content-grid_top-image_image-inner__2FX7d",
        "content-grid_top-image_text":
          "ContentGrid_content-grid_top-image_text__PRvdK",
        "content-grid_card-bottom":
          "ContentGrid_content-grid_card-bottom__L_loX",
        "content-grid_card-bottom_image":
          "ContentGrid_content-grid_card-bottom_image__LOLrx",
        "content-grid_card-bottom_image-inner":
          "ContentGrid_content-grid_card-bottom_image-inner__qXvpC",
        "content-grid_card-bottom_text":
          "ContentGrid_content-grid_card-bottom_text__sNDjc",
      };
    },
    24343: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => r });
      let r = {
        src: "/_next/static/media/coins-3.d63dd0d1.png",
        height: 2020,
        width: 2545,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAALVBMVEVeRbWflcmDbrttT6pyWq2PfMSbj8aId71wUqyDcb2HdrOLc8N8ZrmVicOLd8KMUWwDAAAADnRSTlMBYC6KVBN6sOE+nWP3/TtO0ecAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAxSURBVHicJcpJFgAQDMDQdKDUcP/jesjqL4Km8uq7Sb3I3aIXQNaMOoCiKmLmf8TtABXdALh9z1PdAAAAAElFTkSuQmCC",
        blurWidth: 8,
        blurHeight: 6,
      };
    },
    24752: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => r });
      let r = {
        src: "/_next/static/media/coins-4.667aba86.png",
        height: 1982,
        width: 1642,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAAOVBMVEVtWrCJeMGXjsmNfsJ7XbSDZr2hmMqViMeHdbaAabdwV6trU6l/b72Eb8FuUKd0VrKDbr6bjsyPesRm1aacAAAAEHRSTlMBK1lTIhGmcrY/r4Nizu7peYf1fwAAAAlwSFlzAAALEwAACxMBAJqcGAAAADVJREFUeJxj4OTgZAABTiF+ZjZWBgYOAT4OZlYGBnZBAV4mdgYGRiYedjZGsBIEYGGB0NxcACg9AQHHLgdBAAAAAElFTkSuQmCC",
        blurWidth: 7,
        blurHeight: 8,
      };
    },
    24954: (e) => {
      e.exports = {
        faqs: "Faqs_faqs__2Su2Z",
        "faqs-container": "Faqs_faqs-container__oTJve",
        "faqs-head": "Faqs_faqs-head__7Xdkc",
        "faqs-title": "Faqs_faqs-title___xR5t",
        "faqs-text": "Faqs_faqs-text__UJIyy",
        "faqs-btn": "Faqs_faqs-btn__IOylo",
        "faqs-items": "Faqs_faqs-items__IPcaV",
      };
    },
    28563: (e, t, n) => {
      "use strict";
      n.d(t, { default: () => _ });
      var r = n(95155),
        o = n(52596),
        a = n(12115),
        i = n(5854),
        s = n(87889),
        l = n(73441),
        c = n.n(l);
      function _(e) {
        let { backgroundImage: t, title: n, text: l } = e,
          _ = (0, a.useRef)(null);
        return (
          (0, a.useEffect)(() => {
            let e,
              t = _.current;
            if (!t) return;
            let n = () => {
              let r = t.getBoundingClientRect(),
                o = window.innerHeight;
              if (r.top < o && r.bottom > 0) {
                let e = Math.min(
                  1,
                  Math.max(0, (o - r.top) / (1.3 * r.height))
                );
                (t.style.transform = "translateY(".concat(
                  150 * (1 - e),
                  "px)"
                )),
                  (t.style.opacity = "1");
              } else
                (t.style.transform = "translateY(".concat(150, "px)")),
                  (t.style.opacity = "0");
              e = requestAnimationFrame(n);
            };
            return (
              (e = requestAnimationFrame(n)),
              () => {
                e && cancelAnimationFrame(e);
              }
            );
          }, []),
          (0, r.jsxs)("div", {
            ref: _,
            className: (0, o.A)(c()["intro-card"]),
            children: [
              "object" == typeof t &&
                (null == t ? void 0 : t.url) &&
                (0, r.jsx)(i.default, {
                  src: t.url || "",
                  alt: t.alt,
                  wrapperClassName: c()["intro-card_image"],
                  className: c()["intro-card_image-inner"],
                }),
              (0, r.jsx)("div", {
                className: c()["intro-card_title"],
                dangerouslySetInnerHTML: { __html: n || "" },
              }),
              l &&
                (0, r.jsx)(s.A, { className: c()["intro-card_text"], data: l }),
            ],
          })
        );
      }
    },
    29038: (e) => {
      e.exports = {
        steps: "Steps_steps__nHvAA",
        "steps-container": "Steps_steps-container__KIDiq",
        "steps-content": "Steps_steps-content__Sguz3",
        "b-has-items": "Steps_b-has-items__ULRdV",
        "steps-inner": "Steps_steps-inner__uVI8A",
        "steps-blocks": "Steps_steps-blocks__7csSt",
        "steps-text": "Steps_steps-text__fEDbq",
        "steps-btn": "Steps_steps-btn__GYL0n",
      };
    },
    33086: (e) => {
      e.exports = {
        features: "Features_features__AmDIU",
        "features-wrapper": "Features_features-wrapper___zCDR",
        "features-top-icon": "Features_features-top-icon__XM8m_",
        "features-bottom-icon": "Features_features-bottom-icon__33zPe",
        "features-icon": "Features_features-icon__b6miQ",
        "features-content": "Features_features-content__sbFqK",
        "features-block": "Features_features-block__FGwTw",
        "features-block_image": "Features_features-block_image__YhgNU",
        "features-block_image-inner":
          "Features_features-block_image-inner__XW8ac",
        "features-block_content": "Features_features-block_content__rE1tn",
        "features-block_title": "Features_features-block_title__eqzkN",
        "features-block_text": "Features_features-block_text__3rVz6",
      };
    },
    36709: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => r });
      let r = {
        src: "/_next/static/media/coins-1.477e8882.png",
        height: 1234,
        width: 1598,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAANlBMVEVlWqyIdr6Ea7yMfLeLecOTe7mckch8ZbSelsuMfr5rU6lwV61wUalvT6x9aLhwVKp5Wq9zVLAD2Cd+AAAAEnRSTlMBrznH/BCBI3FfdLhrl/TyWtdhMgEjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nCXKyREAIAgEwUVAwNv8k7XU+fagFsPLWnc3UwCRaYgD0ERT+GqOLfHHxekAGnMA6nFbxhEAAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 6,
      };
    },
    43063: (e) => {
      e.exports = {
        "swiper-fade": "SwiperFade_swiper-fade__fbzzF",
        "swiper-fade-slide": "SwiperFade_swiper-fade-slide__UBq4Q",
        "swiper-fade-slide--current":
          "SwiperFade_swiper-fade-slide--current__RX_Yc",
        "swiper-fade-dots": "SwiperFade_swiper-fade-dots___PSH9",
        "swiper-fade-dots-item": "SwiperFade_swiper-fade-dots-item__VUMMx",
        "swiper-fade-dots-item--current":
          "SwiperFade_swiper-fade-dots-item--current__4_cgb",
      };
    },
    43838: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => r });
      let r = {
        src: "/_next/static/media/coins-2.7831dc0e.png",
        height: 1859,
        width: 1954,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAANlBMVEV9aaFwWK6hmdFuUqt1W6iIfLSXisSNe8BwVq52WK+Cbbd4YLKJebyQgsmIb7uZi8iXjsaRfc7eMdjhAAAAEXRSTlMBaJHeGSlXPkeH87+wTN55sRovMxYAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA0SURBVHicJYpbDgAgCMOmooBv739ZA/ysS1MAgCRbACrBpUG+7Gx9nGonv9Lc1LkpGvLkAxosAMhXVORuAAAAAElFTkSuQmCC",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    43871: (e, t, n) => {
      "use strict";
      n.d(t, { default: () => c });
      var r = n(95155),
        o = n(52596),
        a = n(83717),
        i = n(87889),
        s = n(69227),
        l = n.n(s);
      function c(e) {
        let { label: t, text: n } = e;
        return (0, r.jsxs)("div", {
          className: (0, o.A)(l()["step-block"], "d-f fd-c ai-fs js-fs"),
          "data-header-theme": a.a.dark,
          children: [
            (0, r.jsx)("div", {
              className: (0, o.A)(l()["step-block_label"], "d-if"),
              children: t,
            }),
            n &&
              (0, r.jsx)("div", {
                className: l()["step-block_content"],
                children: (0, r.jsx)(i.A, {
                  data: n,
                  className: l()["step-block_text"],
                }),
              }),
          ],
        });
      }
    },
    45844: (e) => {
      e.exports = {
        "tooltip-open": "Tooltip_tooltip-open__CXzKE",
        "tooltip-close": "Tooltip_tooltip-close__Z92Ml",
        tooltip: "Tooltip_tooltip__SAWsy",
        "tooltip-inner": "Tooltip_tooltip-inner__7k0g_",
        "tooltip-arrow": "Tooltip_tooltip-arrow__DPuh3",
        "tooltip-content": "Tooltip_tooltip-content__3Ypt7",
      };
    },
    53134: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => c });
      var r = n(95155),
        o = n(12115),
        a = n(47650),
        i = n(52596),
        s = n(45844),
        l = n.n(s);
      function c(e) {
        let { children: t, text: n, width: s, className: c } = e,
          [_, u] = (0, o.useState)(null),
          d = (0, o.useRef)(null),
          m = (0, o.useRef)(null),
          p = (0, o.useRef)(null),
          f = (0, o.useRef)(null);
        (f.current = null),
          (0, o.useEffect)(() => {
            var e, t, n, r;
            if (!(null == _ ? void 0 : _.visible) || !d.current) return;
            let o = m.current,
              a = null == (e = p.current) ? void 0 : e.getBoundingClientRect(),
              i = null == (t = d.current) ? void 0 : t.getBoundingClientRect();
            if (!a || !i || !o) return;
            let s =
              a.left + i.width > (null == (n = window) ? void 0 : n.innerWidth);
            (d.current.style.left = "".concat(
              s
                ? (null == (r = window) ? void 0 : r.innerWidth) - i.width
                : a.left,
              "px"
            )),
              (d.current.style.top = "".concat(a.top + a.height + 10, "px")),
              (o.style.left = "".concat(a.left + a.width / 2, "px")),
              (o.style.top = "".concat(a.top + a.height + 2, "px"));
          }, [null == _ ? void 0 : _.visible]);
        let h = (0, o.useCallback)(() => {
            u({ visible: !1 }),
              f.current && clearTimeout(f.current),
              (f.current = setTimeout(() => {
                u({ visible: !0 });
              }, 10));
          }, [u]),
          b = (0, o.useCallback)(() => {
            u({ visible: !1 }),
              f.current && clearTimeout(f.current),
              (f.current = setTimeout(() => {
                u(null);
              }, 300));
          }, [u]);
        return (
          (0, o.useEffect)(() => {
            let e = (e) => {
              p.current && !p.current.contains(e.target) && b();
            };
            return (
              document.addEventListener("mousedown", e, { passive: !0 }),
              document.addEventListener("touchstart", e, { passive: !0 }),
              () => {
                document.removeEventListener("mousedown", e),
                  document.removeEventListener("touchstart", e);
              }
            );
          }, [b]),
          (0, r.jsxs)("div", {
            ref: p,
            className: (0, i.A)(l().tooltip, "d-if", c),
            onMouseEnter: h,
            onMouseLeave: b,
            onTouchStart: h,
            children: [
              _ &&
                (0, a.createPortal)(
                  (0, r.jsxs)("div", {
                    ref: d,
                    className: (0, i.A)(
                      l()["tooltip-inner"],
                      l()[
                        "tooltip-".concat(
                          (null == _ ? void 0 : _.visible) ? "open" : "close"
                        )
                      ],
                      "tooltip-inner"
                    ),
                    children: [
                      (0, r.jsx)("div", {
                        className: l()["tooltip-arrow"],
                        ref: m,
                      }),
                      (0, r.jsx)("div", {
                        className: l()["tooltip-content"],
                        style: { width: s },
                        children: n,
                      }),
                    ],
                  }),
                  document.body
                ),
              t,
            ],
          })
        );
      }
    },
    54222: (e) => {
      e.exports = {
        feature: "Feature_feature___saaA",
        "feature-wrapper": "Feature_feature-wrapper__gg13H",
        "feature-content": "Feature_feature-content__KMBgY",
        "feature-head": "Feature_feature-head__srQ3M",
        "feature-title": "Feature_feature-title__v_bSn",
        "feature-text": "Feature_feature-text__qurae",
        "feature-btn-wrapper": "Feature_feature-btn-wrapper__H0Op2",
        "feature-image": "Feature_feature-image__LffXx",
        "feature-image-inner": "Feature_feature-image-inner__vx2un",
        "feature-icon": "Feature_feature-icon__WsXOG",
        "feature-icon-mobile": "Feature_feature-icon-mobile__U4T_A",
        "feature-icon-desktop": "Feature_feature-icon-desktop__UrzOf",
      };
    },
    54815: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => g });
      var r = n(95155),
        o = n(52596),
        a = n(12115),
        i = n(83717),
        s = n(15210);
      function l(e) {
        let { className: t } = e;
        return (0, r.jsx)("svg", {
          className: t,
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, r.jsx)("path", {
            d: "M5 12H19M19 12L13 18M19 12L13 6",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "square",
          }),
        });
      }
      var c = n(4488),
        _ = n(77369),
        u = n.n(_);
      function d(e) {
        let { type: t, document: n, newTab: a, documentName: i, link: s } = e;
        return "link" === t && "object" == typeof s
          ? (0, r.jsx)(c.default, {
              className: (0, o.A)(
                u().document,
                "b-document-link d-f ai-c jc-sb"
              ),
              link: s,
              linkType: "link",
              children: (0, r.jsx)("span", {
                className: (0, o.A)(u()["document-icon"], "d-f f-n"),
                children: (0, r.jsx)(l, {
                  className: (0, o.A)(u()["document-icon_right"], "d-f"),
                }),
              }),
            })
          : "file" === t && n
          ? (0, r.jsxs)("a", {
              className: (0, o.A)(
                u().document,
                "b-document-link d-f ai-c jc-sb"
              ),
              href: n.url || "",
              target: a ? "_blank" : "_self",
              children: [
                (0, r.jsx)("span", {
                  className: u()["document-name"],
                  children: i || n.filename || "File",
                }),
                (0, r.jsx)("span", {
                  className: (0, o.A)(u()["document-icon"], "d-f f-n"),
                  children: (0, r.jsx)(l, {
                    className: (0, o.A)(u()["document-icon_right"], "d-f"),
                  }),
                }),
              ],
            })
          : null;
      }
      var m = n(66761),
        p = n.n(m);
      let f = (0, a.forwardRef)((e, t) => {
        let { groupName: n, items: i, isOpen: l, onToggleOpen: c } = e,
          [_, u] = (0, a.useState)(null),
          m = (0, a.useRef)(null),
          f = (0, a.useMemo)(
            () => ((null == i ? void 0 : i.length) ? i : []),
            [i]
          );
        return (
          (0, a.useEffect)(() => {
            let e, t;
            if (l)
              return (
                u({ visible: !1 }),
                (e = setTimeout(() => {
                  let e = m.current;
                  e &&
                    ((e.style.height = "".concat(e.scrollHeight, "px")),
                    u({ visible: !0 }));
                }, 10)),
                (t = setTimeout(() => {
                  let e = m.current;
                  e && (e.style.height = "auto");
                }, 300)),
                () => {
                  clearTimeout(e), clearTimeout(t);
                }
              );
            if (!l) {
              let n = m.current;
              return (
                n && (n.style.height = "".concat(n.scrollHeight, "px")),
                u({ visible: !1 }),
                (e = setTimeout(() => {
                  n && (n.style.height = "".concat(0, "px"));
                }, 10)),
                (t = setTimeout(() => u(null), 300)),
                () => {
                  clearTimeout(e), clearTimeout(t);
                }
              );
            }
          }, [l]),
          (0, r.jsxs)("div", {
            className: (0, o.A)(p()["document-group"], {
              [p()["document-group--open"]]: l,
            }),
            ref: t,
            children: [
              (0, r.jsxs)("div", {
                className: (0, o.A)(
                  p()["document-group-name"],
                  "d-f ai-c jc-sb"
                ),
                onClick: c,
                children: [
                  n,
                  (0, r.jsx)("div", {
                    className: p()["document-group-icon"],
                    children: (0, r.jsx)(s.A, { className: "d-f" }),
                  }),
                ],
              }),
              _ &&
                (0, r.jsx)("div", {
                  ref: m,
                  className: (0, o.A)(p()["document-group-content"]),
                  children: (0, r.jsx)("div", {
                    className: (0, o.A)(
                      p()["document-group-list"],
                      "d-f fd-c ai-fs jc-fs"
                    ),
                    children:
                      !!(null == f ? void 0 : f.length) &&
                      f.map((e) => {
                        var t;
                        return (0, r.jsx)(
                          d,
                          {
                            type: e.type,
                            document:
                              "object" == typeof e.document &&
                              (null == (t = e.document) ? void 0 : t.url)
                                ? e.document
                                : void 0,
                            newTab: e.newTab,
                            documentName: e.documentName,
                            link: e.link,
                          },
                          e.id
                        );
                      }),
                  }),
                }),
            ],
          })
        );
      });
      f.displayName = "DocumentGroup";
      var h = n(59294),
        b = n.n(h);
      function g(e) {
        let { attributes: t, title: n, groups: s } = e,
          [l, c] = (0, a.useState)(0),
          _ = (0, a.useRef)(null),
          u = (0, a.useRef)([]),
          m = (0, a.useMemo)(() => {
            var e;
            return "number" != typeof l
              ? []
              : null == s || null == (e = s[l])
              ? void 0
              : e.items;
          }, [s, l]),
          p = (e) => {
            var t;
            if (window.innerWidth >= 768) return void c(e);
            let n = null == (t = u.current) ? void 0 : t[e],
              r = e === l;
            c(r ? null : e),
              n &&
                !r &&
                (n.scrollIntoView({ behavior: "smooth" }),
                _.current && clearTimeout(_.current),
                (_.current = setTimeout(() => {
                  n.scrollIntoView({ behavior: "smooth" });
                }, 300)));
          };
        return (0, r.jsx)("div", {
          className: (0, o.A)(
            b()["document-groups"],
            null == t ? void 0 : t.attributeClass
          ),
          id: (null == t ? void 0 : t.attributeId) || void 0,
          "data-header-theme": i.a.dark,
          "data-btn-theme": "violet",
          children: (0, r.jsxs)("div", {
            className: (0, o.A)(b()["document-groups_container"], "container"),
            children: [
              (0, r.jsx)("h1", {
                className: (0, o.A)(b()["document-groups_title"], "h3"),
                dangerouslySetInnerHTML: { __html: n || "" },
              }),
              !!(null == s ? void 0 : s.length) &&
                (0, r.jsxs)("div", {
                  className: (0, o.A)(
                    b()["document-groups_content"],
                    "d-f ai-fs jc-sb"
                  ),
                  children: [
                    (0, r.jsx)("div", {
                      className: (0, o.A)(
                        b()["document-groups_sidebar"],
                        "d-f fd-c ai-fs js-fs"
                      ),
                      children: s.map((e, t) =>
                        (0, r.jsx)(
                          f,
                          {
                            ref: (e) => {
                              e && (u.current[t] = e);
                            },
                            groupName: e.groupName,
                            items: e.items || [],
                            isOpen: t === l,
                            onToggleOpen: () => p(t),
                          },
                          e.id
                        )
                      ),
                    }),
                    (0, r.jsx)("div", {
                      className: (0, o.A)(b()["document-groups_body"], "fd-c"),
                      children:
                        !!(null == m ? void 0 : m.length) &&
                        m.map((e) => {
                          var t;
                          return (0, r.jsx)(
                            d,
                            {
                              type: e.type,
                              document:
                                "object" == typeof e.document &&
                                (null == (t = e.document) ? void 0 : t.url)
                                  ? e.document
                                  : void 0,
                              newTab: e.newTab,
                              documentName: e.documentName,
                              link: e.link,
                            },
                            e.id
                          );
                        }),
                    }),
                  ],
                }),
            ],
          }),
        });
      }
    },
    54965: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => f });
      var r = n(95155),
        o = n(52596),
        a = n(17652),
        i = n(83717),
        s = n(12115),
        l = n(60388),
        c = n(87889),
        _ = n(64820);
      function u(e) {
        let { className: t } = e;
        return (0, r.jsx)("svg", {
          className: t,
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, r.jsx)("path", {
            d: "M5 12H19M5 12L11 18M5 12L11 6",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }),
        });
      }
      var d = n(14820),
        m = n.n(d),
        p = n(48565);
      function f(e) {
        let {
            attributes: t,
            text: n,
            title: d,
            linkBack: f,
            showButton: h,
          } = e,
          b = (0, a.c3)(),
          g = (function (e) {
            let { push: t, back: n } = (0, l.rd)();
            return (0, s.useCallback)(
              () =>
                e
                  ? void t(e)
                  : window.history.length > 1
                  ? void n()
                  : void t("/"),
              [e, t, n]
            );
          })(
            (0, s.useMemo)(() => {
              if (
                "object" != typeof (null == f ? void 0 : f.value) ||
                !(null == f ? void 0 : f.value.slug)
              )
                return;
              let e =
                "home" === f.value.slug
                  ? "/"
                  : null == f
                  ? void 0
                  : f.value.slug;
              return ""
                .concat(p.VH[(null == f ? void 0 : f.relationTo) || "pages"])
                .concat(e);
            }, [f])
          );
        return (0, r.jsx)("div", {
          className: (0, o.A)(m().head, null == t ? void 0 : t.attributeClass),
          id: (null == t ? void 0 : t.attributeId) || void 0,
          "data-header-theme": i.a.light,
          "data-btn-theme": "white",
          children: (0, r.jsxs)("div", {
            className: (0, o.A)(m()["head-container"], "container"),
            children: [
              h &&
                (0, r.jsx)(_.A, {
                  color: "outline-white",
                  className: (0, o.A)(m()["head-btn"], "b-head-btn"),
                  iconPosition: "left",
                  icon: (0, r.jsx)(u, {}),
                  onClick: g,
                  children: b("button-text-go-back"),
                }),
              (0, r.jsx)("h1", {
                className: (0, o.A)(m()["head-title"], "h1"),
                dangerouslySetInnerHTML: { __html: d || "" },
              }),
              n && (0, r.jsx)(c.A, { className: m()["head-text"], data: n }),
            ],
          }),
        });
      }
    },
    55714: (e) => {
      e.exports = {
        "intro-cards": "IntroCards_intro-cards__b7Vcx",
        "intro-cards-head": "IntroCards_intro-cards-head__V_kAJ",
        "intro-cards-title": "IntroCards_intro-cards-title__z_8J4",
        "intro-cards-text": "IntroCards_intro-cards-text__LHraX",
        "intro-cards-content": "IntroCards_intro-cards-content__BK1uU",
      };
    },
    59294: (e) => {
      e.exports = {
        "document-groups": "DocumentGroups_document-groups__pqfY5",
        "document-groups_title": "DocumentGroups_document-groups_title__exGIO",
        "document-groups_content":
          "DocumentGroups_document-groups_content__ugSLX",
        "document-groups_sidebar":
          "DocumentGroups_document-groups_sidebar__NsNrZ",
        "document-groups_body": "DocumentGroups_document-groups_body__5e1CR",
      };
    },
    64685: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => p });
      var r = n(95155),
        o = n(52596),
        a = n(12115),
        i = n(83717),
        s = n(70301),
        l = n(15210),
        c = n(82704),
        _ = n.n(c);
      let u = (0, a.forwardRef)((e, t) => {
        let { groupName: n, items: i, isOpen: c, onToggleOpen: u } = e,
          [d, m] = (0, a.useState)(null),
          p = (0, a.useRef)(null);
        return (
          (0, a.useEffect)(() => {
            let e, t;
            if (c)
              return (
                m({ visible: !1 }),
                (e = setTimeout(() => {
                  let e = p.current;
                  e &&
                    ((e.style.height = "".concat(e.scrollHeight, "px")),
                    m({ visible: !0 }));
                }, 10)),
                (t = setTimeout(() => {
                  let e = p.current;
                  e && (e.style.height = "auto");
                }, 300)),
                () => {
                  clearTimeout(e), clearTimeout(t);
                }
              );
            if (!c) {
              let n = p.current;
              return (
                n && (n.style.height = "".concat(n.scrollHeight, "px")),
                m({ visible: !1 }),
                (e = setTimeout(() => {
                  n && (n.style.height = "".concat(0, "px"));
                }, 10)),
                (t = setTimeout(() => m(null), 300)),
                () => {
                  clearTimeout(e), clearTimeout(t);
                }
              );
            }
          }, [c]),
          (0, r.jsxs)("div", {
            className: (0, o.A)(_()["faq-group"], {
              [_()["faq-group--open"]]: c,
            }),
            ref: t,
            children: [
              (0, r.jsxs)("div", {
                className: (0, o.A)(_()["faq-group-name"], "d-f ai-c jc-sb"),
                onClick: u,
                children: [
                  n,
                  (0, r.jsx)("div", {
                    className: _()["faq-group-icon"],
                    children: (0, r.jsx)(l.A, { className: "d-f" }),
                  }),
                ],
              }),
              d &&
                (0, r.jsx)("div", {
                  ref: p,
                  className: (0, o.A)(_()["faq-group-content"]),
                  children: (0, r.jsx)("div", {
                    className: (0, o.A)(
                      _()["faq-group-list"],
                      "d-f fd-c ai-fs jc-fs"
                    ),
                    children:
                      !!(null == i ? void 0 : i.length) &&
                      i.map((e) =>
                        (0, r.jsx)(
                          s.default,
                          {
                            question: e.question,
                            answer: e.answer,
                            size: "small",
                          },
                          e.id
                        )
                      ),
                  }),
                }),
            ],
          })
        );
      });
      u.displayName = "FaqGroup";
      var d = n(8698),
        m = n.n(d);
      function p(e) {
        let { attributes: t, title: n, groups: l } = e,
          [c, _] = (0, a.useState)(0),
          d = (0, a.useRef)(null),
          p = (0, a.useRef)([]),
          f = (0, a.useMemo)(() => {
            var e;
            return "number" != typeof c
              ? []
              : null == l || null == (e = l[c])
              ? void 0
              : e.items;
          }, [l, c]),
          h = (e) => {
            var t;
            if (window.innerWidth >= 768) return void _(e);
            let n = null == (t = p.current) ? void 0 : t[e],
              r = e === c;
            _(r ? null : e),
              n &&
                !r &&
                (n.scrollIntoView({ behavior: "smooth" }),
                d.current && clearTimeout(d.current),
                (d.current = setTimeout(() => {
                  n.scrollIntoView({ behavior: "smooth" });
                }, 300)));
          };
        return (0, r.jsx)("div", {
          className: (0, o.A)(
            m()["faq-groups"],
            null == t ? void 0 : t.attributeClass
          ),
          id: (null == t ? void 0 : t.attributeId) || void 0,
          "data-header-theme": i.a.dark,
          "data-btn-theme": "violet",
          children: (0, r.jsxs)("div", {
            className: (0, o.A)(m()["faq-groups_container"], "container"),
            children: [
              (0, r.jsx)("h1", {
                className: (0, o.A)(m()["faq-groups_title"], "h3"),
                dangerouslySetInnerHTML: { __html: n || "" },
              }),
              !!(null == l ? void 0 : l.length) &&
                (0, r.jsxs)("div", {
                  className: (0, o.A)(
                    m()["faq-groups_content"],
                    "d-f ai-fs jc-sb"
                  ),
                  children: [
                    (0, r.jsx)("div", {
                      className: (0, o.A)(
                        m()["faq-groups_sidebar"],
                        "d-f fd-c ai-fs js-fs"
                      ),
                      children: l.map((e, t) =>
                        (0, r.jsx)(
                          u,
                          {
                            ref: (e) => {
                              e && (p.current[t] = e);
                            },
                            groupName: e.groupName,
                            items: e.items || [],
                            isOpen: t === c,
                            onToggleOpen: () => h(t),
                          },
                          e.id
                        )
                      ),
                    }),
                    (0, r.jsx)("div", {
                      className: (0, o.A)(m()["faq-groups_body"], "fd-c"),
                      children:
                        !!(null == f ? void 0 : f.length) &&
                        f.map((e) =>
                          (0, r.jsx)(
                            s.default,
                            {
                              question: e.question,
                              answer: e.answer,
                              size: "small",
                            },
                            e.id
                          )
                        ),
                    }),
                  ],
                }),
            ],
          }),
        });
      }
    },
    65032: (e) => {
      e.exports = {
        hero: "Hero_hero__Yk6bS",
        "hero-block": "Hero_hero-block__679Zy",
        "hero-block--bottom": "Hero_hero-block--bottom__5mA84",
        "hero-block-wrapper": "Hero_hero-block-wrapper__KpLHA",
        "hero-block-icon": "Hero_hero-block-icon__RI_Z2",
        "hero-block--top-right": "Hero_hero-block--top-right__bb0oT",
        "hero-block-icon-inner": "Hero_hero-block-icon-inner__jk58L",
        "hero-block-content": "Hero_hero-block-content__ll8ds",
        "hero-block-image": "Hero_hero-block-image__nBlzn",
        "hero-block-image-inner": "Hero_hero-block-image-inner__VF_PP",
        "b-has-mobile": "Hero_b-has-mobile__UEQv8",
        "hero-block-icon--mobile": "Hero_hero-block-icon--mobile__vi65Z",
        "hero-block-text": "Hero_hero-block-text__kzOZT",
        "hero-block-btn-mobile": "Hero_hero-block-btn-mobile__9wpda",
        "hero-block-btn-desktop": "Hero_hero-block-btn-desktop__XWG7N",
      };
    },
    66761: (e) => {
      e.exports = {
        "document-group": "DocumentGroup_document-group__JRdf4",
        "document-group--open": "DocumentGroup_document-group--open____e5F",
        "document-group-name": "DocumentGroup_document-group-name__5USly",
        "document-group-icon": "DocumentGroup_document-group-icon__DW_UR",
        "document-group-content": "DocumentGroup_document-group-content__in_FW",
        "document-group-list": "DocumentGroup_document-group-list__sO6E2",
      };
    },
    69227: (e) => {
      e.exports = {
        "step-block": "StepBlock_step-block__k7d01",
        "step-block_label": "StepBlock_step-block_label__HDKXd",
        "step-block_content": "StepBlock_step-block_content__JQjQ3",
        "step-block_text": "StepBlock_step-block_text__7agz0",
      };
    },
    70301: (e, t, n) => {
      "use strict";
      n.d(t, { default: () => u });
      var r = n(95155),
        o = n(52596),
        a = n(12115),
        i = n(87889);
      function s(e) {
        let { className: t } = e;
        return (0, r.jsx)("svg", {
          className: t,
          width: "40",
          height: "40",
          viewBox: "0 0 40 40",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, r.jsx)("path", {
            d: "M18 -0.00195312H22V17.998H40V21.998H22V39.998H18V21.998H0L4.77012e-08 17.998H18V-0.00195312Z",
            fill: "currentColor",
          }),
        });
      }
      function l(e) {
        let { className: t } = e;
        return (0, r.jsx)("svg", {
          className: t,
          width: "40",
          height: "40",
          viewBox: "0 0 40 40",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, r.jsx)("path", {
            d: "M0 21.998L4.77012e-08 17.998L40 17.998V21.998L0 21.998Z",
            fill: "currentColor",
          }),
        });
      }
      var c = n(91644),
        _ = n.n(c);
      function u(e) {
        let { answer: t, question: n, size: c = "large" } = e,
          [u, d] = (0, a.useState)(!1),
          [m, p] = (0, a.useState)(!1),
          f = (0, a.useRef)(null),
          h = (0, a.useCallback)(() => {
            let e = f.current;
            if (!m && e) {
              if ((p(!0), u)) {
                d(!1),
                  (e.style.height = "".concat(e.clientHeight, "px")),
                  setTimeout(() => (e.style.height = "".concat(0, "px")), 10),
                  setTimeout(() => p(!1), 300);
                return;
              }
              d(!0),
                (e.style.height = "".concat(e.scrollHeight, "px")),
                setTimeout(() => {
                  p(!1), (e.style.height = "auto");
                }, 300);
            }
          }, [m, u, d, p]);
        return (0, r.jsxs)("div", {
          className: (0, o.A)(_()["faq-item"], _()["faq-item-".concat(c)], {
            [_()["faq-item--open"]]: u,
          }),
          itemScope: !0,
          itemProp: "mainEntity",
          itemType: "https://schema.org/Question",
          children: [
            (0, r.jsxs)("div", {
              className: (0, o.A)(_()["faq-item_head"], "d-f jc-sb ai-c"),
              onClick: h,
              itemProp: "name",
              children: [
                n,
                (0, r.jsxs)("div", {
                  className: (0, o.A)(_()["faq-item_icon"]),
                  children: [
                    u && (0, r.jsx)(l, { className: "d-f" }),
                    !u && (0, r.jsx)(s, { className: "d-f" }),
                  ],
                }),
              ],
            }),
            (0, r.jsx)("div", {
              ref: f,
              className: _()["faq-item_content"],
              itemScope: !0,
              itemProp: "acceptedAnswer",
              itemType: "https://schema.org/Answer",
              children:
                t &&
                (0, r.jsx)(i.A, {
                  data: t,
                  className: (0, o.A)(_()["faq-item_text"], "rich-text"),
                }),
            }),
          ],
        });
      }
    },
    73146: (e) => {
      e.exports = { "rich-text": "RichText_rich-text__b9e4r" };
    },
    73441: (e) => {
      e.exports = {
        "intro-card": "IntroCard_intro-card__HkxI_",
        "intro-card_image": "IntroCard_intro-card_image__iFjXI",
        "intro-card_image-inner": "IntroCard_intro-card_image-inner__bLNdF",
        "intro-card_title": "IntroCard_intro-card_title__LZcCv",
        "intro-card_text": "IntroCard_intro-card_text__SnTZm",
      };
    },
    76489: (e, t, n) => {
      "use strict";
      n.d(t, { default: () => i });
      var r = n(95155),
        o = n(12115),
        a = n(5854);
      function i(e) {
        let { media: t, videoSafari: n } = e,
          [i, s] = (0, o.useState)(null),
          l = ((null == t ? void 0 : t.mimeType) || "").startsWith("video/");
        return ((0, o.useEffect)(() => {
          if (!l) return;
          let e = navigator.userAgent;
          s(/Safari/.test(e) && !/Chrome/.test(e) && !/Chromium/.test(e));
        }, [l]),
        t && "object" == typeof t && t.url && (!l || null !== i))
          ? l
            ? (0, r.jsxs)("video", {
                loop: !0,
                autoPlay: !0,
                playsInline: !0,
                muted: !0,
                children: [
                  !!(null == n ? void 0 : n.url) &&
                    i &&
                    (0, r.jsx)("source", {
                      src: n.url,
                      type: n.mimeType || "video/mp4",
                    }),
                  (0, r.jsx)("source", {
                    src: t.url,
                    type: t.mimeType || "video/mp4",
                  }),
                ],
              })
            : (0, r.jsx)(a.default, { src: t.url, alt: t.alt })
          : null;
      }
    },
    77369: (e) => {
      e.exports = {
        document: "Document_document__suOz8",
        "document-icon": "Document_document-icon__9zqC5",
        "document-name": "Document_document-name__RtaYp",
      };
    },
    82704: (e) => {
      e.exports = {
        "faq-group": "FaqGroup_faq-group__Q_8EW",
        "faq-group--open": "FaqGroup_faq-group--open__lZd0Y",
        "faq-group-name": "FaqGroup_faq-group-name__7pSNi",
        "faq-group-icon": "FaqGroup_faq-group-icon__luMxg",
        "faq-group-content": "FaqGroup_faq-group-content__GlKwZ",
        "faq-group-list": "FaqGroup_faq-group-list__1nD_7",
      };
    },
    87889: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => d });
      var r = n(95155),
        o = n(61787),
        a = n(95653),
        i = n(5854),
        s = n(980),
        l = n.n(s);
      function c(e) {
        let { title: t, text: n, content: a } = e;
        return (0, r.jsxs)("div", {
          className: l()["white-block"],
          children: [
            (0, r.jsx)("div", {
              className: l()["white-block_title"],
              dangerouslySetInnerHTML: { __html: t || "" },
            }),
            n &&
              (0, r.jsx)("div", {
                className: l()["white-block_text"],
                dangerouslySetInnerHTML: { __html: n || "" },
              }),
            (0, r.jsx)(o.s, {
              className: l()["white-block_content"],
              data: a,
              converters: u,
            }),
          ],
        });
      }
      let _ = (e) => {
          var t;
          let { linkNode: n } = e,
            r = null == n || null == (t = n.fields) ? void 0 : t.doc;
          if (!r) return "/";
          let { value: o, relationTo: a } = r;
          if ("object" != typeof o) return "/";
          let i = "home" === o.slug ? "" : o.slug;
          return "pages" !== a ? "/".concat(a, "/").concat(i) : "/".concat(i);
        },
        u = (e) => {
          let { defaultConverters: t } = e;
          return {
            ...t,
            ...(0, a.A)({ internalDocToHref: _ }),
            upload: (e) => {
              let { node: t } = e;
              if (!t || "media" !== t.relationTo) return null;
              let n = t.value;
              return n && "object" == typeof n && "url" in n && "alt" in n
                ? (0, r.jsx)("p", {
                    children: (0, r.jsx)(i.default, {
                      src: n.url || "",
                      alt: n.alt || "",
                    }),
                  })
                : null;
            },
            blocks: {
              RichTextWhiteBlock: (e) => {
                let { node: t } = e,
                  n = null == t ? void 0 : t.fields;
                return (0, r.jsx)(c, {
                  content: n.content,
                  text: n.text,
                  title: n.title,
                  blockType: n.blockType,
                });
              },
            },
          };
        };
      function d(e) {
        let { data: t, className: n } = e;
        return t
          ? (0, r.jsx)(o.s, { className: n, data: t, converters: u })
          : null;
      }
    },
    91644: (e) => {
      e.exports = {
        "faq-item": "FaqItem_faq-item__wRI1_",
        "faq-item_head": "FaqItem_faq-item_head__tov65",
        "faq-item_icon": "FaqItem_faq-item_icon__LCW_B",
        "faq-item_content": "FaqItem_faq-item_content__o4R6w",
        "faq-item_text": "FaqItem_faq-item_text__rLSXk",
        "faq-item-large": "FaqItem_faq-item-large__aOF_s",
        "faq-item-small": "FaqItem_faq-item-small__zdXxF",
      };
    },
    93814: (e) => {
      e.exports = {
        "benefits-card": "BenefitsCard_benefits-card__3BF4Z",
        "benefits-card-bg-violet":
          "BenefitsCard_benefits-card-bg-violet__hR_f7",
        "benefits-card-bg-violet-light":
          "BenefitsCard_benefits-card-bg-violet-light__QoILj",
        "benefits-card-bg-sky-blue":
          "BenefitsCard_benefits-card-bg-sky-blue__SfsoK",
        "benefits-card_icon": "BenefitsCard_benefits-card_icon__qPdWo",
        "benefits-card_icon-inner":
          "BenefitsCard_benefits-card_icon-inner__2gbWg",
        "benefits-card_text": "BenefitsCard_benefits-card_text__sct3L",
      };
    },
    94848: (e) => {
      e.exports = {
        benefits: "Benefits_benefits__8wH2p",
        "benefits-container": "Benefits_benefits-container__ICcW_",
        "benefits-content": "Benefits_benefits-content__Vh3It",
        "benefits-content--center": "Benefits_benefits-content--center__7QxUd",
        "has-button": "Benefits_has-button__6SyFB",
        "benefits-text": "Benefits_benefits-text__wp4yO",
        "benefits-btn-wrapper": "Benefits_benefits-btn-wrapper__lgyvV",
        "benefits-title": "Benefits_benefits-title__jeFRW",
        "benefits-cards": "Benefits_benefits-cards__uatSu",
      };
    },
    98590: (e) => {
      e.exports = {
        "main-banner": "MainBanner_main-banner__pzIlc",
        "main-banner_wrapper": "MainBanner_main-banner_wrapper__CT8dC",
        "main-banner_content": "MainBanner_main-banner_content__Nsvba",
        "main-banner_title": "MainBanner_main-banner_title__wBVEO",
        "main-banner_btn-mobile": "MainBanner_main-banner_btn-mobile__SLGaO",
        "main-banner_btn-desktop": "MainBanner_main-banner_btn-desktop__Jm_jZ",
        "main-banner_media": "MainBanner_main-banner_media__HMR21",
      };
    },
  },
]);
