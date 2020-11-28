import {htmlEscape} from "../libs/htmlEscape.js"

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

$('.chax-modal-js-code').html('// 功能：关闭弹窗\n' +
  '$(\'.chax-modal .chax-modal-close\').click(function(e){\n' +
  '  e.stopPropagation();\n' +
  '  e.preventDefault();\n' +
  '  $(this).parents(".chax-modal").fadeOut()\n' +
  '})')

$('.chax-tooltip-html-code').html(
  htmlEscape('<button class="chax-tooltip-hover">\n' +
    '      <div>气泡演示——悬浮</div>\n' +
    '      <div class="chax-tooltip">这是一条提示信息</div>\n' +
    '    </button>\n' +
    '    <button class="chax-tooltip-click">\n' +
    '      <div>气泡演示——点击</div>\n' +
    '      <div class="chax-tooltip">这是一条提示信息</div>\n' +
    '    </button>')
)

$('.chax-tooltip-css-code').html('.chax-tooltip-hover,\n' +
  '.chax-tooltip-click{\n' +
  '    /*以下内容自由调整*/\n' +
  '    position:relative;\n' +
  '    outline:none;\n' +
  '    background: tan;\n' +
  '    display: inline-block;\n' +
  '    padding:1em;\n' +
  '    margin:1em 1em 1em 0;\n' +
  '}\n' +
  '\n' +
  '.chax-tooltip-hover:hover .chax-tooltip{\n' +
  '    display:block;\n' +
  '}\n' +
  '\n' +
  '.chax-tooltip{\n' +
  '    position:absolute;\n' +
  '    display:none;\n' +
  '    z-index:10;\n' +
  '    /*以下内容自由调整*/\n' +
  '    top:100%;\n' +
  '    left:50%;\n' +
  '    transform: translate(-50%,10px);\n' +
  '    padding:0.25rem 0.5rem;\n' +
  '    white-space: nowrap;\n' +
  '    border-radius: 4px;\n' +
  '    background: #000;\n' +
  '    color:#FFF;\n' +
  '}\n' +
  '.chax-tooltip::after{\n' +
  '    content:\'\';\n' +
  '    position:absolute;\n' +
  '    z-index: -1;\n' +
  '    /*以下内容自由调节*/\n' +
  '    bottom:100%;\n' +
  '    left:50%;\n' +
  '    transform: translate(-50%,10px) rotateZ(45deg);\n' +
  '    width:14px;\n' +
  '    height:14px;\n' +
  '    background: #000;\n' +
  '}\n' +
  '\n' +
  '.chax-tooltip.active{\n' +
  '    display:block;\n' +
  '}')

$('.chax-tooltip-js-code').html('// 功能：点击后显示气泡\n' +
  '$(\'.chax-tooltip-click\').click(function(e){\n' +
  '  e.preventDefault()\n' +
  '  e.stopPropagation()\n' +
  '  $(this).children(\'.chax-tooltip\').fadeIn()\n' +
  '  setTimeout(()=>{\n' +
  '    $(this).children(\'.chax-tooltip\').fadeOut()\n' +
  '  },1000)\n' +
  '})')

$('.chax-suspension-html-code').html(
  htmlEscape('<div class="chax-suspension">\n' +
    '    <div style="width:150px;height:150px;">这是一个悬浮框</div>\n' +
    '  </div>')
)
$('.chax-suspension-css-code').html('.chax-suspension{\n' +
  '    position: fixed;\n' +
  '    /*以下内容自由调整*/\n' +
  '    z-index:20;\n' +
  '    bottom:20px;\n' +
  '    right:20px;\n' +
  '    background: tan;\n' +
  '    animation: 3s linear infinite chax-suspension-float;\n' +
  '}\n' +
  '\n' +
  '@keyframes chax-suspension-float {\n' +
  '    0% {\n' +
  '        transform: translate(0,0);\n' +
  '    }\n' +
  '    50% {\n' +
  '        transform: translate(0,-20%);\n' +
  '    }\n' +
  '    100% {\n' +
  '        transform: translate(0,0);\n' +
  '    }\n' +
  '}')
