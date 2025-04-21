import  { ComponentProps } from 'react'

type IForm = ComponentProps<"form"> 
function Form({children,className,...rest}:IForm) {
  return (
    <form className={className} {...rest}> {children}</form>
  )
}

export default Form