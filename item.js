function Item(name, id, tags) {
    this.name = name;
    this.id = id;
    this.tags = tags;
}

Item.prototype.show = function() {
    var itemDiv = document.createElement('div');

    itemDiv.className = "item";
    itemDiv.innerHTML = 'name: ' + this.name + ', id:' + this.id


    var self = this;
    itemDiv.addEventListener("click", function() {
        select(self);
    });

    return itemDiv;
}

Item.prototype.matches_filter = function(filter) {
    return this.tags.indexOf(filter) >= 0;
}

selectedItem = undefined;

function select(item) {
    selectedItem = item;
    updateSelectedItem();
    updateBuildsFrom();
    updateBuildsInto();
}

function updateSelectedItem() {
    var selected_item_div = document.getElementById('selected_item');
    if(selectedItem === undefined) {
        selected_item_div.innerHTML = '';
    } else {
        selected_item_div.innerHTML = '<p>I am ' + selectedItem.name + ', item number ' + selectedItem.id;
    }
}

function updateBuildsFrom() {
    // TODO: Finish this stub
}

function updateBuildsInto() {
    // TODO: Finish this stub
}

function getItemById(id) {
    for(var i = 0; i < items.length; i++) {
        var item = items[i];
        if(item.id == id) {
            return item;
        }
    }
    console.debug("ID not found, " + id + " not in " + items);
    return undefined;
}
