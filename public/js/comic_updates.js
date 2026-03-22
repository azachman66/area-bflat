//comic_settings.js was created by geno7, with much needed assistance from Dannarchy

//this is the main file you'll be messing with to manage and update your comic. most (not all) of the main toggle-able settings are here.

//comic_archive has more settings pertaining to the archive page, and comic_show has settings pertaining to the main place that pages of your comic are displayed.

// let blog = Number(findGetParameter("blog")); //make "pg" mean the current page number (this line doesnt work unless I put it here, if you're inexperienced with js dont worry about it)

////////////////////////
//VARIABLES FOR TWEAKING
////////////////////////

//REALLY IMPORTANT ONES
const maxblog = 3; //the current number of pages your comic has in total. this DOESNT necessarily mean number of IMAGE FILES as it doesn't count pages split into multiple files. 
//YOU MUST UPDATE THIS NUMBER EVERY TIME YOU ADD A NEW PAGE or else it wont display the most recent page

// if (blog == 0) {blog = maxblog;} //display MOST RECENT COMIC when the webpage is loaded. if you want to instead have the FIRST COMIC displayed first, change maxpg to 1.

//pgData holds all the parameters for each of your pages. copypaste this and fill out accordingly:
/* 
    {
        blogNum: ,
        title: "",
        date: writeDate([YEAR],[MONTH],[DAY]),
        blogNotes: ``
    },
*/
//Note: the formatting is important! The whole thing won't show up if you forget to include the commas or curly braces in the right place.

const blogData = [
    {
        blogNum: 1,
        title: "Update #1",
        date: writeDate(2026, 3, 1),
        blogNotes: `<p>I am testing the updates function.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vulputate, orci sit amet dignissim eleifend, magna felis malesuada nunc, ut sagittis purus mi ac urna. Fusce ligula urna, varius vel sapien sit amet, vulputate tempor felis. In hac habitasse platea dictumst. Aliquam laoreet volutpat interdum. Vestibulum non libero sit amet leo accumsan porttitor. Vivamus nec porttitor neque. Sed eget mauris quam.</p>
        `,
    },
    // {
    //     blogNum: 1,
    //      title: "",
    //      date: writeDate(2026, 3, 01),
    //      blogNotes: `<p>This is where the blog text will go.</p>
    //      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vulputate, orci sit amet dignissim eleifend, magna felis malesuada nunc, ut sagittis purus mi ac urna. Fusce ligula urna, varius vel sapien sit amet, vulputate tempor felis. In hac habitasse platea dictumst. Aliquam laoreet volutpat interdum. Vestibulum non libero sit amet leo accumsan porttitor. Vivamus nec porttitor neque. Sed eget mauris quam.</p>
    //      `,
    // },
    // {
    //     blogNum: 1,
    //      title: "",
    //      date: writeDate(2026, 3, 01),
    //      blogNotes: `<p>This is where the blog text will go.</p>
    //      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vulputate, orci sit amet dignissim eleifend, magna felis malesuada nunc, ut sagittis purus mi ac urna. Fusce ligula urna, varius vel sapien sit amet, vulputate tempor felis. In hac habitasse platea dictumst. Aliquam laoreet volutpat interdum. Vestibulum non libero sit amet leo accumsan porttitor. Vivamus nec porttitor neque. Sed eget mauris quam.</p>
    //      `,
    // },
    // {
   //     blogNum: 1,
    //      title: "",
    //      date: writeDate(2026, 3, 01),
    //      blogNotes: `<p>This is where the blog text will go.</p>
    //      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vulputate, orci sit amet dignissim eleifend, magna felis malesuada nunc, ut sagittis purus mi ac urna. Fusce ligula urna, varius vel sapien sit amet, vulputate tempor felis. In hac habitasse platea dictumst. Aliquam laoreet volutpat interdum. Vestibulum non libero sit amet leo accumsan porttitor. Vivamus nec porttitor neque. Sed eget mauris quam.</p>
    //      `,
    // },
    // {
    //     blogNum: 1,
    //      title: "",
    //      date: writeDate(2026, 3, 01),
    //      blogNotes: `<p>This is where the blog text will go.</p>
    //      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vulputate, orci sit amet dignissim eleifend, magna felis malesuada nunc, ut sagittis purus mi ac urna. Fusce ligula urna, varius vel sapien sit amet, vulputate tempor felis. In hac habitasse platea dictumst. Aliquam laoreet volutpat interdum. Vestibulum non libero sit amet leo accumsan porttitor. Vivamus nec porttitor neque. Sed eget mauris quam.</p>
    //      `,
    // },
    // {
    //     blogNum: 1,
    //      title: "",
    //      date: writeDate(2026, 3, 01),
    //      blogNotes: `<p>This is where the blog text will go.</p>
    //      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vulputate, orci sit amet dignissim eleifend, magna felis malesuada nunc, ut sagittis purus mi ac urna. Fusce ligula urna, varius vel sapien sit amet, vulputate tempor felis. In hac habitasse platea dictumst. Aliquam laoreet volutpat interdum. Vestibulum non libero sit amet leo accumsan porttitor. Vivamus nec porttitor neque. Sed eget mauris quam.</p>
    //      `,
    // },
];

function writeDate(year,month,day) { //write date of comic page
    const date = new Date(year,month-1,day)
    .toDateString() //format date as Day Month Date Year
    .toString() //convert it to a string
    .slice(4) //remove the Day
    return date
}



//comic_archive.js was created by geno7

//Writing sections of the archive page involves 2 steps:
//first, use the writeArchive function in this .js file. set the parameters (the stuff inside the parenthesis, comma separated) to toggle options.
//then, to place that section of the archive on the html page, you'd make a div, and give that div a class name of whatever you've called that section of the archive in the first parameter.
//if you put anything in that div, the list of comics will get appended after it. i.e. you can put the title of that specific section as a header in that div. 

// writeBlog(
//     "chrono", //class of the div that you want this section of the archive to appear in. to have it be on your html page, make an empty div with this class.
//     1, //earliest page to list
//     -1, //if set to 0, list is displayed "latest first". if set to -1, list is displayed chronologically
// );

writeBlog("writeBlog", 1);

function writeBlog(divClass, min) {
    let blogAccord = document.createElement("div");
    blogAccord.className = "blogDetails";

    let getDiv = document.getElementsByClassName(divClass)[0];

    if (!getDiv) {
        console.error(`No element found with class "${divClass}"`);
        return;
    }

    getDiv.appendChild(blogAccord);

    // ✅ MOVE LOOP INSIDE FUNCTION
    for (let i = min; i <= maxblog; i++) {
        let detail = document.createElement("details");
        blogAccord.appendChild(detail);

        let summary = document.createElement("summary");
        let dateEl = document.createElement("span");

        // defaults
        let blogTitle = "Update " + i;
        let blogDate = "";
        let blogNum = "";

        if (blogData.length >= i) {
            if (blogData[i - 1].title) blogTitle = blogData[i - 1].title;
            if (blogData[i - 1].date) blogDate = blogData[i - 1].date;
            if (blogData[i - 1].blogNum) blogNum = blogData[i - 1].blogNum;
        }

        summary.innerHTML = `<strong>${blogTitle}</strong>`;
        summary.className = "summary";

        dateEl.textContent = blogDate;
        dateEl.className = "date";

        detail.appendChild(summary);
        detail.appendChild(dateEl);

        console.log(i + ` created details - ${blogTitle} - ${blogDate}`);
    }
}