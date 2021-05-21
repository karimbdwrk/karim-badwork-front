import React from 'react';
import anime from 'animejs/lib/anime.es.js';

class Shapes extends React.Component {
    state = { 
        isLoaded: true
    }

    componentDidMount() {
        var tl = anime.timeline({
            targets: '.shape',
            delay: function(el, i) { return i * 200 },
            duration: 500, // Can be inherited
            easing: 'easeOutExpo', // Can be inherited
            direction: 'alternate', // Is not inherited
            loop: true // Is not inherited
          });
          
          tl
          .add({
            translateX: '50vw',
            // override the easing parameter
            easing: 'spring',
          })
          .add({
            opacity: .5,
            scale: 1.5
          })
          .add({
            // override the targets parameter
            targets: '.shape.triangle',
            rotate: 180
          })
          .add({
            translateX: 0,
            scale: 1
          });
    }

    render() { 
        return ( 
            <div className="shapes">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 711">
                    <g className="shape square yellow">
                        <rect  y="256" width="200" height="200"/>
                    </g>
                    <g className="shape circle blue">
                        <circle cx="100" cy="100" r="100"/>
                    </g>
                    <g className="shape triangle red">
                        <polygon points="0 711 100 511 200 711 0 711"/>
                    </g>
                </svg>
            </div>
        )
    }
}
 
export default Shapes;