import React from 'react';
import { render, fireEvent, waitFor, getByTestId } from '@testing-library/react';
import * as ROUTES from "../../constants/routes";
import Dashboard from '../../pages/dashboard';
import { BrowserRouter as Router } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import {fetchAllPokemons} from "../../services/apiCalls"
import pokemonListDummy from "../../fixtures/pokemon-list"

const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush
  })
}));

jest.mock('../../services/apiCalls')

describe('<Dashboard />', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    it('Renders the dashboard page with 5 pokemons and clicks the button', async () => {
        await act(async () => {

            fetchAllPokemons.mockImplementation(() => pokemonListDummy)

            const { getByText, getByTitle, debug, getByTestId } = render(
                <Router>
                    <Dashboard></Dashboard>
                </Router>
            );

            await waitFor(() => {
                // //Expect that everything is rendered, not going to NOT Found
                expect(mockHistoryPush).not.toHaveBeenCalledWith(ROUTES.NOT_FOUND);
                expect(getByTitle("PokeAPI")).toBeTruthy();
                expect(getByText("Alejandro Lara Ruiz, Viva México!!")).toBeTruthy();
                expect(fetchAllPokemons).toHaveBeenCalled();
                expect(getByTestId("resolved")).toBeTruthy();
        
                // 5 times the pill button and then disapear
                fireEvent.click(getByTitle("button-click"));
                // debug();
            })
        })
    })


// 2nd test with an empty array of pokemons
    it('Renders the dashboard without pokemons', async () => {
        await act(async () => {

            fetchAllPokemons.mockImplementation(() => [])
            const { getByText, getByTitle, debug, getByTestId } = render(
                <Router>
                    <Dashboard></Dashboard>
                </Router>
            );
            await waitFor(() => {
                // //Expect that everything is rendered, not going to NOT Found
                expect(mockHistoryPush).not.toHaveBeenCalledWith(ROUTES.NOT_FOUND);
                expect(getByTitle("PokeAPI")).toBeTruthy();
                expect(getByText("Alejandro Lara Ruiz, Viva México!!")).toBeTruthy();
                expect(fetchAllPokemons).toHaveBeenCalled();
                expect(getByTestId("loading")).toBeTruthy();
            })
        })
    })  

    //The test of an array with more than 1118 pokemos i didnt do it but i tested the funcionality several times 
    // byt hand    
    
})