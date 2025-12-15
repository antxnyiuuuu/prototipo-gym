// ==================== MODAL SYSTEM ====================
// Sistema de modales premium para reemplazar alerts

function showModal(title, content, buttons = []) {
    // Crear overlay
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.onclick = (e) => {
        if (e.target === overlay) closeModal(overlay);
    };

    // Crear modal
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.onclick = (e) => e.stopPropagation();

    // Header
    const header = document.createElement('div');
    header.className = 'modal-header';
    header.innerHTML = `
        <h3 class="modal-title">${title}</h3>
        <button class="modal-close" onclick="this.closest('.modal-overlay').remove()">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </button>
    `;

    // Body
    const body = document.createElement('div');
    body.className = 'modal-body';
    body.innerHTML = content;

    // Footer con botones
    const footer = document.createElement('div');
    footer.className = 'modal-footer';

    if (buttons.length === 0) {
        buttons = [{
            text: 'Cerrar',
            class: 'btn-secondary',
            onClick: () => closeModal(overlay)
        }];
    }

    buttons.forEach(btn => {
        const button = document.createElement('button');
        button.className = `btn ${btn.class || 'btn-secondary'}`;
        button.textContent = btn.text;
        button.onclick = () => {
            if (btn.onClick) btn.onClick();
            if (btn.closeOnClick !== false) closeModal(overlay);
        };
        footer.appendChild(button);
    });

    modal.appendChild(header);
    modal.appendChild(body);
    modal.appendChild(footer);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    return overlay;
}

function closeModal(overlay) {
    overlay.style.animation = 'fadeOut 0.2s ease-out';
    setTimeout(() => overlay.remove(), 200);
}

function showConfirm(title, message, onConfirm) {
    const content = `<p style="color: var(--text-secondary); line-height: 1.6;">${message}</p>`;
    showModal(title, content, [
        {
            text: 'Cancelar',
            class: 'btn-secondary',
            onClick: () => { }
        },
        {
            text: 'Confirmar',
            class: 'btn-primary',
            onClick: onConfirm
        }
    ]);
}

function showSuccess(title, message) {
    const content = `
        <div style="text-align: center;">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" stroke-width="2" style="margin: 0 auto var(--spacing-md);">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <p style="color: var(--text-secondary); line-height: 1.6;">${message}</p>
        </div>
    `;
    showModal(title, content);
}
