import { useSelector } from "react-redux";
import "../Styles/Header.css";

function Header(){
    const state=useSelector((state)=>state);
    console.log("Header ",state.loggedin.Username)
    return (
        <div className="jumbotron p-2 mb-0 rounded-0 bg-transparent text-danger">
          <div className="row bg-info">
          <div  className="col-2"> <img src={'logon.png'} style={{width:"250px"}} className="float-left"/></div> 
          <div  className="col-8"><h4 className="heading text-center font-weight-bold mt-3"> Welcome to Farmer's E-MarketPlace </h4></div>
           
          <div className="col-2"> {state.loggedin.IsLoggedIn ?
            <>            
            {/* <h5 className="float-left">Role : {state.loggedin.Role}</h5> */}
            <h5 className="float-right">Welcome ! {state.loggedin.Username}</h5> </>:
            ''}
          </div>
            <div className="clearfix"></div>

            </div> 
        </div>
    )
}

export default Header;