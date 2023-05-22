import React, { useState } from 'react'
import './style.css';
import Menu from "./menuApi";
import MenuCard from './MenuCard';
import NavyBar from './NavyBar';
const uniqueList= [
  ...new Set(Menu.map((curElem)=>{
  return curElem.category;
})),"All"];
console.log(uniqueList);
// upr ke outcome se repeations aa rha hai
//new set data structure se repetitions hata dete hai
//output object hai toh uske array me convert krte hai using spread operator ...

const Restro = () => {
    
  const [menuData, setMenuData]= useState(Menu);
//   console.log(menuData);
  //hooks wale statement ko return ke pehele likhna hai
const [menuList, setMenuList]=useState(uniqueList);
  const filterItem= (category) => {

    if(category==="All"){
      setMenuData(Menu);
      return;
    }

    const updatedList = Menu.filter((curElem)=>{
      return curElem.category === category;
       });
       setMenuData(updatedList);
  };
  

    return (
    <>
    <NavyBar  filterItem= {filterItem} menuList={menuList} />
   <MenuCard menuData={menuData}/>
   {/* menuData is an attribute here.Trick to pass data from parent to child */}
    {/* propdrilling */}
    </>
     
    
  )
}

export default Restro
