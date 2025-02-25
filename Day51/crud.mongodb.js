
// CRUD Operations

use("CrudDb")

// Create
db.createCollection("courses")

// Insert
/*db.courses.insert({
    name: "Web Development",
    agenda: 1,
    class: 51,
    projects: 45
})

db.courses.insertMany(
    [
        {
            "name": "Web Development",
            "agenda": 1,
            "class": 51,
            "projects": 45
        },
        {
            "name": "Machine Learning",
            "agenda": 2,
            "class": 60,
            "projects": 30
        },
        {
            "name": "Cyber Security",
            "agenda": 3,
            "class": 42,
            "projects": 25
        },
        {
            "name": "Cloud Computing",
            "agenda": 4,
            "class": 55,
            "projects": 40
        },
        {
            "name": "Blockchain",
            "agenda": 5,
            "class": 38,
            "projects": 20
        },
        {
            "name": "Data Science",
            "agenda": 6,
            "class": 65,
            "projects": 50
        },
        {
            "name": "Game Development",
            "agenda": 7,
            "class": 48,
            "projects": 35
        },
        {
            "name": "Artificial Intelligence",
            "agenda": 8,
            "class": 70,
            "projects": 55
        },
        {
            "name": "UI/UX Design",
            "agenda": 9,
            "class": 40,
            "projects": 28
        },
        {
            "name": "Mobile App Development",
            "agenda": 10,
            "class": 58,
            "projects": 38
        }
    ]
    
)

// Read
let a = db.courses.find({agenda:5})
console.log(a.toArray())

let b = db.courses.findOne({agenda: 5})
console.log(b)

// Update
db.courses.updateOne({agenda: 1}, {$set:{agenda: 100}})

db.courses.updateMany({agenda: 1}, {$set:{agenda: 100}})*/


// DELETE

db.courses.deleteOne({agenda: 100})

db.courses.deleteMany({agenda: 1000})

