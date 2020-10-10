import React from 'react'
import '../Content.scss'

import search from '../../../img/search.svg'
import eye from '../../../img/eye.svg'
import bell from '../../../img/bell.svg'
import open from '../../../img/open.svg'
import profile from '../../../img/profile.png'

const Header = () => {
    return (
        <header className="header">
            <h2 className="header_title">Мой профиль</h2>

            <div className="header_links">
              <a href="!#"><img src={search}/></a>
              <a href="!#"><img src={bell}/></a>
              <a href="!#"><img src={eye}/></a>
              <a href="!#"><img src={profile}/></a>
              <a href="!#"><img src={open}/></a>
            </div>
          </header>
    );
}

export default Header;