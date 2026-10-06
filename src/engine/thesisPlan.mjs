/**
 * Build thesis status labels around the semester that contains the
 * recommended CSE400 occurrence. The occurrence can move in a personalized
 * plan, so it must not be inferred from fixed curriculum row numbers.
 */
export function getThesisPlan(state, curriculum) {
  const cse400Index = (state?.semesters || []).findIndex((semester) =>
    (semester?.courses || []).some((instance) => curriculum.byId.get(instance.occurrenceId)?.code === "CSE400")
  );

  if (cse400Index < 0) return [];

  return [
    { index: cse400Index - 2, code: "CSE399", title: "Pre-Thesis I", isThesis: true },
    { index: cse400Index - 1, code: "CSE499A", title: "Pre-Thesis II", isThesis: true },
    { index: cse400Index, code: "CSE400", title: "Final Thesis", isThesis: true },
    { index: cse400Index + 1, code: "CSE400D", title: "CSE400 (If Deferred)", isThesis: true },
  ].filter((item) => item.index >= 0 && item.index < state.semesters.length);
}
