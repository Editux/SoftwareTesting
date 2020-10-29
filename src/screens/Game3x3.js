import React from 'react';
import { StyleSheet, Text, View,Button, SafeAreaView, TouchableHighlight } from 'react-native';

const newGameState = {
    squares: Array(9).fill(null),
    xIsNext: true,
  }

  class Game3x3 extends React.Component {
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
          <Text style={{fontSize:30, color: "black", alignContent: "center", alignItems: "center", justifyContent: "center"}}>     3x3  </Text>
          <Text></Text><Text></Text><Text></Text>
        <View style={{justifyContent: 'center'}}>
          <Row squares={squares} startIndex={0} onMove={onMove} />
          <Row squares={squares} startIndex={3} onMove={onMove} />
          <Row squares={squares} startIndex={6} onMove={onMove} />
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
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
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
    




export default Game3x3;