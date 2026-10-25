import React, { useEffect, useRef } from 'react';
import noUiSlider from 'nouislider';

// Stands in for react-nouislider (abandoned in 2017): same props, current noUiSlider underneath.
function Nouislider({ range, start, connect, onSlide }) {
    const sliderRef = useRef(null);

    useEffect(() => {
        const slider = noUiSlider.create(sliderRef.current, {
            range,
            start,
            // noUiSlider 9 dropped the 'lower' / 'upper' shorthands
            connect: connect === 'lower' ? [true, false] : connect === 'upper' ? [false, true] : connect
        });
        if (onSlide) slider.on('slide', onSlide);
        return () => slider.destroy();
    }, []);

    return <div ref={sliderRef} />;
}

export default Nouislider;
