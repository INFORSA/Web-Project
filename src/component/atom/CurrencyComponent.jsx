import PropTypes from 'prop-types';

function CurrencyComponent({ amount }) {
  const formattedCurrency = amount.toLocaleString('id-ID', {
    style: 'currency',
    currency: 'IDR'
  });

  return <span className='text-md lg:text-4xl font-bold'>{formattedCurrency}</span>;
}

CurrencyComponent.propTypes = {
  amount: PropTypes.number.isRequired
};

export default CurrencyComponent;
