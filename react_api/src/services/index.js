import GetAPI from "./Get";
import PostAPI from "./Post";
import DeleteAPI from "./Delete";

// Daftar API - GET
const getMahasiswa = () => GetAPI('mahasiswa?_sort-id&_order=desc');

// Daftar API - POST
const postMahasiswa = (dataYgDiKirim) => PostAPI('mahasiswa', dataYgDiKirim);

// Daftar API - DELETE
const deleteMahasiswa = (dataYgDihapus) => DeleteAPI('mahasiswa', dataYgDihapus);

const API = {        //inisialisasi function-function yang akan disediakan global API.
    getMahasiswa,
    postMahasiswa,
    deleteMahasiswa
}
export default API;