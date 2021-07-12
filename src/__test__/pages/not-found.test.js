import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import * as ROUTES from "../../constants/routes";
import NotFound from '../../pages/notfound';
import { BrowserRouter as Router } from 'react-router-dom';



const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush
  })
}));

describe('<NotFound />', () => {
    it('renders the not found page', () => {
        const { getByText, getByTitle, debug } = render(
            <Router>
                <NotFound></NotFound>
            </Router>
        );

        expect(getByText("Not Found")).toBeTruthy();
        expect(document.title).toEqual('Not Found - Pokedex');
        expect(getByText("Go to Home Page")).toBeTruthy();
        expect(getByTitle("PokeAPI")).toBeTruthy();

        //Clicking the pill button and the move to the Homepage
        fireEvent.click(getByTitle("button-click"));
        expect(mockHistoryPush).toHaveBeenCalledWith(ROUTES.DASHBOARD);

        // Clicking the image and then move to the Homepage
        fireEvent.click(getByTitle("PokeAPI"));
        debug();
    })
})