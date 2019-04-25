class GnomeService {

    getGnomes = async () => {
        try {
            // Making fetch to gnome data
            const response = await fetch("https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json");
            // If response is not OK I throw an error (fetch promise resolve with .OK true or false, but is not an error)
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            // If response is OK i return the json with gnome data
            const body = await response.json();
            return body;
        } catch (err) {
            // If there is an error in try, I throw it again to catch it in component and save error state
            throw new Error(err);
        }
    }

}

const gnomeService = new GnomeService();
export default gnomeService;