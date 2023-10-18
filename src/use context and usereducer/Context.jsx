import React, { useReducer } from 'react'
import { createContext } from 'react'
const context = createContext()
function Context({ children }) {
    const initial_values = {
        data: []
    }
    const reducer = (state = initial_values, action) => {
        switch (action.type) {
            case "GET":
                return { ...state, data: action.payload }
            case "UPDATE":
                console.log(action.payload)
                return {
                    ...state,
                    data: state.data.map((e) => {

                        if (e.id == action.payload.id) {
                            return {
                                ...e,
                                name: action.payload.name,
                                email: action.payload.email,
                                phone: action.payload.phone
                            }

                        }
                        return e
                    })
                }




            case "DELETE":
                return {
                    ...state,
                    data: state.data.filter((e) => e.id !== action.payload)
                }




            default:
                return state

        }
    }
    const [state, dispatch] = useReducer(reducer, initial_values)

    return (
        <div>
            <context.Provider value={{ state, dispatch }}>
                {children}

            </context.Provider>

        </div>
    )
}

export { Context, context }
