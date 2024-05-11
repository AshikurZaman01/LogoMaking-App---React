import { Download, DownloadCloud, DownloadCloudIcon } from "lucide-react";

const Header = () => {
    return (
        <div className="container mx-auto mt-2 border-b pb-2">

            <div className="flex justify-between">
                <div>
                    <h1 className="text-4xl font-bold cursor-pointer">Logo</h1>
                </div>

                <div>
                    <button className="btn  btn-error text-white flex gap-2 items-center"><DownloadCloudIcon></DownloadCloudIcon> Download</button>
                </div>
            </div>

        </div>
    );
};

export default Header;