const age_spans = document.querySelectorAll(".age");
const programing_since_spans = document.querySelectorAll(".programing_since");

function calculateAge(inputDate) {
    const currentDate = new Date();
    const yearsPassed = currentDate.getFullYear() - inputDate.getFullYear();
    const monthsPassed = (currentDate.getMonth() - inputDate.getMonth() +
        (12 * (currentDate.getFullYear() - inputDate.getFullYear()))) % 12;
    const totalYearsPassed = yearsPassed + (monthsPassed / 12);
    return totalYearsPassed;
}

function calculateProgramingSince(age) {
    const started = calculateAge(new Date(2019, 10, 1));
    return (started / age) * 100;
}

function insertAge(age) {
    age_spans.forEach(span => {
        span.innerText = Math.floor(age);
    })
}

function insertProgramingSince(since) {
    programing_since_spans.forEach(span => {
        span.innerText = Math.round(since);
    })
}



const age = calculateAge(new Date(2008, 1, 20))
const since = calculateProgramingSince(age);
//alert();
insertAge(age);
insertProgramingSince(since);