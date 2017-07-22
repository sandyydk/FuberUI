import { FuberUIPage } from './app.po';

describe('fuber-ui App', function() {
  let page: FuberUIPage;

  beforeEach(() => {
    page = new FuberUIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
