function mergeData() {
  const map = new Map();

  for (const { user, duration, equipment } of sessions) {
    if (!map.has(user)) {
      map.set(user, {
        user,
        duration,
        equipment: [...new Set(equipment)].sort(),
      });
    } else {
      const existing = map.get(user);

      existing.duration += duration;

      existing.equipment = [
        ...new Set([...existing.equipment, ...equipment]),
      ].sort();
    }
  }
  return [...map.values()];
}

const sessions = [
  { user: 8, duration: 50, equipment: ["bench"] },
  { user: 7, duration: 150, equipment: ["dumbbell"] },
  { user: 1, duration: 10, equipment: ["barbell"] },
  { user: 7, duration: 100, equipment: ["bike", "kettlebell"] },
  { user: 7, duration: 200, equipment: ["bike"] },
  { user: 2, duration: 200, equipment: ["treadmill"] },
  { user: 2, duration: 200, equipment: ["bike"] },
];

console.log(mergeData(sessions));

let obj1 = { user: 7, duration: 150, equipment: ["dumbbell"] };
let obj2 = { user: 7, duration: 100, equipment: ["bike", "kettlebell"] };
let obj3 = { user: 7, duration: 200, equipment: ["bike"] };

let res = new Set([...obj1.equipment, obj2.equipment, obj3.equipment]);
console.log(res);
