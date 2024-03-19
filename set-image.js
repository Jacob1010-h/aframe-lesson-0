AFRAME.registerComponent('set-image', {
    schema: {
        on: {type: 'string'},
        target: {type: 'selector'},
        dur: {type: 'number', default: 300}
    },
    init: function() {
        var data = this.data;
        var el = this.el;

        this.setupFadeAnimation();

        el.addEventListener(data.on, function() {
            data.target.emit('set-image-fade');
            setTimeout(function() {
                var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
                data.target.setAttribute('material', 'color', randomColor);
            }, data.dur);
        });
    },
    setupFadeAnimation: function() {
        var data = this.data;
        var targetEl = this.data.target;

        if (targetEl.dataset.setImageFadeSetup) {
            return;
        }
        targetEl.dataset.setImageFadeSetup = true;
        targetEl.setAttribute('material', 'color', '#FFF');
        targetEl.setAttribute('material', 'shader', 'flat');
        targetEl.setAttribute('material', 'transparent', true);

        targetEl.setAttribute('material', 'color', targetEl.getAttribute('material').color);

        targetEl.setAttribute('material', 'opacity', 0);

        targetEl.setAttribute('animation', {
            property: 'material.opacity',
            startEvents: 'set-image-fade',
            dur: data.dur,
            from: 0,
            to: 1,
            easing: 'linear',
            dir: 'normal'
        });
    }
});