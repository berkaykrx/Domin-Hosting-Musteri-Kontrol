
$(document).ready(function(){
	ajaxFunc("bolge", "", "#bolge");

	$("#bolge").on("change", function(){

		$("#il").attr("disabled", false).html("<option value=''>Seçin..</option>");
		console.log($(this).val());
		ajaxFunc("il", $(this).val(), "#il");

	});

	$("#il").on("change", function(){

		$("#ilce").attr("disabled", false).html("<option value=''>Seçin..</option>");
		console.log($(this).val());
		ajaxFunc("ilce", $(this).val(), "#ilce");

	});

	function ajaxFunc(action, name, id ){
		$.ajax({
			url: "inc/ajax.php",
			type: "POST",
			data: {action:action, name:name},
			success: function(sonuc){
				$.each($.parseJSON(sonuc), function(index, value){
					var row="";
					row +='<option value="'+value+'">'+value+'</option>';
					$(id).append(row);
				});
			}});
	}
});


$( document ).ready(function() {
	var frm = $('#formum');
	frm.submit(function (ev) {
		$.ajax({
			type: "POST",
			url: "inc/post.php",
			data: frm.serialize(),
			success:function(data) {

				var veri=JSON.parse(data);
				console.log(data);
				swal(veri.baslik,veri.message,veri.status).then(function(){
					location.reload();
				});
			}
		});

		ev.preventDefault();
	});
});

$(document).ready(function(){

	$('.hostingsil').click(function(){

		var th = $(this);

		var id = $(this).attr("id");



		Swal({
			title: 'Silmek İstediğine Emin Misin?',
			text: "Bu İşlemin Geri Dönüşü Olmayacaktır!",
			type: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Sil!',
			cancelButtonText: 'İptal'
		}).then((result) => {
			if (result.value) {

				$.ajax({

					url:'inc/sil.php',
					type:'POST',
					data:{hostingsil:id},
					success:function(data){
						th.parents('tr').hide();
					}
				})
				Swal(
					'Silindi!',
					'İşlem Başarılı',
					'success'
					)
			}
		})

	});


});

$(document).ready(function(){

	$('.domainsil').click(function(){

		var th = $(this);

		var id = $(this).attr("id");



		Swal({
			title: 'Silmek İstediğine Emin Misin?',
			text: "Bu İşlemin Geri Dönüşü Olmayacaktır!",
			type: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Sil!',
			cancelButtonText: 'İptal'
		}).then((result) => {
			if (result.value) {

				$.ajax({

					url:'inc/sil.php',
					type:'POST',
					data:{domainsil:id},
					success:function(data){
						th.parents('tr').hide();
					}
				})
				Swal(
					'Silindi!',
					'İşlem Başarılı',
					'success'
					)
			}
		})

	});


});
