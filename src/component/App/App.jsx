import React,{useState} from "react";
import '../../index.css'
import {useParams,Link} from 'react-router-dom'
import CarPage from "../CarPage";
const App = () => {
  const [open,setOpen] = useState(false)
  const {idx} = useParams()

  const cars = [
    {
      model: "lamborghini",
      price: 33000,
      id: 1,
      description:
        "lamborghini Murcielago  суперкарб выпускавшийся компанией lamborghini в Сант-Агата-Болоньзе.Пришел на смену Lamborghini Diablo в 2001 году..",
      oil: "castrol",
      year: 2001,
      imgSrc:
        "https://w-dog.ru/wallpapers/1/18/515862667873611/lamborghini-murcielago-lp-670-4-superveloce-chernyj-moshh.jpg",
    },
    {
      model: "Mercedes-Benz",
      price: 25000,
      id: 2,
      description:
        "Одни из самых желанных спорткаров эпохи - Mercedes-Benz SLS AMG и Ford GT.",
      oil: "castrol",
      year: 2003,
      imgSrc:
        "https://avtorinok.ru/photo/pics/hennessey/ford-gt/79894.jpg",
    },
  ];
  return (
  !idx ? <div className="main">
    {cars.map((item) => {
      return (
        <Link onClick={()=>{setOpen(true)}} to={`/${item.id}`} >
        <div className="car">
          <div className="imgBlock">
            <img src={item.imgSrc}/>
         
          </div>  <div className="block"> <p>{item.price}</p>
          <div className="model">Model:{item.model}</div></div>
       
        </div></Link>
      );
    })}
  </div>:<> <div className="main">
    {cars.map((item) => {
      return (
        <Link onClick={()=>{setOpen(true)}} to={`/${item.id}`} >
        <div className="car">
          <div className="imgBlock">
            <img src={item.imgSrc}/>
         
          </div>  <div className="block"> <p>{item.price}</p>
          <div className="model">Model:{item.model}</div></div>
       
        </div></Link>
      );
    })}
  </div><CarPage/></>
  );
};

export default App;
