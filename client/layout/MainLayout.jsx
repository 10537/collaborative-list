import React from 'react';

export const MainLayout = ({content}) => (
        <div className="main-layout">
          <header id="navigation" className="navbar-fixed-top navbar">
              <div className="container">
                  <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                          <span className="sr-only">Toggle navigation</span>
                          <i className="fa fa-bars fa-2x"></i>
                      </button>
                      <a className="navbar-brand" href="#body">
              <h1 id="logo">
                <img src="img/logo.png" alt="Bittick"/>
              </h1>
            </a>
                  </div>
          <nav className="collapse navbar-collapse navbar-right" role="navigation">
                      <ul id="nav" className="nav navbar-nav">
                          <li className="current"><a href="/">Home</a></li>
                          <li><a href="#features">Pricing</a></li>
                          <li><a href="#team">Team</a></li>
                          <li><a href="#contact">Contact</a></li>
                          <li><a href="/login">Login</a></li>
                      </ul>
                  </nav>
              </div>
          </header>
        <main>
            { content }
        </main>
      </div>
)
