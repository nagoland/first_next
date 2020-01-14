import { createStore, applyMiddleware } from "redux"
import thunkMiddleware from "redux-thunk"
// import firebase from "firebase"

// var config = {
//     apiKey: "AIzaSyASNa_-ZdWSq4yiXonosp_04CPUO1vjGeg",
//     authDomain: "nagoya-react.firebaseapp.com",
//     databaseURL: "https://nagoya-react.firebaseio.com",
//     projectId: "nagoya-react",
//     storageBucket: "nagoya-react.appspot.com",
//     messagingSenderId: "234139498249",
//     appId: "1:234139498249:web:d4b3abad20aa11abeb05d8",
//     measurementId: "G-3V81V2R9NF"
// };

// var fireapp
// try {
//     firebase.initializeApp(config)
// }catch(error){
//     console.log(error.message)
// }
// export dafault fireapp
const initial = {
    message: "START",
    data: [],
    number: [],
    result: 0
}
function calcReducer(state = initial, action) {
    switch(action.type) {
        case "ENTER":
            let data2 = state.data.slice()
            let s = action.value 
            data2.unshift(s)
            let num = s.replace(/[^0-9]/g,"")
            let number2 = state.number.slice()
            number2.unshift(num)
            let result = (state.result * 1) + (num * 1)
            return {
                message: "ENTER",
                data: data2,
                number: number2,
                result: result
            }

        case "RESET":
            return {
                message: "RESET",
                data: [],
                number: [],
                result: 0
            }

            default:
                return state
    }
}

export function initStore(state = initial) {
    return createStore(calcReducer, state,
        applyMiddleware(thunkMiddleware))
}
// function counterReducer (state = initial, action) {
//     switch(action.type) {
//         case "INCREMENT":
//             return {
//                 message: "INCREMENT",
//                 count: state.count + 1
//             }
//         case "DECREMENT":
//             return {
//                 message: "DECREMENT",
//                 count: state.count - 1
//             }
//         case "RESET":
//             return {
//                 message: "RESET",
//                 count: initial.count
//             }
//         default:
//             return state
//     }
// }

// export function initStore(state = initial) {
//     return createStore(counterReducer, state,
//         applyMiddleware(thunkMiddleware))
// }