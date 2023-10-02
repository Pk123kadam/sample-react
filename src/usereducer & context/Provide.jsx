import React, { useEffect, useReducer, useState } from 'react'
import { createContext } from 'react'
export const context = createContext()
import axios from 'axios'

export function Provide({ children }) {

    const initial_value = {
        todo: []
    }
    const reducer = (state = initial_value, action) => {
        switch (action.type) {
            case "GET":
                return {
                    ...state, todo: action.payload
                }
            case "DELETE":
                return {
                    ...state, todo: state.todo.filter((e) => e.id !== action.payload)
                }
            default:
                return state
        }
    }
    const [state, dispatch] = useReducer(reducer, initial_value)
    return (
        <context.Provider value={{ state, dispatch }}>
            {children}
        </context.Provider>

    )
}



