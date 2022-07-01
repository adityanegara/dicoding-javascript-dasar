const {validateExams, averageExams, isStudentPassExam} = require('../gradeCalculations');

describe('grade calculations', () => {
    test('it should return false if an exams isnt a number', () =>{
        const listValueOfExams = ['a', 1,2,3];
        expect(validateExams(listValueOfExams)).toBeFalsy();
    })
    test('it should return true if all exams is a number', () =>{
        const listValueOfExams = [1,2,3,4];
        expect(validateExams(listValueOfExams)).toBeTruthy();
    })

    test('it should throw an error if an exams isnt a number', () =>{
        const listValueOfExams = [80, 'a', '100', 80];
        expect(() => averageExams(listValueOfExams)).toThrow();
    })
    test('it should return the exact avergage of exams', () =>{
        const listValueOfExams = [80, 90, 100];
        expect(averageExams(listValueOfExams)).toBe(90);
    })
    test('it should return exam passed status', () => {
        const listValueOfExams = [80, 100, 100, 80];
        expect(isStudentPassExam(listValueOfExams, 'Budi')).toEqual(true);
    })
 
 
    test('it should return exam failed status', () => {
        const listValueOfExams = [50, 40, 70, 80];
        expect(isStudentPassExam(listValueOfExams, 'Budi')).toEqual(false);
    })

})

