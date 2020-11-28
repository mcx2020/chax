function htmlEscape(str){
  return str.replace(/</g,'&lt;').replace(/>/g,'&gt;')
}

export  {htmlEscape}