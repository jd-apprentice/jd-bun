/* Template Project
 *
 * -----------------------------------------------------------------------
 *
 * Author: Jonathan Dyallo
 * MIT License
 *
 * Copyright (c) 2024 Jonathan <contacto at jonathan dot com dot ar>
 *
 * All rights reserved.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/**
 * @description The main class of the application
 * @example
 *
 * const app = new SampleApp();
 *
 * console.log(app.sampleMethod());
 *
 * // Output: Hello World!
 */
export class SampleApp {
  constructor() {}

  sampleMethod() {
    return 'Hello World!';
  }
}

/**
 * @description A sample function
 * @returns {string} A greeting message
 * @example
 *
 * console.log(sampleApp());
 *
 * // Output: Hello World!
 */
export function sampleApp() {
  return 'Hello World!';
}
