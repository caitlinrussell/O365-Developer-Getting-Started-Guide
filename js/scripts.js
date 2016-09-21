$(document).ready(function() {
	$('.sample').hide();
	$('.Android').show();
	$('.office-wrapper').hide();
	$('#graph-content').show();
	$('#addin-content').hide();
	$('.tool-wrapper').hide();
	$('.demo').hide();
	$('.Access').show();
});

	$('.app-type').on('change', function() {
			$('.language-wrapper').toggle();
			$('.user-wrapper').toggle();
			$('.office-wrapper').toggle();
			$('.account-wrapper').toggle();
			$('#graph-content').toggle();
			$('#addin-content').toggle();
			$('.tool-wrapper').toggle();
	});

	$('.user-type').on('change', function() {
		if (this.value == "work") {
			$('.registration a').attr("href", "http://dev.office.com/app-registration");
			$('.auth a').attr("href", "https://graph.microsoft.io/en-us/docs/authorization/app_authorization");
			$('.registration span').text('AAD');
		} else {
			$('.registration a').attr("href", "https://apps.dev.microsoft.com");
			$('.auth a').attr("href", "https://graph.microsoft.io/en-us/docs/authorization/converged_auth");
			$('.registration span').text('V2');
		}
	});
	$('.language-type').on('change', function() {
		$('.sample').hide();
		$('.'+this.value).show();
		switch (this.value) {
			case 'Android':
				$('.sdk a').attr("href", "https://github.com/microsoftgraph/msgraph-sdk-android");
				break;
			case 'iOS':
				$('.sdk a').attr("href", "https://github.com/microsoftgraph/msgraph-sdk-ios");
				break;
			case 'Javascript':
				$('.sdk a').attr("href", "https://github.com/microsoftgraph/msgraph-sdk-javascript");
				break;
			case 'NET':
				$('.sdk a').attr("href", "https://github.com/microsoftgraph/msgraph-sdk-dotnet");
				break;
			case 'Python':
				$('.sdk a').attr("href", "https://github.com/microsoftgraph/msgraph-sdk-python");
				break;
			case 'Ruby':
				$('.sdk a').attr("href", "https://github.com/microsoftgraph/msgraph-sdk-ruby");
				break;
		}
	});

	$('.office-app').on('change', function() {
		$('.demo').hide();
		$('.sample').hide();
		$('.'+this.value).show();

		switch(this.value) {
			case 'Access':
				$('.docs a').attr("href", "http://dev.office.com/docs/add-ins/access/access-web-app-add-ins");
				break;
			case 'Excel':
				$('.docs a').attr("href", "http://dev.office.com/docs/add-ins/excel/excel-add-ins-javascript-programming-overview");
				break;
			case 'OneNote':
				$('.docs a').attr("href", "http://dev.office.com/docs/add-ins/onenote/onenote-add-ins-programming-overview");
				break;
			case 'Outlook':
				$('.docs a').attr("href", "http://dev.office.com/docs/add-ins/outlook/outlook-add-ins");
				break;
			case 'Powerpoint':
				$('.docs a').attr("href", "http://dev.office.com/docs/add-ins/powerpoint/powerpoint-add-ins");
				break;
			case 'Project':
				$('.docs a').attr("href", "http://dev.office.com/docs/add-ins/project/project-add-ins");
				break;
			case 'Word':
				$('.docs a').attr("href", "http://dev.office.com/docs/add-ins/word/word-add-ins-programming-overview");
				break;
		}
	});