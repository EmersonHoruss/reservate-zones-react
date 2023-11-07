export const inputTypes = {
    zone: "zone",
    name: "name",
    rooms: "rooms",
    people: "people",
    days: "days",
}

export const inputOrder = [inputTypes.name, inputTypes.rooms, inputTypes.people, inputTypes.days]

export const getNextInputType = (inputType) => {
    const nextIndex = inputOrder.findIndex(currentInputType => currentInputType === inputType) + 1
    return inputOrder[nextIndex]
}

export const isTheLastInput = (inputType) => {
    return inputType === inputOrder[inputOrder.length - 1]
}
