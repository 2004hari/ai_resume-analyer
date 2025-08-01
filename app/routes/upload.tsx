import { type FormEvent, useState } from "react";
import Navbar from "~/components/navbar";
import FileUploader from "~/components/FileUploader";

const Upload = () => {
    const [isProcessing, setIsProcessing] = useState(false);
    const [statusText, setStatusText] = useState("");
    const [file, setFile] = useState<File | null>(null);
    const handleFileSelect = (file: File|null) => {
        setFile(file  );

    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatusText("Scanning your resume...");
        setIsProcessing(true);

        // Simulate scan processing time (e.g., 3 seconds)
        setTimeout(() => {
            setStatusText("Scan complete! Here are your results.");
            setIsProcessing(false);
        }, 3000);
    };

    return (
        <main className="bg-[url('/images/bg-main.svg')] bg-cover min-h-screen">
            <Navbar />

            <section className="main-section">
                <div className="page-heading py-16 max-w-xl mx-auto">
                    <h1>Smart feedback for your dream job!</h1>

                    {isProcessing ? (
                        <>
                            <h2>{statusText}</h2>
                            <img
                                src="/images/resume-scan.gif"
                                className="w-full"
                                alt="Scanning resume"
                            />
                        </>
                    ) : (
                        <form
                            id="upload-form"
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-4 mt-8"
                        >
                            <div className="form-div">
                                <label htmlFor="company-name">Company Name</label>
                                <input
                                    type="text"
                                    name="company-name"
                                    placeholder="company-name"
                                    id="company-name"
                                />
                            </div>
                            <div className="form-div">
                                <label htmlFor="job-title">Job Title</label>
                                <input
                                    type="text"
                                    name="job-title"
                                    placeholder="job-title"
                                    id="job-title"
                                />
                            </div>
                            <div className="form-div">
                                <label htmlFor="job-description">Job Description</label>
                                <textarea
                                    rows={5}
                                    name="job-description"
                                    placeholder="job-description"
                                    id="job-description"
                                />
                            </div>
                            <div className="form-div">
                                <label htmlFor="uploader">Upload Resume</label>
                                <FileUploader onFileSelect={handleFileSelect} />
                            </div>
                            <button
                                type="submit"
                                className="primary-button"
                            >
                                Analyze Resume
                            </button>
                        </form>
                    )}
                </div>
            </section>
        </main>
    );
};

export default Upload;
