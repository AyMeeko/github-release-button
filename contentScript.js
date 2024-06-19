// checking if a button should be inserted
function getMetaContentByProperty(property) {
  const metaTag = document.querySelector(`meta[property="${property}"]`);
  return metaTag ? metaTag.getAttribute('content') : null;
}

function getMetaContentByName(name) {
  const metaTag = document.querySelector(`meta[name="${name}"]`);
  return metaTag ? metaTag.getAttribute('content') : null;
}

function insertAfter(referenceNode, newNode) {
	referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

let repoName = getMetaContentByName('octolytics-dimension-repository_nwo');
let apiUrl = 'https://api.github.com/repos/' + repoName + '/releases/latest';

fetch(apiUrl, {
	headers: {
		'Accept': 'application/vnd.github+json',
		'X-GitHub-Api-Version': '2022-11-28'
	}
})
	.then(response => {
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		renderButton();
	})
	.catch(_ => {
	});

function renderButton() {
	let url = getMetaContentByProperty('og:url') + '/releases/latest';
	// creating the button
	const container = document.createElement('div');
	container.style.display = 'flex';
	container.style.justifyContent = 'center';
	container.style.alignItems = 'center';

	const button = document.createElement('a');

	button.innerText = 'Latest Release';

	button.style.padding = '20px 40px';
	button.style.border = '1px outset buttonborder';
	button.style.borderRadius = '3px';
	button.style.color = '#ffffff';
	button.style.backgroundColor = '#238636';
	button.style.textDecoration = 'none';
	button.style.marginTop = '10px';
	button.style.width = '65%';
	button.style.textAlign = 'center';
	button.href = url;

	container.appendChild(button)
	var header = document.getElementById('repository-container-header');
	insertAfter(header, container)
};
