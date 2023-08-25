import {v4 as uuid4} from "uuid";
function chillHop() {
    return [
        {
            name: "Astrovibes",
            cover: "https://chillhop.com/wp-content/uploads/2023/06/9180a7fabdc07fe2e221bb26bdd477cb66f6b69e-1024x1024.jpg",
            artist: "C Y G N",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=62370",
            color: ["#A8712C","#C4352D"],
            id: uuid4(),
            active: true,
        },
        {
            name: "It’s Okay",
            cover: "https://chillhop.com/wp-content/uploads/2023/05/5683fa8ae05221c0d06eeedd90fe00e653d27c48-1024x1024.jpg",
            artist: "Yasper",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=55163",
            color: ["#A8712C","#C4352D"],
            id: uuid4(),
            active: false,
        },
        {
            name: "See You Soon",
            cover: "https://chillhop.com/wp-content/uploads/2023/07/2b897971ba3fd361be1d4d207917eb5f059b2d47-300x300.jpg",
            artist: "Knowmadic",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=62376",
            color: ["#3A2A2B","#414E5A"],
            id: uuid4(),
            active: false,
        },
    ]
}

export default chillHop;