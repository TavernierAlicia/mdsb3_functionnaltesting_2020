describe('Uber Website Test', function() {

  before(browser => browser.url('https://www.uber.com/fr/fr/'));

  //1
  test('Open Uber Website', function (browser) {
    browser
      .waitForElementVisible('body')
      .assert.visible('head')
      .assert.titleContains('Uber')
  });

  //2
  test('Check block login in the header wrapper', function (browser) {
    browser
      .waitForElementVisible('body')
      .assert.visible('input[aria-label="Connexion"]')
      .assert.visible('input[aria-label="Inscription"]')
  });

  //3
  test('Check login in two sections', function (browser) {
    browser
      .waitForElementVisible('body')
      .assert.visible('div[aria-label="Connexion"]')
      .assert.visible('div[class="dotcom-header-cta-group-item bw h2 hx hy hz"]')
  });

  //4
  test('Check login chauffeur section', function (browser) {
    browser
      .waitForElementVisible('body')
      .click('div[aria-label="Connexion"]')
      .waitForElementVisible('body')
      .click('div[class="dotcom-header-cta-group-item bw h2 hx hy hz""]')
  });

  //5
  test('Check login passager section', function (browser) {
    browser
      .waitForElementVisible('body')
      .click('div[aria-label="Connexion"]')
      .waitForElementVisible('body')
      .click('div[class="dotcom-header-cta-group-item bw h2 lq hy hz"]')
  });

  //6
  test('Check registration block in two sections', function (browser) {
    browser
    .waitForElementVisible('body')
    .click('div[aria-label="Inscription"]')
    .waitForElementVisible('body')
    .assert.visible('div[class=dotcom-header-cta-group-item bw h2 hx hy hz]')
    .assert.visible('div[class="dotcom-header-cta-group-item bw h2 lq hy hz"]')

  });

  //7
  test('Check registration block with devenir professionnal section', function (browser) {
    browser
      .waitForElementVisible('body')
      .click('div[aria-label="Inscription"]')
      .waitForElementVisible('body')
      .click('div[class="dotcom-header-cta-group-item bw h2 hx hy hz"]')
      .waitForElementVisible('body')
  });

  //8
  test('Check registration block with commander une course action', function (browser) {
    browser
    .waitForElementVisible('body')
    .click('div[aria-label="Inscription"]')
    .waitForElementVisible('body')
    .click('div[class="dotcom-header-cta-group-item bw h2 lq hy hz"]')
    .waitForElementVisible('body')
  });

  //9
  test('Registration with commander une course section shouldn\'t pass', function (browser) {
    browser
    .waitForElementVisible('body')
    .click('div[aria-label="Inscription"]')
    .waitForElementVisible('body')
    .click('div[class="dotcom-header-cta-group-item bw h2 lq hy hz"]')
    .waitForElementVisible('body')
    .click('button[type="submit"]')
    .waitForElementVisible('body')

  });

  //10
  test('Registration should pass', function (browser) {
    browser
    .waitForElementVisible('body')
    .click('div[aria-label="Inscription"]')
    .waitForElementVisible('body')
    .click('div[class="dotcom-header-cta-group-item bw h2 lq hy hz"]')
    .waitForElementVisible('body')

    .setValue('input[id="firstName"]', 'Celestin')
    .setValue('input[id="lastName"]', 'Grossel')
    .setValue('input[type=tel]', '678904560')
    .setValue('input[type="email"]', 'celestindarksasuke@caramail.com')
    .setValue('input[type="password"]', 'agrougroupatapoum')

    .click('button[type="submit"]')
    .waitForElementVisible('body')
  });




  after(browser => browser.end());
});