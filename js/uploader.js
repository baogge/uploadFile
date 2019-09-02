(function () {
    //选择文件上传
    let fileInput = document.getElementById('upload_file');
    let previewBox = document.getElementById('preview_box');
    let dropBox = document.getElementById('drop_box')
    fileInput.addEventListener('change', function () {
        let file = fileInput.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file, 'utf-8');//读取文件为二进制
        reader.onload = function (arg) {
            console.log(arg);
            let baseUrl = arg.target.result;
            let _htmlTag = document.createElement('img');
            _htmlTag.setAttribute('src', baseUrl);
            // _htmlTag.innerHTML = `<img src="${baseUrl}" alt="预览"/>`;
            previewBox.appendChild(_htmlTag);
            // console.log(baseUrl);
        };
    });
    dropBox.addEventListener('dragover', dragOver, false);
    dropBox.addEventListener('drop', fileSelect, false);

    function dragOver(evt) {
debugger
        console.log(111);
        evt.stopPropagation();
        evt.preventDefault();
        evt.dataTransfer.dropEffect = 'copy';
    }

    function fileSelect(evt) {
debugger
        evt.stopPropagation();
        evt.preventDefault();

        var files = evt.dataTransfer.files; // 文件对象
        var output = [];

        // 处理多文件
        for (var i = 0, f; f = files[i]; i++) {
            output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
                f.size, ' bytes, last modified: ',
                f.lastModifiedDate.toLocaleDateString(), '</li>');
        }
        // 显示文件信息
        document.getElementById('list').innerHTML = output.join('');
    }


//    拖拽上传


})();
