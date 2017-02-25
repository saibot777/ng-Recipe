import { NgRecipPage } from './app.po';

describe('ng-recip App', function() {
  let page: NgRecipPage;

  beforeEach(() => {
    page = new NgRecipPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
