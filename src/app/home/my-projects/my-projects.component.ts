import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

interface ProjectContainer {
  [key: string]: Project[];
}

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss',
})
export class MyProjectsComponent {
  projectContainer: ProjectContainer = {
    Frontend: [
      {
        title: 'Trello Clone',
        description:
          "Application mobile de gestion de projet se synchronisant avec l'API Trello",
        image:
          'https://www.koweb.fr/user/pages/07.outils-pour-collaborer/02.trello/trello.png?g-b7590ccb',
        link: '#',
      },
      {
        title: 'Peak Form',
        description:
          'Application innovante pour coachs sportifs avec des fonctionnalités avancées pour gérer les entraînements, les clients et les paiements.',
        image: '../../../assets/peak.jpg',
        link: '#',
      },
    ],
    Backend: [
      {
        title: 'Internet Relay Chat',
        description:
          "création d'applications web full-stack et  gestion de connexions simultanées avec une optimisation des performances.",
        image:
          'https://www.taskade.com/blog/wp-content/uploads/2020/06/taskade-irc-chat.gif',
        link: '#',
      },
      {
        title: 'E-commerce',
        description: 'Projet de site e-commerce avec gestion de panier et paiement en ligne.Avec PHP symfony',
        image: 'https://leszebresnomades.fr/wp-content/uploads/2020/07/tof-ecommerce.jpg',
        link: '#',
      },
    ],
    Cybersecurity: [
      {
        title: 'HackTheBox',
        description: 'HackTheBox is a free online platform that allows you to test your penetration testing skills.I have done some challenges and machines and paths.',
        image: 'https://yt3.googleusercontent.com/ytc/AIdro_mrc5-jAD_jHtunQQVnSJgGkDNXbKfVAk2RXcsaBhTuHsQ=s900-c-k-c0x00ffffff-no-rj',
        link: '#',
      },
      {
        title: 'Root me',
        description: 'Root me is a platform for everyone to test and improve knowledge in computer security and hacking.I have done some challenges',
        image: 'https://www.root-me.org/IMG/logo/siteon0.svg?1637496509',
        link: '#',
      },
    ],
  };

  projectNavigationChoice: string = 'Frontend';
  projectChoiced: Project | null =
    this.projectContainer[this.projectNavigationChoice][0] || null;

  changeProjectNavigationChoice(choice: string): void {
    this.projectNavigationChoice = choice;
  }

  getProjects(): Project[] {
    return this.projectContainer[this.projectNavigationChoice];
  }

  choiceProject(projectName: string): void {
    this.projectChoiced =
      this.projectContainer[this.projectNavigationChoice].find(
        (project) => project.title === projectName
      ) || null;
  }
}
