const AboutMe = () => {

    const clickResume = () =>{
        window.open("https://docs.google.com/document/d/1gRVve5d1L8c3Q4VoGF0gEW9HATDMW_gO/edit?usp=sharing&ouid=111156177709429861406&rtpof=true&sd=true", "_blank")
    }
    return ( 
        <section id="about">
           

        <div className="card">
      
    <h2 className="card-title">Hello! My name is Vanna Lee and welcome to my portfolio</h2>
        <p className="card-text">I'm currently a Computer Science student at Hunter College that is learning 
            more JavaScript and C++ right now</p>
    </div>
<br></br>
    <button className="resumeButton"
    onClick={clickResume}
    >View Resume</button>
        </section>
     );
}
 
export default AboutMe;