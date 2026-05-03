# Interactive Notebook
This is a silly little notebook simulator that lets you write and navigate your notes. 
### Why did I do this?
I mostly did this just for fun as I wanted to create something more fun and whimsy after doing more challenging projects. I also really wanted to dedicate some time to the styling to make it pretty rather than fast and efficent.
### How did I do this?
Since the scripting was simple and I wanted to concentrate on the styling i used the classic HTML/CSS/Vanilla JS combo instead of the usual React + Vite/Tailwind combo I use. Fun fact: font I used for the notes is my actual hand-writing, which I made into a font using makeyourownfont.com
### How does this work?
We have two parts to this project, the cover of the notebook, which I made purely for esthetic purposes, and the actual notebook. You can switch between these two by clicking the Open/Close buttons. The cover is completely static and the only functional element to it is the 'Open' button.
The inside of the notebook consists of two buttons (aside from the 'Close' button), an index at the top that displays at which page is the user sitting and of course, the text content. For the text content, I used an input for the title as I figured It wouldn't need to be larger than the top margin of the page. For the text content i used an editable path, as I wanted to style and script it so that it always respects the lines and margins, filling the page correctly.
Logically, the 'back' button has no use when the user is on the first page, so in that case the style changes to display that it is useless. Each time the 'next' button is clicked on the last page it generates a new page, yet all the previous pages' content is saved and can be reached again when using the 'back' button. 