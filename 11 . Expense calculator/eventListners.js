//Add data button
document.querySelector(ids.add_btn).addEventListener('click', function (e) {
    code.addData();
    e.preventDefault();
});

//Update button
document.querySelector(ids.update_btn).addEventListener('click', function (e) {
    code.updateData(mainId);
    e.preventDefault();
});

//Delete button
document.querySelector(ids.delete_btn).addEventListener('click', function (e) {
    if (confirm('Are you sure to delete the current item ????????')) {
        code.deleteData();
    }
    e.preventDefault();
});

//Back button
document.querySelector(ids.back_btn).addEventListener("click", function (e) {
    ui.hideButtons();
    ui.clearFields();
    e.preventDefault();
});

//Edit button
document.querySelector(ids.displayItems).addEventListener('click', function (e) {
    //console.log(e.target);
    if (e.target.classList.contains('edit-btn')) {
        //console.log(222);
        const element = e.target.parentElement.parentElement.parentElement;
        const id = parseInt(element.firstChild.innerText);
        ui.showButtons();
        ui.updateFields(OurDataStructure.items[id - 1]);
        mainId = id;
        e.preventDefault()
    }
});

//Clear all button
document.querySelector(ids.clearAll_btn).addEventListener('click', function (e) {
    if (confirm('Are you sure to clear all your list ????????')) {
        code.clearAllData();
    }
    e.preventDefault();
});