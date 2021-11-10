import http from '../utils/http-common'

class ProductsService {

    add(product) {
        return http.post("/products.json", { product });
    }

    getAll() {  
        return http.get("/products.json");
    }

    get(id) {
        return http.get(`/products/${id}.json`);
    }

    update(id, product) {
        return http.put(`/products/${id}.json`, { product });
    }

    delete(id) {
        return http.delete(`/products/${id}.json`);
    }
}

export default new ProductsService();