<!DOCTYPE html>
<html lang="en">

<head>
    <meta charget="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://getbootstrap.com/docs/5.3/asgets/css/docs.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    <link rel="stylesheet" href="../css/result-style.css">
    <script defer src="../js/result.js"></script>
    <title>4 - Result</title>
</head>

<body>
    <div class="container">
        <div class="row">
            <div class="col-md-8">
                <div class="logo-uitm">
                    <img src="../assets/uitm-only.jpg" alt="" class="uitm">
                    <h4>PEJABAT BENDAHARI</h4>
                    <h5>PERMOHONAN SKIM KHIDMAT PELAJAR</h5>
                    <p class="sila"><b>(Sila lampirkan salinan nombor kad pengenalan</b></p>
                    <p><b>dan dua salinana keperluan peperiksaan telah disahkan)</b></p>
                </div>
            </div>
            <div class="col-md-4 picture">
                <div class="siri-form">
                    <p>PK.PBUiTM.PPK.(O).08/01</p>
                </div>
                <div class="gambar-pemohon">
                    <img src="../assets/dev.jpeg" alt="" class="result-img"> <!-- user upload hamba, save as SKP.jpeg -->
                </div>
            </div>
        </div>

        <div class="row stud-info">
            <div class="maklumat-pelajar">
                <h4 class="section-title">A. MAKLUMAT PELAJAR</h4>
            </div>
            <div class="col-md-12 student-information">
                <table class="stud-inner">
                    <tr>
                        <td class="statement-info">Nama Penuh</td>
                        <td>
                            <p>:</p>
                            <p id="student-name"></p>
                            <p class="blank">
                                :................................................................................................................................................................
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td class="statement-info">Tarikh Lahir</td>
                        <td>
                            <p>:</p>
                            <p id="student-dob"></p>
                            <p class="blank">
                                :................................................................................................................................................................
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td class="statement-info">Alamat Rumah</td>
                        <td>
                            <p>:</p>
                            <p id="student-address"></p>
                            <p class="blank">
                                :................................................................................................................................................................
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td class="statement-info">No. Pelajar</td>
                        <td>
                            <p>:</p>
                            <p id="student-id"></p>
                            <p class="blank">
                                :................................................................................................................................................................
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td class="statement-info">No. Tel H/P</td>
                        <td>
                            <p>:</p>
                            <p id="student-phone"></p>
                            <p class="blank">
                                :................................................................................................................................................................
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td class="statement-info">Fakulti</td>
                        <td>
                            <p>:</p>
                            <p id="student-fac"></p>
                            <p class="blank">
                                :................................................................................................................................................................
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td class="statement-info">Alamat Kolej/Rumah Sewa</td>
                        <td>
                            <p>:</p>
                            <p id="student-living"></p>
                            <p class="blank">
                                :................................................................................................................................................................
                            </p>
                        </td>
                    </tr>
                </table>
            </div>
        </div>

        <div class="row info">
            <div class="maklumat-pelajar">
                <h4 class="section-title">B. MAKLUMAT BAPA/PENJAGA</h4>
            </div>
            <div class="col-md-12 student-information">
                <table class="parent-info info">
                    <tr>
                        <td class="statement-info">Nama Bapa/Penjaga</td>
                        <td>
                            <p>:</p>
                            <p id="father-name"></p>
                            <p class="blank">
                                :................................................................................................................................................................
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td class="statement-info">Pekerjaan</td>
                        <td>
                            <p>:</p>
                            <p id="father-job"></p>
                            <p class="blank">
                                :................................................................................................................................................................
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td class="statement-info">Alamat Majikan</td>
                        <td>
                            <p>:</p>
                            <p id="emp-add"></p>
                            <p class="blank">
                                :................................................................................................................................................................
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <p class="blank">
                                :................................................................................................................................................................
                            </p>
                        </td>

                    </tr>
                    <tr>
                        <td class="statement-info">Pendapatan Sebulan</td>
                        <td>
                            <p>:</p>
                            <p id="father-income"></p>
                            <p class="blank">
                                :................................................................................................................................................................
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td class="statement-info">Pekerjaan Ibu</td>
                        <td>
                            <p>:</p>
                            <p id="mother-job"></p>
                            <p class="blank">
                                :................................................................................................................................................................
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td class="statement-info">Pendapatan Ibu</td>
                        <td>
                            <p>:</p>
                            <p id="mother-income"></p>
                            <p class="blank">
                                :................................................................................................................................................................
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td class="statement-info">Bil Anak Masih Bersekolah</td>
                        <td>
                            <p>:</p>
                            <p id="sibling-stud"></p>
                            <p class="blank">
                                :................................................................................................................................................................
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td class="statement-info">Bil Anah Telah Bekerja</td>
                        <td>
                            <p>:</p>
                            <p id="sibling-work"></p>
                            <p class="blank">
                                :................................................................................................................................................................
                            </p>
                        </td>
                    </tr>
                </table>

                <p>Saya mengaku maklumat yang diberikan adalah benar dan jika didapati palsu</p>
                <p>saya bersedia dikenakan tindakan oleh UiTM.</p>
            </div>
        </div>

        <div class="row info signature">
            <div class="sub-sign sign-student">
                <p>...................................................</p>
                <p>TANDATANGAN PELAJAR</p>
            </div>
            <div class="sub-sign sign-date">
                <p>................................................</p>
                <p> TARIKH </p>
            </div>
        </div>

        <div class="row info">
            <div class="main">
                <h4 class="section-title">C. UNTUK DIISI OLEH DEKAN FAKULTI</h4>
            </div>
            <div class="admission">
                <p>Disahkan pemohon adalah pelajar ini dan peputusan CGPA semester terakhir</p>
                <p>beliau ialah .........................................(Sila lampirkan salinan keputusan</p>
                <p>peperiksaan yang disahkan).</p>
            </div>
            <div class="support">
                <p>Permohonan DISOKONG / TIDAK DISOKONG </p>
            </div>
            <div class="sign">
                <div class="sign-dekan">
                    <p>..............................................................</p>
                    <p>TANDATANGAN/COP DEKAN </p>
                </div>
                <div class="sign-tarikh">
                    <p>..............................................................</p>
                    <p>TARIKH </p>
                </div>
            </div>
        </div>

        <div class="row info">
            <div class="main">
                <h4 class="section-title">D. UNTUK KEGUNAAN PEJABAT HEP</h4>
                <p>Rujukan Permohonan</p>
            </div>
            <div class="d-table">
                <table>
                    <tr>
                        <td>Diterima Oleh</td>
                        <td>:
                            ..........................................................................................................................................................
                        </td>
                    </tr>
                    <tr>
                        <td>Tarikh</td>
                        <td>:
                            ..........................................................................................................................................................
                        </td>
                    </tr>
                    <tr>
                        <td>No.Bil Pendaftaran</td>
                        <td>:
                            ..........................................................................................................................................................
                        </td>
                    </tr>
                    <tr>
                        <td>Keputusan</td>
                        <td>:
                            ..........................................................................................................................................................
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</body>

<footer class="py-3">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <a class="btn btn-primary" href="../html/form.html">Back</a>
            </div>
            <div class="col-md-6">
                <a class="btn btn-primary" onclick="window.print()">Print</a>
            </div>
        </div>
</footer>

</html>