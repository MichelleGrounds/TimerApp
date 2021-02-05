import Time from "../Time";

test("60k ms becomes 1:00", async () => {
  expect(Time.convertMS(60000)).toBe("1:00");
});
