import homePage from "../views/homePage.js"
import productsList from "../views/productList.js"
import productDetails from "../views/productDetails.js"
import pageNotFound from "../views/pageNotFound.js"

const routes : any = {
    // "/": homePage(),
    // "/index.html": homePage(),
    // "/product-list.html": productsList(),
    // "/product-details.html": productDetails(),
    // "/notFound": pageNotFound(),
}

export default function getCurrentRoute(route: string): void {
    return routes[route] ? routes[route] : routes["/notFound"];
}
