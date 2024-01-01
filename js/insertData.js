const age_spans = document.querySelectorAll(".age");
const programing_since_spans = document.querySelectorAll(".programing_since");

function calculateAge(inputDate) {
    const currentDate = new Date();
    const yearsPassed = currentDate.getFullYear() - inputDate.getFullYear();
    const monthsPassed = currentDate.getMonth() - inputDate.getMonth();
    const daysPassed = currentDate.getDate() - inputDate.getDate();

    if (monthsPassed < 0 || (monthsPassed === 0 && daysPassed < 0)) {
        const adjustedAge = yearsPassed - 1 + ((12 + monthsPassed) / 12);
        return parseFloat(adjustedAge.toFixed(2));
    } else {
        const age = yearsPassed + (monthsPassed / 12);
        return parseFloat(age.toFixed(2));
    }
}

function calculateProgramingSince(age) {
    const started = calculateAge(new Date(2019, 10, 1));
    return (started / age) * 100;
}

function insertAge(age) {
    age_spans.forEach(span => {
        if (span.hasAttribute("floor")) {
            span.innerText = Math.floor(age);
        } else {
            span.innerText = age;
        }
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