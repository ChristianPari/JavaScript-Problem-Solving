/*
! Convert the characters &, <, >, " (double quote), and ' (apostrophe), 
! ... in a string to their corresponding HTML entities.
*/

function convertHTML(str) {

    let strClone = str;

    if (str.includes(`&`))
        strClone = strClone.replace(/&/g, `&amp;`);

    if (str.includes(`<`))
        strClone = strClone.replace(/</g, `&lt;`);

    if (str.includes(`>`))
        strClone = strClone.replace(/>/g, `&gt;`);

    if (str.includes(`"`))
        strClone = strClone.replace(/"/g, `&quot;`);

    if (str.includes(`'`))
        strClone = strClone.replace(/'/g, `&apos;`);

    console.log(strClone);
    return strClone;

}

// convertHTML("Dolce & Gabbana");
//! should return Dolce &amp; Gabbana.
// convertHTML("Hamburgers < Pizza < Tacos");
//! should return Hamburgers &lt; Pizza &lt; Tacos.
// convertHTML("Sixty > twelve");
//! should return Sixty &gt; twelve.
// convertHTML('Stuff in "quotation marks"');
//! should return Stuff in &quot;quotation marks&quot;.
// convertHTML("Schindler's List");
//! should return Schindler&apos;s List.
// convertHTML("<>");
//! should return &lt;&gt;.
// convertHTML("abc");
//! should return abc.