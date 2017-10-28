import { SkeletonAppPage } from './app.po';

describe('skeleton-app App', () => {
  let page: SkeletonAppPage;

  beforeEach(() => {
    page = new SkeletonAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
