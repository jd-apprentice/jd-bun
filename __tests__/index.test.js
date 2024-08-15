import { sampleApp } from "src";
import { describe, it, expect } from 'bun:test';

describe("sampleApp Function", () => {

    it("should be a function", () => {
        expect(sampleApp).toBeInstanceOf(Function);
    });

    it("should have a method called 'sampleMethod'", () => {
        expect(sampleApp).toBeInstanceOf(Function);
        expect(sampleApp()).toBe("Hello World!");
    });
});