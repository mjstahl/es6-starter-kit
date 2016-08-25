import chai from "chai";
chai.should();

import fn from "../src/index";

describe("Array", () => {
	describe("#indexOf", () => {
		it("should return -1 when value is not present", () => {
			[1, 2, 3].indexOf(5).should.equal(-1);
		});
	});
});

describe("Coverage", () => {
	it("should test the one exported function", () => {
		fn.addition(2, 3).should.equal(5);
	});
});
