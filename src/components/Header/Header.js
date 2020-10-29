import React from 'react'
import TopNav from './component/TopNav'
import TopHeader from './component/TopHeader'
import MidHeader from './component/MidHeader'

function Header(props) {
  
  return (
    <>
      <header className='headers'>
        <TopNav withInput={props.withInput}/>
        { props.midheader ? <TopHeader /> : null }
      </header>
      <MidHeader />
    </>
  )
}

export default Header
