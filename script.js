function showSection(sectionId) {
    document.querySelectorAll('.content').forEach(section => {
        section.classList.remove('active');
    });

    document.getElementById(sectionId).classList.add('active');
}

async function submitQuestion(event) {
    event.preventDefault();

    const form = event.target;
    const status = document.getElementById('form-status');
    const formData = new FormData(form);

    const payload = {
        senderName: formData.get('senderName') || '',
        message: formData.get('message') || ''
    };

    status.textContent = 'Wird gesendet...';

    try {
        const response = await fetch('/api/questions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || 'Unbekannter Fehler');
        }

        form.reset();
        status.textContent = 'Danke! Deine Frage wurde gesendet.';
    } catch (error) {
        status.textContent = `Fehler beim Senden: ${error.message}`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('question-form');
    if (form) {
        form.addEventListener('submit', submitQuestion);
    }
});
