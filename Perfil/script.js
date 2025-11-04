document.getElementById('open_btn').addEventListener('click', function (){
    document.getElementById('sidebar').classList.toggle('open-sidebar');
});

function setupUpload(uploadBoxId, fileInputId) {
  const uploadBox = document.getElementById(uploadBoxId);
  const fileInput = document.getElementById(fileInputId);

  uploadBox.addEventListener("click", () => {
    fileInput.click();
  });

  fileInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        uploadBox.innerHTML = `<img src="${e.target.result}" alt="Imagem";">`;
      };
      reader.readAsDataURL(file);
    }
  });
}

setupUpload("uploadBox1", "file1");
setupUpload("uploadBox2", "file2");