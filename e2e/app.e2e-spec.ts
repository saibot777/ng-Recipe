import { NgRecipePage } from './app.po';

describe('ng-recipe App', function() {
  let page: NgRecipePage;

  beforeEach(() => {
    page = new NgRecipePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
