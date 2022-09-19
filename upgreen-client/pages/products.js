import Products from "../componenets/products/Products"

import Footer from "../componenets/footer/Footer"

const products = () => {

    return (
        <div className="container">
            <h1 style={
                { textAlign: 'center', padding: '20px' }
            }>Upgreen</h1>
            <div class="card text-center">
                <div class="card-header">
                    Featured
                </div>
            </div>

            <Products />

            <Footer />

        </div>
    )
}

export default products