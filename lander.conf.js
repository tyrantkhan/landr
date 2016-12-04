/* eslint-disable */
import React from 'react'
const features = [
  {
    title: 'feature A',
    lead: 'New stuff'
  },
  {
    title: 'feature B',
    lead: 'Old stuff'
  }
]

const navLinks = [
  {
    text: 'Chat on gitter',
    href: 'https://gitter.im/resin-io/etcher'
  },
  {
    text: 'Repository',
    href: 'https://github.com/resin-io/etcher'
  }
]

// // grab the handlebar templates
import Navbar from 'lander/navbar'
import Footer from 'lander/footer'
import logo from 'www/images/logo.png'
// define some globals
const locals = {
  sitename: "Etcher",
  siteurl: "http://etcher.io",
  logo: logo,
  title: "etcher",
  lead: "Flash OS images to SD cards & USB drives, safely and easily."
}

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Footer />
    </div>
  );
}

export { Layout, locals }
