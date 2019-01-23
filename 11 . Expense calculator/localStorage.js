class LocalStorage {
    setData(data) {
        localStorage.setItem('data', JSON.stringify(data));
    }
    getData() {
        return JSON.parse(localStorage.getItem('data'));
    }
}