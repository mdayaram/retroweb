# HTML Transformations go here

$("/html") {
  rewrite_links()
  absolutize_srcs()
  add_assets()

  @import sections/header.ts
  @import sections/footer.ts
  @import mappings.ts
  
  # Remove annoying topbar for google.
  $$("#gb") {
    remove()
  }

  $("//h1") {
    marqueefy()
  }
  $("//h2") {
    marqueefy()
  }
  $("//h3") {
    marqueefy()
  }
  $("//h4") {
    marqueefy()
  }
  $("//h5") {
    marqueefy()
  }
  $("//h6") {
    marqueefy()
  }
}

