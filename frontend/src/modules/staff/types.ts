export interface Staff {
  id: string;
  title: string;
  fullTitle: string;
  name: string;
  imageUrl: string;
  academicPosition: string;
  academicPositionGroup: string;
  phone: string;
  email: string;
  order: number;
}

export interface Room {
  roomId: string;
  title: string;
}
export interface Subject {
  subjectId: string;
  title: string;
}

export interface StaffDetail extends Omit<Staff, 'order'> {
  rooms: Room[];
  info: JSX.Element;
  research: JSX.Element;
  subjects: Subject[];
}

export interface StaffGroups {
  title: string;
  staffs: Staff[];
  order: number;
}
