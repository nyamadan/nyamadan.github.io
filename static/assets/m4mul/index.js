"use strict";

var Module = {
    postRun: () => {
        /**
         * @type {(m00:number, m10:number, m20:number, m30:number, m01:number, m11:number, m21:number, m31:number, m02:number, m12:number, m22:number, m32:number, m03:number, m13:number, m23:number, m33:number) => number}
         */
        const CreateMatrix = Module.cwrap('CreateMatrix', 'number', ['number', 'number', 'number', 'number', 'number', 'number', 'number', 'number', 'number', 'number', 'number', 'number', 'number', 'number', 'number', 'number']);

        /**
         * @type {(m:number) => void}
         */
        const TransposeMatrix = Module.cwrap('TransposeMatrix', '', ['number']);

        /**
         * @type {(a:number, b:number, dst:number) => void}
         */
        const MultiplyMatrix = Module.cwrap('MultiplyMatrix', '', ['number', 'number', 'number']);

        /**
         * @type {(m:number) => void}
         */
        const PrintMatrix = Module.cwrap('PrintMatrix', '', ['number']);

        /**
         * 
         * @param {number} ms 
         * @returns {Promise}
         */
        const wait = function(ms) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve();
                }, ms);
            });
        }

        /**
         * @returns {Promise}
         */
        const next = () => {
            return wait(0);
        };

        /**
         * @param {Float32Array} a 
         * @param {Float32Array} b 
         * @param {Float32Array} dst 
         */
        const MultiplyMatrixJS = (a, b, dst) => {
            for(let x = 0; x < 4; x++) {
                for(let y = 0; y < 4; y++) {
                    let i = x * 4;
                    dst[i + y] =
                        a[0 + y] * b[i + 0] 
                        + a[4 + y] * b[i + 1] 
                        + a[8 + y] * b[i + 2] 
                        + a[12 + y] * b[i + 3];
                }
            }
        };

        /**
         * 
         * @param {Float32Array} mat1 
         * @param {Float32Array} mat2 
         * @param {Float32Array} matResult 
         * @param {number} ms 
         */
        const benchmark1 = (mat1, mat2, matResult, ms) => {
            /**
             * @type {HTMLTableDataCellElement}
             */
            const el = document.querySelector('#js-jsscore');
            el.textContent = 'Running...';

            return next().then(() => {
                let count = 0;
                for (const t = Date.now() + ms; Date.now() < t; count++)
                {
                    MultiplyMatrixJS(mat1, mat2, matResult);
                }

                const score = Math.floor(count / ms);
                el.textContent = `${score}`;

                return next().then((resolve) => Promise.resolve(score));
            });
        };

        /**
         * 
         * @param {number} pMat1 
         * @param {number} pMat2 
         * @param {number} pMatResult 
         * @param {number} ms 
         */
        const benchmark2 = (pMat1, pMat2, pMatResult, ms) => {
            /**
             * @type {HTMLTableDataCellElement}
             */
            const el = document.querySelector('#js-wasmscore');

            el.textContent = 'Running...';

            return next().then(() => {
                let count = 0;
                for (const t = Date.now() + ms; Date.now() < t; count++)
                {
                    MultiplyMatrix(pMat1, pMat2, pMatResult);
                }

                const score = Math.floor(count / ms);
                el.textContent = `${score}`;

                return next().then((resolve) => Promise.resolve(score));
            });
        };


        const pMat1 = CreateMatrix(
            1, 5, 1, 5, 
            2, 6, 2, 6, 
            3, 7, 3, 7, 
            4, 8, 4, 8
        );

        const pMat2 = CreateMatrix(
            1, 5, 1, 5, 
            2, 6, 2, 6, 
            3, 7, 3, 7, 
            4, 8, 4, 8
        );

        const pMatResult = CreateMatrix(
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        );

        const mat1 = new Float32Array(Module.buffer, pMat1, 16);
        const mat2 = new Float32Array(Module.buffer, pMat2, 16);
        const matResult = new Float32Array(Module.buffer, pMatResult, 16);
        const ms = 1000;

        benchmark1(mat1, mat2, matResult, ms).then(() => benchmark2(pMat1, pMat2, pMatResult, ms))
    }
};
