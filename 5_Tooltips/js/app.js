/**
 * Created by Jacek on 2015-12-16.
 */


/*
 <span class="tooltipText">Text tooltipa</span>
 */
document.addEventListener('DOMContentLoaded',function() {
    var toolTip = document.getElementsByClassName('tooltip');
    console.log(toolTip);

    for(var i=0; i < toolTip.length; i++){
        toolTip[i].addEventListener('mouseover', function () {
            var newToolTip = document.createElement('div');
            newToolTip.classList.add('tooltipText');
            newToolTip.innerText = this.dataset.text;
            this.appendChild(newToolTip);
        })
    }

    for(var i=0; i<toolTip.length; i++){
        toolTip[i].addEventListener('mouseout', function () {
            this.removeChild( this.lastChild );
        })
    }


});