const Projects = () => {
    return (  
        <section id="projects">
            <h2 className="project-title">Projects</h2>
        <div className="theProjects">


            <div className="project-card card">
             <a href="https://food-map-stack.onrender.com/" target="_blank">  <h3>Food Map Project</h3></a> 
                <div className="project-content">
                <img src="/food-mappic.png" className="project-image"></img>
                <p>This is an app where you can view iconic or important foods in the US. By clicking on either the food from the list or marker on the map you can learn a little bit of information on it as well as where the states are on the map. Dishes may take a moment to load. Made with help from Copilot.</p>
                </div>
                </div>
            

          
            <div className="project-card card">
                <h3>Project 2</h3>
                <div className="project-content">
                <img src="/white.png" className="project-image"></img>
                <p>No project yet</p>
                </div>
                </div>
          

           
            <div className="project-card card">
                <h3>Project 3</h3>
                 <div className="project-content">
                    <img src="/white.png" className="project-image"></img>
                <p>No project yet</p>
                </div>

            </div>


            </div>
      


        </section>
    );
}
 
export default Projects; 
