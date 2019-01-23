class Code {
    constructor() {
        this.showData()
        if(OurDataStructure.items.length === 0){
            ui.hideTable();
        }
    }

    //showing items
    showData() {
        ui.displayItems();
    }

    //Adding data
    addData() {
        const item = document.querySelector(ids.meal).value;
        const calories = parseInt(document.querySelector(ids.calories).value);
        if (item !== '' && calories !== '') {
            OurDataStructure.items.push({
                id: OurDataStructure.items.length + 1,
                item_name: item,
                calories: calories
            });
            ui.clearFields();
            ui.updateCalories(1, calories);
            this.showData();
            ui.showTable();

            //local Storage
            localData.setData(OurDataStructure);
        }
    }

    //updating data
    updateData(id) {
        const item = document.querySelector(ids.meal).value;
        const calories = parseInt(document.querySelector(ids.calories).value);
        const prevCalories = OurDataStructure.items[id - 1].calories;
        const requiredCalories = calories - prevCalories;
        if (item !== '' && calories !== '') {

            OurDataStructure.items[id - 1] = {
                id: id,
                item_name: item,
                calories: calories
            };
            ui.clearFields();
            ui.updateCalories(1, requiredCalories);
            ui.hideButtons();
            this.showData();

            //local storage
            localData.setData(OurDataStructure);
        }
    }

    //deleting data
    deleteData() {
        ui.updateCalories(0, OurDataStructure.items[mainId - 1].calories);
        OurDataStructure.items.splice(mainId - 1, 1);
        this.showData();
        ui.clearFields();
        ui.hideButtons();

        if(OurDataStructure.items.length === 0){
            ui.hideTable();
        }

        //local storage
        localData.setData(OurDataStructure);
    }

    //deleting all data
    clearAllData() {
        OurDataStructure.items = [];
        OurDataStructure.totalCalories = 0;
        this.showData();
        ui.clearFields();

        ui.hideTable();
        //local storage
        localData.setData(OurDataStructure);
    }
}