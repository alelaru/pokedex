import React from 'react';
import { render, fireEvent, waitFor, act, getByTestId } from '@testing-library/react';
import * as ROUTES from "../../constants/routes";
import NotFound from '../../pages/notfound';
import { BrowserRouter as Router } from 'react-router-dom';
import DetailsPage from '../../pages/profile';
import { getDetailesFromPokemon, getEvolutionChainFromId } from '../../services/apiCalls';
import detailsOfOnePokemon from "../../fixtures/one-pokemon-details"
import evolutionsOfOnePokemon from "../../fixtures/evolutions-pokemon"
import detailsOfOnePokemonEmpty from "../../fixtures/pokemon-info-empty"

const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush
  })
}));

jest.mock("../../services/apiCalls.js")

describe('<Profile Page />', () => {

//Test with all the information correct and it renders correctly, then clicks pill back to the homepage
    it('Renders the profile page correctly with all the pokemon Info', async () => {

        await act(async () => {
            getDetailesFromPokemon.mockImplementation(() => detailsOfOnePokemon);
            getEvolutionChainFromId.mockImplementation(() => evolutionsOfOnePokemon)
            const { getByText, getByTitle, debug, getByTestId } = render(
                <Router>
                    <DetailsPage></DetailsPage>
                </Router> 
            );
            
            await waitFor(() => {
                expect(mockHistoryPush).not.toHaveBeenCalledWith(ROUTES.NOT_FOUND);
                expect(getByTitle("PokeAPI")).toBeTruthy();
                expect(getByText("Alejandro Lara Ruiz, Viva México!!")).toBeTruthy();
                expect(getDetailesFromPokemon).toHaveBeenCalled();
                expect(getEvolutionChainFromId).toHaveBeenCalled();
                expect(getByTestId("image")).toBeTruthy();
                expect(getByText("blaze")).toBeTruthy();
                expect(getByText("body-slam")).toBeTruthy();
                expect(getByText("charmeleon")).toBeTruthy();
                expect(getDetailesFromPokemon).toHaveBeenCalled();
                //Clicks the button to go to Homepage
                fireEvent.click(getByText("Go back to Homepage"))
                expect(mockHistoryPush).toHaveBeenCalledWith(ROUTES.DASHBOARD);
            })
        })
    })

    //Test when the evolution-chain api returns nothing
    it('Renders returning an undefined value from the evolution-chain array', async () => {

        await act(async () => {
            getDetailesFromPokemon.mockImplementation(() => detailsOfOnePokemonEmpty);
            getEvolutionChainFromId.mockImplementation(() => undefined)

            const { getByTitle, getByText} = render(
                <Router>
                    <DetailsPage></DetailsPage>
                </Router> 
            );
            await waitFor(() => {
                expect(getDetailesFromPokemon).toHaveBeenCalled();
                expect(getByText("Evolution")).toBeTruthy();
                expect(getByText("Evolution")).toBeTruthy();
                expect(getByText("Moves")).toBeTruthy();
                // expect(getByText("body-slam")).toBeFalsy();
                expect(getByTitle("PokeAPI")).toBeTruthy();
            })
        })

    })    

    // Test when the api of the details pokemon returns undefined
    it('Renders returning an undefined value from the pokemonDetails API', async () => {

        await act(async () => {
            getDetailesFromPokemon.mockImplementation(() => undefined);
            const { getByTitle} = render(
                <Router>
                    <DetailsPage></DetailsPage>
                </Router> 
            );
            await waitFor(() => {
                expect(getDetailesFromPokemon).toHaveBeenCalled();
                expect(getByTitle("PokeAPI")).toBeTruthy();
                expect(mockHistoryPush).toHaveBeenCalledWith(ROUTES.NOT_FOUND);
            })
        })

    })    



    // Test when the arrays from stats, moves or evolution come empty
    it('Renders the page without pokemon information, the api fails or ir doesnt exists', async () => {

        await act(async () => {
            getDetailesFromPokemon.mockImplementation(() => undefined);
            const { getByTitle} = render(
                <Router>
                    <DetailsPage></DetailsPage>
                </Router> 
            );
            await waitFor(() => {
                expect(getDetailesFromPokemon).toHaveBeenCalled();
                expect(getByTitle("PokeAPI")).toBeTruthy();
                expect(mockHistoryPush).toHaveBeenCalledWith(ROUTES.NOT_FOUND);
            })
        })
    })    

})