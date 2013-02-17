# Place holder/example file

$("//p[@class='title']") {
  marqueefy()
}

$("//a[@class='thumbnail ']/img") {
  blinkify()
}

$("//body") {
  rainbowfy()
}

$("//img") {
  %src = fetch("@src")
  attribute("src", throttle(%src))
}

#tablefy("//body")
