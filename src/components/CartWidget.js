import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'

export const CarWidget = () => {
    return (
        <>
        <a className="cartIcon" href="#cart"><FontAwesomeIcon icon={faShoppingCart} /></a>
        </>
    );
}