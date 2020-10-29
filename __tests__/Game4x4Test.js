import React from 'react';
import Game4x4 from '../src/screens/Game4x4';
import {shallow, mount} from 'enzyme';
import '../src/screens/SetUpTests';
import {Status, Board,Row, Square} from '../src/screens/Game4x4'




it('Game board renders without crashing', () => {
    shallow(<Game4x4 />);
  });

it('Renders squares array without crashing', ()=>{
  let squares = Array(16).fill(null)
  shallow(<Game4x4 squares={squares}/>)

})

it('Renders Status component', ()=>{
  shallow(<Status/>);
})

it('Renders Board component',()=>{
  shallow(<Board/>);
})

it('Renders Rows component', ()=>{
  let squares = Array(16).fill(null)
  shallow(<Row squares={squares}/>);
})

it('Renders Square Component', ()=>{
  shallow(<Square/>);
})

