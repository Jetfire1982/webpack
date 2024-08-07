import {useState} from 'react';
import { Link, Outlet } from 'react-router-dom';
import classes from './App.module.scss';
import About from '@/pages/about/About';
import twitter from '@/assets/twitter.png'
import delicious from '@/assets/delicious.jpg'
import Instagram from '@/assets/instagram.svg'
import Burger from '@/assets/burger.svg'

import React from 'react';



function TODO(){
    TODO2();
}

function TODO2(){
    throw new Error()
}



export const  App = () => {
    const [count, setCount] = useState(0)

  

    const increment = () => {
        TODO();
        // setCount(prev => prev+1)
    }

    // if(__PLATFORM__ === 'desktop'){
    //     return <div>ISDESKTOPPLATFORM</div>
    // }

    // if(__PLATFORM__ === 'mobile'){
    //     return <div>ISMOBILEPLATFORM</div>
    // }

    // if(__ENV__ === 'development'){
    //     //addDevtools()
    // }


    return (
        <div data-testid={'App'}>
            <h1 data-testid={'Platform'}>PLATFORM={__PLATFORM__}</h1>
            <div>
                <img src={twitter} width="100" height="100" alt="" />
                <img src={delicious} width={50} height={50} alt="" />
            </div>
            <div>dddddd</div>
            <div>
                <Instagram  />
            </div>
            <div>
                <Burger fill={'green'} width={150} height={150} />
                <Burger className={classes.icon} width={150} height={150} />
                <Burger color={'green'} width={150} height={150} />
                <Burger color={'green'} width={150} height={150} />
               

            </div>
            <Link to={'/about'}>about</Link>
            <br />
            <Link to={'/shop'}>shop</Link>
            <h1 className={classes.value}>{count}</h1>
            <button className={classes.button} onClick={increment}><span>Hey</span>inc</button>
            <About/>
        </div>
    )
}