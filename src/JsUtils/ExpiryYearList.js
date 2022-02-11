export const GenerateExpiryYearList = () => {
    let ExpiryYearList = []
    const date = new Date();
    let year = date.getFullYear();
    ExpiryYearList.push(year)

    for (let i = 1; i <= 15; i++) {
        ExpiryYearList.push(parseInt(year) + i)
    }
    return ExpiryYearList
}
