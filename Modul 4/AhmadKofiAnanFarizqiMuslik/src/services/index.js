import GetAPI from './Get';
import PostAPI from './Post';
import DeleteAPI from './Delete';

// Daftar API - Get
const getNewsBlog = () => GetAPI('Mahasiswa?_sort=id&_order=desc');
// Daftar API - Post
const postNewsBlog = (dataYgDiKirim) => PostAPI('posts', dataYgDiKirim);
// Daftar API - Delete
const deleteNewsBlog = (dataYgDiHapus) => DeleteAPI('posts', dataYgDiHapus);

const API = {
    getNewsBlog,
    postNewsBlog,
    deleteNewsBlog
}


export default API;