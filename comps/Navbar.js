// import { Button, Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import React from 'react'

import { Navbar } from 'responsive-navbar-react'
import 'responsive-navbar-react/dist/index.css'

const Navbars = () => {
    const props = {
        items: [
          {
            text: 'Home',
            link: '/#home'
          },
          {
            text: 'About',
            link: '#about'
          },
          {
            text: 'Menu',
            link: '#menu'
          },
          {
            text: 'Franchise',
            link: '#franchise'
          },
          {
            text: 'Contact us',
            link: '#contact'
          }
        ],
        logo: {
          text: 'Seoul Sahara'
        },
        style: {
          barStyles: {
            background: '#283595'
          },
          sidebarStyles: {
            background: '#283595',
            buttonColor: 'white'
          }
        }
      }
      return <Navbar {...props} />
}
 
export default Navbars;