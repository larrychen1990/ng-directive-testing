describe('myApp.version module', function () {
	beforeEach(module('perogative'));
	beforeEach(module('tpl/perogative.html'));
	
	describe('perogative directive', function () {
		var scope, isolateScope, element, $compile;
		
		function compileElement() {
			element = angular.element(element);
			$compile(element)(scope);
			scope.$digest();
		}
		
	  	beforeEach(inject(function ($rootScope, _$compile_, _$templateCache_, _$httpBackend_) {
//		    $scope = $rootScope.$new(),
		    scope = $rootScope,
		    $compile = _$compile_;
		    $httpBackend = _$httpBackend_;
		    $templateCache = _$templateCache_;
		    
		    tpl = '<button class="btn btn-primary" ng-model="perogative" ng-click="updateButton()" ng-dblclick="dblClickUpdate()">{{perogative}}</button>';
		    
//		    jasmine.getFixtures().fixturesPath = 'app/components/version/';
		    // This can solve the templateUrl issue in directive
//		    $templateCache.put('perogative.html', tpl);
		    
//		    $templateCache.put('perogative.html', jasmine.getFixtures().getFixtureHtml_('perogative.html'));
//		    $templateCache.put('perogative.html', jasmine.getFixtures().getFixtureHtml_('perogative.html'));
		
		    element = '<div my-perogative></div>';
		
		    compileElement();
		    
//		    isolateScope = element.isolateScope();
		}));

	    describe('when page compiles the perogative directive', function () {

	        it('display directive button on page with interpolated value for button label', function () {
	            expect(element.html()).toContain('Click Me');
	        });

	        it('should give another value for perogative scope variable', function(){
	            //Change scope variable to Something completely different
	            element.scope().perogative = 'Sweet Chili Sauce';

	            //call the updateButton function on isolate scope
	            element.scope().updateButton();

	            //digest the $rootScope
	            scope.$digest()

	            //test to make sure value changed which tests the updateButton Function
	            expect(element.scope().perogative).toBe('My Other Perogative');
	        });
	        
	        it('should give another value for perogative scope variable when double clicked', function(){
	            //Change scope variable to Something completely different
	            element.scope().perogative = 'My Other Perogative';

	            //call the dblClickUpdate function on isolate scope
	            element.scope().dblClickUpdate();

	            //digest the $rootScope
	            scope.$digest()

	            //test to make sure value changed which tests the updateButton Function
	            expect(element.scope().perogative).toBe('My Other Other Perogative');
	        });
	    });
	});
	
});