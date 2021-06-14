import endpoint from "../endpoint";

export interface Name {
  last: string;
  first: string;
}

export interface Location {
  latitude: number;
  longitude: number;
}

export interface Friend {
  _id: string;
  name: Name;
  email: string;
  picture: string;
  location: Location;
}

class FriendService {
  getFriends() {
    return endpoint.get<Friend[]>(`/templates/Xp8zvwDP14dJ/data`);
  }
}

export default new FriendService();
