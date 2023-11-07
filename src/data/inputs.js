const inputs = {
    zone: {
        label: "Select zone to visit",
        description: null,
        constraints: {
            required: true,
            min: null,
            max: null,
        },
        value: null,
        activated: true,
        type: "radio"
    },
    name: {
        label: "Write your name",
        description: " is your user name",
        constraints: {
            required: true,
            minLength: 2,
            maxLength: 45,
        },
        value: null,
        activated: false,
        type: "text"
    },
    rooms: {
        label: "¿How many rooms do you want?",
        description: " rooms",
        constraints: {
            required: true,
            min: 1,
            max: 10,
        },
        value: null,
        activated: false,
        type: "number"
    },
    people: {
        label: "How many people are?",
        description: " people",
        constraints: {
            required: true,
            min: 1,
            max: 7,
        },
        value: null,
        activated: false,
        type: "number"
    },
    days: {
        label: "Select the number of days",
        description: " days",
        constraints: {
            required: true,
            min: 2,
            max: 7,
        },
        value: null,
        activated: false,
        type: "number"
    },
}

export default inputs;
