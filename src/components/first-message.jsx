import React, { Component } from 'react';
import anime from 'animejs/lib/anime.es.js';

class FirstMessage extends Component {
    state = { 
        content: 'Salut, tu peux scroller si tu veux 😁'
    }

    componentDidMount() {
        let timeline = anime.timeline()

        timeline
        .add({
            targets: '.bubble',
            translateX: [0, 50],
            translateY: [200, 100], 
            opacity: [0, 1],
            delay: 3000
        })
        .add({
            targets: '.loading',
            opacity: [1, 0],
            delay: 3000
        })
        .add({
            targets: '.bubble', 
            width: [70, 320],
            duration: 250,
            easing: 'easeOutExpo'
        }, '-=1000')
        .add({
            targets: '.content', 
            opacity: [0, 1],
            easing: 'easeOutExpo'
        }, '-=800')

    }

    render() { 
        return ( 
            <div className="bubble">
                <div className="loading"><b>•</b><b>•</b><b>•</b></div>
                <div className="content">{this.state.content}</div>
            </div>
        );
    }
}

export default FirstMessage;