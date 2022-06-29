let childs = ['Adit', 'Aura', 'Ayesha']
let childsWithBirthOrder = childs.map((child, i) => { return `${child} anak ke ${i+1}`});

console.log(childsWithBirthOrder);

let students = [
    {
        id: 1,
        name: 'Adit',
        score: 80,
    },
    {
        id: 2,
        name: 'Acil',
        score: 70
    },
    {
        id: 3,
        name: 'Alder',
        score: 85,
    },
    {
        id: 4, 
        name: 'Alif',
        score: 90,
    },
    {
        id: 5,
        name: 'Valy',
        score: 75
    }
]

const studentsWhoPassed = students.filter((student) => {if(student.score > 75){
    return student;
}});
const totalScore = students.reduce((acc, student) => acc + student.score, 0);
console.log(studentsWhoPassed)
console.log(totalScore);

const array = [1,2,3,4,5];
const even = array.some(element => element % 2 === 0);
console.log(even);

const findAcil = students.find(student => student.name === 'Acil');
console.log(findAcil);

const arrayOne = [1,30,4,1000];
const compareNumber = (a,b) =>{
    return a-b;
}
const sorting = arrayOne.sort(compareNumber);
console.log(sorting);

const scores = [70,85,90];
const minimumScore = 65;

const examPassed = scores.every(score => score >= minimumScore);
console.log(examPassed);