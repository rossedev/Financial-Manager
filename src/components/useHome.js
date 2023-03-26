import {useEffect, useState} from 'react';
import {useAppContext} from '../context/Provider';

const useHome = () => {
  const {state} = useAppContext();
  const [summaryAccount, setSummaryAccount] = useState(0);

  useEffect(() => {
    if (state.account.length <= 0) {
      setSummaryAccount({
        ...summaryAccount,
        total: 0,
        income: 0,
        outcome: 0,
      });
      return;
    }

    const _sumNumbers = arrays => {
      let count = 0;
      if (arrays.length > 0) {
        arrays.forEach(element => {
          count += parseInt(element.value);
        });
      }

      return count;
    };

    const _totalAccount = arrays => {
      let count = 0;
      if (arrays.length > 0) {
        arrays.forEach(element => {
          if (element.type === 'ingreso') {
            count += parseInt(element.value);
          } else {
            count -= parseInt(element.value);
          }
        });
      }

      return count;
    };

    const total = _totalAccount(state.account);
    const income = _sumNumbers(state.account.filter(e => e.type === 'ingreso'));
    const outcome = _sumNumbers(state.account.filter(e => e.type === 'egreso'));

    setSummaryAccount({
      ...summaryAccount,
      total,
      income,
      outcome,
    });
  }, [state.account]);

  return {
    summaryAccount,
  };
};

export default useHome;
