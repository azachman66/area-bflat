function getPageId() {
    const params = new URLSearchParams(window.location.search);
    const pg = params.get("pg") || 1; // default to 1
    return `page-${pg}`;
};

function loadHyvorTalk() {
    // add embed script
    const script = document.createElement('script');
    script.src = 'https://talk.hyvor.com/embed/embed.js';
    script.type = 'module';
    document.head.appendChild(script);

    // create the element
    const comments = document.createElement("hyvor-talk-comments");
    comments.setAttribute('website-id', 15197);

    // ✅ unique page ID based on current page
    comments.setAttribute('page-id', getPageId());

    document.getElementById("comments-wrap").appendChild(comments);
};