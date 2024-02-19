import React from 'react';
import { render, screen } from '@testing-library/react';
import Project from '../components/Projet';

jest.mock('../__mocks__/Project');


describe('Project Component', () => {
    test('renders project cards', () => {

   const CoverList = {
        kasa: `https://res.cloudinary.com/df1z0o9nt/image/upload/t_Final_Flash/Projet_Openclassroom/kasa.webp`,
    };
    
    const technologiesList = {
        html: `https://res.cloudinary.com/df1z0o9nt/image/upload/t_thumb/Projet_Openclassroom/html.jpg}`,
        css: `https://res.cloudinary.com/df1z0o9nt/image/upload/t_thumb/Projet_Openclassroom/css.jpg}`,
        sass: `https://res.cloudinary.com/df1z0o9nt/image/upload/t_thumb/Projet_Openclassroom/sass.jpg}`,
        js: `https://res.cloudinary.com/df1z0o9nt/image/upload/t_thumb/Projet_Openclassroom/js.jpg}`,
        nodejs: `https://res.cloudinary.com/df1z0o9nt/image/upload/t_thumb/Projet_Openclassroom/nodejs.jpg}`,
        mongodb: `https://res.cloudinary.com/df1z0o9nt/image/upload/t_thumb/Projet_Openclassroom/mongodb.jpg}`,
        mysql: `https://res.cloudinary.com/df1z0o9nt/image/upload/t_thumb/Projet_Openclassroom/mysql.jpg}`,
        reactjs: `https://res.cloudinary.com/df1z0o9nt/image/upload/t_thumb/Projet_Openclassroom/react.jpg}`,
        cloudinary: `https://res.cloudinary.com/df1z0o9nt/image/upload/t_thumb/Projet_Openclassroom/cloudinary.jpg}`,
        Github_pages: `https://res.cloudinary.com/df1z0o9nt/image/upload/t_thumb/Projet_Openclassroom/Github_pages.jpg}`,
      };
    
    const projectData = {
        name: 'Kasa',
        id: 1,
        cover: CoverList.kasa,
        description: "Front-End | Création du site d'une agence immobiliére de location.",
        techno: [technologiesList.html , technologiesList.sass , technologiesList.js , technologiesList.reactjs , technologiesList.Github_pages],
        link: "https://alex-der-coder.github.io/kasa/",
        repos : "https://github.com/Alex-Der-coder/kasa",
        contexte : "L’entreprise souhaite faire une refonte totale de leur site pour passer à une stack complète en JavaScript avec NodeJS côté Back-end et React côté Front-end."
      };
   
   // Render the Project component with test data
  render(<Project proj={projectData} />);

   // Check if card elements are rendered
  const projectLinkElement = screen.getByTestId("Titleprojet");
  const readMoreButtonElement = screen.getByTestId("readmore");

  // Make sure to adjust these checks based on the actual structure of your cards
  expect(projectLinkElement).toBeInTheDocument();
  expect(readMoreButtonElement).toBeInTheDocument();
    });
});