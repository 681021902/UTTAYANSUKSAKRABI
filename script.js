// ดึงข้อมูลจาก JSON
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('main-title').innerText = data.title;
        document.getElementById('sub-title').innerText = data.subTitle;
        
        // ข้อมูลเพิ่มเติม
        const infoDiv = document.getElementById('additional-info');
        infoDiv.innerHTML = `
            <p>${data.moreInfo.text}</p>
            <img src="${data.moreInfo.imageUrl}" style="width:100%; border-radius:10px;">
        `;

        startCountdown(data.targetDate);
    });

function startCountdown(date) {
    const target = new Date(date).getTime();

    setInterval(() => {
        const now = new Date().getTime();
        const diff = target - now;

        document.getElementById('days').innerText = Math.floor(diff / (1000 * 60 * 60 * 24));
        document.getElementById('hours').innerText = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        document.getElementById('minutes').innerText = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        document.getElementById('seconds').innerText = Math.floor((diff % (1000 * 60)) / 1000);
    }, 1000);
}

function toggleModal() {
    const modal = document.getElementById('modal');
    modal.style.display = (modal.style.display === 'block') ? 'none' : 'block';
}
