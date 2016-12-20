window.onload = function() {
    const panels = document.querySelectorAll('.panel');

    panels.forEach( el => el.addEventListener('click', toggleOpen));
    panels.forEach( el => el.addEventListener('transitionend', toggleActive));


    function toggleOpen() {
        this.classList.toggle('open');
    }

    function toggleActive(e) {
        if( !e.propertyName.includes('flex') )
            return;

        this.classList.toggle('open-active');
    }

};