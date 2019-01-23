class UI {
    constructor() {
        this.hideButtons()
    }

    //hiding buttons
    hideButtons() {
        document.querySelector(ids.update_btn).style.display = 'none';
        document.querySelector(ids.delete_btn).style.display = 'none';
        document.querySelector(ids.back_btn).style.display = 'none';
        document.querySelector(ids.add_btn).style.display = 'inline';
    }

    //showing all buttons
    showButtons() {
        document.querySelector(ids.update_btn).style.display = 'inline';
        document.querySelector(ids.delete_btn).style.display = 'inline';
        document.querySelector(ids.back_btn).style.display = 'inline';
        document.querySelector(ids.add_btn).style.display = 'none';
    }

    //displaying buttons
    displayItems() {
        let html = ``;
        var id = 1;
        OurDataStructure.items.forEach(function (item, index) {
            html += `<tr><td>${index+1}</td><td><strong>${item.item_name}</strong></td><td><em>${item.calories} calories</em></td><td><a href="#"><i class= "edit-btn fa fa-pencil-square-o float-right"
            aria-hidden="true"></i></a></td></tr>`;
        });
        document.querySelector(ids.displayItems).innerHTML = html;
        document.querySelector(ids.total_calories).textContent = OurDataStructure.totalCalories;
    }

    //clearing input fields
    clearFields() {
        document.querySelector(ids.meal).value = '';
        document.querySelector(ids.calories).value = '';
    }


    //updating fields with required values to edit
    updateFields(item) {
        //console.log(item.item_name,item.calories);
        document.querySelector(ids.meal).value = item.item_name;
        //console.log('test');
        document.querySelector(ids.calories).value = item.calories;
    }

    //updating calories
    updateCalories(sign, value) {
        if (sign === 1) {
            OurDataStructure.totalCalories += value;
        } else {
            OurDataStructure.totalCalories -= value;
        }
        document.querySelector(ids.total_calories).textContent = OurDataStructure.totalCalories;
    }

    hideTable() {
        document.querySelector(ids.table_container).style.display = 'none';
    }
    showTable() {
        document.querySelector(ids.table_container).style.display = 'block';
    }
}