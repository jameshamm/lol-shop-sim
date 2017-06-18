function switchToRecommended() {
    /** Overwrite the storeroom with the recommended tab display */
    var storeroom = document.getElementById("storeroom");

    // Blank out the storeroom
    storeroom.innerHTML = '';
}

function switchToAllItems() {
    /** Overwrite the storeroom with the all items tab display

    All items contains a filter list (which will be reset) and
    displays all items that match the filter */
    var storeroom = document.getElementById("storeroom");

    // Blank out the storeroom
    storeroom.innerHTML = '';

    // Add the filters column
    storeroom.innerHTML += createFilterColumn();

    // Add the item display column
    storeroom.appendChild(createItemDisplay());
}

function matches_all_filters(item, filters) {
    for (var i = 0; i < filters.length; i++) {
        var filter = filters[i];
        if (!item.matches_filter(filter)) {
            return false;
        }
    }
    return true;
}

var a = new Item('BF Sword', 1, ["Health", "Ability Power"]);
var b = new Item('Negatron', 3, ["Health"]);
var c = new Item('Cap', 7, ["Ability Power"]);
var items = [a, b, c];

function createItemDisplay() {
    var items_display = document.createElement('div');

    items_display.id = "items_display";

    var items_to_show = [];
    for(var i = 0; i < items.length; i++) {
        var item = items[i];
        if (matches_all_filters(item, ["Health"])) {
            items_to_show.push(item);
        }
    }

    for(var i = 0; i < items_to_show.length; i++) {
        var item = items_to_show[i];
        var itemDiv = item.show();
        a = itemDiv;
        items_display.appendChild(itemDiv);
    }

    return items_display;
}

// HACK: Listing filters here, should be done in a config or automatically
// This can lead to stringly typ(o)ed code and can be annoying to change later
filter_names = ['Health', 'Ability Power', 'Magic Resistance'];

function createFilterColumn() {
    var filter_id = 'filters';
    var filter_div = '<div id="' + filter_id + '">';

    // Add an section that can reset the filters
    filter_div += '<button type="button" onclick="resetFilters()">All Items (Reset Filters)</button>';

    filter_div += '<div id="filter_div">';
    for (var i = 0; i < filter_names.length; i++) {
        var name = filter_names[i];
        var f = '<p><input type="checkbox" name="' + name + '" value="' + name + '">' + name + '</p>';
        filter_div += f;
    }
    filter_div += '</div>';

    return filter_div;
}


function resetFilters() {
    // TODO: Finish this stub or restructure the filters to be classes
}
