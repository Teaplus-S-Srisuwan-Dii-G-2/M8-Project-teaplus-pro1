import React from 'react'
import Swal from 'sweetalert2'

function Testbut() {
function but_1() {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
}

    return (
        <div>
            <button onClick={but_1}>GHGG</button>
        </div>
    )
}

export default Testbut
