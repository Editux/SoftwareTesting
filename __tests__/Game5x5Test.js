import React from 'react';
import Game5x5 from '../src/screens/Game5x5';
import {shallow, mount} from 'enzyme';
import '../src/screens/SetUpTests';
import {Status, Board,Row, Square} from '../src/screens/Game5x5'




it('Game board renders without crashing', () => {
    shallow(<Game5x5 />);
  });

it('Renders squares array without crashing', ()=>{
  let squares = Array(25).fill(null)
  shallow(<Game5x5 squares={squares}/>)

})

it('Renders Status component', ()=>{
  shallow(<Status/>);
})

it('Renders Board component',()=>{
  shallow(<Board/>);
})

it('Renders Rows component', ()=>{
  let squares = Array(25).fill(null)
  shallow(<Row squares={squares}/>);
})

it('Renders Square Component', ()=>{
  shallow(<Square/>);
})

