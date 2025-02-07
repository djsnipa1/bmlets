function generateQRCode() {
    try {
      const currentURL = encodeURIComponent(window.location.href);
      const size = 200; // Adjust the size as needed
  
      // Generate an img element for the QR Code
      const qrCodeImg = document.createElement('img');
      qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${currentURL}`;
  
      // Create the modal overlay
      const modalOverlay = document.createElement('div');
      modalOverlay.style.position = 'fixed';
      modalOverlay.style.top = '0';
      modalOverlay.style.left = '0';
      modalOverlay.style.width = '100%';
      modalOverlay.style.height = '100%';
      modalOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
      modalOverlay.style.display = 'flex';
      modalOverlay.style.justifyContent = 'center';
      modalOverlay.style.alignItems = 'center';
      modalOverlay.style.zIndex = '9999';
  
      // Append the QR code image to the modal overlay
      modalOverlay.appendChild(qrCodeImg);
  
      // Append the modal overlay to the body
      document.body.appendChild(modalOverlay);
    } catch (error) {
      console.error('Error generating QR code:', error);
    }
  }
  
  createQRCode();
  
  // Call the generateQRCode function when the page loads
  window.addEventListener('load', generateQRCode);