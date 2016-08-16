var textSize = 0;
var resizeText = function(selector) {
    textSize += 2;
    $(selector).attr("rows", textSize);
};

ElizaBot.prototype.say = function(line) {
    $("#transcript").typetype(this.name + ': ', {
        e: 0, t: 1 });
    resizeText("#transcript");
    $("#transcript").typetype(line + '\n\n', {
        e: this.errorRate,
        t: this.typingSpeed,
        keypress: function() {},
        callback: function () {
        },
        });
}

var eliza = new ElizaBot();
eliza.name = 'ELIZA';
eliza.errorRate = 0.02;
eliza.typingSpeed = 45;

var you = {
    name: "YOU",
    errorRate: 0,
    typingSpeed: 200,
    say: function(msg) {
        resizeText("#transcript");
        $("#transcript").typetype('YOU: ' + msg + '\n\n',
                                 { e: 0, t: 1 });
    }
};

function stepEliza() {
    var input = $("#userinput").val();
    you.say(input);
    eliza.say(eliza.transform(input));
}

function chat() {

    eliza.say(eliza.getInitial());
    $("#userinput").val('').focus();
    $("#userinput").on('keyup', function(e) {
        if (e.which === 13) {
            stepEliza();
            $("#userinput").val('').focus();
        }
    });
}

