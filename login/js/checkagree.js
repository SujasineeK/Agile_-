
const nextButton = document.getElementById('nextbtn');
    nextButton.addEventListener('click', function(event) {
        event.preventDefault(); 

        const checkbox = document.getElementById('Agree');
        
        if (!checkbox.checked) {
            console.log('Please agree to the terms');
            alert('Please agree to the terms (นักศึกษา"ต้อง"ยินยอมก่อนถึงขั้นตอนต่อไปได้)');
            
        }

        
        else  {
        console.log('Checkbox is checked, Proceeding to next step...');
        window.location.href = '../ChangeTrack.html'; //เปลี่ยนเป็น Path ที่เข้าสู่ Student role ของเรา
        }
    });
