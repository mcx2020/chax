let linkList = {
  chaxBackTop:'./demos/chax-back-top.demos',
  chaxCanvas:'./demos/chax-canvas.demos',
  chaxCopy:'./demos/chax-copy.demos',
  chaxDropdown:'./demos/chax-dropdown.demos',
  chaxList:'./demos/chax-list.demos',
  chaxModal:'./demos/chax-modal.demos',
  chaxNav:'./demos/chax-nav.demos',
  chaxPopover:'./demos/chax-popover.demos',
  chaxSuspension:'./demos/chax-suspension.demos',
  chaxTab:'./demos/chax-tab.demos',
  chaxTooltip:'./demos/chax-tooltip.demos',
}
let linkListHTML = ''
for (let key in linkList){
  linkListHTML +=`<a href="${linkList[key]}" class="nav-dropdown-item">${key}</a>`
}
$('.nav-dropdown').append($(linkListHTML))