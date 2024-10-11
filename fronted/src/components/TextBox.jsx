import React from 'react'

export default function TextBox(props) {
    let className = props.clas
    let title = props.title
    let text = props.text
  return (
    <div className={className}>
        {title!=null? <h1>{title}</h1>:null}
        {text.map((text,index)=>{
            return(
                <p key={index}>{text} </p>
            )
        })}
    </div>
  )
}
