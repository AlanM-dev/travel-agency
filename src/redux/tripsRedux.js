/* SELECTORS */


export const getAllTrips = ({trips}) => trips;

export const getFilteredTrips = ({trips, filters}) => {
  let output = trips;

  // filter by search phrase
  if(filters.searchPhrase){
    const pattern = new RegExp(filters.searchPhrase, 'i');
    output = output.filter(trip => pattern.test(trip.name));
  }

  // TODO - filter by duration
  if(filters.duration){
    output = output.filter(trip => trip.days >= filters.duration.from && trip.days <= filters.duration.to);
  }

  // TODO - filter by tags
  if(filters.tags && filters.tags.length > 0){
    output = output.filter(trip => {
      let isOk = true;
      for(let tag of trip.tags){
        if(!filters.tags.includes(tag))
          isOk = false;
      }
      return isOk;

    });
  }

  // TODO - sort by cost descending (most expensive goes first)

  return output;
};

export const getTripById = ({trips}, tripId) => {
  const filtered = trips;

  // TODO - filter trips by tripId

  console.log('filtering trips by tripId:', tripId, filtered);
  return filtered.length ? filtered.find(function(trip){
    return trip.id == tripId;
  }) : {error: true};
};

export const getTripsForCountry = ({trips}, countryCode) => {
  const filtered = trips;

  // TODO - filter trips by countryCode

  console.log('filtering trips by countryCode:', countryCode, filtered);
  return filtered.length ? filtered.filter(function(trip){
    return trip.country.code == countryCode;
  }) : [{error: true}];
};

/* ACTIONS */

/*
// action name creator
const reducerName = 'trips';
const createActionName = name => `app/${reducerName}/${name}`;

// action types


// action creators


// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
 */
