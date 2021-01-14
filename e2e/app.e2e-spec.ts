import { ProjetWebPage } from './app.po';

describe('projet-web App', function() {
  let page: ProjetWebPage;

  beforeEach(() => {
    page = new ProjetWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
