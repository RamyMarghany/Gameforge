import React from 'react';
import ReactDOM from 'react-dom'
import Header from './../index'
import "@testing-library/jest-dom"; 
import renderer from 'react-test-renderer'

it('render without crashing', ()=>{
    const div = document.createElement('div');
    ReactDOM.render(<Header></Header>, div)
})


it('matches snapshots', ()=>{
    const tree = renderer.create(<Header/>).toJSON()
    expect(tree).toMatchSnapshot();
})