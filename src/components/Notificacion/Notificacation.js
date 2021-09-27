import React, { useState, useEffect, createContext, useContext } from 'react'
import NotificationContext from '../context/NotificationContext'

const Notification = () =>{
    const {notification} = useContext(NotificationContext)
    if(notification.message === '') {
        return null
    }
    return (
        <div>
            {console.log('hola11111')

            }
            notification.message
        </div> 
    )
}

export default Notification