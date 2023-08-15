export default (input?: number, showDecimal = null): string => {
    if (input === undefined || input === null) return ""

    let floorNumber = 1000
    let suffix = ""
    let getFloor = input
    let defaultDecimal: 1 | 0 = 0
    if (input >= 0 && input < 1000) {
        // 1 - 999
        getFloor = input
        suffix = ""
    } else if (input >= 1000 && input < 10 * 1000) {
        // 1k-999k
        getFloor = input / floorNumber
        suffix = "K"
        defaultDecimal = 1
    } else if (input >= 10 * 1000 && input < 1000 * 1000) {
        // 1k-999k
        getFloor = input / floorNumber
        suffix = "K"
    } else if (input >= 1000 * 1000 && input < 1000 * 1000 * 1000) {
        // 1m-999m
        floorNumber = 1000 * 1000
        getFloor = input / floorNumber
        suffix = "M"
    } else if (input >= 1000 * 1000 * 1000 && input < 1000 * 1000 * 1000 * 1000) {
        // 1b-999b
        floorNumber = 1000 * 1000 * 1000
        getFloor = input / floorNumber
        suffix = "B"
    } else if (input >= 1000 * 1000 * 1000 * 1000) {
        // 1t+
        floorNumber = 1000 * 1000 * 1000 * 1000
        getFloor = input / floorNumber
        suffix = "T"
    } else {
        getFloor = input
    }

    let decimals: 1 | 0 = defaultDecimal
    if (showDecimal !== null) {
        decimals = showDecimal ? 1 : 0
    }
    if (suffix === "") {
        decimals = 0
    }

    let resultString = getFloor.toFixed(decimals)

    if (resultString.slice(-2) === ".0") {
        resultString = resultString.substring(0, resultString.length - 2)
    } // to prevent showing 2.0M. With this, it will show 2M

    return resultString + suffix
}
