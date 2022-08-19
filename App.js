/*
 * @Author: yiyang 630999015@qq.com
 * @Date: 2022-08-12 17:32:11
 * @LastEditors: yiyang 630999015@qq.com
 * @LastEditTime: 2022-08-17 17:56:16
 * @FilePath: /self/AwesomeProject/App.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, {Component} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Appearance,
  View,
  Alert,
} from 'react-native';


class App extends Component {
    constructor(props){
        super(props);
    }
    render(){
        // const isDarkMode = useColorScheme() === 'dark';
        const colorScheme = Appearance.getColorScheme();
        return (<SafeAreaView>
            <StatusBar barStyle={colorScheme !== 'light' ? 'light-content' : 'dark-content'} />
            <View>
                <Text selectable={true}>12313 - {colorScheme}</Text>
            </View>
        </SafeAreaView>)
    }
}

App.options = {
    backButton: {
        color: 'black'
    },
    topBar: {
        title: {
            text: 'welcome',
            color: 'black',
        },
        background: {
            color: '#ccc'
        }
    },
    bottomTab: {
        text: "welcome",
        textColor: '#666666',
        fontSize:14,
        selectedFontSize:22,
        selectedTextColor: 'red',
    }
}

export default App;