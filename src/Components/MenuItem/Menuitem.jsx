import React from 'react'
import './Menuitem.styles.scss'

const Menuitem = ({ title, imageUrl, size }) => {
    return(
        <div className={`${size}  menu-item`}>
            <div className='background-image'
            style = {{
              backgroundImage: `Url(${imageUrl})`
            }}
            />
            <div className='content'>
               <h1 className='title'>{title.toUpperCase()}</h1> 
             <span className='subtitle'>Shop Now</span>
        </div>
     </div>
    )
}
export default Menuitem;