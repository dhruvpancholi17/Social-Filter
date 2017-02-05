filterKeyWords = [
    ["like page"],
    ["sponsored"],
    ["happy birthday"]];

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

function getRawString(str){
    return str.replaceAll("<[^>]*>", " ").toLowerCase().replaceAll("\\s+", " ").trim();
}

function toBeFiltered(element) {
    if (!element) {return true;}
    article = getRawString(element.html());
    console.log(article);
    for (var i = 0; i < filterKeyWords.length; i++) {
        for (var j = 0; j < filterKeyWords[i].length; j++) {
            if(article.contains(filterKeyWords[i][j])) return true;
        }
    }
    return false;
}

function eliminateOnInsert(e) {
    element = $(e.target);
    id = element.attr('id');
    if(id && id.startsWith('u_jsonp')) {
        parent = element.parent();
        if(parent) {
            id = parent.attr('id');
            if(id  && id.startsWith('hyperfeed_story_id') && toBeFiltered(parent)) {
                parent.hide();
            }
        }
    }
}

(function(){
    divs=$('div');
    divs = divs.filter(function(i, div){
        id = div.getAttribute('id');
        if(id) {
            return id.startsWith('hyperfeed_story_id');
        }
        return false;
    });

    divs.each(function(i, div){
        div = $(div);
        if (toBeFiltered(div)) {
            div.hide();
        }
    });
}());

$(document).on('DOMNodeInserted', eliminateOnInsert);
