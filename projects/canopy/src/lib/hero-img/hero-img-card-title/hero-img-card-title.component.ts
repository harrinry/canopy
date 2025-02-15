import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewEncapsulation,
  Input,
} from '@angular/core';

import type { HeadingLevel } from '../../heading';

@Component({
  selector: 'lg-hero-img-card-title',
  templateUrl: './hero-img-card-title.component.html',
  styleUrls: ['./hero-img-card-title.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LgHeroImgCardTitleComponent {
  @HostBinding('class.lg-hero-img-card-title') class = true;

  @Input() headingLevel: HeadingLevel;
}
