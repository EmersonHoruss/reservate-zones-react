const inputs = {
    zone: {
        label: "Select zone to visit",
        watchText: null,
        constraints: {
            required: true,
            min: null,
            max: null,
        },
        value: null,
        activated: true
    },
    name: {
        label: "Write your name",
        watchText: " is your user name",
        constraints: {
            required: true,
            min: null,
            max: null,
        },
        value: null,
        activated: false
    },
    rooms: {
        label: "¿How many rooms do you want?",
        watchText: "rooms",
        constraints: {
            required: true,
            min: 1,
            max: 10,
        },
        value: null,
        activated: false
    },
    people: {
        label: "How many people are?",
        watchText: "people",
        constraints: {
            required: true,
            min: 1,
            max: 7,
        },
        value: null,
        activated: false
    },
    days: {
        label: "Select the number of days",
        watchText: "days",
        constraints: {
            required: true,
            min: 2,
            max: 7,
        },
        value: null,
        activated: false
    },
}

export default inputs;
