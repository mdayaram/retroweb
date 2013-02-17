$("./body") {
  insert_bottom("footer", class: "_footer") {
    insert("span") {
      inner("This <a href='https://github.com/mdayaram/retroweb'>open source</a> remix was made possible by <a href='http://www.moovweb.com'>Moovweb</a>")
    }
  }
}
