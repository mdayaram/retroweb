$("./head") {
  // Find the google analytics script tag.
  $present = "false"
  $("script[contains(., 'UA-12131688-1')]") {
    $present = "true"
    inner() {
      set(read("combined_analytics.js"))
    }
  }

  match($present) {
    with(/false/) {
      insert_bottom("script") {
        inner() {
          set(read("mw_analytics.js"))
        }
      }
    }
  }
}
