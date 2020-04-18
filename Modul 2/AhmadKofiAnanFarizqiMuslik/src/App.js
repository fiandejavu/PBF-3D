import React from 'react';
import './App.css';

import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import logo from '../src/foto.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table} from 'react-bootstrap';
import Image from 'react-bootstrap/Image'


const Biodata=(props)=>{
    return (
      <div class="container-sm">
          <div class="row">
            <div class="col" >
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th colSpan="2" >Biodata</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Nama</td>
                    <td>Ahmad Kofi Anan Farizqi Muslik</td>
                  </tr>
                  <tr>
                    <td>Tanggal Lahir</td>
                    <td>19/03/1998</td>
                  </tr>
                  <tr>
                    <td>Jurusan / Prodi</td>
                    <td>Teknologi Informasi / D4 Teknik Informatika</td>
                  </tr>
                  <tr>
                    <td>Alamat</td>
                    <td>Kota Malang</td>
                  </tr>
                  <tr>
                    <td>Hobi</td>
                    <td>Futsal dan Fotografi</td>
                  </tr>
                  <tr>
                    <td>Pas Foto</td>
                    <td class="image">
                      <Image src={logo} alt="logo" thumbnail/>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
      </div>
    );
  }

  ReactDOM.render(<Biodata />, document.getElementById('root'));

serviceWorker.unregister();

export default Biodata;
