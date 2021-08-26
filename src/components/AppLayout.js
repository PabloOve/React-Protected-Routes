import React from "react"
import auth from "./auth"

export const AppLayout = props => {
    return(
        <div>
            <h1>App Layout</h1>
            <button
            onClick={() => {
                props.history.push("/");
            }}>
                Logout
            </button>
        </div>
    )
}