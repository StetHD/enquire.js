/*jshint laxbreak:true */
/*global enquire:true, $:true, Modernizr:true */


$(function() {

	var $toc = $("<nav class='toc nav sidebar' data-spy='affix' data-offset-top='110' data-offsetop-bottom='200' role='navigation'><h2 class='section-title'>Jump To&hellip;</h2></nav>"),
		$main = $("[role=main], .main");


	enquire.register("screen and (min-width:1100px)", [{

		deferSetup : true,

		setup : function setup() {
			Modernizr.load([
				{
					load: "js/jquery.toc.js",
					callback : function() {
						$main.toc({
							container : "<ul class='no-bullets'></ul>",
							destination: $toc,
							targets : ["h2"]
						});
						$("body").append($toc);
					}
				},
				"js/vendor/bootstrap-scrollspy.js",
				"js/vendor/bootstrap-affix.js"
			]);
		},

		match : function() {
			$toc.fadeIn();
		},

		unmatch : function() {
			$toc.hide();
		}
	}]).listen(10);

});
