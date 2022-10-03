import img1 from "./images/sandwich1.jpg";
import img2 from "./images/sandwich2.jpg";
import img3 from "./images/sandwich3.jpg";
import img4 from "./images/cake1.jpg";
import img5 from "./images/cake2.jpg";
import img6 from "./images/cake3.jpg";
import img7 from "./images/juice1.jpg";
import img8 from "./images/juice2.jpg";
import img9 from "./images/chocolate.jpg";


function Dishes(){
    return (
        <section className="dishes" id="dishes">
            <h1 className="heading"><span>popular dishes</span></h1>

            <ul className="controls">
                <li className="buttons button-active" data-filter="all">all</li>
                <li className="buttons" data-filter="sandwich">sandwich</li>
                <li className="buttons" data-filter="cake">cake</li>
                <li className="buttons" data-filter="juice">juice</li>
                <li className="buttons" data-filter="chocolate">chocolate</li>
            </ul>

            <div className="image-container">
                <div className="image sandwich">
                    <img src={img1} alt="this image is not supported for your browser contact your developer" />
                    <a href="#home">sandwich</a>
                </div>

                <div className="image sandwich">
                    <img src={img2} alt="this image is not supported for your browser contact your developer" />
                    <a href="#home">sandwich</a>
                </div>

                <div className="image sandwich">
                    <img src={img3} alt="this image is not supported for your browser contact your developer" />
                    <a href="#home">sandwich</a>
                </div>

                <div className="image sandwich">
                    <img src={img4} alt="this image is not supported for your browser contact your developer" />
                    <a href="#home">sandwich</a>
                </div>

                <div className="image sandwich">
                    <img src={img5} alt="this image is not supported for your browser contact your developer" />
                    <a href="#home">sandwich</a>
                </div>

                <div className="image sandwich">
                    <img src={img6} alt="this image is not supported for your browser contact your developer" />
                    <a href="#home">sandwich</a>
                </div>

                <div className="image sandwich">
                    <img src={img7} alt="this image is not supported for your browser contact your developer" />
                    <a href="#home">sandwich</a>
                </div>

                <div className="image sandwich">
                    <img src={img8} alt="this image is not supported for your browser contact your developer" />
                    <a href="#home">sandwich</a>
                </div>

                <div className="image sandwich">
                    <img src={img9} alt="this image is not supported for your browser contact your developer" />
                    <a href="#home">sandwich</a>
                </div>
            </div>
        </section>
    )
}

export default Dishes;