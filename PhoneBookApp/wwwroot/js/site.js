// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

<script>
    $(document).ready(function () {
        $('.delete-btn').on('click', function () {
            var itemId = $(this).data('id');

            // Display SweetAlert confirmation
            Swal.fire({
                title: 'Are you sure?',
                text: 'You won\'t be able to revert this!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    // User clicked 'Yes', perform delete
                    $.ajax({
                        url: '/YourController/Delete/' + itemId,
                        type: 'POST',
                        success: function (data) {
                            if (data.success) {
                                // Optionally, you can show a success message
                                Swal.fire('Deleted!', 'Your item has been deleted.', 'success');
                                // Optionally, you can reload the page or update the UI
                                // window.location.reload();
                            } else {
                                // Handle error case
                                Swal.fire('Error', 'An error occurred during delete.', 'error');
                            }
                        },
                        error: function () {
                            // Handle AJAX error
                            Swal.fire('Error', 'An error occurred during delete.', 'error');
                        }
                    });
                }
            });
        });
    });
</script>
