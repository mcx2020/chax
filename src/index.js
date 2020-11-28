import './libs/import-jquery'
import './js/code-show'
import './js/copy.js'
import './js/chax-modal'
import './js/chax-tooltip'
import './js/chax-tab'

$('.chax-modal-demo').click(function(e){
  e.stopPropagation();
  e.preventDefault();
  $('.chax-modal').fadeIn()
})
