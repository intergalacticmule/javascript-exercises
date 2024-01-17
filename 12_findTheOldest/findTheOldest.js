const findTheOldest = function (people) {
    return people.reduce((oldest, current) => {
        let oldest_age = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        let current_age = getAge(current.yearOfBirth, current.yearOfDeath);
        return oldest_age > current_age ? oldest : current;
    });
};

const getAge = function (yearOfBirth, yearOfDeath) {
    if (!yearOfDeath) {
        yearOfDeath = new Date().getFullYear();
    }

    return yearOfDeath - yearOfBirth;
};

// Do not edit below this line
module.exports = findTheOldest;
