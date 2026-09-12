import { Component } from '@angular/core';

interface Craft {
  title: string;
  text: string;
}

@Component({
  selector: 'mj-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  readonly steps: Craft[] = [
    {
      title: 'Patrón y corte',
      text: 'Trazamos el patrón sobre la piel o la tela según la cabeza y el estilo de lucha de cada cliente.',
    },
    {
      title: 'Costura a mano',
      text: 'Cada costura se refuerza a mano en cuello y nuca, los puntos que más sufren en el ring.',
    },
    {
      title: 'Bordado y acabado',
      text: 'Bordamos el diseño, colocamos el listón o el cierre y revisamos el ajuste antes de entregarla.',
    },
  ];
}
