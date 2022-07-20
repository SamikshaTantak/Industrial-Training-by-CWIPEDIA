import Lottie from "lottie-react";
import anim from "../animations/anim.json"
const Header = () => {
    return(<>

    <div class="container">
  <div class="row">
    <div class="col">
      <Lottie animationData={anim}/>
    </div>
    <div class="col center">
    <p class="fs-1">Industrial Training by CWIPEDIA</p>
    <p class="fs-6">Empowering Diploma student comunity by delivering valueble resource an training</p>
    <button class="btn btn-primary m-2" type="submit">#Explore</button>
    <button class="btn btn-primary m-2" type="submit">Register here</button>
    </div>
  </div>
</div>
    
    </>)
}
export default Header;
