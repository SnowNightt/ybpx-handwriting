function myDelay(time = 100): Promise<unknown> {
  return new Promise((resolve) => setTimeout(resolve, time));
}
async function test() {
  console.time();
  await myDelay(1000);
  console.timeEnd();
}
test();
