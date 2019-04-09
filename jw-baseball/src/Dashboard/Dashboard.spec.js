import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Dashboard from './Dashboard.js';
import Display from '../Display/Display.js';

describe('<Dashboard> and <Display> through the Dash', () => {

    // Strikes -------------------------------------------------------------------
    it('strike button increments strike (0 - 1)', () => {
        const { getByText } = render(<Dashboard />, <Display />);

        const button = getByText(/strike/i);

        fireEvent.click(button);
        getByText(/Strikes: 1/i);
    })

    it('strike button increments strike (1 - 2)', () => {
        const { getByText } = render(<Dashboard />, <Display />);

        const button = getByText(/strike/i);

        fireEvent.click(button);
        getByText(/Strikes: 2/i);
    })

    it('strike button increments strike (2 - 0)', () => {
        const { getByText } = render(<Dashboard />, <Display />);

        const button = getByText(/strike/i);

        fireEvent.click(button);
        getByText(/Strikes: 0/i);
    })

    // Balls ------------------------------------------------------------------------
    it('ball button increments ball (0 - 1)', () => {
        const { getByText } = render(<Dashboard />, <Display />);

        const button = getByText(/ball/i);

        fireEvent.click(button);
        getByText(/Balls: 1/i);
    })

    it('ball button increments ball (1 - 2)', () => {
        const { getByText } = render(<Dashboard />, <Display />);

        const button = getByText(/ball/i);

        fireEvent.click(button);
        getByText(/Balls: 2/i);
    })

    it('ball button increments ball (2 - 3)', () => {
        const { getByText } = render(<Dashboard />, <Display />);

        const button = getByText(/ball/i);

        fireEvent.click(button);
        getByText(/Balls: 3/i);
    })

    it('ball button increments ball (3 - 0)', () => {
        const { getByText } = render(<Dashboard />, <Display />);

        const button = getByText(/ball/i);

        fireEvent.click(button);
        getByText(/Balls: 0/i);
    })

    // Fouls -------------------------------------------------------------------
    it('foul button increments strike (0 - 1)', () => {
        const { getByText } = render(<Dashboard />, <Display />);

        const button = getByText(/foul/i);

        fireEvent.click(button);
        getByText(/Strikes: 1/i);
    })

    it('foul button increments strike (1 - 2)', () => {
        const { getByText } = render(<Dashboard />, <Display />);

        const button = getByText(/foul/i);

        fireEvent.click(button);
        getByText(/Strikes: 2/i);
    })

    it('foul will not increment strike beyond 2', () => {
        const { getByText } = render(<Dashboard />, <Display />);

        const button = getByText(/foul/i);

        fireEvent.click(button);
        getByText(/Strikes: 2/i);
    })

    // Hit ---------------------------------------------------------------
    it('add a ball in prep for hit function', () => {
        const { getByText } = render(<Dashboard />, <Display />);

        const button = getByText(/ball/i);

        fireEvent.click(button);
        getByText(/Balls: 1/i);
    })

    it('hit button resets stats', () => {
        const { getByText } = render(<Dashboard />, <Display />);

        const button = getByText(/hit/i);

        fireEvent.click(button);
        getByText(/Strikes: 0/i);
        getByText(/Balls: 0/i);
    })
})