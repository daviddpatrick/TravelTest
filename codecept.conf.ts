import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: './tests/*_test.ts',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      windowSize: "1440x900",
      url: 'https://www.cp.pt/passageiros/en',
      show: true,
      waitForTimeout: 40000,
      timeout: 20000,
    }
  },
  include: {
    I: './steps_file'
  },
  name: 'TravelTest',
  plugins: {
    autoDelay: {
      enabled: true,
      delayAfter: 500,
    }
  },
}