// GOOD CONNECT - Site JavaScript
// Vanilla JS for interactions

// ===== Mobile Menu Toggle =====
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
  });

  // Close mobile menu when clicking on a link
  const mobileLinks = mobileMenu.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
    });
  });
}

// ===== Smooth Scroll to Contact =====
function scrollToContact() {
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// ===== Sticky Header on Scroll =====
const header = document.getElementById('header');
if (header) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// ===== FAQ Accordion Toggle =====
function toggleFaq(button) {
  const faqItem = button.parentElement;
  const isActive = faqItem.classList.contains('active');
  
  // Close all FAQ items
  document.querySelectorAll('.faq-item').forEach(item => {
    item.classList.remove('active');
  });
  
  // Open clicked item if it wasn't active
  if (!isActive) {
    faqItem.classList.add('active');
  }
}

// ===== Contact Form Submission =====
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitBtn = document.getElementById('submit-btn');
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData.entries());
    
    // Disable submit button
    submitBtn.disabled = true;
    submitBtn.textContent = '送信中...';
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (response.ok) {
        // Show success message
        const formContainer = document.getElementById('contact-form-container');
        formContainer.innerHTML = `
          <div class="contact-success">
            <div class="contact-success-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="hsl(27, 85%, 55%)" stroke-width="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h3 class="contact-success-title">送信完了しました</h3>
            <p class="contact-success-message">
              お問い合わせありがとうございます。<br>
              担当者より2営業日以内にご連絡させていただきます。
            </p>
            <button class="btn btn-outline" onclick="location.reload()">続けて問い合わせる</button>
          </div>
        `;
      } else {
        throw new Error('送信に失敗しました');
      }
    } catch (error) {
      alert('送信に失敗しました。もう一度お試しください。');
      submitBtn.disabled = false;
      submitBtn.textContent = '無料相談を申し込む';
    }
  });
}

// ===== Scroll to section from hash =====
window.addEventListener('DOMContentLoaded', () => {
  if (window.location.hash) {
    const targetId = window.location.hash.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      setTimeout(() => {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }
});

// ===== Column Card Navigation =====
document.addEventListener('DOMContentLoaded', () => {
  const columnCards = document.querySelectorAll('.column-card');
  columnCards.forEach((card) => {
    const columnUrl = card.getAttribute('data-column');
    if (columnUrl) {
      card.addEventListener('click', () => {
        window.location.href = `/${columnUrl}`;
      });
    }
  });
});
