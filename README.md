#OpenFilePopup
A simple JavaScript function to open files in a dynamically sized pop-up window.

Features
Opens a file in a new browser window.
Dynamically adjusts window size based on screen resolution.
Supports scrollbars and resizable windows.
Usage
Include the function in your HTML/JavaScript project:

html
Copy
Edit
<script>
function showFile(fileName) {
    var scrwd = 840, scrht = 780;
    
    if (screen.width < 840) {
        scrwd = screen.width;
    }
    if (screen.height < 780) {
        scrht = screen.height - 45;    
    }

    window.open(fileName, 'Attachment', 
        'toolbar=no,location=yes,directories=no,status=yes,scrollbars=yes,resizable=yes,copyhistory=no,top=0,left=0,width=' 
        + scrwd + ',height=' + scrht);
}
</script>

<button onclick="showFile('example.pdf')">Open File</button>
Installation
Clone the repository:
sh
Copy
Edit
git clone https://github.com/Shanikiran/OpenFilePopup.git
Include the script in your project.
License
This project is licensed under the MIT License.

