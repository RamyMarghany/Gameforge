import React from 'react';
import ReactDOM from 'react-dom'
import Dropdown from './../index'
import {render, cleanup} from '@testing-library/react'
import "@testing-library/jest-dom"; 
import renderer from 'react-test-renderer'

afterEach(cleanup);


it('render without crashing', ()=>{
    const div = document.createElement('div');
    ReactDOM.render(<Dropdown></Dropdown>, div)
})

it('render dropdown correctly', ()=>{
    const {getByTestId} = render(<Dropdown></Dropdown>)
    expect(getByTestId('dropdown')).toHaveTextContent('Settings')
})

it('render dropdown correctly with a different title', ()=>{
    const {getByTestId} = render(<Dropdown></Dropdown>)
    expect(getByTestId('dropdown')).toHaveTextContent('Profile')
})

it('matches snapshots', ()=>{
    const tree = renderer.create(<Dropdown/>).toJSON()
    expect(tree).toMatchSnapshot();
})