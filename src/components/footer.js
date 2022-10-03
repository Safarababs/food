function Footer() {
    return (
        <section className="footer">

            <img src="images/shape-top.png" alt="" />

            <div className="box-container">

                <div className="box">
                    <h3 className="heading"> <span>why choose us?</span> </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus iste unde reprehenderit vitae consequatur incidunt totam aperiam culpa. Repellat, fugiat?</p>
                </div>

                <div className="box">
                    <h3 className="heading"> <span>locations</span> </h3>
                    <a href="#">pakistan</a>
                    <a href="#">USA</a>
                    <a href="#">france</a>
                    <a href="#">russia</a>
                </div>

                <div className="box">
                    <h3 className="heading"> <span>quick links</span> </h3>
                    <a href="#">home</a>
                    <a href="#">about</a>
                    <a href="#">dishes</a>
                    <a href="#">chef</a>
                    <a href="#">speciality</a>
                    <a href="#">contact</a>
                </div>

                <div className="box">
                    <h3 className="heading"> <span>contact us</span> </h3>
                    <p> <i className="fas fa-map-marker-alt"></i> lahore, pakistan 40540 </p>
                    <p> <i className="fas fa-envelope"></i> xyx@gmail.com </p>
                    <p> <i className="fas fa-globe"></i> www.yourwebsite.com </p>
                </div>

            </div>

            <h1 className="credit"> copyright © <span>mr. safar abbas</span> @ {new Date().getFullYear()} | all rights reserved! </h1>

        </section>
    )
}

export default Footer;