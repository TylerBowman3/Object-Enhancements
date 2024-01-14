// #1

function createInstructor(first, last){
    return {
        first, 
        last,
    }
};

// #2 

const favoriteNumber = 42;

const instructor = {
    [favoriteNumber]: "That is my favorite!"
};

// #3

const instructor = {
    firstName: 'Colt',
    sayHi() {
        return "Hi!";
    },
    sayBye() {
        return instructor.firstName + "say bye!";
    }
}

// #4

function dog(species,verb) {
    return {
        species,
        verb, 
        noise() {
            return 'woof!';
        }
    }
}

function sheep(species,verb) {
    return {
        species,
        verb,
        noise() {
            return 'baaahhh';
        }
    }
}

