import React, { useState, useRef,} from 'react';
import { projectsList } from "../datas/projectsList";
import Project from './Projet';
import ReactPaginate from 'react-paginate';

const Techno= ({ projects }) => {
  const [selectedTechno, setSelectedTechno] = useState('');
  const sectionRef = useRef(null);

  const projectsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const startIndex = currentPage * projectsPerPage;
  const endIndex = (currentPage + 1) * projectsPerPage;
  const currentProjects = projects.slice(startIndex, endIndex);

  // Extract all technologies from the list of projects
  const allTechnologies = Array.from(
    new Set(
      projectsList.reduce((acc, project) => {
        return [...acc, ...project.techno];
      }, [])
    )


    
  );

  return (
    <section className="projectsSection" id="projects" ref={sectionRef}>
      <div className="sectionTitle">
        <h2>Mes Projets</h2>
      </div>
      <div className="filterTechno">
        <label htmlFor="technoFilter">Filtrer par technologie :</label>
        <div className="technoButtons">
        <button
          onClick={() => setSelectedTechno('')}
          className={selectedTechno === '' ? 'active' : 'not_active'}
        >
          All
        </button>
        {allTechnologies.map((tech, index) => (
          <button
            key={index}
            onClick={() => setSelectedTechno(tech)}
            className={selectedTechno === tech ? 'active' : 'not_active' }
          >
            {tech.split('/').pop().split('.')[0]}
          </button>
        ))}
      </div>
    </div>
     <div className="projectList">
        {currentProjects
          .filter((proj) => (selectedTechno ? proj.techno.includes(selectedTechno) : true))
          .map((proj) => (
            <Project key={proj.id} proj={proj} />
          ))}

<ReactPaginate
        previousLabel={'Précédent'}
        nextLabel={'Suivant'}
        breakLabel={'...'}
        pageCount={Math.ceil(projects.length / projectsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={'pagination'}
        activeClassName={'active-pagination'}
      />
      </div>
     
    </section>
  );
};

export default Techno;
