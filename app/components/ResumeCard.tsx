import { Link } from "react-router"; // ✅ correct import
import ScoreCircle from "../components/ScoreCircle"; // ✅ adjust path

const ResumeCard = ({ resume }: { resume: Resume }) => {
    const { id, companyName, jobTitle, feedback, imagePath } = resume;

    return (
        <Link
            to={`/resume/${id}`} // ✅ fixed template string syntax
            className="resume-card animate-in fade-in duration-1000 flex items-center justify-between p-4 border rounded-lg shadow hover:shadow-lg transition"
        >
            {/* Resume Info */}
            <div className="resume-card-header">
                <div className="flex flex-col gap-2">
                    <h2 className="!text-black font-bold break-words">{companyName}</h2>
                    <h3 className="!text-lg break-words text-gray-500">{jobTitle}</h3>
                </div>

                {/* Score Circle */}
                <div className="flex-shrink-0">
                    <ScoreCircle score={feedback.overallScore} />
                </div>
            </div>

            {/* Resume Preview Image */}
            <div className="gradient-border animate-in fade-in duration-1000">
                <div className="w-full h-full">
                    <img
                        src={imagePath}
                        alt="resume"
                        className="w-full h-[350px] max-sm:h-[200px] object-cover object-top"
                    />
                </div>
            </div>
        </Link>
    );
};

export default ResumeCard;
