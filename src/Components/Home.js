import './CSS/Home.css';


function Home(props){
    return(
       <div className='h1'>
         
        <div className="home" id='home'>

            <h2 className='name1'>{props.name}</h2><br></br>
            <h3 className='prot'>This is my protfolio!</h3>
        </div>
        </div>
    )
}

export default Home;