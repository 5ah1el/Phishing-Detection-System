document.addEventListener('DOMContentLoaded', function() {
  const urlInput = document.getElementById('url-input');
  const checkBtn = document.getElementById('check-btn');
  const clearBtn = document.getElementById('clear-btn');
  const resultContainer = document.getElementById('result');
  
  if (urlInput && checkBtn && clearBtn) {
      // Enable/disable check button based on input
      urlInput.addEventListener('input', function() {
          checkBtn.disabled = !urlInput.value.trim();
      });
      
      // Clear button functionality
      clearBtn.addEventListener('click', function() {
          urlInput.value = '';
          checkBtn.disabled = true;
          resultContainer.classList.add('hidden');
          resultContainer.innerHTML = '';
      });
      
      // Check button functionality
      checkBtn.addEventListener('click', function() {
          const url = urlInput.value.trim();
          if (!url) return;
          
          // Show loading state
          const originalText = checkBtn.textContent;
          checkBtn.disabled = true;
          checkBtn.textContent = 'Analyzing...';
          resultContainer.classList.add('hidden');
          
          // Send URL to backend
          fetch('/prediction', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({ url: url })
          })
          .then(response => response.json())
          .then(data => {
              displayResult(data); // Pass the backend response to display
          })
          .catch(error => {
              console.error('Error:', error);
              resultContainer.innerHTML = '<p>❌ An error occurred while checking the URL. Please try again.</p>';
              resultContainer.classList.remove('hidden');
              resultContainer.classList.add('result-danger');
          })
          .finally(() => {
              // Reset button
              checkBtn.disabled = false;
              checkBtn.textContent = originalText;
          });
      });
      
      // Allow pressing Enter to submit
      urlInput.addEventListener('keypress', function(e) {
          if (e.key === 'Enter') {
              e.preventDefault();
              if (!checkBtn.disabled) {
                  checkBtn.click();
              }
          }
      });
  }
  
  // Function to display the result
  function displayResult(data) {
      resultContainer.innerHTML = '';
      resultContainer.classList.remove('hidden', 'result-safe', 'result-danger');
      
      // Updated to match backend response format
      if (data.result === 'Legitimate') {
          resultContainer.classList.add('result-safe');
          resultContainer.innerHTML = `
              <h3>✅ Safe URL</h3>
              <p>This URL has been analyzed and appears to be safe.</p>
          `;
      } else {
          resultContainer.classList.add('result-danger');
          resultContainer.innerHTML = `
              <h3>⚠️ Potential Phishing Detected</h3>
              <p>This URL may be phishing. We recommend not visiting this site.</p>
          `;
      }
      
      // Add animation
      resultContainer.style.opacity = '0';
      resultContainer.classList.remove('hidden');
      setTimeout(() => {
          resultContainer.style.transition = 'opacity 0.3s ease';
          resultContainer.style.opacity = '1';
      }, 10);
  }
});

// Add input validation
document.addEventListener('DOMContentLoaded', function() {
    const urlInput = document.getElementById('url-input');
    
    if (urlInput) {
        urlInput.addEventListener('input', function() {
            // Basic URL validation
            const url = urlInput.value.trim();
            if (url && !url.startsWith('http')) {
                urlInput.setCustomValidity('Please include http:// or https:// in the URL');
            } else {
                urlInput.setCustomValidity('');
            }
        });
    }
});