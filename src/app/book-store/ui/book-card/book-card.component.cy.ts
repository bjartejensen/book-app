import { createOutputSpy } from 'cypress/angular';
import { BookCardComponent } from './book-card.component';

describe(BookCardComponent.name, () => {
  beforeEach(() => {
    cy.mount(BookCardComponent, {
      componentProperties: {
        book: {
          cover: {
            authors: ['David Graeber', 'David Wengrow'],
            subTitle: 'A new history of Humanity',
            title: 'The Dawn of Everything',
            teaserText: 'The International Bestseller',
          },
          details: {
            isbn: '978-0-141-99106-1',
            publishedYear: 2021,
            publisher: 'Penguine Books',
          },
          foreword: {
            header: 'Foreword and Dedication (by David Wengrow)',
            content:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe distinctio illum tempora iusto nam, similique modi et ab impedit a dignissimos reiciendis. Eos quaerat at nam, cupiditate eveniet repellendus minima quasi laborum, recusandae laudantium deserunt voluptatem placeat ut aut distinctio veniam, id sapiente adipisci doloribus! Dolorem nulla dolore illum! Doloremque distinctio itaque eligendi nobis at inventore, fugit impedit eos illo assumenda suscipit vitae aliquam similique quibusdam illum delectus error ipsa deserunt sequi voluptatibus rerum accusamus quaerat soluta. Architecto nesciunt ab provident itaque laudantium aspernatur quis repellendus maxime possimus quibusdam illum inventore modi facilis obcaecati magnam eius, mollitia optio! Doloremque exercitationem molestias asperiores rem. Ex unde pariatur ipsum rem odio nesciunt aperiam nam nisi magni recusandae velit officiis eaque temporibus quibusdam veniam facere dolore expedita eos, suscipit fuga est iste veritatis accusantium. Cumque aliquid architecto similique explicabo quia! Inventore voluptatem dolorem quas odio. Illo nobis ipsam consequatur dolorem! Quas numquam quo iure perferendis voluptatem fuga delectus aliquid doloribus voluptates accusantium vitae, molestias suscipit deleniti eligendi incidunt quia a corrupti quaerat odit ipsam ut hic. Voluptatibus ipsum perferendis laboriosam ut, aliquam quod aperiam dolore quo est omnis corrupti alias quas commodi delectus vero inventore quasi? Eum sit, quam a voluptate consectetur corrupti ullam quae consequatur fuga omnis animi nulla. Adipisci quos libero recusandae, corporis consequatur error voluptates provident placeat vitae mollitia quas vero est, nesciunt ab quo consectetur! Sed, natus, sapiente dignissimos voluptatibus omnis voluptates nam fuga obcaecati alias soluta quos ipsa dicta delectus laborum, maiores dolorem ex voluptate. Ipsam aliquid necessitatibus possimus eos, minus fugiat officiis iusto explicabo quis quia recusandae non porro at sint architecto nisi in ut corporis velit ducimus perferendis, praesentium tenetur. Quia aperiam rerum ipsa odit provident libero et quasi voluptatum veniam ducimus vel non quae, velit perferendis ex ab iste vero quidem expedita porro distinctio. Tenetur quaerat voluptatem doloribus quasi neque nulla animi sint odit voluptates quos nostrum accusantium suscipit exercitationem corrupti commodi nobis iste minus natus, eos maxime aliquid distinctio consequatur aspernatur. Quasi aspernatur quidem, debitis praesentium nostrum amet ratione architecto, non facere cupiditate iure. Officiis sed mollitia dolore, similique nam earum doloribus ab aperiam impedit vitae at voluptatem eligendi incidunt? Ad laboriosam impedit modi totam velit voluptates, esse dolores quo corrupti fuga eaque, aliquid pariatur neque molestias architecto labore. Dolores in explicabo inventore nam alias facere asperiores accusantium fuga nisi, consequatur nostrum, praesentium fugit eos, enim atque? Neque, repellendus quia omnis voluptatem vero modi veritatis non recusandae laboriosam, at laudantium! Eum corrupti dolore nobis vero quibusdam eius quos, similique repellendus facilis? Assumenda molestias blanditiis ex! Ratione eos alias dolore eius. Repellat dolor dolorum maiores architecto! Dignissimos, animi et harum consequuntur nobis optio suscipit est earum accusamus, nulla laboriosam illo repellendus. Quasi ut enim magni recusandae aut, vero repellat rem beatae similique obcaecati nulla impedit veritatis ex inventore suscipit nisi assumenda consectetur a cupiditate, saepe ducimus officiis deserunt quis! Deleniti aliquid iure doloremque, animi ipsa ab nostrum. Explicabo officia quidem perferendis illum numquam, veniam quos nemo doloribus eius unde ad totam ea, esse consequuntur deserunt.',
          },
        },

        ISBNEmitter: createOutputSpy('ISBNEmitterSpy'),
      },
    });
  });

  it('Should mount book card component correctly', () => {
    cy.viewport(1200, 800);
  });

  it('Should display correct book info on card', () => {
    cy.get('[data-cy=book-card-title]')
      .should('exist')
      .should('have.text', 'The Dawn of Everything');

    cy.get('#0').should('contain.text', 'David Graeber');
    cy.get('#1').should('contain.text', 'David Wengrow');

    cy.get('[data-cy=book-card-publisher]').should(
      'have.text',
      'Penguine Books'
    );

    cy.get('[data-cy=book-card-published-year]').should('have.text', '2021');
  });

  it('Should emit selected ISBN when user click on book card', () => {
    cy.get('@ISBNEmitterSpy').should('not.have.been.called');
    cy.get('[data-cy=book-card]').click();
    cy.get('@ISBNEmitterSpy').should('have.been.called');
  });
});
