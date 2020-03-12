import React from 'react';
import ReactDOM from 'react-dom'
import TabController from './../index'
import "@testing-library/jest-dom"; 
import renderer from 'react-test-renderer'

it('render without crashing', ()=>{
    const div = document.createElement('div');
    ReactDOM.render(<TabController></TabController>, div)
})


it('matches snapshots', ()=>{
    const tree = renderer.create(<TabController/>).toJSON()
    expect(tree).toMatchSnapshot();
})