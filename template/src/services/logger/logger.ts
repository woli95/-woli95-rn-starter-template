import {LogLevels} from './logger.types';

class LoggerCls {
  private consoleEnabled = __DEV__;

  log(LEVEL: LogLevels, message: string) {
    if (this.consoleEnabled) {
      console.log(`#### [${LEVEL}] - ${message}`);
    }
  }
}

export const Logger = new LoggerCls();
