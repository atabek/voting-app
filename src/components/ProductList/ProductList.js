import React, {Component} from "react";

import Product from "../Product/Product";
import data from "../../js/seed";

class ProductList extends Component {
    handleProductUpVote(productId) {
        console.log(productId + ' was clicked.');
    }
    render() {
        const products = data.sort((a,b) => (
            b.votes - a.votes
        ));
        
        const productComponents = products.map((product) => (
            <Product 
                key={"product" + product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                url={product.url}
                votes={product.votes}
                submitterAvatarUrl={product.submitter_avatar_url}
                productImageUrl={product.product_image_url}
                onVote={this.handleProductUpVote}
            />
        ));
        return(
            <div className="ui unstackable items">
                {productComponents}
            </div>
        )
    }
}

export default ProductList;