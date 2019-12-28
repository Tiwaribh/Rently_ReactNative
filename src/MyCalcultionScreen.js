import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'



export default class MyCalcultionScreen extends Component {
   state = {
      n: '',
      m: ''
   }

   handleN = (text) => {
      this.setState({ n: text, result: '' })
   }

   handleM = (text) => {
      this.setState({ m: text, result: '' })
   }


   onSubmit = (n, m) => {
      if (n === '' || m === '') {
         alert("Please enter M & N");
      } else {
         var output = "Result = " + this.calculate(Number.parseInt(n), Number.parseInt(m));
         this.setState({ result: output });
      }

   }


   /***
    * Function to calculate tiles
    */
   calculate = (n, m) => {
      if (n == 0 || m == 0)
         return 0;
      else if ((n % 2 == 0) && (m % 2 == 0))
         return this.calculate((n / 2 | 0), (m / 2 | 0));
      else if ((n % 2 === 0) && (m % 2 === 1))
         return (n + this.calculate((n / 2 | 0), (m / 2 | 0)));
      else if ((n % 2 === 1) && (m % 2 === 0))
         return (m + this.calculate((n / 2 | 0), (m / 2 | 0)));
      else
         return ((n + m - 1) + this.calculate((n / 2 | 0), (m / 2 | 0)));
   };


   render() {
      return (
         <View style={styles.container}>


            <TextInput style={styles.input}
               underlineColorAndroid="transparent"
               placeholder="Enter M"
               placeholderTextColor="#9a73ef"
               keyboardType='numeric'
               onChangeText={this.handleM} />


            <TextInput style={styles.input}
               underlineColorAndroid="transparent"
               placeholder="Enter N"
               placeholderTextColor="#9a73ef"
               keyboardType='numeric'
               onChangeText={this.handleN} />


            {this.state.result ? <Text style={styles.result}> {this.state.result}  </Text> : null}

            <TouchableOpacity
               style={styles.submitButton}
               onPress={
                  () => this.onSubmit(this.state.n, this.state.m)
               }>
               <Text style={styles.submitButtonText}> Calculate </Text>
            </TouchableOpacity>
         </View>

      );
   }
}


const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   result: {
      margin: 15,
      height: 40,
      alignItems: 'center',
      color:'green',
      textAlign:"center",
      fontSize: 20
   },
   submitButtonText: {
      color: 'white',
      alignSelf: 'center'
   }
});