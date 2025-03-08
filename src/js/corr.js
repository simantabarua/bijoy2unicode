let dics;
fetch("src/data/dics.json")
  .then((e) => e.json())
  .then((e) => {
    dics = e;
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
