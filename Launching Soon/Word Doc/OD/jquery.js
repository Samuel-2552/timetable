$(document).ready(function() {
    var size=3;
    $('#edit-btn').click(function() {
        $('#edit-btn').hide();
        $("#title").text("OD Letter");
        $('#head').css({"height":"70px"});
    });
    $('#save-btn').click(function() {
        html2pdf().from(content).save('OD Letter');
    });
    $('#home-btn').click(function() {
        window.location.href="http://bit.ly/aimltt";
    });
    $('#file-btn').click(function() {
        content.innerHTML="";
    });
    $('#reload-btn').click(function() {
        window.location.reload();
    });
    $('#undo-btn').click(function() {
        document.execCommand('undo');
    });
    $('#redo-btn').click(function() {
      document.execCommand('redo');
    });
    $('#bold-btn').click(function() {
      document.execCommand('bold');
    });
    $('#italic-btn').click(function() {
        document.execCommand('italic');
    });
    $('#underline-btn').click(function() {
        document.execCommand('underline');
    });
    $('#fonti-btn').click(function() {
        if(size<7)
        {
            size++;
            document.execCommand("fontSize", false, size);
        }
    });
    $('#fontd-btn').click(function() {
        if(size>1)
        {
            size--;
            document.execCommand("fontSize", false, size);
        }
    });
    $('#left-btn').click(function() {
        document.execCommand('justifyLeft');
    });
    $('#center-btn').click(function() {
        document.execCommand('justifyCenter');
    });
    $('#right-btn').click(function() {
        document.execCommand('justifyRight');
    });
    $('#justify-btn').click(function() {
        document.execCommand('justifyFull');
    });
  });