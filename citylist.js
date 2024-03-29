import { getWalkers } from "./database.js"

const walkers = getWalkers()


export const walkerCityList = () => {
    let citiesHTML = "<ol>"

    for (const walker of walkers) {
        citiesHTML += `<li>${walker.city}</li>`
    }

    citiesHTML += "</ol>"

    return citiesHTML
}