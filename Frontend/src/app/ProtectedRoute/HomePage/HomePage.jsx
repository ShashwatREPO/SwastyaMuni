import React from 'react'
import NavBar from './NavBar'
import LeafSvg from '../../../components/LeafSvg'
import ChatField from '../../../features/ChatSpace/components/ChatField'
import ChatSpace from '../../../features/ChatSpace/ChatSpace'

export default function HomePage() {
  return (
    <div className='w-screen h-screen flex flex-col   bg-backgroundGreen relative'>
        <LeafSvg />
        <NavBar />
        <ChatSpace />
    </div>
  )
}
