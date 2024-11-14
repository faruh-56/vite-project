import { Button } from "../components/Button/Button"
import { Heading } from "../components/Heading/Headings"
import { Input } from "../components/Input/Input"

export const Registrationpage = () => {
    return (
        <>
            <Heading text='Registration Page'/>
            <form action="">
            <Input inputPlaceholder={'First Name'} inputType={'text'}/>
            <br />
            <Input inputPlaceholder={'Last Name'} inputType={'text'}/>
            <br/>
            <Input inputPlaceholder={'Email'} inputType={'text'}/>
            <br/>
            <Input inputPlaceholder={'Password'} inputType={'password'}/>
            <br/>
            <Button/>
            </form>
        </>
        
    )
}