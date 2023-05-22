import React from 'react'
// import Menu from './menuApi'
//menuData jo waha attribute tha usko yaha paas krdo
const MenuCard = ({menuData}) => {
    console.log(menuData);
    const myStyle ={ color: "blue"};
    // style as an object
    //useState use krne ke liye either write react.useState or mention it above like already done
  return (
    <>
     <section className='main-card--cointainer'>
    {menuData.map((curElem)=>{
        // destructuring. to remove repeated useage of curElem
        const {id, name, description }= curElem;
        return(
            <>
            <div className='card-container' key={id}>
            <div className='card'>
                <div className='card-body'>
                    <span className='card-number card-circle subtle' style={myStyle}>{id}</span>
                    <span className='card-author subtle' style={{color:"red"}}>{name}</span>
                    <h2 className='card-title'>{name}</h2>
                    <span className='card-description subtle'>{description}
                    </span>
                    <div className='card-read'>Read</div>
                </div>
                <img src={curElem.image} alt='img' className='card-media' />
                <span className='card-tag subtle'>Order Now</span>
    
            </div>
        </div> 
       
        </>  
        );
    })}
      </section>
    </>

    // baar baar likhna nhi padega once prop use krle
  )
}

export default MenuCard
