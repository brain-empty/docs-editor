import React, { useCallback } from "react";
import Quill from "quill"
import "quill/dist/quill.snow.css"

export default function Editor () {
    const wrapperRef = useCallback( wrapper => {
        if ( wrapper == null ) return 

        wrapper.innerHTML = ''

        const wrapperDiv = document.createElement("div")
        wrapper.append(wrapperDiv)
        new Quill(wrapperDiv, { theme : "snow" })
    })

    return <>
        <div id="container" ref={wrapperRef}></div>
    </>
}
