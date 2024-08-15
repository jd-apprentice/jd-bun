import Joi from "joi";
import { validateSchema } from "../src/utils/validateSchema";
import { describe, it, expect } from 'bun:test';

describe("validateSchema", () => {
    it("should validate the configuration data against the schema", () => {
        const schema = Joi.object({
            name: Joi.string().required(),
            age: Joi.number().integer().min(18).required(),
            email: Joi.string().email().required(),
        });

        const data = {
            name: "John Doe",
            age: 25,
            email: "johndoe@example.com",
        };

        const { error, value } = schema.validate(data);

        expect(error).toBeUndefined();
        expect(value).toEqual(data);
    });

    it("should throw an error if the configuration data is invalid", () => {
        const schema = Joi.object({
            name: Joi.string().required(),
            age: Joi.number().integer().min(18).required().messages({
                "number.base": "Invalid configuration: \"age\" must be a number",
            }),
            email: Joi.string().email().required(),
        });

        const data = {
            name: "John Doe",
            age: {},
            email: "johndoe@example.com",
        };

        expect(() => {
            validateSchema(schema, data);
        }).toThrow("Invalid configuration: \"age\" must be a number");
    });

});