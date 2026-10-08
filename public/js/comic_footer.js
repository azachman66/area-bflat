//the footer of the site would be handled in this javascript file, so you don't have to copypaste the whole thing onto every page.
//at the bottom of your page, but before the js script calls and the closing body tag, put an empty div with a class of "writeFooter"
document.querySelector(".writeFooter").innerHTML = `
    <footer align="center">
        <p><i>Area B-Flat</i> in its entirety was created by Aspen Z., aka weywyrd!</p> 
        <p>Area B-Flat © 2017-2026</p> 
        <p><strong>Powered by:</strong> <a href="https://rarebit.neocities.org"><img src="../img/rarebitlogo_small.png" height = "30" /></a></p>
    </footer>
`;
