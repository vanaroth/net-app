import './TableauStock.css';
import { useEffect, useState } from 'react';
import Axios from 'axios';

export const TableauStock = () => {
  const headers = ['#', 'nom', 'quantite', 'unité', 'propriétaire'];
  const [lignes, setLignes] = useState([
    { nom: 'Scotch Orange', quantite: 2000, unite: 'RL' },
    { nom: 'Sac Poubelle', quantite: 10, unite: 'RL' },
    { nom: 'Télémètre', quantite: 2, unite: 'U' },
    { nom: 'manche à balai', quantite: 5, unite: 'U' },
    { nom: 'Seau', quantite: 10, unite: 'U' },
  ]);
  useEffect(() => {
    Axios.get('https://api.nextsetp.ovh/stock?lakle=jxF35644TTcY847gttthr')
      .then((r) => {
        console.log('Success', r);
        const liste_stock = r.dataResponse.liste_stock.map(
          ({ idProduit, nom, total, unite_total, proprietaire }) => ({
            idProduit,
            nom,
            quantite: total,
            unite: unite_total,
            proprietaire,
          })
        );
        console.log('liste_stock', liste_stock);
        setLignes(liste_stock);
      })
      .catch((err) => console.log('Error', err));
  }, []);
  return (
    <div className="TableauStock">
      <h1>Stock</h1>
      <Tableau {...{ headers, lignes }} />
    </div>
  );
};

const Tableau = ({ headers, lignes }) => {
  return (
    <Scroll>
      <table>
        <thead>
          <tr>
            {headers.map((header, i) => (
              <th key={i.toString()}>{header.toUpperCase()}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {lignes.map((ligne, i) => (
            <tr key={i.toString()}>
              {Object.entries(ligne).map(([k, data]) => (
                <td key={k.toString()}>{data}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Scroll>
  );
};

const Scroll = ({ children }) => {
  return <div className="scroll">{children}</div>;
};
