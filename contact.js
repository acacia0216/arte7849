// 모달 스타일 동적 추가
function addModalStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(255, 255, 255, 0.9);
            z-index: 1000;
            overflow: hidden;
        }

        .modal-content {
            position: relative;
            max-width: 50%;
            height: 85vh;
            margin: 0 auto;
            background: #fff;
            padding: 20px;
            border-radius: 8px;
            display: flex;
            flex-direction: column;
            align-items: center;
            overflow: hidden;
        }

        .modal-close {
            position: absolute;
            right: 15px;
            top: 10px;
            font-size: 24px;
            color: #666;
            cursor: pointer;
            z-index: 1;
        }

        .modal-close:hover {
            color: #333;
        }
    `;
    document.head.appendChild(style);
}

// 문의하기 모달 열기
function openContactModal() {
    document.getElementById('contactModal').style.display = 'block';
}

// 문의하기 모달 닫기
function closeContactModal() {
    document.getElementById('contactModal').style.display = 'none';
}

// 모달 바깥 영역 클릭 시 닫기
document.addEventListener('DOMContentLoaded', function() {
    addModalStyles();
    const contactModal = document.getElementById('contactModal');
    if (contactModal) {
        contactModal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeContactModal();
            }
        });
    }
}); 