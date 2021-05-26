import React from 'react';
import FirstMessage from './components/first-message'
import Description from './components/description'
import Badwork from './components/badwork'
import Typo from './components/typography'
import Shapes from './components/shapes'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import anime from 'animejs/lib/anime.es.js';
import Parallax from 'parallax-js'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {

  componentDidMount() {

    let timelineLeft = anime.timeline({
      easing: 'easeOutQuart',
      loop: true
    })

    let timelineRight = anime.timeline({
      easing: 'easeOutQuart',
      loop: true
    })

    timelineLeft
    .add({
      targets: '.frontend',
      translateY: [-50, 0],
        opacity: [
          { value: [0, 1], duration: 200, easing: 'easeInCubic' },
          { value: [1, 0], duration: 200, delay: 1600 }
        ], 
    })
    .add({
      targets: '.creative',
      translateY: [-50, 0],
        opacity: [
          { value: [0, 1], duration: 200, easing: 'easeInCubic' },
          { value: [1, 0], duration: 200, delay: 3200 }
        ], 
    })
    .add({
      targets: '.ui',
      translateY: [-50, 0],
        opacity: [
          { value: [0, 1], duration: 200, easing: 'easeInCubic' },
          { value: [1, 0], duration: 200, delay: 1600 }
        ], 
    })
    .add({
      targets: '.dx',
      translateY: [-50, 0],
        opacity: [
          { value: [0, 1], duration: 200, easing: 'easeInCubic' },
          { value: [1, 0], duration: 200, delay: 1600 }
        ], 
    })


    timelineRight
    .add({
      targets: '.developer',
      translateY: [-50, 0],
        opacity: [
          { value: [0, 1], duration: 200, easing: 'easeInCubic' },
          { value: [1, 0], duration: 200, delay: 3800 }
        ], 
    })
    .add({
      targets: '.designer',
      translateY: [-50, 0],
        opacity: [
          { value: [0, 1], duration: 200, easing: 'easeInCubic' },
          { value: [1, 0], duration: 200, delay: 5000 }
        ], 
    })

    // anime({
    //   loop: true,
    //   targets: 'h2.text-right',
    //   easing: 'easeOutQuart',
    //   translateY: [-70, 0],
    //   opacity: [
    //     { value: [0, 1], duration: 200 },
    //     { value: [1, 0], duration: 200, delay: 1800 }
    //   ], 
    //   delay: function(el, i, l) {
    //     return i * 2000;
    //   }
    // })

    // anime({
    //   loop: true,
    //   targets: 'h2.text-left',
    //   easing: 'easeOutQuart',
    //   translateY: [-70, 0],
    //   opacity: [
    //     { value: [0, 1], duration: 200 },
    //     { value: [1, 0], duration: 200, delay: 2600 }
    //   ], 
    //   delay: function(el, i, l) {
    //     return i * 3000;
    //   }
    // })

    // timeline
    // .add({
    //     targets: '.left .b',
    //     duration: 1000,
    //     easing: 'easeOutQuart',
    //     opacity: [1, 0]
    //   })
    //   .add({
    //     targets: '.left .a',
    //     duration: 1000,
    //     easing: 'easeOutQuart',
    //     translateY: [-70, 0],
    //     opacity: [0, 1]
    //   }, "+=900")
    //   .add({
    //     targets: '.left .b',
    //     duration: 1000,
    //     easing: 'easeOutQuart',
    //     translateY: [-70, 0],
    //     opacity: [0, 1]
    //   }, "+=2000")
    //   .add({
    //     targets: '.left .a',
    //     duration: 100,
    //     easing: 'easeOutQuart',
    //     opacity: [1, 0]
    //   }, '-=1000')
    //   .add({
    //     targets: '.right .a',
    //     duration: 1000,
    //     easing: 'easeOutQuart',
    //     translateY: [-70, 0],
    //     opacity: [0, 1]
    //   })
    //   .add({
    //     targets: '.right .b',
    //     duration: 1000,
    //     easing: 'easeOutQuart',
    //     translateY: [-70, 0],
    //     opacity: [0, 1]
    //   }, "+=2000")
    //   .add({
    //     targets: '.right .a',
    //     duration: 100,
    //     easing: 'easeOutQuart',
    //     opacity: [1, 0]
    //   }, '-=1000')

    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene);

    var workTitles = document.getElementsByClassName('work-title')
    for (let title of workTitles) {
      new Parallax(title)
    }

    anime({
      targets: '.miam',
      translateX: '100%',
      loop: true,
      duration: 5000, 
      easing: 'linear'
    })

    anime({
      targets: '.top-mouth',
      rotateZ: -30,
      loop: true,
      duration: 1000,
      direction: 'alternate',
      easing: 'linear'
    })

    anime({
      targets: '.bottom-mouth',
      rotateZ: 30,
      loop: true,
      duration: 1000,
      direction: 'alternate',
      easing: 'linear'
    })

    anime({
      targets: '.marker path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "linear",
      duration: 1000
    });

  }

  render () {

    return (
      <div className="App">
        <div id="glitchBg"></div>
        <div id="hero">
          <Container fluid>
            <Row>
              <Col>
                <Container fluid className="parallax-bg">
                  <Row>
                    <Col>
                      <div id="scene">
                        <div data-depth="0.2">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 964 678">
                            <g id="Circle1" data-name="Calque 2">
                              <g id="Circle1-2" data-name="Calque 1">
                                <path d="M259,1A258.07,258.07,0,0,1,359.42,496.73,258.07,258.07,0,0,1,158.58,21.27,256.39,256.39,0,0,1,259,1m0-1C116,0,0,116,0,259S116,518,259,518,518,402,518,259,402,0,259,0Z"/>
                              </g>
                            </g>
                          </svg>
                        </div>
                        <div data-depth="0.6">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 964 678">
                            <g id="Circle2" data-name="Calque 2">
                              <g id="Circle2-2" data-name="Calque 1">
                                <path d="M822.5,396a140.49,140.49,0,1,1-99.35,41.15A139.57,139.57,0,0,1,822.5,396m0-1A141.5,141.5,0,1,0,964,536.5,141.5,141.5,0,0,0,822.5,395Z"/>
                              </g>
                            </g>
                          </svg>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </Col>
            </Row>
            <Row className="hello">
              <Col>
                <h1 className="">Salut, <br />moi c'est <span id="myName">Karim</span> 😁</h1>
                <div className="marker">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 216.03 56.13">
                    <g>
                      <path d="M183.48,49.28S.5,46.64.5,22.64s111-22,111-22,99.82-3,99,19C209.5,46.64,41,50.5,41.25,50.57"/>
                    </g>
                  </svg>
                </div>
              </Col>
            </Row>
            <Row className="min-width subtitle">
              <Col className="first-column" xs={8}>
                <h2 className="text-right frontend white">frontend</h2>
                <h2 className="text-right creative red">creative</h2>
                <h2 className="text-right ui blue">user interface</h2>
                <h2 className="text-right dx yellow">developer experience</h2>
              </Col>
              <Col xs={4}>
                <h2 className="text-left developer">developer</h2>
                <h2 className="text-left designer">designer</h2>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row className="justify-content-start">
              <Col xs={12}>
                <Description />
              </Col>
            </Row>
          </Container>
          <Container>
            <Row className="justify-content-start">
              <Col xs={12}>
                <div className="selected-works">
                  <h2>SELECTED_<br /> &nbsp;&nbsp;WORKS</h2>
                  <div className="works-list">
                    <div className="work">
                      <div className="work-title">
                        <h3 data-depth="0.2">Agence_<br /> Leon</h3>
                        <p data-depth="0.3" className="work-description">Agence de relation presse, Paris & Lyon</p>
                      </div>
                      <div className="illustration">
                        <img src="https://badwork.fr/assets/img/pic-rejoindre.jpg" />
                      </div>
                    </div>
                    <div className="work">
                      <div className="work-title">
                        <h3 data-depth="0.2">Structure_<br /> Paris</h3>
                        <p data-depth="0.3" className="work-description">Agence de relation presse, Paris & Lyon</p>
                      </div>
                      <div className="illustration">
                        <img src="https://badwork.fr/assets/img/pic-rejoindre.jpg" />
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row className="justify-content-start">
              <Col xs={12}>
                <div className="foot-quote">
                  <h2>I'm always interested about cool stuff 😎. Are you minding a project? 🤙</h2>
                </div>
              </Col>
            </Row>
          </Container>
          <Container fluid className="pacman">
            <Row className="justify-content-start">
              <Col xs={12}>
                <div className="miam">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300.5 300">
                    <g>
                      <path className="top-mouth" d="M300.5,150a150,150,0,1,0-150,150V150Z"/>
                      <path className="bottom-mouth" d="M150,0A150,150,0,1,0,300,150H150Z"/>
                    </g>
                  </svg>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* <Container>
          <Row className="justify-content-end">
            <Col xs={6}>
              <FirstMessage />
            </Col>
          </Row>
        </Container> */}
      </div>
    );
  }
  
}

export default App
