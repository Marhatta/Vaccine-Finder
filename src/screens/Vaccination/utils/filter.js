export const toggleFilter = (newFilter, activeFilters) => {
  let filters = [];
  if (!activeFilters) {
    filters.push(newFilter);
    return filters;
  }
  //make a local copy of active filters
  filters = [...activeFilters];
  let filterIndex = filters.findIndex(filter => filter.id === newFilter.id);
  if (filterIndex > -1) {
    filters.splice(filterIndex, 1);
  } else {
    filters.push(newFilter);
  }
  return filters;
};

export const applyDistrictFilters = (activeFilters, centerList) => {
  let centers = [];
  //for no filters selected, return the center list as is
  if (activeFilters.length === 0) {
    return [...centerList];
  }
  for (
    let currentFilterIndex = 0;
    currentFilterIndex < activeFilters.length;
    currentFilterIndex++
  ) {
    let filterBy = activeFilters[currentFilterIndex].filterBy;
    let filterName = activeFilters[currentFilterIndex].filterName;
    if (filterBy === 'vaccineName') {
      centers = [
        ...centers,
        ...centerList.filter(
          center => center.vaccine.toLowerCase() === filterName.toLowerCase(),
        ),
      ];
    } else if (filterBy === 'age') {
      centers = [
        ...centers,
        ...centerList.filter(center =>
          filterName.includes(center.min_age_limit),
        ),
      ];
    } else if (filterBy === 'price') {
      centers = [
        ...centers,
        ...centerList.filter(
          center => center.fee_type.toLowerCase() === filterName.toLowerCase(),
        ),
      ];
    }
  }

  //return unique centers
  //because multiple filters can cause to append same centers
  centers = centers.filter(
    (value, index, self) => self.indexOf(value) === index,
  );
  return centers;
};

export const applyPincodeFilters = (activeFilters, centerList) => {
  return centerList;
};
