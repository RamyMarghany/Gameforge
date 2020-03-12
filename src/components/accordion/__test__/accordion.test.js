import React from 'react';
import ReactDOM from 'react-dom'
import Accordion from './../index'
import "@testing-library/jest-dom"; 
import renderer from 'react-test-renderer'

it('render without crashing', ()=>{
    const div = document.createElement('div');
    ReactDOM.render(<Accordion></Accordion>, div)
})


it('matches snapshots', ()=>{
    const tree = renderer.create(<Accordion/>).toJSON()
    expect(tree).toMatchSnapshot();
})