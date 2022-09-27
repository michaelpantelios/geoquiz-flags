
export class Utils {
    static get FLAG_AREA_PICKED() {
        return "flag_area_picked";
    }

    static ImageToDataURL( url ) {
        return fetch(url)
            .then(response => response.blob())
            .then(blob => new Promise((resolve, reject) => {
                let reader = new FileReader();
                reader.onloadend = () => resolve(reader.result);
                reader.onerror = reject;
                reader.readAsDataURL(blob)
            }));
    }
}

