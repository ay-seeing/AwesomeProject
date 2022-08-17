/*
 * @Author: yiyang 630999015@qq.com
 * @Date: 2022-08-11 17:42:58
 * @LastEditors: yiyang 630999015@qq.com
 * @LastEditTime: 2022-08-17 16:37:16
 * @FilePath: /self/AwesomeProject/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @format
 */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);


import { Navigation } from "react-native-navigation";
import App from "./App";
import Home from "./screens/Home";


Navigation.registerComponent('welcomeScreen', () => App);
Navigation.registerComponent('Home', () => Home);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
     root: {
       stack: {
         children: [
           {
             component: {
               name: 'welcomeScreen'
             }
           },
           {
            component: {
                name: 'Home'
            }
           }
         ]
       },
      //  bottomTabs: {
      //   children: [
      //     {
      //       stack: {
      //         children: [
      //           {
      //             component: {
      //               name: 'welcomScreen'
      //             }
      //           }
      //         ]
      //       }
      //     },
      //     {
      //       stack: {
      //         children: [
      //           {
      //             component: {
      //               name: 'Home'
      //             }
      //           }
      //         ]
      //       }
      //     }
      //   ]
      //  }
     }
  });
});