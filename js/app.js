function downloadPDF() {
    const link = document.createElement('a');
    link.href = 'resume_vinay.pdf';
    link.download = 'resume.pdf'; // यूजर को ये नाम से मिलेगी फाइल
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
