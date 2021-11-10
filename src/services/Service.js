import http from '../Http_Common';

class Service {
    getData(city, key){
        return http.get(`/weather?q=${city}&appid=${key}`)
    }
}

export default new Service();