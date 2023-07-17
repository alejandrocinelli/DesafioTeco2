
// eslint-disable-next-line react/prop-types
const Alerta = ({ alerta }) => {
  const alertaStyles = {
    // eslint-disable-next-line react/prop-types
    backgroundColor: alerta.error ? '#EF4444' : '#60A5FA',
    backgroundImage: 'linear-gradient(to bottom right, ' +
     // eslint-disable-next-line react/prop-types  
    (alerta.error ? '#EF4444' : '#60A5FA') + ', ' +
    // eslint-disable-next-line react/prop-types
    (alerta.error ? '#DC2626' : '#3B82F6') + ')',
    textAlign: 'center',
    padding: '0.75rem',
    borderRadius: '0.25rem',
    textTransform: 'uppercase',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '0.875rem',
    margin: '1rem 0',
  };

  return ( // eslint-disable-next-line react/prop-types
    <div style={alertaStyles}>{alerta.msg}</div>
  );
};

export default Alerta;
