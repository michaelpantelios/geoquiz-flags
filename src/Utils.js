
export class Utils {
    static get FLAG_AREA_PICKED() {
        return "flag_area_picked";
    }

    static toHexString(n) {
        if(n < 0) {
            n = 0xFFFFFFFF + n + 1;
        }
        return "0x" + ("000000" + n.toString(16).toUpperCase()).substring(0,-6);
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

