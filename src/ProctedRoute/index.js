import React from 'react'
import { useParams } from 'react-router-dom'
import ErrCmp from '../components/err'

const AdminAuth = ({children}) => {
    const {id} = useParams()
    if(id=="37473747"){
        return children
    }
    return <ErrCmp/>
}

export default AdminAuth