/* Pikr Init*/
"use strict";
const pickr = Pickr.create({
    el: '.color-picker',
	default: '#00acf0',
	position: 'left',
    components: {
		preview: true,
        opacity: true,
        hue: true,
		interaction: {
            hex: true,
            rgba: true,
            hsva: true,
            input: true,
            clear: true,
            save: true
        }
    }
});