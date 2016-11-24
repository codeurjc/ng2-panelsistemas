import { Ejem1nPage } from './app.po';

describe('ejem1n App', function() {
  let page: Ejem1nPage;

  beforeEach(() => {
    page = new Ejem1nPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
