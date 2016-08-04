function validator(str) {
	var messages 	= str.replace(/\s+/g, ' ').split(' ');
	var valid_lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
	var valid_upper = ['Z', 'M', 'K', 'P', 'Q'];

	for (var i = 0; i < messages.length; i++) {
		validate(messages[i]);
	}

	function validate(message) {
		// Pass #1: check all characters valid
		var filtered = message;

		for (var i = message.length - 1; i > 0; i--) {
			if (valid_lower.indexOf(message[i]) < 0 && valid_upper.indexOf(message[i]) < 0) {
				console.log(message, 'INVALID');
				return false;
			}
		}

		// Pass #2: set all approved lower case
		// values as marker value 'v'
		filtered = filtered.replace(/[a-j]/g, 'v');

		// Pass #3: set Zx pairs as a valid message 'v'
		filtered = filtered.replace(/Zv/g, 'v');

		if (filtered.match(/Z/g)) {
			console.log(message, 'INVALID');
			return false;
		}

		// Pass #4: set M|K|P|Qvv as valid message, 'v'
		filtered = filtered.replace(/[MKPQ]vv/g, 'v');

		if (filtered.match(/[MKPQ]/g)) {
			console.log(message, 'INVALID');
			return false;
		}

		console.log(message, 'VALID');

	}
}