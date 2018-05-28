import { Feature } from '../../shared/feature.interface';

export const features: Feature[] = [{
  actor: 'Reclutador',
  hint: 'Si estas buscando personal, aqui tu podras',
  advantages:
    [{
      feature: 'Publicar tu oferta laboral o practica academica en la Universidad de Antioquia',
      icon: 'assets/icons/home/magnet.svg'
    },
      {
        feature: 'Administrar los aplicantes a tus ofertas laborales y academicas',
        icon: 'assets/icons/home/notes.svg'
      }]
  },
  {
    actor: 'Estudiantes y Egresados',
    hint: 'Si estan buscando una oportunidad laboral, aqui podran',
    advantages:
      [{
        feature: 'Aplicar a una oferta en cuestion de segundos',
        icon: 'assets/icons/home/send.svg'
      },
        {
          feature: 'Visualizar que ofertas tienen las empresas hacia el departamento de Ingenieria de Sistemas',
          icon: 'assets/icons/home/ebook.svg'
        }]
  }];
