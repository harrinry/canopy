import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgHeroImgComponent } from './hero-img.component';

describe('LgHeroImgComponent', () => {
  let component: LgHeroImgComponent;
  let fixture: ComponentFixture<LgHeroImgComponent>;
  let debugElement: DebugElement;
  let componentElement: HTMLElement;

  beforeEach(() => {
    fixture = TestBed.createComponent(LgHeroImgComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    componentElement = debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the default class', () => {
    expect(componentElement.getAttribute('class')).toContain('lg-hero-img');
  });

  describe('when the overlap is set to -2', () => {
    beforeEach(() => {
      component.overlap = -2;
      fixture.detectChanges();
      fixture.detectChanges();
    });

    it('should set the margin-bottom style to 2rem', () => {
      expect(componentElement.style['margin-bottom']).toEqual('2rem');
    });

    it('should not set the padding-bottom', () => {
      expect(componentElement.style['padding-bottom']).toEqual('');
    });
  });

  describe('when the overlap is set to 10', () => {
    beforeEach(() => {
      component.overlap = 10;
      fixture.detectChanges();
    });

    it('should set the margin-bottom style to -10rem', () => {
      expect(componentElement.style['margin-bottom']).toEqual('-10rem');
    });

    it('should set the padding-bottom style to 10rem', () => {
      expect(componentElement.style['padding-bottom']).toEqual('10rem');
    });
  });

  describe('when the overlap is set to null', () => {
    beforeEach(() => {
      component.overlap = null;
      fixture.detectChanges();
    });

    it('should not set the margin-bottom style', () => {
      expect(componentElement.style['margin-bottom']).toEqual('');
    });

    it('should not set the padding-bottom style', () => {
      expect(componentElement.style['padding-bottom']).toEqual('');
    });
  });

  describe('when the overlap is set to undefined', () => {
    beforeEach(() => {
      component.overlap = undefined;
      fixture.detectChanges();
    });

    it('should not set the margin-bottom', () => {
      expect(componentElement.style['margin-bottom']).toEqual('');
    });

    it('should not set the padding-bottom', () => {
      expect(componentElement.style['padding-bottom']).toEqual('');
    });
  });

  it('should set correct background', () => {
    component.imageUrl = 'test';
    fixture.detectChanges();
    expect(componentElement.style.backgroundImage).toContain(`url("test")`);
  });
});
