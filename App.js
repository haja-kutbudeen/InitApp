import React, { Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
export default class App extends Component { 
    constructor() { 
        super(); 
        this.state = { 
            input: '', 
            result: '',
            values: ''
        }
    }
    input(e) {
        if(e == '.') { 
            ( this.state.values.includes('.') ) ? e = '' : e = e 
        }
        let x = this.state.values + e;
        this.setState({ 
            values: x,
            result: ''
        }); 
    }
    operate(e) { 
        let x = '';
        let ops = ['+', '-', '*', '/']
        let flag = ops.some( e => this.state.values.includes(e));
        switch (e) { 
            case '+':
                (flag) ? e = '' : e = e ;
                x = this.state.values + e;
                this.setState({ 
                    values: x
                });
                break; 
            case '-':
                (flag) ? e = '' : e = e ;
                x = this.state.values + e;
                this.setState({ 
                    values: x
                });
                break; 
            case '*':
                (flag) ? e = '' : e = e ;
                x = this.state.values + e;
                this.setState({ 
                    values: x
                });
                break; 
            case '/':
                (flag) ? e = '' : e = e ;
                x = this.state.values + e;
                this.setState({ 
                    values: x
                });
                break; 
            case 'DEL':
                x = this.state.values.slice(0, -1); 
                this.setState({ 
                    values: x,
                    result: ''
                }); 
                break; 
            case 'C':
                this.setState({ 
                    values: '',
                    result: ''
                }); 
                break; 
        }
    }
    equal() {
        let arr = '';
        let x = '';
        let ops = ['+', '-', '*', '/']
        for(let i=0; i<ops.length; i++){
            arr = this.state.values.split(ops[i])
            if(this.state.values.split(ops[i]).length == 2){
                x = eval( arr[0]  + ops[i] +  arr[1] );
                console.log(x);
            }
        }
        this.setState({ 
            result: x
        });
    }
    render() {
        return (
            <View style = { styles.container }>
                <View style = { styles.column }>
                    <View style = { styles.rowInput }>
                        <Text style = { styles.rowInputText } > { this.state.values } </Text>
                    </View>
                    <View style = { styles.rowResult }>
                        <Text style = { styles.rowResultText } >  { this.state.result } </Text>
                    </View>
                </View>
                <View style = { styles.row }>
                    <View style = { styles.columnNumber }>
                        <View style = { styles.columnNumberSection }>
                            <TouchableOpacity  style = { styles.numberButton } onPress = { () => this.input('1') } >
                                <Text  style = { styles.numberButtonText }> 1 </Text>
                            </TouchableOpacity>
                            <TouchableOpacity  style = { styles.numberButton } onPress = { () => this.input('2') } >
                                <Text  style = { styles.numberButtonText }> 2 </Text>
                            </TouchableOpacity>
                            <TouchableOpacity  style = { styles.numberButton } onPress = { () => this.input('3') } >
                                <Text  style = { styles.numberButtonText }> 3 </Text>
                            </TouchableOpacity>
                        </View>
                        <View style = { styles.columnNumberSection }>
                            <TouchableOpacity  style = { styles.numberButton } onPress = { () => this.input('4') } >
                                <Text  style = { styles.numberButtonText }> 4 </Text>
                            </TouchableOpacity>
                            <TouchableOpacity  style = { styles.numberButton } onPress = { () => this.input('5') } >
                                <Text  style = { styles.numberButtonText }> 5 </Text>
                            </TouchableOpacity>
                            <TouchableOpacity  style = { styles.numberButton } onPress = { () => this.input('6') } >
                                <Text  style = { styles.numberButtonText }> 6 </Text>
                            </TouchableOpacity>
                        </View>
                        <View style = { styles.columnNumberSection }>
                            <TouchableOpacity  style = { styles.numberButton } onPress = { () => this.input('7') } >
                                <Text  style = { styles.numberButtonText }> 7 </Text>
                            </TouchableOpacity>
                            <TouchableOpacity  style = { styles.numberButton } onPress = { () => this.input('8') } >
                                <Text  style = { styles.numberButtonText }> 8 </Text>
                            </TouchableOpacity>
                            <TouchableOpacity  style = { styles.numberButton } onPress = { () => this.input('9') } >
                                <Text  style = { styles.numberButtonText }> 9 </Text>
                            </TouchableOpacity>
                        </View>
                        <View style = { styles.columnNumberSection }>
                            <TouchableOpacity  style = { styles.numberButton } onPress = { () => this.input('.') } >
                                <Text  style = { styles.numberButtonText }> . </Text>
                            </TouchableOpacity>
                            <TouchableOpacity  style = { styles.numberButton } onPress = { () => this.input('0') } >
                                <Text  style = { styles.numberButtonText }> 0 </Text>
                            </TouchableOpacity>
                            <TouchableOpacity  style = { styles.numberButton } onPress = { () => this.equal('=') } >
                                <Text  style = { styles.numberButtonText }> = </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style = { styles.columnOprator }>
                        <TouchableOpacity  style = { styles.operatorButton } onPress = { () => this.operate('DEL') } >
                            <Text  style = { styles.operatorButtonText }> DEL </Text>
                        </TouchableOpacity>
                        <TouchableOpacity  style = { styles.operatorButton } onPress = { () => this.operate('/') } >
                            <Text  style = { styles.operatorButtonText }> / </Text>
                        </TouchableOpacity>
                        <TouchableOpacity  style = { styles.operatorButton } onPress = { () => this.operate('*') } >
                            <Text  style = { styles.operatorButtonText }> * </Text>
                        </TouchableOpacity>
                        <TouchableOpacity  style = { styles.operatorButton } onPress = { () => this.operate('-') } >
                            <Text  style = { styles.operatorButtonText }> - </Text>
                        </TouchableOpacity>
                        <TouchableOpacity  style = { styles.operatorButton } onPress = { () => this.operate('+') } >
                            <Text  style = { styles.operatorButtonText }> + </Text>
                        </TouchableOpacity>
                        <TouchableOpacity  style = { styles.operatorButton } onPress = { () => this.operate('C') } >
                            <Text  style = { styles.operatorButtonText }> C </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    } 
}
 
const styles = StyleSheet.create({ 
    container: { 
        flex: 1,
    },
    row: { 
        flex: 1,
        flexDirection: 'row',
    },
    column: { 
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    rowInput: { 
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'pink',
        justifyContent: 'flex-end'
    },
    rowResult: { 
        flex: .30,
        flexDirection: 'row',
        backgroundColor: 'cyan',
        justifyContent: 'flex-end'
    },
   columnNumber: {
        flex: 3,
        flexDirection: 'column',
        backgroundColor: 'black'
   },
   columnNumberSection: {
        flexDirection: 'row'
   },
   columnOprator: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black'
   },
   rowInputText: {
        fontSize: 70,
        alignSelf: 'flex-end',
   },
   rowResultText: {
        fontSize: 50,
        alignSelf: 'flex-end',
   },
   numberButton: {
        padding: 33,
        backgroundColor: 'red',
        width: '32.7%',
        height: '100%',
        margin: 1
   },
   numberButtonText: {
        fontSize: 40,
        color: 'white',
        alignSelf: 'center'
   },
   operatorButton: {
        padding: 10,
        backgroundColor: 'blue',
        width: '100%',
        height: '16.25%',
        margin: 1,
        justifyContent: 'center'
    },
    operatorButtonText: {
        fontSize: 30,
        color: 'white',
        alignSelf: 'center'
    }
});