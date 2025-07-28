(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [947],
  {
    26599: (e, l, t) => {
      "use strict";
      t.d(l, { A: () => u });
      let u = {
        defaultLocale: "en",
        locales: [
          { code: "en", label: "English" },
          { code: "pl", label: "Polskі" },
          { code: "ua", label: "Українська" },
        ],
      };
    },
    35695: (e, l, t) => {
      "use strict";
      t.r(l);
      var u = t(18999),
        a = {};
      for (let e in u) "default" !== e && (a[e] = () => u[e]);
      t.d(l, a);
    },
    83081: (e, l, t) => {
      "use strict";
      t.r(l), t.d(l, { default: () => c });
      var u = t(12115),
        a = t(35695),
        s = t(26599);
      function c() {
        let { replace: e } = (0, a.useRouter)();
        return (
          (0, u.useEffect)(() => {
            e("/".concat(s.A.defaultLocale, "/not-found"));
          }, [e]),
          null
        );
      }
    },
    88061: (e, l, t) => {
      Promise.resolve().then(t.bind(t, 83081));
    },
  },
  (e) => {
    var l = (l) => e((e.s = l));
    e.O(0, [8441, 1684, 7358], () => l(88061)), (_N_E = e.O());
  },
]);
