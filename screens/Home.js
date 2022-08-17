/*
 * @Author: yiyang 630999015@qq.com
 * @Date: 2022-08-15 10:56:47
 * @LastEditors: yiyang 630999015@qq.com
 * @LastEditTime: 2022-08-16 18:46:19
 * @FilePath: /self/AwesomeProject/screens/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, {Component} from 'react';
import { Navigation } from 'react-native-navigation';

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

export default function Home(props){
    return (<SafeAreaView>
        <View style={styles.root}>
            <Text>Home3</Text>
        </View>
        <View>
            <Text onPress={()=>{
                Navigation.push(props.componentId, {
                    component: {
                      name: 'welcomeScreen',
                      options: {
                        topBar: {
                          title: {
                            text: 'welcome'
                          }
                        }
                      }
                    }
                });
                // Alert.alert(
                //     "提示",
                //     JSON.stringify(props),
                //     [
                //       {
                //         text: "Cancel",
                //         onPress: () => console.log("Cancel Pressed"),
                //         style: "cancel"
                //       },
                //       { text: "OK", onPress: () => console.log("OK Pressed") }
                //     ]
                // );
            }}>welcome</Text>
        </View>
    </SafeAreaView>)
}

const styles = StyleSheet.create({
    root: {
        fontSize: 40,
        color: 'red',
        background: "yellow",
    }
})