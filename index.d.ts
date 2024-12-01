/*
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

/**
* Interface describing `dminsorted`.
*/
interface Routine {
	/**
	* Computes the minimum value of a sorted double-precision floating-point strided array.
	*
	* @param N - number of indexed elements
	* @param x - sorted input array
	* @param stride - stride length
	* @returns minimum value
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	*
	* var v = dminsorted( x.length, x, 1 );
	* // returns 1.0
	*/
	( N: number, x: Float64Array, stride: number ): number;

	/**
	* Computes the minimum value of a sorted double-precision floating-point strided array using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param x - sorted input array
	* @param stride - stride length
	* @param offset - starting index
	* @returns minimum value
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	*
	* var v = dminsorted.ndarray( x.length, x, 1, 0 );
	* // returns 1.0
	*/
	ndarray( N: number, x: Float64Array, stride: number, offset: number ): number;
}

/**
* Computes the minimum value of a sorted double-precision floating-point strided array.
*
* @param N - number of indexed elements
* @param x - sorted input array
* @param stride - stride length
* @returns minimum value
*
* @example
* var Float64Array = require( '@stdlib/array-float64' );
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
*
* var v = dminsorted( x.length, x, 1 );
* // returns 1.0
*
* @example
* var Float64Array = require( '@stdlib/array-float64' );
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
*
* var v = dminsorted.ndarray( x.length, x, 1, 0 );
* // returns 1.0
*/
declare var dminsorted: Routine;


// EXPORTS //

export = dminsorted;