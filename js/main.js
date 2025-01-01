let dics;
// fetch("http://localhost:3000/0")
fetch("../data/data.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); // parse the response as JSON
  })
  .then((data) => {
    dics = data;
    console.log("dics", dics);
  })
  .catch((error) => {
    console.error("Error fetching data:", error); // Error handling
  });

var $highlights = $(".highlights"),
  $textarea = $('[name="Classic"]');
let marked = [],
  english = [];
var ua = window.navigator.userAgent.toLowerCase(),
  isIE = !!ua.match(/msie|trident\/7|edge/);
function applyHighlights(e) {
  for (ctx of ((e = e.replace(/(?<!\n)\n$/g, "\n\n")), marked))
    e = e.replace(
      new RegExp(ctx + "(?= )", "g"),
      '<span class="myhighlight">' + ctx + "</span>"
    );
  for (eng of english)
    e = e.replace(new RegExp(eng, "g"), '<span class="eng">' + eng + "</span>");
  return isIE && (e = e.replace(/ /g, " <wbr>")), e;
}
function handleInput() {
  var e = applyHighlights($textarea.val());
  $highlights.html(e),
    ($textarea[0].style.height = "100%"),
    $highlights.height($textarea[0].scrollHeight + "px"),
    ($textarea[0].style.height = $textarea[0].scrollHeight + "px");
}
function handleResize() {
  $highlights.width($textarea.width()).height($textarea.height());
}
function bindEvents() {
  $textarea.each(function () {
    this.setAttribute(
      "style",
      "height:" + this.scrollHeight + "px;overflow-y:hidden;"
    ),
      $highlights.height(this.scrollHeight + "px");
  }),
    $(window).on({ resize: handleResize });
}
function last_word() {
  for (value = $textarea.val(), length = value.length, i = 2; i <= length; i++)
    if (" " == value[length - i] || "\n" == value[length - i])
      return value.substr(length - i + 1, length);
  return value;
}
function spell_check(e) {
  var t = dics;
  for (i = 0; i < e.length; i++) {
    if (!(e[i] in t)) return !1;
    t = t[e[i]];
  }
  return !0;
}
function mark_error(e) {
  (is_correct = spell_check(e)),
    is_correct ||
      (marked.includes(e) || marked.push(e), setTimeout(handleInput, 200));
}
bindEvents(), handleResize();
(String.prototype.replaceAt = function (e, t) {
  return this.substring(0, e) + t + this.substring(e + 1, this.length);
}),
  (String.prototype.middleAdd = function (e, t) {
    return this.substring(0, e) + t + this.substring(e, this.length);
  }),
  (String.prototype.replaceAll = function (e, t, l) {
    return this.replace(
      new RegExp(
        e.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g, "\\$&"),
        l ? "gi" : "g"
      ),
      "string" == typeof t ? t.replace(/\$/g, "$$$$") : t
    );
  }),
  // fetch("http://localhost:3000/1")
  fetch("../data/data.json")
    .then((e) => e.json())
    .then((e) => {
      asyncCall(e[0]);
      console.log("key", e[0]);
    });

