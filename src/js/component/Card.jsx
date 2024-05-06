import { number } from "prop-types";
import React from "react"
const numbers = [1, 2, 3, 4];

export function Card() {
    return (
        <div className="card text-center" >
            <div className="card-body" >
                <img className="card-img-top" src="https://www.nbvplc.com/images/blog/1.jpg" alt="500 x 325" w-100 />
                <h5 className="card-title">Card title</h5>
                <p className="card-text" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus imperdiet lectus at rutrum egestas.</p>
                <div class="card-footer text-muted">
                    <a href="#" className="btn btn-primary" >Find Out More!</a>
                </div>
            </div>

        </div>
    );
};
