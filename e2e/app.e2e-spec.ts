import { AntiopePage } from './app.po';

describe('antiope App', function() {
  let page: AntiopePage;

  beforeEach(() => {
    page = new AntiopePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
