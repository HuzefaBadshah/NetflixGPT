// import { BG_URL } from "../utils/constants";
import { BG_URL } from "../../utils/constants";
import GPTMovieSuggestions from "./GPTMovieSuggestions/GPTMovieSuggestions";
import GptSearchBar from "./GPTSearchBar/GPTSearchBar";
import styles from "./index.module.scss";

const GPTSearch = () => {
    return (
        <>
            <div className="fixed -z-10">
                {/* <img className="h-screen object-cover" src={BG_URL} alt="logo" /> */}
                <img className="w-screen h-screen object-cover" src={BG_URL} alt="Netflix background image" />
            </div>
            <div className={`${styles['gpt-container']} flex flex-col w-full`}>
                <GptSearchBar />
                <GPTMovieSuggestions />
            </div>
        </>
    );
};
export default GPTSearch;