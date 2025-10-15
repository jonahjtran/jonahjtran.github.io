import resume from "../assets/resume.pdf";
export default function ProfileSection() {
  return (
    <div>
      <h2 className="text-xl font-semibold text-white mb-4">PROFILE</h2>
      <p className="text-gray-300 mb-6">
        I have currently accepted an offer to intern at Synchrony Financial as a mobile development intern for the spriing of 2026, but am still open to other opportunities at different times related to software engineering, product management, tech consulting, and more. If you think I am a good fit, please contact me at
        <a href="mailto:jonahjtran@gmail.com" className="text-blue-400 hover:underline"> jonahjtran@gmail.com</a>.
      </p>

      <div className="space-y-2">
        <div>
          <span className="text-gray-400 uppercase text-sm">Full Name:</span>
          <p className="text-gray-200">Jonah Tran</p>
        </div>
        <div>
          <span className="text-gray-400 uppercase text-sm">Email:</span>
          <p className="text-gray-200">jonahjtran@gmail.com</p>
        </div>
        <button
          className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600"
          onClick={() => {
            const link = document.createElement('a');
            link.href = resume;
            link.download = 'Jonah_Tran_Resume.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
        >
          Download Resume
        </button>
      </div>
    </div>
  );
}
