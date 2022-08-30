$(document).ready(function() {
    var size=3;
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