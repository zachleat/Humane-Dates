SampleTest = TestCase("SampleTest");

SampleTest.prototype.testTrue = function(){
	assertTrue('True is true.', true);
};

SampleTest.prototype.testFalse = function(){
	assertFalse('False is false.', false);
};