import { PrjDashboardPage } from './app.po';

describe('prj-dashboard App', () => {
  let page: PrjDashboardPage;

  beforeEach(() => {
    page = new PrjDashboardPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
