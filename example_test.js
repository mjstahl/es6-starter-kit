import chai from "chai";
chai.should();

describe("Array", () => {
	describe("#indexOf", () => {
		it("should return -1 when value is not present", () => {
			[1, 2, 3].indexOf(5).should.equal(-1);
		});
	});
});
