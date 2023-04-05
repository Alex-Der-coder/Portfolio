import groupomania from '../assets/groupomania.png'
import hottakes from '../assets/hottakes.png'
import kanap from '../assets/kanap.png'
import lapanthere from '../assets/lapanthere.png'
import ohmyfood from '../assets/ohmyfood.png'
import booki from '../assets/booki.png'
import lmj from '../assets/lmj.png'
// import portfolio from '../assets/portfolio.png'
import typewritter from '../assets/typewritter.png'

import html from '../assets/technos/html.png'
import css from '../assets/technos/css.png'
import sass from '../assets/technos/sass.png'
import js from '../assets/technos/js.png'
import nodejs from '../assets/technos/nodejs.png'
import mongodb from '../assets/technos/mongodb.png'
import mysql from '../assets/technos/mysql.png'
import reactjs from '../assets/technos/react.png'


export const projectsList = [
    {
        name: 'Groupomania',
        id: 1,
        cover: groupomania,
        description: "Full Stack | Création d'un réseau social d'entreprise dans son intégralité.",
        techno: [html , sass , js , nodejs , mysql , reactjs],
        link: "https://github.com/MadyKramer/groupomania"
    },
    {
        name: 'Hot Takes',
        id: 2,
        cover: hottakes,
        description: "Back-end | Création d'une application web afin que les utilisateurs puissent noter des sauces piquantes",
        techno: [js , nodejs , mongodb ],
        link: "https://github.com/Alex-Der-coder/Projet-6"
    },
    {
        name: 'Kanap',
        id: 3,
        cover: kanap,
        description: "Front-End | Création de la partie front d'un site e-commerce",
        techno: [js],
        link: "https://github.com/Alex-Der-coder/Projet-5-Openclassrooms"
    },
    {
        name: 'La Panthère',
        id: 4,
        cover: lapanthere,
        description: "SEO | Amélioration du référencement et de l'accessibilité",
        techno: [html , css],
        link: "https://alex-der-coder.github.io/Projet-4-Openclassrooms--Alexandre_De-Roeck/"
    },
    {
        name: 'OhMyFood!',
        id: 5,
        cover: ohmyfood,
        description: "Front-End | Création à partir de maquettes d'un site de réservation de menu en ligne",
        techno: [html , css , sass],
        link:"https://alex-der-coder.github.io/Alex-Der-coder.io/"
    },
    {
        name: 'Booki',
        id: 6,
        cover: booki,
        description: "Front-End | Création à partir de maquettes d'un site de plannification de vacances",
        techno: [html , css],
        link:"https://github.com/MadyKramer/Projet2"
    },
    {
        name: 'React_Booki',
        id: 7,
        cover: lmj,
        description: "Front-End | Création à partir de maquettes d'un site de plannification de vacances ",
        techno: [reactjs,sass],
        link: "https://github.com/Alex-Der-coder/Booki-react"
    },
    {
        name: 'Ridding Cities',
        id: 8,
        cover: typewritter,
        description: "Front-End | refonte graphique du site web",
        techno: [html, css, js],
        link: "https://alex-der-coder.github.io/Ridding-Cities/"
    }
    // {
    //     name: 'Portfolio',
    //     id: 9,
    //     cover: portfolio,
    //     description: "Front-End | Création de mon portfolio",
    //     techno: [reactjs, sass],
    //     link: "http://madisonkramer.fr"
    // }
]