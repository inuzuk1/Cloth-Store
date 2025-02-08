import image1 from '../image/Group 9.svg'
import image2 from '../image/Group 10.svg'
import image3 from '../image/Group 11.svg'
import image4 from '../image/Group 53.svg'





function Header(props){



    return(
        <div className='Header'>
            <div className='pages'>
                <div className='Burger'>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className='pages-list'>
                    <li>Home</li>
                    <li>Collections</li>
                    <li>New</li>
                </ul>
            </div>
            <div className="theme">
               <img src= {image4} alt="" />
            </div>
           <div className='nav'>
                <div className='heartBack'>
                    <div className="heart"> <img src= {image1} alt="" /></div>
                </div>
                <button className="cart">Cart</button>
                <div className="shop"> <img src= {image3} alt="" /></div>
                <div className="user"> <img src={image2} alt=""/></div>
           </div>
           

        </div>
       
    )
}


export default Header