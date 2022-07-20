import Lottie from "lottie-react";
import rocket from "../animations/rocket.json";
import ReactTypingEffect from 'react-typing-effect';


const Section = () => {
    return(<>
  <div class="container">
  <div class="row">
    <div class="col">
      <Lottie animationData={rocket}/>
    </div>
    <div class="col center">
    <p class="fs-2">#super-fast</p>
    <p class="fs-1">Learn by doing in quick way as you think,</p>
    
    <ReactTypingEffect
        text={["Never let the odds keep you from doing what you know in your heart you must do. --H. Jackson Brown"]}
      />
    </div>
  </div>
</div>
    </>)
}

export default Section;