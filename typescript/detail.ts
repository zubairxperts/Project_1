/* 1. class
2. Read only Properties -----> // No Modification (only value access)
3. Optional Property-----> ?
*/
class student{
    static school="abc"//variable

        static schoolName(name:string){
                student.school=name
                console.log(student.school)
        }

        static detail(){
            console.log("gm")
        }
}


console.log("initial value:",student.school)

student.schoolName("xyz")
console.log(student.school)
student.detail()