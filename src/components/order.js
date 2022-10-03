function Order() {
    return (
        <section className="order" id="order">
        <h1 className="heading"> <span> order now </span> </h1>

        <form action="">

            <div className="inputBox">
                <input type="text" placeholder="full name"></input>
                <input type="text" placeholder="food name"></input>
            </div>

            <div className="inputBox">
                <input type="number" placeholder="phone number"></input>
                    <select name="" id="">
                        <option value="food type" disabled >food type</option>
                        <option value="veg">veg</option>
                        <option value="non-veg">non-veg</option>
                    </select>
            </div>

            <div className="inputBox">
                <textarea cols="30" rows="10" placeholder="full address"></textarea>
                <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.3448351768534!2d72.8194324144256!3d19.136377055045728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7ddc82073d7%3A0x3aa5a7ce31b7b9dd!2sRestaurants!5e0!3m2!1sen!2sin!4v1612270030599!5m2!1sen!2sin" frameBorder="0" style={{border:"0"}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
            </div>

            <input type="submit" value="order now" className="btn"></input>

        </form>

    </section>
    )
}

                    export default Order;