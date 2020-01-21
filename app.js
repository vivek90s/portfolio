const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "adobe",
				weight: 12.3
			}, {
				text: "figma",
				weight: 14
			}, {
				text: "javascript",
				weight: 8
			}, {
				text: "jquery",
				weight: 3
			}, {
				text: "programming",
				weight: 7
			}, {
				text: "python",
				weight: 10
			}, {
				text: "java",
				weight: 9
			}, {
				text: "vivek",
				weight: 15
			}
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 120});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"am a UI/UX designer.", "love everything about design.", "also know about coding.", "use python and java to solve problems.","learn everyday"
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 2,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#2e2a1e", "background-color": "#4dc6db"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
