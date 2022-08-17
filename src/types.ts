export interface SuperHero {
  id: string;
  name: string;
  alterEgo: string;
}

export interface User {
  id: string;
  channelId: string;
}

export interface Channel {
  id: string;
  courses: string[];
}

export interface Color {
  id: string;
  label: string;
}
