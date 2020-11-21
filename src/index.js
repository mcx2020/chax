import '../libs/import-jquery'
import './js/code-show.js'
import './js/copy.js'
import './js/chax-modal.js'

$('.chax-modal-demo').click(function(e){
  e.stopPropagation();
  e.preventDefault();
  $('.chax-modal').fadeIn()
})