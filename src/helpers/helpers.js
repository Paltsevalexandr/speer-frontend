const DAYS = Object.freeze([
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
]);

function getStartOfCurrentWeek() {
    let now = new Date();
    let daysToSubstract = now.getDay() - 1;
    if(daysToSubstract < 0) {
        daysToSubstract = 0;
    }
    return new Date(now.getTime() - daysToSubstract * 24 * 60 * 60 * 1000);
}

function getEndOfCurrentWeek() {
    let now = new Date();
    let daysToAdd = 6 - now.getDay() - 1;
    if(daysToAdd < 0) {
        daysToAdd = 0;
    }
    return new Date(now.getTime() + daysToAdd * 24 * 60 * 60 * 1000);
}

function getFormattedDate(date) {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    return `${year}-${addZero(month)}-${addZero(day)}`;
}

function addZero(int) {
    if(int < 10) {
        return `0${int}`;
    }
    return int;
}

export {
    DAYS,
    getEndOfCurrentWeek,
    getStartOfCurrentWeek,
    getFormattedDate,
    addZero
}