function returnBook(slug) {
    if(confirm('Are you sure? This book has been returned?')) {
        jQuery.ajax({
            url: "/DropTable/web/app_dev.php/return/"+slug,
            success: function(result){
                jQuery("#btn-action-returned").parent().closest('tr').remove();
            }
        });
    }
}

function giveBook(slug) {
    if(confirm('Are you sure? Have you given this book?')) {
        jQuery.ajax({
            url: "/DropTable/web/app_dev.php/given/"+slug,
            success: function(result){
                jQuery("#btn-action-given").replaceWith('<button type="button" id="btn-status-returned" class="btn btn-xs" aria-label="Left Align" onclick="returnBook(\''+slug+'\')>Returned">Returned</button>')
            }
        });
    }
}

function editBook(slug) {
    window.location.href = "/DropTable/web/app_dev.php/books/edit/"+slug;
}

function removeBookOwnership(slug) {
    if(confirm('Are you sure? All people who are in waiting list will get emails that reservations are terminated')) {
        jQuery.ajax({
            url: "/DropTable/web/app_dev.php/books/delete/"+slug,
            success: function(result){
                window.location.href = "/DropTable/web/app_dev.php/profile";
            }
        });
    }
}


