const countSeconds = (seconds = 0, minutes = 0, hours = 0, days = 0, weeks = 0, months = 0, years = 0) => {
    const secondsInMinutes = 60 * minutes;
    const secondsInHours = 60 * 60 * hours;
    const secondsInDays = 60 * 60 * 24 * days;
    const secondsInWeeks = 60 * 60 * 24 * 7 * weeks;
    const secondsInMonths = 60 * 60 * 24 * 30 * months;
    const secondsInYears = 60 * 60 * 24 * 30 * 12 * years;
    return seconds + secondsInMinutes + secondsInHours + secondsInDays + secondsInWeeks + secondsInMonths + secondsInYears;
}

countSeconds(1, 1);