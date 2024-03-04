import React, { useState } from 'react';
import './Analiz.css';
import analiztopvector from '../../assets/analiztopvector.png';
import analiztoplines from '../../assets/toplines.png';
import analizbottomlines from '../../assets/Group422.png';
import searchicon from '../../assets/analizsearchicon.png';
import file from '../../assets/analizfile.png';
import Dropdown from '../../components/Dropdown/Dropdown';

function Analiz(props) {
    const [selectedFile, setSelectedFile] = useState(null);
    const userId = props.userId;

    const [copy, setCopy] = useState("");
    const [productType, setProductType] = useState("");
    const [audience, setAudience] = useState([]);
    const [gender, setGender] = useState([]);
    const [result, setResult] = useState([]);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file ? file.name : null);
    };

    const handleCheckboxChange = (e) => {
        const { id, checked } = e.target;
    
        if(checked) {
          setAudience((prevAudience) => [...prevAudience, id]);
        } else {
          setAudience((prevAudience) => prevAudience.filter((item) => item !== id));
        }
      };

    const handleCheckboxChangeGender = (e) => {
        const { id, checked } = e.target;
    
        if(checked) {
          setGender((prevGender) => [...prevGender, id]);
        } else {
          // Checkbox işareti kaldırıldığında, audience state'inden değeri kaldırın
          setGender((prevGender) => prevGender.filter((item) => item !== id));
        }
      };

    return (
        <div className='analiz analiz__wrapper section__padding-analiz'>
            <img src={analiztopvector} alt='vector' className='analiz__topvector' />

            <div className='analiz__header'>
                <h2 className='analiz__h2'>Reklamınız İçin En iyi Servis</h2>
                <p className='analiz_p poppins_p'>Yapay Zeka Teknolojisi Ile Hazırlanmış Servisimizde Reklamlarınızın Kalitesini Hızlıca Test Edebilir Ve Sonuçları Anında Öğrenebilirsiniz</p>
                <p className='analiz_p poppins_p'>Hemen Başlamak Için Adımlarımızı Doğru Bir Şekilde Takip Et Ve Reklam Sonuçların Için Kendini Hazırla!</p>
            </div>


            <div className="analiz__layout">
                {/* <h2>Ses Dosyanızı Yükleyin Analizini Yapalım</h2> */}
                <div className='analiz__layout-aitext'>
                    <label htmlFor='aitext' className='analiz__layout-label'>Reklam Metniniz:</label>
                    <textarea id='aitext' placeholder="Reklam metniniz..."  className='analiz__layout-aitext__textarea'
                        value={copy}
                        onChange={(e) => setCopy(e.target.value)}
                    />
                </div>

                <div className='analiz__layout-type'>
                    <label htmlFor='product' className='analiz__layout-label'>Ürün tipiniz:</label>
                    <input type="text" id='product' placeholder="Ürün tipiniz..."  className='analiz__layout-type__input'
                        value={productType}
                        onChange={(e)=>{setProductType(e.target.value)}}
                    />
                </div>

                <div className='analiz__layout-audience'>
                <label className='analiz__layout-label'>Hedef Kitleniz:</label>
                    <div className='checkbox__container'>
                        <div className='checkbox__container-wrapper'>
                        <input type="checkbox"  id="child" className='gender__checkbox' 
                        onChange={handleCheckboxChange}
                        />
                        <label htmlFor='child' className='analiz__layout-label'>Çocuk</label>
                        </div>
                        <div className='checkbox__container-wrapper'>
                        <input type="checkbox"  id="adult" className='gender__checkbox'
                        onChange={handleCheckboxChange}
                        />
                        <label htmlFor='adult' className='analiz__layout-label'>Yetişkin</label>
                        </div>
                        <div className='checkbox__container-wrapper'>
                        <input type="checkbox"  id="elder" className='gender__checkbox' 
                        onChange={handleCheckboxChange}
                        />
                        <label htmlFor='elder' className='analiz__layout-label'>Yaşlı</label>
                        </div>
                    </div>
                </div>

                <div className='analiz__layout-gender'>
                    <label className='analiz__layout-label'>Hedef Cinsiyetiniz:</label>
                    <div className='checkbox__container'>
                        <div className='checkbox__container-wrapper'>
                        <input type="checkbox"  id="female" className='gender__checkbox' 
                        onChange={handleCheckboxChangeGender}
                        />
                        <label htmlFor='female' className='analiz__layout-label'>Kadın</label>
                        </div>
                        <div className='checkbox__container-wrapper'>
                        <input type="checkbox"  id="male" className='gender__checkbox' 
                        onChange={handleCheckboxChangeGender}
                        />
                        <label htmlFor='male' className='analiz__layout-label'>Erkek</label>
                        </div>
                    </div>
                </div>

                <div className='analiz__layout-file'>
                    <label className='analiz__layout-label'>Ses Dosyanız:</label>
                    <input type="file" name="file" id='uploadBtn' onChange={handleFileChange} />
                    <label htmlFor="uploadBtn" className='analiz__layout-filelabel'><img src={file} alt='file' /> Ses Dosyanızı Yükleyin</label>
                    <span className='file__span'>{selectedFile ? selectedFile : ""}</span>
                </div>

                <div className='analiz__layout-button'>
                    <button type="submit">Analiz Et</button>
                </div>



                <img src={analiztoplines} alt='vector' className='analiz__layout-toplines' />
                <img src={analizbottomlines} alt='vector' className='analiz__layout-bottomlines' />
                <div className="analiz__layout-circle">
                    <img src={searchicon} alt='icon' className='analiz__searchicon' />
                </div>
            </div>
        </div>
    )
}

export default Analiz