/**
 * Helper Function
 * Filters earthquakes by seeing if they fall within the current map bounds
 */

export const earthquakeFilter = (point, bounds) => {
  let eastBound = point.long < bounds.NE.long;
  let westBound = point.long > bounds.SW.long;
  let inLong;

  if (bounds.NE.long < bounds.SW.long) {
    inLong = eastBound || westBound;
  } else {
    inLong = eastBound && westBound;
  }

  let inLat = point.lat > bounds.SW.lat && point.lat < bounds.NE.lat;

  return inLat && inLong;
};