// fetch("http://localhost:3000/1")
// .then((response) => {
//   if (!response.ok) {
//     throw new Error(`HTTP error! Status: ${response.status}`);
//   }
//   // Check if the response body exists and has content
//   return response.text();
// })
// .then((text) => {
//   if (text) {
//     // Parse the JSON only if text is not empty
//     return JSON.parse(text);
//   } else {
//     throw new Error("Empty response body");
//   }
// })
// .then((data) => {
//   asyncCall(data[0]);
//   console.log(data[0]);
// })
// .catch((error) => {
//   console.error("Error fetching data:", error);
// });
var timer = "";
function asyncCall(e) {
  console.log(e);
  const t = $('[name="Unicode"]'),
    n = $('[name="Classic"]'),
    a = $(".highlights");
  n.focus();
  let s = "",
    r = 0,
    i = "";
  function o() {
    value = t.val();
    var s = "";
    (english = []),
      new Promise((t) => {
        if (value) {
          var l = e[0][1];
          for (var n of l)
            (value = value.replaceAll(n.out, n.seq)),
              n == l[l.length - 1] && t(value);
        }
      })
        .then(
          (t) =>
            new Promise((n) => {
              var a = "";
              for (l of t) {
                var r = transform(!1, l, e[0][0]);
                if (r) {
                  var i = transform(parseInt(r[0]), !1, e[1][0]),
                    o = "";
                  if (i) o = r[3] ? i[2] : i[1];
                  else {
                    var c = [
                        "0",
                        "1",
                        "2",
                        "3",
                        "4",
                        "5",
                        "6",
                        "7",
                        "8",
                        "9",
                        "!",
                        "@",
                        "#",
                        "$",
                        "%",
                        "^",
                        "*",
                        "(",
                        ")",
                        "?",
                        ",",
                        "<",
                        ".",
                        ">",
                        "=",
                        "+",
                        ":",
                        ";",
                        "/",
                      ],
                      f = [
                        "০",
                        "১",
                        "২",
                        "৩",
                        "৪",
                        "৫",
                        "৬",
                        "৭",
                        "৮",
                        "৯",
                        "!",
                        "@",
                        "#",
                        "৳",
                        "%",
                        "ৰ",
                        "*",
                        "(",
                        ")",
                        "?",
                        ",",
                        "<",
                        ".",
                        ">",
                        "=",
                        "+",
                        ":",
                        ";",
                        "/",
                      ];
                    for (var g of f)
                      if (l == g) {
                        o = c[f.indexOf(g)];
                        break;
                      }
                  }
                  "©" != a ||
                  ("‰" != o &&
                    "w" != o &&
                    "‡" != o &&
                    "v" != o &&
                    "x" != o &&
                    "y" != o &&
                    "~" != o &&
                    "Š" != o &&
                    "„" != o)
                    ? (o += a)
                    : (o = "i&" + o),
                    (a = ""),
                    "‰" == o || "w" == o || "‡" == o
                      ? "‍" == s[s.length - 2] && "&" == s[s.length - 3]
                        ? ((s =
                            "&" == s[s.length - 5]
                              ? s.middleAdd(s.length - 6, o)
                              : s.middleAdd(s.length - 4, o)),
                          (o = ""))
                        : "&" == s[s.length - 2]
                        ? ((s =
                            "&" == s[s.length - 4]
                              ? s.middleAdd(s.length - 5, o)
                              : s.middleAdd(s.length - 3, o)),
                          (o = ""))
                        : "©" == s[s.length - 1]
                        ? ((s = s.middleAdd(s.length - 2, o)), (o = ""))
                        : "&" != s[s.length - 1] &&
                          ((s = s.middleAdd(s.length - 1, o)), (o = ""))
                      : "&" == o &&
                        "i" == s[s.length - 1] &&
                        ("‍" != a
                          ? ((o = ""),
                            (s = s.replaceAt(s.length - 1, "")),
                            (a = "©"))
                          : (a = "")),
                    (s += o);
                } else if ("়" == l) {
                  switch (s[s.length - 1]) {
                    case "h":
                      s += "q";
                      break;
                    case "W":
                      s += "o";
                      break;
                    case "X":
                      s += "p";
                  }
                  s = s.replaceAt(s.length - 2, "");
                } else if ("‍" == l) a = l;
                else if (l.match(/[^a-zA-Z]/)) s += l;
                else {
                  var h;
                  english.length && (h = english[english.length - 1]),
                    h && h[h.length - 1] == s[s.length - 1]
                      ? ((english[english.length - 1] += l), (s += l))
                      : (english.push(l), (s += l));
                }
                l == t[t.length - 1] && n();
              }
            })
        )
        .then(() => {
          if (s.length >= 2) {
            let l = e[1][1];
            for (var t of ((s = s.replaceAll("y&i", "&iy")), l))
              s = s.replaceAll(t.seq, t.out);
            for (var t of [
              { seq: "b&Î", out: "š¿" },
              { seq: "m&Î", out: "¯¿" },
              { seq: "&‍h", out: "¨" },
              { seq: "m&µ", out: "¯Œ" },
              { seq: "y‍&h", out: "y¨" },
            ])
              s = s.replaceAll(t.seq, t.out);
          }
          var l = s;
          for (var r of english)
            l = l.replace(r, "<span class='eng'>" + r + "</span>");
          n.val(s), a.html(l);
        });
  }
  function c() {
    (value = n.val()), (s = "");
    var a = "";
    new Promise((t) => {
      if (value) {
        let n = e[1][1];
        for (var l of [
          { seq: "†", out: "‡" },
          { seq: "¡", out: "&e" },
          { seq: "¯Œ", out: "m&K&i" },
        ])
          value = value.replaceAll(l.seq, l.out);
        for (var l of n)
          (value = value.replaceAll(l.out, l.seq)),
            l == n[n.length - 1] && t(value);
      }
    })
      .then(
        (t) =>
          new Promise((n) => {
            for (l of t) {
              var o = transform(!1, l, e[1][0]);
              if (o) {
                var c = transform(parseInt(o[0]), !1, e[0][0]),
                  g = (o[3] ? c[2] : c[1]) + s,
                  h = a[a.length - 1];
                if ("্" != h)
                  switch (g) {
                    case "ে":
                    case "ৈ":
                    case "ি":
                      (s = g), (g = "");
                      break;
                    case "র্":
                      (a =
                        "ে" == h || "ৈ" == h || "ি" == h
                          ? a.middleAdd(a.length - 2, g)
                          : a.middleAdd(a.length - 1, g)),
                        (g = "");
                      break;
                    case "‍্য":
                      ("ে" != h && "ৈ" != h && "ি" != h) ||
                        ((g += h), (a = a.replaceAt(a.length - 1, "")));
                      break;
                    case "্":
                      ("ে" != h && "ৈ" != h && "ি" != h) ||
                        ((i = h),
                        (r = a.length + 1),
                        (a = a.replaceAt(a.length - 1, "")));
                      break;
                    default:
                      s = "";
                  }
                else
                  switch (g) {
                    case "ে":
                    case "ৈ":
                    case "ি":
                    case "ী":
                    case "ু":
                    case "ূ":
                    case "ৃ":
                    case "া":
                    case "ৃ":
                    case "ৗ":
                      (a = a.middleAdd(a.length - 1, i)),
                        (i = ""),
                        (r = void 0);
                  }
                (a += g),
                  r &&
                    a.length === r &&
                    ((a += i), (i = ""), (s = ""), (r = void 0));
              } else {
                var d = [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "$",
                    "^",
                    "š",
                    "¯",
                    "z",
                    "æ",
                    "¤",
                  ],
                  u = [
                    "০",
                    "১",
                    "২",
                    "৩",
                    "৪",
                    "৫",
                    "৬",
                    "৭",
                    "৮",
                    "৯",
                    "৳",
                    "ৰ",
                    "ন",
                    "স",
                    "ু",
                    "ু",
                    "ম",
                  ];
                for (var v of d) {
                  if (l == v) {
                    (a += u[d.indexOf(v)] + s), (s = "");
                    break;
                  }
                  v == d[d.length - 1] && (a += l);
                }
              }
              let p = e[0][1];
              (a = f(a, p)), l == t[t.length - 1] && n();
            }
          })
      )
      .then(() => {
        t.val(a);
      });
  }
  function f(e, t, l = !1) {
    var n;
    for (var a of ((n =
      e.length >= 5
        ? l
          ? e.substring(l > 3 ? l - 3 : 0, l + 3 < e.length ? l + 3 : e.length)
          : e.substring(e.length - 5, e.length)
        : e),
    t))
      n = n.replace(a.seq, a.out);
    return l
      ? e.substring(0, l > 3 ? l - 3 : 0) +
          n +
          e.substring(l + 3 < e.length ? l + 3 : e.length, e.length)
      : e.substring(0, e.length - 5) + n;
  }
  t.on("keydown", (l) => {
    let a = l.keyCode,
      c = l.shiftKey,
      g = l.ctrlKey,
      h = l.altKey,
      d = transform(a, !1, e[0][0]);
    if (d) {
      if (g || h)
        console.warn("Externel..."),
          g &&
            86 == a &&
            setTimeout(() => {
              t.val(t.val().replace(/(?<![র‍])্য/g, "‍্য"));
            }, 200);
      else {
        l.preventDefault();
        let n = t.val();
        var u = n.length;
        let a = t[0].selectionEnd;
        if (t[0].selectionStart != a) {
          var v = t[0].selectionStart;
          (u -= a - v),
            (n = n.substring(0, v) + n.substring(a, n.length)),
            (a = v);
        }
        var p = a > 0 ? n[a - 1] : "";
        let o = (c ? d[2] : d[1]) + s;
        if ((s && ((n = n.replaceAt(a - 1, "")), (a -= 1), (u -= 1)), "্" != p))
          switch (o) {
            case "ে":
            case "ৈ":
            case "ি":
              s = o;
              break;
            case "র্":
              (n =
                "ে" == p || "ৈ" == p || "ি" == p || "ো" == p || "ৌ" == p
                  ? n.middleAdd(a - 2, o)
                  : n.middleAdd(a - 1, o)),
                (o = "");
              break;
            case "্র":
            case "‍্য":
            case "্":
              ("ে" != p && "ৈ" != p && "ি" != p) ||
                ((n = n.replaceAt(a - 1, "")),
                (a -= 1),
                (u -= 1),
                "্" == o ? ((r = n.length + 2), (i = p)) : (o += p));
              break;
            default:
              s = "";
          }
        else
          switch (o) {
            case "ে":
            case "ৈ":
            case "ি":
            case "ী":
            case "ু":
            case "ূ":
            case "ৃ":
            case "া":
            case "ৃ":
            case "ৗ":
              (r = void 0),
                (n = n.middleAdd(a - 1, i)),
                (a += 1),
                (u += 1),
                (i = "");
          }
        (n = n.middleAdd(a, o)),
          r &&
            n.length === r &&
            ((n = n.middleAdd(a + 1, i)), (r = 0), (s = "")),
          (n = f(n, e[0][1], a)),
          t.val(n),
          o && ((a += n.length - u), (t[0].selectionEnd = a));
      }
      clearTimeout(timer), (timer = setTimeout(o, 1e3));
    } else
      8 == a
        ? ((u -= 1), clearTimeout(timer), (timer = setTimeout(o, 1e3)))
        : 9 == a &&
          (l.preventDefault(),
          "none" == n.css("display")
            ? document.getElementById("Classic2").focus()
            : n.focus(),
          (s = ""),
          (r = ""),
          (i = ""));
  }),
    n.on("keydown", (l) => {
      let a = l.keyCode,
        o = l.shiftKey,
        g = l.ctrlKey,
        h = l.altKey,
        d = transform(a, !1, e[1][0]),
        u = "";
      if (d)
        if (g || h)
          (s = ""),
            g && 86 == a
              ? setTimeout(() => {
                  n.val(
                    n
                      .val()
                      .replace(
                        /\u2022(?![LNg\u00ff(\u00ffy)(\u00ffz)(\u00ff~)(\u00ff\u201a)(\u00ff\u201e)(\u00ff\u2026)])/g,
                        "·"
                      )
                  );
                }, 200)
              : !g ||
                (67 != a && 88 != a) ||
                copyClassic(getSelection().toString());
        else {
          l.preventDefault(), (u = n.val());
          let t = n[0].selectionEnd;
          if (n[0].selectionStart != t) {
            var v = n[0].selectionStart;
            (u = u.substring(0, v) + u.substring(t, u.length)), (t = v);
          }
          let a = o ? d[2] : d[1];
          u = u.middleAdd(t, a);
          var p = f(u, e[1][1], t);
          n.val(p), (n[0].selectionEnd = t - (u.length - p.length) + 1);
        }
      else
        9 == a
          ? (l.preventDefault(), t.focus(), (s = ""), (r = ""), (i = ""))
          : (32 != a && 13 != a) || mark_error(last_word());
      clearTimeout(timer), (timer = setTimeout(c, 500));
    }),
    $("#copy1").click(() => {
      var e = $("#Classic2");
      "none" == getComputedStyle(e[0]).display
        ? copyClassic(n.val())
        : copyClassic(e.html()),
        n.focus(),
        $("#copy1").text("Copied!"),
        setTimeout(() => {
          $("#copy1").text("Copy");
        }, 1e3);
    }),
    $("#copy2").click(() => {
      navigator.clipboard.writeText(t.val()),
        t.focus(),
        $("#copy2").text("Copied!"),
        setTimeout(() => {
          $("#copy2").text("Copy");
        }, 1e3);
    });
}
function transform(e = !1, t = !1, l) {
  var n = e ? "keycode" : "nrml_txt";
  if (t)
    for (var a = 0; a < l.length; a++) {
      if (t == (s = l[a])[n]) return [s.keycode, s.nrml_txt, s.sft_txt, !1];
      if (t == s.sft_txt) return [s.keycode, s.nrml_txt, s.sft_txt, !0];
    }
  else
    for (a = 0; a < l.length; a++) {
      var s;
      if (e == (s = l[a])[n]) return [s.keycode, s.nrml_txt, s.sft_txt, !1];
    }
}
function copyClassic(e) {
  navigator.clipboard.write([
    new ClipboardItem({
      "text/plain": new Blob([e], { type: "text/plain" }),
      "text/html": new Blob(
        [
          "<style>span{font-family:'SutonnyMJ'} span span.eng{font-family:'Times New Roman'}</style><span>" +
            e.replaceAll("\n", "<div></div>") +
            "</span>",
        ],
        { type: "text/html" }
      ),
    }),
  ]);
}
