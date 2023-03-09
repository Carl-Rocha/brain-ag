import React from "react"
import { Routes, Route } from 'react-router-dom';
import Form from './components/form'
import Producers from './components/producers'


const AppRoutes = () => {
    return (
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/producers" element={<Producers />} />
        </Routes>
      
    )
}

export default AppRoutes
