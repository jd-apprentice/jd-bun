import { SampleApp } from "src";
import { describe, it, expect, beforeAll } from 'bun:test';

describe("SampleApp Class", () => {

    /**
     * @type {SampleApp}
     */
    let sampleApp;

    beforeAll(() => {
        sampleApp = new SampleApp();
    });

    it("should be an instance of SampleApp", () => {
        expect(sampleApp).toBeInstanceOf(SampleApp);
    });

    it("should have a method called 'sampleMethod'", () => {
        expect(sampleApp.sampleMethod).toBeInstanceOf(Function);
        expect(sampleApp.sampleMethod()).toBe("Hello World!");
    });
});