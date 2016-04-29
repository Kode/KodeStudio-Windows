/*
 * Copyright (C)2005-2016 Haxe Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */

// This file is generated from mozilla/SourceBuffer.webidl line 49:0. Do not edit!

package js.html;

@:native("SourceBuffer")
extern class SourceBuffer extends EventTarget
{
	var mode : SourceBufferAppendMode;
	var updating(default,null) : Bool;
	var buffered(default,null) : TimeRanges;
	var timestampOffset : Float;
	var appendWindowStart : Float;
	var appendWindowEnd : Float;
	
	/** @throws DOMError */
	@:overload( function( data : ArrayBuffer ) : Void {} )
	function appendBuffer( data : ArrayBufferView ) : Void;
	/** @throws DOMError */
	function abort() : Void;
	/** @throws DOMError */
	function remove( start : Float, end : Float ) : Void;
}