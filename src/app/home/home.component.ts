import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { AboutMeComponent } from './about-me/about-me.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,AboutMeComponent,MyProjectsComponent,SkillsComponent,ExperienceComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements AfterViewInit {
  

  @ViewChild('textElement') textElement!: ElementRef;
  @ViewChild('blinkElement') blinkElement!: ElementRef;

  @Input() wordArray: string[] = [
    'Software Engineer',
    'Cyber Security Enthusiast',
    'Full-Stack Developer',
  ];

  @Input() typingSpeedMilliseconds = 200;
  @Input() deleteSpeedMilliseconds = 200;

  private i = 0;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.typingEffect();
  }

  private typingEffect(): void {
    const word = this.wordArray[this.i].split('');
    const loopTyping = () => {
      if (word.length > 0) {
        this.textElement.nativeElement.innerHTML += word.shift();
      } else {
        this.deletingEffect();
        return;
      }
      setTimeout(loopTyping, this.typingSpeedMilliseconds);
    };
    loopTyping();
  }

  private deletingEffect(): void {
    const word = this.wordArray[this.i].split('');
    const loopDeleting = () => {
      if (word.length > 0) {
        word.pop();
        this.textElement.nativeElement.innerHTML = word.join('');
      } else {
        this.i = this.wordArray.length > this.i + 1 ? ++this.i : 0;

        this.typingEffect();
        return false;
      }
      setTimeout(loopDeleting, this.deleteSpeedMilliseconds);
      return; // Ajout de cette ligne
    };
    loopDeleting();
  }

  
}
