import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HeroComponent } from "./hero.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { By } from "@angular/platform-browser";

describe("HeroComponent (shalllow test)", () => {
  let fixture: ComponentFixture<HeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroComponent],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(HeroComponent);
  });

  it("should have the correct hero", () => {
    fixture.componentInstance.hero = { id: 1, name: "SuperDude", strength: 3 };
    fixture.detectChanges();

    expect(fixture.componentInstance.hero.name).toEqual("SuperDude");
  });

  it("should render the hero name in an anchor tag", () => {
    fixture.componentInstance.hero = { id: 1, name: "SuperDude", strength: 3 };
    fixture.detectChanges();

    //let deA - debug Anchor tag
    let deA = fixture.debugElement.query(By.css("a"));
    expect(deA.nativeElement.textContent).toContain("SuperDude");

    
    // //tas pats tik kitu budu
    // expect(
    //   fixture.nativeElement
    //     .querySelector("a")
    //     .textContent()
    //     .toContain("SuperDude")
    // );
  });
});
