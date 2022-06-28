import './CSS/Contact.css';


function Contact(props){
    return(
        <div className="contact" id='contact'>
            <h2 className='contacthead'>Contact</h2>
            <h3 className="chead"><i class="fa fa-map-marker"></i> Location</h3>
            <p className="cheadans">{props.loc}</p>
            <h3 className="chead"><i class="fa fa-envelope"></i> Email</h3>
            <p className="cheadans">{props.email}</p>
            <h3 className="chead"><i class="fa fa-phone"></i> Call</h3>
            <p className="cheadans">{props.phone}</p>
            <h3 className="chead"><i class="fa fa-skype" aria-hidden="true"></i>
             Skype</h3>
            <p className="cheadans">{props.skype}</p>
            
        </div>
    )
}

export default Contact;
