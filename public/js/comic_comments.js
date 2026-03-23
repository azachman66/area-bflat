function loadHyvorTalk() {
	// add embed script
	const script = document.createElement('script');
	script.src = 'https://talk.hyvor.com/embed/embed.js';
	script.type = 'module';
	document.head.appendChild(script);

	// create the element
    const maxpg = 3;
    const comments = document.createElement("hyvor-talk-comments");
	comments.setAttribute('website-id', 15197);
    
    for (i = 1; i <= maxpg; i++) {
	comments.setAttribute('page-id', `https://areabflatcomic.com/pages/comic.html?pg=${i}`);
    };
    
	document.getElementById("comments-wrap").appendChild(comments);
}