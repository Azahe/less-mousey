document.addEventListener("keydown", function (event) {
    if (document.activeElement.tagName === "INPUT") {
        return;
    }
    const maybeSelectedNumber = parseInt(event.key);
    if (maybeSelectedNumber < 10 && maybeSelectedNumber >= 0) {
        const links = Array
            .from(document.getElementsByTagName("h3"))
            .map(tag => tag && tag.children[0] ? tag.children[0].href : "");
        const correspondingIndex = maybeSelectedNumber === 0 ? 9 : maybeSelectedNumber - 1;
        window.open(links[correspondingIndex]);
    }
});
