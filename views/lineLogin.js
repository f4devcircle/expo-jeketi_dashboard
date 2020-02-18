import React from 'react';
import { WebView } from 'react-native-webview';

const name = '.mdMN03EtcLink01';

export default function LineLogin()  {
  const removeLineAppLogin = `document.onload = function() {
    let buttons = document.querySelectorAll(${name});
    buttons.forEach( button => { button.innerText === "Log-in with LINE app" ? button.innerText = '' : '' })
  }`
  let webview = null;

  setTimeout( () => {
    console.log('removing....')
    console.log(webview)
    webview.injectJavaScript(removeLineAppLogin);
  }, 3000);
    return (
      <WebView 
        ref={ref => (webview = ref)}
        source={{ uri: "" }} 
      />
    );
}