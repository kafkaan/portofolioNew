import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Experience {
  title: string;
  company: string;
  location: string;
  date: string;
  description: string;
}

interface Education {
  title: string;
  school: string;
  location: string;
  date: string;
  description: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      title: 'Software Development Internship',
      company: 'Guarani',
      location: 'Bordeaux',
      date: 'January 2024 - Present',
      description:
        'Designing and implementing comprehensive software solutions, working closely with development teams to ensure the smooth operation and performance of applications.',
    },
    {
      title: 'Observation Internship',
      company: 'CAIRN',
      location: 'Bordeaux',
      date: '2017',
      description:
        'At this laser and optics research laboratory, I was able to observe the various stages of scientific research and the working methods of researchers.',
    },
  ];

  educations: Education[] = [
    {
      title: 'Msc Pro Cybersécurité and Pre-MSC',
      school: 'Epitech',
      location: 'Bordeaux',
      date: '2023 - Present',
      description: 'At Epitech, I am currently studying cybersecurity and fullstack development. I have learned web and mobile development, server management, Docker, and DevOps.',
    },
    {
      title: 'Licence d’informatique',
      school: 'Université de Bordeaux',
      location: 'Bordeaux',
      date: '2021 - 2023',
      description: 'At the University of Bordeaux, I studied computer science. I learned C, Java, CMake, Y86, and the basics of computer architecture.',
    },
  ];

  navigationChoice: string = 'experience';

  setNavigationChoice(choice: string) {
    this.navigationChoice = choice;
  }

  getExperienceList() {
    return this.experiences;
  }

  getEducationList() {
    return this.educations;
  }

  getListFromChoice() {
    if (this.navigationChoice === 'experience') {
      console.log('experience');
      return this.getExperienceList();
    } else if (this.navigationChoice === 'education') {
      console.log('education');
      return this.getEducationList();
    } else {
      return [];
    }
  }
}
