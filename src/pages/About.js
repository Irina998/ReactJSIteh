import React from 'react'
import BannerImage from '../assets/krofnice.JPG'
import '../styles/About.css'

function About() {
    return (
        <div className="about">
            <div className="aboutTop"
            style={{ backgroundImage : `url(${BannerImage})`}}></div>
            <div className="aboutBottom">
                <h1>O NAMA</h1>
                <p> Dobro došli. Ovo je Tvoj slatkiš priča. Ugasite svetlo i  ušuškajte se, jer ulazite u čarobni svet krofni, slatkiša i iznenađenja.</p>

<p> Tvoj slatkiš je ljubavna priča. U toj priči, princeza se zaljubila u krofne i tako je nastao Tvoj slatkiš. Dok princeza čeka svog princa, ona vredno radi i otkriva nove ukuse, oblike i dekoracije koje čine naše slatkiše jedinstvenim. </p>

<p> Krofne koje nastaju iz ljubavi princeze imaju tu moć da spoje krajnosti u savršeno zadovoljstvo, gde tradicionalni recepti naših baka i najkvalitetniji sastojci i prelivi, uz moderno pakovanje i dekoraciju osvajaju na prvi pogled. </p>

<p> Slatkiši iz Tvog slatkiša osvajaju i naše bake, čije smo tradicionalne recepte pretvorili u poslastice koje sve vraćaju u detinjstvo. Sada ovde žive krofne, mafini i torte, svih ukusa i oblika: dostupne svima za degustaciju ili preterivanje, u svakom slučaju za uživanje. </p>
            </div>
        </div>
    )
}

export default About
