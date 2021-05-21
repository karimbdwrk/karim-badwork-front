import React, { Component } from 'react';
import anime from 'animejs/lib/anime.es.js';

class Badwork extends React.Component {

  componentDidMount() {

    let timeline = anime.timeline({
      easing: 'linear',
      duration: 750
    });

    // timeline
    //   .add({
    //     targets: '.cls-1.first-step',
    //     duration: 1000,
    //     easing: 'easeOutQuart',
    //     translateX: -70
    //   })
    //   .add({
    //     targets: '.cls-1.letter-r',
    //     duration: 1000,
    //     easing: 'easeOutQuart',
    //     rotateX: '.5turn'
    //   }, '-=1000')
    //   .add({
    //     targets: '.cls-1.last-step',
    //     duration: 1000,
    //     easing: 'easeOutQuart',
    //     translateX: 85
    //   }, '-=1000')


  }

  render () {

    return (
        <div className="App">
          <div id="logoBlend">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 113.08">
              <g id="badwork">
                <g id="badwork_group">
                  <path className="cls-1 letter-b first-step" d="M0,109.77V2.73H92.94q23.73,0,36.47,5.61t12.73,19.28q0,10.36-6.69,16.47t-20.79,8v.29q15.25,2,24,9a22.23,22.23,0,0,1,8.7,18.2q0,17.7-15.11,24t-39.42,6.26ZM78.12,46.32q4.89,0,7.27-1.51A5.28,5.28,0,0,0,87.76,40q0-3.74-2.23-5.46T78.7,32.8H58.84V46.32Zm.29,33.38q5.32,0,7.84-1.8t2.52-6.11A6,6,0,0,0,86,66.32q-2.73-1.72-8.2-1.72h-19V79.7Z"/>
                  <path className="cls-1 letter-a first-step" d="M321.55,109.77H256.66l-4.32-16.11H218.1l-4.17,16.11H149.19l41-107h89.06ZM233.93,33.52l-8.34,31.94h19.27l-8.48-31.94-.87-4.46h-.72Z"/>
                  <path className="cls-1 letter-w" d="M587.12,109.77H518.35L489,2.73h58.13l13.09,68.48.43,2.74h.29l.72-3.31L577.2,2.73h48l15.54,67.91.72,3.16h.28l.44-2.59L655.17,2.73h58.27l-29.35,107H615.32L601.8,48.63l-.43-2.45h-.29l-.43,2.45Z"/>
                  <path className="cls-1 letter-o" d="M737.54,98.69Q716.75,84.31,716.75,57V56q0-27.18,20.86-41.57T797.46,0q39,0,59.7,14.39T877.88,56v1q0,27.33-20.79,41.72t-59.78,14.39Q758.33,113.08,737.54,98.69Zm73.51-28.91q5-4.61,5-12.81V56q0-8.19-5-12.66t-13.74-4.46q-8.77,0-13.74,4.39t-5,12.73v1q0,8.34,5,12.88t13.74,4.53Q806.09,74.38,811.05,69.78Z"/>
                  <path className="cls-1 letter-r" d="M889,109.77V2.73h85.6q32.52,0,46.9,9.71t14.39,26.4q0,10.94-6.26,18.56t-18.34,10.65v.14a35.42,35.42,0,0,1,10.21,4.61,17.51,17.51,0,0,1,5.61,6.76,57.73,57.73,0,0,1,3.74,11.65l.87,3.31a86.29,86.29,0,0,0,4.46,15.25H976.29q-2-4-3.31-13.67l-.58-3.16a9.87,9.87,0,0,0-3.59-6.4q-2.88-2.24-9.36-2.23H950v25.46Zm75.82-55.1q5.46,0,8.34-2.45a8.56,8.56,0,0,0,2.88-6.9,7.91,7.91,0,0,0-3-6.62q-3-2.3-8.27-2.3H950V54.67Z"/>
                  <path className="cls-1 letter-d first-step" d="M393.07,109.58h-60V2.58h72v34h-12v39l12.37-.1-.37,34.07Z"/>
                  <path className="cls-1 letter-d right" d="M394.44,75.48h12c6.24,0,11-1.23,14.44-4.25s5.18-8,5.18-15S424.33,44,420.88,41s-8.11-4.47-14.44-4.47h-13l-60.32-.14V2.53h83.59q37,0,54.09,14.39T487.92,56.2q0,24.74-16.83,39.06t-54.38,14.31H333.12V75.76Z"/>
                  <path className="cls-1 letter-k" d="M1165.79,73.6h-59v36.54h-61V3.11h61V39.94h59Z"/>
                  <path className="cls-1 letter-k right last-step" d="M1046.44,73.48V39.94h68.35L1129,3.11h65.18L1166.58,55v1.15l32.23,54h-66.47L1114.79,73.6Z"/>
                </g>
              </g>
            </svg>
          </div> 
        </div>
      );

    }

  
}

export default Badwork;
