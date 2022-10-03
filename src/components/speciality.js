import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";



function Speciality() {
    return (
        <section className="speciality" id="speciality">

            <h1 className="heading"> <span> our speciality </span> </h1>

            <div className="box-container">

                <div className="box">
                    <img src={img1} alt="" />
                    <div className="info">
                        <h3>tasty hamburger</h3>
                        <p>upto 25% discount</p>
                        <a href="#"><button className="btn"> check out </button></a>
                    </div>
                </div>

                <div className="box">
                    <img src={img2} alt="" />
                    <div className="info">
                        <h3>fresh bearkfast</h3>
                        <p>upto 25% discount</p>
                        <a href="#"><button className="btn"> check out </button></a>
                    </div>
                </div>

                <div className="box">
                    <img src={img3} alt="" />
                    <div className="info">
                        <h3>veg sandwich</h3>
                        <p>upto 25% discount</p>
                        <a href="#"><button className="btn"> check out </button></a>
                    </div>
                </div>

                <div className="box">
                    <img src={img4} alt="" />
                    <div className="info">
                        <h3>delicious pizza</h3>
                        <p>upto 25% discount</p>
                        <a href="#"><button className="btn"> check out </button></a>
                    </div>
                </div>

            </div>

            <div className="icons-container">

                <div className="icons">
                    <i className="fas fa-shipping-fast"></i>
                    <h3>fast delivery</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, quisquam.</p>
                </div>

                <div className="icons">
                    <i className="fas fa-tags"></i>
                    <h3>heavy discounts</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, quisquam.</p>
                </div>

                <div className="icons">
                    <i className="fas fa-hand-holding-usd"></i>
                    <h3>money returns</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, quisquam.</p>
                </div>

                <div className="icons">
                    <i className="fas fa-headset"></i>
                    <h3>24 x 7 support</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, quisquam.</p>
                </div>

            </div>

        </section>
    )
}

export default Speciality;