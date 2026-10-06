export const LAB_COURSE_CODES = new Set([
  "CSE110", "CSE111", "CSE220", "CSE221", "CSE422", "CSE421", "CSE321", "CSE370",
  "CSE420", "CSE471", "CSE250", "CSE251", "CSE350", "CSE260", "CSE341", "CSE460",
  "CSE461", "CSE330", "CSE423", "CSE360", "PHY111", "PHY112", "MAT120",
]);

export function isLabCourse(code) {
  if (typeof code !== "string") return false;
  const normalized = code.trim().toUpperCase();
  return normalized.endsWith("L") || LAB_COURSE_CODES.has(normalized);
}

export function displayCourseCode(code) {
  if (typeof code !== "string" || !isLabCourse(code) || code.trim().toUpperCase().endsWith("L")) return code;
  return `${code}L`;
}

export function countLabCourses(courses = []) {
  return courses.reduce((count, course) => count + (course?.isLab || course?.is_lab || isLabCourse(course?.code) ? 1 : 0), 0);
}

