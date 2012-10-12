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

  $("//p[@class='title']") {
    marqueefy()
  }

  $("//a[@class='thumbnail ']") {
    blinkify()
  }

  $("//body") {
    rainbowfy()
  }
}

