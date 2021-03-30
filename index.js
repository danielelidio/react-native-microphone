// main index.js

import { NativeModules, NativeEventEmitter } from 'react-native';

const { ReactNativeMicrophone } = NativeModules;
const emitter = new NativeEventEmitter(ReactNativeMicrophone);

export default {
    init: options => ReactNativeMicrophone.init(options),
    start: () => ReactNativeMicrophone.start(),
    pause: () => ReactNativeMicrophone.pause(),
    stop: () => ReactNativeMicrophone.stop(),
    addListener: listener => emitter.addListener('audioData', listener),
};
