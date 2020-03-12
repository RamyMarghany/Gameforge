import React from 'react';
import ReactDOM from 'react-dom'
import Card from './../index'
import "@testing-library/jest-dom"; 
import renderer from 'react-test-renderer'

it('render without crashing', ()=>{
    const div = document.createElement('div');
    ReactDOM.render(<Card></Card>, div)
})


it('matches snapshots', ()=>{
    const tree = renderer.create(<Card/>).toJSON()
    expect(tree).toMatchSnapshot();
})