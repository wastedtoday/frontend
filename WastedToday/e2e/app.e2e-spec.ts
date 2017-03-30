import { WastedTodayPage } from './app.po';

describe('wasted-today App', () => {
  let page: WastedTodayPage;

  beforeEach(() => {
    page = new WastedTodayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
