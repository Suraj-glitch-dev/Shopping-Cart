import React from "react";
import Products from "./Products";

const Home = () => {
    return (
        <div className="Hero">
            <div class="card bg-dark text-white border-0">
                <img src="/assets/bg3.jpg" class="card-img" alt="Background"
                height="750px" />
                    <div class="card-img-overlay d-flex flex-column justify-content-center">
                        <div className="container">
                        </div>
                        <h5 class="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                        <p class="card-text lead fs-2">CHECK OUT THE LATEST TRENDS</p>
                    </div>
            </div>
            <Products/>

        </div>
    );
}

export default Home;
