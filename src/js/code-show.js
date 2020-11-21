import {htmlEscape} from "../../libs/htmlEscape.js"

$('.chax-modal-html-code').html(
  htmlEscape('<div class="chax-modal">\n' +
    '    <div class="chax-modal-content">\n' +
    '      <div>这是一个弹窗哦</div>\n' +
    '      <div class="chax-modal-close">\n' +
    '        <svg class="icon" aria-hidden="true">\n' +
    '          <use xlink:href="#icon-baseline-close-px"></use>\n' +
    '        </svg>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>')
)

$('.chax-modal-css-code').html('.chax-modal{\n' +
  '    position:fixed;\n' +
  '    left:0;\n' +
  '    right:0;\n' +
  '    top:0;\n' +
  '    bottom:0;\n' +
  '    background: rgba(0,0,0,0.2);\n' +
  '    z-index:100;\n' +
  '    display:none;\n' +
  '}\n' +
  '.chax-modal.active{\n' +
  '    display:block;\n' +
  '}\n' +
  '.chax-modal .chax-modal-content{\n' +
  '    position:absolute;\n' +
  '    top:50%;\n' +
  '    left:50%;\n' +
  '    transform: translate(-50%,-50%);\n' +
  '    /*以下内容自由调整*/\n' +
  '    width:500px;\n' +
  '    height:500px;\n' +
  '    background: tan;\n' +
  '    border-radius:4px;\n' +
  '    display:flex;\n' +
  '    font-size:20px;\n' +
  '    justify-content: center;\n' +
  '    align-items: center;\n' +
  '    font-weight: bold;\n' +
  '}\n' +
  '.chax-modal .chax-modal-content .chax-modal-close{\n' +
  '    position: absolute;\n' +
  '    cursor: pointer;\n' +
  '    /*以下内容自由调整*/\n' +
  '    top:20px;\n' +
  '    right:20px;\n' +
  '    font-size: 20px;\n' +
  '}')

$('.chax-modal-js-code').html('$(\'.chax-modal .chax-modal-close\').click(function(e){\n' +
  '  e.stopPropagation();\n' +
  '  e.preventDefault();\n' +
  '  $(this).parents(".chax-modal").fadeOut()\n' +
  '})')