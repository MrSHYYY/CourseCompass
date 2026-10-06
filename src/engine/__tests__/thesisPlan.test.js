import { getThesisPlan } from "../thesisPlan.mjs";

const curriculum = {
  byId: new Map([
    ["cse400-occurrence", { code: "CSE400" }],
    ["other-occurrence", { code: "CSE341" }],
  ]),
};

const stateWithCse400At = (index) => ({
  semesters: Array.from({ length: 14 }, (_, semesterIndex) => ({
    courses: [{ occurrenceId: semesterIndex === index ? "cse400-occurrence" : "other-occurrence" }],
  })),
});

test("thesis labels are placed around the recommended CSE400 semester", () => {
  const plan = getThesisPlan(stateWithCse400At(11), curriculum);

  expect(plan.map((item) => [item.index, item.title])).toEqual([
    [9, "Pre-Thesis I"],
    [10, "Pre-Thesis II"],
    [11, "Final Thesis"],
    [12, "CSE400 (If Deferred)"],
  ]);
});

test("thesis labels follow CSE400 when a personalized plan moves it", () => {
  const plan = getThesisPlan(stateWithCse400At(13), curriculum);

  expect(plan.map((item) => [item.index, item.title])).toEqual([
    [11, "Pre-Thesis I"],
    [12, "Pre-Thesis II"],
    [13, "Final Thesis"],
  ]);
});
