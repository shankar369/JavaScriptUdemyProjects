class EasyHTTP{
    
    //GET
    async getData(url){
        const response = await fetch(url);
        const resData = await response.json();
        return resData;
    }

    //POST
    async postData(url,data){
        const response = await fetch(url,{
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(data)
        });
        const resData = await response.json();
        return resData;
    }

    //PUT(UPDATE)
    async putData(url,data){
        const response = await fetch(url,{
            method : 'PUT',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(data)
        });
        const resData = await response.json();
        return resData;
    }

    //DELETE
    async deleteData(url){
        const response = await fetch(url);
        const resData = await 'Data Deleted Successfully.......';
        return resData;
    }
}