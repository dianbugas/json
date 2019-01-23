$.getJSON('data/pizza.json', function (data) {
    let menu = data.menu;
    $.each(menu, function (i, data) {
        $('#daftar-menu').append(' <div class="col-md-4"><div class="card-mb-3"><img src="img/pizza/<?= $row["gambar"]; ?>" class="card-img-top"><div class="card-body"><h5 class="card-title"><?= $row["nama"]; ?></h5><p class="card-text"><?= $row["deskripsi"]; ?></p><h5><?= $row["harga"]; ?></h5><a href="#" class="btn btn-primary">Pesan sekarang</a></div></div></div>');
    });
});