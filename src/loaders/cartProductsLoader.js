import { getShoppingCart } from "../utility/fakedb";



const cartProductsLoader = async () => {
    const loadedProducts = await fetch('products.json');
    const products = await loadedProducts.json();

    //if cart data is in database then u have to use async await
    const storedCart = getShoppingCart();
    const savedCart = [];

    for (const id in storedCart){
        const addedProduct = products.find(pd => pd.id === id);
        if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
    }
    return savedCart;
    // if u need to return more than 1 things then use [] or {}
    // return {savedCart, products}
    // [products, savedCart]
};

export default cartProductsLoader;