import image1 from '../image/Vector(1).svg'
import image2 from '../image/Vector(2).svg'
import image3 from '../image/Vector(3).svg'
import image4 from '../image/Rectangle 12.svg'
import image5 from '../image/Rectangle 13.svg'
import image6 from '../image/Group 4.svg'



function Gallery(props){
    return(
        <div>
            <ul className='ganders'>
                <li>MEN</li>
                <li>WOMEN</li>
                <li>KIDS</li>
            </ul>
            <div className='search'>
                <img src={image6} alt="" />
                <input type="text" />
                <button>Search</button>
            </div>
            <div className="Collection">
                <div className="Collection_text">
                    <div>
                        <h1>New <br/>Collection</h1>
                        <p>Summer <br/> 2024</p>
                    </div>
                    <div className='buttons'>
                        <button className='shopbut'>Go To Shop <img src={image1} alt="" /></button>
                        <div className='arrows'>
                            <button className='arrow'><img src={image3} alt="" /></button>
                            <button className='arrow'><img src={image2} alt="" /></button>
                        </div>
                    </div> 
                </div>
                <div className='Collection_images'>
                    <img src={image4} alt="" />
                    <img src={image5} alt="" />
                </div>
            </div>
        </div>
    )
}


export default Gallery