$(document).ready(function() {
    loadCars();

    // Load data cars
    function loadCars() {
        $.ajax({
            url: 'get_cars.php',
            type: 'GET',
            success: function(data) {
                $('#carTable tbody').html(data);
            }
        });
    }

    // Show form untuk tambah data
    $('#addCarBtn').click(function() {
        $('#carForm').show();
        $('#carId').val('');
        $('#brand').val('');
        $('#type').val('');
        $('#price').val('');
    });

    // Cancel form
    $('#cancelBtn').click(function() {
        $('#carForm').hide();
    });

    // Save data
    $('#saveCarBtn').click(function() {
        var id = $('#carId').val();
        var brand = $('#brand').val();
        var type = $('#type').val();
        var price = $('#price').val();

        $.ajax({
            url: 'save_car.php',
            type: 'POST',
            data: {
                id: id,
                brand: brand,
                type: type,
                price: price
            },
            success: function(data) {
                $('#carForm').hide();
                loadCars();
            }
        });
    });

    // Edit data
    $(document).on('click', '.editBtn', function() {
        var id = $(this).data('id');
        $.ajax({
            url: 'get_car.php',
            type: 'GET',
            data: { id: id },
            success: function(data) {
                var car = JSON.parse(data);
                $('#carId').val(car.id);
                $('#brand').val(car.brand);
                $('#type').val(car.type);
                $('#price').val(car.price);
                $('#carForm').show();
            }
        });
    });

    // Delete data
    $(document).on('click', '.deleteBtn', function() {
        var id = $(this).data('id');
        if (confirm('Are you sure to delete this car?')) {
            $.ajax({
                url: 'delete_car.php',
                type: 'POST',
                data: { id: id },
                success: function(data) {
                    loadCars();
                }
            });
        }
    });
});
