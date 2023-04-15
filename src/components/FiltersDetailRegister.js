import {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Searchbar} from 'react-native-paper';
import ChipDetailRegister from './ChipDetailRegister';

const FiltersDetailRegister = ({searchToFilters}) => {
  const [filters, setFilters] = useState({
    search: '',
    onlyIncome: false,
    onlyOutcome: false,
    thisMonth: false,
    thisDay: false,
  });

  useEffect(() => {
    searchToFilters(filters);
  }, [filters]);

  const onChangeFilter = (name, value) => {
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  return (
    <>
      <Searchbar
        placeholder="Search"
        onChangeText={e => onChangeFilter('search', e)}
        value={filters.search}
        style={{margin: 10}}
      />

      <View
        style={{
          flexDirection: 'row',
          gap: 10,
          flexWrap: 'wrap',
          margin: 10,
          justifyContent: 'center',
        }}>
        <ChipDetailRegister
          nameOfFilter={filters.onlyIncome}
          disabledFilter={filters.onlyOutcome}
          showName="Income"
          onChangeFilter={() =>
            onChangeFilter('onlyIncome', !filters.onlyIncome)
          }
        />

        <ChipDetailRegister
          nameOfFilter={filters.onlyOutcome}
          disabledFilter={filters.onlyIncome}
          showName="Outcome"
          onChangeFilter={() =>
            onChangeFilter('onlyOutcome', !filters.onlyOutcome)
          }
        />

        <ChipDetailRegister
          nameOfFilter={filters.thisDay}
          showName="Today"
          onChangeFilter={() => onChangeFilter('thisDay', !filters.thisDay)}
          disabledFilter={filters.thisMonth}
        />

        <ChipDetailRegister
          nameOfFilter={filters.thisMonth}
          showName="This month"
          disabledFilter={filters.thisDay}
          onChangeFilter={() => onChangeFilter('thisMonth', !filters.thisMonth)}
        />
      </View>
    </>
  );
};

export default FiltersDetailRegister;
