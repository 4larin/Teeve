$("#dataTable").DataTable({paging:true, search:false});

// File Uploader
function readURL(input) {
  if (input.files && input.files[0]) {

    var reader = new FileReader();

    reader.onload = function(e) {
      $('.image-upload-wrap').hide();

      $('.file-upload-image').attr('src', e.target.result);
      $('.file-upload-content').show();

      $('.image-title').html(input.files[0].name);
    };

    reader.readAsDataURL(input.files[0]);

  } else {
    removeUpload();
  }
}

function removeUpload() {
  $('.file-upload-input').remove();
  $('.file-upload-input').replaceWith($('.file-upload-input').clone());
  $('.file-upload-content').hide();
  $('.image-upload-wrap').show();
}
$('.image-upload-wrap').bind('dragover', function () {
    $('.image-upload-wrap').addClass('image-dropping');
  });
  $('.image-upload-wrap').bind('dragleave', function () {
    $('.image-upload-wrap').removeClass('image-dropping');
});



// To edit profile 

function handleEditProfile(){
  $("#USERPROFILE_EDIT").addClass('d-block')
  $("#USERPROFILE").addClass('d-none')
  $("#USERPROFILE_EDIT").removeClass('d-none')
  $("#USERPROFILE").removeClass('d-block')
}

function handleSaveProfile(){
  $("#USERPROFILE_EDIT").addClass('d-none')
  $("#USERPROFILE").addClass('d-block')
  $("#USERPROFILE_EDIT").removeClass('d-block')
  $("#USERPROFILE").removeClass('d-none')
}