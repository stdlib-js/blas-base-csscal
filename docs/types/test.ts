/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

import Complex64Array = require( '@stdlib/array-complex64' );
import Complex64 = require( '@stdlib/complex-float32-ctor' );
import csscal = require( './index' );


// TESTS //

// The function returns a Complex64Array...
{
	const x = new Complex64Array( 10 );

	csscal( x.length, 2.0, x, 1 ); // $ExpectType Complex64Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Complex64Array( 10 );

	csscal( '10', 2.0, x, 1 ); // $EzxpectError
	csscal( true, 2.0, x, 1 ); // $ExpectError
	csscal( false, 2.0, x, 1 ); // $ExpectError
	csscal( null, 2.0, x, 1 ); // $ExpectError
	csscal( undefined, 2.0, x, 1 ); // $ExpectError
	csscal( [], 2.0, x, 1 ); // $ExpectError
	csscal( {}, 2.0, x, 1 ); // $ExpectError
	csscal( ( x: number ): number => x, 2.0, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Complex64Array( 10 );

	csscal( x.length, new Complex64( 1.0, 2.0 ), x, 1 ); // $ExpectError
	csscal( x.length, '10', x, 1 ); // $ExpectError
	csscal( x.length, true, x, 1 ); // $ExpectError
	csscal( x.length, false, x, 1 ); // $ExpectError
	csscal( x.length, null, x, 1 ); // $ExpectError
	csscal( x.length, undefined, x, 1 ); // $ExpectError
	csscal( x.length, [ '1' ], x, 1 ); // $ExpectError
	csscal( x.length, {}, x, 1 ); // $ExpectError
	csscal( x.length, ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a Complex64Array...
{
	const x = new Complex64Array( 10 );

	csscal( x.length, 2.0, 10, 1 ); // $ExpectError
	csscal( x.length, 2.0, '10', 1 ); // $ExpectError
	csscal( x.length, 2.0, true, 1 ); // $ExpectError
	csscal( x.length, 2.0, false, 1 ); // $ExpectError
	csscal( x.length, 2.0, null, 1 ); // $ExpectError
	csscal( x.length, 2.0, undefined, 1 ); // $ExpectError
	csscal( x.length, 2.0, [ '1' ], 1 ); // $ExpectError
	csscal( x.length, 2.0, {}, 1 ); // $ExpectError
	csscal( x.length, 2.0, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Complex64Array( 10 );

	csscal( x.length, 2.0, x, '10' ); // $ExpectError
	csscal( x.length, 2.0, x, true ); // $ExpectError
	csscal( x.length, 2.0, x, false ); // $ExpectError
	csscal( x.length, 2.0, x, null ); // $ExpectError
	csscal( x.length, 2.0, x, undefined ); // $ExpectError
	csscal( x.length, 2.0, x, [] ); // $ExpectError
	csscal( x.length, 2.0, x, {} ); // $ExpectError
	csscal( x.length, 2.0, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Complex64Array( 10 );

	csscal(); // $ExpectError
	csscal( x.length ); // $ExpectError
	csscal( x.length, 2.0 ); // $ExpectError
	csscal( x.length, 2.0, x ); // $ExpectError
	csscal( x.length, 2.0, x, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Complex64Array...
{
	const x = new Complex64Array( 10 );

	csscal.ndarray( x.length, 2.0, x, 1, 0 ); // $ExpectType Complex64Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Complex64Array( 10 );

	csscal.ndarray( '10', 2.0, x, 1, 0 ); // $ExpectError
	csscal.ndarray( true, 2.0, x, 1, 0 ); // $ExpectError
	csscal.ndarray( false, 2.0, x, 1, 0 ); // $ExpectError
	csscal.ndarray( null, 2.0, x, 1, 0 ); // $ExpectError
	csscal.ndarray( undefined, 2.0, x, 1, 0 ); // $ExpectError
	csscal.ndarray( [], 2.0, x, 1, 0 ); // $ExpectError
	csscal.ndarray( {}, 2.0, x, 1, 0 ); // $ExpectError
	csscal.ndarray( ( x: number ): number => x, 2.0, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	const x = new Complex64Array( 10 );

	csscal.ndarray( x.length, new Complex64( 1.0, 2.0 ), x, 1, 0 ); // $ExpectError
	csscal.ndarray( x.length, '10', x, 1, 0 ); // $ExpectError
	csscal.ndarray( x.length, true, x, 1, 0 ); // $ExpectError
	csscal.ndarray( x.length, false, x, 1, 0 ); // $ExpectError
	csscal.ndarray( x.length, null, x, 1, 0 ); // $ExpectError
	csscal.ndarray( x.length, undefined, x, 1, 0 ); // $ExpectError
	csscal.ndarray( x.length, [ '1' ], x, 1, 0 ); // $ExpectError
	csscal.ndarray( x.length, {}, x, 1, 0 ); // $ExpectError
	csscal.ndarray( x.length, ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a Complex64Array...
{
	const x = new Complex64Array( 10 );

	csscal.ndarray( x.length, 2.0, 10, 1, 0 ); // $ExpectError
	csscal.ndarray( x.length, 2.0, '10', 1, 0 ); // $ExpectError
	csscal.ndarray( x.length, 2.0, true, 1, 0 ); // $ExpectError
	csscal.ndarray( x.length, 2.0, false, 1, 0 ); // $ExpectError
	csscal.ndarray( x.length, 2.0, null, 1, 0 ); // $ExpectError
	csscal.ndarray( x.length, 2.0, undefined, 1, 0 ); // $ExpectError
	csscal.ndarray( x.length, 2.0, [ '1' ], 1, 0 ); // $ExpectError
	csscal.ndarray( x.length, 2.0, {}, 1, 0 ); // $ExpectError
	csscal.ndarray( x.length, 2.0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Complex64Array( 10 );

	csscal.ndarray( x.length, 2.0, x, '10', 0 ); // $ExpectError
	csscal.ndarray( x.length, 2.0, x, true, 0 ); // $ExpectError
	csscal.ndarray( x.length, 2.0, x, false, 0 ); // $ExpectError
	csscal.ndarray( x.length, 2.0, x, null, 0 ); // $ExpectError
	csscal.ndarray( x.length, 2.0, x, undefined, 0 ); // $ExpectError
	csscal.ndarray( x.length, 2.0, x, [], 0 ); // $ExpectError
	csscal.ndarray( x.length, 2.0, x, {}, 0 ); // $ExpectError
	csscal.ndarray( x.length, 2.0, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Complex64Array( 10 );

	csscal.ndarray( x.length, 2.0, x, 1, '10' ); // $ExpectError
	csscal.ndarray( x.length, 2.0, x, 1, true ); // $ExpectError
	csscal.ndarray( x.length, 2.0, x, 1, false ); // $ExpectError
	csscal.ndarray( x.length, 2.0, x, 1, null ); // $ExpectError
	csscal.ndarray( x.length, 2.0, x, 1, undefined ); // $ExpectError
	csscal.ndarray( x.length, 2.0, x, 1, [] ); // $ExpectError
	csscal.ndarray( x.length, 2.0, x, 1, {} ); // $ExpectError
	csscal.ndarray( x.length, 2.0, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Complex64Array( 10 );

	csscal.ndarray(); // $ExpectError
	csscal.ndarray( x.length ); // $ExpectError
	csscal.ndarray( x.length, 2.0 ); // $ExpectError
	csscal.ndarray( x.length, 2.0, x ); // $ExpectError
	csscal.ndarray( x.length, 2.0, x, 1 ); // $ExpectError
	csscal.ndarray( x.length, 2.0, x, 1, 0, 10 ); // $ExpectError
}
