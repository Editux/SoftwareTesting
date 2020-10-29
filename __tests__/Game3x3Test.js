import React from 'react';
import Game3x3 from '../src/screens/Game3x3';
import {shallow, mount} from 'enzyme';
import '../src/screens/SetUpTests';
import {Status, Board,Row, Square} from '../src/screens/Game3x3'




it('Game board renders without crashing', () => {
    shallow(<Game3x3 />);
  });

it('Renders squares array without crashing', ()=>{
  let squares = Array(9).fill(null)
  shallow(<Game3x3 squares={squares}/>)

})

it('Renders Status component', ()=>{
  shallow(<Status/>);
})

it('Renders Board component',()=>{
  shallow(<Board/>);
})

it('Renders Rows component', ()=>{
  let squares = Array(9).fill(null)
  shallow(<Row squares={squares}/>);
})

it('Renders Square Component', ()=>{
  shallow(<Square/>);
})

