import React from 'react'
import {useSelector ,useDispatch} from 'react-redux'
import { BuyCake } from './redux/CakeAction';

const HooksCakeContainer = () =>{
    const numberOfCakes = useSelector(state => state.numberOfCakes);
    const dispatch =useDispatch()
    return(
        <div>
            <h1>Number of cakes left : {numberOfCakes}</h1>
            <button onClick={state => dispatch(BuyCake())}>Buy Cake</button>
        </div>
    )
}

export default HooksCakeContainer;