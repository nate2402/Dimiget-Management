$(document).ready(function () {
    var allBoxes = $("div.Introduction").children("h1");
    transitionBox(null, allBoxes.first());
});

function transitionBox(from, to) {
    function next() {
        var nextTo;
        if (to.is(":last-child")) {
            nextTo = to.closest(".Introduction").children("h1").first();
        } else {
            nextTo = to.next();
        }
        to.fadeIn(500, function () {
            setTimeout(function () {
                transitionBox(to, nextTo);
            }, 1000);
        });
    }

    if (from) {
        from.fadeOut(500, next);
    } else {
        next();
    }
}
