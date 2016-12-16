var demo = require("../demo.js");
var expect = require('chai').expect;

describe('开始测试', function() {
	it("1+1等于2", function() {
		expect(demo.add(1, 1)).to.be.equal(2);
	});
	it("这里直接返回TRUE", function() {
		expect(demo.isNimble).to.be.equal(true);
	})
});