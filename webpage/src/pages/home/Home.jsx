import React from 'react'
import Carusel from 'react-elastic-carousel'
import Carrusel from '../../Components/pure/Carrusel'
import Item from '../../Components/pure/Item'


export const Home = () => {


  const breakPoints = [
    {
      width: 1, itemsToShow:2
    },
    {
      width: 550, itemsToShow:2
    },
    {
      width: 700, itemsToShow:3
    },
    {
      width: 1200, itemsToShow:4
    },
  ]


  return (
    <main className='container'>
      <section className='p-5'>

      <p>

      ¿Por qué elegimos esta paleta de colores?
  Al comenzar, pensamos en los colores que podría representar la votación, descartamos hacer referencia a los colores nacionales como el amarillo o celeste ya que en general, ese concepto no está ligado a un solo país y además seria muy monotono ya que es uno de ellos es utilizado casi en todas partes cuando se trata de algun asunto con residencia en Argentina y su gobierno, por lo que nos quedamos con el blanco ya que, es el propio votante quén, en sentido figurado, es el que elije el color de la hoja de voto (siendo el color, aquel partido o individuo que haya votado), aunque eso sería una resolución bastante vaga ya que la idea de un papel blanco es muy simplona y ya está establecida como una norma en casi, si no todos, los papeles que encontramos en el mundo. Ante ello, buscando la forma de mantener el recorrido de conclusiones llegadas hasta el momento, se nos vino a la mente el papel que se usaba antiguamente, el papiro, siendo de un color más amarillento y que aún mantiene el concepto de papel en blanco aunque no sea un blanco puro. Por otro lado, el uso de ese color mantiene unas ventajas reales, es un color de tono cálido y a la vez con algo de brillo, existe un efecto en los ojos que produce la luz azul o colores cercanos a ésta, pudiendo reducir la somnolencia en largos periodos de exposición, siendo una desventaja considerable para aquellos lectores que se presencian en un ambiente oscuro ya que probablemente no querrían tener un ciclo de sueño desplazado solo por leer un artículo y no ser consciente de ello, además que también en esos casos producen una fatiga visual y eso dificultará la lectura y la continuación de la misma, aquellos colores oscuros se mantienen en proporción al color papiro en lo que nos ofrece una forma de contrastarlo

      </p>

      </section>


      <section className='p-1 '>

        <Carrusel></Carrusel>

      </section>
    </main>
  )
}
