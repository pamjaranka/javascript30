window.onload = function() {
    const checkboxes = document.querySelectorAll('input[type=checkbox]');

    let lastChecked;
    var checkedIndex = -1;

    checkboxes.forEach( checkbox => checkbox.addEventListener( 'click', handleCheck ));

    function handleCheck(e) {
        let inBetween = false;
        if( e.shiftKey && this.checked ) 
            checkboxes.forEach( checkbox => {
                
                if( this === checkbox || lastChecked === checkbox )
                    inBetween = !inBetween;

                if( inBetween )
                    checkbox.checked = true;
                
            });

        lastChecked = this;
        
    }
};