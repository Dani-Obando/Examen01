import axios from "axios";

const BASE_URL = "http://wafi.iit.cnr.it/openervm/api/getPlaces";
const DETAILS_URL = "http://tour-pedia.org/api/getPlaceDetails";

export const getPlaces = async (location, category = "", keyword = "") => {
  try {
    const response = await axios.get(BASE_URL, {
      params: { location, category, keyword },
    });
    return response.data.slice(0, 30);
  } catch (error) {
    console.error("Error fetching places:", error);
    return [];
  }
};

export const getPlaceDetails = async (id) => {
  try {
    const response = await axios.get(`${DETAILS_URL}?id=${id}`);
    const data = response.data;
    return {
      name: data.name,
      address: data.address,
      phone_number: data.phone_number || "No disponible",
      international_phone_number:
        data.international_phone_number || "No disponible",
      website: data.website || "No disponible",
      opening_hours: data.opening_hours || "No disponible",
      sources: Object.entries(data.external_urls || {})
        .filter(([key, value]) => value)
        .map(([key, value]) => ({ source: key, url: value })),
    };
  } catch (error) {
    console.error("Error fetching place details:", error);
    return null;
  }
};
