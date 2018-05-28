import { Feature } from '../../shared/feature.interface';

export const features: Feature[] = [{
  actor: 'Reclutador',
  hint: 'Si estás buscando personal, aqui tu podras',
  url: '/registro/empresas',
  advantages:
    [{
      feature: 'Publicar tu oferta laboral o práctica académica en la Universidad de Antioquia',
      icon: 'assets/icons/home/magnet.svg'
    },
    {
      feature: 'Administrar los aplicantes a tus ofertas laborales y académicas',
      icon: 'assets/icons/home/notes.svg'
    }]
  },
  {
    actor: 'Estudiantes y Egresados',
    hint: 'Si están buscando una oportunidad laboral, aqui podran',
    url: '/registro/candidatos',
    advantages:
      [{
        feature: 'Aplicar a una oferta en cuestión de segundos',
        icon: 'assets/icons/home/send.svg'
      },
        {
          feature: 'Visualizar que ofertas tienen las empresas hacia el departamento de Ingeniería de Sistemas',
          icon: 'assets/icons/home/ebook.svg'
        }]
  }];
