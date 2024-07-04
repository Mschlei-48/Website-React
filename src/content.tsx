import BrightFuture from "./bright";
import New from "./new";
import './content.css'

function Content(){
    return(
        <div className="outer-container">
            <div>
                <BrightFuture/>
            </div>
            <div>
                <New/>
            </div>
        </div>
    )
}

export default Content;