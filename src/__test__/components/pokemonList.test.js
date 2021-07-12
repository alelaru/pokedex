import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import PokemonList from "../../components/pokemonList/pokemonList"


describe("<PokemonList />", () => {
    it("renders the dashboard page with the information inside", () => {
        const { getByTestId, getByPlaceholderText, queryByTestId } = render(
            <PokemonList></PokemonList>
        );
        
    })
})