$('.chax-suspension-js-code').html()


$('.chax-tab-html-code').html(
  htmlEscape('<div class="chax-tab">\n' +
    '    <div class="chax-tab-nav">\n' +
    '      <div class="chax-tab-nav-item">\n' +
    '        <div style="padding:10px">我是选项一</div>\n' +
    '      </div>\n' +
    '      <div class="chax-tab-nav-item">\n' +
    '        <div style="padding:10px">我是选项二</div>\n' +
    '      </div>\n' +
    '      <div class="chax-tab-nav-item">\n' +
    '        <div style="padding:10px">我是选项三</div>\n' +
    '      </div>\n' +
    '      <div class="chax-tab-nav-item">\n' +
    '        <div style="padding:10px">我是选项四</div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="chax-tab-panel">\n' +
    '      <div class="chax-tab-panel-item active">\n' +
    '        <div style="height:100%;background: yellow;">我是内容一</div>\n' +
    '      </div>\n' +
    '      <div class="chax-tab-panel-item">\n' +
    '        <div style="height:100%;background: orange;">我是内容二</div>\n' +
    '      </div>\n' +
    '      <div class="chax-tab-panel-item">\n' +
    '        <div style="height:100%;background: green;">我是内容三</div>\n' +
    '      </div>\n' +
    '      <div class="chax-tab-panel-item">\n' +
    '        <div style="height:100%;background: grey;">我是内容四</div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>')
)

$('.chax-tab-css-code').html('.chax-tab{\n' +
  '    display:flex;\n' +
  '    justify-content: center;\n' +
  '    align-items: stretch;\n' +
  '    flex-direction: row;\n' +
  '    /*以下内容自由调整*/\n' +
  '    width:400px;\n' +
  '    height:200px;\n' +
  '\n' +
  '}\n' +
  '.chax-tab .chax-tab-nav{\n' +
  '    display:flex;\n' +
  '    justify-content: flex-start;\n' +
  '    align-items: stretch;\n' +
  '    flex-direction: column;\n' +
  '    /*以下内容自由调整*/\n' +
  '    width:100px;\n' +
  '    background: #DDD;\n' +
  '}\n' +
  '\n' +
  '.chax-tab .chax-tab-nav-item{\n' +
  '    /*以下内容自由调整*/\n' +
  '    background: #CCC;\n' +
  '}\n' +
  '\n' +
  '.chax-tab .chax-tab-nav-item:hover{\n' +
  '    /*以下内容自由调整*/\n' +
  '    cursor:pointer;\n' +
  '    background: tan;\n' +
  '}\n' +
  '\n' +
  '.chax-tab .chax-tab-panel{\n' +
  '    display:flex;\n' +
  '    justify-content: center;\n' +
  '    align-items: center;\n' +
  '    flex-grow: 1;\n' +
  '}\n' +
  '\n' +
  '.chax-tab .chax-tab-panel-item{\n' +
  '    display:none;\n' +
  '    flex-grow: 1;\n' +
  '    height:100%;\n' +
  '    /*以下内容自由调整*/\n' +
  '    background: #EEE;\n' +
  '}\n' +
  '.chax-tab .chax-tab-panel-item.active{\n' +
  '    display:block;\n' +
  '}\n')

$('.chax-tab-js-code').html('$(\'.chax-tab-nav-item\').hover(function(){\n' +
  '  let index = $(this).index()\n' +
  '  $(this).parents(\'.chax-tab-nav\')\n' +
  '    .siblings(\'.chax-tab-panel\')\n' +
  '    .children(\'.chax-tab-panel-item\').removeClass(\'active\').eq(index).addClass(\'active\')\n' +
  '})')