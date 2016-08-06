function validator(str) {
	var messages 	= str.replace(/\s+/g, ' ').split(' ');

	for (var i = 0; i < messages.length; i++) {
		validate(messages[i]);
	}

	function validate(message) {
		// E : [MPKQ]EE | ZE | [abcdefghij]
		var cursor = 0,
			savedCursor = 0;


		function E() {
			return (saveCursor(), E1()) || (backtrack(), saveCursor(), E2()) || (backtrack(), saveCursor(), E3());
		}

		// [MPKQ]EE
		function E1() {
			var nextToken = getNextToken();


			return (/[MKPQ]/.test(nextToken) && E() && E());
		}

		// ZE
		function E2() {
			var nextToken = getNextToken();

			return (/Z/.test(nextToken) && E());
		}

		// [a-j]
		function E3() {
			var nextToken = getNextToken();

			return (/[a-j]/.test(nextToken));
		}

		function saveCursor() {
			savedCursor = cursor;
		}

		function backtrack() {
			cursor = savedCursor;
		}

		function getNextToken() {
			var nextToken = message[cursor];
			cursor++;
			return nextToken;
		}

		console.log(message, ((E() && cursor == message.length) ? 'VALID' : 'INVALID'))

	}
}