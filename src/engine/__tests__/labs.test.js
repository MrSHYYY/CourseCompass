import { displayCourseCode, isLabCourse } from "../labs.mjs";

test("detects the supplied lab courses and displays their L suffix", () => {
  expect(isLabCourse("CSE422")).toBe(true);
  expect(isLabCourse("PHY111")).toBe(true);
  expect(displayCourseCode("CSE422")).toBe("CSE422L");
  expect(displayCourseCode("CSE400")).toBe("CSE400");
});

test("also detects future course codes that already end in L", () => {
  expect(isLabCourse("CSE999L")).toBe(true);
  expect(isLabCourse("CSE999")).toBe(false);
});
