import { Injectable } from '@angular/core';
import { LogLevel } from './log-level.enum';
import { environment } from '../../../environments/environment.dev';

export class Logger {
    public static debug(...message: any): void {
        this.writeToLog(LogLevel.DEBUG, ...message);
    }

    public static log(...message: any) {
        this.writeToLog(LogLevel.INFO, ...message);
    }

    public static warn(...message: any) {
        this.writeToLog(LogLevel.WARN, ...message);
    }

    public static error(...message: any) {
        this.writeToLog(LogLevel.ERROR, ...message);
    }

    /**
     * Should write the log?
     */
    private static shouldLog(): boolean {
        return !environment.production;
    }

    /*
     * Write logs.
     */
    private static writeToLog(level: LogLevel, ...message: any) {
        if (!this.shouldLog()) {
            return;
        }

        switch (level) {
            case LogLevel.DEBUG: {
                console.debug(this.getLogDate(), ...message);
                break;
            }
            case LogLevel.INFO: {
                console.log(this.getLogDate(), ...message);
                break;
            }
            case LogLevel.ERROR: {
                console.error(this.getLogDate(), ...message);
                break;
            }
            case LogLevel.WARN: {
                console.warn(this.getLogDate(), ...message);
                break;
            }
        }
    }

    /**
     * To add the date on logs.
     */
    private static getLogDate(): string {
        const date = new Date();
        return '[' +
            date.getUTCFullYear() + '/' +
            (date.getUTCMonth() + 1) + '/' +
            date.getUTCDate() + ' ' +
            date.getUTCHours() + ':' +
            date.getUTCMinutes() + ':' +
            date.getUTCSeconds() + '.' +
            date.getMilliseconds() + ']';
    }
}
