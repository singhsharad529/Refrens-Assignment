
import './characters.css'

/*
    - This will print all the characters with there information 
*/

export const Characters=()=>{
const data = [1,2,3,4,5,5,6,6,7];

    return(
        <>
        <div className="container characters-container">
        {
            data.map(num=>(
                <a className="card" href='#'>
            <img src="https://www.w3schools.com/w3images/team2.jpg" alt="John" style={{ width:"100%" }}/>
            <h1>John Doe</h1>
            <p className="title">CEO & Founder, Example</p>
            <p>Harvard University</p>
            <div style={{margin:"24px 0"}}>
                <a href="#"><i className="fa fa-dribbble"></i></a> 
                <a href="#"><i className="fa fa-twitter"></i></a>  
                <a href="#"><i className="fa fa-linkedin"></i></a>  
                <a href="#"><i className="fa fa-facebook"></i></a> 
            </div>
            <p><button>Contact</button></p>
            </a>
            ))
        }    
        </div>


        </>
    )
}