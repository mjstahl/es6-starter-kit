import { join } from "path";

join(__dirname, "...");

async function asyncFun() {
	const value = await Promise
		.resolve(1)
		.then(x => x * 3)
		.then(x => x + 5)
		.then(x => x / 2);
	return value;
}
asyncFun().then(x => console.log(`x: ${x}`));

export function addition(x, y) {
	return x + y;
}

export default {
	addition,
};
