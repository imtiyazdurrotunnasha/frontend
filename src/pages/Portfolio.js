import { useEffect, useState } from 'react';

function Portfolio() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/projects')
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div>
      <h2 className="mb-4">Portofolio Proyek</h2>
      <div className="row">
        {projects.map((project) => (
          <div className="col-md-4 mb-3" key={project.id}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
