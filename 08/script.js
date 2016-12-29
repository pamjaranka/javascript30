window.onload = function() {
    const canvas = document.getElementById('draw');
    const ctx = canvas.getContext('2d');
    const brush = document.getElementById('brush');
    const eraser = document.getElementById('eraser');
    const clName = 'active';

    let isDrawing = false;
    let startX = 0;
    let startY = 0;
    let direction = true;
    let hue = 0;
    let lineWidth = 1;

    let actionType = 'brush';

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;


    
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.globalCompositeOperation = 'soft-light';


    function actionHandler(e) {
        if( !isDrawing ) return;
        
        ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
        ctx.lineWidth = lineWidth;

        ctx.beginPath();
        ctx.moveTo( startX, startY );
        ctx.lineTo( e.offsetX, e.offsetY );
        

        startX = e.offsetX;
        startY = e.offsetY;

        if( lineWidth >= 50 || lineWidth < 1 )
            direction = !direction;

        if( direction )
            lineWidth++;
        else
            lineWidth--;

        hue++;

        if( hue >= 359 )
            hue = 0;

        if( actionType == 'brush' )
            ctx.stroke();
        else
            ctx.clearRect(startX, startY, 30, 30);
    }

    function setAction(e) {
        isDrawing = false;

        var el = e.target;
        var elClass = el.className;
        var isActive = elClass.indexOf(clName) > -1;

        actionType = el.id;

        if( !isActive ) {
            el.classList.add(clName);

            if( actionType == 'brush' )
                eraser.classList.remove(clName);
            else
                brush.classList.remove(clName);
        }
    }

    canvas.addEventListener( 'mousemove', actionHandler );

    canvas.addEventListener( 'mousedown', (e) => { 
        isDrawing = true;
        startX = e.offsetX;
        startY = e.offsetY;
        lineWidth = 1;
    });
    canvas.addEventListener( 'mouseup', () => { isDrawing = false } );

    brush.addEventListener( 'click', setAction );
    eraser.addEventListener( 'click', setAction );


};