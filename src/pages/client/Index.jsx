import Home from './Home'
import React from 'react'
import Layout from './Layout'
import { Routes , Route } from 'react-router-dom'
import Profile from './Profile'
import BattlePasses from "./Battlepasses"
import Skins from "./Skins"


function Client() {
  return (
    <>
        <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/profile" element={<Layout><Profile /></Layout>} />
      <Route path="/battlepasses" element={<Layout><BattlePasses /></Layout>}></Route>
      <Route path="/skins" element={<Layout><Skins /></Layout>}></Route>
    </Routes>
    </>
  )
}

export default Client