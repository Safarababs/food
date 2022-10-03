import img1 from "./images/chef1.jpg";
import img2 from "./images/chef2.jpg";
import img3 from "./images/chef3.jpg";
import img4 from "./images/chef4.jpg";

function Chef() {
    return (
        <section className="chef" id="chef">

            <h1 className="heading"> <span> expert chefs </span> </h1>

            <div className="box-container">

                <div className="box">
                    <img src={img1} alt="" />
                    <div className="info">
                        <h3>john deo</h3>
                        <span>head chef</span>
                        <div className="share">
                            <a href="#" className="fab fa-facebook-f"></a>
                            <a href="#" className="fab fa-pinterest"></a>
                            <a href="#" className="fab fa-instagram"></a>
                            <a href="#" className="fab fa-twitter"></a>
                        </div>
                    </div>
                </div>

                <div className="box">
                    <img src={img2} alt="" />
                    <div className="info">
                        <h3>john deo</h3>
                        <span>head chef</span>
                        <div className="share">
                            <a href="#" className="fab fa-facebook-f"></a>
                            <a href="#" className="fab fa-pinterest"></a>
                            <a href="#" className="fab fa-instagram"></a>
                            <a href="#" className="fab fa-twitter"></a>
                        </div>
                    </div>
                </div>

                <div className="box">
                    <img src={img3} alt="" />
                    <div className="info">
                        <h3>john deo</h3>
                        <span>head chef</span>
                        <div className="share">
                            <a href="#" className="fab fa-facebook-f"></a>
                            <a href="#" className="fab fa-pinterest"></a>
                            <a href="#" className="fab fa-instagram"></a>
                            <a href="#" className="fab fa-twitter"></a>
                        </div>
                    </div>
                </div>

                <div className="box">
                    <img src={img4} alt="" />
                    <div className="info">
                        <h3>john deo</h3>
                        <span>head chef</span>
                        <div className="share">
                            <a href="#" className="fab fa-facebook-f"></a>
                            <a href="#" className="fab fa-pinterest"></a>
                            <a href="#" className="fab fa-instagram"></a>
                            <a href="#" className="fab fa-twitter"></a>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Chef;