import React, { useState } from 'react';

const Portfolio = ({ data }) => {
  const [activeTag, setActiveTag] = useState('All');

  const tags = ['All', 'Backend', 'FullStack', 'Cloud', 'DataScience', 'ML', 'AI', 'IoT'];

  const filteredProjects = activeTag === 'All' 
    ? data?.projects || [] 
    : (data?.projects || []).filter(project => project.tags && project.tags.includes(activeTag));

  const projects = filteredProjects.map(function(project){
    var projectImage = process.env.PUBLIC_URL + '/images/portfolio/' + project.image;
    return <div key={project.title} className="columns portfolio-item">
        <div className="item-wrap">
        <a href={project.url} title={project.title}>
            <img alt={project.title} src={projectImage} />
            <div className="overlay">
                <div className="portfolio-item-meta">
                <h5>{project.title}</h5>
                    <p>{project.category}</p>
                </div>
            </div>
            <div className="link-icon"><i className="fa fa-link"></i></div>
        </a>
        </div>
    </div>
  });

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>

          <div className="portfolio-filters" style={{ marginBottom: '30px', textAlign: 'center' }}>
            {tags.map(tag => (
              <button 
                key={tag}
                className={`filter-btn ${activeTag === tag ? 'active' : ''}`}
                onClick={() => setActiveTag(tag)}
                style={{ margin: '5px', padding: '10px 20px', cursor: 'pointer' }}
              >
                {tag}
              </button>
            ))}
          </div>

          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
            {projects}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
