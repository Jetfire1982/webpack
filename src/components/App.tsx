import {useState} from 'react';
import { Link, Outlet } from 'react-router-dom';
import classes from './App.module.scss';
import About from '@/pages/about/About';
import twitter from '@/assets/twitter.png'
import delicious from '@/assets/delicious.jpg'
import Instagram from '@/assets/instagram.svg'
import Burger from '@/assets/burger.svg'


export const  App = () => {
    const [count, setCount] = useState(0)

    const increment = () => setCount(prev => prev+1)



    return (
        <div>
            <div>
                <img src={twitter} width="100" height="100" alt="" />
                <img src={delicious} width={50} height={50} alt="" />
            </div>
            <div>
                <Instagram  />
            </div>
            <div>
                <Burger fill={'red'} width={150} height={150} />
                <Burger className={classes.icon} width={150} height={150} />
                <Burger color={'red'} width={150} height={150} />
               

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