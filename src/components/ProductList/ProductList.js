import React, { Component } from "react";

import Product from "../Product/Product";
import data from "../../js/seed";

class ProductList extends Component {
    state = {
        products: [],
    };

    componentDidMount() {
        this.setState({
            products: data
        });
    }
    handleProductUpVote = (productId) => {
        const nextProducts = this.state.products.map((product) => {
            if (product.id === productId) {
                return Object.assign({}, product, {
                    votes: product.votes + 1,
                });
            } else {
                return product;
            }
        });
        this.setState({
            products: nextProducts,
        });
    }
    render() {
        const products = data.sort((a, b) => (
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
        return (
            <div className="ui unstackable items">
                {productComponents}
            </div>
        )
    }
}

export default ProductList;