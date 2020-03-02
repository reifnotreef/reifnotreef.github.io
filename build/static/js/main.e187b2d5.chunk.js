(this.webpackJsonpundefined = this.webpackJsonpundefined || []).push([
  [0],
  {
    13: function(e, n, t) {
      e.exports = t(20);
    },
    19: function(e, n, t) {},
    20: function(e, n, t) {
      "use strict";
      t.r(n);
      var r = t(6),
        a = t(7),
        c = t(11),
        o = t(8),
        u = t(12),
        i = t(0),
        l = t.n(i),
        s = t(9),
        p = t.n(s),
        m = t(3),
        f = function(e) {
          return l.a.createElement(
            "section",
            { className: "project-card", key: e.project.id },
            l.a.createElement(
              "h3",
              { className: "project-name" },
              e.project.name
            ),
            l.a.createElement(
              "p",
              { className: "project-description" },
              "what: ",
              e.project.description
            ),
            l.a.createElement(
              "p",
              { className: "project-languages" },
              "how (mostly): ",
              e.project.primaryLanguage.name
            ),
            l.a.createElement(
              "p",
              { className: "project-code-link" },
              "where:",
              " ",
              l.a.createElement(
                "a",
                {
                  target: "_blank",
                  rel: "noopener noreferrer",
                  href: e.project.url
                },
                "github"
              )
            )
          );
        },
        h = t(1),
        E = t.n(h),
        d = t(2),
        j = t(5),
        b = Object({ NODE_ENV: "production", PUBLIC_URL: "" })
          .REACT_APP_API_KEY,
        g = (function() {
          var e = Object(d.a)(
            E.a.mark(function e() {
              var n;
              return E.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = []),
                        (e.next = 3),
                        j("https://api.github.com/graphql", {
                          method: "POST",
                          body: JSON.stringify({
                            query:
                              'query {\n    user(login:"reifnotreef") {\n    pinnedItems(first: 6, types: [REPOSITORY]) {\n      totalCount\n      edges {\n        node {\n          ... on Repository {\n            name, description, id, url, primaryLanguage {\n              name\n            }\n          }\n        }\n      }\n    }\n  }\n}'
                          }),
                          headers: { Authorization: "Bearer ".concat(b) }
                        })
                          .then(function(e) {
                            return e.json();
                          })
                          .then(function(e) {
                            return e.data.user.pinnedItems.edges.forEach(
                              function(e) {
                                return n.push(e.node);
                              }
                            );
                          })
                          .catch(function(e) {
                            return console.error(e);
                          })
                      );
                    case 3:
                      return e.abrupt("return", n);
                    case 4:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function() {
            return e.apply(this, arguments);
          };
        })(),
        y = t(10),
        O = t.n(y),
        N = function() {
          return l.a.createElement(O.a, { type: "spin", color: "black" });
        },
        k = function() {
          var e = Object(i.useState)([]),
            n = Object(m.a)(e, 2),
            t = n[0],
            r = n[1];
          return (
            Object(i.useEffect)(function() {
              g().then(function(e) {
                return r(e);
              });
            }, []),
            l.a.createElement(
              l.a.Fragment,
              null,
              l.a.createElement(
                "section",
                { className: "projects-header" },
                l.a.createElement("h1", null, "My Projects")
              ),
              l.a.createElement(
                "section",
                { className: "projects-container" },
                t && t.length > 0
                  ? t.map(function(e) {
                      return l.a.createElement(f, { project: e, key: e.id });
                    })
                  : l.a.createElement(N, null)
              )
            )
          );
        },
        P = (t(19), t(5)),
        _ = Object({ NODE_ENV: "production", PUBLIC_URL: "" })
          .REACT_APP_API_KEY,
        v = (function() {
          var e = Object(d.a)(
            E.a.mark(function e() {
              return E.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        P("https://api.github.com/graphql", {
                          method: "POST",
                          body: JSON.stringify({
                            query:
                              'query {\n    user(login: "reifnotreef") {\n      bio\n      avatarUrl\n      email\n      isHireable\n      name\n    }\n  }'
                          }),
                          headers: { Authorization: "Bearer ".concat(_) }
                        })
                          .then(function(e) {
                            return e.json();
                          })
                          .then(function(e) {
                            return e.data.user;
                          })
                          .catch(function(e) {
                            return console.error(e);
                          })
                      );
                    case 2:
                      return e.abrupt("return", e.sent);
                    case 3:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function() {
            return e.apply(this, arguments);
          };
        })(),
        w = function() {
          var e = Object(i.useState)(null),
            n = Object(m.a)(e, 2),
            t = n[0],
            r = n[1];
          return (
            Object(i.useEffect)(function() {
              v().then(function(e) {
                return r(e);
              });
            }, []),
            null == t
              ? l.a.createElement(N, null)
              : l.a.createElement(
                  "section",
                  { className: "header-container" },
                  l.a.createElement("img", {
                    src: t.avatarUrl,
                    alt: "me",
                    className: "profile-image"
                  }),
                  l.a.createElement("h4", null, t.name),
                  l.a.createElement(
                    "p",
                    null,
                    "contact:",
                    " ",
                    l.a.createElement(
                      "a",
                      {
                        target: "_blank",
                        rel: "noopener noreferrer",
                        href: "mailto:".concat(t.email)
                      },
                      "email"
                    )
                  ),
                  l.a.createElement(
                    "p",
                    null,
                    "looking for work: ",
                    !0 === t.isHireable ? "yep" : "nope"
                  ),
                  l.a.createElement("p", null, "bio: ", t.bio)
                )
          );
        },
        A = (function(e) {
          function n() {
            return (
              Object(r.a)(this, n),
              Object(c.a)(this, Object(o.a)(n).apply(this, arguments))
            );
          }
          return (
            Object(u.a)(n, e),
            Object(a.a)(n, [
              {
                key: "render",
                value: function() {
                  return l.a.createElement(
                    l.a.Fragment,
                    null,
                    l.a.createElement(w, null),
                    l.a.createElement(k, { className: "projects-container" })
                  );
                }
              }
            ]),
            n
          );
        })(i.Component);
      p.a.render(l.a.createElement(A, null), document.querySelector("#root"));
    }
  },
  [[13, 1, 2]]
]);
//# sourceMappingURL=main.e187b2d5.chunk.js.map
