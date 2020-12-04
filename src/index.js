let linkList = {
  chaxBackTop:'./demos/chax-back-top.html',
  chaxCopy:'./demos/chax-copy.html',
  chaxDropdown:'./demos/chax-dropdown.html',
  chaxList:'./demos/chax-list.html',
  chaxModal:'./demos/chax-modal.html',
  chaxNav:'./demos/chax-nav.html',
  chaxPopover:'./demos/chax-popover.html',
  chaxSuspension:'./demos/chax-suspension.html',
  chaxTab:'./demos/chax-tab.html',
  chaxTooltip:'./demos/chax-tooltip.html',
}
let linkListHTML = ''
for (let key in linkList){
  linkListHTML +=`<a href="${linkList[key]}" class="nav-dropdown-item">${key}</a>`
}
$('.nav-dropdown').append($(linkListHTML))