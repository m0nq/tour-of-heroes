import { findLastMappingIndexBefore } from '@angular/compiler-cli/ngcc/src/sourcemaps/source_file';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Hero } from '../hero';
import { HeroComponent } from './hero.component';

describe('Hero Component (shallow tests)', () => {
  let fixture: ComponentFixture<HeroComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroComponent],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(HeroComponent);
  });

  it('should have the correct hero', () => {
    fixture.componentInstance.hero = {
      id: 1,
      name: 'SuperDude',
      strength: 3
    } as Hero;

    expect(fixture.componentInstance.hero.name).toEqual('SuperDude');
  });

  it('should render the hero name and anchor tag', () => {
    fixture.componentInstance.hero = {
      id: 1,
      name: 'SuperDude',
      strength: 3
    } as Hero;
    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css('a')).nativeElement.textContent).toContain('SuperDude');

    expect(fixture.nativeElement.querySelector('a').textContent).toContain('SuperDude');
  });
});
