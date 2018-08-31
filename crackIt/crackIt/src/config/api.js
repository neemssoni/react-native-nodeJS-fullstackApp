export const fetchContents = () =>
    fetch("http://localhost:3001/contents")
        .then(res => res.json());


// import axios from 'axios';

// axios.defaults.baseURL= 'http://localhost:3001';

// class ContentApi {
//     constructor() {
//         this.path = '/contents';
//     }
//     async fetchContent() {
//         const { data } = await axios.get(this.path);

//         return data.contents;
//     }
// }

// export {
//     contentApi
// };