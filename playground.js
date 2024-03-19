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
            let newBox = document.createElement('a-entity');
            newBox.setAttribute('geometry', 'primitive: box');
            newBox.setAttribute('position', getRandomPosition());
            newBox.addEventListener('foo', function() {
                newBox.setAttribute('material', 'color: blue')
            });
            newBox.setAttribute('cursor-listener', '');
            newBox.setAttribute('set-image', 'on: click; target: ; dur: 300');
            newBox.setAttribute('id', "https://www.google.com/")
            newBox.emit('foo');
            sceneEl.appendChild(newBox);
        }



        console.log(boxEl);

    },
});

AFRAME.registerComponent('cursor-listener', {
    init: function () {
        var lastIndex = -1;
        var COLORS = ['red', 'green', 'blue'];
        this.el.addEventListener('click', function (evt) {
            lastIndex = (lastIndex + 1) % COLORS.length;
            this.setAttribute('material', 'color: '+COLORS[lastIndex]);
            console.log('I was clicked at: ', evt.detail.intersection.point);
        });
        this.el.emit('clcik');
    }
});

function getRandomPosition() {
    return {
        x: (Math.random() - 0.5) * 10,
        y: (Math.random() - 0.5) * 10,
        z: (Math.random() - 0.5) * 10
    };
}

