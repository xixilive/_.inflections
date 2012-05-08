$(document).ready(function(){
	module("Underscore.Inflections", {
		setup: function() {},
		teardown:function(){}
	});

	test("Method: _.singularize", function() {
    _([['men','man'],['aliases','alias'],['news','news']]).each(function(term){
			equal(_.singularize(term[0]),term[1]);
			equal(_(term[0]).singularize(),term[1]);
		});
  });

	test("Method: _.pluralize", function() {
    _([['men','man'],['aliases','alias'],['news','news']]).each(function(term){
			equal(_.pluralize(term[1]),term[0]);
			equal(_(term[1]).pluralize(),term[0]);
		});
  });

	test("Method: _.camelize", function() {
    _([['egg_and_ham','EggAndHam'],['egg-and-hams','EggAndHams']]).each(function(term){
			equal(_.camelize(term[0]),term[1]);
			equal(_(term[0]).camelize(),term[1]);
		});
  });

	test("Method: _.underscore", function() {
    _([['EggAndHam','egg_and_ham'],['HelloWorld','hello_world']]).each(function(term){
			equal(_.underscore(term[0]),term[1]);
			equal(_(term[0]).underscore(),term[1]);
		});
  });

	test("Method: _.capitalize", function() {
    equal(_.capitalize('hello'),'Hello');
		equal(_('hello').capitalize(),'Hello');
  });

	test("Method: _.dasherize", function() {
    equal(_.dasherize(_.underscore('EggAndHam')),'egg-and-ham');
  });

	test("Method: _.classify", function() {
    equal(_.classify('egg_and_hams'),'EggAndHam');
  });

	test("Method: _.ordinalize", function() {
    equal(_.ordinalize(1),'1st');
		equal(_.ordinalize(2),'2nd');
		equal(_.ordinalize(3),'3rd');
		equal(_.ordinalize(100),'100th');
		equal(_.ordinalize('a'),'ath');
  });
});
