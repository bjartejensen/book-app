import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookForewordComponent } from './book-foreword.component';

describe(BookForewordComponent.name, () => {
  beforeEach(() => {
    cy.mount(BookForewordComponent, {
      imports: [MatIconModule, BrowserAnimationsModule],
      componentProperties: {
        bookForeword: {
          header: 'Foreword and Dedication (by David Wengrow)',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe distinctio illum tempora iusto nam, similique modi et ab impedit a dignissimos reiciendis. Eos quaerat at nam, cupiditate eveniet repellendus minima quasi laborum, recusandae laudantium deserunt voluptatem placeat ut aut distinctio veniam, id sapiente adipisci doloribus! Dolorem nulla dolore illum! Doloremque distinctio itaque eligendi nobis at inventore, fugit impedit eos illo assumenda suscipit vitae aliquam similique quibusdam illum delectus error ipsa deserunt sequi voluptatibus rerum accusamus quaerat soluta. Architecto nesciunt ab provident itaque laudantium aspernatur quis repellendus maxime possimus quibusdam illum inventore modi facilis obcaecati magnam eius, mollitia optio! Doloremque exercitationem molestias asperiores rem. Ex unde pariatur ipsum rem odio nesciunt aperiam nam nisi magni recusandae velit officiis eaque temporibus quibusdam veniam facere dolore expedita eos, suscipit fuga est iste veritatis accusantium. Cumque aliquid architecto similique explicabo quia! Inventore voluptatem dolorem quas odio. Illo nobis ipsam consequatur dolorem! Quas numquam quo iure perferendis voluptatem fuga delectus aliquid doloribus voluptates accusantium vitae, molestias suscipit deleniti eligendi incidunt quia a corrupti quaerat odit ipsam ut hic. Voluptatibus ipsum perferendis laboriosam ut, aliquam quod aperiam dolore quo est omnis corrupti alias quas commodi delectus vero inventore quasi? Eum sit, quam a voluptate consectetur corrupti ullam quae consequatur fuga omnis animi nulla. Adipisci quos libero recusandae, corporis consequatur error voluptates provident placeat vitae mollitia quas vero est, nesciunt ab quo consectetur! Sed, natus, sapiente dignissimos voluptatibus omnis voluptates nam fuga obcaecati alias soluta quos ipsa dicta delectus laborum, maiores dolorem ex voluptate. Ipsam aliquid necessitatibus possimus eos, minus fugiat officiis iusto explicabo quis quia recusandae non porro at sint architecto nisi in ut corporis velit ducimus perferendis, praesentium tenetur. Quia aperiam rerum ipsa odit provident libero et quasi voluptatum veniam ducimus vel non quae, velit perferendis ex ab iste vero quidem expedita porro distinctio. Tenetur quaerat voluptatem doloribus quasi neque nulla animi sint odit voluptates quos nostrum accusantium suscipit exercitationem corrupti commodi nobis iste minus natus, eos maxime aliquid distinctio consequatur aspernatur. Quasi aspernatur quidem, debitis praesentium nostrum amet ratione architecto, non facere cupiditate iure. Officiis sed mollitia dolore, similique nam earum doloribus ab aperiam impedit vitae at voluptatem eligendi incidunt? Ad laboriosam impedit modi totam velit voluptates, esse dolores quo corrupti fuga eaque, aliquid pariatur neque molestias architecto labore. Dolores in explicabo inventore nam alias facere asperiores accusantium fuga nisi, consequatur nostrum, praesentium fugit eos, enim atque? Neque, repellendus quia omnis voluptatem vero modi veritatis non recusandae laboriosam, at laudantium! Eum corrupti dolore nobis vero quibusdam eius quos, similique repellendus facilis? Assumenda molestias blanditiis ex! Ratione eos alias dolore eius. Repellat dolor dolorum maiores architecto! Dignissimos, animi et harum consequuntur nobis optio suscipit est earum accusamus, nulla laboriosam illo repellendus. Quasi ut enim magni recusandae aut, vero repellat rem beatae similique obcaecati nulla impedit veritatis ex inventore suscipit nisi assumenda consectetur a cupiditate, saepe ducimus officiis deserunt quis! Deleniti aliquid iure doloremque, animi ipsa ab nostrum. Explicabo officia quidem perferendis illum numquam, veniam quos nemo doloribus eius unde ad totam ea, esse consequuntur deserunt.',
        },
      },
    });
  });

  it('Should mount book cover component correctly', () => {
    cy.viewport(1200, 800);
  });

  it('Should display correct book info on card', () => {
    cy.get('[data-cy=book-foreword-header]')
      .should('exist')
      .should('have.text', 'Foreword and Dedication (by David Wengrow)');

    cy.get('[data-cy=book-foreword-content]').should(
      'contain.text',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit'
    );
  });
});
