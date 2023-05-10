import { appState } from "../AppState";
import { House } from "../Models/House";

function _drawHouses() {
    console.log('drawing houses');
    let houses = appState.houses
    // NOTE make sure your placeholder template is declared outside of the forEach
    let template = ''
    // NOTE for each car in the AppState, inject the cardTemplate into the placeholder
    houses.forEach(House => template += House.CardTemplate)
    setHTML('houses', template)
}

function _drawActive() {
    console.log('drawing active');
    let car = appState.activeHouse
    setHTML('modal-guts', car.ActiveTemplate)
}