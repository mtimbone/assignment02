let grade = Number(prompt('Select a number between 1-100 only numbers between 1 - 100 will be accepted'));
if (grade >= 90) {
    document.write('You recevied a A');
} else if (grade >= 80 && grade <= 89) {
    document.write('You received a B');
} else if (grade >= 70 && grade <= 79) {
    document.write('You received a C');
} else if (grade >= 60 && grade <= 69) {
    document.write('You received a D');
} else {
    document.write('You received an F in this course');
}



