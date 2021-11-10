import http from '../utils/http-common'

class UsersService {

    add(user) {
        return http.post("/user.json", { user });
    }

    getAll() {  
        return http.get("/user.json");
    }

    get(id) {
        return http.get(`/users/${id}.json`);
    }

    update(id, user) {
        return http.put(`/users/${id}.json`, { user });
    }

    delete(id) {
        return http.delete(`/users/${id}.json`);
    }
}

export default new UsersService();