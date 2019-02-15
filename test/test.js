const { spawn } = require('child_process');
const ls = spawn('ls', ['-lh', '/usr']);

console.log(spawn);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});



app.modal({
  confirmHandler:function(){
    var $modal=$(this).closest('.modal');

    $.ajax()
      .done(function(){
         $modal.modal('hide');
      })

    return false;
  }

})

app.modal({
  title:'添加成功',
  content:'添加成功！',
  isDialog:true,
  isLargeModal:false,
  btnConfirm:false,
  btnCancel:false
})