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
        this.operators = ['+', '-', '*', '/'];
        this.operations = ['DEL', '/', '*', '-', '+', 'C'];
        this.numbers = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.', '=']
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
        let opt = this.operators;
        let flag = opt.some( e => this.state.values.includes(e));
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
        let opt = this.operators;
        for(let i=0; i<opt.length; i++){
            arr = this.state.values.split(opt[i])
            if(this.state.values.split(opt[i]).length == 2){
                x = eval( arr[0]  + opt[i] +  arr[1] );
            }
        }
        this.setState({ 
            result: x
        });
    }
    render() {
        // Numbers section in loop 
        let nums = this.numbers;
        let calcNums = [];
        for(let i = 0; i < nums.length; i++){
            if(nums[i] != '='){
                calcNums.push(
                    <TouchableOpacity key = {i} style = { styles.numberButton } onPress = { () => this.input( nums[[i]] ) } >
                        <Text  style = { styles.numberButtonText }> { nums[i] } </Text>
                    </TouchableOpacity>
                )
            } else {
                calcNums.push(
                    <TouchableOpacity key = {i} style = { styles.numberButton } onPress = { () => this.equal( nums[[i]] ) } >
                        <Text  style = { styles.operatorButtonText }> { nums[i] } </Text>
                    </TouchableOpacity>
                )
            }
        }
        // Operators section in loop 
        let ops = this.operations;
        let calcOps = [];
        for(let i = 0; i < ops.length; i++){
            calcOps.push(
            <TouchableOpacity key = {i} style = { styles.operatorButton } onPress = { () => this.operate( ops[[i]] ) } >
                <Text  style = { styles.operatorButtonText }> { ops[i] } </Text>
            </TouchableOpacity>
            )
        }
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
                        { calcNums }
                    </View>
                    <View style = { styles.columnOprator }>
                        { calcOps }
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
        flexDirection: 'row'
    },
    column: { 
        flex: 1,
        flexDirection: 'column',
        justifyContent:'flex-start',
        alignContent: 'center'
    },
    rowInput: { 
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#243541',
        justifyContent: 'flex-end',
        padding: 5
    },
    rowResult: { 
        flex: .5,
        flexDirection: 'row',
        backgroundColor: '#243541fa',
        justifyContent: 'flex-end',
        paddingTop: 5,
        paddingRight: 5,
        paddingLeft: 5,
        paddingBottom: 10
    },
    rowInputText: {
        fontSize: 60,
        alignSelf: 'flex-end',
        color: 'white'
    },
    rowResultText: {
        fontSize: 40,
        alignSelf: 'flex-end',
        color: 'white'
    },
    columnNumber: {
        flex: 3,
        flexDirection: 'row',
        backgroundColor: 'black',
        flexWrap: 'wrap',
        margin:0
    },
    columnOprator: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
        flexWrap: 'wrap',
        margin:0
    },
   numberButton: {
        padding: 33,
        backgroundColor: '#243541',
        width: '32.5%',
        height: '25%',
        margin: .5,
        shadowColor: '#243541',
        shadowRadius: 10,
        shadowOpacity: 1,
   },
   operatorButton: {
        backgroundColor: '#243541',
        width: '105%',
        height: '16.4%',
        marginTop: .5,
        marginBottom: .5,
        marginRight: .5,
        marginLeft: -4,
        justifyContent: 'center',
        shadowColor: '#243541',
        shadowRadius: 10,
        shadowOpacity: 1,
    },
    numberButtonText: {
         fontSize: 40,
         color: '#ffffff',
         alignSelf: 'center'
    },
    operatorButtonText: {
        fontSize: 30,
        color: '#ED802E',
        alignSelf: 'center'
    }
});