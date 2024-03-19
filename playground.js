AFRAME.registerComponent('playground', {
    /**
     * Code within this function will be called when everything in
     * <a-scene> is ready and loaded.
     */

    init: function () {
        console.log('Welcome, class!');

        let sceneEl = document.querySelector('a-scene');
        console.log(sceneEl);
        let boxEl = sceneEl.querySelector('a-box');
        boxEl.setAttribute('rotation', {x:0, y:45, z:45});

        for (let i = 0; i < 99; i++) {
            let newBox = document.createElement('a-box');
            newBox.setAttribute('position', getRandomPosition());
            newBox.addEventListener('foo', function() {
                newBox.setAttribute('color', 'red');
            });
            newBox.emit('foo');
            sceneEl.appendChild(newBox);
            
        }

        console.log(boxEl);

    },
});

function getRandomPosition() {
    return {
        x: (Math.random() - 0.5) * 10,
        y: (Math.random() - 0.5) * 10,
        z: (Math.random() - 0.5) * 10
    };
}

