function printDiv(divName) {
    var printContents = document.getElementById(divName).innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
}


window.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('http://localhost:8000/request_list');
        const { data } = await response.json();
        console.log(data);
        const tableBody = document.querySelector('tbody');
        
        // Clear existing table rows
        tableBody.innerHTML = '';

        // Loop through each request and create table rows
        data.forEach(request => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${request.id}</td>
                <td>${request.student_name} - ${request.current_track} to ${request.new_track}</td>
                <td>${request.status}</td>
                <td>
                    <button class="btn btn-approve" onclick="changeStatus(${request.id}, 'approve')">Approve</button>
                    <button class="btn btn-reject" onclick="changeStatus(${request.id}, 'reject')">Reject</button>

                    <button class="btn btn-approve" style="margin-left:5rem;" onclick="print_pdf(${request.id})">Print</button>
                </td>
            `;
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});

async function changeStatus(requestId, status) {
    try {
        const response = await fetch(`http://localhost:8000/request_list/${requestId}/status/${status}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ status })
        });

        if (response.ok) {
            // Refresh the table after status change
            window.location.reload();
        } else {
            console.error('Failed to change status:', response.statusText);
        }
    } catch (error) {
        console.error('Error changing status:', error);
    }
}


async function print_pdf(requestId) {
    window.open(`http://localhost:8000/print/${requestId}`, '_blank');
}
