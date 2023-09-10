let pupils = [
  { id: "1", name: "Hecate", passed: true },
  { id: "2", name: "Hella", passed: false },
  { id: "3", name: "EMP", passed: true },
];

let mentors = [
  { id: "1", name: "Langley", branches: ["Reticle"] },
  { id: "2", name: "NOX", branches: ["Fury", "Endura"] },
  { id: "3", name: "Bai Yi", branches: ["Umbra", "Fury"] },
  { id: "4", name: "Enfer", branches: ["Catalyst", "Arcane", "Reticle"] },
  { id: "5", name: "Hamel", branches: ["Catalyst"] },
];

let reports = [
  { id: "1", grade: "C", marks: 64, mentor_id: "1", pupil_id: "2" },
  { id: "2", grade: "A", marks: 81, mentor_id: "2", pupil_id: "1" },
  { id: "3", grade: "B", marks: 72, mentor_id: "4", pupil_id: "3" },
  { id: "4", grade: "A", marks: 87, mentor_id: "1", pupil_id: "1" },
  { id: "5", grade: "A", marks: 80, mentor_id: "3", pupil_id: "3" },
  { id: "6", grade: "B", marks: 75, mentor_id: "5", pupil_id: "2" },
  { id: "7", grade: "S", marks: 96, mentor_id: "3", pupil_id: "1" },
];

export default { pupils, mentors, reports };
