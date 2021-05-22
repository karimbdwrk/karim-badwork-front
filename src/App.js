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

  }

  render () {

    return (
      <div className="App">
        <div id="glitchBg"></div>
        <Container>
          <Row className="hello">
            <Col xs={6}><h1 className="">Salut, <br />moi c'est Karim 😁</h1></Col>
          </Row>
          <Row className="min-width">
            <Col className="first-column">
              <h2 className="text-right frontend white">frontend</h2>
              <h2 className="text-right creative red">creative</h2>
              <h2 className="text-right ui blue">user interface</h2>
              <h2 className="text-right dx yellow">developer experience</h2>
            </Col>
            <Col>
              <h2 className="text-left developer">developer</h2>
              <h2 className="text-left designer">designer</h2>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="justify-content-end">
            <Col xs={6}>
              <FirstMessage />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="justify-content-start">
            <Col xs={6}>
              <Description />
            </Col>
          </Row>
        </Container>
        <Container className="d-none">
          <Row>
            <Col>
              <Badwork />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="justify-content-end">
            <Col xs={6}>
              <Typo />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="justify-content-start">
            <Col xs={6}>
              <Shapes />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
  
}

export default App
