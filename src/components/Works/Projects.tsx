import PlayerPager from '@assets/projects/playerpager.png';
import Rewardr from '@assets/projects/rewardr.png';
import Survey from '@assets/projects/survey.png';
import Plans from '@assets/projects/plans.png';
import { Project, ProjectProps } from './Project';

const projects: ProjectProps[] = [
  {
    name: 'Plans',
    description: 'Plataforma web responsive para gestionar documentos, directorios y contactos.',
    link: '',
    src: Plans,
    tags: [1, 3, 5, 6, 7, 12, 13, 14],
  },
  {
    name: 'Rewardr/Cheque Puntos',
    description: 'Aplicación móvil que le permite a los usuarios ver todas sus transacciones y canjear sus puntos por beneficios exclusivos.',
    link: 'https://consultr.net/success-stories/chequepuntos/',
    src: Rewardr,
    tags: [2, 3, 5, 7, 8, 9],
  },
  {
    name: 'PlayerPager',
    description: 'Una red social para atletas de secundaria donde cada jugador muestra su talento e interactuar con entrenadores y buscadores de talento.',
    link: 'https://consultr.net/success-stories/player-pager/',
    src: PlayerPager,
    tags: [2, 4, 5, 7, 8, 9],
  },
  {
    name: 'Survey App',
    description: 'Aplicación de inspección de sitio que ayuda a sus usuarios a verificar y realizar un seguimiento de la creación de carteles bancarios.',
    link: 'https://consultr.net/success-stories/survey_app/',
    src: Survey,
    tags: [2, 4, 5, 7, 9],
  }
];

export const Projects = (): JSX.Element => {
  const renderProjects = projects.map((project, index) => (
    <Project
      even={(index % 2) === 0}
      item={project}
      key={project.name}
    />
  ));

  return (
    <div>
      { renderProjects }
    </div>
  );
};
