(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/residence/checkRecord/checkRecord"], {
    1684: function (t, e, a) {},
    "2f40": function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a("5816"),
        i = a("3b39");
      for (var o in i) "default" !== o && function (t) {
        a.d(e, t, (function () {
          return i[t]
        }))
      }(o);
      a("6b1f");
      var s, c = a("f0c5"),
        u = Object(c["a"])(i["default"], n["b"], n["c"], !1, null, "35c65667", null, !1, n["a"], s);
      e["default"] = u.exports
    },
    "3b39": function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a("e800"),
        i = a.n(n);
      for (var o in n) "default" !== o && function (t) {
        a.d(e, t, (function () {
          return n[t]
        }))
      }(o);
      e["default"] = i.a
    },
    5816: function (t, e, a) {
      "use strict";
      var n;
      a.d(e, "b", (function () {
        return i
      })), a.d(e, "c", (function () {
        return o
      })), a.d(e, "a", (function () {
        return n
      }));
      var i = function () {
          var t = this,
            e = t.$createElement,
            a = (t._self._c, t.lists.length > 0 ? t.__map(t.lists, (function (e, a) {
              var n = t.__get_orig(e),
                i = e.created_at.slice(0, 16);
              return {
                $orig: n,
                g0: i
              }
            })) : null);
          t.$mp.data = Object.assign({}, {
            $root: {
              l0: a
            }
          })
        },
        o = []
    },
    "6b1f": function (t, e, a) {
      "use strict";
      var n = a("1684"),
        i = a.n(n);
      i.a
    },
    acee: function (t, e, a) {
      "use strict";
      (function (t) {
        a("d774");
        n(a("66fd"));
        var e = n(a("2f40"));

        function n(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }
        t(e.default)
      }).call(this, a("543d")["createPage"])
    },
    e800: function (t, e, a) {
      "use strict";
      (function (t) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var n = s(a("a6bb")),
          i = (s(a("9381")), s(a("78ac"))),
          o = s(a("8031"));

        function s(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }
        var c = function () {
            a.e("components/sub-unit/subunit").then(function () {
              return resolve(a("e864"))
            }.bind(null, a)).catch(a.oe)
          },
          u = {
            name: "",
            components: {
              subunit: c
            },
            props: {},
            data: function () {
              return {
                username: "",
                text: "",
                lists: [],
                page: 1,
                ps: 15,
                isLoding: !1,
                hasMore: !0
              }
            },
            methods: {
              godetails: function (e) {
                var a = e.id;
                t.navigateTo({
                  url: "/pages/residence/checkdetails/checkdetails?id=".concat(a)
                })
              },
              goback: function () {
                t.navigateBack({
                  delta: 1
                })
              },
              loadPageData: function () {
                var e = this;
                this.isLoding = !0, o.default.doOnlyTokenValid({
                  keepSuccess: !1,
                  showModal: !0,
                  fail: function () {
                    e.isLoding = !1
                  },
                  success: function () {
                    n.default.applerecord({
                      data: {
                        page: e.page,
                        pageSize: e.ps
                      },
                      fail: function (a) {
                        e.isLoding = !1, t.showToast({
                          title: "网络错误",
                          icon: "none"
                        })
                      },
                      success: function (t) {
                        if (e.isLoding = !1, 200 == t.statusCode && 200 == t.data.code) {
                          var a = t.data.data;
                          a.data.map((function (t) {
                            1 == t.verify_status && (t.verify_status_text = "审核中")
                          })), e.page = a.current_page + 1, e.hasMore = !!a.next_page_url, e.lists = e.lists.concat(a.data)
                        }
                      }
                    })
                  }
                })
              },
              Userdata: function () {
                var e = this;
                i.default.userDeta({
                  data: {},
                  fail: function (e) {
                    t.showToast({
                      title: e.msg
                    })
                  },
                  success: function (t) {
                    if (200 == t.statusCode && 200 == t.data.code) {
                      var a = t.data.data;
                      e.username = a.username
                    }
                  }
                })
              }
            },
            mounted: function () {},
            onShow: function () {
              this.lists = [], this.page = 1, this.loadPageData(), this.Userdata()
            },
            onReachBottom: function () {
              this.text = "没有更多了~", 1 != this.isLoding && 0 != this.hasMore && this.loadPageData()
            },
            onLoad: function () {},
            filters: {},
            computed: {},
            watch: {},
            directives: {}
          };
        e.default = u
      }).call(this, a("543d")["default"])
    }
  },
  [
    ["acee", "common/runtime", "common/vendor"]
  ]
]);