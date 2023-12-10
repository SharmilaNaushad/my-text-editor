function bold(){
    document.execCommand('bold',false,null)
}



function underline(){
      document.execCommand('underline',false,null)
}

function italic(){
    document.execCommand('italic',false,null)
}

function left(){
    document.querySelectorAll('.left').forEach(function(element) {
        element.addEventListener('click', function() {
            document.getElementById('cEditor').style.textAlign = 'left';
        });
    });
}


function right(){
    document.querySelectorAll('.right').forEach(function(element) {
        element.addEventListener('click', function() {
            document.getElementById('cEditor').style.textAlign = 'right';
        });
    });
}


function center(){
    document.querySelectorAll('.center').forEach(function(element) {
        element.addEventListener('click', function() {
            document.getElementById('cEditor').style.textAlign = 'center';
        });
    });
}

function justify(){
    document.querySelectorAll('.justify').forEach(function(element) {
        element.addEventListener('click', function() {
            document.getElementById('cEditor').style.textAlign = 'justify';
        });
    });
}



function applyFontColor() {
    const fontColor = document.getElementById("fontColorPicker").value;
    document.execCommand("foreColor", false, fontColor);
}


var x = [];
var y = -1; // Start with -1 to indicate no actions performed yet

function undo() {
    if (y > 0) {
        y--;
        document.getElementById('cEditor').innerHTML = x[y];
    } else {
        console.log("Nothing more to undo.");
    }
}

function redo() {
    if (y < x.length - 1) {
        y++;
        document.getElementById('cEditor').innerHTML = x[y];
    } else {
        console.log("Nothing more to redo.");
    }
}

document.getElementById('cEditor').addEventListener('input', function() {
    var editorContent = document.getElementById('cEditor').innerHTML;
    x = x.slice(0, y + 1); // Truncate array to current state if redoing from a previous state
    x.push(editorContent);
    y = x.length - 1;
});


