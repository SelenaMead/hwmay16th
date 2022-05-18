import React from 'react'
import { Home } from './views/home';
import { Profile } from './views/profile';
import { Route, Routes, Link } from 'react-router-dom';
import { Contact } from './views/contact';


export const App = () => {

  

  return (
    <>
      <header>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">Navbar</Link>
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="profile">Profile</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
      </header>

      <main className='container mt-4'>
        <Routes>
          <Route exact path='/' element={ <Home /> } />
          <Route exact path='/contact' element={ <Contact /> } />
          <Route exact path='/profile' element={ <Profile /> } />
        </Routes>
        {/* <Home /> */}
        {/* <Profile /> */}
      </main>

      <footer>

      </footer>
    </>
  )
}