import img from "./images/girl-chef.png";


function About(){
    return (
        <section className="about" id="about">
        <h1 className="heading"><span>about us</span></h1>
        <div className="row">
            <div className="content">
                <h3>lets satisfy your hunger with our tasty dishes</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta suscipit animi, aut veniam itaque non consequuntur reiciendis eveniet doloremque! Laboriosam?<br></br>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, vel.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium natus ad voluptatum, voluptates illum animi voluptatibus omnis neque error unde!</p>
                <a href="#"><button className="btn">learn more</button></a>
            </div>

            <div className="image">
                <img src={img} />
            </div>
        </div>            
        </section>
    )
}

export default About;