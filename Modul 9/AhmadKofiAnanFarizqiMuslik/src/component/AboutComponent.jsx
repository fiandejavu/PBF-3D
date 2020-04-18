import React, { Component } from "react";
import '../App.css';
import '../index.css';
// import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import logo from '../kucing.jpg';

const AboutComponent = () => {
    return (
        <div class="container-fluid">
          <div class="row">
            <div class="col" >
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th colSpan="2">Biodata Mahasiswa</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Nama</td>
                    <td>Nisa Nurrochmah Hani</td>
                  </tr>
                  <tr>
                    <td>Tanggal Lahir</td>
                    <td>11/07/1998</td>
                  </tr>
                  <tr>
                    <td>Jurusan / Prodi</td>
                    <td>Teknologi Informasi / D4 Teknik Informatika</td>
                  </tr>
                  <tr>
                    <td>Alamat</td>
                    <td>Kota Tulungagung</td>
                  </tr>
                  <tr>
                    <td>Hobi</td>
                    <td>Membaca</td>
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
    )
}


export default AboutComponent;