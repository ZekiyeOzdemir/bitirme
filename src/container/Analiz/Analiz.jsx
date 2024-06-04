import React, { useState, useEffect } from 'react';
import './Analiz.css';
import analiztopvector from '../../assets/analiztopvector.png';
import analiztoplines from '../../assets/toplines.png';
import analizbottomlines from '../../assets/Group422.png';
import searchicon from '../../assets/analizsearchicon.png';
import file from '../../assets/analizfile.png';
import axios from 'axios';
import AnalysisResult from '../../components/AnalysisResult/AnalysisResult';
import { Link } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';



function Analiz(props) {
    const [selectedFile, setSelectedFile] = useState(null);
    const userIdentifier = props.userId;
    let userToken = localStorage.getItem('token');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        if (userToken) {
            try {
                const user = jwtDecode(userToken);
                setIsLoggedIn(!!user);
            } catch (error) {
                console.error("Token decoding error: ", error);
            }
        }
    }, [userToken]);

    const [copy, setCopy] = useState("");
    const [productType, setProductType] = useState("");
    const [audience, setAudience] = useState([]);
    const [gender, setGender] = useState([]);
    const [results, setResults] = useState([]);
    const [showResults, setShowResults] = useState(false); // New state for showing results

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleCheckboxChange = (e) => {
        const { id, checked } = e.target;
        if (checked) {
            setAudience((prevAudience) => [...prevAudience, id]);
        } else {
            setAudience((prevAudience) => prevAudience.filter((item) => item !== id));
        }
    };

    const handleCheckboxChangeGender = (e) => {
        const { id, checked } = e.target;
        if (checked) {
            setGender((prevGender) => [...prevGender, id]);
        } else {
            setGender((prevGender) => prevGender.filter((item) => item !== id));
        }
    };

    const handleSubmit = () => {
        if (!isLoggedIn) {
            alert("Analiz yapabilmek için lütfen giriş yapın.");
            return;
        }
        const predictionUrl = `http://127.0.0.1:5000/predict`;
        const formData = new FormData();
        formData.append('text', copy);
        formData.append('marka', productType);
        formData.append('audio', selectedFile);

        axios.post(predictionUrl, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => {
            const receivedResults = response.data;
            setResults(response.data);
            const stringArray = receivedResults.map(item => item.toString());

            const analysisUrl = `http://localhost:8080/api/analysis`;
            const analysisConfig = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${userToken}`
                }
            };

            const analysisPayload = {
                userIdentifier: userIdentifier,
                copy: copy,
                productType: productType,
                audience: audience,
                gender: gender,
                result: stringArray
            };

            axios.post(analysisUrl, analysisPayload, analysisConfig)
                .then(analysisResponse => {
                    console.log("Analiz işlemi başarılı: ", analysisResponse.data);
                    setCopy("");
                    setProductType("");
                    setAudience([]);
                    setGender([]);
                    setSelectedFile(null);
                    setShowResults(true); // Show results after successful submission
                })
                .catch(analysisError => {
                    console.log("Analiz işlemi sırasında bir hata oluştu: ", analysisError);
                });

        }).catch(error => {
            console.error('Error:', error);
        });
    }

    return (
        <div className='analiz__wrapper section__padding-analiz'>
            {showResults ? (
                <>
                    <div className='analiz__header'>
                        <h2 className='analiz__h2'>Reklamınız İçin En iyi Servis</h2>
                        <p className='analiz_p poppins_p'>Yapay zeka teknolojisi ile hazırladığımız servisimizde, reklamlarınızın kalitesini hızlı bir şekilde test ettik ve sonuçlarını anında grafiklerimizde görebilirsiniz.</p>
                        <p className='analiz_p poppins_p'>Sonuçlarınız aşağıdaki grafikte gösterilmiştir. Reklamlardaki duygu kriterlerimiz 10 üzerinden puanlanmaktadır ve isterseniz analiz sonucuna göre gerekli değişiklikleri yaparak devam edebilirsiniz.</p>
                    </div>
                    <AnalysisResult results={results} setShowResults={setShowResults} />
                </>
            ) : (
                <>
                    <img src={analiztopvector} alt='vector' className='analiz__topvector' />

                    <div className='analiz__header'>
                        <h2 className='analiz__h2'>Reklamınız İçin En iyi Servis</h2>
                        <p className='analiz_p poppins_p'>Yapay Zeka Teknolojisi Ile Hazırlanmış Servisimizde Reklamlarınızın Kalitesini Hızlıca Test Edebilir Ve Sonuçları Anında Öğrenebilirsiniz</p>
                        <p className='analiz_p poppins_p'>Hemen Başlamak Için Adımlarımızı Doğru Bir Şekilde Takip Et Ve Reklam Sonuçların Için Kendini Hazırla!</p>
                    </div>

                        {!isLoggedIn && (
                            <>
                            <p className='analiz__overlay-message'>Analiz İçin Lütfen <span className='analiz__overlay-message__span'><Link to="/login">Giriş</Link></span> Yapın.</p>
                            </>
                        )}
                     <div className={`analiz__layout ${!isLoggedIn ? 'analiz__layout-blurred' : ''}`}>
                        <div className='analiz__layout-aitext'>
                            <label htmlFor='aitext' className='analiz__layout-label'>Reklam Metniniz:</label>
                            <textarea id='aitext' placeholder="Reklam metniniz..." className='analiz__layout-aitext__textarea'
                                value={copy}
                                onChange={(e) => setCopy(e.target.value)}
                                disabled={!isLoggedIn}
                            />
                        </div>

                        <div className='analiz__layout-type'>
                            <label htmlFor='product' className='analiz__layout-label'>Marka Adınız:</label>
                            <input type="text" id='product' placeholder="Marka Adınız..." className='analiz__layout-type__input'
                                value={productType}
                                onChange={(e) => { setProductType(e.target.value) }}
                                disabled={!isLoggedIn}
                           />
                        </div>

                        <div className='analiz__layout-audience'>
                            <label className='analiz__layout-label'>Hedef Kitleniz:</label>
                            <div className='checkbox__container'>
                                <div className='checkbox__container-wrapper'>
                                    <input type="checkbox" id="child" className='gender__checkbox'
                                        onChange={handleCheckboxChange}
                                        disabled={!isLoggedIn}
                                    />
                                    <label htmlFor='child' className='analiz__layout-label'>Çocuk</label>
                                </div>
                                <div className='checkbox__container-wrapper'>
                                    <input type="checkbox" id="adult" className='gender__checkbox'
                                        onChange={handleCheckboxChange}
                                        disabled={!isLoggedIn}
                                    />
                                    <label htmlFor='adult' className='analiz__layout-label'>Yetişkin</label>
                                </div>
                                <div className='checkbox__container-wrapper'>
                                    <input type="checkbox" id="elder" className='gender__checkbox'
                                        onChange={handleCheckboxChange}
                                        disabled={!isLoggedIn}
                                    />
                                    <label htmlFor='elder' className='analiz__layout-label'>Yaşlı</label>
                                </div>
                            </div>
                        </div>

                        <div className='analiz__layout-gender'>
                            <label className='analiz__layout-label'>Hedef Cinsiyetiniz:</label>
                            <div className='checkbox__container'>
                                <div className='checkbox__container-wrapper'>
                                    <input type="checkbox" id="female" className='gender__checkbox'
                                        onChange={handleCheckboxChangeGender}
                                        disabled={!isLoggedIn}
                                    />
                                    <label htmlFor='female' className='analiz__layout-label'>Kadın</label>
                                </div>
                                <div className='checkbox__container-wrapper'>
                                    <input type="checkbox" id="male" className='gender__checkbox'
                                        onChange={handleCheckboxChangeGender}
                                        disabled={!isLoggedIn}
                                    />
                                    <label htmlFor='male' className='analiz__layout-label'>Erkek</label>
                                </div>
                            </div>
                        </div>

                        <div className='analiz__layout-file'>
                            <label className='analiz__layout-label'>Ses Dosyanız:</label>
                            <input type="file" name="file" id='uploadBtn' 
                            onChange={handleFileChange} 
                            disabled={!isLoggedIn}
                            />
                            <label htmlFor="uploadBtn" className='analiz__layout-filelabel'><img src={file} alt='file' /> Ses Dosyanızı Yükleyin</label>
                            <span className='file__span'>{selectedFile ? selectedFile.name : ""}</span>
                        </div>

                        <div className='analiz__layout-button'>
                            <button type="submit"
                                onClick={handleSubmit}
                                disabled={!isLoggedIn}
                            >Analiz Et</button>
                        </div>

                        <img src={analiztoplines} alt='vector' className='analiz__layout-toplines' />
                        <img src={analizbottomlines} alt='vector' className='analiz__layout-bottomlines' />
                        <div className="analiz__layout-circle">
                            <img src={searchicon} alt='icon' className='analiz__searchicon' />
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default Analiz;
