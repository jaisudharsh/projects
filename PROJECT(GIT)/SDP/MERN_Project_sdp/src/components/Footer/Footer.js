import React from 'react'
import FooterMenu from './FooterMenu'
import FooterContacts from './FooterContacts'

const Footer = () => {
  return (
    <footer className='container mx-auto mt-16 px-8'>
        <FooterMenu></FooterMenu>
        <FooterContacts></FooterContacts>
    </footer>
  )
}

export default Footer