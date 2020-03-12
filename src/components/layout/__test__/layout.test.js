import React from 'react';
import ReactDOM from 'react-dom'
import Wrapper from './../index'
import "@testing-library/jest-dom"; 
import renderer from 'react-test-renderer'

it('render without crashing', ()=>{
    const div = document.createElement('div');
    ReactDOM.render(<Wrapper></Wrapper>, div)
})


it('matches snapshots', ()=>{
    const tree = renderer.create(<Wrapper/>).toJSON()
    expect(tree).toMatchSnapshot();
})