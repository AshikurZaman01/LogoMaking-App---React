import BackgroundController from "../MainSection/BackgroundCOntroller/BackgroundController";
import IconController from "../MainSection/InconController/IconController";

const Home = ({ selectedIndexValue }) => {

    

    return (
        <div className="grid grid-cols-1 md:grid-cols-6">

            <div className="md:col-span-2 border h-screen shadow-sm p-5 overflow-y-auto">
                {
                    selectedIndexValue === 0 ? <IconController></IconController> : <BackgroundController></BackgroundController>
                }
            </div>

            <div className="md:col-span-3 bg-blue-400">
            </div>


        </div>
    );
};

export default Home;