function downloadPDF() {
    const link = document.createElement('a');
    link.href = 'output.pdf';
    link.download = 'resume.pdf'; // यूजर को ये नाम से मिलेगी फाइल
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
