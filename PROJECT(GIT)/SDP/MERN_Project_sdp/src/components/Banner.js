import React from 'react'

const Banner = () => {
  return (
    <section className='container mx-auto px-8'>
        <a href="https://t.me/RabitaBot">
        <img src={require('../assets/images/banner.png')} alt="Bannerimg" />
        </a>
    </section>
  )
}

export default Banner