const student = {
  name: "Tesa",
  subjects: [],
  marks: [],

  // Add subject and mark
  AddSubjectMark(subject, mark) {
    this.subjects.push(subject);
    this.marks.push(mark);
  },

  // Calculate total marks
  getTotal() {
    let total = 0;
    for (let i = 0; i < this.marks.length; i++) {
      total += this.marks[i];
    }
    return total;
  },

  // Calculate average marks
  getAverage() {
    let total = this.getTotal();
    return total / this.marks.length;
  },

  // Determine grade
  getGrade() {
    let avg = this.getAverage();
    if (avg >= 80) {
      return "A+";
    } else if (avg >= 70) {
      return "A";
    } else if (avg >= 60) {
      return "B";
    } else if (avg >= 50) {
      return "C";
    } else {
      return "F";
    }
  }
};

// Adding subjects and marks
student.AddSubjectMark("ML", 85);
student.AddSubjectMark("RM", 78);
student.AddSubjectMark("HCI", 92);
student.AddSubjectMark("CVPR", 45);
student.AddSubjectMark("Web Tech", 60);

// Find the highest mark
function findHighestMark(marksArray) {
  let highest = marksArray[0];
  for (let i = 1; i < marksArray.length; i++) {
    if (marksArray[i] > highest) {
      highest = marksArray[i];
    }
  }
  return highest;
}

// Count passed subjects
function countPassedSubjects(marksArray) {
  let count = 0;
  for (let i = 0; i < marksArray.length; i++) {
    if (marksArray[i] >= 50) {
      count++;
    }
  }
  return count;
}

// Output
console.log("Student Name: " + student.name);
console.log(".........Subject-wise Marks:............");
for (let i = 0; i < student.subjects.length; i++) {
  console.log(student.subjects[i] + ": " + student.marks[i]);
}
console.log(".........................................");
console.log("Total Marks: " + student.getTotal());
console.log("Average Marks: " + student.getAverage());
console.log("Grade: " + student.getGrade());
console.log("Highest Mark: " + findHighestMark(student.marks));
console.log("Passed Subjects: " + countPassedSubjects(student.marks));