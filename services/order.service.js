import http from '../utils/http-common'

class OrderService{

    addOrder(){
        return http.post('/orders.json', { order });
    }

    getOrders(id){
        return http.get('/orders.json');
    }
}

export default new OrderService();