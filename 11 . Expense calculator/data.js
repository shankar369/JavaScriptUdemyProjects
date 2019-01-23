var OurDataStructure = {
    //To store items
    items: [
        /*{
            id : 1,
            item_name : "banana",
            calories : 500
        },
        {
            id : 2,
            item_name : "apple",
            calories : 900
        },
        {
            id : 3,
            item_name : "mango",
            calories : 600
        }*/
    ],

    //for total calories count
    totalCalories: 0

};

if (localStorage.getItem('data') !== null) {
    OurDataStructure = JSON.parse(localStorage.getItem('data'));
    //console.log(OurDataStructure);
}