// proudly borrowed from [jasmine repository](https://github.com/jasmine/jasmine/blob/master/src/core/matchers/matchersUtil.js);
export default {
    equals: function (a, b, customTesters) {
		customTesters = customTesters || [];

		return eq(a, b, [], [], customTesters);
    },

    contains: function (haystack, needle, customTesters) {
		customTesters = customTesters || [];

		if ((Object.prototype.toString.apply(haystack) === '[object Array]') ||
			(!!haystack && !haystack.indexOf)) {
			for (var i = 0; i < haystack.length; i++) {
				if (eq(haystack[i], needle, [], [], customTesters)) {
					return true;
				}
			}
			return false;
		}

		return !!haystack && haystack.indexOf(needle) >= 0;
    }
};

// Equality function lovingly adapted from isEqual in
//   [Underscore](http://underscorejs.org)
function eq(a, b, aStack, bStack, customTesters) {
    var result = true;

    for (var i = 0; i < customTesters.length; i++) {
		var customTesterResult = customTesters[i](a, b);
		if (customTesterResult !== undefined && customTesterResult !== null) {
			return customTesterResult;
		}
    }

    if (a instanceof Error && b instanceof Error) {
		return a.message == b.message;
    }

    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) { return a !== 0 || 1 / a == 1 / b; }
    // A strict comparison is necessary because `null == undefined`.
    if (a === null || b === null) { return a === b; }
    var className = Object.prototype.toString.call(a);
    if (className != Object.prototype.toString.call(b)) { return false; }
    switch (className) {
		// Strings, numbers, dates, and booleans are compared by value.
		case '[object String]':
			// Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
			// equivalent to `new String("5")`.
			return a == String(b);
		case '[object Number]':
			// `NaN`s are equivalent, but non-reflexive. An `egal` comparison is performed for
			// other numeric values.
			return a != +a ? b != +b : (a === 0 ? 1 / a == 1 / b : a == +b);
		case '[object Date]':
		case '[object Boolean]':
			// Coerce dates and booleans to numeric primitive values. Dates are compared by their
			// millisecond representations. Note that invalid dates with millisecond representations
			// of `NaN` are not equivalent.
			return +a == +b;
		// RegExps are compared by their source patterns and flags.
		case '[object RegExp]':
			return a.source == b.source &&
				a.global == b.global &&
				a.multiline == b.multiline &&
				a.ignoreCase == b.ignoreCase;
    }
    if (typeof a != 'object' || typeof b != 'object') { return false; }

    var aIsDomNode = j$.isDomNode(a);
    var bIsDomNode = j$.isDomNode(b);
    if (aIsDomNode && bIsDomNode) {
		// At first try to use DOM3 method isEqualNode
		if (a.isEqualNode) {
			return a.isEqualNode(b);
		}
		// IE8 doesn't support isEqualNode, try to use outerHTML && innerText
		var aIsElement = a instanceof Element;
		var bIsElement = b instanceof Element;
		if (aIsElement && bIsElement) {
			return a.outerHTML == b.outerHTML;
		}
		if (aIsElement || bIsElement) {
			return false;
		}
		return a.innerText == b.innerText && a.textContent == b.textContent;
    }
    if (aIsDomNode || bIsDomNode) {
		return false;
    }

    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    var length = aStack.length;
    while (length--) {
		// Linear search. Performance is inversely proportional to the number of
		// unique nested structures.
		if (aStack[length] == a) { return bStack[length] == b; }
    }
    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);
    var size = 0;
    // Recursively compare objects and arrays.
    // Compare array lengths to determine if a deep comparison is necessary.
    if (className == '[object Array]' && a.length !== b.length) {
		result = false;
    }

    if (result) {
		// Objects with different constructors are not equivalent, but `Object`s
		// or `Array`s from different frames are.
		if (className !== '[object Array]') {
			var aCtor = a.constructor, bCtor = b.constructor;
			if (aCtor !== bCtor && !(isFunction(aCtor) && aCtor instanceof aCtor &&
				isFunction(bCtor) && bCtor instanceof bCtor)) {
				return false;
			}
		}
		// Deep compare objects.
		for (var key in a) {
			if (has(a, key)) {
				// Count the expected number of properties.
				size++;
				// Deep compare each member.
				if (!(result = has(b, key) && eq(a[key], b[key], aStack, bStack, customTesters))) { break; }
			}
		}
		// Ensure that both objects contain the same number of properties.
		if (result) {
			for (key in b) {
				if (has(b, key) && !(size--)) { break; }
			}
			result = !size;
		}
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();

    return result;

    function has(obj, key) {
		return Object.prototype.hasOwnProperty.call(obj, key);
    }

    function isFunction(obj) {
		return typeof obj === 'function';
    }
};