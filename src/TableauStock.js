import './TableauStock.css';

export const TableauStock = () => {
  const headers = ['nom', 'quantite', 'unité'];
  const lignes = [
    { nom: 'Scotch Orange', quantite: 2000, unite: 'RL' },
    { nom: 'Sac Poubelle', quantite: 10, unite: 'RL' },
    { nom: 'Télémètre', quantite: 2, unite: 'U' },
    { nom: 'manche à balai', quantite: 5, unite: 'U' },
    { nom: 'Seau', quantite: 10, unite: 'U' },
  ];
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
