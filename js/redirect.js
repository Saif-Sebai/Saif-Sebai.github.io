// Get the document's referrer
const referrer = document.referrer;

// Check if the referrer is blogs.domain.com
if (referrer.includes('blogs.seifsebai.com')) {
    // Redirect to domain.com/blogs
    window.location.href = 'https://saif-sebai.github.io/blogs';
}