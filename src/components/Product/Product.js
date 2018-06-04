import React, {Component} from "react";

class Product extends Component {
    render() {
        return(
            <div className="item">
                <div className="image">
                    <img src="https://placekitten.com/200/200" alt="First"/>
                </div>
                <div className="middle aligned content">
                    <div className="description">
                        <a>Fort Knight</a>
                        <p>Authentic renaissance actors, delivered in just two weeks.</p>
                    </div>
                    <div className="extra">
                        <span>Submitted by:</span>
                        <img src="https://placekitten.com/50/50" alt="Second"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product;