import React from 'react';
import { StyleSheet, Text, View, Button,SafeAreaView,TouchableHighlight } from 'react-native';

const newGameState = {
  squares: Array(25).fill(null),
  xIsNext: true,
}


class Game5x5 extends React.Component {
  constructor(props) {
    super(props)
    this.state = newGameState
  }

  whoseTurn() {
    return this.state.xIsNext ? 'X' : 'O'
  }

  onNewGame() {
    this.setState(newGameState)
  }

  onMove(i) {
    let newSquares = this.state.squares.slice()
    const turn = this.whoseTurn()
    if (this.state.squares[i] || winner(this.state.squares)) return null
    newSquares[i] = turn
    this.setState({
      squares: newSquares,
      xIsNext: !this.state.xIsNext,
    })
  }

  render() {
    const style = {
      backgroundColor: ' light blue ',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }

    return (
      <SafeAreaView style={style}>
        <Board squares={this.state.squares} onMove={(i) => this.onMove(i)} />
        <Status turn={this.whoseTurn()} winner={winner(this.state.squares)} onNewGame={() => this.onNewGame()} />
      </SafeAreaView>
    )
  }
}

 export const Board = ({squares, onMove}) => {
  return (
    <View>
      <Text></Text><Text></Text>
      <Text style={{fontSize:30, color: "black", alignContent: "center", alignItems: "center", justifyContent: "center"}}>     5x5  </Text>
      <Text></Text><Text></Text><Text></Text>
    <View style={{justifyContent: 'center'}}>
      <Row squares={squares} startIndex={0} onMove={onMove} />
      <Row squares={squares} startIndex={5} onMove={onMove} />
      <Row squares={squares} startIndex={10} onMove={onMove} />
      <Row squares={squares} startIndex={15} onMove={onMove}/>
      <Row squares={squares} startIndex={20} onMove={onMove} />
    </View>
    </View>
  )
}

export const Row = ({squares, startIndex, onMove}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Square label={squares[startIndex    ]} onPress={() => onMove(startIndex    )} />
      <Square label={squares[startIndex + 1]} onPress={() => onMove(startIndex + 1)} />
      <Square label={squares[startIndex + 2]} onPress={() => onMove(startIndex + 2)} />
      <Square label={squares[startIndex + 3]} onPress={()=> onMove(startIndex +3)} />
      <Square label={squares[startIndex + 4]} onPress={()=> onMove(startIndex + 4)} />
    </View>
  )
}

export const Square = ({label, onPress}) => {
  const style = {
    width: 100,
    height: 100,
    borderColor: 'black',
    borderWidth: 2,
    justifyContent: 'center',
  }

  const textStyle = {
    textAlign: 'center',
    fontSize: 46,
    fontWeight: 'bold',
  }

  return (
    <TouchableHighlight style={style} onPress={onPress}>
      <Text style={textStyle}>{label}</Text>
    </TouchableHighlight>
  )
}

export const Status = ({turn, winner, onNewGame}) => {
  const text = winner === null ? 'Tie game :-/'
        : winner !== undefined ? winner + ' wins!'
        : turn + "'s turn"

  return (
    <View style={{flex: 1}}>
      <Text></Text>
      <Text></Text>
      <Text style={{fontSize: 24, textAlign: 'center'}}>{text}</Text>
      <Text></Text><Text></Text>
      <Button title='new game' onPress={onNewGame} style={{backgroundcolor: "red"}} />

      


    </View>
  )
}

const winner = squares => {
  const lines = [
    [0, 1, 2],
    [1, 2, 3],
    [2, 3, 4],
    [5, 6, 7],
    [6, 7, 8],
    [7, 8, 9],
    [10, 11, 12],
    [11, 12, 13],
    [12, 13, 14],
    [15, 16, 17],
    [16, 17, 18],
    [17, 18, 19],
    [20, 21, 22],
    [21, 22, 23],
    [22, 23, 24],
    [0, 5, 10],
    [5, 10, 15],
    [10, 15, 20],
    [1, 6, 11],
    [6, 11, 16],
    [11, 16, 21],
    [2, 7, 12],
    [7, 12, 17],
    [12, 17, 22],
    [3, 8, 13],
    [8, 13, 18],
    [13, 18, 23],
    [4, 9, 14],
    [9, 14, 19],
    [14, 19, 24],
    [2, 8, 14],
    [1, 7, 13],
    [7, 13, 19],
    [0, 6, 12],
    [6, 12, 18],
    [12, 18, 24],
    [5, 11, 17],
    [11, 17, 23],
    [10, 16, 22],
    [2, 6, 10],
    [3, 7, 11],
    [7, 11, 15],
    [4, 8, 12],
    [8, 12, 16],
    [12, 16, 20],
    [9, 13, 17],
    [13, 17, 21],
    [14, 18, 22],
  ]

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  if (squares.indexOf(null) === -1) return null // tie game
  return undefined
}


const styles = StyleSheet.create({ 

  b1: {
    color: "red",
  }

});
    
    export default Game5x5;
