export interface WeddingVenue {
  id: 'virasatHotel' | 'prayagInn' | 'chaddhaGarden' | 'customCelebrationVenue';
  displayName: string;
  mapsUrl: string;
}

export const weddingVenues: Record<WeddingVenue['id'], WeddingVenue> = {
  virasatHotel: {
    id: 'virasatHotel',
    displayName: 'Virasat The Hotel by Triveni Grand',
    mapsUrl: 'https://maps.app.goo.gl/oMWxyPqhk5Qoha7c6?g_st=ac',
  },
  prayagInn: {
    id: 'prayagInn',
    displayName: 'Hotel Prayag Inn',
    mapsUrl: 'https://maps.app.goo.gl/G1kwzaZy219vZDPp6?g_st=ac',
  },
  chaddhaGarden: {
    id: 'chaddhaGarden',
    displayName: 'Chaddha Garden',
    mapsUrl: 'https://maps.app.goo.gl/DTGp6HgsZAsFVcA98',
  },
  customCelebrationVenue: {
    id: 'customCelebrationVenue',
    displayName: 'Residence',
    mapsUrl: 'https://maps.app.goo.gl/ykHd3N538t9HeJXv8',
  },
};
