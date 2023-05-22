import React from 'react'

const NavyBar = ({filterItem, menuList}) => {
  return (
    <>
     <nav className='navbar'>
      <div className='btn-group'>
        {
            menuList.map((curElem)=>{
                return (<button className='btn-group__item' onClick={()=>filterItem(curElem)}>{curElem}</button>)

            })
        }
        {/* adat dalo fat arrow func se func call krne ka */}
        {/* <button className='btn-group__item' onClick={()=>filteritem("breakfast")} >Breakfast</button>
        <button className='btn-group__item' onClick={()=>filteritem("lunch")}>Lunch</button>
        <button className='btn-group__item' onClick={()=>filteritem("evening")}>Snack</button>
        <button className='btn-group__item' onClick={()=>filteritem("dinner")}>dinner</button>
        <button className='btn-group__item' onClick={()=>setMenuData(Menu)}>All</button> */}
      </div>
    </nav>
 
      
    </>
  )
}

export default NavyBar
