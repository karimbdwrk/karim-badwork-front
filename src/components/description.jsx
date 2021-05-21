import React from 'react';
import anime from 'animejs/lib/anime.es.js';

class Description extends React.Component {
    
    state = {
        view: false
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            console.log(window.scrollX, window.scrollY)

            if (window.scrollY > 200) {
                document.getElementById('description').classList.add('show')
                console.log('show')
            }
        })
    }

    // componentWillUnmount() {
    //     window.removeEventListener('scroll')
    // }
    
    render() {

        return (
            <div id="description" className="description">
                <p>Je suis UI / UX Designer 🖍️ avec une passion pour la <br />
                conception d'expériences utilisateur belles et fonctionnelles.<br />
                Et Développeur Front End 🧑‍💻 qui se concentre<br />
                sur l'écriture de code propre, élégant et efficace.<br />
                Ceci est ma recettte 🍜</p>
            </div>
        )

    }
}

export default Description