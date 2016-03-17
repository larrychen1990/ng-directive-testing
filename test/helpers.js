// jasmine matcher for expecting an element to have a css class
// https://github.com/angular/angular.js/blob/master/test/matchers.js
beforeEach(function() {
	jasmine.addMatchers({
        toHaveClass: function() {
            return {
                compare: function(actual, expected) {
                    return {
                        pass: actual.attr("class").split(" ").indexOf(expected) !== -1
                    };
                }
            };
        },
    });
	
});
