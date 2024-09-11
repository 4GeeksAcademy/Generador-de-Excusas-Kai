window.onload = function() {
    let first = "A ";
    let who = ["strange ", "emo", "dragon", "naruto", "nuclear"];
    let noun = ["bart ", "snake ", "cat ", "dog ", "developer ", "killer ", "teacher "];
    let action = ["stole my ", "scape to ", "kicked my ", "burned my ", "bit my ", "hit my "];
    let what = ["toe ", "car ", "watch ", "shoe ", "wallet ", "shirt ", "keys ", "computer ", "phone ", "sandwich "];
    let where = ["on the street", "in my house", "in my driveway", "in front of the office", "near the mall", "near the toilet", "at the bus station", "on my floor"];
    let rdm1 = Math.floor(Math.random() * who.length);
    let rdm2 = Math.floor(Math.random() * noun.length);
    let rdm3 = Math.floor(Math.random() * action.length);
    let rdm4 = Math.floor(Math.random() * what.length);
    let rdm5 = Math.floor(Math.random() * where.length);
    document.querySelector("#excuse").innerHTML = first + who[rdm1] + noun[rdm2] + action[rdm3] + what[rdm4] + where[rdm5];
};