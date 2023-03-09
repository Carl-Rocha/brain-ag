import React from "react"
import { Routes, Route } from 'react-router-dom';
import Form from './components/form'
import Producers from './components/producers'
import Dashboard from './components/dashboard'



const AppRoutes = () => {
    return (
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/producers" element={<Producers />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      
    )
}

export default AppRoutes
