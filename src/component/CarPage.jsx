import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
const CarPage = () => {
let {idx} = useParams()
const [mod,setmod] = useState('modal')
console.log(idx[1]);
    const  cars = [
        {
        model: 'lamborghini',
        price: 33000,
        id: 1,
        description: 'lamborghini Murcielago  суперкарб выпускавшийся компанией lamborghini в Сант-Агата-Болоньзе.Пришел на смену Lamborghini Diablo в 2001 году.',
        oil: 'castrol',
        year: 1964,
        imgSrc: 'https://www.avtorinok.ru/photo/pics/lamborghini/murcielago-lp670-4-superveloce/65499.jpg',
      },
      {
          model: 'Mercedes-Benz',
          price: 25000,
          id: 2,
          description: 'Одни из самых желанных спорткаров эпохи - Mercedes-Benz SLS AMG и Ford GT.',
          oil: 'castrol',
          year: 2003,
          imgSrc: 'https://sun6-21.userapi.com/impg/gS_JzlJyQL6LhwIIqf7ibp3nyyBcO_kmLrmn8A/yIcaA2nVWYs.jpg?size=604x371&quality=96&sign=8439b19c1ee7ed38252650c1b5e0bb3b&type=album',
        }
      ]
      console.log(cars[+idx-1].imgSrc);
  return (
 

      
       
        <div className="car mod">
            <div className='modal'>
           <Link to={'/'}> <p>Close</p></Link>
          <div className="imgBlock">
            <img src={cars[+idx-1].imgSrc}/>
            
          </div><div className="block"><p>{cars[+idx-1].price}</p>
          <div className="model">Model:{cars[+idx-1].model}</div></div>
          <p className='desc'>{cars[+idx-1].description}</p></div>
        </div>
      
    

  )
}

export default CarPage