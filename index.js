// var movies=["Passport", "Do Revenge", "battle on buka street", "Obara", "Overdose"]
// console.log(movies)
// movies.push("restless")
// console.log(movies)
// movies.shift()
// console.log(movies)
// movie.pop()
// movies.unshift("Orisa")
// console.log(movies)
// console.log(movies.length)
// movies.reverse()
// console.log(movies)
// var Person={
//     name: "Emma Dongote",
//     age: 55,
//     gender: 'Trans',
//     nodw: 28,
//     hobbies: ["coding","sleep","food"],
//     job: "BDC",
//     wpd: 5000
// }
// console.log(Person)
// console.log(Person.name)
// console.log(Person.gender)
// Person.gender="Male"
// console.log(Person)
// console.log(Person.hobbies)
// console.log(Person.hobbies[1])
// Person.hobbies[1]="travelling"
// console.log(Person.hobbies[1])
// Person.hobbies[2]="1234"
// console.log(Person.hobbies[2])
// delete Person.hobbies[2]
// console.log(Person.hobbies)
// function profitCalculator(cp,sp){
//     return sp-cp

// }
// profitCalculator(5000000, 11000000)
// console.log(profitCalculator(5000000, 11000000))

// function aggCalculator(cy, dob){
//     return cy-dob

// }
// aggCalculator(2023, 1997)
// console.log(aggCalculator(2023,1997))


// function text(n){
//     return n/5
// }
// text(256)
// console.log(text(256))

// var cube = function(n){
//     return n**3
// }
// cube(40)
// console.log(cube(40));  

// function saleTickets(age){    if (age<= 18){
//     return console.log("sell ticket for 50% off")
// }
// else{
//     return   console.log("sell tickets for 100% price")

// }
// }

// console.log(saleTickets(16))
// console.log(saleTickets(34))

// function timecalculator(time){
//     if (time<= 8){
//         return console.log("Good Morning")
//     }
//     else{
//         return console.log ("good afternoon")
//     }
// }

// console.log(timecalculator(8))
// console.log(timecalculator(3))
// console.log(timecalculator(11))
// console.log(timecalculator(12))

// function pucrchaseTicket(age){
//     if (age<= 6){
//         return console.log("sell ticket for #600")
//     }
//     else if( age >= 7 && age <= 12){
//         return console.log("sell ticket for #1000")
//     }
//     else if(age >= 13 && age <= 17){
//         return console.log ("sell ticket for #1500")
//     }
//     else{
//         return console.log(" sell tickets for #2500")
//     }
// }
// console.log(pucrchaseTicket(3))
// console.log(pucrchaseTicket(7))
// console.log(pucrchaseTicket(15))
// console.log(pucrchaseTicket(24))

function busTickect(job){
    if(job === "doctor" || "staff"){
        return console.log("50% off")
    }
    else if(job === "millitry" || "pragnant"){
        return console.log(30% off)
    }
    else if(job==="disable" || "student"){
        return console.log(100% off)
    }

    
}
console.log(busTickect("doctor" || "staff"))
console.log(busTickect("millitry" || "pragnant"))