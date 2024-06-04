// import React from 'react';
// import './AnalysisResult.css';

// function AnalysisResult({ results }) {
//     const categories = [
//         'Bilgilendirici', 'Güven Verici', 'Merak Uyandırıcı', 'Özgünlük',
//         'Duygusal İlham', 'Kültürel Öge İroni', 'Eğlenceli Mizah', 'Harekete Geçirici',
//         'Agresif', 'Klişelik', 'Akılda Kalıcılık', 'Cinsiyetiçlik'
//     ];
//     if (!results || results.length === 0 || !results[0] || !Array.isArray(results[0])) {
//         return <></>;
//     }
//     return (
//         <div className="analysis-result">
//             <table className="results-table">
//                 <thead>
//                     <tr>
//                         {categories.map((category, index) => (
//                             <th key={index}>{category}</th>
//                         ))}
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         {results[0].map((score, index) => (
//                             <td key={index}>{score}</td>
//                         ))}
//                     </tr>
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// export default AnalysisResult;
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './AnalysisResult.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function AnalysisResult({ results, setShowResults }) {
    const categories = [
        'Bilgilendirici', 'Güven Verici', 'Merak Uyandırıcı', 'Özgünlük',
        'Duygusal İlham', 'Kültürel Öge İroni', 'Eğlenceli Mizah', 'Harekete Geçirici',
        'Agresif', 'Klişelik', 'Akılda Kalıcılık', 'Cinsiyetiçlik'
    ];

    if (!results || results.length === 0 || !results[0] || !Array.isArray(results[0])) {
        return <></>;
    }

    const data = {
        labels: categories,
        datasets: [
            {
                label: 'Skorlar',
                data: results[0],
                backgroundColor: '#747def',
                borderColor: '#5e3be1',
                borderWidth: 1,
                minBarLength: 1
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Analiz Sonuçları',
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                min: 0,
                max: 10,
                ticks: {
                    stepSize: 1
                }
            }
        }
    };

    return (

        <div className="analysis-result">
            <Bar data={data} options={options}
            // style={{height: "900px", width: "900px"}}
            />
            <div className='analysis-result__button'>
                <button onClick={() => setShowResults(false)} className="back-button">Analize Dön</button>
            </div>
        </div>


    );
}

export default AnalysisResult;

