import React from 'react'
import './Content.scss'

import Header from './Header/Header'
import Profile from '../Content/Profile/Profile'
import Doctors from '../Content/Doctors/Doctors'
import { Route } from 'react-router-dom'
import Reception from './Profile/Reception/Reception'

const Content = () => {
    return (
        <div className="row-2">
          <Header/>
          <Route path="/profile" component={Profile}/>
          <Route path="/doctors" component={Doctors}/>
          <Route path="/reception" component={Reception}/>
        </div>
    );
}

export default Content;