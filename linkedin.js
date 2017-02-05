filterKeyWords = [
    ["keyword"],
    ["keyword1","keyword2"],
    ["keyword1","keyword2","keyword3"]];

Set.prototype.intersection = function(setB) {
    var intersection = new Set();
    for (var elem of setB) {
        if (this.has(elem)) {
            intersection.add(elem);
        }
    }
    return intersection;
}

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
}

function getRawStringSet(str){
    return new Set(str.replaceAll('[,%></="\'’?.-;&{}&…-]',' ').toLowerCase().split(' ').filter(function(x){return x!=='';}));
}

function toBeFiltered(element) {
    articleSet = getRawStringSet(element.html());
    for (var i = 0; i < filterKeyWords.length; i++) {
        filterSet = new Set(filterKeyWords[i]);
        if(filterSet.intersection(articleSet).size == filterSet.size) return true;
    }
    return false;
}

(function(){
    $('.feed-update').each(function(i, e){
        element = $(e);
        if(toBeFiltered(element)) {
            element.hide();
        }
    });
}());

function eliminateOnInsert(e){
    element = $(e.target);
    if(element.hasClass('feed-update') && toBeFiltered(element)) {
        element.hide();
    }
}

$(document).on('DOMNodeInserted', eliminateOnInsert);
