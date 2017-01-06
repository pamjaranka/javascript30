// window.onload = function() {
    const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];
    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }
    // Regular
    console.log('hello');
    // Interpolated
    console.log('hello i am a %s string', 'Ana');
    // Styled
    console.log('%c i am some great text', 'font-size: 50px');
    // warning!
    console.warn('OH NOO');
    // Error :|
    console.error('SHIT!');
    // Info
    console.info('You can see Galo effect in Belarus today.');
    // Testing
    const p = document.querySelector('p');
    console.assert( p.classList.contains('ouch'), 'That is wrong');
    // clearing
    console.clear();
    // Viewing DOM Elements
    console.dir(p);
    // Grouping together
    dogs.forEach( dog => {
        // console.group(`${dog.name}`);
        console.groupCollapsed(`${dog.name}`);
        console.log(`This is ${dog.name}`);
        console.log(`${dog.name} is ${dog.age} years old`);
        console.log(`${dog.name} is ${dog.age * 7} dog years old`);
        console.groupEnd(`${dog.name}`);

    })
    // counting
    console.count('Wes');
    console.count('Wes');
    console.count('Wes');
    // timing
    console.time('timing loop');

    const count = dogs.length;
    dogs.forEach( logArrayElements );

    function logArrayElements(element, index, array) {
        if( index == count - 1)
            console.timeEnd('timing loop');
    }

    console.table(dogs);




// };