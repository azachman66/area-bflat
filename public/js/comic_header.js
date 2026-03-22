//the header of the site would be handled in this javascript file, so you don't have to copypaste the whole thing onto every page.
//at the bottom of your page, but before the js script calls and the closing body tag, put an empty div with a class of "writeHeader"
document.querySelector(".writeHeader").innerHTML = `
    <header align="center" style="margin: 0 auto; width: 50%; height: auto;">
        <a href="../pages/comic.html"><img src="../img/AB-FLAT_logo.png" alt="AREA B-FLAT" /></a> 
    </header>
`;