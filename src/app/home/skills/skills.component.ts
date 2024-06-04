import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';

interface Skill {
  title: string;
  description: string;
  image: string;
  link: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  faCaretLeft = faCaretLeft;
  faCaretRight = faCaretRight;

  skills: Skill[] = [
    {
      title: 'Frontend',
      description: 'HTML, CSS, JavaScript, TypeScript, Angular, React, Vue',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/280px-C_Programming_Language.svg.png',
      link: '#',
    },
    {
      title: 'Backend',
      description: 'Node.js, Express, NestJS, PHP, Symfony, Laravel, Java, Spring',
      image:
        'https://www.pngall.com/wp-content/uploads/5/Linux-PNG-Image-File.png',
      link: '#',
    },
    {
      title: 'Cybersecurity',
      description: 'Kali Linux, Metasploit, Burp Suite, Wireshark, Nmap',
      image:
        'https://seela.io/wp-content/uploads/2022/11/nmap-logo-256x256-1.png',
      link: '#',
    },
    {
      title: 'Cloud',
      description: 'AWS, GCP, Azure, Docker, Kubernetes, Terraform, Ansible',
      image:
        'https://avatars.githubusercontent.com/u/46634674?v=4',
      link: '#',
    },
    

  ];

  indexSkill = 0;

  nextSkill() {
    this.indexSkill = (this.indexSkill + 1) % this.skills.length;
  }

  prevSkill() {
    this.indexSkill =
      (this.indexSkill - 1 + this.skills.length) % this.skills.length;
  }

  getSkill() {
    return this.skills[this.indexSkill];
  }

  getSkillImage() {
    return this.getSkill().image;
  }

  getSkillTitle() {
    return this.getSkill().title;
  }
}
