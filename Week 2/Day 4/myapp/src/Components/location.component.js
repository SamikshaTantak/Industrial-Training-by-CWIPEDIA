import { Parallax } from 'react-parallax';
import bg from '../Assets/loc.png'
const Location= () => {
    return(
        <>
        <Parallax blur={10}  bgImage={bg} strength={200}>
        <p className="c-txt display-6 d-flex justify-content-center"><b>No need to Go anywhere</b></p>
        <p className="c-txt display-6 d-flex justify-content-center">Learn from your Home with flexible hours</p>
    
        </Parallax>
        </>
    )
}
export default Location;