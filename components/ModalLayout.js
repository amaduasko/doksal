import "./ModalLayout.css"
import { Container } from "reactstrap"
const ModalLayout = ({ children, props }) => {
    return (
        <div className="ModalLayout">
            {children}
        </div>
    )
}

const ModalLayoutLeft = ({ children, props }) => {
    return (
        <div className="ModalLayoutLeft">
            {children}
        </div>
    )
}

const ModalLayoutRight = ({ children, props }) => {
    return (
        <div className="ModalLayoutRight">
            {children}
        </div>
    )
}

const ModalLayoutRightMini = ({ children, props }) => {
    return (
        <div className="ModalLayoutRightMini">
            {children}
        </div>
    )
}

const ModalLayoutLanding = ({ children, props }) => {
    return (
        <Container>
            <div className="ModalLayoutLanding">
                {children}
            </div>
        </Container>
    )
}
const ModalLayoutLandingText = ({ children, props }) => {
    return (
        <div className="ModalLayoutLandingText">
            {children}
        </div>
    )
}
const ModalLayoutLandingInput = ({ children, props }) => {
    return (
        <div className="ModalLayoutLandingInput">
            {children}
        </div>
    )
}
export default ModalLayout
export {
    ModalLayoutLeft,
    ModalLayoutRight,
    ModalLayoutRightMini,
    ModalLayoutLanding,
    ModalLayoutLandingText,
    ModalLayoutLandingInput
}