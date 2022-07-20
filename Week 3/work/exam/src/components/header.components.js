import Lottie from "lottie-react";
import Quiz from "../animation/Quiz.json"
const Header = () => {
    return(<>

    <div class="container cen">
  <div class="row">
    <div class="col">
      <Lottie animationData={Quiz}/>
    </div>
    <div class="col center">
    <p class="fs-1">Industrial Training Weekly Test</p>
    <p class="fs-3">Instruction</p>
    <p class="fs-6">
        <ul>
            <li>30 Marks</li>
            <li>MCQ Type</li>
            <li>Limitd Time</li>
        </ul>
    </p>
    <button class="btn btn-primary m-2" type="submit">Open Web-Dev test</button><br></br>
    <button class="btn btn-primary m-2" type="submit">Open App-Dev Test</button><br></br>
    </div>
  </div><br></br>
  <br></br>
  <br></br>
</div>
    
    </>)
}
export default Header;