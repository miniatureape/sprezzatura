(function() {

    var bind = function(fn, ctx) {
        return function() { return fn.apply(ctx, arguments) };
    }

    var Sprezzatura = function(textarea) {
        this.el = textarea;
        this.strokes = 0;
    };

    Sprezzatura.prototype.init = function() {
        this.el.addEventListener('keydown', bind(this.handleKeyUp, this));
    };

    Sprezzatura.prototype.handleKeyUp = function(e) {
        this.calc(this.strokes++);
    };

    Sprezzatura.prototype.calc = function(strokes) {
        var color = this.color(this.el.value.length / strokes);
        this.setColor(color);
    };

    Sprezzatura.prototype.color = function(ratio) {
        var green = ratio * 100;
        return "rgb(" + (100 - green) + "%, " + green + "%, 00%)"; 
    };

    Sprezzatura.prototype.setColor = function(color) {
        this.el.style.backgroundColor = color;
    };

    window.Sprezzatura = Sprezzatura;

})()
